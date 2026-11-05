/* Asset-backed sky renderer. All runtime geometry comes from frozen 2D maps. */
(function(global){
'use strict';
const DEG=Math.PI/180;
const finite=(v,d)=>Number.isFinite(v)?v:d;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function basis(yaw,pitch){const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);return new Float32Array([cy,0,-sy,-sy*sp,cp,-cy*sp,sy*cp,sp,cy*cp]);}
function selectViews(capture,yaw,pitch){
 const axis=(key,value)=>{const values=[...new Set(capture.map(v=>v[key]))].sort((a,b)=>a-b);let lo=values[0],hi=values[values.length-1];for(const v of values){if(v<=value)lo=v;if(v>=value){hi=v;break;}}const t=hi===lo?0:clamp((value-lo)/(hi-lo),0,1);return [[lo,1-t],[hi,t]];};
 const corners=[];let complete=true;
 for(const [y,wy]of axis('yaw',yaw))for(const [p,wp]of axis('pitch',pitch)){
  if(wy*wp<=0)continue;const i=capture.findIndex(v=>v.yaw===y&&v.pitch===p);
  if(i<0){complete=false;break;}const existing=corners.find(v=>v.i===i);if(existing)existing.weight+=wy*wp;else corners.push({i,weight:wy*wp});
 }
 // Rectangular captures have fixed corner identities through a cell. A view
 // reaches zero weight before leaving the stencil, including at grid lines.
 if(complete&&corners.length)return corners;
 const ranked=capture.map((v,i)=>({i,d:Math.acos(clamp(Math.cos(pitch)*Math.cos(v.pitch)*Math.cos(yaw-v.yaw)+Math.sin(pitch)*Math.sin(v.pitch),-1,1))})).sort((a,b)=>a.d-b.d);
 if(ranked[0].d<1e-7)return [{i:ranked[0].i,weight:1}];
 const radius=ranked[4]?.d||Math.PI+1,selected=ranked.slice(0,4);
 for(const v of selected)v.weight=Math.pow(Math.max(0,1/v.d-1/radius),2);
 let sum=selected.reduce((s,v)=>s+v.weight,0);
 if(sum<1e-20){selected.forEach(v=>v.weight=1);sum=selected.length;}
 return selected.map(v=>({i:v.i,weight:v.weight/sum}));
}
function captureDepthBounds(level,range){
 return level.data.map(maps=>{
  let min=Infinity,max=-Infinity,left=level.w,right=0,bottom=level.h,top=0;
  for(const layer of [0,2])for(let i=0;i<maps[layer].length;i+=4)if(maps[layer+1][i+3]>127){
   const front=((maps[layer][i]*256+maps[layer][i+1])/65535*2-1)*range;
   const back=((maps[layer][i+2]*256+maps[layer][i+3])/65535*2-1)*range;
   min=Math.min(min,front,back);max=Math.max(max,front,back);
   const pixel=i/4,x=pixel%level.w,y=Math.floor(pixel/level.w);left=Math.min(left,x);right=Math.max(right,x+1);bottom=Math.min(bottom,y);top=Math.max(top,y+1);
  }
  // Tangent reconstruction reaches the texel boundary. Bounds also include
  // one texel of numerical/sampling slack; empty captures remain inexpensive.
  const margin=4*level.halfHeight/level.h;
  const bounds=Number.isFinite(min)?[min-margin,max+margin]:[0,0];
  bounds.xy=Number.isFinite(min)?[(left/level.w-.5)*2*level.halfHeight*level.w/level.h-margin,(bottom/level.h-.5)*2*level.halfHeight-margin,(right/level.w-.5)*2*level.halfHeight*level.w/level.h+margin,(top/level.h-.5)*2*level.halfHeight+margin]:[0,0,0,0];
  return bounds;
 });
}
function validateAsset(a){
 if(!a||!Number.isInteger(a.w)||!Number.isInteger(a.h)||a.w<1||a.h<1||a.w>1024||a.h>1024)throw Error('Cloud maps require integer dimensions 1–1024, matching the asset format.');
 if(!Number.isFinite(a.halfHeight)||a.halfHeight<=0||!Number.isFinite(a.range)||a.range<=0)throw Error('Cloud maps require positive halfHeight and range.');
 if(!Array.isArray(a.views)||a.views.length<1||a.views.length>64)throw Error('Cloud maps require 1–64 explicit capture views.');
 if(!Array.isArray(a.data)||a.data.length!==a.views.length)throw Error('Cloud map view count does not match capture metadata.');
 for(const v of a.views)if(!v||!Number.isFinite(v.yaw)||!Number.isFinite(v.pitch))throw Error('Cloud capture angles must be finite degrees.');
 if(a.lods!==undefined&&!Array.isArray(a.lods))throw Error('Cloud LODs must be an array.');
 let total=0;
 for(const level of [a,...(a.lods||[])]){
  if(!level||!Number.isInteger(level.w)||!Number.isInteger(level.h)||level.w<1||level.h<1||level.w>a.w||level.h>a.h)throw Error('Cloud LOD dimensions must not exceed the master capture.');
  const bytes=level.w*level.h*4;
  for(const maps of [level.data,...(level.lighting===undefined?[]:[level.lighting])]){
   if(!Array.isArray(maps)||maps.length!==a.views.length)throw Error('Cloud LOD map count does not match capture metadata.');
   for(const view of maps)if(!Array.isArray(view)||view.length!==4||view.some(d=>!(d instanceof Uint8Array)||d.length!==bytes))throw Error('Each cloud capture requires four exact-size Uint8Array RGBA maps.');
   total+=bytes*4*a.views.length;
  }
 }
 if(total>160*1024*1024)throw Error('Cloud maps exceed the 160 MiB memory budget.');
 return total;
}
function program(gl,vertex,fragment){
 const shaders=[];let p;
 try{
  for(const [type,source] of [[gl.VERTEX_SHADER,vertex],[gl.FRAGMENT_SHADER,fragment]]){const s=gl.createShader(type);shaders.push(s);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error('Baked cloud shader: '+gl.getShaderInfoLog(s));}
  p=gl.createProgram();shaders.forEach(s=>gl.attachShader(p,s));gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw Error('Baked cloud program: '+gl.getProgramInfoLog(p));
  return {p,loc:new Map()};
 }catch(e){if(p)gl.deleteProgram(p);throw e;}finally{shaders.forEach(s=>gl.deleteShader(s));}
}
class BakedCloudRenderer{
 constructor(canvas){
  if(!global.FoundryShaders)throw Error('Load foundry-shaders.js before foundry-renderer.js.');
  this.canvas=canvas;this.gl=canvas.getContext('webgl2',{alpha:false,antialias:false,premultipliedAlpha:false});
  if(!this.gl)throw Error('Baked clouds require WebGL2.');
  this.asset=null;this.textures=[];this.levels=[];this.lodState=new Map();this.target=null;this.lost=false;this.error=null;
  this.stats={drawn:0,culled:0,clampedViews:0,assetBytes:0,views:0,shadowSamples:12};
  this._lost=e=>{e.preventDefault();this.lost=true;this.error='Cloud GPU context lost; waiting for restoration.';};
  this._restored=()=>{try{this.textures=[];this.target=null;this._init();if(this.asset)this.load(this.asset);this.lost=false;this.error=null;}catch(e){this.error=e.message;this.lost=true;}};
  canvas.addEventListener('webglcontextlost',this._lost);canvas.addEventListener('webglcontextrestored',this._restored);
  this._init();
 }
 _init(){
  const gl=this.gl;
  if(!gl.getExtension('EXT_color_buffer_float'))throw Error('Baked cloud depth/shadow buffers require EXT_color_buffer_float.');
  if(gl.getParameter(gl.MAX_DRAW_BUFFERS)<2)throw Error('Baked clouds require two render targets.');
  this.cloud=program(gl,global.FoundryShaders.vertex,global.FoundryShaders.cloud);
  this.post=program(gl,global.FoundryShaders.vertex,global.FoundryShaders.post);
  gl.disable(gl.DITHER);gl.disable(gl.CULL_FACE);
 }
 _u(p,name,kind,...v){const gl=this.gl;if(!p.loc.has(name))p.loc.set(name,gl.getUniformLocation(p.p,name));const loc=p.loc.get(name);if(loc===null)return;if(kind==='m3')gl.uniformMatrix3fv(loc,false,v[0]);else gl['uniform'+kind](loc,...v);}
 load(asset){
  const bytes=validateAsset(asset),gl=this.gl;
  if(asset.w>gl.getParameter(gl.MAX_TEXTURE_SIZE)||asset.h>gl.getParameter(gl.MAX_TEXTURE_SIZE)||asset.views.length>gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS))throw Error('Cloud asset exceeds this GPU texture limits.');
  const next=[],levels=[];
  try{
   gl.pixelStorei(gl.UNPACK_ALIGNMENT,1);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);
   // Serialized LODs may be smallest-first. Selection always walks downward
   // from the master without modifying the imported asset's ordering.
   const lods=[...(asset.lods||[])].sort((a,b)=>b.h-a.h||b.w-a.w);
   for(const level of [asset,...lods]){
    const record={w:level.w,h:level.h,textures:[],hasLighting:!!level.lighting,bounds:captureDepthBounds({...level,halfHeight:asset.halfHeight},asset.range)};levels.push(record);
    for(let m=0;m<(record.hasLighting?8:4);m++){
    const t=gl.createTexture();next.push(t);record.textures.push(t);gl.bindTexture(gl.TEXTURE_2D_ARRAY,t);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_BASE_LEVEL,0);gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_MAX_LEVEL,0);
    gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.texImage3D(gl.TEXTURE_2D_ARRAY,0,gl.RGBA8,level.w,level.h,asset.views.length,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
    for(let i=0;i<asset.views.length;i++)gl.texSubImage3D(gl.TEXTURE_2D_ARRAY,0,0,0,i,level.w,level.h,1,gl.RGBA,gl.UNSIGNED_BYTE,m<4?level.data[i][m]:level.lighting[i][m-4]);
    }
   }
   const error=gl.getError();if(error!==gl.NO_ERROR)throw Error('Cloud map upload failed: GL '+error);
  }catch(e){next.forEach(t=>gl.deleteTexture(t));throw e;}
  this.textures.forEach(t=>gl.deleteTexture(t));this.textures=next;this.levels=levels;this.lodState.clear();this.asset=asset;
  this.capture=asset.views.map(v=>({yaw:v.yaw*DEG,pitch:v.pitch*DEG,basis:basis(v.yaw*DEG,v.pitch*DEG)}));
  this.renderBounds=this.capture.map((_,i)=>{const bounds=levels.map(l=>l.bounds[i]),all=[Math.min(...bounds.map(b=>b[0])),Math.max(...bounds.map(b=>b[1]))];all.xy=[Math.min(...bounds.map(b=>b.xy[0])),Math.min(...bounds.map(b=>b.xy[1])),Math.max(...bounds.map(b=>b.xy[2])),Math.max(...bounds.map(b=>b.xy[3]))];return all;});
  // Supported angles are a non-wrapped capture rectangle, not a full orbit.
  // Out-of-range cameras keep moving in the sky while the asset view holds.
  this.angleBounds={yaw:[Math.min(...this.capture.map(v=>v.yaw)),Math.max(...this.capture.map(v=>v.yaw))],pitch:[Math.min(...this.capture.map(v=>v.pitch)),Math.max(...this.capture.map(v=>v.pitch))]};
  Object.assign(this.stats,{assetBytes:bytes,views:asset.views.length,levels:levels.length,hasLighting:!!asset.lighting});
 }
 _selectLod(id,projectedHeight,mode){
  if(mode==='full'){this.lodState.set(id,0);return 0;}
  let index=this.lodState.get(id);
  if(index===undefined){index=0;while(index+1<this.levels.length&&this.levels[index+1].h>=projectedHeight)index++;}
  else{
   while(index>0&&projectedHeight>this.levels[index].h*1.12)index--;
   while(index+1<this.levels.length&&projectedHeight<this.levels[index+1].h*.84)index++;
  }
  this.lodState.set(id,index);return index;
 }
 _freeTarget(){const gl=this.gl,t=this.target;if(!t)return;gl.deleteFramebuffer(t.fbo);gl.deleteTexture(t.color);gl.deleteTexture(t.surface);gl.deleteRenderbuffer(t.depth);this.target=null;}
 _resize(pixelSize){
  const gl=this.gl,r=this.canvas.getBoundingClientRect(),px=Math.max(1,finite(pixelSize,1));
  const grid=global.FoundryPixelGrid?global.FoundryPixelGrid.measure(this.canvas,px):null;
  const w=clamp(grid?grid.width:Math.round(r.width/px),1,4096),h=clamp(grid?grid.height:Math.round(r.height/px),1,4096);
  this.stats.grid=grid?{width:w,height:h,scale:grid.scale,dpr:grid.dpr}:{width:w,height:h};
  if(this.target&&this.canvas.width===w&&this.canvas.height===h)return;
  this.canvas.width=w;this.canvas.height=h;this._freeTarget();
  const t={fbo:gl.createFramebuffer(),depth:gl.createRenderbuffer(),color:null,surface:null};this.target=t;
  gl.bindFramebuffer(gl.FRAMEBUFFER,t.fbo);
  for(const [key,index,format,type] of [['color',0,gl.RGBA8,gl.UNSIGNED_BYTE],['surface',1,gl.RGBA32F,gl.FLOAT]]){
   t[key]=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t[key]);gl.texImage2D(gl.TEXTURE_2D,0,format,w,h,0,gl.RGBA,type,null);
   gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
   gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
   gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+index,gl.TEXTURE_2D,t[key],0);
  }
  gl.bindRenderbuffer(gl.RENDERBUFFER,t.depth);gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT24,w,h);gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,t.depth);
  gl.drawBuffers([gl.COLOR_ATTACHMENT0,gl.COLOR_ATTACHMENT1]);
  if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE){this._freeTarget();throw Error('Baked cloud scene framebuffer is incomplete.');}
  this.stats.bufferBytes=w*h*24;
 }
 render(instances,time,settings={}){
  if(this.lost)return;
  this._resize(settings.pixelSize);const gl=this.gl,w=this.canvas.width,h=this.canvas.height,aspect=w/h;
  const az=finite(settings.sunAz,-42)*DEG,alt=finite(settings.sunAlt,48)*DEG;
  const light=[Math.cos(alt)*Math.sin(az),Math.sin(alt),Math.cos(alt)*Math.cos(az)];
  const sky=Array.isArray(settings.skyColor)?settings.skyColor:[.08,.43,.53];
  gl.viewport(0,0,w,h);gl.bindFramebuffer(gl.FRAMEBUFFER,this.target.fbo);gl.disable(gl.SCISSOR_TEST);gl.disable(gl.BLEND);
  gl.clearBufferfv(gl.COLOR,0,new Float32Array(4));gl.clearBufferfv(gl.COLOR,1,new Float32Array(4));gl.clearBufferfv(gl.DEPTH,0,new Float32Array([1]));
  gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LESS);gl.depthMask(true);this.stats.drawn=0;this.stats.culled=0;this.stats.clampedViews=0;
  if(this.asset){
   const a=this.asset,p=this.cloud;gl.useProgram(p.p);
   this._u(p,'uAspect','1f',aspect);this._u(p,'uMapAspect','1f',a.w/a.h);this._u(p,'uHalfHeight','1f',a.halfHeight);this._u(p,'uRange','1f',a.range);
   this._u(p,'uLight','3f',...light);this._u(p,'uAO','1f',finite(settings.ao,1));this._u(p,'uTransmission','1f',finite(settings.transmission,.45));this._u(p,'uBands','1f',finite(settings.bands,0));
   this._u(p,'uPalette','1i',settings.palette==='dusk'?1:settings.palette==='moon'?2:0);
   const breathing=clamp(finite(settings.breathing,0),0,.2);this._u(p,'uBreathing','1f',breathing);
   gl.enable(gl.SCISSOR_TEST);
   let instanceIndex=0,boundLevel=-1;const activeIds=new Set();this.stats.lodCounts=this.levels.map(()=>0);
   for(const it of instances){instanceIndex++;
    if(!it||![it.x,it.y,it.scale,it.distance].every(Number.isFinite)||it.scale<=0||it.distance<=0||finite(it.opacity,1)<=0){this.stats.culled++;continue;}
    const centerX=settings.pixelSnap?Math.round(it.x*h/2)*2/h:it.x,centerY=settings.pixelSnap?Math.round(it.y*h/2)*2/h:it.y;
    const requestedYaw=finite(it.yaw,0)*DEG,requestedPitch=finite(it.pitch,0)*DEG;
    let yaw=clamp(requestedYaw,...this.angleBounds.yaw),pitch=clamp(requestedPitch,...this.angleBounds.pitch);
    const ranked=this.capture.map((v,i)=>({i,d:Math.acos(clamp(Math.cos(pitch)*Math.cos(v.pitch)*Math.cos(yaw-v.yaw)+Math.sin(pitch)*Math.sin(v.pitch),-1,1))})).sort((a,b)=>a.d-b.d);
    const first=ranked[0],s0=this.capture[first.i];
    // Sparse arbitrary capture sets may leave holes inside their rectangle.
    // Hold the nearest capture rather than extrapolating an unsupported ray.
    if(first.d>40*DEG){yaw=s0.yaw;pitch=s0.pitch;}
    const selected=selectViews(this.capture,yaw,pitch),sources=selected.map(v=>this.capture[v.i]);
    if(Math.abs(yaw-requestedYaw)>1e-7||Math.abs(pitch-requestedPitch)>1e-7)this.stats.clampedViews++;
    // Conservative rectangle includes rotation of the complete baked depth box.
    const target=basis(yaw,pitch);let rx=0,ry=0;
    for(const entry of selected){const src=this.capture[entry.i],bounds=this.renderBounds[entry.i];for(const x of [bounds.xy[0],bounds.xy[2]])for(const y of [bounds.xy[1],bounds.xy[3]])for(const z of bounds){
     const q=[0,1,2].map(k=>src.basis[k]*x+src.basis[3+k]*y+src.basis[6+k]*z);
     rx=Math.max(rx,Math.abs(q[0]*target[0]+q[1]*target[1]+q[2]*target[2]));ry=Math.max(ry,Math.abs(q[0]*target[3]+q[1]*target[4]+q[2]*target[5]));
    }}
    rx=(rx/a.halfHeight+breathing*1.4)*it.scale;ry=(ry/a.halfHeight+breathing)*it.scale;
    const rect=[Math.max(-1,(centerX-rx)/aspect),Math.max(-1,centerY-ry),Math.min(1,(centerX+rx)/aspect),Math.min(1,centerY+ry)];
    if(rect[0]>=rect[2]||rect[1]>=rect[3]){this.stats.culled++;continue;}
    const id=it.id===undefined?instanceIndex:it.id;activeIds.add(id);
    const lod=this._selectLod(id,it.scale*h,settings.detailMode),level=this.levels[lod];this.stats.lodCounts[lod]++;
    if(lod!==boundLevel){
     const names=['uDepth0','uNormal0','uDepth1','uNormal1','uLightPos0','uLightNeg0','uLightPos1','uLightNeg1'];
     for(let i=0;i<8;i++){gl.activeTexture(gl.TEXTURE0+i);gl.bindTexture(gl.TEXTURE_2D_ARRAY,level.textures[i]||level.textures[0]);this._u(p,names[i],'1i',i);}
     this._u(p,'uHasLighting','1i',level.hasLighting?1:0);this._u(p,'uSixWay','1f',level.hasLighting?clamp(finite(settings.sixWay,1),0,1):0);boundLevel=lod;
    }
    const x=Math.floor((rect[0]+1)*w/2),y=Math.floor((rect[1]+1)*h/2),right=Math.ceil((rect[2]+1)*w/2),top=Math.ceil((rect[3]+1)*h/2);
    gl.scissor(x,y,right-x,top-y);
    this._u(p,'uRect','4f',...rect);this._u(p,'uCenter','2f',centerX,centerY);this._u(p,'uScale','1f',it.scale);this._u(p,'uDistance','1f',it.distance);
    this._u(p,'uInstance','1f',instanceIndex);
    this._u(p,'uDepthScale','1f',finite(it.depthScale,it.scale*it.distance/a.halfHeight));
    this._u(p,'uOpacity','1f',clamp(finite(it.opacity,1),0,1));this._u(p,'uTime','1f',finite(time,0)+finite(it.phase,0));
    this._u(p,'uTarget','m3',target);
    for(let k=0;k<4;k++)this._u(p,'uSource'+k,'m3',(sources[k]||sources[0]).basis);
    this._u(p,'uViews','4f',...[0,1,2,3].map(k=>selected[k]?.i??-1));
    this._u(p,'uWeights','4f',...[0,1,2,3].map(k=>selected[k]?.weight||0));
    this._u(p,'uMinDepth','4f',...[0,1,2,3].map(k=>level.bounds[selected[k]?.i??selected[0].i][0]));
    this._u(p,'uMaxDepth','4f',...[0,1,2,3].map(k=>level.bounds[selected[k]?.i??selected[0].i][1]));
    gl.drawArrays(gl.TRIANGLES,0,3);this.stats.drawn++;
   }
   for(const id of this.lodState.keys())if(!activeIds.has(id))this.lodState.delete(id);
  }
  gl.disable(gl.SCISSOR_TEST);gl.disable(gl.DEPTH_TEST);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
  const p=this.post;gl.useProgram(p.p);this._u(p,'uRect','4f',-1,-1,1,1);
  for(const [i,key,name] of [[0,'color','uColor'],[1,'surface','uSurface']]){gl.activeTexture(gl.TEXTURE0+i);gl.bindTexture(gl.TEXTURE_2D,this.target[key]);this._u(p,name,'1i',i);}
  // Scene +distance points away, while authored normal/light +Z points toward
  // the front camera. Positive camera pitch looks upward in world +Y.
  const tilt=finite(settings.cameraPitch,0)*DEG,ct=Math.cos(tilt),st=Math.sin(tilt);
  const screenLight=[light[0],light[1]*ct+light[2]*st,light[2]*ct-light[1]*st];
  this._u(p,'uSize','2f',w,h);this._u(p,'uLight','3f',...screenLight);this._u(p,'uSky','3f',...sky);
  this._u(p,'uHaze','1f',finite(settings.haze,0));this._u(p,'uShadow','1f',finite(settings.shadow,0));this._u(p,'uShadowReach','1f',finite(settings.shadowReach,24));
  gl.drawArrays(gl.TRIANGLES,0,3);
 }
 dispose(){const gl=this.gl;this._freeTarget();this.textures.forEach(t=>gl.deleteTexture(t));this.textures=[];for(const p of [this.cloud,this.post])if(p)gl.deleteProgram(p.p);this.canvas.removeEventListener('webglcontextlost',this._lost);this.canvas.removeEventListener('webglcontextrestored',this._restored);this.asset=null;}
}
BakedCloudRenderer.validateAsset=validateAsset;
BakedCloudRenderer.selectViews=selectViews;
global.BakedCloudRenderer=BakedCloudRenderer;
})(window);
