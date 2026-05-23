import { C as each, a as if_block, b as append, k as child, j as from_html, g as sibling, t as template_effect, q as get, l as set_text, e as event, D as index, E as mutable_source, o as set } from "./app-DmZvep12.js";
import { s as set_class } from "./attributes-B9LAyNIy.js";
import Layout from "./Layout-Cc5UHZlW.js";
import "./slot-DtgNxSws.js";
import "./NavBar-Vq8UgN2l.js";
import "./users-DktRnX1j.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-Dn11Qf-8.js";
import "./user-BrPL1P_t.js";
import "./Footer-DuPOFG8e.js";
var root_2 = from_html(`<li><button> </button></li>`);
var root_3 = from_html(`<div class="columns"><div class="column is-half"><img src="/images/Base/service_web.svg" alt="Web Services"/></div> <div class="column content"><h2 class="title mb-6 has-text-weight-light is-size-2 has-text-left">Full-Stack Web Development</h2> <p class="mb-3">can perform all web based applications using -
                            mainly- open source tools and environments</p> <ul><li>Developing front end website architecture.</li> <li>Designing user interactions on web pages.</li> <li>Developing back-end website applications.</li> <li>Creating servers and databases for
                                functionality.</li></ul> <div class="card mt-4"><header class="card-header"><p class="card-header-title">Technology and Stack</p></header> <div class="card-content"><div class="content"><dl><dd>Linux</dd> <dd>Apache / Nginx / Caddy Server</dd> <dd>MySQL / MongoDB</dd> <dd>PHP / Laravel / Livewire</dd></dl></div></div></div></div></div>`);
var root_4 = from_html(`<div class="columns"><div class="column is-half"><img src="/images/service_eng.svg" alt="Web Services"/></div> <div class="column"><h2 class="title mb-6 has-text-weight-light is-size-2 has-text-left">Engineering Services</h2> <p>We are a team of engineers with more tah 30 years of
                            experience especially in aerospace industry.</p> <p>Our areas of expertise include :</p> <div class="content"><ul><li>Product Development <ul><li>Systems Engineering <ul><li>Requirements Management</li> <li>Interface Management</li></ul></li> <li>Structural Engineering <ul><li>Design Management</li> <li>Manufacturing Preparation</li> <li>Scheduling</li> <li>Critical Items Procurement</li></ul></li> <li>Program Management <ul><li>Configuration Management</li> <li>Scheduling</li> <li>Cost Management</li></ul></li> <li>PLM Infrastructure Management</li></ul></li> <li>Manufacturing and Production
                                    (Aerostructures) <ul><li>Detail and Assembly Tooling Design</li> <li>NC Programming and Simulation</li></ul></li> <li>Skills Management <a href="https://tensor.kapkara.one">more ...</a></li></ul></div></div></div>`);
var root_1 = from_html(`<section class="section"><h1 class="title mb-6 has-text-weight-light is-size-2 has-text-left">What We Do : Services We Provide</h1> <div class="content"><p>Services can be categorized into two different categories :</p> <ul class="has-text-dark"><li>Web Technology</li> <li>Engineering (Aerospace Industry Product Development and
                    Production)</li></ul></div> <div class="box has-background-light mt-2"><div class="tabs"><ul></ul></div> <!></div></section>`);
function Services($$anchor) {
  let activeTab = mutable_source(1);
  const tabs = [
    { id: 1, title: "Web Development", content: "Web Development" },
    {
      id: 2,
      title: "Engineering Consultancy",
      content: "Engineering Consultancy"
    }
  ];
  function setActiveTab(tabId) {
    set(activeTab, tabId);
  }
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var div = sibling(child(section), 4);
      var div_1 = child(div);
      var ul = child(div_1);
      each(ul, 5, () => tabs, index, ($$anchor3, tab) => {
        var li = root_2();
        var button = child(li);
        let classes;
        var text = child(button);
        template_effect(() => {
          classes = set_class(button, 1, "button is-link is-inverted", null, classes, { "is-active": get(activeTab) === get(tab).id });
          set_text(text, get(tab).title);
        });
        event("click", button, () => setActiveTab(get(tab).id));
        append($$anchor3, li);
      });
      var node = sibling(div_1, 2);
      {
        var consequent = ($$anchor3) => {
          var div_2 = root_3();
          append($$anchor3, div_2);
        };
        var alternate = ($$anchor3) => {
          var div_3 = root_4();
          append($$anchor3, div_3);
        };
        if_block(node, ($$render) => {
          if (get(activeTab) == 1) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
}
export {
  Services as default
};
//# sourceMappingURL=Services-nkSVLpQE.js.map
