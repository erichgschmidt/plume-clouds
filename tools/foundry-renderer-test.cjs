const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const ctx={window:{},Uint8Array,Number,Math};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../src/foundry-renderer.js'),'utf8'),ctx);
const validate=ctx.window.BakedCloudRenderer.validateAsset;
const asset={w:2,h:2,views:[{yaw:0,pitch:-85}],halfHeight:2,range:4,data:[[0,1,2,3].map(()=>new Uint8Array(16))]};
assert.equal(validate(asset),64);
for(const patch of [{w:0},{range:0},{halfHeight:NaN},{views:[]},{data:[]},{views:[{yaw:Infinity,pitch:0}]}])assert.throws(()=>validate({...asset,...patch}));
assert.throws(()=>validate({...asset,data:[[new Uint8Array(15),...asset.data[0].slice(1)]]}));
const targetBasis=ctx.window.BakedCloudRenderer.targetBasis;
assert.equal(typeof targetBasis,'function');
const dot=(a,b)=>a.reduce((sum,v,i)=>sum+v*b[i],0),deg=Math.PI/180;
assert(Array.from(targetBasis(0,20*deg,70*deg)).every(Number.isFinite),'parallel camera-up fallback stays finite');
for(const yaw of [-35,-20,0,20,35])for(const pitch of [-85,-60,-30,0,20]){
 const old=targetBasis(yaw*deg,pitch*deg),zero=targetBasis(yaw*deg,pitch*deg,0);
 assert.deepEqual(Array.from(old),Array.from(zero),'zero camera tilt preserves previous orientation');
 for(const tilt of [20,60,80]){
  const matrix=targetBasis(yaw*deg,pitch*deg,tilt*deg),right=Array.from(matrix.slice(0,3)),up=Array.from(matrix.slice(3,6)),forward=Array.from(matrix.slice(6,9));
  const cameraUp=[0,Math.cos(tilt*deg),Math.sin(tilt*deg)];
  assert.deepEqual(forward,Array.from(old.slice(6,9)),'camera alignment never changes the clamped capture ray');
  assert(Math.abs(dot(right,cameraUp))<1e-6,'screen right is perpendicular to projected camera up');
  assert(dot(up,cameraUp)>0,'screen up follows the camera');
  assert(Math.abs(dot(right,up))<1e-6);assert(Math.abs(dot(right,right)-1)<1e-6);assert(Math.abs(dot(up,up)-1)<1e-6);
 }
}
console.log('Foundry renderer asset contract: PASS');
