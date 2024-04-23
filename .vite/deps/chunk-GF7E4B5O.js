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

// node_modules/@consta/uikit/__internal__/src/components/Text/Text.js
var import_react2 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Text/Text.css";

// node_modules/@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes.js
var import_react = __toESM(require_react());
function forwardRefWithAs(a) {
  return import_react.default.forwardRef(a);
}

// node_modules/@consta/uikit/__internal__/src/components/Text/Text.js
var _excluded = ["as", "align", "cursor", "decoration", "display", "font", "lineHeight", "size", "spacing", "fontStyle", "transform", "type", "view", "weight", "width", "className", "children", "truncate"];
var textPropLineHeightDefault = "m";
var textPropSize = ["m", "2xs", "xs", "s", "l", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
var textPropSizeDefault = textPropSize[0];
var textPropView = ["primary", "secondary", "brand", "ghost", "link", "linkMinor", "system", "normal", "success", "warning", "alert", "caution", "critical"];
var textPropViewDefault = textPropView[0];
var cnText = cn("Text");
var Text = forwardRefWithAs(function(a, b) {
  var c = a.as, d = void 0 === c ? "div" : c, e = a.align, f = a.cursor, g = a.decoration, h = a.display, i = a.font, j = a.lineHeight, k = void 0 === j ? textPropLineHeightDefault : j, l = a.size, m = void 0 === l ? textPropSizeDefault : l, n = a.spacing, o = a.fontStyle, p = a.transform, q = a.type, r = a.view, s = void 0 === r ? textPropViewDefault : r, t = a.weight, u = a.width, v = a.className, w = a.children, x = a.truncate, y = _objectWithoutProperties(a, _excluded);
  return import_react2.default.createElement(d, Object.assign({}, y, { className: cnText({ align: e, cursor: f, decoration: g, display: h, font: i, lineHeight: k, size: m, spacing: n, fontStyle: o, transform: p, type: q, view: s, weight: t, width: u, truncate: void 0 !== x && x }, [v]), ref: b }), w);
});

export {
  forwardRefWithAs,
  textPropLineHeightDefault,
  textPropSizeDefault,
  Text
};
//# sourceMappingURL=chunk-GF7E4B5O.js.map
