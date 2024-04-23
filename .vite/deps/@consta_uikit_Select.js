import {
  COMPONENT_NAME,
  SelectContainer,
  SelectDropdown,
  SelectItem,
  cnSelect,
  defaultLabelForEmptyItems,
  defaultPropForm,
  defaultPropSize,
  defaultPropView,
  useSelect
} from "./chunk-DEZMWBV3.js";
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
import "./chunk-GF7E4B5O.js";
import "./chunk-J6UMDR5D.js";
import "./chunk-JVWFMWRY.js";
import "./chunk-UPT3JXAF.js";
import "./chunk-LBMOUADV.js";
import {
  defaultGetGroupKey,
  defaultGetGroupLabel,
  defaultGetItemDisabled,
  defaultGetItemGroupKey,
  defaultGetItemKey,
  defaultGetItemLabel,
  useForkRef,
  usePropsHandler,
  withDefaultGetters
} from "./chunk-Y5I2RU34.js";
import "./chunk-T4V7NT3B.js";
import "./chunk-3NWFPCCC.js";
import "./chunk-YGS6DBVC.js";
import "./chunk-S7TJXDKL.js";
import "./chunk-HSHLGOX7.js";
import {
  _objectWithoutProperties
} from "./chunk-PQHI3MBA.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/components/Select/Select.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/SelectComponents/Select.css";
var import_react = __toESM(require_react());
var _excluded = ["placeholder", "onBlur", "onFocus", "items", "onChange", "value", "required", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name", "groups", "getItemLabel", "labelForEmptyItems", "getItemKey", "getItemGroupKey", "getItemDisabled", "getGroupKey", "getGroupLabel", "renderItem", "isLoading", "renderValue", "inputRef", "style", "dropdownForm"];
var SelectRender = function(a, b) {
  var c = (0, import_react.useRef)(null), d = (0, import_react.useRef)(null), e = usePropsHandler(COMPONENT_NAME, withDefaultGetters(a), d), f = e.placeholder, g = e.onBlur, h = e.onFocus, i = e.items, j = e.onChange, k = e.value, l = e.required, m = e.disabled, n = e.ariaLabel, o = e.id, p = e.dropdownRef, q = void 0 === p ? c : p, r = e.form, s = void 0 === r ? defaultPropForm : r, t = e.view, u = void 0 === t ? defaultPropView : t, v = e.size, w = void 0 === v ? defaultPropSize : v, x = e.dropdownClassName, y = e.name, z = e.groups, A = void 0 === z ? [] : z, B = e.getItemLabel, C = e.labelForEmptyItems, D = void 0 === C ? defaultLabelForEmptyItems : C, E = e.getItemKey, F = e.getItemGroupKey, G = e.getItemDisabled, H = e.getGroupKey, I = e.getGroupLabel, J = e.renderItem, K = e.isLoading, L = e.renderValue, M = e.inputRef, N = e.style, O = e.dropdownForm, P = void 0 === O ? "default" : O, Q = _objectWithoutProperties(e, _excluded), R = useSelect({ items: i, groups: A, value: k, onChange: j, dropdownRef: q, controlRef: d, disabled: m, getItemLabel: B, getItemKey: E, getGroupKey: H, getItemGroupKey: F, getItemDisabled: G, multiple: false, onBlur: g, onFocus: h }), S = R.getKeyProps, T = R.getOptionProps, U = R.isOpen, V = R.visibleItems, W = R.isFocused, X = R.handleInputFocus, Y = R.handleInputBlur, Z = R.handleToggleDropdown, $ = R.inputRef, _ = R.handleInputClick, aa = R.notFound, ba = R.hasItems, ca = o ? "".concat(o, "-input") : o;
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(SelectContainer, Object.assign({ focused: W, disabled: m, size: w, view: u, form: s, required: l, ref: b, style: N, id: ca }, Q), import_react.default.createElement("div", { className: cnSelect("Control"), ref: d, "aria-expanded": U, "aria-haspopup": "listbox", id: o }, import_react.default.createElement("div", { className: cnSelect("ControlInner") }, import_react.default.createElement("div", { className: cnSelect("ControlValueContainer") }, import_react.default.createElement("input", Object.assign({}, S(), { type: "button", name: y, id: ca, onFocus: X, onBlur: Y, "aria-label": n, onClick: _, ref: useForkRef([$, M]), className: cnSelect("FakeField"), readOnly: true })), k && (L || function renderValueDefault(a2) {
    var b2 = B(a2.item);
    return import_react.default.createElement("span", { className: cnSelect("ControlValue"), title: b2 }, b2);
  })({ item: k }), ("undefined" == typeof k || null === k) && f && import_react.default.createElement("span", { className: cnSelect("Placeholder"), title: "placeholder" }, f))), import_react.default.createElement("span", { className: cnSelect("Indicators") }, import_react.default.createElement("button", { type: "button", className: cnSelect("IndicatorsDropdown"), tabIndex: -1, onClick: Z }, import_react.default.createElement(IconSelect, { size: "xs", className: cnSelect("DropdownIndicatorIcon") }))))), import_react.default.createElement(SelectDropdown, { isOpen: U, size: w, controlRef: d, getOptionProps: T, dropdownRef: q, form: P, className: x, renderItem: J || function renderItemDefault(a2) {
    var b2 = a2.item, c2 = a2.active, d2 = a2.hovered, e2 = a2.onClick, f2 = a2.onMouseEnter;
    return import_react.default.createElement(SelectItem, { label: B(b2), active: c2, hovered: d2, multiple: false, size: w, indent: "round" === P ? "increased" : "normal", onClick: e2, onMouseEnter: f2, disabled: G(b2) });
  }, getGroupLabel: I, visibleItems: V, notFound: aa, isLoading: K, labelForEmptyItems: D, hasItems: ba, style: "number" == typeof (null === N || void 0 === N ? void 0 : N.zIndex) ? { zIndex: N.zIndex + 1 } : void 0 }));
};
var Select = (0, import_react.forwardRef)(SelectRender);
export {
  Select,
  defaultGetGroupKey,
  defaultGetGroupLabel,
  defaultGetItemDisabled,
  defaultGetItemGroupKey,
  defaultGetItemKey,
  defaultGetItemLabel,
  withDefaultGetters
};
//# sourceMappingURL=@consta_uikit_Select.js.map
