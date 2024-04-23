import {
  require_react_dom
} from "./chunk-UPT3JXAF.js";
import {
  _defineProperty,
  _objectWithoutProperties,
  require_classname
} from "./chunk-PQHI3MBA.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/icons/__internal__/src/icons/Icon/Icon.js
var import_react4 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/icons/__internal__/src/icons/Icon/Icon.css";

// node_modules/@consta/icons/__internal__/src/components/IconsProvider/IconsProvider.js
var import_react3 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/icons/__internal__/src/components/IconsProvider/IconsProvider.css";

// node_modules/@consta/icons/__internal__/src/utils/bem.js
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
var withPrefix = (a) => (0, import_classname.withNaming)(_objectSpread({ n: `${a}--` }, reactBemNaming));
var cn = withPrefix("icons");

// node_modules/@consta/icons/__internal__/src/components/IconsProvider/IconsProviderList/IconsProviderList.js
var import_react2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@consta/icons/__internal__/src/components/IconsProvider/IconsProviderIcon/IconsProviderIcon.js
var import_react = __toESM(require_react());
var IconsProviderIcon = (0, import_react.memo)(({ element: a, name: b }) => a ? import_react.default.createElement("svg", { key: cnIcons(b) }, import_react.default.createElement("symbol", { id: `${cnIcons(b)}` }, a.props.children)) : null, ({ name: a }, { name: b }) => a === b);

// node_modules/@consta/icons/__internal__/src/components/IconsProvider/IconsProvider.js
var defaultContextValue = { addIcon: void 0, removeIcon: void 0 };
var cnIcons = cn("Icons");
var IconsContext = (0, import_react3.createContext)(defaultContextValue);

// node_modules/@consta/icons/__internal__/src/icons/Icon/Icon.js
var _excluded = ["children"];
var iconPropSize = ["m", "s", "xs", "l"];
var iconPropSizeDefault = iconPropSize[0];
var iconPropView = ["primary", "alert", "brand", "ghost", "link", "secondary", "success", "warning", "disabled"];
var iconPropViewDefault = iconPropView[0];
var cnIcon = cn("Icon");
var renderTypeDefault = { l: "default", m: "default", s: "default", xs: "default" };
function createIcon(a) {
  const { name: b, renderType: c = renderTypeDefault, color: d = "mono" } = a, e = (0, import_react4.forwardRef)((e2, f) => {
    var g;
    const { size: j = "m", className: h, view: i } = e2, k = a[j], { addIcon: l, removeIcon: m } = (0, import_react4.useContext)(IconsContext), n = (0, import_react4.useMemo)(() => "use" === c[j] ? k({ className: cnIcon("Svg", { color: d }) }) : null, [k]), o = null !== (g = null === n || void 0 === n ? void 0 : n.props) && void 0 !== g ? g : {}, { children: p } = o, q = _objectWithoutProperties(o, _excluded);
    return (0, import_react4.useEffect)(() => {
      "use" === c[j] && (null === l || void 0 === l ? void 0 : l(b, j, n));
    }, [n, c, j]), (0, import_react4.useEffect)(() => () => {
      "use" === c[j] && (null === m || void 0 === m ? void 0 : m(b, j));
    }, [k, c, j]), import_react4.default.createElement("span", Object.assign({}, e2, { className: cnIcon({ size: j, view: i, color: d }, [b, h]), ref: f }), l && "use" === c[j] ? import_react4.default.createElement("svg", q, import_react4.default.createElement("use", { x: "0", y: "0", xlinkHref: `#${cnIcons(`${b}_${j}`)}` })) : import_react4.default.createElement(k, { className: cnIcon("Svg") }));
  });
  return e;
}

export {
  cn,
  iconPropSize,
  iconPropSizeDefault,
  iconPropView,
  iconPropViewDefault,
  cnIcon,
  createIcon
};
//# sourceMappingURL=chunk-JVWFMWRY.js.map
