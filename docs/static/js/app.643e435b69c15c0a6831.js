webpackJsonp([1],Array(18).concat([
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateRandomEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateRandomEntries; });
var authors = ['Garfield', 'Tintin', 'Batman', 'Catwoman', 'Joe Bar Team'];

var generateRandomEntry = function generateRandomEntry(malicious) {
  return {
    author: authors[Math.floor(Math.random() * 4)],
    text: malicious ? '<a onmouseover="alert(\'GIVE ME ALL THE COOKIES :O \'+ document.cookie)">My text highligh when you hover it ! &#9937;</a>' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla velit, sagittis non malesuada a, vehicula ac libero.</p>'
  };
};

var generateRandomEntries = function generateRandomEntries(nb) {
  var entries = [];
  for (var i = 0; i < nb; i++) {
    entries.push(generateRandomEntry());
  }
  return entries;
};

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(106)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(124),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(123),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(130),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_basics__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_basics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_basics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_vux__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_vux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_vux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_iview__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_iview__);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__pages_basics___default.a }, { path: '/vux', component: __WEBPACK_IMPORTED_MODULE_3__pages_vux___default.a }, { path: '/view', component: __WEBPACK_IMPORTED_MODULE_4__pages_iview___default.a }]
}));

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(112)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(132),
  /* scopeId */
  "data-v-73783a04",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css__);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_iview___default.a);

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_assist__ = __webpack_require__(31);






var prefixCls = 'ivu-btn';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Button',
    components: { Icon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */] },
    props: {
        type: {
            validator: function validator(value) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_assist__["b" /* oneOf */])(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
            }
        },
        shape: {
            validator: function validator(value) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_assist__["b" /* oneOf */])(value, ['circle', 'circle-outline']);
            }
        },
        size: {
            validator: function validator(value) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_assist__["b" /* oneOf */])(value, ['small', 'large']);
            }
        },
        loading: Boolean,
        disabled: Boolean,
        htmlType: {
            default: 'button',
            validator: function validator(value) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_assist__["b" /* oneOf */])(value, ['button', 'submit', 'reset']);
            }
        },
        icon: String,
        long: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            showSlot: true
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-long', this.long), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-' + this.shape, !!this.shape), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-' + this.size, !!this.size), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-loading', this.loading != null && this.loading), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-icon-only', !this.showSlot && (!!this.icon || this.loading)), _ref)];
        }
    },
    methods: {
        handleClick: function handleClick(event) {
            this.$emit('click', event);
        }
    },
    mounted: function mounted() {
        this.showSlot = this.$slots.default !== undefined;
    }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var prefixCls = 'ivu-icon';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Icon',
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        classes: function classes() {
            return prefixCls + ' ' + prefixCls + '-' + this.type;
        },
        styles: function styles() {
            var style = {};

            if (this.size) {
                style['font-size'] = this.size + 'px';
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__button_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_transfer_dom__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_assist__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_locale__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_emitter__ = __webpack_require__(122);











var prefixCls = 'ivu-modal';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Modal',
    mixins: [__WEBPACK_IMPORTED_MODULE_6__mixins_locale__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__mixins_emitter__["a" /* default */]],
    components: { Icon: __WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], iButton: __WEBPACK_IMPORTED_MODULE_3__button_button_vue___default.a },
    directives: { TransferDom: __WEBPACK_IMPORTED_MODULE_4__directives_transfer_dom__["a" /* default */] },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        title: {
            type: String
        },
        width: {
            type: [Number, String],
            default: 520
        },
        okText: {
            type: String
        },
        cancelText: {
            type: String
        },
        loading: {
            type: Boolean,
            default: false
        },
        styles: {
            type: Object
        },
        className: {
            type: String
        },

        footerHide: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        transitionNames: {
            type: Array,
            default: function _default() {
                return ['ease', 'fade'];
            }
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            wrapShow: false,
            showHead: true,
            buttonLoading: false,
            visible: this.value
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            var _ref;

            return [prefixCls + '-wrap', (_ref = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-hidden', !this.wrapShow), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, '' + this.className, !!this.className), _ref)];
        },
        maskClasses: function maskClasses() {
            return prefixCls + '-mask';
        },
        classes: function classes() {
            return '' + prefixCls;
        },
        mainStyles: function mainStyles() {
            var style = {};

            var styleWidth = {
                width: this.width + 'px'
            };

            var customStyle = this.styles ? this.styles : {};

            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(style, styleWidth, customStyle);

            return style;
        },
        localeOkText: function localeOkText() {
            if (this.okText === undefined) {
                return this.t('i.modal.okText');
            } else {
                return this.okText;
            }
        },
        localeCancelText: function localeCancelText() {
            if (this.cancelText === undefined) {
                return this.t('i.modal.cancelText');
            } else {
                return this.cancelText;
            }
        }
    },
    methods: {
        close: function close() {
            this.visible = false;
            this.$emit('input', false);
            this.$emit('on-cancel');
        },
        mask: function mask() {
            if (this.maskClosable) {
                this.close();
            }
        },
        handleWrapClick: function handleWrapClick(event) {
            var className = event.target.getAttribute('class');
            if (className && className.indexOf(prefixCls + '-wrap') > -1) this.mask();
        },
        cancel: function cancel() {
            this.close();
        },
        ok: function ok() {
            if (this.loading) {
                this.buttonLoading = true;
            } else {
                this.visible = false;
                this.$emit('input', false);
            }
            this.$emit('on-ok');
        },
        EscClose: function EscClose(e) {
            if (this.visible && this.closable) {
                if (e.keyCode === 27) {
                    this.close();
                }
            }
        },
        checkScrollBar: function checkScrollBar() {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (this.bodyIsOverflowing) {
                this.scrollBarWidth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_assist__["c" /* getScrollBarSize */])();
            }
        },
        setScrollBar: function setScrollBar() {
            if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
                document.body.style.paddingRight = this.scrollBarWidth + 'px';
            }
        },
        resetScrollBar: function resetScrollBar() {
            document.body.style.paddingRight = '';
        },
        addScrollEffect: function addScrollEffect() {
            this.checkScrollBar();
            this.setScrollBar();
            document.body.style.overflow = 'hidden';
        },
        removeScrollEffect: function removeScrollEffect() {
            document.body.style.overflow = '';
            this.resetScrollBar();
        }
    },
    mounted: function mounted() {
        if (this.visible) {
            this.wrapShow = true;
        }

        var showHead = true;

        if (this.$slots.header === undefined && !this.title) {
            showHead = false;
        }

        this.showHead = showHead;

        document.addEventListener('keydown', this.EscClose);
    },
    beforeDestroy: function beforeDestroy() {
        document.removeEventListener('keydown', this.EscClose);
        this.removeScrollEffect();
    },

    watch: {
        value: function value(val) {
            this.visible = val;
        },
        visible: function visible(val) {
            var _this = this;

            if (val === false) {
                this.buttonLoading = false;
                this.timer = setTimeout(function () {
                    _this.wrapShow = false;
                    _this.removeScrollEffect();
                }, 300);
            } else {
                if (this.timer) clearTimeout(this.timer);
                this.wrapShow = true;
                if (!this.scrollable) {
                    this.addScrollEffect();
                }
            }
            this.broadcast('Table', 'on-visible-change', val);
        },
        loading: function loading(val) {
            if (!val) {
                this.buttonLoading = false;
            }
        },
        scrollable: function scrollable(val) {
            if (!val) {
                this.addScrollEffect();
            } else {
                this.removeScrollEffect();
            }
        }
    }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_router__ = __webpack_require__(65);




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter: function onClickFooter() {
      this.footer.link && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_router__["a" /* go */])(this.footer.link, this.$router);
      this.$emit('on-click-footer');
    }
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chat_feed__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chat_feed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_chat_feed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nav__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_nav__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    NavComponent: __WEBPACK_IMPORTED_MODULE_1__components_nav___default.a,
    ChatFeed: __WEBPACK_IMPORTED_MODULE_0__components_chat_feed___default.a
  },
  mounted: function mounted() {
    document.cookie = 'very-important-cookie=important-info';
  }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_chat_utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_list_xss__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_list_xss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__chat_list_xss__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'chat-feed',
  data: function data() {
    return {
      messages: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_chat_utils__["a" /* generateRandomEntries */])(1),
      currentMessage: ''
    };
  },

  methods: {
    addEntryToChat: function addEntryToChat(malicious) {
      var randomMessage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_chat_utils__["b" /* generateRandomEntry */])(malicious);
      this.messages.push(randomMessage);
      this.currentMessage = randomMessage;
    }
  },
  components: { chatXss: __WEBPACK_IMPORTED_MODULE_1__chat_list_xss___default.a }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'chat-list-xss',
  props: ['messages'],
  data: function data() {
    return {};
  },

  methods: {},
  computed: {}
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nav',
  data: function data() {
    return {};
  },

  methods: {},
  computed: {}
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chat_feed__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chat_feed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_chat_feed__);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { ChatFeed: __WEBPACK_IMPORTED_MODULE_0__components_chat_feed___default.a },
  name: 'basics',
  data: function data() {
    return {};
  },

  methods: {},
  computed: {}
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iview_src_components_modal__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_chat_utils__ = __webpack_require__(18);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'iview',
  data: function data() {
    return {
      modal1: false,
      currentMessage: null
    };
  },

  methods: {
    confirm: function confirm() {
      var _this = this;

      var randomMessage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_chat_utils__["b" /* generateRandomEntry */])(true);
      this.currentMessage = randomMessage;
      this.$Modal.confirm({
        title: randomMessage.author,
        content: randomMessage.text,
        onOk: function onOk() {
          _this.$Message.info('OK');
        },
        onCancel: function onCancel() {
          _this.$Message.info('KO');
        }
      });
    }
  },
  computed: {},
  components: { Modal: __WEBPACK_IMPORTED_MODULE_0_iview_src_components_modal__["a" /* default */] }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_chat_utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_card_index_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_card_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_card_index_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vux',
  data: function data() {
    return {
      messages: [],
      header: { title: 'This is a header' },
      currentMessage: ''
    };
  },

  methods: {
    addMaliciousEntry: function addMaliciousEntry(malicious) {
      var randomMessage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_chat_utils__["b" /* generateRandomEntry */])(malicious);
      this.messages.push(randomMessage);
      this.currentMessage = randomMessage;
    }
  },
  computed: {
    vuxMessages: function vuxMessages() {
      return this.messages.map(function (message) {
        return { title: message.text };
      });
    }
  },
  components: { Card: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_card_index_vue___default.a }
});

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.classes,
    attrs: {
      "type": _vm.htmlType,
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.handleClick
    }
  }, [(_vm.loading) ? _c('Icon', {
    staticClass: "ivu-load-loop",
    attrs: {
      "type": "load-c"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon && !_vm.loading) ? _c('Icon', {
    attrs: {
      "type": _vm.icon
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showSlot) ? _c('span', {
    ref: "slot"
  }, [_vm._t("default")], 2) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    staticClass: "button is-primary",
    on: {
      "click": function($event) {
        _vm.addEntryToChat(false)
      }
    }
  }, [_vm._v("Add Entry")]), _vm._v(" "), _c('button', {
    staticClass: "button is-dark",
    on: {
      "click": function($event) {
        _vm.addEntryToChat(true)
      }
    }
  }, [_vm._v("Add Malicious Entry")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "columns is-mobile"
  }, [_c('div', {
    staticClass: "column is-4"
  }, [_c('chat-xss', {
    attrs: {
      "messages": _vm.messages
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_vm._m(0), _vm._v(" "), _c('h1', [_vm._v("What was sent :")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.currentMessage))])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('h2', [_vm._v("XSS Basics")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)",
      "target": "_blank",
      "rel": "noreferrer"
    }
  }, [_vm._v(" What is a XSS")]), _vm._v(" "), _c('p', [_vm._v("Injecting Raw Html is possible in the current frameworks. "), _c('br'), _vm._v("\n              React uses "), _c('a', {
    attrs: {
      "href": "https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml"
    }
  }, [_vm._v("dangerouslySetInnerHTML")]), _c('br'), _vm._v("\n              Angular uses "), _c('a', {
    attrs: {
      "href": "https://angular.io/docs/ts/latest/guide/security.html#!#angular-s-cross-site-scripting-security-model"
    }
  }, [_vm._v("[innerHtml]")]), _c('br'), _vm._v("\n              Vue uses : "), _c('a', {
    attrs: {
      "href": "https://vuejs.org/v2/guide/syntax.html#Raw-HTML"
    }
  }, [_vm._v("v-html")])]), _vm._v(" "), _c('p', [_vm._v("We will see how we can perform XSS in Vue and some possibles issues with current implementations.")])])
}]}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "nav has-shadow"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "nav-left"
  }, [_c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "exact": "",
      "to": "/",
      "active-class": "is-active"
    }
  }, [_vm._v("The Basics")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "/vux",
      "active-class": "is-active"
    }
  }, [_vm._v("Vux")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "/view",
      "active-class": "is-active"
    }
  }, [_vm._v("Iview")])], 1)])])
},staticRenderFns: []}

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "columns is-mobile"
  }, [_c('div', {
    staticClass: "column is-4"
  }, [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("Click here for modal")])], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_vm._m(0), _vm._v(" "), _c('h1', [_vm._v("What was sent :")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.currentMessage))])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('h2', [_vm._v("Iview UI Framework")]), _vm._v(" "), _c('p', [_vm._v("Iview is a UI Framework based on Vue with "), _c('a', {
    attrs: {
      "href": "https://github.com/iview/iview"
    }
  }, [_vm._v(" 5k stars")]), _vm._v(" on Github")]), _vm._v(" "), _c('p', [_vm._v("It "), _c('a', {
    attrs: {
      "href": "https://github.com/iview/iview/search?utf8=%E2%9C%93&q=v-html&type="
    }
  }, [_vm._v("currently")]), _vm._v(" implements multiple time the v-html tag where it can possibly be user filled fields")]), _vm._v(" "), _c('p', [_vm._v("The component on the left is Iview's "), _c('strong', [_vm._v("Confim Modal")]), _vm._v(" component. Here we hijack the "), _c('strong', [_vm._v("Content")]), _vm._v(" field.")])])
}]}

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('transition-group', {
    attrs: {
      "name": "custom-classes-transition",
      "enter-active-class": "animated-fast fadeInUp",
      "leave-active-class": "animated-fast fadeOutBottom"
    }
  }, _vm._l((_vm.messages), function(message, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticClass: "card"
    }, [_c('header', {
      staticClass: "card-header"
    }, [_c('p', {
      staticClass: "card-header-title"
    }, [_vm._v("\n      " + _vm._s(message.author) + "\n    ")])]), _vm._v(" "), _c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('div', {
      domProps: {
        "innerHTML": _vm._s(message.text)
      }
    })])])]), _vm._v(" "), _c('br')])
  }))], 1)
},staticRenderFns: []}

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "transfer-dom",
      rawName: "v-transfer-dom"
    }]
  }, [_c('transition', {
    attrs: {
      "name": _vm.transitionNames[1]
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    class: _vm.maskClasses,
    on: {
      "click": _vm.mask
    }
  })]), _vm._v(" "), _c('div', {
    class: _vm.wrapClasses,
    on: {
      "click": _vm.handleWrapClick
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.transitionNames[0]
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    class: _vm.classes,
    style: (_vm.mainStyles)
  }, [_c('div', {
    class: [_vm.prefixCls + '-content']
  }, [(_vm.closable) ? _c('a', {
    class: [_vm.prefixCls + '-close'],
    on: {
      "click": _vm.close
    }
  }, [_vm._t("close", [_c('Icon', {
    attrs: {
      "type": "ios-close-empty"
    }
  })])], 2) : _vm._e(), _vm._v(" "), (_vm.showHead) ? _c('div', {
    class: [_vm.prefixCls + '-header']
  }, [_vm._t("header", [_c('div', {
    class: [_vm.prefixCls + '-header-inner']
  }, [_vm._v(_vm._s(_vm.title))])])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    class: [_vm.prefixCls + '-body']
  }, [_vm._t("default")], 2), _vm._v(" "), (!_vm.footerHide) ? _c('div', {
    class: [_vm.prefixCls + '-footer']
  }, [_vm._t("footer", [_c('i-button', {
    attrs: {
      "type": "text",
      "size": "large"
    },
    nativeOn: {
      "click": function($event) {
        _vm.cancel($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.localeCancelText))]), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "size": "large",
      "loading": _vm.buttonLoading
    },
    nativeOn: {
      "click": function($event) {
        _vm.ok($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.localeOkText))])])], 2) : _vm._e()])])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-panel weui-panel_access"
  }, [(_vm.header && _vm.header.title) ? _c('div', {
    staticClass: "weui-panel__hd",
    domProps: {
      "innerHTML": _vm._s(_vm.header.title)
    },
    on: {
      "click": function($event) {
        _vm.$emit('on-click-header')
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("header"), _vm._v(" "), _c('div', {
    staticClass: "weui-panel__bd"
  }, [_c('div', {
    staticClass: "vux-card-content"
  }, [_vm._t("content")], 2)]), _vm._v(" "), _c('div', {
    staticClass: "weui-panel__ft"
  }, [(_vm.footer && _vm.footer.title) ? _c('a', {
    staticClass: "weui-cell weui-cell_access weui-cell_link",
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": _vm.onClickFooter
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd",
    domProps: {
      "innerHTML": _vm._s(_vm.footer.title)
    }
  })]) : _vm._e()]), _vm._v(" "), _vm._t("footer")], 2)
},staticRenderFns: []}

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    class: _vm.classes,
    style: (_vm.styles)
  })
},staticRenderFns: []}

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('chat-feed')], 1)
},staticRenderFns: []}

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('nav-component'), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "columns is-mobile"
  }, [_c('div', {
    staticClass: "column is-10 is-offset-1"
  }, [_c('router-view')], 1)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    staticClass: "button is-primary",
    on: {
      "click": function($event) {
        _vm.addMaliciousEntry(false)
      }
    }
  }, [_vm._v("Add Entry")]), _vm._v(" "), _c('button', {
    staticClass: "button is-dark",
    on: {
      "click": function($event) {
        _vm.addMaliciousEntry(true)
      }
    }
  }, [_vm._v("Add Malicious Entry")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "columns is-mobile"
  }, [_c('div', {
    staticClass: "column is-4 sq-vux-bg"
  }, _vm._l((_vm.vuxMessages), function(message, index) {
    return _c('Card', {
      key: index,
      attrs: {
        "header": message
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_vm._m(0), _vm._v(" "), _c('h1', [_vm._v("What was sent :")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.currentMessage))])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('h2', [_vm._v("Vux UI Framework")]), _vm._v(" "), _c('p', [_vm._v("Vux is UI a Framework based on vue with "), _c('a', {
    attrs: {
      "href": "https://github.com/airyland/vux"
    }
  }, [_vm._v(" 7.5k stars")]), _vm._v(" on Github")]), _vm._v(" "), _c('p', [_vm._v("It "), _c('a', {
    attrs: {
      "href": "https://github.com/airyland/vux/search?utf8=%E2%9C%93&q=v-html&type="
    }
  }, [_vm._v("currently")]), _vm._v(" implements multiple time the v-html tag where it can possibly be user filled fields")]), _vm._v(" "), _c('p', [_vm._v("The component on the left is vux's "), _c('strong', [_vm._v("Card")]), _vm._v(" component. Here we hijack the "), _c('strong', [_vm._v("header")]), _vm._v(" field.")])])
}]}

/***/ }),
/* 134 */,
/* 135 */,
/* 136 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(127),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(107)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(125),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(111)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(131),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(126),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(113)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(133),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(128),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(110)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(129),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })
]),[53]);
//# sourceMappingURL=app.643e435b69c15c0a6831.js.map