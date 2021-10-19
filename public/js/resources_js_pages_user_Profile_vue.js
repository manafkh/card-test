"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_user_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Table.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Table.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: [{
        isActive: true,
        age: 40,
        name: {
          first: 'Dickerson',
          last: 'Macdonald'
        }
      }, {
        isActive: false,
        age: 21,
        name: {
          first: 'Larsen',
          last: 'Shaw'
        }
      }, {
        isActive: false,
        age: 9,
        name: {
          first: 'Mini',
          last: 'Navarro'
        },
        _rowVariant: 'success'
      }, {
        isActive: false,
        age: 89,
        name: {
          first: 'Geneva',
          last: 'Wilson'
        }
      }, {
        isActive: true,
        age: 38,
        name: {
          first: 'Jami',
          last: 'Carney'
        }
      }, {
        isActive: false,
        age: 27,
        name: {
          first: 'Essie',
          last: 'Dunlap'
        }
      }, {
        isActive: true,
        age: 40,
        name: {
          first: 'Thor',
          last: 'Macdonald'
        }
      }, {
        isActive: true,
        age: 87,
        name: {
          first: 'Larsen',
          last: 'Shaw'
        },
        _cellVariants: {
          age: 'danger',
          isActive: 'warning'
        }
      }, {
        isActive: false,
        age: 26,
        name: {
          first: 'Mitzi',
          last: 'Navarro'
        }
      }, {
        isActive: false,
        age: 22,
        name: {
          first: 'Genevieve',
          last: 'Wilson'
        }
      }, {
        isActive: true,
        age: 38,
        name: {
          first: 'John',
          last: 'Carney'
        }
      }, {
        isActive: false,
        age: 29,
        name: {
          first: 'Dick',
          last: 'Dunlap'
        }
      }],
      fields: [{
        key: 'name',
        label: 'Person full name',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'age',
        label: 'Person age',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'isActive',
        label: 'Is Active',
        formatter: function formatter(value, key, item) {
          return value ? 'Yes' : 'No';
        },
        sortable: true,
        sortByFormatted: true,
        filterByFormatted: true
      }, {
        key: 'actions',
        label: 'Actions'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {
        value: 100,
        text: "Show a lot"
      }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      }
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    }
  },
  mounted: function mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info: function info(item, index, button) {
      this.infoModal.title = "Row index: ".concat(index);
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal: function resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.content = '';
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/Table */ "./resources/js/layout/Table.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Profile",
  data: function data() {
    return {
      details: {
        id: null,
        name: null,
        phone_number: null
      },
      password: {
        id: null,
        email: null,
        password: null,
        password_confirmation: null,
        oldPassword: null
      },
      fields: [{
        key: 'balance',
        label: 'Balance',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'created_at',
        label: 'Date Created',
        sortable: true,
        "class": 'text-center'
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)("auth", ["user"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['errors'])),
  created: function created() {// this.getUserData()
  },
  mounted: function mounted() {
    this.$store.commit("setErrors", {});
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)("auth", ["updateProfile", "changePasswordRequest", "updateUserInput"])), {}, {
    settings: function settings() {
      this.updateProfile(this.user).then(function () {// this.$router.push({name: "Home"});
      });
    },
    updateUserInputAction: function updateUserInputAction(e) {
      this.updateUserInput(e);
    },
    changeFormatDate: function changeFormatDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("MM/DD/YYYY hh:mm");
    },
    changePassword: function changePassword() {
      var _this = this;

      this.password.id = this.user.id;
      this.password.email = this.user.email;
      this.changePasswordRequest(this.password).then(function () {
        console.log(_this.password); // this.$router.push({name: "Home"});
      });
    }
  }),
  components: {
    "table-info": _layout_Table__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./resources/js/layout/Table.vue":
/*!***************************************!*\
  !*** ./resources/js/layout/Table.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_vue_vue_type_template_id_447120f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=447120f2& */ "./resources/js/layout/Table.vue?vue&type=template&id=447120f2&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/layout/Table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Table_vue_vue_type_template_id_447120f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Table_vue_vue_type_template_id_447120f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layout/Table.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/user/Profile.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& */ "./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "aa78eaa4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layout/Table.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/layout/Table.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layout/Table.vue?vue&type=template&id=447120f2&":
/*!**********************************************************************!*\
  !*** ./resources/js/layout/Table.vue?vue&type=template&id=447120f2& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_447120f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_447120f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_447120f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=template&id=447120f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Table.vue?vue&type=template&id=447120f2&");


/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Table.vue?vue&type=template&id=447120f2&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Table.vue?vue&type=template&id=447120f2& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Sort",
                  "label-for": "sort-by-select",
                  "label-cols-sm": "3",
                  "label-align-sm": "right",
                  "label-size": "sm"
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var ariaDescribedby = ref.ariaDescribedby
                      return [
                        _c(
                          "b-input-group",
                          { attrs: { size: "sm" } },
                          [
                            _c("b-form-select", {
                              staticClass: "w-75",
                              attrs: {
                                id: "sort-by-select",
                                options: _vm.sortOptions,
                                "aria-describedby": ariaDescribedby
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "first",
                                    fn: function() {
                                      return [
                                        _c("option", { attrs: { value: "" } }, [
                                          _vm._v("-- none --")
                                        ])
                                      ]
                                    },
                                    proxy: true
                                  }
                                ],
                                null,
                                true
                              ),
                              model: {
                                value: _vm.sortBy,
                                callback: function($$v) {
                                  _vm.sortBy = $$v
                                },
                                expression: "sortBy"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-form-select",
                              {
                                staticClass: "w-25",
                                attrs: {
                                  disabled: !_vm.sortBy,
                                  "aria-describedby": ariaDescribedby,
                                  size: "sm"
                                },
                                model: {
                                  value: _vm.sortDesc,
                                  callback: function($$v) {
                                    _vm.sortDesc = $$v
                                  },
                                  expression: "sortDesc"
                                }
                              },
                              [
                                _c("option", { domProps: { value: false } }, [
                                  _vm._v("Asc")
                                ]),
                                _vm._v(" "),
                                _c("option", { domProps: { value: true } }, [
                                  _vm._v("Desc")
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Initial sort",
                    "label-for": "initial-sort-select",
                    "label-cols-sm": "3",
                    "label-align-sm": "right",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-select", {
                    attrs: {
                      id: "initial-sort-select",
                      options: ["asc", "desc", "last"],
                      size: "sm"
                    },
                    model: {
                      value: _vm.sortDirection,
                      callback: function($$v) {
                        _vm.sortDirection = $$v
                      },
                      expression: "sortDirection"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Filter",
                    "label-for": "filter-input",
                    "label-cols-sm": "3",
                    "label-align-sm": "right",
                    "label-size": "sm"
                  }
                },
                [
                  _c(
                    "b-input-group",
                    { attrs: { size: "sm" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "filter-input",
                          type: "search",
                          placeholder: "Type to Search"
                        },
                        model: {
                          value: _vm.filter,
                          callback: function($$v) {
                            _vm.filter = $$v
                          },
                          expression: "filter"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { disabled: !_vm.filter },
                              on: {
                                click: function($event) {
                                  _vm.filter = ""
                                }
                              }
                            },
                            [_vm._v("Clear")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { lg: "6" } },
            [
              _c("b-form-group", {
                staticClass: "mb-0",
                attrs: {
                  label: "Filter On",
                  description: "Leave all unchecked to filter on all data",
                  "label-cols-sm": "3",
                  "label-align-sm": "right",
                  "label-size": "sm"
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var ariaDescribedby = ref.ariaDescribedby
                      return [
                        _c(
                          "b-form-checkbox-group",
                          {
                            staticClass: "mt-1",
                            attrs: { "aria-describedby": ariaDescribedby },
                            model: {
                              value: _vm.filterOn,
                              callback: function($$v) {
                                _vm.filterOn = $$v
                              },
                              expression: "filterOn"
                            }
                          },
                          [
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "name" } },
                              [_vm._v("Name")]
                            ),
                            _vm._v(" "),
                            _c("b-form-checkbox", { attrs: { value: "age" } }, [
                              _vm._v("Age")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "isActive" } },
                              [_vm._v("Active")]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.sortDirection,
                  callback: function($$v) {
                    _vm.sortDirection = $$v
                  },
                  expression: "sortDirection"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { sm: "5", md: "6" } },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Per page",
                    "label-for": "per-page-select",
                    "label-cols-sm": "6",
                    "label-cols-md": "4",
                    "label-cols-lg": "3",
                    "label-align-sm": "right",
                    "label-size": "sm"
                  }
                },
                [
                  _c("b-form-select", {
                    attrs: {
                      id: "per-page-select",
                      options: _vm.pageOptions,
                      size: "sm"
                    },
                    model: {
                      value: _vm.perPage,
                      callback: function($$v) {
                        _vm.perPage = $$v
                      },
                      expression: "perPage"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { sm: "7", md: "6" } },
            [
              _c("b-pagination", {
                staticClass: "my-0",
                attrs: {
                  "total-rows": _vm.totalRows,
                  "per-page": _vm.perPage,
                  align: "fill",
                  size: "sm"
                },
                model: {
                  value: _vm.currentPage,
                  callback: function($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          items: _vm.items,
          fields: _vm.fields,
          "current-page": _vm.currentPage,
          "per-page": _vm.perPage,
          filter: _vm.filter,
          "filter-included-fields": _vm.filterOn,
          "sort-by": _vm.sortBy,
          "sort-desc": _vm.sortDesc,
          "sort-direction": _vm.sortDirection,
          stacked: "md",
          "show-empty": "",
          small: ""
        },
        on: {
          "update:sortBy": function($event) {
            _vm.sortBy = $event
          },
          "update:sort-by": function($event) {
            _vm.sortBy = $event
          },
          "update:sortDesc": function($event) {
            _vm.sortDesc = $event
          },
          "update:sort-desc": function($event) {
            _vm.sortDesc = $event
          },
          filtered: _vm.onFiltered
        },
        scopedSlots: _vm._u([
          {
            key: "cell(name)",
            fn: function(row) {
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(row.value.first) +
                    " " +
                    _vm._s(row.value.last) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "cell(actions)",
            fn: function(row) {
              return [
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1",
                    attrs: { size: "sm" },
                    on: {
                      click: function($event) {
                        return _vm.info(row.item, row.index, $event.target)
                      }
                    }
                  },
                  [_vm._v("\n                Info modal\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { size: "sm" }, on: { click: row.toggleDetails } },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.detailsShowing ? "Hide" : "Show") +
                        " Details\n            "
                    )
                  ]
                )
              ]
            }
          },
          {
            key: "row-details",
            fn: function(row) {
              return [
                _c("b-card", [
                  _c(
                    "ul",
                    _vm._l(row.item, function(value, key) {
                      return _c("li", { key: key }, [
                        _vm._v(_vm._s(key) + ": " + _vm._s(value))
                      ])
                    }),
                    0
                  )
                ])
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.infoModal.id,
            title: _vm.infoModal.title,
            "ok-only": ""
          },
          on: { hide: _vm.resetInfoModal }
        },
        [_c("pre", [_vm._v(_vm._s(_vm.infoModal.content))])]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row flex-lg-nowrap" }, [
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col mb-3" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "e-profile" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col d-flex flex-column flex-sm-row justify-content-between mb-3"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "text-center text-sm-left mb-2 mb-sm-0"
                          },
                          [
                            _c(
                              "h4",
                              { staticClass: "pt-sm-2 pb-1 mb-0 text-nowrap" },
                              [_vm._v(_vm._s(_vm.user.name))]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(_vm._s(_vm.user.email))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "text-center text-sm-right" },
                          [
                            _c(
                              "span",
                              { staticClass: "badge badge-secondary" },
                              [_vm._v('"' + _vm._s(_vm.user.role) + '"')]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-muted" }, [
                              _c("small", [
                                _vm._v(
                                  _vm._s(
                                    _vm.changeFormatDate(_vm.user.created_at)
                                  )
                                )
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-content pt-3",
                      attrs: { id: "v-tabs-tabContent" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade show active",
                          attrs: {
                            id: "v-tabs-settings",
                            role: "tabpanel",
                            "aria-labelledby": "v-tabs-settings-tab"
                          }
                        },
                        [
                          _c(
                            "form",
                            {
                              attrs: {
                                method: "post",
                                enctype: "multipart/form-data"
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [_vm._v("Username")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.errors.name
                                          },
                                          attrs: { name: "name", type: "text" },
                                          domProps: { value: _vm.user.name },
                                          on: {
                                            input: _vm.updateUserInputAction
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _vm.errors.name
                                        ? _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              _vm._v(
                                                "\n                                                                    " +
                                                  _vm._s(_vm.errors.name[0]) +
                                                  "\n                                                                "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [_vm._v("Phone Number")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid":
                                              _vm.errors.phone_number
                                          },
                                          attrs: {
                                            name: "phone_number",
                                            type: "text"
                                          },
                                          domProps: {
                                            value: _vm.user.phone_number
                                          },
                                          on: {
                                            input: _vm.updateUserInputAction
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.phone_number
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                                        " +
                                                    _vm._s(
                                                      _vm.errors.phone_number[0]
                                                    ) +
                                                    "\n                                                                    "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col d-flex justify-content-end"
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: { type: "button" },
                                        on: { click: _vm.settings }
                                      },
                                      [_vm._v("Save Changes")]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "v-tabs-accounts",
                            role: "tabpanel",
                            "aria-labelledby": "v-tabs-accounts-tab"
                          }
                        },
                        [
                          _c("b-table", {
                            attrs: {
                              items: _vm.user.accounts,
                              fields: _vm.fields
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "v-tabs-password",
                            role: "tabpanel",
                            "aria-labelledby": "v-tabs-password-tab"
                          }
                        },
                        [
                          _c(
                            "form",
                            {
                              attrs: {
                                method: "post",
                                enctype: "multipart/form-data"
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-12 col-sm-6 mb-3" },
                                  [
                                    _vm._m(1),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c("label", [
                                              _vm._v("Current Password")
                                            ]),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.password.oldPassword,
                                                  expression:
                                                    "password.oldPassword"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                "is-invalid":
                                                  _vm.errors.oldPassword
                                              },
                                              attrs: {
                                                name: "oldPassword",
                                                type: "password",
                                                placeholder: "••••••"
                                              },
                                              domProps: {
                                                value: _vm.password.oldPassword
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.password,
                                                    "oldPassword",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.oldPassword
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                                        " +
                                                        _vm._s(
                                                          _vm.errors
                                                            .oldPassword[0]
                                                        ) +
                                                        "\n                                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c("label", [
                                              _vm._v("New Password")
                                            ]),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.password.password,
                                                  expression:
                                                    "password.password"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                "is-invalid":
                                                  _vm.errors.password
                                              },
                                              attrs: {
                                                type: "password",
                                                placeholder: "••••••"
                                              },
                                              domProps: {
                                                value: _vm.password.password
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.password,
                                                    "password",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.errors.password
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                                        " +
                                                        _vm._s(
                                                          _vm.errors.password[0]
                                                        ) +
                                                        "\n                                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _vm._m(2),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.password
                                                      .password_confirmation,
                                                  expression:
                                                    "password.password_confirmation"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "password",
                                                placeholder: "••••••"
                                              },
                                              domProps: {
                                                value:
                                                  _vm.password
                                                    .password_confirmation
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.password,
                                                    "password_confirmation",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col d-flex justify-content-end"
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: { type: "button" },
                                        on: { click: _vm.changePassword }
                                      },
                                      [_vm._v("Save Changes")]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav nav-tabs" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link active",
            attrs: {
              id: "v-tabs-settings-tab",
              "data-toggle": "tab",
              href: "#v-tabs-settings",
              role: "tab",
              "aria-controls": "v-tabs-settings",
              "aria-selected": "true"
            }
          },
          [_vm._v("Settings")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link ",
            attrs: {
              id: "v-tabs-accounts-tab",
              "data-toggle": "tab",
              href: "#v-tabs-accounts",
              role: "tab",
              "aria-controls": "v-tabs-accounts",
              "aria-selected": "true"
            }
          },
          [_vm._v("Accounts")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link ",
            attrs: {
              id: "v-tabs-password-tab",
              "data-toggle": "tab",
              href: "#v-tabs-password",
              role: "tab",
              "aria-controls": "v-tabs-password",
              "aria-selected": "true"
            }
          },
          [_vm._v("Change Password")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-2" }, [
      _c("b", [_vm._v("Change Password")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Confirm "),
      _c("span", { staticClass: "d-none d-xl-inline" }, [_vm._v("Password")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);