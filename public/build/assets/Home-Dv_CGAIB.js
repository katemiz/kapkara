import { ab as effect, y as each, b as append, k as child, j as from_html, g as sibling, $ as $document, q as get, A as index, t as template_effect, l as set_text } from "./app-B8UKlAbY.js";
import { h as head } from "./svelte-head-B6fRcdfC.js";
import Layout from "./Layout-Bcgrkn9b.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import "./slot-DtgNxSws.js";
import "./NavBar-D_olvhZC.js";
import "./attributes-BE60HdxF.js";
import "./class-iAXZF-Rm.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./config-Bq1oq5IH.js";
import "./key-CyqpSk3e.js";
import "./factory-baDv4zVQ.js";
import "./hand-helping-D6zNrn11.js";
import "./users-CjbPgFWT.js";
import "./box-D-pQSdgi.js";
import "./user-CTgn9ZX8.js";
import "./Footer-BqURKKll.js";
var root_4 = from_html(`<li> </li>`);
var root_3 = from_html(`<div class="cell notification content"><!> <ul></ul></div>`);
var root_2 = from_html(`<section class="section container"><div class="fixed-grid"><div class="grid"><div class="cell"><h1 class="title has-text-weight-light is-size-1 has-text-left">Requirements Stack</h1> <img src="/images/Requirements/AppHeroReq.svg" alt="Logo"/></div> <div class="cell"><!> <p class="mb-4 is-size-5">This toolkit focuses on the relationships between datasets of The Requirements Flow letting you extract all relations between nodes.</p> <div class="fixed-grid has-1-cols has-1-cols-mobile"><div class="grid"></div></div></div></div></div></section>`);
function Home($$anchor) {
  let words = {
    requirements: {
      label: "Requirements",
      li: [
        "Write requirements content",
        "Link with MOCs and POCs",
        "Link with products"
      ]
    },
    mocs: {
      label: "Means of Compliances (MoCs)",
      li: ["List of MoCs", "Define MoC"]
    },
    pocs: {
      label: "Proof of Compliances (PoCs)",
      li: ["List of POCs", "Define POC"]
    },
    tests: { label: "Tests", li: ["List of Tests", "Define Test"] },
    export: {
      label: "Export/Reporting/Status",
      li: ["Export Data", "Generate Reports", "View Status"]
    }
  };
  head("1sbgb8y", ($$anchor2) => {
    effect(() => {
      $document.title = "The Toolkit That Connects";
    });
  });
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_2();
      var div = child(section);
      var div_1 = child(div);
      var div_2 = sibling(child(div_1), 2);
      var node = child(div_2);
      Title(node, { title: "The Toolkit That Connects" });
      var div_3 = sibling(node, 4);
      var div_4 = child(div_3);
      each(div_4, 5, () => Object.keys(words), index, ($$anchor3, key) => {
        var div_5 = root_3();
        var node_1 = child(div_5);
        Title(node_1, {
          get subtitle() {
            return words[get(key)].label;
          },
          css2: "has-text-danger-dark has-text-weight-light"
        });
        var ul = sibling(node_1, 2);
        each(ul, 5, () => words[get(key)].li, index, ($$anchor4, li) => {
          var li_1 = root_4();
          var text = child(li_1);
          template_effect(() => set_text(text, get(li)));
          append($$anchor4, li_1);
        });
        append($$anchor3, div_5);
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
}
export {
  Home as default
};
//# sourceMappingURL=Home-Dv_CGAIB.js.map
