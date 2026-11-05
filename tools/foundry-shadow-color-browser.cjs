/* Isolated cast-shadow checks. Palette bands deliberately disabled. */
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const baseline=process.argv.includes('--baseline');
(async()=>{const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--enable-webgl','--ignore-gpu-blocklist']});try{
 const page=await browser.newPage({viewport:{width:340,height:340}});await page.setContent('<canvas style="width:320px;height:320px"></canvas>');
 for(const f of ['src/foundry-shaders.js','src/foundry-renderer.js']){const content=baseline?require('node:child_process').execFileSync('git',['show','HEAD:'+f],{cwd:path.join(__dirname,'..'),encoding:'utf8'}):fs.readFileSync(path.join(__dirname,'..',f),'utf8');await page.addScriptTag({content});}
 const result=await page.evaluate(()=>{
  const W=320,H=320,R=new BakedCloudRenderer(document.querySelector('canvas')),maps=Array.from({length:4},()=>new Uint8Array(64*64*4));
  const pack=z=>{const q=Math.round((z*.5+.5)*65535);return[q>>8,q&255];};
  for(let y=8;y<56;y++)for(let x=8;x<56;x++){const i=(y*64+x)*4;maps[0].set([...pack(0),...pack(-.6)],i);maps[1].set([182,128,255,255],i);}
  R.load({w:64,h:64,halfHeight:1,range:1,views:[{yaw:0,pitch:0}],data:[maps]});
  const receiver={id:1,x:0,y:0,scale:.9,yaw:0,pitch:0,distance:5,opacity:1,phase:0},blocker={...receiver,id:2,x:.5,scale:.18,distance:3};
  const settings={pixelSize:1,pixelSnap:false,detailMode:'full',breathing:0,ao:0,transmission:0,bands:0,sixWay:0,haze:0,sunAz:90,sunAlt:0,shadowReach:64};
  function draw(palette,shadow,pair=true,offset=0){R.render(pair?[receiver,{...blocker,x:blocker.x+offset}]:[receiver],0,{...settings,palette,shadow});const gl=R.gl,color=new Uint8Array(W*H*4),surface=new Float32Array(color.length);gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,color);gl.bindFramebuffer(gl.FRAMEBUFFER,R.target.fbo);gl.readBuffer(gl.COLOR_ATTACHMENT1);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,surface);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return{color,surface};}
  const palettes={day:[[.29,.45,.53],[.64,.77,.76],[.99,.94,.80]],dusk:[[.30,.36,.51],[.70,.64,.65],[1,.79,.56]],moon:[[.16,.29,.40],[.43,.59,.66],[.78,.89,.88]]};
  const smooth=(lo,hi,x)=>{const t=Math.max(0,Math.min(1,(x-lo)/(hi-lo)));return t*t*(3-2*t);};
  function curve(name){const [dark,mid,lit]=palettes[name],out=[];for(let j=0;j<=1024;j++){const v=j/1024,a=smooth(0,.6,v),b=smooth(.5,1,v);out.push(dark.map((d,k)=>((d*(1-a)+mid[k]*a)*(1-b)+lit[k]*b)*255));}return out;}
  const results=[];let selfDifference=0,surfaceDifference=0;
  for(const palette of Object.keys(palettes)){
   const isolated=draw(palette,0,false),isolatedShadow=draw(palette,1,false),off=draw(palette,0),on=draw(palette,1),ramp=curve(palette);let shadowPixels=0,maxPaletteError=0;
   for(let i=0;i<on.color.length;i++){selfDifference=Math.max(selfDifference,Math.abs(isolated.color[i]-isolatedShadow.color[i]));surfaceDifference=Math.max(surfaceDifference,Math.abs(off.surface[i]-on.surface[i]));}
   let edge=0;for(let x=160;x<W;x++)if(on.surface[(160*W+x)*4+3]===2){edge=x;break;}
   const profile=[];for(let x=edge-62;x<edge-6;x++){const i=(160*W+x)*4;if(on.surface[i+3]!==1)continue;const rgb=Array.from(on.color.slice(i,i+3));profile.push({x,rgb});
    if(off.color[i]-on.color[i]>2){shadowPixels++;let nearest=Infinity;for(const c of ramp)nearest=Math.min(nearest,Math.hypot(...rgb.map((v,k)=>v-c[k])));maxPaletteError=Math.max(maxPaletteError,nearest);}
   }
   let maxStep=0;for(let j=1;j<profile.length;j++)maxStep=Math.max(maxStep,...profile[j].rgb.map((v,k)=>Math.abs(v-profile[j-1].rgb[k])));
   const distinct=new Set(profile.map(p=>p.rgb.join(','))).size,range=Math.max(...profile.map(p=>p.rgb[0]))-Math.min(...profile.map(p=>p.rgb[0]));
   results.push({palette,edge,shadowPixels,maxPaletteError,maxStep,distinct,range,profile});
  }
  const motion=[];for(let step=0;step<=32;step++){const frame=draw('day',1,true,step*.25*2/H),edge=results[0].edge;motion.push(Array.from(frame.color.slice((160*W+edge-22)*4,(160*W+edge-22)*4+3)));}
  let maxMotionStep=0;for(let i=1;i<motion.length;i++)maxMotionStep=Math.max(maxMotionStep,...motion[i].map((v,k)=>Math.abs(v-motion[i-1][k])));
  draw('day',1);return {results,selfDifference,surfaceDifference,maxMotionStep,motion,error:R.gl.getError()};
 });
 const label=baseline?'baseline-':'',artifact=path.join(os.tmpdir(),`foundry-shadow-color-${label}metrics.json`);fs.writeFileSync(artifact,JSON.stringify(result,null,2));await page.screenshot({path:path.join(os.tmpdir(),`foundry-shadow-color-${label}.png`)});
 console.log('Foundry cast shadow summary',JSON.stringify({...result,results:result.results.map(({profile,...r})=>r),motion:undefined}));console.log('Metrics artifact:',artifact);
 assert.equal(result.error,0);assert.equal(result.selfDifference,0,'An isolated cloud must not shadow its own silhouette');assert.equal(result.surfaceDifference,0,'Shadows must never alter coverage, depth, or ownership');
 const failures=[];for(const r of result.results){if(r.shadowPixels<30)failures.push(`${r.palette}: shadow fixture inactive`);if(r.maxPaletteError>4)failures.push(`${r.palette}: cast-shadow color leaves palette curve by ${r.maxPaletteError.toFixed(2)} bytes`);if(r.maxStep>5||r.distinct<24||r.range<15)failures.push(`${r.palette}: stepped falloff ${JSON.stringify({maxStep:r.maxStep,distinct:r.distinct,range:r.range})}`);}
 if(result.maxMotionStep>4)failures.push(`Moving blocker produces ${result.maxMotionStep}-byte jumps per .25 screen pixel`);
 assert.deepEqual(failures,[],'Cast shadow should share cloud palette and smooth falloff');console.log('Foundry cast shadow color/falloff PASS');
 }finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
