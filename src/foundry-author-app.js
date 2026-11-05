let bakePreparing=false;
async function bake(){
 if(baking||bakePreparing||!compiled)return;if(!atmosphere){notify('The atmosphere is still initializing.');return;}
 bakePreparing=true;physicsRunning=false;updateAtmosphereUI();
 try{
 // Resolve an in-flight step before locking the source. All capture views use
 // one immutable accepted volume revision and one set of style uniforms.
 while(workerBusy||(reseedTimer&&$('physicsStatus').textContent==='REBUILDING')||styleTimer){
  if(styleTimer&&!workerBusy&&$('physicsStatus').textContent!=='REBUILDING'){
   clearTimeout(styleTimer);styleTimer=0;workerBusy=true;const id=++workerSequence;wantedSequence=id;
   worker.postMessage({type:'style',id,settings:clone(state)});
  }
  await new Promise(r=>setTimeout(r,40));
 }
 physicsHeld=true;const prev=baked;
 await bakeLegacy();if(baked&&baked!==prev){baked.atmosphere=clone(atmosphere.stats);baked.lighting=clone(state);baked.volumeRevision=volumeRevision;$('exportSprite').disabled=false;previewMode='baked';lastLiveSignature='';updateAtmosphereUI();}
 }finally{physicsHeld=false;bakePreparing=false;}
}
function recipeObject(){return{format:'smashyblocks.cloud-foundry.recipe',version:VERSION,state:clone(state),additions:clone(additions),cuts:clone(cuts),evolvedSteps:atmosphere?.stats.steps||0,simulation:'warm-liquid coarse authoring model; deterministic fixed 2-second steps',savedMode:'settings + initial moisture scaffold + step-count replay, not a binary solver checkpoint'};}
function spritePixels(view=0){
 if(!baked)throw Error('Bake a volume first');const a=baked,gl=runtime.gl,p=runtime.program,w=a.w,h=a.h;
 const f=gl.createFramebuffer(),t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA8,w,h,0,gl.RGBA,gl.UNSIGNED_BYTE,null);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);gl.bindFramebuffer(gl.FRAMEBUFFER,f);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,t,0);
 if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE)throw Error('Sprite framebuffer incomplete');
 gl.viewport(0,0,w,h);gl.disable(gl.BLEND);gl.useProgram(p.p);
 for(let i=0;i<4;i++){gl.activeTexture(gl.TEXTURE0+i);gl.bindTexture(gl.TEXTURE_2D_ARRAY,runtime.textures[i]);ui(gl,p,['uDepth0','uNormal0','uDepth1','uNormal1'][i],i);}
 u2(gl,p,'uResolution',w,h);u2(gl,p,'uMapSize',w,h);u2(gl,p,'uArc',a.yawArc*DEG,a.pitchArc*DEG);u2(gl,p,'uAngles',a.views[view].yaw*DEG,a.views[view].pitch*DEG);u2(gl,p,'uCenter',0,0);uf(gl,p,'uCloudScale',1);uf(gl,p,'uAtmosphere',0);uf(gl,p,'uHalfHeight',a.halfHeight);uf(gl,p,'uRange',a.range);uf(gl,p,'uTime',0);uf(gl,p,'uBreathing',0);ui(gl,p,'uGrid',a.grid);if(a.grid===15)gl.uniform2fv(loc(gl,p,'uViewAngles[0]'),new Float32Array(a.views.flatMap(v=>[v.yaw*DEG,v.pitch*DEG])));ui(gl,p,'uBlendViews',0);ui(gl,p,'uHiddenLayer',1);lightUniforms(gl,p,state);gl.drawArrays(gl.TRIANGLES,0,3);
 const raw=new Uint8Array(w*h*4),out=new Uint8Array(w*h*4);gl.readPixels(0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,raw);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4,o=((h-1-y)*w+x)*4,alpha=raw[i+3];out[o+3]=alpha;for(let k=0;k<3;k++)out[o+k]=alpha?Math.min(255,Math.round(raw[i+k]*255/alpha)):0;}
 gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.deleteFramebuffer(f);gl.deleteTexture(t);lastLiveSignature='';return{w,h,bytes:out};
}
function exportSprite(){if(!baked)return;const view=baked.views.findIndex(v=>v.yaw===0&&v.pitch===0),sp=spritePixels(Math.max(view,0));downloadBlob(new Blob([pngRGBA(sp.w,sp.h,sp.bytes)],{type:'image/png'}),'cloud-sprite-rgba.png');}
async function exportPack(){
 if(!baked)return;const button=$('exportPack');button.disabled=true;
 try{
  await nextFrame();const names=['depth0','normal0','depth1','normal1'],files=[];
  for(let i=0;i<4;i++){const at=atlasBytes(baked,i);files.push(['maps/'+names[i]+'.png',pngRGBA(at.w,at.h,at.bytes)],['raw/'+names[i]+'.rgba',concatBytes(baked.data.map(v=>v[i]))]);}
  const cols=baked.grid===1?1:3,rows=Math.ceil(baked.views.length/cols),w=baked.w*cols,h=baked.h*rows,atlas=new Uint8Array(w*h*4);
  for(let v=0;v<baked.views.length;v++){const sp=spritePixels(v);files.push([`sprites/view-${String(v).padStart(2,'0')}.png`,pngRGBA(sp.w,sp.h,sp.bytes)]);for(let y=0;y<sp.h;y++)atlas.set(sp.bytes.subarray(y*sp.w*4,(y+1)*sp.w*4),((Math.floor(v/cols)*sp.h+y)*w+(v%cols)*sp.w)*4);}
  files.push(['sprites/color-atlas.png',pngRGBA(w,h,atlas)]);
  files.push(['manifest.json',JSON.stringify(manifest(baked),null,2)],['recipe.json',JSON.stringify(baked.recipe,null,2)],['shaders/fullscreen.vert',FULLSCREEN_VERT],['shaders/cloud_runtime.frag',RUNTIME_FRAG],['shaders/background.frag',BACKGROUND_FRAG],['runtime.js',runtimeSource()],['README.txt',PACKAGE_README+'\n\nV2 additions: sprites/*.png are PRELIT display-color RGBA, straight alpha, top-down. They use the current lighting controls when exported, NOT baked.light settings. The four geometric data textures remain unlit. No animation states are captured. A multi-view atlas encodes viewing angles, not time.\n'],['formation.json',JSON.stringify(baked.atmosphere,null,2)]);
  downloadBlob(zipFiles(files),'cloud-foundry-v2-'+baked.recipe.state.preset+'-game-asset.zip');
 }catch(e){notify(e.message,true);}finally{button.disabled=false;}
}
function manifest(a){const m=legacyManifest(a);m.version=VERSION;m.source='warm-cloud moisture / temperature / velocity simulation converted to a condensate isosurface, then artist-controlled subgrid shaping';m.simulation=a.atmosphere||null;m.sprites={format:'PNG RGBA8 straight alpha',color:'prelit display color; no gamma chunk',layout:'same view order and atlas layout as data maps',timeAnimation:false,viewAngleAtlas:true};m.limitations[1]='The render field is an approximate sampled distance guide plus explicit artistic billow/erosion displacement. It is not an exact analytic SDF.';m.limitations.push('Formation is warm-liquid only, coarse and art-directed; no ice, rain, exact mass conservation during advection, or meteorological validation.');return m;}
function bindNewUI(){
 $('useInSky').onclick=()=>useInSky().catch(e=>notify(e.message,true));
 $('exportSky').onclick=exportSky;
 $('runPhysics').onclick=()=>{if(baking)return;physicsRunning=!physicsRunning;updateAtmosphereUI();};
 $('stepPhysics').onclick=()=>stepAtmosphere(10);$('resetPhysics').onclick=resetAtmosphere;
 $('previewLive').onclick=()=>{previewMode='live';lastLiveSignature='';updateAtmosphereUI();};
 $('previewBaked').onclick=()=>{if(baked){previewMode='baked';updateAtmosphereUI();}};
 $('linkView').onchange=()=>lastLiveSignature='';
 $('authorMode').onchange=e=>{authorMode=e.target.value;meshCache=null;authorDirty=true;updateAtmosphereUI();};
 $('exportOBJ').onclick=exportOBJ;$('exportSprite').onclick=exportSprite;
 $('simResolution').onchange=e=>{state.simResolution=+e.target.value;resetAtmosphere();};
 $('fileInput').onchange=async e=>{try{const f=e.target.files?.[0];if(!f)return;if(f.size>2500000)throw Error('Recipe exceeds 2.5 MB');const obj=JSON.parse(await f.text()),parsed=validateRecipe(obj);clearTimeout(styleTimer);styleTimer=0;state=parsed.s;additions=parsed.add;cuts=parsed.cut;undoStack=[];physicsRunning=false;physicsReplay=obj.evolvedSteps||0;previewMode='live';syncControls();updateAtmosphereUI();rebuild();notify('Rebuilding the saved formation recipe. Versions and numerical settings must match for exact replay.');}catch(err){notify(err.message,true);}finally{e.target.value='';}};
 $('exportShot').onclick=()=>{const c=$('runtimeCanvas');if(previewMode==='live')drawLive();else runtime.render(state,clock);c.toBlob(b=>b&&downloadBlob(b,'cloud-foundry-v2-preview.png'));};
}
function tick(ms){
 const dt=Math.min(.05,(ms-lastFrame)/1000||0);lastFrame=ms;if(state.animate)clock+=dt*state.speed;
 if(state.autoWalk){state.playerX=Math.sin(clock*.22);state.playerY=Math.sin(clock*.13)*.4;updateOutput('playerX');updateOutput('playerY');}
 if(keys.size){state.playerX=clamp(state.playerX+((keys.has('ArrowRight')?1:0)-(keys.has('ArrowLeft')?1:0))*dt*.6,-1,1);state.playerY=clamp(state.playerY+((keys.has('ArrowUp')?1:0)-(keys.has('ArrowDown')?1:0))*dt*.6,-1,1);updateOutput('playerX');updateOutput('playerY');}
 try{
  drawAuthor();if(!baking){if(previewMode==='live')drawLive();else{runtime?.render(state,clock);if(runtime&&baked)$('runtimeStats').textContent=`${runtime.canvas.width} × ${runtime.canvas.height} pixels\n${baked.views.length} frozen views · maps only`;}}
  if(physicsRunning&&!workerBusy&&!baking&&!physicsHeld&&ms-lastPhysicsRequest>110){lastPhysicsRequest=ms;stepAtmosphere(2).catch(e=>notify(e.message,true));}
 }catch(e){console.error(e);notify(e.message,true);physicsRunning=false;}
 requestAnimationFrame(tick);
}
async function boot(){
 makeControls();buildMapCards();bindUI();bindNewUI();syncControls();updateAtmosphereUI();
 try{
  authorGL=context($('authorCanvas'));if(authorGL.getParameter(authorGL.MAX_DRAW_BUFFERS)<4)throw Error('Four render attachments are required.');
  authorProgram=compileProgram(authorGL,FULLSCREEN_VERT,AUTHOR_FRAG,'Condensate cloud');bakeProgram=compileProgram(authorGL,FULLSCREEN_VERT,BAKE_FRAG,'Layered capture');
  runtime=new CloudRuntime($('runtimeCanvas'));liveProgram=compileProgram(runtime.gl,FULLSCREEN_VERT,AUTHOR_FRAG,'Live pixel preview');compiled=true;
  for(const c of [$('authorCanvas'),$('runtimeCanvas')])c.addEventListener('webglcontextlost',e=>{e.preventDefault();compiled=false;physicsRunning=false;notify('GPU context lost. Save the recipe and reload.',true);});
  startWorker();rebuild();requestAnimationFrame(tick);
 }catch(e){fatal(e);}
}
window.CloudFoundry={
 get state(){return clone(state);},get asset(){return baked;},get busy(){return baking||workerBusy;},get atmosphere(){return atmosphere;},get renderer(){return runtime;},
 set(patch){Object.assign(state,patch);syncControls();rebuild();},preset:applyPreset,step:stepAtmosphere,bake,
 setPreview(mode){previewMode=mode;lastLiveSignature='';updateAtmosphereUI();},setAuthorMode(mode){authorMode=mode;authorDirty=true;meshCache=null;updateAtmosphereUI();},
 recipe:recipeObject,manifest:()=>baked?manifest(baked):null,spritePixels,runtimeSource,exportRuntimeHTML:()=>baked?runtimeHTML(baked,state):null,
 stats:()=>({revision:shapeRevision,bakedRevision:baked?.revision,volumeRevision,workerBusy,physicsRunning,previewMode,authorMode,formation:atmosphere?.stats,glError:runtime?.gl.getError(),authorError:authorGL?.getError()})
};
async function useInSky(){
 if(!baked)throw Error('Bake a cloud before sending it to the sky.');
 FoundryAssets.validate(baked);await FoundryAssets.save(baked,'active');
 notify('Cloud saved for the sky editor. Open sky to use this frozen asset.');return baked;
}
function exportSky(){
 if(!baked)return;
 downloadBlob(new Blob([FoundryAssets.stringify(baked)],{type:'application/json'}),'cloud-foundry-sky-asset.json');
}
window.FoundryAuthor=window.CloudFoundry;
FoundryAuthor.getAsset=()=>baked;FoundryAuthor.useInSky=useInSky;FoundryAuthor.getAtlas=(map=0)=>atlasBytes(baked,map);
FoundryAuthor.setMotion=patch=>{for(const k of ['speed','animate','autoWalk','playerX','playerY'])if(k in patch)state[k]=patch[k];syncControls();};
boot();
