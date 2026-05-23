import { a as prop, m as first_child, c as append, t as template_effect, B as deferred_template_effect, g as sibling, k as from_html, $ as $document } from "./app-Dy2KnI5v.js";
import { s as slot } from "./slot-DtgNxSws.js";
import { h as head } from "./svelte-head-CaBkEOy0.js";
import { a as set_attribute } from "./attributes-DT5rhWPg.js";
import NavBar from "./NavBar-udzgxxP8.js";
import Footer from "./Footer-DuL1uyT_.js";
import "./users-PDO1V6S0.js";
import "./PdmIcon-lRZI65-c.js";
import "./factory-W8PTHOQY.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DREvkYhs.js";
var root_1 = from_html(`<link rel="icon" type="image/x-icon"/>`);
var root = from_html(`<!> <!> <!>`, 1);
function Layout($$anchor, $$props) {
  let title = prop($$props, "title", 8, "PDM - Product Data Management");
  let favicon = prop($$props, "favicon", 8, "/images/kapkara-favicon.ico");
  var fragment = root();
  head("caknvs", ($$anchor2) => {
    var link = root_1();
    template_effect(() => set_attribute(link, "href", favicon()));
    deferred_template_effect(() => {
      $document.title = `${title() ?? ""} | kapkara`;
    });
    append($$anchor2, link);
  });
  var node = first_child(fragment);
  NavBar(node, {});
  var node_1 = sibling(node, 2);
  slot(node_1, $$props, "default", {});
  var node_2 = sibling(node_1, 2);
  Footer(node_2, {});
  append($$anchor, fragment);
}
export {
  Layout as default
};
//# sourceMappingURL=Layout-Chg3CnSH.js.map
