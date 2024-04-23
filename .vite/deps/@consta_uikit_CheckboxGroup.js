import {
  useChoiceGroup
} from "./chunk-6WMXAN6A.js";
import {
  Checkbox
} from "./chunk-LBMOUADV.js";
import "./chunk-Y5I2RU34.js";
import "./chunk-3NWFPCCC.js";
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

// node_modules/@consta/uikit/__internal__/src/components/CheckboxGroup/CheckboxGroup.js
var import_react = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/CheckboxGroup/CheckboxGroup.css";

// node_modules/@consta/uikit/__internal__/src/components/CheckboxGroup/helper.js
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

// node_modules/@consta/uikit/__internal__/src/components/CheckboxGroup/types.js
var checkboxGroupDirections = ["column", "row"];
var checkboxGroupDefaultDirection = checkboxGroupDirections[0];
var checkboxGroupSizes = ["m", "xs", "s", "l"];
var checkboxGroupDefaultSize = checkboxGroupSizes[0];
var checkboxGroupViews = ["primary", "ghost"];
var checkboxGroupDefaultView = checkboxGroupViews[0];

// node_modules/@consta/uikit/__internal__/src/components/CheckboxGroup/CheckboxGroup.js
var _excluded = ["value", "items", "getItemKey", "getItemLabel", "getItemDisabled", "onChange", "name", "direction", "size", "view", "disabled", "className"];
var cnCheckboxGroup = cn("CheckboxGroup");
var CheckboxGroupRender = function(a, b) {
  var c = withDefaultGetters(a), d = c.value, e = void 0 === d ? null : d, f = c.items, g = c.getItemKey, h = c.getItemLabel, i = c.getItemDisabled, j = c.onChange, k = c.name, l = c.direction, m = void 0 === l ? checkboxGroupDefaultDirection : l, n = c.size, o = void 0 === n ? checkboxGroupDefaultSize : n, p = c.view, q = void 0 === p ? checkboxGroupDefaultView : p, r = c.disabled, s = c.className, t = _objectWithoutProperties(c, _excluded), u = useChoiceGroup({ value: e, getKey: function getKey(a2) {
    var b2;
    return null !== (b2 = g(a2)) && void 0 !== b2 ? b2 : h(a2);
  }, callBack: j, multiple: true }), v = u.getOnChange, w = u.getChecked;
  return import_react.default.createElement("div", Object.assign({}, t, { ref: b, className: cnCheckboxGroup({ direction: m, size: o, view: q }, [s]) }), f.map(function(a2) {
    var b2;
    return import_react.default.createElement(Checkbox, { key: null !== (b2 = g(a2)) && void 0 !== b2 ? b2 : h(a2), label: h(a2), size: o, view: q, name: k, disabled: void 0 !== r && r || (null === i || void 0 === i ? void 0 : i(a2)), checked: w(a2), onChange: function(b3) {
      var c2 = b3.e;
      return v(a2)(c2);
    }, className: cnCheckboxGroup("Item") });
  }));
};
var CheckboxGroup = (0, import_react.forwardRef)(CheckboxGroupRender);
export {
  CheckboxGroup,
  checkboxGroupDefaultDirection,
  checkboxGroupDefaultSize,
  checkboxGroupDefaultView,
  checkboxGroupDirections,
  checkboxGroupSizes,
  checkboxGroupViews,
  cnCheckboxGroup
};
//# sourceMappingURL=@consta_uikit_CheckboxGroup.js.map
