import { d as push, C as spread_props, z as comment, m as first_child, E as noop, b as append, c as pop, D as rest_props, i as init, y as each, k as child, j as from_html, g as sibling, q as get, t as template_effect, l as set_text, A as index } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import Layout from "./Layout-D-KKXIKv.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
import "./class-iAXZF-Rm.js";
import "./slot-DtgNxSws.js";
import "./NavBar-DQB8gZzj.js";
import "./log-out-C7YwExAR.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./hand-helping-D6zNrn11.js";
import "./users-CjbPgFWT.js";
import "./box-D-pQSdgi.js";
import "./user-CTgn9ZX8.js";
import "./Footer-DLPtpFxf.js";
import "./svelte-element-Ct4olbtg.js";
function Copy($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "copy" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
const fdata = [
  {
    "name": "Kılıç Ali",
    "lastname": "Temiz",
    "tcvn": "22658539404",
    "kangrubu": "0 Rh +",
    "image": "katemiz.jpg"
  },
  {
    "name": "Ayşe",
    "lastname": "Temiz",
    "tcvn": "18544977016",
    "kangrubu": "A Rh +",
    "image": "astemiz.jpg"
  },
  {
    "name": "Merve Duru",
    "lastname": "Temiz",
    "tcvn": "17986021622",
    "kangrubu": "A Rh +",
    "image": "mdtemiz.jpg"
  },
  {
    "name": "Harun Emre",
    "lastname": "Temiz",
    "tcvn": "11635232070",
    "kangrubu": "A Rh +",
    "image": "hetemiz.jpg"
  }
];
var root_2 = from_html(`<tr><td class="is-narrow"><figure class="image is-64x64"><img class="is-rounded"/></figure></td><td><h1 class="title"> </h1> <h2 id="tcvn" class="subtitle"> <!></h2> <p> </p></td></tr>`);
var root_1 = from_html(`<section class="section"><div class="hero-body"><figure class="image is-3by1"><img src="/images/Base/hero.svg" alt="Hero"/></figure></div> <table class="table is-fullwidth mt-4"><tbody></tbody></table></section>`);
function Home($$anchor, $$props) {
  push($$props, false);
  function copyText(text) {
    navigator.clipboard.writeText(text);
  }
  init();
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var table = sibling(child(section), 2);
      var tbody = child(table);
      each(tbody, 5, () => fdata, index, ($$anchor3, kisi) => {
        var tr = root_2();
        var td = child(tr);
        var figure = child(td);
        var img = child(figure);
        var td_1 = sibling(td);
        var h1 = child(td_1);
        var text_1 = child(h1);
        var h2 = sibling(h1, 2);
        var text_2 = child(h2);
        var node = sibling(text_2);
        Copy(node, {
          size: "18",
          color: "blue",
          onclick: () => copyText(get(kisi).tcvn)
        });
        var p = sibling(h2, 2);
        var text_3 = child(p);
        template_effect(
          ($0) => {
            set_attribute(img, "src", `/images/Base/${get(kisi).image ?? ""}`);
            set_attribute(img, "alt", get(kisi).name);
            set_text(text_1, get(kisi).name);
            set_text(text_2, `${$0 ?? ""} `);
            set_text(text_3, get(kisi).kangrubu);
          },
          [
            () => new Intl.NumberFormat("fr-FR").format(get(kisi).tcvn)
          ]
        );
        append($$anchor3, tr);
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Home as default
};
//# sourceMappingURL=Home-COVVzBbf.js.map
