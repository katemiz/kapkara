import { r as state, w as proxy, F as user_effect, c as pop, d as push, q as get, o as set, I as router, a as if_block, b as append, k as child, g as sibling, j as from_html, v as delegate, n as delegated, y as each, t as template_effect, l as set_text, A as index } from "./app-B8UKlAbY.js";
import { h as html } from "./html-D3C1hjzf.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import { a as bind_checked, b as bind_value } from "./input-D6UcyCrD.js";
import Layout from "./Layout-D-KKXIKv.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { T as TableRecordsInfo, P as Paginate } from "./TableRecordsInfo-CLpCQwK5.js";
import { P as Plus } from "./plus-CnOy2VL6.js";
import { X } from "./x-Cg9sN51b.js";
import { S as Search } from "./search-DeW-Ui_G.js";
import { E as Eye } from "./eye-vr6OZr3k.js";
import { P as Pencil } from "./pencil-BgjkhNtP.js";
import "./class-iAXZF-Rm.js";
import "./slot-DtgNxSws.js";
import "./NavBar-DQB8gZzj.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./hand-helping-D6zNrn11.js";
import "./users-CjbPgFWT.js";
import "./box-D-pQSdgi.js";
import "./user-CTgn9ZX8.js";
import "./Footer-DLPtpFxf.js";
import "./link-Z_9ghKzW.js";
import "./chevron-right-CojM0Br_.js";
var root_2 = from_html(`<button class="icon is-small is-right is-clickable" style="border:none; background:none;"><!></button>`);
var root_3 = from_html(`<span class="icon is-small is-right"><!></span>`);
var root_5 = from_html(`<tr><td> </td><td></td><td> </td><td> </td><td class="has-text-right"><a><!></a> <a class="ml-2"><!></a></td></tr>`);
var root_4 = from_html(`<table class="table is-fullwidth"><thead><tr><th>ID</th><th>Asset Title</th><th>Author</th><th>Date</th><th class="has-text-right">Actions</th></tr></thead><tbody></tbody></table>`);
var root_6 = from_html(`<div class="notification is-warning is-light">No assets exist</div>`);
var root_1 = from_html(`<section class="section container"><div class="columns"><div class="column is-10"><!></div> <div class="column has-text-right"><div class="field"><div class="control"><label class="checkbox"><input type="checkbox"/> Show Latest Only</label></div></div></div></div> <nav class="level is-mobile"><div class="level-left"><p class="buttons"><a href="/mylib/create" class="button is-link"><span class="icon is-small"><!></span> <span>Add Asset</span></a></p></div> <div class="level-right"><div class="control has-icons-right"><input class="input" type="text" placeholder="Search..."/> <!></div></div></nav> <!> <!> <!></section>`);
function Index($$anchor, $$props) {
  push($$props, true);
  let clearSearchIcon = state(false);
  let query = state(proxy($$props.filters.search));
  let showLatestOnly = state(proxy($$props.filters.show_latest_only));
  user_effect(() => {
    if (get(query)) {
      set(clearSearchIcon, true);
      if (get(query) && get(query).length > 2) {
        doSearch();
      }
    } else {
      set(clearSearchIcon, false);
      doSearch();
    }
    console.log(get(query), get(showLatestOnly));
  });
  function doSearch() {
    router.get(
      "/mylib",
      {
        search: get(query),
        show_latest_only: get(showLatestOnly)
      },
      {
        preserveState: true,
        replace: true,
        // Prevents flooding browser history with every single keystroke
        preserveScroll: true
      }
    );
  }
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(date));
  }
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var div = child(section);
      var div_1 = child(div);
      var node = child(div_1);
      Title(node, {
        title: "My Assets",
        subtitle: "List of All My Digital Assets"
      });
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var label = child(div_4);
      var input = child(label);
      var nav = sibling(div, 2);
      var div_5 = child(nav);
      var p = child(div_5);
      var a = child(p);
      var span = child(a);
      var node_1 = child(span);
      Plus(node_1, { size: "16" });
      var div_6 = sibling(div_5, 2);
      var div_7 = child(div_6);
      var input_1 = child(div_7);
      var node_2 = sibling(input_1, 2);
      {
        var consequent = ($$anchor3) => {
          var button = root_2();
          var node_3 = child(button);
          X(node_3, { size: "16" });
          delegated("click", button, () => {
            set(query, "");
            set(clearSearchIcon, false);
            doSearch();
          });
          append($$anchor3, button);
        };
        var alternate = ($$anchor3) => {
          var span_1 = root_3();
          var node_4 = child(span_1);
          Search(node_4, { size: "16" });
          append($$anchor3, span_1);
        };
        if_block(node_2, ($$render) => {
          if (get(clearSearchIcon)) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      var node_5 = sibling(nav, 2);
      TableRecordsInfo(node_5, {
        get results() {
          return $$props.assets;
        },
        get per_page() {
          return $$props.per_page;
        }
      });
      var node_6 = sibling(node_5, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var table = root_4();
          var tbody = sibling(child(table));
          each(tbody, 21, () => $$props.assets.data, index, ($$anchor4, asset) => {
            var tr = root_5();
            var td = child(tr);
            var text = child(td);
            var td_1 = sibling(td);
            html(td_1, () => get(asset).title, true);
            var td_2 = sibling(td_1);
            var text_1 = child(td_2);
            var td_3 = sibling(td_2);
            var text_2 = child(td_3);
            var td_4 = sibling(td_3);
            var a_1 = child(td_4);
            var node_7 = child(a_1);
            Eye(node_7, { size: "24" });
            var a_2 = sibling(a_1, 2);
            var node_8 = child(a_2);
            Pencil(node_8, { size: "20" });
            template_effect(
              ($0) => {
                set_text(text, `A${get(asset).id ?? ""}`);
                set_text(text_1, get(asset).created_user_mail);
                set_text(text_2, $0);
                set_attribute(a_1, "href", `mylib/${get(asset).id ?? ""}`);
                set_attribute(a_2, "href", `mylib/${get(asset).id ?? ""}/edit`);
              },
              [() => formatDate(get(asset).updated_at)]
            );
            append($$anchor4, tr);
          });
          append($$anchor3, table);
        };
        var alternate_1 = ($$anchor3) => {
          var div_8 = root_6();
          append($$anchor3, div_8);
        };
        if_block(node_6, ($$render) => {
          if ($$props.assets.data.length > 0) $$render(consequent_1);
          else $$render(alternate_1, -1);
        });
      }
      var node_9 = sibling(node_6, 2);
      Paginate(node_9, {
        get items() {
          return $$props.assets;
        }
      });
      bind_checked(input, () => get(showLatestOnly), ($$value) => set(showLatestOnly, $$value));
      bind_value(input_1, () => get(query), ($$value) => set(query, $$value));
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
delegate(["click"]);
export {
  Index as default
};
//# sourceMappingURL=Index-CD989lvG.js.map
