/* Artistic continuous day cycle. All light colors are linear; background is sRGB. */
(function(root){
 'use strict';
 const clamp=x=>Math.max(0,Math.min(1,x)),wrap=h=>((h%24)+24)%24;
 const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t);};
 const mix=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t);
 const toLinear=x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4;
 const toSRGB=x=>x<=.0031308?12.92*x:1.055*x**(1/2.4)-.055;
 function sample(hour){
  const h=wrap(Number.isFinite(hour)?hour:12),sunAlt=60*Math.sin((h-6)*Math.PI/12),day=smooth(-10,15,sunAlt),warm=1-smooth(0,32,sunAlt);
  const sunAz=(h-12)*15,lightAz=((sunAz+360)%360)-180;
  const sky=mix([.025,.04,.085],[.16,.43,.62],day),twilight=(1-smooth(0,18,Math.abs(sunAlt)))*.45;
  return {sunAz,sunAlt,sunIntensity:2.6*smooth(-5,14,sunAlt),sunColor:mix([1,.93,.82],[1,.32,.10],warm),
   ambientIntensity:.06+.28*day,ambientColor:mix([.21,.30,.55],[.52,.70,1],day),scatterFill:.025+.175*day,
   lightAz,lightAlt:-sunAlt,lightIntensity:.20*smooth(0,20,-sunAlt),lightColor:[.42,.58,1],skyColor:mix(sky,[.45,.23,.24],twilight)};
 }
 function advance(hour,dt,minutes){return minutes>0&&dt>0?wrap(hour+dt/(minutes*60)*24):hour;}
 const api={sample,advance,toLinear,toSRGB};root.FoundryDaylight=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
