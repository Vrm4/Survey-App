"use strict";
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
exports.id = "pages/api/get-survey";
exports.ids = ["pages/api/get-survey"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/pages/api/get-survey.ts":
/*!*************************************!*\
  !*** ./src/pages/api/get-survey.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    datasources: {\n        db: {\n            url: process.env.DATABASE_URL\n        }\n    }\n});\nasync function getData() {\n    const survey = await prisma.survey.findMany({\n        select: {\n            title: true\n        }\n    });\n    const surveyCount = await prisma.survey.count({\n        where: {\n            questions: {\n                some: {}\n            }\n        }\n    });\n    return {\n        survey,\n        surveyCount\n    };\n}\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        getData().then((response)=>{\n            console.log(\"merhaba\", response);\n            res.status(200).json(response);\n        }).catch((err)=>{\n            res.status(500).send(\"Error\");\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldC1zdXJ2ZXkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRThDO0FBRTlDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBLENBQUM7SUFDOUJFLGFBQWE7UUFDWEMsSUFBSTtZQUNGQyxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7UUFDL0I7SUFDRjtBQUNGO0FBRUEsZUFBZUMsVUFBVTtJQUNyQixNQUFNQyxTQUFTLE1BQU1SLE9BQU9RLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1FBQ3hDQyxRQUFTO1lBQ0xDLE9BQVMsSUFBSTtRQUNqQjtJQUNKO0lBQ0EsTUFBTUMsY0FBYyxNQUFNWixPQUFPUSxNQUFNLENBQUNLLEtBQUssQ0FBQztRQUMxQ0MsT0FBUTtZQUNKQyxXQUFXO2dCQUNQQyxNQUFNLENBQUM7WUFDVDtRQUNOO0lBQ0o7SUFDQSxPQUFPO1FBQUNSO1FBQU9JO0lBQVc7QUFDOUI7QUFFZSxTQUFTSyxRQUFRQyxHQUFtQixFQUFDQyxHQUFvQixFQUFFO0lBQ3RFLElBQUdELElBQUlFLE1BQU0sS0FBSyxPQUFNO1FBQ3BCYixVQUNDYyxJQUFJLENBQUMsQ0FBQ0MsV0FBWTtZQUNmQyxRQUFRQyxHQUFHLENBQUMsV0FBWUY7WUFDeEJILElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKO1FBQ3pCLEdBQ0NLLEtBQUssQ0FBQyxDQUFDQyxNQUFPO1lBQ1hULElBQUlNLE1BQU0sQ0FBQyxLQUFLSSxJQUFJLENBQUM7UUFDekI7SUFDSixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cnZlci1hcHAvLi9zcmMvcGFnZXMvYXBpL2dldC1zdXJ2ZXkudHM/Yzc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XG4gIGRhdGFzb3VyY2VzOiB7XG4gICAgZGI6IHtcbiAgICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICAgIH0sXG4gIH0sXG59KVxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkgeyBcbiAgICBjb25zdCBzdXJ2ZXkgPSBhd2FpdCBwcmlzbWEuc3VydmV5LmZpbmRNYW55KHtcbiAgICAgICAgc2VsZWN0IDogeyBcbiAgICAgICAgICAgIHRpdGxlICA6IHRydWVcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3Qgc3VydmV5Q291bnQgPSBhd2FpdCBwcmlzbWEuc3VydmV5LmNvdW50KHtcbiAgICAgICAgd2hlcmUgOiB7XG4gICAgICAgICAgICBxdWVzdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBzb21lOiB7fSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHtzdXJ2ZXksc3VydmV5Q291bnR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCxyZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpe1xuICAgICAgICBnZXREYXRhKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZXJoYWJhJyAsIHJlc3BvbnNlIClcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT57XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnRXJyb3InKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJkYXRhc291cmNlcyIsImRiIiwidXJsIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsImdldERhdGEiLCJzdXJ2ZXkiLCJmaW5kTWFueSIsInNlbGVjdCIsInRpdGxlIiwic3VydmV5Q291bnQiLCJjb3VudCIsIndoZXJlIiwicXVlc3Rpb25zIiwic29tZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/get-survey.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/get-survey.ts"));
module.exports = __webpack_exports__;

})();