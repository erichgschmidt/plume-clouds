/* Independent optical-transfer acceptance. Author/baker code is never loaded. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fixtures=require('./foundry-volume-fixtures.cjs');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:360,height:360}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setContent('<canvas style="width:256px;height:256px"></canvas>');
  for(const f of ['src/foundry-shaders.js','src/foundry-renderer.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
  const fixture=fixtures.slab(),two=fixtures.slab({layers:[{front:.5,back:.1,sigma:1,color:[.8,.15,.05]},{front:-.1,back:-.6,sigma:2,color:[.05,.25,.9]}]}),hole=fixtures.slab({hole:true,poison:true});
  // JSON serializes typed arrays as objects; carry byte arrays explicitly.
  const serialize=a=>({...a,data:a.data.map(v=>v.map(m=>Array.from(m))),radiance:a.radiance.map(v=>v.map(m=>Array.from(m)))});
  const metrics=await page.evaluate(({fixture,two,hole})=>{
   const R=new BakedCloudRenderer(document.querySelector('canvas')),W=256,H=256;
   function restore(a){return {...a,data:a.data.map(v=>v.map(m=>new Uint8Array(m))),radiance:a.radiance.map(v=>v.map(m=>new Uint8Array(m)))};}
   const packet={id:1,x:0,y:0,scale:.8,yaw:0,pitch:0,distance:5,opacity:1,phase:0,depthScale:.01};
   const settings={pixelSize:1,pixelSnap:false,detailMode:'full',breathing:0,shadow:0,haze:0,bands:0,exposure:1.2};
   function draw(list,sky=[.1,.25,.5],extra={}){R.render(list,0,{...settings,skyColor:sky,...extra});const gl=R.gl,raw=new Uint8Array(W*H*4);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,raw);return raw;}
   const pixel=(raw,x=128,y=128)=>Array.from(raw.slice((y*W+x)*4,(y*W+x)*4+4));
   const diff=(a,b)=>a.reduce((max,x,i)=>Math.max(max,Math.abs(x-b[i])),0);
   R.load(restore(fixture));
   const backgrounds=[[0,0,0],[.1,.25,.5],[.9,.7,.2]],cases=[];
   for(const sky of backgrounds)for(const exposure of [.35,1.2,2.5])for(const opacity of [0,.25,.7,1])cases.push({sky,exposure,opacity,actual:pixel(draw([{...packet,opacity}],sky,{exposure}))});
   const before=draw([packet]),after=draw([packet],[.1,.25,.5],{palette:'dusk',ao:0,sixWay:0,sunAz:90,sunAlt:-20,bands:8});
   const paletteDiff=diff(before,after),near={...packet,id:2,distance:3,opacity:.4},far={...packet,id:3,distance:8,opacity:.65};
   const stack=draw([near,far]),reverse=draw([far,near]),stackPixel=pixel(stack),singlePixel=pixel(draw([near]));
   R.load(restore(two));const local=pixel(draw([packet]));
   R.load(restore(hole));const gap=draw([packet]),empty=draw([]);let leaked=0;
   for(let y=116;y<140;y++)for(let x=116;x<140;x++)if(diff(pixel(gap,x,y),pixel(empty,x,y))>1)leaked++;
   const exterior=pixel(gap,10,10),holePixel=pixel(gap),emptyPixel=pixel(empty);
   // Continuous view-weight perturbations must not expose square empty regions.
   const transition=restore(fixture);transition.views=[{yaw:-20,pitch:0},{yaw:0,pitch:0},{yaw:20,pitch:0}];transition.data=[0,1,2].map(()=>transition.data[0]);transition.radiance=[0,1,2].map(()=>transition.radiance[0]);R.load(transition);
   const a=draw([{...packet,yaw:-.01}]),b=draw([{...packet,yaw:.01}]);let interiorJump=0,interiorSamples=0;
   for(let y=90;y<166;y++)for(let x=90;x<166;x++){interiorJump=Math.max(interiorJump,diff(pixel(a,x,y),pixel(b,x,y)));interiorSamples++;}
   // Timings include finish + synchronous read, so are comparable diagnostics,
   // not a cross-machine frame-rate assertion. Near-view cost must remain bounded.
   const timing=[];
   for(const yaw of [0,10,19]){for(let i=0;i<2;i++)draw([{...packet,yaw}]);R.gl.finish();const start=performance.now();for(let i=0;i<6;i++){draw([{...packet,yaw}]);R.gl.finish();}timing.push({yaw,msPerFrame:(performance.now()-start)/6});}
   R.dispose();return {cases,paletteDiff,stackPixel,singlePixel,orderDiff:diff(stack,reverse),local,leaked,exterior,holePixel,emptyPixel,interiorJump,interiorSamples,timing,error:R.gl.getError()};
  },{fixture:serialize(fixture),two:serialize(two),hole:serialize(hole)});
  // Optical oracle: Beer-Lambert fixture quantization + inverse exposure sky
  // mapping, independently implemented in JS rather than copied shader code.
  const linear=c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4;
  const srgb=c=>c<=.0031308?12.92*c:1.055*c**(1/2.4)-.055;
  function expected(ray,sky,exposure=1.2){return ray.slice(0,3).map((c,k)=>Math.round(srgb(1-Math.exp(-exposure*(c-Math.log(1-linear(sky[k]))/exposure*(1-ray[3]))))*255));}
  function decoded(a,l){const i=(a.h/2*a.w+a.w/2)*4;return fixtures.decode(a.radiance[0][l].slice(i,i+4));}
  function close(actual,want,label,tolerance=3){actual.slice(0,3).forEach((v,k)=>assert(Math.abs(v-want[k])<=tolerance,`${label} channel${k}: got ${v}, expected ${want[k]}`));}
  const ray=decoded(fixture,0);
  for(const c of metrics.cases){close(c.actual,expected(ray.map(x=>x*c.opacity),c.sky,c.exposure),'matching view, opacity '+c.opacity);if(c.opacity===0)close(c.actual,c.sky.map(x=>Math.round(x*255)),'empty sky survives exposure '+c.exposure,1);}
  const stackRay=fixtures.over(ray.map(x=>x*.4),ray.map(x=>x*.65));close(metrics.stackPixel,expected(stackRay,[.1,.25,.5]),'separated translucent instances');
  close(metrics.local,expected(fixtures.over(decoded(two,0),decoded(two,1)),[.1,.25,.5]),'two occupied volume intervals');
  assert.equal(metrics.orderDiff,0,'separated-instance optical result is independent of submission order');
  assert.equal(metrics.paletteDiff,0,'author-integrated radiance is not relit through the geometric palette');
  assert.equal(metrics.leaked,0,'zero-alpha colored texels never leak into an authentic hole');
  assert.deepEqual(metrics.holePixel,metrics.emptyPixel);assert.deepEqual(metrics.exterior,metrics.emptyPixel);
  assert(metrics.interiorJump<=3,'infinitesimal view change preserves homogeneous interior appearance');
  assert(metrics.timing.every(t=>Number.isFinite(t.msPerFrame)&&t.msPerFrame>0));assert.equal(metrics.error,0);assert.deepEqual(errors,[]);
  const output=path.join(os.tmpdir(),'foundry-volume-acceptance.json');fs.writeFileSync(output,JSON.stringify(metrics,null,2));
  console.log('Volume optical transfer, opacity, local layers, separated instances, empty-alpha isolation, transitions PASS',JSON.stringify({...metrics,cases:metrics.cases.length,artifact:output}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
