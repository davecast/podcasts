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
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
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
      }, clip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1710175276"
      }, clip.channel.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1710175276"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1710175276"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1710175276",
        css: "nav.jsx-1710175276{background:none;}nav.jsx-1710175276 a.jsx-1710175276{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-1710175276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-1710175276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:2%;}picture.jsx-1710175276 div.jsx-1710175276{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-1710175276{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-1710175276{margin:0;}h6.jsx-1710175276{margin:0;margin-top:1em;}audio.jsx-1710175276{margin-top:2em;width:100%;}@media screen and (max-width:768px){picture.jsx-1710175276{padding:8%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvZGNhc3RQbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUc4QixBQUdLLEFBT1IsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLSCxTQVhkLEFBR2lCLEVBZkgsQUF3QmIsRUFqQjRCLEVBWWhCLENBN0NiLEtBR2UsRUF3QmUsQ0FlOUIsRUFJQSxRQTFDYyxNQThCTSxNQTdCSCxLQXVCUyxPQU8xQixHQTdCdUIsYUFJVCxBQU9PLENBWVMsV0FsQk4saUJBbUJ4QixRQXZCQSxxREFLcUIsR0FNSSxnQkFMWCxZQUNkLHVFQUtXLHVDQUNhLDhFQUNYLFdBQ0EsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzXFxQb2RjYXN0UGxheWVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcRGF2ZWNhc3RcXERlc2t0b3BcXG5leHRKc1xccG9kY2FzdCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvZGNhc3RQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdFxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgeyBjbGlwLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbGlwJz5cclxuXHRcdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbkNsb3NlID8gXHJcblx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e29uQ2xvc2V9PiZsdDsgVm9sdmVyPC9hPlxyXG5cdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NsaXAuY2hhbm5lbC5pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjbG9zZVwiPiZsdDsgVm9sdmVyPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9uYXY+XHJcblxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjbGlwLnVybHMuaW1hZ2UgfHwgY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BsYXllcic+XHJcblx0XHRcdFx0XHQ8aDM+eyBjbGlwLnRpdGxlIH08L2gzPlxyXG5cdFx0XHRcdFx0PGg2PnsgY2xpcC5jaGFubmVsLnRpdGxlIH08L2g2PlxyXG5cdFx0XHRcdFx0PGF1ZGlvIGNvbnRyb2xzIGF1dG9QbGF5PXt0cnVlfT5cclxuXHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2NsaXAudXJscy5oaWdoX21wM30gdHlwZT0nYXVkaW8vbXBlZycgLz5cclxuXHRcdFx0XHRcdDwvYXVkaW8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHQgICAgICAgIG5hdiB7XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBuYXYgYSB7XHJcblx0XHRcdCAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdCAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cdFx0XHQgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHQgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAuY2xpcCB7XHJcblx0XHRcdCAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0ICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcblx0XHRcdCAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIHBpY3R1cmUge1xyXG5cdFx0XHQgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgICAgICAgIGZsZXg6IDEgMTtcclxuXHRcdFx0ICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDogYXV0bztcclxuXHRcdFx0ICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBwaWN0dXJlIGRpdiB7XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAucGxheWVyIHtcclxuXHRcdFx0ICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcblx0XHRcdCAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XHJcblx0XHRcdCAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIGgzIHtcclxuXHRcdFx0ICAgICAgICAgIG1hcmdpbjogMDtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgaDYge1xyXG5cdFx0XHQgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cdFx0XHQgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICBhdWRpbyB7XHJcblx0XHRcdCAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcblx0XHRcdCAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdFx0XHRcdFx0XHRwaWN0dXJlIHtcclxuXHRcdFx0XHQgICAgICAgICAgcGFkZGluZzogOCU7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHQgICAgYH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQpXHJcblx0fVxyXG59Il19 */\n/*@ sourceURL=components\\PodcastPlayer.js */"
      }));
    }
  }]);

  return PodcastPlayer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.9ba672a0f6fedbe8eab0.hot-update.js.map