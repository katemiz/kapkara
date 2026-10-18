import { p as prop, m as first_child, b as append, t as template_effect, x as deferred_template_effect, j as from_html, g as sibling, $ as $document } from "./app-B8UKlAbY.js";
import { s as slot } from "./slot-DtgNxSws.js";
import { h as head } from "./svelte-head-B6fRcdfC.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import NavBar from "./NavBar-BnFd_LJK.js";
import Footer from "./Footer-D0jJN3Vq.js";
import "./class-iAXZF-Rm.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./PdmIcon-BfD2mC8v.js";
import "./factory-baDv4zVQ.js";
import "./box-D-pQSdgi.js";
import "./settings-Cg7pxvZj.js";
import "./users-CjbPgFWT.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
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
//# sourceMappingURL=Layout-BnKzb0ZZ.js.map
