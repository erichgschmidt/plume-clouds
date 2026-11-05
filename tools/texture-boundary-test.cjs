/* Diagnostic only: fixed unequal overlapping puffs, production shadowAudit capture.
 * PLAYWRIGHT_MODULE selects Playwright; TEXTURE_DIAGNOSTICS selects output directory.
 * This deliberately reports measurements without asserting that the current image is correct.
 */
'use strict';
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const output = process.env.TEXTURE_DIAGNOSTICS || path.join(os.tmpdir(), 'plume-texture-boundary');
const url = process.env.CLOUD_TEST_URL || 'http://127.0.0.1:8765';
(async () => {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || undefined,
    args: ['--enable-webgl', '--ignore-gpu-blocklist'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1610, height: 1000 } }), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(url + '/tools/shadow-test.html');
    await page.waitForFunction(() => window.shadowAudit && window.modernResults);
    const report = await page.evaluate(config => {
      const A = shadowAudit, R = A.renderer, gl = R.gl, W = 512, H = 384;
      const records = config.children ? [[.45, .375, .17, 0]] : [[.43, .375, .17, 0], [.59, .365, .10, .08]];
      const common = { sun: 86, elevation: 6, noise: 0, noise2Scale: 3, noiseBias2: config.bias, flow: 0,
        fill: .11, shadow: .64, baseShade: .5, contact: 0, cavity: 0, rim: 0, puffRim: 0, smooth: 0, body: 0,
        shadowQuiet: 0, grain: 0, bands: 5, cap: 0, softness: 1, depth: 1 };
      if (config.children) Object.assign(common, { children: 1, levels: 2, ratio: .65, life: 0, embed: .85 });
      if (config.detailSplit || config.sharedAnchors) {
        const tree = R._tree;
        R._tree = function () {
          tree.apply(R, arguments); const M = PuffRenderer.MAX_SPH, D = R._sphData;
          for (let i = 0; i < R.count; i++) {
            if (config.detailSplit) D[(M + i) * 4 + 1] = i ? .6 : .25;
            if (config.sharedAnchors) { D[(2 * M + i) * 4] = .43; D[(2 * M + i) * 4 + 1] = .375; }
          }
          const bound = gl.getParameter(gl.TEXTURE_BINDING_2D); gl.bindTexture(gl.TEXTURE_2D, R._sphTex);
          gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, M, 8, gl.RGBA, gl.FLOAT, D); gl.bindTexture(gl.TEXTURE_2D, bound);
        };
      }
      const cases = [], images = { color: [], light: [], fields: [] };
      function attachment(n) {
        const raw = new Float32Array(R._w * R._h * 4), full = new Float32Array(W * H * 4);
        gl.bindFramebuffer(gl.FRAMEBUFFER, R._fbo); gl.readBuffer(gl.COLOR_ATTACHMENT0 + n);
        gl.readPixels(0, 0, R._w, R._h, gl.RGBA, gl.FLOAT, raw);
        gl.readBuffer(gl.COLOR_ATTACHMENT0); gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
          const i = (Math.floor((y + .5) * R._h / H) * R._w + Math.floor((x + .5) * R._w / W)) * 4;
          full.set(raw.subarray(i, i + 4), (y * W + x) * 4);
        }
        return full;
      }
      function image(data, label, channelMap) {
        const c = document.createElement('canvas'); c.width = W; c.height = H;
        const ctx = c.getContext('2d'), im = ctx.createImageData(W, H);
        for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
          const src = ((H - 1 - y) * W + x) * 4, dst = (y * W + x) * 4;
          const rgb = channelMap ? channelMap(src) : data.subarray(src, src + 3);
          im.data[dst] = rgb[0]; im.data[dst + 1] = rgb[1]; im.data[dst + 2] = rgb[2]; im.data[dst + 3] = 255;
        }
        ctx.putImageData(im, 0, 0); return { label, url: c.toDataURL() };
      }
      function maxDifference(a, b) { let max = 0; for (let i = 0; i < a.length; i++) max = Math.max(max, Math.abs(a[i] - b[i])); return max; }
      for (const modelVersion of [2, 1]) for (const pixel of [1, 2]) {
        const label = 'Model ' + modelVersion + ' · pixel ' + pixel;
        const variants = [{ name: 'Texture off', noise2: 0, anchor: 1 }, { name: 'Fine 1.5 · anchored', noise2: 1.5, anchor: 1 }, { name: 'Fine 1.5 · screen anchored', noise2: 1.5, anchor: 0 }];
        const captures = variants.map(v => {
          const options = Object.assign({}, common, { modelVersion, pixel }, v);
          const color = A.capture(records, Object.assign({}, options, { diag: 0 }));
          const light = A.capture(records, Object.assign({}, options, { diag: 7 }));
          return { color, light, aux: attachment(1), gradients: attachment(3) };
        });
        captures.forEach((c, i) => {
          images.color.push(image(c.color.pixels, label + ' · ' + variants[i].name));
          images.light.push(image(c.light.pixels, label + ' · ' + variants[i].name));
        });
        const [off, anchored, screen] = captures, boundaries = [], profile = [];
        let pixels = 0, boundaryPixels = 0, anchoredBoundaryJump = 0, screenBoundaryJump = 0, offBoundaryJump = 0;
        for (let y = 2; y < H - 2; y++) for (let x = 2; x < W - 2; x++) {
          const i = (y * W + x) * 4, j = i + pixel * 4;
          if (x + pixel >= W || off.light.field[i + 3] < .99 || off.light.field[j + 3] < .99) continue;
          pixels++;
          const da = Math.hypot(off.aux[j + 2] - off.aux[i + 2], off.aux[j + 3] - off.aux[i + 3]);
          const dh = Math.abs(off.light.field[j] - off.light.field[i]);
          const jump = c => Math.abs(c.light.pixels[j] - c.light.pixels[i]);
          const detailDelta = Math.abs(off.light.field[j + 1] - off.light.field[i + 1]);
          if ((da > .005 || detailDelta > .02) && dh < .02) {
            boundaryPixels++; anchoredBoundaryJump += jump(anchored); screenBoundaryJump += jump(screen); offBoundaryJump += jump(off);
            boundaries.push({ x, y: H - 1 - y, anchorDelta: da, detailDelta, heightDelta: dh,
              offJump: jump(off), anchoredJump: jump(anchored), screenJump: jump(screen),
              anchor0: Array.from(off.aux.subarray(i + 2, i + 4)), anchor1: Array.from(off.aux.subarray(j + 2, j + 4)),
              light0: [off.light.pixels[i], anchored.light.pixels[i], screen.light.pixels[i]],
              light1: [off.light.pixels[j], anchored.light.pixels[j], screen.light.pixels[j]] });
          }
          if (y === H / 2 && x >= 175 && x <= 370) profile.push({ x, h: off.light.field[i], gx: off.gradients[i], gy: off.gradients[i + 1],
            anchor: [off.aux[i + 2], off.aux[i + 3]], off: off.light.pixels[i], anchored: anchored.light.pixels[i], screen: screen.light.pixels[i] });
        }
        boundaries.sort((a, b) => (b.anchoredJump - b.screenJump) - (a.anchoredJump - a.screenJump));
        cases.push({ modelVersion, pixel, puffCount: R.count, fieldSize: [R._w, R._h], pixels, boundaryPixels,
          fieldChange: maxDifference(off.light.field, anchored.light.field), auxChange: maxDifference(off.aux, anchored.aux),
          gradientChange: maxDifference(off.gradients, anchored.gradients),
          meanBoundaryJump: { off: offBoundaryJump / Math.max(1, boundaryPixels), anchored: anchoredBoundaryJump / Math.max(1, boundaryPixels), screen: screenBoundaryJump / Math.max(1, boundaryPixels) },
          strongestAnchorSeams: boundaries.slice(0, 20), profile });
        images.fields.push(image(null, label + ' · height', i => off.light.field[i + 3] < .5 ? [19, 115, 147] : Array(3).fill((off.light.field[i] + .15) * 550)));
        images.fields.push(image(null, label + ' · anchor X (rescaled)', i => off.light.field[i + 3] < .5 ? [19, 115, 147] : [255 * (off.aux[i + 2] - .4) / .2, 255 * (off.aux[i + 2] - .4) / .2, 255 * (off.aux[i + 2] - .4) / .2]));
        images.fields.push(image(null, label + ' · anchored minus screen light (signed)', i => {
          const d = anchored.light.pixels[i] - screen.light.pixels[i]; return d > 0 ? [128 + d, 128, 128] : [128, 128, 128 - d];
        }));
      }
      window.textureBoundaryImages = images;
      return { records, common, config, cases, glError: gl.getError() };
    }, { bias: +(process.env.TEXTURE_BIAS || 0), children: process.env.TEXTURE_CHILDREN === '1',
      detailSplit: process.env.TEXTURE_DETAIL_SPLIT === '1', sharedAnchors: process.env.TEXTURE_SHARED_ANCHORS === '1' });
    for (const gallery of ['color', 'light', 'fields']) {
      await page.evaluate(gallery => {
        document.body.innerHTML = '<h1>Texture boundary diagnostic — ' + gallery + '</h1><main></main>';
        document.head.insertAdjacentHTML('beforeend', '<style>body{background:#202629;color:#ddd;margin:12px;font:13px monospace}main{display:grid;grid-template-columns:repeat(3,512px);gap:12px}figure{margin:0}img{display:block;width:512px;height:384px;image-rendering:pixelated}figcaption{padding:5px}</style>');
        for (const v of textureBoundaryImages[gallery]) {
          const fig = document.createElement('figure'), img = document.createElement('img'), cap = document.createElement('figcaption');
          img.src = v.url; cap.textContent = v.label; fig.append(img, cap); document.querySelector('main').append(fig);
        }
      }, gallery);
      await page.screenshot({ path: path.join(output, 'texture-boundary-' + gallery + '.png'), fullPage: true });
    }
    fs.writeFileSync(path.join(output, 'texture-boundary.json'), JSON.stringify(report, null, 2));
    assert.deepEqual(errors, [], 'browser runtime errors'); assert.equal(report.glError, 0, 'readback valid');
    for (const test of report.cases) {
      assert.equal(test.fieldChange, 0, 'fine texture must not alter the surface field');
      assert.equal(test.auxChange, 0, 'fine texture must not alter ownership attributes');
      assert.equal(test.gradientChange, 0, 'fine texture must not alter stored macro gradients');
    }
    console.log(JSON.stringify({ output, cases: report.cases.map(({ profile, strongestAnchorSeams, ...summary }) => summary) }, null, 2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
