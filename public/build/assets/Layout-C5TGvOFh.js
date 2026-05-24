import { p as prop, m as first_child, b as append, t as template_effect, B as deferred_template_effect, j as from_html, g as sibling, $ as $document } from "./app-D1xHItXN.js";
import { s as slot } from "./slot-DtgNxSws.js";
import { h as head } from "./svelte-head-BX5Z-D-s.js";
import { a as set_attribute } from "./attributes-BBrSLZ4L.js";
import NavBar from "./NavBar-C-vrATIV.js";
import Footer from "./Footer-Ys_QHNvW.js";
import "./users-jlfJKlAC.js";
import "./PdmIcon-D6gvppf-.js";
import "./factory-COgsJOzY.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DC8gmDP1.js";
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
//# sourceMappingURL=Layout-C5TGvOFh.js.map
