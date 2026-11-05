const FULLSCREEN_VERT=`#version 300 es
precision highp float;
out vec2 vUV;
void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUV=p;gl_Position=vec4(p*2.0-1.0,0.0,1.0);}`;
const COMMON_GLSL=`
vec2 encodeOct(vec3 n){n/=abs(n.x)+abs(n.y)+abs(n.z);vec2 e=n.xy;if(n.z<0.0)e=(1.0-abs(e.yx))*vec2(e.x>=0.0?1.0:-1.0,e.y>=0.0?1.0:-1.0);return e*.5+.5;}
vec3 decodeOct(vec2 e){vec3 n=vec3(e*2.0-1.0,1.0-abs(e.x*2.0-1.0)-abs(e.y*2.0-1.0));float t=clamp(-n.z,0.0,1.0);n.xy+=vec2(n.x>=0.0?-t:t,n.y>=0.0?-t:t);return normalize(n);}
vec2 pack16(float v){float z=floor(clamp(v,0.0,1.0)*65535.0+.5);return vec2(floor(z/256.0),mod(z,256.0))/255.0;}
float unpack16(vec2 v){vec2 b=floor(v*255.0+.5);return (b.x*256.0+b.y)/65535.0;}
mat3 cameraBasis(float yaw,float pitch){float cy=cos(yaw),sy=sin(yaw),cp=cos(pitch),sp=sin(pitch);return mat3(vec3(cy,0.0,-sy),vec3(-sy*sp,cp,-cy*sp),vec3(sy*cp,sp,cy*cp));}
`;
const LIGHT_GLSL=`
uniform vec3 uLight;
uniform float uAO,uTransmission,uBands;
uniform int uPalette;
vec3 skyColor(float y){if(uPalette==1)return mix(vec3(.78,.59,.49),vec3(.29,.43,.52),smoothstep(0.0,1.0,y));if(uPalette==2)return mix(vec3(.19,.34,.41),vec3(.07,.16,.26),smoothstep(0.0,1.0,y));return mix(vec3(.66,.77,.74),vec3(.26,.47,.56),smoothstep(0.0,1.0,y));}
vec3 cloudColor(vec3 n,vec3 towardCamera,float ao,float thickness){
 float diffuse=clamp((dot(n,uLight)+.2)/1.2,0.0,1.0);
 float value=clamp(.19+diffuse*.81-(1.0-ao)*uAO*.26,0.0,1.0);
 if(uBands>1.0)value=floor(value*(uBands-1.0)+.5)/(uBands-1.0);
 vec3 dark=vec3(.29,.45,.53),mid=vec3(.64,.77,.76),lit=vec3(.99,.94,.80);
 if(uPalette==1){dark=vec3(.30,.36,.51);mid=vec3(.70,.64,.65);lit=vec3(1.0,.79,.56);}
 if(uPalette==2){dark=vec3(.16,.29,.40);mid=vec3(.43,.59,.66);lit=vec3(.78,.89,.88);}
 vec3 col=mix(dark,mid,smoothstep(0.0,.6,value));col=mix(col,lit,smoothstep(.5,1.0,value));
 float rim=pow(clamp(1.0-dot(n,towardCamera),0.0,1.0),3.0)*max(dot(n,uLight),0.0);
 float back=pow(max(dot(-uLight,towardCamera),0.0),2.0);
 float transmit=exp(-max(thickness,0.0)*1.1)*back*uTransmission;
 col=mix(col,lit,clamp(rim*.13+transmit*.38,0.0,.65));return col;
}
`;
const SDF_GLSL=`
precision highp sampler3D;
uniform int uCount,uCutCount,uHasVolume;
uniform vec4 uCenter[${MAX_PRIMITIVES}],uRadii[${MAX_PRIMITIVES}],uCuts[${MAX_CUTS}];
uniform float uJoin,uInflate,uErosion,uFrequency,uNormalRadius,uRange;
uniform sampler3D uVolume;
uniform vec3 uGridLo,uGridHi;
uniform float uBillow,uBillowScale,uSeed;
float smoothMin(float a,float b,float k){float h=max(k-abs(a-b),0.0)/max(k,.0001);return min(a,b)-h*h*k*.25;}
float ellipsoidBound(vec3 p,vec3 r){float k0=length(p/r),k1=length(p/(r*r));return k1>.00001?k0*(k0-1.0)/k1:-min(r.x,min(r.y,r.z));}
float hash31(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
float smoothNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*f*(f*(f*6.0-15.0)+10.0);return mix(mix(mix(hash31(i),hash31(i+vec3(1,0,0)),f.x),mix(hash31(i+vec3(0,1,0)),hash31(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash31(i+vec3(0,0,1)),hash31(i+vec3(1,0,1)),f.x),mix(hash31(i+vec3(0,1,1)),hash31(i+vec3(1,1,1)),f.x),f.y),f.z);}
float field(vec3 p){
 float d=8.0;
 if(uHasVolume==1){
  vec3 q=(p-uGridLo)/(uGridHi-uGridLo);vec3 n=vec3(textureSize(uVolume,0));
  vec3 uv=(clamp(q,0.0,1.0)*(n-1.0)+.5)/n;
  d=texture(uVolume,uv).r;
  vec3 beyond=max(max(uGridLo-p,p-uGridHi),0.0);
  if(any(greaterThan(beyond,vec3(0))))return max(.05,d)+length(beyond);
 }else{
  for(int i=0;i<${MAX_PRIMITIVES};i++){if(i>=uCount)break;vec3 q=p-uCenter[i].xyz;float a=uCenter[i].w;q.xy=mat2(cos(a),-sin(a),sin(a),cos(a))*q.xy;d=smoothMin(d,ellipsoidBound(q,uRadii[i].xyz),uJoin);}
 }
 // Explicit art layer, NOT part of the atmospheric solver. Applied to the
 // final scalar union; normals are always derived from that same field.
 vec3 q=p*uBillowScale+vec3(uSeed*.07,2.3,-1.7);
 float broad=smoothNoise(q+vec3(smoothNoise(q*.53+5.0)*.65));
 float lobes=smoothNoise(q*2.05+vec3(8.2,-3.6,5.1));
 float fine=smoothNoise(q*3.9+vec3(1.9,6.4,-9.1));
 float swell=(broad*.62+lobes*.29+fine*.09);
 d-=uInflate;
 if(uErosion>.0001)d+=uErosion*(smoothNoise(p*uFrequency*2.0+12.6)-.3);
 return d;
}
vec3 fieldNormal(vec3 p){float e=uNormalRadius;return normalize(vec3(field(p+vec3(e,0,0))-field(p-vec3(e,0,0)),field(p+vec3(0,e,0))-field(p-vec3(0,e,0)),field(p+vec3(0,0,e))-field(p-vec3(0,0,e)))+vec3(0,0,.000001));}
float fieldAO(vec3 p,vec3 n){float occ=0.0,w=1.0;for(int i=0;i<5;i++){float h=.10+float(i)*.22;occ+=max(h-field(p+n*h),0.0)*w;w*=.64;}return clamp(1.0-occ*1.45,.12,1.0);}
float findEntry(vec3 ro,vec3 rd,float start){float t=start;for(int i=0;i<192;i++){if(t>2.0*uRange)return -1.0;float d=field(ro+rd*t);if(d<.004)return t;t+=clamp(d*.44,.012,.55);}return -1.0;}
float findExit(vec3 ro,vec3 rd,float entry){float t=entry+.018,prev=entry;for(int i=0;i<192;i++){if(t>2.0*uRange)return 2.0*uRange;float d=field(ro+rd*t);if(d>.002){float lo=prev,hi=t;for(int j=0;j<5;j++){float m=(lo+hi)*.5;if(field(ro+rd*m)>0.0)hi=m;else lo=m;}return (lo+hi)*.5;}prev=t;t+=clamp(abs(d)*.44,.018,.42);}return min(t,2.0*uRange);}
`;
const AUTHOR_FRAG=`#version 300 es
precision highp float;
in vec2 vUV;out vec4 color;
uniform vec2 uResolution;
uniform mat3 uBasis;
uniform float uHalfHeight;
uniform vec3 uViewCenter;
${COMMON_GLSL}${LIGHT_GLSL}${SDF_GLSL}
void main(){vec2 xy=(vUV-.5)*vec2(uResolution.x/uResolution.y,1.0)*2.0*uHalfHeight;vec3 ro=uViewCenter+uBasis*vec3(xy,uRange),rd=-uBasis[2];vec3 bg=skyColor(vUV.y);float t=findEntry(ro,rd,0.0);if(t<0.0){color=vec4(bg,1);return;}vec3 p=ro+rd*t;vec3 n=fieldNormal(p);float ao=fieldAO(p,n),exitT=findExit(ro,rd,t),thick=max(exitT-t,0.0);float a=1.0-exp(-thick*12.0);color=vec4(mix(bg,cloudColor(n,uBasis[2],ao,thick),a),1);}
`;
const BAKE_FRAG=`#version 300 es
precision highp float;
in vec2 vUV;
layout(location=0)out vec4 depth0;
layout(location=1)out vec4 normal0;
layout(location=2)out vec4 depth1;
layout(location=3)out vec4 normal1;
uniform mat3 uBasis;
uniform float uHalfHeight;
uniform vec3 uViewCenter;
${COMMON_GLSL}${SDF_GLSL}
vec4 packedInterval(float a,float b){float nearZ=uRange-a,farZ=uRange-b;return vec4(pack16((nearZ/uRange+1.0)*.5),pack16((farZ/uRange+1.0)*.5));}
void main(){depth0=vec4(0);normal0=vec4(.5,.5,1,0);depth1=vec4(0);normal1=vec4(.5,.5,1,0);vec2 xy=(vUV-.5)*vec2(4.0/3.0,1.0)*2.0*uHalfHeight;vec3 ro=uViewCenter+uBasis*vec3(xy,uRange),rd=-uBasis[2];float a=findEntry(ro,rd,0.0);if(a<0.0)return;float b=findExit(ro,rd,a);vec3 p=ro+rd*a,n=fieldNormal(p);depth0=packedInterval(a,b);normal0=vec4(encodeOct(n),fieldAO(p,n),1);a=findEntry(ro,rd,b+.035);if(a<0.0)return;b=findExit(ro,rd,a);p=ro+rd*a;n=fieldNormal(p);depth1=packedInterval(a,b);normal1=vec4(encodeOct(n),fieldAO(p,n),1);}
`;
const BACKGROUND_FRAG=`#version 300 es
precision highp float;
in vec2 vUV;out vec4 color;
uniform vec2 uResolution,uPlayer;
uniform int uOverlay;
${LIGHT_GLSL}
float rect(vec2 p,vec2 a,vec2 b){return step(a.x,p.x)*step(a.y,p.y)*step(p.x,b.x)*step(p.y,b.y);}
void main(){if(uOverlay==0){vec3 col=skyColor(vUV.y);float line=.10+sin(vUV.x*9.0+uPlayer.x*.4)*.018+sin(vUV.x*23.0-uPlayer.x*.6)*.011;float land=1.0-smoothstep(line,line+.002,vUV.y);vec3 ground=mix(vec3(.20,.33,.36),vec3(.44,.57,.54),uPalette==2?0.0:.5);col=mix(col,ground,land*.65);if(uPalette==2){vec2 cell=floor(vUV*uResolution/3.0);float star=fract(sin(dot(cell,vec2(12.9898,78.233)))*43758.5453);if(star>.997&&vUV.y>.45)col+=vec3(.19);}color=vec4(col,1);return;}
 vec2 p=(vUV-vec2(.5+uPlayer.x*.26,.12))*vec2(uResolution.x,uResolution.y);float hood=rect(p,vec2(-3,7),vec2(3,13));float body=rect(p,vec2(-3,2),vec2(3,8));float face=rect(p,vec2(0,9),vec2(3,11));float pack=rect(p,vec2(-5,3),vec2(-3,7));float legs=max(rect(p,vec2(-3,-1),vec2(-1,2)),rect(p,vec2(1,-1),vec2(3,2)));float shadow=rect(p,vec2(-7,-2),vec2(7,-1));vec3 col=vec3(.9,.75,.47);float a=max(max(hood,body),max(pack,legs));col=mix(col,vec3(.20,.31,.35),face);col=mix(col,vec3(.42,.53,.48),pack);col=mix(col,vec3(.18,.29,.32),legs);if(shadow>0.0){color=vec4(.08,.16,.18,.6);return;}color=vec4(col*a,a);}
`;
const RUNTIME_FRAG=`#version 300 es
precision highp float;
precision highp sampler2DArray;
in vec2 vUV;out vec4 color;
uniform sampler2DArray uDepth0,uNormal0,uDepth1,uNormal1;
uniform vec2 uResolution,uMapSize,uAngles,uArc,uCenter;
uniform float uHalfHeight,uRange,uTime,uBreathing,uCloudScale,uAtmosphere;
uniform int uGrid,uBlendViews,uHiddenLayer;
uniform vec2 uViewAngles[15];
${COMMON_GLSL}${LIGHT_GLSL}
struct Hit{vec3 n;float ao;float thickness;float alpha;float distance;};
Hit emptyHit(){return Hit(vec3(0,0,1),1.0,0.0,0.0,-10000.0);}
vec4 readDepth(vec2 uv,int view,int layer){return layer==0?texture(uDepth0,vec3(uv,float(view))):texture(uDepth1,vec3(uv,float(view)));}
vec4 readNormal(vec2 uv,int view,int layer){return layer==0?texture(uNormal0,vec3(uv,float(view))):texture(uNormal1,vec3(uv,float(view)));}
Hit reproject(vec2 xy,mat3 target,mat3 source,int view,int layer){
 vec3 base=target*vec3(xy,0),ray=target[2];float den=dot(ray,source[2]);float t=0.0;vec2 uv=vec2(.5);vec4 d=vec4(0);
 for(int i=0;i<4;i++){vec3 p=base+ray*t;uv=vec2(dot(p,source[0])/(uHalfHeight*8.0/3.0),dot(p,source[1])/(uHalfHeight*2.0))+.5;d=readDepth(uv,view,layer);float z=(unpack16(d.rg)*2.0-1.0)*uRange;t=(z-dot(base,source[2]))/max(den,.5);}
 vec3 p=base+ray*t;uv=vec2(dot(p,source[0])/(uHalfHeight*8.0/3.0),dot(p,source[1])/(uHalfHeight*2.0))+.5;
 if(any(lessThan(uv,vec2(0)))||any(greaterThan(uv,vec2(1))))return emptyHit();
 vec4 nm=readNormal(uv,view,layer);if(nm.a<.5)return emptyHit();d=readDepth(uv,view,layer);
 float zf=(unpack16(d.rg)*2.0-1.0)*uRange,zb=(unpack16(d.ba)*2.0-1.0)*uRange;float thickness=max(zf-zb,0.0);float alpha=1.0-exp(-thickness*12.0);return Hit(decodeOct(nm.rg),nm.b,thickness,alpha,(zf-dot(base,source[2]))/max(den,.5));
}
vec4 sampleView(vec2 xy,mat3 target,int ix,int iy){float yaw=uGrid==1?0.0:(float(ix)-1.0)*uArc.x;float pitch=uGrid==9?(float(iy)-1.0)*uArc.y:0.0;int view=uGrid==1?0:(uGrid==9?iy*3+ix:ix);if(uGrid==15){view=ix;yaw=uViewAngles[view].x;pitch=uViewAngles[view].y;}mat3 source=cameraBasis(yaw,pitch);Hit a=reproject(xy,target,source,view,0);Hit b=emptyHit();if(uHiddenLayer==1)b=reproject(xy,target,source,view,1);if(b.distance>a.distance){Hit temp=a;a=b;b=temp;}vec3 ca=cloudColor(a.n,target[2],a.ao,a.thickness),cb=cloudColor(b.n,target[2],b.ao,b.thickness);return vec4(ca*a.alpha+cb*b.alpha*(1.0-a.alpha),a.alpha+b.alpha*(1.0-a.alpha));}
void main(){vec2 xy=(vUV-.5)*vec2(uResolution.x/uResolution.y,1.0)*2.0;xy=(xy-uCenter)/uCloudScale*uHalfHeight;
 if(abs(xy.x)>uHalfHeight*1.65||abs(xy.y)>uHalfHeight*1.30){color=vec4(0);return;}
 float amp=uBreathing*uHalfHeight;
 xy+=vec2(sin(xy.y*.85+uTime*.63)+.35*sin(xy.x*1.3-uTime*.47),cos(xy.x*.85-uTime*.55)*.65)*amp;
 vec2 angle=uGrid==15?clamp(uAngles,vec2(-.610865,-1.48353),vec2(.610865,.349066)):clamp(uAngles,-uArc,uArc);if(uGrid==1)angle=clamp(uAngles,vec2(-.085),vec2(.085));if(uGrid==3)angle.y=clamp(uAngles.y,-.055,.055);
 mat3 target=cameraBasis(angle.x,angle.y);vec4 c=vec4(0);
 if(uGrid==15){float best=-2.0;int nearest=0;for(int i=0;i<15;i++){float score=dot(cameraBasis(uViewAngles[i].x,uViewAngles[i].y)[2],target[2]);if(score>best){best=score;nearest=i;}}c=sampleView(xy,target,nearest,0);}else if(uGrid==1)c=sampleView(xy,target,0,0);else{vec2 coord=vec2(angle.x/uArc.x+1.0,uGrid==9?angle.y/uArc.y+1.0:0.0);coord=clamp(coord,vec2(0),vec2(2));if(uBlendViews==0){ivec2 id=ivec2(floor(coord+.5));c=sampleView(xy,target,id.x,id.y);}else{ivec2 lo=ivec2(floor(coord));ivec2 hi=min(lo+ivec2(1),ivec2(2));vec2 w=fract(coord);if(uGrid==3){lo.y=0;hi.y=0;w.y=0.0;}float a=(1.0-w.x)*(1.0-w.y),b=w.x*(1.0-w.y),d=(1.0-w.x)*w.y,e=w.x*w.y;if(a>.0001)c+=sampleView(xy,target,lo.x,lo.y)*a;if(b>.0001)c+=sampleView(xy,target,hi.x,lo.y)*b;if(d>.0001)c+=sampleView(xy,target,lo.x,hi.y)*d;if(e>.0001)c+=sampleView(xy,target,hi.x,hi.y)*e;}}
 float keep=smoothstep(0.028,0.085,c.a);c*=keep;
 c.rgb=mix(c.rgb,skyColor(vUV.y)*c.a,uAtmosphere);color=c;
}

`;
