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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: screen, ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"screen\", function() { return screen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ball\", function() { return ball; });\n/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help */ \"./src/help.js\");\n\nvar screen = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"div\", {\n  \"class\": \"display-screen\"\n});\nvar ball = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"div\", {\n  \"class\": \"ball\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFsbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWxsLmpzP2E1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SUQsIGNyZWF0ZSB9IGZyb20gXCIuL2hlbHBcIjtcclxuXHJcbiAgY29uc3Qgc2NyZWVuID0gY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGlzcGxheS1zY3JlZW5cIiB9KTtcclxuICBjb25zdCBiYWxsID0gY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiYmFsbFwiIH0pO1xyXG5cclxuZXhwb3J0IHtzY3JlZW4sYmFsbH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ball.js\n");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/*! exports provided: controllWrapper, leftControl, rightControl, upControl, downControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controllWrapper\", function() { return controllWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leftControl\", function() { return leftControl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rightControl\", function() { return rightControl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"upControl\", function() { return upControl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"downControl\", function() { return downControl; });\n/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help */ \"./src/help.js\");\n\nvar controllWrapper = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"div\", {\n  \"class\": \"control-wrapper\"\n}); // for left control\n\nvar leftControl = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"div\", {\n  \"class\": \"left-control\"\n});\nvar leftIcon = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"i\", {\n  \"class\": \"fas fa-caret-left\"\n});\nvar lBtn = leftControl.append(leftIcon); // for right control\n\nvar rightControl = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"div\", {\n  \"class\": \"right-control\"\n});\nvar rightIcon = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"i\", {\n  \"class\": \"fas fa-caret-right\"\n});\nvar rBtn = rightControl.append(rightIcon); // for upper control\n\nvar upControl = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"div\", {\n  \"class\": \"up-control\"\n});\nvar upIcon = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"i\", {\n  \"class\": \"fas fa-caret-up\"\n});\nvar uBtn = upControl.append(upIcon); // for down control\n\nvar downControl = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"div\", {\n  \"class\": \"down-control\"\n});\nvar downIcon = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(\"i\", {\n  \"class\": \"fas fa-caret-down\"\n});\nvar dBtn = downControl.append(downIcon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sLmpzPzRiNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SUQsIGNyZWF0ZSB9IGZyb20gXCIuL2hlbHBcIjtcclxuXHJcbmNvbnN0IGNvbnRyb2xsV3JhcHBlciA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRyb2wtd3JhcHBlclwiIH0pO1xyXG5cclxuLy8gZm9yIGxlZnQgY29udHJvbFxyXG5jb25zdCBsZWZ0Q29udHJvbCA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImxlZnQtY29udHJvbFwiIH0pO1xyXG5jb25zdCBsZWZ0SWNvbiA9IGNyZWF0ZShcImlcIiwgeyBjbGFzczogXCJmYXMgZmEtY2FyZXQtbGVmdFwiIH0pO1xyXG5jb25zdCBsQnRuID0gbGVmdENvbnRyb2wuYXBwZW5kKGxlZnRJY29uKTtcclxuXHJcbi8vIGZvciByaWdodCBjb250cm9sXHJcbmNvbnN0IHJpZ2h0Q29udHJvbCA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInJpZ2h0LWNvbnRyb2xcIiB9KTtcclxuY29uc3QgcmlnaHRJY29uID0gY3JlYXRlKFwiaVwiLCB7IGNsYXNzOiBcImZhcyBmYS1jYXJldC1yaWdodFwiIH0pO1xyXG5jb25zdCByQnRuID0gcmlnaHRDb250cm9sLmFwcGVuZChyaWdodEljb24pO1xyXG5cclxuLy8gZm9yIHVwcGVyIGNvbnRyb2xcclxuXHJcbmNvbnN0IHVwQ29udHJvbCA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInVwLWNvbnRyb2xcIiB9KTtcclxuY29uc3QgdXBJY29uID0gY3JlYXRlKFwiaVwiLCB7IGNsYXNzOiBcImZhcyBmYS1jYXJldC11cFwiIH0pO1xyXG5jb25zdCB1QnRuID0gdXBDb250cm9sLmFwcGVuZCh1cEljb24pO1xyXG5cclxuLy8gZm9yIGRvd24gY29udHJvbFxyXG5jb25zdCBkb3duQ29udHJvbCA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImRvd24tY29udHJvbFwiIH0pO1xyXG5jb25zdCBkb3duSWNvbiA9IGNyZWF0ZShcImlcIiwgeyBjbGFzczogXCJmYXMgZmEtY2FyZXQtZG93blwiIH0pO1xyXG5jb25zdCBkQnRuID0gZG93bkNvbnRyb2wuYXBwZW5kKGRvd25JY29uKTtcclxuXHJcbmV4cG9ydCB7IGNvbnRyb2xsV3JhcHBlciwgbGVmdENvbnRyb2wsIHJpZ2h0Q29udHJvbCwgdXBDb250cm9sLCBkb3duQ29udHJvbCB9O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/control.js\n");

/***/ }),

/***/ "./src/help.js":
/*!*********************!*\
  !*** ./src/help.js ***!
  \*********************/
/*! exports provided: getID, getClass, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getID\", function() { return getID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClass\", function() { return getClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction getID(id) {\n  try {\n    return document.getElementById(id);\n  } catch (err) {\n    console.log(err);\n  }\n}\nfunction getClass(classes) {\n  try {\n    return document.getElementsByClassName(classes);\n  } catch (err) {\n    console.log(err);\n  }\n}\nfunction create() {\n  if (arguments.length === 0) {\n    return document.createElement(\"div\");\n  }\n\n  if (arguments.length === 1 && _typeof(arguments[0]) != \"object\") {\n    return document.createElement(arguments[0]);\n  }\n\n  var tag = arguments[0];\n  var attr = arguments[1] || arguments[0];\n\n  if (arguments.length === 1 && _typeof(arguments[0]) === \"object\") {\n    tag = \"div\";\n  }\n\n  var element = document.createElement(tag);\n\n  for (var i in attr) {\n    element.setAttribute(i, attr[i]);\n  }\n\n  return element;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxwLmpzPzk5MWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldElEKGlkKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzKGNsYXNzZXMpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3Nlcyk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9IFwib2JqZWN0XCIpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZ3VtZW50c1swXSk7XHJcbiAgfVxyXG5cclxuICB2YXIgdGFnID0gYXJndW1lbnRzWzBdO1xyXG4gIHZhciBhdHRyID0gYXJndW1lbnRzWzFdIHx8IGFyZ3VtZW50c1swXTtcclxuXHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgdGFnID0gXCJkaXZcIjtcclxuICB9XHJcblxyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICBmb3IgKHZhciBpIGluIGF0dHIpIHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGksIGF0dHJbaV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/help.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help */ \"./src/help.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n\n\n\nvar root = Object(_help__WEBPACK_IMPORTED_MODULE_0__[\"getID\"])(\"game-wrapper\");\n_ball__WEBPACK_IMPORTED_MODULE_1__[\"screen\"].append(_ball__WEBPACK_IMPORTED_MODULE_1__[\"ball\"]);\nroot.append(_ball__WEBPACK_IMPORTED_MODULE_1__[\"screen\"]);\n_control__WEBPACK_IMPORTED_MODULE_2__[\"controllWrapper\"].append(_control__WEBPACK_IMPORTED_MODULE_2__[\"leftControl\"]);\n_control__WEBPACK_IMPORTED_MODULE_2__[\"controllWrapper\"].append(_control__WEBPACK_IMPORTED_MODULE_2__[\"rightControl\"]);\n_control__WEBPACK_IMPORTED_MODULE_2__[\"controllWrapper\"].append(_control__WEBPACK_IMPORTED_MODULE_2__[\"upControl\"]);\n_control__WEBPACK_IMPORTED_MODULE_2__[\"controllWrapper\"].append(_control__WEBPACK_IMPORTED_MODULE_2__[\"downControl\"]);\nroot.append(_control__WEBPACK_IMPORTED_MODULE_2__[\"controllWrapper\"]);\nvar lb = document.querySelector(\".left-control\");\nvar rb = document.querySelector(\".right-control\");\nvar ub = document.querySelector(\".up-control\");\nvar db = document.querySelector(\".down-control\");\nvar bal = document.querySelector(\".ball\");\nvar xp = 140;\nvar yp = 140;\nlb.addEventListener(\"click\", function () {\n  xp = xp + 10;\n\n  if (xp <= 250) {\n    bal.style.right = xp + \"px\";\n  } else {\n    alert(\"Please press right button\");\n  }\n});\nrb.addEventListener(\"click\", function () {\n  xp = xp - 10;\n\n  if (xp >= 0) {\n    bal.style.right = xp + \"px\";\n  } else {\n    alert(\"Please press left button\");\n  }\n});\nub.addEventListener(\"click\", function () {\n  yp = yp - 10;\n\n  if (yp >= 0) {\n    bal.style.top = yp + \"px\";\n  } else {\n    alert(\"Please press down button\");\n  } //   alert(\"up click\");\n\n});\ndb.addEventListener(\"click\", function () {\n  yp = yp + 10;\n\n  if (yp <= 250) {\n    bal.style.top = yp + \"px\";\n  } else {\n    alert(\"Please press up button\");\n  } //   alert(\"down click\");\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRJRCwgY3JlYXRlIH0gZnJvbSBcIi4vaGVscFwiO1xyXG5pbXBvcnQgeyBiYWxsLCBzY3JlZW4gfSBmcm9tIFwiLi9iYWxsXCI7XHJcbmltcG9ydCB7XHJcbiAgY29udHJvbGxXcmFwcGVyLFxyXG4gIGxlZnRDb250cm9sLFxyXG4gIHJpZ2h0Q29udHJvbCxcclxuICB1cENvbnRyb2wsXHJcbiAgZG93bkNvbnRyb2wsXHJcbn0gZnJvbSBcIi4vY29udHJvbFwiO1xyXG5cclxuY29uc3Qgcm9vdCA9IGdldElEKFwiZ2FtZS13cmFwcGVyXCIpO1xyXG5cclxuc2NyZWVuLmFwcGVuZChiYWxsKTtcclxucm9vdC5hcHBlbmQoc2NyZWVuKTtcclxuXHJcbmNvbnRyb2xsV3JhcHBlci5hcHBlbmQobGVmdENvbnRyb2wpO1xyXG5jb250cm9sbFdyYXBwZXIuYXBwZW5kKHJpZ2h0Q29udHJvbCk7XHJcbmNvbnRyb2xsV3JhcHBlci5hcHBlbmQodXBDb250cm9sKTtcclxuY29udHJvbGxXcmFwcGVyLmFwcGVuZChkb3duQ29udHJvbCk7XHJcblxyXG5yb290LmFwcGVuZChjb250cm9sbFdyYXBwZXIpO1xyXG5cclxuY29uc3QgbGIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtY29udHJvbFwiKTtcclxuY29uc3QgcmIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LWNvbnRyb2xcIik7XHJcbmNvbnN0IHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cC1jb250cm9sXCIpO1xyXG5jb25zdCBkYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG93bi1jb250cm9sXCIpO1xyXG5cclxuY29uc3QgYmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsXCIpO1xyXG5cclxubGV0IHhwID0gMTQwO1xyXG5sZXQgeXAgPSAxNDA7XHJcblxyXG5sYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHhwID0geHAgKyAxMDtcclxuICBpZiAoeHAgPD0gMjUwKSB7XHJcbiAgICBiYWwuc3R5bGUucmlnaHQgPSB4cCArIFwicHhcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgcHJlc3MgcmlnaHQgYnV0dG9uXCIpO1xyXG4gIH1cclxufSk7XHJcbnJiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgeHAgPSB4cCAtIDEwO1xyXG4gIGlmICh4cCA+PSAwKSB7XHJcbiAgICBiYWwuc3R5bGUucmlnaHQgPSB4cCArIFwicHhcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoXCJQbGVhc2UgcHJlc3MgbGVmdCBidXR0b25cIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbnViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgeXAgPSB5cCAtIDEwO1xyXG4gIGlmICh5cCA+PSAwKSB7XHJcbiAgICBiYWwuc3R5bGUudG9wID0geXAgKyBcInB4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KFwiUGxlYXNlIHByZXNzIGRvd24gYnV0dG9uXCIpO1xyXG4gIH1cclxuICAvLyAgIGFsZXJ0KFwidXAgY2xpY2tcIik7XHJcbn0pO1xyXG5kYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHlwID0geXAgKyAxMDtcclxuICBpZiAoeXAgPD0gMjUwKSB7XHJcbiAgICBiYWwuc3R5bGUudG9wID0geXAgKyBcInB4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KFwiUGxlYXNlIHByZXNzIHVwIGJ1dHRvblwiKTtcclxuICB9XHJcbiAgLy8gICBhbGVydChcImRvd24gY2xpY2tcIik7XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });