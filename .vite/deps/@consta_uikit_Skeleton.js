import "./chunk-RER3UHKH.js";
import {
  textPropLineHeightDefault,
  textPropSizeDefault
} from "./chunk-GF7E4B5O.js";
import {
  cn
} from "./chunk-HSHLGOX7.js";
import "./chunk-PQHI3MBA.js";
import {
  require_react
} from "./chunk-PSZ65TEE.js";
import {
  __toESM
} from "./chunk-TCQZMY3T.js";

// node_modules/@consta/uikit/__internal__/src/components/Skeleton/Skeleton.js
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Skeleton/Skeleton.css";

// node_modules/@consta/uikit/__internal__/src/components/Skeleton/SkeletonBrick/SkeletonBrick.js
var import_react = __toESM(require_react());
var SkeletonBrick = function(a) {
  var b = a.className, c = a.width, d = void 0 === c ? "100%" : c, e = a.height;
  return import_react.default.createElement("div", { className: cnSkeleton(null, [b]), style: { width: d, height: e } });
};

// node_modules/@consta/uikit/__internal__/src/components/Skeleton/SkeletonCircle/SkeletonCircle.js
var import_react2 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Skeleton/SkeletonCircle/SkeletonCircle.css";
var cnSkeletonCircle = cn("SkeletonCircle");
var SkeletonCircle = function(a) {
  var b = a.className, c = a.size;
  return import_react2.default.createElement("div", { className: cnSkeletonCircle(null, [cnSkeleton(), b]), style: { width: c, height: c } });
};

// node_modules/@consta/uikit/__internal__/src/components/Skeleton/SkeletonText/SkeletonText.js
var import_react3 = __toESM(require_react());
import "C:/Users/Никита/WebstormProjects/ambity/bashautocom/node_modules/@consta/uikit/__internal__/src/components/Skeleton/SkeletonText/SkeletonText.css";
var cnSkeletonText = cn("SkeletonText");
var getRowWidth = function(a, b) {
  if (a === b - 1)
    return "50%";
  switch (a % 3) {
    case 0:
      return "100%";
    case 1:
      return "85%";
    case 2:
      return "93%";
  }
  return "100%";
};
var SkeletonText = function(a) {
  var b = a.className, c = a.rows, d = a.fontSize, e = void 0 === d ? textPropSizeDefault : d, f = a.lineHeight, g = void 0 === f ? textPropLineHeightDefault : f, h = "var(--size-text-".concat(e, ")"), i = "var(--line-height-text-".concat(g, ")");
  return import_react3.default.createElement("div", { className: cnSkeletonText(null, [b]), key: c }, Array(c).fill(null).map(function(a2, b2) {
    return import_react3.default.createElement("div", { key: b2, className: cnSkeletonText("Row"), style: { fontSize: h, height: i } }, import_react3.default.createElement(SkeletonBrick, { width: getRowWidth(b2, c), height: h }));
  }));
};

// node_modules/@consta/uikit/__internal__/src/components/Skeleton/Skeleton.js
var cnSkeleton = cn("Skeleton");
export {
  SkeletonBrick,
  SkeletonCircle,
  SkeletonText,
  cnSkeleton
};
//# sourceMappingURL=@consta_uikit_Skeleton.js.map
