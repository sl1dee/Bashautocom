import {
  useComponentSize
} from "./chunk-OHQSEJAW.js";
import {
  Theme,
  useTheme
} from "./chunk-J6UMDR5D.js";
import {
  createIcon
} from "./chunk-JVWFMWRY.js";
import {
  require_react_dom
} from "./chunk-UPT3JXAF.js";
import {
  useForkRef
} from "./chunk-Y5I2RU34.js";
import {
  _toConsumableArray,
  isNumber,
  isString
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

// node_modules/@consta/icons/__internal__/src/icons/IconSelect/IconSelect_size_m.js
var React = __toESM(require_react());
var IconSelectSizeM = (a) => React.createElement("svg", Object.assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a), React.createElement("path", { d: "m6.5 9 5.5 6 5.5-6h-11z" }));
var IconSelect_size_m_default = IconSelectSizeM;

// node_modules/@consta/icons/__internal__/src/icons/IconSelect/IconSelect_size_s.js
var React2 = __toESM(require_react());
var IconSelectSizeS = (a) => React2.createElement("svg", Object.assign({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, a), React2.createElement("path", { d: "M3.5 5 8 10l4.5-5h-9z" }));
var IconSelect_size_s_default = IconSelectSizeS;

// node_modules/@consta/icons/__internal__/src/icons/IconSelect/IconSelect_size_xs.js
var React3 = __toESM(require_react());
var IconSelectSizeXs = (a) => React3.createElement("svg", Object.assign({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, a), React3.createElement("path", { d: "M6 8.5 10 4H2l4 4.5z" }));
var IconSelect_size_xs_default = IconSelectSizeXs;

// node_modules/@consta/icons/__internal__/src/icons/IconSelect/IconSelect.js
var IconSelect = createIcon({ l: IconSelect_size_m_default, m: IconSelect_size_m_default, s: IconSelect_size_s_default, xs: IconSelect_size_xs_default, name: "IconSelect", renderType: { l: "use", m: "use", s: "use", xs: "use" }, color: "mono" });

// node_modules/@consta/uikit/__internal__/src/hooks/useMutableRef/useMutableRef.js
var import_react = __toESM(require_react());
var useMutableRef = function(a) {
  var b = (0, import_react.useRef)(a);
  return (0, import_react.useEffect)(function() {
    b.current = a;
  }, [a]), b;
};

// node_modules/@consta/uikit/__internal__/src/hooks/useClickOutside/useClickOutside.js
var import_react2 = __toESM(require_react());
function useClickOutside(a) {
  var b = a.isActive, c = a.ignoreClicksInsideRefs, d = a.handler, e = useMutableRef(d), f = useMutableRef(c), g = useMutableRef(b);
  (0, import_react2.useEffect)(function() {
    var a2 = function(a3) {
      var b2, c2;
      if (g.current) {
        var d2 = a3.target, h = null === (b2 = f.current) || void 0 === b2 ? void 0 : b2.every(function(a4) {
          var b3;
          return !(null !== (b3 = a4.current) && void 0 !== b3 && b3.contains(d2));
        });
        h && (null === (c2 = e.current) || void 0 === c2 ? void 0 : c2.call(e, a3));
      }
    };
    return document.addEventListener("mousedown", a2), function() {
      document.removeEventListener("mousedown", a2);
    };
  }, []);
}

// node_modules/@consta/uikit/__internal__/src/mixs/MixSpace/MixSpace.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/mixs/MixSpace/MixSpace.css";
var cnSpace = cn("MixSpace");
var cnMixSpace = function(a) {
  var b = a.p, c = a.m, d = a.pV, e = a.pH, f = a.mV, g = a.mH, h = a.mT, i = a.mL, j = a.mR, k = a.mB, l = a.pT, m = a.pL, n = a.pR, o = a.pB;
  return cnSpace({ pT: l || d || b, pL: m || e || b, pR: n || e || b, pB: o || d || b, mT: h || f || c, mL: i || g || c, mR: j || g || c, mB: k || f || c });
};

// node_modules/@consta/uikit/__internal__/src/components/Popover/Popover.js
var import_react6 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Popover/Popover.css";

// node_modules/@consta/uikit/__internal__/src/components/PortalWithTheme/PortalWithTheme.js
var import_react4 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@consta/uikit/__internal__/src/components/PortalWithTheme/PortalWithThemeContext/PortalWithThemeContext.js
var import_react3 = __toESM(require_react());
var Context = (0, import_react3.createContext)({ refs: [], zIndex: void 0 });
function usePortalContext() {
  return (0, import_react3.useContext)(Context);
}
var PortalWithThemeProvider = function(a) {
  var b = (0, import_react3.useState)([]), c = _slicedToArray(b, 2), d = c[0], e = c[1], f = usePortalContext(), g = f.addRefs;
  return (0, import_react3.useEffect)(function() {
    g && g(d);
  }, [d]), (0, import_react3.useEffect)(function() {
    return function() {
      return e([]);
    };
  }, []), import_react3.default.createElement(Context.Provider, { value: { refs: d, addRefs: function addRefs(a2) {
    if (0 < a2.length) {
      var b2 = [].concat(_toConsumableArray(d.filter(function(a3) {
        return a3.current;
      })), _toConsumableArray(a2.filter(function(a3) {
        return !!a3.current && !d.find(function(b3) {
          return b3.current === a3.current;
        });
      })));
      e(b2);
    }
  }, zIndex: a.zIndex } }, a.children);
};

// node_modules/@consta/uikit/__internal__/src/components/PortalWithTheme/PortalWithTheme.js
var _excluded = ["children", "container", "style"];
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
var getZIndex = function(a, b) {
  return "number" == typeof b ? b : a ? a + 1 : void 0;
};
var PortalWithTheme = import_react4.default.forwardRef(function(a, b) {
  var c = a.children, d = a.container, e = void 0 === d ? window.document.body : d, f = a.style, g = _objectWithoutProperties(a, _excluded), h = usePortalContext(), i = h.addRefs, j = h.zIndex, k = (0, import_react4.useRef)(null), l = getZIndex(j, null === f || void 0 === f ? void 0 : f.zIndex), m = _objectSpread(_objectSpread({}, f), {}, { zIndex: l });
  return (0, import_react4.useEffect)(function() {
    i && i([k]);
  }, [k]), import_react_dom.default.createPortal(import_react4.default.createElement(PortalWithThemeProvider, { zIndex: l }, import_react4.default.createElement(Theme, Object.assign({ ref: useForkRef([k, b]), style: m }, g), c)), e);
});

// node_modules/@consta/uikit/__internal__/src/utils/isRenderProp.js
var isRenderProp = function(a) {
  return "function" == typeof a;
};

// node_modules/@consta/uikit/__internal__/src/components/Popover/helpers.js
var getPosition = function(a, b) {
  return { x: Math.round(a), y: Math.round(b) };
};
var getPositionsByDirection = function(a) {
  var b = a.contentSize, c = a.anchorSize, d = a.position, e = d.x, f = d.y, g = a.arrowOffset, h = void 0 === g ? 0 : g, i = a.offset, j = void 0 === i ? 0 : i, k = b.width, l = b.height, m = c.width, n = c.height, o = { x: e + m / 2, y: f + n / 2 }, p = e + m + j, q = e - k - j, r = { right: o.x - h, center: o.x - k / 2, left: o.x - k + h }, s = f + n + j, t = f - l - j, u = { up: o.y - l + h, center: o.y - l / 2, down: o.y - h }, v = e, w = e - k + m, x = f, y = f - l + n;
  return { upLeft: getPosition(r.left, t), upCenter: getPosition(r.center, t), upRight: getPosition(r.right, t), downLeft: getPosition(r.left, s), downCenter: getPosition(r.center, s), downRight: getPosition(r.right, s), rightUp: getPosition(p, u.up), rightCenter: getPosition(p, u.center), rightDown: getPosition(p, u.down), leftUp: getPosition(q, u.up), leftCenter: getPosition(q, u.center), leftDown: getPosition(q, u.down), downStartLeft: getPosition(v, s), downStartRight: getPosition(w, s), upStartLeft: getPosition(v, t), upStartRight: getPosition(w, t), leftStartUp: getPosition(q, x), leftStartDown: getPosition(q, y), rightStartUp: getPosition(p, x), rightStartDown: getPosition(p, y) };
};
var getComputedPositionAndDirection = function(a) {
  var b = a.position, c = a.contentSize, d = a.viewportSize, e = a.anchorSize, f = void 0 === e ? { width: 0, height: 0 } : e, g = a.arrowOffset, h = a.direction, i = a.possibleDirections, j = a.bannedDirections, k = a.spareDirection, l = a.offset, m = void 0 === l ? 0 : l;
  if (!b)
    return { position: b, direction: h };
  var n = getPositionsByDirection({ contentSize: c, anchorSize: f, position: b, arrowOffset: g, offset: m }), o = [h].concat(_toConsumableArray(i)).filter(function(a2) {
    return !j.includes(a2);
  }).find(function(a2) {
    var b2 = n[a2], e2 = c.width, f2 = c.height, g2 = b2.y + f2 <= d.height, h2 = 0 <= b2.y, i2 = 0 <= b2.x, j2 = b2.x + e2 <= d.width;
    return h2 && g2 && i2 && j2;
  }) || k;
  return { direction: o, position: n[o] };
};

// node_modules/@consta/uikit/__internal__/src/components/Popover/usePopoverReposition.js
var import_react5 = __toESM(require_react());
var getAllParents = function(a) {
  for (var b = [], c = a; c; )
    c !== a && b.push(c), c = c.parentNode;
  return b;
};
var usePopoverReposition = function(a) {
  var b = a.isActive, c = a.scrollAnchorRef, d = a.onRequestReposition, e = useMutableRef(d);
  (0, import_react5.useEffect)(function() {
    var a2 = function() {
      return e.current();
    };
    if (b) {
      window.addEventListener("resize", a2);
      var d2 = null !== c && void 0 !== c && c.current ? getAllParents(c.current) : [];
      return d2.forEach(function(b2) {
        return b2.addEventListener("scroll", a2);
      }), function() {
        window.removeEventListener("resize", a2), d2.forEach(function(b2) {
          return b2.removeEventListener("scroll", a2);
        });
      };
    }
  }, [c]);
};

// node_modules/@consta/uikit/__internal__/src/components/Popover/Popover.js
var _excluded2 = ["children", "direction", "offset", "arrowOffset", "possibleDirections", "isInteractive", "onClickOutside", "spareDirection", "style", "className", "position", "anchorRef", "equalAnchorWidth", "onSetDirection"];
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
var directionsStartCenter = ["downCenter", "upCenter", "downRight", "downLeft", "upRight", "upLeft", "leftUp", "leftCenter", "leftDown", "rightUp", "rightCenter", "rightDown"];
var directionsStartEdge = ["downStartLeft", "upStartLeft", "downStartRight", "upStartRight", "leftStartUp", "leftStartDown", "rightStartUp", "rightStartDown"];
var directions = [].concat(directionsStartCenter, directionsStartEdge);
var getOffset = function(a, b) {
  if (isNumber(b))
    return b;
  if (isString(b) && a.current) {
    var g = getComputedStyle(a.current).getPropertyValue("--space-".concat(b));
    if (g && /px$/.test(g))
      return +g.slice(0, g.length - 2);
    if (g && /rem$/.test(g)) {
      var c = parseFloat(getComputedStyle(document.documentElement).fontSize), d = +g.slice(0, g.length - 3);
      return c * d;
    }
    if (g && /em$/.test(g)) {
      var e = parseFloat(getComputedStyle(a.current).fontSize), f = +g.slice(0, g.length - 2);
      return e * f;
    }
    return 0;
  }
  return 0;
};
var ContextConsumer = function(a) {
  var b = a.onClickOutside, c = a.children, d = a.ignoreClicksInsideRefs, e = usePortalContext(), f = e.refs;
  return useClickOutside({ isActive: !!b, ignoreClicksInsideRefs: [].concat(_toConsumableArray(d || []), _toConsumableArray(f || [])), handler: b }), c;
};
var cnPopover = cn("Popover");
var Popover = (0, import_react6.forwardRef)(function(a, b) {
  var c, d = a.children, e = a.direction, f = void 0 === e ? "upCenter" : e, g = a.offset, h = void 0 === g ? 0 : g, i = a.arrowOffset, j = a.possibleDirections, k = void 0 === j ? directions : j, l = a.isInteractive, m = a.onClickOutside, n = a.spareDirection, o = void 0 === n ? "downStartLeft" : n, p = a.style, q = a.className, r = a.position, s = a.anchorRef, t = a.equalAnchorWidth, u = a.onSetDirection, v = _objectWithoutProperties(a, _excluded2), w = import_react6.default.useRef(null), x = useTheme(), y = x.theme, z = import_react6.default.useState(), A = _slicedToArray(z, 2), B = A[0], C = A[1], D = useComponentSize(w), E = D.width, F = D.height, G = useComponentSize(s || { current: null }), H = import_react6.default.useRef(null), I = import_react6.default.useState([]), J = _slicedToArray(I, 2), K = J[0], L = J[1], M = function() {
    L(function(a2) {
      return a2.length ? [] : a2;
    }), H.current = null;
  }, N = function() {
    var a2;
    return C(null === s || void 0 === s || null === (a2 = s.current) || void 0 === a2 ? void 0 : a2.getBoundingClientRect());
  }, O = (0, import_react6.useMemo)(function() {
    return getOffset(w, h);
  }, [h, !!w.current]), P = getComputedPositionAndDirection({ contentSize: { width: E, height: F }, viewportSize: { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight }, arrowOffset: i, offset: O, direction: f, possibleDirections: k, bannedDirections: K, position: B ? { x: B.left, y: B.top } : r, anchorSize: G, spareDirection: o }), Q = P.position, R = P.direction;
  (0, import_react6.useEffect)(function() {
    return null === u || void 0 === u ? void 0 : u(R);
  }, [R]), (0, import_react6.useEffect)(N, [G]), usePopoverReposition({ isActive: true, scrollAnchorRef: s || { current: null }, onRequestReposition: function onRequestReposition() {
    M(), N();
  } }), (0, import_react6.useLayoutEffect)(function() {
    H.current !== R && (H.current && !K.includes(H.current) && !K.includes(R) && R !== o && L(function(a2) {
      return H.current ? [].concat(_toConsumableArray(a2), [H.current]) : a2;
    }), H.current = R);
  }, [R]), (0, import_react6.useLayoutEffect)(M, [a]);
  var S = !Q || !F || !E;
  return import_react6.default.createElement(PortalWithTheme, Object.assign({}, v, { preset: y, className: cnPopover({ direction: R, notVisible: S }, [q]), container: window.document.body, ref: useForkRef([w, b]), style: _objectSpread2(_objectSpread2({}, p), S ? {} : (c = {}, _defineProperty(c, "--popover-top", "".concat(((null === Q || void 0 === Q ? void 0 : Q.y) || 0) + window.scrollY, "px")), _defineProperty(c, "--popover-left", "".concat(((null === Q || void 0 === Q ? void 0 : Q.x) || 0) + window.scrollX, "px")), _defineProperty(c, "--popover-width", t ? "".concat(G.width, "px") : void 0), _defineProperty(c, "--popover-pointer-events", !(void 0 !== l) || l ? void 0 : "none"), _defineProperty(c, "--popover-visibility", Q ? void 0 : "hidden"), c)) }), import_react6.default.createElement(ContextConsumer, { onClickOutside: m, ignoreClicksInsideRefs: [w, s || { current: null }] }, isRenderProp(d) ? d(R) : d));
});

export {
  useMutableRef,
  useClickOutside,
  cnMixSpace,
  Popover,
  IconSelect
};
//# sourceMappingURL=chunk-FTIWWGIB.js.map
