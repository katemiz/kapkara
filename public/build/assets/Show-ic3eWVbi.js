import { c as pop, d as push, q as get, t as template_effect, b as append, g as sibling, j as from_html, k as child, F as user_derived, l as set_text } from "./app-D1xHItXN.js";
import { h as html } from "./html-D-zttEU3.js";
import Layout from "./Layout-C5TGvOFh.js";
import { R as RecordData } from "./RecordData-CVuLSEqY.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-D_oA6R74.js";
import { T as Title } from "./Title-B6GQ1EA4.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-BX5Z-D-s.js";
import "./attributes-BBrSLZ4L.js";
import "./NavBar-C-vrATIV.js";
import "./users-jlfJKlAC.js";
import "./PdmIcon-D6gvppf-.js";
import "./factory-COgsJOzY.js";
import "./Footer-Ys_QHNvW.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DC8gmDP1.js";
import "./this-DuZu_hTw.js";
import "./browser-DK_Q3MQL.js";
import "./plus-DM0mjF-b.js";
import "./pencil-OM6xfdyP.js";
import "./x-BVyjFpQB.js";
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
//# sourceMappingURL=Show-ic3eWVbi.js.map
