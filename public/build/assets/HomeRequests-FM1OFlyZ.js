import { c as append, h as child, k as from_html } from "./app-Dy2KnI5v.js";
import Layout from "./Layout-Chg3CnSH.js";
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
//# sourceMappingURL=HomeRequests-FM1OFlyZ.js.map
