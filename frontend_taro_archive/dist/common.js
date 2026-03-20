(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/StateFeedback/EmptyState.tsx":
/*!*****************************************************!*\
  !*** ./src/components/StateFeedback/EmptyState.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyState; });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/StateFeedback/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function EmptyState(_ref) {
  var _ref$message = _ref.message,
    message = _ref$message === void 0 ? '你还没有生成过发售计划，点击下方按钮，开始你的第一次发售。' : _ref$message,
    _ref$actionText = _ref.actionText,
    actionText = _ref$actionText === void 0 ? '立即开启' : _ref$actionText,
    onAction = _ref.onAction;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "f"], {
    className: "state-feedback empty-state",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "f"], {
      className: "icon",
      children: "\uD83D\uDE80"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Text */ "d"], {
      className: "message",
      children: message
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Button */ "a"], {
      className: "action-btn",
      onClick: onAction,
      children: actionText
    })]
  });
}

/***/ }),

/***/ "./src/components/StateFeedback/ErrorState.tsx":
/*!*****************************************************!*\
  !*** ./src/components/StateFeedback/ErrorState.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorState; });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/StateFeedback/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ErrorState(_ref) {
  var _ref$message = _ref.message,
    message = _ref$message === void 0 ? '军师的大脑刚才走神了，请再试一次。' : _ref$message,
    onRetry = _ref.onRetry;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "f"], {
    className: "state-feedback error-state",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "f"], {
      className: "icon",
      children: "\uD83C\uDF75"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Text */ "d"], {
      className: "message",
      children: message
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Button */ "a"], {
      className: "retry-btn",
      onClick: onRetry,
      children: "\u91CD\u65B0\u751F\u6210"
    })]
  });
}

/***/ }),

/***/ "./src/components/StateFeedback/LoadingSkeleton.tsx":
/*!**********************************************************!*\
  !*** ./src/components/StateFeedback/LoadingSkeleton.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSkeleton; });
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/components/StateFeedback/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function LoadingSkeleton(_ref) {
  var _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? ['正在调取直复式营销方法论...', '正在分析你的能力圈...', '生成专属路径中...'] : _ref$messages;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    msgIndex = _useState2[0],
    setMsgIndex = _useState2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var timer = setInterval(function () {
      setMsgIndex(function (prev) {
        return (prev + 1) % messages.length;
      });
    }, 2000);
    return function () {
      return clearInterval(timer);
    };
  }, [messages]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
    className: "loading-skeleton",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
      className: "marquee-box",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
        className: "marquee-text",
        children: messages[msgIndex]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
      className: "skeleton-card",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "sk-title"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "sk-line w-100"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "sk-line w-80"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "sk-line w-60"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
      className: "skeleton-card",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "sk-title"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "sk-line w-90"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "sk-line w-70"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/StateFeedback/index.scss":
/*!*************************************************!*\
  !*** ./src/components/StateFeedback/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/StateFeedback/index.ts":
/*!***********************************************!*\
  !*** ./src/components/StateFeedback/index.ts ***!
  \***********************************************/
/*! exports provided: LoadingSkeleton, ErrorState, EmptyState */
/*! exports used: EmptyState, ErrorState, LoadingSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LoadingSkeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSkeleton */ "./src/components/StateFeedback/LoadingSkeleton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _LoadingSkeleton__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _ErrorState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorState */ "./src/components/StateFeedback/ErrorState.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _ErrorState__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyState */ "./src/components/StateFeedback/EmptyState.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _EmptyState__WEBPACK_IMPORTED_MODULE_2__["a"]; });





/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);





/**
 * API服务封装
 * 处理与Serverless后端的通信
 */



// 统一API前缀配置
// 本地开发测试可使用 http://localhost:3000/api
// 云端部署后替换为云函数URL，例如: https://xxx.run.app/api
var API_BASE_URL = 'http://localhost:3000/api';
var APIService = /*#__PURE__*/function () {
  function APIService() {
    Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, APIService);
    Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "baseUrl", void 0);
    this.baseUrl = API_BASE_URL;
  }
  return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(APIService, [{
    key: "formatRequestError",
    value: function formatRequestError(error, url) {
      var raw = ((error === null || error === void 0 ? void 0 : error.errMsg) || (error === null || error === void 0 ? void 0 : error.message) || '').toString();
      if (raw.includes('url not in domain list')) {
        return new Error('请求域名不在合法域名列表中，请在开发者工具勾选“不校验合法域名…”或改用已配置的 HTTPS 域名');
      }
      if (raw.includes('ERR_CONNECTION_REFUSED') || raw.includes('ECONNREFUSED')) {
        return new Error("\u65E0\u6CD5\u8FDE\u63A5\u540E\u7AEF\u670D\u52A1\uFF1A".concat(url, "\u3002\u8BF7\u786E\u8BA4\u540E\u7AEF\u5DF2\u542F\u52A8\uFF08backend/node test-server.js\uFF09\uFF0C\u6216\u8BBE\u7F6E opc_api_base_url \u6307\u5411\u53EF\u8BBF\u95EE\u7684\u5730\u5740"));
      }
      if (raw.includes('timeout') || raw.includes('timed out')) {
        return new Error('请求超时，请检查网络或后端服务状态');
      }
      return new Error(raw || '请求失败，请检查网络与后端服务状态');
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl() {
      try {
        var v = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getStorageSync('opc_api_base_url');
        if (typeof v === 'string' && v.trim()) return v.trim();
      } catch (_) {}
      return this.baseUrl;
    }

    // 通用请求方法
  }, {
    key: "request",
    value: function () {
      var _request = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee(endpoint) {
        var data,
          resolvedEndpoint,
          baseUrl,
          url,
          response,
          result,
          _args = arguments,
          _t;
        return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              _context.p = 1;
              resolvedEndpoint = endpoint === '/api/main' ? '/' : endpoint;
              baseUrl = this.getBaseUrl();
              url = "".concat(baseUrl).concat(resolvedEndpoint);
              _context.n = 2;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.request({
                url: url,
                method: 'POST',
                data: data,
                header: {
                  'content-type': 'application/json'
                }
              });
            case 2:
              response = _context.v;
              result = response.data;
              if (result.success) {
                _context.n = 3;
                break;
              }
              throw new Error(result.message || 'API请求失败');
            case 3:
              return _context.a(2, result.data);
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('API请求错误:', _t);
              throw this.formatRequestError(_t, "".concat(this.getBaseUrl()).concat(endpoint === '/api/main' ? '/' : endpoint));
            case 5:
              return _context.a(2);
          }
        }, _callee, this, [[1, 4]]);
      }));
      function request(_x) {
        return _request.apply(this, arguments);
      }
      return request;
    }() // 获取可用Agent列表
  }, {
    key: "getAgents",
    value: function () {
      var _getAgents = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee2() {
        return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, this.request('/', {
                action: 'getAgents'
              }));
          }
        }, _callee2, this);
      }));
      function getAgents() {
        return _getAgents.apply(this, arguments);
      }
      return getAgents;
    }() // 执行Agent请求
  }, {
    key: "executeAgent",
    value: function () {
      var _executeAgent = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee3(params) {
        return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2, this.request('/', {
                action: 'executeAgent',
                params: params
              }));
          }
        }, _callee3, this);
      }));
      function executeAgent(_x2) {
        return _executeAgent.apply(this, arguments);
      }
      return executeAgent;
    }() // 测试飞书连接
  }, {
    key: "testLarkConnection",
    value: function () {
      var _testLarkConnection = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee4(config) {
        return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2, this.request('/', {
                action: 'testLark',
                params: config
              }));
          }
        }, _callee4, this);
      }));
      function testLarkConnection(_x3) {
        return _testLarkConnection.apply(this, arguments);
      }
      return testLarkConnection;
    }() // 测试AI API连接
  }, {
    key: "testAIConnection",
    value: function () {
      var _testAIConnection = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee5(config) {
        return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              return _context5.a(2, this.request('/', {
                action: 'testAI',
                params: config
              }));
          }
        }, _callee5, this);
      }));
      function testAIConnection(_x4) {
        return _testAIConnection.apply(this, arguments);
      }
      return testAIConnection;
    }() // 获取历史记录
  }, {
    key: "getHistory",
    value: function () {
      var _getHistory = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee6(config, userId) {
        var pageSize,
          _args6 = arguments;
        return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              pageSize = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : 20;
              return _context6.a(2, this.request('/', {
                action: 'getHistory',
                params: {
                  larkConfig: config,
                  userId: userId,
                  pageSize: pageSize
                }
              }));
          }
        }, _callee6, this);
      }));
      function getHistory(_x5, _x6) {
        return _getHistory.apply(this, arguments);
      }
      return getHistory;
    }() // 健康检查
  }, {
    key: "healthCheck",
    value: function () {
      var _healthCheck = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee7() {
        return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              return _context7.a(2, this.request('/', {
                action: 'health'
              }));
          }
        }, _callee7, this);
      }));
      function healthCheck() {
        return _healthCheck.apply(this, arguments);
      }
      return healthCheck;
    }()
  }]);
}(); // 创建单例
var apiService = new APIService();
/* harmony default export */ __webpack_exports__["a"] = (apiService);

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/index.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zustand/middleware */ "./node_modules/zustand/middleware.js");
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zustand_middleware__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);





/**
 * 全局状态管理
 * 使用Zustand管理用户配置、AI结果等状态
 */




// 状态类型定义

// 默认配置
var defaultConfig = {
  lark: {
    appId: '',
    appSecret: '',
    appToken: '',
    tableId: ''
  },
  ai: {
    provider: 'openai',
    apiKey: '',
    apiEndpoint: '',
    model: 'gpt-4'
  },
  user: {
    userId: "u_".concat(Date.now(), "_").concat(Math.random().toString(16).slice(2)),
    product: '',
    targetAudience: ''
  }
};

// 创建store
var useAppStore = Object(zustand__WEBPACK_IMPORTED_MODULE_5__["create"])()(Object(zustand_middleware__WEBPACK_IMPORTED_MODULE_6__["persist"])(function (set, get) {
  return {
    // 初始状态
    config: defaultConfig,
    history: [],
    currentResult: null,
    loading: false,
    error: null,
    // 更新配置
    updateConfig: function updateConfig(section, key, value) {
      set(function (state) {
        return {
          config: Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, state.config), {}, Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, section, Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, state.config[section]), {}, Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, key, value))))
        };
      });
    },
    // 保存配置到本地存储
    saveConfig: function () {
      var _saveConfig = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().m(function _callee() {
        var _t;
        return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setStorage({
                key: 'opc_config',
                data: get().config
              });
            case 1:
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('保存配置失败:', _t);
              throw _t;
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      function saveConfig() {
        return _saveConfig.apply(this, arguments);
      }
      return saveConfig;
    }(),
    // 添加到历史记录
    addToHistory: function addToHistory(record) {
      set(function (state) {
        return {
          history: [record].concat(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state.history)).slice(0, 100) // 最多保存100条
        };
      });
    },
    // 清空历史记录
    clearHistory: function clearHistory() {
      set({
        history: []
      });
    },
    // 设置当前结果
    setCurrentResult: function setCurrentResult(result) {
      set({
        currentResult: result
      });
    },
    // 设置加载状态
    setLoading: function setLoading(loading) {
      set({
        loading: loading
      });
    },
    // 设置错误信息
    setError: function setError(error) {
      set({
        error: error
      });
    },
    // 重置状态
    reset: function reset() {
      set({
        config: defaultConfig,
        history: [],
        currentResult: null,
        loading: false,
        error: null
      });
    }
  };
}, {
  name: 'opc-app-storage',
  version: 1,
  storage: Object(zustand_middleware__WEBPACK_IMPORTED_MODULE_6__["createJSONStorage"])(function () {
    return {
      getItem: function () {
        var _getItem = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().m(function _callee2(name) {
          var _data, res, _t2;
          return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                _context2.p = 0;
                _context2.n = 1;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getStorage({
                  key: name
                });
              case 1:
                res = _context2.v;
                return _context2.a(2, (_data = res === null || res === void 0 ? void 0 : res.data) !== null && _data !== void 0 ? _data : null);
              case 2:
                _context2.p = 2;
                _t2 = _context2.v;
                return _context2.a(2, null);
            }
          }, _callee2, null, [[0, 2]]);
        }));
        function getItem(_x) {
          return _getItem.apply(this, arguments);
        }
        return getItem;
      }(),
      setItem: function () {
        var _setItem = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().m(function _callee3(name, value) {
          var _t3;
          return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                _context3.p = 0;
                _context3.n = 1;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setStorage({
                  key: name,
                  data: value
                });
              case 1:
                _context3.n = 3;
                break;
              case 2:
                _context3.p = 2;
                _t3 = _context3.v;
              case 3:
                return _context3.a(2);
            }
          }, _callee3, null, [[0, 2]]);
        }));
        function setItem(_x2, _x3) {
          return _setItem.apply(this, arguments);
        }
        return setItem;
      }(),
      removeItem: function () {
        var _removeItem = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().m(function _callee4(name) {
          var _t4;
          return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().w(function (_context4) {
            while (1) switch (_context4.p = _context4.n) {
              case 0:
                _context4.p = 0;
                _context4.n = 1;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.removeStorage({
                  key: name
                });
              case 1:
                _context4.n = 3;
                break;
              case 2:
                _context4.p = 2;
                _t4 = _context4.v;
              case 3:
                return _context4.a(2);
            }
          }, _callee4, null, [[0, 2]]);
        }));
        function removeItem(_x4) {
          return _removeItem.apply(this, arguments);
        }
        return removeItem;
      }()
    };
  }),
  migrate: function migrate(persistedState) {
    var next = persistedState || {};
    var nextConfig = next.config || defaultConfig;
    var nextUser = nextConfig.user || defaultConfig.user;
    var userId = nextUser.userId || "u_".concat(Date.now(), "_").concat(Math.random().toString(16).slice(2));
    return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, next), {}, {
      config: Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, defaultConfig), nextConfig), {}, {
        lark: Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, defaultConfig.lark), nextConfig.lark || {}),
        ai: Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, defaultConfig.ai), nextConfig.ai || {}),
        user: Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, defaultConfig.user), nextConfig.user || {}), {}, {
          userId: userId
        })
      })
    });
  },
  partialize: function partialize(state) {
    return {
      config: state.config,
      history: state.history
    };
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (useAppStore);

/***/ })

}]);
//# sourceMappingURL=common.js.map