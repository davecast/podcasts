webpackHotUpdate(5,{

/***/ "./components/PodcastGridClick.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_slug__ = __webpack_require__("./helpers/slug.js");
var _jsxFileName = "C:\\Users\\Davecast\\Desktop\\nextJs\\podcast\\components\\PodcastGridClick.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PodcastGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PodcastGrid, _React$Component);

  function PodcastGrid() {
    _classCallCheck(this, PodcastGrid);

    return _possibleConstructorReturn(this, (PodcastGrid.__proto__ || Object.getPrototypeOf(PodcastGrid)).apply(this, arguments));
  }

  _createClass(PodcastGrid, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          audio_clips = _props.audio_clips,
          onClickPodcast = _props.onClickPodcast;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-3977216516" + " " + "podcast"
      }, audio_clips.map(function (clip) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "/".concat(Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(clip.channel.title), ".").concat(clip.channel.id, "/").concat(Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(clip.title), ".").concat(clip.id),
          key: clip.id,
          onClick: function onClick(e) {
            return onClickPodcast(e, clip);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          className: "jsx-3977216516" + " " + "podcast_link"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("figure", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          className: "jsx-3977216516"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "".concat(clip.urls.image || clip.channel.urls.logo_image.original),
          alt: clip.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          className: "jsx-3977216516"
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          className: "jsx-3977216516"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          className: "jsx-3977216516"
        }, clip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          className: "jsx-3977216516" + " " + "meta"
        }, Math.ceil(clip.duration / 60), " minutes")));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3977216516",
        css: ".podcast.jsx-3977216516{padding:15px;}figure.jsx-3977216516{margin:0;font-size:0;height:30px;width:30px;overflow:hidden;float:left;padding-right:10px;}figure.jsx-3977216516 img.jsx-3977216516{max-width:100%;}.podcast_link.jsx-3977216516{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;margin-bottom:10px;}.podcast_link.jsx-3977216516:hover{color:#000;}.podcast.jsx-3977216516 h3.jsx-3977216516{margin:0;font-size:15px;}.podcast.jsx-3977216516 .meta.jsx-3977216516{color:#666;margin-bottom:0.5em;font-size:12px;}@media screen and (max-width:768px){.podcast.jsx-3977216516{padding:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvZGNhc3RHcmlkQ2xpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJnQixBQUcyQixBQUdYLEFBU1csQUFHQyxBQVFILEFBR0YsQUFJRSxBQU1FLFNBaENSLEFBdUJVLEVBSGpCLEFBT3NCLENBTXJCLENBcENELENBZXVCLENBSHZCLE1BUk8sR0F1QlAsT0FJaUIsRUExQlgsV0FDSyxFQTBCWCxjQXpCTSxJQVNPLE9BUkMsSUFTNEIsZUFSMUMseUJBU2lCLGVBQ0ksbUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHNcXFBvZGNhc3RHcmlkQ2xpY2suanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxEYXZlY2FzdFxcRGVza3RvcFxcbmV4dEpzXFxwb2RjYXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2RjYXN0R3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IHsgYXVkaW9fY2xpcHMsIG9uQ2xpY2tQb2RjYXN0IH0gPSB0aGlzLnByb3BzXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb2RjYXN0XCI+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YXVkaW9fY2xpcHMubWFwKChjbGlwKT0+e1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGEgXHJcblx0XHRcdFx0XHRcdFx0aHJlZj17YC8ke3NsdWcoY2xpcC5jaGFubmVsLnRpdGxlKX0uJHtjbGlwLmNoYW5uZWwuaWR9LyR7c2x1ZyhjbGlwLnRpdGxlKX0uJHtjbGlwLmlkfWB9IFxyXG5cdFx0XHRcdFx0XHRcdGtleT17Y2xpcC5pZH0gXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicG9kY2FzdF9saW5rXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKGUpID0+IG9uQ2xpY2tQb2RjYXN0KGUsIGNsaXApIH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxmaWd1cmU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17YCR7Y2xpcC51cmxzLmltYWdlIHx8IGNsaXAuY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9YH0gYWx0PXtjbGlwLnRpdGxlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDM+eyBjbGlwLnRpdGxlIH08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgTWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCkgfSBtaW51dGVzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHQgICAgICAgIC5wb2RjYXN0IHtcclxuXHRcdFx0ICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIGZpZ3VyZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgZmlndXJlIGltZyB7XHJcblx0XHRcdCAgICAgICAgXHRtYXgtd2lkdGg6MTAwJTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLnBvZGNhc3RfbGluayB7XHJcblx0XHRcdCAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0ICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0ICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG5cdFx0XHQgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuXHRcdFx0ICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0ICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5wb2RjYXN0X2xpbms6aG92ZXIge1xyXG5cdFx0XHQgICAgICAgICAgY29sb3I6ICMwMDA7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIC5wb2RjYXN0IGgzIHtcclxuXHRcdFx0ICAgICAgICAgIG1hcmdpbjogMDtcclxuXHRcdFx0ICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgLnBvZGNhc3QgLm1ldGEge1xyXG5cdFx0XHQgICAgICAgICAgY29sb3I6ICM2NjY7XHJcblx0XHRcdCAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuXHRcdFx0ICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHRcdFx0XHRcdFx0LnBvZGNhc3Qge1xyXG5cdFx0XHRcdCAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdCAgICAgIGB9PC9zdHlsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59Il19 */\n/*@ sourceURL=components\\PodcastGridClick.js */"
      }));
    }
  }]);

  return PodcastGrid;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.a740e3db239b395a2f73.hot-update.js.map