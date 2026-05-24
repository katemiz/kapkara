import { i as init, c as pop, d as push, B as deferred_template_effect, b as append, j as from_html, $ as $document } from "./app-D1xHItXN.js";
import { h as head } from "./svelte-head-BX5Z-D-s.js";
import Layout from "./Layout-B2EaWUEV.js";
import { K as KAPKARA } from "./config-ei04y2F2.js";
import "./slot-DtgNxSws.js";
import "./NavBar-74bJ4ZE_.js";
import "./attributes-BBrSLZ4L.js";
import "./users-jlfJKlAC.js";
import "./KapkaraIcon-DC8gmDP1.js";
import "./user-DCzES_T0.js";
import "./Footer-CYVATjjz.js";
var root_2 = from_html(`<section class="hero is-medium is-bold"><div class="hero-body has-background-grey-lighter"><div class="container has-text-right"><div class="columns"><div class="column is-half"><img src="/images/Base/hero.svg" alt="Logo"/></div> <div class="column"><h1 class="title has-text-weight-light is-size-1"><span class="has-text-weight-bold">kapkara</span> <span class="has-text-black">web house</span></h1> <h2 class="title has-text-weight-light is-size-1 has-text-grey">productivity <br/> with web technologies</h2> <p class="has-text-link">kapkara is a web development company. <br/> kapkara is specialized in providing consultancy services
                            in aerospace industry <br/> and web technologies. kapkara produces web software for <br/> productivity of engineering development especially required
                            for aerospace and defense industries.</p></div></div></div></div></section>`);
function Home($$anchor, $$props) {
  push($$props, false);
  init();
  head("12e84kw", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `${KAPKARA.name}, ${KAPKARA.description}`;
    });
  });
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_2();
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Home as default
};
//# sourceMappingURL=Home-ujgTqkcD.js.map
