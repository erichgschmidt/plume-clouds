/* CloudRenderer — WebGL2 cloud renderer (field + optional cavity AO + shade).
 *
 * Contract: see CONTRACT.md. Classic script, assigns window.CloudRenderer.
 *
 * World space: x in [0,1] left->right, y in [0,aspect] top->bottom, aspect = canvas.height/canvas.width.
 *
 * Sun convention (look.sun, degrees, measured in screen space, counter-clockwise):
 *   0   = light comes FROM the right
 *   90  = light comes FROM the top
 *   180 = light comes FROM the left
 *   270 = light comes FROM the bottom
 *   120 = upper-left (the reference look).
 * look.elevation (degrees): angle of the sun above the picture plane, toward the viewer.
 *   Higher = flatter lighting (less difference between slopes), lower = raking light
 *   with long self-shadows.
 *
 * Billow texture: the surface lumps come from a 256x256 RGBA16F "billow tile" baked once at
 * construction (port of the original tool's intersecting sphere-cap lobe fields):
 *   R = 3-octave periodic value noise (silhouette raggedness only)
 *   G = primary lobe field  (36 scattered root caps + 3 mid + 5 micro sub-lobes each, 3 layers soft-maxed)
 *   B = secondary lobe field (different seed, scaled .83, offset)
 * The tile is sampled in per-parcel material coordinates so billows ride with each blob.
 * For engine ports this tile is a static texture asset (deterministic; export once).
 */
(function () {
  'use strict';

  var MAX_BLOBS = 64;
  var TILE = 256;
  var TILE_WORLD = 1.25;        // world units covered by one tile repeat (original: 600px of a 960px-wide world)
  // float32 -> float16 bits (tile is stored as RGBA16F so lobe heights do not terrace)
  var _f32 = new Float32Array(1), _u32 = new Uint32Array(_f32.buffer);
  function f16(v) {
    _f32[0] = v; var x = _u32[0];
    var sign = (x >>> 16) & 0x8000, exp = ((x >>> 23) & 0xff) - 127 + 15, mant = x & 0x7fffff;
    if (exp <= 0) { if (exp < -10) return sign; mant = (mant | 0x800000) >> (1 - exp); return sign | ((mant + 0x1000) >> 13); }
    if (exp >= 31) return sign | 0x7c00;
    return sign | ((exp << 10) + ((mant + 0x1000) >> 13));
  }

  // ---------- billow tile bake (CPU, once) ----------
  function hash2(x, y, seed) {
    var v = Math.sin(x * 127.1 + y * 311.7 + seed) * 43758.5453;
    return v - Math.floor(v);
  }
  function pnoise(x, y, seed, period) {
    var ix = Math.floor(x), iy = Math.floor(y), u = x - ix, v = y - iy;
    u = u * u * (3 - 2 * u); v = v * v * (3 - 2 * v);
    var wrap = function (k) { return ((k % period) + period) % period; };
    var a = hash2(wrap(ix), wrap(iy), seed), b = hash2(wrap(ix + 1), wrap(iy), seed);
    var c = hash2(wrap(ix), wrap(iy + 1), seed), d = hash2(wrap(ix + 1), wrap(iy + 1), seed);
    return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
  }
  function scatter(seed) {
    var state = seed >>> 0;
    var random = function () {
      state = (state + 0x6d2b79f5) >>> 0; var t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    var roots = [], lobes = [], i, c, j;
    for (i = 0; i < 36; i++) {
      var best = null, score = -1;
      for (c = 0; c < 9; c++) {
        var p = { x: -0.15 + random() * 1.3, y: -0.15 + random() * 1.3 }, dist = Infinity;
        for (j = 0; j < roots.length; j++) {
          var dx = p.x - roots[j].x, dy = p.y - roots[j].y;
          dist = Math.min(dist, dx * dx + dy * dy);
        }
        if (dist > score) { score = dist; best = p; }
      }
      var radius = 0.075 + random() * 0.085, aspect = 0.92 + random() * 0.16;
      var root = { x: best.x, y: best.y, rx: radius * aspect, ry: radius / aspect, angle: random() * Math.PI, height: 0.9 * radius, layer: 0 };
      roots.push(root); lobes.push(root);
      for (j = 0; j < 3; j++) {
        var a1 = random() * Math.PI * 2, d1 = radius * (0.4 + random() * 0.8), r1 = 0.05 + random() * 0.055, as1 = 0.92 + random() * 0.16;
        lobes.push({ x: root.x + Math.cos(a1) * d1, y: root.y + Math.sin(a1) * d1, rx: r1 * as1, ry: r1 / as1, angle: random() * Math.PI, height: 0.9 * r1 + 0.06, layer: 1 });
      }
      for (j = 0; j < 5; j++) {
        var a2 = random() * Math.PI * 2, d2 = radius * (0.25 + random()), r2 = 0.028 + random() * 0.028, as2 = 0.92 + random() * 0.16;
        lobes.push({ x: root.x + Math.cos(a2) * d2, y: root.y + Math.sin(a2) * d2, rx: r2 * as2, ry: r2 / as2, angle: random() * Math.PI, height: 0.9 * r2 + 0.095, layer: 2 });
      }
    }
    return lobes;
  }
  function billowTile(lobes) {
    var n = TILE, layers = [new Float32Array(n * n), new Float32Array(n * n), new Float32Array(n * n)];
    for (var L = 0; L < lobes.length; L++) {
      var lobe = lobes[L];
      var ux = lobe.x - Math.floor(lobe.x), uy = lobe.y - Math.floor(lobe.y);
      var rx = lobe.rx * n, ry = lobe.ry * n, r = Math.max(rx, ry), c = Math.cos(lobe.angle), s = Math.sin(lobe.angle), layer = layers[lobe.layer];
      for (var oy = -1; oy <= 1; oy++) for (var ox = -1; ox <= 1; ox++) {
        var cx = (ux + ox) * n, cy = (uy + oy) * n;
        var left = Math.max(0, Math.floor(cx - r)), right = Math.min(n - 1, Math.ceil(cx + r));
        var top = Math.max(0, Math.floor(cy - r)), bottom = Math.min(n - 1, Math.ceil(cy + r));
        if (left > right || top > bottom) continue;
        for (var y = top; y <= bottom; y++) for (var x = left; x <= right; x++) {
          var dx = x - cx, dy = y - cy, u = (dx * c + dy * s) / rx, v = (-dx * s + dy * c) / ry, q = 1 - u * u - v * v;
          if (q > 0) { var idx = y * n + x, h = lobe.height * Math.sqrt(q); if (h > layer[idx]) layer[idx] = h; }
        }
      }
    }
    var out = new Float32Array(n * n), k = 0.009;
    for (var i = 0; i < out.length; i++) {
      var hh = 0;
      for (var l = 0; l < 3; l++) { var b = layers[l][i], t = Math.max(k - Math.abs(hh - b), 0) / k; hh = Math.max(hh, b) + t * t * k * 0.25; }
      out[i] = hh;
    }
    return out;
  }
  function makeTile() {
    var n = TILE, primary = billowTile(scatter(17));
    var desc = scatter(137).map(function (l) {
      return { x: (l.x - 0.5) * 0.83 + 0.5 + 0.173, y: (l.y - 0.5) * 0.83 + 0.5 - 0.117, rx: l.rx * 0.83, ry: l.ry * 0.83, angle: l.angle, height: l.height * 0.83, layer: l.layer };
    });
    var secondary = billowTile(desc), out = new Uint16Array(n * n * 4), reliefTotal = 0;
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var i = y * n + x, k = i * 4, u = x / n, v = y / n;
      var nz = 0.3 + 0.7 * pnoise(u * 11, v * 11, 17, 11) + 0.16 * pnoise(u * 27, v * 27, 17, 27) + 0.06 * pnoise(u * 59, v * 59, 17, 59);
      out[k] = f16(nz);
      out[k + 1] = f16(primary[i]);
      out[k + 2] = f16(secondary[i]);
      out[k + 3] = f16(1);
      reliefTotal += 1 - (1 - primary[i]) * (1 - 0.55 * secondary[i]);
    }
    // Match the relief's neutral level to the actual generated tile, rather
    // than assuming its two small height channels are centered around 0.55.
    out.reliefCenter = reliefTotal / (n * n);
    return out;
  }


  // Periodic soft Voronoi texture, baked once. R is a subtractive pocket in [0,1];
  // GBA is the derivative of that SAME pocket with respect to cell coordinates.
  // One filtered 3D lookup therefore supplies both the new shape and its normal.
  // It is sampled in a rotating billow-local slice, never in screen coordinates.
  var VORONOI_SIZE = 64, VORONOI_PERIOD = 4;
  var _voronoiVolume = null;
  function makeVoronoiVolume() {
    if (_voronoiVolume) return _voronoiVolume;
    var n = VORONOI_SIZE, period = VORONOI_PERIOD;
    var sites = new Float32Array(period * period * period * 3);
    var x, y, z, i, j;
    for (z = 0; z < period; z++) for (y = 0; y < period; y++) for (x = 0; x < period; x++) {
      i = (x + period * (y + period * z)) * 3;
      sites[i] = 0.22 + 0.56 * hash2(x + z * 13, y, 173.1);
      sites[i + 1] = 0.22 + 0.56 * hash2(y + x * 17, z, 317.7);
      sites[i + 2] = 0.22 + 0.56 * hash2(z + y * 19, x, 571.3);
    }
    var out = new Uint16Array(n * n * n * 4), sharpness = 10.0;
    for (z = 0; z < n; z++) for (y = 0; y < n; y++) for (x = 0; x < n; x++) {
      var px = (x + 0.5) * period / n, py = (y + 0.5) * period / n, pz = (z + 0.5) * period / n;
      var ix = Math.floor(px), iy = Math.floor(py), iz = Math.floor(pz);
      var sum = 0, gx = 0, gy = 0, gz = 0;
      for (var oz = -1; oz <= 1; oz++) for (var oy = -1; oy <= 1; oy++) for (var ox = -1; ox <= 1; ox++) {
        var cx = ix + ox, cy = iy + oy, cz = iz + oz;
        var wx = (cx % period + period) % period, wy = (cy % period + period) % period, wz = (cz % period + period) % period;
        j = (wx + period * (wy + period * wz)) * 3;
        var dx = px - cx - sites[j], dy = py - cy - sites[j + 1], dz = pz - cz - sites[j + 2];
        var e = Math.exp(-sharpness * (dx * dx + dy * dy + dz * dz));
        sum += e; gx += 2 * dx * e; gy += 2 * dy * e; gz += 2 * dz * e;
      }
      // Soft nearest-cell distance avoids a sharp polygonal crease at Voronoi ties.
      var d = -Math.log(Math.max(sum, 1e-20)) / sharpness;
      var lo = 0.015, span = 0.60;
      var u = Math.max(0, Math.min(1, (d - lo) / span));
      var pocket = 1 - u * u * (3 - 2 * u);
      var g = (d > lo && d < lo + span) ? -6 * u * (1 - u) / (span * sum) : 0;
      i = (x + n * (y + n * z)) * 4;
      out[i] = f16(pocket);
      out[i + 1] = f16(gx * g);
      out[i + 2] = f16(gy * g);
      out[i + 3] = f16(gz * g);
    }
    _voronoiVolume = out;
    return out;
  }

// Blender-inspired soft Clouds: three additive, periodic gradient-noise octaves.
// Dependencies supplied by the renderer: f16, hash2, VORONOI_SIZE, VORONOI_PERIOD.
// R stores the carve field; GBA stores its derivative in base-cell coordinates.
// The same affine contrast transform is applied to the value and its derivative.
var _cloudsVolume = null;
var _cloudsVolumeStats = null;

function makeCloudsVolume() {
  if (_cloudsVolume) return _cloudsVolume;

  var n = VORONOI_SIZE, period = VORONOI_PERIOD;
  if (n < 2 || n > 64 || n !== Math.floor(n) || period < 1 || period !== Math.floor(period)) {
    throw new Error('Clouds volume requires an integer size from 2 to 64 and an integer period.');
  }
  var count = n * n * n, inverseRoot3 = 1 / Math.sqrt(3);
  var directions = [
    1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0,
    1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1,
    0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1
  ];
  var amplitudes = [1, 0.30, 0.09], amplitudeSum = 1.39;
  var inverseRoot2 = 1 / Math.sqrt(2), octaves = [];
  var x, y, z, oct, i;

  // Each lattice is shared by the whole bake: no hashing inside a noise sample.
  for (oct = 0; oct < 3; oct++) {
    var frequency = 1 << oct, latticePeriod = period * frequency;
    var lattice = new Float32Array(latticePeriod * latticePeriod * latticePeriod * 3);
    for (z = 0; z < latticePeriod; z++) {
      for (y = 0; y < latticePeriod; y++) {
        for (x = 0; x < latticePeriod; x++) {
          var directionIndex = Math.floor(hash2(x + z * 13, y, 173.1 + oct * 23.7) * 12) * 3;
          i = (x + latticePeriod * (y + latticePeriod * z)) * 3;
          lattice[i] = directions[directionIndex] * inverseRoot2;
          lattice[i + 1] = directions[directionIndex + 1] * inverseRoot2;
          lattice[i + 2] = directions[directionIndex + 2] * inverseRoot2;
        }
      }
    }
    octaves.push({
      frequency: frequency,
      amplitude: amplitudes[oct],
      period: latticePeriod,
      gradients: lattice,
      ox: 0.137 + oct * 0.311,
      oy: 0.719 + oct * 0.217,
      oz: 0.371 + oct * 0.163
    });
  }

  var raw = new Float32Array(count * 4);
  var rawMin = Infinity, rawMax = -Infinity;
  var baseStep = period / n;
  var normalization = inverseRoot3 / amplitudeSum;

  for (z = 0; z < n; z++) {
    for (y = 0; y < n; y++) {
      for (x = 0; x < n; x++) {
        var px = (x + 0.5) * baseStep;
        var py = (y + 0.5) * baseStep;
        var pz = (z + 0.5) * baseStep;
        var value = 0, gradX = 0, gradY = 0, gradZ = 0;

        for (oct = 0; oct < 3; oct++) {
          var layer = octaves[oct], freq = layer.frequency;
          var sx = px * freq + layer.ox;
          var sy = py * freq + layer.oy;
          var sz = pz * freq + layer.oz;
          var ix = Math.floor(sx), iy = Math.floor(sy), iz = Math.floor(sz);
          var tx = sx - ix, ty = sy - iy, tz = sz - iz;
          var fx = tx * tx * tx * (tx * (tx * 6 - 15) + 10);
          var fy = ty * ty * ty * (ty * (ty * 6 - 15) + 10);
          var fz = tz * tz * tz * (tz * (tz * 6 - 15) + 10);
          var dfx = 30 * tx * tx * (tx - 1) * (tx - 1);
          var dfy = 30 * ty * ty * (ty - 1) * (ty - 1);
          var dfz = 30 * tz * tz * (tz - 1) * (tz - 1);
          var lp = layer.period, gradients = layer.gradients;
          var v = 0, vx = 0, vy = 0, vz = 0;

          for (var cz = 0; cz < 2; cz++) {
            var lz = ((iz + cz) % lp + lp) % lp;
            var wz = cz ? fz : 1 - fz, dwz = cz ? dfz : -dfz;
            for (var cy = 0; cy < 2; cy++) {
              var ly = ((iy + cy) % lp + lp) % lp;
              var wy = cy ? fy : 1 - fy, dwy = cy ? dfy : -dfy;
              for (var cx = 0; cx < 2; cx++) {
                var lx = ((ix + cx) % lp + lp) % lp;
                var wx = cx ? fx : 1 - fx, dwx = cx ? dfx : -dfx;
                var gi = (lx + lp * (ly + lp * lz)) * 3;
                var gx = gradients[gi], gy = gradients[gi + 1], gz = gradients[gi + 2];
                var dot = gx * (tx - cx) + gy * (ty - cy) + gz * (tz - cz);
                var weight = wx * wy * wz;
                v += weight * dot;
                vx += weight * gx + dot * dwx * wy * wz;
                vy += weight * gy + dot * wx * dwy * wz;
                vz += weight * gz + dot * wx * wy * dwz;
              }
            }
          }
          value += layer.amplitude * v;
          // Chain rule: a higher octave's derivative includes its frequency.
          var derivativeWeight = layer.amplitude * freq;
          gradX += derivativeWeight * vx;
          gradY += derivativeWeight * vy;
          gradZ += derivativeWeight * vz;
        }

        i = (x + n * (y + n * z)) * 4;
        raw[i] = 0.5 + value * normalization;
        raw[i + 1] = gradX * normalization;
        raw[i + 2] = gradY * normalization;
        raw[i + 3] = gradZ * normalization;
        rawMin = Math.min(rawMin, raw[i]);
        rawMax = Math.max(rawMax, raw[i]);
      }
    }
  }

  var gain = Math.min(2, 0.98 / Math.max(rawMax - rawMin, 1e-12));
  var center = (rawMin + rawMax) * 0.5;
  var out = new Uint16Array(count * 4);
  var scalar = new Float32Array(count);
  var storedMin = Infinity, storedMax = -Infinity, maxGradient = 0;
  for (i = 0; i < count; i++) {
    var k = i * 4;
    var c = 0.5 + gain * (raw[k] - center);
    var g0 = raw[k + 1] * gain, g1 = raw[k + 2] * gain, g2 = raw[k + 3] * gain;
    out[k] = f16(c);
    out[k + 1] = f16(g0);
    out[k + 2] = f16(g1);
    out[k + 3] = f16(g2);
    // c is in [.01,.99] before quantization, hence a positive normal half float.
    var bits = out[k];
    scalar[i] = (1024 + (bits & 1023)) * Math.pow(2, ((bits >>> 10) & 31) - 25);
    storedMin = Math.min(storedMin, scalar[i]);
    storedMax = Math.max(storedMax, scalar[i]);
    maxGradient = Math.max(maxGradient, Math.sqrt(g0 * g0 + g1 * g1 + g2 * g2));
  }

  // Bound the derivative of the actual half-float scalar texture, not merely its
  // separately stored gradient. Each trilinear partial is a convex combination
  // of four parallel edge differences. Per-cell component maxima therefore
  // give a conservative bound everywhere inside that cell, including wrapping.
  var derivativeScale = n / period, maxBoundSquared = 0;
  for (z = 0; z < n; z++) {
    var z1 = (z + 1) % n;
    for (y = 0; y < n; y++) {
      var y1 = (y + 1) % n;
      for (x = 0; x < n; x++) {
        var x1 = (x + 1) % n;
        var c000 = scalar[x + n * (y + n * z)];
        var c100 = scalar[x1 + n * (y + n * z)];
        var c010 = scalar[x + n * (y1 + n * z)];
        var c110 = scalar[x1 + n * (y1 + n * z)];
        var c001 = scalar[x + n * (y + n * z1)];
        var c101 = scalar[x1 + n * (y + n * z1)];
        var c011 = scalar[x + n * (y1 + n * z1)];
        var c111 = scalar[x1 + n * (y1 + n * z1)];
        var bx = Math.max(Math.abs(c100 - c000), Math.abs(c110 - c010),
                          Math.abs(c101 - c001), Math.abs(c111 - c011));
        var by = Math.max(Math.abs(c010 - c000), Math.abs(c110 - c100),
                          Math.abs(c011 - c001), Math.abs(c111 - c101));
        var bz = Math.max(Math.abs(c001 - c000), Math.abs(c101 - c100),
                          Math.abs(c011 - c010), Math.abs(c111 - c110));
        maxBoundSquared = Math.max(maxBoundSquared, bx * bx + by * by + bz * bz);
      }
    }
  }
  var trilinearGradientBound = Math.sqrt(maxBoundSquared) * derivativeScale;
  _cloudsVolumeStats = {
    size: n,
    period: period,
    octaveFrequencies: [1, 2, 4],
    octaveAmplitudes: amplitudes,
    rawMin: rawMin,
    rawMax: rawMax,
    contrastGain: gain,
    contrastCenter: center,
    storedMin: storedMin,
    storedMax: storedMax,
    maxAnalyticGradientAtTexels: maxGradient,
    trilinearGradientBound: trilinearGradientBound
  };
  _cloudsVolume = out;
  return _cloudsVolume;
}


  // ---------- shaders ----------
  // Full-screen triangle generated from gl_VertexID (no buffers needed).
  var VS = [
    '#version 300 es',
    'out vec2 vUv;',
    'void main(){',
    '  vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0, (gl_VertexID == 2) ? 3.0 : -1.0);',
    '  vUv = p * 0.5 + 0.5;',
    '  gl_Position = vec4(p, 0.0, 1.0);',
    '}'
  ].join('\n');


  // ---------- Pass 1: field ----------
  var FIELD_FS = `#version 300 es
precision highp float;
in vec2 vUv;
layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragNormal;
uniform vec4 uBlobs[64];
uniform vec4 uAux[64];
uniform int uCount;
uniform sampler2D uTile;
uniform highp sampler3D uVoronoi;
uniform highp sampler3D uPrimaryNoise;
uniform highp sampler3D uErosionNoise;
uniform float uPrimaryScale;
uniform float uPrimaryInvertNoise;
uniform float uInflation;
uniform float uEmbed;
uniform float uCarve;
uniform float uInvertNoise;
uniform float uPrimaryCarve;
uniform float uCellScale;
uniform float uCellFlow;
uniform float uFieldStep;
uniform float uErosionFlow;   // slow clock on the erosion noise: fringes dissolve instead of staying fixed per seed
uniform highp sampler2D uCaps;   // per frame, CPU: columns 0..19 = cap (cen.xyz, rad after ownership; 0 = none), column 20 = (axis.x, axis.y, angle, 0)
uniform float uAspect;
uniform float uTime;
uniform float uBillow;
uniform float uRoll;
uniform float uErosion;
uniform float uRelief;
uniform float uReliefCenter;
uniform float uReference;
uniform float uSoftness;
uniform float uBlend;
uniform float uHeightUnit;
uniform float uPacked;
uniform float uDepth;
const float TILE_WORLD = 1.2500;
const int NB = 16;
float smin(float a, float b, float k){
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}
float sdCapsule(vec2 p, vec2 a, vec2 b, float r){
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
vec2 seedOffset(float s){ return vec2(fract(s * 7.31 + 0.17), fract(s * 3.77 + 0.59)); }
float hash(float x){ return fract(sin(x * 12.9898) * 43758.5453); }
vec3 rotAxis(vec3 p, vec3 a, float t){ float c = cos(t), s = sin(t); return p * c + cross(a, p) * s + a * dot(a, p) * (1.0 - c); }

// Radius, d(radius)/dx, d(radius)/dy in parcel-local coordinates.
// Both value and derivative come from the same selected, filtered noise volume.
vec3 radiusField(vec2 dq, float rad, float parcelR, vec3 axis, float angle,
                 float seed, float fraction, float frequency, float flow, float pixelStretch){
  if(fraction <= 0.00001) return vec3(rad, 0.0, 0.0);
  vec3 local = rotAxis(vec3(dq / rad, 0.0), axis, -angle) * frequency;
  vec3 offset = vec3(hash(seed + 37.1), hash(seed + 79.3), hash(seed + 113.7)) * 4.0;
  vec3 x = local + offset;
  float clock = uTime * flow * 0.32;
  vec3 phase = x.yzx * 1.6 + clock * vec3(0.80, 0.61, -0.73) + offset.zxy;
  vec3 warped = x + 0.22 * sin(phase) + clock * vec3(0.11, -0.08, 0.09);
  float footprint = 16.0 * frequency * uFieldStep * pixelStretch * 1.352 / max(rad * parcelR, 1e-5);
  float lod = clamp(log2(max(1.0, footprint)), 0.0, 5.0);
  vec4 cell = textureLod(uVoronoi, warped * 0.25, lod);
  // Swapping valleys and retained lobes also reverses the stored derivative.
  if(uInvertNoise > 0.5) cell = vec4(1.0 - cell.r, -cell.gba);
  vec3 g = cell.gba;
  vec3 d = 0.352 * cos(phase);
  vec3 gx = vec3(g.x + d.z * g.z, g.y + d.x * g.x, g.z + d.y * g.y);
  vec3 worldGradient = rotAxis(gx, axis, angle);
  return vec3(rad * (1.0 - fraction * clamp(cell.r, 0.0, 1.0)),
              -fraction * frequency * worldGradient.xy);
}
vec3 carvedRadius(vec2 dq, float rad, float parcelR, vec3 axis, float angle, float seed, float pixelStretch){
  if(dot(dq, dq) > (rad + 0.07) * (rad + 0.07)) return vec3(rad, 0.0, 0.0);
  return radiusField(dq, rad, parcelR, axis, angle, seed,
                     clamp(uCarve * 0.40, 0.0, 0.60), max(0.2, uCellScale), uCellFlow, pixelStretch);
}
// Independent primary breakup. Initial size compensation lets valleys and
// retained lobes move around a neutral radius instead of only deflating it.
// Small composed steps keep the complete core/cap/relief map invertible.
const float PRIMARY_MATERIAL_SUPPORT = 1.9;
const float PRIMARY_NOISE_GRADIENT_BOUND = 3.13;
const float PRIMARY_DOMAIN_WARP_BOUND = 1.352;
const float PRIMARY_MAX_COMPENSATION = 1.581139;

// Returns (stage count, per-stage subtraction fraction, initial compensation).
// Strength is [0,3], frequency is [.3,4]. Zero strength is exactly identity.
vec3 primaryWarpParameters(float strength, float frequency){
  float amount = clamp(strength / 3.0, 0.0, 1.0);
  if(amount <= 0.0) return vec3(0.0, 0.0, 1.0);
  float totalFraction = 0.6 * pow(amount, 0.65);
  float limit = 0.8 / (1.0 + PRIMARY_MATERIAL_SUPPORT * frequency
                            * PRIMARY_NOISE_GRADIENT_BOUND * PRIMARY_DOMAIN_WARP_BOUND);
  float stages = clamp(ceil(log(1.0 - totalFraction) / log(1.0 - limit)), 1.0, 40.0);
  float stepFraction = 1.0 - pow(1.0 - totalFraction, 1.0 / stages);
  // A spatially constant middle-gray field has exactly unit final scale.
  float compensation = pow(1.0 - 0.5 * stepFraction, -stages);
  return vec3(stages, stepFraction, compensation);
}

float primaryWorldSupport(vec3 params){
  return PRIMARY_MATERIAL_SUPPORT * params.z;
}

float primaryMinimumScale(vec3 params){
  return params.z * pow(1.0 - params.y, params.x);
}

// Value and gradient in the CURRENT material coordinates. The basis vectors,
// seed offset and animation terms are computed once per parcel, not per stage.
vec3 samplePrimaryNoise(vec2 q, vec3 basisX, vec3 basisY, vec3 offset,
                        vec3 phaseBias, vec3 drift, float frequency, float lod){
  vec3 x = (basisX * q.x + basisY * q.y) * frequency + offset;
  vec3 phase = x.yzx * 1.6 + phaseBias;
  vec3 warped = x + 0.22 * sin(phase) + drift;
  vec4 cell = textureLod(uPrimaryNoise, warped * 0.25, lod);
  if(uPrimaryInvertNoise > 0.5) cell = vec4(1.0 - cell.r, -cell.gba);
  vec3 g = cell.gba;
  vec3 d = 0.352 * cos(phase);
  vec3 gx = vec3(g.x + d.z * g.z,
                 g.y + d.x * g.x,
                 g.z + d.y * g.y);
  // Inverse material rotation/projection via the transpose of its two columns.
  vec2 gradient = frequency * vec2(dot(gx, basisX), dot(gx, basisY));
  return vec3(clamp(cell.r, 0.0, 1.0), gradient);
}

// Return (total scale, derivative x, derivative y) in ORIGINAL parcel units.
vec3 primaryWarp(vec2 q, float r, vec3 axis, float angle, float seed, vec3 params){
  if(params.x < 0.5) return vec3(1.0, 0.0, 0.0);
  float frequency = uPrimaryScale;
  float stepFraction = params.y;
  float scale = params.z;
  vec2 workQ = q / scale;
  vec2 gradient = vec2(0.0);

  vec3 basisX = rotAxis(vec3(1.0, 0.0, 0.0), axis, -angle);
  vec3 basisY = rotAxis(vec3(0.0, 1.0, 0.0), axis, -angle);
  float materialSeed = seed + 211.19;
  vec3 offset = vec3(hash(materialSeed + 37.1), hash(materialSeed + 79.3),
                     hash(materialSeed + 113.7)) * 4.0;
  float clock = uTime * uCellFlow * 0.55 * 0.32;
  vec3 phaseBias = clock * vec3(0.80, 0.61, -0.73) + offset.zxy;
  vec3 drift = clock * vec3(0.11, -0.08, 0.09);

  // One fixed LOD per parcel keeps the geometry scalar's derivative coherent.
  // A modest footprint margin filters ordinary screen sampling; multiplying
  // worst-case Jacobian bounds at every stage would erase primary breakup.
  float footprint = 16.0 * frequency * uFieldStep * 1.5
                    * PRIMARY_DOMAIN_WARP_BOUND / max(r, 1e-5);
  float lod = clamp(log2(max(1.0, footprint)), 0.0, 5.0);

  for(int stage = 0; stage < 40; stage++){
    if(float(stage) >= params.x) break;
    vec3 noise = samplePrimaryNoise(workQ, basisX, basisY, offset,
                                    phaseBias, drift, frequency, lod);
    float s = 1.0 - stepFraction * noise.x;
    vec2 g = -stepFraction * noise.yz;

    // Differentiate totalScale*s(originalQ/totalScale), including the initial
    // uniform compensation. This stays finite at a core or cap silhouette.
    gradient = g + gradient * (s - dot(workQ, g));
    scale *= s;
    workQ /= s;

    // s<=1, so later stages cannot bring an escaped material point back in.
    if(dot(workQ, workQ) > PRIMARY_MATERIAL_SUPPORT * PRIMARY_MATERIAL_SUPPORT) break;
  }
  return vec3(scale, gradient);
}
// A subtractive thickness in parcel material space, shared by the core and
// its caps. Thin billows wear away before the larger body recedes.
// The existing Clouds volume supplies the value and its matching gradient.
vec3 erosionThickness(vec2 q, float r, vec3 axis, float angle, float seed,
                      float maximumDepth, float primaryMinScale){
  if(maximumDepth <= 0.0) return vec3(0.0);
  const float frequency = 2.2;
  vec3 offset = vec3(hash(seed + 163.7), hash(seed + 271.3), hash(seed + 419.1)) * 4.0;
  vec3 material = rotAxis(vec3(q, 0.0), axis, -angle) * frequency + offset + vec3(0.0, 0.0, uTime * uErosionFlow);
  // Fixed per-parcel LOD keeps the noise scalar and its gradient coherent.
  float footprint = 16.0 * frequency * uFieldStep * 1.5 / max(r * primaryMinScale, 1e-5);
  float lod = clamp(log2(max(1.0, footprint)), 0.0, 5.0);
  vec4 cell = textureLod(uErosionNoise, material * 0.25, lod);
  vec2 gradient = frequency * rotAxis(cell.gba, axis, angle).xy;
  return vec3(maximumDepth * (0.65 + 0.35 * clamp(cell.r, 0.0, 1.0)),
              maximumDepth * 0.35 * gradient);
}

// Triplanar material on the rotating parcel skin.
vec2 materialTile(vec3 p, float seed){
  vec3 w = pow(abs(p), vec3(4.0)); w /= max(w.x + w.y + w.z, 0.001);
  vec2 o = vec2(seed * 0.173, seed * 0.317);
  return textureLod(uTile, p.yz * 0.38 + o, 2.8).gb * w.x + textureLod(uTile, p.xz * 0.38 + o, 2.8).gb * w.y + textureLod(uTile, p.xy * 0.38 + o, 2.8).gb * w.z;
}
// This signed, tapered relief is the SINGLE source for both height and slope.
float reliefShape(vec2 q, vec3 axis, float angle, float seed){
  // Keep relief's edge taper on the receding body. The same function is used
  // for both displacement and all finite-difference normal samples.
  q /= 1.0 - ((0.35 / 3.0) * clamp(uErosion, 0.0, 3.0)) / 0.93;
  float rho = length(q);
  if(rho >= 0.95) return 0.0;
  vec3 nrm = normalize(vec3(q, sqrt(max(1.0 - min(dot(q, q), 0.999), 0.001))));
  vec2 tile = materialTile(rotAxis(nrm, axis, -angle), seed);
  float caps = 1.0 - (1.0 - tile.x) * (1.0 - tile.y * 0.55);
  return (caps - uReliefCenter) * (1.0 - smoothstep(0.65, 0.95, rho));
}
// Apply a top-down-world height gradient without division by the normal's z.
vec3 displaceNormal(vec3 n, vec2 slope){
  return normalize(vec3(n.x - n.z * slope.x, n.y + n.z * slope.y, n.z));
}
vec3 deformNormal(vec3 n, float localHeight, vec2 q, vec2 scaleGradient){
  float a = localHeight * n.z + q.x * n.x - q.y * n.y;
  return normalize(vec3(n.x - a * scaleGradient.x, n.y + a * scaleGradient.y, n.z));
}

void main(){
  vec2 p = vec2(vUv.x, (1.0 - vUv.y) * uAspect);
  float bH[NB]; float bW[NB]; float bC[NB]; vec3 bN[NB];
  for(int j = 0; j < NB; j++){ bH[j] = 0.0; bW[j] = 0.0; bC[j] = 0.0; bN[j] = vec3(0.0); }
  // Relief is carried in visible parcel normals; no global max-detail slope.
  float T = max(0.002, uReference * 0.08 * uSoftness);
  float floorH = uReference * 1.5;
  vec3 primaryParams = primaryWarpParameters(uPrimaryCarve, uPrimaryScale);
  float primarySupport = primaryWorldSupport(primaryParams);
  float inflation = 1.0 + uInflation;
  float erosionDepth = (0.35 / 3.0) * clamp(uErosion, 0.0, 3.0);
  // A uniform center inset keeps every cap center inside even the most-eroded
  // core. Its position does not vary per pixel, so no extra center Jacobian is
  // needed in the cap normal. Erosion zero is exactly the original construction.
  float erosionMinScale = primaryMinimumScale(primaryParams);
  for(int i = 0; i < 64; i++){
    if(i >= uCount) break;
    vec4 b = uBlobs[i]; vec4 ax = uAux[i];
    if(b.z <= 1e-4 || ax.w <= 1e-6) continue;
    int bi = clamp(int(ax.x + 0.5), 0, NB - 1);
    float r = b.z * inflation;
    vec2 q = (p - b.xy) / r; float rho = length(q);
    if(rho > primarySupport) continue;
    int pi = ax.z < 0.0 ? -1 : int(ax.z + 0.5);
    vec4 parcelCap = texelFetch(uCaps, ivec2(20, i), 0);
    vec3 axis = vec3(parcelCap.xy, 0.0);
    float angle = parcelCap.z;
    vec3 primary = primaryWarp(q, r, axis, angle, b.w, primaryParams);
    float parcelScale = primary.x;
    vec2 scaleGradient = primary.yz;
    q /= parcelScale;
    rho = length(q);
    if(rho > PRIMARY_MATERIAL_SUPPORT) continue;
    float pixelStretch = (1.0 + length(q) * length(scaleGradient)) / parcelScale;
    float core = 0.93;
    vec3 erosion = erosionThickness(q, r, axis, angle, b.w, erosionDepth, erosionMinScale);
    float coreRadius = core - erosion.x;
    float sd = (rho - coreRadius) * r;
    float coreH = sqrt(max(coreRadius * coreRadius - dot(q, q), 0.0)) * r;
    float cap = coreH;
    float visibleH = coreH;
    vec3 coreN = normalize(vec3(q.x + coreRadius * erosion.y,
                                -q.y - coreRadius * erosion.z,
                                sqrt(max(coreRadius * coreRadius - dot(q, q), 0.0))) + vec3(0.0, 0.0, 1e-8));
    vec3 nP = coreN;
    for(int j = 0; j < 20; j++){
      // cap table (CPU, once per frame): centre on the rotated shell and radius after ownership
      vec4 cp = texelFetch(uCaps, ivec2(j, i), 0);
      float rad = cp.w;
      if(rad <= 1e-4) continue;
      vec3 cen = cp.xyz;
      float shellRadius = length(cen);
      // Let the existing narrow smoothing vanish as a cap becomes contained.
      // Full burial then leaves no residual soft-union bump or sudden ghost.
      float attachment = smoothstep(0.0, 0.045, shellRadius + rad - core);
      float silhouetteJoin = max(1e-7, r * 0.045 * attachment);
      float heightJoin = max(1e-7, r * 0.02 * attachment);
      vec2 dq = q - cen.xy; float dd = dot(dq, dq);
      vec3 cut = carvedRadius(dq, rad, r, axis, angle, b.w + float(j) * 19.31, pixelStretch);
      // The SAME erosion scalar shortens core and cap radii; subtract its
      // derivative too, so height, silhouette and patch normals stay together.
      cut -= erosion;
      float cutR = max(cut.x, 0.0);
      if(cutR <= 1e-4) continue;
      float zc = min(cen.z, 0.0);
      float pr = sqrt(max(cutR * cutR - zc * zc, 0.0));
      if(pr <= 1e-4) continue;
      float sDist = sqrt(dd) - pr;
      sd = smin(sd, sDist * r, silhouetteJoin);
      float surfaceZ = sqrt(max(cutR * cutR - dd, 0.0));
      float lh = cen.z + surfaceZ;
      float lhOut = sqrt(max(pr * pr - dd, 0.0));
      lh = mix(lh, lhOut, smoothstep(core - 0.15, core + 0.05, length(cen.xy)));
      float join = smoothstep(0.0, rad * 0.02, -sDist);
      float inside = step(sqrt(dd), pr);
      float rawH = max(lh, 0.0) * r;
      float wN = clamp(0.5 + 0.5 * (rawH - visibleH) / heightJoin, 0.0, 1.0) * inside;
      vec3 patchN = normalize(vec3(dq.x - cutR * cut.y, -dq.y + cutR * cut.z, surfaceZ) + vec3(0.0, 0.0, 1e-8));
      nP = normalize(mix(nP, patchN, wN));
      if(inside > 0.5) visibleH = -smin(-visibleH, -rawH, heightJoin);
      cap = -smin(-cap, -max(lh, 0.0) * r * join, heightJoin);
    }

    // Keep the established round-patch shading policy. Crown attenuation is a
    // height/shadow envelope: differentiating its annulus prints circular bands.
    // Track its height for the primary deformation, without inventing that slope.
    float crownA = 1.0 - 0.45 * smoothstep(0.0, 0.16, coreRadius - rho);
    visibleH = coreH + crownA * (visibleH - coreH);
    cap = mix(cap, coreH + (cap - coreH) * 0.55, smoothstep(0.0, 0.16, coreRadius - rho));

    // Each parcel supplies its own actual signed relief, including the measured neutral
    // level and edge taper, BEFORE the visibility/soft-union weights.
    // The radius in H=r*.14*Relief*f cancels against dq/dp in the slope.
    if(uRelief > 0.00001){
      float eps = clamp(0.5 * uFieldStep * pixelStretch / r, 0.002, 0.02);
      if(rho < 0.95 + eps){
        float relief = reliefShape(q, axis, angle, b.w);
        float k = 0.14 * uRelief;
        cap += relief * r * k;
        visibleH += relief * r * k;
        vec2 gx = vec2(eps, 0.0), gy = vec2(0.0, eps);
        vec2 gradRelief = vec2(
          reliefShape(q + gx, axis, angle, b.w) - reliefShape(q - gx, axis, angle, b.w),
          reliefShape(q + gy, axis, angle, b.w) - reliefShape(q - gy, axis, angle, b.w)) * (k / (2.0 * eps));
        nP = displaceNormal(nP, gradRelief);
      }
    }
    // H(qWorld)=S(qWorld)*Hsource(qWorld/S): transform the normal with its
    // Jacobian. This remains finite even at a cap horizon (normal.z == 0).
    nP = deformNormal(nP, visibleH / r, q, scaleGradient);
    cap *= parcelScale;
    sd *= parcelScale;
    // Erosion was evaluated on the actual primitives above. There is no
    // independent world-space mask wobble that can cut across a lit surface.
    float bridgeCap = 0.0;
    if(pi >= 0 && pi < uCount && pi != i && int(uAux[pi].x + 0.5) != bi){
      vec4 pb = uBlobs[pi]; float dist = length(b.xy - pb.xy);
      float parentRadius = pb.z * inflation;
      if(dist < 1.4 * parentRadius && dist > 0.0){
        float cr = min(r, parentRadius) * (0.62 - erosionDepth); float cd = sdCapsule(p, b.xy, pb.xy, cr);
        float join = smoothstep(0.5, 1.0, ax.w) * smoothstep(0.5, 1.0, uAux[pi].w) * (1.0 - smoothstep(1.1, 1.4, dist / parentRadius));
        sd = mix(sd, smin(sd, cd, r * 0.07), join);
        bridgeCap = sqrt(max(cr * cr - pow(max(0.0, cd + cr), 2.0), 0.0)) * join;
      }
    }
    float depth = (ax.y - 0.5) * uReference * uDepth * 1.5;
    float h = floorH + max(cap, bridgeCap > 0.0 ? bridgeCap : -r * 4.0) + depth - r * 2.2 * (1.0 - ax.w);
    float cov = (1.0 - smoothstep(-0.002, 0.002, sd)) * smoothstep(0.0, 0.3, ax.w) * smoothstep(floorH - 0.002, floorH + 0.002, h);
    if(cov > 0.0){
      // Keep a running branch maximum, rescaling both height and normal sums.
      // All exponent arguments are nonpositive, with no artificial height cap.
      float nextTop = max(bH[bi], h);
      float previousWeight = exp((bH[bi] - nextTop) / T);
      float wE = cov * exp((h - nextTop) / T);
      bW[bi] = bW[bi] * previousWeight + wE;
      bN[bi] = bN[bi] * previousWeight + wE * nP;
      bH[bi] = nextTop;
    }
    bC[bi] = 1.0 - (1.0 - bC[bi]) * (1.0 - cov);
    // Hidden parcel relief cannot leak into a separate shared detail field.
  }
  float top = 0.0;
  for(int j = 0; j < NB; j++){
    bH[j] = bW[j] > 1e-20 ? max(0.0, bH[j] + T * log(bW[j])) : 0.0;
    top = max(top, bH[j]);
  }
  float T2 = max(0.002, uReference * 0.09 * uSoftness * uBlend);
  float den = 0.0; float unc = 1.0; float ovl = 0.0; vec3 nSum = vec3(0.0);
  for(int j = 0; j < NB; j++){
    float c = bC[j]; float e = c * exp(clamp((bH[j] - top) / T2, -25.0, 0.0)); den += e;
    if(bW[j] > 1e-20) nSum += e * normalize(bN[j] / bW[j] + vec3(0.0, 0.0, 1e-6));
    unc *= 1.0 - c; ovl += c;
  }
  float height = max(0.0, top + T2 * log(max(1e-20, den)));
  float mask = 1.0 - unc;
  float contact = smoothstep(0.9, 2.2, ovl) * 0.35;
  float hN = clamp(height / uHeightUnit, 0.0, 1.0);
  // Coverage-premultiplied normals keep empty sky out of normal mip levels.
  fragNormal = vec4((normalize(nSum + vec3(0.0, 0.0, 1e-6)) * 0.5 + 0.5) * mask, mask);
  if(uPacked > 0.5){
    float hi = floor(hN * 255.0) / 255.0;
    float lo = fract(hN * 255.0);
    fragColor = vec4(hi, lo, mask, contact);
  } else {
    fragColor = vec4(hN, mask, 0.0, contact);
  }
}`;

  // ---------- Pass 2: local cavity / ambient obscurance ----------
  var AO_FS = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uField;
uniform sampler2D uNormal;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uHeightUnit;
uniform float uPacked;
uniform float uRadius;
uniform float uFalloff;

// The AO pass uses LINEAR, LOD-zero reconstruction of the original field.
// No geometry, normal, or silhouette blur is introduced here.
vec2 geometryAt(vec2 uv){
  if(any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec2(0.0);
  vec4 t = textureLod(uField, uv, 0.0);
  return uPacked > 0.5 ? vec2((t.r + t.g / 255.0) * uHeightUnit, t.b)
                       : vec2(t.r * uHeightUnit, t.g);
}
vec3 patchNormal(vec4 t){
  return normalize(t.rgb / max(t.a, 1e-6) * 2.0 - 1.0 + vec3(0.0, 0.0, 1e-8));
}

void main(){
  vec2 center = geometryAt(vUv);
  vec4 encodedN = textureLod(uNormal, vUv, 0.0);
  float receiverCoverage = min(center.y, encodedN.a);
  if(receiverCoverage < 0.5 || uRadius <= 0.0){
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
  vec3 n = patchNormal(encodedN);
  float pixel = max(uTexel.x, uTexel.y * uAspect);
  float radius = max(uRadius, 6.0 * pixel);
  float exponent = max(0.25, uFalloff);
  const vec2 directions[8] = vec2[8](
    vec2(1.0, 0.0), vec2(0.70710678, 0.70710678),
    vec2(0.0, 1.0), vec2(-0.70710678, 0.70710678),
    vec2(-1.0, 0.0), vec2(-0.70710678, -0.70710678),
    vec2(0.0, -1.0), vec2(0.70710678, -0.70710678));
  const float fractions[4] = float[4](0.16, 0.34, 0.57, 0.85);
  float obscurance = 0.0;
  for(int direction = 0; direction < 8; direction++){
    float horizon = 0.0;
    for(int stepIndex = 0; stepIndex < 4; stepIndex++){
      float distanceXY = max(fractions[stepIndex] * radius, (1.5 + 0.65 * float(stepIndex)) * pixel);
      vec2 deltaXY = directions[direction] * distanceXY;
      vec2 sampleUV = vUv + deltaXY / vec2(1.0, uAspect);
      vec2 sampleGeometry = geometryAt(sampleUV);
      if(sampleGeometry.y < 0.5) continue;
      vec3 delta = vec3(deltaXY, sampleGeometry.x - center.x);
      float distanceSquared = dot(delta, delta);
      if(distanceSquared >= radius * radius) continue;
      vec4 encodedM = textureLod(uNormal, sampleUV, 0.0);
      float coverage = smoothstep(0.5, 0.98, min(sampleGeometry.y, encodedM.a));
      if(coverage <= 0.0) continue;
      vec3 m = patchNormal(encodedM);
      vec3 direction3D = delta * inversesqrt(max(distanceSquared, 1e-12));

      // A sample must be above the receiver's local surface hemisphere.
      float facing = max(0.0, dot(n, direction3D) - 0.025);
      // Converging oriented patches enclose a nook. Parallel height steps
      // have n == m and cannot create a fabricated vertical-wall occluder.
      // Use normal convergence rather than demanding a front-facing emitter:
      // the latter incorrectly opens a bright line at intersecting spheres.
      float convergence = clamp(dot(n - m, direction3D) - 0.04, 0.0, 1.0);
      float rangeWeight = pow(max(0.0, 1.0 - distanceSquared / (radius * radius)), exponent);
      float candidate = sqrt(facing * convergence) * rangeWeight * coverage;
      horizon = max(horizon, candidate);
    }
    obscurance += horizon;
  }
  obscurance = clamp(obscurance / 8.0, 0.0, 1.0)
             * smoothstep(0.5, 0.98, receiverCoverage);
  // Raw obscurance. Intensity and its response curve belong to the shade pass.
  fragColor = vec4(obscurance, obscurance, obscurance, 1.0);
}`;

  // ---------- Pass 3: shade ----------
  var SHADE_FS = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uField;
uniform sampler2D uOcclusion;
uniform vec2 uTexel;
uniform vec3 uLight;
uniform float uAspect;
uniform float uHeightUnit;
uniform float uShadow;
uniform float uAO;
uniform float uResScale;
uniform float uJumpW;
uniform float uHighlight;
uniform float uFill;
uniform float uBands;
uniform float uSky;
uniform float uPacked;
uniform vec3 uSkyColor;
uniform float uDebug;
uniform float uPixelated;
uniform float uToon;
uniform float uToneA;
uniform float uToneB;
uniform float uFlatten;
uniform float uInk;
uniform sampler2D uNormal;
uniform float uPatchN;
uniform float uShadowDetail;  // detail kept where the macro form faces away from the sun (1: all, 0: none)
uniform float uFormAO;        // large-scale occlusion strength: a texel far below its blurred neighbourhood is under the mass
uniform float uFormLod;       // mip level of that neighbourhood read
uniform float uFormRange;     // world height difference for full form occlusion
vec2 suv;
vec4 fieldAt(vec2 uv){
  vec4 t = textureLod(uField, uv, 0.0);
  if(uPacked > 0.5) return vec4(t.r + t.g / 255.0, t.b, 0.0, t.a);
  return t;
}
vec4 fieldLod(vec2 uv, float lod){
  if(uPacked > 0.5) return fieldAt(uv);
  return textureLod(uField, uv, lod);
}
float gradient(vec2 off, float lod){
  vec4 c = fieldLod(suv, lod), a = fieldLod(suv - off, lod), b = fieldLod(suv + off, lod);
  float span = length(off * vec2(1.0, uAspect));
  float wa = smoothstep(0.05, 0.95, a.g), wb = smoothstep(0.05, 0.95, b.g);
  float da = abs(a.r - c.r) + 1e-6, db = abs(b.r - c.r) + 1e-6;
  wa *= 1.0 - smoothstep(uJumpW * 0.5, uJumpW, (da - db) * uHeightUnit);
  wb *= 1.0 - smoothstep(uJumpW * 0.5, uJumpW, (db - da) * uHeightUnit);
  return ((c.r - a.r) * wa + (b.r - c.r) * wb) * uHeightUnit / (span * max(1e-4, wa + wb));
}
float bayer(vec2 p){ ivec2 a = ivec2(mod(p, 4.0)); int n = a.x + 4 * a.y;
  const float m[16] = float[16](0.,8.,2.,10.,12.,4.,14.,6.,3.,11.,1.,9.,15.,7.,13.,5.); return m[n] / 16.0 - 0.5; }
vec3 palette(float l){
  vec3 deep = vec3(0.10, 0.35, 0.52), blue = vec3(0.30, 0.54, 0.65), cyan = vec3(0.56, 0.73, 0.75), pale = vec3(0.80, 0.86, 0.80), cream = vec3(0.99, 0.97, 0.85);
  float levels = clamp(uBands, 3.0, 5.0); float b = clamp(l, 0.0, 0.999) * (levels - 1.0);
  float band = floor(b) + smoothstep(0.08, 0.92, fract(b));
  float q = band / (levels - 1.0) * 4.0; int idx = int(min(q, 3.0)); float f = q - float(idx);
  vec3 a = idx == 0 ? deep : idx == 1 ? blue : idx == 2 ? cyan : pale;
  vec3 c = idx == 0 ? blue : idx == 1 ? cyan : idx == 2 ? pale : cream;
  return mix(a, c, f);
}
vec3 normalAt(vec2 uv, float lod){
  vec4 t = textureLod(uNormal, uv, lod);
  if(t.a <= 0.00001) return vec3(0.0, 0.0, 1.0);
  return normalize(t.rgb / t.a * 2.0 - 1.0 + vec3(0.0, 0.0, 1e-8));
}
// Average only nearby, compatible surface patches. Coverage is only a
// weight here: this never filters the cloud silhouette or the height field.
vec3 smoothPatchNormal(vec2 uv, vec3 centerN, vec4 centerField){
  const vec2 ring[8] = vec2[8](
    vec2(1.0,0.0), vec2(0.70710678,0.70710678), vec2(0.0,1.0), vec2(-0.70710678,0.70710678),
    vec2(-1.0,0.0), vec2(-0.70710678,-0.70710678), vec2(0.0,-1.0), vec2(0.70710678,-0.70710678));
  float pixelWorld = max(uTexel.x, uTexel.y * uAspect);
  float radius = (1.0 + 3.0 * uFlatten) * uResScale;
  float tolerance = max(uJumpW * 0.65, pixelWorld * 0.65);
  vec3 sum = centerN * 2.0;
  for(int i = 0; i < 8; i++){
    vec2 offset = ring[i] * uTexel * radius;
    vec2 coord = uv + offset;
    if(any(lessThan(coord, vec2(0.0))) || any(greaterThan(coord, vec2(1.0)))) continue;
    vec4 neighbor = fieldAt(coord);
    if(neighbor.g < 0.05) continue;
    vec3 m = normalAt(coord, 0.0);
    vec3 delta = vec3(offset * vec2(1.0, uAspect), (neighbor.r - centerField.r) * uHeightUnit);
    // Symmetric tangent-plane distance distinguishes an actual surface
    // neighborhood from a parallel but disconnected height step.
    float planeError = max(abs(dot(delta, centerN)), abs(dot(delta, m)));
    float compatible = exp2(-2.0 * planeError * planeError / (tolerance * tolerance));
    compatible *= smoothstep(0.0, 0.8, dot(centerN, m));
    sum += m * compatible * smoothstep(0.05, 0.95, neighbor.g);
  }
  return normalize(sum);   // the fully smoothed (macro) normal; the caller blends by uFlatten
}
void main(){
  vec2 t = uTexel;
  suv = (uPixelated > 0.5) ? (floor(vUv / t) + 0.5) * t : vUv;
  vec4 f = fieldAt(suv);
  vec4 sky = (uSky > 0.5) ? vec4(uSkyColor, 1.0) : vec4(0.0);
  if(uDebug > 1.5){
    float ao = uAO > 0.00001 ? textureLod(uOcclusion, suv, 0.0).r : 0.0;
    fragColor = vec4(vec3((1.0 - ao) * f.g), 1.0); return;
  }
  if(uDebug > 0.5){ float cv = fract(f.x * 25.0); fragColor = vec4(vec3(f.x * 2.0 * (0.5 + 0.5 * step(0.5, cv))), 1.0); return; }
  if(f.g < 0.01){ fragColor = sky; return; }

  vec3 n;
  if(uPatchN > 0.5){
    n = normalAt(suv, 0.0);
    // The saved Flatten value now drives a surface-aware normal smoother.
    // A: detail falls off in shadow. micro = the usual Normal-smooth blend; macro = fully smoothed.
    // Where the macro form faces away from the sun the per-cap detail fades to the form itself.
    vec3 macroN = smoothPatchNormal(suv, n, f);
    vec3 microN = normalize(mix(n, macroN, uFlatten));
    float keep = uShadowDetail + (1.0 - uShadowDetail) * max(0.0, dot(macroN, uLight));
    n = normalize(mix(macroN, microN, keep));
  } else {
    // Explicit legacy comparison path.
    float dx = gradient(vec2(t.x * 2.0 * uResScale, 0.0), 0.0);
    float dy = gradient(vec2(0.0, t.y * 2.0 * uResScale), 0.0);
    n = normalize(vec3(-dx, -dy, 1.0));
    if(uFlatten > 0.001){
      float lodS = 2.0 + log2(uResScale);
      float sx = gradient(vec2(t.x * 4.0 * uResScale, 0.0), lodS);
      float sy = gradient(vec2(0.0, t.y * 4.0 * uResScale), lodS);
      n = normalize(mix(n, normalize(vec3(-sx, -sy, 1.0)), uFlatten));
    }
  }
  float lambert = dot(n, uLight);
  float bounce = max(0.0, dot(n, normalize(vec3(-uLight.x, -uLight.y, 0.25))));
  float occ = 0.0; vec2 dir = normalize(uLight.xy + vec2(1e-5, 0.0));
  float h0 = f.r * uHeightUnit;
  float jit = bayer((uPixelated > 0.5) ? floor(vUv / t) : gl_FragCoord.xy) + 0.5;
  for(int i = 1; i <= 16; i++){
    float dist = (float(i) - 0.5 + jit) * 0.006; float pen = 0.007 + dist * 0.30;
    vec2 coord = suv + dir * dist / vec2(1.0, uAspect);
    vec4 caster = fieldLod(coord, log2((1.0 + float(i) * 0.4) * uResScale));
    float ray = h0 + dist * uLight.z / max(0.15, length(uLight.xy));
    float sh = smoothstep(-pen, pen, caster.r * uHeightUnit - ray - 0.010) * caster.g;
    occ = max(occ, sh * (1.0 - float(i) / 21.0));
  }
  // Directional visibility only attenuates the direct sun component.
  // Ambient occlusion comes from the local cavity pass, never branch counts.
  float edge = 1.0 - min(min(fieldAt(suv + vec2(t.x, 0.0)).g, fieldAt(suv - vec2(t.x, 0.0)).g), min(fieldAt(suv + vec2(0.0, t.y)).g, fieldAt(suv - vec2(0.0, t.y)).g));
  // Nook AO removes ambient energy before the palette/toon thresholds.
  // Its local geometry test does not depend on the sun or the Shadow control.
  float ambientOcclusion = 0.0;
  // B: form occlusion. The blurred height around this texel stands for the mass above it.
  if(uFormAO > 0.00001){
    float meanH = fieldLod(suv, uFormLod).r * uHeightUnit;
    ambientOcclusion = min(0.85, uFormAO * smoothstep(0.0, uFormRange, meanH - h0));
  }
  if(uAO > 0.00001){
    float cavity = textureLod(uOcclusion, suv, 0.0).r;
    ambientOcclusion = min(0.85, ambientOcclusion + 1.0 - exp(-2.0 * uAO * cavity));
  }
  vec3 cloud;
  if(uToon > 0.5){
    float direct = pow(max(0.0, lambert), mix(1.5, 0.55, uHighlight)) * (1.0 - uShadow * occ);
    float ambient = 0.35 + uFill * bounce;
    ambient -= (0.35 + uFill * bounce) * ambientOcclusion;
    vec2 ti = (uPixelated > 0.5) ? floor(vUv / t) : floor(gl_FragCoord.xy);
    if(mod(ti.x + ti.y, 2.0) > 0.5){ direct -= 0.087; ambient -= 0.087; }
    float tone = (direct > uToneA) ? 1.0 : (((direct + ambient) > uToneB) ? 0.4 : 0.0);
    cloud = mix(vec3(0.30, 0.54, 0.65), vec3(0.99, 0.97, 0.85), tone);
    float h0w = f.r * uHeightUnit; float drop = 0.0;
    drop = max(drop, h0w - fieldAt(suv + vec2(t.x, 0.0)).r * uHeightUnit);
    drop = max(drop, h0w - fieldAt(suv - vec2(t.x, 0.0)).r * uHeightUnit);
    drop = max(drop, h0w - fieldAt(suv + vec2(0.0, t.y)).r * uHeightUnit);
    drop = max(drop, h0w - fieldAt(suv - vec2(0.0, t.y)).r * uHeightUnit);
    float ink = max(smoothstep(uJumpW, 2.0 * uJumpW, drop), step(0.5, edge)) * uInk;
    cloud *= 1.0 - 0.55 * ink;
  } else {
    float direct = 0.84 * pow(max(0.0, lambert), mix(1.5, 0.55, uHighlight));
    float ambient = 0.18 + uFill * bounce;
    float light = ambient + direct * (1.0 - uShadow * occ);
    light -= ambient * ambientOcclusion;
    light += bayer((uPixelated > 0.5) ? floor(vUv / t) : gl_FragCoord.xy) * 0.012;
    cloud = palette(light);
    cloud = mix(cloud, vec3(1.0, 0.98, 0.86), edge * max(0.0, lambert) * 0.20);
  }
  fragColor = (uSky > 0.5) ? vec4(mix(sky.rgb, cloud, f.g), 1.0) : vec4(cloud * f.g, f.g);
}`;

  function compile(gl, type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      var log = gl.getShaderInfoLog(sh);
      gl.deleteShader(sh);
      throw new Error('CloudRenderer shader compile failed: ' + log);
    }
    return sh;
  }

  function link(gl, vs, fs) {
    var prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      throw new Error('CloudRenderer program link failed: ' + gl.getProgramInfoLog(prog));
    }
    return prog;
  }

  function uniforms(gl, prog, names) {
    var out = {};
    for (var i = 0; i < names.length; i++) out[names[i]] = gl.getUniformLocation(prog, names[i]);
    return out;
  }

  function CloudRenderer(canvas) {
    if (!canvas || typeof canvas.getContext !== 'function') {
      throw new Error('CloudRenderer: a <canvas> element is required.');
    }
    var gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false, preserveDrawingBuffer: false });
    if (!gl) {
      throw new Error('CloudRenderer: WebGL2 is not available in this browser/GPU. Enable hardware acceleration or use a WebGL2-capable browser.');
    }
    this.canvas = canvas;
    this.gl = gl;
    this.stats = { fieldW: 0, fieldH: 0, lastDrawMs: 0 };

    this._floatOk = !!gl.getExtension('EXT_color_buffer_float');
    this._packed = !this._floatOk;

    this._fieldProg = link(gl, VS, FIELD_FS);
    this._fieldU = uniforms(gl, this._fieldProg, ['uBlobs', 'uAux', 'uCount', 'uTile', 'uAspect', 'uTime', 'uBillow', 'uRoll',
      'uErosion', 'uRelief', 'uReliefCenter', 'uReference', 'uSoftness', 'uBlend', 'uHeightUnit', 'uPacked', 'uDepth',
      'uVoronoi', 'uPrimaryNoise', 'uErosionNoise', 'uPrimaryScale', 'uPrimaryInvertNoise', 'uInflation', 'uEmbed', 'uCarve', 'uInvertNoise', 'uPrimaryCarve', 'uCellScale', 'uCellFlow', 'uFieldStep', 'uCaps', 'uErosionFlow']);
    this._aoProg = link(gl, VS, AO_FS);
    this._aoU = uniforms(gl, this._aoProg, ['uField', 'uNormal', 'uTexel', 'uAspect', 'uHeightUnit', 'uPacked', 'uRadius', 'uFalloff']);
    this._shadeProg = link(gl, VS, SHADE_FS);
    this._shadeU = uniforms(gl, this._shadeProg, ['uField', 'uOcclusion', 'uTexel', 'uLight', 'uAspect', 'uHeightUnit',
      'uShadow', 'uAO', 'uResScale', 'uJumpW', 'uHighlight', 'uFill', 'uPixelated', 'uToon', 'uToneA', 'uToneB', 'uFlatten', 'uInk', 'uNormal', 'uPatchN', 'uShadowDetail', 'uFormAO', 'uFormLod', 'uFormRange', 'uBands', 'uSky', 'uPacked', 'uSkyColor', 'uDebug']);

    // billow tile (static asset; baked once)
    this._tile = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._tile);
    var reliefTile = makeTile();
    this._reliefCenter = reliefTile.reliefCenter;
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, TILE, TILE, 0, gl.RGBA, gl.HALF_FLOAT, reliefTile);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_2D);

    // Compact procedural volume: 2 MiB plus mips, generated locally with no downloads.
    this._vtex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_3D, this._vtex);
    gl.texImage3D(gl.TEXTURE_3D, 0, gl.RGBA16F, VORONOI_SIZE, VORONOI_SIZE, VORONOI_SIZE, 0, gl.RGBA, gl.HALF_FLOAT, makeVoronoiVolume());
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_R, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_3D);

    // Smooth fBM alternative: same value+gradient format, no runtime octave loop.
    this._ctex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_3D, this._ctex);
    gl.texImage3D(gl.TEXTURE_3D, 0, gl.RGBA16F, VORONOI_SIZE, VORONOI_SIZE, VORONOI_SIZE, 0, gl.RGBA, gl.HALF_FLOAT, makeCloudsVolume());
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_R, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_3D);

    // cap table: 21 x MAX_BLOBS RGBA32F, rewritten every frame (see _capTable)
    this._capTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._capTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, CAP_COLS, MAX_BLOBS, 0, gl.RGBA, gl.FLOAT, null);
    this._capData = new Float32Array(CAP_COLS * MAX_BLOBS * 4);

    this._vao = gl.createVertexArray();
    this._tex = null;
    this._ntex = null;
    this._aotex = null;
    this._aofbo = null;
    this._fbo = null;
    this._filter = null;
    this._zeroBlobs = new Float32Array(MAX_BLOBS * 4);
    this.resize(320);
  }

  CloudRenderer.MAX_BLOBS = MAX_BLOBS;

  var CAP_COLS = 21;   // 20 caps + one column of per-parcel data (axis, roll angle)
  function hash(x) { var v = Math.sin(x * 12.9898) * 43758.5453; return v - Math.floor(v); }
  function smoothstep(e0, e1, x) { var t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); }

  /**
   * The rigid skin of caps, once per frame instead of once per cap per texel: each parcel's
   * roll axis and angle, and per cap its centre on the rotated shell plus its radius after
   * ownership (shrunk away where a same-branch neighbour is higher at the cap's centre).
   * Same construction the shader had; only the evaluation site moved.
   */
  CloudRenderer.prototype._capTable = function (blobs, aux, count, time, p) {
    var T = this._capData, core = 0.93, i, j, i2;
    var billow = p.billow;
    var growthAtBillow = billow > 2 ? Math.sqrt((0.5 * billow) / (1 + 0.07 * (billow - 2))) : 0;
    var sqrtBillow = Math.sqrt(billow);
    var erosionDepth = (0.35 / 3) * p.erosion;
    var erosionShellScale = 1 - erosionDepth / core;
    var ownershipCoreSq = erosionDepth > 0 ? Math.pow(core - erosionDepth * 0.825, 2) : 0.8649;
    var skinScale = 0.5 + 0.25 * Math.min(4, billow), embedScale = 1 - p.embed;
    for (i = 0; i < count; i++) {
      var o = i * 4, bx = blobs[o], by = blobs[o + 1], bz = blobs[o + 2], seed = blobs[o + 3];
      var row = i * CAP_COLS * 4;
      if (bz <= 1e-4 || aux[o + 3] <= 1e-6) { for (j = 0; j < CAP_COLS * 4; j++) T[row + j] = 0; continue; }
      var r = bz * p.inflation, bi = Math.round(aux[o]);
      // growth direction from the parent parcel (a lone lobe grows up; world y is top-down)
      var pi = aux[o + 2] < 0 ? -1 : Math.round(aux[o + 2]), gx = 0.16, gy = -1;
      if (pi >= 0 && pi < count && pi !== i) {
        var dlx = bx - blobs[pi * 4], dly = by - blobs[pi * 4 + 1];
        if (dlx * dlx + dly * dly > 1e-8) { gx = dlx; gy = dly; }
      }
      var gLen = Math.sqrt(gx * gx + gy * gy); gx /= gLen; gy /= gLen;
      var axX = gy, axY = -gx;   // axis = (growth.y, -growth.x, 0)
      // rollSync > 0: every parcel turns at that fixed multiple of the base rate (one rising column)
      var angle = time * 0.16 * p.roll * (p.rollSync > 0 ? p.rollSync : (0.85 + 0.3 * hash(seed)));
      var c = Math.cos(angle), sn = Math.sin(angle);
      // Cap hierarchy (GHIBLI brief, C): the first nBig slots are big lobes (0.5..0.65 r on an inset
      // shell), the rest the small skin. Small caps shrink as they roll toward the world-down side
      // (detail only in the lit crown band); every cap on the underside is pushed inward (flattened).
      var nBig = Math.min(5, Math.max(0, Math.round(p.lobes)));
      var skinN = Math.max(4, Math.min(20 - nBig, Math.floor((8 + hash(seed + 91.7) * 13) * skinScale)));
      for (j = 0; j < 20; j++) {
        var cj = row + j * 4, rad = 0, cx = 0, cy = 0, cz = 0;
        var big = j < nBig, js = j - nBig;
        if (big || js < skinN) {
          var jit, zz, az, radiusSeed, radiusAtTwo, growthInset;
          if (big) {
            jit = hash(seed + 7.3 + j * 53.1) - 0.5;
            zz = (1 - 2 * (j + 0.5 + jit * 0.4) / nBig) * 0.85;
            az = j * 2.399963 + seed * 1.9 + jit * 1.2;
            rad = p.lobeSize * (0.85 + 0.3 * hash(seed + 5.1 + j * 23.0));
            growthInset = 0.35 * Math.max(rad - 0.5, 0);
          } else {
            jit = hash(seed + js * 31.7) - 0.5;
            zz = 1 - 2 * (js + 0.5 + jit * 0.55) / skinN;
            az = js * 2.399963 + seed * 2.7 + jit * 0.8;
            radiusSeed = (0.28 + (0.46 - 0.28) * hash(seed + js * 17)) * 0.84;
            radiusAtTwo = Math.min(0.5, radiusSeed * Math.SQRT2);
            rad = billow <= 2 ? Math.min(0.5, radiusSeed * sqrtBillow) : radiusAtTwo * growthAtBillow;
            growthInset = 0.35 * Math.max(rad - radiusAtTwo, 0);
          }
          var sr = Math.sqrt(Math.max(1 - zz * zz, 0));
          var shellRadius = Math.max(0, 0.78 - growthInset) * embedScale * erosionShellScale;
          // rotAxis(v, axis, angle) with the axis in the screen plane (z = 0): unit shell position
          var vx = sr * Math.cos(az), vy = sr * Math.sin(az), vz = zz;
          var d = axX * vx + axY * vy;
          var ux = vx * c + (axY * vz) * sn + axX * d * (1 - c);
          var uy = vy * c + (-axX * vz) * sn + axY * d * (1 - c);
          var uz = vz * c + (axX * vy - axY * vx) * sn;
          // world y is top-down: uy > 0 is the underside. Small caps live in the crown band only;
          // underside caps sink into the body (less protrusion) and shrink a little.
          if (!big) rad *= smoothstep(0.35 + 0.65 * p.detailBand, -0.25 * p.detailBand, uy);
          var sink = p.baseFlatten * smoothstep(-0.1, 0.6, uy);
          rad *= 1 - 0.5 * sink;
          shellRadius *= 1 - 0.4 * sink;
          cx = ux * shellRadius; cy = uy * shellRadius; cz = uz * shellRadius;
          if (rad <= 1e-4 || shellRadius + rad <= core) rad = 0;
          else {
            // a billow lives on ONE sphere of its branch
            var pcx = bx + cx * r, pcy = by + cy * r;
            var selfH = Math.sqrt(Math.max(ownershipCoreSq - (cx * cx + cy * cy), 0)) * r, otherH = 0;
            for (i2 = 0; i2 < count; i2++) {
              if (i2 === i) continue;
              var o2 = i2 * 4;
              if (blobs[o2 + 2] <= 1e-4 || aux[o2 + 3] <= 1e-6 || Math.round(aux[o2]) !== bi) continue;
              var r2 = blobs[o2 + 2] * p.inflation, qx = (pcx - blobs[o2]) / r2, qy = (pcy - blobs[o2 + 1]) / r2;
              var d2 = qx * qx + qy * qy;
              if (d2 < ownershipCoreSq) otherH = Math.max(otherH, Math.sqrt(ownershipCoreSq - d2) * r2);
            }
            rad *= smoothstep(-0.15 * r, 0.05 * r, selfH - otherH);
            if (rad <= 1e-4 || shellRadius + rad <= core) rad = 0;
          }
        }
        T[cj] = cx; T[cj + 1] = cy; T[cj + 2] = cz; T[cj + 3] = rad;
      }
      var pc = row + 20 * 4;
      T[pc] = axX; T[pc + 1] = axY; T[pc + 2] = angle; T[pc + 3] = 0;
    }
    var gl = this.gl;
    gl.activeTexture(gl.TEXTURE8);
    gl.bindTexture(gl.TEXTURE_2D, this._capTex);
    if (count > 0) gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, CAP_COLS, count, gl.RGBA, gl.FLOAT, T, 0);
  };

  CloudRenderer.prototype._aspect = function () {
    var w = this.canvas.width || 1, h = this.canvas.height || 1;
    return h / w;
  };

  CloudRenderer.prototype._allocField = function (w, h, useFloat) {
    var gl = this.gl;
    if (this._tex) gl.deleteTexture(this._tex);
    if (this._ntex) gl.deleteTexture(this._ntex);
    if (this._fbo) gl.deleteFramebuffer(this._fbo);
    if (this._aotex) gl.deleteTexture(this._aotex);
    if (this._aofbo) gl.deleteFramebuffer(this._aofbo);
    this._tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // mipmapped: the shade pass reads blurred levels for the shadow march / contact term (penumbra)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    this._filter = gl.NEAREST;
    if (useFloat) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
    } else {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    }
    this._fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._tex, 0);
    // Corrected visible-surface normals with coverage, mipmapped only for the existing Flatten control.
    this._ntex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._ntex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, useFloat ? gl.RGBA16F : gl.RGBA8, w, h, 0,
                  gl.RGBA, useFloat ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE, null);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, this._ntex, 0);
    gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1]);
    var ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    // AO is evaluated once per field texel, not repeatedly at canvas resolution.
    // A separate byte texture works identically on float and packed field paths.
    this._aotex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._aotex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    this._aofbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._aofbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._aotex, 0);
    gl.drawBuffers([gl.COLOR_ATTACHMENT0]);
    ok = (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) && ok;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return ok;
  };

  /** Set the internal field texture width; height follows the canvas aspect. */
  CloudRenderer.prototype.resize = function (fieldWidth) {
    var w = Math.max(8, Math.round(fieldWidth || 320));
    this.resizeField(w, Math.max(8, Math.round(w * this._aspect())));
  };

  /** Set the internal field texture size explicitly (sprite rendering: the target decides). */
  CloudRenderer.prototype.resizeField = function (w, h) {
    w = Math.max(8, Math.round(w)); h = Math.max(8, Math.round(h));
    if (w === this.stats.fieldW && h === this.stats.fieldH && this._tex) return;
    var ok = this._allocField(w, h, this._floatOk);
    if (!ok && this._floatOk) {
      // Float colour attachment refused: fall back to packed RGBA8.
      this._floatOk = false;
      this._packed = true;
      ok = this._allocField(w, h, false);
    }
    if (!ok) throw new Error('CloudRenderer: could not create the field framebuffer.');
    this.stats.fieldW = w;
    this.stats.fieldH = h;
  };

  function num(v, dflt) { return (typeof v === 'number' && isFinite(v)) ? v : dflt; }

  /** Upload sim state, run field / optional AO / shade passes, draw to the canvas. */
  CloudRenderer.prototype.render = function (sim, look, timeSeconds) {
    // keep the field height in step with the canvas aspect
    var aspect = this._aspect();
    var wantH = Math.max(8, Math.round(this.stats.fieldW * aspect));
    if (wantH !== this.stats.fieldH) this.resize(this.stats.fieldW);
    this._renderTo(sim, look, timeSeconds, null, this.canvas.width, this.canvas.height);
  };

  /**
   * Render a scene into a framebuffer (a sprite): the field is sized to the target, so the
   * shade pass is one shade per texel. Pass look.sky = false for a premultiplied RGBA sprite.
   */
  CloudRenderer.prototype.renderSprite = function (sim, look, timeSeconds, fbo, width, height) {
    this.resizeField(width, height);
    this._renderTo(sim, look, timeSeconds, fbo, width, height);
  };

  CloudRenderer.prototype._renderTo = function (sim, look, timeSeconds, targetFbo, targetW, targetH) {
    var gl = this.gl;
    var t0 = (typeof performance !== 'undefined') ? performance.now() : Date.now();
    look = look || {};
    var billow = Math.max(0, Math.min(10, num(look.billow, 3))), softness = num(look.softness, 1.3), erosion = Math.max(0, Math.min(3, num(look.erosion, 0.35)));
    var inflation = Math.max(0, Math.min(1.5, num(look.inflation, 0.1)));
    var embed = Math.max(0, Math.min(1, num(look.embed, 0.12)));
    var primaryStrength = look.carveEnabled === false ? 0 : Math.max(0, Math.min(3, num(look.primaryCarve, 1.2)));
    var primaryScale = Math.max(0.3, Math.min(4, num(look.primaryScale, 1.8)));
    var sun = num(look.sun, 135), elevation = num(look.elevation, 32), shadow = num(look.shadow, 0.55);
    var bands = num(look.bands, 5), relief = num(look.relief, 1);
    var sky = look.sky !== false, pixelated = look.pixelated !== false;
    var time = num(timeSeconds, 0);
    var aoIntensity = Math.max(0, Math.min(3, num(look.ao, 0.65)));
    var aoRadius = Math.max(0.15, Math.min(2, num(look.aoRadius, 0.8)));
    var aoFalloff = Math.max(0.5, Math.min(4, num(look.aoFalloff, 1.5)));

    var aspect = this.stats.fieldH / this.stats.fieldW;   // world height of the field (width = 1)

    var count = sim ? Math.max(0, Math.min(MAX_BLOBS, sim.blobCount | 0)) : 0;
    var blobs = (sim && sim.blobs && sim.blobs.length >= MAX_BLOBS * 4) ? sim.blobs : this._zeroBlobs;
    var aux = (sim && sim.aux && sim.aux.length >= MAX_BLOBS * 4) ? sim.aux : this._zeroBlobs;
    // reference radii must NOT follow the live parcels: budding / dying / regrowing parcels would
    // rescale the whole height field every frame (visible as a global stutter). Prefer the sim's
    // static reference, fall back to fixed values.
    var maxR = num(sim.refRadius, 0.16) * (1 + inflation);
    var maxParcelRadius = num(sim.maxParcelRadius, num(sim.refRadius, 0.16) * (25 / 12)) * (1 + inflation);

    var depth = num(look.depth, 1);
    // Static control-derived height range: never follow live parcel radii.
    // Include enlarged caps, size compensation, relief, depth and both soft sums.
    var growth = billow > 2 ? Math.sqrt((billow * 0.5) / (1 + 0.07 * (billow - 2))) : 1;
    var lobes = Math.max(0, Math.min(5, num(look.lobes, 4))), lobeSize = Math.max(0.3, Math.min(0.8, num(look.lobeSize, 0.58)));
    var maxCapRadius = Math.max(lobes > 0 ? lobeSize * 1.15 : 0, billow > 2 ? 0.5 * growth : Math.min(0.5, 0.46 * 0.84 * Math.sqrt(billow)));
    var maxCapReach = maxCapRadius + (0.78 - 0.35 * Math.max(0, maxCapRadius - 0.5)) * (1 - embed);
    var materialHeight = Math.max(0.93, maxCapReach) + (maxCapReach > 0.93 ? 0.02 : 0) + 0.07 * Math.max(0, relief);
    var totalPrimaryFraction = 0.6 * Math.pow(primaryStrength / 3, 0.65);
    var compensationBound = 1 / Math.sqrt(1 - totalPrimaryFraction);
    var fieldT = Math.max(0.002, maxR * 0.08 * Math.max(0.2, softness));
    var branchT = Math.max(0.002, maxR * 0.09 * Math.max(0.2, softness) * num(look.blend, 1));
    // Use the preset's static maximum parcel size, including Coverage history.
    var heightUnit = maxR * (1.55 + 0.75 * Math.abs(depth))
                     + maxParcelRadius * materialHeight * compensationBound
                     + fieldT * Math.log(64) + branchT * Math.log(16);

    // ---- pass 1: field ----
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fbo);
    gl.viewport(0, 0, this.stats.fieldW, this.stats.fieldH);
    gl.disable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);
    gl.useProgram(this._fieldProg);
    var fu = this._fieldU;
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this._tile);
    gl.uniform1i(fu.uTile, 1);
    gl.activeTexture(gl.TEXTURE3);
    gl.bindTexture(gl.TEXTURE_3D, look.noiseType === 'Clouds' ? this._ctex : this._vtex);
    gl.uniform1i(fu.uVoronoi, 3);
    gl.activeTexture(gl.TEXTURE5);
    gl.bindTexture(gl.TEXTURE_3D, look.primaryNoiseType === 'Clouds' ? this._ctex : this._vtex);
    gl.uniform1i(fu.uPrimaryNoise, 5);
    // Reuse the existing smooth Clouds bake; erosion has no extra texture asset.
    gl.activeTexture(gl.TEXTURE6);
    gl.bindTexture(gl.TEXTURE_3D, this._ctex);
    gl.uniform1i(fu.uErosionNoise, 6);
    gl.uniform1f(fu.uPrimaryScale, primaryScale);
    gl.uniform1f(fu.uPrimaryInvertNoise, look.primaryInvertNoise === false ? 0 : 1);
    gl.uniform1f(fu.uInflation, inflation);
    gl.uniform1f(fu.uEmbed, embed);
    gl.uniform1f(fu.uInvertNoise, look.invertNoise === false ? 0 : 1);
    gl.uniform1f(fu.uCarve, look.carveEnabled === false ? 0 : Math.max(0, Math.min(1.5, num(look.carve, 0.25))));
    gl.uniform1f(fu.uPrimaryCarve, primaryStrength);
    gl.uniform1f(fu.uCellScale, Math.max(0.6, Math.min(6, num(look.cellScale, 1.2))));
    gl.uniform1f(fu.uCellFlow, Math.max(0, Math.min(3, num(look.cellFlow, 0.65))));
    gl.uniform1f(fu.uFieldStep, 1 / this.stats.fieldW);
    gl.uniform1f(fu.uErosionFlow, Math.max(0, Math.min(0.2, num(look.erosionFlow, 0))));
    this._capTable(blobs, aux, count, time, { billow: billow, erosion: erosion, inflation: 1 + inflation, embed: embed, roll: num(look.roll, 0.6), rollSync: num(look.rollSync, 0),
      lobes: lobes, lobeSize: lobeSize, detailBand: Math.max(0, Math.min(1, num(look.detailBand, 0.5))), baseFlatten: Math.max(0, Math.min(1, num(look.baseFlatten, 0.6))) });
    gl.uniform1i(fu.uCaps, 8);
    gl.uniform4fv(fu.uBlobs, blobs, 0, MAX_BLOBS * 4);
    gl.uniform4fv(fu.uAux, aux, 0, MAX_BLOBS * 4);
    gl.uniform1i(fu.uCount, count);
    gl.uniform1f(fu.uAspect, aspect);
    gl.uniform1f(fu.uTime, time);
    gl.uniform1f(fu.uBillow, billow);
    gl.uniform1f(fu.uRoll, num(look.roll, 0.6));
    gl.uniform1f(fu.uErosion, erosion);
    gl.uniform1f(fu.uRelief, relief);
    gl.uniform1f(fu.uReliefCenter, this._reliefCenter);
    gl.uniform1f(fu.uReference, maxR);
    gl.uniform1f(fu.uSoftness, Math.max(0.2, softness));
    gl.uniform1f(fu.uBlend, num(look.blend, 1));
    gl.uniform1f(fu.uHeightUnit, heightUnit);
    gl.uniform1f(fu.uDepth, depth);
    gl.uniform1f(fu.uPacked, this._packed ? 1 : 0);
    gl.bindVertexArray(this._vao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // ---- pass 2: cavity AO, at the existing field resolution ----
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this._tex);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, this._ntex);
    gl.generateMipmap(gl.TEXTURE_2D);
    if (aoIntensity > 0.00001) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._aofbo);
      gl.viewport(0, 0, this.stats.fieldW, this.stats.fieldH);
      gl.useProgram(this._aoProg);
      // Interpolate sampled heights consistently, independent of display mode.
      // The geometry and final silhouette remain untouched.
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this._tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      this._filter = gl.LINEAR;
      gl.activeTexture(gl.TEXTURE2);
      gl.bindTexture(gl.TEXTURE_2D, this._ntex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      var au = this._aoU;
      gl.uniform1i(au.uField, 0);
      gl.uniform1i(au.uNormal, 2);
      gl.uniform2f(au.uTexel, 1 / this.stats.fieldW, 1 / this.stats.fieldH);
      gl.uniform1f(au.uAspect, aspect);
      gl.uniform1f(au.uHeightUnit, heightUnit);
      gl.uniform1f(au.uPacked, this._packed ? 1 : 0);
      gl.uniform1f(au.uRadius, aoRadius * maxR);
      gl.uniform1f(au.uFalloff, aoFalloff);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    // ---- pass 3: shade ----
    gl.bindFramebuffer(gl.FRAMEBUFFER, targetFbo);
    gl.viewport(0, 0, targetW, targetH);
    gl.useProgram(this._shadeProg);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this._tex);
    var filter = pixelated ? gl.NEAREST : gl.LINEAR;
    if (filter !== this._filter) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
      this._filter = filter;
    }
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, this._ntex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.activeTexture(gl.TEXTURE4);
    gl.bindTexture(gl.TEXTURE_2D, this._aotex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    var az = sun * Math.PI / 180, el = Math.max(8, Math.min(85, elevation)) * Math.PI / 180;
    var lx = Math.cos(az) * Math.cos(el), ly = Math.sin(az) * Math.cos(el), lz = Math.sin(el);
    var su = this._shadeU;
    gl.uniform1i(su.uField, 0);
    gl.uniform1i(su.uOcclusion, 4);
    gl.uniform1i(su.uNormal, 2);
    gl.uniform1f(su.uPatchN, look.patchN ? 1 : 0);
    gl.uniform2f(su.uTexel, 1 / this.stats.fieldW, 1 / this.stats.fieldH);
    gl.uniform3f(su.uLight, lx, ly, lz);
    gl.uniform1f(su.uAspect, aspect);
    gl.uniform1f(su.uHeightUnit, heightUnit);
    gl.uniform1f(su.uShadow, shadow);
    gl.uniform1f(su.uAO, aoIntensity);
    gl.uniform1f(su.uShadowDetail, Math.max(0, Math.min(1, num(look.shadowDetail, 1))));
    var formRadius = Math.max(0.5, Math.min(6, num(look.formRadius, 2.5))) * maxR;   // world units
    gl.uniform1f(su.uFormAO, Math.max(0, Math.min(2, num(look.formAO, 0))));
    gl.uniform1f(su.uFormLod, Math.max(0, Math.log2(formRadius * this.stats.fieldW)));
    gl.uniform1f(su.uFormRange, formRadius * 0.6);
    gl.uniform1f(su.uResScale, Math.max(1, this.stats.fieldW / 320));
    gl.uniform1f(su.uJumpW, 0.05 * maxR);
    gl.uniform1f(su.uPixelated, pixelated ? 1 : 0);
    gl.uniform1f(su.uToon, look.toon ? 1 : 0);
    gl.uniform1f(su.uToneA, num(look.toneA, 0.485));
    gl.uniform1f(su.uToneB, num(look.toneB, 0.89));
    gl.uniform1f(su.uFlatten, num(look.flatten, 0.3));
    gl.uniform1f(su.uInk, num(look.ink, 0.5));
    gl.uniform1f(su.uHighlight, num(look.highlight, 0.68));
    gl.uniform1f(su.uFill, num(look.fill, 0.2));
    gl.uniform1f(su.uDebug, num(look.debug, 0));
    gl.uniform1f(su.uBands, bands);
    gl.uniform1f(su.uSky, sky ? 1 : 0);
    gl.uniform1f(su.uPacked, this._packed ? 1 : 0);
    gl.uniform3f(su.uSkyColor, 0.075, 0.4525, 0.575);   // flat teal (the reference's sky at 0.35)
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);

    this.stats.lastDrawMs = ((typeof performance !== 'undefined') ? performance.now() : Date.now()) - t0;
  };

  CloudRenderer.prototype.dispose = function () {
    var gl = this.gl;
    if (this._tex) gl.deleteTexture(this._tex);
    if (this._ntex) gl.deleteTexture(this._ntex);
    if (this._tile) gl.deleteTexture(this._tile);
    if (this._vtex) gl.deleteTexture(this._vtex);
    if (this._ctex) gl.deleteTexture(this._ctex);
    if (this._capTex) gl.deleteTexture(this._capTex);
    if (this._aotex) gl.deleteTexture(this._aotex);
    if (this._aofbo) gl.deleteFramebuffer(this._aofbo);
    if (this._fbo) gl.deleteFramebuffer(this._fbo);
    if (this._vao) gl.deleteVertexArray(this._vao);
    gl.deleteProgram(this._fieldProg);
    gl.deleteProgram(this._aoProg);
    gl.deleteProgram(this._shadeProg);
    this._tex = this._ntex = this._aotex = this._aofbo = this._tile = this._vtex = this._ctex = this._fbo = this._vao = null;
  };

  window.CloudRenderer = CloudRenderer;
})();

