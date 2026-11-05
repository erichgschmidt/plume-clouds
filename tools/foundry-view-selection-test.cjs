const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={window:{},Uint8Array,Float32Array,Number,Math};
vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname,'../src/foundry-renderer.js'),'utf8'),context);
const select=context.window.BakedCloudRenderer.selectViews;
const deg=Math.PI/180;
const grid=[-60,-30,0].flatMap(p=>[-35,0,35].map(y=>({yaw:y*deg,pitch:p*deg})));
function weights(views,y,p){const result=select(views,y*deg,p*deg),out=Array(views.length).fill(0);for(const v of result)out[v.i]=v.weight;assert.ok(result.length<=4);assert.ok(result.every(v=>v.weight>=0));assert.ok(Math.abs(out.reduce((a,b)=>a+b,0)-1)<1e-6);return out;}
assert.deepEqual(weights(grid,0,-30),[0,0,0,0,1,0,0,0,0]);
const middle=weights(grid,17.5,-15);for(const i of [4,5,7,8])assert.equal(middle[i],.25);
for(const [y,p]of [[0,-15],[17.5,-30],[0,-30],[17.5,-15]]){
 const a=weights(grid,y-.00001,p-.00001),b=weights(grid,y+.00001,p+.00001);
 assert.ok(a.every((v,i)=>Math.abs(v-b[i])<.00001),'No nearest-capture handoff at '+[y,p]);
}
const sparse=[{yaw:0,pitch:0},{yaw:.3,pitch:-.4},{yaw:-.4,pitch:-.8},{yaw:.6,pitch:-.6},{yaw:-.5,pitch:.1},{yaw:.8,pitch:.1}];
for(let y=-20;y<=20;y+=2){const a=weights(sparse,y,-20),b=weights(sparse,y+.00001,-20);assert.ok(a.every((v,i)=>Math.abs(v-b[i])<.00001));}
assert.equal(weights([{yaw:0,pitch:0}],20,-70)[0],1);
console.log('Foundry capture weights: exact captures, rectangular crossings and sparse-set continuity PASS');
