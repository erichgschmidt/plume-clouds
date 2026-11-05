/* Serve the repository, then run with Playwright installed or PLAYWRIGHT_MODULE set.
 * Add --bundles after tools/build-single.js to check the distributable file:// pages.
 */
'use strict';
const assert=require('node:assert/strict');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root=path.join(__dirname,'..'), url=process.env.CLOUD_TEST_URL || 'http://127.0.0.1:8765';
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
  try {
    const page=await browser.newPage({viewport:{width:1100,height:800}}), errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(url+'/tools/shadow-test.html');
    await page.waitForFunction(()=>window.modernResults);
    await page.addScriptTag({url:url+'/tools/expressive-test.js'});
    await page.addScriptTag({url:url+'/tools/contour-gpu-test.js'});
    const results=await page.evaluate(()=>({legacy:shadowResults,updated:modernResults,expressive:expressiveResults,contour:contourResults}));
    for(const [name,result] of Object.entries(results)){
      assert.equal(result.ok,true,name+': '+result.failures.join('; '));
      console.log(name+': PASS ('+result.results.length+' comparisons)');
    }
    await page.goto(url+'/lab.html');
    await page.locator('#btnCheck').click();await page.waitForFunction(()=>window.labCheck);
    const check=await page.evaluate(()=>window.labCheck);
    assert.equal(check.visible,0,'Legacy artifact lab visible mismatch');
    await page.locator('#btnRules').click();await page.waitForFunction(()=>window.labRules);
    const failed=await page.evaluate(()=>Object.entries(labRules).filter(([k,v])=>v===false));
    assert.deepEqual(failed,[],'Legacy artifact lab rules');console.log('Artifact lab: PASS');
    if(process.argv.includes('--bundles')){
      for(const name of ['plume-puffs.html','plume-sky.html']){
        await page.goto(pathToFileURL(path.join(root,'dist',name)).href);
        await page.waitForFunction(()=>document.querySelector('canvas')?.width>0);
        // Wait for a rendered frame rather than only a parsed canvas element.
        await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
        assert.equal(await page.locator('script[src]').count(),0,name+' must be self contained');
        if(name==='plume-puffs.html') await page.waitForFunction(()=>window.FoundryAuthor?.stats().formation);
        else await page.waitForFunction(()=>window.foundrySky?.ready && foundrySky.renderer.stats.drawn>0);
        console.log(name+': PASS (file URL, bundled scripts, Foundry startup)');
      }
    }
    assert.deepEqual(errors,[],'Browser runtime errors');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
