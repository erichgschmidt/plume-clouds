/* Integer physical-pixel presentation for a viewport-adaptive logical canvas. */
(function (root) {
  'use strict';
  function positive(value, fallback) { return Number.isFinite(value) && value > 0 ? value : fallback; }
  function layout(rect, dpr, pixelSize) {
    dpr = positive(dpr, 1); pixelSize = positive(pixelSize, 1);
    var left = Number.isFinite(rect.left) ? rect.left : 0, top = Number.isFinite(rect.top) ? rect.top : 0;
    var width = positive(rect.width, 1), height = positive(rect.height, 1);
    // Inset to physical pixel boundaries; center the leftover whole pixels.
    var x0 = Math.ceil(left*dpr-1e-7), y0 = Math.ceil(top*dpr-1e-7);
    var pw = Math.max(1, Math.floor((left+width)*dpr+1e-7)-x0);
    var ph = Math.max(1, Math.floor((top+height)*dpr+1e-7)-y0);
    var scale = Math.max(1, Math.round(pixelSize*dpr), Math.ceil(pw/4096), Math.ceil(ph/4096));
    var w = Math.max(1, Math.floor(pw/scale)), h = Math.max(1, Math.floor(ph/scale));
    var physicalWidth = w*scale, physicalHeight = h*scale;
    return { width:w, height:h, scale:scale, dpr:dpr, cssScale:scale/dpr,
      physicalWidth:physicalWidth, physicalHeight:physicalHeight,
      cssWidth:physicalWidth/dpr, cssHeight:physicalHeight/dpr,
      offsetX:(x0+Math.floor((pw-physicalWidth)/2))/dpr-left,
      offsetY:(y0+Math.floor((ph-physicalHeight)/2))/dpr-top, aspect:w/h };
  }
  function measure(canvas, pixelSize) {
    var parent = canvas.parentElement;
    if (!parent) throw Error('Pixel grid canvas needs a viewport parent.');
    var rect = parent.getBoundingClientRect(), view = canvas.ownerDocument && canvas.ownerDocument.defaultView;
    var grid = layout({ left:rect.left+(parent.clientLeft||0), top:rect.top+(parent.clientTop||0),
      width:parent.clientWidth || rect.width, height:parent.clientHeight || rect.height }, (view || root).devicePixelRatio, pixelSize);
    // CSS layout widths can be rounded to 1/64px. Keep layout integral, then
    // scale through the compositor so fractional DPR still maps each cell to
    // exactly `scale` physical pixels. The renderer owns canvas.width/height.
    var key = [grid.width,grid.height,grid.cssScale,grid.offsetX,grid.offsetY].join(':');
    if (canvas._foundryGridKey !== key) {
      var s = canvas.style; s.position='absolute'; s.left='0px'; s.top='0px';
      s.width=grid.width+'px'; s.height=grid.height+'px'; s.maxWidth='none'; s.maxHeight='none';
      s.transformOrigin='0 0'; s.transform='translate('+grid.offsetX+'px,'+grid.offsetY+'px) scale('+grid.cssScale+')';
      s.imageRendering='pixelated'; canvas._foundryGridKey=key;
    }
    canvas.foundryPixelGrid=grid;
    return grid;
  }
  var api={layout:layout,measure:measure}; root.FoundryPixelGrid=api;
  if(typeof module==='object' && module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
