import { i as init, c as pop, d as push, f as setup_stores, x as deferred_template_effect, a as if_block, b as append, j as from_html, $ as $document, k as child, t as template_effect, l as set_text, s as store_get, H as page } from "./app-B8UKlAbY.js";
import { h as head } from "./svelte-head-B6fRcdfC.js";
import Layout from "./Layout-D-KKXIKv.js";
import { K as KAPKARA } from "./config-Bq1oq5IH.js";
import "./slot-DtgNxSws.js";
import "./NavBar-DQB8gZzj.js";
import "./attributes-BE60HdxF.js";
import "./class-iAXZF-Rm.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./hand-helping-D6zNrn11.js";
import "./users-CjbPgFWT.js";
import "./box-D-pQSdgi.js";
import "./user-CTgn9ZX8.js";
import "./Footer-DLPtpFxf.js";
var root_3 = from_html(`<div class="notification is-primary is-light"> </div>`);
var root_2 = from_html(`<section class="hero is-medium is-bold"><div class="hero-body has-background-grey-lighter"><!> <div class="container has-text-right"><div class="columns"><div class="column is-half"><img src="/images/Base/hero.svg" alt="Logo"/></div> <div class="column"><h1 class="title has-text-weight-light is-size-1"><span class="has-text-weight-bold">kapkara</span> <span class="has-text-black">web house</span></h1> <h2 class="title has-text-weight-light is-size-1 has-text-grey">productivity <br/> with web technologies</h2> <p class="has-text-link">kapkara is a web development company. <br/> kapkara is specialized in providing consultancy services
                            in aerospace industry <br/> and web technologies. kapkara produces web software for <br/> productivity of engineering development especially required
                            for aerospace and defense industries.</p></div></div></div></div></section>`);
function Home($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  head("12e84kw", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `${KAPKARA.name}, ${KAPKARA.description}`;
    });
  });
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_2();
      var div = child(section);
      var node = child(div);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root_3();
          var text = child(div_1);
          template_effect(() => set_text(text, $page().props.flash.status));
          append($$anchor3, div_1);
        };
        if_block(node, ($$render) => {
          if ($page().props.flash?.status) $$render(consequent);
        });
      }
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
export {
  Home as default
};
//# sourceMappingURL=Home-qyx8ZhOr.js.map
