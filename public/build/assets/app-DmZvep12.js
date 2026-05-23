const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ForgotPassword-CUVDXD4N.js","assets/input-B6Jcagma.js","assets/useForm-CewZFUen.js","assets/Login-BUKitM_a.js","assets/Title-CdSK7QuY.js","assets/attributes-B9LAyNIy.js","assets/FormInput-DaE8XAfm.js","assets/LangSwitch-yHqHDdv6.js","assets/Login-BiKIo4x4.css","assets/Register-s1y3tBIo.js","assets/ResetPassword-DhJgpIV9.js","assets/Gauss-BuyFAhQp.js","assets/this-CCnJv5FU.js","assets/Layout-Cc5UHZlW.js","assets/slot-DtgNxSws.js","assets/NavBar-Vq8UgN2l.js","assets/users-DktRnX1j.js","assets/config-ei04y2F2.js","assets/KapkaraIcon-Dn11Qf-8.js","assets/user-BrPL1P_t.js","assets/Footer-DuPOFG8e.js","assets/auto-CKuhSdyR.js","assets/x-C40upeuH.js","assets/minus-CSpN2i-U.js","assets/plus-H0BSzWoD.js","assets/Index-HWdOcrf5.js","assets/Index-WoCkk_YR.css","assets/Home-aN1Bdzuj.js","assets/svelte-head-Bf-10Ive.js","assets/Apps-CwS15zuk.js","assets/html-DrC0gcym.js","assets/Contact-AizbBIGE.js","assets/Contact-DVSx1NJz.css","assets/Services-nkSVLpQE.js","assets/Team-D7XI_imf.js","assets/Home-ByFzolox.js","assets/Layout-BvwSG3qv.js","assets/NavBar-G195NlxZ.js","assets/PdmIcon-6wom0yWG.js","assets/factory-BAoKQd0v.js","assets/Footer-Dlho2n6k.js","assets/HomeRequests-d5pydkPN.js","assets/Form-2kasVRt5.js","assets/FormUpload-BB8arxpK.js","assets/FormUpload-C8L8iciq.css","assets/ActionButtons-etvIfIiY.js","assets/pencil-BH3Zg3nn.js","assets/chevron-right-DtQ7WA80.js","assets/Index-Bs-n4fMA.js","assets/TableRecordsInfo-DKd_MrID.js","assets/TableRecordsInfo-BH8uR9qQ.css","assets/Show-BsM5fQEw.js","assets/RecordData-DYqTFctL.js","assets/browser-CsPBdS4r.js","assets/RecordData-CBtmWbQV.css","assets/Form-C3zUJyvX.js","assets/FormSelect-D-mEHEp8.js","assets/Index-B5VtIMAO.js","assets/Show-BW8p5gtY.js","assets/Form-CRf5P8iy.js","assets/Index-CPbiJ6LU.js","assets/Show-BTBRFzKC.js","assets/Configurator-BPyqJ6DJ.js","assets/config-DVchbvFr.js","assets/Profiles-DZvF2luD.js","assets/Form-CXTGlg42.js","assets/tr-M10fz_dJ.js","assets/tr-D5Boc3b_.css","assets/Index-DrqG_Beq.js","assets/Show-CVrdHeFq.js","assets/Form-Cy9rWDxZ.js","assets/Index-C1-ALlkH.js","assets/Show-CSrIkuKp.js","assets/Form-DVPXlFfg.js","assets/Index-Byabewps.js","assets/Show-BS0VNFnj.js","assets/Home-C6dadDzw.js","assets/Layout-CY86glXf.js","assets/NavBar-O7LwdGg7.js","assets/NavBar-CkoQFudQ.css","assets/Footer-CbRWaiOn.js"])))=>i.map(i=>d[i]);
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/build/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link2 = document.createElement("link");
      link2.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link2.as = "script";
      link2.crossOrigin = "";
      link2.href = dep;
      if (cspNonce) link2.setAttribute("nonce", cspNonce);
      document.head.appendChild(link2);
      if (isCss) return new Promise((res, rej) => {
        link2.addEventListener("load", res);
        link2.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$g = Object.prototype;
var hasOwnProperty$e = objectProto$g.hasOwnProperty;
var nativeObjectToString$1 = objectProto$g.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$e.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$f = Object.prototype;
var nativeObjectToString = objectProto$f.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var isArray$1 = Array.isArray;
var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function isObject$1(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = (function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
})();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$e = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$d = objectProto$e.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$d).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key2) {
  return object == null ? void 0 : object[key2];
}
function getNative(object, key2) {
  var value = getValue(object, key2);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root, "WeakMap");
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ (function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
})();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source2, array) {
  var index2 = -1, length = source2.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source2[index2];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = (function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
})();
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
function arrayEach(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type2 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key2, value) {
  if (key2 == "__proto__" && defineProperty) {
    defineProperty(object, key2, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key2] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$d = Object.prototype;
var hasOwnProperty$c = objectProto$d.hasOwnProperty;
function assignValue(object, key2, value) {
  var objValue = object[key2];
  if (!(hasOwnProperty$c.call(object, key2) && eq(objValue, value)) || value === void 0 && !(key2 in object)) {
    baseAssignValue(object, key2, value);
  }
}
function copyObject(source2, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key2 = props[index2];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source2[key2];
    }
    if (isNew) {
      baseAssignValue(object, key2, newValue);
    } else {
      assignValue(object, key2, newValue);
    }
  }
  return object;
}
var nativeMax = Math.max;
function overRest(func, start2, transform) {
  start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start2 + index2];
    }
    index2 = -1;
    var otherArgs = Array(start2 + 1);
    while (++index2 < start2) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start2] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start2) {
  return setToString(overRest(func, start2, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$2(value);
}
function isIterateeCall(value, index2, object) {
  if (!isObject$1(object)) {
    return false;
  }
  var type2 = typeof index2;
  if (type2 == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type2 == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source2 = sources[index2];
      if (source2) {
        assigner(object, source2, index2, customizer);
      }
    }
    return object;
  });
}
var objectProto$c = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$c;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$b = objectProto$b.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
  return arguments;
})()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$b.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$2 = moduleExports$2 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$2 ? Buffer$2.isBuffer : void 0;
var isBuffer$1 = nativeIsBuffer || stubFalse;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = (function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
})();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$a = Object.prototype;
var hasOwnProperty$a = objectProto$a.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key2 in value) {
    if ((inherited || hasOwnProperty$a.call(value, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
    isIndex(key2, length)))) {
      result.push(key2);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$9 = Object.prototype;
var hasOwnProperty$9 = objectProto$9.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key2 in Object(object)) {
    if (hasOwnProperty$9.call(object, key2) && key2 != "constructor") {
      result.push(key2);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key2 in Object(object)) {
      result.push(key2);
    }
  }
  return result;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$8 = objectProto$8.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key2 in object) {
    if (!(key2 == "constructor" && (isProto || !hasOwnProperty$8.call(object, key2)))) {
      result.push(key2);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type2 = typeof value;
  if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key2) {
  var result = this.has(key2) && delete this.__data__[key2];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$7 = Object.prototype;
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
function hashGet(key2) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key2];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$7.call(data, key2) ? data[key2] : void 0;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
function hashHas(key2) {
  var data = this.__data__;
  return nativeCreate ? data[key2] !== void 0 : hasOwnProperty$6.call(data, key2);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key2, value) {
  var data = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data = this.__data__, index2 = assocIndexOf(data, key2);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key2) {
  var data = this.__data__, index2 = assocIndexOf(data, key2);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key2) {
  return assocIndexOf(this.__data__, key2) > -1;
}
function listCacheSet(key2, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key2);
  if (index2 < 0) {
    ++this.size;
    data.push([key2, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type2 = typeof value;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key2) {
  var data = map.__data__;
  return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key2) {
  var result = getMapData(this, key2)["delete"](key2);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key2) {
  return getMapData(this, key2).get(key2);
}
function mapCacheHas(key2) {
  return getMapData(this, key2).has(key2);
}
function mapCacheSet(key2, value) {
  var data = getMapData(this, key2), size = data.size;
  data.set(key2, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key2, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString$1(value));
}
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function get$3(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$5 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function basePropertyOf(object) {
  return function(key2) {
    return object == null ? void 0 : object[key2];
  };
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key2) {
  var data = this.__data__, result = data["delete"](key2);
  this.size = data.size;
  return result;
}
function stackGet(key2) {
  return this.__data__.get(key2);
}
function stackHas(key2) {
  return this.__data__.has(key2);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key2, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key2, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key2, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer$1 = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$4 = Object.prototype;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
var DataView$1 = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$4 = objectProto$3.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$4.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array$1 = root.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = cloneArrayBuffer(dataView.buffer);
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$2;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$2;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG$1 = 1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key2, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1;
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = isFunc ? {} : initCloneObject(value);
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key3) {
      result.set(key3, baseClone(subValue, bitmask, customizer, key3, value, stack));
    });
  }
  var keysFunc = getAllKeys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key3) {
    if (props) {
      key3 = subValue;
      subValue = value[key3];
    }
    assignValue(result, key3, baseClone(subValue, bitmask, customizer, key3, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key2) {
  return cache.has(key2);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen2 = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen2) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen2, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen2.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key2) {
    result[++index2] = [key2, value];
  });
  return result;
}
function setToArray(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key2 = objProps[index2];
    if (!(isPartial ? key2 in other : hasOwnProperty$3.call(other, key2))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key2 = objProps[index2];
    var objValue = object[key2], othValue = other[key2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key2 == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$2.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key2 = toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key2))) {
      break;
    }
    object = object[key2];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key2, length) && (isArray$1(object) || isArguments(object));
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key2 = props[++index2];
      if (iteratee(iterable[key2], key2, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
function assignMergeValue(object, key2, value) {
  if (value !== void 0 && !eq(object[key2], value) || value === void 0 && !(key2 in object)) {
    baseAssignValue(object, key2, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key2) {
  if (key2 === "constructor" && typeof object[key2] === "function") {
    return;
  }
  if (key2 == "__proto__") {
    return;
  }
  return object[key2];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source2, key2, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key2), srcValue = safeGet(source2, key2), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key2, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key2 + "", object, source2, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject$1(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$1(objValue) || isFunction$2(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key2, newValue);
}
function baseMerge(object, source2, srcIndex, customizer, stack) {
  if (object === source2) {
    return;
  }
  baseFor(source2, function(srcValue, key2) {
    stack || (stack = new Stack());
    if (isObject$1(srcValue)) {
      baseMergeDeep(object, source2, key2, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key2), srcValue, key2 + "", object, source2, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key2, newValue);
    }
  }, keysIn);
}
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var escapeHtmlChar = basePropertyOf(htmlEscapes);
var reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape$1(string) {
  string = toString$1(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
}
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
function baseHas(object, key2) {
  return object != null && hasOwnProperty$1.call(object, key2);
}
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var merge$1 = createAssigner(function(object, source2, srcIndex) {
  baseMerge(object, source2, srcIndex);
});
function baseSet(object, path, value, customizer) {
  if (!isObject$1(object)) {
    return object;
  }
  path = castPath(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key2 = toKey(path[index2]), newValue = value;
    if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key2];
      newValue = void 0;
      if (newValue === void 0) {
        newValue = isObject$1(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key2, newValue);
    nested = nested[key2];
  }
  return object;
}
function set$2(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      var isInstance = false;
      try {
        isInstance = this instanceof a2;
      } catch {
      }
      if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var type;
var hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  type = TypeError;
  return type;
}
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var objectInspect;
var hasRequiredObjectInspect;
function requireObjectInspect() {
  if (hasRequiredObjectInspect) return objectInspect;
  hasRequiredObjectInspect = 1;
  var hasMap = typeof Map === "function" && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === "function" && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString2 = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
  var toStringTag2 = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
    return O.__proto__;
  } : null);
  function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
      return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
      var int = num < 0 ? -$floor(-num) : $floor(num);
      if (int !== num) {
        var intStr = String(int);
        var dec = $slice.call(str, intStr.length + 1);
        return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return $replace.call(str, sepRegex, "$&_");
  }
  var utilInspect = require$$0;
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol2(inspectCustom) ? inspectCustom : null;
  var quotes = {
    __proto__: null,
    "double": '"',
    single: "'"
  };
  var quoteREs = {
    __proto__: null,
    "double": /(["\\])/g,
    single: /(['\\])/g
  };
  objectInspect = function inspect_(obj, options, depth, seen2) {
    var opts = options || {};
    if (has2(opts, "quoteStyle") && !has2(quotes, opts.quoteStyle)) {
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has2(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has2(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (has2(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has2(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") {
      return "undefined";
    }
    if (obj === null) {
      return "null";
    }
    if (typeof obj === "boolean") {
      return obj ? "true" : "false";
    }
    if (typeof obj === "string") {
      return inspectString(obj, opts);
    }
    if (typeof obj === "number") {
      if (obj === 0) {
        return Infinity / obj > 0 ? "0" : "-0";
      }
      var str = String(obj);
      return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
      var bigIntStr = String(obj) + "n";
      return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") {
      depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
      return isArray2(obj) ? "[Array]" : "[Object]";
    }
    var indent = getIndent(opts, depth);
    if (typeof seen2 === "undefined") {
      seen2 = [];
    } else if (indexOf(seen2, obj) >= 0) {
      return "[Circular]";
    }
    function inspect(value, from, noIndent) {
      if (from) {
        seen2 = $arrSlice.call(seen2);
        seen2.push(from);
      }
      if (noIndent) {
        var newOpts = {
          depth: opts.depth
        };
        if (has2(opts, "quoteStyle")) {
          newOpts.quoteStyle = opts.quoteStyle;
        }
        return inspect_(value, newOpts, depth + 1, seen2);
      }
      return inspect_(value, opts, depth + 1, seen2);
    }
    if (typeof obj === "function" && !isRegExp2(obj)) {
      var name = nameOf(obj);
      var keys2 = arrObjKeys(obj, inspect);
      return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys2.length > 0 ? " { " + $join.call(keys2, ", ") + " }" : "");
    }
    if (isSymbol2(obj)) {
      var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
      return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
      var s = "<" + $toLowerCase.call(String(obj.nodeName));
      var attrs = obj.attributes || [];
      for (var i = 0; i < attrs.length; i++) {
        s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
      }
      s += ">";
      if (obj.childNodes && obj.childNodes.length) {
        s += "...";
      }
      s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
      return s;
    }
    if (isArray2(obj)) {
      if (obj.length === 0) {
        return "[]";
      }
      var xs = arrObjKeys(obj, inspect);
      if (indent && !singleLineValues(xs)) {
        return "[" + indentedJoin(xs, indent) + "]";
      }
      return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
      var parts = arrObjKeys(obj, inspect);
      if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
        return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
      }
      if (parts.length === 0) {
        return "[" + String(obj) + "]";
      }
      return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
      if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
        return utilInspect(obj, { depth: maxDepth - depth });
      } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
        return obj.inspect();
      }
    }
    if (isMap2(obj)) {
      var mapParts = [];
      if (mapForEach) {
        mapForEach.call(obj, function(value, key2) {
          mapParts.push(inspect(key2, obj, true) + " => " + inspect(value, obj));
        });
      }
      return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet2(obj)) {
      var setParts = [];
      if (setForEach) {
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
      }
      return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
      return weakCollectionOf("WeakMap");
    }
    if (isWeakSet(obj)) {
      return weakCollectionOf("WeakSet");
    }
    if (isWeakRef(obj)) {
      return weakCollectionOf("WeakRef");
    }
    if (isNumber2(obj)) {
      return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
      return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean2(obj)) {
      return markBoxed(booleanValueOf.call(obj));
    }
    if (isString2(obj)) {
      return markBoxed(inspect(String(obj)));
    }
    if (typeof window !== "undefined" && obj === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof commonjsGlobal !== "undefined" && obj === commonjsGlobal) {
      return "{ [object globalThis] }";
    }
    if (!isDate2(obj) && !isRegExp2(obj)) {
      var ys = arrObjKeys(obj, inspect);
      var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
      var protoTag = obj instanceof Object ? "" : "null prototype";
      var stringTag2 = !isPlainObject2 && toStringTag2 && Object(obj) === obj && toStringTag2 in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
      var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
      var tag = constructorTag + (stringTag2 || protoTag ? "[" + $join.call($concat.call([], stringTag2 || [], protoTag || []), ": ") + "] " : "");
      if (ys.length === 0) {
        return tag + "{}";
      }
      if (indent) {
        return tag + "{" + indentedJoin(ys, indent) + "}";
      }
      return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
  };
  function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
  }
  function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
  }
  function canTrustToString(obj) {
    return !toStringTag2 || !(typeof obj === "object" && (toStringTag2 in obj || typeof obj[toStringTag2] !== "undefined"));
  }
  function isArray2(obj) {
    return toStr(obj) === "[object Array]" && canTrustToString(obj);
  }
  function isDate2(obj) {
    return toStr(obj) === "[object Date]" && canTrustToString(obj);
  }
  function isRegExp2(obj) {
    return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
  }
  function isError(obj) {
    return toStr(obj) === "[object Error]" && canTrustToString(obj);
  }
  function isString2(obj) {
    return toStr(obj) === "[object String]" && canTrustToString(obj);
  }
  function isNumber2(obj) {
    return toStr(obj) === "[object Number]" && canTrustToString(obj);
  }
  function isBoolean2(obj) {
    return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
  }
  function isSymbol2(obj) {
    if (hasShammedSymbols) {
      return obj && typeof obj === "object" && obj instanceof Symbol;
    }
    if (typeof obj === "symbol") {
      return true;
    }
    if (!obj || typeof obj !== "object" || !symToString) {
      return false;
    }
    try {
      symToString.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) {
      return false;
    }
    try {
      bigIntValueOf.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  var hasOwn = Object.prototype.hasOwnProperty || function(key2) {
    return key2 in this;
  };
  function has2(obj, key2) {
    return hasOwn.call(obj, key2);
  }
  function toStr(obj) {
    return objectToString2.call(obj);
  }
  function nameOf(f) {
    if (f.name) {
      return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
      return m[1];
    }
    return null;
  }
  function indexOf(xs, x) {
    if (xs.indexOf) {
      return xs.indexOf(x);
    }
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  }
  function isMap2(x) {
    if (!mapSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      mapSize.call(x);
      try {
        setSize.call(x);
      } catch (s) {
        return true;
      }
      return x instanceof Map;
    } catch (e) {
    }
    return false;
  }
  function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakMapHas.call(x, weakMapHas);
      try {
        weakSetHas.call(x, weakSetHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakMap;
    } catch (e) {
    }
    return false;
  }
  function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakRefDeref.call(x);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isSet2(x) {
    if (!setSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      setSize.call(x);
      try {
        mapSize.call(x);
      } catch (m) {
        return true;
      }
      return x instanceof Set;
    } catch (e) {
    }
    return false;
  }
  function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakSetHas.call(x, weakSetHas);
      try {
        weakMapHas.call(x, weakMapHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakSet;
    } catch (e) {
    }
    return false;
  }
  function isElement(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
      return true;
    }
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
  }
  function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
      var remaining = str.length - opts.maxStringLength;
      var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
      return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || "single"];
    quoteRE.lastIndex = 0;
    var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
  }
  function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[n];
    if (x) {
      return "\\" + x;
    }
    return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
  }
  function markBoxed(str) {
    return "Object(" + str + ")";
  }
  function weakCollectionOf(type2) {
    return type2 + " { ? }";
  }
  function collectionOf(type2, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type2 + " (" + size + ") {" + joinedEntries + "}";
  }
  function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
      if (indexOf(xs[i], "\n") >= 0) {
        return false;
      }
    }
    return true;
  }
  function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") {
      baseIndent = "	";
    } else if (typeof opts.indent === "number" && opts.indent > 0) {
      baseIndent = $join.call(Array(opts.indent + 1), " ");
    } else {
      return null;
    }
    return {
      base: baseIndent,
      prev: $join.call(Array(depth + 1), baseIndent)
    };
  }
  function indentedJoin(xs, indent) {
    if (xs.length === 0) {
      return "";
    }
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
  }
  function arrObjKeys(obj, inspect) {
    var isArr = isArray2(obj);
    var xs = [];
    if (isArr) {
      xs.length = obj.length;
      for (var i = 0; i < obj.length; i++) {
        xs[i] = has2(obj, i) ? inspect(obj[i], obj) : "";
      }
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
      symMap = {};
      for (var k = 0; k < syms.length; k++) {
        symMap["$" + syms[k]] = syms[k];
      }
    }
    for (var key2 in obj) {
      if (!has2(obj, key2)) {
        continue;
      }
      if (isArr && String(Number(key2)) === key2 && key2 < obj.length) {
        continue;
      }
      if (hasShammedSymbols && symMap["$" + key2] instanceof Symbol) {
        continue;
      } else if ($test.call(/[^\w$]/, key2)) {
        xs.push(inspect(key2, obj) + ": " + inspect(obj[key2], obj));
      } else {
        xs.push(key2 + ": " + inspect(obj[key2], obj));
      }
    }
    if (typeof gOPS === "function") {
      for (var j = 0; j < syms.length; j++) {
        if (isEnumerable.call(obj, syms[j])) {
          xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
        }
      }
    }
    return xs;
  }
  return objectInspect;
}
var sideChannelList;
var hasRequiredSideChannelList;
function requireSideChannelList() {
  if (hasRequiredSideChannelList) return sideChannelList;
  hasRequiredSideChannelList = 1;
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var listGetNode = function(list, key2, isDelete) {
    var prev = list;
    var curr;
    for (; (curr = prev.next) != null; prev = curr) {
      if (curr.key === key2) {
        prev.next = curr.next;
        if (!isDelete) {
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
        }
        return curr;
      }
    }
  };
  var listGet = function(objects, key2) {
    if (!objects) {
      return void 0;
    }
    var node = listGetNode(objects, key2);
    return node && node.value;
  };
  var listSet = function(objects, key2, value) {
    var node = listGetNode(objects, key2);
    if (node) {
      node.value = value;
    } else {
      objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
      {
        // eslint-disable-line no-param-reassign, no-extra-parens
        key: key2,
        next: objects.next,
        value
      };
    }
  };
  var listHas = function(objects, key2) {
    if (!objects) {
      return false;
    }
    return !!listGetNode(objects, key2);
  };
  var listDelete = function(objects, key2) {
    if (objects) {
      return listGetNode(objects, key2, true);
    }
  };
  sideChannelList = function getSideChannelList() {
    var $o;
    var channel = {
      assert: function(key2) {
        if (!channel.has(key2)) {
          throw new $TypeError("Side channel does not contain " + inspect(key2));
        }
      },
      "delete": function(key2) {
        var root2 = $o && $o.next;
        var deletedNode = listDelete($o, key2);
        if (deletedNode && root2 && root2 === deletedNode) {
          $o = void 0;
        }
        return !!deletedNode;
      },
      get: function(key2) {
        return listGet($o, key2);
      },
      has: function(key2) {
        return listHas($o, key2);
      },
      set: function(key2, value) {
        if (!$o) {
          $o = {
            next: void 0
          };
        }
        listSet(
          /** @type {NonNullable<typeof $o>} */
          $o,
          key2,
          value
        );
      }
    };
    return channel;
  };
  return sideChannelList;
}
var esObjectAtoms;
var hasRequiredEsObjectAtoms;
function requireEsObjectAtoms() {
  if (hasRequiredEsObjectAtoms) return esObjectAtoms;
  hasRequiredEsObjectAtoms = 1;
  esObjectAtoms = Object;
  return esObjectAtoms;
}
var esErrors;
var hasRequiredEsErrors;
function requireEsErrors() {
  if (hasRequiredEsErrors) return esErrors;
  hasRequiredEsErrors = 1;
  esErrors = Error;
  return esErrors;
}
var _eval;
var hasRequired_eval;
function require_eval() {
  if (hasRequired_eval) return _eval;
  hasRequired_eval = 1;
  _eval = EvalError;
  return _eval;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  range = RangeError;
  return range;
}
var ref;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef) return ref;
  hasRequiredRef = 1;
  ref = ReferenceError;
  return ref;
}
var syntax;
var hasRequiredSyntax;
function requireSyntax() {
  if (hasRequiredSyntax) return syntax;
  hasRequiredSyntax = 1;
  syntax = SyntaxError;
  return syntax;
}
var uri;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri;
  hasRequiredUri = 1;
  uri = URIError;
  return uri;
}
var abs;
var hasRequiredAbs;
function requireAbs() {
  if (hasRequiredAbs) return abs;
  hasRequiredAbs = 1;
  abs = Math.abs;
  return abs;
}
var floor;
var hasRequiredFloor;
function requireFloor() {
  if (hasRequiredFloor) return floor;
  hasRequiredFloor = 1;
  floor = Math.floor;
  return floor;
}
var max;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax) return max;
  hasRequiredMax = 1;
  max = Math.max;
  return max;
}
var min;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin) return min;
  hasRequiredMin = 1;
  min = Math.min;
  return min;
}
var pow;
var hasRequiredPow;
function requirePow() {
  if (hasRequiredPow) return pow;
  hasRequiredPow = 1;
  pow = Math.pow;
  return pow;
}
var round;
var hasRequiredRound;
function requireRound() {
  if (hasRequiredRound) return round;
  hasRequiredRound = 1;
  round = Math.round;
  return round;
}
var _isNaN;
var hasRequired_isNaN;
function require_isNaN() {
  if (hasRequired_isNaN) return _isNaN;
  hasRequired_isNaN = 1;
  _isNaN = Number.isNaN || function isNaN2(a) {
    return a !== a;
  };
  return _isNaN;
}
var sign;
var hasRequiredSign;
function requireSign() {
  if (hasRequiredSign) return sign;
  hasRequiredSign = 1;
  var $isNaN = /* @__PURE__ */ require_isNaN();
  sign = function sign2(number) {
    if ($isNaN(number) || number === 0) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  return sign;
}
var gOPD;
var hasRequiredGOPD;
function requireGOPD() {
  if (hasRequiredGOPD) return gOPD;
  hasRequiredGOPD = 1;
  gOPD = Object.getOwnPropertyDescriptor;
  return gOPD;
}
var gopd;
var hasRequiredGopd;
function requireGopd() {
  if (hasRequiredGopd) return gopd;
  hasRequiredGopd = 1;
  var $gOPD = /* @__PURE__ */ requireGOPD();
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  gopd = $gOPD;
  return gopd;
}
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty) return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = false;
    }
  }
  esDefineProperty = $defineProperty;
  return esDefineProperty;
}
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams) return shams;
  hasRequiredShams = 1;
  shams = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = /* @__PURE__ */ Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _ in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(obj, sym)
      );
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols) return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  Object_getPrototypeOf = $Object.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
      arr[j + a.length] = b[j];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i = 0; i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation = function bind2(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = "$" + i;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind) return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply;
var hasRequiredReflectApply;
function requireReflectApply() {
  if (hasRequiredReflectApply) return reflectApply;
  hasRequiredReflectApply = 1;
  reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  return reflectApply;
}
var actualApply;
var hasRequiredActualApply;
function requireActualApply() {
  if (hasRequiredActualApply) return actualApply;
  hasRequiredActualApply = 1;
  var bind2 = requireFunctionBind();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var $reflectApply = requireReflectApply();
  actualApply = $reflectApply || bind2.call($call, $apply);
  return actualApply;
}
var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;
function requireCallBindApplyHelpers() {
  if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
  hasRequiredCallBindApplyHelpers = 1;
  var bind2 = requireFunctionBind();
  var $TypeError = /* @__PURE__ */ requireType();
  var $call = requireFunctionCall();
  var $actualApply = requireActualApply();
  callBindApplyHelpers = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== "function") {
      throw new $TypeError("a function is required");
    }
    return $actualApply(bind2, $call, args);
  };
  return callBindApplyHelpers;
}
var get$2;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get$2;
  hasRequiredGet = 1;
  var callBind = requireCallBindApplyHelpers();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
      throw e;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  );
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  get$2 = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
    /** @type {import('./get')} */
    function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    }
  ) : false;
  return get$2;
}
var getProto;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto) return getProto;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = /* @__PURE__ */ requireGet();
  getProto = reflectGetProto ? function getProto2(O) {
    return reflectGetProto(O);
  } : originalGetProto ? function getProto2(O) {
    if (!O || typeof O !== "object" && typeof O !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O);
  } : getDunderProto ? function getProto2(O) {
    return getDunderProto(O);
  } : null;
  return getProto;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown) return hasown;
  hasRequiredHasown = 1;
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind2 = requireFunctionBind();
  hasown = bind2.call(call, $hasOwn);
  return hasown;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic) return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $Error = /* @__PURE__ */ requireEsErrors();
  var $EvalError = /* @__PURE__ */ require_eval();
  var $RangeError = /* @__PURE__ */ requireRange();
  var $ReferenceError = /* @__PURE__ */ requireRef();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var $URIError = /* @__PURE__ */ requireUri();
  var abs2 = /* @__PURE__ */ requireAbs();
  var floor2 = /* @__PURE__ */ requireFloor();
  var max2 = /* @__PURE__ */ requireMax();
  var min2 = /* @__PURE__ */ requireMin();
  var pow2 = /* @__PURE__ */ requirePow();
  var round2 = /* @__PURE__ */ requireRound();
  var sign2 = /* @__PURE__ */ requireSign();
  var $Function = Function;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD = /* @__PURE__ */ requireGopd();
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? (function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  })() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto2 = requireGetProto();
  var $ObjectGPO = requireObject_getPrototypeOf();
  var $ReflectGPO = requireReflect_getPrototypeOf();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": $EvalError,
    "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": $Object,
    "%Object.getOwnPropertyDescriptor%": $gOPD,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
    "%Function.prototype.call%": $call,
    "%Function.prototype.apply%": $apply,
    "%Object.defineProperty%": $defineProperty,
    "%Object.getPrototypeOf%": $ObjectGPO,
    "%Math.abs%": abs2,
    "%Math.floor%": floor2,
    "%Math.max%": max2,
    "%Math.min%": min2,
    "%Math.pow%": pow2,
    "%Math.round%": round2,
    "%Math.sign%": sign2,
    "%Reflect.getPrototypeOf%": $ReflectGPO
  };
  if (getProto2) {
    try {
      null.error;
    } catch (e) {
      var errorProto = getProto2(getProto2(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto2) {
        value = getProto2(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind2 = requireFunctionBind();
  var hasOwn = /* @__PURE__ */ requireHasown();
  var $concat = bind2.call($call, Array.prototype.concat);
  var $spliceApply = bind2.call($apply, Array.prototype.splice);
  var $replace = bind2.call($call, String.prototype.replace);
  var $strSlice = bind2.call($call, String.prototype.slice);
  var $exec = bind2.call($call, RegExp.prototype.exec);
  var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar2 = /\\(\\)?/g;
  var stringToPath2 = function stringToPath3(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName2, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath2(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void undefined$1;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound) return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBindBasic = requireCallBindApplyHelpers();
  var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      GetIntrinsic(name, !!allowMissing)
    );
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBindBasic(
        /** @type {const} */
        [intrinsic]
      );
    }
    return intrinsic;
  };
  return callBound;
}
var sideChannelMap;
var hasRequiredSideChannelMap;
function requireSideChannelMap() {
  if (hasRequiredSideChannelMap) return sideChannelMap;
  hasRequiredSideChannelMap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var $Map = GetIntrinsic("%Map%", true);
  var $mapGet = callBound2("Map.prototype.get", true);
  var $mapSet = callBound2("Map.prototype.set", true);
  var $mapHas = callBound2("Map.prototype.has", true);
  var $mapDelete = callBound2("Map.prototype.delete", true);
  var $mapSize = callBound2("Map.prototype.size", true);
  sideChannelMap = !!$Map && /** @type {Exclude<import('.'), false>} */
  function getSideChannelMap() {
    var $m;
    var channel = {
      assert: function(key2) {
        if (!channel.has(key2)) {
          throw new $TypeError("Side channel does not contain " + inspect(key2));
        }
      },
      "delete": function(key2) {
        if ($m) {
          var result = $mapDelete($m, key2);
          if ($mapSize($m) === 0) {
            $m = void 0;
          }
          return result;
        }
        return false;
      },
      get: function(key2) {
        if ($m) {
          return $mapGet($m, key2);
        }
      },
      has: function(key2) {
        if ($m) {
          return $mapHas($m, key2);
        }
        return false;
      },
      set: function(key2, value) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key2, value);
      }
    };
    return channel;
  };
  return sideChannelMap;
}
var sideChannelWeakmap;
var hasRequiredSideChannelWeakmap;
function requireSideChannelWeakmap() {
  if (hasRequiredSideChannelWeakmap) return sideChannelWeakmap;
  hasRequiredSideChannelWeakmap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelMap = requireSideChannelMap();
  var $TypeError = /* @__PURE__ */ requireType();
  var $WeakMap = GetIntrinsic("%WeakMap%", true);
  var $weakMapGet = callBound2("WeakMap.prototype.get", true);
  var $weakMapSet = callBound2("WeakMap.prototype.set", true);
  var $weakMapHas = callBound2("WeakMap.prototype.has", true);
  var $weakMapDelete = callBound2("WeakMap.prototype.delete", true);
  sideChannelWeakmap = $WeakMap ? (
    /** @type {Exclude<import('.'), false>} */
    function getSideChannelWeakMap() {
      var $wm;
      var $m;
      var channel = {
        assert: function(key2) {
          if (!channel.has(key2)) {
            throw new $TypeError("Side channel does not contain " + inspect(key2));
          }
        },
        "delete": function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapDelete($wm, key2);
            }
          } else if (getSideChannelMap) {
            if ($m) {
              return $m["delete"](key2);
            }
          }
          return false;
        },
        get: function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key2);
            }
          }
          return $m && $m.get(key2);
        },
        has: function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key2);
            }
          }
          return !!$m && $m.has(key2);
        },
        set: function(key2, value) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key2, value);
          } else if (getSideChannelMap) {
            if (!$m) {
              $m = getSideChannelMap();
            }
            $m.set(key2, value);
          }
        }
      };
      return channel;
    }
  ) : getSideChannelMap;
  return sideChannelWeakmap;
}
var sideChannel;
var hasRequiredSideChannel;
function requireSideChannel() {
  if (hasRequiredSideChannel) return sideChannel;
  hasRequiredSideChannel = 1;
  var $TypeError = /* @__PURE__ */ requireType();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelList = requireSideChannelList();
  var getSideChannelMap = requireSideChannelMap();
  var getSideChannelWeakMap = requireSideChannelWeakmap();
  var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
  sideChannel = function getSideChannel() {
    var $channelData;
    var channel = {
      assert: function(key2) {
        if (!channel.has(key2)) {
          throw new $TypeError("Side channel does not contain " + inspect(key2));
        }
      },
      "delete": function(key2) {
        return !!$channelData && $channelData["delete"](key2);
      },
      get: function(key2) {
        return $channelData && $channelData.get(key2);
      },
      has: function(key2) {
        return !!$channelData && $channelData.has(key2);
      },
      set: function(key2, value) {
        if (!$channelData) {
          $channelData = makeChannel();
        }
        $channelData.set(key2, value);
      }
    };
    return channel;
  };
  return sideChannel;
}
var formats;
var hasRequiredFormats;
function requireFormats() {
  if (hasRequiredFormats) return formats;
  hasRequiredFormats = 1;
  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;
  var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  formats = {
    "default": Format.RFC3986,
    formatters: {
      RFC1738: function(value) {
        return replace.call(value, percentTwenties, "+");
      },
      RFC3986: function(value) {
        return String(value);
      }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
  };
  return formats;
}
var utils$2;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils$2;
  hasRequiredUtils = 1;
  var formats2 = /* @__PURE__ */ requireFormats();
  var getSideChannel = requireSideChannel();
  var has2 = Object.prototype.hasOwnProperty;
  var isArray2 = Array.isArray;
  var overflowChannel = getSideChannel();
  var markOverflow = function markOverflow2(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
    return obj;
  };
  var isOverflow = function isOverflow2(obj) {
    return overflowChannel.has(obj);
  };
  var getMaxIndex = function getMaxIndex2(obj) {
    return overflowChannel.get(obj);
  };
  var setMaxIndex = function setMaxIndex2(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
  };
  var hexTable = (function() {
    var array = [];
    for (var i = 0; i < 256; ++i) {
      array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
    }
    return array;
  })();
  var compactQueue = function compactQueue2(queue3) {
    while (queue3.length > 1) {
      var item = queue3.pop();
      var obj = item.obj[item.prop];
      if (isArray2(obj)) {
        var compacted = [];
        for (var j = 0; j < obj.length; ++j) {
          if (typeof obj[j] !== "undefined") {
            compacted[compacted.length] = obj[j];
          }
        }
        item.obj[item.prop] = compacted;
      }
    }
  };
  var arrayToObject2 = function arrayToObject3(source2, options) {
    var obj = options && options.plainObjects ? { __proto__: null } : {};
    for (var i = 0; i < source2.length; ++i) {
      if (typeof source2[i] !== "undefined") {
        obj[i] = source2[i];
      }
    }
    return obj;
  };
  var merge2 = function merge3(target, source2, options) {
    if (!source2) {
      return target;
    }
    if (typeof source2 !== "object" && typeof source2 !== "function") {
      if (isArray2(target)) {
        var nextIndex = target.length;
        if (options && typeof options.arrayLimit === "number" && nextIndex > options.arrayLimit) {
          return markOverflow(arrayToObject2(target.concat(source2), options), nextIndex);
        }
        target[nextIndex] = source2;
      } else if (target && typeof target === "object") {
        if (isOverflow(target)) {
          var newIndex = getMaxIndex(target) + 1;
          target[newIndex] = source2;
          setMaxIndex(target, newIndex);
        } else if (options && options.strictMerge) {
          return [target, source2];
        } else if (options && (options.plainObjects || options.allowPrototypes) || !has2.call(Object.prototype, source2)) {
          target[source2] = true;
        }
      } else {
        return [target, source2];
      }
      return target;
    }
    if (!target || typeof target !== "object") {
      if (isOverflow(source2)) {
        var sourceKeys = Object.keys(source2);
        var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
        for (var m = 0; m < sourceKeys.length; m++) {
          var oldKey = parseInt(sourceKeys[m], 10);
          result[oldKey + 1] = source2[sourceKeys[m]];
        }
        return markOverflow(result, getMaxIndex(source2) + 1);
      }
      var combined = [target].concat(source2);
      if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) {
        return markOverflow(arrayToObject2(combined, options), combined.length - 1);
      }
      return combined;
    }
    var mergeTarget = target;
    if (isArray2(target) && !isArray2(source2)) {
      mergeTarget = arrayToObject2(target, options);
    }
    if (isArray2(target) && isArray2(source2)) {
      source2.forEach(function(item, i) {
        if (has2.call(target, i)) {
          var targetItem = target[i];
          if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
            target[i] = merge3(targetItem, item, options);
          } else {
            target[target.length] = item;
          }
        } else {
          target[i] = item;
        }
      });
      return target;
    }
    return Object.keys(source2).reduce(function(acc, key2) {
      var value = source2[key2];
      if (has2.call(acc, key2)) {
        acc[key2] = merge3(acc[key2], value, options);
      } else {
        acc[key2] = value;
      }
      if (isOverflow(source2) && !isOverflow(acc)) {
        markOverflow(acc, getMaxIndex(source2));
      }
      if (isOverflow(acc)) {
        var keyNum = parseInt(key2, 10);
        if (String(keyNum) === key2 && keyNum >= 0 && keyNum > getMaxIndex(acc)) {
          setMaxIndex(acc, keyNum);
        }
      }
      return acc;
    }, mergeTarget);
  };
  var assign = function assignSingleSource(target, source2) {
    return Object.keys(source2).reduce(function(acc, key2) {
      acc[key2] = source2[key2];
      return acc;
    }, target);
  };
  var decode = function(str, defaultDecoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") {
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  };
  var limit = 1024;
  var encode2 = function encode3(str, defaultEncoder, charset, kind, format) {
    if (str.length === 0) {
      return str;
    }
    var string = str;
    if (typeof str === "symbol") {
      string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== "string") {
      string = String(str);
    }
    if (charset === "iso-8859-1") {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
      });
    }
    var out = "";
    for (var j = 0; j < string.length; j += limit) {
      var segment = string.length >= limit ? string.slice(j, j + limit) : string;
      var arr = [];
      for (var i = 0; i < segment.length; ++i) {
        var c = segment.charCodeAt(i);
        if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats2.RFC1738 && (c === 40 || c === 41)) {
          arr[arr.length] = segment.charAt(i);
          continue;
        }
        if (c < 128) {
          arr[arr.length] = hexTable[c];
          continue;
        }
        if (c < 2048) {
          arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
          continue;
        }
        if (c < 55296 || c >= 57344) {
          arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
          continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
        arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
      }
      out += arr.join("");
    }
    return out;
  };
  var compact = function compact2(value) {
    var queue3 = [{ obj: { o: value }, prop: "o" }];
    var refs = [];
    for (var i = 0; i < queue3.length; ++i) {
      var item = queue3[i];
      var obj = item.obj[item.prop];
      var keys2 = Object.keys(obj);
      for (var j = 0; j < keys2.length; ++j) {
        var key2 = keys2[j];
        var val = obj[key2];
        if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
          queue3[queue3.length] = { obj, prop: key2 };
          refs[refs.length] = val;
        }
      }
    }
    compactQueue(queue3);
    return value;
  };
  var isRegExp2 = function isRegExp3(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
  };
  var isBuffer2 = function isBuffer3(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };
  var combine = function combine2(a, b, arrayLimit, plainObjects) {
    if (isOverflow(a)) {
      var newIndex = getMaxIndex(a) + 1;
      a[newIndex] = b;
      setMaxIndex(a, newIndex);
      return a;
    }
    var result = [].concat(a, b);
    if (result.length > arrayLimit) {
      return markOverflow(arrayToObject2(result, { plainObjects }), result.length - 1);
    }
    return result;
  };
  var maybeMap = function maybeMap2(val, fn) {
    if (isArray2(val)) {
      var mapped = [];
      for (var i = 0; i < val.length; i += 1) {
        mapped[mapped.length] = fn(val[i]);
      }
      return mapped;
    }
    return fn(val);
  };
  utils$2 = {
    arrayToObject: arrayToObject2,
    assign,
    combine,
    compact,
    decode,
    encode: encode2,
    isBuffer: isBuffer2,
    isOverflow,
    isRegExp: isRegExp2,
    markOverflow,
    maybeMap,
    merge: merge2
  };
  return utils$2;
}
var stringify_1;
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify_1;
  hasRequiredStringify = 1;
  var getSideChannel = requireSideChannel();
  var utils2 = /* @__PURE__ */ requireUtils();
  var formats2 = /* @__PURE__ */ requireFormats();
  var has2 = Object.prototype.hasOwnProperty;
  var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
      return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key2) {
      return prefix + "[" + key2 + "]";
    },
    repeat: function repeat(prefix) {
      return prefix;
    }
  };
  var isArray2 = Array.isArray;
  var push2 = Array.prototype.push;
  var pushToArray = function(arr, valueOrArray) {
    push2.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
  };
  var toISO = Date.prototype.toISOString;
  var defaultFormat = formats2["default"];
  var defaults2 = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: "&",
    encode: true,
    encodeDotInKeys: false,
    encoder: utils2.encode,
    encodeValuesOnly: false,
    filter: void 0,
    format: defaultFormat,
    formatter: formats2.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
  };
  var sentinel = {};
  var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter2, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel2) {
    var obj = object;
    var tmpSc = sideChannel2;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
      var pos = tmpSc.get(object);
      step += 1;
      if (typeof pos !== "undefined") {
        if (pos === step) {
          throw new RangeError("Cyclic object value");
        } else {
          findFlag = true;
        }
      }
      if (typeof tmpSc.get(sentinel) === "undefined") {
        step = 0;
      }
    }
    if (typeof filter2 === "function") {
      obj = filter2(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
      obj = utils2.maybeMap(obj, function(value2) {
        if (value2 instanceof Date) {
          return serializeDate(value2);
        }
        return value2;
      });
    }
    if (obj === null) {
      if (strictNullHandling) {
        return encoder && !encodeValuesOnly ? encoder(prefix, defaults2.encoder, charset, "key", format) : prefix;
      }
      obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils2.isBuffer(obj)) {
      if (encoder) {
        var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults2.encoder, charset, "key", format);
        return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults2.encoder, charset, "value", format))];
      }
      return [formatter(prefix) + "=" + formatter(String(obj))];
    }
    var values = [];
    if (typeof obj === "undefined") {
      return values;
    }
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray2(obj)) {
      if (encodeValuesOnly && encoder) {
        obj = utils2.maybeMap(obj, encoder);
      }
      objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
    } else if (isArray2(filter2)) {
      objKeys = filter2;
    } else {
      var keys2 = Object.keys(obj);
      objKeys = sort ? keys2.sort(sort) : keys2;
    }
    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
    var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
    if (allowEmptyArrays && isArray2(obj) && obj.length === 0) {
      return adjustedPrefix + "[]";
    }
    for (var j = 0; j < objKeys.length; ++j) {
      var key2 = objKeys[j];
      var value = typeof key2 === "object" && key2 && typeof key2.value !== "undefined" ? key2.value : obj[key2];
      if (skipNulls && value === null) {
        continue;
      }
      var encodedKey = allowDots && encodeDotInKeys ? String(key2).replace(/\./g, "%2E") : String(key2);
      var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
      sideChannel2.set(object, step);
      var valueSideChannel = getSideChannel();
      valueSideChannel.set(sentinel, sideChannel2);
      pushToArray(values, stringify2(
        value,
        keyPrefix,
        generateArrayPrefix,
        commaRoundTrip,
        allowEmptyArrays,
        strictNullHandling,
        skipNulls,
        encodeDotInKeys,
        generateArrayPrefix === "comma" && encodeValuesOnly && isArray2(obj) ? null : encoder,
        filter2,
        sort,
        allowDots,
        serializeDate,
        format,
        formatter,
        encodeValuesOnly,
        charset,
        valueSideChannel
      ));
    }
    return values;
  };
  var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
    if (!opts) {
      return defaults2;
    }
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
      throw new TypeError("Encoder has to be a function.");
    }
    var charset = opts.charset || defaults2.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var format = formats2["default"];
    if (typeof opts.format !== "undefined") {
      if (!has2.call(formats2.formatters, opts.format)) {
        throw new TypeError("Unknown format option provided.");
      }
      format = opts.format;
    }
    var formatter = formats2.formatters[format];
    var filter2 = defaults2.filter;
    if (typeof opts.filter === "function" || isArray2(opts.filter)) {
      filter2 = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
      arrayFormat = opts.arrayFormat;
    } else if ("indices" in opts) {
      arrayFormat = opts.indices ? "indices" : "repeat";
    } else {
      arrayFormat = defaults2.arrayFormat;
    }
    if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults2.allowDots : !!opts.allowDots;
    return {
      addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults2.addQueryPrefix,
      allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults2.allowEmptyArrays,
      arrayFormat,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
      commaRoundTrip: !!opts.commaRoundTrip,
      delimiter: typeof opts.delimiter === "undefined" ? defaults2.delimiter : opts.delimiter,
      encode: typeof opts.encode === "boolean" ? opts.encode : defaults2.encode,
      encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults2.encodeDotInKeys,
      encoder: typeof opts.encoder === "function" ? opts.encoder : defaults2.encoder,
      encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults2.encodeValuesOnly,
      filter: filter2,
      format,
      formatter,
      serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults2.serializeDate,
      skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults2.skipNulls,
      sort: typeof opts.sort === "function" ? opts.sort : null,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
    };
  };
  stringify_1 = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter2;
    if (typeof options.filter === "function") {
      filter2 = options.filter;
      obj = filter2("", obj);
    } else if (isArray2(options.filter)) {
      filter2 = options.filter;
      objKeys = filter2;
    }
    var keys2 = [];
    if (typeof obj !== "object" || obj === null) {
      return "";
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
    if (!objKeys) {
      objKeys = Object.keys(obj);
    }
    if (options.sort) {
      objKeys.sort(options.sort);
    }
    var sideChannel2 = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
      var key2 = objKeys[i];
      var value = obj[key2];
      if (options.skipNulls && value === null) {
        continue;
      }
      pushToArray(keys2, stringify(
        value,
        key2,
        generateArrayPrefix,
        commaRoundTrip,
        options.allowEmptyArrays,
        options.strictNullHandling,
        options.skipNulls,
        options.encodeDotInKeys,
        options.encode ? options.encoder : null,
        options.filter,
        options.sort,
        options.allowDots,
        options.serializeDate,
        options.format,
        options.formatter,
        options.encodeValuesOnly,
        options.charset,
        sideChannel2
      ));
    }
    var joined = keys2.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
      if (options.charset === "iso-8859-1") {
        prefix += "utf8=%26%2310003%3B&";
      } else {
        prefix += "utf8=%E2%9C%93&";
      }
    }
    return joined.length > 0 ? prefix + joined : "";
  };
  return stringify_1;
}
var parse;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse;
  hasRequiredParse = 1;
  var utils2 = /* @__PURE__ */ requireUtils();
  var has2 = Object.prototype.hasOwnProperty;
  var isArray2 = Array.isArray;
  var defaults2 = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils2.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1e3,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictMerge: true,
    strictNullHandling: false,
    throwOnLimitExceeded: false
  };
  var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };
  var parseArrayValue = function(val, options, currentArrayLength) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
      return val.split(",");
    }
    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
      throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    }
    return val;
  };
  var isoSentinel = "utf8=%26%2310003%3B";
  var charsetSentinel = "utf8=%E2%9C%93";
  var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
    var parts = cleanStr.split(
      options.delimiter,
      options.throwOnLimitExceeded ? limit + 1 : limit
    );
    if (options.throwOnLimitExceeded && parts.length > limit) {
      throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
    }
    var skipIndex = -1;
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
      for (i = 0; i < parts.length; ++i) {
        if (parts[i].indexOf("utf8=") === 0) {
          if (parts[i] === charsetSentinel) {
            charset = "utf-8";
          } else if (parts[i] === isoSentinel) {
            charset = "iso-8859-1";
          }
          skipIndex = i;
          i = parts.length;
        }
      }
    }
    for (i = 0; i < parts.length; ++i) {
      if (i === skipIndex) {
        continue;
      }
      var part = parts[i];
      var bracketEqualsPos = part.indexOf("]=");
      var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
      var key2;
      var val;
      if (pos === -1) {
        key2 = options.decoder(part, defaults2.decoder, charset, "key");
        val = options.strictNullHandling ? null : "";
      } else {
        key2 = options.decoder(part.slice(0, pos), defaults2.decoder, charset, "key");
        if (key2 !== null) {
          val = utils2.maybeMap(
            parseArrayValue(
              part.slice(pos + 1),
              options,
              isArray2(obj[key2]) ? obj[key2].length : 0
            ),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults2.decoder, charset, "value");
            }
          );
        }
      }
      if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
        val = interpretNumericEntities(String(val));
      }
      if (part.indexOf("[]=") > -1) {
        val = isArray2(val) ? [val] : val;
      }
      if (options.comma && isArray2(val) && val.length > options.arrayLimit) {
        if (options.throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        val = utils2.combine([], val, options.arrayLimit, options.plainObjects);
      }
      if (key2 !== null) {
        var existing = has2.call(obj, key2);
        if (existing && (options.duplicates === "combine" || part.indexOf("[]=") > -1)) {
          obj[key2] = utils2.combine(
            obj[key2],
            val,
            options.arrayLimit,
            options.plainObjects
          );
        } else if (!existing || options.duplicates === "last") {
          obj[key2] = val;
        }
      }
    }
    return obj;
  };
  var parseObject = function(chain, val, options, valuesParsed) {
    var currentArrayLength = 0;
    if (chain.length > 0 && chain[chain.length - 1] === "[]") {
      var parentKey = chain.slice(0, -1).join("");
      currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
    }
    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
    for (var i = chain.length - 1; i >= 0; --i) {
      var obj;
      var root2 = chain[i];
      if (root2 === "[]" && options.parseArrays) {
        if (utils2.isOverflow(leaf)) {
          obj = leaf;
        } else {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils2.combine(
            [],
            leaf,
            options.arrayLimit,
            options.plainObjects
          );
        }
      } else {
        obj = options.plainObjects ? { __proto__: null } : {};
        var cleanRoot = root2.charAt(0) === "[" && root2.charAt(root2.length - 1) === "]" ? root2.slice(1, -1) : root2;
        var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
        var index2 = parseInt(decodedRoot, 10);
        var isValidArrayIndex = !isNaN(index2) && root2 !== decodedRoot && String(index2) === decodedRoot && index2 >= 0 && options.parseArrays;
        if (!options.parseArrays && decodedRoot === "") {
          obj = { 0: leaf };
        } else if (isValidArrayIndex && index2 < options.arrayLimit) {
          obj = [];
          obj[index2] = leaf;
        } else if (isValidArrayIndex && options.throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        } else if (isValidArrayIndex) {
          obj[index2] = leaf;
          utils2.markOverflow(obj, index2);
        } else if (decodedRoot !== "__proto__") {
          obj[decodedRoot] = leaf;
        }
      }
      leaf = obj;
    }
    return leaf;
  };
  var splitKeyIntoSegments = function splitKeyIntoSegments2(givenKey, options) {
    var key2 = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    if (options.depth <= 0) {
      if (!options.plainObjects && has2.call(Object.prototype, key2)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      return [key2];
    }
    var brackets = /(\[[^[\]]*])/;
    var child2 = /(\[[^[\]]*])/g;
    var segment = brackets.exec(key2);
    var parent = segment ? key2.slice(0, segment.index) : key2;
    var keys2 = [];
    if (parent) {
      if (!options.plainObjects && has2.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys2[keys2.length] = parent;
    }
    var i = 0;
    while ((segment = child2.exec(key2)) !== null && i < options.depth) {
      i += 1;
      var segmentContent = segment[1].slice(1, -1);
      if (!options.plainObjects && has2.call(Object.prototype, segmentContent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys2[keys2.length] = segment[1];
    }
    if (segment) {
      if (options.strictDepth === true) {
        throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
      }
      keys2[keys2.length] = "[" + key2.slice(segment.index) + "]";
    }
    return keys2;
  };
  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
      return;
    }
    var keys2 = splitKeyIntoSegments(givenKey, options);
    if (!keys2) {
      return;
    }
    return parseObject(keys2, val, options, valuesParsed);
  };
  var normalizeParseOptions = function normalizeParseOptions2(opts) {
    if (!opts) {
      return defaults2;
    }
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
      throw new TypeError("Decoder has to be a function.");
    }
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    }
    var charset = typeof opts.charset === "undefined" ? defaults2.charset : opts.charset;
    var duplicates = typeof opts.duplicates === "undefined" ? defaults2.duplicates : opts.duplicates;
    if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
      throw new TypeError("The duplicates option must be either combine, first, or last");
    }
    var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults2.allowDots : !!opts.allowDots;
    return {
      allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults2.allowEmptyArrays,
      allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults2.allowPrototypes,
      allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults2.allowSparse,
      arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults2.arrayLimit,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
      comma: typeof opts.comma === "boolean" ? opts.comma : defaults2.comma,
      decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults2.decodeDotInKeys,
      decoder: typeof opts.decoder === "function" ? opts.decoder : defaults2.decoder,
      delimiter: typeof opts.delimiter === "string" || utils2.isRegExp(opts.delimiter) ? opts.delimiter : defaults2.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults2.depth,
      duplicates,
      ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults2.interpretNumericEntities,
      parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults2.parameterLimit,
      parseArrays: opts.parseArrays !== false,
      plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults2.plainObjects,
      strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults2.strictDepth,
      strictMerge: typeof opts.strictMerge === "boolean" ? !!opts.strictMerge : defaults2.strictMerge,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling,
      throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
    };
  };
  parse = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") {
      return options.plainObjects ? { __proto__: null } : {};
    }
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? { __proto__: null } : {};
    var keys2 = Object.keys(tempObj);
    for (var i = 0; i < keys2.length; ++i) {
      var key2 = keys2[i];
      var newObj = parseKeys(key2, tempObj[key2], options, typeof str === "string");
      obj = utils2.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
      return obj;
    }
    return utils2.compact(obj);
  };
  return parse;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  var stringify = /* @__PURE__ */ requireStringify();
  var parse2 = /* @__PURE__ */ requireParse();
  var formats2 = /* @__PURE__ */ requireFormats();
  lib = {
    formats: formats2,
    parse: parse2,
    stringify
  };
  return lib;
}
var libExports = /* @__PURE__ */ requireLib();
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type2) => {
  type2 = type2.toLowerCase();
  return (thing) => kindOf(thing) === type2;
};
const typeOfTest = (type2) => (thing) => typeof thing === type2;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction$1 = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(toStringTag in val) && !(iterator in val);
};
const isEmptyObject = (val) => {
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    return false;
  }
};
const isDate = kindOfTest("Date");
const isFile$2 = kindOfTest("File");
const isReactNativeBlob = (value) => {
  return !!(value && typeof value.uri !== "undefined");
};
const isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction$1(val.pipe);
function getGlobal() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  return {};
}
const G = getGlobal();
const FormDataCtor = typeof G.FormData !== "undefined" ? G.FormData : void 0;
const isFormData$1 = (thing) => {
  let kind;
  return thing && (FormDataCtor && thing instanceof FormDataCtor || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(kindOfTest);
const trim = (str) => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    if (isBuffer(obj)) {
      return;
    }
    const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys2.length;
    let key2;
    for (i = 0; i < len; i++) {
      key2 = keys2[i];
      fn.call(null, obj[key2], key2, obj);
    }
  }
}
function findKey(obj, key2) {
  if (isBuffer(obj)) {
    return null;
  }
  key2 = key2.toLowerCase();
  const keys2 = Object.keys(obj);
  let i = keys2.length;
  let _key;
  while (i-- > 0) {
    _key = keys2[i];
    if (key2 === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless, skipUndefined } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue2 = (val, key2) => {
    if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
      return;
    }
    const targetKey = caseless && findKey(result, key2) || key2;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue2);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key2) => {
      if (thisArg && isFunction$1(val)) {
        Object.defineProperty(a, key2, {
          value: bind(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true
        });
      } else {
        Object.defineProperty(a, key2, {
          value: val,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    },
    { allOwnKeys }
  );
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, "constructor", {
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop2;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop2 = props[i];
      if ((!propFilter || propFilter(prop2, sourceObj, destObj)) && !merged[prop2]) {
        destObj[prop2] = sourceObj[prop2];
        merged[prop2] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop2) => hasOwnProperty2.call(obj, prop2))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$1(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop$1 = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source2, i) => {
    if (isObject(source2)) {
      if (stack.indexOf(source2) >= 0) {
        return;
      }
      if (isBuffer(source2)) {
        return source2;
      }
      if (!("toJSON" in source2)) {
        stack[i] = source2;
        const target = isArray(source2) ? [] : {};
        forEach(source2, (value, key2) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key2] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source2;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener(
      "message",
      ({ source: source2, data }) => {
        if (source2 === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      },
      false
    );
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(typeof setImmediate === "function", isFunction$1(_global.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData: isFormData$1,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile: isFile$2,
  isReactNativeBlob,
  isReactNative,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$1,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};
let AxiosError$1 = class AxiosError extends Error {
  static from(error, code, config2, request2, response, customProps) {
    const axiosError = new AxiosError(error.message, code || error.code, config2, request2, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(message, code, config2, request2, response) {
    super(message);
    Object.defineProperty(this, "message", {
      value: message,
      enumerable: true,
      writable: true,
      configurable: true
    });
    this.name = "AxiosError";
    this.isAxiosError = true;
    code && (this.code = code);
    config2 && (this.config = config2);
    request2 && (this.request = request2);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
AxiosError$1.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
AxiosError$1.ERR_BAD_OPTION = "ERR_BAD_OPTION";
AxiosError$1.ECONNABORTED = "ECONNABORTED";
AxiosError$1.ETIMEDOUT = "ETIMEDOUT";
AxiosError$1.ERR_NETWORK = "ERR_NETWORK";
AxiosError$1.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
AxiosError$1.ERR_DEPRECATED = "ERR_DEPRECATED";
AxiosError$1.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
AxiosError$1.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
AxiosError$1.ERR_CANCELED = "ERR_CANCELED";
AxiosError$1.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
AxiosError$1.ERR_INVALID_URL = "ERR_INVALID_URL";
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key2) {
  return utils$1.endsWith(key2, "[]") ? key2.slice(0, -2) : key2;
}
function renderKey(path, key2, dots) {
  if (!path) return key2;
  return path.concat(key2).map(function each2(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop2) {
  return /^is[A-Z]/.test(prop2);
});
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils$1.toFlatObject(
    options,
    {
      metaTokens: true,
      dots: false,
      indexes: false
    },
    false,
    function defined(option, source2) {
      return !utils$1.isUndefined(source2[option]);
    }
  );
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (utils$1.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key2, path) {
    let arr = value;
    if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
      formData.append(renderKey(path, key2, dots), convertValue(value));
      return false;
    }
    if (value && !path && typeof value === "object") {
      if (utils$1.endsWith(key2, "{}")) {
        key2 = metaTokens ? key2 : key2.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key2, "[]")) && (arr = utils$1.toArray(value))) {
        key2 = removeBrackets(key2);
        arr.forEach(function each2(el, index2) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key2], index2, dots) : indexes === null ? key2 : key2 + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key2, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils$1.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils$1.forEach(value, function each2(el, key2) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key2) ? key2.trim() : key2, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key2) : [key2]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData$1(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each2(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const _options = utils$1.isFunction(options) ? {
    serialize: options
  } : options;
  const serializeFn = _options && _options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn(h2);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), {
    visitor: function(value, key2, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key2, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys2 = Object.keys(arr);
  let i;
  const len = keys2.length;
  let key2;
  for (i = 0; i < len; i++) {
    key2 = keys2[i];
    obj[key2] = arr[key2];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index2) {
    let name = path[index2++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index2 >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index2);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils$1.isObject(data);
      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils$1.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData$1(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }
  ],
  transformResponse: [
    function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data, this.parseReviver);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status2) {
    return status2 >= 200 && status2 < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key2;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key2 = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key2 || parsed[key2] && ignoreDuplicateOf[key2]) {
      return;
    }
    if (key2 === "set-cookie") {
      if (parsed[key2]) {
        parsed[key2].push(val);
      } else {
        parsed[key2] = [val];
      }
    } else {
      parsed[key2] = parsed[key2] ? parsed[key2] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = /* @__PURE__ */ Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value).replace(/[\r\n]+$/, "");
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$1.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key2 = utils$1.findKey(self2, lHeader);
      if (!key2 || self2[key2] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key2] !== false) {
        self2[key2 || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {}, dest, key2;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw TypeError("Object iterator must return a key-value pair");
        }
        obj[key2 = entry[0]] = (dest = obj[key2]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key2 = utils$1.findKey(this, header);
      if (key2) {
        const value = this[key2];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key2);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key2 = utils$1.findKey(this, header);
      return !!(key2 && this[key2] !== void 0 && (!matcher || matchHeaderValue(this, this[key2], key2, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key2 = utils$1.findKey(self2, _header);
        if (key2 && (!matcher || matchHeaderValue(self2, self2[key2], key2, matcher))) {
          delete self2[key2];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys2 = Object.keys(this);
    let i = keys2.length;
    let deleted = false;
    while (i--) {
      const key2 = keys2[i];
      if (!matcher || matchHeaderValue(this, this[key2], key2, matcher, true)) {
        delete this[key2];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key2 = utils$1.findKey(headers, header);
      if (key2) {
        self2[key2] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders$1.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key2) => {
  let mapped = key2[0].toUpperCase() + key2.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders$1);
function transformData(fns, response) {
  const config2 = this || defaults;
  const context = response || config2;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}
let CanceledError$1 = class CanceledError extends AxiosError$1 {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config2, request2) {
    super(message == null ? "canceled" : message, AxiosError$1.ERR_CANCELED, config2, request2);
    this.name = "CanceledError";
    this.__CANCEL__ = true;
  }
};
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(
      new AxiosError$1(
        "Request failed with status code " + response.status,
        [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      )
    );
  }
}
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min2) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min2 = min2 !== void 0 ? min2 : 1e3;
  return function push2(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min2) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [
    (loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }),
    throttled[1]
  ];
};
const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure, sameSite) {
      if (typeof document === "undefined") return;
      const cookie = [`${name}=${encodeURIComponent(value)}`];
      if (utils$1.isNumber(expires)) {
        cookie.push(`expires=${new Date(expires).toUTCString()}`);
      }
      if (utils$1.isString(path)) {
        cookie.push(`path=${path}`);
      }
      if (utils$1.isString(domain)) {
        cookie.push(`domain=${domain}`);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      if (utils$1.isString(sameSite)) {
        cookie.push(`SameSite=${sameSite}`);
      }
      document.cookie = cookie.join("; ");
    },
    read(name) {
      if (typeof document === "undefined") return null;
      const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
      return match ? decodeURIComponent(match[1]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  if (typeof url !== "string") {
    return false;
  }
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
function mergeConfig$2(config1, config2) {
  config2 = config2 || {};
  const config3 = {};
  function getMergedValue(target, source2, prop2, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source2)) {
      return utils$1.merge.call({ caseless }, target, source2);
    } else if (utils$1.isPlainObject(source2)) {
      return utils$1.merge({}, source2);
    } else if (utils$1.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(a, b, prop2, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop2, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a, prop2, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop2) {
    if (prop2 in config2) {
      return getMergedValue(a, b);
    } else if (prop2 in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop2) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop2, true)
  };
  utils$1.forEach(Object.keys({ ...config1, ...config2 }), function computeConfigValue(prop2) {
    if (prop2 === "__proto__" || prop2 === "constructor" || prop2 === "prototype") return;
    const merge2 = utils$1.hasOwnProp(mergeMap, prop2) ? mergeMap[prop2] : mergeDeepProperties;
    const configValue = merge2(config1[prop2], config2[prop2], prop2);
    utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop2] = configValue);
  });
  return config3;
}
const resolveConfig$1 = (config2) => {
  const newConfig = mergeConfig$2({}, config2);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders$1.from(headers);
  newConfig.url = buildURL(
    buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls),
    config2.params,
    config2.paramsSerializer
  );
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa(
        (auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")
      )
    );
  }
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if (utils$1.isFunction(data.getHeaders)) {
      const formHeaders = data.getHeaders();
      const allowedHeaders = ["content-type", "content-length"];
      Object.entries(formHeaders).forEach(([key2, val]) => {
        if (allowedHeaders.includes(key2.toLowerCase())) {
          headers.set(key2, val);
        }
      });
    }
  }
  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig$1(config2);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done2() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request2 = new XMLHttpRequest();
    request2.open(_config.method.toUpperCase(), _config.url, true);
    request2.timeout = _config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request2 && request2.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      const response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config: config2,
        request: request2
      };
      settle(
        function _resolve(value) {
          resolve(value);
          done2();
        },
        function _reject(err) {
          reject(err);
          done2();
        },
        response
      );
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, config2, request2));
      request2 = null;
    };
    request2.onerror = function handleError(event2) {
      const msg = event2 && event2.message ? event2.message : "Network Error";
      const err = new AxiosError$1(msg, AxiosError$1.ERR_NETWORK, config2, request2);
      err.event = event2 || null;
      reject(err);
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(
        new AxiosError$1(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
          config2,
          request2
        )
      );
      request2 = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request2) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key2) {
        request2.setRequestHeader(key2, val);
      });
    }
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request2.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request2.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request2.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request2.upload.addEventListener("progress", uploadThrottled);
      request2.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config2, request2) : cancel);
        request2.abort();
        request2 = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(
        new AxiosError$1(
          "Unsupported protocol " + protocol + ":",
          AxiosError$1.ERR_BAD_REQUEST,
          config2
        )
      );
      return;
    }
    request2.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(
          err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err)
        );
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout of ${timeout}ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done: done2, value } = await reader.read();
      if (done2) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator2 = readBytes(stream, chunkSize);
  let bytes = 0;
  let done2;
  let _onFinish = (e) => {
    if (!done2) {
      done2 = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done: done3, value } = await iterator2.next();
          if (done3) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator2.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
};
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const { isFunction } = utils$1;
const globalFetchAPI = (({ Request: Request2, Response: Response2 }) => ({
  Request: Request2,
  Response: Response2
}))(utils$1.global);
const { ReadableStream: ReadableStream$1, TextEncoder: TextEncoder$1 } = utils$1.global;
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const factory = (env) => {
  env = utils$1.merge.call(
    {
      skipUndefined: true
    },
    globalFetchAPI,
    env
  );
  const { fetch: envFetch, Request: Request2, Response: Response2 } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
  const isRequestSupported = isFunction(Request2);
  const isResponseSupported = isFunction(Response2);
  if (!isFetchSupported) {
    return false;
  }
  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);
  const encodeText = isFetchSupported && (typeof TextEncoder$1 === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder$1()) : async (str) => new Uint8Array(await new Request2(str).arrayBuffer()));
  const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const body = new ReadableStream$1();
    const hasContentType = new Request2(platform.origin, {
      body,
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    body.cancel();
    return duplexAccessed && !hasContentType;
  });
  const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response2("").body));
  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && (() => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type2) => {
      !resolvers[type2] && (resolvers[type2] = (res, config2) => {
        let method = res && res[type2];
        if (method) {
          return method.call(res);
        }
        throw new AxiosError$1(
          `Response type '${type2}' is not supported`,
          AxiosError$1.ERR_NOT_SUPPORT,
          config2
        );
      });
    });
  })();
  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils$1.isBlob(body)) {
      return body.size;
    }
    if (utils$1.isSpecCompliantForm(body)) {
      const _request = new Request2(platform.origin, {
        method: "POST",
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  return async (config2) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig$1(config2);
    let _fetch = envFetch || fetch;
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let composedSignal = composeSignals(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );
    let request2 = null;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request2(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }
      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      const isCredentialsSupported = isRequestSupported && "credentials" in Request2.prototype;
      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      };
      request2 = isRequestSupported && new Request2(url, resolvedOptions);
      let response = await (isRequestSupported ? _fetch(request2, fetchOptions) : _fetch(url, resolvedOptions));
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop2) => {
          options[prop2] = response[prop2];
        });
        const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        response = new Response2(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](
        response,
        config2
      );
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders$1.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config: config2,
          request: request2
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();
      if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError$1(
            "Network Error",
            AxiosError$1.ERR_NETWORK,
            config2,
            request2,
            err && err.response
          ),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError$1.from(err, err && err.code, config2, request2, err && err.response);
    }
  };
};
const seedCache = /* @__PURE__ */ new Map();
const getFetch = (config2) => {
  let env = config2 && config2.env || {};
  const { fetch: fetch2, Request: Request2, Response: Response2 } = env;
  const seeds = [Request2, Response2, fetch2];
  let len = seeds.length, i = len, seed, target, map = seedCache;
  while (i--) {
    seed = seeds[i];
    target = map.get(seed);
    target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
    map = target;
  }
  return target;
};
getFetch();
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch
  }
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
function getAdapter$1(adapters2, config2) {
  adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
  const { length } = adapters2;
  let nameOrAdapter;
  let adapter;
  const rejectedReasons = {};
  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters2[i];
    let id;
    adapter = nameOrAdapter;
    if (!isResolvedHandle(nameOrAdapter)) {
      adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
      if (adapter === void 0) {
        throw new AxiosError$1(`Unknown adapter '${id}'`);
      }
    }
    if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config2)))) {
      break;
    }
    rejectedReasons[id || "#" + i] = adapter;
  }
  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(
      ([id, state2]) => `adapter ${id} ` + (state2 === false ? "is not supported by the environment" : "is not available in the build")
    );
    let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
    throw new AxiosError$1(
      `There is no suitable adapter to dispatch the request ` + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return adapter;
}
const adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: getAdapter$1,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters
};
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError$1(null, config2);
  }
}
function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = AxiosHeaders$1.from(config2.headers);
  config2.data = transformData.call(config2, config2.transformRequest);
  if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
    config2.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config2.adapter || defaults.adapter, config2);
  return adapter(config2).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config2);
      response.data = transformData.call(config2, config2.transformResponse, response);
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel$1(reason)) {
        throwIfCancellationRequested(config2);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config2,
            config2.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    }
  );
}
const VERSION$1 = "1.14.0";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type2, i) => {
  validators$1[type2] = function validator2(thing) {
    return typeof thing === type2 || "a" + (i < 1 ? "n " : " ") + type2;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError$1(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError$1.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys2 = Object.keys(options);
  let i = keys2.length;
  while (i-- > 0) {
    const opt = keys2[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1(
          "option " + opt + " must be " + result,
          AxiosError$1.ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1("Unknown option " + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config2) {
    try {
      return await this._request(configOrUrl, config2);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config2) {
    if (typeof configOrUrl === "string") {
      config2 = config2 || {};
      config2.url = configOrUrl;
    } else {
      config2 = configOrUrl || {};
    }
    config2 = mergeConfig$2(this.defaults, config2);
    const { transitional: transitional2, paramsSerializer, headers } = config2;
    if (transitional2 !== void 0) {
      validator.assertOptions(
        transitional2,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean),
          legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
        },
        false
      );
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config2.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(
          paramsSerializer,
          {
            encode: validators.function,
            serialize: validators.function
          },
          true
        );
      }
    }
    if (config2.allowAbsoluteUrls !== void 0) ;
    else if (this.defaults.allowAbsoluteUrls !== void 0) {
      config2.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config2.allowAbsoluteUrls = true;
    }
    validator.assertOptions(
      config2,
      {
        baseUrl: validators.spelling("baseURL"),
        withXsrfToken: validators.spelling("withXSRFToken")
      },
      true
    );
    config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$1.merge(headers.common, headers[config2.method]);
    headers && utils$1.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (method) => {
      delete headers[method];
    });
    config2.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      const transitional3 = config2.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering = transitional3 && transitional3.legacyInterceptorReqResOrdering;
      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config2);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config2;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config2) {
    config2 = mergeConfig$2(this.defaults, config2);
    const fullPath = buildFullPath(config2.baseURL, config2.url, config2.allowAbsoluteUrls);
    return buildURL(fullPath, config2.params, config2.paramsSerializer);
  }
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(
      mergeConfig$2(config2 || {}, {
        method,
        url,
        data: (config2 || {}).data
      })
    );
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config2) {
      return this.request(
        mergeConfig$2(config2 || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        })
      );
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
let CancelToken$1 = class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config2, request2) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError$1(message, config2, request2);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index2 = this._listeners.indexOf(listener);
    if (index2 !== -1) {
      this._listeners.splice(index2, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode$1 = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode$1).forEach(([key2, value]) => {
  HttpStatusCode$1[value] = key2;
});
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$2(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;
axios.AxiosError = AxiosError$1;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$2;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel,
  CancelToken: CancelToken2,
  VERSION,
  all: all2,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig$1
} = axios;
var Config = class {
  constructor(defaults2) {
    this.config = {};
    this.defaults = defaults2;
  }
  extend(defaults2) {
    if (defaults2) {
      this.defaults = { ...this.defaults, ...defaults2 };
    }
    return this;
  }
  replace(newConfig) {
    this.config = newConfig;
  }
  get(key2) {
    return has(this.config, key2) ? get$3(this.config, key2) : get$3(this.defaults, key2);
  }
  set(keyOrValues, value) {
    if (typeof keyOrValues === "string") {
      set$2(this.config, keyOrValues, value);
    } else {
      Object.entries(keyOrValues).forEach(([key2, val]) => {
        set$2(this.config, key2, val);
      });
    }
  }
};
var config$1 = new Config({
  form: {
    recentlySuccessfulDuration: 2e3,
    forceIndicesArrayFormatInFormData: true,
    withAllErrors: false
  },
  future: {
    preserveEqualProps: false,
    useDataInertiaHeadAttribute: false,
    useDialogForErrorModal: false,
    useScriptElementForInitialPage: false
  },
  prefetch: {
    cacheFor: 3e4,
    hoverDelay: 75
  }
});
function debounce(fn, delay) {
  let timeoutID;
  return function(...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn.apply(this, args), delay);
  };
}
function fireEvent(name, options) {
  return document.dispatchEvent(new CustomEvent(`inertia:${name}`, options));
}
var fireBeforeEvent = (visit) => {
  return fireEvent("before", { cancelable: true, detail: { visit } });
};
var fireErrorEvent = (errors) => {
  return fireEvent("error", { detail: { errors } });
};
var fireExceptionEvent = (exception) => {
  return fireEvent("exception", { cancelable: true, detail: { exception } });
};
var fireFinishEvent = (visit) => {
  return fireEvent("finish", { detail: { visit } });
};
var fireInvalidEvent = (response) => {
  return fireEvent("invalid", { cancelable: true, detail: { response } });
};
var fireBeforeUpdateEvent = (page2) => {
  return fireEvent("beforeUpdate", { detail: { page: page2 } });
};
var fireNavigateEvent = (page2) => {
  return fireEvent("navigate", { detail: { page: page2 } });
};
var fireProgressEvent = (progress3) => {
  return fireEvent("progress", { detail: { progress: progress3 } });
};
var fireStartEvent = (visit) => {
  return fireEvent("start", { detail: { visit } });
};
var fireSuccessEvent = (page2) => {
  return fireEvent("success", { detail: { page: page2 } });
};
var firePrefetchedEvent = (response, visit) => {
  return fireEvent("prefetched", { detail: { fetchedAt: Date.now(), response: response.data, visit } });
};
var firePrefetchingEvent = (visit) => {
  return fireEvent("prefetching", { detail: { visit } });
};
var fireFlashEvent = (flash) => {
  return fireEvent("flash", { detail: { flash } });
};
var SessionStorage = class {
  static set(key2, value) {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key2, JSON.stringify(value));
    }
  }
  static get(key2) {
    if (typeof window !== "undefined") {
      return JSON.parse(window.sessionStorage.getItem(key2) || "null");
    }
  }
  static merge(key2, value) {
    const existing = this.get(key2);
    if (existing === null) {
      this.set(key2, value);
    } else {
      this.set(key2, { ...existing, ...value });
    }
  }
  static remove(key2) {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(key2);
    }
  }
  static removeNested(key2, nestedKey) {
    const existing = this.get(key2);
    if (existing !== null) {
      delete existing[nestedKey];
      this.set(key2, existing);
    }
  }
  static exists(key2) {
    try {
      return this.get(key2) !== null;
    } catch (error) {
      return false;
    }
  }
  static clear() {
    if (typeof window !== "undefined") {
      window.sessionStorage.clear();
    }
  }
};
SessionStorage.locationVisitKey = "inertiaLocationVisit";
var encryptHistory = async (data) => {
  if (typeof window === "undefined") {
    throw new Error("Unable to encrypt history");
  }
  const iv = getIv();
  const storedKey = await getKeyFromSessionStorage();
  const key2 = await getOrCreateKey(storedKey);
  if (!key2) {
    throw new Error("Unable to encrypt history");
  }
  const encrypted = await encryptData(iv, key2, data);
  return encrypted;
};
var historySessionStorageKeys = {
  key: "historyKey",
  iv: "historyIv"
};
var decryptHistory = async (data) => {
  const iv = getIv();
  const storedKey = await getKeyFromSessionStorage();
  if (!storedKey) {
    throw new Error("Unable to decrypt history");
  }
  return await decryptData(iv, storedKey, data);
};
var encryptData = async (iv, key2, data) => {
  if (typeof window === "undefined") {
    throw new Error("Unable to encrypt history");
  }
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve(data);
  }
  const textEncoder = new TextEncoder();
  const str = JSON.stringify(data);
  const encoded = new Uint8Array(str.length * 3);
  const result = textEncoder.encodeInto(str, encoded);
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv
    },
    key2,
    encoded.subarray(0, result.written)
  );
};
var decryptData = async (iv, key2, data) => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Decryption is not supported in this environment. SSL is required.");
    return Promise.resolve(data);
  }
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv
    },
    key2,
    data
  );
  return JSON.parse(new TextDecoder().decode(decrypted));
};
var getIv = () => {
  const ivString = SessionStorage.get(historySessionStorageKeys.iv);
  if (ivString) {
    return new Uint8Array(ivString);
  }
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  SessionStorage.set(historySessionStorageKeys.iv, Array.from(iv));
  return iv;
};
var createKey = async () => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve(null);
  }
  return window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );
};
var saveKey = async (key2) => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve();
  }
  const keyData = await window.crypto.subtle.exportKey("raw", key2);
  SessionStorage.set(historySessionStorageKeys.key, Array.from(new Uint8Array(keyData)));
};
var getOrCreateKey = async (key2) => {
  if (key2) {
    return key2;
  }
  const newKey = await createKey();
  if (!newKey) {
    return null;
  }
  await saveKey(newKey);
  return newKey;
};
var getKeyFromSessionStorage = async () => {
  const stringKey = SessionStorage.get(historySessionStorageKeys.key);
  if (!stringKey) {
    return null;
  }
  const key2 = await window.crypto.subtle.importKey(
    "raw",
    new Uint8Array(stringKey),
    {
      name: "AES-GCM",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );
  return key2;
};
var objectsAreEqual = (obj1, obj2, excludeKeys) => {
  if (obj1 === obj2) {
    return true;
  }
  for (const key2 in obj1) {
    if (excludeKeys.includes(key2)) {
      continue;
    }
    if (obj1[key2] === obj2[key2]) {
      continue;
    }
    if (!compareValues(obj1[key2], obj2[key2])) {
      return false;
    }
  }
  for (const key2 in obj2) {
    if (excludeKeys.includes(key2)) {
      continue;
    }
    if (!(key2 in obj1)) {
      return false;
    }
  }
  return true;
};
var compareValues = (value1, value2) => {
  switch (typeof value1) {
    case "object":
      return objectsAreEqual(value1, value2, []);
    case "function":
      return value1.toString() === value2.toString();
    default:
      return value1 === value2;
  }
};
var conversionMap = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
};
var timeToMs = (time) => {
  if (typeof time === "number") {
    return time;
  }
  for (const [unit, conversion] of Object.entries(conversionMap)) {
    if (time.endsWith(unit)) {
      return parseFloat(time) * conversion;
    }
  }
  return parseInt(time);
};
var PrefetchedRequests = class {
  constructor() {
    this.cached = [];
    this.inFlightRequests = [];
    this.removalTimers = [];
    this.currentUseId = null;
  }
  add(params, sendFunc, { cacheFor, cacheTags }) {
    const inFlight = this.findInFlight(params);
    if (inFlight) {
      return Promise.resolve();
    }
    const existing = this.findCached(params);
    if (!params.fresh && existing && existing.staleTimestamp > Date.now()) {
      return Promise.resolve();
    }
    const [stale, prefetchExpiresIn] = this.extractStaleValues(cacheFor);
    const promise = new Promise((resolve, reject) => {
      sendFunc({
        ...params,
        onCancel: () => {
          this.remove(params);
          params.onCancel();
          reject();
        },
        onError: (error) => {
          this.remove(params);
          params.onError(error);
          reject();
        },
        onPrefetching(visitParams) {
          params.onPrefetching(visitParams);
        },
        onPrefetched(response, visit) {
          params.onPrefetched(response, visit);
        },
        onPrefetchResponse(response) {
          resolve(response);
        },
        onPrefetchError(error) {
          prefetchedRequests.removeFromInFlight(params);
          reject(error);
        }
      });
    }).then((response) => {
      this.remove(params);
      const pageResponse = response.getPageResponse();
      page$1.mergeOncePropsIntoResponse(pageResponse);
      this.cached.push({
        params: { ...params },
        staleTimestamp: Date.now() + stale,
        expiresAt: Date.now() + prefetchExpiresIn,
        response: promise,
        singleUse: prefetchExpiresIn === 0,
        timestamp: Date.now(),
        inFlight: false,
        tags: Array.isArray(cacheTags) ? cacheTags : [cacheTags]
      });
      const oncePropExpiresIn = this.getShortestOncePropTtl(pageResponse);
      this.scheduleForRemoval(
        params,
        oncePropExpiresIn ? Math.min(prefetchExpiresIn, oncePropExpiresIn) : prefetchExpiresIn
      );
      this.removeFromInFlight(params);
      response.handlePrefetch();
      return response;
    });
    this.inFlightRequests.push({
      params: { ...params },
      response: promise,
      staleTimestamp: null,
      inFlight: true
    });
    return promise;
  }
  removeAll() {
    this.cached = [];
    this.removalTimers.forEach((removalTimer) => {
      clearTimeout(removalTimer.timer);
    });
    this.removalTimers = [];
  }
  removeByTags(tags) {
    this.cached = this.cached.filter((prefetched) => {
      return !prefetched.tags.some((tag) => tags.includes(tag));
    });
  }
  remove(params) {
    this.cached = this.cached.filter((prefetched) => {
      return !this.paramsAreEqual(prefetched.params, params);
    });
    this.clearTimer(params);
  }
  removeFromInFlight(params) {
    this.inFlightRequests = this.inFlightRequests.filter((prefetching) => {
      return !this.paramsAreEqual(prefetching.params, params);
    });
  }
  extractStaleValues(cacheFor) {
    const [stale, expires] = this.cacheForToStaleAndExpires(cacheFor);
    return [timeToMs(stale), timeToMs(expires)];
  }
  cacheForToStaleAndExpires(cacheFor) {
    if (!Array.isArray(cacheFor)) {
      return [cacheFor, cacheFor];
    }
    switch (cacheFor.length) {
      case 0:
        return [0, 0];
      case 1:
        return [cacheFor[0], cacheFor[0]];
      default:
        return [cacheFor[0], cacheFor[1]];
    }
  }
  clearTimer(params) {
    const timer = this.removalTimers.find((removalTimer) => {
      return this.paramsAreEqual(removalTimer.params, params);
    });
    if (timer) {
      clearTimeout(timer.timer);
      this.removalTimers = this.removalTimers.filter((removalTimer) => removalTimer !== timer);
    }
  }
  scheduleForRemoval(params, expiresIn) {
    if (typeof window === "undefined") {
      return;
    }
    this.clearTimer(params);
    if (expiresIn > 0) {
      const timer = window.setTimeout(() => this.remove(params), expiresIn);
      this.removalTimers.push({
        params,
        timer
      });
    }
  }
  get(params) {
    return this.findCached(params) || this.findInFlight(params);
  }
  use(prefetched, params) {
    const id = `${params.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    this.currentUseId = id;
    return prefetched.response.then((response) => {
      if (this.currentUseId !== id) {
        return;
      }
      response.mergeParams({ ...params, onPrefetched: () => {
      } });
      this.removeSingleUseItems(params);
      return response.handle();
    });
  }
  removeSingleUseItems(params) {
    this.cached = this.cached.filter((prefetched) => {
      if (!this.paramsAreEqual(prefetched.params, params)) {
        return true;
      }
      return !prefetched.singleUse;
    });
  }
  findCached(params) {
    return this.cached.find((prefetched) => {
      return this.paramsAreEqual(prefetched.params, params);
    }) || null;
  }
  findInFlight(params) {
    return this.inFlightRequests.find((prefetched) => {
      return this.paramsAreEqual(prefetched.params, params);
    }) || null;
  }
  withoutPurposePrefetchHeader(params) {
    const newParams = cloneDeep(params);
    if (newParams.headers["Purpose"] === "prefetch") {
      delete newParams.headers["Purpose"];
    }
    return newParams;
  }
  paramsAreEqual(params1, params2) {
    return objectsAreEqual(
      this.withoutPurposePrefetchHeader(params1),
      this.withoutPurposePrefetchHeader(params2),
      [
        "showProgress",
        "replace",
        "prefetch",
        "preserveScroll",
        "preserveState",
        "onBefore",
        "onBeforeUpdate",
        "onStart",
        "onProgress",
        "onFinish",
        "onCancel",
        "onSuccess",
        "onError",
        "onFlash",
        "onPrefetched",
        "onCancelToken",
        "onPrefetching",
        "async",
        "viewTransition"
      ]
    );
  }
  updateCachedOncePropsFromCurrentPage() {
    this.cached.forEach((prefetched) => {
      prefetched.response.then((response) => {
        const pageResponse = response.getPageResponse();
        page$1.mergeOncePropsIntoResponse(pageResponse, { force: true });
        for (const [group, deferredProps] of Object.entries(pageResponse.deferredProps ?? {})) {
          const remaining = deferredProps.filter((prop2) => pageResponse.props[prop2] === void 0);
          if (remaining.length > 0) {
            pageResponse.deferredProps[group] = remaining;
          } else {
            delete pageResponse.deferredProps[group];
          }
        }
        const oncePropExpiresIn = this.getShortestOncePropTtl(pageResponse);
        if (oncePropExpiresIn === null) {
          return;
        }
        const prefetchExpiresIn = prefetched.expiresAt - Date.now();
        const expiresIn = Math.min(prefetchExpiresIn, oncePropExpiresIn);
        if (expiresIn > 0) {
          this.scheduleForRemoval(prefetched.params, expiresIn);
        } else {
          this.remove(prefetched.params);
        }
      });
    });
  }
  getShortestOncePropTtl(page2) {
    const expiryTimestamps = Object.values(page2.onceProps ?? {}).map((onceProp) => onceProp.expiresAt).filter((expiresAt) => !!expiresAt);
    if (expiryTimestamps.length === 0) {
      return null;
    }
    return Math.min(...expiryTimestamps) - Date.now();
  }
};
var prefetchedRequests = new PrefetchedRequests();
var requestAnimationFrame = (cb, times = 1) => {
  window.requestAnimationFrame(() => {
    if (times > 1) {
      requestAnimationFrame(cb, times - 1);
    } else {
      cb();
    }
  });
};
var getInitialPageFromDOM = (id, useScriptElement = false) => {
  if (typeof window === "undefined") {
    return null;
  }
  if (!useScriptElement) {
    const el = document.getElementById(id);
    if (el?.dataset.page) {
      return JSON.parse(el.dataset.page);
    }
  }
  const scriptEl = document.querySelector(`script[data-page="${id}"][type="application/json"]`);
  if (scriptEl?.textContent) {
    return JSON.parse(scriptEl.textContent);
  }
  return null;
};
var isServer = typeof window === "undefined";
var isFirefox = !isServer && /Firefox/i.test(window.navigator.userAgent);
var Scroll = class {
  static save() {
    history.saveScrollPositions(this.getScrollRegions());
  }
  static getScrollRegions() {
    return Array.from(this.regions()).map((region) => ({
      top: region.scrollTop,
      left: region.scrollLeft
    }));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static scrollToTop() {
    if (isFirefox && getComputedStyle(document.documentElement).scrollBehavior === "smooth") {
      return requestAnimationFrame(() => window.scrollTo(0, 0), 2);
    }
    window.scrollTo(0, 0);
  }
  static reset() {
    const anchorHash = isServer ? null : window.location.hash;
    if (!anchorHash) {
      this.scrollToTop();
    }
    this.regions().forEach((region) => {
      if (typeof region.scrollTo === "function") {
        region.scrollTo(0, 0);
      } else {
        region.scrollTop = 0;
        region.scrollLeft = 0;
      }
    });
    this.save();
    this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const anchorHash = isServer ? null : window.location.hash;
    if (anchorHash) {
      setTimeout(() => {
        const anchorElement = document.getElementById(anchorHash.slice(1));
        anchorElement ? anchorElement.scrollIntoView() : this.scrollToTop();
      });
    }
  }
  static restore(scrollRegions) {
    if (isServer) {
      return;
    }
    window.requestAnimationFrame(() => {
      this.restoreDocument();
      this.restoreScrollRegions(scrollRegions);
    });
  }
  static restoreScrollRegions(scrollRegions) {
    if (isServer) {
      return;
    }
    this.regions().forEach((region, index2) => {
      const scrollPosition = scrollRegions[index2];
      if (!scrollPosition) {
        return;
      }
      if (typeof region.scrollTo === "function") {
        region.scrollTo(scrollPosition.left, scrollPosition.top);
      } else {
        region.scrollTop = scrollPosition.top;
        region.scrollLeft = scrollPosition.left;
      }
    });
  }
  static restoreDocument() {
    const scrollPosition = history.getDocumentScrollPosition();
    window.scrollTo(scrollPosition.left, scrollPosition.top);
  }
  static onScroll(event2) {
    const target = event2.target;
    if (typeof target.hasAttribute === "function" && target.hasAttribute("scroll-region")) {
      this.save();
    }
  }
  static onWindowScroll() {
    history.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
};
var isFile$1 = (value) => typeof File !== "undefined" && value instanceof File || value instanceof Blob || typeof FileList !== "undefined" && value instanceof FileList && value.length > 0;
function hasFiles$1(data) {
  return isFile$1(data) || data instanceof FormData && Array.from(data.values()).some((value) => hasFiles$1(value)) || typeof data === "object" && data !== null && Object.values(data).some((value) => hasFiles$1(value));
}
var isFormData = (value) => value instanceof FormData;
function objectToFormData(source2, form = new FormData(), parentKey = null, queryStringArrayFormat = "brackets") {
  source2 = source2 || {};
  for (const key2 in source2) {
    if (Object.prototype.hasOwnProperty.call(source2, key2)) {
      append$1(form, composeKey(parentKey, key2, "indices"), source2[key2], queryStringArrayFormat);
    }
  }
  return form;
}
function composeKey(parent, key2, format) {
  if (!parent) {
    return key2;
  }
  return format === "brackets" ? `${parent}[]` : `${parent}[${key2}]`;
}
function append$1(form, key2, value, format) {
  if (Array.isArray(value)) {
    return Array.from(value.keys()).forEach(
      (index2) => append$1(form, composeKey(key2, index2.toString(), format), value[index2], format)
    );
  } else if (value instanceof Date) {
    return form.append(key2, value.toISOString());
  } else if (value instanceof File) {
    return form.append(key2, value, value.name);
  } else if (value instanceof Blob) {
    return form.append(key2, value);
  } else if (typeof value === "boolean") {
    return form.append(key2, value ? "1" : "0");
  } else if (typeof value === "string") {
    return form.append(key2, value);
  } else if (typeof value === "number") {
    return form.append(key2, `${value}`);
  } else if (value === null || value === void 0) {
    return form.append(key2, "");
  }
  objectToFormData(value, form, key2, format);
}
function hrefToUrl(href) {
  return new URL(href.toString(), typeof window === "undefined" ? void 0 : window.location.toString());
}
var transformUrlAndData = (href, data, method, forceFormData, queryStringArrayFormat) => {
  let url = typeof href === "string" ? hrefToUrl(href) : href;
  if ((hasFiles$1(data) || forceFormData) && !isFormData(data)) {
    if (config$1.get("form.forceIndicesArrayFormatInFormData")) {
      queryStringArrayFormat = "indices";
    }
    data = objectToFormData(data, new FormData(), null, queryStringArrayFormat);
  }
  if (isFormData(data)) {
    return [url, data];
  }
  const [_href, _data] = mergeDataIntoQueryString(method, url, data, queryStringArrayFormat);
  return [hrefToUrl(_href), _data];
};
function mergeDataIntoQueryString(method, href, data, qsArrayFormat = "brackets") {
  const hasDataForQueryString = method === "get" && !isFormData(data) && Object.keys(data).length > 0;
  const hasHost = urlHasProtocol(href.toString());
  const hasAbsolutePath = hasHost || href.toString().startsWith("/") || href.toString() === "";
  const hasRelativePath = !hasAbsolutePath && !href.toString().startsWith("#") && !href.toString().startsWith("?");
  const hasRelativePathWithDotPrefix = /^[.]{1,2}([/]|$)/.test(href.toString());
  const hasSearch = href.toString().includes("?") || hasDataForQueryString;
  const hasHash = href.toString().includes("#");
  const url = new URL(href.toString(), typeof window === "undefined" ? "http://localhost" : window.location.toString());
  if (hasDataForQueryString) {
    const hasIndices = /\[\d+\]/.test(decodeURIComponent(url.search));
    const parseOptions = { ignoreQueryPrefix: true, allowSparse: true };
    url.search = libExports.stringify(
      { ...libExports.parse(url.search, parseOptions), ...data },
      {
        encodeValuesOnly: true,
        arrayFormat: hasIndices ? "indices" : qsArrayFormat
      }
    );
  }
  return [
    [
      hasHost ? `${url.protocol}//${url.host}` : "",
      hasAbsolutePath ? url.pathname : "",
      hasRelativePath ? url.pathname.substring(hasRelativePathWithDotPrefix ? 0 : 1) : "",
      hasSearch ? url.search : "",
      hasHash ? url.hash : ""
    ].join(""),
    hasDataForQueryString ? {} : data
  ];
}
function urlWithoutHash(url) {
  url = new URL(url.href);
  url.hash = "";
  return url;
}
var setHashIfSameUrl = (originUrl, destinationUrl) => {
  if (originUrl.hash && !destinationUrl.hash && urlWithoutHash(originUrl).href === destinationUrl.href) {
    destinationUrl.hash = originUrl.hash;
  }
};
var isSameUrlWithoutHash = (url1, url2) => {
  return urlWithoutHash(url1).href === urlWithoutHash(url2).href;
};
var isSameUrlWithoutQueryOrHash = (url1, url2) => {
  return url1.origin === url2.origin && url1.pathname === url2.pathname;
};
function isUrlMethodPair(href) {
  return href !== null && typeof href === "object" && href !== void 0 && "url" in href && "method" in href;
}
function urlHasProtocol(url) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(url);
}
var CurrentPage = class {
  constructor() {
    this.componentId = {};
    this.listeners = [];
    this.isFirstPageLoad = true;
    this.cleared = false;
    this.pendingDeferredProps = null;
    this.historyQuotaExceeded = false;
  }
  init({
    initialPage,
    swapComponent,
    resolveComponent,
    onFlash
  }) {
    this.page = { ...initialPage, flash: initialPage.flash ?? {} };
    this.swapComponent = swapComponent;
    this.resolveComponent = resolveComponent;
    this.onFlashCallback = onFlash;
    eventHandler.on("historyQuotaExceeded", () => {
      this.historyQuotaExceeded = true;
    });
    return this;
  }
  set(page2, {
    replace = false,
    preserveScroll = false,
    preserveState = false,
    viewTransition = false
  } = {}) {
    if (Object.keys(page2.deferredProps || {}).length) {
      this.pendingDeferredProps = {
        deferredProps: page2.deferredProps,
        component: page2.component,
        url: page2.url
      };
      if (page2.initialDeferredProps === void 0) {
        page2.initialDeferredProps = page2.deferredProps;
      }
    }
    this.componentId = {};
    const componentId = this.componentId;
    if (page2.clearHistory) {
      history.clear();
    }
    return this.resolve(page2.component).then((component2) => {
      if (componentId !== this.componentId) {
        return;
      }
      page2.rememberedState ?? (page2.rememberedState = {});
      const isServer3 = typeof window === "undefined";
      const location = !isServer3 ? window.location : new URL(page2.url);
      const scrollRegions = !isServer3 && preserveScroll ? Scroll.getScrollRegions() : [];
      replace = replace || isSameUrlWithoutHash(hrefToUrl(page2.url), location);
      const pageForHistory = { ...page2, flash: {} };
      return new Promise(
        (resolve) => replace ? history.replaceState(pageForHistory, resolve) : history.pushState(pageForHistory, resolve)
      ).then(() => {
        const isNewComponent = !this.isTheSame(page2);
        if (!isNewComponent && Object.keys(page2.props.errors || {}).length > 0) {
          viewTransition = false;
        }
        this.page = page2;
        this.cleared = false;
        if (this.hasOnceProps()) {
          prefetchedRequests.updateCachedOncePropsFromCurrentPage();
        }
        if (isNewComponent) {
          this.fireEventsFor("newComponent");
        }
        if (this.isFirstPageLoad) {
          this.fireEventsFor("firstLoad");
        }
        this.isFirstPageLoad = false;
        if (this.historyQuotaExceeded) {
          this.historyQuotaExceeded = false;
          return;
        }
        return this.swap({
          component: component2,
          page: page2,
          preserveState,
          viewTransition
        }).then(() => {
          if (preserveScroll) {
            window.requestAnimationFrame(() => Scroll.restoreScrollRegions(scrollRegions));
          } else {
            Scroll.reset();
          }
          if (this.pendingDeferredProps && this.pendingDeferredProps.component === page2.component && this.pendingDeferredProps.url === page2.url) {
            eventHandler.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps);
          }
          this.pendingDeferredProps = null;
          if (!replace) {
            fireNavigateEvent(page2);
          }
        });
      });
    });
  }
  setQuietly(page2, {
    preserveState = false
  } = {}) {
    return this.resolve(page2.component).then((component2) => {
      this.page = page2;
      this.cleared = false;
      history.setCurrent(page2);
      return this.swap({ component: component2, page: page2, preserveState, viewTransition: false });
    });
  }
  clear() {
    this.cleared = true;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  getWithoutFlashData() {
    return { ...this.page, flash: {} };
  }
  hasOnceProps() {
    return Object.keys(this.page.onceProps ?? {}).length > 0;
  }
  merge(data) {
    this.page = { ...this.page, ...data };
  }
  setFlash(flash) {
    this.page = { ...this.page, flash };
    this.onFlashCallback?.(flash);
  }
  setUrlHash(hash) {
    if (!this.page.url.includes(hash)) {
      this.page.url += hash;
    }
  }
  remember(data) {
    this.page.rememberedState = data;
  }
  swap({
    component: component2,
    page: page2,
    preserveState,
    viewTransition
  }) {
    const doSwap = () => this.swapComponent({ component: component2, page: page2, preserveState });
    if (!viewTransition || !document?.startViewTransition || document.visibilityState === "hidden") {
      return doSwap();
    }
    const viewTransitionCallback = typeof viewTransition === "boolean" ? () => null : viewTransition;
    return new Promise((resolve) => {
      const transitionResult = document.startViewTransition(() => doSwap().then(resolve));
      viewTransitionCallback(transitionResult);
    });
  }
  resolve(component2) {
    return Promise.resolve(this.resolveComponent(component2));
  }
  isTheSame(page2) {
    return this.page.component === page2.component;
  }
  on(event2, callback) {
    this.listeners.push({ event: event2, callback });
    return () => {
      this.listeners = this.listeners.filter((listener) => listener.event !== event2 && listener.callback !== callback);
    };
  }
  fireEventsFor(event2) {
    this.listeners.filter((listener) => listener.event === event2).forEach((listener) => listener.callback());
  }
  mergeOncePropsIntoResponse(response, { force = false } = {}) {
    Object.entries(response.onceProps ?? {}).forEach(([key2, onceProp]) => {
      const existingOnceProp = this.page.onceProps?.[key2];
      if (existingOnceProp === void 0) {
        return;
      }
      if (force || response.props[onceProp.prop] === void 0) {
        response.props[onceProp.prop] = this.page.props[existingOnceProp.prop];
        response.onceProps[key2].expiresAt = existingOnceProp.expiresAt;
      }
    });
  }
};
var page$1 = new CurrentPage();
var Queue = class {
  constructor() {
    this.items = [];
    this.processingPromise = null;
  }
  add(item) {
    this.items.push(item);
    return this.process();
  }
  process() {
    this.processingPromise ?? (this.processingPromise = this.processNext().finally(() => {
      this.processingPromise = null;
    }));
    return this.processingPromise;
  }
  processNext() {
    const next = this.items.shift();
    if (next) {
      return Promise.resolve(next()).then(() => this.processNext());
    }
    return Promise.resolve();
  }
};
var isServer2 = typeof window === "undefined";
var queue = new Queue();
var isChromeIOS = !isServer2 && /CriOS/.test(window.navigator.userAgent);
var History = class {
  constructor() {
    this.rememberedState = "rememberedState";
    this.scrollRegions = "scrollRegions";
    this.preserveUrl = false;
    this.current = {};
    this.initialState = null;
  }
  remember(data, key2) {
    this.replaceState({
      ...page$1.getWithoutFlashData(),
      rememberedState: {
        ...page$1.get()?.rememberedState ?? {},
        [key2]: data
      }
    });
  }
  restore(key2) {
    if (!isServer2) {
      return this.current[this.rememberedState]?.[key2] !== void 0 ? this.current[this.rememberedState]?.[key2] : this.initialState?.[this.rememberedState]?.[key2];
    }
  }
  pushState(page2, cb = null) {
    if (isServer2) {
      return;
    }
    if (this.preserveUrl) {
      cb && cb();
      return;
    }
    this.current = page2;
    queue.add(() => {
      return this.getPageData(page2).then((data) => {
        const doPush = () => this.doPushState({ page: data }, page2.url).then(() => cb?.());
        if (isChromeIOS) {
          return new Promise((resolve) => {
            setTimeout(() => doPush().then(resolve));
          });
        }
        return doPush();
      });
    });
  }
  clonePageProps(page2) {
    try {
      structuredClone(page2.props);
      return page2;
    } catch {
      return {
        ...page2,
        props: cloneDeep(page2.props)
      };
    }
  }
  getPageData(page2) {
    const pageWithClonedProps = this.clonePageProps(page2);
    return new Promise((resolve) => {
      return page2.encryptHistory ? encryptHistory(pageWithClonedProps).then(resolve) : resolve(pageWithClonedProps);
    });
  }
  processQueue() {
    return queue.process();
  }
  decrypt(page2 = null) {
    if (isServer2) {
      return Promise.resolve(page2 ?? page$1.get());
    }
    const pageData = page2 ?? window.history.state?.page;
    return this.decryptPageData(pageData).then((data) => {
      if (!data) {
        throw new Error("Unable to decrypt history");
      }
      if (this.initialState === null) {
        this.initialState = data ?? void 0;
      } else {
        this.current = data ?? {};
      }
      return data;
    });
  }
  decryptPageData(pageData) {
    return pageData instanceof ArrayBuffer ? decryptHistory(pageData) : Promise.resolve(pageData);
  }
  saveScrollPositions(scrollRegions) {
    queue.add(() => {
      return Promise.resolve().then(() => {
        if (!window.history.state?.page) {
          return;
        }
        if (isEqual(this.getScrollRegions(), scrollRegions)) {
          return;
        }
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions
        });
      });
    });
  }
  saveDocumentScrollPosition(scrollRegion) {
    queue.add(() => {
      return Promise.resolve().then(() => {
        if (!window.history.state?.page) {
          return;
        }
        if (isEqual(this.getDocumentScrollPosition(), scrollRegion)) {
          return;
        }
        return this.doReplaceState({
          page: window.history.state.page,
          documentScrollPosition: scrollRegion
        });
      });
    });
  }
  getScrollRegions() {
    return window.history.state?.scrollRegions || [];
  }
  getDocumentScrollPosition() {
    return window.history.state?.documentScrollPosition || { top: 0, left: 0 };
  }
  replaceState(page2, cb = null) {
    if (isEqual(this.current, page2)) {
      cb && cb();
      return;
    }
    const { flash, ...pageWithoutFlash } = page2;
    page$1.merge(pageWithoutFlash);
    if (isServer2) {
      return;
    }
    if (this.preserveUrl) {
      cb && cb();
      return;
    }
    this.current = page2;
    queue.add(() => {
      return this.getPageData(page2).then((data) => {
        const doReplace = () => this.doReplaceState({ page: data }, page2.url).then(() => cb?.());
        if (isChromeIOS) {
          return new Promise((resolve) => {
            setTimeout(() => doReplace().then(resolve));
          });
        }
        return doReplace();
      });
    });
  }
  isHistoryThrottleError(error) {
    return error instanceof Error && error.name === "SecurityError" && (error.message.includes("history.pushState") || error.message.includes("history.replaceState"));
  }
  isQuotaExceededError(error) {
    return error instanceof Error && error.name === "QuotaExceededError";
  }
  withThrottleProtection(cb) {
    return Promise.resolve().then(() => {
      try {
        return cb();
      } catch (error) {
        if (!this.isHistoryThrottleError(error)) {
          throw error;
        }
        console.error(error.message);
      }
    });
  }
  doReplaceState(data, url) {
    return this.withThrottleProtection(() => {
      window.history.replaceState(
        {
          ...data,
          scrollRegions: data.scrollRegions ?? window.history.state?.scrollRegions,
          documentScrollPosition: data.documentScrollPosition ?? window.history.state?.documentScrollPosition
        },
        "",
        url
      );
    });
  }
  doPushState(data, url) {
    return this.withThrottleProtection(() => {
      try {
        window.history.pushState(data, "", url);
      } catch (error) {
        if (!this.isQuotaExceededError(error)) {
          throw error;
        }
        eventHandler.fireInternalEvent("historyQuotaExceeded", url);
      }
    });
  }
  getState(key2, defaultValue) {
    return this.current?.[key2] ?? defaultValue;
  }
  deleteState(key2) {
    if (this.current[key2] !== void 0) {
      delete this.current[key2];
      this.replaceState(this.current);
    }
  }
  clearInitialState(key2) {
    if (this.initialState && this.initialState[key2] !== void 0) {
      delete this.initialState[key2];
    }
  }
  browserHasHistoryEntry() {
    return !isServer2 && !!window.history.state?.page;
  }
  clear() {
    SessionStorage.remove(historySessionStorageKeys.key);
    SessionStorage.remove(historySessionStorageKeys.iv);
  }
  setCurrent(page2) {
    this.current = page2;
  }
  isValidState(state2) {
    return !!state2.page;
  }
  getAllState() {
    return this.current;
  }
};
if (typeof window !== "undefined" && window.history.scrollRestoration) {
  window.history.scrollRestoration = "manual";
}
var history = new History();
var EventHandler = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", this.handlePopstateEvent.bind(this));
      window.addEventListener("pageshow", this.handlePageshowEvent.bind(this));
      window.addEventListener("scroll", debounce(Scroll.onWindowScroll.bind(Scroll), 100), true);
    }
    if (typeof document !== "undefined") {
      document.addEventListener("scroll", debounce(Scroll.onScroll.bind(Scroll), 100), true);
    }
  }
  onGlobalEvent(type2, callback) {
    const listener = ((event2) => {
      const response = callback(event2);
      if (event2.cancelable && !event2.defaultPrevented && response === false) {
        event2.preventDefault();
      }
    });
    return this.registerListener(`inertia:${type2}`, listener);
  }
  on(event2, callback) {
    this.internalListeners.push({ event: event2, listener: callback });
    return () => {
      this.internalListeners = this.internalListeners.filter((listener) => listener.listener !== callback);
    };
  }
  onMissingHistoryItem() {
    page$1.clear();
    this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(event2, ...args) {
    this.internalListeners.filter((listener) => listener.event === event2).forEach((listener) => listener.listener(...args));
  }
  registerListener(type2, listener) {
    document.addEventListener(type2, listener);
    return () => document.removeEventListener(type2, listener);
  }
  // bfcache restores pages without firing `popstate`, so we use `pageshow` to
  // re-validate encrypted history entries after `clearHistory` removed the keys.
  // https://web.dev/articles/bfcache
  handlePageshowEvent(event2) {
    if (event2.persisted) {
      history.decrypt().catch(() => this.onMissingHistoryItem());
    }
  }
  handlePopstateEvent(event2) {
    const state2 = event2.state || null;
    if (state2 === null) {
      const url = hrefToUrl(page$1.get().url);
      url.hash = window.location.hash;
      history.replaceState({ ...page$1.getWithoutFlashData(), url: url.href });
      Scroll.reset();
      return;
    }
    if (!history.isValidState(state2)) {
      return this.onMissingHistoryItem();
    }
    history.decrypt(state2.page).then((data) => {
      if (page$1.get().version !== data.version) {
        this.onMissingHistoryItem();
        return;
      }
      router.cancelAll({ prefetch: false });
      page$1.setQuietly(data, { preserveState: false }).then(() => {
        Scroll.restore(history.getScrollRegions());
        fireNavigateEvent(page$1.get());
        const pendingDeferred = {};
        const pageProps = page$1.get().props;
        for (const [group, props] of Object.entries(data.initialDeferredProps ?? data.deferredProps ?? {})) {
          const missing = props.filter((prop2) => pageProps[prop2] === void 0);
          if (missing.length > 0) {
            pendingDeferred[group] = missing;
          }
        }
        if (Object.keys(pendingDeferred).length > 0) {
          this.fireInternalEvent("loadDeferredProps", pendingDeferred);
        }
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
};
var eventHandler = new EventHandler();
var NavigationType = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    if (typeof window === "undefined") {
      return "navigate";
    }
    if (window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0) {
      return window.performance.getEntriesByType("navigation")[0].type;
    }
    return "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
};
var navigationType = new NavigationType();
var InitialVisit = class {
  static handle() {
    this.clearRememberedStateOnReload();
    const scenarios = [this.handleBackForward, this.handleLocation, this.handleDefault];
    scenarios.find((handler) => handler.bind(this)());
  }
  static clearRememberedStateOnReload() {
    if (navigationType.isReload()) {
      history.deleteState(history.rememberedState);
      history.clearInitialState(history.rememberedState);
    }
  }
  static handleBackForward() {
    if (!navigationType.isBackForward() || !history.browserHasHistoryEntry()) {
      return false;
    }
    const scrollRegions = history.getScrollRegions();
    history.decrypt().then((data) => {
      page$1.set(data, { preserveScroll: true, preserveState: true }).then(() => {
        Scroll.restore(scrollRegions);
        fireNavigateEvent(page$1.get());
      });
    }).catch(() => {
      eventHandler.onMissingHistoryItem();
    });
    return true;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!SessionStorage.exists(SessionStorage.locationVisitKey)) {
      return false;
    }
    const locationVisit = SessionStorage.get(SessionStorage.locationVisitKey) || {};
    SessionStorage.remove(SessionStorage.locationVisitKey);
    if (typeof window !== "undefined") {
      page$1.setUrlHash(window.location.hash);
    }
    history.decrypt(page$1.get()).then(() => {
      const rememberedState = history.getState(history.rememberedState, {});
      const scrollRegions = history.getScrollRegions();
      page$1.remember(rememberedState);
      page$1.set(page$1.get(), {
        preserveScroll: locationVisit.preserveScroll,
        preserveState: true
      }).then(() => {
        if (locationVisit.preserveScroll) {
          Scroll.restore(scrollRegions);
        }
        fireNavigateEvent(page$1.get());
      });
    }).catch(() => {
      eventHandler.onMissingHistoryItem();
    });
    return true;
  }
  static handleDefault() {
    if (typeof window !== "undefined") {
      page$1.setUrlHash(window.location.hash);
    }
    page$1.set(page$1.get(), { preserveScroll: true, preserveState: true }).then(() => {
      if (navigationType.isReload()) {
        Scroll.restore(history.getScrollRegions());
      } else {
        Scroll.scrollToAnchor();
      }
      const page2 = page$1.get();
      fireNavigateEvent(page2);
      const flash = page2.flash;
      if (Object.keys(flash).length > 0) {
        queueMicrotask(() => fireFlashEvent(flash));
      }
    });
  }
};
var Poll = class {
  constructor(interval, cb, options) {
    this.id = null;
    this.throttle = false;
    this.keepAlive = false;
    this.cbCount = 0;
    this.keepAlive = options.keepAlive ?? false;
    this.cb = cb;
    this.interval = interval;
    if (options.autoStart ?? true) {
      this.start();
    }
  }
  stop() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  start() {
    if (typeof window === "undefined") {
      return;
    }
    this.stop();
    this.id = window.setInterval(() => {
      if (!this.throttle || this.cbCount % 10 === 0) {
        this.cb();
      }
      if (this.throttle) {
        this.cbCount++;
      }
    }, this.interval);
  }
  isInBackground(hidden) {
    this.throttle = this.keepAlive ? false : hidden;
    if (this.throttle) {
      this.cbCount = 0;
    }
  }
};
var Polls = class {
  constructor() {
    this.polls = [];
    this.setupVisibilityListener();
  }
  add(interval, cb, options) {
    const poll = new Poll(interval, cb, options);
    this.polls.push(poll);
    return {
      stop: () => poll.stop(),
      start: () => poll.start()
    };
  }
  clear() {
    this.polls.forEach((poll) => poll.stop());
    this.polls = [];
  }
  setupVisibilityListener() {
    if (typeof document === "undefined") {
      return;
    }
    document.addEventListener(
      "visibilitychange",
      () => {
        this.polls.forEach((poll) => poll.isInBackground(document.hidden));
      },
      false
    );
  }
};
var polls = new Polls();
var RequestParams = class _RequestParams {
  constructor(params) {
    this.callbacks = [];
    if (!params.prefetch) {
      this.params = params;
    } else {
      const wrappedCallbacks = {
        onBefore: this.wrapCallback(params, "onBefore"),
        onBeforeUpdate: this.wrapCallback(params, "onBeforeUpdate"),
        onStart: this.wrapCallback(params, "onStart"),
        onProgress: this.wrapCallback(params, "onProgress"),
        onFinish: this.wrapCallback(params, "onFinish"),
        onCancel: this.wrapCallback(params, "onCancel"),
        onSuccess: this.wrapCallback(params, "onSuccess"),
        onError: this.wrapCallback(params, "onError"),
        onFlash: this.wrapCallback(params, "onFlash"),
        onCancelToken: this.wrapCallback(params, "onCancelToken"),
        onPrefetched: this.wrapCallback(params, "onPrefetched"),
        onPrefetching: this.wrapCallback(params, "onPrefetching")
      };
      this.params = {
        ...params,
        ...wrappedCallbacks,
        onPrefetchResponse: params.onPrefetchResponse || (() => {
        }),
        onPrefetchError: params.onPrefetchError || (() => {
        })
      };
    }
  }
  static create(params) {
    return new _RequestParams(params);
  }
  data() {
    return this.params.method === "get" ? null : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  isPrefetch() {
    return this.params.prefetch === true;
  }
  isDeferredPropsRequest() {
    return this.params.deferredProps === true;
  }
  onCancelToken(cb) {
    this.params.onCancelToken({
      cancel: cb
    });
  }
  markAsFinished() {
    this.params.completed = true;
    this.params.cancelled = false;
    this.params.interrupted = false;
  }
  markAsCancelled({ cancelled = true, interrupted = false }) {
    this.params.onCancel();
    this.params.completed = false;
    this.params.cancelled = cancelled;
    this.params.interrupted = interrupted;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(response) {
    if (this.params.onPrefetchResponse) {
      this.params.onPrefetchResponse(response);
    }
  }
  onPrefetchError(error) {
    if (this.params.onPrefetchError) {
      this.params.onPrefetchError(error);
    }
  }
  all() {
    return this.params;
  }
  headers() {
    const headers = {
      ...this.params.headers
    };
    if (this.isPartial()) {
      headers["X-Inertia-Partial-Component"] = page$1.get().component;
    }
    const only = this.params.only.concat(this.params.reset);
    if (only.length > 0) {
      headers["X-Inertia-Partial-Data"] = only.join(",");
    }
    if (this.params.except.length > 0) {
      headers["X-Inertia-Partial-Except"] = this.params.except.join(",");
    }
    if (this.params.reset.length > 0) {
      headers["X-Inertia-Reset"] = this.params.reset.join(",");
    }
    if (this.params.errorBag && this.params.errorBag.length > 0) {
      headers["X-Inertia-Error-Bag"] = this.params.errorBag;
    }
    return headers;
  }
  setPreserveOptions(page2) {
    this.params.preserveScroll = _RequestParams.resolvePreserveOption(this.params.preserveScroll, page2);
    this.params.preserveState = _RequestParams.resolvePreserveOption(this.params.preserveState, page2);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name, args }) => {
      this.params[name](...args);
    });
  }
  merge(toMerge) {
    this.params = {
      ...this.params,
      ...toMerge
    };
  }
  wrapCallback(params, name) {
    return (...args) => {
      this.recordCallback(name, args);
      params[name](...args);
    };
  }
  recordCallback(name, args) {
    this.callbacks.push({ name, args });
  }
  static resolvePreserveOption(value, page2) {
    if (typeof value === "function") {
      return value(page2);
    }
    if (value === "errors") {
      return Object.keys(page2.props.errors || {}).length > 0;
    }
    return value;
  }
};
var modal_default = {
  modal: null,
  listener: null,
  createIframeAndPage(html) {
    if (typeof html === "object") {
      html = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(
        html
      )}`;
    }
    const page2 = document.createElement("html");
    page2.innerHTML = html;
    page2.querySelectorAll("a").forEach((a) => a.setAttribute("target", "_top"));
    const iframe = document.createElement("iframe");
    iframe.style.backgroundColor = "white";
    iframe.style.borderRadius = "5px";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    return { iframe, page: page2 };
  },
  show(html) {
    const { iframe, page: page2 } = this.createIframeAndPage(html);
    this.modal = document.createElement("div");
    this.modal.style.position = "fixed";
    this.modal.style.width = "100vw";
    this.modal.style.height = "100vh";
    this.modal.style.padding = "50px";
    this.modal.style.boxSizing = "border-box";
    this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)";
    this.modal.style.zIndex = 2e5;
    this.modal.addEventListener("click", () => this.hide());
    this.modal.appendChild(iframe);
    document.body.prepend(this.modal);
    document.body.style.overflow = "hidden";
    if (!iframe.contentWindow) {
      throw new Error("iframe not yet ready.");
    }
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page2.outerHTML);
    iframe.contentWindow.document.close();
    this.listener = this.hideOnEscape.bind(this);
    document.addEventListener("keydown", this.listener);
  },
  hide() {
    this.modal.outerHTML = "";
    this.modal = null;
    document.body.style.overflow = "visible";
    document.removeEventListener("keydown", this.listener);
  },
  hideOnEscape(event2) {
    if (event2.keyCode === 27) {
      this.hide();
    }
  }
};
var dialog_default = {
  show(html) {
    const { iframe, page: page2 } = modal_default.createIframeAndPage(html);
    iframe.style.boxSizing = "border-box";
    iframe.style.display = "block";
    const dialog = document.createElement("dialog");
    dialog.id = "inertia-error-dialog";
    Object.assign(dialog.style, {
      width: "calc(100vw - 100px)",
      height: "calc(100vh - 100px)",
      padding: "0",
      margin: "auto",
      border: "none",
      backgroundColor: "transparent"
    });
    const dialogStyleElement = document.createElement("style");
    dialogStyleElement.textContent = `
      dialog#inertia-error-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
      }

      dialog#inertia-error-dialog:focus {
        outline: none;
      }
    `;
    document.head.appendChild(dialogStyleElement);
    dialog.addEventListener("click", (event2) => {
      if (event2.target === dialog) {
        dialog.close();
      }
    });
    dialog.addEventListener("close", () => {
      dialogStyleElement.remove();
      dialog.remove();
    });
    dialog.appendChild(iframe);
    document.body.prepend(dialog);
    dialog.showModal();
    dialog.focus();
    if (!iframe.contentWindow) {
      throw new Error("iframe not yet ready.");
    }
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page2.outerHTML);
    iframe.contentWindow.document.close();
  }
};
var queue2 = new Queue();
var Response = class _Response {
  constructor(requestParams, response, originatingPage) {
    this.requestParams = requestParams;
    this.response = response;
    this.originatingPage = originatingPage;
    this.wasPrefetched = false;
  }
  static create(params, response, originatingPage) {
    return new _Response(params, response, originatingPage);
  }
  async handlePrefetch() {
    if (isSameUrlWithoutHash(this.requestParams.all().url, window.location)) {
      this.handle();
    }
  }
  async handle() {
    return queue2.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) {
      this.wasPrefetched = true;
      this.requestParams.all().prefetch = false;
      this.requestParams.all().onPrefetched(this.response, this.requestParams.all());
      firePrefetchedEvent(this.response, this.requestParams.all());
      return Promise.resolve();
    }
    this.requestParams.runCallbacks();
    if (!this.isInertiaResponse()) {
      return this.handleNonInertiaResponse();
    }
    await history.processQueue();
    history.preserveUrl = this.requestParams.all().preserveUrl;
    await this.setPage();
    const errors = page$1.get().props.errors || {};
    if (Object.keys(errors).length > 0) {
      const scopedErrors = this.getScopedErrors(errors);
      fireErrorEvent(scopedErrors);
      return this.requestParams.all().onError(scopedErrors);
    }
    router.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []);
    if (!this.wasPrefetched) {
      router.flush(page$1.get().url);
    }
    const { flash } = page$1.get();
    if (Object.keys(flash).length > 0 && !this.requestParams.isDeferredPropsRequest()) {
      fireFlashEvent(flash);
      this.requestParams.all().onFlash(flash);
    }
    fireSuccessEvent(page$1.get());
    await this.requestParams.all().onSuccess(page$1.get());
    history.preserveUrl = false;
  }
  mergeParams(params) {
    this.requestParams.merge(params);
  }
  getPageResponse() {
    const data = this.getDataFromResponse(this.response.data);
    if (typeof data === "object") {
      return this.response.data = { ...data, flash: data.flash ?? {} };
    }
    return this.response.data = data;
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      const locationUrl = hrefToUrl(this.getHeader("x-inertia-location"));
      setHashIfSameUrl(this.requestParams.all().url, locationUrl);
      return this.locationVisit(locationUrl);
    }
    const response = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (fireInvalidEvent(response)) {
      return config$1.get("future.useDialogForErrorModal") ? dialog_default.show(response.data) : modal_default.show(response.data);
    }
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(status2) {
    return this.response.status === status2;
  }
  getHeader(header) {
    return this.response.headers[header];
  }
  hasHeader(header) {
    return this.getHeader(header) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  locationVisit(url) {
    try {
      SessionStorage.set(SessionStorage.locationVisitKey, {
        preserveScroll: this.requestParams.all().preserveScroll === true
      });
      if (typeof window === "undefined") {
        return;
      }
      if (isSameUrlWithoutHash(window.location, url)) {
        window.location.reload();
      } else {
        window.location.href = url.href;
      }
    } catch (error) {
      return false;
    }
  }
  async setPage() {
    const pageResponse = this.getPageResponse();
    if (!this.shouldSetPage(pageResponse)) {
      return Promise.resolve();
    }
    this.mergeProps(pageResponse);
    page$1.mergeOncePropsIntoResponse(pageResponse);
    this.preserveEqualProps(pageResponse);
    await this.setRememberedState(pageResponse);
    this.requestParams.setPreserveOptions(pageResponse);
    pageResponse.url = history.preserveUrl ? page$1.get().url : this.pageUrl(pageResponse);
    this.requestParams.all().onBeforeUpdate(pageResponse);
    fireBeforeUpdateEvent(pageResponse);
    return page$1.set(pageResponse, {
      replace: this.requestParams.all().replace,
      preserveScroll: this.requestParams.all().preserveScroll,
      preserveState: this.requestParams.all().preserveState,
      viewTransition: this.requestParams.all().viewTransition
    });
  }
  getDataFromResponse(response) {
    if (typeof response !== "string") {
      return response;
    }
    try {
      return JSON.parse(response);
    } catch (error) {
      return response;
    }
  }
  shouldSetPage(pageResponse) {
    if (!this.requestParams.all().async) {
      return true;
    }
    if (this.originatingPage.component !== pageResponse.component) {
      return true;
    }
    if (this.originatingPage.component !== page$1.get().component) {
      return false;
    }
    const originatingUrl = hrefToUrl(this.originatingPage.url);
    const currentPageUrl = hrefToUrl(page$1.get().url);
    return originatingUrl.origin === currentPageUrl.origin && originatingUrl.pathname === currentPageUrl.pathname;
  }
  pageUrl(pageResponse) {
    const responseUrl = hrefToUrl(pageResponse.url);
    setHashIfSameUrl(this.requestParams.all().url, responseUrl);
    return responseUrl.pathname + responseUrl.search + responseUrl.hash;
  }
  preserveEqualProps(pageResponse) {
    if (pageResponse.component !== page$1.get().component || config$1.get("future.preserveEqualProps") !== true) {
      return;
    }
    const currentPageProps = page$1.get().props;
    Object.entries(pageResponse.props).forEach(([key2, value]) => {
      if (isEqual(value, currentPageProps[key2])) {
        pageResponse.props[key2] = currentPageProps[key2];
      }
    });
  }
  mergeProps(pageResponse) {
    if (!this.requestParams.isPartial() || pageResponse.component !== page$1.get().component) {
      return;
    }
    const propsToAppend = pageResponse.mergeProps || [];
    const propsToPrepend = pageResponse.prependProps || [];
    const propsToDeepMerge = pageResponse.deepMergeProps || [];
    const matchPropsOn = pageResponse.matchPropsOn || [];
    const mergeProp = (prop2, shouldAppend) => {
      const currentProp = get$3(page$1.get().props, prop2);
      const incomingProp = get$3(pageResponse.props, prop2);
      if (Array.isArray(incomingProp)) {
        const newArray = this.mergeOrMatchItems(
          currentProp || [],
          incomingProp,
          prop2,
          matchPropsOn,
          shouldAppend
        );
        set$2(pageResponse.props, prop2, newArray);
      } else if (typeof incomingProp === "object" && incomingProp !== null) {
        const newObject = {
          ...currentProp || {},
          ...incomingProp
        };
        set$2(pageResponse.props, prop2, newObject);
      }
    };
    propsToAppend.forEach((prop2) => mergeProp(prop2, true));
    propsToPrepend.forEach((prop2) => mergeProp(prop2, false));
    propsToDeepMerge.forEach((prop2) => {
      const currentProp = page$1.get().props[prop2];
      const incomingProp = pageResponse.props[prop2];
      const deepMerge = (target, source2, matchProp) => {
        if (Array.isArray(source2)) {
          return this.mergeOrMatchItems(target, source2, matchProp, matchPropsOn);
        }
        if (typeof source2 === "object" && source2 !== null) {
          return Object.keys(source2).reduce(
            (acc, key2) => {
              acc[key2] = deepMerge(target ? target[key2] : void 0, source2[key2], `${matchProp}.${key2}`);
              return acc;
            },
            { ...target }
          );
        }
        return source2;
      };
      pageResponse.props[prop2] = deepMerge(currentProp, incomingProp, prop2);
    });
    pageResponse.props = { ...page$1.get().props, ...pageResponse.props };
    if (this.requestParams.isDeferredPropsRequest()) {
      const currentErrors = page$1.get().props.errors;
      if (currentErrors && Object.keys(currentErrors).length > 0) {
        pageResponse.props.errors = currentErrors;
      }
    }
    if (page$1.get().scrollProps) {
      pageResponse.scrollProps = {
        ...page$1.get().scrollProps || {},
        ...pageResponse.scrollProps || {}
      };
    }
    if (page$1.hasOnceProps()) {
      pageResponse.onceProps = {
        ...page$1.get().onceProps || {},
        ...pageResponse.onceProps || {}
      };
    }
    pageResponse.flash = {
      ...page$1.get().flash,
      ...this.requestParams.isDeferredPropsRequest() ? {} : pageResponse.flash
    };
    const currentOriginalDeferred = page$1.get().initialDeferredProps;
    if (currentOriginalDeferred && Object.keys(currentOriginalDeferred).length > 0) {
      pageResponse.initialDeferredProps = currentOriginalDeferred;
    }
  }
  mergeOrMatchItems(existingItems, newItems, matchProp, matchPropsOn, shouldAppend = true) {
    const items = Array.isArray(existingItems) ? existingItems : [];
    const matchingKey = matchPropsOn.find((key2) => {
      const keyPath = key2.split(".").slice(0, -1).join(".");
      return keyPath === matchProp;
    });
    if (!matchingKey) {
      return shouldAppend ? [...items, ...newItems] : [...newItems, ...items];
    }
    const uniqueProperty = matchingKey.split(".").pop() || "";
    const newItemsMap = /* @__PURE__ */ new Map();
    newItems.forEach((item) => {
      if (this.hasUniqueProperty(item, uniqueProperty)) {
        newItemsMap.set(item[uniqueProperty], item);
      }
    });
    return shouldAppend ? this.appendWithMatching(items, newItems, newItemsMap, uniqueProperty) : this.prependWithMatching(items, newItems, newItemsMap, uniqueProperty);
  }
  appendWithMatching(existingItems, newItems, newItemsMap, uniqueProperty) {
    const updatedExisting = existingItems.map((item) => {
      if (this.hasUniqueProperty(item, uniqueProperty) && newItemsMap.has(item[uniqueProperty])) {
        return newItemsMap.get(item[uniqueProperty]);
      }
      return item;
    });
    const newItemsToAdd = newItems.filter((item) => {
      if (!this.hasUniqueProperty(item, uniqueProperty)) {
        return true;
      }
      return !existingItems.some(
        (existing) => this.hasUniqueProperty(existing, uniqueProperty) && existing[uniqueProperty] === item[uniqueProperty]
      );
    });
    return [...updatedExisting, ...newItemsToAdd];
  }
  prependWithMatching(existingItems, newItems, newItemsMap, uniqueProperty) {
    const untouchedExisting = existingItems.filter((item) => {
      if (this.hasUniqueProperty(item, uniqueProperty)) {
        return !newItemsMap.has(item[uniqueProperty]);
      }
      return true;
    });
    return [...newItems, ...untouchedExisting];
  }
  hasUniqueProperty(item, property) {
    return item && typeof item === "object" && property in item;
  }
  async setRememberedState(pageResponse) {
    const rememberedState = await history.getState(history.rememberedState, {});
    if (this.requestParams.all().preserveState && rememberedState && pageResponse.component === page$1.get().component) {
      pageResponse.rememberedState = rememberedState;
    }
  }
  getScopedErrors(errors) {
    if (!this.requestParams.all().errorBag) {
      return errors;
    }
    return errors[this.requestParams.all().errorBag || ""] || {};
  }
};
var Request = class _Request {
  constructor(params, page2) {
    this.page = page2;
    this.requestHasFinished = false;
    this.requestParams = RequestParams.create(params);
    this.cancelToken = new AbortController();
  }
  static create(params, page2) {
    return new _Request(params, page2);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: true }));
    fireStartEvent(this.requestParams.all());
    this.requestParams.onStart();
    if (this.requestParams.all().prefetch) {
      this.requestParams.onPrefetching();
      firePrefetchingEvent(this.requestParams.all());
    }
    const originallyPrefetch = this.requestParams.all().prefetch;
    return axios({
      method: this.requestParams.all().method,
      url: urlWithoutHash(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((response) => {
      this.response = Response.create(this.requestParams, response, this.page);
      return this.response.handle();
    }).catch((error) => {
      if (error?.response) {
        this.response = Response.create(this.requestParams, error.response, this.page);
        return this.response.handle();
      }
      return Promise.reject(error);
    }).catch((error) => {
      if (axios.isCancel(error)) {
        return;
      }
      if (fireExceptionEvent(error)) {
        if (originallyPrefetch) {
          this.requestParams.onPrefetchError(error);
        }
        return Promise.reject(error);
      }
    }).finally(() => {
      this.finish();
      if (originallyPrefetch && this.response) {
        this.requestParams.onPrefetchResponse(this.response);
      }
    });
  }
  finish() {
    if (this.requestParams.wasCancelledAtAll()) {
      return;
    }
    this.requestParams.markAsFinished();
    this.fireFinishEvents();
  }
  fireFinishEvents() {
    if (this.requestHasFinished) {
      return;
    }
    this.requestHasFinished = true;
    fireFinishEvent(this.requestParams.all());
    this.requestParams.onFinish();
  }
  cancel({ cancelled = false, interrupted = false }) {
    if (this.requestHasFinished) {
      return;
    }
    this.cancelToken.abort();
    this.requestParams.markAsCancelled({ cancelled, interrupted });
    this.fireFinishEvents();
  }
  onProgress(progress3) {
    if (this.requestParams.data() instanceof FormData) {
      progress3.percentage = progress3.progress ? Math.round(progress3.progress * 100) : 0;
      fireProgressEvent(progress3);
      this.requestParams.all().onProgress(progress3);
    }
  }
  getHeaders() {
    const headers = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": true
    };
    const page2 = page$1.get();
    if (page2.version) {
      headers["X-Inertia-Version"] = page2.version;
    }
    const onceProps = Object.entries(page2.onceProps || {}).filter(([, onceProp]) => {
      if (page2.props[onceProp.prop] === void 0) {
        return false;
      }
      return !onceProp.expiresAt || onceProp.expiresAt > Date.now();
    }).map(([key2]) => key2);
    if (onceProps.length > 0) {
      headers["X-Inertia-Except-Once-Props"] = onceProps.join(",");
    }
    return headers;
  }
};
var RequestStream = class {
  constructor({ maxConcurrent, interruptible }) {
    this.requests = [];
    this.maxConcurrent = maxConcurrent;
    this.interruptible = interruptible;
  }
  send(request2) {
    this.requests.push(request2);
    request2.send().finally(() => {
      this.requests = this.requests.filter((r) => r !== request2);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: true }, false);
  }
  cancelInFlight({ prefetch = true } = {}) {
    this.requests.filter((request2) => prefetch || !request2.isPrefetch()).forEach((request2) => request2.cancel({ cancelled: true }));
  }
  cancel({ cancelled = false, interrupted = false } = {}, force = false) {
    if (!force && !this.shouldCancel()) {
      return;
    }
    const request2 = this.requests.shift();
    request2?.cancel({ cancelled, interrupted });
  }
  shouldCancel() {
    return this.interruptible && this.requests.length >= this.maxConcurrent;
  }
};
var Router = class {
  constructor() {
    this.syncRequestStream = new RequestStream({
      maxConcurrent: 1,
      interruptible: true
    });
    this.asyncRequestStream = new RequestStream({
      maxConcurrent: Infinity,
      interruptible: false
    });
    this.clientVisitQueue = new Queue();
  }
  init({
    initialPage,
    resolveComponent,
    swapComponent,
    onFlash
  }) {
    page$1.init({
      initialPage,
      resolveComponent,
      swapComponent,
      onFlash
    });
    InitialVisit.handle();
    eventHandler.init();
    eventHandler.on("missingHistoryItem", () => {
      if (typeof window !== "undefined") {
        this.visit(window.location.href, { preserveState: true, preserveScroll: true, replace: true });
      }
    });
    eventHandler.on("loadDeferredProps", (deferredProps) => {
      this.loadDeferredProps(deferredProps);
    });
    eventHandler.on("historyQuotaExceeded", (url) => {
      window.location.href = url;
    });
  }
  get(url, data = {}, options = {}) {
    return this.visit(url, { ...options, method: "get", data });
  }
  post(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "post", data });
  }
  put(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "put", data });
  }
  patch(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "patch", data });
  }
  delete(url, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "delete" });
  }
  reload(options = {}) {
    return this.doReload(options);
  }
  doReload(options = {}) {
    if (typeof window === "undefined") {
      return;
    }
    return this.visit(window.location.href, {
      ...options,
      preserveScroll: true,
      preserveState: true,
      async: true,
      headers: {
        ...options.headers || {},
        "Cache-Control": "no-cache"
      }
    });
  }
  remember(data, key2 = "default") {
    history.remember(data, key2);
  }
  restore(key2 = "default") {
    return history.restore(key2);
  }
  on(type2, callback) {
    if (typeof window === "undefined") {
      return () => {
      };
    }
    return eventHandler.onGlobalEvent(type2, callback);
  }
  /**
   * @deprecated Use cancelAll() instead.
   */
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll({ async = true, prefetch = true, sync = true } = {}) {
    if (async) {
      this.asyncRequestStream.cancelInFlight({ prefetch });
    }
    if (sync) {
      this.syncRequestStream.cancelInFlight();
    }
  }
  poll(interval, requestOptions = {}, options = {}) {
    return polls.add(interval, () => this.reload(requestOptions), {
      autoStart: options.autoStart ?? true,
      keepAlive: options.keepAlive ?? false
    });
  }
  visit(href, options = {}) {
    const visit = this.getPendingVisit(href, {
      ...options,
      showProgress: options.showProgress ?? !options.async
    });
    const events = this.getVisitEvents(options);
    if (events.onBefore(visit) === false || !fireBeforeEvent(visit)) {
      return;
    }
    const currentPageUrl = hrefToUrl(page$1.get().url);
    const isPartialReload = visit.only.length > 0 || visit.except.length > 0 || visit.reset.length > 0;
    const isSamePage = isPartialReload ? isSameUrlWithoutQueryOrHash(visit.url, currentPageUrl) : isSameUrlWithoutHash(visit.url, currentPageUrl);
    if (!isSamePage) {
      this.asyncRequestStream.cancelInFlight({ prefetch: false });
    }
    if (!visit.async) {
      this.syncRequestStream.interruptInFlight();
    }
    if (!page$1.isCleared() && !visit.preserveUrl) {
      Scroll.save();
    }
    const requestParams = {
      ...visit,
      ...events
    };
    const prefetched = prefetchedRequests.get(requestParams);
    if (prefetched) {
      progress.reveal(prefetched.inFlight);
      prefetchedRequests.use(prefetched, requestParams);
    } else {
      progress.reveal(true);
      const requestStream = visit.async ? this.asyncRequestStream : this.syncRequestStream;
      requestStream.send(Request.create(requestParams, page$1.get()));
    }
  }
  getCached(href, options = {}) {
    return prefetchedRequests.findCached(this.getPrefetchParams(href, options));
  }
  flush(href, options = {}) {
    prefetchedRequests.remove(this.getPrefetchParams(href, options));
  }
  flushAll() {
    prefetchedRequests.removeAll();
  }
  flushByCacheTags(tags) {
    prefetchedRequests.removeByTags(Array.isArray(tags) ? tags : [tags]);
  }
  getPrefetching(href, options = {}) {
    return prefetchedRequests.findInFlight(this.getPrefetchParams(href, options));
  }
  prefetch(href, options = {}, prefetchOptions = {}) {
    const method = options.method ?? (isUrlMethodPair(href) ? href.method : "get");
    if (method !== "get") {
      throw new Error("Prefetch requests must use the GET method");
    }
    const visit = this.getPendingVisit(href, {
      ...options,
      async: true,
      showProgress: false,
      prefetch: true,
      viewTransition: false
    });
    const visitUrl = visit.url.origin + visit.url.pathname + visit.url.search;
    const currentUrl = window.location.origin + window.location.pathname + window.location.search;
    if (visitUrl === currentUrl) {
      return;
    }
    const events = this.getVisitEvents(options);
    if (events.onBefore(visit) === false || !fireBeforeEvent(visit)) {
      return;
    }
    progress.hide();
    this.asyncRequestStream.interruptInFlight();
    const requestParams = {
      ...visit,
      ...events
    };
    const ensureCurrentPageIsSet = () => {
      return new Promise((resolve) => {
        const checkIfPageIsDefined = () => {
          if (page$1.get()) {
            resolve();
          } else {
            setTimeout(checkIfPageIsDefined, 50);
          }
        };
        checkIfPageIsDefined();
      });
    };
    ensureCurrentPageIsSet().then(() => {
      prefetchedRequests.add(
        requestParams,
        (params) => {
          this.asyncRequestStream.send(Request.create(params, page$1.get()));
        },
        {
          cacheFor: config$1.get("prefetch.cacheFor"),
          cacheTags: [],
          ...prefetchOptions
        }
      );
    });
  }
  clearHistory() {
    history.clear();
  }
  decryptHistory() {
    return history.decrypt();
  }
  resolveComponent(component2) {
    return page$1.resolve(component2);
  }
  replace(params) {
    this.clientVisit(params, { replace: true });
  }
  replaceProp(name, value, options) {
    this.replace({
      preserveScroll: true,
      preserveState: true,
      props(currentProps) {
        const newValue = typeof value === "function" ? value(get$3(currentProps, name), currentProps) : value;
        return set$2(cloneDeep(currentProps), name, newValue);
      },
      ...options || {}
    });
  }
  appendToProp(name, value, options) {
    this.replaceProp(
      name,
      (currentValue, currentProps) => {
        const newValue = typeof value === "function" ? value(currentValue, currentProps) : value;
        if (!Array.isArray(currentValue)) {
          currentValue = currentValue !== void 0 ? [currentValue] : [];
        }
        return [...currentValue, newValue];
      },
      options
    );
  }
  prependToProp(name, value, options) {
    this.replaceProp(
      name,
      (currentValue, currentProps) => {
        const newValue = typeof value === "function" ? value(currentValue, currentProps) : value;
        if (!Array.isArray(currentValue)) {
          currentValue = currentValue !== void 0 ? [currentValue] : [];
        }
        return [newValue, ...currentValue];
      },
      options
    );
  }
  push(params) {
    this.clientVisit(params);
  }
  flash(keyOrData, value) {
    const current = page$1.get().flash;
    let flash;
    if (typeof keyOrData === "function") {
      flash = keyOrData(current);
    } else if (typeof keyOrData === "string") {
      flash = { ...current, [keyOrData]: value };
    } else if (keyOrData && Object.keys(keyOrData).length) {
      flash = { ...current, ...keyOrData };
    } else {
      return;
    }
    page$1.setFlash(flash);
    if (Object.keys(flash).length) {
      fireFlashEvent(flash);
    }
  }
  clientVisit(params, { replace = false } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(params, { replace }));
  }
  performClientVisit(params, { replace = false } = {}) {
    const current = page$1.get();
    const onceProps = typeof params.props === "function" ? Object.fromEntries(
      Object.values(current.onceProps ?? {}).map((onceProp) => [onceProp.prop, current.props[onceProp.prop]])
    ) : {};
    const props = typeof params.props === "function" ? params.props(current.props, onceProps) : params.props ?? current.props;
    const flash = typeof params.flash === "function" ? params.flash(current.flash) : params.flash;
    const { viewTransition, onError, onFinish, onFlash, onSuccess, ...pageParams } = params;
    const page2 = {
      ...current,
      ...pageParams,
      flash: flash ?? {},
      props
    };
    const preserveScroll = RequestParams.resolvePreserveOption(params.preserveScroll ?? false, page2);
    const preserveState = RequestParams.resolvePreserveOption(params.preserveState ?? false, page2);
    return page$1.set(page2, {
      replace,
      preserveScroll,
      preserveState,
      viewTransition
    }).then(() => {
      const currentFlash = page$1.get().flash;
      if (Object.keys(currentFlash).length > 0) {
        fireFlashEvent(currentFlash);
        onFlash?.(currentFlash);
      }
      const errors = page$1.get().props.errors || {};
      if (Object.keys(errors).length === 0) {
        onSuccess?.(page$1.get());
        return;
      }
      const scopedErrors = params.errorBag ? errors[params.errorBag || ""] || {} : errors;
      onError?.(scopedErrors);
    }).finally(() => onFinish?.(params));
  }
  getPrefetchParams(href, options) {
    return {
      ...this.getPendingVisit(href, {
        ...options,
        async: true,
        showProgress: false,
        prefetch: true,
        viewTransition: false
      }),
      ...this.getVisitEvents(options)
    };
  }
  getPendingVisit(href, options, pendingVisitOptions = {}) {
    if (isUrlMethodPair(href)) {
      const urlMethodPair = href;
      href = urlMethodPair.url;
      options.method = options.method ?? urlMethodPair.method;
    }
    const defaultVisitOptionsCallback = config$1.get("visitOptions");
    const configuredOptions = defaultVisitOptionsCallback ? defaultVisitOptionsCallback(href.toString(), cloneDeep(options)) || {} : {};
    const mergedOptions = {
      method: "get",
      data: {},
      replace: false,
      preserveScroll: false,
      preserveState: false,
      only: [],
      except: [],
      headers: {},
      errorBag: "",
      forceFormData: false,
      queryStringArrayFormat: "brackets",
      async: false,
      showProgress: true,
      fresh: false,
      reset: [],
      preserveUrl: false,
      prefetch: false,
      invalidateCacheTags: [],
      viewTransition: false,
      ...options,
      ...configuredOptions
    };
    const [url, _data] = transformUrlAndData(
      href,
      mergedOptions.data,
      mergedOptions.method,
      mergedOptions.forceFormData,
      mergedOptions.queryStringArrayFormat
    );
    const visit = {
      cancelled: false,
      completed: false,
      interrupted: false,
      ...mergedOptions,
      ...pendingVisitOptions,
      url,
      data: _data
    };
    if (visit.prefetch) {
      visit.headers["Purpose"] = "prefetch";
    }
    return visit;
  }
  getVisitEvents(options) {
    return {
      onCancelToken: options.onCancelToken || (() => {
      }),
      onBefore: options.onBefore || (() => {
      }),
      onBeforeUpdate: options.onBeforeUpdate || (() => {
      }),
      onStart: options.onStart || (() => {
      }),
      onProgress: options.onProgress || (() => {
      }),
      onFinish: options.onFinish || (() => {
      }),
      onCancel: options.onCancel || (() => {
      }),
      onSuccess: options.onSuccess || (() => {
      }),
      onError: options.onError || (() => {
      }),
      onFlash: options.onFlash || (() => {
      }),
      onPrefetched: options.onPrefetched || (() => {
      }),
      onPrefetching: options.onPrefetching || (() => {
      })
    };
  }
  loadDeferredProps(deferred2) {
    if (deferred2) {
      Object.entries(deferred2).forEach(([_, group]) => {
        this.doReload({ only: group, deferredProps: true });
      });
    }
  }
};
var UseFormUtils = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...args) {
    return () => {
      if (args.length === 1) {
        return isUrlMethodPair(args[0]) ? args[0] : args[0]();
      }
      return {
        method: typeof args[0] === "function" ? args[0]() : args[0],
        url: typeof args[1] === "function" ? args[1]() : args[1]
      };
    };
  }
  /**
   * Parses all useForm() arguments into { rememberKey, data, precognitionEndpoint }.
   *
   * useForm()
   * useForm(data)
   * useForm(rememberKey, data)
   * useForm(method, url, data)
   * useForm(urlMethodPair, data)
   *
   */
  static parseUseFormArguments(...args) {
    if (args.length === 0) {
      return {
        rememberKey: null,
        data: {},
        precognitionEndpoint: null
      };
    }
    if (args.length === 1) {
      return {
        rememberKey: null,
        data: args[0],
        precognitionEndpoint: null
      };
    }
    if (args.length === 2) {
      if (typeof args[0] === "string") {
        return {
          rememberKey: args[0],
          data: args[1],
          precognitionEndpoint: null
        };
      }
      return {
        rememberKey: null,
        data: args[1],
        precognitionEndpoint: this.createWayfinderCallback(args[0])
      };
    }
    return {
      rememberKey: null,
      data: args[2],
      precognitionEndpoint: this.createWayfinderCallback(args[0], args[1])
    };
  }
  /**
   * Parses all submission arguments into { method, url, options }.
   * It uses the Precognition endpoint if no explicit method/url are provided.
   *
   * form.submit(method, url)
   * form.submit(method, url, options)
   * form.submit(urlMethodPair)
   * form.submit(urlMethodPair, options)
   * form.submit()
   * form.submit(options)
   */
  static parseSubmitArguments(args, precognitionEndpoint) {
    if (args.length === 3 || args.length === 2 && typeof args[0] === "string") {
      return { method: args[0], url: args[1], options: args[2] ?? {} };
    }
    if (isUrlMethodPair(args[0])) {
      return { ...args[0], options: args[1] ?? {} };
    }
    return { ...precognitionEndpoint(), options: args[0] ?? {} };
  }
  /**
   * Merges headers into the Precognition validate() arguments.
   */
  static mergeHeadersForValidation(field, config2, headers) {
    const merge2 = (config3) => {
      config3.headers = {
        ...headers ?? {},
        ...config3.headers ?? {}
      };
      return config3;
    };
    if (field && typeof field === "object" && !("target" in field)) {
      field = merge2(field);
    } else if (config2 && typeof config2 === "object") {
      config2 = merge2(config2);
    } else if (typeof field === "string") {
      config2 = merge2(config2 ?? {});
    } else {
      field = merge2(field ?? {});
    }
    return [field, config2];
  }
};
function isContentEditableOrPrevented(event2) {
  return event2.target instanceof HTMLElement && event2.target.isContentEditable || event2.defaultPrevented;
}
function shouldIntercept(event2) {
  const isLink = event2.currentTarget.tagName.toLowerCase() === "a";
  return !(isContentEditableOrPrevented(event2) || isLink && event2.altKey || isLink && event2.ctrlKey || isLink && event2.metaKey || isLink && event2.shiftKey || isLink && "button" in event2 && event2.button !== 0);
}
function shouldNavigate(event2) {
  const isButton = event2.currentTarget.tagName.toLowerCase() === "button";
  return !isContentEditableOrPrevented(event2) && (event2.key === "Enter" || isButton && event2.key === " ");
}
var baseComponentSelector = "nprogress";
var progress2;
var settings = {
  minimum: 0.08,
  easing: "linear",
  positionUsing: "translate3d",
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  showSpinner: true,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: "body",
  color: "#29d",
  includeCSS: true,
  template: [
    '<div class="bar" role="bar">',
    '<div class="peg"></div>',
    "</div>",
    '<div class="spinner" role="spinner">',
    '<div class="spinner-icon"></div>',
    "</div>"
  ].join("")
};
var status = null;
var configure = (options) => {
  Object.assign(settings, options);
  if (settings.includeCSS) {
    injectCSS(settings.color);
  }
  progress2 = document.createElement("div");
  progress2.id = baseComponentSelector;
  progress2.innerHTML = settings.template;
};
var set5 = (n) => {
  const started = isStarted();
  n = clamp(n, settings.minimum, 1);
  status = n === 1 ? null : n;
  const progress3 = render(!started);
  const bar = progress3.querySelector(settings.barSelector);
  const speed = settings.speed;
  const ease = settings.easing;
  progress3.offsetWidth;
  queue4((next) => {
    const barStyles = (() => {
      if (settings.positionUsing === "translate3d") {
        return {
          transition: `all ${speed}ms ${ease}`,
          transform: `translate3d(${toBarPercentage(n)}%,0,0)`
        };
      }
      if (settings.positionUsing === "translate") {
        return {
          transition: `all ${speed}ms ${ease}`,
          transform: `translate(${toBarPercentage(n)}%,0)`
        };
      }
      return { marginLeft: `${toBarPercentage(n)}%` };
    })();
    for (const key2 in barStyles) {
      bar.style[key2] = barStyles[key2];
    }
    if (n !== 1) {
      return setTimeout(next, speed);
    }
    progress3.style.transition = "none";
    progress3.style.opacity = "1";
    progress3.offsetWidth;
    setTimeout(() => {
      progress3.style.transition = `all ${speed}ms linear`;
      progress3.style.opacity = "0";
      setTimeout(() => {
        remove();
        progress3.style.transition = "";
        progress3.style.opacity = "";
        next();
      }, speed);
    }, speed);
  });
};
var isStarted = () => typeof status === "number";
var start = () => {
  if (!status) {
    set5(0);
  }
  const work = function() {
    setTimeout(function() {
      if (!status) {
        return;
      }
      increaseByRandom();
      work();
    }, settings.trickleSpeed);
  };
  if (settings.trickle) {
    work();
  }
};
var done = (force) => {
  if (!force && !status) {
    return;
  }
  increaseByRandom(0.3 + 0.5 * Math.random());
  set5(1);
};
var increaseByRandom = (amount) => {
  const n = status;
  if (n === null) {
    return start();
  }
  if (n > 1) {
    return;
  }
  amount = typeof amount === "number" ? amount : (() => {
    const ranges = {
      0.1: [0, 0.2],
      0.04: [0.2, 0.5],
      0.02: [0.5, 0.8],
      5e-3: [0.8, 0.99]
    };
    for (const r in ranges) {
      if (n >= ranges[r][0] && n < ranges[r][1]) {
        return parseFloat(r);
      }
    }
    return 0;
  })();
  return set5(clamp(n + amount, 0, 0.994));
};
var render = (fromStart) => {
  if (isRendered()) {
    return document.getElementById(baseComponentSelector);
  }
  document.documentElement.classList.add(`${baseComponentSelector}-busy`);
  const bar = progress2.querySelector(settings.barSelector);
  const perc = fromStart ? "-100" : toBarPercentage(status || 0);
  const parent = getParent();
  bar.style.transition = "all 0 linear";
  bar.style.transform = `translate3d(${perc}%,0,0)`;
  if (!settings.showSpinner) {
    progress2.querySelector(settings.spinnerSelector)?.remove();
  }
  if (parent !== document.body) {
    parent.classList.add(`${baseComponentSelector}-custom-parent`);
  }
  parent.appendChild(progress2);
  return progress2;
};
var getParent = () => {
  return isDOM(settings.parent) ? settings.parent : document.querySelector(settings.parent);
};
var remove = () => {
  document.documentElement.classList.remove(`${baseComponentSelector}-busy`);
  getParent().classList.remove(`${baseComponentSelector}-custom-parent`);
  progress2?.remove();
};
var isRendered = () => {
  return document.getElementById(baseComponentSelector) !== null;
};
var isDOM = (obj) => {
  if (typeof HTMLElement === "object") {
    return obj instanceof HTMLElement;
  }
  return obj && typeof obj === "object" && obj.nodeType === 1 && typeof obj.nodeName === "string";
};
function clamp(n, min2, max2) {
  if (n < min2) {
    return min2;
  }
  if (n > max2) {
    return max2;
  }
  return n;
}
var toBarPercentage = (n) => (-1 + n) * 100;
var queue4 = /* @__PURE__ */ (() => {
  const pending = [];
  const next = () => {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  };
  return (fn) => {
    pending.push(fn);
    if (pending.length === 1) {
      next();
    }
  };
})();
var injectCSS = (color) => {
  const element = document.createElement("style");
  element.textContent = `
    #${baseComponentSelector} {
      pointer-events: none;
    }

    #${baseComponentSelector} .bar {
      background: ${color};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${baseComponentSelector} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${baseComponentSelector} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${baseComponentSelector} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${color};
      border-left-color: ${color};
      border-radius: 50%;

      animation: ${baseComponentSelector}-spinner 400ms linear infinite;
    }

    .${baseComponentSelector}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${baseComponentSelector}-custom-parent #${baseComponentSelector} .spinner,
    .${baseComponentSelector}-custom-parent #${baseComponentSelector} .bar {
      position: absolute;
    }

    @keyframes ${baseComponentSelector}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(element);
};
var show = () => {
  if (progress2) {
    progress2.style.display = "";
  }
};
var hide = () => {
  if (progress2) {
    progress2.style.display = "none";
  }
};
var progress_component_default = {
  configure,
  isStarted,
  done,
  set: set5,
  remove,
  start,
  status,
  show,
  hide
};
var Progress = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    progress_component_default.start();
  }
  reveal(force = false) {
    this.hideCount = Math.max(0, this.hideCount - 1);
    if (force || this.hideCount === 0) {
      progress_component_default.show();
    }
  }
  hide() {
    this.hideCount++;
    progress_component_default.hide();
  }
  set(status2) {
    progress_component_default.set(Math.max(0, Math.min(1, status2)));
  }
  finish() {
    progress_component_default.done();
  }
  reset() {
    progress_component_default.set(0);
  }
  remove() {
    progress_component_default.done();
    progress_component_default.remove();
  }
  isStarted() {
    return progress_component_default.isStarted();
  }
  getStatus() {
    return progress_component_default.status;
  }
};
var progress = new Progress();
progress.reveal;
progress.hide;
function addEventListeners(delay) {
  document.addEventListener("inertia:start", (e) => handleStartEvent(e, delay));
  document.addEventListener("inertia:progress", handleProgressEvent);
}
function handleStartEvent(event2, delay) {
  if (!event2.detail.visit.showProgress) {
    progress.hide();
  }
  const timeout = setTimeout(() => progress.start(), delay);
  document.addEventListener("inertia:finish", (e) => finish(e, timeout), { once: true });
}
function handleProgressEvent(event2) {
  if (progress.isStarted() && event2.detail.progress?.percentage) {
    progress.set(Math.max(progress.getStatus(), event2.detail.progress.percentage / 100 * 0.9));
  }
}
function finish(event2, timeout) {
  clearTimeout(timeout);
  if (!progress.isStarted()) {
    return;
  }
  if (event2.detail.visit.completed) {
    progress.finish();
  } else if (event2.detail.visit.interrupted) {
    progress.reset();
  } else if (event2.detail.visit.cancelled) {
    progress.remove();
  }
}
function setupProgress({
  delay = 250,
  color = "#29d",
  includeCSS = true,
  showSpinner = false
} = {}) {
  addEventListeners(delay);
  progress_component_default.configure({ showSpinner, includeCSS, color });
}
var router = new Router();
const PUBLIC_VERSION = "5";
if (typeof window !== "undefined") {
  ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(PUBLIC_VERSION);
}
let legacy_mode_flag = false;
let tracing_mode_flag = false;
function enable_legacy_mode_flag() {
  legacy_mode_flag = true;
}
enable_legacy_mode_flag();
const EACH_ITEM_REACTIVE = 1;
const EACH_INDEX_REACTIVE = 1 << 1;
const EACH_IS_CONTROLLED = 1 << 2;
const EACH_IS_ANIMATED = 1 << 3;
const EACH_ITEM_IMMUTABLE = 1 << 4;
const PROPS_IS_IMMUTABLE = 1;
const PROPS_IS_RUNES = 1 << 1;
const PROPS_IS_UPDATED = 1 << 2;
const PROPS_IS_BINDABLE = 1 << 3;
const PROPS_IS_LAZY_INITIAL = 1 << 4;
const TEMPLATE_FRAGMENT = 1;
const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
const UNINITIALIZED = /* @__PURE__ */ Symbol();
const NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
const NAMESPACE_SVG = "http://www.w3.org/2000/svg";
const NAMESPACE_MATHML = "http://www.w3.org/1998/Math/MathML";
const ATTACHMENT_KEY = "@attach";
const DEV = false;
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var includes = Array.prototype.includes;
var array_from = Array.from;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
function is_function(thing) {
  return typeof thing === "function";
}
const noop = () => {
};
function run(fn) {
  return fn();
}
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
function to_array(value, n) {
  if (Array.isArray(value)) {
    return value;
  }
  if (!(Symbol.iterator in value)) {
    return Array.from(value);
  }
  const array = [];
  for (const element of value) {
    array.push(element);
    if (array.length === n) break;
  }
  return array;
}
const DERIVED = 1 << 1;
const EFFECT = 1 << 2;
const RENDER_EFFECT = 1 << 3;
const MANAGED_EFFECT = 1 << 24;
const BLOCK_EFFECT = 1 << 4;
const BRANCH_EFFECT = 1 << 5;
const ROOT_EFFECT = 1 << 6;
const BOUNDARY_EFFECT = 1 << 7;
const CONNECTED = 1 << 9;
const CLEAN = 1 << 10;
const DIRTY = 1 << 11;
const MAYBE_DIRTY = 1 << 12;
const INERT = 1 << 13;
const DESTROYED = 1 << 14;
const REACTION_RAN = 1 << 15;
const DESTROYING = 1 << 25;
const EFFECT_TRANSPARENT = 1 << 16;
const EAGER_EFFECT = 1 << 17;
const HEAD_EFFECT = 1 << 18;
const EFFECT_PRESERVED = 1 << 19;
const USER_EFFECT = 1 << 20;
const EFFECT_OFFSCREEN = 1 << 25;
const WAS_MARKED = 1 << 16;
const REACTION_IS_UPDATING = 1 << 21;
const ASYNC = 1 << 22;
const ERROR_VALUE = 1 << 23;
const STATE_SYMBOL = /* @__PURE__ */ Symbol("$state");
const LEGACY_PROPS = /* @__PURE__ */ Symbol("legacy props");
const LOADING_ATTR_SYMBOL = /* @__PURE__ */ Symbol("");
const STALE_REACTION = new class StaleReactionError extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
const IS_XHTML = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function async_derived_orphan() {
  {
    throw new Error(`https://svelte.dev/e/async_derived_orphan`);
  }
}
function each_key_duplicate(a, b, value) {
  {
    throw new Error(`https://svelte.dev/e/each_key_duplicate`);
  }
}
function effect_in_teardown(rune) {
  {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function effect_in_unowned_derived() {
  {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function effect_orphan(rune) {
  {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function props_invalid_value(key2) {
  {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function svelte_boundary_reset_onerror() {
  {
    throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
  }
}
function select_multiple_invalid_value() {
  {
    console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
  }
}
function svelte_boundary_reset_noop() {
  {
    console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
  }
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
let component_context = null;
function set_component_context(context) {
  component_context = context;
}
function push(props, runes = false, fn) {
  component_context = {
    p: component_context,
    i: false,
    c: null,
    e: null,
    s: props,
    x: null,
    r: (
      /** @type {Effect} */
      active_effect
    ),
    l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null
  };
}
function pop(component2) {
  var context = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context.e;
  if (effects !== null) {
    context.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  if (component2 !== void 0) {
    context.x = component2;
  }
  context.i = true;
  component_context = context.p;
  return component2 ?? /** @type {T} */
  {};
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
let micro_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0 && !is_flushing_sync) {
    var tasks = micro_tasks;
    queueMicrotask(() => {
      if (tasks === micro_tasks) run_micro_tasks();
    });
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  while (micro_tasks.length > 0) {
    run_micro_tasks();
  }
}
function handle_error(error) {
  var effect2 = active_effect;
  if (effect2 === null) {
    active_reaction.f |= ERROR_VALUE;
    return error;
  }
  if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
    throw error;
  }
  invoke_error_boundary(error, effect2);
}
function invoke_error_boundary(error, effect2) {
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
      if ((effect2.f & REACTION_RAN) === 0) {
        throw error;
      }
      try {
        effect2.b.error(error);
        return;
      } catch (e) {
        error = e;
      }
    }
    effect2 = effect2.parent;
  }
  throw error;
}
const STATUS_MASK = -7169;
function set_signal_status(signal, status2) {
  signal.f = signal.f & STATUS_MASK | status2;
}
function update_derived_status(derived2) {
  if ((derived2.f & CONNECTED) !== 0 || derived2.deps === null) {
    set_signal_status(derived2, CLEAN);
  } else {
    set_signal_status(derived2, MAYBE_DIRTY);
  }
}
function clear_marked(deps) {
  if (deps === null) return;
  for (const dep of deps) {
    if ((dep.f & DERIVED) === 0 || (dep.f & WAS_MARKED) === 0) {
      continue;
    }
    dep.f ^= WAS_MARKED;
    clear_marked(
      /** @type {Derived} */
      dep.deps
    );
  }
}
function defer_effect(effect2, dirty_effects, maybe_dirty_effects) {
  if ((effect2.f & DIRTY) !== 0) {
    dirty_effects.add(effect2);
  } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
    maybe_dirty_effects.add(effect2);
  }
  clear_marked(effect2.deps);
  set_signal_status(effect2, CLEAN);
}
function subscribe_to_store(store, run2, invalidate) {
  if (store == null) {
    run2(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run2,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
const subscriber_queue = [];
function writable(value, start2 = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start2(set2, update2) || noop;
    }
    run2(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update: update2, subscribe: subscribe2 };
}
function get$1(store) {
  let value;
  subscribe_to_store(store, (_) => value = _)();
  return value;
}
let legacy_is_updating_store = false;
let is_store_binding = false;
let IS_UNMOUNTED = /* @__PURE__ */ Symbol();
function store_get(store, store_name, stores) {
  const entry = stores[store_name] ??= {
    store: null,
    source: /* @__PURE__ */ mutable_source(void 0),
    unsubscribe: noop
  };
  if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
    entry.unsubscribe();
    entry.store = store ?? null;
    if (store == null) {
      entry.source.v = void 0;
      entry.unsubscribe = noop;
    } else {
      var is_synchronous_callback = true;
      entry.unsubscribe = subscribe_to_store(store, (v) => {
        if (is_synchronous_callback) {
          entry.source.v = v;
        } else {
          set$1(entry.source, v);
        }
      });
      is_synchronous_callback = false;
    }
  }
  if (store && IS_UNMOUNTED in stores) {
    return get$1(store);
  }
  return get(entry.source);
}
function setup_stores() {
  const stores = {};
  function cleanup() {
    teardown(() => {
      for (var store_name in stores) {
        const ref2 = stores[store_name];
        ref2.unsubscribe();
      }
      define_property(stores, IS_UNMOUNTED, {
        enumerable: false,
        value: true
      });
    });
  }
  return [stores, cleanup];
}
function update_with_flag(store, value) {
  legacy_is_updating_store = true;
  try {
    store.set(value);
  } finally {
    legacy_is_updating_store = false;
  }
}
function store_mutate(store, expression, new_value) {
  update_with_flag(store, new_value);
  return expression;
}
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}
const batches = /* @__PURE__ */ new Set();
let current_batch = null;
let batch_values = null;
let last_scheduled_effect = null;
let is_flushing_sync = false;
let is_processing = false;
let collected_effects = null;
let legacy_updates = null;
var flush_count = 0;
let uid = 1;
class Batch {
  id = uid++;
  /**
   * The current values of any signals that are updated in this batch.
   * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Value, [any, boolean]>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Value, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #commit_callbacks = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #discard_callbacks = /* @__PURE__ */ new Set();
  /**
   * Async effects that are currently in flight
   * @type {Map<Effect, number>}
   */
  #pending = /* @__PURE__ */ new Map();
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #blocking_pending = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #deferred = null;
  /**
   * The root effects that need to be flushed
   * @type {Effect[]}
   */
  #roots = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #new_effects = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #dirty_effects = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #maybe_dirty_effects = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #skipped_branches = /* @__PURE__ */ new Map();
  is_fork = false;
  #decrement_queued = false;
  /** @type {Set<Batch>} */
  #blockers = /* @__PURE__ */ new Set();
  #is_deferred() {
    return this.is_fork || this.#blocking_pending.size > 0;
  }
  #is_blocked() {
    for (const batch of this.#blockers) {
      for (const effect2 of batch.#blocking_pending.keys()) {
        var skipped = false;
        var e = effect2;
        while (e.parent !== null) {
          if (this.#skipped_branches.has(e)) {
            skipped = true;
            break;
          }
          e = e.parent;
        }
        if (!skipped) {
          return true;
        }
      }
    }
    return false;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(effect2) {
    if (!this.#skipped_branches.has(effect2)) {
      this.#skipped_branches.set(effect2, { d: [], m: [] });
    }
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(effect2) {
    var tracked = this.#skipped_branches.get(effect2);
    if (tracked) {
      this.#skipped_branches.delete(effect2);
      for (var e of tracked.d) {
        set_signal_status(e, DIRTY);
        this.schedule(e);
      }
      for (e of tracked.m) {
        set_signal_status(e, MAYBE_DIRTY);
        this.schedule(e);
      }
    }
  }
  #process() {
    if (flush_count++ > 1e3) {
      batches.delete(this);
      infinite_loop_guard();
    }
    if (!this.#is_deferred()) {
      for (const e of this.#dirty_effects) {
        this.#maybe_dirty_effects.delete(e);
        set_signal_status(e, DIRTY);
        this.schedule(e);
      }
      for (const e of this.#maybe_dirty_effects) {
        set_signal_status(e, MAYBE_DIRTY);
        this.schedule(e);
      }
    }
    const roots = this.#roots;
    this.#roots = [];
    this.apply();
    var effects = collected_effects = [];
    var render_effects = [];
    var updates = legacy_updates = [];
    for (const root2 of roots) {
      try {
        this.#traverse(root2, effects, render_effects);
      } catch (e) {
        reset_all(root2);
        throw e;
      }
    }
    current_batch = null;
    if (updates.length > 0) {
      var batch = Batch.ensure();
      for (const e of updates) {
        batch.schedule(e);
      }
    }
    collected_effects = null;
    legacy_updates = null;
    if (this.#is_deferred() || this.#is_blocked()) {
      this.#defer_effects(render_effects);
      this.#defer_effects(effects);
      for (const [e, t] of this.#skipped_branches) {
        reset_branch(e, t);
      }
    } else {
      if (this.#pending.size === 0) {
        batches.delete(this);
      }
      this.#dirty_effects.clear();
      this.#maybe_dirty_effects.clear();
      for (const fn of this.#commit_callbacks) fn(this);
      this.#commit_callbacks.clear();
      flush_queued_effects(render_effects);
      flush_queued_effects(effects);
      this.#deferred?.resolve();
    }
    var next_batch = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      current_batch
    );
    if (this.#roots.length > 0) {
      const batch2 = next_batch ??= this;
      batch2.#roots.push(...this.#roots.filter((r) => !batch2.#roots.includes(r)));
    }
    if (next_batch !== null) {
      batches.add(next_batch);
      next_batch.#process();
    }
    if (!batches.has(this)) {
      this.#commit();
    }
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #traverse(root2, effects, render_effects) {
    root2.f ^= CLEAN;
    var effect2 = root2.first;
    while (effect2 !== null) {
      var flags2 = effect2.f;
      var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
      var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
      var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.#skipped_branches.has(effect2);
      if (!skip && effect2.fn !== null) {
        if (is_branch) {
          effect2.f ^= CLEAN;
        } else if ((flags2 & EFFECT) !== 0) {
          effects.push(effect2);
        } else if (is_dirty(effect2)) {
          if ((flags2 & BLOCK_EFFECT) !== 0) this.#maybe_dirty_effects.add(effect2);
          update_effect(effect2);
        }
        var child2 = effect2.first;
        if (child2 !== null) {
          effect2 = child2;
          continue;
        }
      }
      while (effect2 !== null) {
        var next = effect2.next;
        if (next !== null) {
          effect2 = next;
          break;
        }
        effect2 = effect2.parent;
      }
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #defer_effects(effects) {
    for (var i = 0; i < effects.length; i += 1) {
      defer_effect(effects[i], this.#dirty_effects, this.#maybe_dirty_effects);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} old_value
   * @param {boolean} [is_derived]
   */
  capture(source2, old_value, is_derived = false) {
    if (old_value !== UNINITIALIZED && !this.previous.has(source2)) {
      this.previous.set(source2, old_value);
    }
    if ((source2.f & ERROR_VALUE) === 0) {
      this.current.set(source2, [source2.v, is_derived]);
      batch_values?.set(source2, source2.v);
    }
  }
  activate() {
    current_batch = this;
  }
  deactivate() {
    current_batch = null;
    batch_values = null;
  }
  flush() {
    try {
      is_processing = true;
      current_batch = this;
      this.#process();
    } finally {
      flush_count = 0;
      last_scheduled_effect = null;
      collected_effects = null;
      legacy_updates = null;
      is_processing = false;
      current_batch = null;
      batch_values = null;
      old_values.clear();
    }
  }
  discard() {
    for (const fn of this.#discard_callbacks) fn(this);
    this.#discard_callbacks.clear();
    batches.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(effect2) {
    this.#new_effects.push(effect2);
  }
  #commit() {
    for (const batch of batches) {
      var is_earlier = batch.id < this.id;
      var sources = [];
      for (const [source3, [value, is_derived]] of this.current) {
        if (batch.current.has(source3)) {
          var batch_value = (
            /** @type {[any, boolean]} */
            batch.current.get(source3)[0]
          );
          if (is_earlier && value !== batch_value) {
            batch.current.set(source3, [value, is_derived]);
          } else {
            continue;
          }
        }
        sources.push(source3);
      }
      var others = [...batch.current.keys()].filter((s) => !this.current.has(s));
      if (others.length === 0) {
        if (is_earlier) {
          batch.discard();
        }
      } else if (sources.length > 0) {
        batch.activate();
        var marked = /* @__PURE__ */ new Set();
        var checked = /* @__PURE__ */ new Map();
        for (var source2 of sources) {
          mark_effects(source2, others, marked, checked);
        }
        checked = /* @__PURE__ */ new Map();
        var current_unequal = [...batch.current.keys()].filter(
          (c) => this.current.has(c) ? (
            /** @type {[any, boolean]} */
            this.current.get(c)[0] !== c
          ) : true
        );
        for (const effect2 of this.#new_effects) {
          if ((effect2.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect2, current_unequal, checked)) {
            if ((effect2.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
              set_signal_status(effect2, DIRTY);
              batch.schedule(effect2);
            } else {
              batch.#dirty_effects.add(effect2);
            }
          }
        }
        if (batch.#roots.length > 0) {
          batch.apply();
          for (var root2 of batch.#roots) {
            batch.#traverse(root2, [], []);
          }
          batch.#roots = [];
        }
        batch.deactivate();
      }
    }
    for (const batch of batches) {
      if (batch.#blockers.has(this)) {
        batch.#blockers.delete(this);
        if (batch.#blockers.size === 0 && !batch.#is_deferred()) {
          batch.activate();
          batch.#process();
        }
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(blocking, effect2) {
    let pending_count = this.#pending.get(effect2) ?? 0;
    this.#pending.set(effect2, pending_count + 1);
    if (blocking) {
      let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
      this.#blocking_pending.set(effect2, blocking_pending_count + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(blocking, effect2, skip) {
    let pending_count = this.#pending.get(effect2) ?? 0;
    if (pending_count === 1) {
      this.#pending.delete(effect2);
    } else {
      this.#pending.set(effect2, pending_count - 1);
    }
    if (blocking) {
      let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
      if (blocking_pending_count === 1) {
        this.#blocking_pending.delete(effect2);
      } else {
        this.#blocking_pending.set(effect2, blocking_pending_count - 1);
      }
    }
    if (this.#decrement_queued || skip) return;
    this.#decrement_queued = true;
    queue_micro_task(() => {
      this.#decrement_queued = false;
      this.flush();
    });
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(dirty_effects, maybe_dirty_effects) {
    for (const e of dirty_effects) {
      this.#dirty_effects.add(e);
    }
    for (const e of maybe_dirty_effects) {
      this.#maybe_dirty_effects.add(e);
    }
    dirty_effects.clear();
    maybe_dirty_effects.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(fn) {
    this.#commit_callbacks.add(fn);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(fn) {
    this.#discard_callbacks.add(fn);
  }
  settled() {
    return (this.#deferred ??= deferred()).promise;
  }
  static ensure() {
    if (current_batch === null) {
      const batch = current_batch = new Batch();
      if (!is_processing) {
        batches.add(current_batch);
        if (!is_flushing_sync) {
          queue_micro_task(() => {
            if (current_batch !== batch) {
              return;
            }
            batch.flush();
          });
        }
      }
    }
    return current_batch;
  }
  apply() {
    {
      batch_values = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(effect2) {
    last_scheduled_effect = effect2;
    if (effect2.b?.is_pending && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
      effect2.b.defer_effect(effect2);
      return;
    }
    var e = effect2;
    while (e.parent !== null) {
      e = e.parent;
      var flags2 = e.f;
      if (collected_effects !== null && e === active_effect) {
        if ((active_reaction === null || (active_reaction.f & DERIVED) === 0) && !legacy_is_updating_store) {
          return;
        }
      }
      if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags2 & CLEAN) === 0) {
          return;
        }
        e.f ^= CLEAN;
      }
    }
    this.#roots.push(e);
  }
}
function flushSync(fn) {
  var was_flushing_sync = is_flushing_sync;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) ;
    while (true) {
      flush_tasks();
      if (current_batch === null) {
        return (
          /** @type {T} */
          result
        );
      }
      current_batch.flush();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    invoke_error_boundary(error, last_scheduled_effect);
  }
}
let eager_block_effects = null;
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i = 0;
  while (i < length) {
    var effect2 = effects[i++];
    if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
      eager_block_effects = /* @__PURE__ */ new Set();
      update_effect(effect2);
      if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
        unlink_effect(effect2);
      }
      if (eager_block_effects?.size > 0) {
        old_values.clear();
        for (const e of eager_block_effects) {
          if ((e.f & (DESTROYED | INERT)) !== 0) continue;
          const ordered_effects = [e];
          let ancestor = e.parent;
          while (ancestor !== null) {
            if (eager_block_effects.has(ancestor)) {
              eager_block_effects.delete(ancestor);
              ordered_effects.push(ancestor);
            }
            ancestor = ancestor.parent;
          }
          for (let j = ordered_effects.length - 1; j >= 0; j--) {
            const e2 = ordered_effects[j];
            if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
            update_effect(e2);
          }
        }
        eager_block_effects.clear();
      }
    }
  }
  eager_block_effects = null;
}
function mark_effects(value, sources, marked, checked) {
  if (marked.has(value)) return;
  marked.add(value);
  if (value.reactions !== null) {
    for (const reaction of value.reactions) {
      const flags2 = reaction.f;
      if ((flags2 & DERIVED) !== 0) {
        mark_effects(
          /** @type {Derived} */
          reaction,
          sources,
          marked,
          checked
        );
      } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
        set_signal_status(reaction, DIRTY);
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function depends_on(reaction, sources, checked) {
  const depends = checked.get(reaction);
  if (depends !== void 0) return depends;
  if (reaction.deps !== null) {
    for (const dep of reaction.deps) {
      if (includes.call(sources, dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on(
        /** @type {Derived} */
        dep,
        sources,
        checked
      )) {
        checked.set(
          /** @type {Derived} */
          dep,
          true
        );
        return true;
      }
    }
  }
  checked.set(reaction, false);
  return false;
}
function schedule_effect(effect2) {
  current_batch.schedule(effect2);
}
function reset_branch(effect2, tracked) {
  if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
    return;
  }
  if ((effect2.f & DIRTY) !== 0) {
    tracked.d.push(effect2);
  } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
    tracked.m.push(effect2);
  }
  set_signal_status(effect2, CLEAN);
  var e = effect2.first;
  while (e !== null) {
    reset_branch(e, tracked);
    e = e.next;
  }
}
function reset_all(effect2) {
  set_signal_status(effect2, CLEAN);
  var e = effect2.first;
  while (e !== null) {
    reset_all(e);
    e = e.next;
  }
}
function createSubscriber(start2) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  return () => {
    if (effect_tracking()) {
      get(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start2(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          queue_micro_task(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop?.();
              stop = void 0;
              increment(version);
            }
          });
        };
      });
    }
  };
}
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(node, props, children, transform_error) {
  new Boundary(node, props, children, transform_error);
}
class Boundary {
  /** @type {Boundary | null} */
  parent;
  is_pending = false;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #anchor;
  /** @type {TemplateNode | null} */
  #hydrate_open = null;
  /** @type {BoundaryProps} */
  #props;
  /** @type {((anchor: Node) => void)} */
  #children;
  /** @type {Effect} */
  #effect;
  /** @type {Effect | null} */
  #main_effect = null;
  /** @type {Effect | null} */
  #pending_effect = null;
  /** @type {Effect | null} */
  #failed_effect = null;
  /** @type {DocumentFragment | null} */
  #offscreen_fragment = null;
  #local_pending_count = 0;
  #pending_count = 0;
  #pending_count_update_queued = false;
  /** @type {Set<Effect>} */
  #dirty_effects = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #maybe_dirty_effects = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #effect_pending = null;
  #effect_pending_subscriber = createSubscriber(() => {
    this.#effect_pending = source(this.#local_pending_count);
    return () => {
      this.#effect_pending = null;
    };
  });
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(node, props, children, transform_error) {
    this.#anchor = node;
    this.#props = props;
    this.#children = (anchor) => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      effect2.b = this;
      effect2.f |= BOUNDARY_EFFECT;
      children(anchor);
    };
    this.parent = /** @type {Effect} */
    active_effect.b;
    this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
    this.#effect = block(() => {
      {
        this.#render();
      }
    }, flags);
  }
  #hydrate_resolved_content() {
    try {
      this.#main_effect = branch(() => this.#children(this.#anchor));
    } catch (error) {
      this.error(error);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #hydrate_failed_content(error) {
    const failed = this.#props.failed;
    if (!failed) return;
    this.#failed_effect = branch(() => {
      failed(
        this.#anchor,
        () => error,
        () => () => {
        }
      );
    });
  }
  #hydrate_pending_content() {
    const pending = this.#props.pending;
    if (!pending) return;
    this.is_pending = true;
    this.#pending_effect = branch(() => pending(this.#anchor));
    queue_micro_task(() => {
      var fragment = this.#offscreen_fragment = document.createDocumentFragment();
      var anchor = create_text();
      fragment.append(anchor);
      this.#main_effect = this.#run(() => {
        return branch(() => this.#children(anchor));
      });
      if (this.#pending_count === 0) {
        this.#anchor.before(fragment);
        this.#offscreen_fragment = null;
        pause_effect(
          /** @type {Effect} */
          this.#pending_effect,
          () => {
            this.#pending_effect = null;
          }
        );
        this.#resolve(
          /** @type {Batch} */
          current_batch
        );
      }
    });
  }
  #render() {
    try {
      this.is_pending = this.has_pending_snippet();
      this.#pending_count = 0;
      this.#local_pending_count = 0;
      this.#main_effect = branch(() => {
        this.#children(this.#anchor);
      });
      if (this.#pending_count > 0) {
        var fragment = this.#offscreen_fragment = document.createDocumentFragment();
        move_effect(this.#main_effect, fragment);
        const pending = (
          /** @type {(anchor: Node) => void} */
          this.#props.pending
        );
        this.#pending_effect = branch(() => pending(this.#anchor));
      } else {
        this.#resolve(
          /** @type {Batch} */
          current_batch
        );
      }
    } catch (error) {
      this.error(error);
    }
  }
  /**
   * @param {Batch} batch
   */
  #resolve(batch) {
    this.is_pending = false;
    batch.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(effect2) {
    defer_effect(effect2, this.#dirty_effects, this.#maybe_dirty_effects);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#props.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #run(fn) {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_ctx = component_context;
    set_active_effect(this.#effect);
    set_active_reaction(this.#effect);
    set_component_context(this.#effect.ctx);
    try {
      Batch.ensure();
      return fn();
    } catch (e) {
      handle_error(e);
      return null;
    } finally {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_ctx);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #update_pending_count(d, batch) {
    if (!this.has_pending_snippet()) {
      if (this.parent) {
        this.parent.#update_pending_count(d, batch);
      }
      return;
    }
    this.#pending_count += d;
    if (this.#pending_count === 0) {
      this.#resolve(batch);
      if (this.#pending_effect) {
        pause_effect(this.#pending_effect, () => {
          this.#pending_effect = null;
        });
      }
      if (this.#offscreen_fragment) {
        this.#anchor.before(this.#offscreen_fragment);
        this.#offscreen_fragment = null;
      }
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(d, batch) {
    this.#update_pending_count(d, batch);
    this.#local_pending_count += d;
    if (!this.#effect_pending || this.#pending_count_update_queued) return;
    this.#pending_count_update_queued = true;
    queue_micro_task(() => {
      this.#pending_count_update_queued = false;
      if (this.#effect_pending) {
        internal_set(this.#effect_pending, this.#local_pending_count);
      }
    });
  }
  get_effect_pending() {
    this.#effect_pending_subscriber();
    return get(
      /** @type {Source<number>} */
      this.#effect_pending
    );
  }
  /** @param {unknown} error */
  error(error) {
    var onerror = this.#props.onerror;
    let failed = this.#props.failed;
    if (!onerror && !failed) {
      throw error;
    }
    if (this.#main_effect) {
      destroy_effect(this.#main_effect);
      this.#main_effect = null;
    }
    if (this.#pending_effect) {
      destroy_effect(this.#pending_effect);
      this.#pending_effect = null;
    }
    if (this.#failed_effect) {
      destroy_effect(this.#failed_effect);
      this.#failed_effect = null;
    }
    var did_reset = false;
    var calling_on_error = false;
    const reset = () => {
      if (did_reset) {
        svelte_boundary_reset_noop();
        return;
      }
      did_reset = true;
      if (calling_on_error) {
        svelte_boundary_reset_onerror();
      }
      if (this.#failed_effect !== null) {
        pause_effect(this.#failed_effect, () => {
          this.#failed_effect = null;
        });
      }
      this.#run(() => {
        this.#render();
      });
    };
    const handle_error_result = (transformed_error) => {
      try {
        calling_on_error = true;
        onerror?.(transformed_error, reset);
        calling_on_error = false;
      } catch (error2) {
        invoke_error_boundary(error2, this.#effect && this.#effect.parent);
      }
      if (failed) {
        this.#failed_effect = this.#run(() => {
          try {
            return branch(() => {
              var effect2 = (
                /** @type {Effect} */
                active_effect
              );
              effect2.b = this;
              effect2.f |= BOUNDARY_EFFECT;
              failed(
                this.#anchor,
                () => transformed_error,
                () => reset
              );
            });
          } catch (error2) {
            invoke_error_boundary(
              error2,
              /** @type {Effect} */
              this.#effect.parent
            );
            return null;
          }
        });
      }
    };
    queue_micro_task(() => {
      var result;
      try {
        result = this.transform_error(error);
      } catch (e) {
        invoke_error_boundary(e, this.#effect && this.#effect.parent);
        return;
      }
      if (result !== null && typeof result === "object" && typeof /** @type {any} */
      result.then === "function") {
        result.then(
          handle_error_result,
          /** @param {unknown} e */
          (e) => invoke_error_boundary(e, this.#effect && this.#effect.parent)
        );
      } else {
        handle_error_result(result);
      }
    });
  }
}
function flatten(blockers, sync, async, fn) {
  const d = is_runes() ? derived : derived_safe_equal;
  var pending = blockers.filter((b) => !b.settled);
  if (async.length === 0 && pending.length === 0) {
    fn(sync.map(d));
    return;
  }
  var parent = (
    /** @type {Effect} */
    active_effect
  );
  var restore = capture();
  var blocker_promise = pending.length === 1 ? pending[0].promise : pending.length > 1 ? Promise.all(pending.map((b) => b.promise)) : null;
  function finish2(values) {
    restore();
    try {
      fn(values);
    } catch (error) {
      if ((parent.f & DESTROYED) === 0) {
        invoke_error_boundary(error, parent);
      }
    }
    unset_context();
  }
  if (async.length === 0) {
    blocker_promise.then(() => finish2(sync.map(d)));
    return;
  }
  var decrement_pending = increment_pending();
  function run2() {
    Promise.all(async.map((expression) => /* @__PURE__ */ async_derived(expression))).then((result) => finish2([...sync.map(d), ...result])).catch((error) => invoke_error_boundary(error, parent)).finally(() => decrement_pending());
  }
  if (blocker_promise) {
    blocker_promise.then(() => {
      restore();
      run2();
      unset_context();
    });
  } else {
    run2();
  }
}
function capture() {
  var previous_effect = (
    /** @type {Effect} */
    active_effect
  );
  var previous_reaction = active_reaction;
  var previous_component_context = component_context;
  var previous_batch = (
    /** @type {Batch} */
    current_batch
  );
  return function restore(activate_batch = true) {
    set_active_effect(previous_effect);
    set_active_reaction(previous_reaction);
    set_component_context(previous_component_context);
    if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
      previous_batch?.activate();
      previous_batch?.apply();
    }
  };
}
function unset_context(deactivate_batch = true) {
  set_active_effect(null);
  set_active_reaction(null);
  set_component_context(null);
  if (deactivate_batch) current_batch?.deactivate();
}
function increment_pending() {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  var boundary2 = (
    /** @type {Boundary} */
    effect2.b
  );
  var batch = (
    /** @type {Batch} */
    current_batch
  );
  var blocking = boundary2.is_rendered();
  boundary2.update_pending_count(1, batch);
  batch.increment(blocking, effect2);
  return (skip = false) => {
    boundary2.update_pending_count(-1, batch);
    batch.decrement(blocking, effect2, skip);
  };
}
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags2 = DERIVED | DIRTY;
  var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
    /** @type {Derived} */
    active_reaction
  ) : null;
  if (active_effect !== null) {
    active_effect.f |= EFFECT_PRESERVED;
  }
  const signal = {
    ctx: component_context,
    deps: null,
    effects: null,
    equals,
    f: flags2,
    fn,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      UNINITIALIZED
    ),
    wv: 0,
    parent: parent_derived ?? active_effect,
    ac: null
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function async_derived(fn, label, location) {
  let parent = (
    /** @type {Effect | null} */
    active_effect
  );
  if (parent === null) {
    async_derived_orphan();
  }
  var promise = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  );
  var signal = source(
    /** @type {V} */
    UNINITIALIZED
  );
  var should_suspend = !active_reaction;
  var deferreds = /* @__PURE__ */ new Map();
  async_effect(() => {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    var d = deferred();
    promise = d.promise;
    try {
      Promise.resolve(fn()).then(d.resolve, d.reject).finally(unset_context);
    } catch (error) {
      d.reject(error);
      unset_context();
    }
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    if (should_suspend) {
      if ((effect2.f & REACTION_RAN) !== 0) {
        var decrement_pending = increment_pending();
      }
      if (
        /** @type {Boundary} */
        parent.b.is_rendered()
      ) {
        deferreds.get(batch)?.reject(STALE_REACTION);
        deferreds.delete(batch);
      } else {
        for (const d2 of deferreds.values()) {
          d2.reject(STALE_REACTION);
        }
        deferreds.clear();
      }
      deferreds.set(batch, d);
    }
    const handler = (value, error = void 0) => {
      if (decrement_pending) {
        var skip = error === STALE_REACTION;
        decrement_pending(skip);
      }
      if (error === STALE_REACTION || (effect2.f & DESTROYED) !== 0) {
        return;
      }
      batch.activate();
      if (error) {
        signal.f |= ERROR_VALUE;
        internal_set(signal, error);
      } else {
        if ((signal.f & ERROR_VALUE) !== 0) {
          signal.f ^= ERROR_VALUE;
        }
        internal_set(signal, value);
        for (const [b, d2] of deferreds) {
          deferreds.delete(b);
          if (b === batch) break;
          d2.reject(STALE_REACTION);
        }
      }
      batch.deactivate();
    };
    d.promise.then(handler, (e) => handler(null, e || "unknown"));
  });
  teardown(() => {
    for (const d of deferreds.values()) {
      d.reject(STALE_REACTION);
    }
  });
  return new Promise((fulfil) => {
    function next(p) {
      function go() {
        if (p === promise) {
          fulfil(signal);
        } else {
          next(promise);
        }
      }
      p.then(go, go);
    }
    next(promise);
  });
}
// @__NO_SIDE_EFFECTS__
function user_derived(fn) {
  const d = /* @__PURE__ */ derived(fn);
  push_reaction_value(d);
  return d;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_effects(derived2) {
  var effects = derived2.effects;
  if (effects !== null) {
    derived2.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
function get_derived_parent_effect(derived2) {
  var parent = derived2.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (parent.f & DESTROYED) === 0 ? (
        /** @type {Effect} */
        parent
      ) : null;
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived2) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived2));
  {
    try {
      derived2.f &= ~WAS_MARKED;
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived2) {
  var old_value = derived2.v;
  var value = execute_derived(derived2);
  if (!derived2.equals(value)) {
    derived2.wv = increment_write_version();
    if (!current_batch?.is_fork || derived2.deps === null) {
      derived2.v = value;
      current_batch?.capture(derived2, old_value, true);
      if (derived2.deps === null) {
        set_signal_status(derived2, CLEAN);
        return;
      }
    }
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_values !== null) {
    if (effect_tracking() || current_batch?.is_fork) {
      batch_values.set(derived2, value);
    }
  } else {
    update_derived_status(derived2);
  }
}
function freeze_derived_effects(derived2) {
  if (derived2.effects === null) return;
  for (const e of derived2.effects) {
    if (e.teardown || e.ac) {
      e.teardown?.();
      e.ac?.abort(STALE_REACTION);
      e.teardown = noop;
      e.ac = null;
      remove_reactions(e, 0);
      destroy_effect_children(e);
    }
  }
}
function unfreeze_derived_effects(derived2) {
  if (derived2.effects === null) return;
  for (const e of derived2.effects) {
    if (e.teardown) {
      update_effect(e);
    }
  }
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
let eager_effects_deferred = false;
function source(v, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack) {
  const s = source(v);
  push_reaction_value(s);
  return s;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false, trackable = true) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
    (component_context.l.s ??= []).push(s);
  }
  return s;
}
function set$1(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !includes.call(current_sources, source2))) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value, legacy_updates);
}
function internal_set(source2, value, updated_during_traversal = null) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    var batch = Batch.ensure();
    batch.capture(source2, old_value);
    if ((source2.f & DERIVED) !== 0) {
      const derived2 = (
        /** @type {Derived} */
        source2
      );
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(derived2);
      }
      if (batch_values === null) {
        update_derived_status(derived2);
      }
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY, updated_during_traversal);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
      flush_eager_effects();
    }
  }
  return value;
}
function flush_eager_effects() {
  eager_effects_deferred = false;
  for (const effect2 of eager_effects) {
    if ((effect2.f & CLEAN) !== 0) {
      set_signal_status(effect2, MAYBE_DIRTY);
    }
    if (is_dirty(effect2)) {
      update_effect(effect2);
    }
  }
  eager_effects.clear();
}
function update(source2, d = 1) {
  var value = get(source2);
  var result = d === 1 ? value++ : value--;
  set$1(source2, value);
  return result;
}
function increment(source2) {
  set$1(source2, source2.v + 1);
}
function mark_reactions(signal, status2, updated_during_traversal) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags2 = reaction.f;
    if (!runes && reaction === active_effect) continue;
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status2);
    }
    if ((flags2 & DERIVED) !== 0) {
      var derived2 = (
        /** @type {Derived} */
        reaction
      );
      batch_values?.delete(derived2);
      if ((flags2 & WAS_MARKED) === 0) {
        if (flags2 & CONNECTED) {
          reaction.f |= WAS_MARKED;
        }
        mark_reactions(derived2, MAYBE_DIRTY, updated_during_traversal);
      }
    } else if (not_dirty) {
      var effect2 = (
        /** @type {Effect} */
        reaction
      );
      if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
        eager_block_effects.add(effect2);
      }
      if (updated_during_traversal !== null) {
        updated_during_traversal.push(effect2);
      } else {
        schedule_effect(effect2);
      }
    }
  }
}
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype2 = get_prototype_of(value);
  if (prototype2 !== object_prototype && prototype2 !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = /* @__PURE__ */ state(0);
  var parent_version = update_version;
  var with_parent = (fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", /* @__PURE__ */ state(
      /** @type {any[]} */
      value.length
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          with_parent(() => {
            var s2 = /* @__PURE__ */ state(descriptor.value);
            sources.set(prop2, s2);
            return s2;
          });
        } else {
          set$1(s, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            const s2 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
            sources.set(prop2, s2);
            increment(version);
          }
        } else {
          set$1(s, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
          s = with_parent(() => {
            var p = proxy(exists ? target[prop2] : UNINITIALIZED);
            var s2 = /* @__PURE__ */ state(p);
            return s2;
          });
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get(s);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has2 = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has2 || get_descriptor(target, prop2)?.writable)) {
          if (s === void 0) {
            s = with_parent(() => {
              var p = has2 ? proxy(target[prop2]) : UNINITIALIZED;
              var s2 = /* @__PURE__ */ state(p);
              return s2;
            });
            sources.set(prop2, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has2;
      },
      set(target, prop2, value2, receiver) {
        var s = sources.get(prop2);
        var has2 = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set$1(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(i + "", other_s);
            }
          }
        }
        if (s === void 0) {
          if (!has2 || get_descriptor(target, prop2)?.writable) {
            s = with_parent(() => /* @__PURE__ */ state(void 0));
            set$1(s, proxy(value2));
            sources.set(prop2, s);
          }
        } else {
          has2 = s.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set$1(s, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has2) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set$1(ls, n + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key3) => {
          var source3 = sources.get(key3);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function get_proxied_value(value) {
  try {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
  } catch {
  }
  return value;
}
function is(a, b) {
  return Object.is(get_proxied_value(a), get_proxied_value(b));
}
var $window;
var $document;
var is_firefox;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  is_firefox = /Firefox/.test(navigator.userAgent);
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return (
    /** @type {TemplateNode | null} */
    first_child_getter.call(node)
  );
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return (
    /** @type {TemplateNode | null} */
    next_sibling_getter.call(node)
  );
}
function child(node, is_text) {
  {
    return /* @__PURE__ */ get_first_child(node);
  }
}
function first_child(node, is_text = false) {
  {
    var first = /* @__PURE__ */ get_first_child(node);
    if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
    return first;
  }
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = node;
  while (count--) {
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  {
    return next_sibling;
  }
}
function clear_text_content(node) {
  node.textContent = "";
}
function should_defer_append() {
  return false;
}
function create_element(tag, namespace, is2) {
  let options = void 0;
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(namespace ?? NAMESPACE_HTML, tag, options)
  );
}
function autofocus(dom, value) {
  if (value) {
    const body = document.body;
    dom.autofocus = true;
    queue_micro_task(() => {
      if (document.activeElement === body) {
        dom.focus();
      }
    });
  }
}
let listening_to_form_reset = false;
function add_form_reset_listener() {
  if (!listening_to_form_reset) {
    listening_to_form_reset = true;
    document.addEventListener(
      "reset",
      (evt) => {
        Promise.resolve().then(() => {
          if (!evt.defaultPrevented) {
            for (
              const e of
              /**@type {HTMLFormElement} */
              evt.target.elements
            ) {
              e.__on_r?.();
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
      { capture: true }
    );
  }
}
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function listen_to_event_and_reset_event(element, event2, handler, on_reset = handler) {
  element.addEventListener(event2, () => without_reactive_context(handler));
  const prev = element.__on_r;
  if (prev) {
    element.__on_r = () => {
      prev();
      on_reset(true);
    };
  } else {
    element.__on_r = () => on_reset(true);
  }
  add_form_reset_listener();
}
function validate_effect(rune) {
  if (active_effect === null) {
    if (active_reaction === null) {
      effect_orphan();
    }
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown();
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type2, fn) {
  var parent = active_effect;
  if (parent !== null && (parent.f & INERT) !== 0) {
    type2 |= INERT;
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes: null,
    f: type2 | DIRTY | CONNECTED,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  current_batch?.register_created_effect(effect2);
  var e = effect2;
  if ((type2 & EFFECT) !== 0) {
    if (collected_effects !== null) {
      collected_effects.push(effect2);
    } else {
      Batch.ensure().schedule(effect2);
    }
  } else if (fn !== null) {
    try {
      update_effect(effect2);
    } catch (e2) {
      destroy_effect(effect2);
      throw e2;
    }
    if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && // either `null`, or a singular child
    (e.f & EFFECT_PRESERVED) === 0) {
      e = e.first;
      if ((type2 & BLOCK_EFFECT) !== 0 && (type2 & EFFECT_TRANSPARENT) !== 0 && e !== null) {
        e.f |= EFFECT_TRANSPARENT;
      }
    }
  }
  if (e !== null) {
    e.parent = parent;
    if (parent !== null) {
      push_effect(e, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type2 & ROOT_EFFECT) === 0) {
      var derived2 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived2.effects ??= []).push(e);
    }
  }
  return effect2;
}
function effect_tracking() {
  return active_reaction !== null && !untracking;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function user_effect(fn) {
  validate_effect();
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && (flags2 & REACTION_RAN) === 0;
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ??= []).push(fn);
  } else {
    return create_user_effect(fn);
  }
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn);
}
function user_pre_effect(fn) {
  validate_effect();
  return create_effect(RENDER_EFFECT | USER_EFFECT, fn);
}
function component_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn);
}
function legacy_pre_effect(deps, fn) {
  var context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  var token = { effect: null, ran: false, deps };
  context.l.$.push(token);
  token.effect = render_effect(() => {
    deps();
    if (token.ran) return;
    token.ran = true;
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    try {
      set_active_effect(effect2.parent);
      untrack(fn);
    } finally {
      set_active_effect(effect2);
    }
  });
}
function legacy_pre_effect_reset() {
  var context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  render_effect(() => {
    for (var token of context.l.$) {
      token.deps();
      var effect2 = token.effect;
      if ((effect2.f & CLEAN) !== 0 && effect2.deps !== null) {
        set_signal_status(effect2, MAYBE_DIRTY);
      }
      if (is_dirty(effect2)) {
        update_effect(effect2);
      }
      token.ran = false;
    }
  });
}
function async_effect(fn) {
  return create_effect(ASYNC | EFFECT_PRESERVED, fn);
}
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn);
}
function template_effect(fn, sync = [], async = [], blockers = []) {
  flatten(blockers, sync, async, (values) => {
    create_effect(RENDER_EFFECT, () => fn(...values.map(get)));
  });
}
function deferred_template_effect(fn, sync = [], async = [], blockers = []) {
  if (async.length > 0 || blockers.length > 0) {
    var decrement_pending = increment_pending();
  }
  flatten(blockers, sync, async, (values) => {
    create_effect(EFFECT, () => fn(...values.map(get)));
    if (decrement_pending) {
      decrement_pending();
    }
  });
}
function block(fn, flags2 = 0) {
  var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
  return effect2;
}
function managed(fn, flags2 = 0) {
  var effect2 = create_effect(MANAGED_EFFECT | flags2, fn);
  return effect2;
}
function branch(fn) {
  return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    const controller = effect2.ac;
    if (controller !== null) {
      without_reactive_context(() => {
        controller.abort(STALE_REACTION);
      });
    }
    var next = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
    remove_effect_dom(
      effect2.nodes.start,
      /** @type {TemplateNode} */
      effect2.nodes.end
    );
    removed = true;
  }
  set_signal_status(effect2, DESTROYING);
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  var transitions = effect2.nodes && effect2.nodes.t;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  effect2.f ^= DESTROYING;
  effect2.f |= DESTROYED;
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = effect2.b = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
    node.remove();
    node = next;
  }
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next = effect2.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback, destroy = true) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  var fn = () => {
    if (destroy) destroy_effect(effect2);
    if (callback) callback();
  };
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  var t = effect2.nodes && effect2.nodes.t;
  if (t !== null) {
    for (const transition of t) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
    // it means the parent block effect was pruned. In that case,
    // transparency information was transferred to the branch effect.
    (child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
    pause_children(child2, transitions, transparent ? local : false);
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & INERT) === 0) return;
  effect2.f ^= INERT;
  if ((effect2.f & CLEAN) === 0) {
    set_signal_status(effect2, DIRTY);
    Batch.ensure().schedule(effect2);
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  var t = effect2.nodes && effect2.nodes.t;
  if (t !== null) {
    for (const transition of t) {
      if (transition.is_global || local) {
        transition.in();
      }
    }
  }
}
function move_effect(effect2, fragment) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  while (node !== null) {
    var next = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
    fragment.append(node);
    node = next;
  }
}
let is_updating_effect = false;
let is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
let active_reaction = null;
let untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
let active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
let current_sources = null;
function push_reaction_value(value) {
  if (active_reaction !== null && true) {
    if (current_sources === null) {
      current_sources = [value];
    } else {
      current_sources.push(value);
    }
  }
}
let new_deps = null;
let skipped_deps = 0;
let untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
let write_version = 1;
let read_version = 0;
let update_version = read_version;
function set_update_version(value) {
  update_version = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if (flags2 & DERIVED) {
    reaction.f &= ~WAS_MARKED;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = (
      /** @type {Value[]} */
      reaction.deps
    );
    var length = dependencies.length;
    for (var i = 0; i < length; i++) {
      var dependency = dependencies[i];
      if (is_dirty(
        /** @type {Derived} */
        dependency
      )) {
        update_derived(
          /** @type {Derived} */
          dependency
        );
      }
      if (dependency.wv > reaction.wv) {
        return true;
      }
    }
    if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    batch_values === null) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (current_sources !== null && includes.call(current_sources, signal)) {
    return;
  }
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root2) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    without_reactive_context(() => {
      reaction.ac.abort(STALE_REACTION);
    });
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var fn = (
      /** @type {Function} */
      reaction.fn
    );
    var result = fn();
    reaction.f |= REACTION_RAN;
    var deps = reaction.deps;
    var is_fork = current_batch?.is_fork;
    if (new_deps !== null) {
      var i;
      if (!is_fork) {
        remove_reactions(reaction, skipped_deps);
      }
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (previous_reaction.deps !== null) {
        for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
          previous_reaction.deps[i2].rv = read_version;
        }
      }
      if (previous_deps !== null) {
        for (const dep of previous_deps) {
          dep.rv = read_version;
        }
      }
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error) {
    return handle_error(error);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = index_of.call(reactions, signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !includes.call(new_deps, dependency))) {
    var derived2 = (
      /** @type {Derived} */
      dependency
    );
    if ((derived2.f & CONNECTED) !== 0) {
      derived2.f ^= CONNECTED;
      derived2.f &= ~WAS_MARKED;
    }
    update_derived_status(derived2);
    freeze_derived_effects(derived2);
    remove_reactions(derived2, 0);
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags2 = effect2.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = true;
  try {
    if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    var dep;
    if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) ;
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
async function tick() {
  await Promise.resolve();
  flushSync();
}
function get(signal) {
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && (current_sources === null || !includes.call(current_sources, signal))) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else {
            new_deps.push(signal);
          }
        }
      } else {
        (active_reaction.deps ??= []).push(signal);
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!includes.call(reactions, active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  if (is_derived) {
    var derived2 = (
      /** @type {Derived} */
      signal
    );
    if (is_destroying_effect) {
      var value = derived2.v;
      if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
        value = execute_derived(derived2);
      }
      old_values.set(derived2, value);
      return value;
    }
    var should_connect = (derived2.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & CONNECTED) !== 0);
    var is_new = (derived2.f & REACTION_RAN) === 0;
    if (is_dirty(derived2)) {
      if (should_connect) {
        derived2.f |= CONNECTED;
      }
      update_derived(derived2);
    }
    if (should_connect && !is_new) {
      unfreeze_derived_effects(derived2);
      reconnect(derived2);
    }
  }
  if (batch_values?.has(signal)) {
    return batch_values.get(signal);
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function reconnect(derived2) {
  derived2.f |= CONNECTED;
  if (derived2.deps === null) return;
  for (const dep of derived2.deps) {
    (dep.reactions ??= []).push(derived2);
    if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
      unfreeze_derived_effects(
        /** @type {Derived} */
        dep
      );
      reconnect(
        /** @type {Derived} */
        dep
      );
    }
  }
}
function depends_on_old_values(derived2) {
  if (derived2.v === UNINITIALIZED) return true;
  if (derived2.deps === null) return false;
  for (const dep of derived2.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
function deep_read_state(value) {
  if (typeof value !== "object" || !value || value instanceof EventTarget) {
    return;
  }
  if (STATE_SYMBOL in value) {
    deep_read(value);
  } else if (!Array.isArray(value)) {
    for (let key2 in value) {
      const prop2 = value[key2];
      if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
        deep_read(prop2);
      }
    }
  }
}
function deep_read(value, visited = /* @__PURE__ */ new Set()) {
  if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
  !(value instanceof EventTarget) && !visited.has(value)) {
    visited.add(value);
    if (value instanceof Date) {
      value.getTime();
    }
    for (let key2 in value) {
      try {
        deep_read(value[key2], visited);
      } catch (e) {
      }
    }
    const proto = get_prototype_of(value);
    if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
      const descriptors = get_descriptors(proto);
      for (let key2 in descriptors) {
        const get2 = descriptors[key2].get;
        if (get2) {
          try {
            get2.call(value);
          } catch (e) {
          }
        }
      }
    }
  }
}
const event_symbol = /* @__PURE__ */ Symbol("events");
const all_registered_events = /* @__PURE__ */ new Set();
const root_event_handles = /* @__PURE__ */ new Set();
function create_event(event_name, dom, handler, options = {}) {
  function target_handler(event2) {
    if (!options.capture) {
      handle_event_propagation.call(dom, event2);
    }
    if (!event2.cancelBubble) {
      return without_reactive_context(() => {
        return handler?.call(this, event2);
      });
    }
  }
  if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
    queue_micro_task(() => {
      dom.addEventListener(event_name, target_handler, options);
    });
  } else {
    dom.addEventListener(event_name, target_handler, options);
  }
  return target_handler;
}
function event(event_name, dom, handler, capture2, passive) {
  var options = { capture: capture2, passive };
  var target_handler = create_event(event_name, dom, handler, options);
  if (dom === document.body || // @ts-ignore
  dom === window || // @ts-ignore
  dom === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  dom instanceof HTMLMediaElement) {
    teardown(() => {
      dom.removeEventListener(event_name, target_handler, options);
    });
  }
}
function delegated(event_name, element, handler) {
  (element[event_symbol] ??= {})[event_name] = handler;
}
function delegate(events) {
  for (var i = 0; i < events.length; i++) {
    all_registered_events.add(events[i]);
  }
  for (var fn of root_event_handles) {
    fn(events);
  }
}
let last_propagated_event = null;
function handle_event_propagation(event2) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = event2.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  last_propagated_event = event2;
  var path_idx = 0;
  var handled_at = last_propagated_event === event2 && event2[event_symbol];
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2[event_symbol] = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated2 = current_target[event_symbol]?.[event_name];
        if (delegated2 != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          delegated2.call(current_target, event2);
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2[event_symbol] = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
const policy = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (html) => {
      return html;
    }
  })
);
function create_trusted_html(html) {
  return (
    /** @type {string} */
    policy?.createHTML(html) ?? html
  );
}
function create_fragment_from_html(html) {
  var elem = create_element("template");
  elem.innerHTML = create_trusted_html(html.replaceAll("<!>", "<!---->"));
  return elem.content;
}
function assign_nodes(start2, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes === null) {
    effect2.nodes = { start: start2, end, a: null, t: null };
  }
}
// @__NO_SIDE_EFFECTS__
function from_html(content, flags2) {
  var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {TemplateNode} */
      /* @__PURE__ */ get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start2 = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start2, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function from_namespace(content, flags2, ns = "svg") {
  var has_start = !content.startsWith("<!>");
  var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
  var node;
  return () => {
    if (!node) {
      var fragment = (
        /** @type {DocumentFragment} */
        create_fragment_from_html(wrapped)
      );
      var root2 = (
        /** @type {Element} */
        /* @__PURE__ */ get_first_child(fragment)
      );
      {
        node = /** @type {Element} */
        /* @__PURE__ */ get_first_child(root2);
      }
    }
    var clone = (
      /** @type {TemplateNode} */
      node.cloneNode(true)
    );
    {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function from_svg(content, flags2) {
  return /* @__PURE__ */ from_namespace(content, flags2, "svg");
}
function text(value = "") {
  {
    var t = create_text(value + "");
    assign_nodes(t, t);
    return t;
  }
}
function comment() {
  var frag = document.createDocumentFragment();
  var start2 = document.createComment("");
  var anchor = create_text();
  frag.append(start2, anchor);
  assign_nodes(start2, anchor);
  return frag;
}
function append2(anchor, dom) {
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}
function is_capture_event(name) {
  return name.endsWith("capture") && name !== "gotpointercapture" && name !== "lostpointercapture";
}
const DELEGATED_EVENTS = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function can_delegate_event(event_name) {
  return DELEGATED_EVENTS.includes(event_name);
}
const ATTRIBUTE_ALIASES = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function normalize_attribute(name) {
  name = name.toLowerCase();
  return ATTRIBUTE_ALIASES[name] ?? name;
}
const PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
  if (str !== (text2.__t ??= text2.nodeValue)) {
    text2.__t = str;
    text2.nodeValue = `${str}`;
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
const listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
  init_operations();
  var component2 = void 0;
  var unmount = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    boundary(
      /** @type {TemplateNode} */
      anchor_node,
      {
        pending: () => {
        }
      },
      (anchor_node2) => {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        if (context) ctx.c = context;
        if (events) {
          props.$$events = events;
        }
        component2 = Component(anchor_node2, props) || {};
        pop();
      },
      transformError
    );
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive = is_passive_event(event_name);
        for (const node of [target, document]) {
          var counts = listeners.get(node);
          if (counts === void 0) {
            counts = /* @__PURE__ */ new Map();
            listeners.set(node, counts);
          }
          var count = counts.get(event_name);
          if (count === void 0) {
            node.addEventListener(event_name, handle_event_propagation, { passive });
            counts.set(event_name, 1);
          } else {
            counts.set(event_name, count + 1);
          }
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    return () => {
      for (var event_name of registered_events) {
        for (const node of [target, document]) {
          var counts = (
            /** @type {Map<string, number>} */
            listeners.get(node)
          );
          var count = (
            /** @type {number} */
            counts.get(event_name)
          );
          if (--count == 0) {
            node.removeEventListener(event_name, handle_event_propagation);
            counts.delete(event_name);
            if (counts.size === 0) {
              listeners.delete(node);
            }
          } else {
            counts.set(event_name, count);
          }
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount);
  return component2;
}
let mounted_components = /* @__PURE__ */ new WeakMap();
class BranchManager {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #batches = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #onscreen = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #offscreen = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #outroing = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #transition = true;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(anchor, transition = true) {
    this.anchor = anchor;
    this.#transition = transition;
  }
  /**
   * @param {Batch} batch
   */
  #commit = (batch) => {
    if (!this.#batches.has(batch)) return;
    var key2 = (
      /** @type {Key} */
      this.#batches.get(batch)
    );
    var onscreen = this.#onscreen.get(key2);
    if (onscreen) {
      resume_effect(onscreen);
      this.#outroing.delete(key2);
    } else {
      var offscreen = this.#offscreen.get(key2);
      if (offscreen) {
        this.#onscreen.set(key2, offscreen.effect);
        this.#offscreen.delete(key2);
        offscreen.fragment.lastChild.remove();
        this.anchor.before(offscreen.fragment);
        onscreen = offscreen.effect;
      }
    }
    for (const [b, k] of this.#batches) {
      this.#batches.delete(b);
      if (b === batch) {
        break;
      }
      const offscreen2 = this.#offscreen.get(k);
      if (offscreen2) {
        destroy_effect(offscreen2.effect);
        this.#offscreen.delete(k);
      }
    }
    for (const [k, effect2] of this.#onscreen) {
      if (k === key2 || this.#outroing.has(k)) continue;
      const on_destroy = () => {
        const keys2 = Array.from(this.#batches.values());
        if (keys2.includes(k)) {
          var fragment = document.createDocumentFragment();
          move_effect(effect2, fragment);
          fragment.append(create_text());
          this.#offscreen.set(k, { effect: effect2, fragment });
        } else {
          destroy_effect(effect2);
        }
        this.#outroing.delete(k);
        this.#onscreen.delete(k);
      };
      if (this.#transition || !onscreen) {
        this.#outroing.add(k);
        pause_effect(effect2, on_destroy, false);
      } else {
        on_destroy();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #discard = (batch) => {
    this.#batches.delete(batch);
    const keys2 = Array.from(this.#batches.values());
    for (const [k, branch2] of this.#offscreen) {
      if (!keys2.includes(k)) {
        destroy_effect(branch2.effect);
        this.#offscreen.delete(k);
      }
    }
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(key2, fn) {
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    if (fn && !this.#onscreen.has(key2) && !this.#offscreen.has(key2)) {
      if (defer) {
        var fragment = document.createDocumentFragment();
        var target = create_text();
        fragment.append(target);
        this.#offscreen.set(key2, {
          effect: branch(() => fn(target)),
          fragment
        });
      } else {
        this.#onscreen.set(
          key2,
          branch(() => fn(this.anchor))
        );
      }
    }
    this.#batches.set(batch, key2);
    if (defer) {
      for (const [k, effect2] of this.#onscreen) {
        if (k === key2) {
          batch.unskip_effect(effect2);
        } else {
          batch.skip_effect(effect2);
        }
      }
      for (const [k, branch2] of this.#offscreen) {
        if (k === key2) {
          batch.unskip_effect(branch2.effect);
        } else {
          batch.skip_effect(branch2.effect);
        }
      }
      batch.oncommit(this.#commit);
      batch.ondiscard(this.#discard);
    } else {
      this.#commit(batch);
    }
  }
}
function if_block(node, fn, elseif = false) {
  var branches = new BranchManager(node);
  var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
  function update_branch(key2, fn2) {
    branches.ensure(key2, fn2);
  }
  block(() => {
    var has_branch = false;
    fn((fn2, key2 = 0) => {
      has_branch = true;
      update_branch(key2, fn2);
    });
    if (!has_branch) {
      update_branch(-1, null);
    }
  }, flags2);
}
const NAN = /* @__PURE__ */ Symbol("NaN");
function key(node, get_key, render_fn) {
  var branches = new BranchManager(node);
  var legacy = !is_runes();
  block(() => {
    var key2 = get_key();
    if (key2 !== key2) {
      key2 = /** @type {any} */
      NAN;
    }
    if (legacy && key2 !== null && typeof key2 === "object") {
      key2 = /** @type {V} */
      {};
    }
    branches.ensure(key2, render_fn);
  });
}
function index(_, i) {
  return i;
}
function pause_effects(state2, to_destroy, controlled_anchor) {
  var transitions = [];
  var length = to_destroy.length;
  var group;
  var remaining = to_destroy.length;
  for (var i = 0; i < length; i++) {
    let effect2 = to_destroy[i];
    pause_effect(
      effect2,
      () => {
        if (group) {
          group.pending.delete(effect2);
          group.done.add(effect2);
          if (group.pending.size === 0) {
            var groups = (
              /** @type {Set<EachOutroGroup>} */
              state2.outrogroups
            );
            destroy_effects(state2, array_from(group.done));
            groups.delete(group);
            if (groups.size === 0) {
              state2.outrogroups = null;
            }
          }
        } else {
          remaining -= 1;
        }
      },
      false
    );
  }
  if (remaining === 0) {
    var fast_path = transitions.length === 0 && controlled_anchor !== null;
    if (fast_path) {
      var anchor = (
        /** @type {Element} */
        controlled_anchor
      );
      var parent_node = (
        /** @type {Element} */
        anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(anchor);
      state2.items.clear();
    }
    destroy_effects(state2, to_destroy, !fast_path);
  } else {
    group = {
      pending: new Set(to_destroy),
      done: /* @__PURE__ */ new Set()
    };
    (state2.outrogroups ??= /* @__PURE__ */ new Set()).add(group);
  }
}
function destroy_effects(state2, to_destroy, remove_dom = true) {
  var preserved_effects;
  if (state2.pending.size > 0) {
    preserved_effects = /* @__PURE__ */ new Set();
    for (const keys2 of state2.pending.values()) {
      for (const key2 of keys2) {
        preserved_effects.add(
          /** @type {EachItem} */
          state2.items.get(key2).e
        );
      }
    }
  }
  for (var i = 0; i < to_destroy.length; i++) {
    var e = to_destroy[i];
    if (preserved_effects?.has(e)) {
      e.f |= EFFECT_OFFSCREEN;
      const fragment = document.createDocumentFragment();
      move_effect(e, fragment);
    } else {
      destroy_effect(to_destroy[i], remove_dom);
    }
  }
}
var offscreen_anchor;
function each(node, flags2, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var items = /* @__PURE__ */ new Map();
  var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = parent_node.appendChild(create_text());
  }
  var fallback = null;
  var each_array = /* @__PURE__ */ derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  var array;
  var pending = /* @__PURE__ */ new Map();
  var first_run = true;
  function commit(batch) {
    if ((state2.effect.f & DESTROYED) !== 0) {
      return;
    }
    state2.pending.delete(batch);
    state2.fallback = fallback;
    reconcile(state2, array, anchor, flags2, get_key);
    if (fallback !== null) {
      if (array.length === 0) {
        if ((fallback.f & EFFECT_OFFSCREEN) === 0) {
          resume_effect(fallback);
        } else {
          fallback.f ^= EFFECT_OFFSCREEN;
          move(fallback, null, anchor);
        }
      } else {
        pause_effect(fallback, () => {
          fallback = null;
        });
      }
    }
  }
  function discard(batch) {
    state2.pending.delete(batch);
  }
  var effect2 = block(() => {
    array = /** @type {V[]} */
    get(each_array);
    var length = array.length;
    var keys2 = /* @__PURE__ */ new Set();
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    for (var index2 = 0; index2 < length; index2 += 1) {
      var value = array[index2];
      var key2 = get_key(value, index2);
      var item = first_run ? null : items.get(key2);
      if (item) {
        if (item.v) internal_set(item.v, value);
        if (item.i) internal_set(item.i, index2);
        if (defer) {
          batch.unskip_effect(item.e);
        }
      } else {
        item = create_item(
          items,
          first_run ? anchor : offscreen_anchor ??= create_text(),
          value,
          key2,
          index2,
          render_fn,
          flags2,
          get_collection
        );
        if (!first_run) {
          item.e.f |= EFFECT_OFFSCREEN;
        }
        items.set(key2, item);
      }
      keys2.add(key2);
    }
    if (length === 0 && fallback_fn && !fallback) {
      if (first_run) {
        fallback = branch(() => fallback_fn(anchor));
      } else {
        fallback = branch(() => fallback_fn(offscreen_anchor ??= create_text()));
        fallback.f |= EFFECT_OFFSCREEN;
      }
    }
    if (length > keys2.size) {
      {
        each_key_duplicate();
      }
    }
    if (!first_run) {
      pending.set(batch, keys2);
      if (defer) {
        for (const [key3, item2] of items) {
          if (!keys2.has(key3)) {
            batch.skip_effect(item2.e);
          }
        }
        batch.oncommit(commit);
        batch.ondiscard(discard);
      } else {
        commit(batch);
      }
    }
    get(each_array);
  });
  var state2 = { effect: effect2, items, pending, outrogroups: null, fallback };
  first_run = false;
}
function skip_to_branch(effect2) {
  while (effect2 !== null && (effect2.f & BRANCH_EFFECT) === 0) {
    effect2 = effect2.next;
  }
  return effect2;
}
function reconcile(state2, array, anchor, flags2, get_key) {
  var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
  var length = array.length;
  var items = state2.items;
  var current = skip_to_branch(state2.effect.first);
  var seen2;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key2;
  var effect2;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key2 = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key2).e;
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        effect2.nodes?.a?.measure();
        (to_animate ??= /* @__PURE__ */ new Set()).add(effect2);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key2 = get_key(value, i);
    effect2 = /** @type {EachItem} */
    items.get(key2).e;
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        group.pending.delete(effect2);
        group.done.delete(effect2);
      }
    }
    if ((effect2.f & INERT) !== 0) {
      resume_effect(effect2);
      if (is_animated) {
        effect2.nodes?.a?.unfix();
        (to_animate ??= /* @__PURE__ */ new Set()).delete(effect2);
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
      effect2.f ^= EFFECT_OFFSCREEN;
      if (effect2 === current) {
        move(effect2, null, anchor);
      } else {
        var next = prev ? prev.next : current;
        if (effect2 === state2.effect.last) {
          state2.effect.last = effect2.prev;
        }
        if (effect2.prev) effect2.prev.next = effect2.next;
        if (effect2.next) effect2.next.prev = effect2.prev;
        link(state2, prev, effect2);
        link(state2, effect2, next);
        move(effect2, next, anchor);
        prev = effect2;
        matched = [];
        stashed = [];
        current = skip_to_branch(prev.next);
        continue;
      }
    }
    if (effect2 !== current) {
      if (seen2 !== void 0 && seen2.has(effect2)) {
        if (matched.length < stashed.length) {
          var start2 = stashed[0];
          var j;
          prev = start2.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start2, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen2.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start2);
          current = start2;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen2.delete(effect2);
          move(effect2, current, anchor);
          link(state2, effect2.prev, effect2.next);
          link(state2, effect2, prev === null ? state2.effect.first : prev.next);
          link(state2, prev, effect2);
          prev = effect2;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current !== effect2) {
        (seen2 ??= /* @__PURE__ */ new Set()).add(current);
        stashed.push(current);
        current = skip_to_branch(current.next);
      }
      if (current === null) {
        continue;
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
      matched.push(effect2);
    }
    prev = effect2;
    current = skip_to_branch(effect2.next);
  }
  if (state2.outrogroups !== null) {
    for (const group of state2.outrogroups) {
      if (group.pending.size === 0) {
        destroy_effects(state2, array_from(group.done));
        state2.outrogroups?.delete(group);
      }
    }
    if (state2.outrogroups.size === 0) {
      state2.outrogroups = null;
    }
  }
  if (current !== null || seen2 !== void 0) {
    var to_destroy = [];
    if (seen2 !== void 0) {
      for (effect2 of seen2) {
        if ((effect2.f & INERT) === 0) {
          to_destroy.push(effect2);
        }
      }
    }
    while (current !== null) {
      if ((current.f & INERT) === 0 && current !== state2.fallback) {
        to_destroy.push(current);
      }
      current = skip_to_branch(current.next);
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].nodes?.a?.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].nodes?.a?.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      if (to_animate === void 0) return;
      for (effect2 of to_animate) {
        effect2.nodes?.a?.apply();
      }
    });
  }
}
function create_item(items, anchor, value, key2, index2, render_fn, flags2, get_collection) {
  var v = (flags2 & EACH_ITEM_REACTIVE) !== 0 ? (flags2 & EACH_ITEM_IMMUTABLE) === 0 ? /* @__PURE__ */ mutable_source(value, false, false) : source(value) : null;
  var i = (flags2 & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
  return {
    v,
    i,
    e: branch(() => {
      render_fn(anchor, v ?? value, i ?? index2, get_collection);
      return () => {
        items.delete(key2);
      };
    })
  };
}
function move(effect2, next, anchor) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  var dest = next && (next.f & EFFECT_OFFSCREEN) === 0 ? (
    /** @type {EffectNodes} */
    next.nodes.start
  ) : anchor;
  while (node !== null) {
    var next_node = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    dest.before(node);
    if (node === end) {
      return;
    }
    node = next_node;
  }
}
function link(state2, prev, next) {
  if (prev === null) {
    state2.effect.first = next;
  } else {
    prev.next = next;
  }
  if (next === null) {
    state2.effect.last = prev;
  } else {
    next.prev = prev;
  }
}
function component(node, get_component, render_fn) {
  var branches = new BranchManager(node);
  block(() => {
    var component2 = get_component() ?? null;
    branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
  }, EFFECT_TRANSPARENT);
}
function init(immutable = false) {
  const context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  const callbacks = context.l.u;
  if (!callbacks) return;
  let props = () => deep_read_state(context.s);
  if (immutable) {
    let version = 0;
    let prev = (
      /** @type {Record<string, any>} */
      {}
    );
    const d = /* @__PURE__ */ derived(() => {
      let changed = false;
      const props2 = context.s;
      for (const key2 in props2) {
        if (props2[key2] !== prev[key2]) {
          prev[key2] = props2[key2];
          changed = true;
        }
      }
      if (changed) version++;
      return version;
    });
    props = () => get(d);
  }
  if (callbacks.b.length) {
    user_pre_effect(() => {
      observe_all(context, props);
      run_all(callbacks.b);
    });
  }
  user_effect(() => {
    const fns = untrack(() => callbacks.m.map(run));
    return () => {
      for (const fn of fns) {
        if (typeof fn === "function") {
          fn();
        }
      }
    };
  });
  if (callbacks.a.length) {
    user_effect(() => {
      observe_all(context, props);
      run_all(callbacks.a);
    });
  }
}
function observe_all(context, props) {
  if (context.l.s) {
    for (const signal of context.l.s) get(signal);
  }
  props();
}
const rest_props_handler = {
  get(target, key2) {
    if (target.exclude.includes(key2)) return;
    return target.props[key2];
  },
  set(target, key2) {
    return false;
  },
  getOwnPropertyDescriptor(target, key2) {
    if (target.exclude.includes(key2)) return;
    if (key2 in target.props) {
      return {
        enumerable: true,
        configurable: true,
        value: target.props[key2]
      };
    }
  },
  has(target, key2) {
    if (target.exclude.includes(key2)) return false;
    return key2 in target.props;
  },
  ownKeys(target) {
    return Reflect.ownKeys(target.props).filter((key2) => !target.exclude.includes(key2));
  }
};
// @__NO_SIDE_EFFECTS__
function rest_props(props, exclude, name) {
  return new Proxy(
    { props, exclude },
    rest_props_handler
  );
}
const legacy_rest_props_handler = {
  get(target, key2) {
    if (target.exclude.includes(key2)) return;
    get(target.version);
    return key2 in target.special ? target.special[key2]() : target.props[key2];
  },
  set(target, key2, value) {
    if (!(key2 in target.special)) {
      var previous_effect = active_effect;
      try {
        set_active_effect(target.parent_effect);
        target.special[key2] = prop(
          {
            get [key2]() {
              return target.props[key2];
            }
          },
          /** @type {string} */
          key2,
          PROPS_IS_UPDATED
        );
      } finally {
        set_active_effect(previous_effect);
      }
    }
    target.special[key2](value);
    update(target.version);
    return true;
  },
  getOwnPropertyDescriptor(target, key2) {
    if (target.exclude.includes(key2)) return;
    if (key2 in target.props) {
      return {
        enumerable: true,
        configurable: true,
        value: target.props[key2]
      };
    }
  },
  deleteProperty(target, key2) {
    if (target.exclude.includes(key2)) return true;
    target.exclude.push(key2);
    update(target.version);
    return true;
  },
  has(target, key2) {
    if (target.exclude.includes(key2)) return false;
    return key2 in target.props;
  },
  ownKeys(target) {
    return Reflect.ownKeys(target.props).filter((key2) => !target.exclude.includes(key2));
  }
};
function legacy_rest_props(props, exclude) {
  return new Proxy(
    {
      props,
      exclude,
      special: {},
      version: source(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        active_effect
      )
    },
    legacy_rest_props_handler
  );
}
const spread_props_handler = {
  get(target, key2) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      if (typeof p === "object" && p !== null && key2 in p) return p[key2];
    }
  },
  set(target, key2, value) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      const desc = get_descriptor(p, key2);
      if (desc && desc.set) {
        desc.set(value);
        return true;
      }
    }
    return false;
  },
  getOwnPropertyDescriptor(target, key2) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      if (typeof p === "object" && p !== null && key2 in p) {
        const descriptor = get_descriptor(p, key2);
        if (descriptor && !descriptor.configurable) {
          descriptor.configurable = true;
        }
        return descriptor;
      }
    }
  },
  has(target, key2) {
    if (key2 === STATE_SYMBOL || key2 === LEGACY_PROPS) return false;
    for (let p of target.props) {
      if (is_function(p)) p = p();
      if (p != null && key2 in p) return true;
    }
    return false;
  },
  ownKeys(target) {
    const keys2 = [];
    for (let p of target.props) {
      if (is_function(p)) p = p();
      if (!p) continue;
      for (const key2 in p) {
        if (!keys2.includes(key2)) keys2.push(key2);
      }
      for (const key2 of Object.getOwnPropertySymbols(p)) {
        if (!keys2.includes(key2)) keys2.push(key2);
      }
    }
    return keys2;
  }
};
function spread_props(...props) {
  return new Proxy({ props }, spread_props_handler);
}
function prop(props, key2, flags2, fallback) {
  var runes = !legacy_mode_flag || (flags2 & PROPS_IS_RUNES) !== 0;
  var bindable = (flags2 & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags2 & PROPS_IS_LAZY_INITIAL) !== 0;
  var fallback_value = (
    /** @type {V} */
    fallback
  );
  var fallback_dirty = true;
  var get_fallback = () => {
    if (fallback_dirty) {
      fallback_dirty = false;
      fallback_value = lazy ? untrack(
        /** @type {() => V} */
        fallback
      ) : (
        /** @type {V} */
        fallback
      );
    }
    return fallback_value;
  };
  let setter;
  if (bindable) {
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    setter = get_descriptor(props, key2)?.set ?? (is_entry_props && key2 in props ? (v) => props[key2] = v : void 0);
  }
  var initial_value;
  var is_store_sub = false;
  if (bindable) {
    [initial_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key2]
    ));
  } else {
    initial_value = /** @type {V} */
    props[key2];
  }
  if (initial_value === void 0 && fallback !== void 0) {
    initial_value = get_fallback();
    if (setter) {
      if (runes) props_invalid_value();
      setter(initial_value);
    }
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      return value;
    };
  } else {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value !== void 0) {
        fallback_value = /** @type {V} */
        void 0;
      }
      return value === void 0 ? fallback_value : value;
    };
  }
  if (runes && (flags2 & PROPS_IS_UPDATED) === 0) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return (
      /** @type {() => V} */
      (function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        }
        return getter();
      })
    );
  }
  var overridden = false;
  var d = ((flags2 & PROPS_IS_IMMUTABLE) !== 0 ? derived : derived_safe_equal)(() => {
    overridden = false;
    return getter();
  });
  if (bindable) get(d);
  var parent_effect = (
    /** @type {Effect} */
    active_effect
  );
  return (
    /** @type {() => V} */
    (function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get(d) : runes && bindable ? proxy(value) : value;
        set$1(d, new_value);
        overridden = true;
        if (fallback_value !== void 0) {
          fallback_value = new_value;
        }
        return value;
      }
      if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
        return d.v;
      }
      return get(d);
    })
  );
}
const h = (component2, propsOrChildren, childrenOrKey, key2 = null) => {
  const hasProps = typeof propsOrChildren === "object" && propsOrChildren !== null && !Array.isArray(propsOrChildren);
  return {
    component: component2,
    key: hasProps ? key2 : typeof childrenOrKey === "number" ? childrenOrKey : null,
    props: hasProps ? propsOrChildren : {},
    children: hasProps ? Array.isArray(childrenOrKey) ? childrenOrKey : childrenOrKey !== null ? [childrenOrKey] : [] : Array.isArray(propsOrChildren) ? propsOrChildren : propsOrChildren !== null ? [propsOrChildren] : []
  };
};
function Render($$anchor, $$props) {
  push($$props, false);
  let component$1 = prop($$props, "component", 8);
  let props = prop($$props, "props", 24, () => ({}));
  let children = prop($$props, "children", 24, () => []);
  let key$1 = prop($$props, "key", 8, null);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      key(
        node_1,
        () => (deep_read_state(children()), deep_read_state(key$1()), untrack(() => children()?.length === 0 ? key$1() : null)),
        ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var fragment_3 = comment();
              var node_3 = first_child(fragment_3);
              component(node_3, component$1, ($$anchor5, $$component) => {
                $$component($$anchor5, spread_props(props, {
                  children: ($$anchor6, $$slotProps) => {
                    var fragment_4 = comment();
                    var node_4 = first_child(fragment_4);
                    each(node_4, 1, children, index, ($$anchor7, child2) => {
                      var fragment_5 = comment();
                      var node_5 = first_child(fragment_5);
                      Render(node_5, spread_props(() => get(child2)));
                      append2($$anchor7, fragment_5);
                    });
                    append2($$anchor6, fragment_4);
                  },
                  $$slots: { default: true }
                }));
              });
              append2($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var fragment_6 = comment();
              var node_6 = first_child(fragment_6);
              component(node_6, component$1, ($$anchor5, $$component) => {
                $$component($$anchor5, spread_props(props));
              });
              append2($$anchor4, fragment_6);
            };
            if_block(node_2, ($$render) => {
              if (deep_read_state(children()), untrack(() => children().length > 0)) $$render(consequent);
              else $$render(alternate, -1);
            });
          }
          append2($$anchor3, fragment_2);
        }
      );
      append2($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (component$1()) $$render(consequent_1);
    });
  }
  append2($$anchor, fragment);
  pop();
}
const { set, subscribe } = writable();
const setPage = set;
const page = { subscribe };
function App($$anchor, $$props) {
  push($$props, false);
  let initialComponent = prop($$props, "initialComponent", 8);
  let initialPage = prop($$props, "initialPage", 8);
  let resolveComponent = prop($$props, "resolveComponent", 8);
  let component2 = initialComponent();
  let key2 = null;
  let page2 = { ...initialPage(), flash: initialPage().flash ?? {} };
  let renderProps = /* @__PURE__ */ mutable_source(resolveRenderProps(component2, page2, key2));
  setPage(page2);
  const isServer3 = typeof window === "undefined";
  if (!isServer3) {
    router.init({
      initialPage: initialPage(),
      resolveComponent: resolveComponent(),
      swapComponent: async (args) => {
        component2 = args.component;
        page2 = args.page;
        key2 = args.preserveState ? key2 : Date.now();
        set$1(renderProps, resolveRenderProps(component2, page2, key2));
        setPage(page2);
      },
      onFlash: (flash) => {
        page2 = { ...page2, flash };
        setPage(page2);
      }
    });
  }
  function resolveRenderProps(component22, page22, key22 = null) {
    const child2 = h(component22.default, page22.props, [], key22);
    const layout = component22.layout;
    return layout ? resolveLayout(layout, child2, page22.props, key22) : child2;
  }
  function resolveLayout(layout, child2, pageProps, key22) {
    if (isLayoutFunction(layout)) {
      return layout(h, child2);
    }
    if (Array.isArray(layout)) {
      return layout.slice().reverse().reduce((currentRender, layoutComponent) => h(layoutComponent, pageProps, [currentRender], key22), child2);
    }
    return h(layout, pageProps, child2 ? [child2] : [], key22);
  }
  function isLayoutFunction(layout) {
    return typeof layout === "function" && layout.length === 2 && typeof layout.prototype === "undefined";
  }
  init();
  Render($$anchor, spread_props(() => get(renderProps)));
  pop();
}
let axiosClient = axios.create();
let requestFingerprintResolver = (config2, axios2) => `${config2.method}:${config2.baseURL ?? axios2.defaults.baseURL ?? ""}${config2.url}`;
let successResolver = (response) => response.status === 204 && response.headers["precognition-success"] === "true";
const abortControllers = {};
const client = {
  get: (url, data = {}, config2 = {}) => request(mergeConfig("get", url, data, config2)),
  post: (url, data = {}, config2 = {}) => request(mergeConfig("post", url, data, config2)),
  patch: (url, data = {}, config2 = {}) => request(mergeConfig("patch", url, data, config2)),
  put: (url, data = {}, config2 = {}) => request(mergeConfig("put", url, data, config2)),
  delete: (url, data = {}, config2 = {}) => request(mergeConfig("delete", url, data, config2)),
  use(axios2) {
    axiosClient = axios2;
    return client;
  },
  axios() {
    return axiosClient;
  },
  fingerprintRequestsUsing(callback) {
    requestFingerprintResolver = callback === null ? () => null : callback;
    return client;
  },
  determineSuccessUsing(callback) {
    successResolver = callback;
    return client;
  }
};
const mergeConfig = (method, url, data, config2) => ({
  url,
  method,
  ...config2,
  ...["get", "delete"].includes(method) ? {
    params: merge$1({}, data, config2?.params)
  } : {
    data: merge$1({}, data, config2?.data)
  }
});
const request = (userConfig = {}) => {
  const config2 = [
    resolveConfig,
    abortMatchingRequests,
    refreshAbortController
  ].reduce((config3, callback) => callback(config3), userConfig);
  if ((config2.onBefore ?? (() => true))() === false) {
    return Promise.resolve(null);
  }
  (config2.onStart ?? (() => null))();
  return axiosClient.request(config2).then(async (response) => {
    if (config2.precognitive) {
      validatePrecognitionResponse(response);
    }
    const status2 = response.status;
    let payload = response;
    if (config2.precognitive && config2.onPrecognitionSuccess && successResolver(payload)) {
      payload = await Promise.resolve(config2.onPrecognitionSuccess(payload) ?? payload);
    }
    if (config2.onSuccess && isSuccess(status2)) {
      payload = await Promise.resolve(config2.onSuccess(payload) ?? payload);
    }
    const statusHandler = resolveStatusHandler(config2, status2) ?? ((response2) => response2);
    return statusHandler(payload) ?? payload;
  }, (error) => {
    if (isNotServerGeneratedError(error)) {
      return Promise.reject(error);
    }
    if (config2.precognitive) {
      validatePrecognitionResponse(error.response);
    }
    const statusHandler = resolveStatusHandler(config2, error.response.status) ?? ((_, error2) => Promise.reject(error2));
    return statusHandler(error.response, error);
  }).finally(config2.onFinish ?? (() => null));
};
const resolveConfig = (config2) => {
  const only = config2.only ?? config2.validate;
  return {
    ...config2,
    timeout: config2.timeout ?? axiosClient.defaults["timeout"] ?? 3e4,
    precognitive: config2.precognitive !== false,
    fingerprint: typeof config2.fingerprint === "undefined" ? requestFingerprintResolver(config2, axiosClient) : config2.fingerprint,
    headers: {
      ...config2.headers,
      "Content-Type": resolveContentType(config2),
      ...config2.precognitive !== false ? {
        Precognition: true
      } : {},
      ...only ? {
        "Precognition-Validate-Only": Array.from(only).join()
      } : {}
    }
  };
};
const isSuccess = (status2) => status2 >= 200 && status2 < 300;
const abortMatchingRequests = (config2) => {
  if (typeof config2.fingerprint !== "string") {
    return config2;
  }
  abortControllers[config2.fingerprint]?.abort();
  delete abortControllers[config2.fingerprint];
  return config2;
};
const refreshAbortController = (config2) => {
  if (typeof config2.fingerprint !== "string" || config2.signal || config2.cancelToken || !config2.precognitive) {
    return config2;
  }
  abortControllers[config2.fingerprint] = new AbortController();
  return {
    ...config2,
    signal: abortControllers[config2.fingerprint].signal
  };
};
const validatePrecognitionResponse = (response) => {
  if (response.headers?.precognition !== "true") {
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
  }
};
const isNotServerGeneratedError = (error) => {
  return !isAxiosError(error) || typeof error.response?.status !== "number" || isCancel(error);
};
const resolveStatusHandler = (config2, code) => ({
  401: config2.onUnauthorized,
  403: config2.onForbidden,
  404: config2.onNotFound,
  409: config2.onConflict,
  422: config2.onValidationError,
  423: config2.onLocked
})[code];
const resolveContentType = (config2) => config2.headers?.["Content-Type"] ?? config2.headers?.["Content-type"] ?? config2.headers?.["content-type"] ?? (hasFiles(config2.data) ? "multipart/form-data" : "application/json");
const hasFiles = (data) => isFile(data) || typeof data === "object" && data !== null && Object.values(data).some((value) => hasFiles(value));
const isFile = (value) => typeof File !== "undefined" && value instanceof File || value instanceof Blob || typeof FileList !== "undefined" && value instanceof FileList && value.length > 0;
async function createInertiaApp({ id = "app", resolve, setup, progress: progress3 = {}, page: page2, defaults: defaults2 = {} }) {
  config.replace(defaults2);
  const isServer3 = typeof window === "undefined";
  const useScriptElementForInitialPage = config.get("future.useScriptElementForInitialPage");
  const initialPage = page2 || getInitialPageFromDOM(id, useScriptElementForInitialPage);
  const resolveComponent = (name) => Promise.resolve(resolve(name));
  const svelteApp = await Promise.all([
    resolveComponent(initialPage.component),
    router.decryptHistory().catch(() => {
    })
  ]).then(([initialComponent]) => {
    return setup({
      el: isServer3 ? null : document.getElementById(id),
      App,
      props: { initialPage, initialComponent, resolveComponent }
    });
  });
  if (isServer3 && svelteApp) {
    const { html, head, css } = svelteApp;
    return {
      body: useScriptElementForInitialPage ? `<script data-page="${id}" type="application/json">${JSON.stringify(initialPage).replace(/\//g, "\\/")}<\/script><div data-server-rendered="true" id="${id}">${html}</div>` : `<div data-server-rendered="true" id="${id}" data-page="${escape$1(JSON.stringify(initialPage))}">${html}</div>`,
      head: [head, css ? `<style data-vite-css>${css.code}</style>` : ""]
    };
  }
  if (!isServer3 && progress3) {
    setupProgress(progress3);
  }
}
const config = config$1.extend({});
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
createInertiaApp({
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({
      "./Modules/Auth/ForgotPassword.svelte": () => __vitePreload(() => import("./ForgotPassword-CUVDXD4N.js"), true ? __vite__mapDeps([0,1,2]) : void 0),
      "./Modules/Auth/Login.svelte": () => __vitePreload(() => import("./Login-BUKitM_a.js"), true ? __vite__mapDeps([3,4,5,6,1,7,2,8]) : void 0),
      "./Modules/Auth/Register.svelte": () => __vitePreload(() => import("./Register-s1y3tBIo.js"), true ? __vite__mapDeps([9,4,5,6,1,7,2]) : void 0),
      "./Modules/Auth/ResetPassword.svelte": () => __vitePreload(() => import("./ResetPassword-DhJgpIV9.js"), true ? __vite__mapDeps([10,1,2]) : void 0),
      "./Modules/Base/Pages/FunStuff/Gauss.svelte": () => __vitePreload(() => import("./Gauss-BuyFAhQp.js"), true ? __vite__mapDeps([11,12,13,14,15,5,16,17,18,19,20,21,22,23,24]) : void 0),
      "./Modules/Base/Pages/FunStuff/Index.svelte": () => __vitePreload(() => import("./Index-HWdOcrf5.js"), true ? __vite__mapDeps([25,13,14,15,5,16,17,18,19,20,26]) : void 0),
      "./Modules/Base/Pages/Home.svelte": () => __vitePreload(() => import("./Home-aN1Bdzuj.js"), true ? __vite__mapDeps([27,28,13,14,15,5,16,17,18,19,20]) : void 0),
      "./Modules/Base/Pages/Other/Apps.svelte": () => __vitePreload(() => import("./Apps-CwS15zuk.js"), true ? __vite__mapDeps([29,30,5,13,14,15,16,17,18,19,20]) : void 0),
      "./Modules/Base/Pages/Other/Contact.svelte": () => __vitePreload(() => import("./Contact-AizbBIGE.js"), true ? __vite__mapDeps([31,13,14,15,5,16,17,18,19,20,32]) : void 0),
      "./Modules/Base/Pages/Other/Services.svelte": () => __vitePreload(() => import("./Services-nkSVLpQE.js"), true ? __vite__mapDeps([33,5,13,14,15,16,17,18,19,20]) : void 0),
      "./Modules/Base/Pages/Other/Team.svelte": () => __vitePreload(() => import("./Team-D7XI_imf.js"), true ? __vite__mapDeps([34,5,16,17,13,14,15,18,19,20]) : void 0),
      "./Modules/Base/Shared/Footer.svelte": () => __vitePreload(() => import("./Footer-DuPOFG8e.js"), true ? __vite__mapDeps([20,5,17,18]) : void 0),
      "./Modules/Base/Shared/Layout.svelte": () => __vitePreload(() => import("./Layout-Cc5UHZlW.js"), true ? __vite__mapDeps([13,14,15,5,16,17,18,19,20]) : void 0),
      "./Modules/Base/Shared/NavBar.svelte": () => __vitePreload(() => import("./NavBar-Vq8UgN2l.js"), true ? __vite__mapDeps([15,5,16,17,18,19]) : void 0),
      "./Modules/PDM/Home.svelte": () => __vitePreload(() => import("./Home-ByFzolox.js"), true ? __vite__mapDeps([35,28,36,14,5,37,16,38,39,40,17,18,4]) : void 0),
      "./Modules/PDM/HomeRequests.svelte": () => __vitePreload(() => import("./HomeRequests-d5pydkPN.js"), true ? __vite__mapDeps([41,36,14,28,5,37,16,38,39,40,17,18,4]) : void 0),
      "./Modules/PDM/Pages/ChangeRequest/Form.svelte": () => __vitePreload(() => import("./Form-2kasVRt5.js"), true ? __vite__mapDeps([42,5,36,14,28,37,16,38,39,40,17,18,43,12,44,6,1,45,24,46,22,4,2,47]) : void 0),
      "./Modules/PDM/Pages/ChangeRequest/Index.svelte": () => __vitePreload(() => import("./Index-Bs-n4fMA.js"), true ? __vite__mapDeps([48,5,1,36,14,28,37,16,38,39,40,17,18,4,49,30,47,50,24,22,46]) : void 0),
      "./Modules/PDM/Pages/ChangeRequest/Show.svelte": () => __vitePreload(() => import("./Show-BsM5fQEw.js"), true ? __vite__mapDeps([51,30,36,14,28,5,37,16,38,39,40,17,18,52,12,53,54,45,24,46,22,4]) : void 0),
      "./Modules/PDM/Pages/Document/Form.svelte": () => __vitePreload(() => import("./Form-C3zUJyvX.js"), true ? __vite__mapDeps([55,5,36,14,28,37,16,38,39,40,17,18,43,12,44,6,1,56,45,24,46,22,4,2,47]) : void 0),
      "./Modules/PDM/Pages/Document/Index.svelte": () => __vitePreload(() => import("./Index-B5VtIMAO.js"), true ? __vite__mapDeps([57,30,5,1,36,14,28,37,16,38,39,40,17,18,4,49,47,50,24,22,46]) : void 0),
      "./Modules/PDM/Pages/Document/Show.svelte": () => __vitePreload(() => import("./Show-BW8p5gtY.js"), true ? __vite__mapDeps([58,30,36,14,28,5,37,16,38,39,40,17,18,52,12,53,54,45,24,46,22,4]) : void 0),
      "./Modules/PDM/Pages/ECN/Form.svelte": () => __vitePreload(() => import("./Form-CRf5P8iy.js"), true ? __vite__mapDeps([59,5,36,14,28,37,16,38,39,40,17,18,43,12,44,6,1,56,45,24,46,22,4,2,47]) : void 0),
      "./Modules/PDM/Pages/ECN/Index.svelte": () => __vitePreload(() => import("./Index-CPbiJ6LU.js"), true ? __vite__mapDeps([60,5,1,36,14,28,37,16,38,39,40,17,18,4,49,30,47,50,24,22,46]) : void 0),
      "./Modules/PDM/Pages/ECN/Show.svelte": () => __vitePreload(() => import("./Show-BTBRFzKC.js"), true ? __vite__mapDeps([61,30,36,14,28,5,37,16,38,39,40,17,18,52,12,53,54,45,24,46,22,4]) : void 0),
      "./Modules/PDM/Pages/Engineering/Configurator.svelte": () => __vitePreload(() => import("./Configurator-BPyqJ6DJ.js").then((n) => n.C), true ? __vite__mapDeps([62,5,12,36,14,28,37,16,38,39,40,17,18,4,6,1,56,53,21,63,2]) : void 0),
      "./Modules/PDM/Pages/Engineering/Profiles.svelte": () => __vitePreload(() => import("./Profiles-DZvF2luD.js"), true ? __vite__mapDeps([64,36,14,28,5,37,16,38,39,40,17,18,4,63,23,24]) : void 0),
      "./Modules/PDM/Pages/Material/Form.svelte": () => __vitePreload(() => import("./Form-CXTGlg42.js"), true ? __vite__mapDeps([65,5,36,14,28,37,16,38,39,40,17,18,43,12,44,6,1,56,45,24,46,22,66,67,4,2,47]) : void 0),
      "./Modules/PDM/Pages/Material/Index.svelte": () => __vitePreload(() => import("./Index-DrqG_Beq.js"), true ? __vite__mapDeps([68,30,5,1,36,14,28,37,16,38,39,40,17,18,4,49,47,50,24,22,46]) : void 0),
      "./Modules/PDM/Pages/Material/Show.svelte": () => __vitePreload(() => import("./Show-CVrdHeFq.js"), true ? __vite__mapDeps([69,30,36,14,28,5,37,16,38,39,40,17,18,52,12,53,54,45,24,46,22,4]) : void 0),
      "./Modules/PDM/Pages/ProductNote/Form.svelte": () => __vitePreload(() => import("./Form-Cy9rWDxZ.js"), true ? __vite__mapDeps([70,5,36,14,28,37,16,38,39,40,17,18,43,12,44,6,1,56,45,24,46,22,66,67,4,2,47]) : void 0),
      "./Modules/PDM/Pages/ProductNote/Index.svelte": () => __vitePreload(() => import("./Index-C1-ALlkH.js"), true ? __vite__mapDeps([71,30,5,1,36,14,28,37,16,38,39,40,17,18,4,49,47,50,24,22,46]) : void 0),
      "./Modules/PDM/Pages/ProductNote/Show.svelte": () => __vitePreload(() => import("./Show-CSrIkuKp.js"), true ? __vite__mapDeps([72,30,36,14,28,5,37,16,38,39,40,17,18,52,12,53,54,45,24,46,22,4]) : void 0),
      "./Modules/PDM/Pages/Standard/Form.svelte": () => __vitePreload(() => import("./Form-DVPXlFfg.js"), true ? __vite__mapDeps([73,5,36,14,28,37,16,38,39,40,17,18,43,12,44,6,1,56,45,24,46,22,66,67,4,2,47]) : void 0),
      "./Modules/PDM/Pages/Standard/Index.svelte": () => __vitePreload(() => import("./Index-Byabewps.js"), true ? __vite__mapDeps([74,30,5,1,36,14,28,37,16,38,39,40,17,18,4,49,47,50,24,22,46]) : void 0),
      "./Modules/PDM/Pages/Standard/Show.svelte": () => __vitePreload(() => import("./Show-BS0VNFnj.js"), true ? __vite__mapDeps([75,30,36,14,28,5,37,16,38,39,40,17,18,52,12,53,54,45,24,46,22,4]) : void 0),
      "./Modules/PDM/Shared/Footer.svelte": () => __vitePreload(() => import("./Footer-Dlho2n6k.js"), true ? __vite__mapDeps([40,5,17,38,18]) : void 0),
      "./Modules/PDM/Shared/Layout.svelte": () => __vitePreload(() => import("./Layout-BvwSG3qv.js"), true ? __vite__mapDeps([36,14,28,5,37,16,38,39,40,17,18]) : void 0),
      "./Modules/PDM/Shared/NavBar.svelte": () => __vitePreload(() => import("./NavBar-G195NlxZ.js"), true ? __vite__mapDeps([37,5,16,38,39]) : void 0),
      "./Modules/Requirements/Home.svelte": () => __vitePreload(() => import("./Home-C6dadDzw.js"), true ? __vite__mapDeps([76,28,77,14,78,5,16,17,39,19,79,80,4]) : void 0),
      "./Modules/Requirements/Shared/Footer.svelte": () => __vitePreload(() => import("./Footer-CbRWaiOn.js"), true ? __vite__mapDeps([80,5,17]) : void 0),
      "./Modules/Requirements/Shared/Layout.svelte": () => __vitePreload(() => import("./Layout-CY86glXf.js"), true ? __vite__mapDeps([77,14,78,5,16,17,39,19,79,80]) : void 0),
      "./Modules/Requirements/Shared/NavBar.svelte": () => __vitePreload(() => import("./NavBar-O7LwdGg7.js"), true ? __vite__mapDeps([78,5,16,17,39,19,79]) : void 0)
    });
    let targetPath = "";
    if (name.startsWith("Modules/") || name.startsWith("Pages/")) {
      targetPath = `./${name}.svelte`;
    } else {
      targetPath = `./Pages/${name}.svelte`;
    }
    const importFunction = pages[targetPath];
    if (!importFunction) {
      console.error("Available keys in Vite manifest:", Object.keys(pages));
      throw new Error(`Inertia Page component not found for path: "${targetPath}".`);
    }
    return typeof importFunction === "function" ? importFunction() : importFunction;
  },
  setup({ el, App: App2, props }) {
    mount(App2, { target: el, props });
  }
});
export {
  $document as $,
  proxy as A,
  deferred_template_effect as B,
  each as C,
  index as D,
  mutable_source as E,
  user_derived as F,
  router as G,
  user_effect as H,
  text as I,
  deep_read_state as J,
  to_array as K,
  getDefaultExportFromCjs as L,
  listen_to_event_and_reset_event as M,
  current_batch as N,
  tick as O,
  render_effect as P,
  isSymbol as Q,
  isObject$1 as R,
  root as S,
  set$2 as T,
  get$3 as U,
  isEqual as V,
  isFile as W,
  client as X,
  isCancel as Y,
  isAxiosError as Z,
  __vitePreload as _,
  if_block as a,
  merge$1 as a0,
  mergeConfig$1 as a1,
  UseFormUtils as a2,
  cloneDeep as a3,
  writable as a4,
  config as a5,
  get$1 as a6,
  has as a7,
  page as a8,
  managed as a9,
  BranchManager as aA,
  create_element as aB,
  NAMESPACE_SVG as aC,
  assign_nodes as aD,
  create_text as aE,
  from_svg as aF,
  HEAD_EFFECT as aG,
  EFFECT_PRESERVED as aH,
  get_first_child as aI,
  remove_effect_dom as aJ,
  NAMESPACE_MATHML as aK,
  legacy_mode_flag as aL,
  commonjsGlobal as aM,
  safe_not_equal as aN,
  legacy_rest_props as aO,
  legacy_pre_effect as aP,
  legacy_pre_effect_reset as aQ,
  isUrlMethodPair as aR,
  mergeDataIntoQueryString as aS,
  shouldIntercept as aT,
  shouldNavigate as aU,
  destroy_effect as aa,
  branch as ab,
  effect as ac,
  teardown as ad,
  is_array as ae,
  select_multiple_invalid_value as af,
  is as ag,
  flatten as ah,
  ATTACHMENT_KEY as ai,
  IS_XHTML as aj,
  is_capture_event as ak,
  create_event as al,
  autofocus as am,
  normalize_attribute as an,
  UNINITIALIZED as ao,
  NAMESPACE_HTML as ap,
  get_prototype_of as aq,
  LOADING_ATTR_SYMBOL as ar,
  can_delegate_event as as,
  get_descriptors as at,
  component_context as au,
  active_effect as av,
  DESTROYING as aw,
  STATE_SYMBOL as ax,
  block as ay,
  EFFECT_TRANSPARENT as az,
  append2 as b,
  pop as c,
  push as d,
  event as e,
  setup_stores as f,
  sibling as g,
  store_mutate as h,
  init as i,
  from_html as j,
  child as k,
  set_text as l,
  first_child as m,
  delegated as n,
  set$1 as o,
  prop as p,
  get as q,
  state as r,
  store_get as s,
  template_effect as t,
  untrack as u,
  delegate as v,
  spread_props as w,
  comment as x,
  rest_props as y,
  noop as z
};
//# sourceMappingURL=app-DmZvep12.js.map
