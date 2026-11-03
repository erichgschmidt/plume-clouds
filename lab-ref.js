/*
 * lab-ref.js: a CPU reference of PuffRenderer's field pass (FIELD_FS in src/puffs.js), one pixel at a
 * time, for the Artifact Lab (docs/core-audit.md step 5). It follows the GLSL branch for branch so the
 * lab can check the GPU rows against it after every rule change. Classic script, no build.
 *
 * fieldRef(D, count, params, x, y)
 *   D       renderer._sphData (seven rows of MAX_SPH vec4: (x,y,r,z0), attrs, (anchor.xy, stretch, prim),
 *           (wind.xy, band, depth weight), (id, parent id), (cos, sin, aspect, bound), (A1, B1, A3, B3), (angular, sides))
 *   count   renderer.count
 *   params  { W, H: field texels; T: uT; cap: uCap; MAX_SPH (default PuffRenderer.MAX_SPH); light: [x, y, z] and
 *           contact > 0 for the contact term (o5.r), the light already turned by the camera pitch; cavity > 0 and
 *           cavityReach (texels) for the cavity term (o5.g) }
 *   x, y    texel indices, GL convention (y up from the bottom row), as readPixels addresses them
 *           body > 0 and bodySoft (reference radii) for the body slope (o5.ba)
 *   returns { H, mask, Gx, Gy, rim, contact, cavity, Bx, By } = the shader's o.r, o.a, o4.x, o4.y, o3.w, o5.r, o5.g, o5.b, o5.a
 */
(function () {
  'use strict';
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function mix(a, b, t) { return a * (1 - t) + b * t; }
  function smoothstep(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  // the shape variation (FIELD_FS varyIn / varyGrad): rows 5 and 6 of puff i
  // the contour factor and its derivative (FIELD_FS shapeF): harmonics (row 6) times the rounded polygon (row 7)
  function shapeF(D, M, i, ph) {
    var o6 = (M * 6 + i) * 4, o7 = (M * 7 + i) * 4;
    var f = 1 + D[o6] * Math.cos(ph) + D[o6 + 1] * Math.sin(ph) + D[o6 + 2] * Math.cos(3 * ph) + D[o6 + 3] * Math.sin(3 * ph);
    var df = -D[o6] * Math.sin(ph) + D[o6 + 1] * Math.cos(ph) - 3 * D[o6 + 2] * Math.sin(3 * ph) + 3 * D[o6 + 3] * Math.cos(3 * ph);
    var amt = D[o7];
    if (amt > 0) {
      var hs = Math.PI / D[o7 + 1], t = ((ph % (2 * hs)) + 2 * hs) % (2 * hs) - hs, cp = Math.cos(hs), ct = Math.cos(t);
      var a = cp / ct, da = cp * Math.sin(t) / (ct * ct);
      var u = clamp((Math.abs(t) - 0.65 * hs) / (0.35 * hs), 0, 1), sm = u * u * (3 - 2 * u), dsm = 6 * u * (1 - u) / (0.35 * hs) * Math.sign(t);
      var g = mix(a, 1, sm), dg = da * (1 - sm) + (1 - a) * dsm, P = mix(1, g, amt), dP = amt * dg;
      df = df * P + f * dP; f *= P;
    }
    return [f, df];
  }
  function varyIn(D, M, i, dx, dy) {
    var o5 = (M * 5 + i) * 4, c = D[o5], sn = D[o5 + 1], a = D[o5 + 2];
    var qx = c * dx + sn * dy, qy = -sn * dx + c * dy; qx /= 1 + a; qy *= 1 + a;
    var ph = Math.atan2(qy, qx), f = shapeF(D, M, i, ph)[0];
    qx /= f; qy /= f;
    return [c * qx - sn * qy, sn * qx + c * qy];
  }
  function varyGrad(D, M, i, gx, gy, x1, y1) {
    var o5 = (M * 5 + i) * 4, c = D[o5], sn = D[o5 + 1], a = D[o5 + 2];
    var g1x = c * gx + sn * gy, g1y = -sn * gx + c * gy, px = c * x1 + sn * y1, py = -sn * x1 + c * y1;
    var ph = Math.atan2(py, px), fd = shapeF(D, M, i, ph), f = fd[0], df = fd[1];
    var qx = px * f, qy = py * f, q2 = Math.max(qx * qx + qy * qy, 1e-12), dq = qx * g1x + qy * g1y;
    var g2x = g1x / f - df * -qy * dq / (q2 * f * f), g2y = g1y / f - df * qx * dq / (q2 * f * f);
    g2x /= 1 + a; g2y *= 1 + a;
    return [c * g2x - sn * g2y, sn * g2x + c * g2y];
  }

  function fieldRef(D, count, P, x, y) {
    var M = P.MAX_SPH || (window.PuffRenderer && PuffRenderer.MAX_SPH) || 4096;
    var W = P.W, Hh = P.H, asp = Hh / W, T = P.T, T2 = T * 4, cap = P.cap, dissolve = P.dissolve || 0, dot = P.dotSize || 1;
    // the dither threshold at this texel (gl_FragCoord = texel + 0.5), for the dissolve of dispersing puffs
    function fr(v) { return v - Math.floor(v); }
    function bayer8(x, y) { x = ((x % 8) + 8) % 8; y = ((y % 8) + 8) % 8; var v = 0; for (var b = 0; b < 3; b++) v = v * 4 + ((x >> (2 - b)) & 1) * 2 + (((x ^ y) >> (2 - b)) & 1); return v / 64 - 0.5; }
    function h21(x, y) { var h = (Math.imul(x | 0, 73856093) ^ Math.imul(y | 0, 19349663)) >>> 0; h = Math.imul(h, 2654435761) >>> 0; h = (h ^ (h >>> 13)) >>> 0; h = Math.imul(h, 2246822519) >>> 0; return (h >>> 8) / 16777216; }
    function vnoise(x, y) { var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy; fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy); return mix(mix(h21(ix, iy), h21(ix + 1, iy), fx), mix(h21(ix, iy + 1), h21(ix + 1, iy + 1), fx), fy); }
    var bq = Math.floor((x + 0.5) / dot), bqy = Math.floor((y + 0.5) / dot), b8 = bayer8(bq, bqy) + 0.5, evapScale = P.evapScale || 3, ref = P.ref || 0.1;
    function erode(i) { var dis = D[(M + i) * 4 + 3], amt = dissolve * dis + D[(M * 7 + i) * 4 + 2]; if (amt <= 0.001) return 1; var o2d = (M * 2 + i) * 4, pid = D[(M * 4 + i) * 4 + 1], ph = h21(Math.floor(pid * 64), 7);
      var n = vnoise((px - D[o2d]) / ref * evapScale + ph * 37.1, (py - D[o2d + 1]) / ref * evapScale + ph * 11.7); return Math.max(0, 1 - amt * (0.3 + 0.7 * n)); }
    // p = vec2(vUv.x, (1 - vUv.y) * uAspect) at the texel centre
    var px = (x + 0.5) / W, py = (1 - (y + 0.5) / Hh) * asp;
    var i, o0, o1, o2, o3, o4, dx, dy, r, st, prim, pa, q, len, d2, u, h, along, across;

    // ownership pre-pass: the highest puff containing the pixel
    var winId = -1, winPid = -2, winH = -1e9, winIdx = -1, winZ = 0, winU = 0, winR = 0, ph = [], pidA = [], ppA = [];
    for (i = 0; i < count; i++) {
      o0 = i * 4; o2 = (M * 2 + i) * 4; o3 = (M * 3 + i) * 4; o4 = (M * 4 + i) * 4;
      dx = px - D[o0]; dy = py - D[o0 + 1]; r = D[o0 + 2] * erode(i); st = D[o2 + 2]; if (r <= 1e-5) continue;
      var vb = D[(M * 5 + i) * 4 + 3], rr = r * Math.max(Math.max(1, st), 1 / Math.sqrt(Math.max(st, 1e-4))) * vb;
      if (dx * dx + dy * dy > rr * rr) continue;
      if (st !== 1) { along = dx * D[o3] + dy * D[o3 + 1]; across = dx * D[o3 + 1] - dy * D[o3]; dx = along / st; dy = across * Math.sqrt(st); }
      if (vb !== 1) { var vv = varyIn(D, M, i, dx, dy); dx = vv[0]; dy = vv[1]; }
      prim = Math.floor(D[o2 + 3] + 0.01); pa = (D[o2 + 3] - Math.floor(D[o2 + 3] + 0.01)) * 2;
      if (prim === 1) dy *= 1 + 1.5 * pa;
      else if (prim === 2) dx *= 1 + 2 * pa * Math.max(0, -dy) / r;
      else if (prim === 3) { q = Math.sqrt(Math.sqrt(dx * dx * dx * dx + dy * dy * dy * dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      else if (prim === 4) { q = (Math.abs(dx) + Math.abs(dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      d2 = dx * dx + dy * dy; if (d2 >= r * r) continue;
      u = Math.sqrt(d2) / r;
      h = D[o0 + 3] + D[o4 + 2] * r * mix(Math.sqrt(1 - u * u), 1 - u * u, cap);   // row 4 .z: the relief of the puff's level
      if (ph.length < 8) { ph.push(h); pidA.push(D[o4]); ppA.push(D[o4 + 1]); }
      else { var lo = 0; for (var qq = 1; qq < 8; qq++) if (ph[qq] < ph[lo]) lo = qq; if (h > ph[lo]) { ph[lo] = h; pidA[lo] = D[o4]; ppA[lo] = D[o4 + 1]; } }
      if (h > winH) { winH = h; winId = D[o4]; winPid = D[o4 + 1]; winIdx = i; winZ = D[o0 + 3]; winU = u; winR = r; }
    }

    var m = -1e9, acc = 0, mO = -1e9, accO = 0, ins = 0, cI = -1, cO = -1;   // cI / cO: the cloud of the highest containing puff and of the highest skirt
    var m2 = -1e9, acc2 = 0, m2O = -1e9, acc2O = 0;
    var sm = -1e9, sacc = 0;
    var GIx = 0, GIy = 0, GOx = 0, GOy = 0, RI = 0, wantB = P.body > 0, bodyC = [];
    for (i = 0; i < count; i++) {
      o0 = i * 4; o1 = (M + i) * 4; o2 = (M * 2 + i) * 4; o3 = (M * 3 + i) * 4; o4 = (M * 4 + i) * 4;
      dx = px - D[o0]; dy = py - D[o0 + 1]; r = D[o0 + 2] * erode(i); st = D[o2 + 2]; if (r <= 1e-5) continue;
      var vb2 = D[(M * 5 + i) * 4 + 3], rr2 = r * Math.max(1, st) * vb2;
      if (dx * dx + dy * dy > rr2 * rr2 * 2.5) continue;
      var wx = D[o3], wy = D[o3 + 1];
      if (st !== 1) { along = dx * wx + dy * wy; across = dx * wy - dy * wx; dx = along / st; dy = across * Math.sqrt(st); }
      if (vb2 !== 1) { var vv2 = varyIn(D, M, i, dx, dy); dx = vv2[0]; dy = vv2[1]; }
      prim = Math.floor(D[o2 + 3] + 0.01); pa = (D[o2 + 3] - Math.floor(D[o2 + 3] + 0.01)) * 2;
      if (prim === 1) dy *= 1 + 1.5 * pa;
      else if (prim === 2) dx *= 1 + 2 * pa * Math.max(0, -dy) / r;
      else if (prim === 3) { q = Math.sqrt(Math.sqrt(dx * dx * dx * dx + dy * dy * dy * dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      else if (prim === 4) { q = (Math.abs(dx) + Math.abs(dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      d2 = dx * dx + dy * dy;
      if (d2 > r * r * 2.25) continue;
      var dist = Math.sqrt(d2);
      var tt = clamp((dist - r) / (0.5 * r), 0, 0.995), pen = r * tt * tt / (1 - tt);
      var d1x = dx / Math.max(dist, 1e-6), d1y = dy / Math.max(dist, 1e-6), gn = 1;
      if (vb2 !== 1) { var vg = varyGrad(D, M, i, d1x, d1y, dx, dy); gn = Math.max(Math.sqrt(vg[0] * vg[0] + vg[1] * vg[1]), 1e-3); }
      var e = (r - dist - pen) / (T * gn);
      if (e > sm) { sacc = sacc * Math.exp(sm - e) + 1; sm = e; } else sacc += Math.exp(e - sm);
      var inside = d2 < r * r;
      u = dist / r;
      var sph = u < 1 ? Math.sqrt(1 - u * u) : -(u - 1) * 2.0647;
      var par = u < 1 ? 1 - u * u : -2 * (u - 1);
      var rel = D[o4 + 2];
      h = D[o0 + 3] + rel * (r * mix(sph, par, cap) - pen);
      var dsph = u < 1 ? Math.max(-20, -u / Math.sqrt(Math.max(1e-6, 1 - u * u))) : -2.0647;
      var dpar = u < 1 ? -2 * u : -2;
      var dpen = (tt > 0 && tt < 0.995) ? Math.min(20, 2 * (2 * tt - tt * tt) / ((1 - tt) * (1 - tt))) : (tt > 0 ? 20 : 0);
      var dpx = dx / Math.max(dist, 1e-6), dpy = dy / Math.max(dist, 1e-6);
      if (prim === 1) dpy *= 1 + 1.5 * pa;
      if (vb2 !== 1) { var vp = varyGrad(D, M, i, dpx, dpy, dx, dy); dpx = vp[0]; dpy = vp[1]; }
      if (st !== 1) { var ax = dpx * wx / st + dpy * wy * Math.sqrt(st), ay = dpx * wy / st + dpy * -wx * Math.sqrt(st); dpx = ax; dpy = ay; }
      var gs = rel * (mix(dsph, dpar, cap) - dpen), gdx = gs * dpx, gdy = gs * dpy;
      if (inside) ins = Math.max(ins, smoothstep(0, T, r - dist));
      var wa = 1;
      if (inside) { var id = D[o4], pid = D[o4 + 1]; for (var q2 = 0; q2 < ph.length; q2++) if (!(id === pidA[q2] || pid === ppA[q2] || pid === pidA[q2] || id === ppA[q2])) wa *= smoothstep(-0.25 * T, 0, h - ph[q2]); }
      if (wantB && inside && D[o4 + 3] > 0) { var wbB = wa * D[o4 + 3] * (1 - u * u) * (1 - u * u); if (wbB > 0) bodyC.push([Math.floor(D[o3 + 3]), h, gdx, gdy, wbB]); }   // body lighting candidates: footprints only, by (1 - u^2)^2 (row 4 .w: the generation weight)
      var w, wq, rim = 1 - smoothstep(0, 0.3, 1 - dist / r);
      if (inside) {
        if (h > m) { wq = Math.exp((m - h) / T); acc = acc * wq + wa; GIx = GIx * wq + wa * gdx; GIy = GIy * wq + wa * gdy; RI = RI * wq + wa * rim; m = h; cI = Math.floor(D[o3 + 3]); }
        else { wq = wa * Math.exp((h - m) / T); acc += wq; GIx += wq * gdx; GIy += wq * gdy; RI += wq * rim; }
        if (h > m2) { w = Math.exp((m2 - h) / T2); acc2 = acc2 * w + wa; m2 = h; } else { w = wa * Math.exp((h - m2) / T2); acc2 += w; }
      } else {
        if (h > mO) { wq = Math.exp((mO - h) / T); accO = accO * wq + 1; GOx = GOx * wq + gdx; GOy = GOy * wq + gdy; mO = h; cO = Math.floor(D[o3 + 3]); }
        else { wq = Math.exp((h - mO) / T); accO += wq; GOx += wq * gdx; GOy += wq * gdy; }
        if (h > m2O) { w = Math.exp((m2O - h) / T2); acc2O = acc2O * w + 1; m2O = h; } else { w = Math.exp((h - m2O) / T2); acc2O += w; }
      }
    }

    // combine
    var HI = acc > 0 ? m + T * Math.log(acc) : -1e9, HO = accO > 0 ? mO + T * Math.log(accO) : -1e9;
    var HO0 = HO;
    if (HI > -1e8 && HO0 > -1e8 && cI !== cO) ins *= 1 - smoothstep(2 * T, 4 * T, HO0 - HI);   // a containing puff of another cloud well below the skirt surface is behind it (see the shader)
    var g = 1 - ins;
    if (HI > -1e8 && HO > -1e8) HO -= ins * Math.max(0, HO - (HI - 2 * T));
    if (HO > -1e8) { HO = g > 1e-4 ? HO + T * Math.log(g) : -1e9; if (g <= 1e-4) accO = 0; }
    var Hm = Math.max(HI, HO);
    var Hf = Hm > -1e8 ? Hm + T * Math.log(Math.exp((HI - Hm) / T) + Math.exp((HO - Hm) / T)) : -1;
    var gIx = acc > 0 ? GIx / acc : 0, gIy = acc > 0 ? GIy / acc : 0, gOx = accO > 0 ? GOx / accO : 0, gOy = accO > 0 ? GOy / accO : 0;
    if (HI > -1e8 && HO0 > -1e8 && HO0 > HI - 2 * T) { gOx = mix(gOx, gIx, ins); gOy = mix(gOy, gIy, ins); }
    var Gx = 0, Gy = 0, wI, wO, rimW = 0;
    if (acc > 0) { wI = Math.exp(Math.max(-40, (HI - Hf) / T)); Gx += gIx * wI; Gy += gIy * wI; rimW += RI / acc * wI; }
    if (accO > 0) { wO = Math.exp(Math.max(-40, (HO - Hf) / T)); Gx += gOx * wO; Gy += gOy * wO; rimW += wO; }
    var sil = sacc > 0 ? (sm + Math.log(Math.min(sacc, 2))) * T : -1;
    // body lighting (the shader's third loop): a soft union at Body softness reference radii over the texel's own cloud
    var cB = (acc <= 0 || HO > HI) ? cO : cI, Bx = Gx, By = Gy;
    if (wantB && Hf > -0.5) {
      var Tb = Math.max((P.bodySoft === undefined ? 1.5 : P.bodySoft) * ref, T), mB = -1e9, accB = 0, sBx = 0, sBy = 0;
      bodyC.forEach(function (b) { if (b[0] !== cB) return; var wq; if (b[1] > mB) { wq = Math.exp((mB - b[1]) / Tb); accB = accB * wq + b[4]; sBx = sBx * wq + b[4] * b[2]; sBy = sBy * wq + b[4] * b[3]; mB = b[1]; } else { wq = b[4] * Math.exp((b[1] - mB) / Tb); accB += wq; sBx += wq * b[2]; sBy += wq * b[3]; } });
      if (accB > 0) { Bx = sBx / accB; By = sBy / accB; }
    }
    var mask = smoothstep(-0.5 * T, 0.5 * T, sil);
    // contact, in object space (the shader's block after the union): a ray from (p, H) toward the light against every
    // other puff as a sphere; the spheres the point sits on (within T) and the owner are left out
    var contact = 0, cavity = 0, wantC = P.light && P.contact > 0, wantV = P.cavity > 0;
    if ((wantC || wantV) && Hf > -0.5) {
      var L = P.light || [0, 0, 1], tr = 1, sky = 1, creach = (P.cavityReach || 8) / W, silC = sacc > 0 ? (sm + Math.log(Math.min(sacc, 2))) * T : -1;
      for (i = 0; i < count; i++) {
        o0 = i * 4; r = D[o0 + 2] * erode(i); if (r <= 1e-5) continue;
        if (i === winIdx) {   // the owner's own far-side limb joins its cast shadow (see the shader)
          if (!wantC) continue;
          var wself = (1 - smoothstep(0, 0.3, 1 - winU)) * smoothstep(T, 3 * T, silC - winR * (1 - winU)); if (wself <= 0) continue;
          var sox = D[o0] - px, soy = D[o0 + 1] - py, soz = D[o0 + 3] - Hf, nl = -(sox * L[0] + soy * L[1] + soz * L[2]) / Math.max(Math.sqrt(sox * sox + soy * soy + soz * soz), 1e-6);
          tr *= 1 - 0.5 * wself * (1 - smoothstep(0, 0.5, nl));
          continue;
        }
        var ox = D[o0] - px, oy = D[o0 + 1] - py, oz = D[o0 + 3] - Hf, oc2 = ox * ox + oy * oy + oz * oz, sxy = Math.sqrt(ox * ox + oy * oy) - r; if (sxy > 0.6 * r) continue;
        if (sxy < 0 && oc2 < (r + T) * (r + T)) continue;
        if (wantV) { var ozv = Math.min(oz, winZ - Hf), ocv = ox * ox + oy * oy + ozv * ozv, qq = Math.min(1, r * r / Math.max(ocv, 1e-12)), above = clamp(0.5 + ozv / (2 * r), 0, 1); sky *= 1 - (1 - Math.sqrt(1 - qq)) * above * (1 - smoothstep(0, Math.min(creach, 0.6 * r), sxy)); }
        if (!wantC) continue;
        var t = ox * L[0] + oy * L[1] + oz * L[2]; if (t <= 0) continue;
        var d = Math.sqrt(Math.max(0, oc2 - t * t)), w = T + 0.2 * t;
        tr *= 1 - (1 - smoothstep(r - w, r + w, d)) * (1 - smoothstep(0.2 * r, 0.6 * r, sxy));
      }
      contact = 1 - tr; cavity = smoothstep(0, 0.5, 1 - sky);
    }
    return { H: Hf, mask: mask + 10 * Math.max(0, sil - 0.5 * T), Gx: Gx, Gy: Gy, rim: clamp(rimW, 0, 1), contact: contact, cavity: cavity, Bx: Bx, By: By };
  }

  window.fieldRef = fieldRef; window.varyIn = varyIn;

  // probe(D, count, P, x, y): why the field at one texel is what it is. Every sphere that reaches the texel, with
  // u = dist / r, its height, whether it contains the texel, its share of its set's log-sum-exp, its
  // attachment weight (hidden by unattached puffs above it), and for the skirt set the clamp and the g weight
  function probe(D, count, P, x, y) {
    var M = P.MAX_SPH || (window.PuffRenderer && PuffRenderer.MAX_SPH) || 4096;
    var W = P.W, Hh = P.H, asp = Hh / W, T = P.T, cap = P.cap;
    var px = (x + 0.5) / W, py = (1 - (y + 0.5) / Hh) * asp, rows = [], i, ins = 0;
    for (i = 0; i < count; i++) {
      var o0 = i * 4, o2 = (M * 2 + i) * 4, o3 = (M * 3 + i) * 4, o4 = (M * 4 + i) * 4;
      var dx = px - D[o0], dy = py - D[o0 + 1], r = D[o0 + 2], st = D[o2 + 2];   // (no erosion in the probe: it lists the records as uploaded)
      var vb = D[(M * 5 + i) * 4 + 3], rr = r * Math.max(1, st) * vb;
      if (dx * dx + dy * dy > rr * rr * 2.5) continue;
      if (st !== 1) { var along = dx * D[o3] + dy * D[o3 + 1], across = dx * D[o3 + 1] - dy * D[o3]; dx = along / st; dy = across * Math.sqrt(st); }
      if (vb !== 1) { var vv = varyIn(D, M, i, dx, dy); dx = vv[0]; dy = vv[1]; }
      var prim = Math.floor(D[o2 + 3] + 0.01), pa = (D[o2 + 3] - Math.floor(D[o2 + 3] + 0.01)) * 2, q, len;
      if (prim === 1) dy *= 1 + 1.5 * pa;
      else if (prim === 2) dx *= 1 + 2 * pa * Math.max(0, -dy) / r;
      else if (prim === 3) { q = Math.sqrt(Math.sqrt(dx * dx * dx * dx + dy * dy * dy * dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      else if (prim === 4) { q = (Math.abs(dx) + Math.abs(dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      var d2 = dx * dx + dy * dy;
      if (d2 > r * r * 2.25) continue;
      var dist = Math.sqrt(d2), u = dist / r, tt = clamp((dist - r) / (0.5 * r), 0, 0.995), pen = r * tt * tt / (1 - tt);
      var sph = u < 1 ? Math.sqrt(1 - u * u) : -(u - 1) * 2.0647, par = u < 1 ? 1 - u * u : -2 * (u - 1);
      var h = D[o0 + 3] + D[o4 + 2] * (r * mix(sph, par, cap) - pen), inside = d2 < r * r;
      if (inside) ins = Math.max(ins, smoothstep(0, T, r - dist));
      rows.push({ i: i, id: D[o4], parent: D[o4 + 1], u: u, h: h, inside: inside, wa: 1, share: 0, note: '' });
    }
    // attachment: hidden by every unattached containing puff above it
    var inn = rows.filter(function (q) { return q.inside; });
    inn.forEach(function (a) { inn.forEach(function (b) { var att = a.id === b.id || a.parent === b.parent || a.parent === b.id || a.id === b.parent; if (!att) a.wa *= smoothstep(-0.25 * T, 0, a.h - b.h); }); });
    // shares of the two log-sum-exp sets, then the skirt set's clamp and g weight
    var mI = -1e9, mO = -1e9, accI = 0, accO = 0;
    rows.forEach(function (q) { if (q.inside) mI = Math.max(mI, q.h); else mO = Math.max(mO, q.h); });
    rows.forEach(function (q) { if (q.inside) accI += q.wa * Math.exp((q.h - mI) / T); else accO += Math.exp((q.h - mO) / T); });
    rows.forEach(function (q) { q.share = q.inside ? q.wa * Math.exp((q.h - mI) / T) / Math.max(accI, 1e-30) : Math.exp((q.h - mO) / T) / Math.max(accO, 1e-30); });
    var HI = accI > 0 ? mI + T * Math.log(accI) : -1e9, HO = accO > 0 ? mO + T * Math.log(accO) : -1e9, clampBy = 0;
    var cI = -1, cO = -1; rows.forEach(function (q) { var c = Math.floor(D[(M * 3 + q.i) * 4 + 3]); if (q.inside) { if (q.h === mI) cI = c; } else if (q.h === mO) cO = c; });
    if (HI > -1e8 && HO > -1e8 && cI !== cO) ins *= 1 - smoothstep(2 * T, 4 * T, HO - HI);
    var g = 1 - ins;
    if (HI > -1e8 && HO > -1e8) clampBy = ins * Math.max(0, HO - (HI - 2 * T));
    rows.forEach(function (q) { if (!q.inside) q.note = 'skirt set: clamped ' + clampBy.toFixed(4) + ', g ' + g.toFixed(3) + (g <= 1e-4 ? ' (dropped)' : ''); else if (q.wa < 0.999) q.note = 'hidden by an unattached puff above (wa ' + q.wa.toFixed(3) + ')'; });
    rows.sort(function (a, b) { return b.h - a.h; });
    return { rows: rows, HI: HI, HO: HO, ins: ins };
  }
  window.probe = probe;
})();
