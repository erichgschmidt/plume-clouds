/* Frozen 2D layered-depth maps only. No authoring volume, SDF, or mesh. */
(function(global){
'use strict';
const common=`
float unpack16(vec2 v){vec2 b=floor(v*255.0+.5);return (b.x*256.0+b.y)/65535.0;}
vec3 decodeOct(vec2 e){vec3 n=vec3(e*2.-1.,1.-abs(e.x*2.-1.)-abs(e.y*2.-1.));float t=max(-n.z,0.);n.xy+=vec2(n.x>=0.?-t:t,n.y>=0.?-t:t);return normalize(n);}
vec2 encodeOct(vec3 n){n/=abs(n.x)+abs(n.y)+abs(n.z);vec2 e=n.xy;if(n.z<0.)e=(1.-abs(e.yx))*vec2(e.x>=0.?1.:-1.,e.y>=0.?1.:-1.);return e*.5+.5;}
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
uniform sampler2DArray uDepth0,uNormal0,uDepth1,uNormal1;
uniform sampler2DArray uLightPos0,uLightNeg0,uLightPos1,uLightNeg1;
uniform mat3 uTarget,uSource0,uSource1;
uniform vec2 uCenter,uViews;
uniform float uAspect,uMapAspect,uScale,uHalfHeight,uRange,uDistance,uDepthScale,uOpacity,uTime,uBreathing,uBlend,uInstance;
uniform vec3 uLight;
uniform float uAO,uTransmission,uBands,uSixWay;
uniform int uPalette,uHasLighting;
${common}
struct Hit{vec3 n;float ao;float thickness;float alpha;float z;vec3 lightPos;vec3 lightNeg;float unoccluded;};
Hit emptyHit(){return Hit(vec3(0,0,1),1.,0.,0.,-1e6,vec3(0),vec3(0),0.);}
vec3 axisWeights(){vec3 w=uLight*uLight;return w/max(dot(w,vec3(1)),.00001);}
vec4 depthAt(vec2 uv,int view,int layer){return layer==0?texture(uDepth0,vec3(uv,float(view))):texture(uDepth1,vec3(uv,float(view)));}
vec4 normalAt(vec2 uv,int view,int layer){return layer==0?texture(uNormal0,vec3(uv,float(view))):texture(uNormal1,vec3(uv,float(view)));}
Hit reproject(vec2 xy,mat3 source,int view,int layer){
 vec3 base=uTarget*vec3(xy,0),ray=uTarget[2];float den=dot(ray,source[2]);if(den<.2)return emptyHit();
 float t=0.,lo=-1e6,hi=1e6;vec2 uv=vec2(.5);float aspect=uMapAspect;
 // Quantized, steep depth-map samples can make direct fixed-point updates
 // oscillate across an entire lobe. Bracket the residual and bisect instead.
 // This intersects only the captured 2D depth field, never an author volume.
 for(int i=0;i<18;i++){vec3 p=base+ray*t;uv=vec2(dot(p,source[0])/aspect,dot(p,source[1]))/(2.*uHalfHeight)+.5;
 vec4 d=depthAt(uv,view,layer);float z=(unpack16(d.rg)*2.-1.)*uRange;
 float next=(z-dot(base,source[2]))/den,residual=t-next;
 if(abs(residual)<.0001){t=next;break;}
 if(residual>0.)hi=min(hi,t);else lo=max(lo,t);
 if(hi<1e5&&lo>-1e5&&lo<hi)t=(lo+hi)*.5;else t=mix(t,next,.5);
 }
 vec3 p=base+ray*t;uv=vec2(dot(p,source[0])/aspect,dot(p,source[1]))/(2.*uHalfHeight)+.5;
 if(any(lessThan(uv,vec2(0)))||any(greaterThan(uv,vec2(1))))return emptyHit();
 vec4 nm=normalAt(uv,view,layer);if(nm.a<.5)return emptyHit();
 vec4 d=depthAt(uv,view,layer);float front=(unpack16(d.rg)*2.-1.)*uRange,back=(unpack16(d.ba)*2.-1.)*uRange;
 float solved=(front-dot(base,source[2]))/den;
 float residual=abs(solved-t)*sqrt(max(0.,1.-den*den));
 if(residual>3.*uHalfHeight/float(textureSize(uDepth0,0).y))return emptyHit();
 vec3 positive=vec3(0),negative=vec3(0);
 if(uHasLighting==1&&uSixWay>0.){
  vec3 coord=vec3(uv,float(view));
  positive=layer==0?texture(uLightPos0,coord).rgb:texture(uLightPos1,coord).rgb;
  negative=layer==0?texture(uLightNeg0,coord).rgb:texture(uLightNeg1,coord).rgb;
 }
 vec3 normal=decodeOct(nm.rg),signedNormal=mix(-normal,normal,step(vec3(0),uLight));
 float unoccluded=dot(max(signedNormal,vec3(0)),axisWeights());
 float thickness=max(front-back,0.);return Hit(normal,nm.b,thickness,1.-exp(-thickness*12.),solved,positive,negative,unoccluded);
}
Hit viewHit(vec2 xy,mat3 source,int view){Hit a=reproject(xy,source,view,0),b=reproject(xy,source,view,1);if(b.alpha>.01&&b.z>a.z)return b;return a;}
vec3 lightCloud(Hit h){
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
 if(uBands>1.)v=floor(v*(uBands-1.)+.5)/(uBands-1.);
 vec3 dark=vec3(.29,.45,.53),mid=vec3(.64,.77,.76),lit=vec3(.99,.94,.80);
 if(uPalette==1){dark=vec3(.30,.36,.51);mid=vec3(.70,.64,.65);lit=vec3(1.,.79,.56);}
 if(uPalette==2){dark=vec3(.16,.29,.40);mid=vec3(.43,.59,.66);lit=vec3(.78,.89,.88);}
 vec3 c=mix(dark,mid,smoothstep(0.,.6,v));c=mix(c,lit,smoothstep(.5,1.,v));
 float rim=pow(clamp(1.-dot(n,uTarget[2]),0.,1.),3.)*max(dot(n,uLight),0.);
 float transmit=exp(-h.thickness*1.1)*pow(max(dot(-uLight,uTarget[2]),0.),2.)*uTransmission;
 return mix(c,lit,clamp(rim*.13+transmit*.38,0.,.65));
}
void main(){
 vec2 xy=(screen*vec2(uAspect,1)-uCenter)/uScale*uHalfHeight;
 xy+=vec2(sin(xy.y*.85+uTime*.63)+.35*sin(xy.x*1.3-uTime*.47),cos(xy.x*.85-uTime*.55)*.65)*uBreathing*uHalfHeight;
 Hit h=viewHit(xy,uSource0,int(uViews.x));
 if(uViews.y>=0.){Hit b=viewHit(xy,uSource1,int(uViews.y));
  // Never average an occupied surface with sky or unrelated depth layers.
  // The nearest capture owns coverage. Filling its sky from a second view
  // makes disconnected ghost silhouettes appear immediately off a capture.
  if(b.alpha>.98&&h.alpha>.98&&abs(b.z-h.z)<uRange*.04&&dot(b.n,h.n)>.8){
   h.n=normalize(mix(h.n,b.n,uBlend));h.ao=mix(h.ao,b.ao,uBlend);h.thickness=mix(h.thickness,b.thickness,uBlend);h.z=mix(h.z,b.z,uBlend);
   h.lightPos=mix(h.lightPos,b.lightPos,uBlend);h.lightNeg=mix(h.lightNeg,b.lightNeg,uBlend);
   // Match the response blend instead of renormalizing its reference normal;
   // that would manufacture occlusion between two unblocked capture views.
   h.unoccluded=mix(h.unoccluded,b.unoccluded,uBlend);
  }
 }
 if(h.alpha<.01||uOpacity<=0.)discard;
 float distance=max(.001,uDistance-h.z*uDepthScale);
 gl_FragDepth=distance/(distance+1.);
 float alpha=h.alpha*uOpacity;color=vec4(lightCloud(h)*alpha,alpha);
 surface=vec4(encodeOct(transpose(uTarget)*h.n),distance,uInstance);
}`;
const post=`#version 300 es
precision highp float;
in vec2 screen;out vec4 color;
uniform sampler2D uColor,uSurface;
uniform vec2 uSize;
uniform vec3 uLight,uSky;
uniform float uHaze,uShadow,uShadowReach;
${common}
void main(){
 vec2 uv=screen*.5+.5;vec4 c=texture(uColor,uv),s=texture(uSurface,uv);vec3 bg=uSky;
 if(s.a<.5){color=vec4(bg,1);return;}
 float occ=0.;vec2 dir=uLight.xy;float len=length(dir);
 if(uShadow>0.&&len>.01){dir/=len;float span=max(1.,uShadowReach);
  for(int i=1;i<=12;i++){
   float px=span*float(i)/12.;vec2 q=uv+dir*px/uSize;
   if(any(lessThan(q,vec2(0)))||any(greaterThan(q,vec2(1))))continue;
   vec4 blocker=texture(uSurface,q);if(blocker.a<.5||abs(blocker.a-s.a)<.5)continue;
   float travel=2.*px/uSize.y*s.b;
   float expected=s.b-travel*uLight.z/len;
   float bias=max(.004,s.b*2./uSize.y);
   float hit=smoothstep(bias,bias*3.,expected-blocker.b);
   // Local recesses use baked AO. Screen samples shadow other instances only;
   // sampling steep same-cloud silhouette depth creates comb-like self-shadows.
   occ=max(occ,hit*(1.-float(i)/16.));
  }
 }
 c.rgb*=1.-clamp(uShadow,0.,1.)*occ*.55;
 float haze=1.-exp(-max(uHaze,0.)*s.b*.025);c.rgb=mix(c.rgb,bg*c.a,haze);
 color=vec4(c.rgb+bg*(1.-c.a),1.);
}`;
global.FoundryShaders={vertex,cloud,post};
})(window);
