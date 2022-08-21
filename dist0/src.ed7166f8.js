// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Focm":[function(require,module,exports) {
var code = document.querySelector(".code");
var style = document.querySelector(".style");
var str = "\n/* \u60A8\u597D\uFF0C\u6211\u51C6\u5907 show \u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n\u5148\u641E\u4E2A div \u6846\u6846\u51FA\u6765*/\n.effect {\n    display: flex;\n    border: 1px black solid;\n    justify-content: center;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    box-sizing: border-box;\n}\n/* \u63A5\u4E0B\u6765\u8981\u5728\u6846\u6846\u91CC\u753B\u4E00\u4E2A\u5706\uFF0C\u5E76\u586B\u5145\u4E00\u4E2A\u6E10\u53D8\u8272 */\n.circle{\n    border: 1px black solid;\n    width: 30vw;\n    height: 30vw;\n    border-radius: 50%;\n    background: linear-gradient(90deg, #FFFFFF 0%,#FFFFFF 50%,#000000 50%,#000000 100%);\n}\n/* \u73B0\u5728\u51C6\u5907\u753B\u51FA\u592A\u6781\u7684\u8F6E\u5ED3 */\n.blackCircle {\n    position: relative;\n    width: 15vw;\n    height: 15vw;\n    border-radius: 50%;\n    background: black;\n    transform: translate(50%);\n}\n.whiteCircle {\n    position: relative;\n    width: 15vw;\n    height: 15vw;\n    border-radius: 50%;\n    background: white;\n    transform: translate(50%);\n}\n/* \u518D\u641E\u4E24\u4E2A\u5C0F\u7403\u4E0A\u53BB */\n.whiteBall {\n    position: relative;\n    width: 5vw;\n    height: 5vw;\n    border-radius: 50%;\n    background: white;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n.blackBall {\n    position: relative;\n    width: 5vw;\n    height: 5vw;\n    border-radius: 50%;\n    background: black;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n}\n";
var content = "";
var i = 1;
var speed = 50;

var step = function step() {
  console.log("执行一次");

  if (str[i] === "\n") {
    content += "<br>";
  } else {
    content += str[i];
  }

  if (i < str.length) {
    setTimeout(function () {
      code.innerHTML = content;
      style.innerHTML = str.substring(0, i);
      i++;
      code.scroll(0, 9999);
      window.scroll(0, 9999);
      step();
    }, speed);
  } else {
    return 0;
  }
};

step();

function changeSpeed() {
  speed = speed === 0 ? 50 : 0;
}
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.ed7166f8.js.map