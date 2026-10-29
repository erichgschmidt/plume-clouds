/* CloudRenderer — WebGL2 two-pass cloud renderer (field + shade).
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
 * Billow texture: the surface lumps come from a 256x256 RGBA8 "billow tile" baked once at
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
    var secondary = billowTile(desc), out = new Uint16Array(n * n * 4);
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var i = y * n + x, k = i * 4, u = x / n, v = y / n;
      var nz = 0.3 + 0.7 * pnoise(u * 11, v * 11, 17, 11) + 0.16 * pnoise(u * 27, v * 27, 17, 27) + 0.06 * pnoise(u * 59, v * 59, 17, 59);
      out[k] = f16(nz);
      out[k + 1] = f16(primary[i]);
      out[k + 2] = f16(secondary[i]);
      out[k + 3] = f16(1);
    }
    return out;
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

  var NOISE = [
    'float hash3(vec3 p){',
    '  p = fract(p * vec3(0.1031, 0.1030, 0.0973));',
    '  p += dot(p, p.yxz + 33.33);',
    '  return fract((p.x + p.y) * p.z);',
    '}',
    'float vnoise(vec3 p){',
    '  vec3 i = floor(p); vec3 f = fract(p);',
    '  f = f * f * (3.0 - 2.0 * f);',
    '  float a = hash3(i), b = hash3(i + vec3(1,0,0)), c = hash3(i + vec3(0,1,0)), d = hash3(i + vec3(1,1,0));',
    '  float e = hash3(i + vec3(0,0,1)), g = hash3(i + vec3(1,0,1)), h = hash3(i + vec3(0,1,1)), k = hash3(i + vec3(1,1,1));',
    '  return mix(mix(mix(a,b,f.x), mix(c,d,f.x), f.y), mix(mix(e,g,f.x), mix(h,k,f.x), f.y), f.z);',
    '}',
    'float fbm3(vec3 p){',
    '  float v = 0.0; float a = 0.5; float n = 0.0;',
    '  for(int o = 0; o < 3; o++){ v += a * vnoise(p); n += a; p = p * 2.07 + vec3(17.1, 9.3, 3.7); a *= 0.5; }',
    '  return v / n;',
    '}'
  ].join('\n');

  // ---------- Pass 1: field ----------
  var FIELD_FS = [
    '#version 300 es',
    'precision highp float;',
    'in vec2 vUv;',
    'out vec4 fragColor;',
    'uniform vec4 uBlobs[' + MAX_BLOBS + '];',
    'uniform vec4 uAux[' + MAX_BLOBS + '];',
    'uniform int uCount;',
    'uniform sampler2D uTile;',
    'uniform float uAspect;',
    'uniform float uTime;',
    'uniform float uBillow;',
    'uniform float uRoll;',
    'uniform float uErosion;',
    'uniform float uRelief;',
    'uniform float uSmoothK;',
    'uniform float uDomeR;',
    'uniform float uHeightUnit;',
    'uniform float uTexelWorld;',
    'uniform float uMeanR;',
    'uniform float uPacked;',
    'uniform float uDepth;',
    'const float TILE_WORLD = ' + TILE_WORLD.toFixed(4) + ';',
    'const int NB = 16;',
    NOISE,
    'float smin(float a, float b, float k){',
    '  float h = max(k - abs(a - b), 0.0) / k;',
    '  return min(a, b) - h * h * k * 0.25;',
    '}',
    'float sdCapsule(vec2 p, vec2 a, vec2 b, float r){',
    '  vec2 pa = p - a, ba = b - a;',
    '  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);',
    '  return length(pa - ba * h) - r;',
    '}',
    'vec2 seedOffset(float s){ return vec2(fract(s * 7.31 + 0.17), fract(s * 3.77 + 0.59)); }',
    'const float MAT_K = 1.7;',   // tile repeats per 1.7 parcel radii: a few large sub-lobes per lobe
    'float domeH(float d, float R){',
    '  float Rb = R * uDomeR;',
    '  float t = clamp(-d / Rb, 0.0, 1.0);',
    '  return sqrt(max(t * (2.0 - t), 0.0)) * Rb;',          // sphere cap over the branch SDF
    '}',
    'float reliefH(float d, vec2 tv){',
    '  float ra = clamp(tv.x / 0.22, 0.0, 1.0), rb = clamp(tv.y / 0.22, 0.0, 1.0);',
    '  float comp = max(0.0, tv.x + ((ra + rb - ra * rb) * 0.22 - tv.x) * (0.4 + 0.6 * uBillow));',
    '  float edge = min(1.0, -d / (0.055 * TILE_WORLD));',
    '  float env = sqrt(max(edge * (2.0 - edge), 0.0));',
    '  return comp * TILE_WORLD * env * uRelief * 1.2;',
    '}',
    'void main(){',
    '  vec2 p = vec2(vUv.x, (1.0 - vUv.y) * uAspect);',   // world: y top-down
    '  float k = max(uSmoothK, 1e-4);',
    // per-branch accumulators
    '  float dB[NB]; float wB[NB]; float rB[NB]; float zB[NB]; vec2 tB[NB]; float cB[NB];',
    '  for(int j = 0; j < NB; j++){ dB[j] = 1e3; wB[j] = 0.0; rB[j] = 0.0; zB[j] = 0.0; tB[j] = vec2(0.0); cB[j] = 0.0; }',
    // nearest bridge capsule (child root -> parent parcel) for seamless junction blending
    '  float brD = 1e3; float brT = 0.0; int brChild = -1; int brParent = -1;',
    '  for(int i = 0; i < ' + MAX_BLOBS + '; i++){',
    '    if(i >= uCount) break;',
    '    vec4 b = uBlobs[i];',
    '    if(b.z <= 1e-5) continue;',
    '    vec4 ax = uAux[i];',
    '    int bi = clamp(int(ax.x + 0.5), 0, NB - 1);',
    '    vec2 q = p - b.xy; float rEff0 = b.z;',
    // material coords: tile rides with the parcel (origin = blob centre, offset by its seed)
    // scoop roll: the billow texture flows outward from the parcel centre and curls under at the
    // rim (zero flow at centre and rim, fastest half-way: a ring vortex seen from above). Two
    // phases crossfaded (flow mapping) so the distortion never accumulates.
    '    vec2 dq = q / max(rEff0, 1e-4); float rr = length(dq); vec2 rd = dq / max(rr, 1e-4);',
    '    float roll = sin(clamp(rr, 0.0, 1.0) * 3.14159) * 0.35 * uRoll / MAT_K;',   // small offsets only: larger ones shear the tile into rings
    '    float ph = uTime * 0.14 + b.w; float fA = fract(ph), fB = fract(ph + 0.5); float wPh = abs(2.0 * fA - 1.0);',
    '    vec2 base = q / (rEff0 * MAT_K) + seedOffset(b.w);',   // material coords in parcel-radius units: sub-lobes scale with the lobe
    '    vec2 muvA = base - rd * roll * fA;',
    '    vec2 muvB = base - rd * roll * fB + vec2(0.37, 0.61);',
    '    vec3 ts = mix(textureLod(uTile, muvA, 1.75).rgb, textureLod(uTile, muvB, 1.75).rgb, wPh);',
    '    vec3 tsSil = mix(textureLod(uTile, muvA, 2.5).rgb, textureLod(uTile, muvB, 2.5).rgb, wPh);',
    '    float rEff = b.z * (1.0 + 0.03 * (ts.r - 0.76));',
    // lobe caps poke out of the silhouette; scaled by the parcel's size so a newborn / regrowing
    // parcel (r -> 0) does not pop in at full bump size
    '    float bump = (tsSil.g + 0.6 * tsSil.b) * TILE_WORLD * 0.3 * uBillow * smoothstep(0.0, 0.6 * uMeanR, b.z);',
    '    float di = length(q) - rEff - bump;',
    // root parcel: bridge capsule to its parent-branch parcel, smooth-min'd into the CHILD branch
    '    int pi = int(ax.z + 0.5);',
    '    if(ax.w > 0.001 && pi >= 0 && pi < uCount && pi != i){',
    '      vec4 pb = uBlobs[pi];',
    '      float cr = 0.6 * min(b.z, pb.z) * ax.w;',
    '      vec2 pa = p - b.xy, ba = pb.xy - b.xy;',
    // a faded (regrowing) end or an over-stretched pair would draw a long thin rod: skip the capsule then
    '      if(min(b.z, pb.z) < 0.45 * max(b.z, pb.z) || dot(ba, ba) > 2.0 * (b.z + pb.z) * (b.z + pb.z)) ba = vec2(0.0);',
    '      float tc = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);',
    '      float dc = length(pa - ba * tc) - cr;',
    '      di = smin(di, dc, k * 0.6);',
    '      if(dc < brD){ brD = dc; brT = tc; brChild = bi; brParent = clamp(int(uAux[pi].x + 0.5), 0, NB - 1); }',
    '    }',
    '    float w = exp(-clamp(di, -3.0 * k, 4.0 * k) / k);',
    '    wB[bi] += w; rB[bi] += w * b.z; tB[bi] += w * ts.gb; zB[bi] += w * ax.y;',   // z is weight-blended along the branch
    '    dB[bi] = smin(dB[bi], di, k);',
    // per-parcel sphere cap, smooth-max'd per branch: every parcel reads as its own billow (the
    // branch-wide dome alone plateaus wherever parcels overlap deeply)
    '    float Rc = rEff * 1.08; float hc = 0.85 * sqrt(max(Rc * Rc - dot(q, q), 0.0));',   // near-hemispheres: steep flanks, distinct billows
    // ring-vortex roll (mushroom cloud): sub-puffs follow meridians of the parent sphere. Each
    // is born small at the apex, rolls outward and down its side growing as it goes, and tucks
    // under at the bottom where it shrinks away; then it re-emerges at the apex. Azimuth is fixed
    // per sub-puff (front half only), so the top always flows out and the underside pulls in.
    '    for(int sidx = 0; sidx < 7; sidx++){',
    '      float fs = float(sidx);',
    '      float phi = 0.25 + 2.64 * fract(b.w * 5.13 + fs * 0.381);',               // azimuth across the front half
    '      float psi = fract(uTime * 0.045 * uRoll + fract(b.w * 3.7 + fs * 0.713)) * 3.14159;',   // 0 apex .. pi bottom
    '      vec3 P = vec3(sin(psi) * cos(phi), -cos(psi), sin(psi) * sin(phi));',    // y down on screen: -cos(psi) is the top at psi=0
    '      float grow = sin(psi);',                                                   // small at the apex, full at the sides
    '      float tuck = 1.0 - smoothstep(2.3, 3.0, psi);',                            // shrinks away as it tucks under
    '      float born = smoothstep(0.0, 0.5, psi);',
    '      float sz = rEff * (0.3 + 0.15 * fract(b.w * 9.1 + fs * 0.532)) * (0.4 + 0.6 * grow) * tuck * born;',
    '      vec2 c = P.xy * rEff * 0.9;',
    '      float dd = length(q - c);',
    '      float base = 0.85 * sqrt(max(Rc * Rc - dot(c, c), 0.0));',   // main sphere height under the sub-puff
    '      float hs = sqrt(max(sz * sz - dd * dd, 0.0)) + base;',          // a full sphere sitting ON the main cap
    '      hc = -smin(-hc, -hs, k * 0.15);',
    '      di = smin(di, dd - sz * 0.95, k * 0.25);',
    '    }',
    '    cB[bi] = -smin(-cB[bi], -hc, k);',
    '  }',
    // world-space erosion, slowly drifting: ragged tufts instead of clean necks
    '  vec2 drift = vec2(uTime * 0.012, uTime * 0.008);',
    '  float wf = 1.2 / max(uMeanR, 0.02);',
    '  float e = fbm3(vec3((p + drift) * wf, uTime * 0.05 + 3.1));',
    '  float eros = uErosion * (e - 0.5) * uMeanR * 0.6;',
    // per-branch height; the tallest covering branch wins the pixel (hard occlusion)
    '  float hB[NB]; float lbB[NB];',
    '  int win = -1; float hWin = -1.0; float dWin = 1e3; float hSecond = -1e3;',
    '  for(int j = 0; j < NB; j++){',
    '    float dj = dB[j] + eros; dB[j] = dj;',
    '    float Rj = (wB[j] > 0.0) ? rB[j] / wB[j] : uMeanR;',
    '    vec2 tvj = (wB[j] > 0.0) ? tB[j] / wB[j] : vec2(0.0);',
    '    lbB[j] = tvj.x; zB[j] = (wB[j] > 0.0) ? zB[j] / wB[j] : 0.0;',
    '    float dome = -smin(-cB[j], -0.3 * domeH(dj, Rj), k);',   // caps carry the interior, the SDF dome carries the eroded silhouette
    // the depth offset rolls off toward the silhouette so a front lobe slopes down onto the one
    // behind it (a full-height cliff at the edge shaded as a hard dark outline)
    '    float zf = smoothstep(0.0, 1.2 * Rj, -dj);',
    '    hB[j] = dome + reliefH(dj, tvj) + zB[j] * uDepth * zf;',
    '    if(dj < 0.0){ if(hB[j] > hWin){ hSecond = hWin; hWin = hB[j]; win = j; dWin = dj; } else if(hB[j] > hSecond) hSecond = hB[j]; }',
    '  }',
    '  float hw = 0.0; float mask = 0.0; float lb = 0.0; float contact = 0.0;',
    '  if(win >= 0){',
    '    hw = hWin; lb = clamp(lbB[win] / 0.22, 0.0, 1.0);',
'    float ks = max(1.0 * uDepth, 1e-4);',                                  // soft seam: smooth-max with the runner-up when the z gap is small
'    if(hSecond > -1e2){ float hs = max(ks - abs(hWin - hSecond), 0.0) / ks; hw = hWin + hs * hs * ks * 0.25; }',
    // junction: the bridge capsule is already in the child's SDF and z is blended along the branch; the
    // soft-max seam above handles the remaining height gap (an explicit capsule height blend carved trenches)
    // contact: a branch in FRONT (higher z) whose silhouette is within a few texels casts a contact shadow on this one
    '    for(int j = 0; j < NB; j++){',
    '      if(j == win || wB[j] <= 0.0 || zB[j] <= zB[win] + 0.02) continue;',
    '      float cz = clamp((zB[j] - zB[win]) / 0.3, 0.2, 1.0);',   // deeper gap -> longer, softer contact shadow
    '      float cs = 1.0 - smoothstep(-1.0 * uTexelWorld, (4.0 + 10.0 * cz) * uTexelWorld, dB[j]);',
    '      contact = max(contact, cs * cs);',
    '    }',
    '  }',
    // coverage mask = union of all branches (never the winner alone, or interior branch silhouettes would read as rims)
    '  float dn = 1e3; for(int j = 0; j < NB; j++) dn = min(dn, dB[j]);',
    '  mask = smoothstep(0.0, 5.0 * uTexelWorld, -dn);',
    '  float h = clamp(hw / uHeightUnit, 0.0, 1.0);',
    '  if(uPacked > 0.5){',
    '    float hi = floor(h * 255.0) / 255.0;',
    '    float lo = fract(h * 255.0);',
    '    fragColor = vec4(hi, lo, mask, contact);',          // packed: billow dropped, contact in A
    '  } else {',
    '    fragColor = vec4(h, mask, lb, contact);',
    '  }',
    '}'
  ].join('\n');

  // ---------- Pass 2: shade ----------
  var SHADE_FS = [
    '#version 300 es',
    'precision highp float;',
    'in vec2 vUv;',
    'out vec4 fragColor;',
    'uniform sampler2D uField;',
    'uniform vec2 uTexel;',
    'uniform vec3 uLight;',       // unit vector, screen space (x right, y up, z toward viewer)
    'uniform float uSinEl;',
    'uniform float uTanEl;',
    'uniform float uHeightScale;',// height 1.0 == this many texels
    'uniform float uShadow;',
    'uniform float uJump;',
    'uniform float uBands;',
    'uniform float uSky;',
    'uniform float uPacked;',
    'uniform vec3 uSkyColor;',
    'uniform float uDebug;',
    'vec4 fieldAt(vec2 uv){',      // returns (height, mask, billow, contact)
    '  vec4 t = textureLod(uField, uv, 0.0);',
    '  if(uPacked > 0.5) return vec4(t.r + t.g / 255.0, t.b, 0.5, t.a);',
    '  return t;',
    '}',
    'vec4 fieldLod(vec2 uv, float lod){',   // blurred read (penumbra); the packed fallback cannot be filtered
    '  if(uPacked > 0.5) return fieldAt(uv);',
    '  return textureLod(uField, uv, lod);',
    '}',
    'vec3 palette(float t){',
    '  vec3 c0 = vec3(0.247, 0.478, 0.592);', // #3f7a97 shadow blue
    '  vec3 c1 = vec3(0.435, 0.639, 0.722);', // #6fa3b8 mid blue
    '  vec3 c2 = vec3(0.663, 0.824, 0.839);', // #a9d2d6 light cyan
    '  vec3 c3 = vec3(0.914, 0.925, 0.788);', // #e9ecc9 lit cream
    '  vec3 c4 = vec3(0.965, 0.953, 0.890);', // #f6f3e3 rim highlight
'  if(t < 0.30) return mix(c0, c1, t / 0.30);',
    '  if(t < 0.55) return mix(c1, c2, (t - 0.30) / 0.25);',
'  if(t < 0.93) return mix(c2, c3, (t - 0.55) / 0.38);',
    '  return mix(c3, c4, (t - 0.93) / 0.07);',
    '}',
    'void main(){',
    '  vec4 f = fieldAt(vUv);',
    '  vec4 sky = (uSky > 0.5) ? vec4(uSkyColor, 1.0) : vec4(0.0);',
    '  if(uDebug > 0.5){ float cv = fract(f.x * 25.0); fragColor = vec4(vec3(f.x * 2.0 * (0.5 + 0.5 * step(0.5, cv))), 1.0); return; }',
    '  if(f.y < 0.08){ fragColor = sky; return; }',
    '  float h0 = f.x;',
    '  float hL = fieldAt(vUv - vec2(uTexel.x, 0.0)).x + fieldAt(vUv - vec2(2.0 * uTexel.x, 0.0)).x;',
    '  float hR = fieldAt(vUv + vec2(uTexel.x, 0.0)).x + fieldAt(vUv + vec2(2.0 * uTexel.x, 0.0)).x;',
    '  float hD = fieldAt(vUv - vec2(0.0, uTexel.y)).x + fieldAt(vUv - vec2(0.0, 2.0 * uTexel.y)).x;',
    '  float hU = fieldAt(vUv + vec2(0.0, uTexel.y)).x + fieldAt(vUv + vec2(0.0, 2.0 * uTexel.y)).x;',
    '  vec3 n = normalize(vec3(-(hR - hL) / 6.0 * uHeightScale, -(hU - hD) / 6.0 * uHeightScale, 1.0));',
    '  float ndl = dot(n, uLight);',
    // flat-facing areas sit in the light-cyan band; slopes toward the sun go cream, away go blue
    '  float dl = ndl - uSinEl;',
    '  float light = clamp(0.55 + dl * (dl > 0.0 ? 0.7 : 1.1), 0.0, 1.0);',
    // bounce / under light from the side opposite the sun, low over the horizon: the shaded
    // hemisphere keeps a gradient instead of going flat, so the puffs read as spheres
    '  vec3 fillDir = normalize(vec3(-uLight.xy, 0.45));',
    '  float bounce = max(0.0, dot(n, fillDir));',
    '  light += 0.12 * bounce * bounce * (1.0 - smoothstep(0.0, 0.6, dl));',
'  float rimness = 1.0 - smoothstep(0.3, 1.0, f.y);',                      // low height == near the silhouette
'  light += 0.2 * rimness * smoothstep(0.25, 0.8, ndl);',                  // sun-facing rim catches light

    // self-shadow: march toward the sun over the height field
    '  vec2 dir = normalize(uLight.xy + vec2(1e-5, 0.0));',
    '  float occ = 0.0;',
    // soft: accumulate occlusion over a longer march, each sample fading with distance, and
    // blend from the nearest-layer gate rather than cutting it (a step() here gave hard shadow edges)
    '  float stepTex = 1.75; float maxDist = 8.0 * stepTex;',
    '  for(int s = 1; s <= 8; s++){',
    '    float dist = float(s) * stepTex;',
    '    vec4 fa = fieldLod(vUv + dir * uTexel * dist, 1.0 + dist / maxDist * 1.5);',   // blur grows with distance: penumbra
    '    float need = h0 + uTanEl * dist / uHeightScale;',
    '    float rise = clamp(fa.x - need, 0.0, uJump) / max(uJump, 1e-4);',   // 0..1 within the near-layer window
    '    float nearLayer = 1.0 - smoothstep(0.5 * uJump, 1.5 * uJump, fa.x - h0);',   // far layers handled by the contact term
    '    float fall = 1.0 - dist / maxDist; fall *= fall;',
    '    occ += rise * fa.y * nearLayer * fall;',
    '  }',
    '  occ /= 2.2;',
    '  light *= 1.0 - uShadow * 0.5 * smoothstep(0.0, 1.0, occ);',
    '  float cw = fieldLod(vUv, 2.0).w;',
    '  light *= 1.0 - uShadow * 0.4 * smoothstep(0.0, 1.0, cw);',   // contact shadow where a front plume overlaps this one (blurred)
    // rim: the outermost texels sink toward the shadow blue and fade into the sky
    '  light *= mix(0.3, 1.0, smoothstep(0.1, 0.9, f.y));',
    '  float bands = max(uBands, 2.0);',
    '  vec2 tc = floor(vUv / uTexel);',
    '  float dith = mod(tc.x + 2.0 * mod(tc.y, 2.0), 4.0) / 4.0 - 0.375;',   // 2x2 ordered dither, +-3/8 band
    '  float q = floor(light * bands + 0.5 + dith * 0.4) / bands;',
    '  float alpha = smoothstep(0.1, 0.5, f.y);',
    '  fragColor = mix(sky, vec4(palette(q), 1.0), alpha);',
    '}'
  ].join('\n');

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
      'uErosion', 'uRelief', 'uSmoothK', 'uDomeR', 'uHeightUnit', 'uTexelWorld', 'uMeanR', 'uPacked', 'uDepth']);
    this._shadeProg = link(gl, VS, SHADE_FS);
    this._shadeU = uniforms(gl, this._shadeProg, ['uField', 'uTexel', 'uLight', 'uSinEl', 'uTanEl', 'uHeightScale',
      'uShadow', 'uJump', 'uBands', 'uSky', 'uPacked', 'uSkyColor', 'uDebug']);

    // billow tile (static asset; baked once)
    this._tile = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._tile);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, TILE, TILE, 0, gl.RGBA, gl.HALF_FLOAT, makeTile());
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_2D);

    this._vao = gl.createVertexArray();
    this._tex = null;
    this._fbo = null;
    this._filter = null;
    this._zeroBlobs = new Float32Array(MAX_BLOBS * 4);
    this.resize(320);
  }

  CloudRenderer.MAX_BLOBS = MAX_BLOBS;

  CloudRenderer.prototype._aspect = function () {
    var w = this.canvas.width || 1, h = this.canvas.height || 1;
    return h / w;
  };

  CloudRenderer.prototype._allocField = function (w, h, useFloat) {
    var gl = this.gl;
    if (this._tex) gl.deleteTexture(this._tex);
    if (this._fbo) gl.deleteFramebuffer(this._fbo);
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
    var ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return ok;
  };

  /** Set the internal field texture width; height follows the canvas aspect. */
  CloudRenderer.prototype.resize = function (fieldWidth) {
    var w = Math.max(8, Math.round(fieldWidth || 320));
    var h = Math.max(8, Math.round(w * this._aspect()));
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

  /** Upload sim state, run field + shade passes, draw to the canvas. */
  CloudRenderer.prototype.render = function (sim, look, timeSeconds) {
    var gl = this.gl;
    var t0 = (typeof performance !== 'undefined') ? performance.now() : Date.now();
    look = look || {};
    var billow = num(look.billow, 0.5), softness = num(look.softness, 0.3), erosion = num(look.erosion, 0.4);
    var sun = num(look.sun, 120), elevation = num(look.elevation, 17), shadow = num(look.shadow, 0.8);
    var bands = num(look.bands, 18), relief = num(look.relief, 0.5);
    var sky = look.sky !== false, pixelated = look.pixelated !== false;
    var time = num(timeSeconds, 0);

    // keep the field height in step with the canvas aspect
    var aspect = this._aspect();
    var wantH = Math.max(8, Math.round(this.stats.fieldW * aspect));
    if (wantH !== this.stats.fieldH) this.resize(this.stats.fieldW);

    var count = sim ? Math.max(0, Math.min(MAX_BLOBS, sim.blobCount | 0)) : 0;
    var blobs = (sim && sim.blobs && sim.blobs.length >= MAX_BLOBS * 4) ? sim.blobs : this._zeroBlobs;
    var aux = (sim && sim.aux && sim.aux.length >= MAX_BLOBS * 4) ? sim.aux : this._zeroBlobs;
    // reference radii must NOT follow the live parcels: budding / dying / regrowing parcels would
    // rescale the whole height field every frame (visible as a global stutter). Prefer the sim's
    // static reference, fall back to fixed values.
    var maxR = num(sim.refRadius, 0.16), meanR = num(sim.meanRadius, maxR * 0.7);

    var smoothK = meanR * (0.4 + 0.8 * softness) * 0.9;
    var depth = num(look.depth, 0.5);
    var zScale = depth * 3.0 * maxR;   // world units of height between z=0 and z=1 (0.5 -> 1.5*maxR)
    var heightUnit = maxR * 4.5 + zScale;   // never clip the dome of the largest parcel   // world units that map to height 1.0 in the field texture

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
    gl.uniform4fv(fu.uBlobs, blobs, 0, MAX_BLOBS * 4);
    gl.uniform4fv(fu.uAux, aux, 0, MAX_BLOBS * 4);
    gl.uniform1i(fu.uCount, count);
    gl.uniform1f(fu.uAspect, aspect);
    gl.uniform1f(fu.uTime, time);
    gl.uniform1f(fu.uBillow, billow);
    gl.uniform1f(fu.uRoll, num(look.roll, 0.6));
    gl.uniform1f(fu.uErosion, erosion);
    gl.uniform1f(fu.uRelief, relief);
    gl.uniform1f(fu.uSmoothK, smoothK);
    gl.uniform1f(fu.uDomeR, 2.0 + 1.5 * softness);
    gl.uniform1f(fu.uHeightUnit, heightUnit);
    gl.uniform1f(fu.uDepth, zScale);
    gl.uniform1f(fu.uTexelWorld, 1 / this.stats.fieldW);
    gl.uniform1f(fu.uMeanR, meanR);
    gl.uniform1f(fu.uPacked, this._packed ? 1 : 0);
    gl.bindVertexArray(this._vao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // ---- pass 2: shade ----
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.useProgram(this._shadeProg);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this._tex);
    gl.generateMipmap(gl.TEXTURE_2D);
    var filter = pixelated ? gl.NEAREST : gl.LINEAR;
    if (filter !== this._filter) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
      this._filter = filter;
    }
    var az = sun * Math.PI / 180, el = Math.max(2, Math.min(88, elevation)) * Math.PI / 180;
    var lx = Math.cos(az) * Math.cos(el), ly = Math.sin(az) * Math.cos(el), lz = Math.sin(el);
    var su = this._shadeU;
    gl.uniform1i(su.uField, 0);
    gl.uniform2f(su.uTexel, 1 / this.stats.fieldW, 1 / this.stats.fieldH);
    gl.uniform3f(su.uLight, lx, ly, lz);
    gl.uniform1f(su.uSinEl, lz);
    gl.uniform1f(su.uTanEl, Math.tan(el));
    // height 1.0 == heightUnit world units == that many texels, exaggerated for steeper shading
    gl.uniform1f(su.uHeightScale, Math.max(2, heightUnit * this.stats.fieldW * 0.9));   // ~true world slopes: spheres shade as spheres
    gl.uniform1f(su.uShadow, shadow);
    gl.uniform1f(su.uDebug, num(look.debug, 0));
    gl.uniform1f(su.uJump, 0.3 * zScale / heightUnit);   // height-field jump clamp (field units)
    gl.uniform1f(su.uBands, bands);
    gl.uniform1f(su.uSky, sky ? 1 : 0);
    gl.uniform1f(su.uPacked, this._packed ? 1 : 0);
    gl.uniform3f(su.uSkyColor, 0x0a / 255, 0x6f / 255, 0x8b / 255);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);

    this.stats.lastDrawMs = ((typeof performance !== 'undefined') ? performance.now() : Date.now()) - t0;
  };

  CloudRenderer.prototype.dispose = function () {
    var gl = this.gl;
    if (this._tex) gl.deleteTexture(this._tex);
    if (this._tile) gl.deleteTexture(this._tile);
    if (this._fbo) gl.deleteFramebuffer(this._fbo);
    if (this._vao) gl.deleteVertexArray(this._vao);
    gl.deleteProgram(this._fieldProg);
    gl.deleteProgram(this._shadeProg);
    this._tex = this._tile = this._fbo = this._vao = null;
  };

  window.CloudRenderer = CloudRenderer;
})();
