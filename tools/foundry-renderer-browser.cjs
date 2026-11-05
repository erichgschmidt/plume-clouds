const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:700,height:500}});
  await page.setContent('<canvas id="c" style="width:640px;height:480px"></canvas>');
  for(const f of ['src/foundry-shaders.js','src/foundry-renderer.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
  const result=await page.evaluate(()=>{
   const R=new BakedCloudRenderer(document.querySelector('canvas')),w=24,h=24;
   const maps=[0,1,2,3].map(()=>new Uint8Array(w*h*4));
   for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const i=(y*w+x)*4;if(Math.hypot(x-w/2,y-h/2)>w*.4||Math.hypot(x-w/2,y-h/2)<w*.09)continue;
    // Neutral-depth flat ring. Explicit hole must stay background.
    maps[0].set([128,0,64,0],i);maps[1].set([128,128,255,255],i);
   }
   R.load({w,h,halfHeight:1,range:1,views:[{yaw:0,pitch:0}],data:[maps]});
   const a={id:1,x:0,y:0,scale:.7,yaw:0,pitch:0,distance:5,opacity:1,phase:0};
   function draw(list,settings={}){R.render(list,0,{skyColor:[.1,.2,.3],...settings});const gl=R.gl,bytes=new Uint8Array(R.canvas.width*R.canvas.height*4);gl.readPixels(0,0,R.canvas.width,R.canvas.height,gl.RGBA,gl.UNSIGNED_BYTE,bytes);return bytes;}
   const single=draw([a]),near={...a,id:2,x:.1,distance:3},far={...a,id:3,x:-.1,distance:8};
   const forward=draw([near,far]),reverse=draw([far,near]);let orderDiff=0;for(let i=0;i<forward.length;i++)orderDiff=Math.max(orderDiff,Math.abs(forward[i]-reverse[i]));
   const depth=new Float32Array(4),gl=R.gl;gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT1);gl.readPixels(400,240,1,1,gl.RGBA,gl.FLOAT,depth);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
   const c=(240*640+320)*4,hole=Array.from(single.slice(c,c+3));
   draw([{...a,x:20}]);const culled=R.stats.culled,drawn=R.stats.drawn;
   const shadowed=draw([a],{shadow:1,shadowReach:24});let selfShadowDiff=0;for(let i=0;i<single.length;i++)selfShadowDiff=Math.max(selfShadowDiff,Math.abs(single[i]-shadowed[i]));
   const pair=[{...far,x:0,y:0},{...near,x:.35,y:.4,scale:.3}];
   const off=draw(pair,{shadow:0,sunAz:60,sunAlt:40}),on=draw(pair,{shadow:1,shadowReach:64,sunAz:60,sunAlt:40}),short=draw(pair,{shadow:1,shadowReach:2,sunAz:60,sunAlt:40});let castChanged=0,reachChanged=0;
   for(let i=0;i<off.length;i+=4){if(off[i]>on[i]+1)castChanged++;if(Math.abs(short[i]-on[i])>1)reachChanged++;}
   draw([a],{sunAz:0,sunAlt:0,cameraPitch:60});
   const screenLight=Array.from(gl.getUniform(R.post.p,R.post.loc.get('uLight'))),worldLight=Array.from(gl.getUniform(R.cloud.p,R.cloud.loc.get('uLight')));
   return {orderDiff,hole,culled,drawn,selfShadowDiff,castChanged,reachChanged,screenLight,worldLight,overlapDepth:depth[2],error:R.gl.getError(),stats:R.stats};
  });
  assert.equal(result.error,0);assert.equal(result.orderDiff,0);assert.equal(result.selfShadowDiff,0);assert.ok(result.castChanged>100);assert.ok(result.reachChanged>100);assert.ok(result.overlapDepth>2.9&&result.overlapDepth<3.1);result.hole.forEach((v,i)=>assert.ok(Math.abs(v-[26,51,76][i])<=1));assert.equal(result.culled,1);assert.equal(result.drawn,0);
  assert.deepEqual(result.worldLight,[0,0,1]);assert.ok(Math.abs(result.screenLight[1]-Math.sqrt(.75))<1e-6);assert.ok(Math.abs(result.screenLight[2]-.5)<1e-6);
  console.log('Foundry GPU contract PASS',JSON.stringify(result));
  for(const f of ['src/foundry-assets.js','assets/foundry-default.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
  const real=await page.evaluate(()=>{
   const R=new BakedCloudRenderer(document.querySelector('canvas'));R.load(FoundryAssets.parse(FOUNDRY_DEFAULT));
   const packet={id:1,x:0,y:0,scale:.8,yaw:0,pitch:0,distance:5,opacity:1,phase:0},settings={pixelSize:1,shadow:0,sunAz:-42,sunAlt:48,skyColor:[.1,.2,.3]};
   function read(pitch,yaw=0){R.render([{...packet,pitch,yaw}],1,settings);const gl=R.gl,pixels=new Uint8Array(640*480*4);gl.readPixels(0,0,640,480,gl.RGBA,gl.UNSIGNED_BYTE,pixels);return pixels;}
   const front=read(0),adjacent=read(.001),under=read(-85),repeat=read(-85);let changed=0,repeatDiff=0,covered=0,nearCaptureChange=0;
   for(let i=0;i<front.length;i+=4){if(Math.abs(front[i]-under[i])>2)changed++;if((front[i]>30)!==(adjacent[i]>30))nearCaptureChange++;if(front[i]>30)covered++;for(let k=0;k<4;k++)repeatDiff=Math.max(repeatDiff,Math.abs(under[i+k]-repeat[i+k]));}
   const extreme=read(100,150),clampedViews=R.stats.clampedViews,limit=read(20,35);let extremeCovered=0,clampDiff=0;
   for(let i=0;i<extreme.length;i++){clampDiff=Math.max(clampDiff,Math.abs(extreme[i]-limit[i]));if(i%4===0&&extreme[i]>30)extremeCovered++;}
   // Real-asset enclosed sky pixels are a diagnostic: some are legitimate gaps.
   // Independent analytic coverage oracles live in foundry-transition-browser.cjs.
   function countHoles(renderer){renderer.render([{...packet,yaw:-8.634,pitch:-22.643,phase:18.399}],0,{...settings,breathing:.06,detailMode:'full'});
   const gl=renderer.gl,raw=new Uint8Array(640*480*4);gl.bindFramebuffer(gl.FRAMEBUFFER,renderer.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.readPixels(0,0,640,480,gl.RGBA,gl.UNSIGNED_BYTE,raw);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
   const seen=new Uint8Array(640*480),queue=new Int32Array(seen.length);let head=0,tail=0;
   function add(i){if(!seen[i]&&raw[i*4+3]===0){seen[i]=1;queue[tail++]=i;}}
   for(let x=0;x<640;x++){add(x);add(479*640+x);}for(let y=0;y<480;y++){add(y*640);add(y*640+639);}
   while(head<tail){const i=queue[head++],x=i%640,y=Math.floor(i/640);if(x)add(i-1);if(x<639)add(i+1);if(y)add(i-640);if(y<479)add(i+640);}
   let enclosedHoles=0;for(let i=0;i<seen.length;i++)if(!seen[i]&&raw[i*4+3]===0)enclosedHoles++;return enclosedHoles;}
   const enclosedHoles=countHoles(R);
   R.render([{...packet,pitch:-30},{...packet,id:2,x:.6,y:-.1,scale:.35,distance:3}],1,{...settings,shadow:1});
   return {changed,repeatDiff,covered,nearCaptureChange,clampedViews,extremeCovered,clampDiff,enclosedHoles,error:R.gl.getError(),stats:R.stats};
  });
  assert.equal(real.error,0);assert.equal(real.repeatDiff,0);assert.ok(real.changed>2000);assert.ok(real.covered>2000);assert.ok(real.nearCaptureChange<real.covered*.01);assert.equal(real.clampedViews,1);assert.equal(real.clampDiff,0);assert.ok(real.extremeCovered>2000);
  await page.screenshot({path:path.join(os.tmpdir(),'foundry-renderer-default.png')});
  console.log('Foundry default asset and underside PASS',JSON.stringify(real));
  await page.evaluate(()=>{const a=FoundryAssets.parse(FOUNDRY_DEFAULT),v=a.views.findIndex(v=>v.yaw===0&&v.pitch===-30);document.body.innerHTML='';for(const m of [1,3]){const c=document.createElement('canvas');c.width=a.w;c.height=a.h;c.style.width='384px';c.style.height='288px';c.style.imageRendering='pixelated';document.body.append(c);const ctx=c.getContext('2d'),p=ctx.createImageData(a.w,a.h);for(let y=0;y<a.h;y++)for(let x=0;x<a.w;x++){const i=(y*a.w+x)*4,j=((a.h-1-y)*a.w+x)*4;const n=a.data[v][m][i+3];p.data.set([n,n,n,255],j);}ctx.putImageData(p,0,0);}});
  await page.screenshot({path:path.join(os.tmpdir(),'foundry-source-coverage.png')});
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
