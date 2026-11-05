/* Pixel regression for sharing the macro slope between noise bias and shading.
 * Run with Playwright installed, or set PLAYWRIGHT_MODULE to its absolute module directory.
 * CLOUD_TEST_URL defaults to the local server; CHROME_PATH optionally selects Chrome.
 * BASELINE_RENDERER optionally compares a saved renderer source instead of the duplicated-slope path.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.join(__dirname, '..');
const current = fs.readFileSync(path.join(root, 'src/puffs.js'), 'utf8');
// Reconstitute only the previous duplicated-slope path, retaining the current field,
// parameter semantics and all other shading. This isolates this optimization.
function previousPath(source) {
  if(process.env.BASELINE_RENDERER)return fs.readFileSync(process.env.BASELINE_RENDERER,'utf8');
  const replacements = [
    ['vec2 slopeAt(vec2 uv, vec2 dx, vec2 dy, float sm, out float edge)',
      'vec3 normalAt(vec2 uv, vec2 dx, vec2 dy, float wx, float wy, float bias, float bias2, float namp, float sm, out float edge)'],
    ['hAt(q, uv, 0.0, 0.0, 0.0).y', 'hAt(q, uv, bias, bias2, namp).y'],
    ["  '  return G;\\n' +\n  '}\\n' +\n  '// Reuse the macro slope: noise bias needs the undisplaced normal, not another 7x7 filter.\\n' +\n  'vec3 noiseNormal(vec2 G, vec2 uv, vec2 dx, vec2 dy, float wx, float wy, float bias, float bias2, float namp){\\n' +\n", ''],
    ["  '  vec2 G = slopeAt(uv, dx, dy, sB.w, edge);\\n' +\n  '  vec3 n0 = normalize(vec3(-G, 1.0));\\n' +",
      "  '  vec3 n0 = normalAt(uv, dx, dy, wx, wy, 0.0, 0.0, namp, sB.w, edge);\\n' +\n  '  vec2 G = -n0.xy / n0.z;\\n' +"],
    ['noiseNormal(G, uv, dx, dy, wx, wy, bias, bias2, namp)',
      'normalAt(uv, dx, dy, wx, wy, bias, bias2, namp, sB.w, edge)']
  ];
  source = source.replace(/\r\n/g, '\n');
  for (const [from, to] of replacements) {
    assert(source.includes(from), 'Regression reconstruction needs updating: ' + from);
    source = source.replace(from, to);
  }
  return source;
}
async function capture(browser, source) {
  const page = await browser.newPage();
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.route('**/src/puffs.js*', route => route.fulfill({ contentType: 'text/javascript', body: source }));
  // Use the production fixture's capture function, without its unrelated full audit.
  const fixture = fs.readFileSync(path.join(__dirname, 'shadow-test.js'), 'utf8').replace(/  run\(\);\s*\}\)\(\);\s*$/, '})();');
  await page.route('**/tools/shadow-test.js*', route => route.fulfill({ contentType: 'text/javascript', body: fixture }));
  await page.goto((process.env.CLOUD_TEST_URL || 'http://127.0.0.1:8765') + '/tools/shadow-test.html');
  await page.waitForFunction(() => window.shadowAudit, null, { timeout: 15000 });
  const result = await page.evaluate(() => {
    const fixtures = [
      [[.43,.375,.14,0],[.59,.375,.1,.10]],
      [[.41,.375,.13,0],[.59,.375,.13,0]],
      [[.03,.375,.14,0],[.18,.375,.075,.06]]
    ];
    const looks = [
      {smooth:0,body:0,noise:0},
      {smooth:1,body:0,noise:0},
      {smooth:1,body:.7,bodySoft:1.5,noise:.3,noise2:.15,noiseBias:-1,noiseBias2:1},
      {smooth:.5,body:1,bodySoft:4,noise:.7,noise2:.4,noiseBias:1,noiseBias2:-1,rim:1,puffRim:1},
      {smooth:1,body:.3,noise:.3,depthFall:1,far:.1},
      {smooth:1,body:.6,noise:.4,diag:1},
      {smooth:1,body:.6,noise:.4,diag:5},
      {smooth:.5,body:.8,noise:.3,pixel:2,rim:.5,puffRim:.5,contact:1,cavity:1}
    ];
    return fixtures.flatMap((records, f) => looks.map((look, l) => {
      // This reconstructs the historical path before Shadow quiet existed; keep it disabled.
      const pixels = shadowAudit.capture(records, Object.assign({diag:0,shadowQuiet:0,noiseScale:1.5,noise2Scale:4}, look)).pixels;
      let binary = ''; for (let i=0;i<pixels.length;i+=8192) binary += String.fromCharCode(...pixels.subarray(i,i+8192));
      return { fixture:f, look:l, pixels:btoa(binary) };
    }));
  });
  await page.close(); assert.deepEqual(errors, []); return result;
}
(async () => {
  const browser = await chromium.launch({headless:true, executablePath:process.env.CHROME_PATH || undefined,
    args:['--enable-webgl','--ignore-gpu-blocklist']});
  try {
    const old = await capture(browser, previousPath(current)), next = await capture(browser, current);
    let max = 0, changed = 0;
    old.forEach((a, i) => {
      const aa = Buffer.from(a.pixels, 'base64'), bb = Buffer.from(next[i].pixels, 'base64');
      assert.equal(aa.length, bb.length);
      for (let k=0;k<aa.length;k++) { const d = Math.abs(aa[k]-bb[k]); max=Math.max(max,d); if(d)changed++; }
    });
    assert(max <= 1, 'Shared slope changed shading beyond one 8-bit level: ' + max);
    console.log(JSON.stringify({cases:old.length,maxChannelDifference:max,changedChannels:changed}));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode=1; });
