/* Plume Clouds — shell (index.html + src/app.js). Classic script, no modules.
 * Depends on window.CloudSim (src/sim.js) and window.CloudRenderer (src/render.js)
 * per CONTRACT.md. */
(function () {
  'use strict';

  // ---------- state ----------
  var DEFAULTS = {
    seed: 7401,
    preset: 'confluence',
    settings: { speed: 1, cohesion: .6, breakup: .5, buoyancy: .6, turbulence: .35, coverage: .6 },
    look: { billow: 3, softness: .79, blend: 1, erosion: .35, erosionFlow: 0, relief: 2, depth: .55, roll: .6, sun: 81, elevation: -17, shadow: .64, highlight: .68, fill: .2, bands: 5, toneA: .485, toneB: .89, flatten: .8, shadowDetail: .35, formAO: .7, formRadius: 2.5, ink: .5, sky: true, pixelated: true, toon: false, patchN: true, carveEnabled: true, noiseType: 'Voronoi', invertNoise: true, ao: 1.0, aoRadius: 1.6, aoFalloff: 1.5, primaryNoiseType: 'Voronoi', primaryInvertNoise: true, primaryScale: 1.8, inflation: 0.1, embed: 0.12, primaryCarve: 1.2, carve: 0.25, cellScale: 1.2, cellFlow: 0.65 },
    paint: {active: false, initialized: false, brushSize: 10, refRadius: .16, maxParcelRadius: .25, serial: 0, time: 0, parcels: []},
    resolution: 160
  };
  var PRESETS = (window.CloudSim && window.CloudSim.PRESETS) || ['single', 'plumes', 'lavalamp', 'islands', 'confluence'];
  var RESOLUTIONS = [160, 240, 320, 480];

  var state = clone(DEFAULTS);
  var playing = true;
  var simTime = 0;

  // A separate canvas preserves the procedural scene and all renderer controls.
  // Geometry is stored in normalized canvas coordinates; radii use canvas width.
  var paintTool = 'light', paintStroke = null, paintHover = null;
  var paintUndo = [], paintRedo = [], paintDirty = true, paintAspect = -1;
  var paintScene = {
    blobs: new Float32Array(64 * 4), aux: new Float32Array(64 * 4),
    blobCount: 0, refRadius: .16, maxParcelRadius: .25
  };

  // ---------- dom ----------
  var $ = function (id) { return document.getElementById(id); };
  var stage = $('stage'), canvas = $('canvas'), banner = $('banner');
  var seedInput = $('seed'), presetSeg = $('presets');
  var statFps = $('statFps'), statBlobs = $('statBlobs');
  var btnPlay = $('btnPlay');

  // ---------- control specs ----------
  var SIM_SPEC = [
    ['speed', 'Speed', 0, 6, 0.01],
    ['cohesion', 'Cohesion', 0, 1, 0.01],
    ['breakup', 'Breakup', 0, 1, 0.01],
    ['buoyancy', 'Buoyancy', 0, 1, 0.01],
    ['turbulence', 'Turbulence', 0, 1, 0.01],
    ['coverage', 'Coverage', 0, 1, 0.01]
  ];
  var MOTION_SPEC = [
    ['cellFlow', 'Flow', 0, 3, 0.01]
  ];
  var PRIMARY_SPEC = [
    ['primaryCarve', 'Strength', 0, 3, 0.01],
    ['primaryScale', 'Scale', 0.3, 4, 0.05],
    ['inflation', 'Inflation', 0, 1.5, 0.01]
  ];
  var SECONDARY_SPEC = [
    ['billow', 'Billow', 0, 10, 0.01],
    ['embed', 'Embed', 0, 1, 0.01],
    ['carve', 'Strength', 0, 1.5, 0.01],
    ['cellScale', 'Scale', 0.6, 6, 0.05]
  ];
  var LOOK_SPEC = [
    ['softness', 'Softness', 0.2, 2, 0.01],
    ['blend', 'Blend', 0.3, 4, 0.01],
    ['erosion', 'Erosion', 0, 3, 0.01],
    ['erosionFlow', 'Erosion flow', 0, 0.2, 0.001],
    ['relief', 'Relief', 0, 2, 0.01],
    ['depth', 'Depth', 0, 2, 0.01],
    ['roll', 'Roll', 0, 1, 0.01],
    ['sun', 'Sun', 0, 360, 1],
    ['elevation', 'Elevation', -60, 60, 1],
    ['shadow', 'Shadow', 0, 1, 0.01],
    ['ao', 'AO intensity', 0, 3, 0.01],
    ['aoRadius', 'AO radius', 0.15, 2, 0.01],
    ['aoFalloff', 'AO falloff', 0.5, 4, 0.01],
    ['highlight', 'Highlight', 0, 1, 0.01],
    ['fill', 'Fill', 0, 0.5, 0.01],
    ['bands', 'Bands', 3, 5, 1],
    ['flatten', 'Normal smooth', 0, 1, 0.01],
    ['shadowDetail', 'Shadow detail', 0, 1, 0.01],
    ['formAO', 'Form AO', 0, 2, 0.01],
    ['formRadius', 'Form radius', 0.5, 6, 0.05]
  ];
  var TOON_SPEC = [
    ['toneA', 'Tone A', 0, 1, 0.005],
    ['toneB', 'Tone B', 0, 2, 0.005],
    ['ink', 'Ink', 0, 1, 0.01]
  ];
  var CONTROL_HELP = {
    speed: 'Animation speed for both the simulation and the painted surface. 0 freezes all motion; 1 is normal speed.',
    cohesion: 'Higher values pull the primary masses together. Lower values spread them apart.',
    breakup: 'Controls how strongly child lobes separate and how quickly they emerge and retire. 0 stops lobe turnover.',
    buoyancy: 'Directs branch growth upward and lifts emerging lobes. Higher values build taller clouds.',
    turbulence: 'Wanders and bends whole primary branches. Shape turbulence controls the surface noise separately.',
    coverage: 'Controls the amount of cloud across the scene. 0 clears the cloud; higher values grow the masses.',
    erosion: 'Wears away the cloud surface and its smaller puffs. 0 preserves the un-eroded shapes; 3 is strong erosion.'
  };
  var sliders = {}; // key -> {range, val, spec, target}

  function makeSlider(parent, target, spec) {
    var key = spec[0], min = spec[2], max = spec[3], step = spec[4];
    var row = el('div', 'row');
    if (CONTROL_HELP[key]) row.title = CONTROL_HELP[key];
    var label = el('label'); label.textContent = spec[1];
    var range = el('input'); range.type = 'range'; range.min = min; range.max = max; range.step = step;
    var val = el('input', 'val'); val.type = 'text'; val.spellcheck = false;
    range.id = 'control-' + key; label.htmlFor = range.id;
    val.setAttribute('aria-label', spec[1] + ' value');
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


  // ---------- editable primary canvas ----------
  function paintSnapshot() {
    var p = state.paint;
    return JSON.stringify({ initialized: p.initialized, refRadius: p.refRadius,
      maxParcelRadius: p.maxParcelRadius, serial: p.serial, parcels: p.parcels });
  }
  function restorePaintSnapshot(snapshot) {
    var p = JSON.parse(snapshot);
    state.paint.initialized = p.initialized;
    state.paint.refRadius = p.refRadius;
    state.paint.maxParcelRadius = p.maxParcelRadius;
    state.paint.serial = p.serial;
    state.paint.parcels = p.parcels;
    paintDirty = true;
  }
  function rememberPaint(before, restoreTime) {
    if (before === paintSnapshot()) return;
    // Stroke undo preserves the live phase; scene replacement restores its pose.
    paintUndo.push({snapshot: before, time: typeof restoreTime === 'number' ? restoreTime : null});
    if (paintUndo.length > 64) paintUndo.shift();
    paintRedo.length = 0;
  }
  function syncPaintScene() {
    var a = aspect();
    if (!paintDirty && paintAspect === a) return paintScene;
    var parcels = state.paint.parcels, indices = Object.create(null);
    paintScene.blobs.fill(0); paintScene.aux.fill(0);
    for (var i = 0; i < parcels.length; i++) indices[parcels[i].id] = i;
    for (i = 0; i < parcels.length; i++) {
      var p = parcels[i], o = i * 4;
      paintScene.blobs[o] = p.x; paintScene.blobs[o + 1] = p.y * a;
      paintScene.blobs[o + 2] = p.r; paintScene.blobs[o + 3] = p.seed;
      paintScene.aux[o] = p.branch; paintScene.aux[o + 1] = p.z;
      paintScene.aux[o + 2] = p.parent !== null && indices[p.parent] !== undefined ? indices[p.parent] : -1;
      paintScene.aux[o + 3] = p.link;
    }
    paintScene.blobCount = parcels.length;
    // Never follow live brush size or parcel count: this is a scene-wide constant.
    paintScene.refRadius = state.paint.refRadius;
    paintScene.maxParcelRadius = state.paint.maxParcelRadius;
    paintDirty = false; paintAspect = a;
    return paintScene;
  }
  function captureCurrentCanvas() {
    finishPaintStroke(false);
    if (!sim || !sim.blobs || !sim.aux) return false;
    var before = paintSnapshot(), p = state.paint, beforeTime = p.time, count = Math.min(64, sim.blobCount | 0), a = aspect();
    p.parcels = [];
    for (var i = 0; i < count; i++) {
      var o = i * 4, parent = sim.aux[o + 2] | 0;
      p.parcels.push({id: i, x: sim.blobs[o], y: sim.blobs[o + 1] / a,
        r: sim.blobs[o + 2], seed: sim.blobs[o + 3], branch: sim.aux[o] | 0,
        z: sim.aux[o + 1], parent: parent >= 0 && parent < count ? parent : null,
        link: sim.aux[o + 3]});
    }
    p.serial = count; p.initialized = true; p.active = true; p.time = simTime;
    p.refRadius = Math.max(.01, Number(sim.refRadius) || .16);
    p.maxParcelRadius = Math.max(.25, Number(sim.maxParcelRadius) || .25);
    paintDirty = true; rememberPaint(before, beforeTime); refreshPaintControls();
    return true;
  }
  function newPaintCanvas() {
    finishPaintStroke(false);
    var before = paintSnapshot(), p = state.paint, beforeTime = p.time;
    p.active = true; p.initialized = true; p.parcels = []; p.serial = 0;
    p.refRadius = .16; p.maxParcelRadius = .25; p.time = 0;
    paintTool = 'paint'; paintDirty = true;
    rememberPaint(before, beforeTime); refreshPaintControls();
  }
  function activatePainting() {
    if (state.paint.active) return true;
    if (state.paint.initialized) { state.paint.active = true; return true; }
    return captureCurrentCanvas();
  }
  function selectCanvasTool(tool) {
    finishPaintStroke(false);
    if (tool !== 'light' && !activatePainting()) return;
    paintTool = tool; refreshPaintControls(); updateBrushCursor(paintHover);
  }
  function selectCanvasScene(value) {
    finishPaintStroke(false);
    if (value === 'painting' && !state.paint.initialized) captureCurrentCanvas();
    else state.paint.active = value === 'painting';
    if (!state.paint.active) paintTool = 'light';
    refreshPaintControls(); updateBrushCursor(paintHover);
  }
  function undoPaint(redo) {
    finishPaintStroke(false);
    var from = redo ? paintRedo : paintUndo, to = redo ? paintUndo : paintRedo;
    if (!from.length) return;
    var entry = from.pop();
    to.push({snapshot: paintSnapshot(), time: entry.time === null ? null : state.paint.time});
    restorePaintSnapshot(entry.snapshot);
    if (entry.time !== null) state.paint.time = entry.time;
    state.paint.active = true; state.paint.initialized = true;
    refreshPaintControls();
  }
  function refreshPaintControls() {
    var p = state.paint, full = p.parcels.length >= 64;
    $('canvasScene').value = p.active ? 'painting' : 'simulation';
    [['toolLight','light'],['toolPaint','paint'],['toolErase','erase']].forEach(function (pair) {
      var b = $(pair[0]), active = paintTool === pair[1];
      b.classList.toggle('on', active); b.setAttribute('aria-pressed', String(active));
    });
    $('btnPaintUndo').disabled = !paintUndo.length;
    $('btnPaintRedo').disabled = !paintRedo.length;
    $('btnCaptureCanvas').disabled = !!p.active;
    $('paintStatus').classList.toggle('full', !!p.active && full);
    $('paintStatus').textContent = p.active ? p.parcels.length + ' / 64 primary shapes. ' +
      (full ? 'Canvas full — erase or undo to add more.' : 'New canvas starts empty; Simulation keeps the procedural scene.') :
      (p.initialized ? 'Paint resumes your painting. Use current replaces it with this cloud; New canvas starts empty.' :
        'Paint or Use current captures this cloud. New canvas starts empty.');
    stage.classList.toggle('painting', !!p.active && paintTool !== 'light');
    if (!p.active || paintTool === 'light') $('paintCursor').style.display = 'none';
    refreshSimulationControls();
  }
  function updateBrushCursor(e) {
    var cursor = $('paintCursor');
    if (!e || !state.paint.active || paintTool === 'light') { cursor.style.display = 'none'; return; }
    var r = stage.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    if (x < 0 || y < 0 || x > r.width || y > r.height) { cursor.style.display = 'none'; return; }
    var diameter = 2 * state.paint.brushSize * .01 * r.width;
    cursor.style.display = 'block'; cursor.style.left = x + 'px'; cursor.style.top = y + 'px';
    cursor.style.width = diameter + 'px'; cursor.style.height = diameter + 'px';
    cursor.classList.toggle('erase', paintTool === 'erase');
  }
  function canvasPoint(e) {
    var r = stage.getBoundingClientRect();
    if (!(r.width > 0 && r.height > 0)) return null;
    return {x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.width};
  }
  function paintDab(point, radius) {
    var p = state.paint, a = aspect();
    if (point.x < 0 || point.x > 1 || point.y < 0 || point.y > a || p.parcels.length >= 64) return;
    // Repeated clicks or a stationary pointer should not spend extra capacity.
    for (var i = 0; i < p.parcels.length; i++) {
      var old = p.parcels[i], dx = old.x - point.x, dy = old.y * a - point.y;
      if (dx * dx + dy * dy < radius * radius * .0025 && Math.abs(old.r - radius) < radius * .02) return;
    }
    var id = p.serial++, h = (state.seed ^ Math.imul(id + 1, 0x9e3779b1)) >>> 0;
    h = Math.imul(h ^ h >>> 16, 0x7feb352d); h = Math.imul(h ^ h >>> 15, 0x846ca68b);
    var seed = ((h ^ h >>> 16) >>> 0) / 4294967296 * 100;
    p.parcels.push({id: id, x: point.x, y: point.y / a, r: radius,
      seed: seed, branch: 0, z: .5, parent: null, link: 1});
    paintDirty = true;
  }
  function eraseSegment(a, b, radius) {
    var aspectNow = aspect(), dx = b.x - a.x, dy = b.y - a.y, dd = dx * dx + dy * dy;
    var beforeCount = state.paint.parcels.length;
    state.paint.parcels = state.paint.parcels.filter(function (p) {
      var py = p.y * aspectNow;
      var t = dd > 0 ? clamp(((p.x - a.x) * dx + (py - a.y) * dy) / dd, 0, 1) : 0;
      var ex = p.x - a.x - t * dx, ey = py - a.y - t * dy;
      // Whole primary masses, not pixel-cut holes. Include their central body.
      var reach = radius + .6 * p.r * (1 + state.look.inflation);
      return ex * ex + ey * ey > reach * reach;
    });
    if (state.paint.parcels.length !== beforeCount) paintDirty = true;
  }
  function advancePaintStroke(point, endpoint) {
    var s = paintStroke;
    if (!s || s.tool === 'light' || !point) return;
    if (s.tool === 'erase') eraseSegment(s.last, point, s.radius);
    else {
      var dx = point.x - s.last.x, dy = point.y - s.last.y, length = Math.sqrt(dx * dx + dy * dy);
      if (length > 0) {
        var travel = s.spacing - s.carry, visits = 0;
        while (travel <= length && visits++ < 2048) {
          var dab = {x: s.last.x + dx * travel / length, y: s.last.y + dy * travel / length};
          paintDab(dab, s.radius); s.lastDab = dab; travel += s.spacing;
        }
        s.carry = (s.carry + length) % s.spacing;
      }
      if (endpoint && s.lastDab) {
        var ex = point.x - s.lastDab.x, ey = point.y - s.lastDab.y;
        if (ex * ex + ey * ey > s.spacing * s.spacing * .1225) paintDab(point, s.radius);
      }
    }
    s.last = point; refreshPaintControls();
  }
  function finishPaintStroke(cancel) {
    var s = paintStroke;
    if (!s) return;
    paintStroke = null;
    if (s.tool !== 'light') {
      if (cancel) restorePaintSnapshot(s.before);
      else rememberPaint(s.before);
    }
    try { stage.releasePointerCapture(s.pointerId); } catch (_) {}
    if (s.pointerType === 'touch') { paintHover = null; $('paintCursor').style.display = 'none'; }
    refreshPaintControls();
  }
  function loadPainting(raw) {
    finishPaintStroke(false);
    state.paint = clone(DEFAULTS.paint); paintTool = 'light'; paintUndo = []; paintRedo = [];
    if (raw && typeof raw === 'object') {
      var p = state.paint, valid = [], seen = Object.create(null);
      function finite(v, fallback) { return typeof v === 'number' && isFinite(v) ? v : fallback; }
      p.active = raw.active === true; p.initialized = raw.initialized === true || p.active;
      p.brushSize = clamp(finite(raw.brushSize, 10), 2, 25);
      p.refRadius = clamp(finite(raw.refRadius, .16), .01, .5);
      p.maxParcelRadius = clamp(Math.max(.25, finite(raw.maxParcelRadius, .25)), .25, .5);
      p.time = clamp(finite(raw.time, 0), 0, 1e7);
      (Array.isArray(raw.parcels) ? raw.parcels.slice(0, 64) : []).forEach(function (v, i) {
        if (!v || typeof v !== 'object' || ![v.x,v.y,v.r,v.seed].every(function (n) { return typeof n === 'number' && isFinite(n); }) || v.r <= 0) return;
        var id = Math.max(0, Math.min(1e9, Math.floor(finite(v.id, i))));
        while (seen[id]) id++;
        seen[id] = true;
        valid.push({id: id, x: clamp(v.x, -2, 3), y: clamp(v.y, -2, 3), r: clamp(v.r, .001, .4),
          seed: clamp(v.seed, -10000, 10000), branch: clamp(Math.floor(finite(v.branch, 0)), 0, 15),
          z: clamp(finite(v.z, .5), 0, 1), link: clamp(finite(v.link, 1), 0, 1),
          parent: typeof v.parent === 'number' && isFinite(v.parent) ? Math.floor(v.parent) : null});
      });
      p.parcels = valid;
      // Imported geometry defines a fixed bound for this painting, even when
      // an older file omitted the bound or the user edited a parcel radius.
      valid.forEach(function (v) { p.maxParcelRadius = Math.max(p.maxParcelRadius, v.r); });
      var serial = 0;
      valid.forEach(function (v) { serial = Math.max(serial, v.id + 1); if (v.parent === v.id || !seen[v.parent]) v.parent = null; });
      p.serial = Math.max(serial, Math.min(1e9 + 65, Math.floor(finite(raw.serial, serial))));
    }
    paintDirty = true; paintAspect = -1;
  }

  // ---------- build panel ----------
  var simBody = $('simBody'), lookBody = $('lookBody'), secondaryBody = $('secondaryBody');
  var primaryBody = $('primaryBody'), motionBody = $('motionBody');
  makeSlider($('paintBrushBody'), 'paint', ['brushSize', 'Size (%)', 2, 25, .5]);
  var carveToggle = makeToggle(motionBody, 'Enabled',
    function () { return state.look.carveEnabled; },
    function (v) { state.look.carveEnabled = v; });
  MOTION_SPEC.forEach(function (s) { makeSlider(motionBody, 'look', s); });
  var primaryNoiseSelect = makeSelect(primaryBody, 'Noise', ['Voronoi', 'Clouds'],
    function () { return state.look.primaryNoiseType; },
    function (v) { state.look.primaryNoiseType = v; });
  var primaryInvertToggle = makeToggle(primaryBody, 'Invert',
    function () { return state.look.primaryInvertNoise; },
    function (v) { state.look.primaryInvertNoise = v; });
  PRIMARY_SPEC.forEach(function (s) { makeSlider(primaryBody, 'look', s); });
  SECONDARY_SPEC.slice(0, 2).forEach(function (s) { makeSlider(secondaryBody, 'look', s); });
  var noiseSelect = makeSelect(secondaryBody, 'Noise', ['Voronoi', 'Clouds'],
    function () { return state.look.noiseType; },
    function (v) { state.look.noiseType = v; });
  var invertToggle = makeToggle(secondaryBody, 'Invert',
    function () { return state.look.invertNoise; },
    function (v) { state.look.invertNoise = v; });
  SECONDARY_SPEC.slice(2).forEach(function (s) { makeSlider(secondaryBody, 'look', s); });
  SIM_SPEC.forEach(function (s) { makeSlider(s[0] === 'speed' ? $('speedBody') : simBody, 'settings', s); });
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
  var toonBody = $('toonBody');
  var toonToggle = makeToggle(toonBody, 'Toon',
    function () { return state.look.toon; },
    function (v) { state.look.toon = v; refreshToonControls(); });
  TOON_SPEC.forEach(function (s) { makeSlider(toonBody, 'look', s); });
  var patchToggle = makeToggle(lookBody, 'Patch normals',
    function () { return state.look.patchN; },
    function (v) { state.look.patchN = v; });

  var presetButtons = {};
  PRESETS.forEach(function (p) {
    var b = el('button', 'btn'); b.textContent = p; b.title = p;
    b.addEventListener('click', function () {
      state.preset = p;
      var defaults = CloudSim.PRESET_DEFAULTS[p];
      if (defaults) SIM_SPEC.forEach(function (spec) {
        if (spec[0] !== 'speed') state.settings[spec[0]] = defaults[spec[0]];
        refreshSlider(spec[0]);
      });
      refreshPresets(); reseed();
    });
    presetSeg.appendChild(b); presetButtons[p] = b;
  });

  // Canvas tools keep their own composition and history, independent of presets.
  $('canvasScene').addEventListener('change', function () { selectCanvasScene(this.value); });
  $('toolLight').addEventListener('click', function () { selectCanvasTool('light'); });
  $('toolPaint').addEventListener('click', function () { selectCanvasTool('paint'); });
  $('toolErase').addEventListener('click', function () { selectCanvasTool('erase'); });
  $('btnNewCanvas').addEventListener('click', newPaintCanvas);
  $('btnCaptureCanvas').addEventListener('click', function () { if (captureCurrentCanvas()) selectCanvasTool('paint'); });
  $('btnPaintUndo').addEventListener('click', function () { undoPaint(false); });
  $('btnPaintRedo').addEventListener('click', function () { undoPaint(true); });

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
    if ((e.ctrlKey || e.metaKey) && !e.altKey && (e.code === 'KeyZ' || e.code === 'KeyY')) {
      if (state.paint.active) { e.preventDefault(); undoPaint(e.code === 'KeyY' || e.shiftKey); }
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.code === 'Escape') { finishPaintStroke(true); return; }
    if (e.code === 'KeyB' || e.code === 'KeyE' || e.code === 'KeyL') {
      e.preventDefault(); selectCanvasTool(e.code === 'KeyB' ? 'paint' : e.code === 'KeyE' ? 'erase' : 'light'); return;
    }
    if (e.code === 'BracketLeft' || e.code === 'BracketRight') {
      e.preventDefault(); finishPaintStroke(false);
      state.paint.brushSize = clamp(state.paint.brushSize + (e.code === 'BracketRight' ? 1 : -1), 2, 25);
      refreshSlider('brushSize'); updateBrushCursor(paintHover); return;
    }
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    else if (e.code === 'KeyR') { e.preventDefault(); restart(); }
    else if (e.code === 'KeyF') { e.preventDefault(); toggleFullscreen(); }
  });

  // ---------- sim + renderer ----------
  var sim = null, renderer = null;
  fitCanvas(); // size backing store first so the sim gets the real aspect
  try {
    sim = new CloudSim({ seed: state.seed, preset: state.preset, aspect: aspect(), settings: clone(state.settings) });
    pushSettings(true);
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

  function pushSettings(immediate) {
    if (!sim) return;
    if (immediate === undefined) immediate = !playing || state.settings.speed <= 0;
    sim.applySettings(clone(state.settings), immediate);
  }

  function onChanged(target, key) {
    if (target === 'settings') { pushSettings(); refreshSimulationControls(); }
    if (target === 'paint') updateBrushCursor(paintHover);
  }

  function reseed() {
    finishPaintStroke(false);
    state.paint.active = false; paintTool = 'light'; refreshPaintControls();
    if (!sim) return;
    sim.reseed(state.seed, state.preset, clone(state.settings));
    pushSettings(true);
    simTime = 0;
  }
  function restart() {
    if (state.paint.active) { finishPaintStroke(false); state.paint.time = 0; }
    else reseed();
  }

  function togglePlay() { playing = !playing; btnPlay.textContent = playing ? 'Pause' : 'Play'; btnPlay.classList.toggle('on', !playing); refreshSimulationControls(); }

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
    if (playing) {
      if (state.paint.active) state.paint.time += dt * clamp(state.settings.speed, 0, 6);
      else if (sim) { sim.step(dt); simTime = sim.time; }
    }
    var renderScene = state.paint.active ? syncPaintScene() : sim;
    var renderTime = state.paint.active ? state.paint.time : simTime;
    if (renderer && renderScene) {
      try { renderer.render(renderScene, state.look, renderTime); }
      catch (err) { showBanner('Render error: ' + (err && err.message || err)); renderer = null; }
    }
    frames++; fpsAccum += elapsed; statTimer += elapsed;
    if (statTimer >= 0.25) {
      statFps.textContent = fpsAccum > 0 ? (frames / fpsAccum).toFixed(0) : '--';
      statBlobs.textContent = renderScene ? String(renderScene.blobCount) : '--';
      frames = 0; fpsAccum = 0; statTimer = 0;
    }
    requestAnimationFrame(frame);
  }

  // ---------- state io ----------
  function exportState() {
    return { seed: state.seed, preset: state.preset, settings: clone(state.settings), look: clone(state.look), resolution: state.resolution, paint: clone(state.paint) };
  }
  function loadState(obj) {
    if (!obj || typeof obj !== 'object') throw new Error('not an object');
    if (isFinite(obj.seed)) state.seed = Math.round(Number(obj.seed));
    if (PRESETS.indexOf(obj.preset) >= 0) state.preset = obj.preset;
    if (obj.settings) SIM_SPEC.forEach(function (s) { var v = Number(obj.settings[s[0]]); if (isFinite(v)) state.settings[s[0]] = clamp(v, s[2], s[3]); });
    if (obj.look) {
      LOOK_SPEC.concat(TOON_SPEC, PRIMARY_SPEC, SECONDARY_SPEC, MOTION_SPEC).forEach(function (s) { var v = Number(obj.look[s[0]]); if (isFinite(v)) state.look[s[0]] = clamp(s[4] >= 1 ? Math.round(v) : v, s[2], s[3]); });
      if (typeof obj.look.sky === 'boolean') state.look.sky = obj.look.sky;
      if (typeof obj.look.pixelated === 'boolean') state.look.pixelated = obj.look.pixelated;
      if (typeof obj.look.toon === 'boolean') state.look.toon = obj.look.toon;
      if (typeof obj.look.patchN === 'boolean') state.look.patchN = obj.look.patchN;
      if (typeof obj.look.carveEnabled === 'boolean') state.look.carveEnabled = obj.look.carveEnabled;
      if (typeof obj.look.invertNoise === 'boolean') state.look.invertNoise = obj.look.invertNoise;
      if (['Voronoi', 'Clouds'].indexOf(obj.look.noiseType) >= 0) state.look.noiseType = obj.look.noiseType;
      if (['Voronoi', 'Clouds'].indexOf(obj.look.primaryNoiseType) >= 0) state.look.primaryNoiseType = obj.look.primaryNoiseType;
      if (typeof obj.look.primaryInvertNoise === 'boolean') state.look.primaryInvertNoise = obj.look.primaryInvertNoise;
    }
    if (RESOLUTIONS.indexOf(Number(obj.resolution)) >= 0) state.resolution = Number(obj.resolution);
    reseed();
    loadPainting(obj.paint);
    refreshAll();
    if (renderer) renderer.resize(state.resolution);
  }
  function refreshAll() {
    Object.keys(sliders).forEach(refreshSlider);
    seedInput.value = state.seed;
    refreshPresets();
    resSelect.value = String(state.resolution);
    skyToggle.checked = state.look.sky;
    pixToggle.checked = state.look.pixelated;
    toonToggle.checked = !!state.look.toon;
    refreshToonControls();
    patchToggle.checked = !!state.look.patchN;
    carveToggle.checked = state.look.carveEnabled !== false;
    primaryNoiseSelect.value = state.look.primaryNoiseType;
    primaryInvertToggle.checked = state.look.primaryInvertNoise !== false;
    noiseSelect.value = state.look.noiseType;
    invertToggle.checked = state.look.invertNoise !== false;
    applyPixelated();
    refreshPaintControls();
  }
  function refreshSimulationControls() {
    var painting = !!state.paint.active, single = state.preset === 'single';
    SIM_SPEC.forEach(function (spec) {
      var key = spec[0], control = sliders[key];
      if (!control) return;
      var disabled = key !== 'speed' && (painting || (single && key !== 'coverage'));
      control.range.disabled = disabled; control.val.disabled = disabled;
      control.range.parentNode.classList.toggle('inactive', disabled);
    });
    var hint = $('simHint');
    if (painting) hint.textContent = 'Painting keeps your primary positions fixed. Choose Simulation in Canvas to change how the masses form. Playback Speed still controls Flow and Roll.';
    else if (single) hint.textContent = 'Single isolates one primary mass. Coverage changes its size. Choose a branch preset to use Cohesion, Breakup, Buoyancy and Turbulence.';
    else hint.textContent = ((!playing || state.settings.speed <= 0) ? 'Motion is frozen; shape changes still update here. ' : '') +
      'Turbulence moves whole branches; Shape turbulence changes their surfaces. Hover a control for its role.';
  }
  function refreshToonControls() {
    TOON_SPEC.forEach(function (spec) {
      var control = sliders[spec[0]];
      if (!control) return;
      control.range.disabled = !state.look.toon;
      control.val.disabled = !state.look.toon;
      control.range.parentNode.classList.toggle('inactive', !state.look.toon);
    });
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
    if (e.button !== 0 || paintStroke || e.isPrimary === false) return;
    var point = canvasPoint(e); if (!point) return;
    if (paintTool !== 'light' && !activatePainting()) return;
    var radius = state.paint.brushSize * .01;
    paintStroke = {pointerId: e.pointerId, pointerType: e.pointerType, tool: paintTool,
      before: paintSnapshot(), radius: radius, spacing: radius * .7, carry: 0,
      last: point, lastDab: point};
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
    if (paintTool === 'light') aimLight(e);
    else if (paintTool === 'paint') paintDab(point, radius);
    else eraseSegment(point, point, radius);
    paintHover = {clientX: e.clientX, clientY: e.clientY}; updateBrushCursor(paintHover);
    refreshPaintControls(); e.preventDefault();
  });
  stage.addEventListener('pointermove', function (e) {
    if (e.isPrimary === false || paintStroke && e.pointerId !== paintStroke.pointerId) return;
    paintHover = {clientX: e.clientX, clientY: e.clientY}; updateBrushCursor(paintHover);
    if (!paintStroke) return;
    if (paintStroke.tool === 'light') aimLight(e);
    else advancePaintStroke(canvasPoint(e), false);
    e.preventDefault();
  });
  stage.addEventListener('pointerup', function (e) {
    if (!paintStroke || e.pointerId !== paintStroke.pointerId) return;
    advancePaintStroke(canvasPoint(e), true); finishPaintStroke(false);
  });
  stage.addEventListener('pointercancel', function (e) {
    if (paintStroke && e.pointerId === paintStroke.pointerId) finishPaintStroke(true);
  });
  stage.addEventListener('lostpointercapture', function (e) {
    if (paintStroke && e.pointerId === paintStroke.pointerId) finishPaintStroke(true);
  });
  stage.addEventListener('pointerleave', function () {
    paintHover = null; $('paintCursor').style.display = 'none';
  });
  window.addEventListener('blur', function () { finishPaintStroke(false); });

  if (/[?&]debug=1/.test(location.search)) state.look.debug = 1;   // height-field view
  fitCanvas();
  if (window.ResizeObserver) new ResizeObserver(fitCanvas).observe(stage);
  window.addEventListener('resize', fitCanvas);
  document.addEventListener('fullscreenchange', fitCanvas);
  requestAnimationFrame(function (t) { last = t; requestAnimationFrame(frame); });
})();

