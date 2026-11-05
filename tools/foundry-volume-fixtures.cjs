/* Independent Beer-Lambert fixtures, intentionally independent of author/baker code. */
'use strict';
const SCALE=4;
function encode(rgb,alpha){return [...rgb.map(c=>Math.round(Math.sqrt(Math.max(0,Math.min(SCALE,c))/SCALE)*255)),Math.round(alpha*255)];}
// Alpha zero is an empty ray even when quantization or imported bytes retain RGB.
function decode(bytes){if(bytes[3]===0)return [0,0,0,0];return [...[0,1,2].map(i=>(bytes[i]/255)**2*SCALE),bytes[3]/255];}
function over(front,back){return [...[0,1,2].map(i=>front[i]+back[i]*(1-front[3])),front[3]+back[3]*(1-front[3])];}
function pack(z){const q=Math.round((z*.5+.5)*65535);return [q>>8,q&255];}
function maps(w,h,n){return Array.from({length:n},()=>new Uint8Array(w*h*4));}
function slab({w=32,h=w,views=[{yaw:0,pitch:0}],layers=[{front:.2,back:-.2,sigma:1,color:[.8,.3,.1]}],hole=false,poison=false}={}){
 const data=views.map(()=>maps(w,h,4)),radiance=views.map(()=>maps(w,h,2));
 for(let v=0;v<views.length;v++)for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  const i=(y*w+x)*4,empty=x<w/8||y<h/8||x>=w*7/8||y>=h*7/8||(hole&&Math.hypot(x+.5-w/2,y+.5-h/2)<w/9);
  for(let l=0;l<2;l++){
   const s=layers[l];data[v][l*2].set([...pack(0),...pack(0)],i);
   if(!s||empty){if(poison)radiance[v][l].set([255,0,255,0],i);continue;}
   const a=1-Math.exp(-s.sigma*(s.front-s.back));
   data[v][l*2].set([...pack(s.front),...pack(s.back)],i);data[v][l*2+1].set([128,128,255,255],i);
   radiance[v][l].set(encode(s.color.map(c=>c*a),a),i);
  }
 }
 return {name:'Analytic homogeneous slab',appearance:'baked-radiance-v1',radianceScale:SCALE,w,h,halfHeight:1,range:1,views,data,radiance};
}
// Test-only compatibility view: old renderers receive the identical frozen
// optical bytes without optional v4 response maps or their metadata.
function frozenOpticalAsset(asset){
 const strip=level=>{const out={...level};delete out.relighting;delete out.relightEncoding;delete out.relightSettings;if(out.version===4)out.version=3;return out;};
 const out=strip(asset);if(out.appearance==='baked-radiance-v1')out.version=3;
 if(asset.lods)out.lods=asset.lods.map(strip);return out;
}
module.exports={SCALE,encode,decode,over,slab,frozenOpticalAsset};
