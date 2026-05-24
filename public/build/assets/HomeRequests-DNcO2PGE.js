import { b as append, j as from_html, k as child } from "./app-D1xHItXN.js";
import Layout from "./Layout-C5TGvOFh.js";
import { T as Title } from "./Title-B6GQ1EA4.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-BX5Z-D-s.js";
import "./attributes-BBrSLZ4L.js";
import "./NavBar-C-vrATIV.js";
import "./users-jlfJKlAC.js";
import "./PdmIcon-D6gvppf-.js";
import "./factory-COgsJOzY.js";
import "./Footer-Ys_QHNvW.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DC8gmDP1.js";
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
//# sourceMappingURL=HomeRequests-DNcO2PGE.js.map
