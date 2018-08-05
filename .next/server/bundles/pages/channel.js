module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeStart = function (url) {
  __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_5_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-1719653633"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,maximum-scale=1",
        className: "jsx-1719653633"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        className: "jsx-1719653633"
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/ico.png",
        className: "jsx-1719653633"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        className: "jsx-1719653633"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "jsx-1719653633"
      }, "PlatziCast"))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3989426853",
        css: ["header.jsx-1719653633{color:#fff;right:0;background:#8756ca;padding:15px;text-align:center;}", "header.jsx-1719653633 a.jsx-1719653633{color:#fff;-webkit-text-decoration:none;text-decoration:none;}"]
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3711877037",
        css: ["body{margin:0;font-family:sans-serif,system-ui;background:#efefef;}", "#nprogress{pointer-events:none;}", "#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}", "#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}", "#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}", ".nprogress-custom-parent{overflow:hidden;position:relative;}", ".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        title: "Oh no :("
      }, statusCode === 404 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-1949451712" + " " + "message"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "jsx-1949451712"
      }, "Esta p\xE1gina no existe :("), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-1949451712"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "jsx-1949451712"
      }, "Volver a la home")))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-1949451712" + " " + "message"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "jsx-1949451712"
      }, "Hubo un problema :("), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-1949451712"
      }, "Intenta nuevamente en unos segundos")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1949451712",
        css: [".message.jsx-1949451712{padding:100px 30px;text-align:center;}", "h1.jsx-1949451712{margin-bottom:2em;}", "a.jsx-1949451712{color:#8756ca;}"]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = slug;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_slugify__);

function slug(name) {
  return __WEBPACK_IMPORTED_MODULE_0_slugify___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_slug__ = __webpack_require__(10);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChannelGrid, _React$Component);

  function ChannelGrid() {
    _classCallCheck(this, ChannelGrid);

    return _possibleConstructorReturn(this, (ChannelGrid.__proto__ || Object.getPrototypeOf(ChannelGrid)).apply(this, arguments));
  }

  _createClass(ChannelGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-4112169031" + " " + "channels"
      }, channels.map(function (channel, value) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
          route: "channel",
          params: {
            slug: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(channel.title),
            id: channel.id
          },
          prefetch: true,
          key: channel.id
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          className: "jsx-4112169031" + " " + "channel"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: channel.title,
          className: "jsx-4112169031"
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          className: "jsx-4112169031"
        }, channel.title)));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4112169031",
        css: [".channels.jsx-4112169031{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}", "a.channel.jsx-4112169031{display:block;margin-bottom:0.5em;color:white;-webkit-text-decoration:none;text-decoration:none;box-shadow:0px 2px 6px rgba(0,0,0,0.15);background:#313131;}", ".channel.jsx-4112169031 img.jsx-4112169031{border-radius:3px;width:100%;}", "h2.jsx-4112169031{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}", "@media screen and (max-width:768px){.channels.jsx-4112169031{padding:0;grid-template-columns:repeat(auto-fill,minmax(136.5px,1fr));padding-bottom:15px;}}"]
      }));
    }
  }]);

  return ChannelGrid;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(13)();

routes.add('home', '/', 'index').add('channel', '/:slug.:id', 'channel').add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast');

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Col; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          cls = _props.cls;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: cls
      }, children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "\n\n\t\t\t\t\t.col-1 {width: 8.33%;}\n\t\t\t\t\t.col-2 {width: 16.67%;}\n\t\t\t\t\t.col-3 {width: 25%;}\n\t\t\t\t\t.col-4 {width: 33.33%;}\n\t\t\t\t\t.col-5 {width: 41.67%;}\n\t\t\t\t\t.col-6 {width: 50%;}\n\t\t\t\t\t.col-7 {width: 58.33%;}\n\t\t\t\t\t.col-8 {width: 66.67%;}\n\t\t\t\t\t.col-9 {width: 75%;}\n\t\t\t\t\t.col-10 {width: 83.33%;}\n\t\t\t\t\t.col-11 {width: 91.67%;}\n\t\t\t\t\t.col-12 {width: 100%;}\n\t\t\t\t\t.col-offset-1 {margin-left: 8.33%;}\n\t\t\t\t\t.col-offset-2 {margin-left: 16.67%;}\n\t\t\t\t\t.col-offset-3 {margin-left: 25%;}\n\t\t\t\t\t.col-offset-4 {margin-left: 33.33%;}\n\t\t\t\t\t.col-offset-5 {margin-left: 41.67%;}\n\t\t\t\t\t.col-offset-6 {margin-left: 50%;}\n\t\t\t\t\t.col-offset-7 {margin-left: 58.33%;}\n\t\t\t\t\t.col-offset-8 {margin-left: 66.67%;}\n\t\t\t\t\t.col-offset-9 {margin-left: 75%;}\n\t\t\t\t\t.col-offset-10 {margin-left: 83.33%;}\n\t\t\t\t\t.col-offset-11 {margin-left: 91.67%;}\n\t\t\t\t\t.col-offset-12 {margin-left: 100%;}\n\n\t\t\t\t\t@media screen and (max-width: 992px) {\n    \n\t\t\t\t\t    .container {\n\t\t\t\t\t        width: 100%;\n\t\t\t\t\t    }\n\n\t\t\t\t\t    .col-offset-1 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-2 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-3 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-4 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-5 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-6 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-7 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-8 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-9 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-10 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-11 {margin-left: 0%;}\n\t\t\t\t\t    .col-offset-12 {margin-left: 0%;}\n\t\t\t\t\t    \n\n\t\t\t\t\t    .col-md {padding-right: 1.5em;padding-left: 1.5em;}\n\n\t\t\t\t\t    .col-md-1 {width: 8.33%;}\n\t\t\t\t\t    .col-md-2 {width: 16.67%;}\n\t\t\t\t\t    .col-md-3 {width: 25%;}\n\t\t\t\t\t    .col-md-4 {width: 33.33%;}\n\t\t\t\t\t    .col-md-5 {width: 41.67%;}\n\t\t\t\t\t    .col-md-6 {width: 50%;}\n\t\t\t\t\t    .col-md-7 {width: 58.33%;}\n\t\t\t\t\t    .col-md-8 {width: 66.67%;}\n\t\t\t\t\t    .col-md-9 {width: 75%;}\n\t\t\t\t\t    .col-md-10 {width: 83.33%;}\n\t\t\t\t\t    .col-md-11 {width: 91.67%;}\n\t\t\t\t\t    .col-md-12 {width: 100%;}\n\t\t\t\t\t    .col-md-offset-1 {margin-left: 8.33%;}\n\t\t\t\t\t    .col-md-offset-2 {margin-left: 16.67%;}\n\t\t\t\t\t    .col-md-offset-3 {margin-left: 25%;}\n\t\t\t\t\t    .col-md-offset-4 {margin-left: 33.33%;}\n\t\t\t\t\t    .col-md-offset-5 {margin-left: 41.67%;}\n\t\t\t\t\t    .col-md-offset-6 {margin-left: 50%;}\n\t\t\t\t\t    .col-md-offset-7 {margin-left: 58.33%;}\n\t\t\t\t\t    .col-md-offset-8 {margin-left: 66.67%;}\n\t\t\t\t\t    .col-md-offset-9 {margin-left: 75%;}\n\t\t\t\t\t    .col-md-offset-10 {margin-left: 83.33%;}\n\t\t\t\t\t    .col-md-offset-11 {margin-left: 91.67%;}\n\t\t\t\t\t    .col-md-offset-12 {margin-left: 100%;}\n\t\t\t\t\t}\n\n\t\t\t\t\t@media screen and (max-width: 768px) {\n\n\t\t\t\t\t    .col-sm {padding-right: 1em;padding-left: 1em;}\n\t\t\t\t\t    .col-p-t {padding-top: 1.5em;padding-bottom: 1.5em; }\n\t\t\t\t\t    .col-md-offset-1 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-2 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-3 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-4 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-5 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-6 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-7 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-8 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-9 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-10 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-11 {margin-left: 0%;}\n\t\t\t\t\t    .col-md-offset-12 {margin-left: 0%;}\n\n\t\t\t\t\t    .col-sm-1 {width: 8.33%;}\n\t\t\t\t\t    .col-sm-2 {width: 16.67%;}\n\t\t\t\t\t    .col-sm-3 {width: 25%;}\n\t\t\t\t\t    .col-sm-4 {width: 33.33%;}\n\t\t\t\t\t    .col-sm-5 {width: 41.67%;}\n\t\t\t\t\t    .col-sm-6 {width: 50%;}\n\t\t\t\t\t    .col-sm-7 {width: 58.33%;}\n\t\t\t\t\t    .col-sm-8 {width: 66.67%;}\n\t\t\t\t\t    .col-sm-9 {width: 75%;}\n\t\t\t\t\t    .col-sm-10 {width: 83.33%;}\n\t\t\t\t\t    .col-sm-11 {width: 91.67%;}\n\t\t\t\t\t    .col-sm-12 {width: 100%;}\n\t\t\t\t\t    .col-sm-offset-1 {margin-left: 8.33%;}\n\t\t\t\t\t    .col-sm-offset-2 {margin-left: 16.67%;}\n\t\t\t\t\t    .col-sm-offset-3 {margin-left: 25%;}\n\t\t\t\t\t    .col-sm-offset-4 {margin-left: 33.33%;}\n\t\t\t\t\t    .col-sm-offset-5 {margin-left: 41.67%;}\n\t\t\t\t\t    .col-sm-offset-6 {margin-left: 50%;}\n\t\t\t\t\t    .col-sm-offset-7 {margin-left: 58.33%;}\n\t\t\t\t\t    .col-sm-offset-8 {margin-left: 66.67%;}\n\t\t\t\t\t    .col-sm-offset-9 {margin-left: 75%;}\n\t\t\t\t\t    .col-sm-offset-10 {margin-left: 83.33%;}\n\t\t\t\t\t    .col-sm-offset-11 {margin-left: 91.67%;}\n\t\t\t\t\t    .col-sm-offset-12 {margin-left: 100%;}\n\t\t\t\t\t}\n\n\t\t\t\t\t@media screen and (max-width: 576px) {\n\n\t\t\t\t\t}\n\t\t\t\t"));
    }
  }]);

  return Col;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Row; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          cls = _props.cls;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: cls
      }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "\n\t\t\t\t\t.container {\n\t\t\t\t\t\twidth: 90%;\n\t\t\t\t\t\tmax-width: 90%;\n\t\t\t\t\t\tmargin: 0 auto;\n\t\t\t\t\t\tz-index: 1;\n\t\t\t\t\t}\n\t\t\t\t\t.row {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t}\n\t\t\t\t"));
    }
  }]);

  return Row;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(8);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(9);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__(7);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(3);

// EXTERNAL MODULE: ./components/ChannelGrid.js
var ChannelGrid = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Banner.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Banner_Banner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Banner, _React$Component);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          url = _props.url,
          title = _props.title;
      return external__react__default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(url, ")")
        },
        className: "jsx-2531246328" + " " + "banner"
      }, external__react__default.a.createElement("h1", {
        className: "jsx-2531246328"
      }, title), external__react__default.a.createElement(style__default.a, {
        styleId: "2531246328",
        css: [".banner.jsx-2531246328{width:100%;padding-bottom:calc(25%);background-position:50% 50%;background-size:cover;background-color:#aaa;background-attachment:scroll;position:relative;margin-bottom:25px;}", "h1.jsx-2531246328{font-weight:600;padding:0px;margin:0 auto;position:absolute;left:0;right:0;text-align:center;bottom:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:4em;text-shadow:3px 3px 2px rgba(0,0,0,0.9);}"]
      }));
    }
  }]);

  return Banner;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./helpers/slug.js
var slug = __webpack_require__(10);

// CONCATENATED MODULE: ./components/PodcastGridClick.js



function PodcastGridClick__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PodcastGridClick__typeof = function _typeof(obj) { return typeof obj; }; } else { PodcastGridClick__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PodcastGridClick__typeof(obj); }

function PodcastGridClick__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PodcastGridClick__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PodcastGridClick__createClass(Constructor, protoProps, staticProps) { if (protoProps) PodcastGridClick__defineProperties(Constructor.prototype, protoProps); if (staticProps) PodcastGridClick__defineProperties(Constructor, staticProps); return Constructor; }

function PodcastGridClick__possibleConstructorReturn(self, call) { if (call && (PodcastGridClick__typeof(call) === "object" || typeof call === "function")) { return call; } return PodcastGridClick__assertThisInitialized(self); }

function PodcastGridClick__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PodcastGridClick__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PodcastGridClick_PodcastGrid =
/*#__PURE__*/
function (_React$Component) {
  PodcastGridClick__inherits(PodcastGrid, _React$Component);

  function PodcastGrid() {
    PodcastGridClick__classCallCheck(this, PodcastGrid);

    return PodcastGridClick__possibleConstructorReturn(this, (PodcastGrid.__proto__ || Object.getPrototypeOf(PodcastGrid)).apply(this, arguments));
  }

  PodcastGridClick__createClass(PodcastGrid, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          audio_clips = _props.audio_clips,
          onClickPodcast = _props.onClickPodcast;
      return external__react__default.a.createElement("div", {
        className: "jsx-3977216516" + " " + "podcast"
      }, audio_clips.map(function (clip) {
        return external__react__default.a.createElement("a", {
          href: "/".concat(Object(slug["a" /* default */])(clip.channel.title), ".").concat(clip.channel.id, "/").concat(Object(slug["a" /* default */])(clip.title), ".").concat(clip.id),
          key: clip.id,
          onClick: function onClick(e) {
            return onClickPodcast(e, clip);
          },
          className: "jsx-3977216516" + " " + "podcast_link"
        }, external__react__default.a.createElement("figure", {
          className: "jsx-3977216516"
        }, external__react__default.a.createElement("img", {
          src: "".concat(clip.urls.image || clip.channel.urls.logo_image.original),
          alt: clip.title,
          className: "jsx-3977216516"
        })), external__react__default.a.createElement("div", {
          className: "jsx-3977216516"
        }, external__react__default.a.createElement("h3", {
          className: "jsx-3977216516"
        }, clip.title), external__react__default.a.createElement("div", {
          className: "jsx-3977216516" + " " + "meta"
        }, Math.ceil(clip.duration / 60), " minutes")));
      }), external__react__default.a.createElement(style__default.a, {
        styleId: "3977216516",
        css: [".podcast.jsx-3977216516{padding:15px;}", "figure.jsx-3977216516{margin:0;font-size:0;height:30px;width:30px;overflow:hidden;float:left;padding-right:10px;}", "figure.jsx-3977216516 img.jsx-3977216516{max-width:100%;}", ".podcast_link.jsx-3977216516{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;margin-bottom:10px;}", ".podcast_link.jsx-3977216516:hover{color:#000;}", ".podcast.jsx-3977216516 h3.jsx-3977216516{margin:0;font-size:15px;}", ".podcast.jsx-3977216516 .meta.jsx-3977216516{color:#666;margin-bottom:0.5em;font-size:12px;}", "@media screen and (max-width:768px){.podcast.jsx-3977216516{padding:0px;}}"]
      }));
    }
  }]);

  return PodcastGrid;
}(external__react__default.a.Component);


// EXTERNAL MODULE: ./components/Col.js
var Col = __webpack_require__(15);

// EXTERNAL MODULE: ./components/Row.js
var Row = __webpack_require__(16);

// CONCATENATED MODULE: ./components/PodcastPlayer.js



function PodcastPlayer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PodcastPlayer__typeof = function _typeof(obj) { return typeof obj; }; } else { PodcastPlayer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PodcastPlayer__typeof(obj); }

function PodcastPlayer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PodcastPlayer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PodcastPlayer__createClass(Constructor, protoProps, staticProps) { if (protoProps) PodcastPlayer__defineProperties(Constructor.prototype, protoProps); if (staticProps) PodcastPlayer__defineProperties(Constructor, staticProps); return Constructor; }

function PodcastPlayer__possibleConstructorReturn(self, call) { if (call && (PodcastPlayer__typeof(call) === "object" || typeof call === "function")) { return call; } return PodcastPlayer__assertThisInitialized(self); }

function PodcastPlayer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PodcastPlayer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PodcastPlayer_PodcastPlayer =
/*#__PURE__*/
function (_React$Component) {
  PodcastPlayer__inherits(PodcastPlayer, _React$Component);

  function PodcastPlayer() {
    PodcastPlayer__classCallCheck(this, PodcastPlayer);

    return PodcastPlayer__possibleConstructorReturn(this, (PodcastPlayer.__proto__ || Object.getPrototypeOf(PodcastPlayer)).apply(this, arguments));
  }

  PodcastPlayer__createClass(PodcastPlayer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          clip = _props.clip,
          onClose = _props.onClose;
      return external__react__default.a.createElement("div", {
        className: "jsx-1710175276" + " " + 'clip'
      }, external__react__default.a.createElement("nav", {
        className: "jsx-1710175276"
      }, onClose ? external__react__default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-1710175276"
      }, "< Volver") : external__react__default.a.createElement(Link, {
        href: "/channel?id=".concat(clip.channel.id)
      }, external__react__default.a.createElement("a", {
        className: "jsx-1710175276" + " " + "close"
      }, "< Volver"))), external__react__default.a.createElement("picture", {
        className: "jsx-1710175276"
      }, external__react__default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
        },
        className: "jsx-1710175276"
      })), external__react__default.a.createElement("div", {
        className: "jsx-1710175276" + " " + 'player'
      }, external__react__default.a.createElement("h3", {
        className: "jsx-1710175276"
      }, clip.title), external__react__default.a.createElement("h6", {
        className: "jsx-1710175276"
      }, clip.channel.title), external__react__default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-1710175276"
      }, external__react__default.a.createElement("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-1710175276"
      }))), external__react__default.a.createElement(style__default.a, {
        styleId: "1710175276",
        css: ["nav.jsx-1710175276{background:none;}", "nav.jsx-1710175276 a.jsx-1710175276{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}", ".clip.jsx-1710175276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}", "picture.jsx-1710175276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:2%;}", "picture.jsx-1710175276 div.jsx-1710175276{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}", ".player.jsx-1710175276{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}", "h3.jsx-1710175276{margin:0;}", "h6.jsx-1710175276{margin:0;margin-top:1em;}", "audio.jsx-1710175276{margin-top:2em;width:100%;}", "@media screen and (max-width:768px){picture.jsx-1710175276{padding:8%;}}"]
      }));
    }
  }]);

  return PodcastPlayer;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./pages/channel.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return channel__default; });




function channel__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { channel__typeof = function _typeof(obj) { return typeof obj; }; } else { channel__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return channel__typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function channel__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function channel__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function channel__createClass(Constructor, protoProps, staticProps) { if (protoProps) channel__defineProperties(Constructor.prototype, protoProps); if (staticProps) channel__defineProperties(Constructor, staticProps); return Constructor; }

function channel__possibleConstructorReturn(self, call) { if (call && (channel__typeof(call) === "object" || typeof call === "function")) { return call; } return channel__assertThisInitialized(self); }

function channel__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function channel__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






 // import PodcastGrid from '../components/PodcastGrid'






var channel__default =
/*#__PURE__*/
function (_React$Component) {
  channel__inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    channel__classCallCheck(this, _default);

    _this = channel__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(channel__assertThisInitialized(_this), "openPodcast", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, podcast) {
        e.preventDefault();

        _this.setState({
          openPodcast: podcast
        });
      }
    });
    Object.defineProperty(channel__assertThisInitialized(_this), "closePodcast", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.setState({
          openPodcast: null
        });
      }
    });
    _this.state = {
      openPodcast: null
    };
    return _this;
  }

  channel__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channel = _props.channel,
          audio_clips = _props.audio_clips,
          channels = _props.channels,
          statusCode = _props.statusCode;
      var openPodcast = this.state.openPodcast;

      if (statusCode !== 200) {
        return external__react__default.a.createElement(_error["default"], {
          statusCode: statusCode
        });
      }

      return external__react__default.a.createElement(Layout["a" /* default */], {
        title: "".concat(channel.title, " - Platzi Cast")
      }, external__react__default.a.createElement(Banner_Banner, {
        url: channel.urls.banner_image.original,
        title: channel.title
      }), openPodcast && external__react__default.a.createElement("div", {
        className: "jsx-845770313" + " " + "modal"
      }, external__react__default.a.createElement(PodcastPlayer_PodcastPlayer, {
        clip: openPodcast,
        onClose: this.closePodcast
      })), external__react__default.a.createElement(Row["a" /* default */], {
        cls: "row"
      }, external__react__default.a.createElement(Col["a" /* default */], {
        cls: "col-8 col-sm-12 "
      }, external__react__default.a.createElement("h2", {
        className: "jsx-845770313"
      }, "Series"), channels.length > 0 && external__react__default.a.createElement(ChannelGrid["a" /* default */], {
        channels: channels
      })), external__react__default.a.createElement(Col["a" /* default */], {
        cls: "col-4 col-sm-12 "
      }, external__react__default.a.createElement("h2", {
        className: "jsx-845770313"
      }, "Ultimos Podcasts"), external__react__default.a.createElement(PodcastGridClick_PodcastGrid, {
        audio_clips: audio_clips,
        onClickPodcast: this.openPodcast
      }))), external__react__default.a.createElement(style__default.a, {
        styleId: "845770313",
        css: ["h2.jsx-845770313{padding:15px;font-weight:600;margin:0;font-size:23px;color:#313131;}", ".modal.jsx-845770313{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}", "@media screen and (max-width:768px){h2.jsx-845770313{text-align:center;margin-bottom:15px;}}"]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var query, res, idChannel, _ref2, _ref3, reqChannel, reqAudio, reqChidlChannels, _ref4, channel, _ref5, audio_clips, _ref6, channels;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                idChannel = query.id;
                _context.prev = 2;
                _context.next = 5;
                return Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels"))]);

              case 5:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                reqChannel = _ref3[0];
                reqAudio = _ref3[1];
                reqChidlChannels = _ref3[2];

                if (!(reqChannel.status >= 400)) {
                  _context.next = 13;
                  break;
                }

                res.statusCode = reqChannel.status;
                return _context.abrupt("return", {
                  channel: channel,
                  audio_clips: audio_clips,
                  channels: channels,
                  statusCode: reqChannel.status
                });

              case 13:
                _context.next = 15;
                return reqChannel.json();

              case 15:
                _ref4 = _context.sent;
                channel = _ref4.body.channel;
                _context.next = 19;
                return reqAudio.json();

              case 19:
                _ref5 = _context.sent;
                audio_clips = _ref5.body.audio_clips;
                _context.next = 23;
                return reqChidlChannels.json();

              case 23:
                _ref6 = _context.sent;
                channels = _ref6.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audio_clips: audio_clips,
                  channels: channels,
                  statusCode: 200
                });

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](2);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  channel: null,
                  audio_clips: null,
                  channels: null,
                  statusCode: 503
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 28]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(external__react__default.a.Component);



/***/ })
/******/ ]);