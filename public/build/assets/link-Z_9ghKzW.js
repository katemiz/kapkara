import { ab as effect, u as untrack, N as render_effect, aP as deep_read_state, aQ as safe_not_equal, ac as is_array, aR as legacy_rest_props, p as prop, aS as legacy_pre_effect, aT as legacy_pre_effect_reset, i as init, z as comment, m as first_child, b as append, c as pop, d as push, q as get, e as event, J as mutable_source, o as set, aU as isUrlMethodPair, a5 as config, I as router, aV as mergeDataIntoQueryString, aW as shouldIntercept, aX as shouldNavigate } from "./app-B8UKlAbY.js";
import { s as slot } from "./slot-DtgNxSws.js";
import { e as element } from "./svelte-element-Ct4olbtg.js";
import { a as attribute_effect } from "./attributes-BE60HdxF.js";
function action(dom, action2, get_value) {
  effect(() => {
    var payload = untrack(() => action2(dom, get_value?.()) || {});
    if (get_value && payload?.update) {
      var inited = false;
      var prev = (
        /** @type {any} */
        {}
      );
      render_effect(() => {
        var value = get_value();
        deep_read_state(value);
        if (inited && safe_not_equal(prev, value)) {
          prev = value;
          payload.update(value);
        }
      });
      inited = true;
    }
    if (payload?.destroy) {
      return () => (
        /** @type {Function} */
        payload.destroy()
      );
    }
  });
}
function bubble_event($$props, event2) {
  var events = (
    /** @type {Record<string, Function[] | Function>} */
    $$props.$$events?.[event2.type]
  );
  var callbacks = is_array(events) ? events.slice() : events == null ? [] : [events];
  for (var fn of callbacks) {
    fn.call(this, event2);
  }
}
function Link($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "href",
    "as",
    "data",
    "method",
    "replace",
    "preserveScroll",
    "preserveState",
    "preserveUrl",
    "only",
    "except",
    "headers",
    "queryStringArrayFormat",
    "async",
    "prefetch",
    "cacheFor",
    "cacheTags",
    "viewTransition"
  ]);
  push($$props, false);
  const _method = mutable_source();
  const _href = mutable_source();
  const asProp = mutable_source();
  const elProps = mutable_source();
  let href = prop($$props, "href", 8, "");
  let as = prop($$props, "as", 8, "a");
  let data = prop($$props, "data", 24, () => ({}));
  let method = prop($$props, "method", 8, "get");
  let replace = prop($$props, "replace", 8, false);
  let preserveScroll = prop($$props, "preserveScroll", 8, false);
  let preserveState = prop($$props, "preserveState", 8, null);
  let preserveUrl = prop($$props, "preserveUrl", 8, false);
  let only = prop($$props, "only", 24, () => []);
  let except = prop($$props, "except", 24, () => []);
  let headers = prop($$props, "headers", 24, () => ({}));
  let queryStringArrayFormat = prop($$props, "queryStringArrayFormat", 8, "brackets");
  let async = prop($$props, "async", 8, false);
  let prefetch = prop($$props, "prefetch", 8, false);
  let cacheFor = prop($$props, "cacheFor", 8, 0);
  let cacheTags = prop($$props, "cacheTags", 24, () => []);
  let viewTransition = prop($$props, "viewTransition", 8, false);
  legacy_pre_effect(
    () => (deep_read_state(href()), deep_read_state(method())),
    () => {
      set(_method, isUrlMethodPair(href()) ? href().method : method());
    }
  );
  legacy_pre_effect(() => deep_read_state(href()), () => {
    set(_href, isUrlMethodPair(href()) ? href().url : href());
  });
  legacy_pre_effect(() => (get(_method), deep_read_state(as())), () => {
    set(asProp, get(_method) !== "get" ? "button" : as().toLowerCase());
  });
  legacy_pre_effect(() => (get(_href), get(asProp)), () => {
    set(elProps, { a: { href: get(_href) }, button: { type: "button" } }[get(asProp)] || {});
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  element(node, () => get(asProp), false, ($$element, $$anchor2) => {
    action($$element, ($$node, $$action_arg) => link?.($$node, $$action_arg), () => ({
      ...get(asProp) !== "a" ? { href: get(_href) } : {},
      data: data(),
      method: get(_method),
      replace: replace(),
      preserveScroll: preserveScroll(),
      preserveState: preserveState() ?? get(_method) !== "get",
      preserveUrl: preserveUrl(),
      only: only(),
      except: except(),
      headers: headers(),
      queryStringArrayFormat: queryStringArrayFormat(),
      async: async(),
      prefetch: prefetch(),
      cacheFor: cacheFor(),
      cacheTags: cacheTags(),
      viewTransition: viewTransition()
    }));
    attribute_effect($$element, () => ({ ...$$restProps, ...get(elProps) }));
    event("focus", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("blur", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("click", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("dblclick", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("mousedown", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("mousemove", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("mouseout", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("mouseover", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("mouseup", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("cancel-token", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("before", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("start", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("progress", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("finish", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("cancel", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("success", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("error", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("prefetching", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    event("prefetched", $$element, function($$arg) {
      bubble_event.call(this, $$props, $$arg);
    });
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    slot(node_1, $$props, "default", {});
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
function link(node, initialParams = {}) {
  let inFlightCount = 0;
  let hoverTimeout;
  let prefetchModes = [];
  let cacheForValue;
  let cacheTags = [];
  let method;
  let href;
  let data;
  let baseParams;
  let visitParams;
  const regularEvents = {
    click: (event2) => {
      if (shouldIntercept(event2)) {
        event2.preventDefault();
        router.visit(href, visitParams);
      }
    }
  };
  const prefetchHoverEvents = {
    mouseenter: () => hoverTimeout = setTimeout(() => prefetch(), config.get("prefetch.hoverDelay")),
    mouseleave: () => clearTimeout(hoverTimeout),
    click: regularEvents.click
  };
  const prefetchClickEvents = {
    mousedown: (event2) => {
      if (shouldIntercept(event2)) {
        event2.preventDefault();
        prefetch();
      }
    },
    keydown: (event2) => {
      if (shouldNavigate(event2)) {
        event2.preventDefault();
        prefetch();
      }
    },
    mouseup: (event2) => {
      if (shouldIntercept(event2)) {
        event2.preventDefault();
        router.visit(href, visitParams);
      }
    },
    keyup: (event2) => {
      if (shouldNavigate(event2)) {
        event2.preventDefault();
        router.visit(href, visitParams);
      }
    },
    click: (event2) => {
      if (shouldIntercept(event2)) {
        event2.preventDefault();
      }
    }
  };
  function update({ cacheFor = 0, prefetch: prefetch2 = false, cacheTags: cacheTagValues = [], viewTransition = false, ...params }) {
    prefetchModes = (() => {
      if (prefetch2 === true) {
        return ["hover"];
      }
      if (prefetch2 === false) {
        return [];
      }
      return Array.isArray(prefetch2) ? prefetch2 : [prefetch2];
    })();
    cacheForValue = (() => {
      if (cacheFor !== 0) {
        return cacheFor;
      }
      if (prefetchModes.length === 1 && prefetchModes[0] === "click") {
        return 0;
      }
      return config.get("prefetch.cacheFor");
    })();
    cacheTags = Array.isArray(cacheTagValues) ? cacheTagValues : [cacheTagValues];
    method = isUrlMethodPair(params.href) ? params.href.method : params.method?.toLowerCase() || "get";
    [href, data] = hrefAndData(method, params);
    if (node.tagName === "A") {
      node.href = href;
    }
    baseParams = {
      data,
      method,
      replace: params.replace || false,
      preserveScroll: params.preserveScroll || false,
      preserveState: params.preserveState ?? method !== "get",
      preserveUrl: params.preserveUrl || false,
      only: params.only || [],
      except: params.except || [],
      headers: params.headers || {},
      async: params.async || false
    };
    visitParams = {
      ...baseParams,
      viewTransition,
      onStart: (visit) => {
        inFlightCount++;
        updateNodeAttributes();
        return dispatchEvent("start", { detail: { visit } });
      },
      onProgress: (progress) => dispatchEvent("progress", { detail: { progress } }),
      onFinish: (visit) => {
        inFlightCount--;
        updateNodeAttributes();
        return dispatchEvent("finish", { detail: { visit } });
      },
      onBefore: (visit) => dispatchEvent("before", { cancelable: true, detail: { visit } }),
      onCancel: () => dispatchEvent("cancel"),
      onSuccess: (page) => dispatchEvent("success", { detail: { page } }),
      onError: (errors) => dispatchEvent("error", { detail: { errors } }),
      onCancelToken: (token) => dispatchEvent("cancel-token", { detail: { token } }),
      onPrefetching: (visit) => dispatchEvent("prefetching", { detail: { visit } }),
      onPrefetched: (response, visit) => dispatchEvent("prefetched", { detail: { response, visit } })
    };
    updateEventListeners();
  }
  function dispatchEvent(type, detail = {}) {
    return node.dispatchEvent(new CustomEvent(type, detail));
  }
  function hrefAndData(method2, params) {
    return mergeDataIntoQueryString(method2, isUrlMethodPair(params.href) ? params.href.url : node.href || params.href || "", params.data || {}, params.queryStringArrayFormat || "brackets");
  }
  function prefetch() {
    router.prefetch(href, {
      ...baseParams,
      onPrefetching: (visit) => dispatchEvent("prefetching", { detail: { visit } }),
      onPrefetched: (response, visit) => dispatchEvent("prefetched", { detail: { response, visit } })
    }, { cacheFor: cacheForValue, cacheTags });
  }
  function updateNodeAttributes() {
    if (inFlightCount > 0) {
      node.setAttribute("data-loading", "");
      return;
    }
    node.removeAttribute("data-loading");
  }
  function updateEventListeners() {
    removeEventListeners();
    if (prefetchModes.includes("hover")) {
      addEventListeners(prefetchHoverEvents);
      return;
    }
    if (prefetchModes.includes("click")) {
      addEventListeners(prefetchClickEvents);
      return;
    }
    addEventListeners(regularEvents);
  }
  function addEventListeners(eventHandlers) {
    Object.entries(eventHandlers).forEach(([event2, handler]) => {
      node.addEventListener(event2, handler);
    });
  }
  function removeEventListeners() {
    [prefetchHoverEvents, prefetchClickEvents, regularEvents].forEach((eventHandlers) => {
      Object.entries(eventHandlers).forEach(([event2, handler]) => {
        node.removeEventListener(event2, handler);
      });
    });
  }
  function destroy() {
    clearTimeout(hoverTimeout);
    removeEventListeners();
  }
  update(initialParams);
  if (prefetchModes.includes("mount")) {
    prefetch();
  }
  return { update, destroy };
}
export {
  Link as L
};
//# sourceMappingURL=link-Z_9ghKzW.js.map
