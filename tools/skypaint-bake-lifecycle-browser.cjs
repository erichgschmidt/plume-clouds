/* Serial GPU audit: positive scene/sculpt imports and repeated same-canvas disposal. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const root=path.resolve(process.env.SKYPAINT_SOURCE||'../SkyPaint');
async function sculptScene(){
 const esbuild=require(path.join(root,'node_modules/esbuild'));
 const result=await esbuild.build({stdin:{contents:'export {sculptStudy} from '+JSON.stringify(path.join(root,'src/core/sculpt-studies.js').replaceAll('\\','/'))+';',resolveDir:root},bundle:true,write:false,platform:'node',format:'cjs',logLevel:'silent'});
 const compiled={exports:{}};new Function('module','exports','require',result.outputFiles[0].text)(compiled,compiled.exports,require);
 const scene=compiled.exports.sculptStudy('sphere');scene.volumes[0].recipe.field.layers[0].strokes=[{id:1,mode:'carve',radius:.4,gain:.8,centers:[[.3,.2,.5]]}];return scene;
}
async function main(){
 const assetSource=fs.readFileSync(path.join(__dirname,'../assets/skypaint-default.js'),'utf8'),asset=JSON.parse(assetSource.slice(assetSource.indexOf('=')+1).trim().replace(/;$/,''));
 const original=asset.recipe.scene||asset.recipe.capture.scene,translated=structuredClone(original);translated.volumes[0].position=[2,3,7];
 const sculpt=await sculptScene(),bundle=fs.readFileSync(path.join(__dirname,'../assets/skypaint-author.js'),'utf8');
 const server=http.createServer((req,res)=>{res.setHeader('content-type',req.url==='/bundle.js'?'text/javascript':'text/html');res.end(req.url==='/bundle.js'?bundle:'<!doctype html><canvas width="64" height="48" style="width:64px;height:48px"></canvas><canvas id="preview"></canvas><script src="/bundle.js"></script>');});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'C:/Users/Gus/AppData/Local/Temp/plume-shadow-audit/node_modules/playwright');
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await page.goto('http://127.0.0.1:'+server.address().port);
  const reports=[];let baseRadiance;
  for(const [label,scene]of [['original',original],['translated',translated],['sculpt',sculpt],['reuse',original]]){
   const report=await page.evaluate(async({label,scene})=>{
    const input=JSON.stringify(scene),baker=await createSkyPaintBake({w:64,h:48,scene:input,densityResolution:64,halfHeight:2.4});
    const comparison=baker.compare({yaw:0,pitch:0}),frame=baker.capture({yaw:0,pitch:0}),before=baker.stats();
    const scenePreserved=JSON.stringify(baker.scene)===JSON.stringify({...scene,render:{...scene.render,densityResolution:64}});
    baker.preview({yaw:0,pitch:0});baker.dispose();baker.dispose();const after=baker.stats();let rejectsDisposed=false;try{baker.capture({yaw:0,pitch:0});}catch(error){rejectsDisposed=/disposed/.test(error.message);}
    return {label,inputUnchanged:input===JSON.stringify(scene),scenePreserved,center:baker.center,comparison,before,after,rejectsDisposed,radiance:frame.radiance};
   },{label,scene});
   const rgba=Buffer.from(report.radiance,'base64');if(label==='original')baseRadiance=rgba;
   if(label==='translated'){let max=0;for(let i=0;i<rgba.length;i++)max=Math.max(max,Math.abs(rgba[i]-baseRadiance[i]));report.translationMaxByteError=max;assert(max<=2,'Translated import changed radiance');}
   assert(report.scenePreserved&&report.inputUnchanged&&report.rejectsDisposed,label+' scene/disposal contract');
   assert(report.comparison.occupied>20&&report.comparison.shaderMax<=1e-5&&report.comparison.cloudCompositeMax<=1e-5,label+' source comparison');
   assert.equal(report.after.textures,0,label+' texture leak');assert.equal(report.after.geometries,0,label+' geometry leak');assert.equal(report.after.programs,0,label+' program leak');assert.equal(report.after.listeners,0,label+' listener leak');assert.equal(report.after.glError,0,label+' GL error');assert.equal(report.after.contextLost,false,label+' same-canvas context lost');
   delete report.radiance;reports.push(report);console.log(JSON.stringify(report));
  }
  const clipping=await page.evaluate(async scene=>{
   const bright=structuredClone(scene);bright.sun={...bright.sun,azimuth:180,elevation:60,intensity:6};bright.render.look.anisotropy=.75;
   const baker=await createSkyPaintBake({w:64,h:48,scene:bright,densityResolution:64,halfHeight:2.4,radianceScale:4});
   try{const front=baker.compare({yaw:0,pitch:0});baker.capture({yaw:0,pitch:0});let rejection=null;
    try{baker.capture({yaw:0,pitch:-60});}catch(error){rejection=error.message;}
    return {frontClipped:front.clipped,rejection};
   }finally{baker.dispose();}
  },original);
  assert.equal(clipping.frontClipped,0,'Bright fixture must pass front comparison');assert.match(clipping.rejection||'',/Radiance exceeds.*yaw 0.*pitch -60/,'Each off-front capture must reject clipped raw radiance');
  assert.deepEqual(errors,[]);console.log(JSON.stringify({passed:true,cycles:reports.length,clipping,reports}));
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
