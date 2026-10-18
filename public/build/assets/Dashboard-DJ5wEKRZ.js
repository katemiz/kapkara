import { y as each, t as template_effect, b as append, c as pop, d as push, j as from_html, k as child, g as sibling, l as set_text, q as get, A as index } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import { E as Eye } from "./eye-vr6OZr3k.js";
import "./class-iAXZF-Rm.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
var root_1 = from_html(`<div class="cell card m-3"><div class="card-content"><div class="media"><div class="media-content"><p class="title"> <span class="tag is-normal is-info"> </span></p></div></div> <div class="content"> </div> <footer class="card-footer"><a class="card-footer-item button has-background-white-ter"><span class="icon"><!></span> <span>View</span></a></footer></div></div>`);
var root = from_html(`<div class="hero"><div class="hero-body"><div class="column"><p class="subtitle is-6 has-text-grey">Super Admin Console</p> <h1 class="title is-3"> </h1> <p class="has-text-grey">Manage your platform's organizations, users, modules, and
                permissions from one place.</p></div></div> <div class="fixed-grid has-3-cols has-1-cols-mobile has-1-cols-mobile"><div class="grid is-gapless"></div></div></div>`);
function Dashboard($$anchor, $$props) {
  push($$props, true);
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var h1 = sibling(child(div_2), 2);
  var text = child(h1);
  var div_3 = sibling(div_1, 2);
  var div_4 = child(div_3);
  each(div_4, 21, () => $$props.menuItems, index, ($$anchor2, item) => {
    var div_5 = root_1();
    var div_6 = child(div_5);
    var div_7 = child(div_6);
    var div_8 = child(div_7);
    var p = child(div_8);
    var text_1 = child(p);
    var span = sibling(text_1);
    var text_2 = child(span);
    var div_9 = sibling(div_7, 2);
    var text_3 = child(div_9);
    var footer = sibling(div_9, 2);
    var a = child(footer);
    var span_1 = child(a);
    var node = child(span_1);
    Eye(node, { size: "18" });
    template_effect(() => {
      set_text(text_1, `${get(item).title ?? ""} `);
      set_text(text_2, get(item).count);
      set_text(text_3, get(item).description);
      set_attribute(a, "href", get(item).route);
    });
    append($$anchor2, div_5);
  });
  template_effect(() => set_text(text, `Welcome back, ${$$props.user?.name ?? "Administrator" ?? ""} 👋`));
  append($$anchor, div);
  pop();
}
export {
  Dashboard as default
};
//# sourceMappingURL=Dashboard-DJ5wEKRZ.js.map
