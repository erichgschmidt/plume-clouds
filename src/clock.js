// Shared scene time. Playback scales elapsed time, never an already accumulated phase.
(function () {
  'use strict';
  function CloudClock() { this.time = 0; }
  CloudClock.prototype.advance = function (wallDt, speed, playing) {
    if (!playing || !(wallDt > 0) || !isFinite(wallDt) || !(speed > 0) || !isFinite(speed)) return 0;
    var dt = Math.min(.1, wallDt) * speed; // discard suspended-tab wall time
    this.time += dt;
    return dt;
  };
  // ThermalSim caps a step at .1s. Consume deferred/faster playback time in full.
  CloudClock.step = function (sim, seconds) {
    if (!(seconds > 0) || !isFinite(seconds)) return;
    var count = Math.ceil(seconds / .1), dt = seconds / count;
    for (var i = 0; i < count; i++) sim.step(dt);
  };
  window.CloudClock = CloudClock;
})();
