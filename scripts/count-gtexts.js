const fs = require('fs');
const path = require('path');
const vm = require('vm');
const dir = path.join(__dirname, '..', 'js');
const sandbox = {};
vm.createContext(sandbox);
function load(file) {
  let code = fs.readFileSync(path.join(dir, file), 'utf8');
  code = code.replace(/\bconst (GRANDS_TEXTES\w*)\b/g, 'var $1');
  vm.runInContext(code, sandbox, { filename: file });
}
fs.readdirSync(dir).filter(f => /^data-gtextes/.test(f) && f.endsWith('.js')).sort().forEach(load);
console.log('Total:', sandbox.GRANDS_TEXTES.length);
const byAuteur = {};
sandbox.GRANDS_TEXTES.forEach(t => { byAuteur[t.auteur] = (byAuteur[t.auteur] || 0) + 1; });
console.log('Auteurs:', Object.keys(byAuteur).length);
console.log('Top auteurs:', Object.entries(byAuteur).sort((a,b)=>b[1]-a[1]).slice(0,10));
