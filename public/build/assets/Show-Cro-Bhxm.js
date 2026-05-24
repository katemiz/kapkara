import { c as pop, d as push, q as get, t as template_effect, b as append, g as sibling, j as from_html, k as child, F as user_derived, l as set_text } from "./app-B3TC2Fcx.js";
import { h as html } from "./html-D9w_x1Sn.js";
import Layout from "./Layout-DEJXo2nf.js";
import { R as RecordData } from "./RecordData-DruPRpVP.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-C4MGSatd.js";
import { T as Title } from "./Title-BswqQN3w.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-DS_2IATg.js";
import "./attributes-BmlKk72Z.js";
import "./NavBar-Bug_ySFU.js";
import "./users-C3g1dnqi.js";
import "./PdmIcon-nQqjGdVH.js";
import "./factory-XMGy52MX.js";
import "./Footer-CZBn2Ryz.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-BA9CIx4Y.js";
import "./this-CSRdWBRS.js";
import "./browser-CpNLs4YQ.js";
import "./plus-mvHohXhy.js";
import "./pencil-BrvL2bPB.js";
import "./x-CZBb4wCq.js";
var root_1 = from_html(`<section class="section min-height-screen"><!> <!> <p class="subtitle"> </p> <p> </p> <p></p> <!> <!></section>`);
function Show($$anchor, $$props) {
  push($$props, true);
  let url = user_derived(() => window.location.origin + "/document/" + $$props.document.id);
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, { title: "Documents", subtitle: "Show Properties" });
      var node_1 = sibling(node, 2);
      ActionButtons(node_1, {
        get item() {
          return $$props.document;
        },
        form_type: "show",
        route_name: "pdm/document"
      });
      var p = sibling(node_1, 2);
      var text = child(p);
      var p_1 = sibling(p, 2);
      var text_1 = child(p_1);
      var p_2 = sibling(p_1, 2);
      html(p_2, () => $$props.document.remarks, true);
      var node_2 = sibling(p_2, 2);
      FilesList(node_2, {
        get media() {
          return $$props.document.files;
        }
      });
      var node_3 = sibling(node_2, 2);
      RecordData(node_3, {
        get item() {
          return $$props.document;
        },
        get url() {
          return get(url);
        }
      });
      template_effect(() => {
        set_text(text, `${$$props.document.organisation ?? ""}
            ${$$props.document.standard_number ?? ""}`);
        set_text(text_1, $$props.document.description);
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Show as default
};
//# sourceMappingURL=Show-Cro-Bhxm.js.map
