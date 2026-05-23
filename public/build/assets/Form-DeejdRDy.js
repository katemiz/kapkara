import { p as push, a as prop, H as user_effect, q as get, j as store_mutate, u as untrack, b as if_block, t as template_effect, e as event, c as append, h as child, g as sibling, F as user_derived, I as text, d as pop, s as store_get, f as setup_stores, k as from_html, l as set_text } from "./app-Dy2KnI5v.js";
import { a as set_attribute } from "./attributes-DT5rhWPg.js";
import Layout from "./Layout-Chg3CnSH.js";
import { E as Editor, F as FormUpload } from "./FormUpload-u9rA7m82.js";
import { F as FormInput } from "./FormInput-CCqQRpD2.js";
import { F as FormSelect } from "./FormSelect-C5Mb5MAJ.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-uATdZ-ko.js";
import "./tr-M10fz_dJ.js";
import { T as Title } from "./Title-DLFn2CKD.js";
import { u as useForm } from "./useForm-GQq-NtWR.js";
import { C as Chevron_right } from "./chevron-right-Dy6Q0bV7.js";
import { X } from "./x-8ALEWnlk.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-CaBkEOy0.js";
import "./NavBar-udzgxxP8.js";
import "./users-PDO1V6S0.js";
import "./PdmIcon-lRZI65-c.js";
import "./factory-W8PTHOQY.js";
import "./Footer-DuL1uyT_.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DREvkYhs.js";
import "./this-BKinVkk9.js";
import "./input-DvBqc_hk.js";
import "./plus-BSXuxLRi.js";
import "./pencil-CuRcUfVZ.js";
var root_2 = from_html(`<p class="help is-danger"> </p>`);
var root_4 = from_html(`<a class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_5 = from_html(`<a href="/pdm/standard" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_1 = from_html(`<section class="section container min-height-screen"><!> <!> <form novalidate="" id="genericForm"><!> <!> <!> <div class="fixed-grid has-2-cols"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="field"><label class="label" for="ed">Notes/Comments/Remarks</label> <div class="control" id="ed"><!></div> <!></div> <!> <!> <!> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span><!></span> <span class="icon"><!></span></button></div></form></section>`);
function Form($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let standard = prop($$props, "standard", 3, null), isEdit = prop($$props, "isEdit", 3, false);
  const standardFresh = { ...(() => standard())() };
  let form = useForm({
    organisation: standardFresh?.organisation ?? "",
    standard_number: standardFresh?.standard_number ?? "",
    description: standardFresh?.description ?? "",
    stdFiles: standardFresh?.stdFiles ?? null,
    remarks: standardFresh?.remarks ?? "",
    isActive: standardFresh?.is_active ?? 1
  });
  user_effect(() => {
    if (standardFresh && isEdit()) {
      $form().defaults({
        organisation: standardFresh.organisation,
        standard_number: standardFresh.standard_number,
        description: standardFresh.description,
        stdFiles: standardFresh.stdFiles,
        remarks: standardFresh.remarks,
        isActive: standardFresh.is_active
      });
    }
  });
  let organisations = user_derived(() => $$props.supportFixedData.organisation.map((cat) => ({
    value: cat.value,
    label: cat["value"] + " - " + cat["description"]
  })));
  function submit(e) {
    e.preventDefault();
    if (isEdit()) {
      console.log("trying to edit");
      $form().put(`/pdm/standard/${standard().id}`, {
        onSuccess: () => {
          console.log("Updated successfully!");
        },
        onError: (errors) => {
          console.log("Validation errors:", errors);
        }
      });
    } else {
      console.log("trying to new");
      $form().post("/pdm/standard", {
        onSuccess: () => {
          console.log("Saved successfully!");
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
      var node = child(section);
      {
        let $0 = user_derived(() => isEdit() & standard() != null ? "Edit Standards" + standard().id : "Create a Standard");
        Title(node, {
          title: "Standards",
          get subtitle() {
            return get($0);
          }
        });
      }
      var node_1 = sibling(node, 2);
      ActionButtons(node_1, {
        get form() {
          return form;
        },
        get isEdit() {
          return isEdit();
        },
        get item() {
          return standard();
        },
        form_type: "form",
        route_name: "pdm/standard"
      });
      var form_1 = sibling(node_1, 2);
      var node_2 = child(form_1);
      FormSelect(node_2, {
        get form() {
          return form;
        },
        name: "organisation",
        label: "Product Organisation",
        placeholder: "Select a Organisation",
        get options() {
          return get(organisations);
        },
        required: true
      });
      var node_3 = sibling(node_2, 2);
      FormInput(node_3, {
        get form() {
          return form;
        },
        name: "standard_number",
        label: "Standard Number",
        placeholder: "Enter Standard Number",
        required: true
      });
      var node_4 = sibling(node_3, 2);
      FormInput(node_4, {
        get form() {
          return form;
        },
        name: "description",
        label: "Standard Description",
        placeholder: "Enter Standard Description",
        required: true
      });
      var div = sibling(node_4, 2);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var node_5 = child(div_2);
      FormSelect(node_5, {
        get form() {
          return form;
        },
        name: "parameterIndicates",
        label: "Material Category",
        placeholder: "Select a category",
        get options() {
          return $$props.supportFixedData.materialCategories;
        },
        required: true
      });
      var div_3 = sibling(div_2, 2);
      var node_6 = child(div_3);
      FormSelect(node_6, {
        get form() {
          return form;
        },
        name: "materialForm",
        label: "Material Form",
        placeholder: "Select a form",
        get options() {
          return $$props.supportFixedData.materialForms;
        },
        required: true
      });
      var div_4 = sibling(div, 2);
      var div_5 = sibling(child(div_4), 2);
      var node_7 = child(div_5);
      {
        let $0 = user_derived(() => standard() != null ? standard().remarks : "");
        Editor(node_7, {
          onUpdate: (html) => store_mutate(form, untrack($form).remarks = html, untrack($form)),
          get value() {
            return get($0);
          },
          placeholder: "Enter any notes, comments, or remarks about the standard here..."
        });
      }
      var node_8 = sibling(div_5, 2);
      {
        var consequent = ($$anchor3) => {
          var p = root_2();
          var text2 = child(p);
          template_effect(() => set_text(text2, $form().errors.remarks));
          append($$anchor3, p);
        };
        if_block(node_8, ($$render) => {
          if ($form().errors.remarks) $$render(consequent);
        });
      }
      var node_9 = sibling(div_4, 2);
      {
        var consequent_1 = ($$anchor3) => {
          FilesList($$anchor3, {
            get media() {
              return standard().files;
            }
          });
        };
        if_block(node_9, ($$render) => {
          if (isEdit() && standard().files.length > 0) $$render(consequent_1);
        });
      }
      var node_10 = sibling(node_9, 2);
      FormUpload(node_10, {
        get form() {
          return form;
        },
        name: "stdFiles",
        label: "File Attachments",
        accept: ".pdf,.docx,.doc,.txt,.png",
        multiple: true,
        maxSize: 10,
        showPreview: false
      });
      var node_11 = sibling(node_10, 2);
      FormSelect(node_11, {
        get form() {
          return form;
        },
        name: "isActive",
        label: "Standard Status (Active/Inactive)",
        placeholder: "Select status",
        get options() {
          return $$props.supportFixedData.is_active;
        },
        required: true
      });
      var div_6 = sibling(node_11, 2);
      var node_12 = child(div_6);
      {
        var consequent_2 = ($$anchor3) => {
          var a = root_4();
          var span = child(a);
          var node_13 = child(span);
          X(node_13, { size: "16" });
          template_effect(() => set_attribute(a, "href", `/pdm/standard/${standard().id ?? ""}`));
          append($$anchor3, a);
        };
        var alternate = ($$anchor3) => {
          var a_1 = root_5();
          var span_1 = child(a_1);
          var node_14 = child(span_1);
          X(node_14, { size: "16" });
          append($$anchor3, a_1);
        };
        if_block(node_12, ($$render) => {
          if (isEdit() & standard() != null) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      var button = sibling(node_12, 2);
      var span_2 = child(button);
      var node_15 = child(span_2);
      {
        var consequent_3 = ($$anchor3) => {
          var text_1 = text('"Submitting ..."');
          append($$anchor3, text_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, `${isEdit() ? "Update" : "Create"} Standard`));
          append($$anchor3, text_2);
        };
        if_block(node_15, ($$render) => {
          if ($form().processing) $$render(consequent_3);
          else $$render(alternate_1, -1);
        });
      }
      var span_3 = sibling(span_2, 2);
      var node_16 = child(span_3);
      Chevron_right(node_16, { size: "16" });
      template_effect(() => button.disabled = $form().processing);
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
//# sourceMappingURL=Form-DeejdRDy.js.map
