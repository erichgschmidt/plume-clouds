const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:700,height:500},deviceScaleFactor:1.25});
  await page.setContent('<div style="position:relative;width:641px;height:481px"><canvas></canvas></div>');
  for(const f of ['src/foundry-pixel-grid.js','src/foundry-shaders.js','src/foundry-renderer.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
  const r=await page.evaluate(()=>{
   const R=new BakedCloudRenderer(document.querySelector('canvas'));
   function level(size){
    const data=[[0,1,2,3].map(()=>new Uint8Array(size*size*4))],lighting=[[0,1,2,3].map(()=>new Uint8Array(size*size*4))];
    for(let y=0;y<size;y++)for(let x=0;x<size;x++){
     const radius=Math.hypot(x+.5-size/2,y+.5-size/2),i=(y*size+x)*4;
     if(radius>size*.4||radius<size*.12)continue;
     data[0][0].set([128,0,64,0],i);data[0][1].set([128,128,255,255],i);
     // Irradiance is consistent with the encoded almost-+Z normal, attenuated
     // by a 0.65 visibility factor. Six signed-axis selection is tested separately.
     lighting[0][0].set([1,1,166,255],i);lighting[0][1].set([0,0,0,255],i);
    }
    return {w:size,h:size,data,lighting};
   }
   const base=level(64),asset={...base,views:[{yaw:0,pitch:0}],halfHeight:1,range:1,lods:[level(16),level(32)]};
   const packet={id:'hero',x:0,y:0,scale:.7,yaw:0,pitch:0,distance:5,opacity:1,phase:0};
   const settings={pixelSize:1,sixWay:1,sunAz:0,sunAlt:0,ao:0,transmission:0,bands:0,shadow:0,haze:0,pixelSnap:false,detailMode:'full',skyColor:[.1,.2,.3]};
   function draw(extra={},item=packet){R.render([item],0,{...settings,...extra});const gl=R.gl,w=R.canvas.width,h=R.canvas.height,p=new Uint8Array(w*h*4);gl.readPixels(0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,p);return p;}
   function sample(p){const w=R.canvas.width,h=R.canvas.height,x=Math.floor(w/2+h*.2),y=Math.floor(h/2);return Array.from(p.slice((y*w+x)*4,(y*w+x)*4+4));}
   const difference=(a,b)=>a.reduce((max,v,i)=>Math.max(max,Math.abs(v-b[i])),0);
   R.load({...asset,lighting:undefined,lods:undefined});const legacy=draw({sixWay:0}),legacyRequested=draw({sixWay:1});
   R.load(asset);const disabled=draw({sixWay:0}),responseLoss=sample(disabled)[0]-sample(draw())[0];
   const lit=draw(),pitch=draw({cameraPitch:70});
   const p0=draw({pixelSnap:true}),p1=draw({pixelSnap:true},{...packet,x:.0003});
   const packetOriginalX=packet.x;
   draw({detailMode:'auto'},{...packet,scale:12/R.canvas.height});const farLod=R.lodState.get('hero');
   draw({detailMode:'auto'},{...packet,scale:17/R.canvas.height});const hysteresis=R.lodState.get('hero');
   draw({detailMode:'auto'},{...packet,scale:19/R.canvas.height});const refine=R.lodState.get('hero');
   draw({detailMode:'full'},{...packet,scale:12/R.canvas.height});const fullLod=R.lodState.get('hero');
   draw({detailMode:'auto'},{...packet,scale:12/R.canvas.height});
   const gl=R.gl,w=R.canvas.width,h=R.canvas.height,center=new Uint8Array(4);gl.readPixels(Math.floor(w/2),Math.floor(h/2),1,1,gl.RGBA,gl.UNSIGNED_BYTE,center);
   // Explicitly coarse detail still uses the same depth-tested compositor.
   const near={...packet,id:'near',x:.05,scale:24/h,distance:3},far={...packet,id:'far',x:-.05,scale:24/h,distance:8};
   function pair(list){R.render(list,0,{...settings,detailMode:'auto'});const p=new Uint8Array(w*h*4);gl.readPixels(0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,p);return p;}
   const pairA=pair([near,far]),pairB=pair([far,near]);
   return {legacyDiff:difference(legacy,legacyRequested),disabledDiff:difference(legacy,disabled),worldLightDiff:difference(lit,pitch),snapDiff:difference(p0,p1),packetOriginalX,responseLoss,farLod,hysteresis,refine,fullLod,center:Array.from(center),orderDiff:difference(pairA,pairB),grid:R.stats.grid,assetBytes:R.stats.assetBytes,error:gl.getError()};
  });
  assert.equal(r.error,0);assert.equal(r.legacyDiff,0);assert.equal(r.disabledDiff,0);assert.equal(r.worldLightDiff,0);assert.equal(r.snapDiff,0);assert.equal(r.packetOriginalX,0);
  assert.ok(r.responseLoss>5,'Stored visibility must darken the matching lit surface');
  assert.equal(r.farLod,2);assert.equal(r.hysteresis,2);assert.equal(r.refine,1);assert.equal(r.fullLod,0);assert.equal(r.orderDiff,0);
  assert.ok(Math.abs(r.center[0]-26)<=1&&Math.abs(r.center[1]-51)<=1&&Math.abs(r.center[2]-76)<=1,'Coarse LOD retains explicit central hole');
  assert.ok(Number.isInteger(r.grid.scale));assert.equal(r.grid.dpr,1.25);
  console.log('Foundry six-way, LOD and shared pixel grid GPU PASS',JSON.stringify(r));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
