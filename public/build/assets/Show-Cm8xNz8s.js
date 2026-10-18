import { c as pop, d as push, q as get, t as template_effect, b as append, k as child, g as sibling, j as from_html, B as user_derived, l as set_text } from "./app-B8UKlAbY.js";
import { h as html } from "./html-D3C1hjzf.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { R as RecordData } from "./RecordData-DwKSM28g.js";
import { F as FilesList } from "./FilesList-BRmhjswN.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { A as ActionButtons } from "./ActionButtons-DCszl-6F.js";
import "./DeleteButton-BLTAYatj.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-B6fRcdfC.js";
import "./attributes-BE60HdxF.js";
import "./class-iAXZF-Rm.js";
import "./NavBar-BnFd_LJK.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./PdmIcon-BfD2mC8v.js";
import "./factory-baDv4zVQ.js";
import "./box-D-pQSdgi.js";
import "./settings-Cg7pxvZj.js";
import "./users-CjbPgFWT.js";
import "./Footer-D0jJN3Vq.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./this-DBviCOsL.js";
import "./browser-DwfGhph4.js";
import "./paperclip-4sW0jNqk.js";
import "./table-of-contents-CyZgqQSp.js";
import "./plus-CnOy2VL6.js";
import "./pencil-BgjkhNtP.js";
import "./save-CwmUOwvD.js";
import "./x-Cg9sN51b.js";
var root_1 = from_html(`<section class="section min-height-screen"><!> <!> <p class="subtitle"> </p> <div></div> <!> <!></section>`);
function Show($$anchor, $$props) {
  push($$props, true);
  let url = user_derived(() => window.location.origin + "/document/" + $$props.crequest.id);
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, { title: "Change Request", subtitle: "Show Properties" });
      var node_1 = sibling(node, 2);
      ActionButtons(node_1, {
        get item() {
          return $$props.crequest;
        },
        form_type: "show",
        route_name: "pdm/crequest"
      });
      var p = sibling(node_1, 2);
      var text = child(p);
      var div = sibling(p, 2);
      html(div, () => $$props.crequest.description, true);
      var node_2 = sibling(div, 2);
      FilesList(node_2, {
        get media() {
          return $$props.crequest.files;
        }
      });
      var node_3 = sibling(node_2, 2);
      RecordData(node_3, {
        get item() {
          return $$props.crequest;
        },
        get url() {
          return get(url);
        }
      });
      template_effect(() => set_text(text, $$props.crequest.title));
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Show as default
};
//# sourceMappingURL=Show-Cm8xNz8s.js.map
