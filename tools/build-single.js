// Bundle index.html + src/*.js into one self-contained HTML file (dist/plume-clouds.html).
// Usage: node tools/build-single.js [input.html] [output.html]   (default: index.html -> dist/plume-clouds.html)
var fs = require('fs'), path = require('path'), cp = require('child_process');
var root = path.join(__dirname, '..');
var input = process.argv[2] || 'index.html', output = process.argv[3] || path.join('dist', 'plume-clouds.html');
var html = fs.readFileSync(path.join(root, input), 'utf8');
html = html.replace(/<script src="((?:src|assets)\/[^"?]+)(?:\?v=\d+)?"><\/script>/g, function (m, file) {
  var js = fs.readFileSync(path.join(root, file), 'utf8').replace(/<\/script/g, '<\\/script');
  return '<script>\n// ---- ' + file + ' ----\n' + js + '\n</script>';
});
// Keep editor navigation valid when both standalone pages live in dist/.
if (path.dirname(output) === 'dist') {
  html = html.replace(/href="(puffs|sky)\.html"/g, 'href="plume-$1.html"')
    .replace(/href="skypaint-bake\.html"/g, 'href="plume-skypaint-bake.html"')
    .replace(/href="((?:puffs|sky)-legacy\.html)"/g, 'href="../$1"');
}
// the build stamp: commit and date, shown in the page's HUD (a bundle in the wild says which build it is)
var commit = 'unknown';
try { commit = cp.execSync('git rev-parse --short HEAD', { cwd: root }).toString().trim() + (cp.execSync('git status --porcelain -- src *.html', { cwd: root }).toString().trim() ? '+' : ''); } catch (e) {}
var stamp = '<script>window.PLUME_BUILD = { commit: ' + JSON.stringify(commit) + ', date: ' + JSON.stringify(new Date().toISOString().slice(0, 10)) + ' };</script>\n';
html = html.replace(/<script>/, stamp + '<script>');
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
var out = path.join(root, output);
fs.writeFileSync(out, html);
console.log('wrote ' + out + ' (' + (html.length / 1024).toFixed(0) + ' KB, build ' + commit + ')');
