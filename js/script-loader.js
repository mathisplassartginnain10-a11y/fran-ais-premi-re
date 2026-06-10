/* script-loader.js — injection dynamique de scripts (lazy-load) */
var _bacScriptPromises = Object.create(null);

function bacLoadScript(src, id) {
  if (_bacScriptPromises[src]) return _bacScriptPromises[src];
  if (id && document.getElementById(id)) return Promise.resolve();
  _bacScriptPromises[src] = new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.src = src;
    s.defer = true;
    if (id) s.id = id;
    s.onload = function () { resolve(); };
    s.onerror = function () {
      delete _bacScriptPromises[src];
      reject(new Error('Impossible de charger ' + src));
    };
    document.head.appendChild(s);
  });
  return _bacScriptPromises[src];
}

function bacLoadScripts(list) {
  var p = Promise.resolve();
  list.forEach(function (item) {
    p = p.then(function () {
      return bacLoadScript(item.src, item.id);
    });
  });
  return p;
}
