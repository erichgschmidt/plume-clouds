'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const env={window:{},Math};vm.createContext(env);
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../lab-ref.js'),'utf8').replace('  function fieldRef(', '  window.contourSample=shapeF;\n  function fieldRef('),env);
const M=1,D=new Float32Array(32),sample=env.window.contourSample;
D.set([.18,-.06,.08,.04],24);D[28]=.7;D[29]=5;
let maxError=0;
for(const sign of [-1,1])for(const reach of [.05,.35,1])for(let a=-Math.PI;a<Math.PI;a+=.013){
  D[31]=0;const base=sample(D,M,0,a)[0];D[31]=sign*(Math.round(reach*100)+.5);
  const got=sample(D,M,0,a),eps=1e-5,finite=(sample(D,M,0,a+eps)[0]-sample(D,M,0,a-eps)[0])/(2*eps);
  assert.ok(sign*(got[0]-base)>=-1e-12,'filter never moves in opposite direction');
  assert.ok(got[0]>.3&&got[0]<1.4,'profile remains positive and within its bound');
  const error=Math.abs(finite-got[1]);maxError=Math.max(maxError,error);assert.ok(error<.001,'analytic contour derivative agrees with finite difference');
}
D.fill(0);D[29]=5;D[31]=100.5;
assert.deepEqual(Array.from(sample(D,M,0,.73)),[1,0],'a flat circle stays exact');
// An angular-only lobe must keep one face/corner feature per sector. Shifted
// polygon copies used to turn a five-sided shape into a twenty-petal fan.
for(const sides of [3,4,5,6,8])for(const sign of [-1,1])for(const reach of [.05,.35,.7,1]){
  D.fill(0);D[28]=.85;D[29]=sides;D[31]=sign*(Math.round(reach*100)+.5);
  const hs=Math.PI/sides;
  for(let k=1;k<512;k++){
    const q=sample(D,M,0,hs+hs*k/512);
    assert.ok(q[1]>=-1e-7,'angular filter must not create extra radial petals');
  }
  assert.ok(Math.abs(sample(D,M,0,hs)[1])<1e-8,'face-center slope stays zero');
  assert.ok(Math.abs(sample(D,M,0,0)[1])<1e-8,'corner slope stays zero');
}
console.log('Contour math: signed movement, finite derivative, bounded shape, neutral circle PASS; max derivative error',maxError);
