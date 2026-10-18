import { d as push, C as spread_props, z as comment, m as first_child, b as append, c as pop, D as rest_props, E as noop, f as setup_stores, g as sibling, a as if_block, q as get, k as child, t as template_effect, n as delegated, B as user_derived, v as delegate, j as from_html, l as set_text } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import SuperAdminLayout from "./SuperAdminLayout-B2Ke_fNn.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { R as RecordData } from "./RecordData-DwKSM28g.js";
import { B as Building } from "./DashboardMenu-OW1IrEaS.js";
import { L as Link } from "./link-Z_9ghKzW.js";
import { P as Pencil } from "./pencil-BgjkhNtP.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
import "./class-iAXZF-Rm.js";
import "./slot-DtgNxSws.js";
import "./NavBar-DQB8gZzj.js";
import "./log-out-C7YwExAR.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./hand-helping-D6zNrn11.js";
import "./users-CjbPgFWT.js";
import "./box-D-pQSdgi.js";
import "./user-CTgn9ZX8.js";
import "./svelte-element-Ct4olbtg.js";
import "./Footer-DLPtpFxf.js";
import "./key-CyqpSk3e.js";
import "./this-DBviCOsL.js";
import "./browser-DwfGhph4.js";
function Trash_2($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M10 11v6" }],
    ["path", { "d": "M14 11v6" }],
    ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ];
  Icon($$anchor, spread_props({ name: "trash-2" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
var root_2 = from_html(`<div class="content"> <a target="_blank">Open</a></div>`);
var root_3 = from_html(`<span class="icon"><!></span>`);
var root_1 = from_html(`<!> <div class="card"><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-64x64"><!></figure></div> <div class="media-content"><p class="title is-4"> </p> <p class="subtitle is-6"> </p></div></div> <!> <footer class="card-footer"><!> <button class="button is-danger is-light card-footer-item"><span class="icon"><!></span></button></footer> <!></div></div>`, 1);
function Show($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  function deleteOrg(id) {
    if (confirm("Are you sure you want to delete this organization?")) {
      router.delete(`/admin/organizations/${id}`);
    }
  }
  SuperAdminLayout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Title(node, {
        title: "Detailed Properties",
        subtitle: "Detailed properties of the organization"
      });
      var div = sibling(node, 2);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var figure = child(div_3);
      var node_1 = child(figure);
      Building(node_1, {});
      var div_4 = sibling(div_3, 2);
      var p = child(div_4);
      var text = child(p);
      var p_1 = sibling(p, 2);
      var text_1 = child(p_1);
      var node_2 = sibling(div_2, 2);
      {
        var consequent = ($$anchor3) => {
          var div_5 = root_2();
          var text_2 = child(div_5);
          var a = sibling(text_2);
          template_effect(() => {
            set_text(text_2, `Domain: ${$$props.organization.domain ?? ""} `);
            set_attribute(a, "href", `https://${$$props.organization.domain}`);
          });
          append($$anchor3, div_5);
        };
        if_block(node_2, ($$render) => {
          if ($$props.organization.domain) $$render(consequent);
        });
      }
      var footer = sibling(node_2, 2);
      var node_3 = child(footer);
      {
        let $0 = user_derived(() => `/admin/organizations/${$$props.organization.id}/edit`);
        Link(node_3, {
          get href() {
            return get($0);
          },
          class: "button is-info is-light card-footer-item",
          children: ($$anchor3, $$slotProps2) => {
            var span = root_3();
            var node_4 = child(span);
            Pencil(node_4, { size: "16" });
            append($$anchor3, span);
          },
          $$slots: { default: true }
        });
      }
      var button = sibling(node_3, 2);
      var span_1 = child(button);
      var node_5 = child(span_1);
      Trash_2(node_5, { size: "16" });
      var node_6 = sibling(footer, 2);
      {
        let $0 = user_derived(() => $$props.organization.is_active ? "Active" : "Inactive");
        RecordData(node_6, {
          get item() {
            return $$props.organization;
          },
          url: "asf",
          get status() {
            return get($0);
          }
        });
      }
      template_effect(() => {
        set_text(text, $$props.organization.name);
        set_text(text_1, $$props.organization.slug);
      });
      delegated("click", button, () => deleteOrg($$props.organization.id));
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
delegate(["click"]);
export {
  Show as default
};
//# sourceMappingURL=Show-D4tSMThK.js.map
