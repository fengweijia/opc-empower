(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/settings/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/index!./src/pages/settings/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/index!./src/pages/settings/index.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/pages/settings/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);




/**
 * 设置页面 - 飞书和大模型API配置
 * 用户自行配置ID和Key，数据存在用户自己的飞书中
 */







// 配置项

var configSections = [{
  id: 'lark',
  title: '飞书配置',
  icon: '📊',
  desc: '连接你的飞书多维表格，数据存在你手里',
  fields: [{
    key: 'appId',
    label: 'App ID',
    placeholder: '飞书应用App ID',
    type: 'text'
  }, {
    key: 'appSecret',
    label: 'App Secret',
    placeholder: '飞书应用App Secret',
    type: 'password'
  }, {
    key: 'appToken',
    label: '多维表格App Token',
    placeholder: 'bitable app token（以 b... 开头）',
    type: 'text'
  }, {
    key: 'tableId',
    label: '多维表格ID',
    placeholder: '数据存储的表格ID',
    type: 'text'
  }]
}, {
  id: 'ai',
  title: 'AI大模型配置',
  icon: '🤖',
  desc: '使用你自己的API Key，成本完全可控',
  fields: [{
    key: 'provider',
    label: '模型提供商',
    placeholder: 'openai / claude / deepseek / siliconflow / ark',
    type: 'text'
  }, {
    key: 'apiKey',
    label: 'API Key',
    placeholder: '你的API密钥',
    type: 'password'
  }, {
    key: 'apiEndpoint',
    label: 'API地址（可选）',
    placeholder: '例如 https://api.deepseek.com/v1',
    type: 'text'
  }, {
    key: 'model',
    label: '模型ID',
    placeholder: '例如 deepseek-chat / deepseek-ai/DeepSeek-V2',
    type: 'text'
  }]
}, {
  id: 'user',
  title: '个人信息',
  icon: '👤',
  desc: '完善你的赚钱档案，AI更懂你',
  fields: [{
    key: 'product',
    label: '你卖什么',
    placeholder: '产品或服务名称',
    type: 'text'
  }, {
    key: 'targetAudience',
    label: '目标客户',
    placeholder: '你的客户是谁',
    type: 'text'
  }]
}];
function SettingsPage() {
  var _useAppStore = Object(_store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(),
    config = _useAppStore.config,
    updateConfig = _useAppStore.updateConfig,
    saveConfig = _useAppStore.saveConfig,
    setLoading = _useAppStore.setLoading,
    setError = _useAppStore.setError;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
      lark: false,
      ai: false
    }),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
    testing = _useState2[0],
    setTesting = _useState2[1];
  var getProviderDefaults = function getProviderDefaults(provider) {
    var p = (provider || '').trim().toLowerCase();
    if (p === 'deepseek') return {
      apiEndpoint: 'https://api.deepseek.com/v1',
      model: 'deepseek-chat'
    };
    if (p === 'siliconflow') return {
      apiEndpoint: 'https://api.siliconflow.cn/v1',
      model: 'deepseek-ai/DeepSeek-V2'
    };
    if (p === 'claude') return {
      apiEndpoint: 'https://api.anthropic.com',
      model: 'claude-3-opus-20240229'
    };
    if (p === 'ark' || p === 'volcengine' || p === 'volc') return {
      apiEndpoint: '',
      model: ''
    };
    return {
      apiEndpoint: 'https://api.openai.com/v1',
      model: 'gpt-4'
    };
  };

  // 输入变化
  var handleInputChange = function handleInputChange(section, key, value) {
    if (section === 'ai' && key === 'provider') {
      var nextProvider = value;
      var prevProvider = config.ai.provider;
      updateConfig(section, key, nextProvider);
      var prevDefaults = getProviderDefaults(prevProvider);
      var nextDefaults = getProviderDefaults(nextProvider);
      var currModel = config.ai.model;
      var shouldUpdateModel = !currModel || currModel === prevDefaults.model || currModel === 'gpt-4';
      if (shouldUpdateModel) {
        updateConfig('ai', 'model', nextDefaults.model);
      }
      if (!config.ai.apiEndpoint) {
        updateConfig('ai', 'apiEndpoint', nextDefaults.apiEndpoint);
      }
      return;
    }
    updateConfig(section, key, value);
  };

  // 测试飞书连接
  var testLarkConnection = /*#__PURE__*/function () {
    var _ref = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee() {
      var _t;
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(!config.lark.appId || !config.lark.appSecret || !config.lark.appToken || !config.lark.tableId)) {
              _context.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: '请填写飞书配置',
              icon: 'error'
            });
            return _context.a(2);
          case 1:
            setTesting(function (prev) {
              return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, prev), {}, {
                lark: true
              });
            });
            setLoading(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading({
              title: '测试中...'
            });
            _context.p = 2;
            _context.n = 3;
            return _services_api__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].testLarkConnection(config.lark);
          case 3:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: '连接成功',
              icon: 'success'
            });
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('飞书连接测试失败:', _t);
            setError(_t.message);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: _t.message || '连接失败',
              icon: 'error'
            });
          case 5:
            _context.p = 5;
            setTesting(function (prev) {
              return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, prev), {}, {
                lark: false
              });
            });
            setLoading(false);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return function testLarkConnection() {
      return _ref.apply(this, arguments);
    };
  }();

  // 测试AI API
  var testAIConnection = /*#__PURE__*/function () {
    var _ref2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee2() {
      var _t2;
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (config.ai.apiKey) {
              _context2.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: '请填写API Key',
              icon: 'error'
            });
            return _context2.a(2);
          case 1:
            setTesting(function (prev) {
              return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, prev), {}, {
                ai: true
              });
            });
            setLoading(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading({
              title: '测试中...'
            });
            _context2.p = 2;
            _context2.n = 3;
            return _services_api__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].testAIConnection(config.ai);
          case 3:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: 'API可用',
              icon: 'success'
            });
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error('AI API测试失败:', _t2);
            setError(_t2.message);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: _t2.message || '测试失败',
              icon: 'error'
            });
          case 5:
            _context2.p = 5;
            setTesting(function (prev) {
              return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, prev), {}, {
                ai: false
              });
            });
            setLoading(false);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
            return _context2.f(5);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4, 5, 6]]);
    }));
    return function testAIConnection() {
      return _ref2.apply(this, arguments);
    };
  }();

  // 保存配置
  var saveConfigs = /*#__PURE__*/function () {
    var _ref3 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee3() {
      var _t3;
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return saveConfig();
          case 1:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: '配置已保存',
              icon: 'success'
            });
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            console.error('保存配置失败:', _t3);
            setError(_t3.message);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: '保存失败',
              icon: 'error'
            });
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function saveConfigs() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
    className: "settings-page",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
      className: "page-header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
        className: "page-title",
        children: "\u8BBE\u7F6E"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
      className: "settings-content",
      children: configSections.map(function (section) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
          className: "config-section",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
            className: "section-header",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
              className: "section-icon",
              children: section.icon
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
              className: "section-info",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
                className: "section-title",
                children: section.title
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
                className: "section-desc",
                children: section.desc
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
            className: "section-fields",
            children: section.fields.map(function (field) {
              var _config$section$id;
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
                className: "field-item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
                  className: "field-label",
                  children: field.label
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Input */ "b"], {
                  className: "field-input",
                  type: field.type === 'password' ? 'text' : 'text',
                  password: field.type === 'password',
                  placeholder: field.placeholder,
                  value: ((_config$section$id = config[section.id]) === null || _config$section$id === void 0 ? void 0 : _config$section$id[field.key]) || '',
                  onInput: function onInput(e) {
                    return handleInputChange(section.id, field.key, e.detail.value);
                  }
                })]
              }, field.key);
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
            className: "section-actions",
            children: [section.id === 'lark' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
              className: "btn btn-secondary ".concat(testing.lark ? 'btn-disabled' : ''),
              onClick: testLarkConnection,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
                children: testing.lark ? '测试中...' : '测试连接'
              })
            }), section.id === 'ai' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
              className: "btn btn-secondary ".concat(testing.ai ? 'btn-disabled' : ''),
              onClick: testAIConnection,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
                children: testing.ai ? '测试中...' : '测试API'
              })
            })]
          })]
        }, section.id);
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
      className: "save-section",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
        className: "btn btn-primary w-full",
        onClick: saveConfigs,
        children: "\u4FDD\u5B58\u914D\u7F6E"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
        className: "save-tip",
        children: "\u63D0\u793A\uFF1A\u914D\u7F6E\u4FDD\u5B58\u5728\u4F60\u7684\u8BBE\u5907\u672C\u5730\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "f"], {
      className: "footer-info",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
        className: "version",
        children: "OPC\u8D5A\u94B1\u519B\u5E08 v1.0.0"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "d"], {
        className: "copyright",
        children: "\u8BA9\u6BCF\u4E2AOPC\u90FD\u80FD\u7528AI\u8D5A\u5230\u94B1"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/settings/index.scss":
/*!***************************************!*\
  !*** ./src/pages/settings/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/settings/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/settings/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/index!./src/pages/settings/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/settings/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ })

},[["./src/pages/settings/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map