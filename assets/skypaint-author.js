// Generated SkyPaint author-only adapter. Rebuild: node tools/bake-skypaint.cjs --bundle-only
/*!
SkyPaint authoring adapter third-party notices
Three.js
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


Cloud Nodes Studio adaptation
MIT License

Copyright (c) 2026 Cloud Nodes Studio contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

The license covers this original application, documentation and test code.
Referenced third-party publications, software and trademarks remain subject
to their respective owners' rights; their implementation code is not bundled.


Pako
(The MIT License)

Copyright (C) 2014-2017 by Vitaly Puzrin and Andrei Tuputcyn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


Pako zlib modules
(C) 1995-2013 Jean-loup Gailly and Mark Adler
(C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin

This software is provided 'as-is', without any express or implied
warranty. In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not
  claim that you wrote the original software. If you use this software
  in a product, an acknowledgment in the product documentation would be
  appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be
  misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.
*/
(()=>{var Qt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lf=0,Eh=1,cf=2;var Zr=1,hf=2,tr=3,Gn=0,ei=1,li=2,Ci=0,ir=1,Th=2,Ah=3,Rh=4,uf=5;var cs=100,df=101,ff=102,pf=103,mf=104,gf=200,_f=201,yf=202,xf=203,Ch=204,Ih=205,vf=206,Sf=207,bf=208,Mf=209,wf=210,Ef=211,Tf=212,Af=213,Rf=214,Mo=0,wo=1,Eo=2,Ys=3,To=4,Ao=5,Ro=6,Co=7,Ph=0,Cf=1,If=2,Bi=0,Lh=1,Dh=2,Nh=3,Uh=4,Fh=5,Oh=6,Bh=7;var kh=300,Wn=301,hs=302,Jo=303,Qo=304,Kr=306,Ai=1e3,Xi=1001,Io=1002,mt=1003,Pf=1004;var jr=1005;var Je=1006,el=1007;var Xn=1008;var ot=1009,zh=1010,Hh=1011,nr=1012,tl=1013,ki=1014,Dt=1015,Zt=1016,il=1017,nl=1018,sr=1020,Vh=35902,Gh=35899,Wh=1021,Xh=1022,gt=1023,Yi=1026,Yn=1027,qi=1028,sl=1029,Zi=1030,rl=1031;var al=1033,$r=33776,Jr=33777,Qr=33778,ea=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37488,ml=37489,ta=37490,gl=37491,_l=37808,yl=37809,xl=37810,vl=37811,Sl=37812,bl=37813,Ml=37814,wl=37815,El=37816,Tl=37817,Al=37818,Rl=37819,Cl=37820,Il=37821,Pl=36492,Ll=36494,Dl=36495,Nl=36283,Ul=36284,ia=36285,Fl=36286;var Nr=2300,Po=2301,So=2302,_h=2303,yh=2400,xh=2401,vh=2402;var Lf=3200;var Yh=0,Df=1,xn="",pi="srgb",Ur="srgb-linear",Fr="linear",it="srgb";var bo=7680;var Nf=519,Uf=512,Ff=513,Of=514,Ol=515,Bf=516,kf=517,Bl=518,zf=519,Hf=35044;var Si="300 es",Fi=2e3,Or=2001;function Fg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Og(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vf(){let i=Br("canvas");return i.style.display="block",i}var Dd={},qs=null;function qh(...i){let e="THREE."+i.shift();qs?qs("log",e,...i):console.log(e,...i)}function Gf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Gf(i);let e="THREE."+i.shift();if(qs)qs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pe(...i){i=Gf(i);let e="THREE."+i.shift();if(qs)qs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function as(...i){let e=i.join(" ");e in Dd||(Dd[e]=!0,Ce(...i))}function Wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xf={[Mo]:wo,[Eo]:Ro,[To]:Co,[Ys]:Ao,[wo]:Mo,[Ro]:Eo,[Co]:To,[Ao]:Ys},Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,Lr=Math.PI/180,Zs=180/Math.PI;function rr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function Bg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kg(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function zg(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function Hg(i,e=1){return e-Math.abs(Zh(i,e*2)-e)}function Vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xg(i,e){return i+Math.random()*(e-i)}function Yg(i){return i*(.5-Math.random())}function qg(i){i!==void 0&&(Nd=i);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zg(i){return i*Lr}function Kg(i){return i*Zs}function jg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $g(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ws(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var na={DEG2RAD:Lr,RAD2DEG:Zs,generateUUID:rr,clamp:Ve,euclideanModulo:Zh,mapLinear:Bg,inverseLerp:kg,lerp:Dr,damp:zg,pingpong:Hg,smoothstep:Vg,smootherstep:Gg,randInt:Wg,randFloat:Xg,randFloatSpread:Yg,seededRandom:qg,degToRad:Zg,radToDeg:Kg,isPowerOfTwo:jg,ceilPowerOfTwo:$g,floorPowerOfTwo:Jg,setQuaternionFromProperEuler:Qg,normalize:$t,denormalize:Ws},De=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o;let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jc=new I,Ud=new ct,Ne=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],T=s[4],_=s[7],b=s[2],E=s[5],A=s[8];return r[0]=a*v+o*S+c*b,r[3]=a*m+o*T+c*E,r[6]=a*p+o*_+c*A,r[1]=l*v+h*S+d*b,r[4]=l*m+h*T+d*E,r[7]=l*p+h*_+d*A,r[2]=u*v+f*S+g*b,r[5]=u*m+f*T+g*E,r[8]=u*p+f*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$c=new Ne,Fd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e_(){let i={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=un(s.r),s.g=un(s.g),s.b=un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ur]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Fd,fromXYZ:Od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Fd,fromXYZ:Od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),i}var Ye=e_();function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,Lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Br("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(un(t[n]/255)*255):t[n]=un(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t_=0,Ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jc(s[a].image)):r.push(Jc(s[a]))}else r=Jc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var i_=0,Qc=new I,ri=class i extends Oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xi,s=Xi,r=Je,a=Xn,o=gt,c=ot,l=i.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=rr(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=kh;ri.DEFAULT_ANISOTROPY=1;var Be=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,_=(f+1)/2,b=(p+1)/2,E=(h+u)/4,A=(d+v)/4,y=(g+m)/4;return T>_&&T>b?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=A/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=y/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Do=class extends Oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new ri(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pt=class extends Do{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kr=class extends ri{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jt=class extends ri{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},dn=class extends Pt{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Jt(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},je=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,v,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,v=l*d;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,v=l*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n_,e,s_)}lookAt(e,t,n){let s=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Rn.crossVectors(n,di),Rn.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Rn.crossVectors(n,di)),Rn.normalize(),$a.crossVectors(di,Rn),s[0]=Rn.x,s[4]=$a.x,s[8]=di.x,s[1]=Rn.y,s[5]=$a.y,s[9]=di.y,s[2]=Rn.z,s[6]=$a.z,s[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],T=n[7],_=n[11],b=n[15],E=s[0],A=s[4],y=s[8],w=s[12],R=s[1],C=s[5],P=s[9],N=s[13],D=s[2],U=s[6],z=s[10],H=s[14],$=s[3],W=s[7],K=s[11],Q=s[15];return r[0]=a*E+o*R+c*D+l*$,r[4]=a*A+o*C+c*U+l*W,r[8]=a*y+o*P+c*z+l*K,r[12]=a*w+o*N+c*H+l*Q,r[1]=h*E+d*R+u*D+f*$,r[5]=h*A+d*C+u*U+f*W,r[9]=h*y+d*P+u*z+f*K,r[13]=h*w+d*N+u*H+f*Q,r[2]=g*E+v*R+m*D+p*$,r[6]=g*A+v*C+m*U+p*W,r[10]=g*y+v*P+m*z+p*K,r[14]=g*w+v*N+m*H+p*Q,r[3]=S*E+T*R+_*D+b*$,r[7]=S*A+T*C+_*U+b*W,r[11]=S*y+T*P+_*z+b*K,r[15]=S*w+T*N+_*H+b*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],S=c*f-l*u,T=o*f-l*d,_=o*u-c*d,b=a*f-l*h,E=a*u-c*h,A=a*d-o*h;return t*(v*S-m*T+p*_)-n*(g*S-m*b+p*E)+s*(g*T-v*b+p*A)-r*(g*_-v*E+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=t*o-n*a,T=t*c-s*a,_=t*l-r*a,b=n*c-s*o,E=n*l-r*o,A=s*l-r*c,y=h*v-d*g,w=h*m-u*g,R=h*p-f*g,C=d*m-u*v,P=d*p-f*v,N=u*p-f*m,D=S*N-T*P+_*C+b*R-E*w+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return e[0]=(o*N-c*P+l*C)*U,e[1]=(s*P-n*N-r*C)*U,e[2]=(v*A-m*E+p*b)*U,e[3]=(u*E-d*A-f*b)*U,e[4]=(c*R-a*N-l*w)*U,e[5]=(t*N-s*R+r*w)*U,e[6]=(m*_-g*A-p*T)*U,e[7]=(h*A-u*_+f*T)*U,e[8]=(a*P-o*R+l*y)*U,e[9]=(n*R-t*P-r*y)*U,e[10]=(g*E-v*_+p*S)*U,e[11]=(d*_-h*E-f*S)*U,e[12]=(o*w-a*C-c*y)*U,e[13]=(t*C-n*w+s*y)*U,e[14]=(v*T-g*b-m*S)*U,e[15]=(h*b-d*T+u*S)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,S=c*l,T=c*h,_=c*d,b=n.x,E=n.y,A=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+_)*b,s[2]=(g-T)*b,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(u+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+T)*A,s[9]=(m-S)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),c=Ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Di.copy(this);let l=1/a,h=1/o,d=1/c;return Di.elements[0]*=l,Di.elements[1]*=l,Di.elements[2]*=l,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,t.setFromRotationMatrix(Di),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Fi,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Fi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Or)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fi,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Fi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Or)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ls=new I,Di=new je,n_=new I(0,0,0),s_=new I(1,1,1),Rn=new I,$a=new I,di=new I,Bd=new je,kd=new ct,Ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r_=0,zd=new I,Ds=new ct,rn=new je,Ja=new I,Ar=new I,a_=new I,o_=new ct,Hd=new I(1,0,0),Vd=new I(0,1,0),Gd=new I(0,0,1),Wd={type:"added"},l_={type:"removed"},Ns={type:"childadded",child:null},eh={type:"childremoved",child:null},Lt=class i extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Ri,n=new ct,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ne}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ar,Ja,this.up):rn.lookAt(Ja,Ar,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(rn),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l_),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,a_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new I(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c_={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Zh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=th(a,r,e+1/3),this.g=th(a,r,e),this.b=th(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=pi){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){let n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=un(e.r),this.g=un(e.g),this.b=un(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Ye.workingToColorSpace(qt.copy(this),e),Math.round(Ve(qt.r*255,0,255))*65536+Math.round(Ve(qt.g*255,0,255))*256+Math.round(Ve(qt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=pi){Ye.workingToColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Qa);let n=Dr(Cn.h,Qa.h,t),s=Dr(Cn.s,Qa.s,t),r=Dr(Cn.l,Qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Fe;Fe.NAMES=Yf;var ai=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new I,an=new I,ih=new I,on=new I,Us=new I,Fs=new I,Xd=new I,nh=new I,sh=new I,rh=new I,ah=new Be,oh=new Be,lh=new Be,Dn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ni.subVectors(s,t),an.subVectors(n,t),ih.subVectors(e,t);let a=Ni.dot(Ni),o=Ni.dot(an),c=Ni.dot(ih),l=an.dot(an),h=an.dot(ih),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ah.setScalar(0),oh.setScalar(0),lh.setScalar(0),ah.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,n),lh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ah,r.x),a.addScaledVector(oh,r.y),a.addScaledVector(lh,r.z),a}static isFrontFacing(e,t,n,s){return Ni.subVectors(n,t),an.subVectors(e,t),Ni.cross(an).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ni.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Us.subVectors(s,n),Fs.subVectors(r,n),nh.subVectors(e,n);let c=Us.dot(nh),l=Fs.dot(nh);if(c<=0&&l<=0)return t.copy(n);sh.subVectors(e,s);let h=Us.dot(sh),d=Fs.dot(sh);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Us,a);rh.subVectors(e,r);let f=Us.dot(rh),g=Fs.dot(rh);if(g>=0&&f<=g)return t.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Fs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Xd.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Xd,o);let p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ui):Ui.fromBufferAttribute(r,a),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),to.subVectors(this.max,Rr),Os.subVectors(e.a,Rr),Bs.subVectors(e.b,Rr),ks.subVectors(e.c,Rr),In.subVectors(Bs,Os),Pn.subVectors(ks,Bs),is.subVectors(Os,ks);let t=[0,-In.z,In.y,0,-Pn.z,Pn.y,0,-is.z,is.y,In.z,0,-In.x,Pn.z,0,-Pn.x,is.z,0,-is.x,-In.y,In.x,0,-Pn.y,Pn.x,0,-is.y,is.x,0];return!ch(t,Os,Bs,ks,to)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Os,Bs,ks,to))?!1:(io.crossVectors(In,Pn),t=[io.x,io.y,io.z],ch(t,Os,Bs,ks,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ln=[new I,new I,new I,new I,new I,new I,new I,new I],Ui=new I,eo=new zt,Os=new I,Bs=new I,ks=new I,In=new I,Pn=new I,is=new I,Rr=new I,to=new I,io=new I,ns=new I;function ch(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ns.fromArray(i,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ct=new I,no=new De,h_=0,It=class extends Oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hf,this.updateRanges=[],this.gpuType=Dt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hr=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},u_=new zt,Cr=new I,hh=new I,Nn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):u_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(hh)),this.expandByPoint(Cr.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},d_=0,Ti=new je,uh=new Lt,zs=new I,fi=new zt,Ir=new zt,Bt=new I,xt=class i extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?Hr:zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(fi.min,Ir.min),fi.expandByPoint(Bt),Bt.addVectors(fi.max,Ir.max),fi.expandByPoint(Bt)):(fi.expandByPoint(Ir.min),fi.expandByPoint(Ir.max))}fi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Bt.fromBufferAttribute(o,l),c&&(zs.fromBufferAttribute(e,l),Bt.add(zs)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new It(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new I,c[y]=new I;let l=new I,h=new I,d=new I,u=new De,f=new De,g=new De,v=new I,m=new I;function p(y,w,R){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[y].add(v),o[w].add(v),o[R].add(v),c[y].add(m),c[w].add(m),c[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,w=S.length;y<w;++y){let R=S[y],C=R.start,P=R.count;for(let N=C,D=C+P;N<D;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let T=new I,_=new I,b=new I,E=new I;function A(y){b.fromBufferAttribute(s,y),E.copy(b);let w=o[y];T.copy(w),T.sub(b.multiplyScalar(b.dot(w))).normalize(),_.crossVectors(E,w);let C=_.dot(c[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,C)}for(let y=0,w=S.length;y<w;++y){let R=S[y],C=R.start,P=R.count;for(let N=C,D=C+P;N<D;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new It(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dh=new I,f_=new I,p_=new Ne,mi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=dh.subVectors(n,t).cross(f_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||p_.getNormalMatrix(e),s=this.coplanarPoint(dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},m_=0,fn=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=ir,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ih,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new De().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var cn=new I,fh=new I,so=new I,ro=new I,pn=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fh.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),ro.copy(this.origin).sub(fh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(so),o=ro.dot(this.direction),c=-ro.dot(so),l=ro.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fh).addScaledVector(so,u),f}intersectSphere(e,t){if(e.radius<0)return null;cn.subVectors(e.center,this.origin);let n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,T=n.z-a.z,_=Math.abs(c),b=Math.abs(l),E=Math.abs(h),A,y,w,R,C,P,N,D,U,z,H,$;if(_>=b&&_>=E?(w=c,P=d,U=g,$=p,c>=0?(A=l,y=h,R=u,C=f,N=v,D=m,z=S,H=T):(A=h,y=l,R=f,C=u,N=m,D=v,z=T,H=S)):b>=E?(w=l,P=u,U=v,$=S,l>=0?(A=h,y=c,R=f,C=d,N=m,D=g,z=T,H=p):(A=c,y=h,R=d,C=f,N=g,D=m,z=p,H=T)):(w=h,P=f,U=m,$=T,h>=0?(A=c,y=l,R=d,C=u,N=g,D=v,z=p,H=S):(A=l,y=c,R=u,C=d,N=v,D=g,z=S,H=p)),w===0)return null;let W=A/w,K=y/w,Q=1/w,xe=R-W*P,ve=C-K*P,qe=N-W*U,He=D-K*U,We=z-W*$,Y=H-K*$,Z=We*He-Y*qe,ue=xe*Y-ve*We,Le=qe*ve-He*xe;if(s){if(Z<0||ue<0||Le<0)return null}else if((Z<0||ue<0||Le<0)&&(Z>0||ue>0||Le>0))return null;let se=Z+ue+Le;if(se===0)return null;let Ee=Q*(Z*P+ue*U+Le*$);return(se>0?Ee<0:Ee>0)?null:this.at(Ee/se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yd=new je,ss=new pn,ao=new Nn,qd=new I,oo=new I,lo=new I,co=new I,ph=new I,ho=new I,Zd=new I,uo=new I,re=class extends Lt{constructor(e=new xt,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(ph.fromBufferAttribute(d,e),a?ho.addScaledVector(ph,h):ho.addScaledVector(ph.sub(t),h))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(ao.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ao,qd)===null||ss.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(Yd.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Yd),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,b=T;_<b;_+=3){let E=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=fo(this,p,e,n,l,h,d,E,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=o.getX(m),T=o.getX(m+1),_=o.getX(m+2);s=fo(this,a,e,n,l,h,d,S,T,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,b=T;_<b;_+=3){let E=_,A=_+1,y=_+2;s=fo(this,p,e,n,l,h,d,E,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=m,T=m+1,_=m+2;s=fo(this,a,e,n,l,h,d,S,T,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function g_(i,e,t,n,s,r,a,o){let c;if(e.side===ei?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Gn,o),c===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(uo);return l<t.near||l>t.far?null:{distance:l,point:uo.clone(),object:i}}function fo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,oo),i.getVertexPosition(c,lo),i.getVertexPosition(l,co);let h=g_(i,e,t,n,oo,lo,co,Zd);if(h){let d=new I;Dn.getBarycoord(Zd,oo,lo,co,d),s&&(h.uv=Dn.getInterpolatedAttribute(s,o,c,l,d,new De)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,o,c,l,d,new De)),a&&(h.normal=Dn.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};Dn.getNormal(oo,lo,co,u.normal),h.face=u,h.barycoord=d}return h}var mn=class extends ri{constructor(e=null,t=1,n=1,s,r,a,o,c,l=mt,h=mt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rs=new Nn,__=new De(.5,.5),po=new I,Vr=class{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,a=new mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],T=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-a,f-h,p-g,b-S).normalize(),s[1].setComponents(l+a,f+h,p+g,b+S).normalize(),s[2].setComponents(l+o,f+d,p+v,b+T).normalize(),s[3].setComponents(l-o,f-d,p-v,b-T).normalize(),n)s[4].setComponents(c,u,m,_).normalize(),s[5].setComponents(l-c,f-u,p-m,b-_).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-_).normalize(),t===Fi)s[5].setComponents(l+c,f+u,p+m,b+_).normalize();else if(t===Or)s[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);let t=__.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gn=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},No=new I,Uo=new I,Kd=new je,Pr=new pn,mo=new Nn,mh=new I,jd=new I,gi=class extends Lt{constructor(e=new xt,t=new gn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)No.fromBufferAttribute(t,s-1),Uo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=No.distanceTo(Uo);e.setAttribute("lineDistance",new nt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Kd.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(Kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){let p=h.getX(v),S=h.getX(v+1),T=go(this,e,Pr,c,p,S,v);T&&t.push(T)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=go(this,e,Pr,c,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){let p=go(this,e,Pr,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=go(this,e,Pr,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function go(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(No.fromBufferAttribute(o,s),Uo.fromBufferAttribute(o,r),t.distanceSqToSegment(No,Uo,mh,jd)>n)return;mh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(mh);if(!(l<e.near||l>e.far))return{distance:l,point:jd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $d=new I,Jd=new I,Js=class extends gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$d.fromBufferAttribute(t,s),Jd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$d.distanceTo(Jd);e.setAttribute("lineDistance",new nt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qs=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qd=new je,Sh=new pn,_o=new Nn,yo=new I,Gr=class extends Lt{constructor(e=new xt,t=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Qd.copy(s).invert(),Sh.copy(e.ray).applyMatrix4(Qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=l.getX(g);yo.fromBufferAttribute(d,m),ef(yo,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)yo.fromBufferAttribute(d,g),ef(yo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ef(i,e,t,n,s,r,a){let o=Sh.distanceSqToPoint(i);if(o<t){let c=new I;Sh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wr=class extends ri{constructor(e=[],t=Wn,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Fn=class extends ri{constructor(e,t,n=ki,s,r,a,o=mt,c=mt,l,h=Yi,d=1){if(h!==Yi&&h!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fo=class extends Fn{constructor(e,t=ki,n=Wn,s,r,a=mt,o=mt,c,l=Yi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xr=class extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wt=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function g(v,m,p,S,T,_,b,E,A,y,w){let R=_/A,C=b/y,P=_/2,N=b/2,D=E/2,U=A+1,z=y+1,H=0,$=0,W=new I;for(let K=0;K<z;K++){let Q=K*C-N;for(let xe=0;xe<U;xe++){let ve=xe*R-P;W[v]=ve*S,W[m]=Q*T,W[p]=D,l.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(xe/A),d.push(1-K/y),H+=1}}for(let K=0;K<y;K++)for(let Q=0;Q<A;Q++){let xe=u+Q+U*K,ve=u+Q+U*(K+1),qe=u+(Q+1)+U*(K+1),He=u+(Q+1)+U*K;c.push(xe,ve,He),c.push(ve,qe,He),$+=6}o.addGroup(f,$,w),f+=$,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ht=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function S(){let _=new I,b=new I,E=0,A=(t-e)/n;for(let y=0;y<=r;y++){let w=[],R=y/r,C=R*(t-e)+e;for(let P=0;P<=s;P++){let N=P/s,D=N*c+o,U=Math.sin(D),z=Math.cos(D);b.x=C*U,b.y=-R*n+m,b.z=C*z,d.push(b.x,b.y,b.z),_.set(U,A,z).normalize(),u.push(_.x,_.y,_.z),f.push(N,1-R),w.push(g++)}v.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let R=v[w][y],C=v[w+1][y],P=v[w+1][y+1],N=v[w][y+1];(e>0||w!==0)&&(h.push(R,C,N),E+=3),(t>0||w!==r-1)&&(h.push(C,P,N),E+=3)}l.addGroup(p,E,0),p+=E}function T(_){let b=g,E=new De,A=new I,y=0,w=_===!0?e:t,R=_===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let C=g;for(let P=0;P<=s;P++){let D=P/s*c+o,U=Math.cos(D),z=Math.sin(D);A.x=w*z,A.y=m*R,A.z=w*U,d.push(A.x,A.y,A.z),u.push(0,R,0),E.x=U*.5+.5,E.y=z*.5*R+.5,f.push(E.x,E.y),g++}for(let P=0;P<s;P++){let N=b+P,D=C+P;_===!0?h.push(D,D+1,N):h.push(D+1,D,N),y+=3}l.addGroup(p,y,_===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oo=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let T=new I,_=new I,b=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],_),f(t[E+2],b),c(T,_,b,S)}function c(S,T,_,b){let E=b+1,A=[];for(let y=0;y<=E;y++){A[y]=[];let w=S.clone().lerp(_,y/E),R=T.clone().lerp(_,y/E),C=E-y;for(let P=0;P<=C;P++)P===0&&y===E?A[y][P]=w:A[y][P]=w.clone().lerp(R,P/C)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){let R=Math.floor(w/2);w%2===0?(u(A[y][R+1]),u(A[y+1][R]),u(A[y][R])):(u(A[y][R+1]),u(A[y+1][R+1]),u(A[y+1][R]))}}function l(S){let T=new I;for(let _=0;_<r.length;_+=3)T.x=r[_+0],T.y=r[_+1],T.z=r[_+2],T.normalize().multiplyScalar(S),r[_+0]=T.x,r[_+1]=T.y,r[_+2]=T.z}function h(){let S=new I;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let _=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;a.push(_,1-b)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let T=a[S+0],_=a[S+2],b=a[S+4],E=Math.max(T,_,b),A=Math.min(T,_,b);E>.9&&A<.1&&(T<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,T){let _=S*3;T.x=e[_+0],T.y=e[_+1],T.z=e[_+2]}function g(){let S=new I,T=new I,_=new I,b=new I,E=new De,A=new De,y=new De;for(let w=0,R=0;w<r.length;w+=9,R+=6){S.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),b.copy(S).add(T).add(_).divideScalar(3);let C=m(b);v(E,R+0,S,C),v(A,R+2,T,C),v(y,R+4,_,C)}}function v(S,T,_,b){b<0&&S.x===1&&(a[T]=S.x-1),_.x===0&&_.z===0&&(a[T]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var On=class i extends Oo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_i=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let T=0;T<l;T++){let _=T*d-r;g.push(_,-S,0),v.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let T=S+l*p,_=S+l*(p+1),b=S+1+l*(p+1),E=S+1+l*p;f.push(T,_,E),f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yr=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new I,u=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let S=[],T=p/n,_=a+T*o,b=e*Math.cos(_),E=Math.sqrt(e*e-b*b),A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let w=y/t,R=s+w*r;d.x=-E*Math.cos(R),d.y=b,d.z=E*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(w+A,1-T),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let T=h[p][S+1],_=h[p][S],b=h[p+1][S],E=h[p+1][S+1];(p!==0||a>0)&&f.push(T,_,E),(p!==n-1||c<Math.PI)&&f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _n=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new I,f=new I,g=new I;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,T=(s+1)*(v-1)+m,_=(s+1)*v+m;c.push(p,S,_),c.push(S,T,_)}this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(tf(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(tf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=us(i[t]);for(let s in n)e[s]=n[s]}return e}function tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function y_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var qf={clone:us,merge:Kt},x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new De().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oi=class extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bo=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;i:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break i}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xh:r=e,o=2*t-n;break;case vh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xh:a=e,c=2*n-t;break;case vh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,S=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+S*a[l+b]+T*a[c+b]+_*a[d+b];return r}},Ho=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Vo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Go=class extends Bn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=f*u+g*2,S=d[p],T=d[p+1],_=e*u+g*2,b=h[_],E=h[_+1],A=b_(n,t,S,b,s);r[g]=Zf(A,v,T,E,m)}return r}};function Zf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function S_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function b_(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Zf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=S_(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var xi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),gh(e.settings)&&(n.settings={inTangents:Hs(e.settings.inTangents,Array),outTangents:Hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Po:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break;case _h:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;gh(this.settings)&&(nf(this.settings.inTangents,e),nf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Pe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Og(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[u+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,gh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Po;var kn=class extends xi{constructor(e,t,n){super(e,t,n)}};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=Nr;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Wo.prototype.ValueTypeName="color";var Xo=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Xo.prototype.ValueTypeName="number";var Yo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)ct.slerpFlat(r,0,a,l-o,a,l,c);return r}},qr=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends xi{constructor(e,t,n){super(e,t,n)}};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=Nr;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};qo.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kf=new Zo,Ko=class{constructor(e){this.manager=e!==void 0?e:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var xo=new I,vo=new ct,Wi=new I,vi=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,vo,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,vo,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xo,vo,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,vo,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ln=new I,sf=new De,rf=new De,kt=class extends vi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,sf,rf),t.subVectors(rf,sf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var yn=class extends vi{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Vs=-90,Gs=1,jo=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new kt(Vs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new kt(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new kt(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let c=new kt(Vs,Gs,e,t);c.layers=this.layers,this.add(c);let l=new kt(Vs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var jh="\\[\\]\\.:\\/",M_=new RegExp("["+jh+"]","g"),$h="[^"+jh+"]",w_="[^"+jh.replace("\\.","")+"]",E_=/((?:WC+[\/:])*)/.source.replace("WC",$h),T_=/(WCOD+)?/.source.replace("WCOD",w_),A_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),R_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),C_=new RegExp("^"+E_+T_+A_+R_+"$"),I_=["material","materials","bones","map"],bh=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M_,"")}static parseTrackName(e){let t=C_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);I_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=bh;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aE=new Float32Array(1);var af=new je,Hn=class{constructor(e,t,n=0,s=1/0){this.ray=new pn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return af.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(af),this}intersectObject(e,t=!0,n=[]){return Mh(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mh(e[s],this,n,t);return n.sort(of),n}};function of(i,e){return i.distance-e.distance}function Mh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mh(r[a],e,t,!0)}}var er=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var wh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var os=class extends Js{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new xt;r.setIndex(new It(n,1)),r.setAttribute("position",new nt(s,3)),super(r,new gn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var ls=class extends Oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Jh(i,e,t,n){let s=P_(n);switch(t){case Wh:return i*e;case qi:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case Zi:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case Xh:return i*e*3/s.components*s.byteLength;case gt:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case $r:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(i,8)*Math.max(e,8)/2;case ul:case dl:case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:case ta:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ia:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P_(i){switch(i){case ot:case zh:return{byteLength:1,components:1};case nr:case Hh:case Zt:return{byteLength:2,components:1};case il:case nl:return{byteLength:2,components:4};case ki:case tl:case Dt:return{byteLength:4,components:1};case Vh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _p(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function D_(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var N_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ry=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,by=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ey=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ry=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ly=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:N_,alphahash_pars_fragment:U_,alphamap_fragment:F_,alphamap_pars_fragment:O_,alphatest_fragment:B_,alphatest_pars_fragment:k_,aomap_fragment:z_,aomap_pars_fragment:H_,batching_pars_vertex:V_,batching_vertex:G_,begin_vertex:W_,beginnormal_vertex:X_,bsdfs:Y_,iridescence_fragment:q_,bumpmap_pars_fragment:Z_,clipping_planes_fragment:K_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:$_,clipping_planes_vertex:J_,color_fragment:Q_,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:iy,common:ny,cube_uv_reflection_fragment:sy,defaultnormal_vertex:ry,displacementmap_pars_vertex:ay,displacementmap_vertex:oy,emissivemap_fragment:ly,emissivemap_pars_fragment:cy,colorspace_fragment:hy,colorspace_pars_fragment:uy,envmap_fragment:dy,envmap_common_pars_fragment:fy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ty,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:yy,fog_fragment:xy,fog_pars_fragment:vy,gradientmap_pars_fragment:Sy,lightmap_pars_fragment:by,lights_lambert_fragment:My,lights_lambert_pars_fragment:wy,lights_pars_begin:Ey,lights_toon_fragment:Ay,lights_toon_pars_fragment:Ry,lights_phong_fragment:Cy,lights_phong_pars_fragment:Iy,lights_physical_fragment:Py,lights_physical_pars_fragment:Ly,lights_fragment_begin:Dy,lights_fragment_maps:Ny,lights_fragment_end:Uy,lightprobes_pars_fragment:Fy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:ky,logdepthbuf_vertex:zy,map_fragment:Hy,map_pars_fragment:Vy,map_particle_fragment:Gy,map_particle_pars_fragment:Wy,metalnessmap_fragment:Xy,metalnessmap_pars_fragment:Yy,morphinstance_vertex:qy,morphcolor_vertex:Zy,morphnormal_vertex:Ky,morphtarget_pars_vertex:jy,morphtarget_vertex:$y,normal_fragment_begin:Jy,normal_fragment_maps:Qy,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:ix,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ax,iridescence_pars_fragment:ox,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:hx,project_vertex:ux,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:_x,shadowmap_vertex:yx,shadowmask_pars_fragment:xx,skinbase_vertex:vx,skinning_pars_vertex:Sx,skinning_vertex:bx,skinnormal_vertex:Mx,specularmap_fragment:wx,specularmap_pars_fragment:Ex,tonemapping_fragment:Tx,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Ix,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Dx,background_vert:Nx,background_frag:Ux,backgroundCube_vert:Fx,backgroundCube_frag:Ox,cube_vert:Bx,cube_frag:kx,depth_vert:zx,depth_frag:Hx,distance_vert:Vx,distance_frag:Gx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:Yx,linedashed_frag:qx,meshbasic_vert:Zx,meshbasic_frag:Kx,meshlambert_vert:jx,meshlambert_frag:$x,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:iv,meshphong_frag:nv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:av,meshtoon_frag:ov,points_vert:lv,points_frag:cv,shadow_vert:hv,shadow_frag:uv,sprite_vert:dv,sprite_frag:fv},fe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ji={basic:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Kt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Kt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Kt([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Kt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Kt([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Kt([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Kt([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Kt([fe.lights,fe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ji.physical={uniforms:Kt([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var kl={r:0,b:0,g:0},pv=new je,yp=new Ne;yp.set(-1,0,0,0,1,0,0,0,1);function mv(i,e,t,n,s,r){let a=new Fe(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let _=S.backgroundBlurriness>0;T=e.get(T,_)}return T}function g(S){let T=!1,_=f(S);_===null?m(a,o):_&&_.isColor&&(m(_,1),T=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,T){let _=f(T);_&&(_.isCubeTexture||_.mapping===Kr)?(l===void 0&&(l=new re(new wt(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:us(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yp),l.material.toneMapped=Ye.getTransfer(_.colorSpace)!==it,(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new re(new _i(2,2),new yi({name:"BackgroundMaterial",uniforms:us(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,T){S.getRGB(kl,Kh(i)),t.buffers.color.setClear(kl.r,kl.g,kl.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:p}}function gv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(C,P,N,D,U){let z=!1,H=d(C,D,N,P);r!==H&&(r=H,l(r.object)),z=f(C,D,N,U),z&&g(C,D,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,_(C,P,N,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,P,N,D){let U=D.wireframe===!0,z=n[P.id];z===void 0&&(z={},n[P.id]=z);let H=C.isInstancedMesh===!0?C.id:0,$=z[H];$===void 0&&($={},z[H]=$);let W=$[N.id];W===void 0&&(W={},$[N.id]=W);let K=W[U];return K===void 0&&(K=u(c()),W[U]=K),K}function u(C){let P=[],N=[],D=[];for(let U=0;U<t;U++)P[U]=0,N[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:C,attributes:{},index:null}}function f(C,P,N,D){let U=r.attributes,z=P.attributes,H=0,$=N.getAttributes();for(let W in $)if($[W].location>=0){let Q=U[W],xe=z[W];if(xe===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor)),Q===void 0||Q.attribute!==xe||xe&&Q.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function g(C,P,N,D){let U={},z=P.attributes,H=0,$=N.getAttributes();for(let W in $)if($[W].location>=0){let Q=z[W];Q===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor));let xe={};xe.attribute=Q,Q&&Q.data&&(xe.data=Q.data),U[W]=xe,H++}r.attributes=U,r.attributesNum=H,r.index=D}function v(){let C=r.newAttributes;for(let P=0,N=C.length;P<N;P++)C[P]=0}function m(C){p(C,0)}function p(C,P){let N=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;N[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),U[C]!==P&&(i.vertexAttribDivisor(C,P),U[C]=P)}function S(){let C=r.newAttributes,P=r.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==C[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function T(C,P,N,D,U,z,H){H===!0?i.vertexAttribIPointer(C,P,N,U,z):i.vertexAttribPointer(C,P,N,D,U,z)}function _(C,P,N,D){v();let U=D.attributes,z=N.getAttributes(),H=P.defaultAttributeValues;for(let $ in z){let W=z[$];if(W.location>=0){let K=U[$];if(K===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){let Q=K.normalized,xe=K.itemSize,ve=e.get(K);if(ve===void 0)continue;let qe=ve.buffer,He=ve.type,We=ve.bytesPerElement,Y=He===i.INT||He===i.UNSIGNED_INT||K.gpuType===tl;if(K.isInterleavedBufferAttribute){let Z=K.data,ue=Z.stride,Le=K.offset;if(Z.isInstancedInterleavedBuffer){for(let se=0;se<W.locationSize;se++)p(W.location+se,Z.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let se=0;se<W.locationSize;se++)m(W.location+se);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let se=0;se<W.locationSize;se++)T(W.location+se,xe/W.locationSize,He,Q,ue*We,(Le+xe/W.locationSize*se)*We,Y)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<W.locationSize;Z++)p(W.location+Z,K.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<W.locationSize;Z++)m(W.location+Z);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Z=0;Z<W.locationSize;Z++)T(W.location+Z,xe/W.locationSize,He,Q,xe*We,xe/W.locationSize*Z*We,Y)}}else if(H!==void 0){let Q=H[$];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(W.location,Q);break;case 3:i.vertexAttrib3fv(W.location,Q);break;case 4:i.vertexAttrib4fv(W.location,Q);break;default:i.vertexAttrib1fv(W.location,Q)}}}}S()}function b(){w();for(let C in n){let P=n[C];for(let N in P){let D=P[N];for(let U in D){let z=D[U];for(let H in z)h(z[H].object),delete z[H];delete D[U]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let N in P){let D=P[N];for(let U in D){let z=D[U];for(let H in z)h(z[H].object),delete z[H];delete D[U]}}delete n[C.id]}function A(C){for(let P in n){let N=n[P];for(let D in N){let U=N[D];if(U[C.id]===void 0)continue;let z=U[C.id];for(let H in z)h(z[H].object),delete z[H];delete U[C.id]}}}function y(C){for(let P in n){let N=n[P],D=C.isInstancedMesh===!0?C.id:0,U=N[D];if(U!==void 0){for(let z in U){let H=U[z];for(let $ in H)h(H[$].object),delete H[$];delete U[z]}delete N[D],Object.keys(N).length===0&&delete n[P]}}}function w(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function _v(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function yv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==gt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ot&&A!==Dt&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ce("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:_,maxSamples:b,samples:E}}function xv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mi,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,T=S*4,_=p.clippingState||null;c.value=_,_=h(g,u,T,f);for(let b=0;b!==T;++b)_[b]=t[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,_=f;T!==v;++T,_+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var or=4,vv=6,Sv=20,bv=256,sa=new yn,jf=new Fe,Qh=null,eu=0,tu=0,iu=!1,Mv=new I,ds=new I,Hl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Mv}=r;Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,eu,tu),this._renderer.xr.enabled=iu,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Zt,format:gt,colorSpace:Ur,depthBuffer:!1},s=$f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wv(r)),this._blurMaterial=Tv(r,e,t),this._ggxMaterial=Ev(r,e,t)}return s}_compileMaterial(e){let t=new re(new xt,e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,n,s,r){let c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jf),d.toneMapping=Bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new wt,new Un({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(jf),p=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):_===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;ar(s,_*b,T>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Wn||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ar(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,sa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-or?n-g+or:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ar(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,sa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ar(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,sa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-or?s-this._lodMax+or:0),u=4*(this._cubeSize-h);ar(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,sa)}};function wv(i){let e=[],t=[],n=i,s=i-or+1+vv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,T=p>2?0:-1,_=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];g.set(_,f*u*p);for(let b=0;b<u;b++){let E=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?ds.set(1,A,E):p===1?ds.set(-E,1,-A):p===2?ds.set(-E,A,1):p===3?ds.set(-1,A,-E):p===4?ds.set(-E,-1,A):ds.set(E,A,-1),ds.toArray(v,(p*u+b)*f)}}let m=new xt;m.setAttribute("position",new It(g,f)),m.setAttribute("outputDirection",new It(v,f)),t.push(new re(m,null)),n>or&&n--}return{lodMeshes:t,sizeLods:e}}function $f(i,e,t){let n=new Pt(i,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ev(i,e,t){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Tv(i,e,t){return new yi({name:"SphericalGaussianBlur",defines:{SAMPLES:Sv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Jf(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Qf(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vl=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wt(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:Ci});r.uniforms.tEquirect.value=t;let a=new re(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Je),new jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Av(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Jo||f===Qo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Vl(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Jo||f===Qo,v=f===Wn||f===hs;if(g||v){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Hl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||v&&S&&c(S)?(n===null&&(n=new Hl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Jo?u.mapping=Wn:f===Qo&&(u.mapping=hs),u}function c(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Rv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&as("WebGLRenderer: "+n+" extension not supported."),s}}}function Cv(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let T=0,_=S.length;T<_;T+=3){let b=S[T+0],E=S[T+1],A=S[T+2];u.push(b,E,E,A,A,b)}}else{let S=g.array;v=g.version;for(let T=0,_=S.length/3-1;T<_;T+=3){let b=T+0,E=T+1,A=T+2;u.push(b,E,E,A,A,b)}}let m=new(g.count>=65535?Hr:zr)(u,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Iv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Pv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lv(i,e,t){let n=new WeakMap,s=new Be;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let _=o.attributes.position.count*T,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*b*4*d),A=new kr(E,_,b,d);A.type=Dt,A.needsUpdate=!0;let y=T*4;for(let R=0;R<d;R++){let C=m[R],P=p[R],N=S[R],D=_*b*4*R;for(let U=0;U<C.count;U++){let z=U*y;f===!0&&(s.fromBufferAttribute(C,U),E[D+z+0]=s.x,E[D+z+1]=s.y,E[D+z+2]=s.z,E[D+z+3]=0),g===!0&&(s.fromBufferAttribute(P,U),E[D+z+4]=s.x,E[D+z+5]=s.y,E[D+z+6]=s.z,E[D+z+7]=0),v===!0&&(s.fromBufferAttribute(N,U),E[D+z+8]=s.x,E[D+z+9]=s.y,E[D+z+10]=s.z,E[D+z+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new De(_,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Dv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Nv={[Lh]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};function Uv(i,e,t,n,s,r){let a=new Pt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new xt;l.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nt([0,2,0,0,2,0],2));let h=new oi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new re(l,h),u=new yn(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,S=[],T=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),c!==null&&c.setSize(_,b);for(let E=0;E<S.length;E++){let A=S[E];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){S=_,T=S.length>0&&S[0].isRenderPass===!0;let b=a.width,E=a.height;S.length>0&&o===null&&(o=new Pt(b,E,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),c=new Pt(b,E,{type:Zt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let y=S[A];y.setSize&&y.setSize(b,E)}},this.begin=function(_,b){if(v||_.toneMapping===Bi&&S.length===0)return!1;if(p=b,b!==null){let E=b.width,A=b.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return T===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Bi,!0},this.hasRenderPass=function(){return T},this.end=function(_,b){_.toneMapping=m,v=!0;let E=a,A=o;for(let y=0;y<S.length;y++){let w=S[y];w.enabled!==!1&&(w.render(_,A,E,b),w.needsSwap!==!1&&(E=A,A=A===o?c:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},Ye.getTransfer(f)===it&&(h.defines.SRGB_TRANSFER="");let y=Nv[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var xp=new ri,ru=new Fn(1,1),vp=new kr,Sp=new Jt,bp=new Wr,ep=[],tp=[],ip=new Float32Array(16),np=new Float32Array(9),sp=new Float32Array(4);function cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ep[s];if(r===void 0&&(r=new Float32Array(s),ep[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xl(i,e){let t=tp[e];t===void 0&&(t=new Int32Array(e),tp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function zv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;sp.set(n),i.uniformMatrix2fv(this.addr,!1,sp),Ut(t,n)}}function Hv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;np.set(n),i.uniformMatrix3fv(this.addr,!1,np),Ut(t,n)}}function Vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;ip.set(n),i.uniformMatrix4fv(this.addr,!1,ip),Ut(t,n)}}function Gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function $v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ru.compareFunction=t.isReversedDepthBuffer()?Bl:Ol,r=ru):r=xp,t.setTexture2D(e||r,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sp,s)}function Qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bp,s)}function eS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vp,s)}function tS(i){switch(i){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return kv;case 35674:return zv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return Zv;case 36295:return Kv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return eS}}function iS(i,e){i.uniform1fv(this.addr,e)}function nS(i,e){let t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function sS(i,e){let t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function rS(i,e){let t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function aS(i,e){let t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oS(i,e){let t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lS(i,e){let t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cS(i,e){i.uniform1iv(this.addr,e)}function hS(i,e){i.uniform2iv(this.addr,e)}function uS(i,e){i.uniform3iv(this.addr,e)}function dS(i,e){i.uniform4iv(this.addr,e)}function fS(i,e){i.uniform1uiv(this.addr,e)}function pS(i,e){i.uniform2uiv(this.addr,e)}function mS(i,e){i.uniform3uiv(this.addr,e)}function gS(i,e){i.uniform4uiv(this.addr,e)}function _S(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ru:a=xp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function yS(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sp,r[a])}function xS(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bp,r[a])}function vS(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vp,r[a])}function SS(i){switch(i){case 5126:return iS;case 35664:return nS;case 35665:return sS;case 35666:return rS;case 35674:return aS;case 35675:return oS;case 35676:return lS;case 5124:case 35670:return cS;case 35667:case 35671:return hS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return fS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return vS}}var au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tS(t.type)}},ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SS(t.type)}},lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nu=/(\w+)(\])?(\[|\.)?/g;function rp(i,e){i.seq.push(e),i.map[e.id]=e}function bS(i,e,t){let n=i.name,s=n.length;for(nu.lastIndex=0;;){let r=nu.exec(n),a=nu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){rp(t,l===void 0?new au(o,i,e):new ou(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new lu(o),rp(t,d)),t=d}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);bS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ap(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var MS=37297,wS=0;function ES(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var op=new Ne;function TS(i){Ye._getMatrix(op,Ye.workingColorSpace,i);let e=`mat3( ${op.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ES(i.getShaderSource(e),o)}else return r}function AS(i,e){let t=TS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var RS={[Lh]:"Linear",[Dh]:"Reinhard",[Nh]:"Cineon",[Uh]:"ACESFilmic",[Oh]:"AgX",[Bh]:"Neutral",[Fh]:"Custom"};function CS(i,e){let t=RS[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zl=new I;function IS(){Ye.getLuminanceCoefficients(zl);let i=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function LS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function aa(i){return i!==""}function cp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(i){return i.replace(NS,FS)}var US=new Map;function FS(i,e){let t=ze[e];if(t===void 0){let n=US.get(e);if(n!==void 0)t=ze[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cu(t)}var OS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(i){return i.replace(OS,BS)}function BS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var kS={[Zr]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function zS(i){return kS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var HS={[Wn]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function VS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":HS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var GS={[hs]:"ENVMAP_MODE_REFRACTION"};function WS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":GS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var XS={[Ph]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[If]:"ENVMAP_BLENDING_ADD"};function YS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":XS[i.combine]||"ENVMAP_BLENDING_NONE"}function qS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ZS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=zS(t),l=VS(t),h=WS(t),d=YS(t),u=qS(t),f=PS(t),g=LS(r),v=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(m=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?ze.tonemapping_pars_fragment:"",t.toneMapping!==Bi?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,AS("linearToOutputTexel",t.outputColorSpace),IS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=cu(a),a=cp(a,t),a=hp(a,t),o=cu(o),o=cp(o,t),o=hp(o,t),a=up(a),o=up(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Si?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Si?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+m+a,_=S+p+o,b=ap(s,s.VERTEX_SHADER,T),E=ap(s,s.FRAGMENT_SHADER,_);s.attachShader(v,b),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(E)||"",U=P.trim(),z=N.trim(),H=D.trim(),$=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,E);else{let K=lp(s,b,"vertex"),Q=lp(s,E,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+K+`
`+Q)}else U!==""?Ce("WebGLProgram: Program Info Log:",U):(z===""||H==="")&&(W=!1);W&&(C.diagnostics={runnable:$,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(b),s.deleteShader(E),y=new lr(s,v),w=DS(s,v)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,MS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}var KS=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uu(e),t.set(e,n)),n}},uu=class{constructor(e){this.id=KS++,this.code=e,this.usedTimes=0}};function jS(i){return i===Zi||i===ta||i===ia}function $S(i,e,t,n,s,r){let a=new js,o=new hu,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,w,R,C,P,N){let D=C.fog,U=P.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,$=e.get(y.envMap||z,H),W=$&&$.mapping===Kr?$.image.height:null,K=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Ce("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,xe=Q!==void 0?Q.length:0,ve=0;U.morphAttributes.position!==void 0&&(ve=1),U.morphAttributes.normal!==void 0&&(ve=2),U.morphAttributes.color!==void 0&&(ve=3);let qe,He,We,Y;if(K){let ft=ji[K];qe=ft.vertexShader,He=ft.fragmentShader}else{qe=y.vertexShader,He=y.fragmentShader;let ft=o.getVertexShaderStage(y),et=o.getFragmentShaderStage(y);o.update(y,ft,et),We=ft.id,Y=et.id}let Z=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Le=P.isInstancedMesh===!0,se=P.isBatchedMesh===!0,Ee=!!y.map,ut=!!y.matcap,Ue=!!$,$e=!!y.aoMap,dt=!!y.lightMap,Xe=!!y.bumpMap&&y.wireframe===!1,vt=!!y.normalMap,Ot=!!y.displacementMap,si=!!y.emissiveMap,Mt=!!y.metalnessMap,At=!!y.roughnessMap,B=y.anisotropy>0,Wt=y.clearcoat>0,st=y.dispersion>0,L=y.retroreflectivity>0,x=y.iridescence>0,k=y.sheen>0,X=y.transmission>0,j=B&&!!y.anisotropyMap,ne=Wt&&!!y.clearcoatMap,ae=Wt&&!!y.clearcoatNormalMap,J=Wt&&!!y.clearcoatRoughnessMap,te=x&&!!y.iridescenceMap,oe=x&&!!y.iridescenceThicknessMap,Te=k&&!!y.sheenColorMap,de=k&&!!y.sheenRoughnessMap,le=!!y.specularMap,Ae=!!y.specularColorMap,Ie=!!y.specularIntensityMap,Oe=X&&!!y.transmissionMap,O=X&&!!y.thicknessMap,ce=!!y.gradientMap,ee=!!y.alphaMap,he=y.alphaTest>0,ge=!!y.alphaHash,ie=!!y.extensions,Re=Bi;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Re=i.toneMapping);let Me={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:He,defines:y.defines,customVertexShaderID:We,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:se,batchingColor:se&&P._colorsTexture!==null,instancing:Le,instancingColor:Le&&P.instanceColor!==null,instancingMorph:Le&&P.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:ut,envMap:Ue,envMapMode:Ue&&$.mapping,envMapCubeUVHeight:W,aoMap:$e,lightMap:dt,bumpMap:Xe,normalMap:vt,displacementMap:Ot,emissiveMap:si,normalMapObjectSpace:vt&&y.normalMapType===Df,normalMapTangentSpace:vt&&y.normalMapType===Yh,packedNormalMap:vt&&y.normalMapType===Yh&&jS(y.normalMap.format),metalnessMap:Mt,roughnessMap:At,anisotropy:B,anisotropyMap:j,clearcoat:Wt,clearcoatMap:ne,clearcoatNormalMap:ae,clearcoatRoughnessMap:J,dispersion:st,retroreflection:L,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:k,sheenColorMap:Te,sheenRoughnessMap:de,specularMap:le,specularColorMap:Ae,specularIntensityMap:Ie,transmission:X,transmissionMap:Oe,thicknessMap:O,gradientMap:ce,opaque:y.transparent===!1&&y.blending===ir&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:ge,combine:y.combine,mapUv:Ee&&g(y.map.channel),aoMapUv:$e&&g(y.aoMap.channel),lightMapUv:dt&&g(y.lightMap.channel),bumpMapUv:Xe&&g(y.bumpMap.channel),normalMapUv:vt&&g(y.normalMap.channel),displacementMapUv:Ot&&g(y.displacementMap.channel),emissiveMapUv:si&&g(y.emissiveMap.channel),metalnessMapUv:Mt&&g(y.metalnessMap.channel),roughnessMapUv:At&&g(y.roughnessMap.channel),anisotropyMapUv:j&&g(y.anisotropyMap.channel),clearcoatMapUv:ne&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(y.sheenRoughnessMap.channel),specularMapUv:le&&g(y.specularMap.channel),specularColorMapUv:Ae&&g(y.specularColorMap.channel),specularIntensityMapUv:Ie&&g(y.specularIntensityMap.channel),transmissionMapUv:Oe&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:ee&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(vt||B),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Ee||ee),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&vt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ve,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:si&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===li,flipSided:y.side===ei,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(w,y),S(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let w=f[y.type],R;if(w){let C=ji[w];R=qf.clone(C.uniforms)}else R=y.uniforms;return R}function _(y,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new ZS(i,w,y,s),l.push(R),h.set(w,R)),R}function b(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:_,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:A}}function JS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function QS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function c(u,f,g,v,m,p,S){S.reversedDepth===!0&&(m=-m);let T=o(u,f,g,v,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(u,f,g,v,m,p){let S=o(u,f,g,v,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||QS),n.length>1&&n.sort(f||fp),s.length>1&&s.sort(f||fp)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function eb(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pp,i.set(n,[a])):s>=r.length?(a=new pp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ib(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var nb=0;function sb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rb(i){let e=new tb,t=ib(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new je,a=new je;function o(l){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,T=0,_=0,b=0,E=0,A=0,y=0,w=0,R=0;l.sort(sb);for(let P=0,N=l.length;P<N;P++){let D=l[P],U=D.color,z=D.intensity,H=D.distance,$=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Zi?$=D.shadow.map.texture:$=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=U.r*z,d+=U.g*z,u+=U.b*z;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],z);R++}else if(D.isSunLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,Q=t.get(D);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=$;let xe=K.getViewportCount();for(let ve=0;ve<xe;ve++)n.sunShadowMatrix[v+ve]=K.getMatrix(ve),n.sunShadowCascade[v+ve]=K._cascadeData[ve];v+=xe,g++}n.sun[f]=W,f++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,Q=t.get(D);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=W,m++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(U).multiplyScalar(z),W.distance=H,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[S]=W;let K=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,K.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[S]=K.matrix,D.castShadow){let Q=t.get(D);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=$,A++}S++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=W,T++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let K=D.shadow,Q=t.get(D);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=W,p++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(z),W.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[_]=W,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==S||C.rectAreaLength!==T||C.hemiLength!==_||C.numSunShadows!==g||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==A||C.numSpotMaps!==y||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=S,C.rectAreaLength=T,C.hemiLength=_,C.numSunShadows=g,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=A,C.numSpotMaps=y,C.numLightProbes=R,n.version=nb++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let S=0,T=l.length;S<T;S++){let _=l[S];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(_.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function mp(i){let e=new rb(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ab(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mp(i),e.set(s,[o])):r>=a.length?(o=new mp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cb=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],hb=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],gp=new je,ra=new I,su=new I;function ub(i,e,t){let n=new Vr,s=new De,r=new De,a=new Be,o=new Bo,c=new ko,l={},h=t.maxTextureSize,d={[Gn]:ei,[ei]:Gn,[li]:li},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:ob,fragmentShader:lb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new re(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let p=this.type;this.render=function(E,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===hf&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ci),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=p!==this.type;N&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(U=>U.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,U=E.length;D<U;D++){let z=E[D],H=z.shadow;if(H===void 0){Ce("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let $=H.getFrameExtents();s.multiply($),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,H.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||N===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===tr){if(z.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Pt(s.x,s.y,{format:Zi,type:Zt,minFilter:Je,magFilter:Je,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Fn(s.x,s.y,Dt),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Yi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=mt,H.map.depthTexture.magFilter=mt}else z.isPointLight?(H.map=new Vl(s.x),H.map.depthTexture=new Fo(s.x,ki)):(H.map=new Pt(s.x,s.y),H.map.depthTexture=new Fn(s.x,s.y,ki)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Yi,this.type===Zr?(H.map.depthTexture.compareFunction=W?Bl:Ol,H.map.depthTexture.minFilter=Je,H.map.depthTexture.magFilter=Je):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=mt,H.map.depthTexture.magFilter=mt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let K=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();z.isPointLight!==!0&&H.updateMatrices(z,y);for(let Q=0;Q<K;Q++){let xe=H.getCamera(Q);if(z.isPointLight){let ve=H.camera,qe=H.matrix,He=z.distance||ve.far;He!==ve.far&&(ve.far=He,ve.updateProjectionMatrix()),ra.setFromMatrixPosition(z.matrixWorld),ve.position.copy(ra),su.copy(ve.position),su.add(cb[Q]),ve.up.copy(hb[Q]),ve.lookAt(su),ve.updateMatrixWorld(),qe.makeTranslation(-ra.x,-ra.y,-ra.z),gp.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),H._frustum.setFromProjectionMatrix(gp,ve.coordinateSystem,ve.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(H.map),i.clear());let ve=H.getViewport(Q);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),P.viewport(a)}n=H.getFrustum(Q),_(A,y,xe,z,this.type)}H.isPointLightShadow!==!0&&this.type===tr&&S(H,y),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,C)};function S(E,A){let y=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Pt(s.x,s.y,{format:Zi,type:Zt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,y,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,y,f,v,null)}function T(E,A,y,w){let R=null,C=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)R=C;else if(R=y.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=R.uuid,N=A.uuid,D=l[P];D===void 0&&(D={},l[P]=D);let U=D[N];U===void 0&&(U=R.clone(),D[N]=U,A.addEventListener("dispose",b)),R=U}if(R.visible=A.visible,R.wireframe=A.wireframe,w===tr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=i.properties.get(R);P.light=y}return R}function _(E,A,y,w,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===tr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let N=e.update(E),D=E.material;if(Array.isArray(D)){let U=N.groups;for(let z=0,H=U.length;z<H;z++){let $=U[z],W=D[$.materialIndex];if(W&&W.visible){let K=T(E,W,w,R);E.onBeforeShadow(i,E,A,y,N,K,$),i.renderBufferDirect(y,null,N,K,E,$),E.onAfterShadow(i,E,A,y,N,K,$)}}}else if(D.visible){let U=T(E,D,w,R);E.onBeforeShadow(i,E,A,y,N,U,null),i.renderBufferDirect(y,null,N,U,E,null),E.onAfterShadow(i,E,A,y,N,U,null)}}let P=E.children;for(let N=0,D=P.length;N<D;N++)_(P[N],A,y,w,R)}function b(E){E.target.removeEventListener("dispose",b);for(let y in l){let w=l[y],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function db(i,e){function t(){let O=!1,ce=new Be,ee=null,he=new Be(0,0,0,0);return{setMask:function(ge){ee!==ge&&!O&&(i.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){O=ge},setClear:function(ge,ie,Re,Me,ft){ft===!0&&(ge*=Me,ie*=Me,Re*=Me),ce.set(ge,ie,Re,Me),he.equals(ce)===!1&&(i.clearColor(ge,ie,Re,Me),he.copy(ce))},reset:function(){O=!1,ee=null,he.set(-1,0,0,0)}}}function n(){let O=!1,ce=!1,ee=null,he=null,ge=null;return{setReversed:function(ie){if(ce!==ie){let Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;let Me=ge;ge=null,this.setClear(Me)}},getReversed:function(){return ce},setTest:function(ie){ie?Z(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!O&&(i.depthMask(ie),ee=ie)},setFunc:function(ie){if(ce&&(ie=Xf[ie]),he!==ie){switch(ie){case Mo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ie}},setLocked:function(ie){O=ie},setClear:function(ie){ge!==ie&&(ge=ie,ce&&(ie=1-ie),i.clearDepth(ie))},reset:function(){O=!1,ee=null,he=null,ge=null,ce=!1}}}function s(){let O=!1,ce=null,ee=null,he=null,ge=null,ie=null,Re=null,Me=null,ft=null;return{setTest:function(et){O||(et?Z(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(et){ce!==et&&!O&&(i.stencilMask(et),ce=et)},setFunc:function(et,Li,Vi){(ee!==et||he!==Li||ge!==Vi)&&(i.stencilFunc(et,Li,Vi),ee=et,he=Li,ge=Vi)},setOp:function(et,Li,Vi){(ie!==et||Re!==Li||Me!==Vi)&&(i.stencilOp(et,Li,Vi),ie=et,Re=Li,Me=Vi)},setLocked:function(et){O=et},setClear:function(et){ft!==et&&(i.clearStencil(et),ft=et)},reset:function(){O=!1,ce=null,ee=null,he=null,ge=null,ie=null,Re=null,Me=null,ft=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,T=null,_=null,b=null,E=null,A=null,y=new Fe(0,0,0),w=0,R=!1,C=null,P=null,N=null,D=null,U=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,$=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=$>=2);let K=null,Q={},xe=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),qe=new Be().fromArray(xe),He=new Be().fromArray(ve);function We(O,ce,ee,he){let ge=new Uint8Array(4),ie=i.createTexture();i.bindTexture(O,ie),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<ee;Re++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ce+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ie}let Y={};Y[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Ys),Xe(!1),vt(Eh),Z(i.CULL_FACE),$e(Ci);function Z(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ue(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Le(O,ce){return u[O]!==ce?(i.bindFramebuffer(O,ce),u[O]=ce,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function se(O,ce){let ee=g,he=!1;if(O){ee=f.get(ce),ee===void 0&&(ee=[],f.set(ce,ee));let ge=O.textures;if(ee.length!==ge.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Re=ge.length;ie<Re;ie++)ee[ie]=i.COLOR_ATTACHMENT0+ie;ee.length=ge.length,he=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,he=!0);he&&i.drawBuffers(ee)}function Ee(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let ut={[cs]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};ut[pf]=i.MIN,ut[mf]=i.MAX;let Ue={[gf]:i.ZERO,[_f]:i.ONE,[yf]:i.SRC_COLOR,[Ch]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[Ih]:i.ONE_MINUS_SRC_ALPHA,[Mf]:i.ONE_MINUS_DST_COLOR,[Sf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(O,ce,ee,he,ge,ie,Re,Me,ft,et){if(O===Ci){m===!0&&(ue(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),O!==uf){if(O!==p||et!==R){if((S!==cs||b!==cs)&&(i.blendEquation(i.FUNC_ADD),S=cs,b=cs),et)switch(O){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",O);break}else switch(O){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ah:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",O);break}T=null,_=null,E=null,A=null,y.set(0,0,0),w=0,p=O,R=et}return}ge=ge||ce,ie=ie||ee,Re=Re||he,(ce!==S||ge!==b)&&(i.blendEquationSeparate(ut[ce],ut[ge]),S=ce,b=ge),(ee!==T||he!==_||ie!==E||Re!==A)&&(i.blendFuncSeparate(Ue[ee],Ue[he],Ue[ie],Ue[Re]),T=ee,_=he,E=ie,A=Re),(Me.equals(y)===!1||ft!==w)&&(i.blendColor(Me.r,Me.g,Me.b,ft),y.copy(Me),w=ft),p=O,R=!1}function dt(O,ce){O.side===li?ue(i.CULL_FACE):Z(i.CULL_FACE);let ee=O.side===ei;ce&&(ee=!ee),Xe(ee),O.blending===ir&&O.transparent===!1?$e(Ci):$e(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let he=O.stencilWrite;o.setTest(he),he&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),si(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(O){C!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),C=O)}function vt(O){O!==lf?(Z(i.CULL_FACE),O!==P&&(O===Eh?i.cullFace(i.BACK):O===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),P=O}function Ot(O){O!==N&&(H&&i.lineWidth(O),N=O)}function si(O,ce,ee){O?(Z(i.POLYGON_OFFSET_FILL),(D!==ce||U!==ee)&&(D=ce,U=ee,a.getReversed()&&(ce=-ce),i.polygonOffset(ce,ee))):ue(i.POLYGON_OFFSET_FILL)}function Mt(O){O?Z(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function At(O){O===void 0&&(O=i.TEXTURE0+z-1),K!==O&&(i.activeTexture(O),K=O)}function B(O,ce,ee){ee===void 0&&(K===null?ee=i.TEXTURE0+z-1:ee=K);let he=Q[ee];he===void 0&&(he={type:void 0,texture:void 0},Q[ee]=he),(he.type!==O||he.texture!==ce)&&(K!==ee&&(i.activeTexture(ee),K=ee),i.bindTexture(O,ce||Y[O]),he.type=O,he.texture=ce)}function Wt(){let O=Q[K];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function x(){try{i.texSubImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function k(){try{i.texSubImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function ne(){try{i.texStorage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function ae(){try{i.texStorage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function te(){try{i.texImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function oe(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Te(O,ce){d[O]!==ce&&(i.pixelStorei(O,ce),d[O]=ce)}function de(O){qe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),qe.copy(O))}function le(O){He.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),He.copy(O))}function Ae(O,ce){let ee=l.get(ce);ee===void 0&&(ee=new WeakMap,l.set(ce,ee));let he=ee.get(O);he===void 0&&(he=i.getUniformBlockIndex(ce,O.name),ee.set(O,he))}function Ie(O,ce){let he=l.get(ce).get(O);c.get(ce)!==he&&(i.uniformBlockBinding(ce,he,O.__bindingPointIndex),c.set(ce,he))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,Q={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,T=null,_=null,b=null,E=null,A=null,y=new Fe(0,0,0),w=0,R=!1,C=null,P=null,N=null,D=null,U=null,qe.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ue,bindFramebuffer:Le,drawBuffers:se,useProgram:Ee,setBlending:$e,setMaterial:dt,setFlipSided:Xe,setCullFace:vt,setLineWidth:Ot,setPolygonOffset:si,setScissorTest:Mt,activeTexture:At,bindTexture:B,unbindTexture:Wt,compressedTexImage2D:st,compressedTexImage3D:L,texImage2D:J,texImage3D:te,pixelStorei:Te,getParameter:oe,updateUBOMapping:Ae,uniformBlockBinding:Ie,texStorage2D:ne,texStorage3D:ae,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:de,viewport:le,reset:Oe}}function fb(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,x){return g?new OffscreenCanvas(L,x):Br("canvas")}function m(L,x,k){let X=1,j=st(L);if((j.width>k||j.height>k)&&(X=k/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ne=Math.floor(X*j.width),ae=Math.floor(X*j.height);u===void 0&&(u=v(ne,ae));let J=x?v(ne,ae):u;return J.width=ne,J.height=ae,J.getContext("2d").drawImage(L,0,0,ne,ae),Ce("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ne+"x"+ae+")."),J}else return"data"in L&&Ce("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function p(L){return L.generateMipmaps}function S(L){i.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,x,k,X,j,ne=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae;X&&(ae=e.get("EXT_texture_norm16"),ae||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&ae&&(J=ae.R16_EXT),k===i.SHORT&&ae&&(J=ae.R16_SNORM_EXT)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),x===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&ae&&(J=ae.RG16_EXT),k===i.SHORT&&ae&&(J=ae.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_SHORT&&ae&&(J=ae.RGB16_EXT),k===i.SHORT&&ae&&(J=ae.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let te=ne?Fr:Ye.getTransfer(j);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=te===it?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ae&&(J=ae.RGBA16_EXT),k===i.SHORT&&ae&&(J=ae.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(L,x){let k;return L?x===null||x===ki||x===sr?k=i.DEPTH24_STENCIL8:x===Dt?k=i.DEPTH32F_STENCIL8:x===nr&&(k=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===sr?k=i.DEPTH_COMPONENT24:x===Dt?k=i.DEPTH_COMPONENT32F:x===nr&&(k=i.DEPTH_COMPONENT16),k}function E(L,x){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==mt&&L.minFilter!==Je?Math.log2(Math.max(x.width,x.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?x.mipmaps.length:1}function A(L){let x=L.target;x.removeEventListener("dispose",A),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(L){let x=L.target;x.removeEventListener("dispose",y),C(x)}function w(L){let x=n.get(L);if(x.__webglInit===void 0)return;let k=L.source,X=f.get(k);if(X){let j=X[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(L),Object.keys(X).length===0&&f.delete(k)}n.remove(L)}function R(L){let x=n.get(L);i.deleteTexture(x.__webglTexture);let k=L.source,X=f.get(k);delete X[x.__cacheKey],a.memory.textures--}function C(L){let x=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let j=0;j<x.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[X][j]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=L.textures;for(let X=0,j=k.length;X<j;X++){let ne=n.get(k[X]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(L)}let P=0;function N(){P=0}function D(){return P}function U(L){P=L}function z(){let L=P;return L>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function H(L){let x=[];return x.push(L.wrapS),x.push(L.wrapT),x.push(L.wrapR||0),x.push(L.magFilter),x.push(L.minFilter),x.push(L.anisotropy),x.push(L.internalFormat),x.push(L.format),x.push(L.type),x.push(L.generateMipmaps),x.push(L.premultiplyAlpha),x.push(L.flipY),x.push(L.unpackAlignment),x.push(L.colorSpace),x.join()}function $(L,x){let k=n.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&k.__version!==L.version){let X=L.image;if(X===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(k,L,x);return}}else L.isExternalTexture&&(k.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function W(L,x){let k=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){ue(k,L,x);return}else L.isExternalTexture&&(k.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function K(L,x){let k=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){ue(k,L,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function Q(L,x){let k=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&k.__version!==L.version){Le(k,L,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let xe={[Ai]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},ve={[mt]:i.NEAREST,[Pf]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},qe={[Uf]:i.NEVER,[zf]:i.ALWAYS,[Ff]:i.LESS,[Ol]:i.LEQUAL,[Of]:i.EQUAL,[Bl]:i.GEQUAL,[Bf]:i.GREATER,[kf]:i.NOTEQUAL};function He(L,x){if(x.type===Dt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Je||x.magFilter===el||x.magFilter===jr||x.magFilter===Xn||x.minFilter===Je||x.minFilter===el||x.minFilter===jr||x.minFilter===Xn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,xe[x.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,xe[x.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,xe[x.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ve[x.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,qe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mt||x.minFilter!==jr&&x.minFilter!==Xn||x.type===Dt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function We(L,x){let k=!1;L.__webglInit===void 0&&(L.__webglInit=!0,x.addEventListener("dispose",A));let X=x.source,j=f.get(X);j===void 0&&(j={},f.set(X,j));let ne=H(x);if(ne!==L.__cacheKey){j[ne]===void 0&&(j[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[ne].usedTimes++;let ae=j[L.__cacheKey];ae!==void 0&&(j[L.__cacheKey].usedTimes--,ae.usedTimes===0&&R(x)),L.__cacheKey=ne,L.__webglTexture=j[ne].texture}return k}function Y(L,x,k){return Math.floor(Math.floor(L/k)/x)}function Z(L,x,k,X){let ne=L.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,X,x.data);else{ne.sort((Te,de)=>Te.start-de.start);let ae=0;for(let Te=1;Te<ne.length;Te++){let de=ne[ae],le=ne[Te],Ae=de.start+de.count,Ie=Y(le.start,x.width,4),Oe=Y(de.start,x.width,4);le.start<=Ae+1&&Ie===Oe&&Y(le.start+le.count-1,x.width,4)===Ie?de.count=Math.max(de.count,le.start+le.count-de.start):(++ae,ne[ae]=le)}ne.length=ae+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Te=0,de=ne.length;Te<de;Te++){let le=ne[Te],Ae=Math.floor(le.start/4),Ie=Math.ceil(le.count/4),Oe=Ae%x.width,O=Math.floor(Ae/x.width),ce=Ie,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Oe,O,ce,ee,k,X,x.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ue(L,x,k){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let j=We(L,x),ne=x.source;t.bindTexture(X,L.__webglTexture,i.TEXTURE0+k);let ae=n.get(ne);if(ne.version!==ae.__version||j===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ee=Ye.getPrimaries(Ye.workingColorSpace),he=x.colorSpace===xn?null:Ye.getPrimaries(x.colorSpace),ge=x.colorSpace===xn||ee===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let te=m(x.image,!1,s.maxTextureSize);te=Wt(x,te);let oe=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),de=_(x.internalFormat,oe,Te,x.normalized,x.colorSpace,x.isVideoTexture);He(X,x);let le,Ae=x.mipmaps,Ie=x.isVideoTexture!==!0,Oe=ae.__version===void 0||j===!0,O=ne.dataReady,ce=E(x,te);if(x.isDepthTexture)de=b(x.format===Yn,x.type),Oe&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,de,te.width,te.height,0,oe,Te,null));else if(x.isDataTexture)if(Ae.length>0){Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,ce,de,Ae[0].width,Ae[0].height);for(let ee=0,he=Ae.length;ee<he;ee++)le=Ae[ee],Ie?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Te,le.data):t.texImage2D(i.TEXTURE_2D,ee,de,le.width,le.height,0,oe,Te,le.data);x.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(i.TEXTURE_2D,ce,de,te.width,te.height),O&&Z(x,te,oe,Te)):t.texImage2D(i.TEXTURE_2D,0,de,te.width,te.height,0,oe,Te,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,de,Ae[0].width,Ae[0].height,te.depth);for(let ee=0,he=Ae.length;ee<he;ee++)if(le=Ae[ee],x.format!==gt)if(oe!==null)if(Ie){if(O)if(x.layerUpdates.size>0){let ge=Jh(le.width,le.height,x.format,x.type);for(let ie of x.layerUpdates){let Re=le.data.subarray(ie*ge/le.data.BYTES_PER_ELEMENT,(ie+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ie,le.width,le.height,1,oe,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,de,le.width,le.height,te.depth,0,le.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,Te,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,de,le.width,le.height,te.depth,0,oe,Te,le.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,ce,de,Ae[0].width,Ae[0].height);for(let ee=0,he=Ae.length;ee<he;ee++)le=Ae[ee],x.format!==gt?oe!==null?Ie?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,de,le.width,le.height,0,le.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Te,le.data):t.texImage2D(i.TEXTURE_2D,ee,de,le.width,le.height,0,oe,Te,le.data)}else if(x.isDataArrayTexture)if(Ie){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,de,te.width,te.height,te.depth),O)if(x.layerUpdates.size>0){let ee=Jh(te.width,te.height,x.format,x.type);for(let he of x.layerUpdates){let ge=te.data.subarray(he*ee/te.data.BYTES_PER_ELEMENT,(he+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,te.width,te.height,1,oe,Te,ge)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Te,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,oe,Te,te.data);else if(x.isData3DTexture)Ie?(Oe&&t.texStorage3D(i.TEXTURE_3D,ce,de,te.width,te.height,te.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Te,te.data)):t.texImage3D(i.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,oe,Te,te.data);else if(x.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(i.TEXTURE_2D,ce,de,te.width,te.height);else{let ee=te.width,he=te.height;for(let ge=0;ge<ce;ge++)t.texImage2D(i.TEXTURE_2D,ge,de,ee,he,0,oe,Te,null),ee>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(x),ee.onpaint=he=>{let ge=he.changedElements;for(let ie of d)ge.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let ge=i.RGBA,ie=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ie,Re,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ie&&Oe){let ee=st(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ce,de,ee.width,ee.height)}for(let ee=0,he=Ae.length;ee<he;ee++)le=Ae[ee],Ie?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,oe,Te,le):t.texImage2D(i.TEXTURE_2D,ee,de,oe,Te,le);x.generateMipmaps=!1}else if(Ie){if(Oe){let ee=st(te);t.texStorage2D(i.TEXTURE_2D,ce,de,ee.width,ee.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Te,te)}else t.texImage2D(i.TEXTURE_2D,0,de,oe,Te,te);p(x)&&S(X),ae.__version=ne.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function Le(L,x,k){if(x.image.length!==6)return;let X=We(L,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+k);let ne=n.get(j);if(j.version!==ne.__version||X===!0){t.activeTexture(i.TEXTURE0+k);let ae=Ye.getPrimaries(Ye.workingColorSpace),J=x.colorSpace===xn?null:Ye.getPrimaries(x.colorSpace),te=x.colorSpace===xn||ae===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let oe=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!oe&&!Te?de[ie]=m(x.image[ie],!0,s.maxCubemapSize):de[ie]=Te?x.image[ie].image:x.image[ie],de[ie]=Wt(x,de[ie]);let le=de[0],Ae=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type),Oe=_(x.internalFormat,Ae,Ie,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,ce=ne.__version===void 0||X===!0,ee=j.dataReady,he=E(x,le);He(i.TEXTURE_CUBE_MAP,x);let ge;if(oe){O&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Oe,le.width,le.height);for(let ie=0;ie<6;ie++){ge=de[ie].mipmaps;for(let Re=0;Re<ge.length;Re++){let Me=ge[Re];x.format!==gt?Ae!==null?O?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Oe,Me.width,Me.height,0,Me.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Me.width,Me.height,Ae,Ie,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Oe,Me.width,Me.height,0,Ae,Ie,Me.data)}}}else{if(ge=x.mipmaps,O&&ce){ge.length>0&&he++;let ie=st(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Te){O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Ae,Ie,de[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,de[ie].width,de[ie].height,0,Ae,Ie,de[ie].data);for(let Re=0;Re<ge.length;Re++){let ft=ge[Re].image[ie].image;O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,ft.width,ft.height,Ae,Ie,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Oe,ft.width,ft.height,0,Ae,Ie,ft.data)}}else{O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Ie,de[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,Ae,Ie,de[ie]);for(let Re=0;Re<ge.length;Re++){let Me=ge[Re];O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ae,Ie,Me.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Oe,Ae,Ie,Me.image[ie])}}}p(x)&&S(i.TEXTURE_CUBE_MAP),ne.__version=j.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function se(L,x,k,X,j,ne){let ae=r.convert(k.format,k.colorSpace),J=r.convert(k.type),te=_(k.internalFormat,ae,J,k.normalized,k.colorSpace),oe=n.get(x),Te=n.get(k);if(Te.__renderTarget=x,!oe.__hasExternalTextures){let de=Math.max(1,x.width>>ne),le=Math.max(1,x.height>>ne);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ne,te,de,le,x.depth,0,ae,J,null):t.texImage2D(j,ne,te,de,le,0,ae,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),At(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,Te.__webglTexture,0,Mt(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,Te.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(L,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,L),x.depthBuffer){let X=x.depthTexture,j=X&&X.isDepthTexture?X.type:null,ne=b(x.stencilBuffer,j),ae=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;At(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(x),ne,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,L)}else{let X=x.textures;for(let j=0;j<X.length;j++){let ne=X[j],ae=r.convert(ne.format,ne.colorSpace),J=r.convert(ne.type),te=_(ne.internalFormat,ae,J,ne.normalized,ne.colorSpace);At(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(x),te,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(x),te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(L,x,k){let X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),He(i.TEXTURE_CUBE_MAP,x.depthTexture);let oe=r.convert(x.depthTexture.format),Te=r.convert(x.depthTexture.type),de;x.depthTexture.format===Yi?de=i.DEPTH_COMPONENT24:x.depthTexture.format===Yn&&(de=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,de,x.width,x.height,0,oe,Te,null)}}else $(x.depthTexture,0);let ne=j.__webglTexture,ae=Mt(x),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,te=x.depthTexture.format===Yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Yi)At(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ne,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ne,0);else if(x.depthTexture.format===Yn)At(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ne,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(L){let x=n.get(L),k=L.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==L.depthTexture){let X=L.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=X}if(L.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)ut(x.__webglFramebuffer[X],L,X);else{let X=L.texture.mipmaps;X&&X.length>0?ut(x.__webglFramebuffer[0],L,0):ut(x.__webglFramebuffer,L,0)}else if(k){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Ee(x.__webglDepthbuffer[X],L,!1);else{let j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ne)}}else{let X=L.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ee(x.__webglDepthbuffer,L,!1);else{let j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(L,x,k){let X=n.get(L);x!==void 0&&se(X.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ue(L)}function dt(L){let x=L.texture,k=n.get(L),X=n.get(x);L.addEventListener("dispose",y);let j=L.textures,ne=L.isWebGLCubeRenderTarget===!0,ae=j.length>1;if(ae||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),ne){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let te=0;te<x.mipmaps.length;te++)k.__webglFramebuffer[J][te]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ae)for(let J=0,te=j.length;J<te;J++){let oe=n.get(j[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&At(L)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let te=j[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let oe=r.convert(te.format,te.colorSpace),Te=r.convert(te.type),de=_(te.internalFormat,oe,Te,te.normalized,te.colorSpace,L.isXRRenderTarget===!0),le=Mt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,de,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(k.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),He(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)se(k.__webglFramebuffer[J][te],L,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else se(k.__webglFramebuffer[J],L,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(x)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let J=0,te=j.length;J<te;J++){let oe=j[J],Te=n.get(oe),de=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Te.__webglTexture),He(de,oe),se(k.__webglFramebuffer,L,oe,i.COLOR_ATTACHMENT0+J,de,0),p(oe)&&S(de)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(J=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),He(J,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)se(k.__webglFramebuffer[te],L,x,i.COLOR_ATTACHMENT0,J,te);else se(k.__webglFramebuffer,L,x,i.COLOR_ATTACHMENT0,J,0);p(x)&&S(J),t.unbindTexture()}L.depthBuffer&&Ue(L)}function Xe(L){let x=L.textures;for(let k=0,X=x.length;k<X;k++){let j=x[k];if(p(j)){let ne=T(L),ae=n.get(j).__webglTexture;t.bindTexture(ne,ae),S(ne),t.unbindTexture()}}}let vt=[],Ot=[];function si(L){if(L.samples>0){if(At(L)===!1){let x=L.textures,k=L.width,X=L.height,j=i.COLOR_BUFFER_BIT,ne=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(L),J=x.length>1;if(J)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let te=L.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Te=n.get(x[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,j,i.NEAREST),c===!0&&(vt.length=0,Ot.length=0,vt.push(i.COLOR_ATTACHMENT0+oe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(vt.push(ne),Ot.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Te=n.get(x[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let x=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Mt(L){return Math.min(s.maxSamples,L.samples)}function At(L){let x=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(L){let x=a.render.frame;h.get(L)!==x&&(h.set(L,x),L.update())}function Wt(L,x){let k=L.colorSpace,X=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||k!==Ur&&k!==xn&&(Ye.getTransfer(k)===it?(X!==gt||j!==ot)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",k)),x}function st(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=$e,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=si,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=se,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pb(i,e){function t(n,s=xn){let r,a=Ye.getTransfer(s);if(n===ot)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===Hh)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Dt)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===Wh)return i.ALPHA;if(n===Xh)return i.RGB;if(n===gt)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===Yn)return i.DEPTH_STENCIL;if(n===qi)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===$r||n===Jr||n===Qr||n===ea)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===ta||n===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pl)return r.COMPRESSED_R11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_l||n===yl||n===xl||n===vl||n===Sl||n===bl||n===Ml||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Ll||n===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===Ul||n===ia||n===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yi({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Oi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new du,p={},S=t.getContextAttributes(),T=null,_=null,b=[],E=[],A=new De,y=null,w=null,R=new kt;R.viewport=new Be;let C=new kt;C.viewport=new Be;let P=[R,C],N=new $o,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=b[Y];return Z===void 0&&(Z=new $s,b[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=b[Y];return Z===void 0&&(Z=new $s,b[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=b[Y];return Z===void 0&&(Z=new $s,b[Y]=Z),Z.getHandSpace()};function z(Y){let Z=E.indexOf(Y.inputSource);if(Z===-1)return;let ue=b[Z];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,l||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){let Z=E[Y];Z!==null&&(E[Y]=null,b[Y].disconnect(Z))}D=null,U=null,m.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(T),f=null,u=null,d=null,s=null,_=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Le=null,se=null;S.depth&&(se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?Yn:Yi,Le=S.stencil?sr:ki);let Ee={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ee),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Pt(u.textureWidth,u.textureHeight,{format:gt,type:ot,depthTexture:new Fn(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Pt(f.framebufferWidth,f.framebufferHeight,{format:gt,type:ot,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Y){for(let Z=0;Z<Y.removed.length;Z++){let ue=Y.removed[Z],Le=E.indexOf(ue);Le>=0&&(E[Le]=null,b[Le].disconnect(ue))}for(let Z=0;Z<Y.added.length;Z++){let ue=Y.added[Z],Le=E.indexOf(ue);if(Le===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=E.length){E.push(ue),Le=Ee;break}else if(E[Ee]===null){E[Ee]=ue,Le=Ee;break}if(Le===-1)break}let se=b[Le];se&&se.connect(ue)}}let W=new I,K=new I;function Q(Y,Z,ue){W.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);let Le=W.distanceTo(K),se=Z.projectionMatrix.elements,Ee=ue.projectionMatrix.elements,ut=se[14]/(se[10]-1),Ue=se[14]/(se[10]+1),$e=(se[9]+1)/se[5],dt=(se[9]-1)/se[5],Xe=(se[8]-1)/se[0],vt=(Ee[8]+1)/Ee[0],Ot=ut*Xe,si=ut*vt,Mt=Le/(-Xe+vt),At=Mt*-Xe;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(At),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),se[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let B=ut+Mt,Wt=Ue+Mt,st=Ot-At,L=si+(Le-At),x=$e*Ue/Wt*B,k=dt*Ue/Wt*B;Y.projectionMatrix.makePerspective(st,L,x,k,B,Wt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xe(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,ue=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),N.near=C.near=R.near=Z,N.far=C.far=R.far=ue,(D!==N.near||U!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,U=N.far),N.layers.mask=Y.layers.mask|6,R.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;let Le=Y.parent,se=N.cameras;xe(N,Le);for(let Ee=0;Ee<se.length;Ee++)xe(se[Ee],Le);se.length===2?Q(N,R,C):N.projectionMatrix.copy(R.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),ve(Y,N,Le)};function ve(Y,Z,ue){ue===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let qe=null;function He(Y,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){let ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Le=!1;ue.length!==N.cameras.length&&(N.cameras.length=0,Le=!0);for(let Ue=0;Ue<ue.length;Ue++){let $e=ue[Ue],dt=null;if(f!==null)dt=f.getViewport($e);else{let vt=d.getViewSubImage(u,$e);dt=vt.viewport,Ue===0&&(e.setRenderTargetTextures(_,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(_))}let Xe=P[Ue];Xe===void 0&&(Xe=new kt,Xe.layers.enable(Ue),Xe.viewport=new Be,P[Ue]=Xe),Xe.matrix.fromArray($e.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray($e.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(dt.x,dt.y,dt.width,dt.height),Ue===0&&(N.matrix.copy(Xe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Le===!0&&N.cameras.push(Xe)}let se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Ue=d.getDepthInformation(ue[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,s.renderState)}if(se&&se.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ue=0;Ue<ue.length;Ue++){let $e=ue[Ue].camera;if($e){let dt=p[$e];dt||(dt=new Xr,p[$e]=dt);let Xe=d.getCameraImage($e);dt.sourceTexture=Xe}}}}for(let ue=0;ue<b.length;ue++){let Le=E[ue],se=b[ue];Le!==null&&se!==void 0&&se.update(Le,Z,l||a)}qe&&qe(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let We=new _p;We.setAnimationLoop(He),this.setAnimationLoop=function(Y){qe=Y},this.dispose=function(){}}},_b=new je,Mp=new Ne;Mp.set(-1,0,0,0,1,0,0,0,1);function yb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,T,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ei&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ei&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),T=S.envMap,_=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ei&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xb(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let E=b.program;n.uniformBlockBinding(_,E)}function l(_,b){let E=s[_.id];E===void 0&&(m(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",S));let A=b.program;n.updateUBOMapping(_,A);let y=e.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let b=d();_.__bindingPointIndex=b;let E=i.createBuffer(),A=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],E=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,w=E.length;y<w;y++){let R=E[y];if(Array.isArray(R))for(let C=0,P=R.length;C<P;C++)f(R[C],y,C,A);else f(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,E,A){if(v(_,b,E,A)===!0){let y=_.__offset,w=_.value;if(Array.isArray(w)){let R=0;for(let C=0;C<w.length;C++){let P=w[C],N=p(P);g(P,_.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,b,E){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,E)}function v(_,b,E,A){let y=_.value,w=b+"_"+E;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{let R=A[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(_){let b=_.uniforms,E=0,A=16;for(let w=0,R=b.length;w<R;w++){let C=Array.isArray(b[w])?b[w]:[b[w]];for(let P=0,N=C.length;P<N;P++){let D=C[P],U=Array.isArray(D.value)?D.value:[D.value];for(let z=0,H=U.length;z<H;z++){let $=U[z],W=p($),K=E%A,Q=K%W.boundary,xe=K+Q;E+=Q,xe!==0&&A-xe<W.storage&&(E+=A-xe),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=W.storage}}}let y=E%A;return y>0&&(E+=A-y),_.__size=E,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",_),b}function S(_){let b=_.target;b.removeEventListener("dispose",S);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function T(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var vb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function Sb(){return Ki===null&&(Ki=new mn(vb,16,16,Zi,Zt),Ki.name="DFG_LUT",Ki.minFilter=Je,Ki.magFilter=Je,Ki.wrapS=Xi,Ki.wrapT=Xi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Gl=class{constructor(e={}){let{canvas:t=Vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ot}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([al,rl,sl]),p=new Set([ot,ki,nr,sr,il,nl]),S=new Uint32Array(4),T=new Int32Array(4),_=new I,b=null,E=null,A=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,P=null,N=null,D=null,U=null;this._outputColorSpace=pi;let z=0,H=0,$=null,W=-1,K=null,Q=new Be,xe=new Be,ve=null,qe=new Fe(0),He=0,We=t.width,Y=t.height,Z=1,ue=null,Le=null,se=new Be(0,0,We,Y),Ee=new Be(0,0,We,Y),ut=!1,Ue=new Vr,$e=!1,dt=!1,Xe=new je,vt=new I,Ot=new Be,si={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function At(){return $===null?Z:1}let B=n;function Wt(M,F){return t.getContext(M,F)}let st,L,x,k,X,j,ne,ae,J,te,oe,Te,de,le,Ae,Ie,Oe,O,ce,ee,he,ge,ie;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Li,!1),B===null){let F="webgl2";if(B=Wt(F,M),B===null)throw Wt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(M){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),Pe("WebGLRenderer: "+M.message),M}function Re(){st=new Rv(B),st.init(),he=new pb(B,st),L=new yv(B,st,e,he),x=new db(B,st),L.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),N=B.createFramebuffer(),D=B.createFramebuffer(),U=B.createFramebuffer(),k=new Pv(B),X=new JS,j=new fb(B,st,x,X,L,he,k),ne=new Av(R),ae=new D_(B),ge=new gv(B,ae),J=new Cv(B,ae,k,ge),te=new Dv(B,J,ae,ge,k),O=new Lv(B,L,j),Ae=new xv(X),oe=new $S(R,ne,st,L,ge,Ae),Te=new yb(R,X),de=new eb,le=new ab(st),Oe=new mv(R,ne,x,te,g,c),Ie=new ub(R,te,L),ie=new xb(B,k,L,x),ce=new _v(B,st,k),ee=new Iv(B,st,k),k.programs=oe.programs,R.capabilities=L,R.extensions=st,R.properties=X,R.renderLists=de,R.shadowMap=Ie,R.state=x,R.info=k}v!==ot&&(w=new Uv(v,t.width,t.height,o,s,r));let Me=new fu(R,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=st.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=st.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(We,Y,!1))},this.getSize=function(M){return M.set(We,Y)},this.setSize=function(M,F,q=!0){if(Me.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}We=M,Y=F,t.width=Math.floor(M*Z),t.height=Math.floor(F*Z),q===!0&&(t.style.width=M+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(We*Z,Y*Z).floor()},this.setDrawingBufferSize=function(M,F,q){We=M,Y=F,Z=q,t.width=Math.floor(M*q),t.height=Math.floor(F*q),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(v===ot){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(se)},this.setViewport=function(M,F,q,V){M.isVector4?se.set(M.x,M.y,M.z,M.w):se.set(M,F,q,V),x.viewport(Q.copy(se).multiplyScalar(Z).round())},this.getScissor=function(M){return M.copy(Ee)},this.setScissor=function(M,F,q,V){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,F,q,V),x.scissor(xe.copy(Ee).multiplyScalar(Z).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(M){x.setScissorTest(ut=M)},this.setOpaqueSort=function(M){ue=M},this.setTransparentSort=function(M){Le=M},this.getClearColor=function(M){return M.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,q=!0){let V=0;if(M){let G=!1;if($!==null){let me=$.texture.format;G=m.has(me)}if(G){let me=$.texture.type,ye=p.has(me),pe=Oe.getClearColor(),Se=Oe.getClearAlpha(),we=pe.r,ke=pe.g,Ge=pe.b;ye?(S[0]=we,S[1]=ke,S[2]=Ge,S[3]=Se,B.clearBufferuiv(B.COLOR,0,S)):(T[0]=we,T[1]=ke,T[2]=Ge,T[3]=Se,B.clearBufferiv(B.COLOR,0,T))}else V|=B.COLOR_BUFFER_BIT}F&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),Oe.dispose(),de.dispose(),le.dispose(),X.dispose(),ne.dispose(),te.dispose(),ge.dispose(),ie.dispose(),oe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",wd),Me.removeEventListener("sessionend",Ed),ts.stop()};function ft(M){M.preventDefault(),qh("WebGLRenderer: Context Lost."),C=!0}function et(){qh("WebGLRenderer: Context Restored."),C=!1;let M=k.autoReset,F=Ie.enabled,q=Ie.autoUpdate,V=Ie.needsUpdate,G=Ie.type;Re(),k.autoReset=M,Ie.enabled=F,Ie.autoUpdate=q,Ie.needsUpdate=V,Ie.type=G}function Li(M){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Vi(M){let F=M.target;F.removeEventListener("dispose",Vi),Cg(F)}function Cg(M){Ig(M),X.remove(M)}function Ig(M){let F=X.get(M).programs;F!==void 0&&(F.forEach(function(q){oe.releaseProgram(q)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,q,V,G,me){F===null&&(F=si);let ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=Dg(M,F,q,V,G);x.setMaterial(V,ye);let Se=q.index,we=1;if(V.wireframe===!0){if(Se=J.getWireframeAttribute(q),Se===void 0)return;we=2}let ke=q.drawRange,Ge=q.attributes.position,be=ke.start*we,tt=(ke.start+ke.count)*we;me!==null&&(be=Math.max(be,me.start*we),tt=Math.min(tt,(me.start+me.count)*we)),Se!==null?(be=Math.max(be,0),tt=Math.min(tt,Se.count)):Ge!=null&&(be=Math.max(be,0),tt=Math.min(tt,Ge.count));let Rt=tt-be;if(Rt<0||Rt===1/0)return;ge.setup(G,V,pe,q,Se);let _t,lt=ce;if(Se!==null&&(_t=ae.get(Se),lt=ee,lt.setIndex(_t)),G.isMesh)V.wireframe===!0?(x.setLineWidth(V.wireframeLinewidth*At()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(G.isLine){let Xt=V.linewidth;Xt===void 0&&(Xt=1),x.setLineWidth(Xt*At()),G.isLineSegments?lt.setMode(B.LINES):G.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else G.isPoints?lt.setMode(B.POINTS):G.isSprite&&lt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(st.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Xt=G._multiDrawStarts,_e=G._multiDrawCounts,jt=G._multiDrawCount,Ke=Se?ae.get(Se).bytesPerElement:1,Ei=X.get(V).currentProgram.getUniforms();for(let Gi=0;Gi<jt;Gi++)Ei.setValue(B,"_gl_DrawID",Gi),lt.render(Xt[Gi]/Ke,_e[Gi])}else if(G.isInstancedMesh)lt.renderInstances(be,Rt,G.count);else if(q.isInstancedBufferGeometry){let Xt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_e=Math.min(q.instanceCount,Xt);lt.renderInstances(be,Rt,_e)}else lt.render(be,Rt)};function Md(M,F,q,V){P!==null&&M.isNodeMaterial&&P.setObject(V,M),$e===!0&&Ae.setState(M,q,!1),M.transparent===!0&&M.side===li&&M.forceSinglePass===!1?(M.side=ei,M.needsUpdate=!0,ja(M,F,V),M.side=Gn,M.needsUpdate=!0,ja(M,F,V),M.side=li):ja(M,F,V)}this.compile=function(M,F,q=null){q===null&&(q=M),P!==null&&P.renderStart(M,F,q),E=le.get(q),E.init(F),y.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),M!==q&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),dt=this.localClippingEnabled,$e=Ae.init(this.clippingPlanes,dt),$e===!0&&Ae.setGlobalState(this.clippingPlanes,F),P!==null&&Ie.render(E.state.shadowsArray,q,F);let V=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let me=G.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){let pe=me[ye];Md(pe,q,F,G),V.add(pe)}else Md(me,q,F,G),V.add(me)}),E=y.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(M,F,q=null){let V=this.compile(M,F,q);return new Promise(G=>{function me(){if(V.forEach(function(ye){let Se=X.get(ye).currentProgram;(Se===void 0||Se.isReady())&&V.delete(ye)}),V.size===0){G(M);return}setTimeout(me,10)}st.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Zc=null;function Pg(M){Zc&&Zc(M)}function wd(){ts.stop()}function Ed(){ts.start()}let ts=new _p;ts.setAnimationLoop(Pg),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(M){Zc=M,Me.setAnimationLoop(M),M===null?ts.stop():ts.start()},Me.addEventListener("sessionstart",wd),Me.addEventListener("sessionend",Ed),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(M,F);let q=Me.enabled===!0&&Me.isPresenting===!0,V=w!==null&&($===null||q)&&w.begin(R,$);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(F),F=Me.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,F,$),E=le.get(M,y.length),E.init(F),E.state.textureUnits=j.getTextureUnits(),y.push(E),Xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ue.setFromProjectionMatrix(Xe,Fi,F.reversedDepth),dt=this.localClippingEnabled,$e=Ae.init(this.clippingPlanes,dt),b=de.get(M,A.length),b.init(),A.push(b),Me.enabled===!0&&Me.isPresenting===!0){let ye=R.xr.getDepthSensingMesh();ye!==null&&Kc(ye,F,-1/0,R.sortObjects)}Kc(M,F,0,R.sortObjects),b.finish(),P!==null&&P.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(ue,Le),Mt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Mt&&Oe.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Ae.beginShadows();let G=E.state.shadowsArray;if(Ie.render(G,M,F),$e===!0&&Ae.endShadows(),(V&&w.hasRenderPass())===!1){let ye=b.opaque,pe=b.transmissive;if(E.setupLights(),F.isArrayCamera){let Se=F.cameras;if(pe.length>0)for(let we=0,ke=Se.length;we<ke;we++){let Ge=Se[we];Ad(ye,pe,M,Ge)}Mt&&Oe.render(M);for(let we=0,ke=Se.length;we<ke;we++){let Ge=Se[we];Td(b,M,Ge,Ge.viewport)}}else pe.length>0&&Ad(ye,pe,M,F),Mt&&Oe.render(M),Td(b,M,F)}$!==null&&H===0&&(j.updateMultisampleRenderTarget($),j.updateRenderTargetMipmap($)),V&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,F),ge.resetDefaultState(),W=-1,K=null,y.pop(),y.length>0?(E=y[y.length-1],j.setTextureUnits(E.state.textureUnits),$e===!0&&Ae.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,P!==null&&P.renderEnd()};function Kc(M,F,q,V){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ue)){V&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Xe);let ye=te.update(M),pe=M.material;pe.visible&&b.push(M,ye,pe,q,Ot.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ue))){let ye=te.update(M),pe=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ot.copy(ye.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(Xe)),Array.isArray(pe)){let Se=ye.groups;for(let we=0,ke=Se.length;we<ke;we++){let Ge=Se[we],be=pe[Ge.materialIndex];be&&be.visible&&b.push(M,ye,be,q,Ot.z,Ge,F)}}else pe.visible&&b.push(M,ye,pe,q,Ot.z,null,F)}}let me=M.children;for(let ye=0,pe=me.length;ye<pe;ye++)Kc(me[ye],F,q,V)}function Td(M,F,q,V){let{opaque:G,transmissive:me,transparent:ye}=M;E.setupLightsView(q),$e===!0&&Ae.setGlobalState(R.clippingPlanes,q),V&&x.viewport(Q.copy(V)),G.length>0&&Ka(G,F,q),me.length>0&&Ka(me,F,q),ye.length>0&&Ka(ye,F,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ad(M,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let be=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Pt(1,1,{generateMipmaps:!0,type:be?Zt:ot,minFilter:Xn,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let me=E.state.transmissionRenderTarget[V.id],ye=V.viewport||Q;me.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);let pe=R.getRenderTarget(),Se=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(qe),He=R.getClearAlpha(),He<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&Oe.render(q);let ke=R.toneMapping;R.toneMapping=Bi;let Ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),$e===!0&&Ae.setGlobalState(R.clippingPlanes,V),Ka(M,q,V),j.updateMultisampleRenderTarget(me),j.updateRenderTargetMipmap(me),st.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let tt=0,Rt=F.length;tt<Rt;tt++){let _t=F[tt],{object:lt,geometry:Xt,material:_e,group:jt}=_t;if(_e.side===li&&lt.layers.test(V.layers)){let Ke=_e.side;_e.side=ei,_e.needsUpdate=!0,Rd(lt,q,V,Xt,_e,jt),_e.side=Ke,_e.needsUpdate=!0,be=!0}}be===!0&&(j.updateMultisampleRenderTarget(me),j.updateRenderTargetMipmap(me))}R.setRenderTarget(pe,Se,we),R.setClearColor(qe,He),Ge!==void 0&&(V.viewport=Ge),R.toneMapping=ke}function Ka(M,F,q){let V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,me=M.length;G<me;G++){let ye=M[G],{object:pe,geometry:Se,group:we}=ye,ke=ye.material;ke.allowOverride===!0&&V!==null&&(ke=V),pe.layers.test(q.layers)&&Rd(pe,F,q,Se,ke,we)}}function Rd(M,F,q,V,G,me){P!==null&&G.isNodeMaterial&&P.setObject(M,G),M.onBeforeRender(R,F,q,V,G,me),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(R,F,q,V,M,me),G.transparent===!0&&G.side===li&&G.forceSinglePass===!1?(G.side=ei,G.needsUpdate=!0,R.renderBufferDirect(q,F,V,G,M,me),G.side=Gn,G.needsUpdate=!0,R.renderBufferDirect(q,F,V,G,M,me),G.side=li):R.renderBufferDirect(q,F,V,G,M,me),M.onAfterRender(R,F,q,V,G,me)}function ja(M,F,q){F.isScene!==!0&&(F=si);let V=X.get(M),G=E.state.lights,me=E.state.shadowsArray,ye=G.state.version,pe=oe.getParameters(M,G.state,me,F,q,E.state.lightProbeGridArray),Se=oe.getProgramCacheKey(pe),we=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=ne.get(M.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",Vi),we=new Map,V.programs=we);let Ge=we.get(Se);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===ye)return Id(M,pe),Ge}else pe.uniforms=oe.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,q,pe),M.onBeforeCompile(pe,R),Ge=oe.acquireProgram(pe,Se),we.set(Se,Ge),V.uniforms=pe.uniforms;let be=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=Ae.uniform),Id(M,pe),V.needsLights=Ug(M),V.lightsStateVersion=ye,V.needsLights&&(be.ambientLightColor.value=G.state.ambient,be.lightProbe.value=G.state.probe,be.sunLights.value=G.state.sun,be.sunLightShadows.value=G.state.sunShadow,be.directionalLights.value=G.state.directional,be.directionalLightShadows.value=G.state.directionalShadow,be.spotLights.value=G.state.spot,be.spotLightShadows.value=G.state.spotShadow,be.rectAreaLights.value=G.state.rectArea,be.ltc_1.value=G.state.rectAreaLTC1,be.ltc_2.value=G.state.rectAreaLTC2,be.pointLights.value=G.state.point,be.pointLightShadows.value=G.state.pointShadow,be.hemisphereLights.value=G.state.hemi,be.sunShadowMatrix.value=G.state.sunShadowMatrix,be.sunShadowCascade.value=G.state.sunShadowCascade,be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,be.spotLightMatrix.value=G.state.spotLightMatrix,be.spotLightMap.value=G.state.spotLightMap,be.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Ge,V.uniformsList=null,Ge}function Cd(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=lr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Id(M,F){let q=X.get(M);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Lg(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let q=0,V=M.length;q<V;q++){let G=M[q];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function Dg(M,F,q,V,G){F.isScene!==!0&&(F=si),j.resetTextureUnits();let me=F.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,pe=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ye.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,we=ne.get(V.envMap||ye,Se),ke=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!q.morphAttributes.position,tt=!!q.morphAttributes.normal,Rt=!!q.morphAttributes.color,_t=Bi;V.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(_t=R.toneMapping);let lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xt=lt!==void 0?lt.length:0,_e=X.get(V),jt=E.state.lights;if($e===!0&&(dt===!0||M!==K)){let pt=M===K&&V.id===W;Ae.setState(V,M,pt)}let Ke=!1;V.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==jt.state.version||_e.outputColorSpace!==pe||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==we||V.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ae.numPlanes||_e.numIntersection!==Ae.numIntersection)||_e.vertexAlphas!==ke||_e.vertexTangents!==Ge||_e.morphTargets!==be||_e.morphNormals!==tt||_e.morphColors!==Rt||_e.toneMapping!==_t||_e.morphTargetsCount!==Xt||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,_e.__version=V.version);let Ei=_e.currentProgram;Ke===!0&&(Ei=ja(V,F,G),P&&V.isNodeMaterial&&P.onUpdateProgram(V,Ei,_e));let Gi=!1,En=!1,Cs=!1,at=Ei.getUniforms(),Tt=_e.uniforms;if(x.useProgram(Ei.program)&&(Gi=!0,En=!0,Cs=!0),V.id!==W&&(W=V.id,En=!0),_e.needsLights){let pt=Lg(E.state.lightProbeGridArray,G);_e.lightProbeGrid!==pt&&(_e.lightProbeGrid=pt,En=!0)}if(Gi||K!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),at.setValue(B,"projectionMatrix",M.projectionMatrix),at.setValue(B,"viewMatrix",M.matrixWorldInverse);let An=at.map.cameraPosition;An!==void 0&&An.setValue(B,vt.setFromMatrixPosition(M.matrixWorld)),L.logarithmicDepthBuffer&&at.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,En=!0,Cs=!0)}if(_e.needsLights&&(jt.state.sunShadowMap.length>0&&at.setValue(B,"sunShadowMap",jt.state.sunShadowMap,j),jt.state.directionalShadowMap.length>0&&at.setValue(B,"directionalShadowMap",jt.state.directionalShadowMap,j),jt.state.spotShadowMap.length>0&&at.setValue(B,"spotShadowMap",jt.state.spotShadowMap,j),jt.state.pointShadowMap.length>0&&at.setValue(B,"pointShadowMap",jt.state.pointShadowMap,j)),G.isSkinnedMesh){at.setOptional(B,G,"bindMatrix"),at.setOptional(B,G,"bindMatrixInverse");let pt=G.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),at.setValue(B,"boneTexture",pt.boneTexture,j))}G.isBatchedMesh&&(at.setOptional(B,G,"batchingTexture"),at.setValue(B,"batchingTexture",G._matricesTexture,j),at.setOptional(B,G,"batchingIdTexture"),at.setValue(B,"batchingIdTexture",G._indirectTexture,j),at.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(B,"batchingColorTexture",G._colorsTexture,j));let Tn=q.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&O.update(G,q,Ei),(En||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,at.setValue(B,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Tt.envMapIntensity.value=F.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Sb()),En){if(at.setValue(B,"toneMappingExposure",R.toneMappingExposure),_e.needsLights&&Ng(Tt,Cs),me&&V.fog===!0&&Te.refreshFogUniforms(Tt,me),Te.refreshMaterialUniforms(Tt,V,Z,Y,E.state.transmissionRenderTarget[M.id]),_e.needsLights&&_e.lightProbeGrid){let pt=_e.lightProbeGrid;Tt.probesSH.value=pt.texture,Tt.probesMin.value.copy(pt.boundingBox.min),Tt.probesMax.value.copy(pt.boundingBox.max),Tt.probesResolution.value.copy(pt.resolution)}lr.upload(B,Cd(_e),Tt,j)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(lr.upload(B,Cd(_e),Tt,j),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(B,"center",G.center),at.setValue(B,"modelViewMatrix",G.modelViewMatrix),at.setValue(B,"normalMatrix",G.normalMatrix),at.setValue(B,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let pt=V.uniformsGroups;for(let An=0,Is=pt.length;An<Is;An++){let Ld=pt[An];ie.update(Ld,Ei),ie.bind(Ld,Ei)}}return Ei}function Ng(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Ug(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(M,F,q){let V=X.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=F,X.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let q=X.get(M);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,q=0){$=M,z=F,H=q;let V=null,G=!1,me=!1;if(M){let pe=X.get(M);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,pe.__webglFramebuffer),Q.copy(M.viewport),xe.copy(M.scissor),ve=M.scissorTest,x.viewport(Q),x.scissor(xe),x.setScissorTest(ve),W=-1;return}else if(pe.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(pe.__hasExternalTextures)j.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ke=M.depthTexture;if(pe.__boundDepthTexture!==ke){if(ke!==null&&X.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}let Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);let we=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[F])?V=we[F][q]:V=we[F],G=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?V=X.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[q]:V=we,Q.copy(M.viewport),xe.copy(M.scissor),ve=M.scissorTest}else Q.copy(se).multiplyScalar(Z).floor(),xe.copy(Ee).multiplyScalar(Z).floor(),ve=ut;if(q!==0&&(V=N),x.bindFramebuffer(B.FRAMEBUFFER,V)&&x.drawBuffers(M,V),x.viewport(Q),x.scissor(xe),x.setScissorTest(ve),G){let pe=X.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,q)}else if(me){let pe=F;for(let Se=0;Se<M.textures.length;Se++){let we=X.get(M.textures[Se]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Se,we.__webglTexture,q,pe)}}else if(M!==null&&q!==0){let pe=X.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pe.__webglTexture,q)}W=-1};function Pd(M){let F=X.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=L.textureFormatReadable(M.format),F.__typeReadable=L.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,q,V,G,me,ye,pe=0){if(!(M&&M.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){x.bindFramebuffer(B.FRAMEBUFFER,Se);try{let we=M.textures[pe],ke=we.format,Ge=we.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);let be=Pd(we);if(be.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-V&&q>=0&&q<=M.height-G&&B.readPixels(F,q,V,G,he.convert(ke),he.convert(Ge),me)}finally{let we=$!==null?X.get($).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,F,q,V,G,me,ye,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se)if(F>=0&&F<=M.width-V&&q>=0&&q<=M.height-G){x.bindFramebuffer(B.FRAMEBUFFER,Se);let we=M.textures[pe],ke=we.format,Ge=we.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);let be=Pd(we);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.bufferData(B.PIXEL_PACK_BUFFER,me.byteLength,B.STREAM_READ),B.readPixels(F,q,V,G,he.convert(ke),he.convert(Ge),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Rt=$!==null?X.get($).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Rt);let _t=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Wf(B,_t,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,me),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(tt),B.deleteSync(_t),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,q=0){let V=Math.pow(2,-q),G=Math.floor(M.image.width*V),me=Math.floor(M.image.height*V),ye=F!==null?F.x:0,pe=F!==null?F.y:0;j.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,ye,pe,G,me),x.unbindTexture()},this.copyTextureToTexture=function(M,F,q=null,V=null,G=0,me=0){let ye,pe,Se,we,ke,Ge,be,tt,Rt,_t=M.isCompressedTexture?M.mipmaps[me]:M.image;if(q!==null)ye=q.max.x-q.min.x,pe=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,ke=q.min.y,Ge=q.isBox3?q.min.z:0;else{let Tt=Math.pow(2,-G);ye=Math.floor(_t.width*Tt),pe=Math.floor(_t.height*Tt),M.isDataArrayTexture?Se=_t.depth:M.isData3DTexture?Se=Math.floor(_t.depth*Tt):Se=1,we=0,ke=0,Ge=0}V!==null?(be=V.x,tt=V.y,Rt=V.z):(be=0,tt=0,Rt=0);let lt=he.convert(F.format),Xt=he.convert(F.type),_e;F.isData3DTexture?(j.setTexture3D(F,0),_e=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),_e=B.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),_e=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let jt=x.getParameter(B.UNPACK_ROW_LENGTH),Ke=x.getParameter(B.UNPACK_IMAGE_HEIGHT),Ei=x.getParameter(B.UNPACK_SKIP_PIXELS),Gi=x.getParameter(B.UNPACK_SKIP_ROWS),En=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,_t.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,we),x.pixelStorei(B.UNPACK_SKIP_ROWS,ke),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);let Cs=M.isDataArrayTexture||M.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Tt=X.get(M),Tn=X.get(F),pt=X.get(Tt.__renderTarget),An=X.get(Tn.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,pt.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Is=0;Is<Se;Is++)Cs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(M).__webglTexture,G,Ge+Is),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(F).__webglTexture,me,Rt+Is)),B.blitFramebuffer(we,ke,ye,pe,be,tt,ye,pe,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||X.has(M)){let Tt=X.get(M),Tn=X.get(F);x.bindFramebuffer(B.READ_FRAMEBUFFER,D),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let pt=0;pt<Se;pt++)Cs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.__webglTexture,G,Ge+pt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,G),at?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tn.__webglTexture,me,Rt+pt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tn.__webglTexture,me),G!==0?B.blitFramebuffer(we,ke,ye,pe,be,tt,ye,pe,B.COLOR_BUFFER_BIT,B.NEAREST):at?B.copyTexSubImage3D(_e,me,be,tt,Rt+pt,we,ke,ye,pe):B.copyTexSubImage2D(_e,me,be,tt,we,ke,ye,pe);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else at?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(_e,me,be,tt,Rt,ye,pe,Se,lt,Xt,_t.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,me,be,tt,Rt,ye,pe,Se,lt,_t.data):B.texSubImage3D(_e,me,be,tt,Rt,ye,pe,Se,lt,Xt,_t):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,me,be,tt,ye,pe,lt,Xt,_t.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,me,be,tt,_t.width,_t.height,lt,_t.data):B.texSubImage2D(B.TEXTURE_2D,me,be,tt,ye,pe,lt,Xt,_t);x.pixelStorei(B.UNPACK_ROW_LENGTH,jt),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ke),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Ei),x.pixelStorei(B.UNPACK_SKIP_ROWS,Gi),x.pixelStorei(B.UNPACK_SKIP_IMAGES,En),me===0&&F.generateMipmaps&&B.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){z=0,H=0,$=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var wp={type:"change"},mu={type:"start"},Tp={type:"end"},Yl=new pn,Ep=new mi,bb=Math.cos(70*na.DEG2RAD),Ft=new I,ci=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pu=1e-6,ql=class extends ls{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ct,this._lastTargetPosition=new I,this._quat=new ct().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new er,this._sphericalDelta=new er,this._scale=1,this._panOffset=new I,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new I,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wb.bind(this),this._onPointerDown=Mb.bind(this),this._onPointerUp=Eb.bind(this),this._onContextMenu=Lb.bind(this),this._onMouseWheel=Rb.bind(this),this._onKeyDown=Cb.bind(this),this._onTouchStart=Ib.bind(this),this._onTouchMove=Pb.bind(this),this._onMouseDown=Tb.bind(this),this._onMouseMove=Ab.bind(this),this._interceptControlDown=Db.bind(this),this._interceptControlUp=Nb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wp),this.update(),this.state=rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ci:n>Math.PI&&(n-=ci),s<-Math.PI?s+=ci:s>Math.PI&&(s-=ci),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ft.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yl.origin.copy(this.object.position),Yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yl.direction))<bb?this.object.lookAt(this.target):(Ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yl.intersectPlane(Ep,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pu||this._lastTargetPosition.distanceToSquared(this.target)>pu?(this.dispatchEvent(wp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ci/60*this.autoRotateSpeed*e:ci/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Mb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Eb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tp),this.state=rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Tb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=rt.DOLLY;break;case Qt.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}break;case Qt.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(mu)}function Ab(i){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Rb(i){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(i.preventDefault(),this.dispatchEvent(mu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tp))}function Cb(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ib(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=rt.TOUCH_ROTATE;break;case Vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=rt.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(mu)}function Pb(i){switch(this._trackPointer(i),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=rt.NONE}}function Lb(i){this.enabled!==!1&&i.preventDefault()}function Db(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var fs=new Hn,Et=new I,qn=new I,St=new ct,Ap={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},gu={type:"change"},Rp={type:"mouseDown",mode:null},Cp={type:"mouseUp",mode:null},Ip={type:"objectChange"},Jl=class extends ls{constructor(e,t=null){super(void 0,t);let n=new yu(this);this._root=n;let s=new xu;this._gizmo=s,n.add(s);let r=new vu;this._plane=r,n.add(r);let a=this;function o(T,_){let b=_;Object.defineProperty(a,T,{get:function(){return b!==void 0?b:_},set:function(E){b!==E&&(b=E,r[T]=E,s[T]=E,a.dispatchEvent({type:T+"-changed",value:E}),a.dispatchEvent(gu))}}),a[T]=_,r[T]=_,s[T]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),this.viewport=null,o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0),o("showXY",!0),o("showYZ",!0),o("showXZ",!0),o("showXYZE",!0),o("showE",!0),o("minX",-1/0),o("maxX",1/0),o("minY",-1/0),o("maxY",1/0),o("minZ",-1/0),o("maxZ",1/0);let c=new I,l=new I,h=new ct,d=new ct,u=new I,f=new ct,g=new I,v=new I,m=new I,p=0,S=new I;o("worldPosition",c),o("worldPositionStart",l),o("worldQuaternion",h),o("worldQuaternionStart",d),o("cameraPosition",u),o("cameraQuaternion",f),o("pointStart",g),o("pointEnd",v),o("rotationAxis",m),o("rotationAngle",p),o("eye",S),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new ct,this._parentQuaternionInv=new ct,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new ct,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new ct,this._scaleStart=new I,this._getPointer=Ub.bind(this),this._onPointerDown=Ob.bind(this),this._onPointerHover=Fb.bind(this),this._onPointerMove=Bb.bind(this),this._onPointerUp=kb.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&fs.setFromCamera(e,this.camera);let t=_u(this._gizmo.picker[this.mode],fs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&fs.setFromCamera(e,this.camera);let t=_u(this._plane,fs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Rp.mode=this.mode,this.dispatchEvent(Rp)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&fs.setFromCamera(e,this.camera);let a=_u(this._plane,fs,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(St.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.getWorldPosition(Et),t.search("X")!==-1&&(Et.x=Math.round(Et.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(Et.y=Math.round(Et.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(Et.z=Math.round(Et.z/this.translationSnap)*this.translationSnap),s.position.copy(s.parent.worldToLocal(Et)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),qn.set(o,o,o)}else Et.copy(this.pointStart),qn.copy(this.pointEnd),Et.applyQuaternion(this._worldQuaternionInv),qn.applyQuaternion(this._worldQuaternionInv),qn.divide(Et),t.search("X")===-1&&(qn.x=1),t.search("Y")===-1&&(qn.y=1),t.search("Z")===-1&&(qn.z=1);s.scale.copy(this._scaleStart).multiply(qn),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let o=20/this.worldPosition.distanceTo(Et.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Et.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Ap[t]),Et.copy(Ap[t]),r==="local"&&Et.applyQuaternion(this.worldQuaternion),Et.cross(this.eye),Et.length()===0?c=!0:this.rotationAngle=this._offset.dot(Et.normalize())*o),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(St.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(St.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(gu),this.dispatchEvent(Ip)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Cp.mode=this.mode,this.dispatchEvent(Cp)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(gu),this.dispatchEvent(Ip),this.pointStart.copy(this.pointEnd))}getRaycaster(){return fs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Ub(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect(),t=this.viewport,n,s,r,a;return t!==null?(n=t.x,s=e.height-t.y-t.w,r=t.z,a=t.w):(n=0,s=0,r=e.width,a=e.height),{x:(i.clientX-e.left-n)/r*2-1,y:-(i.clientY-e.top-s)/a*2+1,button:i.button}}}function Fb(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Ob(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Bb(i){this.enabled&&this.pointerMove(this._getPointer(i))}function kb(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function _u(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var Zl=new Ri,ht=new I(0,1,0),Pp=new I(0,0,0),Lp=new je,Kl=new ct,$l=new ct,$i=new I,Ql=new je,ca=new I(1,0,0),ps=new I(0,1,0),ha=new I(0,0,1),jl=new I,oa=new I,la=new I,yu=class extends Lt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),this.parent&&(Ql.copy(this.parent.matrixWorld).invert(),Ql.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},xu=class extends Lt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Un({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new gn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let a=e.clone();a.color.setHex(65280);let o=e.clone();o.color.setHex(255);let c=e.clone();c.color.setHex(16711680),c.opacity=.5;let l=e.clone();l.color.setHex(65280),l.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let d=e.clone();d.opacity=.25;let u=e.clone();u.color.setHex(16776960),u.opacity=.25;let f=e.clone();f.color.setHex(16776960);let g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:a,zAxis:o,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:h,activeTransparent:u};let v=new Ht(0,.04,.1,12);v.translate(0,.05,0);let m=new wt(.08,.08,.08);m.translate(0,.04,0);let p=new xt;p.setAttribute("position",new nt([0,0,0,1,0,0],3));let S=new Ht(.0075,.0075,.5,3);S.translate(0,.25,0);function T(U,z){let H=new _n(U,.0075,3,64,z*Math.PI*2);return H.rotateY(Math.PI/2),H.rotateX(Math.PI/2),H}function _(){let U=new xt;return U.setAttribute("position",new nt([0,0,0,1,1,1],3)),U}let b={X:[[new re(v,r),[.5,0,0],[0,0,-Math.PI/2]],[new re(v,r),[-.5,0,0],[0,0,Math.PI/2]],[new re(S,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new re(v,a),[0,.5,0]],[new re(v,a),[0,-.5,0],[Math.PI,0,0]],[new re(S,a)]],Z:[[new re(v,o),[0,0,.5],[Math.PI/2,0,0]],[new re(v,o),[0,0,-.5],[-Math.PI/2,0,0]],[new re(S,o),null,[Math.PI/2,0,0]]],XYZ:[[new re(new On(.1,0),d),[0,0,0]]],XY:[[new re(new wt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new re(new wt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new re(new wt(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new re(new Ht(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new re(new Ht(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new re(new Ht(.2,0,.6,4),n),[0,.3,0]],[new re(new Ht(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new re(new Ht(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new re(new Ht(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new re(new On(.2,0),n)]],XY:[[new re(new wt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new re(new wt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new re(new wt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new re(new On(.01,2),s),null,null,null,"helper"]],END:[[new re(new On(.01,2),s),null,null,null,"helper"]],DELTA:[[new gi(_(),s),null,null,null,"helper"]],X:[[new gi(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new gi(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new gi(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},y={XYZE:[[new re(T(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new re(T(.5,.5),r)]],Y:[[new re(T(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new re(T(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new re(T(.75,1),u),null,[0,Math.PI/2,0]]]},w={AXIS:[[new gi(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},R={XYZE:[[new re(new Yr(.25,10,8),n)]],X:[[new re(new _n(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new re(new _n(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new re(new _n(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new re(new _n(.75,.1,2,24),n)]]},C={X:[[new re(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new re(S,r),[0,0,0],[0,0,-Math.PI/2]],[new re(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new re(m,a),[0,.5,0]],[new re(S,a)],[new re(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new re(m,o),[0,0,.5],[Math.PI/2,0,0]],[new re(S,o),[0,0,0],[Math.PI/2,0,0]],[new re(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new re(new wt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new re(new wt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new re(new wt(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new re(new wt(.1,.1,.1),d)]]},P={X:[[new re(new Ht(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new re(new Ht(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new re(new Ht(.2,0,.6,4),n),[0,.3,0]],[new re(new Ht(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new re(new Ht(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new re(new Ht(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new re(new wt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new re(new wt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new re(new wt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new re(new wt(.2,.2,.2),n),[0,0,0]]]},N={X:[[new gi(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new gi(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new gi(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function D(U){let z=new Lt;for(let H in U)for(let $=U[H].length;$--;){let W=U[H][$][0].clone(),K=U[H][$][1],Q=U[H][$][2],xe=U[H][$][3],ve=U[H][$][4];W.name=H,W.tag=ve,K&&W.position.set(K[0],K[1],K[2]),Q&&W.rotation.set(Q[0],Q[1],Q[2]),xe&&W.scale.set(xe[0],xe[1],xe[2]),W.updateMatrix();let qe=W.geometry.clone();qe.applyMatrix4(W.matrix),W.geometry=qe,W.renderOrder=1/0,W.position.set(0,0,0),W.rotation.set(0,0,0),W.scale.set(1,1,1),z.add(W)}return z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=D(b)),this.add(this.gizmo.rotate=D(y)),this.add(this.gizmo.scale=D(C)),this.add(this.picker.translate=D(E)),this.add(this.picker.rotate=D(R)),this.add(this.picker.scale=D(P)),this.add(this.helper.translate=D(A)),this.add(this.helper.rotate=D(w)),this.add(this.helper.scale=D(N)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:$l;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let a=s[r];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(St.setFromEuler(Zl.set(0,0,0)),a.quaternion.copy(n).multiply(St),Math.abs(ht.copy(ca).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(St.setFromEuler(Zl.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(St),Math.abs(ht.copy(ps).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(St.setFromEuler(Zl.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(St),Math.abs(ht.copy(ha).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(St.setFromEuler(Zl.set(0,Math.PI/2,0)),ht.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Lp.lookAt(Pp,ht,ps)),a.quaternion.multiply(St),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Et.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Et.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Et),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(ht.copy(ca).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(ht.copy(ps).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(ht.copy(ha).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(ht.copy(ha).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(ht.copy(ca).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(ht.copy(ps).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Kl.copy(n),ht.copy(this.eye).applyQuaternion(St.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Lp.lookAt(this.eye,Pp,ps)),a.name==="X"&&(St.setFromAxisAngle(ca,Math.atan2(-ht.y,ht.z)),St.multiplyQuaternions(Kl,St),a.quaternion.copy(St)),a.name==="Y"&&(St.setFromAxisAngle(ps,Math.atan2(ht.x,ht.z)),St.multiplyQuaternions(Kl,St),a.quaternion.copy(St)),a.name==="Z"&&(St.setFromAxisAngle(ha,Math.atan2(ht.y,ht.x)),St.multiplyQuaternions(Kl,St),a.quaternion.copy(St))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.visible=a.visible&&(a.name.indexOf("XY")===-1||this.showXY),a.visible=a.visible&&(a.name.indexOf("YZ")===-1||this.showYZ),a.visible=a.visible&&(a.name.indexOf("XZ")===-1||this.showXZ),a.visible=a.visible&&(a.name!=="E"||this.showE),a.visible=a.visible&&(a.name!=="XYZE"||this.showXYZE),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis?(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1):this.axis.split("").some(function(c){return a.name===c})&&(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1))}super.updateMatrixWorld(e)}},vu=class extends re{constructor(){super(new _i(1e5,1e5,2,2),new Un({visible:!1,wireframe:!0,side:li,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),jl.copy(ca).applyQuaternion(t==="local"?this.worldQuaternion:$l),oa.copy(ps).applyQuaternion(t==="local"?this.worldQuaternion:$l),la.copy(ha).applyQuaternion(t==="local"?this.worldQuaternion:$l),ht.copy(oa),this.mode){case"translate":case"scale":switch(this.axis){case"X":ht.copy(this.eye).cross(jl),$i.copy(jl).cross(ht);break;case"Y":ht.copy(this.eye).cross(oa),$i.copy(oa).cross(ht);break;case"Z":ht.copy(this.eye).cross(la),$i.copy(la).cross(ht);break;case"XY":$i.copy(la);break;case"YZ":$i.copy(jl);break;case"XZ":ht.copy(la),$i.copy(oa);break;case"XYZ":case"E":$i.set(0,0,0);break}break;default:$i.set(0,0,0)}$i.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ql.lookAt(Et.set(0,0,0),$i,ht),this.quaternion.setFromRotationMatrix(Ql)),super.updateMatrixWorld(e)}};var Dp=`#if SKY_SOLID_CUTS\r
uniform int uSolidCuts[8];\r
#endif\r
precision highp float;\r
precision highp sampler3D;\r
precision highp sampler2D;\r
in vec2 vUV;\r
out vec4 outColor;\r
uniform sampler3D uNoise;\r
uniform sampler2D uScaffold;\r
uniform sampler2D uSculpt;\r
uniform int uSculptCount[8];\r
uniform sampler3D uDensity0,uDensity1,uDensity2,uDensity3,uDensity4,uDensity5,uDensity6,uDensity7;\r
uniform int uCached[8];\r
uniform vec4 uCacheLo[8],uCacheHi[8];\r
uniform vec4 uRecipeInfo[8], uRecipeFlags[8];\r
#if !SKY_ANALYTIC_RECIPES\r
uniform int uCutCount[8]; // Occupied intervals also inspect ordered-add support.\r
#endif\r
uniform vec4 uProfile[8];\r
uniform int uSolo, uInspect;\r
uniform int uOccupied;\r
uniform vec4 uSupportLo[8],uSupportHi[8];\r
uniform mat4 uInvPV;\r
uniform int uOrthographic;\r
uniform float uCameraNear;\r
uniform vec3 uOrigin, uSun, uZenith, uHorizon, uLo, uHi;\r
uniform float uIntensity, uAmbient, uExposure;\r
uniform int uCount, uPanorama, uSteps, uShadowSteps;\r
uniform int uLinear,uIncludeSun,uCloudBackdrop;\r
uniform vec4 uTileUV;\r
uniform vec4 uStableYaw[8];\r
#if SKY_FULL_ROTATION\r
uniform mat3 uInverseRotation[8];\r
uniform int uTilted[8];\r
#endif\r
uniform vec4 uPosition[8], uSize[8], uForm[8], uWarp[8];\r
uniform int uStudioLighting;uniform float uAnisotropy,uScatterFill;uniform vec3 uSunTint,uSkyTint;\r
\r
float ellipsoid(vec3 q, vec3 c, vec3 r) {\r
  vec3 d = (q - c) / r;\r
  return 1.0 - smoothstep(0.10, 1.0, dot(d, d));\r
}\r
#if SKY_ANALYTIC_RECIPES\r
/* SCULPT_FIELD */\r
/* MODIFIER_FIELDS */\r
/* RECIPE_FIELD */\r
#endif\r
float cachedDensity(vec3 q,int i) {\r
  vec3 uv=(q-uCacheLo[i].xyz)/(uCacheHi[i].xyz-uCacheLo[i].xyz);\r
  if(any(lessThanEqual(uv,vec3(0)))||any(greaterThanEqual(uv,vec3(1))))return 0.0;\r
  float d;\r
  if(i==0)d=texture(uDensity0,uv).r;else if(i==1)d=texture(uDensity1,uv).r;\r
  else if(i==2)d=texture(uDensity2,uv).r;else if(i==3)d=texture(uDensity3,uv).r;\r
  else if(i==4)d=texture(uDensity4,uv).r;else if(i==5)d=texture(uDensity5,uv).r;\r
  else if(i==6)d=texture(uDensity6,uv).r;else d=texture(uDensity7,uv).r;\r
  #if SKY_SOLID_CUTS\r
  if(uSolidCuts[i]==1)return d;\r
  #endif\r
  return d*uCacheLo[i].w*uForm[i].z;\r
}\r
float volume(vec3 p, int i) {\r
  vec3 d = p - uPosition[i].xyz;\r
  float radius = uWarp[i].w;\r
  if (dot(d,d) > radius * radius) return 0.0;\r
  float a = uSize[i].w, c = cos(a), s = sin(a);\r
  if(uStableYaw[i].z>.5){c=uStableYaw[i].x;s=uStableYaw[i].y;}\r
  vec3 q = vec3(c*d.x-s*d.z, d.y, s*d.x+c*d.z) / uSize[i].xyz;\r
  #if SKY_FULL_ROTATION\r
  if(uTilted[i]==1)q=(uInverseRotation[i]*d)/uSize[i].xyz;\r
  #endif\r
  if(uCached[i]==1)return cachedDensity(q,i);\r
  #if SKY_CACHED_RECIPES\r
  if(uRecipeFlags[i].x>0.5)return 0.0; // Host requires a completed cache for studio draws.\r
  #elif SKY_ANALYTIC_RECIPES\r
  if(uRecipeFlags[i].x>0.5)q=sculptPoint(q,i);\r
  #endif\r
  // Local coordinates carry authored noise with translation, scale and yaw.\r
  vec3 coord = q * uForm[i].x * 4.0 + vec3(uWarp[i].z);\r
  vec4 n = texture(uNoise, coord);\r
  #if SKY_ANALYTIC_RECIPES\r
  if(uRecipeFlags[i].x>0.5)return recipeDensity(q,coord,n,i);\r
  #endif\r
  q += (n.zwx - 0.5) * uWarp[i].x;\r
  q.x -= uWarp[i].y * q.y * q.y;\r
  float mask = ellipsoid(q, vec3(0,-0.20,0), vec3(1,0.62,0.85));\r
  mask = max(mask, ellipsoid(q, vec3(-0.38,0.23,0.05), vec3(0.58,0.74,0.64)));\r
  mask = max(mask, ellipsoid(q, vec3(0.35,0.30,-0.1), vec3(0.62,0.8,0.70)));\r
  float base = n.r * 0.6 + n.g * 0.4;\r
  float detail = texture(uNoise, coord * 2.07).g;\r
  float shaped = mask * (0.45 + base * 1.25) - uForm[i].y * (1.0-detail) * 0.65;\r
  return max(0.0, shaped) * uForm[i].z;\r
}\r
float density(vec3 p) {\r
  float total=0.0, cut=0.0;\r
  for (int i=0; i<8; i++) {\r
    if(i>=uCount) break;\r
    #if SKY_SCENE_LIGHTING\r
    if(uSolo>=0 && i!=uSolo && uPosition[i].w>0.0)continue;\r
    #else\r
    if(uSolo>=0 && i!=uSolo)continue;\r
    #endif\r
    float d = volume(p,i);\r
    if(uPosition[i].w>0.0) total+=d; else cut=max(cut,d);\r
  }\r
  return min(total,uStudioLighting==1?20.0:5.0) * (1.0-clamp(cut,0.0,1.0));\r
}\r
vec2 interval(vec3 ro, vec3 rd) {\r
  // Parallel rays keep their signs; avoid division by zero at panorama poles.\r
  vec3 safe = vec3(rd.x<0.0 ? -max(abs(rd.x),1e-6):max(abs(rd.x),1e-6),\r
                   rd.y<0.0 ? -max(abs(rd.y),1e-6):max(abs(rd.y),1e-6),\r
                   rd.z<0.0 ? -max(abs(rd.z),1e-6):max(abs(rd.z),1e-6));\r
  vec3 a=(uLo-ro)/safe, b=(uHi-ro)/safe, low=min(a,b), high=max(a,b);\r
  return vec2(max(max(low.x,low.y),low.z),min(min(high.x,high.y),high.z));\r
}\r
#if SKY_OCCUPIED_PATHS\r
/* OCCUPIED_INTERVALS */\r
#endif\r
/* SCENE_LIGHTING */\r
/* VISIBILITY_LOOKUP */\r
float shadow(vec3 p) {\r
  #if SKY_OCCUPIED_PATHS\r
  if(uOccupied==1) {\r
    vec2 spans[8];int count=shadowSegments(p,uSun,22.0,spans);\r
    float len=occupiedLength(spans,count),ds=len/float(uShadowSteps),optical=0.0;\r
    for(int j=0;j<SKY_SHADOW_LIMIT;j++) {\r
      if(j>=uShadowSteps)break;\r
      optical+=shadowDensity(p+uSun*occupiedDistance(spans,count,(float(j)+0.5)*ds))*ds*(uStudioLighting==1?1.0:.65);\r
    }\r
    return exp(-optical);\r
  }\r
  #endif\r
  vec2 hit=interval(p,uSun);\r
  float len=clamp(hit.y,0.0,22.0), ds=len/float(uShadowSteps), optical=0.0;\r
  for(int j=0;j<SKY_SHADOW_LIMIT;j++) {\r
    if(j>=uShadowSteps) break;\r
    optical+=shadowDensity(p+uSun*((float(j)+0.5)*ds))*ds*(uStudioLighting==1?1.0:.65);\r
  }\r
  return exp(-optical);\r
}\r
vec3 srgb(vec3 c) {\r
  return mix(c*12.92, 1.055*pow(max(c,vec3(0)),vec3(1.0/2.4))-0.055, step(vec3(0.0031308),c));\r
}\r
#if SKY_STUDIO_LIGHTING\r
/* STUDIO_LIGHTING */\r
#endif\r
void main() {\r
  vec3 rd,ro=uOrigin;\r
  if(uPanorama==1) {\r
    vec2 uv=vUV;if(uLinear==1)uv=vUV*uTileUV.xy+uTileUV.zw;\r
    float yaw=(uv.x*2.0-1.0)*3.14159265359, el=(uv.y-0.5)*3.14159265359;\r
    rd=vec3(sin(yaw)*cos(el),sin(el),cos(yaw)*cos(el));\r
  } else if(uOrthographic==1) {\r
    vec4 nearPoint=uInvPV*vec4(vUV*2.0-1.0,-1,1),farPoint=uInvPV*vec4(vUV*2.0-1.0,1,1);\r
    rd=normalize(farPoint.xyz/farPoint.w-nearPoint.xyz/nearPoint.w);ro=nearPoint.xyz/nearPoint.w-rd*uCameraNear;\r
  } else {\r
    vec4 farPoint=uInvPV*vec4(vUV*2.0-1.0,1,1);\r
    rd=normalize(farPoint.xyz/farPoint.w-uOrigin);\r
  }\r
  vec3 sky=mix(uHorizon,uZenith,smoothstep(-0.05,0.9,rd.y));\r
  if(uSolo>=0)sky=mix(vec3(0.025,0.045,0.075),vec3(0.08,0.12,0.19),smoothstep(-0.5,0.5,-rd.y));\r
  else if(uIncludeSun==1)sky+=vec3(1.0,0.86,0.6)*pow(max(dot(rd,uSun),0.0),500.0)*uIntensity;\r
  vec2 hit=interval(ro,rd); float start=max(0.0,hit.x), finish=hit.y;\r
  #if SKY_OCCUPIED_PATHS\r
  vec2 spans[8];int spanCount=0;\r
  if(uOccupied==1){spanCount=occupiedSegments(ro,rd,1e20,spans);start=0.0;finish=occupiedLength(spans,spanCount);}\r
  #endif\r
  vec3 radiance=vec3(0); float transmission=1.0;\r
  if(finish>start && uCount>0) {\r
    float ds=(finish-start)/float(uSteps);\r
    // Pixel-stable sampling: no temporal jitter that could shimmer in a bake.\r
    for(int j=0;j<SKY_VIEW_LIMIT;j++) {\r
      if(j>=uSteps || transmission<(uStudioLighting==1?.002:.015)) break;\r
      float distance=start+(float(j)+0.5)*ds;\r
      #if SKY_OCCUPIED_PATHS\r
      if(uOccupied==1)distance=occupiedDistance(spans,spanCount,distance);\r
      #endif\r
      vec3 p=ro+rd*distance;\r
      float d=density(p);\r
      if(d<0.001) continue;\r
      float alpha=1.0-exp(-d*ds*(uStudioLighting==1?1.0:.65));\r
      #if SKY_STUDIO_LIGHTING\r
      vec3 lit=studioLight(p,rd);\r
      #else\r
      float phase=0.55+0.45*pow(max(dot(rd,uSun),0.0),6.0);\r
      vec3 lit=vec3(0.63,0.76,1.0)*uAmbient+vec3(1.0,0.95,0.84)*uIntensity*shadow(p)*phase;\r
      #endif\r
      radiance+=transmission*alpha*lit;\r
      transmission*=1.0-alpha;\r
    }\r
  }\r
  if(uLinear==1){outColor=vec4(radiance+sky*transmission,1);return;}\r
  #if SKY_SCENE_LIGHTING\r
  if(uSolo>=0&&uPanorama==0&&uCloudBackdrop==1){vec3 cloud=vec3(1)-exp(-max(radiance/max(1e-6,1.0-transmission)*uExposure,vec3(0)));outColor=vec4(srgb(cloud*(1.0-transmission)+vec3(.0072,.0100,.0174)*transmission),1);return;}\r
  if(uSolo>=0&&uPanorama==0&&uCloudBackdrop==2){vec3 background=mix(vec3(.22,.32,.45),vec3(.095,.17,.28),smoothstep(0.0,1.0,vUV.y));background=mix(background/12.92,pow((background+.055)/1.055,vec3(2.4)),step(vec3(.04045),background));vec3 cloud=vec3(1)-exp(-max(radiance/max(1e-6,1.0-transmission)*uExposure,vec3(0)));outColor=vec4(srgb(cloud*(1.0-transmission)+background*transmission),1);return;}\r
  #endif\r
  vec3 color=(radiance+sky*transmission)*uExposure;\r
  color=uStudioLighting==1?vec3(1.0)-exp(-max(color,vec3(0))):color/(1.0+color);\r
  outColor=vec4(srgb(color),1);\r
}\r
`;var Np=`uniform sampler3D uStudioNoise;\r
uniform vec4 uCharacterFlags[8],uCharacterShape[8],uCharacterDetail[8];\r
/* SOURCE_FIELD */\r
float curveField(vec3 p, int i, int count) {\r
  #if SKY_SOURCE_FIELD\r
  if(i==uSourceFieldIndex)return sourceFieldDistance(p);\r
  #endif\r
  float d=20.0;\r
  for(int j=0;j<128;j++) {\r
    if(j>=count)break;\r
    vec4 a=texelFetch(uScaffold,ivec2(j*2,i),0), b=texelFetch(uScaffold,ivec2(j*2+1,i),0);\r
    vec3 delta=b.xyz-a.xyz, offset=p-a.xyz;\r
    float t=clamp(dot(offset,delta)/max(dot(delta,delta),1e-8),0.0,1.0);\r
    float next=length(offset-delta*t)-mix(a.w,b.w,t);\r
    float h=max(0.08-abs(d-next),0.0)/0.08;\r
    d=min(d,next)-h*h*0.02;\r
  }\r
  return d;\r
}\r
/* STUDIO_FIELD */\r
float styledDistance(float d,vec3 coord,int i,int stage,vec4 masks,float billow) {\r
  if(stage>=2)d-=(texture(uNoise,coord*0.6).g*2.0-1.0)*billow*masks.y;\r
  if(stage>=3 && uRecipeFlags[i].y>0.5) {\r
    float edge=smoothstep(-0.4,0.05,d);\r
    d+=uForm[i].y*(1.0-texture(uNoise,coord*2.07).g)*0.3*edge*masks.z;\r
  }\r
  return d;\r
}\r
// Style each addition before constructive cuts, so later Add can refill and later Cut stays open.\r
float orderedMasses(float d,vec3 q,vec3 coord,int i,int stage,vec4 masks,float billow) {\r
  for(int j=0;j<16;j++) {\r
    if(j>=uCutCount[i])break;\r
    vec4 a=texelFetch(uCuts,ivec2(j*2,i),0),b=texelFetch(uCuts,ivec2(j*2+1,i),0);\r
    vec3 delta=b.xyz-a.xyz,offset=q-a.xyz;float t=clamp(dot(offset,delta)/max(dot(delta,delta),1e-8),0.0,1.0);\r
    float next=length(offset-delta*t)-a.w;\r
    if(b.w<0.0)d=max(d,-next);\r
    else {next=styledDistance(next,coord,i,stage,masks,billow);float h=max(0.08-abs(d-next),0.0)/0.08;d=min(d,next)-h*h*0.02;}\r
  }\r
  return d;\r
}\r
float recipeDensity(vec3 q, vec3 coord, vec4 n, int i) {\r
  #if SKY_STUDIO_FIELD\r
  if(uCharacterFlags[i].x>0.5)return studioRecipeDensity(q,i);\r
  #endif\r
  int stage=uSolo==i?uInspect:4;\r
  int count=int(stage==0?uRecipeInfo[i].y:uRecipeInfo[i].x);\r
  bool ordered=uProfile[i].z>0.5;\r
  if(count==0&&(!ordered||uCutCount[i]==0))return 0.0;\r
  vec4 masks=modifierWeights(q,i);\r
  vec4 amounts=effectAmounts(q,i,vec4(uRecipeInfo[i].z,uWarp[i].x,0,0));\r
  #if SKY_SOFTNESS_PAINT\r
  float feather=softnessAmount(q,i,uRecipeInfo[i].w);\r
  #endif\r
  if(stage>=2) {q+=(n.zwx-0.5)*amounts.y*masks.x;q.x-=uWarp[i].y*q.y*q.y;}\r
  float d=styledDistance(curveField(q,i,count),coord,i,stage,masks,amounts.x);\r
  d=ordered?orderedMasses(d,q,coord,i,stage,masks,amounts.x):cutMasses(d,q,i);\r
  #if SKY_SOURCE_FIELD\r
  if(i==uSourceFieldIndex&&d>=0.0)return 0.0;\r
  #endif\r
  #if SKY_SOFTNESS_PAINT\r
  float rho=clamp(-d/feather,0.0,1.0)*(0.65+n.r*0.7);\r
  if(uProfile[i].x!=1.0||uProfile[i].y!=1.0)rho=pow(clamp(-d/feather,0.0,1.0),uProfile[i].x)*mix(1.0,0.65+n.r*0.7,uProfile[i].y);\r
  #else\r
  float rho=clamp(-d/uRecipeInfo[i].w,0.0,1.0)*(0.65+n.r*0.7);\r
  if(uProfile[i].x!=1.0||uProfile[i].y!=1.0)rho=pow(clamp(-d/uRecipeInfo[i].w,0.0,1.0),uProfile[i].x)*mix(1.0,0.65+n.r*0.7,uProfile[i].y);\r
  #endif\r
  if(stage>=4 && uRecipeFlags[i].w>0.5)rho*=smoothstep(uRecipeFlags[i].z,uRecipeFlags[i].z+0.15,q.y);\r
  return rho*uForm[i].z*masks.w;\r
}\r
`;var Up=`// Studio field stages adapted from supplied Cloud Nodes Studio (MIT; see packaged notice).\r
vec4 studioSample(vec3 p,int i){return texture(uStudioNoise,p+uCharacterFlags[i].yzw);}\r
float studioStyle(float d,vec3 p,int i,int stage,vec4 masks,float amount){\r
  float scale=uForm[i].x/.22;vec4 shape=uCharacterShape[i];\r
  if(stage>=2){\r
    vec3 nc=p*.135*shape.y*scale;\r
    float billow=studioSample(nc,i).g+shape.z*studioSample(nc*2.031+vec3(4.1),i).g;\r
    d-=amount*(billow-(.40+shape.z*.43))*1.7*masks.y;\r
  }\r
  if(stage>=3&&uRecipeFlags[i].y>.5){float edge=smoothstep(-.40,.05,d);d+=uForm[i].y*studioSample(p*.12*shape.w*scale+vec3(6.7,3.1,8.2),i).g*edge*masks.z;}\r
  return d;\r
}\r
float studioMasses(float d,vec3 p,int i,int stage,vec4 masks,float amount){\r
  for(int j=0;j<16;j++){\r
    if(j>=uCutCount[i])break;vec4 a=texelFetch(uCuts,ivec2(j*2,i),0),b=texelFetch(uCuts,ivec2(j*2+1,i),0);\r
    vec3 delta=b.xyz-a.xyz,offset=p-a.xyz;float t=clamp(dot(offset,delta)/max(dot(delta,delta),1e-8),0.0,1.0);\r
    float next=length(offset-delta*t)-a.w;\r
    if(b.w<0.0)d=max(d,-next);else{next=studioStyle(next,p,i,stage,masks,amount);float h=max(.08-abs(d-next),0.0)/.08;d=min(d,next)-h*h*.02;}\r
  }\r
  return d;\r
}\r
float studioRecipeDensity(vec3 rest,int i){\r
  int stage=uSolo==i?uInspect:4,count=int(stage==0?uRecipeInfo[i].y:uRecipeInfo[i].x);bool ordered=uProfile[i].z>.5;\r
  if(count==0&&(!ordered||uCutCount[i]==0))return 0.0;\r
  vec4 masks=modifierWeights(rest,i),detail=uCharacterDetail[i],shape=uCharacterShape[i];float scale=uForm[i].x/.22;\r
  vec4 amounts=effectAmounts(rest,i,vec4(uRecipeInfo[i].z,uWarp[i].x,detail.x,detail.y));\r
  vec3 p=rest;\r
  if(stage>=2){\r
    float raw=curveField(rest,i,count);if(ordered)raw=studioMasses(raw,rest,i,0,masks,amounts.x);else raw=cutMasses(raw,rest,i);\r
    float edge=1.0-smoothstep(.08,.48,abs(raw));vec4 wn=studioSample(rest*vec3(.085,.34,.22)*scale+vec3(2.1,7.2,4.0),i);\r
    vec3 wisp=vec3((wn.r-.5)*2.8,(wn.b-.5)*.28,(wn.a-.5)*.22)*amounts.z*edge;\r
    p+=(studioSample(rest*.12*shape.x*scale,i).rba*2.0-1.0)*amounts.y*masks.x+wisp;\r
    p.x-=uWarp[i].y*p.y*p.y;\r
  }\r
  float d=studioStyle(curveField(p,i,count),p,i,stage,masks,amounts.x);\r
  d=ordered?studioMasses(d,p,i,stage,masks,amounts.x):cutMasses(d,p,i);\r
  float pocket=smoothstep(.46,.73,studioSample(p*.21*scale+vec3(4.2),i).r)*amounts.w;\r
  float variation=clamp(.82+.30*studioSample(p*.19*scale,i).r-pocket,0.0,1.0);\r
  // Keep empty support exactly zero even on drivers that approximate pow(0,gamma).\r
  #if SKY_SOFTNESS_PAINT\r
  float profile=clamp(-d/softnessAmount(rest,i,uRecipeInfo[i].w),0.0,1.0);\r
  #else\r
  float profile=clamp(-d/uRecipeInfo[i].w,0.0,1.0);\r
  #endif\r
  float rho=(profile>0.0?pow(profile,uProfile[i].x):0.0)*mix(1.0,variation,uProfile[i].y);\r
  if(stage>=4&&uRecipeFlags[i].w>.5){float h=rest.y-uRecipeFlags[i].z+(studioSample(rest*.22*scale,i).r-.5)*2.0*detail.w;rho*=smoothstep(0.0,detail.z,h);}\r
  return rho*uForm[i].z*masks.w;\r
}\r
`;var Fp=`uniform sampler3D uSourceField;\r
uniform int uSourceFieldIndex;\r
uniform vec3 uSourceFieldLo,uSourceFieldHi;\r
float sourceFieldDistance(vec3 p){\r
  int last=textureSize(uSourceField,0).x-1;\r
  vec3 uv=clamp((p-uSourceFieldLo)/(uSourceFieldHi-uSourceFieldLo)*float(last),vec3(0),vec3(last));\r
  ivec3 a=min(ivec3(floor(uv)),ivec3(last-1));vec3 t=uv-vec3(a);float value=0.0;\r
  for(int z=0;z<2;z++)for(int y=0;y<2;y++)for(int x=0;x<2;x++){\r
    vec3 w=mix(vec3(1)-t,t,vec3(x,y,z));\r
    value+=texelFetch(uSourceField,a+ivec3(x,y,z),0).r*w.x*w.y*w.z;\r
  }\r
  float outside=length(max(max(uSourceFieldLo-p,p-uSourceFieldHi),vec3(0)));\r
  return outside>0.0?max(value,outside):value;\r
}\r
`;var ec=Np.replace("/* SOURCE_FIELD */",`#if SKY_SOURCE_FIELD
${Fp}
#endif`).replace("/* STUDIO_FIELD */",`#if SKY_STUDIO_FIELD
${Up}
#endif`);var Op=`// Conservative support intervals, sorted and merged: overlapping clouds are integrated once.\r
vec2 supportHit(vec3 ro,vec3 rd,int i) {\r
  vec3 offset=ro-uPosition[i].xyz;\r
  if(uRecipeFlags[i].x<0.5) {\r
    float b=dot(offset,rd),discriminant=b*b-dot(offset,offset)+uWarp[i].w*uWarp[i].w;\r
    if(discriminant<0.0)return vec2(1,-1);\r
    float root=sqrt(discriminant);return vec2(-b-root,-b+root);\r
  }\r
  float c=cos(uSize[i].w),s=sin(uSize[i].w);\r
  vec3 p=vec3(c*offset.x-s*offset.z,offset.y,s*offset.x+c*offset.z)/uSize[i].xyz;\r
  vec3 d=vec3(c*rd.x-s*rd.z,rd.y,s*rd.x+c*rd.z)/uSize[i].xyz;\r
  #if SKY_FULL_ROTATION\r
  if(uTilted[i]==1){p=(uInverseRotation[i]*offset)/uSize[i].xyz;d=(uInverseRotation[i]*rd)/uSize[i].xyz;}\r
  #endif\r
  float near=-1e20,far=1e20;\r
  for(int axis=0;axis<3;axis++) {\r
    if(abs(d[axis])<1e-8) {\r
      if(p[axis]<uSupportLo[i][axis]||p[axis]>uSupportHi[i][axis])return vec2(1,-1);\r
    } else {\r
      float a=(uSupportLo[i][axis]-p[axis])/d[axis],b=(uSupportHi[i][axis]-p[axis])/d[axis];\r
      near=max(near,min(a,b));far=min(far,max(a,b));\r
    }\r
  }\r
  return vec2(near,far);\r
}\r
int occupiedSegments(vec3 ro,vec3 rd,float limit,out vec2 spans[8]) {\r
  int count=0;\r
  for(int i=0;i<8;i++) {\r
    if(i>=uCount)break;\r
    if(uPosition[i].w<0.0||(uSolo>=0&&uSolo!=i))continue;\r
    if(uRecipeFlags[i].x>0.5&&uRecipeInfo[i].x<0.5&&!(uProfile[i].z>0.5&&uCutCount[i]>0))continue;\r
    vec2 hit=supportHit(ro,rd,i);hit=vec2(max(0.0,hit.x),min(limit,hit.y));\r
    if(hit.y<=hit.x)continue;\r
    int insertion=count;\r
    for(int j=7;j>=0;j--) {\r
      if(j>=count)continue;\r
      if(spans[j].x>hit.x){spans[j+1]=spans[j];insertion=j;}\r
    }\r
    spans[insertion]=hit;count++;\r
  }\r
  int merged=0;\r
  for(int j=0;j<8;j++) {\r
    if(j>=count)break;\r
    vec2 hit=spans[j];\r
    if(merged>0&&hit.x<=spans[merged-1].y)spans[merged-1].y=max(spans[merged-1].y,hit.y);\r
    else {spans[merged]=hit;merged++;}\r
  }\r
  return merged;\r
}\r
float occupiedLength(vec2 spans[8],int count) {\r
  float total=0.0;for(int i=0;i<8;i++){if(i>=count)break;total+=spans[i].y-spans[i].x;}return total;\r
}\r
float occupiedDistance(vec2 spans[8],int count,float distance) {\r
  for(int i=0;i<8;i++) {\r
    if(i>=count)break;\r
    float len=spans[i].y-spans[i].x;\r
    if(distance<len)return spans[i].x+distance;\r
    distance-=len;\r
  }\r
  return count>0?spans[count-1].y:0.0;\r
}\r
`;var hr=`vec3 sculptPoint(vec3 p,int i) {
  if(uSculptCount[i]==0)return p;
  for(int j=15;j>=0;j--) {
    if(j>=uSculptCount[i])continue;
    vec4 center=texelFetch(uSculpt,ivec2(j*2,i),0),delta=texelFetch(uSculpt,ivec2(j*2+1,i),0);
    if(delta.w<=0.0)continue;
    vec3 offset=(p-center.xyz)/center.w;float r2=dot(offset,offset);
    if(r2<1.0)p-=delta.xyz*delta.w*(1.0-r2)*(1.0-r2);
  }
  return p;
}
`;var ur=`\r
#ifndef SKY_PAINT_STRIDE\r
#define SKY_PAINT_STRIDE 4\r
#endif\r
#ifndef SKY_PAINT_STAMP_LIMIT\r
#define SKY_PAINT_STAMP_LIMIT 32\r
#endif\r
// Source-mesh and standalone consumers omit the optional density feature.\r
#ifndef SKY_SOFTNESS_PAINT\r
#define SKY_SOFTNESS_PAINT 0\r
#endif\r
#ifndef SKY_PAINT_HARDNESS\r
#define SKY_PAINT_HARDNESS 0\r
#endif\r
uniform sampler2D uMasks,uCuts;\r
uniform int uMaskCount[8],uCutCount[8];\r
uniform int uLayerCount[8];\r
uniform vec4 uLayerInfo[8*SKY_PAINT_STRIDE];\r
float paintCoverage(vec3 p,int i,int layer) {\r
  int offset=uMaskCount[i];\r
  for(int l=0;l<SKY_PAINT_STRIDE;l++){if(l>=layer)break;offset+=int(uLayerInfo[i*SKY_PAINT_STRIDE+l].w);}\r
  int count=int(uLayerInfo[i*SKY_PAINT_STRIDE+layer].w);float coverage=0.0;\r
  for(int j=0;j<SKY_PAINT_STAMP_LIMIT;j++){\r
    if(j>=count)break;\r
    vec4 center=texelFetch(uMasks,ivec2((offset+j)*2,i),0),parameters=texelFetch(uMasks,ivec2((offset+j)*2+1,i),0);\r
    if(parameters.z<0.5)continue;\r
    vec3 delta=(p-center.xyz)/center.w;float r2=dot(delta,delta);if(r2>=1.0)continue;\r
    #if SKY_PAINT_HARDNESS\r
    if(parameters.y>0.0){\r
      float h2=parameters.y*parameters.y,t=clamp((r2-h2)/max(1.0-h2,1e-8),0.0,1.0);\r
      coverage=clamp(coverage+parameters.x*(1.0-t)*(1.0-t),0.0,1.0);continue;\r
    }\r
    #endif\r
    coverage=clamp(coverage+parameters.x*(1.0-r2)*(1.0-r2),0.0,1.0);\r
  }\r
  return coverage;\r
}\r
vec4 modifierWeights(vec3 p,int i) {\r
  vec4 weights=vec4(1);\r
  for(int j=0;j<16;j++) {\r
    if(j>=uMaskCount[i])break;\r
    vec4 center=texelFetch(uMasks,ivec2(j*2,i),0),parameters=texelFetch(uMasks,ivec2(j*2+1,i),0);\r
    if(parameters.z<0.5)continue;\r
    vec3 offset=(p-center.xyz)/center.w;float r2=dot(offset,offset);if(r2>=1.0)continue;\r
    int channel=int(parameters.y);weights[channel]=clamp(weights[channel]+parameters.x*(1.0-r2)*(1.0-r2),0.0,1.0);\r
  }\r
  for(int layer=0;layer<SKY_PAINT_STRIDE;layer++) {\r
    if(layer>=uLayerCount[i])break;\r
    vec4 info=uLayerInfo[i*SKY_PAINT_STRIDE+layer];if(info.z>=4.0)continue;float coverage=info.y>0.0?paintCoverage(p,i,layer):0.0;\r
    int channel=int(info.z);weights[channel]*=mix(1.0,info.x,coverage*info.y);\r
  }\r
  return weights;\r
}\r
// Absolute local billow/warp/wisp/cavity targets in saved layer order.\r
vec4 effectAmounts(vec3 rest,int i,vec4 base){\r
  for(int layer=0;layer<SKY_PAINT_STRIDE;layer++){\r
    if(layer>=uLayerCount[i])break;vec4 info=uLayerInfo[i*SKY_PAINT_STRIDE+layer];\r
    #if SKY_SOFTNESS_PAINT\r
    if(info.z>=8.0)continue;\r
    #endif\r
    if(info.z<4.0||info.y<=0.0)continue;int channel=int(info.z)-4;\r
    base[channel]=mix(base[channel],info.x,paintCoverage(rest,i,layer)*info.y);\r
  }\r
  return base;\r
}\r
#if SKY_SOFTNESS_PAINT\r
float softnessAmount(vec3 rest,int i,float width){\r
  for(int layer=0;layer<SKY_PAINT_STRIDE;layer++){\r
    if(layer>=uLayerCount[i])break;vec4 info=uLayerInfo[i*SKY_PAINT_STRIDE+layer];\r
    if(info.z!=8.0||info.y<=0.0)continue;\r
    width=mix(width,info.x,paintCoverage(rest,i,layer)*info.y);\r
  }\r
  return max(.08,width);\r
}\r
#endif\r
float cutMasses(float d,vec3 p,int i) {\r
  if(uCutCount[i]==0)return d;\r
  for(int j=0;j<16;j++) {\r
    if(j>=uCutCount[i])break;\r
    vec4 a=texelFetch(uCuts,ivec2(j*2,i),0),b=texelFetch(uCuts,ivec2(j*2+1,i),0);\r
    vec3 delta=b.xyz-a.xyz,offset=p-a.xyz;float t=clamp(dot(offset,delta)/max(dot(delta,delta),1e-8),0.0,1.0);\r
    float cutter=length(offset-delta*t)-a.w;d=max(d,-cutter);\r
  }\r
  return d;\r
}\r
`;function Bp(i,e=8){if(!Array.isArray(i)||i.length>16)throw Error("Cloud supports at most sixteen Grab strokes");let t=new Set;for(let n of i){let s=["id","enabled","center","radius","delta","gain"];if(!n||typeof n!="object"||Array.isArray(n)||Object.keys(n).length!==s.length||s.some(r=>!Object.hasOwn(n,r)))throw Error("Malformed Grab stroke fields");if(!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Grab IDs must be unique");if(t.add(n.id),typeof n.enabled!="boolean")throw Error("Grab enabled flag must be boolean");for(let r of["center","delta"])if(!Array.isArray(n[r])||n[r].length!==3||n[r].some(a=>typeof a!="number"||!Number.isFinite(a)||Math.abs(a)>(r==="center"?e:8)))throw Error("Grab requires bounded three-number coordinates");if(typeof n.radius!="number"||!Number.isFinite(n.radius)||n.radius<.08||n.radius>1.5)throw Error("Grab radius must be between 0.08 and 1.5");if(typeof n.gain!="number"||!Number.isFinite(n.gain)||n.gain<0||n.gain>1)throw Error("Grab gain must be between 0 and 1");if(Math.hypot(...n.delta)>n.radius*.25+1e-9)throw Error("Grab displacement exceeds one quarter of its radius")}return structuredClone(i)}function kp(i=[]){return i.filter(e=>e.enabled).reduce((e,t)=>e+Math.hypot(...t.delta)*t.gain,0)}var Su=16,bu=["warp","billow","erosion"];function zp(i,e=8){if(!Array.isArray(i)||i.length>Su)throw Error("Cloud supports at most sixteen modifier masks");let t=new Set;for(let n of i){let s=["id","enabled","center","radius","value","channel"];if(!n||typeof n!="object"||Array.isArray(n)||Object.keys(n).length!==s.length||s.some(r=>!Object.hasOwn(n,r)))throw Error("Malformed modifier mask");if(!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Mask IDs must be unique");if(t.add(n.id),typeof n.enabled!="boolean"||!bu.includes(n.channel))throw Error("Invalid mask channel or visibility");if(!Array.isArray(n.center)||n.center.length!==3||n.center.some(r=>typeof r!="number"||!Number.isFinite(r)||Math.abs(r)>e))throw Error("Invalid mask center");if(typeof n.radius!="number"||!Number.isFinite(n.radius)||n.radius<.08||n.radius>1.5)throw Error("Mask radius must be between 0.08 and 1.5");if(typeof n.value!="number"||!Number.isFinite(n.value)||n.value<-1||n.value>1)throw Error("Mask value must be between -1 and 1")}return structuredClone(i)}var dr={density:{id:3,label:"Density",name:"Density thinning",max:3,initial:0,step:.1},erosion:{id:2,label:"Erosion",name:"Erosion breakup",max:3,initial:2,step:.1},billow:{id:4,label:"Billows",name:"Local billows",max:.3,initial:.2,step:.01},warp:{id:5,label:"Warp",name:"Local warp",max:.75,initial:.25,step:.01},wisps:{id:6,label:"Wisps",name:"Local wisps",max:1,initial:.5,step:.05,studio:!0},cavities:{id:7,label:"Cavities",name:"Interior cavities",max:1,initial:.6,step:.05,studio:!0},softness:{id:8,label:"Softness",name:"Cloud-edge softness",min:.08,max:.6,initial:.4,step:.01,version:13}};function Mu(i=9){return i>=10?Object.keys(dr).filter(e=>i>=(dr[e].version??10)):["density","erosion"]}function Hp(i){return dr[i]?.min??0}function Vp(i,e=9){return i==="density"&&e<10?1:dr[i]?.max}var Zb=4,Kb=32,tc=8,wu=96,Gp=i=>i>=25?{layers:tc,stamps:wu}:{layers:Zb,stamps:Kb},ms=i=>({SKY_PAINT_STRIDE:i>=25?8:4,SKY_PAINT_STAMP_LIMIT:i>=25?96:32}),eC=Mu(10);function Wp(i,e){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(t=>!Object.hasOwn(i,t)))throw Error("Malformed paint layer fields")}function Xp(i,e){if(typeof i!="number"||!Number.isFinite(i)||i<0||i>1)throw Error(`${e} must be between 0 and 1`)}function Yp(i,e){if(!Number.isSafeInteger(i)||i<1||i>1e6||e.has(i))throw Error("Paint IDs must be unique within their list");e.add(i)}function qp(i,e=8,t=9){if(!Array.isArray(i)||i.length>Gp(t).layers)throw Error(t>=25?"Cloud supports at most eight paint layers":"Cloud supports at most four paint layers");let n=new Set;for(let s of i){if(Wp(s,["id","name","enabled","channel","target","opacity","stamps",...t>=14&&s&&Object.hasOwn(s,"hardness")?["hardness"]:[]]),Yp(s.id,n),Object.hasOwn(s,"hardness")&&Xp(s.hardness,"Mask hardness"),typeof s.name!="string"||!s.name.trim()||s.name.length>80)throw Error("Paint layer name requires 1\u201380 characters");if(typeof s.enabled!="boolean"||!Mu(t).includes(s.channel))throw Error("Invalid paint layer channel or visibility");let r=Hp(s.channel),a=Vp(s.channel,t);if(typeof s.target!="number"||!Number.isFinite(s.target)||s.target<r||s.target>a)throw Error(`Layer amount must be between ${r} and ${a}`);if(Xp(s.opacity,"Layer opacity"),!Array.isArray(s.stamps)||s.stamps.length>Gp(t).stamps)throw Error(t>=25?"Paint layer supports at most ninety-six stamps":"Paint layer supports at most thirty-two stamps");let o=new Set;for(let c of s.stamps){if(Wp(c,["id","enabled","center","radius","value"]),Yp(c.id,o),typeof c.enabled!="boolean")throw Error("Invalid paint stamp visibility");if(!Array.isArray(c.center)||c.center.length!==3||c.center.some(l=>typeof l!="number"||!Number.isFinite(l)||Math.abs(l)>e))throw Error("Invalid paint stamp center");if(typeof c.radius!="number"||!Number.isFinite(c.radius)||c.radius<.08||c.radius>1.5)throw Error("Paint radius must be between 0.08 and 1.5");if(typeof c.value!="number"||!Number.isFinite(c.value)||c.value<-1||c.value>1)throw Error("Paint value must be between -1 and 1")}}return structuredClone(i)}function jb(i){let e=new Map;for(let t of i.stamps)if(t.enabled){let n=JSON.stringify([t.center,t.radius]);e.set(n,Math.max(0,(e.get(n)??0)+t.value))}return Math.min(1,Array.from(e.values()).reduce((t,n)=>t+n,0))}var ua=i=>i.enabled&&i.opacity>0&&jb(i)>0;function Zp(i){let e=i?.recipe;if(!e)return!1;let t=e.character,n={billow:e.billow.enabled?e.billow.strength:0,warp:i.displacement,wisps:t?.wisps??0,cavities:t?.cavities??0,softness:e.profile.feather};return(e.layers??[]).some(s=>ua(s)&&(s.channel==="density"?s.target>1:Object.hasOwn(n,s.channel)&&(!["wisps","cavities"].includes(s.channel)||t?.enabled)&&s.target!==n[s.channel]))}var da=i=>(i.recipe?.layers??[]).some(e=>(e.hardness??0)>0&&ua(e)),Kp=i=>(i?.recipe?.layers??[]).some(e=>(e.hardness??0)>0&&e.stamps.some(t=>t.enabled&&t.value!==0)),gs=i=>(i.recipe?.layers??[]).some(e=>ua(e)&&e.channel==="softness"&&e.target!==i.recipe.profile.feather);function ic(i,e,t){let n=t;for(let s of i??[])ua(s)&&s.channel===e&&(n=Math.max(n,s.target));return n}function Eu(i){let e=1;for(let t of i??[])ua(t)&&t.channel==="density"&&(e*=Math.max(1,1+(t.target-1)*t.opacity));return 1.35*e}var fa=(i,e)=>i.reduce((t,n,s)=>t+n*e[s],0),pa=i=>Math.max(0,Math.min(1,i)),ma=(i,e)=>i.map((t,n)=>t-e[n]);function $b(i,e){let t=ma(i.b.position,i.a.position),n=ma(e.b.position,e.a.position),s=ma(i.a.position,e.a.position),r=fa(t,t),a=fa(t,n),o=fa(n,n),c=fa(t,s),l=fa(n,s),h=r*o-a*a,d=0,u=0;r<1e-8&&o<1e-8||(r<1e-8?u=pa(l/o):o<1e-8?d=pa(-c/r):(d=h>1e-8?pa((a*l-o*c)/h):0,u=(a*d+l)/o,u<0?(u=0,d=pa(-c/r)):u>1&&(u=1,d=pa((a-c)/r))));let f=(m,p)=>({position:m.a.position.map((S,T)=>S+(m.b.position[T]-S)*p),radius:m.a.radius+(m.b.radius-m.a.radius)*p}),g=f(i,d),v=f(e,u);return{a:g,b:v,distance:Math.hypot(...ma(g.position,v.position))}}function Jb(i){let e=i>>>0;return()=>(e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e^=e>>>16,(e>>>0)/4294967296)}function jp(i,e){let t=i.structure;if(!t?.enabled||t.intersections===0||!i.detail.enabled)return[];let n=i.strokes.filter(r=>r.enabled).map(r=>r.id).sort((r,a)=>r-a),s=[];for(let r=0;r<n.length;r++)for(let a=r+1;a<n.length;a++){let o=null,c=1/0;for(let y of e.filter(w=>w.strokeId===n[r]))for(let w of e.filter(R=>R.strokeId===n[a])){let R=$b(y,w),C=R.distance-R.a.radius-R.b.radius;C<c&&(o=R,c=C)}if(!o||c>=0)continue;let{a:l,b:h}=o,d=Math.min(l.radius,h.radius),u=d*.5*t.intersections,f=ma(h.position,l.position),g=Math.hypot(...f),v=g>1e-6?f.map(y=>y/g):[0,1,0],m,p;if(g>Math.abs(l.radius-h.radius)+1e-6){let y=(g*g+l.radius*l.radius-h.radius*h.radius)/(2*g);m=l.position.map((w,R)=>w+v[R]*y),p=Math.sqrt(Math.max(0,l.radius*l.radius-y*y))}else m=[...l.radius>=h.radius?l.position:h.position],p=Math.max(l.radius,h.radius);let S=Math.abs(v[1])<.9?[0,1,0]:[1,0,0],T=(y,w)=>[y[1]*w[2]-y[2]*w[1],y[2]*w[0]-y[0]*w[2],y[0]*w[1]-y[1]*w[0]],_=T(v,S),b=Math.hypot(..._);_=_.map(y=>y/b);let E=T(v,_),A=Jb(i.detail.seed^Math.imul(n[r],104729)^Math.imul(n[a],19349663));for(let y=0;y<2;y++){let w=A()*Math.PI*2,R=p+u*.15,C={position:m.map((P,N)=>P+(_[N]*Math.cos(w)+E[N]*Math.sin(w))*R),radius:u};s.push({a:C,b:C,stage:1,intersection:[n[r],n[a]]})}}return s}function $p(i,e=5){if(!Array.isArray(i)||i.length>16)throw Error("Cloud supports at most sixteen mass strokes");let t=new Set;for(let n of i){let s=["id","enabled","role","a","b","radius",...e>=7?["layerId"]:[]];if(!n||typeof n!="object"||Array.isArray(n)||Object.keys(n).length!==s.length||s.some(r=>!Object.hasOwn(n,r)))throw Error("Malformed mass stroke");if(!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Mass IDs must be unique");if(t.add(n.id),typeof n.enabled!="boolean"||!["add","cut"].includes(n.role))throw Error("Invalid mass role or visibility");if(e>=7&&(!Number.isSafeInteger(n.layerId)||n.layerId<1||n.layerId>1e6))throw Error("Invalid geometry layer reference");for(let r of["a","b"])if(!Array.isArray(n[r])||n[r].length!==3||n[r].some(a=>typeof a!="number"||!Number.isFinite(a)||Math.abs(a)>8))throw Error("Invalid mass endpoint");if(typeof n.radius!="number"||!Number.isFinite(n.radius)||n.radius<.08||n.radius>1.5)throw Error("Mass radius must be between 0.08 and 1.5")}return structuredClone(i)}function Jp(i=[]){return i.filter(e=>e.enabled&&e.role==="add").map(e=>({a:{position:e.a,radius:e.radius},b:{position:e.b,radius:e.radius},stage:0,massId:e.id}))}function Qp(i,e){if(!Array.isArray(i)||i.length>4)throw Error("Shape supports at most four geometry layers");let t=new Set;for(let n of i){if(!n||typeof n!="object"||Array.isArray(n)||Object.keys(n).length!==3||!["id","name","enabled"].every(s=>Object.hasOwn(n,s)))throw Error("Malformed geometry layer");if(!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Geometry layer IDs must be unique");if(t.add(n.id),typeof n.name!="string"||!n.name.trim()||n.name.length>80||typeof n.enabled!="boolean")throw Error("Invalid geometry layer name or bypass")}for(let n of e)if(!t.has(n.layerId))throw Error("Mass references an unknown geometry layer");return structuredClone(i)}function fr(i){let e=i.masses??[];if(!i.geometryLayers)return e.filter(n=>n.enabled);let t=new Set(i.geometryLayers.filter(n=>n.enabled).map(n=>n.id));return i.massMode!=="ordered"?e.filter(n=>n.enabled&&t.has(n.layerId)):i.geometryLayers.filter(n=>n.enabled).flatMap(n=>e.filter(s=>s.enabled&&s.layerId===n.id))}function ga(){return{enabled:!1,warpScale:1.05,billowScale:1.6,octave:.42,erosionScale:5.8,wisps:.1,cavities:0,clipSoft:.07,clipNoise:.045}}function _a(i=8){return{...i>=22?{visibility:"direct-v1"}:{},enabled:!1,anisotropy:.32,fill:.2,sunColor:"#fff1db",skyColor:"#a6c7f3"}}function em(i,e){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(t=>!Object.hasOwn(i,t)))throw Error("Malformed studio settings")}function Tu(i,e,t){if(typeof i!="number"||!Number.isFinite(i)||i<e||i>t)throw Error(`Studio setting must be between ${e} and ${t}`)}function tm(i){if(em(i,Object.keys(ga())),typeof i.enabled!="boolean")throw Error("Studio character enabled must be boolean");for(let[e,t,n]of[["warpScale",.25,3],["billowScale",.3,4],["octave",0,1],["erosionScale",.5,10],["wisps",0,1],["cavities",0,1],["clipSoft",.01,.3],["clipNoise",0,.2]])Tu(i[e],t,n);return structuredClone(i)}function im(i,e=8){if(em(i,Object.keys(_a(e))),typeof i.enabled!="boolean")throw Error("Studio lighting enabled must be boolean");if(Tu(i.anisotropy,0,.75),Tu(i.fill,0,1),e>=22&&!["direct-v1","scene-cache-v1"].includes(i.visibility))throw Error("Invalid scene visibility model");for(let t of["sunColor","skyColor"])if(typeof i[t]!="string"||!/^#[\da-f]{6}$/i.test(i[t]))throw Error("Invalid studio light color");return structuredClone(i)}function Au(i){let e=i.character;return ic(i.layers,"billow",i.billow.enabled?i.billow.strength:0)*(e?.enabled?(.6+.57*e.octave)*1.7:1)}function nm(i){let e=i.recipe?.character,t=ic(i.recipe?.layers,"warp",i.displacement),n=ic(i.recipe?.layers,"wisps",e?.wisps??0);return e?.enabled?[t+1.4*n,t+.14*n,t+.11*n]:[t/2,t/2,t/2]}function sm(i){let e=i>>>0;return Array.from({length:3},()=>{e=e+2654435769>>>0;let t=e;return t=(t^t>>>16)>>>0,t=Math.imul(t,2146121005),t=(t^t>>>15)>>>0,t=Math.imul(t,2221713035),((t^t>>>16)>>>0)/4294967296*11})}var _s=Object.freeze(["clay","scrape","planar"]);function nc(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==2||!Object.hasOwn(i,"normal")||!Object.hasOwn(i,"offset")||!Array.isArray(i.normal)||i.normal.length!==3||i.normal.some(e=>typeof e!="number"||!Number.isFinite(e)||Math.abs(e)>1)||Math.abs(Math.hypot(...i.normal)-1)>1e-6||typeof i.offset!="number"||!Number.isFinite(i.offset)||Math.abs(i.offset)>48)throw Error("Sculpt plane requires a unit normal and finite offset within \xB148");return structuredClone(i)}function rm(i,e,t,n,s,r,{scale:a,step:o,quantize:c}){let{n:l,bounds:h,values:d}=i,u=d.slice(),f=l*l,g=t*n*.15,v=e.some((T,_)=>T-t<h.lo[_]+o[_]||T+t>h.hi[_]-o[_]);if(n===0)return{...i,values:u,changed:0,clipped:v};let m=e.map((T,_)=>Math.max(1,Math.ceil((T-t-h.lo[_])/o[_]))),p=e.map((T,_)=>Math.min(l-2,Math.floor((T+t-h.lo[_])/o[_]))),S=0;for(let T=m[2];T<=p[2];T++){let _=h.lo[2]+T*o[2],b=(_-e[2])/t;for(let E=m[1];E<=p[1];E++){let A=h.lo[1]+E*o[1],y=(A-e[1])/t;for(let w=m[0];w<=p[0];w++){let R=h.lo[0]+w*o[0],C=(R-e[0])/t,P=C*C+y*y+b*b;if(P>=1)continue;let N=w+E*l+T*f,D=d[N]/a,U=(d[N+1]-d[N-1])/(2*o[0]*a),z=(d[N+l]-d[N-l])/(2*o[1]*a),H=(d[N+f]-d[N-f])/(2*o[2]*a),$=Math.min(2,Math.hypot(U,z,H)),W=R*r.normal[0]+A*r.normal[1]+_*r.normal[2]-r.offset,K=Math.max(-g*$,Math.min(g*$,W-D));s==="clay"&&(K=Math.min(0,K)),s==="scrape"&&(K=Math.max(0,K));let Q=c(D+K*(1-P)**2);Q!==d[N]&&(u[N]=Q,S++)}}}return{...i,values:u,changed:S,clipped:v}}var Ru=Object.freeze(["inflate","deflate","flatten"]),Cu=Object.freeze([...Ru,..._s]);function am(i,e,t,n,s,{scale:r,step:a,quantize:o}){let{n:c,bounds:l,values:h}=i,d=h.slice(),u=c*c,f=e.some((A,y)=>A-t<l.lo[y]+a[y]||A+t>l.hi[y]-a[y]);if(n===0)return{...i,values:d,changed:0,clipped:f};let g=e.map((A,y)=>Math.max(1,Math.ceil((A-t-l.lo[y])/a[y]))),v=e.map((A,y)=>Math.min(c-2,Math.floor((A+t-l.lo[y])/a[y]))),m=A=>[(h[A+1]-h[A-1])/(2*a[0]*r),(h[A+c]-h[A-c])/(2*a[1]*r),(h[A+u]-h[A-u])/(2*a[2]*r)],p=e.map((A,y)=>Math.max(1,Math.min(c-2,Math.round((A-l.lo[y])/a[y])))),S=m(p[0]+p[1]*c+p[2]*u),T=Math.hypot(...S);if(s==="flatten"&&T<1e-6)return{...i,values:d,changed:0,clipped:f};let _=S.map(A=>A/T),b=t*n*.15,E=0;for(let A=g[2];A<=v[2];A++)for(let y=g[1];y<=v[1];y++)for(let w=g[0];w<=v[0];w++){let R=l.lo[0]+w*a[0]-e[0],C=l.lo[1]+y*a[1]-e[1],P=l.lo[2]+A*a[2]-e[2],N=(R*R+C*C+P*P)/(t*t);if(N>=1)continue;let D=w+y*c+A*u,U=h[D]/r,z=(1-N)**2,H=Math.min(2,Math.hypot(...m(D))),$=s==="inflate"?-b*H:b*H;if(s==="flatten"){let K=R*_[0]+C*_[1]+P*_[2];$=Math.max(-b*H,Math.min(b*H,K*H-U))}let W=o(U+$*z);W!==h[D]&&(d[D]=W,E++)}return{...i,values:d,changed:E,clipped:f}}var Qb=49,Zn=Object.freeze([49,65]),vn=8191,mC=Qb**3,eM=1,Pu=16,om=24;function ys(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==2||["lo","hi"].some(e=>!Array.isArray(i[e])||i[e].length!==3||i[e].some(t=>typeof t!="number"||!Number.isFinite(t)||Math.abs(t)>12))||i.hi.some((e,t)=>e-i.lo[t]<.25))throw Error("Field bounds require three finite axes within \xB112, with extent at least0.25")}function ya(i){return i.bounds.hi.map((e,t)=>(e-i.bounds.lo[t])/(i.n-1))}var Iu=i=>Math.max(-32767,Math.min(32767,Math.round(i*vn)));function sc(i,e,t,n,s,r){if(!["add","carve","smooth",...Cu].includes(s)||!Array.isArray(e)||e.length!==3||e.some(T=>typeof T!="number"||!Number.isFinite(T))||typeof t!="number"||!Number.isFinite(t)||t<.08||t>1.5||typeof n!="number"||!Number.isFinite(n)||n<0||n>1)throw Error("Invalid field brush");if(_s.includes(s))return rm(i,e,t,n,s,nc(r),{scale:vn,step:ya(i),quantize:Iu});if(r!==void 0)throw Error("Only planar sculpt brushes accept a saved plane");if(Cu.includes(s))return am(i,e,t,n,s,{scale:vn,step:ya(i),quantize:Iu});let{n:a,bounds:o,values:c}=i,l=c.slice(),h=ya(i),d=Math.max(eM,Math.max(...h)*2+.08),u=s==="smooth"?t:t*n,f=e.some((T,_)=>T-u<o.lo[_]+h[_]||T+u>o.hi[_]-h[_]);if(n===0)return{...i,values:l,changed:0,clipped:f};let g=s==="smooth"?u:u+d,v=e.map((T,_)=>Math.max(1,Math.ceil((T-g-o.lo[_])/h[_]))),m=e.map((T,_)=>Math.min(a-2,Math.floor((T+g-o.lo[_])/h[_]))),p=h.map(T=>1/(T*T)),S=0;for(let T=v[2];T<=m[2];T++){let _=o.lo[2]+T*h[2]-e[2];for(let b=v[1];b<=m[1];b++){let E=o.lo[1]+b*h[1]-e[1];for(let A=v[0];A<=m[0];A++){let y=o.lo[0]+A*h[0]-e[0],w=Math.hypot(y,E,_);if(w>=g)continue;let R=A+b*a+T*a*a,C=c[R]/vn,P=C,N=1;if(s==="smooth")P=((c[R-1]+c[R+1])*p[0]+(c[R-a]+c[R+a])*p[1]+(c[R-a*a]+c[R+a*a])*p[2])/(2*vn*(p[0]+p[1]+p[2])),N=n*Math.max(0,1-(w/t)**2)**2;else{let U=w-u;if(s==="carve")P=Math.max(C,-U);else{let z=Math.max(.08-Math.abs(C-U),0)/.08;P=Math.min(C,U)-z*z*.02}}let D=Iu(C+(P-C)*N);D!==c[R]&&(l[R]=D,S++)}}}return{...i,values:l,changed:S,clipped:f}}var Lu=Object.freeze({axis:"x",origin:0,overlap:"max-absolute-delta-v1"});function Du(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==3||i.axis!=="x"||i.origin!==0||i.overlap!==Lu.overlap||!["axis","origin","overlap"].every(e=>Object.hasOwn(i,e)))throw Error("Sculpt symmetry requires rest X0 and max-absolute-delta-v1 overlap");return{...Lu}}var xa=i=>i.symmetry?2:1;function tM(i){return i?{normal:[-i.normal[0],i.normal[1],i.normal[2]],offset:i.offset}:void 0}function rc(i,e,t,n,s,r,a){if(a===void 0)return sc(i,e,t,n,s,r);Du(a);let o=sc(i,e,t,n,s,r);if(e[0]===0&&(!r||r.normal[0]===0))return o;let c=sc(i,[-e[0],e[1],e[2]],t,n,s,tM(r)),l=o.values,h=0;for(let d=0;d<l.length;d++){let u=i.values[d],f=l[d]-u,g=c.values[d]-u;Math.abs(g)>Math.abs(f)?l[d]=c.values[d]:Math.abs(f)===Math.abs(g)&&(l[d]=Math.round((l[d]+c.values[d])/2)),l[d]!==u&&h++}return{...i,values:l,changed:h,clipped:o.clipped||c.clipped}}var lm="sky-paint-sculpt-protection-v1",lc=8,cm=32,ac=(i,e,t)=>typeof i=="number"&&Number.isFinite(i)&&i>=e&&i<=t;function oc(i,e){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(t=>!Object.hasOwn(i,t)))throw Error("Malformed sculpt protection fields")}function Nu(i){if(i?.mode==="invert")return oc(i,["mode"]),structuredClone(i);if(oc(i,["mode","center","radius","gain","hardness"]),!["protect","restore"].includes(i.mode)||!Array.isArray(i.center)||i.center.length!==3||Array.from(i.center).some(e=>!ac(e,-24,24))||!ac(i.radius,.08,1.5)||!ac(i.gain,0,1)||!ac(i.hardness,0,1))throw Error("Invalid sculpt protection stamp");return structuredClone(i)}function hm(i){if(oc(i,["id","base","commands"]),!Number.isSafeInteger(i.id)||i.id<1||i.id>1e6||![0,255].includes(i.base)||!Array.isArray(i.commands)||i.commands.length>cm)throw Error("Sculpt protection snapshot budget/properties are invalid");for(let e of i.commands)Nu(e);return structuredClone(i)}function um(i){if(oc(i,["format","current","versions"]),i.format!==lm||!Array.isArray(i.versions)||i.versions.length<1||i.versions.length>lc)throw Error("Sculpt protection supports one to eight snapshots");let e=new Set;for(let t of i.versions){if(hm(t),e.has(t.id))throw Error("Sculpt protection snapshot IDs must be unique");e.add(t.id)}if(!Number.isSafeInteger(i.current)||!e.has(i.current))throw Error("Current sculpt protection snapshot is missing");return structuredClone(i)}function dm(i){if(!Zn.includes(i?.n))throw Error("Protection grid must be49 or65");ys(i.bounds)}function fm(i,e,t){if(dm(i),Nu(t),!(e instanceof Uint8Array)||e.length!==i.n**3)throw Error("Protection requires one q8 sample per author-grid point");let n=e.slice(),{n:s,bounds:r}=i,a=0;if(t.mode==="invert"){for(let v=0;v<n.length;v++)n[v]=255-n[v],n[v]!==e[v]&&a++;return{n:s,bounds:structuredClone(r),values:n,changed:a,clipped:!1}}let{center:o,radius:c,gain:l,hardness:h}=t,d=ya(i),u=o.some((v,m)=>v-c<r.lo[m]||v+c>r.hi[m]),f=o.map((v,m)=>Math.max(0,Math.ceil((v-c-r.lo[m])/d[m]))),g=o.map((v,m)=>Math.min(s-1,Math.floor((v+c-r.lo[m])/d[m])));if(l>0)for(let v=f[2];v<=g[2];v++)for(let m=f[1];m<=g[1];m++)for(let p=f[0];p<=g[0];p++){let S=r.lo[0]+p*d[0]-o[0],T=r.lo[1]+m*d[1]-o[1],_=r.lo[2]+v*d[2]-o[2],b=(S*S+T*T+_*_)/(c*c);if(b>=1)continue;let E=Math.sqrt(b),A=E<=h?0:(E-h)/(1-h),y=(1-A*A)**2,w=p+m*s+v*s*s,R=n[w],C=Math.round(t.mode==="protect"?R+(255-R)*l*y:R*(1-l*y));C!==R&&(n[w]=C,a++)}return{n:s,bounds:structuredClone(r),values:n,changed:a,clipped:u}}function va(i,e){dm(i),e&&hm(e);let t={n:i.n,bounds:structuredClone(i.bounds),values:new Uint8Array(i.n**3).fill(e?.base??0)};for(let s of e?.commands??[])t=fm(i,t.values,s);let n=t.values[0];return t.uniform=t.values.every(s=>s===n)?n:null,t}function cc(i,e,t,n,s,r,a,o){if(o===void 0)return rc(i,e,t,n,s,r,a);if(!(o.values instanceof Uint8Array)||o.n!==i.n||JSON.stringify(o.bounds)!==JSON.stringify(i.bounds)||o.values.length!==i.values.length)throw Error("Captured protection grid does not match the mass grid");if(o.values.every(h=>h===0))return rc(i,e,t,n,s,r,a);let c=rc(i,e,t,n,s,r,a),l=0;for(let h=0;h<c.values.length;h++){let d=i.values[h];c.values[h]=d+Math.round((c.values[h]-d)*(255-o.values[h])/255),c.values[h]!==d&&l++}return{...c,changed:l}}function pm(i,e=i.protection?.current){if(e===void 0)return;let t=i.protection?.versions.find(n=>n.id===e);if(!t)throw Error("Captured sculpt protection snapshot is missing");return t}function mm(i){return new Set(i.layers.flatMap(e=>e.strokes).filter(e=>Object.hasOwn(e,"protectionId")).map(e=>e.protectionId))}function gm(i){i.protection!==void 0&&um(i.protection);for(let e of mm(i))if(!Number.isSafeInteger(e)||e<1||e>1e6||!i.protection?.versions.some(t=>t.id===e))throw Error("Captured sculpt protection reference is invalid")}function _m(i){if(!i.protection)return JSON.stringify(i);let e=mm(i),t=i.protection.versions.filter(s=>e.has(s.id)),n={...i};return delete n.protection,t.length&&(n.protectionVersions=t),JSON.stringify(n)}function xr(i){let e=i.length;for(;--e>=0;)i[e]=0}var nM=0,i0=1,sM=2,rM=3,aM=258,sd=29,Ua=256,Aa=Ua+1+sd,gr=30,rd=19,n0=2*Aa+1,xs=15,Uu=16,oM=7,ad=256,s0=16,r0=17,a0=18,Ku=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),mc=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),lM=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),o0=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),cM=512,bn=new Array((Aa+2)*2);xr(bn);var wa=new Array(gr*2);xr(wa);var Ra=new Array(cM);xr(Ra);var Ca=new Array(aM-rM+1);xr(Ca);var od=new Array(sd);xr(od);var gc=new Array(gr);xr(gc);function Fu(i,e,t,n,s){this.static_tree=i,this.extra_bits=e,this.extra_base=t,this.elems=n,this.max_length=s,this.has_stree=i&&i.length}var l0,c0,h0;function Ou(i,e){this.dyn_tree=i,this.max_code=0,this.stat_desc=e}var u0=i=>i<256?Ra[i]:Ra[256+(i>>>7)],Ia=(i,e)=>{i.pending_buf[i.pending++]=e&255,i.pending_buf[i.pending++]=e>>>8&255},hi=(i,e,t)=>{i.bi_valid>Uu-t?(i.bi_buf|=e<<i.bi_valid&65535,Ia(i,i.bi_buf),i.bi_buf=e>>Uu-i.bi_valid,i.bi_valid+=t-Uu):(i.bi_buf|=e<<i.bi_valid&65535,i.bi_valid+=t)},Qi=(i,e,t)=>{hi(i,t[e*2],t[e*2+1])},d0=(i,e)=>{let t=0;do t|=i&1,i>>>=1,t<<=1;while(--e>0);return t>>>1},hM=i=>{i.bi_valid===16?(Ia(i,i.bi_buf),i.bi_buf=0,i.bi_valid=0):i.bi_valid>=8&&(i.pending_buf[i.pending++]=i.bi_buf&255,i.bi_buf>>=8,i.bi_valid-=8)},uM=(i,e)=>{let t=e.dyn_tree,n=e.max_code,s=e.stat_desc.static_tree,r=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length,l,h,d,u,f,g,v=0;for(u=0;u<=xs;u++)i.bl_count[u]=0;for(t[i.heap[i.heap_max]*2+1]=0,l=i.heap_max+1;l<n0;l++)h=i.heap[l],u=t[t[h*2+1]*2+1]+1,u>c&&(u=c,v++),t[h*2+1]=u,!(h>n)&&(i.bl_count[u]++,f=0,h>=o&&(f=a[h-o]),g=t[h*2],i.opt_len+=g*(u+f),r&&(i.static_len+=g*(s[h*2+1]+f)));if(v!==0){do{for(u=c-1;i.bl_count[u]===0;)u--;i.bl_count[u]--,i.bl_count[u+1]+=2,i.bl_count[c]--,v-=2}while(v>0);for(u=c;u!==0;u--)for(h=i.bl_count[u];h!==0;)d=i.heap[--l],!(d>n)&&(t[d*2+1]!==u&&(i.opt_len+=(u-t[d*2+1])*t[d*2],t[d*2+1]=u),h--)}},f0=(i,e,t)=>{let n=new Array(xs+1),s=0,r,a;for(r=1;r<=xs;r++)s=s+t[r-1]<<1,n[r]=s;for(a=0;a<=e;a++){let o=i[a*2+1];o!==0&&(i[a*2]=d0(n[o]++,o))}},dM=()=>{let i,e,t,n,s,r=new Array(xs+1);for(t=0,n=0;n<sd-1;n++)for(od[n]=t,i=0;i<1<<Ku[n];i++)Ca[t++]=n;for(Ca[t-1]=n,s=0,n=0;n<16;n++)for(gc[n]=s,i=0;i<1<<mc[n];i++)Ra[s++]=n;for(s>>=7;n<gr;n++)for(gc[n]=s<<7,i=0;i<1<<mc[n]-7;i++)Ra[256+s++]=n;for(e=0;e<=xs;e++)r[e]=0;for(i=0;i<=143;)bn[i*2+1]=8,i++,r[8]++;for(;i<=255;)bn[i*2+1]=9,i++,r[9]++;for(;i<=279;)bn[i*2+1]=7,i++,r[7]++;for(;i<=287;)bn[i*2+1]=8,i++,r[8]++;for(f0(bn,Aa+1,r),i=0;i<gr;i++)wa[i*2+1]=5,wa[i*2]=d0(i,5);l0=new Fu(bn,Ku,Ua+1,Aa,xs),c0=new Fu(wa,mc,0,gr,xs),h0=new Fu(new Array(0),lM,0,rd,oM)},p0=i=>{let e;for(e=0;e<Aa;e++)i.dyn_ltree[e*2]=0;for(e=0;e<gr;e++)i.dyn_dtree[e*2]=0;for(e=0;e<rd;e++)i.bl_tree[e*2]=0;i.dyn_ltree[ad*2]=1,i.opt_len=i.static_len=0,i.sym_next=i.matches=0},m0=i=>{i.bi_valid>8?Ia(i,i.bi_buf):i.bi_valid>0&&(i.pending_buf[i.pending++]=i.bi_buf),i.bi_buf=0,i.bi_valid=0},ym=(i,e,t,n)=>{let s=e*2,r=t*2;return i[s]<i[r]||i[s]===i[r]&&n[e]<=n[t]},Bu=(i,e,t)=>{let n=i.heap[t],s=t<<1;for(;s<=i.heap_len&&(s<i.heap_len&&ym(e,i.heap[s+1],i.heap[s],i.depth)&&s++,!ym(e,n,i.heap[s],i.depth));)i.heap[t]=i.heap[s],t=s,s<<=1;i.heap[t]=n},xm=(i,e,t)=>{let n,s,r=0,a,o;if(i.sym_next!==0)do n=i.pending_buf[i.sym_buf+r++]&255,n+=(i.pending_buf[i.sym_buf+r++]&255)<<8,s=i.pending_buf[i.sym_buf+r++],n===0?Qi(i,s,e):(a=Ca[s],Qi(i,a+Ua+1,e),o=Ku[a],o!==0&&(s-=od[a],hi(i,s,o)),n--,a=u0(n),Qi(i,a,t),o=mc[a],o!==0&&(n-=gc[a],hi(i,n,o)));while(r<i.sym_next);Qi(i,ad,e)},ju=(i,e)=>{let t=e.dyn_tree,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.elems,a,o,c=-1,l;for(i.heap_len=0,i.heap_max=n0,a=0;a<r;a++)t[a*2]!==0?(i.heap[++i.heap_len]=c=a,i.depth[a]=0):t[a*2+1]=0;for(;i.heap_len<2;)l=i.heap[++i.heap_len]=c<2?++c:0,t[l*2]=1,i.depth[l]=0,i.opt_len--,s&&(i.static_len-=n[l*2+1]);for(e.max_code=c,a=i.heap_len>>1;a>=1;a--)Bu(i,t,a);l=r;do a=i.heap[1],i.heap[1]=i.heap[i.heap_len--],Bu(i,t,1),o=i.heap[1],i.heap[--i.heap_max]=a,i.heap[--i.heap_max]=o,t[l*2]=t[a*2]+t[o*2],i.depth[l]=(i.depth[a]>=i.depth[o]?i.depth[a]:i.depth[o])+1,t[a*2+1]=t[o*2+1]=l,i.heap[1]=l++,Bu(i,t,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],uM(i,e),f0(t,c,i.bl_count)},vm=(i,e,t)=>{let n,s=-1,r,a=e[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,n=0;n<=t;n++)r=a,a=e[(n+1)*2+1],!(++o<c&&r===a)&&(o<l?i.bl_tree[r*2]+=o:r!==0?(r!==s&&i.bl_tree[r*2]++,i.bl_tree[s0*2]++):o<=10?i.bl_tree[r0*2]++:i.bl_tree[a0*2]++,o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4))},Sm=(i,e,t)=>{let n,s=-1,r,a=e[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),n=0;n<=t;n++)if(r=a,a=e[(n+1)*2+1],!(++o<c&&r===a)){if(o<l)do Qi(i,r,i.bl_tree);while(--o!==0);else r!==0?(r!==s&&(Qi(i,r,i.bl_tree),o--),Qi(i,s0,i.bl_tree),hi(i,o-3,2)):o<=10?(Qi(i,r0,i.bl_tree),hi(i,o-3,3)):(Qi(i,a0,i.bl_tree),hi(i,o-11,7));o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4)}},fM=i=>{let e;for(vm(i,i.dyn_ltree,i.l_desc.max_code),vm(i,i.dyn_dtree,i.d_desc.max_code),ju(i,i.bl_desc),e=rd-1;e>=3&&i.bl_tree[o0[e]*2+1]===0;e--);return i.opt_len+=3*(e+1)+5+5+4,e},pM=(i,e,t,n)=>{let s;for(hi(i,e-257,5),hi(i,t-1,5),hi(i,n-4,4),s=0;s<n;s++)hi(i,i.bl_tree[o0[s]*2+1],3);Sm(i,i.dyn_ltree,e-1),Sm(i,i.dyn_dtree,t-1)},mM=i=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&i.dyn_ltree[t*2]!==0)return 0;if(i.dyn_ltree[18]!==0||i.dyn_ltree[20]!==0||i.dyn_ltree[26]!==0)return 1;for(t=32;t<Ua;t++)if(i.dyn_ltree[t*2]!==0)return 1;return 0},bm=!1,gM=i=>{bm||(dM(),bm=!0),i.l_desc=new Ou(i.dyn_ltree,l0),i.d_desc=new Ou(i.dyn_dtree,c0),i.bl_desc=new Ou(i.bl_tree,h0),i.bi_buf=0,i.bi_valid=0,p0(i)},g0=(i,e,t,n)=>{hi(i,(nM<<1)+(n?1:0),3),m0(i),Ia(i,t),Ia(i,~t),t&&i.pending_buf.set(i.window.subarray(e,e+t),i.pending),i.pending+=t},_M=i=>{hi(i,i0<<1,3),Qi(i,ad,bn),hM(i)},yM=(i,e,t,n)=>{let s,r,a=0;i.level>0?(i.strm.data_type===2&&(i.strm.data_type=mM(i)),ju(i,i.l_desc),ju(i,i.d_desc),a=fM(i),s=i.opt_len+3+7>>>3,r=i.static_len+3+7>>>3,r<=s&&(s=r)):s=r=t+5,t+4<=s&&e!==-1?g0(i,e,t,n):i.strategy===4||r===s?(hi(i,(i0<<1)+(n?1:0),3),xm(i,bn,wa)):(hi(i,(sM<<1)+(n?1:0),3),pM(i,i.l_desc.max_code+1,i.d_desc.max_code+1,a+1),xm(i,i.dyn_ltree,i.dyn_dtree)),p0(i),n&&m0(i)},xM=(i,e,t)=>(i.pending_buf[i.sym_buf+i.sym_next++]=e,i.pending_buf[i.sym_buf+i.sym_next++]=e>>8,i.pending_buf[i.sym_buf+i.sym_next++]=t,e===0?i.dyn_ltree[t*2]++:(i.matches++,e--,i.dyn_ltree[(Ca[t]+Ua+1)*2]++,i.dyn_dtree[u0(e)*2]++),i.sym_next===i.sym_end),vM=gM,SM=g0,bM=yM,MM=xM,wM=_M,EM={_tr_init:vM,_tr_stored_block:SM,_tr_flush_block:bM,_tr_tally:MM,_tr_align:wM},TM=(i,e,t,n)=>{let s=i&65535|0,r=i>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do s=s+e[n++]|0,r=r+s|0;while(--a);s%=65521,r%=65521}return s|r<<16|0},Pa=TM,AM=()=>{let i,e=[];for(var t=0;t<256;t++){i=t;for(var n=0;n<8;n++)i=i&1?3988292384^i>>>1:i>>>1;e[t]=i}return e},RM=new Uint32Array(AM()),CM=(i,e,t,n)=>{let s=RM,r=n+t;i^=-1;for(let a=n;a<r;a++)i=i>>>8^s[(i^e[a])&255];return i^-1},Vt=CM,bs={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},vr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},{_tr_init:IM,_tr_stored_block:$u,_tr_flush_block:PM,_tr_tally:$n,_tr_align:LM}=EM,{Z_NO_FLUSH:Jn,Z_PARTIAL_FLUSH:DM,Z_FULL_FLUSH:NM,Z_FINISH:Ii,Z_BLOCK:Mm,Z_OK:Gt,Z_STREAM_END:wm,Z_STREAM_ERROR:en,Z_DATA_ERROR:UM,Z_BUF_ERROR:ku,Z_DEFAULT_COMPRESSION:FM,Z_FILTERED:OM,Z_HUFFMAN_ONLY:hc,Z_RLE:BM,Z_FIXED:kM,Z_DEFAULT_STRATEGY:zM,Z_UNKNOWN:HM,Z_DEFLATED:xc}=vr,VM=9,GM=15,WM=8,XM=29,YM=256,Ju=YM+1+XM,qM=30,ZM=19,KM=2*Ju+1,jM=15,Ze=3,jn=258,tn=jn+Ze+1,$M=32,_r=42,ld=57,Qu=69,ed=73,td=91,id=103,vs=113,ba=666,ii=1,Sr=2,Ms=3,br=4,JM=3,Ss=(i,e)=>(i.msg=bs[e],e),Em=i=>i*2-(i>4?9:0),Kn=i=>{let e=i.length;for(;--e>=0;)i[e]=0},QM=i=>{let e,t,n,s=i.w_size;e=i.hash_size,n=e;do t=i.head[--n],i.head[n]=t>=s?t-s:0;while(--e);e=s,n=e;do t=i.prev[--n],i.prev[n]=t>=s?t-s:0;while(--e)},e1=(i,e,t)=>(e<<i.hash_shift^t)&i.hash_mask,Qn=e1,bi=i=>{let e=i.state,t=e.pending;t>i.avail_out&&(t=i.avail_out),t!==0&&(i.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),i.next_out),i.next_out+=t,e.pending_out+=t,i.total_out+=t,i.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},Mi=(i,e)=>{PM(i,i.block_start>=0?i.block_start:-1,i.strstart-i.block_start,e),i.block_start=i.strstart,bi(i.strm)},Qe=(i,e)=>{i.pending_buf[i.pending++]=e},Sa=(i,e)=>{i.pending_buf[i.pending++]=e>>>8&255,i.pending_buf[i.pending++]=e&255},nd=(i,e,t,n)=>{let s=i.avail_in;return s>n&&(s=n),s===0?0:(i.avail_in-=s,e.set(i.input.subarray(i.next_in,i.next_in+s),t),i.state.wrap===1?i.adler=Pa(i.adler,e,s,t):i.state.wrap===2&&(i.adler=Vt(i.adler,e,s,t)),i.next_in+=s,i.total_in+=s,s)},_0=(i,e)=>{let t=i.max_chain_length,n=i.strstart,s,r,a=i.prev_length,o=i.nice_match,c=i.strstart>i.w_size-tn?i.strstart-(i.w_size-tn):0,l=i.window,h=i.w_mask,d=i.prev,u=i.strstart+jn,f=l[n+a-1],g=l[n+a];i.prev_length>=i.good_match&&(t>>=2),o>i.lookahead&&(o=i.lookahead);do if(s=e,!(l[s+a]!==g||l[s+a-1]!==f||l[s]!==l[n]||l[++s]!==l[n+1])){n+=2,s++;do;while(l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&n<u);if(r=jn-(u-n),n=u-jn,r>a){if(i.match_start=e,a=r,r>=o)break;f=l[n+a-1],g=l[n+a]}}while((e=d[e&h])>c&&--t!==0);return a<=i.lookahead?a:i.lookahead},yr=i=>{let e=i.w_size,t,n,s;do{if(n=i.window_size-i.lookahead-i.strstart,i.strstart>=e+(e-tn)&&(i.window.set(i.window.subarray(e,e+e-n),0),i.match_start-=e,i.strstart-=e,i.block_start-=e,i.insert>i.strstart&&(i.insert=i.strstart),QM(i),n+=e),i.strm.avail_in===0)break;if(t=nd(i.strm,i.window,i.strstart+i.lookahead,n),i.lookahead+=t,i.lookahead+i.insert>=Ze)for(s=i.strstart-i.insert,i.ins_h=i.window[s],i.ins_h=Qn(i,i.ins_h,i.window[s+1]);i.insert&&(i.ins_h=Qn(i,i.ins_h,i.window[s+Ze-1]),i.prev[s&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=s,s++,i.insert--,!(i.lookahead+i.insert<Ze)););}while(i.lookahead<tn&&i.strm.avail_in!==0)},y0=(i,e)=>{let t=i.pending_buf_size-5>i.w_size?i.w_size:i.pending_buf_size-5,n,s,r,a=0,o=i.strm.avail_in;do{if(n=65535,r=i.bi_valid+42>>3,i.strm.avail_out<r||(r=i.strm.avail_out-r,s=i.strstart-i.block_start,n>s+i.strm.avail_in&&(n=s+i.strm.avail_in),n>r&&(n=r),n<t&&(n===0&&e!==Ii||e===Jn||n!==s+i.strm.avail_in)))break;a=e===Ii&&n===s+i.strm.avail_in?1:0,$u(i,0,0,a),i.pending_buf[i.pending-4]=n,i.pending_buf[i.pending-3]=n>>8,i.pending_buf[i.pending-2]=~n,i.pending_buf[i.pending-1]=~n>>8,bi(i.strm),s&&(s>n&&(s=n),i.strm.output.set(i.window.subarray(i.block_start,i.block_start+s),i.strm.next_out),i.strm.next_out+=s,i.strm.avail_out-=s,i.strm.total_out+=s,i.block_start+=s,n-=s),n&&(nd(i.strm,i.strm.output,i.strm.next_out,n),i.strm.next_out+=n,i.strm.avail_out-=n,i.strm.total_out+=n)}while(a===0);return o-=i.strm.avail_in,o&&(o>=i.w_size?(i.matches=2,i.window.set(i.strm.input.subarray(i.strm.next_in-i.w_size,i.strm.next_in),0),i.strstart=i.w_size,i.insert=i.strstart):(i.window_size-i.strstart<=o&&(i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,i.insert>i.strstart&&(i.insert=i.strstart)),i.window.set(i.strm.input.subarray(i.strm.next_in-o,i.strm.next_in),i.strstart),i.strstart+=o,i.insert+=o>i.w_size-i.insert?i.w_size-i.insert:o),i.block_start=i.strstart),i.high_water<i.strstart&&(i.high_water=i.strstart),a?br:e!==Jn&&e!==Ii&&i.strm.avail_in===0&&i.strstart===i.block_start?Sr:(r=i.window_size-i.strstart,i.strm.avail_in>r&&i.block_start>=i.w_size&&(i.block_start-=i.w_size,i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,r+=i.w_size,i.insert>i.strstart&&(i.insert=i.strstart)),r>i.strm.avail_in&&(r=i.strm.avail_in),r&&(nd(i.strm,i.window,i.strstart,r),i.strstart+=r,i.insert+=r>i.w_size-i.insert?i.w_size-i.insert:r),i.high_water<i.strstart&&(i.high_water=i.strstart),r=i.bi_valid+42>>3,r=i.pending_buf_size-r>65535?65535:i.pending_buf_size-r,t=r>i.w_size?i.w_size:r,s=i.strstart-i.block_start,(s>=t||(s||e===Ii)&&e!==Jn&&i.strm.avail_in===0&&s<=r)&&(n=s>r?r:s,a=e===Ii&&i.strm.avail_in===0&&n===s?1:0,$u(i,i.block_start,n,a),i.block_start+=n,bi(i.strm)),a?Ms:ii)},zu=(i,e)=>{let t,n;for(;;){if(i.lookahead<tn){if(yr(i),i.lookahead<tn&&e===Jn)return ii;if(i.lookahead===0)break}if(t=0,i.lookahead>=Ze&&(i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+Ze-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),t!==0&&i.strstart-t<=i.w_size-tn&&(i.match_length=_0(i,t)),i.match_length>=Ze)if(n=$n(i,i.strstart-i.match_start,i.match_length-Ze),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=Ze){i.match_length--;do i.strstart++,i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+Ze-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart;while(--i.match_length!==0);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+1]);else n=$n(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(n&&(Mi(i,!1),i.strm.avail_out===0))return ii}return i.insert=i.strstart<Ze-1?i.strstart:Ze-1,e===Ii?(Mi(i,!0),i.strm.avail_out===0?Ms:br):i.sym_next&&(Mi(i,!1),i.strm.avail_out===0)?ii:Sr},pr=(i,e)=>{let t,n,s;for(;;){if(i.lookahead<tn){if(yr(i),i.lookahead<tn&&e===Jn)return ii;if(i.lookahead===0)break}if(t=0,i.lookahead>=Ze&&(i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+Ze-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=Ze-1,t!==0&&i.prev_length<i.max_lazy_match&&i.strstart-t<=i.w_size-tn&&(i.match_length=_0(i,t),i.match_length<=5&&(i.strategy===OM||i.match_length===Ze&&i.strstart-i.match_start>4096)&&(i.match_length=Ze-1)),i.prev_length>=Ze&&i.match_length<=i.prev_length){s=i.strstart+i.lookahead-Ze,n=$n(i,i.strstart-1-i.prev_match,i.prev_length-Ze),i.lookahead-=i.prev_length-1,i.prev_length-=2;do++i.strstart<=s&&(i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+Ze-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart);while(--i.prev_length!==0);if(i.match_available=0,i.match_length=Ze-1,i.strstart++,n&&(Mi(i,!1),i.strm.avail_out===0))return ii}else if(i.match_available){if(n=$n(i,0,i.window[i.strstart-1]),n&&Mi(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return ii}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(n=$n(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<Ze-1?i.strstart:Ze-1,e===Ii?(Mi(i,!0),i.strm.avail_out===0?Ms:br):i.sym_next&&(Mi(i,!1),i.strm.avail_out===0)?ii:Sr},t1=(i,e)=>{let t,n,s,r,a=i.window;for(;;){if(i.lookahead<=jn){if(yr(i),i.lookahead<=jn&&e===Jn)return ii;if(i.lookahead===0)break}if(i.match_length=0,i.lookahead>=Ze&&i.strstart>0&&(s=i.strstart-1,n=a[s],n===a[++s]&&n===a[++s]&&n===a[++s])){r=i.strstart+jn;do;while(n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&s<r);i.match_length=jn-(r-s),i.match_length>i.lookahead&&(i.match_length=i.lookahead)}if(i.match_length>=Ze?(t=$n(i,1,i.match_length-Ze),i.lookahead-=i.match_length,i.strstart+=i.match_length,i.match_length=0):(t=$n(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++),t&&(Mi(i,!1),i.strm.avail_out===0))return ii}return i.insert=0,e===Ii?(Mi(i,!0),i.strm.avail_out===0?Ms:br):i.sym_next&&(Mi(i,!1),i.strm.avail_out===0)?ii:Sr},i1=(i,e)=>{let t;for(;;){if(i.lookahead===0&&(yr(i),i.lookahead===0)){if(e===Jn)return ii;break}if(i.match_length=0,t=$n(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++,t&&(Mi(i,!1),i.strm.avail_out===0))return ii}return i.insert=0,e===Ii?(Mi(i,!0),i.strm.avail_out===0?Ms:br):i.sym_next&&(Mi(i,!1),i.strm.avail_out===0)?ii:Sr};function Ji(i,e,t,n,s){this.good_length=i,this.max_lazy=e,this.nice_length=t,this.max_chain=n,this.func=s}var Ma=[new Ji(0,0,0,0,y0),new Ji(4,4,8,4,zu),new Ji(4,5,16,8,zu),new Ji(4,6,32,32,zu),new Ji(4,4,16,16,pr),new Ji(8,16,32,32,pr),new Ji(8,16,128,128,pr),new Ji(8,32,128,256,pr),new Ji(32,128,258,1024,pr),new Ji(32,258,258,4096,pr)],n1=i=>{i.window_size=2*i.w_size,Kn(i.head),i.max_lazy_match=Ma[i.level].max_lazy,i.good_match=Ma[i.level].good_length,i.nice_match=Ma[i.level].nice_length,i.max_chain_length=Ma[i.level].max_chain,i.strstart=0,i.block_start=0,i.lookahead=0,i.insert=0,i.match_length=i.prev_length=Ze-1,i.match_available=0,i.ins_h=0};function s1(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=xc,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(KM*2),this.dyn_dtree=new Uint16Array((2*qM+1)*2),this.bl_tree=new Uint16Array((2*ZM+1)*2),Kn(this.dyn_ltree),Kn(this.dyn_dtree),Kn(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(jM+1),this.heap=new Uint16Array(2*Ju+1),Kn(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ju+1),Kn(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Fa=i=>{if(!i)return 1;let e=i.state;return!e||e.strm!==i||e.status!==_r&&e.status!==ld&&e.status!==Qu&&e.status!==ed&&e.status!==td&&e.status!==id&&e.status!==vs&&e.status!==ba?1:0},x0=i=>{if(Fa(i))return Ss(i,en);i.total_in=i.total_out=0,i.data_type=HM;let e=i.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?ld:e.wrap?_r:vs,i.adler=e.wrap===2?0:1,e.last_flush=-2,IM(e),Gt},v0=i=>{let e=x0(i);return e===Gt&&n1(i.state),e},r1=(i,e)=>Fa(i)||i.state.wrap!==2?en:(i.state.gzhead=e,Gt),S0=(i,e,t,n,s,r)=>{if(!i)return en;let a=1;if(e===FM&&(e=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),s<1||s>VM||t!==xc||n<8||n>15||e<0||e>9||r<0||r>kM||n===8&&a!==1)return Ss(i,en);n===8&&(n=9);let o=new s1;return i.state=o,o.strm=i,o.status=_r,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=s+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+Ze-1)/Ze),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<s+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=r,o.method=t,v0(i)},a1=(i,e)=>S0(i,e,xc,GM,WM,zM),o1=(i,e)=>{if(Fa(i)||e>Mm||e<0)return i?Ss(i,en):en;let t=i.state;if(!i.output||i.avail_in!==0&&!i.input||t.status===ba&&e!==Ii)return Ss(i,i.avail_out===0?ku:en);let n=t.last_flush;if(t.last_flush=e,t.pending!==0){if(bi(i),i.avail_out===0)return t.last_flush=-1,Gt}else if(i.avail_in===0&&Em(e)<=Em(n)&&e!==Ii)return Ss(i,ku);if(t.status===ba&&i.avail_in!==0)return Ss(i,ku);if(t.status===_r&&t.wrap===0&&(t.status=vs),t.status===_r){let s=xc+(t.w_bits-8<<4)<<8,r=-1;if(t.strategy>=hc||t.level<2?r=0:t.level<6?r=1:t.level===6?r=2:r=3,s|=r<<6,t.strstart!==0&&(s|=$M),s+=31-s%31,Sa(t,s),t.strstart!==0&&(Sa(t,i.adler>>>16),Sa(t,i.adler&65535)),i.adler=1,t.status=vs,bi(i),t.pending!==0)return t.last_flush=-1,Gt}if(t.status===ld){if(i.adler=0,Qe(t,31),Qe(t,139),Qe(t,8),t.gzhead)Qe(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),Qe(t,t.gzhead.time&255),Qe(t,t.gzhead.time>>8&255),Qe(t,t.gzhead.time>>16&255),Qe(t,t.gzhead.time>>24&255),Qe(t,t.level===9?2:t.strategy>=hc||t.level<2?4:0),Qe(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(Qe(t,t.gzhead.extra.length&255),Qe(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(i.adler=Vt(i.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Qu;else if(Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,t.level===9?2:t.strategy>=hc||t.level<2?4:0),Qe(t,JM),t.status=vs,bi(i),t.pending!==0)return t.last_flush=-1,Gt}if(t.status===Qu){if(t.gzhead.extra){let s=t.pending,r=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+r>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),t.gzindex+=o,bi(i),t.pending!==0)return t.last_flush=-1,Gt;s=0,r-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+r),t.pending),t.pending+=r,t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),t.gzindex=0}t.status=ed}if(t.status===ed){if(t.gzhead.name){let s=t.pending,r;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),bi(i),t.pending!==0)return t.last_flush=-1,Gt;s=0}t.gzindex<t.gzhead.name.length?r=t.gzhead.name.charCodeAt(t.gzindex++)&255:r=0,Qe(t,r)}while(r!==0);t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),t.gzindex=0}t.status=td}if(t.status===td){if(t.gzhead.comment){let s=t.pending,r;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),bi(i),t.pending!==0)return t.last_flush=-1,Gt;s=0}t.gzindex<t.gzhead.comment.length?r=t.gzhead.comment.charCodeAt(t.gzindex++)&255:r=0,Qe(t,r)}while(r!==0);t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s))}t.status=id}if(t.status===id){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(bi(i),t.pending!==0))return t.last_flush=-1,Gt;Qe(t,i.adler&255),Qe(t,i.adler>>8&255),i.adler=0}if(t.status=vs,bi(i),t.pending!==0)return t.last_flush=-1,Gt}if(i.avail_in!==0||t.lookahead!==0||e!==Jn&&t.status!==ba){let s=t.level===0?y0(t,e):t.strategy===hc?i1(t,e):t.strategy===BM?t1(t,e):Ma[t.level].func(t,e);if((s===Ms||s===br)&&(t.status=ba),s===ii||s===Ms)return i.avail_out===0&&(t.last_flush=-1),Gt;if(s===Sr&&(e===DM?LM(t):e!==Mm&&($u(t,0,0,!1),e===NM&&(Kn(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),bi(i),i.avail_out===0))return t.last_flush=-1,Gt}return e!==Ii?Gt:t.wrap<=0?wm:(t.wrap===2?(Qe(t,i.adler&255),Qe(t,i.adler>>8&255),Qe(t,i.adler>>16&255),Qe(t,i.adler>>24&255),Qe(t,i.total_in&255),Qe(t,i.total_in>>8&255),Qe(t,i.total_in>>16&255),Qe(t,i.total_in>>24&255)):(Sa(t,i.adler>>>16),Sa(t,i.adler&65535)),bi(i),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Gt:wm)},l1=i=>{if(Fa(i))return en;let e=i.state.status;return i.state=null,e===vs?Ss(i,UM):Gt},c1=(i,e)=>{let t=e.length;if(Fa(i))return en;let n=i.state,s=n.wrap;if(s===2||s===1&&n.status!==_r||n.lookahead)return en;if(s===1&&(i.adler=Pa(i.adler,e,t,0)),n.wrap=0,t>=n.w_size){s===0&&(Kn(n.head),n.strstart=0,n.block_start=0,n.insert=0);let c=new Uint8Array(n.w_size);c.set(e.subarray(t-n.w_size,t),0),e=c,t=n.w_size}let r=i.avail_in,a=i.next_in,o=i.input;for(i.avail_in=t,i.next_in=0,i.input=e,yr(n);n.lookahead>=Ze;){let c=n.strstart,l=n.lookahead-(Ze-1);do n.ins_h=Qn(n,n.ins_h,n.window[c+Ze-1]),n.prev[c&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=c,c++;while(--l);n.strstart=c,n.lookahead=Ze-1,yr(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=Ze-1,n.match_available=0,i.next_in=a,i.input=o,i.avail_in=r,n.wrap=s,Gt},h1=a1,u1=S0,d1=v0,f1=x0,p1=r1,m1=o1,g1=l1,_1=c1,y1="pako deflate (from Nodeca project)",Ea={deflateInit:h1,deflateInit2:u1,deflateReset:d1,deflateResetKeep:f1,deflateSetHeader:p1,deflate:m1,deflateEnd:g1,deflateSetDictionary:_1,deflateInfo:y1},x1=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),v1=function(i){let e=Array.prototype.slice.call(arguments,1);for(;e.length;){let t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(let n in t)x1(t,n)&&(i[n]=t[n])}}return i},S1=i=>{let e=0;for(let n=0,s=i.length;n<s;n++)e+=i[n].length;let t=new Uint8Array(e);for(let n=0,s=0,r=i.length;n<r;n++){let a=i[n];t.set(a,s),s+=a.length}return t},vc={assign:v1,flattenChunks:S1},b0=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{b0=!1}var La=new Uint8Array(256);for(let i=0;i<256;i++)La[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1;La[254]=La[254]=1;var b1=i=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(i);let e,t,n,s,r,a=i.length,o=0;for(s=0;s<a;s++)t=i.charCodeAt(s),(t&64512)===55296&&s+1<a&&(n=i.charCodeAt(s+1),(n&64512)===56320&&(t=65536+(t-55296<<10)+(n-56320),s++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),r=0,s=0;r<o;s++)t=i.charCodeAt(s),(t&64512)===55296&&s+1<a&&(n=i.charCodeAt(s+1),(n&64512)===56320&&(t=65536+(t-55296<<10)+(n-56320),s++)),t<128?e[r++]=t:t<2048?(e[r++]=192|t>>>6,e[r++]=128|t&63):t<65536?(e[r++]=224|t>>>12,e[r++]=128|t>>>6&63,e[r++]=128|t&63):(e[r++]=240|t>>>18,e[r++]=128|t>>>12&63,e[r++]=128|t>>>6&63,e[r++]=128|t&63);return e},M1=(i,e)=>{if(e<65534&&i.subarray&&b0)return String.fromCharCode.apply(null,i.length===e?i:i.subarray(0,e));let t="";for(let n=0;n<e;n++)t+=String.fromCharCode(i[n]);return t},w1=(i,e)=>{let t=e||i.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(i.subarray(0,e));let n,s,r=new Array(t*2);for(s=0,n=0;n<t;){let a=i[n++];if(a<128){r[s++]=a;continue}let o=La[a];if(o>4){r[s++]=65533,n+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&n<t;)a=a<<6|i[n++]&63,o--;if(o>1){r[s++]=65533;continue}a<65536?r[s++]=a:(a-=65536,r[s++]=55296|a>>10&1023,r[s++]=56320|a&1023)}return M1(r,s)},E1=(i,e)=>{e=e||i.length,e>i.length&&(e=i.length);let t=e-1;for(;t>=0&&(i[t]&192)===128;)t--;return t<0||t===0?e:t+La[i[t]]>e?t:e},Da={string2buf:b1,buf2string:w1,utf8border:E1};function T1(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var M0=T1,w0=Object.prototype.toString,{Z_NO_FLUSH:A1,Z_SYNC_FLUSH:R1,Z_FULL_FLUSH:C1,Z_FINISH:I1,Z_OK:_c,Z_STREAM_END:P1,Z_DEFAULT_COMPRESSION:L1,Z_DEFAULT_STRATEGY:D1,Z_DEFLATED:N1}=vr;function Oa(i){this.options=vc.assign({level:L1,method:N1,chunkSize:16384,windowBits:15,memLevel:8,strategy:D1},i||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new M0,this.strm.avail_out=0;let t=Ea.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==_c)throw new Error(bs[t]);if(e.header&&Ea.deflateSetHeader(this.strm,e.header),e.dictionary){let n;if(typeof e.dictionary=="string"?n=Da.string2buf(e.dictionary):w0.call(e.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(e.dictionary):n=e.dictionary,t=Ea.deflateSetDictionary(this.strm,n),t!==_c)throw new Error(bs[t]);this._dict_set=!0}}Oa.prototype.push=function(i,e){let t=this.strm,n=this.options.chunkSize,s,r;if(this.ended)return!1;for(e===~~e?r=e:r=e===!0?I1:A1,typeof i=="string"?t.input=Da.string2buf(i):w0.call(i)==="[object ArrayBuffer]"?t.input=new Uint8Array(i):t.input=i,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(n),t.next_out=0,t.avail_out=n),(r===R1||r===C1)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(s=Ea.deflate(t,r),s===P1)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),s=Ea.deflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===_c;if(t.avail_out===0){this.onData(t.output);continue}if(r>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Oa.prototype.onData=function(i){this.chunks.push(i)};Oa.prototype.onEnd=function(i){i===_c&&(this.result=vc.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function cd(i,e){let t=new Oa(e);if(t.push(i,!0),t.err)throw t.msg||bs[t.err];return t.result}function U1(i,e){return e=e||{},e.raw=!0,cd(i,e)}function F1(i,e){return e=e||{},e.gzip=!0,cd(i,e)}var O1=Oa,B1=cd,k1=U1,z1=F1,H1=vr,V1={Deflate:O1,deflate:B1,deflateRaw:k1,gzip:z1,constants:H1},uc=16209,G1=16191,W1=function(e,t){let n,s,r,a,o,c,l,h,d,u,f,g,v,m,p,S,T,_,b,E,A,y,w,R,C=e.state;n=e.next_in,w=e.input,s=n+(e.avail_in-5),r=e.next_out,R=e.output,a=r-(t-e.avail_out),o=r+(e.avail_out-257),c=C.dmax,l=C.wsize,h=C.whave,d=C.wnext,u=C.window,f=C.hold,g=C.bits,v=C.lencode,m=C.distcode,p=(1<<C.lenbits)-1,S=(1<<C.distbits)-1;e:do{g<15&&(f+=w[n++]<<g,g+=8,f+=w[n++]<<g,g+=8),T=v[f&p];t:for(;;){if(_=T>>>24,f>>>=_,g-=_,_=T>>>16&255,_===0)R[r++]=T&65535;else if(_&16){b=T&65535,_&=15,_&&(g<_&&(f+=w[n++]<<g,g+=8),b+=f&(1<<_)-1,f>>>=_,g-=_),g<15&&(f+=w[n++]<<g,g+=8,f+=w[n++]<<g,g+=8),T=m[f&S];i:for(;;){if(_=T>>>24,f>>>=_,g-=_,_=T>>>16&255,_&16){if(E=T&65535,_&=15,g<_&&(f+=w[n++]<<g,g+=8,g<_&&(f+=w[n++]<<g,g+=8)),E+=f&(1<<_)-1,E>c){e.msg="invalid distance too far back",C.mode=uc;break e}if(f>>>=_,g-=_,_=r-a,E>_){if(_=E-_,_>h&&C.sane){e.msg="invalid distance too far back",C.mode=uc;break e}if(A=0,y=u,d===0){if(A+=l-_,_<b){b-=_;do R[r++]=u[A++];while(--_);A=r-E,y=R}}else if(d<_){if(A+=l+d-_,_-=d,_<b){b-=_;do R[r++]=u[A++];while(--_);if(A=0,d<b){_=d,b-=_;do R[r++]=u[A++];while(--_);A=r-E,y=R}}}else if(A+=d-_,_<b){b-=_;do R[r++]=u[A++];while(--_);A=r-E,y=R}for(;b>2;)R[r++]=y[A++],R[r++]=y[A++],R[r++]=y[A++],b-=3;b&&(R[r++]=y[A++],b>1&&(R[r++]=y[A++]))}else{A=r-E;do R[r++]=R[A++],R[r++]=R[A++],R[r++]=R[A++],b-=3;while(b>2);b&&(R[r++]=R[A++],b>1&&(R[r++]=R[A++]))}}else if((_&64)===0){T=m[(T&65535)+(f&(1<<_)-1)];continue i}else{e.msg="invalid distance code",C.mode=uc;break e}break}}else if((_&64)===0){T=v[(T&65535)+(f&(1<<_)-1)];continue t}else if(_&32){C.mode=G1;break e}else{e.msg="invalid literal/length code",C.mode=uc;break e}break}}while(n<s&&r<o);b=g>>3,n-=b,g-=b<<3,f&=(1<<g)-1,e.next_in=n,e.next_out=r,e.avail_in=n<s?5+(s-n):5-(n-s),e.avail_out=r<o?257+(o-r):257-(r-o),C.hold=f,C.bits=g},mr=15,Tm=852,Am=592,Rm=0,Hu=1,Cm=2,X1=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Y1=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),q1=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Z1=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),K1=(i,e,t,n,s,r,a,o)=>{let c=o.bits,l=0,h=0,d=0,u=0,f=0,g=0,v=0,m=0,p=0,S=0,T,_,b,E,A,y=null,w,R=new Uint16Array(mr+1),C=new Uint16Array(mr+1),P=null,N,D,U;for(l=0;l<=mr;l++)R[l]=0;for(h=0;h<n;h++)R[e[t+h]]++;for(f=c,u=mr;u>=1&&R[u]===0;u--);if(f>u&&(f=u),u===0)return s[r++]=1<<24|64<<16|0,s[r++]=1<<24|64<<16|0,o.bits=1,0;for(d=1;d<u&&R[d]===0;d++);for(f<d&&(f=d),m=1,l=1;l<=mr;l++)if(m<<=1,m-=R[l],m<0)return-1;if(m>0&&(i===Rm||u!==1))return-1;for(C[1]=0,l=1;l<mr;l++)C[l+1]=C[l]+R[l];for(h=0;h<n;h++)e[t+h]!==0&&(a[C[e[t+h]]++]=h);if(i===Rm?(y=P=a,w=20):i===Hu?(y=X1,P=Y1,w=257):(y=q1,P=Z1,w=0),S=0,h=0,l=d,A=r,g=f,v=0,b=-1,p=1<<f,E=p-1,i===Hu&&p>Tm||i===Cm&&p>Am)return 1;for(;;){N=l-v,a[h]+1<w?(D=0,U=a[h]):a[h]>=w?(D=P[a[h]-w],U=y[a[h]-w]):(D=96,U=0),T=1<<l-v,_=1<<g,d=_;do _-=T,s[A+(S>>v)+_]=N<<24|D<<16|U|0;while(_!==0);for(T=1<<l-1;S&T;)T>>=1;if(T!==0?(S&=T-1,S+=T):S=0,h++,--R[l]===0){if(l===u)break;l=e[t+a[h]]}if(l>f&&(S&E)!==b){for(v===0&&(v=f),A+=d,g=l-v,m=1<<g;g+v<u&&(m-=R[g+v],!(m<=0));)g++,m<<=1;if(p+=1<<g,i===Hu&&p>Tm||i===Cm&&p>Am)return 1;b=S&E,s[b]=f<<24|g<<16|A-r|0}}return S!==0&&(s[A+S]=l-v<<24|64<<16|0),o.bits=f,0},Ta=K1,j1=0,E0=1,T0=2,{Z_FINISH:Im,Z_BLOCK:$1,Z_TREES:dc,Z_OK:ws,Z_STREAM_END:J1,Z_NEED_DICT:Q1,Z_STREAM_ERROR:Pi,Z_DATA_ERROR:A0,Z_MEM_ERROR:R0,Z_BUF_ERROR:ew,Z_DEFLATED:Pm}=vr,Sc=16180,Lm=16181,Dm=16182,Nm=16183,Um=16184,Fm=16185,Om=16186,Bm=16187,km=16188,zm=16189,yc=16190,Sn=16191,Vu=16192,Hm=16193,Gu=16194,Vm=16195,Gm=16196,Wm=16197,Xm=16198,fc=16199,pc=16200,Ym=16201,qm=16202,Zm=16203,Km=16204,jm=16205,Wu=16206,$m=16207,Jm=16208,bt=16209,C0=16210,I0=16211,tw=852,iw=592,nw=15,sw=nw,Qm=i=>(i>>>24&255)+(i>>>8&65280)+((i&65280)<<8)+((i&255)<<24);function rw(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}var Es=i=>{if(!i)return 1;let e=i.state;return!e||e.strm!==i||e.mode<Sc||e.mode>I0?1:0},P0=i=>{if(Es(i))return Pi;let e=i.state;return i.total_in=i.total_out=e.total=0,i.msg="",e.wrap&&(i.adler=e.wrap&1),e.mode=Sc,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(tw),e.distcode=e.distdyn=new Int32Array(iw),e.sane=1,e.back=-1,ws},L0=i=>{if(Es(i))return Pi;let e=i.state;return e.wsize=0,e.whave=0,e.wnext=0,P0(i)},D0=(i,e)=>{let t;if(Es(i))return Pi;let n=i.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Pi:(n.window!==null&&n.wbits!==e&&(n.window=null),n.wrap=t,n.wbits=e,L0(i))},N0=(i,e)=>{if(!i)return Pi;let t=new rw;i.state=t,t.strm=i,t.window=null,t.mode=Sc;let n=D0(i,e);return n!==ws&&(i.state=null),n},aw=i=>N0(i,sw),e0=!0,Xu,Yu,ow=i=>{if(e0){Xu=new Int32Array(512),Yu=new Int32Array(32);let e=0;for(;e<144;)i.lens[e++]=8;for(;e<256;)i.lens[e++]=9;for(;e<280;)i.lens[e++]=7;for(;e<288;)i.lens[e++]=8;for(Ta(E0,i.lens,0,288,Xu,0,i.work,{bits:9}),e=0;e<32;)i.lens[e++]=5;Ta(T0,i.lens,0,32,Yu,0,i.work,{bits:5}),e0=!1}i.lencode=Xu,i.lenbits=9,i.distcode=Yu,i.distbits=5},U0=(i,e,t,n)=>{let s,r=i.state;return r.window===null&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),n>=r.wsize?(r.window.set(e.subarray(t-r.wsize,t),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>n&&(s=n),r.window.set(e.subarray(t-n,t-n+s),r.wnext),n-=s,n?(r.window.set(e.subarray(t-n,t),0),r.wnext=n,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},lw=(i,e)=>{let t,n,s,r,a,o,c,l,h,d,u,f,g,v,m=0,p,S,T,_,b,E,A,y,w=new Uint8Array(4),R,C,P=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Es(i)||!i.output||!i.input&&i.avail_in!==0)return Pi;t=i.state,t.mode===Sn&&(t.mode=Vu),a=i.next_out,s=i.output,c=i.avail_out,r=i.next_in,n=i.input,o=i.avail_in,l=t.hold,h=t.bits,d=o,u=c,y=ws;e:for(;;)switch(t.mode){case Sc:if(t.wrap===0){t.mode=Vu;break}for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,w[0]=l&255,w[1]=l>>>8&255,t.check=Vt(t.check,w,2,0),l=0,h=0,t.mode=Lm;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){i.msg="incorrect header check",t.mode=bt;break}if((l&15)!==Pm){i.msg="unknown compression method",t.mode=bt;break}if(l>>>=4,h-=4,A=(l&15)+8,t.wbits===0&&(t.wbits=A),A>15||A>t.wbits){i.msg="invalid window size",t.mode=bt;break}t.dmax=1<<t.wbits,t.flags=0,i.adler=t.check=1,t.mode=l&512?zm:Sn,l=0,h=0;break;case Lm:for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.flags=l,(t.flags&255)!==Pm){i.msg="unknown compression method",t.mode=bt;break}if(t.flags&57344){i.msg="unknown header flags set",t.mode=bt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Vt(t.check,w,2,0)),l=0,h=0,t.mode=Dm;case Dm:for(;h<32;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,w[2]=l>>>16&255,w[3]=l>>>24&255,t.check=Vt(t.check,w,4,0)),l=0,h=0,t.mode=Nm;case Nm:for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Vt(t.check,w,2,0)),l=0,h=0,t.mode=Um;case Um:if(t.flags&1024){for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Vt(t.check,w,2,0)),l=0,h=0}else t.head&&(t.head.extra=null);t.mode=Fm;case Fm:if(t.flags&1024&&(f=t.length,f>o&&(f=o),f&&(t.head&&(A=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(n.subarray(r,r+f),A)),t.flags&512&&t.wrap&4&&(t.check=Vt(t.check,n,f,r)),o-=f,r+=f,t.length-=f),t.length))break e;t.length=0,t.mode=Om;case Om:if(t.flags&2048){if(o===0)break e;f=0;do A=n[r+f++],t.head&&A&&t.length<65536&&(t.head.name+=String.fromCharCode(A));while(A&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Vt(t.check,n,f,r)),o-=f,r+=f,A)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Bm;case Bm:if(t.flags&4096){if(o===0)break e;f=0;do A=n[r+f++],t.head&&A&&t.length<65536&&(t.head.comment+=String.fromCharCode(A));while(A&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Vt(t.check,n,f,r)),o-=f,r+=f,A)break e}else t.head&&(t.head.comment=null);t.mode=km;case km:if(t.flags&512){for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.wrap&4&&l!==(t.check&65535)){i.msg="header crc mismatch",t.mode=bt;break}l=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),i.adler=t.check=0,t.mode=Sn;break;case zm:for(;h<32;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}i.adler=t.check=Qm(l),l=0,h=0,t.mode=yc;case yc:if(t.havedict===0)return i.next_out=a,i.avail_out=c,i.next_in=r,i.avail_in=o,t.hold=l,t.bits=h,Q1;i.adler=t.check=1,t.mode=Sn;case Sn:if(e===$1||e===dc)break e;case Vu:if(t.last){l>>>=h&7,h-=h&7,t.mode=Wu;break}for(;h<3;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}switch(t.last=l&1,l>>>=1,h-=1,l&3){case 0:t.mode=Hm;break;case 1:if(ow(t),t.mode=fc,e===dc){l>>>=2,h-=2;break e}break;case 2:t.mode=Gm;break;case 3:i.msg="invalid block type",t.mode=bt}l>>>=2,h-=2;break;case Hm:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){i.msg="invalid stored block lengths",t.mode=bt;break}if(t.length=l&65535,l=0,h=0,t.mode=Gu,e===dc)break e;case Gu:t.mode=Vm;case Vm:if(f=t.length,f){if(f>o&&(f=o),f>c&&(f=c),f===0)break e;s.set(n.subarray(r,r+f),a),o-=f,r+=f,c-=f,a+=f,t.length-=f;break}t.mode=Sn;break;case Gm:for(;h<14;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.nlen=(l&31)+257,l>>>=5,h-=5,t.ndist=(l&31)+1,l>>>=5,h-=5,t.ncode=(l&15)+4,l>>>=4,h-=4,t.nlen>286||t.ndist>30){i.msg="too many length or distance symbols",t.mode=bt;break}t.have=0,t.mode=Wm;case Wm:for(;t.have<t.ncode;){for(;h<3;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.lens[P[t.have++]]=l&7,l>>>=3,h-=3}for(;t.have<19;)t.lens[P[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,R={bits:t.lenbits},y=Ta(j1,t.lens,0,19,t.lencode,0,t.work,R),t.lenbits=R.bits,y){i.msg="invalid code lengths set",t.mode=bt;break}t.have=0,t.mode=Xm;case Xm:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,S=m>>>16&255,T=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(T<16)l>>>=p,h-=p,t.lens[t.have++]=T;else{if(T===16){for(C=p+2;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(l>>>=p,h-=p,t.have===0){i.msg="invalid bit length repeat",t.mode=bt;break}A=t.lens[t.have-1],f=3+(l&3),l>>>=2,h-=2}else if(T===17){for(C=p+3;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}l>>>=p,h-=p,A=0,f=3+(l&7),l>>>=3,h-=3}else{for(C=p+7;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}l>>>=p,h-=p,A=0,f=11+(l&127),l>>>=7,h-=7}if(t.have+f>t.nlen+t.ndist){i.msg="invalid bit length repeat",t.mode=bt;break}for(;f--;)t.lens[t.have++]=A}}if(t.mode===bt)break;if(t.lens[256]===0){i.msg="invalid code -- missing end-of-block",t.mode=bt;break}if(t.lenbits=9,R={bits:t.lenbits},y=Ta(E0,t.lens,0,t.nlen,t.lencode,0,t.work,R),t.lenbits=R.bits,y){i.msg="invalid literal/lengths set",t.mode=bt;break}if(t.distbits=6,t.distcode=t.distdyn,R={bits:t.distbits},y=Ta(T0,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,R),t.distbits=R.bits,y){i.msg="invalid distances set",t.mode=bt;break}if(t.mode=fc,e===dc)break e;case fc:t.mode=pc;case pc:if(o>=6&&c>=258){i.next_out=a,i.avail_out=c,i.next_in=r,i.avail_in=o,t.hold=l,t.bits=h,W1(i,u),a=i.next_out,s=i.output,c=i.avail_out,r=i.next_in,n=i.input,o=i.avail_in,l=t.hold,h=t.bits,t.mode===Sn&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,S=m>>>16&255,T=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(S&&(S&240)===0){for(_=p,b=S,E=T;m=t.lencode[E+((l&(1<<_+b)-1)>>_)],p=m>>>24,S=m>>>16&255,T=m&65535,!(_+p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}l>>>=_,h-=_,t.back+=_}if(l>>>=p,h-=p,t.back+=p,t.length=T,S===0){t.mode=jm;break}if(S&32){t.back=-1,t.mode=Sn;break}if(S&64){i.msg="invalid literal/length code",t.mode=bt;break}t.extra=S&15,t.mode=Ym;case Ym:if(t.extra){for(C=t.extra;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=qm;case qm:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,S=m>>>16&255,T=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if((S&240)===0){for(_=p,b=S,E=T;m=t.distcode[E+((l&(1<<_+b)-1)>>_)],p=m>>>24,S=m>>>16&255,T=m&65535,!(_+p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}l>>>=_,h-=_,t.back+=_}if(l>>>=p,h-=p,t.back+=p,S&64){i.msg="invalid distance code",t.mode=bt;break}t.offset=T,t.extra=S&15,t.mode=Zm;case Zm:if(t.extra){for(C=t.extra;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){i.msg="invalid distance too far back",t.mode=bt;break}t.mode=Km;case Km:if(c===0)break e;if(f=u-c,t.offset>f){if(f=t.offset-f,f>t.whave&&t.sane){i.msg="invalid distance too far back",t.mode=bt;break}f>t.wnext?(f-=t.wnext,g=t.wsize-f):g=t.wnext-f,f>t.length&&(f=t.length),v=t.window}else v=s,g=a-t.offset,f=t.length;f>c&&(f=c),c-=f,t.length-=f;do s[a++]=v[g++];while(--f);t.length===0&&(t.mode=pc);break;case jm:if(c===0)break e;s[a++]=t.length,c--,t.mode=pc;break;case Wu:if(t.wrap){for(;h<32;){if(o===0)break e;o--,l|=n[r++]<<h,h+=8}if(u-=c,i.total_out+=u,t.total+=u,t.wrap&4&&u&&(i.adler=t.check=t.flags?Vt(t.check,s,u,a-u):Pa(t.check,s,u,a-u)),u=c,t.wrap&4&&(t.flags?l:Qm(l))!==t.check){i.msg="incorrect data check",t.mode=bt;break}l=0,h=0}t.mode=$m;case $m:if(t.wrap&&t.flags){for(;h<32;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.wrap&4&&l!==(t.total&4294967295)){i.msg="incorrect length check",t.mode=bt;break}l=0,h=0}t.mode=Jm;case Jm:y=J1;break e;case bt:y=A0;break e;case C0:return R0;case I0:default:return Pi}return i.next_out=a,i.avail_out=c,i.next_in=r,i.avail_in=o,t.hold=l,t.bits=h,(t.wsize||u!==i.avail_out&&t.mode<bt&&(t.mode<Wu||e!==Im))&&U0(i,i.output,i.next_out,u-i.avail_out),d-=i.avail_in,u-=i.avail_out,i.total_in+=d,i.total_out+=u,t.total+=u,t.wrap&4&&u&&(i.adler=t.check=t.flags?Vt(t.check,s,u,i.next_out-u):Pa(t.check,s,u,i.next_out-u)),i.data_type=t.bits+(t.last?64:0)+(t.mode===Sn?128:0)+(t.mode===fc||t.mode===Gu?256:0),(d===0&&u===0||e===Im)&&y===ws&&(y=ew),y},cw=i=>{if(Es(i))return Pi;let e=i.state;return e.window&&(e.window=null),i.state=null,ws},hw=(i,e)=>{if(Es(i))return Pi;let t=i.state;return(t.wrap&2)===0?Pi:(t.head=e,e.done=!1,ws)},uw=(i,e)=>{let t=e.length,n,s,r;return Es(i)||(n=i.state,n.wrap!==0&&n.mode!==yc)?Pi:n.mode===yc&&(s=1,s=Pa(s,e,t,0),s!==n.check)?A0:(r=U0(i,e,t,t),r?(n.mode=C0,R0):(n.havedict=1,ws))},dw=L0,fw=D0,pw=P0,mw=aw,gw=N0,_w=lw,yw=cw,xw=hw,vw=uw,Sw="pako inflate (from Nodeca project)",Mn={inflateReset:dw,inflateReset2:fw,inflateResetKeep:pw,inflateInit:mw,inflateInit2:gw,inflate:_w,inflateEnd:yw,inflateGetHeader:xw,inflateSetDictionary:vw,inflateInfo:Sw};function bw(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Mw=bw,F0=Object.prototype.toString,{Z_NO_FLUSH:ww,Z_FINISH:Ew,Z_OK:Na,Z_STREAM_END:qu,Z_NEED_DICT:Zu,Z_STREAM_ERROR:Tw,Z_DATA_ERROR:t0,Z_MEM_ERROR:Aw}=vr;function Ba(i){this.options=vc.assign({chunkSize:1024*64,windowBits:15,to:""},i||{});let e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(i&&i.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15)===0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new M0,this.strm.avail_out=0;let t=Mn.inflateInit2(this.strm,e.windowBits);if(t!==Na)throw new Error(bs[t]);if(this.header=new Mw,Mn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Da.string2buf(e.dictionary):F0.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=Mn.inflateSetDictionary(this.strm,e.dictionary),t!==Na)))throw new Error(bs[t])}Ba.prototype.push=function(i,e){let t=this.strm,n=this.options.chunkSize,s=this.options.dictionary,r,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Ew:ww,F0.call(i)==="[object ArrayBuffer]"?t.input=new Uint8Array(i):t.input=i,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(n),t.next_out=0,t.avail_out=n),r=Mn.inflate(t,a),r===Zu&&s&&(r=Mn.inflateSetDictionary(t,s),r===Na?r=Mn.inflate(t,a):r===t0&&(r=Zu));t.avail_in>0&&r===qu&&t.state.wrap>0&&i[t.next_in]!==0;)Mn.inflateReset(t),r=Mn.inflate(t,a);switch(r){case Tw:case t0:case Zu:case Aw:return this.onEnd(r),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||r===qu))if(this.options.to==="string"){let c=Da.utf8border(t.output,t.next_out),l=t.next_out-c,h=Da.buf2string(t.output,c);t.next_out=l,t.avail_out=n-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(r===Na&&o===0)){if(r===qu)return r=Mn.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Ba.prototype.onData=function(i){this.chunks.push(i)};Ba.prototype.onEnd=function(i){i===Na&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=vc.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function hd(i,e){let t=new Ba(e);if(t.push(i),t.err)throw t.msg||bs[t.err];return t.result}function Rw(i,e){return e=e||{},e.raw=!0,hd(i,e)}var Cw=Ba,Iw=hd,Pw=Rw,Lw=hd,Dw=vr,Nw={Inflate:Cw,inflate:Iw,inflateRaw:Pw,ungzip:Lw,constants:Dw},{Deflate:TC,deflate:AC,deflateRaw:RC,gzip:CC}=V1,{Inflate:Uw,inflate:IC,inflateRaw:PC,ungzip:LC}=Nw;var O0=Uw;var Mr="sky-paint-sdf-q16-xdelta-zlib-v1",ud="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Fw(i,e){if(typeof i!="string"||!i.length||i.length%4||i.length>Math.ceil(e/3)*4)throw Error("Invalid compressed field length");let t=i.endsWith("==")?2:i.endsWith("=")?1:0,n=i.length/4*3-t;if(n>e)throw Error("Compressed field exceeds its bounded input");let s=new Uint8Array(n),r=0;for(let a=0;a<i.length;a+=4){let o=Array.from(i.slice(a,a+4),c=>ud.indexOf(c));for(let c=0;c<4;c++)if(o[c]<0&&!(a+4===i.length&&c>=4-t&&i[a+c]==="="))throw Error("Invalid compressed field base64");s[r++]=o[0]<<2|o[1]>>>4,r<n&&(s[r++]=(o[1]&15)<<4|o[2]>>>2),r<n&&(s[r++]=(o[2]&3)<<6|o[3])}if(t===2&&ud.indexOf(i.at(-3))&15||t===1&&ud.indexOf(i.at(-2))&3)throw Error("Noncanonical compressed field padding");return s}function B0(i){if(!Zn.includes(i?.resolution))throw Error("Compressed field resolution must be49 or65");let e=i.resolution**3*2,t=Fw(i.data,e+1024),n=new Uint8Array(e),s=0,r=new O0({windowBits:15,chunkSize:16384});if(r.onData=l=>{if(s+l.length>e)throw Error("Compressed field expands beyond its author grid");n.set(l,s),s+=l.length},!r.push(t,!0)||r.err||!r.ended||s!==e||r.strm.avail_in!==0||r.strm.total_in!==t.length)throw Error("Invalid, truncated or trailing compressed field data");let o=new Int16Array(e/2),c=0;for(let l=0;l<o.length;l++)l%i.resolution===0&&(c=0),o[l]=c+(n[l*2]|n[l*2+1]<<8),c=o[l];return o}var bc=i=>({sculptFields:i.version>=24?8:3,bytes:i.version>=24?4194304:1048576});var za="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Mc=Uint8Array.from(za,i=>i.charCodeAt(0)),ka=new Int16Array(128).fill(-1);for(let i=0;i<za.length;i++)ka[za.charCodeAt(i)]=i;var k0="sky-paint-sdf-q16-v1";function dd(i,e){if(!(i instanceof Int16Array)||i.length!==e**3)throw Error(`Field requires ${e}\xB3 signed16 samples`);for(let t=0;t<e;t++)for(let n=0;n<e;n++)for(let s=0;s<e;s++){let r=i[s+n*e+t*e*e];if(r===-32768||(s===0||n===0||t===0||s===e-1||n===e-1||t===e-1)&&r<=0)throw Error("Field samples require positive boundaries and quantization within \xB132767")}}function wc(i){if(!Zn.includes(i.n))throw Error("Field resolution must be 49 or 65");ys(i.bounds),dd(i.values,i.n);let e=new Uint8Array(i.n**3*2);for(let r=0;r<i.values.length;r++){let a=i.values[r]&65535;e[r*2]=a&255,e[r*2+1]=a>>>8}let t=new Uint8Array(Math.ceil(e.length/3)*4),n=0;for(let r=0;r<e.length;r+=3){let a=e[r],o=e[r+1]??0,c=e[r+2]??0;t[n++]=Mc[a>>>2],t[n++]=Mc[(a&3)<<4|o>>>4],t[n++]=r+1<e.length?Mc[(o&15)<<2|c>>>6]:61,t[n++]=r+2<e.length?Mc[c&63]:61}let s=new TextDecoder("utf-8",{fatal:!0}).decode(t);return{format:k0,resolution:i.n,bounds:structuredClone(i.bounds),data:s}}function nn(i){if(i?.format===Mr){if(typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==4||!Zn.includes(i.resolution))throw Error("Malformed compressed sculpt field");ys(i.bounds);let r=B0(i);return dd(r,i.resolution),{n:i.resolution,bounds:structuredClone(i.bounds),values:r}}if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==4||i.format!==k0||!Zn.includes(i.resolution)||typeof i.data!="string")throw Error("Malformed sculpt field");ys(i.bounds);let e=i.resolution**3*2;if(i.data.length!==Math.ceil(e/3)*4||!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i.data))throw Error("Incorrect field encoding or length");if(e%3===2?!i.data.endsWith("=")||i.data.endsWith("==")||(za.indexOf(i.data.at(-2))&3)!==0:!i.data.endsWith("==")||(za.indexOf(i.data.at(-3))&15)!==0)throw Error("Noncanonical field encoding");let t=new Uint8Array(e),n=0;for(let r=0;r<i.data.length;r+=4){let a=ka[i.data.charCodeAt(r)],o=ka[i.data.charCodeAt(r+1)],c=ka[i.data.charCodeAt(r+2)],l=ka[i.data.charCodeAt(r+3)];t[n++]=a<<2|o>>>4,n<e&&(t[n++]=(o&15)<<4|c>>>2),n<e&&(t[n++]=(c&3)<<6|l)}let s=new Int16Array(i.resolution**3);for(let r=0;r<s.length;r++)s[r]=(t[r*2]|t[r*2+1]<<8)<<16>>16;return dd(s,i.resolution),{n:i.resolution,bounds:structuredClone(i.bounds),values:s}}function Ts(i,e=0,t){if(typeof e!="number"||!Number.isFinite(e)||e<0||e>1)throw Error("Field support threshold must be between0 and1");let{n,bounds:s,values:r}=t??nn(i),a=[n,n,n],o=[-1,-1,-1],c=e*vn;for(let h=0;h<n;h++)for(let d=0;d<n;d++)for(let u=0;u<n;u++)r[u+d*n+h*n*n]<=c&&(a[0]=Math.min(a[0],u),a[1]=Math.min(a[1],d),a[2]=Math.min(a[2],h),o[0]=Math.max(o[0],u),o[1]=Math.max(o[1],d),o[2]=Math.max(o[2],h));if(o[0]<0){let h=s.lo.map((d,u)=>(d+s.hi[u])/2);return{lo:h.map(d=>d-.05),hi:h.map(d=>d+.05),empty:!0}}let l=s.hi.map((h,d)=>(h-s.lo[d])/(n-1));return{lo:a.map((h,d)=>s.lo[d]+h*l[d]-(h===0?Math.max(l[d],e):l[d])),hi:o.map((h,d)=>s.lo[d]+h*l[d]+(h===n-1?Math.max(l[d],e):l[d]))}}var es=class{constructor(e){this.entries=new Map(e?.entries??[])}key(e,t){return JSON.stringify([e.n,e.bounds,t])}get(e,t){let n=this.key(e,t),s=this.entries.get(n)??va(e,t);for(this.entries.delete(n),this.entries.set(n,s);this.entries.size>lc;)this.entries.delete(this.entries.keys().next().value);return s}retain(e,t){let n=new Set(t.map(s=>this.key(e,s)));for(let s of this.entries.keys())n.has(s)||this.entries.delete(s)}info(){return{snapshots:this.entries.size,bytes:[...this.entries.values()].reduce((e,t)=>e+t.values.byteLength,0)}}};var Ow=4,Bw=64,kw=2048,zi="sky-paint-sculpt-program-v1";function fd(i,e,t){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(n=>!Object.hasOwn(i,n)))throw Error(`Malformed sculpt ${t}`)}function z0(i,e){if(!Number.isSafeInteger(i)||i<1||i>1e6||e.has(i))throw Error("Sculpt IDs must be unique positive integers");e.add(i)}var pd=(i,e,t)=>typeof i=="number"&&Number.isFinite(i)&&i>=e&&i<=t;function As(i,e=23){if(fd(i,["format","base","layers",...e>=19&&Object.hasOwn(i??{},"protection")?["protection"]:[]],"program"),i.format!==zi)throw Error("Unsupported sculpt program");if(i.base?.format!=="sky-paint-sdf-q16-v1"&&!(e>=23&&i.base?.format===Mr))throw Error("Sculpt program requires one flat base field");if(nn(i.base),!Array.isArray(i.layers)||i.layers.length>Ow)throw Error("Sculpt supports at most four layers");let t=new Set,n=new Set,s=0,r=0;for(let a of i.layers){if(fd(a,["id","name","enabled","strokes"],"layer"),z0(a.id,t),typeof a.name!="string"||!a.name.trim()||a.name.length>80||typeof a.enabled!="boolean"||!Array.isArray(a.strokes))throw Error("Invalid sculpt layer properties");for(let o of a.strokes){let c=_s.includes(o?.mode),l=Object.hasOwn(o??{},"symmetry");if(fd(o,["id","mode","radius","gain","centers",...e>=17&&c?["plane"]:[],...e>=18&&l?["symmetry"]:[],...e>=19&&Object.hasOwn(o??{},"protectionId")?["protectionId"]:[]],"stroke"),z0(o.id,n),!["add","carve","smooth",...e>=15?Ru:[],...e>=17?_s:[]].includes(o.mode)||!pd(o.radius,.08,1.5)||!pd(o.gain,0,1)||!Array.isArray(o.centers)||!o.centers.length)throw Error("Invalid sculpt stroke properties");l&&Du(o.symmetry);let h=o.centers.length*xa(o);if(s+h>kw||r+1>Bw)throw Error("Sculpt layer edit budget reached; flatten explicitly or remove strokes");for(let d of o.centers)if(!Array.isArray(d)||d.length!==3||d.some(u=>!pd(u,-24,24)))throw Error("Sculpt centers require three finite rest coordinates within \xB124");c&&nc(o.plane),s+=h,r++}}return gm(i),structuredClone(i)}function md(i){return i.layers.filter(e=>e.enabled).flatMap(e=>e.strokes.flatMap(t=>t.centers.map(n=>({mode:t.mode,radius:t.radius,gain:t.gain,center:n,...t.plane?{plane:t.plane}:{},...t.symmetry?{symmetry:t.symmetry}:{},...Object.hasOwn(t,"protectionId")?{protection:pm(i,t.protectionId)}:{}}))))}function H0(i){let e=As(i),t=new es,n=new Map,s=nn(e.base);for(let r of md(e))r.protection&&!n.has(r.protection.id)&&n.set(r.protection.id,t.get(s,r.protection)),s=cc(s,r.center,r.radius,r.gain,r.mode,r.plane,r.symmetry,r.protection?n.get(r.protection.id):void 0);return wc(s)}var zw=3,Hw=10,Ha=128,Vw=(i,e,t)=>typeof i=="number"&&Number.isFinite(i)&&i>=e&&i<=t;function wn(i,e){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(t=>!Object.hasOwn(i,t)))throw Error("Malformed cloud recipe fields")}function wi(i,e,t){if(!Vw(i,e,t))throw Error(`Recipe number must be between ${e} and ${t}`)}function wr(i){if(typeof i!="boolean")throw Error("Recipe enabled flag must be boolean")}function Gw(i=2){let e={strokes:[],detail:{enabled:!0,seed:4831,count:2,scale:.48},billow:{enabled:!0,strength:.12},erosion:{enabled:!0},base:{enabled:!1,height:-.6},profile:{feather:.18}};return i>=3&&(e.structure={enabled:!0,spread:1,upBias:.15,intersections:.6},e.sculpt=[],Object.assign(e.profile,{edgeGamma:1,interiorVariation:1})),i>=5&&(e.masks=[],e.masses=[]),i>=6&&(e.layers=[]),i>=7&&(e.massMode="ordered",e.geometryLayers=[{id:1,name:"Shape 1",enabled:!0}]),i>=8&&(e.character=ga()),i>=9&&(e.field=null),e}function Va(i,e=2){if(wn(i,["strokes","detail","billow","erosion","base","profile",...e>=3?["structure","sculpt"]:[],...e>=5?["masks","masses"]:[],...e>=6?["layers"]:[],...e>=7?["massMode","geometryLayers"]:[],...e>=8?["character"]:[],...e>=9?["field"]:[]]),!Array.isArray(i.strokes)||i.strokes.length>zw)throw Error("Recipe supports at most three strokes");let t=new Set;for(let n of i.strokes){if(wn(n,["id","enabled","points"]),wr(n.enabled),!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Stroke IDs must be unique");if(t.add(n.id),!Array.isArray(n.points)||n.points.length<2||n.points.length>Hw)throw Error("Stroke requires 2\u201310 control points");let s=new Set;for(let r of n.points){if(wn(r,["id","position","radius"]),!Number.isSafeInteger(r.id)||r.id<1||r.id>1e6||s.has(r.id))throw Error("Point IDs must be unique within a stroke");if(s.add(r.id),!Array.isArray(r.position)||r.position.length!==3)throw Error("Point requires three coordinates");r.position.forEach(a=>wi(a,-2.5,2.5)),wi(r.radius,.08,.9)}}if(wn(i.detail,["enabled","seed","count","scale"]),wr(i.detail.enabled),wi(i.detail.seed,0,65535),wi(i.detail.count,0,2),wi(i.detail.scale,.2,.75),!Number.isInteger(i.detail.seed)||!Number.isInteger(i.detail.count))throw Error("Detail seed and count must be integers");if(wn(i.billow,["enabled","strength"]),wr(i.billow.enabled),wi(i.billow.strength,0,.3),wn(i.erosion,["enabled"]),wr(i.erosion.enabled),wn(i.base,["enabled","height"]),wr(i.base.enabled),wi(i.base.height,-2.5,2.5),wn(i.profile,["feather",...e>=3?["edgeGamma","interiorVariation"]:[]]),wi(i.profile.feather,.08,.6),e>=3&&(wn(i.structure,["enabled","spread","upBias","intersections"]),wr(i.structure.enabled),wi(i.structure.spread,.6,1.1),wi(i.structure.upBias,-.8,.8),wi(i.structure.intersections,0,1),wi(i.profile.edgeGamma,.5,3),wi(i.profile.interiorVariation,0,1),Bp(i.sculpt,e>=9&&i.field?om:8)),e>=5&&(zp(i.masks,e>=9&&i.field?Pu:8),$p(i.masses,e)),e>=6&&qp(i.layers,e>=9&&i.field?Pu:8,e),e>=7){if(!["grouped","ordered"].includes(i.massMode))throw Error("Invalid mass composition mode");Qp(i.geometryLayers,i.masses)}if(e>=8&&tm(i.character),e>=9&&i.field!==null){if(e<23&&(i.field.base??i.field).format===Mr)throw Error("Compressed field storage requires scene v23");if(e>=11&&i.field.format===zi?As(i.field,e):nn(i.field),e<16&&(i.field?.base??i.field)?.resolution!==49)throw Error("Fine sculpt fields require scenev16");if(i.strokes.length||i.masses.length||i.geometryLayers.length||i.detail.enabled||i.structure.enabled)throw Error("Sculpt field cannot also contain editable parametric geometry or secondary lobes")}return structuredClone(i)}function V0(i,e=2){let t=Gw(e),n={bank:[[[-1.6,0,0],[-.8,.13,0],[0,.05,0],[.8,.1,0],[1.6,-.02,0]]],tower:[[[0,-.85,0],[-.1,-.25,0],[.15,.4,0],[0,1.05,0]]],anvil:[[[-.2,-1,0],[-.1,-.35,0],[0,.35,0]],[[-1.5,.7,0],[-.75,.85,0],[0,.85,0],[.8,.82,0],[1.6,.7,0]]]};if(!n[i])throw Error("Unknown cloud starter");let s={bank:[[.28,.5,.62,.48,.28]],tower:[[.7,.72,.6,.48]],anvil:[[.62,.7,.64],[.3,.55,.7,.55,.3]]};return t.strokes=n[i].map((r,a)=>({id:a+1,enabled:!0,points:r.map((o,c)=>({id:c+1,position:o,radius:s[i][a][c]}))})),t.base.enabled=i==="bank",t.base.height=-.35,Va(t,e)}function Ww(i){let e=i>>>0;return()=>(e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e^=e>>>16,(e>>>0)/4294967296)}function Ga(i,e=!1){let t=[],n=[];for(let r of i.strokes.filter(a=>a.enabled)){for(let a=1;a<r.points.length;a++)t.push({a:r.points[a-1],b:r.points[a],stage:0,strokeId:r.id});if(i.detail.enabled)for(let a of r.points){let o=Ww(i.detail.seed^Math.imul(r.id,104729)^Math.imul(a.id,19349663));for(let c=0;c<i.detail.count;c++){let l=o()*Math.PI*2,h=o()*1.3-.25,d=i.structure?.enabled?Math.max(-1,Math.min(1,h+i.structure.upBias)):h,u=Math.sqrt(1-Math.min(1,d*d)),f=a.radius*i.detail.scale*(.8+o()*.4),g=a.radius*(i.structure?.enabled?i.structure.spread:.8),m={position:a.position.map((p,S)=>p+[Math.cos(l)*u,d,Math.sin(l)*u][S]*g),radius:f};n.push({a:m,b:m,stage:1})}}}let s=t.concat(i.massMode==="ordered"&&!e?[]:Jp(fr(i)));return{segments:s.concat(n,jp(i,t)),primaryCount:s.length}}function G0(i){let e=0,{segments:t}=Ga(i,!0);for(let{a:n,b:s}of t)for(let r of[n,s])e=Math.max(e,Math.hypot(...r.position)+r.radius);return e+.02*Math.max(0,t.length-1)+(i.billow.enabled?i.billow.strength:0)}function Ec(i,e=4){let t=i.recipe?.layers?{...i.recipe,layers:i.recipe.layers.map(({name:n,...s})=>s),...i.recipe.geometryLayers?{geometryLayers:i.recipe.geometryLayers.map(({name:n,...s})=>s)}:{}}:i.recipe;return JSON.stringify([t,i.noiseScale,i.seed,i.displacement,i.smear,i.erosion,e])}function Hi(i,e=4,t=Ts){let n,s,r;if(i.recipe.field){let o=i.recipe.field.format===zi?H0(i.recipe.field):i.recipe.field,c=t(o,e>=2?Au(i.recipe):0);n=[...c.lo],s=[...c.hi],r=e>=2?.04:0}else{let{segments:o,primaryCount:c}=Ga(i.recipe,!0),l=e===0?o.slice(0,c):o;if(!l.length)return{lo:[-.1,-.1,-.1],hi:[.1,.1,.1]};n=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0];for(let{a:h,b:d}of l)for(let u of[h,d])for(let f=0;f<3;f++)n[f]=Math.min(n[f],u.position[f]-u.radius),s[f]=Math.max(s[f],u.position[f]+u.radius);r=.02*Math.max(0,l.length-1)+(e>=2?Au(i.recipe):0)+.04}for(let o=0;o<3;o++)n[o]-=r,s[o]+=r;if(e>=2){let o=Math.abs(i.smear)*Math.max(n[1]**2,s[1]**2);n[0]-=o,s[0]+=o;let c=nm(i);for(let l=0;l<3;l++)n[l]-=c[l],s[l]+=c[l]}let a=kp(i.recipe.sculpt);for(let o=0;o<3;o++)n[o]-=a,s[o]+=a;return{lo:n,hi:s}}function ni(i){return i.shapeScale?i.size.map((e,t)=>e*i.shapeScale[t]):i.size}function W0(i,e){return[0,1,2].every(t=>(i.shapeScale?.[t]??1)===(e?.[t]??1))?i.size:ni(i).map((t,n)=>t/(e?.[n]??1))}function X0(i){return{min:[0,1,2].map(e=>.2/(i.shapeScale?.[e]??1)),max:[0,1,2].map(e=>30/(i.shapeScale?.[e]??1))}}function Y0(i,e){let{min:t,max:n}=X0(i);return e.map((s,r)=>Math.max(t[r],Math.min(n[r],s)))}function q0(i){let e=i.shapeScale;if(!Array.isArray(e)||e.length!==3||Array.from(e).some(s=>typeof s!="number"||!Number.isFinite(s)||s<.2||s>30))throw Error("Applied shape scale requires three finite dimensions from 0.2 to 30");let{min:t,max:n}=X0(i);if(!Array.isArray(i.size)||i.size.length!==3||Array.from(i.size).some((s,r)=>typeof s!="number"||!Number.isFinite(s)||s<t[r]||s>n[r]))throw Error("Combined shape and object scale must remain between 0.2 and 30");return e}var Z0=[64,96,128,192,256];function K0(i,e,t){let n=e?.densityResolution??64,s=e?.densityLink??0;if(!Z0.includes(n)||![0,8,16,32,64].includes(s))throw Error("Invalid density resolution policy");let r=ni(i),a=t.lo.map((l,h)=>(t.hi[h]-l)*r[h]);if(a.some(l=>!Number.isFinite(l)||l<=0))throw Error("Invalid density support");let o=s?Math.ceil(Math.max(...a)*s):n,c=s?Z0.find(l=>l>=o&&l<=n)??n:n;return{resolution:c,requested:o,capped:!!s&&o>n,worldSpacing:a.map(l=>l/c),targetTexelsPerUnit:s,extent:a}}var Xw="precision highp float;in vec3 position;out vec2 vUV;void main(){vUV=position.xy*0.5+0.5;gl_Position=vec4(position.xy,0,1);}",Yw=`precision highp float;precision highp sampler3D;precision highp sampler2D;
in vec2 vUV;out vec4 outColor;
uniform sampler3D uNoise;uniform sampler2D uScaffold;
uniform sampler2D uSculpt;uniform int uSculptCount[8];
uniform vec4 uRecipeInfo[8],uRecipeFlags[8],uForm[8],uWarp[8],uProfile[8];
uniform int uSolo,uInspect,uCookIndex,uSolidCuts[8];uniform float uSolidCutFeather;uniform float uSlice;
uniform vec3 uCookLo,uCookHi;uniform float uCookScale;
${hr}
${ur}
${ec}
void main(){int i=uCookIndex;vec3 q=mix(uCookLo,uCookHi,vec3(vUV,uSlice));
q=sculptPoint(q,i);
#if SKY_SOURCE_FIELD && SKY_SOLID_CUTS
if(uSolidCuts[i]==1&&i==uSourceFieldIndex){float d=sourceFieldDistance(q);outColor=vec4(1.0-smoothstep(-uSolidCutFeather,uSolidCutFeather,d),0,0,1);return;}
#endif
vec3 coord=q*uForm[i].x*4.0+vec3(uWarp[i].z);vec4 n=texture(uNoise,coord);
outColor=vec4(recipeDensity(q,coord,n,i)/(uForm[i].z*uCookScale),0,0,1);}`,Tc=class{constructor(e,t,n,s){this.renderer=e,this.uniforms=t,this.fieldSupport=n,this.fieldSource=s,this.entries=new Map,this.enabled=!0,this.cooks=0,this.size=64,this.format=e.extensions.has("EXT_color_buffer_float")?"R16F":"R8",this.type=this.format==="R16F"?Zt:ot,this.fallback=new Jt(new Uint8Array(1),1,1,1),Object.assign(this.fallback,{format:qi,type:ot,unpackAlignment:1,needsUpdate:!0}),this.cookUniforms={...t,uCookIndex:{value:0},uSlice:{value:0},uCookLo:{value:new I},uCookHi:{value:new I},uCookScale:{value:1.35},uSolidCutFeather:{value:.01}},this.material=new oi({uniforms:this.cookUniforms,vertexShader:Xw,fragmentShader:Yw,defines:{SKY_STUDIO_FIELD:0,SKY_SOURCE_FIELD:0},glslVersion:Si,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.pass=new ai,this.pass.add(new re(new _i(2,2),this.material)),this.camera=new vi}prune(e,t,n){let s=new Set(e.filter(r=>r.recipe).map(r=>`${r.id}:final`));t>=0&&t<e.length&&n<4&&e[t].recipe&&s.add(`${e[t].id}:inspect`);for(let[r,a]of this.entries)s.has(r)||(a.target.dispose(),this.entries.delete(r))}target(e){return new dn(e,e,e,{format:qi,type:this.type,minFilter:Je,magFilter:Je,depthBuffer:!1,stencilBuffer:!1})}ensure(e,t=!1){let n={...ms(this.version??0),SKY_SOLID_CUTS:this.policy?.cutMode==="solid"?1:0};Object.keys(n).some(d=>this.material.defines[d]!==n[d])&&(Object.assign(this.material.defines,n),this.material.needsUpdate=!0);let s=e.some(d=>d.recipe?.character?.enabled)?1:0,r=e.some(d=>d.recipe?.field)?1:0,a=e.some(gs)?1:0,o=e.some(da)?1:0;(this.material.defines.SKY_STUDIO_FIELD!==s||this.material.defines.SKY_SOURCE_FIELD!==r||this.material.defines.SKY_SOFTNESS_PAINT!==a||this.material.defines.SKY_PAINT_HARDNESS!==o)&&(Object.assign(this.material.defines,{SKY_STUDIO_FIELD:s,SKY_SOURCE_FIELD:r,SKY_SOFTNESS_PAINT:a,SKY_PAINT_HARDNESS:o}),this.material.needsUpdate=!0);let c=this.uniforms,l=c.uSolo.value,h=c.uInspect.value;this.prune(e,l,h);for(let d=0;d<8;d++)c[`uDensity${d}`].value=this.fallback,c.uCached.value[d]=0;if(this.enabled)for(let d=0;d<e.length;d++){let u=e[d];if(!u.recipe)continue;let f=this.policy?.cutMode==="solid"&&u.role==="cut"&&!!u.recipe.field,g=l===d?h:4,v=`${u.id}:${g<4?"inspect":"final"}`,m=Ec(u,g)+(this.policy?.cutMode==="solid"&&u.role==="cut"&&u.recipe.field?"|solid-cut":""),p=this.entries.get(v),S=p?.key===m?p.bounds:Hi(u,f?1:g,this.fieldSupport),T=K0(u,this.policy??{densityResolution:this.size},S),_=t?p?.key===m?p.size:32:T.resolution;if(p&&p.size!==_&&(p.target.dispose(),this.entries.delete(v),p=null),p||(p={target:this.target(_),key:null,size:_},this.entries.set(v,p)),p.grid={...T,resolution:_,worldSpacing:T.extent.map(b=>b/_),capped:!!T.targetTexelsPerUnit&&T.requested>_},p.key!==m)try{p.scale=Eu(u.recipe.layers),this.cook(p.target,d,S,p.scale),p.key=m,p.bounds=S,this.cooks++}catch(b){if(this.format==="R16F")return this.useBytes(),this.ensure(e,t);this.error=b.message,this.enabled=!1,this.clear();for(let E=0;E<8;E++)c.uCached.value[E]=0,c[`uDensity${E}`].value=this.fallback;return}c[`uDensity${d}`].value=p.target.texture,c.uCached.value[d]=1,c.uCacheLo.value[d].set(...S.lo,p.scale),c.uCacheHi.value[d].set(...S.hi,0)}}cook(e,t,n,s=1.35){let r=this.renderer,a=r.getRenderTarget(),o=r.getActiveCubeFace(),c=r.getActiveMipmapLevel();this.cookUniforms.uCookIndex.value=t,this.cookUniforms.uCookLo.value.fromArray(n.lo),this.cookUniforms.uCookHi.value.fromArray(n.hi),this.cookUniforms.uCookScale.value=s,this.cookUniforms.uSolidCutFeather.value=Math.max(...n.lo.map((l,h)=>n.hi[h]-l))/(e.width-1);try{this.fieldSource?.bindCook(t);for(let l=0;l<e.depth;l++){if(this.cookUniforms.uSlice.value=(l+.5)/e.depth,r.setRenderTarget(e,l),l===0&&r.getContext().checkFramebufferStatus(r.getContext().FRAMEBUFFER)!==r.getContext().FRAMEBUFFER_COMPLETE)throw Error(`Density ${this.format} framebuffer is incomplete`);r.render(this.pass,this.camera)}}finally{this.fieldSource?.restoreBinding(),r.setRenderTarget(a,o,c)}}clear(){for(let e of this.entries.values())e.target.dispose();this.entries.clear()}setResolution(e){if(this.size!==e){if(![64,96,128,192,256].includes(e))throw Error("Unsupported density resolution");this.clear(),this.size=e}}useBytes(){this.clear(),this.type=ot,this.format="R8"}info(){return{enabled:this.enabled,error:this.error??null,resolution:this.size,format:this.format,cooks:this.cooks,targets:this.entries.size,entries:Array.from(this.entries,([e,t])=>({id:e,resolution:t.size,...this.policy?.densityLink?{grid:t.grid}:{}})),storageBytes:Array.from(this.entries.values()).reduce((e,t)=>e+t.size**3*(this.type===Zt?2:1),0)}}};function j0(i,e,t,n){let s=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^n;return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967295}var Ac=(i,e)=>(i%e+e)%e;function Wa(i,e,t,n,s){let r=[i*n,e*n,t*n],a=r.map(Math.floor),c=r.map((h,d)=>h-a[d]).map(h=>h*h*(3-2*h)),l=0;for(let h=0;h<2;h++)for(let d=0;d<2;d++)for(let u=0;u<2;u++)l+=j0(Ac(a[0]+u,n),Ac(a[1]+d,n),Ac(a[2]+h,n),s)*(u?c[0]:1-c[0])*(d?c[1]:1-c[1])*(h?c[2]:1-c[2]);return l}function qw(i,e,t,n,s){let r=[i*n,e*n,t*n],a=r.map(Math.floor),o=10;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){let d=[a[0]+h,a[1]+l,a[2]+c],u=d.map(g=>Ac(g,n)),f=d.map((g,v)=>g+j0(...u,s+v*101));o=Math.min(o,Math.hypot(r[0]-f[0],r[1]-f[1],r[2]-f[2]))}return 1-Math.min(1,o/1.2)}function $0(i=42){let e=new Uint8Array(131072),t=0;for(let n=0;n<32;n++)for(let s=0;s<32;s++)for(let r=0;r<32;r++){let a=[r/32,s/32,n/32],o=Wa(...a,2,i)*.57+Wa(...a,4,i+1)*.29+Wa(...a,8,i+2)*.14;e[t++]=Math.round(o*255),e[t++]=Math.round(qw(...a,5,i)*255),e[t++]=Math.round(Wa(...a,4,i+37)*255),e[t++]=Math.round(Wa(...a,4,i+73)*255)}return{size:32,data:e}}var sn=i=>!!i.tilt?.some(e=>e!==0);function gd(i){let e=(i.tilt?.[0]??0)*Math.PI/180,t=i.yaw*Math.PI/180,n=(i.tilt?.[1]??0)*Math.PI/180,s=Math.cos(e),r=Math.sin(e),a=Math.cos(t),o=Math.sin(t),c=Math.cos(n),l=Math.sin(n);return[a*c,-a*l,o,s*l+r*c*o,s*c-r*l*o,-r*a,r*l-s*c*o,r*c+s*l*o,s*a]}function J0(i,e){let t=gd(i);return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t[3]*e[0]+t[4]*e[1]+t[5]*e[2],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]]}function Q0(i){let e=i.azimuth*Math.PI/180,t=i.elevation*Math.PI/180;return[Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)]}function Xa(i,e){let t=ni(i);if(!i.recipe)return Math.hypot(...t)*(1.5+i.displacement+Math.abs(i.smear));let n=G0(i.recipe),s=i.displacement*.5,r=Hi(i,4,e),a=Math.hypot(...r.lo.map((o,c)=>Math.max(Math.abs(o),Math.abs(r.hi[c]))*t[c]));return Math.max(a,Math.max(...t)*(n+Math.sqrt(3)*s+Math.abs(i.smear)*(n+s)**2))}function Ya(i,e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let s of i.volumes.filter(r=>r.enabled&&r.role==="add")){let r=Xa(s,e);for(let a=0;a<3;a++)t[a]=Math.min(t[a],s.position[a]-r),n[a]=Math.max(n[a],s.position[a]+r)}return t[0]===1/0?{lo:[0,0,0],hi:[0,0,0]}:{lo:t,hi:n}}var eg=`precision highp float;\r
precision highp sampler2D;\r
#if SKY_PAINT_SCULPT_PROTECTION || SKY_SOURCE_BRUSH_PREVIEW\r
precision highp sampler3D;\r
#endif\r
in vec3 vLocalPosition,vSourceNormal;\r
out vec4 outColor;\r
uniform sampler2D uSculpt;\r
uniform int uSculptCount[8];\r
uniform int uSourceIndex,uPaintLayer;\r
#if SKY_SOURCE_SHAPE_SCALE\r
uniform vec3 uSourceShapeScale;\r
#define SOURCE_POSITION (vLocalPosition/uSourceShapeScale)\r
#else\r
#define SOURCE_POSITION vLocalPosition\r
#endif\r
#if SKY_PAINT_SCULPT_PROTECTION\r
/* SCULPT_PROTECTION */\r
#endif\r
/* SCULPT_FIELD */\r
/* MODIFIER_FIELDS */\r
/* BRUSH_INFLUENCE */\r
#if SKY_SOURCE_BRUSH_PREVIEW\r
#define SOURCE_REST_POSITION sourceRest\r
#else\r
#define SOURCE_REST_POSITION sculptPoint(SOURCE_POSITION,uSourceIndex)\r
#endif\r
vec3 toSrgb(vec3 c){return mix(c*12.92,1.055*pow(max(c,vec3(0)),vec3(1.0/2.4))-0.055,step(vec3(0.0031308),c));}\r
void main(){\r
#if SKY_SOURCE_BRUSH_PREVIEW\r
  bool needRest=uBrushFlags.x>0.5||uPaintLayer>=0;\r
#if SKY_PAINT_SCULPT_PROTECTION\r
  needRest=needRest||uShowMassProtection==1;\r
#endif\r
  vec3 sourceRest=needRest?sculptPoint(SOURCE_POSITION,uSourceIndex):SOURCE_POSITION;\r
#endif\r
  vec3 n=normalize(vSourceNormal),light=normalize(vec3(-0.35,0.75,0.6));\r
  float shade=0.28+0.65*max(dot(n,light),0.0);\r
  vec3 color=vec3(0.48,0.55,0.6)*shade;\r
  if(uPaintLayer>=0){\r
    float coverage=paintCoverage(SOURCE_REST_POSITION,uSourceIndex,uPaintLayer);\r
    color=mix(vec3(0.04,0.2,0.3),vec3(1.0,0.4,0.06),coverage)*shade;\r
  }\r
#if SKY_PAINT_SCULPT_PROTECTION\r
  if(uShowMassProtection==1){\r
    float coverage=massProtectionCoverage(SOURCE_REST_POSITION);\r
    color=mix(vec3(0.48,0.55,0.6),vec3(0.7,0.12,0.42),coverage)*shade;\r
  }\r
#endif\r
#if SKY_SOURCE_BRUSH_PREVIEW\r
  color=showBrushInfluence(color,SOURCE_POSITION,sourceRest);\r
#endif\r
  outColor=vec4(toSrgb(color),1);\r
}\r
`;function tg(i,e,t,n){return t.length===n.length&&i.length===e.length&&i.every((s,r)=>s===e[r])}function ig(i,e){if(i.length!==e.length)throw Error("Mesh buffer sizes differ");let t=-1,n=-1,s=0;for(let r=0;r<i.length;r++)i[r]!==e[r]&&(t<0&&(t=r),n=r,s++);return{changed:s,start:t,count:t<0?0:n-t+1}}function Rc(i,e){i.rotation.set((e.tilt?.[0]??0)*Math.PI/180,e.yaw*Math.PI/180,(e.tilt?.[1]??0)*Math.PI/180,"XYZ")}function qa(i){return sn(i)?new ct().setFromEuler(new Ri((i.tilt?.[0]??0)*Math.PI/180,i.yaw*Math.PI/180,(i.tilt?.[1]??0)*Math.PI/180,"XYZ")):new ct().setFromAxisAngle(new I(0,1,0),i.yaw*Math.PI/180)}function ng(i){let e=i.quaternion;return e.x===0&&e.z===0?{yaw:2*Math.atan2(e.y,e.w)*180/Math.PI,tilt:[0,0]}:{yaw:i.rotation.y*180/Math.PI,tilt:[i.rotation.x*180/Math.PI,i.rotation.z*180/Math.PI]}}function _d(i,e){let t=i.base??i;return JSON.stringify([t.resolution,t.bounds,e])}var Er=class{constructor(e){this.viewer=e,this.uniforms={uMassProtection:{value:e.texture},uShowMassProtection:{value:0},uProtectionLo:{value:new I},uProtectionHi:{value:new I},uProtectionSize:{value:49}},this.uploads=0}update(e,t,n,s){if(!e||!t||t.base===0&&t.commands.length===0){this.clear();return}let r=e.base??e,a=_d(e,t);if(a!==this.key){let o=va({n:r.resolution,bounds:r.bounds},t);this.uniform=o.uniform,!this.texture||this.texture.image.width!==o.n?(this.texture?.dispose(),this.texture=new Jt(o.values,o.n,o.n,o.n),Object.assign(this.texture,{format:qi,type:ot,minFilter:Je,magFilter:Je,unpackAlignment:1,generateMipmaps:!1})):this.texture.image.data=o.values,this.texture.needsUpdate=!0,this.uniforms.uMassProtection.value=this.texture,this.uniforms.uProtectionLo.value.fromArray(o.bounds.lo),this.uniforms.uProtectionHi.value.fromArray(o.bounds.hi),this.uniforms.uProtectionSize.value=o.n,this.key=a,this.uploads++}this.setVisible(n&&s)}setVisible(e){this.uniforms.uShowMassProtection.value=e?1:0,this.visibilityChanged?.(!!e),this.viewer.dirty=!0}clear(){this.texture?.dispose(),this.texture=null,this.key=null,this.uniform=null,this.uniforms.uMassProtection.value=this.viewer.texture,this.setVisible(!1)}info(){return{visible:!!this.uniforms.uShowMassProtection.value,bytes:this.texture?.image.data.byteLength??0,size:this.texture?.image.width??0,uploads:this.uploads}}};var sg=`uniform sampler3D uMassProtection;\r
uniform int uShowMassProtection;\r
uniform vec3 uProtectionLo,uProtectionHi;\r
uniform float uProtectionSize;\r
float massProtectionCoverage(vec3 p){\r
  vec3 q=(p-uProtectionLo)/(uProtectionHi-uProtectionLo);\r
  if(any(lessThan(q,vec3(0)))||any(greaterThan(q,vec3(1))))return 0.0;\r
  return texture(uMassProtection,q*(uProtectionSize-1.0)/uProtectionSize+vec3(0.5/uProtectionSize)).r;\r
}\r
`;var Cc=class{constructor(e,t=()=>{}){this.createWorker=e,this.changed=t,this.serial=0,this.state={status:"unchecked"},this.dispatched=0,this.terminated=0}stop(){this.worker&&(this.worker.terminate(),this.worker=null,this.terminated++)}reset(e="unchecked"){this.serial++,this.stop(),this.state={status:e},this.changed()}check(e,t){if(this.closed)throw Error("Surface health closed");this.reset("pending");let n=this.serial,s;try{if(!(e.positions instanceof Float32Array)||!(e.indices instanceof Uint32Array)||e.positions.length%3||e.indices.length%3||e.positions.length>45e4||e.indices.length>75e4)throw Error("Surface health input unavailable or over budget");let r=e.positions.slice(),a=e.indices.slice();s=this.createWorker(),this.worker=s,this.dispatched++,s.onmessage=({data:l})=>{n!==this.serial||this.worker!==s||l.revision!==t||(this.stop(),this.state=l.error?{status:"failed",revision:t,error:l.error}:{...l.health,revision:t,auditMs:l.auditMs,roundTripMs:performance.now()-o,payloadBytes:c},this.changed())},s.onerror=l=>{l.preventDefault?.(),!(n!==this.serial||this.worker!==s)&&(this.stop(),this.state={status:"failed",revision:t,error:l.message||"Health worker failed"},this.changed())};let o=performance.now(),c=r.byteLength+a.byteLength;s.postMessage({kind:"health",revision:t,mesh:{positions:r,indices:a,boundaryOccupied:e.boundaryOccupied}},[r.buffer,a.buffer])}catch(r){this.stop(),this.state={status:"failed",revision:t,error:r.message},this.changed()}}close(){this.closed=!0,this.reset("unavailable")}info(){let{highlights:e,...t}=this.state;return{...t,dispatched:this.dispatched,terminated:this.terminated,active:!!this.worker,closed:!!this.closed,segments:(e?.segments.length??0)/6,points:(e?.points.length??0)/3,omittedSegments:e?.omittedSegments??0,omittedPoints:e?.omittedPoints??0}}};function Ic(i){return i.isOrthographicCamera?(i.right-i.left)/(i.top-i.bottom):i.aspect}function jw(i,e){return i.isOrthographicCamera?(i.top-i.bottom)/i.zoom:2*i.position.distanceTo(e)*Math.tan(i.fov*Math.PI/360)/i.zoom}function rg(i,e){if(i.isOrthographicCamera){let t=(i.top-i.bottom)/2;i.left=-t*e,i.right=t*e}else i.aspect=e;i.updateProjectionMatrix()}function ag(i,e,t){if(!!i.isOrthographicCamera===t)return i;let n=Ic(i),s=jw(i,e),r=i.userData.perspectiveFov??55,a=t?new yn(-s*n/2,s*n/2,s/2,-s/2,i.near,i.far):new kt(r,n,i.near,i.far);if(a.up.copy(i.up),a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.userData.perspectiveFov=i.isPerspectiveCamera?i.fov:r,!t){let o=s/(2*Math.tan(r*Math.PI/360));a.position.copy(e).addScaledVector(new I(0,0,1).applyQuaternion(a.quaternion),o)}return t||(a.near=Math.min(i.near,a.position.distanceTo(e)/4),a.far=Math.max(i.far,a.position.distanceTo(e)+i.far)),a.updateProjectionMatrix(),a.updateMatrixWorld(),a}function Pc(i,e,t){let n=t.getCenter(new I),s=new I(1,0,0).applyQuaternion(i.quaternion),r=new I(0,1,0).applyQuaternion(i.quaternion),a=new I(0,0,1).applyQuaternion(i.quaternion),o=Ic(i),c=.001,l=i.position.distanceTo(e);for(let h=0;h<8;h++){let d=new I(...["x","y","z"].map((u,f)=>(h>>f&1?t.max:t.min)[u])).sub(n);c=Math.max(c,Math.abs(d.dot(r))*1.1,Math.abs(d.dot(s))/o*1.1),l=Math.max(l,d.dot(a)+i.near*2)}i.zoom=1,i.top=c,i.bottom=-c,i.left=-c*o,i.right=c*o,e.copy(n),i.position.copy(n).addScaledVector(a,l),i.far=Math.max(300,l+t.getSize(new I).length()*2),i.updateProjectionMatrix(),i.updateMatrixWorld()}function og(i,e=Ts){if(!i.recipe){let a=Xa(i,e),o=new I(...i.position);return new zt(o.clone().addScalar(-a),o.clone().addScalar(a))}let t=i.recipe.field,n=t?e(t,0):null,s=t&&n.empty?t.bounds:Hi(i,4,e),r=new je().compose(new I(...i.position),qa(i),new I(...ni(i)));return new zt(new I(...s.lo),new I(...s.hi)).applyMatrix4(r)}function Lc(i,e,t){if(i.isOrthographicCamera){Pc(i,e.target,t),e.update();return}let n=t.getCenter(new I),s=new I(1,0,0).applyQuaternion(i.quaternion),r=new I(0,1,0).applyQuaternion(i.quaternion),a=new I(0,0,1).applyQuaternion(i.quaternion),o=Math.tan(i.fov*Math.PI/360),c=i.near*2;for(let l=0;l<8;l++){let h=new I(...["x","y","z"].map((u,f)=>(l>>f&1?t.max:t.min)[u])).sub(n),d=h.dot(a);c=Math.max(c,d+i.near*2,d+1.1*Math.max(Math.abs(h.dot(r))/o,Math.abs(h.dot(s))/(o*i.aspect)))}e.target.copy(n),i.position.copy(n).addScaledVector(a,c),i.far=Math.max(300,c+t.getSize(new I).length()*2),i.updateProjectionMatrix(),e.update()}var $w={boundaryEdges:"Open edges",nonManifoldEdges:"Non-manifold edges",nonManifoldVertices:"Pinched / invalid vertex links",inconsistentWindingEdges:"Inconsistent winding",repeatedIndexFaces:"Repeated-index faces",zeroAreaFaces:"Zero-area faces",duplicateFaces:"Duplicate faces",nonFiniteVertices:"Non-finite vertices",unusedVertices:"Unused vertices",invalidIndexFaces:"Invalid-index faces"},Dc=class{constructor(e){this.source=e,this.panel=document.getElementById("sculpt-health-panel"),this.panel.innerHTML='<h2>Sculpt Health</h2><div class="buttons"><button id="health-check">Check surface</button><button id="health-cancel" disabled>Cancel check</button><button id="health-frame" disabled title="Frame the displayed diagnostic locations. Z frames the cloud.">Frame areas</button></div><label><input id="health-show" type="checkbox"> Show problem areas</label><p id="health-summary" role="status"></p><dl id="health-counts"></dl><p id="health-details" class="muted"></p><p class="muted">Read-only source mesh check. Magenta marks tested defects; orange bounds indicate sampling-boundary contact. Does not test self-intersections, thin detail or cloud density. No repair is applied.</p>',this.checkButton=this.panel.querySelector("#health-check"),this.cancelButton=this.panel.querySelector("#health-cancel"),this.frameButton=this.panel.querySelector("#health-frame"),this.show=this.panel.querySelector("#health-show"),this.job=new Cc(()=>new Worker(new URL("mesh-worker.js",document.baseURI)),()=>this.refresh()),this.checkButton.onclick=()=>this.check(),this.cancelButton.onclick=()=>this.job.reset("cancelled"),this.frameButton.onclick=()=>this.frame(),this.show.onchange=()=>{this.group&&(this.group.visible=this.show.checked),this.frameButton.disabled=!this.show.checked||!this.group,e.viewer.dirty=!0},this.refresh()}current(){let e=this.source;return e.viewer.splitSource&&e.available&&!e.error&&e.mesh&&e.readyRevision===e.revision&&!e.viewer.sculptEvaluation?.pending&&!e.viewer.sculptEvaluation?.error}refreshReadiness(){!!this.current()!==this.ready&&this.refresh()}invalidate(e="unchecked"){this.job.reset(e)}check(){if(!this.current())return;let e=this.source,t=e.mesh.geometry;this.job.check({positions:t.attributes.position.array,indices:t.index.array,boundaryOccupied:e.stats.boundaryOccupied},e.readyRevision)}clear(){this.group&&(this.source.scene.remove(this.group),this.group.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()}),this.group=null)}transform(){if(!this.group||!this.source.mesh)return;let e=this.source.mesh;this.group.position.copy(e.position),this.group.quaternion.copy(e.quaternion),this.group.scale.copy(e.scale),this.group.updateMatrixWorld()}frame(){if(!this.current()||!this.group?.visible)return;document.getElementById("orbit").click();let e=this.source.viewer;e.resize();let t=new zt().setFromObject(this.group);if(t.isEmpty())return;let n=this.source.bounds,s=new zt(new I(...n.lo),new I(...n.hi)).applyMatrix4(this.source.mesh.matrixWorld),r=Math.max(e.camera.near*2,s.getSize(new I).length()/32);Lc(e.camera,e.orbit,t.expandByScalar(r)),e.dirty=!0}refresh(){this.clear();let e=this.job.state,t=!!this.current();this.ready=t,this.checkButton.disabled=!t||e.status==="pending",this.cancelButton.disabled=e.status!=="pending";let n={unchecked:"Not checked. Check the current source surface.",pending:"Checking source surface\u2026",cancelled:"Check cancelled. No result retained.",unavailable:"Source surface unavailable.",empty:"No extracted triangles. Surface health is undetermined.",failed:`Check unavailable: ${e.error??"unknown failure"}`,issues:e.highlights&&(e.highlights.segments.length||e.highlights.points.length)?"Tested topology defects detected. Show problem areas to locate them.":"Tested topology defects detected. No finite locations can be highlighted.",boundary:"No tested topology defects detected; the sampled boundary is occupied.",clear:"No tested topology defects detected on this source surface."};this.panel.querySelector("#health-summary").dataset.health=e.status,this.panel.querySelector("#health-summary").textContent=e.status==="unchecked"&&!t?"Waiting for the current source surface.":n[e.status]??"Source surface unavailable.";let s=this.panel.querySelector("#health-counts"),r=this.panel.querySelector("#health-details");if(s.replaceChildren(),r.textContent="",e.counts){for(let[c,l]of Object.entries($w)){let h=document.createElement("dt"),d=document.createElement("dd");h.textContent=l,d.textContent=String(e.counts[c]),e.counts[c]&&(d.className="health-issue"),s.append(h,d)}let a=document.createElement("dt"),o=document.createElement("dd");a.textContent="Sampling boundary contact",o.textContent=e.boundaryOccupied?"Yes \u2014 inspect clipping":"No",s.append(a,o),r.textContent=`${e.triangles} triangles \xB7 ${e.auditMs.toFixed(1)} ms audit \xB7 ${e.roundTripMs.toFixed(1)} ms worker round trip. Highlights limited to 2048 segments and 2048 points${e.highlights.omittedSegments||e.highlights.omittedPoints?"; additional locations omitted":""}. Counts cover the full mesh.${e.counts.nonFiniteVertices?" Non-finite locations cannot be drawn.":""}`}if(t&&e.highlights&&e.revision===this.source.readyRevision&&(e.highlights.segments.length||e.highlights.points.length||e.boundaryOccupied)){this.group=new hn;let a=e.highlights;if(a.segments.length){let o=new xt;o.setAttribute("position",new It(a.segments,3)),this.group.add(new Js(o,new gn({color:16729275,depthTest:!1,depthWrite:!1,toneMapped:!1})))}if(a.points.length){let o=new xt;o.setAttribute("position",new It(a.points,3)),this.group.add(new Gr(o,new Qs({color:16729275,size:9,sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1})))}if(e.boundaryOccupied){let o=this.source.bounds;o&&this.group.add(new os(new zt(new I(...o.lo),new I(...o.hi)),16755780))}this.group.traverse(o=>{o.renderOrder=100,o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1)}),this.group.visible=this.show.checked,this.source.scene.add(this.group),this.transform()}this.show.disabled=!this.group||!e.boundaryOccupied&&!e.highlights?.segments.length&&!e.highlights?.points.length,this.source.viewer.dirty=!0,this.frameButton.disabled=!this.group?.visible}info(){return{...this.job.info(),visible:!!this.group?.visible,overlayObjects:this.group?.children.length??0,transform:this.group?{position:this.group.position.toArray(),quaternion:this.group.quaternion.toArray(),scale:this.group.scale.toArray()}:null}}dispose(){this.job.close(),this.clear(),this.checkButton.onclick=null,this.cancelButton.onclick=null,this.frameButton.onclick=null,this.show.onchange=null}};var Nc=class{constructor(e){this.source=e,this.uniforms={uBrushCenter:{value:new I},uBrushColor:{value:new I(.1,.75,.55)},uBrushParameters:{value:new Be},uBrushFlags:{value:new Be},uBrushProtection:{value:e.viewer.texture},uBrushProtectionLo:{value:new I},uBrushProtectionHi:{value:new I},uBrushProtectionSize:{value:49}}}enabled(e){this.active=e;let t=this.source.material;t&&t.defines.SKY_SOURCE_BRUSH_PREVIEW!==(e?1:0)&&(t.defines.SKY_SOURCE_BRUSH_PREVIEW=e?1:0,t.needsUpdate=!0),this.source.viewer.dirty=!0}clear(){this.spec=null,this.borrowed=!1,this.blocked=!1,this.owned?.clear(),this.uniforms.uBrushProtection.value=this.source.viewer.texture,this.uniforms.uBrushFlags.value.set(0,0,0,0),this.enabled(!1)}set(e,t,n){if(!e||!Array.isArray(e.center)||e.center.length!==3||Array.from(e.center).some(a=>!Number.isFinite(a))||!Number.isFinite(e.radius)||e.radius<=0||e.radius>1.58||!Number.isFinite(e.gain)||e.gain<=0||e.gain>1||!Number.isFinite(e.hardness)||e.hardness<0||e.hardness>1||![0,1,2].includes(e.style)){this.clear();return}this.spec=structuredClone(e),this.borrowed=!1,this.blocked=!1;let s=this.uniforms;s.uBrushCenter.value.fromArray(e.center),s.uBrushParameters.value.set(e.radius,e.gain,e.hardness,e.style),s.uBrushFlags.value.set(e.rest?1:0,e.mirror?1:0,0,0),s.uBrushColor.value.set(...e.subtract?[.95,.34,.08]:[.1,.75,.55]);let r;if(e.protected&&t&&n&&(n.base!==0||n.commands.length)){let a=this.source.protection,o=_d(t,n);a.texture&&a.key===o?(r=a,this.borrowed=!0,this.owned?.clear()):(this.owned??=new Er(this.source.viewer),this.owned.update(t,n,!1,!0),r=this.owned)}else this.owned?.clear();r?.texture&&r.uniform!==0?(s.uBrushProtection.value=r.texture,s.uBrushProtectionLo.value.copy(r.uniforms.uProtectionLo.value),s.uBrushProtectionHi.value.copy(r.uniforms.uProtectionHi.value),s.uBrushProtectionSize.value=r.uniforms.uProtectionSize.value,s.uBrushFlags.value.z=1,this.blocked=r.uniform===255):s.uBrushProtection.value=this.source.viewer.texture,this.enabled(!this.blocked)}info(){return{active:!!this.active,spec:this.spec?structuredClone(this.spec):null,borrowedMask:this.borrowed??!1,blockedByProtection:this.blocked??!1,ownedMaskBytes:this.owned?.info().bytes??0,ownedMaskUploads:this.owned?.uploads??0}}dispose(){this.clear()}};var lg=`#if SKY_SOURCE_BRUSH_PREVIEW\r
uniform vec3 uBrushCenter,uBrushColor,uBrushProtectionLo,uBrushProtectionHi;\r
uniform vec4 uBrushParameters,uBrushFlags;\r
uniform sampler3D uBrushProtection;\r
uniform float uBrushProtectionSize;\r
float brushKernel(vec3 p,vec3 center){\r
  float radius=uBrushParameters.x,r2=dot((p-center)/radius,(p-center)/radius);\r
  if(r2>=1.0)return 0.0;\r
  float hardness=uBrushParameters.z,t=r2;\r
  if(uBrushParameters.w>1.5){float r=sqrt(r2);t=r<=hardness?0.0:(r-hardness)/(1.0-hardness);return (1.0-t*t)*(1.0-t*t);}\r
  if(uBrushParameters.w>0.5)t=clamp((r2-hardness*hardness)/max(1.0-hardness*hardness,1e-8),0.0,1.0);\r
  return (1.0-t)*(1.0-t);\r
}\r
float brushProtection(vec3 p){\r
  if(uBrushFlags.z<0.5)return 0.0;\r
  vec3 q=(p-uBrushProtectionLo)/(uBrushProtectionHi-uBrushProtectionLo);\r
  if(any(lessThan(q,vec3(0)))||any(greaterThan(q,vec3(1))))return 0.0;\r
  return texture(uBrushProtection,q*(uBrushProtectionSize-1.0)/uBrushProtectionSize+vec3(0.5/uBrushProtectionSize)).r;\r
}\r
float brushWeight(vec3 currentPoint,vec3 restPoint){\r
  vec3 p=uBrushFlags.x>0.5?restPoint:currentPoint;\r
  float weight=brushKernel(p,uBrushCenter);\r
  if(uBrushFlags.y>0.5)weight=max(weight,brushKernel(p,uBrushCenter*vec3(-1,1,1)));\r
  return weight*uBrushParameters.y*(1.0-brushProtection(restPoint));\r
}\r
vec3 showBrushInfluence(vec3 color,vec3 currentPoint,vec3 restPoint){\r
  float weight=brushWeight(currentPoint,restPoint);\r
  return mix(color,uBrushColor,0.65*sqrt(max(0.0,weight)));\r
}\r
#endif\r
`;var Uc=class{constructor(e){this.viewer=e,this.scene=new ai,this.scene.background=new Fe(1516336),this.revision=0,this.protection=new Er(e),this.influence=new Nc(this),this.health=new Dc(this),this.uniforms={...e.uniforms,...this.protection.uniforms,...this.influence.uniforms,uSourceIndex:{value:0},uPaintLayer:{value:-1},uSourceShapeScale:{value:new I(1,1,1)}},this.material=new oi({uniforms:this.uniforms,defines:{SKY_PAINT_SCULPT_PROTECTION:0,SKY_SOURCE_SHAPE_SCALE:0,SKY_SOURCE_BRUSH_PREVIEW:0},side:li,glslVersion:Si,toneMapped:!1,vertexShader:"precision highp float;in vec3 position,normal;uniform mat4 modelViewMatrix,projectionMatrix;uniform mat3 normalMatrix;out vec3 vLocalPosition,vSourceNormal;void main(){vLocalPosition=position;vSourceNormal=normalMatrix*normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1);}",fragmentShader:eg.replace("/* SCULPT_FIELD */",hr).replace("/* MODIFIER_FIELDS */",ur).replace("/* SCULPT_PROTECTION */",sg).replace("/* BRUSH_INFLUENCE */",lg)}),this.protection.visibilityChanged=t=>{let n=t?1:0;this.material.defines.SKY_PAINT_SCULPT_PROTECTION!==n&&(this.material.defines.SKY_PAINT_SCULPT_PROTECTION=n,this.material.needsUpdate=!0)},this.worker=new Worker(new URL("mesh-worker.js",document.baseURI)),this.worker.onmessage=({data:t})=>{if(this.busy=!1,t.revision===this.revision){if(t.error)this.error=t.error,this.clear();else{let{mesh:n}=t,s=this.mesh?.geometry;if(s&&tg(s.index.array,n.indices,s.attributes.position.array,n.positions)){for(let[r,a]of[["position",n.positions],["normal",n.normals]]){let o=s.attributes[r],c=ig(o.array,a);c.count&&(o.array.set(a.subarray(c.start,c.start+c.count),c.start),o.clearUpdateRanges(),o.addUpdateRange(c.start,c.count),o.needsUpdate=!0)}s.computeBoundingSphere(),this.reusedBuffers=(this.reusedBuffers??0)+1}else{this.clear("unchecked");let r=new xt;r.setAttribute("position",new It(n.positions,3)),r.setAttribute("normal",new It(n.normals,3)),r.setIndex(new It(n.indices,1)),r.computeBoundingSphere(),this.mesh=new re(r,this.material),this.scene.add(this.mesh),this.replacedBuffers=(this.replacedBuffers??0)+1}this.setShapeScale(t.shapeScale),this.bounds=n.bounds,this.stats={...n.stats,ms:t.ms,boundaryOccupied:n.boundaryOccupied,...t.scaleMs!==void 0?{scaleMs:t.scaleMs,shapeScale:[...t.shapeScale]}:{}},this.error=null,this.setTransform(this.volume)}this.readyRevision=t.revision,this.health.refresh()}this.dispatch(),e.dirty=!0,this.updateNote(),e.events.sourceReady?.()},this.worker.onerror=t=>{this.busy=!1,this.error=t.message,this.clear(),this.updateNote(),e.events.sourceReady?.()}}clear(e="unavailable"){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=null),this.setShapeScale(),this.influence.clear(),this.health.invalidate(e)}setShapeScale(e){this.installedShapeScale=e?[...e]:void 0,this.uniforms.uSourceShapeScale.value.fromArray(e??[1,1,1]);let t=e?1:0;this.material.defines.SKY_SOURCE_SHAPE_SCALE!==t&&(this.material.defines.SKY_SOURCE_SHAPE_SCALE=t,this.material.needsUpdate=!0)}setTransform(e){!this.mesh||!e||(this.mesh.position.fromArray(e.position),this.mesh.scale.fromArray(W0(e,this.installedShapeScale)),Rc(this.mesh,e),this.mesh.updateMatrixWorld(),this.health.transform())}update(e,t){if(!e){this.waitingForScene=!0,this.volume=null,this.available=!1,this.pending=null,this.shapeKey=null,this.revision++,this.protection.clear(),this.clear(),this.updateNote();return}let n=ms(e.version);Object.keys(n).some(d=>this.material.defines[d]!==n[d])&&(Object.assign(this.material.defines,n),this.material.needsUpdate=!0),this.waitingForScene=!1;let s=e.volumes.find(d=>d.id===t);this.volume?.id!==t&&this.health.invalidate(),this.volume=s;let r=Kp(s)?1:0;if(this.material.defines.SKY_PAINT_HARDNESS!==r&&(this.material.defines.SKY_PAINT_HARDNESS=r,this.material.needsUpdate=!0),this.uniforms.uSourceIndex.value=e.volumes.filter(d=>d.enabled).findIndex(d=>d.id===t),this.setPaintLayer(this.paintLayerId,this.showPaint),this.available=!!s?.recipe&&s.enabled&&s.role==="add",!this.available){this.pending=null,this.shapeKey=null,this.revision++,this.protection.clear(),this.clear(),this.updateNote();return}this.setTransform(s);let a=this.viewer.sourceNormalStyle??"field",o=JSON.stringify([s.recipe.strokes,fr(s.recipe),s.recipe.sculpt??[],s.recipe.massMode??"grouped",s.recipe.field??null,...a==="field"?[]:[a],...s.shapeScale?[s.shapeScale]:[]]),c=s.recipe.field?(s.recipe.field.base??s.recipe.field).resolution-1:32,l=this.viewer.studio.previewQuality().draft;if(this.shapeKey===o&&(this.resolution===c||l)){this.health.refreshReadiness();return}let h=l?s.recipe.field?c/2:20:c;this.shapeKey=o,this.resolution=h,this.revision++,this.health.invalidate(),this.influence.clear(),this.protection.setVisible(!1),this.pending={recipe:s.recipe,version:e.version,resolution:h,normalStyle:a,revision:this.revision,...s.shapeScale?{shapeScale:s.shapeScale}:{}},this.dispatch(),this.updateNote()}dispatch(){if(this.busy||!this.pending)return;this.busy=!0;let e=this.pending;this.pending=null,this.worker.postMessage(e)}setPaintLayer(e,t){this.paintLayerId=e,this.showPaint=t,this.uniforms.uPaintLayer.value=t?this.volume?.recipe?.layers?.findIndex(n=>n.id===e)??-1:-1,this.viewer.dirty=!0}updateNote(){let e=document.getElementById("source-mesh-note");if(e){if(this.viewer.sculptEvaluation?.pending){e.textContent="Preparing sculpt mass\u2026";return}if(this.viewer.sculptEvaluation?.error){e.textContent=`Sculpt mass unavailable: ${this.viewer.sculptEvaluation.error}`;return}e.textContent=this.error?`Source mesh unavailable: ${this.error}`:this.waitingForScene?"Preparing source mass\u2026":this.available?this.readyRevision!==this.revision?"Updating source mass\u2026":`Source mass \xB7 ${this.stats?.triangles??0} triangles \xB7 ${(this.stats?.ms??0).toFixed(1)} ms extraction${this.stats?.scaleMs!==void 0?` \xB7 ${this.stats.scaleMs.toFixed(1)} ms applied scale`:""}`:"Select a visible additive drawn cloud"}}pick(e){if(this.viewer.sculptEvaluation?.pending||!this.mesh||this.readyRevision!==this.revision)return null;let t=new Hn;return t.ray.copy(e),t.intersectObject(this.mesh,!1)[0]?.point??null}info(){return{revision:this.revision,readyRevision:this.readyRevision,busy:!!this.busy,error:this.error??null,normalStyle:this.stats?.normalStyle??"field",requestedNormalStyle:this.viewer.sourceNormalStyle??"field",reusedBuffers:this.reusedBuffers??0,replacedBuffers:this.replacedBuffers??0,stats:this.stats??null}}};var Fc=class{#r;#t=null;#e=null;#s=0;#i=null;#n=!1;#a=null;#c=!1;#h=0;#u=0;#d=0;#o=0;constructor(e=new URL("sculpt-worker.js",document.baseURI),{interrupt:t=!0}={}){this.#c=t,this.#r=new Worker(e,{type:"module"}),this.#r.addEventListener("message",n=>this.#m(n.data)),this.#r.addEventListener("error",n=>{n.preventDefault(),this.#l(Error(n.message||"Browser replay worker failed"))})}submit(e,{layerId:t=null}={}){if(this.#n)throw Error("Replay worker closed");let n=As(e);if(t!==null&&!n.layers.some(r=>r.id===t))throw Error("Unknown selected sculpt layer");let s=++this.#s;return this.#i=null,new Promise(r=>{let a={id:s,program:n,layerId:t,resolve:r};this.#t?(this.#e&&(this.#e.resolve({id:this.#e.id,status:"superseded"}),this.#d++),this.#e=a,this.#p()):this.#f(a)})}#f(e){this.#t=e,this.#h++;try{this.#r.postMessage({id:e.id,program:e.program,layerId:e.layerId})}catch(t){this.#l(t)}}#m(e){let t=this.#t;if(!(!t||e.id!==t.id)&&(this.#t=null,e.error?(this.#o++,t.resolve({id:t.id,status:"failed",error:e.error})):!e.aborted&&t.id===this.#s&&!this.#n?(this.#i={id:t.id,result:e.result,evaluateMs:e.evaluateMs},t.resolve({id:t.id,status:"installed",evaluateMs:e.evaluateMs,...structuredClone(e.result)})):(this.#u++,t.resolve({id:t.id,status:"stale",evaluateMs:e.evaluateMs,aborted:!!e.aborted,abortedOperations:e.result?.applied??null})),this.#e&&!this.#n)){let n=this.#e;this.#e=null,this.#f(n)}}#l(e){if(!this.#n){this.#n=!0,this.#i=null,this.#o++;for(let t of[this.#t,this.#e])t?.resolve({id:t.id,status:"failed",error:e.message});this.#t=null,this.#e=null,this.#a=Promise.resolve(this.#r.terminate())}}#p(){if(this.#c&&this.#t&&!this.#t.interrupted){this.#t.interrupted=!0;try{this.#r.postMessage({cancel:this.#t.id})}catch(e){this.#l(e)}}}cancel(){this.#n||(++this.#s,this.#i=null,this.#p(),this.#e&&(this.#e.resolve({id:this.#e.id,status:"cancelled"}),this.#e=null))}snapshot(){if(this.#n||!this.#i||this.#i.id!==this.#s)throw Error("Latest replay not ready");return structuredClone(this.#i)}info(){return{latest:this.#s,installed:this.#i?.id??null,ready:!this.#n&&this.#i?.id===this.#s,active:this.#t?.id??null,pending:this.#e?.id??null,dispatched:this.#h,stale:this.#u,superseded:this.#d,failed:this.#o,closed:this.#n}}close(){if(this.#a)return this.#a;this.#n=!0,++this.#s,this.#i=null;for(let e of[this.#t,this.#e])e?.resolve({id:e.id,status:"closed"});return this.#t=null,this.#e=null,this.#a=Promise.resolve(this.#r.terminate()),this.#a}};var yd=i=>i?.format===zi,Oc=class{constructor(e,t,n){this.viewer=e,this.create=t,this.changed=n,this.entries=new Map}notify(){this.queued||this.closed||(this.queued=!0,queueMicrotask(()=>{this.queued=!1,this.closed||this.changed()}))}update(e,t,n,s){let r=this.selected!==t;this.latest={scene:e,selected:t,syncProxy:n},this.selected=t;let a=new Set(e.volumes.filter(o=>o.recipe?.field).map(o=>o.id));for(let[o,c]of this.entries)a.has(o)||(c.dispose(),this.entries.delete(o));for(let o of e.volumes){let c=this.entries.get(o.id);if(!yd(o.recipe?.field)){c&&(JSON.stringify(c.field)===JSON.stringify(o.recipe?.field)?c.update({...e,volumes:[o]},o.id,n):(c.dispose(),this.entries.delete(o.id)));continue}if(!c){let l={gizmo:{detach:()=>this.viewer.gizmo.detach()},events:{sculptFailed:()=>this.notify()},setScene:()=>this.notify()};c=this.create(l),this.entries.set(o.id,c)}o.id===t&&(c.targetLayer=r?void 0:s),c.update({...e,volumes:[o]},o.id,n)}return this.pending=[...this.entries.values()].some(o=>o.pending),this.error=[...this.entries.values()].find(o=>o.error)?.error??null,this.pending||this.error?null:this.resolve(e)}resolve(e){if(this.pending||this.error)throw Error(this.error??"Sculpt layers are updating; wait before exporting");let t=structuredClone(e);for(let n of t.volumes)if(yd(n.recipe?.field)){let s=this.entries.get(n.id);if(!s)throw Error("Current sculpt mass is not ready");n.recipe.field=structuredClone(s.fieldFor(n.recipe.field))}return t}owner(e){let t=JSON.stringify(e),n=this.entries.get(this.selected);if(n?.key===t)return n;let s=[...this.entries.values()].find(r=>r.key===t);if(!s)throw Error("Current sculpt mass is not ready");return s}fieldFor(e){if(!yd(e))return e;if(this.pending||this.error)throw Error(this.error??"Current sculpt mass is not ready");return this.owner(e).fieldFor(e)}prefixFor(e,t){return this.fieldFor(e),this.owner(e).prefixFor(e,t)}retry(){for(let e of this.entries.values())e.retry();this.pending=!1,this.error=null}close(){this.closed=!0;for(let e of this.entries.values())e.dispose();this.entries.clear()}info(){return{fields:[...this.entries].map(([e,t])=>({id:e,...t.info()}))}}};var cg=i=>i?.format===zi,Bc=class i{constructor(e){this.viewer=e,this.key=null,this.field=null,this.pending=!1,this.error=null,this.revision=0}cancelFocus(){this.focusRequest=null}find(e){return e.volumes.find(t=>cg(t.recipe?.field))}resolve(e){if(this.multi)return this.multi.resolve(e);if(this.pending||this.error)throw Error(this.error??"Sculpt layers are updating; wait before exporting");let t=this.find(e);if(!t)return e;if(this.pending||!this.field||JSON.stringify(t.recipe.field)!==this.key)throw Error("Sculpt layers are updating; wait for the current mass before picking or exporting");let n=structuredClone(e);return n.volumes.find(s=>s.id===t.id).recipe.field=structuredClone(this.field),n}update(e,t,n){if(e.version>=21&&e.volumes.filter(d=>d.recipe?.field).length>1){this.latest={scene:e,selected:t,syncProxy:n},this.multi||(this.worker?.close(),this.worker=null,this.revision++,this.key=null,this.field=null,this.multi=new Oc(this.viewer,g=>new i(g),()=>{let g=this.multi?.latest;g&&(this.viewer.setScene(g.scene,g.selected,g.syncProxy),this.error?(this.viewer.events.warning?.(this.error),this.viewer.events.sculptFailed?.()):this.pending||(this.finishFocus(g),this.viewer.events.sculptReady?.()))}));let d=this.pending,u=this.multi.update(e,t,n,this.targetLayer);this.pending=this.multi.pending,this.error=this.multi.error;let f=this.multi.entries.get(t);return this.layerId=f?.layerId,this.stats=f?.stats,this.pending&&!d&&(this.revision++,this.viewer.gizmo.detach(),this.viewer.events.sculptPending?.("Updating sculpt clouds\u2026")),u}this.multi&&(this.multi.close(),this.multi=null,this.retry(),this.key=null,this.massKey=null,this.field=null),this.latest={scene:e,selected:t,syncProxy:n};let s=this.find(e),r=s?JSON.stringify(s.recipe.field):null;if(!s)return this.pending&&(this.worker?.cancel(),this.revision++),e.version>=21&&!e.volumes.some(d=>d.recipe?.field)&&(this.worker?.close(),this.worker=null,this.key=null,this.massKey=null,this.field=null,this.prefixField=null,this.stats=null),this.pending=!1,this.error=null,this.requestKey=null,this.cancelFocus(),e;if(this.error)return null;let a=s.recipe.field.protection?_m(s.recipe.field):r,o=s.recipe.field.layers.some(d=>d.id===this.targetLayer)?this.targetLayer:(s.recipe.field.layers.filter(d=>d.enabled).at(-1)??s.recipe.field.layers.at(-1))?.id??null;this.targetLayer=o;let c=`${a}\0${o}`;if(a===this.massKey&&this.field&&this.layerId===o)return this.pending&&(this.worker.cancel(),this.revision++),this.key=r,this.pending=!1,this.error=null,this.resolve(e);if(this.pending&&c===this.requestKey)return null;this.pending=!0,this.error=null,this.requestKey=c;let l=++this.revision;this.viewer.gizmo.detach(),this.viewer.events.sculptPending?.(r===this.key?"Preparing selected sculpt layer\u2026":"Updating sculpt layers\u2026");let h;try{this.worker??=new Fc,h=this.worker.submit(s.recipe.field,{layerId:o})}catch(d){return this.fail(d.message,l),null}return h.then(d=>{if(l!==this.revision)return;if(d.status!=="installed"){this.fail(d.error??"Sculpt replay did not complete",l);return}this.key=r,this.massKey=a,this.field=d.field,this.prefixField=d.prefixField,this.layerId=d.layerId,this.pending=!1,this.stats=d;let u=this.latest;this.viewer.setScene(u.scene,u.selected,u.syncProxy),this.finishFocus(u),this.viewer.events.sculptReady?.()}).catch(d=>this.fail(d.message,l)),null}fail(e,t){t===this.revision&&(this.pending=!1,this.error=e,this.viewer.events.warning?.(e),this.viewer.events.sculptFailed?.())}finishFocus(e){let t=this.focusRequest;this.focusRequest=null,t&&t.selected===e.selected&&(this.viewer.workshop||t.preserveDirection)&&this.viewer.focusSelected(t.frameBounds,!!t.preserveDirection)}fieldFor(e){if(this.multi)return this.multi.fieldFor(e);if(!cg(e))return e;if(this.pending||JSON.stringify(e)!==this.key||!this.field)throw Error("Current sculpt mass is not ready");return this.field}prefixFor(e,t){if(this.multi)return this.multi.prefixFor(e,t);if(this.fieldFor(e),t!==this.layerId||!this.prefixField)throw Error("Selected layer is not ready");return this.prefixField}retry(){this.multi&&this.multi.retry(),this.worker?.close(),this.worker=null,this.pending=!1,this.error=null,this.requestKey=null,this.revision++}dispose(){this.multi?.close(),this.worker?.close(),this.revision++,this.cancelFocus()}info(){return{pending:this.pending,error:this.error,readyLayerId:this.layerId??null,targetLayerId:this.targetLayer??null,revision:this.revision,worker:this.worker?.info()??null,...this.multi?this.multi.info():{},stats:this.stats?{operations:this.stats.operations,applied:this.stats.applied,prefixApplied:this.stats.prefixApplied??0,evaluateMs:this.stats.evaluateMs,retainedGridBytes:this.stats.retainedGridBytes,...this.stats.protectionCache?{protectionCache:structuredClone(this.stats.protectionCache),replayKeyCharacters:this.stats.replayKeyCharacters}:{}}:null}}};var hg=`// Adapted from the supplied Cloud Nodes Studio reference (MIT).\r
// Copyright (c) 2026 Cloud Nodes Studio contributors. See third-party-licenses.txt.\r
precision highp float;\r
precision highp int;\r
in vec2 vUV;\r
uniform float uSlice;\r
out vec4 outColor;\r
uvec3 studioHash(uvec3 x){x=((x>>8U)^x.yzx)*1103515245U;x=((x>>8U)^x.yzx)*1103515245U;return x;}\r
vec3 studioRandom(ivec3 p,int period){ivec3 q=ivec3(mod(vec3(p),float(period)));return vec3(studioHash(uvec3(q))&uvec3(0x00ffffffU))/16777215.0;}\r
float studioGradient(ivec3 c,vec3 d,int period){return dot(normalize(studioRandom(c,period)*2.0-1.0+vec3(.0001)),d);}\r
float studioPerlin(vec3 p,int period){\r
  ivec3 c=ivec3(floor(p));vec3 f=fract(p),s=f*f*f*(f*(f*6.0-15.0)+10.0);\r
  float n000=studioGradient(c,f,period),n100=studioGradient(c+ivec3(1,0,0),f-vec3(1,0,0),period);\r
  float n010=studioGradient(c+ivec3(0,1,0),f-vec3(0,1,0),period),n110=studioGradient(c+ivec3(1,1,0),f-vec3(1,1,0),period);\r
  float n001=studioGradient(c+ivec3(0,0,1),f-vec3(0,0,1),period),n101=studioGradient(c+ivec3(1,0,1),f-vec3(1,0,1),period);\r
  float n011=studioGradient(c+ivec3(0,1,1),f-vec3(0,1,1),period),n111=studioGradient(c+ivec3(1,1,1),f-vec3(1,1,1),period);\r
  return mix(mix(mix(n000,n100,s.x),mix(n010,n110,s.x),s.y),mix(mix(n001,n101,s.x),mix(n011,n111,s.x),s.y),s.z)*1.65;\r
}\r
float studioWorley(vec3 p,int period){\r
  ivec3 c=ivec3(floor(p));vec3 f=fract(p);float d=4.0;\r
  for(int z=-1;z<=1;z++)for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){\r
    ivec3 o=ivec3(x,y,z);vec3 v=vec3(o)+studioRandom(c+o,period)-f;d=min(d,dot(v,v));\r
  }\r
  return clamp(sqrt(d),0.0,1.0);\r
}\r
void main(){\r
  vec3 p=vec3(vUV,uSlice);float a=studioPerlin(p*8.0,8),b=studioPerlin(p*16.0,16),c=studioPerlin(p*32.0,32);\r
  float w=1.0-(.625*studioWorley(p*8.0,8)+.25*studioWorley(p*16.0,16)+.125*studioWorley(p*32.0,32));\r
  outColor=vec4(clamp(.5+.5*(a*.65+b*.25+c*.1),0.0,1.0),w,\r
    .5+.5*studioPerlin(p*8.0+vec3(19.2,7.8,1.1),8),.5+.5*studioPerlin(p*8.0+vec3(4.3,11.7,3.2),8));\r
}\r
`;function ug(i){let t=new dn(64,64,64,{format:gt,type:ot,minFilter:Je,magFilter:Je,depthBuffer:!1,stencilBuffer:!1});Object.assign(t.texture,{wrapS:Ai,wrapT:Ai,wrapR:Ai,generateMipmaps:!1});let n={uSlice:{value:0}},s=new oi({uniforms:n,fragmentShader:hg,vertexShader:"precision highp float;in vec3 position;out vec2 vUV;void main(){vUV=position.xy*.5+.5;gl_Position=vec4(position.xy,0,1);}",glslVersion:Si,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Ci}),r=new _i(2,2),a=new ai,o=new vi;a.add(new re(r,s));let c={target:i.getRenderTarget(),layer:i.getActiveCubeFace(),mip:i.getActiveMipmapLevel(),viewport:i.getViewport(new Be),scissor:i.getScissor(new Be),scissorTest:i.getScissorTest()};try{i.setScissorTest(!1);for(let l=0;l<64;l++){n.uSlice.value=(l+.5)/64,i.setRenderTarget(t,l);let h=i.getContext();if(l===0&&h.checkFramebufferStatus(h.FRAMEBUFFER)!==h.FRAMEBUFFER_COMPLETE)throw Error("Studio noise RGBA8 framebuffer is incomplete");i.render(a,o)}}catch(l){throw t.dispose(),l}finally{i.setRenderTarget(c.target,c.layer,c.mip),i.setViewport(c.viewport),i.setScissor(c.scissor),i.setScissorTest(c.scissorTest),r.dispose(),s.dispose()}return{target:t,texture:t.texture,size:64,storageBytes:64**3*4,dispose:()=>t.dispose()}}var xd=["high","ultra","performance"];function dg(i="high",{interactive:e=!1,studio:t=!1,recipe:n=!1,previewWidth:s=640,densityResolution:r=64}={}){if(!xd.includes(i))throw Error("Unknown viewport quality");return i==="performance"?{width:e?320:s,scale:s===640?.6:1,draft:e,steps:e?32:t?{64:72,96:88,128:104}[r]:48,shadows:e?t?8:n?6:3:t?24:n?16:5}:{width:Math.max(s,i==="ultra"?1280:960),maxWidth:i==="ultra"?2560:1920,scale:1,draft:!1,steps:i==="ultra"?128:t?104:96,shadows:i==="ultra"?t?32:24:t?24:16}}var kc=class{constructor(e){this.viewer=e,this.mode="high";let t=()=>Array.from({length:8},()=>new Be);Object.assign(e.uniforms,{uInverseRotation:{value:Array.from({length:8},()=>new Ne)},uTilted:{value:Array(8).fill(0)},uStableYaw:{value:t()},uStudioNoise:{value:e.texture},uCharacterFlags:{value:t()},uCharacterShape:{value:t()},uCharacterDetail:{value:t()},uSolidCuts:{value:new Int32Array(8)},uStudioLighting:{value:0},uAnisotropy:{value:.32},uScatterFill:{value:.2},uSunTint:{value:new Fe},uSkyTint:{value:new Fe}})}update(e){let t=this.viewer.uniforms,n=e.render?.look??_a(),s=e.volumes.filter(a=>a.enabled),r={...ms(e.version),SKY_FULL_ROTATION:s.some(sn)?1:0,SKY_SOFTNESS_PAINT:s.some(gs)?1:0,SKY_PAINT_HARDNESS:s.some(da)?1:0};Object.keys(r).some(a=>this.viewer.material.defines[a]!==r[a])&&(Object.assign(this.viewer.material.defines,r),this.viewer.material.needsUpdate=!0),s.some(a=>a.recipe?.character?.enabled)&&!this.noise&&(this.noise=ug(this.viewer.renderer)),t.uStudioNoise.value=this.noise?.texture??this.viewer.texture,t.uStudioLighting.value=n.enabled?1:0,t.uAnisotropy.value=n.anisotropy,t.uScatterFill.value=n.fill,t.uSunTint.value.set(n.sunColor),t.uSkyTint.value.set(n.skyColor),this.requiresCache=n.enabled||s.some(a=>a.recipe?.character?.enabled||a.recipe?.field);for(let a=0;a<8;a++){let o=s[a];t.uSolidCuts.value[a]=e.render?.cutMode==="solid"&&o?.role==="cut"&&o.recipe?.field?1:0;let c=(o?.yaw??0)*Math.PI/180;t.uTilted.value[a]=o&&sn(o)?1:0,o?t.uInverseRotation.value[a].fromArray(gd(o)):t.uInverseRotation.value[a].identity(),t.uStableYaw.value[a].set(Math.cos(c),Math.sin(c),Zp(o)?1:0,0);let l=o?.recipe?.character;t.uCharacterFlags.value[a].set(l?.enabled?1:0,...sm(s[a]?.seed??0)),t.uCharacterShape.value[a].set(l?.warpScale??1,l?.billowScale??1,l?.octave??0,l?.erosionScale??1),t.uCharacterDetail.value[a].set(l?.wisps??0,l?.cavities??0,l?.clipSoft??.07,l?.clipNoise??0)}}updateMaterial(e){let t=this.viewer,n=t.material,s=!!t.scene?.render?.look?.enabled,r=e.every((c,l)=>!c.recipe||t.uniforms.uCached.value[l]===1),a=!1,o={...ms(t.scene.version),SKY_SOLID_CUTS:t.scene.render?.cutMode==="solid"?1:0,SKY_FULL_ROTATION:e.some(sn)?1:0,SKY_SOFTNESS_PAINT:e.some(gs)?1:0,SKY_PAINT_HARDNESS:e.some(da)?1:0,SKY_STUDIO_FIELD:0,SKY_SOURCE_FIELD:0,SKY_STUDIO_LIGHTING:s?1:0,SKY_CACHED_RECIPES:r&&!a?1:0,SKY_ANALYTIC_RECIPES:a||!r&&e.some(c=>c.recipe)?1:0,SKY_SCENE_LIGHTING:s&&t.scene?.render?.look?.visibility==="scene-cache-v1"?1:0,SKY_VISIBILITY_LOOKUP:s&&t.uniforms.uUseVisibility?.value===1?1:0,SKY_OCCUPIED_PATHS:a||s||e.some(c=>c.recipe)?1:0,SKY_VIEW_LIMIT:s?192:128,SKY_SHADOW_LIMIT:s?40:24};Object.keys(o).some(c=>n.defines[c]!==o[c])&&(Object.assign(n.defines,o),n.needsUpdate=!0)}quality(e=!1){let t=this.viewer,n=t.scene?.render?.look?.enabled;return e?{steps:n?128:80,shadows:n?32:t.hasRecipe?24:8}:this.previewQuality()}previewQuality(){let e=this.viewer;return dg(this.mode,{interactive:!!e.interactive,studio:!!e.scene?.render?.look?.enabled,recipe:!!e.hasRecipe,previewWidth:e.scene?.render?.previewWidth??640,densityResolution:e.scene?.render?.densityResolution??64})}setMode(e){if(!xd.includes(e))throw Error("Unknown viewport quality");this.mode=e,this.applyQuality(),this.viewer.resize()}applyQuality(e=!1){let t=this.quality(e);this.viewer.uniforms.uSteps.value=t.steps,this.viewer.uniforms.uShadowSteps.value=t.shadows}};var fg=`// Mixed HG and artistic fill follow the supplied MIT reference, not solved multiple scattering.\r
float studioPhase(float mu,float g){return (1.0-g*g)/pow(max(.001,1.0+g*g-2.0*g*mu),1.5);}\r
float studioSkyVisibility(vec3 p){\r
  vec2 spans[8];int count=shadowSegments(p,vec3(0,1,0),22.0,spans);\r
  int samples=uShadowSteps>=32?16:(uShadowSteps>=24?12:4);float len=occupiedLength(spans,count),ds=len/float(samples),tau=0.0;\r
  for(int j=0;j<16;j++){if(j>=samples||tau>14.0)break;tau+=shadowDensity(p+vec3(0,1,0)*occupiedDistance(spans,count,(float(j)+.5)*ds))*ds;}\r
  return exp(-tau);\r
}\r
vec3 studioLight(vec3 p,vec3 rd){\r
  float mu=dot(rd,uSun),phase=.85*studioPhase(mu,uAnisotropy)+.15*studioPhase(mu,-.23);\r
  #if SKY_VISIBILITY_LOOKUP\r
  vec2 visibility=sceneVisibility(p);float sunT=visibility.x,skyT=visibility.y;\r
  #else\r
  float sunT=shadow(p),skyT=studioSkyVisibility(p);\r
  #endif\r
  return uSunTint*(uIntensity*phase*sunT)+uSkyTint*(uAmbient*(.20+.80*skyT))+mix(uSkyTint,uSunTint,.35)*(uScatterFill*.42*(1.0-sunT));\r
}\r
`;var pg=`#if SKY_SCENE_LIGHTING\r
float sceneDensity(vec3 p) {\r
  float total=0.0, cut=0.0;\r
  for (int i=0; i<8; i++) {\r
    if(i>=uCount) break;\r
    float d = volume(p,i);\r
    if(uPosition[i].w>0.0) total+=d; else cut=max(cut,d);\r
  }\r
  return min(total,uStudioLighting==1?20.0:5.0) * (1.0-clamp(cut,0.0,1.0));\r
}\r
int occupiedSceneSegments(vec3 ro,vec3 rd,float limit,out vec2 spans[8]) {\r
  int count=0;\r
  for(int i=0;i<8;i++) {\r
    if(i>=uCount)break;\r
    if(uPosition[i].w<0.0)continue;\r
    if(uRecipeFlags[i].x>0.5&&uRecipeInfo[i].x<0.5&&!(uProfile[i].z>0.5&&uCutCount[i]>0))continue;\r
    vec2 hit=supportHit(ro,rd,i);hit=vec2(max(0.0,hit.x),min(limit,hit.y));\r
    if(hit.y<=hit.x)continue;\r
    int insertion=count;\r
    for(int j=7;j>=0;j--) {\r
      if(j>=count)continue;\r
      if(spans[j].x>hit.x){spans[j+1]=spans[j];insertion=j;}\r
    }\r
    spans[insertion]=hit;count++;\r
  }\r
  int merged=0;\r
  for(int j=0;j<8;j++) {\r
    if(j>=count)break;\r
    vec2 hit=spans[j];\r
    if(merged>0&&hit.x<=spans[merged-1].y)spans[merged-1].y=max(spans[merged-1].y,hit.y);\r
    else {spans[merged]=hit;merged++;}\r
  }\r
  return merged;\r
}\r
\r
#define shadowDensity sceneDensity\r
#define shadowSegments occupiedSceneSegments\r
#else\r
#define shadowDensity density\r
#define shadowSegments occupiedSegments\r
#endif\r
`;function mg(i,e,t=256){if(!Number.isInteger(i)||i<0||i>8||![64,96,128,192,256].includes(e)||!Number.isInteger(t)||t<1)throw Error("Invalid visibility atlas layout");if(!i)return null;let n=i===1?[1,1,1]:i===2?[2,1,1]:i<=4?[2,2,1]:[2,2,2],s=n.map(r=>r*e);if(s.some(r=>r>t))throw Error("Visibility atlas exceeds the supported3D dimensions");return{count:i,resolution:e,cells:n,dimensions:s,payloadBytes:s.reduce((r,a)=>r*a)*4}}function gg(i,e){if(!i||!Number.isInteger(e)||e<0||e>=i.count)throw Error("Invalid visibility cell");let[t,n]=i.cells;return[e%t,Math.floor(e/t)%n,Math.floor(e/(t*n))]}function _g(i,e=i.render?.densityResolution??64,t="R16F"){if(![64,96,128,192,256].includes(e)||!["R16F","R8"].includes(t))throw Error("Invalid visibility density contract");return JSON.stringify(["scene-visibility-v1",e,t,...i.version>=25?[i.render.densityLink,i.render.cutMode]:[],i.sun.azimuth,i.sun.elevation,i.volumes.filter(n=>n.enabled).map(n=>[n.id,n.role,Ec(n),n.density,n.position,n.size,n.yaw,n.tilt??null,n.shapeScale??null])])}var yg=`
#if SKY_VISIBILITY_LOOKUP
uniform sampler3D uVisibility;
uniform int uUseVisibility,uVisibilitySlots[8];
uniform vec3 uVisibilityCells,uVisibilityDimensions;
uniform vec4 uVisibilityLo[8],uVisibilityHi[8];
vec2 sceneVisibility(vec3 p){
 for(int i=0;i<8;i++){
  if(i>=uCount)break;int slot=uVisibilitySlots[i];if(slot<0)continue;
  vec3 delta=p-uPosition[i].xyz;float c=cos(uSize[i].w),s=sin(uSize[i].w);
  if(uStableYaw[i].z>.5){c=uStableYaw[i].x;s=uStableYaw[i].y;}
  vec3 q=vec3(c*delta.x-s*delta.z,delta.y,s*delta.x+c*delta.z)/uSize[i].xyz;
  #if SKY_FULL_ROTATION
  if(uTilted[i]==1)q=(uInverseRotation[i]*delta)/uSize[i].xyz;
  #endif
  vec3 uv=(q-uVisibilityLo[i].xyz)/(uVisibilityHi[i].xyz-uVisibilityLo[i].xyz);
  if(any(lessThan(uv,vec3(0)))||any(greaterThan(uv,vec3(1))))continue;
  float n=uVisibilityLo[i].w,x=mod(float(slot),uVisibilityCells.x),y=mod(floor(float(slot)/uVisibilityCells.x),uVisibilityCells.y),z=floor(float(slot)/(uVisibilityCells.x*uVisibilityCells.y));
  vec3 atlas=(vec3(x,y,z)*n+clamp(uv*n,vec3(.5),vec3(n-.5)))/uVisibilityDimensions;
  return texture(uVisibility,atlas).rg;
 }return vec2(1);
}
#endif
`,iE=`
uniform int uVisibilityCookIndex;uniform float uVisibilitySlice;
uniform vec3 uVisibilityCookLo,uVisibilityCookHi;
void main(){
 int i=uVisibilityCookIndex;vec3 q=mix(uVisibilityCookLo,uVisibilityCookHi,vec3(vUV,uVisibilitySlice)),p=q*uSize[i].xyz;
 #if SKY_FULL_ROTATION
 if(uTilted[i]==1)p=transpose(uInverseRotation[i])*p;else
 #endif
 {float c=cos(uSize[i].w),s=sin(uSize[i].w);if(uStableYaw[i].z>.5){c=uStableYaw[i].x;s=uStableYaw[i].y;}p=vec3(c*p.x+s*p.z,p.y,-s*p.x+c*p.z);}
 p+=uPosition[i].xyz;outColor=vec4(shadow(p),studioSkyVisibility(p),0,1);
}`,zc=class{constructor(e){this.viewer=e,this.sceneKeys=new WeakMap,this.format=e.renderer.extensions.has("EXT_color_buffer_float")?"RG16F":"RGBA8",this.cooks=0,this.createdTargets=0,this.disposedTargets=0,this.error=null,this.disabled=!1,this.fallback=new Jt(new Uint8Array([255,255,0,255]),1,1,1),Object.assign(this.fallback,{format:gt,type:ot,unpackAlignment:1,needsUpdate:!0});let t=()=>Array.from({length:8},()=>new Be);Object.assign(e.uniforms,{uVisibility:{value:this.fallback},uUseVisibility:{value:0},uVisibilitySlots:{value:Array(8).fill(-1)},uVisibilityCells:{value:new I(1,1,1)},uVisibilityDimensions:{value:new I(1,1,1)},uVisibilityLo:{value:t()},uVisibilityHi:{value:t()}}),this.uniforms={...e.uniforms,uVisibilityCookIndex:{value:0},uVisibilitySlice:{value:0},uVisibilityCookLo:{value:new I},uVisibilityCookHi:{value:new I}};let n=e.material.fragmentShader,s=n.indexOf("void main() {");if(s<0)throw Error("Visibility prototype requires the cloud evaluator");this.material=new oi({uniforms:this.uniforms,vertexShader:e.material.vertexShader,fragmentShader:n.slice(0,s)+iE,defines:{...e.material.defines,SKY_SCENE_LIGHTING:1,SKY_VISIBILITY_LOOKUP:0},glslVersion:Si,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.pass=new ai,this.pass.add(new re(e.quad.geometry,this.material)),this.camera=new vi}clear(){this.target&&(this.target.dispose(),this.disposedTargets++),this.target=null,this.key=null,this.layout=null,this.viewer.uniforms.uVisibility.value=this.fallback,this.viewer.uniforms.uUseVisibility.value=0}requestKey(e,t){let n=this.sceneKeys.get(e);n||(n=new Map,this.sceneKeys.set(e,n));let s=t+":"+this.viewer.densityCache.format;return n.has(s)||n.set(s,_g(e,t,this.viewer.densityCache.format)),n.get(s)}ensure(e,{draft:t=!1,requested:n=!1}={}){let s=this.viewer,r=s.uniforms;if(r.uUseVisibility.value=0,!n){this.clear(),this.disabled=!1,this.error=null,this.failedKey=null;return}if(r.uSolo.value>=0&&r.uInspect.value<4)return;let a=e.map((l,h)=>({volume:l,index:h})).filter(({volume:l})=>l.role==="add");if(!a.length){this.clear();return}let o=s.scene.render?.densityLink?Math.max(64,...Array.from(s.densityCache.entries.values(),l=>l.size)):s.densityCache.size,c=this.requestKey(s.scene,o);if(!(this.disabled&&this.failedKey===c)){if(this.failedKey!==c&&(this.disabled=!1,this.error=null),this.target&&this.key===c){r.uUseVisibility.value=1;return}if(!t)try{let l=s.renderer.getContext().getParameter(s.renderer.getContext().MAX_3D_TEXTURE_SIZE),h=mg(a.length,o,l);for(let d=0;d<2;d++)try{(!this.target||JSON.stringify(this.layout)!==JSON.stringify(h))&&(this.clear(),this.layout=h,this.target=new dn(...h.dimensions,{format:this.format==="RG16F"?Zi:gt,type:this.format==="RG16F"?Zt:ot,minFilter:Je,magFilter:Je,depthBuffer:!1,stencilBuffer:!1}),this.createdTargets++),r.uVisibilitySlots.value.fill(-1),r.uVisibilityCells.value.fromArray(h.cells),r.uVisibilityDimensions.value.fromArray(h.dimensions);for(let[u,{volume:f,index:g}]of a.entries()){let v=r.uSize.value[g],m=r.uWarp.value[g].w,p=f.recipe?r.uCacheLo.value[g].toArray().slice(0,3):[-m/v.x,-m/v.y,-m/v.z],S=f.recipe?r.uCacheHi.value[g].toArray().slice(0,3):[m/v.x,m/v.y,m/v.z];r.uVisibilitySlots.value[g]=u,r.uVisibilityLo.value[g].set(...p,o),r.uVisibilityHi.value[g].set(...S,0)}this.cook(a,h),this.key=c,this.failedKey=null,this.disabled=!1,this.error=null,this.cooks++,r.uVisibility.value=this.target.texture,r.uUseVisibility.value=1;return}catch(u){if(this.clear(),this.format==="RG16F"){this.fallbackReason=u.message,this.format="RGBA8";continue}throw u}}catch(l){this.clear(),this.error=l.message,this.disabled=!0,this.failedKey=c}}}cook(e,t){let n=this.viewer,s=n.renderer,r=n.uniforms,a=s.getContext(),o=s.getRenderTarget(),c=s.getActiveCubeFace(),l=s.getActiveMipmapLevel(),h=s.getViewport(new Be),d=s.getScissor(new Be),u=s.getScissorTest(),f={solo:r.uSolo.value,inspect:r.uInspect.value,shadows:r.uShadowSteps.value,occupied:r.uOccupied.value},g={...n.material.defines,SKY_VISIBILITY_LOOKUP:0};JSON.stringify(g)!==JSON.stringify(this.material.defines)&&(this.material.defines=g,this.material.needsUpdate=!0),r.uSolo.value=-1,r.uInspect.value=4,r.uShadowSteps.value=32,r.uOccupied.value=1;try{for(let[v,{index:m}]of e.entries()){let p=gg(t,v),S=t.resolution;this.uniforms.uVisibilityCookIndex.value=m,this.uniforms.uVisibilityCookLo.value.copy(r.uVisibilityLo.value[m]),this.uniforms.uVisibilityCookHi.value.copy(r.uVisibilityHi.value[m]);for(let T=0;T<S;T++){if(this.uniforms.uVisibilitySlice.value=(T+.5)/S,s.setRenderTarget(this.target,p[2]*S+T),s.setViewport(p[0]*S,p[1]*S,S,S),s.setScissor(p[0]*S,p[1]*S,S,S),s.setScissorTest(!0),T===0&&a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE)throw Error("Visibility "+this.format+" framebuffer is incomplete");s.render(this.pass,this.camera)}}if(a.getError()!==a.NO_ERROR)throw Error("GPU error during visibility cooking")}finally{r.uSolo.value=f.solo,r.uInspect.value=f.inspect,r.uShadowSteps.value=f.shadows,r.uOccupied.value=f.occupied,s.setRenderTarget(o,c,l),s.setViewport(h),s.setScissor(d),s.setScissorTest(u)}}info(){return{sampling:{sun:32,sky:16,shadowDistance:22,scope:"all enabled scene density"},enabled:!!this.viewer.uniforms.uUseVisibility.value,error:this.error,format:this.format,fallbackReason:this.fallbackReason??null,resolution:this.layout?.resolution??0,cells:this.layout?.count??0,dimensions:this.layout?.dimensions??[],storageBytes:this.layout?.payloadBytes??0,cooks:this.cooks,createdTargets:this.createdTargets,disposedTargets:this.disposedTargets,note:"Payload excludes density and driver allocations; interpolation is bounded to each cell."}}transport(){let e=this.info();return{model:this.viewer.scene.render?.look?.visibility??"direct-v1",path:e.enabled?"local-atlas":this.viewer.scene.render?.look?.visibility==="scene-cache-v1"&&this.viewer.scene.render.look.enabled?"scene-direct":"original-direct",scope:this.viewer.scene.render?.look?.visibility==="scene-cache-v1"&&this.viewer.scene.render.look.enabled?"all enabled scene density":"legacy selected-cloud policy",sunSamples:e.enabled?32:this.viewer.uniforms.uShadowSteps.value,skySamples:e.enabled?16:this.viewer.scene.render?.look?.enabled?this.viewer.uniforms.uShadowSteps.value>=32?16:this.viewer.uniforms.uShadowSteps.value>=24?12:4:0,shadowDistance:22,format:e.enabled?e.format:null,resolution:e.resolution,cells:e.cells,dimensions:e.dimensions,payloadBytes:e.storageBytes}}dispose(){this.clear(),this.material.dispose(),this.fallback.dispose()}};var Hc=class{constructor(e){this.viewer=e;let t=this.canvas=e.renderer.domElement,n=e.orbit;n.mouseButtons.LEFT=null,n.mouseButtons.RIGHT=null,n.mouseButtons.MIDDLE=Qt.PAN,t.addEventListener("pointerdown",r=>{if(t.focus({preventScroll:!0}),r.button!==1||!this.allowed()||this.pointer!==void 0)return;this.pointer=r.pointerId,this.previous=n.enabled,n.enabled=!0,this.pivot=r.altKey?n.target.clone():null;let a=r.ctrlKey||r.metaKey||r.shiftKey;n.mouseButtons.MIDDLE=r.altKey&&r.ctrlKey?Qt.DOLLY:r.altKey?a?Qt.PAN:Qt.ROTATE:a?Qt.ROTATE:Qt.PAN,r.preventDefault()},!0);let s=r=>{if(r.pointerId!==this.pointer)return;let a=this.previous;this.pointer=void 0,setTimeout(()=>{this.pointer===void 0&&(n.enabled=a&&e.mode!=="sky")},0)};for(let r of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(r,s,!0);t.addEventListener("wheel",()=>{if(!this.allowed())return;let r=n.enabled;n.enabled=!0,this.pointer===void 0&&(this.pivot=n.target.clone()),setTimeout(()=>{this.pointer===void 0&&(n.enabled=r&&e.mode!=="sky")},0)},{capture:!0,passive:!0}),n.addEventListener("end",()=>{this.pivot&&(e.camera.position.add(this.pivot.clone().sub(n.target)),n.target.copy(this.pivot),this.pivot=null,e.dirty=!0)}),window.addEventListener("blur",()=>this.cancel())}cancel(){this.pointer!==void 0&&this.canvas.dispatchEvent(new PointerEvent("pointercancel",{pointerId:this.pointer,bubbles:!0}))}allowed(){return this.viewer.mode!=="sky"&&!this.viewer.gizmo.dragging&&!this.viewer.events.brushActive?.()}};var Vc=class{constructor(e,t){this.owner=e,this.create=t,this.entries=new Map,this.retiredUploads=0,this.retiredScans=0}update(e,t){this.active=e.volumes.filter(s=>s.enabled);let n=new Set(this.active.filter(s=>s.recipe?.field).map(s=>s.id));for(let[s,r]of this.entries)n.has(s)||(this.retiredUploads+=r.uploads,this.retiredScans+=r.supportScans,r.dispose(),this.entries.delete(s));for(let s of this.active)if(s.recipe?.field){let r=this.entries.get(s.id);r||(r=this.create(),this.entries.set(s.id,r)),r.update({...e,volumes:[s]})}this.selected=this.active.findIndex(s=>s.id===t&&s.recipe?.field),this.selected<0&&(this.selected=this.active.findIndex(s=>s.recipe?.field)),this.restoreBinding()}bind(e){let t=this.entries.get(this.active[e]?.id),n=this.owner.viewer.uniforms;n.uSourceFieldIndex.value=t?e:-1,n.uSourceField.value=t?.texture??this.owner.viewer.texture,t&&(n.uSourceFieldLo.value.fromArray(t.grid.bounds.lo),n.uSourceFieldHi.value.fromArray(t.grid.bounds.hi))}restoreBinding(){this.bind(this.selected)}supportBounds(e,t){let n=[...this.entries.values()].find(s=>s.key===e.data&&s.boundsKey===JSON.stringify(e.bounds));return n?n.supportBounds(e,t):null}info(){let e=this.entries.get(this.active[this.selected]?.id);return{active:this.entries.size>0,resolution:e?.texture?.image.width??0,fields:this.entries.size,uploads:this.owner.uploads+this.retiredUploads+[...this.entries.values()].reduce((t,n)=>t+n.uploads,0),supportScans:this.owner.supportScans+this.retiredScans+[...this.entries.values()].reduce((t,n)=>t+n.supportScans,0),storageBytes:[...this.entries.values()].reduce((t,n)=>t+(n.texture?.image.data.byteLength??0),0)}}close(){for(let e of this.entries.values())e.dispose();this.entries.clear()}};var Gc=class i{constructor(e){this.viewer=e,this.uploads=0,this.supportCache=new Map,this.supportScans=0,Object.assign(e.uniforms,{uSourceField:{value:e.texture},uSourceFieldIndex:{value:-1},uSourceFieldLo:{value:new I},uSourceFieldHi:{value:new I(1,1,1)}})}update(e,t){if(e.version>=21&&e.volumes.filter(l=>l.enabled&&l.recipe?.field).length>1){this.multi||(this.texture?.dispose(),this.texture=null,this.key=null,this.grid=null,this.supportCache.clear(),this.multi=new Vc(this,()=>new i({uniforms:{},texture:this.viewer.texture}))),this.multi.update(e,t);return}this.multi&&(this.multi.close(),this.multi=null,this.key=null,this.grid=null,this.boundsKey=null);let n=this.viewer.uniforms,s=e.volumes.filter(l=>l.enabled),r=s.findIndex(l=>l.recipe?.field);if(n.uSourceFieldIndex.value=r,r<0){this.texture?.dispose(),this.texture=null,this.key=null,this.boundsKey=null,this.grid=null,this.supportCache.clear(),n.uSourceField.value=this.viewer.texture;return}let a=s[r].recipe.field,o=JSON.stringify(a.bounds),c=a.data!==this.key;if((c||o!==this.boundsKey)&&(this.grid=nn(a),this.supportCache.clear()),this.texture&&this.texture.image.width!==this.grid.n&&(this.texture.dispose(),this.texture=null),c||!this.texture){this.texture||(this.texture=new Jt(new Float32Array(this.grid.values.length),this.grid.n,this.grid.n,this.grid.n),Object.assign(this.texture,{format:qi,type:Dt,minFilter:mt,magFilter:mt,unpackAlignment:1,generateMipmaps:!1}));let l=this.texture.image.data;for(let h=0;h<l.length;h++)l[h]=this.grid.values[h]/vn;this.texture.needsUpdate=!0,this.uploads++}this.key=a.data,this.boundsKey=o,n.uSourceField.value=this.texture,n.uSourceFieldLo.value.fromArray(a.bounds.lo),n.uSourceFieldHi.value.fromArray(a.bounds.hi)}supportBounds(e,t){if(this.multi){let r=this.multi.supportBounds(e,t);if(r)return r}if(!(this.grid&&e.data===this.key&&JSON.stringify(e.bounds)===this.boundsKey))return this.supportScans++,Ts(e,t);this.supportCache.has(t)||(this.supportCache.size>=4&&this.supportCache.delete(this.supportCache.keys().next().value),this.supportScans++,this.supportCache.set(t,Ts(e,t,this.grid)));let s=this.supportCache.get(t);return{...s,lo:[...s.lo],hi:[...s.hi]}}bindCook(e){this.multi?.bind(e)}restoreBinding(){this.multi?.restoreBinding()}dispose(){this.multi?.close(),this.texture?.dispose(),this.texture=null}info(){return this.multi?this.multi.info():{active:this.viewer.uniforms.uSourceFieldIndex.value>=0,resolution:this.texture?.image.width??0,uploads:this.uploads,supportScans:this.supportScans,storageBytes:this.texture?.image.data.byteLength??0}}};var Wc=class{constructor(e){this.gl=e,this.fence=null,this.enabled=!0,this.submitted=0,this.waits=0,this.error=null}ready(){let e=this.gl;if(e.isContextLost())return this.fence=null,!1;if(!this.enabled||!this.fence)return!0;let t=e.clientWaitSync(this.fence,0,0);return t===e.TIMEOUT_EXPIRED?(this.waits++,!1):(this.clear(),t===e.WAIT_FAILED&&(this.enabled=!1,this.error="GPU completion polling failed"),!0)}submit(){let e=this.gl;return!this.enabled||e.isContextLost()||this.fence?!1:(this.fence=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),this.fence?(this.submitted++,e.flush(),!0):(this.enabled=!1,this.error="GPU frame fence unavailable",!1))}clear(){this.fence&&!this.gl.isContextLost()&&this.gl.deleteSync(this.fence),this.fence=null}info(){return{enabled:this.enabled,inFlight:!!this.fence,submitted:this.submitted,waits:this.waits,error:this.error}}};function vd(i,e){let t=ni(i);if(sn(i))return J0(i,e.map((o,c)=>o*t[c]));let n=e.map((o,c)=>o*t[c]),s=i.yaw*Math.PI/180,r=Math.cos(s),a=Math.sin(s);return[r*n[0]+a*n[2],n[1],-a*n[0]+r*n[2]]}function xg(i,e){return vd(i,e).map((t,n)=>t+i.position[n])}function vg(i,e,t){let n=new Be,s=r=>{if(e.dragging)return;if(!t()){e.viewport=null;return}let a=i.getBoundingClientRect(),o=a.width/2;e.viewport=n.set(r.clientX<a.left+o?0:o,0,o,a.height)};return i.addEventListener("pointermove",s,{capture:!0}),i.addEventListener("pointerdown",s,{capture:!0}),()=>{i.removeEventListener("pointermove",s,{capture:!0}),i.removeEventListener("pointerdown",s,{capture:!0})}}var Xc=class{constructor(e){this.viewer=e}set(e){let t=this.viewer;if(e&&(!t.workshop||t.mode==="sky"||!t.scene?.volumes.some(s=>s.id===t.selectedId&&s.enabled&&s.role==="add"&&s.recipe?.field)))return!1;let n=ag(t.camera,t.orbit.target,e);return n===t.camera||(t.camera=n,t.orbit.object=n,t.gizmo.camera=n,t.sourceMesh?.influence.clear(),t.resize(),t.orbit.update(),t.dirty=!0),!0}reference(){if(!this.set(!0))return!1;let e=this.viewer;e.resize();let t=e.scene.volumes.find(l=>l.id===e.selectedId),n=Math.max(...t.size.map((l,h)=>l*(t.shapeScale?.[h]??1))),s=Ic(e.camera),r=.12,a=.055,o=new I(Math.sin(r)*Math.cos(a),Math.sin(a),-Math.cos(r)*Math.cos(a)),c=Math.max(2,2.95/s)*n;return e.camera.zoom=1,e.camera.top=c,e.camera.bottom=-c,e.camera.left=-c*s,e.camera.right=c*s,e.camera.near=.01,e.camera.far=Math.max(300,n*30),e.orbit.target.fromArray(t.position),e.camera.position.copy(e.orbit.target).addScaledVector(o,-8*n),e.camera.updateProjectionMatrix(),e.orbit.update(),e.sourceMesh?.influence.clear(),e.dirty=!0,!0}};var nE=`precision highp float;
in vec3 position; out vec2 vUV;
void main(){vUV=position.xy*0.5+0.5;gl_Position=vec4(position.xy,0,1);}`,Yc=class{constructor(e,t){this.events=t,this.renderer=new Gl({canvas:e,antialias:!1,preserveDrawingBuffer:!0}),this.frameQueue=new Wc(this.renderer.getContext()),e.addEventListener("webglcontextlost",()=>this.frameQueue.clear()),this.renderer.setPixelRatio(1),this.renderer.autoClear=!1,this.camera=new kt(55,16/9,.1,300),this.camera.position.set(11,6,-5),this.orbit=new ql(this.camera,e),this.orbit.target.set(0,3,8),this.orbit.enableDamping=!1,this.orbit.update(),this.orbit.addEventListener("change",()=>{this.dirty=!0}),this.orbit.addEventListener("start",()=>this.setInteractive(!0)),this.orbit.addEventListener("end",()=>this.setInteractive(!1));let n=$0();this.texture=new Jt(n.data,n.size,n.size,n.size),Object.assign(this.texture,{format:gt,type:ot,minFilter:Je,magFilter:Je,wrapS:Ai,wrapT:Ai,wrapR:Ai,unpackAlignment:1,needsUpdate:!0});let s=()=>Array.from({length:8},()=>new Be);this.scaffoldData=new Float32Array(Ha*2*8*4),this.scaffoldTexture=new mn(this.scaffoldData,Ha*2,8,gt,Dt),this.scaffoldTexture.needsUpdate=!0,this.sculptData=new Float32Array(256*4),this.sculptTexture=new mn(this.sculptData,32,8,gt,Dt),this.sculptTexture.needsUpdate=!0,this.maskWidth=2*(Su+tc*wu),this.maskData=new Float32Array(this.maskWidth*8*4),this.cutData=new Float32Array(256*4),this.maskTexture=new mn(this.maskData,this.maskWidth,8,gt,Dt),this.cutTexture=new mn(this.cutData,32,8,gt,Dt),this.maskTexture.needsUpdate=!0,this.cutTexture.needsUpdate=!0,this.uniforms={uNoise:{value:this.texture},uInvPV:{value:new je},uOrigin:{value:new I},uSun:{value:new I},uZenith:{value:new Fe},uHorizon:{value:new Fe},uLo:{value:new I},uHi:{value:new I},uIntensity:{value:1},uAmbient:{value:.2},uExposure:{value:1},uCount:{value:0},uPanorama:{value:0},uSteps:{value:48},uShadowSteps:{value:5},uPosition:{value:s()},uSize:{value:s()},uForm:{value:s()},uWarp:{value:s()},uScaffold:{value:this.scaffoldTexture},uRecipeInfo:{value:s()},uRecipeFlags:{value:s()},uSolo:{value:-1},uInspect:{value:4},uProfile:{value:s()},uSculpt:{value:this.sculptTexture},uSculptCount:{value:new Int32Array(8)},uOrthographic:{value:0},uCameraNear:{value:.1},uCloudBackdrop:{value:1},uLinear:{value:0},uIncludeSun:{value:1},uTileUV:{value:new Be(1,1,0,0)},uMasks:{value:this.maskTexture},uCuts:{value:this.cutTexture},uMaskCount:{value:new Int32Array(8)},uCutCount:{value:new Int32Array(8)}},Object.assign(this.uniforms,{uLayerCount:{value:new Int32Array(8)},uLayerInfo:{value:Array.from({length:8*tc},()=>new Be)}}),Object.assign(this.uniforms,{uCached:{value:new Int32Array(8)},uCacheLo:{value:s()},uCacheHi:{value:s()},uOccupied:{value:0},uSupportLo:{value:s()},uSupportHi:{value:s()}}),this.field=new Gc(this),this.fieldSupport=(a,o)=>this.field.supportBounds(a,o),this.studio=new kc(this),this.densityCache=new Tc(this.renderer,this.uniforms,this.fieldSupport,this.field);for(let a=0;a<8;a++)this.uniforms[`uDensity${a}`]={value:this.densityCache.fallback};this.material=new oi({uniforms:this.uniforms,vertexShader:nE,fragmentShader:Dp.replace("/* RECIPE_FIELD */",ec).replace("/* OCCUPIED_INTERVALS */",Op).replace("/* SCULPT_FIELD */",hr).replace("/* MODIFIER_FIELDS */",ur).replace("/* STUDIO_LIGHTING */",fg).replace("/* SCENE_LIGHTING */",pg).replace("/* VISIBILITY_LOOKUP */",yg),defines:{SKY_STUDIO_FIELD:0,SKY_SOURCE_FIELD:0,SKY_STUDIO_LIGHTING:0,SKY_CACHED_RECIPES:0,SKY_ANALYTIC_RECIPES:0,SKY_OCCUPIED_PATHS:0,SKY_VIEW_LIMIT:96,SKY_SHADOW_LIMIT:24},glslVersion:Si,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.pass=new ai,this.quad=new re(new _i(2,2),this.material),this.pass.add(this.quad),this.visibilityCache=new zc(this),this.screenCamera=new vi,this.overlay=new ai,this.proxy=new Lt,this.overlay.add(this.proxy),this.gizmoCenter=[0,0,0],this.gizmo=new Jl(this.camera,e),this.overlay.add(this.gizmo.getHelper()),vg(e,this.gizmo,()=>this.splitSource);let r=()=>{this.gizmo.object&&this.overlay.updateMatrixWorld(!0)};e.addEventListener("pointermove",r,{capture:!0}),e.addEventListener("pointerdown",r,{capture:!0}),this.gizmo.setSize(.8),this.navigation=new Hc(this),this.projection=new Xc(this),this.gizmo.addEventListener("dragging-changed",a=>{this.orbit.enabled=!a.value&&this.mode!=="sky"}),this.gizmo.addEventListener("mouseDown",()=>{this.setInteractive(!0),t.begin()}),this.gizmo.addEventListener("objectChange",()=>{let a=this.scene?.volumes.find(h=>h.id===this.selectedId),o=Y0(a??{},this.proxy.scale.toArray()),c=ng(this.proxy),l=vd({size:o,...c},this.gizmoCenter);this.proxy.scale.fromArray(o),t.transform({position:this.proxy.position.toArray().map((h,d)=>h-l[d]),size:o,...c}),this.dirty=!0}),this.gizmo.addEventListener("mouseUp",()=>{this.setInteractive(!1),t.commit()}),e.addEventListener("pointercancel",()=>{this.cancelDrag(),t.cancel()}),this.box=new os(new zt,16042366),this.overlay.add(this.box),this.mode="orbit",this.dirty=!0,this.frameMs=0,this.frames=0,this.skyYaw=0,this.skyPitch=Math.atan(.3),this.skyDrag=null,e.addEventListener("pointerdown",a=>{this.mode!=="sky"||a.button!==0||(this.skyDrag={x:a.clientX,y:a.clientY,yaw:this.skyYaw,pitch:this.skyPitch},e.setPointerCapture(a.pointerId),this.setInteractive(!0))}),e.addEventListener("pointermove",a=>{this.skyDrag&&(this.skyYaw=this.skyDrag.yaw-(a.clientX-this.skyDrag.x)*.005,this.skyPitch=Math.max(-1.5,Math.min(1.5,this.skyDrag.pitch+(a.clientY-this.skyDrag.y)*.005)),this.skyCamera(),this.dirty=!0)});for(let a of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(a,()=>{this.skyDrag&&(this.skyDrag=null,this.setInteractive(!1))});this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.parentElement),this.resize(),this.animate()}resize(){let e=this.renderer.domElement.getBoundingClientRect();this.cssWidth=e.width,this.cssHeight=e.height;let t=this.studio.previewQuality(),n=this.splitSource?2:1,s=Math.min((t.maxWidth??t.width)*n,Math.max(160,Math.round(e.width*(this.splitSource?1:t.scale)))),r=Math.max(100,Math.round(s*e.height/e.width));(this.renderer.domElement.width!==s||this.renderer.domElement.height!==r)&&this.renderer.setSize(s,r,!1),rg(this.camera,s/r/(this.splitSource?2:1)),this.dirty=!0}setScene(e,t,n=!0){if(this.sculptEvaluation??=new Bc(this),e=this.sculptEvaluation.update(e,t,n),!e)return;this.scene=structuredClone(e),this.selectedId=t,this.camera.isOrthographicCamera&&!e.volumes.some(l=>l.id===t&&l.enabled&&l.role==="add"&&l.recipe?.field)&&this.projection.set(!1),this.field.update(e,t),this.studio.update(e),this.splitSource&&this.sourceMesh.update(this.scene,t),this.densityCache.setResolution(e.render?.densityResolution??64),this.densityCache.policy=e.render,this.densityCache.version=e.version,this.layerStride=e.version>=25?8:4;let s=this.uniforms,r=e.volumes.filter(l=>l.enabled);s.uCount.value=r.length;let a=this.previewBounds();this.hasRecipe=r.some(l=>l.recipe),s.uOccupied.value=this.hasRecipe||e.render?.look?.visibility==="scene-cache-v1"?1:0,s.uShadowSteps.value=this.hasRecipe?this.interactive?6:16:this.interactive?3:5,s.uLo.value.fromArray(a.lo),s.uHi.value.fromArray(a.hi),s.uSun.value.fromArray(Q0(e.sun)),s.uIntensity.value=e.sun.intensity,s.uAmbient.value=e.sun.ambient,s.uExposure.value=e.sky.exposure,s.uZenith.value.set(e.sky.zenith),s.uHorizon.value.set(e.sky.horizon),r.forEach((l,h)=>{s.uPosition.value[h].set(...l.position,l.role==="add"?1:-1),s.uSize.value[h].set(...ni(l),l.yaw*Math.PI/180),s.uForm.value[h].set(l.noiseScale,l.erosion,l.density,0),s.uWarp.value[h].set(l.displacement,l.smear,l.seed/137,Xa(l,this.fieldSupport)),s.uRecipeFlags.value[h].set(0,0,0,0),s.uRecipeInfo.value[h].set(0,0,0,.3),s.uProfile.value[h].set(1,1,0,0),s.uSculptCount.value[h]=l.recipe?.sculpt?.length??0,s.uMaskCount.value[h]=l.recipe?.masks?.length??0,s.uLayerCount.value[h]=l.recipe?.layers?.length??0;let d=l.recipe?.massMode==="ordered",u=l.recipe?fr(l.recipe):[],f=d?u:u.filter(g=>g.role==="cut");if(s.uCutCount.value[h]=f.length,l.recipe){let g=l.recipe,{segments:v,primaryCount:m}=Ga(g);s.uProfile.value[h].set(g.profile.edgeGamma??1,g.profile.interiorVariation??1,d?1:0,0),(g.sculpt??[]).forEach((_,b)=>{this.sculptData.set([..._.center,_.radius],(h*32+b*2)*4),this.sculptData.set([..._.delta,_.enabled?_.gain:0],(h*32+b*2+1)*4)}),(g.masks??[]).forEach((_,b)=>{this.maskData.set([..._.center,_.radius],(h*this.maskWidth+b*2)*4),this.maskData.set([_.value,bu.indexOf(_.channel),_.enabled?1:0,0],(h*this.maskWidth+b*2+1)*4)});let p=g.masks?.length??0,S=gs(l);(g.layers??[]).forEach((_,b)=>{s.uLayerInfo.value[h*this.layerStride+b].set(_.target,_.enabled&&(_.channel!=="softness"||S)?_.opacity:0,dr[_.channel].id,_.stamps.length),_.stamps.forEach((E,A)=>{this.maskData.set([...E.center,E.radius],(h*this.maskWidth+(p+A)*2)*4),this.maskData.set([E.value,_.hardness??0,E.enabled?1:0,0],(h*this.maskWidth+(p+A)*2+1)*4)}),p+=_.stamps.length}),f.forEach((_,b)=>{this.cutData.set([..._.a,_.radius],(h*32+b*2)*4),this.cutData.set([..._.b,d?_.role==="add"?1:-1:_.radius],(h*32+b*2+1)*4)});let T=Hi(l,4,this.fieldSupport);s.uSupportLo.value[h].set(...T.lo,0),s.uSupportHi.value[h].set(...T.hi,0),s.uRecipeInfo.value[h].set(g.field?1:v.length,g.field?1:m,g.billow.enabled?g.billow.strength:0,g.profile.feather),s.uRecipeFlags.value[h].set(1,g.erosion.enabled?1:0,g.base.height,g.base.enabled?1:0),v.forEach(({a:_,b},E)=>{this.scaffoldData.set([..._.position,_.radius],(h*Ha*2+E*2)*4),this.scaffoldData.set([...b.position,b.radius],(h*Ha*2+E*2+1)*4)})}}),this.scaffoldTexture.needsUpdate=!0,this.sculptTexture.needsUpdate=!0,this.maskTexture.needsUpdate=!0,this.cutTexture.needsUpdate=!0,s.uSolo.value=this.workshop?r.findIndex(l=>l.id===t):-1,this.workshop&&s.uSolo.value<0&&(s.uSolo.value=8);let o=e.volumes.find(l=>l.id===t);if(this.box.visible=!!o&&this.mode!=="sky"&&!this.workshop,o){if(n){let d=[0,0,0];if(o.recipe?.field&&(!this.workshop||this.workshopTransform)){let u=Hi(o,0,this.fieldSupport);d=u.lo.map((f,g)=>(f+u.hi[g])/2)}this.gizmoCenter=d.map((u,f)=>u*(o.shapeScale?.[f]??1)),this.proxy.position.fromArray(xg(o,d)),this.proxy.scale.fromArray(o.size),Rc(this.proxy,o)}let l=new I(...o.position),h=new I(...ni(o)).multiplyScalar(2);if(this.box.box.setFromCenterAndSize(l,h),o.recipe?.field||sn(o)){let d=o.recipe?Hi(o,4,this.fieldSupport):{lo:[-1,-1,-1],hi:[1,1,1]},u=new je().compose(l,qa(o),new I(...ni(o)));this.box.box.set(new I(...d.lo),new I(...d.hi)).applyMatrix4(u)}this.mode!=="sky"&&(!this.workshop||this.workshopTransform)?this.gizmo.attach(this.proxy):this.gizmo.detach()}else this.gizmo.detach();this.mode==="sky"&&this.skyCamera();let c=e.render?.previewWidth??640;this.previewQuality!==c&&(this.previewQuality=c,this.resize()),this.studio.applyQuality(),this.dirty=!0}previewBounds(){return Ya(this.workshop?{volumes:this.scene.volumes.filter(e=>e.id===this.selectedId)}:this.scene,this.fieldSupport)}setWorkshop(e){this.workshopTransform=!1,e||(this.projection.set(!1),this.setSourceView(!1)),this.workshop=e,e?(this.composerCamera={position:this.camera.position.clone(),target:this.orbit.target.clone()},this.setView("orbit"),this.focusSelected()):this.composerCamera&&(this.camera.position.copy(this.composerCamera.position),this.orbit.target.copy(this.composerCamera.target),this.orbit.update()),this.sculptEvaluation?.pending||this.setScene(this.scene,this.selectedId)}setSourceView(e){this.splitSource=!!e&&!!this.workshop,this.splitSource&&(this.sourceMesh??=new Uc(this),this.sourceMesh.update(this.scene,this.selectedId),this.sourceMesh.health.refresh()),this.splitSource||(this.sourceMesh?.health.invalidate(),this.sourceMesh?.influence.clear()),document.getElementById("sculpt-health-panel").hidden=!this.splitSource,document.getElementById("source-mesh-labels").hidden=!this.splitSource,this.resize()}pointerRect(e){let t=this.renderer.domElement.getBoundingClientRect();if(!this.splitSource)return{left:t.left,top:t.top,width:t.width,height:t.height,source:!1};let n=t.width/2,s=e.clientX<t.left+n;return{left:t.left+(s?0:n),top:t.top,width:n,height:t.height,source:s}}focusSelected(e=!1,t=!1){if(this.sculptEvaluation?.pending){this.sculptEvaluation.focusRequest={selected:this.sculptEvaluation.latest.selected,frameBounds:e,...t?{preserveDirection:!0}:{}};return}let n=this.scene?.volumes.find(s=>s.id===this.selectedId);if(n){if(t){this.resize(),Lc(this.camera,this.orbit,og(n,this.fieldSupport)),this.dirty=!0;return}if(n.recipe?.field){this.resize();let s=this.fieldSupport(n.recipe.field,0),r=e||s.empty?n.recipe.field.bounds:Hi(n,0,this.fieldSupport),a=new je().compose(new I(...n.position),qa(n),new I(...ni(n))),o=new zt(new I(...r.lo),new I(...r.hi)).applyMatrix4(a),c=o.getCenter(new I),l=o.getSize(new I).multiplyScalar(.5);if(this.camera.isOrthographicCamera){this.camera.position.copy(c).add(new I(0,0,Math.max(1,l.z*3))),this.camera.lookAt(c),this.camera.updateMatrixWorld(),Pc(this.camera,this.orbit.target,o),this.orbit.update(),this.dirty=!0;return}let h=l.z+Math.max(l.y,l.x/this.camera.aspect)/Math.tan(this.camera.fov*Math.PI/360)*1.1;this.camera.far=Math.max(300,h+l.length()*2),this.camera.updateProjectionMatrix(),this.orbit.target.copy(c),this.camera.position.copy(c).add(new I(0,0,h)),this.orbit.update(),this.dirty=!0;return}this.orbit.target.fromArray(n.position),this.camera.position.fromArray(n.position),this.camera.position.z+=Math.max(...ni(n))*3.7,this.orbit.update(),this.dirty=!0}}skyCamera(){this.camera.position.fromArray(this.scene.observer);let e=new I(Math.sin(this.skyYaw)*Math.cos(this.skyPitch),Math.sin(this.skyPitch),Math.cos(this.skyYaw)*Math.cos(this.skyPitch));this.camera.lookAt(this.camera.position.clone().add(e)),this.camera.updateMatrixWorld()}resetSkyView(){this.skyYaw=0,this.skyPitch=Math.atan(.3),this.mode==="sky"&&this.skyCamera(),this.dirty=!0}setView(e){e==="sky"&&this.projection.set(!1),e!==this.mode&&(e==="sky"?(this.savedCamera={position:this.camera.position.clone(),target:this.orbit.target.clone()},this.skyCamera(),this.gizmo.detach(),this.box.visible=!1):this.savedCamera&&(this.camera.position.copy(this.savedCamera.position),this.orbit.target.copy(this.savedCamera.target),this.orbit.update()),this.mode=e,this.orbit.enabled=e!=="sky",this.dirty=!0)}setTool(e){this.workshopTransform=!!this.workshop,this.gizmo.setMode(e),this.setRotationAxes(this.rotationAxes??"xyz"),this.gizmo.showY=!0,this.dirty=!0}setRotationAxes(e){if(!["xyz","y"].includes(e))throw Error("Choose XYZ or Y-only rotation");this.rotationAxes=e,this.gizmo.showX=this.gizmo.mode!=="rotate"||e==="xyz",this.gizmo.showZ=this.gizmo.showX,this.dirty=!0}setInteractive(e){this.interactive===e||!this.uniforms||(this.interactive=e,this.studio.applyQuality(),this.splitSource&&this.sourceMesh.update(this.scene,this.selectedId),this.resize())}cancelDrag(){this.navigation.cancel(),this.skyDrag=null,this.gizmo.reset(),this.gizmo.dragging=!1,this.orbit.enabled=this.mode!=="sky",this.setInteractive(!1)}render(){let e=this.renderer.domElement.getBoundingClientRect();if((e.width!==this.cssWidth||e.height!==this.cssHeight)&&this.resize(),!this.ensureDensity(this.studio.previewQuality().draft,!0)){this.renderer.setScissorTest(!1),this.renderer.clear();return}this.densityCache.error&&!this.reportedCacheError&&(this.reportedCacheError=!0,this.events.warning?.(`Density cache unavailable; using analytic rendering: ${this.densityCache.error}`));let t=this.uniforms;this.camera.updateMatrixWorld(),t.uInvPV.value.multiplyMatrices(this.camera.matrixWorld,this.camera.projectionMatrixInverse),t.uOrigin.value.copy(this.camera.position),t.uPanorama.value=0,t.uOrthographic.value=this.camera.isOrthographicCamera?1:0,t.uCameraNear.value=this.camera.near;let n=this.renderer,s=n.domElement.width,r=n.domElement.height;if(n.setScissorTest(!1),n.setViewport(0,0,s,r),n.clear(),this.splitSource){let a=Math.floor(s/2);n.setScissorTest(!0),n.setScissor(0,0,a,r),n.setViewport(0,0,a,r),n.render(this.sourceMesh.scene,this.camera),n.clearDepth(),n.render(this.overlay,this.camera),n.setScissor(a,0,s-a,r),n.setViewport(a,0,s-a,r)}n.render(this.pass,this.screenCamera),n.clearDepth(),n.render(this.overlay,this.camera),n.setScissorTest(!1),n.setViewport(0,0,s,r),this.frames++}animate(){if(this.raf=requestAnimationFrame(()=>this.animate()),!this.frameQueue.ready()||this.previewSuspensions||this.events.previewOccluded?.()||!this.dirty||!this.scene)return;let e=performance.now();this.render(),this.frameMs=performance.now()-e,this.dirty=!1,this.frameQueue.submit(),this.frameQueue.error&&!this.reportedQueueError&&(this.reportedQueueError=!0,this.events.warning?.(`${this.frameQueue.error}; preview keeps the selected quality`))}bake(e,t=this.scene,{onTransport:n=()=>{}}={}){t=this.sculptEvaluation.resolve(t);let s=e/2,r=new Pt(e,s,{depthBuffer:!1}),a=this.uniforms,o=a.uOrigin.value.clone(),c=this.renderer.getRenderTarget(),l=a.uLo.value.clone(),h=a.uHi.value.clone(),d=a.uSolo.value,u=a.uInspect.value,f=this.scene,g=this.selectedId,v=this.dirty;try{t!==f&&this.setScene(t,g,!1);let m=Ya(this.scene,this.fieldSupport);a.uLo.value.fromArray(m.lo),a.uHi.value.fromArray(m.hi),a.uSolo.value=-1,a.uInspect.value=4,a.uOrigin.value.fromArray(this.scene.observer),a.uPanorama.value=1,this.studio.applyQuality(!0),this.ensureDensity(!1),this.renderer.setRenderTarget(r),this.renderer.clear(),this.renderer.render(this.pass,this.screenCamera);let p=new Uint8Array(e*s*4);this.renderer.readRenderTargetPixels(r,0,0,e,s,p),n(this.visibilityCache.transport());let S=new Uint8ClampedArray(p.length),T=e*4;for(let b=0;b<s;b++)S.set(p.subarray(b*T,(b+1)*T),(s-1-b)*T);let _=document.createElement("canvas");return _.width=e,_.height=s,_.getContext("2d").putImageData(new ImageData(S,e,s),0,0),_}finally{this.renderer.setRenderTarget(c),r.dispose(),a.uPanorama.value=0,this.scene!==f&&this.setScene(f,g,!1),a.uOrigin.value.copy(o),a.uSolo.value=d,a.uInspect.value=u,a.uLo.value.copy(l),a.uHi.value.copy(h),this.studio.applyQuality(),this.dirty=v}}readPixels(){let e=this.renderer.domElement.getBoundingClientRect();(this.dirty||e.width!==this.cssWidth||e.height!==this.cssHeight)&&(this.render(),this.dirty=!1);let t=this.renderer.getContext(),n=new Uint8Array(t.drawingBufferWidth*t.drawingBufferHeight*4);return t.readPixels(0,0,t.drawingBufferWidth,t.drawingBufferHeight,t.RGBA,t.UNSIGNED_BYTE,n),{width:t.drawingBufferWidth,height:t.drawingBufferHeight,pixels:Array.from(n)}}ensureDensity(e=!1,t=!1){let n=this.scene.volumes.filter(s=>s.enabled);if(this.densityCache.ensure(n,e),this.studio.updateMaterial(n),this.studio.requiresCache&&n.some((s,r)=>s.recipe&&this.uniforms.uCached.value[r]!==1)){let s="Unable to render this look or sculpted mass: density cache could not complete";if(!t)throw Error(s);return this.cacheFailure||(this.cacheFailure=!0,this.events.warning?.(s)),!1}return this.visibilityCache.ensure(n,{draft:e,requested:this.scene.render?.look?.enabled&&this.scene.render.look.visibility==="scene-cache-v1"}),this.studio.updateMaterial(n),this.visibilityCache.error&&this.reportedVisibilityError!==this.visibilityCache.error&&(this.reportedVisibilityError=this.visibilityCache.error,this.events.warning?.("Cached lighting unavailable; scene-wide direct lighting is active: "+this.visibilityCache.error)),this.cacheFailure&&(this.cacheFailure=!1,this.events.recovered?.()),!0}};var sE=i=>structuredClone(i);function Tr(i,e=[0,3,10]){return{id:i,name:`Cloud ${i}`,enabled:!0,role:"add",position:e,size:[3,1.8,2],yaw:0,density:1.3,seed:i*173%65536,noiseScale:.22,erosion:.3,displacement:.18,smear:0}}function wg(){let i=Tr(1,[-3.5,3,10]),e=Tr(2,[1,3.8,11]);e.size=[3.8,2.4,2.5],e.smear=.2;let t=Tr(3,[4.5,2.8,12]);t.size=[3.5,1.6,2.2];let n=Tr(4,[-6,4,-14]);return n.size=[5,1.5,3],{version:1,name:"Daybreak banks",observer:[0,0,0],sun:{azimuth:-35,elevation:38,intensity:2.4,ambient:.22},sky:{zenith:"#5a9feb",horizon:"#d3e4ee",exposure:1.1},volumes:[i,e,t,n]}}function Za(i,e,t){if(!i||typeof i!="object"||Array.isArray(i))throw Error(`${t} must be an object`);if(Object.keys(i).some(n=>!e.includes(n))||e.some(n=>!(n in i)))throw Error(`${t} has missing or unsupported fields`)}function ui(i,e,t,n){if(typeof i!="number"||!Number.isFinite(i)||i<e||i>t)throw Error(`${n} must be between ${e} and ${t}`)}function Sd(i,e,t,n){if(!Array.isArray(i)||i.length!==3)throw Error(`${n} requires three numbers`);i.forEach(s=>ui(s,e,t,n))}function Sg(i,e){if(typeof i!="string"||!i.trim()||i.length>80)throw Error(`${e} needs 1\u201380 characters`)}function Rs(i){if(Za(i,["version","name","observer","sun","sky","volumes",...i.version>=4?["render"]:[]],"Scene"),![1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].includes(i.version))throw Error("Unsupported scene version");if(i.version>=4){if(Za(i.render,["densityResolution","previewWidth",...i.version>=8?["look"]:[],...i.version>=25?["densityLink","cutMode"]:[]],"Render quality"),!(i.version>=25?[64,96,128,192,256]:[64,96,128]).includes(i.render.densityResolution)||![640,960,1280].includes(i.render.previewWidth))throw Error("Unsupported render quality");if(i.version>=25&&(![0,8,16,32,64].includes(i.render.densityLink)||!["density","solid"].includes(i.render.cutMode)))throw Error("Invalid linked density or cut policy");i.version>=8&&im(i.render.look,i.version)}Sg(i.name,"Scene name"),Sd(i.observer,-100,100,"Observer"),Za(i.sun,["azimuth","elevation","intensity","ambient"],"Sun"),ui(i.sun.azimuth,-180,180,"Sun azimuth"),ui(i.sun.elevation,-10,90,"Sun elevation"),ui(i.sun.intensity,0,6,"Sun intensity"),ui(i.sun.ambient,0,1,"Ambient"),Za(i.sky,["zenith","horizon","exposure"],"Sky");for(let s of["zenith","horizon"])if(typeof i.sky[s]!="string"||!/^#[\da-f]{6}$/i.test(i.sky[s]))throw Error(`Invalid ${s} color`);if(ui(i.sky.exposure,.1,4,"Exposure"),!Array.isArray(i.volumes)||i.volumes.length>8)throw Error("Scene supports at most eight volumes");let e=new Set;for(let s of i.volumes){if(Za(s,["id","name","enabled","role","position","size","yaw","density","seed","noiseScale","erosion","displacement","smear",...i.version>=2?["recipe"]:[],...i.version>=12&&s&&Object.hasOwn(s,"tilt")?["tilt"]:[],...i.version>=20&&s&&Object.hasOwn(s,"shapeScale")?["shapeScale"]:[]],"Volume"),i.version>=2&&s.recipe!==null&&Va(s.recipe,i.version),!Number.isSafeInteger(s.id)||s.id<1||e.has(s.id))throw Error("Volume IDs must be unique positive integers");if(e.add(s.id),Sg(s.name,"Volume name"),typeof s.enabled!="boolean"||!["add","cut"].includes(s.role))throw Error("Invalid volume visibility or role");if(Sd(s.position,-100,100,"Position"),Object.hasOwn(s,"shapeScale")?q0(s):Sd(s.size,.2,30,"Size"),ui(s.yaw,-180,180,"Yaw"),Object.hasOwn(s,"tilt")){if(!Array.isArray(s.tilt)||s.tilt.length!==2)throw Error("Tilt requires X and Z angles");s.tilt.forEach(r=>ui(r,-180,180,"Tilt"))}if(ui(s.density,.1,i.version>=8?12:4,"Density"),ui(s.seed,0,65535,"Seed"),!Number.isInteger(s.seed))throw Error("Seed must be an integer");ui(s.noiseScale,.05,1,"Noise scale"),ui(s.erosion,0,.9,"Erosion"),ui(s.displacement,0,.75,"Displacement"),ui(s.smear,-1,1,"Smear")}let t=i.volumes.filter(s=>s.recipe?.field).length;if(i.version<21&&t>1)throw Error("This prototype supports one sculpt field per scene");let n=bc(i);if(t>n.sculptFields)throw Error(i.version>=24?"Expanded scene supports at most eight sculpt clouds":"Scene supports at most three sculpt clouds");if(i.version>=16&&new TextEncoder().encode(JSON.stringify(i)).byteLength>n.bytes)throw Error(`Scene exceeds ${n.bytes/1048576} MB; simplify layers, compress storage or use Standard sculpt detail`);return sE(i)}function Eg(i){return Rs(JSON.parse(i))}function Tg(i,e=2){let t=Rs(i);if(t.version===1){t.version=2;for(let n of t.volumes)n.recipe=null}if(e>=3&&t.version===2){for(let n of t.volumes)n.recipe&&(n.recipe.structure={enabled:!1,spread:.8,upBias:0,intersections:0},n.recipe.sculpt=[],Object.assign(n.recipe.profile,{edgeGamma:1,interiorVariation:1}));t.version=3}if(e>=4&&t.version===3&&(t.version=4,t.render={densityResolution:64,previewWidth:640}),e>=5&&t.version===4){t.version=5;for(let n of t.volumes)n.recipe&&(n.recipe.masks=[],n.recipe.masses=[])}if(e>=6&&t.version===5){t.version=6;for(let n of t.volumes)n.recipe&&(n.recipe.layers=[])}if(e>=7&&t.version===6){t.version=7;for(let n of t.volumes)if(n.recipe){n.recipe.massMode="grouped",n.recipe.geometryLayers=[{id:1,name:"Shape 1",enabled:!0}];for(let s of n.recipe.masses)s.layerId=1}}if(e>=8&&t.version===7){t.version=8,t.render.look=_a();for(let n of t.volumes)n.recipe&&(n.recipe.character=ga())}if(e>=9&&t.version===8){t.version=9;for(let n of t.volumes)n.recipe&&(n.recipe.field=null)}return e>=10&&t.version===9&&(t.version=10),e>=11&&t.version===10&&(t.version=11),e>=12&&t.version===11&&(t.version=12),e>=13&&t.version===12&&(t.version=13),e>=14&&t.version===13&&(t.version=14),e>=15&&t.version===14&&(t.version=15),e>=16&&t.version===15&&(t.version=16),e>=17&&t.version===16&&(t.version=17),e>=18&&t.version===17&&(t.version=18),e>=19&&t.version===18&&(t.version=19),e>=20&&t.version===19&&(t.version=20),e>=21&&t.version===20&&(t.version=21),e>=22&&t.version===21&&(t.version=22,t.render.look.visibility="direct-v1"),e>=23&&t.version===22&&(t.version=23),e>=24&&t.version===23&&(t.version=24),e>=25&&t.version===24&&(t.version=25,t.render.densityLink=0,t.render.cutMode="density"),t}function bd(i="bank"){let e=V0(i,8);if(e.character.enabled=!0,e.billow.strength=.29,e.detail.scale=.42,e.structure.spread=.94,e.profile.feather=.13,e.profile.edgeGamma=.9,e.base.height=-.59,i==="bank"){let t=(n,s)=>({id:n,enabled:!0,points:s.map(([r,a,o,c],l)=>({id:l+1,position:[r,a,o],radius:c}))});e.strokes=[t(1,[[-1.12,-.18,.02,.64],[-.4,.12,.2,.81],[.46,.03,-.2,.7],[1.18,-.26,-.12,.52]]),t(2,[[.18,.3,-.23,.45],[.18,.62,-.23,.54]]),t(3,[[-.7,-.15,.4,.35],[0,-.1,.42,.42],[.6,-.2,.3,.35]])]}return i==="tower"&&(e.billow.strength=.26,e.base.height=-.94),i==="anvil"&&(e.billow.strength=.21,e.base.height=-.93,e.profile.feather=.22),Va(e,8)}function Ag(){let i=Tg(wg(),8),e=Tr(1,[0,2,10]);return Object.assign(e,{name:"Studio cumulus",size:[1,1,1],seed:4831,density:5.6,displacement:.19,erosion:.11,recipe:bd()}),i.name="Studio cloud",i.volumes=[e],i.sun={azimuth:-64,elevation:37,intensity:2.6,ambient:.28},i.sky.exposure=1.25,i.render={densityResolution:128,previewWidth:1280,look:{...i.render.look,enabled:!0}},Rs(i)}var qc=class{#r=null;#t=null;#e=new Map;#s=!1;#i=null;#n=new es;async update(e,{cancelled:t=()=>!1,yieldTask:n=async()=>{},batch:s=4}={}){if(this.#s)throw Error("Sculpt replay already active");if(!Number.isInteger(s)||s<1||s>32)throw Error("Replay batch must be1\u201332");this.#s=!0;try{let r=As(e),a=JSON.stringify(r.base),o=a===this.#r,c=o?this.#t:nn(r.base),l=o?new Map(this.#e):new Map,h=new es(o?this.#n:void 0),d=new Map,u=md(r),f=new Set,g=u.map(C=>{let P=C.protection?f.has(C.protection.id)?C.protection.id:C.protection:void 0;return C.protection&&f.add(C.protection.id),JSON.stringify([C.mode,C.center,C.radius,C.gain,...C.plane?[C.plane]:[],...C.symmetry?[C.symmetry]:[],...C.protection?[{protection:P}]:[]])}),v=C=>`${C}:${g.slice(0,C).join(`
`)}`,m=new Set,p=0;for(let C of r.layers)C.enabled&&(p+=C.strokes.reduce((P,N)=>P+N.centers.length,0)),m.add(p);let S=c,T=0,_,b=0,E=0;for(let[C,P]of l)P.count>T&&P.count<=u.length&&C===v(P.count)&&(S=P.grid,T=P.count,_=C);if(_){let C=l.get(_);l.delete(_),l.set(_,C)}let A=(C,P)=>{let N=v(C);for(l.delete(N),l.set(N,{count:C,grid:P});l.size>4;)l.delete(l.keys().next().value)};if(t())return{aborted:!0,applied:b,yields:E};for(let C=T;C<u.length;C++){let P=u[C];if(P.protection&&!d.has(P.protection.id)&&d.set(P.protection.id,h.get(c,P.protection)),S=cc(S,P.center,P.radius,P.gain,P.mode,P.plane,P.symmetry,P.protection?d.get(P.protection.id):void 0),b++,m.has(C+1)&&A(C+1,S),b%s===0&&(E++,await n(),t()))return{aborted:!0,applied:b,yields:E}}if(t())return{aborted:!0,applied:b,yields:E};u.length&&A(u.length,S);let y=wc(S),w=new Set([c.values,...[...l.values()].map(C=>C.grid.values)]),R={operations:u.length,reusedOperations:T,applied:b,yields:E,checkpoints:l.size,retainedGridBytes:[...w].reduce((C,P)=>C+P.byteLength,0)};return u.some(C=>C.symmetry)&&(R.brushEvaluations=u.reduce((C,P)=>C+xa(P),0)),h.retain(c,[...new Map(u.filter(C=>C.protection).map(C=>[C.protection.id,C.protection])).values()]),r.protection&&(R.protectionCache=h.info(),R.replayKeyCharacters=[...l.keys()].reduce((C,P)=>C+P.length,0)),this.#r=a,this.#t=c,this.#e=l,this.#i=R,this.#n=h,{field:y,...R}}finally{this.#s=!1}}info(){return this.#i?structuredClone(this.#i):{operations:0,checkpoints:0,retainedGridBytes:0}}clear(){if(this.#s)throw Error("Sculpt replay already active");this.#r=null,this.#t=null,this.#e=new Map,this.#i=null,this.#n=new es}};async function Rg(i){let e=i.scene!==void 0,t=e?typeof i.scene=="string"?Eg(i.scene):Rs(i.scene):Ag();if(!t.volumes.some(s=>s.enabled&&s.role==="add"))throw Error("Scene needs an enabled cloud volume");if(!t.render?.look?.enabled)throw Error("Enable Studio lighting in SkyPaint before exporting this scene");e||(t.volumes[0].position=[0,0,0],i.kind&&i.kind!=="bank"&&(t.volumes[0].recipe=bd(i.kind))),i.densityResolution!==void 0&&(t.render.densityResolution=i.densityResolution,Rs(t));let n=structuredClone(t);for(let s of n.volumes){if(s.recipe?.field?.format!==zi)continue;let r=new qc,a=await r.update(s.recipe.field,{yieldTask:()=>new Promise(o=>setTimeout(o,0)),cancelled:()=>!!i.signal?.aborted,batch:4});if(a.aborted)throw new DOMException("Bake cancelled","AbortError");s.recipe.field=a.field,r.clear()}return{scene:t,evaluated:n}}window.prepareSkyPaintBakeScene=Rg;function rE(i){let e=[],t=EventTarget.prototype,n=t.addEventListener,s;try{t.addEventListener=function(o,c,l){return e.push([this,o,c,l]),n.call(this,o,c,l)},s=new Yc(i,{begin(){},commit(){},cancel(){},transform(){}})}finally{t.addEventListener=n}cancelAnimationFrame(s.raf),s.resizeObserver.disconnect();let r=!1;return{v:s,dispose:()=>{if(r)return;r=!0,cancelAnimationFrame(s.raf),s.resizeObserver.disconnect(),s.frameQueue.clear();for(let[l,h,d,u]of e)l.removeEventListener(h,d,u);e.length=0,s.sculptEvaluation?.dispose(),s.field.dispose(),s.visibilityCache.dispose(),s.studio.noise?.dispose(),s.densityCache.clear(),s.densityCache.fallback.dispose(),s.densityCache.material.dispose(),s.orbit.dispose(),s.gizmo.dispose();let o=new Set,c=new Set;for(let l of[s.pass,s.overlay,s.densityCache.pass])l.traverse(h=>{if(h.geometry&&o.add(h.geometry),h.material)for(let d of Array.isArray(h.material)?h.material:[h.material])c.add(d)});for(let l of o)l.dispose();for(let l of c)l.dispose();for(let l of["texture","scaffoldTexture","sculptTexture","maskTexture","cutTexture"])s[l]?.dispose();s.renderer.dispose()},listenerCount:()=>e.length}}window.createSkyPaintBake=async function(i={}){if(i={w:128,h:96,radianceScale:4,...i},![64,128,256,512].includes(i.w)||i.h!==i.w*3/4)throw Error("Bake dimensions must be 4:3 at width64,128,256 or512");if(!Number.isFinite(i.radianceScale)||i.radianceScale<1e-6||i.radianceScale>65504)throw Error("Invalid radiance scale; expected 1e-6 through 65504");if(i.halfHeight!==void 0&&(!(i.halfHeight>=0)||!Number.isFinite(i.halfHeight)))throw Error("Invalid capture framing");let{scene:e,evaluated:t}=await Rg(i);if(i.signal?.aborted)throw new DOMException("Bake cancelled","AbortError");let n=i.canvas||document.querySelector("canvas"),s=rE(n),r=s.v;try{let T=function(P){if(!P||!Number.isFinite(P.yaw)||!Number.isFinite(P.pitch)||Math.abs(P.yaw)>180||Math.abs(P.pitch)>90)throw Error("Invalid capture view");let N=P.yaw*Math.PI/180,D=P.pitch*Math.PI/180,U=new I(Math.sin(N)*Math.cos(D),Math.sin(D),Math.cos(N)*Math.cos(D)),z=new yn(-l*4/3,l*4/3,l,-l,.1,h*4);z.position.fromArray(o).addScaledVector(U,h),z.lookAt(...o),z.updateMatrixWorld(),r.uniforms.uInvPV.value.multiplyMatrices(z.matrixWorld,z.projectionMatrixInverse),r.uniforms.uOrigin.value.copy(z.position),r.uniforms.uCameraNear.value=z.near,r.uniforms.uBakeToward.value.copy(U)},_=function(P,N=!1,D=!1,U=!1){r.uniforms.uBakeMode.value=P,r.uniforms.uLinear.value=U?0:1,D&&(r.material.fragmentShader=d,r.material.needsUpdate=!0);let z=N?S:p;r.renderer.setRenderTarget(z),r.renderer.clear(),r.renderer.render(r.pass,r.screenCamera);let H=N?new Float32Array(i.w*i.h*4):new Uint8Array(i.w*i.h*4);if(r.renderer.readRenderTargetPixels(z,0,0,i.w,i.h,H),P===1&&!N)for(let $=0;$<H.length;$+=4)H[$+3]===0&&(H[$]=H[$+1]=H[$+2]=0);return D&&(r.material.fragmentShader=u,r.material.needsUpdate=!0),H},b=function(P){let N="";for(let D=0;D<P.length;D+=8192)N+=String.fromCharCode(...P.subarray(D,D+8192));return btoa(N)},E=function(P){return[P.yaw,P.pitch,l].join("|")},A=function(){let P=r.uniforms.uSun.value.clone(),N=[];try{f||=window.skyPaintRelightingShader(d),r.material.fragmentShader=f,r.material.needsUpdate=!0;for(let D of v)r.uniforms.uSun.value.fromArray(D),N.push(_(4,!0))}finally{r.uniforms.uSun.value.copy(P),r.material.fragmentShader=u,r.material.needsUpdate=!0}return N},y=function(P,N){let D=[new Uint8Array(N.length),new Uint8Array(N.length)];for(let U=0;U<N.length;U+=4)if(N[U+3]){for(let z=0;z<6;z++)D[z<3?0:1][U+z%3]=Math.round(255*Math.sqrt(Math.max(0,Math.min(1,P[z][U]))));D[0][U+3]=Math.round(255*Math.max(0,Math.min(1,P[0][U+1]))),D[1][U+3]=N[U+3]}return D},R=function(){if(w)throw Error("Bake adapter disposed");if(i.signal?.aborted)throw new DOMException("Bake cancelled","AbortError")};r.setScene(t,t.volumes.find(P=>P.enabled&&P.role==="add").id,!1),r.ensureDensity(!1),r.studio.applyQuality(!0);let a=Ya(t,r.fieldSupport),o=a.lo.map((P,N)=>(P+a.hi[N])*.5),c=Math.hypot(...a.hi.map((P,N)=>(P-a.lo[N])*.5)),l=i.halfHeight||c*1.02,h=c*1.15,d=r.material.fragmentShader,u=window.patchSkyPaintShader(d),f=null,g=null,v=[[1,0,0],[0,1,0],[0,0,1],[-1,0,0],[0,-1,0],[0,0,-1]],m={anisotropy:r.uniforms.uAnisotropy.value,fill:r.uniforms.uScatterFill.value,intensity:r.uniforms.uIntensity.value,ambient:r.uniforms.uAmbient.value,sunColor:r.uniforms.uSunTint.value.toArray(),skyColor:r.uniforms.uSkyTint.value.toArray()};Object.assign(r.uniforms,{uBakeMode:{value:0},uBakeScale:{value:i.radianceScale||4},uBakeRange:{value:h},uBakeCenter:{value:new I(...o)},uBakeToward:{value:new I}}),r.material.fragmentShader=u,r.material.needsUpdate=!0,r.uniforms.uSolo.value=-1,r.uniforms.uPanorama.value=0,r.uniforms.uOrthographic.value=1,r.uniforms.uSteps.value=128,r.uniforms.uShadowSteps.value=32;let p=new Pt(i.w,i.h,{type:ot,format:gt,depthBuffer:!1,minFilter:mt,magFilter:mt}),S=new Pt(i.w,i.h,{type:Dt,format:gt,depthBuffer:!1,minFilter:mt,magFilter:mt}),w=!1,C={scene:e,bounds:a,center:o,halfHeight:l,range:h,relightSettings:m,stats(){let P=r.renderer.getContext();return{disposed:w,textures:r.renderer.info.memory.textures,geometries:r.renderer.info.memory.geometries,programs:r.renderer.info.programs?.length||0,listeners:s.listenerCount(),glError:P.getError(),contextLost:P.isContextLost()}},dispose(){w||(w=!0,p.dispose(),S.dispose(),s.dispose())},setFraming(P){if(R(),!(P>0)||!Number.isFinite(P))throw Error("Invalid capture framing");return l=P,this.halfHeight=P,P},measure(P){T(P);let N=_(1),D=0;for(let U=0;U<i.h;U++)for(let z=0;z<i.w;z++)N[(U*i.w+z)*4+3]&&(D=Math.max(D,Math.abs((z+.5)/i.w-.5)*2*4/3,Math.abs((U+.5)/i.h-.5)*2));return D*l},capture(P){T(P);let N=_(1);window.assertSkyPaintCaptureRadianceFits(N,()=>_(4,!0),i.radianceScale,P),g={key:E(P),opacity:N};let D=_(2),U=_(3);return{radiance:b(N),depth:b(D),normal:b(U)}},captureRelighting(P){T(P);let N=g?.key===E(P)?g.opacity:_(1);return{maps:y(A(),N).map(b)}},compareRelighting(P){T(P);let N=A(),D=[],U={};for(let Y of["uSun","uSunTint","uSkyTint","uZenith","uHorizon","uIntensity","uAmbient","uScatterFill","uAnisotropy","uIncludeSun"])U[Y]=r.uniforms[Y].value?.clone?.()??r.uniforms[Y].value;let z=r.material.defines.SKY_VISIBILITY_LOOKUP,H=r.uniforms.uBakeToward.value.clone().negate(),$=0,W=0,K=0,Q=0,xe=0,ve=0;try{r.material.defines.SKY_VISIBILITY_LOOKUP=0,r.material.needsUpdate=!0,r.uniforms.uSunTint.value.setRGB(1,1,1),r.uniforms.uSkyTint.value.setRGB(0,0,0),r.uniforms.uZenith.value.setRGB(0,0,0),r.uniforms.uHorizon.value.setRGB(0,0,0),r.uniforms.uIntensity.value=1,r.uniforms.uAmbient.value=0,r.uniforms.uScatterFill.value=0,r.uniforms.uAnisotropy.value=0,r.uniforms.uIncludeSun.value=0;for(let Z=0;Z<6;Z++){r.uniforms.uSun.value.fromArray(v[Z]);let ue=_(0,!0,!0),Le=H.dot(r.uniforms.uSun.value),se=.85+.15*(1-.23*.23)/Math.pow(Math.max(.001,1+.23*.23+2*.23*Le),1.5),Ee=0;for(let ut=0;ut<ue.length;ut+=4){let Ue=Math.abs(ue[ut]/se-N[Z][ut]);Ee=Math.max(Ee,Ue),xe+=Ue*Ue,ve++,K=Math.max(K,N[Z][ut])}D.push(Ee)}r.uniforms.uSunTint.value.setRGB(0,0,0),r.uniforms.uSkyTint.value.setRGB(1,1,1),r.uniforms.uIntensity.value=0,r.uniforms.uAmbient.value=1;let Y=_(0,!0,!0);for(let Z=0;Z<6;Z++)for(let ue=0;ue<Y.length;ue+=4)$=Math.max($,Math.abs(Y[ue]-N[Z][ue+1]))}finally{for(let[Y,Z]of Object.entries(U))Z?.clone?r.uniforms[Y].value.copy(Z):r.uniforms[Y].value=Z;r.material.defines.SKY_VISIBILITY_LOOKUP=z,r.material.fragmentShader=u,r.material.needsUpdate=!0}let qe=_(1),He=_(4,!0),We=y(N,qe);for(let Y=0;Y<6;Y++)for(let Z=0;Z<qe.length;Z+=4)W=Math.max(W,Math.abs(He[Z+3]-N[Y][Z+3])),Q=Math.max(Q,Math.abs(N[Y][Z]-(We[Y<3?0:1][Z+Y%3]/255)**2));return{axisMax:Math.max(...D),perAxisMax:D,axisRMSE:Math.sqrt(xe/ve),ambientMax:$,opacityMax:W,responseMax:K,quantMax:Q}},compare(P){T(P);let N=_(4,!0),D=_(0,!0),U=_(0,!0,!0),z=_(1),H=0,$=0,W=0,K=0,Q=0,xe=0,ve=0,qe=0,He=0,We=r.uniforms.uBakeToward.value.clone().negate(),Y=na.smoothstep(We.y,-.05,.9),Z=r.uniforms.uHorizon.value.clone().lerp(r.uniforms.uZenith.value,Y),ue=Math.max(We.dot(r.uniforms.uSun.value),0)**500*r.uniforms.uIntensity.value;Z.r+=ue,Z.g+=ue*.86,Z.b+=ue*.6;let Le=Z.toArray();for(let se=0;se<N.length;se+=4){N[se+3]>0&&qe++;for(let Ee=0;Ee<4;Ee++)H=Math.max(H,Math.abs(D[se+Ee]-U[se+Ee]));Q=Math.max(Q,Math.abs(z[se+3]/255-N[se+3]));for(let Ee=0;Ee<3;Ee++){$=Math.max($,Math.abs(N[se+Ee]+Le[Ee]*(1-N[se+3])-U[se+Ee]));let Ue=(z[se+Ee]/255)**2*i.radianceScale-N[se+Ee];W=Math.max(W,Math.abs(Ue)),K+=Ue*Ue,xe++,N[se+Ee]>i.radianceScale&&ve++,z[se+3]===0&&z[se+Ee]!==0&&He++}}return{shaderMax:H,cloudCompositeMax:$,quantMax:W,quantRMSE:Math.sqrt(K/xe),alphaMax:Q,transparentRGB:He,clipped:ve,occupied:qe,totalPixels:N.length/4,renderer:r.renderer.getContext().getParameter(r.renderer.getContext().RENDERER)}},preview(P){T(P),_(0,!1,!1,!0);let N=new Uint8Array(i.w*i.h*4);r.renderer.readRenderTargetPixels(p,0,0,i.w,i.h,N);let D=i.previewCanvas||document.querySelector("#preview");if(!D)throw Error("Preview canvas unavailable");D.width=i.w,D.height=i.h;let U=D.getContext("2d"),z=new Uint8ClampedArray(N.length);for(let H=0;H<i.h;H++)z.set(N.subarray(H*i.w*4,(H+1)*i.w*4),(i.h-1-H)*i.w*4);return U.putImageData(new ImageData(z,i.w,i.h),0,0),D.toDataURL()}};for(let P of["measure","capture","captureRelighting","compareRelighting","compare","preview"]){let N=C[P];C[P]=(...D)=>(R(),N.apply(C,D))}return window.skyPaintBake=C}catch(a){throw s.dispose(),a}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

pako/dist/pako.esm.mjs:
  (*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) *)
*/

function replaceOne(source,anchor,replacement){
 if(source.split(anchor).length!==2)throw Error('SkyPaint source changed at '+anchor.slice(0,80));
 return source.replace(anchor,replacement);
}
function extractFunction(source,signature){
 if(source.split(signature).length!==2)throw Error('SkyPaint source changed at '+signature);
 const start=source.indexOf(signature),open=source.indexOf('{',start);let depth=1,end=open+1;
 for(;end<source.length&&depth;end++){if(source[end]==='{')depth++;else if(source[end]==='}')depth--;}
 if(depth)throw Error('SkyPaint source has an incomplete '+signature);
 return source.slice(start,end);
}
function patchCloudShader(source){
 if(source.includes('uBakeMode'))throw Error('SkyPaint shader already patched');
 let s=replaceOne(source,'void main() {',`
uniform int uBakeMode;
uniform float uBakeScale,uBakeRange;
uniform vec3 uBakeCenter,uBakeToward;
vec2 bakePack16(float value){float q=floor(clamp(value,0.0,1.0)*65535.0+.5);return vec2(floor(q/256.0),mod(q,256.0))/255.0;}
vec2 bakeOct(vec3 n){n/=abs(n.x)+abs(n.y)+abs(n.z);vec2 e=n.xy;if(n.z<0.0)e=(1.0-abs(e.yx))*vec2(e.x>=0.0?1.0:-1.0,e.y>=0.0?1.0:-1.0);return e*.5+.5;}
void main() {`);
 s=replaceOne(s,'vec3 radiance=vec3(0); float transmission=1.0;',`vec3 radiance=vec3(0); float transmission=1.0;
 float bakeWeight=0.0,bakeFar=1e20;vec3 bakePoint=vec3(0);`);
 s=replaceOne(s,'radiance+=transmission*alpha*lit;',`float contribution=transmission*alpha;
      bakeWeight+=contribution;bakePoint+=p*contribution;bakeFar=min(bakeFar,dot(p-uBakeCenter,uBakeToward));
      radiance+=transmission*alpha*lit;`);
 s=replaceOne(s,'if(uLinear==1){outColor=vec4(radiance+sky*transmission,1);return;}',`
  if(uBakeMode>0){
    float opacity=1.0-transmission;
    if(uBakeMode==4){outColor=vec4(radiance,opacity);return;}
    if(opacity<.5/255.0){outColor=vec4(0);return;}
    if(uBakeMode==1){outColor=vec4(sqrt(clamp(radiance/uBakeScale,0.0,1.0)),opacity);return;}
    vec3 representative=bakePoint/max(bakeWeight,1e-20);
    if(uBakeMode==2){float z=dot(representative-uBakeCenter,uBakeToward);outColor=vec4(bakePack16((z/uBakeRange+1.0)*.5),bakePack16((bakeFar/uBakeRange+1.0)*.5));return;}
    float e=.018;vec3 n=-vec3(density(representative+vec3(e,0,0))-density(representative-vec3(e,0,0)),density(representative+vec3(0,e,0))-density(representative-vec3(0,e,0)),density(representative+vec3(0,0,e))-density(representative-vec3(0,0,e)));
    if(dot(n,n)<1e-12)n=uBakeToward;else n=normalize(n);
    outColor=vec4(bakeOct(n),1,1);return;
  }
  if(uLinear==1){outColor=vec4(radiance+sky*transmission,1);return;}`);
 return s;
}
window.patchSkyPaintShader=patchCloudShader;
window.skyPaintRelightingShader=function relightingShader(source){
 // Small author-only variant. The original shadow function and density march
 // stay unchanged; six sequential draws retarget its ordinary uSun uniform.
 extractFunction(source,'float shadow(vec3 p)');
 return replaceOne(patchCloudShader(source),'vec3 lit=studioLight(p,rd);','vec3 lit=vec3(shadow(p),.20+.80*studioSkyVisibility(p),1);');
};
window.assertSkyPaintCaptureRadianceFits=function assertCaptureRadianceFits(encoded,readRaw,scale,view){
 let candidate=false;
 for(let i=0;i<encoded.length;i+=4)if(encoded[i]===255||encoded[i+1]===255||encoded[i+2]===255){candidate=true;break;}
 if(!candidate)return false;
 const raw=readRaw();if(raw.length!==encoded.length)throw Error('Invalid raw capture dimensions');
 for(let i=0;i<raw.length;i+=4)for(let k=0;k<3;k++){
  if(!Number.isFinite(raw[i+k]))throw Error('Nonfinite raw capture radiance');
  if(raw[i+k]>scale)throw Error('Radiance exceeds radianceScale '+scale+' at yaw '+view.yaw+', pitch '+view.pitch+'; choose a higher Highlight range or increase radianceScale with --radiance-scale and bake again.');
 }
 return true;
};
window.SKYPAINT_BAKE_SOURCE={"adapter":"skypaint-density-integral-v1","files":{"src/render/cloud.glsl":"5fcb12edd3eb7fd90cdf0c6bcb7f0bdf9cde89abfc62a977e2bb74c82350d075","src/render/studio-field.glsl":"ca47c80e18c02c245c3d9680a8e8aaa329f2e8b145a91c92e7f401dbd350b988","src/render/studio-lighting.glsl":"ff47d476afa7424a879f8d49c29589bf8596b23704d9f82a683adbb0c08b3977","src/render/studio-render.js":"1b7b0ecee6dbf05b4aaf362672fee9f7b6cc2d1384144a4305758def7def0a39","src/render/density-cache.js":"3ade4636ebf8f6e9b61a078fd9c8ede42c879d32f8b2939e05bd8a6a099a94d7","src/core/studio-presets.js":"a01d750a03d2b02f3c1a473eb71e8ac43b284033361c1b995ce341b9a37c1699","src/render/viewer.js":"75a2bfd691008987966505891328b1643f4e857546e08438cd010be4474efce6","src/render/studio-noise.glsl":"3033100b3fde6d62b02201c93db89aecb03259170b28698cfdfc20ac1490ae40","src/render/studio-noise.js":"c13169051d804b14948179d9555437223c15ffd0697083db6df7e7405aed1e04","src/render/recipe.glsl":"26e6f9ad57c9e2c492fbbf07de4c6d80db39369b8f3c536d7a6bdce39ad44a9c","src/render/recipe-source.js":"7cabd3eeeb29a85086c0257a14b9843ac1448c81c15f08d454c0d812e1b44ae8","src/core/scaffold.js":"7134c4d5f160ddcfea7960170f5aaa1ea0314184eac4c66199521e1ab133bb15","src/core/noise.js":"b8ac324f7da7f31ee81fedb5c08016b3723f3a916506b91c2c90d4c504e1df0c","src/core/cache.js":"5bcb898cf300d7e845210ae4bf233da63d3c5b8d7272abb43dbb8605b87b8c45"},"views":[{"yaw":-35,"pitch":-85},{"yaw":0,"pitch":-85},{"yaw":35,"pitch":-85},{"yaw":-35,"pitch":-60},{"yaw":0,"pitch":-60},{"yaw":35,"pitch":-60},{"yaw":-35,"pitch":-30},{"yaw":0,"pitch":-30},{"yaw":35,"pitch":-30},{"yaw":-35,"pitch":0},{"yaw":0,"pitch":0},{"yaw":35,"pitch":0},{"yaw":-35,"pitch":20},{"yaw":0,"pitch":20},{"yaw":35,"pitch":20}]};