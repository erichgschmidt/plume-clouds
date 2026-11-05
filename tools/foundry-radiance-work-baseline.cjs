/* Versioned slow-work control: restore only unused radiance shading work.
 * Geometry, angular blending, optical sums, tone mapping and uploads stay current. */
'use strict';
function referenceRadianceWorkShader(source){
 source=source.replace(/\r\n/g,'\n');
 function replace(from,to){if(source.split(from).length!==2)throw Error('Radiance-work control anchor changed: '+from.slice(0,70));source=source.replace(from,to);}
 replace(`float alpha=h.alpha*uOpacity;
 if(uRadiance==1){
  color=vec4(0);material=vec4(h.radiance*uOpacity,alpha);
  // Surface RG is compatibility metadata; the radiance post pass uses only
  // distance/instance BA and the independent linear HDR material target.
  surface=vec4(.5,.5,distance,uInstance);
 }else{
  vec2 terms=lightingTerms(h);color=vec4(shadeTerms(terms,uBands,uPalette)*alpha,alpha);material=vec4(terms,0.,alpha);
  surface=vec4(encodeOct(transpose(uTarget)*h.n),distance,uInstance);
 }`,
 `float alpha=h.alpha*uOpacity;vec2 terms=lightingTerms(h);
 color=vec4(shadeTerms(terms,uBands,uPalette)*alpha,alpha);
 material=vec4(terms,0.,alpha);
 if(uRadiance==1){color=vec4(0);material=vec4(h.radiance*uOpacity,alpha);}
 surface=vec4(encodeOct(transpose(uTarget)*h.n),distance,uInstance);`);
 return source;
}
module.exports={referenceRadianceWorkShader};
