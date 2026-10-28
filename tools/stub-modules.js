/* THROWAWAY test stub for the shell. Not part of the app. Mimics the CONTRACT.md API
 * with trivial behaviour: 10 blobs orbiting, renderer clears the canvas to teal. */
(function () {
  function CloudSim(opts) {
    this.aspect = opts.aspect || 0.75;
    this.settings = { speed: 1, cohesion: .6, breakup: .5, buoyancy: .5, turbulence: .4, coverage: .6 };
    this.blobs = new Float32Array(CloudSim.MAX_BLOBS * 4);
    this.aux = new Float32Array(CloudSim.MAX_BLOBS * 4);
    this.blobCount = 10;
    this.t = 0;
    this.reseed(opts.seed, opts.preset);
  }
  CloudSim.MAX_BLOBS = 64;
  CloudSim.PRESETS = ['plumes', 'lavalamp', 'islands', 'confluence'];
  CloudSim.prototype.reseed = function (seed, preset) { this.seed = seed; this.preset = preset; this.t = 0; this.step(0); };
  CloudSim.prototype.resize = function (a) { this.aspect = a; };
  CloudSim.prototype.step = function (dt) {
    this.t += dt * (this.settings.speed || 0);
    for (var i = 0; i < this.blobCount; i++) {
      var ph = this.t * 0.3 + i * 0.63 + (this.seed % 97) * 0.01;
      this.blobs[i * 4] = 0.5 + 0.3 * Math.cos(ph);
      this.blobs[i * 4 + 1] = this.aspect * (0.5 + 0.3 * Math.sin(ph));
      this.blobs[i * 4 + 2] = 0.08;
      this.blobs[i * 4 + 3] = i;
    }
  };

  function CloudRenderer(canvas) {
    this.gl = canvas.getContext('webgl2');
    if (!this.gl) throw new Error('WebGL2 not available');
    this.canvas = canvas;
  }
  CloudRenderer.prototype.resize = function (w) { this.fieldW = w; this.fieldH = Math.round(w * this.canvas.height / this.canvas.width); };
  CloudRenderer.prototype.render = function (sim, look, t) {
    var gl = this.gl;
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    var k = look.sky ? 1 : 0.4;
    gl.clearColor(0.035 * k + 0.05 * Math.sin(t), 0.41 * k, 0.53 * k, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
  };

  window.CloudSim = CloudSim;
  window.CloudRenderer = CloudRenderer;
})();
