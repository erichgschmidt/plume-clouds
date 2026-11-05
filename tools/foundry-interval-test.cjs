'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const context={window:{},Uint8Array,Number,Math};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../src/foundry-renderer.js'),'utf8'),context);
const Renderer=context.window.BakedCloudRenderer;
const level=w=>({w,h:w,data:[Array.from({length:4},()=>new Uint8Array(w*w*4))],radiance:[Array.from({length:2},()=>new Uint8Array(w*w*4))]});
const make=()=>({...level(32),halfHeight:1,range:1,views:[{yaw:0,pitch:0}],appearance:'baked-radiance-v1',radianceScale:4,lods:[level(16)]});
function load(a){
 const r=Object.create(Renderer.prototype);r.textures=[];r.lodState=new Map();r.stats={};r.normalCloud={p:{}};r.radianceCloud={p:{}};
 // Real load/texture dispatch, with GPU calls replaced by inert allocations.
 // This verifies classification of each uploaded level, not just a helper.
 r.gl={getParameter:()=>4096,getError:()=>0,NO_ERROR:0,createTexture:()=>({})};
 for(const key of ['pixelStorei','bindTexture','texParameteri','texImage3D','texSubImage3D','deleteTexture'])r.gl[key]=()=>{};
 r.load(a);return r;
}
const a=make();a.data[0][1].set([128,128,255,255]);a.radiance[0][0].set([100,70,40,180]);
assert.equal(load(a).levels[0].hasSecondInterval,false,'single interval radiance skips absent second capture');
a.data[0][3][3]=255;a.radiance[0][1].set([255,20,255,0]);
assert.equal(load(a).levels[0].hasSecondInterval,false,'zero-alpha second RGB and geometry do not require tracing');
a.radiance[0][1][3]=1;a.data[0][3][3]=0;
assert.equal(load(a).levels[0].hasSecondInterval,false,'radiance outside geometry coverage cannot produce a second hit');
a.data[0][3][3]=255;
assert.equal(load(a).levels[0].hasSecondInterval,true,'even one byte of real second opacity must remain visible');
const r=load(a);assert.equal(r.levels[1].hasSecondInterval,false,'classification belongs to the uploaded LOD, not the master');
const other=make();other.views.push({yaw:20,pitch:0});other.data.push(level(32).data[0]);other.radiance.push(level(32).radiance[0]);other.lods=[];other.data[1][3][3]=255;other.radiance[1][1][3]=128;
assert.equal(load(other).levels[0].hasSecondInterval,true,'inspect every view before skipping second intervals');
const legacy=make();delete legacy.appearance;delete legacy.radiance;delete legacy.radianceScale;delete legacy.lods[0].radiance;
assert.equal(load(legacy).levels[0].hasSecondInterval,true,'legacy normal maps always keep both geometry intervals');
console.log('Radiance interval dispatch: per-level/view coverage, true two-interval rays, zero-opacity and uncovered-map skip PASS');
