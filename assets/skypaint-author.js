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
(()=>{var Qt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lf=0,Eh=1,cf=2;var Zr=1,hf=2,tr=3,Gn=0,ei=1,li=2,Ci=0,ir=1,Th=2,Ah=3,Rh=4,uf=5;var cs=100,df=101,ff=102,pf=103,mf=104,gf=200,_f=201,yf=202,xf=203,Ch=204,Ih=205,vf=206,Sf=207,bf=208,Mf=209,wf=210,Ef=211,Tf=212,Af=213,Rf=214,Mo=0,wo=1,Eo=2,Ys=3,To=4,Ao=5,Ro=6,Co=7,Ph=0,Cf=1,If=2,Bi=0,Lh=1,Dh=2,Nh=3,Uh=4,Fh=5,Oh=6,Bh=7;var kh=300,Wn=301,hs=302,Jo=303,Qo=304,Kr=306,Ai=1e3,Xi=1001,Io=1002,pt=1003,Pf=1004;var jr=1005;var Je=1006,el=1007;var Xn=1008;var ot=1009,zh=1010,Hh=1011,nr=1012,tl=1013,ki=1014,Lt=1015,Zt=1016,il=1017,nl=1018,sr=1020,Vh=35902,Gh=35899,Wh=1021,Xh=1022,mt=1023,Yi=1026,Yn=1027,qi=1028,sl=1029,Zi=1030,rl=1031;var al=1033,$r=33776,Jr=33777,Qr=33778,ea=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37488,ml=37489,ta=37490,gl=37491,_l=37808,yl=37809,xl=37810,vl=37811,Sl=37812,bl=37813,Ml=37814,wl=37815,El=37816,Tl=37817,Al=37818,Rl=37819,Cl=37820,Il=37821,Pl=36492,Ll=36494,Dl=36495,Nl=36283,Ul=36284,ia=36285,Fl=36286;var Nr=2300,Po=2301,So=2302,_h=2303,yh=2400,xh=2401,vh=2402;var Lf=3200;var Yh=0,Df=1,xn="",pi="srgb",Ur="srgb-linear",Fr="linear",it="srgb";var bo=7680;var Nf=519,Uf=512,Ff=513,Of=514,Ol=515,Bf=516,kf=517,Bl=518,zf=519,Hf=35044;var Si="300 es",Fi=2e3,Or=2001;function Fg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Og(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vf(){let i=Br("canvas");return i.style.display="block",i}var Dd={},qs=null;function qh(...i){let e="THREE."+i.shift();qs?qs("log",e,...i):console.log(e,...i)}function Gf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=Gf(i);let e="THREE."+i.shift();if(qs)qs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pe(...i){i=Gf(i);let e="THREE."+i.shift();if(qs)qs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function as(...i){let e=i.join(" ");e in Dd||(Dd[e]=!0,Re(...i))}function Wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xf={[Mo]:wo,[Eo]:Ro,[To]:Co,[Ys]:Ao,[wo]:Mo,[Ro]:Eo,[Co]:To,[Ao]:Ys},Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,Lr=Math.PI/180,Zs=180/Math.PI;function rr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function Bg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kg(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function zg(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function Hg(i,e=1){return e-Math.abs(Zh(i,e*2)-e)}function Vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xg(i,e){return i+Math.random()*(e-i)}function Yg(i){return i*(.5-Math.random())}function qg(i){i!==void 0&&(Nd=i);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zg(i){return i*Lr}function Kg(i){return i*Zs}function jg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $g(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ws(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var na={DEG2RAD:Lr,RAD2DEG:Zs,generateUUID:rr,clamp:Ve,euclideanModulo:Zh,mapLinear:Bg,inverseLerp:kg,lerp:Dr,damp:zg,pingpong:Hg,smoothstep:Vg,smootherstep:Gg,randInt:Wg,randFloat:Xg,randFloatSpread:Yg,seededRandom:qg,degToRad:Zg,radToDeg:Kg,isPowerOfTwo:jg,ceilPowerOfTwo:$g,floorPowerOfTwo:Jg,setQuaternionFromProperEuler:Qg,normalize:$t,denormalize:Ws},Le=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*S;m<0&&(u=-u,f=-f,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+S*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+S*o;let b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jc=new I,Ud=new ct,De=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],S=s[0],m=s[3],p=s[6],b=s[1],A=s[4],_=s[7],v=s[2],M=s[5],T=s[8];return r[0]=a*S+o*b+c*v,r[3]=a*m+o*A+c*M,r[6]=a*p+o*_+c*T,r[1]=l*S+h*b+d*v,r[4]=l*m+h*A+d*M,r[7]=l*p+h*_+d*T,r[2]=u*S+f*b+g*v,r[5]=u*m+f*A+g*M,r[8]=u*p+f*_+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*l-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=u*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$c=new De,Fd=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e_(){let i={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=un(s.r),s.g=un(s.g),s.b=un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ur]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Fd,fromXYZ:Od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Fd,fromXYZ:Od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),i}var Ye=e_();function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,Lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Br("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(un(t[n]/255)*255):t[n]=un(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t_=0,Ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jc(s[a].image)):r.push(Jc(s[a]))}else r=Jc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var i_=0,Qc=new I,ri=class i extends Oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xi,s=Xi,r=Je,a=Xn,o=mt,c=ot,l=i.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=rr(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=kh;ri.DEFAULT_ANISOTROPY=1;var Be=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,_=(f+1)/2,v=(p+1)/2,M=(h+u)/4,T=(d+S)/4,y=(g+m)/4;return A>_&&A>v?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=M/n,r=T/n):_>v?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=y/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=y/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-S)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Do=class extends Oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new ri(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends Do{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kr=class extends ri{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pt,this.minFilter=pt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jt=class extends ri{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pt,this.minFilter=pt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},dn=class extends It{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Jt(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},Ke=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,S=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,S=l*d;t[0]=u+S*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,S=l*d;t[0]=u-S*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,S=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+S,t[1]=c*d,t[5]=S*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,S=o*l;t[0]=c*h,t[4]=S-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-S*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,S=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+S,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n_,e,s_)}lookAt(e,t,n){let s=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Rn.crossVectors(n,di),Rn.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Rn.crossVectors(n,di)),Rn.normalize(),$a.crossVectors(di,Rn),s[0]=Rn.x,s[4]=$a.x,s[8]=di.x,s[1]=Rn.y,s[5]=$a.y,s[9]=di.y,s[2]=Rn.z,s[6]=$a.z,s[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],S=n[6],m=n[10],p=n[14],b=n[3],A=n[7],_=n[11],v=n[15],M=s[0],T=s[4],y=s[8],w=s[12],R=s[1],C=s[5],L=s[9],O=s[13],D=s[2],B=s[6],Y=s[10],W=s[14],ee=s[3],G=s[7],j=s[11],J=s[15];return r[0]=a*M+o*R+c*D+l*ee,r[4]=a*T+o*C+c*B+l*G,r[8]=a*y+o*L+c*Y+l*j,r[12]=a*w+o*O+c*W+l*J,r[1]=h*M+d*R+u*D+f*ee,r[5]=h*T+d*C+u*B+f*G,r[9]=h*y+d*L+u*Y+f*j,r[13]=h*w+d*O+u*W+f*J,r[2]=g*M+S*R+m*D+p*ee,r[6]=g*T+S*C+m*B+p*G,r[10]=g*y+S*L+m*Y+p*j,r[14]=g*w+S*O+m*W+p*J,r[3]=b*M+A*R+_*D+v*ee,r[7]=b*T+A*C+_*B+v*G,r[11]=b*y+A*L+_*Y+v*j,r[15]=b*w+A*O+_*W+v*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],S=e[7],m=e[11],p=e[15],b=c*f-l*u,A=o*f-l*d,_=o*u-c*d,v=a*f-l*h,M=a*u-c*h,T=a*d-o*h;return t*(S*b-m*A+p*_)-n*(g*b-m*v+p*M)+s*(g*A-S*v+p*T)-r*(g*_-S*M+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],S=e[13],m=e[14],p=e[15],b=t*o-n*a,A=t*c-s*a,_=t*l-r*a,v=n*c-s*o,M=n*l-r*o,T=s*l-r*c,y=h*S-d*g,w=h*m-u*g,R=h*p-f*g,C=d*m-u*S,L=d*p-f*S,O=u*p-f*m,D=b*O-A*L+_*C+v*R-M*w+T*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return e[0]=(o*O-c*L+l*C)*B,e[1]=(s*L-n*O-r*C)*B,e[2]=(S*T-m*M+p*v)*B,e[3]=(u*M-d*T-f*v)*B,e[4]=(c*R-a*O-l*w)*B,e[5]=(t*O-s*R+r*w)*B,e[6]=(m*_-g*T-p*A)*B,e[7]=(h*T-u*_+f*A)*B,e[8]=(a*L-o*R+l*y)*B,e[9]=(n*R-t*L-r*y)*B,e[10]=(g*M-S*_+p*b)*B,e[11]=(d*_-h*M-f*b)*B,e[12]=(o*w-a*C-c*y)*B,e[13]=(t*C-n*w+s*y)*B,e[14]=(S*A-g*v-m*b)*B,e[15]=(h*v-d*A+u*b)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,S=a*h,m=a*d,p=o*d,b=c*l,A=c*h,_=c*d,v=n.x,M=n.y,T=n.z;return s[0]=(1-(S+p))*v,s[1]=(f+_)*v,s[2]=(g-A)*v,s[3]=0,s[4]=(f-_)*M,s[5]=(1-(u+p))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(g+A)*T,s[9]=(m-b)*T,s[10]=(1-(u+S))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),c=Ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Di.copy(this);let l=1/a,h=1/o,d=1/c;return Di.elements[0]*=l,Di.elements[1]*=l,Di.elements[2]*=l,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,t.setFromRotationMatrix(Di),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Fi,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,S;if(c)g=r/(a-r),S=a*r/(a-r);else if(o===Fi)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Or)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fi,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,S;if(c)g=1/(a-r),S=a/(a-r);else if(o===Fi)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===Or)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ls=new I,Di=new Ke,n_=new I(0,0,0),s_=new I(1,1,1),Rn=new I,$a=new I,di=new I,Bd=new Ke,kd=new ct,Ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r_=0,zd=new I,Ds=new ct,rn=new Ke,Ja=new I,Ar=new I,a_=new I,o_=new ct,Hd=new I(1,0,0),Vd=new I(0,1,0),Gd=new I(0,0,1),Wd={type:"added"},l_={type:"removed"},Ns={type:"childadded",child:null},eh={type:"childremoved",child:null},Pt=class i extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Ri,n=new ct,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new De}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ar,Ja,this.up):rn.lookAt(Ja,Ar,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(rn),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l_),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,a_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c_={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Zh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=th(a,r,e+1/3),this.g=th(a,r,e),this.b=th(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=pi){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){let n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=un(e.r),this.g=un(e.g),this.b=un(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Ye.workingToColorSpace(qt.copy(this),e),Math.round(Ve(qt.r*255,0,255))*65536+Math.round(Ve(qt.g*255,0,255))*256+Math.round(Ve(qt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=pi){Ye.workingToColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Qa);let n=Dr(Cn.h,Qa.h,t),s=Dr(Cn.s,Qa.s,t),r=Dr(Cn.l,Qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Fe;Fe.NAMES=Yf;var ai=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new I,an=new I,ih=new I,on=new I,Us=new I,Fs=new I,Xd=new I,nh=new I,sh=new I,rh=new I,ah=new Be,oh=new Be,lh=new Be,Dn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ni.subVectors(s,t),an.subVectors(n,t),ih.subVectors(e,t);let a=Ni.dot(Ni),o=Ni.dot(an),c=Ni.dot(ih),l=an.dot(an),h=an.dot(ih),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ah.setScalar(0),oh.setScalar(0),lh.setScalar(0),ah.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,n),lh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ah,r.x),a.addScaledVector(oh,r.y),a.addScaledVector(lh,r.z),a}static isFrontFacing(e,t,n,s){return Ni.subVectors(n,t),an.subVectors(e,t),Ni.cross(an).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ni.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Us.subVectors(s,n),Fs.subVectors(r,n),nh.subVectors(e,n);let c=Us.dot(nh),l=Fs.dot(nh);if(c<=0&&l<=0)return t.copy(n);sh.subVectors(e,s);let h=Us.dot(sh),d=Fs.dot(sh);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Us,a);rh.subVectors(e,r);let f=Us.dot(rh),g=Fs.dot(rh);if(g>=0&&f<=g)return t.copy(r);let S=f*l-c*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Fs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Xd.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Xd,o);let p=1/(m+S+u);return a=S*p,o=u*p,t.copy(n).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ui):Ui.fromBufferAttribute(r,a),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),to.subVectors(this.max,Rr),Os.subVectors(e.a,Rr),Bs.subVectors(e.b,Rr),ks.subVectors(e.c,Rr),In.subVectors(Bs,Os),Pn.subVectors(ks,Bs),is.subVectors(Os,ks);let t=[0,-In.z,In.y,0,-Pn.z,Pn.y,0,-is.z,is.y,In.z,0,-In.x,Pn.z,0,-Pn.x,is.z,0,-is.x,-In.y,In.x,0,-Pn.y,Pn.x,0,-is.y,is.x,0];return!ch(t,Os,Bs,ks,to)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Os,Bs,ks,to))?!1:(io.crossVectors(In,Pn),t=[io.x,io.y,io.z],ch(t,Os,Bs,ks,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ln=[new I,new I,new I,new I,new I,new I,new I,new I],Ui=new I,eo=new zt,Os=new I,Bs=new I,ks=new I,In=new I,Pn=new I,is=new I,Rr=new I,to=new I,io=new I,ns=new I;function ch(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ns.fromArray(i,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Rt=new I,no=new Le,h_=0,Ct=class extends Oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hf,this.updateRanges=[],this.gpuType=Lt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hr=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},u_=new zt,Cr=new I,hh=new I,Nn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):u_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(hh)),this.expandByPoint(Cr.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},d_=0,Ti=new Ke,uh=new Pt,zs=new I,fi=new zt,Ir=new zt,Bt=new I,yt=class i extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?Hr:zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(fi.min,Ir.min),fi.expandByPoint(Bt),Bt.addVectors(fi.max,Ir.max),fi.expandByPoint(Bt)):(fi.expandByPoint(Ir.min),fi.expandByPoint(Ir.max))}fi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Bt.fromBufferAttribute(o,l),c&&(zs.fromBufferAttribute(e,l),Bt.add(zs)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new I,c[y]=new I;let l=new I,h=new I,d=new I,u=new Le,f=new Le,g=new Le,S=new I,m=new I;function p(y,w,R){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[y].add(S),o[w].add(S),o[R].add(S),c[y].add(m),c[w].add(m),c[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,w=b.length;y<w;++y){let R=b[y],C=R.start,L=R.count;for(let O=C,D=C+L;O<D;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let A=new I,_=new I,v=new I,M=new I;function T(y){v.fromBufferAttribute(s,y),M.copy(v);let w=o[y];A.copy(w),A.sub(v.multiplyScalar(v.dot(w))).normalize(),_.crossVectors(M,w);let C=_.dot(c[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,C)}for(let y=0,w=b.length;y<w;++y){let R=b[y],C=R.start,L=R.count;for(let O=C,D=C+L;O<D;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Ct(u,h,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dh=new I,f_=new I,p_=new De,mi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=dh.subVectors(n,t).cross(f_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||p_.getNormalMatrix(e),s=this.coplanarPoint(dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},m_=0,fn=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=ir,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ih,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var cn=new I,fh=new I,so=new I,ro=new I,pn=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fh.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),ro.copy(this.origin).sub(fh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(so),o=ro.dot(this.direction),c=-ro.dot(so),l=ro.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fh).addScaledVector(so,u),f}intersectSphere(e,t){if(e.radius<0)return null;cn.subVectors(e.center,this.origin);let n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=n.x-a.x,b=n.y-a.y,A=n.z-a.z,_=Math.abs(c),v=Math.abs(l),M=Math.abs(h),T,y,w,R,C,L,O,D,B,Y,W,ee;if(_>=v&&_>=M?(w=c,L=d,B=g,ee=p,c>=0?(T=l,y=h,R=u,C=f,O=S,D=m,Y=b,W=A):(T=h,y=l,R=f,C=u,O=m,D=S,Y=A,W=b)):v>=M?(w=l,L=u,B=S,ee=b,l>=0?(T=h,y=c,R=f,C=d,O=m,D=g,Y=A,W=p):(T=c,y=h,R=d,C=f,O=g,D=m,Y=p,W=A)):(w=h,L=f,B=m,ee=A,h>=0?(T=c,y=l,R=d,C=u,O=g,D=S,Y=p,W=b):(T=l,y=c,R=u,C=d,O=S,D=g,Y=b,W=p)),w===0)return null;let G=T/w,j=y/w,J=1/w,xe=R-G*L,be=C-j*L,Ne=O-G*B,Ie=D-j*B,je=Y-G*ee,q=W-j*ee,te=je*Ie-q*Ne,ye=xe*q-be*je,Ue=Ne*be-Ie*xe;if(s){if(te<0||ye<0||Ue<0)return null}else if((te<0||ye<0||Ue<0)&&(te>0||ye>0||Ue>0))return null;let ge=te+ye+Ue;if(ge===0)return null;let He=J*(te*L+ye*B+Ue*ee);return(ge>0?He<0:He>0)?null:this.at(He/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yd=new Ke,ss=new pn,ao=new Nn,qd=new I,oo=new I,lo=new I,co=new I,ph=new I,ho=new I,Zd=new I,uo=new I,se=class extends Pt{constructor(e=new yt,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(ph.fromBufferAttribute(d,e),a?ho.addScaledVector(ph,h):ho.addScaledVector(ph.sub(t),h))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(ao.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ao,qd)===null||ss.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(Yd.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Yd),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,v=A;_<v;_+=3){let M=o.getX(_),T=o.getX(_+1),y=o.getX(_+2);s=fo(this,p,e,n,l,h,d,M,T,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let b=o.getX(m),A=o.getX(m+1),_=o.getX(m+2);s=fo(this,a,e,n,l,h,d,b,A,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,v=A;_<v;_+=3){let M=_,T=_+1,y=_+2;s=fo(this,p,e,n,l,h,d,M,T,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let b=m,A=m+1,_=m+2;s=fo(this,a,e,n,l,h,d,b,A,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function g_(i,e,t,n,s,r,a,o){let c;if(e.side===ei?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Gn,o),c===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(uo);return l<t.near||l>t.far?null:{distance:l,point:uo.clone(),object:i}}function fo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,oo),i.getVertexPosition(c,lo),i.getVertexPosition(l,co);let h=g_(i,e,t,n,oo,lo,co,Zd);if(h){let d=new I;Dn.getBarycoord(Zd,oo,lo,co,d),s&&(h.uv=Dn.getInterpolatedAttribute(s,o,c,l,d,new Le)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,o,c,l,d,new Le)),a&&(h.normal=Dn.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};Dn.getNormal(oo,lo,co,u.normal),h.face=u,h.barycoord=d}return h}var mn=class extends ri{constructor(e=null,t=1,n=1,s,r,a,o,c,l=pt,h=pt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rs=new Nn,__=new Le(.5,.5),po=new I,Vr=class{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,a=new mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],b=r[12],A=r[13],_=r[14],v=r[15];if(s[0].setComponents(l-a,f-h,p-g,v-b).normalize(),s[1].setComponents(l+a,f+h,p+g,v+b).normalize(),s[2].setComponents(l+o,f+d,p+S,v+A).normalize(),s[3].setComponents(l-o,f-d,p-S,v-A).normalize(),n)s[4].setComponents(c,u,m,_).normalize(),s[5].setComponents(l-c,f-u,p-m,v-_).normalize();else if(s[4].setComponents(l-c,f-u,p-m,v-_).normalize(),t===Fi)s[5].setComponents(l+c,f+u,p+m,v+_).normalize();else if(t===Or)s[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);let t=__.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gn=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},No=new I,Uo=new I,Kd=new Ke,Pr=new pn,mo=new Nn,mh=new I,jd=new I,gi=class extends Pt{constructor(e=new yt,t=new gn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)No.fromBufferAttribute(t,s-1),Uo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=No.distanceTo(Uo);e.setAttribute("lineDistance",new nt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Kd.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(Kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=f,m=g-1;S<m;S+=l){let p=h.getX(S),b=h.getX(S+1),A=go(this,e,Pr,c,p,b,S);A&&t.push(A)}if(this.isLineLoop){let S=h.getX(g-1),m=h.getX(f),p=go(this,e,Pr,c,S,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=f,m=g-1;S<m;S+=l){let p=go(this,e,Pr,c,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){let S=go(this,e,Pr,c,g-1,f,g-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function go(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(No.fromBufferAttribute(o,s),Uo.fromBufferAttribute(o,r),t.distanceSqToSegment(No,Uo,mh,jd)>n)return;mh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(mh);if(!(l<e.near||l>e.far))return{distance:l,point:jd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $d=new I,Jd=new I,Js=class extends gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$d.fromBufferAttribute(t,s),Jd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$d.distanceTo(Jd);e.setAttribute("lineDistance",new nt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qs=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qd=new Ke,Sh=new pn,_o=new Nn,yo=new I,Gr=class extends Pt{constructor(e=new yt,t=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Qd.copy(s).invert(),Sh.copy(e.ray).applyMatrix4(Qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,S=f;g<S;g++){let m=l.getX(g);yo.fromBufferAttribute(d,m),ef(yo,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,S=f;g<S;g++)yo.fromBufferAttribute(d,g),ef(yo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ef(i,e,t,n,s,r,a){let o=Sh.distanceSqToPoint(i);if(o<t){let c=new I;Sh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wr=class extends ri{constructor(e=[],t=Wn,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Fn=class extends ri{constructor(e,t,n=ki,s,r,a,o=pt,c=pt,l,h=Yi,d=1){if(h!==Yi&&h!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fo=class extends Fn{constructor(e,t=ki,n=Wn,s,r,a=pt,o=pt,c,l=Yi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xr=class extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mt=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function g(S,m,p,b,A,_,v,M,T,y,w){let R=_/T,C=v/y,L=_/2,O=v/2,D=M/2,B=T+1,Y=y+1,W=0,ee=0,G=new I;for(let j=0;j<Y;j++){let J=j*C-O;for(let xe=0;xe<B;xe++){let be=xe*R-L;G[S]=be*b,G[m]=J*A,G[p]=D,l.push(G.x,G.y,G.z),G[S]=0,G[m]=0,G[p]=M>0?1:-1,h.push(G.x,G.y,G.z),d.push(xe/T),d.push(1-j/y),W+=1}}for(let j=0;j<y;j++)for(let J=0;J<T;J++){let xe=u+J+B*j,be=u+J+B*(j+1),Ne=u+(J+1)+B*(j+1),Ie=u+(J+1)+B*j;c.push(xe,be,Ie),c.push(be,Ne,Ie),ee+=6}o.addGroup(f,ee,w),f+=ee,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ht=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,S=[],m=n/2,p=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function b(){let _=new I,v=new I,M=0,T=(t-e)/n;for(let y=0;y<=r;y++){let w=[],R=y/r,C=R*(t-e)+e;for(let L=0;L<=s;L++){let O=L/s,D=O*c+o,B=Math.sin(D),Y=Math.cos(D);v.x=C*B,v.y=-R*n+m,v.z=C*Y,d.push(v.x,v.y,v.z),_.set(B,T,Y).normalize(),u.push(_.x,_.y,_.z),f.push(O,1-R),w.push(g++)}S.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let R=S[w][y],C=S[w+1][y],L=S[w+1][y+1],O=S[w][y+1];(e>0||w!==0)&&(h.push(R,C,O),M+=3),(t>0||w!==r-1)&&(h.push(C,L,O),M+=3)}l.addGroup(p,M,0),p+=M}function A(_){let v=g,M=new Le,T=new I,y=0,w=_===!0?e:t,R=_===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let C=g;for(let L=0;L<=s;L++){let D=L/s*c+o,B=Math.cos(D),Y=Math.sin(D);T.x=w*Y,T.y=m*R,T.z=w*B,d.push(T.x,T.y,T.z),u.push(0,R,0),M.x=B*.5+.5,M.y=Y*.5*R+.5,f.push(M.x,M.y),g++}for(let L=0;L<s;L++){let O=v+L,D=C+L;_===!0?h.push(D,D+1,O):h.push(D+1,D,O),y+=3}l.addGroup(p,y,_===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oo=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let A=new I,_=new I,v=new I;for(let M=0;M<t.length;M+=3)f(t[M+0],A),f(t[M+1],_),f(t[M+2],v),c(A,_,v,b)}function c(b,A,_,v){let M=v+1,T=[];for(let y=0;y<=M;y++){T[y]=[];let w=b.clone().lerp(_,y/M),R=A.clone().lerp(_,y/M),C=M-y;for(let L=0;L<=C;L++)L===0&&y===M?T[y][L]=w:T[y][L]=w.clone().lerp(R,L/C)}for(let y=0;y<M;y++)for(let w=0;w<2*(M-y)-1;w++){let R=Math.floor(w/2);w%2===0?(u(T[y][R+1]),u(T[y+1][R]),u(T[y][R])):(u(T[y][R+1]),u(T[y+1][R+1]),u(T[y+1][R]))}}function l(b){let A=new I;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(b),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function h(){let b=new I;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];let _=m(b)/2/Math.PI+.5,v=p(b)/Math.PI+.5;a.push(_,1-v)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let A=a[b+0],_=a[b+2],v=a[b+4],M=Math.max(A,_,v),T=Math.min(A,_,v);M>.9&&T<.1&&(A<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),v<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,A){let _=b*3;A.x=e[_+0],A.y=e[_+1],A.z=e[_+2]}function g(){let b=new I,A=new I,_=new I,v=new I,M=new Le,T=new Le,y=new Le;for(let w=0,R=0;w<r.length;w+=9,R+=6){b.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),M.set(a[R+0],a[R+1]),T.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),v.copy(b).add(A).add(_).divideScalar(3);let C=m(v);S(M,R+0,b,C),S(T,R+2,A,C),S(y,R+4,_,C)}}function S(b,A,_,v){v<0&&b.x===1&&(a[A]=b.x-1),_.x===0&&_.z===0&&(a[A]=v/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var On=class i extends Oo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_i=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],S=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let A=0;A<l;A++){let _=A*d-r;g.push(_,-b,0),S.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let A=b+l*p,_=b+l*(p+1),v=b+1+l*(p+1),M=b+1+l*p;f.push(A,_,M),f.push(_,v,M)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(S,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yr=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new I,u=new I,f=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){let b=[],A=p/n,_=a+A*o,v=e*Math.cos(_),M=Math.sqrt(e*e-v*v),T=0;p===0&&a===0?T=.5/t:p===n&&c===Math.PI&&(T=-.5/t);for(let y=0;y<=t;y++){let w=y/t,R=s+w*r;d.x=-M*Math.cos(R),d.y=v,d.z=M*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(w+T,1-A),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let A=h[p][b+1],_=h[p][b],v=h[p+1][b],M=h[p+1][b+1];(p!==0||a>0)&&f.push(A,_,M),(p!==n-1||c<Math.PI)&&f.push(_,v,M)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(S,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _n=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new I,f=new I,g=new I;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let p=(s+1)*S+m-1,b=(s+1)*(S-1)+m-1,A=(s+1)*(S-1)+m,_=(s+1)*S+m;c.push(p,b,_),c.push(b,A,_)}this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(tf(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(tf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=us(i[t]);for(let s in n)e[s]=n[s]}return e}function tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function y_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var qf={clone:us,merge:Kt},x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oi=class extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bo=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;i:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break i}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xh:r=e,o=2*t-n;break;case vh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xh:a=e,c=2*n-t;break;case vh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),S=g*g,m=S*g,p=-u*m+2*u*S-u*g,b=(1+u)*m+(-1.5-2*u)*S+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*S+.5*g,_=f*m-f*S;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+b*a[l+v]+A*a[c+v]+_*a[d+v];return r}},Ho=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Vo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Go=class extends Bn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),S=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[c+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let S=a[l+g],m=a[c+g],p=f*u+g*2,b=d[p],A=d[p+1],_=e*u+g*2,v=h[_],M=h[_+1],T=b_(n,t,b,v,s);r[g]=Zf(T,S,A,M,m)}return r}};function Zf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function S_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function b_(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Zf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=S_(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var xi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),gh(e.settings)&&(n.settings={inTangents:Hs(e.settings.inTangents,Array),outTangents:Hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Po:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break;case _h:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;gh(this.settings)&&(nf(this.settings.inTangents,e),nf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Pe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Og(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let S=t[d+g];if(S!==t[u+g]||S!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,gh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Po;var kn=class extends xi{constructor(e,t,n){super(e,t,n)}};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=Nr;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Wo.prototype.ValueTypeName="color";var Xo=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Xo.prototype.ValueTypeName="number";var Yo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)ct.slerpFlat(r,0,a,l-o,a,l,c);return r}},qr=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends xi{constructor(e,t,n){super(e,t,n)}};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=Nr;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};qo.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kf=new Zo,Ko=class{constructor(e){this.manager=e!==void 0?e:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var xo=new I,vo=new ct,Wi=new I,vi=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,vo,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,vo,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xo,vo,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,vo,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ln=new I,sf=new Le,rf=new Le,kt=class extends vi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,sf,rf),t.subVectors(rf,sf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var yn=class extends vi{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Vs=-90,Gs=1,jo=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new kt(Vs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new kt(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new kt(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let c=new kt(Vs,Gs,e,t);c.layers=this.layers,this.add(c);let l=new kt(Vs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var jh="\\[\\]\\.:\\/",M_=new RegExp("["+jh+"]","g"),$h="[^"+jh+"]",w_="[^"+jh.replace("\\.","")+"]",E_=/((?:WC+[\/:])*)/.source.replace("WC",$h),T_=/(WCOD+)?/.source.replace("WCOD",w_),A_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),R_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),C_=new RegExp("^"+E_+T_+A_+R_+"$"),I_=["material","materials","bones","map"],bh=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M_,"")}static parseTrackName(e){let t=C_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);I_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=bh;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aE=new Float32Array(1);var af=new Ke,Hn=class{constructor(e,t,n=0,s=1/0){this.ray=new pn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return af.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(af),this}intersectObject(e,t=!0,n=[]){return Mh(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mh(e[s],this,n,t);return n.sort(of),n}};function of(i,e){return i.distance-e.distance}function Mh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mh(r[a],e,t,!0)}}var er=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var wh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var os=class extends Js{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new yt;r.setIndex(new Ct(n,1)),r.setAttribute("position",new nt(s,3)),super(r,new gn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var ls=class extends Oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Jh(i,e,t,n){let s=P_(n);switch(t){case Wh:return i*e;case qi:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case Zi:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case Xh:return i*e*3/s.components*s.byteLength;case mt:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case $r:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(i,8)*Math.max(e,8)/2;case ul:case dl:case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:case ta:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ia:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P_(i){switch(i){case ot:case zh:return{byteLength:1,components:1};case nr:case Hh:case Zt:return{byteLength:2,components:1};case il:case nl:return{byteLength:2,components:4};case ki:case tl:case Lt:return{byteLength:4,components:1};case Vh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _p(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function D_(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let S=d[f];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var N_=`#ifdef USE_ALPHAHASH
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
}`,ze={alphahash_fragment:N_,alphahash_pars_fragment:U_,alphamap_fragment:F_,alphamap_pars_fragment:O_,alphatest_fragment:B_,alphatest_pars_fragment:k_,aomap_fragment:z_,aomap_pars_fragment:H_,batching_pars_vertex:V_,batching_vertex:G_,begin_vertex:W_,beginnormal_vertex:X_,bsdfs:Y_,iridescence_fragment:q_,bumpmap_pars_fragment:Z_,clipping_planes_fragment:K_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:$_,clipping_planes_vertex:J_,color_fragment:Q_,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:iy,common:ny,cube_uv_reflection_fragment:sy,defaultnormal_vertex:ry,displacementmap_pars_vertex:ay,displacementmap_vertex:oy,emissivemap_fragment:ly,emissivemap_pars_fragment:cy,colorspace_fragment:hy,colorspace_pars_fragment:uy,envmap_fragment:dy,envmap_common_pars_fragment:fy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ty,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:yy,fog_fragment:xy,fog_pars_fragment:vy,gradientmap_pars_fragment:Sy,lightmap_pars_fragment:by,lights_lambert_fragment:My,lights_lambert_pars_fragment:wy,lights_pars_begin:Ey,lights_toon_fragment:Ay,lights_toon_pars_fragment:Ry,lights_phong_fragment:Cy,lights_phong_pars_fragment:Iy,lights_physical_fragment:Py,lights_physical_pars_fragment:Ly,lights_fragment_begin:Dy,lights_fragment_maps:Ny,lights_fragment_end:Uy,lightprobes_pars_fragment:Fy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:ky,logdepthbuf_vertex:zy,map_fragment:Hy,map_pars_fragment:Vy,map_particle_fragment:Gy,map_particle_pars_fragment:Wy,metalnessmap_fragment:Xy,metalnessmap_pars_fragment:Yy,morphinstance_vertex:qy,morphcolor_vertex:Zy,morphnormal_vertex:Ky,morphtarget_pars_vertex:jy,morphtarget_vertex:$y,normal_fragment_begin:Jy,normal_fragment_maps:Qy,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:ix,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ax,iridescence_pars_fragment:ox,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:hx,project_vertex:ux,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:_x,shadowmap_vertex:yx,shadowmask_pars_fragment:xx,skinbase_vertex:vx,skinning_pars_vertex:Sx,skinning_vertex:bx,skinnormal_vertex:Mx,specularmap_fragment:wx,specularmap_pars_fragment:Ex,tonemapping_fragment:Tx,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Ix,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Dx,background_vert:Nx,background_frag:Ux,backgroundCube_vert:Fx,backgroundCube_frag:Ox,cube_vert:Bx,cube_frag:kx,depth_vert:zx,depth_frag:Hx,distance_vert:Vx,distance_frag:Gx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:Yx,linedashed_frag:qx,meshbasic_vert:Zx,meshbasic_frag:Kx,meshlambert_vert:jx,meshlambert_frag:$x,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:iv,meshphong_frag:nv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:av,meshtoon_frag:ov,points_vert:lv,points_frag:cv,shadow_vert:hv,shadow_frag:uv,sprite_vert:dv,sprite_frag:fv},ue={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ji={basic:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Kt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Kt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Kt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Kt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Kt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Kt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Kt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Kt([ue.lights,ue.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ji.physical={uniforms:Kt([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var kl={r:0,b:0,g:0},pv=new Ke,yp=new De;yp.set(-1,0,0,0,1,0,0,0,1);function mv(i,e,t,n,s,r){let a=new Fe(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let _=b.backgroundBlurriness>0;A=e.get(A,_)}return A}function g(b){let A=!1,_=f(b);_===null?m(a,o):_&&_.isColor&&(m(_,1),A=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,A){let _=f(A);_&&(_.isCubeTexture||_.mapping===Kr)?(l===void 0&&(l=new se(new Mt(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:us(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(A.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yp),l.material.toneMapped=Ye.getTransfer(_.colorSpace)!==it,(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new se(new _i(2,2),new yi({name:"BackgroundMaterial",uniforms:us(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,A){b.getRGB(kl,Kh(i)),t.buffers.color.setClear(kl.r,kl.g,kl.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:S,dispose:p}}function gv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(C,L,O,D,B){let Y=!1,W=d(C,D,O,L);r!==W&&(r=W,l(r.object)),Y=f(C,D,O,B),Y&&g(C,D,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(C,L,O,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,L,O,D){let B=D.wireframe===!0,Y=n[L.id];Y===void 0&&(Y={},n[L.id]=Y);let W=C.isInstancedMesh===!0?C.id:0,ee=Y[W];ee===void 0&&(ee={},Y[W]=ee);let G=ee[O.id];G===void 0&&(G={},ee[O.id]=G);let j=G[B];return j===void 0&&(j=u(c()),G[B]=j),j}function u(C){let L=[],O=[],D=[];for(let B=0;B<t;B++)L[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:D,object:C,attributes:{},index:null}}function f(C,L,O,D){let B=r.attributes,Y=L.attributes,W=0,ee=O.getAttributes();for(let G in ee)if(ee[G].location>=0){let J=B[G],xe=Y[G];if(xe===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor)),J===void 0||J.attribute!==xe||xe&&J.data!==xe.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function g(C,L,O,D){let B={},Y=L.attributes,W=0,ee=O.getAttributes();for(let G in ee)if(ee[G].location>=0){let J=Y[G];J===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));let xe={};xe.attribute=J,J&&J.data&&(xe.data=J.data),B[G]=xe,W++}r.attributes=B,r.attributesNum=W,r.index=D}function S(){let C=r.newAttributes;for(let L=0,O=C.length;L<O;L++)C[L]=0}function m(C){p(C,0)}function p(C,L){let O=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;O[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),B[C]!==L&&(i.vertexAttribDivisor(C,L),B[C]=L)}function b(){let C=r.newAttributes,L=r.enabledAttributes;for(let O=0,D=L.length;O<D;O++)L[O]!==C[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function A(C,L,O,D,B,Y,W){W===!0?i.vertexAttribIPointer(C,L,O,B,Y):i.vertexAttribPointer(C,L,O,D,B,Y)}function _(C,L,O,D){S();let B=D.attributes,Y=O.getAttributes(),W=L.defaultAttributeValues;for(let ee in Y){let G=Y[ee];if(G.location>=0){let j=B[ee];if(j===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),j!==void 0){let J=j.normalized,xe=j.itemSize,be=e.get(j);if(be===void 0)continue;let Ne=be.buffer,Ie=be.type,je=be.bytesPerElement,q=Ie===i.INT||Ie===i.UNSIGNED_INT||j.gpuType===tl;if(j.isInterleavedBufferAttribute){let te=j.data,ye=te.stride,Ue=j.offset;if(te.isInstancedInterleavedBuffer){for(let ge=0;ge<G.locationSize;ge++)p(G.location+ge,te.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<G.locationSize;ge++)m(G.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ge=0;ge<G.locationSize;ge++)A(G.location+ge,xe/G.locationSize,Ie,J,ye*je,(Ue+xe/G.locationSize*ge)*je,q)}else{if(j.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,j.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let te=0;te<G.locationSize;te++)A(G.location+te,xe/G.locationSize,Ie,J,xe*je,xe/G.locationSize*te*je,q)}}else if(W!==void 0){let J=W[ee];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(G.location,J);break;case 3:i.vertexAttrib3fv(G.location,J);break;case 4:i.vertexAttrib4fv(G.location,J);break;default:i.vertexAttrib1fv(G.location,J)}}}}b()}function v(){w();for(let C in n){let L=n[C];for(let O in L){let D=L[O];for(let B in D){let Y=D[B];for(let W in Y)h(Y[W].object),delete Y[W];delete D[B]}}delete n[C]}}function M(C){if(n[C.id]===void 0)return;let L=n[C.id];for(let O in L){let D=L[O];for(let B in D){let Y=D[B];for(let W in Y)h(Y[W].object),delete Y[W];delete D[B]}}delete n[C.id]}function T(C){for(let L in n){let O=n[L];for(let D in O){let B=O[D];if(B[C.id]===void 0)continue;let Y=B[C.id];for(let W in Y)h(Y[W].object),delete Y[W];delete B[C.id]}}}function y(C){for(let L in n){let O=n[L],D=C.isInstancedMesh===!0?C.id:0,B=O[D];if(B!==void 0){for(let Y in B){let W=B[Y];for(let ee in W)h(W[ee].object),delete W[ee];delete B[Y]}delete O[D],Object.keys(O).length===0&&delete n[L]}}}function w(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function _v(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function yv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==mt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let y=T===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ot&&T!==Lt&&!y&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Re("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:_,maxSamples:v,samples:M}}function xv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mi,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,A=b*4,_=p.clippingState||null;c.value=_,_=h(g,u,A,f);for(let v=0;v!==A;++v)_[v]=t[v];p.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=c.value,g!==!0||m===null){let p=f+S*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,_=f;A!==S;++A,_+=4)a.copy(d[A]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var or=4,vv=6,Sv=20,bv=256,sa=new yn,jf=new Fe,Qh=null,eu=0,tu=0,iu=!1,Mv=new I,ds=new I,Hl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Mv}=r;Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,eu,tu),this._renderer.xr.enabled=iu,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Zt,format:mt,colorSpace:Ur,depthBuffer:!1},s=$f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wv(r)),this._blurMaterial=Tv(r,e,t),this._ggxMaterial=Ev(r,e,t)}return s}_compileMaterial(e){let t=new se(new yt,e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,n,s,r){let c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jf),d.toneMapping=Bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new Mt,new Un({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(jf),p=!0);for(let A=0;A<6;A++){let _=A%3;_===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):_===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let v=this._cubeSize;ar(s,_*v,A>2?v:0,v,v),d.setRenderTarget(s),p&&d.render(S,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Wn||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ar(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,sa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-or?n-g+or:0),p=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ar(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,sa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ar(e,m,p,3*S,2*S),s.setRenderTarget(e),s.render(o,sa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-or?s-this._lodMax+or:0),u=4*(this._cubeSize-h);ar(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,sa)}};function wv(i){let e=[],t=[],n=i,s=i-or+1+vv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),S=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,A=p>2?0:-1,_=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];g.set(_,f*u*p);for(let v=0;v<u;v++){let M=h[v*2]*2-1,T=h[v*2+1]*2-1;p===0?ds.set(1,T,M):p===1?ds.set(-M,1,-T):p===2?ds.set(-M,T,1):p===3?ds.set(-1,T,-M):p===4?ds.set(-M,-1,T):ds.set(M,T,-1),ds.toArray(S,(p*u+v)*f)}}let m=new yt;m.setAttribute("position",new Ct(g,f)),m.setAttribute("outputDirection",new Ct(S,f)),t.push(new se(m,null)),n>or&&n--}return{lodMeshes:t,sizeLods:e}}function $f(i,e,t){let n=new It(i,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ev(i,e,t){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
	`}var Vl=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:Ci});r.uniforms.tEquirect.value=t;let a=new se(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Je),new jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Av(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Jo||f===Qo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let S=new Vl(g.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Jo||f===Qo,S=f===Wn||f===hs;if(g||S){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Hl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||S&&b&&c(b)?(n===null&&(n=new Hl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Jo?u.mapping=Wn:f===Qo&&(u.mapping=hs),u}function c(u){let f=0,g=6;for(let S=0;S<g;S++)u[S]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Rv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&as("WebGLRenderer: "+n+" extension not supported."),s}}}function Cv(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(f!==null){let b=f.array;S=f.version;for(let A=0,_=b.length;A<_;A+=3){let v=b[A+0],M=b[A+1],T=b[A+2];u.push(v,M,M,T,T,v)}}else{let b=g.array;S=g.version;for(let A=0,_=b.length/3-1;A<_;A+=3){let v=A+0,M=A+1,T=A+2;u.push(v,M,M,T,T,v)}}let m=new(g.count>=65535?Hr:zr)(u,1);m.version=S;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Iv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=u[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Pv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lv(i,e,t){let n=new WeakMap,s=new Be;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),S===!0&&(A=3);let _=o.attributes.position.count*A,v=1;_>e.maxTextureSize&&(v=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*v*4*d),T=new kr(M,_,v,d);T.type=Lt,T.needsUpdate=!0;let y=A*4;for(let R=0;R<d;R++){let C=m[R],L=p[R],O=b[R],D=_*v*4*R;for(let B=0;B<C.count;B++){let Y=B*y;f===!0&&(s.fromBufferAttribute(C,B),M[D+Y+0]=s.x,M[D+Y+1]=s.y,M[D+Y+2]=s.z,M[D+Y+3]=0),g===!0&&(s.fromBufferAttribute(L,B),M[D+Y+4]=s.x,M[D+Y+5]=s.y,M[D+Y+6]=s.z,M[D+Y+7]=0),S===!0&&(s.fromBufferAttribute(O,B),M[D+Y+8]=s.x,M[D+Y+9]=s.y,M[D+Y+10]=s.z,M[D+Y+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new Le(_,v)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Dv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Nv={[Lh]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};function Uv(i,e,t,n,s,r){let a=new It(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new yt;l.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nt([0,2,0,0,2,0],2));let h=new oi({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new se(l,h),u=new yn(-1,1,1,-1,0,1),f=null,g=null,S=!1,m,p=null,b=[],A=!1;this.setSize=function(_,v){a.setSize(_,v),o!==null&&o.setSize(_,v),c!==null&&c.setSize(_,v);for(let M=0;M<b.length;M++){let T=b[M];T.setSize&&T.setSize(_,v)}},this.setEffects=function(_){b=_,A=b.length>0&&b[0].isRenderPass===!0;let v=a.width,M=a.height;b.length>0&&o===null&&(o=new It(v,M,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),c=new It(v,M,{type:Zt,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let y=b[T];y.setSize&&y.setSize(v,M)}},this.begin=function(_,v){if(S||_.toneMapping===Bi&&b.length===0)return!1;if(p=v,v!==null){let M=v.width,T=v.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return A===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Bi,!0},this.hasRenderPass=function(){return A},this.end=function(_,v){_.toneMapping=m,S=!0;let M=a,T=o;for(let y=0;y<b.length;y++){let w=b[y];w.enabled!==!1&&(w.render(_,T,M,v),w.needsSwap!==!1&&(M=T,T=T===o?c:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},Ye.getTransfer(f)===it&&(h.defines.SRGB_TRANSFER="");let y=Nv[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(p),_.render(d,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var xp=new ri,ru=new Fn(1,1),vp=new kr,Sp=new Jt,bp=new Wr,ep=[],tp=[],ip=new Float32Array(16),np=new Float32Array(9),sp=new Float32Array(4);function cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ep[s];if(r===void 0&&(r=new Float32Array(s),ep[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xl(i,e){let t=tp[e];t===void 0&&(t=new Int32Array(e),tp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function zv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;sp.set(n),i.uniformMatrix2fv(this.addr,!1,sp),Ut(t,n)}}function Hv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;np.set(n),i.uniformMatrix3fv(this.addr,!1,np),Ut(t,n)}}function Vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;ip.set(n),i.uniformMatrix4fv(this.addr,!1,ip),Ut(t,n)}}function Gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function $v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ru.compareFunction=t.isReversedDepthBuffer()?Bl:Ol,r=ru):r=xp,t.setTexture2D(e||r,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sp,s)}function Qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bp,s)}function eS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vp,s)}function tS(i){switch(i){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return kv;case 35674:return zv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return Zv;case 36295:return Kv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return eS}}function iS(i,e){i.uniform1fv(this.addr,e)}function nS(i,e){let t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function sS(i,e){let t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function rS(i,e){let t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function aS(i,e){let t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oS(i,e){let t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lS(i,e){let t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cS(i,e){i.uniform1iv(this.addr,e)}function hS(i,e){i.uniform2iv(this.addr,e)}function uS(i,e){i.uniform3iv(this.addr,e)}function dS(i,e){i.uniform4iv(this.addr,e)}function fS(i,e){i.uniform1uiv(this.addr,e)}function pS(i,e){i.uniform2uiv(this.addr,e)}function mS(i,e){i.uniform3uiv(this.addr,e)}function gS(i,e){i.uniform4uiv(this.addr,e)}function _S(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ru:a=xp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function yS(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sp,r[a])}function xS(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bp,r[a])}function vS(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vp,r[a])}function SS(i){switch(i){case 5126:return iS;case 35664:return nS;case 35665:return sS;case 35666:return rS;case 35674:return aS;case 35675:return oS;case 35676:return lS;case 5124:case 35670:return cS;case 35667:case 35671:return hS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return fS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return vS}}var au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tS(t.type)}},ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SS(t.type)}},lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nu=/(\w+)(\])?(\[|\.)?/g;function rp(i,e){i.seq.push(e),i.map[e.id]=e}function bS(i,e,t){let n=i.name,s=n.length;for(nu.lastIndex=0;;){let r=nu.exec(n),a=nu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){rp(t,l===void 0?new au(o,i,e):new ou(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new lu(o),rp(t,d)),t=d}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);bS(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ap(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var MS=37297,wS=0;function ES(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var op=new De;function TS(i){Ye._getMatrix(op,Ye.workingColorSpace,i);let e=`mat3( ${op.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ES(i.getShaderSource(e),o)}else return r}function AS(i,e){let t=TS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var RS={[Lh]:"Linear",[Dh]:"Reinhard",[Nh]:"Cineon",[Uh]:"ACESFilmic",[Oh]:"AgX",[Bh]:"Neutral",[Fh]:"Custom"};function CS(i,e){let t=RS[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zl=new I;function IS(){Ye.getLuminanceCoefficients(zl);let i=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function LS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function aa(i){return i!==""}function cp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(i){return i.replace(NS,FS)}var US=new Map;function FS(i,e){let t=ze[e];if(t===void 0){let n=US.get(e);if(n!==void 0)t=ze[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cu(t)}var OS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(i){return i.replace(OS,BS)}function BS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var kS={[Zr]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function zS(i){return kS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var HS={[Wn]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function VS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":HS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var GS={[hs]:"ENVMAP_MODE_REFRACTION"};function WS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":GS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var XS={[Ph]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[If]:"ENVMAP_BLENDING_ADD"};function YS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":XS[i.combine]||"ENVMAP_BLENDING_NONE"}function qS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ZS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=zS(t),l=VS(t),h=WS(t),d=YS(t),u=qS(t),f=PS(t),g=LS(r),S=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(m=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?ze.tonemapping_pars_fragment:"",t.toneMapping!==Bi?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,AS("linearToOutputTexel",t.outputColorSpace),IS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=cu(a),a=cp(a,t),a=hp(a,t),o=cu(o),o=cp(o,t),o=hp(o,t),a=up(a),o=up(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Si?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Si?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=b+m+a,_=b+p+o,v=ap(s,s.VERTEX_SHADER,A),M=ap(s,s.FRAGMENT_SHADER,_);s.attachShader(S,v),s.attachShader(S,M),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function T(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(S)||"",O=s.getShaderInfoLog(v)||"",D=s.getShaderInfoLog(M)||"",B=L.trim(),Y=O.trim(),W=D.trim(),ee=!0,G=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,v,M);else{let j=lp(s,v,"vertex"),J=lp(s,M,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+j+`
`+J)}else B!==""?Re("WebGLProgram: Program Info Log:",B):(Y===""||W==="")&&(G=!1);G&&(C.diagnostics={runnable:ee,programLog:B,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(v),s.deleteShader(M),y=new lr(s,S),w=DS(s,S)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,MS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=v,this.fragmentShader=M,this}var KS=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uu(e),t.set(e,n)),n}},uu=class{constructor(e){this.id=KS++,this.code=e,this.usedTimes=0}};function jS(i){return i===Zi||i===ta||i===ia}function $S(i,e,t,n,s,r){let a=new js,o=new hu,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function S(y,w,R,C,L,O){let D=C.fog,B=L.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ee=e.get(y.envMap||Y,W),G=ee&&ee.mapping===Kr?ee.image.height:null,j=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Re("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=J!==void 0?J.length:0,be=0;B.morphAttributes.position!==void 0&&(be=1),B.morphAttributes.normal!==void 0&&(be=2),B.morphAttributes.color!==void 0&&(be=3);let Ne,Ie,je,q;if(j){let dt=ji[j];Ne=dt.vertexShader,Ie=dt.fragmentShader}else{Ne=y.vertexShader,Ie=y.fragmentShader;let dt=o.getVertexShaderStage(y),et=o.getFragmentShaderStage(y);o.update(y,dt,et),je=dt.id,q=et.id}let te=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ue=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,He=!!y.map,Dt=!!y.matcap,Ge=!!ee,$e=!!y.aoMap,ut=!!y.lightMap,Xe=!!y.bumpMap&&y.wireframe===!1,xt=!!y.normalMap,Ot=!!y.displacementMap,si=!!y.emissiveMap,bt=!!y.metalnessMap,Tt=!!y.roughnessMap,F=y.anisotropy>0,Wt=y.clearcoat>0,st=y.dispersion>0,P=y.retroreflectivity>0,x=y.iridescence>0,k=y.sheen>0,V=y.transmission>0,Z=F&&!!y.anisotropyMap,ne=Wt&&!!y.clearcoatMap,re=Wt&&!!y.clearcoatNormalMap,K=Wt&&!!y.clearcoatRoughnessMap,Q=x&&!!y.iridescenceMap,ae=x&&!!y.iridescenceThicknessMap,Ee=k&&!!y.sheenColorMap,he=k&&!!y.sheenRoughnessMap,oe=!!y.specularMap,Te=!!y.specularColorMap,Ce=!!y.specularIntensityMap,Oe=V&&!!y.transmissionMap,U=V&&!!y.thicknessMap,le=!!y.gradientMap,$=!!y.alphaMap,ce=y.alphaTest>0,pe=!!y.alphaHash,ie=!!y.extensions,Ae=Bi;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Me={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:Ie,defines:y.defines,customVertexShaderID:je,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&L.instanceColor!==null,instancingMorph:Ue&&L.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:He,matcap:Dt,envMap:Ge,envMapMode:Ge&&ee.mapping,envMapCubeUVHeight:G,aoMap:$e,lightMap:ut,bumpMap:Xe,normalMap:xt,displacementMap:Ot,emissiveMap:si,normalMapObjectSpace:xt&&y.normalMapType===Df,normalMapTangentSpace:xt&&y.normalMapType===Yh,packedNormalMap:xt&&y.normalMapType===Yh&&jS(y.normalMap.format),metalnessMap:bt,roughnessMap:Tt,anisotropy:F,anisotropyMap:Z,clearcoat:Wt,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:K,dispersion:st,retroreflection:P,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:k,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:oe,specularColorMap:Te,specularIntensityMap:Ce,transmission:V,transmissionMap:Oe,thicknessMap:U,gradientMap:le,opaque:y.transparent===!1&&y.blending===ir&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:pe,combine:y.combine,mapUv:He&&g(y.map.channel),aoMapUv:$e&&g(y.aoMap.channel),lightMapUv:ut&&g(y.lightMap.channel),bumpMapUv:Xe&&g(y.bumpMap.channel),normalMapUv:xt&&g(y.normalMap.channel),displacementMapUv:Ot&&g(y.displacementMap.channel),emissiveMapUv:si&&g(y.emissiveMap.channel),metalnessMapUv:bt&&g(y.metalnessMap.channel),roughnessMapUv:Tt&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:ne&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(y.sheenRoughnessMap.channel),specularMapUv:oe&&g(y.specularMap.channel),specularColorMapUv:Te&&g(y.specularColorMap.channel),specularIntensityMapUv:Ce&&g(y.specularIntensityMap.channel),transmissionMapUv:Oe&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:$&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||F),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(He||$),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:be,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:He&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:si&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===li,flipSided:y.side===ei,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(w,y),b(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let w=f[y.type],R;if(w){let C=ji[w];R=qf.clone(C.uniforms)}else R=y.uniforms;return R}function _(y,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new ZS(i,w,y,s),l.push(R),h.set(w,R)),R}function v(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:_,releaseProgram:v,releaseShaderCache:M,programs:l,dispose:T}}function JS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function QS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,S,m,p){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},i[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=S,b.renderOrder=u.renderOrder,b.z=m,b.group=p),e++,b}function c(u,f,g,S,m,p,b){b.reversedDepth===!0&&(m=-m);let A=o(u,f,g,S,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function l(u,f,g,S,m,p){let b=o(u,f,g,S,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||QS),n.length>1&&n.sort(f||fp),s.length>1&&s.sort(f||fp)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function eb(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pp,i.set(n,[a])):s>=r.length?(a=new pp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ib(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var nb=0;function sb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rb(i){let e=new tb,t=ib(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new Ke,a=new Ke;function o(l){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,b=0,A=0,_=0,v=0,M=0,T=0,y=0,w=0,R=0;l.sort(sb);for(let L=0,O=l.length;L<O;L++){let D=l[L],B=D.color,Y=D.intensity,W=D.distance,ee=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Zi?ee=D.shadow.map.texture:ee=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*Y,d+=B.g*Y,u+=B.b*Y;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],Y);R++}else if(D.isSunLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,J=t.get(D);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=ee;let xe=j.getViewportCount();for(let be=0;be<xe;be++)n.sunShadowMatrix[S+be]=j.getMatrix(be),n.sunShadowCascade[S+be]=j._cascadeData[be];S+=xe,g++}n.sun[f]=G,f++}else if(D.isDirectionalLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,J=t.get(D);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=D.shadow.matrix,v++}n.directional[m]=G,m++}else if(D.isSpotLight){let G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(Y),G.distance=W,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[b]=G;let j=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,j.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[b]=j.matrix,D.castShadow){let J=t.get(D);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,n.spotShadow[b]=J,n.spotShadowMap[b]=ee,T++}b++}else if(D.isRectAreaLight){let G=e.get(D);G.color.copy(B).multiplyScalar(Y),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=G,A++}else if(D.isPointLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let j=D.shadow,J=t.get(D);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=D.shadow.matrix,M++}n.point[p]=G,p++}else if(D.isHemisphereLight){let G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(Y),G.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[_]=G,_++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==b||C.rectAreaLength!==A||C.hemiLength!==_||C.numSunShadows!==g||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==T||C.numSpotMaps!==y||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=A,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=b,C.rectAreaLength=A,C.hemiLength=_,C.numSunShadows=g,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=T,C.numSpotMaps=y,C.numLightProbes=R,n.version=nb++)}function c(l,h){let d=0,u=0,f=0,g=0,S=0,m=0,p=h.matrixWorldInverse;for(let b=0,A=l.length;b<A;b++){let _=l[b];if(_.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(_.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let v=n.rectArea[S];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),S++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function mp(i){let e=new rb(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ab(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mp(i),e.set(s,[o])):r>=a.length?(o=new mp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ob=`void main() {
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
}`,cb=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],hb=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],gp=new Ke,ra=new I,su=new I;function ub(i,e,t){let n=new Vr,s=new Le,r=new Le,a=new Be,o=new Bo,c=new ko,l={},h=t.maxTextureSize,d={[Gn]:ei,[ei]:Gn,[li]:li},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:ob,fragmentShader:lb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new se(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let p=this.type;this.render=function(M,T,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===hf&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ci),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=p!==this.type;O&&T.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=M.length;D<B;D++){let Y=M[D],W=Y.shadow;if(W===void 0){Re("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ee=W.getFrameExtents();s.multiply(ee),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,W.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=G,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===tr){if(Y.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new It(s.x,s.y,{format:Zi,type:Zt,minFilter:Je,magFilter:Je,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Fn(s.x,s.y,Lt),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=Yi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=pt,W.map.depthTexture.magFilter=pt}else Y.isPointLight?(W.map=new Vl(s.x),W.map.depthTexture=new Fo(s.x,ki)):(W.map=new It(s.x,s.y),W.map.depthTexture=new Fn(s.x,s.y,ki)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=Yi,this.type===Zr?(W.map.depthTexture.compareFunction=G?Bl:Ol,W.map.depthTexture.minFilter=Je,W.map.depthTexture.magFilter=Je):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=pt,W.map.depthTexture.magFilter=pt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,y);for(let J=0;J<j;J++){let xe=W.getCamera(J);if(Y.isPointLight){let be=W.camera,Ne=W.matrix,Ie=Y.distance||be.far;Ie!==be.far&&(be.far=Ie,be.updateProjectionMatrix()),ra.setFromMatrixPosition(Y.matrixWorld),be.position.copy(ra),su.copy(be.position),su.add(cb[J]),be.up.copy(hb[J]),be.lookAt(su),be.updateMatrixWorld(),Ne.makeTranslation(-ra.x,-ra.y,-ra.z),gp.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),W._frustum.setFromProjectionMatrix(gp,be.coordinateSystem,be.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,J),i.clear();else{J===0&&(i.setRenderTarget(W.map),i.clear());let be=W.getViewport(J);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),L.viewport(a)}n=W.getFrustum(J),_(T,y,xe,Y,this.type)}W.isPointLightShadow!==!0&&this.type===tr&&b(W,y),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,C)};function b(M,T){let y=e.update(S);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new It(s.x,s.y,{format:Zi,type:Zt}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,y,u,S,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,y,f,S,null)}function A(M,T,y,w){let R=null,C=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)R=C;else if(R=y.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=R.uuid,O=T.uuid,D=l[L];D===void 0&&(D={},l[L]=D);let B=D[O];B===void 0&&(B=R.clone(),D[O]=B,T.addEventListener("dispose",v)),R=B}if(R.visible=T.visible,R.wireframe=T.wireframe,w===tr?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:d[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=y}return R}function _(M,T,y,w,R){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===tr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let O=e.update(M),D=M.material;if(Array.isArray(D)){let B=O.groups;for(let Y=0,W=B.length;Y<W;Y++){let ee=B[Y],G=D[ee.materialIndex];if(G&&G.visible){let j=A(M,G,w,R);M.onBeforeShadow(i,M,T,y,O,j,ee),i.renderBufferDirect(y,null,O,j,M,ee),M.onAfterShadow(i,M,T,y,O,j,ee)}}}else if(D.visible){let B=A(M,D,w,R);M.onBeforeShadow(i,M,T,y,O,B,null),i.renderBufferDirect(y,null,O,B,M,null),M.onAfterShadow(i,M,T,y,O,B,null)}}let L=M.children;for(let O=0,D=L.length;O<D;O++)_(L[O],T,y,w,R)}function v(M){M.target.removeEventListener("dispose",v);for(let y in l){let w=l[y],R=M.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function db(i,e){function t(){let U=!1,le=new Be,$=null,ce=new Be(0,0,0,0);return{setMask:function(pe){$!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ie,Ae,Me,dt){dt===!0&&(pe*=Me,ie*=Me,Ae*=Me),le.set(pe,ie,Ae,Me),ce.equals(le)===!1&&(i.clearColor(pe,ie,Ae,Me),ce.copy(le))},reset:function(){U=!1,$=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,$=null,ce=null,pe=null;return{setReversed:function(ie){if(le!==ie){let Ae=e.get("EXT_clip_control");ie?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),le=ie;let Me=pe;pe=null,this.setClear(Me)}},getReversed:function(){return le},setTest:function(ie){ie?te(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ie){$!==ie&&!U&&(i.depthMask(ie),$=ie)},setFunc:function(ie){if(le&&(ie=Xf[ie]),ce!==ie){switch(ie){case Mo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ie}},setLocked:function(ie){U=ie},setClear:function(ie){pe!==ie&&(pe=ie,le&&(ie=1-ie),i.clearDepth(ie))},reset:function(){U=!1,$=null,ce=null,pe=null,le=!1}}}function s(){let U=!1,le=null,$=null,ce=null,pe=null,ie=null,Ae=null,Me=null,dt=null;return{setTest:function(et){U||(et?te(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(et){le!==et&&!U&&(i.stencilMask(et),le=et)},setFunc:function(et,Li,Vi){($!==et||ce!==Li||pe!==Vi)&&(i.stencilFunc(et,Li,Vi),$=et,ce=Li,pe=Vi)},setOp:function(et,Li,Vi){(ie!==et||Ae!==Li||Me!==Vi)&&(i.stencilOp(et,Li,Vi),ie=et,Ae=Li,Me=Vi)},setLocked:function(et){U=et},setClear:function(et){dt!==et&&(i.clearStencil(et),dt=et)},reset:function(){U=!1,le=null,$=null,ce=null,pe=null,ie=null,Ae=null,Me=null,dt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,b=null,A=null,_=null,v=null,M=null,T=null,y=new Fe(0,0,0),w=0,R=!1,C=null,L=null,O=null,D=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=ee>=2);let j=null,J={},xe=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Ne=new Be().fromArray(xe),Ie=new Be().fromArray(be);function je(U,le,$,ce){let pe=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<$;Ae++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(le+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ie}let q={};q[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Ys),Xe(!1),xt(Eh),te(i.CULL_FACE),$e(Ci);function te(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ye(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ue(U,le){return u[U]!==le?(i.bindFramebuffer(U,le),u[U]=le,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ge(U,le){let $=g,ce=!1;if(U){$=f.get(le),$===void 0&&($=[],f.set(le,$));let pe=U.textures;if($.length!==pe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ae=pe.length;ie<Ae;ie++)$[ie]=i.COLOR_ATTACHMENT0+ie;$.length=pe.length,ce=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ce=!0);ce&&i.drawBuffers($)}function He(U){return S!==U?(i.useProgram(U),S=U,!0):!1}let Dt={[cs]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};Dt[pf]=i.MIN,Dt[mf]=i.MAX;let Ge={[gf]:i.ZERO,[_f]:i.ONE,[yf]:i.SRC_COLOR,[Ch]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[Ih]:i.ONE_MINUS_SRC_ALPHA,[Mf]:i.ONE_MINUS_DST_COLOR,[Sf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(U,le,$,ce,pe,ie,Ae,Me,dt,et){if(U===Ci){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),U!==uf){if(U!==p||et!==R){if((b!==cs||v!==cs)&&(i.blendEquation(i.FUNC_ADD),b=cs,v=cs),et)switch(U){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",U);break}else switch(U){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ah:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",U);break}A=null,_=null,M=null,T=null,y.set(0,0,0),w=0,p=U,R=et}return}pe=pe||le,ie=ie||$,Ae=Ae||ce,(le!==b||pe!==v)&&(i.blendEquationSeparate(Dt[le],Dt[pe]),b=le,v=pe),($!==A||ce!==_||ie!==M||Ae!==T)&&(i.blendFuncSeparate(Ge[$],Ge[ce],Ge[ie],Ge[Ae]),A=$,_=ce,M=ie,T=Ae),(Me.equals(y)===!1||dt!==w)&&(i.blendColor(Me.r,Me.g,Me.b,dt),y.copy(Me),w=dt),p=U,R=!1}function ut(U,le){U.side===li?ye(i.CULL_FACE):te(i.CULL_FACE);let $=U.side===ei;le&&($=!$),Xe($),U.blending===ir&&U.transparent===!1?$e(Ci):$e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ce=U.stencilWrite;o.setTest(ce),ce&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),si(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(U){C!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),C=U)}function xt(U){U!==lf?(te(i.CULL_FACE),U!==L&&(U===Eh?i.cullFace(i.BACK):U===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),L=U}function Ot(U){U!==O&&(W&&i.lineWidth(U),O=U)}function si(U,le,$){U?(te(i.POLYGON_OFFSET_FILL),(D!==le||B!==$)&&(D=le,B=$,a.getReversed()&&(le=-le),i.polygonOffset(le,$))):ye(i.POLYGON_OFFSET_FILL)}function bt(U){U?te(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Tt(U){U===void 0&&(U=i.TEXTURE0+Y-1),j!==U&&(i.activeTexture(U),j=U)}function F(U,le,$){$===void 0&&(j===null?$=i.TEXTURE0+Y-1:$=j);let ce=J[$];ce===void 0&&(ce={type:void 0,texture:void 0},J[$]=ce),(ce.type!==U||ce.texture!==le)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(U,le||q[U]),ce.type=U,ce.texture=le)}function Wt(){let U=J[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function x(){try{i.texSubImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function k(){try{i.texSubImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function ne(){try{i.texStorage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function re(){try{i.texStorage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function K(){try{i.texImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function Q(){try{i.texImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function ae(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Ee(U,le){d[U]!==le&&(i.pixelStorei(U,le),d[U]=le)}function he(U){Ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function oe(U){Ie.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function Te(U,le){let $=l.get(le);$===void 0&&($=new WeakMap,l.set(le,$));let ce=$.get(U);ce===void 0&&(ce=i.getUniformBlockIndex(le,U.name),$.set(U,ce))}function Ce(U,le){let ce=l.get(le).get(U);c.get(le)!==ce&&(i.uniformBlockBinding(le,ce,U.__bindingPointIndex),c.set(le,ce))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,J={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,b=null,A=null,_=null,v=null,M=null,T=null,y=new Fe(0,0,0),w=0,R=!1,C=null,L=null,O=null,D=null,B=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:Ue,drawBuffers:ge,useProgram:He,setBlending:$e,setMaterial:ut,setFlipSided:Xe,setCullFace:xt,setLineWidth:Ot,setPolygonOffset:si,setScissorTest:bt,activeTexture:Tt,bindTexture:F,unbindTexture:Wt,compressedTexImage2D:st,compressedTexImage3D:P,texImage2D:K,texImage3D:Q,pixelStorei:Ee,getParameter:ae,updateUBOMapping:Te,uniformBlockBinding:Ce,texStorage2D:ne,texStorage3D:re,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:he,viewport:oe,reset:Oe}}function fb(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,x){return g?new OffscreenCanvas(P,x):Br("canvas")}function m(P,x,k){let V=1,Z=st(P);if((Z.width>k||Z.height>k)&&(V=k/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ne=Math.floor(V*Z.width),re=Math.floor(V*Z.height);u===void 0&&(u=S(ne,re));let K=x?S(ne,re):u;return K.width=ne,K.height=re,K.getContext("2d").drawImage(P,0,0,ne,re),Re("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ne+"x"+re+")."),K}else return"data"in P&&Re("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function p(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,x,k,V,Z,ne=!1){if(P!==null){if(i[P]!==void 0)return i[P];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re;V&&(re=e.get("EXT_texture_norm16"),re||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8),k===i.UNSIGNED_SHORT&&re&&(K=re.R16_EXT),k===i.SHORT&&re&&(K=re.R16_SNORM_EXT)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),x===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8),k===i.UNSIGNED_SHORT&&re&&(K=re.RG16_EXT),k===i.SHORT&&re&&(K=re.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_SHORT&&re&&(K=re.RGB16_EXT),k===i.SHORT&&re&&(K=re.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let Q=ne?Fr:Ye.getTransfer(Z);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=Q===it?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&re&&(K=re.RGBA16_EXT),k===i.SHORT&&re&&(K=re.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(P,x){let k;return P?x===null||x===ki||x===sr?k=i.DEPTH24_STENCIL8:x===Lt?k=i.DEPTH32F_STENCIL8:x===nr&&(k=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===sr?k=i.DEPTH_COMPONENT24:x===Lt?k=i.DEPTH_COMPONENT32F:x===nr&&(k=i.DEPTH_COMPONENT16),k}function M(P,x){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==pt&&P.minFilter!==Je?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function T(P){let x=P.target;x.removeEventListener("dispose",T),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(P){let x=P.target;x.removeEventListener("dispose",y),C(x)}function w(P){let x=n.get(P);if(x.__webglInit===void 0)return;let k=P.source,V=f.get(k);if(V){let Z=V[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(P),Object.keys(V).length===0&&f.delete(k)}n.remove(P)}function R(P){let x=n.get(P);i.deleteTexture(x.__webglTexture);let k=P.source,V=f.get(k);delete V[x.__cacheKey],a.memory.textures--}function C(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let Z=0;Z<x.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)i.deleteFramebuffer(x.__webglFramebuffer[V]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=P.textures;for(let V=0,Z=k.length;V<Z;V++){let ne=n.get(k[V]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(k[V])}n.remove(P)}let L=0;function O(){L=0}function D(){return L}function B(P){L=P}function Y(){let P=L;return P>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function W(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function ee(P,x){let k=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let V=P.image;if(V===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,P,x);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function G(P,x){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ye(k,P,x);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function j(P,x){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ye(k,P,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function J(P,x){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Ue(k,P,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let xe={[Ai]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},be={[pt]:i.NEAREST,[Pf]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Ne={[Uf]:i.NEVER,[zf]:i.ALWAYS,[Ff]:i.LESS,[Ol]:i.LEQUAL,[Of]:i.EQUAL,[Bl]:i.GEQUAL,[Bf]:i.GREATER,[kf]:i.NOTEQUAL};function Ie(P,x){if(x.type===Lt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Je||x.magFilter===el||x.magFilter===jr||x.magFilter===Xn||x.minFilter===Je||x.minFilter===el||x.minFilter===jr||x.minFilter===Xn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,xe[x.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,xe[x.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,xe[x.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,be[x.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,be[x.minFilter]),x.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pt||x.minFilter!==jr&&x.minFilter!==Xn||x.type===Lt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function je(P,x){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",T));let V=x.source,Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));let ne=W(x);if(ne!==P.__cacheKey){Z[ne]===void 0&&(Z[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[ne].usedTimes++;let re=Z[P.__cacheKey];re!==void 0&&(Z[P.__cacheKey].usedTimes--,re.usedTimes===0&&R(x)),P.__cacheKey=ne,P.__webglTexture=Z[ne].texture}return k}function q(P,x,k){return Math.floor(Math.floor(P/k)/x)}function te(P,x,k,V){let ne=P.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,V,x.data);else{ne.sort((Ee,he)=>Ee.start-he.start);let re=0;for(let Ee=1;Ee<ne.length;Ee++){let he=ne[re],oe=ne[Ee],Te=he.start+he.count,Ce=q(oe.start,x.width,4),Oe=q(he.start,x.width,4);oe.start<=Te+1&&Ce===Oe&&q(oe.start+oe.count-1,x.width,4)===Ce?he.count=Math.max(he.count,oe.start+oe.count-he.start):(++re,ne[re]=oe)}ne.length=re+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,he=ne.length;Ee<he;Ee++){let oe=ne[Ee],Te=Math.floor(oe.start/4),Ce=Math.ceil(oe.count/4),Oe=Te%x.width,U=Math.floor(Te/x.width),le=Ce,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Oe,U,le,$,k,V,x.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ye(P,x,k){let V=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=i.TEXTURE_3D);let Z=je(P,x),ne=x.source;t.bindTexture(V,P.__webglTexture,i.TEXTURE0+k);let re=n.get(ne);if(ne.version!==re.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let $=Ye.getPrimaries(Ye.workingColorSpace),ce=x.colorSpace===xn?null:Ye.getPrimaries(x.colorSpace),pe=x.colorSpace===xn||$===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=m(x.image,!1,s.maxTextureSize);Q=Wt(x,Q);let ae=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),he=_(x.internalFormat,ae,Ee,x.normalized,x.colorSpace,x.isVideoTexture);Ie(V,x);let oe,Te=x.mipmaps,Ce=x.isVideoTexture!==!0,Oe=re.__version===void 0||Z===!0,U=ne.dataReady,le=M(x,Q);if(x.isDepthTexture)he=v(x.format===Yn,x.type),Oe&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,he,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,ae,Ee,null));else if(x.isDataTexture)if(Te.length>0){Ce&&Oe&&t.texStorage2D(i.TEXTURE_2D,le,he,Te[0].width,Te[0].height);for(let $=0,ce=Te.length;$<ce;$++)oe=Te[$],Ce?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(i.TEXTURE_2D,$,he,oe.width,oe.height,0,ae,Ee,oe.data);x.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(i.TEXTURE_2D,le,he,Q.width,Q.height),U&&te(x,Q,ae,Ee)):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,ae,Ee,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ce&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,he,Te[0].width,Te[0].height,Q.depth);for(let $=0,ce=Te.length;$<ce;$++)if(oe=Te[$],x.format!==mt)if(ae!==null)if(Ce){if(U)if(x.layerUpdates.size>0){let pe=Jh(oe.width,oe.height,x.format,x.type);for(let ie of x.layerUpdates){let Ae=oe.data.subarray(ie*pe/oe.data.BYTES_PER_ELEMENT,(ie+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ie,oe.width,oe.height,1,ae,Ae)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,oe.width,oe.height,Q.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,he,oe.width,oe.height,Q.depth,0,oe.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,oe.width,oe.height,Q.depth,ae,Ee,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,he,oe.width,oe.height,Q.depth,0,ae,Ee,oe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ce&&Oe&&t.texStorage2D(i.TEXTURE_2D,le,he,Te[0].width,Te[0].height);for(let $=0,ce=Te.length;$<ce;$++)oe=Te[$],x.format!==mt?ae!==null?Ce?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,he,oe.width,oe.height,0,oe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(i.TEXTURE_2D,$,he,oe.width,oe.height,0,ae,Ee,oe.data)}else if(x.isDataArrayTexture)if(Ce){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,he,Q.width,Q.height,Q.depth),U)if(x.layerUpdates.size>0){let $=Jh(Q.width,Q.height,x.format,x.type);for(let ce of x.layerUpdates){let pe=Q.data.subarray(ce*$/Q.data.BYTES_PER_ELEMENT,(ce+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,Q.width,Q.height,1,ae,Ee,pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,Ee,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,Q.width,Q.height,Q.depth,0,ae,Ee,Q.data);else if(x.isData3DTexture)Ce?(Oe&&t.texStorage3D(i.TEXTURE_3D,le,he,Q.width,Q.height,Q.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,Ee,Q.data)):t.texImage3D(i.TEXTURE_3D,0,he,Q.width,Q.height,Q.depth,0,ae,Ee,Q.data);else if(x.isFramebufferTexture){if(Oe)if(Ce)t.texStorage2D(i.TEXTURE_2D,le,he,Q.width,Q.height);else{let $=Q.width,ce=Q.height;for(let pe=0;pe<le;pe++)t.texImage2D(i.TEXTURE_2D,pe,he,$,ce,0,ae,Ee,null),$>>=1,ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),d.add(x),$.onpaint=ce=>{let pe=ce.changedElements;for(let ie of d)pe.includes(ie.image)&&(ie.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let pe=i.RGBA,ie=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ie,Ae,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ce&&Oe){let $=st(Te[0]);t.texStorage2D(i.TEXTURE_2D,le,he,$.width,$.height)}for(let $=0,ce=Te.length;$<ce;$++)oe=Te[$],Ce?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae,Ee,oe):t.texImage2D(i.TEXTURE_2D,$,he,ae,Ee,oe);x.generateMipmaps=!1}else if(Ce){if(Oe){let $=st(Q);t.texStorage2D(i.TEXTURE_2D,le,he,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Ee,Q)}else t.texImage2D(i.TEXTURE_2D,0,he,ae,Ee,Q);p(x)&&b(V),re.__version=ne.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Ue(P,x,k){if(x.image.length!==6)return;let V=je(P,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);let ne=n.get(Z);if(Z.version!==ne.__version||V===!0){t.activeTexture(i.TEXTURE0+k);let re=Ye.getPrimaries(Ye.workingColorSpace),K=x.colorSpace===xn?null:Ye.getPrimaries(x.colorSpace),Q=x.colorSpace===xn||re===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ae=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,he=[];for(let ie=0;ie<6;ie++)!ae&&!Ee?he[ie]=m(x.image[ie],!0,s.maxCubemapSize):he[ie]=Ee?x.image[ie].image:x.image[ie],he[ie]=Wt(x,he[ie]);let oe=he[0],Te=r.convert(x.format,x.colorSpace),Ce=r.convert(x.type),Oe=_(x.internalFormat,Te,Ce,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,le=ne.__version===void 0||V===!0,$=Z.dataReady,ce=M(x,oe);Ie(i.TEXTURE_CUBE_MAP,x);let pe;if(ae){U&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Oe,oe.width,oe.height);for(let ie=0;ie<6;ie++){pe=he[ie].mipmaps;for(let Ae=0;Ae<pe.length;Ae++){let Me=pe[Ae];x.format!==mt?Te!==null?U?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Oe,Me.width,Me.height,0,Me.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Me.width,Me.height,Te,Ce,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Oe,Me.width,Me.height,0,Te,Ce,Me.data)}}}else{if(pe=x.mipmaps,U&&le){pe.length>0&&ce++;let ie=st(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he[ie].width,he[ie].height,Te,Ce,he[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,he[ie].width,he[ie].height,0,Te,Ce,he[ie].data);for(let Ae=0;Ae<pe.length;Ae++){let dt=pe[Ae].image[ie].image;U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,dt.width,dt.height,Te,Ce,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Oe,dt.width,dt.height,0,Te,Ce,dt.data)}}else{U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te,Ce,he[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,Te,Ce,he[ie]);for(let Ae=0;Ae<pe.length;Ae++){let Me=pe[Ae];U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,Te,Ce,Me.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Oe,Te,Ce,Me.image[ie])}}}p(x)&&b(i.TEXTURE_CUBE_MAP),ne.__version=Z.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function ge(P,x,k,V,Z,ne){let re=r.convert(k.format,k.colorSpace),K=r.convert(k.type),Q=_(k.internalFormat,re,K,k.normalized,k.colorSpace),ae=n.get(x),Ee=n.get(k);if(Ee.__renderTarget=x,!ae.__hasExternalTextures){let he=Math.max(1,x.width>>ne),oe=Math.max(1,x.height>>ne);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ne,Q,he,oe,x.depth,0,re,K,null):t.texImage2D(Z,ne,Q,he,oe,0,re,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Ee.__webglTexture,0,bt(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Ee.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(P,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),x.depthBuffer){let V=x.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ne=v(x.stencilBuffer,Z),re=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(x),ne,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,P)}else{let V=x.textures;for(let Z=0;Z<V.length;Z++){let ne=V[Z],re=r.convert(ne.format,ne.colorSpace),K=r.convert(ne.type),Q=_(ne.internalFormat,re,K,ne.normalized,ne.colorSpace);Tt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(x),Q,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(P,x,k){let V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,x.depthTexture);let ae=r.convert(x.depthTexture.format),Ee=r.convert(x.depthTexture.type),he;x.depthTexture.format===Yi?he=i.DEPTH_COMPONENT24:x.depthTexture.format===Yn&&(he=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,he,x.width,x.height,0,ae,Ee,null)}}else ee(x.depthTexture,0);let ne=Z.__webglTexture,re=bt(x),K=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Q=x.depthTexture.format===Yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Yi)Tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,ne,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,ne,0);else if(x.depthTexture.format===Yn)Tt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,ne,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(P){let x=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let V=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=V}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)Dt(x.__webglFramebuffer[V],P,V);else{let V=P.texture.mipmaps;V&&V.length>0?Dt(x.__webglFramebuffer[0],P,0):Dt(x.__webglFramebuffer,P,0)}else if(k){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=i.createRenderbuffer(),He(x.__webglDepthbuffer[V],P,!1);else{let Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ne)}}else{let V=P.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),He(x.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(P,x,k){let V=n.get(P);x!==void 0&&ge(V.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ge(P)}function ut(P){let x=P.texture,k=n.get(P),V=n.get(x);P.addEventListener("dispose",y);let Z=P.textures,ne=P.isWebGLCubeRenderTarget===!0,re=Z.length>1;if(re||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=x.version,a.memory.textures++),ne){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let Q=0;Q<x.mipmaps.length;Q++)k.__webglFramebuffer[K][Q]=i.createFramebuffer()}else k.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)k.__webglFramebuffer[K]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(re)for(let K=0,Q=Z.length;K<Q;K++){let ae=n.get(Z[K]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Tt(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let Q=Z[K];k.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let ae=r.convert(Q.format,Q.colorSpace),Ee=r.convert(Q.type),he=_(Q.internalFormat,ae,Ee,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),oe=bt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,he,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,k.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),He(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)ge(k.__webglFramebuffer[K][Q],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else ge(k.__webglFramebuffer[K],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let K=0,Q=Z.length;K<Q;K++){let ae=Z[K],Ee=n.get(ae),he=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Ee.__webglTexture),Ie(he,ae),ge(k.__webglFramebuffer,P,ae,i.COLOR_ATTACHMENT0+K,he,0),p(ae)&&b(he)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,V.__webglTexture),Ie(K,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)ge(k.__webglFramebuffer[Q],P,x,i.COLOR_ATTACHMENT0,K,Q);else ge(k.__webglFramebuffer,P,x,i.COLOR_ATTACHMENT0,K,0);p(x)&&b(K),t.unbindTexture()}P.depthBuffer&&Ge(P)}function Xe(P){let x=P.textures;for(let k=0,V=x.length;k<V;k++){let Z=x[k];if(p(Z)){let ne=A(P),re=n.get(Z).__webglTexture;t.bindTexture(ne,re),b(ne),t.unbindTexture()}}}let xt=[],Ot=[];function si(P){if(P.samples>0){if(Tt(P)===!1){let x=P.textures,k=P.width,V=P.height,Z=i.COLOR_BUFFER_BIT,ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(P),K=x.length>1;if(K)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let Q=P.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Ee=n.get(x[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,k,V,0,0,k,V,Z,i.NEAREST),c===!0&&(xt.length=0,Ot.length=0,xt.push(i.COLOR_ATTACHMENT0+ae),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(xt.push(ne),Ot.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Ee=n.get(x[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let x=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function bt(P){return Math.min(s.maxSamples,P.samples)}function Tt(P){let x=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(P){let x=a.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function Wt(P,x){let k=P.colorSpace,V=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Ur&&k!==xn&&(Ye.getTransfer(k)===it?(V!==mt||Z!==ot)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",k)),x}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=$e,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=si,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pb(i,e){function t(n,s=xn){let r,a=Ye.getTransfer(s);if(n===ot)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===Hh)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Lt)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===Wh)return i.ALPHA;if(n===Xh)return i.RGB;if(n===mt)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===Yn)return i.DEPTH_STENCIL;if(n===qi)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===$r||n===Jr||n===Qr||n===ea)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===ta||n===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pl)return r.COMPRESSED_R11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_l||n===yl||n===xl||n===vl||n===Sl||n===bl||n===Ml||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Ll||n===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===Ul||n===ia||n===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mb=`
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

}`,du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yi({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Oi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,S=typeof XRWebGLBinding<"u",m=new du,p={},b=t.getContextAttributes(),A=null,_=null,v=[],M=[],T=new Le,y=null,w=null,R=new kt;R.viewport=new Be;let C=new kt;C.viewport=new Be;let L=[R,C],O=new $o,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=v[q];return te===void 0&&(te=new $s,v[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=v[q];return te===void 0&&(te=new $s,v[q]=te),te.getGripSpace()},this.getHand=function(q){let te=v[q];return te===void 0&&(te=new $s,v[q]=te),te.getHandSpace()};function Y(q){let te=M.indexOf(q.inputSource);if(te===-1)return;let ye=v[te];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||a),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ee);for(let q=0;q<v.length;q++){let te=M[q];te!==null&&(M[q]=null,v[q].disconnect(te))}D=null,B=null,m.reset();for(let q in p)delete p[q];if(e.setRenderTarget(A),f=null,u=null,d=null,s=null,_=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ue=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?Yn:Yi,Ue=b.stencil?sr:ki);let He={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new It(u.textureWidth,u.textureHeight,{format:mt,type:ot,depthTexture:new Fn(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new It(f.framebufferWidth,f.framebufferHeight,{format:mt,type:ot,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(q){for(let te=0;te<q.removed.length;te++){let ye=q.removed[te],Ue=M.indexOf(ye);Ue>=0&&(M[Ue]=null,v[Ue].disconnect(ye))}for(let te=0;te<q.added.length;te++){let ye=q.added[te],Ue=M.indexOf(ye);if(Ue===-1){for(let He=0;He<v.length;He++)if(He>=M.length){M.push(ye),Ue=He;break}else if(M[He]===null){M[He]=ye,Ue=He;break}if(Ue===-1)break}let ge=v[Ue];ge&&ge.connect(ye)}}let G=new I,j=new I;function J(q,te,ye){G.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);let Ue=G.distanceTo(j),ge=te.projectionMatrix.elements,He=ye.projectionMatrix.elements,Dt=ge[14]/(ge[10]-1),Ge=ge[14]/(ge[10]+1),$e=(ge[9]+1)/ge[5],ut=(ge[9]-1)/ge[5],Xe=(ge[8]-1)/ge[0],xt=(He[8]+1)/He[0],Ot=Dt*Xe,si=Dt*xt,bt=Ue/(-Xe+xt),Tt=bt*-Xe;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Tt),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let F=Dt+bt,Wt=Ge+bt,st=Ot-Tt,P=si+(Ue-Tt),x=$e*Ge/Wt*F,k=ut*Ge/Wt*F;q.projectionMatrix.makePerspective(st,P,x,k,F,Wt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function xe(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,ye=q.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),O.near=C.near=R.near=te,O.far=C.far=R.far=ye,(D!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=q.layers.mask|6,R.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;let Ue=q.parent,ge=O.cameras;xe(O,Ue);for(let He=0;He<ge.length;He++)xe(ge[He],Ue);ge.length===2?J(O,R,C):O.projectionMatrix.copy(R.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),be(q,O,Ue)};function be(q,te,ye){ye===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return p[q]};let Ne=null;function Ie(q,te){if(h=te.getViewerPose(l||a),g=te,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ue=!1;ye.length!==O.cameras.length&&(O.cameras.length=0,Ue=!0);for(let Ge=0;Ge<ye.length;Ge++){let $e=ye[Ge],ut=null;if(f!==null)ut=f.getViewport($e);else{let xt=d.getViewSubImage(u,$e);ut=xt.viewport,Ge===0&&(e.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(_))}let Xe=L[Ge];Xe===void 0&&(Xe=new kt,Xe.layers.enable(Ge),Xe.viewport=new Be,L[Ge]=Xe),Xe.matrix.fromArray($e.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray($e.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ut.x,ut.y,ut.width,ut.height),Ge===0&&(O.matrix.copy(Xe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ue===!0&&O.cameras.push(Xe)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Ge=d.getDepthInformation(ye[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(ge&&ge.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Ge=0;Ge<ye.length;Ge++){let $e=ye[Ge].camera;if($e){let ut=p[$e];ut||(ut=new Xr,p[$e]=ut);let Xe=d.getCameraImage($e);ut.sourceTexture=Xe}}}}for(let ye=0;ye<v.length;ye++){let Ue=M[ye],ge=v[ye];Ue!==null&&ge!==void 0&&ge.update(Ue,te,l||a)}Ne&&Ne(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let je=new _p;je.setAnimationLoop(Ie),this.setAnimationLoop=function(q){Ne=q},this.dispose=function(){}}},_b=new Ke,Mp=new De;Mp.set(-1,0,0,0,1,0,0,0,1);function yb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ei&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ei&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),A=b.envMap,_=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(_)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ei&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xb(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let M=v.program;n.uniformBlockBinding(_,M)}function l(_,v){let M=s[_.id];M===void 0&&(m(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",b));let T=v.program;n.updateUBOMapping(_,T);let y=e.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let v=d();_.__bindingPointIndex=v;let M=i.createBuffer(),T=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let v=s[_.id],M=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let y=0,w=M.length;y<w;y++){let R=M[y];if(Array.isArray(R))for(let C=0,L=R.length;C<L;C++)f(R[C],y,C,T);else f(R,y,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,M,T){if(S(_,v,M,T)===!0){let y=_.__offset,w=_.value;if(Array.isArray(w)){let R=0;for(let C=0;C<w.length;C++){let L=w[C],O=p(L);g(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,v,M){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,M)}function S(_,v,M,T){let y=_.value,w=v+"_"+M;if(T[w]===void 0)return typeof y=="number"||typeof y=="boolean"?T[w]=y:ArrayBuffer.isView(y)?T[w]=y.slice():T[w]=y.clone(),!0;{let R=T[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return T[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(_){let v=_.uniforms,M=0,T=16;for(let w=0,R=v.length;w<R;w++){let C=Array.isArray(v[w])?v[w]:[v[w]];for(let L=0,O=C.length;L<O;L++){let D=C[L],B=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,W=B.length;Y<W;Y++){let ee=B[Y],G=p(ee),j=M%T,J=j%G.boundary,xe=j+J;M+=J,xe!==0&&T-xe<G.storage&&(M+=T-xe),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=G.storage}}}let y=M%T;return y>0&&(M+=T-y),_.__size=M,_.__cache={},this}function p(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",_),v}function b(_){let v=_.target;v.removeEventListener("dispose",b);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function A(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var vb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function Sb(){return Ki===null&&(Ki=new mn(vb,16,16,Zi,Zt),Ki.name="DFG_LUT",Ki.minFilter=Je,Ki.magFilter=Je,Ki.wrapS=Xi,Ki.wrapT=Xi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Gl=class{constructor(e={}){let{canvas:t=Vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ot}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let S=f,m=new Set([al,rl,sl]),p=new Set([ot,ki,nr,sr,il,nl]),b=new Uint32Array(4),A=new Int32Array(4),_=new I,v=null,M=null,T=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,L=null,O=null,D=null,B=null;this._outputColorSpace=pi;let Y=0,W=0,ee=null,G=-1,j=null,J=new Be,xe=new Be,be=null,Ne=new Fe(0),Ie=0,je=t.width,q=t.height,te=1,ye=null,Ue=null,ge=new Be(0,0,je,q),He=new Be(0,0,je,q),Dt=!1,Ge=new Vr,$e=!1,ut=!1,Xe=new Ke,xt=new I,Ot=new Be,si={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Tt(){return ee===null?te:1}let F=n;function Wt(E,N){return t.getContext(E,N)}let st,P,x,k,V,Z,ne,re,K,Q,ae,Ee,he,oe,Te,Ce,Oe,U,le,$,ce,pe,ie;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Li,!1),F===null){let N="webgl2";if(F=Wt(N,E),F===null)throw Wt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(E){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),Pe("WebGLRenderer: "+E.message),E}function Ae(){st=new Rv(F),st.init(),ce=new pb(F,st),P=new yv(F,st,e,ce),x=new db(F,st),P.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),k=new Pv(F),V=new JS,Z=new fb(F,st,x,V,P,ce,k),ne=new Av(R),re=new D_(F),pe=new gv(F,re),K=new Cv(F,re,k,pe),Q=new Dv(F,K,re,pe,k),U=new Lv(F,P,Z),Te=new xv(V),ae=new $S(R,ne,st,P,pe,Te),Ee=new yb(R,V),he=new eb,oe=new ab(st),Oe=new mv(R,ne,x,Q,g,c),Ce=new ub(R,Q,P),ie=new xb(F,k,P,x),le=new _v(F,st,k),$=new Iv(F,st,k),k.programs=ae.programs,R.capabilities=P,R.extensions=st,R.properties=V,R.renderLists=he,R.shadowMap=Ce,R.state=x,R.info=k}S!==ot&&(w=new Uv(S,t.width,t.height,o,s,r));let Me=new fu(R,F);this.xr=Me,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(je,q,!1))},this.getSize=function(E){return E.set(je,q)},this.setSize=function(E,N,X=!0){if(Me.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}je=E,q=N,t.width=Math.floor(E*te),t.height=Math.floor(N*te),X===!0&&(t.style.width=E+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(je*te,q*te).floor()},this.setDrawingBufferSize=function(E,N,X){je=E,q=N,te=X,t.width=Math.floor(E*X),t.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(S===ot){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,N,X,z){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,N,X,z),x.viewport(J.copy(ge).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(He)},this.setScissor=function(E,N,X,z){E.isVector4?He.set(E.x,E.y,E.z,E.w):He.set(E,N,X,z),x.scissor(xe.copy(He).multiplyScalar(te).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){x.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){ye=E},this.setTransparentSort=function(E){Ue=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,X=!0){let z=0;if(E){let H=!1;if(ee!==null){let fe=ee.texture.format;H=m.has(fe)}if(H){let fe=ee.texture.type,_e=p.has(fe),de=Oe.getClearColor(),ve=Oe.getClearAlpha(),we=de.r,ke=de.g,We=de.b;_e?(b[0]=we,b[1]=ke,b[2]=We,b[3]=ve,F.clearBufferuiv(F.COLOR,0,b)):(A[0]=we,A[1]=ke,A[2]=We,A[3]=ve,F.clearBufferiv(F.COLOR,0,A))}else z|=F.COLOR_BUFFER_BIT}N&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),Oe.dispose(),he.dispose(),oe.dispose(),V.dispose(),ne.dispose(),Q.dispose(),pe.dispose(),ie.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",wd),Me.removeEventListener("sessionend",Ed),ts.stop()};function dt(E){E.preventDefault(),qh("WebGLRenderer: Context Lost."),C=!0}function et(){qh("WebGLRenderer: Context Restored."),C=!1;let E=k.autoReset,N=Ce.enabled,X=Ce.autoUpdate,z=Ce.needsUpdate,H=Ce.type;Ae(),k.autoReset=E,Ce.enabled=N,Ce.autoUpdate=X,Ce.needsUpdate=z,Ce.type=H}function Li(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Vi(E){let N=E.target;N.removeEventListener("dispose",Vi),Cg(N)}function Cg(E){Ig(E),V.remove(E)}function Ig(E){let N=V.get(E).programs;N!==void 0&&(N.forEach(function(X){ae.releaseProgram(X)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,z,H,fe){N===null&&(N=si);let _e=H.isMesh&&H.matrixWorld.determinantAffine()<0,de=Dg(E,N,X,z,H);x.setMaterial(z,_e);let ve=X.index,we=1;if(z.wireframe===!0){if(ve=K.getWireframeAttribute(X),ve===void 0)return;we=2}let ke=X.drawRange,We=X.attributes.position,Se=ke.start*we,tt=(ke.start+ke.count)*we;fe!==null&&(Se=Math.max(Se,fe.start*we),tt=Math.min(tt,(fe.start+fe.count)*we)),ve!==null?(Se=Math.max(Se,0),tt=Math.min(tt,ve.count)):We!=null&&(Se=Math.max(Se,0),tt=Math.min(tt,We.count));let At=tt-Se;if(At<0||At===1/0)return;pe.setup(H,z,de,X,ve);let gt,lt=le;if(ve!==null&&(gt=re.get(ve),lt=$,lt.setIndex(gt)),H.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*Tt()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(H.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),x.setLineWidth(Xt*Tt()),H.isLineSegments?lt.setMode(F.LINES):H.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else H.isPoints?lt.setMode(F.POINTS):H.isSprite&&lt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(st.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Xt=H._multiDrawStarts,me=H._multiDrawCounts,jt=H._multiDrawCount,Ze=ve?re.get(ve).bytesPerElement:1,Ei=V.get(z).currentProgram.getUniforms();for(let Gi=0;Gi<jt;Gi++)Ei.setValue(F,"_gl_DrawID",Gi),lt.render(Xt[Gi]/Ze,me[Gi])}else if(H.isInstancedMesh)lt.renderInstances(Se,At,H.count);else if(X.isInstancedBufferGeometry){let Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,me=Math.min(X.instanceCount,Xt);lt.renderInstances(Se,At,me)}else lt.render(Se,At)};function Md(E,N,X,z){L!==null&&E.isNodeMaterial&&L.setObject(z,E),$e===!0&&Te.setState(E,X,!1),E.transparent===!0&&E.side===li&&E.forceSinglePass===!1?(E.side=ei,E.needsUpdate=!0,ja(E,N,z),E.side=Gn,E.needsUpdate=!0,ja(E,N,z),E.side=li):ja(E,N,z)}this.compile=function(E,N,X=null){X===null&&(X=E),L!==null&&L.renderStart(E,N,X),M=oe.get(X),M.init(N),y.push(M),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),ut=this.localClippingEnabled,$e=Te.init(this.clippingPlanes,ut),$e===!0&&Te.setGlobalState(this.clippingPlanes,N),L!==null&&Ce.render(M.state.shadowsArray,X,N);let z=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let fe=H.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){let de=fe[_e];Md(de,X,N,H),z.add(de)}else Md(fe,X,N,H),z.add(fe)}),M=y.pop(),L!==null&&L.renderEnd(),z},this.compileAsync=function(E,N,X=null){let z=this.compile(E,N,X);return new Promise(H=>{function fe(){if(z.forEach(function(_e){let ve=V.get(_e).currentProgram;(ve===void 0||ve.isReady())&&z.delete(_e)}),z.size===0){H(E);return}setTimeout(fe,10)}st.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Zc=null;function Pg(E){Zc&&Zc(E)}function wd(){ts.stop()}function Ed(){ts.start()}let ts=new _p;ts.setAnimationLoop(Pg),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(E){Zc=E,Me.setAnimationLoop(E),E===null?ts.stop():ts.start()},Me.addEventListener("sessionstart",wd),Me.addEventListener("sessionend",Ed),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(E,N);let X=Me.enabled===!0&&Me.isPresenting===!0,z=w!==null&&(ee===null||X)&&w.begin(R,ee);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(N),N=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,N,ee),M=oe.get(E,y.length),M.init(N),M.state.textureUnits=Z.getTextureUnits(),y.push(M),Xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ge.setFromProjectionMatrix(Xe,Fi,N.reversedDepth),ut=this.localClippingEnabled,$e=Te.init(this.clippingPlanes,ut),v=he.get(E,T.length),v.init(),T.push(v),Me.enabled===!0&&Me.isPresenting===!0){let _e=R.xr.getDepthSensingMesh();_e!==null&&Kc(_e,N,-1/0,R.sortObjects)}Kc(E,N,0,R.sortObjects),v.finish(),L!==null&&L.updateLights(M.state.lightsArray),R.sortObjects===!0&&v.sort(ye,Ue),bt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,bt&&Oe.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Te.beginShadows();let H=M.state.shadowsArray;if(Ce.render(H,E,N),$e===!0&&Te.endShadows(),(z&&w.hasRenderPass())===!1){let _e=v.opaque,de=v.transmissive;if(M.setupLights(),N.isArrayCamera){let ve=N.cameras;if(de.length>0)for(let we=0,ke=ve.length;we<ke;we++){let We=ve[we];Ad(_e,de,E,We)}bt&&Oe.render(E);for(let we=0,ke=ve.length;we<ke;we++){let We=ve[we];Td(v,E,We,We.viewport)}}else de.length>0&&Ad(_e,de,E,N),bt&&Oe.render(E),Td(v,E,N)}ee!==null&&W===0&&(Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee)),z&&w.end(R),E.isScene===!0&&E.onAfterRender(R,E,N),pe.resetDefaultState(),G=-1,j=null,y.pop(),y.length>0?(M=y[y.length-1],Z.setTextureUnits(M.state.textureUnits),$e===!0&&Te.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,L!==null&&L.renderEnd()};function Kc(E,N,X,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Ge)){z&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Xe);let _e=Q.update(E),de=E.material;de.visible&&v.push(E,_e,de,X,Ot.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Ge))){let _e=Q.update(E),de=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ot.copy(_e.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Xe)),Array.isArray(de)){let ve=_e.groups;for(let we=0,ke=ve.length;we<ke;we++){let We=ve[we],Se=de[We.materialIndex];Se&&Se.visible&&v.push(E,_e,Se,X,Ot.z,We,N)}}else de.visible&&v.push(E,_e,de,X,Ot.z,null,N)}}let fe=E.children;for(let _e=0,de=fe.length;_e<de;_e++)Kc(fe[_e],N,X,z)}function Td(E,N,X,z){let{opaque:H,transmissive:fe,transparent:_e}=E;M.setupLightsView(X),$e===!0&&Te.setGlobalState(R.clippingPlanes,X),z&&x.viewport(J.copy(z)),H.length>0&&Ka(H,N,X),fe.length>0&&Ka(fe,N,X),_e.length>0&&Ka(_e,N,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ad(E,N,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[z.id]===void 0){let Se=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[z.id]=new It(1,1,{generateMipmaps:!0,type:Se?Zt:ot,minFilter:Xn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let fe=M.state.transmissionRenderTarget[z.id],_e=z.viewport||J;fe.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),ve=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(Ne),Ie=R.getClearAlpha(),Ie<1&&R.setClearColor(16777215,.5),R.clear(),bt&&Oe.render(X);let ke=R.toneMapping;R.toneMapping=Bi;let We=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),M.setupLightsView(z),$e===!0&&Te.setGlobalState(R.clippingPlanes,z),Ka(E,X,z),Z.updateMultisampleRenderTarget(fe),Z.updateRenderTargetMipmap(fe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let tt=0,At=N.length;tt<At;tt++){let gt=N[tt],{object:lt,geometry:Xt,material:me,group:jt}=gt;if(me.side===li&&lt.layers.test(z.layers)){let Ze=me.side;me.side=ei,me.needsUpdate=!0,Rd(lt,X,z,Xt,me,jt),me.side=Ze,me.needsUpdate=!0,Se=!0}}Se===!0&&(Z.updateMultisampleRenderTarget(fe),Z.updateRenderTargetMipmap(fe))}R.setRenderTarget(de,ve,we),R.setClearColor(Ne,Ie),We!==void 0&&(z.viewport=We),R.toneMapping=ke}function Ka(E,N,X){let z=N.isScene===!0?N.overrideMaterial:null;for(let H=0,fe=E.length;H<fe;H++){let _e=E[H],{object:de,geometry:ve,group:we}=_e,ke=_e.material;ke.allowOverride===!0&&z!==null&&(ke=z),de.layers.test(X.layers)&&Rd(de,N,X,ve,ke,we)}}function Rd(E,N,X,z,H,fe){L!==null&&H.isNodeMaterial&&L.setObject(E,H),E.onBeforeRender(R,N,X,z,H,fe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(R,N,X,z,E,fe),H.transparent===!0&&H.side===li&&H.forceSinglePass===!1?(H.side=ei,H.needsUpdate=!0,R.renderBufferDirect(X,N,z,H,E,fe),H.side=Gn,H.needsUpdate=!0,R.renderBufferDirect(X,N,z,H,E,fe),H.side=li):R.renderBufferDirect(X,N,z,H,E,fe),E.onAfterRender(R,N,X,z,H,fe)}function ja(E,N,X){N.isScene!==!0&&(N=si);let z=V.get(E),H=M.state.lights,fe=M.state.shadowsArray,_e=H.state.version,de=ae.getParameters(E,H.state,fe,N,X,M.state.lightProbeGridArray),ve=ae.getProgramCacheKey(de),we=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=ne.get(E.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Vi),we=new Map,z.programs=we);let We=we.get(ve);if(We!==void 0){if(z.currentProgram===We&&z.lightsStateVersion===_e)return Id(E,de),We}else de.uniforms=ae.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,X,de),E.onBeforeCompile(de,R),We=ae.acquireProgram(de,ve),we.set(ve,We),z.uniforms=de.uniforms;let Se=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=Te.uniform),Id(E,de),z.needsLights=Ug(E),z.lightsStateVersion=_e,z.needsLights&&(Se.ambientLightColor.value=H.state.ambient,Se.lightProbe.value=H.state.probe,Se.sunLights.value=H.state.sun,Se.sunLightShadows.value=H.state.sunShadow,Se.directionalLights.value=H.state.directional,Se.directionalLightShadows.value=H.state.directionalShadow,Se.spotLights.value=H.state.spot,Se.spotLightShadows.value=H.state.spotShadow,Se.rectAreaLights.value=H.state.rectArea,Se.ltc_1.value=H.state.rectAreaLTC1,Se.ltc_2.value=H.state.rectAreaLTC2,Se.pointLights.value=H.state.point,Se.pointLightShadows.value=H.state.pointShadow,Se.hemisphereLights.value=H.state.hemi,Se.sunShadowMatrix.value=H.state.sunShadowMatrix,Se.sunShadowCascade.value=H.state.sunShadowCascade,Se.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Se.spotLightMatrix.value=H.state.spotLightMatrix,Se.spotLightMap.value=H.state.spotLightMap,Se.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=M.state.lightProbeGridArray.length>0,z.currentProgram=We,z.uniformsList=null,We}function Cd(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=lr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Id(E,N){let X=V.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Lg(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let X=0,z=E.length;X<z;X++){let H=E[X];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function Dg(E,N,X,z,H){N.isScene!==!0&&(N=si),Z.resetTextureUnits();let fe=N.fog,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,de=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ye.workingColorSpace,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=ne.get(z.envMap||_e,ve),ke=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,At=!!X.morphAttributes.color,gt=Bi;z.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(gt=R.toneMapping);let lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Xt=lt!==void 0?lt.length:0,me=V.get(z),jt=M.state.lights;if($e===!0&&(ut===!0||E!==j)){let ft=E===j&&z.id===G;Te.setState(z,E,ft)}let Ze=!1;z.version===me.__version?(me.needsLights&&me.lightsStateVersion!==jt.state.version||me.outputColorSpace!==de||H.isBatchedMesh&&me.batching===!1||!H.isBatchedMesh&&me.batching===!0||H.isBatchedMesh&&me.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&me.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&me.instancing===!1||!H.isInstancedMesh&&me.instancing===!0||H.isSkinnedMesh&&me.skinning===!1||!H.isSkinnedMesh&&me.skinning===!0||H.isInstancedMesh&&me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&me.instancingMorph===!1&&H.morphTexture!==null||me.envMap!==we||z.fog===!0&&me.fog!==fe||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Te.numPlanes||me.numIntersection!==Te.numIntersection)||me.vertexAlphas!==ke||me.vertexTangents!==We||me.morphTargets!==Se||me.morphNormals!==tt||me.morphColors!==At||me.toneMapping!==gt||me.morphTargetsCount!==Xt||!!me.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,me.__version=z.version);let Ei=me.currentProgram;Ze===!0&&(Ei=ja(z,N,H),L&&z.isNodeMaterial&&L.onUpdateProgram(z,Ei,me));let Gi=!1,En=!1,Cs=!1,at=Ei.getUniforms(),Et=me.uniforms;if(x.useProgram(Ei.program)&&(Gi=!0,En=!0,Cs=!0),z.id!==G&&(G=z.id,En=!0),me.needsLights){let ft=Lg(M.state.lightProbeGridArray,H);me.lightProbeGrid!==ft&&(me.lightProbeGrid=ft,En=!0)}if(Gi||j!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(F,"projectionMatrix",E.projectionMatrix),at.setValue(F,"viewMatrix",E.matrixWorldInverse);let An=at.map.cameraPosition;An!==void 0&&An.setValue(F,xt.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&at.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,En=!0,Cs=!0)}if(me.needsLights&&(jt.state.sunShadowMap.length>0&&at.setValue(F,"sunShadowMap",jt.state.sunShadowMap,Z),jt.state.directionalShadowMap.length>0&&at.setValue(F,"directionalShadowMap",jt.state.directionalShadowMap,Z),jt.state.spotShadowMap.length>0&&at.setValue(F,"spotShadowMap",jt.state.spotShadowMap,Z),jt.state.pointShadowMap.length>0&&at.setValue(F,"pointShadowMap",jt.state.pointShadowMap,Z)),H.isSkinnedMesh){at.setOptional(F,H,"bindMatrix"),at.setOptional(F,H,"bindMatrixInverse");let ft=H.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(F,"boneTexture",ft.boneTexture,Z))}H.isBatchedMesh&&(at.setOptional(F,H,"batchingTexture"),at.setValue(F,"batchingTexture",H._matricesTexture,Z),at.setOptional(F,H,"batchingIdTexture"),at.setValue(F,"batchingIdTexture",H._indirectTexture,Z),at.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&at.setValue(F,"batchingColorTexture",H._colorsTexture,Z));let Tn=X.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&U.update(H,X,Ei),(En||me.receiveShadow!==H.receiveShadow)&&(me.receiveShadow=H.receiveShadow,at.setValue(F,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Et.envMapIntensity.value=N.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Sb()),En){if(at.setValue(F,"toneMappingExposure",R.toneMappingExposure),me.needsLights&&Ng(Et,Cs),fe&&z.fog===!0&&Ee.refreshFogUniforms(Et,fe),Ee.refreshMaterialUniforms(Et,z,te,q,M.state.transmissionRenderTarget[E.id]),me.needsLights&&me.lightProbeGrid){let ft=me.lightProbeGrid;Et.probesSH.value=ft.texture,Et.probesMin.value.copy(ft.boundingBox.min),Et.probesMax.value.copy(ft.boundingBox.max),Et.probesResolution.value.copy(ft.resolution)}lr.upload(F,Cd(me),Et,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(lr.upload(F,Cd(me),Et,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(F,"center",H.center),at.setValue(F,"modelViewMatrix",H.modelViewMatrix),at.setValue(F,"normalMatrix",H.normalMatrix),at.setValue(F,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let ft=z.uniformsGroups;for(let An=0,Is=ft.length;An<Is;An++){let Ld=ft[An];ie.update(Ld,Ei),ie.bind(Ld,Ei)}}return Ei}function Ng(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ug(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(E,N,X){let z=V.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=N,V.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let X=V.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){ee=E,Y=N,W=X;let z=null,H=!1,fe=!1;if(E){let de=V.get(E);if(de.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,de.__webglFramebuffer),J.copy(E.viewport),xe.copy(E.scissor),be=E.scissorTest,x.viewport(J),x.scissor(xe),x.setScissorTest(be),G=-1;return}else if(de.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(de.__hasExternalTextures)Z.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ke=E.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&V.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let we=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[N])?z=we[N][X]:z=we[N],H=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?z=V.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[X]:z=we,J.copy(E.viewport),xe.copy(E.scissor),be=E.scissorTest}else J.copy(ge).multiplyScalar(te).floor(),xe.copy(He).multiplyScalar(te).floor(),be=Dt;if(X!==0&&(z=O),x.bindFramebuffer(F.FRAMEBUFFER,z)&&x.drawBuffers(E,z),x.viewport(J),x.scissor(xe),x.setScissorTest(be),H){let de=V.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,X)}else if(fe){let de=N;for(let ve=0;ve<E.textures.length;ve++){let we=V.get(E.textures[ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ve,we.__webglTexture,X,de)}}else if(E!==null&&X!==0){let de=V.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,X)}G=-1};function Pd(E){let N=V.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=P.textureFormatReadable(E.format),N.__typeReadable=P.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,X,z,H,fe,_e,de=0){if(!(E&&E.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){x.bindFramebuffer(F.FRAMEBUFFER,ve);try{let we=E.textures[de],ke=we.format,We=we.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de);let Se=Pd(we);if(Se.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&X>=0&&X<=E.height-H&&F.readPixels(N,X,z,H,ce.convert(ke),ce.convert(We),fe)}finally{let we=ee!==null?V.get(ee).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,N,X,z,H,fe,_e,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(N>=0&&N<=E.width-z&&X>=0&&X<=E.height-H){x.bindFramebuffer(F.FRAMEBUFFER,ve);let we=E.textures[de],ke=we.format,We=we.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de);let Se=Pd(we);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.bufferData(F.PIXEL_PACK_BUFFER,fe.byteLength,F.STREAM_READ),F.readPixels(N,X,z,H,ce.convert(ke),ce.convert(We),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let At=ee!==null?V.get(ee).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,At);let gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Wf(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,fe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(tt),F.deleteSync(gt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,X=0){let z=Math.pow(2,-X),H=Math.floor(E.image.width*z),fe=Math.floor(E.image.height*z),_e=N!==null?N.x:0,de=N!==null?N.y:0;Z.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,_e,de,H,fe),x.unbindTexture()},this.copyTextureToTexture=function(E,N,X=null,z=null,H=0,fe=0){let _e,de,ve,we,ke,We,Se,tt,At,gt=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(X!==null)_e=X.max.x-X.min.x,de=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,ke=X.min.y,We=X.isBox3?X.min.z:0;else{let Et=Math.pow(2,-H);_e=Math.floor(gt.width*Et),de=Math.floor(gt.height*Et),E.isDataArrayTexture?ve=gt.depth:E.isData3DTexture?ve=Math.floor(gt.depth*Et):ve=1,we=0,ke=0,We=0}z!==null?(Se=z.x,tt=z.y,At=z.z):(Se=0,tt=0,At=0);let lt=ce.convert(N.format),Xt=ce.convert(N.type),me;N.isData3DTexture?(Z.setTexture3D(N,0),me=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),me=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),me=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let jt=x.getParameter(F.UNPACK_ROW_LENGTH),Ze=x.getParameter(F.UNPACK_IMAGE_HEIGHT),Ei=x.getParameter(F.UNPACK_SKIP_PIXELS),Gi=x.getParameter(F.UNPACK_SKIP_ROWS),En=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,we),x.pixelStorei(F.UNPACK_SKIP_ROWS,ke),x.pixelStorei(F.UNPACK_SKIP_IMAGES,We);let Cs=E.isDataArrayTexture||E.isData3DTexture,at=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let Et=V.get(E),Tn=V.get(N),ft=V.get(Et.__renderTarget),An=V.get(Tn.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,ft.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Is=0;Is<ve;Is++)Cs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(E).__webglTexture,H,We+Is),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(N).__webglTexture,fe,At+Is)),F.blitFramebuffer(we,ke,_e,de,Se,tt,_e,de,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||V.has(E)){let Et=V.get(E),Tn=V.get(N);x.bindFramebuffer(F.READ_FRAMEBUFFER,D),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let ft=0;ft<ve;ft++)Cs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.__webglTexture,H,We+ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Et.__webglTexture,H),at?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tn.__webglTexture,fe,At+ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tn.__webglTexture,fe),H!==0?F.blitFramebuffer(we,ke,_e,de,Se,tt,_e,de,F.COLOR_BUFFER_BIT,F.NEAREST):at?F.copyTexSubImage3D(me,fe,Se,tt,At+ft,we,ke,_e,de):F.copyTexSubImage2D(me,fe,Se,tt,we,ke,_e,de);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(me,fe,Se,tt,At,_e,de,ve,lt,Xt,gt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(me,fe,Se,tt,At,_e,de,ve,lt,gt.data):F.texSubImage3D(me,fe,Se,tt,At,_e,de,ve,lt,Xt,gt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,fe,Se,tt,_e,de,lt,Xt,gt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,fe,Se,tt,gt.width,gt.height,lt,gt.data):F.texSubImage2D(F.TEXTURE_2D,fe,Se,tt,_e,de,lt,Xt,gt);x.pixelStorei(F.UNPACK_ROW_LENGTH,jt),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ze),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Ei),x.pixelStorei(F.UNPACK_SKIP_ROWS,Gi),x.pixelStorei(F.UNPACK_SKIP_IMAGES,En),fe===0&&N.generateMipmaps&&F.generateMipmap(me),x.unbindTexture()},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){Y=0,W=0,ee=null,x.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var wp={type:"change"},mu={type:"start"},Tp={type:"end"},Yl=new pn,Ep=new mi,bb=Math.cos(70*na.DEG2RAD),Ft=new I,ci=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pu=1e-6,ql=class extends ls{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ct,this._lastTargetPosition=new I,this._quat=new ct().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new er,this._sphericalDelta=new er,this._scale=1,this._panOffset=new I,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new I,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wb.bind(this),this._onPointerDown=Mb.bind(this),this._onPointerUp=Eb.bind(this),this._onContextMenu=Lb.bind(this),this._onMouseWheel=Rb.bind(this),this._onKeyDown=Cb.bind(this),this._onTouchStart=Ib.bind(this),this._onTouchMove=Pb.bind(this),this._onMouseDown=Tb.bind(this),this._onMouseMove=Ab.bind(this),this._interceptControlDown=Db.bind(this),this._interceptControlUp=Nb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wp),this.update(),this.state=rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ci:n>Math.PI&&(n-=ci),s<-Math.PI?s+=ci:s>Math.PI&&(s-=ci),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ft.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yl.origin.copy(this.object.position),Yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yl.direction))<bb?this.object.lookAt(this.target):(Ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yl.intersectPlane(Ep,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pu||this._lastTargetPosition.distanceToSquared(this.target)>pu?(this.dispatchEvent(wp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ci/60*this.autoRotateSpeed*e:ci/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Mb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Eb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tp),this.state=rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Tb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=rt.DOLLY;break;case Qt.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}break;case Qt.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(mu)}function Ab(i){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Rb(i){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(i.preventDefault(),this.dispatchEvent(mu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tp))}function Cb(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ib(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=rt.TOUCH_ROTATE;break;case Vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=rt.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(mu)}function Pb(i){switch(this._trackPointer(i),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=rt.NONE}}function Lb(i){this.enabled!==!1&&i.preventDefault()}function Db(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var fs=new Hn,wt=new I,qn=new I,vt=new ct,Ap={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},gu={type:"change"},Rp={type:"mouseDown",mode:null},Cp={type:"mouseUp",mode:null},Ip={type:"objectChange"},Jl=class extends ls{constructor(e,t=null){super(void 0,t);let n=new yu(this);this._root=n;let s=new xu;this._gizmo=s,n.add(s);let r=new vu;this._plane=r,n.add(r);let a=this;function o(A,_){let v=_;Object.defineProperty(a,A,{get:function(){return v!==void 0?v:_},set:function(M){v!==M&&(v=M,r[A]=M,s[A]=M,a.dispatchEvent({type:A+"-changed",value:M}),a.dispatchEvent(gu))}}),a[A]=_,r[A]=_,s[A]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),this.viewport=null,o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0),o("showXY",!0),o("showYZ",!0),o("showXZ",!0),o("showXYZE",!0),o("showE",!0),o("minX",-1/0),o("maxX",1/0),o("minY",-1/0),o("maxY",1/0),o("minZ",-1/0),o("maxZ",1/0);let c=new I,l=new I,h=new ct,d=new ct,u=new I,f=new ct,g=new I,S=new I,m=new I,p=0,b=new I;o("worldPosition",c),o("worldPositionStart",l),o("worldQuaternion",h),o("worldQuaternionStart",d),o("cameraPosition",u),o("cameraQuaternion",f),o("pointStart",g),o("pointEnd",S),o("rotationAxis",m),o("rotationAngle",p),o("eye",b),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new ct,this._parentQuaternionInv=new ct,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new ct,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new ct,this._scaleStart=new I,this._getPointer=Ub.bind(this),this._onPointerDown=Ob.bind(this),this._onPointerHover=Fb.bind(this),this._onPointerMove=Bb.bind(this),this._onPointerUp=kb.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&fs.setFromCamera(e,this.camera);let t=_u(this._gizmo.picker[this.mode],fs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&fs.setFromCamera(e,this.camera);let t=_u(this._plane,fs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Rp.mode=this.mode,this.dispatchEvent(Rp)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&fs.setFromCamera(e,this.camera);let a=_u(this._plane,fs,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(vt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.getWorldPosition(wt),t.search("X")!==-1&&(wt.x=Math.round(wt.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(wt.y=Math.round(wt.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(wt.z=Math.round(wt.z/this.translationSnap)*this.translationSnap),s.position.copy(s.parent.worldToLocal(wt)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),qn.set(o,o,o)}else wt.copy(this.pointStart),qn.copy(this.pointEnd),wt.applyQuaternion(this._worldQuaternionInv),qn.applyQuaternion(this._worldQuaternionInv),qn.divide(wt),t.search("X")===-1&&(qn.x=1),t.search("Y")===-1&&(qn.y=1),t.search("Z")===-1&&(qn.z=1);s.scale.copy(this._scaleStart).multiply(qn),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let o=20/this.worldPosition.distanceTo(wt.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(wt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Ap[t]),wt.copy(Ap[t]),r==="local"&&wt.applyQuaternion(this.worldQuaternion),wt.cross(this.eye),wt.length()===0?c=!0:this.rotationAngle=this._offset.dot(wt.normalize())*o),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(vt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(vt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(gu),this.dispatchEvent(Ip)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Cp.mode=this.mode,this.dispatchEvent(Cp)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(gu),this.dispatchEvent(Ip),this.pointStart.copy(this.pointEnd))}getRaycaster(){return fs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Ub(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect(),t=this.viewport,n,s,r,a;return t!==null?(n=t.x,s=e.height-t.y-t.w,r=t.z,a=t.w):(n=0,s=0,r=e.width,a=e.height),{x:(i.clientX-e.left-n)/r*2-1,y:-(i.clientY-e.top-s)/a*2+1,button:i.button}}}function Fb(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Ob(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Bb(i){this.enabled&&this.pointerMove(this._getPointer(i))}function kb(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function _u(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var Zl=new Ri,ht=new I(0,1,0),Pp=new I(0,0,0),Lp=new Ke,Kl=new ct,$l=new ct,$i=new I,Ql=new Ke,ca=new I(1,0,0),ps=new I(0,1,0),ha=new I(0,0,1),jl=new I,oa=new I,la=new I,yu=class extends Pt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),this.parent&&(Ql.copy(this.parent.matrixWorld).invert(),Ql.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},xu=class extends Pt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Un({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new gn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let a=e.clone();a.color.setHex(65280);let o=e.clone();o.color.setHex(255);let c=e.clone();c.color.setHex(16711680),c.opacity=.5;let l=e.clone();l.color.setHex(65280),l.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let d=e.clone();d.opacity=.25;let u=e.clone();u.color.setHex(16776960),u.opacity=.25;let f=e.clone();f.color.setHex(16776960);let g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:a,zAxis:o,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:h,activeTransparent:u};let S=new Ht(0,.04,.1,12);S.translate(0,.05,0);let m=new Mt(.08,.08,.08);m.translate(0,.04,0);let p=new yt;p.setAttribute("position",new nt([0,0,0,1,0,0],3));let b=new Ht(.0075,.0075,.5,3);b.translate(0,.25,0);function A(B,Y){let W=new _n(B,.0075,3,64,Y*Math.PI*2);return W.rotateY(Math.PI/2),W.rotateX(Math.PI/2),W}function _(){let B=new yt;return B.setAttribute("position",new nt([0,0,0,1,1,1],3)),B}let v={X:[[new se(S,r),[.5,0,0],[0,0,-Math.PI/2]],[new se(S,r),[-.5,0,0],[0,0,Math.PI/2]],[new se(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new se(S,a),[0,.5,0]],[new se(S,a),[0,-.5,0],[Math.PI,0,0]],[new se(b,a)]],Z:[[new se(S,o),[0,0,.5],[Math.PI/2,0,0]],[new se(S,o),[0,0,-.5],[-Math.PI/2,0,0]],[new se(b,o),null,[Math.PI/2,0,0]]],XYZ:[[new se(new On(.1,0),d),[0,0,0]]],XY:[[new se(new Mt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new se(new Mt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new Mt(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},M={X:[[new se(new Ht(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new se(new Ht(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new se(new Ht(.2,0,.6,4),n),[0,.3,0]],[new se(new Ht(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new se(new Ht(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new se(new Ht(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new se(new On(.2,0),n)]],XY:[[new se(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new se(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new se(new On(.01,2),s),null,null,null,"helper"]],END:[[new se(new On(.01,2),s),null,null,null,"helper"]],DELTA:[[new gi(_(),s),null,null,null,"helper"]],X:[[new gi(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new gi(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new gi(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},y={XYZE:[[new se(A(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new se(A(.5,.5),r)]],Y:[[new se(A(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new se(A(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new se(A(.75,1),u),null,[0,Math.PI/2,0]]]},w={AXIS:[[new gi(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},R={XYZE:[[new se(new Yr(.25,10,8),n)]],X:[[new se(new _n(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new se(new _n(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new se(new _n(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new se(new _n(.75,.1,2,24),n)]]},C={X:[[new se(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new se(b,r),[0,0,0],[0,0,-Math.PI/2]],[new se(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new se(m,a),[0,.5,0]],[new se(b,a)],[new se(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new se(m,o),[0,0,.5],[Math.PI/2,0,0]],[new se(b,o),[0,0,0],[Math.PI/2,0,0]],[new se(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new se(new Mt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new se(new Mt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new Mt(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new se(new Mt(.1,.1,.1),d)]]},L={X:[[new se(new Ht(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new se(new Ht(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new se(new Ht(.2,0,.6,4),n),[0,.3,0]],[new se(new Ht(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new se(new Ht(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new se(new Ht(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new se(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new se(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new se(new Mt(.2,.2,.2),n),[0,0,0]]]},O={X:[[new gi(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new gi(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new gi(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function D(B){let Y=new Pt;for(let W in B)for(let ee=B[W].length;ee--;){let G=B[W][ee][0].clone(),j=B[W][ee][1],J=B[W][ee][2],xe=B[W][ee][3],be=B[W][ee][4];G.name=W,G.tag=be,j&&G.position.set(j[0],j[1],j[2]),J&&G.rotation.set(J[0],J[1],J[2]),xe&&G.scale.set(xe[0],xe[1],xe[2]),G.updateMatrix();let Ne=G.geometry.clone();Ne.applyMatrix4(G.matrix),G.geometry=Ne,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),Y.add(G)}return Y}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=D(v)),this.add(this.gizmo.rotate=D(y)),this.add(this.gizmo.scale=D(C)),this.add(this.picker.translate=D(M)),this.add(this.picker.rotate=D(R)),this.add(this.picker.scale=D(L)),this.add(this.helper.translate=D(T)),this.add(this.helper.rotate=D(w)),this.add(this.helper.scale=D(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:$l;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let a=s[r];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(vt.setFromEuler(Zl.set(0,0,0)),a.quaternion.copy(n).multiply(vt),Math.abs(ht.copy(ca).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(vt.setFromEuler(Zl.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(vt),Math.abs(ht.copy(ps).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(vt.setFromEuler(Zl.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(vt),Math.abs(ht.copy(ha).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(vt.setFromEuler(Zl.set(0,Math.PI/2,0)),ht.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Lp.lookAt(Pp,ht,ps)),a.quaternion.multiply(vt),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),wt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),wt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(wt),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(ht.copy(ca).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(ht.copy(ps).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(ht.copy(ha).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(ht.copy(ha).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(ht.copy(ca).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(ht.copy(ps).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Kl.copy(n),ht.copy(this.eye).applyQuaternion(vt.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Lp.lookAt(this.eye,Pp,ps)),a.name==="X"&&(vt.setFromAxisAngle(ca,Math.atan2(-ht.y,ht.z)),vt.multiplyQuaternions(Kl,vt),a.quaternion.copy(vt)),a.name==="Y"&&(vt.setFromAxisAngle(ps,Math.atan2(ht.x,ht.z)),vt.multiplyQuaternions(Kl,vt),a.quaternion.copy(vt)),a.name==="Z"&&(vt.setFromAxisAngle(ha,Math.atan2(ht.y,ht.x)),vt.multiplyQuaternions(Kl,vt),a.quaternion.copy(vt))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.visible=a.visible&&(a.name.indexOf("XY")===-1||this.showXY),a.visible=a.visible&&(a.name.indexOf("YZ")===-1||this.showYZ),a.visible=a.visible&&(a.name.indexOf("XZ")===-1||this.showXZ),a.visible=a.visible&&(a.name!=="E"||this.showE),a.visible=a.visible&&(a.name!=="XYZE"||this.showXYZE),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis?(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1):this.axis.split("").some(function(c){return a.name===c})&&(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1))}super.updateMatrixWorld(e)}},vu=class extends se{constructor(){super(new _i(1e5,1e5,2,2),new Un({visible:!1,wireframe:!0,side:li,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),jl.copy(ca).applyQuaternion(t==="local"?this.worldQuaternion:$l),oa.copy(ps).applyQuaternion(t==="local"?this.worldQuaternion:$l),la.copy(ha).applyQuaternion(t==="local"?this.worldQuaternion:$l),ht.copy(oa),this.mode){case"translate":case"scale":switch(this.axis){case"X":ht.copy(this.eye).cross(jl),$i.copy(jl).cross(ht);break;case"Y":ht.copy(this.eye).cross(oa),$i.copy(oa).cross(ht);break;case"Z":ht.copy(this.eye).cross(la),$i.copy(la).cross(ht);break;case"XY":$i.copy(la);break;case"YZ":$i.copy(jl);break;case"XZ":ht.copy(la),$i.copy(oa);break;case"XYZ":case"E":$i.set(0,0,0);break}break;default:$i.set(0,0,0)}$i.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ql.lookAt(wt.set(0,0,0),$i,ht),this.quaternion.setFromRotationMatrix(Ql)),super.updateMatrixWorld(e)}};var Dp=`#if SKY_SOLID_CUTS\r
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
`;function Bp(i,e=8){if(!Array.isArray(i)||i.length>16)throw Error("Cloud supports at most sixteen Grab strokes");let t=new Set;for(let n of i){let s=["id","enabled","center","radius","delta","gain"];if(!n||typeof n!="object"||Array.isArray(n)||Object.keys(n).length!==s.length||s.some(r=>!Object.hasOwn(n,r)))throw Error("Malformed Grab stroke fields");if(!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Grab IDs must be unique");if(t.add(n.id),typeof n.enabled!="boolean")throw Error("Grab enabled flag must be boolean");for(let r of["center","delta"])if(!Array.isArray(n[r])||n[r].length!==3||n[r].some(a=>typeof a!="number"||!Number.isFinite(a)||Math.abs(a)>(r==="center"?e:8)))throw Error("Grab requires bounded three-number coordinates");if(typeof n.radius!="number"||!Number.isFinite(n.radius)||n.radius<.08||n.radius>1.5)throw Error("Grab radius must be between 0.08 and 1.5");if(typeof n.gain!="number"||!Number.isFinite(n.gain)||n.gain<0||n.gain>1)throw Error("Grab gain must be between 0 and 1");if(Math.hypot(...n.delta)>n.radius*.25+1e-9)throw Error("Grab displacement exceeds one quarter of its radius")}return structuredClone(i)}function kp(i=[]){return i.filter(e=>e.enabled).reduce((e,t)=>e+Math.hypot(...t.delta)*t.gain,0)}var Su=16,bu=["warp","billow","erosion"];function zp(i,e=8){if(!Array.isArray(i)||i.length>Su)throw Error("Cloud supports at most sixteen modifier masks");let t=new Set;for(let n of i){let s=["id","enabled","center","radius","value","channel"];if(!n||typeof n!="object"||Array.isArray(n)||Object.keys(n).length!==s.length||s.some(r=>!Object.hasOwn(n,r)))throw Error("Malformed modifier mask");if(!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Mask IDs must be unique");if(t.add(n.id),typeof n.enabled!="boolean"||!bu.includes(n.channel))throw Error("Invalid mask channel or visibility");if(!Array.isArray(n.center)||n.center.length!==3||n.center.some(r=>typeof r!="number"||!Number.isFinite(r)||Math.abs(r)>e))throw Error("Invalid mask center");if(typeof n.radius!="number"||!Number.isFinite(n.radius)||n.radius<.08||n.radius>1.5)throw Error("Mask radius must be between 0.08 and 1.5");if(typeof n.value!="number"||!Number.isFinite(n.value)||n.value<-1||n.value>1)throw Error("Mask value must be between -1 and 1")}return structuredClone(i)}var dr={density:{id:3,label:"Density",name:"Density thinning",max:3,initial:0,step:.1},erosion:{id:2,label:"Erosion",name:"Erosion breakup",max:3,initial:2,step:.1},billow:{id:4,label:"Billows",name:"Local billows",max:.3,initial:.2,step:.01},warp:{id:5,label:"Warp",name:"Local warp",max:.75,initial:.25,step:.01},wisps:{id:6,label:"Wisps",name:"Local wisps",max:1,initial:.5,step:.05,studio:!0},cavities:{id:7,label:"Cavities",name:"Interior cavities",max:1,initial:.6,step:.05,studio:!0},softness:{id:8,label:"Softness",name:"Cloud-edge softness",min:.08,max:.6,initial:.4,step:.01,version:13}};function Mu(i=9){return i>=10?Object.keys(dr).filter(e=>i>=(dr[e].version??10)):["density","erosion"]}function Hp(i){return dr[i]?.min??0}function Vp(i,e=9){return i==="density"&&e<10?1:dr[i]?.max}var Zb=4,Kb=32,tc=8,wu=96,Gp=i=>i>=25?{layers:tc,stamps:wu}:{layers:Zb,stamps:Kb},ms=i=>({SKY_PAINT_STRIDE:i>=25?8:4,SKY_PAINT_STAMP_LIMIT:i>=25?96:32}),eC=Mu(10);function Wp(i,e){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(t=>!Object.hasOwn(i,t)))throw Error("Malformed paint layer fields")}function Xp(i,e){if(typeof i!="number"||!Number.isFinite(i)||i<0||i>1)throw Error(`${e} must be between 0 and 1`)}function Yp(i,e){if(!Number.isSafeInteger(i)||i<1||i>1e6||e.has(i))throw Error("Paint IDs must be unique within their list");e.add(i)}function qp(i,e=8,t=9){if(!Array.isArray(i)||i.length>Gp(t).layers)throw Error(t>=25?"Cloud supports at most eight paint layers":"Cloud supports at most four paint layers");let n=new Set;for(let s of i){if(Wp(s,["id","name","enabled","channel","target","opacity","stamps",...t>=14&&s&&Object.hasOwn(s,"hardness")?["hardness"]:[]]),Yp(s.id,n),Object.hasOwn(s,"hardness")&&Xp(s.hardness,"Mask hardness"),typeof s.name!="string"||!s.name.trim()||s.name.length>80)throw Error("Paint layer name requires 1\u201380 characters");if(typeof s.enabled!="boolean"||!Mu(t).includes(s.channel))throw Error("Invalid paint layer channel or visibility");let r=Hp(s.channel),a=Vp(s.channel,t);if(typeof s.target!="number"||!Number.isFinite(s.target)||s.target<r||s.target>a)throw Error(`Layer amount must be between ${r} and ${a}`);if(Xp(s.opacity,"Layer opacity"),!Array.isArray(s.stamps)||s.stamps.length>Gp(t).stamps)throw Error(t>=25?"Paint layer supports at most ninety-six stamps":"Paint layer supports at most thirty-two stamps");let o=new Set;for(let c of s.stamps){if(Wp(c,["id","enabled","center","radius","value"]),Yp(c.id,o),typeof c.enabled!="boolean")throw Error("Invalid paint stamp visibility");if(!Array.isArray(c.center)||c.center.length!==3||c.center.some(l=>typeof l!="number"||!Number.isFinite(l)||Math.abs(l)>e))throw Error("Invalid paint stamp center");if(typeof c.radius!="number"||!Number.isFinite(c.radius)||c.radius<.08||c.radius>1.5)throw Error("Paint radius must be between 0.08 and 1.5");if(typeof c.value!="number"||!Number.isFinite(c.value)||c.value<-1||c.value>1)throw Error("Paint value must be between -1 and 1")}}return structuredClone(i)}function jb(i){let e=new Map;for(let t of i.stamps)if(t.enabled){let n=JSON.stringify([t.center,t.radius]);e.set(n,Math.max(0,(e.get(n)??0)+t.value))}return Math.min(1,Array.from(e.values()).reduce((t,n)=>t+n,0))}var ua=i=>i.enabled&&i.opacity>0&&jb(i)>0;function Zp(i){let e=i?.recipe;if(!e)return!1;let t=e.character,n={billow:e.billow.enabled?e.billow.strength:0,warp:i.displacement,wisps:t?.wisps??0,cavities:t?.cavities??0,softness:e.profile.feather};return(e.layers??[]).some(s=>ua(s)&&(s.channel==="density"?s.target>1:Object.hasOwn(n,s.channel)&&(!["wisps","cavities"].includes(s.channel)||t?.enabled)&&s.target!==n[s.channel]))}var da=i=>(i.recipe?.layers??[]).some(e=>(e.hardness??0)>0&&ua(e)),Kp=i=>(i?.recipe?.layers??[]).some(e=>(e.hardness??0)>0&&e.stamps.some(t=>t.enabled&&t.value!==0)),gs=i=>(i.recipe?.layers??[]).some(e=>ua(e)&&e.channel==="softness"&&e.target!==i.recipe.profile.feather);function ic(i,e,t){let n=t;for(let s of i??[])ua(s)&&s.channel===e&&(n=Math.max(n,s.target));return n}function Eu(i){let e=1;for(let t of i??[])ua(t)&&t.channel==="density"&&(e*=Math.max(1,1+(t.target-1)*t.opacity));return 1.35*e}var fa=(i,e)=>i.reduce((t,n,s)=>t+n*e[s],0),pa=i=>Math.max(0,Math.min(1,i)),ma=(i,e)=>i.map((t,n)=>t-e[n]);function $b(i,e){let t=ma(i.b.position,i.a.position),n=ma(e.b.position,e.a.position),s=ma(i.a.position,e.a.position),r=fa(t,t),a=fa(t,n),o=fa(n,n),c=fa(t,s),l=fa(n,s),h=r*o-a*a,d=0,u=0;r<1e-8&&o<1e-8||(r<1e-8?u=pa(l/o):o<1e-8?d=pa(-c/r):(d=h>1e-8?pa((a*l-o*c)/h):0,u=(a*d+l)/o,u<0?(u=0,d=pa(-c/r)):u>1&&(u=1,d=pa((a-c)/r))));let f=(m,p)=>({position:m.a.position.map((b,A)=>b+(m.b.position[A]-b)*p),radius:m.a.radius+(m.b.radius-m.a.radius)*p}),g=f(i,d),S=f(e,u);return{a:g,b:S,distance:Math.hypot(...ma(g.position,S.position))}}function Jb(i){let e=i>>>0;return()=>(e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e^=e>>>16,(e>>>0)/4294967296)}function jp(i,e){let t=i.structure;if(!t?.enabled||t.intersections===0||!i.detail.enabled)return[];let n=i.strokes.filter(r=>r.enabled).map(r=>r.id).sort((r,a)=>r-a),s=[];for(let r=0;r<n.length;r++)for(let a=r+1;a<n.length;a++){let o=null,c=1/0;for(let y of e.filter(w=>w.strokeId===n[r]))for(let w of e.filter(R=>R.strokeId===n[a])){let R=$b(y,w),C=R.distance-R.a.radius-R.b.radius;C<c&&(o=R,c=C)}if(!o||c>=0)continue;let{a:l,b:h}=o,d=Math.min(l.radius,h.radius),u=d*.5*t.intersections,f=ma(h.position,l.position),g=Math.hypot(...f),S=g>1e-6?f.map(y=>y/g):[0,1,0],m,p;if(g>Math.abs(l.radius-h.radius)+1e-6){let y=(g*g+l.radius*l.radius-h.radius*h.radius)/(2*g);m=l.position.map((w,R)=>w+S[R]*y),p=Math.sqrt(Math.max(0,l.radius*l.radius-y*y))}else m=[...l.radius>=h.radius?l.position:h.position],p=Math.max(l.radius,h.radius);let b=Math.abs(S[1])<.9?[0,1,0]:[1,0,0],A=(y,w)=>[y[1]*w[2]-y[2]*w[1],y[2]*w[0]-y[0]*w[2],y[0]*w[1]-y[1]*w[0]],_=A(S,b),v=Math.hypot(..._);_=_.map(y=>y/v);let M=A(S,_),T=Jb(i.detail.seed^Math.imul(n[r],104729)^Math.imul(n[a],19349663));for(let y=0;y<2;y++){let w=T()*Math.PI*2,R=p+u*.15,C={position:m.map((L,O)=>L+(_[O]*Math.cos(w)+M[O]*Math.sin(w))*R),radius:u};s.push({a:C,b:C,stage:1,intersection:[n[r],n[a]]})}}return s}function $p(i,e=5){if(!Array.isArray(i)||i.length>16)throw Error("Cloud supports at most sixteen mass strokes");let t=new Set;for(let n of i){let s=["id","enabled","role","a","b","radius",...e>=7?["layerId"]:[]];if(!n||typeof n!="object"||Array.isArray(n)||Object.keys(n).length!==s.length||s.some(r=>!Object.hasOwn(n,r)))throw Error("Malformed mass stroke");if(!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Mass IDs must be unique");if(t.add(n.id),typeof n.enabled!="boolean"||!["add","cut"].includes(n.role))throw Error("Invalid mass role or visibility");if(e>=7&&(!Number.isSafeInteger(n.layerId)||n.layerId<1||n.layerId>1e6))throw Error("Invalid geometry layer reference");for(let r of["a","b"])if(!Array.isArray(n[r])||n[r].length!==3||n[r].some(a=>typeof a!="number"||!Number.isFinite(a)||Math.abs(a)>8))throw Error("Invalid mass endpoint");if(typeof n.radius!="number"||!Number.isFinite(n.radius)||n.radius<.08||n.radius>1.5)throw Error("Mass radius must be between 0.08 and 1.5")}return structuredClone(i)}function Jp(i=[]){return i.filter(e=>e.enabled&&e.role==="add").map(e=>({a:{position:e.a,radius:e.radius},b:{position:e.b,radius:e.radius},stage:0,massId:e.id}))}function Qp(i,e){if(!Array.isArray(i)||i.length>4)throw Error("Shape supports at most four geometry layers");let t=new Set;for(let n of i){if(!n||typeof n!="object"||Array.isArray(n)||Object.keys(n).length!==3||!["id","name","enabled"].every(s=>Object.hasOwn(n,s)))throw Error("Malformed geometry layer");if(!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Geometry layer IDs must be unique");if(t.add(n.id),typeof n.name!="string"||!n.name.trim()||n.name.length>80||typeof n.enabled!="boolean")throw Error("Invalid geometry layer name or bypass")}for(let n of e)if(!t.has(n.layerId))throw Error("Mass references an unknown geometry layer");return structuredClone(i)}function fr(i){let e=i.masses??[];if(!i.geometryLayers)return e.filter(n=>n.enabled);let t=new Set(i.geometryLayers.filter(n=>n.enabled).map(n=>n.id));return i.massMode!=="ordered"?e.filter(n=>n.enabled&&t.has(n.layerId)):i.geometryLayers.filter(n=>n.enabled).flatMap(n=>e.filter(s=>s.enabled&&s.layerId===n.id))}function ga(){return{enabled:!1,warpScale:1.05,billowScale:1.6,octave:.42,erosionScale:5.8,wisps:.1,cavities:0,clipSoft:.07,clipNoise:.045}}function _a(i=8){return{...i>=22?{visibility:"direct-v1"}:{},enabled:!1,anisotropy:.32,fill:.2,sunColor:"#fff1db",skyColor:"#a6c7f3"}}function em(i,e){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(t=>!Object.hasOwn(i,t)))throw Error("Malformed studio settings")}function Tu(i,e,t){if(typeof i!="number"||!Number.isFinite(i)||i<e||i>t)throw Error(`Studio setting must be between ${e} and ${t}`)}function tm(i){if(em(i,Object.keys(ga())),typeof i.enabled!="boolean")throw Error("Studio character enabled must be boolean");for(let[e,t,n]of[["warpScale",.25,3],["billowScale",.3,4],["octave",0,1],["erosionScale",.5,10],["wisps",0,1],["cavities",0,1],["clipSoft",.01,.3],["clipNoise",0,.2]])Tu(i[e],t,n);return structuredClone(i)}function im(i,e=8){if(em(i,Object.keys(_a(e))),typeof i.enabled!="boolean")throw Error("Studio lighting enabled must be boolean");if(Tu(i.anisotropy,0,.75),Tu(i.fill,0,1),e>=22&&!["direct-v1","scene-cache-v1"].includes(i.visibility))throw Error("Invalid scene visibility model");for(let t of["sunColor","skyColor"])if(typeof i[t]!="string"||!/^#[\da-f]{6}$/i.test(i[t]))throw Error("Invalid studio light color");return structuredClone(i)}function Au(i){let e=i.character;return ic(i.layers,"billow",i.billow.enabled?i.billow.strength:0)*(e?.enabled?(.6+.57*e.octave)*1.7:1)}function nm(i){let e=i.recipe?.character,t=ic(i.recipe?.layers,"warp",i.displacement),n=ic(i.recipe?.layers,"wisps",e?.wisps??0);return e?.enabled?[t+1.4*n,t+.14*n,t+.11*n]:[t/2,t/2,t/2]}function sm(i){let e=i>>>0;return Array.from({length:3},()=>{e=e+2654435769>>>0;let t=e;return t=(t^t>>>16)>>>0,t=Math.imul(t,2146121005),t=(t^t>>>15)>>>0,t=Math.imul(t,2221713035),((t^t>>>16)>>>0)/4294967296*11})}var _s=Object.freeze(["clay","scrape","planar"]);function nc(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==2||!Object.hasOwn(i,"normal")||!Object.hasOwn(i,"offset")||!Array.isArray(i.normal)||i.normal.length!==3||i.normal.some(e=>typeof e!="number"||!Number.isFinite(e)||Math.abs(e)>1)||Math.abs(Math.hypot(...i.normal)-1)>1e-6||typeof i.offset!="number"||!Number.isFinite(i.offset)||Math.abs(i.offset)>48)throw Error("Sculpt plane requires a unit normal and finite offset within \xB148");return structuredClone(i)}function rm(i,e,t,n,s,r,{scale:a,step:o,quantize:c}){let{n:l,bounds:h,values:d}=i,u=d.slice(),f=l*l,g=t*n*.15,S=e.some((A,_)=>A-t<h.lo[_]+o[_]||A+t>h.hi[_]-o[_]);if(n===0)return{...i,values:u,changed:0,clipped:S};let m=e.map((A,_)=>Math.max(1,Math.ceil((A-t-h.lo[_])/o[_]))),p=e.map((A,_)=>Math.min(l-2,Math.floor((A+t-h.lo[_])/o[_]))),b=0;for(let A=m[2];A<=p[2];A++){let _=h.lo[2]+A*o[2],v=(_-e[2])/t;for(let M=m[1];M<=p[1];M++){let T=h.lo[1]+M*o[1],y=(T-e[1])/t;for(let w=m[0];w<=p[0];w++){let R=h.lo[0]+w*o[0],C=(R-e[0])/t,L=C*C+y*y+v*v;if(L>=1)continue;let O=w+M*l+A*f,D=d[O]/a,B=(d[O+1]-d[O-1])/(2*o[0]*a),Y=(d[O+l]-d[O-l])/(2*o[1]*a),W=(d[O+f]-d[O-f])/(2*o[2]*a),ee=Math.min(2,Math.hypot(B,Y,W)),G=R*r.normal[0]+T*r.normal[1]+_*r.normal[2]-r.offset,j=Math.max(-g*ee,Math.min(g*ee,G-D));s==="clay"&&(j=Math.min(0,j)),s==="scrape"&&(j=Math.max(0,j));let J=c(D+j*(1-L)**2);J!==d[O]&&(u[O]=J,b++)}}}return{...i,values:u,changed:b,clipped:S}}var Ru=Object.freeze(["inflate","deflate","flatten"]),Cu=Object.freeze([...Ru,..._s]);function am(i,e,t,n,s,{scale:r,step:a,quantize:o}){let{n:c,bounds:l,values:h}=i,d=h.slice(),u=c*c,f=e.some((T,y)=>T-t<l.lo[y]+a[y]||T+t>l.hi[y]-a[y]);if(n===0)return{...i,values:d,changed:0,clipped:f};let g=e.map((T,y)=>Math.max(1,Math.ceil((T-t-l.lo[y])/a[y]))),S=e.map((T,y)=>Math.min(c-2,Math.floor((T+t-l.lo[y])/a[y]))),m=T=>[(h[T+1]-h[T-1])/(2*a[0]*r),(h[T+c]-h[T-c])/(2*a[1]*r),(h[T+u]-h[T-u])/(2*a[2]*r)],p=e.map((T,y)=>Math.max(1,Math.min(c-2,Math.round((T-l.lo[y])/a[y])))),b=m(p[0]+p[1]*c+p[2]*u),A=Math.hypot(...b);if(s==="flatten"&&A<1e-6)return{...i,values:d,changed:0,clipped:f};let _=b.map(T=>T/A),v=t*n*.15,M=0;for(let T=g[2];T<=S[2];T++)for(let y=g[1];y<=S[1];y++)for(let w=g[0];w<=S[0];w++){let R=l.lo[0]+w*a[0]-e[0],C=l.lo[1]+y*a[1]-e[1],L=l.lo[2]+T*a[2]-e[2],O=(R*R+C*C+L*L)/(t*t);if(O>=1)continue;let D=w+y*c+T*u,B=h[D]/r,Y=(1-O)**2,W=Math.min(2,Math.hypot(...m(D))),ee=s==="inflate"?-v*W:v*W;if(s==="flatten"){let j=R*_[0]+C*_[1]+L*_[2];ee=Math.max(-v*W,Math.min(v*W,j*W-B))}let G=o(B+ee*Y);G!==h[D]&&(d[D]=G,M++)}return{...i,values:d,changed:M,clipped:f}}var Qb=49,Zn=Object.freeze([49,65]),vn=8191,mC=Qb**3,eM=1,Pu=16,om=24;function ys(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==2||["lo","hi"].some(e=>!Array.isArray(i[e])||i[e].length!==3||i[e].some(t=>typeof t!="number"||!Number.isFinite(t)||Math.abs(t)>12))||i.hi.some((e,t)=>e-i.lo[t]<.25))throw Error("Field bounds require three finite axes within \xB112, with extent at least0.25")}function ya(i){return i.bounds.hi.map((e,t)=>(e-i.bounds.lo[t])/(i.n-1))}var Iu=i=>Math.max(-32767,Math.min(32767,Math.round(i*vn)));function sc(i,e,t,n,s,r){if(!["add","carve","smooth",...Cu].includes(s)||!Array.isArray(e)||e.length!==3||e.some(A=>typeof A!="number"||!Number.isFinite(A))||typeof t!="number"||!Number.isFinite(t)||t<.08||t>1.5||typeof n!="number"||!Number.isFinite(n)||n<0||n>1)throw Error("Invalid field brush");if(_s.includes(s))return rm(i,e,t,n,s,nc(r),{scale:vn,step:ya(i),quantize:Iu});if(r!==void 0)throw Error("Only planar sculpt brushes accept a saved plane");if(Cu.includes(s))return am(i,e,t,n,s,{scale:vn,step:ya(i),quantize:Iu});let{n:a,bounds:o,values:c}=i,l=c.slice(),h=ya(i),d=Math.max(eM,Math.max(...h)*2+.08),u=s==="smooth"?t:t*n,f=e.some((A,_)=>A-u<o.lo[_]+h[_]||A+u>o.hi[_]-h[_]);if(n===0)return{...i,values:l,changed:0,clipped:f};let g=s==="smooth"?u:u+d,S=e.map((A,_)=>Math.max(1,Math.ceil((A-g-o.lo[_])/h[_]))),m=e.map((A,_)=>Math.min(a-2,Math.floor((A+g-o.lo[_])/h[_]))),p=h.map(A=>1/(A*A)),b=0;for(let A=S[2];A<=m[2];A++){let _=o.lo[2]+A*h[2]-e[2];for(let v=S[1];v<=m[1];v++){let M=o.lo[1]+v*h[1]-e[1];for(let T=S[0];T<=m[0];T++){let y=o.lo[0]+T*h[0]-e[0],w=Math.hypot(y,M,_);if(w>=g)continue;let R=T+v*a+A*a*a,C=c[R]/vn,L=C,O=1;if(s==="smooth")L=((c[R-1]+c[R+1])*p[0]+(c[R-a]+c[R+a])*p[1]+(c[R-a*a]+c[R+a*a])*p[2])/(2*vn*(p[0]+p[1]+p[2])),O=n*Math.max(0,1-(w/t)**2)**2;else{let B=w-u;if(s==="carve")L=Math.max(C,-B);else{let Y=Math.max(.08-Math.abs(C-B),0)/.08;L=Math.min(C,B)-Y*Y*.02}}let D=Iu(C+(L-C)*O);D!==c[R]&&(l[R]=D,b++)}}}return{...i,values:l,changed:b,clipped:f}}var Lu=Object.freeze({axis:"x",origin:0,overlap:"max-absolute-delta-v1"});function Du(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==3||i.axis!=="x"||i.origin!==0||i.overlap!==Lu.overlap||!["axis","origin","overlap"].every(e=>Object.hasOwn(i,e)))throw Error("Sculpt symmetry requires rest X0 and max-absolute-delta-v1 overlap");return{...Lu}}var xa=i=>i.symmetry?2:1;function tM(i){return i?{normal:[-i.normal[0],i.normal[1],i.normal[2]],offset:i.offset}:void 0}function rc(i,e,t,n,s,r,a){if(a===void 0)return sc(i,e,t,n,s,r);Du(a);let o=sc(i,e,t,n,s,r);if(e[0]===0&&(!r||r.normal[0]===0))return o;let c=sc(i,[-e[0],e[1],e[2]],t,n,s,tM(r)),l=o.values,h=0;for(let d=0;d<l.length;d++){let u=i.values[d],f=l[d]-u,g=c.values[d]-u;Math.abs(g)>Math.abs(f)?l[d]=c.values[d]:Math.abs(f)===Math.abs(g)&&(l[d]=Math.round((l[d]+c.values[d])/2)),l[d]!==u&&h++}return{...i,values:l,changed:h,clipped:o.clipped||c.clipped}}var lm="sky-paint-sculpt-protection-v1",lc=8,cm=32,ac=(i,e,t)=>typeof i=="number"&&Number.isFinite(i)&&i>=e&&i<=t;function oc(i,e){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(t=>!Object.hasOwn(i,t)))throw Error("Malformed sculpt protection fields")}function Nu(i){if(i?.mode==="invert")return oc(i,["mode"]),structuredClone(i);if(oc(i,["mode","center","radius","gain","hardness"]),!["protect","restore"].includes(i.mode)||!Array.isArray(i.center)||i.center.length!==3||Array.from(i.center).some(e=>!ac(e,-24,24))||!ac(i.radius,.08,1.5)||!ac(i.gain,0,1)||!ac(i.hardness,0,1))throw Error("Invalid sculpt protection stamp");return structuredClone(i)}function hm(i){if(oc(i,["id","base","commands"]),!Number.isSafeInteger(i.id)||i.id<1||i.id>1e6||![0,255].includes(i.base)||!Array.isArray(i.commands)||i.commands.length>cm)throw Error("Sculpt protection snapshot budget/properties are invalid");for(let e of i.commands)Nu(e);return structuredClone(i)}function um(i){if(oc(i,["format","current","versions"]),i.format!==lm||!Array.isArray(i.versions)||i.versions.length<1||i.versions.length>lc)throw Error("Sculpt protection supports one to eight snapshots");let e=new Set;for(let t of i.versions){if(hm(t),e.has(t.id))throw Error("Sculpt protection snapshot IDs must be unique");e.add(t.id)}if(!Number.isSafeInteger(i.current)||!e.has(i.current))throw Error("Current sculpt protection snapshot is missing");return structuredClone(i)}function dm(i){if(!Zn.includes(i?.n))throw Error("Protection grid must be49 or65");ys(i.bounds)}function fm(i,e,t){if(dm(i),Nu(t),!(e instanceof Uint8Array)||e.length!==i.n**3)throw Error("Protection requires one q8 sample per author-grid point");let n=e.slice(),{n:s,bounds:r}=i,a=0;if(t.mode==="invert"){for(let S=0;S<n.length;S++)n[S]=255-n[S],n[S]!==e[S]&&a++;return{n:s,bounds:structuredClone(r),values:n,changed:a,clipped:!1}}let{center:o,radius:c,gain:l,hardness:h}=t,d=ya(i),u=o.some((S,m)=>S-c<r.lo[m]||S+c>r.hi[m]),f=o.map((S,m)=>Math.max(0,Math.ceil((S-c-r.lo[m])/d[m]))),g=o.map((S,m)=>Math.min(s-1,Math.floor((S+c-r.lo[m])/d[m])));if(l>0)for(let S=f[2];S<=g[2];S++)for(let m=f[1];m<=g[1];m++)for(let p=f[0];p<=g[0];p++){let b=r.lo[0]+p*d[0]-o[0],A=r.lo[1]+m*d[1]-o[1],_=r.lo[2]+S*d[2]-o[2],v=(b*b+A*A+_*_)/(c*c);if(v>=1)continue;let M=Math.sqrt(v),T=M<=h?0:(M-h)/(1-h),y=(1-T*T)**2,w=p+m*s+S*s*s,R=n[w],C=Math.round(t.mode==="protect"?R+(255-R)*l*y:R*(1-l*y));C!==R&&(n[w]=C,a++)}return{n:s,bounds:structuredClone(r),values:n,changed:a,clipped:u}}function va(i,e){dm(i),e&&hm(e);let t={n:i.n,bounds:structuredClone(i.bounds),values:new Uint8Array(i.n**3).fill(e?.base??0)};for(let s of e?.commands??[])t=fm(i,t.values,s);let n=t.values[0];return t.uniform=t.values.every(s=>s===n)?n:null,t}function cc(i,e,t,n,s,r,a,o){if(o===void 0)return rc(i,e,t,n,s,r,a);if(!(o.values instanceof Uint8Array)||o.n!==i.n||JSON.stringify(o.bounds)!==JSON.stringify(i.bounds)||o.values.length!==i.values.length)throw Error("Captured protection grid does not match the mass grid");if(o.values.every(h=>h===0))return rc(i,e,t,n,s,r,a);let c=rc(i,e,t,n,s,r,a),l=0;for(let h=0;h<c.values.length;h++){let d=i.values[h];c.values[h]=d+Math.round((c.values[h]-d)*(255-o.values[h])/255),c.values[h]!==d&&l++}return{...c,changed:l}}function pm(i,e=i.protection?.current){if(e===void 0)return;let t=i.protection?.versions.find(n=>n.id===e);if(!t)throw Error("Captured sculpt protection snapshot is missing");return t}function mm(i){return new Set(i.layers.flatMap(e=>e.strokes).filter(e=>Object.hasOwn(e,"protectionId")).map(e=>e.protectionId))}function gm(i){i.protection!==void 0&&um(i.protection);for(let e of mm(i))if(!Number.isSafeInteger(e)||e<1||e>1e6||!i.protection?.versions.some(t=>t.id===e))throw Error("Captured sculpt protection reference is invalid")}function _m(i){if(!i.protection)return JSON.stringify(i);let e=mm(i),t=i.protection.versions.filter(s=>e.has(s.id)),n={...i};return delete n.protection,t.length&&(n.protectionVersions=t),JSON.stringify(n)}function xr(i){let e=i.length;for(;--e>=0;)i[e]=0}var nM=0,i0=1,sM=2,rM=3,aM=258,sd=29,Ua=256,Aa=Ua+1+sd,gr=30,rd=19,n0=2*Aa+1,xs=15,Uu=16,oM=7,ad=256,s0=16,r0=17,a0=18,Ku=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),mc=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),lM=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),o0=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),cM=512,bn=new Array((Aa+2)*2);xr(bn);var wa=new Array(gr*2);xr(wa);var Ra=new Array(cM);xr(Ra);var Ca=new Array(aM-rM+1);xr(Ca);var od=new Array(sd);xr(od);var gc=new Array(gr);xr(gc);function Fu(i,e,t,n,s){this.static_tree=i,this.extra_bits=e,this.extra_base=t,this.elems=n,this.max_length=s,this.has_stree=i&&i.length}var l0,c0,h0;function Ou(i,e){this.dyn_tree=i,this.max_code=0,this.stat_desc=e}var u0=i=>i<256?Ra[i]:Ra[256+(i>>>7)],Ia=(i,e)=>{i.pending_buf[i.pending++]=e&255,i.pending_buf[i.pending++]=e>>>8&255},hi=(i,e,t)=>{i.bi_valid>Uu-t?(i.bi_buf|=e<<i.bi_valid&65535,Ia(i,i.bi_buf),i.bi_buf=e>>Uu-i.bi_valid,i.bi_valid+=t-Uu):(i.bi_buf|=e<<i.bi_valid&65535,i.bi_valid+=t)},Qi=(i,e,t)=>{hi(i,t[e*2],t[e*2+1])},d0=(i,e)=>{let t=0;do t|=i&1,i>>>=1,t<<=1;while(--e>0);return t>>>1},hM=i=>{i.bi_valid===16?(Ia(i,i.bi_buf),i.bi_buf=0,i.bi_valid=0):i.bi_valid>=8&&(i.pending_buf[i.pending++]=i.bi_buf&255,i.bi_buf>>=8,i.bi_valid-=8)},uM=(i,e)=>{let t=e.dyn_tree,n=e.max_code,s=e.stat_desc.static_tree,r=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length,l,h,d,u,f,g,S=0;for(u=0;u<=xs;u++)i.bl_count[u]=0;for(t[i.heap[i.heap_max]*2+1]=0,l=i.heap_max+1;l<n0;l++)h=i.heap[l],u=t[t[h*2+1]*2+1]+1,u>c&&(u=c,S++),t[h*2+1]=u,!(h>n)&&(i.bl_count[u]++,f=0,h>=o&&(f=a[h-o]),g=t[h*2],i.opt_len+=g*(u+f),r&&(i.static_len+=g*(s[h*2+1]+f)));if(S!==0){do{for(u=c-1;i.bl_count[u]===0;)u--;i.bl_count[u]--,i.bl_count[u+1]+=2,i.bl_count[c]--,S-=2}while(S>0);for(u=c;u!==0;u--)for(h=i.bl_count[u];h!==0;)d=i.heap[--l],!(d>n)&&(t[d*2+1]!==u&&(i.opt_len+=(u-t[d*2+1])*t[d*2],t[d*2+1]=u),h--)}},f0=(i,e,t)=>{let n=new Array(xs+1),s=0,r,a;for(r=1;r<=xs;r++)s=s+t[r-1]<<1,n[r]=s;for(a=0;a<=e;a++){let o=i[a*2+1];o!==0&&(i[a*2]=d0(n[o]++,o))}},dM=()=>{let i,e,t,n,s,r=new Array(xs+1);for(t=0,n=0;n<sd-1;n++)for(od[n]=t,i=0;i<1<<Ku[n];i++)Ca[t++]=n;for(Ca[t-1]=n,s=0,n=0;n<16;n++)for(gc[n]=s,i=0;i<1<<mc[n];i++)Ra[s++]=n;for(s>>=7;n<gr;n++)for(gc[n]=s<<7,i=0;i<1<<mc[n]-7;i++)Ra[256+s++]=n;for(e=0;e<=xs;e++)r[e]=0;for(i=0;i<=143;)bn[i*2+1]=8,i++,r[8]++;for(;i<=255;)bn[i*2+1]=9,i++,r[9]++;for(;i<=279;)bn[i*2+1]=7,i++,r[7]++;for(;i<=287;)bn[i*2+1]=8,i++,r[8]++;for(f0(bn,Aa+1,r),i=0;i<gr;i++)wa[i*2+1]=5,wa[i*2]=d0(i,5);l0=new Fu(bn,Ku,Ua+1,Aa,xs),c0=new Fu(wa,mc,0,gr,xs),h0=new Fu(new Array(0),lM,0,rd,oM)},p0=i=>{let e;for(e=0;e<Aa;e++)i.dyn_ltree[e*2]=0;for(e=0;e<gr;e++)i.dyn_dtree[e*2]=0;for(e=0;e<rd;e++)i.bl_tree[e*2]=0;i.dyn_ltree[ad*2]=1,i.opt_len=i.static_len=0,i.sym_next=i.matches=0},m0=i=>{i.bi_valid>8?Ia(i,i.bi_buf):i.bi_valid>0&&(i.pending_buf[i.pending++]=i.bi_buf),i.bi_buf=0,i.bi_valid=0},ym=(i,e,t,n)=>{let s=e*2,r=t*2;return i[s]<i[r]||i[s]===i[r]&&n[e]<=n[t]},Bu=(i,e,t)=>{let n=i.heap[t],s=t<<1;for(;s<=i.heap_len&&(s<i.heap_len&&ym(e,i.heap[s+1],i.heap[s],i.depth)&&s++,!ym(e,n,i.heap[s],i.depth));)i.heap[t]=i.heap[s],t=s,s<<=1;i.heap[t]=n},xm=(i,e,t)=>{let n,s,r=0,a,o;if(i.sym_next!==0)do n=i.pending_buf[i.sym_buf+r++]&255,n+=(i.pending_buf[i.sym_buf+r++]&255)<<8,s=i.pending_buf[i.sym_buf+r++],n===0?Qi(i,s,e):(a=Ca[s],Qi(i,a+Ua+1,e),o=Ku[a],o!==0&&(s-=od[a],hi(i,s,o)),n--,a=u0(n),Qi(i,a,t),o=mc[a],o!==0&&(n-=gc[a],hi(i,n,o)));while(r<i.sym_next);Qi(i,ad,e)},ju=(i,e)=>{let t=e.dyn_tree,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.elems,a,o,c=-1,l;for(i.heap_len=0,i.heap_max=n0,a=0;a<r;a++)t[a*2]!==0?(i.heap[++i.heap_len]=c=a,i.depth[a]=0):t[a*2+1]=0;for(;i.heap_len<2;)l=i.heap[++i.heap_len]=c<2?++c:0,t[l*2]=1,i.depth[l]=0,i.opt_len--,s&&(i.static_len-=n[l*2+1]);for(e.max_code=c,a=i.heap_len>>1;a>=1;a--)Bu(i,t,a);l=r;do a=i.heap[1],i.heap[1]=i.heap[i.heap_len--],Bu(i,t,1),o=i.heap[1],i.heap[--i.heap_max]=a,i.heap[--i.heap_max]=o,t[l*2]=t[a*2]+t[o*2],i.depth[l]=(i.depth[a]>=i.depth[o]?i.depth[a]:i.depth[o])+1,t[a*2+1]=t[o*2+1]=l,i.heap[1]=l++,Bu(i,t,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],uM(i,e),f0(t,c,i.bl_count)},vm=(i,e,t)=>{let n,s=-1,r,a=e[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,n=0;n<=t;n++)r=a,a=e[(n+1)*2+1],!(++o<c&&r===a)&&(o<l?i.bl_tree[r*2]+=o:r!==0?(r!==s&&i.bl_tree[r*2]++,i.bl_tree[s0*2]++):o<=10?i.bl_tree[r0*2]++:i.bl_tree[a0*2]++,o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4))},Sm=(i,e,t)=>{let n,s=-1,r,a=e[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),n=0;n<=t;n++)if(r=a,a=e[(n+1)*2+1],!(++o<c&&r===a)){if(o<l)do Qi(i,r,i.bl_tree);while(--o!==0);else r!==0?(r!==s&&(Qi(i,r,i.bl_tree),o--),Qi(i,s0,i.bl_tree),hi(i,o-3,2)):o<=10?(Qi(i,r0,i.bl_tree),hi(i,o-3,3)):(Qi(i,a0,i.bl_tree),hi(i,o-11,7));o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4)}},fM=i=>{let e;for(vm(i,i.dyn_ltree,i.l_desc.max_code),vm(i,i.dyn_dtree,i.d_desc.max_code),ju(i,i.bl_desc),e=rd-1;e>=3&&i.bl_tree[o0[e]*2+1]===0;e--);return i.opt_len+=3*(e+1)+5+5+4,e},pM=(i,e,t,n)=>{let s;for(hi(i,e-257,5),hi(i,t-1,5),hi(i,n-4,4),s=0;s<n;s++)hi(i,i.bl_tree[o0[s]*2+1],3);Sm(i,i.dyn_ltree,e-1),Sm(i,i.dyn_dtree,t-1)},mM=i=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&i.dyn_ltree[t*2]!==0)return 0;if(i.dyn_ltree[18]!==0||i.dyn_ltree[20]!==0||i.dyn_ltree[26]!==0)return 1;for(t=32;t<Ua;t++)if(i.dyn_ltree[t*2]!==0)return 1;return 0},bm=!1,gM=i=>{bm||(dM(),bm=!0),i.l_desc=new Ou(i.dyn_ltree,l0),i.d_desc=new Ou(i.dyn_dtree,c0),i.bl_desc=new Ou(i.bl_tree,h0),i.bi_buf=0,i.bi_valid=0,p0(i)},g0=(i,e,t,n)=>{hi(i,(nM<<1)+(n?1:0),3),m0(i),Ia(i,t),Ia(i,~t),t&&i.pending_buf.set(i.window.subarray(e,e+t),i.pending),i.pending+=t},_M=i=>{hi(i,i0<<1,3),Qi(i,ad,bn),hM(i)},yM=(i,e,t,n)=>{let s,r,a=0;i.level>0?(i.strm.data_type===2&&(i.strm.data_type=mM(i)),ju(i,i.l_desc),ju(i,i.d_desc),a=fM(i),s=i.opt_len+3+7>>>3,r=i.static_len+3+7>>>3,r<=s&&(s=r)):s=r=t+5,t+4<=s&&e!==-1?g0(i,e,t,n):i.strategy===4||r===s?(hi(i,(i0<<1)+(n?1:0),3),xm(i,bn,wa)):(hi(i,(sM<<1)+(n?1:0),3),pM(i,i.l_desc.max_code+1,i.d_desc.max_code+1,a+1),xm(i,i.dyn_ltree,i.dyn_dtree)),p0(i),n&&m0(i)},xM=(i,e,t)=>(i.pending_buf[i.sym_buf+i.sym_next++]=e,i.pending_buf[i.sym_buf+i.sym_next++]=e>>8,i.pending_buf[i.sym_buf+i.sym_next++]=t,e===0?i.dyn_ltree[t*2]++:(i.matches++,e--,i.dyn_ltree[(Ca[t]+Ua+1)*2]++,i.dyn_dtree[u0(e)*2]++),i.sym_next===i.sym_end),vM=gM,SM=g0,bM=yM,MM=xM,wM=_M,EM={_tr_init:vM,_tr_stored_block:SM,_tr_flush_block:bM,_tr_tally:MM,_tr_align:wM},TM=(i,e,t,n)=>{let s=i&65535|0,r=i>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do s=s+e[n++]|0,r=r+s|0;while(--a);s%=65521,r%=65521}return s|r<<16|0},Pa=TM,AM=()=>{let i,e=[];for(var t=0;t<256;t++){i=t;for(var n=0;n<8;n++)i=i&1?3988292384^i>>>1:i>>>1;e[t]=i}return e},RM=new Uint32Array(AM()),CM=(i,e,t,n)=>{let s=RM,r=n+t;i^=-1;for(let a=n;a<r;a++)i=i>>>8^s[(i^e[a])&255];return i^-1},Vt=CM,bs={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},vr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},{_tr_init:IM,_tr_stored_block:$u,_tr_flush_block:PM,_tr_tally:$n,_tr_align:LM}=EM,{Z_NO_FLUSH:Jn,Z_PARTIAL_FLUSH:DM,Z_FULL_FLUSH:NM,Z_FINISH:Ii,Z_BLOCK:Mm,Z_OK:Gt,Z_STREAM_END:wm,Z_STREAM_ERROR:en,Z_DATA_ERROR:UM,Z_BUF_ERROR:ku,Z_DEFAULT_COMPRESSION:FM,Z_FILTERED:OM,Z_HUFFMAN_ONLY:hc,Z_RLE:BM,Z_FIXED:kM,Z_DEFAULT_STRATEGY:zM,Z_UNKNOWN:HM,Z_DEFLATED:xc}=vr,VM=9,GM=15,WM=8,XM=29,YM=256,Ju=YM+1+XM,qM=30,ZM=19,KM=2*Ju+1,jM=15,qe=3,jn=258,tn=jn+qe+1,$M=32,_r=42,ld=57,Qu=69,ed=73,td=91,id=103,vs=113,ba=666,ii=1,Sr=2,Ms=3,br=4,JM=3,Ss=(i,e)=>(i.msg=bs[e],e),Em=i=>i*2-(i>4?9:0),Kn=i=>{let e=i.length;for(;--e>=0;)i[e]=0},QM=i=>{let e,t,n,s=i.w_size;e=i.hash_size,n=e;do t=i.head[--n],i.head[n]=t>=s?t-s:0;while(--e);e=s,n=e;do t=i.prev[--n],i.prev[n]=t>=s?t-s:0;while(--e)},e1=(i,e,t)=>(e<<i.hash_shift^t)&i.hash_mask,Qn=e1,bi=i=>{let e=i.state,t=e.pending;t>i.avail_out&&(t=i.avail_out),t!==0&&(i.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),i.next_out),i.next_out+=t,e.pending_out+=t,i.total_out+=t,i.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},Mi=(i,e)=>{PM(i,i.block_start>=0?i.block_start:-1,i.strstart-i.block_start,e),i.block_start=i.strstart,bi(i.strm)},Qe=(i,e)=>{i.pending_buf[i.pending++]=e},Sa=(i,e)=>{i.pending_buf[i.pending++]=e>>>8&255,i.pending_buf[i.pending++]=e&255},nd=(i,e,t,n)=>{let s=i.avail_in;return s>n&&(s=n),s===0?0:(i.avail_in-=s,e.set(i.input.subarray(i.next_in,i.next_in+s),t),i.state.wrap===1?i.adler=Pa(i.adler,e,s,t):i.state.wrap===2&&(i.adler=Vt(i.adler,e,s,t)),i.next_in+=s,i.total_in+=s,s)},_0=(i,e)=>{let t=i.max_chain_length,n=i.strstart,s,r,a=i.prev_length,o=i.nice_match,c=i.strstart>i.w_size-tn?i.strstart-(i.w_size-tn):0,l=i.window,h=i.w_mask,d=i.prev,u=i.strstart+jn,f=l[n+a-1],g=l[n+a];i.prev_length>=i.good_match&&(t>>=2),o>i.lookahead&&(o=i.lookahead);do if(s=e,!(l[s+a]!==g||l[s+a-1]!==f||l[s]!==l[n]||l[++s]!==l[n+1])){n+=2,s++;do;while(l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&l[++n]===l[++s]&&n<u);if(r=jn-(u-n),n=u-jn,r>a){if(i.match_start=e,a=r,r>=o)break;f=l[n+a-1],g=l[n+a]}}while((e=d[e&h])>c&&--t!==0);return a<=i.lookahead?a:i.lookahead},yr=i=>{let e=i.w_size,t,n,s;do{if(n=i.window_size-i.lookahead-i.strstart,i.strstart>=e+(e-tn)&&(i.window.set(i.window.subarray(e,e+e-n),0),i.match_start-=e,i.strstart-=e,i.block_start-=e,i.insert>i.strstart&&(i.insert=i.strstart),QM(i),n+=e),i.strm.avail_in===0)break;if(t=nd(i.strm,i.window,i.strstart+i.lookahead,n),i.lookahead+=t,i.lookahead+i.insert>=qe)for(s=i.strstart-i.insert,i.ins_h=i.window[s],i.ins_h=Qn(i,i.ins_h,i.window[s+1]);i.insert&&(i.ins_h=Qn(i,i.ins_h,i.window[s+qe-1]),i.prev[s&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=s,s++,i.insert--,!(i.lookahead+i.insert<qe)););}while(i.lookahead<tn&&i.strm.avail_in!==0)},y0=(i,e)=>{let t=i.pending_buf_size-5>i.w_size?i.w_size:i.pending_buf_size-5,n,s,r,a=0,o=i.strm.avail_in;do{if(n=65535,r=i.bi_valid+42>>3,i.strm.avail_out<r||(r=i.strm.avail_out-r,s=i.strstart-i.block_start,n>s+i.strm.avail_in&&(n=s+i.strm.avail_in),n>r&&(n=r),n<t&&(n===0&&e!==Ii||e===Jn||n!==s+i.strm.avail_in)))break;a=e===Ii&&n===s+i.strm.avail_in?1:0,$u(i,0,0,a),i.pending_buf[i.pending-4]=n,i.pending_buf[i.pending-3]=n>>8,i.pending_buf[i.pending-2]=~n,i.pending_buf[i.pending-1]=~n>>8,bi(i.strm),s&&(s>n&&(s=n),i.strm.output.set(i.window.subarray(i.block_start,i.block_start+s),i.strm.next_out),i.strm.next_out+=s,i.strm.avail_out-=s,i.strm.total_out+=s,i.block_start+=s,n-=s),n&&(nd(i.strm,i.strm.output,i.strm.next_out,n),i.strm.next_out+=n,i.strm.avail_out-=n,i.strm.total_out+=n)}while(a===0);return o-=i.strm.avail_in,o&&(o>=i.w_size?(i.matches=2,i.window.set(i.strm.input.subarray(i.strm.next_in-i.w_size,i.strm.next_in),0),i.strstart=i.w_size,i.insert=i.strstart):(i.window_size-i.strstart<=o&&(i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,i.insert>i.strstart&&(i.insert=i.strstart)),i.window.set(i.strm.input.subarray(i.strm.next_in-o,i.strm.next_in),i.strstart),i.strstart+=o,i.insert+=o>i.w_size-i.insert?i.w_size-i.insert:o),i.block_start=i.strstart),i.high_water<i.strstart&&(i.high_water=i.strstart),a?br:e!==Jn&&e!==Ii&&i.strm.avail_in===0&&i.strstart===i.block_start?Sr:(r=i.window_size-i.strstart,i.strm.avail_in>r&&i.block_start>=i.w_size&&(i.block_start-=i.w_size,i.strstart-=i.w_size,i.window.set(i.window.subarray(i.w_size,i.w_size+i.strstart),0),i.matches<2&&i.matches++,r+=i.w_size,i.insert>i.strstart&&(i.insert=i.strstart)),r>i.strm.avail_in&&(r=i.strm.avail_in),r&&(nd(i.strm,i.window,i.strstart,r),i.strstart+=r,i.insert+=r>i.w_size-i.insert?i.w_size-i.insert:r),i.high_water<i.strstart&&(i.high_water=i.strstart),r=i.bi_valid+42>>3,r=i.pending_buf_size-r>65535?65535:i.pending_buf_size-r,t=r>i.w_size?i.w_size:r,s=i.strstart-i.block_start,(s>=t||(s||e===Ii)&&e!==Jn&&i.strm.avail_in===0&&s<=r)&&(n=s>r?r:s,a=e===Ii&&i.strm.avail_in===0&&n===s?1:0,$u(i,i.block_start,n,a),i.block_start+=n,bi(i.strm)),a?Ms:ii)},zu=(i,e)=>{let t,n;for(;;){if(i.lookahead<tn){if(yr(i),i.lookahead<tn&&e===Jn)return ii;if(i.lookahead===0)break}if(t=0,i.lookahead>=qe&&(i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+qe-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),t!==0&&i.strstart-t<=i.w_size-tn&&(i.match_length=_0(i,t)),i.match_length>=qe)if(n=$n(i,i.strstart-i.match_start,i.match_length-qe),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=qe){i.match_length--;do i.strstart++,i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+qe-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart;while(--i.match_length!==0);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+1]);else n=$n(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(n&&(Mi(i,!1),i.strm.avail_out===0))return ii}return i.insert=i.strstart<qe-1?i.strstart:qe-1,e===Ii?(Mi(i,!0),i.strm.avail_out===0?Ms:br):i.sym_next&&(Mi(i,!1),i.strm.avail_out===0)?ii:Sr},pr=(i,e)=>{let t,n,s;for(;;){if(i.lookahead<tn){if(yr(i),i.lookahead<tn&&e===Jn)return ii;if(i.lookahead===0)break}if(t=0,i.lookahead>=qe&&(i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+qe-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=qe-1,t!==0&&i.prev_length<i.max_lazy_match&&i.strstart-t<=i.w_size-tn&&(i.match_length=_0(i,t),i.match_length<=5&&(i.strategy===OM||i.match_length===qe&&i.strstart-i.match_start>4096)&&(i.match_length=qe-1)),i.prev_length>=qe&&i.match_length<=i.prev_length){s=i.strstart+i.lookahead-qe,n=$n(i,i.strstart-1-i.prev_match,i.prev_length-qe),i.lookahead-=i.prev_length-1,i.prev_length-=2;do++i.strstart<=s&&(i.ins_h=Qn(i,i.ins_h,i.window[i.strstart+qe-1]),t=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart);while(--i.prev_length!==0);if(i.match_available=0,i.match_length=qe-1,i.strstart++,n&&(Mi(i,!1),i.strm.avail_out===0))return ii}else if(i.match_available){if(n=$n(i,0,i.window[i.strstart-1]),n&&Mi(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return ii}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(n=$n(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<qe-1?i.strstart:qe-1,e===Ii?(Mi(i,!0),i.strm.avail_out===0?Ms:br):i.sym_next&&(Mi(i,!1),i.strm.avail_out===0)?ii:Sr},t1=(i,e)=>{let t,n,s,r,a=i.window;for(;;){if(i.lookahead<=jn){if(yr(i),i.lookahead<=jn&&e===Jn)return ii;if(i.lookahead===0)break}if(i.match_length=0,i.lookahead>=qe&&i.strstart>0&&(s=i.strstart-1,n=a[s],n===a[++s]&&n===a[++s]&&n===a[++s])){r=i.strstart+jn;do;while(n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&n===a[++s]&&s<r);i.match_length=jn-(r-s),i.match_length>i.lookahead&&(i.match_length=i.lookahead)}if(i.match_length>=qe?(t=$n(i,1,i.match_length-qe),i.lookahead-=i.match_length,i.strstart+=i.match_length,i.match_length=0):(t=$n(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++),t&&(Mi(i,!1),i.strm.avail_out===0))return ii}return i.insert=0,e===Ii?(Mi(i,!0),i.strm.avail_out===0?Ms:br):i.sym_next&&(Mi(i,!1),i.strm.avail_out===0)?ii:Sr},i1=(i,e)=>{let t;for(;;){if(i.lookahead===0&&(yr(i),i.lookahead===0)){if(e===Jn)return ii;break}if(i.match_length=0,t=$n(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++,t&&(Mi(i,!1),i.strm.avail_out===0))return ii}return i.insert=0,e===Ii?(Mi(i,!0),i.strm.avail_out===0?Ms:br):i.sym_next&&(Mi(i,!1),i.strm.avail_out===0)?ii:Sr};function Ji(i,e,t,n,s){this.good_length=i,this.max_lazy=e,this.nice_length=t,this.max_chain=n,this.func=s}var Ma=[new Ji(0,0,0,0,y0),new Ji(4,4,8,4,zu),new Ji(4,5,16,8,zu),new Ji(4,6,32,32,zu),new Ji(4,4,16,16,pr),new Ji(8,16,32,32,pr),new Ji(8,16,128,128,pr),new Ji(8,32,128,256,pr),new Ji(32,128,258,1024,pr),new Ji(32,258,258,4096,pr)],n1=i=>{i.window_size=2*i.w_size,Kn(i.head),i.max_lazy_match=Ma[i.level].max_lazy,i.good_match=Ma[i.level].good_length,i.nice_match=Ma[i.level].nice_length,i.max_chain_length=Ma[i.level].max_chain,i.strstart=0,i.block_start=0,i.lookahead=0,i.insert=0,i.match_length=i.prev_length=qe-1,i.match_available=0,i.ins_h=0};function s1(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=xc,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(KM*2),this.dyn_dtree=new Uint16Array((2*qM+1)*2),this.bl_tree=new Uint16Array((2*ZM+1)*2),Kn(this.dyn_ltree),Kn(this.dyn_dtree),Kn(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(jM+1),this.heap=new Uint16Array(2*Ju+1),Kn(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ju+1),Kn(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Fa=i=>{if(!i)return 1;let e=i.state;return!e||e.strm!==i||e.status!==_r&&e.status!==ld&&e.status!==Qu&&e.status!==ed&&e.status!==td&&e.status!==id&&e.status!==vs&&e.status!==ba?1:0},x0=i=>{if(Fa(i))return Ss(i,en);i.total_in=i.total_out=0,i.data_type=HM;let e=i.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?ld:e.wrap?_r:vs,i.adler=e.wrap===2?0:1,e.last_flush=-2,IM(e),Gt},v0=i=>{let e=x0(i);return e===Gt&&n1(i.state),e},r1=(i,e)=>Fa(i)||i.state.wrap!==2?en:(i.state.gzhead=e,Gt),S0=(i,e,t,n,s,r)=>{if(!i)return en;let a=1;if(e===FM&&(e=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),s<1||s>VM||t!==xc||n<8||n>15||e<0||e>9||r<0||r>kM||n===8&&a!==1)return Ss(i,en);n===8&&(n=9);let o=new s1;return i.state=o,o.strm=i,o.status=_r,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=s+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+qe-1)/qe),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<s+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=r,o.method=t,v0(i)},a1=(i,e)=>S0(i,e,xc,GM,WM,zM),o1=(i,e)=>{if(Fa(i)||e>Mm||e<0)return i?Ss(i,en):en;let t=i.state;if(!i.output||i.avail_in!==0&&!i.input||t.status===ba&&e!==Ii)return Ss(i,i.avail_out===0?ku:en);let n=t.last_flush;if(t.last_flush=e,t.pending!==0){if(bi(i),i.avail_out===0)return t.last_flush=-1,Gt}else if(i.avail_in===0&&Em(e)<=Em(n)&&e!==Ii)return Ss(i,ku);if(t.status===ba&&i.avail_in!==0)return Ss(i,ku);if(t.status===_r&&t.wrap===0&&(t.status=vs),t.status===_r){let s=xc+(t.w_bits-8<<4)<<8,r=-1;if(t.strategy>=hc||t.level<2?r=0:t.level<6?r=1:t.level===6?r=2:r=3,s|=r<<6,t.strstart!==0&&(s|=$M),s+=31-s%31,Sa(t,s),t.strstart!==0&&(Sa(t,i.adler>>>16),Sa(t,i.adler&65535)),i.adler=1,t.status=vs,bi(i),t.pending!==0)return t.last_flush=-1,Gt}if(t.status===ld){if(i.adler=0,Qe(t,31),Qe(t,139),Qe(t,8),t.gzhead)Qe(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),Qe(t,t.gzhead.time&255),Qe(t,t.gzhead.time>>8&255),Qe(t,t.gzhead.time>>16&255),Qe(t,t.gzhead.time>>24&255),Qe(t,t.level===9?2:t.strategy>=hc||t.level<2?4:0),Qe(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(Qe(t,t.gzhead.extra.length&255),Qe(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(i.adler=Vt(i.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Qu;else if(Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,0),Qe(t,t.level===9?2:t.strategy>=hc||t.level<2?4:0),Qe(t,JM),t.status=vs,bi(i),t.pending!==0)return t.last_flush=-1,Gt}if(t.status===Qu){if(t.gzhead.extra){let s=t.pending,r=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+r>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),t.gzindex+=o,bi(i),t.pending!==0)return t.last_flush=-1,Gt;s=0,r-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+r),t.pending),t.pending+=r,t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),t.gzindex=0}t.status=ed}if(t.status===ed){if(t.gzhead.name){let s=t.pending,r;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),bi(i),t.pending!==0)return t.last_flush=-1,Gt;s=0}t.gzindex<t.gzhead.name.length?r=t.gzhead.name.charCodeAt(t.gzindex++)&255:r=0,Qe(t,r)}while(r!==0);t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),t.gzindex=0}t.status=td}if(t.status===td){if(t.gzhead.comment){let s=t.pending,r;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s)),bi(i),t.pending!==0)return t.last_flush=-1,Gt;s=0}t.gzindex<t.gzhead.comment.length?r=t.gzhead.comment.charCodeAt(t.gzindex++)&255:r=0,Qe(t,r)}while(r!==0);t.gzhead.hcrc&&t.pending>s&&(i.adler=Vt(i.adler,t.pending_buf,t.pending-s,s))}t.status=id}if(t.status===id){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(bi(i),t.pending!==0))return t.last_flush=-1,Gt;Qe(t,i.adler&255),Qe(t,i.adler>>8&255),i.adler=0}if(t.status=vs,bi(i),t.pending!==0)return t.last_flush=-1,Gt}if(i.avail_in!==0||t.lookahead!==0||e!==Jn&&t.status!==ba){let s=t.level===0?y0(t,e):t.strategy===hc?i1(t,e):t.strategy===BM?t1(t,e):Ma[t.level].func(t,e);if((s===Ms||s===br)&&(t.status=ba),s===ii||s===Ms)return i.avail_out===0&&(t.last_flush=-1),Gt;if(s===Sr&&(e===DM?LM(t):e!==Mm&&($u(t,0,0,!1),e===NM&&(Kn(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),bi(i),i.avail_out===0))return t.last_flush=-1,Gt}return e!==Ii?Gt:t.wrap<=0?wm:(t.wrap===2?(Qe(t,i.adler&255),Qe(t,i.adler>>8&255),Qe(t,i.adler>>16&255),Qe(t,i.adler>>24&255),Qe(t,i.total_in&255),Qe(t,i.total_in>>8&255),Qe(t,i.total_in>>16&255),Qe(t,i.total_in>>24&255)):(Sa(t,i.adler>>>16),Sa(t,i.adler&65535)),bi(i),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Gt:wm)},l1=i=>{if(Fa(i))return en;let e=i.state.status;return i.state=null,e===vs?Ss(i,UM):Gt},c1=(i,e)=>{let t=e.length;if(Fa(i))return en;let n=i.state,s=n.wrap;if(s===2||s===1&&n.status!==_r||n.lookahead)return en;if(s===1&&(i.adler=Pa(i.adler,e,t,0)),n.wrap=0,t>=n.w_size){s===0&&(Kn(n.head),n.strstart=0,n.block_start=0,n.insert=0);let c=new Uint8Array(n.w_size);c.set(e.subarray(t-n.w_size,t),0),e=c,t=n.w_size}let r=i.avail_in,a=i.next_in,o=i.input;for(i.avail_in=t,i.next_in=0,i.input=e,yr(n);n.lookahead>=qe;){let c=n.strstart,l=n.lookahead-(qe-1);do n.ins_h=Qn(n,n.ins_h,n.window[c+qe-1]),n.prev[c&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=c,c++;while(--l);n.strstart=c,n.lookahead=qe-1,yr(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=qe-1,n.match_available=0,i.next_in=a,i.input=o,i.avail_in=r,n.wrap=s,Gt},h1=a1,u1=S0,d1=v0,f1=x0,p1=r1,m1=o1,g1=l1,_1=c1,y1="pako deflate (from Nodeca project)",Ea={deflateInit:h1,deflateInit2:u1,deflateReset:d1,deflateResetKeep:f1,deflateSetHeader:p1,deflate:m1,deflateEnd:g1,deflateSetDictionary:_1,deflateInfo:y1},x1=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),v1=function(i){let e=Array.prototype.slice.call(arguments,1);for(;e.length;){let t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(let n in t)x1(t,n)&&(i[n]=t[n])}}return i},S1=i=>{let e=0;for(let n=0,s=i.length;n<s;n++)e+=i[n].length;let t=new Uint8Array(e);for(let n=0,s=0,r=i.length;n<r;n++){let a=i[n];t.set(a,s),s+=a.length}return t},vc={assign:v1,flattenChunks:S1},b0=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{b0=!1}var La=new Uint8Array(256);for(let i=0;i<256;i++)La[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1;La[254]=La[254]=1;var b1=i=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(i);let e,t,n,s,r,a=i.length,o=0;for(s=0;s<a;s++)t=i.charCodeAt(s),(t&64512)===55296&&s+1<a&&(n=i.charCodeAt(s+1),(n&64512)===56320&&(t=65536+(t-55296<<10)+(n-56320),s++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),r=0,s=0;r<o;s++)t=i.charCodeAt(s),(t&64512)===55296&&s+1<a&&(n=i.charCodeAt(s+1),(n&64512)===56320&&(t=65536+(t-55296<<10)+(n-56320),s++)),t<128?e[r++]=t:t<2048?(e[r++]=192|t>>>6,e[r++]=128|t&63):t<65536?(e[r++]=224|t>>>12,e[r++]=128|t>>>6&63,e[r++]=128|t&63):(e[r++]=240|t>>>18,e[r++]=128|t>>>12&63,e[r++]=128|t>>>6&63,e[r++]=128|t&63);return e},M1=(i,e)=>{if(e<65534&&i.subarray&&b0)return String.fromCharCode.apply(null,i.length===e?i:i.subarray(0,e));let t="";for(let n=0;n<e;n++)t+=String.fromCharCode(i[n]);return t},w1=(i,e)=>{let t=e||i.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(i.subarray(0,e));let n,s,r=new Array(t*2);for(s=0,n=0;n<t;){let a=i[n++];if(a<128){r[s++]=a;continue}let o=La[a];if(o>4){r[s++]=65533,n+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&n<t;)a=a<<6|i[n++]&63,o--;if(o>1){r[s++]=65533;continue}a<65536?r[s++]=a:(a-=65536,r[s++]=55296|a>>10&1023,r[s++]=56320|a&1023)}return M1(r,s)},E1=(i,e)=>{e=e||i.length,e>i.length&&(e=i.length);let t=e-1;for(;t>=0&&(i[t]&192)===128;)t--;return t<0||t===0?e:t+La[i[t]]>e?t:e},Da={string2buf:b1,buf2string:w1,utf8border:E1};function T1(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var M0=T1,w0=Object.prototype.toString,{Z_NO_FLUSH:A1,Z_SYNC_FLUSH:R1,Z_FULL_FLUSH:C1,Z_FINISH:I1,Z_OK:_c,Z_STREAM_END:P1,Z_DEFAULT_COMPRESSION:L1,Z_DEFAULT_STRATEGY:D1,Z_DEFLATED:N1}=vr;function Oa(i){this.options=vc.assign({level:L1,method:N1,chunkSize:16384,windowBits:15,memLevel:8,strategy:D1},i||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new M0,this.strm.avail_out=0;let t=Ea.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==_c)throw new Error(bs[t]);if(e.header&&Ea.deflateSetHeader(this.strm,e.header),e.dictionary){let n;if(typeof e.dictionary=="string"?n=Da.string2buf(e.dictionary):w0.call(e.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(e.dictionary):n=e.dictionary,t=Ea.deflateSetDictionary(this.strm,n),t!==_c)throw new Error(bs[t]);this._dict_set=!0}}Oa.prototype.push=function(i,e){let t=this.strm,n=this.options.chunkSize,s,r;if(this.ended)return!1;for(e===~~e?r=e:r=e===!0?I1:A1,typeof i=="string"?t.input=Da.string2buf(i):w0.call(i)==="[object ArrayBuffer]"?t.input=new Uint8Array(i):t.input=i,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(n),t.next_out=0,t.avail_out=n),(r===R1||r===C1)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(s=Ea.deflate(t,r),s===P1)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),s=Ea.deflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===_c;if(t.avail_out===0){this.onData(t.output);continue}if(r>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Oa.prototype.onData=function(i){this.chunks.push(i)};Oa.prototype.onEnd=function(i){i===_c&&(this.result=vc.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function cd(i,e){let t=new Oa(e);if(t.push(i,!0),t.err)throw t.msg||bs[t.err];return t.result}function U1(i,e){return e=e||{},e.raw=!0,cd(i,e)}function F1(i,e){return e=e||{},e.gzip=!0,cd(i,e)}var O1=Oa,B1=cd,k1=U1,z1=F1,H1=vr,V1={Deflate:O1,deflate:B1,deflateRaw:k1,gzip:z1,constants:H1},uc=16209,G1=16191,W1=function(e,t){let n,s,r,a,o,c,l,h,d,u,f,g,S,m,p,b,A,_,v,M,T,y,w,R,C=e.state;n=e.next_in,w=e.input,s=n+(e.avail_in-5),r=e.next_out,R=e.output,a=r-(t-e.avail_out),o=r+(e.avail_out-257),c=C.dmax,l=C.wsize,h=C.whave,d=C.wnext,u=C.window,f=C.hold,g=C.bits,S=C.lencode,m=C.distcode,p=(1<<C.lenbits)-1,b=(1<<C.distbits)-1;e:do{g<15&&(f+=w[n++]<<g,g+=8,f+=w[n++]<<g,g+=8),A=S[f&p];t:for(;;){if(_=A>>>24,f>>>=_,g-=_,_=A>>>16&255,_===0)R[r++]=A&65535;else if(_&16){v=A&65535,_&=15,_&&(g<_&&(f+=w[n++]<<g,g+=8),v+=f&(1<<_)-1,f>>>=_,g-=_),g<15&&(f+=w[n++]<<g,g+=8,f+=w[n++]<<g,g+=8),A=m[f&b];i:for(;;){if(_=A>>>24,f>>>=_,g-=_,_=A>>>16&255,_&16){if(M=A&65535,_&=15,g<_&&(f+=w[n++]<<g,g+=8,g<_&&(f+=w[n++]<<g,g+=8)),M+=f&(1<<_)-1,M>c){e.msg="invalid distance too far back",C.mode=uc;break e}if(f>>>=_,g-=_,_=r-a,M>_){if(_=M-_,_>h&&C.sane){e.msg="invalid distance too far back",C.mode=uc;break e}if(T=0,y=u,d===0){if(T+=l-_,_<v){v-=_;do R[r++]=u[T++];while(--_);T=r-M,y=R}}else if(d<_){if(T+=l+d-_,_-=d,_<v){v-=_;do R[r++]=u[T++];while(--_);if(T=0,d<v){_=d,v-=_;do R[r++]=u[T++];while(--_);T=r-M,y=R}}}else if(T+=d-_,_<v){v-=_;do R[r++]=u[T++];while(--_);T=r-M,y=R}for(;v>2;)R[r++]=y[T++],R[r++]=y[T++],R[r++]=y[T++],v-=3;v&&(R[r++]=y[T++],v>1&&(R[r++]=y[T++]))}else{T=r-M;do R[r++]=R[T++],R[r++]=R[T++],R[r++]=R[T++],v-=3;while(v>2);v&&(R[r++]=R[T++],v>1&&(R[r++]=R[T++]))}}else if((_&64)===0){A=m[(A&65535)+(f&(1<<_)-1)];continue i}else{e.msg="invalid distance code",C.mode=uc;break e}break}}else if((_&64)===0){A=S[(A&65535)+(f&(1<<_)-1)];continue t}else if(_&32){C.mode=G1;break e}else{e.msg="invalid literal/length code",C.mode=uc;break e}break}}while(n<s&&r<o);v=g>>3,n-=v,g-=v<<3,f&=(1<<g)-1,e.next_in=n,e.next_out=r,e.avail_in=n<s?5+(s-n):5-(n-s),e.avail_out=r<o?257+(o-r):257-(r-o),C.hold=f,C.bits=g},mr=15,Tm=852,Am=592,Rm=0,Hu=1,Cm=2,X1=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Y1=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),q1=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Z1=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),K1=(i,e,t,n,s,r,a,o)=>{let c=o.bits,l=0,h=0,d=0,u=0,f=0,g=0,S=0,m=0,p=0,b=0,A,_,v,M,T,y=null,w,R=new Uint16Array(mr+1),C=new Uint16Array(mr+1),L=null,O,D,B;for(l=0;l<=mr;l++)R[l]=0;for(h=0;h<n;h++)R[e[t+h]]++;for(f=c,u=mr;u>=1&&R[u]===0;u--);if(f>u&&(f=u),u===0)return s[r++]=1<<24|64<<16|0,s[r++]=1<<24|64<<16|0,o.bits=1,0;for(d=1;d<u&&R[d]===0;d++);for(f<d&&(f=d),m=1,l=1;l<=mr;l++)if(m<<=1,m-=R[l],m<0)return-1;if(m>0&&(i===Rm||u!==1))return-1;for(C[1]=0,l=1;l<mr;l++)C[l+1]=C[l]+R[l];for(h=0;h<n;h++)e[t+h]!==0&&(a[C[e[t+h]]++]=h);if(i===Rm?(y=L=a,w=20):i===Hu?(y=X1,L=Y1,w=257):(y=q1,L=Z1,w=0),b=0,h=0,l=d,T=r,g=f,S=0,v=-1,p=1<<f,M=p-1,i===Hu&&p>Tm||i===Cm&&p>Am)return 1;for(;;){O=l-S,a[h]+1<w?(D=0,B=a[h]):a[h]>=w?(D=L[a[h]-w],B=y[a[h]-w]):(D=96,B=0),A=1<<l-S,_=1<<g,d=_;do _-=A,s[T+(b>>S)+_]=O<<24|D<<16|B|0;while(_!==0);for(A=1<<l-1;b&A;)A>>=1;if(A!==0?(b&=A-1,b+=A):b=0,h++,--R[l]===0){if(l===u)break;l=e[t+a[h]]}if(l>f&&(b&M)!==v){for(S===0&&(S=f),T+=d,g=l-S,m=1<<g;g+S<u&&(m-=R[g+S],!(m<=0));)g++,m<<=1;if(p+=1<<g,i===Hu&&p>Tm||i===Cm&&p>Am)return 1;v=b&M,s[v]=f<<24|g<<16|T-r|0}}return b!==0&&(s[T+b]=l-S<<24|64<<16|0),o.bits=f,0},Ta=K1,j1=0,E0=1,T0=2,{Z_FINISH:Im,Z_BLOCK:$1,Z_TREES:dc,Z_OK:ws,Z_STREAM_END:J1,Z_NEED_DICT:Q1,Z_STREAM_ERROR:Pi,Z_DATA_ERROR:A0,Z_MEM_ERROR:R0,Z_BUF_ERROR:ew,Z_DEFLATED:Pm}=vr,Sc=16180,Lm=16181,Dm=16182,Nm=16183,Um=16184,Fm=16185,Om=16186,Bm=16187,km=16188,zm=16189,yc=16190,Sn=16191,Vu=16192,Hm=16193,Gu=16194,Vm=16195,Gm=16196,Wm=16197,Xm=16198,fc=16199,pc=16200,Ym=16201,qm=16202,Zm=16203,Km=16204,jm=16205,Wu=16206,$m=16207,Jm=16208,St=16209,C0=16210,I0=16211,tw=852,iw=592,nw=15,sw=nw,Qm=i=>(i>>>24&255)+(i>>>8&65280)+((i&65280)<<8)+((i&255)<<24);function rw(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}var Es=i=>{if(!i)return 1;let e=i.state;return!e||e.strm!==i||e.mode<Sc||e.mode>I0?1:0},P0=i=>{if(Es(i))return Pi;let e=i.state;return i.total_in=i.total_out=e.total=0,i.msg="",e.wrap&&(i.adler=e.wrap&1),e.mode=Sc,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(tw),e.distcode=e.distdyn=new Int32Array(iw),e.sane=1,e.back=-1,ws},L0=i=>{if(Es(i))return Pi;let e=i.state;return e.wsize=0,e.whave=0,e.wnext=0,P0(i)},D0=(i,e)=>{let t;if(Es(i))return Pi;let n=i.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Pi:(n.window!==null&&n.wbits!==e&&(n.window=null),n.wrap=t,n.wbits=e,L0(i))},N0=(i,e)=>{if(!i)return Pi;let t=new rw;i.state=t,t.strm=i,t.window=null,t.mode=Sc;let n=D0(i,e);return n!==ws&&(i.state=null),n},aw=i=>N0(i,sw),e0=!0,Xu,Yu,ow=i=>{if(e0){Xu=new Int32Array(512),Yu=new Int32Array(32);let e=0;for(;e<144;)i.lens[e++]=8;for(;e<256;)i.lens[e++]=9;for(;e<280;)i.lens[e++]=7;for(;e<288;)i.lens[e++]=8;for(Ta(E0,i.lens,0,288,Xu,0,i.work,{bits:9}),e=0;e<32;)i.lens[e++]=5;Ta(T0,i.lens,0,32,Yu,0,i.work,{bits:5}),e0=!1}i.lencode=Xu,i.lenbits=9,i.distcode=Yu,i.distbits=5},U0=(i,e,t,n)=>{let s,r=i.state;return r.window===null&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),n>=r.wsize?(r.window.set(e.subarray(t-r.wsize,t),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>n&&(s=n),r.window.set(e.subarray(t-n,t-n+s),r.wnext),n-=s,n?(r.window.set(e.subarray(t-n,t),0),r.wnext=n,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},lw=(i,e)=>{let t,n,s,r,a,o,c,l,h,d,u,f,g,S,m=0,p,b,A,_,v,M,T,y,w=new Uint8Array(4),R,C,L=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Es(i)||!i.output||!i.input&&i.avail_in!==0)return Pi;t=i.state,t.mode===Sn&&(t.mode=Vu),a=i.next_out,s=i.output,c=i.avail_out,r=i.next_in,n=i.input,o=i.avail_in,l=t.hold,h=t.bits,d=o,u=c,y=ws;e:for(;;)switch(t.mode){case Sc:if(t.wrap===0){t.mode=Vu;break}for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,w[0]=l&255,w[1]=l>>>8&255,t.check=Vt(t.check,w,2,0),l=0,h=0,t.mode=Lm;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){i.msg="incorrect header check",t.mode=St;break}if((l&15)!==Pm){i.msg="unknown compression method",t.mode=St;break}if(l>>>=4,h-=4,T=(l&15)+8,t.wbits===0&&(t.wbits=T),T>15||T>t.wbits){i.msg="invalid window size",t.mode=St;break}t.dmax=1<<t.wbits,t.flags=0,i.adler=t.check=1,t.mode=l&512?zm:Sn,l=0,h=0;break;case Lm:for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.flags=l,(t.flags&255)!==Pm){i.msg="unknown compression method",t.mode=St;break}if(t.flags&57344){i.msg="unknown header flags set",t.mode=St;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Vt(t.check,w,2,0)),l=0,h=0,t.mode=Dm;case Dm:for(;h<32;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,w[2]=l>>>16&255,w[3]=l>>>24&255,t.check=Vt(t.check,w,4,0)),l=0,h=0,t.mode=Nm;case Nm:for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Vt(t.check,w,2,0)),l=0,h=0,t.mode=Um;case Um:if(t.flags&1024){for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(w[0]=l&255,w[1]=l>>>8&255,t.check=Vt(t.check,w,2,0)),l=0,h=0}else t.head&&(t.head.extra=null);t.mode=Fm;case Fm:if(t.flags&1024&&(f=t.length,f>o&&(f=o),f&&(t.head&&(T=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(n.subarray(r,r+f),T)),t.flags&512&&t.wrap&4&&(t.check=Vt(t.check,n,f,r)),o-=f,r+=f,t.length-=f),t.length))break e;t.length=0,t.mode=Om;case Om:if(t.flags&2048){if(o===0)break e;f=0;do T=n[r+f++],t.head&&T&&t.length<65536&&(t.head.name+=String.fromCharCode(T));while(T&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Vt(t.check,n,f,r)),o-=f,r+=f,T)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Bm;case Bm:if(t.flags&4096){if(o===0)break e;f=0;do T=n[r+f++],t.head&&T&&t.length<65536&&(t.head.comment+=String.fromCharCode(T));while(T&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Vt(t.check,n,f,r)),o-=f,r+=f,T)break e}else t.head&&(t.head.comment=null);t.mode=km;case km:if(t.flags&512){for(;h<16;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.wrap&4&&l!==(t.check&65535)){i.msg="header crc mismatch",t.mode=St;break}l=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),i.adler=t.check=0,t.mode=Sn;break;case zm:for(;h<32;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}i.adler=t.check=Qm(l),l=0,h=0,t.mode=yc;case yc:if(t.havedict===0)return i.next_out=a,i.avail_out=c,i.next_in=r,i.avail_in=o,t.hold=l,t.bits=h,Q1;i.adler=t.check=1,t.mode=Sn;case Sn:if(e===$1||e===dc)break e;case Vu:if(t.last){l>>>=h&7,h-=h&7,t.mode=Wu;break}for(;h<3;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}switch(t.last=l&1,l>>>=1,h-=1,l&3){case 0:t.mode=Hm;break;case 1:if(ow(t),t.mode=fc,e===dc){l>>>=2,h-=2;break e}break;case 2:t.mode=Gm;break;case 3:i.msg="invalid block type",t.mode=St}l>>>=2,h-=2;break;case Hm:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){i.msg="invalid stored block lengths",t.mode=St;break}if(t.length=l&65535,l=0,h=0,t.mode=Gu,e===dc)break e;case Gu:t.mode=Vm;case Vm:if(f=t.length,f){if(f>o&&(f=o),f>c&&(f=c),f===0)break e;s.set(n.subarray(r,r+f),a),o-=f,r+=f,c-=f,a+=f,t.length-=f;break}t.mode=Sn;break;case Gm:for(;h<14;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.nlen=(l&31)+257,l>>>=5,h-=5,t.ndist=(l&31)+1,l>>>=5,h-=5,t.ncode=(l&15)+4,l>>>=4,h-=4,t.nlen>286||t.ndist>30){i.msg="too many length or distance symbols",t.mode=St;break}t.have=0,t.mode=Wm;case Wm:for(;t.have<t.ncode;){for(;h<3;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.lens[L[t.have++]]=l&7,l>>>=3,h-=3}for(;t.have<19;)t.lens[L[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,R={bits:t.lenbits},y=Ta(j1,t.lens,0,19,t.lencode,0,t.work,R),t.lenbits=R.bits,y){i.msg="invalid code lengths set",t.mode=St;break}t.have=0,t.mode=Xm;case Xm:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,b=m>>>16&255,A=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(A<16)l>>>=p,h-=p,t.lens[t.have++]=A;else{if(A===16){for(C=p+2;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(l>>>=p,h-=p,t.have===0){i.msg="invalid bit length repeat",t.mode=St;break}T=t.lens[t.have-1],f=3+(l&3),l>>>=2,h-=2}else if(A===17){for(C=p+3;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}l>>>=p,h-=p,T=0,f=3+(l&7),l>>>=3,h-=3}else{for(C=p+7;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}l>>>=p,h-=p,T=0,f=11+(l&127),l>>>=7,h-=7}if(t.have+f>t.nlen+t.ndist){i.msg="invalid bit length repeat",t.mode=St;break}for(;f--;)t.lens[t.have++]=T}}if(t.mode===St)break;if(t.lens[256]===0){i.msg="invalid code -- missing end-of-block",t.mode=St;break}if(t.lenbits=9,R={bits:t.lenbits},y=Ta(E0,t.lens,0,t.nlen,t.lencode,0,t.work,R),t.lenbits=R.bits,y){i.msg="invalid literal/lengths set",t.mode=St;break}if(t.distbits=6,t.distcode=t.distdyn,R={bits:t.distbits},y=Ta(T0,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,R),t.distbits=R.bits,y){i.msg="invalid distances set",t.mode=St;break}if(t.mode=fc,e===dc)break e;case fc:t.mode=pc;case pc:if(o>=6&&c>=258){i.next_out=a,i.avail_out=c,i.next_in=r,i.avail_in=o,t.hold=l,t.bits=h,W1(i,u),a=i.next_out,s=i.output,c=i.avail_out,r=i.next_in,n=i.input,o=i.avail_in,l=t.hold,h=t.bits,t.mode===Sn&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,b=m>>>16&255,A=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(b&&(b&240)===0){for(_=p,v=b,M=A;m=t.lencode[M+((l&(1<<_+v)-1)>>_)],p=m>>>24,b=m>>>16&255,A=m&65535,!(_+p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}l>>>=_,h-=_,t.back+=_}if(l>>>=p,h-=p,t.back+=p,t.length=A,b===0){t.mode=jm;break}if(b&32){t.back=-1,t.mode=Sn;break}if(b&64){i.msg="invalid literal/length code",t.mode=St;break}t.extra=b&15,t.mode=Ym;case Ym:if(t.extra){for(C=t.extra;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=qm;case qm:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,b=m>>>16&255,A=m&65535,!(p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if((b&240)===0){for(_=p,v=b,M=A;m=t.distcode[M+((l&(1<<_+v)-1)>>_)],p=m>>>24,b=m>>>16&255,A=m&65535,!(_+p<=h);){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}l>>>=_,h-=_,t.back+=_}if(l>>>=p,h-=p,t.back+=p,b&64){i.msg="invalid distance code",t.mode=St;break}t.offset=A,t.extra=b&15,t.mode=Zm;case Zm:if(t.extra){for(C=t.extra;h<C;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){i.msg="invalid distance too far back",t.mode=St;break}t.mode=Km;case Km:if(c===0)break e;if(f=u-c,t.offset>f){if(f=t.offset-f,f>t.whave&&t.sane){i.msg="invalid distance too far back",t.mode=St;break}f>t.wnext?(f-=t.wnext,g=t.wsize-f):g=t.wnext-f,f>t.length&&(f=t.length),S=t.window}else S=s,g=a-t.offset,f=t.length;f>c&&(f=c),c-=f,t.length-=f;do s[a++]=S[g++];while(--f);t.length===0&&(t.mode=pc);break;case jm:if(c===0)break e;s[a++]=t.length,c--,t.mode=pc;break;case Wu:if(t.wrap){for(;h<32;){if(o===0)break e;o--,l|=n[r++]<<h,h+=8}if(u-=c,i.total_out+=u,t.total+=u,t.wrap&4&&u&&(i.adler=t.check=t.flags?Vt(t.check,s,u,a-u):Pa(t.check,s,u,a-u)),u=c,t.wrap&4&&(t.flags?l:Qm(l))!==t.check){i.msg="incorrect data check",t.mode=St;break}l=0,h=0}t.mode=$m;case $m:if(t.wrap&&t.flags){for(;h<32;){if(o===0)break e;o--,l+=n[r++]<<h,h+=8}if(t.wrap&4&&l!==(t.total&4294967295)){i.msg="incorrect length check",t.mode=St;break}l=0,h=0}t.mode=Jm;case Jm:y=J1;break e;case St:y=A0;break e;case C0:return R0;case I0:default:return Pi}return i.next_out=a,i.avail_out=c,i.next_in=r,i.avail_in=o,t.hold=l,t.bits=h,(t.wsize||u!==i.avail_out&&t.mode<St&&(t.mode<Wu||e!==Im))&&U0(i,i.output,i.next_out,u-i.avail_out),d-=i.avail_in,u-=i.avail_out,i.total_in+=d,i.total_out+=u,t.total+=u,t.wrap&4&&u&&(i.adler=t.check=t.flags?Vt(t.check,s,u,i.next_out-u):Pa(t.check,s,u,i.next_out-u)),i.data_type=t.bits+(t.last?64:0)+(t.mode===Sn?128:0)+(t.mode===fc||t.mode===Gu?256:0),(d===0&&u===0||e===Im)&&y===ws&&(y=ew),y},cw=i=>{if(Es(i))return Pi;let e=i.state;return e.window&&(e.window=null),i.state=null,ws},hw=(i,e)=>{if(Es(i))return Pi;let t=i.state;return(t.wrap&2)===0?Pi:(t.head=e,e.done=!1,ws)},uw=(i,e)=>{let t=e.length,n,s,r;return Es(i)||(n=i.state,n.wrap!==0&&n.mode!==yc)?Pi:n.mode===yc&&(s=1,s=Pa(s,e,t,0),s!==n.check)?A0:(r=U0(i,e,t,t),r?(n.mode=C0,R0):(n.havedict=1,ws))},dw=L0,fw=D0,pw=P0,mw=aw,gw=N0,_w=lw,yw=cw,xw=hw,vw=uw,Sw="pako inflate (from Nodeca project)",Mn={inflateReset:dw,inflateReset2:fw,inflateResetKeep:pw,inflateInit:mw,inflateInit2:gw,inflate:_w,inflateEnd:yw,inflateGetHeader:xw,inflateSetDictionary:vw,inflateInfo:Sw};function bw(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Mw=bw,F0=Object.prototype.toString,{Z_NO_FLUSH:ww,Z_FINISH:Ew,Z_OK:Na,Z_STREAM_END:qu,Z_NEED_DICT:Zu,Z_STREAM_ERROR:Tw,Z_DATA_ERROR:t0,Z_MEM_ERROR:Aw}=vr;function Ba(i){this.options=vc.assign({chunkSize:1024*64,windowBits:15,to:""},i||{});let e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(i&&i.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15)===0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new M0,this.strm.avail_out=0;let t=Mn.inflateInit2(this.strm,e.windowBits);if(t!==Na)throw new Error(bs[t]);if(this.header=new Mw,Mn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Da.string2buf(e.dictionary):F0.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=Mn.inflateSetDictionary(this.strm,e.dictionary),t!==Na)))throw new Error(bs[t])}Ba.prototype.push=function(i,e){let t=this.strm,n=this.options.chunkSize,s=this.options.dictionary,r,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Ew:ww,F0.call(i)==="[object ArrayBuffer]"?t.input=new Uint8Array(i):t.input=i,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(n),t.next_out=0,t.avail_out=n),r=Mn.inflate(t,a),r===Zu&&s&&(r=Mn.inflateSetDictionary(t,s),r===Na?r=Mn.inflate(t,a):r===t0&&(r=Zu));t.avail_in>0&&r===qu&&t.state.wrap>0&&i[t.next_in]!==0;)Mn.inflateReset(t),r=Mn.inflate(t,a);switch(r){case Tw:case t0:case Zu:case Aw:return this.onEnd(r),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||r===qu))if(this.options.to==="string"){let c=Da.utf8border(t.output,t.next_out),l=t.next_out-c,h=Da.buf2string(t.output,c);t.next_out=l,t.avail_out=n-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(r===Na&&o===0)){if(r===qu)return r=Mn.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Ba.prototype.onData=function(i){this.chunks.push(i)};Ba.prototype.onEnd=function(i){i===Na&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=vc.flattenChunks(this.chunks)),this.chunks=[],this.err=i,this.msg=this.strm.msg};function hd(i,e){let t=new Ba(e);if(t.push(i),t.err)throw t.msg||bs[t.err];return t.result}function Rw(i,e){return e=e||{},e.raw=!0,hd(i,e)}var Cw=Ba,Iw=hd,Pw=Rw,Lw=hd,Dw=vr,Nw={Inflate:Cw,inflate:Iw,inflateRaw:Pw,ungzip:Lw,constants:Dw},{Deflate:TC,deflate:AC,deflateRaw:RC,gzip:CC}=V1,{Inflate:Uw,inflate:IC,inflateRaw:PC,ungzip:LC}=Nw;var O0=Uw;var Mr="sky-paint-sdf-q16-xdelta-zlib-v1",ud="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Fw(i,e){if(typeof i!="string"||!i.length||i.length%4||i.length>Math.ceil(e/3)*4)throw Error("Invalid compressed field length");let t=i.endsWith("==")?2:i.endsWith("=")?1:0,n=i.length/4*3-t;if(n>e)throw Error("Compressed field exceeds its bounded input");let s=new Uint8Array(n),r=0;for(let a=0;a<i.length;a+=4){let o=Array.from(i.slice(a,a+4),c=>ud.indexOf(c));for(let c=0;c<4;c++)if(o[c]<0&&!(a+4===i.length&&c>=4-t&&i[a+c]==="="))throw Error("Invalid compressed field base64");s[r++]=o[0]<<2|o[1]>>>4,r<n&&(s[r++]=(o[1]&15)<<4|o[2]>>>2),r<n&&(s[r++]=(o[2]&3)<<6|o[3])}if(t===2&&ud.indexOf(i.at(-3))&15||t===1&&ud.indexOf(i.at(-2))&3)throw Error("Noncanonical compressed field padding");return s}function B0(i){if(!Zn.includes(i?.resolution))throw Error("Compressed field resolution must be49 or65");let e=i.resolution**3*2,t=Fw(i.data,e+1024),n=new Uint8Array(e),s=0,r=new O0({windowBits:15,chunkSize:16384});if(r.onData=l=>{if(s+l.length>e)throw Error("Compressed field expands beyond its author grid");n.set(l,s),s+=l.length},!r.push(t,!0)||r.err||!r.ended||s!==e||r.strm.avail_in!==0||r.strm.total_in!==t.length)throw Error("Invalid, truncated or trailing compressed field data");let o=new Int16Array(e/2),c=0;for(let l=0;l<o.length;l++)l%i.resolution===0&&(c=0),o[l]=c+(n[l*2]|n[l*2+1]<<8),c=o[l];return o}var bc=i=>({sculptFields:i.version>=24?8:3,bytes:i.version>=24?4194304:1048576});var za="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Mc=Uint8Array.from(za,i=>i.charCodeAt(0)),ka=new Int16Array(128).fill(-1);for(let i=0;i<za.length;i++)ka[za.charCodeAt(i)]=i;var k0="sky-paint-sdf-q16-v1";function dd(i,e){if(!(i instanceof Int16Array)||i.length!==e**3)throw Error(`Field requires ${e}\xB3 signed16 samples`);for(let t=0;t<e;t++)for(let n=0;n<e;n++)for(let s=0;s<e;s++){let r=i[s+n*e+t*e*e];if(r===-32768||(s===0||n===0||t===0||s===e-1||n===e-1||t===e-1)&&r<=0)throw Error("Field samples require positive boundaries and quantization within \xB132767")}}function wc(i){if(!Zn.includes(i.n))throw Error("Field resolution must be 49 or 65");ys(i.bounds),dd(i.values,i.n);let e=new Uint8Array(i.n**3*2);for(let r=0;r<i.values.length;r++){let a=i.values[r]&65535;e[r*2]=a&255,e[r*2+1]=a>>>8}let t=new Uint8Array(Math.ceil(e.length/3)*4),n=0;for(let r=0;r<e.length;r+=3){let a=e[r],o=e[r+1]??0,c=e[r+2]??0;t[n++]=Mc[a>>>2],t[n++]=Mc[(a&3)<<4|o>>>4],t[n++]=r+1<e.length?Mc[(o&15)<<2|c>>>6]:61,t[n++]=r+2<e.length?Mc[c&63]:61}let s=new TextDecoder("utf-8",{fatal:!0}).decode(t);return{format:k0,resolution:i.n,bounds:structuredClone(i.bounds),data:s}}function nn(i){if(i?.format===Mr){if(typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==4||!Zn.includes(i.resolution))throw Error("Malformed compressed sculpt field");ys(i.bounds);let r=B0(i);return dd(r,i.resolution),{n:i.resolution,bounds:structuredClone(i.bounds),values:r}}if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==4||i.format!==k0||!Zn.includes(i.resolution)||typeof i.data!="string")throw Error("Malformed sculpt field");ys(i.bounds);let e=i.resolution**3*2;if(i.data.length!==Math.ceil(e/3)*4||!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i.data))throw Error("Incorrect field encoding or length");if(e%3===2?!i.data.endsWith("=")||i.data.endsWith("==")||(za.indexOf(i.data.at(-2))&3)!==0:!i.data.endsWith("==")||(za.indexOf(i.data.at(-3))&15)!==0)throw Error("Noncanonical field encoding");let t=new Uint8Array(e),n=0;for(let r=0;r<i.data.length;r+=4){let a=ka[i.data.charCodeAt(r)],o=ka[i.data.charCodeAt(r+1)],c=ka[i.data.charCodeAt(r+2)],l=ka[i.data.charCodeAt(r+3)];t[n++]=a<<2|o>>>4,n<e&&(t[n++]=(o&15)<<4|c>>>2),n<e&&(t[n++]=(c&3)<<6|l)}let s=new Int16Array(i.resolution**3);for(let r=0;r<s.length;r++)s[r]=(t[r*2]|t[r*2+1]<<8)<<16>>16;return dd(s,i.resolution),{n:i.resolution,bounds:structuredClone(i.bounds),values:s}}function Ts(i,e=0,t){if(typeof e!="number"||!Number.isFinite(e)||e<0||e>1)throw Error("Field support threshold must be between0 and1");let{n,bounds:s,values:r}=t??nn(i),a=[n,n,n],o=[-1,-1,-1],c=e*vn;for(let h=0;h<n;h++)for(let d=0;d<n;d++)for(let u=0;u<n;u++)r[u+d*n+h*n*n]<=c&&(a[0]=Math.min(a[0],u),a[1]=Math.min(a[1],d),a[2]=Math.min(a[2],h),o[0]=Math.max(o[0],u),o[1]=Math.max(o[1],d),o[2]=Math.max(o[2],h));if(o[0]<0){let h=s.lo.map((d,u)=>(d+s.hi[u])/2);return{lo:h.map(d=>d-.05),hi:h.map(d=>d+.05),empty:!0}}let l=s.hi.map((h,d)=>(h-s.lo[d])/(n-1));return{lo:a.map((h,d)=>s.lo[d]+h*l[d]-(h===0?Math.max(l[d],e):l[d])),hi:o.map((h,d)=>s.lo[d]+h*l[d]+(h===n-1?Math.max(l[d],e):l[d]))}}var es=class{constructor(e){this.entries=new Map(e?.entries??[])}key(e,t){return JSON.stringify([e.n,e.bounds,t])}get(e,t){let n=this.key(e,t),s=this.entries.get(n)??va(e,t);for(this.entries.delete(n),this.entries.set(n,s);this.entries.size>lc;)this.entries.delete(this.entries.keys().next().value);return s}retain(e,t){let n=new Set(t.map(s=>this.key(e,s)));for(let s of this.entries.keys())n.has(s)||this.entries.delete(s)}info(){return{snapshots:this.entries.size,bytes:[...this.entries.values()].reduce((e,t)=>e+t.values.byteLength,0)}}};var Ow=4,Bw=64,kw=2048,zi="sky-paint-sculpt-program-v1";function fd(i,e,t){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(n=>!Object.hasOwn(i,n)))throw Error(`Malformed sculpt ${t}`)}function z0(i,e){if(!Number.isSafeInteger(i)||i<1||i>1e6||e.has(i))throw Error("Sculpt IDs must be unique positive integers");e.add(i)}var pd=(i,e,t)=>typeof i=="number"&&Number.isFinite(i)&&i>=e&&i<=t;function As(i,e=23){if(fd(i,["format","base","layers",...e>=19&&Object.hasOwn(i??{},"protection")?["protection"]:[]],"program"),i.format!==zi)throw Error("Unsupported sculpt program");if(i.base?.format!=="sky-paint-sdf-q16-v1"&&!(e>=23&&i.base?.format===Mr))throw Error("Sculpt program requires one flat base field");if(nn(i.base),!Array.isArray(i.layers)||i.layers.length>Ow)throw Error("Sculpt supports at most four layers");let t=new Set,n=new Set,s=0,r=0;for(let a of i.layers){if(fd(a,["id","name","enabled","strokes"],"layer"),z0(a.id,t),typeof a.name!="string"||!a.name.trim()||a.name.length>80||typeof a.enabled!="boolean"||!Array.isArray(a.strokes))throw Error("Invalid sculpt layer properties");for(let o of a.strokes){let c=_s.includes(o?.mode),l=Object.hasOwn(o??{},"symmetry");if(fd(o,["id","mode","radius","gain","centers",...e>=17&&c?["plane"]:[],...e>=18&&l?["symmetry"]:[],...e>=19&&Object.hasOwn(o??{},"protectionId")?["protectionId"]:[]],"stroke"),z0(o.id,n),!["add","carve","smooth",...e>=15?Ru:[],...e>=17?_s:[]].includes(o.mode)||!pd(o.radius,.08,1.5)||!pd(o.gain,0,1)||!Array.isArray(o.centers)||!o.centers.length)throw Error("Invalid sculpt stroke properties");l&&Du(o.symmetry);let h=o.centers.length*xa(o);if(s+h>kw||r+1>Bw)throw Error("Sculpt layer edit budget reached; flatten explicitly or remove strokes");for(let d of o.centers)if(!Array.isArray(d)||d.length!==3||d.some(u=>!pd(u,-24,24)))throw Error("Sculpt centers require three finite rest coordinates within \xB124");c&&nc(o.plane),s+=h,r++}}return gm(i),structuredClone(i)}function md(i){return i.layers.filter(e=>e.enabled).flatMap(e=>e.strokes.flatMap(t=>t.centers.map(n=>({mode:t.mode,radius:t.radius,gain:t.gain,center:n,...t.plane?{plane:t.plane}:{},...t.symmetry?{symmetry:t.symmetry}:{},...Object.hasOwn(t,"protectionId")?{protection:pm(i,t.protectionId)}:{}}))))}function H0(i){let e=As(i),t=new es,n=new Map,s=nn(e.base);for(let r of md(e))r.protection&&!n.has(r.protection.id)&&n.set(r.protection.id,t.get(s,r.protection)),s=cc(s,r.center,r.radius,r.gain,r.mode,r.plane,r.symmetry,r.protection?n.get(r.protection.id):void 0);return wc(s)}var zw=3,Hw=10,Ha=128,Vw=(i,e,t)=>typeof i=="number"&&Number.isFinite(i)&&i>=e&&i<=t;function wn(i,e){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==e.length||e.some(t=>!Object.hasOwn(i,t)))throw Error("Malformed cloud recipe fields")}function wi(i,e,t){if(!Vw(i,e,t))throw Error(`Recipe number must be between ${e} and ${t}`)}function wr(i){if(typeof i!="boolean")throw Error("Recipe enabled flag must be boolean")}function Gw(i=2){let e={strokes:[],detail:{enabled:!0,seed:4831,count:2,scale:.48},billow:{enabled:!0,strength:.12},erosion:{enabled:!0},base:{enabled:!1,height:-.6},profile:{feather:.18}};return i>=3&&(e.structure={enabled:!0,spread:1,upBias:.15,intersections:.6},e.sculpt=[],Object.assign(e.profile,{edgeGamma:1,interiorVariation:1})),i>=5&&(e.masks=[],e.masses=[]),i>=6&&(e.layers=[]),i>=7&&(e.massMode="ordered",e.geometryLayers=[{id:1,name:"Shape 1",enabled:!0}]),i>=8&&(e.character=ga()),i>=9&&(e.field=null),e}function Va(i,e=2){if(wn(i,["strokes","detail","billow","erosion","base","profile",...e>=3?["structure","sculpt"]:[],...e>=5?["masks","masses"]:[],...e>=6?["layers"]:[],...e>=7?["massMode","geometryLayers"]:[],...e>=8?["character"]:[],...e>=9?["field"]:[]]),!Array.isArray(i.strokes)||i.strokes.length>zw)throw Error("Recipe supports at most three strokes");let t=new Set;for(let n of i.strokes){if(wn(n,["id","enabled","points"]),wr(n.enabled),!Number.isSafeInteger(n.id)||n.id<1||n.id>1e6||t.has(n.id))throw Error("Stroke IDs must be unique");if(t.add(n.id),!Array.isArray(n.points)||n.points.length<2||n.points.length>Hw)throw Error("Stroke requires 2\u201310 control points");let s=new Set;for(let r of n.points){if(wn(r,["id","position","radius"]),!Number.isSafeInteger(r.id)||r.id<1||r.id>1e6||s.has(r.id))throw Error("Point IDs must be unique within a stroke");if(s.add(r.id),!Array.isArray(r.position)||r.position.length!==3)throw Error("Point requires three coordinates");r.position.forEach(a=>wi(a,-2.5,2.5)),wi(r.radius,.08,.9)}}if(wn(i.detail,["enabled","seed","count","scale"]),wr(i.detail.enabled),wi(i.detail.seed,0,65535),wi(i.detail.count,0,2),wi(i.detail.scale,.2,.75),!Number.isInteger(i.detail.seed)||!Number.isInteger(i.detail.count))throw Error("Detail seed and count must be integers");if(wn(i.billow,["enabled","strength"]),wr(i.billow.enabled),wi(i.billow.strength,0,.3),wn(i.erosion,["enabled"]),wr(i.erosion.enabled),wn(i.base,["enabled","height"]),wr(i.base.enabled),wi(i.base.height,-2.5,2.5),wn(i.profile,["feather",...e>=3?["edgeGamma","interiorVariation"]:[]]),wi(i.profile.feather,.08,.6),e>=3&&(wn(i.structure,["enabled","spread","upBias","intersections"]),wr(i.structure.enabled),wi(i.structure.spread,.6,1.1),wi(i.structure.upBias,-.8,.8),wi(i.structure.intersections,0,1),wi(i.profile.edgeGamma,.5,3),wi(i.profile.interiorVariation,0,1),Bp(i.sculpt,e>=9&&i.field?om:8)),e>=5&&(zp(i.masks,e>=9&&i.field?Pu:8),$p(i.masses,e)),e>=6&&qp(i.layers,e>=9&&i.field?Pu:8,e),e>=7){if(!["grouped","ordered"].includes(i.massMode))throw Error("Invalid mass composition mode");Qp(i.geometryLayers,i.masses)}if(e>=8&&tm(i.character),e>=9&&i.field!==null){if(e<23&&(i.field.base??i.field).format===Mr)throw Error("Compressed field storage requires scene v23");if(e>=11&&i.field.format===zi?As(i.field,e):nn(i.field),e<16&&(i.field?.base??i.field)?.resolution!==49)throw Error("Fine sculpt fields require scenev16");if(i.strokes.length||i.masses.length||i.geometryLayers.length||i.detail.enabled||i.structure.enabled)throw Error("Sculpt field cannot also contain editable parametric geometry or secondary lobes")}return structuredClone(i)}function V0(i,e=2){let t=Gw(e),n={bank:[[[-1.6,0,0],[-.8,.13,0],[0,.05,0],[.8,.1,0],[1.6,-.02,0]]],tower:[[[0,-.85,0],[-.1,-.25,0],[.15,.4,0],[0,1.05,0]]],anvil:[[[-.2,-1,0],[-.1,-.35,0],[0,.35,0]],[[-1.5,.7,0],[-.75,.85,0],[0,.85,0],[.8,.82,0],[1.6,.7,0]]]};if(!n[i])throw Error("Unknown cloud starter");let s={bank:[[.28,.5,.62,.48,.28]],tower:[[.7,.72,.6,.48]],anvil:[[.62,.7,.64],[.3,.55,.7,.55,.3]]};return t.strokes=n[i].map((r,a)=>({id:a+1,enabled:!0,points:r.map((o,c)=>({id:c+1,position:o,radius:s[i][a][c]}))})),t.base.enabled=i==="bank",t.base.height=-.35,Va(t,e)}function Ww(i){let e=i>>>0;return()=>(e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e^=e>>>16,(e>>>0)/4294967296)}function Ga(i,e=!1){let t=[],n=[];for(let r of i.strokes.filter(a=>a.enabled)){for(let a=1;a<r.points.length;a++)t.push({a:r.points[a-1],b:r.points[a],stage:0,strokeId:r.id});if(i.detail.enabled)for(let a of r.points){let o=Ww(i.detail.seed^Math.imul(r.id,104729)^Math.imul(a.id,19349663));for(let c=0;c<i.detail.count;c++){let l=o()*Math.PI*2,h=o()*1.3-.25,d=i.structure?.enabled?Math.max(-1,Math.min(1,h+i.structure.upBias)):h,u=Math.sqrt(1-Math.min(1,d*d)),f=a.radius*i.detail.scale*(.8+o()*.4),g=a.radius*(i.structure?.enabled?i.structure.spread:.8),m={position:a.position.map((p,b)=>p+[Math.cos(l)*u,d,Math.sin(l)*u][b]*g),radius:f};n.push({a:m,b:m,stage:1})}}}let s=t.concat(i.massMode==="ordered"&&!e?[]:Jp(fr(i)));return{segments:s.concat(n,jp(i,t)),primaryCount:s.length}}function G0(i){let e=0,{segments:t}=Ga(i,!0);for(let{a:n,b:s}of t)for(let r of[n,s])e=Math.max(e,Math.hypot(...r.position)+r.radius);return e+.02*Math.max(0,t.length-1)+(i.billow.enabled?i.billow.strength:0)}function Ec(i,e=4){let t=i.recipe?.layers?{...i.recipe,layers:i.recipe.layers.map(({name:n,...s})=>s),...i.recipe.geometryLayers?{geometryLayers:i.recipe.geometryLayers.map(({name:n,...s})=>s)}:{}}:i.recipe;return JSON.stringify([t,i.noiseScale,i.seed,i.displacement,i.smear,i.erosion,e])}function Hi(i,e=4,t=Ts){let n,s,r;if(i.recipe.field){let o=i.recipe.field.format===zi?H0(i.recipe.field):i.recipe.field,c=t(o,e>=2?Au(i.recipe):0);n=[...c.lo],s=[...c.hi],r=e>=2?.04:0}else{let{segments:o,primaryCount:c}=Ga(i.recipe,!0),l=e===0?o.slice(0,c):o;if(!l.length)return{lo:[-.1,-.1,-.1],hi:[.1,.1,.1]};n=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0];for(let{a:h,b:d}of l)for(let u of[h,d])for(let f=0;f<3;f++)n[f]=Math.min(n[f],u.position[f]-u.radius),s[f]=Math.max(s[f],u.position[f]+u.radius);r=.02*Math.max(0,l.length-1)+(e>=2?Au(i.recipe):0)+.04}for(let o=0;o<3;o++)n[o]-=r,s[o]+=r;if(e>=2){let o=Math.abs(i.smear)*Math.max(n[1]**2,s[1]**2);n[0]-=o,s[0]+=o;let c=nm(i);for(let l=0;l<3;l++)n[l]-=c[l],s[l]+=c[l]}let a=kp(i.recipe.sculpt);for(let o=0;o<3;o++)n[o]-=a,s[o]+=a;return{lo:n,hi:s}}function ni(i){return i.shapeScale?i.size.map((e,t)=>e*i.shapeScale[t]):i.size}function W0(i,e){return[0,1,2].every(t=>(i.shapeScale?.[t]??1)===(e?.[t]??1))?i.size:ni(i).map((t,n)=>t/(e?.[n]??1))}function X0(i){return{min:[0,1,2].map(e=>.2/(i.shapeScale?.[e]??1)),max:[0,1,2].map(e=>30/(i.shapeScale?.[e]??1))}}function Y0(i,e){let{min:t,max:n}=X0(i);return e.map((s,r)=>Math.max(t[r],Math.min(n[r],s)))}function q0(i){let e=i.shapeScale;if(!Array.isArray(e)||e.length!==3||Array.from(e).some(s=>typeof s!="number"||!Number.isFinite(s)||s<.2||s>30))throw Error("Applied shape scale requires three finite dimensions from 0.2 to 30");let{min:t,max:n}=X0(i);if(!Array.isArray(i.size)||i.size.length!==3||Array.from(i.size).some((s,r)=>typeof s!="number"||!Number.isFinite(s)||s<t[r]||s>n[r]))throw Error("Combined shape and object scale must remain between 0.2 and 30");return e}var Z0=[64,96,128,192,256];function K0(i,e,t){let n=e?.densityResolution??64,s=e?.densityLink??0;if(!Z0.includes(n)||![0,8,16,32,64].includes(s))throw Error("Invalid density resolution policy");let r=ni(i),a=t.lo.map((l,h)=>(t.hi[h]-l)*r[h]);if(a.some(l=>!Number.isFinite(l)||l<=0))throw Error("Invalid density support");let o=s?Math.ceil(Math.max(...a)*s):n,c=s?Z0.find(l=>l>=o&&l<=n)??n:n;return{resolution:c,requested:o,capped:!!s&&o>n,worldSpacing:a.map(l=>l/c),targetTexelsPerUnit:s,extent:a}}var Xw="precision highp float;in vec3 position;out vec2 vUV;void main(){vUV=position.xy*0.5+0.5;gl_Position=vec4(position.xy,0,1);}",Yw=`precision highp float;precision highp sampler3D;precision highp sampler2D;
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
outColor=vec4(recipeDensity(q,coord,n,i)/(uForm[i].z*uCookScale),0,0,1);}`,Tc=class{constructor(e,t,n,s){this.renderer=e,this.uniforms=t,this.fieldSupport=n,this.fieldSource=s,this.entries=new Map,this.enabled=!0,this.cooks=0,this.size=64,this.format=e.extensions.has("EXT_color_buffer_float")?"R16F":"R8",this.type=this.format==="R16F"?Zt:ot,this.fallback=new Jt(new Uint8Array(1),1,1,1),Object.assign(this.fallback,{format:qi,type:ot,unpackAlignment:1,needsUpdate:!0}),this.cookUniforms={...t,uCookIndex:{value:0},uSlice:{value:0},uCookLo:{value:new I},uCookHi:{value:new I},uCookScale:{value:1.35},uSolidCutFeather:{value:.01}},this.material=new oi({uniforms:this.cookUniforms,vertexShader:Xw,fragmentShader:Yw,defines:{SKY_STUDIO_FIELD:0,SKY_SOURCE_FIELD:0},glslVersion:Si,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.pass=new ai,this.pass.add(new se(new _i(2,2),this.material)),this.camera=new vi}prune(e,t,n){let s=new Set(e.filter(r=>r.recipe).map(r=>`${r.id}:final`));t>=0&&t<e.length&&n<4&&e[t].recipe&&s.add(`${e[t].id}:inspect`);for(let[r,a]of this.entries)s.has(r)||(a.target.dispose(),this.entries.delete(r))}target(e){return new dn(e,e,e,{format:qi,type:this.type,minFilter:Je,magFilter:Je,depthBuffer:!1,stencilBuffer:!1})}ensure(e,t=!1){let n={...ms(this.version??0),SKY_SOLID_CUTS:this.policy?.cutMode==="solid"?1:0};Object.keys(n).some(d=>this.material.defines[d]!==n[d])&&(Object.assign(this.material.defines,n),this.material.needsUpdate=!0);let s=e.some(d=>d.recipe?.character?.enabled)?1:0,r=e.some(d=>d.recipe?.field)?1:0,a=e.some(gs)?1:0,o=e.some(da)?1:0;(this.material.defines.SKY_STUDIO_FIELD!==s||this.material.defines.SKY_SOURCE_FIELD!==r||this.material.defines.SKY_SOFTNESS_PAINT!==a||this.material.defines.SKY_PAINT_HARDNESS!==o)&&(Object.assign(this.material.defines,{SKY_STUDIO_FIELD:s,SKY_SOURCE_FIELD:r,SKY_SOFTNESS_PAINT:a,SKY_PAINT_HARDNESS:o}),this.material.needsUpdate=!0);let c=this.uniforms,l=c.uSolo.value,h=c.uInspect.value;this.prune(e,l,h);for(let d=0;d<8;d++)c[`uDensity${d}`].value=this.fallback,c.uCached.value[d]=0;if(this.enabled)for(let d=0;d<e.length;d++){let u=e[d];if(!u.recipe)continue;let f=this.policy?.cutMode==="solid"&&u.role==="cut"&&!!u.recipe.field,g=l===d?h:4,S=`${u.id}:${g<4?"inspect":"final"}`,m=Ec(u,g)+(this.policy?.cutMode==="solid"&&u.role==="cut"&&u.recipe.field?"|solid-cut":""),p=this.entries.get(S),b=p?.key===m?p.bounds:Hi(u,f?1:g,this.fieldSupport),A=K0(u,this.policy??{densityResolution:this.size},b),_=t?p?.key===m?p.size:32:A.resolution;if(p&&p.size!==_&&(p.target.dispose(),this.entries.delete(S),p=null),p||(p={target:this.target(_),key:null,size:_},this.entries.set(S,p)),p.grid={...A,resolution:_,worldSpacing:A.extent.map(v=>v/_),capped:!!A.targetTexelsPerUnit&&A.requested>_},p.key!==m)try{p.scale=Eu(u.recipe.layers),this.cook(p.target,d,b,p.scale),p.key=m,p.bounds=b,this.cooks++}catch(v){if(this.format==="R16F")return this.useBytes(),this.ensure(e,t);this.error=v.message,this.enabled=!1,this.clear();for(let M=0;M<8;M++)c.uCached.value[M]=0,c[`uDensity${M}`].value=this.fallback;return}c[`uDensity${d}`].value=p.target.texture,c.uCached.value[d]=1,c.uCacheLo.value[d].set(...b.lo,p.scale),c.uCacheHi.value[d].set(...b.hi,0)}}cook(e,t,n,s=1.35){let r=this.renderer,a=r.getRenderTarget(),o=r.getActiveCubeFace(),c=r.getActiveMipmapLevel();this.cookUniforms.uCookIndex.value=t,this.cookUniforms.uCookLo.value.fromArray(n.lo),this.cookUniforms.uCookHi.value.fromArray(n.hi),this.cookUniforms.uCookScale.value=s,this.cookUniforms.uSolidCutFeather.value=Math.max(...n.lo.map((l,h)=>n.hi[h]-l))/(e.width-1);try{this.fieldSource?.bindCook(t);for(let l=0;l<e.depth;l++){if(this.cookUniforms.uSlice.value=(l+.5)/e.depth,r.setRenderTarget(e,l),l===0&&r.getContext().checkFramebufferStatus(r.getContext().FRAMEBUFFER)!==r.getContext().FRAMEBUFFER_COMPLETE)throw Error(`Density ${this.format} framebuffer is incomplete`);r.render(this.pass,this.camera)}}finally{this.fieldSource?.restoreBinding(),r.setRenderTarget(a,o,c)}}clear(){for(let e of this.entries.values())e.target.dispose();this.entries.clear()}setResolution(e){if(this.size!==e){if(![64,96,128,192,256].includes(e))throw Error("Unsupported density resolution");this.clear(),this.size=e}}useBytes(){this.clear(),this.type=ot,this.format="R8"}info(){return{enabled:this.enabled,error:this.error??null,resolution:this.size,format:this.format,cooks:this.cooks,targets:this.entries.size,entries:Array.from(this.entries,([e,t])=>({id:e,resolution:t.size,...this.policy?.densityLink?{grid:t.grid}:{}})),storageBytes:Array.from(this.entries.values()).reduce((e,t)=>e+t.size**3*(this.type===Zt?2:1),0)}}};function j0(i,e,t,n){let s=Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,2147483647)^n;return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967295}var Ac=(i,e)=>(i%e+e)%e;function Wa(i,e,t,n,s){let r=[i*n,e*n,t*n],a=r.map(Math.floor),c=r.map((h,d)=>h-a[d]).map(h=>h*h*(3-2*h)),l=0;for(let h=0;h<2;h++)for(let d=0;d<2;d++)for(let u=0;u<2;u++)l+=j0(Ac(a[0]+u,n),Ac(a[1]+d,n),Ac(a[2]+h,n),s)*(u?c[0]:1-c[0])*(d?c[1]:1-c[1])*(h?c[2]:1-c[2]);return l}function qw(i,e,t,n,s){let r=[i*n,e*n,t*n],a=r.map(Math.floor),o=10;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){let d=[a[0]+h,a[1]+l,a[2]+c],u=d.map(g=>Ac(g,n)),f=d.map((g,S)=>g+j0(...u,s+S*101));o=Math.min(o,Math.hypot(r[0]-f[0],r[1]-f[1],r[2]-f[2]))}return 1-Math.min(1,o/1.2)}function $0(i=42){let e=new Uint8Array(131072),t=0;for(let n=0;n<32;n++)for(let s=0;s<32;s++)for(let r=0;r<32;r++){let a=[r/32,s/32,n/32],o=Wa(...a,2,i)*.57+Wa(...a,4,i+1)*.29+Wa(...a,8,i+2)*.14;e[t++]=Math.round(o*255),e[t++]=Math.round(qw(...a,5,i)*255),e[t++]=Math.round(Wa(...a,4,i+37)*255),e[t++]=Math.round(Wa(...a,4,i+73)*255)}return{size:32,data:e}}var sn=i=>!!i.tilt?.some(e=>e!==0);function gd(i){let e=(i.tilt?.[0]??0)*Math.PI/180,t=i.yaw*Math.PI/180,n=(i.tilt?.[1]??0)*Math.PI/180,s=Math.cos(e),r=Math.sin(e),a=Math.cos(t),o=Math.sin(t),c=Math.cos(n),l=Math.sin(n);return[a*c,-a*l,o,s*l+r*c*o,s*c-r*l*o,-r*a,r*l-s*c*o,r*c+s*l*o,s*a]}function J0(i,e){let t=gd(i);return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t[3]*e[0]+t[4]*e[1]+t[5]*e[2],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]]}function Q0(i){let e=i.azimuth*Math.PI/180,t=i.elevation*Math.PI/180;return[Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)]}function Xa(i,e){let t=ni(i);if(!i.recipe)return Math.hypot(...t)*(1.5+i.displacement+Math.abs(i.smear));let n=G0(i.recipe),s=i.displacement*.5,r=Hi(i,4,e),a=Math.hypot(...r.lo.map((o,c)=>Math.max(Math.abs(o),Math.abs(r.hi[c]))*t[c]));return Math.max(a,Math.max(...t)*(n+Math.sqrt(3)*s+Math.abs(i.smear)*(n+s)**2))}function Ya(i,e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let s of i.volumes.filter(r=>r.enabled&&r.role==="add")){let r=Xa(s,e);for(let a=0;a<3;a++)t[a]=Math.min(t[a],s.position[a]-r),n[a]=Math.max(n[a],s.position[a]+r)}return t[0]===1/0?{lo:[0,0,0],hi:[0,0,0]}:{lo:t,hi:n}}var eg=`precision highp float;\r
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
`;var Cc=class{constructor(e,t=()=>{}){this.createWorker=e,this.changed=t,this.serial=0,this.state={status:"unchecked"},this.dispatched=0,this.terminated=0}stop(){this.worker&&(this.worker.terminate(),this.worker=null,this.terminated++)}reset(e="unchecked"){this.serial++,this.stop(),this.state={status:e},this.changed()}check(e,t){if(this.closed)throw Error("Surface health closed");this.reset("pending");let n=this.serial,s;try{if(!(e.positions instanceof Float32Array)||!(e.indices instanceof Uint32Array)||e.positions.length%3||e.indices.length%3||e.positions.length>45e4||e.indices.length>75e4)throw Error("Surface health input unavailable or over budget");let r=e.positions.slice(),a=e.indices.slice();s=this.createWorker(),this.worker=s,this.dispatched++,s.onmessage=({data:l})=>{n!==this.serial||this.worker!==s||l.revision!==t||(this.stop(),this.state=l.error?{status:"failed",revision:t,error:l.error}:{...l.health,revision:t,auditMs:l.auditMs,roundTripMs:performance.now()-o,payloadBytes:c},this.changed())},s.onerror=l=>{l.preventDefault?.(),!(n!==this.serial||this.worker!==s)&&(this.stop(),this.state={status:"failed",revision:t,error:l.message||"Health worker failed"},this.changed())};let o=performance.now(),c=r.byteLength+a.byteLength;s.postMessage({kind:"health",revision:t,mesh:{positions:r,indices:a,boundaryOccupied:e.boundaryOccupied}},[r.buffer,a.buffer])}catch(r){this.stop(),this.state={status:"failed",revision:t,error:r.message},this.changed()}}close(){this.closed=!0,this.reset("unavailable")}info(){let{highlights:e,...t}=this.state;return{...t,dispatched:this.dispatched,terminated:this.terminated,active:!!this.worker,closed:!!this.closed,segments:(e?.segments.length??0)/6,points:(e?.points.length??0)/3,omittedSegments:e?.omittedSegments??0,omittedPoints:e?.omittedPoints??0}}};function Ic(i){return i.isOrthographicCamera?(i.right-i.left)/(i.top-i.bottom):i.aspect}function jw(i,e){return i.isOrthographicCamera?(i.top-i.bottom)/i.zoom:2*i.position.distanceTo(e)*Math.tan(i.fov*Math.PI/360)/i.zoom}function rg(i,e){if(i.isOrthographicCamera){let t=(i.top-i.bottom)/2;i.left=-t*e,i.right=t*e}else i.aspect=e;i.updateProjectionMatrix()}function ag(i,e,t){if(!!i.isOrthographicCamera===t)return i;let n=Ic(i),s=jw(i,e),r=i.userData.perspectiveFov??55,a=t?new yn(-s*n/2,s*n/2,s/2,-s/2,i.near,i.far):new kt(r,n,i.near,i.far);if(a.up.copy(i.up),a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.userData.perspectiveFov=i.isPerspectiveCamera?i.fov:r,!t){let o=s/(2*Math.tan(r*Math.PI/360));a.position.copy(e).addScaledVector(new I(0,0,1).applyQuaternion(a.quaternion),o)}return t||(a.near=Math.min(i.near,a.position.distanceTo(e)/4),a.far=Math.max(i.far,a.position.distanceTo(e)+i.far)),a.updateProjectionMatrix(),a.updateMatrixWorld(),a}function Pc(i,e,t){let n=t.getCenter(new I),s=new I(1,0,0).applyQuaternion(i.quaternion),r=new I(0,1,0).applyQuaternion(i.quaternion),a=new I(0,0,1).applyQuaternion(i.quaternion),o=Ic(i),c=.001,l=i.position.distanceTo(e);for(let h=0;h<8;h++){let d=new I(...["x","y","z"].map((u,f)=>(h>>f&1?t.max:t.min)[u])).sub(n);c=Math.max(c,Math.abs(d.dot(r))*1.1,Math.abs(d.dot(s))/o*1.1),l=Math.max(l,d.dot(a)+i.near*2)}i.zoom=1,i.top=c,i.bottom=-c,i.left=-c*o,i.right=c*o,e.copy(n),i.position.copy(n).addScaledVector(a,l),i.far=Math.max(300,l+t.getSize(new I).length()*2),i.updateProjectionMatrix(),i.updateMatrixWorld()}function og(i,e=Ts){if(!i.recipe){let a=Xa(i,e),o=new I(...i.position);return new zt(o.clone().addScalar(-a),o.clone().addScalar(a))}let t=i.recipe.field,n=t?e(t,0):null,s=t&&n.empty?t.bounds:Hi(i,4,e),r=new Ke().compose(new I(...i.position),qa(i),new I(...ni(i)));return new zt(new I(...s.lo),new I(...s.hi)).applyMatrix4(r)}function Lc(i,e,t){if(i.isOrthographicCamera){Pc(i,e.target,t),e.update();return}let n=t.getCenter(new I),s=new I(1,0,0).applyQuaternion(i.quaternion),r=new I(0,1,0).applyQuaternion(i.quaternion),a=new I(0,0,1).applyQuaternion(i.quaternion),o=Math.tan(i.fov*Math.PI/360),c=i.near*2;for(let l=0;l<8;l++){let h=new I(...["x","y","z"].map((u,f)=>(l>>f&1?t.max:t.min)[u])).sub(n),d=h.dot(a);c=Math.max(c,d+i.near*2,d+1.1*Math.max(Math.abs(h.dot(r))/o,Math.abs(h.dot(s))/(o*i.aspect)))}e.target.copy(n),i.position.copy(n).addScaledVector(a,c),i.far=Math.max(300,c+t.getSize(new I).length()*2),i.updateProjectionMatrix(),e.update()}var $w={boundaryEdges:"Open edges",nonManifoldEdges:"Non-manifold edges",nonManifoldVertices:"Pinched / invalid vertex links",inconsistentWindingEdges:"Inconsistent winding",repeatedIndexFaces:"Repeated-index faces",zeroAreaFaces:"Zero-area faces",duplicateFaces:"Duplicate faces",nonFiniteVertices:"Non-finite vertices",unusedVertices:"Unused vertices",invalidIndexFaces:"Invalid-index faces"},Dc=class{constructor(e){this.source=e,this.panel=document.getElementById("sculpt-health-panel"),this.panel.innerHTML='<h2>Sculpt Health</h2><div class="buttons"><button id="health-check">Check surface</button><button id="health-cancel" disabled>Cancel check</button><button id="health-frame" disabled title="Frame the displayed diagnostic locations. Z frames the cloud.">Frame areas</button></div><label><input id="health-show" type="checkbox"> Show problem areas</label><p id="health-summary" role="status"></p><dl id="health-counts"></dl><p id="health-details" class="muted"></p><p class="muted">Read-only source mesh check. Magenta marks tested defects; orange bounds indicate sampling-boundary contact. Does not test self-intersections, thin detail or cloud density. No repair is applied.</p>',this.checkButton=this.panel.querySelector("#health-check"),this.cancelButton=this.panel.querySelector("#health-cancel"),this.frameButton=this.panel.querySelector("#health-frame"),this.show=this.panel.querySelector("#health-show"),this.job=new Cc(()=>new Worker(new URL("mesh-worker.js",document.baseURI)),()=>this.refresh()),this.checkButton.onclick=()=>this.check(),this.cancelButton.onclick=()=>this.job.reset("cancelled"),this.frameButton.onclick=()=>this.frame(),this.show.onchange=()=>{this.group&&(this.group.visible=this.show.checked),this.frameButton.disabled=!this.show.checked||!this.group,e.viewer.dirty=!0},this.refresh()}current(){let e=this.source;return e.viewer.splitSource&&e.available&&!e.error&&e.mesh&&e.readyRevision===e.revision&&!e.viewer.sculptEvaluation?.pending&&!e.viewer.sculptEvaluation?.error}refreshReadiness(){!!this.current()!==this.ready&&this.refresh()}invalidate(e="unchecked"){this.job.reset(e)}check(){if(!this.current())return;let e=this.source,t=e.mesh.geometry;this.job.check({positions:t.attributes.position.array,indices:t.index.array,boundaryOccupied:e.stats.boundaryOccupied},e.readyRevision)}clear(){this.group&&(this.source.scene.remove(this.group),this.group.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()}),this.group=null)}transform(){if(!this.group||!this.source.mesh)return;let e=this.source.mesh;this.group.position.copy(e.position),this.group.quaternion.copy(e.quaternion),this.group.scale.copy(e.scale),this.group.updateMatrixWorld()}frame(){if(!this.current()||!this.group?.visible)return;document.getElementById("orbit").click();let e=this.source.viewer;e.resize();let t=new zt().setFromObject(this.group);if(t.isEmpty())return;let n=this.source.bounds,s=new zt(new I(...n.lo),new I(...n.hi)).applyMatrix4(this.source.mesh.matrixWorld),r=Math.max(e.camera.near*2,s.getSize(new I).length()/32);Lc(e.camera,e.orbit,t.expandByScalar(r)),e.dirty=!0}refresh(){this.clear();let e=this.job.state,t=!!this.current();this.ready=t,this.checkButton.disabled=!t||e.status==="pending",this.cancelButton.disabled=e.status!=="pending";let n={unchecked:"Not checked. Check the current source surface.",pending:"Checking source surface\u2026",cancelled:"Check cancelled. No result retained.",unavailable:"Source surface unavailable.",empty:"No extracted triangles. Surface health is undetermined.",failed:`Check unavailable: ${e.error??"unknown failure"}`,issues:e.highlights&&(e.highlights.segments.length||e.highlights.points.length)?"Tested topology defects detected. Show problem areas to locate them.":"Tested topology defects detected. No finite locations can be highlighted.",boundary:"No tested topology defects detected; the sampled boundary is occupied.",clear:"No tested topology defects detected on this source surface."};this.panel.querySelector("#health-summary").dataset.health=e.status,this.panel.querySelector("#health-summary").textContent=e.status==="unchecked"&&!t?"Waiting for the current source surface.":n[e.status]??"Source surface unavailable.";let s=this.panel.querySelector("#health-counts"),r=this.panel.querySelector("#health-details");if(s.replaceChildren(),r.textContent="",e.counts){for(let[c,l]of Object.entries($w)){let h=document.createElement("dt"),d=document.createElement("dd");h.textContent=l,d.textContent=String(e.counts[c]),e.counts[c]&&(d.className="health-issue"),s.append(h,d)}let a=document.createElement("dt"),o=document.createElement("dd");a.textContent="Sampling boundary contact",o.textContent=e.boundaryOccupied?"Yes \u2014 inspect clipping":"No",s.append(a,o),r.textContent=`${e.triangles} triangles \xB7 ${e.auditMs.toFixed(1)} ms audit \xB7 ${e.roundTripMs.toFixed(1)} ms worker round trip. Highlights limited to 2048 segments and 2048 points${e.highlights.omittedSegments||e.highlights.omittedPoints?"; additional locations omitted":""}. Counts cover the full mesh.${e.counts.nonFiniteVertices?" Non-finite locations cannot be drawn.":""}`}if(t&&e.highlights&&e.revision===this.source.readyRevision&&(e.highlights.segments.length||e.highlights.points.length||e.boundaryOccupied)){this.group=new hn;let a=e.highlights;if(a.segments.length){let o=new yt;o.setAttribute("position",new Ct(a.segments,3)),this.group.add(new Js(o,new gn({color:16729275,depthTest:!1,depthWrite:!1,toneMapped:!1})))}if(a.points.length){let o=new yt;o.setAttribute("position",new Ct(a.points,3)),this.group.add(new Gr(o,new Qs({color:16729275,size:9,sizeAttenuation:!1,depthTest:!1,depthWrite:!1,toneMapped:!1})))}if(e.boundaryOccupied){let o=this.source.bounds;o&&this.group.add(new os(new zt(new I(...o.lo),new I(...o.hi)),16755780))}this.group.traverse(o=>{o.renderOrder=100,o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1)}),this.group.visible=this.show.checked,this.source.scene.add(this.group),this.transform()}this.show.disabled=!this.group||!e.boundaryOccupied&&!e.highlights?.segments.length&&!e.highlights?.points.length,this.source.viewer.dirty=!0,this.frameButton.disabled=!this.group?.visible}info(){return{...this.job.info(),visible:!!this.group?.visible,overlayObjects:this.group?.children.length??0,transform:this.group?{position:this.group.position.toArray(),quaternion:this.group.quaternion.toArray(),scale:this.group.scale.toArray()}:null}}dispose(){this.job.close(),this.clear(),this.checkButton.onclick=null,this.cancelButton.onclick=null,this.frameButton.onclick=null,this.show.onchange=null}};var Nc=class{constructor(e){this.source=e,this.uniforms={uBrushCenter:{value:new I},uBrushColor:{value:new I(.1,.75,.55)},uBrushParameters:{value:new Be},uBrushFlags:{value:new Be},uBrushProtection:{value:e.viewer.texture},uBrushProtectionLo:{value:new I},uBrushProtectionHi:{value:new I},uBrushProtectionSize:{value:49}}}enabled(e){this.active=e;let t=this.source.material;t&&t.defines.SKY_SOURCE_BRUSH_PREVIEW!==(e?1:0)&&(t.defines.SKY_SOURCE_BRUSH_PREVIEW=e?1:0,t.needsUpdate=!0),this.source.viewer.dirty=!0}clear(){this.spec=null,this.borrowed=!1,this.blocked=!1,this.owned?.clear(),this.uniforms.uBrushProtection.value=this.source.viewer.texture,this.uniforms.uBrushFlags.value.set(0,0,0,0),this.enabled(!1)}set(e,t,n){if(!e||!Array.isArray(e.center)||e.center.length!==3||Array.from(e.center).some(a=>!Number.isFinite(a))||!Number.isFinite(e.radius)||e.radius<=0||e.radius>1.58||!Number.isFinite(e.gain)||e.gain<=0||e.gain>1||!Number.isFinite(e.hardness)||e.hardness<0||e.hardness>1||![0,1,2].includes(e.style)){this.clear();return}this.spec=structuredClone(e),this.borrowed=!1,this.blocked=!1;let s=this.uniforms;s.uBrushCenter.value.fromArray(e.center),s.uBrushParameters.value.set(e.radius,e.gain,e.hardness,e.style),s.uBrushFlags.value.set(e.rest?1:0,e.mirror?1:0,0,0),s.uBrushColor.value.set(...e.subtract?[.95,.34,.08]:[.1,.75,.55]);let r;if(e.protected&&t&&n&&(n.base!==0||n.commands.length)){let a=this.source.protection,o=_d(t,n);a.texture&&a.key===o?(r=a,this.borrowed=!0,this.owned?.clear()):(this.owned??=new Er(this.source.viewer),this.owned.update(t,n,!1,!0),r=this.owned)}else this.owned?.clear();r?.texture&&r.uniform!==0?(s.uBrushProtection.value=r.texture,s.uBrushProtectionLo.value.copy(r.uniforms.uProtectionLo.value),s.uBrushProtectionHi.value.copy(r.uniforms.uProtectionHi.value),s.uBrushProtectionSize.value=r.uniforms.uProtectionSize.value,s.uBrushFlags.value.z=1,this.blocked=r.uniform===255):s.uBrushProtection.value=this.source.viewer.texture,this.enabled(!this.blocked)}info(){return{active:!!this.active,spec:this.spec?structuredClone(this.spec):null,borrowedMask:this.borrowed??!1,blockedByProtection:this.blocked??!1,ownedMaskBytes:this.owned?.info().bytes??0,ownedMaskUploads:this.owned?.uploads??0}}dispose(){this.clear()}};var lg=`#if SKY_SOURCE_BRUSH_PREVIEW\r
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
`;var Uc=class{constructor(e){this.viewer=e,this.scene=new ai,this.scene.background=new Fe(1516336),this.revision=0,this.protection=new Er(e),this.influence=new Nc(this),this.health=new Dc(this),this.uniforms={...e.uniforms,...this.protection.uniforms,...this.influence.uniforms,uSourceIndex:{value:0},uPaintLayer:{value:-1},uSourceShapeScale:{value:new I(1,1,1)}},this.material=new oi({uniforms:this.uniforms,defines:{SKY_PAINT_SCULPT_PROTECTION:0,SKY_SOURCE_SHAPE_SCALE:0,SKY_SOURCE_BRUSH_PREVIEW:0},side:li,glslVersion:Si,toneMapped:!1,vertexShader:"precision highp float;in vec3 position,normal;uniform mat4 modelViewMatrix,projectionMatrix;uniform mat3 normalMatrix;out vec3 vLocalPosition,vSourceNormal;void main(){vLocalPosition=position;vSourceNormal=normalMatrix*normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1);}",fragmentShader:eg.replace("/* SCULPT_FIELD */",hr).replace("/* MODIFIER_FIELDS */",ur).replace("/* SCULPT_PROTECTION */",sg).replace("/* BRUSH_INFLUENCE */",lg)}),this.protection.visibilityChanged=t=>{let n=t?1:0;this.material.defines.SKY_PAINT_SCULPT_PROTECTION!==n&&(this.material.defines.SKY_PAINT_SCULPT_PROTECTION=n,this.material.needsUpdate=!0)},this.worker=new Worker(new URL("mesh-worker.js",document.baseURI)),this.worker.onmessage=({data:t})=>{if(this.busy=!1,t.revision===this.revision){if(t.error)this.error=t.error,this.clear();else{let{mesh:n}=t,s=this.mesh?.geometry;if(s&&tg(s.index.array,n.indices,s.attributes.position.array,n.positions)){for(let[r,a]of[["position",n.positions],["normal",n.normals]]){let o=s.attributes[r],c=ig(o.array,a);c.count&&(o.array.set(a.subarray(c.start,c.start+c.count),c.start),o.clearUpdateRanges(),o.addUpdateRange(c.start,c.count),o.needsUpdate=!0)}s.computeBoundingSphere(),this.reusedBuffers=(this.reusedBuffers??0)+1}else{this.clear("unchecked");let r=new yt;r.setAttribute("position",new Ct(n.positions,3)),r.setAttribute("normal",new Ct(n.normals,3)),r.setIndex(new Ct(n.indices,1)),r.computeBoundingSphere(),this.mesh=new se(r,this.material),this.scene.add(this.mesh),this.replacedBuffers=(this.replacedBuffers??0)+1}this.setShapeScale(t.shapeScale),this.bounds=n.bounds,this.stats={...n.stats,ms:t.ms,boundaryOccupied:n.boundaryOccupied,...t.scaleMs!==void 0?{scaleMs:t.scaleMs,shapeScale:[...t.shapeScale]}:{}},this.error=null,this.setTransform(this.volume)}this.readyRevision=t.revision,this.health.refresh()}this.dispatch(),e.dirty=!0,this.updateNote(),e.events.sourceReady?.()},this.worker.onerror=t=>{this.busy=!1,this.error=t.message,this.clear(),this.updateNote(),e.events.sourceReady?.()}}clear(e="unavailable"){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=null),this.setShapeScale(),this.influence.clear(),this.health.invalidate(e)}setShapeScale(e){this.installedShapeScale=e?[...e]:void 0,this.uniforms.uSourceShapeScale.value.fromArray(e??[1,1,1]);let t=e?1:0;this.material.defines.SKY_SOURCE_SHAPE_SCALE!==t&&(this.material.defines.SKY_SOURCE_SHAPE_SCALE=t,this.material.needsUpdate=!0)}setTransform(e){!this.mesh||!e||(this.mesh.position.fromArray(e.position),this.mesh.scale.fromArray(W0(e,this.installedShapeScale)),Rc(this.mesh,e),this.mesh.updateMatrixWorld(),this.health.transform())}update(e,t){if(!e){this.waitingForScene=!0,this.volume=null,this.available=!1,this.pending=null,this.shapeKey=null,this.revision++,this.protection.clear(),this.clear(),this.updateNote();return}let n=ms(e.version);Object.keys(n).some(d=>this.material.defines[d]!==n[d])&&(Object.assign(this.material.defines,n),this.material.needsUpdate=!0),this.waitingForScene=!1;let s=e.volumes.find(d=>d.id===t);this.volume?.id!==t&&this.health.invalidate(),this.volume=s;let r=Kp(s)?1:0;if(this.material.defines.SKY_PAINT_HARDNESS!==r&&(this.material.defines.SKY_PAINT_HARDNESS=r,this.material.needsUpdate=!0),this.uniforms.uSourceIndex.value=e.volumes.filter(d=>d.enabled).findIndex(d=>d.id===t),this.setPaintLayer(this.paintLayerId,this.showPaint),this.available=!!s?.recipe&&s.enabled&&s.role==="add",!this.available){this.pending=null,this.shapeKey=null,this.revision++,this.protection.clear(),this.clear(),this.updateNote();return}this.setTransform(s);let a=this.viewer.sourceNormalStyle??"field",o=JSON.stringify([s.recipe.strokes,fr(s.recipe),s.recipe.sculpt??[],s.recipe.massMode??"grouped",s.recipe.field??null,...a==="field"?[]:[a],...s.shapeScale?[s.shapeScale]:[]]),c=s.recipe.field?(s.recipe.field.base??s.recipe.field).resolution-1:32,l=this.viewer.studio.previewQuality().draft;if(this.shapeKey===o&&(this.resolution===c||l)){this.health.refreshReadiness();return}let h=l?s.recipe.field?c/2:20:c;this.shapeKey=o,this.resolution=h,this.revision++,this.health.invalidate(),this.influence.clear(),this.protection.setVisible(!1),this.pending={recipe:s.recipe,version:e.version,resolution:h,normalStyle:a,revision:this.revision,...s.shapeScale?{shapeScale:s.shapeScale}:{}},this.dispatch(),this.updateNote()}dispatch(){if(this.busy||!this.pending)return;this.busy=!0;let e=this.pending;this.pending=null,this.worker.postMessage(e)}setPaintLayer(e,t){this.paintLayerId=e,this.showPaint=t,this.uniforms.uPaintLayer.value=t?this.volume?.recipe?.layers?.findIndex(n=>n.id===e)??-1:-1,this.viewer.dirty=!0}updateNote(){let e=document.getElementById("source-mesh-note");if(e){if(this.viewer.sculptEvaluation?.pending){e.textContent="Preparing sculpt mass\u2026";return}if(this.viewer.sculptEvaluation?.error){e.textContent=`Sculpt mass unavailable: ${this.viewer.sculptEvaluation.error}`;return}e.textContent=this.error?`Source mesh unavailable: ${this.error}`:this.waitingForScene?"Preparing source mass\u2026":this.available?this.readyRevision!==this.revision?"Updating source mass\u2026":`Source mass \xB7 ${this.stats?.triangles??0} triangles \xB7 ${(this.stats?.ms??0).toFixed(1)} ms extraction${this.stats?.scaleMs!==void 0?` \xB7 ${this.stats.scaleMs.toFixed(1)} ms applied scale`:""}`:"Select a visible additive drawn cloud"}}pick(e){if(this.viewer.sculptEvaluation?.pending||!this.mesh||this.readyRevision!==this.revision)return null;let t=new Hn;return t.ray.copy(e),t.intersectObject(this.mesh,!1)[0]?.point??null}info(){return{revision:this.revision,readyRevision:this.readyRevision,busy:!!this.busy,error:this.error??null,normalStyle:this.stats?.normalStyle??"field",requestedNormalStyle:this.viewer.sourceNormalStyle??"field",reusedBuffers:this.reusedBuffers??0,replacedBuffers:this.replacedBuffers??0,stats:this.stats??null}}};var Fc=class{#r;#t=null;#e=null;#s=0;#i=null;#n=!1;#a=null;#c=!1;#h=0;#u=0;#d=0;#o=0;constructor(e=new URL("sculpt-worker.js",document.baseURI),{interrupt:t=!0}={}){this.#c=t,this.#r=new Worker(e,{type:"module"}),this.#r.addEventListener("message",n=>this.#m(n.data)),this.#r.addEventListener("error",n=>{n.preventDefault(),this.#l(Error(n.message||"Browser replay worker failed"))})}submit(e,{layerId:t=null}={}){if(this.#n)throw Error("Replay worker closed");let n=As(e);if(t!==null&&!n.layers.some(r=>r.id===t))throw Error("Unknown selected sculpt layer");let s=++this.#s;return this.#i=null,new Promise(r=>{let a={id:s,program:n,layerId:t,resolve:r};this.#t?(this.#e&&(this.#e.resolve({id:this.#e.id,status:"superseded"}),this.#d++),this.#e=a,this.#p()):this.#f(a)})}#f(e){this.#t=e,this.#h++;try{this.#r.postMessage({id:e.id,program:e.program,layerId:e.layerId})}catch(t){this.#l(t)}}#m(e){let t=this.#t;if(!(!t||e.id!==t.id)&&(this.#t=null,e.error?(this.#o++,t.resolve({id:t.id,status:"failed",error:e.error})):!e.aborted&&t.id===this.#s&&!this.#n?(this.#i={id:t.id,result:e.result,evaluateMs:e.evaluateMs},t.resolve({id:t.id,status:"installed",evaluateMs:e.evaluateMs,...structuredClone(e.result)})):(this.#u++,t.resolve({id:t.id,status:"stale",evaluateMs:e.evaluateMs,aborted:!!e.aborted,abortedOperations:e.result?.applied??null})),this.#e&&!this.#n)){let n=this.#e;this.#e=null,this.#f(n)}}#l(e){if(!this.#n){this.#n=!0,this.#i=null,this.#o++;for(let t of[this.#t,this.#e])t?.resolve({id:t.id,status:"failed",error:e.message});this.#t=null,this.#e=null,this.#a=Promise.resolve(this.#r.terminate())}}#p(){if(this.#c&&this.#t&&!this.#t.interrupted){this.#t.interrupted=!0;try{this.#r.postMessage({cancel:this.#t.id})}catch(e){this.#l(e)}}}cancel(){this.#n||(++this.#s,this.#i=null,this.#p(),this.#e&&(this.#e.resolve({id:this.#e.id,status:"cancelled"}),this.#e=null))}snapshot(){if(this.#n||!this.#i||this.#i.id!==this.#s)throw Error("Latest replay not ready");return structuredClone(this.#i)}info(){return{latest:this.#s,installed:this.#i?.id??null,ready:!this.#n&&this.#i?.id===this.#s,active:this.#t?.id??null,pending:this.#e?.id??null,dispatched:this.#h,stale:this.#u,superseded:this.#d,failed:this.#o,closed:this.#n}}close(){if(this.#a)return this.#a;this.#n=!0,++this.#s,this.#i=null;for(let e of[this.#t,this.#e])e?.resolve({id:e.id,status:"closed"});return this.#t=null,this.#e=null,this.#a=Promise.resolve(this.#r.terminate()),this.#a}};var yd=i=>i?.format===zi,Oc=class{constructor(e,t,n){this.viewer=e,this.create=t,this.changed=n,this.entries=new Map}notify(){this.queued||this.closed||(this.queued=!0,queueMicrotask(()=>{this.queued=!1,this.closed||this.changed()}))}update(e,t,n,s){let r=this.selected!==t;this.latest={scene:e,selected:t,syncProxy:n},this.selected=t;let a=new Set(e.volumes.filter(o=>o.recipe?.field).map(o=>o.id));for(let[o,c]of this.entries)a.has(o)||(c.dispose(),this.entries.delete(o));for(let o of e.volumes){let c=this.entries.get(o.id);if(!yd(o.recipe?.field)){c&&(JSON.stringify(c.field)===JSON.stringify(o.recipe?.field)?c.update({...e,volumes:[o]},o.id,n):(c.dispose(),this.entries.delete(o.id)));continue}if(!c){let l={gizmo:{detach:()=>this.viewer.gizmo.detach()},events:{sculptFailed:()=>this.notify()},setScene:()=>this.notify()};c=this.create(l),this.entries.set(o.id,c)}o.id===t&&(c.targetLayer=r?void 0:s),c.update({...e,volumes:[o]},o.id,n)}return this.pending=[...this.entries.values()].some(o=>o.pending),this.error=[...this.entries.values()].find(o=>o.error)?.error??null,this.pending||this.error?null:this.resolve(e)}resolve(e){if(this.pending||this.error)throw Error(this.error??"Sculpt layers are updating; wait before exporting");let t=structuredClone(e);for(let n of t.volumes)if(yd(n.recipe?.field)){let s=this.entries.get(n.id);if(!s)throw Error("Current sculpt mass is not ready");n.recipe.field=structuredClone(s.fieldFor(n.recipe.field))}return t}owner(e){let t=JSON.stringify(e),n=this.entries.get(this.selected);if(n?.key===t)return n;let s=[...this.entries.values()].find(r=>r.key===t);if(!s)throw Error("Current sculpt mass is not ready");return s}fieldFor(e){if(!yd(e))return e;if(this.pending||this.error)throw Error(this.error??"Current sculpt mass is not ready");return this.owner(e).fieldFor(e)}prefixFor(e,t){return this.fieldFor(e),this.owner(e).prefixFor(e,t)}retry(){for(let e of this.entries.values())e.retry();this.pending=!1,this.error=null}close(){this.closed=!0;for(let e of this.entries.values())e.dispose();this.entries.clear()}info(){return{fields:[...this.entries].map(([e,t])=>({id:e,...t.info()}))}}};var cg=i=>i?.format===zi,Bc=class i{constructor(e){this.viewer=e,this.key=null,this.field=null,this.pending=!1,this.error=null,this.revision=0}cancelFocus(){this.focusRequest=null}find(e){return e.volumes.find(t=>cg(t.recipe?.field))}resolve(e){if(this.multi)return this.multi.resolve(e);if(this.pending||this.error)throw Error(this.error??"Sculpt layers are updating; wait before exporting");let t=this.find(e);if(!t)return e;if(this.pending||!this.field||JSON.stringify(t.recipe.field)!==this.key)throw Error("Sculpt layers are updating; wait for the current mass before picking or exporting");let n=structuredClone(e);return n.volumes.find(s=>s.id===t.id).recipe.field=structuredClone(this.field),n}update(e,t,n){if(e.version>=21&&e.volumes.filter(d=>d.recipe?.field).length>1){this.latest={scene:e,selected:t,syncProxy:n},this.multi||(this.worker?.close(),this.worker=null,this.revision++,this.key=null,this.field=null,this.multi=new Oc(this.viewer,g=>new i(g),()=>{let g=this.multi?.latest;g&&(this.viewer.setScene(g.scene,g.selected,g.syncProxy),this.error?(this.viewer.events.warning?.(this.error),this.viewer.events.sculptFailed?.()):this.pending||(this.finishFocus(g),this.viewer.events.sculptReady?.()))}));let d=this.pending,u=this.multi.update(e,t,n,this.targetLayer);this.pending=this.multi.pending,this.error=this.multi.error;let f=this.multi.entries.get(t);return this.layerId=f?.layerId,this.stats=f?.stats,this.pending&&!d&&(this.revision++,this.viewer.gizmo.detach(),this.viewer.events.sculptPending?.("Updating sculpt clouds\u2026")),u}this.multi&&(this.multi.close(),this.multi=null,this.retry(),this.key=null,this.massKey=null,this.field=null),this.latest={scene:e,selected:t,syncProxy:n};let s=this.find(e),r=s?JSON.stringify(s.recipe.field):null;if(!s)return this.pending&&(this.worker?.cancel(),this.revision++),e.version>=21&&!e.volumes.some(d=>d.recipe?.field)&&(this.worker?.close(),this.worker=null,this.key=null,this.massKey=null,this.field=null,this.prefixField=null,this.stats=null),this.pending=!1,this.error=null,this.requestKey=null,this.cancelFocus(),e;if(this.error)return null;let a=s.recipe.field.protection?_m(s.recipe.field):r,o=s.recipe.field.layers.some(d=>d.id===this.targetLayer)?this.targetLayer:(s.recipe.field.layers.filter(d=>d.enabled).at(-1)??s.recipe.field.layers.at(-1))?.id??null;this.targetLayer=o;let c=`${a}\0${o}`;if(a===this.massKey&&this.field&&this.layerId===o)return this.pending&&(this.worker.cancel(),this.revision++),this.key=r,this.pending=!1,this.error=null,this.resolve(e);if(this.pending&&c===this.requestKey)return null;this.pending=!0,this.error=null,this.requestKey=c;let l=++this.revision;this.viewer.gizmo.detach(),this.viewer.events.sculptPending?.(r===this.key?"Preparing selected sculpt layer\u2026":"Updating sculpt layers\u2026");let h;try{this.worker??=new Fc,h=this.worker.submit(s.recipe.field,{layerId:o})}catch(d){return this.fail(d.message,l),null}return h.then(d=>{if(l!==this.revision)return;if(d.status!=="installed"){this.fail(d.error??"Sculpt replay did not complete",l);return}this.key=r,this.massKey=a,this.field=d.field,this.prefixField=d.prefixField,this.layerId=d.layerId,this.pending=!1,this.stats=d;let u=this.latest;this.viewer.setScene(u.scene,u.selected,u.syncProxy),this.finishFocus(u),this.viewer.events.sculptReady?.()}).catch(d=>this.fail(d.message,l)),null}fail(e,t){t===this.revision&&(this.pending=!1,this.error=e,this.viewer.events.warning?.(e),this.viewer.events.sculptFailed?.())}finishFocus(e){let t=this.focusRequest;this.focusRequest=null,t&&t.selected===e.selected&&(this.viewer.workshop||t.preserveDirection)&&this.viewer.focusSelected(t.frameBounds,!!t.preserveDirection)}fieldFor(e){if(this.multi)return this.multi.fieldFor(e);if(!cg(e))return e;if(this.pending||JSON.stringify(e)!==this.key||!this.field)throw Error("Current sculpt mass is not ready");return this.field}prefixFor(e,t){if(this.multi)return this.multi.prefixFor(e,t);if(this.fieldFor(e),t!==this.layerId||!this.prefixField)throw Error("Selected layer is not ready");return this.prefixField}retry(){this.multi&&this.multi.retry(),this.worker?.close(),this.worker=null,this.pending=!1,this.error=null,this.requestKey=null,this.revision++}dispose(){this.multi?.close(),this.worker?.close(),this.revision++,this.cancelFocus()}info(){return{pending:this.pending,error:this.error,readyLayerId:this.layerId??null,targetLayerId:this.targetLayer??null,revision:this.revision,worker:this.worker?.info()??null,...this.multi?this.multi.info():{},stats:this.stats?{operations:this.stats.operations,applied:this.stats.applied,prefixApplied:this.stats.prefixApplied??0,evaluateMs:this.stats.evaluateMs,retainedGridBytes:this.stats.retainedGridBytes,...this.stats.protectionCache?{protectionCache:structuredClone(this.stats.protectionCache),replayKeyCharacters:this.stats.replayKeyCharacters}:{}}:null}}};var hg=`// Adapted from the supplied Cloud Nodes Studio reference (MIT).\r
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
`;function ug(i){let t=new dn(64,64,64,{format:mt,type:ot,minFilter:Je,magFilter:Je,depthBuffer:!1,stencilBuffer:!1});Object.assign(t.texture,{wrapS:Ai,wrapT:Ai,wrapR:Ai,generateMipmaps:!1});let n={uSlice:{value:0}},s=new oi({uniforms:n,fragmentShader:hg,vertexShader:"precision highp float;in vec3 position;out vec2 vUV;void main(){vUV=position.xy*.5+.5;gl_Position=vec4(position.xy,0,1);}",glslVersion:Si,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Ci}),r=new _i(2,2),a=new ai,o=new vi;a.add(new se(r,s));let c={target:i.getRenderTarget(),layer:i.getActiveCubeFace(),mip:i.getActiveMipmapLevel(),viewport:i.getViewport(new Be),scissor:i.getScissor(new Be),scissorTest:i.getScissorTest()};try{i.setScissorTest(!1);for(let l=0;l<64;l++){n.uSlice.value=(l+.5)/64,i.setRenderTarget(t,l);let h=i.getContext();if(l===0&&h.checkFramebufferStatus(h.FRAMEBUFFER)!==h.FRAMEBUFFER_COMPLETE)throw Error("Studio noise RGBA8 framebuffer is incomplete");i.render(a,o)}}catch(l){throw t.dispose(),l}finally{i.setRenderTarget(c.target,c.layer,c.mip),i.setViewport(c.viewport),i.setScissor(c.scissor),i.setScissorTest(c.scissorTest),r.dispose(),s.dispose()}return{target:t,texture:t.texture,size:64,storageBytes:64**3*4,dispose:()=>t.dispose()}}var xd=["high","ultra","performance"];function dg(i="high",{interactive:e=!1,studio:t=!1,recipe:n=!1,previewWidth:s=640,densityResolution:r=64}={}){if(!xd.includes(i))throw Error("Unknown viewport quality");return i==="performance"?{width:e?320:s,scale:s===640?.6:1,draft:e,steps:e?32:t?{64:72,96:88,128:104}[r]:48,shadows:e?t?8:n?6:3:t?24:n?16:5}:{width:Math.max(s,i==="ultra"?1280:960),maxWidth:i==="ultra"?2560:1920,scale:1,draft:!1,steps:i==="ultra"?128:t?104:96,shadows:i==="ultra"?t?32:24:t?24:16}}var kc=class{constructor(e){this.viewer=e,this.mode="high";let t=()=>Array.from({length:8},()=>new Be);Object.assign(e.uniforms,{uInverseRotation:{value:Array.from({length:8},()=>new De)},uTilted:{value:Array(8).fill(0)},uStableYaw:{value:t()},uStudioNoise:{value:e.texture},uCharacterFlags:{value:t()},uCharacterShape:{value:t()},uCharacterDetail:{value:t()},uSolidCuts:{value:new Int32Array(8)},uStudioLighting:{value:0},uAnisotropy:{value:.32},uScatterFill:{value:.2},uSunTint:{value:new Fe},uSkyTint:{value:new Fe}})}update(e){let t=this.viewer.uniforms,n=e.render?.look??_a(),s=e.volumes.filter(a=>a.enabled),r={...ms(e.version),SKY_FULL_ROTATION:s.some(sn)?1:0,SKY_SOFTNESS_PAINT:s.some(gs)?1:0,SKY_PAINT_HARDNESS:s.some(da)?1:0};Object.keys(r).some(a=>this.viewer.material.defines[a]!==r[a])&&(Object.assign(this.viewer.material.defines,r),this.viewer.material.needsUpdate=!0),s.some(a=>a.recipe?.character?.enabled)&&!this.noise&&(this.noise=ug(this.viewer.renderer)),t.uStudioNoise.value=this.noise?.texture??this.viewer.texture,t.uStudioLighting.value=n.enabled?1:0,t.uAnisotropy.value=n.anisotropy,t.uScatterFill.value=n.fill,t.uSunTint.value.set(n.sunColor),t.uSkyTint.value.set(n.skyColor),this.requiresCache=n.enabled||s.some(a=>a.recipe?.character?.enabled||a.recipe?.field);for(let a=0;a<8;a++){let o=s[a];t.uSolidCuts.value[a]=e.render?.cutMode==="solid"&&o?.role==="cut"&&o.recipe?.field?1:0;let c=(o?.yaw??0)*Math.PI/180;t.uTilted.value[a]=o&&sn(o)?1:0,o?t.uInverseRotation.value[a].fromArray(gd(o)):t.uInverseRotation.value[a].identity(),t.uStableYaw.value[a].set(Math.cos(c),Math.sin(c),Zp(o)?1:0,0);let l=o?.recipe?.character;t.uCharacterFlags.value[a].set(l?.enabled?1:0,...sm(s[a]?.seed??0)),t.uCharacterShape.value[a].set(l?.warpScale??1,l?.billowScale??1,l?.octave??0,l?.erosionScale??1),t.uCharacterDetail.value[a].set(l?.wisps??0,l?.cavities??0,l?.clipSoft??.07,l?.clipNoise??0)}}updateMaterial(e){let t=this.viewer,n=t.material,s=!!t.scene?.render?.look?.enabled,r=e.every((c,l)=>!c.recipe||t.uniforms.uCached.value[l]===1),a=!1,o={...ms(t.scene.version),SKY_SOLID_CUTS:t.scene.render?.cutMode==="solid"?1:0,SKY_FULL_ROTATION:e.some(sn)?1:0,SKY_SOFTNESS_PAINT:e.some(gs)?1:0,SKY_PAINT_HARDNESS:e.some(da)?1:0,SKY_STUDIO_FIELD:0,SKY_SOURCE_FIELD:0,SKY_STUDIO_LIGHTING:s?1:0,SKY_CACHED_RECIPES:r&&!a?1:0,SKY_ANALYTIC_RECIPES:a||!r&&e.some(c=>c.recipe)?1:0,SKY_SCENE_LIGHTING:s&&t.scene?.render?.look?.visibility==="scene-cache-v1"?1:0,SKY_VISIBILITY_LOOKUP:s&&t.uniforms.uUseVisibility?.value===1?1:0,SKY_OCCUPIED_PATHS:a||s||e.some(c=>c.recipe)?1:0,SKY_VIEW_LIMIT:s?192:128,SKY_SHADOW_LIMIT:s?40:24};Object.keys(o).some(c=>n.defines[c]!==o[c])&&(Object.assign(n.defines,o),n.needsUpdate=!0)}quality(e=!1){let t=this.viewer,n=t.scene?.render?.look?.enabled;return e?{steps:n?128:80,shadows:n?32:t.hasRecipe?24:8}:this.previewQuality()}previewQuality(){let e=this.viewer;return dg(this.mode,{interactive:!!e.interactive,studio:!!e.scene?.render?.look?.enabled,recipe:!!e.hasRecipe,previewWidth:e.scene?.render?.previewWidth??640,densityResolution:e.scene?.render?.densityResolution??64})}setMode(e){if(!xd.includes(e))throw Error("Unknown viewport quality");this.mode=e,this.applyQuality(),this.viewer.resize()}applyQuality(e=!1){let t=this.quality(e);this.viewer.uniforms.uSteps.value=t.steps,this.viewer.uniforms.uShadowSteps.value=t.shadows}};var fg=`// Mixed HG and artistic fill follow the supplied MIT reference, not solved multiple scattering.\r
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
}`,zc=class{constructor(e){this.viewer=e,this.sceneKeys=new WeakMap,this.format=e.renderer.extensions.has("EXT_color_buffer_float")?"RG16F":"RGBA8",this.cooks=0,this.createdTargets=0,this.disposedTargets=0,this.error=null,this.disabled=!1,this.fallback=new Jt(new Uint8Array([255,255,0,255]),1,1,1),Object.assign(this.fallback,{format:mt,type:ot,unpackAlignment:1,needsUpdate:!0});let t=()=>Array.from({length:8},()=>new Be);Object.assign(e.uniforms,{uVisibility:{value:this.fallback},uUseVisibility:{value:0},uVisibilitySlots:{value:Array(8).fill(-1)},uVisibilityCells:{value:new I(1,1,1)},uVisibilityDimensions:{value:new I(1,1,1)},uVisibilityLo:{value:t()},uVisibilityHi:{value:t()}}),this.uniforms={...e.uniforms,uVisibilityCookIndex:{value:0},uVisibilitySlice:{value:0},uVisibilityCookLo:{value:new I},uVisibilityCookHi:{value:new I}};let n=e.material.fragmentShader,s=n.indexOf("void main() {");if(s<0)throw Error("Visibility prototype requires the cloud evaluator");this.material=new oi({uniforms:this.uniforms,vertexShader:e.material.vertexShader,fragmentShader:n.slice(0,s)+iE,defines:{...e.material.defines,SKY_SCENE_LIGHTING:1,SKY_VISIBILITY_LOOKUP:0},glslVersion:Si,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.pass=new ai,this.pass.add(new se(e.quad.geometry,this.material)),this.camera=new vi}clear(){this.target&&(this.target.dispose(),this.disposedTargets++),this.target=null,this.key=null,this.layout=null,this.viewer.uniforms.uVisibility.value=this.fallback,this.viewer.uniforms.uUseVisibility.value=0}requestKey(e,t){let n=this.sceneKeys.get(e);n||(n=new Map,this.sceneKeys.set(e,n));let s=t+":"+this.viewer.densityCache.format;return n.has(s)||n.set(s,_g(e,t,this.viewer.densityCache.format)),n.get(s)}ensure(e,{draft:t=!1,requested:n=!1}={}){let s=this.viewer,r=s.uniforms;if(r.uUseVisibility.value=0,!n){this.clear(),this.disabled=!1,this.error=null,this.failedKey=null;return}if(r.uSolo.value>=0&&r.uInspect.value<4)return;let a=e.map((l,h)=>({volume:l,index:h})).filter(({volume:l})=>l.role==="add");if(!a.length){this.clear();return}let o=s.scene.render?.densityLink?Math.max(64,...Array.from(s.densityCache.entries.values(),l=>l.size)):s.densityCache.size,c=this.requestKey(s.scene,o);if(!(this.disabled&&this.failedKey===c)){if(this.failedKey!==c&&(this.disabled=!1,this.error=null),this.target&&this.key===c){r.uUseVisibility.value=1;return}if(!t)try{let l=s.renderer.getContext().getParameter(s.renderer.getContext().MAX_3D_TEXTURE_SIZE),h=mg(a.length,o,l);for(let d=0;d<2;d++)try{(!this.target||JSON.stringify(this.layout)!==JSON.stringify(h))&&(this.clear(),this.layout=h,this.target=new dn(...h.dimensions,{format:this.format==="RG16F"?Zi:mt,type:this.format==="RG16F"?Zt:ot,minFilter:Je,magFilter:Je,depthBuffer:!1,stencilBuffer:!1}),this.createdTargets++),r.uVisibilitySlots.value.fill(-1),r.uVisibilityCells.value.fromArray(h.cells),r.uVisibilityDimensions.value.fromArray(h.dimensions);for(let[u,{volume:f,index:g}]of a.entries()){let S=r.uSize.value[g],m=r.uWarp.value[g].w,p=f.recipe?r.uCacheLo.value[g].toArray().slice(0,3):[-m/S.x,-m/S.y,-m/S.z],b=f.recipe?r.uCacheHi.value[g].toArray().slice(0,3):[m/S.x,m/S.y,m/S.z];r.uVisibilitySlots.value[g]=u,r.uVisibilityLo.value[g].set(...p,o),r.uVisibilityHi.value[g].set(...b,0)}this.cook(a,h),this.key=c,this.failedKey=null,this.disabled=!1,this.error=null,this.cooks++,r.uVisibility.value=this.target.texture,r.uUseVisibility.value=1;return}catch(u){if(this.clear(),this.format==="RG16F"){this.fallbackReason=u.message,this.format="RGBA8";continue}throw u}}catch(l){this.clear(),this.error=l.message,this.disabled=!0,this.failedKey=c}}}cook(e,t){let n=this.viewer,s=n.renderer,r=n.uniforms,a=s.getContext(),o=s.getRenderTarget(),c=s.getActiveCubeFace(),l=s.getActiveMipmapLevel(),h=s.getViewport(new Be),d=s.getScissor(new Be),u=s.getScissorTest(),f={solo:r.uSolo.value,inspect:r.uInspect.value,shadows:r.uShadowSteps.value,occupied:r.uOccupied.value},g={...n.material.defines,SKY_VISIBILITY_LOOKUP:0};JSON.stringify(g)!==JSON.stringify(this.material.defines)&&(this.material.defines=g,this.material.needsUpdate=!0),r.uSolo.value=-1,r.uInspect.value=4,r.uShadowSteps.value=32,r.uOccupied.value=1;try{for(let[S,{index:m}]of e.entries()){let p=gg(t,S),b=t.resolution;this.uniforms.uVisibilityCookIndex.value=m,this.uniforms.uVisibilityCookLo.value.copy(r.uVisibilityLo.value[m]),this.uniforms.uVisibilityCookHi.value.copy(r.uVisibilityHi.value[m]);for(let A=0;A<b;A++){if(this.uniforms.uVisibilitySlice.value=(A+.5)/b,s.setRenderTarget(this.target,p[2]*b+A),s.setViewport(p[0]*b,p[1]*b,b,b),s.setScissor(p[0]*b,p[1]*b,b,b),s.setScissorTest(!0),A===0&&a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE)throw Error("Visibility "+this.format+" framebuffer is incomplete");s.render(this.pass,this.camera)}}if(a.getError()!==a.NO_ERROR)throw Error("GPU error during visibility cooking")}finally{r.uSolo.value=f.solo,r.uInspect.value=f.inspect,r.uShadowSteps.value=f.shadows,r.uOccupied.value=f.occupied,s.setRenderTarget(o,c,l),s.setViewport(h),s.setScissor(d),s.setScissorTest(u)}}info(){return{sampling:{sun:32,sky:16,shadowDistance:22,scope:"all enabled scene density"},enabled:!!this.viewer.uniforms.uUseVisibility.value,error:this.error,format:this.format,fallbackReason:this.fallbackReason??null,resolution:this.layout?.resolution??0,cells:this.layout?.count??0,dimensions:this.layout?.dimensions??[],storageBytes:this.layout?.payloadBytes??0,cooks:this.cooks,createdTargets:this.createdTargets,disposedTargets:this.disposedTargets,note:"Payload excludes density and driver allocations; interpolation is bounded to each cell."}}transport(){let e=this.info();return{model:this.viewer.scene.render?.look?.visibility??"direct-v1",path:e.enabled?"local-atlas":this.viewer.scene.render?.look?.visibility==="scene-cache-v1"&&this.viewer.scene.render.look.enabled?"scene-direct":"original-direct",scope:this.viewer.scene.render?.look?.visibility==="scene-cache-v1"&&this.viewer.scene.render.look.enabled?"all enabled scene density":"legacy selected-cloud policy",sunSamples:e.enabled?32:this.viewer.uniforms.uShadowSteps.value,skySamples:e.enabled?16:this.viewer.scene.render?.look?.enabled?this.viewer.uniforms.uShadowSteps.value>=32?16:this.viewer.uniforms.uShadowSteps.value>=24?12:4:0,shadowDistance:22,format:e.enabled?e.format:null,resolution:e.resolution,cells:e.cells,dimensions:e.dimensions,payloadBytes:e.storageBytes}}dispose(){this.clear(),this.material.dispose(),this.fallback.dispose()}};var Hc=class{constructor(e){this.viewer=e;let t=this.canvas=e.renderer.domElement,n=e.orbit;n.mouseButtons.LEFT=null,n.mouseButtons.RIGHT=null,n.mouseButtons.MIDDLE=Qt.PAN,t.addEventListener("pointerdown",r=>{if(t.focus({preventScroll:!0}),r.button!==1||!this.allowed()||this.pointer!==void 0)return;this.pointer=r.pointerId,this.previous=n.enabled,n.enabled=!0,this.pivot=r.altKey?n.target.clone():null;let a=r.ctrlKey||r.metaKey||r.shiftKey;n.mouseButtons.MIDDLE=r.altKey&&r.ctrlKey?Qt.DOLLY:r.altKey?a?Qt.PAN:Qt.ROTATE:a?Qt.ROTATE:Qt.PAN,r.preventDefault()},!0);let s=r=>{if(r.pointerId!==this.pointer)return;let a=this.previous;this.pointer=void 0,setTimeout(()=>{this.pointer===void 0&&(n.enabled=a&&e.mode!=="sky")},0)};for(let r of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(r,s,!0);t.addEventListener("wheel",()=>{if(!this.allowed())return;let r=n.enabled;n.enabled=!0,this.pointer===void 0&&(this.pivot=n.target.clone()),setTimeout(()=>{this.pointer===void 0&&(n.enabled=r&&e.mode!=="sky")},0)},{capture:!0,passive:!0}),n.addEventListener("end",()=>{this.pivot&&(e.camera.position.add(this.pivot.clone().sub(n.target)),n.target.copy(this.pivot),this.pivot=null,e.dirty=!0)}),window.addEventListener("blur",()=>this.cancel())}cancel(){this.pointer!==void 0&&this.canvas.dispatchEvent(new PointerEvent("pointercancel",{pointerId:this.pointer,bubbles:!0}))}allowed(){return this.viewer.mode!=="sky"&&!this.viewer.gizmo.dragging&&!this.viewer.events.brushActive?.()}};var Vc=class{constructor(e,t){this.owner=e,this.create=t,this.entries=new Map,this.retiredUploads=0,this.retiredScans=0}update(e,t){this.active=e.volumes.filter(s=>s.enabled);let n=new Set(this.active.filter(s=>s.recipe?.field).map(s=>s.id));for(let[s,r]of this.entries)n.has(s)||(this.retiredUploads+=r.uploads,this.retiredScans+=r.supportScans,r.dispose(),this.entries.delete(s));for(let s of this.active)if(s.recipe?.field){let r=this.entries.get(s.id);r||(r=this.create(),this.entries.set(s.id,r)),r.update({...e,volumes:[s]})}this.selected=this.active.findIndex(s=>s.id===t&&s.recipe?.field),this.selected<0&&(this.selected=this.active.findIndex(s=>s.recipe?.field)),this.restoreBinding()}bind(e){let t=this.entries.get(this.active[e]?.id),n=this.owner.viewer.uniforms;n.uSourceFieldIndex.value=t?e:-1,n.uSourceField.value=t?.texture??this.owner.viewer.texture,t&&(n.uSourceFieldLo.value.fromArray(t.grid.bounds.lo),n.uSourceFieldHi.value.fromArray(t.grid.bounds.hi))}restoreBinding(){this.bind(this.selected)}supportBounds(e,t){let n=[...this.entries.values()].find(s=>s.key===e.data&&s.boundsKey===JSON.stringify(e.bounds));return n?n.supportBounds(e,t):null}info(){let e=this.entries.get(this.active[this.selected]?.id);return{active:this.entries.size>0,resolution:e?.texture?.image.width??0,fields:this.entries.size,uploads:this.owner.uploads+this.retiredUploads+[...this.entries.values()].reduce((t,n)=>t+n.uploads,0),supportScans:this.owner.supportScans+this.retiredScans+[...this.entries.values()].reduce((t,n)=>t+n.supportScans,0),storageBytes:[...this.entries.values()].reduce((t,n)=>t+(n.texture?.image.data.byteLength??0),0)}}close(){for(let e of this.entries.values())e.dispose();this.entries.clear()}};var Gc=class i{constructor(e){this.viewer=e,this.uploads=0,this.supportCache=new Map,this.supportScans=0,Object.assign(e.uniforms,{uSourceField:{value:e.texture},uSourceFieldIndex:{value:-1},uSourceFieldLo:{value:new I},uSourceFieldHi:{value:new I(1,1,1)}})}update(e,t){if(e.version>=21&&e.volumes.filter(l=>l.enabled&&l.recipe?.field).length>1){this.multi||(this.texture?.dispose(),this.texture=null,this.key=null,this.grid=null,this.supportCache.clear(),this.multi=new Vc(this,()=>new i({uniforms:{},texture:this.viewer.texture}))),this.multi.update(e,t);return}this.multi&&(this.multi.close(),this.multi=null,this.key=null,this.grid=null,this.boundsKey=null);let n=this.viewer.uniforms,s=e.volumes.filter(l=>l.enabled),r=s.findIndex(l=>l.recipe?.field);if(n.uSourceFieldIndex.value=r,r<0){this.texture?.dispose(),this.texture=null,this.key=null,this.boundsKey=null,this.grid=null,this.supportCache.clear(),n.uSourceField.value=this.viewer.texture;return}let a=s[r].recipe.field,o=JSON.stringify(a.bounds),c=a.data!==this.key;if((c||o!==this.boundsKey)&&(this.grid=nn(a),this.supportCache.clear()),this.texture&&this.texture.image.width!==this.grid.n&&(this.texture.dispose(),this.texture=null),c||!this.texture){this.texture||(this.texture=new Jt(new Float32Array(this.grid.values.length),this.grid.n,this.grid.n,this.grid.n),Object.assign(this.texture,{format:qi,type:Lt,minFilter:pt,magFilter:pt,unpackAlignment:1,generateMipmaps:!1}));let l=this.texture.image.data;for(let h=0;h<l.length;h++)l[h]=this.grid.values[h]/vn;this.texture.needsUpdate=!0,this.uploads++}this.key=a.data,this.boundsKey=o,n.uSourceField.value=this.texture,n.uSourceFieldLo.value.fromArray(a.bounds.lo),n.uSourceFieldHi.value.fromArray(a.bounds.hi)}supportBounds(e,t){if(this.multi){let r=this.multi.supportBounds(e,t);if(r)return r}if(!(this.grid&&e.data===this.key&&JSON.stringify(e.bounds)===this.boundsKey))return this.supportScans++,Ts(e,t);this.supportCache.has(t)||(this.supportCache.size>=4&&this.supportCache.delete(this.supportCache.keys().next().value),this.supportScans++,this.supportCache.set(t,Ts(e,t,this.grid)));let s=this.supportCache.get(t);return{...s,lo:[...s.lo],hi:[...s.hi]}}bindCook(e){this.multi?.bind(e)}restoreBinding(){this.multi?.restoreBinding()}dispose(){this.multi?.close(),this.texture?.dispose(),this.texture=null}info(){return this.multi?this.multi.info():{active:this.viewer.uniforms.uSourceFieldIndex.value>=0,resolution:this.texture?.image.width??0,uploads:this.uploads,supportScans:this.supportScans,storageBytes:this.texture?.image.data.byteLength??0}}};var Wc=class{constructor(e){this.gl=e,this.fence=null,this.enabled=!0,this.submitted=0,this.waits=0,this.error=null}ready(){let e=this.gl;if(e.isContextLost())return this.fence=null,!1;if(!this.enabled||!this.fence)return!0;let t=e.clientWaitSync(this.fence,0,0);return t===e.TIMEOUT_EXPIRED?(this.waits++,!1):(this.clear(),t===e.WAIT_FAILED&&(this.enabled=!1,this.error="GPU completion polling failed"),!0)}submit(){let e=this.gl;return!this.enabled||e.isContextLost()||this.fence?!1:(this.fence=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),this.fence?(this.submitted++,e.flush(),!0):(this.enabled=!1,this.error="GPU frame fence unavailable",!1))}clear(){this.fence&&!this.gl.isContextLost()&&this.gl.deleteSync(this.fence),this.fence=null}info(){return{enabled:this.enabled,inFlight:!!this.fence,submitted:this.submitted,waits:this.waits,error:this.error}}};function vd(i,e){let t=ni(i);if(sn(i))return J0(i,e.map((o,c)=>o*t[c]));let n=e.map((o,c)=>o*t[c]),s=i.yaw*Math.PI/180,r=Math.cos(s),a=Math.sin(s);return[r*n[0]+a*n[2],n[1],-a*n[0]+r*n[2]]}function xg(i,e){return vd(i,e).map((t,n)=>t+i.position[n])}function vg(i,e,t){let n=new Be,s=r=>{if(e.dragging)return;if(!t()){e.viewport=null;return}let a=i.getBoundingClientRect(),o=a.width/2;e.viewport=n.set(r.clientX<a.left+o?0:o,0,o,a.height)};return i.addEventListener("pointermove",s,{capture:!0}),i.addEventListener("pointerdown",s,{capture:!0}),()=>{i.removeEventListener("pointermove",s,{capture:!0}),i.removeEventListener("pointerdown",s,{capture:!0})}}var Xc=class{constructor(e){this.viewer=e}set(e){let t=this.viewer;if(e&&(!t.workshop||t.mode==="sky"||!t.scene?.volumes.some(s=>s.id===t.selectedId&&s.enabled&&s.role==="add"&&s.recipe?.field)))return!1;let n=ag(t.camera,t.orbit.target,e);return n===t.camera||(t.camera=n,t.orbit.object=n,t.gizmo.camera=n,t.sourceMesh?.influence.clear(),t.resize(),t.orbit.update(),t.dirty=!0),!0}reference(){if(!this.set(!0))return!1;let e=this.viewer;e.resize();let t=e.scene.volumes.find(l=>l.id===e.selectedId),n=Math.max(...t.size.map((l,h)=>l*(t.shapeScale?.[h]??1))),s=Ic(e.camera),r=.12,a=.055,o=new I(Math.sin(r)*Math.cos(a),Math.sin(a),-Math.cos(r)*Math.cos(a)),c=Math.max(2,2.95/s)*n;return e.camera.zoom=1,e.camera.top=c,e.camera.bottom=-c,e.camera.left=-c*s,e.camera.right=c*s,e.camera.near=.01,e.camera.far=Math.max(300,n*30),e.orbit.target.fromArray(t.position),e.camera.position.copy(e.orbit.target).addScaledVector(o,-8*n),e.camera.updateProjectionMatrix(),e.orbit.update(),e.sourceMesh?.influence.clear(),e.dirty=!0,!0}};var nE=`precision highp float;
in vec3 position; out vec2 vUV;
void main(){vUV=position.xy*0.5+0.5;gl_Position=vec4(position.xy,0,1);}`,Yc=class{constructor(e,t){this.events=t,this.renderer=new Gl({canvas:e,antialias:!1,preserveDrawingBuffer:!0}),this.frameQueue=new Wc(this.renderer.getContext()),e.addEventListener("webglcontextlost",()=>this.frameQueue.clear()),this.renderer.setPixelRatio(1),this.renderer.autoClear=!1,this.camera=new kt(55,16/9,.1,300),this.camera.position.set(11,6,-5),this.orbit=new ql(this.camera,e),this.orbit.target.set(0,3,8),this.orbit.enableDamping=!1,this.orbit.update(),this.orbit.addEventListener("change",()=>{this.dirty=!0}),this.orbit.addEventListener("start",()=>this.setInteractive(!0)),this.orbit.addEventListener("end",()=>this.setInteractive(!1));let n=$0();this.texture=new Jt(n.data,n.size,n.size,n.size),Object.assign(this.texture,{format:mt,type:ot,minFilter:Je,magFilter:Je,wrapS:Ai,wrapT:Ai,wrapR:Ai,unpackAlignment:1,needsUpdate:!0});let s=()=>Array.from({length:8},()=>new Be);this.scaffoldData=new Float32Array(Ha*2*8*4),this.scaffoldTexture=new mn(this.scaffoldData,Ha*2,8,mt,Lt),this.scaffoldTexture.needsUpdate=!0,this.sculptData=new Float32Array(256*4),this.sculptTexture=new mn(this.sculptData,32,8,mt,Lt),this.sculptTexture.needsUpdate=!0,this.maskWidth=2*(Su+tc*wu),this.maskData=new Float32Array(this.maskWidth*8*4),this.cutData=new Float32Array(256*4),this.maskTexture=new mn(this.maskData,this.maskWidth,8,mt,Lt),this.cutTexture=new mn(this.cutData,32,8,mt,Lt),this.maskTexture.needsUpdate=!0,this.cutTexture.needsUpdate=!0,this.uniforms={uNoise:{value:this.texture},uInvPV:{value:new Ke},uOrigin:{value:new I},uSun:{value:new I},uZenith:{value:new Fe},uHorizon:{value:new Fe},uLo:{value:new I},uHi:{value:new I},uIntensity:{value:1},uAmbient:{value:.2},uExposure:{value:1},uCount:{value:0},uPanorama:{value:0},uSteps:{value:48},uShadowSteps:{value:5},uPosition:{value:s()},uSize:{value:s()},uForm:{value:s()},uWarp:{value:s()},uScaffold:{value:this.scaffoldTexture},uRecipeInfo:{value:s()},uRecipeFlags:{value:s()},uSolo:{value:-1},uInspect:{value:4},uProfile:{value:s()},uSculpt:{value:this.sculptTexture},uSculptCount:{value:new Int32Array(8)},uOrthographic:{value:0},uCameraNear:{value:.1},uCloudBackdrop:{value:1},uLinear:{value:0},uIncludeSun:{value:1},uTileUV:{value:new Be(1,1,0,0)},uMasks:{value:this.maskTexture},uCuts:{value:this.cutTexture},uMaskCount:{value:new Int32Array(8)},uCutCount:{value:new Int32Array(8)}},Object.assign(this.uniforms,{uLayerCount:{value:new Int32Array(8)},uLayerInfo:{value:Array.from({length:8*tc},()=>new Be)}}),Object.assign(this.uniforms,{uCached:{value:new Int32Array(8)},uCacheLo:{value:s()},uCacheHi:{value:s()},uOccupied:{value:0},uSupportLo:{value:s()},uSupportHi:{value:s()}}),this.field=new Gc(this),this.fieldSupport=(a,o)=>this.field.supportBounds(a,o),this.studio=new kc(this),this.densityCache=new Tc(this.renderer,this.uniforms,this.fieldSupport,this.field);for(let a=0;a<8;a++)this.uniforms[`uDensity${a}`]={value:this.densityCache.fallback};this.material=new oi({uniforms:this.uniforms,vertexShader:nE,fragmentShader:Dp.replace("/* RECIPE_FIELD */",ec).replace("/* OCCUPIED_INTERVALS */",Op).replace("/* SCULPT_FIELD */",hr).replace("/* MODIFIER_FIELDS */",ur).replace("/* STUDIO_LIGHTING */",fg).replace("/* SCENE_LIGHTING */",pg).replace("/* VISIBILITY_LOOKUP */",yg),defines:{SKY_STUDIO_FIELD:0,SKY_SOURCE_FIELD:0,SKY_STUDIO_LIGHTING:0,SKY_CACHED_RECIPES:0,SKY_ANALYTIC_RECIPES:0,SKY_OCCUPIED_PATHS:0,SKY_VIEW_LIMIT:96,SKY_SHADOW_LIMIT:24},glslVersion:Si,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.pass=new ai,this.quad=new se(new _i(2,2),this.material),this.pass.add(this.quad),this.visibilityCache=new zc(this),this.screenCamera=new vi,this.overlay=new ai,this.proxy=new Pt,this.overlay.add(this.proxy),this.gizmoCenter=[0,0,0],this.gizmo=new Jl(this.camera,e),this.overlay.add(this.gizmo.getHelper()),vg(e,this.gizmo,()=>this.splitSource);let r=()=>{this.gizmo.object&&this.overlay.updateMatrixWorld(!0)};e.addEventListener("pointermove",r,{capture:!0}),e.addEventListener("pointerdown",r,{capture:!0}),this.gizmo.setSize(.8),this.navigation=new Hc(this),this.projection=new Xc(this),this.gizmo.addEventListener("dragging-changed",a=>{this.orbit.enabled=!a.value&&this.mode!=="sky"}),this.gizmo.addEventListener("mouseDown",()=>{this.setInteractive(!0),t.begin()}),this.gizmo.addEventListener("objectChange",()=>{let a=this.scene?.volumes.find(h=>h.id===this.selectedId),o=Y0(a??{},this.proxy.scale.toArray()),c=ng(this.proxy),l=vd({size:o,...c},this.gizmoCenter);this.proxy.scale.fromArray(o),t.transform({position:this.proxy.position.toArray().map((h,d)=>h-l[d]),size:o,...c}),this.dirty=!0}),this.gizmo.addEventListener("mouseUp",()=>{this.setInteractive(!1),t.commit()}),e.addEventListener("pointercancel",()=>{this.cancelDrag(),t.cancel()}),this.box=new os(new zt,16042366),this.overlay.add(this.box),this.mode="orbit",this.dirty=!0,this.frameMs=0,this.frames=0,this.skyYaw=0,this.skyPitch=Math.atan(.3),this.skyDrag=null,e.addEventListener("pointerdown",a=>{this.mode!=="sky"||a.button!==0||(this.skyDrag={x:a.clientX,y:a.clientY,yaw:this.skyYaw,pitch:this.skyPitch},e.setPointerCapture(a.pointerId),this.setInteractive(!0))}),e.addEventListener("pointermove",a=>{this.skyDrag&&(this.skyYaw=this.skyDrag.yaw-(a.clientX-this.skyDrag.x)*.005,this.skyPitch=Math.max(-1.5,Math.min(1.5,this.skyDrag.pitch+(a.clientY-this.skyDrag.y)*.005)),this.skyCamera(),this.dirty=!0)});for(let a of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(a,()=>{this.skyDrag&&(this.skyDrag=null,this.setInteractive(!1))});this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.parentElement),this.resize(),this.animate()}resize(){let e=this.renderer.domElement.getBoundingClientRect();this.cssWidth=e.width,this.cssHeight=e.height;let t=this.studio.previewQuality(),n=this.splitSource?2:1,s=Math.min((t.maxWidth??t.width)*n,Math.max(160,Math.round(e.width*(this.splitSource?1:t.scale)))),r=Math.max(100,Math.round(s*e.height/e.width));(this.renderer.domElement.width!==s||this.renderer.domElement.height!==r)&&this.renderer.setSize(s,r,!1),rg(this.camera,s/r/(this.splitSource?2:1)),this.dirty=!0}setScene(e,t,n=!0){if(this.sculptEvaluation??=new Bc(this),e=this.sculptEvaluation.update(e,t,n),!e)return;this.scene=structuredClone(e),this.selectedId=t,this.camera.isOrthographicCamera&&!e.volumes.some(l=>l.id===t&&l.enabled&&l.role==="add"&&l.recipe?.field)&&this.projection.set(!1),this.field.update(e,t),this.studio.update(e),this.splitSource&&this.sourceMesh.update(this.scene,t),this.densityCache.setResolution(e.render?.densityResolution??64),this.densityCache.policy=e.render,this.densityCache.version=e.version,this.layerStride=e.version>=25?8:4;let s=this.uniforms,r=e.volumes.filter(l=>l.enabled);s.uCount.value=r.length;let a=this.previewBounds();this.hasRecipe=r.some(l=>l.recipe),s.uOccupied.value=this.hasRecipe||e.render?.look?.visibility==="scene-cache-v1"?1:0,s.uShadowSteps.value=this.hasRecipe?this.interactive?6:16:this.interactive?3:5,s.uLo.value.fromArray(a.lo),s.uHi.value.fromArray(a.hi),s.uSun.value.fromArray(Q0(e.sun)),s.uIntensity.value=e.sun.intensity,s.uAmbient.value=e.sun.ambient,s.uExposure.value=e.sky.exposure,s.uZenith.value.set(e.sky.zenith),s.uHorizon.value.set(e.sky.horizon),r.forEach((l,h)=>{s.uPosition.value[h].set(...l.position,l.role==="add"?1:-1),s.uSize.value[h].set(...ni(l),l.yaw*Math.PI/180),s.uForm.value[h].set(l.noiseScale,l.erosion,l.density,0),s.uWarp.value[h].set(l.displacement,l.smear,l.seed/137,Xa(l,this.fieldSupport)),s.uRecipeFlags.value[h].set(0,0,0,0),s.uRecipeInfo.value[h].set(0,0,0,.3),s.uProfile.value[h].set(1,1,0,0),s.uSculptCount.value[h]=l.recipe?.sculpt?.length??0,s.uMaskCount.value[h]=l.recipe?.masks?.length??0,s.uLayerCount.value[h]=l.recipe?.layers?.length??0;let d=l.recipe?.massMode==="ordered",u=l.recipe?fr(l.recipe):[],f=d?u:u.filter(g=>g.role==="cut");if(s.uCutCount.value[h]=f.length,l.recipe){let g=l.recipe,{segments:S,primaryCount:m}=Ga(g);s.uProfile.value[h].set(g.profile.edgeGamma??1,g.profile.interiorVariation??1,d?1:0,0),(g.sculpt??[]).forEach((_,v)=>{this.sculptData.set([..._.center,_.radius],(h*32+v*2)*4),this.sculptData.set([..._.delta,_.enabled?_.gain:0],(h*32+v*2+1)*4)}),(g.masks??[]).forEach((_,v)=>{this.maskData.set([..._.center,_.radius],(h*this.maskWidth+v*2)*4),this.maskData.set([_.value,bu.indexOf(_.channel),_.enabled?1:0,0],(h*this.maskWidth+v*2+1)*4)});let p=g.masks?.length??0,b=gs(l);(g.layers??[]).forEach((_,v)=>{s.uLayerInfo.value[h*this.layerStride+v].set(_.target,_.enabled&&(_.channel!=="softness"||b)?_.opacity:0,dr[_.channel].id,_.stamps.length),_.stamps.forEach((M,T)=>{this.maskData.set([...M.center,M.radius],(h*this.maskWidth+(p+T)*2)*4),this.maskData.set([M.value,_.hardness??0,M.enabled?1:0,0],(h*this.maskWidth+(p+T)*2+1)*4)}),p+=_.stamps.length}),f.forEach((_,v)=>{this.cutData.set([..._.a,_.radius],(h*32+v*2)*4),this.cutData.set([..._.b,d?_.role==="add"?1:-1:_.radius],(h*32+v*2+1)*4)});let A=Hi(l,4,this.fieldSupport);s.uSupportLo.value[h].set(...A.lo,0),s.uSupportHi.value[h].set(...A.hi,0),s.uRecipeInfo.value[h].set(g.field?1:S.length,g.field?1:m,g.billow.enabled?g.billow.strength:0,g.profile.feather),s.uRecipeFlags.value[h].set(1,g.erosion.enabled?1:0,g.base.height,g.base.enabled?1:0),S.forEach(({a:_,b:v},M)=>{this.scaffoldData.set([..._.position,_.radius],(h*Ha*2+M*2)*4),this.scaffoldData.set([...v.position,v.radius],(h*Ha*2+M*2+1)*4)})}}),this.scaffoldTexture.needsUpdate=!0,this.sculptTexture.needsUpdate=!0,this.maskTexture.needsUpdate=!0,this.cutTexture.needsUpdate=!0,s.uSolo.value=this.workshop?r.findIndex(l=>l.id===t):-1,this.workshop&&s.uSolo.value<0&&(s.uSolo.value=8);let o=e.volumes.find(l=>l.id===t);if(this.box.visible=!!o&&this.mode!=="sky"&&!this.workshop,o){if(n){let d=[0,0,0];if(o.recipe?.field&&(!this.workshop||this.workshopTransform)){let u=Hi(o,0,this.fieldSupport);d=u.lo.map((f,g)=>(f+u.hi[g])/2)}this.gizmoCenter=d.map((u,f)=>u*(o.shapeScale?.[f]??1)),this.proxy.position.fromArray(xg(o,d)),this.proxy.scale.fromArray(o.size),Rc(this.proxy,o)}let l=new I(...o.position),h=new I(...ni(o)).multiplyScalar(2);if(this.box.box.setFromCenterAndSize(l,h),o.recipe?.field||sn(o)){let d=o.recipe?Hi(o,4,this.fieldSupport):{lo:[-1,-1,-1],hi:[1,1,1]},u=new Ke().compose(l,qa(o),new I(...ni(o)));this.box.box.set(new I(...d.lo),new I(...d.hi)).applyMatrix4(u)}this.mode!=="sky"&&(!this.workshop||this.workshopTransform)?this.gizmo.attach(this.proxy):this.gizmo.detach()}else this.gizmo.detach();this.mode==="sky"&&this.skyCamera();let c=e.render?.previewWidth??640;this.previewQuality!==c&&(this.previewQuality=c,this.resize()),this.studio.applyQuality(),this.dirty=!0}previewBounds(){return Ya(this.workshop?{volumes:this.scene.volumes.filter(e=>e.id===this.selectedId)}:this.scene,this.fieldSupport)}setWorkshop(e){this.workshopTransform=!1,e||(this.projection.set(!1),this.setSourceView(!1)),this.workshop=e,e?(this.composerCamera={position:this.camera.position.clone(),target:this.orbit.target.clone()},this.setView("orbit"),this.focusSelected()):this.composerCamera&&(this.camera.position.copy(this.composerCamera.position),this.orbit.target.copy(this.composerCamera.target),this.orbit.update()),this.sculptEvaluation?.pending||this.setScene(this.scene,this.selectedId)}setSourceView(e){this.splitSource=!!e&&!!this.workshop,this.splitSource&&(this.sourceMesh??=new Uc(this),this.sourceMesh.update(this.scene,this.selectedId),this.sourceMesh.health.refresh()),this.splitSource||(this.sourceMesh?.health.invalidate(),this.sourceMesh?.influence.clear()),document.getElementById("sculpt-health-panel").hidden=!this.splitSource,document.getElementById("source-mesh-labels").hidden=!this.splitSource,this.resize()}pointerRect(e){let t=this.renderer.domElement.getBoundingClientRect();if(!this.splitSource)return{left:t.left,top:t.top,width:t.width,height:t.height,source:!1};let n=t.width/2,s=e.clientX<t.left+n;return{left:t.left+(s?0:n),top:t.top,width:n,height:t.height,source:s}}focusSelected(e=!1,t=!1){if(this.sculptEvaluation?.pending){this.sculptEvaluation.focusRequest={selected:this.sculptEvaluation.latest.selected,frameBounds:e,...t?{preserveDirection:!0}:{}};return}let n=this.scene?.volumes.find(s=>s.id===this.selectedId);if(n){if(t){this.resize(),Lc(this.camera,this.orbit,og(n,this.fieldSupport)),this.dirty=!0;return}if(n.recipe?.field){this.resize();let s=this.fieldSupport(n.recipe.field,0),r=e||s.empty?n.recipe.field.bounds:Hi(n,0,this.fieldSupport),a=new Ke().compose(new I(...n.position),qa(n),new I(...ni(n))),o=new zt(new I(...r.lo),new I(...r.hi)).applyMatrix4(a),c=o.getCenter(new I),l=o.getSize(new I).multiplyScalar(.5);if(this.camera.isOrthographicCamera){this.camera.position.copy(c).add(new I(0,0,Math.max(1,l.z*3))),this.camera.lookAt(c),this.camera.updateMatrixWorld(),Pc(this.camera,this.orbit.target,o),this.orbit.update(),this.dirty=!0;return}let h=l.z+Math.max(l.y,l.x/this.camera.aspect)/Math.tan(this.camera.fov*Math.PI/360)*1.1;this.camera.far=Math.max(300,h+l.length()*2),this.camera.updateProjectionMatrix(),this.orbit.target.copy(c),this.camera.position.copy(c).add(new I(0,0,h)),this.orbit.update(),this.dirty=!0;return}this.orbit.target.fromArray(n.position),this.camera.position.fromArray(n.position),this.camera.position.z+=Math.max(...ni(n))*3.7,this.orbit.update(),this.dirty=!0}}skyCamera(){this.camera.position.fromArray(this.scene.observer);let e=new I(Math.sin(this.skyYaw)*Math.cos(this.skyPitch),Math.sin(this.skyPitch),Math.cos(this.skyYaw)*Math.cos(this.skyPitch));this.camera.lookAt(this.camera.position.clone().add(e)),this.camera.updateMatrixWorld()}resetSkyView(){this.skyYaw=0,this.skyPitch=Math.atan(.3),this.mode==="sky"&&this.skyCamera(),this.dirty=!0}setView(e){e==="sky"&&this.projection.set(!1),e!==this.mode&&(e==="sky"?(this.savedCamera={position:this.camera.position.clone(),target:this.orbit.target.clone()},this.skyCamera(),this.gizmo.detach(),this.box.visible=!1):this.savedCamera&&(this.camera.position.copy(this.savedCamera.position),this.orbit.target.copy(this.savedCamera.target),this.orbit.update()),this.mode=e,this.orbit.enabled=e!=="sky",this.dirty=!0)}setTool(e){this.workshopTransform=!!this.workshop,this.gizmo.setMode(e),this.setRotationAxes(this.rotationAxes??"xyz"),this.gizmo.showY=!0,this.dirty=!0}setRotationAxes(e){if(!["xyz","y"].includes(e))throw Error("Choose XYZ or Y-only rotation");this.rotationAxes=e,this.gizmo.showX=this.gizmo.mode!=="rotate"||e==="xyz",this.gizmo.showZ=this.gizmo.showX,this.dirty=!0}setInteractive(e){this.interactive===e||!this.uniforms||(this.interactive=e,this.studio.applyQuality(),this.splitSource&&this.sourceMesh.update(this.scene,this.selectedId),this.resize())}cancelDrag(){this.navigation.cancel(),this.skyDrag=null,this.gizmo.reset(),this.gizmo.dragging=!1,this.orbit.enabled=this.mode!=="sky",this.setInteractive(!1)}render(){let e=this.renderer.domElement.getBoundingClientRect();if((e.width!==this.cssWidth||e.height!==this.cssHeight)&&this.resize(),!this.ensureDensity(this.studio.previewQuality().draft,!0)){this.renderer.setScissorTest(!1),this.renderer.clear();return}this.densityCache.error&&!this.reportedCacheError&&(this.reportedCacheError=!0,this.events.warning?.(`Density cache unavailable; using analytic rendering: ${this.densityCache.error}`));let t=this.uniforms;this.camera.updateMatrixWorld(),t.uInvPV.value.multiplyMatrices(this.camera.matrixWorld,this.camera.projectionMatrixInverse),t.uOrigin.value.copy(this.camera.position),t.uPanorama.value=0,t.uOrthographic.value=this.camera.isOrthographicCamera?1:0,t.uCameraNear.value=this.camera.near;let n=this.renderer,s=n.domElement.width,r=n.domElement.height;if(n.setScissorTest(!1),n.setViewport(0,0,s,r),n.clear(),this.splitSource){let a=Math.floor(s/2);n.setScissorTest(!0),n.setScissor(0,0,a,r),n.setViewport(0,0,a,r),n.render(this.sourceMesh.scene,this.camera),n.clearDepth(),n.render(this.overlay,this.camera),n.setScissor(a,0,s-a,r),n.setViewport(a,0,s-a,r)}n.render(this.pass,this.screenCamera),n.clearDepth(),n.render(this.overlay,this.camera),n.setScissorTest(!1),n.setViewport(0,0,s,r),this.frames++}animate(){if(this.raf=requestAnimationFrame(()=>this.animate()),!this.frameQueue.ready()||this.previewSuspensions||this.events.previewOccluded?.()||!this.dirty||!this.scene)return;let e=performance.now();this.render(),this.frameMs=performance.now()-e,this.dirty=!1,this.frameQueue.submit(),this.frameQueue.error&&!this.reportedQueueError&&(this.reportedQueueError=!0,this.events.warning?.(`${this.frameQueue.error}; preview keeps the selected quality`))}bake(e,t=this.scene,{onTransport:n=()=>{}}={}){t=this.sculptEvaluation.resolve(t);let s=e/2,r=new It(e,s,{depthBuffer:!1}),a=this.uniforms,o=a.uOrigin.value.clone(),c=this.renderer.getRenderTarget(),l=a.uLo.value.clone(),h=a.uHi.value.clone(),d=a.uSolo.value,u=a.uInspect.value,f=this.scene,g=this.selectedId,S=this.dirty;try{t!==f&&this.setScene(t,g,!1);let m=Ya(this.scene,this.fieldSupport);a.uLo.value.fromArray(m.lo),a.uHi.value.fromArray(m.hi),a.uSolo.value=-1,a.uInspect.value=4,a.uOrigin.value.fromArray(this.scene.observer),a.uPanorama.value=1,this.studio.applyQuality(!0),this.ensureDensity(!1),this.renderer.setRenderTarget(r),this.renderer.clear(),this.renderer.render(this.pass,this.screenCamera);let p=new Uint8Array(e*s*4);this.renderer.readRenderTargetPixels(r,0,0,e,s,p),n(this.visibilityCache.transport());let b=new Uint8ClampedArray(p.length),A=e*4;for(let v=0;v<s;v++)b.set(p.subarray(v*A,(v+1)*A),(s-1-v)*A);let _=document.createElement("canvas");return _.width=e,_.height=s,_.getContext("2d").putImageData(new ImageData(b,e,s),0,0),_}finally{this.renderer.setRenderTarget(c),r.dispose(),a.uPanorama.value=0,this.scene!==f&&this.setScene(f,g,!1),a.uOrigin.value.copy(o),a.uSolo.value=d,a.uInspect.value=u,a.uLo.value.copy(l),a.uHi.value.copy(h),this.studio.applyQuality(),this.dirty=S}}readPixels(){let e=this.renderer.domElement.getBoundingClientRect();(this.dirty||e.width!==this.cssWidth||e.height!==this.cssHeight)&&(this.render(),this.dirty=!1);let t=this.renderer.getContext(),n=new Uint8Array(t.drawingBufferWidth*t.drawingBufferHeight*4);return t.readPixels(0,0,t.drawingBufferWidth,t.drawingBufferHeight,t.RGBA,t.UNSIGNED_BYTE,n),{width:t.drawingBufferWidth,height:t.drawingBufferHeight,pixels:Array.from(n)}}ensureDensity(e=!1,t=!1){let n=this.scene.volumes.filter(s=>s.enabled);if(this.densityCache.ensure(n,e),this.studio.updateMaterial(n),this.studio.requiresCache&&n.some((s,r)=>s.recipe&&this.uniforms.uCached.value[r]!==1)){let s="Unable to render this look or sculpted mass: density cache could not complete";if(!t)throw Error(s);return this.cacheFailure||(this.cacheFailure=!0,this.events.warning?.(s)),!1}return this.visibilityCache.ensure(n,{draft:e,requested:this.scene.render?.look?.enabled&&this.scene.render.look.visibility==="scene-cache-v1"}),this.studio.updateMaterial(n),this.visibilityCache.error&&this.reportedVisibilityError!==this.visibilityCache.error&&(this.reportedVisibilityError=this.visibilityCache.error,this.events.warning?.("Cached lighting unavailable; scene-wide direct lighting is active: "+this.visibilityCache.error)),this.cacheFailure&&(this.cacheFailure=!1,this.events.recovered?.()),!0}};var sE=i=>structuredClone(i);function Tr(i,e=[0,3,10]){return{id:i,name:`Cloud ${i}`,enabled:!0,role:"add",position:e,size:[3,1.8,2],yaw:0,density:1.3,seed:i*173%65536,noiseScale:.22,erosion:.3,displacement:.18,smear:0}}function wg(){let i=Tr(1,[-3.5,3,10]),e=Tr(2,[1,3.8,11]);e.size=[3.8,2.4,2.5],e.smear=.2;let t=Tr(3,[4.5,2.8,12]);t.size=[3.5,1.6,2.2];let n=Tr(4,[-6,4,-14]);return n.size=[5,1.5,3],{version:1,name:"Daybreak banks",observer:[0,0,0],sun:{azimuth:-35,elevation:38,intensity:2.4,ambient:.22},sky:{zenith:"#5a9feb",horizon:"#d3e4ee",exposure:1.1},volumes:[i,e,t,n]}}function Za(i,e,t){if(!i||typeof i!="object"||Array.isArray(i))throw Error(`${t} must be an object`);if(Object.keys(i).some(n=>!e.includes(n))||e.some(n=>!(n in i)))throw Error(`${t} has missing or unsupported fields`)}function ui(i,e,t,n){if(typeof i!="number"||!Number.isFinite(i)||i<e||i>t)throw Error(`${n} must be between ${e} and ${t}`)}function Sd(i,e,t,n){if(!Array.isArray(i)||i.length!==3)throw Error(`${n} requires three numbers`);i.forEach(s=>ui(s,e,t,n))}function Sg(i,e){if(typeof i!="string"||!i.trim()||i.length>80)throw Error(`${e} needs 1\u201380 characters`)}function Rs(i){if(Za(i,["version","name","observer","sun","sky","volumes",...i.version>=4?["render"]:[]],"Scene"),![1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].includes(i.version))throw Error("Unsupported scene version");if(i.version>=4){if(Za(i.render,["densityResolution","previewWidth",...i.version>=8?["look"]:[],...i.version>=25?["densityLink","cutMode"]:[]],"Render quality"),!(i.version>=25?[64,96,128,192,256]:[64,96,128]).includes(i.render.densityResolution)||![640,960,1280].includes(i.render.previewWidth))throw Error("Unsupported render quality");if(i.version>=25&&(![0,8,16,32,64].includes(i.render.densityLink)||!["density","solid"].includes(i.render.cutMode)))throw Error("Invalid linked density or cut policy");i.version>=8&&im(i.render.look,i.version)}Sg(i.name,"Scene name"),Sd(i.observer,-100,100,"Observer"),Za(i.sun,["azimuth","elevation","intensity","ambient"],"Sun"),ui(i.sun.azimuth,-180,180,"Sun azimuth"),ui(i.sun.elevation,-10,90,"Sun elevation"),ui(i.sun.intensity,0,6,"Sun intensity"),ui(i.sun.ambient,0,1,"Ambient"),Za(i.sky,["zenith","horizon","exposure"],"Sky");for(let s of["zenith","horizon"])if(typeof i.sky[s]!="string"||!/^#[\da-f]{6}$/i.test(i.sky[s]))throw Error(`Invalid ${s} color`);if(ui(i.sky.exposure,.1,4,"Exposure"),!Array.isArray(i.volumes)||i.volumes.length>8)throw Error("Scene supports at most eight volumes");let e=new Set;for(let s of i.volumes){if(Za(s,["id","name","enabled","role","position","size","yaw","density","seed","noiseScale","erosion","displacement","smear",...i.version>=2?["recipe"]:[],...i.version>=12&&s&&Object.hasOwn(s,"tilt")?["tilt"]:[],...i.version>=20&&s&&Object.hasOwn(s,"shapeScale")?["shapeScale"]:[]],"Volume"),i.version>=2&&s.recipe!==null&&Va(s.recipe,i.version),!Number.isSafeInteger(s.id)||s.id<1||e.has(s.id))throw Error("Volume IDs must be unique positive integers");if(e.add(s.id),Sg(s.name,"Volume name"),typeof s.enabled!="boolean"||!["add","cut"].includes(s.role))throw Error("Invalid volume visibility or role");if(Sd(s.position,-100,100,"Position"),Object.hasOwn(s,"shapeScale")?q0(s):Sd(s.size,.2,30,"Size"),ui(s.yaw,-180,180,"Yaw"),Object.hasOwn(s,"tilt")){if(!Array.isArray(s.tilt)||s.tilt.length!==2)throw Error("Tilt requires X and Z angles");s.tilt.forEach(r=>ui(r,-180,180,"Tilt"))}if(ui(s.density,.1,i.version>=8?12:4,"Density"),ui(s.seed,0,65535,"Seed"),!Number.isInteger(s.seed))throw Error("Seed must be an integer");ui(s.noiseScale,.05,1,"Noise scale"),ui(s.erosion,0,.9,"Erosion"),ui(s.displacement,0,.75,"Displacement"),ui(s.smear,-1,1,"Smear")}let t=i.volumes.filter(s=>s.recipe?.field).length;if(i.version<21&&t>1)throw Error("This prototype supports one sculpt field per scene");let n=bc(i);if(t>n.sculptFields)throw Error(i.version>=24?"Expanded scene supports at most eight sculpt clouds":"Scene supports at most three sculpt clouds");if(i.version>=16&&new TextEncoder().encode(JSON.stringify(i)).byteLength>n.bytes)throw Error(`Scene exceeds ${n.bytes/1048576} MB; simplify layers, compress storage or use Standard sculpt detail`);return sE(i)}function Eg(i){return Rs(JSON.parse(i))}function Tg(i,e=2){let t=Rs(i);if(t.version===1){t.version=2;for(let n of t.volumes)n.recipe=null}if(e>=3&&t.version===2){for(let n of t.volumes)n.recipe&&(n.recipe.structure={enabled:!1,spread:.8,upBias:0,intersections:0},n.recipe.sculpt=[],Object.assign(n.recipe.profile,{edgeGamma:1,interiorVariation:1}));t.version=3}if(e>=4&&t.version===3&&(t.version=4,t.render={densityResolution:64,previewWidth:640}),e>=5&&t.version===4){t.version=5;for(let n of t.volumes)n.recipe&&(n.recipe.masks=[],n.recipe.masses=[])}if(e>=6&&t.version===5){t.version=6;for(let n of t.volumes)n.recipe&&(n.recipe.layers=[])}if(e>=7&&t.version===6){t.version=7;for(let n of t.volumes)if(n.recipe){n.recipe.massMode="grouped",n.recipe.geometryLayers=[{id:1,name:"Shape 1",enabled:!0}];for(let s of n.recipe.masses)s.layerId=1}}if(e>=8&&t.version===7){t.version=8,t.render.look=_a();for(let n of t.volumes)n.recipe&&(n.recipe.character=ga())}if(e>=9&&t.version===8){t.version=9;for(let n of t.volumes)n.recipe&&(n.recipe.field=null)}return e>=10&&t.version===9&&(t.version=10),e>=11&&t.version===10&&(t.version=11),e>=12&&t.version===11&&(t.version=12),e>=13&&t.version===12&&(t.version=13),e>=14&&t.version===13&&(t.version=14),e>=15&&t.version===14&&(t.version=15),e>=16&&t.version===15&&(t.version=16),e>=17&&t.version===16&&(t.version=17),e>=18&&t.version===17&&(t.version=18),e>=19&&t.version===18&&(t.version=19),e>=20&&t.version===19&&(t.version=20),e>=21&&t.version===20&&(t.version=21),e>=22&&t.version===21&&(t.version=22,t.render.look.visibility="direct-v1"),e>=23&&t.version===22&&(t.version=23),e>=24&&t.version===23&&(t.version=24),e>=25&&t.version===24&&(t.version=25,t.render.densityLink=0,t.render.cutMode="density"),t}function bd(i="bank"){let e=V0(i,8);if(e.character.enabled=!0,e.billow.strength=.29,e.detail.scale=.42,e.structure.spread=.94,e.profile.feather=.13,e.profile.edgeGamma=.9,e.base.height=-.59,i==="bank"){let t=(n,s)=>({id:n,enabled:!0,points:s.map(([r,a,o,c],l)=>({id:l+1,position:[r,a,o],radius:c}))});e.strokes=[t(1,[[-1.12,-.18,.02,.64],[-.4,.12,.2,.81],[.46,.03,-.2,.7],[1.18,-.26,-.12,.52]]),t(2,[[.18,.3,-.23,.45],[.18,.62,-.23,.54]]),t(3,[[-.7,-.15,.4,.35],[0,-.1,.42,.42],[.6,-.2,.3,.35]])]}return i==="tower"&&(e.billow.strength=.26,e.base.height=-.94),i==="anvil"&&(e.billow.strength=.21,e.base.height=-.93,e.profile.feather=.22),Va(e,8)}function Ag(){let i=Tg(wg(),8),e=Tr(1,[0,2,10]);return Object.assign(e,{name:"Studio cumulus",size:[1,1,1],seed:4831,density:5.6,displacement:.19,erosion:.11,recipe:bd()}),i.name="Studio cloud",i.volumes=[e],i.sun={azimuth:-64,elevation:37,intensity:2.6,ambient:.28},i.sky.exposure=1.25,i.render={densityResolution:128,previewWidth:1280,look:{...i.render.look,enabled:!0}},Rs(i)}var qc=class{#r=null;#t=null;#e=new Map;#s=!1;#i=null;#n=new es;async update(e,{cancelled:t=()=>!1,yieldTask:n=async()=>{},batch:s=4}={}){if(this.#s)throw Error("Sculpt replay already active");if(!Number.isInteger(s)||s<1||s>32)throw Error("Replay batch must be1\u201332");this.#s=!0;try{let r=As(e),a=JSON.stringify(r.base),o=a===this.#r,c=o?this.#t:nn(r.base),l=o?new Map(this.#e):new Map,h=new es(o?this.#n:void 0),d=new Map,u=md(r),f=new Set,g=u.map(C=>{let L=C.protection?f.has(C.protection.id)?C.protection.id:C.protection:void 0;return C.protection&&f.add(C.protection.id),JSON.stringify([C.mode,C.center,C.radius,C.gain,...C.plane?[C.plane]:[],...C.symmetry?[C.symmetry]:[],...C.protection?[{protection:L}]:[]])}),S=C=>`${C}:${g.slice(0,C).join(`
`)}`,m=new Set,p=0;for(let C of r.layers)C.enabled&&(p+=C.strokes.reduce((L,O)=>L+O.centers.length,0)),m.add(p);let b=c,A=0,_,v=0,M=0;for(let[C,L]of l)L.count>A&&L.count<=u.length&&C===S(L.count)&&(b=L.grid,A=L.count,_=C);if(_){let C=l.get(_);l.delete(_),l.set(_,C)}let T=(C,L)=>{let O=S(C);for(l.delete(O),l.set(O,{count:C,grid:L});l.size>4;)l.delete(l.keys().next().value)};if(t())return{aborted:!0,applied:v,yields:M};for(let C=A;C<u.length;C++){let L=u[C];if(L.protection&&!d.has(L.protection.id)&&d.set(L.protection.id,h.get(c,L.protection)),b=cc(b,L.center,L.radius,L.gain,L.mode,L.plane,L.symmetry,L.protection?d.get(L.protection.id):void 0),v++,m.has(C+1)&&T(C+1,b),v%s===0&&(M++,await n(),t()))return{aborted:!0,applied:v,yields:M}}if(t())return{aborted:!0,applied:v,yields:M};u.length&&T(u.length,b);let y=wc(b),w=new Set([c.values,...[...l.values()].map(C=>C.grid.values)]),R={operations:u.length,reusedOperations:A,applied:v,yields:M,checkpoints:l.size,retainedGridBytes:[...w].reduce((C,L)=>C+L.byteLength,0)};return u.some(C=>C.symmetry)&&(R.brushEvaluations=u.reduce((C,L)=>C+xa(L),0)),h.retain(c,[...new Map(u.filter(C=>C.protection).map(C=>[C.protection.id,C.protection])).values()]),r.protection&&(R.protectionCache=h.info(),R.replayKeyCharacters=[...l.keys()].reduce((C,L)=>C+L.length,0)),this.#r=a,this.#t=c,this.#e=l,this.#i=R,this.#n=h,{field:y,...R}}finally{this.#s=!1}}info(){return this.#i?structuredClone(this.#i):{operations:0,checkpoints:0,retainedGridBytes:0}}clear(){if(this.#s)throw Error("Sculpt replay already active");this.#r=null,this.#t=null,this.#e=new Map,this.#i=null,this.#n=new es}};async function Rg(i){let e=i.scene!==void 0,t=e?typeof i.scene=="string"?Eg(i.scene):Rs(i.scene):Ag();if(!t.volumes.some(s=>s.enabled&&s.role==="add"))throw Error("Scene needs an enabled cloud volume");if(!t.render?.look?.enabled)throw Error("Enable Studio lighting in SkyPaint before exporting this scene");e||(t.volumes[0].position=[0,0,0],i.kind&&i.kind!=="bank"&&(t.volumes[0].recipe=bd(i.kind))),i.densityResolution!==void 0&&(t.render.densityResolution=i.densityResolution,Rs(t));let n=structuredClone(t);for(let s of n.volumes){if(s.recipe?.field?.format!==zi)continue;let r=new qc,a=await r.update(s.recipe.field,{yieldTask:()=>new Promise(o=>setTimeout(o,0)),cancelled:()=>!!i.signal?.aborted,batch:4});if(a.aborted)throw new DOMException("Bake cancelled","AbortError");s.recipe.field=a.field,r.clear()}return{scene:t,evaluated:n}}window.prepareSkyPaintBakeScene=Rg;function rE(i){let e=[],t=EventTarget.prototype,n=t.addEventListener,s;try{t.addEventListener=function(o,c,l){return e.push([this,o,c,l]),n.call(this,o,c,l)},s=new Yc(i,{begin(){},commit(){},cancel(){},transform(){}})}finally{t.addEventListener=n}cancelAnimationFrame(s.raf),s.resizeObserver.disconnect();let r=!1;return{v:s,dispose:()=>{if(r)return;r=!0,cancelAnimationFrame(s.raf),s.resizeObserver.disconnect(),s.frameQueue.clear();for(let[l,h,d,u]of e)l.removeEventListener(h,d,u);e.length=0,s.sculptEvaluation?.dispose(),s.field.dispose(),s.visibilityCache.dispose(),s.studio.noise?.dispose(),s.densityCache.clear(),s.densityCache.fallback.dispose(),s.densityCache.material.dispose(),s.orbit.dispose(),s.gizmo.dispose();let o=new Set,c=new Set;for(let l of[s.pass,s.overlay,s.densityCache.pass])l.traverse(h=>{if(h.geometry&&o.add(h.geometry),h.material)for(let d of Array.isArray(h.material)?h.material:[h.material])c.add(d)});for(let l of o)l.dispose();for(let l of c)l.dispose();for(let l of["texture","scaffoldTexture","sculptTexture","maskTexture","cutTexture"])s[l]?.dispose();s.renderer.dispose()},listenerCount:()=>e.length}}window.createSkyPaintBake=async function(i={}){if(i={w:128,h:96,radianceScale:4,...i},![64,128,256,512].includes(i.w)||i.h!==i.w*3/4)throw Error("Bake dimensions must be 4:3 at width64,128,256 or512");if(!Number.isFinite(i.radianceScale)||i.radianceScale<1e-6||i.radianceScale>65504)throw Error("Invalid radiance scale; expected 1e-6 through 65504");if(i.halfHeight!==void 0&&(!(i.halfHeight>=0)||!Number.isFinite(i.halfHeight)))throw Error("Invalid capture framing");let{scene:e,evaluated:t}=await Rg(i);if(i.signal?.aborted)throw new DOMException("Bake cancelled","AbortError");let n=i.canvas||document.querySelector("canvas"),s=rE(n),r=s.v;try{let S=function(v){if(!v||!Number.isFinite(v.yaw)||!Number.isFinite(v.pitch)||Math.abs(v.yaw)>180||Math.abs(v.pitch)>90)throw Error("Invalid capture view");let M=v.yaw*Math.PI/180,T=v.pitch*Math.PI/180,y=new I(Math.sin(M)*Math.cos(T),Math.sin(T),Math.cos(M)*Math.cos(T)),w=new yn(-l*4/3,l*4/3,l,-l,.1,h*4);w.position.fromArray(o).addScaledVector(y,h),w.lookAt(...o),w.updateMatrixWorld(),r.uniforms.uInvPV.value.multiplyMatrices(w.matrixWorld,w.projectionMatrixInverse),r.uniforms.uOrigin.value.copy(w.position),r.uniforms.uCameraNear.value=w.near,r.uniforms.uBakeToward.value.copy(y)},m=function(v,M=!1,T=!1,y=!1){r.uniforms.uBakeMode.value=v,r.uniforms.uLinear.value=y?0:1,T&&(r.material.fragmentShader=d,r.material.needsUpdate=!0);let w=M?g:f;r.renderer.setRenderTarget(w),r.renderer.clear(),r.renderer.render(r.pass,r.screenCamera);let R=M?new Float32Array(i.w*i.h*4):new Uint8Array(i.w*i.h*4);if(r.renderer.readRenderTargetPixels(w,0,0,i.w,i.h,R),v===1&&!M)for(let C=0;C<R.length;C+=4)R[C+3]===0&&(R[C]=R[C+1]=R[C+2]=0);return T&&(r.material.fragmentShader=u,r.material.needsUpdate=!0),R},p=function(v){let M="";for(let T=0;T<v.length;T+=8192)M+=String.fromCharCode(...v.subarray(T,T+8192));return btoa(M)},A=function(){if(b)throw Error("Bake adapter disposed");if(i.signal?.aborted)throw new DOMException("Bake cancelled","AbortError")};r.setScene(t,t.volumes.find(v=>v.enabled&&v.role==="add").id,!1),r.ensureDensity(!1),r.studio.applyQuality(!0);let a=Ya(t,r.fieldSupport),o=a.lo.map((v,M)=>(v+a.hi[M])*.5),c=Math.hypot(...a.hi.map((v,M)=>(v-a.lo[M])*.5)),l=i.halfHeight||c*1.02,h=c*1.15,d=r.material.fragmentShader,u=window.patchSkyPaintShader(d);Object.assign(r.uniforms,{uBakeMode:{value:0},uBakeScale:{value:i.radianceScale||4},uBakeRange:{value:h},uBakeCenter:{value:new I(...o)},uBakeToward:{value:new I}}),r.material.fragmentShader=u,r.material.needsUpdate=!0,r.uniforms.uSolo.value=-1,r.uniforms.uPanorama.value=0,r.uniforms.uOrthographic.value=1,r.uniforms.uSteps.value=128,r.uniforms.uShadowSteps.value=32;let f=new It(i.w,i.h,{type:ot,format:mt,depthBuffer:!1,minFilter:pt,magFilter:pt}),g=new It(i.w,i.h,{type:Lt,format:mt,depthBuffer:!1,minFilter:pt,magFilter:pt}),b=!1,_={scene:e,bounds:a,center:o,halfHeight:l,range:h,stats(){let v=r.renderer.getContext();return{disposed:b,textures:r.renderer.info.memory.textures,geometries:r.renderer.info.memory.geometries,programs:r.renderer.info.programs?.length||0,listeners:s.listenerCount(),glError:v.getError(),contextLost:v.isContextLost()}},dispose(){b||(b=!0,f.dispose(),g.dispose(),s.dispose())},setFraming(v){if(A(),!(v>0)||!Number.isFinite(v))throw Error("Invalid capture framing");return l=v,this.halfHeight=v,v},measure(v){S(v);let M=m(1),T=0;for(let y=0;y<i.h;y++)for(let w=0;w<i.w;w++)M[(y*i.w+w)*4+3]&&(T=Math.max(T,Math.abs((w+.5)/i.w-.5)*2*4/3,Math.abs((y+.5)/i.h-.5)*2));return T*l},capture(v){S(v);let M=m(1);window.assertSkyPaintCaptureRadianceFits(M,()=>m(4,!0),i.radianceScale,v);let T=m(2),y=m(3);return{radiance:p(M),depth:p(T),normal:p(y)}},compare(v){S(v);let M=m(4,!0),T=m(0,!0),y=m(0,!0,!0),w=m(1),R=0,C=0,L=0,O=0,D=0,B=0,Y=0,W=0,ee=0,G=r.uniforms.uBakeToward.value.clone().negate(),j=na.smoothstep(G.y,-.05,.9),J=r.uniforms.uHorizon.value.clone().lerp(r.uniforms.uZenith.value,j),xe=Math.max(G.dot(r.uniforms.uSun.value),0)**500*r.uniforms.uIntensity.value;J.r+=xe,J.g+=xe*.86,J.b+=xe*.6;let be=J.toArray();for(let Ne=0;Ne<M.length;Ne+=4){M[Ne+3]>0&&W++;for(let Ie=0;Ie<4;Ie++)R=Math.max(R,Math.abs(T[Ne+Ie]-y[Ne+Ie]));D=Math.max(D,Math.abs(w[Ne+3]/255-M[Ne+3]));for(let Ie=0;Ie<3;Ie++){C=Math.max(C,Math.abs(M[Ne+Ie]+be[Ie]*(1-M[Ne+3])-y[Ne+Ie]));let q=(w[Ne+Ie]/255)**2*i.radianceScale-M[Ne+Ie];L=Math.max(L,Math.abs(q)),O+=q*q,B++,M[Ne+Ie]>i.radianceScale&&Y++,w[Ne+3]===0&&w[Ne+Ie]!==0&&ee++}}return{shaderMax:R,cloudCompositeMax:C,quantMax:L,quantRMSE:Math.sqrt(O/B),alphaMax:D,transparentRGB:ee,clipped:Y,occupied:W,totalPixels:M.length/4,renderer:r.renderer.getContext().getParameter(r.renderer.getContext().RENDERER)}},preview(v){S(v),m(0,!1,!1,!0);let M=new Uint8Array(i.w*i.h*4);r.renderer.readRenderTargetPixels(f,0,0,i.w,i.h,M);let T=i.previewCanvas||document.querySelector("#preview");if(!T)throw Error("Preview canvas unavailable");T.width=i.w,T.height=i.h;let y=T.getContext("2d"),w=new Uint8ClampedArray(M.length);for(let R=0;R<i.h;R++)w.set(M.subarray(R*i.w*4,(R+1)*i.w*4),(i.h-1-R)*i.w*4);return y.putImageData(new ImageData(w,i.w,i.h),0,0),T.toDataURL()}};for(let v of["measure","capture","compare","preview"]){let M=_[v];_[v]=(...T)=>(A(),M.apply(_,T))}return window.skyPaintBake=_}catch(a){throw s.dispose(),a}};})();
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
window.patchSkyPaintShader=function patchCloudShader(source){
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