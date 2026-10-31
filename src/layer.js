/*
 * LayerSim: a horizontal layer of air, in three modes, for the cloud types a thermal does not make.
 *
 * - sheet:  stratus, altostratus, the cumulonimbus anvil, the lenticular lens. Wide overlapping parcels
 *           in a band, slowly undulating, drifting with the wind, fading at the band's ends.
 * - cells:  stratocumulus, altocumulus, cirrocumulus. A lattice of shallow convective cells (closed
 *           cells: cloud in the middle, sinking clear air between), with gaps, jitter, breathing, and
 *           `streets` that align and stretch the cells along the wind. The lattice drifts and recycles.
 * - streak: cirrus (uncinus / fibratus) and contrails. Each element is a generating head whose ice
 *           falls into slower wind below: a trail of puffs laid along a curve that lags upwind and
 *           sags with fall time (mares' tails). A contrail is the same with a moving line source: heads
 *           laid behind a point crossing the layer, spreading, sagging into pendant lobes and breaking
 *           into beads with age.
 *
 * Emits exactly what ThermalSim emits (blobs x,y,r,seed; aux depth,link; spin; detail = freshness;
 * baseY/topY; baseStart; refRadius) plus an optional per-parcel `stretch` (along the wind) that the
 * renderer multiplies into its shear stretch. Classic script, no build. Assigns window.LayerSim.
 */
(function () {
  'use strict';
  var MAX = 128;

  function mulberry(seed) { var a = seed >>> 0; return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function smoothstep(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  function hash(x) { var s = Math.sin(x * 12.9898 + 78.233) * 43758.5453; return s - Math.floor(s); }

  // level: layer height as a fraction of the canvas height (0 top .. 1 bottom); width/thick in canvas widths
  var PRESETS = {
    stratus:       { mode: 'sheet', count: 64, size: 0.07, width: 1.1, thick: 0.08, level: 0.62, cover: 1.5, undulate: 0.01, wave: 2.0, life: 60, breathe: 25, jitter: 0.3, drift: 0.004, wind: 0, fresh: 0.5, parallax: 0.01, sway: 57, ragged: 0.8 },
    altostratus:   { mode: 'sheet', count: 90, size: 0.045, width: 1.25, thick: 0.14, level: 0.45, cover: 1.6, undulate: 0.006, wave: 1.5, life: 90, breathe: 40, jitter: 0.25, drift: 0.006, wind: 0, fresh: 0.4, parallax: 0.008, sway: 57, ragged: 0.4, striate: 2.8 },
    anvil:         { mode: 'sheet', count: 30, size: 0.085, width: 0.75, thick: 0.05, level: 0.3, cover: 1.5, undulate: 0.004, wave: 2.0, life: 80, breathe: 30, jitter: 0.2, drift: 0.01, wind: 0, fresh: 0.5, parallax: 0.015, sway: 57, ragged: 0.6, striate: 1.4, lead: 0.4, taper: 0.75, offset: 0.18 },
    lenticular:    { mode: 'sheet', count: 30, size: 0.06, width: 0.5, thick: 0.02, level: 0.45, cover: 1.4, undulate: 0.0, wave: 1.0, life: 40, breathe: 30, jitter: 0.1, drift: 0.02, wind: 0, fresh: 0.9, parallax: 0.01, sway: 57, ragged: 0.0, fixed: 1, taper: 0.8 },
    stratocumulus: { mode: 'cells', count: 80, size: 0.07, width: 1.25, thick: 0.13, level: 0.6, cell: 0.1, rows: 4, gap: 0.15, streets: 0.3, jitter: 0.25, breathe: 18, life: 70, drift: 0.006, wind: 0, fresh: 0.75, parallax: 0.012, sway: 57 },
    altocumulus:   { mode: 'cells', count: 110, size: 0.032, width: 1.25, thick: 0.17, level: 0.42, cell: 0.06, rows: 5, gap: 0.25, streets: 0.4, jitter: 0.3, breathe: 12, life: 45, drift: 0.008, wind: 0, fresh: 0.85, parallax: 0.008, sway: 57 },
    cirrocumulus:  { mode: 'cells', count: 125, size: 0.015, width: 1.15, thick: 0.11, level: 0.25, cell: 0.038, rows: 6, gap: 0.3, streets: 0.2, jitter: 0.35, breathe: 6, life: 25, drift: 0.012, wind: 0, fresh: 0.95, parallax: 0.004, sway: 57 },
    cirrus:        { mode: 'streak', count: 0, heads: 6, trail: 14, size: 0.02, width: 1.2, thick: 0.1, level: 0.25, curve: 0.9, fall: 0.16, lag: 0.22, life: 50, drift: 0.015, wind: 8, fresh: 0.9, parallax: 0.004, sway: 57, source: 'field', spread: 0, lobes: 0 },
    contrail:      { mode: 'streak', count: 0, heads: 60, trail: 1, size: 0.012, width: 1.3, thick: 0.02, level: 0.22, curve: 0.0, fall: 0.0, lag: 0.0, life: 90, drift: 0.004, wind: -6, fresh: 0.95, parallax: 0.004, sway: 57, source: 'line', plane: 0.028, spread: 2.0, lobes: 0.6, beads: 0.7 }
  };

  function LayerSim(opts) {
    opts = opts || {};
    this.aspect = opts.aspect || 0.75;
    this.blobs = new Float32Array(MAX * 4);
    this.aux = new Float32Array(MAX * 4);
    this.spin = new Float32Array(MAX * 4);
    this.detail = new Float32Array(MAX);
    this.stretch = new Float32Array(MAX);
    this.blobCount = 0;
    this.params = {};
    this.shape = 'ring';   // accepted for interface parity; layouts are a thermal idea
    this.reset(opts.seed !== undefined ? opts.seed : 1, opts.preset || 'stratus');
  }
  LayerSim.PRESETS = Object.keys(PRESETS);
  LayerSim.PRESET_DEFAULTS = PRESETS;
  LayerSim.MAX_BLOBS = MAX;

  LayerSim.prototype.reset = function (seed, preset) {
    var def = PRESETS[preset] || PRESETS.stratus;
    this.seed = seed; this.preset = preset;
    this.rng = mulberry((seed | 0) * 2654435761 + 97);
    this.params = {}; for (var k in def) this.params[k] = def[k];
    this.time = 0;
    this.cx = 0.5;
    this.parcels = [];
    this.off = 0;            // lattice / line drift offset
    this.plane = -0.7;       // contrail source position along the line
    this.reseat();
    var n = this.params.mode === 'streak' ? 0 : (this.params.count | 0);
    for (var i = 0; i < n; i++) this.parcels.push(this._spawn(true, i));
    if (this.params.mode === 'streak' && this.params.source !== 'line') for (i = 0; i < (this.params.heads | 0); i++) this.parcels.push(this._spawn(true, i));
    this._emit();
  };
  LayerSim.prototype.setPreset = function (p) { this.reset(this.seed, p); };
  LayerSim.prototype.setShape = function () {};
  // the layer's band in world units (canvas width = 1, y down)
  LayerSim.prototype.reseat = function () {
    var P = this.params;
    this.cy = P.level * this.aspect;
    this.baseY = this.cy + P.thick * 0.5 + P.size;
    this.topY = this.cy - P.thick * 0.5 - P.size;
  };
  Object.defineProperty(LayerSim.prototype, 'refRadius', { get: function () { return Math.max(0.01, this.params.size * 1.25); } });

  LayerSim.prototype._spawn = function (initial, i) {
    var P = this.params, rng = this.rng, W = P.width;
    var p = { seed: rng() * 100, age: initial ? rng() * P.life : 0, life: P.life * (0.6 + 0.8 * rng()), link: initial ? 1 : 0,
      depth: rng(), roll: rng() * 6.283, size: 0.8 + 0.4 * rng(), ph: rng() * 6.283, x: 0, y: 0, i: i };
    if (P.mode === 'cells') {
      // lattice slot: column along the wind, row across; the lattice itself drifts (this.off)
      var cols = Math.max(1, Math.round(W / P.cell)), rows = Math.max(1, P.rows | 0);
      var slot = initial ? i : Math.floor(rng() * cols * rows);
      p.col = slot % cols; p.row = Math.floor(slot / cols) % rows;
      p.jx = (rng() - 0.5) * P.jitter * P.cell; p.jy = (rng() - 0.5) * P.jitter * P.cell * 0.6;
      p.gap = hash(p.col * 7.1 + p.row * 13.7 + this.seed) < P.gap ? 1 : 0;   // an empty slot (sinking air)
    } else if (P.mode === 'sheet') {
      p.x = (rng() - 0.5) * W; p.y = (rng() - 0.5) * P.thick;
      p.size *= P.cover;
      // ragged: some parcels are wisps hanging under the sheet (small, stale, dithered away)
      p.wisp = rng() < (P.ragged || 0) * 0.45;
      if (p.wisp) { p.y = P.thick * 0.5 + P.size * (0.2 + 0.5 * rng()); p.size *= 0.4 + 0.2 * rng(); }
    } else {
      // streak head
      p.x = P.source === 'line' ? this.plane : (rng() - 0.5) * W; p.y = (rng() - 0.5) * P.thick;
      if (!initial) p.age = 0;
    }
    return p;
  };

  LayerSim.prototype.step = function (dt) {
    var P = this.params, rng = this.rng, i, p;
    this.time += dt;
    this.reseat();
    var wa = (P.wind || 0) * Math.PI / 180, wx = Math.cos(wa), wy = -Math.sin(wa);
    this.off += P.drift * dt;
    if (P.mode === 'streak' && P.source === 'line') {
      // the plane crosses the layer laying a head every `plane` units; the line is a FIFO of `heads`
      // elements, so age grows steadily from the plane back to the tail, and the tail end recycles
      var span = P.width + 0.3, speed = span / Math.max(5, P.life * 0.8);
      var prev = this.plane; this.plane += speed * dt;
      if (Math.floor(this.plane / P.plane) !== Math.floor(prev / P.plane)) {
        if (this.parcels.length >= (P.heads | 0)) this.parcels.shift();
        this.parcels.push(this._spawn(false, 0));
      }
      if (this.plane > P.width * 0.5 + 0.15) this.plane = -P.width * 0.5 - 0.15;
    } else if (P.mode === 'streak') {
      if (this.parcels.length < (P.heads | 0) && rng() < dt * 0.5) this.parcels.push(this._spawn(false, 0));
    } else if (this.parcels.length < (P.count | 0) && rng() < dt * 2) this.parcels.push(this._spawn(false, 0));
    for (i = 0; i < this.parcels.length; i++) {
      p = this.parcels[i];
      p.age += dt;
      if (P.mode !== 'cells' && !P.fixed) { p.x += P.drift * wx * dt; p.y += P.drift * wy * dt * 0.3; }
      if (P.fixed) { p.x += P.drift * dt; if (p.x > P.width * 0.5) p.x -= P.width; }   // air flows through a standing shape
      // life: grow in, live, fade out, then recycle
      var dying = p.age > p.life && !(P.mode === 'streak' && P.source === 'line');
      if (dying) p.link = Math.max(0, p.link - dt / 4); else p.link = Math.min(1, p.link + dt / 5);
      if (dying && p.link <= 0) { this.parcels[i] = this._spawn(false, p.i); continue; }   // replaced at once: the layer never thins out
      // the band's ends fade (a sheet is wider than the frame; cells recycle round the lattice)
      if (P.mode === 'sheet' && Math.abs(p.x) > P.width * 0.5 + 0.05) { var q = this._spawn(false, p.i); q.x = -Math.sign(p.x) * P.width * 0.5; this.parcels[i] = q; continue; }   // drifted off the end: re-enter at the other
    }
    this._emit();
  };

  LayerSim.prototype._emit = function () {
    var B = this.blobs, A = this.aux, S = this.spin, D = this.detail, ST = this.stretch, P = this.params;
    var size = P.size, rMax = size * 3, n = 0, i, p, o;
    var wa = (P.wind || 0) * Math.PI / 180, wx = Math.cos(wa), wy = -Math.sin(wa);
    var sw = 6.2832 / Math.max(5, P.sway || 57);
    var swx = (P.parallax || 0) * Math.sin(this.time * sw), swy = (P.parallax || 0) * 0.35 * Math.sin(this.time * sw * 0.66 + 1.0);
    var cols = Math.max(1, Math.round(P.width / (P.cell || 0.1))), rows = Math.max(1, P.rows | 0);
    var put = function (x, y, r, seed, depth, link, roll, fresh, stretch) {
      if (n >= MAX || r <= 1e-4 || link <= 1e-4) return;
      o = n * 4;
      var ds = (depth - 0.5) * 2;
      B[o] = x + swx * ds; B[o + 1] = y + swy * ds; B[o + 2] = Math.min(rMax, r); B[o + 3] = seed;
      A[o] = 0; A[o + 1] = depth; A[o + 2] = 0; A[o + 3] = link;
      S[o] = 0; S[o + 1] = 0; S[o + 2] = 1; S[o + 3] = roll;
      D[n] = fresh; ST[n] = stretch;
      n++;
    };
    for (i = 0; i < this.parcels.length; i++) {
      p = this.parcels[i];
      var ageF = clamp(p.age / p.life, 0, 1);
      var breathe = 1 + 0.12 * Math.sin(this.time * 6.2832 / Math.max(2, P.breathe || 20) + p.ph);
      var fresh = P.fresh * (1 - 0.5 * ageF * ageF);
      if (P.mode === 'cells') {
        if (p.gap) continue;
        var cell = P.cell * (1 + 0.8 * (P.streets || 0));   // streets: wider spacing along the wind
        var lx = ((p.col * cell + this.off) % (cols * cell) + cols * cell) % (cols * cell) - cols * cell * 0.5;
        var edge = smoothstep(0, 0.12, cols * cell * 0.5 - Math.abs(lx));   // recycle round the lattice without a pop
        var ly = (p.row - (rows - 1) * 0.5) * P.thick / Math.max(1, rows - 1) + p.jy + 0.006 * Math.sin(this.time * 0.4 + p.ph);
        // the row is laid along the wind
        var x = this.cx + (lx + p.jx) * wx - ly * wy, y = this.cy + (lx + p.jx) * wy + ly * wx;
        put(x, y, size * p.size * breathe, p.seed, 0.5 + 0.3 * (p.depth - 0.5) + 0.15 * (p.row / Math.max(1, rows - 1) - 0.5), p.link * edge, p.roll + this.time * 0.05, fresh, 1 + 1.2 * (P.streets || 0));
      } else if (P.mode === 'sheet') {
        var und = (P.undulate || 0) * Math.sin(p.x * 6.2832 * (P.wave || 2) + this.time * 0.15 + p.ph * 0.2);
        var ex = smoothstep(0, 0.1, P.width * 0.5 + 0.05 - Math.abs(p.x));
        var lead = (P.lead || 0) * (p.x / (P.width * 0.5));   // an anvil thins toward its downwind edge
        var u = Math.abs(p.x) / (P.width * 0.5), taper = 1 - (P.taper || 0) * u * u;   // a lens: thick in the middle, thin at the ends
        var sx = p.x + (P.offset || 0) * P.width;   // the sheet sits off-centre (an anvil ahead of its tower)
        // ragged underside: the lower the parcel, the staler it reads (haze and dither dissolve the base); wisps most of all
        var under = smoothstep(-0.3, 0.7, p.y / Math.max(1e-3, P.thick * 0.5)), rag = (P.ragged || 0) * (p.wisp ? 0.85 : 0.6 * under);
        put(this.cx + sx * wx - (p.y + und) * wy, this.cy + sx * wy + (p.y + und) * wx, size * p.size * breathe * taper * (1 - 0.35 * Math.max(0, lead)), p.seed, 0.5 + 0.35 * (p.depth - 0.5), p.link * ex, p.roll, fresh * (1 - 0.6 * Math.max(0, lead)) * (1 - rag), (P.striate || 1) * (p.wisp ? 1.4 : 1));
      } else {
        // streak: the head, then the trail laid along a curve that lags upwind and sags with fall time
        var grow = smoothstep(0, 0.35, ageF), fade = 1 - smoothstep(0.6, 1, ageF);
        var T = Math.max(1, P.trail | 0);
        var hx = this.cx + p.x * wx - p.y * wy, hy = this.cy + p.x * wy + p.y * wx;
        if (P.source === 'line') {
          // a contrail element: spreads with age, sags into lobes, breaks into beads, then fades
          var sp = 1 + (P.spread || 0) * ageF, lobe = (P.lobes || 0) * 0.03 * ageF * Math.sin(p.x * 60 + p.seed), bead = 1 - (P.beads || 0) * ageF * (0.5 + 0.5 * Math.sin(p.x * 90 + p.seed * 3));
          put(hx, hy + lobe, size * p.size * sp * bead, p.seed, 0.5, p.link * fade, p.roll, fresh * (1 - 0.6 * ageF), 1 + 2.5 * (1 - ageF));
        } else {
          put(hx, hy, size * p.size * (0.7 + 0.3 * fade), p.seed, 0.5 + 0.2 * (p.depth - 0.5), p.link * (1 - smoothstep(0.5, 0.8, ageF)), p.roll, fresh, 1.3);
          for (var k = 1; k <= T; k++) {
            var ft = k / T * grow;                      // fall time along the trail
            var tx = -(P.lag || 0.2) * ft * (1 + (P.curve || 0) * ft), ty = (P.fall || 0.15) * ft;   // upwind lag that grows with the curve, sag with fall
            var tr = size * p.size * (0.9 - 0.5 * ft) * (1 - smoothstep(0.75, 1, ageF) * ft);
            var tf = fresh * (1 - 0.7 * ft * ageF);
            var trailFade = 1 - smoothstep(0.8, 1.0, ageF + ft * 0.3);
            put(hx + tx * wx - ty * wy, hy + tx * wy + ty * wx, tr, p.seed + k * 3.7, 0.5 + 0.2 * (p.depth - 0.5), p.link * trailFade, p.roll + k, tf, 1 + 2.0 * (1 - ft * 0.5));
          }
        }
      }
    }
    this.baseStart = n;
    this.blobCount = n;
    for (var k2 = n * 4; k2 < MAX * 4; k2++) { B[k2] = 0; A[k2] = 0; S[k2] = 0; }
    for (k2 = n; k2 < MAX; k2++) { D[k2] = 1; ST[k2] = 1; }
  };

  window.LayerSim = LayerSim;
})();
