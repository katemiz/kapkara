(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/Pages/Apps.svelte":
/*!****************************************!*\
  !*** ./resources/js/Pages/Apps.svelte ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/config/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Apps.svelte generated by Svelte v3.46.6 */



function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  child_ctx[5] = i;
  return child_ctx;
} // (39:8) {#if key % 2 == 0}


function create_if_block_1(ctx) {
  var div;
  var a;
  var img;
  var img_src_value;
  var img_alt_value;
  var a_href_value;
  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = "/images/" +
      /*uygulama*/
      ctx[3].img)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", img_alt_value =
      /*uygulama*/
      ctx[3].label);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value =
      /*uygulama*/
      ctx[3].url);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "column");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, a);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, img);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
    }
  };
} // (59:8) {#if key % 2 != 0}


function create_if_block(ctx) {
  var div;
  var a;
  var img;
  var img_src_value;
  var img_alt_value;
  var a_href_value;
  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = "/images/" +
      /*uygulama*/
      ctx[3].img)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", img_alt_value =
      /*uygulama*/
      ctx[3].label);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value =
      /*uygulama*/
      ctx[3].url);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "column");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, a);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, img);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
    }
  };
} // (33:4) {#each uygulamalar.apps as uygulama, key}


function create_each_block_1(ctx) {
  var div2;
  var t0;
  var div1;
  var h1;
  var t1_value =
  /*uygulama*/
  ctx[3].label + "";
  var t1;
  var t2;
  var div0;
  var raw_value =
  /*uygulama*/
  ctx[3].desc + "";
  var t3;
  var t4;
  var if_block0 =
  /*key*/
  ctx[5] % 2 == 0 && create_if_block_1(ctx);
  var if_block1 =
  /*key*/
  ctx[5] % 2 != 0 && create_if_block(ctx);
  return {
    c: function c() {
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (if_block0) if_block0.c();
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (if_block1) if_block1.c();
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h1, "class", "title mb-6 has-text-weight-light is-size-3 has-text-left");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "content");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "column");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "columns box mt-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "onmouseover", highlight);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "onmouseout", unlight);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
      if (if_block0) if_block0.m(div2, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, h1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      div0.innerHTML = raw_value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
      if (if_block1) if_block1.m(div2, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t4);
    },
    p: function p(ctx, dirty) {
      if (
      /*key*/
      ctx[5] % 2 == 0) if_block0.p(ctx, dirty);
      if (
      /*key*/
      ctx[5] % 2 != 0) if_block1.p(ctx, dirty);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }
  };
} // (28:2) {#each params.software as uygulamalar}


function create_each_block(ctx) {
  var h1;
  var t0_value =
  /*uygulamalar*/
  ctx[0].group + "";
  var t0;
  var t1;
  var each_1_anchor;
  var each_value_1 =
  /*uygulamalar*/
  ctx[0].apps;
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  return {
    c: function c() {
      h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h1, "class", "title mb-6 has-text-weight-light is-size-1 has-text-left");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, h1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(target, anchor);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*highlight, unlight, params*/
      0) {
        each_value_1 =
        /*uygulamalar*/
        ctx[0].apps;

        var _i3;

        for (_i3 = 0; _i3 < each_value_1.length; _i3 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block_1(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value_1.length;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(h1);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
    }
  };
}

function create_fragment(ctx) {
  var section;
  var each_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.software;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      section = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].c();
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section, "class", "section container");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section, anchor);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].m(section, null);
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*params, highlight, unlight*/
      0) {
        each_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.software;

        var _i6;

        for (_i6 = 0; _i6 < each_value.length; _i6 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i6);

          if (each_blocks[_i6]) {
            each_blocks[_i6].p(child_ctx, dirty);
          } else {
            each_blocks[_i6] = create_each_block(child_ctx);

            each_blocks[_i6].c();

            each_blocks[_i6].m(section, null);
          }
        }

        for (; _i6 < each_blocks.length; _i6 += 1) {
          each_blocks[_i6].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

function redirect(el) {
  var url;

  switch (app) {
    case 'SM':
      url = '/Tensor/';
      break;
  }

  window.location = url;
}

function highlight() {
  console.log(el);
} //el.classList.add("has-background-info-light")


function unlight(el) {} //el.classList.remove("has-background-info-light")


var Apps = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Apps, _SvelteComponent);

  var _super = _createSuper(Apps);

  function Apps(options) {
    var _this;

    _classCallCheck(this, Apps);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Apps);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apps);

/***/ }),

/***/ "./resources/js/Pages/Index.svelte":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Index.svelte ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/config/config.js");
/* harmony import */ var _Pages_Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Shared/Layout.svelte */ "./resources/js/Pages/Shared/Layout.svelte");
/* harmony import */ var _Pages_Shared_Hero_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Shared/Hero.svelte */ "./resources/js/Pages/Shared/Hero.svelte");
/* harmony import */ var _Pages_Apps_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Apps.svelte */ "./resources/js/Pages/Apps.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Index.svelte generated by Svelte v3.46.6 */






function create_default_slot(ctx) {
  var hero;
  var t;
  var apps;
  var current;
  hero = new _Pages_Shared_Hero_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({});
  apps = new _Pages_Apps_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({});
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(hero.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(apps.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(hero, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(apps, target, anchor);
      current = true;
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(hero.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(apps.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(hero.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(apps.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(hero, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(apps, detaching);
    }
  };
}

function create_fragment(ctx) {
  var title_value;
  var meta;
  var meta_content_value;
  var t;
  var layout;
  var current;
  document.title = title_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.title;
  layout = new _Pages_Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      meta = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("meta");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(layout.$$.fragment);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(meta, "name", "description");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(meta, "content", meta_content_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.description);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(document.head, meta);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(layout, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*params*/
      0) && title_value !== (title_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.title)) {
        document.title = title_value;
      }

      var layout_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        layout_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      layout.$set(layout_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(layout.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(layout.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(meta);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(layout, detaching);
    }
  };
}

var Index = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Index, _SvelteComponent);

  var _super = _createSuper(Index);

  function Index(options) {
    var _this;

    _classCallCheck(this, Index);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Index);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./resources/js/Pages/Katemiz.svelte":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Katemiz.svelte ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Katemiz.svelte generated by Svelte v3.46.6 */


function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-17c3b1", ".kahraman.svelte-17c3b1{background-color:#395c6b}.genislik.svelte-17c3b1{width:240px}.baslik.svelte-17c3b1{color:#e0ff4f}");
}

function create_fragment(ctx) {
  var nav;
  var t17;
  var section;
  var t31;
  var div17;
  return {
    c: function c() {
      nav = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("nav");
      nav.innerHTML = "<div class=\"container\"><div class=\"navbar-brand\"><a class=\"navbar-item\" href=\"../\"><span class=\"icon-text is-size-5\"><span class=\"icon\"><img src=\"/images/baykus_orange.svg\" alt=\"Logo\"/></span> \n\n          <span class=\"has-text-weight-light\">K\u0131l\u0131\xE7 Ali</span> \n          <span class=\"has-text-weight-bold\">\xA0Temiz</span></span></a> \n\n      <span onclick=\"BurgerMenu(this)\" class=\"navbar-burger burger\" data-target=\"navbarMenu\"><span></span> \n        <span></span> \n        <span></span></span></div> \n    <div id=\"navbarMenu\" class=\"navbar-menu\"><div class=\"navbar-end\"><a href=\"#home\" class=\"navbar-item\">Home</a> \n        <a href=\"#about\" class=\"navbar-item\">About</a> \n        <a href=\"#resume\" class=\"navbar-item\">Resume</a> \n        <a href=\"#works\" class=\"navbar-item\">Works</a> \n        <a href=\"#contact\" class=\"navbar-item\">Contact</a></div></div></div>";
      t17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      section = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      section.innerHTML = "<div class=\"hero-body\"><div class=\"columns\"><div class=\"column is-2\"><figure class=\"image\"><img class=\"is-rounded\" src=\"/images/katemiz.jpg\" alt=\"katemiz\"/></figure></div> \n      <div class=\"column\"><p class=\"has-text-centered has-text-font-light is-size-1 baslik svelte-17c3b1\">I&#39;m K\u0131l\u0131\xE7 Ali Temiz</p> \n\n        <p class=\"subtitle has-text-centered has-text-font-light has-text-light mt-6 is-size-5\">Professionally I&#39;m a mechanical engineer with 30+ years of aerospace\n          experience (manufacturing and engineering).</p> \n\n        <div class=\"has-text-centered my-3\"><span class=\"tag is-success genislik is-size-5 mx-2 has-text-font-light svelte-17c3b1\">Self-Trained</span> \n          <span class=\"tag is-warning genislik is-size-5 mx-2 svelte-17c3b1\">Amateur</span> \n          <span class=\"tag is-success genislik is-size-5 mx-2 svelte-17c3b1\">Web Developer</span></div> \n\n        <div class=\"columns is-mobile\"><div class=\"column is-8 is-offset-2\"><p class=\"subtitle has-text-centered has-text-font-light is-size-5 baslik svelte-17c3b1\">During my professional career, my hobby (programming and computer\n              aided engineering) helped me develop skills in web programming.\n              <br/>\n              turned into a self-trained full-stack web developer.</p></div></div></div></div></div>";
      t31 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div17.innerHTML = "<h1 class=\"title\" id=\"about\">About</h1> \n  <div class=\"notification\">I am a self-trained full stack web developer from Ankara-Turkey. Experienced\n    in developing web applications using mainly HTML/CSS/Javascript/MySQL/PHP.\n    Currently my preferred framework is Laravel.</div> \n\n  <h1 class=\"title\" id=\"education\">Education</h1> \n\n  <div class=\"notification\"><ul><li>BS in\n        <a href=\"https://me.metu.edu.tr/\">Mechanical Engineering</a>\n        from\n        <a href=\"https://www.metu.edu.tr/\">Middle East Technical University</a></li></ul></div> \n\n  <h1 class=\"title\" id=\"experience\">Experience</h1> \n\n  <div class=\"notification content\"><ul><li>Currently working as consultant in Skills Development (in Aerospace\n        Industry) for small/medium sized companies</li> \n\n      <li>Have worked in\n        <a href=\"https://www.tusas.com/en\">Turkish Aerospace Industries</a>\n        for more than 30 years</li></ul> \n\n    <a href=\"/images/katemiz_resume_EN.pdf\" class=\"mt-3\" id=\"resume\">Resume details here ...</a></div> \n\n  <h1 class=\"title\" id=\"works\">Works</h1> \n\n  <div class=\"notification content\">Developed many company wide web apps in\n    <a href=\"https://www.tusas.com/en\">Turkish Aerospace Industries - TAI</a>\n    for engineering teams to facilitate communication, monitoring and tracking\n    of engineering activities\n    <ul><li>eMemo - Coordination Memo Exchange Application (used wordwide by more\n        than 10 companies working with TAI)</li> \n      <li>eMOM - Minutes of Meeting Application (used by more than 400 engineers\n        more than 6 years)</li> \n\n      <li>eLibrary - Company wide Digital Libary</li> \n\n      <li>eTraining - Course-Curricilium, Student, Content and Exam Application\n        used more than 5 years by 3000 people</li></ul></div> \n\n  <h1 class=\"title\" id=\"skills\">Skills</h1> \n\n  <div class=\"notification content\"><ul><li>HTML/CSS (No professional training/education : about 20 years of\n        experience)</li> \n      <li>Javascript (No professional training/education : 4+ years of experience)</li> \n      <li>MySQL (No professional training/education : 15+ years of experience)</li> \n      <li>PHP (No professional training/education : 15+ years of experience)</li> \n\n      <li>Laravel (No professional training/education : 1 year of experience)</li> \n\n      <li>Linux (No professional training/education : 15+ years of experience)</li></ul></div> \n\n  <h1 class=\"title\" id=\"contact\">Contact</h1> \n\n  <div class=\"notification content\"><ul><li><a href=\"mailto:katemiz@gmail.com\">katemiz@gmail.com</a></li> \n      <li>+90 555 286 31 10</li> \n\n      <li><a href=\"https://github.com/katemiz\">https://github.com/katemiz</a></li> \n\n      <li><a href=\"https://kapkara.one\">https://kapkara.one</a>\n        [WIP, Not in production yet]</li></ul></div>";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", "navbar");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section, "class", "hero is-medium kahraman svelte-17c3b1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section, "id", "home");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div17, "class", "container my-4");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, nav, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t17, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t31, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div17, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(nav);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t17);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t31);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div17);
    }
  };
}

function instance($$self) {
  document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); // Add a click event on each of them

    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var deneme = document.getElementById(target); // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"

        el.classList.toggle('is-active');
        deneme.classList.toggle('is-active');
      });
    });
  });
  return [];
}

var Katemiz = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Katemiz, _SvelteComponent);

  var _super = _createSuper(Katemiz);

  function Katemiz(options) {
    var _this;

    _classCallCheck(this, Katemiz);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css);
    return _this;
  }

  return _createClass(Katemiz);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Katemiz);

/***/ }),

/***/ "./resources/js/Pages/Shared/Footer.svelte":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Shared/Footer.svelte ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/config/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Shared/Footer.svelte generated by Svelte v3.46.6 */



function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
} // (51:4) {#each params.stack as tech}


function create_each_block(ctx) {
  var li;
  var a;
  var t0_value =
  /*tech*/
  ctx[0].name + "";
  var t0;
  var a_href_value;
  var t1;
  return {
    c: function c() {
      li = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value =
      /*tech*/
      ctx[0].url);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, li, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, a);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, t1);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(li);
    }
  };
}

function create_fragment(ctx) {
  var footer;
  var div3;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var br;
  var t1;
  var a;
  var t2_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.company.name + "";
  var t2;
  var a_href_value;
  var t3;
  var div1;
  var p0;
  var t5;
  var p1;
  var t7;
  var div2;
  var p2;
  var t9;
  var p3;
  var t11;
  var nav;
  var ul;
  var each_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.stack;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      footer = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("footer");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      br = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("br");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p0.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.copyright);
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p1.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.version);
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p2.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.app.copyright);
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p3.textContent = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.company.motto);
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      nav = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("nav");
      ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = "/images/" + _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.company.logo)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "width", "28px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", "Company Icon");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.company.url);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "has-text-weight-light has-text-white");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "column has-text-centered-mobile");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p0, "class", "has-text-weight-light has-text-centered has-text-centered-mobile");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p1, "class", "has-text-weight-light has-text-centered has-text-centered-mobile is-size-7");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "column");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p2, "class", "has-text-weight-light has-text-right has-text-centered-mobile");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p3, "class", "has-text-weight-light has-text-right has-text-centered-mobile is-size-7");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "column");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "columns has-text-white");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(footer, "class", "footer has-background-dark");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(footer, "id", "footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", "breadcrumb is-centered has-bullet-separator is-small my-4");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "aria-label", "breadcrumbs");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, footer, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(footer, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, img);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, br);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, a);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, p0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, p1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, p2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, p3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t11, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, nav, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(ul, null);
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*params*/
      0) {
        each_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.stack;

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(ul, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(footer);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t11);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(nav);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

var Footer = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Footer, _SvelteComponent);

  var _super = _createSuper(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Footer);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./resources/js/Pages/Shared/Greet.svelte":
/*!************************************************!*\
  !*** ./resources/js/Pages/Shared/Greet.svelte ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Shared/Greet.svelte generated by Svelte v3.46.6 */


function create_fragment(ctx) {
  var section;
  var div2;
  var div0;
  var t28;
  var div1;
  var figure;
  var img;
  var img_src_value;
  var mounted;
  var dispose;
  return {
    c: function c() {
      section = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0.innerHTML = "<h1 class=\"title my-6 has-text-weight-light is-size-1 has-text-left\">Ak\u0131ll\u0131 Y\xF6netici / Ak\u0131ll\u0131 Uygulama</h1> \n            <h1 class=\"subtitle has-text-weight-light\">T\xFCm \u0130\u015Flemlerinizi Cepten Y\xF6netin</h1> \n\n\n            <p class=\"mb-3\">Bu uygulama ile t\xFCm apartman/site y\xF6neticleri t\xFCm verilerini ve b\xFCt\xE7elerini zorlanmadan y\xF6netebilmesi amac\u0131yla haz\u0131rlanm\u0131\u015Ft\u0131r.</p> \n        \n            <p class=\"mb-3\">U\u011Fra\u015Fmadan :</p> \n        \n            <ul><li>Aidat Y\xF6netimi\n                    <ul><li>Aidatlar\u0131n Formalar\u0131n\u0131n Haz\u0131rlanmas\u0131</li> \n                        <li>Aidatlar\u0131n \xD6dendi/\xD6denmedi Kayd\u0131</li> \n                        <li>Aidatlar\u0131n Bilgilerinin ki\u015Filere g\xF6nderilmesi</li></ul></li> \n\n                <li>Harcama Y\xF6netimi (Fatura)\n\n                    <ul><li>Do\u011Falgaz</li> \n                        <li>Elektrik</li> \n                        <li>Su/S\u0131cak Su</li> \n                        <li>Bak\u0131m/Tamirat vb</li></ul></li> \n\n\n                <li>Karar Y\xF6netimi\n\n                    <ul><li>Kararlar\u0131n Takibi/Tutulmas\u0131</li> \n                        <li>Kararar\u0131n Bildirimi</li></ul></li></ul>";
      t28 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      figure = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("figure");
      img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "column content is-half");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = "images/hero2.svg")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", "The Process Flow");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(figure, "class", "image is-1by1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "column is-half");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "columns");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section, "class", "section container");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t28);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, figure);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(figure, img);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(img, "click", showImg);
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section);
      mounted = false;
      dispose();
    }
  };
}

function showImg(el) {
  console.log(el.target);
  document.getElementById('modalImg').src = el.target.src;
  document.getElementById('imgModal').classList.add('is-active');
}

function closeModal() {
  document.getElementById('imgModal').classList.remove('is-active');
}

var Greet = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Greet, _SvelteComponent);

  var _super = _createSuper(Greet);

  function Greet(options) {
    var _this;

    _classCallCheck(this, Greet);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Greet);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Greet);

/***/ }),

/***/ "./resources/js/Pages/Shared/Hero.svelte":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Shared/Hero.svelte ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Shared/Hero.svelte generated by Svelte v3.46.6 */


function create_fragment(ctx) {
  var section;
  return {
    c: function c() {
      section = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      section.innerHTML = "<div class=\"hero-body has-background-grey\"><div class=\"container has-text-right\"><div class=\"columns\"><div class=\"column is-half\"><img src=\"/images/hero.svg\" alt=\"Logo\"/></div> \n        <div class=\"column\"><h1 class=\"title has-text-weight-light is-size-1 has-text-black\"><span class=\"has-text-weight-bold\">kapkara</span>\n            web house</h1> \n\n          <h2 class=\"title has-text-weight-light is-size-1 has-text-white\">productivity\n            <br/>\n            with web technologies</h2> \n          <p class=\"has-text-warning\">kapkara is a web development company.\n            <br/>\n            kapkara is specialized in providing consultancy services in\n            aerospace industry\n            <br/>\n            and web technologies. kapkara produces web software for\n            <br/>\n            productivity of engineering development especially required for\n            aerospace and defense industries.</p></div></div></div></div>";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section, "class", "hero is-medium is-bold");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section);
    }
  };
}

var Hero = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Hero, _SvelteComponent);

  var _super = _createSuper(Hero);

  function Hero(options) {
    var _this;

    _classCallCheck(this, Hero);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Hero);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icon.svelte":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Shared/Icon.svelte ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Pages_Shared_Icons_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Shared/Icons/Colors */ "./resources/js/Pages/Shared/Icons/Colors.js");
/* harmony import */ var _Pages_Shared_Icons_Sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Shared/Icons/Sizes */ "./resources/js/Pages/Shared/Icons/Sizes.js");
/* harmony import */ var _Pages_Shared_Icons_Svgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Shared/Icons/Svgs */ "./resources/js/Pages/Shared/Icons/Svgs.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Shared/Icon.svelte generated by Svelte v3.46.6 */





function create_fragment(ctx) {
  var html_tag;
  var html_anchor;
  return {
    c: function c() {
      html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag();
      html_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
      html_tag.a = html_anchor;
    },
    m: function m(target, anchor) {
      html_tag.m(
      /*svg*/
      ctx[0], target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, html_anchor, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(html_anchor);
      if (detaching) html_tag.d();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var name = $$props.name;
  var size = $$props.size;
  var color = $$props.color;
  var boyut, renk, path;

  if (size != null && size != undefined) {
    boyut = _Pages_Shared_Icons_Sizes__WEBPACK_IMPORTED_MODULE_2__.Sizes[size];
  } else {
    boyut = _Pages_Shared_Icons_Sizes__WEBPACK_IMPORTED_MODULE_2__.Sizes.XS;
  }

  if (color != null && color != undefined) {
    renk = _Pages_Shared_Icons_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors[color];
  } else {
    renk = _Pages_Shared_Icons_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.black;
  }

  if (name != null && name != undefined) {
    path = _Pages_Shared_Icons_Svgs__WEBPACK_IMPORTED_MODULE_3__.SVGS[name];
  } else {
    path = _Pages_Shared_Icons_Svgs__WEBPACK_IMPORTED_MODULE_3__.SVGS.home;
  }

  var svg = "\n    <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"".concat(boyut, "\"\n        viewBox=\"0 0 24 24\"\n        width=\"").concat(boyut, "\"\n        fill=\"").concat(renk, "\">\n        ").concat(path, "\n    </svg>");

  $$self.$$set = function ($$props) {
    if ('name' in $$props) $$invalidate(1, name = $$props.name);
    if ('size' in $$props) $$invalidate(2, size = $$props.size);
    if ('color' in $$props) $$invalidate(3, color = $$props.color);
  };

  return [svg, name, size, color];
}

var Icon = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Icon, _SvelteComponent);

  var _super = _createSuper(Icon);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      name: 1,
      size: 2,
      color: 3
    });
    return _this;
  }

  return _createClass(Icon);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./resources/js/Pages/Shared/Layout.svelte":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Shared/Layout.svelte ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Pages_Shared_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Shared/Nav.svelte */ "./resources/js/Pages/Shared/Nav.svelte");
/* harmony import */ var _Pages_Shared_Footer_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Shared/Footer.svelte */ "./resources/js/Pages/Shared/Footer.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Shared/Layout.svelte generated by Svelte v3.46.6 */




function create_fragment(ctx) {
  var nav;
  var t0;
  var t1;
  var footer;
  var current;
  nav = new _Pages_Shared_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({});
  var default_slot_template =
  /*#slots*/
  ctx[1]["default"];
  var default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  footer = new _Pages_Shared_Footer_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({});
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(nav.$$.fragment);
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (default_slot) default_slot.c();
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(footer.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(nav, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);

      if (default_slot) {
        default_slot.m(target, anchor);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(footer, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && (!current || dirty &
        /*$$scope*/
        1)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[0]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[0], dirty, null), null);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(nav.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(footer.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(nav.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(footer.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(nav, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
      if (default_slot) default_slot.d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(footer, detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$$set = function ($$props) {
    if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  return [$$scope, slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Layout, _SvelteComponent);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Layout);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./resources/js/Pages/Shared/Nav.svelte":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Shared/Nav.svelte ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/config/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Shared/Nav.svelte generated by Svelte v3.46.6 */



function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (39:14) {#each uygulamalar.apps as uygulama}


function create_each_block_1(ctx) {
  var a;
  var t_value =
  /*uygulama*/
  ctx[3].name + "";
  var t;
  var a_href_value;
  return {
    c: function c() {
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "navbar-item");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value =
      /*uygulama*/
      ctx[3].url);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
    }
  };
} // (38:12) {#each params.software as uygulamalar}


function create_each_block(ctx) {
  var t;
  var hr;
  var each_value_1 =
  /*uygulamalar*/
  ctx[0].apps;
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  return {
    c: function c() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      hr = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("hr");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(hr, "class", "navbar-divider");
    },
    m: function m(target, anchor) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(target, anchor);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, hr, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*params*/
      0) {
        each_value_1 =
        /*uygulamalar*/
        ctx[0].apps;

        var _i3;

        for (_i3 = 0; _i3 < each_value_1.length; _i3 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block_1(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(t.parentNode, t);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value_1.length;
      }
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(hr);
    }
  };
}

function create_fragment(ctx) {
  var nav;
  var div5;
  var div0;
  var t7;
  var div4;
  var div3;
  var a1;
  var t9;
  var div2;
  var p;
  var t11;
  var div1;
  var t12;
  var a2;
  var t14;
  var a3;
  var t16;
  var a4;
  var each_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.software;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      nav = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("nav");
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0.innerHTML = "<a class=\"navbar-item\" href=\"../\"><span class=\"icon-text is-size-5\"><span class=\"icon\"><img src=\"/images/baykus_orange.svg\" alt=\"Logo\"/></span> \n\n          <span class=\"has-text-weight-bold\">kapkara</span> \n          <span class=\"has-text-weight-light\">\xA0web house</span></span></a> \n\n      <span onclick=\"BurgerMenu(this)\" class=\"navbar-burger burger\" data-target=\"navbarMenu\"><span></span> \n        <span></span> \n        <span></span></span>";
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a1.textContent = "Home";
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p.textContent = "Apps";
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].c();
      }

      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      a2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a2.textContent = "Services";
      t14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      a3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a3.textContent = "Team";
      t16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      a4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a4.textContent = "Contact";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "navbar-brand");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", "/");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "class", "navbar-item is-active");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "navbar-link");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "navbar-dropdown");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "navbar-item has-dropdown is-hoverable");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a2, "href", "/services");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a2, "class", "navbar-item");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a3, "href", "/katemiz");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a3, "class", "navbar-item");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a4, "href", "/contact");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a4, "class", "navbar-item");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "navbar-end");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "id", "navbarMenu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "navbar-menu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "container");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", "navbar");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, nav, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, p);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].m(div1, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, a2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t14);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, a3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t16);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, a4);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*params*/
      0) {
        each_value = _config_config_js__WEBPACK_IMPORTED_MODULE_1__.params.software;

        var _i6;

        for (_i6 = 0; _i6 < each_value.length; _i6 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i6);

          if (each_blocks[_i6]) {
            each_blocks[_i6].p(child_ctx, dirty);
          } else {
            each_blocks[_i6] = create_each_block(child_ctx);

            each_blocks[_i6].c();

            each_blocks[_i6].m(div1, null);
          }
        }

        for (; _i6 < each_blocks.length; _i6 += 1) {
          each_blocks[_i6].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(nav);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

var Nav = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Nav, _SvelteComponent);

  var _super = _createSuper(Nav);

  function Nav(options) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Nav);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Colors.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Colors.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colors": () => (/* binding */ Colors)
/* harmony export */ });
var Colors = {
  white: '#FFFFFF',
  black: '#0A0A0A',
  light: '#F5F5F5',
  dark: '#363636',
  primary: '#00D1B2',
  link: '#3273DC',
  info: '#209CEE',
  success: '#48C774',
  warning: '#FFDD57',
  danger: '#FF3860',
  lightgrey: '#b5b5b5'
};

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Sizes.js":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Sizes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sizes": () => (/* binding */ Sizes)
/* harmony export */ });
var Sizes = {
  XS: 24,
  S: 28,
  M: 32,
  L: 48,
  XL: 64,
  XXL: 128
};

/***/ }),

/***/ "./resources/js/Pages/Shared/Icons/Svgs.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Shared/Icons/Svgs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGS": () => (/* binding */ SVGS)
/* harmony export */ });
var _SVGS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SVGS = (_SVGS = {
  home: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>',
  user: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>',
  register: '<g><rect fill="none" height="24" width="24"/></g><g><path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z"/></g>',
  logout: '<g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g>',
  edit: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>',
  "delete": '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>',
  cancel: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>',
  role: '<g><rect fill="none" height="24" width="24" y="0"/></g><g><g><rect height="1.5" width="4" x="14" y="12"/><rect height="1.5" width="4" x="14" y="15"/><path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,7V4h2v3v2h-2V7z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z"/><circle cx="9" cy="13.5" r="1.5"/><path d="M11.08,16.18C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43 C12,16.96,11.64,16.42,11.08,16.18z"/></g></g>',
  skill: '<path d="M21,23c-1.03,0-2.06-0.25-3-0.75h0c-1.89,1-4.11,1-6,0c-1.89,1-4.11,1-6,0C5.05,22.75,4.03,23,3,23H2l0-2h1 c1.04,0,2.08-0.35,3-1c1.83,1.3,4.17,1.3,6,0c1.83,1.3,4.17,1.3,6,0c0.91,0.65,1.96,1,3,1h1v2H21z M17,1.5c-1.1,0-2,0.9-2,2 s0.9,2,2,2s2-0.9,2-2S18.1,1.5,17,1.5z M14.43,8.48L12.18,10L16,13v3.84c0.53,0.38,1.03,0.78,1.49,1.17C16.81,18.59,15.94,19,15,19 c-1.2,0-2.27-0.66-3-1.5c-0.73,0.84-1.8,1.5-3,1.5c-0.33,0-0.65-0.05-0.96-0.14C5.19,16.9,3,14.72,3,13.28C3,12.25,4.01,12,4.85,12 c0.98,0,2.28,0.31,3.7,0.83l-0.53-3.1C7.91,9.06,8.2,8.35,8.8,7.94l2.15-1.45l-2-0.37L6.13,8.05L5,6.4L8.5,4l5.55,1.03 c0.45,0.09,0.93,0.37,1.22,0.89l0.88,1.55C17.01,8.98,18.64,10,20.5,10v2C17.91,12,15.64,10.58,14.43,8.48z M10.3,11.1l0.44,2.65 c0.92,0.42,2.48,1.27,3.26,1.75V14L10.3,11.1z"/>',
  training: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>',
  measurement: '<g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z"/><path d="M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z"/><path d="M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z"/></g></g>',
  eye: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>',
  list: '<g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>',
  add: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',
  arrow_fwd: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>',
  arrow_back: '<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>',
  arrow_up: '<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/>',
  arrow_down: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>',
  li_child: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/>',
  add_to_list: '<rect fill="none" height="24" width="24"/><path d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z"/>',
  remove_from_list: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>',
  add_child: '<g><rect fill="none" height="24" width="24"/></g><g><path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z"/></g>',
  back_to_list: '<path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"/>',
  search: '<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
  tree: '<path d="M0,0h24v24H0V0z" fill="none"/><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8. 41L19.59,7l-5,5l5,5L21,15.59z"/>',
  dirOpen: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>',
  dirClosed: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>',
  treeNode: '<path d="m 12,8.96875 c -1.395,0 -2.53125,1.13625 -2.53125,2.53125 0,1.395 1.13625,2.53125 2.53125,2.53125 1.395,0 2.53125,-1.13625 2.53125,-2.53125 C 14.53125,10.105 13.395,8.96875 12,8.96875 Z" />',
  fold: '<path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"/>',
  unfold: '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>',
  expand: '<g><g><rect height="2" width="16" x="4" y="20"/><rect height="2" width="16" x="4" y="2"/><polygon points="9.41,13.59 8,15 12,19 16,15 14.59,13.59 13,15.17 13,8.83 14.59,10.41 16,9 12,5 8,9 9.41,10.41 11,8.83 11,15.17"/></g></g>',
  compress: '<path d="M4,9v2h16V9H4z M16,4l-1.41-1.41L13,4.17V1h-2v3.19L9.39,2.61L8,4l4,4L16,4z M4,14h16v-2H4V14z M8,19l1.39,1.39L11,18.81 V22h2v-3.17l1.59,1.59L16,19l-4-4L8,19z"/>',
  yonetici: '<path d="M4,18v-0.65c0-0.34,0.16-0.66,0.41-0.81C6.1,15.53,8.03,15,10,15c0.03,0,0.05,0,0.08,0.01c0.1-0.7,0.3-1.37,0.59-1.98 C10.45,13.01,10.23,13,10,13c-2.42,0-4.68,0.67-6.61,1.82C2.51,15.34,2,16.32,2,17.35V20h9.26c-0.42-0.6-0.75-1.28-0.97-2H4z"/><path d="M10,12c2.21,0,4-1.79,4-4s-1.79-4-4-4C7.79,4,6,5.79,6,8S7.79,12,10,12z M10,6c1.1,0,2,0.9,2,2s-0.9,2-2,2 c-1.1,0-2-0.9-2-2S8.9,6,10,6z"/><path d="M20.75,16c0-0.22-0.03-0.42-0.06-0.63l1.14-1.01l-1-1.73l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L18,11h-2l-0.3,1.49 c-0.4,0.15-0.76,0.36-1.08,0.63l-1.45-0.49l-1,1.73l1.14,1.01c-0.03,0.21-0.06,0.41-0.06,0.63s0.03,0.42,0.06,0.63l-1.14,1.01 l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63L16,21h2l0.3-1.49c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1.01 C20.72,16.42,20.75,16.22,20.75,16z M17,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,18,17,18z"/>',
  mail: '<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>',
  next: '<path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/>',
  lira: '<path d="M9,8.76V3h2v4.51L15,5v2.36l-4,2.51l0.01,2.35L15,9.72v2.36l-4,2.51V19c2.76,0,5-2.24,5-5h2c0,3.87-3.13,7-7,7H9v-5.16 l-3,1.88l0-2.36l3-1.88v-2.36L6,13l0-2.36L9,8.76z"/>',
  report: '<path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>',
  person_pin: '<path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12v-1.42zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48z"/>',
  filter: '<path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/>',
  settings: '<path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>',
  password: '<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>',
  previous: '<path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/>',
  stats: '<g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><rect height="5" width="2" x="7" y="12"/><rect height="10" width="2" x="15" y="7"/><rect height="3" width="2" x="11" y="14"/><rect height="2" width="2" x="11" y="10"/></g></g>',
  info: '<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>',
  toggle_on: '<path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
  toggle_off: '<path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
  save: '<path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/>',
  live_help: '<path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-8-3h2v2h-2zm1-8c1.1 0 2 .9 2 2 0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4S8 6.79 8 9h2c0-1.1.9-2 2-2z"/>'
}, _defineProperty(_SVGS, "info", '<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>'), _defineProperty(_SVGS, "people", '<path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"/>'), _defineProperty(_SVGS, "service", '<path d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13c1.03-2.58 3.55-4.41 6.5-4.41z"/>'), _SVGS);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");


_inertiajs_progress__WEBPACK_IMPORTED_MODULE_1__.InertiaProgress.init({
  color: 'red',
  showSpinner: true
});
(0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_0__.createInertiaApp)({
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$")("./".concat(name, ".svelte"));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props;
    new App({
      target: el,
      props: props
    });
  }
});

/***/ }),

/***/ "./resources/js/config/config.js":
/*!***************************************!*\
  !*** ./resources/js/config/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gui": () => (/* binding */ gui),
/* harmony export */   "params": () => (/* binding */ params)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var params = {
  company: {
    name: 'kapkara',
    link: 'https://kapkara.one',
    logo: 'baykus_orange.svg',
    motto: 'simplicity in action',
    title: 'web technologies | design house'
  },
  app: {
    name: 'kapkara',
    title: 'kapkara web house',
    description: 'web technologies',
    app_header_logo: 'app_header_logo.svg',
    app_footer_logo: 'app_footer_logo.svg',
    version: '1.0',
    copyright: '© 2022'
  },
  software: [{
    group: 'Productivity Apps',
    apps: [{
      name: 'Tensor',
      label: 'Skills Management',
      img: 'tensor_brand_logo.svg',
      url: 'https://tensor.kapkara.one',
      desc: "\n            <ul>\n            <li>Having trouble in managing all skills, roles, levels of competency of your talents?</li>\n            <li>Need a centralized web app to keep all your assesments and share them with your employee?</li>\n            <li>Tensor is a web based application tailored for your needs. In todays fast changing work environments,\n            employees need to adapt to changing requirements.</li>\n            </ul>"
    }, {
      name: 'eMOM',
      label: 'Minutes of Meetings',
      img: 'emom_brand_logo.svg',
      url: 'https://emom.kapkara.one',
      desc: "\n            <p>Private and/or enterprise level Minutes of Meeting (MoM) application with centeralize repository for all data</p>\n            <ul>\n            <li>Write MoM during and after the meeting.</li>\n            <li>Write, trace and monitor MoM Action Items</li>\n            <li>Link MoM supporting documentation to MoM.</li>\n            <li>Distribute MoM and attachments to participants and/or other related people</li>\n            <li>Distribute MoM to project members</li>\n            <li>Write independent Action Items to individuals and  trace and monitor them.</li>\n            <li>Reply, accept/reject Action Items</li>\n            </ul>"
    }, _defineProperty({
      name: 'eMemo',
      label: 'Project Memo Exchange',
      img: 'ememo_brand_logo.svg',
      desc: 'Communication Made Easy',
      url: 'https://ememo.kapkara.one'
    }, "desc", "\n            <p>Memo Exchange Platform for multi-group, multi-company, multi-national projects</p>\n            <ul>\n            <li>Centralized platform for exchanging (engineering, program, quality, manufacturing etc) memo</li>\n            <li>All memos are automatically distributed to all members of receiving group, company.</li>\n            <li>Groups can access received and sent memos only</li>\n            <li>For multi company projects, a prime company can manage all subcontactors.</li>\n            </ul>"), {
      name: 'k-library',
      label: 'Personal Digital Library - PDL',
      img: 'app_header_logo.svg',
      url: 'https://k-library.kapkara.one',
      desc: "\n            <p>k-library, \"Personal Digital Library\" is an app designed to keep your digital assets in one place and accessible only for you.</p>  <p>You can store them in your server and tag them.</p>\n              <ul>\n              <li>Doc files such as pdf, doc, xls</li>\n              <li>Audio files (music)</li>\n              <li>Video and Film films</li>\n              <li>Images and Photos.</li>\n              <li>Any file that is in digital format.</li>\n            </ul>"
    }, {
      name: 'eDoc',
      label: 'Write Your Documentation in HTML',
      img: 'edoc_brand_logo.svg',
      url: 'https://edoc.kapkara.one',
      desc: "\n            <p>Centralized platform for writing enterprise level documentation</p>\n            <ul>\n            <li>Web based (HTML) infrastructure.</li>\n            <li>Standards, Specifications, Procedures etc</li>\n            <li>Standardized formats for each company</li>\n            <li>Configuration controlled, with release and change control flow.</li>\n            <li>Mobile friendly access accross.</li>\n            </ul>"
    }]
  }, {
    group: 'Utility Apps',
    apps: [{
      name: 'eYönetici',
      label: 'Bina Yönetim Uygulaması',
      img: 'yonetici_brand_logo.svg',
      url: 'https://yonetici.kapkara.one',
      desc: "\n            <p>Gelir/Gider (Aidat, Su/Elektrik/Do\u011Falgaz/S\u0131cak Su) gibi faturalama ve \xF6deme takip i\u015Flemlerini\n            yap\u0131p and\u0131nda d\xF6k\xFCm alabilece\u011Finiz bir uygulama.</p>"
    }, {
      name: 'Sınav Kapısı',
      label: 'Deneme Sınavları Merkezi',
      img: 'test_brand_logo.svg',
      url: 'https://sinavkapisi.kapkara.one',
      desc: "\n            <p>Kendinizi her an deneyebilece\u011Finiz ve geli\u015Fiminizi izleyebilece\u011Finiz deneme s\u0131navlar\u0131 merkezi</p>"
    }]
  }],
  stack: [{
    name: 'Laravel',
    url: 'https://laravel.com'
  }, {
    name: 'InertiaJS',
    url: 'https://inertiajs.comm'
  }, {
    name: 'Svelte',
    url: 'https://svelte.dev'
  }, {
    name: 'Bulma',
    url: 'https://bulma.io'
  }]
};
var gui = {
  icons: {
    size: 'S',
    color: 'link'
  }
};

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$":
/*!***************************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*\.svelte$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Apps.svelte": "./resources/js/Pages/Apps.svelte",
	"./Index.svelte": "./resources/js/Pages/Index.svelte",
	"./Katemiz.svelte": "./resources/js/Pages/Katemiz.svelte",
	"./Shared/Footer.svelte": "./resources/js/Pages/Shared/Footer.svelte",
	"./Shared/Greet.svelte": "./resources/js/Pages/Shared/Greet.svelte",
	"./Shared/Hero.svelte": "./resources/js/Pages/Shared/Hero.svelte",
	"./Shared/Icon.svelte": "./resources/js/Pages/Shared/Icon.svelte",
	"./Shared/Layout.svelte": "./resources/js/Pages/Shared/Layout.svelte",
	"./Shared/Nav.svelte": "./resources/js/Pages/Shared/Nav.svelte"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","css/bulma","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./node_modules/bulma/bulma.sass"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);