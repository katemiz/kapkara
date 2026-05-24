import { d as push, p as prop, H as user_effect, b as append, c as pop, j as from_html, k as child, a as if_block, t as template_effect, g as sibling, q as get, l as set_text, F as user_derived, m as first_child } from "./app-D1xHItXN.js";
import { b as bind_this } from "./this-DuZu_hTw.js";
import { Q as QRCode } from "./browser-DK_Q3MQL.js";
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
var root_1 = from_html(`<p class="is-size-7 has-text-grey">Modified</p> <p> </p> <p class="is-size-7 has-text-grey"> </p>`, 1);
var root_2 = from_html(`<p class="is-size-7 has-text-grey">No modifications</p>`);
var root = from_html(`<div class="fixed-grid box has-3-cols has-3-cols-tablet has-1-cols-mobile mt-4"><div class="grid"><div class="cell has-text-left has-text-centered-mobile"><p class="is-size-7 has-text-grey">Added</p> <p> </p> <p class="is-size-7 has-text-grey"> </p></div> <div class="cell has-text-centered"><!></div> <div class="cell has-text-right has-text-centered-mobile"><!></div></div></div>`);
function RecordData($$anchor, $$props) {
  push($$props, true);
  let createdOn = user_derived(() => new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date($$props.item.created_at)));
  let updatedOn = user_derived(() => new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date($$props.item.updated_at)));
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var p = sibling(child(div_2), 2);
  var text = child(p);
  var p_1 = sibling(p, 2);
  var text_1 = child(p_1);
  var div_3 = sibling(div_2, 2);
  var node = child(div_3);
  QRCode_1(node, {
    get value() {
      return $$props.url;
    }
  });
  var div_4 = sibling(div_3, 2);
  var node_1 = child(div_4);
  {
    var consequent = ($$anchor2) => {
      var fragment = root_1();
      var p_2 = sibling(first_child(fragment), 2);
      var text_2 = child(p_2);
      var p_3 = sibling(p_2, 2);
      var text_3 = child(p_3);
      template_effect(() => {
        set_text(text_2, $$props.item.updated_user_mail);
        set_text(text_3, get(updatedOn));
      });
      append($$anchor2, fragment);
    };
    var alternate = ($$anchor2) => {
      var p_4 = root_2();
      append($$anchor2, p_4);
    };
    if_block(node_1, ($$render) => {
      if (get(updatedOn) !== get(createdOn)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  template_effect(() => {
    set_text(text, $$props.item.created_user_mail);
    set_text(text_1, get(createdOn));
  });
  append($$anchor, div);
  pop();
}
export {
  RecordData as R
};
//# sourceMappingURL=RecordData-CVuLSEqY.js.map
