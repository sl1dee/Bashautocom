import {
  _slicedToArray
} from "./chunk-S7TJXDKL.js";
import {
  _defineProperty
} from "./chunk-PQHI3MBA.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/components/Select/helpers.js
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
function withDefaultGetters(a) {
  return _objectSpread(_objectSpread({}, a), {}, { getItemLabel: a.getItemLabel || defaultGetItemLabel, getItemKey: a.getItemKey || defaultGetItemKey, getItemGroupKey: a.getItemGroupKey || defaultGetItemGroupKey, getItemDisabled: a.getItemDisabled || defaultGetItemDisabled, getGroupLabel: a.getGroupLabel || defaultGetGroupLabel, getGroupKey: a.getGroupKey || defaultGetGroupKey });
}

// node_modules/@consta/uikit/__internal__/src/hooks/useForkRef/useForkRef.js
var import_react = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/utils/setRef.js
function setRef(a, b) {
  "function" == typeof a ? a(b) : a && (a.current = b);
}

// node_modules/@consta/uikit/__internal__/src/hooks/useForkRef/useForkRef.js
function _createForOfIteratorHelper(a, b) {
  var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
  if (!c) {
    if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
      c && (a = c);
      var d = 0, e = function() {
      };
      return { s: e, n: function n() {
        return d >= a.length ? { done: true } : { done: false, value: a[d++] };
      }, e: function e2(a2) {
        throw a2;
      }, f: e };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var f, g = true, h = false;
  return { s: function s() {
    c = c.call(a);
  }, n: function n() {
    var a2 = c.next();
    return g = a2.done, a2;
  }, e: function e2(a2) {
    h = true, f = a2;
  }, f: function f2() {
    try {
      g || null == c["return"] || c["return"]();
    } finally {
      if (h)
        throw f2;
    }
  } };
}
function _unsupportedIterableToArray(a, b) {
  if (a) {
    if ("string" == typeof a)
      return _arrayLikeToArray(a, b);
    var c = Object.prototype.toString.call(a).slice(8, -1);
    return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0;
  }
}
function _arrayLikeToArray(a, b) {
  (null == b || b > a.length) && (b = a.length);
  for (var c = 0, d = Array(b); c < b; c++)
    d[c] = a[c];
  return d;
}
function useForkRef(a) {
  return (0, import_react.useMemo)(function() {
    return 1 > a.length ? null : function(b) {
      var c, d = _createForOfIteratorHelper(a);
      try {
        for (d.s(); !(c = d.n()).done; ) {
          var e = c.value;
          setRef(e, b);
        }
      } catch (a2) {
        d.e(a2);
      } finally {
        d.f();
      }
    };
  }, [a]);
}

// node_modules/@consta/uikit/__internal__/src/hooks/useFlag/useFlag.js
var import_react2 = __toESM(require_react());
var not = function(a) {
  return !a;
};
var useFlag = function() {
  var a = !!(0 < arguments.length && arguments[0] !== void 0) && arguments[0], b = (0, import_react2.useState)(a), c = _slicedToArray(b, 2), d = c[0], e = c[1], f = (0, import_react2.useCallback)(function() {
    return e(true);
  }, []), g = (0, import_react2.useCallback)(function() {
    return e(false);
  }, []), h = (0, import_react2.useCallback)(function() {
    return e(not);
  }, []), i = (0, import_react2.useCallback)(function() {
    return e(not);
  }, []);
  return [d, { on: f, off: g, toggle: h, toogle: i }];
};

// node_modules/@consta/uikit/__internal__/src/components/EventInterceptor/usePropsHandler.js
var import_react7 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/EventInterceptor/EventInterceptor.js
var import_react6 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/EventInterceptor/propsHandlers/useSelectEventsHandler.js
var import_react3 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/EventInterceptor/propsHandlers/useSnackBarEventsHandler.js
var import_react4 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/EventInterceptor/propsHandlers/useTextFieldEventsHandler.js
var import_react5 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/EventInterceptor/EventInterceptor.js
var EventInterceptorContext = import_react6.default.createContext(void 0);

// node_modules/@consta/uikit/__internal__/src/components/EventInterceptor/usePropsHandler.js
var usePropsHandler = function(a, b, c) {
  var d = import_react7.default.useContext(EventInterceptorContext);
  if (!d)
    return b;
  var e = d.eventHandler, f = d.map, g = f[a];
  return g ? g(b, e, c) : b;
};

export {
  useForkRef,
  useFlag,
  defaultGetItemKey,
  defaultGetItemLabel,
  defaultGetItemGroupKey,
  defaultGetItemDisabled,
  defaultGetGroupKey,
  defaultGetGroupLabel,
  withDefaultGetters,
  usePropsHandler
};
//# sourceMappingURL=chunk-Y5I2RU34.js.map
