import { r as state, w as proxy, c as pop, d as push, f as setup_stores, m as first_child, b as append, k as child, y as each, e as event, q as get, g as sibling, j as from_html, o as set, t as template_effect, l as set_text, B as user_derived, A as index, I as router } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import { b as bind_value } from "./input-D6UcyCrD.js";
import SuperAdminLayout from "./SuperAdminLayout-B2Ke_fNn.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { L as Link } from "./link-Z_9ghKzW.js";
import { P as Plus } from "./plus-CnOy2VL6.js";
import { S as Search } from "./search-DeW-Ui_G.js";
import { P as Pencil } from "./pencil-BgjkhNtP.js";
import "./slot-DtgNxSws.js";
import "./NavBar-DQB8gZzj.js";
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
import "./key-CyqpSk3e.js";
var root_2 = from_html(`<span class="icon"><!></span> <span>New Organization</span>`, 1);
var root_4 = from_html(`<span class="icon"><!></span>`);
var root_3 = from_html(`<tr><td><a> </a></td><td><code> </code></td><td><span> </span></td><td class="has-text-right"><div class="buttons are-small is-justify-content-flex-end"><!></div></td></tr>`);
var root_1 = from_html(`<!> <div class="fixed-grid has-2-cols"><div class="grid"><div class="cell"><!></div> <div class="cell"><form class="mb-4"><div class="field has-addons"><div class="control is-expanded"><input class="input" type="text" placeholder="Search organizations..."/></div> <div class="control"><button type="submit" class="button is-info"><span class="icon"><!></span></button></div></div></form></div></div></div> <div class="table-container mt-28"><table class="table is-fullwidth is-striped is-hoverable"><thead><tr><th>Name</th><th>Slug</th><th>Status</th><th class="has-text-right">Actions</th></tr></thead><tbody></tbody></table></div>`, 1);
function Index($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  let search = state(proxy($$props.filters.search || ""));
  function handleSearch(e) {
    e.preventDefault();
    router.get("/admin/organizations", { search: get(search) }, { preserveState: true });
  }
  SuperAdminLayout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Title(node, {
        title: "Organizations [Companies]",
        subtitle: "List of All Organizations/Companies"
      });
      var div = sibling(node, 2);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var node_1 = child(div_2);
      Link(node_1, {
        href: "/admin/organizations/create",
        class: "button is-primary",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2();
          var span = first_child(fragment_2);
          var node_2 = child(span);
          Plus(node_2, { size: "18" });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var div_3 = sibling(div_2, 2);
      var form = child(div_3);
      var div_4 = child(form);
      var div_5 = child(div_4);
      var input = child(div_5);
      var div_6 = sibling(div_5, 2);
      var button = child(div_6);
      var span_1 = child(button);
      var node_3 = child(span_1);
      Search(node_3, { size: "18" });
      var div_7 = sibling(div, 2);
      var table = child(div_7);
      var tbody = sibling(child(table));
      each(tbody, 21, () => $$props.organizations.data, index, ($$anchor3, org) => {
        var tr = root_3();
        var td = child(tr);
        var a = child(td);
        var text = child(a);
        var td_1 = sibling(td);
        var code = child(td_1);
        var text_1 = child(code);
        var td_2 = sibling(td_1);
        var span_2 = child(td_2);
        var text_2 = child(span_2);
        var td_3 = sibling(td_2);
        var div_8 = child(td_3);
        var node_4 = child(div_8);
        {
          let $0 = user_derived(() => `/admin/organizations/${get(org).id}/edit`);
          Link(node_4, {
            get href() {
              return get($0);
            },
            class: "button is-info is-light",
            children: ($$anchor4, $$slotProps2) => {
              var span_3 = root_4();
              var node_5 = child(span_3);
              Pencil(node_5, { size: "16" });
              append($$anchor4, span_3);
            },
            $$slots: { default: true }
          });
        }
        template_effect(() => {
          set_attribute(a, "href", `/admin/organizations/${get(org).id}`);
          set_text(text, get(org).name);
          set_text(text_1, get(org).slug);
          set_class(span_2, 1, `tag is-${get(org).is_active ? "success" : "danger"}`);
          set_text(text_2, get(org).is_active ? "Active" : "Inactive");
        });
        append($$anchor3, tr);
      });
      event("submit", form, handleSearch);
      bind_value(input, () => get(search), ($$value) => set(search, $$value));
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
export {
  Index as default
};
//# sourceMappingURL=Index-VdkMqjPS.js.map
