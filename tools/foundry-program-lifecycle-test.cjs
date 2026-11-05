'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const context={window:{},Uint8Array,Number,Math};for(const file of ['foundry-shaders.js','foundry-renderer.js'])vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../src',file),'utf8'),context);
const R=context.window.BakedCloudRenderer,original=context.window.FoundryShaders.cloud;
function mock(){
 let id=0;const gl={NO_ERROR:0,programs:[],deleted:[],shaders:[],deletedTextures:[],getExtension:()=>({}),getParameter:()=>4096,createShader(type){const s={id:++id,type};this.shaders.push(s);return s;},shaderSource(s,source){s.source=source;},getShaderParameter(s){return !(this.failRadianceCompile&&s.source.includes('const int uRadiance=1;'));},getShaderInfoLog:()=> 'expected test compile failure',createProgram(){const p={id:++id,shaders:[]};this.programs.push(p);return p;},attachShader(p,s){p.shaders.push(s);},getProgramParameter:()=>true,deleteProgram(p){this.deleted.push(p.id);},createTexture(){return {id:++id};},deleteTexture(t){this.deletedTextures.push(t.id);},getError(){return this.failUpload?1285:0;}};
 for(const key of ['compileShader','linkProgram','deleteShader','disable','pixelStorei','bindTexture','texParameteri','texImage3D','texSubImage3D'])gl[key]=()=>{};
 const canvas={getContext:()=>gl,addEventListener(){},removeEventListener(){}};return {gl,canvas};
}
function asset(baked=false){return {w:16,h:16,halfHeight:1,range:1,views:[{yaw:0,pitch:0}],data:[Array.from({length:4},()=>new Uint8Array(16*16*4))],...(baked?{appearance:'baked-radiance-v1',radiance:[Array.from({length:2},()=>new Uint8Array(16*16*4))]}:{})};}
const {gl,canvas}=mock(),r=new R(canvas),legacy=asset(),baked=asset(true);
assert.equal(r.cloud,r.normalCloud,'initial mode uses the normal program');assert.equal(r.radianceCloud,null,'radiance linking is lazy');assert.equal(gl.programs.length,2);
r.load(legacy);const normal=r.cloud;context.window.FoundryShaders.cloud=original+'\n// later mutation';
r.load(baked);const radiance=r.cloud;assert.notEqual(radiance,normal);assert.equal(radiance,r.radianceCloud);assert.equal(gl.programs.length,3);
const specialized=radiance.p.shaders.find(s=>s.source.includes('const int uRadiance=1;'));assert(specialized);assert(!specialized.source.includes('later mutation'),'specialization derives from constructor-captured source');assert(!specialized.source.includes('uPalette,uHasLighting,uRadiance,uHasSecondInterval'),'uniform declaration is replaced, not duplicated');
r.load(legacy);assert.equal(r.cloud,normal);r.load(baked);assert.equal(r.cloud,radiance);assert.equal(gl.programs.length,3,'mode switching reuses both cached programs');
r.dispose();r.dispose();assert.equal(gl.deleted.length,3,'normal, radiance and post are each deleted once');assert.equal(new Set(gl.deleted).size,3);
context.window.FoundryShaders.cloud=original;
for(const failure of ['failRadianceCompile','failUpload']){
 const state=mock(),q=new R(state.canvas),old=asset();q.load(old);const active=q.cloud;state.gl[failure]=true;
 assert.throws(()=>q.load(asset(true)),/compile failure|upload failed/i);assert.equal(q.asset,old,'failed specialized load preserves previous asset');assert.equal(q.cloud,active);assert.equal(q.radianceCloud,null,'failed attempt never poisons the program cache');
 state.gl[failure]=false;q.load(asset(true));assert.notEqual(q.cloud,active,'retry after failure can compile and upload');q.dispose();assert.equal(new Set(state.gl.deleted).size,state.gl.deleted.length,'failed and active programs are never deleted twice');
}
console.log('Foundry shader programs: lazy specialization, captured sources, cached mode switches, atomic failure/retry, idempotent disposal PASS');
