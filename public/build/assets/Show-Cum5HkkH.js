import { p as push, q as get, t as template_effect, c as append, h as child, g as sibling, d as pop, F as user_derived, k as from_html, l as set_text } from "./app-Dy2KnI5v.js";
import { h as html } from "./html-BLHH7K9b.js";
import Layout from "./Layout-Chg3CnSH.js";
import { R as RecordData } from "./RecordData-DUEvYUsr.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-uATdZ-ko.js";
import { T as Title } from "./Title-DLFn2CKD.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-CaBkEOy0.js";
import "./attributes-DT5rhWPg.js";
import "./NavBar-udzgxxP8.js";
import "./users-PDO1V6S0.js";
import "./PdmIcon-lRZI65-c.js";
import "./factory-W8PTHOQY.js";
import "./Footer-DuL1uyT_.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DREvkYhs.js";
import "./this-BKinVkk9.js";
import "./browser-CAhxvUdT.js";
import "./plus-BSXuxLRi.js";
import "./pencil-CuRcUfVZ.js";
import "./x-8ALEWnlk.js";
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
//# sourceMappingURL=Show-Cum5HkkH.js.map
