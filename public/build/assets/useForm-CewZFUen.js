import { Q as isSymbol, R as isObject, S as root, T as set, U as get, V as isEqual, W as isFile, X as client, Y as isCancel, Z as isAxiosError, a0 as merge, a1 as mergeConfig, a2 as UseFormUtils, G as router, a3 as cloneDeep, a4 as writable, a5 as config, a6 as get$1, a7 as has } from "./app-DmZvep12.js";
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = true;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? true : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
const expandWildcardPaths = (pattern, data) => {
  if (!pattern.includes("*")) {
    return [pattern];
  }
  const parts = pattern.split(".");
  let paths = [""];
  for (const part of parts) {
    if (part === "*") {
      const expanded = [];
      for (const path of paths) {
        const value = path ? get(data, path) : data;
        if (Array.isArray(value)) {
          for (let index = 0; index < value.length; index++) {
            expanded.push(path ? `${path}.${index}` : String(index));
          }
        } else if (value !== null && typeof value === "object") {
          for (const key of Object.keys(value)) {
            expanded.push(path ? `${path}.${key}` : key);
          }
        }
      }
      paths = expanded;
    } else {
      paths = paths.map((path) => path ? `${path}.${part}` : part);
    }
  }
  return paths;
};
const keyMatchesPattern = (key, pattern) => {
  if (!pattern.includes("*")) {
    return key === pattern;
  }
  const regex = new RegExp("^" + pattern.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$");
  return regex.test(key);
};
const omitByPattern = (obj, patterns) => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => {
    return !patterns.some((pattern) => keyMatchesPattern(key, pattern));
  }));
};
const createValidator = (callback, initialData = {}) => {
  const listeners = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let validateFiles = false;
  let validating = false;
  const setValidating = (value) => {
    if (value !== validating) {
      validating = value;
      return listeners.validatingChanged;
    }
    return [];
  };
  let validated = [];
  const setValidated = (value) => {
    const uniqueNames = [...new Set(value)];
    if (validated.length !== uniqueNames.length || !uniqueNames.every((name) => validated.includes(name))) {
      validated = uniqueNames;
      return listeners.validatedChanged;
    }
    return [];
  };
  const valid = () => validated.filter((name) => typeof errors[name] === "undefined");
  let touched = [];
  const setTouched = (value) => {
    const uniqueNames = [...new Set(value)];
    if (touched.length !== uniqueNames.length || !uniqueNames.every((name) => touched.includes(name))) {
      touched = uniqueNames;
      return listeners.touchedChanged;
    }
    return [];
  };
  let errors = {};
  const setErrors = (value) => {
    const prepared = toValidationErrors(value);
    if (!isEqual(errors, prepared)) {
      errors = prepared;
      return listeners.errorsChanged;
    }
    return [];
  };
  const forgetError = (name) => {
    const newErrors = { ...errors };
    delete newErrors[resolveName(name)];
    return setErrors(newErrors);
  };
  const hasErrors = () => Object.keys(errors).length > 0;
  let debounceTimeoutDuration = 1500;
  const setDebounceTimeout = (value) => {
    debounceTimeoutDuration = value;
    validator.cancel();
    validator = createValidator2();
  };
  let oldData = initialData;
  let validatingData = null;
  let oldTouched = [];
  let validatingTouched = null;
  const createValidator2 = () => debounce((instanceConfig) => {
    callback({
      get: (url, data = {}, globalConfig = {}) => client.get(url, parseData(data), resolveConfig(globalConfig, instanceConfig, data)),
      post: (url, data = {}, globalConfig = {}) => client.post(url, parseData(data), resolveConfig(globalConfig, instanceConfig, data)),
      patch: (url, data = {}, globalConfig = {}) => client.patch(url, parseData(data), resolveConfig(globalConfig, instanceConfig, data)),
      put: (url, data = {}, globalConfig = {}) => client.put(url, parseData(data), resolveConfig(globalConfig, instanceConfig, data)),
      delete: (url, data = {}, globalConfig = {}) => client.delete(url, parseData(data), resolveConfig(globalConfig, instanceConfig, data))
    }).catch((error) => {
      if (isCancel(error)) {
        return null;
      }
      if (isAxiosError(error) && error.response?.status === 422) {
        return null;
      }
      return Promise.reject(error);
    });
  }, debounceTimeoutDuration, { leading: true, trailing: true });
  let validator = createValidator2();
  const resolveConfig = (globalConfig, instanceConfig, data = {}) => {
    const config2 = {
      ...globalConfig,
      ...instanceConfig
    };
    const only = Array.from(config2.only ?? config2.validate ?? touched);
    return {
      ...instanceConfig,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...mergeConfig(globalConfig, instanceConfig),
      only,
      timeout: config2.timeout ?? 5e3,
      onValidationError: (response, axiosError) => {
        [
          ...setValidated([...validated, ...only]),
          ...setErrors(merge(omitByPattern({ ...errors }, only), response.data.errors))
        ].forEach((listener) => listener());
        return config2.onValidationError ? config2.onValidationError(response, axiosError) : Promise.reject(axiosError);
      },
      onSuccess: (response) => {
        setValidated([...validated, ...only]).forEach((listener) => listener());
        return config2.onSuccess ? config2.onSuccess(response) : response;
      },
      onPrecognitionSuccess: (response) => {
        [
          ...setValidated([...validated, ...only]),
          ...setErrors(omitByPattern({ ...errors }, only))
        ].forEach((listener) => listener());
        return config2.onPrecognitionSuccess ? config2.onPrecognitionSuccess(response) : response;
      },
      onBefore: () => {
        const hasWildcards = touched.some((name) => name.includes("*"));
        const expandedTouched = hasWildcards ? [...new Set(touched.flatMap((name) => expandWildcardPaths(name, data)))] : touched;
        if (config2.onBeforeValidation && config2.onBeforeValidation({ data, touched: expandedTouched }, { data: oldData, touched: oldTouched }) === false) {
          return false;
        }
        const beforeResult = (config2.onBefore || (() => true))();
        if (beforeResult === false) {
          return false;
        }
        if (hasWildcards) {
          setTouched(expandedTouched).forEach((listener) => listener());
        }
        validatingTouched = touched;
        validatingData = data;
        return true;
      },
      onStart: () => {
        setValidating(true).forEach((listener) => listener());
        (config2.onStart ?? (() => null))();
      },
      onFinish: () => {
        setValidating(false).forEach((listener) => listener());
        oldTouched = validatingTouched;
        oldData = validatingData;
        validatingTouched = validatingData = null;
        (config2.onFinish ?? (() => null))();
      }
    };
  };
  const validate = (name, value, config2) => {
    if (typeof name === "undefined") {
      const only = Array.from(config2?.only ?? config2?.validate ?? []);
      setTouched([...touched, ...only]).forEach((listener) => listener());
      validator(config2 ?? {});
      return;
    }
    if (isFile(value) && !validateFiles) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    name = resolveName(name);
    if (name.includes("*") || get(oldData, name) !== value) {
      setTouched([name, ...touched]).forEach((listener) => listener());
      validator(config2 ?? {});
    }
  };
  const parseData = (data) => validateFiles === false ? forgetFiles(data) : data;
  const form = {
    touched: () => touched,
    validate(name, value, config2) {
      if (typeof name === "object" && !("target" in name)) {
        config2 = name;
        name = value = void 0;
      }
      validate(name, value, config2);
      return form;
    },
    touch(input) {
      const inputs = Array.isArray(input) ? input : [resolveName(input)];
      setTouched([...touched, ...inputs]).forEach((listener) => listener());
      return form;
    },
    validating: () => validating,
    valid,
    errors: () => errors,
    hasErrors,
    setErrors(value) {
      setErrors(value).forEach((listener) => listener());
      return form;
    },
    forgetError(name) {
      forgetError(name).forEach((listener) => listener());
      return form;
    },
    defaults(data) {
      initialData = data;
      oldData = data;
      return form;
    },
    reset(...names) {
      if (names.length === 0) {
        setTouched([]).forEach((listener) => listener());
      } else {
        const newTouched = [...touched];
        names.forEach((name) => {
          if (newTouched.includes(name)) {
            newTouched.splice(newTouched.indexOf(name), 1);
          }
          set(oldData, name, get(initialData, name));
        });
        setTouched(newTouched).forEach((listener) => listener());
      }
      return form;
    },
    setTimeout(value) {
      setDebounceTimeout(value);
      return form;
    },
    on(event, callback2) {
      listeners[event].push(callback2);
      return form;
    },
    validateFiles() {
      validateFiles = true;
      return form;
    },
    withoutFileValidation() {
      validateFiles = false;
      return form;
    }
  };
  return form;
};
const toSimpleValidationErrors = (errors) => {
  return Object.keys(errors).reduce((carry, key) => ({
    ...carry,
    [key]: Array.isArray(errors[key]) ? errors[key][0] : errors[key]
  }), {});
};
const toValidationErrors = (errors) => {
  return Object.keys(errors).reduce((carry, key) => ({
    ...carry,
    [key]: typeof errors[key] === "string" ? [errors[key]] : errors[key]
  }), {});
};
const resolveName = (name) => {
  return typeof name !== "string" ? name.target.name : name;
};
const forgetFiles = (data) => {
  const newData = { ...data };
  Object.keys(newData).forEach((name) => {
    const value = newData[name];
    if (value === null) {
      return;
    }
    if (isFile(value)) {
      delete newData[name];
      return;
    }
    if (Array.isArray(value)) {
      newData[name] = Object.values(forgetFiles({ ...value }));
      return;
    }
    if (typeof value === "object") {
      newData[name] = forgetFiles(newData[name]);
      return;
    }
  });
  return newData;
};
let reservedFormKeys = null;
let bootstrapping = false;
function validateFormDataKeys(data) {
  if (bootstrapping) {
    return;
  }
  if (reservedFormKeys === null) {
    bootstrapping = true;
    const store = useForm({});
    reservedFormKeys = new Set(Object.keys(get$1(store)));
    bootstrapping = false;
  }
  const conflicts = Object.keys(data).filter((key) => reservedFormKeys.has(key));
  if (conflicts.length > 0) {
    console.error(`[Inertia] useForm() data contains field(s) that conflict with form properties: ${conflicts.map((k) => `"${k}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`);
  }
}
function useForm(...args) {
  const parsedArgs = UseFormUtils.parseUseFormArguments(...args);
  const { rememberKey, data: initialData } = parsedArgs;
  let precognitionEndpoint = parsedArgs.precognitionEndpoint;
  const data = typeof initialData === "function" ? initialData() : initialData;
  const restored = rememberKey ? router.restore(rememberKey) : null;
  let defaults = cloneDeep(data);
  validateFormDataKeys(defaults);
  let cancelToken = null;
  let recentlySuccessfulTimeoutId = null;
  let transform = (data2) => data2;
  let rememberExcludeKeys = [];
  let defaultsCalledInOnSuccess = false;
  let validatorRef = null;
  let setFormState;
  const withPrecognition = (...args2) => {
    precognitionEndpoint = UseFormUtils.createWayfinderCallback(...args2);
    const formWithPrecognition = () => get$1(store);
    let withAllErrors = null;
    if (!validatorRef) {
      const validator = createValidator((client2) => {
        const { method, url } = precognitionEndpoint();
        const form = formWithPrecognition();
        const transformedData = cloneDeep(transform(form.data()));
        return client2[method](url, transformedData);
      }, cloneDeep(defaults));
      validatorRef = validator;
      validator.on("validatingChanged", () => {
        setFormState("validating", validator.validating());
      }).on("validatedChanged", () => {
        setFormState("__valid", validator.valid());
      }).on("touchedChanged", () => {
        setFormState("__touched", validator.touched());
      }).on("errorsChanged", () => {
        const validationErrors = withAllErrors ?? config.get("form.withAllErrors") ? validator.errors() : toSimpleValidationErrors(validator.errors());
        setFormState("errors", {});
        formWithPrecognition().setError(validationErrors);
        setFormState("__valid", validator.valid());
      });
    }
    const tap = (value, callback) => {
      callback(value);
      return value;
    };
    if (validatorRef) {
      Object.assign(store, {});
    }
    store.update((form) => {
      return Object.assign(store, {
        ...form,
        __touched: [],
        __valid: [],
        validating: false,
        validator: () => validatorRef,
        validate: (field, config2) => {
          const form2 = formWithPrecognition();
          if (typeof field === "object" && !("target" in field)) {
            config2 = field;
            field = void 0;
          }
          if (field === void 0) {
            validatorRef.validate(config2);
          } else {
            field = resolveName(field);
            const transformedData = transform(form2.data());
            validatorRef.validate(field, get(transformedData, field), config2);
          }
          return form2;
        },
        touch: (field, ...fields) => {
          const form2 = formWithPrecognition();
          if (Array.isArray(field)) {
            validatorRef?.touch(field);
          } else if (typeof field === "string") {
            validatorRef?.touch([field, ...fields]);
          } else {
            validatorRef?.touch(field);
          }
          return form2;
        },
        validateFiles: () => tap(formWithPrecognition(), () => validatorRef?.validateFiles()),
        setValidationTimeout: (duration) => tap(formWithPrecognition(), () => validatorRef.setTimeout(duration)),
        withAllErrors: () => tap(formWithPrecognition(), () => withAllErrors = true),
        withoutFileValidation: () => tap(formWithPrecognition(), () => validatorRef?.withoutFileValidation()),
        valid: (field) => formWithPrecognition().__valid.includes(field),
        invalid: (field) => field in formWithPrecognition().errors,
        touched: (field) => {
          const touched = formWithPrecognition().__touched;
          return typeof field === "string" ? touched.includes(field) : touched.length > 0;
        },
        setErrors: (errors) => tap(formWithPrecognition(), () => {
          const form2 = formWithPrecognition();
          form2.setError(errors);
        }),
        forgetError: (field) => tap(formWithPrecognition(), () => {
          const form2 = formWithPrecognition();
          form2.clearErrors(resolveName(field));
        })
      });
    });
    return store;
  };
  const store = writable({
    ...restored ? restored.data : data,
    isDirty: false,
    errors: restored ? restored.errors : {},
    hasErrors: false,
    progress: null,
    wasSuccessful: false,
    recentlySuccessful: false,
    processing: false,
    setStore(keyOrData, maybeValue = void 0) {
      store.update((store2) => {
        return typeof keyOrData === "string" ? set(store2, keyOrData, maybeValue) : Object.assign(store2, keyOrData);
      });
    },
    data() {
      return Object.keys(data).reduce((carry, key) => {
        return set(carry, key, get(this, key));
      }, {});
    },
    transform(callback) {
      transform = callback;
      return this;
    },
    defaults(fieldOrFields, maybeValue) {
      defaultsCalledInOnSuccess = true;
      if (typeof fieldOrFields === "undefined") {
        defaults = cloneDeep(this.data());
      } else {
        defaults = typeof fieldOrFields === "string" ? set(cloneDeep(defaults), fieldOrFields, maybeValue) : Object.assign(cloneDeep(defaults), fieldOrFields);
      }
      validatorRef?.defaults(defaults);
      return this;
    },
    reset(...fields) {
      const clonedData = cloneDeep(defaults);
      if (fields.length === 0) {
        this.setStore(clonedData);
      } else {
        this.setStore(fields.filter((key) => has(clonedData, key)).reduce((carry, key) => {
          return set(carry, key, get(clonedData, key));
        }, {}));
      }
      validatorRef?.reset(...fields);
      return this;
    },
    setError(fieldOrFields, maybeValue) {
      const errors = typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields;
      setFormState("errors", {
        ...this.errors,
        ...errors
      });
      validatorRef?.setErrors(errors);
      return this;
    },
    clearErrors(...fields) {
      setFormState("errors", Object.keys(this.errors).reduce((carry, field) => ({
        ...carry,
        ...fields.length > 0 && !fields.includes(field) ? { [field]: this.errors[field] } : {}
      }), {}));
      if (validatorRef) {
        if (fields.length === 0) {
          validatorRef.setErrors({});
        } else {
          fields.forEach(validatorRef.forgetError);
        }
      }
      return this;
    },
    resetAndClearErrors(...fields) {
      this.reset(...fields);
      this.clearErrors(...fields);
      return this;
    },
    submit(...args2) {
      const { method, url, options } = UseFormUtils.parseSubmitArguments(args2, precognitionEndpoint);
      defaultsCalledInOnSuccess = false;
      const data2 = transform(this.data());
      const _options = {
        ...options,
        onCancelToken: (token) => {
          cancelToken = token;
          if (options.onCancelToken) {
            return options.onCancelToken(token);
          }
        },
        onBefore: (visit) => {
          setFormState("wasSuccessful", false);
          setFormState("recentlySuccessful", false);
          if (recentlySuccessfulTimeoutId) {
            clearTimeout(recentlySuccessfulTimeoutId);
          }
          if (options.onBefore) {
            return options.onBefore(visit);
          }
        },
        onStart: (visit) => {
          setFormState("processing", true);
          if (options.onStart) {
            return options.onStart(visit);
          }
        },
        onProgress: (event) => {
          setFormState("progress", event || null);
          if (options.onProgress) {
            return options.onProgress(event);
          }
        },
        onSuccess: async (page) => {
          setFormState("processing", false);
          setFormState("progress", null);
          this.clearErrors();
          setFormState("wasSuccessful", true);
          setFormState("recentlySuccessful", true);
          recentlySuccessfulTimeoutId = setTimeout(() => setFormState("recentlySuccessful", false), config.get("form.recentlySuccessfulDuration"));
          const onSuccess = options.onSuccess ? await options.onSuccess(page) : null;
          if (!defaultsCalledInOnSuccess) {
            this.defaults(cloneDeep(get$1(store).data()));
          }
          return onSuccess;
        },
        onError: (errors) => {
          setFormState("processing", false);
          setFormState("progress", null);
          setFormState("errors", errors);
          validatorRef?.setErrors(errors);
          if (options.onError) {
            return options.onError(errors);
          }
        },
        onCancel: () => {
          setFormState("processing", false);
          setFormState("progress", null);
          if (options.onCancel) {
            return options.onCancel();
          }
        },
        onFinish: (visit) => {
          setFormState("processing", false);
          setFormState("progress", null);
          cancelToken = null;
          if (options.onFinish) {
            return options.onFinish(visit);
          }
        }
      };
      if (method === "delete") {
        router.delete(url, { ..._options, data: data2 });
      } else {
        router[method](url, data2, _options);
      }
    },
    get(url, options) {
      this.submit("get", url, options);
    },
    post(url, options) {
      this.submit("post", url, options);
    },
    put(url, options) {
      this.submit("put", url, options);
    },
    patch(url, options) {
      this.submit("patch", url, options);
    },
    delete(url, options) {
      this.submit("delete", url, options);
    },
    cancel() {
      cancelToken?.cancel();
    },
    __remember() {
      const data2 = this.data();
      if (rememberExcludeKeys.length > 0) {
        const filtered = { ...data2 };
        rememberExcludeKeys.forEach((k) => delete filtered[k]);
        return { data: filtered, errors: this.errors };
      }
      return { data: data2, errors: this.errors };
    },
    withPrecognition
  });
  const dontRememberMethod = (...keys) => {
    rememberExcludeKeys = keys;
    return store;
  };
  Object.assign(store, {
    withPrecognition,
    dontRemember: dontRememberMethod
  });
  setFormState = (key, value) => {
    store.update((form) => ({ ...form, [key]: value }));
  };
  store.subscribe((form) => {
    if (form.isDirty === isEqual(form.data(), defaults)) {
      setFormState("isDirty", !form.isDirty);
    }
    const hasErrors = Object.keys(form.errors).length > 0;
    if (form.hasErrors !== hasErrors) {
      setFormState("hasErrors", !form.hasErrors);
    }
    if (rememberKey) {
      const storedData = router.restore(rememberKey);
      const newData = form.__remember();
      if (!isEqual(storedData, newData)) {
        router.remember(newData, rememberKey);
      }
    }
  });
  return precognitionEndpoint ? store.withPrecognition(precognitionEndpoint) : store;
}
export {
  useForm as u
};
//# sourceMappingURL=useForm-CewZFUen.js.map
