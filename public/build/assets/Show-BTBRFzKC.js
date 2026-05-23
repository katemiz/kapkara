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
var root_1 = from_html(`<section class="section min-height-screen"><!> <!> <p class="subtitle"> </p> <div></div> <!> <!></section>`);
function Show($$anchor, $$props) {
  push($$props, true);
  let url = user_derived(() => window.location.origin + "/ecn/" + $$props.ecn.id);
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, {
        title: "Engineering Change Notice",
        subtitle: "Show ECN Properties"
      });
      var node_1 = sibling(node, 2);
      ActionButtons(node_1, {
        get item() {
          return $$props.ecn;
        },
        form_type: "show",
        route_name: "pdm/ecn"
      });
      var p = sibling(node_1, 2);
      var text = child(p);
      var div = sibling(p, 2);
      html(div, () => $$props.ecn.description, true);
      var node_2 = sibling(div, 2);
      FilesList(node_2, {
        get media() {
          return $$props.ecn.files;
        }
      });
      var node_3 = sibling(node_2, 2);
      RecordData(node_3, {
        get item() {
          return $$props.ecn;
        },
        get url() {
          return get(url);
        }
      });
      template_effect(() => set_text(text, $$props.ecn.title));
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Show as default
};
//# sourceMappingURL=Show-BTBRFzKC.js.map
