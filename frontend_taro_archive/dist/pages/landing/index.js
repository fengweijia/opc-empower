(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/landing/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/landing/index!./src/pages/landing/index.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/landing/index!./src/pages/landing/index.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Landing; });
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/pages/landing/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


/**
 * 营销落地页 - 赚钱段位测试
 * 对应OPCV2.0文档中的"你的赚钱在第几级？"
 * 创建时间: 2026-03-10
 * 作者: 小白
 */





// 测试题目（简化版5题）

var questions = [{
  id: 1,
  question: '你有没有一段能反复使用的成交话术？',
  options: ['没有，每次都是临时想', '有，但效果一般', '有，转化率还不错']
}, {
  id: 2,
  question: '你的客户主要从哪里来？',
  options: ['全靠朋友推荐', '有1-2个固定渠道', '有3个以上渠道在跑']
}, {
  id: 3,
  question: '如果你一周不发朋友圈，还能成交吗？',
  options: ['不能', '偶尔能', '照样能']
}, {
  id: 4,
  question: '你有没有"追销"流程？',
  options: ['追销是什么？', '有但没系统化', '有完整追销体系']
}, {
  id: 5,
  question: '你的文案发出去，平均多少人主动找你咨询？',
  options: ['几乎没有', '偶尔有', '经常有']
}];

// 段位定义
var levels = [{
  name: 'Lv.1 碰运气赚钱',
  desc: '没有策略，全靠运气和人脉',
  min: 0,
  max: 5
}, {
  name: 'Lv.2 体力赚钱',
  desc: '有产品有能力，但每一单都要自己去聊去跟',
  min: 6,
  max: 10
}, {
  name: 'Lv.3 文案赚钱',
  desc: '你的文案能自动帮你筛选和成交客户',
  min: 11,
  max: 13
}, {
  name: 'Lv.4 系统赚钱',
  desc: '你搭建了完整的成交流程，流量进来自动走完全流程',
  min: 14,
  max: 15
}];
function Landing() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
    _useState2 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1]; // 0=介绍, 1-5=问答, 6=结果
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
    _useState4 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
    answers = _useState4[0],
    setAnswers = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
    _useState6 = Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, 2),
    score = _useState6[0],
    setScore = _useState6[1];

  // 开始测试
  var startTest = function startTest() {
    setStep(1);
    setAnswers([]);
  };

  // 选择答案
  var selectAnswer = function selectAnswer(optionIndex) {
    // 每题得分：0, 1, 2
    var newAnswers = [].concat(Object(_Users_apple_Documents_PythonP_OpcVip_opc_empower_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(answers), [optionIndex]);
    setAnswers(newAnswers);
    if (step < 5) {
      setStep(step + 1);
    } else {
      // 计算总分
      var total = newAnswers.reduce(function (sum, val) {
        return sum + val;
      }, 0);
      setScore(total);
      setStep(6);
    }
  };

  // 获取当前段位
  var getCurrentLevel = function getCurrentLevel() {
    return levels.find(function (l) {
      return score >= l.min && score <= l.max;
    }) || levels[0];
  };

  // 跳转体验
  var startExperience = function startExperience() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.switchTab({
      url: '/pages/home/index'
    });
  };

  // 重新测试
  var retakeTest = function retakeTest() {
    setStep(0);
    setAnswers([]);
    setScore(0);
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "c"], {
    className: "landing-container",
    scrollY: true,
    children: [step === 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "intro-section",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "intro-icon",
        children: "\uD83D\uDCB0"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
        className: "intro-title",
        children: "\u4F60\u7684\u8D5A\u94B1\u5728\u7B2C\u51E0\u7EA7\uFF1F"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
        className: "intro-subtitle",
        children: "\u6D4B\u4E00\u6D4B\u4F60\u7684\u8D5A\u94B1\u6BB5\u4F4D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "intro-desc",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          children: "5\u9053\u9898\uFF0C\u6D4B\u51FA\u4F60\u7684\u8D5A\u94B1\u6BB5\u4F4D"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          children: "\u770B\u770B\u4F60\u5361\u5728\u54EA\u4E00\u5C42"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
        className: "start-btn",
        onClick: startTest,
        children: "\u5F00\u59CB\u6D4B\u8BD5\uFF08\u514D\u8D39\uFF09"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
        className: "intro-stat",
        children: "\u5DF2\u6709 12,843 \u4EBA\u5B8C\u6210\u6D4B\u8BD5"
      })]
    }), step > 0 && step <= 5 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "question-section",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "progress-bar",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
          className: "progress-fill",
          style: {
            width: "".concat(step / 5 * 100, "%")
          }
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
        className: "question-text",
        children: ["Q", step, ": ", questions[step - 1].question]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "options-list",
        children: questions[step - 1].options.map(function (option, idx) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
            className: "option-item",
            onClick: function onClick() {
              return selectAnswer(idx);
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
              className: "option-text",
              children: option
            })
          }, idx);
        })
      })]
    }), step === 6 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
      className: "result-section",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
        className: "result-label",
        children: "\u4F60\u7684\u8D5A\u94B1\u6BB5\u4F4D\uFF1A"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "level-card",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          className: "level-name",
          children: getCurrentLevel().name
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          className: "level-desc",
          children: getCurrentLevel().desc
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "level-progress",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
          className: "progress-track",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
            className: "progress-fill",
            style: {
              width: "".concat(score / 15 * 100, "%")
            }
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          className: "progress-text",
          children: ["\u8D85\u8FC7", (score / 15 * 100).toFixed(0), "%\u7684\u6D4B\u8BD5\u8005"]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "all-levels",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          className: "all-levels-title",
          children: "\u8D5A\u94B1\u76845\u4E2A\u6BB5\u4F4D\uFF1A"
        }), levels.map(function (level, idx) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
            className: "level-item ".concat(score >= level.min && score <= level.max ? 'current' : ''),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
              className: "level-item-name",
              children: level.name
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
              className: "level-item-desc",
              children: level.desc
            })]
          }, idx);
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "cta-section",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          className: "cta-text",
          children: ["\u4F60\u4ECE", getCurrentLevel().name, "\u5230Lv.3\u53EA\u5DEE\u4E00\u6B65\uFF1A \u4E00\u5957\u80FD\u81EA\u52A8\u5E2E\u4F60\u5356\u8D27\u7684\u6587\u6848\u7CFB\u7EDF\u3002"]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          className: "cta-feature",
          children: "MoneySkill\u53EF\u4EE5\u5E2E\u4F60\uFF1A"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
          className: "feature-list",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
            children: "\u2713 3\u5206\u949F\u751F\u6210\u4E13\u5C5E\u5356\u8D27\u6587\u6848"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
            children: "\u2713 \u8BBE\u8BA1\u4F60\u7684\u81EA\u52A8\u6210\u4EA4\u6D41\u7A0B"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
            children: "\u2713 \u638C\u63E1\u76F4\u590D\u5F0F\u8425\u9500\u7684\u8D5A\u94B1\u6280\u672F"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
          className: "cta-btn",
          onClick: startExperience,
          children: "\u514D\u8D39\u4F53\u9A8C MoneySkill \u2192"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "f"], {
        className: "result-footer",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          children: "\u5DF2\u6709 3,291 \u4F4DOPC\u521B\u4E1A\u8005\u5728\u4F7F\u7528"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "d"], {
          className: "retake",
          onClick: retakeTest,
          children: "\u91CD\u65B0\u6D4B\u8BD5"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/landing/index.scss":
/*!**************************************!*\
  !*** ./src/pages/landing/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/landing/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/landing/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_landing_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/landing/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/landing/index!./src/pages/landing/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_landing_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/landing/index', {root:{cn:[]}}, config || {}))


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_landing_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);


/***/ })

},[["./src/pages/landing/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map