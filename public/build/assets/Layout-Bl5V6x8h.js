import { p as prop, i as init, m as first_child, t as template_effect, b as append, c as pop, d as push, f as setup_stores, u as untrack, l as set_text, j as from_html, g as sibling, s as store_get, H as page, x as deferred_template_effect, $ as $document } from "./app-B8UKlAbY.js";
import { s as slot } from "./slot-DtgNxSws.js";
import { h as head } from "./svelte-head-B6fRcdfC.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import NavBar from "./NavBar-DCrHXDJA.js";
import Footer from "./Footer-CxnNT-cn.js";
import "./class-iAXZF-Rm.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./settings-Cg7pxvZj.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
var root_1 = from_html(`<link rel="icon" type="image/x-icon"/>`);
var root = from_html(` <!> <!> <!>`, 1);
function Layout($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let title = prop($$props, "title", 8, "eYonetici - Product Data Management");
  let favicon = prop($$props, "favicon", 8, "/images/kapkara-favicon.ico");
  init();
  var fragment = root();
  head("1r4xyvr", ($$anchor2) => {
    var link = root_1();
    template_effect(() => set_attribute(link, "href", favicon()));
    deferred_template_effect(() => {
      $document.title = `${title() ?? ""} | kapkara`;
    });
    append($$anchor2, link);
  });
  var text = first_child(fragment);
  var node = sibling(text);
  NavBar(node, {});
  var node_1 = sibling(node, 2);
  slot(node_1, $$props, "default", {});
  var node_2 = sibling(node_1, 2);
  Footer(node_2, {});
  template_effect(($0) => set_text(text, `${$0 ?? ""} `), [
    () => ($page(), untrack(() => console.log("Current page props:", $page().props)))
  ]);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Layout as default
};
//# sourceMappingURL=Layout-Bl5V6x8h.js.map
