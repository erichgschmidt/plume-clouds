/* Real SkyPaint density transport proof. Run serially with other GPU audits. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
async function main(){
 const {buildFixture}=require('./skypaint-bake-source.cjs'),bundle=await buildFixture(process.env.SKYPAINT_SOURCE||'../SkyPaint');
 const server=http.createServer((req,res)=>{res.setHeader('content-type',req.url==='/bundle.js'?'text/javascript':'text/html');res.end(req.url==='/bundle.js'?bundle:'<!doctype html><canvas style="width:64px;height:48px"></canvas><canvas id="preview"></canvas><script src="/bundle.js"></script>');});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'C:/Users/Gus/AppData/Local/Temp/plume-shadow-audit/node_modules/playwright'),browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await page.goto('http://127.0.0.1:'+server.address().port);
  const report=await page.evaluate(async()=>{
   const views=[{yaw:0,pitch:0},{yaw:35,pitch:-60}],baker=await createSkyPaintBake({w:64,h:48,densityResolution:64,halfHeight:2.4}),before=baker.preview(views[0]),fallback=baker.capture(views[0]),first=[],proof=[];
   const decode=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
   for(const view of views){proof.push(baker.compareRelighting(view));first.push(baker.captureRelighting(view));}
   const after=baker.preview(views[0]),fallbackAfter=baker.capture(views[0]);
   let alphaMismatch=0,emptyRGB=0;const opacity=decode(fallback.radiance),positive=decode(first[0].maps[0]),negative=decode(first[0].maps[1]);
   for(let i=0;i<opacity.length;i+=4){if(opacity[i+3]!==negative[i+3])alphaMismatch++;if(negative[i+3]===0&&[0,1,2,3].some(k=>positive[i+k]||negative[i+k]))emptyRGB++;}
   const scene=structuredClone(baker.scene),settings=baker.relightSettings;scene.sun={...scene.sun,azimuth:110,elevation:12,intensity:.6,ambient:.8};Object.assign(scene.render.look,{anisotropy:.6,fill:.7,sunColor:'#ff8540',skyColor:'#264578'});baker.dispose();
   const other=await createSkyPaintBake({w:64,h:48,densityResolution:64,halfHeight:2.4,scene}),second=views.map(view=>other.captureRelighting(view)),changedFallback=other.capture(views[0]),otherSettings=other.relightSettings;other.dispose();
   return {proof,settings,otherSettings,sourcePreviewPreserved:before===after,fallbackPreserved:JSON.stringify(fallback)===JSON.stringify(fallbackAfter),geometryIndependent:fallback.depth===changedFallback.depth&&fallback.normal===changedFallback.normal,transportIndependent:JSON.stringify(first)===JSON.stringify(second),fallbackChanged:fallback.radiance!==changedFallback.radiance,alphaMismatch,emptyRGB};
  });
  for(const p of report.proof){assert(p.axisMax<1e-5&&p.ambientMax<1e-5&&p.opacityMax<1e-5,'Integrated transport must match independently directed original shadow() march');assert(p.responseMax<=1.000001);}
  assert(report.sourcePreviewPreserved&&report.fallbackPreserved);assert(report.geometryIndependent&&report.transportIndependent&&report.fallbackChanged);assert.equal(report.alphaMismatch,0);assert.equal(report.emptyRGB,0);assert.deepEqual(errors,[]);
  assert.equal(report.settings.anisotropy,.32);assert.equal(report.settings.fill,.2);assert.equal(report.settings.intensity,2.6);assert.equal(report.settings.ambient,.28);assert(report.settings.sunColor[1]<241/255,'Sun tint metadata is linear, not sRGB bytes');
  console.log('SkyPaint relighting density transport PASS',JSON.stringify(report));
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
