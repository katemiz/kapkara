import { d as push, C as spread_props, z as comment, m as first_child, b as append, c as pop, D as rest_props, E as noop, t as template_effect, f as setup_stores, j as from_html, g as sibling, k as child, q as get, B as user_derived, s as store_get, H as page, l as set_text } from "./app-B8UKlAbY.js";
import { L as Link } from "./link-Z_9ghKzW.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
import { U as User } from "./user-CTgn9ZX8.js";
import { B as Box } from "./box-D-pQSdgi.js";
import { K as Key } from "./key-CyqpSk3e.js";
function Building($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M12 10h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M12 6h.01" }],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M16 14h.01" }],
    ["path", { "d": "M16 6h.01" }],
    ["path", { "d": "M8 10h.01" }],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M8 6h.01" }],
    ["path", { "d": "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }],
    [
      "rect",
      { "x": "4", "y": "2", "width": "16", "height": "20", "rx": "2" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "building" }, () => props, {
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
function Lamp_desk($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"
      }
    ],
    ["path", { "d": "m14.207 4.793-3.414 3.414" }],
    [
      "path",
      {
        "d": "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
      }
    ],
    [
      "path",
      { "d": "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "lamp-desk" }, () => props, {
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
function Presentation($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M2 3h20" }],
    ["path", { "d": "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }],
    ["path", { "d": "m7 21 5-5 5 5" }]
  ];
  Icon($$anchor, spread_props({ name: "presentation" }, () => props, {
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
function Shield($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "shield" }, () => props, {
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
var root_1 = from_html(`<span class="icon"><!></span> <span>Dashboard</span>`, 1);
var root_2 = from_html(`<span class="icon"><!></span> <span>Organizations</span>`, 1);
var root_3 = from_html(`<span class="icon"><!></span> <span>Users</span>`, 1);
var root_4 = from_html(`<span class="icon"><!></span> <span>Departments</span>`, 1);
var root_5 = from_html(`<span class="icon"><!></span> <span>Modules</span>`, 1);
var root_6 = from_html(`<span class="icon"><!></span> <span>Roles</span>`, 1);
var root_7 = from_html(`<span class="icon"><!></span> <span>Permissions</span>`, 1);
var root = from_html(`<aside class="menu p-4"><p class="menu-label">Super Admin Panel<br/> </p> <ul class="menu-list"><li><!></li></ul> <p class="menu-label">Management</p> <ul class="menu-list"><li><!></li> <li><!></li> <li><!></li></ul> <p class="menu-label">System</p> <ul class="menu-list"><li><!></li> <li><!></li> <li><!></li></ul></aside>`);
function DashboardMenu($$anchor, $$props) {
  push($$props, true);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let user = user_derived(() => $page().props.auth?.user);
  let currentPath = user_derived(() => $page().url.split("?")[0]);
  var aside = root();
  var p = child(aside);
  var text = sibling(child(p), 2);
  var ul = sibling(p, 2);
  var li = child(ul);
  var node = child(li);
  {
    let $0 = user_derived(() => get(currentPath) == "/admin" ? "is-active" : "");
    Link(node, {
      href: "/admin",
      get class() {
        return `is-fullwidth ${get($0) ?? ""}`;
      },
      children: ($$anchor2, $$slotProps) => {
        var fragment = root_1();
        var span = first_child(fragment);
        var node_1 = child(span);
        Presentation(node_1, { size: "18" });
        append($$anchor2, fragment);
      },
      $$slots: { default: true }
    });
  }
  var ul_1 = sibling(ul, 4);
  var li_1 = child(ul_1);
  var node_2 = child(li_1);
  {
    let $0 = user_derived(() => get(currentPath) == "/admin/organizations" ? "is-active" : "");
    Link(node_2, {
      href: "/admin/organizations",
      get class() {
        return `is-fullwidth ${get($0) ?? ""}`;
      },
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_2();
        var span_1 = first_child(fragment_1);
        var node_3 = child(span_1);
        Building(node_3, { size: "18" });
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
  }
  var li_2 = sibling(li_1, 2);
  var node_4 = child(li_2);
  Link(node_4, {
    href: "/admin/users",
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_3();
      var span_2 = first_child(fragment_2);
      var node_5 = child(span_2);
      User(node_5, { size: "18" });
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  var li_3 = sibling(li_2, 2);
  var node_6 = child(li_3);
  Link(node_6, {
    href: "/admin/departments",
    children: ($$anchor2, $$slotProps) => {
      var fragment_3 = root_4();
      var span_3 = first_child(fragment_3);
      var node_7 = child(span_3);
      Lamp_desk(node_7, { size: "18" });
      append($$anchor2, fragment_3);
    },
    $$slots: { default: true }
  });
  var ul_2 = sibling(ul_1, 4);
  var li_4 = child(ul_2);
  var node_8 = child(li_4);
  Link(node_8, {
    href: "/admin/modules",
    children: ($$anchor2, $$slotProps) => {
      var fragment_4 = root_5();
      var span_4 = first_child(fragment_4);
      var node_9 = child(span_4);
      Box(node_9, { size: "18" });
      append($$anchor2, fragment_4);
    },
    $$slots: { default: true }
  });
  var li_5 = sibling(li_4, 2);
  var node_10 = child(li_5);
  Link(node_10, {
    href: "/admin/roles",
    children: ($$anchor2, $$slotProps) => {
      var fragment_5 = root_6();
      var span_5 = first_child(fragment_5);
      var node_11 = child(span_5);
      Shield(node_11, { size: "18" });
      append($$anchor2, fragment_5);
    },
    $$slots: { default: true }
  });
  var li_6 = sibling(li_5, 2);
  var node_12 = child(li_6);
  Link(node_12, {
    href: "/admin/permissions",
    children: ($$anchor2, $$slotProps) => {
      var fragment_6 = root_7();
      var span_6 = first_child(fragment_6);
      var node_13 = child(span_6);
      Key(node_13, { size: "18" });
      append($$anchor2, fragment_6);
    },
    $$slots: { default: true }
  });
  template_effect(() => set_text(text, ` [${get(user)?.name ?? ""}
        ${get(user)?.lastname ?? ""}]`));
  append($$anchor, aside);
  pop();
  $$cleanup();
}
const DashboardMenu$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DashboardMenu
}, Symbol.toStringTag, { value: "Module" }));
export {
  Building as B,
  DashboardMenu as D,
  DashboardMenu$1 as a
};
//# sourceMappingURL=DashboardMenu-OW1IrEaS.js.map
