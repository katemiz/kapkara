import { H as user_effect, c as pop, d as push, o as set, a as if_block, n as delegated, q as get, b as append, k as child, g as sibling, r as state, j as from_html, G as router, v as delegate, C as each, t as template_effect, l as set_text, D as index, F as user_derived } from "./app-B3TC2Fcx.js";
import { h as html } from "./html-D9w_x1Sn.js";
import { a as set_attribute } from "./attributes-BmlKk72Z.js";
import { b as bind_value } from "./input-BdErd1h6.js";
import Layout from "./Layout-DEJXo2nf.js";
import { T as Title } from "./Title-BswqQN3w.js";
import { T as TableRecordsInfo, P as Paginate, S as Search, E as Eye } from "./TableRecordsInfo-Bjg1p4HX.js";
import { P as Plus } from "./plus-mvHohXhy.js";
import { X } from "./x-CZBb4wCq.js";
import { P as Pencil } from "./pencil-BrvL2bPB.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-DS_2IATg.js";
import "./NavBar-Bug_ySFU.js";
import "./users-C3g1dnqi.js";
import "./PdmIcon-nQqjGdVH.js";
import "./factory-XMGy52MX.js";
import "./Footer-CZBn2Ryz.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-BA9CIx4Y.js";
import "./chevron-right-DLv9vRXY.js";
var root_2 = from_html(`<button class="icon is-small is-right is-clickable" style="border:none; background:none;"><!></button>`);
var root_3 = from_html(`<span class="icon is-small is-right"><!></span>`);
var root_5 = from_html(`<tr><td> </td><td></td><td></td><td><a><!></a> <a class="ml-2"><!></a></td></tr>`);
var root_4 = from_html(`<table class="table is-fullwidth"><thead><tr><th>ID</th><th>Dcument Number</th><th>Description</th><th>Actions</th></tr></thead><tbody></tbody></table>`);
var root_6 = from_html(`<div class="notification is-warning is-light">No documents exist</div>`);
var root_1 = from_html(`<section class="section min-height-screen"><!> <nav class="level is-mobile"><div class="level-left"><p class="buttons"><a href="/pdm/document/create" class="button is-link"><span class="icon is-small"><!></span></a></p></div> <div class="level-right"><div class="control has-icons-right"><input class="input" type="text" placeholder="Search..."/> <!></div></div></nav> <!> <!> <!></section>`);
function Index($$anchor, $$props) {
  push($$props, true);
  let searchTerm = state("");
  user_effect(() => {
    set(searchTerm, $$props.filters.search || "", true);
  });
  let showClear = user_derived(() => get(searchTerm).length > 0);
  function doSearch() {
    router.get(
      "/pdm/standard",
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
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, { title: "Documents", subtitle: "List of All Documents" });
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
          return $$props.documents;
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
          each(tbody, 21, () => $$props.documents.data, index, ($$anchor4, document) => {
            var tr = root_5();
            var td = child(tr);
            var text = child(td);
            var td_1 = sibling(td);
            html(td_1, () => get(document).document_no, true);
            var td_2 = sibling(td_1);
            html(td_2, () => get(document).description, true);
            var td_3 = sibling(td_2);
            var a_1 = child(td_3);
            var node_7 = child(a_1);
            Eye(node_7, { size: "24" });
            var a_2 = sibling(a_1, 2);
            var node_8 = child(a_2);
            Pencil(node_8, { size: "20" });
            template_effect(() => {
              set_text(text, get(document).id);
              set_attribute(a_1, "href", `/pdm/document/${get(document).id ?? ""}`);
              set_attribute(a_2, "href", `/pdm/document/${get(document).id ?? ""}/edit`);
            });
            append($$anchor4, tr);
          });
          append($$anchor3, table);
        };
        var alternate_1 = ($$anchor3) => {
          var div_3 = root_6();
          append($$anchor3, div_3);
        };
        if_block(node_6, ($$render) => {
          if ($$props.documents.data.length > 0) $$render(consequent_1);
          else $$render(alternate_1, -1);
        });
      }
      var node_9 = sibling(node_6, 2);
      Paginate(node_9, {
        get items() {
          return $$props.documents;
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
//# sourceMappingURL=Index-B-tGFIZL.js.map
