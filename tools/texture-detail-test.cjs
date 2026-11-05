/* GPU regression: buried-lobe continuity; baseline is injected only into browser requests. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const baseline=process.env.PUFFS_BASELINE||path.join(os.tmpdir(),'puffs-before-buried-fix.js');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist']});
 const results=[];
 try{
  for(const old of [false,...(fs.existsSync(baseline)?[true]:[])]){
   const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
   if(old)await page.route('**/src/puffs.js*',route=>route.fulfill({contentType:'application/javascript',body:fs.readFileSync(baseline,'utf8')}));
   await page.goto((process.env.CLOUD_TEST_URL||'http://127.0.0.1:8765')+'/tools/shadow-test.html');
   await page.waitForFunction(()=>window.shadowAudit&&window.modernResults);
   const result=await page.evaluate(async old=>{
    const A=shadowAudit,R=A.renderer,gl=R.gl,M=PuffRenderer.MAX_SPH;
    const x=307,y=192,px=(x+.5)/512,py=(384-y-.5)/512,T=.1*.08*.3;
    const parentH=Math.sqrt(.2*.2-(px-.5)**2),options={modelVersion:2,pixel:1,softness:.3,cap:0,depth:1,noise:0,
     noise2Scale:3,noiseBias2:1,anchor:0,sun:86,elevation:6,fill:.11,shadow:.64,baseShade:.5,contact:0,cavity:0,smooth:0,body:0,diag:7};
    let injection=null;const tree=R._tree;
    R._tree=function(){
     tree.apply(R,arguments);if(!injection)return;
     const D=R._sphData,{gap,delta}=injection,childZ=parentH-gap*T;
     D.set([.5,py,.2,0],0);D.set([px-.05+delta,py,.05,childZ],4);
     for(let i=0;i<2;i++){
      D[(M+i)*4+1]=i?.6:.25;D[(2*M+i)*4]=.5;D[(2*M+i)*4+1]=py;
      D[(4*M+i)*4]=i+1;D[(4*M+i)*4+1]=i?1:-1;D[(4*M+i)*4+2]=1;
     }
     const bound=gl.getParameter(gl.TEXTURE_BINDING_2D);gl.bindTexture(gl.TEXTURE_2D,R._sphTex);
     gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,M,8,gl.RGBA,gl.FLOAT,D);gl.bindTexture(gl.TEXTURE_2D,bound);
    };
    function records(gap){return [[.5,py,.2,0],[px-.05,py,.05,parentH-gap*T,0]];}
    function sample(c){
     const i=(y*512+x)*4,macro=new Float32Array(4);
     gl.bindFramebuffer(gl.FRAMEBUFFER,R._fbo);gl.readBuffer(gl.COLOR_ATTACHMENT3);gl.readPixels(x,y,1,1,gl.RGBA,gl.FLOAT,macro);
     gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
     return {height:c.field[i],detail:c.field[i+1],mask:c.field[i+3],gradient:Array.from(macro.subarray(0,2)),light:c.pixels[i]};
    }
    async function digest(data){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',data)),v=>v.toString(16).padStart(2,'0')).join('');}
    async function hashes(c,region){
     const mask=new Float32Array(c.field.length/4);for(let i=0;i<mask.length;i++)mask[i]=c.field[i*4+3];
     let pixels=c.pixels,field=c.field;
     if(region){pixels=new Uint8Array(region.length*4);field=new Float32Array(region.length*4);region.forEach((i,j)=>{pixels.set(c.pixels.subarray(i*4,i*4+4),j*4);field.set(c.field.subarray(i*4,i*4+4),j*4);});}
     return {pixels:await digest(pixels),field:await digest(field),mask:await digest(mask)};
    }
    const crossings=[],fixtures=[],profile=[],visuals=[];
    if(!old)for(const gap of [.5,2,5,10])for(const noise2 of [0,1.5])for(const anchor of [0,1])for(const smooth of [0,1]){
     const pair=[];for(const inside of [true,false]){injection={gap,delta:inside?1e-7:-1e-7};pair.push(sample(A.capture(records(gap),{...options,noise2,anchor,smooth})));}
     crossings.push({gap,noise2,anchor,smooth,inside:pair[0],outside:pair[1]});
    }
    for(const gap of [.5,2,5,10]){
     injection={gap,delta:1e-7};const c=A.capture(records(gap),{...options,noise2:1.5});
     fixtures.push({name:'buried '+gap,...await hashes(c)});
     if(gap===5){
      const macro=new Float32Array(512*384*4);gl.bindFramebuffer(gl.FRAMEBUFFER,R._fbo);gl.readBuffer(gl.COLOR_ATTACHMENT3);
      gl.readPixels(0,0,512,384,gl.RGBA,gl.FLOAT,macro);gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
      for(let xx=265;xx<=318;xx++){const i=(y*512+xx)*4;profile.push({x:xx,height:c.field[i],detail:c.field[i+1],gx:macro[i],gy:macro[i+1],light:c.pixels[i]});}
      for(const noise2 of [0,1.5]){
       const image=A.capture(records(gap),{...options,noise2,diag:0}),canvas=document.createElement('canvas');canvas.width=512;canvas.height=384;
       const ctx=canvas.getContext('2d'),data=ctx.createImageData(512,384);
       for(let yy=0;yy<384;yy++)data.data.set(image.pixels.subarray((383-yy)*512*4,(384-yy)*512*4),yy*512*4);
       ctx.putImageData(data,0,0);visuals.push({label:(old?'Before':'After')+' · Fine texture '+noise2,url:canvas.toDataURL()});
      }
     }
    }
    // Attached foreground region: child extends beyond parent in height; compare only its outward-facing edge.
    injection={gap:-10,delta:0};
    const region=[];for(let yy=y-2;yy<=y+2;yy++)for(let xx=x-3;xx<=x;xx++)region.push(yy*512+xx);
    fixtures.push({name:'attached foreground',...await hashes(A.capture(records(-10),{...options,noise2:1.5}),region)});
    injection=null;
    for(const [name,geometry]of [['isolated',[[.5,.375,.17,0]]],['foreground',[[.43,.375,.17,0,101],[.59,.365,.10,.08,202]]]])
     fixtures.push({name,...await hashes(A.capture(geometry,{...options,noise2:1.5,anchor:1}))});
    window.textureDetailVisuals=visuals;
    return {old,crossings,fixtures,profile,glError:gl.getError()};
   },old);
   assert.deepEqual(errors,[],'browser errors');assert.equal(result.glError,0,'GPU readback');results.push(result);
   await page.setViewportSize({width:1048,height:450});
   await page.evaluate(()=>{document.body.innerHTML='';document.head.insertAdjacentHTML('beforeend','<style>body{display:flex;gap:8px;background:#202629;color:white;margin:8px;font:16px monospace}figure{margin:0}img{display:block;width:512px;height:384px;image-rendering:pixelated}</style>');for(const v of textureDetailVisuals){const f=document.createElement('figure'),im=document.createElement('img'),cap=document.createElement('figcaption');im.src=v.url;cap.textContent=v.label;f.append(im,cap);document.body.append(f);}});
   await page.screenshot({path:path.join(os.tmpdir(),'plume-texture-detail-'+(old?'before':'after')+'.png'),fullPage:true});
   await page.close();
  }
  const output=path.join(os.tmpdir(),'plume-texture-detail-regression.json');fs.writeFileSync(output,JSON.stringify(results,null,2));
  const failures=[];
  for(const c of results[0].crossings){
   const d=Math.abs(c.inside.detail-c.outside.detail),g=Math.hypot(...c.inside.gradient.map((v,i)=>v-c.outside.gradient[i]));
   if(d>=.002||g>=.002)failures.push({gap:c.gap,noise2:c.noise2,anchor:c.anchor,smooth:c.smooth,detailJump:d,gradientJump:g});
   assert.equal(c.inside.mask,c.outside.mask,'buried crossing coverage');
  }
  if(results[1])for(const f of results[0].fixtures){
   const b=results[1].fixtures.find(v=>v.name===f.name);assert.equal(f.mask,b.mask,f.name+' coverage must remain bit identical');
   if(!f.name.startsWith('buried')){assert.equal(f.pixels,b.pixels,f.name+' image must remain bit identical');assert.equal(f.field,b.field,f.name+' field must remain bit identical');}
  }
  console.log(JSON.stringify({output,crossings:results[0].crossings.length,baselineCompared:!!results[1],failures},null,2));
  if(process.env.TEXTURE_DIAGNOSTIC_ONLY!=='1')assert.equal(failures.length,0,'buried detail and macro gradients must be continuous');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
