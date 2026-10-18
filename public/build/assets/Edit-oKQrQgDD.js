import { c as pop, d as push, f as setup_stores, m as first_child, b as append, g as sibling, j as from_html } from "./app-B8UKlAbY.js";
import SuperAdminLayout from "./SuperAdminLayout-B2Ke_fNn.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import Form from "./Form-BwYjsY2h.js";
import "./slot-DtgNxSws.js";
import "./NavBar-DQB8gZzj.js";
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
import "./Footer-DLPtpFxf.js";
import "./DashboardMenu-OW1IrEaS.js";
import "./link-Z_9ghKzW.js";
import "./key-CyqpSk3e.js";
import "./input-D6UcyCrD.js";
var root_1 = from_html(`<!> <!>`, 1);
function Edit($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  SuperAdminLayout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Title(node, {
        title: "Edit Organization",
        subtitle: "Detailed properties of the organization"
      });
      var node_1 = sibling(node, 2);
      Form(node_1, {
        get organization() {
          return $$props.organization;
        },
        isEditing: true
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
export {
  Edit as default
};
//# sourceMappingURL=Edit-oKQrQgDD.js.map
