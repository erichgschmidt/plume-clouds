/* Rebuild the bundled starter from the real authoring/baking pipeline. */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const Assets=require('../src/foundry-assets.js');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto((process.env.CLOUD_TEST_URL||'http://127.0.0.1:8765')+'/puffs.html');
  await page.waitForFunction(()=>window.FoundryAuthor&&FoundryAuthor.stats().formation&&!FoundryAuthor.stats().workerBusy,null,{timeout:120000});
  const json=await page.evaluate(async()=>{
   FoundryAuthor.set({bakeRes:256,viewGrid:15});await FoundryAuthor.bake();
   const a=FoundryAuthor.getAsset();if(!a?.lighting||a.w!==256||a.views.length!==15)throw Error('Starter bake failed');
   a.name='Foundry thermal — seed 9241';return FoundryAssets.stringify(a);
  });
  if(errors.length)throw Error(errors.join('\n'));
  const asset=Assets.parse(json);
  fs.writeFileSync(path.join(__dirname,'../assets/foundry-default.js'),'// Real Foundry bake: directional lighting and coherent resolution levels.\nwindow.FOUNDRY_DEFAULT='+json+';\n');
  console.log(JSON.stringify({w:asset.w,h:asset.h,views:asset.views.length,lods:asset.lods.map(l=>l.w),bytes:Assets.byteLength(asset),version:asset.version}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
