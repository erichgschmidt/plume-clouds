/* Contract and isolation tests: no GPU, no author-side dependencies. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const A=require('../src/foundry-assets.js'),{slab,decode,over}=require('./foundry-volume-fixtures.cjs');
assert.deepEqual(decode([255,0,255,0]),[0,0,0,0],'zero-alpha imports carry no radiance');
const asset=slab({w:64,layers:[{front:.5,back:.1,sigma:1,color:[.8,.2,.1]},{front:-.1,back:-.6,sigma:2,color:[.1,.3,.7]}]});
const i=(32*64+32)*4,front=decode(asset.radiance[0][0].slice(i,i+4)),back=decode(asset.radiance[0][1].slice(i,i+4));
const physicalFront=1-Math.exp(-.4),physicalBack=1-Math.exp(-1);
assert(Math.abs(over(front,back)[3]-(physicalFront+(1-physicalFront)*physicalBack))<.004,'independent fixture follows Beer-Lambert transmittance');
const restored=A.parse(A.stringify(asset));
assert.equal(restored.appearance,asset.appearance,'serialized asset retains volume appearance mode');
assert.equal(restored.radianceScale,4);assert.deepEqual(restored.radiance,asset.radiance,'volume maps survive byte-exact exchange');
assert.equal(A.byteLength(asset),64*64*24,'radiance bytes count toward allocation budget');
assert.throws(()=>A.validate({...asset,radianceScale:0}),/radiance|scale/i);
assert.throws(()=>A.validate({...asset,appearance:'unknown-volume'}),/appearance|encoding/i);
assert.throws(()=>A.validate({...asset,radiance:[[]]}),/radiance|maps/i);
A.buildLods(asset,{minWidth:16});
for(const l of asset.lods){assert(l.radiance,'every LOD retains integrated appearance');assert.equal(l.radiance.length,1);assert.equal(l.radiance[0].length,2);}
assert.equal(A.byteLength(asset),(64*64+32*32+16*16)*24);
const lodRoundtrip=A.parse(A.stringify(asset));assert.deepEqual(lodRoundtrip.lods,asset.lods);
const context={window:{},Uint8Array,Number,Math};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../src/foundry-renderer.js'),'utf8'),context);
assert.equal(context.window.BakedCloudRenderer.validateAsset(asset),A.byteLength(asset),'renderer counts all stored maps');
const html=fs.readFileSync(path.join(__dirname,'../sky.html'),'utf8'),scripts=[...html.matchAll(/<script src="([^"?]+)(?:\?[^\"]*)?"/g)].map(m=>m[1]);
const runtime=scripts.map(f=>fs.readFileSync(path.join(__dirname,'..',f),'utf8')).join('\n');
for(const forbidden of ['SkyPaintAuthor','FoundryVolumeBaker','CloudSim','cloudOpticsPassFS','ATMOSPHERE_LUT','sampler3D'])assert(!runtime.includes(forbidden),'author-only source must stay out of sky runtime: '+forbidden);
assert(scripts.every(s=>!/(?:^tools\/|^src\/.*(?:author|skypaint|volume-baker))/i.test(s)),'sky loads only frozen-asset runtime scripts');
const bundlePath=path.join(__dirname,'../dist/plume-sky.html');if(fs.existsSync(bundlePath)){const bundle=fs.readFileSync(bundlePath,'utf8');for(const forbidden of ['SkyPaintAuthor','FoundryVolumeBaker','CloudSim','cloudOpticsPassFS','ATMOSPHERE_LUT','sampler3D'])assert(!bundle.includes(forbidden),'standalone sky excludes author-only code: '+forbidden);}
console.log('Volume asset exchange, byte budgets, complete LOD appearance, runtime isolation PASS');
