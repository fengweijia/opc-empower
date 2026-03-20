(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/conversion/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/conversion/index!./src/pages/conversion/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/conversion/index!./src/pages/conversion/index.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversionPage; });
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/pages/conversion/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);

/**
 * 成交转化页面
 * 提供价格锚定、异议处理等成交技巧
 */





// 转化技巧类型

var conversionTypes = [{
  id: 'price_anchor',
  name: '价格锚定',
  icon: '⚓',
  desc: '让客户觉得超值'
}, {
  id: 'objection_handling',
  name: '异议处理',
  icon: '🛡️',
  desc: '化解客户拒绝'
}, {
  id: 'social_proof',
  name: '社会证明',
  icon: '👥',
  desc: '用案例说服客户'
}, {
  id: 'scarcity',
  name: '稀缺紧迫',
  icon: '⏰',
  desc: '制造购买紧迫感'
}, {
  id: 'upsell',
  name: '追加销售',
  icon: '📈',
  desc: '让客户买更多'
}];
function ConversionPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    selectedConversion = _useState2[0],
    setSelectedConversion = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
    _useState4 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    conversionResult = _useState4[0],
    setConversionResult = _useState4[1];

  // 选择转化技巧
  var selectConversion = function selectConversion(conversionId) {
    setSelectedConversion(conversionId);

    // 模拟AI生成转化技巧
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading({
      title: 'AI生成中...'
    });
    setTimeout(function () {
      var mockResults = {
        price_anchor: {
          title: '价格锚定技巧',
          content: "**\u4E09\u951A\u5B9A\u4EF7\u6CD5**\uFF1A\n\n1. **\u9AD8\u4EF7\u951A**\uFF1A1999\u5143\uFF08\u4F01\u4E1A\u5B9A\u5236\u7248\uFF09\n   - \u4F5C\u7528\uFF1A\u5EFA\u7ACB\u4EF7\u503C\u8BA4\u77E5\n   - \u8BDD\u672F\uFF1A\"\u4F01\u4E1A\u5B9A\u5236\u7248\u89811999\uFF0C\u4F46\u6211\u4EEC\u6709\u66F4\u5212\u7B97\u7684\u9009\u62E9\"\n\n2. **\u4E2D\u4EF7\u951A**\uFF1A499\u5143\uFF08\u6807\u51C6\u7248\uFF09\n   - \u4F5C\u7528\uFF1A\u4E3B\u8981\u5BF9\u6BD4\u5BF9\u8C61\n   - \u8BDD\u672F\uFF1A\"\u76F8\u6BD41999\u7684\u4F01\u4E1A\u7248\uFF0C499\u7684\u6807\u51C6\u7248\u6027\u4EF7\u6BD4\u8D85\u9AD8\"\n\n3. **\u4F4E\u4EF7\u951A**\uFF1A199\u5143\uFF08\u57FA\u7840\u7248\uFF09\n   - \u4F5C\u7528\uFF1A\u964D\u4F4E\u51B3\u7B56\u95E8\u69DB\n   - \u8BDD\u672F\uFF1A\"\u53EA\u8981199\u5C31\u80FD\u5F00\u59CB\u81EA\u52A8\u5316\uFF0C4\u5929\u5C31\u80FD\u56DE\u672C\"\n\n**\u5E94\u7528\u573A\u666F**\uFF1A\n- \u670B\u53CB\u5708\u6587\u6848\uFF1A\u5148\u63D0\u9AD8\u4EF7\uFF0C\u518D\u63A8\u4E2D\u4EF7\n- \u79C1\u804A\u8BDD\u672F\uFF1A\u4E09\u9009\u4E00\uFF0C\u5F15\u5BFC\u9009\u4E2D\u95F4\n- \u9500\u552E\u9875\uFF1A\u4ECE\u5DE6\u5230\u53F3\uFF0C\u4EF7\u683C\u9012\u589E",
          examples: ['原价999，限时499', '企业版1999 vs 个人版499', '年费1999，月付只要199']
        },
        objection_handling: {
          title: '异议处理话术',
          content: "**\u5E38\u89C1\u5F02\u8BAE\u53CA\u5E94\u5BF9**\uFF1A\n\n1. **\"\u592A\u8D35\u4E86\"**\n   - \u9519\u8BEF\u56DE\u5E94\uFF1A\"\u4E0D\u8D35\u554A\"\n   - \u6B63\u786E\u8BDD\u672F\uFF1A\"\u6211\u7406\u89E3\uFF0C\u521A\u5F00\u59CB\u6211\u4E5F\u89C9\u5F97\u8D35\u3002\u4F46\u4F60\u770B\u5C0F\u5F20\uFF0C\u5B66\u4E862\u5468\uFF0C\u73B0\u5728\u6BCF\u5929\u77012\u5C0F\u65F6\uFF0C\u4E00\u4E2A\u6708\u591A\u8D5A3000\uFF0C\u8FD9499\u662F\u4E0D\u662F\u5F88\u5212\u7B97\uFF1F\"\n\n2. **\"\u8003\u8651\u8003\u8651\"**\n   - \u9519\u8BEF\u56DE\u5E94\uFF1A\"\u597D\u7684\uFF0C\u4F60\u8003\u8651\u5427\"\n   - \u6B63\u786E\u8BDD\u672F\uFF1A\"\u5F53\u7136\u8981\u8003\u8651\uFF01\u6211\u5EFA\u8BAE\u4F60\u5148\u8BD5\u8BD5\u57FA\u7840\u90E8\u5206\uFF0C\u5982\u679C\u89C9\u5F97\u6CA1\u7528\uFF0C7\u5929\u5185\u65E0\u6761\u4EF6\u9000\u6B3E\uFF0C\u8FD9\u6837\u8003\u8651\u8D77\u6765\u66F4\u5B89\u5FC3\"\n\n3. **\"\u6CA1\u65F6\u95F4\u5B66\"**\n   - \u9519\u8BEF\u56DE\u5E94\uFF1A\"\u62BD\u65F6\u95F4\u5B66\u554A\"\n   - \u6B63\u786E\u8BDD\u672F\uFF1A\"\u6B63\u662F\u56E0\u4E3A\u6CA1\u65F6\u95F4\uFF0C\u624D\u8981\u5B66\u81EA\u52A8\u5316\u554A\uFF01\u6BCF\u5929\u82B115\u5206\u949F\u5B66\uFF0C\u4EE5\u540E\u6BCF\u5929\u77012\u5C0F\u65F6\uFF0C\u8FD9\u7B14\u65F6\u95F4\u6295\u8D44\u56DE\u62A5\u7387\u8D85\u9AD8\"",
          examples: ['太贵了 → 算投资回报率', '考虑考虑 → 降低决策风险', '没时间 → 强调时间投资']
        }
      };
      setConversionResult(mockResults[conversionId] || {
        title: '转化技巧生成中',
        content: 'AI正在为你准备成交技巧...',
        examples: []
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
    }, 1500);
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
    className: "conversion-page",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
      className: "page-header",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "back-btn",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateBack();
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
          children: "\u2190 \u8FD4\u56DE"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
        className: "page-title",
        children: "\u6210\u4EA4\u8F6C\u5316"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "placeholder"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
      className: "page-content",
      children: !selectedConversion ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "conversion-selection",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
          className: "section-title",
          children: "\u9009\u62E9\u8F6C\u5316\u6280\u5DE7"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
          className: "conversion-grid",
          children: conversionTypes.map(function (conversion) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
              className: "conversion-card",
              onClick: function onClick() {
                return selectConversion(conversion.id);
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
                className: "conversion-icon",
                children: conversion.icon
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
                className: "conversion-name",
                children: conversion.name
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
                className: "conversion-desc",
                children: conversion.desc
              })]
            }, conversion.id);
          })
        })]
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
        className: "conversion-result",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* ScrollView */ "c"], {
          scrollY: true,
          className: "result-scroll",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
            className: "result-card",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
              className: "result-title",
              children: conversionResult === null || conversionResult === void 0 ? void 0 : conversionResult.title
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
              className: "result-content",
              children: conversionResult === null || conversionResult === void 0 ? void 0 : conversionResult.content
            }), (conversionResult === null || conversionResult === void 0 ? void 0 : conversionResult.examples) && conversionResult.examples.length > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
              className: "examples-section",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
                className: "examples-title",
                children: "\u5E94\u7528\u793A\u4F8B\uFF1A"
              }), conversionResult.examples.map(function (example, index) {
                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
                  className: "example-item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
                    className: "example-bullet",
                    children: "\u2022"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "d"], {
                    className: "example-text",
                    children: example
                  })]
                }, index);
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
              className: "result-actions",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
                className: "btn btn-primary",
                onClick: function onClick() {
                  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
                    title: '功能开发中',
                    icon: 'none'
                  });
                },
                children: "\u751F\u6210\u5B8C\u6574\u8BDD\u672F"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
                className: "btn btn-secondary",
                onClick: function onClick() {
                  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
                    title: '功能开发中',
                    icon: 'none'
                  });
                },
                children: "\u6A21\u62DF\u5BF9\u8BDD\u7EC3\u4E60"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
            className: "back-section",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "f"], {
              className: "btn btn-secondary",
              onClick: function onClick() {
                return setSelectedConversion('');
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

/***/ "./src/pages/conversion/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/conversion/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/conversion/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/conversion/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_conversion_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/conversion/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/conversion/index!./src/pages/conversion/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_conversion_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/conversion/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_conversion_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ })

},[["./src/pages/conversion/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map