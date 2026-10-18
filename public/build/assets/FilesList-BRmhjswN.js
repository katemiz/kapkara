import { d as push, C as spread_props, z as comment, m as first_child, E as noop, b as append, c as pop, D as rest_props, p as prop, a as if_block, v as delegate, g as sibling, y as each, t as template_effect, l as set_text, q as get, n as delegated, k as child, A as index, j as from_html, I as router } from "./app-B8UKlAbY.js";
import { P as Paperclip } from "./paperclip-4sW0jNqk.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
function Circle_x($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m15 9-6 6" }],
    ["path", { "d": "m9 9 6 6" }]
  ];
  Icon($$anchor, spread_props({ name: "circle-x" }, () => props, {
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
var root_2 = from_html(`<tr><td class="is-narrow"><!></td><td class="is-narrow"><button type="button" class="is-small has-text-link"><span> </span></button></td><td class="is-narrow"> </td><td class="is-narrow"> </td><td class="has-text-danger has-text-right"><button type="button" class="is-small is-danger is-clickable"><span class="icon is-small"><!></span></button></td></tr>`);
var root_1 = from_html(`<table class="table mt-6 has-background-white-ter"><caption class="mb-2 has-text-left"> </caption><tbody></tbody></table>`);
function FilesList($$anchor, $$props) {
  push($$props, true);
  let media = prop($$props, "media", 19, () => []);
  function deleteFile(mediaId) {
    if (confirm("Are you sure you want to delete this file:" + mediaId)) {
      router.delete(`/media-delete/${mediaId}`, {
        preserveScroll: true,
        onSuccess: () => {
          console.log("File deleted");
        }
      });
    }
  }
  function downloadFile(url, filename) {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var table = root_1();
      var caption = child(table);
      var text = child(caption);
      var tbody = sibling(caption);
      each(tbody, 21, media, index, ($$anchor3, file) => {
        var tr = root_2();
        var td = child(tr);
        var node_1 = child(td);
        Paperclip(node_1, { size: "16" });
        var td_1 = sibling(td);
        var button = child(td_1);
        var span = child(button);
        var text_1 = child(span);
        var td_2 = sibling(td_1);
        var text_2 = child(td_2);
        var td_3 = sibling(td_2);
        var text_3 = child(td_3);
        var td_4 = sibling(td_3);
        var button_1 = child(td_4);
        var span_1 = child(button_1);
        var node_2 = child(span_1);
        Circle_x(node_2, { size: "16", color: "red" });
        template_effect(() => {
          set_text(text_1, get(file).name);
          set_text(text_2, get(file).mime);
          set_text(text_3, get(file).size);
        });
        delegated("click", button, () => downloadFile(get(file).url, get(file).name));
        delegated("click", button_1, () => deleteFile(get(file).id));
        append($$anchor3, tr);
      });
      template_effect(() => set_text(text, `${media().length === 1 ? "Attachment " : "Attachments "}
            [${media().length ?? ""}]`));
      append($$anchor2, table);
    };
    if_block(node, ($$render) => {
      if (media().length > 0) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
export {
  FilesList as F
};
//# sourceMappingURL=FilesList-BRmhjswN.js.map
