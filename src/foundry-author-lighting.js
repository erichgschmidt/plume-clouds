/* Author-only directional transfer bake. The sky samples these 2D bytes; no field tracing ships there. */
const SIX_WAY_FRAG=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUV;
layout(location=0)out vec4 positive0;
layout(location=1)out vec4 negative0;
layout(location=2)out vec4 positive1;
layout(location=3)out vec4 negative1;
uniform sampler2D uDepth0,uNormal0,uDepth1,uNormal1;
uniform mat3 uBasis;
uniform float uHalfHeight;
${COMMON_GLSL}${SDF_GLSL}
float directionalResponse(vec3 p,vec3 n,vec3 direction){
 float cosine=max(dot(n,direction),0.0);if(cosine<.001)return 0.0;
 // Offset beyond the captured interface; then integrate attenuation through any intervening mass.
 // The source field is an approximate distance guide, so steps are conservative and bounded.
 vec3 origin=p+n*.035;float t=.025,optical=0.0;
 for(int step=0;step<96;step++){
  if(t>2.0*uRange||optical>1.8)break;
  float distance=field(origin+direction*t);
  float stride=clamp(abs(distance)*.45,.025,.35);
  if(distance<0.0)optical+=stride;
  t+=stride;
 }
 return cosine*exp(-4.0*optical);
}
void captureLayer(vec4 depth,vec4 normal,out vec4 positive,out vec4 negative){
 positive=vec4(0.0);negative=vec4(0.0);if(normal.a<.5)return;
 vec2 xy=(vUV-.5)*vec2(4.0/3.0,1.0)*2.0*uHalfHeight;
 float z=(unpack16(depth.rg)*2.0-1.0)*uRange;
 vec3 point=uBasis*vec3(xy,z),n=decodeOct(normal.rg);
 positive=vec4(directionalResponse(point,n,vec3(1,0,0)),directionalResponse(point,n,vec3(0,1,0)),directionalResponse(point,n,vec3(0,0,1)),normal.a);
 negative=vec4(directionalResponse(point,n,vec3(-1,0,0)),directionalResponse(point,n,vec3(0,-1,0)),directionalResponse(point,n,vec3(0,0,-1)),normal.a);
}
void main(){
 captureLayer(texture(uDepth0,vUV),texture(uNormal0,vUV),positive0,negative0);
 captureLayer(texture(uDepth1,vUV),texture(uNormal1,vUV),positive1,negative1);
}
`;
let sixWayProgram=null;
async function bakeSixWay(asset,snapshot,ps,cs){
 const gl=authorGL,{w,h}=asset,inputs=[],outputs=[];
 const fbo=gl.createFramebuffer();
 try{
  if(!sixWayProgram)sixWayProgram=compileProgram(gl,FULLSCREEN_VERT,SIX_WAY_FRAG,'Six-way volume lighting');
  const program=sixWayProgram;
  gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);
  function texture(){
   const t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);
   gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
   gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
   gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA8,w,h,0,gl.RGBA,gl.UNSIGNED_BYTE,null);return t;
  }
  for(let i=0;i<4;i++){
   const t=texture();outputs.push(t);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+i,gl.TEXTURE_2D,t,0);
   inputs.push(texture());
  }
  gl.drawBuffers([gl.COLOR_ATTACHMENT0,gl.COLOR_ATTACHMENT1,gl.COLOR_ATTACHMENT2,gl.COLOR_ATTACHMENT3]);
  if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE)throw Error('Six-way lighting framebuffer is incomplete.');
  const maps=[];
  for(let view=0;view<asset.views.length;view++){
   if(cancelRequested)throw Error('BAKE_CANCELLED');
   $('bakeDescription').textContent=`Volume lighting ${view+1} / ${asset.views.length} · six sun directions per occupied interval`;
   gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);gl.viewport(0,0,w,h);gl.disable(gl.BLEND);gl.useProgram(program.p);
   for(let i=0;i<4;i++){
    gl.activeTexture(gl.TEXTURE0+i);gl.bindTexture(gl.TEXTURE_2D,inputs[i]);
    gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,asset.data[view][i]);
    ui(gl,program,['uDepth0','uNormal0','uDepth1','uNormal1'][i],i);
   }
   matrix(gl,program,'uBasis',basis(asset.views[view].yaw*DEG,asset.views[view].pitch*DEG));
   uf(gl,program,'uHalfHeight',asset.halfHeight);sdfUniforms(gl,program,snapshot,ps,cs,asset.range);
   gl.drawArrays(gl.TRIANGLES,0,3);
   const buffers=[];for(let i=0;i<4;i++){
    gl.readBuffer(gl.COLOR_ATTACHMENT0+i);const bytes=new Uint8Array(w*h*4);gl.readPixels(0,0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,bytes);buffers.push(bytes);
   }
   const error=gl.getError();if(error!==gl.NO_ERROR)throw Error('Six-way bake/readback failed: '+error);
   maps.push(buffers);$('bakeProgress').style.width=(50+(view+1)/asset.views.length*45)+'%';
   gl.bindFramebuffer(gl.FRAMEBUFFER,null);await nextFrame();await nextFrame();
  }
  if(cancelRequested)throw Error('BAKE_CANCELLED');
  asset.lighting=maps;asset.lightingModel='visibility-times-positive-normal-dot; signed XYZ; squared-axis runtime blend';
 }finally{
  gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.deleteFramebuffer(fbo);for(const t of [...inputs,...outputs])gl.deleteTexture(t);
 }
}
