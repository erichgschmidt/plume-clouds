/* Sky host for baked authored clouds. Scene, lighting and quality remain independent. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('canvas'), stage = $('stage'), status = $('status'), hud = $('hud');
  var scene = new FoundryScene({ seed: 1 }), clock = new CloudClock(), renderer;
  var settings = { sunAz: -42, sunAlt: 38, ao: .3, transmission: .28, bands: 5, palette: 'day', haze: .35, shadow: .4, shadowReach: 24, pixelSize: 2, breathing: .06, pixelSnap: true, detailMode: 'auto', sixWay: 1 };
  var playback = { speed: 1 }, playing = true, ready = false, loadSerial = 0, held = {}, drag = null, asset = null;
  function message(text, error) { status.textContent = text; status.classList.toggle('error', !!error); }
  function fit() { var grid = FoundryPixelGrid.measure(canvas, settings.pixelSize); scene.aspect = grid.aspect; return grid; }
  fit(); scene.reset(scene.seed); addEventListener('resize', fit);
  try { renderer = new BakedCloudRenderer(canvas); } catch (error) { message(error.message, true); hud.textContent = 'Cloud renderer unavailable'; return; }
  function seedValue() { var n = Number($('seed').value); return Number.isFinite(n) ? n | 0 : 1; }
  function reset() { clock.time = 0; scene.reset(seedValue()); scene.eye.x = 0; scene.eye.y = 0; }
  function group(title) { var d = document.createElement('details'), s = document.createElement('summary'); d.open = true; s.textContent = title; d.appendChild(s); $('controls').appendChild(d); return d; }
  function range(host, target, key, label, min, max, step, help, rebuild) {
    var row = document.createElement('div'), name = document.createElement('label'), input = document.createElement('input'), output = document.createElement('output');
    row.className = 'row'; row.title = help; name.textContent = label; input.type = 'range'; input.min = min; input.max = max; input.step = step; input.value = target[key]; input.id = 'param-' + key; name.htmlFor = input.id;
    function refresh() { output.value = Number(target[key]).toFixed(step >= 1 ? 0 : step >= .1 ? 1 : 2); }
    input.addEventListener('input', function () { target[key] = Number(input.value); refresh(); if (rebuild) reset(); });
    row.append(name, input, output); host.appendChild(row); refresh(); return input;
  }
  var sg = group('Scene');
  range(sg, playback, 'speed', 'Playback speed', 0, 2, .05, 'Rate of travel, sway and authored cloud animation. Zero freezes the scene.');
  range(sg, scene.settings, 'count', 'Cloud count', 1, 30, 1, 'Number of instances of this authored cloud. Rebuilds the seeded layout.', true);
  range(sg, scene.settings, 'travel', 'Travel', 0, 2, .05, 'Forward travel through the sky.');
  range(sg, scene.settings, 'drift', 'Wind drift', -.5, .5, .01, 'Sideways movement of the cloud field.');
  range(sg, scene.settings, 'size', 'Cloud size', .4, 2, .05, 'World size of the authored shapes.');
  range(sg, scene.settings, 'lookElevation', 'Look elevation', 0, 80, 1, 'Tilt the camera up to inspect the baked undersides of overhead clouds.');
  range(sg, scene.settings, 'sway', 'Sway', 0, .6, .02, 'Gentle camera movement driven by scene time.');
  range(sg, settings, 'breathing', 'Breathing', 0, .2, .005, 'Subtle authored-cloud breathing; zero keeps the shape still.');
  var lg = group('Light and atmosphere');
  range(lg, settings, 'sunAz', 'Sun direction', -180, 180, 1, 'Direction of the sun around the cloud.');
  range(lg, settings, 'sunAlt', 'Sun elevation', -35, 85, 1, 'Height of the sun.');
  range(lg, settings, 'shadow', 'Cloud shadows', 0, 1, .02, 'Approximate shadows between visible clouds. Hidden or offscreen blockers are not represented.');
  range(lg, settings, 'shadowReach', 'Shadow reach', 2, 64, 1, 'Search distance in render pixels for shadows between visible clouds.');
  range(lg, settings, 'ao', 'Cavity', 0, 1, .02, 'Darkening of sheltered areas in the baked cloud.');
  range(lg, settings, 'transmission', 'Light through', 0, 1, .02, 'Warm light passing through thin parts of the cloud.');
  var sixWayInput = range(lg, settings, 'sixWay', 'Baked lighting', 0, 1, .02, 'Use the authored response to light from six directions. Lower values favor normal-based lighting.');
  var sixWayHint = document.createElement('p'); sixWayHint.id = 'lightingHint'; lg.appendChild(sixWayHint); sixWayInput.disabled = true;
  range(lg, settings, 'haze', 'Distance haze', 0, 1, .02, 'Atmospheric blending grows with distance.');
  var row = document.createElement('div'), label = document.createElement('label'), select = document.createElement('select'); row.className = 'row'; label.textContent = 'Palette'; label.htmlFor = 'param-palette'; select.id = 'param-palette';
  [['day', 'Daylight'], ['dusk', 'Dusk'], ['moon', 'Moonlight']].forEach(function (entry) { var o = document.createElement('option'); o.value = entry[0]; o.textContent = entry[1]; select.appendChild(o); });
  select.addEventListener('change', function () { settings.palette = select.value; }); row.append(label, select); lg.appendChild(row);
  var qg = group('Quality');
  range(qg, settings, 'pixelSize', 'Pixel size', 1, 5, 1, 'Approximate pixel size on screen, rounded to whole physical pixels for a clean grid.');
  var snapRow = document.createElement('div'), snapLabel = document.createElement('label'), snapInput = document.createElement('input'); snapRow.className = 'row'; snapLabel.textContent = 'Snap motion'; snapLabel.htmlFor = 'param-pixelSnap'; snapInput.id = 'param-pixelSnap'; snapInput.type = 'checkbox'; snapInput.checked = settings.pixelSnap;
  snapRow.title = 'Move cloud centers in whole render pixels. Animation time and camera motion remain continuous.'; snapInput.addEventListener('change', function () { settings.pixelSnap = snapInput.checked; }); snapRow.append(snapLabel, snapInput); qg.appendChild(snapRow);
  var detailRow = document.createElement('div'), detailLabel = document.createElement('label'), detailSelect = document.createElement('select'); detailRow.className = 'row'; detailLabel.textContent = 'Detail'; detailLabel.htmlFor = 'param-detailMode'; detailSelect.id = 'param-detailMode';
  [['auto', 'Automatic detail'], ['full', 'Full resolution']].forEach(function (entry) { var o = document.createElement('option'); o.value = entry[0]; o.textContent = entry[1]; detailSelect.appendChild(o); });
  detailSelect.addEventListener('change', function () { settings.detailMode = detailSelect.value; }); detailRow.title = 'Automatic detail reduces distant texture shimmer and rendering work. Full resolution always uses the original maps.'; detailRow.append(detailLabel, detailSelect); qg.appendChild(detailRow);
  range(qg, settings, 'bands', 'Color bands', 0, 8, 1, '0 or 1 uses smooth tones; 2–8 deliberately steps the cloud and shadow palette. Pixel edges remain crisp.');
  function applyAsset(next, source) {
    FoundryAssets.validate(next); renderer.load(next); asset = next; scene.assetAspect = next.w / next.h;
    // The source depth box rotates between captured views; its enclosing sphere
    // plus maximum breathing bounds every projected view, including undersides.
    scene.assetBound = Math.hypot(next.w / next.h, 1, next.range / next.halfHeight) + .28; ready = true;
    message(source + ': ' + (next.name || 'Authored cloud') + ' · ' + next.views.length + ' views · ' + next.w + ' × ' + next.h);
    sixWayInput.disabled = !next.lighting;
    sixWayHint.textContent = next.lighting ? 'Directional lighting is included in this cloud.' : 'This older asset uses normal lighting. Rebake it in Foundry to enable directional baked lighting.';
    api.asset = next;
  }
  async function loadSaved() {
    var serial = ++loadSerial, saved = null, problem = '';
    message('Loading saved cloud…');
    try { saved = await FoundryAssets.load('active'); } catch (error) { problem = error.message; }
    if (serial !== loadSerial) return;
    try {
      if (saved) applyAsset(saved, 'From Foundry');
      else if (typeof FOUNDRY_DEFAULT !== 'undefined') { applyAsset(FoundryAssets.parse(FOUNDRY_DEFAULT), 'Starter cloud'); if (problem) message('Starter cloud loaded. ' + problem, true); }
      else throw Error(problem || 'No saved cloud or starter asset is available. Open Foundry, bake a cloud, and choose Use in sky.');
    } catch (error) { message(error.message, true); if (!ready) hud.textContent = 'Import a baked cloud asset to start'; }
  }
  $('btnLoad').addEventListener('click', loadSaved);
  $('btnStarter').addEventListener('click', function () { ++loadSerial; try { applyAsset(FoundryAssets.parse(FOUNDRY_DEFAULT), 'Starter cloud'); } catch (error) { message(error.message, true); } });
  $('btnImport').addEventListener('click', function () { $('assetFile').click(); });
  $('assetFile').addEventListener('change', async function () {
    var file = this.files[0]; if (!file) return; var serial = ++loadSerial;
    try { if (file.size > FoundryAssets.MAX_BYTES * 1.4 + 1048576) throw Error('Cloud asset file is too large.'); var next = FoundryAssets.parse(await file.text()); if (serial === loadSerial) applyAsset(next, 'Imported'); }
    catch (error) { if (serial === loadSerial) message('Import failed: ' + error.message, true); }
    this.value = '';
  });
  $('btnPlay').addEventListener('click', function () { playing = !playing; this.textContent = playing ? 'Pause' : 'Play'; });
  $('btnNew').addEventListener('click', function () { $('seed').value = seedValue() + 1; reset(); }); $('seed').addEventListener('change', reset);
  function key(e, down) { if (down && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return; var k = e.key.toLowerCase(); if (['a', 'd', 'w', 's', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown'].indexOf(k) < 0) return; held[k] = down; e.preventDefault(); }
  addEventListener('keydown', function (e) { key(e, true); }); addEventListener('keyup', function (e) { key(e, false); }); addEventListener('blur', function () { held = {}; drag = null; });
  canvas.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, y: e.clientY, ex: scene.eye.x, ey: scene.eye.y }; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', function (e) { if (drag) { var k = 10 / Math.max(1, canvas.getBoundingClientRect().height); scene.eye.x = drag.ex - (e.clientX - drag.x) * k; scene.eye.y = drag.ey + (e.clientY - drag.y) * k; } });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(function (event) { canvas.addEventListener(event, function () { drag = null; }); });
  canvas.addEventListener('dblclick', function () { scene.eye.x = 0; scene.eye.y = 0; scene.camera.x = 0; scene.camera.y = 0; });
  var api = window.foundrySky = { scene: scene, renderer: renderer, settings: settings, playback: playback, clock: clock, asset: asset, loadSaved: loadSaved, applyAsset: applyAsset, reset: reset,
    get playing() { return playing; }, set playing(value) { playing = !!value; $('btnPlay').textContent = playing ? 'Pause' : 'Play'; }, get ready() { return ready; } };
  api.readyPromise = loadSaved();
  var last = performance.now(), elapsed = 0, frames = 0, fps = 0;
  function frame(now) {
    var dt = Math.min(.1, Math.max(0, (now - last) / 1000)); last = now;
    var sceneDt = clock.advance(dt, playback.speed, playing && ready);
    var x = ((held.d || held.arrowright) ? 1 : 0) - ((held.a || held.arrowleft) ? 1 : 0), y = ((held.w || held.arrowup) ? 1 : 0) - ((held.s || held.arrowdown) ? 1 : 0);
    scene.advance(sceneDt, dt, { x: x * 3, y: y * 3 });
    if (ready) {
      try { var grid = fit(), instances = scene.project(grid.aspect); settings.cameraPitch = scene.settings.lookElevation; renderer.render(instances, clock.time, settings); api.instances = instances; api.grid = grid; }
      catch (error) { message('Render failed: ' + error.message, true); ready = false; }
      elapsed += dt; frames++; if (elapsed >= .5) { fps = Math.round(frames / elapsed); frames = 0; elapsed = 0; }
      hud.textContent = fps + ' fps · ' + (api.instances || []).length + ' clouds · ' + clock.time.toFixed(1) + ' s';
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
