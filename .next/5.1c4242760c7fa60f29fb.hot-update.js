webpackHotUpdate(5,{

/***/ "./components/PodcastPlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Davecast\\Desktop\\nextJs\\podcast\\components\\PodcastPlayer.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PodcastPlayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PodcastPlayer, _React$Component);

  function PodcastPlayer() {
    _classCallCheck(this, PodcastPlayer);

    return _possibleConstructorReturn(this, (PodcastPlayer.__proto__ || Object.getPrototypeOf(PodcastPlayer)).apply(this, arguments));
  }

  _createClass(PodcastPlayer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          clip = _props.clip,
          onClose = _props.onClose;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        className: "jsx-1710175276" + " " + 'clip'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-1710175276"
      }, onClose ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-1710175276"
      }, "< Volver") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Link, {
        href: "/channel?id=".concat(clip.channel.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-1710175276" + " " + "close"
      }, "< Volver"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-1710175276"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(audio_clip.urls.image || audio_clip.channel.urls.logo_image.original, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-1710175276"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1710175276" + " " + 'player'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1710175276"
      }, audio_clip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1710175276"
      }, audio_clip.channel.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1710175276"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
        src: audio_clip.urls.high_mp3,
        type: "audio/mpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1710175276"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1710175276",
        css: "nav.jsx-1710175276{background:none;}nav.jsx-1710175276 a.jsx-1710175276{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-1710175276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-1710175276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:2%;}picture.jsx-1710175276 div.jsx-1710175276{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-1710175276{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-1710175276{margin:0;}h6.jsx-1710175276{margin:0;margin-top:1em;}audio.jsx-1710175276{margin-top:2em;width:100%;}@media screen and (max-width:768px){picture.jsx-1710175276{padding:8%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvZGNhc3RQbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUc4QixBQUdLLEFBT1IsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLSCxTQVhkLEFBR2lCLEVBZkgsQUF3QmIsRUFqQjRCLEVBWWhCLENBN0NiLEtBR2UsRUF3QmUsQ0FlOUIsRUFJQSxRQTFDYyxNQThCTSxNQTdCSCxLQXVCUyxPQU8xQixHQTdCdUIsYUFJVCxBQU9PLENBWVMsV0FsQk4saUJBbUJ4QixRQXZCQSxxREFLcUIsR0FNSSxnQkFMWCxZQUNkLHVFQUtXLHVDQUNhLDhFQUNYLFdBQ0EsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzXFxQb2RjYXN0UGxheWVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcRGF2ZWNhc3RcXERlc2t0b3BcXG5leHRKc1xccG9kY2FzdCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvZGNhc3RQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdFxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgeyBjbGlwLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGlwJz5cclxuXHRcdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbkNsb3NlID8gXHJcblx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e29uQ2xvc2V9PiZsdDsgVm9sdmVyPC9hPlxyXG5cdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NsaXAuY2hhbm5lbC5pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjbG9zZVwiPiZsdDsgVm9sdmVyPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9uYXY+XHJcblxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdWRpb19jbGlwLnVybHMuaW1hZ2UgfHwgYXVkaW9fY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BsYXllcic+XHJcblx0XHRcdFx0XHQ8aDM+eyBhdWRpb19jbGlwLnRpdGxlIH08L2gzPlxyXG5cdFx0XHRcdFx0PGg2PnsgYXVkaW9fY2xpcC5jaGFubmVsLnRpdGxlIH08L2g2PlxyXG5cdFx0XHRcdFx0PGF1ZGlvIGNvbnRyb2xzIGF1dG9QbGF5PXt0cnVlfT5cclxuXHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2F1ZGlvX2NsaXAudXJscy5oaWdoX21wM30gdHlwZT0nYXVkaW8vbXBlZycgLz5cclxuXHRcdFx0XHRcdDwvYXVkaW8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHQgICAgICAgIG5hdiB7XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBuYXYgYSB7XHJcblx0XHRcdCAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdCAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cdFx0XHQgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHQgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuY2xpcCB7XHJcblx0XHRcdCAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0ICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcblx0XHRcdCAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIHBpY3R1cmUge1xyXG5cdFx0XHQgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgICAgICAgIGZsZXg6IDEgMTtcclxuXHRcdFx0ICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDogYXV0bztcclxuXHRcdFx0ICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBwaWN0dXJlIGRpdiB7XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAucGxheWVyIHtcclxuXHRcdFx0ICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XHJcblx0XHRcdCAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIGgzIHtcclxuXHRcdFx0ICAgICAgICAgIG1hcmdpbjogMDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgaDYge1xyXG5cdFx0XHQgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cdFx0XHQgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBhdWRpbyB7XHJcblx0XHRcdCAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdFx0XHRcdFx0XHRwaWN0dXJlIHtcclxuXHRcdFx0XHQgICAgICAgICAgcGFkZGluZzogOCU7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgYH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQpXHJcblx0fVxyXG59Il19 */\n/*@ sourceURL=components\\PodcastPlayer.js */"
      }));
    }
  }]);

  return PodcastPlayer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./pages/channel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__("./pages/_error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ChannelGrid__ = __webpack_require__("./components/ChannelGrid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Banner__ = __webpack_require__("./components/Banner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_PodcastGridClick__ = __webpack_require__("./components/PodcastGridClick.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Col__ = __webpack_require__("./components/Col.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Row__ = __webpack_require__("./components/Row.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_PodcastPlayer__ = __webpack_require__("./components/PodcastPlayer.js");

var _jsxFileName = "C:\\Users\\Davecast\\Desktop\\nextJs\\podcast\\pages\\channel.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






 // import PodcastGrid from '../components/PodcastGrid'






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "openPodcast", {
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
    Object.defineProperty(_assertThisInitialized(_this), "closePodcast", {
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

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channel = _props.channel,
          audio_clips = _props.audio_clips,
          channels = _props.channels,
          statusCode = _props.statusCode;
      var openPodcast = this.state.openPodcast;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__error__["default"], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Layout__["a" /* default */], {
        title: "".concat(channel.title, " - Platzi Cast"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Banner__["a" /* default */], {
        url: channel.urls.banner_image.original,
        title: channel.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), openPodcast && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-845770313" + " " + "modal"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_PodcastPlayer__["a" /* default */], {
        clip: openPodcast,
        onClose: this.closePodcast,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], {
        cls: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Col__["a" /* default */], {
        cls: "col-8 col-sm-12 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-845770313"
      }, "Series"), channels.length > 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ChannelGrid__["a" /* default */], {
        channels: channels,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Col__["a" /* default */], {
        cls: "col-4 col-sm-12 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-845770313"
      }, "Ultimos Podcasts"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_PodcastGridClick__["a" /* default */], {
        audio_clips: audio_clips,
        onClickPodcast: this.openPodcast,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "845770313",
        css: "h2.jsx-845770313{padding:15px;font-weight:600;margin:0;font-size:23px;color:#313131;}.modal.jsx-845770313{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}@media screen and (max-width:768px){h2.jsx-845770313{text-align:center;margin-bottom:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGZ0IsQUFHb0IsQUFRRSxBQVNHLGFBaEJGLEVBUVYsR0FTYyxHQVJiLE9BQ0MsQ0FUQyxPQVVBLENBT1QsQ0FoQmUsT0FVRCxRQVRBLE1BVVQsUUFUUyIsImZpbGUiOiJwYWdlc1xcY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXERhdmVjYXN0XFxEZXNrdG9wXFxuZXh0SnNcXHBvZGNhc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgQ2hhbm5lbEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFubmVsR3JpZCdcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcidcclxuLy8gaW1wb3J0IFBvZGNhc3RHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdEdyaWQnXHJcbmltcG9ydCBQb2RjYXN0R3JpZENsaWNrIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdEdyaWRDbGljaydcclxuaW1wb3J0IENvbCBmcm9tICcuLi9jb21wb25lbnRzL0NvbCdcclxuaW1wb3J0IFJvdyBmcm9tICcuLi9jb21wb25lbnRzL1JvdydcclxuaW1wb3J0IFBvZGNhc3RQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRvcGVuUG9kY2FzdDogbnVsbFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeSwgcmVzIH0pIHtcclxuXHRcdGxldCBpZENoYW5uZWwgPSBxdWVyeS5pZFxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IFsgcmVxQ2hhbm5lbCwgcmVxQXVkaW8sIHJlcUNoaWRsQ2hhbm5lbHMgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuXHRcdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcclxuXHRcdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKSxcclxuXHRcdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKVxyXG5cdFx0XHRdKVxyXG5cclxuXHRcdFx0aWYgKHJlcUNoYW5uZWwuc3RhdHVzID49IDQwMCkge1xyXG5cdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gcmVxQ2hhbm5lbC5zdGF0dXNcclxuXHRcdFx0XHRyZXR1cm4geyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMsIHN0YXR1c0NvZGU6IHJlcUNoYW5uZWwuc3RhdHVzIH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IHsgYm9keTogeyBjaGFubmVsIH0gfSA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXHJcblx0XHRcdGxldCB7IGJvZHk6IHsgYXVkaW9fY2xpcHMgfSB9ID0gYXdhaXQgcmVxQXVkaW8uanNvbigpXHJcblx0XHRcdGxldCB7IGJvZHk6IHtjaGFubmVscyB9IH0gPSBhd2FpdCByZXFDaGlkbENoYW5uZWxzLmpzb24oKVxyXG5cclxuXHRcdFx0cmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlOiAyMDAgfVxyXG5cclxuXHRcdH0gY2F0Y2goZXJyKSB7XHJcblxyXG5cdFx0XHRyZXMuc3RhdHVzQ29kZSA9IDUwM1xyXG4gICAgICAgICAgICByZXR1cm4geyBjaGFubmVsOm51bGwgLCBhdWRpb19jbGlwczogbnVsbCwgY2hhbm5lbHM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XHJcblxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRvcGVuUG9kY2FzdCA9IChlLCBwb2RjYXN0KSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRvcGVuUG9kY2FzdDogcG9kY2FzdFxyXG5cdFx0fSlcclxuXHR9XHJcblx0Y2xvc2VQb2RjYXN0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdG9wZW5Qb2RjYXN0OiBudWxsXHJcblx0XHR9KVxyXG5cdH1cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3QgeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMsIHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcclxuXHRcdGNvbnN0IHsgb3BlblBvZGNhc3QgfSA9IHRoaXMuc3RhdGVcclxuXHJcblx0XHRpZiAoc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz5cclxuICAgICAgICB9XHJcblxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8TGF5b3V0IHRpdGxlPXtgJHtjaGFubmVsLnRpdGxlfSAtIFBsYXR6aSBDYXN0YH0+XHJcblxyXG5cdFx0XHRcdDxCYW5uZXIgdXJsPXtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSB0aXRsZT17Y2hhbm5lbC50aXRsZX0gLz5cclxuXHJcblx0XHRcdFx0eyBvcGVuUG9kY2FzdCAmJiBcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuXHRcdFx0XHRcdFx0PFBvZGNhc3RQbGF5ZXIgY2xpcD17b3BlblBvZGNhc3R9IG9uQ2xvc2U9eyB0aGlzLmNsb3NlUG9kY2FzdCB9IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQ8Um93IGNscz1cInJvd1wiID5cclxuXHRcdFx0XHRcdDxDb2wgY2xzPVwiY29sLTggY29sLXNtLTEyIFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+U2VyaWVzPC9oMj5cclxuXHRcdFx0XHRcdFx0eyBjaGFubmVscy5sZW5ndGggPiAwICYmIFxyXG5cdFx0XHRcdFx0XHRcdDxDaGFubmVsR3JpZCBjaGFubmVscz17Y2hhbm5lbHN9IC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCBjbHM9XCJjb2wtNCBjb2wtc20tMTIgXCI+XHJcblx0XHRcdFx0XHRcdDxoMj5VbHRpbW9zIFBvZGNhc3RzPC9oMj5cclxuXHRcdFx0XHRcdFx0PFBvZGNhc3RHcmlkQ2xpY2sgYXVkaW9fY2xpcHM9e2F1ZGlvX2NsaXBzfSBvbkNsaWNrUG9kY2FzdD17dGhpcy5vcGVuUG9kY2FzdH0gLz5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyM3B4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzMxMzEzMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIC5tb2RhbCB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk5OTtcclxuXHRcdFx0ICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHRcdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KVxyXG5cdH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\channel.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, res, idChannel, _ref2, _ref3, reqChannel, reqAudio, reqChidlChannels, _ref4, channel, _ref5, audio_clips, _ref6, channels;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/channel")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.1c4242760c7fa60f29fb.hot-update.js.map