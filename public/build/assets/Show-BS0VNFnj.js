import { c as pop, d as push, q as get, t as template_effect, b as append, g as sibling, j as from_html, k as child, F as user_derived, l as set_text } from "./app-DmZvep12.js";
import { h as html } from "./html-DrC0gcym.js";
import Layout from "./Layout-BvwSG3qv.js";
import { R as RecordData } from "./RecordData-DYqTFctL.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-etvIfIiY.js";
import { T as Title } from "./Title-CdSK7QuY.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-Bf-10Ive.js";
import "./attributes-B9LAyNIy.js";
import "./NavBar-G195NlxZ.js";
import "./users-DktRnX1j.js";
import "./PdmIcon-6wom0yWG.js";
import "./factory-BAoKQd0v.js";
import "./Footer-Dlho2n6k.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-Dn11Qf-8.js";
import "./this-CCnJv5FU.js";
import "./browser-CsPBdS4r.js";
import "./plus-H0BSzWoD.js";
import "./pencil-BH3Zg3nn.js";
import "./x-C40upeuH.js";
var root_1 = from_html(`<section class="section min-height-screen"><!> <!> <p class="subtitle"> </p> <p> </p> <p></p> <!> <!></section>`);
function Show($$anchor, $$props) {
  push($$props, true);
  let url = user_derived(() => window.location.origin + "/standard/" + $$props.standard.id);
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, { title: "Standard", subtitle: "Show Properties" });
      var node_1 = sibling(node, 2);
      ActionButtons(node_1, {
        get item() {
          return $$props.standard;
        },
        form_type: "show",
        route_name: "pdm/standard"
      });
      var p = sibling(node_1, 2);
      var text = child(p);
      var p_1 = sibling(p, 2);
      var text_1 = child(p_1);
      var p_2 = sibling(p_1, 2);
      html(p_2, () => $$props.standard.remarks, true);
      var node_2 = sibling(p_2, 2);
      FilesList(node_2, {
        get media() {
          return $$props.standard.files;
        }
      });
      var node_3 = sibling(node_2, 2);
      RecordData(node_3, {
        get item() {
          return $$props.standard;
        },
        get url() {
          return get(url);
        }
      });
      template_effect(() => {
        set_text(text, `${$$props.standard.organisation ?? ""} ${$$props.standard.standard_number ?? ""}`);
        set_text(text_1, $$props.standard.description);
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
//# sourceMappingURL=Show-BS0VNFnj.js.map
