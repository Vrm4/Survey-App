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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ \"./src/pages/question.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Add() {\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(e.currentTarget);\n        const formData = new FormData(e.currentTarget);\n        console.log(formData.get(\"input1\"));\n    };\n    const addQuestionHtml = ()=>{\n        setQuestions(questions + 1);\n    };\n    /*\n  const [questions  , setQuestions] = useState([\n    {\n      title : '', \n      questionType : 'text'\n    }\n] as Array<{ title: string, questionType: string }>)\n\n    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void => { \n        e.preventDefault()\n        console.log(e.currentTarget)\n        const formData = new FormData(e.currentTarget)\n        console.log(formData.get('input1'))\n    }\n    const addQuestionHtml = () => {\n      setQuestions((prevQuestions ) => [\n        ...prevQuestions , { \n          title : '', \n          questionType : 'text'\n        }\n      ]);\n    }\n    useEffect(() => { \n      console.log(questions)\n    })\n*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen min-h-screen flex justify-center items-center relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-96 p-3.5 gap-6 rounded-xl my-6 shadow-2xl bg-[#9AC1F0] py-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl text-white font-extrabold\",\n                            children: \"Add Survey\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-lg mx-auto\",\n                        children: questions.map((value, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, key, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-evenly \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"button\",\n                                onClick: addQuestionHtml,\n                                children: \"Add Question\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/surver-app/src/pages/add.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Add, \"MpnZGg23M8E66JlBHaVHXba32xU=\");\n_c = Add;\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNqQjtBQUVuQixTQUFTRyxNQUFNOztJQUM1QixNQUFNLENBQUNDLFdBQWFDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFFM0MsTUFBTUssZUFBZSxDQUFDQyxJQUFnRDtRQUNsRUEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDSCxFQUFFSSxhQUFhO1FBQzNCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU04sRUFBRUksYUFBYTtRQUM3Q0YsUUFBUUMsR0FBRyxDQUFDRSxTQUFTRSxHQUFHLENBQUM7SUFDN0I7SUFDQSxNQUFNQyxrQkFBa0IsSUFBTTtRQUM1QlYsYUFBYUQsWUFBWTtJQUMzQjtJQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJGLEdBQ0UscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO3NCQUNELDRFQUFDRTtnQkFBS0MsVUFBVWI7O2tDQUNkLDhEQUFDVTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0c7NEJBQUdILFdBQVU7c0NBQXFDOzs7Ozs7Ozs7OztrQ0FFckQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNUYixVQUFVaUIsR0FBRyxDQUFDLENBQUNDLE9BQVFDLG9CQUN6Qiw4REFBQ3JCLGlEQUFRQSxNQUFNcUI7Ozs7Ozs7Ozs7a0NBR25CLDhEQUFDUDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUNDUCxXQUFVO2dDQUNWUSxNQUFLOzBDQUNOOzs7Ozs7MENBR0QsOERBQUNEO2dDQUNDUCxXQUFVO2dDQUNWUSxNQUFLO2dDQUNMQyxTQUFTWDswQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFYLENBQUM7R0FyRXVCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWRkLnRzeD82ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4vcXVlc3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkKCkge1xuICBjb25zdCBbcXVlc3Rpb25zICAsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZSgxKVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUgOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgOiB2b2lkID0+IHsgXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEuZ2V0KCdpbnB1dDEnKSlcbiAgICB9XG4gICAgY29uc3QgYWRkUXVlc3Rpb25IdG1sID0gKCkgPT4ge1xuICAgICAgc2V0UXVlc3Rpb25zKHF1ZXN0aW9ucyArIDEpXG4gICAgfVxuICAvKlxuICBjb25zdCBbcXVlc3Rpb25zICAsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgdGl0bGUgOiAnJywgXG4gICAgICBxdWVzdGlvblR5cGUgOiAndGV4dCdcbiAgICB9XG5dIGFzIEFycmF5PHsgdGl0bGU6IHN0cmluZywgcXVlc3Rpb25UeXBlOiBzdHJpbmcgfT4pXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSA6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA6IHZvaWQgPT4geyBcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS5nZXQoJ2lucHV0MScpKVxuICAgIH1cbiAgICBjb25zdCBhZGRRdWVzdGlvbkh0bWwgPSAoKSA9PiB7XG4gICAgICBzZXRRdWVzdGlvbnMoKHByZXZRdWVzdGlvbnMgKSA9PiBbXG4gICAgICAgIC4uLnByZXZRdWVzdGlvbnMgLCB7IFxuICAgICAgICAgIHRpdGxlIDogJycsIFxuICAgICAgICAgIHF1ZXN0aW9uVHlwZSA6ICd0ZXh0J1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgXG4gICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpXG4gICAgfSlcbiovXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy05NiBwLTMuNSBnYXAtNiByb3VuZGVkLXhsIG15LTYgc2hhZG93LTJ4bCBiZy1bIzlBQzFGMF0gcHktNlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkXCI+QWRkIFN1cnZleTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZyBteC1hdXRvXCI+XG4gICAgICAgICAgeyAgIHF1ZXN0aW9ucy5tYXAoKHZhbHVlICwga2V5KSA9PihcbiAgICAgICAgICAgIDxRdWVzdGlvbiBrZXk9e2tleX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17YWRkUXVlc3Rpb25IdG1sfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBRdWVzdGlvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlF1ZXN0aW9uIiwiQWRkIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZ2V0IiwiYWRkUXVlc3Rpb25IdG1sIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJtYXAiLCJ2YWx1ZSIsImtleSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/add.tsx\n"));

/***/ })

});