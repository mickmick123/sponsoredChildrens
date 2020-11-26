(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_spinner_src_components_Circle8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-spinner/src/components/Circle8 */ "./node_modules/vue-loading-spinner/src/components/Circle8.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CubeSpin: vue_loading_spinner_src_components_Circle8__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {//childrens:[],
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('setCurrentData');
  },
  computed: {
    childrens: function childrens() {
      return this.$store.getters.getChildrens;
    },
    loadingStatus: function loadingStatus() {
      return this.$store.getters.getLoadingState;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=template&id=fa6affac& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper-flex" },
    [
      _vm.loadingStatus
        ? _c("cube-spin")
        : _vm._l(_vm.childrens, function(child) {
            return _c(
              "div",
              {
                directives: [
                  {
                    name: "lazy-container",
                    rawName: "v-lazy-container",
                    value: { selector: "img" },
                    expression: "{selector:'img'}"
                  }
                ],
                staticClass: "container"
              },
              [
                _c("div", { staticClass: "banner-img" }),
                _vm._v(" "),
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: child.imageLatestUrl,
                      expression: "child.imageLatestUrl"
                    }
                  ],
                  staticClass: "profile-img"
                }),
                _vm._v(" "),
                _c("span", { staticClass: "child-id" }, [
                  _vm._v(_vm._s(child.sdChildId))
                ]),
                _vm._v(" "),
                _c("h1", { staticClass: "name" }, [
                  _vm._v(_vm._s(child.fullName))
                ]),
                _vm._v(" "),
                child.introduction != ""
                  ? _c("div", { staticClass: "introduction" }, [
                      _vm._v(_vm._s(child.introduction))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "paragraph" }, [
                  _vm._v(_vm._s(child.paragraph))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "wrapper" },
                  [
                    _c(
                      "tabs",
                      [
                        _c("tab", { attrs: { title: "Personal Info" } }, [
                          _c("div", { staticClass: "Rtable Rtable--2cols" }, [
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("First Name:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.firstName))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Last Name:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.lastName))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Gender:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.gender))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Birth Date:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(child.birthDate))
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Language:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.language))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Favorite Subject:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(
                                _vm._s(
                                  child.favoriteSubject == null
                                    ? "N/A"
                                    : child.favoriteSubject
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Chore:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(
                                _vm._s(
                                  child.chore == null ? "N/A" : child.chore
                                )
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tab", { attrs: { title: "Sponsorship" } }, [
                          _c("div", { staticClass: "Rtable Rtable--2cols" }, [
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Project ID:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.projectId))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Project Name:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.projectName))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Sponsorship information ID:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.crmSponsorshipInformationId))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Country:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.country))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Sponsorship Date:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatDate")(child.sponsorshipDate)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Child ID:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.sdChildId))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Child Number:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.childNumber))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Active:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(_vm._s(child.isActive))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _c("h5", [_vm._v("Education Date:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "Rtable-cell" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatDate")(child.educationDate)
                                )
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tab", { attrs: { title: "Health Status" } }, [
                          _c("div", { staticClass: "paragraph" }, [
                            _vm._v(_vm._s(child.healthSentenceThirdPerson))
                          ])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=fa6affac& */ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=template&id=fa6affac& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=fa6affac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);