import { i as init, t as template_effect, b as append, c as pop, d as push, j as from_html, g as sibling, k as child, l as set_text } from "./app-B3TC2Fcx.js";
import { a as set_attribute } from "./attributes-BmlKk72Z.js";
import { K as KAPKARA, P as PATHS, M as MYAPPS } from "./config-ei04y2F2.js";
var root = from_html(`<footer class="footer has-background-dark"><div class="fixed-grid has-3-cols has-1-cols-mobile"><div class="grid"><div class="cell has-text-left has-text-centered-mobile"><a class="icon-text has-color-warning"><span class="icon has-text-grey-light mb-2"><img alt="kapkara logo" width="28px"/></span></a> <br/> <a class="mt-6 has-text-white"> </a></div> <div class="cell has-text-weight-light has-text-centered"><span class="icon has-text-centered has-background-white"><img src="/images/Apps/tree-view.svg" alt="Requirements Management Logo"/></span> <p class="is-size-6 has-text-white"> </p> <p class="is-size-7 has-text-warning"> </p> <p class="mt-6 has-text-grey-lighter"> </p></div> <div class="cell has-text-weight-light has-text-right has-text-centered-mobile"><p class="has-text-grey"> </p> <p class="is-size-7 has-text-white"> </p> <p class="is-size-7 has-text-warning"> </p></div></div></div></footer>`);
function Footer($$anchor, $$props) {
  push($$props, false);
  init();
  var footer = root();
  var div = child(footer);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var a = child(div_2);
  var span = child(a);
  var img = child(span);
  var a_1 = sibling(a, 4);
  var text = child(a_1);
  var div_3 = sibling(div_2, 2);
  var p = sibling(child(div_3), 2);
  var text_1 = child(p);
  var p_1 = sibling(p, 2);
  var text_2 = child(p_1);
  var p_2 = sibling(p_1, 2);
  var text_3 = child(p_2);
  var div_4 = sibling(div_3, 2);
  var p_3 = child(div_4);
  var text_4 = child(p_3);
  var p_4 = sibling(p_3, 2);
  var text_5 = child(p_4);
  var p_5 = sibling(p_4, 2);
  var text_6 = child(p_5);
  template_effect(() => {
    set_attribute(a, "href", KAPKARA.url);
    set_attribute(img, "src", `${PATHS.path_images_prefix}${KAPKARA.logo ?? ""}`);
    set_attribute(a_1, "href", KAPKARA.url);
    set_text(text, KAPKARA.name);
    set_text(text_1, MYAPPS[1].name);
    set_text(text_2, MYAPPS[1].label);
    set_text(text_3, KAPKARA.title);
    set_text(text_4, KAPKARA.version);
    set_text(text_5, KAPKARA.copyright);
    set_text(text_6, KAPKARA.motto);
  });
  append($$anchor, footer);
  pop();
}
export {
  Footer as default
};
//# sourceMappingURL=Footer-Cv9Epzcd.js.map
