(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/process/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/process/index!./src/pages/process/index.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/process/index!./src/pages/process/index.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessPage; });
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/pages/process/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);



/**
 * 赚钱流程页面
 * 设计成交漏斗、发售脚本等自动化流程
 * 2026-03-11: 小白优化 - 对接后端Agent 3 API
 */








// 流程类型

var processTypes = [{
  id: 'funnel_design',
  name: '成交漏斗',
  icon: '🔄',
  desc: '设计自动成交路径'
}, {
  id: 'launch_script',
  name: '7天发售加速器',
  icon: '📜',
  desc: '7天完整发售节奏'
}, {
  id: 'automation',
  name: '自动化流程',
  icon: '⚙️',
  desc: '让机器帮你赚钱'
}, {
  id: 'referral',
  name: '转介绍系统',
  icon: '🤝',
  desc: '让客户帮你拉客户'
}];
function ProcessPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
    selectedProcess = _useState2[0],
    setSelectedProcess = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
    _useState4 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
    processResult = _useState4[0],
    setProcessResult = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
    _useState6 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
    _useState8 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState7, 2),
    errorMsg = _useState8[0],
    setErrorMsg = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
    _useState0 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState9, 2),
    activeDay = _useState0[0],
    setActiveDay = _useState0[1]; // 用于7天发售的横向Tab

  var _useAppStore = Object(_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(),
    config = _useAppStore.config,
    addToHistory = _useAppStore.addToHistory;

  // 选择流程类型 - 调用后端Agent 3 API
  var selectProcess = /*#__PURE__*/function () {
    var _ref = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee(processId) {
      var result, payload, _t;
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setSelectedProcess(processId);
            setIsLoading(true);
            setErrorMsg('');
            setActiveDay(0);
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
              agentType: 'process',
              skillType: processId,
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
            result = _context.v;
            if (result.success) {
              _context.n = 5;
              break;
            }
            throw new Error(result.message || '生成失败');
          case 5:
            payload = result.data;
            setProcessResult({
              skillType: processId,
              data: payload
            });
            addToHistory({
              id: "gen_".concat(Date.now()),
              agentType: 'process',
              skillType: processId,
              inputParams: {
                product: config.user.product,
                targetAudience: config.user.targetAudience,
                price: '99',
                channel: '自媒体'
              },
              outputContent: result,
              generatedAt: new Date().toISOString(),
              strategyTags: ['成交流程', '发售']
            });
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.error('Agent 3 API调用失败:', _t);
            setErrorMsg(_t.message || '生成失败，请重试');
          case 7:
            _context.p = 7;
            setIsLoading(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6, 7, 8]]);
    }));
    return function selectProcess(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // 渲染7天发售界面
  var renderLaunchScript = function renderLaunchScript(data) {
    var _currentDayData$conte, _currentDayData$conte2;
    if (!data || !data.schedule || !Array.isArray(data.schedule)) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "fallback-text",
        children: typeof data === 'string' ? data : JSON.stringify(data)
      });
    }
    var schedule = data.schedule;
    if (schedule.length === 0) return null;
    var currentDayData = schedule[activeDay] || schedule[0];
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "launch-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "c"], {
        scrollX: true,
        className: "days-tab",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "days-tab-inner",
          children: schedule.map(function (d, idx) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "day-item ".concat(activeDay === idx ? 'active' : ''),
              onClick: function onClick() {
                return setActiveDay(idx);
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "day-name",
                children: ["Day ", d.day]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "day-theme",
                children: d.theme
              })]
            }, idx);
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "phone-preview",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "phone-header",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
            children: "\u53D1\u552E\u5185\u5BB9\u9884\u89C8"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "c"], {
          scrollY: true,
          className: "phone-content",
          children: [((_currentDayData$conte = currentDayData.content) === null || _currentDayData$conte === void 0 ? void 0 : _currentDayData$conte.Moments) && currentDayData.content.Moments.length > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "content-block",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              className: "block-title",
              children: "\u670B\u53CB\u5708\u7D20\u6750"
            }), currentDayData.content.Moments.map(function (m, i) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
                className: "moment-card",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                  children: m
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
                  className: "action-row",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                    className: "copy-btn",
                    onClick: function onClick() {
                      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.setClipboardData({
                        data: m
                      });
                    },
                    children: "[\u4E00\u952E\u590D\u5236]"
                  })
                })]
              }, i);
            })]
          }), ((_currentDayData$conte2 = currentDayData.content) === null || _currentDayData$conte2 === void 0 ? void 0 : _currentDayData$conte2.Community) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "content-block",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              className: "block-title",
              children: "\u793E\u7FA4SOP"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "chat-bubble",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                children: currentDayData.content.Community
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
                className: "action-row",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                  className: "copy-btn",
                  onClick: function onClick() {
                    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.setClipboardData({
                      data: currentDayData.content.Community
                    });
                  },
                  children: "[\u4E00\u952E\u590D\u5236]"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "phone-footer",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
            className: "done-btn",
            children: "\u6807\u8BB0\u672C\u9636\u6BB5\u5B8C\u6210"
          })
        })]
      })]
    });
  };
  var renderContent = function renderContent() {
    if (!processResult) return null;
    if (processResult.skillType === 'launch_script') {
      return renderLaunchScript(processResult.data);
    }
    // 其他类型暂用兜底文本展示
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "result-card",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "result-content fallback-text",
        children: typeof processResult.data === 'string' ? processResult.data : JSON.stringify(processResult.data, null, 2)
      })
    });
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "process-page",
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
        children: "\u8D5A\u94B1\u6D41\u7A0B"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "placeholder"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "page-content",
      children: !selectedProcess ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "process-selection",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "section-title",
          children: "\u9009\u62E9\u6D41\u7A0B\u7C7B\u578B"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "process-grid",
          children: processTypes.map(function (process) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "process-card",
              onClick: function onClick() {
                return selectProcess(process.id);
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "process-icon",
                children: process.icon
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "process-name",
                children: process.name
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "process-desc",
                children: process.desc
              })]
            }, process.id);
          })
        })]
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "process-result",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "c"], {
          scrollY: true,
          className: "result-scroll",
          children: [isLoading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_StateFeedback__WEBPACK_IMPORTED_MODULE_6__[/* LoadingSkeleton */ "c"], {
            messages: ['加载发售模板...', '定制朋友圈文案...', '生成社群SOP...']
          }) : errorMsg ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_StateFeedback__WEBPACK_IMPORTED_MODULE_6__[/* ErrorState */ "b"], {
            message: errorMsg,
            onRetry: function onRetry() {
              return selectProcess(selectedProcess);
            }
          }) : !processResult ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_StateFeedback__WEBPACK_IMPORTED_MODULE_6__[/* EmptyState */ "a"], {
            onAction: function onAction() {
              return selectProcess(selectedProcess);
            }
          }) : renderContent(), !isLoading && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "back-section",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "btn btn-secondary",
              onClick: function onClick() {
                return setSelectedProcess('');
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

/***/ "./src/pages/process/index.scss":
/*!**************************************!*\
  !*** ./src/pages/process/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/process/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/process/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_process_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/process/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/process/index!./src/pages/process/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_process_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/process/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_process_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ })

},[["./src/pages/process/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map