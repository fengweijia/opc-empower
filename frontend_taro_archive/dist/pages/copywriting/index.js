(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/copywriting/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/copywriting/index!./src/pages/copywriting/index.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/copywriting/index!./src/pages/copywriting/index.tsx ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopywritingPage; });
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.scss */ "./src/pages/copywriting/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);






/**
 * 朋友圈卖货文案生成页
 * 核心AI功能：首个开发的赚钱Agent
 */







// 文案类型选项

var copyTypes = [{
  id: 'friendship_ads',
  name: '朋友圈卖货文案',
  desc: '5条即发即用的朋友圈文案'
}, {
  id: 'private_chat',
  name: '私聊成交话术',
  desc: '含异议处理的对话脚本'
}, {
  id: 'redbook_posts',
  name: '小红书种草文案',
  desc: '标题+正文+标签全套生成'
}, {
  id: 'official_account',
  name: '公众号销售长文',
  desc: '2000字完整销售信'
}, {
  id: 'community_script',
  name: '社群发售脚本',
  desc: '7天完整发售节奏+文案'
}, {
  id: 'copy_diagnosis',
  name: '文案诊断优化',
  desc: '粘贴你的文案，AI帮你改'
}];

// 模拟生成的一个文案结果
var mockResult = [{
  index: 1,
  title: '文案①：痛点型（戳中焦虑）',
  content: "\u505A\u8FD0\u84253\u5E74\uFF0C\u6BCF\u5929\u91CD\u590D\u7740\n\u590D\u5236\u7C98\u8D34\u3001\u5BFC\u6570\u636E\u3001\u505A\u65E5\u62A5\u3002\n\n\u76F4\u5230\u6211\u7528Python\u5199\u4E86\u4E2A\u811A\u672C\uFF0C\n\u628A8\u5C0F\u65F6\u7684\u6D3B\u538B\u7F29\u523015\u5206\u949F\u3002\n\n\u8001\u677F\u4EE5\u4E3A\u6211\u5728\u52A0\u73ED\u51B2\u4E1A\u7EE9\uFF0C\n\u5176\u5B9E\u6211\u5728\u5E26\u85AA\u6478\u9C7C\u3002\n\n\u6211\u628A\u8FD9\u5957\u65B9\u6CD5\u6574\u7406\u6210\u4E86\u8BFE\uFF0C\n0\u57FA\u7840\u4E5F\u80FD\u5B66\u4F1A\u3002\n\u9650\u65F6199\uFF0C\u4ECA\u665A12\u70B9\u6062\u590D399\u3002\n\uD83D\uDC47 \u626B\u7801\u4E86\u89E3",
  strategy_analysis: '钩子→痛点共鸣（运营日常焦虑），中段→个人故事（社会证明），结尾→CTA+限时紧迫感'
}, {
  index: 2,
  title: '文案②：成果型（展示结果）',
  content: "3\u4E2A\u6708\u524D\uFF0C\u6211\u8FD8\u662F\u4E2A\u6708\u85AA5\u5343\u7684\u8FD0\u8425\u3002\n\n\u73B0\u5728\uFF0C\u6211\u7528 Python \u81EA\u52A8\u5316\uFF0C\n\u6BCF\u6708\u591A\u8D5A 1 \u4E07 2\u3002\n\n\u4E0D\u9700\u8981\u5199\u4EE3\u7801\u57FA\u7840\uFF0C\n\u53EA\u8981\u4F1A\u7528\u7535\u8111\u5C31\u80FD\u5B66\u3002\n\n29 \u4E2A\u4EBA\u5DF2\u7ECF\u62A5\u540D\uFF0C\n\u5E73\u5747 4 \u5929\u56DE\u672C\u3002\n\n\u540D\u989D\u6709\u9650\uFF0C\u626B\u7801\u62A2\u5360\u3002",
  strategy_analysis: '钩子→成果展示（收入数字冲击），中段→数据证明（29人平均4天回本），结尾→紧迫感（名额有限）'
}, {
  index: 3,
  title: '文案③：对话型（场景代入）',
  content: "\u7C89\u4E1D\u79C1\u4FE1\u95EE\u6211\uFF1A\n\"\u535A\u4E3B\uFF0C\u6211\u5DE5\u8D44\u6708\u5149\uFF0C\u60F3\u5B66\u70B9\u6280\u80FD\u8BE5\u548B\u6574\uFF1F\"\n\n\u6211\u8BF4\uFF1A\u522B\u6025\u7740\u62A5\u73ED\uFF0C\n\u5148\u8BD5\u8BD5\u7528 Python \u81EA\u52A8\u5316\u4F60\u7684\u5DE5\u4F5C\u3002\n\n\u5979\u5B66\u4E86 2 \u5468\uFF0C\n\u73B0\u5728\u6BCF\u5929\u5C11\u5E72 2 \u5C0F\u65F6\uFF0C\n\u8FD8\u80FD\u7528\u6280\u80FD\u63A5\u526F\u4E1A\u3002\n\n\u60F3\u4E86\u89E3\u7684\uFF0C\u70B9\u4E0B\u65B9\u94FE\u63A5\u3002",
  strategy_analysis: '钩子→粉丝提问（场景代入），中段→案例故事（真实案例），结尾→行动引导'
}];
function CopywritingPage() {
  var _useAppStore = Object(_store__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(),
    config = _useAppStore.config,
    addToHistory = _useAppStore.addToHistory,
    setLoading = _useAppStore.setLoading,
    setError = _useAppStore.setError;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(1),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1]; // 1:选择类型  2:填写信息  3:生成结果
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
    _useState4 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState3, 2),
    copyType = _useState4[0],
    setCopyType = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
      product: config.user.product || '',
      targetAudience: config.user.targetAudience || '',
      price: '',
      objective: '',
      style: ''
    }),
    _useState6 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState5, 2),
    productInfo = _useState6[0],
    setProductInfo = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
    _useState8 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState7, 2),
    results = _useState8[0],
    setResults = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
    _useState0 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState9, 2),
    currentIndex = _useState0[0],
    setCurrentIndex = _useState0[1];
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    setProductInfo(function (prev) {
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, prev), {}, {
        product: prev.product || config.user.product || '',
        targetAudience: prev.targetAudience || config.user.targetAudience || ''
      });
    });
  }, [config.user.product, config.user.targetAudience]);
  var tryParseJsonFromText = function tryParseJsonFromText(text) {
    var trimmed = (text || '').trim();
    if (!trimmed) return null;
    var fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    var candidate = ((fenced === null || fenced === void 0 ? void 0 : fenced[1]) || trimmed).trim();
    var tryParse = function tryParse(s) {
      try {
        return JSON.parse(s);
      } catch (_) {
        return null;
      }
    };
    if (candidate.startsWith('{') || candidate.startsWith('[')) {
      var parsed = tryParse(candidate);
      if (parsed) return parsed;
    }
    var firstObj = candidate.indexOf('{');
    var lastObj = candidate.lastIndexOf('}');
    if (firstObj !== -1 && lastObj !== -1 && lastObj > firstObj) {
      var _parsed = tryParse(candidate.slice(firstObj, lastObj + 1));
      if (_parsed) return _parsed;
    }
    var firstArr = candidate.indexOf('[');
    var lastArr = candidate.lastIndexOf(']');
    if (firstArr !== -1 && lastArr !== -1 && lastArr > firstArr) {
      var _parsed2 = tryParse(candidate.slice(firstArr, lastArr + 1));
      if (_parsed2) return _parsed2;
    }
    return null;
  };
  var normalizeResultItem = function normalizeResultItem(item, index) {
    var _ref, _ref2, _ref3, _ref4, _item$content, _ref5, _ref6, _item$strategy_analys;
    if (typeof item === 'string') {
      return {
        index: index + 1,
        title: "\u6587\u6848".concat(index + 1),
        content: item,
        strategy_analysis: ''
      };
    }
    if (!item || Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(item) !== 'object') return null;
    var title = (item.title || item.name || "\u6587\u6848".concat(index + 1)).toString();
    var rawContent = (_ref = (_ref2 = (_ref3 = (_ref4 = (_item$content = item.content) !== null && _item$content !== void 0 ? _item$content : item.text) !== null && _ref4 !== void 0 ? _ref4 : item.body) !== null && _ref3 !== void 0 ? _ref3 : item.copy) !== null && _ref2 !== void 0 ? _ref2 : item.output) !== null && _ref !== void 0 ? _ref : '';
    var rawAnalysis = (_ref5 = (_ref6 = (_item$strategy_analys = item.strategy_analysis) !== null && _item$strategy_analys !== void 0 ? _item$strategy_analys : item.strategy) !== null && _ref6 !== void 0 ? _ref6 : item.analysis) !== null && _ref5 !== void 0 ? _ref5 : '';
    var content = typeof rawContent === 'string' ? rawContent : JSON.stringify(rawContent, null, 2);
    var strategy_analysis = typeof rawAnalysis === 'string' ? rawAnalysis : JSON.stringify(rawAnalysis, null, 2);
    return {
      index: typeof item.index === 'number' ? item.index : index + 1,
      title: title,
      content: content,
      strategy_analysis: strategy_analysis
    };
  };
  var normalizeResults = function normalizeResults(raw) {
    var candidate = raw;
    while (candidate && Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(candidate) === 'object' && 'data' in candidate && (candidate.success === true || 'format' in candidate || 'isMock' in candidate)) {
      candidate = candidate.data;
    }
    if (typeof candidate === 'string') {
      var parsed = tryParseJsonFromText(candidate);
      if (parsed) candidate = parsed;
    }
    if (Array.isArray(candidate)) {
      return candidate.map(function (it, idx) {
        return normalizeResultItem(it, idx);
      }).filter(function (x) {
        return Boolean(x);
      });
    }
    if (candidate && Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(candidate) === 'object') {
      var one = normalizeResultItem(candidate, 0);
      if (one) return [one];
      return [{
        index: 1,
        title: '生成结果',
        content: JSON.stringify(candidate, null, 2),
        strategy_analysis: ''
      }];
    }
    if (typeof candidate === 'string' && candidate.trim()) {
      return [{
        index: 1,
        title: '生成结果',
        content: candidate,
        strategy_analysis: ''
      }];
    }
    return [];
  };

  // 选择文案类型
  var selectType = function selectType(type) {
    setCopyType(type.id);
    setStep(2);
  };

  // 填写产品信息
  var handleInputChange = function handleInputChange(field, value) {
    setProductInfo(function (prev) {
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, prev), {}, Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, field, value));
    });
  };

  // 生成文案
  var generateCopy = /*#__PURE__*/function () {
    var _ref7 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee() {
      var result, normalized, record, _t;
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (config.ai.apiKey) {
              _context.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
              title: '请先配置AI API Key',
              icon: 'error'
            });
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
              url: '/pages/settings/index'
            });
            return _context.a(2);
          case 1:
            if (!(!productInfo.product || !productInfo.targetAudience)) {
              _context.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
              title: '请填写产品信息和目标客户',
              icon: 'error'
            });
            return _context.a(2);
          case 2:
            _context.p = 2;
            setLoading(true);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showLoading({
              title: 'AI生成中...'
            });

            // 调用API
            _context.n = 3;
            return _services_api__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].executeAgent({
              agentType: 'copywriting',
              skillType: copyType,
              config: {
                aiConfig: {
                  provider: config.ai.provider,
                  apiKey: config.ai.apiKey,
                  apiEndpoint: config.ai.apiEndpoint,
                  model: config.ai.model
                },
                larkConfig: config.lark.appId ? config.lark : null
              },
              userParams: Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, productInfo), {}, {
                userId: config.user.userId
              })
            });
          case 3:
            result = _context.v;
            normalized = normalizeResults(result);
            if (normalized.length) {
              _context.n = 4;
              break;
            }
            throw new Error('生成结果为空，请稍后重试');
          case 4:
            // 保存到历史记录
            record = {
              id: "gen_".concat(Date.now()),
              agentType: 'copywriting',
              skillType: copyType,
              inputParams: productInfo,
              outputContent: result,
              generatedAt: new Date().toISOString(),
              strategyTags: ['朋友圈文案', '直复式营销']
            };
            addToHistory(record);
            setResults(normalized);
            setStep(3);
            setCurrentIndex(0);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
              title: '生成成功',
              icon: 'success'
            });
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.error('生成文案失败:', _t);
            setError(_t.message);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
              title: _t.message || '生成失败',
              icon: 'error'
            });

            // 如果API失败，使用模拟数据
            setResults(mockResult);
            setStep(3);
            setCurrentIndex(0);
          case 6:
            _context.p = 6;
            setLoading(false);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.hideLoading();
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[2, 5, 6, 7]]);
    }));
    return function generateCopy() {
      return _ref7.apply(this, arguments);
    };
  }();

  // 复制文案
  var copyToClipboard = function copyToClipboard(text) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.setClipboardData({
      data: text,
      success: function success() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
          title: '已复制',
          icon: 'success'
        });
      }
    });
  };

  // 返回
  var goBack = function goBack() {
    if (step > 1) {
      setStep(step - 1);
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateBack();
    }
  };

  // 渲染步骤1：选择类型
  var renderStep1 = function renderStep1() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
      className: "type-selection",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
        className: "page-title",
        children: "\u4F60\u60F3\u751F\u6210\u4EC0\u4E48\u6587\u6848\uFF1F"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "type-grid",
        children: copyTypes.map(function (type) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
            className: "type-card",
            onClick: function onClick() {
              return selectType(type);
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "type-name",
              children: type.name
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "type-desc",
              children: type.desc
            })]
          }, type.id);
        })
      })]
    });
  };

  // 渲染步骤2：填写信息
  var renderStep2 = function renderStep2() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
      className: "info-form",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
        className: "page-title",
        children: "\u544A\u8BC9\u6211\u66F4\u591A\u7EC6\u8282"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
          className: "form-label",
          children: "\u4F60\u5728\u5356\u4EC0\u4E48\uFF1F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "input-wrapper",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Textarea */ "e"], {
            className: "input",
            placeholder: "\u4F8B\uFF1APython\u81EA\u52A8\u5316\u8BFE\u7A0B",
            value: productInfo.product,
            onInput: function onInput(e) {
              return handleInputChange('product', e.detail.value);
            }
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
          className: "form-label",
          children: "\u5356\u7ED9\u8C01\uFF1F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "input-wrapper",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Textarea */ "e"], {
            className: "input",
            placeholder: "\u4F8B\uFF1A\u60F3\u63D0\u6548\u7684\u8FD0\u8425\u4EBA\u5458",
            value: productInfo.targetAudience,
            onInput: function onInput(e) {
              return handleInputChange('targetAudience', e.detail.value);
            }
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
          className: "form-label",
          children: "\u4F60\u7684\u4EF7\u683C\uFF1F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "price-options",
          children: ['0-99', '100-499', '500-1999', '2000+'].map(function (price) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
              className: "price-option ".concat(productInfo.price === price ? 'active' : ''),
              onClick: function onClick() {
                return handleInputChange('price', price);
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
                children: price
              })
            }, price);
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
          className: "form-label",
          children: "\u6587\u6848\u76EE\u6807\uFF1F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "objective-options",
          children: [{
            id: 'direct_sale',
            name: '直接成交'
          }, {
            id: '引流',
            name: '引流加微信'
          }, {
            id: 'presell',
            name: '预热种草'
          }, {
            id: 'promotion',
            name: '促销活动'
          }].map(function (obj) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
              className: "objective-option ".concat(productInfo.objective === obj.id ? 'active' : ''),
              onClick: function onClick() {
                return handleInputChange('objective', obj.id);
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
                children: obj.name
              })
            }, obj.id);
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "btn-group",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "btn btn-primary",
          onClick: generateCopy,
          children: "\u751F\u6210\u6587\u6848"
        })
      })]
    });
  };

  // 渲染步骤3：生成结果
  var renderStep3 = function renderStep3() {
    var current = results[currentIndex];
    if (!current) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "result-view",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "result-card",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
            className: "result-title",
            children: "\u6682\u65E0\u751F\u6210\u7ED3\u679C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
            className: "result-actions",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
              className: "btn btn-secondary",
              onClick: goBack,
              children: "\u8FD4\u56DE"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
              className: "btn btn-primary",
              onClick: generateCopy,
              children: "\u91CD\u65B0\u751F\u6210"
            })]
          })]
        })
      });
    }
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
      className: "result-view",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "c"], {
        scrollY: true,
        className: "results-scroll",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "result-card",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
            className: "result-header",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "result-title",
              children: current.title
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "result-divider",
              children: "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
            className: "result-content",
            children: current.content
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
            className: "strategy-section",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "strategy-label",
              children: "\u7B56\u7565\u89E3\u6790\uFF1A"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "strategy-content",
              children: current.strategy_analysis
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
            className: "result-actions",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
              className: "btn btn-primary",
              onClick: function onClick() {
                return copyToClipboard((current.content || '').toString());
              },
              children: "\u590D\u5236\u6587\u6848"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
              className: "btn btn-secondary",
              onClick: generateCopy,
              children: "\u6362\u4E00\u7248"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
              className: "btn btn-text",
              onClick: function onClick() {
                return results.length <= 1 ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
                  title: '只有一条结果',
                  icon: 'none'
                }) : setCurrentIndex(function (prev) {
                  return (prev + 1) % results.length;
                });
              },
              children: "\u4E0B\u4E00\u6761 \u2192"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
          className: "feedback-section",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
            className: "feedback-label",
            children: "\u8FD9\u6761\u5185\u5BB9\u5BF9\u4F60\u6709\u5E2E\u52A9\u5417\uFF1F"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
            className: "feedback-options",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "feedback-icon",
              children: "\uD83D\uDC4E"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "feedback-icon",
              children: "\uD83D\uDE10"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "feedback-icon",
              children: "\uD83D\uDC4D"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
              className: "feedback-icon",
              children: "\uD83D\uDD25"
            })]
          })]
        })]
      })
    });
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
    className: "copywriting-page",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
      className: "page-header",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "back-btn",
        onClick: goBack,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
          children: "\u2190 \u8FD4\u56DE"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "d"], {
        className: "page-title-main",
        children: [step === 1 && '赚钱文案', step === 2 && '填写信息', step === 3 && '生成结果']
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
        className: "placeholder"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "f"], {
      className: "page-content",
      children: [step === 1 && renderStep1(), step === 2 && renderStep2(), step === 3 && renderStep3()]
    })]
  });
}

/***/ }),

/***/ "./src/pages/copywriting/index.scss":
/*!******************************************!*\
  !*** ./src/pages/copywriting/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/copywriting/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/copywriting/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_copywriting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/copywriting/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/copywriting/index!./src/pages/copywriting/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_copywriting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/copywriting/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_copywriting_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ })

},[["./src/pages/copywriting/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map