import { d as push, C as spread_props, z as comment, m as first_child, b as append, c as pop, D as rest_props, E as noop, y as each, q as get, t as template_effect, k as child, g as sibling, j as from_html, B as user_derived, l as set_text, A as index } from "./app-B8UKlAbY.js";
import { h as html } from "./html-D3C1hjzf.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import Layout from "./Layout-D-KKXIKv.js";
import { R as RecordData } from "./RecordData-DwKSM28g.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { D as DeleteButton, T as Trash } from "./DeleteButton-BLTAYatj.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
import { P as Pencil } from "./pencil-BgjkhNtP.js";
import { P as Paperclip } from "./paperclip-4sW0jNqk.js";
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
import "./this-DBviCOsL.js";
import "./browser-DwfGhph4.js";
import "./svelte-element-Ct4olbtg.js";
function Sheet($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["line", { "x1": "3", "x2": "21", "y1": "9", "y2": "9" }],
    ["line", { "x1": "3", "x2": "21", "y1": "15", "y2": "15" }],
    ["line", { "x1": "9", "x2": "9", "y1": "9", "y2": "21" }],
    ["line", { "x1": "15", "x2": "15", "y1": "9", "y2": "21" }]
  ];
  Icon($$anchor, spread_props({ name: "sheet" }, () => props, {
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
var root_2 = from_html(`<div class="tags has-addons my-2"><span class="tag"><!></span> <span class="tag"> </span> <span class="tag"> </span> <span class="tag"> </span> <span class="tag"> </span> <span class="tag"><!></span></div>`);
var root_1 = from_html(`<section class="section min-height-screen"><!> <nav class="level is-mobile"><div class="level-left"><p class="buttons"><a href="/mylib" class="button is-link is-inverted is-outlined" data-tooltip="List All Assets"><span class="icon is-small"><!></span></a> <a class="button is-link is-inverted is-outlined" data-tooltip="Edit this Asset"><span class="icon is-small"><!></span></a></p></div> <div class="level-right"><p class="buttons"><!></p></div></nav> <p class="subtitle"> </p> <p></p> <label class="label" for="names">Files</label> <div class="mt-4" name="files"></div> <!></section>`);
function ShowOld($$anchor, $$props) {
  push($$props, true);
  let url = user_derived(() => window.location.origin + "/mylib/" + $$props.asset.id);
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, {
        get title() {
          return `Asset ${$$props.asset.id ?? ""}`;
        },
        subtitle: "Show Properties"
      });
      var nav = sibling(node, 2);
      var div = child(nav);
      var p = child(div);
      var a = child(p);
      var span = child(a);
      var node_1 = child(span);
      Sheet(node_1, { size: "16" });
      var a_1 = sibling(a, 2);
      var span_1 = child(a_1);
      var node_2 = child(span_1);
      Pencil(node_2, { size: "16" });
      var div_1 = sibling(div, 2);
      var p_1 = child(div_1);
      var node_3 = child(p_1);
      DeleteButton(node_3, {
        get url() {
          return `/mylib/${$$props.asset.id ?? ""}`;
        }
      });
      var p_2 = sibling(nav, 2);
      var text = child(p_2);
      var p_3 = sibling(p_2, 2);
      html(p_3, () => $$props.asset.remarks, true);
      var div_2 = sibling(p_3, 4);
      each(div_2, 21, () => $$props.asset.files, index, ($$anchor3, item) => {
        var div_3 = root_2();
        var span_2 = child(div_3);
        var node_4 = child(span_2);
        Paperclip(node_4, { size: "16" });
        var span_3 = sibling(span_2, 2);
        var text_1 = child(span_3);
        var span_4 = sibling(span_3, 2);
        var text_2 = child(span_4);
        var span_5 = sibling(span_4, 2);
        var text_3 = child(span_5);
        var span_6 = sibling(span_5, 2);
        var text_4 = child(span_6);
        var span_7 = sibling(span_6, 2);
        var node_5 = child(span_7);
        Trash(node_5, { size: "16", color: "red" });
        template_effect(() => {
          set_text(text_1, get(item).name);
          set_text(text_2, get(item).mime);
          set_text(text_3, get(item).size);
          set_text(text_4, get(item).id);
        });
        append($$anchor3, div_3);
      });
      var node_6 = sibling(div_2, 2);
      RecordData(node_6, {
        get item() {
          return $$props.asset;
        },
        get url() {
          return get(url);
        }
      });
      template_effect(() => {
        set_attribute(a_1, "href", `/mylib/${$$props.asset.id ?? ""}/edit`);
        set_text(text, $$props.asset.title);
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  ShowOld as default
};
//# sourceMappingURL=ShowOld-od4X1cto.js.map
