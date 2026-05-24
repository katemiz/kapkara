import { m as first_child, b as append, j as from_html, g as sibling } from "./app-D1xHItXN.js";
import { s as slot } from "./slot-DtgNxSws.js";
import NavBar from "./NavBar-74bJ4ZE_.js";
import Footer from "./Footer-CYVATjjz.js";
import "./attributes-BBrSLZ4L.js";
import "./users-jlfJKlAC.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DC8gmDP1.js";
import "./user-DCzES_T0.js";
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
//# sourceMappingURL=Layout-B2EaWUEV.js.map
