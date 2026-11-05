/* Real v4 light changes: coverage/geometry invariance, halos and paired cost. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),root=path.join(__dirname,'..');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:1300,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setContent('<style>body{margin:0;background:#17232b;color:white;font:14px system-ui}#c{width:320px;height:240px}#sheet{display:grid;grid-template-columns:repeat(4,320px);gap:4px}canvas{display:block;image-rendering:pixelated}</style><canvas id="c"></canvas><div id="sheet"></div>');
  for(const f of ['src/foundry-assets.js','assets/skypaint-default.js','src/foundry-shaders.js','src/foundry-renderer.js','src/foundry-scene.js'])await page.addScriptTag({content:fs.readFileSync(path.join(root,f),'utf8')});
  const metrics=await page.evaluate(()=>{
   const R=new BakedCloudRenderer(document.querySelector('#c')),asset=FoundryAssets.parse(SKYPAINT_DEFAULT);R.load(asset);const W=320,H=240,N=W*H,gl=R.gl;
   const base={pixelSize:1,detailMode:'full',breathing:0,haze:0,shadow:0,exposure:1.25,skyColor:[.09,.2,.3]},packet={id:1,x:0,y:0,scale:1.15,yaw:0,pitch:-45,cameraPitch:0,distance:6,opacity:1,phase:0};
   const day={sunAz:-64,sunAlt:37},dusk={sunAz:70,sunAlt:5,sunIntensity:1.4,sunColor:[1,.25,.06],ambientIntensity:.14,ambientColor:[.18,.12,.3],scatterFill:.12},night={sunIntensity:0,lightAz:-90,lightAlt:45,lightIntensity:.08,lightColor:[.25,.4,1],ambientIntensity:.025,ambientColor:[.1,.15,.4],scatterFill:0};
   function frame(list,extra={}){R.render(list,0,{...base,...extra});const rgb=new Uint8Array(N*4),hdr=new Float32Array(N*4),surface=new Float32Array(N*4);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,rgb);gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT2);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,hdr);gl.readBuffer(gl.COLOR_ATTACHMENT1);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,surface);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return {rgb,hdr,surface};}
   function tile(title,f){const box=document.createElement('div'),label=document.createElement('div'),c=document.createElement('canvas');label.textContent=title;c.width=W;c.height=H;const ctx=c.getContext('2d'),im=ctx.createImageData(W,H);for(let y=0;y<H;y++)im.data.set(f.rgb.slice(y*W*4,(y+1)*W*4),(H-1-y)*W*4);ctx.putImageData(im,0,0);box.append(label,c);document.querySelector('#sheet').append(box);}
   const empty=frame([]),cases=[];let geometryChanges=0,haloLeaks=0,nonfinite=0;
   for(let step=0;step<36;step++){
    const p={...packet,yaw:17.5*Math.sin(step*.2),pitch:-60-step*25/35,cameraPitch:60+step*20/35},off=frame([p],{relighting:false}),lighting=step%3===0?day:step%3===1?dusk:night,on=frame([p],lighting);let changed=0;
    for(let i=0;i<N;i++){geometryChanges+=off.hdr[i*4+3]!==on.hdr[i*4+3]||off.surface[i*4+2]!==on.surface[i*4+2]||off.surface[i*4+3]!==on.surface[i*4+3];for(let k=0;k<4;k++){nonfinite+=!Number.isFinite(on.hdr[i*4+k]);changed+=off.rgb[i*4+k]!==on.rgb[i*4+k];}if(on.hdr[i*4+3]===0){const d=Math.max(...[0,1,2].map(k=>Math.abs(on.rgb[i*4+k]-empty.rgb[i*4+k])));if(d>1)haloLeaks++;}}
    cases.push({step,changed});
   }
   for(const [yaw,pitch]of [[-17.5,-15],[17.5,-45],[-17.5,-72.5]]){const p={...packet,yaw,pitch};tile(`Frozen ${yaw}/${pitch}`,frame([p],{relighting:false}));tile(`Day ${yaw}/${pitch}`,frame([p],day));tile(`Dusk ${yaw}/${pitch}`,frame([p],dusk));tile(`Night / blue fill ${yaw}/${pitch}`,frame([p],night));}
   const scene=new FoundryScene({seed:1,settings:{count:12,sway:0}});scene.aspect=W/H;scene.assetAspect=asset.w/asset.h;scene.assetBound=Math.hypot(scene.assetAspect,1,asset.range/asset.halfHeight)+.28;
   const stress=Array.from({length:12},(_,i)=>({...packet,id:100+i,x:(i%4-1.5)*.45,y:(Math.floor(i/4)-1)*.4,scale:.7,yaw:(i%3-1)*17.5,pitch:-45,distance:4+i*.6})),sync=new Uint8Array(4),timing=[];
   function timed(list,enabled,detailMode){const start=performance.now();R.render(list,0,{...base,...day,relighting:enabled,detailMode});gl.finish();gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,sync);return performance.now()-start;}
   for(const [name,list,detail]of [['seeded',scene.project(W/H),'auto'],['stress12',stress,'full']]){for(let i=0;i<3;i++){timed(list,false,detail);timed(list,true,detail);}const paired=[];for(let i=0;i<10;i++){if(i%2)paired.push({on:timed(list,true,detail),off:timed(list,false,detail)});else paired.push({off:timed(list,false,detail),on:timed(list,true,detail)});}timing.push({name,drawn:R.stats.drawn,paired});}
   const error=gl.getError();R.dispose();document.querySelector('#c').remove();return{views:asset.views.length,version:asset.version,cases,geometryChanges,haloLeaks,nonfinite,timing,error};
  });
  const median=a=>{const v=[...a].sort((a,b)=>a-b);return(v[Math.floor((v.length-1)/2)]+v[Math.ceil((v.length-1)/2)])/2;};for(const row of metrics.timing){row.offMedian=median(row.paired.map(p=>p.off));row.onMedian=median(row.paired.map(p=>p.on));row.ratio=row.onMedian/row.offMedian;}
  const output=path.join(os.tmpdir(),'foundry-relighting-real-metrics.json'),sheet=path.join(os.tmpdir(),'foundry-relighting-real-sheet.png');fs.writeFileSync(output,JSON.stringify(metrics,null,2));await page.screenshot({path:sheet,fullPage:true});console.log('Real v4 relighting geometry/halo/performance audit',JSON.stringify({...metrics,cases:metrics.cases.length,output,sheet}));assert.equal(metrics.version,4);assert.equal(metrics.geometryChanges,0);assert.equal(metrics.haloLeaks,0);assert.equal(metrics.nonfinite,0);assert.equal(metrics.error,0);assert.deepEqual(errors,[]);
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
