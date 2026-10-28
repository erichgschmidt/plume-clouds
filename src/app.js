/* Plume Clouds — shell (index.html + src/app.js). Classic script, no modules.
 * Depends on window.CloudSim (src/sim.js) and window.CloudRenderer (src/render.js)
 * per CONTRACT.md. */
(function () {
  'use strict';

  // ---------- state ----------
  var DEFAULTS = {
    seed: 7401,
    preset: 'plumes',
    settings: { speed: 1, cohesion: .6, breakup: .5, buoyancy: .5, turbulence: .4, coverage: .6 },
    look: { billow: .5, softness: .3, erosion: .4, relief: .5, sun: 120, elevation: 17, shadow: .8, bands: 18, sky: true, pixelated: true },
    resolution: 320
  };
  var PRESETS = (window.CloudSim && window.CloudSim.PRESETS) || ['plumes', 'lavalamp', 'islands', 'confluence'];
  var RESOLUTIONS = [160, 240, 320, 480];

  var state = clone(DEFAULTS);
  var playing = true;
  var simTime = 0;

  // ---------- dom ----------
  var $ = function (id) { return document.getElementById(id); };
  var stage = $('stage'), canvas = $('canvas'), banner = $('banner');
  var seedInput = $('seed'), presetSeg = $('presets');
  var statFps = $('statFps'), statBlobs = $('statBlobs');
  var btnPlay = $('btnPlay');

  // ---------- control specs ----------
  var SIM_SPEC = [
    ['speed', 'Speed', 0, 3, 0.01],
    ['cohesion', 'Cohesion', 0, 1, 0.01],
    ['breakup', 'Breakup', 0, 1, 0.01],
    ['buoyancy', 'Buoyancy', 0, 1, 0.01],
    ['turbulence', 'Turbulence', 0, 1, 0.01],
    ['coverage', 'Coverage', 0, 1, 0.01]
  ];
  var LOOK_SPEC = [
    ['billow', 'Billow', 0, 1, 0.01],
    ['softness', 'Softness', 0, 1, 0.01],
    ['erosion', 'Erosion', 0, 1, 0.01],
    ['relief', 'Relief', 0, 1, 0.01],
    ['sun', 'Sun', 0, 360, 1],
    ['elevation', 'Elevation', -60, 60, 1],
    ['shadow', 'Shadow', 0, 1, 0.01],
    ['bands', 'Bands', 4, 32, 1]
  ];
  var sliders = {}; // key -> {range, val, spec, target}

  function makeSlider(parent, target, spec) {
    var key = spec[0], min = spec[2], max = spec[3], step = spec[4];
    var row = el('div', 'row');
    var label = el('label'); label.textContent = spec[1];
    var range = el('input'); range.type = 'range'; range.min = min; range.max = max; range.step = step;
    var val = el('input', 'val'); val.type = 'text'; val.spellcheck = false;
    row.appendChild(label); row.appendChild(range); row.appendChild(val);
    parent.appendChild(row);
    var entry = { range: range, val: val, spec: spec, target: target };
    sliders[key] = entry;

    var apply = function (v) {
      v = clamp(Number(v), min, max);
      if (isNaN(v)) v = state[target][key];
      if (step >= 1) v = Math.round(v);
      state[target][key] = v;
      refreshSlider(key);
      onChanged(target, key);
    };
    range.addEventListener('input', function () { apply(range.value); });
    val.addEventListener('change', function () { apply(val.value); });
    val.addEventListener('keydown', function (e) { if (e.key === 'Enter') { val.blur(); } e.stopPropagation(); });
    val.addEventListener('focus', function () { val.select(); });
  }

  function refreshSlider(key) {
    var s = sliders[key], v = state[s.target][key];
    s.range.value = v;
    s.val.value = s.spec[4] >= 1 ? String(v) : v.toFixed(2);
  }

  function makeSelect(parent, labelText, options, get, set) {
    var row = el('div', 'row');
    var label = el('label'); label.textContent = labelText;
    var sel = el('select');
    options.forEach(function (o) { var op = el('option'); op.value = o; op.textContent = o; sel.appendChild(op); });
    sel.value = get();
    sel.addEventListener('change', function () { set(sel.value); });
    row.appendChild(label); row.appendChild(sel); parent.appendChild(row);
    return sel;
  }

  function makeToggle(parent, labelText, get, set) {
    var row = el('div', 'row');
    var label = el('label'); label.textContent = labelText;
    var wrap = el('div', 'chk');
    var cb = el('input'); cb.type = 'checkbox'; cb.checked = get();
    cb.addEventListener('change', function () { set(cb.checked); });
    wrap.appendChild(cb); row.appendChild(label); row.appendChild(wrap); parent.appendChild(row);
    return cb;
  }

  // ---------- build panel ----------
  var simBody = $('simBody'), lookBody = $('lookBody');
  SIM_SPEC.forEach(function (s) { makeSlider(simBody, 'settings', s); });
  LOOK_SPEC.forEach(function (s) { makeSlider(lookBody, 'look', s); });
  var resSelect = makeSelect(lookBody, 'Resolution', RESOLUTIONS,
    function () { return String(state.resolution); },
    function (v) { state.resolution = Number(v); if (renderer) renderer.resize(state.resolution); });
  var skyToggle = makeToggle(lookBody, 'Sky',
    function () { return state.look.sky; },
    function (v) { state.look.sky = v; });
  var pixToggle = makeToggle(lookBody, 'Pixelated',
    function () { return state.look.pixelated; },
    function (v) { state.look.pixelated = v; applyPixelated(); });

  var presetButtons = {};
  PRESETS.forEach(function (p) {
    var b = el('button', 'btn'); b.textContent = p; b.title = p;
    b.addEventListener('click', function () { state.preset = p; refreshPresets(); reseed(); });
    presetSeg.appendChild(b); presetButtons[p] = b;
  });

  // foldouts
  Array.prototype.forEach.call(document.querySelectorAll('.group > header'), function (h) {
    h.addEventListener('click', function () { h.parentNode.classList.toggle('collapsed'); });
  });

  // playback
  btnPlay.addEventListener('click', togglePlay);
  $('btnRestart').addEventListener('click', restart);

  // field
  seedInput.addEventListener('change', function () {
    var v = Math.round(Number(seedInput.value));
    if (!isFinite(v)) v = state.seed;
    state.seed = v; seedInput.value = v; reseed();
  });
  seedInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') seedInput.blur(); e.stopPropagation(); });
  $('btnShuffle').addEventListener('click', function () {
    state.seed = Math.floor(Math.random() * 1e9); seedInput.value = state.seed; reseed();
  });

  // file
  $('btnSave').addEventListener('click', saveJson);
  $('btnLoad').addEventListener('click', function () { $('loadFile').click(); });
  $('loadFile').addEventListener('change', function (e) {
    var f = e.target.files && e.target.files[0]; if (!f) return;
    var rd = new FileReader();
    rd.onload = function () { try { loadState(JSON.parse(rd.result)); } catch (err) { showBanner('Load failed: ' + err.message); } };
    rd.readAsText(f); e.target.value = '';
  });
  $('btnCopy').addEventListener('click', function () {
    var text = JSON.stringify(exportState(), null, 2);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(flashCopy, function () { fallbackCopy(text); });
    } else fallbackCopy(text);
  });

  // keyboard
  window.addEventListener('keydown', function (e) {
    var t = e.target, tag = t && t.tagName;
    if (tag === 'INPUT' && t.type !== 'range' && t.type !== 'checkbox') return;
    if (tag === 'SELECT' || tag === 'TEXTAREA') return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    else if (e.code === 'KeyR') { e.preventDefault(); restart(); }
    else if (e.code === 'KeyF') { e.preventDefault(); toggleFullscreen(); }
  });

  // ---------- sim + renderer ----------
  var sim = null, renderer = null;
  fitCanvas(); // size backing store first so the sim gets the real aspect
  try {
    sim = new CloudSim({ seed: state.seed, preset: state.preset, aspect: aspect() });
    pushSettings();
  } catch (err) {
    showBanner('Simulation failed to start: ' + (err && err.message || err));
  }
  try {
    renderer = new CloudRenderer(canvas);
  } catch (err) {
    showBanner('Renderer unavailable (WebGL2 required): ' + (err && err.message || err));
  }

  function aspect() { return canvas.width > 0 ? canvas.height / canvas.width : 0.75; }

  function fitCanvas() {
    var dpr = window.devicePixelRatio || 1;
    var w = Math.max(1, Math.round(stage.clientWidth * dpr));
    var h = Math.max(1, Math.round(stage.clientHeight * dpr));
    if (canvas.width === w && canvas.height === h) return;
    canvas.width = w; canvas.height = h;
    if (sim) sim.resize(aspect());
    if (renderer) renderer.resize(state.resolution);
  }

  function pushSettings() { if (sim) sim.settings = clone(state.settings); }

  function onChanged(target /*, key */) {
    if (target === 'settings') pushSettings();
  }

  function reseed() {
    if (!sim) return;
    sim.reseed(state.seed, state.preset);
    pushSettings();
    simTime = 0;
  }
  function restart() { reseed(); }

  function togglePlay() { playing = !playing; btnPlay.textContent = playing ? 'Pause' : 'Play'; btnPlay.classList.toggle('on', !playing); }

  function toggleFullscreen() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (stage.requestFullscreen) stage.requestFullscreen();
  }

  function applyPixelated() { stage.classList.toggle('pixelated', !!state.look.pixelated); }

  // ---------- loop ----------
  var last = performance.now(), frames = 0, fpsAccum = 0, statTimer = 0;
  function frame(now) {
    var elapsed = (now - last) / 1000; last = now;
    var dt = Math.min(1 / 20, Math.max(0, elapsed));
    if (sim && playing) { sim.step(dt); simTime += dt; }
    if (renderer && sim) {
      try { renderer.render(sim, state.look, simTime); }
      catch (err) { showBanner('Render error: ' + (err && err.message || err)); renderer = null; }
    }
    frames++; fpsAccum += elapsed; statTimer += elapsed;
    if (statTimer >= 0.25) {
      statFps.textContent = fpsAccum > 0 ? (frames / fpsAccum).toFixed(0) : '--';
      statBlobs.textContent = sim ? String(sim.blobCount) : '--';
      frames = 0; fpsAccum = 0; statTimer = 0;
    }
    requestAnimationFrame(frame);
  }

  // ---------- state io ----------
  function exportState() {
    return { seed: state.seed, preset: state.preset, settings: clone(state.settings), look: clone(state.look), resolution: state.resolution };
  }
  function loadState(obj) {
    if (!obj || typeof obj !== 'object') throw new Error('not an object');
    if (isFinite(obj.seed)) state.seed = Math.round(Number(obj.seed));
    if (PRESETS.indexOf(obj.preset) >= 0) state.preset = obj.preset;
    if (obj.settings) SIM_SPEC.forEach(function (s) { var v = Number(obj.settings[s[0]]); if (isFinite(v)) state.settings[s[0]] = clamp(v, s[2], s[3]); });
    if (obj.look) {
      LOOK_SPEC.forEach(function (s) { var v = Number(obj.look[s[0]]); if (isFinite(v)) state.look[s[0]] = clamp(s[4] >= 1 ? Math.round(v) : v, s[2], s[3]); });
      if (typeof obj.look.sky === 'boolean') state.look.sky = obj.look.sky;
      if (typeof obj.look.pixelated === 'boolean') state.look.pixelated = obj.look.pixelated;
    }
    if (RESOLUTIONS.indexOf(Number(obj.resolution)) >= 0) state.resolution = Number(obj.resolution);
    refreshAll();
    reseed();
    if (renderer) renderer.resize(state.resolution);
  }
  function refreshAll() {
    Object.keys(sliders).forEach(refreshSlider);
    seedInput.value = state.seed;
    refreshPresets();
    resSelect.value = String(state.resolution);
    skyToggle.checked = state.look.sky;
    pixToggle.checked = state.look.pixelated;
    applyPixelated();
  }
  function refreshPresets() {
    Object.keys(presetButtons).forEach(function (p) { presetButtons[p].classList.toggle('on', p === state.preset); });
  }
  function saveJson() {
    var blob = new Blob([JSON.stringify(exportState(), null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'clouds-' + state.preset + '-' + state.seed + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); flashCopy(); } catch (e) { showBanner('Copy failed'); }
    ta.remove();
  }
  function flashCopy() {
    var b = $('btnCopy'); b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 800);
  }

  // ---------- helpers ----------
  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function showBanner(msg) { banner.textContent = msg; banner.classList.add('show'); console.error(msg); }

  // ---------- go ----------
  refreshAll();
  // click-drag on the stage aims the light: direction from the stage centre = sun azimuth
  // (CCW degrees, 0 = from the right, 90 = from the top), distance from the centre = elevation
  // (near the centre = high sun, near the edge = grazing)
  var dragging = false;
  function aimLight(e) {
    var r = stage.getBoundingClientRect();
    var dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    var dy = ((r.top + r.height / 2) - e.clientY) / (r.height / 2);
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len < 0.02) return;
    var deg = Math.atan2(dy, dx) * 180 / Math.PI; if (deg < 0) deg += 360;
    state.look.sun = Math.round(deg);
    state.look.elevation = Math.round(clamp(60 - 60 * Math.min(len, 1), -60, 60));
    refreshSlider('sun'); refreshSlider('elevation');
    onChanged('look', 'sun');
  }
  stage.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    dragging = true; stage.setPointerCapture(e.pointerId); aimLight(e); e.preventDefault();
  });
  stage.addEventListener('pointermove', function (e) { if (dragging) aimLight(e); });
  function endDrag(e) { if (!dragging) return; dragging = false; try { stage.releasePointerCapture(e.pointerId); } catch (_) {} }
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);

  fitCanvas();
  if (window.ResizeObserver) new ResizeObserver(fitCanvas).observe(stage);
  window.addEventListener('resize', fitCanvas);
  document.addEventListener('fullscreenchange', fitCanvas);
  requestAnimationFrame(function (t) { last = t; requestAnimationFrame(frame); });
})();
