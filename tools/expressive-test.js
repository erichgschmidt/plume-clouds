/* Production GPU checks for optional Contour cohesion and Shadow quiet. Load after shadow-test.js. */
(function(){
  'use strict';
  var A=window.shadowAudit,R=A.renderer,gl=R.gl,failures=[],results=[];
  var pair=[[.3875,.375,.11,0],[.6125,.375,.11,0]],single=[[.5,.375,.14,0]];
  function check(name,pass,info){results.push({test:name,ok:pass,info:info});if(!pass)failures.push(name);}
  function difference(a,b){var n=0,max=0;for(var i=0;i<a.length;i++){var d=Math.abs(a[i]-b[i]);if(d)n++;max=Math.max(max,d);}return {changed:n,max:max};}
  function aux(attachment){var a=new Float32Array(R._w*R._h*4);gl.bindFramebuffer(gl.FRAMEBUFFER,R._fbo);gl.readBuffer(attachment);gl.readPixels(0,0,R._w,R._h,gl.RGBA,gl.FLOAT,a);gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return a;}
  [1,2].forEach(function(model){
    var look={modelVersion:model,body:.6,noise:.3,noise2:.1,smooth:1,rim:.5,puffRim:.5,contact:.8,cavity:.6,diag:0};
    var a=A.capture(pair,look),b=A.capture(pair,Object.assign({},look,{shadowQuiet:0,contourCohesion:0}));
    var d=difference(a.pixels,b.pixels);check('zero controls preserve model '+model,d.max===0,d);
  });
  var a=A.capture(pair,{modelVersion:1}),b=A.capture(pair,{modelVersion:1,contourCohesion:1});
  check('legacy ignores contour cohesion',difference(a.pixels,b.pixels).max===0);
  var look={modelVersion:2,body:0,bodySoft:1.5,diag:3,sun:90,elevation:10,noiseScale:3,noiseBias:0};
  var q0=A.capture(pair,Object.assign({},look,{shadowQuiet:0,noise:.6}));
  var q1=A.capture(pair,Object.assign({},look,{shadowQuiet:1,noise:.6})),body=aux(gl.COLOR_ATTACHMENT4);
  check('shadow quiet preserves full geometry/coverage field',difference(q0.field,q1.field).max===0);
  check('shadow quiet changes shaded detail',difference(q0.pixels,q1.pixels).changed>100);
  var dry0=A.capture(pair,Object.assign({},look,{shadowQuiet:0,noise:0}));
  var dry1=A.capture(pair,Object.assign({},look,{shadowQuiet:1,noise:0}));
  var sum0=0,sum1=0,samples=0;
  for(var i=0;i<body.length;i+=4){if(q1.field[i+3]<.5)continue;var gy=body[i+3],gx=body[i+2];
    var nl=(gy*Math.cos(Math.PI/18)+Math.sin(Math.PI/18))/Math.sqrt(1+gx*gx+gy*gy);
    if(nl>-.05)continue; samples++;for(var c=0;c<3;c++){sum0+=Math.abs(q0.pixels[i+c]-dry0.pixels[i+c]);sum1+=Math.abs(q1.pixels[i+c]-dry1.pixels[i+c]);}
  }
  check('macro-shadow noise response is suppressed',samples>100&&sum1<sum0*.2,{samples:samples,before:sum0,after:sum1});
  var c0=A.capture(pair,{modelVersion:2,contourCohesion:0}),c1=A.capture(pair,{modelVersion:2,contourCohesion:1}),G=aux(gl.COLOR_ATTACHMENT3);
  var added=0,bad=0;
  for(var i=0;i<c1.field.length;i+=4)if(c1.field[i+3]>=.5&&c0.field[i+3]<.5){added++;if(!Number.isFinite(c1.field[i])||c1.field[i]<=-.5||!Number.isFinite(G[i])||!Number.isFinite(G[i+1]))bad++;}
  check('contour cohesion adds a supported local bridge',added>10&&bad===0,{added:added,invalid:bad});
  var mid=((R._h>>1)*R._w+(R._w>>1))*4;
  check('bridge reaches centre of gap',c0.field[mid+3]<.5&&c1.field[mid+3]>=.5,{before:c0.field[mid+3],after:c1.field[mid+3]});
  var s0=A.capture(single,{modelVersion:2,contourCohesion:1}),s1=A.capture(single,{modelVersion:2,contourCohesion:1,contact:1,cavity:1});
  check('single convex has no contact/cavity rim',A.compare(s0,s1).max<=1,A.compare(s0,s1));
  var isolated=A.capture(single,{modelVersion:2,contourCohesion:0});
  check('contour cohesion does not inflate an isolated lobe',A.compare(isolated,s0).maskChanges===0);
  // Keep the new contour within its evaluated skirt support across puff sizes and warps.
  [.14,.02,.002].forEach(function(radius){
    [0,1].forEach(function(warp){
      var records=[[.5-radius*1.02,.375,radius,0],[.5+radius*1.02,.375,radius,0]];
      var image=A.capture(records,{modelVersion:2,contourCohesion:1,shapeVar:warp,shapeSeed:54,diag:0}),g=aux(gl.COLOR_ATTACHMENT3),invalid=0;
      for(var i=0;i<image.field.length;i+=4)if(image.field[i+3]>=.5){
        if(!Number.isFinite(image.field[i])||image.field[i]<=-.5||!Number.isFinite(g[i])||!Number.isFinite(g[i+1]))invalid++;
        // Sky RGB is [19,115,147]; the bridge must be shaded cloud, not an uncovered gap.
        if(image.pixels[i]===19&&image.pixels[i+1]===115&&image.pixels[i+2]===147)invalid++;
      }
      check('contour has valid shading radius '+radius+' warp '+warp,invalid===0,{invalid:invalid});
    });
  });
  var soft=A.capture(pair,{modelVersion:2,contourCohesion:1,softness:4});
  check('attachment blend still does not move contour',A.compare(c1,soft).maskChanges===0);
  // Independent reference at the newly revealed bridge and at deformed lobes.
  [0,1].forEach(function(warp){
    var p={modelVersion:2,contourCohesion:1,shadowQuiet:1,shapeVar:warp,shapeSeed:54,prim:warp?'drop':'sphere',cap:.2,
      body:0,bodySoft:.8,contact:1,cavity:1,softness:1.5};
    var image=A.capture(pair,p),gradient=aux(gl.COLOR_ATTACHMENT3),shadows=aux(gl.COLOR_ATTACHMENT4),W=R._w,H=R._h;
    var sun=A.base.sun*Math.PI/180,el=A.base.elevation*Math.PI/180;
    var P=Object.assign({},p,{W:W,H:H,T:R._T,ref:.1,cavityReach:A.base.cavityReach,light:[Math.cos(sun)*Math.cos(el),-Math.sin(sun)*Math.cos(el),Math.sin(el)]});
    var errors=0,count=0,max=0;
    for(var y=2;y<H;y+=5)for(var x=2;x<W;x+=5){var i=(y*W+x)*4;if(image.field[i+3]<.05)continue;
      var r=fieldRef(R._sphData,R.count,P,x,y),want=[r.H,r.mask,r.Gx,r.Gy,r.Bx,r.By,r.contact,r.cavity],got=[image.field[i],image.field[i+3],gradient[i],gradient[i+1],shadows[i+2],shadows[i+3],shadows[i],shadows[i+1]];count++;
      want.forEach(function(v,k){var d=Math.abs(v-got[k]);max=Math.max(max,d);if(!Number.isFinite(d)||d>(k<2?.005:.04+.002*Math.abs(v)))errors++;});
    }
    check('CPU reference optional controls warp '+warp,count>100&&errors===0,{samples:count,errors:errors,max:max});
  });
  // Freeze the accumulated wear/dispersal records: pattern tests must not depend on
  // elapsed simulation time or the birth/mixing curve.
  function eroded(look,wear,dispersal,records){
    var tree=R._tree;
    R._tree=function(){tree.apply(R,arguments);var M=PuffRenderer.MAX_SPH,D=R._sphData;
      for(var i=0;i<R.count;i++){D[(M+i)*4+3]=dispersal;D[(M*7+i)*4+2]=wear;}
      var bound=gl.getParameter(gl.TEXTURE_BINDING_2D);gl.bindTexture(gl.TEXTURE_2D,R._sphTex);
      gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,M,8,gl.RGBA,gl.FLOAT,D);gl.bindTexture(gl.TEXTURE_2D,bound);
    };
    try{return A.capture(records||pair,Object.assign({modelVersion:2,diag:0,evapScale:3},look));}finally{R._tree=tree;}
  }
  var defaultE=eroded({dissolve:.6},.15,.8),type0=eroded({dissolve:.6,erosionType:0},.15,.8);
  check('erosion type 0 preserves existing active pattern',difference(defaultE.pixels,type0.pixels).max===0);
  var idle=eroded({erosionType:0,dissolve:0},0,0),patterns=[];
  [0,1,2].forEach(function(type){
    var noWear=eroded({erosionType:type,dissolve:0},0,0);
    check('erosion type '+type+' is inert without wear',difference(idle.pixels,noWear.pixels).max===0);
    var worn=eroded({erosionType:type,dissolve:0},.7,0),evaporated=eroded({erosionType:type,dissolve:.7},0,1);
    check('erosion type '+type+' shares wind wear and evaporation mapping',A.compare(worn,evaporated).maskChanges===0);
    var unshadowed=eroded({erosionType:type,dissolve:.6},.15,.8,single);
    var shadowed=eroded({erosionType:type,dissolve:.6,contact:1,cavity:1},.15,.8,single);
    check('erosion type '+type+' isolated puff has no shadow halo',A.compare(unshadowed,shadowed).max<=1,A.compare(unshadowed,shadowed));
    var low=eroded({erosionType:type,dissolve:.4},.1,.8),high=eroded({erosionType:type,dissolve:.7},.1,.8),bad=0,grew=0;
    var gradient=aux(gl.COLOR_ATTACHMENT3);
    for(var i=0;i<high.field.length;i+=4){
      if(high.field[i+3]>=.5&&low.field[i+3]<.5)grew++;
      if(high.field[i+3]>=.5&&(!Number.isFinite(high.field[i])||high.field[i]<=-.5||!Number.isFinite(gradient[i])||!Number.isFinite(gradient[i+1])))bad++;
    }
    check('erosion type '+type+' valid and monotone',bad===0&&grew===0,{invalid:bad,grew:grew});patterns.push(high);
    // Check the independent reference with both erosion sources and shadow sampling active.
    var image=eroded({erosionType:type,dissolve:.6,contact:1,cavity:1,body:.6},.15,.8);
    var g=aux(gl.COLOR_ATTACHMENT3),s=aux(gl.COLOR_ATTACHMENT4),W=R._w,H=R._h,sun=A.base.sun*Math.PI/180,el=A.base.elevation*Math.PI/180;
    var P={modelVersion:2,erosionType:type,dissolve:.6,evapScale:3,W:W,H:H,T:R._T,ref:.1,cap:0,body:.6,bodySoft:1.5,contact:1,cavity:1,cavityReach:24,
      light:[Math.cos(sun)*Math.cos(el),-Math.sin(sun)*Math.cos(el),Math.sin(el)]};
    var errors=0,samples=0,max=0;
    for(var y=2;y<H;y+=5)for(var x=2;x<W;x+=5){var k=(y*W+x)*4;if(image.field[k+3]<.05)continue;samples++;
      var q=fieldRef(R._sphData,R.count,P,x,y),want=[q.H,q.mask,q.Gx,q.Gy,q.Bx,q.By,q.contact,q.cavity],got=[image.field[k],image.field[k+3],g[k],g[k+1],s[k+2],s[k+3],s[k],s[k+1]];
      want.forEach(function(v,j){var d=Math.abs(v-got[j]);max=Math.max(max,d);if(!Number.isFinite(d)||d>(j<2?.005:.04+.002*Math.abs(v)))errors++;});
    }
    check('erosion type '+type+' CPU reference',samples>100&&errors===0,{samples:samples,errors:errors,max:max});
    var translated=eroded({erosionType:type,dissolve:.7,panX:8/W},.1,.8),moves=0;
    for(var y=0;y<H;y++)for(var x=8;x<W;x++){var dest=(y*W+x)*4,src=(y*W+x-8)*4;if((translated.field[dest+3]>=.5)!==(high.field[src+3]>=.5))moves++;}
    check('erosion type '+type+' stays attached during translation',moves===0,{maskChanges:moves});
  });
  [[0,1],[0,2],[1,2]].forEach(function(q){var changes=A.compare(patterns[q[0]],patterns[q[1]]).maskChanges;
    check('erosion patterns '+q.join('/')+' are distinct',changes>50,{maskChanges:changes});
  });
  window.expressiveResults={ok:!failures.length,failures:failures,results:results};
})();
