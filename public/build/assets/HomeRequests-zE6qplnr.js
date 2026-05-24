import { b as append, j as from_html, k as child } from "./app-B3TC2Fcx.js";
import Layout from "./Layout-DEJXo2nf.js";
import { T as Title } from "./Title-BswqQN3w.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-DS_2IATg.js";
import "./attributes-BmlKk72Z.js";
import "./NavBar-Bug_ySFU.js";
import "./users-C3g1dnqi.js";
import "./PdmIcon-nQqjGdVH.js";
import "./factory-XMGy52MX.js";
import "./Footer-CZBn2Ryz.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-BA9CIx4Y.js";
var root_1 = from_html(`<section class="section container min-height-screen"><!> <div class="columns"><div class="column is-3"><aside class="menu"><p class="menu-label">General</p> <ul class="menu-list"><li><a href="/pdm/request">Change Request</a></li> <li><a href="/pdm/ecn">ECN</a></li></ul></aside></div> <div class="column"><figure class="image"><img src="/images/PDM/CRFlow.svg" alt="Change Request Flow"/></figure></div></div></section>`);
function HomeRequests($$anchor) {
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, {
        title: "Change Requests",
        subtitle: "Requests and Approval Process"
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
}
export {
  HomeRequests as default
};
//# sourceMappingURL=HomeRequests-zE6qplnr.js.map
