import {
  useForkRef,
  usePropsHandler
} from "./chunk-Y5I2RU34.js";
import {
  cnMixFocus
} from "./chunk-3NWFPCCC.js";
import {
  cn
} from "./chunk-HSHLGOX7.js";
import {
  _objectWithoutProperties
} from "./chunk-PQHI3MBA.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/components/Checkbox/Checkbox.js
var import_react = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Checkbox/Checkbox.css";
var _excluded = ["checked", "name", "size", "view", "align", "disabled", "intermediate", "className", "label", "onChange", "onFocus", "onBlur", "readOnly", "required", "step", "tabIndex", "inputId", "inputRef"];
var checkboxPropSize = ["m", "xs", "s", "l"];
var checkboxPropSizeDefault = checkboxPropSize[0];
var checkboxPropView = ["primary", "ghost"];
var checkboxPropViewDefault = checkboxPropView[0];
var checkboxPropAlign = ["center", "top"];
var checkboxPropAlignDefault = checkboxPropAlign[0];
var COMPONENT_NAME = "Checkbox";
var cnCheckbox = cn("Checkbox");
var Checkbox = import_react.default.forwardRef(function(a, b) {
  var c = import_react.default.useRef(null), d = usePropsHandler(COMPONENT_NAME, a, c), e = d.checked, f = void 0 !== e && e, g = d.name, h = d.size, i = void 0 === h ? checkboxPropSizeDefault : h, j = d.view, k = void 0 === j ? checkboxPropViewDefault : j, l = d.align, m = void 0 === l ? checkboxPropAlignDefault : l, n = d.disabled, o = d.intermediate, p = d.className, q = d.label, r = d.onChange, s = d.onFocus, t = d.onBlur, u = d.readOnly, v = d.required, w = d.step, x = d.tabIndex, y = d.inputId, z = d.inputRef, A = _objectWithoutProperties(d, _excluded);
  return import_react.default.createElement("label", Object.assign({}, A, { className: cnCheckbox({ size: i, view: k, disabled: n, intermediate: void 0 !== o && o, align: m }, [p]), ref: useForkRef([b, c]) }), import_react.default.createElement("input", { type: "checkbox", name: g, className: cnCheckbox("Input", [cnMixFocus()]), checked: f, id: y, disabled: n, onChange: function handleChange(a2) {
    r && r({ e: a2, checked: !f });
  }, onFocus: s, onBlur: t, readOnly: u, required: v, step: w, tabIndex: x, ref: z }), q && import_react.default.createElement("span", { className: cnCheckbox("Label") }, q));
});

export {
  Checkbox
};
//# sourceMappingURL=chunk-LBMOUADV.js.map
