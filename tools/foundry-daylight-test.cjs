'use strict';
const assert=require('node:assert/strict'),D=require('../src/foundry-daylight.js');
const noon=D.sample(12),night=D.sample(0);
assert(noon.sunIntensity>night.sunIntensity);assert(night.lightIntensity>noon.lightIntensity);
assert(noon.sunAlt>0&&night.sunAlt<0);assert(noon.lightAlt<0&&night.lightAlt>0);
assert.deepEqual(D.sample(24),night);assert.deepEqual(D.sample(-24),night);
for(let t=0;t<=24;t+=.01){const a=D.sample(t),b=D.sample(t+.001);for(const key of ['sunIntensity','ambientIntensity','lightIntensity','scatterFill']){assert(Number.isFinite(a[key])&&a[key]>=0);assert(Math.abs(a[key]-b[key])<.01,'light strength stays continuous');}for(const key of ['sunColor','ambientColor','lightColor','skyColor'])for(let k=0;k<3;k++){assert(a[key][k]>=0&&a[key][k]<=1);assert(Math.abs(a[key][k]-b[key][k])<.01,'light colors stay continuous');}}
assert.equal(D.advance(12,0,1),12);assert.equal(D.advance(12,60,0),12);assert.equal(D.advance(12,30,1),0);assert.equal(D.advance(23,5,2),0);
for(const value of [0,.02,.5,1])assert(Math.abs(D.toSRGB(D.toLinear(value))-value)<1e-6);
console.log('Daylight: continuous cyclic sun/moon/ambient colors, clock advance, zero-speed freeze and color conversions PASS');
