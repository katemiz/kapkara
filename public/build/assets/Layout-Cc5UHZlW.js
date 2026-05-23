import { m as first_child, b as append, j as from_html, g as sibling } from "./app-DmZvep12.js";
import { s as slot } from "./slot-DtgNxSws.js";
import NavBar from "./NavBar-Vq8UgN2l.js";
import Footer from "./Footer-DuPOFG8e.js";
import "./attributes-B9LAyNIy.js";
import "./users-DktRnX1j.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-Dn11Qf-8.js";
import "./user-BrPL1P_t.js";
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
//# sourceMappingURL=Layout-Cc5UHZlW.js.map
