/* Optional local contour filter: bounds, derivative and CPU/GPU agreement. */
(function(){
  'use strict';
  var A=shadowAudit,R=A.renderer,gl=R.gl,results=[],failures=[],shape=[[.5,.375,.17,0]];
  function check(name,ok,info){results.push({test:name,ok:ok,info:info});if(!ok)failures.push(name);}
  function aux(){var g=new Float32Array(R._w*R._h*4);gl.bindFramebuffer(gl.FRAMEBUFFER,R._fbo);gl.readBuffer(gl.COLOR_ATTACHMENT3);gl.readPixels(0,0,R._w,R._h,gl.RGBA,gl.FLOAT,g);gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return g;}
  var plain=A.capture(shape,{modelVersion:2}),same=A.capture(shape,{modelVersion:2,contourFilter:1});
  check('contour filter preserves plain circle',plain.pixels.every(function(v,i){return v===same.pixels[i];}));
  var options={modelVersion:2,shapeVar:1,shapeSeed:54,angular:.85,filterReach:.7,cap:.2,diag:0};
  var base=A.capture(shape,options);
  [-1,1].forEach(function(sign){
    var p=Object.assign({},options,{contourFilter:sign}),shot=A.capture(shape,p),gradient=aux(),changes=0,wrong=0,invalid=0;
    for(var i=0;i<shot.field.length;i+=4){var before=base.field[i+3]>=.5,after=shot.field[i+3]>=.5;if(before!==after){changes++;if(sign>0?before:after)wrong++;}
      if(after&&(!Number.isFinite(gradient[i])||!Number.isFinite(gradient[i+1])))invalid++;}
    check('signed contour coverage '+sign,changes>20&&wrong===0&&invalid===0,{changed:changes,wrong:wrong,invalid:invalid});
    var W=R._w,H=R._h,P=Object.assign({},p,{W:W,H:H,T:R._T,ref:.1}),errors=0,count=0,max=0;
    for(var y=2;y<H;y+=5)for(var x=2;x<W;x+=5){var i=(y*W+x)*4;if(shot.field[i+3]<.5)continue;
      var ref=fieldRef(R._sphData,R.count,P,x,y),want=[ref.H,ref.mask,ref.Gx,ref.Gy],got=[shot.field[i],shot.field[i+3],gradient[i],gradient[i+1]];count++;
      want.forEach(function(v,k){var d=Math.abs(v-got[k]);max=Math.max(max,d);if(!Number.isFinite(d)||d>(k<2?.005:.04+.002*Math.abs(v)))errors++;});}
    check('filtered CPU/GPU shape and slope '+sign,count>100&&errors===0,{samples:count,errors:errors,max:max});
    var lit=A.capture(shape,Object.assign({},p,{contact:1,cavity:1}));
    check('shadows preserve filtered coverage '+sign,A.compare(shot,lit).maskChanges===0);
  });
  // With reach past one half-sector, angular-only fill/shave must become a
  // circular profile, rather than a fan of shifted polygon corners.
  [-1,1].forEach(function(sign){
    var options={modelVersion:2,shapeVar:0,angular:.85,sides:5,filterReach:.7,contourFilter:sign,cap:0};
    var shot=A.capture(shape,options),gradient=aux(),W=R._w,H=R._h,P={modelVersion:2,W:W,H:H,T:R._T,ref:.1,cap:0},bad=0,count=0;
    for(var y=2;y<H;y+=7)for(var x=2;x<W;x+=7){var i=(y*W+x)*4;if(shot.field[i+3]<.5)continue;count++;
      var q=fieldRef(R._sphData,R.count,P,x,y);if(Math.abs(q.Gx-gradient[i])>.04+.002*Math.abs(q.Gx)||Math.abs(q.Gy-gradient[i+1])>.04+.002*Math.abs(q.Gy))bad++;
    }
    check('angular-only filtered slope agrees with CPU '+sign,count>100&&bad===0,{samples:count,errors:bad});
    var radius=sign>0?.17:.17*(1-.85+.85*Math.cos(Math.PI/5));
    var circle=A.capture([[.5,.375,radius,0]],{modelVersion:2});
    var changes=A.compare(shot,circle).maskChanges;
    check('angular-only wide filter has no extra petals '+sign,changes===0,{maskChanges:changes});
  });
  window.contourResults={ok:!failures.length,failures:failures,results:results};
})();
