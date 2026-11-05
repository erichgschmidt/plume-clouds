/* Cloud Foundry v2 application additions. Complete app is assembled by build.py.
   The maps-only runtime remains isolated from this authoring implementation. */
const REGIMES={
 cumulus:{name:'Thermal convection',note:'Moist thermals rise, cool, condense and mix with drier air. The scaffold initializes a moisture reservoir; it is not the rendered cloud.',humidity:88,ambientHumidity:54,heat:1.8,lapse:7.2,inversion:7,inversionHeight:1.75,wind:1.0,shear:1.1,entrainment:.65,uplift:2.4,cooling:0,macro:5,spread:1,rise:1,depth:1,iso:.06},
 tower:{name:'Capped deep convection',note:'Stronger warm updrafts meet a stable layer. Warm-liquid approximation only: no ice, rain, lightning or storm microphysics.',humidity:92,ambientHumidity:60,heat:3.0,lapse:8.2,inversion:15,inversionHeight:1.45,wind:.5,shear:2.0,entrainment:.35,uplift:4,cooling:0,macro:4,spread:.8,rise:1.2,depth:1.05,iso:.07},
 stratus:{name:'Layer cooling / stratus',note:'A broad humid layer is cooled toward saturation. Top cooling is prescribed, not a full radiative-transfer calculation.',humidity:96,ambientHumidity:76,heat:0,lapse:4.5,inversion:15,inversionHeight:1.25,wind:1.8,shear:.3,entrainment:.25,uplift:.15,cooling:1.8,macro:6,spread:1.1,rise:.7,depth:1.25,iso:.035},
 orographic:{name:'Orographic lift',note:'A prescribed ridge-shaped vertical forcing lifts moist air. There is no solid mountain boundary or resolved mountain-wave solver in this build.',humidity:95,ambientHumidity:62,heat:.15,lapse:5.2,inversion:8,inversionHeight:1.7,wind:4.5,shear:.4,entrainment:.35,uplift:1.3,cooling:0,macro:5,spread:1.05,rise:.78,depth:1.1,iso:.05},
 front:{name:'Frontal / slantwise lift',note:'A sloping moist layer is lifted by a prescribed large-scale forcing. It is not a resolved collision of full synoptic air masses.',humidity:96,ambientHumidity:69,heat:.2,lapse:5.6,inversion:7,inversionHeight:1.8,wind:2.1,shear:3.3,entrainment:.4,uplift:1.8,cooling:.35,macro:6,spread:1.1,rise:1,depth:1.15,iso:.045}
};
const PHYSICS_KEYS=new Set(['humidity','ambientHumidity','heat','lapse','inversion','inversionHeight','wind','shear','entrainment','uplift','cooling','iso']);
let atmosphere=null,worker=null,workerBusy=false,workerSequence=0,wantedSequence=0,physicsRunning=false,physicsHeld=false,reseedTimer=0,physicsJob=null;
let previewMode='live',authorMode='cloud',liveProgram=null,volumeTextures=new Map(),volumeRevision=0,meshCache=null,meshGL=null,meshProgram=null,meshVAO=null,meshBuffer=null;
let styleTimer=0;
let lastLiveSignature='',lastPreviewTime=0,lastPhysicsRequest=0,physicsReplay=0;
function generate(){
 const r=rng(state.seed),P=[],rr=(a,b)=>a+(b-a)*r();
 const add=(c,s,angle=0,g=0)=>P.push({c:[c[0]*state.spread,c[1]*state.rise,c[2]*state.depth],s:[s[0]*Math.sqrt(state.spread),s[1]*Math.sqrt(state.rise),s[2]*(.7+.3*state.depth)],angle,group:g});
 const N=state.macro;
 for(let i=0;i<N;i++){
  const t=N>1?i/(N-1):.5,x=(t-.5)*4.9+rr(-.20,.20),z=rr(-.65,.7),g=i;
  if(state.preset==='stratus'){
   add([x,rr(-.25,.05),z],[rr(1.0,1.45),rr(.38,.62),rr(.95,1.55)],rr(-.1,.1),g);
   if(i%2===0)add([x+.25,-.45,z+.2],[.9,.44,.9],0,g);
  }else if(state.preset==='orographic'){
   const y=.45+Math.exp(-x*x*.36)*.55;
   add([x,y,z],[1.15,.34+rr(0,.15),1.05],-.10*x,g);
   if(i%2===0)add([x+.18,y+.45,z-.25],[.8,.22,.8],-.08*x,g);
  }else if(state.preset==='front'){
   add([x,x*.31+.15,z],[1.3,.48+rr(0,.15),1.2],.28,g);
   if(i%2===0)add([x-.2,x*.31+.65,z+.25],[.8,.42,.8],.28,g);
  }else{
   const central=Math.exp(-x*x*.50),top=(state.preset==='tower'?2.15:1.65)*central+rr(-.05,.55);
   // A connected thermal moisture path. These are initialization / artist
   // constraints only; condensation and flow determine the final surface.
   const layers=state.preset==='tower'?4:3;
   for(let j=0;j<layers;j++){
    const f=j/(layers-1),yy=-1.2+(top+1.2)*f;
    const radius=(.63+central*.27)*(.76+.34*f)*rr(.86,1.08);
    const lean=state.wind*.035*(yy+1.2)+state.shear*.024*(yy+1.2)**2;
    add([x+lean+rr(-.15,.15),yy,z+rr(-.18,.18)],[radius,rr(.60,.86),radius*rr(.8,1.1)],rr(-.15,.15),g);
   }
  }
 }
 if(['cumulus','tower'].includes(state.preset))add([0,-.35,-.05],[2.7,.68,1.12],0,-1);
 return P.slice(0,MAX_PRIMITIVES-12);
}
function rebuild(){
 primitives=generate().concat(additions).slice(0,MAX_PRIMITIVES);shapeHalfHeight=3.65;sceneRange=8.4;
 shapeRevision++;authorDirty=true;lastLiveSignature='';meshCache=null;markStale();
 $('primitiveCount').textContent=primitives.length+' MOISTURE / SCULPT VOLUMES'+(cuts.length?' · '+cuts.length+' CUTS':'');
 scheduleAtmosphere();
}
function applyPreset(name){
 if(baking)return;const r=REGIMES[name];if(!r)return;
 Object.assign(state,r,{preset:name});delete state.name;delete state.note;
 additions=[];cuts=[];undoStack=[];physicsRunning=false;physicsReplay=0;
 authorYaw=0;authorPitch=0;authorZoom=1;
 syncControls();updateAtmosphereUI();rebuild();
}
function updateAtmosphereUI(){
 $('simResolution').value=state.simResolution;
 $('regimeNote').textContent=REGIMES[state.preset]?.note||'';
 $('runPhysics').textContent=physicsRunning?'Pause formation':'Run formation';$('runPhysics').classList.toggle('active',physicsRunning);
 $('previewLive').classList.toggle('active',previewMode==='live');$('previewBaked').classList.toggle('active',previewMode==='baked');
 $('previewBaked').disabled=!baked;
 $('previewBadge').textContent=previewMode==='live'?'LIVE SOURCE → PIXELS':'FROZEN MAPS · NO VOLUME';
 $('runtimeHud').textContent=previewMode==='live'?'PRE-BAKE / LIVE PIXEL PREVIEW':'FROZEN / MAP-ONLY REPROJECTION';
 $('runtimeInfo').textContent=previewMode==='live'?'Edits appear without baking':'Independent maps renderer';
 $('authorMode').value=authorMode;
}
function makeControls(){
 for(const[group,items]of Object.entries(CONTROL_SPECS))for(const[key,label,min,max,step,suffix='']of items){
  const host=$(group);if(!host)continue;const d=document.createElement('div');d.className='field';
  d.innerHTML=`<label for="c_${key}">${label}<output id="o_${key}"></output></label><input id="c_${key}" type="range" min="${min}" max="${max}" step="${step}">`;
  host.append(d);const el=$('c_'+key);controls[key]={el,out:$('o_'+key),suffix,step};el.value=state[key];updateOutput(key);
  el.addEventListener('input',()=>{
   if(baking){updateOutput(key);return;}state[key]=Number(el.value);updateOutput(key);
   if(group==='shapeControls'||PHYSICS_KEYS.has(key)){physicsRunning=false;updateAtmosphereUI();rebuild();}
   else if(group==='surfaceControls'){authorDirty=true;shapeRevision++;markStale();lastLiveSignature='';if(key==='join')scheduleAtmosphere();else if(key==='billow'||key==='billowScale')scheduleStyle();}
   else if(group==='bakeControls')markStale();
   else{authorDirty=true;lastLiveSignature='';}
  });
 }
}
function startWorker(){
 const url=URL.createObjectURL(new Blob([ATMOSPHERE_WORKER_SOURCE],{type:'text/javascript'}));worker=new Worker(url);URL.revokeObjectURL(url);
 worker.onmessage=e=>{
  const m=e.data;workerBusy=false;
  if(m.type==='error'){physicsRunning=false;notify('Atmosphere: '+m.error,true);physicsJob?.reject(new Error(m.error));physicsJob=null;return;}
  if(m.id<wantedSequence){if(physicsJob){physicsJob.resolve(null);physicsJob=null;}return;}
  atmosphere=m;atmosphere.focus=computeCloudFocus(m);volumeRevision++;shapeRevision++;authorDirty=true;lastLiveSignature='';meshCache=null;markStale();if(autoFocus)focusCloud(true);else focusCloud(false);
  $('empty').style.display='none';$('physicsStatus').textContent=physicsRunning?'EVOLVING':'READY';
  const st=m.stats;$('physicsStats').textContent=`${st.grid.join(' × ')} cells · ${Math.round(st.cellMeters)} m/cell · ${(st.elapsed/60).toFixed(1)} simulated min\nLiquid ${st.maxLiquidGkg.toFixed(2)} g/kg max · ${(st.cloudFraction*100).toFixed(1)}% cloudy cells\n${Math.round(st.computeMs)} ms last solver job · ${st.steps} steps`;
  $('authorInfo').textContent=authorMode==='scaffold'?'Editable moisture envelope':'Condensate-derived volume';
  updateAtmosphereUI();physicsJob?.resolve(m);physicsJob=null;
 };
 worker.onerror=e=>{workerBusy=false;physicsRunning=false;notify('The atmosphere worker stopped: '+e.message,true);physicsJob?.reject(Error(e.message));physicsJob=null;};
}
function scheduleAtmosphere(){
 if(!worker)return;clearTimeout(reseedTimer);wantedSequence=++workerSequence;
 $('physicsStatus').textContent='REBUILDING';
 const id=wantedSequence;
 reseedTimer=setTimeout(()=>{
  if(baking||physicsHeld){scheduleAtmosphere();return;}
  workerBusy=true;worker.postMessage({type:'reset',id,settings:clone(state),primitives:clone(primitives),cuts:clone(cuts),replaySteps:physicsReplay});physicsReplay=0;
 },160);
}
function scheduleStyle(){
 clearTimeout(styleTimer);styleTimer=setTimeout(()=>{
  if(workerBusy||baking||physicsHeld){scheduleStyle();return;}
  styleTimer=0;workerBusy=true;const id=++workerSequence;wantedSequence=id;
  worker.postMessage({type:'style',id,settings:clone(state)});
 },100);
}
function resetAtmosphere(){physicsRunning=false;physicsReplay=0;updateAtmosphereUI();rebuild();}
async function stepAtmosphere(count=1){
 if(workerBusy||baking||physicsHeld)return null;
 workerBusy=true;const id=++workerSequence;wantedSequence=id;$('physicsStatus').textContent='SOLVING';
 return new Promise((resolve,reject)=>{physicsJob={resolve,reject};worker.postMessage({type:'step',count,id});});
}
function volumeUniforms(gl,p,s){
 ui(gl,p,'uHasVolume',atmosphere?1:0);
 if(atmosphere){
  let t=volumeTextures.get(gl);if(!t){t={texture:gl.createTexture(),revision:-1};volumeTextures.set(gl,t);}
  gl.activeTexture(gl.TEXTURE7);gl.bindTexture(gl.TEXTURE_3D,t.texture);
  if(t.revision!==volumeRevision){
   gl.texParameteri(gl.TEXTURE_3D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_3D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
   for(const q of [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T,gl.TEXTURE_WRAP_R])gl.texParameteri(gl.TEXTURE_3D,q,gl.CLAMP_TO_EDGE);
   gl.texImage3D(gl.TEXTURE_3D,0,gl.R16F,...atmosphere.visualGrid,0,gl.RED,gl.FLOAT,atmosphere.visualData);t.revision=volumeRevision;
  }
  ui(gl,p,'uVolume',7);u3(gl,p,'uGridLo',atmosphere.lo);u3(gl,p,'uGridHi',atmosphere.hi);
 }
 uf(gl,p,'uBillow',s.billow);uf(gl,p,'uBillowScale',s.billowScale);uf(gl,p,'uSeed',s.seed*.017);
}
function sdfUniforms(gl,p,s,ps,cs,range){legacySdfUniforms(gl,p,s,ps,cs,range);volumeUniforms(gl,p,s);}
function drawCloudInto(gl,p,canvas,yaw,pitch,half,quality,pixel=false){
 const r=canvas.getBoundingClientRect(),w=Math.max(96,Math.min(quality,Math.round(r.width/(pixel?state.pixelSize:1)))),h=Math.max(72,Math.round(w*r.height/Math.max(1,r.width)));
 if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}
 gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.disable(gl.BLEND);gl.disable(gl.DEPTH_TEST);gl.viewport(0,0,w,h);gl.useProgram(p.p);
 matrix(gl,p,'uBasis',basis(yaw,pitch));u2(gl,p,'uResolution',w,h);uf(gl,p,'uHalfHeight',half);u3(gl,p,'uViewCenter',authorCenter);sdfUniforms(gl,p,state,primitives,cuts,sceneRange);lightUniforms(gl,p,state);gl.drawArrays(gl.TRIANGLES,0,3);
}
function drawAuthor(){
 if(!compiled||!authorDirty||authorPaused||baking)return;
 if(authorMode==='scaffold'||authorMode==='condensate')drawMesh();
 else drawCloudInto(authorGL,authorProgram,$('authorCanvas'),authorYaw,authorPitch,shapeHalfHeight/authorZoom,480,false);
 authorDirty=false;$('authorAngles').textContent=Math.round(authorYaw/DEG)+'° / '+Math.round(authorPitch/DEG)+'°';
}
function drawLive(){
 const signature=[volumeRevision,shapeRevision,state.sunAz,state.sunAlt,state.palette,state.bands,state.ao,state.transmission,state.pixelSize,state.playerX,state.playerY,state.parallax,state.billow,state.erosion,state.inflate,state.normalSmooth,authorYaw,authorPitch,$('runtimeStage').clientWidth,$('runtimeStage').clientHeight].join('|');
 if(signature===lastLiveSignature)return;lastLiveSignature=signature;
 const linked=$('linkView').checked;
 const yaw=linked?authorYaw:state.playerX*state.yawArc*DEG*state.parallax;
 const pitch=linked?authorPitch:state.playerY*state.pitchArc*DEG*state.parallax;
 drawCloudInto(runtime.gl,liveProgram,$('runtimeCanvas'),yaw,pitch,shapeHalfHeight,384,true);
 $('runtimeStats').textContent=`${runtime.canvas.width} × ${runtime.canvas.height} pixels\n${Math.round(yaw/DEG)}° / ${Math.round(pitch/DEG)}° · live geometry`;
}
// A true triangle preview from the scalar zero set. Marching tetrahedra avoids
// lookup-table dependencies. It is a disposable view, not the source of truth.
function polygonize(values,nx,ny,nz,lo,hi,stride=2,channels=1){
 const out=[],nxy=nx*ny,step=hi.map((v,i)=>(v-lo[i])/([nx,ny,nz][i]-1));
 const tetra=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]];
 const corners=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]];
 const edges=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
 const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],sub=(a,b)=>a.map((v,i)=>v-b[i]);
 const pushTri=(a,b,c,outward)=>{let n=cross(sub(b,a),sub(c,a));if(dot(n,outward)<0){[b,c]=[c,b];n=n.map(v=>-v);}const l=Math.hypot(...n)||1;n=n.map(v=>v/l);[a,b,c].forEach((p,k)=>out.push(...p,...n,k===0?1:0,k===1?1:0,k===2?1:0));};
 for(let z=0;z<nz-stride;z+=stride)for(let y=0;y<ny-stride;y+=stride)for(let x=0;x<nx-stride;x+=stride){
  const pos=corners.map(c=>[x+c[0]*stride,y+c[1]*stride,z+c[2]*stride]);const val=pos.map(p=>values[(p[0]+p[1]*nx+p[2]*nxy)*channels]);
  if(val.every(v=>v>=0)||val.every(v=>v<0))continue;const ps=pos.map(p=>p.map((v,i)=>lo[i]+v*step[i]));
  for(const ids of tetra){
   const tv=ids.map(i=>val[i]),tp=ids.map(i=>ps[i]);if(tv.every(v=>v>=0)||tv.every(v=>v<0))continue;
   const ins=[0,1,2,3].filter(i=>tv[i]<0),outs=[0,1,2,3].filter(i=>tv[i]>=0);let ic=[0,0,0],oc=[0,0,0];for(const j of ins)ic=ic.map((v,k)=>v+tp[j][k]/ins.length);for(const j of outs)oc=oc.map((v,k)=>v+tp[j][k]/outs.length);const outward=sub(oc,ic),hits=[];
   for(const[a,b]of edges)if((tv[a]<0)!==(tv[b]<0)){const f=tv[a]/(tv[a]-tv[b]);hits.push(tp[a].map((v,k)=>v+(tp[b][k]-v)*f));}
   if(hits.length===3)pushTri(...hits,outward);else if(hits.length===4){
    const c=[0,0,0];for(const p of hits)for(let k=0;k<3;k++)c[k]+=p[k]/4;
    const ux=sub(hits[0],c),vx=cross(outward,ux);hits.sort((a,b)=>Math.atan2(dot(sub(a,c),vx),dot(sub(a,c),ux))-Math.atan2(dot(sub(b,c),vx),dot(sub(b,c),ux)));
    pushTri(hits[0],hits[1],hits[2],outward);pushTri(hits[0],hits[2],hits[3],outward);
   }
  }
 }
 return new Float32Array(out);
}
const MESH_VERT=`#version 300 es
precision highp float;
layout(location=0)in vec3 position;layout(location=1)in vec3 normal;layout(location=2)in vec3 bary;
uniform mat3 uBasis;uniform vec2 uResolution;uniform float uHalfHeight,uRange;uniform vec3 uCenter;
out vec3 N;out vec3 B;
void main(){vec3 p=transpose(uBasis)*(position-uCenter);gl_Position=vec4(p.x/(uHalfHeight*uResolution.x/uResolution.y),p.y/uHalfHeight,-p.z/uRange,1);N=normal;B=bary;}`;
const MESH_FRAG=`#version 300 es
precision highp float;
in vec3 N;in vec3 B;out vec4 color;
void main(){float light=.38+.62*max(dot(normalize(N),normalize(vec3(-.6,.8,1.0))),0.0);vec3 c=mix(vec3(.21,.38,.40),vec3(.71,.82,.72),light);vec3 d=fwidth(B);vec3 a=smoothstep(vec3(0),d*1.1,B);float edge=min(a.x,min(a.y,a.z));color=vec4(mix(c*.58,c,edge),1);}`;
function getMesh(){
 if(!atmosphere)return new Float32Array();const key=volumeRevision+'-'+authorMode;
 if(meshCache?.key===key)return meshCache.data;
 const a=atmosphere,scaffold=authorMode!=='condensate';const data=polygonize(scaffold?a.scaffold:a.data,a.nx,a.ny,a.nz,a.lo,a.hi,scaffold?3:2,scaffold?1:4);meshCache={key,data};return data;
}
function drawMesh(){
 const gl=authorGL,c=$('authorCanvas'),r=c.getBoundingClientRect(),w=Math.max(96,Math.round(r.width)),h=Math.max(96,Math.round(r.height));if(c.width!==w||c.height!==h){c.width=w;c.height=h;}
 if(!meshProgram){meshProgram=compileProgram(gl,MESH_VERT,MESH_FRAG,'Low-poly source mesh');meshVAO=gl.createVertexArray();meshBuffer=gl.createBuffer();gl.bindVertexArray(meshVAO);gl.bindBuffer(gl.ARRAY_BUFFER,meshBuffer);for(let k=0;k<3;k++){gl.enableVertexAttribArray(k);gl.vertexAttribPointer(k,3,gl.FLOAT,false,36,k*12);}}
 gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.viewport(0,0,w,h);gl.clearColor(.10,.17,.20,1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LESS);gl.disable(gl.CULL_FACE);gl.disable(gl.BLEND);gl.bindVertexArray(meshVAO);gl.bindBuffer(gl.ARRAY_BUFFER,meshBuffer);
 const data=getMesh();gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);gl.useProgram(meshProgram.p);matrix(gl,meshProgram,'uBasis',basis(authorYaw,authorPitch));u2(gl,meshProgram,'uResolution',w,h);uf(gl,meshProgram,'uHalfHeight',shapeHalfHeight/authorZoom);uf(gl,meshProgram,'uRange',sceneRange);u3(gl,meshProgram,'uCenter',authorCenter);gl.drawArrays(gl.TRIANGLES,0,data.length/9);gl.disable(gl.DEPTH_TEST);gl.bindVertexArray(null);
 $('authorInfo').textContent=(data.length/27).toLocaleString()+' triangles · '+(authorMode==='scaffold'?'source envelope':'resolved condensate');
}
function exportOBJ(){
 const was=authorMode;authorMode='scaffold';const data=getMesh();authorMode=was;meshCache=null;const lines=['# Cloud Foundry 2: moisture scaffold, NOT the final cloud surface'];for(let i=0;i<data.length;i+=9)lines.push(`v ${data[i]} ${data[i+1]} ${data[i+2]}`);for(let i=0;i<data.length/9;i+=3)lines.push(`f ${i+1} ${i+2} ${i+3}`);downloadBlob(new Blob([lines.join('\n')],{type:'text/plain'}),'cloud-moisture-scaffold.obj');
}
