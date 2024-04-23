import {
  __commonJS
} from "./chunk-TCQZMY3T.js";

// node_modules/@bem-react/classname/build/classname.development.js
var require_classname_development = __commonJS({
  "node_modules/@bem-react/classname/build/classname.development.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function withNaming(preset) {
      var nameSpace = preset.n || "";
      var modValueDelimiter = preset.v || preset.m;
      function stringify(b, e, m, mix) {
        var entityName = e ? nameSpace + b + preset.e + e : nameSpace + b;
        var className = entityName;
        if (m) {
          var modPrefix = " " + className + preset.m;
          for (var k in m) {
            if (m.hasOwnProperty(k)) {
              var modVal = m[k];
              if (modVal === true) {
                className += modPrefix + k;
              } else if (modVal) {
                className += modPrefix + k + modValueDelimiter + modVal;
              }
            }
          }
        }
        if (mix !== void 0) {
          mix = Array.isArray(mix) ? mix : [mix];
          for (var i = 0, len = mix.length; i < len; i++) {
            var value = mix[i];
            if (!value || typeof value.valueOf() !== "string")
              continue;
            var mixes = value.valueOf().split(" ");
            for (var j = 0; j < mixes.length; j++) {
              var val = mixes[j];
              if (val !== entityName) {
                className += " " + val;
              }
            }
          }
        }
        return className;
      }
      return function cnGenerator(b, e) {
        return function(elemOrMods, elemModsOrBlockMix, elemMix) {
          if (typeof elemOrMods === "string") {
            if (typeof elemModsOrBlockMix === "string" || Array.isArray(elemModsOrBlockMix)) {
              return stringify(b, elemOrMods, void 0, elemModsOrBlockMix);
            }
            return stringify(b, elemOrMods, elemModsOrBlockMix, elemMix);
          }
          return stringify(b, e, elemOrMods, elemModsOrBlockMix);
        };
      };
    }
    var cn = withNaming({
      e: "-",
      m: "_"
    });
    exports.cn = cn;
    exports.withNaming = withNaming;
  }
});

// node_modules/@bem-react/classname/index.js
var require_classname = __commonJS({
  "node_modules/@bem-react/classname/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_classname_development();
    }
  }
});

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

export {
  _objectWithoutPropertiesLoose,
  _objectWithoutProperties,
  _defineProperty,
  require_classname
};
//# sourceMappingURL=chunk-PQHI3MBA.js.map
