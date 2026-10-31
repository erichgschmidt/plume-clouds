/*
 * PuffRenderer: the cloud rebuilt from ONE primitive used recursively.
 *
 * A puff is a sphere sitting on its parent's shell. The sim moves the roots (sim.blobs); every
 * root grows `children` puffs of `ratio` its radius, each of those grows the same again, down to
 * `levels`. A child lives one cycle: born on the upper shell, carried round by the parent's roll,
 * swelling and subsiding, then reseeded (the cap life that worked in the old skin, now the only
 * rule). Depth is real: a child on the back of its parent sits lower in the height field and is
 * hidden by it.
 *
 * One soft union (LSE over sphere heights) renders every level with one Softness. One noise
 * displacement is applied once to the final height, with an amplitude that falls per level and
 * with freshness. One darkening: every puff shades toward its own base and inherits its parent's
 * shade at its birth point, accumulated down the tree (the stacked shade generalised), plus the
 * crown-to-base band of the whole cloud.
 *
 * Field pass -> RGBA16F (height, detail, stack, mask); shade pass -> screen. Classic script, no build.
 */
(function () {
  'use strict';
  var MAX_SPH = 2048;

  function hash(x) { var s = Math.sin(x * 12.9898 + 78.233) * 43758.5453; return s - Math.floor(s); }
  function smoothstep(a, b, x) { var t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function num(v, d) { return typeof v === 'number' && isFinite(v) ? v : d; }

  var VS = '#version 300 es\nprecision highp float;\nout vec2 vUv;\nvoid main(){ vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2); vUv = p; gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0); }';

  var FIELD_FS = '#version 300 es\nprecision highp float; precision highp sampler2D;\n' +
  'uniform sampler2D uSph; uniform int uCount; uniform float uAspect; uniform float uT;\n' +
  'in vec2 vUv; layout(location = 0) out vec4 o; layout(location = 1) out vec4 o2;\n' +
  'void main(){\n' +
  '  vec2 p = vec2(vUv.x, (1.0 - vUv.y) * uAspect);\n' +
  '  float m = -1e9, acc = 0.0, dSum = 0.0, sSum = 0.0, fSum = 0.0;   // online log-sum-exp\n' +
  '  float sm = -1e9, sacc = 0.0;                            // silhouette (soft union of r - dist)\n' +
  '  float T = uT;\n' +
  '  for(int i = 0; i < 2048; i++){\n' +
  '    if(i >= uCount) break;\n' +
  '    vec4 s = texelFetch(uSph, ivec2(i, 0), 0);\n' +
  '    vec2 d = p - s.xy; float d2 = dot(d, d), r = s.z;\n' +
  '    if(d2 > r * r * 2.25) continue;\n' +
  '    float dist = sqrt(d2);\n' +
  '    float e = (r - dist) / T;\n' +
  '    if(e > sm){ sacc = sacc * exp(sm - e) + 1.0; sm = e; } else sacc += exp(e - sm);\n' +
  '    vec4 a = texelFetch(uSph, ivec2(i, 1), 0);\n' +
  '    float h = (d2 < r * r) ? s.w + sqrt(r * r - d2) : s.w - (dist - r) * 2.0;\n' +
  '    float w;\n' +
  '    if(h > m){ float k = exp((m - h) / T); acc = acc * k + 1.0; dSum = dSum * k + a.y; sSum = sSum * k + a.x; fSum = fSum * k + a.z; m = h; }\n' +
  '    else { w = exp((h - m) / T); acc += w; dSum += w * a.y; sSum += w * a.x; fSum += w * a.z; }\n' +
  '  }\n' +
  '  float H = (acc > 0.0) ? m + T * log(acc) : -1.0;\n' +
  '  float sil = (sacc > 0.0) ? (sm + log(sacc)) * T : -1.0;\n' +
  '  float mask = smoothstep(-0.5 * T, 0.5 * T, sil);\n' +
  '  o = vec4(H, acc > 0.0 ? dSum / acc : 0.0, acc > 0.0 ? sSum / acc : 0.0, mask);\n' +
  '  o2 = vec4(acc > 0.0 ? fSum / acc : 1.0, 0.0, 0.0, 1.0);\n' +
  '}';

  var SHADE_FS = '#version 300 es\nprecision highp float;\n' +
  'uniform sampler2D uField; uniform sampler2D uAux; uniform vec2 uTexel; uniform float uAspect; uniform vec3 uLight;\n' +
  'uniform float uShadow, uHighlight, uFill, uBands, uStack, uBand, uTopY, uBaseY, uNoise, uNoiseScale, uNoise2, uNoise2Scale, uNoiseBias, uFlow, uTime, uSmooth, uRef, uPixelated, uHaze;\n' +
  'uniform vec3 uSkyColor;\n' +
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
  // displaced height at a uv (the one surface term)
  'float hAt(vec2 uv, vec2 uv0, float bias){\n' +
  '  vec4 f = texture(uField, uv);\n' +
  '  if(f.a < 0.5) f = texture(uField, uv0);   // never read height outside the silhouette (the rim)\n' +
  '  vec2 w0 = vec2(uv.x, (1.0 - uv.y) * uAspect) / uRef;\n' +
  '  float t = uTime * uFlow;\n' +
  '  float n1 = fbm(w0 * uNoiseScale + vec2(t, t * 0.37));\n' +
  '  float n2 = snoise(w0 * uNoise2Scale + vec2(-t * 0.6, t * 0.8) + 11.0) + 0.5 * snoise(w0 * uNoise2Scale * 2.1 + vec2(t * 0.3, -t * 0.5) + 23.0);\n' +
  '  return f.r + uRef * 0.5 * f.g * bias * (uNoise * n1 + uNoise2 * n2);\n' +
  '}\n' +
  'vec3 normalAt(vec2 uv, vec2 dx, vec2 dy, float wx, float wy, float bias){\n' +
  '  float hL = hAt(uv - dx, uv, bias), hR = hAt(uv + dx, uv, bias), hU = hAt(uv - dy, uv, bias), hD = hAt(uv + dy, uv, bias);\n' +
  '  return normalize(vec3(-(hR - hL) / wx, (hD - hU) / wy, 1.0));   // world y is down; uv y is up\n' +
  '}\n' +
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
  'void main(){\n' +
  '  vec2 uv = (uPixelated > 0.5) ? (floor(vUv / uTexel) + 0.5) * uTexel : vUv;\n' +
  '  vec4 f = texture(uField, uv);\n' +
  '  if(f.a < 0.5){ fragColor = vec4(uSkyColor, 1.0); return; }\n' +
  '  float s = 1.0 + uSmooth * 2.0;   // normal footprint in texels\n' +
  '  vec2 dx = vec2(uTexel.x * s, 0.0), dy = vec2(0.0, uTexel.y * s);\n' +
  '  float wx = 2.0 * uTexel.x * s, wy = 2.0 * uTexel.y * s * uAspect;   // world units\n' +
  '  // noise bias: the macro (undisplaced) light decides where the noise lives (-1 shadow only .. +1 light only)\n' +
  '  vec3 n0 = normalAt(uv, dx, dy, wx, wy, 0.0);\n' +
  '  float l0 = dot(n0, uLight);\n' +
  '  float bias = uNoiseBias > 0.0 ? mix(1.0, smoothstep(-0.2, 0.5, l0), uNoiseBias) : mix(1.0, smoothstep(0.5, -0.2, l0), -uNoiseBias);\n' +
  '  vec3 n = normalAt(uv, dx, dy, wx, wy, bias);\n' +
  '  // haze: an old, mixed parcel softens (flatter normal, less direct light, fainter edge)\n' +
  '  float haze = uHaze * (1.0 - texture(uAux, uv).r);\n' +
  '  n = normalize(mix(n, vec3(0.0, 0.0, 1.0), 0.7 * haze));\n' +
  '  float lambert = dot(n, uLight);\n' +
  '  float bounce = max(0.0, dot(n, normalize(vec3(-uLight.x, -uLight.y, 0.25))));\n' +
  '  float wy0 = (1.0 - uv.y) * uAspect;\n' +
  '  float band = uBand * smoothstep(0.0, 0.7, (wy0 - uTopY) / max(uBaseY - uTopY, 1e-3));\n' +
  '  float stack = uStack * f.b;\n' +
  '  float direct = 0.84 * pow(max(0.0, lambert), mix(1.5, 0.55, uHighlight)) * (1.0 - 0.7 * band) * (1.0 - 0.5 * stack);\n' +
  '  float ambient = (0.18 + uFill * bounce) * (1.0 - band) * (1.0 - 0.8 * stack);\n' +
  '  float light = ambient + direct * (1.0 - uShadow * smoothstep(0.1, -0.2, lambert));\n' +
  '  light = mix(light, 0.45, 0.5 * haze);\n' +
  '  light += bayer(floor(vUv / uTexel)) * 0.012;\n' +
  '  vec3 cloud = palette(light);\n' +
  '  float edge = smoothstep(0.5, 0.5 + 0.45 * haze, f.a);   // a hazy parcel loses its hard edge\n' +
  '  fragColor = vec4(mix(uSkyColor, cloud, edge), 1.0);\n' +
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
    this._fu = uniforms(gl, this._field, ['uSph', 'uCount', 'uAspect', 'uT']);
    this._su = uniforms(gl, this._shade, ['uField', 'uAux', 'uTexel', 'uAspect', 'uLight', 'uShadow', 'uHighlight', 'uFill', 'uBands', 'uStack', 'uBand', 'uTopY', 'uBaseY', 'uNoise', 'uNoiseScale', 'uNoise2', 'uNoise2Scale', 'uNoiseBias', 'uFlow', 'uTime', 'uSmooth', 'uRef', 'uPixelated', 'uHaze', 'uSkyColor']);
    this._sphData = new Float32Array(MAX_SPH * 2 * 4);
    this._sphTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this._sphTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, MAX_SPH, 2, 0, gl.RGBA, gl.FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    this._fieldTex = gl.createTexture(); this._auxTex = gl.createTexture(); this._fbo = gl.createFramebuffer();
    this._w = 0; this._h = 0;
    this.resize(240);
    this.count = 0;
  }

  // field resolution: `width` texels across, height by the canvas aspect
  PuffRenderer.prototype.resize = function (width) {
    var gl = this.gl, c = this.canvas, asp = c.height / c.width;
    var w = Math.max(32, width | 0), h = Math.max(32, Math.round(w * asp));
    if (w === this._w && h === this._h) return;
    this._w = w; this._h = h;
    [this._fieldTex, this._auxTex].forEach(function (tex) {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    });
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._fieldTex, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, this._auxTex, 0);
    gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1]);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  };

  // Build the puff tree from the sim's roots. Texture row 0: (x, y, r, z0); row 1: (stack, detail, 0, 0).
  PuffRenderer.prototype._tree = function (sim, look, time) {
    var D = this._sphData, n = 0, ref = sim.refRadius || 0.08;
    var B = sim.blobs, A = sim.aux, S = sim.spin, F = sim.detail, count = Math.min(sim.blobCount | 0, 64);
    var children = Math.max(0, Math.round(num(look.children, 4))), ratio = clamp(num(look.ratio, 0.42), 0.1, 0.8);
    var levels = clamp(Math.round(num(look.levels, 3)), 1, 3), life = Math.max(0, num(look.life, 1)), embed = clamp(num(look.embed, 0.78), 0.3, 1);
    var depthScale = num(look.depth, 1);
    var LEVEL_DETAIL = [0.25, 0.6, 1.0];

    function put(x, y, r, z0, stack, detail, fresh) {
      if (n >= MAX_SPH || r <= 1e-4) return false;
      var o = n * 4, o2 = (MAX_SPH + n) * 4;
      D[o] = x; D[o + 1] = y; D[o + 2] = r; D[o + 3] = z0;
      D[o2] = stack; D[o2 + 1] = detail; D[o2 + 2] = fresh; D[o2 + 3] = 0;
      n++; return true;
    }
    // breadth first: every root, then every child, then grandchildren until the budget is spent,
    // so a full cloud never starves the far parcels of their skin
    var queue = [], next = [], q, j;
    for (var i = 0; i < count; i++) {
      var o = i * 4, r = B[o + 2], link = A[o + 3];
      if (r <= 1e-4 || link <= 1e-6) continue;
      var ax = S[o], ay = S[o + 1], az = S[o + 2], al = Math.sqrt(ax * ax + ay * ay + az * az);
      if (al < 1e-6) { ax = 0; ay = 0; az = 1; } else { ax /= al; ay /= al; az /= al; }
      var fresh = F ? clamp(F[i], 0, 1) : 1;
      // depth from the sim (aux.y: 0 back .. 1 front); a parcel still linking in is buried behind
      var z0 = ((A[o + 1] - 0.5) * 2 * ref - (1 - link) * r * 1.5) * depthScale;
      if (!put(B[o], B[o + 1], r, z0, 0, (0.4 + 0.6 * fresh) * LEVEL_DETAIL[0], fresh)) break;
      queue.push({ x: B[o], y: B[o + 1], r: r, z: z0, seed: B[o + 3], ax: ax, ay: ay, az: az, angle: S[o + 3] * num(look.roll, 1), fresh: fresh, stack: 0 });
    }
    for (var level = 0; level < levels - 1 && queue.length; level++) {
      next = [];
      for (var k = 0; k < queue.length && n < MAX_SPH; k++) {
        q = queue[k];
        for (j = 0; j < children && n < MAX_SPH; j++) {
          var rate = 0.7 + 0.6 * hash(q.seed + 4.7 + j * 41.3);
          var cyc = 1.2 + 1.0 * hash(q.seed + 12.3 + j * 29.7);
          var sraw = (q.angle * rate + time * 0.05) * life + hash(q.seed + 5.5 + j * 7.1) * cyc;
          var ci = Math.floor(sraw / cyc), ph = sraw / cyc - ci;
          var cs = q.seed + ci * 101.3 + level * 17.9;   // reseeded every life
          var jit = hash(cs + j * 31.7) - 0.5;
          var zz = (1 - 2 * (j + 0.5 + jit * 0.55) / children) * 0.9;
          var azm = hash(cs + 1.3 + j * 13.9) * 6.2832;
          var sr = Math.sqrt(Math.max(1 - zz * zz, 0));
          var vx = sr * Math.cos(azm), vy = sr * Math.sin(azm), vz = zz;
          if (vy > 0) { vx = -vx; vy = -vy; }   // born on the upper shell (world y is down)
          // carried round by the parent's roll since birth
          var ca = ph * cyc, c = Math.cos(ca), sn = Math.sin(ca);
          var d = q.ax * vx + q.ay * vy + q.az * vz;
          var ux = vx * c + (q.ay * vz - q.az * vy) * sn + q.ax * d * (1 - c);
          var uy = vy * c + (q.az * vx - q.ax * vz) * sn + q.ay * d * (1 - c);
          var uz = vz * c + (q.ax * vy - q.ay * vx) * sn + q.az * d * (1 - c);
          var env = Math.pow(Math.sin(Math.PI * ph), 0.6);
          var cr = q.r * ratio * (0.8 + 0.4 * hash(cs + 5.1 + j * 23.0)) * env;
          if (cr <= 1e-4) continue;
          var shell = q.r * embed * (0.7 + 0.3 * env);
          var x = q.x + ux * shell, y = q.y + uy * shell, z = q.z + uz * shell * depthScale;
          // stacked shade: the own gradient is in the shader; the inherited part is the parent's
          // gradient at the birth point (uy > 0 is the parent's underside)
          var stack = q.stack * 0.6 + 0.5 * smoothstep(-0.6, 0.9, uy);
          put(x, y, cr, z, stack, (0.4 + 0.6 * q.fresh) * LEVEL_DETAIL[Math.min(level + 1, 2)], q.fresh);
          next.push({ x: x, y: y, r: cr, z: z, seed: cs + j * 3.1, ax: q.ax, ay: q.ay, az: q.az, angle: q.angle, fresh: q.fresh, stack: stack });
        }
      }
      queue = next;
    }
    this.count = n;
    var gl = this.gl;
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this._sphTex);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, MAX_SPH, 2, gl.RGBA, gl.FLOAT, D, 0);
  };

  PuffRenderer.prototype.render = function (sim, look, time) {
    var gl = this.gl, c = this.canvas, asp = c.height / c.width, ref = sim.refRadius || 0.08;
    this.resize(this._w);
    this._tree(sim, look, time);
    // field
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fbo); gl.viewport(0, 0, this._w, this._h);
    gl.useProgram(this._field);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this._sphTex);
    gl.uniform1i(this._fu.uSph, 0); gl.uniform1i(this._fu.uCount, this.count); gl.uniform1f(this._fu.uAspect, asp);
    gl.uniform1f(this._fu.uT, Math.max(0.002, ref * 0.08 * num(look.softness, 1.4)));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    // shade
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, c.width, c.height);
    gl.useProgram(this._shade);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this._fieldTex);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this._auxTex);
    var su = this._su;
    gl.uniform1i(su.uField, 1); gl.uniform1i(su.uAux, 2); gl.uniform2f(su.uTexel, 1 / this._w, 1 / this._h); gl.uniform1f(su.uAspect, asp);
    var sunA = num(look.sun, 60) * Math.PI / 180, el = num(look.elevation, 40) * Math.PI / 180;
    gl.uniform3f(su.uLight, Math.cos(sunA) * Math.cos(el), -Math.sin(sunA) * Math.cos(el), Math.sin(el));
    gl.uniform1f(su.uShadow, clamp(num(look.shadow, 0.64), 0, 1)); gl.uniform1f(su.uHighlight, clamp(num(look.highlight, 0.68), 0, 1));
    gl.uniform1f(su.uFill, num(look.fill, 0.2)); gl.uniform1f(su.uBands, num(look.bands, 5));
    gl.uniform1f(su.uStack, clamp(num(look.stackShade, 0.4), 0, 1)); gl.uniform1f(su.uBand, clamp(num(look.baseShade, 0.5), 0, 1));
    gl.uniform1f(su.uTopY, num(sim.topY, 0)); gl.uniform1f(su.uBaseY, num(sim.baseY, asp));
    gl.uniform1f(su.uNoise, num(look.noise, 0.3)); gl.uniform1f(su.uNoiseScale, num(look.noiseScale, 1)); gl.uniform1f(su.uFlow, num(look.flow, 0.01));
    gl.uniform1f(su.uNoise2, num(look.noise2, 0)); gl.uniform1f(su.uNoise2Scale, num(look.noise2Scale, 4)); gl.uniform1f(su.uNoiseBias, clamp(num(look.noiseBias, 0), -1, 1)); gl.uniform1f(su.uHaze, clamp(num(look.haze, 0.5), 0, 1));
    gl.uniform1f(su.uTime, time); gl.uniform1f(su.uSmooth, clamp(num(look.smooth, 0.5), 0, 1)); gl.uniform1f(su.uRef, ref);
    gl.uniform1f(su.uPixelated, look.pixelated === false ? 0 : 1);
    gl.uniform3f(su.uSkyColor, 0.075, 0.4525, 0.575);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  PuffRenderer.MAX_SPH = MAX_SPH;
  window.PuffRenderer = PuffRenderer;
})();
