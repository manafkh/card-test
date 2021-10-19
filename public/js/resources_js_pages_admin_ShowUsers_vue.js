"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_ShowUsers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ShowUsers.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ShowUsers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//
//
//
//
//
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
      fields: [{
        key: 'name',
        label: 'Username',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'email',
        label: 'Email',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'active',
        label: 'Activation Account',
        formatter: function formatter(value, key, item) {
          return value === 1 ? 'Yes' : 'No';
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
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('user', ["users"])), {}, {
    formatItems: function formatItems() {
      this.totalRows = this.users.length;
      if (!this.users || this.users.length === 0) return [];
      return this.users.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          created_at: moment__WEBPACK_IMPORTED_MODULE_0___default()(item.created_at).format('MM/DD/YYYY hh:mm')
        });
      });
    },
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
  }),
  mounted: function mounted() {
    // Set the initial number of items
    this.getUsersData();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("user", ["getUsersData"])), {}, {
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
  })
});

/***/ }),

/***/ "./resources/js/pages/admin/ShowUsers.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/admin/ShowUsers.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowUsers_vue_vue_type_template_id_2d114e52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowUsers.vue?vue&type=template&id=2d114e52& */ "./resources/js/pages/admin/ShowUsers.vue?vue&type=template&id=2d114e52&");
/* harmony import */ var _ShowUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowUsers.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/ShowUsers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ShowUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ShowUsers_vue_vue_type_template_id_2d114e52___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowUsers_vue_vue_type_template_id_2d114e52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/ShowUsers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/ShowUsers.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/admin/ShowUsers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ShowUsers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/admin/ShowUsers.vue?vue&type=template&id=2d114e52&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/admin/ShowUsers.vue?vue&type=template&id=2d114e52& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUsers_vue_vue_type_template_id_2d114e52___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUsers_vue_vue_type_template_id_2d114e52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowUsers_vue_vue_type_template_id_2d114e52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowUsers.vue?vue&type=template&id=2d114e52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ShowUsers.vue?vue&type=template&id=2d114e52&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ShowUsers.vue?vue&type=template&id=2d114e52&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/ShowUsers.vue?vue&type=template&id=2d114e52& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                              [_vm._v("name")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "email" } },
                              [_vm._v("Email")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "active" } },
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
          items: _vm.formatItems,
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
            key: "cell(actions)",
            fn: function(row) {
              return [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      to: {
                        name: "showUsers",
                        params: { userId: row.item.id }
                      },
                      title: "View Account"
                    }
                  },
                  [
                    _vm._v(
                      "\n                    View Account\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { size: "sm" }, on: { click: row.toggleDetails } },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(row.detailsShowing ? "Hide" : "Show") +
                        " Details\n                "
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



/***/ })

}]);