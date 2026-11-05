'use strict';
const assert=require('node:assert/strict');
const A=require('../src/foundry-assets.js');
const asset={w:16,h:16,halfHeight:3,range:8,views:[{yaw:0,pitch:0},{yaw:0,pitch:-85}],data:Array.from({length:2},()=>Array.from({length:4},()=>new Uint8Array(16*16*4)))};
asset.data[0][0][43]=197;
const restored=A.parse(A.stringify(asset));
assert.equal(restored.data[0][0][43],197);
assert.equal(restored.views[1].pitch,-85);
assert.equal(A.byteLength(restored),8192);
assert.throws(()=>A.validate({...asset,data:[]}),/view/i);
assert.throws(()=>A.validate({...asset,range:NaN}),/range/i);
assert.throws(()=>A.validate({...asset,views:[{yaw:Infinity,pitch:0}]}),/angle/i);
assert.throws(()=>A.parse({...JSON.parse(A.stringify(asset)),data:[['invalid']]}),/view|map/i);
assert.throws(()=>A.validate({...asset,w:2048}),/width/i);
assert.throws(()=>A.parse({format:'wrong'}),/format/i);
const bad=JSON.parse(A.stringify(asset));bad.data[0][0]='!'.repeat(1368);
assert.throws(()=>A.parse(bad),/base64/i);
console.log('Foundry assets: byte-exact roundtrip, arbitrary view metadata, validation and allocation limits PASS');
// Coarse captures retain a complete representative ray, never averaged packed
// depth or a foreground normal paired with a different surface's lighting.
const master={w:32,h:32,halfHeight:2,range:4,views:[{yaw:0,pitch:0}],data:[[0,1,2,3].map(()=>new Uint8Array(32*32*4))],lighting:[[0,1,2,3].map(()=>new Uint8Array(32*32*4))]};
for(const [x,y,z,light] of [[8,8,120,30],[9,8,180,210]]){
 const i=(y*32+x)*4;master.data[0][0].set([z,255,100,0],i);master.data[0][1].set([128,128,200,255],i);
 master.lighting[0][0].set([light,40,50,255],i);master.lighting[0][1].set([0,10,20,255],i);
}
A.buildLods(master,{minWidth:16});
assert.equal(master.lods.length,1);assert.equal(master.lods[0].w,16);
const pixel=(4*16+4)*4,coarse=master.lods[0];
assert.deepEqual([...coarse.data[0][0].slice(pixel,pixel+4)],[180,255,100,0]);
assert.equal(coarse.lighting[0][0][pixel],210,'lighting belongs to selected front ray');
assert.equal(coarse.data[0][1][3],0,'depth padding never creates coverage');
assert.equal(coarse.lighting[0][0][3],0,'empty lightmap remains empty');
const enhanced=A.parse(A.stringify(master));
assert.equal(enhanced.version,2);assert.deepEqual(enhanced.lighting,master.lighting);assert.deepEqual(enhanced.lods,master.lods);
assert.equal(A.byteLength(master),(32*32+16*16)*32);
const old=JSON.parse(A.stringify(asset));old.version=1;assert.equal(A.parse(old).data[0][0][43],197,'v1 remains loadable');
assert.throws(()=>A.validate({...master,lighting:[[]]}),/lighting|maps/i);
assert.throws(()=>A.validate({...master,lods:[{...coarse,w:31}]}),/LOD|map/i);
assert.throws(()=>A.validate({...master,lods:[coarse,coarse]}),/LOD/i);
assert.throws(()=>A.validate({...master,w:512,h:384,lods:[],views:Array.from({length:64},()=>({yaw:0,pitch:0}))}),/160 MiB/,'all light maps count toward the allocation budget');
console.log('Foundry v2: six-way maps, coherent ray LODs, complete byte budget and v1 compatibility PASS');
