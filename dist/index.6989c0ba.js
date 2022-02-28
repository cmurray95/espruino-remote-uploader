// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"glmxQ":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "03d2cc256989c0ba";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1cW8y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Remote", ()=>Remote
);
var _espruinoBleUart = require("espruino-ble-uart");
var _espruinoBleUartDefault = parcelHelpers.interopDefault(_espruinoBleUart);
var _md5 = require("md5");
var _md5Default = parcelHelpers.interopDefault(_md5);
class Remote {
    constructor(){
        this.UART = _espruinoBleUartDefault.default;
        this.connected = false;
    }
    /**
     * Connect to device 
     */ connect() {
        // Initialize connect and clear REPL
        this.UART.write("\x03", (err)=>{
            if (!err) this.connected = true;
            else throw Error(err);
        });
    }
    /**
     * 
     * @param {String} url link containing code to be uploaded 
     * @param {Boolean} flash Chooses which memory to write to
     * @returns promise indicating if upload was succesful
     */ async upload(url, flash) {
        if (!this.connected) connect();
        let raw1 = this.#getRawCode(url).then((raw)=>{
            return raw;
        });
        // Avoid duplicate uploads
        if (this.#compareHash(raw1)) return true;
        if (!flash) {
            reset();
            this.UART.write(raw1);
        } else {
            // Strip newlines
            raw1 = raw1.replace(/(\r\n|\n|\r)/gm, "");
            // Write to Flash Storage
            this.UART.write(`E.setBootCode("${raw1}",1);\n`);
            // Load into RAM
            this.UART.write("load()\n");
            return this.#compareHash(raw1);
        }
        let success = this.#compareHash(raw1);
        return success;
    }
    /**
     * Resets device removing currently stored code
     */ reset() {
        if (!this.connected) connect();
        this.UART.write("reset(true);\n");
    }
    /**
     * Disconnect device
     */ disconnect() {
        if (!this.connected) connect();
        this.UART.close();
        this.connected = false;
    }
    /**
     * 
     * @returns String containing device name
     */ async getDeviceType() {
        if (!this.connected) connect();
        let device = "";
        this.UART.eval('process.env.BOARD', (d)=>{
            if (d) device = d;
        });
        await this.#halt(200);
        return device;
    }
    /**
     * 
     * @returns code stored on device
     */ async dump() {
        if (!this.connected) connect();
        let str = "";
        // Retrieve code stored on device
        this.UART.eval('E.dumpStr()', (t, err)=>{
            if (err) throw Error(err);
            str = t;
        });
        await this.#halt(5000);
        return str;
    }
    /**
     * 
     * @param {String} url link to raw github file containing code.
     * @returns promise containing code as a string
     */ async #getRawCode(url) {
        const res = await fetch(url).then((response)=>{
            // Ensure url is valid
            if (!response.ok) throw new Error(response.status);
            return response;
        });
        // Fetch failed
        if (!res) throw new Error("Fetch failed!");
        let data = await res.text();
        data = data + "\n";
        return data;
    }
    /**
     * Delay execution
     * @param {Timer} ms 
     * @returns 
     */  #halt(ms) {
        return new Promise((res)=>setTimeout(res, ms)
        );
    }
    /**
     * 
     * @param {String} code to be compared with flash storage
     * @returns True if code on device is same as code to be uploaded
     */  #compareHash(code) {
        // Retrieve Device Code
        let deviceCode;
        this.dump().then((result)=>{
            deviceCode = result;
        });
        // Split to find flash memory code
        let arr = deviceCode.split('//Code set with E.setBootCode');
        console.log(_md5Default.default(code.replace(/(\r\n|\n|\r)/gm, "")));
        console.log(_md5Default.default(arr[1]));
        return _md5Default.default(code.replace(/(\r\n|\n|\r)/gm, "") == _md5Default.default(arr[1]));
    }
    /**
     * Write checksum to device
     * @returns checksum
     */  #writeStatus() {
        // Generate checksum
        let val = Math.floor(Math.random() * 100);
        let code = `function check(){return '${val}';}\n`;
        this.UART.write(code);
        return val;
    }
    /**
     * Check if code upload succeeded
     * @returns true if code was uploaded succesfully
     */ async #checkStatus() {
        this.#writeStatus();
        // comparator
        let cmp;
        let checksum = this.#writeStatus();
        this.UART.eval('check()', (t, err)=>{
            if (err) throw Error(err);
            cmp = t;
        });
        // Wait for eval to finish
        await this.#halt(2000);
        return cmp == checksum;
    }
}

},{"espruino-ble-uart":"6tLyZ","md5":"jZ5V0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tLyZ":[function(require,module,exports) {
(function(root, factory) {
    if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define([], factory);
    else if (typeof module === 'object' && module.exports) // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
    else // Browser globals (root is window)
    root.UART = factory();
})(typeof self !== 'undefined' ? self : this, function() {
    if (typeof navigator == "undefined") return;
    var isBusy;
    var queue = [];
    function ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    function str2ab(str) {
        var buf = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buf);
        for(var i = 0, strLen = str.length; i < strLen; i++)bufView[i] = str.charCodeAt(i);
        return buf;
    }
    function handleQueue() {
        if (!queue.length) return;
        var q = queue.shift();
        log(3, "Executing " + JSON.stringify(q) + " from queue");
        if (q.type == "eval") uart1.eval(q.expr, q.cb);
        else if (q.type == "write") uart1.write(q.data, q.callback, q.callbackNewline);
        else log(1, "Unknown queue item " + JSON.stringify(q));
    }
    function log(level, s) {
        if (uart1.log) uart1.log(level, s);
    }
    var endpoints = [];
    var WebBluetooth = {
        name: "Web Bluetooth",
        description: "Bluetooth LE devices",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" fill="#ffffff"/></svg>',
        isSupported: function() {
            if (navigator.platform.indexOf("Win") >= 0 && (navigator.userAgent.indexOf("Chrome/54") >= 0 || navigator.userAgent.indexOf("Chrome/55") >= 0 || navigator.userAgent.indexOf("Chrome/56") >= 0)) return "Chrome <56 in Windows has navigator.bluetooth but it's not implemented properly";
            if (window && window.location && window.location.protocol == "http:" && window.location.hostname != "localhost") return "Serving off HTTP (not HTTPS) - Web Bluetooth not enabled";
            if (navigator.bluetooth) return true;
            var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if (iOS) return "To use Web Bluetooth on iOS you'll need the WebBLE App.\nPlease go to https://itunes.apple.com/us/app/webble/id1193531073 to download it.";
            else return "This Web Browser doesn't support Web Bluetooth.\nPlease see https://www.espruino.com/Puck.js+Quick+Start";
        },
        connect: function(connection, callback1) {
            var NORDIC_SERVICE = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
            var NORDIC_TX = "6e400002-b5a3-f393-e0a9-e50e24dcca9e";
            var NORDIC_RX = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";
            var CHUNKSIZE = 20;
            var btServer = undefined;
            var btService;
            var connectionDisconnectCallback;
            var txCharacteristic;
            var rxCharacteristic;
            var txDataQueue = [];
            var flowControlXOFF = false;
            connection.close = function(callback) {
                connection.isOpening = false;
                if (connection.isOpen) {
                    connection.isOpen = false;
                    connection.emit('close');
                } else if (callback) callback(null);
                if (btServer) {
                    btServer.disconnect();
                    btServer = undefined;
                    txCharacteristic = undefined;
                    rxCharacteristic = undefined;
                }
            };
            connection.write = function(data, callback) {
                if (data) txDataQueue.push({
                    data: data,
                    callback: callback,
                    maxLength: data.length
                });
                if (connection.isOpen && !connection.txInProgress) writeChunk();
                function writeChunk() {
                    if (flowControlXOFF) {
                        setTimeout(writeChunk, 50);
                        return;
                    }
                    var chunk;
                    if (!txDataQueue.length) {
                        uart1.writeProgress();
                        return;
                    }
                    var txItem = txDataQueue[0];
                    uart1.writeProgress(txItem.maxLength - txItem.data.length, txItem.maxLength);
                    if (txItem.data.length <= CHUNKSIZE) {
                        chunk = txItem.data;
                        txItem.data = undefined;
                    } else {
                        chunk = txItem.data.substr(0, CHUNKSIZE);
                        txItem.data = txItem.data.substr(CHUNKSIZE);
                    }
                    connection.txInProgress = true;
                    log(2, "Sending " + JSON.stringify(chunk));
                    txCharacteristic.writeValue(str2ab(chunk)).then(function() {
                        log(3, "Sent");
                        if (!txItem.data) {
                            txDataQueue.shift(); // remove this element
                            if (txItem.callback) txItem.callback();
                        }
                        connection.txInProgress = false;
                        writeChunk();
                    }).catch(function(error) {
                        log(1, 'SEND ERROR: ' + error);
                        txDataQueue = [];
                        connection.close();
                    });
                }
            };
            navigator.bluetooth.requestDevice({
                filters: [
                    {
                        namePrefix: 'Puck.js'
                    },
                    {
                        namePrefix: 'Pixl.js'
                    },
                    {
                        namePrefix: 'MDBT42Q'
                    },
                    {
                        namePrefix: 'Bangle'
                    },
                    {
                        namePrefix: 'RuuviTag'
                    },
                    {
                        namePrefix: 'iTracker'
                    },
                    {
                        namePrefix: 'Thingy'
                    },
                    {
                        namePrefix: 'Espruino'
                    },
                    {
                        services: [
                            NORDIC_SERVICE
                        ]
                    }
                ],
                optionalServices: [
                    NORDIC_SERVICE
                ]
            }).then(function(device) {
                log(1, 'Device Name:       ' + device.name);
                log(1, 'Device ID:         ' + device.id);
                // Was deprecated: Should use getPrimaryServices for this in future
                //log('BT>  Device UUIDs:      ' + device.uuids.join('\n' + ' '.repeat(21)));
                device.addEventListener('gattserverdisconnected', function() {
                    log(1, "Disconnected (gattserverdisconnected)");
                    connection.close();
                });
                return device.gatt.connect();
            }).then(function(server) {
                log(1, "Connected");
                btServer = server;
                return server.getPrimaryService(NORDIC_SERVICE);
            }).then(function(service) {
                log(2, "Got service");
                btService = service;
                return btService.getCharacteristic(NORDIC_RX);
            }).then(function(characteristic) {
                rxCharacteristic = characteristic;
                log(2, "RX characteristic:" + JSON.stringify(rxCharacteristic));
                rxCharacteristic.addEventListener('characteristicvaluechanged', function(event) {
                    var dataview = event.target.value;
                    if (uart1.flowControl) for(var i = 0; i < dataview.length; i++){
                        var ch = dataview.getUint8(i);
                        if (ch == 17) {
                            log(2, "XON received => resume upload");
                            flowControlXOFF = false;
                        }
                        if (ch == 19) {
                            log(2, "XOFF received => pause upload");
                            flowControlXOFF = true;
                        }
                    }
                    var str = ab2str(dataview.buffer);
                    log(3, "Received " + JSON.stringify(str));
                    connection.emit('data', str);
                });
                return rxCharacteristic.startNotifications();
            }).then(function() {
                return btService.getCharacteristic(NORDIC_TX);
            }).then(function(characteristic) {
                txCharacteristic = characteristic;
                log(2, "TX characteristic:" + JSON.stringify(txCharacteristic));
            }).then(function() {
                connection.txInProgress = false;
                connection.isOpen = true;
                connection.isOpening = false;
                isBusy = false;
                queue = [];
                callback1(connection);
                connection.emit('open');
                // if we had any writes queued, do them now
                connection.write();
            }).catch(function(error) {
                log(1, 'ERROR: ' + error);
                connection.close();
            });
            return connection;
        }
    };
    var WebSerial = {
        name: "Web Serial",
        description: "USB connected devices",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z" fill="#ffffff"/></svg>',
        isSupported: function() {
            if (!navigator.serial) return "No navigator.serial - Web Serial not enabled";
            if (window && window.location && window.location.protocol == "http:" && window.location.hostname != "localhost") return "Serving off HTTP (not HTTPS) - Web Serial not enabled";
            return true;
        },
        connect: function(connection, callback2) {
            var serialPort;
            function disconnected() {
                connection.isOpening = false;
                if (connection.isOpen) {
                    log(1, "Disconnected");
                    connection.isOpen = false;
                    connection.emit('close');
                }
            }
            // TODO: Pass USB vendor and product ID filter when supported by Chrome.
            navigator.serial.requestPort({
            }).then(function(port) {
                log(1, "Connecting to serial port");
                serialPort = port;
                return port.open({
                    baudrate: 115200
                });
            }).then(function() {
                function readLoop() {
                    var reader = serialPort.readable.getReader();
                    reader.read().then(function({ value , done  }) {
                        reader.releaseLock();
                        if (value) {
                            var str = ab2str(value.buffer);
                            log(3, "Received " + JSON.stringify(str));
                            connection.emit('data', str);
                        }
                        if (done) disconnected();
                        else readLoop();
                    });
                }
                readLoop();
                log(1, "Serial connected. Receiving data...");
                connection.txInProgress = false;
                connection.isOpen = true;
                connection.isOpening = false;
                callback2(connection);
            }).catch(function(error) {
                log(0, 'ERROR: ' + error);
                disconnected();
            });
            connection.close = function(callback) {
                if (serialPort) {
                    serialPort.close();
                    serialPort = undefined;
                }
                disconnected();
            };
            connection.write = function(data, callback) {
                var writer = serialPort.writable.getWriter();
                // TODO: progress?
                writer.write(str2ab(data)).then(function() {
                    callback();
                }).catch(function(error) {
                    log(0, 'SEND ERROR: ' + error);
                    closeSerial();
                });
                writer.releaseLock();
            };
            return connection;
        }
    };
    // ======================================================================
    endpoints.push(WebBluetooth);
    endpoints.push(WebSerial);
    // ======================================================================
    var connection1;
    function connect(callback) {
        var connection = {
            on: function(evt, cb) {
                this["on" + evt] = cb;
            },
            emit: function(evt, data) {
                if (this["on" + evt]) this["on" + evt](data);
            },
            isOpen: false,
            isOpening: true,
            txInProgress: false
        };
        // modal
        var e = document.createElement('div');
        e.style = 'position:absolute;top:0px;left:0px;right:0px;bottom:0px;opacity:0.5;z-index:100;background:black;';
        // menu
        var menu = document.createElement('div');
        menu.style = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-family: Sans-Serif;z-index:101;';
        var menutitle = document.createElement('div');
        menutitle.innerText = "SELECT A PORT...";
        menutitle.style = 'color:#fff;background:#000;padding:8px 8px 4px 8px;font-weight:bold;';
        menu.appendChild(menutitle);
        var items = document.createElement('div');
        items.style = 'color:#000;background:#fff;padding:4px 8px 4px 8px;';
        menu.appendChild(items);
        endpoints.forEach(function(endpoint) {
            var supported = endpoint.isSupported();
            if (supported !== true) log(0, endpoint.name + " not supported, " + supported);
            var ep = document.createElement('div');
            ep.style = 'width:300px;height:60px;background:#ccc;margin:4px 0px 4px 0px;padding:0px 0px 0px 68px;cursor:pointer;';
            ep.innerHTML = '<div style="position:absolute;left:8px;width:48px;height:48px;background:#999;padding:6px;cursor:pointer;">' + endpoint.svg + '</div>' + '<div style="font-size:150%;padding-top:8px;">' + endpoint.name + '</div>' + '<div style="font-size:80%;color:#666">' + endpoint.description + '</div>';
            ep.onclick = function(evt) {
                connection = endpoint.connect(connection, callback);
                evt.preventDefault();
                document.body.removeChild(menu);
                document.body.removeChild(e);
            };
            items.appendChild(ep);
        });
        document.body.appendChild(e);
        document.body.appendChild(menu);
        return connection;
    }
    function checkIfSupported() {
        var anySupported = false;
        endpoints.forEach(function(endpoint) {
            var supported = endpoint.isSupported();
            if (supported === true) anySupported = true;
            else log(0, endpoint.name + " not supported, " + supported);
        });
        return anySupported;
    }
    // ======================================================================
    /* convenience function... Write data, call the callback with data:
       callbackNewline = false => if no new data received for ~0.2 sec
       callbackNewline = true => after a newline */ function write(data, callback, callbackNewline) {
        if (!checkIfSupported()) return;
        if (isBusy) {
            log(3, "Busy - adding write to queue");
            queue.push({
                type: "write",
                data: data,
                callback: callback,
                callbackNewline: callbackNewline
            });
            return;
        }
        var cbTimeout;
        function onWritten() {
            if (callbackNewline) connection1.cb = function(d) {
                var newLineIdx = connection1.received.indexOf("\n");
                if (newLineIdx >= 0) {
                    var l = connection1.received.substr(0, newLineIdx);
                    connection1.received = connection1.received.substr(newLineIdx + 1);
                    connection1.cb = undefined;
                    if (cbTimeout) clearTimeout(cbTimeout);
                    cbTimeout = undefined;
                    if (callback) callback(l);
                    isBusy = false;
                    handleQueue();
                }
            };
            // wait for any received data if we have a callback...
            var maxTime = 300; // 30 sec - Max time we wait in total, even if getting data
            var dataWaitTime = callbackNewline ? 100 /*10 sec  if waiting for newline*/  : 3 /*300ms*/ ;
            var maxDataTime = dataWaitTime; // max time we wait after having received data
            cbTimeout = setTimeout(function timeout() {
                cbTimeout = undefined;
                if (maxTime) maxTime--;
                if (maxDataTime) maxDataTime--;
                if (connection1.hadData) maxDataTime = dataWaitTime;
                if (maxDataTime && maxTime) cbTimeout = setTimeout(timeout, 100);
                else {
                    connection1.cb = undefined;
                    if (callbackNewline) log(2, "write waiting for newline timed out");
                    if (callback) callback(connection1.received);
                    isBusy = false;
                    handleQueue();
                    connection1.received = "";
                }
                connection1.hadData = false;
            }, 100);
        }
        if (connection1 && (connection1.isOpen || connection1.isOpening)) {
            if (!connection1.txInProgress) connection1.received = "";
            isBusy = true;
            return connection1.write(data, onWritten);
        }
        connection1 = connect(function(uart) {
            if (!uart) {
                connection1 = undefined;
                if (callback) callback(null);
                return;
            }
            connection1.received = "";
            connection1.on('data', function(d) {
                connection1.received += d;
                connection1.hadData = true;
                if (connection1.cb) connection1.cb(d);
            });
            connection1.on('close', function(d) {
                connection1 = undefined;
            });
            isBusy = true;
            connection1.write(data, onWritten);
        });
    }
    function evaluate(expr, cb) {
        if (!checkIfSupported()) return;
        if (isBusy) {
            log(3, "Busy - adding eval to queue");
            queue.push({
                type: "eval",
                expr: expr,
                cb: cb
            });
            return;
        }
        write('\x10eval(process.env.CONSOLE).println(JSON.stringify(' + expr + '))\n', function(d) {
            try {
                var json = JSON.parse(d.trim());
                cb(json);
            } catch (e) {
                log(1, "Unable to decode " + JSON.stringify(d) + ", got " + e.toString());
                cb(null, "Unable to decode " + JSON.stringify(d) + ", got " + e.toString());
            }
        }, true);
    }
    // ----------------------------------------------------------
    var uart1 = {
        /// Are we writing debug information? 0 is no, 1 is some, 2 is more, 3 is all.
        debug: 3,
        /// Should we use flow control? Default is true
        flowControl: true,
        /// Used internally to write log information - you can replace this with your own function
        log: function(level, s) {
            if (level <= this.debug) console.log("<UART> " + s);
        },
        /// Called with the current send progress or undefined when done - you can replace this with your own function
        writeProgress: function(charsSent, charsTotal) {
        //console.log(charsSent + "/" + charsTotal);
        },
        /** Connect to a new device - this creates a separate
     connection to the one `write` and `eval` use. */ connect: connect,
        /// Write to a device and call back when the data is written.  Creates a connection if it doesn't exist
        write: write,
        /// Evaluate an expression and call cb with the result. Creates a connection if it doesn't exist
        eval: evaluate,
        /// Write the current time to the device
        setTime: function(cb) {
            var d = new Date();
            var cmd = 'setTime(' + d.getTime() / 1000 + ');';
            // in 1v93 we have timezones too
            cmd += 'if (E.setTimeZone) E.setTimeZone(' + d.getTimezoneOffset() / -60 + ');\n';
            write(cmd, cb);
        },
        /// Did `write` and `eval` manage to create a connection?
        isConnected: function() {
            return connection1 !== undefined;
        },
        /// get the connection used by `write` and `eval`
        getConnection: function() {
            return connection1;
        },
        /// Close the connection used by `write` and `eval`
        close: function() {
            if (connection1) connection1.close();
        },
        /** Utility function to fade out everything on the webpage and display
    a window saying 'Click to continue'. When clicked it'll disappear and
    'callback' will be called. This is useful because you can't initialise
    Web Bluetooth unless you're doing so in response to a user input.*/ modal: function(callback) {
            var e = document.createElement('div');
            e.style = 'position:absolute;top:0px;left:0px;right:0px;bottom:0px;opacity:0.5;z-index:100;background:black;';
            e.innerHTML = '<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-family: Sans-Serif;font-size:400%;color:white;">Click to Continue...</div>';
            e.onclick = function(evt) {
                callback();
                evt.preventDefault();
                document.body.removeChild(e);
            };
            document.body.appendChild(e);
        }
    };
    return uart1;
});

},{}],"jZ5V0":[function(require,module,exports) {
(function() {
    var crypt = require('crypt'), utf8 = require('charenc').utf8, isBuffer = require('is-buffer'), bin = require('charenc').bin, // The core
    md5 = function(message, options) {
        // Convert to byte array
        if (message.constructor == String) {
            if (options && options.encoding === 'binary') message = bin.stringToBytes(message);
            else message = utf8.stringToBytes(message);
        } else if (isBuffer(message)) message = Array.prototype.slice.call(message, 0);
        else if (!Array.isArray(message) && message.constructor !== Uint8Array) message = message.toString();
        // else, assume byte array already
        var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        // Swap endian
        for(var i = 0; i < m.length; i++)m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
        // Padding
        m[l >>> 5] |= 128 << l % 32;
        m[(l + 64 >>> 9 << 4) + 14] = l;
        // Method shortcuts
        var FF = md5._ff, GG = md5._gg, HH = md5._hh, II = md5._ii;
        for(var i = 0; i < m.length; i += 16){
            var aa = a, bb = b, cc = c, dd = d;
            a = FF(a, b, c, d, m[i + 0], 7, -680876936);
            d = FF(d, a, b, c, m[i + 1], 12, -389564586);
            c = FF(c, d, a, b, m[i + 2], 17, 606105819);
            b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
            a = FF(a, b, c, d, m[i + 4], 7, -176418897);
            d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
            c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
            b = FF(b, c, d, a, m[i + 7], 22, -45705983);
            a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
            d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
            c = FF(c, d, a, b, m[i + 10], 17, -42063);
            b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
            a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
            d = FF(d, a, b, c, m[i + 13], 12, -40341101);
            c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
            b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
            a = GG(a, b, c, d, m[i + 1], 5, -165796510);
            d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
            c = GG(c, d, a, b, m[i + 11], 14, 643717713);
            b = GG(b, c, d, a, m[i + 0], 20, -373897302);
            a = GG(a, b, c, d, m[i + 5], 5, -701558691);
            d = GG(d, a, b, c, m[i + 10], 9, 38016083);
            c = GG(c, d, a, b, m[i + 15], 14, -660478335);
            b = GG(b, c, d, a, m[i + 4], 20, -405537848);
            a = GG(a, b, c, d, m[i + 9], 5, 568446438);
            d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
            c = GG(c, d, a, b, m[i + 3], 14, -187363961);
            b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
            a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
            d = GG(d, a, b, c, m[i + 2], 9, -51403784);
            c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
            b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
            a = HH(a, b, c, d, m[i + 5], 4, -378558);
            d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
            c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
            b = HH(b, c, d, a, m[i + 14], 23, -35309556);
            a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
            d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
            c = HH(c, d, a, b, m[i + 7], 16, -155497632);
            b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
            a = HH(a, b, c, d, m[i + 13], 4, 681279174);
            d = HH(d, a, b, c, m[i + 0], 11, -358537222);
            c = HH(c, d, a, b, m[i + 3], 16, -722521979);
            b = HH(b, c, d, a, m[i + 6], 23, 76029189);
            a = HH(a, b, c, d, m[i + 9], 4, -640364487);
            d = HH(d, a, b, c, m[i + 12], 11, -421815835);
            c = HH(c, d, a, b, m[i + 15], 16, 530742520);
            b = HH(b, c, d, a, m[i + 2], 23, -995338651);
            a = II(a, b, c, d, m[i + 0], 6, -198630844);
            d = II(d, a, b, c, m[i + 7], 10, 1126891415);
            c = II(c, d, a, b, m[i + 14], 15, -1416354905);
            b = II(b, c, d, a, m[i + 5], 21, -57434055);
            a = II(a, b, c, d, m[i + 12], 6, 1700485571);
            d = II(d, a, b, c, m[i + 3], 10, -1894986606);
            c = II(c, d, a, b, m[i + 10], 15, -1051523);
            b = II(b, c, d, a, m[i + 1], 21, -2054922799);
            a = II(a, b, c, d, m[i + 8], 6, 1873313359);
            d = II(d, a, b, c, m[i + 15], 10, -30611744);
            c = II(c, d, a, b, m[i + 6], 15, -1560198380);
            b = II(b, c, d, a, m[i + 13], 21, 1309151649);
            a = II(a, b, c, d, m[i + 4], 6, -145523070);
            d = II(d, a, b, c, m[i + 11], 10, -1120210379);
            c = II(c, d, a, b, m[i + 2], 15, 718787259);
            b = II(b, c, d, a, m[i + 9], 21, -343485551);
            a = a + aa >>> 0;
            b = b + bb >>> 0;
            c = c + cc >>> 0;
            d = d + dd >>> 0;
        }
        return crypt.endian([
            a,
            b,
            c,
            d
        ]);
    };
    // Auxiliary functions
    md5._ff = function(a, b, c, d, x, s, t) {
        var n = a + (b & c | ~b & d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    };
    md5._gg = function(a, b, c, d, x, s, t) {
        var n = a + (b & d | c & ~d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    };
    md5._hh = function(a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    };
    md5._ii = function(a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    };
    // Package private blocksize
    md5._blocksize = 16;
    md5._digestsize = 16;
    module.exports = function(message, options) {
        if (message === undefined || message === null) throw new Error('Illegal argument ' + message);
        var digestbytes = crypt.wordsToBytes(md5(message, options));
        return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
    };
})();

},{"crypt":"fdR42","charenc":"bvGEx","is-buffer":"9JmUB"}],"fdR42":[function(require,module,exports) {
(function() {
    var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', crypt = {
        // Bit-wise rotation left
        rotl: function(n, b) {
            return n << b | n >>> 32 - b;
        },
        // Bit-wise rotation right
        rotr: function(n, b) {
            return n << 32 - b | n >>> b;
        },
        // Swap big-endian to little-endian and vice versa
        endian: function(n) {
            // If number given, swap endian
            if (n.constructor == Number) return crypt.rotl(n, 8) & 16711935 | crypt.rotl(n, 24) & 4278255360;
            // Else, assume array and swap all items
            for(var i = 0; i < n.length; i++)n[i] = crypt.endian(n[i]);
            return n;
        },
        // Generate an array of any length of random bytes
        randomBytes: function(n) {
            for(var bytes = []; n > 0; n--)bytes.push(Math.floor(Math.random() * 256));
            return bytes;
        },
        // Convert a byte array to big-endian 32-bit words
        bytesToWords: function(bytes) {
            for(var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)words[b >>> 5] |= bytes[i] << 24 - b % 32;
            return words;
        },
        // Convert big-endian 32-bit words to a byte array
        wordsToBytes: function(words) {
            for(var bytes = [], b = 0; b < words.length * 32; b += 8)bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
            return bytes;
        },
        // Convert a byte array to a hex string
        bytesToHex: function(bytes) {
            for(var hex = [], i = 0; i < bytes.length; i++){
                hex.push((bytes[i] >>> 4).toString(16));
                hex.push((bytes[i] & 15).toString(16));
            }
            return hex.join('');
        },
        // Convert a hex string to a byte array
        hexToBytes: function(hex) {
            for(var bytes = [], c = 0; c < hex.length; c += 2)bytes.push(parseInt(hex.substr(c, 2), 16));
            return bytes;
        },
        // Convert a byte array to a base-64 string
        bytesToBase64: function(bytes) {
            for(var base64 = [], i = 0; i < bytes.length; i += 3){
                var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
                for(var j = 0; j < 4; j++)if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
                else base64.push('=');
            }
            return base64.join('');
        },
        // Convert a base-64 string to a byte array
        base64ToBytes: function(base64) {
            // Remove non-base-64 characters
            base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');
            for(var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4){
                if (imod4 == 0) continue;
                bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
            }
            return bytes;
        }
    };
    module.exports = crypt;
})();

},{}],"bvGEx":[function(require,module,exports) {
var charenc = {
    // UTF-8 encoding
    utf8: {
        // Convert a string to a byte array
        stringToBytes: function(str) {
            return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
        },
        // Convert a byte array to a string
        bytesToString: function(bytes) {
            return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
        }
    },
    // Binary encoding
    bin: {
        // Convert a string to a byte array
        stringToBytes: function(str) {
            for(var bytes = [], i = 0; i < str.length; i++)bytes.push(str.charCodeAt(i) & 255);
            return bytes;
        },
        // Convert a byte array to a string
        bytesToString: function(bytes) {
            for(var str = [], i = 0; i < bytes.length; i++)str.push(String.fromCharCode(bytes[i]));
            return str.join('');
        }
    }
};
module.exports = charenc;

},{}],"9JmUB":[function(require,module,exports) {
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ // The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};
function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}
// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["glmxQ","1cW8y"], "1cW8y", "parcelRequire8cd7")

//# sourceMappingURL=index.6989c0ba.js.map
