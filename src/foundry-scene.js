/* Authored 2D cloud instances. No particle population or geometry simulation. */
(function (root) {
  'use strict';
  // An authored frame at scale 1 fills one viewport height. Frozen exterior
  // maps cannot represent interior flythroughs: fade from 125% to 225% frame
  // height instead of approaching infinite scale at the camera plane.
  var NEAR_FRAME_FULL = 1.25, NEAR_FRAME_HIDDEN = 2.25;
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function finite(x, fallback) { return Number.isFinite(x) ? x : fallback; }
  function smooth(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  function random(seed) {
    var a = seed >>> 0;
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function FoundryScene(options) {
    options = options || {};
    this.settings = Object.assign({ count: 12, travel: .7, drift: .08, size: 1.3, sway: .12, swayPeriod: 35, lookElevation: 0 }, options.settings || {});
    this.aspect = 1.5; this.assetAspect = 1; this.assetBound = 1.25; this.eye = { x: 0, y: 0 };
    this.reset(finite(options.seed, 1));
  }
  FoundryScene.prototype.reset = function (seed) {
    this.seed = seed | 0; this.rng = random(this.seed); this.serial = 0; this.time = 0; this.swayPhase = 0;
    this.camera = { x: 0, y: 0, z: 0 }; this.clouds = [];
    var count = clamp(Math.round(this.settings.count), 1, 40);
    for (var i = 0; i < count; i++) this.clouds.push(this.spawn(5 + 29 * Math.sqrt((i + this.rng()) / count), true));
    // One readable foreground formation anchors the initial sky; the remaining
    // seeded instances provide depth. Every seed still varies its placement.
    var hero = this.clouds[0]; hero.z = 8 + this.rng() * 2; hero.x = (this.rng() - .5) * hero.z * .35;
    hero.y = 4 + this.rng(); hero.radius = 2.4 + this.rng() * .5;
    // An actual overhead formation is available to inspect immediately. It is
    // retained while outside the horizon view rather than recycled prematurely.
    if (count > 1) { var above = this.clouds[1]; above.z = .8 + this.rng() * .4; above.x = (this.rng() - .5) * .5; above.y = 5 + this.rng(); above.radius = 1.8 + this.rng() * .4; }
  };
  FoundryScene.prototype.spawn = function (distance, initial) {
    var rng = this.rng, spread = .9 * Math.max(1, this.aspect);
    return { id: ++this.serial, x: this.camera.x + (rng() * 2 - 1) * distance * spread,
      y: this.camera.y + 2.8 + rng() * 4.5, z: this.camera.z + distance,
      radius: .9 + rng() * 1.35, born: initial ? -10 : this.time, phase: rng() * 19 };
  };
  FoundryScene.prototype.view = function () {
    return { x: this.camera.x + this.eye.x + this.settings.sway * Math.sin(this.swayPhase),
      y: this.camera.y + this.eye.y + this.settings.sway * .35 * Math.sin(this.swayPhase * .66 + 1) };
  };
  FoundryScene.prototype.opacity = function (cloud) {
    var halfHeight = Math.max(0, cloud.radius * this.settings.size);
    var hiddenDepth = Math.max(.05, halfHeight / NEAR_FRAME_HIDDEN);
    var fullDepth = Math.max(.1, halfHeight / NEAR_FRAME_FULL);
    // Depth-space easing keeps approach continuous. This is an exterior-view
    // safety fade, not volumetric flythrough; it does not mutate/recycle roots.
    return smooth(hiddenDepth, fullDepth, this.coordinates(cloud).depth) * smooth(0, 2, this.time - cloud.born);
  };
  FoundryScene.prototype.coordinates = function (cloud) {
    var view = this.view(), dx = cloud.x - view.x, dy = cloud.y - view.y, dz = cloud.z - this.camera.z;
    var tilt = clamp(finite(this.settings.lookElevation, 0), 0, 80) * Math.PI / 180, co = Math.cos(tilt), si = Math.sin(tilt);
    return { dx: dx, dy: dy, dz: dz, screenY: dy * co - dz * si, depth: dz * co + dy * si };
  };
  FoundryScene.prototype.packet = function (cloud) {
    var q = this.coordinates(cloud), depth = Math.max(.05, q.depth);
    // Captures cover the front and underside, not a full back hemisphere.
    // At zenith azimuth is undefined: smoothly hold a front-facing azimuth
    // instead of flipping the billboard 180 degrees when world dz crosses zero.
    // This front-facing hold continues behind world-forward zero because the
    // current asset has no rear captures; it is not a full-orbit camera model.
    var guard = Math.max(.02, Math.abs(q.dy) * .1), yawDepth = q.dz;
    if (yawDepth < guard) { var t = clamp(yawDepth / guard, 0, 1); yawDepth = guard * (.5 + .5 * t * t); }
    return { id: cloud.id, x: q.dx / depth, y: q.screenY / depth, scale: cloud.radius * this.settings.size / depth,
      yaw: Math.atan2(-q.dx, yawDepth) * 180 / Math.PI,
      pitch: -Math.atan2(q.dy, Math.hypot(q.dx, q.dz)) * 180 / Math.PI,
      cameraPitch: clamp(finite(this.settings.lookElevation, 0), 0, 80),
      distance: depth, opacity: this.opacity(cloud), phase: cloud.phase };
  };
  FoundryScene.prototype.visible = function (p) {
    // Full authored frame, plus a breathing margin; never cull by opaque center alone.
    var ry = p.scale * this.assetBound, rx = Math.max(ry, p.scale * this.assetAspect * 1.25);
    return p.opacity > 0 && p.x + rx >= -this.aspect && p.x - rx <= this.aspect && p.y + ry >= -1 && p.y - ry <= 1;
  };
  FoundryScene.prototype.advance = function (sceneDt, wallDt, input) {
    sceneDt = Math.max(0, finite(sceneDt, 0)); wallDt = Math.max(0, finite(wallDt, 0)); input = input || {};
    this.camera.x += finite(input.x, 0) * wallDt; this.camera.y += finite(input.y, 0) * wallDt;
    if (!(sceneDt > 0)) return;
    this.time += sceneDt;
    this.swayPhase += sceneDt * Math.PI * 2 / Math.max(5, this.settings.swayPeriod);
    this.camera.z += this.settings.travel * sceneDt;
    for (var i = 0; i < this.clouds.length; i++) {
      var c = this.clouds[i]; c.x += this.settings.drift * sceneDt;
      var z = c.z - this.camera.z, p = this.packet(c);
      // World-forward zero is not a viewing boundary when looking upward. Keep
      // overhead clouds until their rotated bounds leave the view. Ahead-of-camera
      // clouds remain available when looking away and back; wind-stranded clouds
      // may recycle only after leaving both the broad world envelope and the view.
      if (!this.visible(p) && (z <= 0 || Math.abs(c.x - this.camera.x) > 60) && this.time - c.born > 2) this.clouds[i] = this.spawn(29 + this.rng() * 8, false);
    }
  };
  FoundryScene.prototype.project = function (aspect) {
    this.aspect = Math.max(.1, finite(aspect, this.aspect));
    var out = [];
    for (var i = 0; i < this.clouds.length; i++) { var p = this.packet(this.clouds[i]); if (this.visible(p)) out.push(p); }
    return out;
  };
  root.FoundryScene = FoundryScene;
  if (typeof module === 'object' && module.exports) module.exports = FoundryScene;
})(typeof window !== 'undefined' ? window : globalThis);
