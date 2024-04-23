import {
  _toConsumableArray,
  isNotNil
} from "./chunk-YGS6DBVC.js";

// node_modules/@consta/uikit/__internal__/src/hooks/useChoiceGroup/useChoiceGroup.js
function _createForOfIteratorHelper(a, b) {
  var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
  if (!c) {
    if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
      c && (a = c);
      var d = 0, e = function() {
      };
      return { s: e, n: function n() {
        return d >= a.length ? { done: true } : { done: false, value: a[d++] };
      }, e: function(a2) {
        function b2() {
          return a2.apply(this, arguments);
        }
        return b2.toString = function() {
          return a2.toString();
        }, b2;
      }(function(a2) {
        throw a2;
      }), f: e };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var f, g = true, h = false;
  return { s: function s() {
    c = c.call(a);
  }, n: function n() {
    var a2 = c.next();
    return g = a2.done, a2;
  }, e: function(a2) {
    function b2() {
      return a2.apply(this, arguments);
    }
    return b2.toString = function() {
      return a2.toString();
    }, b2;
  }(function(a2) {
    h = true, f = a2;
  }), f: function f2() {
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
function isMultiple(a) {
  return a.multiple;
}
function isNotMultiple(a) {
  return !a.multiple;
}
function formatValue(a, b, c) {
  var d = {};
  if (!isNotNil(a) && !Array.isArray(a))
    return d;
  var e = c ? a : [a];
  if (e && 0 < e.length) {
    var f, g = _createForOfIteratorHelper(e);
    try {
      for (g.s(); !(f = g.n()).done; ) {
        var h = f.value;
        d[b(h)] = h;
      }
    } catch (a2) {
      g.e(a2);
    } finally {
      g.f();
    }
  }
  return d;
}
function useChoiceGroup(a) {
  var b = formatValue(a.value, a.getKey, a.multiple), c = function(c2) {
    return Object.prototype.hasOwnProperty.call(b, a.getKey(c2));
  };
  return { getOnChange: function getOnChange(b2) {
    return function(d) {
      if (isMultiple(a)) {
        var e;
        if (c(b2)) {
          var f = a.value || [];
          e = f.filter(function(c2) {
            return a.getKey(c2) !== a.getKey(b2);
          }), 0 === e.length && (e = null);
        } else
          e = a.value ? _toConsumableArray(a.value) : [], e.push(b2);
        a.callBack({ e: d, value: e });
      }
      isNotMultiple(a) && a.callBack({ e: d, value: b2 });
    };
  }, getChecked: c };
}

export {
  useChoiceGroup
};
//# sourceMappingURL=chunk-6WMXAN6A.js.map
