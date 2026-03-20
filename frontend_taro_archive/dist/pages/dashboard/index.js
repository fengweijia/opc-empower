(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/dashboard/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dashboard/index!./src/pages/dashboard/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dashboard/index!./src/pages/dashboard/index.tsx ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/pages/dashboard/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);



/**
 * 数据面板页面
 * 展示用户赚钱数据仪表盘
 * 创建时间: 2026-03-10
 * 作者: 小白
 */






// 模拟数据 - 实际应该从API获取

var mockStats = {
  monthly: {
    total_generated: 42,
    total_used: 28,
    usage_rate: 67,
    tracked_revenue: 12800,
    revenue_change: 32
  },
  weekly: [{
    day: '周一',
    generate: 5,
    use: 3
  }, {
    day: '周二',
    generate: 8,
    use: 6
  }, {
    day: '周三',
    generate: 3,
    use: 2
  }, {
    day: '周四',
    generate: 12,
    use: 8
  }, {
    day: '周五',
    generate: 7,
    use: 5
  }, {
    day: '周六',
    generate: 4,
    use: 2
  }, {
    day: '周日',
    generate: 3,
    use: 2
  }],
  top_content: [{
    title: '朋友圈卖货文案①',
    type: '痛点型',
    usage: 23
  }, {
    title: '私聊成交话术',
    type: '异议处理',
    usage: 18
  }, {
    title: '价格锚定策略',
    type: '定价',
    usage: 15
  }],
  ai_insight: {
    title: 'AI建议',
    content: '你的朋友圈文案转化不错，但缺少追销环节。建议试试成交后48h追销策略，预计能提升30%客单价。',
    action: '生成追销策略'
  }
};
function Dashboard() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(mockStats),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
    stats = _useState2[0],
    setStats = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
    _useState4 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useAppStore = Object(_store__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(),
    config = _useAppStore.config;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // 页面加载时获取数据
    fetchDashboardData();
  }, []);
  var fetchDashboardData = /*#__PURE__*/function () {
    var _ref = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee() {
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setLoading(true);
            try {
              // 实际应该调用API获取数据
              // const data = await apiService.getDashboardStats()
              // setStats(data)

              // 模拟加载
              setTimeout(function () {
                setLoading(false);
              }, 500);
            } catch (error) {
              console.error('获取数据失败:', error);
              setLoading(false);
            }
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function fetchDashboardData() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "c"], {
    className: "dashboard-container",
    scrollY: true,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "dashboard-header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "title",
        children: "\uD83D\uDCB0 \u6211\u7684\u8D5A\u94B1\u6570\u636E"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "stats-grid",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "stat-card",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-label",
          children: "\u672C\u6708\u751F\u6210"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-value",
          children: stats.monthly.total_generated
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-unit",
          children: "\u6B21"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-change positive",
          children: "\u219115%"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "stat-card",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-label",
          children: "\u5B9E\u9645\u4F7F\u7528"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-value",
          children: stats.monthly.total_used
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-unit",
          children: "\u6B21"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-change",
          children: ["\u4F7F\u7528\u7387", stats.monthly.usage_rate, "%"]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "stat-card highlight",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-label",
          children: "\u8FFD\u8E2A\u6210\u4EA4"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-value money",
          children: ["\xA5", stats.monthly.tracked_revenue]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "stat-change positive",
          children: ["\u2191", stats.monthly.revenue_change, "%"]
        })]
      })]
    }), stats.ai_insight && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "ai-insight-card",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "insight-header",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "insight-icon",
          children: "\uD83D\uDCA1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "insight-title",
          children: stats.ai_insight.title
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "insight-content",
        children: stats.ai_insight.content
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "insight-action",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
            url: '/pages/process/index'
          });
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "action-text",
          children: [stats.ai_insight.action, " \u2192"]
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "section",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "section-title",
        children: "\uD83C\uDFC6 \u6548\u679C\u6392\u884C"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "rank-list",
        children: stats.top_content.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "rank-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "rank-num",
              children: index + 1
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "rank-info",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "rank-title",
                children: item.title
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "rank-type",
                children: item.type
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "rank-usage",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "usage-num",
                children: item.usage
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "usage-label",
                children: "\u6B21\u4F7F\u7528"
              })]
            })]
          }, index);
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "section",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "section-title",
        children: "\uD83D\uDCC8 \u672C\u5468\u8D8B\u52BF"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "chart-container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "chart-bars",
          children: stats.weekly.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "chart-bar-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
                className: "chart-bar generate",
                style: {
                  height: "".concat(item.generate * 8, "px")
                }
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
                className: "chart-bar use",
                style: {
                  height: "".concat(item.use * 10, "px")
                }
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
                className: "chart-label",
                children: item.day
              })]
            }, index);
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "chart-legend",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "legend-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "legend-dot generate"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              children: "\u751F\u6210"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "legend-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
              className: "legend-dot use"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              children: "\u4F7F\u7528"
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "dashboard-footer",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "footer-text",
        children: "\u6570\u636E\u6765\u6E90\u4E8E\u60A8\u7684\u4F7F\u7528\u8BB0\u5F55"
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/dashboard/index.scss":
/*!****************************************!*\
  !*** ./src/pages/dashboard/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/dashboard/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/dashboard/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dashboard_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dashboard/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/dashboard/index!./src/pages/dashboard/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dashboard_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/dashboard/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_dashboard_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ })

},[["./src/pages/dashboard/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map