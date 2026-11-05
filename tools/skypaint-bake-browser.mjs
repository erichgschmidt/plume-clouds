/* Bundled only for the offline exporter; never included in the 2D runtime. */
import * as THREE from 'three';
import {Viewer} from 'skypaint/render/viewer.js';
import {studioScene,studioRecipe} from 'skypaint/core/studio-presets.js';
import {sceneBounds} from 'skypaint/core/geometry.js';
import {validateScene,parseScene} from 'skypaint/core/scene.js';
import {FieldReplay} from 'skypaint/core/field-replay.js';
import {SCULPT_PROGRAM_FORMAT} from 'skypaint/core/field-program.js';

export async function prepareScene(options){
 const imported=options.scene!==undefined;
 const scene=imported?(typeof options.scene==='string'?parseScene(options.scene):validateScene(options.scene)):studioScene();
 if(!scene.volumes.some(volume=>volume.enabled&&volume.role==='add'))throw Error('Scene needs an enabled cloud volume');
 if(!scene.render?.look?.enabled)throw Error('Enable Studio lighting in SkyPaint before exporting this scene');
 if(!imported){scene.volumes[0].position=[0,0,0];if(options.kind&&options.kind!=='bank')scene.volumes[0].recipe=studioRecipe(options.kind);}
 if(options.densityResolution!==undefined){scene.render.densityResolution=options.densityResolution;validateScene(scene);}
 const evaluated=structuredClone(scene);
 for(const volume of evaluated.volumes){if(volume.recipe?.field?.format!==SCULPT_PROGRAM_FORMAT)continue;
  const replay=new FieldReplay(),result=await replay.update(volume.recipe.field,{yieldTask:()=>new Promise(resolve=>setTimeout(resolve,0)),cancelled:()=>!!options.signal?.aborted,batch:4});
  if(result.aborted)throw new DOMException('Bake cancelled','AbortError');volume.recipe.field=result.field;replay.clear();
 }
 return {scene,evaluated};
}
window.prepareSkyPaintBakeScene=prepareScene;

function ownViewer(canvas){
 const listeners=[],prototype=EventTarget.prototype,add=prototype.addEventListener;
 let v;
 try{prototype.addEventListener=function(type,listener,options){listeners.push([this,type,listener,options]);return add.call(this,type,listener,options);};v=new Viewer(canvas,{begin(){},commit(){},cancel(){},transform(){}});}
 finally{prototype.addEventListener=add;}
 cancelAnimationFrame(v.raf);v.resizeObserver.disconnect();let disposed=false;
 const dispose=()=>{if(disposed)return;disposed=true;cancelAnimationFrame(v.raf);v.resizeObserver.disconnect();v.frameQueue.clear();for(const [target,type,listener,options]of listeners)target.removeEventListener(type,listener,options);listeners.length=0;
  v.sculptEvaluation?.dispose();v.field.dispose();v.visibilityCache.dispose();v.studio.noise?.dispose();v.densityCache.clear();v.densityCache.fallback.dispose();v.densityCache.material.dispose();v.orbit.dispose();v.gizmo.dispose();
  const geometries=new Set(),materials=new Set();for(const scene of [v.pass,v.overlay,v.densityCache.pass])scene.traverse(node=>{if(node.geometry)geometries.add(node.geometry);if(node.material)for(const m of Array.isArray(node.material)?node.material:[node.material])materials.add(m);});
  for(const geometry of geometries)geometry.dispose();for(const material of materials)material.dispose();for(const key of ['texture','scaffoldTexture','sculptTexture','maskTexture','cutTexture'])v[key]?.dispose();v.renderer.dispose();
 };
 return {v,dispose,listenerCount:()=>listeners.length};
}

window.createSkyPaintBake=async function(options={}){
 options={w:128,h:96,radianceScale:4,...options};
 if(![64,128,256,512].includes(options.w)||options.h!==options.w*3/4)throw Error('Bake dimensions must be 4:3 at width64,128,256 or512');
 if(!Number.isFinite(options.radianceScale)||options.radianceScale<1e-6||options.radianceScale>65504)throw Error('Invalid radiance scale; expected 1e-6 through 65504');
 if(options.halfHeight!==undefined&&(!(options.halfHeight>=0)||!Number.isFinite(options.halfHeight)))throw Error('Invalid capture framing');
 const {scene,evaluated}=await prepareScene(options);
 if(options.signal?.aborted)throw new DOMException('Bake cancelled','AbortError');
 const canvas=options.canvas||document.querySelector('canvas'),owned=ownViewer(canvas),v=owned.v;
 try{
 v.setScene(evaluated,evaluated.volumes.find(volume=>volume.enabled&&volume.role==='add').id,false);v.ensureDensity(false);v.studio.applyQuality(true);
 const bounds=sceneBounds(evaluated,v.fieldSupport),center=bounds.lo.map((x,i)=>(x+bounds.hi[i])*.5);
 const radius=Math.hypot(...bounds.hi.map((x,i)=>(x-bounds.lo[i])*.5));
 // Bounds are conservative. A constant object center and scale avoid capture drift.
 let halfHeight=options.halfHeight||radius*1.02;const range=radius*1.15;
 const original=v.material.fragmentShader;
 const patched=window.patchSkyPaintShader(original);
 let transportShader=null,lastCapture=null;
 const axes=[[1,0,0],[0,1,0],[0,0,1],[-1,0,0],[0,-1,0],[0,0,-1]];
 const relightSettings={anisotropy:v.uniforms.uAnisotropy.value,fill:v.uniforms.uScatterFill.value,intensity:v.uniforms.uIntensity.value,ambient:v.uniforms.uAmbient.value,sunColor:v.uniforms.uSunTint.value.toArray(),skyColor:v.uniforms.uSkyTint.value.toArray()};
 Object.assign(v.uniforms,{uBakeMode:{value:0},uBakeScale:{value:options.radianceScale||4},uBakeRange:{value:range},uBakeCenter:{value:new THREE.Vector3(...center)},uBakeToward:{value:new THREE.Vector3()}});
 v.material.fragmentShader=patched;v.material.needsUpdate=true;
 v.uniforms.uSolo.value=-1;v.uniforms.uPanorama.value=0;v.uniforms.uOrthographic.value=1;
 v.uniforms.uSteps.value=128;v.uniforms.uShadowSteps.value=32;
 const target=new THREE.WebGLRenderTarget(options.w,options.h,{type:THREE.UnsignedByteType,format:THREE.RGBAFormat,depthBuffer:false,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter});
 const floatTarget=new THREE.WebGLRenderTarget(options.w,options.h,{type:THREE.FloatType,format:THREE.RGBAFormat,depthBuffer:false,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter});
 function setCamera(view){
  if(!view||!Number.isFinite(view.yaw)||!Number.isFinite(view.pitch)||Math.abs(view.yaw)>180||Math.abs(view.pitch)>90)throw Error('Invalid capture view');
  const yaw=view.yaw*Math.PI/180,pitch=view.pitch*Math.PI/180;
  const toward=new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),Math.cos(yaw)*Math.cos(pitch));
  const camera=new THREE.OrthographicCamera(-halfHeight*4/3,halfHeight*4/3,halfHeight,-halfHeight,.1,range*4);
  camera.position.fromArray(center).addScaledVector(toward,range);camera.lookAt(...center);camera.updateMatrixWorld();
  v.uniforms.uInvPV.value.multiplyMatrices(camera.matrixWorld,camera.projectionMatrixInverse);
  v.uniforms.uOrigin.value.copy(camera.position);v.uniforms.uCameraNear.value=camera.near;
  v.uniforms.uBakeToward.value.copy(toward);
 }
 function draw(mode,float=false,unpatched=false,display=false){
  v.uniforms.uBakeMode.value=mode;v.uniforms.uLinear.value=display?0:1;
  if(unpatched){v.material.fragmentShader=original;v.material.needsUpdate=true;}
  const t=float?floatTarget:target;v.renderer.setRenderTarget(t);v.renderer.clear();v.renderer.render(v.pass,v.screenCamera);
  const pixels=float?new Float32Array(options.w*options.h*4):new Uint8Array(options.w*options.h*4);
  v.renderer.readRenderTargetPixels(t,0,0,options.w,options.h,pixels);
  // RGBA8 conversion can dither alpha below one unit on native drivers.
  // Canonicalize after quantization so transparent texels carry no radiance.
  if(mode===1&&!float)for(let i=0;i<pixels.length;i+=4)if(pixels[i+3]===0)pixels[i]=pixels[i+1]=pixels[i+2]=0;
  if(unpatched){v.material.fragmentShader=patched;v.material.needsUpdate=true;}
  return pixels;
 }
 function base64(bytes){let s='';for(let i=0;i<bytes.length;i+=8192)s+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(s);}
 function captureKey(view){return [view.yaw,view.pitch,halfHeight].join('|');}
 function transportSamples(){
  const oldSun=v.uniforms.uSun.value.clone(),result=[];
  try{
   transportShader||=window.skyPaintRelightingShader(original);v.material.fragmentShader=transportShader;v.material.needsUpdate=true;
   for(const axis of axes){v.uniforms.uSun.value.fromArray(axis);result.push(draw(4,true));}
  }finally{v.uniforms.uSun.value.copy(oldSun);v.material.fragmentShader=patched;v.material.needsUpdate=true;}
  return result;
 }
 function packedTransport(samples,opacity){
  const maps=[new Uint8Array(opacity.length),new Uint8Array(opacity.length)];
  for(let i=0;i<opacity.length;i+=4){if(!opacity[i+3])continue;
   for(let axis=0;axis<6;axis++)maps[axis<3?0:1][i+axis%3]=Math.round(255*Math.sqrt(Math.max(0,Math.min(1,samples[axis][i]))));
   maps[0][i+3]=Math.round(255*Math.max(0,Math.min(1,samples[0][i+1])));maps[1][i+3]=opacity[i+3];
  }return maps;
 }
 let disposed=false;function assertLive(){if(disposed)throw Error('Bake adapter disposed');if(options.signal?.aborted)throw new DOMException('Bake cancelled','AbortError');}
 const api={scene,bounds,center,halfHeight,range,relightSettings,
  stats(){const gl=v.renderer.getContext();return {disposed,textures:v.renderer.info.memory.textures,geometries:v.renderer.info.memory.geometries,programs:v.renderer.info.programs?.length||0,listeners:owned.listenerCount(),glError:gl.getError(),contextLost:gl.isContextLost()};},
  dispose(){if(disposed)return;disposed=true;target.dispose();floatTarget.dispose();owned.dispose();},
  setFraming(height){assertLive();if(!(height>0)||!Number.isFinite(height))throw Error('Invalid capture framing');halfHeight=height;this.halfHeight=height;return height;},
  measure(view){setCamera(view);const rgba=draw(1);let extent=0;for(let y=0;y<options.h;y++)for(let x=0;x<options.w;x++){if(!rgba[(y*options.w+x)*4+3])continue;extent=Math.max(extent,Math.abs((x+.5)/options.w-.5)*2*4/3,Math.abs((y+.5)/options.h-.5)*2);}return extent*halfHeight;},
  capture(view){setCamera(view);const radiance=draw(1);window.assertSkyPaintCaptureRadianceFits(radiance,()=>draw(4,true),options.radianceScale,view);lastCapture={key:captureKey(view),opacity:radiance};const depth=draw(2),normal=draw(3);return {radiance:base64(radiance),depth:base64(depth),normal:base64(normal)};},
  captureRelighting(view){
   setCamera(view);const opacity=lastCapture?.key===captureKey(view)?lastCapture.opacity:draw(1);
   return {maps:packedTransport(transportSamples(),opacity).map(base64)};
  },
  compareRelighting(view){
   setCamera(view);const actual=transportSamples(),errors=[],saved={};
   for(const key of ['uSun','uSunTint','uSkyTint','uZenith','uHorizon','uIntensity','uAmbient','uScatterFill','uAnisotropy','uIncludeSun'])saved[key]=v.uniforms[key].value?.clone?.()??v.uniforms[key].value;
   const visibility=v.material.defines.SKY_VISIBILITY_LOOKUP,rd=v.uniforms.uBakeToward.value.clone().negate();
   let ambientMax=0,opacityMax=0,responseMax=0,quantMax=0,squares=0,count=0;
   try{
    v.material.defines.SKY_VISIBILITY_LOOKUP=0;v.material.needsUpdate=true;
    v.uniforms.uSunTint.value.setRGB(1,1,1);v.uniforms.uSkyTint.value.setRGB(0,0,0);v.uniforms.uZenith.value.setRGB(0,0,0);v.uniforms.uHorizon.value.setRGB(0,0,0);
    v.uniforms.uIntensity.value=1;v.uniforms.uAmbient.value=0;v.uniforms.uScatterFill.value=0;v.uniforms.uAnisotropy.value=0;v.uniforms.uIncludeSun.value=0;
    for(let axis=0;axis<6;axis++){
     v.uniforms.uSun.value.fromArray(axes[axis]);const raw=draw(0,true,true),mu=rd.dot(v.uniforms.uSun.value),phase=.85+.15*(1-.23*.23)/Math.pow(Math.max(.001,1+.23*.23+2*.23*mu),1.5);let max=0;
     for(let i=0;i<raw.length;i+=4){const delta=Math.abs(raw[i]/phase-actual[axis][i]);max=Math.max(max,delta);squares+=delta*delta;count++;responseMax=Math.max(responseMax,actual[axis][i]);}
     errors.push(max);
    }
    v.uniforms.uSunTint.value.setRGB(0,0,0);v.uniforms.uSkyTint.value.setRGB(1,1,1);v.uniforms.uIntensity.value=0;v.uniforms.uAmbient.value=1;
    const ambient=draw(0,true,true);for(let axis=0;axis<6;axis++)for(let i=0;i<ambient.length;i+=4)ambientMax=Math.max(ambientMax,Math.abs(ambient[i]-actual[axis][i+1]));
   }finally{for(const [key,value]of Object.entries(saved)){if(value?.clone)v.uniforms[key].value.copy(value);else v.uniforms[key].value=value;}v.material.defines.SKY_VISIBILITY_LOOKUP=visibility;v.material.fragmentShader=patched;v.material.needsUpdate=true;}
   const opacity=draw(1),rawOpacity=draw(4,true),encoded=packedTransport(actual,opacity);
   for(let axis=0;axis<6;axis++)for(let i=0;i<opacity.length;i+=4){opacityMax=Math.max(opacityMax,Math.abs(rawOpacity[i+3]-actual[axis][i+3]));quantMax=Math.max(quantMax,Math.abs(actual[axis][i]-(encoded[axis<3?0:1][i+axis%3]/255)**2));}
   return {axisMax:Math.max(...errors),perAxisMax:errors,axisRMSE:Math.sqrt(squares/count),ambientMax,opacityMax,responseMax,quantMax};
  },
  compare(view){setCamera(view);const raw=draw(4,true),patchedLinear=draw(0,true),reference=draw(0,true,true),encoded=draw(1);let shaderMax=0,cloudCompositeMax=0,quantMax=0,quantSquare=0,alphaMax=0,n=0,clipped=0,occupied=0,transparentRGB=0;
   const rd=v.uniforms.uBakeToward.value.clone().negate(),t=THREE.MathUtils.smoothstep(rd.y,-.05,.9),sky=v.uniforms.uHorizon.value.clone().lerp(v.uniforms.uZenith.value,t),sun=Math.max(rd.dot(v.uniforms.uSun.value),0)**500*v.uniforms.uIntensity.value;
   sky.r+=sun;sky.g+=sun*.86;sky.b+=sun*.6;const background=sky.toArray();
   for(let i=0;i<raw.length;i+=4){if(raw[i+3]>0)occupied++;for(let k=0;k<4;k++)shaderMax=Math.max(shaderMax,Math.abs(patchedLinear[i+k]-reference[i+k]));
    alphaMax=Math.max(alphaMax,Math.abs(encoded[i+3]/255-raw[i+3]));
    for(let k=0;k<3;k++){cloudCompositeMax=Math.max(cloudCompositeMax,Math.abs(raw[i+k]+background[k]*(1-raw[i+3])-reference[i+k]));const decoded=(encoded[i+k]/255)**2*options.radianceScale;const error=decoded-raw[i+k];quantMax=Math.max(quantMax,Math.abs(error));quantSquare+=error*error;n++;if(raw[i+k]>options.radianceScale)clipped++;if(encoded[i+3]===0&&encoded[i+k]!==0)transparentRGB++;}}
   return {shaderMax,cloudCompositeMax,quantMax,quantRMSE:Math.sqrt(quantSquare/n),alphaMax,transparentRGB,clipped,occupied,totalPixels:raw.length/4,renderer:v.renderer.getContext().getParameter(v.renderer.getContext().RENDERER)};
  },
  preview(view){setCamera(view);draw(0,false,false,true);const bytes=new Uint8Array(options.w*options.h*4);v.renderer.readRenderTargetPixels(target,0,0,options.w,options.h,bytes);const preview=options.previewCanvas||document.querySelector('#preview');if(!preview)throw Error('Preview canvas unavailable');preview.width=options.w;preview.height=options.h;const ctx=preview.getContext('2d'),pixels=new Uint8ClampedArray(bytes.length);for(let y=0;y<options.h;y++)pixels.set(bytes.subarray(y*options.w*4,(y+1)*options.w*4),(options.h-1-y)*options.w*4);ctx.putImageData(new ImageData(pixels,options.w,options.h),0,0);return preview.toDataURL();}
 };
 for(const method of ['measure','capture','captureRelighting','compareRelighting','compare','preview']){const call=api[method];api[method]=(...args)=>{assertLive();return call.apply(api,args);};}
 return window.skyPaintBake=api;
 }catch(error){owned.dispose();throw error;}
};
