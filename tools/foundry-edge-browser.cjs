/* Diagnostic edge audit, not a claim of artifact-free coverage.
 * --strict enforces the currently unmet convex-silhouette cleanup target.
 * Ellipsoid projection and GL assertions always run. */
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const strict=process.argv.includes('--strict');
(async()=>{const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--enable-webgl','--ignore-gpu-blocklist']});try{
 const page=await browser.newPage({viewport:{width:360,height:360}});await page.setContent('<canvas style="width:320px;height:320px"></canvas>');
 for(const f of ['src/foundry-shaders.js','src/foundry-renderer.js','src/foundry-assets.js','assets/foundry-default.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
 const metrics=await page.evaluate(()=>{
  const size=128,W=320,H=320,R=new BakedCloudRenderer(document.querySelector('canvas')),views=[-85,-60,-30,0,20].flatMap(pitch=>[-35,0,35].map(yaw=>({yaw,pitch})));
  const pack=z=>{const a=Math.round((z*.5+.5)*65535);return[a>>8,a&255];};
  function basis(pitch,yaw){const p=pitch*Math.PI/180,a=yaw*Math.PI/180,c=Math.cos(a),s=Math.sin(a),cp=Math.cos(p),sp=Math.sin(p);return[[c,0,-s],[-s*sp,cp,-c*sp],[s*cp,sp,c*cp]];}
  function oct(n){let d=n.reduce((s,v)=>s+Math.abs(v),0),x=n[0]/d,y=n[1]/d;if(n[2]<0){const a=x;x=(1-Math.abs(y))*Math.sign(a);y=(1-Math.abs(a))*Math.sign(y);}return[Math.round((x*.5+.5)*255),Math.round((y*.5+.5)*255)];}
  function capture(radii){return views.map(({pitch,yaw})=>{const b=basis(pitch,yaw),maps=Array.from({length:4},()=>new Uint8Array(size*size*4));for(let y=0;y<size;y++)for(let x=0;x<size;x++){
   const px=(x+.5)*2/size-1,py=(y+.5)*2/size-1,base=b[0].map((v,k)=>v*px+b[1][k]*py);
   let A=0,B=0,C=-1;for(let k=0;k<3;k++){const d=radii[k]*radii[k];A+=b[2][k]*b[2][k]/d;B+=base[k]*b[2][k]/d;C+=base[k]*base[k]/d;}
   const disc=B*B-A*C;if(disc<=0)continue;const z=(-B+Math.sqrt(disc))/A,back=(-B-Math.sqrt(disc))/A,i=(y*size+x)*4,n=base.map((v,k)=>(v+b[2][k]*z)/(radii[k]*radii[k]));
   const length=Math.hypot(...n);maps[0].set([...pack(z),...pack(back)],i);maps[1].set([...oct(n.map(v=>v/length)),255,255],i);
  }return maps;});}
  const data=capture([.7,.7,.7]);
  const settings={pixelSize:1,pixelSnap:false,detailMode:'full',breathing:0,shadow:0,ao:0,transmission:0,sixWay:0,bands:0,haze:0,sunAz:25,sunAlt:40},packet={id:1,x:0,y:0,scale:.85,yaw:17.5,pitch:-45,distance:5,opacity:1};
  function draw(pitch,yaw){R.render([{...packet,pitch,yaw}],0,settings);const gl=R.gl,raw=new Uint8Array(W*H*4);gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,raw);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return raw;}
  function inspect(raw,cutoff=.5){const mask=Uint8Array.from({length:W*H},(_,i)=>raw[i*4+3]>cutoff?1:0);let scanGaps=0,isolated=0,covered=0;for(let y=0;y<H;y++){let a=W,b=-1;for(let x=0;x<W;x++)if(mask[y*W+x]){a=Math.min(a,x);b=x;covered++;}for(let x=a;x<=b;x++)if(!mask[y*W+x])scanGaps++;}for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++){const i=y*W+x;if(mask[i]&&!mask[i-1]&&!mask[i+1]&&!mask[i-W]&&!mask[i+W])isolated++;}return {scanGaps,isolated,covered};}
  R.load({w:size,h:size,halfHeight:1,range:1,views,data});const sphere=[];
  for(const yaw of[0,17.5]){let previous=null;for(let pitch=-80;pitch<=-5;pitch+=2.5){const raw=draw(pitch,yaw);let coverageChanges=0;if(previous)for(let i=3;i<raw.length;i+=4)coverageChanges+=(raw[i]>0)!==(previous[i]>0);sphere.push({yaw,pitch,...inspect(raw),solidGaps:inspect(raw,128).scanGaps,coverageChanges});previous=raw;}}
  const sphereFrame=draw(-45,17.5);R.load({w:size,h:size,halfHeight:1,range:1,views,data:capture([.7,.15,.7])});
  const ellipsoid=[];for(const pitch of[0,-30,-60,-85]){const raw=draw(pitch,0);let minX=W,minY=H,maxX=0,maxY=0;for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(raw[(y*W+x)*4+3]>128){minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}
   const angle=pitch*Math.PI/180;ellipsoid.push({pitch,width:maxX-minX+1,height:maxY-minY+1,expectedWidth:.7*.85*W,expectedHeight:Math.hypot(.15*Math.cos(angle),.7*Math.sin(angle))*.85*H});}
  R.load(FoundryAssets.parse(FOUNDRY_DEFAULT));const real=[];for(let pitch=-80;pitch<=-5;pitch+=2.5)real.push({pitch,...inspect(draw(pitch,17.5))});
  window.edgeFrames={sphere:Array.from(sphereFrame),real:Array.from(draw(-45,17.5)),W,H};return {sphere,ellipsoid,real,error:R.gl.getError()};
 });
 await page.evaluate(()=>{const {sphere,real,W,H}=edgeFrames;document.querySelector('canvas').remove();for(const raw of[sphere,real]){const c=document.createElement('canvas');c.width=W;c.height=H;document.body.append(c);const ctx=c.getContext('2d'),im=ctx.createImageData(W,H);for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=(y*W+x)*4,j=((H-y-1)*W+x)*4,a=raw[i+3]/255;for(let k=0;k<3;k++)im.data[j+k]=raw[i+k]+[20,110,135][k]*(1-a);im.data[j+3]=255;}ctx.putImageData(im,0,0);}});
 await page.screenshot({path:path.join(os.tmpdir(),'foundry-edge-sheet.png'),fullPage:true});fs.writeFileSync(path.join(os.tmpdir(),'foundry-edge-metrics.json'),JSON.stringify(metrics,null,2));
 const max=(a,k)=>Math.max(...a.map(f=>f[k]));console.log('Foundry edge DIAGNOSTIC',JSON.stringify({sphereGapMax:max(metrics.sphere,'scanGaps'),sphereGapTotal:metrics.sphere.reduce((s,f)=>s+f.scanGaps,0),sphereIsolated:max(metrics.sphere,'isolated'),realIsolated:max(metrics.real,'isolated'),sphereFrameMaskChanges:max(metrics.sphere,'coverageChanges'),ellipsoid:metrics.ellipsoid}));assert.equal(metrics.error,0);for(const f of metrics.ellipsoid){assert.ok(Math.abs(f.width-f.expectedWidth)<4,'Ellipsoid projected width');assert.ok(Math.abs(f.height-f.expectedHeight)<4,'Ellipsoid projected height');}assert.ok(metrics.ellipsoid[0].width/metrics.ellipsoid[0].height>4,'Front remains flat');assert.ok(metrics.ellipsoid[3].width/metrics.ellipsoid[3].height<1.1,'Underside remains round');assert.equal(max(metrics.sphere,'isolated'),0,'No detached sphere pixels');if(strict){assert.ok(max(metrics.sphere,'scanGaps')<=4,'Unmet target: convex silhouette must not break into disconnected scanline flecks');}else console.log('Edge-gap counts are diagnostic: binary capture masks retain small silhouette sampling artifacts. Use --strict to enforce the open cleanup target.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

