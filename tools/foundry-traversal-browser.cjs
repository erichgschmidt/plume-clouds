/* Instrument the production shader in-memory; never alter geometry/coverage. */
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const label=process.argv.includes('--before')?'before':'after';
const shaderArgument=process.argv.indexOf('--shader'),shaderOverride=shaderArgument<0?null:process.argv[shaderArgument+1];
(async()=>{const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--enable-webgl','--ignore-gpu-blocklist']});try{
 const page=await browser.newPage({viewport:{width:140,height:140}});await page.setContent('<canvas style="width:128px;height:128px"></canvas>');
 for(const f of ['src/foundry-shaders.js','src/foundry-renderer.js','src/foundry-assets.js','assets/foundry-default.js'])await page.addScriptTag({content:fs.readFileSync(shaderOverride&&f==='src/foundry-shaders.js'?shaderOverride:path.join(__dirname,'..',f),'utf8')});
 const result=await page.evaluate(()=>{
  const originalCloud=FoundryShaders.cloud;let shader=originalCloud;const loop='for(int stepIndex=0;stepIndex<2052;stepIndex++){',marker='if(h.alpha<.01||uOpacity<=0.)discard;';
  if(!shader.includes(loop)||!shader.includes(marker))throw Error('Traversal instrumentation markers changed');
  shader=shader.replace('Hit reproject(', 'float diagnosticMax=0.,diagnosticExhaustions=0.;\nHit reproject(').replace(loop,loop+'diagnosticMax=max(diagnosticMax,float(stepIndex+1));if(stepIndex==2051)diagnosticExhaustions+=1.;');
  shader=shader.replace(marker,'color=vec4(0,0,0,1);surface=vec4(0);material=vec4(diagnosticMax,diagnosticExhaustions,0,1);return;');FoundryShaders.cloud=shader;
  const R=new BakedCloudRenderer(document.querySelector('canvas'));R.load(FoundryAssets.parse(FOUNDRY_DEFAULT));
  const settings={pixelSize:1,pixelSnap:false,detailMode:'full',breathing:0,shadow:0,ao:0,transmission:0,sixWay:0,bands:0,haze:0,sunAz:25,sunAlt:40};
  const cases=[[0,-30,0,0,0,1.35],[.00001,-30.00001,0,0,0,1.35],[.001,-30.001,70,.031,.027,1.35],[17.5,-45,0,0,0,1.35],[.01,-60.01,80,0,0,1.35],[34.9,-.001,65,0,0,1.35],[-.001,-84.999,80,0,0,1.35]];
  for(const offset of[0,.00001,.001,.01,.1])for(const scale of[.5,1,2,4])for(const sign of[-1,1])cases.push([sign*.01,-30+sign*.01,65,offset,-offset,scale]);
  cases.push([.01,-29.99,0,0,0,.5],[.01,-29.99,0,.00001,-.00001,.5]);
  const frames=[];for(const [yaw,pitch,cameraPitch,x,y,scale]of cases){
   const start=performance.now();R.render([{id:1,x,y,scale,yaw,pitch,cameraPitch,distance:2,opacity:1}],0,{...settings,cameraPitch});const gl=R.gl,raw=new Float32Array(128*128*4);
   gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT2);gl.readPixels(0,0,128,128,gl.RGBA,gl.FLOAT,raw);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
   let exhaustedPixels=0,maxIterations=0,iterations=0,sampled=0;for(let i=0;i<raw.length;i+=4)if(raw[i+3]){sampled++;maxIterations=Math.max(maxIterations,raw[i]);iterations+=raw[i];if(raw[i+1]>0)exhaustedPixels++;}
   frames.push({yaw,pitch,cameraPitch,x,y,scale,exhaustedPixels,maxIterations,meanIterations:iterations/sampled,ms:performance.now()-start});
  }
  R.dispose();FoundryShaders.cloud=originalCloud;
  const normal=new BakedCloudRenderer(document.querySelector('canvas'));normal.load(FoundryAssets.parse(FOUNDRY_DEFAULT));
  const pose={id:1,x:0,y:0,scale:.5,yaw:.01,pitch:-29.99,cameraPitch:0,distance:2,opacity:1};
  const syncPixel=new Uint8Array(4);for(let i=0;i<3;i++){normal.render([pose],0,{...settings,cameraPitch:0});normal.gl.finish();normal.gl.readPixels(64,64,1,1,normal.gl.RGBA,normal.gl.UNSIGNED_BYTE,syncPixel);}
  const start=performance.now();for(let i=0;i<12;i++){normal.render([pose],0,{...settings,cameraPitch:0});normal.gl.finish();normal.gl.readPixels(64,64,1,1,normal.gl.RGBA,normal.gl.UNSIGNED_BYTE,syncPixel);}
  const normalMs=(performance.now()-start)/12;
  // Read rendered color before another frame/context can clear the drawing buffer.
  const pixels=new Uint8Array(128*128*4);normal.gl.readPixels(0,0,128,128,normal.gl.RGBA,normal.gl.UNSIGNED_BYTE,pixels);
  const preview=document.createElement('canvas');preview.width=128;preview.height=128;preview.style='width:512px;height:512px;image-rendering:pixelated';
  const ctx=preview.getContext('2d'),image=ctx.createImageData(128,128);for(let y=0;y<128;y++)image.data.set(pixels.subarray(y*512,(y+1)*512),(127-y)*512);ctx.putImageData(image,0,0);document.querySelector('canvas').remove();document.body.append(preview);
  return {frames,normalMs,stepBound:normal.asset.w+normal.asset.h+4,error:normal.gl.getError()};
 });
 await page.screenshot({path:path.join(os.tmpdir(),'foundry-traversal-'+label+'.png'),fullPage:true});
 fs.writeFileSync(path.join(os.tmpdir(),'foundry-traversal-'+label+'-metrics.json'),JSON.stringify(result,null,2));console.log('Foundry traversal',JSON.stringify({frames:result.frames.length,exhaustedFrames:result.frames.filter(f=>f.exhaustedPixels),maxIterations:Math.max(...result.frames.map(f=>f.maxIterations)),normalMs:result.normalMs,error:result.error}));assert.equal(result.error,0);assert.ok(result.frames.every(f=>f.exhaustedPixels===0),'Every ray must finish without exhausting the traversal bound');assert.ok(result.frames.every(f=>f.maxIterations<=result.stepBound),'Map width+height+4 bounds traversal independently of camera angle');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
