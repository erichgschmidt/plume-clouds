/* Independent energy/opacity area oracle for the two signed-axis response maps. */
'use strict';
const assert=require('node:assert/strict'),A=require('../src/foundry-assets.js');
const maps=n=>[Array.from({length:n},()=>new Uint8Array(32*32*4))];
const a={w:32,h:32,halfHeight:1,range:1,views:[{yaw:0,pitch:0}],appearance:'baked-radiance-v1',radianceScale:4,data:maps(4),radiance:maps(2),relighting:maps(2)};
const samples=[[[128,0,0,200],[0,64,0,255]],[[0,96,0,100],[80,0,0,128]],[[0,0,64,40],[0,0,120,64]],[[255,255,255,255],[255,255,255,255]]];
for(let k=0;k<3;k++){const i=((8+Math.floor(k/2))*32+8+k%2)*4;a.data[0][0].set([120+k*20,0,40,0],i);a.data[0][1].set([128,128,255,255],i);a.radiance[0][0].set([50,40,30,[255,128,64][k]],i);for(let m=0;m<2;m++)a.relighting[0][m].set(samples[k][m],i);}
// Colored response without original geometric coverage cannot brighten or close a gap.
const poison=(9*32+9)*4;for(let m=0;m<2;m++)a.relighting[0][m].set(samples[3][m],poison);
A.buildLods(a,{minWidth:16});const l=a.lods[0],j=(4*16+4)*4;
for(let m=0;m<2;m++){const got=[...l.relighting[0][m].slice(j,j+4)],want=[0,1,2].map(c=>Math.round(Math.sqrt(samples.slice(0,3).reduce((s,p)=>s+p[m][c]**2,0)/4))).concat(Math.round(samples.slice(0,3).reduce((s,p)=>s+p[m][3],0)/4));assert.deepEqual(got,want,'decode sqrt response BEFORE averaging; both alpha channels stay linear');}
assert.equal(l.data[0][0][j],160,'geometry remains coherent representative source ray');assert.equal(l.data[0][1][3],0);assert.equal(l.relighting[0][0][3],0);assert.equal(l.relighting[0][1][3],0);
assert.deepEqual(A.parse(A.stringify(a)).lods,a.lods);assert.equal(A.byteLength(a),(32*32+16*16)*32);
// A zero-opacity ray contributes neither signed light nor ambient, even if encoded RGB is poisoned.
const zero={...a,lods:undefined,data:maps(4),radiance:maps(2),relighting:maps(2)};zero.data[0][1].set([128,128,255,255],poison);zero.relighting[0][0].set([255,255,255,255],poison);zero.relighting[0][1].set([255,255,255,0],poison);A.buildLods(zero,{minWidth:16});assert(zero.lods[0].relighting[0].every(m=>m.every(v=>v===0)),'zero-alpha poison cannot create an optical response');
console.log('Relighting LOD: signed response energy, linear ambient/opacity, original coverage, true holes, coherent geometry PASS');
