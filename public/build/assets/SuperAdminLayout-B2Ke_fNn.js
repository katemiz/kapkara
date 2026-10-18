import { m as first_child, t as template_effect, b as append, c as pop, d as push, f as setup_stores, l as set_text, j as from_html, k as child, s as store_get, H as page, g as sibling, q as get, B as user_derived } from "./app-B8UKlAbY.js";
import { s as slot } from "./slot-DtgNxSws.js";
import NavBar from "./NavBar-DQB8gZzj.js";
import Footer from "./Footer-DLPtpFxf.js";
import { D as DashboardMenu } from "./DashboardMenu-OW1IrEaS.js";
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
import "./link-Z_9ghKzW.js";
import "./key-CyqpSk3e.js";
var root = from_html(`<!> <div class="container is-fluid"><div class="fixed-grid has-8-cols has-1-cols-mobile"><div class="grid is-gapless"><div class="cell is-col-span-2 is-col-span-1-mobile has-background-ter"><!></div> <div class="cell is-col-span-6 p-6"><!></div></div></div></div> <!>`, 1);
function SuperAdminLayout($$anchor, $$props) {
  push($$props, true);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let user = user_derived(() => $page().props.auth?.user);
  var fragment = root();
  var node = first_child(fragment);
  NavBar(node, {});
  var text = sibling(node);
  var div = sibling(text);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var node_1 = child(div_3);
  DashboardMenu(node_1, {
    get user() {
      return get(user);
    }
  });
  var div_4 = sibling(div_3, 2);
  var node_2 = child(div_4);
  slot(node_2, $$props, "default", {});
  var node_3 = sibling(div, 2);
  Footer(node_3, {});
  template_effect(($0) => set_text(text, ` ${$0 ?? ""} `), [() => console.log($page().url)]);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  SuperAdminLayout as default
};
//# sourceMappingURL=SuperAdminLayout-B2Ke_fNn.js.map
