/* Focused optical/angular oracle. No author density or natural-hole assumptions. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=path.resolve(__dirname,'..'),tmp=os.tmpdir(),label=process.env.WISP_LABEL||'current';
const source={renderer:fs.readFileSync(path.join(root,'src/foundry-renderer.js'),'utf8'),shaders:fs.readFileSync(path.join(root,'src/foundry-shaders.js'),'utf8')};
const baselinePaths={renderer:path.join(tmp,'foundry-wisp-baseline-renderer.js'),shaders:path.join(tmp,'foundry-wisp-baseline-shaders.js')};
if(process.env.WISP_CAPTURE_BASELINE==='1')for(const k of Object.keys(source))fs.writeFileSync(baselinePaths[k],source[k]);
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:1050,height:800}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setContent('<style>body{margin:0;background:#17232b;color:white;font:13px system-ui}#c{width:256px;height:192px}#sheet{display:grid;grid-template-columns:repeat(4,256px);gap:6px;padding:6px}.title{height:34px}canvas{display:block;image-rendering:pixelated}</style><canvas id="c"></canvas><div id="sheet"></div>');
  for(const k of ['shaders','renderer'])await page.addScriptTag({content:source[k]});
  const result=await page.evaluate(()=>{
   const W=256,H=192,N=W*H,R=new BakedCloudRenderer(document.querySelector('#c')),w=64,h=48,views=[{yaw:-15,pitch:0},{yaw:15,pitch:0}],data=views.map(()=>Array.from({length:4},()=>new Uint8Array(w*h*4))),radiance=views.map(()=>Array.from({length:2},()=>new Uint8Array(w*h*4)));
   const encode=(c,a)=>[...c.map(x=>Math.round(Math.sqrt(x/4)*255)),Math.round(a*255)],pack=z=>{const q=Math.round((z*.5+.5)*65535);return[q>>8,q&255];};
   const wisp=encode([.45*.6,.25*.6,.10*.6],.6),core=encode([.7*.8,.65*.8,.6*.8],.8);
   for(let v=0;v<2;v++)for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const px=((x+.5)/w-.5)*2*w/h,py=((y+.5)/h-.5)*2,i=(y*w+x)*4,hole=Math.hypot(px,py+.30)<.13,body=Math.abs(px)<.7&&py>-.65&&py<.12,fringe=Math.abs(px)<.55&&py>=.12&&py<.67;
    data[v][0].set([...pack(0),...pack(-.25)],i);
    if(!hole&&(body||fringe)){data[v][1].set([128,128,255,255],i);radiance[v][0].set(body?core:v?wisp:[0,0,0,0],i);}else radiance[v][0].set([255,0,255,0],i);
   }
   const asset={w,h,halfHeight:1,range:1,views,data,radiance,appearance:'baked-radiance-v1',radianceScale:4};R.load(asset);
   const settings={pixelSize:1,pixelSnap:false,detailMode:'full',breathing:0,haze:0,shadow:0,exposure:1.25,skyColor:[.1,.25,.45]},packet={id:1,x:0,y:0,scale:.85,yaw:0,pitch:0,distance:6,depthScale:.01,opacity:1};
   function render(yaw,sky=settings.skyColor,list=null,full=false){R.render(list||[{...packet,yaw}],0,{...settings,skyColor:sky});const gl=R.gl,rgba=new Uint8Array(full?N*4:4),hdr=new Float32Array(4),hole=new Uint8Array(4),body=new Float32Array(4);gl.readPixels(full?0:128,full?0:135,full?W:1,full?H:1,gl.RGBA,gl.UNSIGNED_BYTE,rgba);gl.readPixels(128,71,1,1,gl.RGBA,gl.UNSIGNED_BYTE,hole);gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT2);gl.readPixels(128,135,1,1,gl.RGBA,gl.FLOAT,hdr);gl.readPixels(128,96,1,1,gl.RGBA,gl.FLOAT,body);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return{rgba:Array.from(rgba),hdr:Array.from(hdr),hole:Array.from(hole),body:Array.from(body)};}
   function tile(title,f){const box=document.createElement('div'),name=document.createElement('div'),c=document.createElement('canvas');name.className='title';name.textContent=title;c.width=W;c.height=H;const ctx=c.getContext('2d'),im=ctx.createImageData(W,H);for(let y=0;y<H;y++)im.data.set(f.rgba.slice(y*W*4,(y+1)*W*4),(H-1-y)*W*4);ctx.putImageData(im,0,0);box.append(name,c);document.querySelector('#sheet').append(box);}
   const weightCases=[],baseCoverage=new Uint8Array(data[0][1]);for(const coverageMode of ['radiance-only','missing-geometry']){data[0][1]=new Uint8Array(baseCoverage);if(coverageMode==='missing-geometry')for(let y=0;y<h;y++)if(((y+.5)/h-.5)*2>=.12)for(let x=0;x<w;x++)data[0][1][(y*w+x)*4+3]=0;R.load(asset);for(const sky of [[.015,.025,.04],[.93,.90,.85]])for(const t of [0,.01,.025,.05,.075,.10,.125,.25,.5,.75,1]){const f=render(-15+30*t,sky);weightCases.push({coverageMode,t,sky,...f});if([0,.05,.125,.5,1].includes(t))tile(`Wisp ${coverageMode} weight ${t} ${sky[0]<.1?'dark':'light'}`,render(-15+30*t,sky,null,true));}}
   const dense=[];for(let i=0;i<=200;i++){const t=i/200,f=render(-15+30*t);dense.push({t,hdr:f.hdr,rgba:f.rgba,hole:f.hole});}
   const sync=new Uint8Array(4),gl=R.gl,stress=Array.from({length:12},(_,i)=>({...packet,id:100+i,x:(i%4-1.5)*.4,y:(Math.floor(i/4)-1)*.35,scale:.65,yaw:-12+i*2,distance:4+i*.4}));
   for(let i=0;i<3;i++)R.render(stress,0,settings);gl.finish();const timing=[];for(let i=0;i<8;i++){const start=performance.now();R.render(stress,0,settings);gl.finish();gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,sync);timing.push(performance.now()-start);}
   // Keep live current renderer and fixture for optional same-context old/new timing.
   window.wispAudit={R,asset,settings,packet,stress};return{weightCases,dense,wisp,core,error:gl.getError(),timing};
  });
  let paired=null;
  if(process.env.WISP_COMPARE_BASELINE==='1'){
   for(const k of ['shaders','renderer'])await page.addScriptTag({content:fs.readFileSync(baselinePaths[k],'utf8')});
   paired=await page.evaluate(()=>{const a=wispAudit,old=new BakedCloudRenderer(document.querySelector('#c'));old.load(a.asset);const gl=old.gl,sync=new Uint8Array(4),measure=r=>{const t=performance.now();r.render(a.stress,0,a.settings);gl.finish();gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,sync);return performance.now()-t;};for(let i=0;i<3;i++){measure(old);measure(a.R);}const samples=[];for(let i=0;i<10;i++){if(i%2)samples.push({current:measure(a.R),baseline:measure(old)});else samples.push({baseline:measure(old),current:measure(a.R)});}old.dispose();return samples;});
  }
  const decoded=bytes=>bytes[3]?[...bytes.slice(0,3).map(x=>(x/255)**2*4),bytes[3]/255]:[0,0,0,0],wisp=decoded(result.wisp),core=decoded(result.core);
  const linear=c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4,srgb=c=>c<=.0031308?c*12.92:1.055*c**(1/2.4)-.055;
  const display=(r,sky)=>r.slice(0,3).map((c,k)=>Math.round(srgb(1-Math.exp(-1.25*c+Math.log(1-linear(sky[k]))*(1-r[3])))*255));
  let maxWeightError=0,maxBodyError=0,maxBackgroundError=0,holeLeaks=0,maxDisplayOracleError=0;const failures=[];
  for(const f of result.weightCases){const expected=wisp.map(x=>x*f.t);maxWeightError=Math.max(maxWeightError,...f.hdr.map((x,k)=>Math.abs(x-expected[k])));maxBodyError=Math.max(maxBodyError,...f.body.map((x,k)=>Math.abs(x-core[k])));const want=display(expected,f.sky);maxDisplayOracleError=Math.max(maxDisplayOracleError,...want.map((x,k)=>Math.abs(x-f.rgba[k])));if(f.t===0)maxBackgroundError=Math.max(maxBackgroundError,...f.sky.map((x,k)=>Math.abs(Math.round(x*255)-f.rgba[k])));if(f.hole.slice(0,3).some((x,k)=>Math.abs(x-Math.round(f.sky[k]*255))>1))holeLeaks++;}
  let maxAlphaStep=0,maxRGBStep=0,maxDenseOracleError=0;for(let i=0;i<result.dense.length;i++){const f=result.dense[i];if(f.hole.slice(0,3).some((x,k)=>Math.abs(x-Math.round([.1,.25,.45][k]*255))>1))holeLeaks++;maxDenseOracleError=Math.max(maxDenseOracleError,Math.abs(f.hdr[3]-wisp[3]*f.t));if(i){maxAlphaStep=Math.max(maxAlphaStep,Math.abs(f.hdr[3]-result.dense[i-1].hdr[3]));maxRGBStep=Math.max(maxRGBStep,...f.rgba.slice(0,3).map((x,k)=>Math.abs(x-result.dense[i-1].rgba[k])));}}
  if(maxWeightError>.002)failures.push(`Angular optical contribution must retain missing-view weight: max HDR error ${maxWeightError}`);
  if(maxDisplayOracleError>3)failures.push(`Displayed wisp must match known background optical oracle: ${maxDisplayOracleError} bytes`);
  if(maxBodyError>.002)failures.push(`Stable opaque/core density changed: ${maxBodyError}`);
  if(maxAlphaStep>wisp[3]/200+.002)failures.push(`Dense sweep opacity jumps exceed linear angular oracle: ${maxAlphaStep}`);
  if(holeLeaks||maxBackgroundError>1)failures.push('True empty rays must preserve exact background');
  const summary={maxWeightError,maxDisplayOracleError,maxBodyError,maxBackgroundError,holeLeaks,maxAlphaStep,maxRGBStep,maxDenseOracleError,error:result.error,timing:result.timing,paired,failures};
  const output=path.join(tmp,`foundry-wisp-${label}-metrics.json`),sheet=path.join(tmp,`foundry-wisp-${label}-sheet.png`);fs.writeFileSync(output,JSON.stringify({summary,weightCases:result.weightCases,dense:result.dense},null,2));await page.evaluate(()=>{wispAudit.R.dispose();document.querySelector('#c').remove();});await page.screenshot({path:sheet,fullPage:true});
  console.log('Wisp angular/halo/hole audit',JSON.stringify({...summary,output,sheet,baselinePaths}));assert.equal(result.error,0);assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
