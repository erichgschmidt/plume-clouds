/*
 * PuffRenderer: the cloud rebuilt from ONE primitive used recursively.
 *
 * A puff is a sphere (or disc / drop / box / diamond: a different metric) sitting on its parent's
 * shell. The sim moves the roots (sim.blobs); every root grows `children` puffs of `ratio` its
 * radius, each of those grows the same again, down to `levels`. A child lives one cycle: born on
 * the upper shell, carried round by the parent's roll, swelling and subsiding, then reseeded. Depth
 * is real: a child on the back of its parent sits lower in the height field and is hidden by it.
 *
 * Many clouds, one field: render(clouds, time, sky) takes [{ sim, look }] and draws them all in
 * one soft union. Per-cloud `look` sets the FORM (children, ratio, levels, life, embed, depth,
 * shear, wind, lean, prim, primAmt, zoom, panX, panY, far). The `sky` look sets the STYLE for
 * everything (softness, noise, light, haze, dither, bands, cirrus...). render(sim, look, time) still
 * works for one cloud (look is both).
 *
 * Budget: MAX_SPH spheres. When the tree would overflow, the deepest level fades out uniformly
 * (radius scaled, then skipped) instead of being truncated, so the picture degrades without pops.
 *
 * Field pass -> three RGBA16F targets: (height, detail, stack, mask), (fresh, dispersal, anchor.xy),
 * (band, depth weight, 0, 1). Shade pass -> screen. Classic script, no build.
 */
(function () {
  'use strict';
  var MAX_SPH = 4096;
  var PRIMS = ['sphere', 'disc', 'drop', 'box', 'diamond'];

  function hash(x) { var s = Math.sin(x * 12.9898 + 78.233) * 43758.5453; return s - Math.floor(s); }
  function smoothstep(a, b, x) { var t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function num(v, d) { return typeof v === 'number' && isFinite(v) ? v : d; }

  var VS = '#version 300 es\nprecision highp float;\nout vec2 vUv;\nvoid main(){ vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2); vUv = p; gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0); }';

  // sphere texture rows: 0 (x, y, r, z0); 1 (stack, detail, fresh, dispersal);
  // 2 (anchor x, anchor y, stretch, prim id + amt/2); 3 (wind x, wind y, band, depth weight: cloud dw + puff dw / 4 packed as floor + fract)
  var FIELD_FS = '#version 300 es\nprecision highp float; precision highp sampler2D;\n' +
  'uniform sampler2D uSph; uniform int uCount; uniform float uAspect; uniform float uT, uCap;\n' +
  'in vec2 vUv; layout(location = 0) out vec4 o; layout(location = 1) out vec4 o2; layout(location = 2) out vec4 o3;\n' +
  'void main(){\n' +
  '  vec2 p = vec2(vUv.x, (1.0 - vUv.y) * uAspect);\n' +
  '  float m = -1e9, acc = 0.0, cIdx = 0.0;                 // online log-sum-exp of the heights; cIdx: the cloud of the highest puff\n' +
  '  // the per-puff attributes blend over a band four times wider than the height union: where one dome\n' +
  '  // crosses another the shape stays crisp, but stack, band, freshness and depth weight no longer jump\n' +
  '  // along the crease (that jump drew a ring round every puff)\n' +
  '  float m2 = -1e9, acc2 = 0.0, dSum = 0.0, sSum = 0.0, fSum = 0.0, xSum = 0.0, bSum = 0.0, wSum = 0.0, rSum = 0.0; vec2 anc = vec2(0.0);\n' +
  '  float sm = -1e9, sacc = 0.0;                            // silhouette (soft union of r - dist)\n' +
  '  float insC = -1.0;                                      // the cloud of the first puff that contains this pixel\n' +
  '  float T = uT, T2 = uT * 4.0;\n' +
  '  for(int i = 0; i < 4096; i++){\n' +
  '    if(i >= uCount) break;\n' +
  '    vec4 s = texelFetch(uSph, ivec2(i, 0), 0);\n' +
  '    vec2 d = p - s.xy; float r = s.z;\n' +
  '    vec4 sh = texelFetch(uSph, ivec2(i, 2), 0);   // anchor.xy, stretch, prim\n' +
  '    float rr = r * max(1.0, sh.z);   // coarse reject (the stretch can reach sh.z radii along the wind)\n' +
  '    if(dot(d, d) > rr * rr * 2.5) continue;\n' +
  '    vec4 wd = texelFetch(uSph, ivec2(i, 3), 0);   // wind.xy, band, depth weight\n' +
  '    if(sh.z != 1.0){ float along = dot(d, wd.xy), across = d.x * wd.y - d.y * wd.x; d = vec2(along / sh.z, across * sqrt(sh.z)); }\n' +
  '    int prim = int(floor(sh.w + 0.01)); float pa = (sh.w - floor(sh.w + 0.01)) * 2.0;\n' +
  '    if(prim == 1) d.y *= 1.0 + 1.5 * pa;\n' +
  '    else if(prim == 2) d.x *= 1.0 + 2.0 * pa * max(0.0, -d.y) / r;\n' +
  '    else if(prim == 3){ vec2 q = d * d; d *= mix(1.0, sqrt(sqrt(dot(q, q))) / max(length(d), 1e-6), pa); }\n' +
  '    else if(prim == 4) d *= mix(1.0, (abs(d.x) + abs(d.y)) / max(length(d), 1e-6), pa);\n' +
  '    float d2 = dot(d, d);\n' +
  '    if(d2 > r * r * 2.25) continue;\n' +
  '    float dist = sqrt(d2);\n' +
  '    // the skirt outside the radius dies off continuously before the 1.5 r cutoff (a penalty that diverges\n' +
  '    // there), so nothing is lost abruptly at the boundary: a skirt still above a neighbour used to drop\n' +
  '    // out at the cutoff and leave a second circular ledge round the puff\n' +
  '    float tt = clamp((dist - r) / (0.5 * r), 0.0, 0.995), pen = r * tt * tt / (1.0 - tt);\n' +
  '    float e = (r - dist - pen) / T;\n' +
  '    if(e > sm){ sacc = sacc * exp(sm - e) + 1.0; sm = e; } else sacc += exp(e - sm);\n' +
  '    // a puff\'s height ramps on past its radius; another cloud\'s ramp must not cross a cloud this pixel is\n' +
  '    // inside, or an occluding cloud draws a steep strip (a dark line) over the cloud behind it\n' +
  '    float ci = floor(wd.w); bool inside = d2 < r * r;\n' +
  '    // where any puff contains the pixel only containing puffs make the surface: a skirt lives only in the\n' +
  '    // fringe outside every footprint, so silhouette and surface agree (a front puff\'s skirt used to be the\n' +
  '    // surface over a rear puff\'s footprint and was cut off at that rear puff\'s edge)\n' +
  '    if(!inside && insC >= 0.0) continue;\n' +
  '    if(inside && insC < 0.0){ insC = ci; if(acc > 0.0){ m = -1e9; acc = 0.0; m2 = -1e9; acc2 = 0.0; dSum = 0.0; sSum = 0.0; fSum = 0.0; xSum = 0.0; bSum = 0.0; wSum = 0.0; rSum = 0.0; anc = vec2(0.0); } }\n' +
  '    vec4 a = texelFetch(uSph, ivec2(i, 1), 0);\n' +
  '    // profile, continuous in height AND slope from the centre out through the skirt (a slope step at\n' +
  '    // the radius drew a thin dark arc with a lighter strip outside it): the sphere is kept to 0.9 r\n' +
  '    // and continued along its own tangent (slope -2.06) through the rim into the skirt; Cap mixes\n' +
  '    // toward a parabola, whose rim slope -2 already matches its skirt\n' +
  '    float u = dist / r;\n' +
  '    float sph = u < 0.9 ? sqrt(1.0 - u * u) : 0.43589 - (u - 0.9) * 2.0647;\n' +
  '    float par = u < 1.0 ? 1.0 - u * u : -2.0 * (u - 1.0);\n' +
  '    float h = s.w + r * mix(sph, par, uCap) - pen;\n' +
  '    float w, rim = 1.0 - smoothstep(0.0, 0.3, 1.0 - dist / r);   // this puff\'s own rim: 1 at the edge, 0 a third of a radius in\n' +
  '    if(h > m){ acc = acc * exp((m - h) / T) + 1.0; cIdx = floor(wd.w); m = h; } else acc += exp((h - m) / T);\n' +
  '    if(h > m2){ w = exp((m2 - h) / T2); acc2 = acc2 * w + 1.0; dSum = dSum * w + a.y; sSum = sSum * w + a.x; fSum = fSum * w + a.z; xSum = xSum * w + a.w; anc = anc * w + sh.xy; bSum = bSum * w + wd.z; wSum = wSum * w + fract(wd.w) * 4.0; rSum = rSum * w + rim; m2 = h; }\n' +
  '    else { w = exp((h - m2) / T2); acc2 += w; dSum += w * a.y; sSum += w * a.x; fSum += w * a.z; xSum += w * a.w; anc += w * sh.xy; bSum += w * wd.z; wSum += w * fract(wd.w) * 4.0; rSum += w * rim; }\n' +
  '  }\n' +
  '  float H = (acc > 0.0) ? m + T * log(acc) : -1.0;\n' +
  '  float sil = (sacc > 0.0) ? (sm + log(sacc)) * T : -1.0;\n' +
  '  float mask = smoothstep(-0.5 * T, 0.5 * T, sil);\n' +
  '  float ia = acc2 > 0.0 ? 1.0 / acc2 : 0.0;\n' +
  '  o = vec4(H, dSum * ia, sSum * ia, mask);\n' +
  '  o2 = vec4(acc > 0.0 ? fSum * ia : 1.0, xSum * ia, anc * ia);\n' +
  '  o3 = vec4(bSum * ia, acc > 0.0 ? wSum * ia : 1.0, cIdx, rSum * ia);\n' +
  '}';

  var SHADE_FS = '#version 300 es\nprecision highp float;\n' +
  'uniform sampler2D uField; uniform sampler2D uAux; uniform sampler2D uAux2; uniform vec2 uTexel; uniform float uAspect; uniform vec3 uLight;\n' +
  'uniform float uHighlight, uFill, uBands, uNoise, uNoiseScale, uNoise2, uNoise2Scale, uNoiseBias, uFlow, uTime, uRef, uPixelated, uAnchor;\n' +
  '// per-cloud style, indexed by the cloud of the highest puff: A = (depth weight, haze, stack shade, dither), B = (shadow, base shade, noise scale, normal smooth)\n' +
  'uniform vec4 uStyleA[32]; uniform vec4 uStyleB[32];\n' +
  'uniform float uAtmos, uDepthFall, uCirrus, uCirrusScale, uCirrusAngle, uCirrusFlow, uDissolve, uDotSize;\n' +
  'uniform vec3 uSkyColor;\n' +
  'uniform float uOverhead, uRim, uPuffRim, uContact, uCavity;\n' +
  'uniform vec4 uCam;   // camera x, camera z, horizon (field y), cirrus altitude; w <= 0: no camera (the flat veil)\n' +
  'in vec2 vUv; out vec4 fragColor;\n' +
  // simplex-ish 2D noise (Ashima-style, compact)
  'vec3 mod289(vec3 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }\n' +
  'vec2 mod289(vec2 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }\n' +
  'vec3 permute(vec3 x){ return mod289(((x * 34.0) + 1.0) * x); }\n' +
  'float snoise(vec2 v){\n' +
  '  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n' +
  '  vec2 i = floor(v + dot(v, C.yy)); vec2 x0 = v - i + dot(i, C.xx);\n' +
  '  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n' +
  '  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i);\n' +
  '  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n' +
  '  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0); m = m * m; m = m * m;\n' +
  '  vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;\n' +
  '  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n' +
  '  vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n' +
  '  return 130.0 * dot(m, g);\n' +
  '}\n' +
  'float fbm(vec2 p){ return snoise(p) + 0.5 * snoise(p * 2.03 + 7.1) + 0.25 * snoise(p * 4.07 + 3.3); }\n' +
  'float bayer(vec2 p){ vec2 q = mod(floor(p), 4.0); float m[16]; m[0]=0.;m[1]=8.;m[2]=2.;m[3]=10.;m[4]=12.;m[5]=4.;m[6]=14.;m[7]=6.;m[8]=3.;m[9]=11.;m[10]=1.;m[11]=9.;m[12]=15.;m[13]=7.;m[14]=13.;m[15]=5.; return m[int(q.y) * 4 + int(q.x)] / 16.0 - 0.5; }\n' +
  'vec3 palette(float l){\n' +
  '  vec3 deep = vec3(0.10, 0.35, 0.52), blue = vec3(0.30, 0.54, 0.65), cyan = vec3(0.56, 0.73, 0.75), pale = vec3(0.80, 0.86, 0.80), cream = vec3(0.99, 0.97, 0.85);\n' +
  '  float levels = clamp(uBands, 3.0, 5.0); float b = clamp(l, 0.0, 0.999) * (levels - 1.0);\n' +
  '  float band = floor(b) + smoothstep(0.08, 0.92, fract(b));\n' +
  '  float q = band / (levels - 1.0) * 4.0; int idx = int(min(q, 3.0)); float f = q - float(idx);\n' +
  '  vec3 a = idx == 0 ? deep : idx == 1 ? blue : idx == 2 ? cyan : pale;\n' +
  '  vec3 c = idx == 0 ? blue : idx == 1 ? cyan : idx == 2 ? pale : cream;\n' +
  '  return mix(a, c, f);\n' +
  '}\n' +
  // the sky behind everything: flat colour plus an optional cirrus streak layer (wind-stretched
  // noise, thresholded into the two palest palette tones)
  'vec3 sky(vec2 uv){\n' +
  '  vec3 col = uSkyColor;\n' +
  '  if(uCirrus > 0.001){\n' +
  '    vec2 w = vec2(uv.x, (1.0 - uv.y) * uAspect);\n' +
  '    float near = 1.0;\n' +
  '    if(uCam.w > 0.0){\n' +
  '      float dy = uCam.z - w.y; if(dy <= 0.004) return col;   // below the horizon\n' +
  '      float z = uCam.w / dy;\n' +
  '      w = vec2((w.x - 0.5) * z + uCam.x, z + uCam.y) * 0.5;\n' +
  '      near = smoothstep(0.0, 0.12, dy) * (1.0 - 0.5 * uAtmos * smoothstep(0.25, 0.02, dy));   // thins into the horizon haze\n' +
  '    }\n' +
  '    float ca = cos(uCirrusAngle), sa = sin(uCirrusAngle);\n' +
  '    vec2 q = vec2(w.x * ca - w.y * sa, w.x * sa + w.y * ca) * uCirrusScale;\n' +
  '    float t = uTime * uCirrusFlow;\n' +
  '    float n = fbm(vec2(q.x * 0.18 + t, q.y * 2.6 + t * 0.1)) * 0.5 + 0.15 * snoise(vec2(q.x * 0.7 - t * 0.7, q.y * 7.0));\n' +
  '    float thin = smoothstep(0.55 - 0.5 * uCirrus, 1.05 - 0.3 * uCirrus, n + bayer(floor(vUv / uTexel) + 3.0) * 0.08);\n' +
  '    col = mix(col, palette(0.72), thin * 0.7 * near);\n' +
  '  }\n' +
  '  return col;\n' +
  '}\n' +
  // displaced height at a uv (the one surface term)
  'vec2 hAt(vec2 uv, vec2 uv0, float bias, float namp){\n' +
  '  vec4 f = texture(uField, uv);\n' +
  '  // a sample outside the silhouette, or on another cloud (an occluding edge is a rim too, not a slope)\n' +
  '  float ins = (f.a < 0.5 || abs(texture(uAux2, uv).b - texture(uAux2, uv0).b) > 0.5 || abs(f.r - texture(uField, uv0).r) > uRef * 0.25) ? 0.0 : 1.0;   // outside, another cloud, or across a height step: an occluding edge\n' +
  '  if(ins < 0.5) f = texture(uField, uv0);   // never read height outside the silhouette (the rim)\n' +
  '  vec2 w0 = (vec2(uv.x, (1.0 - uv.y) * uAspect) - uAnchor * texture(uAux, uv0).ba) / uRef;   // noise rides with the parcel\n' +
  '  float t = uTime * uFlow;\n' +
  '  float n1 = fbm(w0 * uNoiseScale + vec2(t, t * 0.37));\n' +
  '  float n2 = snoise(w0 * uNoise2Scale + vec2(-t * 0.6, t * 0.8) + 11.0) + 0.5 * snoise(w0 * uNoise2Scale * 2.1 + vec2(t * 0.3, -t * 0.5) + 23.0);\n' +
  '  return vec2(f.r + uRef * 0.5 * f.g * bias * namp * (uNoise * n1 + uNoise2 * n2), ins);\n' +
  '}\n' +
  '// a sample outside the silhouette is extrapolated through the centre from its opposite (a one-sided\n' +
  '// slope), not flattened: flattening gave every edge a band one footprint wide with its own normal\n' +
  '// regime, which read as a second outline\n' +
  'float pairL(vec2 a, vec2 b, float hc){ return a.y > 0.5 ? a.x : (b.y > 0.5 ? 2.0 * hc - b.x : hc); }\n' +
  'vec3 normalAt(vec2 uv, vec2 dx, vec2 dy, float wx, float wy, float bias, float namp, out float edge){\n' +
  '  // near the rim the footprint shrinks (halved while a sample falls outside, down to one texel) so\n' +
  '  // the ring inside the silhouette keeps the rim\'s own steep slope instead of a softened one\n' +
  '  vec2 L, R, U, D; float k = 1.0;\n' +
  '  for(int i = 0; i < 3; i++){\n' +
  '    L = hAt(uv - dx * k, uv, bias, namp); R = hAt(uv + dx * k, uv, bias, namp); U = hAt(uv - dy * k, uv, bias, namp); D = hAt(uv + dy * k, uv, bias, namp);\n' +
  '    if(L.y + R.y + U.y + D.y > 3.5 || dx.x * k <= uTexel.x * 1.01) break;\n' +
  '    k = max(k * 0.5, uTexel.x / dx.x);\n' +
  '  }\n' +
  '  wx *= k; wy *= k;\n' +
  '  edge = min(1.0, (1.0 - k) + (L.y + R.y + U.y + D.y > 3.5 ? 0.0 : 0.6));   // 0 well inside .. 1 at the rim\n' +
  '  float hc = hAt(uv, uv, bias, namp).x;\n' +
  '  float hL = pairL(L, R, hc), hR = pairL(R, L, hc), hU = pairL(U, D, hc), hD = pairL(D, U, hc);\n' +
  '  return normalize(vec3(-(hR - hL) / wx, (hD - hU) / wy, 1.0));   // world y is down; uv y is up\n' +
  '}\n' +
  'void main(){\n' +
  '  vec2 uv = (uPixelated > 0.5) ? (floor(vUv / uTexel) + 0.5) * uTexel : vUv;\n' +
  '  vec4 f = texture(uField, uv);\n' +
  '  vec4 ax = texture(uAux, uv);\n' +
  '  vec4 bx = texture(uAux2, uv);   // band, puff depth weight, cloud index\n' +
  '  int ci = clamp(int(bx.b + 0.5), 0, 31); vec4 sA = uStyleA[ci], sB = uStyleB[ci];\n' +
  '  float dis = sA.w * ax.g;   // dispersing puffs dissolve into the pixel grid\n' +
  '  float th = dis > 0.001 ? mix(0.5, (bayer(floor(vUv / (uTexel * uDotSize)) + 7.0) + 0.5) * 0.9 + 0.05, dis) : 0.5;\n' +
  '  if(f.a * (1.0 - uDissolve * dis) < th){ fragColor = vec4(sky(uv), 1.0); return; }   // a strongly dispersing puff also loses interior pixels (wisps dissolve)\n' +
  '  // depth weight: 1 near .. 0 far. Far volumes: softer normal, weaker shadow, less noise, bluer\n' +
  '  float dw = clamp(bx.g, 0.0, 1.0), far = uDepthFall * (1.0 - dw);\n' +
  '  float s = 1.0 + sB.w * 2.0 + far * 3.0;   // normal footprint in texels\n' +
  '  vec2 dx = vec2(uTexel.x * s, 0.0), dy = vec2(0.0, uTexel.y * s);\n' +
  '  float wx = 2.0 * uTexel.x * s, wy = 2.0 * uTexel.y * s * uAspect;   // world units\n' +
  '  float namp = (1.0 - 0.6 * far) * sB.z;\n' +
  '  // noise bias: the macro (undisplaced) light decides where the noise lives (-1 shadow only .. +1 light only)\n' +
  '  float edge;\n' +
  '  vec3 n0 = normalAt(uv, dx, dy, wx, wy, 0.0, namp, edge);\n' +
  '  // under the camera the view pitches up toward the top of the frame, so the sun turns with it:\n' +
  '  // a cloud near the horizon is lit from above, one straight overhead shows its underside with\n' +
  '  // the light coming from beyond it\n' +
  '  vec3 Lv = uLight;\n' +
  '  if(uCam.w > 0.0 && uOverhead > 0.0){\n' +
  '    float p = atan(max(0.0, uCam.z - (1.0 - uv.y) * uAspect)) * uOverhead, cp = cos(p), sp = sin(p);\n' +
  '    float up = -uLight.y, tz = uLight.z;   // screen-up and toward-the-viewer parts (field y is down)\n' +
  '    Lv = vec3(uLight.x, -(up * cp + tz * sp), tz * cp - up * sp);\n' +
  '  }\n' +
  '  float l0 = dot(n0, Lv);\n' +
  '  float bias = uNoiseBias > 0.0 ? mix(1.0, smoothstep(-0.2, 0.5, l0), uNoiseBias) : mix(1.0, smoothstep(0.5, -0.2, l0), -uNoiseBias);\n' +
  '  vec3 n = normalAt(uv, dx, dy, wx, wy, bias, namp, edge);\n' +
  '  // the rim turns toward the viewer: the dome edge is otherwise a dark ring that reads as an outline;\n' +
  '  // the same at a puff\'s own rim inside the cloud, where one dome falls steeply over the puff behind it\n' +
  '  n = normalize(mix(n, vec3(0.0, 0.0, 1.0), max(uRim * edge, uPuffRim * bx.a)));\n' +
  '  // haze: an old, mixed parcel softens (flatter normal, less direct light, fainter edge)\n' +
  '  float haze = sA.y * (1.0 - ax.r);\n' +
  '  n = normalize(mix(n, vec3(0.0, 0.0, 1.0), 0.7 * haze + 0.4 * far));\n' +
  '  float lambert = dot(n, Lv);\n' +
  '  float bounce = max(0.0, dot(n, normalize(vec3(-Lv.x, -Lv.y, 0.25))));\n' +
  '  // contact shadow: march toward the light; a rise steeper than the light\'s slope means the puff in\n' +
  '  // front shades this pixel (its dark rim continues into a shadow instead of ending in a line)\n' +
  '  float occ = 0.0;\n' +
  '  if(uContact > 0.0){\n' +
  '    vec2 lxy = vec2(Lv.x, -Lv.y); float ll = length(lxy);   // toward the light in uv (world y is down, uv y is up)\n' +
  '    if(ll > 1e-3){\n' +
  '      vec2 ld = lxy / ll; float slope = Lv.z / ll, stepW = uTexel.x * 1.5;\n' +
  '      for(int k = 1; k <= 8; k++){\n' +
  '        float dW = stepW * float(k);\n' +
  '        vec4 fk = texture(uField, uv + vec2(ld.x, ld.y / uAspect) * dW);\n' +
  '        if(fk.a > 0.5) occ = max(occ, (fk.r - f.r) / dW - slope);\n' +
  '      }\n' +
  '    }\n' +
  '  }\n' +
  '  float contact = uContact * smoothstep(0.0, 1.5, occ);\n' +
  '  // cavity: the surface below the mean of its surroundings a few texels out is a valley between puffs;\n' +
  '  // its cancelling slopes face the viewer and would catch full light, so less reaches it\n' +
  '  float cav = 0.0;\n' +
  '  if(uCavity > 0.0){\n' +
  '    float cs = 3.0 + 3.0 * sB.w; vec2 cx = vec2(uTexel.x * cs, 0.0), cy = vec2(0.0, uTexel.y * cs), cd = vec2(uTexel.x, uTexel.y) * cs * 0.7071;\n' +
  '    // a valley needs higher ground on BOTH sides (per axis the lower of the two neighbours), so a rim,\n' +
  '    // which is higher on its inward side only, is not one\n' +
  '    float cavv = 0.0; vec2 offs[4]; offs[0] = cx; offs[1] = cy; offs[2] = cd; offs[3] = vec2(cd.x, -cd.y);\n' +
  '    for(int k = 0; k < 4; k++){ vec4 fa = texture(uField, uv + offs[k]), fb = texture(uField, uv - offs[k]); if(fa.a > 0.5 && fb.a > 0.5) cavv = max(cavv, min(fa.r, fb.r) - f.r); }\n' +
  '    cav = smoothstep(0.0, 0.5, cavv / (uRef * 0.04 * cs / 3.0));\n' +
  '  }\n' +
  '  float cavity = uCavity * cav;\n' +
  '  float band = sB.y * bx.r;\n' +
  '  float stack = sA.z * f.b;\n' +
  '  float direct = 0.84 * pow(max(0.0, lambert), mix(1.5, 0.55, uHighlight)) * (1.0 - 0.7 * band) * (1.0 - 0.5 * stack);\n' +
  '  float ambient = (0.18 + uFill * bounce) * (1.0 - band) * (1.0 - 0.8 * stack);\n' +
  '  direct *= (1.0 - contact) * (1.0 - 0.6 * cavity); ambient *= (1.0 - 0.5 * contact) * (1.0 - 0.7 * cavity);\n' +
  '  float light = ambient + direct * (1.0 - sB.x * (1.0 - 0.6 * far) * smoothstep(0.1, -0.2, lambert));\n' +
  '  light = mix(light, 0.45, 0.5 * haze);\n' +
  '  light += bayer(floor(vUv / uTexel)) * 0.012;\n' +
  '  vec3 cloud = palette(light);\n' +
  '  cloud = mix(cloud, uSkyColor, uAtmos * (1.0 - clamp(sA.x, 0.0, 1.0)));   // atmospheric perspective between clouds\n' +
  '  float soft = dis > 0.001 ? 1.0 : smoothstep(0.5, 0.5 + 0.45 * haze, f.a);   // a hazy parcel loses its hard edge\n' +
  '  fragColor = vec4(mix(sky(uv), cloud, soft), 1.0);\n' +
  '}';

  function compile(gl, type, src) {
    var sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
    return sh;
  }
  function program(gl, fs) {
    var p = gl.createProgram(); gl.attachShader(p, compile(gl, gl.VERTEX_SHADER, VS)); gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    return p;
  }
  function uniforms(gl, p, names) { var u = {}; names.forEach(function (n) { u[n] = gl.getUniformLocation(p, n); }); return u; }

  function PuffRenderer(canvas) {
    var gl = this.gl = canvas.getContext('webgl2', { antialias: false, alpha: false });
    if (!gl) throw new Error('WebGL2 required');
    gl.getExtension('EXT_color_buffer_float');
    this.canvas = canvas;
    this._field = program(gl, FIELD_FS); this._shade = program(gl, SHADE_FS);
    this._fu = uniforms(gl, this._field, ['uSph', 'uCount', 'uAspect', 'uT', 'uCap']);
    this._su = uniforms(gl, this._shade, ['uField', 'uAux', 'uAux2', 'uTexel', 'uAspect', 'uLight', 'uHighlight', 'uFill', 'uBands', 'uNoise', 'uNoiseScale', 'uNoise2', 'uNoise2Scale', 'uNoiseBias', 'uFlow', 'uTime', 'uRef', 'uPixelated', 'uAnchor', 'uStyleA', 'uStyleB', 'uAtmos', 'uDepthFall', 'uCirrus', 'uCirrusScale', 'uCirrusAngle', 'uCirrusFlow', 'uVeil', 'uSkyColor', 'uDissolve', 'uDotSize', 'uCam', 'uOverhead', 'uRim', 'uPuffRim', 'uContact', 'uCavity']);
    this._sphData = new Float32Array(MAX_SPH * 4 * 4);
    this._sphTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._sphTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, MAX_SPH, 4, 0, gl.RGBA, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    this._fieldTex = gl.createTexture(); this._auxTex = gl.createTexture(); this._aux2Tex = gl.createTexture(); this._fbo = gl.createFramebuffer();
    this._w = 0; this._h = 0;
    this.resize(240);
    this.count = 0;
    this.degrade = 1;   // 1 = the full tree fitted; below 1 the deepest level is faded by this much
  }

  // field resolution: `width` texels across, height by the canvas aspect
  PuffRenderer.prototype.resize = function (width, height) {
    var gl = this.gl, c = this.canvas, asp = c.height / c.width;
    var w = Math.max(32, width | 0), h = Math.max(32, height ? height | 0 : Math.round(w * asp));
    if (w === this._w && h === this._h) return;
    this._w = w; this._h = h;
    [this._fieldTex, this._auxTex, this._aux2Tex].forEach(function (tex) {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    });
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._fieldTex, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, this._auxTex, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT2, gl.TEXTURE_2D, this._aux2Tex, 0);
    gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2]);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  };

  // Per-cloud form settings resolved from its look (every transform in one place).
  // Order of the view transforms on a root: Scale about the base line -> Lean by height -> Pan.
  function form(cloud, idx) {
    var look = cloud.look || {}, sim = cloud.sim;
    var wa = num(look.wind, 0) * Math.PI / 180, zoom = clamp(num(look.zoom, 1), 0.1, 4);
    var baseY = num(sim.baseY, 0.5), topY = num(sim.topY, 0), prim = Math.max(0, PRIMS.indexOf(look.prim));
    // camera (the sky): the cloud sits in the world at lateral x, distance z and altitude h (world
    // units: screen units at distance 1), s world units per sim unit; it is projected toward the
    // horizon line with scale f / z. flat: how much of the sim's height is depth instead (a sheet
    // lies in a plane that recedes, span world units deep), so far rows converge on the horizon.
    var C = look.cam || null;
    if (C) zoom = clamp(C.s * C.f / Math.max(0.05, C.z), 0.05, 8);
    return {
      cam: C ? { x: C.x, z: C.z, h: C.h, s: C.s, f: C.f, hor: C.hor, flat: clamp(num(C.flat, 0), 0, 1), k: num(C.span, 0) / Math.max(1e-3, baseY - topY), spanS: Math.max(1e-3, baseY - topY) } : null,
      sim: sim, idx: Math.min(31, idx | 0), zoom: zoom, pivX: num(sim.cx, 0.5), pivY: baseY, panX: num(look.panX, 0), panY: num(look.panY, 0),
      ref: (sim.refRadius || 0.08) * zoom,
      shear: Math.max(0, num(look.shear, 0)), shearBias: clamp(num(look.shearBias, 0), -1, 1), wx: Math.cos(wa), wy: -Math.sin(wa), lean: num(look.lean, 0),
      prim: prim, pa: clamp(num(look.primAmt, 1), 0, 1), primPacked: prim + clamp(num(look.primAmt, 1), 0, 1) * 0.5,
      children: Math.max(0, Math.round(num(look.children, 4))), ratio: clamp(num(look.ratio, 0.42), 0.1, 0.8),
      levels: clamp(Math.round(num(look.levels, 3)), 1, 3), life: Math.max(0, num(look.life, 1)), embed: clamp(num(look.embed, 0.78), 0.3, 1),
      depthScale: num(look.depth, 1), roll: num(look.roll, 1),
      // band: crown (0) to base (1) in the cloud's own frame, after Scale and Pan
      baseT: baseY + num(look.panY, 0), spanT: Math.max(1e-3, (baseY - topY) * zoom), baseFall: Math.max(0.05, num(look.baseFall, 0.7)),
      dw: clamp(num(look.far, 1), 0, 1),   // depth weight: 1 near .. 0 far
      zOff: C ? -(C.z - 0.5) * 2.0 : (clamp(num(look.far, 1), 0, 1) - 1) * 0.6   // far clouds sit behind near ones in the height field; under the camera by distance, spaced wider than a near cloud's own depth
    };
  }

  // Build the puff tree for every cloud, breadth first across clouds (every root, then every
  // child, then every grandchild) so no cloud starves another of its skin.
  PuffRenderer.prototype._tree = function (clouds, time) {
    var D = this._sphData, n = 0;
    var LEVEL_DETAIL = [0.25, 0.6, 1.0];
    function put(x, y, r, z0, stack, detail, fresh, dis, stretch, anx, any, primPacked, wx, wy, band, dw) {
      if (n >= MAX_SPH || r <= 1e-4) return false;
      var o = n * 4, o2 = (MAX_SPH + n) * 4, o3 = (MAX_SPH * 2 + n) * 4, o4 = (MAX_SPH * 3 + n) * 4;
      D[o] = x; D[o + 1] = y; D[o + 2] = r; D[o + 3] = z0;
      D[o2] = stack; D[o2 + 1] = detail; D[o2 + 2] = fresh; D[o2 + 3] = dis;
      D[o3] = anx; D[o3 + 1] = any; D[o3 + 2] = stretch; D[o3 + 3] = primPacked;
      D[o4] = wx; D[o4 + 1] = wy; D[o4 + 2] = band; D[o4 + 3] = dw;
      n++; return true;
    }
    var queue = [], q, j, c, F;
    // roots
    for (c = 0; c < clouds.length; c++) {
      F = form(clouds[c], c);
      var sim = F.sim, B = sim.blobs, A = sim.aux, S = sim.spin, Dt = sim.detail, STR = sim.stretch || null;
      var count = Math.min(sim.blobCount | 0, 128), baseStart = num(sim.baseStart, count);
      for (var i = 0; i < count; i++) {
        var o = i * 4, r = B[o + 2], link = A[o + 3];
        if (r <= 1e-4 || link <= 1e-6) continue;
        // the silhouette ignores depth, so burial alone cannot hide a parcel: it grows in and shrinks
        // out with its link (no pop at spawn or evaporation), and an evaporating one also sinks into
        // the body so the shrink is mostly hidden
        var lk = link * (2 - link);
        r *= lk;
        var ax = S[o], ay = S[o + 1], az = S[o + 2], al = Math.sqrt(ax * ax + ay * ay + az * az);
        if (al < 1e-6) { ax = 0; ay = 0; az = 1; } else { ax /= al; ay /= al; az /= al; }
        // the reservoir's low detail value means 'no small caps', not 'mixed away': it never disperses
        var isBase = i >= baseStart, fresh = Dt ? clamp(Dt[i], 0, 1) : 1, mixed = isBase ? 1 : fresh;
        var z0 = ((A[o + 1] - 0.5) * 2 * F.ref - (1 - link) * r * 2.5) * F.depthScale + F.zOff;
        var dis = 1 - mixed * link;
        // the puff's own depth weight: 1 on the near face of the cloud, 0 at the back; the cloud's
        // depth weight scales the whole thing. Packed as cloud index + puff dw / 4.
        var pdw = clamp(0.5 + 0.5 * (z0 - F.zOff) / (F.ref * 2), 0, 1) * F.dw;
        var dwp = F.idx + pdw * 0.25;
        var stretch = (1 + F.shear * dis * (1 + F.shearBias * (2 * pdw - 1))) * (STR ? Math.max(0.2, STR[i]) : 1);   // the sim may stretch a parcel itself (streets, trails)
        var rx, ry, hgt, band;
        if (F.cam) {
          var C = F.cam, dy = F.pivY - B[o + 1], zp = Math.max(0.05, C.z + C.flat * dy * C.k), sc = C.f / zp;
          rx = 0.5 + (C.x + (B[o] - F.pivX) * C.s) * sc; ry = C.hor - (C.h + (1 - C.flat) * dy * C.s) * sc;
          hgt = Math.max(0, (1 - C.flat) * dy * C.s * sc) * F.lean; rx += F.wx * hgt; ry += F.wy * hgt;
          r *= C.s * sc;
          band = smoothstep(0, F.baseFall, 1 - dy / C.spanS);
        } else {
          rx = F.pivX + (B[o] - F.pivX) * F.zoom; ry = F.pivY + (B[o + 1] - F.pivY) * F.zoom;
          hgt = Math.max(0, F.pivY - ry) * F.lean; rx += F.wx * hgt + F.panX; ry += F.wy * hgt + F.panY;
          r *= F.zoom;
          band = smoothstep(0, F.baseFall, 1 - (F.baseT - ry) / F.spanT);
        }
        if (r <= 1e-4) continue;   // a parcel still too small to draw: skip it, never stop the loop (put() fails for the budget too, and that break hid every later parcel)
        var stack0 = 0;   // a root puff carries no stack shade; children add their parent's underside
        if (!put(rx, ry, r, z0, stack0, (0.4 + 0.6 * fresh) * LEVEL_DETAIL[0], mixed, dis, stretch, rx, ry, F.primPacked, F.wx, F.wy, band, dwp)) break;
        queue.push({ F: F, x: rx, y: ry, r: r, z: z0, seed: B[o + 3], ax: ax, ay: ay, az: az, angle: S[o + 3] * F.roll, fresh: fresh, mixed: mixed, stack: stack0, dis: dis, st: stretch, anx: rx, any: ry, dwp: dwp, band: band });
      }
    }
    // plan the budget: how many puffs each deeper level wants; the deepest level that does not fit
    // fades out (its radii scale down with the shortfall) rather than being cut mid-way
    // a parent whose children would be smaller than a field texel gets none (they would be invisible),
    // and the biggest parents on screen are served first, so the budget goes to the near clouds that show it
    var minR = 1.0 / Math.max(1, this._w), k;
    queue = queue.filter(function (q) { return q.F.levels < 2 || q.r * q.F.ratio >= minR; });
    queue.sort(function (a, b) { return b.r - a.r; });
    var l1 = 0, l2 = 0;
    for (k = 0; k < queue.length; k++) { F = queue[k].F; if (F.levels >= 2) l1 += F.children; if (F.levels >= 3) l2 += F.children * F.children; }
    var fade = [1, 1, 1];
    if (n + l1 > MAX_SPH) { fade[1] = Math.max(0, (MAX_SPH - n) / Math.max(1, l1)); fade[2] = 0; }
    else if (n + l1 + l2 > MAX_SPH) fade[2] = Math.max(0, (MAX_SPH - n - l1) / Math.max(1, l2));
    this.degrade = fade[2] < 1 ? fade[2] : fade[1];
    for (var level = 0; level < 2 && queue.length; level++) {
      var next = [], fd = fade[level + 1];
      if (fd <= 0) break;
      // fade: keep the first floor(fd * children) children of every parent in full, the next one
      // at the fractional radius, drop the rest (continuous in fd)
      for (k = 0; k < queue.length && n < MAX_SPH; k++) {
        q = queue[k]; F = q.F;
        if (F.levels < level + 2) continue;
        var keep = fd * F.children, kf = Math.floor(keep), kr = keep - kf;
        for (j = 0; j < F.children && n < MAX_SPH; j++) {
          var cf = j < kf ? 1 : (j === kf ? kr : 0);
          if (cf <= 0.02) continue;
          var rate = 0.7 + 0.6 * hash(q.seed + 4.7 + j * 41.3);
          var cyc = 1.2 + 1.0 * hash(q.seed + 12.3 + j * 29.7);
          var sraw = (q.angle * rate + time * 0.05) * F.life + hash(q.seed + 5.5 + j * 7.1) * cyc;
          var ci = Math.floor(sraw / cyc), ph = sraw / cyc - ci;
          var cs = q.seed + ci * 101.3 + level * 17.9;   // reseeded every life
          var jit = hash(cs + j * 31.7) - 0.5;
          var zz = (1 - 2 * (j + 0.5 + jit * 0.55) / F.children) * 0.9;
          var azm = hash(cs + 1.3 + j * 13.9) * 6.2832;
          var sr = Math.sqrt(Math.max(1 - zz * zz, 0));
          var vx = sr * Math.cos(azm), vy = sr * Math.sin(azm), vz = zz;
          if (vy > 0) { vx = -vx; vy = -vy; }   // born on the upper shell (world y is down)
          // carried round by the parent's roll since birth
          var ca = ph * cyc, cc = Math.cos(ca), sn = Math.sin(ca);
          var d = q.ax * vx + q.ay * vy + q.az * vz;
          var ux = vx * cc + (q.ay * vz - q.az * vy) * sn + q.ax * d * (1 - cc);
          var uy = vy * cc + (q.az * vx - q.ax * vz) * sn + q.ay * d * (1 - cc);
          var uz = vz * cc + (q.ax * vy - q.ay * vx) * sn + q.az * d * (1 - cc);
          var env = Math.pow(Math.sin(Math.PI * ph), 0.6);
          var cr = q.r * F.ratio * (0.8 + 0.4 * hash(cs + 5.1 + j * 23.0)) * env * cf;
          if (cr <= 1e-4) continue;
          var shell = q.r * F.embed * (0.7 + 0.3 * env);
          // the child sits on the parent's shell, which follows the primitive and the shear
          var ox = ux * shell, oy = uy * shell, pa = F.pa, prim = F.prim;
          if (prim === 1) oy /= 1 + 1.5 * pa; else if (prim === 2) ox /= 1 + 2 * pa * Math.max(0, -uy); else if (prim === 3) { var qx = ox * ox, qy = oy * oy, l4 = Math.sqrt(Math.sqrt(qx * qx + qy * qy)), ll = Math.sqrt(qx + qy) || 1e-6, kk = 1 + pa * (ll / l4 - 1); ox *= kk; oy *= kk; }
          else if (prim === 4) { var l1n = Math.abs(ox) + Math.abs(oy) || 1e-6, l2n = Math.sqrt(ox * ox + oy * oy), kd = 1 + pa * (l2n / l1n - 1); ox *= kd; oy *= kd; }
          if (q.st !== 1) { var al2 = ox * F.wx + oy * F.wy, ac2 = ox * F.wy - oy * F.wx, sa = al2 * q.st, sc = ac2 / Math.sqrt(q.st); ox = F.wx * sa + F.wy * sc; oy = F.wy * sa - F.wx * sc; }
          var x = q.x + ox, y = q.y + oy, z = q.z + uz * shell * F.depthScale;
          // stacked shade: the own gradient is in the shader; the inherited part is the parent's
          // gradient at the birth point (uy > 0 is the parent's underside)
          var stack = q.stack * 0.6 + 0.5 * smoothstep(-0.6, 0.9, uy);
          var band2 = F.cam ? q.band : smoothstep(0, F.baseFall, 1 - (F.baseT - y) / F.spanT);   // under the camera the band is the parent's (a sheet's rows are depth, not height)
          var pdw2 = clamp(0.5 + 0.5 * (z - F.zOff) / (F.ref * 2), 0, 1) * F.dw, dwp2 = F.idx + pdw2 * 0.25;
          put(x, y, cr, z, stack, (0.4 + 0.6 * q.fresh) * LEVEL_DETAIL[level + 1], q.mixed, q.dis, q.st, q.anx, q.any, F.primPacked, F.wx, F.wy, band2, dwp2);
          next.push({ F: F, x: x, y: y, r: cr, z: z, seed: cs + j * 3.1, ax: q.ax, ay: q.ay, az: q.az, angle: q.angle, fresh: q.fresh, mixed: q.mixed, stack: stack, dis: q.dis, st: q.st, anx: q.anx, any: q.any, band: band2 });
        }
      }
      queue = next.filter(function (q) { return q.r * q.F.ratio >= minR; }).sort(function (a, b) { return b.r - a.r; });
    }
    this.count = n;
    var gl = this.gl;
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this._sphTex);
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, MAX_SPH);   // D is laid out MAX_SPH wide; upload only the used columns
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, Math.max(1, n), 4, gl.RGBA, gl.FLOAT, D, 0);
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, 0);
  };

  // render(clouds, time, sky) or render(sim, look, time)
  PuffRenderer.prototype.render = function (a, b, cc) {
    var clouds, time, sky;
    if (a && a.blobs) { clouds = [{ sim: a, look: b }]; time = cc; sky = b; }
    else { clouds = a; time = b; sky = cc || (clouds[0] && clouds[0].look) || {}; }
    var gl = this.gl, c = this.canvas, asp = c.height / c.width;
    // the style reference radius: the nearest (largest-scale) cloud's
    var ref = 0.08;
    if (clouds.length) { ref = 0; for (var i = 0; i < clouds.length; i++) { var Fi = form(clouds[i], i); ref = Math.max(ref, Fi.cam ? Fi.ref * Math.min(1, 1.2 / Fi.zoom) : Fi.ref); } }
    // pixel grid: with sky.pixel set, the field is exactly canvas / pixel texels and the shade pass
    // fills exactly field * pixel canvas pixels (centred; the margin is sky), so every texel is
    // one pixel-by-pixel square: the picture is what the game would show
    var px = Math.max(0, Math.round(num(sky.pixel, 0))), vx = 0, vy = 0, vw = c.width, vh = c.height;
    if (px > 0) {
      var fw = Math.max(32, Math.floor(c.width / px)), fh = Math.max(32, Math.floor(c.height / px));
      this.resize(fw, fh); vw = fw * px; vh = fh * px; vx = (c.width - vw) >> 1; vy = (c.height - vh) >> 1; asp = fh / fw;
    } else this.resize(this._w);
    this._tree(clouds, time);
    // field
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fbo); gl.viewport(0, 0, this._w, this._h);
    gl.useProgram(this._field);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this._sphTex);
    gl.uniform1i(this._fu.uSph, 0); gl.uniform1i(this._fu.uCount, this.count); gl.uniform1f(this._fu.uAspect, asp);
    gl.uniform1f(this._fu.uT, Math.max(0.002, ref * 0.08 * num(sky.softness, 1.4))); gl.uniform1f(this._fu.uCap, clamp(num(sky.cap, 0), 0, 1));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    // shade
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, c.width, c.height);
    if (px > 0) { gl.clearColor(0.075, 0.4525, 0.575, 1); gl.clear(gl.COLOR_BUFFER_BIT); gl.viewport(vx, vy, vw, vh); }
    gl.useProgram(this._shade);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this._fieldTex);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this._auxTex);
    gl.activeTexture(gl.TEXTURE3); gl.bindTexture(gl.TEXTURE_2D, this._aux2Tex);
    var su = this._su;
    gl.uniform1i(su.uField, 1); gl.uniform1i(su.uAux, 2); gl.uniform1i(su.uAux2, 3); gl.uniform2f(su.uTexel, 1 / this._w, 1 / this._h); gl.uniform1f(su.uAspect, asp);
    var sunA = num(sky.sun, 60) * Math.PI / 180, el = num(sky.elevation, 40) * Math.PI / 180;
    gl.uniform3f(su.uLight, Math.cos(sunA) * Math.cos(el), -Math.sin(sunA) * Math.cos(el), Math.sin(el));
    gl.uniform1f(su.uHighlight, clamp(num(sky.highlight, 0.68), 0, 1));
    gl.uniform1f(su.uFill, num(sky.fill, 0.2)); gl.uniform1f(su.uBands, num(sky.bands, 5));
    gl.uniform1f(su.uNoise, num(sky.noise, 0.3)); gl.uniform1f(su.uNoiseScale, num(sky.noiseScale, 1)); gl.uniform1f(su.uFlow, num(sky.flow, 0.01));
    gl.uniform1f(su.uNoise2, num(sky.noise2, 0)); gl.uniform1f(su.uNoise2Scale, num(sky.noise2Scale, 4)); gl.uniform1f(su.uNoiseBias, clamp(num(sky.noiseBias, 0), -1, 1)); gl.uniform1f(su.uAnchor, clamp(num(sky.anchor, 1), 0, 1));
    gl.uniform1f(su.uAtmos, clamp(num(sky.atmos, 0), 0, 1)); gl.uniform1f(su.uDepthFall, clamp(num(sky.depthFall, 0), 0, 1));
    gl.uniform1f(su.uCirrus, clamp(num(sky.cirrus, 0), 0, 1)); gl.uniform1f(su.uCirrusScale, num(sky.cirrusScale, 2)); gl.uniform1f(su.uCirrusAngle, num(sky.cirrusAngle, -12) * Math.PI / 180); gl.uniform1f(su.uCirrusFlow, num(sky.cirrusFlow, 0.01)); gl.uniform1f(su.uVeil, clamp(num(sky.veil, 0), 0, 1));
    gl.uniform1f(su.uDissolve, clamp(num(sky.dissolve, 0.7), 0, 1)); gl.uniform1f(su.uDotSize, Math.max(1, Math.round(num(sky.dotSize, 1))));
    gl.uniform1f(su.uTime, time); gl.uniform1f(su.uRef, ref);
    // per-cloud style: a cloud's look may set haze, stackShade, dither, shadow, baseShade, noise and
    // smooth for itself (a stratus is hazy and flat, a cirrus dithered, whatever the sky's style says)
    var SA = this._styleA || (this._styleA = new Float32Array(128)), SB = this._styleB || (this._styleB = new Float32Array(128));
    for (var ci = 0; ci < 32; ci++) {
      var L = ci < clouds.length ? (clouds[ci].look || {}) : {}, o4 = ci * 4;
      var pick = function (k, d) { return L[k] !== undefined ? num(L[k], d) : num(sky[k], d); };
      SA[o4] = clamp(num(L.far, 1), 0, 1); SA[o4 + 1] = clamp(pick('haze', 0.5), 0, 1); SA[o4 + 2] = clamp(pick('stackShade', 0.4), 0, 1); SA[o4 + 3] = clamp(pick('dither', 0), 0, 1);
      SB[o4] = clamp(pick('shadow', 0.64), 0, 1); SB[o4 + 1] = clamp(pick('baseShade', 0.5), 0, 1); SB[o4 + 2] = L.noise !== undefined ? num(L.noise, 0.3) / Math.max(0.01, num(sky.noise, 0.3)) : 1; SB[o4 + 3] = clamp(pick('smooth', 0.5), 0, 1);
    }
    gl.uniform4fv(su.uStyleA, SA); gl.uniform4fv(su.uStyleB, SB);
    gl.uniform1f(su.uPixelated, sky.pixelated === false ? 0 : 1);
    gl.uniform3f(su.uSkyColor, 0.075, 0.4525, 0.575);
    gl.uniform1f(su.uOverhead, clamp(num(sky.overhead, 0), 0, 1)); gl.uniform1f(su.uRim, clamp(num(sky.rim, 0.5), 0, 1)); gl.uniform1f(su.uPuffRim, clamp(num(sky.puffRim, 0), 0, 1)); gl.uniform1f(su.uContact, clamp(num(sky.contact, 0), 0, 1)); gl.uniform1f(su.uCavity, clamp(num(sky.cavity, 0), 0, 1));
    var cam = sky.cam; gl.uniform4f(su.uCam, cam ? num(cam.x, 0) : 0, cam ? num(cam.z, 0) : 0, cam ? num(cam.hor, 0) : 0, cam ? num(cam.alt, 0) : 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  PuffRenderer.MAX_SPH = MAX_SPH;
  PuffRenderer.PRIMS = PRIMS;
  window.PuffRenderer = PuffRenderer;
})();
