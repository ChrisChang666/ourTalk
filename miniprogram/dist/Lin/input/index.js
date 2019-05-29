var _rules = require("../behaviors/rules");

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

Component({
    /**
   * 组件的属性列表
   */
    options: {
        multipleSlots: true
    },
    behaviors: [ "wx://form-field", _rules2.default ],
    externalClasses: [ "l-class", "l-label-class", "l-error-text" ],
    properties: {
        // 表单标题（label）的文本
        label: {
            type: String,
            value: ""
        },
        // 是否自定义label部分
        labelCustom: {
            type: Boolean,
            value: false
        },
        // 是否必选
        required: {
            type: Boolean,
            value: false
        },
        // 占位文本
        placeholder: {
            type: String,
            value: ""
        },
        // 输入框类型
        type: {
            type: String,
            value: "text"
        },
        // 输入框的值
        value: {
            type: String,
            value: ""
        },
        // 是否需要冒号
        colon: {
            type: Boolean,
            value: false
        },
        // 获取焦点
        focus: {
            type: Boolean,
            value: false
        },
        // 是否显示清除按钮
        clear: {
            type: Boolean,
            value: false
        },
        // 最大输入长度
        maxlength: {
            type: Number,
            value: 140
        },
        // 表单项的宽度，单位rpx
        width: {
            type: Number,
            value: 750
        },
        // 表单项标题部分的宽度，单位rpx
        labelWidth: {
            type: Number,
            value: 200
        },
        // label标题的显示位置 left top right
        labelLayout: {
            type: String,
            value: "left"
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 占位文字的样式  
        placeholderStyle: {
            type: String,
            value: ""
        }
    },
    /**
   * 组件的初始数据
   */
    data: {},
    attached: function attached() {
        this.initRules();
    },
    /**
   * 组件的方法列表
   */
    methods: {
        handleInputChange: function handleInputChange(event) {
            var _event$detail = event.detail, detail = _event$detail === undefined ? {} : _event$detail;
            var _detail$value = detail.value, value = _detail$value === undefined ? "" : _detail$value;
            this.setData({
                value: value
            });
            this.triggerEvent("linchange", event);
        },
        handleInputFocus: function handleInputFocus(event) {
            this.triggerEvent("linfocus", event);
        },
        handleInputBlur: function handleInputBlur(event) {
            this.validatorData({
                value: event.detail.value
            });
            this.triggerEvent("linblur", event);
        },
        handleInputConfirm: function handleInputConfirm(event) {
            var _event$detail2 = event.detail, detail = _event$detail2 === undefined ? {} : _event$detail2;
            var _detail$value2 = detail.value, value = _detail$value2 === undefined ? "" : _detail$value2;
            this.setData({
                value: value
            });
            this.triggerEvent("linconfirm", event);
        },
        onClearTap: function onClearTap(event) {
            this.setData({
                value: ""
            });
            this.triggerEvent("linclear", event);
        }
    }
}); // input/input.js