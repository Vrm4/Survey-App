"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add",{

/***/ "./src/pages/add.tsx":
/*!***************************!*\
  !*** ./src/pages/add.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ \"./src/pages/question.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Add() {\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            title: \"\",\n            questionType: \"text\"\n        }\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(e.currentTarget);\n        const formData = new FormData(e.currentTarget);\n        console.log(formData.get(\"input1\"));\n    };\n    const addQuestionHtml = ()=>{\n        setQuestions((prevQuestions)=>[\n                ...prevQuestions,\n                {\n                    title: \"\",\n                    questionType: \"text\"\n                }\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen min-h-screen flex justify-center items-center relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 p-3.5 gap-6 rounded-xl my-6 shadow-2xl bg-[#9AC1F0] py-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl text-white font-extrabold\",\n                            children: \"Add Survey\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-lg mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-evenly \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"button\",\n                                onClick: addQuestionHtml,\n                                children: \"Add Question\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Add, \"SLRHDgz+lUwkuRxNd2dV/fci5uc=\");\n_c = Add;\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBRW5CLFNBQVNHLE1BQU07O0lBQzVCLE1BQU0sQ0FBQ0MsV0FBYUMsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUMzQztZQUNFSyxPQUFRO1lBQ1JDLGNBQWU7UUFDakI7S0FDSDtJQUVHLE1BQU1DLGVBQWUsQ0FBQ0MsSUFBZ0Q7UUFDbEVBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0gsRUFBRUksYUFBYTtRQUMzQixNQUFNQyxXQUFXLElBQUlDLFNBQVNOLEVBQUVJLGFBQWE7UUFDN0NGLFFBQVFDLEdBQUcsQ0FBQ0UsU0FBU0UsR0FBRyxDQUFDO0lBQzdCO0lBQ0EsTUFBTUMsa0JBQWtCLElBQU07UUFDNUJaLGFBQWEsQ0FBQ2EsZ0JBQW1CO21CQUM1QkE7Z0JBQWdCO29CQUNqQlosT0FBUTtvQkFDUkMsY0FBZTtnQkFDakI7YUFDRDtJQUNIO0lBRUYscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO3NCQUNELDRFQUFDRTtnQkFBS0MsVUFBVWQ7O2tDQUNkLDhEQUFDVzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0c7NEJBQUdILFdBQVU7c0NBQXFDOzs7Ozs7Ozs7OztrQ0FFckQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUViLDRFQUFDbEIsaURBQVFBOzs7Ozs7Ozs7O2tDQUVYLDhEQUFDaUI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FDQ0osV0FBVTtnQ0FDVkssTUFBSzswQ0FDTjs7Ozs7OzBDQUdELDhEQUFDRDtnQ0FDQ0osV0FBVTtnQ0FDVkssTUFBSztnQ0FDTEMsU0FBU1Q7MENBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRWCxDQUFDO0dBckR1QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FkZC50c3g/NmU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi9xdWVzdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGQoKSB7XG4gIGNvbnN0IFtxdWVzdGlvbnMgICwgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICB0aXRsZSA6ICcnLCBcbiAgICAgIHF1ZXN0aW9uVHlwZSA6ICd0ZXh0J1xuICAgIH1cbl0gYXMgQXJyYXk8eyB0aXRsZTogc3RyaW5nLCBxdWVzdGlvblR5cGU6IHN0cmluZyB9PilcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlIDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIDogdm9pZCA9PiB7IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmdldCgnaW5wdXQxJykpXG4gICAgfVxuICAgIGNvbnN0IGFkZFF1ZXN0aW9uSHRtbCA9ICgpID0+IHtcbiAgICAgIHNldFF1ZXN0aW9ucygocHJldlF1ZXN0aW9ucyApID0+IFtcbiAgICAgICAgLi4ucHJldlF1ZXN0aW9ucyAsIHsgXG4gICAgICAgICAgdGl0bGUgOiAnJywgXG4gICAgICAgICAgcXVlc3Rpb25UeXBlIDogJ3RleHQnXG4gICAgICAgIH1cbiAgICAgIF0pO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gbWluLWgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctOTYgcC0zLjUgZ2FwLTYgcm91bmRlZC14bCBteS02IHNoYWRvdy0yeGwgYmctWyM5QUMxRjBdIHB5LTZcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZFwiPkFkZCBTdXJ2ZXk8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgbXgtYXV0b1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxRdWVzdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZXZlbmx5IFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXthZGRRdWVzdGlvbkh0bWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIFF1ZXN0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUXVlc3Rpb24iLCJBZGQiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJ0aXRsZSIsInF1ZXN0aW9uVHlwZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImdldCIsImFkZFF1ZXN0aW9uSHRtbCIsInByZXZRdWVzdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/add.tsx\n"));

/***/ })

});