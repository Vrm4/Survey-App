"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst getSurveys = async ()=>{\n    await fetch(\"/api/get-survey\", {\n        method: \"GET\"\n    });\n};\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getSurveys().then();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen min-h-screen flex justify-center items-center relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 rounded-xl bg-gradient-to-r from-blue-200 to-gray-500 p-6 hover:shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-white text-3xl font-bold\",\n                                children: \"Başlık\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white mt-4\",\n                                children: \"Soru Sayısı : 5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 rounded-xl bg-gradient-to-r from-blue-200 to-gray-500 p-6 hover:shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-white text-3xl font-bold\",\n                                children: \"Başlık\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white mt-4\",\n                                children: \"Soru Sayısı : 5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 rounded-xl bg-gradient-to-r from-blue-200 to-gray-500 p-6 hover:shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-white text-3xl font-bold\",\n                                children: \"Başlık\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white mt-4\",\n                                children: \"Soru Sayısı : 5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 rounded-xl bg-gradient-to-r from-blue-200 to-gray-500 p-6 hover:shadow-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-white text-3xl font-bold\",\n                                children: \"Başlık\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white mt-4\",\n                                children: \"Soru Sayısı : 5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-5 right-5 inline-flex grid gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/add\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded-md\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/results\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded-md\",\n                            children: \"Results\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"sygeURvY+N06/9T/zVZwEwk4Cxk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNlO0FBRTVDLE1BQU1HLGFBQWEsVUFBVztJQUM1QixNQUFNQyxNQUFNLG1CQUFtQjtRQUM3QkMsUUFBUTtJQUNWO0FBQ0Y7QUFFZSxTQUFTQyxPQUFPOztJQUM3QixNQUFNLENBQUNDLE1BQU9DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVwQ0QsZ0RBQVNBLENBQUMsSUFBSztRQUNiRSxhQUNDTSxJQUFJO0lBQ1AsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQWdDOzs7Ozs7MENBQzlDLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBa0I7Ozs7Ozs7Ozs7OztrQ0FFakMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQWdDOzs7Ozs7MENBQzlDLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBa0I7Ozs7Ozs7Ozs7OztrQ0FFakMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQWdDOzs7Ozs7MENBQzlDLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBa0I7Ozs7Ozs7Ozs7OztrQ0FFakMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQWdDOzs7Ozs7MENBQzlDLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHakMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1gsa0RBQUlBO3dCQUFDYyxNQUFLO2tDQUNQLDRFQUFDQzs0QkFBT0osV0FBVTtzQ0FBNEU7Ozs7Ozs7Ozs7O2tDQUVsRyw4REFBQ1gsa0RBQUlBO3dCQUFDYyxNQUFLO2tDQUNQLDRFQUFDQzs0QkFBT0osV0FBVTtzQ0FBOEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVHLENBQUM7R0F0Q3VCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBnZXRTdXJ2ZXlzID0gYXN5bmMgKCkgPT57XG4gIGF3YWl0IGZldGNoKCcvYXBpL2dldC1zdXJ2ZXknLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEgLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PntcbiAgICBnZXRTdXJ2ZXlzKClcbiAgICAudGhlbigpXG4gIH0gLFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTk2IHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtMjAwIHRvLWdyYXktNTAwIHAtNiBob3ZlcjpzaGFkb3ctMnhsXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIGZvbnQtYm9sZFwiPkJhxZ9sxLFrPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtdC00XCI+U29ydSBTYXnEsXPEsSA6IDU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctOTYgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS0yMDAgdG8tZ3JheS01MDAgcC02IGhvdmVyOnNoYWRvdy0yeGxcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGwgZm9udC1ib2xkXCI+QmHFn2zEsWs8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG10LTRcIj5Tb3J1IFNhecSxc8SxIDogNTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy05NiByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTIwMCB0by1ncmF5LTUwMCBwLTYgaG92ZXI6c2hhZG93LTJ4bFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LWJvbGRcIj5CYcWfbMSxazwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbXQtNFwiPlNvcnUgU2F5xLFzxLEgOiA1PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTk2IHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtMjAwIHRvLWdyYXktNTAwIHAtNiBob3ZlcjpzaGFkb3ctMnhsXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIGZvbnQtYm9sZFwiPkJhxZ9sxLFrPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtdC00XCI+U29ydSBTYXnEsXPEsSA6IDU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNSByaWdodC01IGlubGluZS1mbGV4IGdyaWQgZ2FwLTJcIj5cbiAgICAgICAgPExpbmsgaHJlZj0nL2FkZCc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIHJvdW5kZWQtbWRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPScvcmVzdWx0cyc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MDAgaG92ZXI6Ymctb3JhbmdlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC1tZFwiPlJlc3VsdHM8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0U3VydmV5cyIsImZldGNoIiwibWV0aG9kIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwidGhlbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});