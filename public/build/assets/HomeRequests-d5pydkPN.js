import { b as append, j as from_html, k as child } from "./app-DmZvep12.js";
import Layout from "./Layout-BvwSG3qv.js";
import { T as Title } from "./Title-CdSK7QuY.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-Bf-10Ive.js";
import "./attributes-B9LAyNIy.js";
import "./NavBar-G195NlxZ.js";
import "./users-DktRnX1j.js";
import "./PdmIcon-6wom0yWG.js";
import "./factory-BAoKQd0v.js";
import "./Footer-Dlho2n6k.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-Dn11Qf-8.js";
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
//# sourceMappingURL=HomeRequests-d5pydkPN.js.map
