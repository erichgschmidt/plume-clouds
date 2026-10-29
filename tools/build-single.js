// Bundle index.html + src/*.js into one self-contained HTML file (dist/plume-clouds.html).
// Usage: node tools/build-single.js
var fs = require('fs'), path = require('path');
var root = path.join(__dirname, '..');
var html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/<script src="(src\/[^"?]+)(?:\?v=\d+)?"><\/script>/g, function (m, file) {
  var js = fs.readFileSync(path.join(root, file), 'utf8').replace(/<\/script/g, '<\\/script');
  return '<script>\n// ---- ' + file + ' ----\n' + js + '\n</script>';
});
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
var out = path.join(root, 'dist', 'plume-clouds.html');
fs.writeFileSync(out, html);
console.log('wrote ' + out + ' (' + (html.length / 1024).toFixed(0) + ' KB)');
