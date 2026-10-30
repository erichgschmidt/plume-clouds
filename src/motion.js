/* ThermalSim — motion-first cloud model (the restart), second pass after review.
 *
 * One rising thermal: an interior force pushes UP along the axis; at the crown it disperses
 * outward; the edges roil over and cascade DOWN the outside. The flow is Hill's spherical vortex
 * in the thermal's frame (r from the axis, z up, unit sphere):
 *   u_z = U (1 - 2 r^2 - z^2)      up on the axis, down on the outside
 *   u_r = U r z                     outward at the top, inward at the bottom
 *
 * What makes it a cloud rather than a conveyor belt of permanent puffs:
 * - Condensation level: a FIXED world height (baseY). Air may circulate below it but is invisible
 *   there: a parcel that descends past it evaporates (fades) and is recycled. The renderer cuts the
 *   field on that line, so the base is flat regardless of the spheres.
 * - Exposure: a parcel on the outer flank, sinking, mixes with dry air: its freshness decays, its
 *   small caps go first (soft old flank), its radius shrinks a little, and finally it retires.
 * - Bubbles: with a pulse, parcels re-enter as a cohort (3..5 over ~1.5 s, one shared offset and
 *   size), and a travelling surge rides up the axis with them so a fresh turret pushes through.
 * - Roll: each parcel's billow skin turns with the local vorticity (half the curl), fastest at the
 *   crown and down the flanks, about an axis tangent to the ring.
 * - Noise is correlated in time (2 s), so motion does not depend on the frame rate.
 *
 * Output matches what CloudRenderer reads: blobs (x, y, r, seed), aux (branch, depth, parent,
 * link), spin (roll axis xyz, roll angle), detail (freshness), baseY, blobCount, refRadius,
 * maxParcelRadius, time. Parcel 0 is a hidden core on the axis, the parent of every parcel.
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
  function smoothstep(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  function gauss(rng) { var u = 1 - rng(), v = rng(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(6.283185 * v); }

  var PRESETS = {
    // a flat fair-weather puff: weak updraft, wide, little roil
    humilis:   { updraft: 0.03, width: 0.26, height: 0.12, rise: 0.000,  expand: 0.0000, settle: 0.15, count: 18, size: 0.08,  jitter: 0.08, mixing: 25, pulse: 0,  base: 0.55, rollGain: 4.5, formTime: 60, reservoir: 0.35 },
    // a growing cumulus: strong updraft, tall ring, parcels cascade down the sides
    congestus: { updraft: 0.04, width: 0.20, height: 0.26, rise: 0.0004, expand: 0.0002, settle: 0.10, count: 32, size: 0.066,  jitter: 0.08, mixing: 25, pulse: 25, base: 0.60, rollGain: 4.5, formTime: 90, reservoir: 0.35 },
    // a tower: narrow and tall, fast core, long cascade
    tower:     { updraft: 0.055, width: 0.14, height: 0.36, rise: 0.0006, expand: 0.00015, settle: 0.10, count: 40, size: 0.056, jitter: 0.10, mixing: 22, pulse: 20, base: 0.65, rollGain: 4.5, formTime: 120, reservoir: 0.30 }
  };

  function ThermalSim(opts) {
    opts = opts || {};
    this.aspect = opts.aspect > 0 ? opts.aspect : 0.75;
    this.blobs = new Float32Array(MAX * 4);
    this.aux = new Float32Array(MAX * 4);
    this.spin = new Float32Array(MAX * 4);   // per-parcel roll axis (x, y-down, z toward viewer) + angle
    this.detail = new Float32Array(MAX);     // per-parcel freshness (small-cap scale)
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
    this.params.parallax = 0.02;
    this.preset = preset;
    this.time = 0;
    this.cx = 0.5; this.cy = this.cy0 = this.aspect * 0.66;   // thermal centre (world: y top-down)
    this.width0 = this.params.width; this.height0 = this.params.height;
    this.width = this.width0; this.height = this.height0;
    // the condensation level is a fixed world height, not a floor that moves with the thermal
    this.baseY = this.cy + this.params.base * this.height0;
    this.parcels = [];
    this.base = [];               // the basal reservoir: dense, slow, soft parcels just above the base line
    this.waiting = 0;             // retired parcels queued for re-entry
    this.cohort = null;           // parcels being released as one bubble
    this.cohorts = [];            // live cohorts: shared noise so a turret's parcels move together
    this.cohortSerial = 0;
    this.leader = null; this.leaderUntil = 0;   // one winning turret at a time
    this.nextPulse = this.params.pulse > 0 ? this.params.pulse * (0.5 + 0.5 * this.rng()) : 0;
    this.surge = null;            // travelling updraft boost { zb }
    // formation: start as a small puff (a quarter of the population) and build up over formTime
    var n = Math.min(MAX - 1, Math.max(3, Math.round((this.params.count | 0) * (this.params.formTime > 0 ? 0.4 : 1))));
    for (var i = 0; i < n; i++) this.parcels.push(this._spawn(true, null));
    var nb = Math.round((this.params.count | 0) * (this.params.reservoir || 0) * 0.6);
    // feeding neck: a connected core from the base up into the body, so the crown never floats
    for (i = 0; i < 3; i++) {
      var rg = this.rng;
      this.base.push({ x: (rg() - 0.5) * 0.25, lift: 0.35 + i * 0.22, phi: rg() * 6.283, size: 1.8 - i * 0.15,
        seed: rg() * 100, nx: gauss(rg), roll: rg() * 6.283, neck: true });
    }
    for (i = 0; i < nb; i++) {
      var rng = this.rng, u = (i + 0.5) / nb;
      this.base.push({ x: (u * 2 - 1) * 0.72 + (rng() - 0.5) * 0.1, lift: 0.12 + rng() * 0.3, phi: rng() * 6.283,
        size: 1.6 + rng() * 0.4, seed: rng() * 100, nx: gauss(rng), roll: rng() * 6.283 });
    }
    this._emit();
  };

  ThermalSim.prototype._spawn = function (initial, cohort) {
    var rng = this.rng;
    var forming = this.params.formTime > 0 && this.time < 1;
    // a forming cloud starts as a compact puff low on the axis; a full one fills the ring's shell
    var baseZ = -(this.params.base || 0.6) * (this.height0 / (this.height || this.height0)) + (this.cy - (this.cy0 || this.cy)) / (this.height || this.height0);
    var z = initial ? (forming ? rng() * 0.75 - 0.55 : rng() * 1.35 - 0.5) : baseZ + 0.03 + rng() * 0.15;
    var isLead = !!(cohort && cohort.lead);
    if (cohort) cohort.lead = false;   // only the first parcel of a bubble is its head
    var p = {
      // the budget goes to the visible shell: initial parcels sit near the ring's surface
      r: initial ? Math.sqrt(Math.max(0, 1 - z * z)) * (forming ? 0.3 + 0.6 * rng() : 0.55 + 0.4 * rng()) : (cohort ? 0.15 + rng() * 0.2 : 0.05 + rng() * 0.12),
      z: z,
      phi: cohort ? cohort.phi + (rng() - 0.5) * 0.5 : rng() * Math.PI * 2,
      size: (cohort ? cohort.size * (isLead ? 1.45 : 1) : 1) * (0.8 + rng() * 0.4),
      lead: isLead,
      cohort: cohort || null,
      seed: rng() * 100,
      link: initial ? 1 : 0,
      age: initial ? 4 + rng() * 20 : 0,
      exposure: initial ? rng() * 3 : 0,
      fresh: 1,
      dying: false,
      roll: rng() * 6.283,
      nr: gauss(rng), nz: gauss(rng)   // correlated noise state
    };
    return p;
  };

  ThermalSim.prototype.setPreset = function (preset) { this.reset(this.seed, preset); };

  ThermalSim.prototype.step = function (dt) {
    if (!(dt > 0) || !isFinite(dt)) return;
    dt = Math.min(dt, 0.1);
    var P = this.params, rng = this.rng, i, p;
    this.time += dt;
    // the form grows: the thermal rises and widens slowly (the base line stays put)
    var W = Math.min(this.width0 * 1.25, this.width0 + P.expand * this.time), H = Math.min(this.height0 * 1.3, this.height0 + P.expand * 1.4 * this.time);
    // the thermal rises off the fixed base, but stays in frame: the crown stops near the top edge
    this.cy = Math.max(H * 1.15 + 0.22 * this.aspect, this.cy - P.rise * dt);
    this.width = W; this.height = H;
    var U = P.updraft;
    var baseZ = (this.cy - this.baseY) / H;   // condensation level in the unit frame (negative: below centre)

    // ---- population: cohorts (bubbles) or a steady trickle ----
    var formed = P.formTime > 0 ? Math.min(1, 0.4 + 0.6 * this.time / P.formTime) : 1;
    var want = Math.min(MAX - 1, Math.round((P.count | 0) * formed));
    var alive = 0;
    for (i = 0; i < this.parcels.length; i++) if (!this.parcels[i].dying) alive++;
    var deficit = Math.max(0, want - alive);
    if (P.pulse > 0) {
      if (!this.cohort && this.time >= this.nextPulse && (this.waiting > 0 || deficit > 0)) {
        var n = Math.min(3 + Math.floor(rng() * 4), Math.max(1, this.waiting + deficit));
        this.cohort = { n: n, phi: rng() * Math.PI * 2, size: 1.0 + 0.3 * rng(), every: 5 / n, clock: 0,
          id: ++this.cohortSerial, nr: gauss(rng), nz: gauss(rng), lead: true };
        this.cohorts.push(this.cohort);
        this.surge = { zb: baseZ - 0.1 };
        this.nextPulse = this.time + P.pulse * (0.75 + 0.5 * rng()) * (0.5 + 0.5 * formed);
      }
      if (this.cohort) {
        var c = this.cohort; c.clock += dt;
        while (c.n > 0 && c.clock >= 0 && this.parcels.length < MAX - 1 && (this.waiting > 0 || deficit > 0)) {
          this.parcels.push(this._spawn(false, c));
          if (this.waiting > 0) this.waiting--; else deficit--;
          c.n--; c.clock -= c.every;
        }
        if (c.n <= 0) this.cohort = null;
      }
    }
    // steady trickle: always when there is no pulse; with a pulse only to catch up when the queue
    // has grown past a third of the population (cohorts alone cannot keep up)
    if ((this.waiting > 0 || deficit > 0) && this.parcels.length < MAX - 1 &&
        (P.pulse <= 0 || deficit > 0 || this.waiting > want * 0.34) && rng() < dt * 0.8) {
      this.parcels.push(this._spawn(false, null));
      if (this.waiting > 0) this.waiting--;
    }
    if (alive > want) { for (i = this.parcels.length - 1; i >= 0; i--) if (!this.parcels[i].dying) { this.parcels[i].dying = true; break; } }
    // leadership: the newest turret head takes over when the old leader has held 20..30 s or died
    if (this.leader && (this.time > this.leaderUntil || this.leader.dying)) this.leader = null;
    if (!this.leader) { for (i = this.parcels.length - 1; i >= 0; i--) if (this.parcels[i].lead && !this.parcels[i].dying) { this.leader = this.parcels[i]; this.leaderUntil = this.time + 20 + 10 * rng(); break; } }
    // the surge rides up the axis with the new bubble
    if (this.surge) { this.surge.zb += 0.8 * U * dt; if (this.surge.zb > 1.3) this.surge = null; }

    var aN = Math.exp(-dt / 2);                 // 2 s correlation time
    var bN = Math.sqrt(1 - aN * aN);
    for (i = 0; i < this.cohorts.length; i++) { var ch = this.cohorts[i]; ch.nr = aN * ch.nr + bN * gauss(rng); ch.nz = aN * ch.nz + bN * gauss(rng); }
    if (this.cohorts.length > 12) this.cohorts.shift();
    // the reservoir drifts slowly along the base and rolls gently with the inflow
    for (i = 0; i < this.base.length; i++) {
      var q = this.base[i];
      q.nx = aN * q.nx + bN * gauss(rng);
      q.x += (q.neck ? 0.01 : 0.02) * U * q.nx * dt - 0.004 * U * q.x * dt;
      q.roll += 0.25 * U * P.rollGain * dt;
    }
    for (i = 0; i < this.parcels.length; i++) {
      p = this.parcels[i];
      var r = p.r, z = p.z, rr = r * r, zz = z * z;
      var ur = U * r * z, uz = U * (1 - 2 * rr - zz);
      var s2 = rr + zz;
      if (s2 > 1) { var k = (Math.sqrt(s2) - 1) * 1.5 * U; ur -= k * r / Math.sqrt(s2); uz -= k * z / Math.sqrt(s2); }
      // fresh bubble: a localized boost travelling up the axis
      if (this.surge) uz += 0.35 * U * Math.exp(-rr / 0.12 - (z - this.surge.zb) * (z - this.surge.zb) / 0.08);
      // one winner per crown: the leader rises 1.6x and grows faster, rival summits slow to 0.7x
      if (p === this.leader) uz *= 1.6; else if (p.lead) uz *= 1.15; else if (z > 0.3 && uz > 0) uz *= 0.7;
      // settle: weak drag near the base so the lowest ring lingers a little
      var low = clamp((baseZ + 0.25 - z) / 0.3, 0, 1);
      var drag = 1 - P.settle * low * low;
      ur *= drag; uz *= drag;
      // billows roll with the local vorticity (half the curl of the mapped flow), fastest at the
      // crown and down the flanks; jitter does not count
      var crownness = clamp((z + 0.3) / 1.1, 0, 1);
      p.roll += 0.5 * U * r * (W / H + 4 * H / W) * drag * P.rollGain * (0.3 + 0.7 * crownness) * dt;
      // correlated noise (Ornstein-Uhlenbeck): the same motion at any frame rate
      p.nr = aN * p.nr + bN * gauss(rng); p.nz = aN * p.nz + bN * gauss(rng);
      // a turret's parcels share most of their wander
      var cnr = p.cohort ? 0.7 * p.cohort.nr + 0.3 * p.nr : p.nr, cnz = p.cohort ? 0.7 * p.cohort.nz + 0.3 * p.nz : p.nz;
      ur += P.jitter * U * cnr; uz += P.jitter * U * cnz;
      p.r = Math.max(0.02, r + ur * dt);
      p.z = z + uz * dt;
      p.age += dt;
      // exposure: sinking on the outer flank mixes with dry air
      p.exposure += dt * smoothstep(0.55, 0.9, p.r) * (uz < 0 ? 1 : 0.25);
      p.fresh = Math.exp(-p.exposure / P.mixing);
      // below the condensation level the parcel evaporates: fade (by burial) and recycle
      var below = p.z < baseZ && p.age > 2;
      if (!p.dying && (below || p.fresh < 0.08)) p.dying = true;
      if (p.dying) {
        p.link = Math.max(0, p.link - dt / (below ? 1.5 : 3));
        if (p.link <= 0) { this.parcels.splice(i, 1); i--; this.waiting++; continue; }
      } else if (p.link < 1) p.link = Math.min(1, p.link + dt / 6);
    }
    this._emit();
  };

  ThermalSim.prototype._emit = function () {
    var B = this.blobs, A = this.aux, S = this.spin, D = this.detail, P = this.params, W = this.width, H = this.height;
    var size = P.size, rMax = P.size * 3;
    // parallax: a slow sideways sway of the eye; every parcel shifts by its depth (pure translation,
    // the forms keep their shape)
    var swx = (P.parallax || 0) * Math.sin(this.time * 0.11), swy = (P.parallax || 0) * 0.35 * Math.sin(this.time * 0.073 + 1.0);
    B[0] = this.cx; B[1] = this.cy; B[2] = size * 0.8; B[3] = 7.7;
    A[0] = 0; A[1] = 0.5; A[2] = -1; A[3] = 1;
    S[0] = 0; S[1] = 0; S[2] = 1; S[3] = 1e-6; D[0] = 1;
    var n = 1;
    for (var i = 0; i < this.parcels.length && n < MAX; i++) {
      var p = this.parcels[i], o = n * 4;
      var c = Math.cos(p.phi), s = Math.sin(p.phi);
      B[o] = this.cx + p.r * c * W + swx * s;
      B[o + 1] = this.cy - p.z * H + swy * s;
      // a young parcel grows toward 1.3x its birth radius over 4 s; an old one erodes up to 20 %
      var grow = 1 + (p === this.leader ? 0.55 : 0.3) * (1 - Math.exp(-p.age / 4));
      var erode = 1 - 0.2 * (1 - p.fresh);
      // domes before texture: a crown parcel is ~1.7x a flank parcel
      // domes before texture: a crown parcel is ~2.5x a flank parcel
      var hz = clamp((p.z + 0.3) / 1.1, 0, 1);
      B[o + 2] = Math.min(rMax, size * p.size * grow * erode * (0.7 + 1.05 * hz * hz));
      B[o + 3] = p.seed;
      A[o] = 0;                              // one branch: parcels merge into one body
      A[o + 1] = 0.5 + 0.4 * s;              // depth: front of the ring sits higher
      A[o + 2] = 0;                          // parent: the core
      A[o + 3] = p.link;
      // ring-vortex vorticity is tangent to the ring: flank puffs spin in the screen plane, top
      // outward and down the outside; a front puff rolls toward the viewer and under
      S[o] = -s; S[o + 1] = 0; S[o + 2] = c; S[o + 3] = p.roll;
      // fine relief has a 12 s half-life after condensation; only a fresh, high (lit) crown keeps it
      var aged = 0.1 + 0.9 * Math.exp(-p.age / 25);
      var lowQuiet = 0.35 + 0.65 * smoothstep(0.2, 0.5, hz);   // the lower third is quiet
      D[n] = Math.max(aged, p.fresh * hz * hz) * Math.min(1, p.fresh + 0.3) * lowQuiet;
      n++;
    }
    // basal reservoir: wide, dense, soft (no small caps), pinned just above the base line
    for (i = 0; i < this.base.length && n < MAX; i++) {
      var q = this.base[i]; o = n * 4;
      var qs = Math.sin(q.phi);
      B[o] = this.cx + q.x * W + swx * qs; B[o + 1] = this.baseY - q.lift * H + swy * qs;
      B[o + 2] = Math.min(rMax, size * q.size * (1 - 0.35 * q.x * q.x)); B[o + 3] = q.seed;
      A[o] = 0; A[o + 1] = 0.5 + 0.3 * Math.sin(q.phi); A[o + 2] = 0; A[o + 3] = 1;
      S[o] = 0; S[o + 1] = 0; S[o + 2] = q.x >= 0 ? 1 : -1; S[o + 3] = q.roll;
      D[n] = 0.05;
      n++;
    }
    this.topY = this.cy - H;
    this.blobCount = n;
    for (var k = n * 4; k < MAX * 4; k++) { B[k] = 0; A[k] = 0; S[k] = 0; }
    for (k = n; k < MAX; k++) D[k] = 1;
  };

  Object.defineProperty(ThermalSim.prototype, 'refRadius', { get: function () { return Math.max(0.01, this.params.size * 1.25); } });
  Object.defineProperty(ThermalSim.prototype, 'maxParcelRadius', { get: function () { return 0.4; } });

  window.ThermalSim = ThermalSim;
})();
