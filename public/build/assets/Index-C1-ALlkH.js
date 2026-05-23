import { H as user_effect, c as pop, d as push, o as set, a as if_block, n as delegated, q as get, b as append, k as child, g as sibling, r as state, j as from_html, G as router, v as delegate, C as each, t as template_effect, l as set_text, D as index, F as user_derived } from "./app-DmZvep12.js";
import { h as html } from "./html-DrC0gcym.js";
import { a as set_attribute } from "./attributes-B9LAyNIy.js";
import { b as bind_value } from "./input-B6Jcagma.js";
import Layout from "./Layout-BvwSG3qv.js";
import { T as Title } from "./Title-CdSK7QuY.js";
import { T as TableRecordsInfo, P as Paginate, S as Search, E as Eye } from "./TableRecordsInfo-DKd_MrID.js";
import { P as Plus } from "./plus-H0BSzWoD.js";
import { X } from "./x-C40upeuH.js";
import { P as Pencil } from "./pencil-BH3Zg3nn.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-Bf-10Ive.js";
import "./NavBar-G195NlxZ.js";
import "./users-DktRnX1j.js";
import "./PdmIcon-6wom0yWG.js";
import "./factory-BAoKQd0v.js";
import "./Footer-Dlho2n6k.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-Dn11Qf-8.js";
import "./chevron-right-DtQ7WA80.js";
var root_2 = from_html(`<button class="icon is-small is-right is-clickable" style="border:none; background:none;"><!></button>`);
var root_3 = from_html(`<span class="icon is-small is-right"><!></span>`);
var root_5 = from_html(`<tr><td> </td><td> </td><td></td><td></td><td> </td><td><a><!></a> <a class="ml-2"><!></a></td></tr>`);
var root_4 = from_html(`<table class="table is-fullwidth"><thead><tr><th>ID</th><th>Product Note Category</th><th>Description [Türkçe]</th><th>Description [English]</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody></table>`);
var root_6 = from_html(`<div class="notification is-warning is-light">No product notes exist</div>`);
var root_1 = from_html(`<section class="section min-height-screen"><!> <nav class="level is-mobile"><div class="level-left"><p class="buttons"><a href="/pdm/product-note/create" class="button is-link"><span class="icon is-small"><!></span></a></p></div> <div class="level-right"><div class="control has-icons-right"><input class="input" type="text" placeholder="Search..."/> <!></div></div></nav> <!> <!> <!></section>`);
function Index($$anchor, $$props) {
  push($$props, true);
  let searchTerm = state("");
  user_effect(() => {
    set(searchTerm, $$props.filters.search || "", true);
  });
  let showClear = user_derived(() => get(searchTerm).length > 0);
  function doSearch() {
    router.get(
      "/pdm/product-note",
      {
        search: get(searchTerm),
        page: 1
        // Explicitly reset to page 1 on every new search
      },
      { preserveState: false, replace: false, preserveScroll: true }
    );
  }
  function clearSearch() {
    set(searchTerm, "");
    doSearch();
  }
  let timer;
  const handleInput = () => {
    clearTimeout(timer);
    timer = setTimeout(
      () => {
        if (get(searchTerm).length >= 3 || get(searchTerm).length === 0) {
          doSearch();
        }
      },
      300
    );
  };
  function findInArray(value, inWhat) {
    if (inWhat === "status") {
      var arr = $$props.supportFixedData.productNoteIsActive;
      const found = arr.find((item) => item.value === value);
      return found ? found.label : value;
    }
    if (inWhat === "category") {
      var arr = $$props.supportFixedData.productNoteCategories;
      const found = arr.find((item) => item.value === value);
      return found ? found.description_en + " / " + found.description_tr : value;
    }
  }
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, {
        title: "Product Notes",
        subtitle: "List of All Product Notes"
      });
      var nav = sibling(node, 2);
      var div = child(nav);
      var p = child(div);
      var a = child(p);
      var span = child(a);
      var node_1 = child(span);
      Plus(node_1, { size: "16" });
      var div_1 = sibling(div, 2);
      var div_2 = child(div_1);
      var input = child(div_2);
      var node_2 = sibling(input, 2);
      {
        var consequent = ($$anchor3) => {
          var button = root_2();
          var node_3 = child(button);
          X(node_3, { size: "16" });
          delegated("click", button, clearSearch);
          append($$anchor3, button);
        };
        var alternate = ($$anchor3) => {
          var span_1 = root_3();
          var node_4 = child(span_1);
          Search(node_4, { size: "16" });
          append($$anchor3, span_1);
        };
        if_block(node_2, ($$render) => {
          if (get(showClear)) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      var node_5 = sibling(nav, 2);
      TableRecordsInfo(node_5, {
        get results() {
          return $$props.product_notes;
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
          each(tbody, 21, () => $$props.product_notes.data, index, ($$anchor4, product_note) => {
            var tr = root_5();
            var td = child(tr);
            var text = child(td);
            var td_1 = sibling(td);
            var text_1 = child(td_1);
            var td_2 = sibling(td_1);
            html(td_2, () => get(product_note).description_tr, true);
            var td_3 = sibling(td_2);
            html(td_3, () => get(product_note).description_en, true);
            var td_4 = sibling(td_3);
            var text_2 = child(td_4);
            var td_5 = sibling(td_4);
            var a_1 = child(td_5);
            var node_7 = child(a_1);
            Eye(node_7, { size: "24" });
            var a_2 = sibling(a_1, 2);
            var node_8 = child(a_2);
            Pencil(node_8, { size: "20" });
            template_effect(
              ($0, $1) => {
                set_text(text, get(product_note).id);
                set_text(text_1, $0);
                set_text(text_2, $1);
                set_attribute(a_1, "href", `/pdm/product-note/${get(product_note).id ?? ""}`);
                set_attribute(a_2, "href", `/pdm/product-note/${get(product_note).id ?? ""}/edit`);
              },
              [
                () => findInArray(get(product_note).category, "category"),
                () => findInArray(get(product_note).is_active, "status")
              ]
            );
            append($$anchor4, tr);
          });
          append($$anchor3, table);
        };
        var alternate_1 = ($$anchor3) => {
          var div_3 = root_6();
          append($$anchor3, div_3);
        };
        if_block(node_6, ($$render) => {
          if ($$props.product_notes.data.length > 0) $$render(consequent_1);
          else $$render(alternate_1, -1);
        });
      }
      var node_9 = sibling(node_6, 2);
      Paginate(node_9, {
        get items() {
          return $$props.product_notes;
        }
      });
      delegated("input", input, handleInput);
      bind_value(input, () => get(searchTerm), ($$value) => set(searchTerm, $$value));
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
delegate(["input", "click"]);
export {
  Index as default
};
//# sourceMappingURL=Index-C1-ALlkH.js.map
