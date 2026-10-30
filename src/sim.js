/* CloudSim v2 — plume/branch tree simulation for Plume Clouds (CONTRACT.md "v2").
 *
 * Classic script, no modules, no deps. Assigns window.CloudSim.
 * World: x in [0,1], y in [0,aspect], y grows downward. Deterministic for
 * (seed, preset, settings, fixed 1/60 substeps).
 *
 * Structure
 *   plume  : a tree of branches rooted at a base point.
 *   branch : ordered chain of 3-8 parcels root->tip along a gently curving
 *            polyline; radius tapers ~0.11 (root) -> ~0.045 (tip). Has a depth z,
 *            rotates slowly about its root (trunks only sway), sways with the
 *            curl-noise field (turbulence).
 *   feeding: parcels creep along the chain (toward the root, or away, per
 *            branch). A parcel leaving one end fades out (r -> 0 over 0.5 s,
 *            sitting inside the parent/tip) and re-enters at the other end
 *            fading in, so the branch is continuously fed / regrown.
 *   budding: new child branches bud off a parent at an attach point (fixed
 *            parameter along the parent chain), link 0->1 over 2 s while the
 *            radii grow in; leaf branches die with link 1->0 while shrinking.
 *            Rates follow `breakup`. No merging between branches, ever.
 *
 * aux per blob = [branchId 0..15, z 0..1, parentBlob (index of the parent-branch
 * parcel the branch root attaches to, root parcel of child branches only, else
 * -1), link 0..1].
 */
(function () {
  'use strict';

  var MAX_BLOBS = 64;
  var MAX_BRANCHES = 16;
  var SUBSTEP = 1 / 60;
  var MARGIN = 0.04;
  var R_ROOT = 0.15, R_TIP = 0.10;         // child branch taper: a billow is nearly trunk-sized
  var TRUNK_ROOT = 0.16, TRUNK_TIP = 0.12; // trunk taper (broad, not tall)
  var MAX_L = 0.35;                        // max chain length (world units)
  var R_OUT_MIN = 0.002;        // parcels below this are not emitted
  var FADE_S = 0.5;            // parcel fade in/out at chain ends
  var BIRTH_S = 20.0;           // branch link / growth ramp: a lobe emerges slowly from inside its parent
  var PHI = 1.618;             // golden ratio: successor size 1/PHI, successor speed x PHI
  var SPAWN_ARC = 0.7;         // rad a billow travels before its successor buds behind it
  var DIE_ARC = 1.4;           // rad a billow travels before it sinks back into the body
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
  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
  function copy(o) { var r = {}; for (var k in o) r[k] = o[k]; return r; }

  // ------------------------------------------------------------- Presets ---
  // plumes: base (u, v of aspect), trunk angle (radians, -PI/2 = up), trunk parcel count,
  // child count range, curl (curvature of child branches, rad per world unit), spin (rotation
  // rate range for children), crossBud (may bud onto another plume's trunk).
  var PRESETS = {
    // one upright lobe, no budding, no rotation: isolates the surface roll
    single: {
      plumes: [{ u: 0.5, v: 0.6, angle: -Math.PI / 2, trunkN: 1, children: [0, 0], curl: 0, spin: [0, 0], tower: 1, maxL: 0.14, rMul: 1.1, maxDepth: 0, still: true }],
      crossBud: false,
      defaults: { speed: 1, cohesion: 0.8, breakup: 0, buoyancy: 0.3, turbulence: 0.15, coverage: 0.6 }
    },
    plumes: {
      plumes: [{ u: 0.4, v: 0.66, angle: -0.1, trunkN: 5, children: [3, 4], curl: 1.2, spin: [0.05, 0.12], tower: 1, maxL: 0.2, rMul: 0.8, maxDepth: 2 }],
      crossBud: false,
      defaults: { speed: 1, cohesion: 0.6, breakup: 0.5, buoyancy: 0.5, turbulence: 0.4, coverage: 0.6 }
    },
    lavalamp: {
      plumes: [{ u: 0.3, v: 0.6, angle: -0.15, trunkN: 5, children: [3, 6], curl: 4.0, spin: [0.05, 0.1], tower: 1, maxL: 0.28, rMul: 0.9 }],
      crossBud: false,
      defaults: { speed: 1, cohesion: 0.7, breakup: 0.4, buoyancy: 0.7, turbulence: 0.3, coverage: 0.55 }
    },
    islands: {
      plumes: [
        { u: 0.14, v: 0.62, angle: -0.4, trunkN: 4, children: [2, 3], curl: 1.5, spin: [0.08, 0.15], tower: 0.6, maxL: 0.25, rMul: 0.45 },
        { u: 0.46, v: 0.3, angle: 0.2, trunkN: 4, children: [2, 3], curl: 1.5, spin: [0.08, 0.15], tower: 0.6, maxL: 0.25, rMul: 0.45 },
        { u: 0.78, v: 0.64, angle: -0.3, trunkN: 4, children: [2, 3], curl: 1.5, spin: [0.08, 0.15], tower: 0.6, maxL: 0.25, rMul: 0.45 }
      ],
      crossBud: false,
      defaults: { speed: 1, cohesion: 0.5, breakup: 0.5, buoyancy: 0.5, turbulence: 0.5, coverage: 0.6 }
    },
    confluence: {
      plumes: [
        { u: 0.22, v: 0.5, angle: -0.5, trunkN: 5, children: [2, 4], curl: 1.0, spin: [0.05, 0.12], tower: 0.8, maxL: 0.26, rMul: 0.6, lean: 0.5 },
        { u: 0.78, v: 0.5, angle: Math.PI + 0.5, trunkN: 5, children: [2, 4], curl: -1.0, spin: [0.05, 0.12], tower: 0.8, maxL: 0.26, rMul: 0.6, lean: -0.5 }
      ],
      crossBud: true,
      defaults: { speed: 1, cohesion: 0.6, breakup: 0.5, buoyancy: 0.6, turbulence: 0.35, coverage: 0.6 }
    }
  };
  var PRESET_NAMES = ['single', 'plumes', 'lavalamp', 'islands', 'confluence'];

  // ------------------------------------------------------------ CloudSim ---
  function CloudSim(opts) {
    opts = opts || {};
    this.aspect = opts.aspect > 0 ? opts.aspect : 0.75;
    // optional world offset of every plume root (a sprite can centre its cloud in the frame)
    this.shift = opts.shift || [0, 0];
    this.blobs = new Float32Array(MAX_BLOBS * 4);
    this.aux = new Float32Array(MAX_BLOBS * 4);
    this.blobCount = 0;
    this.settings = null;
    this.stats = { buds: 0, deaths: 0 };
    this.reseed(opts.seed !== undefined ? opts.seed : 1, opts.preset || 'plumes', opts.settings);
  }

  CloudSim.prototype.reseed = function (seed, preset, settings) {
    if (seed === undefined || seed === null) seed = this.seed !== undefined ? this.seed : 1;
    if (!preset) preset = this.preset || 'plumes';
    if (!PRESETS[preset]) preset = 'plumes';
    var presetChanged = preset !== this.preset;
    this.seed = seed | 0;
    this.preset = preset;
    this.def = PRESETS[preset];
    this.settings = normalizedSettings(settings, (!this.settings || presetChanged) ? this.def.defaults : this.settings);
    this.rng = mulberry32(this.seed ^ 0x5bd1e995);
    this.noiseSeed = (this.seed * 0x9E3779B1) | 0;
    this.time = 0;
    this.accum = 0;
    this.stats.buds = 0;
    this.stats.deaths = 0;
    this.branches = [];
    this.slots = [];
    for (var i = 0; i < MAX_BRANCHES; i++) this.slots.push(false);
    this._buildPlumes();
    this._seed();
    this._relayout(true);
  };

  function settingNumber(v, fallback, upper) {
    return typeof v === 'number' && isFinite(v) ? clamp(v, 0, upper) : fallback;
  }
  function normalizedSettings(value, fallback) {
    value = value || {}; fallback = fallback || {};
    var result = {}, names = ['speed', 'cohesion', 'breakup', 'buoyancy', 'turbulence', 'coverage'];
    for (var i = 0; i < names.length; i++) {
      var key = names[i], upper = key === 'speed' ? 6 : 1;
      var d = typeof fallback[key] === 'number' ? fallback[key] : (key === 'speed' ? 1 : .5);
      result[key] = settingNumber(value[key], d, upper);
    }
    return result;
  }
  function coverageScale(coverage) { return 1.75 * coverage; }

  // Layout updates preserve branch identities, the random stream and animation
  // time. Immediate previews are used while paused; playback eases the targets.
  CloudSim.prototype._relayout = function (snap) {
    for (var i = 0; i < this.branches.length; i++) {
      var b = this.branches[i];
      this._layout(b, this.settings.turbulence);
      if (snap) for (var k = 0; k < b.parcels.length; k++) {
        var p = b.parcels[k];
        p.x = p.tx; p.y = p.ty; p.r = p.tr; p.snap = false;
      }
    }
    this._write();
  };
  CloudSim.prototype.applySettings = function (settings, immediate) {
    var next = normalizedSettings(settings, this.settings || this.def.defaults);
    var previous = this.settings, changedShape = !previous;
    var keys = ['cohesion', 'breakup', 'buoyancy', 'turbulence', 'coverage'];
    for (var i = 0; i < keys.length; i++) if (!previous || next[keys[i]] !== previous[keys[i]]) changedShape = true;
    this.settings = next;
    if (changedShape && immediate) this._relayout(true);
    return changedShape;
  };

  CloudSim.prototype.resize = function (aspect) {
    if (aspect > 0) this.aspect = aspect;
    this._buildPlumes();
    this._relayout(true);
  };

  CloudSim.prototype._buildPlumes = function () {
    var defs = this.def.plumes, out = [];
    for (var i = 0; i < defs.length; i++) {
      var d = defs[i];
      out.push({ id: i, def: d, x: d.u + this.shift[0], y: d.v * this.aspect + this.shift[1], trunk: null });
    }
    if (this.plumes) for (i = 0; i < out.length && i < this.plumes.length; i++) out[i].trunk = this.plumes[i].trunk;
    this.plumes = out;
    for (i = 0; i < this.branches.length; i++) if (this.branches[i].plume) this.branches[i].plume = out[this.branches[i].plume.id];
  };

  // ------------------------------------------------------------ Building ---
  CloudSim.prototype._parcelCount = function () {
    var c = 0;
    for (var i = 0; i < this.branches.length; i++) c += this.branches[i].parcels.length;
    return c;
  };

  CloudSim.prototype._freeSlot = function () {
    for (var i = 0; i < MAX_BRANCHES; i++) if (!this.slots[i]) return i;
    return -1;
  };

  // Create a branch. parent=null => trunk (root at plume base).
  CloudSim.prototype._newBranch = function (plume, parent, n, angle, born, opt) {
    opt = opt || {};
    var slot = this._freeSlot();
    if (slot < 0) return null;
    if (this._parcelCount() + n + 1 > MAX_BLOBS) return null;
    var rng = this.rng, d = plume.def;
    var isTrunk = !parent;
    var hand = opt.hand || plume.hand || 1;
    var gen = opt.gen || 0;   // 0: seed billow; each successor behind it is one generation smaller / quicker
    var spin = isTrunk ? 0 : (d.spin[0] + rng() * (d.spin[1] - d.spin[0])) * hand * Math.pow(1.27, gen);   // a billow keeps turning one way about its root; successors a little quicker (sqrt phi per generation)
    var z = isTrunk ? 0.5 : clamp(parent.z + (0.12 + rng() * 0.18) * (rng() < 0.5 ? -1 : 1), 0, 1);
    var b = {
      id: slot, plume: plume, parent: parent, uAttach: parent ? (opt.uAttach !== undefined ? opt.uAttach : 0.15 + rng() * 0.7) : 0,
      z: z, angle: angle, angle0: angle, spin: spin, depth: parent ? parent.depth + 1 : 0,
      curl: (isTrunk ? 0.3 : d.curl) * (opt.hand || (rng() < 0.5 ? -1 : 1)) * (0.6 + rng() * 0.8),
      feedDir: isTrunk ? 1 : (rng() < 0.6 ? 1 : -1), // 1: creep toward root
      n: n, seed: rng() * 100, age: 0, link: born ? 0 : 1, grow: born ? 0 : 1, dying: false,
      rootX: 0, rootY: 0, pts: [], L: 0, parcels: [], children: 0, isTrunk: isTrunk,
      taper: isTrunk ? trunkTaper : childTaper,
      swayPhase: rng() * TWO_PI, spawned: false, gen: gen, sizeMul: Math.pow(1 / PHI, gen)
    };
    // n chain slots + 1 extra parcel so one can always be in a fade zone without opening a gap
    var du = 1 / Math.max(1, n - 1);
    for (var i = 0; i <= n; i++) {
      b.parcels.push({ x: 0, y: 0, r: 0, u: i * du - du, fade: 1, snap: false, tx: 0, ty: 0, tr: 0, seed: b.seed + i * 0.37, idx: -1 });
    }
    this.slots[slot] = true;
    this.branches.push(b);
    if (parent) parent.children++;
    this._layout(b, 0);
    for (i = 0; i < b.parcels.length; i++) { var p = b.parcels[i]; p.x = p.tx; p.y = p.ty; p.r = p.tr; }
    return b;
  };

  CloudSim.prototype._seed = function () {
    var rng = this.rng;
    for (var i = 0; i < this.plumes.length; i++) {
      var pl = this.plumes[i], d = pl.def;
      pl.trunk = this._newBranch(pl, null, d.trunkN, d.angle, false);
      var nChildren = d.children[0] + Math.round(rng() * (d.children[1] - d.children[0]));
      for (var k = 0; k < nChildren; k++) this._bud(pl, false);
    }
    // settle feed phases so chains are not perfectly even
    for (i = 0; i < this.branches.length; i++) {
      var b = this.branches[i];
      var du = 1 / Math.max(1, b.n - 1);
      for (k = 0; k < b.parcels.length; k++) b.parcels[k].u = clamp(b.parcels[k].u + (rng() - 0.5) * 0.06, -du, 1);
    }
  };

  // pick a parent branch for a new bud of plume pl
  CloudSim.prototype._bud = function (pl, born) {
    var rng = this.rng, cands = [];
    for (var i = 0; i < this.branches.length; i++) {
      var b = this.branches[i];
      if (b.dying) continue;
      var sameP = b.plume === pl;
      if (sameP && b.isTrunk && b.children < 6) cands.push(b);
      else if (!sameP && this.def.crossBud && b.isTrunk && b.children < 4) cands.push(b);
    }
    if (!cands.length) return null;
    // coherent formation: every plume curls one way (its handedness). A new billow either
    // (a) cascades off the tip of a mature billow, continuing its heading rotated the plume's way
    //     (a billow begets the next billow, like a cauliflower / scoop rolling over), or
    // (b) buds from the trunk at the widest gap between existing children, heading outward.
    if (!pl.hand) pl.hand = rng() < 0.5 ? -1 : 1;
    var mature = [], c;
    for (c = 0; c < cands.length; c++) if (!cands[c].isTrunk && cands[c].link >= 1 && cands[c].age > 4 && cands[c].plume === pl) mature.push(cands[c]);
    var parent = null, uAttach, angle, n = 3 + Math.round(rng() * 1.5);
    if (false) {
    } else {
      for (c = 0; c < cands.length; c++) if (cands[c].isTrunk && cands[c].plume === pl) { parent = cands[c]; break; }
      if (!parent) parent = cands[(rng() * cands.length) | 0];
      // widest gap along the parent between existing children (plus the ends)
      var us = [0.1, 0.9], k2;
      for (k2 = 0; k2 < this.branches.length; k2++) if (this.branches[k2].parent === parent) us.push(this.branches[k2].uAttach);
      us.sort(function (a, b2) { return a - b2; });
      var best = -1; uAttach = 0.5;
      for (k2 = 1; k2 < us.length; k2++) if (us[k2] - us[k2 - 1] > best) { best = us[k2] - us[k2 - 1]; uAttach = (us[k2] + us[k2 - 1]) / 2; }
      uAttach = clamp(uAttach + (rng() - 0.5) * 0.1, 0.1, 0.9);
      // outward normal of the parent at the attach point, on the side facing up
      this._tangentAt(parent, uAttach, _pt);
      var nx = -_pt[1], ny = _pt[0];
      if (ny > 0) { nx = -nx; ny = -ny; }   // y is top-down: up is negative y
      angle = Math.atan2(ny, nx) + (rng() - 0.5) * 0.6 + (pl.def.lean || 0) * 0.5;
    }
    var b = this._newBranch(pl, parent, n, angle, born, { uAttach: uAttach, hand: pl.hand });
    if (b && born) this.stats.buds++;
    return b;
  };

  // --------------------------------------------------------------- Field ---
  CloudSim.prototype._psi = function (x, y) {
    var s = this.noiseSeed, z = this.time * 0.18;
    return (vnoise3(x * 2.2 + 11.3, y * 2.2 + 5.1, z, s) - 0.5) * 0.65 +
           (vnoise3(x * 4.6 + 3.7, y * 4.6 + 9.2, z * 1.5, s ^ 0x1234567) - 0.5) * 0.35;
  };
  var _flow = [0, 0];
  CloudSim.prototype._curl = function (x, y, out) {
    var e = 0.006;
    out[0] = (this._psi(x, y + e) - this._psi(x, y - e)) / (2 * e);
    out[1] = -(this._psi(x + e, y) - this._psi(x - e, y)) / (2 * e);
  };

  // -------------------------------------------------------------- Layout ---
  // Compute root point, polyline and parcel target positions/radii for branch b.
  CloudSim.prototype._layout = function (b, turbulence) {
    var S = this.settings, cohesion = clamp(+S.cohesion || 0, 0, 1);
    var coverage = clamp(+S.coverage || 0, 0, 1);
    var breakup = clamp(+S.breakup || 0, 0, 1), buoyancy = clamp(+S.buoyancy || 0, 0, 1);
    var open = 1 - cohesion, still = !!b.plume.def.still;
    var parcelScale = (0.75 + 0.25 * b.plume.def.tower) * (b.plume.def.rMul || 1) * (b.sizeMul || 1);
    var rScale = coverageScale(coverage) * parcelScale;
    // At zero coverage the invisible branch skeleton remains well-defined,
    // so adding coverage restores the same topology rather than reseeding it.
    var layoutScale = coverageScale(Math.max(coverage, .2)) * parcelScale;
    var spacing = .18 + .40 * open;
    var t = this.time;

    if (b.parent) { this._pointAt(b.parent, b.uAttach, _pt); b.rootX = _pt[0]; b.rootY = _pt[1]; }
    else { b.rootX = b.plume.x; b.rootY = b.plume.y; }
    var attachR = b.parent ? b.parent.taper(b.uAttach) * layoutScale : 0;
    this._curl(b.rootX + b.seed * .017, b.rootY + b.swayPhase * .09, _flow);
    // A bounded curl displacement moves whole neighboring billows coherently.
    // It is independent of the surface-noise strength in the renderer.
    var flowLength = Math.sqrt(_flow[0] * _flow[0] + _flow[1] * _flow[1]);
    var fx = _flow[0] / (1 + flowLength), fy = _flow[1] / (1 + flowLength);
    var turb = still ? 0 : turbulence * turbulence;
    var sway = (fx * .9 + fy * .6) * turb * 1.4;
    var heading = b.angle + sway * (b.isTrunk ? .4 : 1);
    var drift = .075 * turb * (.6 + .4 * open) * (b.isTrunk ? .3 : 1);
    b.rootX += fx * drift; b.rootY += fy * drift;
    var ge = b.grow * b.grow * (3 - 2 * b.grow);

    // Cohesion now changes the attachment and reach directly. Its old spacing
    // adjustment was almost entirely erased by the fixed child-length clamp.
    var childReach = .15 + .875 * open;
    if (b.parent) {
      var arc = Math.abs(b.angle - b.angle0);
      var phase = clamp(arc / DIE_ARC, 0, 1);
      var peel = breakup * breakup * (.35 + .65 * Math.pow(Math.sin(Math.PI * phase), 2));
      peel *= 1 - .75 * cohesion;
      var rootReach = .25 + 1.125 * open + 1.5 * peel;
      childReach *= 1 + .6 * peel;
      // Buoyancy turns child growth upward around its anchored parent and
      // increases its vertical reach; it does not translate the entire cloud.
      var upDelta = Math.atan2(Math.sin(-Math.PI / 2 - heading), Math.cos(-Math.PI / 2 - heading));
      heading += upDelta * .6 * buoyancy * buoyancy;
      b.rootX += Math.cos(heading) * attachR * (rootReach * ge - .3 * (1 - ge));
      b.rootY += Math.sin(heading) * attachR * (rootReach * ge - .3 * (1 - ge));
      b.rootY -= (buoyancy - .5) * 1.4 * attachR * ge;
    }

    var n = b.n, L = 0, i;
    for (i = 0; i < n - 1; i++) L += spacing * (b.taper(i / (n - 1)) + b.taper((i + 1) / (n - 1))) * layoutScale;
    var reachScale = .6 + open;
    L = Math.min(L, (b.plume.def.maxL || MAX_L) * reachScale, MAX_L * reachScale);
    if (b.parent) L = Math.min(L, childReach * attachR) * (.15 + .85 * ge);
    b.L = L;

    var SEG = 8, ds = L / SEG, x = b.rootX, y = b.rootY, th = heading;
    var pts = b.pts; pts.length = 0; pts.push(x, y);
    for (i = 0; i < SEG; i++) {
      var s = (i + .5) / SEG;
      th += (b.curl + Math.sin(t * .65 + b.swayPhase + s * 4.5) * 5.0 * turb) * ds;
      if (!b.isTrunk) {
        var dth = Math.atan2(Math.sin(-Math.PI / 2 - th), Math.cos(-Math.PI / 2 - th));
        th += dth * (0.1 + 2.4 * buoyancy * buoyancy) * ds * b.plume.def.tower;
      }
      x += Math.cos(th) * ds;
      y += Math.sin(th) * ds * (b.parent ? .55 + .9 * buoyancy : 1);
      if (x < MARGIN) x += (MARGIN - x) * .5;
      if (x > 1 - MARGIN) x -= (x - (1 - MARGIN)) * .5;
      if (y < MARGIN) y += (MARGIN - y) * .5;
      if (y > this.aspect - MARGIN) y -= (y - (this.aspect - MARGIN)) * .5;
      pts.push(x, y);
    }
    for (i = 0; i < b.parcels.length; i++) {
      var p = b.parcels[i]; this._pointAt(b, p.u, _pt);
      p.tx = clamp(_pt[0], MARGIN, 1 - MARGIN);
      p.ty = clamp(_pt[1], MARGIN, Math.max(MARGIN, this.aspect - MARGIN));
      p.tr = b.taper(p.u) * rScale * p.fade;
    }
  };

  // depth along a branch: ramps from the parent's depth at the attach point (root) to the
  // branch's own z at the tip, so junctions do not step in height. Trunks are constant.
  CloudSim.prototype._zAt = function (b, u) {
    if (!b.parent) return b.z;
    var z0 = this._zAt(b.parent, b.uAttach);
    return z0 + (b.z - z0) * clamp(u, 0, 1);
  };

  function childTaper(u) { return R_ROOT + (R_TIP - R_ROOT) * u; }
  function trunkTaper(u) { return TRUNK_ROOT + (TRUNK_TIP - TRUNK_ROOT) * u; }

  var _pt = [0, 0];
  CloudSim.prototype._tangentAt = function (b, u, out) {
    var ax, ay;
    this._pointAt(b, Math.max(0, u - 0.05), out); ax = out[0]; ay = out[1];
    this._pointAt(b, Math.min(1, u + 0.05), out);
    out[0] -= ax; out[1] -= ay;
    var l = Math.sqrt(out[0] * out[0] + out[1] * out[1]) || 1; out[0] /= l; out[1] /= l;
    if (!b.pts.length) { out[0] = Math.cos(b.angle); out[1] = Math.sin(b.angle); }
  };
  CloudSim.prototype._pointAt = function (b, u, out) {
    var pts = b.pts, segs = (pts.length >> 1) - 1;
    if (segs < 1) { out[0] = b.rootX; out[1] = b.rootY; return; }
    var f = clamp(u, -0.6, 1.0) * segs, i = clamp(Math.floor(f), 0, segs - 1), k = f - i;
    out[0] = pts[i * 2] + (pts[i * 2 + 2] - pts[i * 2]) * k;
    out[1] = pts[i * 2 + 1] + (pts[i * 2 + 3] - pts[i * 2 + 1]) * k;
  };

  // ---------------------------------------------------------------- Step ---
  CloudSim.prototype.step = function (dt) {
    if (!(dt > 0) || !isFinite(dt)) return;
    var speed = clamp(+this.settings.speed || 0, 0, 6);
    if (speed <= 0) return;
    // Scale once, BEFORE subdivision, so high Speed never creates oversized
    // integration steps. this.time is also the renderer's animation clock.
    var scaled = Math.min(dt, .25) * speed;
    var n = Math.max(1, Math.ceil(scaled / SUBSTEP - 1e-9)), h = scaled / n;
    for (var i = 0; i < n; i++) this._substep(h);
    this._write();
  };

  CloudSim.prototype._substep = function (h) {
    var S = this.settings, breakup = clamp(+S.breakup || 0, 0, 1);
    var turbulence = clamp(+S.turbulence || 0, 0, 1);
    var rng = this.rng, B = this.branches, i, k, b, p;
    var cycleRate = 4 * breakup * breakup;
    // a lobe rises out of / sinks into the body over 8..32 s: clouds move slowly, a fast fade pops
    var transitionSeconds = 8 + 24 * (1 - breakup);
    var ease = 1 - Math.exp(-h / .25);

    for (i = 0; i < B.length; i++) {
      b = B[i]; b.age += h;
      if (!b.isTrunk) b.angle += b.spin * h * cycleRate * (1 - .5 * Math.min(1, Math.abs(b.angle - b.angle0) / DIE_ARC));
      if (b.dying) { b.link = Math.max(0, b.link - h / transitionSeconds); b.grow = b.link; }
      else if (b.link < 1) { b.link = Math.min(1, b.link + h / transitionSeconds); b.grow = b.link; }
      // Parcel phases stay fixed. The old disabled feeder still wrapped seeded
      // out-of-range phases once, creating an unrelated jump on the first frame.
      this._layout(b, turbulence);
      for (k = 0; k < b.parcels.length; k++) {
        p = b.parcels[k];
        p.x += (p.tx - p.x) * ease; p.y += (p.ty - p.y) * ease;
        p.r += (p.tr - p.r) * ease;
      }
    }

    // Breakup controls rolling departure and coherent replacement. Zero keeps
    // the primary population intact; it does not stop surface Roll or Flow.
    if (breakup > 0) for (i = 0; i < this.plumes.length; i++) {
      var pl = this.plumes[i], d = pl.def, count = 0, movers = [];
      if (d.still) continue;
      for (k = 0; k < B.length; k++) {
        b = B[k];
        if (b.plume !== pl || b.isTrunk || b.dying) continue;
        count++; movers.push(b);
      }
      for (k = 0; k < movers.length; k++) {
        b = movers[k]; var arc = Math.abs(b.angle - b.angle0);
        if (!b.spawned && arc >= SPAWN_ARC) {
          if (b.gen >= 2) b.spawned = true;
          else if (this._freeSlot() >= 0 && this._parcelCount() + b.n + 1 <= MAX_BLOBS) {
            var child = this._newBranch(pl, b.parent, b.n, b.angle0 + (rng() - .5) * .2, true,
              {uAttach: b.uAttach, hand: pl.hand, gen: b.gen + 1});
            if (child) { b.spawned = true; this.stats.buds++; count++; }
          }
        }
        if (arc >= DIE_ARC) { b.dying = true; this.stats.deaths++; count--; }
      }
      var desired = Math.min(6, d.children[0] + Math.round(2 * breakup));
      if (count < desired && this._freeSlot() >= 0 && this._parcelCount() + 4 <= MAX_BLOBS && rng() < (.4 + 1.8 * breakup * breakup) * h) this._bud(pl, true);
    }
    for (i = 0; i < B.length; i++) {
      b = B[i];
      if (b.parent && b.parent.dying && !b.dying) { b.dying = true; this.stats.deaths++; }
    }
    for (i = B.length - 1; i >= 0; i--) {
      b = B[i];
      if (b.dying && b.link <= 0 && b.children === 0) {
        this.slots[b.id] = false; if (b.parent) b.parent.children--;
        B.splice(i, 1);
      }
    }
    this.time += h;
  };

  // --------------------------------------------------------------- Output ---
  CloudSim.prototype._write = function () {
    var B = this.branches, Bo = this.blobs, A = this.aux, n = 0, i, k, b, p;
    // assign output indices
    for (i = 0; i < B.length; i++) {
      b = B[i];
      for (k = 0; k < b.parcels.length; k++) {
        p = b.parcels[k];
        p.idx = (p.r >= R_OUT_MIN && n < MAX_BLOBS) ? n++ : -1;
      }
    }
    for (i = 0; i < B.length; i++) {
      b = B[i];
      // root parcel: visible parcel with the smallest u
      var root = null;
      for (k = 0; k < b.parcels.length; k++) {
        p = b.parcels[k];
        if (p.idx < 0) continue;
        if (!root || p.u < root.u) root = p;
      }
      // parent-branch parcel nearest to the attach point
      var pb = -1;
      if (b.parent) {
        var best = 1e9;
        for (k = 0; k < b.parent.parcels.length; k++) {
          p = b.parent.parcels[k];
          if (p.idx < 0) continue;
          var dd = Math.abs(p.u - b.uAttach) + (1 - (p.fade === undefined ? 1 : p.fade));   // a fading parcel is a poor anchor
          if (dd < best) { best = dd; pb = p.idx; }
        }
      }
      for (k = 0; k < b.parcels.length; k++) {
        p = b.parcels[k];
        if (p.idx < 0) continue;
        var o = p.idx * 4;
        Bo[o] = p.x; Bo[o + 1] = p.y; Bo[o + 2] = Math.min(p.r, 0.4); Bo[o + 3] = p.seed;
        A[o] = b.id; A[o + 1] = this._zAt(b, p.u);
        A[o + 2] = (p === root) ? pb : -1;
        A[o + 3] = b.link * b.link * (3 - 2 * b.link);   // eased: a lobe starts rising slowly and settles slowly
      }
    }
    for (i = n * 4; i < MAX_BLOBS * 4; i++) { Bo[i] = 0; A[i] = 0; }
    this.blobCount = n;
  };

  // static reference radii for the renderer (largest trunk root / typical parcel); depends only on
  // the preset and the coverage setting, never on the live parcel set
  Object.defineProperty(CloudSim.prototype, 'refRadius', { get: function () {
    var coverage = clamp(+this.settings.coverage || 0, 0, 1), m = 0, i, d;
    for (i = 0; i < this.plumes.length; i++) { d = this.plumes[i].def; m = Math.max(m, (0.75 + 0.25 * d.tower) * (d.rMul || 1)); }
    return Math.max(0.01, TRUNK_ROOT * coverageScale(coverage) * (m || 1));
  } });
  // Static bound for every emitted parcel, including an entering parcel
  // at u=-1, maximum Coverage, and the lag after Coverage is reduced. It never follows live radii.
  Object.defineProperty(CloudSim.prototype, 'maxParcelRadius', { get: function () {
    var m = 0, i, d;
    for (i = 0; i < this.plumes.length; i++) {
      d = this.plumes[i].def;
      m = Math.max(m, (0.75 + 0.25 * d.tower) * (d.rMul || 1));
    }
    var enteringRadius = Math.max(2 * TRUNK_ROOT - TRUNK_TIP, 2 * R_ROOT - R_TIP);
    return Math.min(0.4, enteringRadius * 1.75 * (m || 1));
  } });
  Object.defineProperty(CloudSim.prototype, 'meanRadius', { get: function () { return this.refRadius * 0.7; } });

  CloudSim.PRESETS = PRESET_NAMES;
  CloudSim.MAX_BLOBS = MAX_BLOBS;
  CloudSim.MAX_BRANCHES = MAX_BRANCHES;
  CloudSim.PRESET_DEFAULTS = {};
  for (var pi = 0; pi < PRESET_NAMES.length; pi++) {
    CloudSim.PRESET_DEFAULTS[PRESET_NAMES[pi]] = copy(PRESETS[PRESET_NAMES[pi]].defaults);
  }

  window.CloudSim = CloudSim;
})();

