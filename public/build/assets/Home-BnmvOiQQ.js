import { i as init, c as pop, d as push, B as deferred_template_effect, C as each, b as append, j as from_html, g as sibling, k as child, $ as $document, t as template_effect, l as set_text, q as get, D as index } from "./app-D1xHItXN.js";
import { h as head } from "./svelte-head-BX5Z-D-s.js";
import Layout from "./Layout-C5TGvOFh.js";
import { T as Title } from "./Title-B6GQ1EA4.js";
import { K as KAPKARA } from "./config-ei04y2F2.js";
import "./slot-DtgNxSws.js";
import "./attributes-BBrSLZ4L.js";
import "./NavBar-C-vrATIV.js";
import "./users-jlfJKlAC.js";
import "./PdmIcon-D6gvppf-.js";
import "./factory-COgsJOzY.js";
import "./Footer-Ys_QHNvW.js";
import "./KapkaraIcon-DC8gmDP1.js";
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
  head("1ecpvc1", ($$anchor2) => {
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
//# sourceMappingURL=Home-BnmvOiQQ.js.map
