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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ \"./src/pages/question.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Add() {\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            title: \"\",\n            questionType: \"text\"\n        }\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(e.currentTarget);\n        const formData = new FormData(e.currentTarget);\n        console.log(formData.get(\"input1\"));\n    };\n    const addQuestionHtml = ()=>{\n        setQuestions((prevQuestions)=>[]);\n        console.log(questions[1].questionNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen min-h-screen flex justify-center items-center relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 p-3.5 gap-6 rounded-xl my-6 shadow-2xl bg-[#9AC1F0] py-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl text-white font-extrabold\",\n                            children: \"Add Survey\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-lg mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-evenly \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"button\",\n                                onClick: addQuestionHtml,\n                                children: \"Add Question\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Add, \"SLRHDgz+lUwkuRxNd2dV/fci5uc=\");\n_c = Add;\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBRW5CLFNBQVNHLE1BQU07O0lBQzVCLE1BQU0sQ0FBQ0MsV0FBYUMsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUMzQztZQUNFSyxPQUFRO1lBQ1JDLGNBQWU7UUFDakI7S0FDSDtJQUVHLE1BQU1DLGVBQWUsQ0FBQ0MsSUFBZ0Q7UUFDbEVBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0gsRUFBRUksYUFBYTtRQUMzQixNQUFNQyxXQUFXLElBQUlDLFNBQVNOLEVBQUVJLGFBQWE7UUFDN0NGLFFBQVFDLEdBQUcsQ0FBQ0UsU0FBU0UsR0FBRyxDQUFDO0lBQzdCO0lBQ0EsTUFBTUMsa0JBQWtCLElBQU07UUFDNUJaLGFBQWEsQ0FBQ2EsZ0JBQWtCLEVBQUU7UUFDbENQLFFBQVFDLEdBQUcsQ0FBQ1IsU0FBUyxDQUFDLEVBQUUsQ0FBQ2UsY0FBYztJQUN6QztJQUNGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtzQkFDRCw0RUFBQ0U7Z0JBQUtDLFVBQVVmOztrQ0FDZCw4REFBQ1k7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUFHSCxXQUFVO3NDQUFxQzs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ25CLGlEQUFRQTs7Ozs7Ozs7OztrQ0FFWCw4REFBQ2tCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLE1BQUs7MENBQ047Ozs7OzswQ0FHRCw4REFBQ0Q7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLE1BQUs7Z0NBQ0xDLFNBQVNWOzBDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVgsQ0FBQztHQS9DdUJkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hZGQudHN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4vcXVlc3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkKCkge1xuICBjb25zdCBbcXVlc3Rpb25zICAsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgdGl0bGUgOiAnJywgXG4gICAgICBxdWVzdGlvblR5cGUgOiAndGV4dCdcbiAgICB9XG5dIGFzIFt7IHRpdGxlOiBzdHJpbmcsIHF1ZXN0aW9uVHlwZTogc3RyaW5nIH1dKVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUgOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgOiB2b2lkID0+IHsgXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEuZ2V0KCdpbnB1dDEnKSlcbiAgICB9XG4gICAgY29uc3QgYWRkUXVlc3Rpb25IdG1sID0gKCkgPT4ge1xuICAgICAgc2V0UXVlc3Rpb25zKChwcmV2UXVlc3Rpb25zKSA9PiBbXSk7XG4gICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnNbMV0ucXVlc3Rpb25OdW1iZXIpXG4gICAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gbWluLWgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctOTYgcC0zLjUgZ2FwLTYgcm91bmRlZC14bCBteS02IHNoYWRvdy0yeGwgYmctWyM5QUMxRjBdIHB5LTZcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZFwiPkFkZCBTdXJ2ZXk8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgbXgtYXV0b1wiPlxuICAgICAgICAgIDxRdWVzdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZXZlbmx5IFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXthZGRRdWVzdGlvbkh0bWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIFF1ZXN0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUXVlc3Rpb24iLCJBZGQiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJ0aXRsZSIsInF1ZXN0aW9uVHlwZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImdldCIsImFkZFF1ZXN0aW9uSHRtbCIsInByZXZRdWVzdGlvbnMiLCJxdWVzdGlvbk51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/add.tsx\n"));

/***/ })

});