'use strict';
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}fs.readFile(file,(error,body)=>{if(error){res.writeHead(404).end();return;}res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.html')?'text/html':'application/octet-stream');res.end(body);});});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 const page=await browser.newPage({viewport:{width:1180,height:820}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 try{
  const base='http://127.0.0.1:'+server.address().port;
  await page.goto(base+'/skypaint-bake.html');await page.waitForFunction(()=>window.skyPaintBakerUI);
  assert(await page.locator('#useSky').isDisabled());
  await page.locator('summary').filter({hasText:'Advanced capture'}).click();await page.locator('#radianceScale').selectOption('16');
  await page.locator('#bake').click();await page.waitForFunction(()=>!skyPaintBakerUI.busy&&skyPaintBakerUI.asset,null,{timeout:180000});
  const first=await page.evaluate(()=>{window.completedBake=skyPaintBakerUI.asset;const a=completedBake;return {name:a.name,appearance:a.appearance,radianceScale:a.radianceScale,views:a.views.length,w:a.w,lods:a.lods.map(l=>l.w),bytes:FoundryAssets.byteLength(a),exposure:a.bakeLighting.exposure,status:document.querySelector('#status').textContent};});
  assert.equal(first.appearance,'baked-radiance-v1');assert.equal(first.views,15);assert.equal(first.w,128);assert.deepEqual(first.lods,[64]);assert(first.bytes>0);
  assert.equal(first.radianceScale,16,'Selected highlight range reaches the captured maps and saved metadata');
  await page.screenshot({path:path.join(os.tmpdir(),'skypaint-baker-ui.png'),fullPage:true});
  await page.locator('#bake').click();await page.waitForFunction(()=>skyPaintBakerUI.busy);await page.locator('#cancel').click();await page.waitForFunction(()=>!skyPaintBakerUI.busy,null,{timeout:60000});
  assert(await page.evaluate(()=>skyPaintBakerUI.asset===completedBake),'Cancellation keeps last good asset');assert((await page.locator('#status').textContent()).includes('cancelled'));
  await page.locator('#sceneFile').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{}')});await page.waitForFunction(()=>document.querySelector('#recipeName').textContent.includes('invalid'));
  await page.locator('#bake').click();await page.waitForFunction(()=>!skyPaintBakerUI.busy&&document.querySelector('#status').classList.contains('error'),null,{timeout:30000});
  assert(await page.evaluate(()=>skyPaintBakerUI.asset===completedBake),'Rejected scene keeps last good asset');
  await page.locator('#clearScene').click();
  const downloadPromise=page.waitForEvent('download');await page.locator('#exportAsset').click();const download=await downloadPromise;
  const file=await download.path(),exported=JSON.parse(fs.readFileSync(file,'utf8'));assert.equal(exported.version,3);assert.equal(exported.appearance,'baked-radiance-v1');
  await page.locator('#useSky').click();await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('Saved for the sky'));
  await page.goto(base+'/sky.html');await page.waitForFunction(()=>window.foundrySky?.ready,null,{timeout:120000});
  const state=await page.evaluate(()=>{foundrySky.playing=false;return {name:foundrySky.asset.name,appearance:foundrySky.asset.appearance,exposure:foundrySky.settings.exposure,author:typeof createSkyPaintBake,stats:foundrySky.renderer.stats};});
  assert.equal(state.name,first.name);assert.equal(state.appearance,first.appearance);assert.equal(state.author,'undefined','3D author code must not ship into sky');assert.equal(state.exposure,first.exposure);
  for(const key of ['sunAz','sunAlt','ao','transmission','sixWay','bands','palette','shadow'])assert(await page.locator('#param-'+key).isDisabled(),key+' must not misleadingly relight fixed captures');
  assert(await page.locator('#param-exposure').isVisible());assert(!(await page.locator('#param-exposure').isDisabled()));
  assert(!(await page.locator('#param-sunAz').isVisible()),'Inapplicable controls do not crowd the radiance UI');
  const exposures=await page.evaluate(()=>{
   const a=foundrySky.asset,old=a.bakeLighting.exposure,out=[];
   for(const exposure of [.1,1.234,4]){a.bakeLighting.exposure=exposure;foundrySky.applyAsset(a,'Exposure contract');out.push({value:foundrySky.settings.exposure,slider:Number(document.querySelector('#param-exposure').value)});}
   a.bakeLighting.exposure=old;foundrySky.applyAsset(a,'Restored bake');return out;
  });
  assert.deepEqual(exposures,[{value:.1,slider:.1},{value:1.234,slider:1.234},{value:4,slider:4}],'Every valid SkyPaint exposure survives the UI handoff');
  await page.locator('#btnStarter').click();assert(!(await page.locator('#param-sunAz').isDisabled()));assert(!(await page.locator('#param-sixWay').isDisabled()));assert(!(await page.locator('#param-exposure').isVisible()));
  assert.equal(await page.evaluate(async()=>(await FoundryAssets.load('active')).name),first.name,'Demo buttons never replace the saved bake');
  await page.locator('#btnVolumeDemo').click();assert(await page.locator('#param-sunAz').isDisabled());assert.equal(await page.evaluate(()=>foundrySky.renderer.gl.getError()),0);
  await page.locator('#btnLoad').click();await page.waitForFunction(name=>foundrySky.asset.name===name,first.name);
  await page.screenshot({path:path.join(os.tmpdir(),'skypaint-baked-sky-ui.png'),fullPage:true});
  assert.deepEqual(errors,[]);console.log('SkyPaint baker UI/sky handoff PASS',JSON.stringify({first,state}));
 }catch(error){await page.screenshot({path:path.join(os.tmpdir(),'skypaint-baker-ui-failure.png'),fullPage:true}).catch(()=>{});throw error;}
 finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
