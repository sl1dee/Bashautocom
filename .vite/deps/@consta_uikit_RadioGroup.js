import {
  useChoiceGroup
} from "./chunk-6WMXAN6A.js";
import {
  useForkRef,
  usePropsHandler
} from "./chunk-Y5I2RU34.js";
import {
  cnMixFocus
} from "./chunk-3NWFPCCC.js";
import "./chunk-YGS6DBVC.js";
import "./chunk-S7TJXDKL.js";
import {
  cn
} from "./chunk-HSHLGOX7.js";
import {
  _defineProperty,
  _objectWithoutProperties
} from "./chunk-PQHI3MBA.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/components/RadioGroup/RadioGroup.js
var import_react2 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/RadioGroup/RadioGroup.css";

// node_modules/@consta/uikit/__internal__/src/components/Radio/Radio.js
var import_react = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Radio/Radio.css";
var _excluded = ["checked", "name", "size", "view", "align", "disabled", "className", "label", "onChange", "onFocus", "onBlur", "readOnly", "required", "step", "tabIndex", "inputId", "inputRef"];
var radioPropSize = ["m", "l", "s", "xs"];
var radioPropSizeDefault = radioPropSize[0];
var radioPropView = ["primary", "ghost"];
var radioPropViewDefault = radioPropView[0];
var radioPropAlign = ["center", "top"];
var radioPropAlignDefault = radioPropAlign[0];
var cnRadio = cn("Radio");
var COMPONENT_NAME = "Radio";
var Radio = import_react.default.forwardRef(function(a, b) {
  var c = (0, import_react.useRef)(null), d = usePropsHandler(COMPONENT_NAME, a, c), e = d.checked, f = void 0 !== e && e, g = d.name, h = d.size, i = void 0 === h ? radioPropSizeDefault : h, j = d.view, k = void 0 === j ? radioPropViewDefault : j, l = d.align, m = void 0 === l ? radioPropAlignDefault : l, n = d.disabled, o = d.className, p = d.label, q = d.onChange, r = d.onFocus, s = d.onBlur, t = d.readOnly, u = d.required, v = d.step, w = d.tabIndex, x = d.inputId, y = d.inputRef, z = _objectWithoutProperties(d, _excluded);
  return import_react.default.createElement("label", Object.assign({}, z, { className: cnRadio({ size: i, view: k, disabled: n, align: m }, [o]), ref: useForkRef([b, c]) }), import_react.default.createElement("input", { type: "radio", name: g, className: cnRadio("Input", [cnMixFocus()]), checked: f, disabled: n, onChange: function handleChange(a2) {
    q && q({ e: a2, checked: !f });
  }, onFocus: r, onBlur: s, readOnly: t, required: u, step: v, id: x, tabIndex: w, ref: y }), p && import_react.default.createElement("span", { className: cnRadio("Label") }, p));
});

// node_modules/@consta/uikit/__internal__/src/components/RadioGroup/helper.js
function ownKeys(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function(b2) {
      return Object.getOwnPropertyDescriptor(a, b2).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys(Object(b), true).forEach(function(c2) {
      _defineProperty(a, c2, b[c2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys(Object(b)).forEach(function(c2) {
      Object.defineProperty(a, c2, Object.getOwnPropertyDescriptor(b, c2));
    });
  return a;
}
var defaultGetItemKey = function(a) {
  return a.key;
};
var defaultGetItemLabel = function(a) {
  return a.label;
};
var defaultGetItemDisabled = function(a) {
  return a.disabled;
};
var withDefaultGetters = function(a) {
  return _objectSpread(_objectSpread({}, a), {}, { getItemKey: a.getItemKey || defaultGetItemKey, getItemLabel: a.getItemLabel || defaultGetItemLabel, getItemDisabled: a.getItemDisabled || defaultGetItemDisabled });
};

// node_modules/@consta/uikit/__internal__/src/components/RadioGroup/types.js
var radioGroupDirections = ["column", "row"];
var radioGroupDefaultDirection = radioGroupDirections[0];
var radioGroupSizes = ["m", "l", "xs", "s"];
var radioGroupDefaultSize = radioGroupSizes[0];
var radioGroupViews = ["primary", "ghost"];
var radioGroupDefaultView = radioGroupViews[0];
var radioGroupPropAlign = ["center", "top"];
var radioGroupPropAlignDefault = radioGroupPropAlign[0];

// node_modules/@consta/uikit/__internal__/src/components/RadioGroup/RadioGroup.js
var _excluded2 = ["value", "items", "getItemLabel", "getItemKey", "getItemDisabled", "onChange", "name", "direction", "size", "view", "align", "disabled", "className"];
var cnRadioGroup = cn("RadioGroup");
var RadioGroupRender = function(a, b) {
  var c = withDefaultGetters(a), d = c.value, e = void 0 === d ? null : d, f = c.items, g = c.getItemLabel, h = c.getItemKey, i = c.getItemDisabled, j = c.onChange, k = c.name, l = c.direction, m = void 0 === l ? radioGroupDefaultDirection : l, n = c.size, o = void 0 === n ? radioGroupDefaultSize : n, p = c.view, q = void 0 === p ? radioGroupDefaultView : p, r = c.align, s = void 0 === r ? radioGroupPropAlignDefault : r, t = c.disabled, u = c.className, v = _objectWithoutProperties(c, _excluded2), w = useChoiceGroup({ value: e, getKey: function getKey(a2) {
    var b2;
    return null !== (b2 = h(a2)) && void 0 !== b2 ? b2 : g(a2);
  }, callBack: j, multiple: false }), x = w.getOnChange, y = w.getChecked;
  return import_react2.default.createElement("div", Object.assign({}, v, { ref: b, className: cnRadioGroup({ direction: m, size: o, view: q }, [u]) }), f.map(function(a2) {
    var b2;
    return import_react2.default.createElement(Radio, { align: s, key: null !== (b2 = h(a2)) && void 0 !== b2 ? b2 : g(a2), label: g(a2), size: o, view: q, name: k, disabled: void 0 !== t && t || !!i && i(a2), checked: y(a2), onChange: function(b3) {
      var c2 = b3.e;
      return x(a2)(c2);
    }, className: cnRadioGroup("Item") });
  }));
};
var RadioGroup = (0, import_react2.forwardRef)(RadioGroupRender);
export {
  RadioGroup,
  cnRadioGroup,
  radioGroupDefaultDirection,
  radioGroupDefaultSize,
  radioGroupDefaultView,
  radioGroupDirections,
  radioGroupPropAlign,
  radioGroupPropAlignDefault,
  radioGroupSizes,
  radioGroupViews
};
//# sourceMappingURL=@consta_uikit_RadioGroup.js.map
