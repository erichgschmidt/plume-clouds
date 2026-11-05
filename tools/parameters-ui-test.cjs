// Usage: node tools/parameters-ui-test.cjs [path/to/playwright]
// A fresh browser context keeps the user's local presets untouched.
const assert = require('node:assert/strict');
const { chromium } = require(process.argv[2] || 'playwright');
const base = process.env.PLUME_TEST_URL || 'http://127.0.0.1:8765';
const retired = ['cohesion', 'cohesionYield', 'bondLife', 'releaseSpeed', 'bondMerge', 'bondAgitation', 'bondTempo'];
(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--use-angle=swiftshader'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await page.goto(base + '/puffs.html');
    await page.waitForFunction(() => window.look && document.querySelector('#param-modelVersion'));
    async function checkRetired() {
      for (const key of retired) assert.equal(await page.locator('#param-' + key).count(), 0);
      assert.equal(await page.locator('script[src*="src/cohesion.js"]').count(), 0);
    }
    await checkRetired();
    assert.deepEqual(await page.evaluate(() => [look.modelVersion, look.cavityLit]), [2, 0]);
    assert.deepEqual(await page.evaluate(() => Object.keys(CloudParameters.featureDefaults).map(k => look[k])), [1, 0, 0, 0, 0, 0.35, 0]);
    async function set(key, value, select = false) {
      await page.evaluate(({ key, value, select }) => {
        const c = document.querySelector('#param-' + key); c.value = value;
        c.dispatchEvent(new Event(select ? 'change' : 'input', { bubbles: true }));
      }, { key, value, select });
    }
    await set('noise', 0);
    assert(await page.locator('#param-filterReach').isDisabled());
    await set('angular', 0.2); assert(!(await page.locator('#param-contourFilter').isDisabled()));
    await set('contourFilter', -0.5); assert(!(await page.locator('#param-filterReach').isDisabled()));
    await set('dissolve', 0); await set('erosion', 0); assert(await page.locator('#param-erosionType').isDisabled());
    await set('erosion', 0.4); assert(!(await page.locator('#param-erosionType').isDisabled()));
    assert.deepEqual(await page.locator('#param-erosionType option').allTextContents(), ['Soft', 'Cellular', 'Ridged']);
    assert(await page.locator('#param-noiseScale').isDisabled());
    assert.match(await page.locator('#param-noiseScale-reason').textContent(), /Broad texture/);
    await set('noise', 0.2); assert(!(await page.locator('#param-noiseScale').isDisabled()));
    await set('children', 0); assert(await page.locator('#param-life').isDisabled());
    await set('children', 4); await set('levels', 2);
    assert(!(await page.locator('#param-relief1').isDisabled())); assert(await page.locator('#param-relief2').isDisabled());
    await page.evaluate(() => localStorage.setItem('plume-puffs-looks', JSON.stringify({ '__legacy_test': {
      rimV: 2, seed: 1, type: 'congestus', shape: 'ring', look: { noise: 0, softness: 4, dither: 0.37, cohesion: 1, bondMerge: 1, bondAgitation: 0.8 }
    } })));
    const storedBeforeLoad = await page.evaluate(() => localStorage.getItem('plume-puffs-looks'));
    await page.reload(); await page.getByRole('button', { name: '__legacy_test', exact: true }).click();
    assert.deepEqual(await page.evaluate(() => [look.modelVersion, look.cavityLit, look.softness, look.dither]), [1, 1, 4, 0.37]);
    assert.deepEqual(await page.evaluate(() => [look.childShape, look.shapeFollow, look.contourCohesion, look.shadowQuiet]), [1, 0, 0, 0]);
    assert.equal(await page.evaluate(() => localStorage.getItem('plume-puffs-looks')), storedBeforeLoad, 'loading does not rewrite old user data');
    await checkRetired();
    assert(await page.locator('#param-contourCohesion').isDisabled());
    assert(await page.locator('#param-noiseScale').isDisabled());
    await set('modelVersion', 2, true);
    assert(!(await page.locator('#param-contourCohesion').isDisabled()));
    await set('shapeVar', 0.5);
    await set('childShape', 0.6); await set('shapeFollow', 0.3);
    await set('contourCohesion', 0.2); await set('shadowQuiet', 0.4);
    await set('body', 0); assert(!(await page.locator('#param-bodySoft').isDisabled()));
    await set('contourFilter', -0.6); await set('filterReach', 0.4);
    await set('erosion', 0.4); await set('erosionType', 2, true);
    await page.locator('#lookName').fill('__roundtrip_test'); await page.locator('#btnSave').click();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('plume-puffs-looks')).__roundtrip_test);
    assert.equal(saved.parameterVersion, 4); assert.equal(saved.look.modelVersion, 2); assert.equal(saved.look.dither, 0.37);
    assert(retired.every(key => !Object.hasOwn(saved.look, key)), 'new saved looks omit removed controls');
    assert.deepEqual([saved.look.contourFilter, saved.look.filterReach, saved.look.erosionType], [-0.6, 0.4, 2]);
    assert.deepEqual([saved.look.childShape, saved.look.shapeFollow, saved.look.contourCohesion, saved.look.shadowQuiet], [0.6, 0.3, 0.2, 0.4]);
    await page.locator('#type').selectOption('single'); await checkRetired();
    const layerType = await page.evaluate(() => Object.keys(CLOUD_PRESETS).find(k => CLOUD_PRESETS[k].engine === 'layer'));
    await page.locator('#type').selectOption(layerType);
    assert.equal(await page.locator('#param-force-life').getAttribute('aria-label'), 'Layer lifetime (s)');
    assert(!(await page.locator('#param-force-life').isDisabled()));
    assert(await page.evaluate(() => { const ids = [...document.querySelectorAll('[id]')].map(e => e.id); return new Set(ids).size === ids.length; }));
    await page.evaluate(() => {
      const saved = JSON.parse(localStorage.getItem('plume-puffs-looks'));
      saved.__old_import = { parameterVersion: 1, rimV: 2, seed: 1, type: 'congestus', look: { modelVersion: 2 } };
      localStorage.setItem('plume-puffs-looks', JSON.stringify(saved));
    });
    await page.goto(base + '/sky.html');
    await page.waitForFunction(() => window.sky && document.querySelector('#param-modelVersion'));
    assert.deepEqual(await page.evaluate(() => [sky.modelVersion, sky.cavityLit]), [2, 0]);
    await checkRetired();
    assert.deepEqual(await page.evaluate(() => Object.keys(CloudParameters.featureDefaults).map(k => sky[k])), [1, 0, 0, 0, 0, 0.35, 0]);
    assert.equal(await page.evaluate(() => SPECIES.__roundtrip_test.look.childShape), 0.6);
    assert(await page.evaluate(() => !Object.hasOwn(SPECIES.__old_import.look, 'childShape')));
    assert.equal(await page.locator('#param-simSpeed').getAttribute('min'), '0');
    assert.equal(await page.locator('#param-motion').getAttribute('aria-label'), 'Turbulence');
    assert.equal(await page.locator('#param-softness').getAttribute('aria-label'), 'Attachment blend');
    await set('cavity', 0); assert(await page.locator('#param-cavityLit').isDisabled());
    await set('cavity', 0.5); assert(!(await page.locator('#param-cavityLit').isDisabled()));
    const imported = await page.evaluate(() => {
      Object.keys(SPECIES).forEach(k => { if (k !== '__roundtrip_test') delete SPECIES[k]; });
      P.clouds = 1; document.querySelector('#btnNew').click();
      const form = clouds[0].sims[0].look;
      return { childShape: form.childShape, shapeFollow: form.shapeFollow,
        contourFilter: form.contourFilter, filterReach: form.filterReach,
        erosionIsGlobal: !Object.hasOwn(form, 'erosionType'), contourIsGlobal: !Object.hasOwn(form, 'contourCohesion'), shadowIsGlobal: !Object.hasOwn(form, 'shadowQuiet') };
    });
    assert.deepEqual(imported, { childShape: 0.6, shapeFollow: 0.3, contourFilter: -0.6, filterReach: 0.4, erosionIsGlobal: true, contourIsGlobal: true, shadowIsGlobal: true });
    const oldImportHasNoBonds = await page.evaluate(() => {
      const legacy = JSON.parse(localStorage.getItem('plume-puffs-looks')).__legacy_test;
      SPECIES.__roundtrip_test.look = legacy.look;
      document.querySelector('#btnNew').click();
      return !Object.hasOwn(clouds[0].sims[0].look, 'cohesion') && !Object.hasOwn(clouds[0].sims[0].look, 'bondMerge');
    });
    assert(oldImportHasNoBonds, 'sky does not import retired form fields');
    assert.deepEqual(errors, []);
    console.log('Parameter UI defaults, dependencies, layer keys, and preset roundtrip: PASS');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
