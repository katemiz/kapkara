import { m as first_child, c as append, g as sibling, k as from_html } from "./app-Dy2KnI5v.js";
import { s as slot } from "./slot-DtgNxSws.js";
import NavBar from "./NavBar-CRwixYny.js";
import Footer from "./Footer-CI4uvyrz.js";
import "./attributes-DT5rhWPg.js";
import "./users-PDO1V6S0.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DREvkYhs.js";
import "./user-Cc_Ojfab.js";
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
//# sourceMappingURL=Layout-BuHYv4Ql.js.map
