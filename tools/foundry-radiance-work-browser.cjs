/* Same-context shader optimization audit. Native optical color is exact; real
 * midpoint rasterization can differ at bounded fringe footprints after compiler
 * specialization. Independent required analytic oracles remain unchanged in
 * foundry-wisp-browser, foundry-partial-boundary-browser and foundry-volume-browser. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),fixtures=require('./foundry-volume-fixtures.cjs');
const root=path.join(__dirname,'..'),current=fs.readFileSync(path.join(root,'src/foundry-shaders.js'),'utf8');
const baseline=process.env.RADIANCE_WORK_BASELINE?fs.readFileSync(process.env.RADIANCE_WORK_BASELINE,'utf8'):require('./foundry-radiance-work-baseline.cjs').referenceRadianceWorkShader(current);
const serialize=a=>({...a,data:a.data.map(v=>v.map(m=>[...m])),radiance:a.radiance.map(v=>v.map(m=>[...m]))});
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:420,height:360}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setContent('<canvas style="width:320px;height:240px"></canvas>');
  for(const f of ['src/foundry-assets.js','assets/skypaint-default.js','src/foundry-scene.js','src/foundry-renderer.js'])await page.addScriptTag({content:fs.readFileSync(path.join(root,f),'utf8')});
  await page.addScriptTag({content:'window.frozenOpticalAsset='+fixtures.frozenOpticalAsset.toString()+';'});
  await page.addScriptTag({content:baseline});await page.evaluate(()=>{window.workBefore=new BakedCloudRenderer(document.querySelector('canvas'));workBefore.radianceCloud=workBefore.normalCloud;workBefore.load(FoundryAssets.parse(frozenOpticalAsset(SKYPAINT_DEFAULT)));});
  await page.addScriptTag({content:current});
  const result=await page.evaluate(synthetic=>{
   const before=workBefore,after=new BakedCloudRenderer(document.querySelector('canvas'));after.load(FoundryAssets.parse(frozenOpticalAsset(SKYPAINT_DEFAULT)));const gl=after.gl,W=320,H=240,N=W*H;
   const settings={pixelSize:1,detailMode:'full',breathing:0,haze:0,shadow:0,relighting:false,exposure:1.25,skyColor:[.09,.2,.3]},packet={id:1,x:0,y:0,scale:1.1,yaw:0,pitch:0,distance:6,opacity:1,depthScale:.01};
   function frame(r,packets,extra={}){
    r.render(packets,0,{...settings,...extra});const rgb=new Uint8Array(N*4),color=new Uint8Array(N*4),hdr=new Float32Array(N*4),surface=new Float32Array(N*4);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,rgb);gl.bindFramebuffer(gl.FRAMEBUFFER,r.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,color);gl.readBuffer(gl.COLOR_ATTACHMENT2);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,hdr);gl.readBuffer(gl.COLOR_ATTACHMENT1);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,surface);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return {rgb,color,hdr,surface};
   }
   function compare(a,b){const diff=(x,y)=>x.reduce((n,v,i)=>n+(v!==y[i]?1:0),0);let depth=0,ids=0,normals=0,maxRGB=0,maxHDR=0,maxDepth=0,alphaZeroChanged=0;for(let i=0;i<N;i++){depth+=a.surface[i*4+2]!==b.surface[i*4+2];ids+=a.surface[i*4+3]!==b.surface[i*4+3];normals+=a.surface[i*4]!==b.surface[i*4]||a.surface[i*4+1]!==b.surface[i*4+1];maxDepth=Math.max(maxDepth,Math.abs(a.surface[i*4+2]-b.surface[i*4+2]));alphaZeroChanged+=(a.hdr[i*4+3]>0)!==(b.hdr[i*4+3]>0);for(let k=0;k<4;k++){maxRGB=Math.max(maxRGB,Math.abs(a.rgb[i*4+k]-b.rgb[i*4+k]));maxHDR=Math.max(maxHDR,Math.abs(a.hdr[i*4+k]-b.hdr[i*4+k]));}}return {rgb:diff(a.rgb,b.rgb),color:diff(a.color,b.color),hdr:diff(a.hdr,b.hdr),depth,ids,normals,maxRGB,maxHDR,maxDepth,alphaZeroChanged};}
   const cases=[];for(const view of after.asset.views){const list=[{...packet,...view}];cases.push({...view,...compare(frame(before,list),frame(after,list))});}
   for(const [yaw,pitch,cameraPitch]of [[-17.5,-72.5,80],[17.5,-45,45],[-17.5,-15,0],[0,-85,80]])for(const scale of [.18,.7,1.3]){const list=[{...packet,yaw,pitch,cameraPitch,scale}];cases.push({yaw,pitch,cameraPitch,scale,...compare(frame(before,list,{detailMode:'auto',haze:.3}),frame(after,list,{detailMode:'auto',haze:.3}))});}
   const stress=Array.from({length:12},(_,i)=>({...packet,id:100+i,x:(i%4-1.5)*.45,y:(Math.floor(i/4)-1)*.4,scale:.7,yaw:(i%3-1)*17.5,pitch:-45,distance:4+i*.6}));cases.push({stress:true,...compare(frame(before,stress),frame(after,stress))});
   const scene=new FoundryScene({settings:{count:16}}),seeded=scene.project(W/H),sync=new Uint8Array(4),timing=[];
   function timed(r,list){const start=performance.now();r.render(list,0,settings);gl.finish();gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,sync);return performance.now()-start;}
   for(const [name,list]of [['seeded',seeded],['stress12',stress]]){for(let i=0;i<3;i++){timed(before,list);timed(after,list);}const old=[],now=[];for(let i=0;i<8;i++){if(i%2){now.push(timed(after,list));old.push(timed(before,list));}else{old.push(timed(before,list));now.push(timed(after,list));}}timing.push({name,drawn:after.stats.drawn,before:old,after:now});}
   function restore(a){return {...a,data:a.data.map(v=>v.map(m=>new Uint8Array(m))),radiance:a.radiance.map(v=>v.map(m=>new Uint8Array(m)))};}
   for(const fixture of synthetic){const a=restore(fixture);before.load(a);after.load(a);for(const yaw of [-20,-.01,0,.01,20]){const list=[{...packet,yaw,scale:.8}];cases.push({synthetic:true,yaw,...compare(frame(before,list),frame(after,list))});}}
   const error=gl.getError();before.dispose();after.dispose();return {cases,timing,error};
  },[serialize(fixtures.slab({hole:true,poison:true})),serialize(fixtures.slab({layers:[{front:.5,back:.1,sigma:1,color:[.8,.15,.05]},{front:-.1,back:-.6,sigma:2,color:[.05,.25,.9]}]}))]);
  const native=result.cases.filter(c=>!c.synthetic&&!c.stress&&c.scale===undefined),synthetic=result.cases.filter(c=>c.synthetic),midpoints=result.cases.filter(c=>c.stress||c.scale!==undefined);
  const summary={nativeCases:native.length,syntheticCases:synthetic.length,midpointCases:midpoints.length,maxMidpointRGB:Math.max(...midpoints.map(c=>c.maxRGB)),maxMidpointHDR:Math.max(...midpoints.map(c=>c.maxHDR)),maxChangedCoveragePixels:Math.max(...midpoints.map(c=>c.alphaZeroChanged)),maxChangedInstancePixels:Math.max(...midpoints.map(c=>c.ids)),maxNativeDistanceError:Math.max(...native.map(c=>c.maxDepth))};
  const output=path.join(os.tmpdir(),'foundry-radiance-work-metrics.json');fs.writeFileSync(output,JSON.stringify({...result,summary},null,2));console.log('Radiance work native equivalence and midpoint raster diagnostics',JSON.stringify({summary,timing:result.timing,output}));assert.equal(result.error,0);assert.deepEqual(errors,[]);
  assert.equal(native.length,15);assert(native.every(c=>c.rgb===0&&c.color===0&&c.hdr===0&&c.ids===0&&c.alphaZeroChanged===0),'native capture RGB/HDR and coverage must remain exactly unchanged');assert(summary.maxNativeDistanceError<=1e-6,'native surface distance changes are limited to float32 rounding');
  assert(synthetic.every(c=>c.rgb===0&&c.color===0&&c.hdr===0&&c.depth===0&&c.ids===0),'analytic flat optical fixtures preserve all color/depth outputs exactly');
  // At 320x240 this allows at most 0.021% of the frame to change occupied
  // footprint ownership. It does not assert byte equality at real midpoints.
  assert(midpoints.every(c=>c.color===0&&c.alphaZeroChanged<=16&&c.ids<=16),'specialization must keep midpoint coverage/instance changes within 16 fringe pixels');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
