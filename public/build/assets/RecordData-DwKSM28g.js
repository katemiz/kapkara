import { d as push, p as prop, F as user_effect, b as append, c as pop, j as from_html, k as child, a as if_block, t as template_effect, g as sibling, q as get, l as set_text, B as user_derived, m as first_child } from "./app-B8UKlAbY.js";
import { b as bind_this } from "./this-DBviCOsL.js";
import { Q as QRCode } from "./browser-DwfGhph4.js";
var root$1 = from_html(`<div class="qr-container svelte-nayyo9"><canvas class="svelte-nayyo9"></canvas></div>`);
function QRCode_1($$anchor, $$props) {
  push($$props, true);
  let value = prop($$props, "value", 3, ""), size = prop($$props, "size", 3, 64), dark = prop($$props, "dark", 3, "#000000"), light = prop($$props, "light", 3, "#ffffff");
  let canvasElement;
  user_effect(() => {
    if (value()) {
      QRCode.toCanvas(
        canvasElement,
        value(),
        {
          width: size(),
          margin: 2,
          color: { dark: dark(), light: light() }
        },
        (error) => {
          if (error) console.error("QR Generation Error:", error);
        }
      );
    }
  });
  var div = root$1();
  var canvas = child(div);
  bind_this(canvas, ($$value) => canvasElement = $$value, () => canvasElement);
  append($$anchor, div);
  pop();
}
var root_1 = from_html(`<span class="tag"> </span>`);
var root_2 = from_html(`<p class="is-size-7 has-text-grey">Modified</p> <p> </p> <p class="is-size-7 has-text-grey"> </p>`, 1);
var root_3 = from_html(`<p class="is-size-7 has-text-grey">No modifications</p>`);
var root = from_html(`<nav class="level mt-6"><div class="level-left"><div><p class="is-size-7 has-text-grey">Added</p> <p> </p> <p class="is-size-7 has-text-grey"> </p></div></div> <div class="level-item has-text-centered"><div><span class="has-text-grey is-size-7"> </span> <!> <!></div></div> <div class="level-right has-text-right"><div><!></div></div></nav>`);
function RecordData($$anchor, $$props) {
  push($$props, true);
  let status = prop($$props, "status", 3, false);
  let createdOn = user_derived(() => new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date($$props.item.created_at)));
  let updatedOn = user_derived(() => new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date($$props.item.updated_at)));
  let now = user_derived(() => new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(/* @__PURE__ */ new Date()));
  var nav = root();
  var div = child(nav);
  var div_1 = child(div);
  var p = sibling(child(div_1), 2);
  var text = child(p);
  var p_1 = sibling(p, 2);
  var text_1 = child(p_1);
  var div_2 = sibling(div, 2);
  var div_3 = child(div_2);
  var span = child(div_3);
  var text_2 = child(span);
  var node = sibling(span, 2);
  QRCode_1(node, {
    get value() {
      return $$props.url;
    }
  });
  var node_1 = sibling(node, 2);
  {
    var consequent = ($$anchor2) => {
      var span_1 = root_1();
      var text_3 = child(span_1);
      template_effect(() => set_text(text_3, status()));
      append($$anchor2, span_1);
    };
    if_block(node_1, ($$render) => {
      if (status()) $$render(consequent);
    });
  }
  var div_4 = sibling(div_2, 2);
  var div_5 = child(div_4);
  var node_2 = child(div_5);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment = root_2();
      var p_2 = sibling(first_child(fragment), 2);
      var text_4 = child(p_2);
      var p_3 = sibling(p_2, 2);
      var text_5 = child(p_3);
      template_effect(() => {
        set_text(text_4, $$props.item.updated_user_mail);
        set_text(text_5, get(updatedOn));
      });
      append($$anchor2, fragment);
    };
    var alternate = ($$anchor2) => {
      var p_4 = root_3();
      append($$anchor2, p_4);
    };
    if_block(node_2, ($$render) => {
      if (get(updatedOn) !== get(createdOn)) $$render(consequent_1);
      else $$render(alternate, -1);
    });
  }
  template_effect(() => {
    set_text(text, $$props.item.created_user_mail);
    set_text(text_1, get(createdOn));
    set_text(text_2, get(now));
  });
  append($$anchor, nav);
  pop();
}
export {
  QRCode_1 as Q,
  RecordData as R
};
//# sourceMappingURL=RecordData-DwKSM28g.js.map
