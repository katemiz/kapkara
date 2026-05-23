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
var root_1 = from_html(`<section class="section min-height-screen"><!> <!> <p class="subtitle"> </p> <p></p> <!> <!></section>`);
function Show($$anchor, $$props) {
  push($$props, true);
  let url = user_derived(() => window.location.origin + "/product-note/" + $$props.product_note.id);
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, {
        get title() {
          return `Product Note ${$$props.product_note.id ?? ""}`;
        },
        subtitle: "Show Properties"
      });
      var node_1 = sibling(node, 2);
      ActionButtons(node_1, {
        get item() {
          return $$props.product_note;
        },
        form_type: "show",
        route_name: "pdm/product-note"
      });
      var p = sibling(node_1, 2);
      var text = child(p);
      var p_1 = sibling(p, 2);
      html(p_1, () => $$props.product_note.remarks, true);
      var node_2 = sibling(p_1, 2);
      FilesList(node_2, {
        get media() {
          return $$props.product_note.files;
        }
      });
      var node_3 = sibling(node_2, 2);
      RecordData(node_3, {
        get item() {
          return $$props.product_note;
        },
        get url() {
          return get(url);
        }
      });
      template_effect(() => set_text(text, $$props.product_note.description_tr));
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Show as default
};
//# sourceMappingURL=Show-Di9RSuIL.js.map
