'use strict';
const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs');
const {pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:1100,height:800}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const root=path.join(__dirname,'..','dist');
  await page.goto(pathToFileURL(path.join(root,'plume-puffs.html')).href);
  await page.waitForFunction(()=>window.FoundryAuthor?.stats().formation,null,{timeout:120000});
  assert.equal(await page.locator('script[src]').count(),0);
  assert.equal(await page.locator('a[href="plume-sky.html"]').count(),1);
  // One browser context, like navigating between downloaded editors. Exercise
  // the actual sibling-file IndexedDB origin; HTTP handoff alone is insufficient.
  await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'../assets/foundry-default.js'),'utf8')});
  await page.evaluate(async()=>{const a=FoundryAssets.parse(FOUNDRY_DEFAULT);a.name='Standalone handoff';await FoundryAssets.save(a);});
  await page.goto(pathToFileURL(path.join(root,'plume-sky.html')).href);
  await page.waitForFunction(()=>window.foundrySky?.ready&&foundrySky.renderer.stats.drawn>0,null,{timeout:30000});
  assert.equal(await page.locator('script[src]').count(),0);
  assert.equal(await page.locator('a[href="plume-puffs.html"]').count(),1);
  assert.equal(await page.locator('a[href="plume-skypaint-bake.html"]').count(),1);
  assert.equal(await page.evaluate(()=>typeof createSkyPaintBake),'undefined','SkyPaint authoring code never ships inside the running sky');
  const state=await page.evaluate(()=>({name:foundrySky.asset.name,views:foundrySky.asset.views.length,lighting:foundrySky.asset.lighting?.length,lods:foundrySky.asset.lods?.map(l=>l.w),error:foundrySky.renderer.gl.getError(),author:typeof FoundryAuthor,particle:typeof CloudSim}));
  assert.equal(state.name,'Standalone handoff','sibling file pages share active baked asset');
  assert.equal(state.lighting,15);assert.deepEqual(state.lods,[64,128],'file handoff retains resolution levels and directional maps');
  assert.equal(state.views,15);assert.equal(state.error,0);assert.equal(state.author,'undefined');assert.equal(state.particle,'undefined');
  await page.locator('#btnVolumeDemo').click();
  await page.waitForFunction(()=>foundrySky.asset.appearance==='baked-radiance-v1'&&foundrySky.renderer.stats.drawn>0);
  assert.equal(await page.evaluate(()=>foundrySky.renderer.gl.getError()),0);
  assert.equal(await page.evaluate(async()=>(await FoundryAssets.load()).name),'Standalone handoff','demo never overwrites the saved author asset');
  await page.goto(pathToFileURL(path.join(root,'plume-skypaint-bake.html')).href);
  await page.waitForFunction(()=>typeof createSkyPaintBake==='function'&&window.skyPaintBakerUI);
  assert.equal(await page.locator('script[src]').count(),0);
  assert.equal(await page.locator('a[href="plume-sky.html"]').count(),1);
  assert.equal(await page.evaluate(()=>SKYPAINT_BAKE_SOURCE.views.length),15);
  assert.deepEqual(errors,[]);
  console.log('Foundry standalone pages: file URL startup, embedded maps/scripts, navigation, 2D sky isolation PASS');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
