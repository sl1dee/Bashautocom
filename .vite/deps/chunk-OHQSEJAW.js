import {
  _slicedToArray
} from "./chunk-S7TJXDKL.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/hooks/useComponentSize/useComponentSize.js
var import_react2 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/hooks/useResizeObserved/useResizeObserved.js
var import_react = __toESM(require_react());
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
var useResizeObserved = function(a, b) {
  var c = import_react.default.useState(function() {
    return a.map(function(a2) {
      return b(a2.current);
    });
  }), d = _slicedToArray(c, 2), e = d[0], f = d[1], g = import_react.default.useRef(b);
  return (0, import_react.useLayoutEffect)(function() {
    g.current = b;
  }, [b]), (0, import_react.useLayoutEffect)(function() {
    var b2, c2 = new ResizeObserver(function() {
      f(a.map(function(a2) {
        return g.current(a2.current);
      }));
    }), d2 = _createForOfIteratorHelper(a);
    try {
      for (d2.s(); !(b2 = d2.n()).done; ) {
        var e2 = b2.value;
        e2.current && c2.observe(e2.current);
      }
    } catch (a2) {
      d2.e(a2);
    } finally {
      d2.f();
    }
    return function() {
      c2.disconnect();
    };
  }, [a]), e;
};

// node_modules/@consta/uikit/__internal__/src/hooks/useComponentSize/getElementSize.js
var defaultSize = { width: 0, height: 0 };
var getElementSize = function(a) {
  if (!a)
    return defaultSize;
  var b = a.getBoundingClientRect(), c = b.width, d = b.height;
  return { width: c, height: d };
};

// node_modules/@consta/uikit/__internal__/src/hooks/useComponentSize/useComponentSize.js
function useComponentSize(a) {
  var b = (0, import_react2.useMemo)(function() {
    return [a];
  }, [a.current]);
  return useResizeObserved(b, getElementSize)[0];
}

export {
  useResizeObserved,
  getElementSize,
  useComponentSize
};
//# sourceMappingURL=chunk-OHQSEJAW.js.map
