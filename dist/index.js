/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    function createWebAssemblyModulePromise (deps) {\n      var p = new Promise(function(resolve){\n        var compatibleModule;\n                if (typeof WebAssembly !== 'undefined') {\n                    var buffer = new ArrayBuffer(287);\n        var uint8 = new Uint8Array(buffer);\n        uint8.set([0,97,115,109,1,0,0,0,1,11,2,96,2,124,124,1,124,96,0,1,127,3,4,3,0,0,1,5,3,1,0,1,6,25,2,124,0,68,0,0,0,0,0,192,94,64,11,124,0,68,0,0,0,0,0,0,8,64,11,7,40,6,6,109,101,109,111,114,121,2,0,1,98,3,0,3,108,101,110,3,1,4,105,110,105,116,0,0,3,97,100,100,0,1,4,116,101,115,116,0,2,10,86,3,7,0,32,0,32,1,162,11,71,0,68,0,0,0,0,0,0,240,63,33,1,2,64,68,0,0,0,0,0,0,0,0,33,0,3,64,32,0,68,0,0,0,0,0,0,8,64,99,69,13,1,32,1,32,0,160,33,1,32,0,68,0,0,0,0,0,0,240,63,160,33,0,12,0,11,0,11,32,1,11,4,0,65,8,11,11,17,1,0,65,8,11,11,4,0,0,0,95,0,115,0,116,0,114,0,43,4,110,97,109,101,1,36,3,0,10,105,110,100,101,120,47,105,110,105,116,1,9,105,110,100,101,120,47,97,100,100,2,10,105,110,100,101,120,47,116,101,115,116,0,32,16,115,111,117,114,99,101,77,97,112,112,105,110,103,85,82,76,14,105,110,100,101,120,46,119,97,115,109,46,109,97,112]);\n        'use strict';\n\nvar WebAssemblyModule = function WebAssemblyModule(deps) {\n    var defaultDeps = {\n        'global': {},\n        'env': {\n            'memory': new WebAssembly.Memory({\n                initial: 10,\n                limit: 100 }),\n            'table': new WebAssembly.Table({\n                initial: 0,\n                element: 'anyfunc' })\n        }\n    };\n    return new WebAssembly.Instance(new WebAssembly.Module(buffer), deps || defaultDeps);\n};\n                    compatibleModule = WebAssemblyModule;\n\n                }\n                else {\n                    \"use strict\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ./wm/index */ \"./wm/index.js\");\r\n/* import * as faker from \"faker\";\r\nfaker.address */\r\n// do something with ptr ...\r\n// ... and free it again\r\nexports.b = index_1.a;\r\nexports.len = 3;\r\nfunction init(w_, h_) {\r\n    var w = w_;\r\n    var h = h_;\r\n    return w * h;\r\n}\r\nexports.init = init;\r\nfunction add(x, y) {\r\n    var j = 1;\r\n    for (var i = 0; i < exports.len; i++) {\r\n        j = j + i;\r\n    }\r\n    var kk = 123.36;\r\n    //  const aaa=\"444\"\r\n    //window.prompt(aaa,j)\r\n    // window.console(\"aaaaaa\")\r\n    return j;\r\n}\r\nexports.add = add;\r\nfunction test() {\r\n    return \"_str\";\r\n}\r\nexports.test = test;\r\n\n                    compatibleModule = function() {};          compatibleModule.prototype.exports = exports;\n                }\n        resolve(compatibleModule().exports);;\n      });\n      return p\n    }\n    module.exports = createWebAssemblyModulePromise\n    \n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./wm/index.js":
/*!*********************!*\
  !*** ./wm/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.a = 123;\r\n\n\n//# sourceURL=webpack:///./wm/index.js?");

/***/ })

/******/ });