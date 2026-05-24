import { d as push, w as spread_props, x as comment, m as first_child, z as noop, b as append, c as pop, y as rest_props, g as sibling, a as if_block, t as template_effect, l as set_text, k as child, j as from_html, C as each, q as get, D as index } from "./app-D1xHItXN.js";
import { a as set_attribute } from "./attributes-BBrSLZ4L.js";
import { I as Icon, s as snippet } from "./users-jlfJKlAC.js";
import { a as MEMBERS } from "./config-ei04y2F2.js";
import Layout from "./Layout-B2EaWUEV.js";
import "./slot-DtgNxSws.js";
import "./NavBar-74bJ4ZE_.js";
import "./KapkaraIcon-DC8gmDP1.js";
import "./user-DCzES_T0.js";
import "./Footer-CYVATjjz.js";
function Github($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$anchor, spread_props({ name: "github" }, () => props, {
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
function Linkedin($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    ["rect", { "width": "4", "height": "12", "x": "2", "y": "9" }],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  Icon($$anchor, spread_props({ name: "linkedin" }, () => props, {
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
function Twitter($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "twitter" }, () => props, {
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
var root_1$1 = from_html(`<p><a>more ...</a></p>`);
var root_3 = from_html(`<a><span class="icon has-text-link"><!></span></a>`);
var root_4 = from_html(`<a><span class="icon has-text-link"><!></span></a>`);
var root_5 = from_html(`<a><span class="icon has-text-link"><!></span></a>`);
var root_2 = from_html(`<div class="mt-2"><!> <!> <!></div>`);
var root = from_html(`<div class="cell card"><div class="card-image"><figure class="image is-rounded"><img/></figure></div> <div class="card-content"><div class="media"><div class="media-content"><p class="title is-4"> </p> <p class="subtitle is-6"> </p></div></div> <div class="card-content"><div class="content"><p> </p> <!> <a> </a> <!></div></div></div></div>`);
function MemberCard($$anchor, $$props) {
  push($$props, true);
  var div = root();
  var div_1 = child(div);
  var figure = child(div_1);
  var img = child(figure);
  var div_2 = sibling(div_1, 2);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var p = child(div_4);
  var text = child(p);
  var p_1 = sibling(p, 2);
  var text_1 = child(p_1);
  var div_5 = sibling(div_3, 2);
  var div_6 = child(div_5);
  var p_2 = child(div_6);
  var text_2 = child(p_2);
  var node = sibling(p_2, 2);
  {
    var consequent = ($$anchor2) => {
      var p_3 = root_1$1();
      var a = child(p_3);
      template_effect(() => set_attribute(a, "href", `/${$$props.member.link ?? ""}`));
      append($$anchor2, p_3);
    };
    if_block(node, ($$render) => {
      if ($$props.member.link) $$render(consequent);
    });
  }
  var a_1 = sibling(node, 2);
  var text_3 = child(a_1);
  var node_1 = sibling(a_1, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var div_7 = root_2();
      var node_2 = child(div_7);
      {
        var consequent_1 = ($$anchor3) => {
          var a_2 = root_3();
          var span = child(a_2);
          var node_3 = child(span);
          Linkedin(node_3, { size: 18 });
          template_effect(() => set_attribute(a_2, "href", $$props.member.media.linkedin));
          append($$anchor3, a_2);
        };
        if_block(node_2, ($$render) => {
          if ($$props.member.media.linkedin) $$render(consequent_1);
        });
      }
      var node_4 = sibling(node_2, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var a_3 = root_4();
          var span_1 = child(a_3);
          var node_5 = child(span_1);
          Github(node_5, { size: 18 });
          template_effect(() => set_attribute(a_3, "href", `${$$props.member.media.github ?? ""}}`));
          append($$anchor3, a_3);
        };
        if_block(node_4, ($$render) => {
          if ($$props.member.media.github) $$render(consequent_2);
        });
      }
      var node_6 = sibling(node_4, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var a_4 = root_5();
          var span_2 = child(a_4);
          var node_7 = child(span_2);
          Twitter(node_7, { size: 18 });
          template_effect(() => set_attribute(a_4, "href", $$props.member.media.twitter));
          append($$anchor3, a_4);
        };
        if_block(node_6, ($$render) => {
          if ($$props.member.media.twitter) $$render(consequent_3);
        });
      }
      append($$anchor2, div_7);
    };
    if_block(node_1, ($$render) => {
      if ($$props.member.media) $$render(consequent_4);
    });
  }
  template_effect(() => {
    set_attribute(img, "src", `/images/Base/${$$props.member.img ?? ""}`);
    set_attribute(img, "alt", `Image of ${$$props.member.name ?? ""}`);
    set_text(text, $$props.member.name);
    set_text(text_1, $$props.member.profession);
    set_text(text_2, $$props.member.expertise);
    set_attribute(a_1, "href", `mailto:${$$props.member.mail ?? ""}}`);
    set_text(text_3, $$props.member.mail);
  });
  append($$anchor, div);
  pop();
}
var root_1 = from_html(`<section class="section"><h1 class="title mb-6 has-text-weight-light is-size-2 has-text-left">Members</h1> <div class="fixed-grid has-3-cols has-1-cols-mobile"><div class="grid"></div></div></section>`);
function Team($$anchor) {
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var div = sibling(child(section), 2);
      var div_1 = child(div);
      each(div_1, 5, () => MEMBERS, index, ($$anchor3, member) => {
        MemberCard($$anchor3, {
          get member() {
            return get(member);
          }
        });
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
}
export {
  Team as default
};
//# sourceMappingURL=Team-Ayf2Rdfw.js.map
