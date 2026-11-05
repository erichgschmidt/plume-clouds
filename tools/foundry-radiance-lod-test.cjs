'use strict';
const assert=require('node:assert/strict'),A=require('../src/foundry-assets.js');
const make=()=>({w:32,h:32,halfHeight:1,range:1,views:[{yaw:0,pitch:0}],appearance:'baked-radiance-v1',radianceScale:4,data:[Array.from({length:4},()=>new Uint8Array(32*32*4))],radiance:[Array.from({length:2},()=>new Uint8Array(32*32*4))]});
const decode=b=>b[3]?[...b.slice(0,3)].map(q=>(q/255)**2*4).concat(b[3]/255):[0,0,0,0];
const over=(f,b)=>f.map((c,k)=>k===3?c+b[k]*(1-c):c+b[k]*(1-f[3]));
function put(a,x,y,layer,rgba,z=200){const i=(y*a.w+x)*4;a.data[0][layer*2].set([z,0,20,0],i);a.data[0][layer*2+1].set([128,128,255,255],i);a.radiance[0][layer].set(rgba,i);}
const a=make(),samples=[[128,0,0,255],[0,90,0,128],[0,0,64,64],[255,255,255,0]];
for(let k=0;k<4;k++)put(a,8+k%2,8+Math.floor(k/2),0,samples[k],120+k*20);
// RGB without geometric coverage must also contribute zero to an area filter.
const poison=(10*32+10)*4;a.radiance[0][0].set([255,255,255,255],poison);
A.buildLods(a,{minWidth:16});const coarse=a.lods[0],j=(4*16+4)*4,out=[...coarse.radiance[0][0].slice(j,j+4)],want=[64,45,32,112];
assert.deepEqual(out,want,'average LINEAR premultiplied energy, then sqrt encode; include uncovered/zero-alpha rays as zero');
assert.equal(coarse.data[0][0][j],180,'representative geometry remains the nearest complete source ray');
const mean=Array.from({length:4},(_,k)=>samples.reduce((s,b)=>s+decode(b)[k],0)/4),actual=decode(out);
for(let k=0;k<3;k++){const quantum=4*(2*out[k]+1)/(255*255);assert(Math.abs(actual[k]-mean[k])<=quantum/2+1e-12,'linear energy differs only by output byte quantization');}
assert(Math.abs(actual[3]-mean[3])<=.5/255,'area opacity differs only by output byte quantization');
assert.deepEqual([...coarse.radiance[0][0].slice((5*16+5)*4,(5*16+5)*4+4)],[0,0,0,0],'uncovered colored texels cannot create a halo');
assert.equal(coarse.data[0][1][(5*16+5)*4+3],0,'depth padding never closes a truly empty 2x2 block');
// Conditional fallback: averaging two independent interval maps would invent
// transmittance correlations. Preserve the complete selected ray instead.
const multi=make();
put(multi,8,8,0,[120,0,0,204],240);put(multi,8,8,1,[0,0,100,100],80);
put(multi,9,8,0,[0,100,0,50],200);put(multi,9,8,1,[100,0,0,200],50);
A.buildLods(multi,{minWidth:16});const l=multi.lods[0],front=[...l.radiance[0][0].slice(j,j+4)],back=[...l.radiance[0][1].slice(j,j+4)];
assert.deepEqual(front,[120,0,0,204]);assert.deepEqual(back,[0,0,100,100]);
assert.deepEqual(over(decode(front),decode(back)),over(decode([120,0,0,204]),decode([0,0,100,100])),'two-interval fallback preserves the selected full-ray optical composite');
console.log('Radiance LOD: linear area energy/opacity, uncovered zero rays, true empty holes, representative geometry, multi-interval coherence PASS');
// Keep a real density-integrated capture in the energy budget as well as the
// analytic blocks. Rebuild from its master; the saved LOD need not be current.
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../assets/skypaint-default.js'),'utf8'),context);
const captured=A.parse(context.window.SKYPAINT_DEFAULT);A.buildLods(captured,{minWidth:64});
function total(level,view){const sum=[0,0,0,0],map=level.radiance[view][0],coverage=level.data[view][1];for(let i=0;i<map.length;i+=4)if(coverage[i+3]>127){const ray=decode([...map.slice(i,i+4)]);for(let k=0;k<4;k++)sum[k]+=ray[k];}return sum;}
let maxAlpha=0,maxEnergy=0;
for(let v=0;v<captured.views.length;v++){
 const master=total(captured,v);
 for(const level of captured.lods){const coarse=total(level,v),area=(captured.w/level.w)**2,alpha=Math.abs(coarse[3]*area/master[3]-1),energy=Math.abs(coarse.slice(0,3).reduce((s,c)=>s+c,0)*area/master.slice(0,3).reduce((s,c)=>s+c,0)-1);maxAlpha=Math.max(maxAlpha,alpha);maxEnergy=Math.max(maxEnergy,energy);assert(alpha<.01,'captured integrated opacity remains within 1% across LODs');assert(energy<.01,'captured integrated linear radiance remains within 1% across LODs');}
}
console.log('Native radiance LOD energy budget PASS',JSON.stringify({views:captured.views.length,maxAlphaPercent:maxAlpha*100,maxEnergyPercent:maxEnergy*100}));
