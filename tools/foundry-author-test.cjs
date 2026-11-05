'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const html=fs.readFileSync(path.join(__dirname,'../puffs.html'),'utf8');
 assert(html.includes('id="useInSky"'),'author offers a baked asset handoff');
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:1400,height:950}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto((process.env.CLOUD_TEST_URL||'http://127.0.0.1:8765')+'/puffs.html');
  await page.waitForFunction(()=>window.FoundryAuthor&&FoundryAuthor.stats().formation&&!FoundryAuthor.stats().workerBusy,{timeout:120000});
  const result=await page.evaluate(async()=>{
   const recipe=FoundryAuthor.recipe();
   const valid=validateRecipe(recipe);if(valid.s.viewGrid!==15)throw Error('15-view recipe must round trip');
   if(validateRecipe({...recipe,state:{...recipe.state,simResolution:123}}).s.simResolution!==48)throw Error('unsupported solver resolution must normalize');
   for(const bad of [{...recipe,state:[]},{...recipe,evolvedSteps:'12'},{...recipe,evolvedSteps:-1},{...recipe,additions:{}},{...recipe,cuts:[null]}]){
    let rejected=false;try{validateRecipe(bad);}catch(_){rejected=true;}if(!rejected)throw Error('invalid recipe accepted');
   }
   FoundryAuthor.set({bakeRes:128,viewGrid:15,simResolution:32});
   await new Promise(resolve=>setTimeout(resolve,250));
   while(FoundryAuthor.stats().workerBusy)await new Promise(resolve=>setTimeout(resolve,50));
   // Queue a style rebuild immediately before freeze: it must be drained.
   const input=document.getElementById('c_billow');input.value='.31';input.dispatchEvent(new Event('input',{bubbles:true}));
   await FoundryAuthor.bake();const a=FoundryAuthor.getAsset();
   const decoded=FoundryAssets.parse(FoundryAssets.stringify(a));
   await FoundryAuthor.useInSky();
   const loaded=await FoundryAssets.load('active'),atlas=FoundryAuthor.getAtlas(0);
   const viewCoverage=a.data.map(v=>{let n=0;for(let i=3;i<v[1].length;i+=4)if(v[1][i])n++;return n;});
   const sprites=[0,10,14].map(i=>{const s=FoundryAuthor.spritePixels(i);let n=0;for(let p=3;p<s.bytes.length;p+=4)if(s.bytes[p])n++;return n;});
   const bakedRevision=FoundryAuthor.stats().volumeRevision;
   await new Promise(resolve=>setTimeout(resolve,250));
   const afterRevision=FoundryAuthor.stats().volumeRevision;
   FoundryAuthor.setMotion({speed:0,animate:true,autoWalk:true});
   await new Promise(resolve=>setTimeout(resolve,100));const still=FoundryAuthor.state.playerX;
   await new Promise(resolve=>setTimeout(resolve,150));const stillAfter=FoundryAuthor.state.playerX;
   FoundryAuthor.setMotion({speed:1});await new Promise(resolve=>setTimeout(resolve,150));const moving=FoundryAuthor.state.playerX;
   FoundryAuthor.setMotion({animate:false});await new Promise(resolve=>setTimeout(resolve,100));const paused=FoundryAuthor.state.playerX;
   await new Promise(resolve=>setTimeout(resolve,150));const pausedAfter=FoundryAuthor.state.playerX;
   return {views:a.views,width:a.w,maps:a.data.length,decoded:decoded.data.length,
    recipeBillow:a.recipe.state.billow,styleBillow:FoundryAuthor.state.billow,
    bytes:a.data[0][0].length,loadedViews:loaded.views.length,atlas:[atlas.w,atlas.h],viewCoverage,sprites,
    bakedRevision,afterRevision,still,stillAfter,moving,paused,pausedAfter,
    stats:FoundryAuthor.stats(),bridgeEnabled:!document.getElementById('useInSky').disabled};
  });
  assert.equal(result.views.length,15);assert.equal(result.maps,15);assert.equal(result.decoded,15);
  assert.deepEqual([...new Set(result.views.map(v=>v.pitch))],[-85,-60,-30,0,20]);
  assert.equal(result.bytes,128*96*4);assert.equal(result.recipeBillow,.31);assert.equal(result.styleBillow,.31);
  assert.equal(result.loadedViews,15);assert.deepEqual(result.atlas,[384,480]);assert(result.viewCoverage.every(n=>n>0));assert(result.sprites.every(n=>n>0));
  assert.equal(result.bakedRevision,result.afterRevision,'no delayed style job after freeze');
  assert.equal(result.still,result.stillAfter,'speed zero freezes auto walk');assert.notEqual(result.still,result.moving,'simulation clock advances auto walk');
  assert.equal(result.paused,result.pausedAfter,'paused animation freezes auto walk');
  assert.equal(result.stats.glError,0);assert.equal(result.stats.authorError,0);assert(result.bridgeEnabled);assert.deepEqual(errors,[]);
  await page.screenshot({path:process.env.FOUNDRY_SCREENSHOT||path.join(require('node:os').tmpdir(),'foundry-author.png'),fullPage:true});
  const runtimeHTML=await page.evaluate(()=>FoundryAuthor.exportRuntimeHTML());
  assert(!runtimeHTML.includes('MoistAtmosphere'),'export excludes the authoring solver');
  const exported=await browser.newPage();exported.on('pageerror',e=>errors.push(e.message));
  await exported.setContent(runtimeHTML);await exported.waitForTimeout(250);
  assert.equal(await exported.evaluate(()=>renderer.gl.getError()),0);assert.deepEqual(errors,[]);await exported.close();
  const savedRecipe=await page.evaluate(()=>{undoStack.push({add:[{c:[0,0,0],s:[1,1,1],angle:0}],cut:[]});return FoundryAuthor.recipe();});
  await page.locator('#fileInput').setInputFiles({name:'recipe.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(savedRecipe))});
  await page.waitForTimeout(250);await page.waitForFunction(()=>!FoundryAuthor.stats().workerBusy);
  assert.equal(await page.evaluate(()=>undoStack.length),0,'recipe import discards undo from previous source');
  assert.equal(await page.evaluate(()=>FoundryAuthor.state.viewGrid),15);assert.deepEqual(errors,[]);
  console.log(JSON.stringify(result,null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
