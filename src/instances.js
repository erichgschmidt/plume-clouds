/* CloudStage — many procedural clouds for a 2D game.
 *
 * Each cloud instance owns a small CloudSim and is rendered by the shared CloudRenderer into one
 * layer of a sprite texture array, at the sprite's own resolution (field = sprite, one shade per
 * texel). A composite pass then draws the layers far to near with parallax, haze, and shadows
 * cast by nearer clouds onto farther ones (a cloud's coverage, offset along the sun direction by
 * the depth difference, darkens what lies behind it).
 *
 * Cost per cloud is spriteW x spriteH x its own parcels, independent of the canvas size.
 * Classic script, no modules. Assigns window.CloudStage. Needs CloudSim and CloudRenderer.
 */
(function () {
  'use strict';

  var MAXI = 16;   // instances per stage (uniform arrays in the composite shader)

  // the editor's default look, minus the sky (sprites are premultiplied RGBA)
  var DEFAULT_LOOK = { billow: 3, softness: .79, blend: 1, erosion: .35, relief: 2, depth: .55, roll: .6,
    sun: 81, elevation: -17, shadow: .64, highlight: .68, fill: .2, bands: 5, toneA: .485, toneB: .89,
    flatten: .3, ink: .5, sky: false, pixelated: true, toon: false, patchN: true, carveEnabled: true,
    noiseType: 'Voronoi', invertNoise: true, ao: 0.65, aoRadius: 0.8, aoFalloff: 1.5,
    primaryNoiseType: 'Voronoi', primaryInvertNoise: true, primaryScale: 1.8, inflation: 0.1, embed: 0.12,
    primaryCarve: 1.2, carve: 0.25, cellScale: 1.2, cellFlow: 0.65 };

  var VS = [
    '#version 300 es',
    'out vec2 vUv;',
    'void main(){',
    '  vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0, (gl_VertexID == 2) ? 3.0 : -1.0);',
    '  vUv = p * 0.5 + 0.5;',
    '  gl_Position = vec4(p, 0.0, 1.0);',
    '}'
  ].join('\n');

  // Screen uv here is y-down (0 at the top); sprite layers are GL textures (y-up), flipped on read.
  var COMPOSITE_FS = `#version 300 es
precision highp float;
precision highp sampler2DArray;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2DArray uSprites;
uniform int uCount;
uniform vec4 uRect[${MAXI}];     // x, y, w, h of the instance on screen (uv, y-down), far to near
uniform vec4 uInfo[${MAXI}];     // layer, depth, haze, unused
uniform vec2 uShadowDir;         // screen offset toward the sun per unit of depth difference
uniform float uShadow;           // shadow darkening strength
uniform float uShadowSoft;       // mip level of the occluder read (penumbra)
uniform vec3 uSky;
uniform vec2 uSpriteSize;
uniform float uPixelSnap;
vec4 spriteAt(int i, vec2 uv, float lod){
  if(any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec4(0.0);
  if(uPixelSnap > 0.5 && lod < 0.01) uv = (floor(uv * uSpriteSize) + 0.5) / uSpriteSize;
  return textureLod(uSprites, vec3(uv.x, 1.0 - uv.y, uInfo[i].x), lod);
}
void main(){
  vec2 suv = vec2(vUv.x, 1.0 - vUv.y);
  vec3 col = uSky;
  for(int i = 0; i < ${MAXI}; i++){
    if(i >= uCount) break;
    vec4 r = uRect[i];
    vec4 c = spriteAt(i, (suv - r.xy) / r.zw, 0.0);
    if(c.a <= 0.002) continue;
    // nearer clouds (later in the list) shadow this one: their coverage, read where the sun ray
    // through this pixel crosses their plane
    float occ = 0.0;
    for(int j = i + 1; j < ${MAXI}; j++){
      if(j >= uCount) break;
      float dd = uInfo[i].y - uInfo[j].y;
      if(dd <= 0.0) continue;
      vec4 rj = uRect[j];
      occ = max(occ, spriteAt(j, (suv + uShadowDir * dd - rj.xy) / rj.zw, uShadowSoft * dd).a);
    }
    c.rgb = mix(c.rgb, c.rgb * vec3(0.42, 0.60, 0.80), uShadow * occ);
    c.rgb = mix(c.rgb, uSky * c.a, uInfo[i].z);   // haze: far clouds fade toward the sky
    col = col * (1.0 - c.a) + c.rgb;
  }
  fragColor = vec4(col, 1.0);
}`;

  function compile(gl, type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error('CloudStage shader: ' + gl.getShaderInfoLog(sh));
    return sh;
  }
  function link(gl, vs, fs) {
    var prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error('CloudStage link: ' + gl.getProgramInfoLog(prog));
    return prog;
  }
  function num(v, d) { return (typeof v === 'number' && isFinite(v)) ? v : d; }

  /**
   * opts: spriteWidth, spriteHeight (field + sprite resolution per cloud), maxInstances (<= 16),
   *       sky [r,g,b], parallax (apparent shrink per unit depth), shadow, shadowSpread, haze,
   *       sun / elevation (shared light; instance looks are forced to it so shadows agree).
   */
  function CloudStage(canvas, opts) {
    opts = opts || {};
    this.canvas = canvas;
    this.renderer = new window.CloudRenderer(canvas);
    var gl = this.gl = this.renderer.gl;
    this.spriteW = Math.max(16, num(opts.spriteWidth, 160) | 0);
    this.spriteH = Math.max(16, num(opts.spriteHeight, 112) | 0);
    this.max = Math.max(1, Math.min(MAXI, num(opts.maxInstances, 8) | 0));
    this.sky = opts.sky || [0.075, 0.4525, 0.575];
    this.parallax = num(opts.parallax, 0.7);
    this.shadow = num(opts.shadow, 0.7);
    this.shadowSpread = num(opts.shadowSpread, 0.12);
    this.shadowSoft = num(opts.shadowSoft, 1.5);
    this.haze = num(opts.haze, 0.35);
    this.sun = num(opts.sun, DEFAULT_LOOK.sun);
    this.elevation = num(opts.elevation, DEFAULT_LOOK.elevation);
    this.pixelSnap = opts.pixelSnap !== false;
    this.instances = [];
    this.frame = 0;
    this.stats = { rendered: 0 };

    var levels = 1 + Math.floor(Math.log2(Math.max(this.spriteW, this.spriteH)));
    this._arr = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D_ARRAY, this._arr);
    gl.texStorage3D(gl.TEXTURE_2D_ARRAY, levels, gl.RGBA8, this.spriteW, this.spriteH, this.max);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    this._sfbo = gl.createFramebuffer();
    this._prog = link(gl, VS, COMPOSITE_FS);
    var names = ['uSprites', 'uCount', 'uRect', 'uInfo', 'uShadowDir', 'uShadow', 'uShadowSoft', 'uSky', 'uSpriteSize', 'uPixelSnap'];
    this._u = {};
    for (var i = 0; i < names.length; i++) this._u[names[i]] = gl.getUniformLocation(this._prog, names[i]);
    this._vao = gl.createVertexArray();
    this._rects = new Float32Array(MAXI * 4);
    this._infos = new Float32Array(MAXI * 4);
  }

  /**
   * Add a cloud. opts: seed, preset, settings (sim sliders), look (renderer sliders),
   * x, y (world position of the sprite centre at depth 0, screen-width units), size (sprite width
   * in screen widths at depth 0), depth (0 near .. 1 far), drift [dx, dy] per second, speed.
   */
  CloudStage.prototype.add = function (opts) {
    opts = opts || {};
    if (this.instances.length >= this.max) return null;
    var used = {}, layer = 0;
    for (var i = 0; i < this.instances.length; i++) used[this.instances[i].layer] = true;
    while (used[layer]) layer++;
    var look = {};
    for (var k in DEFAULT_LOOK) look[k] = DEFAULT_LOOK[k];
    if (opts.look) for (k in opts.look) look[k] = opts.look[k];
    look.sky = false;
    var inst = {
      layer: layer,
      sim: new window.CloudSim({ seed: num(opts.seed, layer * 977 + 1), preset: opts.preset || 'plumes',
        aspect: this.spriteH / this.spriteW, settings: opts.settings }),
      look: look,
      time: 0,
      x: num(opts.x, 0.5), y: num(opts.y, 0.4),
      size: num(opts.size, 0.6),
      depth: Math.max(0, num(opts.depth, 0)),
      drift: opts.drift || [0, 0],
      speed: num(opts.speed, 1),
      // far clouds animate slowly on screen: refresh their sprite every n-th frame
      refreshEvery: Math.max(1, num(opts.refreshEvery, 1) | 0),
      _stale: true
    };
    this.instances.push(inst);
    return inst;
  };

  CloudStage.prototype.remove = function (inst) {
    var i = this.instances.indexOf(inst);
    if (i >= 0) this.instances.splice(i, 1);
  };

  /** Advance every cloud's sim and drift by dt seconds. */
  CloudStage.prototype.update = function (dt) {
    if (!(dt > 0)) return;
    for (var i = 0; i < this.instances.length; i++) {
      var inst = this.instances[i];
      inst.sim.step(dt * inst.speed);
      inst.time = inst.sim.time;
      inst.x += inst.drift[0] * dt; inst.y += inst.drift[1] * dt;
      inst._stale = true;
    }
  };

  /** Render stale sprites, then composite onto the canvas. camera: {x, y} in world units. */
  CloudStage.prototype.draw = function (camera) {
    var gl = this.gl, r = this.renderer, W = this.spriteW, H = this.spriteH;
    camera = camera || { x: 0, y: 0 };
    this.frame++;
    var rendered = 0, i, inst;

    // ---- sprites: each instance into its own layer, at sprite resolution ----
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._sfbo);
    for (i = 0; i < this.instances.length; i++) {
      inst = this.instances[i];
      if (!inst._stale || (this.frame + inst.layer) % inst.refreshEvery !== 0) continue;
      inst.look.sun = this.sun; inst.look.elevation = this.elevation;
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._sfbo);
      gl.framebufferTextureLayer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, this._arr, 0, inst.layer);
      gl.drawBuffers([gl.COLOR_ATTACHMENT0]);
      r.renderSprite(inst.sim, inst.look, inst.time, this._sfbo, W, H);
      inst._stale = false; rendered++;
    }
    this.stats.rendered = rendered;
    if (rendered) {
      gl.activeTexture(gl.TEXTURE7);
      gl.bindTexture(gl.TEXTURE_2D_ARRAY, this._arr);
      gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
    }

    // ---- composite: far to near, parallax by depth ----
    var order = this.instances.slice().sort(function (a, b) { return b.depth - a.depth; });
    var cw = this.canvas.width || 1, ch = this.canvas.height || 1;
    var n = Math.min(MAXI, order.length);
    for (i = 0; i < n; i++) {
      inst = order[i];
      var s = 1 / (1 + inst.depth * this.parallax);
      var w = inst.size * s, h = w * (H / W) * (cw / ch);
      var cx = 0.5 + (inst.x - camera.x) * s, cy = 0.5 + (inst.y - camera.y) * s;
      this._rects[i * 4] = cx - w / 2; this._rects[i * 4 + 1] = cy - h / 2; this._rects[i * 4 + 2] = w; this._rects[i * 4 + 3] = h;
      this._infos[i * 4] = inst.layer; this._infos[i * 4 + 1] = inst.depth;
      this._infos[i * 4 + 2] = Math.min(0.9, this.haze * inst.depth); this._infos[i * 4 + 3] = 0;
    }
    var az = this.sun * Math.PI / 180;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cw, ch);
    gl.disable(gl.BLEND);
    gl.useProgram(this._prog);
    gl.activeTexture(gl.TEXTURE7);
    gl.bindTexture(gl.TEXTURE_2D_ARRAY, this._arr);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, this.pixelSnap ? gl.NEAREST : gl.LINEAR);
    var u = this._u;
    gl.uniform1i(u.uSprites, 7);
    gl.uniform1i(u.uCount, n);
    gl.uniform4fv(u.uRect, this._rects);
    gl.uniform4fv(u.uInfo, this._infos);
    gl.uniform2f(u.uShadowDir, Math.cos(az) * this.shadowSpread, -Math.sin(az) * this.shadowSpread);
    gl.uniform1f(u.uShadow, this.shadow);
    gl.uniform1f(u.uShadowSoft, this.shadowSoft);
    gl.uniform3f(u.uSky, this.sky[0], this.sky[1], this.sky[2]);
    gl.uniform2f(u.uSpriteSize, W, H);
    gl.uniform1f(u.uPixelSnap, this.pixelSnap ? 1 : 0);
    gl.bindVertexArray(this._vao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);
  };

  CloudStage.prototype.dispose = function () {
    var gl = this.gl;
    gl.deleteTexture(this._arr); gl.deleteFramebuffer(this._sfbo);
    gl.deleteProgram(this._prog); gl.deleteVertexArray(this._vao);
    this.renderer.dispose();
    this.instances = [];
  };

  CloudStage.DEFAULT_LOOK = DEFAULT_LOOK;
  CloudStage.MAX_INSTANCES = MAXI;
  window.CloudStage = CloudStage;
})();
