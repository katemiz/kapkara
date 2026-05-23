import { g as sibling, h as child, C as each, D as index, c as append, k as from_html, q as get, t as template_effect, l as set_text } from "./app-Dy2KnI5v.js";
import { h as html } from "./html-BLHH7K9b.js";
import { a as set_attribute } from "./attributes-DT5rhWPg.js";
import Layout from "./Layout-BuHYv4Ql.js";
import { M as MYAPPS } from "./config-ei04y2F2.js";
import "./slot-DtgNxSws.js";
import "./NavBar-CRwixYny.js";
import "./users-PDO1V6S0.js";
import "./KapkaraIcon-DREvkYhs.js";
import "./user-Cc_Ojfab.js";
import "./Footer-CI4uvyrz.js";
var root_2 = from_html(`<div class="card cell"><div class="card-image has-background-white-ter"><figure class="image is-4by3"><img/></figure></div> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img/></figure></div> <div class="media-content"><a class="title is-4 has-text-link"> </a> <p class="subtitle is-6 has-text-grey"> </p></div></div> <div class="content"></div></div></div>`);
var root_1 = from_html(`<section class="section"><p class="title">Apps We Developed</p> <div class="fixed-grid has-2-cols has-1-cols-mobile"><div class="grid"></div></div></section>`);
function Apps($$anchor) {
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var div = sibling(child(section), 2);
      var div_1 = child(div);
      each(div_1, 5, () => MYAPPS, index, ($$anchor3, mapp) => {
        var div_2 = root_2();
        var div_3 = child(div_2);
        var figure = child(div_3);
        var img = child(figure);
        var div_4 = sibling(div_3, 2);
        var div_5 = child(div_4);
        var div_6 = child(div_5);
        var figure_1 = child(div_6);
        var img_1 = child(figure_1);
        var div_7 = sibling(div_6, 2);
        var a = child(div_7);
        var text = child(a);
        var p = sibling(a, 2);
        var text_1 = child(p);
        var div_8 = sibling(div_5, 2);
        html(div_8, () => get(mapp).desc, true);
        template_effect(() => {
          set_attribute(img, "src", `images/Apps/${get(mapp).app_hero ?? ""}`);
          set_attribute(img, "alt", get(mapp).label);
          set_attribute(img_1, "src", `images/Apps/${get(mapp).logo ?? ""}`);
          set_attribute(img_1, "alt", get(mapp).label);
          set_attribute(a, "href", get(mapp).url);
          set_text(text, get(mapp).name);
          set_text(text_1, get(mapp).label);
        });
        append($$anchor3, div_2);
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
}
export {
  Apps as default
};
//# sourceMappingURL=Apps-DCBqDvAY.js.map
