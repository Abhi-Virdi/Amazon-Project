/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\n// the global store\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUVsRCxtQkFBbUI7QUFDWixNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUNsQ0csU0FBUztRQUNQQyxRQUFRSCwyREFBYUE7SUFDdkI7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL2FwcC9zdG9yZS5qcz81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBiYXNrZXRSZWR1Y2VyIGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcblxuLy8gdGhlIGdsb2JhbCBzdG9yZVxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgYmFza2V0OiBiYXNrZXRSZWR1Y2VyLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJiYXNrZXRSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiYmFza2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\am\\\\azon\\\\azon start\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\am\\\\azon\\\\azon start\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\am\\\\azon\\\\azon start\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNGO0FBQ047QUFDaUI7QUFFL0MsTUFBTUcsUUFBUSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCw0REFBZUE7UUFBQ0ksU0FBU0QsVUFBVUMsT0FBTztrQkFDekMsNEVBQUNOLGlEQUFRQTtZQUFDQyxPQUFPQSw2Q0FBS0E7c0JBQ3BCLDRFQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2FwcC9zdG9yZSdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHtTZXNzaW9uUHJvdmlkZXJ9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiU2Vzc2lvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToBasket: () => (/* binding */ addToBasket),\n/* harmony export */   basketSlice: () => (/* binding */ basketSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   removeFromBasket: () => (/* binding */ removeFromBasket),\n/* harmony export */   selectItems: () => (/* binding */ selectItems),\n/* harmony export */   selectTotal: () => (/* binding */ selectTotal)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState,\n    reducers: {\n        addToBasket: (state, action)=>{\n            state.items = [\n                ...state.items,\n                action.payload\n            ];\n        },\n        removeFromBasket: (state, action)=>{\n            const index = state.items.findIndex((basketItem)=>basketItem.id === action.payload.id);\n            let newBasket = [\n                ...state.items\n            ];\n            if (index >= 0) {\n                newBasket.splice(index, 1);\n            } else {\n                console.warn(` cant remove the product ${action.payload.id} contact the help desk for your support`);\n            }\n            state.items = newBasket;\n        }\n    }\n});\nconst { addToBasket, removeFromBasket } = basketSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\nconst selectItems = (state)=>state.basket.items;\nconst selectTotal = (state)=>state.basket.items.reduce((total, item)=>total + item.price, 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLGVBQWU7SUFDbkJDLE9BQU8sRUFBRTtBQUNYO0FBRU8sTUFBTUMsY0FBY0gsNkRBQVdBLENBQUM7SUFDckNJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxhQUFhLENBQUNDLE9BQU9DO1lBQ25CRCxNQUFNTCxLQUFLLEdBQUM7bUJBQUlLLE1BQU1MLEtBQUs7Z0JBQUNNLE9BQU9DLE9BQU87YUFBQztRQUM3QztRQUNBQyxrQkFBa0IsQ0FBQ0gsT0FBT0M7WUFDeEIsTUFBTUcsUUFBT0osTUFBTUwsS0FBSyxDQUFDVSxTQUFTLENBQ2hDLENBQUNDLGFBQ0RBLFdBQVdDLEVBQUUsS0FBR04sT0FBT0MsT0FBTyxDQUFDSyxFQUFFO1lBRXJDLElBQUlDLFlBQVU7bUJBQUlSLE1BQU1MLEtBQUs7YUFBQztZQUU5QixJQUFHUyxTQUFPLEdBQUU7Z0JBQ1ZJLFVBQVVDLE1BQU0sQ0FBQ0wsT0FBTTtZQUN6QixPQUNJO2dCQUNGTSxRQUFRQyxJQUFJLENBQ1YsQ0FBQyx5QkFBeUIsRUFBRVYsT0FBT0MsT0FBTyxDQUFDSyxFQUFFLENBQUMsdUNBQXVDLENBQUM7WUFFMUY7WUFFRlAsTUFBTUwsS0FBSyxHQUFDYTtRQUNWO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFVCxXQUFXLEVBQUVJLGdCQUFnQixFQUFFLEdBQUdQLFlBQVlnQixPQUFPLENBQUM7QUFFckUsMEVBQTBFO0FBQ25FLE1BQU1DLGNBQWMsQ0FBQ2IsUUFBVUEsTUFBTWMsTUFBTSxDQUFDbkIsS0FBSyxDQUFDO0FBQ2xELE1BQU1vQixjQUFjLENBQUNmLFFBQVFBLE1BQU1jLE1BQU0sQ0FBQ25CLEtBQUssQ0FBQ3FCLE1BQU0sQ0FBQyxDQUFDQyxPQUFNQyxPQUFRRCxRQUFRQyxLQUFLQyxLQUFLLEVBQUMsR0FBRztBQUNuRyxpRUFBZXZCLFlBQVl3QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzPzg5NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNrZXRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJiYXNrZXRcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXRlbXM9Wy4uLnN0YXRlLml0ZW1zLGFjdGlvbi5wYXlsb2FkXVxuICAgIH0sXG4gICAgcmVtb3ZlRnJvbUJhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGluZGV4PSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXG4gICAgICAgIChiYXNrZXRJdGVtKT0+XG4gICAgICAgIGJhc2tldEl0ZW0uaWQ9PT1hY3Rpb24ucGF5bG9hZC5pZClcbiAgIFxuICAgIGxldCBuZXdCYXNrZXQ9Wy4uLnN0YXRlLml0ZW1zXVxuXG4gICAgaWYoaW5kZXg+PTApe1xuICAgICAgbmV3QmFza2V0LnNwbGljZShpbmRleCwxKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgIGNhbnQgcmVtb3ZlIHRoZSBwcm9kdWN0ICR7YWN0aW9uLnBheWxvYWQuaWR9IGNvbnRhY3QgdGhlIGhlbHAgZGVzayBmb3IgeW91ciBzdXBwb3J0YFxuICAgICAgKVxuICAgIH1cbiAgICAgICAgXG4gIHN0YXRlLml0ZW1zPW5ld0Jhc2tldFxuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKT0+c3RhdGUuYmFza2V0Lml0ZW1zLnJlZHVjZSgodG90YWwsaXRlbSk9PiB0b3RhbCArIGl0ZW0ucHJpY2UsMCk7XG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJiYXNrZXRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvQmFza2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlRnJvbUJhc2tldCIsImluZGV4IiwiZmluZEluZGV4IiwiYmFza2V0SXRlbSIsImlkIiwibmV3QmFza2V0Iiwic3BsaWNlIiwiY29uc29sZSIsIndhcm4iLCJhY3Rpb25zIiwic2VsZWN0SXRlbXMiLCJiYXNrZXQiLCJzZWxlY3RUb3RhbCIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsInByaWNlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();