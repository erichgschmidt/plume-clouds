// Production tree checks, with GPU uploads stubbed.
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const env={window:{},Math,Float32Array,performance};vm.createContext(env);

vm.runInContext(fs.readFileSync(path.join(__dirname,'../src/puffs.js'),'utf8'),env);
const R=env.window.PuffRenderer,M=R.MAX_SPH;
function build(options){
  const r=Object.create(R.prototype);r._w=512;r._h=384;r._sphData=new Float32Array(M*32);
  r.gl={activeTexture(){},bindTexture(){},texSubImage2D(){}};r._bin=()=>{};
  const sim={time:3,blobCount:1,blobs:new Float32Array([.5,.4,.15,17]),aux:new Float32Array([0,.5,0,1]),spin:new Float32Array([0,0,1,0]),detail:new Float32Array([1]),refRadius:.1};
  r._tree([{sim,look:Object.assign({children:4,levels:2,life:0,shapeVar:1,angular:.4,bulge:1},options)}],3);
  const rows=[];for(let i=0;i<r.count;i++){let q=[];for(let j=0;j<8;j++)q.push(...r._sphData.slice((j*M+i)*4,(j*M+i)*4+4));rows.push(q);}return rows;
}
const baseline=build({}),defaults=build({childShape:1,shapeFollow:0,cohesion:0});
assert.deepEqual(baseline,defaults,'neutral new controls preserve packed tree');
assert(baseline.length>2,'fixture has live children');
const round=build({childShape:0});assert.deepEqual(round[0],baseline[0],'child controls preserve parent');
for(const q of round.slice(1)){assert.equal(q[22],0,'child ellipse removed');assert.equal(q[23],1,'child footprint is unwarped');assert.equal(q[28],0,'child angular profile removed');}
const inherited=build({shapeFollow:1});
for(const q of inherited.slice(1))for(const k of [20,21,22,24,25,26,27,28,29])assert.equal(q[k],inherited[0][k],'child inherits parent deformation coefficient '+k);
assert(build({childShape:.4}).slice(1).some((q,i)=>Math.abs(q[22]-baseline[i+1][22])>.001),'partial child deformation acts');
console.log('Tree deformation: neutral compatibility, round children, parent preservation, inheritance PASS');
const filled=build({contourFilter:1,filterReach:.4}),carved=build({contourFilter:-1,filterReach:.4});
assert(filled[0][31]>0&&carved[0][31]<0,'signed contour filter reaches GPU upload');
assert.equal(build({shapeVar:0,angular:0,contourFilter:1})[0][23],1,'filter preserves an undeformed circle');
for(const q of build({childShape:0,contourFilter:1}).slice(1))assert.equal(q[31],0,'round children bypass contour filter');
console.log('Contour filter: signed upload and neutral circle/child behavior PASS');
// Old saved absorption controls must be inert even when their values are nonzero.
const retired=build({cohesion:1,bondMerge:1,bondAgitation:1,bondTempo:2,bondLife:12,cohesionYield:1,releaseSpeed:1});
assert.deepEqual(retired,baseline,'retired absorption keys do not alter uploaded shapes');
const r=Object.create(R.prototype);r._w=512;r._h=384;r._sphData=new Float32Array(M*32);
r.gl={activeTexture(){},bindTexture(){},texSubImage2D(){}};r._bin=()=>{};
const s={time:0,seed:1,blobCount:2,baseStart:2,blobs:new Float32Array([.4,.4,.15,17,.6,.4,.08,29]),aux:new Float32Array([0,.5,0,1,0,.5,0,1]),spin:new Float32Array([0,0,1,0,0,0,1,0]),detail:new Float32Array([1,1]),refRadius:.1};
for(let t=0;t<=4;t+=.05){s.time=t;r._tree([{sim:s,look:{children:0,shapeVar:0,cohesion:1,bondMerge:1,bondAgitation:1}}],t);}
assert.equal(r.count,2,'both natural roots remain');
for(let i=0;i<2;i++)for(let k=0;k<3;k++)assert.equal(r._sphData[i*4+k],s.blobs[i*4+k],'natural root poses/radii remain unchanged');
assert.equal(r._bondStates,undefined,'no absorption lifecycle allocated');
console.log('Retired absorption: saved keys inert, natural roots preserved, no lifecycle allocation PASS');