// node tools/clock-test.js — deterministic playback and layer timing checks.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const env = { window: {}, Math, Float32Array, performance };
vm.createContext(env);
for (const file of ['clock.js', 'motion.js', 'layer.js', 'puffs.js']) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'src', file), 'utf8'), env, { filename: file });
}
const { CloudClock, ThermalSim, LayerSim } = env.window;
const near = (a, b, label) => assert.ok(Math.abs(a - b) < 1e-9, `${label}: ${a} != ${b}`);
const clock = new CloudClock();
for (let i = 0; i < 60; i++) clock.advance(1 / 60, 1, true);
near(clock.time, 1, 'normal rate');
clock.advance(0, 3, true);
near(clock.time, 1, 'rate edit does not jump phase');
for (let i = 0; i < 60; i++) clock.advance(1 / 60, 2, true);
near(clock.time, 3, 'rate changes integrate elapsed time');
for (let i = 0; i < 60; i++) {
  assert.equal(clock.advance(1 / 60, 0, true), 0);
  assert.equal(clock.advance(1 / 60, 2, false), 0);
}
near(clock.time, 3, 'zero and pause freeze');
assert.equal(clock.advance(NaN, 1, true), 0);
assert.equal(clock.advance(.1, -1, true), 0);
const thermal = new ThermalSim({ seed: 9, preset: 'congestus' });
CloudClock.step(thermal, .8);
near(thermal.time, .8, 'batched far-cloud time is not discarded by sim clamp');
const a = new LayerSim({ seed: 42, preset: 'stratus' });
const b = new LayerSim({ seed: 42, preset: 'stratus' });
a.motion = 0; b.motion = 1;
const age = a.parcels[0].age, x = a.parcels[0].x;
CloudClock.step(a, .5); CloudClock.step(b, .5);
near(a.time, b.time, 'turbulence does not change ageing rate');
near(a.parcels[0].age, age + .5, 'zero turbulence still ages');
near(a.parcels[0].x, x, 'zero turbulence stops local wind drift');
assert.notEqual(b.parcels[0].x, x);
const cells = new LayerSim({ seed: 42, preset: 'altocumulus' });
cells.motion = 1; CloudClock.step(cells, .5);
const angle = cells.rollAngle;
cells.motion = 0; CloudClock.step(cells, .5);
near(cells.rollAngle, angle, 'zero turbulence preserves accumulated roll');
cells.motion = 2; CloudClock.step(cells, .5);
near(cells.rollAngle, angle + .05, 'roll rate edits do not rewrite phase history');
// Exercise the production tree builder with only GPU uploads stubbed. A fixed root
// isolates the child cycle from simulation motion and camera/noise controls.
function treeHarness(motion, windSpeed = 0) {
  const R = env.window.PuffRenderer, renderer = Object.create(R.prototype);
  renderer._w = 1024; renderer._h = 768;
  renderer._sphData = new Float32Array(R.MAX_SPH * 32);
  renderer.gl = { activeTexture() {}, bindTexture() {}, texSubImage2D() {} };
  renderer._bin = () => {};
  const sim = { time: 0, cx: .5, baseY: .7, topY: .3, refRadius: .1, blobCount: 1,
    blobs: new Float32Array([.5, .5, .1, 17]), aux: new Float32Array([0, .5, 0, 1]),
    spin: new Float32Array([0, 0, 1, 0]), detail: new Float32Array([1]) };
  const cloud = { sim, look: { children: 4, levels: 2, ratio: .5, life: 1, motion, windSpeed } };
  const build = (simTime, sceneTime) => {
    sim.time = simTime;
    renderer._tree([cloud], sceneTime);
    assert.ok(renderer.count > 1, 'fixture contains child puffs');
    const data = [];
    for (let row = 0; row < 8; row++) data.push(...renderer._sphData.slice(row * R.MAX_SPH * 4, row * R.MAX_SPH * 4 + renderer.count * 4));
    return data;
  };
  build.renderer = renderer; build.cloud = cloud;
  return build;
}
const calmTree = treeHarness(0), movingTree = treeHarness(1);
const initialTree = calmTree(0, 0);
assert.deepEqual(initialTree, movingTree(0, 0));
const agedTree = calmTree(4, 4);
assert.notDeepEqual(agedTree, initialTree, 'children still cycle at zero turbulence');
assert.deepEqual(agedTree, movingTree(4, 4), 'turbulence does not retime child cycles');
assert.deepEqual(agedTree, calmTree(4, 99), 'child cycle follows frozen sim time, not scene time');
const batchedWind = treeHarness(1, 1), steppedWind = treeHarness(1, 1);
batchedWind.cloud.look.erosion = .5; steppedWind.cloud.look.erosion = .5;
batchedWind(0, 0); steppedWind(0, 0);
function seedWisp(tree) {
  tree.renderer._wind[0].wisps.set(99, { c: 0, x: .5, y: .5, r: .03, v: .1, age: 2, life: 10, z: 0, dw: .1, band: 0, pid: -1, id: 99 });
}
seedWisp(batchedWind); seedWisp(steppedWind);
batchedWind(.6, .6);
for (let i = 1; i <= 6; i++) steppedWind(i / 10, i / 10);
const batchedState = batchedWind.renderer._wind[0], steppedState = steppedWind.renderer._wind[0];
near(batchedState.wisps.get(99).age, 2.6, 'deferred wisp time is fully consumed');
near(batchedState.wisps.get(99).x, steppedState.wisps.get(99).x, 'deferred wisp transport agrees with substeps');
near(batchedState.lobes.get(17000).x, steppedState.lobes.get(17000).x, 'deferred wind agrees with substeps');
near(batchedState.lobes.get(17000).wear, steppedState.lobes.get(17000).wear, 'deferred erosion agrees with substeps');
const gustPhase = batchedState.gustPhase;
batchedWind.cloud.look.motion = 0; batchedWind(1.2, 1.2);
near(batchedState.gustPhase, gustPhase, 'turbulence edit preserves gust phase');
console.log('OK: playback, freeze, batched simulation/effects, turbulence intensity, and child cycles');
