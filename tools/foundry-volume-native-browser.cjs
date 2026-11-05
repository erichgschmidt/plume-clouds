/* Match every native capture texel against the exported radiance, no author code. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),os=require('node:os');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const Assets=require('../src/foundry-assets.js'),{decode,over}=require('./foundry-volume-fixtures.cjs');
const input=path.resolve(process.argv[2]||path.join(__dirname,'../assets/skypaint-default.js'));
let record;if(input.endsWith('.json'))record=JSON.parse(fs.readFileSync(input,'utf8'));else{const c={window:{}};vm.runInNewContext(fs.readFileSync(input,'utf8'),c);record=c.window.SKYPAINT_DEFAULT;}
const asset=Assets.parse(JSON.stringify(record)),serialized=JSON.parse(Assets.stringify(asset));
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:Math.max(360,asset.w+20),height:Math.max(360,asset.h+20)}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setContent(`<canvas style="width:${asset.w}px;height:${asset.h}px"></canvas>`);
  for(const f of ['src/foundry-assets.js','src/foundry-shaders.js','src/foundry-renderer.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
  const frames=await page.evaluate(a=>{
   const R=new BakedCloudRenderer(document.querySelector('canvas'));R.load(FoundryAssets.parse(a));
   const frames=[];for(const {yaw,pitch}of a.views){const start=performance.now();R.render([{id:1,x:0,y:0,scale:1,yaw,pitch,distance:10,opacity:1,depthScale:.01}],0,{pixelSize:1,pixelSnap:false,detailMode:'full',breathing:0,haze:0,shadow:0,exposure:1.25,skyColor:[.12,.35,.57]});const raw=new Uint8Array(a.w*a.h*4);R.gl.readPixels(0,0,a.w,a.h,R.gl.RGBA,R.gl.UNSIGNED_BYTE,raw);frames.push({yaw,pitch,bytes:Array.from(raw),ms:performance.now()-start});}
   const error=R.gl.getError();R.dispose();return {frames,error};
  },serialized);
  const sky=[.12,.35,.57],linear=c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4,srgb=c=>c<=.0031308?12.92*c:1.055*c**(1/2.4)-.055;
  const expected=ray=>ray.slice(0,3).map((c,k)=>Math.round(srgb(1-Math.exp(-1.25*c+Math.log(1-linear(sky[k]))*(1-ray[3])))*255));
  const metrics=frames.frames.map((frame,v)=>{
   let covered=0,missing=0,wrong=0,maxError=0,totalError=0,emptyLeak=0,edgeOccupied=0;const examples=[];
   for(let i=0;i<frame.bytes.length;i+=4){
    const ray=over(decode(asset.radiance[v][0].slice(i,i+4)),decode(asset.radiance[v][1].slice(i,i+4))),want=expected(ray),actual=frame.bytes.slice(i,i+3),error=Math.max(...actual.map((c,k)=>Math.abs(c-want[k])));
    if(ray[3]>.02){covered++;maxError=Math.max(maxError,error);totalError+=error;if(error>4){wrong++;if(examples.length<8)examples.push({x:i/4%asset.w,y:Math.floor(i/4/asset.w),actual,want,alpha:ray[3],error});}if(error>4&&actual.every((c,k)=>Math.abs(c-Math.round(sky[k]*255))<=1))missing++;const x=i/4%asset.w,y=Math.floor(i/4/asset.w);if(x===0||y===0||x===asset.w-1||y===asset.h-1)edgeOccupied++;}
    if(ray[3]===0&&error>1)emptyLeak++;
   }
   return {yaw:frame.yaw,pitch:frame.pitch,covered,missing,wrong,maxError,meanError:totalError/Math.max(covered,1),emptyLeak,edgeOccupied,ms:frame.ms,examples};
  });
  const output=path.join(os.tmpdir(),'foundry-volume-native-metrics.json');fs.writeFileSync(output,JSON.stringify({input,metrics},null,2));
  console.log('Native volume transfer audit',JSON.stringify({input,metrics,artifact:output}));
  assert.equal(frames.error,0);assert.deepEqual(errors,[]);
  for(const m of metrics){assert(m.covered>25,'native view contains a visible cloud');assert.equal(m.edgeOccupied,0,'capture bounds contain full cloud');assert.equal(m.emptyLeak,0,'empty native texels stay exact sky');assert.equal(m.missing,0,'matching capture preserves all visible radiance texels');assert(m.wrong<=Math.max(2,m.covered*.001),'native radiance transfer differs at <=.1% of occupied texels');}
  console.log('All native volume views preserve exported density-integrated appearance PASS');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
