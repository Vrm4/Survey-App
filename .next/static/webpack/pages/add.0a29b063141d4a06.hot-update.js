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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ \"./src/pages/question.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Add() {\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        [\n            {\n                title: \"\",\n                questionType: \"text\"\n            }\n        ],\n        {\n            questionNumber: 1\n        }\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(e.currentTarget);\n        const formData = new FormData(e.currentTarget);\n        console.log(formData.get(\"input1\"));\n    };\n    const addQuestionHtml = ()=>{\n        setQuestions(questions[1].questionNumber + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen min-h-screen flex justify-center items-center relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 p-3.5 gap-6 rounded-xl my-6 shadow-2xl bg-[#9AC1F0] py-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl text-white font-extrabold\",\n                            children: \"Add Survey\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-lg mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-evenly \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"button\",\n                                onClick: addQuestionHtml,\n                                children: \"Add Question\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Add, \"qtORWiR1JU/9Dn0BuuNOGHiF+Jk=\");\n_c = Add;\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBRW5CLFNBQVNHLE1BQU07O0lBQzVCLE1BQU0sQ0FBQ0MsV0FBYUMsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUFDO1lBQzVDO2dCQUNFSyxPQUFRO2dCQUNSQyxjQUFlO1lBQ2pCO1NBQ0Q7UUFDRDtZQUFFQyxnQkFBaUI7UUFBRTtLQUN0QjtJQUVHLE1BQU1DLGVBQWUsQ0FBQ0MsSUFBZ0Q7UUFDbEVBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0gsRUFBRUksYUFBYTtRQUMzQixNQUFNQyxXQUFXLElBQUlDLFNBQVNOLEVBQUVJLGFBQWE7UUFDN0NGLFFBQVFDLEdBQUcsQ0FBQ0UsU0FBU0UsR0FBRyxDQUFDO0lBQzdCO0lBQ0EsTUFBTUMsa0JBQWtCLElBQU07UUFDM0JiLGFBQWFELFNBQVMsQ0FBQyxFQUFFLENBQUNJLGNBQWMsR0FBRztJQUM5QztJQUNGLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtzQkFDRCw0RUFBQ0U7Z0JBQUtDLFVBQVViOztrQ0FDZCw4REFBQ1U7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUFHSCxXQUFVO3NDQUFxQzs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2xCLGlEQUFRQTs7Ozs7Ozs7OztrQ0FFWCw4REFBQ2lCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLE1BQUs7MENBQ047Ozs7OzswQ0FHRCw4REFBQ0Q7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLE1BQUs7Z0NBQ0xDLFNBQVNSOzBDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVgsQ0FBQztHQWhEdUJmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hZGQudHN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4vcXVlc3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkKCkge1xuICBjb25zdCBbcXVlc3Rpb25zICAsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbW1xuICAgIHtcbiAgICAgIHRpdGxlIDogJycsIFxuICAgICAgcXVlc3Rpb25UeXBlIDogJ3RleHQnXG4gICAgfVxuICBdICwgXG4gIHsgcXVlc3Rpb25OdW1iZXIgOiAxIH1cbl0gYXMgW0FycmF5PHsgdGl0bGU6IHN0cmluZywgcXVlc3Rpb25UeXBlOiBzdHJpbmcgfT4sIHsgcXVlc3Rpb25OdW1iZXI6IG51bWJlciB9XSlcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlIDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIDogdm9pZCA9PiB7IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmdldCgnaW5wdXQxJykpXG4gICAgfVxuICAgIGNvbnN0IGFkZFF1ZXN0aW9uSHRtbCA9ICgpID0+IHtcbiAgICAgICBzZXRRdWVzdGlvbnMocXVlc3Rpb25zWzFdLnF1ZXN0aW9uTnVtYmVyICsgMSlcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy05NiBwLTMuNSBnYXAtNiByb3VuZGVkLXhsIG15LTYgc2hhZG93LTJ4bCBiZy1bIzlBQzFGMF0gcHktNlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkXCI+QWRkIFN1cnZleTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZyBteC1hdXRvXCI+XG4gICAgICAgICAgPFF1ZXN0aW9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1ldmVubHkgXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFF1ZXN0aW9uSHRtbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgUXVlc3Rpb25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJRdWVzdGlvbiIsIkFkZCIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsInRpdGxlIiwicXVlc3Rpb25UeXBlIiwicXVlc3Rpb25OdW1iZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJnZXQiLCJhZGRRdWVzdGlvbkh0bWwiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/add.tsx\n"));

/***/ })

});