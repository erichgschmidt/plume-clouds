/* Independent analytic captures: no author/baker code in the coverage oracle. */
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const baseline=process.argv.includes('--baseline');
const nearestDepth=process.argv.includes('--nearest-depth');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:360,height:360}});
  await page.setContent('<canvas style="width:320px;height:320px"></canvas>');
  for(const f of ['src/foundry-shaders.js','src/foundry-renderer.js','src/foundry-assets.js','assets/foundry-default.js']){
   let content=baseline&&/foundry-(shaders|renderer)\.js/.test(f)?require('node:child_process').execFileSync('git',['show','HEAD:'+f],{cwd:path.join(__dirname,'..'),encoding:'utf8',maxBuffer:16*1024*1024}):fs.readFileSync(path.join(__dirname,'..',f),'utf8');
   if(nearestDepth&&f==='src/foundry-shaders.js'){
    const begin=content.indexOf('  for(int i=0;i<4;i++)for(int j=i+1;'),end=content.indexOf('  h.z=resolvedDepth;',begin);
    assert.ok(begin>=0&&end>begin,'Nearest-depth control must replace the actual handoff block');content=content.slice(0,begin)+content.slice(end+'  h.z=resolvedDepth;'.length);
   }
   await page.addScriptTag({content});
  }
  const metrics=await page.evaluate(()=>{
   const W=320,H=320,scale=.85,R=new BakedCloudRenderer(document.querySelector('canvas'));
   const settings={pixelSize:1,pixelSnap:false,detailMode:'full',breathing:0,shadow:0,ao:0,transmission:0,sixWay:0,bands:0,haze:0,sunAz:25,sunAlt:40};
   const packet={id:1,x:0,y:0,scale,yaw:0,pitch:0,distance:5,opacity:1,phase:0};
   const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
   function basis(pitch,yaw=0){const p=pitch*Math.PI/180,a=yaw*Math.PI/180,c=Math.cos(a),s=Math.sin(a),cp=Math.cos(p),sp=Math.sin(p);return [[c,0,-s],[-s*sp,cp,-c*sp],[s*cp,sp,c*cp]];}
   function pack(z){const q=Math.round(Math.max(0,Math.min(1,z/2+.5))*65535);return [q>>8,q&255];}
   function oct(n){const d=n.reduce((s,x)=>s+Math.abs(x),0);let x=n[0]/d,y=n[1]/d;if(n[2]<0){const a=x;x=(1-Math.abs(y))*(a>=0?1:-1);y=(1-Math.abs(a))*(y>=0?1:-1);}return [Math.round((x*.5+.5)*255),Math.round((y*.5+.5)*255)];}
   function fixture(spheres){
    const w=128,h=128,views=[-85,-60,-30,0,20].flatMap(pitch=>[-35,0,35].map(yaw=>({yaw,pitch})));
    const data=views.map(({pitch,yaw})=>{
     const axes=basis(pitch,yaw),maps=Array.from({length:4},()=>new Uint8Array(w*h*4));
     for(let y=0;y<h;y++)for(let x=0;x<w;x++){
      const px=(x+.5)/w*2-1,py=(y+.5)/h*2-1,base=axes[0].map((v,k)=>v*px+axes[1][k]*py),hits=[];
      for(const s of spheres){
       const delta=s.c.map((v,k)=>v-base[k]),t=dot(delta,axes[2]),r2=s.r*s.r-dot(delta,delta)+t*t;
       if(r2<=0)continue;const dz=Math.sqrt(r2),front=t+dz,back=t-dz,n=base.map((v,k)=>(v+axes[2][k]*front-s.c[k])/s.r);
       hits.push({front,back,n});
      }
      hits.sort((a,b)=>b.front-a.front);const i=(y*w+x)*4;
      for(let layer=0;layer<2;layer++){
       // Neutral padded depth outside coverage prevents arbitrary -range data
       // from confounding inverse-solve behavior; padding does not fill alpha.
       maps[layer*2].set([...pack(0),...pack(0)],i);
       const hit=hits[layer];if(!hit)continue;
       maps[layer*2].set([...pack(hit.front),...pack(hit.back)],i);
       maps[layer*2+1].set([...oct(hit.n),255,255],i);
      }
     }
     return maps;
    });return {w,h,halfHeight:1,range:1,views,data};
   }
   function draw(pitch,yaw=0){
    R.render([{...packet,pitch,yaw}],0,settings);const gl=R.gl,raw=new Uint8Array(W*H*4);
    gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,raw);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
    const mask=new Uint8Array(W*H);let covered=0;for(let i=0;i<mask.length;i++){mask[i]=raw[i*4+3]>0?1:0;covered+=mask[i];}
    return {raw,mask,covered,views:Array.from(gl.getUniform(R.cloud.p,R.cloud.loc.get('uViews')))};
   }
   function holes(mask){const seen=new Uint8Array(W*H),queue=new Int32Array(W*H);let head=0,tail=0;
    function add(i){if(!mask[i]&&!seen[i]){seen[i]=1;queue[tail++]=i;}}
    for(let x=0;x<W;x++){add(x);add((H-1)*W+x);}for(let y=0;y<H;y++){add(y*W);add(y*W+W-1);}
    while(head<tail){const i=queue[head++],x=i%W,y=(i/W)|0;if(x)add(i-1);if(x<W-1)add(i+1);if(y)add(i-W);if(y<H-1)add(i+W);}
    let count=0;for(let i=0;i<mask.length;i++)if(!mask[i]&&!seen[i])count++;return count;
   }
   function difference(a,b){let coverage=0,color=0,maxChannel=0;for(let i=0;i<a.mask.length;i++){
    coverage+=a.mask[i]!==b.mask[i];if(a.mask[i]&&b.mask[i]){let d=0;for(let c=0;c<3;c++)d=Math.max(d,Math.abs(a.raw[i*4+c]-b.raw[i*4+c]));if(d>8)color++;maxChannel=Math.max(maxChannel,d);}
   }return {coverage,color,maxChannel,coverageFraction:coverage/Math.max(a.covered,b.covered,1),colorFraction:color/Math.max(a.covered,b.covered,1)};}
   R.load(fixture([{c:[0,0,0],r:.7}]));
   const sheet=document.createElement('div');sheet.style='display:grid;grid-template-columns:repeat(4,320px);width:max-content;gap:6px;background:#25333d;padding:8px;color:white;font:14px sans-serif';
   function tile(label,frame){const box=document.createElement('div'),title=document.createElement('div'),c=document.createElement('canvas');title.textContent=label;title.style='height:36px;overflow-wrap:anywhere';c.width=W;c.height=H;c.style.display='block';box.append(title,c);sheet.append(box);const ctx=c.getContext('2d'),im=ctx.createImageData(W,H);for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=(y*W+x)*4,j=((H-1-y)*W+x)*4,a=frame.raw[i+3]/255;for(let k=0;k<3;k++)im.data[j+k]=frame.raw[i+k]+[20,110,135][k]*(1-a);im.data[j+3]=255;}ctx.putImageData(im,0,0);}
   const sphereAngles=[-85,-80,-72.51,-72.5,-72.49,-65,-60,-50,-45.01,-45,-44.99,-30,-15.01,-15,-14.99,0,9.99,10,10.01,20].map(pitch=>({pitch,yaw:0}));
   for(const [yaw,pitch] of [[-35,-85],[35,-85],[-17.5,-72.5],[17.5,-72.5],[-17.5,-45],[17.5,-45],[-.01,-60],[.01,-60],[-17.51,-30],[-17.49,-30],[17.49,-30],[17.51,-30],[-.01,-30.01],[.01,-29.99],[34.99,19.99]])sphereAngles.push({yaw,pitch});
   const sphere=[];for(const {pitch,yaw} of sphereAngles){
    const frame=draw(pitch,yaw);let interior=0,missing=0,exterior=0;
    // Three output pixels of silhouette tolerance excludes raster edge errors;
    // the remaining analytic sphere interior can never legitimately be sky.
    for(let y=0;y<H;y++)for(let x=0;x<W;x++){const d=Math.hypot(x+.5-W/2,y+.5-H/2);if(d<.7*scale*H/2-3){interior++;if(!frame.mask[y*W+x])missing++;}if(d>.7*scale*H/2+3&&frame.mask[y*W+x])exterior++;}
    sphere.push({yaw,pitch,interior,missing,exterior,holes:holes(frame.mask),covered:frame.covered,views:frame.views});
    if(yaw===0&&[-72.51,-72.49,-45.01,-44.99].includes(pitch))tile(`Sphere ${pitch}° / ${missing} interior misses`,frame);
   }
   const switches=[-72.5,-45,-15,10].map(pitch=>({pitch,...difference(draw(pitch-.01),draw(pitch+.01))}));
   for(const [yaw,pitch] of [[-17.5,-30],[17.5,-30],[0,-60],[0,-30],[0,0]])switches.push({yaw,pitch,axis:'yaw',...difference(draw(pitch,yaw-.01),draw(pitch,yaw+.01))});
   switches.push({yaw:0,pitch:-30,axis:'corner',...difference(draw(-30.01,-.01),draw(-29.99,.01))});
   R.load(fixture([{c:[-.48,0,0],r:.3},{c:[.48,0,0],r:.3}]));
   const gap=[];for(const pitch of [-80,-72.51,-72.49,-45.01,-44.99,-15.01,-14.99]){
    const frame=draw(pitch);let filled=0;for(let y=H/2-18;y<H/2+18;y++)for(let x=W/2-18;x<W/2+18;x++)filled+=frame.mask[y*W+x];gap.push({pitch,filled,covered:frame.covered});
   }
   // Two physically disjoint spheres overlap in projection. Both exact ray
   // intervals are captured, but the nearer one must own the overlap pixels.
   const layers=[{c:[-.08,0,.4],r:.28},{c:[.08,0,-.4],r:.28}],pitch=-15,yaw=10;
   R.load(fixture(layers));const layered=draw(pitch,yaw),surface=new Float32Array(W*H*4),gl=R.gl;
   gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT1);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,surface);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
   const axes=basis(pitch,yaw),wrongSamples=[];let compared=0,wrongFront=0,missingFront=0,maxDepthError=0;
   for(let y=H/2-12;y<H/2+12;y++)for(let x=W/2-12;x<W/2+12;x++){
    const px=((x+.5)*2/W-1)/scale,py=((y+.5)*2/H-1)/scale,base=axes[0].map((v,k)=>v*px+axes[1][k]*py),hits=[];
    for(const s of layers){const delta=s.c.map((v,k)=>v-base[k]),t=dot(delta,axes[2]),r2=s.r*s.r-dot(delta,delta)+t*t;if(r2>.01)hits.push(t+Math.sqrt(r2));}
    if(hits.length!==2)continue;compared++;const i=y*W+x;if(!layered.mask[i]){missingFront++;continue;}
    const expected=packet.distance-Math.max(...hits)*scale*packet.distance,error=Math.abs(surface[i*4+2]-expected);maxDepthError=Math.max(maxDepthError,error);if(error>.1){wrongFront++;if(wrongSamples.length<8)wrongSamples.push({x,y,expected,actual:surface[i*4+2],fronts:hits});}
   }
   const occlusion={compared,wrongFront,missingFront,maxDepthError,wrongSamples};
   // Deliberately imperfect capture agreement isolates the angular-support
   // policy. These are synthetic 2D patches, not a physically exact bake:
   // the newly introduced side view is .04 asset units nearer than the
   // central view, with identical opaque coverage and compatible normals.
   // An infinitesimal side-view weight must not instantly take over depth.
   const patchViews=[-30,0,30].map(pitch=>({yaw:0,pitch}));
   const patchData=patchViews.map((v,index)=>{const maps=Array.from({length:4},()=>new Uint8Array(32*32*4)),z=[.04,0,-.04][index];for(let y=4;y<28;y++)for(let x=4;x<28;x++){const i=(y*32+x)*4;maps[0].set([...pack(z),...pack(z-.4)],i);maps[1].set([...oct([0,0,1]),255,255],i);}return maps;});
   R.load({w:32,h:32,halfHeight:1,range:1,views:patchViews,data:patchData});
   const patchA=readSurface(-.01,0),patchB=readSurface(.01,0);let patchSamples=0,patchMaxStep=0;
   for(let y=H/2-12;y<H/2+12;y++)for(let x=W/2-12;x<W/2+12;x++){const i=y*W+x;if(patchA.frame.raw[i*4+3]>250&&patchB.frame.raw[i*4+3]>250){patchSamples++;patchMaxStep=Math.max(patchMaxStep,Math.abs(patchA.depth[i*4+2]-patchB.depth[i*4+2]));}}
   const depthSupport={samples:patchSamples,maxStep:patchMaxStep};
   R.load(FoundryAssets.parse(FOUNDRY_DEFAULT));
   const real=[];for(const yaw of [-17.5,0,17.5])for(const pitch of [-85,-80,-72.5,-65,-60,-50,-45,-30,-15,0]){
    const a=draw(pitch-.01,yaw),b=draw(pitch+.01,yaw);real.push({yaw,pitch,holes:holes(b.mask),covered:b.covered,views:b.views,...difference(a,b)});
   }
   // Depth drives subsequent cloud occlusion and shadows independently of
   // blended appearance. A tiny newly selected capture must not instantly
   // replace the stable depth with a substantially nearer captured surface.
   function readSurface(pitch,yaw,pair=false){const frame=draw(pitch,yaw),depth=new Float32Array(W*H*4),gl=R.gl;
    if(pair)R.render([{...packet,pitch,yaw},{...packet,id:2,x:.12,y:.04,distance:5.15,pitch:-30,yaw:0}],0,{...settings,shadow:1,shadowReach:64});
    gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT1);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,depth);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return {frame,depth};}
   const depthTransitions=[];
   for(const [axis,yaw,pitch] of [['pitch',0,-60],['pitch',0,-30],['pitch',0,0],['yaw',0,-30]]){
    const dp=axis==='pitch'?.01:0,dy=axis==='yaw'?.01:0,a=readSurface(pitch-dp,yaw-dy),b=readSurface(pitch+dp,yaw+dy);let shared=0,jumps=0,maxStep=0,stableOpaque=0,stableJumps=0;const jumpLocations=[];
    for(let i=0;i<W*H;i++)if(a.frame.mask[i]&&b.frame.mask[i]){shared++;const d=Math.abs(a.depth[i*4+2]-b.depth[i*4+2]);maxStep=Math.max(maxStep,d);
     const x=i%W,y=(i/W)|0;let rangeA=0,rangeB=0,opaque=a.frame.raw[i*4+3]>250&&b.frame.raw[i*4+3]>250;
     if(x<1||y<1||x>=W-1||y>=H-1)opaque=false;
     if(opaque)for(let yy=-1;yy<=1;yy++)for(let xx=-1;xx<=1;xx++){const j=i+yy*W+xx;rangeA=Math.max(rangeA,Math.abs(a.depth[j*4+2]-a.depth[i*4+2]));rangeB=Math.max(rangeB,Math.abs(b.depth[j*4+2]-b.depth[i*4+2]));}
     const stable=opaque&&rangeA<=.1&&rangeB<=.1;if(stable){stableOpaque++;if(d>.1)stableJumps++;}
     if(d>.1){jumps++;if(jumpLocations.length<25)jumpLocations.push({x,y,step:d,alphaA:a.frame.raw[i*4+3],alphaB:b.frame.raw[i*4+3],rangeA,rangeB,stable});}
    }
    const pa=readSurface(pitch-dp,yaw-dy,true),pb=readSurface(pitch+dp,yaw+dy,true);let pairShared=0,ownerFlips=0;
    for(let i=0;i<W*H;i++)if(pa.depth[i*4+3]>.5&&pb.depth[i*4+3]>.5){pairShared++;if(pa.depth[i*4+3]!==pb.depth[i*4+3])ownerFlips++;}
    depthTransitions.push({axis,yaw,pitch,shared,jumps,fraction:jumps/Math.max(1,shared),maxStep,stableOpaque,stableJumps,stableFraction:stableJumps/Math.max(1,stableOpaque),jumpLocations,pairShared,ownerFlips,ownerFlipFraction:ownerFlips/Math.max(1,pairShared)});
   }
   for(const pitch of [-72.51,-72.49,-45.01,-44.99])tile(`Authored cloud ${pitch}°`,draw(pitch));
   R.canvas.style.width='640px';R.canvas.style.height='480px';
   for(let i=0;i<4;i++)R.render([{...packet,pitch:-70+i*.2}],0,settings);R.gl.finish();
   const syncPixel=new Uint8Array(4),start=performance.now();for(let i=0;i<24;i++){R.render([{...packet,pitch:-74+i*.15}],0,settings);R.gl.finish();R.gl.readPixels(320,240,1,1,R.gl.RGBA,R.gl.UNSIGNED_BYTE,syncPixel);}
   const timing={frames:24,width:640,height:480,finishAndSyncReadIncluded:true,msPerFrame:(performance.now()-start)/24};
   R.canvas.remove();document.body.append(sheet);
   return {sphere,switches,gap,occlusion,depthSupport,real,depthTransitions,timing,error:R.gl.getError()};
  });
  await page.screenshot({path:path.join(os.tmpdir(),`foundry-transition-${baseline?'baseline-':''}sheet.png`),fullPage:true});
  const output=path.join(os.tmpdir(),`foundry-transition-${baseline?'baseline-':nearestDepth?'nearest-depth-':''}metrics.json`);fs.writeFileSync(output,JSON.stringify(metrics,null,2));
  const maximum=(rows,key)=>Math.max(...rows.map(row=>row[key]));
  console.log('Foundry transition summary',JSON.stringify({sphereMissing:maximum(metrics.sphere,'missing'),sphereExterior:maximum(metrics.sphere,'exterior'),switchCoverage:maximum(metrics.switches,'coverageFraction'),switchColor:maximum(metrics.switches,'colorFraction'),gapFilled:maximum(metrics.gap,'filled'),occlusion:metrics.occlusion,depthSupport:metrics.depthSupport,realMaxHoles:maximum(metrics.real,'holes'),realMaxSwitchCoverage:maximum(metrics.real,'coverageFraction'),rawDepthJumps:metrics.depthTransitions.map(f=>f.jumps),stableDepthJumps:metrics.depthTransitions.map(f=>f.stableJumps),pairOwnerFlips:metrics.depthTransitions.map(f=>f.ownerFlips),timing:metrics.timing}));console.log('Metrics artifact:',output);
  assert.equal(metrics.error,0);
  // Real assets can contain authentic holes: their counts are diagnostic only.
  // Synthetic convex coverage and the separated-shape gap provide the oracle.
  const failures=[];
  for(const f of metrics.sphere)if(f.missing>2)failures.push(`Sphere pitch ${f.pitch}: ${f.missing}/${f.interior} missing interior pixels`);
  for(const f of metrics.sphere)if(f.exterior>2)failures.push(`Sphere pitch ${f.pitch}: ${f.exterior} false exterior pixels`);
  for(const f of metrics.switches)if(f.coverageFraction>.01||f.colorFraction>.01)failures.push(`Capture switch ${f.pitch}: ${JSON.stringify(f)}`);
  for(const f of metrics.real)if(f.coverageFraction>.01||f.colorFraction>.01)failures.push(`Starter capture transition ${f.yaw}/${f.pitch}: ${JSON.stringify(f)}`);
  for(const f of metrics.gap)if(f.filled||f.covered<1000)failures.push(`Authentic gap ${f.pitch}: ${JSON.stringify(f)}`);
  if(metrics.occlusion.compared<20||metrics.occlusion.wrongFront||metrics.occlusion.missingFront)failures.push(`Front/back layer occlusion: ${JSON.stringify(metrics.occlusion)}`);
  // Moving occlusion contours can legitimately exchange depth per pixel.
  // On opaque locally smooth 3x3 neighborhoods, .02° must not produce a
  // >.1-world-unit handoff in more than .1% of those stable pixels.
  for(const f of metrics.depthTransitions)if(f.stableFraction>.001)failures.push(`Capture depth transition: ${JSON.stringify(f)}`);
  if(metrics.depthSupport.samples!==576||metrics.depthSupport.maxStep>.01)failures.push(`Infinitesimal capture depth support: ${JSON.stringify(metrics.depthSupport)}`);
  assert.deepEqual(failures,[],'Capture transitions must preserve analytic solid coverage without filling authentic gaps');
  console.log('Foundry analytic transition coverage PASS');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
