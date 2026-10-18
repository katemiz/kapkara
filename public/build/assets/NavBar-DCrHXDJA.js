import { d as push, C as spread_props, z as comment, m as first_child, E as noop, b as append, c as pop, D as rest_props, a as if_block, t as template_effect, n as delegated, j as from_html, g as sibling, k as child, v as delegate, o as set, q as get, r as state, l as set_text, I as router } from "./app-B8UKlAbY.js";
import { s as set_attribute, d as set_custom_element_data } from "./attributes-BE60HdxF.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import { a as auth, L as Log_out } from "./log-out-C7YwExAR.js";
import { S as Settings, L as Log_in } from "./settings-Cg7pxvZj.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
function Circle_user($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }],
    [
      "path",
      { "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "circle-user" }, () => props, {
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
var root_1 = from_html(`<div class="navbar-item has-dropdown is-hoverable"><p class="navbar-link" href="/durum/ozet">Durum</p> <div class="navbar-dropdown has-text-info"><a href="/durum/ozet" class="navbar-item">Genel Özet</a> <a href="/durum/alacaklar" class="navbar-item">Alacaklar</a> <a href="/durum/verecekler" class="navbar-item">Verecekler</a></div></div> <a href="/durum/gelirler" class="navbar-item icon-text"><span class="icon"><x-icon></x-icon></span> <span>Gelir</span></a> <a href="/durum/giderler" class="navbar-item icon-text"><span class="icon"><x-icon></x-icon></span> <span>Gider</span></a> <a href="/durum/verecekler" class="navbar-item icon-text"><span class="icon"><x-icon></x-icon></span> <span>Faturalar</span></a> <div class="navbar-item has-dropdown is-hoverable"><p class="navbar-link" href="/Admin">Kayıtlar</p> <div class="navbar-dropdown"><a href="/kayit-form/aidat" class="navbar-item">Toplu Aidat Kaydı</a> <a href="/kayit-form/alacak" class="navbar-item">Alacak Kaydı</a> <a href="/kayit-form/fatura" class="navbar-item">Fatura Kaydı</a> <a href="/kayit-form/gelir" class="navbar-item">Gelir Kaydı</a> <a href="/kayit-form/gider" class="navbar-item">Gider Kaydı</a> <a href="/sayac-okuma" class="navbar-item">Sayaç Okumaları</a></div></div> <div class="navbar-item has-dropdown is-hoverable"><p class="navbar-link" href="/Admin">Yazdır</p> <div class="navbar-dropdown"><a href="/dokum" class="navbar-item icon-text">Gelir-Gider Döküm</a> <a href="/aylik-aidatlar" class="navbar-item icon-text">Aylık Aidatlar</a> <a href="/bosmakbuz" class="navbar-item icon-text">Boş Makbuz</a></div></div>`, 3);
var root_2 = from_html(`<div class="navbar-item has-dropdown is-hoverable"><p class="navbar-link"><span class="mx-3 has-text-right"> <br/> <span class="block is-size-7"> </span></span></p> <div class="navbar-dropdown"><a class="navbar-item" href="/question"><span class="icon"><!></span> <span>Settings</span></a> <button type="button" class="navbar-item"><span class="icon"><!></span> <span>Logout</span></button></div></div>`);
var root_3 = from_html(`<a class="navbar-item"><span class="icon has-text-link"><!></span> <span>Giriş</span></a> <a class="navbar-item"><span class="icon has-text-link"><!></span> <span>Kaydolun</span></a>`, 1);
var root = from_html(`<nav class="navbar is-light"><div class="container is-fluid"><div class="navbar-brand"><a href="/" class="navbar-item has-text-white"><img src="/images/Yonetici/app_header_logo.svg" alt="Logo"/></a> <button aria-label="menu" data-target="navbarMenu"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></button></div> <div id="navbar_ana" class="navbar-menu"><div class="navbar-start" id="navstart"><!></div> <div class="navbar-end"><!></div></div></div></nav>`);
function NavBar($$anchor, $$props) {
  push($$props, true);
  let isMenuOpen = state(false);
  function toggleMenu() {
    set(isMenuOpen, !get(isMenuOpen));
  }
  var nav = root();
  var div = child(nav);
  var div_1 = child(div);
  var button = sibling(child(div_1), 2);
  var div_2 = sibling(div_1, 2);
  var div_3 = child(div_2);
  var node = child(div_3);
  {
    var consequent = ($$anchor2) => {
      var fragment = root_1();
      var a = sibling(first_child(fragment), 2);
      var span = child(a);
      var x_icon = child(span);
      set_custom_element_data(x_icon, "icon", "lira");
      set_custom_element_data(x_icon, "fill", "red");
      var a_1 = sibling(a, 2);
      var span_1 = child(a_1);
      var x_icon_1 = child(span_1);
      set_custom_element_data(x_icon_1, "icon", "lira");
      set_custom_element_data(x_icon_1, "fill", "red");
      var a_2 = sibling(a_1, 2);
      var span_2 = child(a_2);
      var x_icon_2 = child(span_2);
      set_custom_element_data(x_icon_2, "icon", "receipt");
      set_custom_element_data(x_icon_2, "fill", "red");
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (auth.isAuthenticated) $$render(consequent);
    });
  }
  var div_4 = sibling(div_3, 2);
  var node_1 = child(div_4);
  {
    var consequent_1 = ($$anchor2) => {
      var div_5 = root_2();
      var p = child(div_5);
      var span_3 = child(p);
      var text = child(span_3);
      var span_4 = sibling(text, 3);
      var text_1 = child(span_4);
      var div_6 = sibling(p, 2);
      var a_3 = child(div_6);
      var span_5 = child(a_3);
      var node_2 = child(span_5);
      Settings(node_2, { size: 18 });
      var button_1 = sibling(a_3, 2);
      var span_6 = child(button_1);
      var node_3 = child(span_6);
      Log_out(node_3, { size: 18 });
      template_effect(() => {
        set_text(text, `${auth.user.name ?? ""}
                                ${auth.user.lastname ?? ""}`);
        set_text(text_1, `${auth.user.name ?? ""} ${auth.user.lastname ?? ""}`);
      });
      delegated("click", button_1, () => router.post("/logout", { sayfa: "yonetici" }));
      append($$anchor2, div_5);
    };
    var alternate = ($$anchor2) => {
      var fragment_1 = root_3();
      var a_4 = first_child(fragment_1);
      set_attribute(a_4, "href", "/login/yonetici");
      var span_7 = child(a_4);
      var node_4 = child(span_7);
      Log_in(node_4, { size: 18 });
      var a_5 = sibling(a_4, 2);
      set_attribute(a_5, "href", "/register");
      var span_8 = child(a_5);
      var node_5 = child(span_8);
      Circle_user(node_5, { size: 18 });
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (auth.isAuthenticated) $$render(consequent_1);
      else $$render(alternate, -1);
    });
  }
  template_effect(() => {
    set_class(button, 1, `navbar-burger button ${get(isMenuOpen) ? "is-active" : ""}`);
    set_attribute(button, "aria-expanded", get(isMenuOpen));
  });
  delegated("click", button, toggleMenu);
  append($$anchor, nav);
  pop();
}
delegate(["click"]);
export {
  NavBar as default
};
//# sourceMappingURL=NavBar-DCrHXDJA.js.map
