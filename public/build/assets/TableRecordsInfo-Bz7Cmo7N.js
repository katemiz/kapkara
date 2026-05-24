import { ac as effect, u as untrack, P as render_effect, J as deep_read_state, aN as safe_not_equal, ae as is_array, aO as legacy_rest_props, d as push, p as prop, aP as legacy_pre_effect, aQ as legacy_pre_effect_reset, i as init, x as comment, m as first_child, q as get, e as event, b as append, c as pop, E as mutable_source, o as set, aR as isUrlMethodPair, a5 as config, G as router, aS as mergeDataIntoQueryString, aT as shouldIntercept, aU as shouldNavigate, w as spread_props, z as noop, y as rest_props, a as if_block, g as sibling, C as each, k as child, D as index, j as from_html, F as user_derived, t as template_effect, l as set_text } from "./app-D1xHItXN.js";
import { e as element, I as Icon, s as snippet } from "./users-jlfJKlAC.js";
import { h as html } from "./html-D-zttEU3.js";
import { s as slot } from "./slot-DtgNxSws.js";
import { b as attribute_effect } from "./attributes-BBrSLZ4L.js";
import { C as Chevron_right } from "./chevron-right-GqX3b4EK.js";
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
function Chevron_left($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  Icon($$anchor, spread_props({ name: "chevron-left" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Eye($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$anchor, spread_props({ name: "eye" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Search($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$anchor, spread_props({ name: "search" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
var root_4 = from_html(`<span class="pagination-previous is-disabled" title="This is the first page"><!></span>`);
var root_7 = from_html(`<span class="pagination-next is-disabled" title="This is the last page"><!></span>`);
var root_9 = from_html(`<span class="pagination-ellipsis">&hellip;</span>`);
var root_8 = from_html(`<li><!></li>`);
var root_1$1 = from_html(`<nav class="pagination is-centered"><!> <!> <ul class="pagination-list"></ul></nav>`);
function Paginate($$anchor, $$props) {
  push($$props, true);
  let allLinks = user_derived(() => $$props.items.links || []);
  let prevLink = user_derived(() => get(allLinks)[0]);
  let nextLink = user_derived(() => get(allLinks)[get(allLinks).length - 1]);
  let pageLinks = user_derived(() => get(allLinks).slice(1, -1));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_3 = ($$anchor2) => {
      var nav = root_1$1();
      var node_1 = child(nav);
      {
        var consequent = ($$anchor3) => {
          Link($$anchor3, {
            get href() {
              return get(prevLink).url;
            },
            class: "pagination-previous",
            preserveScroll: true,
            preserveState: true,
            children: ($$anchor4, $$slotProps) => {
              Chevron_left($$anchor4, { size: "18" });
            },
            $$slots: { default: true }
          });
        };
        var alternate = ($$anchor3) => {
          var span = root_4();
          var node_2 = child(span);
          Chevron_left(node_2, { size: "18" });
          append($$anchor3, span);
        };
        if_block(node_1, ($$render) => {
          if (get(prevLink)?.url) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      var node_3 = sibling(node_1, 2);
      {
        var consequent_1 = ($$anchor3) => {
          Link($$anchor3, {
            get href() {
              return get(nextLink).url;
            },
            class: "pagination-next",
            preserveScroll: true,
            preserveState: true,
            children: ($$anchor4, $$slotProps) => {
              Chevron_right($$anchor4, { size: "18" });
            },
            $$slots: { default: true }
          });
        };
        var alternate_1 = ($$anchor3) => {
          var span_1 = root_7();
          var node_4 = child(span_1);
          Chevron_right(node_4, { size: "18" });
          append($$anchor3, span_1);
        };
        if_block(node_3, ($$render) => {
          if (get(nextLink)?.url) $$render(consequent_1);
          else $$render(alternate_1, -1);
        });
      }
      var ul = sibling(node_3, 2);
      each(ul, 21, () => get(pageLinks), index, ($$anchor3, link2) => {
        var li = root_8();
        var node_5 = child(li);
        {
          var consequent_2 = ($$anchor4) => {
            var span_2 = root_9();
            append($$anchor4, span_2);
          };
          var alternate_2 = ($$anchor4) => {
            {
              let $0 = user_derived(() => get(link2).active ? "is-current" : "");
              Link($$anchor4, {
                get href() {
                  return get(link2).url;
                },
                get class() {
                  return `pagination-link ${get($0) ?? ""}`;
                },
                preserveScroll: true,
                preserveState: true,
                children: ($$anchor5, $$slotProps) => {
                  var fragment_6 = comment();
                  var node_6 = first_child(fragment_6);
                  html(node_6, () => get(link2).label);
                  append($$anchor5, fragment_6);
                },
                $$slots: { default: true }
              });
            }
          };
          if_block(node_5, ($$render) => {
            if (get(link2).url === null) $$render(consequent_2);
            else $$render(alternate_2, -1);
          });
        }
        append($$anchor3, li);
      });
      append($$anchor2, nav);
    };
    if_block(node, ($$render) => {
      if ($$props.items.total > $$props.items.per_page) $$render(consequent_3);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_1 = from_html(`<div class="table-records-info svelte-11w7kit"><p>Showing <strong> </strong> to <strong> </strong> of <strong> </strong> records</p></div>`);
var root_2 = from_html(`<div class="table-records-info svelte-11w7kit"><p>Total <strong> </strong> records</p></div>`);
var root = from_html(`<!> <!>`, 1);
function TableRecordsInfo($$anchor, $$props) {
  push($$props, true);
  let from = user_derived(() => $$props.results.from);
  let to = user_derived(() => $$props.results.to);
  let total = user_derived(() => $$props.results.total);
  let lastPage = user_derived(() => $$props.results.last_page);
  var fragment = root();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var p = child(div);
      var strong = sibling(child(p));
      var text = child(strong);
      var strong_1 = sibling(strong, 2);
      var text_1 = child(strong_1);
      var strong_2 = sibling(strong_1, 2);
      var text_2 = child(strong_2);
      template_effect(() => {
        set_text(text, get(from));
        set_text(text_1, get(to));
        set_text(text_2, get(total));
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(lastPage) > 1) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_1 = root_2();
      var p_1 = child(div_1);
      var strong_3 = sibling(child(p_1));
      var text_3 = child(strong_3);
      template_effect(() => set_text(text_3, get(total)));
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (get(total) <= $$props.per_page) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
}
export {
  Eye as E,
  Paginate as P,
  Search as S,
  TableRecordsInfo as T
};
//# sourceMappingURL=TableRecordsInfo-Bz7Cmo7N.js.map
