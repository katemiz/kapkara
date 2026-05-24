import { i as init, t as template_effect, b as append, c as pop, d as push, j as from_html, k as child, g as sibling, l as set_text } from "./app-D1xHItXN.js";
import { a as set_attribute } from "./attributes-BBrSLZ4L.js";
import { K as KAPKARA } from "./config-ei04y2F2.js";
import { P as PdmIcon, a as app_config } from "./PdmIcon-D6gvppf-.js";
import { K as KapkaraIcon } from "./KapkaraIcon-DC8gmDP1.js";
var root = from_html(`<footer class="footer has-background-dark" id="footer"><div class="columns has-text-white"><div class="column has-text-centered-mobile"><!> <br/> <a class="has-text-weight-light has-text-white"> </a></div> <div class="column has-text-centered has-text-centered-mobile"><!> <p class="has-text-weight-light mt-4"> </p> <p class="has-text-weight-light has-text-warning mb-6"> </p> <p class="has-text-weight-light has-text-grey"> </p> <p class="has-text-weight-light is-size-7 mt-4"> </p> <img src="/images/laravel.svg" width="28px" alt="Company Icon"/> <img src="/images/svelte.svg" width="28px" alt="Company Icon"/></div> <div class="column has-text-right has-text-centered-mobile"><p> </p> <p class="is-size-7 has-text-warning"> </p></div></div></footer>`);
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
  var node_1 = child(div_2);
  PdmIcon(node_1, { color: "white " });
  var p = sibling(node_1, 2);
  var text_1 = child(p);
  var p_1 = sibling(p, 2);
  var text_2 = child(p_1);
  var p_2 = sibling(p_1, 2);
  var text_3 = child(p_2);
  var p_3 = sibling(p_2, 2);
  var text_4 = child(p_3);
  var div_3 = sibling(div_2, 2);
  var p_4 = child(div_3);
  var text_5 = child(p_4);
  var p_5 = sibling(p_4, 2);
  var text_6 = child(p_5);
  template_effect(() => {
    set_attribute(a, "href", KAPKARA.url);
    set_text(text, KAPKARA.name);
    set_text(text_1, app_config.code);
    set_text(text_2, app_config.title);
    set_text(text_3, app_config.description);
    set_text(text_4, `V${app_config.version}`);
    set_text(text_5, KAPKARA.copyright);
    set_text(text_6, KAPKARA.motto);
  });
  append($$anchor, footer);
  pop();
}
export {
  Footer as default
};
//# sourceMappingURL=Footer-Ys_QHNvW.js.map
