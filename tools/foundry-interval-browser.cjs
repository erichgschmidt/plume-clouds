/* Force the unoptimized second trace and compare exact framebuffer bytes. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),fixtures=require('./foundry-volume-fixtures.cjs');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:360,height:360}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setContent('<canvas style="width:256px;height:192px"></canvas>');
  for(const f of ['src/foundry-assets.js','src/foundry-shaders.js','src/foundry-renderer.js','assets/skypaint-default.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
  const fixture=fixtures.slab({layers:[{front:.5,back:.1,sigma:1,color:[.8,.15,.05]},{front:-.1,back:-.6,sigma:2,color:[.05,.25,.9]}]});
  const serialize=a=>({...a,data:a.data.map(v=>v.map(m=>[...m])),radiance:a.radiance.map(v=>v.map(m=>[...m]))});
  const result=await page.evaluate(serialized=>{
   const R=new BakedCloudRenderer(document.querySelector('canvas')),a=FoundryAssets.parse(SKYPAINT_DEFAULT);
   const settings={pixelSize:1,breathing:0,haze:0,shadow:0,exposure:1.25,skyColor:[.12,.35,.57]};
   const packet={id:1,x:0,y:0,scale:1,yaw:0,pitch:0,distance:5,opacity:1,depthScale:.01};
   function read(p,extra={}){R.render([p],0,{...settings,...extra});const gl=R.gl,pixels=new Uint8Array(R.canvas.width*R.canvas.height*4);gl.readPixels(0,0,R.canvas.width,R.canvas.height,gl.RGBA,gl.UNSIGNED_BYTE,pixels);return pixels;}
   const changed=(a,b)=>a.reduce((n,v,i)=>n+(v!==b[i]?1:0),0);
   R.load(a);const flags=R.levels.map(l=>l.hasSecondInterval),native=[];
   for(const view of a.views)for(const scale of [1,.2]){
    const p={...packet,...view,scale};R.levels.forEach(l=>l.hasSecondInterval=true);const before=read(p);R.levels.forEach((l,i)=>l.hasSecondInterval=flags[i]);const after=read(p);native.push({...view,scale,changed:changed(before,after)});
   }
   const stress=Array.from({length:12},(_,i)=>({...packet,id:100+i,x:(i%4-1.5)*.45,y:(Math.floor(i/4)-1)*.4,scale:.7,yaw:(i%3-1)*17.5,pitch:-45,distance:4+i*.6})),timing={forcedSecond:[],skipEmpty:[]};
   const sync=new Uint8Array(4);
   function timed(force){R.levels.forEach((l,i)=>l.hasSecondInterval=force||flags[i]);const t=performance.now();R.render(stress,0,{...settings,detailMode:'full'});R.gl.finish();R.gl.readPixels(0,0,1,1,R.gl.RGBA,R.gl.UNSIGNED_BYTE,sync);return performance.now()-t;}
   for(let i=0;i<3;i++){timed(true);timed(false);}
   for(let i=0;i<8;i++){if(i%2){timing.skipEmpty.push(timed(false));timing.forcedSecond.push(timed(true));}else{timing.forcedSecond.push(timed(true));timing.skipEmpty.push(timed(false));}}
   const two={...serialized,data:serialized.data.map(v=>v.map(m=>new Uint8Array(m))),radiance:serialized.radiance.map(v=>v.map(m=>new Uint8Array(m)))};R.load(two);
   const genuineFlag=R.levels[0].hasSecondInterval,both=read({...packet,scale:.8});R.levels[0].hasSecondInterval=false;const omitted=read({...packet,scale:.8});
   const legacy={...two};delete legacy.appearance;delete legacy.radiance;delete legacy.radianceScale;R.load(legacy);const normal=read({...packet,scale:.8});R.levels[0].hasSecondInterval=false;const normalForced=read({...packet,scale:.8});
   const error=R.gl.getError();R.dispose();return {flags,native,timing,genuineFlag,genuineSecondChanged:changed(both,omitted),legacyChanged:changed(normal,normalForced),error};
  },serialize(fixture));
  assert(result.flags.every(f=>f===false),'the real asset has no second optical interval at any LOD');assert(result.native.every(c=>c.changed===0),'skipping empty intervals is byte-exact at every capture and both resolution levels');assert.equal(result.genuineFlag,true);assert(result.genuineSecondChanged>100,'the true two-interval fixture exercises the retained second trace');assert.equal(result.legacyChanged,0);assert.equal(result.error,0);assert.deepEqual(errors,[]);
  console.log('Empty second interval optimization: 30 native framebuffer comparisons exact, real second interval retained, legacy unchanged PASS',JSON.stringify(result));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
