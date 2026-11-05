/* Frozen 2D layered-depth maps only. No authoring volume, SDF, or mesh. */
(function(global){
'use strict';
const common=`
float unpack16(vec2 v){vec2 b=floor(v*255.0+.5);return (b.x*256.0+b.y)/65535.0;}
vec3 decodeOct(vec2 e){vec3 n=vec3(e*2.-1.,1.-abs(e.x*2.-1.)-abs(e.y*2.-1.));float t=max(-n.z,0.);n.xy+=vec2(n.x>=0.?-t:t,n.y>=0.?-t:t);return normalize(n);}
vec2 encodeOct(vec3 n){n/=abs(n.x)+abs(n.y)+abs(n.z);vec2 e=n.xy;if(n.z<0.)e=(1.-abs(e.yx))*vec2(e.x>=0.?1.:-1.,e.y>=0.?1.:-1.);return e*.5+.5;}
vec3 paletteColor(float v,int palette){
 vec3 dark=vec3(.29,.45,.53),mid=vec3(.64,.77,.76),lit=vec3(.99,.94,.80);
 if(palette==1){dark=vec3(.30,.36,.51);mid=vec3(.70,.64,.65);lit=vec3(1.,.79,.56);}
 if(palette==2){dark=vec3(.16,.29,.40);mid=vec3(.43,.59,.66);lit=vec3(.78,.89,.88);}
 return mix(mix(dark,mid,smoothstep(0.,.6,v)),lit,smoothstep(.5,1.,v));
}
vec3 shadeTerms(vec2 terms,float bands,int palette){
 float v=clamp(terms.x,0.,1.);if(bands>1.)v=floor(v*(bands-1.)+.5)/(bands-1.);
 return mix(paletteColor(v,palette),paletteColor(1.,palette),clamp(terms.y,0.,.65));
}
`;
const vertex=`#version 300 es
precision highp float;
uniform vec4 uRect;
out vec2 screen;
void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));screen=mix(uRect.xy,uRect.zw,p);gl_Position=vec4(screen,0,1);}`;
const cloud=`#version 300 es
precision highp float;
precision highp sampler2DArray;
in vec2 screen;
layout(location=0)out vec4 color;
layout(location=1)out vec4 surface;
layout(location=2)out vec4 material;
uniform sampler2DArray uDepth0,uNormal0,uDepth1,uNormal1;
uniform sampler2DArray uLightPos0,uLightNeg0,uLightPos1,uLightNeg1;
uniform mat3 uTarget,uSource0,uSource1,uSource2,uSource3;
uniform vec2 uCenter;
uniform vec4 uViews,uWeights,uMinDepth,uMaxDepth;
uniform float uAspect,uMapAspect,uScale,uHalfHeight,uRange,uDistance,uDepthScale,uOpacity,uTime,uBreathing,uInstance;
uniform vec3 uLight;
uniform float uAO,uTransmission,uBands,uSixWay;
uniform int uPalette,uHasLighting;
${common}
struct Hit{vec3 n;float ao;float thickness;float alpha;float z;vec3 lightPos;vec3 lightNeg;float unoccluded;};
Hit emptyHit(){return Hit(vec3(0,0,1),1.,0.,0.,-1e6,vec3(0),vec3(0),0.);}
vec3 axisWeights(){vec3 w=uLight*uLight;return w/max(dot(w,vec3(1)),.00001);}
vec4 depthAt(vec2 uv,int view,int layer){return layer==0?texture(uDepth0,vec3(uv,float(view))):texture(uDepth1,vec3(uv,float(view)));}
vec4 normalAt(vec2 uv,int view,int layer){return layer==0?texture(uNormal0,vec3(uv,float(view))):texture(uNormal1,vec3(uv,float(view)));}
Hit patchSample(ivec2 cell,vec4 weights,int view,int layer,float solved){
 vec2 size=vec2(textureSize(uDepth0,0).xy);vec3 normal=vec3(0),positive=vec3(0),negative=vec3(0);float ao=0.,thickness=0.,reference=0.;
 for(int k=0;k<4;k++)if(weights[k]>0.){
  vec2 uv=(vec2(cell+ivec2(k%2,k/2))+.5)/size;vec4 nm=normalAt(uv,view,layer),d=depthAt(uv,view,layer);
  vec3 n=decodeOct(nm.rg);float w=weights[k];normal+=n*w;ao+=nm.b*w;
  thickness+=max((unpack16(d.rg)-unpack16(d.ba))*2.*uRange,0.)*w;
  reference+=dot(max(mix(-n,n,step(vec3(0),uLight)),vec3(0)),axisWeights())*w;
  if(uHasLighting==1&&uSixWay>0.){vec3 q=vec3(uv,float(view));positive+=(layer==0?texture(uLightPos0,q).rgb:texture(uLightPos1,q).rgb)*w;negative+=(layer==0?texture(uLightNeg0,q).rgb:texture(uLightNeg1,q).rgb)*w;}
 }
 return Hit(normalize(normal),ao,thickness,1.-exp(-thickness*12.),solved,positive,negative,reference);
}
bool edgeCompatible(float a,float b,vec3 na,vec3 nb,vec2 delta,mat3 source,float pixel){
 vec3 offset=source*vec3(delta,b-a);float tolerance=pixel*.8+uRange/65535.*4.;
 return abs(dot(na,offset))<=tolerance&&abs(dot(nb,offset))<=tolerance;
}
float patchRoot(vec4 z,vec2 f0,vec2 df,float source0,float sourceDelta){
 float b=z.y-z.x,c=z.z-z.x,d=z.w-z.y-z.z+z.x;
 float A=-d*df.x*df.y,B=sourceDelta-b*df.x-c*df.y-d*(f0.x*df.y+f0.y*df.x),C=source0-z.x-b*f0.x-c*f0.y-d*f0.x*f0.y;
 float best=-1.,scale=max(max(abs(A),abs(B)),max(abs(C),1e-12));A/=scale;B/=scale;C/=scale;
 vec2 candidates=vec2(-2.);int count=0;
 if(abs(A)<1e-6){if(abs(B)>1e-7){candidates.x=-C/B;count=1;}}
 else{float disc=B*B-4.*A*C,tolerance=1e-7*(B*B+abs(4.*A*C));if(disc>=-tolerance){float q=-.5*(B+(B<0.?-1.:1.)*sqrt(max(disc,0.)));if(abs(q)>1e-10){candidates=vec2(q/A,C/q);count=2;}else{candidates.x=-B/(2.*A);count=1;}}}
 for(int k=0;k<2;k++){
  if(k>=count)break;float s=candidates[k];if(s< -1e-5||s>1.00001)continue;s=clamp(s,0.,1.);vec2 f=f0+df*s;
  if(any(lessThan(f,vec2(-1e-5)))||any(greaterThan(f,vec2(1.00001))))continue;
  if(2.*A*s+B<=1e-7||abs((A*s+B)*s+C)>1e-4)continue;best=max(best,s);
 }
 return best;
}
Hit reproject(vec2 xy,mat3 source,int view,int layer,float minDepth,float maxDepth){
 vec3 base=uTarget*vec3(xy,0),ray=uTarget[2];float den=dot(ray,source[2]);if(den<.2)return emptyHit();
 vec2 size=vec2(textureSize(uDepth0,0).xy),extent=2.*uHalfHeight*vec2(uMapAspect,1.);
 vec2 origin=vec2(dot(base,source[0]),dot(base,source[1]))/extent+.5;
 vec2 velocity=vec2(dot(ray,source[0]),dot(ray,source[1]))/extent;
 float sourceZ=dot(base,source[2]),pixel=max(extent.x/size.x,extent.y/size.y);
 float low=(minDepth-sourceZ-pixel*2.)/den,high=(maxDepth-sourceZ+pixel*2.)/den;
 for(int axis=0;axis<2;axis++){
  if(abs(velocity[axis])<1e-8){if(origin[axis]<0.||origin[axis]>=1.)return emptyHit();}
  else{float a=(0.-origin[axis])/velocity[axis],b=(1.-origin[axis])/velocity[axis];low=max(low,min(a,b));high=min(high,max(a,b));}
 }
 if(high<low)return emptyHit();
 // Patches share decoded depths on texel-center edges. Unlike independent
 // tangent planes, compatible interior patches meet without geometric cracks.
 float cursor=high;
 ivec2 cell=ivec2(floor((origin+velocity*high)*size-.5));
 ivec2 cellStep=ivec2(velocity.x>0.?-1:1,velocity.y>0.?-1:1);
 // 1024x1024 maps plus the two outer half-patches on each axis.
 for(int stepIndex=0;stepIndex<2052;stepIndex++){
  vec2 crossing=vec2(-1e30);
  for(int axis=0;axis<2;axis++)if(abs(velocity[axis])>1e-8){float edge=(float(cell[axis])+(velocity[axis]<0.?1.5:.5))/size[axis];crossing[axis]=(edge-origin[axis])/velocity[axis];}
  float exitT=min(max(low,max(crossing.x,crossing.y)),cursor);
  vec4 z=vec4(0),coverage=vec4(0);vec3 normals[4];
  for(int k=0;k<4;k++){
   ivec2 id=cell+ivec2(k%2,k/2);vec2 uv=(vec2(id)+.5)/size;vec4 nm=normalAt(uv,view,layer);
   coverage[k]=all(greaterThanEqual(id,ivec2(0)))&&all(lessThan(id,ivec2(size)))?nm.a:0.;
   z[k]=(unpack16(depthAt(uv,view,layer).rg)*2.-1.)*uRange;normals[k]=decodeOct(nm.rg);
  }
  bool compatible=all(greaterThan(coverage,vec4(.5)));
  if(compatible){
   vec2 dx=vec2(extent.x/size.x,0),dy=vec2(0,extent.y/size.y);
   compatible=edgeCompatible(z.x,z.y,normals[0],normals[1],dx,source,pixel)&&edgeCompatible(z.z,z.w,normals[2],normals[3],dx,source,pixel)&&edgeCompatible(z.x,z.z,normals[0],normals[2],dy,source,pixel)&&edgeCompatible(z.y,z.w,normals[1],normals[3],dy,source,pixel);
  }
  if(compatible){
   float lengthT=cursor-exitT;vec2 f0=(origin+velocity*exitT)*size-.5-vec2(cell),df=velocity*size*lengthT;
   float s=patchRoot(z,f0,df,sourceZ+den*exitT,den*lengthT);
   if(s>=0.){vec2 f=clamp(f0+df*s,vec2(0),vec2(1));vec4 weights=vec4((1.-f.x)*(1.-f.y),f.x*(1.-f.y),(1.-f.x)*f.y,f.x*f.y);return patchSample(cell,weights,view,layer,exitT+lengthT*s);}
  }else{
   // Never join missing coverage or a discontinuous depth layer. Boundary
   // fallback is restricted to original constant-depth texel footprints.
   float nearest=-1e6;int chosen=-1;
   for(int k=0;k<4;k++)if(coverage[k]>.5&&dot(normals[k],ray)>.005){
    float t=(z[k]-sourceZ)/den;vec2 sampleCell=(origin+velocity*t)*size;
    ivec2 id=cell+ivec2(k%2,k/2);
    if(t<=cursor+1e-5&&t>=exitT-1e-5&&all(greaterThanEqual(sampleCell,vec2(id)))&&all(lessThan(sampleCell,vec2(id)+1.))&&t>nearest){nearest=t;chosen=k;}
   }
   if(chosen>=0){vec4 weights=vec4(0);weights[chosen]=1.;return patchSample(cell,weights,view,layer,nearest);}
  }
  if(exitT<=low+1e-6)break;
  // Advance the integer cell, not a floating-point probe of the boundary.
  // At shallow ray angles a probe can round back into the same cell forever.
  // Exact corner ties advance both axes; near ties visit the thin intervening
  // patch. Even a zero-length boundary interval advances without skipping depth.
  if(crossing.x>=crossing.y)cell.x+=cellStep.x;
  if(crossing.y>=crossing.x)cell.y+=cellStep.y;
  cursor=exitT;
 }
 return emptyHit();
}
Hit viewHit(vec2 xy,mat3 source,int view,float lo,float hi){Hit a=reproject(xy,source,view,0,lo,hi),b=reproject(xy,source,view,1,lo,hi);if(b.alpha>.01&&b.z>a.z)return b;return a;}
mat3 sourceAt(int i){if(i==0)return uSource0;if(i==1)return uSource1;if(i==2)return uSource2;return uSource3;}
float consistency(Hit h,vec2 xy){
 vec3 point=uTarget*vec3(xy,h.z);vec2 size=vec2(textureSize(uDepth0,0).xy),extent=2.*uHalfHeight*vec2(uMapAspect,1.);
 float disagreement=0.;
 for(int i=0;i<4;i++){
  if(uViews[i]<0.||uWeights[i]<=0.)continue;
  mat3 source=sourceAt(i);int view=int(uViews[i]);vec2 uv=vec2(dot(point,source[0]),dot(point,source[1]))/extent+.5;
  if(any(lessThan(uv,vec2(0)))||any(greaterThanEqual(uv,vec2(1))))continue;
  vec4 nm=normalAt(uv,view,0);
  if(nm.a<.5){
   // Test uncertainty of a source pixel's footprint, never dilate the output.
   // A ray through a genuine opening remains empty in every contributing map.
   vec2 q=(floor(uv*size-.5)+.5)/size;float support=0.;
   for(int y=0;y<2;y++)for(int x=0;x<2;x++)support=max(support,normalAt(q+vec2(x,y)/size,view,0).a);
   if(support<.5)disagreement+=uWeights[i];
  }else{
   vec2 center=(floor(uv*size)+.5)/size;vec3 n=decodeOct(nm.rg);float front=(unpack16(depthAt(uv,view,0).rg)*2.-1.)*uRange;
   float nz=dot(n,source[2]);float delta=dot(n,source*vec3((uv-center)*extent,0.));
   float plane=front-delta/max(nz,.1);float tolerance=max(extent.x/size.x,extent.y/size.y)*2./max(nz,.25);
   disagreement+=uWeights[i]*smoothstep(tolerance,tolerance*2.,dot(point,source[2])-plane);
  }
 }
 // A view enters the stencil at zero weight. It cannot suddenly veto a
 // surface merely by appearing on the other side of a capture-grid line.
 return smoothstep(0.,.6,1.-disagreement);
}
vec2 lightingTerms(Hit h){
 // Capture normals and the sun share the asset/world axes. Changing the
 // camera capture must not rotate the illumination of a stationary cloud.
 vec3 n=h.n;float diffuse=clamp((dot(n,uLight)+.2)/1.2,0.,1.);
 if(uHasLighting==1&&uSixWay>0.){
  vec3 weights=axisWeights();
  vec3 directional=mix(h.lightNeg,h.lightPos,step(vec3(0),uLight));
  // Divide out the captured cosine before applying visibility once to the
  // existing diffuse. Otherwise diagonal lights lose energy even without cover.
  // Half a stored byte accounts for rounding down unoccluded irradiance.
  float irradiance=dot(directional,weights);
  float visibility=clamp((irradiance+.5/255.)/max(h.unoccluded,.00001),0.,1.);
  visibility=mix(1.,visibility,smoothstep(0.,.02,h.unoccluded));
  diffuse*=mix(1.,visibility,uSixWay);
 }
 float v=clamp(.19+diffuse*.81-(1.-h.ao)*uAO*.26,0.,1.);
 float rim=pow(clamp(1.-dot(n,uTarget[2]),0.,1.),3.)*max(dot(n,uLight),0.);
 float transmit=exp(-h.thickness*1.1)*pow(max(dot(-uLight,uTarget[2]),0.),2.)*uTransmission;
 return vec2(v,clamp(rim*.13+transmit*.38,0.,.65));
}
void main(){
 vec2 xy=(screen*vec2(uAspect,1)-uCenter)/uScale*uHalfHeight;
 xy+=vec2(sin(xy.y*.85+uTime*.63)+.35*sin(xy.x*1.3-uTime*.47),cos(xy.x*.85-uTime*.55)*.65)*uBreathing*uHalfHeight;
 Hit hits[4];float weights[4];Hit h=emptyHit();
 for(int i=0;i<4;i++){
  weights[i]=0.;hits[i]=emptyHit();if(uViews[i]<0.||uWeights[i]<=0.)continue;
  hits[i]=viewHit(xy,sourceAt(i),int(uViews[i]),uMinDepth[i],uMaxDepth[i]);
  if(hits[i].alpha>.01)weights[i]=uWeights[i]*consistency(hits[i],xy);
  if(weights[i]>0.&&hits[i].alpha>.01&&hits[i].z>h.z)h=hits[i];
 }
 if(h.alpha>.01){
  // A previously unavailable view may reveal a closer sample. Introduce its
  // depth correction continuously instead of letting infinitesimal angular
  // weight instantly replace the depth buffer (and other clouds' shadows).
  // Once a view has 8% support it fully occludes farther captured surfaces.
  for(int i=0;i<4;i++)for(int j=i+1;j<4;j++)if(hits[j].z<hits[i].z){Hit swap=hits[i];hits[i]=hits[j];hits[j]=swap;float w=weights[i];weights[i]=weights[j];weights[j]=w;}
  float resolvedDepth=-1e6;
  for(int i=0;i<4;i++)if(weights[i]>0.&&hits[i].alpha>.01){
   resolvedDepth=resolvedDepth< -1e5?hits[i].z:mix(resolvedDepth,hits[i].z,smoothstep(0.,.08,weights[i]));
  }
  h.z=resolvedDepth;
  float total=0.;vec3 normal=vec3(0),positive=vec3(0),negative=vec3(0);float ao=0.,thickness=0.,reference=0.,coverage=0.;
  // Crossfade appearance with continuous angular support. Depth is resolved
  // separately above, preserving full occlusion for established front samples.
  for(int i=0;i<4;i++)if(weights[i]>0.&&hits[i].alpha>.01){
   float weight=weights[i];total+=weight;normal+=hits[i].n*weight;positive+=hits[i].lightPos*weight;negative+=hits[i].lightNeg*weight;
   ao+=hits[i].ao*weight;thickness+=hits[i].thickness*weight;reference+=hits[i].unoccluded*weight;coverage+=hits[i].alpha*weight;
  }
  if(total>0.){h.n=normalize(normal);h.lightPos=positive/total;h.lightNeg=negative/total;h.ao=ao/total;h.thickness=thickness/total;h.unoccluded=reference/total;h.alpha=coverage/total*smoothstep(0.,.12,total);}
 }
 if(h.alpha<.01||uOpacity<=0.)discard;
 float distance=max(.001,uDistance-h.z*uDepthScale);
 gl_FragDepth=distance/(distance+1.);
 float alpha=h.alpha*uOpacity;vec2 terms=lightingTerms(h);
 color=vec4(shadeTerms(terms,uBands,uPalette)*alpha,alpha);
 material=vec4(terms,0.,alpha);
 surface=vec4(encodeOct(transpose(uTarget)*h.n),distance,uInstance);
}`;
const post=`#version 300 es
precision highp float;
in vec2 screen;out vec4 color;
uniform sampler2D uColor,uSurface,uMaterial;
uniform vec2 uSize;
uniform vec3 uLight,uSky;
uniform float uHaze,uShadow,uShadowReach,uBands;
uniform int uPalette;
${common}
float blockerAt(vec2 q,float receiver,float expected,float bias){
 vec2 p=q*uSize-.5,f=fract(p);ivec2 cell=ivec2(floor(p));float sum=0.;
 // Filter visibility only. Never interpolate instance IDs or foreground and
 // background depths, and never blur the cloud image or its coverage mask.
 for(int y=0;y<2;y++)for(int x=0;x<2;x++){
  ivec2 at=cell+ivec2(x,y);if(any(lessThan(at,ivec2(0)))||any(greaterThanEqual(at,ivec2(uSize))))continue;
  vec4 b=texelFetch(uSurface,at,0);if(b.a<.5||abs(b.a-receiver)<.5)continue;
  float weight=(x==0?1.-f.x:f.x)*(y==0?1.-f.y:f.y);
  sum+=weight*smoothstep(bias,bias*3.,expected-b.b)*texelFetch(uMaterial,at,0).a;
 }
 return sum;
}
void main(){
 vec2 uv=screen*.5+.5;vec4 c=texture(uColor,uv),s=texture(uSurface,uv);vec3 bg=uSky;
 if(s.a<.5){color=vec4(bg,1);return;}
 float occ=0.;vec2 dir=uLight.xy;float len=length(dir);
 if(uShadow>0.&&len>.01){dir/=len;float span=clamp(uShadowReach,1.,64.);
  for(int i=1;i<=64;i++){
   float px=float(i);if(px>span)break;vec2 q=uv+dir*px/uSize;
   if(any(lessThan(q,vec2(0)))||any(greaterThan(q,vec2(1))))continue;
   float travel=2.*px/uSize.y*s.b;
   float expected=s.b-travel*uLight.z/len;
   float bias=max(.004,s.b*2./uSize.y);
   float hit=blockerAt(q,s.a,expected,bias);
   // Local recesses use baked AO. Screen samples shadow other instances only;
   // sampling steep same-cloud silhouette depth creates comb-like self-shadows.
   occ=max(occ,hit*(1.-smoothstep(0.,span,px)));
  }
 }
 if(occ>0.){
  vec2 terms=texture(uMaterial,uv).rg;float shade=clamp(uShadow,0.,1.)*occ;
  // Cast shadows reduce light before the SAME palette transfer as local
  // shading. Multiplying finished RGB pushed every palette toward black.
  terms.x=mix(terms.x,min(terms.x,.19),shade);terms.y*=1.-shade;
  c.rgb=shadeTerms(terms,uBands,uPalette)*c.a;
 }
 float haze=1.-exp(-max(uHaze,0.)*s.b*.025);c.rgb=mix(c.rgb,bg*c.a,haze);
 color=vec4(c.rgb+bg*(1.-c.a),1.);
}`;
global.FoundryShaders={vertex,cloud,post};
})(window);
