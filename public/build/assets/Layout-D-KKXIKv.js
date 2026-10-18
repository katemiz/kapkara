import { m as first_child, b as append, j as from_html, g as sibling } from "./app-B8UKlAbY.js";
import { s as slot } from "./slot-DtgNxSws.js";
import NavBar from "./NavBar-DQB8gZzj.js";
import Footer from "./Footer-DLPtpFxf.js";
import "./attributes-BE60HdxF.js";
import "./class-iAXZF-Rm.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./hand-helping-D6zNrn11.js";
import "./users-CjbPgFWT.js";
import "./box-D-pQSdgi.js";
import "./user-CTgn9ZX8.js";
var root = from_html(`<!> <!> <!>`, 1);
function Layout($$anchor, $$props) {
  var fragment = root();
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
//# sourceMappingURL=Layout-D-KKXIKv.js.map
