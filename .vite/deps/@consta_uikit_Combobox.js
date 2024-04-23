import {
  SelectContainer,
  SelectDropdown,
  SelectItem,
  cnSelect,
  defaultLabelForEmptyItems,
  defaultPropForm,
  defaultPropSize,
  defaultPropView,
  defaultlabelForCreate,
  defaultlabelForNotFound,
  getInputWidth,
  useSelect
} from "./chunk-DEZMWBV3.js";
import {
  IconClose
} from "./chunk-W2MDE3KC.js";
import "./chunk-BGCSU4BD.js";
import "./chunk-LWVZSOY4.js";
import "./chunk-L2ANZMSN.js";
import "./chunk-SVBJZ4BZ.js";
import "./chunk-RER3UHKH.js";
import {
  IconSelect
} from "./chunk-FTIWWGIB.js";
import "./chunk-OHQSEJAW.js";
import "./chunk-PQEZCWQY.js";
import {
  forwardRefWithAs
} from "./chunk-GF7E4B5O.js";
import "./chunk-J6UMDR5D.js";
import "./chunk-JVWFMWRY.js";
import "./chunk-UPT3JXAF.js";
import "./chunk-LBMOUADV.js";
import {
  useForkRef,
  usePropsHandler
} from "./chunk-Y5I2RU34.js";
import {
  getByMap
} from "./chunk-T4V7NT3B.js";
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

// node_modules/@consta/uikit/__internal__/src/components/Combobox/Combobox.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/SelectComponents/Select.css";
var import_react4 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectValueTag/SelectValueTag.js
var import_react3 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectValueTag/SelectValueTag.css";

// node_modules/@consta/uikit/__internal__/src/components/Tag/Tag.js
var import_react2 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/TagBase/TagBase.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/TagBase/TagBase.css";
var import_react = __toESM(require_react());
var _excluded = ["size", "as", "label", "className", "group", "view", "onCancel", "icon", "iconSize", "withAction"];
var tagBasePropSize = ["m", "xs", "s", "l"];
var tagBasePropSizeDefault = tagBasePropSize[0];
var tagBasePropGroupNumberValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tagBasePropGroupStringValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var tagBasePropGroup = [].concat(tagBasePropGroupNumberValue, tagBasePropGroupStringValue);
var tagBasePropView = ["stroked", "filled"];
var tagBasePropViewDefault = tagBasePropView[0];
var cnTagBase = cn("TagBase");
var sizeMap = { xs: "xs", s: "xs", m: "s", l: "s" };
var TagBase = forwardRefWithAs(function(a, b) {
  var c = a.size, d = void 0 === c ? tagBasePropSizeDefault : c, e = a.as, f = void 0 === e ? "div" : e, g = a.label, h = a.className, i = a.group, j = a.view, k = void 0 === j ? tagBasePropViewDefault : j, l = a.onCancel, m = a.icon, n = a.iconSize, o = a.withAction, p = _objectWithoutProperties(a, _excluded), q = "function" == typeof l, r = getByMap(sizeMap, d), s = getByMap(sizeMap, d, n);
  return import_react.default.createElement(f, Object.assign({}, p, { className: cnTagBase({ size: d, view: k, withCancel: q, withIcon: !!m, group: i, withAction: o }, [h]), ref: b }), q || m ? import_react.default.createElement(import_react.default.Fragment, null, m && import_react.default.createElement("span", { className: cnTagBase("IconWrapper") }, import_react.default.createElement(m, { size: s, className: cnTagBase("Icon") })), import_react.default.createElement("span", { className: cnTagBase("Label") }, g), q && import_react.default.createElement("button", { className: cnTagBase("CancelButton"), type: "button", onClick: l }, import_react.default.createElement(IconClose, { className: cnTagBase("CancelIcon"), size: r }))) : g);
});

// node_modules/@consta/uikit/__internal__/src/components/Tag/Tag.js
var _excluded2 = ["mode", "onChange", "checked", "onCancel", "onClick"];
var tagPropMode = ["button", "check", "cancel", "link", "info"];
var tagPropModeDefault = tagPropMode[0];
function getParams(a, b, c, d, e) {
  return "button" === a ? { view: "filled", onClick: c, as: "button", withAction: true } : "link" === a ? { view: "filled", onClick: c, as: "a", withAction: true } : "check" === a ? { view: b ? "filled" : "stroked", onClick: "function" == typeof d ? function(a2) {
    return d({ e: a2, checked: !b });
  } : void 0, as: "button", withAction: true } : "cancel" === a ? { view: "filled", onCancel: e, as: "span" } : "info" === a ? { view: "filled", as: "span" } : void 0;
}
var COMPONENT_NAME = "Tag";
var TagRenter = function(a, b) {
  var c = (0, import_react2.useRef)(null), d = usePropsHandler(COMPONENT_NAME, a, c), e = d.mode, f = void 0 === e ? tagPropModeDefault : e, g = d.onChange, h = d.checked, i = d.onCancel, j = d.onClick, k = _objectWithoutProperties(d, _excluded2), l = getParams(f, h, j, g, i);
  return import_react2.default.createElement(TagBase, Object.assign({}, k, l, { ref: useForkRef([b, c]) }));
};
var Tag = (0, import_react2.forwardRef)(TagRenter);

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectValueTag/SelectValueTag.js
var cnSelectValueTag = cn("SelectValueTag");
var SelectValueTag = function(a) {
  var b = a.handleRemove, c = void 0 === b ? function() {
  } : b, d = a.size, e = a.label, f = a.disabled;
  return import_react3.default.createElement(Tag, { className: cnSelectValueTag({ size: d, disabled: f }), label: e, mode: "cancel", onCancel: c, size: d });
};

// node_modules/@consta/uikit/__internal__/src/components/Combobox/helpers.js
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
  return a.id;
};
var defaultGetItemLabel = function(a) {
  return a.label;
};
var defaultGetItemGroupKey = function(a) {
  return a.groupId;
};
var defaultGetItemDisabled = function(a) {
  return a.disabled;
};
var defaultGetGroupKey = function(a) {
  return a.id;
};
var defaultGetGroupLabel = function(a) {
  return a.label;
};
var isMultipleParams = function(a) {
  return !!a.multiple;
};
var isNotMultipleParams = function(a) {
  return !a.multiple;
};
function withDefaultGetters(a) {
  return _objectSpread(_objectSpread({}, a), {}, { getItemLabel: a.getItemLabel || defaultGetItemLabel, getItemKey: a.getItemKey || defaultGetItemKey, getItemGroupKey: a.getItemGroupKey || defaultGetItemGroupKey, getItemDisabled: a.getItemDisabled || defaultGetItemDisabled, getGroupLabel: a.getGroupLabel || defaultGetGroupLabel, getGroupKey: a.getGroupKey || defaultGetGroupKey });
}

// node_modules/@consta/uikit/__internal__/src/components/Combobox/Combobox.js
var _excluded3 = ["placeholder", "onBlur", "onFocus", "items", "onChange", "value", "disabled", "ariaLabel", "id", "required", "dropdownRef", "form", "view", "size", "dropdownClassName", "name", "groups", "getItemLabel", "getItemKey", "getItemGroupKey", "getItemDisabled", "getGroupKey", "getGroupLabel", "renderItem", "searchValue", "renderValue", "onCreate", "inputRef", "labelForNotFound", "labelForCreate", "labelForEmptyItems", "onInputChange", "searchFunction", "selectAll", "isLoading", "multiple", "style", "dropdownForm"];
var COMPONENT_NAME2 = "Combobox";
var ComboboxRender = function(a, b) {
  var c = (0, import_react4.useRef)(null), d = (0, import_react4.useRef)(null), e = (0, import_react4.useRef)(null), f = (0, import_react4.useRef)(null), g = usePropsHandler(COMPONENT_NAME2, withDefaultGetters(a), f), h = g.placeholder, i = g.onBlur, j = g.onFocus, k = g.items, l = g.onChange, m = g.value, n = g.disabled, o = g.ariaLabel, p = g.id, q = g.required, r = g.dropdownRef, s = g.form, t = void 0 === s ? defaultPropForm : s, u = g.view, v = void 0 === u ? defaultPropView : u, w = g.size, x = void 0 === w ? defaultPropSize : w, y = g.dropdownClassName, z = g.name, A = g.groups, B = void 0 === A ? [] : A, C = g.getItemLabel, D = g.getItemKey, E = g.getItemGroupKey, F = g.getItemDisabled, G = g.getGroupKey, H = g.getGroupLabel, I = g.renderItem, J = g.searchValue, K = g.renderValue, L = g.onCreate, M = g.inputRef, N = g.labelForNotFound, O = void 0 === N ? defaultlabelForNotFound : N, P = g.labelForCreate, Q = void 0 === P ? defaultlabelForCreate : P, R = g.labelForEmptyItems, S = void 0 === R ? defaultLabelForEmptyItems : R, T = g.onInputChange, U = g.searchFunction, V = g.selectAll, W = g.isLoading, X = g.multiple, Y = void 0 !== X && X, Z = g.style, $ = g.dropdownForm, _ = void 0 === $ ? "default" : $, aa = _objectWithoutProperties(g, _excluded3), ba = useSelect({ items: k, groups: B, value: m, onChange: l, selectAll: V, dropdownRef: c, controlRef: f, disabled: n, getItemLabel: C, getItemKey: D, getGroupKey: G, searchValue: J, getItemGroupKey: E, getItemDisabled: F, multiple: Y, onBlur: i, onFocus: j, onCreate: L, searchFunction: U }), ca = ba.getKeyProps, da = ba.getOptionProps, ea = ba.isOpen, fa = ba.visibleItems, ga = ba.isFocused, ha = ba.handleInputFocus, ia = ba.handleInputBlur, ja = ba.handleToggleDropdown, ka = ba.inputRef, la = ba.handleInputClick, ma = ba.handleInputChange, na = ba.searchValue, oa = ba.clearValue, pa = ba.getHandleRemoveValue, qa = ba.notFound, ra = ba.hasItems, sa = p ? "".concat(p, "-input") : p, ta = K || (Y ? function renderValueDefaultMultiple(a2) {
    var b2 = a2.item, c2 = a2.handleRemove;
    return import_react4.default.createElement(SelectValueTag, { label: C(b2), key: D(b2), size: x, disabled: n || F(b2), handleRemove: c2 });
  } : function renderValueDefaultNotMultiple(a2) {
    var b2 = C(a2.item);
    return import_react4.default.createElement("span", { className: cnSelect("ControlValue"), title: b2 }, b2);
  }), ua = useForkRef([ka, M]), va = function(a2) {
    ma(a2);
    var b2 = a2.target.value;
    n || (null === T || void 0 === T ? void 0 : T({ e: a2, id: p, name: z, value: b2 || null }));
  }, wa = function() {
    var b2 = Y ? getInputWidth(d, e) : void 0;
    return import_react4.default.createElement(import_react4.default.Fragment, null, isMultipleParams(a) && Array.isArray(a.value) && a.value.map(function(a2) {
      return ta({ item: a2, handleRemove: pa(a2) });
    }), isNotMultipleParams(a) && a.value && ta({ item: a.value }), (!m || Array.isArray(m) && 0 === m.length) && !na && h && import_react4.default.createElement("span", { className: cnSelect("Placeholder"), title: "placeholder" }, h), import_react4.default.createElement("input", Object.assign({}, ca(), { type: "text", name: z, id: sa, onFocus: ha, onBlur: ia, "aria-label": o, onChange: va, ref: ua, className: cnSelect("Input", { size: x, hide: !Y && !!m, multiple: Y }), value: na, style: { width: b2 } })));
  };
  return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement(SelectContainer, Object.assign({ focused: ga, disabled: n, size: x, view: v, required: q, form: t, multiple: Y, ref: b, type: "combobox", style: Z, id: sa }, aa), import_react4.default.createElement("div", { className: cnSelect("Control", { hasInput: true }), ref: f, "aria-expanded": ea, "aria-haspopup": "listbox", id: p }, import_react4.default.createElement("div", { className: cnSelect("ControlInner"), onClick: la, role: "button", ref: d, "aria-hidden": "true" }, import_react4.default.createElement("div", { className: cnSelect("ControlValueContainer") }, Y ? import_react4.default.createElement("div", { className: cnSelect("ControlValue") }, wa()) : wa())), import_react4.default.createElement("span", { className: cnSelect("Indicators") }, m && import_react4.default.createElement("button", { type: "button", onClick: oa, className: cnSelect("ClearIndicator", [cnMixFocus()]) }, import_react4.default.createElement(IconClose, { size: "xs", className: cnSelect("ClearIndicatorIcon") })), import_react4.default.createElement("span", { className: cnSelect("Delimiter") }), import_react4.default.createElement("button", { type: "button", className: cnSelect("IndicatorsDropdown"), tabIndex: -1, onClick: ja }, import_react4.default.createElement(IconSelect, { size: "xs", className: cnSelect("DropdownIndicatorIcon") })))), import_react4.default.createElement("div", { className: cnSelect("HelperInputFakeElement"), ref: e }, na)), import_react4.default.createElement(SelectDropdown, { isOpen: ea, size: x, controlRef: f, getOptionProps: da, dropdownRef: useForkRef([r, c]), form: _, className: y, renderItem: I || function renderItemDefault(a2) {
    var b2 = a2.item, c2 = a2.active, d2 = a2.hovered, e2 = a2.onClick, f2 = a2.onMouseEnter;
    return import_react4.default.createElement(SelectItem, { label: C(b2), active: c2, hovered: d2, multiple: Y, size: x, indent: "round" === _ ? "increased" : "normal", onClick: e2, onMouseEnter: f2, disabled: F(b2) });
  }, getGroupLabel: H, visibleItems: fa, labelForNotFound: O, labelForCreate: Q, isLoading: W, labelForEmptyItems: S, notFound: qa, hasItems: ra, style: "number" == typeof (null === Z || void 0 === Z ? void 0 : Z.zIndex) ? { zIndex: Z.zIndex + 1 } : void 0 }));
};
var Combobox = (0, import_react4.forwardRef)(ComboboxRender);
export {
  COMPONENT_NAME2 as COMPONENT_NAME,
  Combobox,
  defaultGetGroupKey,
  defaultGetGroupLabel,
  defaultGetItemDisabled,
  defaultGetItemGroupKey,
  defaultGetItemKey,
  defaultGetItemLabel,
  isMultipleParams,
  isNotMultipleParams,
  withDefaultGetters
};
//# sourceMappingURL=@consta_uikit_Combobox.js.map
