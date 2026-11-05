/* Test control: revert only boundary reconstruction, keeping current angular
 * blending, tone mapping and all other production shader behavior identical. */
'use strict';
function legacyBoundaryShader(source){
 function replace(from,to){if(source.split(from).length!==2)throw Error('Boundary regression anchor changed: '+from.slice(0,80));source=source.replace(from,to);}
 replace('bool compatible=uRadiance==1?any(greaterThan(coverage,vec4(.5))):all(greaterThan(coverage,vec4(.5)));','bool compatible=all(greaterThan(coverage,vec4(.5)));');
 replace(`if(s>=0.){
    vec2 f=clamp(f0+df*s,vec2(0),vec2(1));ivec2 nearest=ivec2(floor(f+.5));int k=nearest.y*2+nearest.x;
    // Partial depth patches can connect covered neighbors, but never claim an
    // originally empty texel footprint. Padded depth carries no optical alpha.
    if(uRadiance==0||coverage[k]>.5){vec4 weights=vec4((1.-f.x)*(1.-f.y),f.x*(1.-f.y),(1.-f.x)*f.y,f.x*f.y);return patchSample(cell,weights,view,layer,exitT+lengthT*s);}
   }
  }
  if(!compatible||(uRadiance==1&&!all(greaterThan(coverage,vec4(.5))))){`,
 'if(s>=0.){vec2 f=clamp(f0+df*s,vec2(0),vec2(1));vec4 weights=vec4((1.-f.x)*(1.-f.y),f.x*(1.-f.y),(1.-f.x)*f.y,f.x*f.y);return patchSample(cell,weights,view,layer,exitT+lengthT*s);}\n  }else{');
 return source;
}
module.exports={legacyBoundaryShader};
