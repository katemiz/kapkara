import { w as spread_props, c as pop, d as push, x as comment, m as first_child, b as append, y as rest_props, z as noop, a as if_block, C as each, t as template_effect, n as delegated, k as child, o as set, j as from_html, q as get, g as sibling, r as state, v as delegate, l as set_text, D as index, F as user_derived, G as router } from "./app-B3TC2Fcx.js";
import { a as set_attribute, s as set_class } from "./attributes-BmlKk72Z.js";
import { I as Icon, s as snippet, U as Users, a as auth, B as Box, L as Log_out } from "./users-C3g1dnqi.js";
import { P as PATHS, M as MYAPPS } from "./config-ei04y2F2.js";
import { K as KapkaraIcon } from "./KapkaraIcon-BA9CIx4Y.js";
import { H as Hand_helping, C as Contact_round, D as Database, B as Bird, U as User } from "./user-YxiIyKtm.js";
function House($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "house" }, () => props, {
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
function Shield_user($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { "d": "M6.376 18.91a6 6 0 0 1 11.249.003" }],
    ["circle", { "cx": "12", "cy": "11", "r": "4" }]
  ];
  Icon($$anchor, spread_props({ name: "shield-user" }, () => props, {
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
var root_1 = from_html(`<a class="navbar-item" href="/admin"><span class="icon"><!></span> <span>Admin Panel</span></a>`);
var root_2 = from_html(`<a class="navbar-item"><span class="icon has-text-warning"><img/></span> <span> </span></a>`);
var root_3 = from_html(`<div class="navbar-item has-dropdown is-hoverable"><a href="/apps" class="navbar-item navbar-link has-text-info"> </a> <div class="navbar-dropdown"><a class="navbar-item" href="/question"><span class="icon"><!></span> <span>Question</span></a> <a class="navbar-item" href="/question"><span class="icon"><!></span> <span>Question 2</span></a> <a class="navbar-item" href="/pdm/material"><span class="icon"><!></span> <span>Material</span></a> <button type="button" class="navbar-item"><span class="icon"><!></span> <span>Logout</span></button></div></div>`);
var root_4 = from_html(`<a class="navbar-item"><span class="icon has-text-warning"><!></span></a>`);
var root = from_html(`<nav class="navbar is-dark"><div class="navbar-brand"><a class="navbar-item" href="/"><span class="icon-text is-size-5"><span class="icon"><!></span> <span class="has-text-weight-bold">kapkara</span> <span class="has-text-weight-light has-text-warning">web house</span></span></a> <button aria-label="menu" data-target="navbarMenu"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></button></div> <div id="navbarMenu"><div class="navbar-end"><a href="/" class="navbar-item is-active"><span class="icon has-text-warning"><!></span></a> <div class="navbar-item has-dropdown is-hoverable"><a href="/apps" class="navbar-item navbar-link">Apps</a> <div class="navbar-dropdown"><!> <!></div></div> <a href="/services" class="navbar-item"><span class="icon has-text-warning"><!></span> <span>Services</span></a> <a href="/team" class="navbar-item"><span class="icon has-text-warning"><!></span> <span>Team</span></a> <a href="/contact" class="navbar-item"><span class="icon has-text-warning"><!></span> <span>Contact</span></a> <!></div></div></nav>`);
function NavBar($$anchor, $$props) {
  push($$props, true);
  let isMenuOpen = state(false);
  function toggleMenu() {
    set(isMenuOpen, !get(isMenuOpen));
  }
  var nav = root();
  var div = child(nav);
  var a = child(div);
  var span = child(a);
  var span_1 = child(span);
  var node = child(span_1);
  KapkaraIcon(node, {});
  var button = sibling(a, 2);
  var div_1 = sibling(div, 2);
  var div_2 = child(div_1);
  var a_1 = child(div_2);
  var span_2 = child(a_1);
  var node_1 = child(span_2);
  House(node_1, { size: 18 });
  var div_3 = sibling(a_1, 2);
  var div_4 = sibling(child(div_3), 2);
  var node_2 = child(div_4);
  {
    var consequent = ($$anchor2) => {
      var a_2 = root_1();
      var span_3 = child(a_2);
      var node_3 = child(span_3);
      Shield_user(node_3, { size: 18 });
      append($$anchor2, a_2);
    };
    var d = user_derived(() => auth.isAuthenticated && auth.hasRole("admin"));
    if_block(node_2, ($$render) => {
      if (get(d)) $$render(consequent);
    });
  }
  var node_4 = sibling(node_2, 2);
  each(node_4, 17, () => MYAPPS, index, ($$anchor2, app) => {
    var a_3 = root_2();
    var span_4 = child(a_3);
    var img = child(span_4);
    var span_5 = sibling(span_4, 2);
    var text = child(span_5);
    template_effect(() => {
      set_attribute(a_3, "href", get(app).url);
      set_attribute(img, "src", `${PATHS.path_images_apps_prefix}${get(app).logo ?? ""}`);
      set_attribute(img, "alt", get(app).label);
      set_text(text, get(app).name);
    });
    append($$anchor2, a_3);
  });
  var a_4 = sibling(div_3, 2);
  var span_6 = child(a_4);
  var node_5 = child(span_6);
  Hand_helping(node_5, { size: 18 });
  var a_5 = sibling(a_4, 2);
  var span_7 = child(a_5);
  var node_6 = child(span_7);
  Users(node_6, { size: 18 });
  var a_6 = sibling(a_5, 2);
  var span_8 = child(a_6);
  var node_7 = child(span_8);
  Contact_round(node_7, { size: 18 });
  var node_8 = sibling(a_6, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_5 = root_3();
      var a_7 = child(div_5);
      var text_1 = child(a_7);
      var div_6 = sibling(a_7, 2);
      var a_8 = child(div_6);
      var span_9 = child(a_8);
      var node_9 = child(span_9);
      Database(node_9, { size: 18 });
      var a_9 = sibling(a_8, 2);
      var span_10 = child(a_9);
      var node_10 = child(span_10);
      Bird(node_10, { size: 18 });
      var a_10 = sibling(a_9, 2);
      var span_11 = child(a_10);
      var node_11 = child(span_11);
      Box(node_11, { size: 18 });
      var button_1 = sibling(a_10, 2);
      var span_12 = child(button_1);
      var node_12 = child(span_12);
      Log_out(node_12, { size: 18 });
      template_effect(() => set_text(text_1, `${auth.user.name ?? ""} ${auth.user.lastname ?? ""}`));
      delegated("click", button_1, () => router.post("/logout", {}, { onSuccess: () => router.visit("/") }));
      append($$anchor2, div_5);
    };
    var alternate = ($$anchor2) => {
      var a_11 = root_4();
      set_attribute(a_11, "href", "/login");
      var span_13 = child(a_11);
      var node_13 = child(span_13);
      User(node_13, { size: 18, color: "#3e9392" });
      append($$anchor2, a_11);
    };
    if_block(node_8, ($$render) => {
      if (auth.isAuthenticated) $$render(consequent_1);
      else $$render(alternate, -1);
    });
  }
  template_effect(() => {
    set_class(button, 1, `navbar-burger button  ${get(isMenuOpen) ? "is-active" : ""}`);
    set_attribute(button, "aria-expanded", get(isMenuOpen));
    set_class(div_1, 1, `navbar-menu ${get(isMenuOpen) ? "is-active" : ""}`);
  });
  delegated("click", button, toggleMenu);
  delegated("click", a_1, () => set(isMenuOpen, false));
  append($$anchor, nav);
  pop();
}
delegate(["click"]);
export {
  NavBar as default
};
//# sourceMappingURL=NavBar-DD3fqZb6.js.map
