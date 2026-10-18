import { i as init, t as template_effect, b as append, c as pop, d as push, j as from_html, g as sibling, k as child, l as set_text } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import { K as KAPKARA } from "./config-Bq1oq5IH.js";
import { K as KapkaraIcon } from "./KapkaraIcon-CbE4stKV.js";
import "./class-iAXZF-Rm.js";
const app_config = {
  title: "eYönetici",
  description: "Bina yönetimi için sanal çözüm",
  version: "V1.1",
  motto: "Akıllı Yönetici, Akıllı Uygulama",
  copyright: "© Her Hakkı Mahfuzdur",
  copyright_year: "2022"
};
var root = from_html(`<footer class="footer has-background-light"><div class="columns"><div class="column has-text-left has-text-centered-mobile"><!> <br/> <a class="has-text-weight-light"> </a> <p class="has-text-weight-light is-size-7"> </p></div> <div class="column has-text-centered has-text-centered-mobile"><p class="mb-4 is-size-6"> </p> <p class="has-text-grey"> </p> <p> </p></div> <div class="column has-text-right has-text-centered-mobile"> <br/> <br/> <span class="is-size-7 has-text-grey"> </span></div></div></footer>`);
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
  var p = sibling(a, 2);
  var text_1 = child(p);
  var div_2 = sibling(div_1, 2);
  var p_1 = child(div_2);
  var text_2 = child(p_1);
  var p_2 = sibling(p_1, 2);
  var text_3 = child(p_2);
  var p_3 = sibling(p_2, 2);
  var text_4 = child(p_3);
  var div_3 = sibling(div_2, 2);
  var text_5 = child(div_3);
  var text_6 = sibling(text_5, 2);
  var span = sibling(text_6, 3);
  var text_7 = child(span);
  template_effect(() => {
    set_attribute(a, "href", KAPKARA.url);
    set_text(text, KAPKARA.name);
    set_text(text_1, KAPKARA.motto);
    set_text(text_2, app_config.motto);
    set_text(text_3, app_config.description);
    set_text(text_4, app_config.title);
    set_text(text_5, app_config.copyright_year);
    set_text(text_6, ` ${app_config.copyright}`);
    set_text(text_7, app_config.version);
  });
  append($$anchor, footer);
  pop();
}
export {
  Footer as default
};
//# sourceMappingURL=Footer-CxnNT-cn.js.map
