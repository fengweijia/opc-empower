(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/strategy/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/strategy/index!./src/pages/strategy/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/strategy/index!./src/pages/strategy/index.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyPage; });
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_StateFeedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/StateFeedback */ "./src/components/StateFeedback/index.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/pages/strategy/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);



/**
 * 赚钱策略页面
 * 提供赚钱定位、定价、获客等策略建议
 */








// 策略类型

var strategyTypes = [{
  id: 'positioning',
  name: '定位诊断',
  icon: '🎯',
  desc: '雷达图与30天启动路径'
}, {
  id: 'pricing',
  name: '定价策略',
  icon: '💰',
  desc: '让客户觉得超值'
}, {
  id: 'channel',
  name: '获客渠道',
  icon: '📢',
  desc: '找到最便宜的流量'
}, {
  id: 'competitor',
  name: '竞品分析',
  icon: '🔍',
  desc: '找到你的蓝海机会'
}];
function StrategyPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
    selectedStrategy = _useState2[0],
    setSelectedStrategy = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
    _useState4 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
    strategyResult = _useState4[0],
    setStrategyResult = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
    _useState6 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
    _useState8 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useAppStore = Object(_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(),
    config = _useAppStore.config,
    addToHistory = _useAppStore.addToHistory;

  // 调用真实后端接口获取策略
  var selectStrategy = /*#__PURE__*/function () {
    var _ref = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee(strategyId) {
      var res, _t;
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setSelectedStrategy(strategyId);
            setIsLoading(true);
            setError('');
            _context.p = 1;
            if (config.ai.apiKey) {
              _context.n = 2;
              break;
            }
            throw new Error('请先在设置中配置AI API Key');
          case 2:
            if (!(!config.user.product || !config.user.targetAudience)) {
              _context.n = 3;
              break;
            }
            throw new Error('请先在设置中填写“我要卖的产品/服务”和“目标客户”');
          case 3:
            _context.n = 4;
            return _services_api__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].executeAgent({
              agentType: 'strategy',
              skillType: strategyId,
              config: {
                aiConfig: {
                  provider: config.ai.provider,
                  apiKey: config.ai.apiKey,
                  apiEndpoint: config.ai.apiEndpoint,
                  model: config.ai.model
                },
                larkConfig: config.lark.appId ? config.lark : null
              },
              userParams: {
                userId: config.user.userId,
                product: config.user.product,
                targetAudience: config.user.targetAudience,
                price: '99',
                channel: '自媒体'
              }
            });
          case 4:
            res = _context.v;
            if (res.success) {
              setStrategyResult(res.data);
              addToHistory({
                id: "gen_".concat(Date.now()),
                agentType: 'strategy',
                skillType: strategyId,
                inputParams: {
                  product: config.user.product,
                  targetAudience: config.user.targetAudience,
                  price: '99',
                  channel: '自媒体'
                },
                outputContent: res,
                generatedAt: new Date().toISOString(),
                strategyTags: ['定位诊断', '赚钱路径']
              });
            } else {
              setError(res.message || '生成失败，请重试');
            }
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            setError(_t.message || '网络或接口错误');
          case 6:
            _context.p = 6;
            setIsLoading(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5, 6, 7]]);
    }));
    return function selectStrategy(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // 渲染雷达图占位
  var renderRadar = function renderRadar(analysis) {
    if (!analysis) return null;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "radar-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "radar-title",
        children: "\u6838\u5FC3\u7ADE\u4E89\u529B\u8BCA\u65AD\u96F7\u8FBE"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "radar-mock",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          children: ["\u5E02\u573A\u5339\u914D\u5EA6: ", analysis.market_match || 0, "/5"]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          children: ["\u53EF\u884C\u6027: ", analysis.feasibility || 0, "/5"]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          children: ["\u4F18\u52BF: ", (analysis.core_competence || []).join(', ')]
        })]
      })]
    });
  };

  // 渲染30天路径
  var renderRoadmap = function renderRoadmap(roadmap) {
    if (!roadmap || !roadmap.length) return null;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "roadmap-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "roadmap-title",
        children: "30\u5929\u8D5A\u94B1\u8DEF\u5F84"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "timeline",
        children: roadmap.map(function (step, idx) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "timeline-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "timeline-dot"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "timeline-content",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "timeline-week",
                children: [step.week, " (", step.phase, ")"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
                className: "timeline-tasks",
                children: (step.tasks || []).map(function (t, i) {
                  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                    className: "task-item",
                    children: ["\u2022 ", t]
                  }, i);
                })
              })]
            })]
          }, idx);
        })
      })]
    });
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "strategy-page",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "page-header",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "back-btn",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateBack();
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          children: "\u2190 \u8FD4\u56DE"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "page-title",
        children: "\u8D5A\u94B1\u7B56\u7565"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "placeholder"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "page-content",
      children: !selectedStrategy ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "strategy-selection",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "section-title",
          children: "\u9009\u62E9\u7B56\u7565\u7C7B\u578B"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "strategy-grid",
          children: strategyTypes.map(function (strategy) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "strategy-card",
              onClick: function onClick() {
                return selectStrategy(strategy.id);
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "strategy-icon",
                children: strategy.icon
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "strategy-name",
                children: strategy.name
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "strategy-desc",
                children: strategy.desc
              })]
            }, strategy.id);
          })
        })]
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "strategy-result",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "c"], {
          scrollY: true,
          className: "result-scroll",
          children: [isLoading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_StateFeedback__WEBPACK_IMPORTED_MODULE_6__[/* LoadingSkeleton */ "c"], {
            messages: ['正在分析你的能力圈...', '匹配最佳赚钱路径...', '生成30天路线图...']
          }) : error ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_StateFeedback__WEBPACK_IMPORTED_MODULE_6__[/* ErrorState */ "b"], {
            message: error,
            onRetry: function onRetry() {
              return selectStrategy(selectedStrategy);
            }
          }) : !strategyResult ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_StateFeedback__WEBPACK_IMPORTED_MODULE_6__[/* EmptyState */ "a"], {
            onAction: function onAction() {
              return selectStrategy(selectedStrategy);
            }
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "result-card",
            children: [strategyResult.positioning_statement && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "positioning-quote",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "quote-mark",
                children: "\""
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "quote-text",
                children: strategyResult.positioning_statement
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "quote-mark",
                children: "\""
              })]
            }), renderRadar(strategyResult.analysis), renderRoadmap(strategyResult.roadmap_30_days), typeof strategyResult === 'string' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              className: "result-content fallback-text",
              children: strategyResult
            })]
          }), !isLoading && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "back-section",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "btn btn-secondary",
              onClick: function onClick() {
                return setSelectedStrategy('');
              },
              children: "\u8FD4\u56DE\u9009\u62E9"
            })
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/strategy/index.scss":
/*!***************************************!*\
  !*** ./src/pages/strategy/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/strategy/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/strategy/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_strategy_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/strategy/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/strategy/index!./src/pages/strategy/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_strategy_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/strategy/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_strategy_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ })

},[["./src/pages/strategy/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map