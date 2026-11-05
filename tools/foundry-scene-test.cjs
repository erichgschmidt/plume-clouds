'use strict';
const assert = require('node:assert/strict');
const Scene = require('../src/foundry-scene.js');
const clone = value => JSON.parse(JSON.stringify(value));
const a = new Scene({ seed: 17 }), b = new Scene({ seed: 17 });
assert.deepEqual(a.clouds, b.clouds, 'same seed gives identical authored instances');
assert.notDeepEqual(a.clouds, new Scene({ seed: 18 }).clouds);
a.advance(1, 1, {}); b.advance(1, 1, {});
assert.deepEqual(a.project(1.5), b.project(1.5), 'scene replay is deterministic');
const paused = clone(a.clouds), time = a.time, cam = clone(a.camera);
a.advance(0, 1, {});
assert.deepEqual(a.clouds, paused); assert.equal(a.time, time); assert.deepEqual(a.camera, cam);
const before = a.project(1.5);
a.advance(0, .25, { x: 1, y: .5 });
assert.equal(a.time, time); assert.deepEqual(a.clouds, paused);
assert(a.camera.x > cam.x && a.camera.y > cam.y, 'paused camera remains inspectable');
assert.notDeepEqual(a.project(1.5), before);

const s = new Scene({ seed: 1, settings: { count: 1, sway: 0, travel: 0, drift: 0, size: 1 } });
s.clouds = [{ id: 7, x: 2, y: 3, z: 10, radius: 1, born: -10, phase: .25 }];
const p = s.project(2)[0];
assert.equal(p.x, .2); assert.equal(p.y, .3); assert.equal(p.scale, .1); assert.equal(p.distance, 10);
assert(Math.abs(p.yaw - Math.atan2(-2, 10) * 180 / Math.PI) < 1e-10, 'camera left of cloud views its left side');
assert(p.pitch < 0, 'view from below selects underside');
assert.equal(p.phase, .25); assert.equal(p.opacity, 1);
const old = clone(s.clouds);
s.advance(0, 0, {}); assert.deepEqual(s.clouds, old);
s.camera.x = 100; assert.equal(s.project(2).length, 0, 'offscreen conservative bounds culled');
assert.equal(s.clouds[0].id, 7, 'projection never deletes source instances');
s.camera.x = 0; s.camera.z = 9.4;
assert(s.opacity(s.clouds[0]) < 1 && s.opacity(s.clouds[0]) > 0, 'near-plane crossing fades continuously');
s.camera.z = 10;
assert.equal(s.project(2).length, 0, 'fully behind camera is absent');
s.advance(0, 1, {}); assert.equal(s.clouds[0].id, 7, 'pause prevents recycling');
s.advance(.1, 0, {}); assert.notEqual(s.clouds[0].id, 7, 'resume replaces departed cloud');

const c = new Scene({ seed: 33, settings: { count: 3, travel: .01, drift: .02, sway: 0 } });
const d = new Scene({ seed: 33, settings: { count: 3, travel: .01, drift: .02, sway: 0 } });
c.advance(1, 0, {}); for (let i = 0; i < 100; i++) d.advance(.01, 0, {});
for (let i = 0; i < c.clouds.length; i++) assert(Math.abs(c.clouds[i].x-d.clouds[i].x) < 1e-10);
assert(Math.abs(c.camera.z-d.camera.z) < 1e-10);
c.reset(33); assert.equal(c.time, 0); assert.deepEqual(c.camera, { x: 0, y: 0, z: 0 });
assert.equal(c.clouds.length, 3);
const overhead = new Scene({ seed: 9, settings: { count: 1, sway: 0, travel: 1, drift: 0, size: 1, lookElevation: 80 } });
overhead.clouds = [{ id: 70, x: 0, y: 5, z: 1, radius: 1, born: -10, phase: 0 }];
const up = overhead.project(1.5)[0];
assert(up && Math.abs(up.y) < .1, 'overhead camera centers an underside cloud');
assert(up.pitch < -75 && up.distance > 4.9, 'actual underside capture uses positive tilted camera depth');
assert.equal(up.cameraPitch,80,'packet carries camera tilt separately from physical capture direction');
const capture = [up.yaw, up.pitch];
overhead.settings.lookElevation = 60;
assert.deepEqual([overhead.packet(overhead.clouds[0]).yaw, overhead.packet(overhead.clouds[0]).pitch], capture, 'looking upward does not change physical capture direction');
assert.equal(overhead.packet(overhead.clouds[0]).cameraPitch,60);
overhead.settings.lookElevation = 80;
overhead.advance(1.5, 0, {});
assert.equal(overhead.clouds[0].id, 70, 'cloud passing world forward plane remains visible overhead');
assert(overhead.project(1.5).length === 1);
const beforeTilt = overhead.packet(overhead.clouds[0]); overhead.settings.lookElevation += .01;
const afterTilt = overhead.packet(overhead.clouds[0]);
assert(Math.abs(afterTilt.y-beforeTilt.y) < .001 && Math.abs(afterTilt.scale-beforeTilt.scale) < .001, 'tilt projection is continuous');
overhead.advance(0, 1, { x: 1 }); assert.equal(overhead.time, 1.5, 'overhead camera inspection does not advance scene');
const pole = new Scene({ seed: 1, settings: { count: 1, sway: 0, travel: 0, drift: 0, size: 1, lookElevation: 80 } });
pole.clouds = [{ id: 71, x: .001, y: 5, z: 1, radius: 1, born: -10, phase: 0 }];
let lastYaw = null, poleStep = 0;
for (let i = 0; i <= 200; i++) { pole.camera.z = .9 + i * .001; const packet = pole.packet(pole.clouds[0]); if (lastYaw !== null) poleStep = Math.max(poleStep, Math.abs(packet.yaw-lastYaw)); lastYaw = packet.yaw; assert(pole.visible(packet)); }
assert(poleStep < .1 && Math.abs(lastYaw) < 1, 'limited-view pole fallback never flips the billboard 180 degrees');
console.log('PASS authored sky scene: determinism, pause, camera, projection, overhead, bounds, near crossing, recycling, time partition');

// Baked exterior maps cannot represent entering a cloud. Hide them smoothly
// before perspective scale diverges, without retiring their source identity.
const near = new Scene({seed:2,settings:{count:1,sway:0,travel:1,drift:0,size:1}});
near.clouds=[{id:99,x:0,y:0,z:6,radius:2,born:-10,phase:.75}];
let previousOpacity=1,maxOpacityStep=0,maximumDrawScale=0;
for(let step=0;step<=300;step++){
 const source=near.clouds[0],beforePacket=near.packet(source);assert.equal(source.id,99,'approaching cloud is not replaced before its world plane');
 const drawn=near.project(1.5);if(drawn.length)maximumDrawScale=Math.max(maximumDrawScale,drawn[0].scale);
 assert(drawn.every(p=>p.scale<2.25),'CPU projection must reject unsupported near scales');
 maxOpacityStep=Math.max(maxOpacityStep,Math.abs(beforePacket.opacity-previousOpacity));previousOpacity=beforePacket.opacity;
 if(step<300)near.advance(.02,0,{});
}
assert(maximumDrawScale>1.25&&maximumDrawScale<2.25);assert(maxOpacityStep<.05,'near fade progresses continuously');
assert.equal(near.project(1.5).length,0,'fully faded instance never reaches renderer');
const fadedId=near.clouds[0].id;near.advance(0,1,{});assert.equal(near.clouds[0].id,fadedId,'pause preserves faded source');
for(const size of [.25,1,3]){
 const n=new Scene({seed:1,settings:{count:1,size,sway:0,travel:0,drift:0}}),cloud={id:8,x:0,y:0,z:10,radius:2,born:-10,phase:0};n.clouds=[cloud];
 cloud.z=cloud.radius*size/1.25;assert.equal(n.opacity(cloud),1,'full opacity at supported exterior limit');
 cloud.z=cloud.radius*size/1.75;assert(n.opacity(cloud)>0&&n.opacity(cloud)<1,'intermediate scale fades for every authored size');
 cloud.z=cloud.radius*size/2.25;assert.equal(n.opacity(cloud),0,'scale-based near cutoff respects custom cloud size');assert.equal(n.project(1.5).length,0);
}
assert.equal(up.opacity,1,'ordinary overhead flyby stays fully opaque');
console.log('PASS near-impostor safety: bounded submitted scale, continuous fade, size invariance, paused identity, overhead visibility');
