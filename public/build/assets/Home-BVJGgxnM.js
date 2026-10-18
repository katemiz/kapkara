import { i as init, c as pop, d as push, x as deferred_template_effect, y as each, b as append, k as child, g as sibling, j as from_html, $ as $document, t as template_effect, l as set_text, q as get, A as index } from "./app-B8UKlAbY.js";
import { h as head } from "./svelte-head-B6fRcdfC.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { K as KAPKARA } from "./config-Bq1oq5IH.js";
import "./slot-DtgNxSws.js";
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
import "./KapkaraIcon-CbE4stKV.js";
var root_3 = from_html(`<article class="message  has-background-white"><div class="message-body"><strong> </strong> <br/><br/> </div></article>`);
var root_2 = from_html(`<section class="section"><div class="columns"><div class="column is-5 "><!> <!> <!></div> <div class="column"><!> <figure class="image "><img src="images/PDM/hero2.png" alt="PDM Hero"/></figure></div></div></section>`);
function Home($$anchor, $$props) {
  push($$props, false);
  let content = {
    motto1: "Be Agile",
    motto2: "Run Agile",
    title: "PDM - Product Data Management",
    konular: [
      {
        title: "Data-Driven Success",
        description: "PDM empowers businesses by organizing, tracking, and optimizing product-related data. Success lies in harnessing this data effectively."
      },
      {
        title: "Data Make Sense",
        description: "PDM bridges the gap between raw information and actionable insights, leading to successful product development."
      },
      {
        title: "Order in Your Data World",
        description: "PDM brings structure and clarity, ensuring seamless collaboration across teams."
      }
    ]
  };
  init();
  head("1059wa", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `${KAPKARA.name}, ${KAPKARA.description}`;
    });
  });
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_2();
      var div = child(section);
      var div_1 = child(div);
      var node = child(div_1);
      Title(node, {
        get title() {
          return content.motto1;
        },
        css1: "is-size-1 has-text-weight-light mb-1"
      });
      var node_1 = sibling(node, 2);
      Title(node_1, {
        get title() {
          return content.motto2;
        },
        css1: "is-size-1 has-text-weight-light mt-1"
      });
      var node_2 = sibling(node_1, 2);
      each(node_2, 1, () => content.konular, index, ($$anchor3, konu) => {
        var article = root_3();
        var div_2 = child(article);
        var strong = child(div_2);
        var text = child(strong);
        var text_1 = sibling(strong, 4);
        template_effect(() => {
          set_text(text, get(konu).title);
          set_text(text_1, ` ${get(konu).description ?? ""}`);
        });
        append($$anchor3, article);
      });
      var div_3 = sibling(div_1, 2);
      var node_3 = child(div_3);
      Title(node_3, {
        get title() {
          return content.title;
        },
        css1: "is-size-4 has-text-weight-light mb-6 has-text-right"
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Home as default
};
//# sourceMappingURL=Home-BVJGgxnM.js.map
