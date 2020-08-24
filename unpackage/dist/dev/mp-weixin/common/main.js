(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*****************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 9));


__webpack_require__(/*! @/static/css/xx-base.css */ 23);
__webpack_require__(/*! @/static/css/animate.css */ 24);


__webpack_require__(/*! @/static/js/routerList.js */ 16);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var navBar = function navBar() {return __webpack_require__.e(/*! import() | components/global/navBar */ "components/global/navBar").then(__webpack_require__.bind(null, /*! @/components/global/navBar.vue */ 59));};var mainContainer = function mainContainer() {return __webpack_require__.e(/*! import() | components/global/mainContainer */ "components/global/mainContainer").then(__webpack_require__.bind(null, /*! @/components/global/mainContainer.vue */ 66));};var imgWithLoading = function imgWithLoading() {return __webpack_require__.e(/*! import() | components/global/imgWithLoading */ "components/global/imgWithLoading").then(__webpack_require__.bind(null, /*! @/components/global/imgWithLoading.vue */ 71));};






_vue.default.component('navBar', navBar);
_vue.default.component('mainContainer', mainContainer);
_vue.default.component('imgWithLoading', imgWithLoading);

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!********************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/pages.json ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/*!*************************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/pages.json?{"type":"style"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/user/selectSchool": {}, "pages/tabPage/home": {}, "pages/tabPage/rankList": {}, "pages/tabPage/userCenter": {}, "pages/user/addFriend": {} }, "globalStyle": { "navigationBarTextStyle": "white", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#007AFF", "backgroundColor": "#FFFFFF", "navigationStyle": "custom" } };exports.default = _default;

/***/ }),
/* 8 */
/*!************************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/pages.json?{"type":"stat"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__FE9C30E" };exports.default = _default;

/***/ }),
/* 9 */
/*!*****************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/App.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 10);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 20);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 22);
var render, staticRenderFns





/* normalize component */

var component = Object(_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "G:/work/测试专区/tomatoKingdom_uniapp.vue/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!******************************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 11);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/work/测试专区/tomatoKingdom_uniapp.vue/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _common = _interopRequireDefault(__webpack_require__(/*! @/static/js/common.js */ 12));
var _ajax = _interopRequireDefault(__webpack_require__(/*! @/static/js/ajax.js */ 17));
var _bus = _interopRequireDefault(__webpack_require__(/*! @/static/js/bus.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  onLaunch: function onLaunch() {
    console.log("App Launch");

    var http = new _ajax.default();
    var common = new _common.default();
    var Router = common.router();

    uni.$com = common;
    uni.$toast = common.showToast;
    uni.$router = new Router();
    uni.$ajax = http.ajax.bind(http);
    uni.$imgBaseUrl = "https://yuequn.ozkoalas.cn";
    uni.$bus = new _bus.default();
    uni.$checkTapTooFaster = common.checkTapTooFaster; //频繁点击

  },
  onShow: function onShow() {
    console.log("App Show");
  },
  onHide: function onHide() {
    console.log("App Hide");
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 12 */
/*!*****************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/static/js/common.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var Common = /*#__PURE__*/function () {function Common() {_classCallCheck(this, Common);}_createClass(Common, [{ key: "showToast", value: function showToast(_ref)
    {var msg = _ref.msg,icon = _ref.icon,duration = _ref.duration,isShowMask = _ref.isShowMask;
      if (msg === null) return false;
      if (msg === undefined) {msg = '存在未定义的值';};

      if (typeof msg !== 'string') {
        console.error('有错误', msg);
        msg = JSON.stringify(msg);
      };

      console.info('msg', msg);

      uni.showToast({
        title: msg,
        icon: icon || 'none',
        duration: duration || 2500,
        mask: isShowMask || false,
        fail: function fail(error) {
          console.error('showToast', error);
        } });

    } }, { key: "openToWin", value: function openToWin(

    e) {
      console.info('e', e);
      var name = e.currentTarget.dataset.pagename;

      console.info('name', name);
      uni.$router.push({
        name: name });

    } }, { key: "confirm", value: function confirm()

    {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {var

        title =






        options.title,content = options.content,showCancel = options.showCancel,cancelText = options.cancelText,cancelColor = options.cancelColor,confirmText = options.confirmText,confirmColor = options.confirmColor;

        uni.showModal({
          title: title || '是否确定',
          content: content || '',
          showCancel: showCancel !== undefined ? showCancel : true,
          cancelText: cancelText || '取消',
          cancelColor: cancelColor || '#000000',
          confirmText: confirmText || '确定',
          confirmColor: confirmColor || '#3CC51F',
          success: function success(result) {
            if (result.confirm) {
              resolve(true);
            }
          },
          fail: function fail(error) {

            console.error('error', error);
            reject(error);
          } });


      });
    }

    //去登录
  }, { key: "toLogin", value: function toLogin() {
      uni.navigateTo({
        url: '/pages/user/login/login',
        fail: function fail(error) {
          console.error('error', error);
        } });

    } }, { key: "router", value: function router()

    {
      return (/*#__PURE__*/function () {
          function Router() {_classCallCheck(this, Router);
            var routerList = __webpack_require__(/*! ./routerList.js */ 16).default;

            this.routerList = routerList;
            this.currentRouterInfo = null;

            this.routerResolveList = [];
          }_createClass(Router, [{ key: "push", value: function push(

            options) {var _this2 = this;
              return new Promise( /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {var _ref3, path, toRouterName;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                            _this2.beforeRouterEnter(options, reject));case 2:_ref3 = _context.sent;path = _ref3.path;toRouterName = _ref3.toRouterName;

                          try {

                            uni.navigateTo({
                              url: path,
                              fail: function fail(error) {
                                uni.switchTab({
                                  url: path,
                                  fail: function fail(err) {
                                    reject(error);
                                  },
                                  success: function success() {
                                    resolve();
                                  } });

                              },
                              success: function success() {
                                resolve();
                              },
                              complete: function complete() {
                                delete _this2[toRouterName];
                              } });


                          } catch (error) {
                            console.error('error', error);

                            delete _this2[toRouterName];
                            reject(error);
                          }case 6:case "end":return _context.stop();}}}, _callee, this);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}());

            } }, { key: "replace", value: function replace(

            options) {var _this3 = this;
              return new Promise( /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(resolve, reject) {var _ref5, path, toRouterName;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                            _this3.beforeRouterEnter(options, reject));case 2:_ref5 = _context2.sent;path = _ref5.path;toRouterName = _ref5.toRouterName;

                          uni.redirectTo({
                            url: path,
                            success: function success() {
                              resolve();
                            },
                            fail: function fail(error) {
                              reject(error);
                            } });case 6:case "end":return _context2.stop();}}}, _callee2, this);}));return function (_x3, _x4) {return _ref4.apply(this, arguments);};}());


            } }, { key: "reLaunch", value: function reLaunch(

            options) {var _this4 = this;
              return new Promise( /*#__PURE__*/function () {var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(resolve, reject) {var _ref7, path, toRouterName;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                            _this4.beforeRouterEnter(options, reject));case 2:_ref7 = _context3.sent;path = _ref7.path;toRouterName = _ref7.toRouterName;

                          uni.reLaunch({
                            url: path,
                            success: function success() {
                              resolve();
                            },
                            fail: function fail(error) {
                              reject(error);
                            } });case 6:case "end":return _context3.stop();}}}, _callee3, this);}));return function (_x5, _x6) {return _ref6.apply(this, arguments);};}());



            } }, { key: "beforeRouterEnter", value: function () {var _beforeRouterEnter = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(

              options, reject) {var _options, toRouterName, getUserPermise, query, currentRouterInfo, path, meta, queryToString, key, item;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                        if (options.currentTarget) {
                          options = this.transfromPageOptions(options);
                        }_options =

                        options, toRouterName = _options.name, getUserPermise = _options.getUserPermise, query = _options.query;if (!(

                        this[toRouterName] === true)) {_context4.next = 5;break;}
                        console.error('正在打开目标页面');return _context4.abrupt("return",
                        false);case 5:


                        this[toRouterName] = true;

                        console.info('toRouterName', toRouterName);


                        currentRouterInfo = this.routerList[toRouterName];
                        path = currentRouterInfo.path, meta = currentRouterInfo.meta;if (

                        toRouterName) {_context4.next = 11;break;}throw '路由名字有误';case 11:if (
                        path) {_context4.next = 13;break;}throw '路由地址有误';case 13:if (!(

                        meta && getUserPermise)) {_context4.next = 24;break;}_context4.prev = 14;_context4.next = 17;return (

                          this.checkByMetaBeforePushRouter(meta));case 17:_context4.next = 24;break;case 19:_context4.prev = 19;_context4.t0 = _context4["catch"](14);

                        delete this[toRouterName];

                        reject(null);return _context4.abrupt("return",
                        false);case 24:



                        this.currentRouterInfo = currentRouterInfo;

                        //参数转化----开始
                        queryToString = '';

                        for (key in query) {
                          item = query[key];

                          queryToString += '&' + key + '=' + item;
                        }

                        queryToString = queryToString.replace('&', '?');

                        //参数转化----结束
                        path = '/' + path + queryToString;return _context4.abrupt("return",

                        {
                          path: path,
                          toRouterName: toRouterName });case 30:case "end":return _context4.stop();}}}, _callee4, this, [[14, 19]]);}));function beforeRouterEnter(_x7, _x8) {return _beforeRouterEnter.apply(this, arguments);}return beforeRouterEnter;}() }, { key: "back",


            //页面栈后退
            value: function back(backLength, backObj) {var _this5 = this;
              return new Promise(function (resolve, reject) {

                if (_this5.isBacking === true) {
                  console.error('正在后退关闭页面');
                  return false;
                }

                _this5.isBacking = true;
                var currentPageLen = getCurrentPages().length;

                if (currentPageLen > 1 && backLength !== 'home') {
                  var deltaLen = Math.abs(backLength);

                  uni.navigateBack({
                    delta: deltaLen,
                    success: function success() {
                      resolve();
                    },
                    fail: function fail(error) {
                      console.error('error', error);
                      reject(error);
                    },
                    complete: function complete() {
                      _this5.isBacking = false;
                    } });

                } else {
                  uni.switchTab({
                    url: '/' + _this5.routerList['home'].path,
                    success: function success() {
                      resolve();
                    },
                    fail: function fail(error) {
                      console.info('error', error);
                      reject(error);
                    },
                    complete: function complete() {
                      _this5.isBacking = false;
                    } });

                }
              });
            } }, { key: "checkByMetaBeforePushRouter",

            //打开新页面前，拦截处理
            value: function checkByMetaBeforePushRouter(meta) {
              try {var _meta$entryBeforeUser =
                meta.entryBeforeUserPermise,title = _meta$entryBeforeUser.title,content = _meta$entryBeforeUser.content;

                return new Promise(function (resolve, reject) {
                  uni.showModal({
                    title: title,
                    content: content,
                    showCancel: true,
                    cancelText: '取消',
                    cancelColor: '#000000',
                    confirmText: '确定',
                    confirmColor: '#3CC51F',
                    success: function success(result) {
                      if (result.confirm) {
                        resolve(true);
                      } else {
                        reject(false);
                      }
                    },
                    fail: function fail(err) {
                      reject(err);
                    } });


                });
              } catch (error) {
                console.error('error', error);
                throw error;
              }
            } }, { key: "transfromPageOptions", value: function transfromPageOptions(

            e) {
              console.info('e', e);

              try {
                var dataset = e.currentTarget.dataset;
                var newOptions = {
                  name: null,
                  path: null,
                  query: {} };

                var query = newOptions.query;

                for (var key in dataset) {
                  var item = dataset[key];

                  if (newOptions[key] !== undefined) {
                    newOptions[key] = item;
                  } else {
                    query[key] = item;
                  }
                }

                console.info('transfromnewOptions', newOptions);

                if (!newOptions.name) {
                  throw '路由参数有误';
                }

                return newOptions;
              } catch (error) {
                uni.$toast({
                  msg: error });

              }
            } }]);return Router;}());



    } }, { key: "getDomRect", value: function getDomRect(_ref8)

    {var _this = _ref8._this,dom = _ref8.dom;
      return new Promise(function (resolve) {
        var domQuery = uni.createSelectorQuery().in(_this);
        var _pageRect = domQuery.select(dom).boundingClientRect();

        console.info('_pageRect', _pageRect);

        _pageRect.exec(function (res) {
          console.info('res', res);
          resolve(res[0]);
        });
      });
    } }, { key: "checkValueByRules", value: function checkValueByRules(

    inputList) {
      var valueObj = {};

      inputList.forEach(function (item) {var

        id =




        item.id,inputValue = item.value,emptyValueTips = item.emptyValueTips,mapKey = item.mapKey,rules = item.rules;

        if (emptyValueTips && (!inputValue || !inputValue.trim())) {
          valueObj = null;
          throw emptyValueTips || '输入不能为空';
        };

        if (rules) {
          rules.forEach(function (ruleItem) {
            var checkRuleRet = ruleItem(inputValue);

            if (typeof checkRuleRet === 'string') {
              valueObj = null;
              throw checkRuleRet;
            }
          });
        }

        valueObj[mapKey] = id || inputValue || '';
      });

      return valueObj;
    } }, { key: "onShareAppMessage",

    // onPageScroll(e) {
    //     let onPageScrollToBottom =
    //       this.onPageScrollToBottom ||
    //       (this.onPageScrollToBottom = uni.$com.isScrollToBottom.bind(this));

    //     const isScrollToBottom = onPageScrollToBottom({
    //       e,
    //       keepBottom: 10,
    //     });

    //     if (isScrollToBottom === true) {
    //       this.getAndSetUserPlantRecordList({
    //         isGetNewList: false,
    //       })
    //     }

    //   },

    // isScrollToBottom({ e, keepBottom }) {
    //     const scrollTop = e && e.scrollTop;
    //     const pageHeight = this.pageHeight;
    //     const screenHeight = this.screenHeight || (this.screenHeight = uni.getSystemInfoSync().windowHeight);

    //     // console.info('scrollTop', scrollTop);
    //     // console.info('pageHeight', pageHeight);
    //     // console.info('screenHeight', screenHeight);
    //     // console.info('scrollTop + screenHeight', scrollTop + screenHeight);

    //     if (scrollTop && pageHeight && scrollTop + screenHeight >= pageHeight - keepBottom) {

    //         if (this.isPageBottom !== true) {
    //             console.error('到底了');

    //             this.isPageBottom = true;

    //             return true;
    //         }

    //     } else {
    //         this.isPageBottom = false;
    //     }
    // };
    value: function onShareAppMessage()
    {
      var myInfo = uni.getStorageSync('userInfo');
      var _routerList = uni.$router.routerList;
      var path;

      if (myInfo === null) {
        path = _routerList.home.path;
      } else {
        path = _routerList.friendManor.path + '?userID=' + myInfo.user_id + '&isEntryByShare=true';
      };

      console.info('path', path);

      return {
        title: '快来我的番茄王国吧~',
        path: path };

    } }, { key: "checkTapTooFaster",

    //频繁点击限制
    value: function checkTapTooFaster() {var timeInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
      var lastTapNavTime = this.lastTapNavTime || 0;
      var checkRet;

      if (new Date().getTime() - lastTapNavTime < timeInterval) {
        uni.$toast({
          msg: '' });

        checkRet = true;
      } else {
        checkRet = false;
      }

      this.lastTapNavTime = new Date().getTime();
      return checkRet;
    } }, { key: "onDevelopingTips", value: function onDevelopingTips()

    {
      uni.$toast({
        msg: '开发中，请耐心等待' });

    } }, { key: "getAndBindUserClient",


    //获取并绑定用户信息
    value: function getAndBindUserClient() {
      return new Promise( /*#__PURE__*/function () {var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(resolve, reject) {var _ref10, res, clientList, clientListLen;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.prev = 0;_context6.next = 3;return (

                    uni.$ajax({
                      apiKey: 'getUserClientList' }));case 3:_ref10 = _context6.sent;res = _ref10.res;


                  clientList = res.data;
                  clientListLen = clientList.length;

                  console.info('去绑定客户信息', '');

                  //有客户信息，就弹出actionSheet选择后, 并绑定客户信息
                  if (!(clientListLen > 0)) {_context6.next = 15;break;}_context6.next = 11;return (

                    uni.$com.confirm({
                      title: '请先绑定客户信息',
                      content: '服务需要，请先选择并绑定客户信息',
                      showCancel: false }));case 11:


                  uni.$router.push({
                    name: 'clientList' });


                  uni.$bus.on('changeClientInfo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                              uni.$router.back(-1));case 2: //特殊操作：用于关闭绑定
                            uni.$bus.off('changeClientInfo');
                            resolve(true);case 4:case "end":return _context5.stop();}}}, _callee5, this);})));_context6.next = 17;break;case 15:



                  // 没有客户信息, 直接返回

                  console.info('没有客户信息', '');
                  resolve(true);case 17:_context6.next = 22;break;case 19:_context6.prev = 19;_context6.t0 = _context6["catch"](0);


                  reject(_context6.t0);case 22:case "end":return _context6.stop();}}}, _callee6, this, [[0, 19]]);}));return function (_x9, _x10) {return _ref9.apply(this, arguments);};}());


    } }]);return Common;}();var _default =



Common;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/*!*********************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/static/js/routerList.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  home: {
    path: "pages/tabPage/home",
    meta: {
      pageTitle: '',
      bgColor: 'transpant',
      color: '#fff',
      disRenderBackBtn: true } },


  rankList: {
    path: "pages/tabPage/rankList/rankList",
    meta: {
      pageTitle: '排行榜',
      bgColor: 'transpant',
      color: '#fff',
      disRenderBackBtn: true } },


  userCenter: {
    path: "pages/tabPage/userCenter/userCenter",
    meta: {
      pageTitle: '个人中心',
      bgColor: 'transpant',
      color: '#fff',
      disRenderBackBtn: true } },


  addFriend: {
    path: "pages/user/addFriend",
    meta: {
      pageTitle: '添加好友',
      bgColor: '#80c269',
      color: '#fff' } },


  selectSchool: {
    path: "pages/user/selectSchool",
    meta: {
      pageTitle: '选择学校',
      bgColor: '#80c269',
      color: '#fff' } } };exports.default = _default;

/***/ }),
/* 17 */
/*!***************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/static/js/ajax.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));var _api = _interopRequireDefault(__webpack_require__(/*! ./api.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Http = /*#__PURE__*/function () {
  function Http() {_classCallCheck(this, Http);
    this.apiKeyObj = {};
    this.apiObj = _api.default;
  }_createClass(Http, [{ key: "transformRequest",

    //请求参数转换
    value: function transformRequest(data) {
      var ret = '';
      var _encodeURIComponent = encodeURIComponent;

      for (var key in data) {
        var item = data[key];

        if (item.__proto__.constructor === Array) {
          for (var index = 0, len = item.length; index < len; index++) {
            ret += _encodeURIComponent(key + '[]') + '=' + _encodeURIComponent(item[index]) + '&';
          }
        } else {
          ret += _encodeURIComponent(key) + '=' + _encodeURIComponent(item) + '&';
        }
      }
      return ret;
    } }, { key: "wxRequest",

    //微信请求
    value: function wxRequest(options, api) {var _this = this;
      return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {var ajaxType, data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

                  ajaxType =

                  options.ajaxType, data = options.data;

                  // if (api === this.lastRequestApi && JSON.stringify(data) === JSON.stringify(this.lastRequestData)) {
                  //     // uni.$toast({
                  //     //     msg: '请求中，请稍候~',
                  //     // });
                  //     reject('请求中，请稍候~');
                  //     return false;
                  // }

                  _this.lastRequestApi = api;
                  _this.lastRequestData = data;

                  uni.request({
                    url: 'https://lexue.ozkoalas.cn' + api,
                    header: {
                      "Content-Type": "application/x-www-form-urlencoded",
                      "Authorization": uni.getStorageSync("token") || "" },

                    method: ajaxType || 'POST',
                    // transformRequest: [this.transformRequest],
                    dataType: 'json',
                    data: data || {},
                    success: function success() {var respon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                      resolve(respon);
                    },
                    fail: function fail(error) {
                      reject(error);
                    },
                    complete: function complete() {
                      delete _this.lastRequestApi;
                      delete _this.lastRequestData;
                    } });case 4:case "end":return _context.stop();}}}, _callee, this);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


    } }, { key: "wxUploadFile", value: function wxUploadFile(

    options, api) {
      return new Promise(function (resolve, reject) {var

        filePath =
        options.filePath;

        uni.uploadFile({
          url: 'https://yuequn.ozkoalas.cn' + api,
          filePath: filePath,
          name: 'image',
          header: {
            "Authorization": uni.getStorageSync("token") || '' },

          formData: {},
          success: function success() {var respon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            resolve(respon);
          },
          fail: function fail(error) {
            reject(error);
          } });

      });
    } }, { key: "requestSuccess",


    //请求成功
    value: function requestSuccess(requestRet) {var
      code = requestRet.code,msg = requestRet.msg,res = requestRet.res;

      console.error('code', code);

      switch (code) {// -1 错误数据  -90001: 要登录 -90002: 没有客户资质
        case 1:
          return true;
        case -1:
          throw msg;
        case -90001:
          this.toLogin();
          throw null;
        case -90002:
          // res && res.token && uni.setStorageSync('token', res.token); //保存token
          throw msg;

        // this.toRegister();
        // throw null;
      }
    } }, { key: "toLogin", value: function () {var _toLogin = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:



                console.info('toLogin', 2323);_context2.next = 3;return (
                  uni.$router.push({
                    getUserPermise: true,
                    name: 'login' }));case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function toLogin() {return _toLogin.apply(this, arguments);}return toLogin;}() }, { key: "toRegister", value: function () {var _toRegister = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
























                  uni.$router.push({
                    getUserPermise: true,
                    name: 'register' }));case 2:case "end":return _context3.stop();}}}, _callee3, this);}));function toRegister() {return _toRegister.apply(this, arguments);}return toRegister;}() }, { key: "showLoading", value: function showLoading()























    {var _this2 = this;
      clearTimeout(this.showLoadingTimer);
      this.showLoadingTimer = setTimeout(function () {
        uni.showLoading();
        _this2.showLodding = true;
      }, 150);
    } }, { key: "hideLoading", value: function hideLoading()

    {
      clearTimeout(this.showLoadingTimer);

      if (this.showLodding === true) {
        uni.hideLoading();
        this.showLodding = false;
      }
    } }, { key: "ajax", value: function ajax()

    {var _this3 = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise( /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {var apiKey, isUploadFile, api, _ref3, statusCode, data;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                  apiKey = options.apiKey, isUploadFile = options.isUploadFile;_context4.prev = 1;


                  api = _this3.apiObj[apiKey];if (

                  api) {_context4.next = 5;break;}throw '请求地址有误';case 5:

                  _this3.showLoading();

                  //请求开始
                  if (


                  isUploadFile) {_context4.next = 12;break;}_context4.next = 9;return _this3.wxRequest(options, api);case 9:_context4.t0 = _context4.sent;_context4.next = 15;break;case 12:_context4.next = 14;return _this3.wxUploadFile(options, api);case 14:_context4.t0 = _context4.sent;case 15:_ref3 = _context4.t0;statusCode = _ref3.statusCode;data = _ref3.data;

                  console.info('---请求返回结果---：', data);_context4.t1 =

                  statusCode;_context4.next = _context4.t1 ===
                  200 ? 22 : _context4.t1 ===



                  500 ? 26 : 27;break;case 22:_context4.next = 24;return _this3.requestSuccess(data);case 24:resolve(data);return _context4.abrupt("break", 28);case 26:throw (
                    '网络欠佳');case 27:throw (

                    '网络请求出错，未知错误');case 28:_context4.next = 35;break;case 30:_context4.prev = 30;_context4.t2 = _context4["catch"](1);




                  //请求完毕：处理错误
                  console.error('ajax出错详情：', _context4.t2);

                  if (_context4.t2 && /request:fail/.test(_context4.t2.errMsg)) {
                    _context4.t2 = "请求失败，请检查网络";
                  }

                  reject(_context4.t2);case 35:_context4.prev = 35;

                  _this3.hideLoading();return _context4.finish(35);case 38:case "end":return _context4.stop();}}}, _callee4, this, [[1, 30, 35, 38]]);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());


    } }]);return Http;}();exports.default = Http;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */
/*!**************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/static/js/api.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {

  //用户相关
  login: '/api.php/user/login', //POST 微信登录
  updateUserInfo: '/api.php/user/updateUserRegisterInfo', //POST 更新用户注册信息
  bindMobile: '/api.php/user/bindMobile', //POST 绑定与验证手机
  getUserInfo: '/api.php/user/getUserInfo', //POST 获取用户信息
  editUserInfo: '/api.php/user/edit_info', //POST 编辑用户信息
  changeMobile: '/api.php/user/changeMobile', //POST 更换手机号
  getFriendsManorInfoWithoutLogin: '/api.php/user/nologin_friends_manor', //POST 没有登录获取好友庄园

  getAreaList: '/api.php/School/external_area_list', //POST 获取区域列表
  searchSchool: '/api.php/School/external_school_list', //POST 搜学校
  getLexueClassList: '/api.php/School/lexue_class_list', //POST 搜学校
  getSchoolClassByID: '/api.php/School/external_grade_list', //POST 获取学校年级列表

  getTomatoLabelList: '/api.php/label/label_list', //POST 获取番茄标签列表
  getTomatoLableList_secondCategory: '/api.php/label/details_list', //POST 获取二级番茄标签列表
  getQuesListByLabelIDs: '/api.php/label/questions_list', //POST 根据二级番茄标签id获取明细问题
  addTomatoLabelItem: '/api.php/user/labelAdd', //POST 获取番茄标签
  delTomatoLabel: '/api.php/user/labelDel', //POST 删除番茄标签
  editTomatoLabel: '/api.php/user/labelEdit', //POST 编辑番茄标签

  addPlantTomato: '/api.php/user/plantAdd', //POST 添加种植番茄记录
  editTomatoRecord: '/api.php/user/edit_plant', //POST 编辑番茄

  getTodayPlaintedTomatoNumber: '/api.php/user/plant_count_today', //POST 获取今天种植的番茄数量
  getUserPlantRecordList: '/api.php/user/plantList', //POST 获取用户种植记录
  getIsReachMaxPlaintLimit: '/api.php/user/plant_chance', //POST 获取用户是否达到了最大种植限制
  getPlantedTotalTomatoNumber: '/api.php/user/plant_count_all', //POST 获取种植的总番茄数量
  isBindLexueClass: '/api.php/user/in_class_status', //POST 是否绑定乐学班级
  applyBindClass: '/api.php/user/in_class_apply', //POST 申请绑定乐学班级

  isSignInToday: '/api.php/user/clock_status_today', //POST 今天是否打卡
  signIn: '/api.php/user/clock', //POST 打卡
  getClockList: '/api.php/user/clock_list', //POST 获取打卡记录
  getClockAccount: '/api.php/user/plant_day_counts', //获取用户种植天数

  getMyModelList: '/api.php/user/getModelList', //获取用户已拥有的勋章
  getAllModelList: '/api.php/achievement/medal_list', //获取所有勋章列表
  getMedelRulesIntroduce: '/api.php/sundry/rule_introduce', //获取成就规则介绍


  searchFriend: '/api.php/user/add_friend', //搜索好友
  focusFriend: '/api.php/user/follow_friend', //关注好友
  unFocusFriend: '/api.php/user/unfollow_friend', //取消关注好友
  getNoticeList: '/api.php/user/notice_list', //获取通知列表
  readNotice: '/api.php/user/notice_read', //已读通知
  getRankList: '/api.php/user/rank_list', //获取排行榜
  getUserPlantInfoByID: '/api.php/user/plantInfo', //获取用户种植详情


  getServiceQRCode: '/api.php/ewn/service_code', //获取客服二维码
  getMyShareQrCode: '/api.php/ewn/invite_code', //获取分享好友二维码
  getPosterImage: '/api.php/advertising/coopen_pic', //获取开屏广告图片
  getAboutUsText: '/api.php//sundry/about', //获取关于我们的文字
  getJoinedLexueTimeManageClassList: '/api.php/sundry/class_time' //获取已开班的乐学时间管理课程
};exports.default = _default;

/***/ }),
/* 19 */
/*!**************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/static/js/bus.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // 发布订阅：

// 使用手册：

// ----app.js:

// import Bus from '/utils/bus.js';
// wx.$bus = new Bus();


// -----页面使用：

//监听：

// wx.$bus.on('name', (options) => {
//     console.info('options', options);
// });


// 触发：

// wx.$bus.emit('name', (options) => {
//     console.info('options', options);
// });


//移除：

// wx.$bus.off('name');
var

Bus = /*#__PURE__*/function () {
  function Bus() {_classCallCheck(this, Bus);
    this.busList = [];
  }_createClass(Bus, [{ key: "on", value: function on(

    messName, cb) {
      this.busList.push({
        name: messName,
        cb: cb });

    } }, { key: "off", value: function off(

    messName) {
      var _busList = this.busList;

      _busList.forEach(function (item) {
        if (item.name === messName) {
          item.isRemove = true;
        }
      });

      this.busList = _busList.filter(function (item) {return item.isRemove !== true;});
    } }, { key: "emit", value: function emit(

    messName, data) {
      this.busList.forEach(function (item) {
        if (item.name === messName) {
          item.cb(data);
        }
      });
    } }]);return Bus;}();exports.default = Bus;

/***/ }),
/* 20 */
/*!**************************************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 21);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Administrator_Downloads_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/work/测试专区/tomatoKingdom_uniapp.vue/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */,
/* 23 */
/*!********************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/static/css/xx-base.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/*!********************************************************************!*\
  !*** G:/work/测试专区/tomatoKingdom_uniapp.vue/static/css/animate.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map