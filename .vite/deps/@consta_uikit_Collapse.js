import {
  useRefs
} from "./chunk-VARVPBVH.js";
import {
  Transition_default
} from "./chunk-L2ANZMSN.js";
import "./chunk-SVBJZ4BZ.js";
import {
  useComponentSize
} from "./chunk-OHQSEJAW.js";
import "./chunk-PQEZCWQY.js";
import {
  Text
} from "./chunk-GF7E4B5O.js";
import {
  cn,
  createIcon,
  iconPropSizeDefault
} from "./chunk-JVWFMWRY.js";
import "./chunk-UPT3JXAF.js";
import {
  useForkRef,
  usePropsHandler
} from "./chunk-Y5I2RU34.js";
import {
  _toConsumableArray,
  isNotNil
} from "./chunk-YGS6DBVC.js";
import "./chunk-S7TJXDKL.js";
import {
  cn as cn2
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

// node_modules/@consta/uikit/__internal__/src/components/Collapse/Collapse.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Collapse/Collapse.css";

// node_modules/@consta/icons/__internal__/src/icons/IconArrowDown/IconArrowDown_size_m.js
var React = __toESM(require_react());
var IconArrowDownSizeM = (a) => React.createElement("svg", Object.assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a), React.createElement("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" }));
var IconArrowDown_size_m_default = IconArrowDownSizeM;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowDown/IconArrowDown_size_s.js
var React2 = __toESM(require_react());
var IconArrowDownSizeS = (a) => React2.createElement("svg", Object.assign({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, a), React2.createElement("path", { d: "M8 9.593 3.703 5.296 2.289 6.71 8 12.421l5.711-5.71-1.414-1.415L8 9.593z", fillRule: "evenodd", clipRule: "evenodd" }));
var IconArrowDown_size_s_default = IconArrowDownSizeS;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowDown/IconArrowDown_size_xs.js
var React3 = __toESM(require_react());
var IconArrowDownSizeXs = (a) => React3.createElement("svg", Object.assign({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, a), React3.createElement("path", { d: "M6.005 8.341 2.03 4.366l.707-.707 3.268 3.268 3.268-3.268.707.707-3.975 3.975z", fillRule: "evenodd", clipRule: "evenodd" }));
var IconArrowDown_size_xs_default = IconArrowDownSizeXs;

// node_modules/@consta/icons/__internal__/src/icons/IconArrowDown/IconArrowDown.js
var IconArrowDown = createIcon({ l: IconArrowDown_size_m_default, m: IconArrowDown_size_m_default, s: IconArrowDown_size_s_default, xs: IconArrowDown_size_xs_default, name: "IconArrowDown", renderType: { l: "use", m: "use", s: "use", xs: "use" }, color: "mono" });

// node_modules/@consta/uikit/__internal__/src/components/Collapse/Collapse.js
var import_react4 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/Collapse/CollapseIcon/CollapseIcon.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Collapse/CollapseIcon/CollapseIcon.css";

// node_modules/@consta/icons/__internal__/src/components/AnimateIconSwitcher/AnimateIconSwitcher.js
var import_react2 = __toESM(require_react());

// node_modules/@consta/icons/__internal__/src/components/AnimateIconBase/AnimateIconBase.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/icons/__internal__/src/components/AnimateIconBase/AnimateIconBase.css";
var import_react = __toESM(require_react());

// node_modules/@consta/icons/__internal__/src/mixs/MixAnimateIcon/MixAnimateIcon.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/icons/__internal__/src/mixs/MixAnimateIcon/MixAnimateIcon.css";
var cnMixAnimateIcon = cn("MixAnimateIcon");

// node_modules/@consta/icons/__internal__/src/components/AnimateIconBase/AnimateIconBase.js
var _excluded = ["className", "activeIndex", "icons", "directions", "transition", "style", "size", "view"];
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
var cnAnimateIconBase = cn("AnimateIconBase");
var AnimateIconBase = (0, import_react.forwardRef)((a, b) => {
  const { className: c, activeIndex: h = 0, icons: d, directions: e, transition: i = 200, style: f, size: j = iconPropSizeDefault, view: g } = a, k = _objectWithoutProperties(a, _excluded), l = useRefs(d.length), m = d[0], n = 1 === d.length ? import_react.default.createElement(m, { size: j, view: g }) : d.map((a2, b2) => import_react.default.createElement(Transition_default, { in: h === b2, key: cnAnimateIconBase({ key: b2 }), unmountOnExit: true, timeout: i, nodeRef: l[b2] }, (c2) => import_react.default.createElement(a2, { ref: l[b2], className: cnMixAnimateIcon({ animate: c2 }), size: j, view: g })));
  return import_react.default.createElement("span", Object.assign({}, k, { className: cnAnimateIconBase({ size: j }, [c]), style: _objectSpread({ "--animate-icon-transition": `${i}ms`, "--direction-transform": `rotate(${(null === e || void 0 === e ? void 0 : e[h]) || 0}deg)` }, f), ref: b }), n);
});

// node_modules/@consta/icons/__internal__/src/components/AnimateIconSwitcher/AnimateIconSwitcher.js
var _excluded2 = ["startIcon", "startDirection", "endIcon", "endDirection", "active"];
var AnimateIconSwitcher = (0, import_react2.forwardRef)((a, b) => {
  const { startIcon: c, startDirection: f = 0, endIcon: d, endDirection: g = 0, active: e } = a, h = _objectWithoutProperties(a, _excluded2);
  return import_react2.default.createElement(AnimateIconBase, Object.assign({}, h, { ref: b, activeIndex: e ? 1 : 0, icons: [c, d].filter(isNotNil), directions: [f, g] }));
});

// node_modules/@consta/uikit/__internal__/src/components/Collapse/CollapseIcon/CollapseIcon.js
var import_react3 = __toESM(require_react());
var _excluded3 = ["size", "icon", "closeIcon", "direction", "closeDirection", "isOpen", "className", "view"];
var cnCollapseIcon = cn2("CollapseIcon");
var CollapseIconButton = function(a) {
  var b = a.children, c = a.className, d = a.size;
  return import_react3.default.createElement("div", { className: cnCollapseIcon("Button", { size: d }, [c]) }, b);
};
var GuardFragment = function(a) {
  return import_react3.default.createElement(import_react3.default.Fragment, null, a.children);
};
var directionsMap = { up: 0, right: 90, down: 180, left: 270, upRight: 45, downRight: 135, downLeft: 225, upLeft: 315 };
var CollapseIcon = function(a) {
  var b = a.size, c = a.icon, d = a.closeIcon, e = a.direction, f = a.closeDirection, g = a.isOpen, h = a.className, i = a.view, j = _objectWithoutProperties(a, _excluded3), k = "ghost" === i ? CollapseIconButton : GuardFragment, l = "ghost" === i ? h : void 0, m = "clear" === i ? h : void 0;
  return import_react3.default.createElement(k, { size: b, className: l }, import_react3.default.createElement(AnimateIconSwitcher, Object.assign({ startIcon: c, endIcon: d, transition: 300, size: b, active: g, className: cnCollapseIcon({ view: i }, [m]), startDirection: !d && e ? directionsMap[e] : void 0, endDirection: !d && f ? directionsMap[f] : void 0 }, j)));
};

// node_modules/@consta/uikit/__internal__/src/components/Collapse/types.js
var collapsePropSize = ["m", "l", "s", "xs", "2xs"];
var collapsePropSizeDefault = collapsePropSize[0];
var collapsePropForm = ["brick", "default", "round"];
var collapsePropFormDefault = collapsePropForm[0];
var collapsePropView = ["clear", "ghost", "primary", "secondary"];
var collapsePropViewDefault = collapsePropView[0];
var collapsePropHorizontalSpace = ["3xs", "6xl", "5xl", "4xl", "3xl", "2xl", "xl", "l", "m", "s", "xs", "2xs"];
var collapsePropIconPosition = ["left", "right"];
var collapsePropIconPositionDefault = collapsePropIconPosition[0];
var collapseIconPropDirection = ["up", "right", "down", "left", "upRight", "downRight", "upLeft", "downLeft"];
var collapsePropDirectionIcon = collapseIconPropDirection;
var collapsePropDirectionIconDefault = collapsePropDirectionIcon[0];
var collapsePropCloseDirectionIconDefault = collapsePropDirectionIcon[2];
var collapsePropIconView = ["clear", "ghost"];
var collapsePropIconViewDefault = collapsePropIconView[0];

// node_modules/@consta/uikit/__internal__/src/components/Collapse/Collapse.js
var _excluded4 = ["label", "size", "view", "className", "maxContentHeight", "isOpen", "form", "children", "hoverEffect", "divider", "icon", "closeIcon", "rightSide", "horizontalSpace", "iconPosition", "directionIcon", "closeDirectionIcon", "style", "iconView"];
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
var COMPONENT_NAME = "Collapse";
var cnCollapse = cn2("Collapse");
var sizeIconMap = { "2xs": "xs", xs: "xs", s: "xs", m: "s", l: "s" };
function renderSide(a) {
  var b = a ? _toConsumableArray(Array.isArray(a) ? a : [a]) : [];
  return b.map(function(a2, b2) {
    return import_react4.default.createElement("div", { className: cnCollapse("Side"), key: b2 }, a2);
  });
}
var getMaxHeight = function(a, b) {
  return b ? "string" == typeof b ? b : "".concat(b, "px") : "".concat(a, "px");
};
var collapseViewMap = { clear: "clear", ghost: "ghost", primary: "clear", secondary: "ghost" };
var Collapse = import_react4.default.forwardRef(function(a, b) {
  var c = (0, import_react4.useRef)(null), d = (0, import_react4.useRef)(null), e = useComponentSize(d), f = e.height, g = usePropsHandler(COMPONENT_NAME, a, c), h = g.label, i = g.size, j = void 0 === i ? collapsePropSizeDefault : i, k = g.view, l = void 0 === k ? collapsePropViewDefault : k, m = g.className, n = g.maxContentHeight, o = g.isOpen, p = g.form, q = void 0 === p ? collapsePropFormDefault : p, r = g.children, s = g.hoverEffect, t = g.divider, u = g.icon, v = void 0 === u ? IconArrowDown : u, w = g.closeIcon, x = g.rightSide, y = g.horizontalSpace, z = g.iconPosition, A = void 0 === z ? collapsePropIconPositionDefault : z, B = g.directionIcon, C = void 0 === B ? collapsePropDirectionIconDefault : B, D = g.closeDirectionIcon, E = void 0 === D ? collapsePropCloseDirectionIconDefault : D, F = g.style, G = g.iconView, H = void 0 === G ? collapsePropIconViewDefault : G, I = _objectWithoutProperties(g, _excluded4), J = collapseViewMap[l], K = { className: cnCollapse("Icon", { position: A }), size: sizeIconMap[j], icon: v, closeIcon: w, isOpen: o, direction: C, closeDirection: E, view: H };
  return import_react4.default.createElement("div", { ref: useForkRef([b, c]), className: cnCollapse({ size: j, view: J }, [m]), style: _objectSpread2(_objectSpread2({}, F), {}, _defineProperty({}, "--horizontal-space", y ? "var(--space-".concat(y, ")") : "0px")) }, import_react4.default.createElement("div", Object.assign({ className: cnCollapse("Label", { hoverEffect: s, view: J, form: q }) }, I), "left" === A && import_react4.default.createElement(CollapseIcon, K), "object" == typeof h ? import_react4.default.createElement("div", { className: cnCollapse("LabelText") }, h) : import_react4.default.createElement(Text, { className: cnCollapse("LabelText"), size: j }, h), renderSide(x), "right" === A && import_react4.default.createElement(CollapseIcon, K)), import_react4.default.createElement("div", { style: _defineProperty({}, "--collapse-body-max-height", getMaxHeight(f, n)), className: cnCollapse("Body", { isOpen: o, divider: t }) }, import_react4.default.createElement("div", { ref: d, className: cnCollapse("Content") }, r)));
});
export {
  COMPONENT_NAME,
  Collapse,
  cnCollapse,
  collapseIconPropDirection,
  collapsePropCloseDirectionIconDefault,
  collapsePropDirectionIcon,
  collapsePropDirectionIconDefault,
  collapsePropForm,
  collapsePropFormDefault,
  collapsePropHorizontalSpace,
  collapsePropIconPosition,
  collapsePropIconPositionDefault,
  collapsePropIconView,
  collapsePropIconViewDefault,
  collapsePropSize,
  collapsePropSizeDefault,
  collapsePropView,
  collapsePropViewDefault,
  sizeIconMap
};
//# sourceMappingURL=@consta_uikit_Collapse.js.map
