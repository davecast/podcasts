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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Col__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Row__ = __webpack_require__(16);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channels = _props.channels,
          statusCode = _props.statusCode;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__error__["default"], {
          statusCode: statusCode
        });
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */], {
        title: "Home - PlatziCast"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Row__["a" /* default */], {
        cls: "row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Col__["a" /* default */], {
        cls: "col-12"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__["a" /* default */], {
        channels: channels
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var res, req, _ref2, channels;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res;
                _context.prev = 1;
                _context.next = 4;
                return fetch('https://api.audioboom.com/channels/recommended');

              case 4:
                req = _context.sent;
                _context.next = 7;
                return req.json();

              case 7:
                _ref2 = _context.sent;
                channels = _ref2.body;
                return _context.abrupt("return", {
                  channels: channels,
                  statusCode: 200
                });

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  channels: null,
                  statusCode: 503
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })
/******/ ]);