'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const context={window:{},Uint8Array,Number,Math};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../src/foundry-renderer.js'),'utf8'),context);
function padLevel(level,baked=true){
 const R=context.window.BakedCloudRenderer,r=Object.create(R.prototype),uploaded=[];r.textures=[];r.lodState=new Map();r.stats={};r.normalCloud={p:{}};r.radianceCloud={p:{}};
 r.gl={getParameter:()=>4096,getError:()=>0,NO_ERROR:0,createTexture:()=>({}),texSubImage3D(...args){uploaded.push(args[args.length-1]);}};
 for(const key of ['pixelStorei','bindTexture','texParameteri','texImage3D','deleteTexture'])r.gl[key]=()=>{};
 r.load({...level,halfHeight:1,range:1,views:[{yaw:0,pitch:0}],...(baked?{appearance:'baked-radiance-v1',radiance:[[new Uint8Array(level.w*level.h*4),new Uint8Array(level.w*level.h*4)]]}:{})});
 return {...level,data:[uploaded.slice(0,4)]};
}
const source={w:5,h:5,data:[Array.from({length:4},()=>new Uint8Array(5*5*4))]},i=(2*5+2)*4;
source.data[0][0].set([150,10,90,25],i);source.data[0][1].set([128,128,255,255],i);
source.data[0][2].set([100,20,80,15],i);source.data[0][3].set([128,128,255,255],i);
const padded=padLevel(source);
for(const layer of [0,2]){
 assert.notEqual(padded.data[0][layer],source.data[0][layer],'radiance upload copies depth rather than mutating capture');
 assert.equal(padded.data[0][layer+1],source.data[0][layer+1],'coverage and normals remain exact original maps');
 for(let y=1;y<=3;y++)for(let x=1;x<=3;x++)assert.deepEqual([...padded.data[0][layer].slice((y*5+x)*4,(y*5+x)*4+4)],[...source.data[0][layer].slice(i,i+4)],'nearest depth extends one texel including diagonal patch corners');
 assert.deepEqual([...padded.data[0][layer].slice(0,4)],[0,0,0,0],'padding never propagates beyond one texel');
 assert.deepEqual([...source.data[0][layer].slice((2*5+1)*4,(2*5+1)*4+4)],[0,0,0,0],'original empty depth is unmodified');
}
const edges={w:3,h:1,data:[Array.from({length:4},()=>new Uint8Array(12))]};edges.data[0][0].set([200,0,100,0],0);edges.data[0][1][3]=255;edges.data[0][0].set([100,0,50,0],8);edges.data[0][1][11]=255;
const p=padLevel(edges);assert.deepEqual([...p.data[0][0].slice(0,4)],[200,0,100,0]);assert.deepEqual([...p.data[0][0].slice(8,12)],[100,0,50,0]);assert([100,200].includes(p.data[0][0][4]),'tie selects one complete packed depth ray, not averaged bytes');
assert.equal(padLevel(source,false).data[0][0],source.data[0][0],'legacy uploads retain the original depth without padding');
console.log('Partial-boundary production upload: exact coverage, source immutability, one-texel reach, packed depth preservation, legacy unchanged PASS');
