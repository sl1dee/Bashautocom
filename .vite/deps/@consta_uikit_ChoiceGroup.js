import {
  useChoiceGroup
} from "./chunk-6WMXAN6A.js";
import {
  getByMap
} from "./chunk-T4V7NT3B.js";
import {
  cnMixFocus
} from "./chunk-3NWFPCCC.js";
import "./chunk-YGS6DBVC.js";
import {
  _slicedToArray
} from "./chunk-S7TJXDKL.js";
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

// node_modules/@consta/uikit/__internal__/src/components/ChoiceGroup/ChoiceGroup.js
var import_react2 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/ChoiceGroup/ChoiceGroup.css";

// node_modules/@consta/uikit/__internal__/src/components/ChoiceGroup/helper.js
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
var defaultGetItemLabel = function(a) {
  return a.label;
};
var defaultGetItemIcon = function(a) {
  return a.icon;
};
var defaultGetItemDisabled = function(a) {
  return a.disabled;
};
var withDefaultGetters = function(a) {
  return _objectSpread(_objectSpread({}, a), {}, { getItemLabel: a.getItemLabel || defaultGetItemLabel, getItemIcon: a.getItemIcon || defaultGetItemIcon, getItemDisabled: a.getItemDisabled || defaultGetItemDisabled });
};

// node_modules/@consta/uikit/__internal__/src/components/ChoiceGroup/Item/ChoiceGroup-Item.js
var import_react = __toESM(require_react());
var ChoiceGroupItem = function(a) {
  var b = a.label, c = a.onChange, d = a.checked, e = a.multiple, f = a.icon, g = a.onlyIcon, h = a.name, i = a.iconSize, j = a.disabled, k = void 0 !== j && j, l = (0, import_react.useState)(false), m = _slicedToArray(l, 2), n = m[0], o = m[1];
  return import_react.default.createElement("label", { className: cnChoiceGroup("Label", { focus: n, checked: d, disabled: k }, [cnMixFocus()]), title: g ? b : void 0 }, import_react.default.createElement("input", { type: e ? "checkbox" : "radio", className: cnChoiceGroup("Input"), checked: d, onFocus: function handleFocus() {
    return o(true);
  }, onBlur: function handleBlur() {
    return o(false);
  }, value: "".concat(h, "-").concat(b), onChange: c, name: h, disabled: k }), f && import_react.default.createElement(f, { className: cnChoiceGroup("Icon"), size: i }), !g && import_react.default.createElement("span", { className: cnChoiceGroup("Text") }, b));
};

// node_modules/@consta/uikit/__internal__/src/components/ChoiceGroup/types.js
var choiceGroupForms = ["default", "brick", "round"];
var choiceGroupDefaultForm = "default";
var choiceGroupSizes = ["xs", "s", "m", "l"];
var choiceGroupDefaultSize = "m";
var choiceGroupViews = ["primary", "ghost", "secondary"];
var choiceGroupDefaultView = "primary";
var choiceGroupWidth = ["default", "full"];
var choiceGroupWidthDefault = choiceGroupWidth[0];

// node_modules/@consta/uikit/__internal__/src/components/ChoiceGroup/ChoiceGroup.js
var _excluded = ["size", "form", "view", "width", "onlyIcon", "iconSize", "value", "multiple", "items", "getItemLabel", "onChange", "getItemIcon", "name", "className", "disabled", "getItemDisabled", "truncate"];
var sizeMap = { xs: "xs", s: "xs", m: "s", l: "m" };
var cnChoiceGroup = cn("ChoiceGroup");
var ChoiceGroupRender = function(a, b) {
  var c = withDefaultGetters(a), d = c.size, e = void 0 === d ? choiceGroupDefaultSize : d, f = c.form, g = void 0 === f ? choiceGroupDefaultForm : f, h = c.view, i = void 0 === h ? choiceGroupDefaultView : h, j = c.width, k = void 0 === j ? choiceGroupWidthDefault : j, l = c.onlyIcon, m = c.iconSize, n = c.value, o = void 0 === n ? null : n, p = c.multiple, q = void 0 !== p && p, r = c.items, s = c.getItemLabel, t = c.onChange, u = c.getItemIcon, v = c.name, w = c.className, x = c.disabled, y = void 0 !== x && x, z = c.getItemDisabled, A = c.truncate, B = _objectWithoutProperties(c, _excluded), C = useChoiceGroup({ value: o, getKey: s, callBack: t, multiple: q }), D = C.getOnChange, E = C.getChecked, F = getByMap(sizeMap, e, m);
  return import_react2.default.createElement("div", Object.assign({}, B, { ref: b, className: cnChoiceGroup({ size: e, form: g, view: i, width: k, onlyIcon: l, disabled: y, truncate: A }, [w]) }), r.map(function(a2, b2) {
    var c2 = E(a2), d2 = !!z && z(a2);
    return import_react2.default.createElement(import_react2.default.Fragment, { key: s(a2) }, 0 < b2 && import_react2.default.createElement("div", { className: cnChoiceGroup("Divider", { checked: c2, disabled: d2 }) }), import_react2.default.createElement(ChoiceGroupItem, { onChange: D(a2), checked: c2, label: s(a2).toString(), icon: u && u(a2), iconSize: F, multiple: q, onlyIcon: l, name: v, disabled: y || d2 }));
  }));
};
var ChoiceGroup = (0, import_react2.forwardRef)(ChoiceGroupRender);
export {
  ChoiceGroup,
  choiceGroupDefaultForm,
  choiceGroupDefaultSize,
  choiceGroupDefaultView,
  choiceGroupForms,
  choiceGroupSizes,
  choiceGroupViews,
  choiceGroupWidth,
  choiceGroupWidthDefault,
  cnChoiceGroup
};
//# sourceMappingURL=@consta_uikit_ChoiceGroup.js.map
