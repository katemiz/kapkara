import { p as prop, c as pop, d as push, f as setup_stores, q as get, B as user_derived, s as store_get, H as page } from "./app-B8UKlAbY.js";
import SuperAdminLayout from "./SuperAdminLayout-B2Ke_fNn.js";
import Dashboard from "./Dashboard-DJ5wEKRZ.js";
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
import "./eye-vr6OZr3k.js";
function Home($$anchor, $$props) {
  push($$props, true);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let user = user_derived(() => $page().props.auth?.user);
  prop($$props, "title", 3, "Super Admin");
  SuperAdminLayout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      Dashboard($$anchor2, {
        get user() {
          return get(user);
        },
        get menuItems() {
          return $$props.menuItems;
        }
      });
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
export {
  Home as default
};
//# sourceMappingURL=Home-BdCkEbZ_.js.map
