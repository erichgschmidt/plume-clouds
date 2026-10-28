/* CloudSim — parcel simulation for Plume Clouds (see CONTRACT.md, "src/sim.js").
 *
 * Classic script, no modules, no deps. Assigns window.CloudSim.
 *
 * World: x in [0,1], y in [0,aspect], y grows downward (screen-like).
 * Deterministic for (seed, preset, settings, fixed 1/60 substeps).
 *
 * Topology model
 *   - A few slow attractors ("wells") per preset. Each parcel is bound to one
 *     well with a spring + damping and a slow tangential orbit.
 *   - Heat cycle per parcel (phase 0..1 -> heat = 0.5-0.5cos(2*pi*phase)).
 *     Hot parcels (heat > ~0.6) lose most of their attraction and get lift along
 *     the well's lift direction, so they detach and drift away. When they have
 *     cooled (heat falls below 0.35) they are re-bound to the nearest OTHER well
 *     and sink back into it.
 *   - Curl-noise flow field (time evolving value noise) advects everything.
 *   - Split: big + (hot or sheared) parcels split into two area-conserving
 *     children; child inherits position, seed derived from parent, link to the
 *     surviving (bigger) sibling decays over ~3 s. Radii ramp smoothly.
 *   - Merge: deeply overlapping cool parcels merge; survivor grows to the
 *     combined area, the other fades out over 0.5 s and is removed.
 */
(function () {
  'use strict';

  var MAX_BLOBS = 64;
  var SUBSTEP = 1 / 60;
  var MIN_COUNT = 14;
  var MAX_COUNT = 40;
  var R_MIN = 0.03;
  var R_MAX = 0.22;
  var R_MERGE_MAX = 0.18;  // merges that would exceed this radius are skipped
  var R_REMOVE = 0.021;   // dying parcels are dropped once below this
  var LINK_DECAY_S = 3.0;
  var FADE_OUT_S = 0.5;
  var RAMP_TAU = 0.45;    // radius easing time constant (s)
  var MARGIN = 0.05;
  var TWO_PI = Math.PI * 2;

  // ---------------------------------------------------------------- PRNG ---
  function mulberry32(a) {
    a = a >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // --------------------------------------------------------------- Noise ---
  function hash3(ix, iy, iz, s) {
    var h = Math.imul(ix, 0x27d4eb2d) ^ Math.imul(iy, 0x165667b1) ^ Math.imul(iz, 0x9E3779B1) ^ s;
    h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
    h ^= h >>> 13;
    h = Math.imul(h, 0xc2b2ae35);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  }

  function fade(t) { return t * t * (3 - 2 * t); }

  // 3D value noise in [0,1]
  function vnoise3(x, y, z, s) {
    var ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
    var fx = fade(x - ix), fy = fade(y - iy), fz = fade(z - iz);
    var c000 = hash3(ix, iy, iz, s), c100 = hash3(ix + 1, iy, iz, s);
    var c010 = hash3(ix, iy + 1, iz, s), c110 = hash3(ix + 1, iy + 1, iz, s);
    var c001 = hash3(ix, iy, iz + 1, s), c101 = hash3(ix + 1, iy, iz + 1, s);
    var c011 = hash3(ix, iy + 1, iz + 1, s), c111 = hash3(ix + 1, iy + 1, iz + 1, s);
    var x00 = c000 + (c100 - c000) * fx, x10 = c010 + (c110 - c010) * fx;
    var x01 = c001 + (c101 - c001) * fx, x11 = c011 + (c111 - c011) * fx;
    var y0 = x00 + (x10 - x00) * fy, y1 = x01 + (x11 - x01) * fy;
    return y0 + (y1 - y0) * fz;
  }

  function smoothstep(a, b, x) {
    var t = (x - a) / (b - a);
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return t * t * (3 - 2 * t);
  }

  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

  // ------------------------------------------------------------- Presets ---
  // Wells in normalized coords (u in 0..1, v in 0..1 of aspect).
  // lift = direction detached (hot) parcels are pushed along. w = share of parcels.
  var PRESETS = {
    plumes: {
      wells: [
        { u: 0.26, v: 0.78, lx: 0, ly: -1, w: 1.0, liftGain: 1.0 },
        { u: 0.74, v: 0.74, lx: 0, ly: -1, w: 1.0, liftGain: 1.0 },
        { u: 0.50, v: 0.28, lx: 0, ly: -0.4, w: 0.35, liftGain: 0.5 }
      ],
      heatGain: 1.0, spread: 1.4,
      defaults: { speed: 1, cohesion: 0.6, breakup: 0.5, buoyancy: 0.55, turbulence: 0.4, coverage: 0.6 }
    },
    lavalamp: {
      wells: [
        { u: 0.5, v: 0.82, lx: 0, ly: -1, w: 1.0, liftGain: 1.4 },
        { u: 0.5, v: 0.18, lx: 0, ly: 1, w: 1.0, liftGain: 1.4 }
      ],
      heatGain: 1.5, spread: 1.2,
      defaults: { speed: 1, cohesion: 0.7, breakup: 0.35, buoyancy: 0.8, turbulence: 0.25, coverage: 0.55 }
    },
    islands: {
      wells: [
        { u: 0.18, v: 0.30, lx: 0, ly: -0.6, w: 0.6, liftGain: 0.7 },
        { u: 0.50, v: 0.22, lx: 0, ly: -0.6, w: 0.6, liftGain: 0.7 },
        { u: 0.82, v: 0.36, lx: 0, ly: -0.6, w: 0.6, liftGain: 0.7 },
        { u: 0.30, v: 0.72, lx: 0, ly: -0.6, w: 0.6, liftGain: 0.7 },
        { u: 0.70, v: 0.70, lx: 0, ly: -0.6, w: 0.6, liftGain: 0.7 }
      ],
      heatGain: 0.9, spread: 0.8,
      defaults: { speed: 1, cohesion: 0.5, breakup: 0.5, buoyancy: 0.4, turbulence: 0.5, coverage: 0.6 }
    },
    confluence: {
      wells: [
        { u: 0.25, v: 0.5, lx: 1, ly: -0.15, w: 1.0, liftGain: 1.1 },
        { u: 0.75, v: 0.5, lx: -1, ly: -0.15, w: 1.0, liftGain: 1.1 }
      ],
      heatGain: 1.1, spread: 1.3,
      defaults: { speed: 1, cohesion: 0.6, breakup: 0.45, buoyancy: 0.6, turbulence: 0.35, coverage: 0.6 }
    }
  };
  var PRESET_NAMES = ['plumes', 'lavalamp', 'islands', 'confluence'];

  // ------------------------------------------------------------ CloudSim ---
  function CloudSim(opts) {
    opts = opts || {};
    this.aspect = opts.aspect > 0 ? opts.aspect : 0.75;
    this.blobs = new Float32Array(MAX_BLOBS * 4);
    this.aux = new Float32Array(MAX_BLOBS * 4);
    this.blobCount = 0;
    this.settings = null;
    this.stats = { splits: 0, merges: 0 };
    this.reseed(opts.seed !== undefined ? opts.seed : 1, opts.preset || 'plumes');
  }

  CloudSim.prototype.reseed = function (seed, preset) {
    if (seed === undefined || seed === null) seed = this.seed !== undefined ? this.seed : 1;
    if (!preset) preset = this.preset || 'plumes';
    if (!PRESETS[preset]) preset = 'plumes';
    var presetChanged = preset !== this.preset;
    this.seed = seed | 0;
    this.preset = preset;
    this.def = PRESETS[preset];
    if (!this.settings || presetChanged) this.settings = copy(this.def.defaults);
    this.rng = mulberry32(this.seed ^ 0x5bd1e995);
    this.noiseSeed = (this.seed * 0x9E3779B1) | 0;
    this.time = 0;
    this.accum = 0;
    this.sinceForcedSplit = 0;
    this.stats.splits = 0;
    this.stats.merges = 0;
    this.parcels = [];
    this.wells = [];
    this._buildWells();
    this._seedParcels();
    this._write();
  };

  CloudSim.prototype.resize = function (aspect) {
    if (aspect > 0) this.aspect = aspect;
    this._buildWells();
  };

  function copy(o) { var r = {}; for (var k in o) r[k] = o[k]; return r; }

  CloudSim.prototype._buildWells = function () {
    var ws = this.def.wells, out = [];
    for (var i = 0; i < ws.length; i++) {
      var w = ws[i];
      out.push({ bx: w.u, by: w.v * this.aspect, x: w.u, y: w.v * this.aspect,
        lx: w.lx, ly: w.ly, w: w.w, liftGain: w.liftGain, id: i });
    }
    this.wells = out;
  };

  CloudSim.prototype._targetArea = function () {
    var s = this.settings;
    return 0.04 + clamp(s.coverage, 0, 1) * 0.14;
  };

  CloudSim.prototype._seedParcels = function () {
    var rng = this.rng, wells = this.wells;
    var raw = [], sumR2 = 0, i, k, wi, w, p, r;
    // each body: 2-4 big cores near the well + small bulges on the upper rim
    for (wi = 0; wi < wells.length; wi++) {
      w = wells[wi];
      var cores = 2 + Math.round(rng() * 2 * w.w), rims = 3 + Math.round(rng() * 2 * w.w);
      for (k = 0; k < cores; k++) {
        r = 0.09 + rng() * 0.07;
        p = this._newParcel(w.x, w.y, r, rng() * 100, wi);
        this._assignRole(p, true);
        p.phase = rng() * 0.5;
        raw.push(p); sumR2 += r * r;
      }
      for (k = 0; k < rims; k++) {
        r = 0.04 + rng() * 0.03;
        p = this._newParcel(w.x, w.y, r, rng() * 100, wi);
        this._assignRole(p, false);
        p.phase = rng();
        raw.push(p); sumR2 += r * r;
      }
    }
    for (i = 0; i < raw.length; i++) {
      p = raw[i]; w = wells[p.att];
      p.x = w.x + Math.cos(p.oA) * p.oR;
      p.y = w.y + Math.sin(p.oA) * p.oR * 0.8;
    }
    var scale = Math.sqrt(this._targetArea() / sumR2);
    for (i = 0; i < raw.length; i++) {
      raw[i].r = raw[i].rT = clamp(raw[i].r * scale, R_MIN, R_MAX);
      raw[i].x = clamp(raw[i].x, MARGIN, 1 - MARGIN);
      raw[i].y = clamp(raw[i].y, MARGIN, this.aspect - MARGIN);
    }
    this.parcels = raw;
  };

  CloudSim.prototype._newParcel = function (x, y, r, seed, well) {
    var rng = this.rng;
    return {
      x: x, y: y, vx: 0, vy: 0,
      r: r, rT: r, seed: seed,
      phase: 0, hrate: 0.75 + rng() * 0.5, heat: 0, prevHeat: 0,
      age: 0, att: well, parent: null, link: 0,
      dying: -1, mergeTo: null, lastSplit: -10, orbit: rng() < 0.5 ? -1 : 1,
      oR: 0.03, oA: rng() * TWO_PI, core: false,
      dead: false, idx: -1
    };
  };

  // core: sits near the well centre, orbits slowly. rim: small bulge on the upper arc of the body.
  CloudSim.prototype._assignRole = function (p, core) {
    var rng = this.rng, sp = this.def.spread;
    p.core = core;
    if (core) {
      p.oR = (0.01 + rng() * 0.05) * sp;
      p.oA = rng() * TWO_PI;
    } else {
      p.oR = (0.08 + rng() * 0.06) * sp;
      p.oA = -Math.PI * (0.2 + rng() * 0.6);   // upper half (y up = negative)
    }
  };

  // --------------------------------------------------------------- Field ---
  CloudSim.prototype._psi = function (x, y) {
    var s = this.noiseSeed, z = this.time * 0.07;
    return (vnoise3(x * 2.6 + 11.3, y * 2.6 + 5.1, z, s) - 0.5) * 0.65 +
           (vnoise3(x * 5.3 + 3.7, y * 5.3 + 9.2, z * 1.6, s ^ 0x1234567) - 0.5) * 0.35;
  };

  // curl of psi, into out[0..1]
  CloudSim.prototype._curl = function (x, y, out) {
    var e = 0.006;
    var dpdy = (this._psi(x, y + e) - this._psi(x, y - e)) / (2 * e);
    var dpdx = (this._psi(x + e, y) - this._psi(x - e, y)) / (2 * e);
    out[0] = dpdy;
    out[1] = -dpdx;
  };

  // ---------------------------------------------------------------- Step ---
  CloudSim.prototype.step = function (dt) {
    if (!(dt > 0)) return;
    if (dt > 0.25) dt = 0.25;
    this.accum += dt;
    while (this.accum >= SUBSTEP - 1e-9) {
      this.accum -= SUBSTEP;
      this._substep();
    }
    this._write();
  };

  var _flow = [0, 0], _fa = [0, 0], _fb = [0, 0];

  CloudSim.prototype._substep = function () {
    var S = this.settings;
    var speed = clamp(+S.speed || 0, 0, 3);
    if (speed <= 0) return;
    var h = SUBSTEP * speed;
    var cohesion = clamp(+S.cohesion || 0, 0, 1);
    var breakup = clamp(+S.breakup || 0, 0, 1);
    var buoyancy = clamp(+S.buoyancy || 0, 0, 1);
    var turbulence = clamp(+S.turbulence || 0, 0, 1);
    var aspect = this.aspect;
    var P = this.parcels, n = P.length, i, j, p, q;
    var t = this.time;

    // --- wells wander slowly
    var W = this.wells;
    for (i = 0; i < W.length; i++) {
      var w = W[i];
      w.x = w.bx + (vnoise3(t * 0.045 + i * 7.1, 3.3, 0.5, this.noiseSeed) - 0.5) * 0.07;
      w.y = w.by + (vnoise3(9.7, t * 0.045 + i * 3.9, 1.5, this.noiseSeed) - 0.5) * 0.07 * aspect;
    }

    // --- coverage control: global area target
    var sumR2 = 0;
    for (i = 0; i < n; i++) if (P[i].dying < 0) sumR2 += P[i].rT * P[i].rT;
    var areaScale = sumR2 > 1e-6 ? Math.sqrt(this._targetArea() / sumR2) : 1;
    var areaBlend = 1 - Math.exp(-h / 6);

    var kSpring = 0.5 * (0.6 + cohesion);
    var damp = Math.exp(-2.0 * h);
    var flowScale = 0.045 * turbulence * (1 - 0.45 * cohesion);
    var heatRate = (0.25 + buoyancy) / 24 * this.def.heatGain;

    // --- per-parcel dynamics
    for (i = 0; i < n; i++) {
      p = P[i];
      p.age += h;
      p.link = p.link > 0 ? Math.max(0, p.link - h / LINK_DECAY_S) : 0;

      // radius easing
      if (p.dying >= 0) {
        p.dying += h;
        p.r = Math.max(0, p.r - p.r0 * h / FADE_OUT_S);
        if (p.r <= R_REMOVE || p.dying >= FADE_OUT_S) p.dead = true;
        if (p.mergeTo && !p.mergeTo.dead) {
          var mt = p.mergeTo, f = 1 - Math.exp(-h * 3);
          p.x += (mt.x - p.x) * f; p.y += (mt.y - p.y) * f;
        }
        continue;
      }
      p.rT = clamp(p.rT * (1 + (areaScale - 1) * areaBlend), R_MIN, R_MAX);
      p.r += (p.rT - p.r) * (1 - Math.exp(-h / RAMP_TAU));

      // heat cycle (bigger parcels cycle a bit slower)
      p.phase += h * heatRate * p.hrate * Math.sqrt(0.07 / Math.max(p.r, 0.03));
      if (p.phase >= 1) p.phase -= 1;
      p.prevHeat = p.heat;
      p.heat = 0.5 - 0.5 * Math.cos(TWO_PI * p.phase);
      var well = W[p.att];
      if (p.prevHeat >= 0.35 && p.heat < 0.35 && W.length > 1) {
        // cooled down: rebind to nearest OTHER well
        var best = -1, bd = 1e9;
        for (j = 0; j < W.length; j++) {
          if (j === p.att) continue;
          var ddx = W[j].x - p.x, ddy = W[j].y - p.y, d2 = ddx * ddx + ddy * ddy;
          if (d2 < bd) { bd = d2; best = j; }
        }
        if (best >= 0) {
          p.att = best; well = W[best];
          p.orbit = this.rng() < 0.5 ? -1 : 1;
          this._assignRole(p, p.r >= 0.08);
        }
      }
      var hot = smoothstep(0.55, 0.82, p.heat);

      // spring toward a slowly orbiting home point around the well (weakened when hot)
      if (p.core) {
        p.oA += p.orbit * 0.1 * h;
      } else {
        // rim bulges sway along the upper arc only
        p.oA += p.orbit * 0.06 * h;
        if (p.oA < -Math.PI * 0.85) { p.oA = -Math.PI * 0.85; p.orbit = 1; }
        else if (p.oA > -Math.PI * 0.15) { p.oA = -Math.PI * 0.15; p.orbit = -1; }
      }
      var oR = p.oR * (1 - 0.4 * cohesion);
      var dx = well.x + Math.cos(p.oA) * oR - p.x, dy = well.y + Math.sin(p.oA) * oR * 0.8 - p.y;
      var k = kSpring * (1 - 0.88 * hot);
      var ax = dx * k, ay = dy * k;

      // lift along the well's lift direction when hot
      var lift = 0.05 * hot * (0.4 + buoyancy) * well.liftGain;
      ax += well.lx * lift; ay += well.ly * lift;

      // soft boundary: spring back inside the margin, and bleed off outward velocity
      var bk = 6, outDamp = Math.exp(-8 * h), ov;
      if (p.x < MARGIN) { ov = MARGIN - p.x; ax += ov * bk; if (p.vx < 0) p.vx *= outDamp; }
      else if (p.x > 1 - MARGIN) { ov = p.x - (1 - MARGIN); ax -= ov * bk; if (p.vx > 0) p.vx *= outDamp; }
      if (p.y < MARGIN) { ov = MARGIN - p.y; ay += ov * bk; if (p.vy < 0) p.vy *= outDamp; }
      else if (p.y > aspect - MARGIN) { ov = p.y - (aspect - MARGIN); ay -= ov * bk; if (p.vy > 0) p.vy *= outDamp; }

      p.vx = (p.vx + ax * h) * damp;
      p.vy = (p.vy + ay * h) * damp;
    }

    // --- pairwise: soft repulsion + merge
    var mergeAllowed = this._liveCount() > MIN_COUNT;
    for (i = 0; i < n; i++) {
      p = P[i];
      if (p.dying >= 0) continue;
      for (j = i + 1; j < n; j++) {
        q = P[j];
        if (q.dying >= 0) continue;
        var ex = q.x - p.x, ey = q.y - p.y;
        var d = Math.sqrt(ex * ex + ey * ey);
        var rs = p.r + q.r;
        var cool = p.heat < 0.5 && q.heat < 0.5;
        var sameBody = p.att === q.att && p.heat < 0.55 && q.heat < 0.55;
        var inv = d > 1e-5 ? 1 / d : 0;
        var ux = ex * inv, uy = ey * inv;
        if (inv === 0) { ux = p.orbit; uy = 0; }
        var wp = q.r * q.r / (p.r * p.r + q.r * q.r), wq = 1 - wp;
        if (d >= rs * 0.62) {
          // weak cohesion pull between members of the same body that drifted apart
          if (sameBody && d > 0.9 * rs && d < 2.5 * rs) {
            var pull = (d - 0.9 * rs) / rs * 0.25 * (0.5 + cohesion) * h;
            p.vx += ux * pull * wp; p.vy += uy * pull * wp;
            q.vx -= ux * pull * wq; q.vy -= uy * pull * wq;
          }
          continue;
        }
        // merge only while both are cool AND on the cooling (sinking) half of their cycle
        var sinking = cool && p.phase > 0.5 && q.phase > 0.5;
        var combined = Math.sqrt(p.r * p.r + q.r * q.r);
        if (mergeAllowed && sinking && d < 0.4 * rs && combined <= R_MERGE_MAX && p.age > 1 && q.age > 1) {
          this._merge(p, q);
          mergeAllowed = this._liveCount() > MIN_COUNT;
          if (p.dying >= 0) break;
          continue;
        }
        // short-range soft repulsion: packs tight (10-40% overlap) without collapsing
        var push = (0.62 * rs - d) / (0.62 * rs) * 0.8 * h;
        p.vx -= ux * push * wp; p.vy -= uy * push * wp;
        q.vx += ux * push * wq; q.vy += uy * push * wq;
      }
    }

    // --- advect (dynamics + curl flow)
    for (i = 0; i < n; i++) {
      p = P[i];
      if (p.dying >= 0) continue;
      this._curl(p.x, p.y, _flow);
      p.x += (p.vx + _flow[0] * flowScale) * h;
      p.y += (p.vy + _flow[1] * flowScale) * h;
    }

    // --- splitting
    var live = this._liveCount();
    this.sinceForcedSplit += h;
    if (live < MAX_COUNT) {
      var splitRate = 0.5 * breakup;   // per second per eligible parcel
      for (i = 0; i < n && live < MAX_COUNT; i++) {
        p = P[i];
        if (p.dying >= 0 || p.r <= 0.06 || p.age < 1.5 || t - p.lastSplit < 3) continue;
        // local shear along flow
        this._curl(p.x + p.r, p.y, _fa); this._curl(p.x - p.r, p.y, _fb);
        var sh = Math.abs(_fa[0] - _fb[0]) + Math.abs(_fa[1] - _fb[1]);
        this._curl(p.x, p.y + p.r, _fa); this._curl(p.x, p.y - p.r, _fb);
        sh += Math.abs(_fa[0] - _fb[0]) + Math.abs(_fa[1] - _fb[1]);
        sh *= flowScale / (2 * p.r);   // 1/s
        var hotness = smoothstep(0.6, 0.85, p.heat);
        var shear = smoothstep(0.25, 0.9, sh);
        var drive = Math.max(hotness, shear);
        if (drive <= 0) continue;
        var prob = splitRate * drive * (1 + (p.r - 0.06) * 8) * h;
        if (this.rng() < prob) { this._split(p); live++; }
      }
    }
    // too few: split the largest
    if (live < MIN_COUNT && this.sinceForcedSplit > 0.5) {
      var big = null;
      for (i = 0; i < n; i++) {
        p = P[i];
        if (p.dying >= 0 || p.r <= 0.06) continue;
        if (!big || p.r > big.r) big = p;
      }
      if (big) { this._split(big); this.sinceForcedSplit = 0; }
    }

    // --- compact
    if (n !== P.length || this._anyDead()) {
      var keep = [];
      for (i = 0; i < P.length; i++) if (!P[i].dead) keep.push(P[i]);
      for (i = 0; i < keep.length; i++) {
        p = keep[i];
        if (p.parent && p.parent.dead) { p.parent = null; p.link = 0; }
        if (p.mergeTo && p.mergeTo.dead) p.mergeTo = null;
      }
      this.parcels = keep;
    }
    this.time += h;
  };

  CloudSim.prototype._anyDead = function () {
    var P = this.parcels;
    for (var i = 0; i < P.length; i++) if (P[i].dead) return true;
    return false;
  };

  CloudSim.prototype._liveCount = function () {
    var P = this.parcels, c = 0;
    for (var i = 0; i < P.length; i++) if (P[i].dying < 0) c++;
    return c;
  };

  CloudSim.prototype._split = function (p) {
    if (this.parcels.length >= MAX_BLOBS) return;
    var rng = this.rng;
    var f = 0.55 + rng() * 0.2;             // area share of the survivor
    var r1 = p.r * Math.sqrt(f), r2 = p.r * Math.sqrt(1 - f);
    if (r2 < R_MIN) { r2 = R_MIN; r1 = Math.sqrt(Math.max(p.r * p.r - r2 * r2, R_MIN * R_MIN)); }
    // direction: local flow direction (fallback to orbit tangent)
    this._curl(p.x, p.y, _flow);
    var dx = _flow[0], dy = _flow[1], L = Math.sqrt(dx * dx + dy * dy);
    if (L < 1e-5) { dx = p.orbit; dy = 0; L = 1; }
    dx /= L; dy /= L;
    // bias split away from well along lift (towers / tufts shear off upward)
    var w = this.wells[p.att];
    dx = dx * 0.6 + w.lx * 0.4; dy = dy * 0.6 + w.ly * 0.4;
    L = Math.sqrt(dx * dx + dy * dy) || 1; dx /= L; dy /= L;
    var kick = 0.025;

    var c = this._newParcel(p.x, p.y, p.r, p.seed + 0.05, p.att);
    c.rT = r2;
    c.phase = p.phase + 0.03; if (c.phase >= 1) c.phase -= 1;
    c.heat = p.heat; c.prevHeat = p.heat;
    c.vx = p.vx + dx * kick; c.vy = p.vy + dy * kick;
    c.parent = p; c.link = 1;
    c.lastSplit = this.time;
    c.orbit = -p.orbit;

    p.rT = r1;
    p.vx -= dx * kick * (r2 * r2) / (r1 * r1 + r2 * r2) * 2;
    p.vy -= dy * kick * (r2 * r2) / (r1 * r1 + r2 * r2) * 2;
    p.lastSplit = this.time;

    this.parcels.push(c);
    this.stats.splits++;
  };

  CloudSim.prototype._merge = function (a, b) {
    var surv = a.r >= b.r ? a : b, other = surv === a ? b : a;
    var a1 = surv.r * surv.r, a2 = other.r * other.r;
    var tot = a1 + a2;
    var mx = (surv.x * a1 + other.x * a2) / tot, my = (surv.y * a1 + other.y * a2) / tot;
    // nudge the survivor toward the area-weighted mean (no teleport)
    surv.vx += (mx - surv.x) / FADE_OUT_S * 0.5;
    surv.vy += (my - surv.y) / FADE_OUT_S * 0.5;
    surv.vx = (surv.vx * a1 + other.vx * a2) / tot;
    surv.vy = (surv.vy * a1 + other.vy * a2) / tot;
    surv.rT = Math.min(Math.sqrt(tot), R_MAX);
    other.dying = 0;
    other.r0 = other.r;
    other.mergeTo = surv;
    other.link = 0; other.parent = null;
    this.stats.merges++;
  };

  // --------------------------------------------------------------- Output ---
  CloudSim.prototype._write = function () {
    var P = this.parcels, n = Math.min(P.length, MAX_BLOBS);
    var B = this.blobs, A = this.aux, i, p;
    for (i = 0; i < n; i++) P[i].idx = i;
    for (i = 0; i < n; i++) {
      p = P[i];
      var o = i * 4;
      B[o] = p.x; B[o + 1] = p.y; B[o + 2] = p.r; B[o + 3] = p.seed;
      A[o] = p.heat; A[o + 1] = p.age;
      A[o + 2] = (p.parent && !p.parent.dead && p.parent.idx >= 0 && p.link > 0) ? p.parent.idx : -1;
      A[o + 3] = A[o + 2] >= 0 ? p.link : 0;
    }
    for (i = n * 4; i < MAX_BLOBS * 4; i++) { B[i] = 0; A[i] = 0; }
    this.blobCount = n;
  };

  CloudSim.PRESETS = PRESET_NAMES;
  CloudSim.MAX_BLOBS = MAX_BLOBS;
  CloudSim.PRESET_DEFAULTS = {};
  for (var pi = 0; pi < PRESET_NAMES.length; pi++) {
    CloudSim.PRESET_DEFAULTS[PRESET_NAMES[pi]] = copy(PRESETS[PRESET_NAMES[pi]].defaults);
  }

  window.CloudSim = CloudSim;
})();
