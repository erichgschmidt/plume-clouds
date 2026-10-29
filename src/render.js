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
    'uniform float uReference;',
    'uniform float uSoftness;',
    'uniform float uHeightUnit;',
    'uniform float uPacked;',
    'uniform float uDepth;',
    'const float TILE_WORLD = ' + TILE_WORLD.toFixed(4) + ';',
    'const int NB = 16;',
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
    'float hash(float x){ return fract(sin(x * 12.9898) * 43758.5453); }',
    'vec3 rotAxis(vec3 p, vec3 a, float t){ float c = cos(t), s = sin(t); return p * c + cross(a, p) * s + a * dot(a, p) * (1.0 - c); }',
    // triplanar read of the billow tile by a sphere normal: the material rides on the rotating skin
    'vec2 materialTile(vec3 p, float seed){',
    '  vec3 w = pow(abs(p), vec3(4.0)); w /= max(w.x + w.y + w.z, 0.001);',
    '  vec2 o = vec2(seed * 0.173, seed * 0.317);',
    '  return textureLod(uTile, p.yz * 0.38 + o, 2.8).gb * w.x + textureLod(uTile, p.xz * 0.38 + o, 2.8).gb * w.y + textureLod(uTile, p.xy * 0.38 + o, 2.8).gb * w.z;',
    '}',
    'void main(){',
    '  vec2 p = vec2(vUv.x, (1.0 - vUv.y) * uAspect);',   // world: y top-down
    // per-branch accumulators: height as a log-sum-exp of its parcels (soft max), coverage as a union
    '  float bH[NB]; float bW[NB]; float bC[NB];',
    '  for(int j = 0; j < NB; j++){ bH[j] = 0.0; bW[j] = 0.0; bC[j] = 0.0; }',
    '  float detail = 0.0;',
    '  float T = max(0.002, uReference * 0.14 * uSoftness);',   // blend temperature (world units)
    '  float floorH = uReference * 1.5;',                        // cloud base: a parcel buried below it is invisible
    '  for(int i = 0; i < ' + MAX_BLOBS + '; i++){',
    '    if(i >= uCount) break;',
    '    vec4 b = uBlobs[i]; vec4 ax = uAux[i];',
    '    if(b.z <= 1e-4 || ax.w <= 1e-6) continue;',
    '    int bi = clamp(int(ax.x + 0.5), 0, NB - 1);',
    '    vec2 q = (p - b.xy) / b.z; float r = b.z; float rho = length(q);',
    '    if(rho > 1.6) continue;',
    // growth direction from the parent parcel (a lone lobe grows up; world y is top-down). The
    // skin rotates about the axis perpendicular to it, in the screen plane: the top of the lobe
    // rolls toward the viewer and down its front, tucks under, and comes back up behind (ring vortex).
    '    int pi = int(ax.z + 0.5);',
    '    vec2 growth = vec2(0.16, -1.0);',
    '    if(pi >= 0 && pi < uCount && pi != i){ vec2 dl = b.xy - uBlobs[pi].xy; if(dot(dl, dl) > 1e-8) growth = dl; }',
    '    growth = normalize(growth); vec3 axis = vec3(growth.y, -growth.x, 0.0);',
    '    float angle = uTime * 0.16 * uRoll * (0.85 + 0.3 * hash(b.w));',
    '    float core = 0.93;',
    '    float sd = (rho - core) * r;',
    '    float coreH = sqrt(max(core * core - dot(q, q), 0.0)) * r;',
    '    float cap = coreH;',
    // a rigid skin of 8..20 sphere caps spread over the whole 3D sphere (Fibonacci-ish). Caps on the
    // back have a reduced projected radius, so they shrink away around the rim instead of popping.
    '    int skinN = 8 + int(floor(hash(b.w + 91.7) * 13.0));',
    '    for(int j = 0; j < 20; j++){',
    '      if(j >= skinN) break;',
    '      float jit = hash(b.w + float(j) * 31.7) - 0.5;',
    '      float zz = 1.0 - 2.0 * (float(j) + 0.5 + jit * 0.55) / float(skinN);',
    '      float az = float(j) * 2.399963 + b.w * 2.7 + jit * 0.8;',
    '      float sr = sqrt(max(1.0 - zz * zz, 0.0));',
    '      vec3 cen = rotAxis(vec3(sr * cos(az), sr * sin(az), zz), axis, angle) * 0.78;',
    '      float rad = mix(0.28, 0.46, hash(b.w + float(j) * 17.0)) * 0.84 * sqrt(clamp(uBillow, 0.0, 2.0));',
    '      float zc = min(cen.z, 0.0);',
    '      float pr = sqrt(max(rad * rad - zc * zc, 0.0));',
    '      if(pr <= 1e-4) continue;',
    '      vec2 dq = q - cen.xy; float dd = dot(dq, dq);',
    '      float sDist = sqrt(dd) - pr;',
    '      float lh = cen.z + sqrt(max(rad * rad - dd, 0.0));',
    '      sd = smin(sd, sDist * r, r * 0.045);',
    '      float join = smoothstep(0.0, rad * 0.38, -sDist);',
    '      cap = -smin(-cap, -max(lh, 0.0) * r * join, r * 0.29);',
    '    }',
    // material rides on the skin: tile read by the inverse-rotated sphere normal
    '    vec3 nrm = normalize(vec3(q, sqrt(max(1.0 - min(dot(q, q), 0.999), 0.001))));',
    '    vec2 tile = materialTile(rotAxis(nrm, axis, -angle), b.w);',
    '    float caps = 1.0 - (1.0 - tile.x) * (1.0 - tile.y * 0.55);',
    '    float envel = 1.0 - smoothstep(0.65, 1.15, rho);',
    // the skin flattens toward the crown: a smooth top, a bumpy rim
    '    cap = mix(cap, coreH + (cap - coreH) * 0.34, smoothstep(0.0, 0.16, core - rho));',
    '    cap += (caps - 0.55) * r * 0.045 * uRelief * envel;',
    // erosion: slowly drifting tufts on the silhouette (world-space tile read, very blurred)
    '    float tuft = textureLod(uTile, p * 2.0 + vec2(uTime * 0.001 * uRoll, 0.0), 4.0).r;',
    '    sd += (tuft - 0.5) * r * 0.018 * uErosion * ax.w;',
    // junction: a child root bridges to its parent parcel with a capsule, only when both are grown and the pair is not over-stretched
    '    float bridgeCap = 0.0;',
    '    if(pi >= 0 && pi < uCount && pi != i && int(uAux[pi].x + 0.5) != bi){',
    '      vec4 pb = uBlobs[pi]; float dist = length(b.xy - pb.xy);',
    '      if(dist < 1.4 * pb.z && dist > 0.0){',
    '        float cr = min(r, pb.z) * 0.62; float cd = sdCapsule(p, b.xy, pb.xy, cr);',
    '        float join = smoothstep(0.5, 1.0, ax.w) * smoothstep(0.5, 1.0, uAux[pi].w) * (1.0 - smoothstep(1.1, 1.4, dist / pb.z));',
    '        sd = mix(sd, smin(sd, cd, r * 0.07), join);',
    '        bridgeCap = sqrt(max(cr * cr - pow(max(0.0, cd + cr), 2.0), 0.0)) * join;',
    '      }',
    '    }',
    // emergence changes burial, never size: a new parcel rises out of the cloud base
    '    float depth = (ax.y - 0.5) * uReference * uDepth * 1.5;',
    '    float h = floorH + max(cap, bridgeCap > 0.0 ? bridgeCap : -r * 4.0) + depth - r * 2.2 * (1.0 - ax.w);',
    '    float cov = (1.0 - smoothstep(-0.002, 0.002, sd)) * smoothstep(0.0, 0.3, ax.w) * smoothstep(floorH - 0.002, floorH + 0.002, h);',
    '    bW[bi] += cov * exp(clamp((h - floorH) / T, -25.0, 18.0));',
    '    bC[bi] = 1.0 - (1.0 - bC[bi]) * (1.0 - cov);',
    '    detail = max(detail, caps * envel);',
    '  }',
    '  float top = 0.0;',
    '  for(int j = 0; j < NB; j++){ bH[j] = max(0.0, floorH + T * log(max(1e-20, bW[j]))); top = max(top, bH[j]); }',
    // coverage-weighted soft max across branches: no winner / runner-up switch, so no seams
    '  float T2 = max(0.002, uReference * 0.15 * uSoftness);',
    '  float den = 0.0; float unc = 1.0; float ovl = 0.0;',
    '  for(int j = 0; j < NB; j++){',
    '    float c = bC[j]; den += c * exp(clamp((bH[j] - top) / T2, -25.0, 0.0));',
    '    unc *= 1.0 - c; ovl += c;',
    '  }',
    '  float height = max(0.0, top + T2 * log(max(1e-20, den)));',
    '  float mask = 1.0 - unc;',
    '  float contact = smoothstep(0.9, 2.2, ovl) * 0.35;',   // overlapping branches: contact darkening
    '  float hN = clamp(height / uHeightUnit, 0.0, 1.0);',
    '  if(uPacked > 0.5){',
    '    float hi = floor(hN * 255.0) / 255.0;',
    '    float lo = fract(hN * 255.0);',
    '    fragColor = vec4(hi, lo, mask, contact);',          // packed: detail dropped, contact in A
    '  } else {',
    '    fragColor = vec4(hN, mask, detail, contact);',
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
    'uniform float uAspect;',
    'uniform float uHeightUnit;', // world units of height per 1.0 in the field texture
    'uniform float uShadow;',
    'uniform float uBands;',
    'uniform float uSky;',
    'uniform float uPacked;',
    'uniform vec3 uSkyColor;',
    'uniform float uDebug;',
    'vec4 fieldAt(vec2 uv){',      // returns (height, mask, detail, contact)
    '  vec4 t = textureLod(uField, uv, 0.0);',
    '  if(uPacked > 0.5) return vec4(t.r + t.g / 255.0, t.b, 0.5, t.a);',
    '  return t;',
    '}',
    'vec4 fieldLod(vec2 uv, float lod){',   // blurred read (penumbra); the packed fallback cannot be filtered
    '  if(uPacked > 0.5) return fieldAt(uv);',
    '  return textureLod(uField, uv, lod);',
    '}',
    // world-space slope, mask-weighted so the silhouette cliff does not bend the normals
    'float gradient(vec2 off){',
    '  vec4 c = fieldAt(vUv), a = fieldAt(vUv - off), b = fieldAt(vUv + off);',
    '  float span = length(off * vec2(1.0, uAspect));',
    '  float wa = smoothstep(0.05, 0.95, a.g), wb = smoothstep(0.05, 0.95, b.g);',
    '  return ((c.r - a.r) * wa + (b.r - c.r) * wb) * uHeightUnit / (span * max(1e-4, wa + wb));',
    '}',
    'float bayer(vec2 p){ ivec2 a = ivec2(mod(p, 4.0)); int n = a.x + 4 * a.y;',
    '  const float m[16] = float[16](0.,8.,2.,10.,12.,4.,14.,6.,3.,11.,1.,9.,15.,7.,13.,5.); return m[n] / 16.0 - 0.5; }',
    // five flat tones, deep blue -> cream, with a short soft edge between bands
    'vec3 palette(float l){',
    '  vec3 deep = vec3(0.10, 0.35, 0.52), blue = vec3(0.30, 0.54, 0.65), cyan = vec3(0.56, 0.73, 0.75), pale = vec3(0.80, 0.86, 0.80), cream = vec3(0.99, 0.97, 0.85);',
    '  float levels = clamp(uBands, 3.0, 5.0); float b = clamp(l, 0.0, 0.999) * (levels - 1.0);',
    '  float band = floor(b) + smoothstep(0.08, 0.92, fract(b));',
    '  float q = band / (levels - 1.0) * 4.0; int idx = int(min(q, 3.0)); float f = q - float(idx);',
    '  vec3 a = idx == 0 ? deep : idx == 1 ? blue : idx == 2 ? cyan : pale;',
    '  vec3 c = idx == 0 ? blue : idx == 1 ? cyan : idx == 2 ? pale : cream;',
    '  return mix(a, c, f);',
    '}',
    'void main(){',
    '  vec4 f = fieldAt(vUv); vec2 t = uTexel;',
    '  vec4 sky = (uSky > 0.5) ? vec4(uSkyColor, 1.0) : vec4(0.0);',
    '  if(uDebug > 0.5){ float cv = fract(f.x * 25.0); fragColor = vec4(vec3(f.x * 2.0 * (0.5 + 0.5 * step(0.5, cv))), 1.0); return; }',
    '  if(f.g < 0.01){ fragColor = sky; return; }',
    '  float dx = gradient(vec2(t.x * 2.0, 0.0));',
    '  float dy = gradient(vec2(0.0, t.y * 2.0));',
    '  vec3 n = normalize(vec3(-dx, -dy, 1.0)); float lambert = dot(n, uLight);',
    // bounce fill from opposite the sun, low over the horizon: the shaded side keeps a gradient
    '  float bounce = max(0.0, dot(n, normalize(vec3(-uLight.x, -uLight.y, 0.25))));',
    // self-shadow: march toward the sun over the height field, reading blurrier mips with distance (penumbra)
    '  float occ = 0.0; vec2 dir = normalize(uLight.xy + vec2(1e-5, 0.0));',
    '  float h0 = f.r * uHeightUnit;',
    '  for(int i = 1; i <= 16; i++){',
    '    float dist = float(i) * 0.006; float pen = 0.007 + dist * 0.30;',
    '    vec2 coord = vUv + dir * dist / vec2(1.0, uAspect);',
    '    vec4 caster = fieldLod(coord, log2(1.0 + float(i) * 0.4));',
    '    float ray = h0 + dist * uLight.z / max(0.15, length(uLight.xy));',
    '    float sh = smoothstep(-pen, pen, caster.r * uHeightUnit - ray - 0.010) * caster.g;',
    '    occ = max(occ, sh * (1.0 - float(i) / 21.0));',
    '  }',
    '  float contact = fieldLod(vUv, 1.0).a * 0.025;',
    '  float light = 0.18 + 0.84 * pow(max(0.0, lambert), 0.85) + 0.20 * bounce - uShadow * (occ * 0.36 + contact);',
    '  light += bayer(gl_FragCoord.xy) * 0.012;',
    '  vec3 cloud = palette(light);',
    // thin cream rim where the silhouette faces the sun
    '  float edge = 1.0 - min(min(fieldAt(vUv + vec2(t.x, 0.0)).g, fieldAt(vUv - vec2(t.x, 0.0)).g), min(fieldAt(vUv + vec2(0.0, t.y)).g, fieldAt(vUv - vec2(0.0, t.y)).g));',
    '  cloud = mix(cloud, vec3(1.0, 0.98, 0.86), edge * max(0.0, lambert) * 0.20);',
    '  fragColor = (uSky > 0.5) ? vec4(mix(sky.rgb, cloud, f.g), 1.0) : vec4(cloud * f.g, f.g);',
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
      'uErosion', 'uRelief', 'uReference', 'uSoftness', 'uHeightUnit', 'uPacked', 'uDepth']);
    this._shadeProg = link(gl, VS, SHADE_FS);
    this._shadeU = uniforms(gl, this._shadeProg, ['uField', 'uTexel', 'uLight', 'uAspect', 'uHeightUnit',
      'uShadow', 'uBands', 'uSky', 'uPacked', 'uSkyColor', 'uDebug']);

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
    var billow = num(look.billow, 1), softness = num(look.softness, 1.3), erosion = num(look.erosion, 0.2);
    var sun = num(look.sun, 135), elevation = num(look.elevation, 32), shadow = num(look.shadow, 0.55);
    var bands = num(look.bands, 5), relief = num(look.relief, 1);
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
    var maxR = num(sim.refRadius, 0.16);

    var depth = num(look.depth, 1);
    // tallest possible point: cloud base (1.5 R) + skin (1.2 r) + depth offset; never clip it
    var heightUnit = maxR * (3.0 + 0.8 * depth);

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
    gl.uniform1f(fu.uReference, maxR);
    gl.uniform1f(fu.uSoftness, Math.max(0.2, softness));
    gl.uniform1f(fu.uHeightUnit, heightUnit);
    gl.uniform1f(fu.uDepth, depth);
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
    var az = sun * Math.PI / 180, el = Math.max(8, Math.min(85, elevation)) * Math.PI / 180;
    var lx = Math.cos(az) * Math.cos(el), ly = Math.sin(az) * Math.cos(el), lz = Math.sin(el);
    var su = this._shadeU;
    gl.uniform1i(su.uField, 0);
    gl.uniform2f(su.uTexel, 1 / this.stats.fieldW, 1 / this.stats.fieldH);
    gl.uniform3f(su.uLight, lx, ly, lz);
    gl.uniform1f(su.uAspect, aspect);
    gl.uniform1f(su.uHeightUnit, heightUnit);
    gl.uniform1f(su.uShadow, shadow);
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
    if (this._tile) gl.deleteTexture(this._tile);
    if (this._fbo) gl.deleteFramebuffer(this._fbo);
    if (this._vao) gl.deleteVertexArray(this._vao);
    gl.deleteProgram(this._fieldProg);
    gl.deleteProgram(this._shadeProg);
    this._tex = this._tile = this._fbo = this._vao = null;
  };

  window.CloudRenderer = CloudRenderer;
})();
