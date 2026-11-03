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
  function vnoise2(x, y) {   // value noise on the unit lattice, smooth, 0..1 (the wind's gust pattern)
    var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy; fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    var a = hash(ix + iy * 57.17), b = hash(ix + 1 + iy * 57.17), c = hash(ix + (iy + 1) * 57.17), d = hash(ix + 1 + (iy + 1) * 57.17);
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy;
  }
  function smoothstep(a, b, x) { var t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function num(v, d) { return typeof v === 'number' && isFinite(v) ? v : d; }

  var VS = '#version 300 es\nprecision highp float;\nout vec2 vUv;\nvoid main(){ vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2); vUv = p; gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0); }';

  // sphere texture rows: 0 (x, y, r, z0); 1 (stack, detail, fresh, dispersal);
  // 2 (anchor x, anchor y, stretch, prim id + amt/2); 3 (wind x, wind y, band, depth weight: cloud dw + puff dw / 4 packed as floor + fract);
  // 4 (id, parent id); 5 (cos, sin of the shape orientation, aspect a, bound); 6 (A1, B1, A3, B3: the contour harmonics); 7 (angular amount, sides)
  //
  // Shape variation (one evaluator, varyIn / varyGrad below, the CPU port in lab-ref.js and the inverse in _tree): the
  // puff's unit space is reached from the field through the wind stretch, then this per-puff warp, then the primitive:
  //   q  = R(-theta) d                       (into the puff's own frame)
  //   q' = (q.x / (1 + a), q.y * (1 + a))    (an ellipse: semi-axes r (1 + a) and r / (1 + a), area kept)
  //   d1 = R(theta) q' / f(phi)              f(phi) = 1 + A1 cos phi + B1 sin phi + A3 cos 3phi + B3 sin 3phi, phi = angle of q'
  // so the footprint is r f(phi) along each ray: star-shaped about the centre, a bijection of the plane while f > 0 (it
  // is bounded away from zero: |A1| + |B1| + |A3| + |B3| <= 0.3), so nothing folds or self-intersects. The height, the inside
  // test, the skirt and the silhouette all run on |d1|; the gradient is pulled back through the warp's Jacobian; the
  // silhouette distance is divided by the pull-back's length, so the rim width stays a true distance (a warped field
  // is not a distance field). bound = (1 + a) f_max expands the coarse rejects and the tile reach. Identity rows
  // (a = 0, harmonics 0, bound 1) skip the warp, so Shape variation 0 is the original puff to the bit
  var FIELD_FS = '#version 300 es\nprecision highp float; precision highp sampler2D;\n' +
  'uniform sampler2D uSph; uniform float uAspect; uniform float uT, uCap;\n' +
  '// contact (object space): the light, the camera pitch (as the shade pass turns the light with it) and the slider (0: skipped)\n' +
  'uniform vec3 uLight; uniform vec4 uCam; uniform float uOverhead, uContact, uCavity, uCavityReach;\n' +
  '// tiles: the spheres whose reach touches a 16-texel tile, as a list per tile (uTileHead: offset, count; uTileList: indices)\n' +
  'uniform sampler2D uTileHead, uTileList; uniform float uTexW, uTileSize; uniform ivec2 uTiles;\n' +
  '// dissolve: a dispersing puff (attribute w) loses texels on the dither grid HERE, in the union and the silhouette,\n' +
  '// so the holes show the cloud behind it (the shade pass used to drop the pixel to sky instead)\n' +
  'uniform float uDissolve, uDotSize, uEvapScale, uRef;\n' +
  '// an 8x8 ordered pattern (64 thresholds, -0.5 .. 0.5) for the new effects; the 4x4 one stays for the palette grain\n' +
  'float bayer8(vec2 p){ vec2 q = mod(floor(p), 8.0); int x = int(q.x), y = int(q.y), v = 0; for(int b = 0; b < 3; b++){ v = v * 4 + ((x >> (2 - b)) & 1) * 2 + ((((x ^ y) >> (2 - b)) & 1)); } return float(v) / 64.0 - 0.5; }\n' +
  '// an integer lattice hash (exact in 32-bit, so the CPU reference reproduces it bit for bit; a sine hash did not)\n' +
  'float hash21(vec2 p){ uint h = (uint(int(p.x)) * 73856093u) ^ (uint(int(p.y)) * 19349663u); h *= 2654435761u; h ^= h >> 13u; h *= 2246822519u; return float(h >> 8u) / 16777216.0; }\n' +
  'float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y); }\n' +
  'float bayer(vec2 p){ vec2 q = mod(floor(p), 4.0); float m[16]; m[0]=0.;m[1]=8.;m[2]=2.;m[3]=10.;m[4]=12.;m[5]=4.;m[6]=14.;m[7]=6.;m[8]=3.;m[9]=11.;m[10]=1.;m[11]=9.;m[12]=15.;m[13]=7.;m[14]=13.;m[15]=5.; return m[int(q.y) * 4 + int(q.x)] / 16.0 - 0.5; }\n' +
  '// evaporation: a dispersing puff (attribute w) is eroded from its outline inward: its radius at this pixel is scaled by\n' +
  '// 1 - Dissolve * dispersal * (0.3 + 0.7 n), n a broad value noise riding with the puff\'s parcel and phased by its family,\n' +
  '// so the edge retreats raggedly, more where n is high, and the interior stays whole until the edge reaches it. (It\n' +
  '// used to remove interior patches, which read as holes punched through the puff.) The noise also warps the dome\n' +
  '// a little where it varies inside; the stored gradient leaves that out, a small error in direction only. Monotone in\n' +
  '// the strength: a rising value only takes more\n' +
  '// ... plus the wind erosion amount (row 7 z: accumulated per lobe by the tree, step 2 of the wind erosion), the same\n' +
  '// ragged retreat from the outline, so an eroded lobe reveals what is behind it (the union sees the smaller radius)\n' +
  'float erode(int i){ float dis = texelFetch(uSph, ivec2(i, 1), 0).w; float amt = uDissolve * dis + texelFetch(uSph, ivec2(i, 7), 0).z; if(amt <= 0.001) return 1.0;\n' +
  '  vec2 anc = texelFetch(uSph, ivec2(i, 2), 0).xy; float pid = texelFetch(uSph, ivec2(i, 4), 0).y;\n' +
  '  vec2 p = vec2(gl_FragCoord.x, uTexW * uAspect - gl_FragCoord.y) / uTexW;   // the field position (vUv is declared below this function)\n' +
  '  float n = vnoise((p - anc) / uRef * uEvapScale + hash21(vec2(floor(pid * 64.0), 7.0)) * vec2(37.1, 11.7));\n' +
  '  return max(0.0, 1.0 - amt * (0.3 + 0.7 * n)); }\n' +
  '// the contour factor f(phi) of the shape variation and its derivative: the harmonics (row 6) times the angular factor\n' +
  '// (row 7: amount, sides): a regular polygon inscribed in the circle, cos(pi/n) / cos(t) over each sector, its corners\n' +
  '// rounded by blending to the circle over the outer 35 % of the sector (C1, so no crease runs out to a corner)\n' +
  'float shapeF(float ph, vec4 vh, vec4 va, out float df){\n' +
  '  float f = 1.0 + vh.x * cos(ph) + vh.y * sin(ph) + vh.z * cos(3.0 * ph) + vh.w * sin(3.0 * ph);\n' +
  '  df = -vh.x * sin(ph) + vh.y * cos(ph) - 3.0 * vh.z * sin(3.0 * ph) + 3.0 * vh.w * cos(3.0 * ph);\n' +
  '  if(va.x > 0.0){\n' +
  '    float hs = 3.14159265 / va.y, t = mod(ph, 2.0 * hs) - hs, cp = cos(hs), ct = cos(t);\n' +
  '    float a = cp / ct, da = cp * sin(t) / (ct * ct);\n' +
  '    float u = clamp((abs(t) - 0.65 * hs) / (0.35 * hs), 0.0, 1.0), sm = u * u * (3.0 - 2.0 * u), dsm = 6.0 * u * (1.0 - u) / (0.35 * hs) * sign(t);\n' +
  '    float g = mix(a, 1.0, sm), dg = da * (1.0 - sm) + (1.0 - a) * dsm;\n' +
  '    float P = mix(1.0, g, va.x), dP = va.x * dg;\n' +
  '    df = df * P + f * dP; f *= P;\n' +
  '  }\n' +
  '  return f;\n' +
  '}\n' +
  '// shape variation: the field offset d into the puff\'s unit space (vr: row 5, vh: row 6, va: row 7)\n' +
  'vec2 varyIn(vec2 d, vec4 vr, vec4 vh, vec4 va){\n' +
  '  vec2 q = vec2(vr.x * d.x + vr.y * d.y, -vr.y * d.x + vr.x * d.y);\n' +
  '  q = vec2(q.x / (1.0 + vr.z), q.y * (1.0 + vr.z));\n' +
  '  float ph = atan(q.y, q.x), df, f = shapeF(ph, vh, va, df);\n' +
  '  q /= f;\n' +
  '  return vec2(vr.x * q.x - vr.y * q.y, vr.y * q.x + vr.x * q.y);\n' +
  '}\n' +
  '// the pull-back of a gradient g (in unit space, at unit point d1 = varyIn(d)) to the field: J^T g\n' +
  'vec2 varyGrad(vec2 g, vec2 d1, vec4 vr, vec4 vh, vec4 va){\n' +
  '  // into the puff frame: g1 = R(-theta) g, p = R(-theta) d1 = q\' / f\n' +
  '  vec2 g1 = vec2(vr.x * g.x + vr.y * g.y, -vr.y * g.x + vr.x * g.y), pq = vec2(vr.x * d1.x + vr.y * d1.y, -vr.y * d1.x + vr.x * d1.y);\n' +
  '  float ph = atan(pq.y, pq.x), df, f = shapeF(ph, vh, va, df);\n' +
  '  // star: d1 = q\' / f(phi);  J^T g = g / f - grad f (q\' . g) / f^2,  grad f = df * (-q\'.y, q\'.x) / |q\'|^2,  q\' = p f\n' +
  '  vec2 qp = pq * f; float q2 = max(dot(qp, qp), 1e-12);\n' +
  '  vec2 g2 = g1 / f - df * vec2(-qp.y, qp.x) * dot(qp, g1) / (q2 * f * f);\n' +
  '  // ellipse: q\' = (q.x / (1 + a), q.y (1 + a))\n' +
  '  g2 = vec2(g2.x / (1.0 + vr.z), g2.y * (1.0 + vr.z));\n' +
  '  return vec2(vr.x * g2.x - vr.y * g2.y, vr.y * g2.x + vr.x * g2.y);\n' +
  '}\n' +
  'in vec2 vUv; layout(location = 0) out vec4 o; layout(location = 1) out vec4 o2; layout(location = 2) out vec4 o3; layout(location = 3) out vec4 o4; layout(location = 4) out vec4 o5;\n' +
  'void main(){\n' +
  '  vec2 p = vec2(vUv.x, (1.0 - vUv.y) * uAspect);\n' +
  '  // two sets: puffs that contain the pixel (I) and skirts of puffs that do not (O). The skirt set is\n' +
  '  // weighted by g = 1 - ins, ins = how far inside any footprint the pixel is (0 at an edge .. 1 one T in),\n' +
  '  // so a front puff\'s skirt fades out over a rear puff\'s footprint continuously: nothing switches at an edge\n' +
  '  float m = -1e9, acc = 0.0, cIdx = 0.0, mO = -1e9, accO = 0.0, cIdxO = 0.0, ins = 0.0;\n' +
  '  // the per-puff attributes blend over a band four times wider than the height union: where one dome\n' +
  '  // crosses another the shape stays crisp, but stack, band, freshness and depth weight no longer jump\n' +
  '  // along the crease (that jump drew a ring round every puff)\n' +
  '  float m2 = -1e9, acc2 = 0.0, dSum = 0.0, sSum = 0.0, fSum = 0.0, xSum = 0.0, bSum = 0.0, wSum = 0.0; vec2 anc = vec2(0.0);\n' +
  '  float m2O = -1e9, acc2O = 0.0, dSumO = 0.0, sSumO = 0.0, fSumO = 0.0, xSumO = 0.0, bSumO = 0.0, wSumO = 0.0; vec2 ancO = vec2(0.0);\n' +
  '  float sm = -1e9, sacc = 0.0;                            // silhouette (soft union of r - dist)\n' +
  '  vec2 GI = vec2(0.0), GO = vec2(0.0);                   // gradient sums of the two sets, weighted like acc / accO\n' +
  '  float RI = 0.0;                                        // the puffs\' own rims, in the inside union (a skirt\'s is 1)\n' +
  '  float T = uT, T2 = uT * 4.0;\n' +
  '  // ownership (docs/core-audit.md): a containing puff is hidden by every unattached containing puff above it\n' +
  '  // (not the same parent, nor its parent or child), fading out a quarter T below each: a crisp overlap with the\n' +
  '  // front puff\'s own shading, while attached puffs join softly over T as before. Pairwise, so no winner is\n' +
  '  // chosen: a rule tied to the single highest puff changed the whole set of contributors when that puff\n' +
  '  // changed, a jump in the surface at every crossing. The pre-pass keeps the eight highest containing puffs\n' +
  '  // (a ninth is hidden by them anyway); the highest one is the owner, whose family the shade pass gets\n' +
  '  ivec2 tile = clamp(ivec2(p * uTexW / uTileSize), ivec2(0), uTiles - 1);\n' +
  '  vec2 thead = texelFetch(uTileHead, tile, 0).xy; int toff = int(thead.x), tcnt = int(thead.y);\n' +
  '  float winId = -1.0, winPid = -2.0, winH = -1e9, winZ = 0.0, winU = 0.0, winR = 0.0; int winIdx = -1;\n' +
  '  float ph[8], pidA[8], ppA[8]; int pn = 0;\n' +
  '  for(int k = 0; k < 4096; k++){\n' +
  '    if(k >= tcnt) break;\n' +
  '    int i = int(texelFetch(uTileList, ivec2((toff + k) & 4095, (toff + k) >> 12), 0).x);\n' +
  '    vec4 s = texelFetch(uSph, ivec2(i, 0), 0); vec2 d = p - s.xy; float r = s.z * erode(i); if(r <= 1e-5) continue;\n' +
  '    vec4 sh = texelFetch(uSph, ivec2(i, 2), 0), vr = texelFetch(uSph, ivec2(i, 5), 0);\n' +
  '    float rr = r * max(max(1.0, sh.z), inversesqrt(max(sh.z, 1e-4))) * vr.w;\n' +
  '    if(dot(d, d) > rr * rr) continue;\n' +
  '    vec4 wd = texelFetch(uSph, ivec2(i, 3), 0);\n' +
  '    if(sh.z != 1.0){ float along = dot(d, wd.xy), across = d.x * wd.y - d.y * wd.x; d = vec2(along / sh.z, across * sqrt(sh.z)); }\n' +
  '    if(vr.w != 1.0) d = varyIn(d, vr, texelFetch(uSph, ivec2(i, 6), 0), texelFetch(uSph, ivec2(i, 7), 0));\n' +
  '    int prim = int(floor(sh.w + 0.01)); float pa = (sh.w - floor(sh.w + 0.01)) * 2.0;\n' +
  '    if(prim == 1) d.y *= 1.0 + 1.5 * pa;\n' +
  '    else if(prim == 2) d.x *= 1.0 + 2.0 * pa * max(0.0, -d.y) / r;\n' +
  '    else if(prim == 3){ vec2 q = d * d; d *= mix(1.0, sqrt(sqrt(dot(q, q))) / max(length(d), 1e-6), pa); }\n' +
  '    else if(prim == 4) d *= mix(1.0, (abs(d.x) + abs(d.y)) / max(length(d), 1e-6), pa);\n' +
  '    float d2 = dot(d, d); if(d2 >= r * r) continue;\n' +
  '    float u = sqrt(d2) / r;\n' +
  '    float h = s.w + r * mix(sqrt(1.0 - u * u), 1.0 - u * u, uCap);\n' +
  '    vec4 idp = texelFetch(uSph, ivec2(i, 4), 0);\n' +
  '    if(pn < 8){ ph[pn] = h; pidA[pn] = idp.x; ppA[pn] = idp.y; pn++; }\n' +
  '    else { int lo = 0; for(int q = 1; q < 8; q++) if(ph[q] < ph[lo]) lo = q; if(h > ph[lo]){ ph[lo] = h; pidA[lo] = idp.x; ppA[lo] = idp.y; } }\n' +
  '    if(h > winH){ winH = h; winId = idp.x; winPid = idp.y; winIdx = i; winZ = s.w; winU = u; winR = r; }\n' +
  '  }\n' +
  '  for(int k = 0; k < 4096; k++){\n' +
  '    if(k >= tcnt) break;\n' +
  '    int i = int(texelFetch(uTileList, ivec2((toff + k) & 4095, (toff + k) >> 12), 0).x);\n' +
  '    vec4 s = texelFetch(uSph, ivec2(i, 0), 0);\n' +
  '    vec2 d = p - s.xy; float r = s.z * erode(i); if(r <= 1e-5) continue;\n' +
  '    vec4 sh = texelFetch(uSph, ivec2(i, 2), 0), vr = texelFetch(uSph, ivec2(i, 5), 0);   // anchor.xy, stretch, prim; the shape variation\n' +
  '    float rr = r * max(1.0, sh.z) * vr.w;   // coarse reject (the stretch can reach sh.z radii along the wind, the variation vr.w more)\n' +
  '    if(dot(d, d) > rr * rr * 2.5) continue;\n' +
  '    vec4 wd = texelFetch(uSph, ivec2(i, 3), 0);   // wind.xy, band, depth weight\n' +
  '    if(sh.z != 1.0){ float along = dot(d, wd.xy), across = d.x * wd.y - d.y * wd.x; d = vec2(along / sh.z, across * sqrt(sh.z)); }\n' +
  '    vec4 vh = vec4(0.0), va = vec4(0.0); if(vr.w != 1.0){ vh = texelFetch(uSph, ivec2(i, 6), 0); va = texelFetch(uSph, ivec2(i, 7), 0); d = varyIn(d, vr, vh, va); }\n' +
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
  '    // the warp\'s pull-back of the outward unit vector: its length is how fast |d1| grows per field unit here, so\n' +
  '    // (r - dist) / gn is the distance to the footprint in the field (1 without variation)\n' +
  '    vec2 dir1 = d / max(dist, 1e-6), vg = vr.w != 1.0 ? varyGrad(dir1, d, vr, vh, va) : dir1; float gn = max(length(vg), 1e-3);\n' +
  '    float e = (r - dist - pen) / (T * gn);\n' +
  '    if(e > sm){ sacc = sacc * exp(sm - e) + 1.0; sm = e; } else sacc += exp(e - sm);\n' +
  '    bool inside = d2 < r * r;\n' +
  '    vec4 a = texelFetch(uSph, ivec2(i, 1), 0);\n' +
  '    // profile: the sphere to its true limb (a tangent cone from 0.9 r gave the outer tenth one flat normal, a\n' +
  '    // band round every puff), then the skirt falling from height 0 at the rim at slope -2.06; the limb\'s\n' +
  '    // steep slope is lifted toward the viewer by the shade pass (the puff\'s own rim, at Rim soften strength,\n' +
  '    // as the silhouette is). Cap mixes toward a parabola, whose rim slope -2 already matches its skirt\n' +
  '    float u = dist / r;\n' +
  '    float sph = u < 1.0 ? sqrt(1.0 - u * u) : -(u - 1.0) * 2.0647;\n' +
  '    float par = u < 1.0 ? 1.0 - u * u : -2.0 * (u - 1.0);\n' +
  '    float h = s.w + r * mix(sph, par, uCap) - pen;\n' +
  '    // the puff\'s own slope, analytic: d h / d dist along d, mapped back through the stretch (the other\n' +
  '    // primitive distortions are left as the identity, a small error in direction only)\n' +
  '    float dsph = u < 1.0 ? max(-20.0, -u / sqrt(max(1e-6, 1.0 - u * u))) : -2.0647;\n' +
  '    float dpar = u < 1.0 ? -2.0 * u : -2.0;\n' +
  '    // the penalty\'s slope is bounded: it diverges at the cutoff (80000 at tt 0.995, past the largest half float,\n' +
  '    // and the gradient target is RGBA16F, linearly filtered), while anything past 20 lights as a wall anyway\n' +
  '    float dpen = (tt > 0.0 && tt < 0.995) ? min(20.0, 2.0 * (2.0 * tt - tt * tt) / ((1.0 - tt) * (1.0 - tt))) : (tt > 0.0 ? 20.0 : 0.0);\n' +
  '    vec2 dirp = d / max(dist, 1e-6);   // the outward direction, mapped back to the field plane\n' +
  '    if(prim == 1) dirp.y *= 1.0 + 1.5 * pa;\n' +
  '    if(vr.w != 1.0) dirp = varyGrad(dirp, d, vr, vh, va);\n' +
  '    if(sh.z != 1.0) dirp = dirp.x * wd.xy / sh.z + dirp.y * vec2(wd.y, -wd.x) * sqrt(sh.z);\n' +
  '    vec2 gd = (mix(dsph, dpar, uCap) - dpen) * dirp;\n' +
  '    if(inside) ins = max(ins, smoothstep(0.0, T, r - dist));\n' +
  '    float wa = 1.0;   // hidden by every unattached containing puff above it\n' +
  '    if(inside){ vec4 idp = texelFetch(uSph, ivec2(i, 4), 0); for(int q = 0; q < 8; q++){ if(q >= pn) break; if(!(idp.x == pidA[q] || idp.y == ppA[q] || idp.y == pidA[q] || idp.x == ppA[q])) wa *= smoothstep(-0.25 * T, 0.0, h - ph[q]); } }\n' +
  '    // this puff\'s own rim: 1 at the edge, 0 a third of a radius in. It rides in the height union (width T, with the\n' +
  '    // ownership weight), not the wider attribute blend: a puff\'s rim shows only by its share of the surface, so\n' +
  '    // the rim of a puff buried a few T below cannot draw a ring inside the puff over it\n' +
  '    float w, rim = 1.0 - smoothstep(0.0, 0.3, 1.0 - dist / r);\n' +
  '    if(inside){\n' +
  '      if(h > m){ float wq = exp((m - h) / T); acc = acc * wq + wa; GI = GI * wq + wa * gd; RI = RI * wq + wa * rim; cIdx = floor(wd.w); m = h; } else { float wq = wa * exp((h - m) / T); acc += wq; GI += wq * gd; RI += wq * rim; }\n' +
  '      if(h > m2){ w = exp((m2 - h) / T2); acc2 = acc2 * w + wa; dSum = dSum * w + wa * a.y; sSum = sSum * w + wa * a.x; fSum = fSum * w + wa * a.z; xSum = xSum * w + wa * a.w; anc = anc * w + wa * sh.xy; bSum = bSum * w + wa * wd.z; wSum = wSum * w + wa * fract(wd.w) * 4.0; m2 = h; }\n' +
  '      else { w = wa * exp((h - m2) / T2); acc2 += w; dSum += w * a.y; sSum += w * a.x; fSum += w * a.z; xSum += w * a.w; anc += w * sh.xy; bSum += w * wd.z; wSum += w * fract(wd.w) * 4.0; }\n' +
  '    } else {\n' +
  '      if(h > mO){ float wq = exp((mO - h) / T); accO = accO * wq + 1.0; GO = GO * wq + gd; cIdxO = floor(wd.w); mO = h; } else { float wq = exp((h - mO) / T); accO += wq; GO += wq * gd; }\n' +
  '      if(h > m2O){ w = exp((m2O - h) / T2); acc2O = acc2O * w + 1.0; dSumO = dSumO * w + a.y; sSumO = sSumO * w + a.x; fSumO = fSumO * w + a.z; xSumO = xSumO * w + a.w; ancO = ancO * w + sh.xy; bSumO = bSumO * w + wd.z; wSumO = wSumO * w + fract(wd.w) * 4.0; m2O = h; }\n' +
  '      else { w = exp((h - m2O) / T2); acc2O += w; dSumO += w * a.y; sSumO += w * a.x; fSumO += w * a.z; xSumO += w * a.w; ancO += w * sh.xy; bSumO += w * wd.z; wSumO += w * fract(wd.w) * 4.0; }\n' +
  '    }\n' +
  '  }\n' +
  '  // combine. Over a surface that contains the pixel (ins > 0) a skirt may only fill in BELOW that surface: a\n' +
  '  // join, blended by the union. It may not stand above it, since a skirt above the surface behind is a\n' +
  '  // cone drawn round the front puff (the circles). So the skirt union is clamped to the inside union\n' +
  '  // (two T under it, so the join adds almost nothing where they meet) by the amount ins, instead of\n' +
  '  // the old shift T log(1 - ins), which fell to minus infinity: a cliff one T wide at every footprint\n' +
  '  // edge, and a skirt discarded while it still carried the height. A front puff crossing its own radius\n' +
  '  // over the surface behind it still steps down onto it: that is an occlusion, and the shade pass keeps\n' +
  '  // its normal on its own side of the step\n' +
  '  float g = 1.0 - ins;\n' +
  '  float HI = acc > 0.0 ? m + T * log(acc) : -1e9, HO = accO > 0.0 ? mO + T * log(accO) : -1e9;\n' +
  '  float HO0 = HO;\n' +
  '  if(HI > -1e8 && HO > -1e8) HO -= ins * max(0.0, HO - (HI - 2.0 * T));\n' +
  '  // and inside a footprint the skirt set is also weighted by g = 1 - ins, so a fully containing puff owns\n' +
  '  // its pixels outright: no skirt height, no skirt slope (the clamp seam and the join groove the lab measured\n' +
  '  // were both skirt slope inside a footprint). Across the footprint ramp the weight falls with the same ins\n' +
  '  // the clamp uses. Outside every footprint, where the outlines merge, the skirts stand as before\n' +
  '  if(HO > -1e8){ HO = g > 1e-4 ? HO + T * log(g) : -1e9; if(g <= 1e-4) accO = 0.0; }\n' +
  '  float Hm = max(HI, HO);\n' +
  '  float H = Hm > -1e8 ? Hm + T * log(exp((HI - Hm) / T) + exp((HO - Hm) / T)) : -1.0;\n' +
  '  if(acc <= 0.0) cIdx = cIdxO;\n' +
  '  // contact shadow, in object space: a ray from the surface point toward the light, tested against every other puff as\n' +
  '  // the sphere the union draws (centre at its depth offset, its eroded radius). Not a march over the height field: the\n' +
  '  // depth wall at a front puff\'s rim is an artefact of flattening the domes to one height, and the ray never sees it.\n' +
  '  // A puff never shades itself: the spheres the point sits on (within T, so a merged lobe too) are left out, their\n' +
  '  // curvature is the normal\'s business. The penumbra widens along the ray (crisp at the contact, soft at the far\n' +
  '  // edge); the shadow fades out by 0.6 r beyond the blocker\'s rim, inside the tile reach. Stored for the shade pass.\n' +
  '  // Cavity, in the same loop: sphere ambient occlusion. Each other puff hides a share of the sky over the point, its\n' +
  '  // solid angle (1 - sqrt(1 - r^2 / d^2)) times the share of the sphere above the point\'s level, fading out over Cavity\n' +
  '  // reach (at most 0.6 r, inside the tile reach) beyond the sphere\'s rim; the shares combine as transmittances and\n' +
  '  // the floor of a crease between two domes reaches about 0.8. No height-field sample, so no step and no outline\n' +
  '  float sil = (sacc > 0.0) ? (sm + log(min(sacc, 2.0))) * T : -1.0;\n' +
  '  float contact = 0.0, cav = 0.0;\n' +
  '  if((uContact > 0.0 || uCavity > 0.0) && H > -0.5){\n' +
  '    vec3 Lv = uLight;\n' +
  '    if(uCam.w > 0.0 && uOverhead > 0.0){ float pc = atan(max(0.0, uCam.z - (1.0 - vUv.y) * uAspect)) * uOverhead, cp = cos(pc), sp = sin(pc); float up = -uLight.y, tz = uLight.z; Lv = vec3(uLight.x, -(up * cp + tz * sp), tz * cp - up * sp); }\n' +
  '    vec3 ro = vec3(p, H); float tr = 1.0, sky = 1.0, creach = uCavityReach / uTexW;\n' +
  '    for(int k = 0; k < 4096; k++){\n' +
  '      if(k >= tcnt) break;\n' +
  '      int i = int(texelFetch(uTileList, ivec2((toff + k) & 4095, (toff + k) >> 12), 0).x);\n' +
  '      vec4 s = texelFetch(uSph, ivec2(i, 0), 0); float r = s.z * erode(i); if(r <= 1e-5) continue;\n' +
  '      if(i == winIdx){\n' +
  '        // the owner: its own limb joins the shadow it casts on the puff behind where the sphere\'s true normal turns from the\n' +
  '        // light (the rim lift turns that normal to the viewer and lit the limb, a bright crescent standing against the cast\n' +
  '        // shadow; a ray test missed the terminator, where the crescent was brightest). Weighted by the rim band (1 at the\n' +
  '        // edge, 0 a third of a radius in) and by the band lying inside the cloud: at the exposed silhouette a lone puff gets none\n' +
  '        if(uContact <= 0.0) continue;\n' +
  '        float wself = (1.0 - smoothstep(0.0, 0.3, 1.0 - winU)) * smoothstep(T, 3.0 * T, sil - winR * (1.0 - winU)); if(wself <= 0.0) continue;\n' +
  '        vec3 oo = vec3(s.xy, s.w) - ro; float nl = -dot(oo, Lv) / max(length(oo), 1e-6);\n' +
  '        tr *= 1.0 - 0.5 * wself * (1.0 - smoothstep(0.0, 0.5, nl));   // half: the cast shadow beside it is a penumbra of about that strength at the contact\n' +
  '        continue;\n' +
  '      }\n' +
  '      vec3 oc = vec3(s.xy, s.w) - ro; float oc2 = dot(oc, oc), sxy = length(oc.xy) - r; if(sxy > 0.6 * r) continue;\n' +
  '      // the point sits on this sphere (inside its footprint, within T of its surface: the owner or a merged lobe): neither\n' +
  '      // a blocker nor an occluder. Outside the footprint it is the puff behind, even within T (a bright strip hugged\n' +
  '      // the rim of a front puff with a small depth offset when the margin applied there too)\n' +
  '      if(sxy < 0.0 && oc2 < (r + T) * (r + T)) continue;\n' +
  '      if(uCavity > 0.0){\n' +
  '        // depth offsets are draw order, not height. A neighbour\'s centre is taken no higher than the point\'s own centre plane\n' +
  '        // (its real offset when it is lower, a parent under a child), so a neighbour hides sky only where the point is low\n' +
  '        // against the neighbour\'s size (a valley floor), not where a front puff overlaps a crown (a step: taken at its\n' +
  '        // offset it drew a dark halo round every front lobe; taken on the plane, a parent under a child blacked the child out)\n' +
  '        float oz = min(oc.z, winZ - H), ocv = dot(oc.xy, oc.xy) + oz * oz;\n' +
  '        float q = min(1.0, r * r / max(ocv, 1e-12)), above = clamp(0.5 + oz / (2.0 * r), 0.0, 1.0);\n' +
  '        sky *= 1.0 - (1.0 - sqrt(1.0 - q)) * above * (1.0 - smoothstep(0.0, min(creach, 0.6 * r), sxy));\n' +
  '      }\n' +
  '      if(uContact <= 0.0) continue;\n' +
  '      float t = dot(oc, Lv); if(t <= 0.0) continue;\n' +
  '      float d = sqrt(max(0.0, oc2 - t * t)), w = T + 0.2 * t;\n' +
  '      tr *= 1.0 - (1.0 - smoothstep(r - w, r + w, d)) * (1.0 - smoothstep(0.2 * r, 0.6 * r, sxy));\n' +
  '    }\n' +
  '    contact = 1.0 - tr; cav = smoothstep(0.0, 0.5, 1.0 - sky);\n' +
  '  }\n' +
  '  // the union\'s gradient: each set\'s mean slope by its share of the union (the skirt clamp is a shift, its\n' +
  '  // own slope left out, so a clamped skirt keeps the slope of the surface it came from)\n' +
  '  vec2 gI = acc > 0.0 ? GI / acc : vec2(0.0), gO = accO > 0.0 ? GO / accO : vec2(0.0);\n' +
  '  // a clamped skirt takes the slope of the surface it was clamped to (a shifted height with the cone\'s old\n' +
  '  // slope lit a ring round every puff where the surface was flat). The ramp of the clamp itself, one T wide at\n' +
  '  // a footprint edge where a neighbour\'s skirt is cut off, is left without a slope: it is an occluding\n' +
  '  // edge, as the old slope test treated it, not a wall to light (lit, it drew a thin arc along the outline)\n' +
  '  if(HI > -1e8 && HO0 > -1e8 && HO0 > HI - 2.0 * T) gO = mix(gO, gI, ins);\n' +
  '  vec2 G = vec2(0.0); float rimW = 0.0;   // the puff rim weight, the same shares as the gradient (skirts: rim 1)\n' +
  '  if(acc > 0.0){ float sI = exp(max(-40.0, (HI - H) / T)); G += gI * sI; rimW += RI / acc * sI; }\n' +
  '  if(accO > 0.0){ float sO = exp(max(-40.0, (HO - H) / T)); G += gO * sO; rimW += sO; }\n' +
  '  if(acc2O > 0.0 && g > 1e-4){\n' +
  '    float wO = acc2 > 0.0 ? g * exp(clamp((m2O - m2) / T2, -30.0, 30.0)) : 1.0;\n' +
  '    if(acc2 <= 0.0){ m2 = m2O; }\n' +
  '    acc2 += wO * acc2O; dSum += wO * dSumO; sSum += wO * sSumO; fSum += wO * fSumO; xSum += wO * xSumO; anc += wO * ancO; bSum += wO * bSumO; wSum += wO * wSumO;\n' +
  '  }\n' +
  '  // the silhouette union gains at most T log 2 over the nearest puff (a pair blends as before; a pile of\n' +
  '  // overlapping skirts no longer pushes the outline T log n beyond the domes that are shaded)\n' +
  '  float mask = smoothstep(-0.5 * T, 0.5 * T, sil);\n' +
  '  float ia = acc2 > 0.0 ? 1.0 / acc2 : 0.0;\n' +
  '  // alpha: the mask (0..1), plus ten times the distance inside the silhouette past the mask ramp, so the\n' +
  '  // shade pass has a smooth distance from the outline (every mask test is < 0.5 or clamps, so it still works)\n' +
  '  o = vec4(H, dSum * ia, sSum * ia, mask + 10.0 * max(0.0, sil - 0.5 * T));\n' +
  '  o2 = vec4(acc2 > 0.0 ? fSum * ia : 1.0, xSum * ia, anc * ia);\n' +
  '  o3 = vec4(bSum * ia, acc2 > 0.0 ? wSum * ia : 1.0, cIdx, clamp(rimW, 0.0, 1.0));\n' +
  '  o4 = vec4(G, sil, winPid);   // z: the signed distance to the silhouette line (field units); w: the owner\'s group (its parent id)\n' +
  '  o5 = vec4(contact, cav, 0.0, 1.0);\n' +
  '}';

  var SHADE_FS = '#version 300 es\nprecision highp float;\n' +
  'uniform sampler2D uField; uniform sampler2D uAux; uniform sampler2D uAux2; uniform sampler2D uAux3; uniform sampler2D uAux4; uniform vec2 uTexel; uniform float uAspect; uniform vec3 uLight;\n' +
  'uniform float uHighlight, uFill, uBands, uNoise, uNoiseScale, uNoise2, uNoise2Scale, uNoiseBias, uNoiseBias2, uFlow, uTime, uRef, uPixelated, uAnchor, uStreak;\n' +
  'uniform vec2 uWindDir;\n' +
  '// directional streak (wind erosion, step 4): the surface noise squeezed along the wind by Streak, up to 3x, twice as much\n' +
  '// on dispersed material (wisps, worn and mixing parcels), so the detail reads as streaming downwind without any texture scrolling\n' +
  'vec2 streak(vec2 w0, vec2 uv0){ if(uStreak <= 0.0) return w0; float sk = 1.0 + uStreak * 2.0 * (0.5 + 0.5 * texture(uAux, uv0).g); return w0 + uWindDir * dot(w0, uWindDir) * (1.0 / sk - 1.0); }\n' +
  '// per-cloud style, indexed by the cloud of the highest puff: A = (depth weight, haze, stack shade, dither), B = (shadow, base shade, noise scale, normal smooth)\n' +
  'uniform vec4 uStyleA[32]; uniform vec4 uStyleB[32];\n' +
  'uniform float uAtmos, uDepthFall, uCirrus, uCirrusScale, uCirrusAngle, uCirrusFlow, uDissolve, uDotSize, uVeil;\n' +
  'uniform vec3 uSkyColor;\n' +
  'uniform float uOverhead, uRim, uPuffRim, uContact, uCavity, uCavityReach, uCavityLit, uGrain, uDiag, uT;\n' +
  'uniform float uStipple, uStippleBias, uBreakup, uBreakupReach, uLock;\n' +
  'float bayer8(vec2 p){ vec2 q = mod(floor(p), 8.0); int x = int(q.x), y = int(q.y), v = 0; for(int b = 0; b < 3; b++){ v = v * 4 + ((x >> (2 - b)) & 1) * 2 + ((((x ^ y) >> (2 - b)) & 1)); } return float(v) / 64.0 - 0.5; }\n' +
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
  '  if(uCirrus > 0.001 || uVeil > 0.001){\n' +
  '    vec2 w = vec2(uv.x, (1.0 - uv.y) * uAspect);\n' +
  '    float near = 1.0;\n' +
  '    if(uCam.w > 0.0){\n' +
  '      float dy = uCam.z - w.y; if(dy <= 0.004) return col;   // below the horizon\n' +
  '      float z = uCam.w / dy;\n' +
  '      w = vec2((w.x - 0.5) * z + uCam.x, z + uCam.y) * 0.5;\n' +
  '      near = smoothstep(0.0, 0.12, dy) * (1.0 - 0.5 * uAtmos * (1.0 - smoothstep(0.02, 0.25, dy)));   // thins into the horizon haze\n' +
  '    }\n' +
  '    // veil: a cirrostratus sheet lifts the sky toward the palest tone, with a faint grain\n' +
  '    if(uVeil > 0.001) col = mix(col, palette(0.8), uVeil * 0.55 * near * (0.85 + 0.15 * bayer(floor(vUv / uTexel) + 5.0)));\n' +
  '    if(uCirrus > 0.001){\n' +
  '    float ca = cos(uCirrusAngle), sa = sin(uCirrusAngle);\n' +
  '    vec2 q = vec2(w.x * ca - w.y * sa, w.x * sa + w.y * ca) * uCirrusScale;\n' +
  '    float t = uTime * uCirrusFlow;\n' +
  '    float n = fbm(vec2(q.x * 0.18 + t, q.y * 2.6 + t * 0.1)) * 0.5 + 0.15 * snoise(vec2(q.x * 0.7 - t * 0.7, q.y * 7.0));\n' +
  '    float thin = smoothstep(0.55 - 0.5 * uCirrus, 1.05 - 0.3 * uCirrus, n + bayer(floor(vUv / uTexel) + 3.0) * 0.08);\n' +
  '    col = mix(col, palette(0.72), thin * 0.7 * near);\n' +
  '    }\n' +
  '  }\n' +
  '  return col;\n' +
  '}\n' +
  // displaced height at a uv (the one surface term)
  'vec2 hAt(vec2 uv, vec2 uv0, float bias, float bias2, float namp){\n' +
  '  vec4 f = texture(uField, uv);\n' +
  '  // a sample outside the silhouette, or on another cloud (an occluding edge is a rim too, not a slope)\n' +
  '  // outside, on another cloud, or across a step: no dome profile is steeper than about 2 (the sphere is\n' +
  '  // continued at 2.06, a flattened disc reaches about 5), so a height change steeper than 10 over the sample distance\n' +
  '  // is a front puff\'s edge over the surface behind it, an occluding edge like the silhouette\n' +
  '  vec2 dd = vec2(uv.x - uv0.x, (uv.y - uv0.y) * uAspect);\n' +
  '  // ... or in another group (the owner\'s parent id, fetched unfiltered): a crisp overlap between unattached puffs is a\n' +
  '  // boundary the smoothing must not cross; roots of one cloud share a group, a root\'s children another\n' +
  '  float ins = (f.a < 0.5 || abs(texture(uAux2, uv).b - texture(uAux2, uv0).b) > 0.5 || texelFetch(uAux3, ivec2(uv / uTexel), 0).w != texelFetch(uAux3, ivec2(uv0 / uTexel), 0).w || abs(f.r - texture(uField, uv0).r) > 10.0 * length(dd) + 1e-6) ? 0.0 : 1.0;\n' +
  '  if(ins < 0.5) f = texture(uField, uv0);   // never read height outside the silhouette (the rim)\n' +
  '  vec2 w0 = streak((vec2(uv.x, (1.0 - uv.y) * uAspect) - uAnchor * texture(uAux, uv0).ba) / uRef, uv0);   // noise rides with the parcel\n' +
  '  float t = uTime * uFlow;\n' +
  '  float n1 = fbm(w0 * uNoiseScale + vec2(t, t * 0.37));\n' +
  '  float n2 = snoise(w0 * uNoise2Scale + vec2(-t * 0.6, t * 0.8) + 11.0) + 0.5 * snoise(w0 * uNoise2Scale * 2.1 + vec2(t * 0.3, -t * 0.5) + 23.0);\n' +
  '  return vec2(f.r + uRef * 0.5 * f.g * namp * (uNoise * n1 * bias + uNoise2 * n2 * bias2), ins);   // each noise has its own bias\n' +
  '}\n' +
  '// the noise displacement alone at a uv (amplitude from the centre pixel, so it never steps)\n' +
  'float dispAt(vec2 uv, vec2 uv0, float bias, float bias2, float namp){\n' +
  '  vec2 w0 = streak((vec2(uv.x, (1.0 - uv.y) * uAspect) - uAnchor * texture(uAux, uv0).ba) / uRef, uv0);\n' +
  '  float t = uTime * uFlow;\n' +
  '  float n1 = fbm(w0 * uNoiseScale + vec2(t, t * 0.37));\n' +
  '  float n2 = snoise(w0 * uNoise2Scale + vec2(-t * 0.6, t * 0.8) + 11.0) + 0.5 * snoise(w0 * uNoise2Scale * 2.1 + vec2(t * 0.3, -t * 0.5) + 23.0);\n' +
  '  return uRef * 0.5 * texture(uField, uv0).g * namp * (uNoise * n1 * bias + uNoise2 * n2 * bias2);\n' +
  '}\n' +
  '// Missing samples have no coverage; texelFetch outside the target is not a valid blocker.\n' +
  '// the normal. The surface slope is the field union\'s own gradient, analytic, stored by the field pass: no\n' +
  '// height is differenced across an occlusion step any more, so there is no step test, no footprint shrink and\n' +
  '// no fallback that could face a strip toward the viewer. A far footprint (Depth falloff) averages the\n' +
  '// gradient over same-surface neighbours. The noise displacement is smooth, so it is differenced plainly.\n' +
  'vec3 normalAt(vec2 uv, vec2 dx, vec2 dy, float wx, float wy, float bias, float bias2, float namp, float sm, out float edge){\n' +
  '  // rim weight: a smooth fall-off with the distance from the silhouette line, over the blend width T or two\n' +
  '  // texels, whichever is wider (it used to be full across the whole mask ramp and then drop within two\n' +
  '  // texels: at high Softness a flat lifted band ending in a step, a ring)\n' +
  '  edge = 1.0 - smoothstep(0.0, max(2.0 * dx.x, uT), max(0.0, texture(uAux3, uv).z));\n' +
  '  vec2 G = texture(uAux3, uv).xy;\n' +
  '  if(dx.x > uTexel.x * 1.5){\n' +
  '    float gn = 1.0;\n' +
  '    for(int k = 0; k < 4; k++){\n' +
  '      vec2 q = uv + (k == 0 ? dx : k == 1 ? -dx : k == 2 ? dy : -dy);\n' +
  '      if(hAt(q, uv, bias, bias2, namp).y > 0.5){ G += texture(uAux3, q).xy; gn += 1.0; }\n' +
  '    }\n' +
  '    G /= gn;\n' +
  '  }\n' +
  '  // Normal smooth: a bilateral average of the exact (unfiltered) gradient over the 7x7 texels round this one, Gaussian\n' +
  '  // in distance (sigma 1.5 texels) and in gradient difference (sigma 2 slope units: attached domes differ by less, a\n' +
  '  // crisp overlap by more and keeps its crease), rejecting outright a texel outside the silhouette, on another cloud,\n' +
  '  // across an occluding step or owned by another family (a crisp overlap by design: unrelated surfaces are never\n' +
  '  // averaged, whatever their slopes; the family test alone was imprecise, since siblings can still overlap sharply,\n' +
  '  // which the gradient weight now handles). The slider blends toward the average over a fixed footprint. It used\n' +
  '  // to average the normals of four isolated samples up to three texels out, the slider setting both spacing and\n' +
  '  // strength: a crease three texels away echoed as a second contour, and a sample switching between accepted and\n' +
  '  // rejected stepped\n' +
  '  if(sm > 0.0){\n' +
  '    ivec2 c = ivec2(uv / uTexel); vec4 f0 = texelFetch(uField, c, 0); float cl0 = texelFetch(uAux2, c, 0).b; vec4 a0 = texelFetch(uAux3, c, 0); vec2 G0 = a0.xy;\n' +
  '    vec2 acc = vec2(0.0); float wsum = 0.0;\n' +
  '    for(int j = -3; j <= 3; j++) for(int i = -3; i <= 3; i++){\n' +
  '      ivec2 q = c + ivec2(i, j); vec4 fq = texelFetch(uField, q, 0);\n' +
  '      if(fq.a < 0.5 || abs(texelFetch(uAux2, q, 0).b - cl0) > 0.5) continue;\n' +
  '      float dd = length(vec2(float(i) * uTexel.x, float(j) * uTexel.y * uAspect));\n' +
  '      if(abs(fq.r - f0.r) > 10.0 * dd + 1e-6) continue;\n' +
  '      vec4 aq = texelFetch(uAux3, q, 0); if(aq.w != a0.w) continue;\n' +
  '      vec2 Gq = aq.xy, dg = Gq - G0;\n' +
  '      float w = exp(-float(i * i + j * j) / 4.5) * exp(-dot(dg, dg) / 8.0);\n' +
  '      acc += w * Gq; wsum += w;\n' +
  '    }\n' +
  '    G = mix(G, acc / wsum, sm);\n' +
  '  }\n' +
  '  float nL = dispAt(uv - dx, uv, bias, bias2, namp), nR = dispAt(uv + dx, uv, bias, bias2, namp), nU = dispAt(uv - dy, uv, bias, bias2, namp), nD = dispAt(uv + dy, uv, bias, bias2, namp);\n' +
  '  // field y is down, uv y is up: the stored gradient is in field units, the noise difference in uv\n' +
  '  return normalize(vec3(-G.x - (nR - nL) / wx, -G.y + (nD - nU) / wy, 1.0));\n' +
  '}\n' +
  'void main(){\n' +
  '  vec2 uv = (uPixelated > 0.5) ? (floor(vUv / uTexel) + 0.5) * uTexel : vUv;\n' +
  '  vec4 f = texture(uField, uv);\n' +
  '  vec4 ax = texture(uAux, uv);\n' +
  '  vec4 bx = texture(uAux2, uv);   // band, puff depth weight, cloud index\n' +
  '  int ci = clamp(int(bx.b + 0.5), 0, 31); vec4 sA = uStyleA[ci], sB = uStyleB[ci];\n' +
  '  float dis = sA.w * ax.g;   // dispersing puffs dissolve into the pixel grid\n' +
  '  if(f.a < 0.5){ fragColor = vec4(sky(uv), 1.0); return; }   // the dissolve of a dispersing puff happens in the field pass now\n' +
  '  // the pattern cell of the two shade-pass effects: the screen grid at Dot size, or (Pattern lock off) the same grid\n' +
  '  // shifted by the parcel\'s anchor in whole texels, so the marks ride with the cloud like material instead of a print\n' +
  '  vec2 pc = floor(vUv / uTexel); if(uLock < 0.5) pc -= floor(vec2(ax.b / uTexel.x, (1.0 - ax.a / uAspect) / uTexel.y)); float pat = bayer8(floor(pc / uDotSize)) + 0.5;\n' +
  '  // edge breakup: coverage removed near the exposed silhouette (within Breakup reach texels of the outline, more near\n' +
  '  // it), by the ordered pattern so a rising strength only removes more. Nothing else is touched\n' +
  '  if(uBreakup > 0.0 && uDiag < 0.5){ float eb = 1.0 - smoothstep(0.0, uBreakupReach * uTexel.x, max(0.0, texture(uAux3, uv).z)); if(pat < uBreakup * eb){ fragColor = vec4(sky(uv), 1.0); return; } }\n' +
  '  // diagnostic view 4: the coverage mask (the field alpha, ramp included), before the mask test drops the outside\n' +
  '  if(uDiag > 3.5 && uDiag < 4.5){ fragColor = vec4(vec3(min(f.a, 1.0)), 1.0); return; }\n' +
  '  // diagnostic view 6: the owner\'s group (its parent id, the boundary the smoothing respects) as a colour\n' +
  '  if(uDiag > 5.5 && uDiag < 6.5){ float gid = texelFetch(uAux3, ivec2(uv / uTexel), 0).w; fragColor = vec4(fract(sin(gid * 12.9898) * 43758.5453), fract(sin(gid * 78.233) * 43758.5453), fract(sin(gid * 39.425) * 43758.5453), 1.0); return; }\n' +
  '  // depth weight: 1 near .. 0 far. Far volumes: softer normal, weaker shadow, less noise, bluer\n' +
  '  float dw = clamp(bx.g, 0.0, 1.0), far = uDepthFall * (1.0 - dw);\n' +
  '  float s = 1.0 + far * 3.0;   // normal footprint in texels (Normal smooth no longer widens it: a wide\n' +
  '                               // footprint straddles a step and reads it as a slope, a band as wide as itself)\n' +
  '  vec2 dx = vec2(uTexel.x * s, 0.0), dy = vec2(0.0, uTexel.y * s);\n' +
  '  float wx = 2.0 * uTexel.x * s, wy = 2.0 * uTexel.y * s * uAspect;   // world units\n' +
  '  float namp = (1.0 - 0.6 * far) * sB.z;\n' +
  '  // noise bias: the macro (undisplaced) light decides where the noise lives (-1 shadow only .. +1 light only)\n' +
  '  float edge;\n' +
  '  vec3 n0 = normalAt(uv, dx, dy, wx, wy, 0.0, 0.0, namp, sB.w, edge);\n' +
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
  '  float bias = uNoiseBias > 0.0 ? mix(1.0, smoothstep(-0.2, 0.5, l0), uNoiseBias) : mix(1.0, 1.0 - smoothstep(-0.2, 0.5, l0), -uNoiseBias);\n' +
  '  float bias2 = uNoiseBias2 > 0.0 ? mix(1.0, smoothstep(-0.2, 0.5, l0), uNoiseBias2) : mix(1.0, 1.0 - smoothstep(-0.2, 0.5, l0), -uNoiseBias2);\n' +
  '  vec3 n = normalAt(uv, dx, dy, wx, wy, bias, bias2, namp, sB.w, edge);   // (Normal smooth is inside: the gradient\'s bilateral average)\n' +
  '  // the rim turns toward the viewer: the dome edge is otherwise a dark ring that reads as an outline. Two controls,\n' +
  '  // independent: Rim soften by the distance to the exposed silhouette (edge), Puff rim by each puff\'s own rim weight\n' +
  '  // inside the cloud (bx.a, by its share of the surface). Where a lobe rim meets the silhouette the larger of the two\n' +
  '  // lifts, continuous and never over 1: no double application, no mask. Neither geometry nor coverage changes\n' +
  '  n = normalize(mix(n, vec3(0.0, 0.0, 1.0), max(uRim * edge, uPuffRim * bx.a)));\n' +
  '  // diagnostic views (Diag): 1 continuous grey lighting of the final normal (after Rim soften and Puff rim), 2 height, 3 the normal as RGB,\n' +
  '  // 5 how many of the four normal-footprint neighbours the same-surface test accepts (red: none)\n' +
  '  if(uDiag > 0.5 && uDiag < 6.5){   // (view 7, the light before the palette, is further down)\n' +
  '    if(uDiag < 1.5) fragColor = vec4(vec3(0.2 + 0.8 * max(dot(n, Lv), 0.0)), 1.0);\n' +
  '    else if(uDiag < 2.5) fragColor = vec4(vec3(fract(f.r / uRef * 2.0)), 1.0);\n' +
  '    else if(uDiag < 3.5) fragColor = vec4(n * 0.5 + 0.5, 1.0);\n' +
  '    else { float cnt = 0.0; for(int q4 = 0; q4 < 4; q4++){ vec2 q = uv + (q4 == 0 ? dx : q4 == 1 ? -dx : q4 == 2 ? dy : -dy); if(hAt(q, uv, bias, bias2, namp).y > 0.5) cnt += 1.0; } fragColor = cnt < 0.5 ? vec4(1.0, 0.1, 0.1, 1.0) : vec4(vec3(0.3 + 0.7 * cnt / 4.0), 1.0); }\n' +
  '    return;\n' +
  '  }\n' +
  '  // haze: an old, mixed parcel softens (flatter normal, less direct light, fainter edge)\n' +
  '  float haze = sA.y * (1.0 - ax.r);\n' +
  '  n = normalize(mix(n, vec3(0.0, 0.0, 1.0), 0.7 * haze + 0.4 * far));\n' +
  '  float lambert = dot(n, Lv);\n' +
  '  float bounce = max(0.0, dot(n, normalize(vec3(-Lv.x, -Lv.y, 0.25))));\n' +
  '  // contact shadow: computed by the field pass in object space (a ray toward the light against the other puffs as spheres)\n' +
  '  // and stored per texel; read unfiltered, so a silhouette texel is not mixed with the background\n' +
  '  float occ = texelFetch(uAux4, ivec2(uv / uTexel), 0).r;\n' +
  '  float contact = uContact * occ * smoothstep(0.5, 1.0, texelFetch(uField, ivec2(uv / uTexel), 0).a);\n' +
  '  // cavity: the surface below the mean of its surroundings a few texels out is a valley between puffs;\n' +
  '  // its cancelling slopes face the viewer and would catch full light, so less reaches it\n' +
  '  // cavity: sphere ambient occlusion from the field pass (the same loop as contact), stored per texel\n' +
  '  float cav = texelFetch(uAux4, ivec2(uv / uTexel), 0).g * smoothstep(0.5, 1.0, texelFetch(uField, ivec2(uv / uTexel), 0).a);\n' +
  '  float cavity = uCavity * cav;\n' +
  '  // Cavity in light: how much of the cavity darkening reaches the direct light on a lit face (the ambient cut is the\n' +
  '  // physical part, a valley sees less sky; the direct cut doubles up with Contact where the valley faces the sun).\n' +
  '  // 1 as before; 0 leaves sunlit creases their light and cuts only where the face already turns from the sun\n' +
  '  float cavD = cavity * mix(1.0 - smoothstep(-0.2, 0.5, lambert), 1.0, uCavityLit);\n' +
  '  float band = sB.y * bx.r;\n' +
  '  float stack = sA.z * f.b;\n' +
  '  float direct = 0.84 * pow(max(0.0, lambert), mix(1.5, 0.55, uHighlight)) * (1.0 - 0.7 * band) * (1.0 - 0.5 * stack);\n' +
  '  float ambient = (0.18 + uFill * bounce) * (1.0 - band) * (1.0 - 0.8 * stack);\n' +
  '  // (cavity cuts 0.85 of the direct and 0.9 of the ambient light at full strength; 0.6 and 0.7 read as conservative)\n' +
  '  direct *= (1.0 - contact) * (1.0 - 0.85 * cavD); ambient *= (1.0 - 0.5 * contact) * (1.0 - 0.9 * cavity);\n' +
  '  // shadow: faces turning away from the light lose ambient too (the old term scaled only the direct light,\n' +
  '  // which is already zero where the face turns away, so the slider did nothing)\n' +
  '  float sh = sB.x * (1.0 - 0.6 * far) * (1.0 - smoothstep(-0.25, 0.25, lambert));\n' +
  '  float light = ambient * (1.0 - 0.7 * sh) + direct;\n' +
  '  light = mix(light, 0.45, 0.5 * haze);\n' +
  '  light += bayer(floor(vUv / uTexel)) * 0.012 * uGrain;   // palette grain: a faint ordered dither before the bands\n' +
  '  // tone stippling: the light moved up to half a band by the ordered pattern, so pixels choose between the two\n' +
  '  // neighbouring palette colours; placed by Stipple bias (-1 shadows only .. +1 lit only). Coverage is untouched\n' +
  '  if(uStipple > 0.0){ float lw = smoothstep(-0.2, 0.5, lambert), place = uStippleBias > 0.0 ? mix(1.0, lw, uStippleBias) : mix(1.0, 1.0 - lw, -uStippleBias); light += (pat - 0.5) * uStipple * place / (clamp(uBands, 3.0, 5.0) - 1.0); }\n' +
  '  if(uDiag > 6.5 && uDiag < 7.5){ fragColor = vec4(vec3(clamp(light, 0.0, 1.0)), 1.0); return; }   // diagnostic view 7: the light before the palette (shadow, fill, contact, cavity, bands, stack in)\n' +
  '  vec3 cloud = palette(light);\n' +
  '  cloud = mix(cloud, uSkyColor, uAtmos * (1.0 - clamp(sA.x, 0.0, 1.0)));   // atmospheric perspective between clouds\n' +
  '  float soft = dis > 0.001 ? 1.0 : smoothstep(0.5, 0.5 + max(0.001, 0.45 * haze), f.a);   // a hazy parcel loses its hard edge\n' +
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
    this._float32 = !!gl.getExtension('OES_texture_float_linear');   // the height target is 32-bit when it can be filtered
    this.canvas = canvas;
    this._field = program(gl, FIELD_FS); this._shade = program(gl, SHADE_FS);
    this._fu = uniforms(gl, this._field, ['uSph', 'uTileHead', 'uTileList', 'uTexW', 'uTileSize', 'uTiles', 'uAspect', 'uT', 'uCap', 'uDissolve', 'uDotSize', 'uEvapScale', 'uRef', 'uLight', 'uCam', 'uOverhead', 'uContact', 'uCavity', 'uCavityReach']);
    this._su = uniforms(gl, this._shade, ['uField', 'uAux', 'uAux2', 'uAux3', 'uAux4', 'uTexel', 'uAspect', 'uLight', 'uHighlight', 'uFill', 'uBands', 'uNoise', 'uNoiseScale', 'uNoise2', 'uNoise2Scale', 'uNoiseBias', 'uNoiseBias2', 'uFlow', 'uTime', 'uRef', 'uPixelated', 'uAnchor', 'uStreak', 'uWindDir', 'uStyleA', 'uStyleB', 'uAtmos', 'uDepthFall', 'uCirrus', 'uCirrusScale', 'uCirrusAngle', 'uCirrusFlow', 'uVeil', 'uSkyColor', 'uDissolve', 'uDotSize', 'uCam', 'uOverhead', 'uRim', 'uPuffRim', 'uContact', 'uCavity', 'uCavityReach', 'uCavityLit', 'uGrain', 'uDiag', 'uT', 'uStipple', 'uStippleBias', 'uBreakup', 'uBreakupReach', 'uLock']);
    this._sphData = new Float32Array(MAX_SPH * 4 * 8);   // eight rows: the fifth is (puff id, parent id), the sixth to eighth the shape variation
    this._sphTex = gl.createTexture();
    // tile lists: a head texture (offset, count) per 16-texel tile, sized in resize, and a flat index list
    this._tileHead = gl.createTexture(); this._tileList = gl.createTexture(); this._tileSize = 16;
    this._listRows = 0; this._maxListRows = 2048;   // the list grows (doubling rows) up to 8M entries; past that the tiles double instead
    this._growList(256);
    gl.bindTexture(gl.TEXTURE_2D, this._sphTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, MAX_SPH, 8, 0, gl.RGBA, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    this._fieldTex = gl.createTexture(); this._auxTex = gl.createTexture(); this._aux2Tex = gl.createTexture(); this._aux3Tex = gl.createTexture(); this._aux4Tex = gl.createTexture(); this._fbo = gl.createFramebuffer();
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
    this._tileSize = 16; this._sizeTiles();
    var f32 = this._float32;
    [this._fieldTex, this._auxTex, this._aux2Tex, this._aux3Tex, this._aux4Tex].forEach(function (tex, ti) {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      if (ti === 0 && f32) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, w, h, 0, gl.RGBA, gl.FLOAT, null);
      else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    });
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._fieldTex, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, this._auxTex, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT2, gl.TEXTURE_2D, this._aux2Tex, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT3, gl.TEXTURE_2D, this._aux3Tex, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT4, gl.TEXTURE_2D, this._aux4Tex, 0);   // the contact term
    gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2, gl.COLOR_ATTACHMENT3, gl.COLOR_ATTACHMENT4]);
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
      cam: C ? { x: C.x, z: C.z, h: C.h, s: C.s, f: C.f, hor: C.hor, flat: clamp(num(C.flat, 0), 0, 1), k: num(C.span, 0) / Math.max(1e-3, baseY - topY), spanS: Math.max(1e-3, baseY - topY), sx: num(C.sx, 0), sy: num(C.sy, 0) } : null,
      sim: sim, idx: Math.min(31, idx | 0), zoom: zoom, pivX: num(sim.cx, 0.5), pivY: baseY, panX: num(look.panX, 0), panY: num(look.panY, 0),
      ref: (sim.refRadius || 0.08) * zoom,
      shear: Math.max(0, num(look.shear, 0)), shearBias: clamp(num(look.shearBias, 0), -1, 1), wx: Math.cos(wa), wy: -Math.sin(wa), lean: num(look.lean, 0),
      // wind drift (wind erosion, step 1): speed in fifths of a reference radius per second at full exposure, gust size in
      // reference radii, top emphasis: how much the exposure concentrates toward the crown
      windSpeed: Math.max(0, num(look.windSpeed, 0)), gust: Math.max(0.2, num(look.gustSize, 1.5)), top: clamp(num(look.topEmphasis, 0.5), 0, 1),
      erosion: Math.max(0, num(look.erosion, 0)),   // wind erosion, step 2: how fast an exposed lobe wears away
      wisps: clamp(Math.round(num(look.wispAmount, 0) * 8), 0, 8), wispLife: Math.max(1, num(look.wispLife, 8)),   // step 3: wisps per cloud at most, and their life in seconds
      spanY: Math.max(1e-3, baseY - topY),   // the sim's height range (base to nominal top), for the exposure
      prim: prim, pa: clamp(num(look.primAmt, 1), 0, 1), primPacked: prim + clamp(num(look.primAmt, 1), 0, 1) * 0.5,
      children: Math.max(0, Math.round(num(look.children, 4))), ratio: clamp(num(look.ratio, 0.42), 0.1, 0.8),
      levels: clamp(Math.round(num(look.levels, 3)), 1, 3), life: Math.max(0, num(look.life, 1)), embed: clamp(num(look.embed, 0.78), 0.3, 1),
      depthScale: num(look.depth, 1), roll: num(look.roll, 1),
      // step 4 (docs/core-audit.md): Depth scales the heights only (order and relief are one thing in a height
      // union); the sway of child puffs has its own scale, and a puff's depth weight (its fade) comes from its
      // unscaled depth, so Depth no longer changes either
      swayScale: num(look.swayScale, 1),
      // shape variation (amplitude, the aspect and contour parts, the seed): every puff\'s own warp, from its persistent
      // id and this seed alone (never the upload order or the sim\'s random sequence), so a puff keeps its shape for life
      vary: { amp: clamp(num(look.shapeVar, 0), 0, 1), st: clamp(num(look.stretchVar, 1), 0, 1), ct: clamp(num(look.contourVar, 1), 0, 1), seed: num(look.shapeSeed, 0), ang: clamp(num(look.angular, 0), 0, 1), sides: clamp(Math.round(num(look.sides, 5)), 3, 8) },
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
    // the shape variation of one puff: rows 5 and 6 (see the field pass). The hashes are of the id and the seed only
    function vary(V, id) {
      if (V.amp <= 0 && V.ang <= 0) return { c: 1, s: 0, a: 0, b: 1, A1: 0, B1: 0, A3: 0, B3: 0, ang: 0, n: 5 };
      var k = id * 0.7311 + V.seed * 131.71, th = hash(k + 1.1) * Math.PI;
      var a = 0.35 * V.amp * V.st * (2 * hash(k + 2.2) - 1);
      var c1 = 0.2 * V.amp * V.ct * hash(k + 3.3), p1 = hash(k + 4.4) * 6.2832, c3 = 0.1 * V.amp * V.ct * hash(k + 5.5), p3 = hash(k + 6.6) * 6.2832;
      // the angular factor never grows the footprint (the polygon is inscribed), but a bound of exactly 1 is the shader's
      // 'no warp' mark, so it is nudged past 1 when the angle is on
      return { c: Math.cos(th), s: Math.sin(th), a: a, b: (1 + Math.abs(a)) * (1 + c1 + c3) + (V.ang > 0 ? 1e-4 : 0), A1: c1 * Math.cos(p1), B1: c1 * Math.sin(p1), A3: c3 * Math.cos(p3), B3: c3 * Math.sin(p3), ang: V.ang, n: V.sides };
    }
    // the inverse warp: a point of the unit space (a child's seat on the shell) back to the field offset
    function varyOut(v, x, y) {
      if (v.b === 1) return [x, y];
      var qx = v.c * x + v.s * y, qy = -v.s * x + v.c * y, ph = Math.atan2(qy, qx);
      var f = 1 + v.A1 * Math.cos(ph) + v.B1 * Math.sin(ph) + v.A3 * Math.cos(3 * ph) + v.B3 * Math.sin(3 * ph);
      if (v.ang > 0) { var hs = Math.PI / v.n, t = ((ph % (2 * hs)) + 2 * hs) % (2 * hs) - hs, u = clamp((Math.abs(t) - 0.65 * hs) / (0.35 * hs), 0, 1), sm = u * u * (3 - 2 * u); f *= 1 + v.ang * ((Math.cos(hs) / Math.cos(t)) * (1 - sm) + sm - 1); }
      qx *= f * (1 + v.a); qy *= f / (1 + v.a);
      return [v.c * qx - v.s * qy, v.s * qx + v.c * qy];
    }
    function put(x, y, r, z0, stack, detail, fresh, dis, stretch, anx, any, primPacked, wx, wy, band, dw, id, pid, v, wer) {
      if (n >= MAX_SPH || r <= 1e-4) return false;
      var o = n * 4, o2 = (MAX_SPH + n) * 4, o3 = (MAX_SPH * 2 + n) * 4, o4 = (MAX_SPH * 3 + n) * 4, o5 = (MAX_SPH * 4 + n) * 4, o6 = (MAX_SPH * 5 + n) * 4, o7 = (MAX_SPH * 6 + n) * 4;
      D[o6] = v.c; D[o6 + 1] = v.s; D[o6 + 2] = v.a; D[o6 + 3] = v.b; D[o7] = v.A1; D[o7 + 1] = v.B1; D[o7 + 2] = v.A3; D[o7 + 3] = v.B3;
      var o8 = (MAX_SPH * 7 + n) * 4; D[o8] = v.ang; D[o8 + 1] = v.n; D[o8 + 2] = wer || 0; D[o8 + 3] = 0;   // z: the wind erosion amount
      D[o5] = id; D[o5 + 1] = pid; D[o5 + 2] = 0; D[o5 + 3] = 0;   // ownership: the puff's id (1-based upload index) and its parent's (roots: a virtual core per cloud, -(cloud + 1), or sim.parent[i] when the sim gives one)
      D[o] = x; D[o + 1] = y; D[o + 2] = r; D[o + 3] = z0;
      D[o2] = stack; D[o2 + 1] = detail; D[o2 + 2] = fresh; D[o2 + 3] = dis;
      D[o3] = anx; D[o3 + 1] = any; D[o3 + 2] = stretch; D[o3 + 3] = primPacked;
      D[o4] = wx; D[o4 + 1] = wy; D[o4 + 2] = band; D[o4 + 3] = dw;
      n++; return true;
    }
    var queue = [], q, j, c, F;
    // wind drift: an exposed lobe drifts downwind, the crown most and the body hardly, stretching as it goes. The drift is
    // accumulated per root id (in reference radii, bounded softly at 2 so a lobe stretches away but stays with its cloud)
    // and varied by a broad gust pattern that travels with the wind through the cloud (the surface detail travels with the
    // puff; this pattern moves through it, and only drives the slow drift, never the picture). Entries of parcels gone are dropped
    // The state is kept per cloud and runs on the cloud's own clock (its sim's accumulated time: the sky steps each sim at its
    // own rate, so the shared frame clock would run the drift, erosion, wisps and child cycles at another pace than the
    // cloud itself); a clock that goes back (a reset, a scrub, a cloud re-formed far away) starts the cloud's state afresh
    var WS = this._wind = this._wind || [];
    // wind erosion (step 2): an amount per root id that the same exposure and gusts raise (0.15 per second at Erosion 1 on a fully
    // exposed lobe in a full gust, so the crown wears through in 20 to 40 s) and that falls where exposure times gust is
    // under 0.15, so a sheltered lobe never erodes and a worn one mends slowly once the gust passes; never a scrolling
    // threshold, so nothing flickers. Up to
    // 3.4: the field pass scales the lobe's radius per pixel by 1 - amount * (0.3 + 0.7 noise), so the last specks go at 3.34;
    // the children carry their root's amount
    // wisps (step 3): when a lobe has worn past 1 (its connection thinning), a bounded number per cloud of elongated puffs
    // separate: one per lobe, born at its downwind edge with its motion, stretching along the wind, speeding up to the wind,
    // fraying as they go (their own erosion amount rises) and retiring at zero size. Roots without children, of the lobe's
    // family, so they blend with it while they overlap and part on their own once clear. Keyed by the lobe's id
    // roots
    for (c = 0; c < clouds.length; c++) {
      F = form(clouds[c], c);
      var sim = F.sim, B = sim.blobs, A = sim.aux, S = sim.spin, Dt = sim.detail, STR = sim.stretch || null;
      var count = Math.min(sim.blobCount | 0, 128), baseStart = num(sim.baseStart, count);
      var ct = sim.time !== undefined ? sim.time : time, W = WS[c];
      if (!W || ct < W.t) W = WS[c] = { t: ct, drift: new Map(), wear: new Map(), wisps: new Map(), hT: undefined, fresh: true };
      var dtW = clamp(ct - W.t, 0, 0.1); W.t = ct; F.t = ct; F.reborn = W.fresh; W.fresh = false;   // reborn: this frame's child births are now
      var drift = W.drift, driftNow = new Map(), wear = W.wear, wearNow = new Map(), wisps = W.wisps;
      var hTop = 1e-3; for (var i0 = 0; i0 < count; i0++) if (B[i0 * 4 + 2] > 1e-4 && A[i0 * 4 + 3] > 1e-6) hTop = Math.max(hTop, (F.pivY - B[i0 * 4 + 1]) / F.spanY);
      var hT = W.hT; hT = hT === undefined ? hTop : hT + (hTop - hT) * Math.min(1, dtW * 0.5); W.hT = hT;   // the cloud's top, eased, so a crown parcel dying does not re-expose the rest at once
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
        var zr = (A[o + 1] - 0.5) * 2 * F.ref - (1 - link) * r * 2.5, z0 = zr * F.depthScale + F.zOff;
        var dis = 1 - mixed * link;
        // the puff's own depth weight: 1 on the near face of the cloud, 0 at the back; the cloud's
        // depth weight scales the whole thing. Packed as cloud index + puff dw / 4.
        var pdw = clamp(0.5 + 0.5 * zr / (F.ref * 2), 0, 1) * F.dw;
        var dwp = F.idx + pdw * 0.25;
        // the shear follows the mixing only: a newborn, its link still rising, used to count as fully dispersed and came in as a
        // long spike (dis keeps the link for the shader: a parcel evaporating out is a dispersing one)
        var stretch = (1 + F.shear * (1 - mixed) * (1 + F.shearBias * (2 * pdw - 1))) * (STR ? Math.max(0.2, STR[i]) : 1);   // the sim may stretch a parcel itself (streets, trails)
        var rx, ry, hgt, band, hf = (F.pivY - B[o + 1]) / F.spanY / hT;   // exposure: height over the cloud's own top
        if (F.cam) {
          var C = F.cam, dy = F.pivY - B[o + 1], zp = Math.max(0.05, C.z + C.flat * dy * C.k), sc = C.f / zp;
          rx = 0.5 + (C.x + (B[o] - F.pivX) * C.s) * sc; ry = C.hor - (C.h + (1 - C.flat) * dy * C.s) * sc;
          hgt = Math.max(0, (1 - C.flat) * dy * C.s * sc) * F.lean; rx += F.wx * hgt; ry += F.wy * hgt;
          r *= C.s * sc;
          band = smoothstep(0, F.baseFall, 1 - dy / C.spanS);
          // the camera's sway is a translation: a puff nearer than the cloud's centre shifts more. Its depth in
          // the field (screen units) is a world depth of (z0 - zOff) * z / f, so the sway term is re-projected
          // at the puff's own distance; children get the same from their own depth below
          var sc2 = C.f / Math.max(0.05, zp - zr * F.swayScale * C.z / C.f);   // by the unscaled depth and Sway depth: Depth (relief) no longer moves the sway
          rx += -C.sx * (sc2 - sc); ry += C.sy * (sc2 - sc);
        } else {
          rx = F.pivX + (B[o] - F.pivX) * F.zoom; ry = F.pivY + (B[o + 1] - F.pivY) * F.zoom;
          hgt = Math.max(0, F.pivY - ry) * F.lean; rx += F.wx * hgt + F.panX; ry += F.wy * hgt + F.panY;
          r *= F.zoom;
          band = smoothstep(0, F.baseFall, 1 - (F.baseT - ry) / F.spanT);
        }
        if (r <= 1e-4) continue;   // a parcel still too small to draw: skip it, never stop the loop (put() fails for the budget too, and that break hid every later parcel)
        var stack0 = 0;   // a root puff carries no stack shade; children add their parent's underside
        var id = B[o + 3], pid = sim.parent ? sim.parent[i] : -(c + 1);   // the id is the parcel's seed: persistent across frames, unlike an upload index
        var wer = 0;
        if (F.windSpeed > 0 || F.erosion > 0) {
          var ex = Math.pow(clamp(hf, 0, 1), 1 + 4 * F.top), vs = F.windSpeed * 0.2, gs = F.ref * 4 * F.gust;
          var gx = (rx - F.wx * ct * vs * F.ref) / gs, gy = (ry - F.wy * ct * vs * F.ref) / gs;   // the gust pattern travels downwind at the wind speed
          var g = vnoise2(gx, gy), g2 = vnoise2(gx + 31.7, gy + 17.3), dr = drift.get(id) || { x: 0, y: 0 };
          var ua = 0.3 + 0.7 * g, uc = 0.4 * (g2 - 0.5);   // along the wind, gusting; a little across, wandering
          if (F.windSpeed > 0) {
            dr = { x: dr.x + (F.wx * ua - F.wy * uc) * vs * ex * dtW, y: dr.y + (F.wy * ua + F.wx * uc) * vs * ex * dtW };
            driftNow.set(id, dr);
            var al = Math.sqrt(dr.x * dr.x + dr.y * dr.y), sf = al > 1e-6 ? 2 * Math.tanh(al / 2) / al : 0;
            rx += dr.x * sf * F.ref; ry += dr.y * sf * F.ref; stretch *= 1 + 0.5 * al * sf;
          }
          if (F.erosion > 0) { wer = clamp((wear.get(id) || 0) + F.erosion * (ex * ua - 0.15) * 0.15 * dtW, 0, 3.4); wearNow.set(id, wer); }
          if (wer > 1 && F.wisps > 0 && !wisps.has(id)) {
            var nw = 0; wisps.forEach(function (w) { if (w.c === c) nw++; });
            if (nw < F.wisps) wisps.set(id, { c: c, x: rx + F.wx * r * 0.8, y: ry + F.wy * r * 0.8, r: r * 0.6, v: vs * ex * ua, age: 0, life: F.wispLife * (0.7 + 0.6 * hash(id + 9.9)), z: z0, dw: dwp, band: band, pid: pid, id: id + 0.5 + 1000 * hash(id * 0.53 + 3.3) });
          }
        }
        var vv = vary(F.vary, id);
        if (!put(rx, ry, r, z0, stack0, (0.4 + 0.6 * fresh) * LEVEL_DETAIL[0], mixed, dis, stretch, rx, ry, F.primPacked, F.wx, F.wy, band, dwp, id, pid, vv, wer)) break;
        queue.push({ id: id, v: vv, F: F, x: rx, y: ry, r: r, z: z0, zr: zr, seed: B[o + 3], ax: ax, ay: ay, az: az, angle: S[o + 3] * F.roll, fresh: fresh, mixed: mixed, stack: stack0, dis: dis, st: stretch, anx: rx, any: ry, dwp: dwp, band: band, zp: F.cam ? zp : 0, wer: wer });
      }
      // this cloud's wisps: moved, aged, drawn; retired past their life
      wisps.forEach(function (w, key) {
        if (w.c !== c) return;
        w.age += dtW; var u = w.age / w.life; if (u >= 1) { wisps.delete(key); return; }
        var vw = Math.max(F.windSpeed, 0.25) * 0.4, uv = smoothstep(0, 0.3, u), v = w.v + (vw - w.v) * uv;   // from the lobe's pace up to the wind's
        w.x += F.wx * v * F.ref * dtW; w.y += F.wy * v * F.ref * dtW;
        var env = smoothstep(0, 0.15, u) * (1 - smoothstep(0.45, 1, u)), ws = 1.5 + 2.5 * u, wwear = 0.8 + 2.2 * u;   // swells in, stretches and frays out
        put(w.x, w.y, w.r * env, w.z, 0, 0.3, 0, 1, ws, w.x, w.y, F.primPacked, F.wx, F.wy, w.band, w.dw, w.id, w.pid, vary(F.vary, w.id), wwear);
      });
      W.drift = driftNow; W.wear = wearNow;   // entries of parcels gone are dropped
    }
    // plan the budget: how many puffs each deeper level wants; the deepest level that does not fit is
    // thinned in whole children (integer slots): each parent keeps floor(fd * children + its own hash)
    // of them, so as the budget tightens parents give up one child at a time in a fixed order, and a
    // budget that wobbles by a few puffs a frame changes nothing (a dead band of 1/64 on fd). The old
    // fractional child (one per parent at a scaled radius) swelled and shrank with every frame's count
    // a parent whose children would be smaller than a field texel gets none (they would be invisible),
    // and the biggest parents on screen are served first, so the budget goes to the near clouds that show it
    // ... measured across the deformed footprint (the thin axis of a sheared parent), and the children fade in over the
    // second texel (cf below) instead of appearing whole at the first
    var minR = 1.0 / Math.max(1, this._w), k;
    function thinR(q) { return q.r * q.F.ratio * Math.min(1, q.st, 1 / Math.sqrt(Math.max(q.st, 1e-4))); }
    queue = queue.filter(function (q) { return q.F.levels < 2 || thinR(q) >= minR; });
    queue.sort(function (a, b) { return b.r - a.r; });
    var l1 = 0, l2 = 0;
    for (k = 0; k < queue.length; k++) { F = queue[k].F; if (F.levels >= 2) l1 += F.children; if (F.levels >= 3) l2 += F.children * F.children; }
    var fade = [1, 1, 1], cap = Math.min(MAX_SPH, this.budget || MAX_SPH);   // budget: a smaller cap for testing the thinning
    if (n + l1 > cap) { fade[1] = Math.max(0, (cap - n) / Math.max(1, l1)); fade[2] = 0; }
    else if (n + l1 + l2 > cap) fade[2] = Math.max(0, (cap - n - l1) / Math.max(1, l2));
    var last = this._fade || [1, 1, 1];
    for (k = 1; k < 3; k++) { if (fade[k] < 1 && last[k] < 1 && Math.abs(fade[k] - last[k]) < 1 / 64) fade[k] = last[k]; }
    this._fade = fade;
    this.degrade = fade[2] < 1 ? fade[2] : fade[1];
    // a child's birth is the parent's roll angle then, kept while the child is seen (entries not refreshed this frame are dropped)
    var born = this._born || new Map(), bornNow = new Map();
    for (var level = 0; level < 2 && queue.length; level++) {
      var next = [], fd = fade[level + 1];
      if (fd <= 0) break;
      // fd below 1 is taken with a 2% margin, since the hash rounding scatters the total by a few
      for (k = 0; k < queue.length && n < cap; k++) {
        q = queue[k]; F = q.F;
        if (F.levels < level + 2) continue;
        var keep = fd >= 1 ? F.children : Math.floor(fd * 0.98 * F.children + hash(q.seed + 77.7));
        for (j = 0; j < keep && n < cap; j++) {
          var cf = smoothstep(minR, 2 * minR, thinR(q));
          var rate = 0.7 + 0.6 * hash(q.seed + 4.7 + j * 41.3);
          var cyc = 1.2 + 1.0 * hash(q.seed + 12.3 + j * 29.7);
          // the child's age runs on the sim clock alone (0.12 per second at Life 1: about the old default turnover); it used to
          // run on the parent's roll too, so a high Roll gain made every child cycle fast whatever Life said
          var sraw = q.F.t * 0.12 * F.life + hash(q.seed + 5.5 + j * 7.1) * cyc;
          var ci = Math.floor(sraw / cyc), ph = sraw / cyc - ci;
          var cs = q.seed + ci * 101.3 + level * 17.9;   // reseeded every life
          var ck = cs + j * 3.1, b0 = q.F.reborn ? undefined : born.get(ck); if (b0 === undefined) b0 = q.angle; bornNow.set(ck, b0);
          var jit = hash(cs + j * 31.7) - 0.5;
          var zz = (1 - 2 * (j + 0.5 + jit * 0.55) / F.children) * 0.9;
          var azm = hash(cs + 1.3 + j * 13.9) * 6.2832;
          var sr = Math.sqrt(Math.max(1 - zz * zz, 0));
          var vx = sr * Math.cos(azm), vy = sr * Math.sin(azm), vz = zz;
          if (vy > 0) { vx = -vx; vy = -vy; }   // born on the upper shell (world y is down)
          // carried round by the parent's roll since birth (born on top, whatever the parent's angle then)
          var ca = (q.angle - b0) * rate, cc = Math.cos(ca), sn = Math.sin(ca);
          var d = q.ax * vx + q.ay * vy + q.az * vz;
          var ux = vx * cc + (q.ay * vz - q.az * vy) * sn + q.ax * d * (1 - cc);
          var uy = vy * cc + (q.az * vx - q.ax * vz) * sn + q.ay * d * (1 - cc);
          var uz = vz * cc + (q.ax * vy - q.ay * vx) * sn + q.az * d * (1 - cc);
          // the life envelope: nothing through the first and last 4% of the cycle (no frame straddles the reseed: the seat and
          // shape change while the child is at zero size), eased in to 24% and out from 76% with zero velocity at both ends.
          // The old sin^0.6 had infinite slope at birth and death: a child was an eighth of its size 1% into its life
          var env = smoothstep(0.04, 0.24, ph) * (1 - smoothstep(0.76, 0.96, ph));
          var cr = q.r * F.ratio * (0.8 + 0.4 * hash(cs + 5.1 + j * 23.0)) * env * cf;
          if (cr <= 1e-4) continue;
          var shell = q.r * F.embed * (0.7 + 0.3 * env);
          // the child sits on the parent's shell, which follows the primitive and the shear
          var ox = ux * shell, oy = uy * shell, pa = F.pa, prim = F.prim;
          if (prim === 1) oy /= 1 + 1.5 * pa; else if (prim === 2) ox /= 1 + 2 * pa * Math.max(0, -uy); else if (prim === 3) { var qx = ox * ox, qy = oy * oy, l4 = Math.sqrt(Math.sqrt(qx * qx + qy * qy)), ll = Math.sqrt(qx + qy) || 1e-6, kk = 1 + pa * (ll / l4 - 1); ox *= kk; oy *= kk; }
          else if (prim === 4) { var l1n = Math.abs(ox) + Math.abs(oy) || 1e-6, l2n = Math.sqrt(ox * ox + oy * oy), kd = 1 + pa * (l2n / l1n - 1); ox *= kd; oy *= kd; }
          if (q.v.b !== 1) { var vo = varyOut(q.v, ox, oy); ox = vo[0]; oy = vo[1]; }   // ... and the parent's shape variation (the child sits on the deformed shell)
          if (q.st !== 1) { var al2 = ox * F.wx + oy * F.wy, ac2 = ox * F.wy - oy * F.wx, sa = al2 * q.st, sc = ac2 / Math.sqrt(q.st); ox = F.wx * sa + F.wy * sc; oy = F.wy * sa - F.wx * sc; }
          var x = q.x + ox, y = q.y + oy, z = q.z + uz * shell * F.depthScale, zr2 = q.zr + uz * shell;
          // parallax by the child's own depth: the sim swayed the root by its depth; the child sits uz * shell
          // nearer or farther, so it sways by that much more (otherwise children slide with their root as a group)
          var pz = uz * shell * F.swayScale / F.ref; x += (F.sim.swx || 0) * F.zoom * pz; y += (F.sim.swy || 0) * F.zoom * pz;
          if (F.cam && q.zp > 0) {   // under the camera: the sway re-projected at the child's depth, less the parent's share
            var Cc = F.cam, scP = Cc.f / Math.max(0.05, q.zp - q.zr * F.swayScale * Cc.z / Cc.f), scC = Cc.f / Math.max(0.05, q.zp - zr2 * F.swayScale * Cc.z / Cc.f);
            x += -Cc.sx * (scC - scP); y += Cc.sy * (scC - scP);
          }
          // stacked shade: the own gradient is in the shader; the inherited part is the parent's
          // gradient at the birth point (uy > 0 is the parent's underside)
          var stack = q.stack * 0.6 + 0.5 * smoothstep(-0.6, 0.9, uy);
          var band2 = F.cam ? q.band : smoothstep(0, F.baseFall, 1 - (F.baseT - y) / F.spanT);   // under the camera the band is the parent's (a sheet's rows are depth, not height)
          var pdw2 = clamp(0.5 + 0.5 * zr2 / (F.ref * 2), 0, 1) * F.dw, dwp2 = F.idx + pdw2 * 0.25;
          // the child's id: from its seed, scattered by a hash so that cousins never share one (seeds are linear in j, and a
          // grandchild of child 0 had the id of another of child 1); persistent for the child's life, so its shape is too
          var cid = cs + j * 3.1 + 1.7 + 1000 * hash(cs * 0.37 + j * 5.9), cv = vary(F.vary, cid);
          put(x, y, cr, z, stack, (0.4 + 0.6 * q.fresh) * LEVEL_DETAIL[level + 1], q.mixed, q.dis, q.st, q.anx, q.any, F.primPacked, F.wx, F.wy, band2, dwp2, cid, q.id, cv, q.wer);
          next.push({ id: cid, v: cv, F: F, x: x, y: y, r: cr, z: z, zr: zr2, seed: cs + j * 3.1, ax: q.ax, ay: q.ay, az: q.az, angle: q.angle, fresh: q.fresh, mixed: q.mixed, stack: stack, dis: q.dis, st: q.st, anx: q.anx, any: q.any, band: band2, zp: q.zp, wer: q.wer });
        }
      }
      queue = next.filter(function (q) { return thinR(q) >= minR; }).sort(function (a, b) { return b.r - a.r; });
    }
    this._born = bornNow;
    this.count = n;
    var gl = this.gl;
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this._sphTex);
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, MAX_SPH);   // D is laid out MAX_SPH wide; upload only the used columns
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, Math.max(1, n), 8, gl.RGBA, gl.FLOAT, D, 0);
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, 0);
    this._bin();
  };

  PuffRenderer.prototype._growList = function (rows) {
    var gl = this.gl; this._listRows = rows; this._tileData = new Float32Array(4096 * rows);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this._tileList); gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, 4096, rows, 0, gl.RED, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  };
  PuffRenderer.prototype._sizeTiles = function () {
    var gl = this.gl, ts = this._tileSize; this._tx = Math.ceil(this._w / ts); this._ty = Math.ceil(this._h / ts); this._headData = new Float32Array(this._tx * this._ty * 2);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this._tileHead); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG32F, this._tx, this._ty, 0, gl.RG, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  };

  // Bin the spheres into tiles (16 texels, doubled when the list would exceed its ceiling) by their reach (the field pass's coarse reject: r * max(1, stretch,
  // 1 / sqrt(stretch)) * shape bound * 1.6, so every sphere a texel could accept is in its tile's list). Counting sort:
  // counts per tile, prefix offsets, then the indices; the list is one flat texture, 4096 wide
  PuffRenderer.prototype._bin = function () {
    var D = this._sphData, n = this.count, W = this._w, tx = this._tx, ty = this._ty, head = this._headData, list = this._tileData, cap = list.length, TS = this._tileSize;
    var cnt = new Int32Array(tx * ty), box = new Int32Array(n * 4), i, o, x0, x1, y0, y1, x, y;
    for (i = 0; i < n; i++) {
      o = i * 4; var st = D[(MAX_SPH * 2 + i) * 4 + 2], reach = D[o + 2] * Math.max(1, st, 1 / Math.sqrt(Math.max(st, 1e-4))) * D[(MAX_SPH * 5 + i) * 4 + 3] * 1.6 * W / TS;
      var cx = D[o] * W / TS, cy = D[o + 1] * W / TS;
      x0 = Math.max(0, Math.floor(cx - reach)); x1 = Math.min(tx - 1, Math.floor(cx + reach)); y0 = Math.max(0, Math.floor(cy - reach)); y1 = Math.min(ty - 1, Math.floor(cy + reach));
      box[o] = x0; box[o + 1] = x1; box[o + 2] = y0; box[o + 3] = y1;
      for (y = y0; y <= y1; y++) for (x = x0; x <= x1; x++) cnt[y * tx + x]++;
    }
    var total = 0, t;
    for (t = 0; t < cnt.length; t++) { head[t * 2] = total; head[t * 2 + 1] = 0; total += cnt[t]; }
    if (total > cap) {   // too many entries: a longer list while it fits the ceiling, else coarser tiles (fewer entries per sphere), and bin again
      if (this._listRows < this._maxListRows) { this._growList(Math.min(this._maxListRows, this._listRows * 2)); return this._bin(); }
      if (TS < 256) { this._tileSize = TS * 2; this._sizeTiles(); return this._bin(); }
      if (!this._binWarned) { this._binWarned = true; console.warn('tile list overflow', total); }
    }
    for (i = 0; i < n; i++) {
      o = i * 4; x0 = box[o]; x1 = box[o + 1]; y0 = box[o + 2]; y1 = box[o + 3];
      for (y = y0; y <= y1; y++) for (x = x0; x <= x1; x++) { t = y * tx + x; var k = head[t * 2] + head[t * 2 + 1]; if (k < cap) { list[k] = i; head[t * 2 + 1]++; } }
    }
    var gl = this.gl, rows = Math.min(this._listRows, Math.max(1, Math.ceil(Math.min(total, cap) / 4096)));
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this._tileHead); gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, tx, ty, gl.RG, gl.FLOAT, head);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this._tileList); gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 4096, rows, gl.RED, gl.FLOAT, list, 0);
    this.tileEntries = total;
  };

  // render(clouds, time, sky) or render(sim, look, time)
  PuffRenderer.prototype.render = function (a, b, cc) {
    var clouds, time, sky;
    if (a && a.blobs) { clouds = [{ sim: a, look: b }]; time = cc; sky = b; }
    else { clouds = a; time = b; sky = cc || (clouds[0] && clouds[0].look) || {}; }
    var gl = this.gl, c = this.canvas, asp = c.height / c.width;
    // the style reference radius: the nearest (largest-scale) cloud's
    var ref = 0.08;
    if (clouds.length) {   // from clouds in or near the frame only: an off-screen cloud must not change a visible one's blend
      ref = 0;
      for (var i = 0; i < clouds.length; i++) {
        var Fi = form(clouds[i], i), Ci = Fi.cam;
        if (Ci) { var scI = Ci.f / Math.max(0.05, Ci.z), cxI = 0.5 + Ci.x * scI, cyI = Ci.hor - Ci.h * scI; if (cxI < -0.4 || cxI > 1.4 || cyI < -0.4 || cyI > 1.4) continue; }
        ref = Math.max(ref, Ci ? Fi.ref * Math.min(1, 1.2 / Fi.zoom) : Fi.ref);
      }
      if (ref <= 0) ref = 0.08;
    }
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
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this._tileHead); gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this._tileList);
    gl.uniform1i(this._fu.uSph, 0); gl.uniform1i(this._fu.uTileHead, 1); gl.uniform1i(this._fu.uTileList, 2); gl.uniform1f(this._fu.uTexW, this._w); gl.uniform1f(this._fu.uTileSize, this._tileSize); gl.uniform2i(this._fu.uTiles, this._tx, this._ty); gl.uniform1f(this._fu.uAspect, asp);
    var T = Math.max(0.002, ref * 0.08 * num(sky.softness, 1.4)); this._T = T;
    gl.uniform1f(this._fu.uT, T); gl.uniform1f(this._fu.uCap, clamp(num(sky.cap, 0), 0, 1)); gl.uniform1f(this._fu.uDissolve, clamp(num(sky.dissolve, 0), 0, 1)); gl.uniform1f(this._fu.uDotSize, Math.max(1, Math.round(num(sky.dotSize, 1)))); gl.uniform1f(this._fu.uEvapScale, Math.max(0.1, num(sky.evapScale, 3))); gl.uniform1f(this._fu.uRef, ref);
    var sunA = num(sky.sun, 60) * Math.PI / 180, el = num(sky.elevation, 40) * Math.PI / 180, cam = sky.cam;
    gl.uniform3f(this._fu.uLight, Math.cos(sunA) * Math.cos(el), -Math.sin(sunA) * Math.cos(el), Math.sin(el));
    gl.uniform4f(this._fu.uCam, cam ? num(cam.x, 0) : 0, cam ? num(cam.z, 0) : 0, cam ? num(cam.hor, 0) : 0, cam ? num(cam.alt, 0) : 0);
    gl.uniform1f(this._fu.uOverhead, clamp(num(sky.overhead, 0), 0, 1)); gl.uniform1f(this._fu.uContact, clamp(num(sky.contact, 0), 0, 1));
    gl.uniform1f(this._fu.uCavity, clamp(num(sky.cavity, 0), 0, 1)); gl.uniform1f(this._fu.uCavityReach, Math.max(1, num(sky.cavityReach, 8)));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    // shade
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, c.width, c.height);
    if (px > 0) { gl.clearColor(0.075, 0.4525, 0.575, 1); gl.clear(gl.COLOR_BUFFER_BIT); gl.viewport(vx, vy, vw, vh); }
    gl.useProgram(this._shade);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this._fieldTex);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this._auxTex);
    gl.activeTexture(gl.TEXTURE3); gl.bindTexture(gl.TEXTURE_2D, this._aux2Tex);
    gl.activeTexture(gl.TEXTURE4); gl.bindTexture(gl.TEXTURE_2D, this._aux3Tex);
    gl.activeTexture(gl.TEXTURE5); gl.bindTexture(gl.TEXTURE_2D, this._aux4Tex);
    var su = this._su;
    gl.uniform1i(su.uField, 1); gl.uniform1i(su.uAux, 2); gl.uniform1i(su.uAux2, 3); gl.uniform1i(su.uAux3, 4); gl.uniform1i(su.uAux4, 5); gl.uniform2f(su.uTexel, 1 / this._w, 1 / this._h); gl.uniform1f(su.uAspect, asp);
    gl.uniform3f(su.uLight, Math.cos(sunA) * Math.cos(el), -Math.sin(sunA) * Math.cos(el), Math.sin(el));
    gl.uniform1f(su.uHighlight, clamp(num(sky.highlight, 0.68), 0, 1));
    gl.uniform1f(su.uFill, num(sky.fill, 0.2)); gl.uniform1f(su.uBands, num(sky.bands, 5));
    gl.uniform1f(su.uNoise, num(sky.noise, 0.3)); gl.uniform1f(su.uNoiseScale, num(sky.noiseScale, 1)); gl.uniform1f(su.uFlow, num(sky.flow, 0.01));
    var swa = num(sky.wind, 0) * Math.PI / 180; gl.uniform1f(su.uStreak, clamp(num(sky.streak, 0), 0, 1)); gl.uniform2f(su.uWindDir, Math.cos(swa), -Math.sin(swa));
    gl.uniform1f(su.uNoise2, num(sky.noise2, 0)); gl.uniform1f(su.uNoise2Scale, num(sky.noise2Scale, 4)); gl.uniform1f(su.uNoiseBias, clamp(num(sky.noiseBias, 0), -1, 1)); gl.uniform1f(su.uNoiseBias2, clamp(num(sky.noiseBias2, num(sky.noiseBias, 0)), -1, 1)); gl.uniform1f(su.uAnchor, clamp(num(sky.anchor, 1), 0, 1));   // (noise 2 follows noise 1's bias when it has none of its own: older presets)
    gl.uniform1f(su.uAtmos, clamp(num(sky.atmos, 0), 0, 1)); gl.uniform1f(su.uDepthFall, clamp(num(sky.depthFall, 0), 0, 1));
    gl.uniform1f(su.uCirrus, clamp(num(sky.cirrus, 0), 0, 1)); gl.uniform1f(su.uCirrusScale, num(sky.cirrusScale, 2)); gl.uniform1f(su.uCirrusAngle, num(sky.cirrusAngle, -12) * Math.PI / 180); gl.uniform1f(su.uCirrusFlow, num(sky.cirrusFlow, 0.01)); gl.uniform1f(su.uVeil, clamp(num(sky.veil, 0), 0, 1));
    gl.uniform1f(su.uDissolve, clamp(num(sky.dissolve, 0), 0, 1)); gl.uniform1f(su.uDotSize, Math.max(1, Math.round(num(sky.dotSize, 1))));
    gl.uniform1f(su.uTime, time); gl.uniform1f(su.uRef, ref);
    // per-cloud style: a cloud's look may set haze, stackShade, dither, shadow, baseShade, noise and
    // smooth for itself (a stratus is hazy and flat, a cirrus dithered, whatever the sky's style says)
    var SA = this._styleA || (this._styleA = new Float32Array(128)), SB = this._styleB || (this._styleB = new Float32Array(128));
    for (var ci = 0; ci < 32; ci++) {
      var L = ci < clouds.length ? (clouds[ci].look || {}) : {}, o4 = ci * 4;
      var pick = function (k, d) { return L[k] !== undefined ? num(L[k], d) : num(sky[k], d); };
      SA[o4] = clamp(num(L.far, 1), 0, 1); SA[o4 + 1] = clamp(pick('haze', 0.5), 0, 1); SA[o4 + 2] = clamp(pick('stackShade', 0.4), 0, 1); SA[o4 + 3] = clamp(pick('dither', 0), 0, 1);
      SB[o4] = clamp(pick('shadow', 0.64), 0, 1); SB[o4 + 1] = clamp(pick('baseShade', 0.5), 0, 1); SB[o4 + 2] = (L.noise !== undefined && num(sky.noise, 0.3) >= 0.02) ? num(L.noise, 0.3) / num(sky.noise, 0.3) : 1;   // with the sky's noise at zero the ratio is meaningless (it silenced noise 2 too)
      SB[o4 + 3] = clamp(pick('smooth', 0.5), 0, 1);
    }
    gl.uniform4fv(su.uStyleA, SA); gl.uniform4fv(su.uStyleB, SB);
    gl.uniform1f(su.uPixelated, sky.pixelated === false ? 0 : 1);
    gl.uniform3f(su.uSkyColor, 0.075, 0.4525, 0.575);
    // (puffRim default 0.5: before rimV 2 the shader floored it by Rim soften, whose default is 0.5; see puffs.html)
    gl.uniform1f(su.uOverhead, clamp(num(sky.overhead, 0), 0, 1)); gl.uniform1f(su.uRim, clamp(num(sky.rim, 0.5), 0, 1)); gl.uniform1f(su.uPuffRim, clamp(num(sky.puffRim, 0.5), 0, 1)); gl.uniform1f(su.uContact, clamp(num(sky.contact, 0), 0, 1)); gl.uniform1f(su.uCavity, clamp(num(sky.cavity, 0), 0, 1)); gl.uniform1f(su.uCavityReach, Math.max(1, num(sky.cavityReach, 8))); gl.uniform1f(su.uCavityLit, clamp(num(sky.cavityLit, 1), 0, 1)); gl.uniform1f(su.uGrain, Math.max(0, num(sky.grain, 1))); gl.uniform1f(su.uDiag, num(sky.diag, 0)); gl.uniform1f(su.uT, this._T);
    gl.uniform1f(su.uStipple, clamp(num(sky.stipple, 0), 0, 1)); gl.uniform1f(su.uStippleBias, clamp(num(sky.stippleBias, 0), -1, 1)); gl.uniform1f(su.uBreakup, clamp(num(sky.breakup, 0), 0, 1)); gl.uniform1f(su.uBreakupReach, Math.max(1, num(sky.breakupReach, 6))); gl.uniform1f(su.uLock, sky.patternLock === 0 ? 0 : 1);
    gl.uniform4f(su.uCam, cam ? num(cam.x, 0) : 0, cam ? num(cam.z, 0) : 0, cam ? num(cam.hor, 0) : 0, cam ? num(cam.alt, 0) : 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  PuffRenderer.MAX_SPH = MAX_SPH;
  PuffRenderer.PRIMS = PRIMS;
  window.PuffRenderer = PuffRenderer;
})();
