/*
 * lab-ref.js: a CPU reference of PuffRenderer's field pass (FIELD_FS in src/puffs.js), one pixel at a
 * time, for the Artifact Lab (docs/core-audit.md step 5). It follows the GLSL branch for branch so the
 * lab can check the GPU rows against it after every rule change. Classic script, no build.
 *
 * fieldRef(D, count, params, x, y)
 *   D       renderer._sphData (five rows of MAX_SPH vec4: (x,y,r,z0), attrs, (anchor.xy, stretch, prim),
 *           (wind.xy, band, depth weight), (id, parent id))
 *   count   renderer.count
 *   params  { W, H: field texels; T: uT; cap: uCap; MAX_SPH (default PuffRenderer.MAX_SPH) }
 *   x, y    texel indices, GL convention (y up from the bottom row), as readPixels addresses them
 *   returns { H, mask, Gx, Gy } = the shader's o.r, o.a, o4.x, o4.y
 */
(function () {
  'use strict';
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function mix(a, b, t) { return a * (1 - t) + b * t; }
  function smoothstep(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }

  function fieldRef(D, count, P, x, y) {
    var M = P.MAX_SPH || (window.PuffRenderer && PuffRenderer.MAX_SPH) || 4096;
    var W = P.W, Hh = P.H, asp = Hh / W, T = P.T, T2 = T * 4, cap = P.cap, dissolve = P.dissolve || 0, dot = P.dotSize || 1;
    // the dither threshold at this texel (gl_FragCoord = texel + 0.5), for the dissolve of dispersing puffs
    var BAY = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    var bq = Math.floor((x + 0.5) / dot) + 7, bqy = Math.floor((y + 0.5) / dot) + 7, bay = BAY[(((bqy % 4) + 4) % 4) * 4 + (((bq % 4) + 4) % 4)] / 16 - 0.5 + 0.5;
    function dissolved(i) { var dis = D[(M + i) * 4 + 3]; return dis > 0.001 && bay < dissolve * dis; }
    // p = vec2(vUv.x, (1 - vUv.y) * uAspect) at the texel centre
    var px = (x + 0.5) / W, py = (1 - (y + 0.5) / Hh) * asp;
    var i, o0, o1, o2, o3, o4, dx, dy, r, st, prim, pa, q, len, d2, u, h, along, across;

    // ownership pre-pass: the highest puff containing the pixel
    var winId = -1, winPid = -2, winH = -1e9;
    for (i = 0; i < count; i++) {
      o0 = i * 4; o2 = (M * 2 + i) * 4; o3 = (M * 3 + i) * 4; o4 = (M * 4 + i) * 4;
      dx = px - D[o0]; dy = py - D[o0 + 1]; r = D[o0 + 2]; st = D[o2 + 2];
      var rr = r * Math.max(Math.max(1, st), 1 / Math.sqrt(Math.max(st, 1e-4)));
      if (dx * dx + dy * dy > rr * rr) continue;
      if (st !== 1) { along = dx * D[o3] + dy * D[o3 + 1]; across = dx * D[o3 + 1] - dy * D[o3]; dx = along / st; dy = across * Math.sqrt(st); }
      prim = Math.floor(D[o2 + 3] + 0.01); pa = (D[o2 + 3] - Math.floor(D[o2 + 3] + 0.01)) * 2;
      if (prim === 1) dy *= 1 + 1.5 * pa;
      else if (prim === 2) dx *= 1 + 2 * pa * Math.max(0, -dy) / r;
      else if (prim === 3) { q = Math.sqrt(Math.sqrt(dx * dx * dx * dx + dy * dy * dy * dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      else if (prim === 4) { q = (Math.abs(dx) + Math.abs(dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      d2 = dx * dx + dy * dy; if (d2 >= r * r) continue;
      if (dissolved(i)) continue;
      u = Math.sqrt(d2) / r;
      h = D[o0 + 3] + r * mix(Math.sqrt(1 - u * u), 1 - u * u, cap);
      if (h > winH) { winH = h; winId = D[o4]; winPid = D[o4 + 1]; }
    }

    var m = -1e9, acc = 0, mO = -1e9, accO = 0, ins = 0;
    var m2 = -1e9, acc2 = 0, m2O = -1e9, acc2O = 0;
    var sm = -1e9, sacc = 0;
    var GIx = 0, GIy = 0, GOx = 0, GOy = 0;
    for (i = 0; i < count; i++) {
      o0 = i * 4; o1 = (M + i) * 4; o2 = (M * 2 + i) * 4; o3 = (M * 3 + i) * 4; o4 = (M * 4 + i) * 4;
      dx = px - D[o0]; dy = py - D[o0 + 1]; r = D[o0 + 2]; st = D[o2 + 2];
      var rr2 = r * Math.max(1, st);
      if (dx * dx + dy * dy > rr2 * rr2 * 2.5) continue;
      var wx = D[o3], wy = D[o3 + 1];
      if (st !== 1) { along = dx * wx + dy * wy; across = dx * wy - dy * wx; dx = along / st; dy = across * Math.sqrt(st); }
      prim = Math.floor(D[o2 + 3] + 0.01); pa = (D[o2 + 3] - Math.floor(D[o2 + 3] + 0.01)) * 2;
      if (prim === 1) dy *= 1 + 1.5 * pa;
      else if (prim === 2) dx *= 1 + 2 * pa * Math.max(0, -dy) / r;
      else if (prim === 3) { q = Math.sqrt(Math.sqrt(dx * dx * dx * dx + dy * dy * dy * dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      else if (prim === 4) { q = (Math.abs(dx) + Math.abs(dy)) / Math.max(Math.sqrt(dx * dx + dy * dy), 1e-6); len = mix(1, q, pa); dx *= len; dy *= len; }
      d2 = dx * dx + dy * dy;
      if (d2 > r * r * 2.25) continue;
      if (dissolved(i)) continue;
      var dist = Math.sqrt(d2);
      var tt = clamp((dist - r) / (0.5 * r), 0, 0.995), pen = r * tt * tt / (1 - tt);
      var e = (r - dist - pen) / T;
      if (e > sm) { sacc = sacc * Math.exp(sm - e) + 1; sm = e; } else sacc += Math.exp(e - sm);
      var inside = d2 < r * r;
      u = dist / r;
      var sph = u < 1 ? Math.sqrt(1 - u * u) : -(u - 1) * 2.0647;
      var par = u < 1 ? 1 - u * u : -2 * (u - 1);
      h = D[o0 + 3] + r * mix(sph, par, cap) - pen;
      var dsph = u < 1 ? Math.max(-20, -u / Math.sqrt(Math.max(1e-6, 1 - u * u))) : -2.0647;
      var dpar = u < 1 ? -2 * u : -2;
      var dpen = (tt > 0 && tt < 0.995) ? Math.min(20, 2 * (2 * tt - tt * tt) / ((1 - tt) * (1 - tt))) : (tt > 0 ? 20 : 0);
      var dpx = dx / Math.max(dist, 1e-6), dpy = dy / Math.max(dist, 1e-6);
      if (prim === 1) dpy *= 1 + 1.5 * pa;
      if (st !== 1) { var ax = dpx * wx / st + dpy * wy * Math.sqrt(st), ay = dpx * wy / st + dpy * -wx * Math.sqrt(st); dpx = ax; dpy = ay; }
      var gs = mix(dsph, dpar, cap) - dpen, gdx = gs * dpx, gdy = gs * dpy;
      if (inside) ins = Math.max(ins, smoothstep(0, T, r - dist));
      var wa = 1;
      if (inside) { var id = D[o4], pid = D[o4 + 1]; if (!(id === winId || pid === winPid || pid === winId || id === winPid)) wa = smoothstep(-0.25 * T, 0, h - winH); }
      var w, wq;
      if (inside) {
        if (h > m) { wq = Math.exp((m - h) / T); acc = acc * wq + wa; GIx = GIx * wq + wa * gdx; GIy = GIy * wq + wa * gdy; m = h; }
        else { wq = wa * Math.exp((h - m) / T); acc += wq; GIx += wq * gdx; GIy += wq * gdy; }
        if (h > m2) { w = Math.exp((m2 - h) / T2); acc2 = acc2 * w + wa; m2 = h; } else { w = wa * Math.exp((h - m2) / T2); acc2 += w; }
      } else {
        if (h > mO) { wq = Math.exp((mO - h) / T); accO = accO * wq + 1; GOx = GOx * wq + gdx; GOy = GOy * wq + gdy; mO = h; }
        else { wq = Math.exp((h - mO) / T); accO += wq; GOx += wq * gdx; GOy += wq * gdy; }
        if (h > m2O) { w = Math.exp((m2O - h) / T2); acc2O = acc2O * w + 1; m2O = h; } else { w = Math.exp((h - m2O) / T2); acc2O += w; }
      }
    }

    // combine
    var g = 1 - ins;
    var HI = acc > 0 ? m + T * Math.log(acc) : -1e9, HO = accO > 0 ? mO + T * Math.log(accO) : -1e9;
    var HO0 = HO;
    if (HI > -1e8 && HO > -1e8) HO -= ins * Math.max(0, HO - (HI - 2 * T));
    if (HO > -1e8) { HO = g > 1e-4 ? HO + T * Math.log(g) : -1e9; if (g <= 1e-4) accO = 0; }
    var Hm = Math.max(HI, HO);
    var Hf = Hm > -1e8 ? Hm + T * Math.log(Math.exp((HI - Hm) / T) + Math.exp((HO - Hm) / T)) : -1;
    var gIx = acc > 0 ? GIx / acc : 0, gIy = acc > 0 ? GIy / acc : 0, gOx = accO > 0 ? GOx / accO : 0, gOy = accO > 0 ? GOy / accO : 0;
    if (HI > -1e8 && HO0 > -1e8 && HO0 > HI - 2 * T) { gOx = mix(gOx, gIx, ins); gOy = mix(gOy, gIy, ins); }
    var Gx = 0, Gy = 0, wI, wO;
    if (acc > 0) { wI = Math.exp(Math.max(-40, (HI - Hf) / T)); Gx += gIx * wI; Gy += gIy * wI; }
    if (accO > 0) { wO = Math.exp(Math.max(-40, (HO - Hf) / T)); Gx += gOx * wO; Gy += gOy * wO; }
    var sil = sacc > 0 ? (sm + Math.log(Math.min(sacc, 2))) * T : -1;
    var mask = smoothstep(-0.5 * T, 0.5 * T, sil);
    return { H: Hf, mask: mask + 10 * Math.max(0, sil - 0.5 * T), Gx: Gx, Gy: Gy };
  }

  window.fieldRef = fieldRef;
})();
