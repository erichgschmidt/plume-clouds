/* ThermalSim — motion-first cloud model (the restart).
 *
 * One rising thermal, drawn from the sketch: an interior force pushes UP along the axis; at the
 * top it disperses outward; the edges roil over and cascade DOWN the outside, slow, and land at
 * the bottom, where parcels linger (more density at the base) before being drawn back inside.
 *
 * Flow: Hill's spherical vortex in the frame of the thermal (r = distance from the axis, z = up):
 *   u_z = U (1 - 2 r^2 - z^2)      up on the axis, down on the outside
 *   u_r = U r z                     outward at the top, inward at the bottom
 * Parcels advect in that field. Each parcel also has an azimuth phi around the axis so the ring is
 * a volume: screen x = axis + r cos(phi), depth = sin(phi) (front parcels sit higher in the field).
 * The thermal itself rises and widens slowly (the form grows); parcels that linger at the base
 * fade out by burial and re-enter on the axis near the base (never a pop).
 *
 * Output matches what CloudRenderer reads: blobs (x, y, r, seed), aux (branch, depth, parent, link),
 * blobCount, refRadius, maxParcelRadius, time. Parcel 0 is a hidden core on the axis that every
 * parcel points to as its parent, so the skin of caps rolls outward-and-over (the renderer's roll
 * axis is perpendicular to the parent->parcel direction).
 * Classic script, assigns window.ThermalSim.
 */
(function () {
  'use strict';
  var MAX = 64;

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  var PRESETS = {
    // a flat fair-weather puff: weak updraft, wide, little roil
    humilis:   { updraft: 0.30, width: 0.26, height: 0.12, rise: 0.000,  expand: 0.0000, settle: 0.6, count: 30, size: 0.055, jitter: 0.25, respawn: 14 },
    // a growing cumulus: strong updraft, tall ring, parcels cascade down the sides
    congestus: { updraft: 0.50, width: 0.20, height: 0.26, rise: 0.0015, expand: 0.0005, settle: 0.5, count: 46, size: 0.050, jitter: 0.3, respawn: 10 },
    // a tower: narrow and tall, fast core, long cascade
    tower:     { updraft: 0.70, width: 0.14, height: 0.36, rise: 0.0025, expand: 0.0003, settle: 0.4, count: 56, size: 0.042, jitter: 0.35, respawn: 8 }
  };

  function ThermalSim(opts) {
    opts = opts || {};
    this.aspect = opts.aspect > 0 ? opts.aspect : 0.75;
    this.blobs = new Float32Array(MAX * 4);
    this.aux = new Float32Array(MAX * 4);
    this.blobCount = 0;
    this.params = {};
    this.reset(opts.seed !== undefined ? opts.seed : 1, opts.preset || 'congestus');
  }
  ThermalSim.PRESETS = Object.keys(PRESETS);
  ThermalSim.PRESET_DEFAULTS = PRESETS;
  ThermalSim.MAX_BLOBS = MAX;

  ThermalSim.prototype.reset = function (seed, preset) {
    this.seed = seed | 0;
    this.rng = mulberry32(this.seed ^ 0x9E3779B1);
    var def = PRESETS[preset] || PRESETS.congestus;
    for (var k in def) this.params[k] = def[k];
    this.preset = preset;
    this.time = 0;
    this.cx = 0.5; this.cy = this.aspect * 0.66;   // thermal centre (world: y top-down)
    this.width0 = this.params.width; this.height0 = this.params.height;
    this.parcels = [];
    var n = Math.min(MAX - 1, this.params.count);
    for (var i = 0; i < n; i++) this.parcels.push(this._spawn(true));
    this._emit();
  };

  // a parcel enters on the axis near the base and rises inside the body (burial emergence)
  ThermalSim.prototype._spawn = function (initial) {
    var rng = this.rng;
    var p = {
      r: initial ? rng() * 0.9 : 0.08 + rng() * 0.1,              // distance from the axis (unit frame)
      z: initial ? (rng() * 1.6 - 0.8) : -0.55 - rng() * 0.3,     // up (unit frame)
      phi: rng() * Math.PI * 2,                                   // azimuth around the axis
      size: 0.75 + rng() * 0.5,
      seed: rng() * 100,
      link: initial ? 1 : 0,
      dwell: 0,
      dying: false,
      spin: (rng() - 0.5) * 0.15                                  // slow azimuth drift
    };
    if (initial) p.r = Math.min(p.r, Math.sqrt(Math.max(0, 1 - p.z * p.z)) * 0.95);
    return p;
  };

  ThermalSim.prototype.setPreset = function (preset) { this.reset(this.seed, preset); };

  ThermalSim.prototype.step = function (dt) {
    if (!(dt > 0) || !isFinite(dt)) return;
    dt = Math.min(dt, 0.1);
    var P = this.params, rng = this.rng;
    this.time += dt;
    // the form grows: the thermal rises and widens slowly
    this.cy -= P.rise * dt;
    var W = this.width0 + P.expand * this.time, H = this.height0 + P.expand * 1.4 * this.time;
    this.width = W; this.height = H;
    var U = P.updraft, i, p;
    // keep the population at count: grow or retire slowly, never instantly
    var want = Math.min(MAX - 1, P.count | 0);
    var alive = 0;
    for (i = 0; i < this.parcels.length; i++) if (!this.parcels[i].dying) alive++;
    if (alive < want && this.parcels.length < MAX - 1) this.parcels.push(this._spawn(false));
    if (alive > want) { for (i = this.parcels.length - 1; i >= 0; i--) if (!this.parcels[i].dying) { this.parcels[i].dying = true; break; } }

    for (i = 0; i < this.parcels.length; i++) {
      p = this.parcels[i];
      var r = p.r, z = p.z, rr = r * r, zz = z * z;
      // Hill's vortex (unit sphere); outside it, a gentle pull back toward the surface
      var ur = U * r * z, uz = U * (1 - 2 * rr - zz);
      var s2 = rr + zz;
      if (s2 > 1) { var k = (Math.sqrt(s2) - 1) * 1.5 * U; ur -= k * r / Math.sqrt(s2); uz -= k * z / Math.sqrt(s2); }
      // settle: the bottom of the ring is where parcels land and linger (density at the base)
      var low = clamp((-z - 0.45) / 0.45, 0, 1);
      var drag = 1 - P.settle * low * low;
      ur *= drag; uz *= drag;
      // jitter: slow wander, stronger near the crown where the force disperses
      var top = clamp((z + 0.2) / 0.8, 0, 1);
      ur += (rng() - 0.5) * P.jitter * (0.3 + top) * 0.6;
      uz += (rng() - 0.5) * P.jitter * (0.3 + top) * 0.6;
      p.r = Math.max(0.02, r + ur * dt);
      p.z = z + uz * dt;
      p.phi += p.spin * dt;
      // parcels that linger at the base are drawn back inside: fade (burial), then re-enter
      if (low > 0.6 && p.r < 0.5) p.dwell += dt; else p.dwell = Math.max(0, p.dwell - dt * 0.5);
      if (p.dwell > P.respawn && !p.dying) p.dying = true;
      if (p.dying) {
        p.link = Math.max(0, p.link - dt / 8);
        if (p.link <= 0) {
          if (alive >= want) { this.parcels.splice(i, 1); i--; continue; }
          var q = this._spawn(false); q.phi = p.phi; this.parcels[i] = q;
        }
      } else if (p.link < 1) p.link = Math.min(1, p.link + dt / 8);
    }
    this._emit();
  };

  ThermalSim.prototype._emit = function () {
    var B = this.blobs, A = this.aux, P = this.params, W = this.width || this.width0, H = this.height || this.height0;
    var size = P.size * (1 + (W / this.width0 - 1) * 0.5);
    // parcel 0: hidden core on the axis (the parent every parcel rolls away from)
    B[0] = this.cx; B[1] = this.cy; B[2] = size * 0.8; B[3] = 7.7;
    A[0] = 0; A[1] = 0.5; A[2] = -1; A[3] = 1;
    var n = 1;
    for (var i = 0; i < this.parcels.length && n < MAX; i++) {
      var p = this.parcels[i], o = n * 4;
      var c = Math.cos(p.phi), s = Math.sin(p.phi);
      B[o] = this.cx + p.r * c * W;
      B[o + 1] = this.cy - p.z * H;
      // crown lobes a little larger, base parcels a little smaller
      B[o + 2] = Math.min(0.4, size * p.size * (0.85 + 0.25 * clamp((p.z + 1) / 2, 0, 1)));
      B[o + 3] = p.seed;
      A[o] = 0;                              // one branch: parcels merge into one body
      A[o + 1] = 0.5 + 0.5 * s * 0.8;        // depth: front of the ring sits higher
      A[o + 2] = 0;                          // parent: the core (roll axis perpendicular to outward)
      A[o + 3] = p.link;
      n++;
    }
    this.blobCount = n;
    for (var k = n * 4; k < MAX * 4; k++) { B[k] = 0; A[k] = 0; }
  };

  Object.defineProperty(ThermalSim.prototype, 'refRadius', { get: function () { return Math.max(0.01, this.params.size * 1.25); } });
  Object.defineProperty(ThermalSim.prototype, 'maxParcelRadius', { get: function () { return 0.4; } });

  window.ThermalSim = ThermalSim;
})();
