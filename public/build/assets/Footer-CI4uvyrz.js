import { p as push, i as init, t as template_effect, c as append, d as pop, h as child, g as sibling, k as from_html, l as set_text } from "./app-Dy2KnI5v.js";
import { a as set_attribute } from "./attributes-DT5rhWPg.js";
import { K as KAPKARA } from "./config-ei04y2F2.js";
import { K as KapkaraIcon } from "./KapkaraIcon-DREvkYhs.js";
var root = from_html(`<footer class="footer has-background-dark" id="footer"><div class="columns has-text-white"><div class="column has-text-centered-mobile"><!> <br/> <a class="has-text-weight-light has-text-white"> </a></div> <div class="column"><p class="has-text-weight-light has-text-centered has-text-centered-mobile"> </p> <p class="has-text-weight-light has-text-centered has-text-centered-mobile is-size-7"> </p> <p class="has-text-centered has-text-centered-mobile has-text-grey is-size-6">Laravel-Inertia-Svelte</p></div> <div class="column"><p class="has-text-weight-light has-text-right has-text-centered-mobile"> </p> <p class="has-text-weight-light has-text-right has-text-centered-mobile
          is-size-7"> </p></div></div></footer>`);
function Footer($$anchor, $$props) {
  push($$props, false);
  init();
  var footer = root();
  var div = child(footer);
  var div_1 = child(div);
  var node = child(div_1);
  KapkaraIcon(node, {});
  var a = sibling(node, 4);
  var text = child(a);
  var div_2 = sibling(div_1, 2);
  var p = child(div_2);
  var text_1 = child(p);
  var p_1 = sibling(p, 2);
  var text_2 = child(p_1);
  var div_3 = sibling(div_2, 2);
  var p_2 = child(div_3);
  var text_3 = child(p_2);
  var p_3 = sibling(p_2, 2);
  var text_4 = child(p_3);
  template_effect(() => {
    set_attribute(a, "href", KAPKARA.url);
    set_text(text, KAPKARA.name);
    set_text(text_1, KAPKARA.title);
    set_text(text_2, KAPKARA.version);
    set_text(text_3, KAPKARA.copyright);
    set_text(text_4, KAPKARA.motto);
  });
  append($$anchor, footer);
  pop();
}
export {
  Footer as default
};
//# sourceMappingURL=Footer-CI4uvyrz.js.map
