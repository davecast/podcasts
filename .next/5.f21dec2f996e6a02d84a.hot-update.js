webpackHotUpdate(5,{

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("./node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = "C:\\Users\\Davecast\\Desktop\\nextJs\\podcast\\components\\Layout.js";



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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-1719653633"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,maximum-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-1719653633"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-1719653633"
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/ico.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-1719653633"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1719653633"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1719653633"
      }, "PlatziCast"))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3989426853",
        css: "header.jsx-1719653633{color:#fff;right:0;background:#8756ca;padding:15px;text-align:center;}header.jsx-1719653633 a.jsx-1719653633{color:#fff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdCLEFBR2tCLEFBT2UsV0FObEIsQUFPNEIsUUFOakIsbUJBQ04sYUFDSyxVQUtKLFFBSkEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcRGF2ZWNhc3RcXERlc2t0b3BcXG5leHRKc1xccG9kY2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XHJcbiAgTlByb2dyZXNzLnN0YXJ0KClcclxufVxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgdGl0bGUgfSA9IHRoaXMucHJvcHNcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTFcIiAvPlxyXG5cdFx0XHRcdFx0PHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL3N0YXRpYy9pY28ucG5nXCIgLz5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFBsYXR6aUNhc3RcclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRoZWFkZXIge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIFx0Y29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHJcblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXHJcblx0XHRcdCAgICAgICAgI25wcm9ncmVzcyB7XHJcblx0XHRcdCAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgICNucHJvZ3Jlc3MgLmJhciB7XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xyXG5cclxuXHRcdFx0ICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0ICAgICAgICAgIHotaW5kZXg6IDEwMzE7XHJcblx0XHRcdCAgICAgICAgICB0b3A6IDA7XHJcblx0XHRcdCAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuXHRcdFx0ICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xyXG5cdFx0XHQgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XHJcblx0XHRcdCAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0ICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0ICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcblx0XHRcdCAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XHJcblx0XHRcdCAgICAgICAgICBvcGFjaXR5OiAxLjA7XHJcblxyXG5cdFx0XHQgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuXHRcdFx0ICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cclxuXHRcdFx0ICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyIHtcclxuXHRcdFx0ICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHQgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHQgICAgICAgICAgei1pbmRleDogMTAzMTtcclxuXHRcdFx0ICAgICAgICAgIHRvcDogMTVweDtcclxuXHRcdFx0ICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcclxuXHRcdFx0ICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG5cdFx0XHQgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHQgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcblx0XHRcdCAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcclxuXHRcdFx0ICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XHJcblx0XHRcdCAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI5ZDtcclxuXHRcdFx0ICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcblx0XHRcdCAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XHJcblx0XHRcdCAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHQgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXHJcblx0XHRcdCAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XHJcblx0XHRcdCAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG5cdFx0XHQgICAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuXHRcdFx0ICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcblx0XHRcdCAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuXHRcdFx0ICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcblx0XHRcdCAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn0iXX0= */\n/*@ sourceURL=components\\Layout.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3711877037",
        css: "body{margin:0;font-family:sans-serif,system-ui;background:#efefef;}#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q3VCLEFBR2tDLEFBTUEsQUFJSixBQWFGLEFBZUEsQUFRSCxBQWNLLEFBTUUsQUFJbUIsQUFDRSxBQUdWLEFBQ0UsU0ExRWMsRUE4Q2pDLEdBdkJNLEFBZUgsRUEzQkEsQUFpREcsRUFNcEIsRUE1REEsR0F5Q3dCLE1BUlQsRUEzQkEsQUF5RHlCLENBN0M1QixDQThDOEIsQ0FUMUMsUUE1RGdDLEFBd0JsQixBQWVILEVBM0JILENBb0N1QixLQW5DdEIsQ0EyQkksR0FmQyxHQVZELElBZEosQ0F3Q1QsSUFmeUMsRUFWNUIsTUFpQ1csS0FoQ3hCLEVBdURnQyxNQUNFLFNBdkJULFFBdkJYLFlBRXdDLEdBc0JsQyxrQkFFd0MsOEJBdkJOLDRCQXdCTSxtQkF2Qk4seUZBd0J0RCxvREF2QkEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcRGF2ZWNhc3RcXERlc2t0b3BcXG5leHRKc1xccG9kY2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XHJcbiAgTlByb2dyZXNzLnN0YXJ0KClcclxufVxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgdGl0bGUgfSA9IHRoaXMucHJvcHNcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTFcIiAvPlxyXG5cdFx0XHRcdFx0PHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL3N0YXRpYy9pY28ucG5nXCIgLz5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFBsYXR6aUNhc3RcclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRoZWFkZXIge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIFx0Y29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHJcblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXHJcblx0XHRcdCAgICAgICAgI25wcm9ncmVzcyB7XHJcblx0XHRcdCAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgICNucHJvZ3Jlc3MgLmJhciB7XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xyXG5cclxuXHRcdFx0ICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0ICAgICAgICAgIHotaW5kZXg6IDEwMzE7XHJcblx0XHRcdCAgICAgICAgICB0b3A6IDA7XHJcblx0XHRcdCAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuXHRcdFx0ICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xyXG5cdFx0XHQgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XHJcblx0XHRcdCAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0ICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0ICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcblx0XHRcdCAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XHJcblx0XHRcdCAgICAgICAgICBvcGFjaXR5OiAxLjA7XHJcblxyXG5cdFx0XHQgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuXHRcdFx0ICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cclxuXHRcdFx0ICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyIHtcclxuXHRcdFx0ICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHQgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHQgICAgICAgICAgei1pbmRleDogMTAzMTtcclxuXHRcdFx0ICAgICAgICAgIHRvcDogMTVweDtcclxuXHRcdFx0ICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcclxuXHRcdFx0ICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG5cdFx0XHQgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHQgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcblx0XHRcdCAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcclxuXHRcdFx0ICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XHJcblx0XHRcdCAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI5ZDtcclxuXHRcdFx0ICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcblx0XHRcdCAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XHJcblx0XHRcdCAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHQgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXHJcblx0XHRcdCAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XHJcblx0XHRcdCAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cclxuXHRcdFx0ICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG5cdFx0XHQgICAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuXHRcdFx0ICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcblx0XHRcdCAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuXHRcdFx0ICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcblx0XHRcdCAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn0iXX0= */\n/*@ sourceURL=components\\Layout.js */"
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ })

})
//# sourceMappingURL=5.f21dec2f996e6a02d84a.hot-update.js.map