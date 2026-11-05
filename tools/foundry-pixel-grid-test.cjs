'use strict';
const assert = require('node:assert/strict');
const Grid = require('../src/foundry-pixel-grid.js');
let cases = 0;
for (const dpr of [1, 1.25, 1.5, 2]) for (const pixelSize of [1, 2, 3, 5]) for (const rect of [
  { left: 0, top: 0, width: 1149, height: 901 },
  { left: 10.3, top: 7.7, width: 779, height: 613 }
]) {
  const g = Grid.layout(rect, dpr, pixelSize);
  assert(Number.isInteger(g.width) && Number.isInteger(g.height) && Number.isInteger(g.scale));
  assert.equal(g.scale, Math.max(1, Math.round(pixelSize * dpr)));
  assert.equal(g.physicalWidth, g.width * g.scale); assert.equal(g.physicalHeight, g.height * g.scale);
  assert(Math.abs(g.cssScale*dpr-g.scale)<1e-12, 'every logical cell has an integer physical scale');
  assert(Math.abs((rect.left+g.offsetX)*dpr-Math.round((rect.left+g.offsetX)*dpr))<1e-10);
  assert(Math.abs((rect.top+g.offsetY)*dpr-Math.round((rect.top+g.offsetY)*dpr))<1e-10);
  assert(g.offsetX>=0 && g.offsetY>=0 && g.offsetX+g.cssWidth<=rect.width+1e-8 && g.offsetY+g.cssHeight<=rect.height+1e-8);
  assert.equal(g.aspect,g.width/g.height); cases++;
}
const large = Grid.layout({left:0,top:0,width:12000,height:9000},2,1);
assert(large.width<=4096 && large.height<=4096); assert(Number.isInteger(large.scale));
const parent = { clientWidth: 1149, clientHeight: 901, clientLeft: 0, clientTop: 0, getBoundingClientRect:()=>({left:.3,top:.7,width:1149,height:901}) };
const canvas = { parentElement: parent, ownerDocument: { defaultView: { devicePixelRatio: 1.25 } }, width:300,height:150,style:{} };
const first = Grid.measure(canvas,2);
assert.equal(canvas.width,300); assert.equal(canvas.height,150,'renderer alone owns backing allocation');
assert.equal(canvas.style.width,first.width+'px'); assert.equal(canvas.style.transformOrigin,'0 0');
assert(canvas.style.transform.includes('scale(2.4)'));
assert.deepEqual(Grid.measure(canvas,2),first,'repeat measurement is idempotent');
parent.clientWidth=1151; const second=Grid.measure(canvas,2); assert(second.width>first.width);
assert.equal(canvas.width,300,'viewport measurement does not reset GPU context state');
console.log('PASS pixel grid:',cases,'DPR/viewport/scale cases, integer origin, bounds, resize and renderer ownership');
