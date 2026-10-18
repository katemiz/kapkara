import { p as prop, i as init, c as pop, d as push, t as template_effect, b as append, aP as deep_read_state, u as untrack, j as from_html, g as sibling, k as child, l as set_text } from "./app-B8UKlAbY.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import { L as Link } from "./link-Z_9ghKzW.js";
import "./slot-DtgNxSws.js";
import "./svelte-element-Ct4olbtg.js";
import "./attributes-BE60HdxF.js";
var root_1 = from_html(`<article class="box menu-card-box svelte-109jw9o"><div class="columns is-vcentered is-mobile"><div class="column is-narrow"><div><span class="icon is-large"><i></i></span></div></div> <div class="column"><h3 class="title is-5 mb-1"> </h3> <p class="has-text-grey is-size-7"> </p></div> <div class="column is-narrow has-text-right"><span><strong class="mr-1"> </strong> <span class="is-size-7"> </span></span> <div class="is-size-7 has-text-grey mt-2">Open <span class="icon is-small"><i class="fas fa-arrow-right"></i></span></div></div></div></article>`);
function MenuItem($$anchor, $$props) {
  push($$props, false);
  let item = prop($$props, "item", 8);
  init();
  Link($$anchor, {
    get href() {
      return deep_read_state(item()), untrack(() => item().route);
    },
    class: "menu-card",
    children: ($$anchor2, $$slotProps) => {
      var article = root_1();
      var div = child(article);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var span = child(div_2);
      var i = child(span);
      var div_3 = sibling(div_1, 2);
      var h3 = child(div_3);
      var text = child(h3);
      var p = sibling(h3, 2);
      var text_1 = child(p);
      var div_4 = sibling(div_3, 2);
      var span_1 = child(div_4);
      var strong = child(span_1);
      var text_2 = child(strong);
      var span_2 = sibling(strong, 2);
      var text_3 = child(span_2);
      template_effect(() => {
        set_class(div_2, 1, `icon-box is-${(deep_read_state(item()), untrack(() => item().color)) ?? ""}`, "svelte-109jw9o");
        set_class(i, 1, `fas ${(deep_read_state(item()), untrack(() => item().icon)) ?? ""} fa-2x`, "svelte-109jw9o");
        set_text(text, (deep_read_state(item()), untrack(() => item().title)));
        set_text(text_1, (deep_read_state(item()), untrack(() => item().description)));
        set_class(span_1, 1, `tag is-${(deep_read_state(item()), untrack(() => item().color)) ?? ""} is-light is-medium`, "svelte-109jw9o");
        set_text(text_2, (deep_read_state(item()), untrack(() => item().count)));
        set_text(text_3, (deep_read_state(item()), untrack(() => item().countLabel)));
      });
      append($$anchor2, article);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  MenuItem as default
};
//# sourceMappingURL=MenuItem-BPxPmgVj.js.map
