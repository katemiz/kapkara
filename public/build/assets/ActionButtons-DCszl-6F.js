import { d as push, m as first_child, a as if_block, b as append, c as pop, g as sibling, j as from_html, t as template_effect, k as child } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import { D as DeleteButton } from "./DeleteButton-BLTAYatj.js";
import { T as Table_of_contents, P as Pin, S as Send } from "./table-of-contents-CyZgqQSp.js";
import { P as Plus } from "./plus-CnOy2VL6.js";
import { P as Pencil } from "./pencil-BgjkhNtP.js";
import { S as Save } from "./save-CwmUOwvD.js";
import { X } from "./x-Cg9sN51b.js";
var root_1 = from_html(`<nav class="level is-mobile"><div class="level-left"><p class="buttons"><a class="button is-ghost"><span class="icon is-small"><!></span> <span>List All</span></a> <a class="button is-ghost"><span class="icon is-small"><!></span> <span>Add New</span></a></p></div> <div class="level-right"><a class="button is-dark" data-tooltip="Edit"><span class="icon is-small"><!></span></a> <a class="button is-dark" data-tooltip="Freeze"><span class="icon is-small"><!></span></a> <a class="button is-dark" data-tooltip="Release"><span class="icon is-small"><!></span></a> <p class="buttons"><!></p></div></nav>`);
var root_3 = from_html(`<a class="button"><span class="icon"><!></span></a>`);
var root_4 = from_html(`<a class="button"><span class="icon"><!></span></a>`);
var root_2 = from_html(`<nav class="level is-mobile"><div class="level-left"><p class="buttons"><button type="submit" form="genericForm" class="button is-link is-inverted is-outlined"><span class="icon is-small"><!></span></button></p></div> <div class="level-right"><p class="buttons"><!></p></div></nav>`);
var root = from_html(`<!> <!>`, 1);
function ActionButtons($$anchor, $$props) {
  push($$props, true);
  var fragment = root();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var nav = root_1();
      var div = child(nav);
      var p = child(div);
      var a = child(p);
      var span = child(a);
      var node_1 = child(span);
      Table_of_contents(node_1, { size: "20" });
      var a_1 = sibling(a, 2);
      var span_1 = child(a_1);
      var node_2 = child(span_1);
      Plus(node_2, { size: "20" });
      var div_1 = sibling(div, 2);
      var a_2 = child(div_1);
      var span_2 = child(a_2);
      var node_3 = child(span_2);
      Pencil(node_3, { size: "20" });
      var a_3 = sibling(a_2, 2);
      var span_3 = child(a_3);
      var node_4 = child(span_3);
      Pin(node_4, { size: "20" });
      var a_4 = sibling(a_3, 2);
      var span_4 = child(a_4);
      var node_5 = child(span_4);
      Send(node_5, { size: "20" });
      var p_1 = sibling(a_4, 2);
      var node_6 = child(p_1);
      DeleteButton(node_6, {
        get url() {
          return `/${$$props.route_name ?? ""}/${$$props.item.id ?? ""}`;
        }
      });
      template_effect(() => {
        set_attribute(a, "href", `/${$$props.route_name ?? ""}`);
        set_attribute(a_1, "href", `/${$$props.route_name ?? ""}/create`);
        set_attribute(a_2, "href", `/${$$props.route_name ?? ""}/${$$props.item.id ?? ""}/edit`);
        set_attribute(a_3, "href", `/${$$props.route_name ?? ""}/${$$props.item.id ?? ""}/edit`);
        set_attribute(a_4, "href", `/${$$props.route_name ?? ""}/${$$props.item.id ?? ""}/edit`);
      });
      append($$anchor2, nav);
    };
    if_block(node, ($$render) => {
      if ($$props.form_type == "show") $$render(consequent);
    });
  }
  var node_7 = sibling(node, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var nav_1 = root_2();
      var div_2 = child(nav_1);
      var p_2 = child(div_2);
      var button = child(p_2);
      var span_5 = child(button);
      var node_8 = child(span_5);
      Save(node_8, { size: "16" });
      var div_3 = sibling(div_2, 2);
      var p_3 = child(div_3);
      var node_9 = child(p_3);
      {
        var consequent_1 = ($$anchor3) => {
          var a_5 = root_3();
          var span_6 = child(a_5);
          var node_10 = child(span_6);
          X(node_10, { size: "16" });
          template_effect(() => set_attribute(a_5, "href", `/${$$props.route_name ?? ""}/${$$props.item.id ?? ""}`));
          append($$anchor3, a_5);
        };
        var alternate = ($$anchor3) => {
          var a_6 = root_4();
          var span_7 = child(a_6);
          var node_11 = child(span_7);
          X(node_11, { size: "16" });
          template_effect(() => set_attribute(a_6, "href", `/${$$props.route_name ?? ""}`));
          append($$anchor3, a_6);
        };
        if_block(node_9, ($$render) => {
          if ($$props.isEdit & $$props.item != null) $$render(consequent_1);
          else $$render(alternate, -1);
        });
      }
      append($$anchor2, nav_1);
    };
    if_block(node_7, ($$render) => {
      if ($$props.form_type == "form") $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
}
export {
  ActionButtons as A
};
//# sourceMappingURL=ActionButtons-DCszl-6F.js.map
