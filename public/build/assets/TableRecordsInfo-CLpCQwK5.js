import { d as push, C as spread_props, z as comment, m as first_child, E as noop, b as append, c as pop, D as rest_props, a as if_block, q as get, g as sibling, y as each, k as child, A as index, j as from_html, B as user_derived, t as template_effect, l as set_text } from "./app-B8UKlAbY.js";
import { h as html } from "./html-D3C1hjzf.js";
import { L as Link } from "./link-Z_9ghKzW.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
import { C as Chevron_right } from "./chevron-right-CojM0Br_.js";
function Chevron_left($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  Icon($$anchor, spread_props({ name: "chevron-left" }, () => props, {
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
var root_4 = from_html(`<span class="pagination-previous is-disabled" title="This is the first page"><!></span>`);
var root_7 = from_html(`<span class="pagination-next is-disabled" title="This is the last page"><!></span>`);
var root_9 = from_html(`<span class="pagination-ellipsis">&hellip;</span>`);
var root_8 = from_html(`<li><!></li>`);
var root_1$1 = from_html(`<nav class="pagination is-centered"><!> <!> <ul class="pagination-list"></ul></nav>`);
function Paginate($$anchor, $$props) {
  push($$props, true);
  let allLinks = user_derived(() => $$props.items.links || []);
  let prevLink = user_derived(() => get(allLinks)[0]);
  let nextLink = user_derived(() => get(allLinks)[get(allLinks).length - 1]);
  let pageLinks = user_derived(() => get(allLinks).slice(1, -1));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_3 = ($$anchor2) => {
      var nav = root_1$1();
      var node_1 = child(nav);
      {
        var consequent = ($$anchor3) => {
          Link($$anchor3, {
            get href() {
              return get(prevLink).url;
            },
            class: "pagination-previous",
            preserveScroll: true,
            preserveState: true,
            children: ($$anchor4, $$slotProps) => {
              Chevron_left($$anchor4, { size: "18" });
            },
            $$slots: { default: true }
          });
        };
        var alternate = ($$anchor3) => {
          var span = root_4();
          var node_2 = child(span);
          Chevron_left(node_2, { size: "18" });
          append($$anchor3, span);
        };
        if_block(node_1, ($$render) => {
          if (get(prevLink)?.url) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      var node_3 = sibling(node_1, 2);
      {
        var consequent_1 = ($$anchor3) => {
          Link($$anchor3, {
            get href() {
              return get(nextLink).url;
            },
            class: "pagination-next",
            preserveScroll: true,
            preserveState: true,
            children: ($$anchor4, $$slotProps) => {
              Chevron_right($$anchor4, { size: "18" });
            },
            $$slots: { default: true }
          });
        };
        var alternate_1 = ($$anchor3) => {
          var span_1 = root_7();
          var node_4 = child(span_1);
          Chevron_right(node_4, { size: "18" });
          append($$anchor3, span_1);
        };
        if_block(node_3, ($$render) => {
          if (get(nextLink)?.url) $$render(consequent_1);
          else $$render(alternate_1, -1);
        });
      }
      var ul = sibling(node_3, 2);
      each(ul, 21, () => get(pageLinks), index, ($$anchor3, link) => {
        var li = root_8();
        var node_5 = child(li);
        {
          var consequent_2 = ($$anchor4) => {
            var span_2 = root_9();
            append($$anchor4, span_2);
          };
          var alternate_2 = ($$anchor4) => {
            {
              let $0 = user_derived(() => get(link).active ? "is-current" : "");
              Link($$anchor4, {
                get href() {
                  return get(link).url;
                },
                get class() {
                  return `pagination-link ${get($0) ?? ""}`;
                },
                preserveScroll: true,
                preserveState: true,
                children: ($$anchor5, $$slotProps) => {
                  var fragment_6 = comment();
                  var node_6 = first_child(fragment_6);
                  html(node_6, () => get(link).label);
                  append($$anchor5, fragment_6);
                },
                $$slots: { default: true }
              });
            }
          };
          if_block(node_5, ($$render) => {
            if (get(link).url === null) $$render(consequent_2);
            else $$render(alternate_2, -1);
          });
        }
        append($$anchor3, li);
      });
      append($$anchor2, nav);
    };
    if_block(node, ($$render) => {
      if ($$props.items.total > $$props.items.per_page) $$render(consequent_3);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_1 = from_html(`<div class="table-records-info svelte-11w7kit"><p>Showing <strong> </strong> to <strong> </strong> of <strong> </strong> records</p></div>`);
var root_2 = from_html(`<div class="table-records-info svelte-11w7kit"><p>Total <strong> </strong> records</p></div>`);
var root = from_html(`<!> <!>`, 1);
function TableRecordsInfo($$anchor, $$props) {
  push($$props, true);
  let from = user_derived(() => $$props.results.from);
  let to = user_derived(() => $$props.results.to);
  let total = user_derived(() => $$props.results.total);
  let lastPage = user_derived(() => $$props.results.last_page);
  var fragment = root();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var p = child(div);
      var strong = sibling(child(p));
      var text = child(strong);
      var strong_1 = sibling(strong, 2);
      var text_1 = child(strong_1);
      var strong_2 = sibling(strong_1, 2);
      var text_2 = child(strong_2);
      template_effect(() => {
        set_text(text, get(from));
        set_text(text_1, get(to));
        set_text(text_2, get(total));
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(lastPage) > 1) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_1 = root_2();
      var p_1 = child(div_1);
      var strong_3 = sibling(child(p_1));
      var text_3 = child(strong_3);
      template_effect(() => set_text(text_3, get(total)));
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (get(total) <= $$props.per_page) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
}
export {
  Paginate as P,
  TableRecordsInfo as T
};
//# sourceMappingURL=TableRecordsInfo-CLpCQwK5.js.map
