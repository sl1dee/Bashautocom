import {
  cnMixSpace
} from "./chunk-FTIWWGIB.js";
import {
  Text,
  forwardRefWithAs
} from "./chunk-GF7E4B5O.js";
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

// node_modules/@consta/uikit/__internal__/src/components/FieldCaption/FieldCaption.js
var import_react = __toESM(require_react());
var _excluded = ["status", "children", "className"];
var cnFieldCaption = cn("FieldCaption");
var FieldCaption = forwardRefWithAs(function(a, b) {
  var c = a.status, d = a.children, e = a.className, f = _objectWithoutProperties(a, _excluded);
  return import_react.default.createElement(Text, Object.assign({}, f, { view: c || "secondary", className: cnFieldCaption(null, [e]), ref: b, size: "xs", lineHeight: "2xs" }), d);
});

// node_modules/@consta/uikit/__internal__/src/components/FieldLabel/FieldLabel.js
var import_react2 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/FieldLabel/FieldLabel.css";
var _excluded2 = ["className", "required", "children", "icon", "size"];
var cnFieldLabel = cn("FieldLabel");
var iconSizeMap = { xs: "xs", s: "s", m: "s", l: "s" };
var iconSpaceMap = { xs: "2xs", s: "2xs", m: "2xs", l: "xs" };
var FieldLabel = forwardRefWithAs(function(a, b) {
  var c = a.className, d = a.required, e = a.children, f = a.icon, g = a.size, h = void 0 === g ? "m" : g, i = _objectWithoutProperties(a, _excluded2);
  return import_react2.default.createElement(Text, Object.assign({}, i, { size: h, view: "secondary", lineHeight: "m", className: cnFieldLabel(null, [c]), ref: b }), f && import_react2.default.createElement(f, { className: cnFieldLabel("Icon", [cnMixSpace({ mR: iconSpaceMap[h] })]), size: iconSizeMap[h], view: "secondary" }), e, d && import_react2.default.createElement("span", { className: cnFieldLabel("Star") }, "*"));
});

export {
  FieldCaption,
  FieldLabel
};
//# sourceMappingURL=chunk-BGCSU4BD.js.map
