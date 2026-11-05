/* Real SkyPaint visual/LOD diagnostics. Unknown physical holes are never asserted away. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),Assets=require('../src/foundry-assets.js');
const label=process.env.QUALITY_LABEL?'-'+process.env.QUALITY_LABEL.replace(/[^a-z0-9-]/gi,''):'';
const root=path.resolve(__dirname,'..'),input=path.resolve(process.argv[2]||path.join(root,'assets/skypaint-default.js'));
const context={window:{}};vm.runInNewContext(fs.readFileSync(input,'utf8'),context);
const asset=Assets.parse(JSON.stringify(context.window.SKYPAINT_DEFAULT));
const stats=(l,v)=>{let alpha=0,energy=0,covered=0;for(let i=0;i<l.w*l.h*4;i+=4)for(const r of l.radiance[v]){alpha+=r[i+3]/255;if(r[i+3]){energy+=(r[i]**2+r[i+1]**2+r[i+2]**2)*asset.radianceScale/255**2;covered++;}}return{alpha:alpha/l.w/l.h,energy:energy/l.w/l.h,covered:covered/l.w/l.h};};
const lodSource=asset.views.flatMap((view,v)=>asset.lods.map(l=>{const master=stats(asset,v),coarse=stats(l,v);return{...view,width:l.w,alphaRatio:coarse.alpha/master.alpha,energyRatio:coarse.energy/master.energy,coverageRatio:coarse.covered/master.covered};}));
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:1320,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setContent('<style>body{margin:0;background:#14202b;color:#e7edf0;font:13px system-ui}#c{width:320px;height:240px}#sheet{display:grid;grid-template-columns:repeat(4,320px);gap:8px;padding:8px;width:max-content}.tile{width:320px}.title{height:38px}canvas{image-rendering:pixelated;display:block}</style><canvas id="c"></canvas><div id="sheet"></div>');
  for(const f of ['src/foundry-assets.js','src/foundry-shaders.js','src/foundry-renderer.js','src/foundry-scene.js'])await page.addScriptTag({content:fs.readFileSync(path.join(root,f),'utf8')});
  console.log('Snapshot loaded; input bytes frozen in Node memory:',input);
  const metrics=await page.evaluate(record=>{
   const R=new BakedCloudRenderer(document.querySelector('#c'));R.load(FoundryAssets.parse(record));const W=320,H=240,N=W*H;
   const settings={pixelSize:1,pixelSnap:false,detailMode:'full',breathing:0,shadow:0,haze:0,relighting:false,exposure:1.25,skyColor:[.09,.2,.3]};
   const packet={id:1,x:0,y:0,scale:1.25,yaw:0,pitch:0,distance:6,opacity:1,phase:0};
   const gl=R.gl;
   function frame(p={},s={},list=null){R.render(list||[{...packet,...p}],0,{...settings,...s});const rgba=new Uint8Array(N*4),hdr=new Float32Array(N*4);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,rgba);gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT2);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,hdr);gl.bindFramebuffer(gl.FRAMEBUFFER,null);let alpha=0,energy=0,covered=0;const mask=new Uint8Array(N);for(let i=0;i<N;i++){const a=hdr[i*4+3];alpha+=a;energy+=hdr[i*4]+hdr[i*4+1]+hdr[i*4+2];mask[i]=a>.01?1:0;covered+=mask[i];}return{rgba,hdr,mask,alpha,energy,covered,lod:R.lodState.get(p.id||packet.id),drawn:R.stats.drawn,culled:R.stats.culled};}
   function holes(mask){const seen=new Uint8Array(N),q=new Int32Array(N);let head=0,tail=0;function add(i){if(!mask[i]&&!seen[i]){seen[i]=1;q[tail++]=i;}}for(let x=0;x<W;x++){add(x);add((H-1)*W+x);}for(let y=0;y<H;y++){add(y*W);add(y*W+W-1);}while(head<tail){const i=q[head++],x=i%W,y=(i/W)|0;if(x)add(i-1);if(x<W-1)add(i+1);if(y)add(i-W);if(y<H-1)add(i+W);}let enclosed=0;for(let i=0;i<N;i++)enclosed+=!mask[i]&&!seen[i];return enclosed;}
   function diff(a,b){let coverageFlips=0,colorChanged=0,maxColorStep=0,alphaL1=0;for(let i=0;i<N;i++){coverageFlips+=a.mask[i]!==b.mask[i];alphaL1+=Math.abs(a.hdr[i*4+3]-b.hdr[i*4+3]);const d=Math.max(...[0,1,2].map(k=>Math.abs(a.rgba[i*4+k]-b.rgba[i*4+k])));if(d>8)colorChanged++;maxColorStep=Math.max(maxColorStep,d);}return{coverageFlips,coverageFraction:coverageFlips/Math.max(a.covered,b.covered,1),colorChanged,colorFraction:colorChanged/Math.max(a.covered,b.covered,1),maxColorStep,alphaL1Fraction:alphaL1/Math.max(a.alpha,b.alpha,1),alphaRatio:b.alpha/Math.max(a.alpha,1e-9),energyRatio:b.energy/Math.max(a.energy,1e-9)};}
   function tile(title,f,zoom=1){const box=document.createElement('div');box.className='tile';const label=document.createElement('div');label.className='title';label.textContent=title;const c=document.createElement('canvas');c.width=W;c.height=H;box.append(label,c);document.querySelector('#sheet').append(box);const ctx=c.getContext('2d'),im=ctx.createImageData(W,H);for(let y=0;y<H;y++)im.data.set(f.rgba.slice(y*W*4,(y+1)*W*4),(H-1-y)*W*4);ctx.putImageData(im,0,0);if(zoom>1){const source=document.createElement('canvas');source.width=W;source.height=H;source.getContext('2d').drawImage(c,0,0);ctx.imageSmoothingEnabled=false;ctx.drawImage(source,W/2-W/(zoom*2),H/2-H/(zoom*2),W/zoom,H/zoom,0,0,W,H);}}
   const captures=record.views.map(v=>({...v,kind:'capture'}));
   const midpoints=[-72.5,-45,-15,10].flatMap(pitch=>[-17.5,17.5].map(yaw=>({yaw,pitch,kind:'midpoint'})));
   const transitions=[];
   for(const v of [...captures,...midpoints]){
    const a=frame({yaw:v.yaw-.01,pitch:v.pitch-.01}),b=frame({yaw:v.yaw+.01,pitch:v.pitch+.01});
    transitions.push({...v,...diff(a,b),covered:b.covered,enclosedHoles:holes(b.mask),enclosedHolesBefore:holes(a.mask)});
    tile(`${v.kind} yaw ${v.yaw} pitch ${v.pitch}; holes ${holes(b.mask)}`,b);
   }
   const overhead=[];
   for(const [yaw,pitch,cameraPitch]of [[-17.5,-72.5,80],[0,-85,80],[17.5,-72.5,80],[0,-60,60]]){
    const a=frame({yaw,pitch,cameraPitch,x:-.001}),b=frame({yaw,pitch,cameraPitch,x:.001});overhead.push({yaw,pitch,cameraPitch,...diff(a,b),holes:holes(b.mask)});tile(`Overhead ${yaw}/${pitch}; camera tilt ${cameraPitch}`,b);
   }
   // Validate the actual HDR-over-background operation at thin colored edges.
   const linear=c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4,srgb=c=>c<=.0031308?12.92*c:1.055*c**(1/2.4)-.055,halos=[];
   for(const sky of [[.015,.025,.04],[.92,.9,.85]])for(const [yaw,pitch]of [[0,0],[-17.5,-45],[17.5,-72.5]]){
    const f=frame({yaw,pitch},{skyColor:sky});let emptyLeaks=0,thin=0,maxTransferError=0,foreignColors=0;
    for(let i=0;i<N;i++){const a=f.hdr[i*4+3];if(a===0){if([0,1,2].some(k=>Math.abs(f.rgba[i*4+k]-Math.round(sky[k]*255))>1))emptyLeaks++;continue;}if(a<.15){thin++;for(let k=0;k<3;k++){const expected=srgb(1-Math.exp(-1.25*f.hdr[i*4+k]+Math.log(1-linear(sky[k]))*(1-a)))*255,error=Math.abs(expected-f.rgba[i*4+k]);maxTransferError=Math.max(maxTransferError,error);if(error>2)foreignColors++;}}}
    halos.push({sky,yaw,pitch,emptyLeaks,thin,maxTransferError,foreignColors});tile(`Edge ${sky[0]<.1?'dark':'light'} background ${yaw}/${pitch}`,f);
   }
   const lod=[];const levels=R.levels.slice();
   function forced(index,p){R.levels=[levels[index]];R.lodState.clear();const f=frame(p,{detailMode:'full'});R.levels=levels;R.lodState.clear();return f;}
   for(const [yaw,pitch]of [[0,0],[-17.5,-45],[17.5,-72.5]])for(const [direction,height]of [['down',levels[1].h*.84],['up',levels[1].h*1.12]]){
    const scale=height/H,full=forced(0,{yaw,pitch,scale}),coarse=forced(1,{yaw,pitch,scale});R.lodState.set(1,direction==='down'?0:1);
    const before=frame({yaw,pitch,scale:(height+(direction==='down'?.01:-.01))/H},{detailMode:'auto'}),after=frame({yaw,pitch,scale:(height+(direction==='down'?-.01:.01))/H},{detailMode:'auto'});
    lod.push({yaw,pitch,direction,projectedHeight:height,from:before.lod,to:after.lod,forced:diff(full,coarse),automatic:diff(before,after)});
    tile(`LOD ${direction} ${yaw}/${pitch}: master, 5x`,full,5);tile(`LOD ${direction} ${yaw}/${pitch}: coarse, 5x`,coarse,5);
   }
   const scene=new FoundryScene({seed:1,settings:{count:12,sway:0}});scene.aspect=W/H;scene.assetAspect=record.w/record.h;scene.assetBound=Math.hypot(record.w/record.h,1,record.range/record.halfHeight)+.28;
   const timing=[],near=[];const sync=new Uint8Array(4);
   for(const cameraPitch of [0,80]){scene.settings.lookElevation=cameraPitch;const list=scene.project(W/H);for(let i=0;i<2;i++)R.render(list,0,{...settings,detailMode:'auto',cameraPitch});gl.finish();const samples=[];for(let i=0;i<8;i++){const t=performance.now();R.render(list,i*.01,{...settings,detailMode:'auto',cameraPitch});gl.finish();gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,sync);samples.push(performance.now()-t);}timing.push({kind:'seeded12',cameraPitch,instances:list.length,drawn:R.stats.drawn,ms:samples});tile(`Seeded 12 clouds, tilt ${cameraPitch}`,frame({}, {...settings,detailMode:'auto',cameraPitch},list));}
   for(const distance of [4,2,1,.6,.4,.2]){scene.settings.lookElevation=0;const c={id:999,x:0,y:0,z:distance,radius:1,born:-10,phase:0};const p=scene.packet(c);near.push({distance,scale:p.scale,opacity:p.opacity,visible:scene.visible(p)});}
   const stress=Array.from({length:12},(_,i)=>({...packet,id:100+i,x:(i%4-1.5)*.45,y:(Math.floor(i/4)-1)*.4,scale:.7,yaw:(i%3-1)*17.5,pitch:-45,distance:4+i*.6}));
   for(let i=0;i<2;i++)R.render(stress,0,settings);gl.finish();const samples=[];for(let i=0;i<6;i++){const t=performance.now();R.render(stress,0,settings);gl.finish();gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,sync);samples.push(performance.now()-t);}timing.push({kind:'overlapping12stress',instances:12,drawn:R.stats.drawn,ms:samples});
   // Test-only control removes exclusively the blended HDR pass, retaining the
   // nearest metadata and post passes. No implementation sources are changed.
   const originalDraw=gl.drawArrays;gl.drawArrays=function(...args){if(!gl.isEnabled(gl.BLEND))return originalDraw.apply(gl,args);};const control=[];try{for(let i=0;i<2;i++)R.render(stress,0,settings);gl.finish();for(let i=0;i<6;i++){const t=performance.now();R.render(stress,0,settings);gl.finish();gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,sync);control.push(performance.now()-t);}}finally{gl.drawArrays=originalDraw;}timing.push({kind:'overlapping12metadataOnlyControl',instances:12,ms:control,diagnostic:'Test skips HDR blend draws only; image intentionally incomplete'});
   tile('12 overlapping clouds, full detail stress',frame({},settings,stress));
   const error=gl.getError();R.dispose();document.querySelector('#c').remove();return{transitions,overhead,halos,lod,timing,near,error};
  },JSON.parse(Assets.stringify(asset)));
  const output=path.join(os.tmpdir(),'foundry-volume-quality'+label+'-metrics.json'),sheet=path.join(os.tmpdir(),'foundry-volume-quality'+label+'-sheet.png');
  fs.writeFileSync(output,JSON.stringify({input,lodSource,...metrics},null,2));await page.screenshot({path:sheet,fullPage:true});
  const max=(list,key)=>Math.max(...list.map(r=>r[key]));
  console.log('Real volume quality diagnostics',JSON.stringify({transitions:metrics.transitions.length,maxTinyAngleCoverage:max(metrics.transitions,'coverageFraction'),maxTinyAngleColor:max(metrics.transitions,'colorFraction'),maxEnclosedHoles:max(metrics.transitions,'enclosedHoles'),sourceLODAlphaRatio:[Math.min(...lodSource.map(r=>r.alphaRatio)),max(lodSource,'alphaRatio')],sourceLODEnergyRatio:[Math.min(...lodSource.map(r=>r.energyRatio)),max(lodSource,'energyRatio')],haloLeaks:metrics.halos.map(r=>r.emptyLeaks),maxEdgeTransferError:max(metrics.halos,'maxTransferError'),lod:metrics.lod,timing:metrics.timing,near:metrics.near,output,sheet}));
  assert.equal(metrics.error,0);assert.deepEqual(errors,[]);for(const h of metrics.halos){assert.equal(h.emptyLeaks,0);assert.equal(h.foreignColors,0);}
  assert(metrics.near.filter(p=>!p.visible).length>0,'near-view guard hides unrepresentable interior approaches');
  console.log('Real quality diagnostics complete; unknown holes/LOD changes require visual review, no invented geometry oracle.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
