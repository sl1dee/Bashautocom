import {
  useRefs
} from "./chunk-VARVPBVH.js";
import {
  List,
  ListDivider,
  ListItem,
  Loader,
  animateTimeout,
  cnListBox,
  cnMixPopoverAnimate,
  defaultListPropForm,
  mapIconSize,
  mapVerticalSpase,
  useDebounce
} from "./chunk-LWVZSOY4.js";
import {
  TransitionGroup_default,
  Transition_default
} from "./chunk-L2ANZMSN.js";
import "./chunk-SVBJZ4BZ.js";
import "./chunk-RER3UHKH.js";
import {
  IconSelect,
  Popover,
  cnMixSpace,
  useClickOutside,
  useMutableRef
} from "./chunk-FTIWWGIB.js";
import {
  getElementSize,
  useComponentSize,
  useResizeObserved
} from "./chunk-OHQSEJAW.js";
import "./chunk-PQEZCWQY.js";
import {
  Text,
  forwardRefWithAs
} from "./chunk-GF7E4B5O.js";
import "./chunk-J6UMDR5D.js";
import {
  createIcon
} from "./chunk-JVWFMWRY.js";
import "./chunk-UPT3JXAF.js";
import {
  useFlag,
  useForkRef,
  usePropsHandler
} from "./chunk-Y5I2RU34.js";
import {
  getByMap
} from "./chunk-T4V7NT3B.js";
import {
  cnMixFocus
} from "./chunk-3NWFPCCC.js";
import {
  _toConsumableArray,
  isNotNil
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

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/Breadcrumbs.js
var import_react14 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/Breadcrumbs.css";

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsFitModeDropdown/BreadcrumbsFitModeDropdown.js
var import_react12 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsFitModeDropdown/BreadcrumbsFitModeDropdown.css";

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsMore/BreadcrumbsMore.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsMore/BreadcrumbsMore.css";

// node_modules/@consta/icons/__internal__/src/icons/IconMeatball/IconMeatball_size_m.js
var React = __toESM(require_react());
var IconMeatballSizeM = (a) => React.createElement("svg", Object.assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a), React.createElement("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }));
var IconMeatball_size_m_default = IconMeatballSizeM;

// node_modules/@consta/icons/__internal__/src/icons/IconMeatball/IconMeatball_size_s.js
var React2 = __toESM(require_react());
var IconMeatballSizeS = (a) => React2.createElement("svg", Object.assign({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, a), React2.createElement("path", { d: "M3 6.5c-.83 0-1.5.67-1.5 1.5S2.17 9.5 3 9.5 4.5 8.83 4.5 8 3.83 6.5 3 6.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5S7.17 9.5 8 9.5 9.5 8.83 9.5 8 8.83 6.5 8 6.5z" }));
var IconMeatball_size_s_default = IconMeatballSizeS;

// node_modules/@consta/icons/__internal__/src/icons/IconMeatball/IconMeatball_size_xs.js
var React3 = __toESM(require_react());
var IconMeatballSizeXs = (a) => React3.createElement("svg", Object.assign({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, a), React3.createElement("path", { d: "M10 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" }));
var IconMeatball_size_xs_default = IconMeatballSizeXs;

// node_modules/@consta/icons/__internal__/src/icons/IconMeatball/IconMeatball.js
var IconMeatball = createIcon({ l: IconMeatball_size_m_default, m: IconMeatball_size_m_default, s: IconMeatball_size_s_default, xs: IconMeatball_size_xs_default, name: "IconMeatball", renderType: { l: "use", m: "use", s: "use", xs: "use" }, color: "mono" });

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsMore/BreadcrumbsMore.js
var import_react9 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/Button/Button.js
var import_react = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Button/Button.css";
var _excluded = ["size", "view", "width", "form", "iconLeft", "iconRight", "label", "className", "onClick", "disabled", "loading", "tabIndex", "as", "onlyIcon", "iconSize"];
var buttonPropSize = ["m", "xs", "s", "l"];
var buttonPropSizeDefault = buttonPropSize[0];
var buttonPropView = ["primary", "clear", "ghost", "secondary"];
var buttonPropViewDefault = buttonPropView[0];
var buttonPropWidth = ["default", "full"];
var buttonPropWidthDefault = buttonPropWidth[0];
var buttonPropForm = ["default", "brick", "round", "brickRound", "roundBrick", "brickDefault", "defaultBrick"];
var mapStableForm = { default: "default", defaultClear: "defaultBrick", defaultBrick: "defaultBrick", brick: "brick", brickDefault: "brickDefault", brickClear: "brick", brickRound: "brickRound", round: "round", roundClear: "roundBrick", roundBrick: "roundBrick", clearRound: "brickRound", clearDefault: "brickDefault", clearBrick: "brick", clearClear: "brick" };
var buttonPropFormDefault = buttonPropForm[0];
var COMPONENT_NAME = "Button";
var cnButton = cn("Button");
var sizeMap = { xs: "xs", s: "xs", m: "s", l: "m" };
var sizeMapOnlyIcon = { xs: "xs", s: "s", m: "m", l: "m" };
var Button = forwardRefWithAs(function(a, b) {
  var c = (0, import_react.useRef)(null), d = usePropsHandler(COMPONENT_NAME, a, c), e = d.size, f = void 0 === e ? buttonPropSizeDefault : e, g = d.view, h = void 0 === g ? buttonPropViewDefault : g, i = d.width, j = void 0 === i ? buttonPropWidthDefault : i, k = d.form, l = void 0 === k ? buttonPropFormDefault : k, m = d.iconLeft, n = d.iconRight, o = d.label, p = d.className, q = d.onClick, r = d.disabled, s = d.loading, t = d.tabIndex, u = d.as, v = void 0 === u ? "button" : u, w = d.onlyIcon, x = d.iconSize, y = _objectWithoutProperties(d, _excluded), z = (!o || w) && (m || n), A = m, B = n, C = a.title || !!z && o || void 0, D = z ? getByMap(sizeMapOnlyIcon, f, x) : getByMap(sizeMap, f, x);
  return import_react.default.createElement(v, Object.assign({}, y, { onClick: q ? function handleClick(a2) {
    r || s || !q || q(a2);
  } : void 0, className: cnButton({ size: f, view: h, width: j, form: mapStableForm[l], disabled: r, loading: s, withIcon: !!m || !!n, onlyIcon: !!z }, [r || s ? void 0 : cnMixFocus(), p]), tabIndex: t, title: C, ref: useForkRef([b, c]) }), z && import_react.default.createElement(z, { className: cnButton("Icon"), size: D }), !z && ((A || B) && o ? import_react.default.createElement(import_react.default.Fragment, null, A && import_react.default.createElement(A, { className: cnButton("Icon", { position: "left" }), size: D }), import_react.default.createElement("span", { className: cnButton("Label") }, o), B && import_react.default.createElement(B, { className: cnButton("Icon", { position: "right" }), size: D })) : o), s && import_react.default.createElement(Loader, { className: cnButton("Loader"), size: "s" }));
});

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenu.js
var import_react7 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevels/ContextMenuLevels.js
var import_react5 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevel/ContextMenuLevel.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevel/ContextMenuLevel.css";

// node_modules/@consta/icons/__internal__/src/icons/IconArrowLeft/IconArrowLeft_size_m.js
var React5 = __toESM(require_react());
var IconArrowLeftSizeM = (a) => React5.createElement("svg", Object.assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a), React5.createElement("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" }));
var IconArrowLeft_size_m_default = IconArrowLeftSizeM;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowLeft/IconArrowLeft_size_s.js
var React6 = __toESM(require_react());
var IconArrowLeftSizeS = (a) => React6.createElement("svg", Object.assign({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, a), React6.createElement("path", { d: "m6.407 8 4.297-4.297L9.29 2.289 3.579 8l5.711 5.711 1.414-1.414L6.407 8z", fillRule: "evenodd", clipRule: "evenodd" }));
var IconArrowLeft_size_s_default = IconArrowLeftSizeS;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowLeft/IconArrowLeft_size_xs.js
var React7 = __toESM(require_react());
var IconArrowLeftSizeXs = (a) => React7.createElement("svg", Object.assign({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, a), React7.createElement("path", { d: "m3.293 6 3.975-3.975.707.707L4.707 6l3.268 3.268-.707.707L3.293 6z", fillRule: "evenodd", clipRule: "evenodd" }));
var IconArrowLeft_size_xs_default = IconArrowLeftSizeXs;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowLeft/IconArrowLeft.js
var IconArrowLeft = createIcon({ l: IconArrowLeft_size_m_default, m: IconArrowLeft_size_m_default, s: IconArrowLeft_size_s_default, xs: IconArrowLeft_size_xs_default, name: "IconArrowLeft", renderType: { l: "use", m: "use", s: "use", xs: "use" }, color: "mono" });

// node_modules/@consta/icons/__internal__/src/icons/IconArrowRight/IconArrowRight_size_m.js
var React8 = __toESM(require_react());
var IconArrowRightSizeM = (a) => React8.createElement("svg", Object.assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a), React8.createElement("path", { d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" }));
var IconArrowRight_size_m_default = IconArrowRightSizeM;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowRight/IconArrowRight_size_s.js
var React9 = __toESM(require_react());
var IconArrowRightSizeS = (a) => React9.createElement("svg", Object.assign({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, a), React9.createElement("path", { d: "M9.594 8 5.297 3.703l1.414-1.414L12.423 8 6.71 13.711l-1.414-1.414L9.594 8z", fillRule: "evenodd", clipRule: "evenodd" }));
var IconArrowRight_size_s_default = IconArrowRightSizeS;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowRight/IconArrowRight_size_xs.js
var React10 = __toESM(require_react());
var IconArrowRightSizeXs = (a) => React10.createElement("svg", Object.assign({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, a), React10.createElement("path", { d: "M8.975 6 5 9.975l-.707-.707L7.56 6 4.293 2.732 5 2.025 8.975 6z", fillRule: "evenodd", clipRule: "evenodd" }));
var IconArrowRight_size_xs_default = IconArrowRightSizeXs;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowRight/IconArrowRight.js
var IconArrowRight = createIcon({ l: IconArrowRight_size_m_default, m: IconArrowRight_size_m_default, s: IconArrowRight_size_s_default, xs: IconArrowRight_size_xs_default, name: "IconArrowRight", renderType: { l: "use", m: "use", s: "use", xs: "use" }, color: "mono" });

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevel/ContextMenuLevel.js
var import_react3 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevelWrapper/ContextMenuLevelWrapper.js
var import_react2 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevelWrapper/ContextMenuLevelWrapper.css";

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/types.js
var contextMenuSizes = ["m", "xs", "s", "l"];
var contextMenuDefaultSize = contextMenuSizes[0];
var contextMenuStatus = ["alert", "success", "warning"];
var contextMenuDefaultStatus = contextMenuStatus[0];
var defaultContextMenuForm = defaultListPropForm;
var contextMenuPropSubMenuDirections = ["rightStartUp", "rightStartDown", "leftStartUp", "leftStartDown"];
var contextMenuPropDefaultSubMenuDirection = contextMenuPropSubMenuDirections[0];

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevelWrapper/ContextMenuLevelWrapper.js
var _excluded2 = ["isMobile", "children", "className", "size"];
var cnContextMenuLevelWrapper = cn("ContextMenuLevelWrapper");
var ContextMenuLevelWrapper = (0, import_react2.forwardRef)(function(a, b) {
  var c = a.isMobile, d = a.children, e = a.className, f = a.size, g = void 0 === f ? contextMenuDefaultSize : f, h = _objectWithoutProperties(a, _excluded2);
  return c ? import_react2.default.createElement("div", { className: e }, import_react2.default.createElement("div", { className: cnContextMenuLevelWrapper("Mobile", [cnMixSpace({ pV: mapVerticalSpase[g] })]), ref: b }, d)) : import_react2.default.createElement(Popover, Object.assign({}, h, { ref: b, className: e }), d);
});

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevel/ContextMenuLevel.js
var _excluded3 = ["size", "items", "groups", "className", "form", "animate", "levelDepth", "activeItem", "addLevel", "deleteLevel", "setHoveredParenLevel", "hoveredParenLevel", "sortGroup", "onItemClick", "isOpen", "parent", "isMobile", "direction", "possibleDirections", "offset", "onSetDirection", "spareDirection", "anchorRef", "getItemLabel", "getItemRightSide", "getItemLeftSide", "getItemSubMenu", "getItemStatus", "getItemDisabled", "getItemKey", "getItemOnClick", "getItemAs", "getItemAttributes", "getItemGroupId", "getItemLeftIcon", "getItemRightIcon", "getGroupLabel", "getGroupId"];
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
var cnContextMenuLevel = cn("ContextMenuLevel");
var timers = [];
function clearTimers() {
  var a, b = _createForOfIteratorHelper(timers);
  try {
    for (b.s(); !(a = b.n()).done; ) {
      var c = a.value;
      clearTimeout(c);
    }
  } catch (a2) {
    b.e(a2);
  } finally {
    b.f();
  }
  timers = [];
}
var closeDelay = 300;
var ContextMenuLevelRender = function(a, b) {
  var c = a.size, d = void 0 === c ? contextMenuDefaultSize : c, e = a.items, f = a.groups, g = a.className, h = a.form, i = void 0 === h ? "default" : h, j = a.animate, k = a.levelDepth, l = a.activeItem, m = a.addLevel, n = a.deleteLevel, o = a.setHoveredParenLevel, p = a.hoveredParenLevel, q = a.sortGroup, r = a.onItemClick, s = a.isOpen, t = a.parent, u = a.isMobile, v = a.direction, w = a.possibleDirections, x = a.offset, y = a.onSetDirection, z = a.spareDirection, A = a.anchorRef, B = a.getItemLabel, C = a.getItemRightSide, D = a.getItemLeftSide, E = a.getItemSubMenu, F = a.getItemStatus, G = a.getItemDisabled, H = a.getItemKey, I = a.getItemOnClick, J = a.getItemAs, K = a.getItemAttributes, L = a.getItemGroupId, M = a.getItemLeftIcon, N = a.getItemRightIcon, O = a.getGroupLabel, P = a.getGroupId, Q = _objectWithoutProperties(a, _excluded3), R = useFlag(false), S = _slicedToArray(R, 2), T = S[0], U = S[1], V = function(a2) {
    return (H(a2) || B(a2)).toString();
  }, W = useRefs(e.map(function(a2) {
    return V(a2);
  }), [f]);
  (0, import_react3.useEffect)(function() {
    return 0 !== k && !T && p < k && (clearTimeout(timers[k]), timers[k] = setTimeout(function() {
      return n(k);
    }, closeDelay)), function() {
      return clearTimeout(timers[k]);
    };
  }, [T, p]), (0, import_react3.useEffect)(function() {
    s || clearTimeout(timers[k]);
  }, [s]);
  var X = function(a2) {
    var b2 = E(a2), c2 = G(a2);
    if (Array.isArray(b2) && !c2) {
      var d2 = V(a2);
      m({ level: k + 1, items: b2, anchorRef: W[d2], activeItem: d2, parent: a2 }), o(k + 1);
    } else
      o(k);
  }, Y = u ? void 0 : function(a2) {
    return function(b2) {
      var c2;
      X(a2);
      var d2 = null === (c2 = K(a2)) || void 0 === c2 ? void 0 : c2.onMouseEnter;
      null === d2 || void 0 === d2 ? void 0 : d2(b2);
    };
  }, Z = 0 === k;
  return import_react3.default.createElement(ContextMenuLevelWrapper, Object.assign({ anchorRef: A, className: u ? cnContextMenuLevel("Mobile", { animate: j }, [g]) : cnContextMenuLevel("Desktop", { firstLevel: Z }, [cnListBox({ size: d, form: i, border: true, shadow: true }), cnMixSpace({ pV: mapVerticalSpase[d] }), cnMixPopoverAnimate({ animate: j }), Z ? g : void 0]), possibleDirections: w, spareDirection: z, direction: v, offset: x, onSetDirection: y, onMouseEnter: U.on, onMouseLeave: U.off, ref: b, isMobile: u }, Q), t && import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement(ListItem, { label: B(t), size: d, leftIcon: IconArrowLeft, onClick: function onClick() {
    return n(k);
  } }), import_react3.default.createElement(ListDivider, { size: d, space: { mV: mapVerticalSpase[d] } })), import_react3.default.createElement(List, { size: d, items: e, getItemLabel: B, onItemClick: function onItemClick(a2, b2) {
    var c2 = b2.e;
    u && X(a2), null === r || void 0 === r ? void 0 : r({ item: a2, e: c2 });
  }, sortGroup: q ? function(c2, a2) {
    return q(c2.key, a2.key);
  } : void 0, getItemOnClick: I ? function(a2) {
    return function(b2) {
      var c2;
      return null === (c2 = I(a2)) || void 0 === c2 ? void 0 : c2({ e: b2, item: a2 });
    };
  } : void 0, getItemAs: J, getItemAttributes: Y ? function(a2) {
    return _objectSpread(_objectSpread({}, K(a2)), {}, { onMouseEnter: Y(a2) });
  } : K, getItemGroupKey: L, getItemLeftIcon: M, getItemRightIcon: N, getItemLeftSide: D, getItemRightSide: function getItemRightSide(a2) {
    var b2 = C(a2);
    if (!E(a2))
      return b2;
    var c2 = Array.isArray(b2) ? b2 : [b2];
    return c2.push(import_react3.default.createElement(IconArrowRight, { size: mapIconSize[d] })), c2;
  }, getGroupKey: P, getGroupLabel: O, getItemDisabled: G, getItemStatus: F, getItemRef: function getItemRef(a2) {
    return W[V(a2)];
  }, groups: f, getItemActive: function getItemActive(a2) {
    return V(a2) === l;
  }, innerOffset: "round" === i ? "increased" : "normal" }));
};
var ContextMenuLevel = (0, import_react3.forwardRef)(ContextMenuLevelRender);

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/helpers.js
function _createForOfIteratorHelper2(a, b) {
  var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
  if (!c) {
    if (Array.isArray(a) || (c = _unsupportedIterableToArray2(a)) || b && a && "number" == typeof a.length) {
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
function _unsupportedIterableToArray2(a, b) {
  if (a) {
    if ("string" == typeof a)
      return _arrayLikeToArray2(a, b);
    var c = Object.prototype.toString.call(a).slice(8, -1);
    return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray2(a, b) : void 0;
  }
}
function _arrayLikeToArray2(a, b) {
  (null == b || b > a.length) && (b = a.length);
  for (var c = 0, d = Array(b); c < b; c++)
    d[c] = a[c];
  return d;
}
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
var defaultGetItemKey = function(a) {
  return a.key || a.label;
};
var defaultGetItemRightSide = function(a) {
  return a.rightSide;
};
var defaultGetItemLeftSide = function(a) {
  return a.leftSide;
};
var defaultGetItemRightIcon = function(a) {
  return a.rightIcon;
};
var defaultGetItemLeftIcon = function(a) {
  return a.leftIcon;
};
var defaultGetItemStatus = function(a) {
  return a.status;
};
var defaultGetItemDisabled = function(a) {
  return a.disabled;
};
var defaultGetItemLabel = function(a) {
  return a.label;
};
var defaultGetItemOnClick = function(a) {
  return a.onClick;
};
var defaultGetItemSubMenu = function(a) {
  return a.subMenu;
};
var defaultGetItemAs = function(a) {
  return a.as;
};
var defaultGetItemAttributes = function(a) {
  return a.attributes;
};
var defaultGetItemGroupId = function(a) {
  return a.groupId;
};
var defaultGetGroupId = function(a) {
  return a.id;
};
var defaultGetGroupLabel = function(a) {
  return a.label;
};
function withDefaultGetters(a) {
  return _objectSpread2(_objectSpread2({}, a), {}, { getItemKey: a.getItemKey || defaultGetItemKey, getItemLabel: a.getItemLabel || defaultGetItemLabel, getItemRightSide: a.getItemRightSide || defaultGetItemRightSide, getItemLeftSide: a.getItemLeftSide || defaultGetItemLeftSide, getItemRightIcon: a.getItemRightIcon || defaultGetItemRightIcon, getItemLeftIcon: a.getItemLeftIcon || defaultGetItemLeftIcon, getItemSubMenu: a.getItemSubMenu || defaultGetItemSubMenu, getItemStatus: a.getItemStatus || defaultGetItemStatus, getItemDisabled: a.getItemDisabled || defaultGetItemDisabled, getItemOnClick: a.getItemOnClick || defaultGetItemOnClick, getItemAs: a.getItemAs || defaultGetItemAs, getItemAttributes: a.getItemAttributes || defaultGetItemAttributes, getItemGroupId: a.getItemGroupId || defaultGetItemGroupId, getGroupId: a.getGroupId || defaultGetGroupId, getGroupLabel: a.getGroupLabel || defaultGetGroupLabel });
}
var findItem = function(a) {
  var b, c = a.items, d = a.getItemKey, e = a.getItemSubMenu, f = a.key, g = _createForOfIteratorHelper2(c);
  try {
    for (g.s(); !(b = g.n()).done; ) {
      var h = b.value;
      if (d(h) === f)
        return h;
      var i = "function" == typeof e && e(h);
      if (i) {
        var j = findItem({ items: i, key: f, getItemKey: d, getItemSubMenu: e });
        if (j)
          return j;
      }
    }
  } catch (a2) {
    g.e(a2);
  } finally {
    g.f();
  }
};
var getLevels = function(a) {
  var b = a.levels, c = a.items, d = a.getItemKey, e = a.getItemSubMenu;
  return b.map(function(a2) {
    return _objectSpread2(_objectSpread2({}, a2), {}, { items: a2.items.map(function(a3) {
      return findItem({ items: c, getItemSubMenu: e, getItemKey: d, key: d(a3) });
    }).filter(isNotNil) });
  });
};

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevels/useSize.js
var import_react4 = __toESM(require_react());
var useSize = function(a, b, c) {
  var d = useMutableRef(function(a2) {
    c && b(function(b2) {
      return a2.height && a2.width && (b2.height !== a2.height || b2.width !== a2.width) ? a2 : b2;
    });
  }), e = null === a || void 0 === a ? void 0 : a[a.length - 1];
  (0, import_react4.useLayoutEffect)(function() {
    d.current(getElementSize(null === e || void 0 === e ? void 0 : e.current));
  }, [e]), (0, import_react4.useEffect)(function() {
    var a2 = null === e || void 0 === e ? void 0 : e.current, b2 = new ResizeObserver(function(a3) {
      d.current(getElementSize(a3[0].target));
    });
    return a2 && b2.observe(a2), function() {
      b2.disconnect();
    };
  }, [e]);
};

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuLevels/ContextMenuLevels.js
var _excluded4 = ["items", "anchorRef", "position", "direction", "possibleDirections", "offset", "onClickOutside", "getItemKey", "getItemLabel", "getItemSubMenu", "style", "spareDirection", "subMenuDirection", "isMobile", "isOpen", "setComponentSize", "enableAnimationBack", "disableAnimationBack"];
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
var ContextMenuLevelsRender = function(a, b) {
  var c = withDefaultGetters(a), d = c.items, e = c.anchorRef, f = c.position, g = c.direction, h = c.possibleDirections, i = c.offset, j = c.onClickOutside, k = c.getItemKey, l = c.getItemLabel, m = c.getItemSubMenu, n = c.style, o = c.spareDirection, p = c.subMenuDirection, q = void 0 === p ? contextMenuPropDefaultSubMenuDirection : p, r = c.isMobile, s = c.isOpen, t = c.setComponentSize, u = c.enableAnimationBack, v = c.disableAnimationBack, w = _objectWithoutProperties(c, _excluded4), x = useMutableRef(s), y = [{ items: d, anchorRef: e, position: f, direction: g, possibleDirections: h, offset: i }], z = (0, import_react5.useState)(r ? y : []), A = _slicedToArray(z, 2), B = A[0], C = A[1], D = (0, import_react5.useState)(q), E = _slicedToArray(D, 2), F = E[0], G = E[1], H = (0, import_react5.useState)(-1), I = _slicedToArray(H, 2), J = I[0], K = I[1], L = useRefs(B.length), M = function(a2) {
    var b2 = a2.level, d2 = a2.items, e2 = a2.anchorRef, f2 = a2.activeItem, g2 = a2.parent, h2 = _toConsumableArray(B), i2 = h2[b2] && 1 < h2.length - b2 ? h2[b2].direction : void 0;
    h2[b2] && 1 < h2.length - b2 && i2 && G(i2), h2[b2 - 1].activeItem = f2, h2.splice(b2), h2.push({ items: d2, anchorRef: r ? c.anchorRef : e2, direction: r ? c.direction : i2 || F, possibleDirections: r ? c.possibleDirections : contextMenuPropSubMenuDirections, position: r ? c.position : void 0, offset: r ? c.offset : void 0, parent: g2 }), x.current ? C(h2) : C([]);
  }, N = function(a2) {
    u();
    var b2 = _toConsumableArray(B);
    b2.splice(a2), b2[a2 - 1] = _objectSpread3(_objectSpread3({}, b2[a2 - 1]), {}, { activeItem: void 0 }), C(b2), v();
  };
  useClickOutside({ isActive: j && s, ignoreClicksInsideRefs: [].concat(_toConsumableArray(L), [e || { current: null }]), handler: j }), (0, import_react5.useEffect)(function() {
    return clearTimers(), C(getLevels({ levels: B, items: d, getItemKey: k, getItemSubMenu: m })), function() {
      return clearTimers();
    };
  }, [d]);
  var O = useForkRef([L[0], b]);
  return (0, import_react5.useEffect)(function() {
    C(y);
  }, [f]), (0, import_react5.useEffect)(function() {
    C(s ? y : []);
  }, [s]), useSize(L, t, r), import_react5.default.createElement(TransitionGroup_default, { component: import_react5.Fragment }, B.map(function(a2, b2) {
    var d2 = "".concat(b2, "-").concat(a2.parent ? k(a2.parent) : ""), e2 = b2 !== B.length - 1;
    return r && e2 ? import_react5.default.createElement(import_react5.Fragment, { key: b2 }) : import_react5.default.createElement(Transition_default, { key: d2, timeout: animateTimeout, nodeRef: L[b2] }, function(d3) {
      return import_react5.default.createElement(ContextMenuLevel, Object.assign({}, w, a2, { key: "".concat(b2, "-").concat(a2.parent ? k(a2.parent) : ""), isMobile: r, isOpen: s, style: _objectSpread3(_objectSpread3({}, n), { zIndex: "number" == typeof (null === n || void 0 === n ? void 0 : n.zIndex) ? n.zIndex + 1 : void 0 }), levelDepth: b2, getItemLabel: l, addLevel: M, deleteLevel: N, onSetDirection: 0 < b2 ? G : c.onSetDirection, hoveredParenLevel: J, setHoveredParenLevel: K, getItemSubMenu: m, getItemKey: k, ref: 0 === b2 ? O : L[b2], spareDirection: 0 === b2 ? o : "rightStartUp", parent: r ? a2.parent : void 0, animate: d3 }));
    });
  }));
};
var ContextMenuLevels = import_react5.default.forwardRef(ContextMenuLevelsRender);

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuWrapper/ContextMenuWrapper.js
var import_react6 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenuWrapper/ContextMenuWrapper.css";
var cnContextMenuWrapper = cn("ContextMenuWrapper");
var ContextMenuWrapper = function(a) {
  var b = a.isMobile, c = a.children, d = a.form, e = void 0 === d ? defaultContextMenuForm : d, f = a.isOpen, g = a.size, h = void 0 === g ? contextMenuDefaultSize : g, i = a.anchorRef, j = a.possibleDirections, k = a.position, l = a.direction, m = a.spareDirection, n = a.onClickOutside, o = a.offset, p = a.onSetDirection, q = a.className, r = a.animationBack, s = a.style, t = useFlag(b), u = _slicedToArray(t, 2), v = u[0], w = u[1], x = (0, import_react6.useState)(l), y = _slicedToArray(x, 2), z = y[0], A = y[1], B = useMutableRef(p), C = (0, import_react6.useCallback)(function(a2) {
    var b2;
    A(a2), null === (b2 = B.current) || void 0 === b2 ? void 0 : b2.call(B, a2);
  }, []);
  return b ? import_react6.default.createElement(Transition_default, { timeout: animateTimeout, in: f, unmountOnExit: true, onEntered: w.on, onExit: w.off }, function(a2) {
    return import_react6.default.createElement(Popover, { className: cnContextMenuWrapper({ animationBack: r, innerAnimation: v }, [cnListBox({ size: h, form: e, border: true, shadow: true }), cnMixSpace({ pV: mapVerticalSpase[h] }), cnMixPopoverAnimate({ animate: a2 }), q]), anchorRef: i, possibleDirections: j, position: k, direction: z, spareDirection: m, onClickOutside: n, offset: o, onSetDirection: C, style: s }, c);
  }) : import_react6.default.createElement(import_react6.Fragment, { key: ContextMenuWrapper.name }, c);
};

// node_modules/@consta/uikit/__internal__/src/components/ContextMenu/ContextMenu.js
function ownKeys4(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function(b2) {
      return Object.getOwnPropertyDescriptor(a, b2).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function _objectSpread4(a) {
  for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys4(Object(b), true).forEach(function(c2) {
      _defineProperty(a, c2, b[c2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys4(Object(b)).forEach(function(c2) {
      Object.defineProperty(a, c2, Object.getOwnPropertyDescriptor(b, c2));
    });
  return a;
}
var COMPONENT_NAME2 = "ContextMenu";
var ContextMenuRender = function(a, b) {
  var c = usePropsHandler(COMPONENT_NAME2, a, b), d = (0, import_react7.useState)({ width: 240, height: 100 }), e = _slicedToArray(d, 2), f = e[0], g = e[1], h = useFlag(), i = _slicedToArray(h, 2), j = i[0], k = i[1], l = useDebounce(k.off, animateTimeout);
  return import_react7.default.createElement(ContextMenuWrapper, Object.assign({}, c, { animationBack: j, style: _objectSpread4(_objectSpread4({}, null === c || void 0 === c ? void 0 : c.style), f) }), import_react7.default.createElement(ContextMenuLevels, Object.assign({}, c, { setComponentSize: g, ref: b, enableAnimationBack: k.on, disableAnimationBack: l })));
};
var ContextMenu = import_react7.default.forwardRef(ContextMenuRender);

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem.css";
var import_react8 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/helpers.js
function ownKeys5(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function(b2) {
      return Object.getOwnPropertyDescriptor(a, b2).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function _objectSpread5(a) {
  for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys5(Object(b), true).forEach(function(c2) {
      _defineProperty(a, c2, b[c2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys5(Object(b)).forEach(function(c2) {
      Object.defineProperty(a, c2, Object.getOwnPropertyDescriptor(b, c2));
    });
  return a;
}
var defaultGetItemLabel2 = function(a) {
  return a.label;
};
var defaultGetItemIcon = function(a) {
  return a.icon;
};
var defaultGetItemHref = function(a) {
  return a.href;
};
var defaultGetItemOnClick2 = function(a) {
  return a.onClick;
};
var defaultGetItemSubMenu2 = function(a) {
  return a.subMenu;
};
function withDefaultGetters2(a) {
  return _objectSpread5(_objectSpread5({}, a), {}, { getItemLabel: a.getItemLabel || defaultGetItemLabel2, getItemHref: a.getItemHref || defaultGetItemHref, getItemOnClick: a.getItemOnClick || defaultGetItemOnClick2, getItemIcon: a.getItemIcon || defaultGetItemIcon, getItemSubMenu: a.getItemSubMenu || defaultGetItemSubMenu2 });
}
var iconSizeMap = { xs: "xs", s: "xs", m: "s", l: "s" };

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem.js
var _excluded5 = ["className", "onItemClick", "item", "size", "onlyIcon", "delimiter", "active", "getItemHref", "getItemIcon", "getItemLabel", "getItemSubMenu", "children"];
var cnBreadcrumbsItem = cn("BreadcrumbsItem");
function BreadcrumbsItemRender(a, b) {
  var c = a.className, d = a.onItemClick, f = a.item, g = a.size, h = a.onlyIcon, i = a.delimiter, j = a.active, k = a.getItemHref, l = a.getItemIcon, m = a.getItemLabel, n = a.getItemSubMenu, o = a.children, p = _objectWithoutProperties(a, _excluded5), q = useFlag(), r = _slicedToArray(q, 2), s = r[0], t = r[1], u = (0, import_react8.useRef)(null), v = f && (null === l || void 0 === l ? void 0 : l(f)), w = v && h, x = f && (null === k || void 0 === k ? void 0 : k(f)), y = f && (null === m || void 0 === m ? void 0 : m(f)), z = f && (null === n || void 0 === n ? void 0 : n(f)), A = getByMap(iconSizeMap, g), B = x ? { as: "a", href: x } : { as: "span" };
  return import_react8.default.createElement("li", Object.assign({ className: cnBreadcrumbsItem(null, [c]), ref: b }, p), i && import_react8.default.createElement(IconArrowRight, { className: cnBreadcrumbsItem("Delimiter", [cnMixSpace({ mH: g })]), view: "ghost", size: A }), o || import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement(Text, Object.assign({ className: cnBreadcrumbsItem("Link", { active: j }), view: j ? "primary" : "secondary", onClick: function handleClick(a2) {
    f && (null === d || void 0 === d ? void 0 : d({ e: a2, item: f }));
  }, size: g, truncate: !w }, B), v && (w ? import_react8.default.createElement(Button, { type: "button", view: "clear", onlyIcon: true, iconLeft: v, size: A }) : import_react8.default.createElement(v, { className: cnBreadcrumbsItem("Icon", [cnMixSpace({ mR: "xs" })]), size: A })), !w && y), z && import_react8.default.createElement("button", { ref: u, onClick: t.toggle, type: "button", className: cnBreadcrumbsItem("SelectButton") }, import_react8.default.createElement(IconSelect, { size: "xs", view: j ? "primary" : "secondary" }))), z && import_react8.default.createElement(ContextMenu, { isOpen: s, items: z, getItemLabel: m, getItemSubMenu: n, getItemLeftIcon: l, onItemClick: function onItemClick(a2) {
    var b2 = a2.e, c2 = a2.item;
    t.off(), c2 && (null === d || void 0 === d ? void 0 : d({ e: b2, item: c2 }));
  }, getItemAs: getItemAs(k), getItemAttributes: getItemAttributes(k), direction: "downStartRight", possibleDirections: ["downStartLeft", "upStartLeft", "downStartRight", "upStartRight"], anchorRef: u, offset: "xs", onClickOutside: t.off, size: contextMenuSizeMap[g] }));
}
var BreadcrumbsItem = (0, import_react8.forwardRef)(BreadcrumbsItemRender);

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsMore/BreadcrumbsMore.js
var _excluded6 = ["size", "items", "className", "style", "getItemHref", "getItemIcon", "getItemLabel", "getItemOnClick", "getItemSubMenu", "onItemClick"];
function ownKeys6(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function(b2) {
      return Object.getOwnPropertyDescriptor(a, b2).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function _objectSpread6(a) {
  for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys6(Object(b), true).forEach(function(c2) {
      _defineProperty(a, c2, b[c2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys6(Object(b)).forEach(function(c2) {
      Object.defineProperty(a, c2, Object.getOwnPropertyDescriptor(b, c2));
    });
  return a;
}
var cnBreadcrumbsMore = cn("BreadcrumbsMore");
function getItemAs(a) {
  return function(b) {
    var c = null === a || void 0 === a ? void 0 : a(b);
    return c ? "a" : "span";
  };
}
function getItemAttributes(a) {
  return function(b) {
    return a && { href: a(b) };
  };
}
var contextMenuSizeMap = { xs: "s", s: "s", m: "m", l: "l" };
function BreadcrumbsMoreRender(a, b) {
  var c = a.size, d = a.items, e = a.className, f = a.style, g = a.getItemHref, h = a.getItemIcon, i = a.getItemLabel, j = a.getItemOnClick, k = a.getItemSubMenu, l = a.onItemClick, m = _objectWithoutProperties(a, _excluded6), n = useFlag(), o = _slicedToArray(n, 2), p = o[0], q = o[1], r = (0, import_react9.useRef)(null), s = getByMap(iconSizeMap, c);
  (0, import_react9.useEffect)(q.off, [d]);
  return import_react9.default.createElement(BreadcrumbsItem, Object.assign({}, m, { className: cnBreadcrumbsMore(null, [e]), delimiter: true, size: c, ref: b, style: _objectSpread6(_objectSpread6({}, f), {}, _defineProperty({}, "--breadcrumbs-more-font-size", "var(--size-text-".concat(c, ")"))) }), import_react9.default.createElement(Button, { className: cnBreadcrumbsMore("Button"), view: "clear", type: "button", onlyIcon: true, iconLeft: IconMeatball, size: s, ref: r, onClick: q.toggle }), import_react9.default.createElement(ContextMenu, { items: d, isOpen: p, getItemLabel: i, getItemSubMenu: k, getItemOnClick: function getItemOnClick(a2) {
    return function(b2) {
      var c2, d2 = b2.e;
      return null === j || void 0 === j || null === (c2 = j(a2)) || void 0 === c2 ? void 0 : c2(d2);
    };
  }, onItemClick: function onItemClick(a2) {
    var b2, c2 = a2.e, d2 = a2.item;
    null === l || void 0 === l ? void 0 : l({ e: c2, item: d2 }), null === j || void 0 === j || null === (b2 = j(d2)) || void 0 === b2 ? void 0 : b2(c2);
  }, getItemLeftIcon: h, anchorRef: r, onClickOutside: q.off, getItemAs: getItemAs(g), getItemAttributes: getItemAttributes(g), direction: "downCenter", possibleDirections: ["downCenter", "upCenter", "downStartLeft", "upStartLeft", "downStartRight", "upStartRight"], offset: "xs", size: contextMenuSizeMap[c] }));
}
var BreadcrumbsMore = (0, import_react9.forwardRef)(BreadcrumbsMoreRender);

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/useElements.js
var import_react11 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/hooks/useHideElementsInLineCanary/useHideElementsInLineCanary.js
var import_react10 = __toESM(require_react());
var createMap = function(a, b) {
  return Array(a).fill(null).map(function(a2, c) {
    return c !== b;
  });
};
var calcElementsVisibleSize = function(a, b) {
  for (var c = 0, d = 0; d < b.length; d++)
    c += b[d] ? a[d] : 0;
  return c;
};
var useHideElementsInLine = function(a) {
  for (var b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : a - 1, c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : 0, d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : [], e = useRefs(a, d), f = (0, import_react10.useRef)(null), g = useComponentSize(f).width, h = useResizeObserved(e, function(a2) {
    if (a2) {
      var b2 = getComputedStyle(a2), c2 = b2.marginRight, d2 = b2.marginLeft;
      return parseInt(c2, 10) + parseInt(d2, 10) + a2.offsetWidth;
    }
    return 0;
  }), i = createMap(a, b), j = function(a2) {
    if (h[a2] && a2 !== b) {
      var d2 = calcElementsVisibleSize(h, i);
      d2 + c > g && (i[a2] = false, i[b] = true);
    }
  }, k = 0; k < h.length; k++)
    j(b - k), j(b + k);
  return { visibleMap: i, elementsRefs: e, parentRef: f, elementsSizes: h, parentSize: g };
};

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/useElements.js
var useReadyToHideItems = function(a) {
  return (0, import_react11.useMemo)(function() {
    var b = _toConsumableArray(a), c = b.shift(), d = b.pop();
    return [c, b, d];
  }, [a]);
};
var getLastWidth = function(a, b, c, d) {
  var e = b + c.reduce(function(a2, b2, c2) {
    return a2 + (d[c2] ? b2 : 0);
  }, 0);
  return "".concat(a - e, "px");
};
var getCompression = function(a) {
  return 380 >= a ? "s" : 900 >= a ? "m" : 1200 >= a ? "l" : "xl";
};
var useElements = function(a) {
  var b = useReadyToHideItems(a), c = _slicedToArray(b, 3), d = c[0], e = c[1], f = c[2], g = useRefs(2), h = useResizeObserved(g, function(a2) {
    return a2 ? parseInt(getComputedStyle(a2).marginRight, 10) + parseInt(getComputedStyle(a2).marginLeft, 10) + a2.offsetWidth : 0;
  }), i = h.reduce(function(a2, b2) {
    return a2 + b2;
  }, 0), j = useHideElementsInLine(e.length + 1, 0, i), k = j.elementsSizes, l = j.parentSize, m = j.visibleMap, n = j.parentRef, o = j.elementsRefs, p = getLastWidth(l, h[0], k, m), q = getCompression(l), r = m.map(function(b2, c2) {
    if (!b2 && 0 !== c2)
      return a[c2];
  }).filter(function(a2) {
    return !!a2;
  });
  return { firstItem: d, lastItem: f, readyToHideItems: e, hiddenItems: r, visibleMap: m, firstItemRef: g[0], lastItemRef: g[1], lastWidth: p, compression: q, parentRef: n, elementsRefs: o };
};

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsFitModeDropdown/BreadcrumbsFitModeDropdown.js
var _excluded7 = ["items", "getItemHref", "getItemLabel", "getItemIcon", "getItemOnClick", "getItemSubMenu", "onItemClick", "size", "className", "renderItem"];
var cnBreadcrumbsFitModeDropdown = cn("BreadcrumbsFitModeDropdown");
var BreadcrumbsFitModeDropdown = (0, import_react12.forwardRef)(function(a, b) {
  var c = a.items, d = a.getItemHref, e = a.getItemLabel, f = a.getItemIcon, g = a.getItemOnClick, h = a.getItemSubMenu, i = a.onItemClick, j = a.size, k = a.className, l = a.renderItem, m = _objectWithoutProperties(a, _excluded7), n = useElements(c), o = n.firstItem, p = n.lastItem, q = n.readyToHideItems, r = n.visibleMap, s = n.elementsRefs, t = n.parentRef, u = n.hiddenItems, v = n.firstItemRef, w = n.lastItemRef, x = n.lastWidth, y = n.compression, z = useForkRef([b, t]);
  return import_react12.default.createElement("ul", Object.assign({ className: cnBreadcrumbsFitModeDropdown({ compression: y }, [k]), ref: z }, m, { style: _defineProperty({}, "--breadcrumbs-item-last-width", x) }), l(o, "first", true, false, v), import_react12.default.createElement(BreadcrumbsMore, { size: j, key: cnBreadcrumbsFitModeDropdown("More"), getItemHref: d, getItemIcon: f, getItemLabel: e, getItemOnClick: g, onItemClick: i, getItemSubMenu: h, items: u, ref: s[0], className: cnBreadcrumbsFitModeDropdown("Item", { removed: 0 >= u.length }) }), q.map(function(a2, b2) {
    return l(a2, b2, false, false, s[b2 + 1], !r[b2 + 1]);
  }), l(p, "last", false, true, w));
});

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsFitModeScroll/BreadcrumbsFitModeScroll.js
var import_react13 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/BreadcrumbsFitModeScroll/BreadcrumbsFitModeScroll.css";
var _excluded8 = ["items", "className", "renderItem"];
var cnBreadcrumbsFitModeScroll = cn("BreadcrumbsFitModeScroll");
var BreadcrumbsFitModeScroll = (0, import_react13.forwardRef)(function(a, b) {
  var c = a.items, d = a.className, e = a.renderItem, f = _objectWithoutProperties(a, _excluded8), g = (0, import_react13.useRef)(null);
  return (0, import_react13.useEffect)(function() {
    var a2, b2;
    null === (a2 = g.current) || void 0 === a2 ? void 0 : a2.scrollTo({ left: null === (b2 = g.current) || void 0 === b2 ? void 0 : b2.scrollWidth });
  }, []), import_react13.default.createElement("ul", Object.assign({ className: cnBreadcrumbsFitModeScroll(null, [d]), ref: useForkRef([g, b]) }, f), c.map(function(a2, b2) {
    return e(a2, b2, 0 === b2, b2 === c.length - 1);
  }));
});

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/types.js
var breadcrumbPropSize = ["m", "xs", "s", "l"];
var breadcrumbPropSizeDefault = breadcrumbPropSize[0];
var breadcrumbPropFitMode = ["dropdown", "scroll"];
var breadcrumbPropFitModeDefault = breadcrumbPropFitMode[0];

// node_modules/@consta/uikit/__internal__/src/components/Breadcrumbs/Breadcrumbs.js
var _excluded9 = ["items", "getItemHref", "getItemLabel", "getItemIcon", "getItemOnClick", "getItemSubMenu", "onItemClick", "size", "onlyIconRoot", "className", "fitMode", "lastItemIsLink"];
var cnBreadcrumbs = cn("Breadcrumbs");
var BreadcrumbsRender = function(a, b) {
  var c = withDefaultGetters2(a), d = c.items, e = c.getItemHref, f = c.getItemLabel, g = c.getItemIcon, h = c.getItemOnClick, i = c.getItemSubMenu, j = c.onItemClick, k = c.size, l = void 0 === k ? breadcrumbPropSizeDefault : k, m = c.onlyIconRoot, n = c.className, o = c.fitMode, p = void 0 === o ? breadcrumbPropFitModeDefault : o, q = c.lastItemIsLink, r = _objectWithoutProperties(c, _excluded9), s = 2 >= d.length, t = function(a2, b2, c2, d2, k2, n2) {
    if (void 0 !== a2) {
      var o2 = function(a3) {
        var b3, c3 = a3.e, d3 = a3.item;
        null === h || void 0 === h || null === (b3 = h(d3)) || void 0 === b3 ? void 0 : b3(c3), null === j || void 0 === j ? void 0 : j({ e: c3, item: d3 });
      };
      return import_react14.default.createElement(BreadcrumbsItem, { className: cnBreadcrumbs("Item", { hidden: n2 }), item: a2, getItemHref: e, getItemIcon: g, getItemLabel: f, getItemSubMenu: i, onItemClick: o2, active: !q && d2, delimiter: !c2, onlyIcon: void 0 !== m && m && c2, key: cnBreadcrumbs("Item", { index: b2 }), size: l, ref: k2 });
    }
  };
  return 2 >= d.length ? import_react14.default.createElement("ul", Object.assign({}, r, { className: cnBreadcrumbs({ shortList: s }, [n]), ref: b }), d.map(function(a2, b2) {
    return t(a2, b2, 0 === b2, b2 === d.length - 1);
  })) : "scroll" === p ? import_react14.default.createElement(BreadcrumbsFitModeScroll, Object.assign({}, r, { className: cnBreadcrumbs(null, [n]), items: d, renderItem: t, ref: b })) : import_react14.default.createElement(BreadcrumbsFitModeDropdown, Object.assign({}, r, { size: l, className: cnBreadcrumbs(null, [n]), items: d, getItemHref: e, getItemIcon: g, getItemLabel: f, getItemOnClick: h, getItemSubMenu: i, onItemClick: j, ref: b, renderItem: t }));
};
var Breadcrumbs = (0, import_react14.forwardRef)(BreadcrumbsRender);
export {
  Breadcrumbs,
  breadcrumbPropFitMode,
  breadcrumbPropFitModeDefault,
  breadcrumbPropSize,
  breadcrumbPropSizeDefault,
  cnBreadcrumbs
};
//# sourceMappingURL=@consta_uikit_Breadcrumbs.js.map
