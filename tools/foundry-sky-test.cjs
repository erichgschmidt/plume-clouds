'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http'), os = require('node:os'), assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost'), file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (error, body) => { if (error) { res.writeHead(404).end(); return; } res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.html') ? 'text/html' : 'application/octet-stream'); res.end(body); });
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || undefined, args: ['--enable-webgl', '--ignore-gpu-blocklist'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } }), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('http://127.0.0.1:' + server.address().port + '/sky.html');
    await page.waitForFunction(() => window.foundrySky && foundrySky.ready, null, { timeout: 30000 });
    const initial = await page.evaluate(() => {
      const a = foundrySky; a.playing = false; a.reset();
      const packets = a.scene.project(a.renderer.canvas.width / a.renderer.canvas.height);
      a.renderer.render(packets, a.clock.time, a.settings);
      const gl = a.renderer.gl, w = a.renderer.canvas.width, h = a.renderer.canvas.height, pixels = new Uint8Array(w*h*4);
      gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      let nonSky = 0; for (let i = 0; i < pixels.length; i += 4) if (Math.abs(pixels[i]-20) + Math.abs(pixels[i+1]-110) + Math.abs(pixels[i+2]-135) > 20) nonSky++;
      return { ready: a.ready, count: packets.length, stats: a.renderer.stats, error: gl.getError(), coverage: nonSky/(w*h), phase: packets.map(p=>p.phase), paused: a.clock.time, x: a.scene.camera.x, particleGlobals: !!(window.ThermalSim || window.PuffRenderer || window.LayerSim) };
    });
    assert.equal(initial.error, 0); assert.equal(initial.particleGlobals, false); assert(initial.count > 0); assert(initial.stats.drawn > 0); assert(initial.coverage > .005, 'starter scene has visibly rendered cloud coverage');
    await page.screenshot({ path: path.join(os.tmpdir(), 'foundry-sky-start.png') });
    const controls = await page.evaluate(() => {
      const a = foundrySky, gl = a.renderer.gl;
      const fixed = [{ id: 99, x: 0, y: 0, scale: .7, yaw: 0, pitch: -30, distance: 5, opacity: 1, phase: 0 }];
      function read() { a.renderer.render(fixed, 1, a.settings); const p = new Uint8Array(a.renderer.canvas.width*a.renderer.canvas.height*4); gl.readPixels(0,0,a.renderer.canvas.width,a.renderer.canvas.height,gl.RGBA,gl.UNSIGNED_BYTE,p); return p; }
      function set(key, value) { const c = document.querySelector('#param-'+key); c.value = value; c.dispatchEvent(new Event('input')); }
      set('breathing', 0); const low = read(); set('breathing', .2); const high = read(); let breathingDiff = 0;
      for (let i = 0; i < low.length; i++) if (low[i] !== high[i]) breathingDiff++;
      const maxBreathing = document.querySelector('#param-breathing').max;
      set('shadowReach', 2); read(); const lowReach = gl.getUniform(a.renderer.post.p, gl.getUniformLocation(a.renderer.post.p, 'uShadowReach'));
      set('shadowReach', 64); read(); const highReach = gl.getUniform(a.renderer.post.p, gl.getUniformLocation(a.renderer.post.p, 'uShadowReach'));
      set('breathing', .06); set('shadowReach', 24);
      return { breathingDiff, maxBreathing, lowReach, highReach };
    });
    assert(controls.breathingDiff > 100); assert.equal(Number(controls.maxBreathing), .2); assert.equal(controls.lowReach, 2); assert.equal(controls.highReach, 64);
    const overhead = await page.evaluate(() => {
      const a = foundrySky, control = document.querySelector('#param-lookElevation'); control.value = 80; control.dispatchEvent(new Event('input'));
      const packets = a.scene.project(a.renderer.canvas.width/a.renderer.canvas.height), above = packets.find(p=>p.id===2);
      a.settings.cameraPitch = a.scene.settings.lookElevation; a.renderer.render(packets, a.clock.time, a.settings);
      const gl = a.renderer.gl, w = a.renderer.canvas.width, h = a.renderer.canvas.height, pixels = new Uint8Array(w*h*4);
      gl.readPixels(0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,pixels); let centeredCloudPixels = 0;
      for(let y=Math.floor(h*.35);y<h*.65;y++)for(let x=Math.floor(w*.35);x<w*.65;x++) { const i=(y*w+x)*4; if(Math.abs(pixels[i]-20)+Math.abs(pixels[i+1]-110)+Math.abs(pixels[i+2]-135)>20)centeredCloudPixels++; }
      let badReplacement = 0;
      const camera = { ...a.scene.camera }, clouds = a.scene.clouds.slice(), time = a.scene.time, phase = a.scene.swayPhase;
      for(let i=0;i<100;i++){const old=a.scene.clouds.slice();a.scene.advance(.05,0,{});old.forEach((c,j)=>{if(c.id!==a.scene.clouds[j].id&&a.scene.visible(a.scene.packet(c)))badReplacement++;});}
      a.scene.camera=camera; a.scene.clouds=clouds; a.scene.time=time; a.scene.swayPhase=phase;
      const probe = new FoundryScene({settings:{count:1,sway:0,size:1,lookElevation:80}});
      probe.clouds=[{id:73,x:.001,y:5,z:1,radius:1,born:-10,phase:0}];
      const poleViews=[];
      for(const dz of [.001,0,-.001]){probe.camera.z=1-dz;a.renderer.render(probe.project(1.5),0,a.settings);poleViews.push(Array.from(gl.getUniform(a.renderer.cloud.p,gl.getUniformLocation(a.renderer.cloud.p,'uViews'))));}
      a.renderer.render(a.scene.project(a.renderer.canvas.width/a.renderer.canvas.height),a.clock.time,a.settings);
      return { above, centeredCloudPixels, badReplacement, poleViews, cameraPitch:a.settings.cameraPitch, error:gl.getError() };
    });
    assert(overhead.above && Math.abs(overhead.above.y)<.2 && overhead.above.pitch < -75);
    assert(overhead.centeredCloudPixels > 500, 'underside is actually visible near the image center, not just conservative bounds');
    assert.equal(overhead.badReplacement,0); assert.equal(overhead.cameraPitch,80); assert.equal(overhead.error,0);
    assert.deepEqual(overhead.poleViews[0],overhead.poleViews[1]); assert.deepEqual(overhead.poleViews[1],overhead.poleViews[2], 'crossing zenith retains the same baked capture pair');
    await page.screenshot({path:path.join(os.tmpdir(),'foundry-sky-overhead.png')});
    await page.evaluate(()=>{const c=document.querySelector('#param-lookElevation');c.value=0;c.dispatchEvent(new Event('input'));});
    await page.waitForTimeout(150);
    assert.equal(await page.evaluate(() => foundrySky.clock.time), initial.paused);
    await page.locator('canvas').click({ position: { x: 10, y: 10 } });
    await page.keyboard.down('d'); await page.waitForTimeout(160); await page.keyboard.up('d');
    assert(await page.evaluate(() => foundrySky.scene.camera.x) > initial.x, 'manual camera works paused');
    assert.equal(await page.evaluate(() => foundrySky.clock.time), initial.paused);
    await page.evaluate(() => { foundrySky.playback.speed = 0; foundrySky.playing = true; });
    await page.waitForTimeout(150); assert.equal(await page.evaluate(() => foundrySky.clock.time), initial.paused);
    await page.evaluate(() => { foundrySky.playback.speed = 1; });
    await page.waitForTimeout(160); assert(await page.evaluate(() => foundrySky.clock.time) > initial.paused);
    const fly = await page.evaluate(() => {
      const a = foundrySky; a.playing = false; a.reset(); let seenUnderside = false, replacements = 0, badReplacement = 0;
      for (let frame = 0; frame < 1200; frame++) {
        const old = a.scene.clouds.slice(); a.scene.advance(.05, 0, {});
        for (let i = 0; i < old.length; i++) if (a.scene.clouds[i].id !== old[i].id) { replacements++; if (a.scene.visible(a.scene.packet(old[i]))) badReplacement++; }
        if (a.scene.project(1.5).some(p => p.pitch < -55)) seenUnderside = true;
      }
      a.clock.time = a.scene.time; return { replacements, badReplacement, seenUnderside };
    });
    assert(fly.replacements > 0); assert.equal(fly.badReplacement, 0); assert(fly.seenUnderside, 'travel visits underside captures');
    await page.evaluate(() => { const s = document.querySelector('#seed'); s.value = 0; s.dispatchEvent(new Event('change')); });
    assert.equal(await page.evaluate(() => foundrySky.scene.seed), 0, 'seed zero remains a valid deterministic layout');
    await page.locator('#assetFile').setInputFiles({ name: 'bad-cloud.json', mimeType: 'application/json', buffer: Buffer.from('{"format":"bad"}') });
    await page.waitForFunction(() => document.querySelector('#status').textContent.includes('Import failed'));
    assert.equal(await page.evaluate(() => foundrySky.ready), true, 'bad import retains last good asset');
    await page.evaluate(async () => { const a = foundrySky.asset; await FoundryAssets.save({ ...a, name: 'Sky transfer test' }, 'active'); await foundrySky.loadSaved(); });
    assert((await page.locator('#status').textContent()).includes('Sky transfer test'));
    await page.reload(); await page.waitForFunction(() => window.foundrySky && foundrySky.ready);
    assert.equal(await page.evaluate(() => foundrySky.asset.name), 'Sky transfer test', 'saved Foundry asset is restored on startup');
    assert.deepEqual(errors, []);
    console.log('PASS authored sky browser:', JSON.stringify({ initial, controls, overhead, fly, screenshot: path.join(os.tmpdir(), 'foundry-sky-start.png') }));
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
