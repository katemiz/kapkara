import { m as first_child, b as append, j as from_html, g as sibling } from "./app-B3TC2Fcx.js";
import { s as slot } from "./slot-DtgNxSws.js";
import NavBar from "./NavBar-DD3fqZb6.js";
import Footer from "./Footer-DnQo9cwn.js";
import "./attributes-BmlKk72Z.js";
import "./users-C3g1dnqi.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-BA9CIx4Y.js";
import "./user-YxiIyKtm.js";
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
//# sourceMappingURL=Layout-DnHnNzJQ.js.map
