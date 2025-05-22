module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/awards.tsx":
/*!*******************************!*\
  !*** ./components/awards.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/awards.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Awards = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Award"), __jsx("article", {
    className: "jsx-1000460867" + " " + "Award",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((award, index) => __jsx("div", {
    key: `award_${index}`,
    className: "jsx-1000460867" + " " + "Award-award",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1000460867" + " " + "Award-award-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: award.logo,
    alt: award.issuer,
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, award.location)), __jsx("a", {
    href: award.link,
    target: "_blank",
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("h5", {
    className: "jsx-1000460867" + " " + "Award-award-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 66
    }
  }, award.title)), __jsx("p", {
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, award.description), __jsx("span", {
    className: "jsx-1000460867" + " " + "Award-award-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, award.date)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1000460867",
    __self: undefined
  }, ".Award.jsx-1000460867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,.2);padding:0 1rem;padding-bottom:3rem;}.Award-award.jsx-1000460867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:2rem 0;}.Award-award-title.jsx-1000460867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Award-award-date.jsx-1000460867{font-size:1rem;margin:0 1rem;}.Award-award-place.jsx-1000460867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin:.5rem 0;}.Award-award-place.jsx-1000460867 img.jsx-1000460867{max-height:80px;max-width:140px;justify-self:center;}.Award-award-place.jsx-1000460867 span.jsx-1000460867{margin-left:1rem;}.Award-award-date.jsx-1000460867{opacity:.8;font-size:.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvYXdhcmRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmlCLEFBR3NDLEFBT0EsQUFLQSxBQU1FLEFBS0YsQUFNRyxBQU1DLEFBR04sV0FDSyxJQW5CckIsQ0FVcUIsQ0FNcEIsVUFJd0IsRUFwQnhCLEdBWUQsb0JBQUMsc0JBL0IwQixBQU9BLEFBS0QsQUFXQSx5QkFpQnpCLHFEQXZDa0QsQUFPaEMsY0FDbEIsU0FJa0MsQUFXZixlQUNuQixPQXZCbUIsZUFDSyxvQkFDeEIsMERBVUEiLCJmaWxlIjoiL1VzZXJzL2lremFybi9wb3J0Zm9saW8vUHJvamV0LXZpdHJpbmUvbXktY3YvY29tcG9uZW50cy9hd2FyZHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUF3YXJkIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuXG5pbnRlcmZhY2UgQXdhcmRzUHJvcHMge1xuICAgIGRhdGE6IElBd2FyZFtdO1xufVxuXG5jb25zdCBBd2FyZHMgPSAoeyBkYXRhIH06IEF3YXJkc1Byb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz5Bd2FyZDwvaDM+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJBd2FyZFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGF3YXJkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Bhd2FyZF8ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBd2FyZC1hd2FyZC1wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXdhcmQubG9nb30gYWx0PXthd2FyZC5pc3N1ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthd2FyZC5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXdhcmQubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+PGg1IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLXRpdGxlXCI+e2F3YXJkLnRpdGxlfTwvaDU+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthd2FyZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmQtZGF0ZVwiPnthd2FyZC5kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtZGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkLXBsYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtcGxhY2UgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5Bd2FyZC1hd2FyZC1wbGFjZSBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5Bd2FyZC1hd2FyZC1kYXRle1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXdhcmRzOyJdfQ== */\n/*@ sourceURL=/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/awards.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Awards);

/***/ }),

/***/ "./components/contact.tsx":
/*!********************************!*\
  !*** ./components/contact.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/contact.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Contact = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-396718400",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Contact"), __jsx("article", {
    className: "jsx-396718400" + " " + "Contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((contact, index) => __jsx("div", {
    key: `skill_${index}`,
    className: "jsx-396718400" + " " + "Contact-type",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: contact.icon,
    className: "jsx-396718400",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }), __jsx("a", {
    href: contact.link,
    target: "_blank",
    className: "jsx-396718400",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, contact.name)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "396718400",
    __self: undefined
  }, ".Contact.jsx-396718400{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;padding-bottom:3rem;}.Contact-type.jsx-396718400{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Contact-type.jsx-396718400 img.jsx-396718400{width:20px;margin-right:.5rem;}.Contact-type.jsx-396718400 a.jsx-396718400{-webkit-text-decoration:none;text-decoration:none;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvY29udGFjdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUdzQyxBQU1BLEFBTUYsQUFLVSxXQUpGLG1CQUN2QixvQkFJZ0IsWUFDaEIsWUFsQjBCLEFBTUgsOEVBTEosZUFDSyxBQUtMLGVBQ25CLEtBTEEiLCJmaWxlIjoiL1VzZXJzL2lremFybi9wb3J0Zm9saW8vUHJvamV0LXZpdHJpbmUvbXktY3YvY29tcG9uZW50cy9jb250YWN0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb250YWN0IH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuXG5pbnRlcmZhY2UgQ29udGFjdHNQcm9wcyB7XG4gICAgZGF0YTogSUNvbnRhY3RbXTtcbn1cblxuY29uc3QgQ29udGFjdCA9ICh7IGRhdGEgfTogQ29udGFjdHNQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDM+Q29udGFjdDwvaDM+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJDb250YWN0XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoY29udGFjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGFjdC10eXBlXCIga2V5PXtgc2tpbGxfJHtpbmRleH1gfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnRhY3QuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb250YWN0Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPntjb250YWN0Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuQ29udGFjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuQ29udGFjdC10eXBle1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuQ29udGFjdC10eXBlIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5Db250YWN0LXR5cGUgYXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdfQ== */\n/*@ sourceURL=/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/contact.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/education.tsx":
/*!**********************************!*\
  !*** ./components/education.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/education.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Education = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-3847072649",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Education"), __jsx("article", {
    className: "jsx-3847072649" + " " + "Education",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((entity, index) => __jsx("div", {
    key: `entity_${index}`,
    className: "jsx-3847072649" + " " + "Education-entity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3847072649" + " " + "Education-entity-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: entity.logo,
    alt: entity.name,
    className: "jsx-3847072649",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), __jsx("h6", {
    className: "jsx-3847072649" + " " + "Education-entity-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, entity.name)), __jsx("div", {
    className: "jsx-3847072649" + " " + "Education-entity-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "jsx-3847072649" + " " + "Education-entity-subject",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, entity.title), __jsx("span", {
    className: "jsx-3847072649" + " " + "Education-entity-duration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, entity.duration))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3847072649",
    __self: undefined
  }, ".Education.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:3rem;padding:0 1rem;}.Education-entity.jsx-3847072649{margin:1rem 0;}.Education-entity-place.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Education-entity.jsx-3847072649 img.jsx-3847072649{max-height:45px;max-width:80px;}.Education-entity-name.jsx-3847072649{margin-left:.5rem;}.Education-entity-details.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:.5rem;}.Education-entity-duration.jsx-3847072649{opacity:.8;font-size:.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvZWR1Y2F0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmlCLEFBR3NDLEFBT0MsQUFJRCxBQUtHLEFBS0UsQUFJTCxBQU1GLFdBQ0ssR0F4QnBCLEVBU21CLEVBS25CLFNBV3dCLElBZnhCLDJDQWpCMEIsQUFXSCxBQWNHLHlCQVExQixxREFoQ3dCLEFBeUJILGVBZHJCLEVBZUEsR0F6Qm1CLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvZWR1Y2F0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTY2hvb2xFbnRpdHkgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5cbmludGVyZmFjZSBFZHVjYXRpb25Qcm9wcyB7XG4gICAgZGF0YTogSVNjaG9vbEVudGl0eVtdO1xufVxuXG5jb25zdCBFZHVjYXRpb24gPSAoeyBkYXRhIH06IEVkdWNhdGlvblByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz5FZHVjYXRpb248L2gzPlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoZW50aXR5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BlbnRpdHlfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LXBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlbnRpdHkubG9nb30gYWx0PXtlbnRpdHkubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktbmFtZVwiPntlbnRpdHkubmFtZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktc3ViamVjdFwiPntlbnRpdHkudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LWR1cmF0aW9uXCI+e2VudGl0eS5kdXJhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1wbGFjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5IGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1kdXJhdGlvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjsiXX0= */\n/*@ sourceURL=/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/education.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./components/experience.tsx":
/*!***********************************!*\
  !*** ./components/experience.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/experience.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Experience = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Experience"), __jsx("article", {
    className: "jsx-3347548585" + " " + "Experience",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((work, index) => __jsx("div", {
    key: `work_${index}`,
    className: "jsx-3347548585" + " " + "Experience-work",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "jsx-3347548585" + " " + "Experience-work-position",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }, work.title), __jsx("span", {
    className: "jsx-3347548585" + " " + "Experience-work-duration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, work.duration)), __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: work.logo,
    alt: work.company,
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, __jsx("h6", {
    className: "jsx-3347548585" + " " + "Experience-work-company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, work.company), __jsx("span", {
    className: "jsx-3347548585" + " " + "Experience-work-location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, work.location))), !!work.description.length && __jsx("ul", {
    className: "jsx-3347548585" + " " + "Experience-work-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 59
    }
  }, work.description.map((point, index) => __jsx("li", {
    key: `point_${index}`,
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  }, point))), __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-stack",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, work.stack.map((tool, index) => __jsx("div", {
    key: `tool_${index}`,
    className: "jsx-3347548585" + " " + "Experience-work-tool",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: tool.icon,
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, tool.name))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3347548585",
    __self: undefined
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENpQixBQUdzQyxBQUtBLEFBTUMsQUFHRCxBQUtFLEFBT0YsQUFNRyxBQU1ILEFBTUEsQUFNQSxBQU1GLFdBQ1EsR0E3Q3ZCLENBU2UsQ0FZSyxjQXlCcEIsRUF2QkQsUUFic0IsWUFhckIsS0FaQSxpQkF0QjBCLEFBS0EsQUFTRCxBQVlGLEFBWUcsQUFNUCxBQU1JLHlEQUxILGdCQUNwQixLQTdDbUIsQUFLQSxBQWlDRSxlQXJDckIsQUFLa0QsQUFvQi9CLEFBd0JHLEVBWHRCLE1BekJBLE9BYUEsR0F3QkEsMkJBNUNBIiwiZmlsZSI6Ii9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJV29yayB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcblxuaW50ZXJmYWNlIEV4cGVyaWVuY2VQcm9wcyB7XG4gICAgZGF0YTogSVdvcmtbXTtcbn1cblxuY29uc3QgRXhwZXJpZW5jZSA9ICh7IGRhdGEgfTogRXhwZXJpZW5jZVByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz5FeHBlcmllbmNlPC9oMz5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2VcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKCh3b3JrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2B3b3JrXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wb3NpdGlvblwiPnt3b3JrLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kdXJhdGlvblwiPnt3b3JrLmR1cmF0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d29yay5sb2dvfSBhbHQ9e3dvcmsuY29tcGFueX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstY29tcGFueVwiPnt3b3JrLmNvbXBhbnl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1sb2NhdGlvblwiPnt3b3JrLmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhd29yay5kZXNjcmlwdGlvbi5sZW5ndGggJiYgPHVsIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yay5kZXNjcmlwdGlvbi5tYXAoKHBvaW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHBvaW50XyR7aW5kZXh9YH0gPntwb2ludH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1zdGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yay5zdGFjay5tYXAoKHRvb2wsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10b29sXCIga2V5PXtgdG9vbF8ke2luZGV4fWB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dG9vbC5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b29sLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yazpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstZHVyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstc3RhY2t7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29sIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlOyJdfQ== */\n/*@ sourceURL=/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/experience.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./components/introduction.tsx":
/*!*************************************!*\
  !*** ./components/introduction.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/introduction.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Introduction = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("article", {
    className: "jsx-4109468502" + " " + "Introduction",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.avatar,
    className: "jsx-4109468502" + " " + "Introduction-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4109468502" + " " + "Introduction-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-4109468502" + " " + "Introduction-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, data.name), __jsx("h2", {
    className: "jsx-4109468502" + " " + "Introduction-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, data.position), __jsx("p", {
    className: "jsx-4109468502" + " " + "Introduction-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, data.description), __jsx("span", {
    className: "jsx-4109468502" + " " + "Introduction-location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, data.location))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4109468502",
    __self: undefined
  }, ".Introduction.jsx-4109468502{background-color:rgba(200,200,200,.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:3rem 0;margin:0 1rem;}.Introduction-avatar.jsx-4109468502{width:200px;height:200px;padding:0 2rem;border-radius:50%;margin:auto;}.Introduction-wrapper.jsx-4109468502{padding:1rem 2rem;-webkit-flex:1 350px;-ms-flex:1 350px;flex:1 350px;}.Introduction-name.jsx-4109468502{font-size:3rem;}.Introduction-title.jsx-4109468502{font-size:1.2rem;margin-top:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvaW50cm9kdWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmlCLEFBRytELEFBUTFCLEFBT00sQUFJSCxBQUdFLFlBYkosR0FXakIsRUFHcUIsQ0FQSixPQU5FLFNBY25CLElBdkJpQixFQVVLLGtCQUNOLFdBS2hCLENBSkEsMENBWGtDLG1IQUNmLHlEQUNBLGVBQ0QsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL2lremFybi9wb3J0Zm9saW8vUHJvamV0LXZpdHJpbmUvbXktY3YvY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUludHJvZHVjdGlvbiB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcblxuaW50ZXJmYWNlIEludHJvZHVjdGlvblByb3BzIHtcbiAgICBkYXRhOiBJSW50cm9kdWN0aW9uO1xufVxuXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoeyBkYXRhIH06IEludHJvZHVjdGlvblByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLWF2YXRhclwiIHNyYz17ZGF0YS5hdmF0YXJ9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLW5hbWVcIj57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tdGl0bGVcIj57ZGF0YS5wb3NpdGlvbn08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tZGVzY3JpcHRpb25cIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1sb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLC4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24td3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMzUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi1uYW1le1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWN0aW9uOyJdfQ== */\n/*@ sourceURL=/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/introduction.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./components/languages.tsx":
/*!**********************************!*\
  !*** ./components/languages.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/languages.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Languages = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-115689261",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Languages"), __jsx("article", {
    className: "jsx-115689261" + " " + "Languages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((language, index) => __jsx("div", {
    key: `language_${index}`,
    className: "jsx-115689261" + " " + "Languages-language",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("h6", {
    className: "jsx-115689261" + " " + "Languages-language-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, language.name), __jsx("span", {
    className: "jsx-115689261" + " " + "Languages-language-level",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, language.level)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "115689261",
    __self: undefined
  }, ".Languages.jsx-115689261{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,.2);padding:0 1rem;padding-bottom:3rem;}.Languages-language.jsx-115689261{margin:.5rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvbGFuZ3VhZ2VzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmlCLEFBR3NDLEFBT0UsZUFDbkIsMkRBUDBCLDhFQUN3Qiw2Q0FDL0IsZUFDSyxvQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2lremFybi9wb3J0Zm9saW8vUHJvamV0LXZpdHJpbmUvbXktY3YvY29tcG9uZW50cy9sYW5ndWFnZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxhbmd1YWdlIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuXG5pbnRlcmZhY2UgTGFuZ3VhZ2VzUHJvcHMge1xuICAgIGRhdGE6IElMYW5ndWFnZVtdO1xufVxuXG5jb25zdCBMYW5ndWFnZXMgPSAoeyBkYXRhIH06IExhbmd1YWdlc1Byb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz5MYW5ndWFnZXM8L2gzPlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgobGFuZ3VhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGxhbmd1YWdlXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZS1uYW1lXCI+e2xhbmd1YWdlLm5hbWV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGFuZ3VhZ2UtbGV2ZWxcIj57bGFuZ3VhZ2UubGV2ZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuTGFuZ3VhZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuTGFuZ3VhZ2VzLWxhbmd1YWdle1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlczsiXX0= */\n/*@ sourceURL=/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/languages.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Languages);

/***/ }),

/***/ "./components/skills.tsx":
/*!*******************************!*\
  !*** ./components/skills.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/skills.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Skills = ({
  data,
  title
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-182888206",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, title), __jsx("article", {
    className: "jsx-182888206" + " " + "Skills",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, data.map((skill, index) => __jsx("div", {
    key: `skill_${index}`,
    className: "jsx-182888206" + " " + "Skills-skill",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: skill.icon,
    className: "jsx-182888206",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "jsx-182888206",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, skill.name)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "182888206",
    __self: undefined
  }, ".Skills.jsx-182888206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,.2);padding:0 1rem;padding-bottom:3rem;}.Skills-skill.jsx-182888206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Skills-skill.jsx-182888206 img.jsx-182888206{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L2NvbXBvbmVudHMvc2tpbGxzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmlCLEFBR3NDLEFBT0EsQUFNRixXQUNRLG1CQUN2Qiw0Q0FkMEIsQUFPSCw4RUFOMkIsZUFPL0IsZUFDbkIsZUFQbUIsZUFDSyxvQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2lremFybi9wb3J0Zm9saW8vUHJvamV0LXZpdHJpbmUvbXktY3YvY29tcG9uZW50cy9za2lsbHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNraWxsIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuXG5pbnRlcmZhY2UgU2tpbGxzUHJvcHMge1xuICAgIGRhdGE6IElTa2lsbFtdO1xuICAgIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNraWxscyA9ICh7IGRhdGEsIHRpdGxlIH06IFNraWxsc1Byb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlNraWxsc1wiPlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2tpbGxzLXNraWxsXCIga2V5PXtgc2tpbGxfJHtpbmRleH1gfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2tpbGwuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntza2lsbC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5Ta2lsbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLlNraWxscy1za2lsbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLlNraWxscy1za2lsbCBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzOyJdfQ== */\n/*@ sourceURL=/Users/ikzarn/portfolio/Projet-vitrine/my-cv/components/skills.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./data/data.ts":
/*!**********************!*\
  !*** ./data/data.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Resume = {
  introduction: {
    name: "Abdessalam IKZARN",
    avatar: "./images/avatar.jpg",
    location: "Paris, France",
    description: "Avec 10 ans d’expérience dans l’IT et les télécoms, je me spécialise aujourd’hui en Infrastructure et DevOps. Passionné par ce domaine, je conçois, optimise, sécurise et automatise des environnements complexes, avec une approche centrée sur la performance et les besoins clients. Curieux et engagé, je cherche constamment à approfondir mes compétences pour apporter une valeur ajoutée tangible et durable sur des projets concrets et innovants.",
    position: "DevSecOps Engineer @typeform"
  },
  experience: [{
    title: 'Chef de projet',
    company: 'AFD.TECH',
    logo: 'https://media-exp1.licdn.com/dms/image/C560BAQF33xjO3Ow7Xw/company-logo_100_100/0?e=1609372800&v=beta&t=bBjxdu6KCj3taLPmgnzu7BT8gJy0wX9_VEk6Oqp_M0I',
    duration: 'Sept 2022 - Present',
    location: 'Velizy, France',
    description: ['Gestion du dimensionnement des équipes ≈140 Ingénieurs.', 'Gestion financière du projet, validation des facturations et rédaction des rapports de facturation.', 'Suivi des prévisions financières du projet : (coûts, revenus, marge).', 'Contribution aux propositions commerciales et négociation des contrats.', 'Rédaction des documents relatifs au projet (PRA, PAS, PAQ).', "Fourniture d’un support de qualité au client, animation des comités de pilotage."],
    stack: [{
      name: 'Reactjs',
      icon: 'https://cdn.svgporn.com/logos/react.svg'
    }, {
      name: 'Typescript',
      icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
    }, {
      name: 'Redux',
      icon: 'https://cdn.svgporn.com/logos/redux.svg'
    }, {
      name: 'AWS',
      icon: 'https://cdn.svgporn.com/logos/aws.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }, {
      name: 'Styled Components',
      icon: './images/styled-components.png'
    }]
  }, {
    title: 'Ingénieur Réseaux Télécom',
    company: 'AFD.TECH',
    logo: './images/qwic.png',
    duration: 'Juillet 2015 - August 2022',
    location: 'Velizy, France',
    description: ['Recueil des règles et exigences d’ingénierie à partir de la note de cadrage.', 'Gestion des déploiements et alignement avec les règles d’ingénierie.', 'Gestion des risques et suivi des plannings de déploiement (anticipation, plans d’action, alertes en cas de dérive).', 'Gestion des risques et suivi des plannings de déploiement (anticipation, plans d’action, alertes en cas de dérive).', "Reporting et mise en place des indicateurs de performance (KPIs)."],
    stack: [{
      name: 'Reactjs',
      icon: 'https://cdn.svgporn.com/logos/react.svg'
    }, {
      name: 'Typescript',
      icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
    }, {
      name: 'Mobx State Tree',
      icon: 'https://cdn.svgporn.com/logos/mobx.svg'
    }, {
      name: 'Nestjs',
      icon: 'https://cdn.svgporn.com/logos/nestjs.svg'
    }, {
      name: 'AWS',
      icon: 'https://cdn.svgporn.com/logos/aws.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }, {
      name: 'Flutter',
      icon: 'https://cdn.svgporn.com/logos/flutter.svg'
    }, {
      name: 'JSS',
      icon: './images/jss.png'
    }]
  }, {
    title: 'Frontend Engineer II',
    company: 'Ooyala',
    logo: './images/ooyala.png',
    duration: 'February 2017 - November 2018',
    location: 'Guadalajara, Mexico',
    description: ['Leadership on Front End development in the Solutions Engineering team.', 'Development of a UI Components library using Storybook.', 'Web platform development for creating custom OTT applications in order to demonstrate product capabilities on the tradeshow.', "Development of prototypes, demos, and proofs of concepts (PoC's) used by the sales team at the trade shows.", "Development of web applications used in large-scale events such as the National Association of Broadcasters Show (NAB) in Las Vegas, Nevada and the International Broadcasting Convention (IBC) in Amsterdam in order to attract new prospects to the Company.", "Third-party software integrations such as Microsoft, MPP Global Solutions, Vindicia and Gigya.", "Some projects: Manchester United F.C., beIN Sports, Bloomberg, Chivas TV, Interactive Advertising Bureau (IAB), Redbox, and THX."],
    stack: [{
      name: 'Reactjs',
      icon: 'https://cdn.svgporn.com/logos/react.svg'
    }, {
      name: 'Redux',
      icon: 'https://cdn.svgporn.com/logos/redux.svg'
    }, {
      name: 'Nodejs',
      icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'
    }, {
      name: 'Hapijs',
      icon: 'https://cdn.svgporn.com/logos/hapi.svg'
    }, {
      name: 'PostgreSQL',
      icon: 'https://cdn.svgporn.com/logos/postgresql.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }, {
      name: 'Stylus',
      icon: 'https://cdn.svgporn.com/logos/stylus.svg'
    }]
  }, {
    title: 'Frontend Engineer',
    company: 'Ooyala',
    logo: './images/ooyala.png',
    duration: 'July 2015 - January 2017',
    location: 'Guadalajara, Mexico',
    description: ['Leadership in Frontend development in the Value Engineering team.', "Development of prototypes, demos, and proofs of concepts (PoC's) used by the sales team at the trade shows.", 'Development of web applications used in large-scale events such as the National Association of Broadcasters Show (NAB) in Las Vegas, Nevada and the International Broadcasting Convention (IBC) in Amsterdam in order to attract new prospects to the Company.', "Working with products/services of third-party Companies such as Microsoft, MPP Global Solutions, Vindicia and Gigya.", "Some projects/customers: Manchester United F.C., beIN Sports, Bloomberg, Chivas TV, Interactive Advertising Bureau (IAB), Redbox, and THX."],
    stack: [{
      name: 'Reactjs',
      icon: 'https://cdn.svgporn.com/logos/react.svg'
    }, {
      name: 'Flux',
      icon: 'https://cdn.svgporn.com/logos/flux.svg'
    }, {
      name: 'Angularjs',
      icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
    }, {
      name: 'Nodejs',
      icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'
    }, {
      name: 'Expressjs',
      icon: 'https://cdn.svgporn.com/logos/express.svg'
    }, {
      name: 'PostgreSQL',
      icon: 'https://cdn.svgporn.com/logos/postgresql.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }, {
      name: 'Sass',
      icon: 'https://cdn.svgporn.com/logos/sass.svg'
    }]
  }, {
    title: 'Frontend Engineer',
    company: 'Intagono',
    logo: './images/intagono.png',
    duration: 'May 2014 - July 2015',
    location: 'Guadalajara, Mexico',
    description: ['Development of web sites and web applications for different types of clients.', "Frontend developer role supporting some Backend tasks as well, working with technologies such as Laravel framework, Javascript (vanilla, jquery, and angular.js), HTML, CSS.", 'Leadership in some projects on the frontend side.', "Some projects: Hersheys Mexico, Growerspace, Prep Academy Tutors, and BigAppetit (food delivery startup)."],
    stack: [{
      name: 'jQuery',
      icon: 'https://cdn.svgporn.com/logos/jquery.svg'
    }, {
      name: 'Angularjs',
      icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
    }, {
      name: 'PHP',
      icon: 'https://cdn.svgporn.com/logos/php.svg'
    }, {
      name: 'Laravel',
      icon: 'https://cdn.svgporn.com/logos/laravel.svg'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.svgporn.com/logos/mysql.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }, {
      name: 'Sass',
      icon: 'https://cdn.svgporn.com/logos/sass.svg'
    }]
  }, {
    title: 'Fullstack Engineer',
    company: 'ZipVisual',
    logo: 'https://www.zipvisual.com/bundles/front/images/zipvisual-logo.png',
    duration: 'February 2013 - May 2014',
    location: 'Guadalajara, Mexico',
    description: ['Development of web sites and web applications for different types of clients.', "Fullstack developer role working with technologies such as Symfony framework, Javascript (vanilla and jquery), HTML, CSS.", 'Some projects: Crown Paradise hotels, Color and Art, Moco de Gorila and Colibrí Jewellery.'],
    stack: [{
      name: 'jQuery',
      icon: 'https://cdn.svgporn.com/logos/jquery.svg'
    }, {
      name: 'PHP',
      icon: 'https://cdn.svgporn.com/logos/php.svg'
    }, {
      name: 'Symfony',
      icon: 'https://cdn.svgporn.com/logos/symfony.svg'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.svgporn.com/logos/mysql.svg'
    }]
  }],
  education: [{
    name: 'Universidad de Guadalajara',
    logo: './images/udg.png',
    title: 'Computer Engineering, Software',
    duration: '2008 - 2013'
  }, {
    name: 'IoT',
    logo: 'https://cdn.svgporn.com/logos/aws.svg',
    title: 'Developing and Deploying an Internet of Things',
    duration: 'August 2019',
    credentialLink: 'https://courses.edx.org/certificates/d372e340b9894e80becea59fd705967b'
  }, {
    name: '',
    logo: './images/jsnation.svg',
    title: 'TypeScript Workshop with Michel Weststrate + Conference',
    duration: 'June 2019'
  }, {
    name: 'Lynda.com',
    logo: 'https://cdn.svgporn.com/logos/lynda.svg',
    title: 'Performing Complex State Management with Redux',
    duration: 'September 2018',
    credentialLink: 'http://www.lynda.com/Redux-tutorials/Performing-Complex-State-Management-Redux/724805-2.html'
  }, {
    name: 'Lynda.com',
    logo: 'https://cdn.svgporn.com/logos/lynda.svg',
    title: 'React: Testing and Debugging',
    duration: 'September 2018',
    credentialLink: 'http://www.lynda.com/React-js-tutorials/React-Testing-Debugging/592511-2.html'
  }, {
    name: '',
    logo: './images/platzi.png',
    title: 'Javascript Fundamentals',
    duration: 'December 2017',
    credentialLink: 'https://platzi.com/@alfrejivi/curso/1099-fundamentos-javascript-2017/diploma/detalle/'
  }, {
    name: '',
    logo: './images/caav.svg',
    title: 'Graphic Design Certified',
    duration: 'June 2015'
  }, {
    name: '',
    logo: 'https://cdn.svgporn.com/logos/oracle.svg',
    title: 'Oracle Certified Professional, Java SE 6 Programmer',
    duration: 'January 2013',
    credentialLink: 'https://www.youracclaim.com/badges/4783a9a8-75d8-4bd1-b1a4-983db13c8dbe/linked_in_profile'
  }, {
    name: '',
    logo: './images/brandhome.png',
    title: 'Web Development Certified',
    duration: 'September 2011'
  }, {
    name: 'Code School',
    logo: './images/code-school.png',
    title: 'Shaping up with angularjs',
    duration: 'September 2011'
  }],
  skills: [{
    name: 'Javascript',
    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
  }, {
    name: 'Reactjs',
    icon: 'https://cdn.svgporn.com/logos/react.svg',
    current: true
  }, {
    name: 'Typescript',
    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
    current: true
  }, {
    name: 'Mobx State Tree',
    icon: 'https://cdn.svgporn.com/logos/mobx.svg',
    current: true
  }, {
    name: 'Redux',
    icon: 'https://cdn.svgporn.com/logos/redux.svg'
  }, {
    name: 'Flux',
    icon: 'https://cdn.svgporn.com/logos/flux.svg'
  }, {
    name: 'Angularjs',
    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
  }, {
    name: 'AWS',
    icon: 'https://cdn.svgporn.com/logos/aws.svg',
    current: true
  }, {
    name: 'Netlify',
    icon: 'https://cdn.svgporn.com/logos/netlify.svg'
  }, {
    name: 'Zeit',
    icon: 'https://cdn.svgporn.com/logos/zeit-icon.svg'
  }, {
    name: 'Nextjs',
    icon: 'https://cdn.svgporn.com/logos/nextjs.svg'
  }, {
    name: 'Nodejs',
    icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
    current: true
  }, {
    name: 'Nestjs',
    icon: 'https://cdn.svgporn.com/logos/nestjs.svg',
    current: true
  }, {
    name: 'Jest',
    icon: 'https://cdn.svgporn.com/logos/jest.svg',
    current: true
  }, {
    name: 'React Testing library',
    icon: 'https://testing-library.com/img/logo-large.png',
    current: true
  }, {
    name: 'Enzyme',
    icon: 'https://cdn.svgporn.com/logos/airbnb.svg'
  }, {
    name: 'Mocha',
    icon: 'https://cdn.svgporn.com/logos/mocha.svg'
  }, {
    name: 'Puppeteer',
    icon: 'https://cdn.svgporn.com/logos/puppeteer.svg',
    current: true
  }, {
    name: 'Sentry',
    icon: 'https://cdn.svgporn.com/logos/sentry.svg',
    current: true
  }, {
    name: 'Git',
    icon: 'https://cdn.svgporn.com/logos/git-icon.svg',
    current: true
  }, {
    name: 'Jira',
    icon: 'https://cdn.svgporn.com/logos/jira.svg',
    current: true
  }, {
    name: 'HTML5',
    icon: 'https://cdn.svgporn.com/logos/html-5.svg',
    current: true
  }, {
    name: 'CSS3',
    icon: 'https://cdn.svgporn.com/logos/css-3.svg',
    current: true
  }, {
    name: 'Java',
    icon: 'https://cdn.svgporn.com/logos/java.svg'
  }, {
    name: 'Zeplin',
    icon: 'https://cdn.svgporn.com/logos/zeplin.svg',
    current: true
  }, {
    name: 'Flutter',
    icon: 'https://cdn.svgporn.com/logos/flutter.svg',
    current: true
  }, {
    name: 'Styled Components',
    icon: './images/styled-components.png'
  }, {
    name: 'JSS',
    icon: './images/jss.png',
    current: true
  }, {
    name: 'Sass',
    icon: 'https://cdn.svgporn.com/logos/sass.svg'
  }, {
    name: 'Stylus',
    icon: 'https://cdn.svgporn.com/logos/stylus.svg'
  }],
  awards: [{
    title: 'BlackBerry Jam Sessions Latino America Winner!',
    logo: './images/blackberry.png',
    location: 'CDMX, Mexico',
    issuer: 'BlackBerry',
    description: 'First place winner at BlackBerry Jam Sessions Latino America #15 on the “Best Design” category and second place on the “Best app” category.',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'November 2012'
  }],
  languages: [{
    name: 'English',
    level: 'Professional working proficiency'
  }, {
    name: 'Spanish',
    level: 'Native or bilingual proficiency'
  }],
  contact: [{
    name: 'Linkedin',
    icon: './images/linkedin.png',
    link: 'https://www.linkedin.com/in/alfrejivi/'
  }, {
    name: 'Github',
    icon: 'https://cdn.svgporn.com/logos/github-icon.svg',
    link: 'https://github.com/alfrejivi'
  }, {
    name: 'Twitter',
    icon: 'https://cdn.svgporn.com/logos/twitter.svg',
    link: 'https://twitter.com/alfrejivi'
  }, {
    name: 'alfrejivi@gmail.com',
    icon: 'https://cdn.svgporn.com/logos/google-gmail.svg',
    link: 'mailto:alfrejivi@gmail.com'
  }, {
    name: 'Instagram',
    icon: 'https://cdn.svgporn.com/logos/instagram-icon.svg',
    link: 'http://instagram.com/alfrejivi'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-ga */ "next-ga");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data */ "./data/data.ts");
/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/experience */ "./components/experience.tsx");
/* harmony import */ var _components_education__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/education */ "./components/education.tsx");
/* harmony import */ var _components_introduction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/introduction */ "./components/introduction.tsx");
/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/skills */ "./components/skills.tsx");
/* harmony import */ var _components_languages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/languages */ "./components/languages.tsx");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/contact */ "./components/contact.tsx");
/* harmony import */ var _components_awards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/awards */ "./components/awards.tsx");
var _jsxFileName = "/Users/ikzarn/portfolio/Projet-vitrine/my-cv/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const styles = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1337055790",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');body,h1,h2,h3,h4,h5,h6{border:0;padding:0;margin:0;}body,h2{font-family:'Roboto',sans-serif;font-weight:300;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}h1{font-weight:500;}h3{font-size:2rem;font-weight:400;margin:2rem 0;background-color:rgba(200,200,200,.1);padding:1rem;}h4{font-size:1.7rem;font-weight:500;}h5{font-weight:400;font-size:1.5rem;}h6{font-weight:400;font-size:1.2rem;}p{max-width:800px;}.Resume{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2rem 1rem;width:100vw;max-width:1500px;margin:auto;box-sizing:border-box;}.Resume-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Resume-main{-webkit-flex:2 520px;-ms-flex:2 520px;flex:2 520px;margin:0 1rem;}.Resume-sidebar{-webkit-flex:1 100px;-ms-flex:1 100px;flex:1 100px;margin:0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pa3phcm4vcG9ydGZvbGlvL1Byb2pldC12aXRyaW5lL215LWN2L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFldUIsQUFFK0YsQUFFekUsQUFNd0IsQUFJWixBQUlMLEFBR0QsQUFPRSxBQUlELEFBSUEsQUFJQSxBQUlILEFBU0EsQUFLQSxBQUlBLFNBekRILE1BaUJNLENBSHBCLEFBY3FCLEFBSUEsQUFJckIsQ0Fab0IsRUF2QlAsU0FDYixHQWdCa0IsQ0FaRSxDQW1CcEIsQUFJQSxBQUlBLFlBZDBDLEdBWjFDLEVBR2dCLENBNENFLEFBSUEsV0EvQ2xCLEdBNENBLEFBSUEsU0FuQjBCLEFBU1AsU0E3QkYsYUFDakIsbUNBOEJELHFCQVZ1QixrQkFDTixZQUNLLGlCQUNMLFlBQ1Usc0JBQzFCLGFBS0EiLCJmaWxlIjoiL1VzZXJzL2lremFybi9wb3J0Zm9saW8vUHJvamV0LXZpdHJpbmUvbXktY3YvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHdpdGhHQSBmcm9tICduZXh0LWdhJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhJztcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpZW5jZSc7XG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uJztcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24nO1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL3NraWxscyc7XG5pbXBvcnQgTGFuZ3VhZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZ3VhZ2VzJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdCc7XG5pbXBvcnQgQXdhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvYXdhcmRzJztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5cbmNvbnN0IHN0eWxlcyA9IChcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwOyBcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYm9keSwgaDIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgICAgICBhe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwuMSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5SZXN1bWUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgLlJlc3VtZS1jb250ZW50e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgICAgICB9XG4gICAgICAgIC5SZXN1bWUtbWFpbntcbiAgICAgICAgICAgIGZsZXg6IDIgNTIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuUmVzdW1lLXNpZGViYXJ7XG4gICAgICAgICAgICBmbGV4OiAxIDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgYH08L3N0eWxlPlxuKTtcblxuY29uc3QgUmVzdW1lID0gKCkgPT4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57ZGF0YS5pbnRyb2R1Y3Rpb24ubmFtZX08L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5pbnRyb2R1Y3Rpb24uZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi4vZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiLi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIuL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiLi9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNkYTUzMmNcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIj48L21ldGE+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEludHJvZHVjdGlvbiBkYXRhPXtkYXRhLmludHJvZHVjdGlvbn0gLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgPEV4cGVyaWVuY2UgZGF0YT17ZGF0YS5leHBlcmllbmNlfSAvPlxuICAgICAgICAgICAgICAgIDxFZHVjYXRpb24gZGF0YT17ZGF0YS5lZHVjYXRpb259IC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxTa2lsbHMgZGF0YT17ZGF0YS5za2lsbHMuZmlsdGVyKHNraWxsID0+IHNraWxsLmN1cnJlbnQpfSB0aXRsZT1cIkN1cnJlbnQgU3RhY2tcIiAvPlxuICAgICAgICAgICAgICAgIDxTa2lsbHMgZGF0YT17ZGF0YS5za2lsbHMuZmlsdGVyKHNraWxsID0+ICFza2lsbC5jdXJyZW50KX0gdGl0bGU9XCJJIEhhdmUgVXNlZFwiIC8+XG4gICAgICAgICAgICAgICAgPExhbmd1YWdlcyBkYXRhPXtkYXRhLmxhbmd1YWdlc30gLz5cbiAgICAgICAgICAgICAgICA8QXdhcmRzIGRhdGE9e2RhdGEuYXdhcmRzfSAvPlxuICAgICAgICAgICAgICAgIDxDb250YWN0IGRhdGE9e2RhdGEuY29udGFjdH0gLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7c3R5bGVzfVxuICAgIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShwcm9jZXNzLmVudi5HQV9JRCwgUm91dGVyKShSZXN1bWUpOyJdfQ== */\n/*@ sourceURL=/Users/ikzarn/portfolio/Projet-vitrine/my-cv/pages/index.tsx */");

const Resume = () => __jsx("section", {
  className: "Resume",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 13
  }
}, _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction.name), __jsx("meta", {
  name: "description",
  content: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction.description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 13
  }
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "./favicon/apple-touch-icon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "./favicon/favicon-32x32.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "./favicon/favicon-16x16.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "manifest",
  href: "./favicon/site.webmanifest",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 13
  }
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#da532c",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 13
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#ffffff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 13
  }
})), __jsx(_components_introduction__WEBPACK_IMPORTED_MODULE_8__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 9
  }
}), __jsx("section", {
  className: "Resume-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }
}, __jsx("section", {
  className: "Resume-main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 13
  }
}, __jsx(_components_experience__WEBPACK_IMPORTED_MODULE_6__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].experience,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 17
  }
}), __jsx(_components_education__WEBPACK_IMPORTED_MODULE_7__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].education,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 17
  }
})), __jsx("section", {
  className: "Resume-sidebar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 13
  }
}, __jsx(_components_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].skills.filter(skill => skill.current),
  title: "Current Stack",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 17
  }
}), __jsx(_components_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].skills.filter(skill => !skill.current),
  title: "I Have Used",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 17
  }
}), __jsx(_components_languages__WEBPACK_IMPORTED_MODULE_10__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].languages,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 17
  }
}), __jsx(_components_awards__WEBPACK_IMPORTED_MODULE_12__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].awards,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 17
  }
}), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].contact,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 17
  }
}))), styles);

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_4___default()(undefined, next_router__WEBPACK_IMPORTED_MODULE_3___default.a)(Resume));

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ikzarn/portfolio/Projet-vitrine/my-cv/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next-ga":
/*!**************************!*\
  !*** external "next-ga" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-ga");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map