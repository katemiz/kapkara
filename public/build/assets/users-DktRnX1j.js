import { ay as block, az as EFFECT_TRANSPARENT, aA as BranchManager, aB as create_element, aC as NAMESPACE_SVG, aD as assign_nodes, aE as create_text, av as active_effect, ad as teardown, r as state, a8 as page, o as set, q as get, p as prop, C as each, b as append, c as pop, d as push, aF as from_svg, g as sibling, y as rest_props, k as child, x as comment, m as first_child, D as index, z as noop, F as user_derived, K as to_array, w as spread_props } from "./app-DmZvep12.js";
import { b as attribute_effect } from "./attributes-B9LAyNIy.js";
function snippet(node, get_snippet, ...args) {
  var branches = new BranchManager(node);
  block(() => {
    const snippet2 = get_snippet() ?? null;
    branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
  }, EFFECT_TRANSPARENT);
}
function element(node, get_tag, is_svg, render_fn, get_namespace, location) {
  var element2 = null;
  var anchor = (
    /** @type {TemplateNode} */
    node
  );
  var branches = new BranchManager(anchor, false);
  block(() => {
    const next_tag = get_tag() || null;
    var ns = is_svg || next_tag === "svg" ? NAMESPACE_SVG : void 0;
    if (next_tag === null) {
      branches.ensure(null, null);
      return;
    }
    branches.ensure(next_tag, (anchor2) => {
      if (next_tag) {
        element2 = create_element(next_tag, ns);
        assign_nodes(element2, element2);
        if (render_fn) {
          var child_anchor = element2.appendChild(create_text());
          render_fn(element2, child_anchor);
        }
        active_effect.nodes.end = element2;
        anchor2.before(element2);
      }
    });
    return () => {
    };
  }, EFFECT_TRANSPARENT);
  teardown(() => {
  });
}
class AuthState {
  // 1. Declare private reactive state using Svelte 5 runes
  #user = state(null);
  constructor() {
    page.subscribe(($page) => {
      set(this.#user, $page?.props?.auth?.user ?? null, true);
    });
  }
  // 3. GETTERS are mandatory for Svelte 5 to track reactivity in components
  get user() {
    return get(this.#user);
  }
  get isAuthenticated() {
    return get(this.#user) !== null;
  }
  // Check for a specific role
  hasRole(role) {
    return this.user?.role === role;
  }
  // Check if user has a specific permission
  can(permission) {
    return this.user?.permissions?.includes(permission) ?? false;
  }
  // Specific helper for your engineering modules
  get canAccessPDM() {
    return this.hasRole("admin") || this.can("view_pdm");
  }
  get canAccessReqs() {
    return this.hasRole("admin") || this.can("view_reqs");
  }
}
const auth = new AuthState();
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var root = from_svg(`<svg><!><!></svg>`);
function Icon($$anchor, $$props) {
  push($$props, true);
  const color = prop($$props, "color", 3, "currentColor"), size = prop($$props, "size", 3, 24), strokeWidth = prop($$props, "strokeWidth", 3, 2), absoluteStrokeWidth = prop($$props, "absoluteStrokeWidth", 3, false), iconNode = prop($$props, "iconNode", 19, () => []), props = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "children"
  ]);
  var svg = root();
  attribute_effect(
    svg,
    ($0) => ({
      ...defaultAttributes,
      ...props,
      width: size(),
      height: size(),
      stroke: color(),
      "stroke-width": $0,
      class: [
        "lucide-icon lucide",
        $$props.name && `lucide-${$$props.name}`,
        $$props.class
      ]
    }),
    [
      () => absoluteStrokeWidth() ? Number(strokeWidth()) * 24 / Number(size()) : strokeWidth()
    ]
  );
  var node = child(svg);
  each(node, 17, iconNode, index, ($$anchor2, $$item) => {
    var $$array = user_derived(() => to_array(get($$item), 2));
    let tag = () => get($$array)[0];
    let attrs = () => get($$array)[1];
    var fragment = comment();
    var node_1 = first_child(fragment);
    element(node_1, tag, true, ($$element, $$anchor3) => {
      attribute_effect($$element, () => ({ ...attrs() }));
    });
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node);
  snippet(node_2, () => $$props.children ?? noop);
  append($$anchor, svg);
  pop();
}
function Box($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      }
    ],
    ["path", { "d": "m3.3 7 8.7 5 8.7-5" }],
    ["path", { "d": "M12 22V12" }]
  ];
  Icon($$anchor, spread_props({ name: "box" }, () => props, {
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
function Log_out($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "m16 17 5-5-5-5" }],
    ["path", { "d": "M21 12H9" }],
    ["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
  ];
  Icon($$anchor, spread_props({ name: "log-out" }, () => props, {
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
function Users($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["path", { "d": "M16 3.128a4 4 0 0 1 0 7.744" }],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }]
  ];
  Icon($$anchor, spread_props({ name: "users" }, () => props, {
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
export {
  Box as B,
  Icon as I,
  Log_out as L,
  Users as U,
  auth as a,
  element as e,
  snippet as s
};
//# sourceMappingURL=users-DktRnX1j.js.map
