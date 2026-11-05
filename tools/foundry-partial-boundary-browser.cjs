/* Production boundary regression against an isolated constant-footprint control. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),{legacyBoundaryShader}=require('./foundry-boundary-baseline.cjs');
function fixture(gap=false){
 const w=64,h=64,r=.72,views=(gap?[0]:[-85,-60,-30,0,20]).flatMap(pitch=>(gap?[-35,35]:[-35,0,35]).map(yaw=>({yaw,pitch}))),a={w,h,halfHeight:1,range:1,views,appearance:'baked-radiance-v1',radianceScale:4,data:[],radiance:[]};
 for(const view of views){const maps=Array.from({length:4},()=>new Uint8Array(w*h*4)),rad=Array.from({length:2},()=>new Uint8Array(w*h*4));
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){const px=(x+.5)/w*2-1,py=(y+.5)/h*2-1;if(px*px+py*py>=r*r||gap&&Math.abs(px)<.09)continue;const z=gap?0:Math.sqrt(r*r-px*px-py*py),q=Math.round((z*.5+.5)*65535),i=(y*w+x)*4;maps[0].set([q>>8,q&255,0,0],i);maps[1].set([128,128,255,255],i);rad[0].set([70,100,120,153],i);}
  a.data.push(maps);a.radiance.push(rad);
 }
 return a;
}
function filament(){
 const a=fixture(true),w=a.w,h=a.h,k=.8;
 a.data=[];a.radiance=[];
 for(const {yaw}of a.views){const c=Math.cos(yaw*Math.PI/180),s=Math.sin(yaw*Math.PI/180),maps=Array.from({length:4},()=>new Uint8Array(w*h*4)),rad=Array.from({length:2},()=>new Uint8Array(w*h*4)),project=x=>c*x-s*k*x*x;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){const u=(x+.5)/w*2-1,v=(y+.5)/h*2-1;if(v<0||v>.03125||u<project(-.65)||u>project(.65))continue;let lo=-.65,hi=.65;for(let j=0;j<40;j++){const m=(lo+hi)/2;if(project(m)<u)lo=m;else hi=m;}const worldX=(lo+hi)/2,z=s*worldX+c*k*worldX*worldX,q=Math.round((z*.5+.5)*65535),i=(y*w+x)*4;maps[0].set([q>>8,q&255,0,0],i);maps[1].set([128,128,255,255],i);rad[0].set([70,100,120,153],i);}
  a.data.push(maps);a.radiance.push(rad);
 }
 return a;
}
function serialize(a){return {...a,data:a.data.map(v=>v.map(m=>[...m])),radiance:a.radiance.map(v=>v.map(m=>[...m]))};}
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:420,height:360}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setContent('<canvas style="width:256px;height:256px"></canvas>');
  for(const f of ['src/foundry-shaders.js','src/foundry-renderer.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
  const metrics=await page.evaluate(({sphere,gap,filament,baseline})=>{
   const oldBoundary=(0,eval)('('+baseline+')'),canvas=document.querySelector('canvas'),W=256,H=256;
   function restore(a){return {...a,data:a.data.map(v=>v.map(m=>new Uint8Array(m))),radiance:a.radiance.map(v=>v.map(m=>new Uint8Array(m)))};}
   const original=FoundryShaders.cloud,settings={pixelSize:1,detailMode:'full',breathing:0,haze:0,shadow:0,exposure:1,skyColor:[.08,.2,.3]},packet={id:1,x:0,y:0,scale:1,distance:5,depthScale:.01,opacity:1};
   function capture(asset,candidate,yaw,pitch=0,size=256){
    canvas.style.width=size+'px';canvas.style.height=size+'px';FoundryShaders.cloud=candidate?original:oldBoundary(original);const R=new BakedCloudRenderer(canvas),a=restore(asset),gl=R.gl;
    // The control bypasses only depth padding during texture upload. Both
    // variants use the current renderer, angular weights and original maps.
    const upload=gl.texSubImage3D;let count=0;if(!candidate)gl.texSubImage3D=function(...args){const m=Math.floor(count/a.views.length),v=count++%a.views.length;if(m<4)args[args.length-1]=a.data[v][m];return upload.apply(gl,args);};
    try{R.load(a);}finally{gl.texSubImage3D=upload;}
    R.render([{...packet,yaw,pitch}],0,settings);const rgba=new Uint8Array(size*size*4),hdr=new Float32Array(size*size*4);gl.readPixels(0,0,size,size,gl.RGBA,gl.UNSIGNED_BYTE,rgba);gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT2);gl.readPixels(0,0,size,size,gl.RGBA,gl.FLOAT,hdr);const error=gl.getError();R.dispose();return {rgba,hdr,error};
   }
   function holes(frame){let holes=0,inside=0,outer=0;for(let y=0;y<H;y++)for(let x=0;x<W;x++){const px=(x+.5)/W*2-1,py=(y+.5)/H*2-1,r2=px*px+py*py,alpha=frame.hdr[(y*W+x)*4+3];if(r2<.57*.57){inside++;if(alpha<=0)holes++;}if(r2>.77*.77&&alpha>0)outer++;}return {holes,inside,outer};}
   const sphereCases=[];for(const [yaw,pitch]of [[-35,0],[-20,0],[-.01,0],[0,0],[.01,0],[20,0],[35,0],[-17.5,-72.5],[0,-85],[17.5,-45]]){const before=capture(sphere,false,yaw,pitch),after=capture(sphere,true,yaw,pitch);let changed=0;for(let i=0;i<before.rgba.length;i++)changed+=before.rgba[i]!==after.rgba[i];sphereCases.push({yaw,pitch,before:holes(before),after:holes(after),changed,error:before.error||after.error});}
   const native=[];for(const {yaw,pitch}of sphere.views){const before=capture(sphere,false,yaw,pitch,64),after=capture(sphere,true,yaw,pitch,64);let changed=0,maxError=0;for(let i=0;i<before.rgba.length;i++){changed+=before.rgba[i]!==after.rgba[i];maxError=Math.max(maxError,Math.abs(before.rgba[i]-after.rgba[i]));}native.push({yaw,pitch,changed,maxError});}
   const a=capture(gap,false,0),b=capture(gap,true,0);let gapBefore=0,gapAfter=0;for(let y=70;y<186;y++)for(let x=124;x<132;x++){gapBefore+=a.hdr[(y*W+x)*4+3]>0;gapAfter+=b.hdr[(y*W+x)*4+3]>0;}
   const filamentCases=[];for(const yaw of [-20,-10,-.01,0,.01,10,20]){const before=capture(filament,false,yaw),after=capture(filament,true,yaw),c=Math.cos(yaw*Math.PI/180),s=Math.sin(yaw*Math.PI/180),left=c*(-.55)-s*.8*.55*.55,right=c*.55-s*.8*.55*.55;let missingBefore=0,missingAfter=0,samples=0;for(let y=128;y<132;y++)for(let x=0;x<W;x++){const u=(x+.5)/W*2-1;if(u<left||u>right)continue;samples++;missingBefore+=before.hdr[(y*W+x)*4+3]<=0;missingAfter+=after.hdr[(y*W+x)*4+3]<=0;}filamentCases.push({yaw,missingBefore,missingAfter,samples,error:before.error||after.error});}
   FoundryShaders.cloud=original;return {sphereCases,native,filamentCases,gapBefore,gapAfter,error:a.error||b.error};
  },{sphere:serialize(fixture()),gap:serialize(fixture(true)),filament:serialize(filament()),baseline:legacyBoundaryShader.toString()});
  const output=path.join(os.tmpdir(),'foundry-partial-boundary-metrics.json');fs.writeFileSync(output,JSON.stringify(metrics,null,2));
  console.log('Partial-boundary candidate diagnostics',JSON.stringify({...metrics,output}));assert.deepEqual(errors,[]);assert.equal(metrics.error,0);assert(metrics.sphereCases.every(c=>c.error===0));assert.equal(metrics.gapAfter,0,'candidate must preserve the known open gap');assert(metrics.sphereCases.every(c=>c.after.outer===0),'candidate must not extend beyond analytic silhouette tolerance');assert(metrics.native.every(c=>c.maxError<=1),'native capture texel appearance stays exact to one framebuffer byte');assert(metrics.filamentCases.every(c=>c.missingAfter===0),'candidate must remove interior geometric cracks along the known continuous curved filament');assert(metrics.filamentCases.some(c=>c.missingBefore>0),'fixture must exercise the original partial-patch cracks');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
