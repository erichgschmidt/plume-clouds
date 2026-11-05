'use strict';
/* Cloud Foundry v1.0 — a self-contained SDF authoring / layered-depth bake lab.
   No libraries, network requests, external textures, or build step.
   Author and runtime intentionally use separate WebGL2 contexts.
   SDF-style ellipsoid bounds + smooth unions are approximate signed distances;
   tracing uses conservative safety steps, finite bounds, and iteration limits. */
const VERSION='2.1.0', MAX_PRIMITIVES=72, MAX_CUTS=20, DEG=Math.PI/180;
const $=id=>document.getElementById(id);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const clone=v=>JSON.parse(JSON.stringify(v));
const nextFrame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
const BASE={humidity:88,ambientHumidity:54,heat:1.8,lapse:7.2,inversion:7,inversionHeight:1.75,wind:1,shear:1.1,entrainment:.65,uplift:2.4,cooling:0,iso:.06,billow:.24,billowScale:1.8,simResolution:48,preset:'cumulus',seed:9241,macro:5,children:0,spread:1,rise:1,depth:1,join:.22,inflate:.015,erosion:.012,erosionScale:1.7,normalSmooth:.12,brushRadius:.45,brushDepth:0,sunAz:-42,sunAlt:48,ao:1,transmission:.45,bands:8,palette:'day',playerX:0,playerY:0,parallax:1,breathing:.012,speed:.45,pixelSize:2,bakeRes:256,viewGrid:15,yawArc:14,pitchArc:10,animate:true,autoWalk:false,blendViews:true,hiddenLayer:true,scene:0};
let state=clone(BASE), additions=[], cuts=[], undoStack=[], primitives=[], shapeRevision=0;
let authorYaw=0,authorPitch=0,authorZoom=1,authorDirty=true,authorPaused=false,tool='orbit',authorCenter=[0,0,0],autoFocus=true;
let baked=null,baking=false,cancelRequested=false,shapeHalfHeight=3.0,sceneRange=6.5,clock=0,lastFrame=0,toastTimer;
let authorGL=null,authorProgram=null,bakeProgram=null,runtime=null,compiled=false;
const controls={};
const CONTROL_SPECS={"weatherControls": [["humidity", "Source relative humidity", 45, 110, 1, "%"], ["ambientHumidity", "Ambient relative humidity", 10, 98, 1, "%"], ["heat", "Thermal temperature excess", 0, 6, 0.1, " K"], ["lapse", "Environmental lapse rate", 3, 10, 0.1, " K/km"], ["inversionHeight", "Stable layer begins", 0.5, 2.3, 0.05, " km"], ["inversion", "Inversion addition", 0, 25, 0.5, " K/km"], ["wind", "Horizontal wind", -8, 8, 0.1, " m/s"], ["shear", "Vertical wind shear", -6, 6, 0.1, " m/s/km"], ["uplift", "Prescribed lift strength", 0, 6, 0.1], ["entrainment", "Dry-air mixing", 0, 3, 0.05], ["cooling", "Top cooling forcing", 0, 5, 0.1], ["iso", "Visible liquid threshold", 0.015, 0.4, 0.005, " g/kg"]], "shapeControls": [["macro", "Moisture source patches", 3, 9, 1], ["spread", "Source horizontal extent", 0.5, 1.4, 0.01], ["rise", "Source vertical extent", 0.5, 1.35, 0.01], ["depth", "Source depth", 0.4, 1.5, 0.01]], "surfaceControls": [["billow", "Subgrid billow expansion", 0, 0.8, 0.01], ["billowScale", "Billow spatial frequency", 0.6, 4, 0.05], ["erosion", "Fine edge erosion", 0, 0.2, 0.005], ["erosionScale", "Erosion frequency", 1, 8, 0.1], ["normalSmooth", "Normal smoothing radius", 0.025, 0.25, 0.005], ["inflate", "Artistic inflation", -0.15, 0.45, 0.005], ["join", "Scaffold smooth union", 0.04, 0.6, 0.01]], "brushControls": [["brushRadius", "Brush radius", 0.15, 1.3, 0.025], ["brushDepth", "Brush plane depth", -2.5, 2.5, 0.05]], "lightControls": [["sunAz", "Sun azimuth", -180, 180, 1, "\u00b0"], ["sunAlt", "Sun elevation", -35, 85, 1, "\u00b0"], ["ao", "Recess shading", 0, 2.5, 0.05], ["transmission", "Thin-edge light", 0, 1.5, 0.05], ["bands", "Palette bands (0 = smooth)", 0, 16, 1]], "motionControls": [["playerX", "Camera / player X", -1, 1, 0.01], ["playerY", "Camera elevation", -1, 1, 0.01], ["parallax", "View response", 0, 1.5, 0.05], ["breathing", "Baked map-space breathing", 0, 0.12, 0.005], ["speed", "Baked animation speed", 0, 2, 0.05], ["pixelSize", "Preview pixel scale", 1, 6, 1, "\u00d7"]], "bakeControls": [["yawArc", "Horizontal capture arc \u00b1", 4, 25, 1, "\u00b0"], ["pitchArc", "Vertical capture arc \u00b1", 3, 18, 1, "\u00b0"]]};
const LEGACY_CONTROL_SPECS={
shapeControls:[['macro','Primary masses',3,12,1],['children','Billows per mass',0,4,1],['spread','Horizontal spread',.5,2.2,.01],['rise','Vertical growth',.35,2.2,.01],['depth','Depth separation',.15,2.4,.01]],
surfaceControls:[['join','Smooth union',.015,.65,.005],['inflate','Inflation',-.18,.4,.005],['erosion','Surface erosion',0,.2,.005],['erosionScale','Erosion frequency',.5,5,.05],['normalSmooth','Normal sampling radius',.015,.2,.005]],
brushControls:[['brushRadius','Brush radius',.15,1.3,.025],['brushDepth','Brush plane depth',-3,3,.05]],
lightControls:[['sunAz','Sun azimuth',-180,180,1,'°'],['sunAlt','Sun elevation',-35,85,1,'°'],['ao','Recess AO',0,2.5,.05],['transmission','Edge transmission',0,1.5,.05],['bands','Palette bands (0 = smooth)',0,16,1]],
motionControls:[['playerX','Camera / player X',-1,1,.01],['playerY','Camera elevation',-1,1,.01],['parallax','View response',0,1.5,.05],['breathing','Breathing amplitude',0,.16,.005],['speed','Motion speed',0,2,.05],['pixelSize','Screen pixel size',1,5,1,'×']],
bakeControls:[['yawArc','Horizontal capture arc ±',4,25,1,'°'],['pitchArc','Vertical capture arc ±',3,18,1,'°']]
};
function makeControls(){for(const[group,items]of Object.entries(CONTROL_SPECS)){for(const[key,label,min,max,step,suffix='']of items){const d=document.createElement('div');d.className='field';d.innerHTML=`<label for="c_${key}">${label}<output id="o_${key}"></output></label><input id="c_${key}" type="range" min="${min}" max="${max}" step="${step}">` ;$(group).append(d);const el=$('c_'+key);controls[key]={el,out:$('o_'+key),suffix,step};el.value=state[key];updateOutput(key);el.addEventListener('input',()=>{state[key]=Number(el.value);updateOutput(key);if(group==='shapeControls'||group==='surfaceControls'){rebuild();}else if(group==='bakeControls'){markStale();}else if(group==='lightControls'){authorDirty=true;}if(key==='pixelSize')runtime?.resize();});}}}
function updateOutput(k){const c=controls[k];if(!c)return;const n=state[k];c.el.value=n;c.out.value=(c.step>=1?Math.round(n):n.toFixed(c.step<.01?3:2))+c.suffix;}
function syncControls(){for(const k of Object.keys(controls))updateOutput(k);$('preset').value=state.preset;$('seed').value=state.seed;$('bakeResolution').value=state.bakeRes;$('viewGrid').value=state.viewGrid;for(const k of ['animate','autoWalk','blendViews','hiddenLayer'])$(k).checked=state[k];if($('autoFocus'))$('autoFocus').checked=autoFocus;document.querySelectorAll('[data-light]').forEach(b=>b.classList.toggle('active',b.dataset.light===state.palette));$('assetMode').classList.toggle('active',state.scene===0);$('fieldMode').classList.toggle('active',state.scene===1);updateCaptureControls();}
function updateCaptureControls(){for(const key of ['yawArc','pitchArc']){const input=controls[key]?.el;if(input){input.disabled=state.viewGrid===15;input.title=input.disabled?'The overhead preset uses fixed yaw ±35° and pitches −85° through 20°.':'';}}}
function notify(text,error=false){$('toast').textContent=text;$('toast').className='notice'+(error?' error':'');$('toast').style.display='block';clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').style.display='none',5500);}
function fatal(err){console.error(err);$('errorBox').style.display='block';$('errorBox').textContent='Cloud Foundry could not initialize. A browser with WebGL2 and hardware acceleration is required.\n\n'+(err.stack||err);$('bakeBtn').disabled=true;$('empty').innerHTML='<strong>Renderer unavailable</strong><span>See the error panel above. Try a current desktop browser with hardware acceleration.</span>';}
function rng(seed){let a=seed>>>0;return()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296;};}
function generate(){const r=rng(state.seed),P=[],N=state.macro;const rr=(a,b)=>a+(b-a)*r();const add=(c,s,angle=0,group=0)=>P.push({c,s,angle,group});
for(let i=0;i<N;i++){let x,y,z,rx,ry,rz,angle=0;const t=N>1?i/(N-1):.5;
if(state.preset==='tower'){y=-1.75+t*3.5;x=Math.sin(t*8.6)*.36+rr(-.25,.25);z=rr(-.45,.4);rx=rr(.65,1.05)*(t>.78?1.35:1);ry=rr(.72,.98);rz=rr(.65,.95);}
else if(state.preset==='bank'){x=(t-.5)*5.4;y=rr(-.12,.22);z=rr(-.5,.5);rx=rr(.75,1.15);ry=rr(.35,.65);rz=rr(.6,.95);}
else if(state.preset==='wisps'){x=(t-.5)*5.2;y=Math.sin(t*5.4)*.45+(t-.5)*.8;z=rr(-.6,.6);rx=rr(.85,1.35);ry=rr(.18,.36);rz=rr(.25,.48);angle=.2+rr(-.15,.2);}
else if(state.preset==='islands'){x=(t-.5)*5.4+rr(-.1,.1);y=rr(-1.1,1.15);z=rr(-1.1,1.1);rx=rr(.3,.57);ry=rx*rr(.8,1.25);rz=rx*rr(.9,1.2);}
else if(state.preset==='depth'){const front=i%2===0;let tt=Math.floor(i/2)/Math.max(1,Math.ceil(N/2)-1);x=(tt-.5)*3.2+(front?-.22:.22);y=(front?-.25:.35)+rr(-.12,.12);z=front?1.15:-1.15;rx=front?rr(.42,.62):rr(.72,.95);ry=front?rr(.5,.75):rr(.75,1.05);rz=front?.48:.6;}
else{x=(t-.5)*4.35+rr(-.16,.16);y=.55*Math.sin(t*Math.PI)-.34+rr(-.18,.24);z=rr(-.55,.65);rx=rr(.65,1.04);ry=rx*rr(.8,1.22);rz=rx*rr(.8,1.18);if(i===Math.floor(N*.48)){y+=.20;ry*=1.08;}}
x*=state.spread;y*=state.rise;z*=state.depth;rx*=Math.sqrt(state.spread);ry*=Math.sqrt(state.rise);rz*=.65+.35*state.depth;add([x,y,z],[rx,ry,rz],angle,i);
for(let j=0;j<state.children;j++){let a=rr(0,Math.PI*2),v=rr(-.25,.95),h=Math.sqrt(1-v*v),dx=Math.cos(a)*h,dy=v,dz=Math.sin(a)*h;const size=rr(.30,.53),out=rr(.79,.99);let cs=[rx*size*rr(.8,1.1),ry*size*rr(.9,1.3),rz*size*rr(.9,1.2)];add([x+dx*rx*out,y+dy*ry*out,z+dz*rz*out],cs,angle+rr(-.2,.2),i);}}
if(state.preset==='cumulus'){for(const x of [-1.25,0,1.25])add([x*state.spread,-.52*state.rise,-.12],[1.0*Math.sqrt(state.spread),.48*Math.sqrt(state.rise),.76*(.65+.35*state.depth)],0,-1);}
return P.slice(0,MAX_PRIMITIVES);}
function rebuild(){primitives=generate().concat(additions).slice(0,MAX_PRIMITIVES);let boundX=1,boundY=1,boundZ=1;for(const p of primitives){const margin=state.join+Math.max(state.inflate,0)+state.erosion+.15;boundX=Math.max(boundX,Math.abs(p.c[0])+Math.max(p.s[0],p.s[1])+.2+margin);boundY=Math.max(boundY,Math.abs(p.c[1])+Math.max(p.s[0]*Math.abs(Math.sin(p.angle)),p.s[1])+margin);boundZ=Math.max(boundZ,Math.abs(p.c[2])+p.s[2]+margin);}shapeHalfHeight=Math.max(boundY+boundZ*.2,(boundX+boundZ*.3)/(4/3))*1.07;sceneRange=Math.max(5,Math.hypot(boundX,boundY,boundZ)+.5);shapeRevision++;markStale();authorDirty=true;$('primitiveCount').textContent=primitives.length+' VOLUMES'+(cuts.length?' / '+cuts.length+' CUTS':'');}
function markStale(){if(baked){$('cacheStatus').textContent='SOURCE CHANGED · REBAKE';$('cacheStatus').className='status warn';$('bakeDescription').textContent='The source changed. The 2D renderer is deliberately still using the previous frozen cache.';}else{$('cacheStatus').textContent='NOT BAKED';$('cacheStatus').className='status warn';}}
function applyPreset(name){state.preset=name;const p={cumulus:{macro:5,children:0,spread:1,rise:1,depth:1,join:.22,erosion:.012},tower:{macro:8,children:3,spread:1,rise:1.1,depth:1,join:.2,erosion:.055},bank:{macro:8,children:2,spread:1.1,rise:.8,depth:.9,join:.3,erosion:.012},wisps:{macro:7,children:2,spread:1.15,rise:.75,depth:.6,join:.15,erosion:.035},islands:{macro:8,children:3,spread:1.15,rise:1.05,depth:1.5,join:.065,erosion:.035},depth:{macro:6,children:2,spread:1,rise:1,depth:1.1,join:.14,erosion:.03}}[name];Object.assign(state,{inflate:.015,erosionScale:1.7,normalSmooth:.12},p);additions=[];cuts=[];undoStack=[];authorYaw=0;authorPitch=0;authorZoom=1;syncControls();rebuild();notify('New source family. Bake to update the maps-only preview.');}
function basis(yaw,pitch){const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);return{r:[cy,0,-sy],u:[-sy*sp,cp,-cy*sp],f:[sy*cp,sp,cy*cp]};}

function computeCloudFocus(a){
 if(!a?.visualData?.length)return {center:[0,0,0],half:shapeHalfHeight,count:0};
 const [nx,ny,nz]=a.visualGrid,lo=a.lo,hi=a.hi,data=a.visualData;
 const sx=(hi[0]-lo[0])/Math.max(1,nx-1),sy=(hi[1]-lo[1])/Math.max(1,ny-1),sz=(hi[2]-lo[2])/Math.max(1,nz-1);
 let min=[1e9,1e9,1e9],max=[-1e9,-1e9,-1e9],count=0;
 for(let z=0,i=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++,i++)if(data[i]<0){
   const px=lo[0]+x*sx,py=lo[1]+y*sy,pz=lo[2]+z*sz;
   if(px<min[0])min[0]=px;if(py<min[1])min[1]=py;if(pz<min[2])min[2]=pz;
   if(px>max[0])max[0]=px;if(py>max[1])max[1]=py;if(pz>max[2])max[2]=pz;count++;}
 if(!count)return {center:[0,0,0],half:shapeHalfHeight,count:0};
 min=min.map(v=>v-.08);max=max.map(v=>v+.08);
 const center=min.map((v,i)=>(v+max[i])*.5),ext=max.map((v,i)=>(v-min[i])*.5);
 const half=Math.min(5.5,Math.max(.65,ext[1]*1.18,ext[0]/1.32,ext[2]*.92));
 return {center,half,count,min,max};
}
function focusCloud(forceZoom=false){
 if(!atmosphere)return;
 const f=atmosphere.focus||computeCloudFocus(atmosphere);atmosphere.focus=f;authorCenter=f.center.slice();
 if(forceZoom||autoFocus)authorZoom=clamp(shapeHalfHeight/Math.max(f.half,.1),.45,5.2);
 authorDirty=true;lastLiveSignature='';
 $('authorInfo').textContent=`${authorMode==='scaffold'?'Moisture envelope':'Condensate-derived volume'} · focus ${f.center.map(v=>v.toFixed(2)).join(', ')} · ${f.count.toLocaleString()} cloud voxels`;
}
function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];}
function vadd(a,b){return a.map((v,i)=>v+b[i]);}
function vscale(a,s){return a.map(v=>v*s);}
