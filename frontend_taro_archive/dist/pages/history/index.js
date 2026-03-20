(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/history/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/history/index!./src/pages/history/index.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/history/index!./src/pages/history/index.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/history/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










function HistoryPage() {
  var _useAppStore = Object(_store__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(),
    history = _useAppStore.history,
    clearHistory = _useAppStore.clearHistory,
    config = _useAppStore.config,
    setLoading = _useAppStore.setLoading,
    setError = _useAppStore.setError;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('local'),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
    _useState4 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
    larkRecords = _useState4[0],
    setLarkRecords = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
    _useState6 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
    larkLoading = _useState6[0],
    setLarkLoading = _useState6[1];
  var larkEnabled = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return Boolean(config.lark.appId && config.lark.appSecret && config.lark.appToken && config.lark.tableId && config.user.userId);
  }, [config.lark, config.user.userId]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (tab !== 'lark' || !larkEnabled) return;
    var cancelled = false;
    Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().m(function _callee() {
      var res, _t;
      return Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLarkLoading(true);
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return _services_api__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].getHistory(config.lark, config.user.userId, 20);
          case 2:
            res = _context.v;
            if (!cancelled) {
              _context.n = 3;
              break;
            }
            return _context.a(2);
          case 3:
            setLarkRecords((res === null || res === void 0 ? void 0 : res.items) || []);
            _context.n = 6;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            if (!cancelled) {
              _context.n = 5;
              break;
            }
            return _context.a(2);
          case 5:
            setError((_t === null || _t === void 0 ? void 0 : _t.message) || '获取飞书历史失败');
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
              title: (_t === null || _t === void 0 ? void 0 : _t.message) || '获取飞书历史失败',
              icon: 'error'
            });
          case 6:
            _context.p = 6;
            if (!cancelled) {
              _context.n = 7;
              break;
            }
            return _context.a(2);
          case 7:
            setLarkLoading(false);
            setLoading(false);
            return _context.f(6);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4, 6, 8]]);
    }))();
    return function () {
      cancelled = true;
    };
  }, [tab, larkEnabled, config.lark, config.user.userId, setError, setLoading]);
  var renderLocalEmpty = function renderLocalEmpty() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "empty",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "empty-text",
        children: "\u6682\u65E0\u672C\u5730\u5386\u53F2\u8BB0\u5F55"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "empty-tip",
        children: "\u751F\u6210\u7684\u5185\u5BB9\u4F1A\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907"
      })]
    });
  };
  var renderLarkEmpty = function renderLarkEmpty() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "empty",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "empty-text",
        children: "\u6682\u65E0\u98DE\u4E66\u5386\u53F2\u8BB0\u5F55"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "empty-tip",
        children: "\u9700\u8981\u5148\u5728\u8BBE\u7F6E\u4E2D\u914D\u7F6E\u98DE\u4E66 App Token \u4E0E\u8868\u683C"
      })]
    });
  };
  var renderLocalList = function renderLocalList() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "list",
      children: history.map(function (item) {
        var _output$data, _list$, _list$2;
        var output = item.outputContent;
        var list = (output === null || output === void 0 || (_output$data = output.data) === null || _output$data === void 0 ? void 0 : _output$data.data) || (output === null || output === void 0 ? void 0 : output.data);
        var firstTitle = Array.isArray(list) ? (_list$ = list[0]) === null || _list$ === void 0 ? void 0 : _list$.title : undefined;
        var firstContent = Array.isArray(list) ? (_list$2 = list[0]) === null || _list$2 === void 0 ? void 0 : _list$2.content : undefined;
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "item card",
          onClick: function onClick() {
            if (!firstContent) return;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.setClipboardData({
              data: firstContent
            });
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "item-header",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              className: "item-title",
              children: firstTitle || item.skillType
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              className: "item-time",
              children: new Date(item.generatedAt).toLocaleString()
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
            className: "item-sub",
            children: item.agentType
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
            className: "item-tip",
            children: firstContent ? '点击复制首条文案' : '无可复制内容'
          })]
        }, item.id);
      })
    });
  };
  var renderLarkList = function renderLarkList() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "list",
      children: larkRecords.map(function (r) {
        var fields = r.fields || {};
        var generatedAt = fields['创建时间'];
        var firstTitle;
        var firstContent;
        try {
          var _output$data2, _list$3, _list$4;
          var raw = fields['生成内容'];
          var parsed = raw ? JSON.parse(raw) : null;
          var output = parsed === null || parsed === void 0 ? void 0 : parsed.outputContent;
          var list = (output === null || output === void 0 || (_output$data2 = output.data) === null || _output$data2 === void 0 ? void 0 : _output$data2.data) || (output === null || output === void 0 ? void 0 : output.data);
          firstTitle = Array.isArray(list) ? (_list$3 = list[0]) === null || _list$3 === void 0 ? void 0 : _list$3.title : undefined;
          firstContent = Array.isArray(list) ? (_list$4 = list[0]) === null || _list$4 === void 0 ? void 0 : _list$4.content : undefined;
          generatedAt = (parsed === null || parsed === void 0 ? void 0 : parsed.generatedAt) || generatedAt;
        } catch (_) {}
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "item card",
          onClick: function onClick() {
            if (!firstContent) return;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.setClipboardData({
              data: firstContent
            });
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "item-header",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              className: "item-title",
              children: firstTitle || fields['Skill类型'] || r.record_id
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
              className: "item-time",
              children: generatedAt ? new Date(generatedAt).toLocaleString() : ''
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
            className: "item-sub",
            children: fields['Agent类型'] || ''
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
            className: "item-tip",
            children: firstContent ? '点击复制首条文案' : '无可复制内容'
          })]
        }, r.record_id);
      })
    });
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "history-page",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "page-header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
        className: "page-title",
        children: "\u5386\u53F2\u8BB0\u5F55"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "history-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "tabs",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "tab ".concat(tab === 'local' ? 'tab-active' : ''),
          onClick: function onClick() {
            return setTab('local');
          },
          children: "\u672C\u5730"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "tab ".concat(tab === 'lark' ? 'tab-active' : ''),
          onClick: function onClick() {
            return setTab('lark');
          },
          children: "\u98DE\u4E66"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "spacer"
        }), tab === 'local' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "btn btn-secondary ".concat(history.length ? '' : 'btn-disabled'),
          onClick: function onClick() {
            if (!history.length) return;
            clearHistory();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
              title: '已清空',
              icon: 'success'
            });
          },
          children: "\u6E05\u7A7A"
        })]
      }), tab === 'local' ? history.length ? renderLocalList() : renderLocalEmpty() : !larkEnabled ? renderLarkEmpty() : larkLoading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "empty",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "d"], {
          className: "empty-text",
          children: "\u52A0\u8F7D\u4E2D..."
        })
      }) : larkRecords.length ? renderLarkList() : renderLarkEmpty()]
    })]
  });
}

/***/ }),

/***/ "./src/pages/history/index.scss":
/*!**************************************!*\
  !*** ./src/pages/history/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/history/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/history/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_history_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/history/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/history/index!./src/pages/history/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_history_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/history/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_history_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ })

},[["./src/pages/history/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map