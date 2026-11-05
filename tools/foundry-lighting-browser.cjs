const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--enable-webgl','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage();await page.setContent('<canvas style="width:320px;height:240px"></canvas>');
  for(const f of ['src/foundry-shaders.js','src/foundry-renderer.js'])await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'..',f),'utf8')});
  const result=await page.evaluate(()=>{
   const R=new BakedCloudRenderer(document.querySelector('canvas')),size=64;
   function encode(n){const sum=n.reduce((a,b)=>a+Math.abs(b),0);let x=n[0]/sum,y=n[1]/sum;if(n[2]<0){const a=x;x=(1-Math.abs(y))*(x>=0?1:-1);y=(1-Math.abs(a))*(y>=0?1:-1);}return [Math.round((x*.5+.5)*255),Math.round((y*.5+.5)*255)];}
   function decode(e){let x=e[0]/255*2-1,y=e[1]/255*2-1,z=1-Math.abs(x)-Math.abs(y),t=Math.max(-z,0);x+=x>=0?-t:t;y+=y>=0?-t:t;const d=Math.hypot(x,y,z);return [x/d,y/d,z/d];}
   function asset(fixedNormal,visibility=1){
    const data=[[0,1,2,3].map(()=>new Uint8Array(size*size*4))],lighting=[[0,1,2,3].map(()=>new Uint8Array(size*size*4))];
    for(let y=0;y<size;y++)for(let x=0;x<size;x++){
     const qx=(x+.5-size/2)/(size*.45),qy=(y+.5-size/2)/(size*.45),q=qx*qx+qy*qy;if(q>=1)continue;
     const encoded=encode(fixedNormal||[qx,qy,Math.sqrt(1-q)]),n=decode(encoded),i=(y*size+x)*4;
     // Authoring six-way capture decodes the packed oct normal before baking.
     data[0][0].set([128,0,64,0],i);data[0][1].set([...encoded,255,255],i);
     lighting[0][0].set([...n.map(v=>Math.round(Math.max(v,0)*255*visibility)),255],i);
     lighting[0][1].set([...n.map(v=>Math.round(Math.max(-v,0)*255*visibility)),255],i);
    }
    return {w:size,h:size,views:[{yaw:0,pitch:0}],halfHeight:1,range:1,data,lighting};
   }
   const packet={id:1,x:0,y:0,scale:.8,yaw:0,pitch:0,distance:5,opacity:1},base={pixelSize:1,ao:0,transmission:0,bands:5,shadow:0,haze:0,skyColor:[.1,.2,.3]};
   function render(sixWay,sunAz,sunAlt){R.render([packet],0,{...base,sixWay,sunAz,sunAlt});const p=new Uint8Array(320*240*4);R.gl.readPixels(0,0,320,240,R.gl.RGBA,R.gl.UNSIGNED_BYTE,p);return p;}
   R.load(asset());let maxUnblockedDiff=0,unblockedChanged=0;
   for(const [az,alt] of [[-135,6],[-70,35],[-42,38],[0,0],[0,70],[45,-25],[90,6],[135,35],[180,0]]){
    const a=render(0,az,alt),b=render(1,az,alt);for(let i=0;i<a.length;i++){const d=Math.abs(a[i]-b[i]);maxUnblockedDiff=Math.max(maxUnblockedDiff,d);if(d>1)unblockedChanged++;}
   }
   const axes=[[[1,0,0],90,0],[[-1,0,0],-90,0],[[0,1,0],0,90],[[0,-1,0],0,-90],[[0,0,1],0,0],[[0,0,-1],180,0]],axisLoss=[];
   for(const [n,az,alt] of axes){R.load(asset(n,.25));const a=render(0,az,alt),b=render(1,az,alt),i=(120*320+160)*4;axisLoss.push(a[i]-b[i]);}
   const left=asset([.2,0,Math.sqrt(.96)]),right=asset([-.2,0,Math.sqrt(.96)]);
   R.load({...left,views:[{yaw:-10,pitch:0},{yaw:10,pitch:0}],data:[left.data[0],right.data[0]],lighting:[left.lighting[0],right.lighting[0]]});
   let blendedUnblockedDiff=0;for(const az of [-60,-30,0,30,60]){const a=render(0,az,20),b=render(1,az,20);for(let i=0;i<a.length;i++)blendedUnblockedDiff=Math.max(blendedUnblockedDiff,Math.abs(a[i]-b[i]));}
   R.load(asset([0,0,1],0));let lowBasisMaxJump=0,previous=null;
   base.bands=0;for(let az=89;az<=91;az+=.1){const current=render(1,az,0),i=(120*320+160)*4;if(previous!==null)lowBasisMaxJump=Math.max(lowBasisMaxJump,Math.abs(current[i]-previous));previous=current[i];}
   return {maxUnblockedDiff,unblockedChanged,blendedUnblockedDiff,axisLoss,lowBasisMaxJump,error:R.gl.getError()};
  });
  assert.equal(result.error,0);assert.ok(result.maxUnblockedDiff<=1,'Unoccluded sphere must not lose energy or gain palette seams: '+JSON.stringify(result));assert.ok(result.blendedUnblockedDiff<=1);assert.ok(result.axisLoss.every(v=>v>20));assert.ok(result.lowBasisMaxJump<=2);
  console.log('Foundry six-way energy and silhouette safeguards PASS',JSON.stringify(result));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
