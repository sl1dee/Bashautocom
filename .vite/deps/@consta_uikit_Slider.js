import {
  IconClose
} from "./chunk-W2MDE3KC.js";
import {
  FieldCaption,
  FieldLabel
} from "./chunk-BGCSU4BD.js";
import {
  IconSelect,
  Popover,
  useClickOutside,
  useMutableRef
} from "./chunk-FTIWWGIB.js";
import {
  useComponentSize
} from "./chunk-OHQSEJAW.js";
import {
  _extends
} from "./chunk-PQEZCWQY.js";
import {
  Text
} from "./chunk-GF7E4B5O.js";
import {
  ThemeContext,
  generateDeps,
  generateThemeClassNames,
  useTheme
} from "./chunk-J6UMDR5D.js";
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
  _objectWithoutProperties,
  _objectWithoutPropertiesLoose
} from "./chunk-PQHI3MBA.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/components/Slider/Slider.js
var import_react11 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Slider/Slider.css";

// node_modules/@consta/uikit/__internal__/src/hooks/useSortSteps/useSortSteps.js
var import_react = __toESM(require_react());
var getIsValidValue = function(a, b, c) {
  return !("number" == typeof b && a < b || "number" == typeof c && a > c);
};
var useSortSteps = function(a) {
  var b = a.step, c = a.min, d = a.max, e = (0, import_react.useMemo)(function() {
    if (Array.isArray(b)) {
      var a2 = _toConsumableArray(b);
      "number" == typeof c && a2.push(c), "number" == typeof d && a2.push(d);
      var e2 = a2.sort(function(c2, a3) {
        return c2 - a3;
      }).filter(function(a3) {
        return getIsValidValue(a3, c, d);
      });
      return Array.from(new Set(e2));
    }
    return +b;
  }, [b, c, d]);
  return e;
};

// node_modules/@consta/uikit/__internal__/src/components/Slider/helper.js
var propStatus = ["alert", "warning", "success"];
var defaultPropStatus = propStatus[0];
var propSize = ["s", "xs", "m", "l"];
var defaultPropSize = propSize[0];
var isRangeParams = function(a) {
  return !!a.range;
};
var isNotRangeParams = function(a) {
  return !a.range;
};
var defaultTooltipFormatter = function(a) {
  return (null === a || void 0 === a ? void 0 : a.toString()) || "";
};
var getValueForInput = function(a, b) {
  return isRangeParams(a) ? a.value[b] : a.value;
};
var getOnChandgeForInput = function(a, b) {
  return function(c) {
    var d = c.e, e = c.value;
    a.onChange && (isNotRangeParams(a) && a.onChange({ e: d, value: e }), isRangeParams(a) && a.onChange({ e: d, value: b ? [a.value[0], e] : [e, a.value[1]] }));
  };
};
var getIcon = function(a) {
  if ("input" !== a)
    return a;
};
var getMaxForStartField = function(a) {
  return isNotRangeParams(a) ? a.max : isRangeParams(a) ? a.value[1] : void 0;
};
var getMinForEndField = function(a) {
  return isNotRangeParams(a) ? a.min : isRangeParams(a) ? a.value[0] : void 0;
};
var getValidStep = function(a, b, c) {
  return c ? Array.isArray(c) ? c : 0 >= c ? 1 : c : Math.abs((b - a) / 100);
};

// node_modules/@consta/uikit/__internal__/src/components/Slider/SliderInput/SliderInput.js
var import_react7 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Slider/SliderInput/SliderInput.css";

// node_modules/@consta/uikit/__internal__/src/components/TextField/TextField.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/TextField/TextField.css";

// node_modules/@consta/icons/__internal__/src/icons/IconEye/IconEye_size_m.js
var React = __toESM(require_react());
var IconEyeSizeM = (a) => React.createElement("svg", Object.assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a), React.createElement("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }));
var IconEye_size_m_default = IconEyeSizeM;

// node_modules/@consta/icons/__internal__/src/icons/IconEye/IconEye_size_s.js
var React2 = __toESM(require_react());
var IconEyeSizeS = (a) => React2.createElement("svg", Object.assign({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, a), React2.createElement("path", { d: "M8 3C4.364 3 1.258 5.28 0 8.5 1.258 11.72 4.364 14 8 14s6.742-2.28 8-5.5C14.742 5.28 11.636 3 8 3zm0 9.167c-2.007 0-3.636-1.643-3.636-3.667S5.993 4.833 8 4.833s3.636 1.643 3.636 3.667S10.007 12.167 8 12.167zM8 6.3a2.188 2.188 0 0 0-2.182 2.2c0 1.217.975 2.2 2.182 2.2a2.188 2.188 0 0 0 2.182-2.2c0-1.217-.975-2.2-2.182-2.2z" }));
var IconEye_size_s_default = IconEyeSizeS;

// node_modules/@consta/icons/__internal__/src/icons/IconEye/IconEye_size_xs.js
var React3 = __toESM(require_react());
var IconEyeSizeXs = (a) => React3.createElement("svg", Object.assign({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, a), React3.createElement("path", { d: "M6 2C3.273 2 .944 3.659 0 6c.944 2.341 3.273 4 6 4s5.056-1.659 6-4c-.944-2.341-3.273-4-6-4zm0 6.667C4.495 8.667 3.273 7.472 3.273 6c0-1.472 1.222-2.667 2.727-2.667S8.727 4.528 8.727 6c0 1.472-1.222 2.667-2.727 2.667zM6 4.4c-.905 0-1.636.715-1.636 1.6 0 .885.73 1.6 1.636 1.6.905 0 1.636-.715 1.636-1.6 0-.885-.73-1.6-1.636-1.6z" }));
var IconEye_size_xs_default = IconEyeSizeXs;

// node_modules/@consta/icons/__internal__/src/icons/IconEye/IconEye.js
var IconEye = createIcon({ l: IconEye_size_m_default, m: IconEye_size_m_default, s: IconEye_size_s_default, xs: IconEye_size_xs_default, name: "IconEye", renderType: { l: "use", m: "use", s: "use", xs: "use" }, color: "mono" });

// node_modules/@consta/icons/__internal__/src/icons/IconEyeClose/IconEyeClose_size_m.js
var React4 = __toESM(require_react());
var IconEyeCloseSizeM = (a) => React4.createElement("svg", Object.assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a), React4.createElement("path", { clipRule: "evenodd", d: "M1 12c1.73-4.39 6-7.5 11-7.5 2.389 0 4.611.71 6.47 1.93l-2.514 2.513A4.993 4.993 0 0 0 12 7c-2.76 0-5 2.24-5 5a4.99 4.99 0 0 0 1.943 3.956L6.67 18.23A11.886 11.886 0 0 1 1 12zm7.697 7.031c1.048.305 2.156.469 3.303.469 5 0 9.27-3.11 11-7.5a11.877 11.877 0 0 0-2.947-4.325l-3.184 3.184a5.002 5.002 0 0 1-6.01 6.01l-2.162 2.162zM9 12c0-1.66 1.34-3 3-3 .716 0 1.373.25 1.888.666l-4.214 4.232A2.99 2.99 0 0 1 9 12z" }), React4.createElement("path", { d: "m4.901 19.998-1.414-1.414L19.043 3.028l1.414 1.414z" }));
var IconEyeClose_size_m_default = IconEyeCloseSizeM;

// node_modules/@consta/icons/__internal__/src/icons/IconEyeClose/IconEyeClose_size_s.js
var React5 = __toESM(require_react());
var IconEyeCloseSizeS = (a) => React5.createElement("svg", Object.assign({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, a), React5.createElement("path", { clipRule: "evenodd", d: "M1.086 13.196 2.5 14.61l1.57-1.57.002.002 1.67-1.669-.003-.002 5.127-5.127.002.002L12.7 4.413V4.41l1.82-1.82-1.414-1.415-2.299 2.299A8.503 8.503 0 0 0 8 3C4.364 3 1.258 5.28 0 8.5a8.712 8.712 0 0 0 2.388 3.394l-1.302 1.302zm3.482-3.482 4.664-4.665A3.6 3.6 0 0 0 8 4.833c-2.007 0-3.636 1.643-3.636 3.667 0 .425.072.834.204 1.214zM8 14a8.5 8.5 0 0 1-2.948-.524l1.579-1.579c.423.174.885.27 1.369.27 2.007 0 3.636-1.643 3.636-3.667 0-.478-.09-.934-.255-1.352l2.129-2.13A8.712 8.712 0 0 1 16 8.5c-1.258 3.22-4.364 5.5-8 5.5z" }));
var IconEyeClose_size_s_default = IconEyeCloseSizeS;

// node_modules/@consta/icons/__internal__/src/icons/IconEyeClose/IconEyeClose_size_xs.js
var React6 = __toESM(require_react());
var IconEyeCloseSizeXs = (a) => React6.createElement("svg", Object.assign({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, a), React6.createElement("path", { clipRule: "evenodd", d: "m1 9.485.707.707 8.485-8.485L9.485 1 8.132 2.353A6.557 6.557 0 0 0 6 2C3.273 2 .944 3.659 0 6a6.348 6.348 0 0 0 1.915 2.57L1 9.485zM3.475 7.01l3.5-3.5A2.773 2.773 0 0 0 6 3.332C4.495 3.333 3.273 4.528 3.273 6c0 .357.072.698.202 1.01zm4.987-2.158 1.51-1.51A6.353 6.353 0 0 1 12 6c-.944 2.341-3.273 4-6 4a6.55 6.55 0 0 1-2.28-.406l1.161-1.162c.342.15.72.235 1.119.235 1.505 0 2.727-1.195 2.727-2.667 0-.411-.095-.8-.265-1.148z" }));
var IconEyeClose_size_xs_default = IconEyeCloseSizeXs;

// node_modules/@consta/icons/__internal__/src/icons/IconEyeClose/IconEyeClose.js
var IconEyeClose = createIcon({ l: IconEyeClose_size_m_default, m: IconEyeClose_size_m_default, s: IconEyeClose_size_s_default, xs: IconEyeClose_size_xs_default, name: "IconEyeClose", renderType: { l: "use", m: "use", s: "use", xs: "use" }, color: "mono" });

// node_modules/@consta/icons/__internal__/src/icons/IconSelectOpen/IconSelectOpen_size_m.js
var React7 = __toESM(require_react());
var IconSelectOpenSizeM = (a) => React7.createElement("svg", Object.assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a), React7.createElement("path", { d: "M6.5 15 12 9l5.5 6h-11z" }));
var IconSelectOpen_size_m_default = IconSelectOpenSizeM;

// node_modules/@consta/icons/__internal__/src/icons/IconSelectOpen/IconSelectOpen_size_s.js
var React8 = __toESM(require_react());
var IconSelectOpenSizeS = (a) => React8.createElement("svg", Object.assign({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, a), React8.createElement("path", { d: "m8 5-4.5 5h9L8 5z" }));
var IconSelectOpen_size_s_default = IconSelectOpenSizeS;

// node_modules/@consta/icons/__internal__/src/icons/IconSelectOpen/IconSelectOpen_size_xs.js
var React9 = __toESM(require_react());
var IconSelectOpenSizeXs = (a) => React9.createElement("svg", Object.assign({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, a), React9.createElement("path", { d: "M6 3.5 10 8H2l4-4.5z" }));
var IconSelectOpen_size_xs_default = IconSelectOpenSizeXs;

// node_modules/@consta/icons/__internal__/src/icons/IconSelectOpen/IconSelectOpen.js
var IconSelectOpen = createIcon({ l: IconSelectOpen_size_m_default, m: IconSelectOpen_size_m_default, s: IconSelectOpen_size_s_default, xs: IconSelectOpen_size_xs_default, name: "IconSelectOpen", renderType: { l: "use", m: "use", s: "use", xs: "use" }, color: "mono" });

// node_modules/@consta/uikit/__internal__/src/components/TextField/TextField.js
var import_react4 = __toESM(require_react());

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js
var React11 = __toESM(require_react());

// node_modules/use-latest/dist/use-latest.esm.js
var React10 = __toESM(require_react());

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react2 = __toESM(require_react());
var index = import_react2.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index;

// node_modules/use-latest/dist/use-latest.esm.js
var useLatest = function useLatest2(value) {
  var ref = React10.useRef(value);
  use_isomorphic_layout_effect_browser_esm_default(function() {
    ref.current = value;
  });
  return ref;
};

// node_modules/use-composed-ref/dist/use-composed-ref.esm.js
var import_react3 = __toESM(require_react());
var updateRef = function updateRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  ref.current = value;
};
var useComposedRef = function useComposedRef2(libRef, userRef) {
  var prevUserRef = (0, import_react3.useRef)();
  return (0, import_react3.useCallback)(function(instance) {
    libRef.current = instance;
    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }
    prevUserRef.current = userRef;
    if (!userRef) {
      return;
    }
    updateRef(userRef, instance);
  }, [userRef]);
};
var use_composed_ref_esm_default = useComposedRef;

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js
var HIDDEN_TEXTAREA_STYLE = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
var forceHiddenStyles = function forceHiddenStyles2(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
};
var forceHiddenStyles$1 = forceHiddenStyles;
var hiddenTextarea = null;
var getHeight = function getHeight2(node, sizingData) {
  var height = node.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === "border-box") {
    return height + sizingData.borderSize;
  }
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles$1(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles$1(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = value;
  height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}
var noop = function noop2() {
};
var pick = function pick2(props, obj) {
  return props.reduce(function(acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};
var SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var isIE = !!document.documentElement.currentStyle;
var getSizingData = function getSizingData2(node) {
  var style = window.getComputedStyle(node);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") {
    return null;
  }
  if (isIE && boxSizing === "border-box") {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle,
    paddingSize,
    borderSize
  };
};
var getSizingData$1 = getSizingData;
function useListener(target, type, listener) {
  var latestListener = useLatest(listener);
  React11.useLayoutEffect(function() {
    var handler = function handler2(ev) {
      return latestListener.current(ev);
    };
    if (!target) {
      return;
    }
    target.addEventListener(type, handler);
    return function() {
      return target.removeEventListener(type, handler);
    };
  }, []);
}
var useWindowResizeListener = function useWindowResizeListener2(listener) {
  useListener(window, "resize", listener);
};
var useFontsLoadedListener = function useFontsLoadedListener2(listener) {
  useListener(document.fonts, "loadingdone", listener);
};
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  if (props.style) {
    if ("maxHeight" in props.style) {
      throw new Error("Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.");
    }
    if ("minHeight" in props.style) {
      throw new Error("Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.");
    }
  }
  var isControlled = props.value !== void 0;
  var libRef = React11.useRef(null);
  var ref = use_composed_ref_esm_default(libRef, userRef);
  var heightRef = React11.useRef(0);
  var measurementsCacheRef = React11.useRef();
  var resizeTextarea = function resizeTextarea2() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty("height", height + "px", "important");
      onHeightChange(height, {
        rowHeight
      });
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  {
    React11.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
    useFontsLoadedListener(resizeTextarea);
    return React11.createElement("textarea", _extends({}, props, {
      onChange: handleChange,
      ref
    }));
  }
};
var index2 = React11.forwardRef(TextareaAutosize);

// node_modules/@consta/uikit/__internal__/src/components/TextField/helpers.js
var sizeMap = { xs: "xs", s: "s", m: "s", l: "m" };
var getValueByStepArray = function(a, b, c, d, e) {
  var f = +(null !== b && void 0 !== b ? b : c);
  if ("string" != typeof b)
    return "undefined" == typeof c ? 0 : +c;
  if (f < a[0])
    return a[0];
  if (f > a[a.length - 1])
    return a[a.length - 1];
  if (!e && f === a[0] || e && f === a[a.length - 1])
    return f;
  for (var g = 0; g < a.length; g++)
    if (f === a[g] || a[g] < f && a[g + 1] > f)
      return a[g + (e ? 1 : -1)];
  return 0;
};
var getValueByStepNumber = function(a, b, c, d, e) {
  var f, g = +c, h = +d, i = ("string" == typeof b ? +b : 0) + +a * (e ? 1 : -1);
  return !Number.isNaN(g) && i <= g ? g : !Number.isNaN(h) && i >= h ? h : +i.toFixed(+(null === (f = (+a).toString().split(".")[1]) || void 0 === f ? void 0 : f.length) || 0);
};
var getIncrementFlag = function(a) {
  return "ArrowUp" !== (null === a || void 0 === a ? void 0 : a.key) && "ArrowDown" !== (null === a || void 0 === a ? void 0 : a.key) ? null : "ArrowUp" === (null === a || void 0 === a ? void 0 : a.key);
};
var getTypeForRender = function(a, b) {
  return "password" === a ? b ? "text" : "password" : a;
};
var getValueByStep = function(a, b, c, d, e) {
  return (Array.isArray(a) ? getValueByStepArray(a, b, d, e, c) : getValueByStepNumber(a, b, d, e, c)).toString();
};

// node_modules/@consta/uikit/__internal__/src/components/TextField/types.js
var textFieldPropSize = ["m", "xs", "s", "l"];
var textFieldPropSizeDefault = textFieldPropSize[0];
var textFieldPropView = ["default", "clear"];
var textFieldPropViewDefault = textFieldPropView[0];
var textFieldPropForm = ["default", "defaultClear", "defaultBrick", "brick", "brickDefault", "brickClear", "brickRound", "round", "roundClear", "roundBrick", "clearRound", "clearDefault", "clearBrick", "clearClear"];
var textFieldPropFormDefault = textFieldPropForm[0];
var textFieldPropWidth = ["default", "full"];
var textFieldPropWidthDefault = textFieldPropWidth[0];

// node_modules/@consta/uikit/__internal__/src/components/TextField/TextField.js
var _excluded2 = ["className", "type", "value", "onChange", "id", "name", "rows", "cols", "minRows", "maxRows", "inputRef", "maxLength", "disabled", "size", "view", "form", "state", "status", "width", "onBlur", "onFocus", "autoFocus", "placeholder", "leftSide", "rightSide", "autoComplete", "withClearButton", "incrementButtons", "max", "min", "readOnly", "required", "step", "tabIndex", "ariaLabel", "label", "labelIcon", "inputContainerRef", "labelPosition", "caption", "iconSize", "focused", "onClick", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture"];
var COMPONENT_NAME = "TextField";
var cnTextField = cn("TextField");
var TextFieldRender = function(a, b) {
  var c = import_react4.default.useRef(null), d = import_react4.default.useRef(null), e = usePropsHandler(COMPONENT_NAME, a, c), f = e.className, g = e.type, h = void 0 === g ? "text" : g, i = e.value, j = e.onChange, k = e.id, l = e.name, m = e.rows, n = e.cols, o = e.minRows, p = e.maxRows, q = e.inputRef, r = e.maxLength, s = e.disabled, t = e.size, u = void 0 === t ? textFieldPropSizeDefault : t, v = e.view, w = void 0 === v ? textFieldPropViewDefault : v, x = e.form, y = void 0 === x ? textFieldPropFormDefault : x, z = e.state, A = e.status, B = e.width, C = void 0 === B ? textFieldPropWidthDefault : B, D = e.onBlur, E = e.onFocus, F = e.autoFocus, G = void 0 !== F && F, H = e.placeholder, I = e.leftSide, J = e.rightSide, K = e.autoComplete, L = e.withClearButton, M = e.incrementButtons, N = e.max, O = e.min, P = e.readOnly, Q = e.required, R = e.step, S = void 0 === R ? 1 : R, T = e.tabIndex, U = e.ariaLabel, V = e.label, W = e.labelIcon, X = e.inputContainerRef, Y = e.labelPosition, Z = void 0 === Y ? "top" : Y, $ = e.caption, _ = e.iconSize, aa = e.focused, ba = e.onClick, ca = e.onKeyDown, da = e.onKeyDownCapture, ea = e.onKeyPress, fa = e.onKeyPressCapture, ga = e.onKeyUp, ha = e.onKeyUpCapture, ia = _objectWithoutProperties(e, _excluded2), ja = useFlag(G), ka = _slicedToArray(ja, 2), la = ka[0], ma = ka[1], na = useFlag(false), oa = _slicedToArray(na, 2), pa = oa[0], qa = oa[1], ra = useMutableRef(i), sa = useMutableRef(ba), ta = useMutableRef(j), ua = (0, import_react4.useCallback)(function(a2) {
    var b2;
    a2.stopPropagation(), qa.toggle(), null === (b2 = d.current) || void 0 === b2 ? void 0 : b2.focus();
  }, []), va = I, wa = J, xa = isString(I), ya = isString(J), za = getByMap(sizeMap, u, _), Aa = useSortSteps({ step: S, min: +O, max: +N }), Ba = (0, import_react4.useCallback)(function(a2) {
    var b2;
    s || (null === (b2 = ta.current) || void 0 === b2 ? void 0 : b2.call(ta, { e: a2, id: k, name: l, value: a2.target.value || null }));
  }, [k, l, s]), Ca = function(a2) {
    ma.on(), null === E || void 0 === E ? void 0 : E(a2);
  }, Da = { className: cnTextField("Input"), value: i || "", onChange: Ba, maxLength: r, disabled: s, onBlur: function handleBlur(a2) {
    ma.off(), null === D || void 0 === D ? void 0 : D(a2);
  }, onFocus: Ca, autoFocus: G, placeholder: H, autoComplete: K, readOnly: P, tabIndex: T, name: l, onKeyDownCapture: da, onKeyPress: ea, onKeyPressCapture: fa, onKeyUp: ga, onKeyUpCapture: ha, id: k ? k.toString() : "", "aria-label": U }, Ea = pa ? IconEyeClose : IconEye, Fa = { rows: m, cols: n, minRows: o || m, maxRows: p || m, ref: useForkRef([d, q]) }, Ga = { type: getTypeForRender(h, pa), max: N, min: O, step: Array.isArray(Aa) ? 0 : Aa, onKeyDown: function onKeyDown(a2) {
    var b2 = getIncrementFlag(a2);
    if (null === ca || void 0 === ca ? void 0 : ca(a2), "number" === h && "boolean" == typeof b2 && !s) {
      var c2;
      a2.preventDefault(), null === (c2 = ta.current) || void 0 === c2 ? void 0 : c2.call(ta, { e: a2, id: k, name: l, value: getValueByStep(Aa, i, b2, O, N) });
    }
  }, ref: useForkRef([d, q]) }, Ha = (0, import_react4.useCallback)(function(a2) {
    var b2;
    null === (b2 = ta.current) || void 0 === b2 ? void 0 : b2.call(ta, { e: a2, id: k, name: l, value: null });
  }, []), Ia = function(a2) {
    var b2, c2 = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
    null === (b2 = ta.current) || void 0 === b2 ? void 0 : b2.call(ta, { e: a2, id: k, name: l, value: getValueByStep(Aa, i, c2, O, N) });
  }, Ja = { onClick: (0, import_react4.useCallback)(function(a2) {
    var b2, c2;
    null === (b2 = d.current) || void 0 === b2 ? void 0 : b2.focus(), null === (c2 = sa.current) || void 0 === c2 ? void 0 : c2.call(sa, a2);
  }, []) };
  return (0, import_react4.useEffect)(function() {
    if ("password" === h && d.current) {
      var a2;
      d.current.selectionStart = (null === (a2 = ra.current) || void 0 === a2 ? void 0 : a2.length) || 0;
    }
  }, [pa]), import_react4.default.createElement("div", Object.assign({ className: cnTextField({ labelPosition: Z, size: u, view: w, width: C }, [f]), ref: useForkRef([b, c]) }, Ja, ia), V && import_react4.default.createElement(FieldLabel, { as: "label", htmlFor: null === k || void 0 === k ? void 0 : k.toString(), icon: W, required: Q, className: cnTextField("Label", { labelPosition: Z }), size: u }, V), import_react4.default.createElement("div", { className: cnTextField("Body") }, import_react4.default.createElement("div", { ref: X, className: cnTextField("InputContainer", { view: w, form: y, status: A || z, disabled: s, type: h, focus: la || aa, withValue: !!i }) }, va && import_react4.default.createElement("div", { className: cnTextField("Side", { position: "left", type: xa ? "string" : "icon" }), title: "string" == typeof I ? I : void 0 }, xa ? I : import_react4.default.createElement(va, { className: cnTextField("Icon"), size: za })), "textarea" === h ? import_react4.default.createElement(index2, Object.assign({}, Da, Fa)) : import_react4.default.createElement("input", Object.assign({}, Da, Ga)), "number" === h && (void 0 === M || M) && import_react4.default.createElement("div", { className: cnTextField("Counter") }, import_react4.default.createElement("button", { onFocus: Ca, onClick: function(a2) {
    return Ia(a2, true);
  }, type: "button", className: cnTextField("CounterButton") }, import_react4.default.createElement(IconSelectOpen, { size: "xs" })), import_react4.default.createElement("button", { onFocus: Ca, onClick: function(a2) {
    return Ia(a2, false);
  }, type: "button", className: cnTextField("CounterButton") }, import_react4.default.createElement(IconSelect, { size: "xs" }))), i && L && "number" !== h && import_react4.default.createElement("button", { type: "button", disabled: s, onClick: Ha, className: cnTextField("ClearButton") }, import_react4.default.createElement(IconClose, { size: "xs", className: cnTextField("ClearButtonIcon") })), "password" === h && i && import_react4.default.createElement("button", { className: cnTextField("ClearButton"), type: "button", onClick: ua }, import_react4.default.createElement(Ea, { className: cnTextField("Icon"), size: za })), wa && "number" !== h && "password" !== h && import_react4.default.createElement("div", { className: cnTextField("Side", { position: "right", type: ya ? "string" : "icon" }), title: "string" == typeof J ? J : void 0 }, ya ? J : import_react4.default.createElement(wa, { className: cnTextField("Icon"), size: za }))), $ && import_react4.default.createElement(FieldCaption, { className: cnTextField("Caption"), status: A || z }, $)));
};
var TextField = (0, import_react4.forwardRef)(TextFieldRender);

// node_modules/@consta/uikit/__internal__/src/components/Slider/useSliderStationing.js
var import_react6 = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/components/Slider/useSlider/useSlider.js
var import_react5 = __toESM(require_react());
var COUNT_STEPS = 250;
function useSlider(a) {
  var b = a.disabled, c = a.range, d = a.value, f = a.min, g = a.max, h = a.step, i = void 0 === h ? 1 : h, j = a.onChange, k = a.onAfterChange, l = a.sliderRef, m = a.containerRef, n = a.buttonRefs, o = g > f ? f : 0, p = g > f ? g : 100, q = (0, import_react5.useMemo)(function() {
    if (!Array.isArray(i) && 1 <= i) {
      var a2 = Math.abs((p - o) / COUNT_STEPS);
      return a2 > i ? a2 - a2 % i : Math.max(a2, i);
    }
    return i;
  }, [g, f, i]), r = (0, import_react5.useState)(d), s = _slicedToArray(r, 2), t = s[0], u = s[1], v = (0, import_react5.useState)(null), w = _slicedToArray(v, 2), x = w[0], y = w[1], z = (0, import_react5.useState)(null), A = _slicedToArray(z, 2), B = A[0], C = A[1], D = (0, import_react5.useState)(null), E = _slicedToArray(D, 2), F = E[0], G = E[1], H = (0, import_react5.useRef)(null), I = useComponentSize(l), J = useMutableRef(t);
  useClickOutside({ isActive: true, ignoreClicksInsideRefs: [m], handler: function handler() {
    G(null), H.current = null;
  } }), (0, import_react5.useEffect)(function() {
    b && K("remove");
  }, [b]);
  var K = function(a2) {
    var b2 = "add" === a2 ? "addEventListener" : "removeEventListener";
    document[b2]("mouseup", P), document[b2]("touchend", P), document[b2]("mousemove", O), document[b2]("touchmove", O);
  };
  (0, import_react5.useEffect)(function() {
    Array.isArray(t) ? (M(t[0], 0), M(t[1], 1)) : M(t, 0);
  }, [t]), (0, import_react5.useEffect)(function() {
    JSON.stringify(d) !== JSON.stringify(t) && (Array.isArray(d) && Array.isArray(t) ? (-1 === t.indexOf(d[0]) || -1 === t.indexOf(d[1])) && (u(d), M(getActiveValue(d, H.current), 0)) : (u(d), M(getActiveValue(d, H.current), 0)), G(null), H.current = null);
  }, [d]), (0, import_react5.useEffect)(function() {
    null === j || void 0 === j ? void 0 : j({ value: Array.isArray(t) ? [getNewValue(t[0], t[0], i, f, g, 0), getNewValue(t[1], t[1], i, f, g, 1)] : getNewValue(t, t, i, f, g, 0) });
  }, [i]), (0, import_react5.useEffect)(function() {
    if ("undefined" != typeof d) {
      var b2 = isRangeParams2(a) ? [getValidValue(a.value[0], f, g, i), getValidValue(a.value[1], f, g, i)] : getValidValue(a.value, f, g, i);
      u(b2);
    }
  }, [c, typeof d]), (0, import_react5.useEffect)(function() {
    if (isRangeParams2(a) && a.value[0] > a.value[1]) {
      var b2, c2 = [a.value[1], a.value[1]];
      null === (b2 = a.onChange) || void 0 === b2 ? void 0 : b2.call(a, { value: c2 });
    }
  }, []);
  var L = (0, import_react5.useCallback)(function(a2, c2) {
    if (!b && "number" == typeof c2 && "undefined" != typeof t) {
      a2.preventDefault(), a2.stopPropagation();
      var d2 = Array.isArray(i) ? 1 : i || 1, e = false, h2 = getActiveValue(t, c2);
      switch (a2.key) {
        case "ArrowUp":
        case "ArrowRight":
        case "+":
          e = true;
          break;
        case "ArrowLeft":
        case "ArrowDown":
        case "-":
          e = true, d2 *= -1;
          break;
        default:
      }
      if (e) {
        Array.isArray(i) && i.forEach(function(a3, b2) {
          "number" == typeof c2 && h2 === a3 && (0 <= d2 ? 0 === b2 ? d2 = i[1] - o : d2 = ("undefined" == typeof i[b2 + 1] ? p : i[b2 + 1]) - a3 : 0 === b2 ? d2 = o - i[1] : d2 = ("undefined" == typeof i[b2 - 1] ? o : i[b2 - 1]) - a3);
        });
        var k2 = getNewValue(h2 + d2, t, i, f, g, c2);
        u(k2), M(getActiveValue(k2, c2), c2), null === j || void 0 === j ? void 0 : j({ e: a2, value: k2 });
      }
    }
  }, [t, i, f, g]), M = function(a2, b2) {
    if (l.current && "number" == typeof b2) {
      var c2 = n[b2].current || l.current, d2 = l.current.getBoundingClientRect(), e = d2.x, f2 = d2.width, g2 = { y: c2.offsetTop + c2.offsetHeight + 50, x: e + Math.abs((a2 - o) / (p - o)) * f2 };
      0 === b2 ? y(g2) : C(g2);
    }
  }, N = function(a2) {
    if ("number" != typeof H.current)
      return d;
    var b2 = trackPosition(a2), c2 = getValueByPosition(b2, l, o, p, i);
    return getNewValue(c2, t, q, f, g, H.current);
  }, O = function(a2, b2) {
    var c2 = b2 || H.current;
    if ("number" == typeof c2) {
      var d2 = N(a2), e = getActiveValue(t, c2), f2 = getActiveValue(d2, c2);
      u(d2), e !== f2 && (null === k || void 0 === k ? void 0 : k({ e: a2, value: d2 }));
    }
  };
  (0, import_react5.useEffect)(function() {
    if (isRangeParams2(a)) {
      var b2;
      null === (b2 = a.value) || void 0 === b2 ? void 0 : b2.forEach(function(a2, b3) {
        M(getActiveValue(a2, H.current), 0 === b3 ? 0 : 1);
      });
    }
    isNotRangeParams2(a) && M(getActiveValue(d, H.current), 0), H.current = null;
  }, [I, typeof d]);
  var P = (0, import_react5.useCallback)(function(b2) {
    if (K("remove"), isRangeParams2(a) && Array.isArray(J.current)) {
      var c2, d2 = _toConsumableArray(J.current).sort(function(c3, a2) {
        return +c3 - +a2;
      });
      null === (c2 = a.onChange) || void 0 === c2 ? void 0 : c2.call(a, { e: b2, value: d2 });
    }
    if (isNotRangeParams2(a) && "number" == typeof J.current) {
      var e;
      null === (e = a.onChange) || void 0 === e ? void 0 : e.call(a, { e: b2, value: J.current });
    }
    G(null), H.current = null;
  }, [J, d, j, O]), Q = (0, import_react5.useCallback)(function(a2) {
    b || (G(a2), H.current = a2, K("add"));
  }, [t, d, j, O, b]);
  return { onKeyPress: L, onFocus: function onFocus(a2, b2) {
    G(b2), H.current = b2;
  }, handlePress: Q, onSliderClick: function onSliderClick(b2) {
    if (isNotRangeParams2(a)) {
      var c2 = getValueByPosition({ x: b2.pageX, y: b2.pageY }, l, o, p, i), e = getNewValue(c2, t, q, f, g, H.current);
      e !== d && (u(e), M(getActiveValue(e, 0), 0), null === j || void 0 === j ? void 0 : j({ e: b2, value: e }));
    }
  }, activeButton: F, popoverPosition: [x, B], currentValue: Array.isArray(t) ? t : [t] };
}

// node_modules/@consta/uikit/__internal__/src/components/Slider/useSliderStationing.js
var getSteps = function(a, b, c) {
  var d = [], e = b;
  if (Array.isArray(a))
    for (var f = 0; f < a.length - 1; f++)
      d.push({ min: a[f], max: a[f + 1] });
  else
    for (var g = b; g < c; g += a)
      d.push({ min: e, max: e + (c - g < a ? c - g : a) }), e += a;
  return d;
};
var useSliderStationing = function(a, b, c, d, e) {
  var f = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1, g = 6 < arguments.length ? arguments[6] : void 0, h = 7 < arguments.length ? arguments[7] : void 0, i = (0, import_react6.useState)([]), j = _slicedToArray(i, 2), k = j[0], l = j[1], m = (0, import_react6.useState)([]), n = _slicedToArray(m, 2), o = n[0], p = n[1], q = useComponentSize(h), r = q.width, s = q.height, t = (0, import_react6.useMemo)(function() {
    if (!Array.isArray(f)) {
      var a2 = Math.abs((c - b) / COUNT_STEPS);
      return a2 > f ? a2 - a2 % f : Math.max(a2, f);
    }
    return f;
  }, [c, b, f]), u = function() {
    var f2 = [], g2 = Math.abs(c - b);
    if ("undefined" == typeof a)
      f2.push({ width: 100, active: false });
    else if ("default" !== d)
      "undefined" != typeof t && getSteps(t, b, c).forEach(function(b2) {
        f2.push({ width: 100 * Math.abs(b2.max - b2.min) / g2, active: ("number" == typeof a || Array.isArray(a)) && (e && Array.isArray(a) ? b2.max > Math.min.apply(Math, _toConsumableArray(a)) && b2.min < Math.max.apply(Math, _toConsumableArray(a)) : b2.max <= a) });
      });
    else if (!Array.isArray(a) && "number" == typeof a)
      f2.push({ width: 100 * (1 - (c - a) / g2), active: true }), f2.push({ width: 100 * ((c - a) / g2), active: false });
    else if (Array.isArray(a) && a) {
      var h2 = [Math.min.apply(Math, _toConsumableArray(a)), Math.max.apply(Math, _toConsumableArray(a))], j2 = h2[0], k2 = h2[1], l2 = [j2, k2];
      l2.unshift(b), l2.push(c);
      for (var m2 = 0; m2 < l2.length - 1; m2++)
        f2.push({ width: 100 * ((l2[m2 + 1] - l2[m2]) / g2), active: l2[m2] >= j2 && l2[m2 + 1] <= k2 });
    } else
      f2.push({ width: 100, active: false });
    return f2;
  }, v = function(a2) {
    return a2 < b ? b : a2 > c ? c : a2;
  }, w = (0, import_react6.useCallback)(function() {
    var d2 = Math.abs(c - b), e2 = 0, f2 = [];
    return g.forEach(function(b2, g2) {
      b2.current && b2.current.offsetWidth && h.current && h.current.offsetWidth && (e2 = d2 * b2.current.offsetWidth / (2 * h.current.offsetWidth) || 0), ("number" == typeof a || Array.isArray(a)) && f2.push("number" == typeof a ? 100 * (1 - (c - v(a) + e2) / d2) : 100 * (1 - (c - v(a[g2]) + e2) / d2));
    }), f2;
  }, [g, h]);
  return (0, import_react6.useEffect)(function() {
    l(u()), p(w());
  }, [a, b, c, e, t, d, r, s]), { lineSizes: k, buttonPositions: o };
};

// node_modules/@consta/uikit/__internal__/src/components/Slider/useSlider/helper.js
var isRangeParams2 = function(a) {
  return !!a.range;
};
var isNotRangeParams2 = function(a) {
  return !a.range;
};
var trackPosition = function(a) {
  return "clientX" in a ? { x: a.clientX, y: a.clientY } : { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
};
var getActiveValue = function(a, b) {
  return Array.isArray(a) ? a["number" == typeof b ? b : 0] : a;
};
var getValidValue = function(a, b, c, d) {
  if ("number" == typeof a) {
    if (a >= c)
      return c;
    if (a <= b)
      return b;
    if (!Array.isArray(d)) {
      var e = null === d || void 0 === d ? void 0 : d.toString().split(".")[1], f = d || 1;
      if (1 > Math.abs(a))
        return +a.toFixed(e ? e.length : 0);
      if (a < b)
        return b;
      for (var g = b; g <= c; g += f)
        if (a >= g && a < g + f)
          return +(a < g + f / 2 ? g : g + f).toFixed(e ? e.length : 0);
      return c;
    }
    var h = a;
    return d.forEach(function(e2, f2) {
      var g2 = b, i = c;
      0 === f2 ? i = d[f2 + 1] : f2 === d.length - 1 ? (g2 = e2, i = c) : (i = d[f2 + 1], g2 = e2), a <= i && a >= g2 && ((i + g2) / 2 > a ? h = g2 : h = i);
    }), h;
  }
  return a;
};
var isValidValue = function(a, b, c, d) {
  return getValidValue(a, b, c, d) === a;
};
var getValueByPosition = function(a, b, c, d, e) {
  if (b.current && a) {
    var f = b.current.getBoundingClientRect(), g = f.x, h = f.width, i = Math.abs(d - c), j = c + (a.x - g) * i / h;
    return getValidValue(j, c, d, e);
  }
  return 0;
};
var getNewValue = function(a, b, c, d, e, f) {
  var g = getValidValue(analyzeDivisionValue(a, c, d, e), d, e, c);
  return Array.isArray(b) ? 1 === f ? [b[0], g] : [g, b[1]] : g;
};
var analyzeDivisionValue = function(a, b, c, d) {
  var e = a;
  if (Array.isArray(b)) {
    var f = getSteps(b, c, d);
    f.forEach(function(b2) {
      a && b2.min < a && b2.max >= a && ((b2.max + b2.min) / 2 > a ? e = b2.min : e = b2.max);
    });
  } else {
    if (a >= d)
      return d;
    if (a <= c)
      return c;
    var g = (a - c) % b;
    e = g > b / 2 ? b - g + a : a - g;
  }
  return e;
};

// node_modules/@consta/uikit/__internal__/src/components/Slider/SliderInput/SliderInput.js
var _excluded3 = ["value", "onChange", "min", "max", "step", "size", "className"];
var cnSliderInput = cn("SliderInput");
var SliderInput = function(a) {
  var b = a.value, c = a.onChange, d = a.min, f = void 0 === d ? 0 : d, g = a.max, h = void 0 === g ? 100 : g, i = a.step, j = void 0 === i ? 1 : i, k = a.size, l = void 0 === k ? "m" : k, m = a.className, n = _objectWithoutProperties(a, _excluded3), o = (0, import_react7.useState)((null === b || void 0 === b ? void 0 : b.toString()) || null), p = _slicedToArray(o, 2), q = p[0], r = p[1];
  return (0, import_react7.useEffect)(function() {
    return r((null === b || void 0 === b ? void 0 : b.toString()) || null);
  }, [b]), import_react7.default.createElement(TextField, Object.assign({ onBlur: function commitChange() {
    var a2 = getValidValue(+q, f, h, j);
    null === c || void 0 === c ? void 0 : c({ value: a2 }), r(a2.toString());
  }, type: "number", min: f, max: h, step: j, size: l, className: cnSliderInput({ size: l }, [m]), onChange: function handleChange(a2) {
    var b2 = a2.e, d2 = a2.value;
    r(d2), isValidValue(+d2, f, h, j) && (null === c || void 0 === c ? void 0 : c({ value: +d2, e: b2 }));
  }, value: q }, n));
};

// node_modules/@consta/uikit/__internal__/src/components/Slider/SliderLine/SliderLine.js
var import_react8 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Slider/SliderLine/SliderLine.css";
var _excluded4 = ["hovered", "onHover", "lines", "disabled", "view"];
var cnSliderLine = cn("SliderLine");
var SliderLine = function(a) {
  var b = a.hovered, c = a.onHover, d = a.lines, e = a.disabled, f = a.view, g = void 0 === f ? "default" : f, h = _objectWithoutProperties(a, _excluded4), i = function(a2, b2) {
    !e && a2 && (null === c || void 0 === c ? void 0 : c(b2));
  };
  return import_react8.default.createElement("div", Object.assign({ className: cnSliderLine({ view: g }) }, h), d.map(function(a2, c2) {
    return import_react8.default.createElement("div", { onMouseEnter: function onMouseEnter() {
      return i(a2.active, true);
    }, onMouseLeave: function onMouseLeave() {
      return i(a2.active, false);
    }, className: cnSliderLine("Line", { active: a2.active, hovered: a2.active && b, disabled: e }), key: cnSliderLine({ index: c2 }), style: _defineProperty({}, "--slider-line-size", "".concat(a2.width, "%")) });
  }));
};

// node_modules/@consta/uikit/__internal__/src/components/Slider/SliderPoint/SliderPoint.js
var import_react10 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Slider/SliderPoint/SliderPoint.css";

// node_modules/@consta/uikit/__internal__/src/components/Tooltip/Tooltip.js
var import_react9 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Tooltip/Tooltip.css";

// node_modules/@consta/uikit/__internal__/src/mixs/MixPopoverArrow/MixPopoverArrow.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/mixs/MixPopoverArrow/MixPopoverArrow.css";
var cnMixPopoverArrow = cn("MixPopoverArrow");

// node_modules/@consta/uikit/__internal__/src/components/Tooltip/Tooltip.js
var _excluded5 = ["children", "size", "className", "status", "onSetDirection", "style", "offset"];
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
var ARROW_SIZE = 6;
var ARROW_OFFSET = 8;
var cnTooltip = cn("Tooltip");
var tooltipPropSizes = ["m", "s", "l"];
var tooltipPropSizesDefault = tooltipPropSizes[0];
function renderChildren(a) {
  return "string" == typeof a || "number" == typeof a ? import_react9.default.createElement(Text, { size: "xs" }, a) : a;
}
var Tooltip = import_react9.default.forwardRef(function(a, b) {
  var c, d = a.children, e = a.size, f = void 0 === e ? tooltipPropSizesDefault : e, g = a.className, h = a.status, i = a.onSetDirection, j = a.style, k = a.offset, l = void 0 === k ? 0 : k, m = _objectWithoutProperties(a, _excluded5), n = useTheme(), o = n.theme, p = (0, import_react9.useState)(), q = _slicedToArray(p, 2), r = q[0], s = q[1], t = (0, import_react9.useMemo)(function() {
    var a2 = h ? _objectSpread(_objectSpread({}, o), {}, { color: { primary: o.color.accent, accent: o.color.accent, invert: o.color.primary } }) : _objectSpread(_objectSpread({}, o), {}, { color: { primary: o.color.invert, accent: o.color.accent, invert: o.color.primary } });
    return { theme: a2, themeClassNames: generateThemeClassNames(a2) };
  }, [generateDeps(o), h]);
  return import_react9.default.createElement(ThemeContext.Provider, { value: t }, import_react9.default.createElement(Popover, Object.assign({}, m, { arrowOffset: ARROW_OFFSET + ARROW_SIZE, offset: 10 + l, onSetDirection: function onSetDirection(a2) {
    i && i(a2), s(a2);
  }, ref: b, className: cnTooltip({ status: h }, [g]), style: _objectSpread((c = {}, _defineProperty(c, "--popover-arrow-size", "".concat(ARROW_SIZE, "px")), _defineProperty(c, "--popover-arrow-offset", "".concat(ARROW_OFFSET, "px")), c), j) }), import_react9.default.createElement("div", { className: cnTooltip("Background") }), import_react9.default.createElement("div", { className: cnTooltip("Arrow", [cnMixPopoverArrow({ direction: r })]) }), import_react9.default.createElement("div", { className: cnTooltip("Content", { size: f }) }, renderChildren(d))));
});

// node_modules/@consta/uikit/__internal__/src/components/Slider/SliderPoint/SliderPoint.js
var _excluded6 = ["hovered", "onHover", "value", "position", "disabled", "withTooltip", "focused", "popoverPosition", "buttonRef", "active", "handlePress", "onKeyPress", "tooltipFormatter", "buttonLabel", "onFocus", "tooltipZIndex"];
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
var cnSliderPoint = cn("SliderPoint");
var getTooltipPosition = function(a, b) {
  if (a && b && b.current) {
    var c = b.current.getBoundingClientRect(), d = c.y, e = c.height;
    return { x: Math.round(a.x), y: Math.round(d + e / 2) };
  }
  return { x: 0, y: 0 };
};
var SliderPoint = function(a) {
  var b = a.hovered, c = a.onHover, d = a.value, e = a.position, f = a.disabled, g = a.withTooltip, h = a.focused, i = a.popoverPosition, j = a.buttonRef, k = a.active, l = a.handlePress, m = a.onKeyPress, n = a.tooltipFormatter, o = a.buttonLabel, p = a.onFocus, q = a.tooltipZIndex, r = _objectWithoutProperties(a, _excluded6), s = useFlag(false), t = _slicedToArray(s, 2), u = t[0], v = t[1], w = useTheme(), x = w.theme, y = _objectSpread2(_objectSpread2({}, x), {}, { color: { primary: x.color.invert, accent: x.color.accent, invert: x.color.primary } }), z = generateThemeClassNames(y), A = function(a2) {
    f || (null === p || void 0 === p ? void 0 : p(a2, o), v.on());
  }, B = function(a2) {
    f || (null === c || void 0 === c ? void 0 : c(a2), a2 && v.on(), a2 && v.on(), !a2 && !h && v.off());
  }, C = (0, import_react10.useRef)(null), D = getTooltipPosition(i, j || C);
  return (0, import_react10.useEffect)(function() {
    h ? v.on() : v.off();
  }, [h]), import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement("button", Object.assign({ type: "button", "aria-label": "".concat(o, "-button"), className: cnSliderPoint({ hovered: b, disabled: f, active: k }, [f ? "" : cnMixFocus()]), onMouseOver: function onMouseOver() {
    return B(true);
  }, onMouseOut: function onMouseOut() {
    return B(false);
  }, onMouseDown: function onMouseDown() {
    return null === l || void 0 === l ? void 0 : l(o);
  }, onTouchStart: function onTouchStart() {
    return null === l || void 0 === l ? void 0 : l(o);
  }, onKeyDown: function onKeyDown(a2) {
    return null === m || void 0 === m ? void 0 : m(a2, o);
  }, onFocus: A, onBlur: function handleBlur(a2) {
    f || (null === p || void 0 === p ? void 0 : p(a2, null), v.off());
  }, onClick: A, ref: useForkRef([j, C]), tabIndex: 0, style: _defineProperty({}, "--slider-button-left", "".concat(e, "%")) }, r)), u && g && i && import_react10.default.createElement(ThemeContext.Provider, { value: { theme: y, themeClassNames: z } }, import_react10.default.createElement(Tooltip, { position: D, className: cnSliderPoint("Tooltip"), direction: "downCenter", possibleDirections: ["leftCenter", "rightCenter", "downCenter", "leftDown", "rightDown", "upCenter"], style: { zIndex: q }, offset: 10 }, n ? n(d) : d)));
};

// node_modules/@consta/uikit/__internal__/src/components/Slider/Slider.js
var _excluded7 = ["min", "max", "onChange", "onAfterChange", "value", "step", "disabled", "size", "view", "leftSide", "rightSide", "withTooltip", "range", "label", "labelIcon", "status", "caption", "tooltipFormatter", "className", "style"];
var cnSlider = cn("Slider");
var sizeMap2 = { xs: "xs", s: "s", m: "m", l: "m" };
var COMPONENT_NAME2 = "Slider";
var SliderRender = function(a, b) {
  var c = (0, import_react11.useRef)(null), d = usePropsHandler(COMPONENT_NAME2, a, c), e = d.min, f = void 0 === e ? 0 : e, g = d.max, h = void 0 === g ? 100 : g, i = d.onChange, j = d.onAfterChange, k = d.value, l = d.step, m = d.disabled, n = void 0 !== m && m, o = d.size, p = void 0 === o ? defaultPropSize : o, q = d.view, r = void 0 === q ? "default" : q, s = d.leftSide, t = d.rightSide, u = d.withTooltip, v = d.range, w = void 0 !== v && v, x = d.label, y = d.labelIcon, z = d.status, A = d.caption, B = d.tooltipFormatter, C = void 0 === B ? defaultTooltipFormatter : B, D = d.className, E = d.style, F = _objectWithoutProperties(d, _excluded7), G = (0, import_react11.useState)(), H = _slicedToArray(G, 2), I = H[0], J = H[1], K = useFlag(false), L = _slicedToArray(K, 2), M = L[0], N = L[1], O = N.on, P = N.off, Q = (0, import_react11.useRef)(null), R = (0, import_react11.useRef)(null), S = (0, import_react11.useRef)(null), T = useSortSteps({ step: getValidStep(f, h, l), min: f, max: h }), U = l ? T : Math.abs((h - f) / 100), V = getIcon(t), W = getIcon(s), X = sizeMap2[p], Y = useSlider({ disabled: n, range: w, value: k, min: f, max: h, step: U, onChange: i, onAfterChange: j, sliderRef: c, containerRef: Q, buttonRefs: [R, S] }), Z = Y.onKeyPress, $ = Y.onFocus, _ = Y.handlePress, aa = Y.onSliderClick, ba = Y.popoverPosition, ca = Y.activeButton, da = Y.currentValue, ea = useSliderStationing(1 === da.length ? da[0] : da, f, h, r, w, U, [R, S], c), fa = ea.lineSizes, ga = ea.buttonPositions, ha = { role: "button", tabIndex: 0, className: cnSlider("Control"), ref: c, onClick: aa }, ia = function(a2) {
    a2 ? O() : P();
  };
  return import_react11.default.createElement("div", Object.assign({ ref: useForkRef([b, Q]), className: cnSlider({ size: p }, [D]), style: E }, F), x && import_react11.default.createElement(FieldLabel, { icon: y, className: cnSlider("Label"), size: p }, x), import_react11.default.createElement("div", { className: cnSlider("Container") }, ("input" === s || W) && import_react11.default.createElement("div", { className: cnSlider("Side", { position: "left" }) }, "input" === s && import_react11.default.createElement(SliderInput, { value: getValueForInput(a, 0), onFocus: function() {
    return J(0);
  }, onBlur: function onBlur() {
    return J(void 0);
  }, onChange: getOnChandgeForInput(a, 0), size: p, min: f, inputMode: "numeric", max: getMaxForStartField(a), status: z, step: U, disabled: n }), W && import_react11.default.createElement(W, { size: null !== X && void 0 !== X ? X : void 0, view: "secondary" })), import_react11.default.createElement("div", ha, import_react11.default.createElement(SliderLine, { hovered: M || "number" == typeof ca, onHover: ia, lines: fa, disabled: n, view: r }), da.map(function(a2, b2) {
    var c2 = 1 < da.length && da[0] === da[1] && a2 === h && 0 === b2;
    return import_react11.default.createElement(SliderPoint, { hovered: M || "number" == typeof ca, buttonRef: R, popoverPosition: ba[b2], onKeyPress: Z, onFocus: $, handlePress: _, disabled: n, active: c2, position: ga[b2], focused: ca === b2 || I === b2, buttonLabel: b2, withTooltip: u, onHover: ia, tooltipFormatter: C, value: a2, role: "slider", "aria-valuemin": f, "aria-valuemax": h, "aria-valuenow": a2, tooltipZIndex: "number" == typeof (null === E || void 0 === E ? void 0 : E.zIndex) ? E.zIndex + 1 : void 0, key: cnSlider("Point", { index: b2 }) });
  })), ("input" === t || V) && import_react11.default.createElement("div", { className: cnSlider("Side", { position: "right" }) }, "input" === t && import_react11.default.createElement(SliderInput, { value: getValueForInput(a, 1), onChange: getOnChandgeForInput(a, 1), onBlur: function onBlur() {
    return J(void 0);
  }, size: p, min: getMinForEndField(a), max: h, onFocus: function() {
    return J(isRangeParams(a) ? 1 : 0);
  }, inputMode: "numeric", status: z, step: U, disabled: n }), V && import_react11.default.createElement(V, { size: X, view: "secondary" }))), A && import_react11.default.createElement(FieldCaption, { className: cnSlider("Caption"), status: z }, A));
};
var Slider = (0, import_react11.forwardRef)(SliderRender);
export {
  COMPONENT_NAME2 as COMPONENT_NAME,
  Slider
};
//# sourceMappingURL=@consta_uikit_Slider.js.map
