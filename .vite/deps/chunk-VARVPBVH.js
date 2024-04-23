import {
  _toConsumableArray
} from "./chunk-YGS6DBVC.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/hooks/useRefs/useRefs.js
var import_react = __toESM(require_react());
var isNotNumber = function(a) {
  return "number" != typeof a;
};
var useRefs = function(a) {
  var b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : [];
  return (0, import_react.useMemo)(function() {
    if (isNotNumber(a)) {
      for (var b2 = {}, c = 0; c < a.length; c++)
        b2[a[c]] = (0, import_react.createRef)();
      return b2;
    }
    return Array(a).fill(null).map(function() {
      return (0, import_react.createRef)();
    });
  }, ["number" == typeof a ? a : a.join("-")].concat(_toConsumableArray(b)));
};

export {
  useRefs
};
//# sourceMappingURL=chunk-VARVPBVH.js.map
