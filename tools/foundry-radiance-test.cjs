'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const A=require('../src/foundry-assets.js');
const ctx={window:{},Uint8Array,Number,Math};vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname,'../src/foundry-renderer.js'),'utf8'),ctx);
const R=ctx.window.BakedCloudRenderer;
const maps=(w,count)=>[Array.from({length:count},()=>new Uint8Array(w*w*4))];
const make=()=>({w:32,h:32,halfHeight:2,range:4,views:[{yaw:0,pitch:0}],data:maps(32,4),appearance:'baked-radiance-v1',radianceScale:4,radiance:maps(32,2),source:{name:'SkyPaint',revision:'abc123',recipe:{seed:7}},bakeLighting:{sunAz:-42,sunAlt:48,exposure:1.25}});
const a=make();
for(const [x,z,rgba] of [[8,120,[41,85,113,70]],[9,180,[128,150,190,204]]]){
 const i=(8*32+x)*4;a.data[0][0].set([z,255,100,0],i);a.data[0][1].set([128,128,200,255],i);a.radiance[0][0].set(rgba,i);
}
A.buildLods(a,{minWidth:16});const j=(4*16+4)*4;
assert.deepEqual([...a.lods[0].radiance[0][0].slice(j,j+4)],[67,86,111,69],'single-interval LOD area-averages linear premultiplied radiance and opacity');
assert.equal(a.lods[0].radiance[0][0][3],0,'padding never creates radiance opacity');
const b=A.parse(A.stringify(a));assert.equal(b.version,3);assert.equal(b.appearance,a.appearance);assert.equal(b.radianceScale,4);
assert.deepEqual(b.source,a.source);assert.deepEqual(b.bakeLighting,a.bakeLighting);assert.deepEqual(b.radiance,a.radiance);assert.deepEqual(b.lods,a.lods);
assert.equal(A.byteLength(a),(32*32+16*16)*24);assert.equal(R.validateAsset(a),A.byteLength(a));
const absent=make();delete absent.radianceScale;assert.equal(A.parse(A.stringify(absent)).radianceScale,4);
for(const scale of [1e300,1e-300,1e-6*(1-Number.EPSILON),65505]){
 assert.throws(()=>A.validate({...make(),radianceScale:scale}),/radiance scale/i,'asset scale must fit supported HDR range');
 assert.throws(()=>R.validateAsset({...make(),radianceScale:scale}),/radiance scale/i,'standalone renderer must enforce the same HDR range');
}
for(const scale of [1e-6,4,65504]){
 const boundary={...make(),radianceScale:scale};assert.equal(A.validate(boundary),boundary);assert.equal(R.validateAsset(boundary),32*32*24);assert.equal(A.parse(A.stringify(boundary)).radianceScale,scale);assert(Number.isFinite(Math.fround(scale))&&Math.fround(scale)>0,'valid boundary remains a positive GPU uniform');
}
for(const patch of [{appearance:'wrong'},{radianceScale:NaN},{radianceScale:0},{radiance:maps(32,4)},{radiance:undefined},{lighting:maps(32,4)},{bakeLighting:{sunAz:Infinity}},{source:{name:'SkyPaint',recipe:{bad:NaN}}},{version:2},{radianceEncoding:'srgb'},{radianceOrder:['interval1','interval0']}]){
 assert.throws(()=>A.validate({...make(),...patch}));assert.throws(()=>R.validateAsset({...make(),...patch}));
}
for(const patch of [{appearance:undefined},{lods:[{w:16,h:16,data:maps(16,4)}]},{lods:[{w:16,h:16,data:maps(16,4),radiance:maps(16,2),appearance:'wrong'}]}]){
 assert.throws(()=>A.validate({...make(),...patch}));assert.throws(()=>R.validateAsset({...make(),...patch}));
}
for(const version of [1,2]){const encoded=JSON.parse(A.stringify(make()));encoded.version=version;assert.throws(()=>A.parse(encoded),/version|radiance/i);}
const legacy=make();delete legacy.appearance;delete legacy.radiance;delete legacy.radianceScale;assert.equal(JSON.parse(A.stringify(legacy)).version,2);
let allocations=0;
assert.throws(()=>R.prototype.load.call({gl:{createTexture(){allocations++;}}},{...make(),radianceScale:Infinity}));assert.equal(allocations,0,'malformed metadata is rejected before any GPU allocation');
console.log('Foundry radiance: v3 roundtrip, HDR/opacity maps, coherent LOD, budgets, invalid mixed metadata, legacy version PASS');
// Exercise the actual IndexedDB record path with structured-clone semantics.
(async()=>{
 let stored;
 global.indexedDB={open(){const q={};queueMicrotask(()=>{q.result={close(){},transaction(){const tx={objectStore(){return {put(value){stored=structuredClone(value);queueMicrotask(()=>tx.oncomplete());},get(){const request={};queueMicrotask(()=>{request.result=structuredClone(stored);request.onsuccess();});return request;}};}};return tx;}};q.onsuccess();});return q;}};
 try{await A.save(a);const restored=await A.load();assert.deepEqual(restored.radiance,a.radiance);assert.deepEqual(restored.lods,a.lods);assert.deepEqual(restored.source,a.source);assert.deepEqual(restored.bakeLighting,a.bakeLighting);assert.equal(restored.appearance,a.appearance);assert.equal(restored.radianceScale,a.radianceScale);console.log('Foundry radiance IndexedDB: structured-clone metadata/maps/LODs roundtrip PASS');}
 finally{delete global.indexedDB;}
})().catch(error=>{console.error(error);process.exitCode=1;});
