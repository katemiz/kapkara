import { b as append, k as child, j as from_html } from "./app-B8UKlAbY.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-B6fRcdfC.js";
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
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
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
//# sourceMappingURL=HomeRequests-RvYk2cAR.js.map
