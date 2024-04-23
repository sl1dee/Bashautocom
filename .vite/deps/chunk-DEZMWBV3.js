import {
  FieldCaption,
  FieldLabel
} from "./chunk-BGCSU4BD.js";
import {
  ListAddItem,
  ListGroupLabel,
  ListItem,
  Loader,
  animateTimeout,
  cnListBox,
  cnMixPopoverAnimate,
  getCountedGroups,
  getGroups,
  mapVerticalSpase,
  useDebounce
} from "./chunk-LWVZSOY4.js";
import {
  Transition_default
} from "./chunk-L2ANZMSN.js";
import {
  Popover,
  cnMixSpace,
  useClickOutside
} from "./chunk-FTIWWGIB.js";
import {
  Text
} from "./chunk-GF7E4B5O.js";
import {
  Checkbox
} from "./chunk-LBMOUADV.js";
import {
  _toConsumableArray
} from "./chunk-YGS6DBVC.js";
import {
  _slicedToArray
} from "./chunk-S7TJXDKL.js";
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

// node_modules/@consta/uikit/__internal__/src/hooks/useSelect/useSelect.js
var import_react3 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/hooks/useKeys/useKeys.js
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
var useKeys = function(a) {
  return function(b) {
    return _objectSpread(_objectSpread({}, b), {}, { onKeyDown: function onKeyDown(c) {
      var d = c.keyCode, e2 = c.key, f = c.shiftKey, g = c.metaKey, h = a[e2] || a[d];
      "function" == typeof h && h({ keyCode: d, key: e2, shift: f, meta: g }, c), "function" == typeof (null === b || void 0 === b ? void 0 : b.onKeyDown) && b.onKeyDown(c);
    } });
  };
};

// node_modules/@consta/uikit/__internal__/src/hooks/usePrevious/usePrevious.js
var import_react = __toESM(require_react());
function usePrevious(a) {
  var b = import_react.default.useRef(a);
  return import_react.default.useEffect(function() {
    b.current = a;
  }, [a]), b.current;
}

// node_modules/@consta/uikit/__internal__/src/hooks/useSelect/helpers.js
var import_react2 = __toESM(require_react());

// node_modules/compute-scroll-into-view/dist/index.mjs
function t(t2) {
  return "object" == typeof t2 && null != t2 && 1 === t2.nodeType;
}
function e(t2, e2) {
  return (!e2 || "hidden" !== t2) && "visible" !== t2 && "clip" !== t2;
}
function n(t2, n2) {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    var r2 = getComputedStyle(t2, null);
    return e(r2.overflowY, n2) || e(r2.overflowX, n2) || function(t3) {
      var e2 = function(t4) {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
          return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      }(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    }(t2);
  }
  return false;
}
function r(t2, e2, n2, r2, i2, o, l, d) {
  return o < t2 && l > e2 || o > t2 && l < e2 ? 0 : o <= t2 && d <= n2 || l >= e2 && d >= n2 ? o - t2 - r2 : l > e2 && d < n2 || o < t2 && d > n2 ? l - e2 + i2 : 0;
}
var i = function(e2, i2) {
  var o = window, l = i2.scrollMode, d = i2.block, f = i2.inline, h = i2.boundary, u = i2.skipOverflowHiddenElements, s = "function" == typeof h ? h : function(t2) {
    return t2 !== h;
  };
  if (!t(e2))
    throw new TypeError("Invalid target");
  for (var a, c, g = document.scrollingElement || document.documentElement, p = [], m = e2; t(m) && s(m); ) {
    if ((m = null == (c = (a = m).parentElement) ? a.getRootNode().host || null : c) === g) {
      p.push(m);
      break;
    }
    null != m && m === document.body && n(m) && !n(document.documentElement) || null != m && n(m, u) && p.push(m);
  }
  for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e2.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < p.length; k++) {
    var B = p[k], D = B.getBoundingClientRect(), O = D.height, X = D.width, Y = D.top, L = D.right, S = D.bottom, j = D.left;
    if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L)
      return T;
    var N = getComputedStyle(B), q = parseInt(N.borderLeftWidth, 10), z = parseInt(N.borderTopWidth, 10), A = parseInt(N.borderRightWidth, 10), F = parseInt(N.borderBottomWidth, 10), G = 0, J = 0, K = "offsetWidth" in B ? B.offsetWidth - B.clientWidth - q - A : 0, P = "offsetHeight" in B ? B.offsetHeight - B.clientHeight - z - F : 0, Q = "offsetWidth" in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0, U = "offsetHeight" in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
    if (g === B)
      G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? r(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2, J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : r(W, W + w, w, q, A, W + R, W + R + E, E), G = Math.max(0, G + H), J = Math.max(0, J + W);
    else {
      G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? r(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2, J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : r(j, L, X, q, A + K, R, R + E, E);
      var Z = B.scrollLeft, $ = B.scrollTop;
      C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))), R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)));
    }
    T.push({ el: B, top: G, left: J });
  }
  return T;
};

// node_modules/@consta/uikit/__internal__/src/utils/scrollIntoView.js
function scrollIntoView(a, b) {
  var c = i(a, { boundary: b, block: "nearest", scrollMode: "if-needed" });
  c.forEach(function(a2) {
    var b2 = a2.el, c2 = a2.top, d = a2.left;
    b2.scrollTop = c2, b2.scrollLeft = d;
  });
}

// node_modules/@consta/uikit/__internal__/src/hooks/useSelect/helpers.js
function useHoistedState(a) {
  var b = import_react2.default.useRef(function(a2, b2) {
    return b2;
  }), c = import_react2.default.useState(a), d = _slicedToArray(c, 2), e2 = d[0], f = d[1], g = import_react2.default.useCallback(function(a2, c2) {
    if (!c2)
      throw new Error("An action type is required to update the state");
    return f(function(d2) {
      return b.current(d2, a2(d2), c2);
    });
  }, [f]);
  return [e2, g];
}
var scrollToIndex = function(a, b) {
  if (b.current) {
    var c = b.current.querySelectorAll("div[role=option]");
    scrollIntoView(c[a], b.current);
  }
};

// node_modules/@consta/uikit/__internal__/src/hooks/useSelect/useSelect.js
function ownKeys2(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function(b2) {
      return Object.getOwnPropertyDescriptor(a, b2).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function _objectSpread2(a) {
  for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys2(Object(b), true).forEach(function(c2) {
      _defineProperty(a, c2, b[c2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys2(Object(b)).forEach(function(c2) {
      Object.defineProperty(a, c2, Object.getOwnPropertyDescriptor(b, c2));
    });
  return a;
}
function _createForOfIteratorHelper(a, b) {
  var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
  if (!c) {
    if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
      c && (a = c);
      var d = 0, e2 = function() {
      };
      return { s: e2, n: function n2() {
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
      }), f: e2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var f, g = true, h = false;
  return { s: function s() {
    c = c.call(a);
  }, n: function n2() {
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
var isMultipleParams = function(a) {
  return a.multiple;
};
var isNotMultipleParams = function(a) {
  return !a.multiple;
};
var actions = { setOpen: "setOpen", setSearch: "setSearch", highlightIndex: "highlightIndex" };
var initialState = { searchValue: "", resolvedSearchValue: "", isOpen: false, highlightedIndex: 0, scrollToHighlighted: false };
var isOptionForCreate = function(a) {
  return a && Object.prototype.hasOwnProperty.call(a, "__optionForCreate");
};
var isOptionForSelectAll = function(a) {
  return a && Object.prototype.hasOwnProperty.call(a, "__optionSelctAll");
};
function useSelect(a) {
  var b = a.items, c = a.dropdownRef, d = a.controlRef, e2 = a.disabled, f = void 0 !== e2 && e2, g = a.multiple, h = void 0 !== g && g, i2 = a.getItemLabel, j = a.getItemKey, k = a.searchFunction, l = a.getItemGroupKey, m = a.groups, n2 = a.selectAll, o = void 0 !== n2 && n2, p = a.getGroupKey, q = a.sortGroups, r2 = a.getItemDisabled, s = a.onFocus, t2 = a.onBlur, u = a.searchValue, v = a.withoutClearSearch, w = (0, import_react3.useRef)(null), x = (0, import_react3.useState)(false), y = _slicedToArray(x, 2), z = y[0], A = y[1], B = a.value && (Array.isArray(a.value) ? a.value : [a.value]) || [], C = useHoistedState(initialState), D = _slicedToArray(C, 2), E = D[0], F = E.searchValue, G = E.isOpen, H = E.highlightedIndex, I = E.resolvedSearchValue, J = E.scrollToHighlighted, K = D[1], L = function(a2, b2) {
    return -1 !== i2(a2).toLocaleLowerCase().indexOf(b2.toLocaleLowerCase());
  }, M = import_react3.default.useMemo(function() {
    if (I && "" !== I) {
      var c2 = b.filter(function(a2) {
        return k ? k(a2, I) : L(a2, I);
      }), d2 = !!b.find(function(a2) {
        return i2(a2).toString().toLowerCase() === I.toLocaleLowerCase();
      });
      return [c2, a.onCreate && !d2 ? { label: F, __optionForCreate: true } : void 0];
    }
    return [b, void 0];
  }, [b, I]), N = _slicedToArray(M, 2), O = N[0], P = N[1], Q = (0, import_react3.useMemo)(function() {
    var b2 = getCountedGroups(getGroups(O, null !== m && void 0 !== m && m.length ? l : void 0, m, p, q), isMultipleParams(a) ? a.value : [], o, j, r2);
    return P ? [P].concat(_toConsumableArray(b2)) : b2;
  }, [B, o, O, m, l, r2, p, q, P]), R = (0, import_react3.useMemo)(function() {
    var b2 = false;
    return 0 < F.length && (b2 = 0 === Q.filter(function(a2) {
      return isOptionForCreate(a2) || 0 < a2.items.length || a2.group;
    }).length && !a.onCreate), b2;
  }, [Q]), S = 0 !== b.length, T = function() {
    var a2 = 0;
    if (0 < B.length) {
      var b2, c2 = _createForOfIteratorHelper(Q);
      try {
        for (c2.s(); !(b2 = c2.n()).done; ) {
          var f2 = b2.value;
          if (isOptionForCreate(f2)) {
            a2++;
            continue;
          }
          var d2, e3 = _createForOfIteratorHelper(f2.items);
          try {
            for (e3.s(); !(d2 = e3.n()).done; ) {
              var g2 = d2.value;
              if (isOptionForSelectAll(g2))
                return a2;
              if (j(g2) === j(B[0]))
                return a2;
              a2++;
            }
          } catch (a3) {
            e3.e(a3);
          } finally {
            e3.f();
          }
        }
      } catch (a3) {
        c2.e(a3);
      } finally {
        c2.f();
      }
    }
    return 0;
  }, U = import_react3.default.useCallback(function(a2) {
    K(function(b2) {
      return _objectSpread2(_objectSpread2({}, b2), {}, { isOpen: a2 });
    }, actions.setOpen);
  }, [K]), V = useDebounce(function(a2) {
    K(function(b2) {
      return _objectSpread2(_objectSpread2({}, b2), {}, { resolvedSearchValue: a2 });
    }, actions.setSearch);
  }, 300), W = import_react3.default.useCallback(function(a2) {
    K(function(b2) {
      return _objectSpread2(_objectSpread2({}, b2), {}, { searchValue: a2 || "" });
    }, actions.setSearch), V(a2 || "");
  }, [K, V]), X = usePrevious(G);
  import_react3.default.useLayoutEffect(function() {
    if (null !== B && !X && G) {
      var a2 = T();
      0 < O.length && scrollToIndex(a2, c);
    }
  });
  var Y = import_react3.default.useCallback(function(a2, b2) {
    K(function(c2) {
      return _objectSpread2(_objectSpread2({}, c2), {}, { highlightedIndex: Math.min(Math.max(0, "function" == typeof a2 ? a2(c2.highlightedIndex) : a2), P ? O.length : O.length - 1), scrollToHighlighted: b2 });
    }, actions.highlightIndex);
  }, [O, K, P]), Z = function(b2, c2) {
    if (b2.stopPropagation(), isMultipleParams(a)) {
      var d2, e3 = null === (d2 = a.value) || void 0 === d2 ? void 0 : d2.filter(function(a2) {
        return j(a2) !== j(c2);
      });
      a.onChange({ e: b2, value: null !== e3 && void 0 !== e3 && e3.length ? e3 : null });
    }
  }, $ = function(b2, c2) {
    if (!(r2 && r2(c2))) {
      if (isMultipleParams(a)) {
        var d2 = B.some(function(a2) {
          return j(a2) === j(c2);
        }) ? B.filter(function(a2) {
          return j(a2) !== j(c2);
        }) : [].concat(_toConsumableArray(B), [c2]);
        a.onChange({ value: d2.length ? d2 : null, e: b2 });
      }
      isNotMultipleParams(a) && (a.onChange({ value: c2, e: b2 }), U(false)), v || W("");
    }
  }, _ = function(b2) {
    var c2 = b2.e, d2 = b2.items;
    if (isMultipleParams(a)) {
      var e3 = r2 ? d2.filter(function(a2) {
        return !r2(a2);
      }) : d2, f2 = [], g2 = [];
      B.forEach(function(a2) {
        e3.find(function(b3) {
          return j(a2) === j(b3);
        }) ? f2.push(a2) : g2.push(a2);
      }), f2.length === e3.length ? a.onChange({ value: g2, e: c2 }) : a.onChange({ e: c2, value: [].concat(g2, _toConsumableArray(e3)) });
    }
  }, aa = function(b2, c2) {
    a.onCreate && a.onCreate({ e: b2, label: c2 }), U(false), v || W("");
  }, ba = function(b2) {
    if (v || W(""), isMultipleParams(a)) {
      var c2 = null === B || void 0 === B ? void 0 : B.filter(function(a2) {
        return null === r2 || void 0 === r2 ? void 0 : r2(a2);
      });
      a.onChange({ value: c2 && 0 < c2.length ? c2 : null, e: b2 });
    }
    isNotMultipleParams(a) && a.onChange({ value: null, e: b2 });
  }, ca = function(a2, b2) {
    b2.preventDefault(), f || U(true), Y(function(a3) {
      return a3 - 1;
    }, true);
  }, da = function(a2, b2) {
    b2.preventDefault(), f || U(true), Y(function(a3) {
      return a3 + 1;
    }, true);
  }, ea = useKeys({ ArrowUp: ca, ArrowDown: da, PageUp: ca, PageDown: da, Home: ca, End: da, Enter: function Enter(a2, b2) {
    if (G) {
      (F || O[H]) && b2.preventDefault();
      var c2 = function(a3) {
        var b3, c3 = 0, d3 = _createForOfIteratorHelper(Q);
        try {
          for (d3.s(); !(b3 = d3.n()).done; ) {
            var e4 = b3.value;
            if (isOptionForCreate(e4))
              return c3++, [void 0, e4];
            if (e4.items.length + c3 > a3)
              return [e4, e4.items[a3 - c3]];
            c3 += e4.items.length;
          }
        } catch (a4) {
          d3.e(a4);
        } finally {
          d3.f();
        }
        return [void 0, void 0];
      }, d2 = c2(H), e3 = _slicedToArray(d2, 2), f2 = e3[0], g2 = e3[1];
      if (isOptionForCreate(g2))
        return void aa(b2, g2.label);
      if (isOptionForSelectAll(g2)) {
        var h2;
        return void _({ e: b2, items: null !== (h2 = null === f2 || void 0 === f2 ? void 0 : f2.items.filter(function(a3) {
          return !isOptionForSelectAll(a3);
        })) && void 0 !== h2 ? h2 : [] });
      }
      g2 && $(b2, g2);
    }
  }, Escape: function Escape() {
    U(false);
  }, Tab: function Tab() {
    U(false);
  }, Backspace: function Backspace(a2, b2) {
    F || (h ? Z(b2, B[B.length - 1]) : ba(b2));
  } });
  useClickOutside({ isActive: G, ignoreClicksInsideRefs: [c, d], handler: function handler() {
    U(false);
  } }), import_react3.default.useEffect(function() {
    f && U(false);
  }, [f]), import_react3.default.useEffect(function() {
    var a2 = T();
    Y(a2, true);
  }, [Y]), import_react3.default.useEffect(function() {
    0 < O.length && J && scrollToIndex(H, c);
  }, [H]);
  return (0, import_react3.useEffect)(function() {
    W(u);
  }, [u]), { isOpen: G, isFocused: z, highlightedIndex: H, visibleItems: Q, highlightIndex: Y, getOptionProps: function getOptionProps(a2) {
    var b2 = a2.index, c2 = a2.item;
    if (isOptionForCreate(c2))
      return { onClick: function onClick(a3) {
        aa(a3, c2.label);
      }, onMouseEnter: function onMouseEnter() {
        Y(b2, false);
      }, active: false, hovered: b2 === H, key: "__optionForCreate" };
    if (isOptionForSelectAll(c2)) {
      var f2 = function() {
        var a3, b3 = _createForOfIteratorHelper(Q);
        try {
          for (b3.s(); !(a3 = b3.n()).done; ) {
            var e3 = a3.value;
            if (isOptionForCreate(e3))
              break;
            if (e3.key === c2.groupKey) {
              var d3;
              return null !== (d3 = null === e3 || void 0 === e3 ? void 0 : e3.items.filter(function(a4) {
                return !isOptionForSelectAll(a4);
              })) && void 0 !== d3 ? d3 : [];
            }
          }
        } catch (a4) {
          b3.e(a4);
        } finally {
          b3.f();
        }
        return [];
      };
      return { onClick: function onClick(a3) {
        _({ e: a3, items: f2() });
      }, onMouseEnter: function onMouseEnter() {
        Y(b2, false);
      }, active: false, hovered: b2 === H, key: "__optionForSelectAll" };
    }
    var d2 = j(c2);
    return { onClick: function onClick(a3) {
      $(a3, c2);
    }, onMouseEnter: function onMouseEnter() {
      Y(b2, false);
    }, active: !!B.find(function(a3) {
      return j(a3) === d2;
    }), hovered: b2 === H, key: d2 };
  }, handleInputFocus: function handleInputFocus(a2) {
    f || (!z && A(true), "function" == typeof s && s(a2));
  }, handleInputBlur: function handleInputBlur(a2) {
    if (G) {
      var b2;
      return void (null === (b2 = w.current) || void 0 === b2 ? void 0 : b2.focus());
    }
    z && A(false), "function" == typeof t2 && t2(a2);
  }, handleToggleDropdown: function handleToggleDropdown() {
    if (G)
      U(false), A(false);
    else {
      var a2;
      U(true), A(true), null === (a2 = w.current) || void 0 === a2 ? void 0 : a2.focus();
    }
  }, handleInputClick: function handleInputClick() {
    if (f || U(!G), h) {
      var a2;
      null === (a2 = w.current) || void 0 === a2 ? void 0 : a2.focus();
    }
  }, inputRef: w, getKeyProps: ea, handleInputChange: function handleInputChange(a2) {
    f || !h && 0 < B.length || (W(a2.target.value), U(true));
  }, searchValue: F, clearValue: ba, getHandleRemoveValue: function getHandleRemoveValue(a2) {
    return function(b2) {
      return Z(b2, a2);
    };
  }, notFound: R, hasItems: S };
}

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/cnSelect.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/SelectComponents/Select.css";
var COMPONENT_NAME = "Select";
var cnSelect = cn("Select");

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/helpers.js
var defaultlabelForNotFound = "Не найдено";
var defaultlabelForCreate = "";
var defaultLabelForEmptyItems = "Список пуст";
var getInputWidth = function(a, b) {
  if (!a.current || !b.current)
    return 20;
  var c = b.current.offsetWidth + 20, d = a.current ? a.current.offsetWidth - 15 : 2, e2 = c > d ? d : c;
  return e2;
};

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/types.js
var propSize = ["m", "xs", "s", "l"];
var defaultPropSize = propSize[0];
var propForm = ["default", "defaultClear", "defaultBrick", "brick", "brickDefault", "brickClear", "brickRound", "round", "roundClear", "roundBrick", "clearRound", "clearDefault", "clearBrick", "clearClear"];
var defaultPropForm = propForm[0];
var propView = ["default", "clear"];
var defaultPropView = propView[0];

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectContainer/SelectContainer.js
var import_react4 = __toESM(require_react());
var _excluded = ["size", "form", "view", "className", "disabled", "required", "children", "status", "focused", "id", "multiple", "type", "labelPosition", "label", "labelIcon", "caption"];
var SelectContainer = (0, import_react4.forwardRef)(function(a, b) {
  var c = a.size, d = void 0 === c ? defaultPropSize : c, e2 = a.form, f = void 0 === e2 ? defaultPropForm : e2, g = a.view, h = void 0 === g ? defaultPropView : g, i2 = a.className, j = a.disabled, k = a.required, l = a.children, m = a.status, n2 = a.focused, o = a.id, p = a.multiple, q = a.type, r2 = void 0 === q ? "select" : q, s = a.labelPosition, t2 = void 0 === s ? "top" : s, u = a.label, v = a.labelIcon, w = a.caption, x = _objectWithoutProperties(a, _excluded);
  return import_react4.default.createElement("div", Object.assign({ className: cnSelect({ labelPosition: t2, size: d, view: h, type: r2 }, [i2]) }, x), u && import_react4.default.createElement(FieldLabel, { icon: v, as: "label", required: k, htmlFor: o, className: cnSelect("Label", { labelPosition: t2 }), size: d }, u), import_react4.default.createElement("div", { className: cnSelect("Body") }, import_react4.default.createElement("div", { className: cnSelect("SelectContainer", { view: h, form: f, disabled: j, focused: n2, multiple: p, status: m }), ref: b }, l), w && import_react4.default.createElement(FieldCaption, { className: cnSelect("Caption"), status: m }, w)));
});

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectItem/SelectItem.js
var import_react5 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectItem/SelectItem.css";
var _excluded2 = ["className", "label", "active", "hovered", "multiple", "size", "indent", "disabled"];
var sizeCheckboxMap = { xs: "m", s: "m", m: "l", l: "l" };
var cnSelectItem = cn("SelectItem");
var SelectItem = function(a) {
  var b = a.className, c = a.label, d = a.active, e2 = a.hovered, f = a.multiple, g = a.size, h = a.indent, i2 = a.disabled, j = _objectWithoutProperties(a, _excluded2);
  return import_react5.default.createElement(ListItem, Object.assign({}, j, { className: cnSelectItem(null, [b]), "aria-selected": d, "aria-disabled": i2, role: "option", label: c, innerOffset: h, size: g, active: e2, checked: !f && d, disabled: i2, leftSide: f && import_react5.default.createElement(Checkbox, { checked: d, disabled: i2, size: sizeCheckboxMap[g] }) }), c);
};

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectDropdown/SelectDropdown.js
var import_react10 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectDropdown/SelectDropdown.css";

// node_modules/@consta/uikit/__internal__/src/utils/fabricIndex.js
var fabricIndex = function() {
  var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : 0, b = a;
  return function() {
    return b += 1, b;
  };
};

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectCreateButton/SelectCreateButton.js
var import_react6 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectCreateButton/SelectCreateButton.css";
var _excluded3 = ["className", "labelForCreate", "inputValue", "active", "hovered", "size", "indent"];
var cnSelectCreateButton = cn("SelectCreateButton");
var SelectCreateButton = function(a) {
  var b = a.className, c = a.labelForCreate, d = a.inputValue, e2 = a.active, f = a.hovered, g = a.size, h = a.indent, i2 = _objectWithoutProperties(a, _excluded3);
  return import_react6.default.createElement(ListAddItem, Object.assign({}, i2, { className: cnSelectCreateButton(null, [b]), "aria-selected": e2, role: "option", active: f, size: g, innerOffset: h, label: import_react6.default.createElement(import_react6.default.Fragment, null, c, " «", import_react6.default.createElement("b", null, d), "»") }));
};

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectGroupLabel/SelectGroupLabel.js
var import_react7 = __toESM(require_react());
var _excluded4 = ["indent"];
var SelectGroupLabel = function(a) {
  var b = a.indent, c = _objectWithoutProperties(a, _excluded4);
  return import_react7.default.createElement(ListGroupLabel, Object.assign({}, c, { innerOffset: b }));
};

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectItemAll/SelectSelectAll.js
var import_react8 = __toESM(require_react());
var _excluded5 = ["checked", "intermediate", "size", "indent", "hovered", "countItems", "className", "total"];
var cnSelectItemAll = cn("SelectItemAll");
var textSizeMap = { xs: "s", s: "s", m: "m", l: "l" };
var SelectItemAll = function(a) {
  var b = a.checked, c = a.intermediate, d = a.size, e2 = a.indent, f = a.hovered, g = a.countItems, h = void 0 === g ? 0 : g, i2 = a.className, j = a.total, k = void 0 === j ? 0 : j, l = _objectWithoutProperties(a, _excluded5);
  return import_react8.default.createElement(ListItem, Object.assign({}, l, { className: cnSelectItemAll(null, [i2]), "aria-selected": b, role: "option", label: "Выбрать все", innerOffset: e2, size: d, active: f, rightSide: import_react8.default.createElement(Text, { size: textSizeMap[d], lineHeight: "xs", view: "ghost" }, "".concat(h, " из ").concat(k)), leftSide: import_react8.default.createElement(Checkbox, { checked: b, intermediate: c, size: sizeCheckboxMap[d] }) }), "Выбрать все");
};

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectLoader/SelectLoader.js
var import_react9 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectLoader/SelectLoader.css";
var cnSelectLoader = cn("SelectLoader");
var SelectLoader = function(a) {
  var b = a.mode, c = void 0 === b ? "empty" : b, d = a.size, e2 = void 0 === d ? defaultPropSize : d;
  return import_react9.default.createElement("div", { className: cnSelectLoader({ mode: c, size: e2 }) }, import_react9.default.createElement(Loader, { className: cnSelectLoader("Loader"), size: "s" }));
};

// node_modules/@consta/uikit/__internal__/src/components/SelectComponents/SelectDropdown/SelectDropdown.js
var _excluded6 = ["controlRef", "size", "getOptionProps", "dropdownRef", "labelForCreate", "className", "labelForNotFound", "labelForEmptyItems", "hasItems", "form", "isOpen", "offset", "renderItem", "visibleItems", "isLoading", "getGroupLabel", "notFound"];
function ownKeys3(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function(b2) {
      return Object.getOwnPropertyDescriptor(a, b2).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function _objectSpread3(a) {
  for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys3(Object(b), true).forEach(function(c2) {
      _defineProperty(a, c2, b[c2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys3(Object(b)).forEach(function(c2) {
      Object.defineProperty(a, c2, Object.getOwnPropertyDescriptor(b, c2));
    });
  return a;
}
var selectDropdownform = ["default", "brick", "round"];
var defaultSelectDropdownPropForm = selectDropdownform[0];
var cnSelectDropdown = cn("SelectDropdown");
var SelectDropdown = function(a) {
  var b = a.controlRef, c = a.size, d = a.getOptionProps, e2 = a.dropdownRef, f = a.labelForCreate, g = a.className, h = a.labelForNotFound, i2 = a.labelForEmptyItems, j = a.hasItems, k = !(void 0 !== j) || j, l = a.form, m = a.isOpen, n2 = a.offset, o = void 0 === n2 ? "none" : n2, p = a.renderItem, q = a.visibleItems, r2 = a.isLoading, s = a.getGroupLabel, t2 = a.notFound, u = _objectWithoutProperties(a, _excluded6), v = "round" === l ? "increased" : "normal", w = (0, import_react10.useRef)(null), x = (0, import_react10.useMemo)(function() {
    return 0 < q.filter(function(a2) {
      return isOptionForCreate(a2) || Array.isArray(a2.items) && 0 < a2.items.length;
    }).length;
  }, [q]), y = "none" === o ? void 0 : o;
  return import_react10.default.createElement(Transition_default, { in: m, unmountOnExit: true, nodeRef: w, timeout: animateTimeout }, function(a2) {
    var j2 = fabricIndex(-1);
    return import_react10.default.createElement(Popover, Object.assign({}, u, { anchorRef: b, direction: "downStartLeft", possibleDirections: ["downStartLeft", "upStartLeft", "downStartRight", "upStartRight"], offset: y, ref: w, role: "listbox", className: cnSelectDropdown(null, [cnListBox({ size: c, form: l, border: true, shadow: true }), cnMixPopoverAnimate({ animate: a2 }), g]), equalAnchorWidth: true }), import_react10.default.createElement("div", { className: cnSelectDropdown("List", [cnMixSpace({ pV: mapVerticalSpase[c] })]), ref: e2 }, r2 && import_react10.default.createElement(SelectLoader, { mode: x ? "blur" : "empty" }), q.map(function(a3) {
      return isOptionForCreate(a3) ? import_react10.default.createElement(SelectCreateButton, Object.assign({ size: c, labelForCreate: f, inputValue: a3.label, indent: v }, d({ index: j2(), item: a3 }))) : import_react10.default.createElement(import_react10.Fragment, { key: a3.key }, a3.group && s && import_react10.default.createElement(SelectGroupLabel, { label: s(a3.group), size: c, indent: v }), a3.items.map(function(b2, e3) {
        return isOptionForSelectAll(b2) ? import_react10.default.createElement(SelectItemAll, Object.assign({ indent: v, size: c }, d({ index: j2(), item: b2 }), { intermediate: !!(b2.checkedCount && b2.totalCount) && b2.checkedCount !== b2.totalCount, checked: b2.checkedCount === b2.totalCount, countItems: b2.checkedCount, total: b2.totalCount })) : import_react10.default.createElement(import_react10.Fragment, { key: "".concat(a3.key, "-").concat(e3) }, p(_objectSpread3({ item: b2 }, d({ index: j2(), item: b2 }))));
      }));
    }), !r2 && k && t2 && h && import_react10.default.createElement(ListItem, { size: c, label: h, innerOffset: v }, h), !r2 && !k && i2 && import_react10.default.createElement(ListItem, { size: c, label: i2, innerOffset: v }, i2)));
  });
};

export {
  useSelect,
  COMPONENT_NAME,
  cnSelect,
  defaultlabelForNotFound,
  defaultlabelForCreate,
  defaultLabelForEmptyItems,
  getInputWidth,
  defaultPropSize,
  defaultPropForm,
  defaultPropView,
  SelectContainer,
  SelectItem,
  SelectDropdown
};
//# sourceMappingURL=chunk-DEZMWBV3.js.map
