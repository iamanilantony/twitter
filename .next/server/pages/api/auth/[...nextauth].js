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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/discord":
/*!**********************************************!*\
  !*** external "next-auth/providers/discord" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/discord */ \"next-auth/providers/discord\");\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env_server_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../env/server.mjs */ \"(api)/./src/env/server.mjs\");\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../server/db/client */ \"(api)/./src/server/db/client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_server_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db_client__WEBPACK_IMPORTED_MODULE_4__]);\n([_env_server_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db_client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// Prisma adapter for NextAuth, optional and can be removed\n\n\n\nconst authOptions = {\n    // Include user.id on session\n    callbacks: {\n        session ({ session , user  }) {\n            if (session.user) {\n                session.user.id = user.id;\n            }\n            return session;\n        }\n    },\n    // Configure one or more authentication providers\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_server_db_client__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: _env_server_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_ID,\n            clientSecret: _env_server_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_SECRET\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ0Q7QUFDMUQsMkRBQTJEO0FBQ0Q7QUFFWjtBQUNLO0FBRTVDLE1BQU1LLGNBQStCO0lBQzFDLDZCQUE2QjtJQUM3QkMsV0FBVztRQUNUQyxTQUFRLEVBQUVBLFFBQU8sRUFBRUMsS0FBSSxFQUFFLEVBQUU7WUFDekIsSUFBSUQsUUFBUUMsSUFBSSxFQUFFO2dCQUNoQkQsUUFBUUMsSUFBSSxDQUFDQyxFQUFFLEdBQUdELEtBQUtDLEVBQUU7WUFDM0IsQ0FBQztZQUNELE9BQU9GO1FBQ1Q7SUFDRjtJQUNBLGlEQUFpRDtJQUNqREcsU0FBU1Isd0VBQWFBLENBQUNFLHFEQUFNQTtJQUM3Qk8sV0FBVztRQUNUVixrRUFBZUEsQ0FBQztZQUNkVyxVQUFVVCxrRUFBcUI7WUFDL0JXLGNBQWNYLHNFQUF5QjtRQUN6QztLQUVEO0FBQ0gsRUFBRTtBQUVGLGlFQUFlSCxnREFBUUEsQ0FBQ0ssWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ZXIvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyB0eXBlIE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBEaXNjb3JkUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZGlzY29yZFwiO1xuLy8gUHJpc21hIGFkYXB0ZXIgZm9yIE5leHRBdXRoLCBvcHRpb25hbCBhbmQgY2FuIGJlIHJlbW92ZWRcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuXG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwiLi4vLi4vLi4vZW52L3NlcnZlci5tanNcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvZGIvY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICAvLyBJbmNsdWRlIHVzZXIuaWQgb24gc2Vzc2lvblxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGlzY29yZFByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBlbnYuRElTQ09SRF9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IGVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkRpc2NvcmRQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJlbnYiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJESVNDT1JEX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/db/client.ts":
/*!*********************************!*\
  !*** ./src/server/db/client.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_server_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env/server.mjs */ \"(api)/./src/env/server.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env_server_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") {\n    global.prisma = prisma;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBRUg7QUFPcEMsTUFBTUUsU0FDWEMsT0FBT0QsTUFBTSxJQUNiLElBQUlGLHdEQUFZQSxDQUFDO0lBQ2ZJLEtBQ0VILHlEQUFZLEtBQUssZ0JBQWdCO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRztRQUFDO0tBQVE7QUFDM0UsR0FBRztBQUVMLElBQUlBLHlEQUFZLEtBQUssY0FBYztJQUNqQ0UsT0FBT0QsTUFBTSxHQUFHQTtBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRlci8uL3NyYy9zZXJ2ZXIvZGIvY2xpZW50LnRzPzI3MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmltcG9ydCB7IGVudiB9IGZyb20gXCIuLi8uLi9lbnYvc2VydmVyLm1qc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6XG4gICAgICBlbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFtcInF1ZXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuXCJdIDogW1wiZXJyb3JcIl0sXG4gIH0pO1xuXG5pZiAoZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBnbG9iYWwucHJpc21hID0gcHJpc21hO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImVudiIsInByaXNtYSIsImdsb2JhbCIsImxvZyIsIk5PREVfRU5WIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/server/db/client.ts\n");

/***/ }),

/***/ "(api)/./src/env/client.mjs":
/*!****************************!*\
  !*** ./src/env/client.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"env\": () => (/* binding */ env),\n/* harmony export */   \"formatErrors\": () => (/* binding */ formatErrors)\n/* harmony export */ });\n/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ \"(api)/./src/env/schema.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__]);\n_schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-check\n\nconst _clientEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.clientSchema.safeParse(_schema_mjs__WEBPACK_IMPORTED_MODULE_0__.clientEnv);\nconst formatErrors = (/** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */ errors)=>Object.entries(errors).map(([name, value])=>{\n        if (value && \"_errors\" in value) return `${name}: ${value._errors.join(\", \")}\\n`;\n    }).filter(Boolean);\nif (!_clientEnv.success) {\n    console.error(\"❌ Invalid environment variables:\\n\", ...formatErrors(_clientEnv.error.format()));\n    throw new Error(\"Invalid environment variables\");\n}\nfor (let key of Object.keys(_clientEnv.data)){\n    if (!key.startsWith(\"NEXT_PUBLIC_\")) {\n        console.warn(`❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`);\n        throw new Error(\"Invalid public environment variable name\");\n    }\n}\nconst env = _clientEnv.data;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L2NsaWVudC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWTtBQUMyQztBQUV2RCxNQUFNRSxhQUFhRCwrREFBc0IsQ0FBQ0Qsa0RBQVNBO0FBRTVDLE1BQU1JLGVBQWUsQ0FDMUIsdUVBQXVFLEdBQ3ZFQyxTQUVBQyxPQUFPQyxPQUFPLENBQUNGLFFBQ1pHLEdBQUcsQ0FBQyxDQUFDLENBQUNDLE1BQU1DLE1BQU0sR0FBSztRQUN0QixJQUFJQSxTQUFTLGFBQWFBLE9BQ3hCLE9BQU8sQ0FBQyxFQUFFRCxLQUFLLEVBQUUsRUFBRUMsTUFBTUMsT0FBTyxDQUFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkQsR0FDQ0MsTUFBTSxDQUFDQyxTQUFTO0FBRXJCLElBQUksQ0FBQ1osV0FBV2EsT0FBTyxFQUFFO0lBQ3ZCQyxRQUFRQyxLQUFLLENBQ1gseUNBQ0diLGFBQWFGLFdBQVdlLEtBQUssQ0FBQ0MsTUFBTTtJQUV6QyxNQUFNLElBQUlDLE1BQU0saUNBQWlDO0FBQ25ELENBQUM7QUFFRCxLQUFLLElBQUlDLE9BQU9kLE9BQU9lLElBQUksQ0FBQ25CLFdBQVdvQixJQUFJLEVBQUc7SUFDNUMsSUFBSSxDQUFDRixJQUFJRyxVQUFVLENBQUMsaUJBQWlCO1FBQ25DUCxRQUFRUSxJQUFJLENBQ1YsQ0FBQyw0Q0FBNEMsRUFBRUosSUFBSSxtQ0FBbUMsQ0FBQztRQUd6RixNQUFNLElBQUlELE1BQU0sNENBQTRDO0lBQzlELENBQUM7QUFDSDtBQUVPLE1BQU1NLE1BQU12QixXQUFXb0IsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRlci8uL3NyYy9lbnYvY2xpZW50Lm1qcz82NWEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1jaGVja1xuaW1wb3J0IHsgY2xpZW50RW52LCBjbGllbnRTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWEubWpzXCI7XG5cbmNvbnN0IF9jbGllbnRFbnYgPSBjbGllbnRTY2hlbWEuc2FmZVBhcnNlKGNsaWVudEVudik7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRFcnJvcnMgPSAoXG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd6b2QnKS5ab2RGb3JtYXR0ZWRFcnJvcjxNYXA8c3RyaW5nLHN0cmluZz4sc3RyaW5nPn0gKi9cbiAgZXJyb3JzLFxuKSA9PlxuICBPYmplY3QuZW50cmllcyhlcnJvcnMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlICYmIFwiX2Vycm9yc1wiIGluIHZhbHVlKVxuICAgICAgICByZXR1cm4gYCR7bmFtZX06ICR7dmFsdWUuX2Vycm9ycy5qb2luKFwiLCBcIil9XFxuYDtcbiAgICB9KVxuICAgIC5maWx0ZXIoQm9vbGVhbik7XG5cbmlmICghX2NsaWVudEVudi5zdWNjZXNzKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgXCLinYwgSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXM6XFxuXCIsXG4gICAgLi4uZm9ybWF0RXJyb3JzKF9jbGllbnRFbnYuZXJyb3IuZm9ybWF0KCkpLFxuICApO1xuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlc1wiKTtcbn1cblxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKF9jbGllbnRFbnYuZGF0YSkpIHtcbiAgaWYgKCFrZXkuc3RhcnRzV2l0aChcIk5FWFRfUFVCTElDX1wiKSkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGDinYwgSW52YWxpZCBwdWJsaWMgZW52aXJvbm1lbnQgdmFyaWFibGUgbmFtZTogJHtrZXl9LiBJdCBtdXN0IGJlZ2luIHdpdGggJ05FWFRfUFVCTElDXydgLFxuICAgICk7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHB1YmxpYyBlbnZpcm9ubWVudCB2YXJpYWJsZSBuYW1lXCIpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbnYgPSBfY2xpZW50RW52LmRhdGE7XG4iXSwibmFtZXMiOlsiY2xpZW50RW52IiwiY2xpZW50U2NoZW1hIiwiX2NsaWVudEVudiIsInNhZmVQYXJzZSIsImZvcm1hdEVycm9ycyIsImVycm9ycyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJuYW1lIiwidmFsdWUiLCJfZXJyb3JzIiwiam9pbiIsImZpbHRlciIsIkJvb2xlYW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImVycm9yIiwiZm9ybWF0IiwiRXJyb3IiLCJrZXkiLCJrZXlzIiwiZGF0YSIsInN0YXJ0c1dpdGgiLCJ3YXJuIiwiZW52Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/env/client.mjs\n");

/***/ }),

/***/ "(api)/./src/env/schema.mjs":
/*!****************************!*\
  !*** ./src/env/schema.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clientEnv\": () => (/* binding */ clientEnv),\n/* harmony export */   \"clientSchema\": () => (/* binding */ clientSchema),\n/* harmony export */   \"serverSchema\": () => (/* binding */ serverSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);\nzod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-check\n\n/**\n * Specify your server-side environment variables schema here.\n * This way you can ensure the app isn't built with invalid env vars.\n */ const serverSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(),\n    NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_0__.z[\"enum\"]([\n        \"development\",\n        \"test\",\n        \"production\"\n    ]),\n    NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1).optional(),\n    NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n    // Since NextAuth.js automatically uses the VERCEL_URL if present.\n    (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n    process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_0__.z.string() : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url()),\n    DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n});\n/**\n * Specify your client-side environment variables schema here.\n * This way you can ensure the app isn't built with invalid env vars.\n * To expose them to the client, prefix them with `NEXT_PUBLIC_`.\n */ const clientSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n});\n/**\n * You can't destruct `process.env` as a regular object, so you have to do\n * it manually here. This is because Next.js evaluates this at build time,\n * and only used environment variables are included in the build.\n * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}\n */ const clientEnv = {\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L3NjaGVtYS5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFlBQVk7QUFDWTtBQUV4Qjs7O0NBR0MsR0FDTSxNQUFNQyxlQUFlRCx5Q0FBUSxDQUFDO0lBQ25DRyxjQUFjSCx5Q0FBUSxHQUFHSyxHQUFHO0lBQzVCQyxVQUFVTiwwQ0FBTSxDQUFDO1FBQUM7UUFBZTtRQUFRO0tBQWE7SUFDdERRLGlCQUNFQyxNQUFxQyxHQUNqQ1QsQ0FBaUIsR0FDakJBLHlDQUFRLEdBQUdVLEdBQUcsQ0FBQyxHQUFHQyxRQUFRLEVBQUU7SUFDbENDLGNBQWNaLDZDQUFZLENBQ3hCLHVFQUF1RTtJQUN2RSxrRUFBa0U7SUFDbEUsQ0FBQ2MsTUFBUUwsUUFBUU0sR0FBRyxDQUFDQyxVQUFVLElBQUlGLEtBQ25DLHNFQUFzRTtJQUN0RUwsUUFBUU0sR0FBRyxDQUFDRSxNQUFNLEdBQUdqQix5Q0FBUSxLQUFLQSx5Q0FBUSxHQUFHSyxHQUFHLEVBQUU7SUFFcERhLG1CQUFtQmxCLHlDQUFRO0lBQzNCbUIsdUJBQXVCbkIseUNBQVE7QUFDakMsR0FBRztBQUVIOzs7O0NBSUMsR0FDTSxNQUFNb0IsZUFBZXBCLHlDQUFRLENBQUM7QUFFckMsR0FBRztBQUVIOzs7OztDQUtDLEdBQ00sTUFBTXFCLFlBQVk7QUFFekIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ZXIvLi9zcmMvZW52L3NjaGVtYS5tanM/NDIyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8qKlxuICogU3BlY2lmeSB5b3VyIHNlcnZlci1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS5cbiAqIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHAgaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICovXG5leHBvcnQgY29uc3Qgc2VydmVyU2NoZW1hID0gei5vYmplY3Qoe1xuICBEQVRBQkFTRV9VUkw6IHouc3RyaW5nKCkudXJsKCksXG4gIE5PREVfRU5WOiB6LmVudW0oW1wiZGV2ZWxvcG1lbnRcIiwgXCJ0ZXN0XCIsIFwicHJvZHVjdGlvblwiXSksXG4gIE5FWFRBVVRIX1NFQ1JFVDpcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gei5zdHJpbmcoKS5taW4oMSlcbiAgICAgIDogei5zdHJpbmcoKS5taW4oMSkub3B0aW9uYWwoKSxcbiAgTkVYVEFVVEhfVVJMOiB6LnByZXByb2Nlc3MoXG4gICAgLy8gVGhpcyBtYWtlcyBWZXJjZWwgZGVwbG95bWVudHMgbm90IGZhaWwgaWYgeW91IGRvbid0IHNldCBORVhUQVVUSF9VUkxcbiAgICAvLyBTaW5jZSBOZXh0QXV0aC5qcyBhdXRvbWF0aWNhbGx5IHVzZXMgdGhlIFZFUkNFTF9VUkwgaWYgcHJlc2VudC5cbiAgICAoc3RyKSA9PiBwcm9jZXNzLmVudi5WRVJDRUxfVVJMID8/IHN0cixcbiAgICAvLyBWRVJDRUxfVVJMIGRvZXNuJ3QgaW5jbHVkZSBgaHR0cHNgIHNvIGl0IGNhbnQgYmUgdmFsaWRhdGVkIGFzIGEgVVJMXG4gICAgcHJvY2Vzcy5lbnYuVkVSQ0VMID8gei5zdHJpbmcoKSA6IHouc3RyaW5nKCkudXJsKCksXG4gICksXG4gIERJU0NPUkRfQ0xJRU5UX0lEOiB6LnN0cmluZygpLFxuICBESVNDT1JEX0NMSUVOVF9TRUNSRVQ6IHouc3RyaW5nKCksXG59KTtcblxuLyoqXG4gKiBTcGVjaWZ5IHlvdXIgY2xpZW50LXNpZGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHNjaGVtYSBoZXJlLlxuICogVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcCBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuXG4gKiBUbyBleHBvc2UgdGhlbSB0byB0aGUgY2xpZW50LCBwcmVmaXggdGhlbSB3aXRoIGBORVhUX1BVQkxJQ19gLlxuICovXG5leHBvcnQgY29uc3QgY2xpZW50U2NoZW1hID0gei5vYmplY3Qoe1xuICAvLyBORVhUX1BVQkxJQ19DTElFTlRWQVI6IHouc3RyaW5nKCksXG59KTtcblxuLyoqXG4gKiBZb3UgY2FuJ3QgZGVzdHJ1Y3QgYHByb2Nlc3MuZW52YCBhcyBhIHJlZ3VsYXIgb2JqZWN0LCBzbyB5b3UgaGF2ZSB0byBkb1xuICogaXQgbWFudWFsbHkgaGVyZS4gVGhpcyBpcyBiZWNhdXNlIE5leHQuanMgZXZhbHVhdGVzIHRoaXMgYXQgYnVpbGQgdGltZSxcbiAqIGFuZCBvbmx5IHVzZWQgZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBpbmNsdWRlZCBpbiB0aGUgYnVpbGQuXG4gKiBAdHlwZSB7eyBbayBpbiBrZXlvZiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+XTogei5pbmZlcjx0eXBlb2YgY2xpZW50U2NoZW1hPltrXSB8IHVuZGVmaW5lZCB9fVxuICovXG5leHBvcnQgY29uc3QgY2xpZW50RW52ID0ge1xuICAvLyBORVhUX1BVQkxJQ19DTElFTlRWQVI6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVFZBUixcbn07XG4iXSwibmFtZXMiOlsieiIsInNlcnZlclNjaGVtYSIsIm9iamVjdCIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsIk5PREVfRU5WIiwiZW51bSIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb2Nlc3MiLCJtaW4iLCJvcHRpb25hbCIsIk5FWFRBVVRIX1VSTCIsInByZXByb2Nlc3MiLCJzdHIiLCJlbnYiLCJWRVJDRUxfVVJMIiwiVkVSQ0VMIiwiRElTQ09SRF9DTElFTlRfSUQiLCJESVNDT1JEX0NMSUVOVF9TRUNSRVQiLCJjbGllbnRTY2hlbWEiLCJjbGllbnRFbnYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/env/schema.mjs\n");

/***/ }),

/***/ "(api)/./src/env/server.mjs":
/*!****************************!*\
  !*** ./src/env/server.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"env\": () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ \"(api)/./src/env/schema.mjs\");\n/* harmony import */ var _client_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.mjs */ \"(api)/./src/env/client.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// @ts-check\n/**\n * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.\n * It has to be a `.mjs`-file to be imported there.\n */ \n\nconst _serverEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.serverSchema.safeParse(process.env);\nif (!_serverEnv.success) {\n    console.error(\"❌ Invalid environment variables:\\n\", ...(0,_client_mjs__WEBPACK_IMPORTED_MODULE_1__.formatErrors)(_serverEnv.error.format()));\n    throw new Error(\"Invalid environment variables\");\n}\nfor (let key of Object.keys(_serverEnv.data)){\n    if (key.startsWith(\"NEXT_PUBLIC_\")) {\n        console.warn(\"❌ You are exposing a server-side env-variable:\", key);\n        throw new Error(\"You are exposing a server-side env-variable\");\n    }\n}\nconst env = {\n    ..._serverEnv.data,\n    ..._client_mjs__WEBPACK_IMPORTED_MODULE_1__.env\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L3NlcnZlci5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWTtBQUNaOzs7Q0FHQyxHQUMyQztBQUNrQjtBQUU5RCxNQUFNSSxhQUFhSiwrREFBc0IsQ0FBQ00sUUFBUUwsR0FBRztBQUVyRCxJQUFJLENBQUNHLFdBQVdHLE9BQU8sRUFBRTtJQUN2QkMsUUFBUUMsS0FBSyxDQUNYLHlDQUNHTix5REFBWUEsQ0FBQ0MsV0FBV0ssS0FBSyxDQUFDQyxNQUFNO0lBRXpDLE1BQU0sSUFBSUMsTUFBTSxpQ0FBaUM7QUFDbkQsQ0FBQztBQUVELEtBQUssSUFBSUMsT0FBT0MsT0FBT0MsSUFBSSxDQUFDVixXQUFXVyxJQUFJLEVBQUc7SUFDNUMsSUFBSUgsSUFBSUksVUFBVSxDQUFDLGlCQUFpQjtRQUNsQ1IsUUFBUVMsSUFBSSxDQUFDLGtEQUFrREw7UUFFL0QsTUFBTSxJQUFJRCxNQUFNLCtDQUErQztJQUNqRSxDQUFDO0FBQ0g7QUFFTyxNQUFNVixNQUFNO0lBQUUsR0FBR0csV0FBV1csSUFBSTtJQUFFLEdBQUdiLDRDQUFTO0FBQUMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ZXIvLi9zcmMvZW52L3NlcnZlci5tanM/YjAyOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcbi8qKlxuICogVGhpcyBmaWxlIGlzIGluY2x1ZGVkIGluIGAvbmV4dC5jb25maWcubWpzYCB3aGljaCBlbnN1cmVzIHRoZSBhcHAgaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICogSXQgaGFzIHRvIGJlIGEgYC5tanNgLWZpbGUgdG8gYmUgaW1wb3J0ZWQgdGhlcmUuXG4gKi9cbmltcG9ydCB7IHNlcnZlclNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYS5tanNcIjtcbmltcG9ydCB7IGVudiBhcyBjbGllbnRFbnYsIGZvcm1hdEVycm9ycyB9IGZyb20gXCIuL2NsaWVudC5tanNcIjtcblxuY29uc3QgX3NlcnZlckVudiA9IHNlcnZlclNjaGVtYS5zYWZlUGFyc2UocHJvY2Vzcy5lbnYpO1xuXG5pZiAoIV9zZXJ2ZXJFbnYuc3VjY2Vzcykge1xuICBjb25zb2xlLmVycm9yKFxuICAgIFwi4p2MIEludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzOlxcblwiLFxuICAgIC4uLmZvcm1hdEVycm9ycyhfc2VydmVyRW52LmVycm9yLmZvcm1hdCgpKSxcbiAgKTtcbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcIik7XG59XG5cbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhfc2VydmVyRW52LmRhdGEpKSB7XG4gIGlmIChrZXkuc3RhcnRzV2l0aChcIk5FWFRfUFVCTElDX1wiKSkge1xuICAgIGNvbnNvbGUud2FybihcIuKdjCBZb3UgYXJlIGV4cG9zaW5nIGEgc2VydmVyLXNpZGUgZW52LXZhcmlhYmxlOlwiLCBrZXkpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBleHBvc2luZyBhIHNlcnZlci1zaWRlIGVudi12YXJpYWJsZVwiKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW52ID0geyAuLi5fc2VydmVyRW52LmRhdGEsIC4uLmNsaWVudEVudiB9O1xuIl0sIm5hbWVzIjpbInNlcnZlclNjaGVtYSIsImVudiIsImNsaWVudEVudiIsImZvcm1hdEVycm9ycyIsIl9zZXJ2ZXJFbnYiLCJzYWZlUGFyc2UiLCJwcm9jZXNzIiwic3VjY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsImZvcm1hdCIsIkVycm9yIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJzdGFydHNXaXRoIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/env/server.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();