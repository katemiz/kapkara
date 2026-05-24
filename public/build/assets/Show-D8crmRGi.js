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
//# sourceMappingURL=Show-D8crmRGi.js.map
