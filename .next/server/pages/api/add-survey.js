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
exports.id = "pages/api/add-survey";
exports.ids = ["pages/api/add-survey"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/pages/api/add-survey.ts":
/*!*************************************!*\
  !*** ./src/pages/api/add-survey.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    datasources: {\n        db: {\n            url: process.env.DATABASE_URL\n        }\n    }\n});\nasync function main(surveyName, questionArray) {\n    const survey = await prisma.survey.create({\n        data: {\n            title: surveyName,\n            questions: questionArray\n        }\n    });\n    console.log(survey);\n}\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        console.log(req.body);\n        main(req.body[0], req.body[1]).then(()=>{\n            res.status(200).send(\"Added\");\n        }).catch((err)=>{\n            console.log(err);\n            res.status(500).send(\"Error\");\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkZC1zdXJ2ZXkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhDO0FBRTlDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBLENBQUM7SUFDOUJFLGFBQWE7UUFDWEMsSUFBSTtZQUNGQyxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7UUFDL0I7SUFDRjtBQUNGO0FBRUEsZUFBZUMsS0FBS0MsVUFBbUIsRUFBSUMsYUFHekMsRUFBRTtJQUNBLE1BQU1DLFNBQVMsTUFBTVYsT0FBT1UsTUFBTSxDQUFDQyxNQUFNLENBQUM7UUFDdENDLE1BQU07WUFDRkMsT0FBT0w7WUFDUE0sV0FBV0w7UUFDZjtJQUNKO0lBQ0FNLFFBQVFDLEdBQUcsQ0FBQ047QUFDaEI7QUFFZSxTQUFTTyxRQUFRQyxHQUFtQixFQUFDQyxHQUFvQixFQUFFO0lBQ3RFLElBQUdELElBQUlFLE1BQU0sS0FBSyxRQUFPO1FBQ3JCTCxRQUFRQyxHQUFHLENBQUNFLElBQUlHLElBQUk7UUFDcEJkLEtBQUtXLElBQUlHLElBQUksQ0FBQyxFQUFFLEVBQUdILElBQUlHLElBQUksQ0FBQyxFQUFFLEVBQUVDLElBQUksQ0FBQyxJQUFLO1lBQ3RDSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3pCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxNQUFPO1lBQ1hYLFFBQVFDLEdBQUcsQ0FBQ1U7WUFDWlAsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUN6QjtJQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VydmVyLWFwcC8uL3NyYy9wYWdlcy9hcGkvYWRkLXN1cnZleS50cz9jN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XG4gIGRhdGFzb3VyY2VzOiB7XG4gICAgZGI6IHtcbiAgICAgIHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICAgIH0sXG4gIH0sXG59KVxuXG5hc3luYyBmdW5jdGlvbiBtYWluKHN1cnZleU5hbWUgOiBzdHJpbmcgICwgcXVlc3Rpb25BcnJheSA6IEFycmF5PHtcbiAgICBxdWVzdGlvbjogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZ1xufT4pIHsgXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgcHJpc21hLnN1cnZleS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogc3VydmV5TmFtZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uczogcXVlc3Rpb25BcnJheVxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhzdXJ2ZXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCxyZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKXtcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gICAgICAgIG1haW4ocmVxLmJvZHlbMF0gLCByZXEuYm9keVsxXSkudGhlbigoKSA9PntcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdBZGRlZCcpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdFcnJvcicpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImRhdGFzb3VyY2VzIiwiZGIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwibWFpbiIsInN1cnZleU5hbWUiLCJxdWVzdGlvbkFycmF5Iiwic3VydmV5IiwiY3JlYXRlIiwiZGF0YSIsInRpdGxlIiwicXVlc3Rpb25zIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInN0YXR1cyIsInNlbmQiLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/add-survey.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/add-survey.ts"));
module.exports = __webpack_exports__;

})();