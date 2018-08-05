webpackHotUpdate(5,{

/***/ "./components/PodcastPlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
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
        className: "jsx-237372169" + " " + 'clip'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-237372169"
      }, onClose ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-237372169"
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
        className: "jsx-237372169" + " " + "close"
      }, "< Volver"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-237372169"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(audio_clip.urls.image || audio_clip.channel.urls.logo_image.original, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-237372169"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-237372169" + " " + 'player'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-237372169"
      }, audio_clip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-237372169"
      }, audio_clip.channel.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-237372169"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
        src: audio_clip.urls.high_mp3,
        type: "audio/mpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-237372169"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "237372169",
        css: "nav.jsx-237372169{background:none;}nav.jsx-237372169 a.jsx-237372169{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-237372169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-237372169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:2%;}picture.jsx-237372169 div.jsx-237372169{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-237372169{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-237372169{margin:0;}h6.jsx-237372169{margin:0;margin-top:1em;}audio.jsx-237372169{margin-top:2em;width:100%;}.modal.jsx-237372169{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}@media screen and (max-width:768px){picture.jsx-237372169{padding:8%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvZGNhc3RQbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUc4QixBQUdLLEFBT1IsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLQSxBQVNILFNBcEJkLEFBR2lCLEVBZkgsQUFpQ2IsRUExQjRCLEVBWWhCLEFBS0wsQ0FsRFIsS0FHZSxBQWdETixFQXhCcUIsQ0FlOUIsRUFJQSxFQU1VLE1BaERJLEVBaURILElBbkJTLEtBb0JKLENBakRDLEtBdUJTLE9BTzFCLENBb0JBLEVBakR1QixhQUlULEFBT08sQ0FZUyxXQWxCTixpQkFtQnhCLFFBdkJBLHFEQUtxQixHQU1JLGdCQUxYLFlBQ2QsdUVBS1csdUNBQ2EsOEVBQ1gsV0FDQSxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHNcXFBvZGNhc3RQbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxEYXZlY2FzdFxcRGVza3RvcFxcbmV4dEpzXFxwb2RjYXN0Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9kY2FzdFBsYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0XHJcblx0cmVuZGVyKCl7XHJcblx0XHRjb25zdCB7IGNsaXAsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHNcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NsaXAnPlxyXG5cdFx0XHRcdDxuYXY+XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9uQ2xvc2UgPyBcclxuXHRcdFx0XHRcdFx0PGEgb25DbGljaz17b25DbG9zZX0+Jmx0OyBWb2x2ZXI8L2E+XHJcblx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7Y2xpcC5jaGFubmVsLmlkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNsb3NlXCI+Jmx0OyBWb2x2ZXI8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ8L25hdj5cclxuXHJcblx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2F1ZGlvX2NsaXAudXJscy5pbWFnZSB8fCBhdWRpb19jbGlwLmNoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cclxuXHRcdFx0XHRcdDxoMz57IGF1ZGlvX2NsaXAudGl0bGUgfTwvaDM+XHJcblx0XHRcdFx0XHQ8aDY+eyBhdWRpb19jbGlwLmNoYW5uZWwudGl0bGUgfTwvaDY+XHJcblx0XHRcdFx0XHQ8YXVkaW8gY29udHJvbHMgYXV0b1BsYXk9e3RydWV9PlxyXG5cdFx0XHRcdFx0XHQ8c291cmNlIHNyYz17YXVkaW9fY2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPSdhdWRpby9tcGVnJyAvPlxyXG5cdFx0XHRcdFx0PC9hdWRpbz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdCAgICAgICAgbmF2IHtcclxuXHRcdFx0ICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIG5hdiBhIHtcclxuXHRcdFx0ICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0ICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblx0XHRcdCAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdCAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5jbGlwIHtcclxuXHRcdFx0ICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHQgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuXHRcdFx0ICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgcGljdHVyZSB7XHJcblx0XHRcdCAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgICAgICAgICAgZmxleDogMSAxO1xyXG5cdFx0XHQgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0ICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG5cdFx0XHQgICAgICAgICAgcGFkZGluZzogMiU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIHBpY3R1cmUgZGl2IHtcclxuXHRcdFx0ICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuXHRcdFx0ICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRcdFx0ICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5wbGF5ZXIge1xyXG5cdFx0XHQgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuXHRcdFx0ICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcclxuXHRcdFx0ICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgaDMge1xyXG5cdFx0XHQgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBoNiB7XHJcblx0XHRcdCAgICAgICAgICBtYXJnaW46IDA7XHJcblx0XHRcdCAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIGF1ZGlvIHtcclxuXHRcdFx0ICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuXHRcdFx0ICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgLm1vZGFsIHtcclxuXHRcdFx0ICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0ICAgICAgICAgIHRvcDogMDtcclxuXHRcdFx0ICAgICAgICAgIGxlZnQ6IDA7XHJcblx0XHRcdCAgICAgICAgICByaWdodDogMDtcclxuXHRcdFx0ICAgICAgICAgIGJvdHRvbTogMDtcclxuXHRcdFx0ICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0XHRcdFx0XHRcdHBpY3R1cmUge1xyXG5cdFx0XHRcdCAgICAgICAgICBwYWRkaW5nOiA4JTtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdCAgICBgfTwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdClcclxuXHR9XHJcbn0iXX0= */\n/*@ sourceURL=components\\PodcastPlayer.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_PodcastPlayer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_PodcastPlayer__);

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
            lineNumber: 63
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Layout__["a" /* default */], {
        title: "".concat(channel.title, " - Platzi Cast"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Banner__["a" /* default */], {
        url: channel.urls.banner_image.original,
        title: channel.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), openPodcast && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-3567662254"
      }, "Hay un podcast abierto"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Row__["a" /* default */], {
        cls: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Col__["a" /* default */], {
        cls: "col-8 col-sm-12 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-3567662254"
      }, "Series"), channels.length > 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ChannelGrid__["a" /* default */], {
        channels: channels,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Col__["a" /* default */], {
        cls: "col-4 col-sm-12 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-3567662254"
      }, "Ultimos Podcasts"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_PodcastGridClick__["a" /* default */], {
        audio_clips: audio_clips,
        onClickPodcast: this.openPodcast,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3567662254",
        css: "h2.jsx-3567662254{padding:15px;font-weight:600;margin:0;font-size:23px;color:#313131;}@media screen and (max-width:768px){h2.jsx-3567662254{text-align:center;margin-bottom:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGZ0IsQUFHb0IsQUFRSyxhQVBGLEtBUUksV0FQWCxRQVFULENBUGUsZUFDRCxjQUNBIiwiZmlsZSI6InBhZ2VzXFxjaGFubmVsLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcRGF2ZWNhc3RcXERlc2t0b3BcXG5leHRKc1xccG9kY2FzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBDaGFubmVsR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxHcmlkJ1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJ1xyXG4vLyBpbXBvcnQgUG9kY2FzdEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0R3JpZCdcclxuaW1wb3J0IFBvZGNhc3RHcmlkQ2xpY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0R3JpZENsaWNrJ1xyXG5pbXBvcnQgQ29sIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sJ1xyXG5pbXBvcnQgUm93IGZyb20gJy4uL2NvbXBvbmVudHMvUm93J1xyXG5pbXBvcnQgUG9kY2FzdFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RQbGF5ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdG9wZW5Qb2RjYXN0OiBudWxsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5LCByZXMgfSkge1xyXG5cdFx0bGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgWyByZXFDaGFubmVsLCByZXFBdWRpbywgcmVxQ2hpZGxDaGFubmVscyBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG5cdFx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxyXG5cdFx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApLFxyXG5cdFx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApXHJcblx0XHRcdF0pXHJcblxyXG5cdFx0XHRpZiAocmVxQ2hhbm5lbC5zdGF0dXMgPj0gNDAwKSB7XHJcblx0XHRcdFx0cmVzLnN0YXR1c0NvZGUgPSByZXFDaGFubmVsLnN0YXR1c1xyXG5cdFx0XHRcdHJldHVybiB7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVscywgc3RhdHVzQ29kZTogcmVxQ2hhbm5lbC5zdGF0dXMgfVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgeyBib2R5OiB7IGNoYW5uZWwgfSB9ID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcclxuXHRcdFx0bGV0IHsgYm9keTogeyBhdWRpb19jbGlwcyB9IH0gPSBhd2FpdCByZXFBdWRpby5qc29uKClcclxuXHRcdFx0bGV0IHsgYm9keToge2NoYW5uZWxzIH0gfSA9IGF3YWl0IHJlcUNoaWRsQ2hhbm5lbHMuanNvbigpXHJcblxyXG5cdFx0XHRyZXR1cm4geyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMsIHN0YXR1c0NvZGU6IDIwMCB9XHJcblxyXG5cdFx0fSBjYXRjaChlcnIpIHtcclxuXHJcblx0XHRcdHJlcy5zdGF0dXNDb2RlID0gNTAzXHJcbiAgICAgICAgICAgIHJldHVybiB7IGNoYW5uZWw6bnVsbCAsIGF1ZGlvX2NsaXBzOiBudWxsLCBjaGFubmVsczogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH1cclxuXHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdG9wZW5Qb2RjYXN0ID0gKGUsIHBvZGNhc3QpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdG9wZW5Qb2RjYXN0OiBwb2RjYXN0XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXHJcblx0XHRjb25zdCB7IG9wZW5Qb2RjYXN0IH0gPSB0aGlzLnN0YXRlXHJcblxyXG5cdFx0aWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PExheW91dCB0aXRsZT17YCR7Y2hhbm5lbC50aXRsZX0gLSBQbGF0emkgQ2FzdGB9PlxyXG5cclxuXHRcdFx0XHQ8QmFubmVyIHVybD17Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbH0gdGl0bGU9e2NoYW5uZWwudGl0bGV9IC8+XHJcblxyXG5cdFx0XHRcdHsgb3BlblBvZGNhc3QgJiYgPGRpdj5IYXkgdW4gcG9kY2FzdCBhYmllcnRvPC9kaXY+IH1cclxuXHJcblx0XHRcdFx0PFJvdyBjbHM9XCJyb3dcIiA+XHJcblx0XHRcdFx0XHQ8Q29sIGNscz1cImNvbC04IGNvbC1zbS0xMiBcIj5cclxuXHRcdFx0XHRcdFx0PGgyPlNlcmllczwvaDI+XHJcblx0XHRcdFx0XHRcdHsgY2hhbm5lbHMubGVuZ3RoID4gMCAmJiBcclxuXHRcdFx0XHRcdFx0XHQ8Q2hhbm5lbEdyaWQgY2hhbm5lbHM9e2NoYW5uZWxzfSAvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgY2xzPVwiY29sLTQgY29sLXNtLTEyIFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XHJcblx0XHRcdFx0XHRcdDxQb2RjYXN0R3JpZENsaWNrIGF1ZGlvX2NsaXBzPXthdWRpb19jbGlwc30gb25DbGlja1BvZGNhc3Q9e3RoaXMub3BlblBvZGNhc3R9IC8+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjNweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0XHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdClcclxuXHR9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\channel.js */"
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
//# sourceMappingURL=5.861602a6c01d9c40182d.hot-update.js.map