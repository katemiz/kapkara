import { d as push, w as spread_props, x as comment, m as first_child, z as noop, b as append, c as pop, y as rest_props, i as init, a as if_block, j as from_html, g as sibling, k as child, v as delegate, C as each, t as template_effect, q as get, l as set_text, D as index, n as delegated, G as router } from "./app-D1xHItXN.js";
import { a as set_attribute } from "./attributes-BBrSLZ4L.js";
import { I as Icon, s as snippet, a as auth, U as Users, B as Box, L as Log_out } from "./users-jlfJKlAC.js";
import { P as PATHS, A as ADMACTIONS } from "./config-ei04y2F2.js";
import { F as Factory } from "./factory-COgsJOzY.js";
import { H as Hand_helping, C as Contact_round, D as Database, B as Bird, U as User } from "./user-DCzES_T0.js";
function Hat_glasses($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M14 18a2 2 0 0 0-4 0" }],
    [
      "path",
      {
        "d": "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"
      }
    ],
    ["path", { "d": "M2 11h20" }],
    ["circle", { "cx": "17", "cy": "18", "r": "3" }],
    ["circle", { "cx": "7", "cy": "18", "r": "3" }]
  ];
  Icon($$anchor, spread_props({ name: "hat-glasses" }, () => props, {
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
function Key($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
      }
    ],
    ["path", { "d": "m21 2-9.6 9.6" }],
    ["circle", { "cx": "7.5", "cy": "15.5", "r": "5.5" }]
  ];
  Icon($$anchor, spread_props({ name: "key" }, () => props, {
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
function Users_round($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M18 21a8 8 0 0 0-16 0" }],
    ["circle", { "cx": "10", "cy": "8", "r": "5" }],
    ["path", { "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]
  ];
  Icon($$anchor, spread_props({ name: "users-round" }, () => props, {
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
var root_1 = from_html(`<div id="navbarMenu" class="navbar-menu"><div class="navbar-start"><div class="navbar-item has-dropdown is-hoverable"><a href="/apps" class="navbar-item navbar-link">Admin</a> <div class="navbar-dropdown"><a class="navbar-item" href="/admin/users"><span class="icon has-text-warning"><!></span> <span>Users</span></a> <a class="navbar-item" href="/admin/users"><span class="icon has-text-warning"><!></span> <span>Roles</span></a> <a class="navbar-item" href="/admin/users"><span class="icon has-text-warning"><!></span> <span>Permissions</span></a> <a class="navbar-item" href="/admin/users"><span class="icon has-text-warning"><!></span> <span>Companies</span></a></div></div> <div class="navbar-item has-dropdown is-hoverable"><a href="/projects" class="navbar-item navbar-link">Projects</a> <div class="navbar-dropdown"><a class="navbar-item" href="/admin/users"><span class="icon has-text-link"><!></span> <span>Work Packages</span></a> <a class="navbar-item" href="/admin/users"><span class="icon has-text-warning"><!></span> <span>Project Milestones</span></a> <a class="navbar-item" href="/admin/users"><span class="icon has-text-warning"><!></span> <span>Project Phases</span></a> <a class="navbar-item" href="/admin/users"><span class="icon has-text-warning"><!></span> <span>Witnesses</span></a></div></div> <a href="/services" class="navbar-item"><span class="icon has-text-warning"><!></span> <span>MoCs</span></a> <a href="/team" class="navbar-item"><span class="icon has-text-warning"><!></span> <span>PoCs</span></a> <a href="/contact" class="navbar-item"><span class="icon has-text-warning"><!></span> <span>Tests</span></a> <a href="/contact" class="navbar-item"><span class="icon has-text-warning"><!></span> <span>Chapters</span></a></div></div>`);
var root_3 = from_html(`<a class="navbar-item"><span class="icon has-text-warning"><img/></span> <span> </span></a>`);
var root_2 = from_html(`<div class="navbar-item has-dropdown is-hoverable"><a href="/apps" class="navbar-item navbar-link">Export</a> <div class="navbar-dropdown"></div></div>`);
var root_4 = from_html(`<div class="navbar-item has-dropdown is-hoverable"><a href="/apps" class="navbar-item navbar-link has-text-info"> </a> <div class="navbar-dropdown"><a class="navbar-item" href="/question"><span class="icon"><!></span> <span>Question</span></a> <a class="navbar-item" href="/question"><span class="icon"><!></span> <span>Question 2</span></a> <a class="navbar-item" href="/material"><span class="icon"><!></span> <span>Material</span></a> <button type="button" class="navbar-item"><span class="icon"><!></span> <span>Logout</span></button></div></div>`);
var root_5 = from_html(`<a class="navbar-item"><span class="icon has-text-warning"><!></span></a>`);
var root = from_html(`<nav class="navbar is-dark"><div class="navbar-brand"><a href="/" class="navbar-item has-text-white logo-bg svelte-1dle5y9"><span class="icon has-text-dark"><img src="/images/Apps/tree-view.svg" alt="Requirements Management Logo"/></span> <span class="has-text-weight-light">Requirements Management</span></a> <button href="#" class="navbar-burger button is-text has-text-white" aria-label="menu" aria-expanded="false" data-target="navbarMenu"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></button></div> <!> <div id="navbarMenu" class="navbar-menu"><div class="navbar-end"><!> <!></div></div></nav>`);
function NavBar($$anchor, $$props) {
  push($$props, false);
  document.addEventListener("DOMContentLoaded", () => {
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const target2 = document.getElementById(target);
        el.classList.toggle("is-active");
        target2.classList.toggle("is-active");
      });
    });
  });
  init();
  var nav = root();
  var node = sibling(child(nav), 2);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = sibling(child(div_2), 2);
      var a = child(div_3);
      var span = child(a);
      var node_1 = child(span);
      Users_round(node_1, { size: 18 });
      var a_1 = sibling(a, 2);
      var span_1 = child(a_1);
      var node_2 = child(span_1);
      Hat_glasses(node_2, { size: 18 });
      var a_2 = sibling(a_1, 2);
      var span_2 = child(a_2);
      var node_3 = child(span_2);
      Key(node_3, { size: 18 });
      var a_3 = sibling(a_2, 2);
      var span_3 = child(a_3);
      var node_4 = child(span_3);
      Factory(node_4, { size: 18 });
      var div_4 = sibling(div_2, 2);
      var div_5 = sibling(child(div_4), 2);
      var a_4 = child(div_5);
      var span_4 = child(a_4);
      var node_5 = child(span_4);
      Users_round(node_5, { size: 18 });
      var a_5 = sibling(a_4, 2);
      var span_5 = child(a_5);
      var node_6 = child(span_5);
      Hat_glasses(node_6, { size: 18 });
      var a_6 = sibling(a_5, 2);
      var span_6 = child(a_6);
      var node_7 = child(span_6);
      Key(node_7, { size: 18 });
      var a_7 = sibling(a_6, 2);
      var span_7 = child(a_7);
      var node_8 = child(span_7);
      Factory(node_8, { size: 18 });
      var a_8 = sibling(div_4, 2);
      var span_8 = child(a_8);
      var node_9 = child(span_8);
      Hand_helping(node_9, { size: 18 });
      var a_9 = sibling(a_8, 2);
      var span_9 = child(a_9);
      var node_10 = child(span_9);
      Users(node_10, { size: 18 });
      var a_10 = sibling(a_9, 2);
      var span_10 = child(a_10);
      var node_11 = child(span_10);
      Contact_round(node_11, { size: 18 });
      var a_11 = sibling(a_10, 2);
      var span_11 = child(a_11);
      var node_12 = child(span_11);
      Contact_round(node_12, { size: 18 });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (auth.isAuthenticated && auth.canAccessReqs) $$render(consequent);
    });
  }
  var div_6 = sibling(node, 2);
  var div_7 = child(div_6);
  var node_13 = child(div_7);
  {
    var consequent_1 = ($$anchor2) => {
      var div_8 = root_2();
      var div_9 = sibling(child(div_8), 2);
      each(div_9, 5, () => ADMACTIONS, index, ($$anchor3, app) => {
        var a_12 = root_3();
        var span_12 = child(a_12);
        var img = child(span_12);
        var span_13 = sibling(span_12, 2);
        var text = child(span_13);
        template_effect(() => {
          set_attribute(a_12, "href", get(app).url);
          set_attribute(img, "src", `${PATHS.path_images_apps_prefix}${get(app).logo ?? ""}`);
          set_attribute(img, "alt", get(app).label);
          set_text(text, get(app).name);
        });
        append($$anchor3, a_12);
      });
      append($$anchor2, div_8);
    };
    if_block(node_13, ($$render) => {
      if (auth.isAuthenticated && auth.canAccessReqs) $$render(consequent_1);
    });
  }
  var node_14 = sibling(node_13, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_10 = root_4();
      var a_13 = child(div_10);
      var text_1 = child(a_13);
      var div_11 = sibling(a_13, 2);
      var a_14 = child(div_11);
      var span_14 = child(a_14);
      var node_15 = child(span_14);
      Database(node_15, { size: 18 });
      var a_15 = sibling(a_14, 2);
      var span_15 = child(a_15);
      var node_16 = child(span_15);
      Bird(node_16, { size: 18 });
      var a_16 = sibling(a_15, 2);
      var span_16 = child(a_16);
      var node_17 = child(span_16);
      Box(node_17, { size: 18 });
      var button = sibling(a_16, 2);
      var span_17 = child(button);
      var node_18 = child(span_17);
      Log_out(node_18, { size: 18 });
      template_effect(() => set_text(text_1, `${auth.user.name ?? ""} ${auth.user.lastname ?? ""}`));
      delegated("click", button, () => router.post("/logout", { sayfa: "requirements" }));
      append($$anchor2, div_10);
    };
    var alternate = ($$anchor2) => {
      var a_17 = root_5();
      set_attribute(a_17, "href", "/login/requirements");
      var span_18 = child(a_17);
      var node_19 = child(span_18);
      User(node_19, { size: 18, color: "#3e9392" });
      append($$anchor2, a_17);
    };
    if_block(node_14, ($$render) => {
      if (auth.isAuthenticated) $$render(consequent_2);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, nav);
  pop();
}
delegate(["click"]);
export {
  NavBar as default
};
//# sourceMappingURL=NavBar-2c5msvFD.js.map
