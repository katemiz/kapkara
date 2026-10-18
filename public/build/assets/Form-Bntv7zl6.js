import { v as delegate, d as push, p as prop, F as user_effect, u as untrack, o as set, a as if_block, g as sibling, q as get, t as template_effect, b as append, c as pop, r as state, B as user_derived, k as child, l as set_text, n as delegated, j as from_html, z as comment, m as first_child, y as each, A as index, f as setup_stores, h as store_mutate, e as event, s as store_get, G as text } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { F as FormUpload, E as Editor } from "./FormUpload-DIoi2CAn.js";
import { F as FormInput } from "./FormInput-CJaWZzUI.js";
import { F as FormSelect } from "./FormSelect-vcBHkPN1.js";
import { F as FilesList } from "./FilesList-BRmhjswN.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import { b as bind_value } from "./input-D6UcyCrD.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { u as useForm } from "./useForm-CP0Bw01O.js";
import { S as Save } from "./save-CwmUOwvD.js";
import { C as Chevron_right } from "./chevron-right-CojM0Br_.js";
import { X } from "./x-Cg9sN51b.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-B6fRcdfC.js";
import "./NavBar-BnFd_LJK.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./PdmIcon-BfD2mC8v.js";
import "./factory-baDv4zVQ.js";
import "./box-D-pQSdgi.js";
import "./settings-Cg7pxvZj.js";
import "./users-CjbPgFWT.js";
import "./Footer-D0jJN3Vq.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./index-client-BrUzj1xQ.js";
import "./this-DBviCOsL.js";
import "./paperclip-4sW0jNqk.js";
var root_2$1 = from_html(`<span class="has-text-danger">*</span>`);
var root_1$1 = from_html(`<label class="label"> <!></label>`);
var root_3$1 = from_html(`<button type="button" class="clear-btn svelte-wgmtcp">&times;</button>`);
var root_5 = from_html(`<li class="no-results-msg svelte-wgmtcp">No matching records found.</li>`);
var root_8$1 = from_html(`<span class="badge svelte-wgmtcp">Selected</span>`);
var root_7$1 = from_html(`<li><button type="button"><span class="item-label"> </span> <!></button></li>`);
var root_4 = from_html(`<div class="linked-results-container svelte-wgmtcp"><div class="results-header svelte-wgmtcp"> </div> <ul class="linked-list svelte-wgmtcp"><!></ul></div>`);
var root_9$1 = from_html(`<div class="hint-box svelte-wgmtcp">Type at least <strong> </strong> more characters to display list...</div>`);
var root = from_html(`<div class="field"><!> <div class="input-container svelte-wgmtcp"><input type="text" class="search-input svelte-wgmtcp"/> <!></div> <!></div>`);
function FilterSelect($$anchor, $$props) {
  push($$props, true);
  let options = prop($$props, "options", 19, () => []), placeholder = prop($$props, "placeholder", 3, "Type to search..."), minChars = prop(
    $$props,
    "minChars",
    3,
    4
    // Minimum characters required to display list
  ), selectedValue = prop(
    $$props,
    "selectedValue",
    15,
    null
    // Two-way bound selection identifier
  ), label = prop($$props, "label", 3, ""), name = prop($$props, "name", 3, ""), required = prop($$props, "required", 3, false);
  let searchQuery = state("");
  let isQueryLongEnough = user_derived(() => get(searchQuery).trim().length >= minChars());
  let filteredOptions = user_derived(() => get(isQueryLongEnough) ? options().filter((opt) => opt.label.toLowerCase().includes(get(searchQuery).toLowerCase())) : []);
  user_effect(() => {
    if (selectedValue()) {
      untrack(() => {
        const matched = options().find((opt) => opt.value === selectedValue());
        if (matched) set(searchQuery, matched.label, true);
      });
    }
  });
  function selectItem(option) {
    selectedValue(option.value);
    set(
      searchQuery,
      option.label,
      // Set the input text to show the choice name
      true
    );
  }
  function clearSelection() {
    selectedValue(null);
    set(searchQuery, "");
  }
  var div = root();
  var node = child(div);
  {
    var consequent_1 = ($$anchor2) => {
      var label_1 = root_1$1();
      var text2 = child(label_1);
      var node_1 = sibling(text2);
      {
        var consequent = ($$anchor3) => {
          var span = root_2$1();
          append($$anchor3, span);
        };
        if_block(node_1, ($$render) => {
          if (required()) $$render(consequent);
        });
      }
      template_effect(() => {
        set_attribute(label_1, "for", name());
        set_text(text2, `${label() ?? ""} `);
      });
      append($$anchor2, label_1);
    };
    if_block(node, ($$render) => {
      if (label()) $$render(consequent_1);
    });
  }
  var div_1 = sibling(node, 2);
  var input = child(div_1);
  var node_2 = sibling(input, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var button = root_3$1();
      delegated("click", button, clearSelection);
      append($$anchor2, button);
    };
    if_block(node_2, ($$render) => {
      if (selectedValue() || get(searchQuery)) $$render(consequent_2);
    });
  }
  var node_3 = sibling(div_1, 2);
  {
    var consequent_5 = ($$anchor2) => {
      var div_2 = root_4();
      var div_3 = child(div_2);
      var text_1 = child(div_3);
      var ul = sibling(div_3, 2);
      var node_4 = child(ul);
      {
        var consequent_3 = ($$anchor3) => {
          var li = root_5();
          append($$anchor3, li);
        };
        var alternate = ($$anchor3) => {
          var fragment = comment();
          var node_5 = first_child(fragment);
          each(node_5, 17, () => get(filteredOptions), index, ($$anchor4, option) => {
            var li_1 = root_7$1();
            var button_1 = child(li_1);
            let classes;
            var span_1 = child(button_1);
            var text_2 = child(span_1);
            var node_6 = sibling(span_1, 2);
            {
              var consequent_4 = ($$anchor5) => {
                var span_2 = root_8$1();
                append($$anchor5, span_2);
              };
              if_block(node_6, ($$render) => {
                if (selectedValue() === get(option).value) $$render(consequent_4);
              });
            }
            template_effect(() => {
              classes = set_class(button_1, 1, "list-item-btn svelte-wgmtcp", null, classes, { active: selectedValue() === get(option).value });
              set_text(text_2, get(option).label);
            });
            delegated("click", button_1, () => selectItem(get(option)));
            append($$anchor4, li_1);
          });
          append($$anchor3, fragment);
        };
        if_block(node_4, ($$render) => {
          if (get(filteredOptions).length === 0) $$render(consequent_3);
          else $$render(alternate, -1);
        });
      }
      template_effect(() => set_text(text_1, `Matching Results (${get(filteredOptions).length ?? ""})`));
      append($$anchor2, div_2);
    };
    var consequent_6 = ($$anchor2) => {
      var div_4 = root_9$1();
      var strong = sibling(child(div_4));
      var text_3 = child(strong);
      template_effect(() => set_text(text_3, minChars() - get(searchQuery).length));
      append($$anchor2, div_4);
    };
    if_block(node_3, ($$render) => {
      if (get(isQueryLongEnough)) $$render(consequent_5);
      else if (get(searchQuery).length > 0) $$render(consequent_6, 1);
    });
  }
  template_effect(() => set_attribute(input, "placeholder", placeholder()));
  bind_value(input, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
  append($$anchor, div);
  pop();
}
delegate(["click"]);
const items_config = {
  "item_types": [
    {
      "value": "Assembly",
      "description": "Assembled Component",
      "description_tr": "Montaj"
    },
    {
      "value": "Part",
      "description": "Detail (Make) Part",
      "description_tr": "Parça"
    },
    {
      "value": "Buyable",
      "description": "Buyable Item",
      "description_tr": "Satın Alınabilir"
    },
    {
      "value": "Make-From",
      "description": "Make-From Part",
      "description_tr": "Başkasından Yapılan"
    },
    {
      "value": "Standard",
      "description": "Standard Part",
      "description_tr": "Standart Parça"
    }
  ]
};
var root_2 = from_html(`<a class="button"><span class="icon"><!></span></a>`);
var root_3 = from_html(`<a href="/pdm/item" class="button"><span class="icon"><!></span></a>`);
var root_7 = from_html(`<div class="fixed-grid"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div></div></div> <!>`, 1);
var root_8 = from_html(`<p class="help is-danger"> </p>`);
var root_9 = from_html(`<a class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_10 = from_html(`<a href="/pdm/item" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_1 = from_html(`<section class="section container min-height-screen"><div class="columns"><div class="column is-10"><!></div> <div class="column has-text-right"><button type="submit" form="genericForm" class="button is-dark"><span class="icon is-small"><!></span></button> <!></div></div> <!> <form novalidate="" id="genericForm"><!> <!> <!> <!> <!> <!> <div class="fixed-grid has-cols-2 has-cols-1-mobile"><div class="grid"><div class="cell"><!></div></div></div> <div class="field"><label class="label" for="ed">Notes/Comments/Remarks</label> <div class="control" id="ed"><!></div> <!></div> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span><!></span> <span class="icon"><!></span></button></div></form></section>`);
function Form($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let item = prop($$props, "item", 3, null), results = prop($$props, "results", 19, () => []);
  let form = useForm(untrack(() => ({
    item_type: item()?.item_type ?? "Part",
    number: item()?.number ?? "",
    title: item()?.title ?? "",
    itemfiles: item()?.files ?? null,
    make_from_part_id: item()?.make_from_part_id ?? null,
    remarks: item()?.remarks ?? "",
    status: item()?.status ?? 1
  })));
  user_effect(() => {
    if (item()) {
      $form().defaults({
        item_type: item().item_type,
        number: item().number,
        title: item().title,
        itemfiles: item().files,
        make_from_part_id: item().make_from_part_id,
        remarks: item().remarks,
        status: item().status
      });
    }
  });
  let item_types = user_derived(() => items_config.item_types.map((cat) => ({ value: cat.value, label: cat["description"] })));
  function submit(e) {
    console.log("Form data submitted:", $form().data());
    e.preventDefault();
    if (item()) {
      $form().post(`/pdm/item/${item().id}`, {
        headers: { "X-HTTP-Method-Override": "PUT" },
        // Alternatively, depending on your Inertia adapter configuration, 
        // you can pass `_method: 'PUT'` directly inside your form dataset.
        queryParams: { _method: "PUT" },
        onSuccess: () => {
        },
        onError: (errors) => {
          console.log("Validation errors:", errors);
        }
      });
    } else {
      $form().post("/pdm/item", {
        onSuccess: () => {
          $form().reset();
        },
        onError: (errors) => {
          console.log("Validation errors:", errors);
        }
      });
    }
  }
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var div = child(section);
      var div_1 = child(div);
      var node = child(div_1);
      {
        let $0 = user_derived(() => item() != null ? "Edit Parts/Products/Components " + item().number : "Create a Parts/Products/Components");
        Title(node, {
          title: "Parts/Products/Components",
          get subtitle() {
            return get($0);
          }
        });
      }
      var div_2 = sibling(div_1, 2);
      var button = child(div_2);
      var span = child(button);
      var node_1 = child(span);
      Save(node_1, { size: "20" });
      var node_2 = sibling(button, 2);
      {
        var consequent = ($$anchor3) => {
          var a = root_2();
          var span_1 = child(a);
          var node_3 = child(span_1);
          X(node_3, { size: "20" });
          template_effect(() => set_attribute(a, "href", `/pdm/item/${item().id ?? ""}`));
          append($$anchor3, a);
        };
        var alternate = ($$anchor3) => {
          var a_1 = root_3();
          var span_2 = child(a_1);
          var node_4 = child(span_2);
          X(node_4, { size: "20" });
          append($$anchor3, a_1);
        };
        if_block(node_2, ($$render) => {
          if (item() != null) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      var node_5 = sibling(div, 2);
      {
        var consequent_1 = ($$anchor3) => {
          Title($$anchor3, {
            get title() {
              return item().number;
            }
          });
        };
        if_block(node_5, ($$render) => {
          if (item()) $$render(consequent_1);
        });
      }
      var form_1 = sibling(node_5, 2);
      var node_6 = child(form_1);
      FormSelect(node_6, {
        get form() {
          return form;
        },
        name: "item_type",
        label: "Item Type",
        placeholder: "Select an Item Type",
        get options() {
          return get(item_types);
        },
        required: true
      });
      var node_7 = sibling(node_6, 2);
      FormInput(node_7, {
        get form() {
          return form;
        },
        name: "title",
        label: "Item Title",
        placeholder: "Enter Item Title",
        required: true
      });
      var node_8 = sibling(node_7, 2);
      {
        var consequent_2 = ($$anchor3) => {
          FilesList($$anchor3, {
            get media() {
              return item().files;
            }
          });
        };
        if_block(node_8, ($$render) => {
          if (item() && item().files.length > 0) $$render(consequent_2);
        });
      }
      var node_9 = sibling(node_8, 2);
      FormInput(node_9, {
        get form() {
          return form;
        },
        name: "weight",
        label: "Weight (kg)",
        placeholder: "Enter Weight",
        required: true
      });
      var node_10 = sibling(node_9, 2);
      {
        var consequent_3 = ($$anchor3) => {
          FilterSelect($$anchor3, {
            label: "Make from Part ID",
            name: "make_from_part_id",
            get options() {
              return results();
            },
            placeholder: "Enter Make from Part ID",
            minChars: 4
          });
        };
        if_block(node_10, ($$render) => {
          if ($form().item_type === "Make-From") $$render(consequent_3);
        });
      }
      var node_11 = sibling(node_10, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_4 = root_7();
          var div_3 = first_child(fragment_4);
          var div_4 = child(div_3);
          var div_5 = child(div_4);
          var node_12 = child(div_5);
          FormInput(node_12, {
            get form() {
              return form;
            },
            name: "vendor",
            label: "Vendor ",
            placeholder: "Enter Vendor",
            required: false
          });
          var div_6 = sibling(div_5, 2);
          var node_13 = child(div_6);
          FormInput(node_13, {
            get form() {
              return form;
            },
            name: "vendor_part_number",
            label: "Vendor Part Number",
            placeholder: "Enter Vendor Part Number",
            required: false
          });
          var node_14 = sibling(div_3, 2);
          FormInput(node_14, {
            get form() {
              return form;
            },
            name: "vendor_url",
            label: "Vendor URL",
            placeholder: "Enter Vendor URL",
            required: false
          });
          append($$anchor3, fragment_4);
        };
        if_block(node_11, ($$render) => {
          if ($form().item_type === "Buyable") $$render(consequent_4);
        });
      }
      var div_7 = sibling(node_11, 2);
      var div_8 = child(div_7);
      var div_9 = child(div_8);
      var node_15 = child(div_9);
      FormUpload(node_15, {
        get form() {
          return form;
        },
        name: "itemfiles",
        label: "File Attachments",
        accept: ".pdf,.docx,.doc,.txt,.png",
        multiple: true,
        maxSize: 10,
        showPreview: false
      });
      var div_10 = sibling(div_7, 2);
      var div_11 = sibling(child(div_10), 2);
      var node_16 = child(div_11);
      {
        let $0 = user_derived(() => item() != null ? item().remarks : "");
        Editor(node_16, {
          onUpdate: (html) => store_mutate(form, untrack($form).remarks = html, untrack($form)),
          get value() {
            return get($0);
          },
          placeholder: "Enter any notes, comments, or remarks about the item here..."
        });
      }
      var node_17 = sibling(div_11, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var p = root_8();
          var text2 = child(p);
          template_effect(() => set_text(text2, $form().errors.remarks));
          append($$anchor3, p);
        };
        if_block(node_17, ($$render) => {
          if ($form().errors.remarks) $$render(consequent_5);
        });
      }
      var div_12 = sibling(div_10, 2);
      var node_18 = child(div_12);
      {
        var consequent_6 = ($$anchor3) => {
          var a_2 = root_9();
          var span_3 = child(a_2);
          var node_19 = child(span_3);
          X(node_19, { size: "16" });
          template_effect(() => set_attribute(a_2, "href", `/pdm/item/${item().id ?? ""}`));
          append($$anchor3, a_2);
        };
        var alternate_1 = ($$anchor3) => {
          var a_3 = root_10();
          var span_4 = child(a_3);
          var node_20 = child(span_4);
          X(node_20, { size: "16" });
          append($$anchor3, a_3);
        };
        if_block(node_18, ($$render) => {
          if (item() != null) $$render(consequent_6);
          else $$render(alternate_1, -1);
        });
      }
      var button_1 = sibling(node_18, 2);
      var span_5 = child(button_1);
      var node_21 = child(span_5);
      {
        var consequent_7 = ($$anchor3) => {
          var text_1 = text('"Submitting ..."');
          append($$anchor3, text_1);
        };
        var alternate_2 = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, `${item() ? "Update" : "Create"} Component`));
          append($$anchor3, text_2);
        };
        if_block(node_21, ($$render) => {
          if ($form().processing) $$render(consequent_7);
          else $$render(alternate_2, -1);
        });
      }
      var span_6 = sibling(span_5, 2);
      var node_22 = child(span_6);
      Chevron_right(node_22, { size: "16" });
      template_effect(() => button_1.disabled = $form().processing);
      event("submit", form_1, submit);
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
export {
  Form as default
};
//# sourceMappingURL=Form-Bntv7zl6.js.map
