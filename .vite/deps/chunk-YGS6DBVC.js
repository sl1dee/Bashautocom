import {
  _arrayLikeToArray,
  _unsupportedIterableToArray
} from "./chunk-S7TJXDKL.js";

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// node_modules/@consta/uikit/__internal__/src/utils/type-guards.js
var isNotNil = function(a) {
  return a !== void 0 && null !== a;
};
var isNumber = function(a) {
  return "number" == typeof a;
};
var isString = function(a) {
  return "string" == typeof a;
};

export {
  _toConsumableArray,
  isNotNil,
  isNumber,
  isString
};
//# sourceMappingURL=chunk-YGS6DBVC.js.map
