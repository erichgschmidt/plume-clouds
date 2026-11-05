/* Run: node tools/renderer-capability-test.cjs. No GPU required. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../src/puffs.js'), 'utf8'), context);
const Renderer = context.window.PuffRenderer;
let checks = 0;
function check(name, fn) { fn(); checks++; console.log('PASS ' + name); }
function capabilities(float = true, buffers = 8, attachments = 8) {
  return {
    MAX_DRAW_BUFFERS: 1, MAX_COLOR_ATTACHMENTS: 2,
    getExtension: name => name === 'EXT_color_buffer_float' && float,
    getParameter: name => name === 1 ? buffers : attachments,
    createProgram() { throw new Error('reached shader compilation'); }
  };
}
function construct(gl) { return new Renderer({ getContext: () => gl }); }
check('missing WebGL2', () => assert.throws(() => construct(null), /WebGL2/));
check('missing float renderability fails before allocation', () =>
  assert.throws(() => construct(capabilities(false)), /EXT_color_buffer_float/));
check('insufficient draw buffers', () =>
  assert.throws(() => construct(capabilities(true, 4, 8)), /5.*draw buffers/i));
check('insufficient color attachments', () =>
  assert.throws(() => construct(capabilities(true, 8, 4)), /5.*color attachments/i));
check('supported GPU reaches shader compilation', () =>
  assert.throws(() => construct(capabilities()), /reached shader compilation/));
function target(status) {
  const binds = [];
  const gl = {
    FRAMEBUFFER: 1, FRAMEBUFFER_COMPLETE: 0x8cd5,
    bindTexture() {}, texImage2D() {}, texParameteri() {}, framebufferTexture2D() {}, drawBuffers() {},
    bindFramebuffer(_, value) { binds.push(value); }, checkFramebufferStatus() { return status; }
  };
  const r = Object.create(Renderer.prototype);
  Object.assign(r, { gl, canvas: { width: 100, height: 100 }, _w: 0, _h: 0,
    _fbo: {}, _sizeTiles() {} });
  return { r, binds };
}
check('complete five-target framebuffer is accepted', () => {
  const { r, binds } = target(0x8cd5); r.resize(64);
  assert.equal(r._w, 64); assert.equal(binds.at(-1), null);
});
check('incomplete framebuffer reports size/status and unbinds', () => {
  const { r, binds } = target(0x8cdd);
  assert.throws(() => r.resize(64), /64.*64.*0x8cdd/i);
  assert.equal(binds.at(-1), null);
  assert.equal(r._w, 0); assert.equal(r._h, 0);
  assert.throws(() => r.resize(64), /framebuffer/i);
});
console.log(checks + ' renderer capability checks passed');
