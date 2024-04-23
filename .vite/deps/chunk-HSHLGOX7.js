import {
  _defineProperty,
  require_classname
} from "./chunk-PQHI3MBA.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/utils/bem.js
var import_classname = __toESM(require_classname());
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
var reactBemNaming = { e: "-", m: "_", v: "_" };
var cn = (0, import_classname.withNaming)(reactBemNaming);
var withPrefix = function(a) {
  return (0, import_classname.withNaming)(_objectSpread({ n: "".concat(a, "--") }, reactBemNaming));
};
var cnCanary = withPrefix("canary");
var cnDeprecated = withPrefix("deprecated");

export {
  cn
};
//# sourceMappingURL=chunk-HSHLGOX7.js.map
