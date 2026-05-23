import { p as prop, H as user_effect, c as pop, d as push, f as setup_stores, q as get, h as store_mutate, u as untrack, a as if_block, t as template_effect, e as event, b as append, g as sibling, k as child, s as store_get, j as from_html, F as user_derived, l as set_text, I as text } from "./app-DmZvep12.js";
import { a as set_attribute } from "./attributes-B9LAyNIy.js";
import Layout from "./Layout-BvwSG3qv.js";
import { E as Editor, F as FormUpload } from "./FormUpload-BB8arxpK.js";
import { F as FormInput } from "./FormInput-DaE8XAfm.js";
import { F as FormSelect } from "./FormSelect-D-mEHEp8.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-etvIfIiY.js";
import "./tr-M10fz_dJ.js";
import { T as Title } from "./Title-CdSK7QuY.js";
import { u as useForm } from "./useForm-CewZFUen.js";
import { C as Chevron_right } from "./chevron-right-DtQ7WA80.js";
import { X } from "./x-C40upeuH.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-Bf-10Ive.js";
import "./NavBar-G195NlxZ.js";
import "./users-DktRnX1j.js";
import "./PdmIcon-6wom0yWG.js";
import "./factory-BAoKQd0v.js";
import "./Footer-Dlho2n6k.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-Dn11Qf-8.js";
import "./this-CCnJv5FU.js";
import "./input-B6Jcagma.js";
import "./plus-H0BSzWoD.js";
import "./pencil-BH3Zg3nn.js";
var root_2 = from_html(`<p class="help is-danger"> </p>`);
var root_4 = from_html(`<a class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_5 = from_html(`<a href="/pdm/product-note" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_1 = from_html(`<section class="section container min-height-screen"><!> <!> <form novalidate="" id="genericForm"><!> <!> <!> <div class="field"><label class="label" for="ed">Notes/Comments/Remarks</label> <div class="control" id="ed"><!></div> <!></div> <!> <!> <!> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span><!></span> <span class="icon"><!></span></button></div></form></section>`);
function Form($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let product_note = prop($$props, "product_note", 3, null), isEdit = prop($$props, "isEdit", 3, false);
  const pnote = { ...(() => product_note())() };
  let form = useForm({
    pnCategory: pnote?.category ?? "",
    description_tr: pnote?.description_tr ?? "",
    description_en: pnote?.description_en ?? "",
    pnFiles: pnote?.pnFiles ?? null,
    pnNotes: pnote?.remarks ?? "",
    productNoteIsActive: pnote?.is_active ?? 1
  });
  user_effect(() => {
    if (pnote && isEdit()) {
      $form().defaults({
        pnCategory: pnote.category,
        description_tr: pnote.description_tr,
        description_en: pnote.description_en,
        pnFiles: pnote.pnFiles,
        pnNotes: pnote.remarks,
        productNoteIsActive: pnote.is_active
      });
    }
  });
  let pnCategories = user_derived(() => $$props.supportFixedData.productNoteCategories.map((cat) => ({
    value: cat.value,
    label: cat["description_en"] + " / " + cat["description_tr"]
  })));
  function submit(e) {
    console.log("Form data submitted:", $form().data());
    e.preventDefault();
    if (isEdit()) {
      console.log("trying to edit");
      $form().put(`/pdm/product-note/${product_note().id}`, {
        onSuccess: () => {
          console.log("Updated successfully!");
        },
        onError: (errors) => {
          console.log("Validation errors:", errors);
        }
      });
    } else {
      console.log("trying to new");
      $form().post("/pdm/product-note", {
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
        let $0 = user_derived(() => isEdit() & product_note() != null ? "Edit Product Note" + product_note().id : "Create a Product Note");
        Title(node, {
          title: "Product Notes",
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
          return product_note();
        },
        form_type: "form",
        route_name: "pdm/product-note"
      });
      var form_1 = sibling(node_1, 2);
      var node_2 = child(form_1);
      FormSelect(node_2, {
        get form() {
          return form;
        },
        name: "pnCategory",
        label: "Product Note Category",
        placeholder: "Select a category",
        get options() {
          return get(pnCategories);
        },
        required: true
      });
      var node_3 = sibling(node_2, 2);
      FormInput(node_3, {
        get form() {
          return form;
        },
        name: "description_tr",
        label: "Product and Process Note (Türkçe)",
        placeholder: "Enter Product and Process Note (Türkçe)",
        required: true
      });
      var node_4 = sibling(node_3, 2);
      FormInput(node_4, {
        get form() {
          return form;
        },
        name: "description_en",
        label: "Product and Process Note (English)",
        placeholder: "Enter Product and Process Note (English)",
        required: true
      });
      var div = sibling(node_4, 2);
      var div_1 = sibling(child(div), 2);
      var node_5 = child(div_1);
      {
        let $0 = user_derived(() => product_note() != null ? product_note().remarks : "");
        Editor(node_5, {
          onUpdate: (html) => store_mutate(form, untrack($form).pnNotes = html, untrack($form)),
          get value() {
            return get($0);
          },
          placeholder: "Enter any notes, comments, or remarks about the product note here..."
        });
      }
      var node_6 = sibling(div_1, 2);
      {
        var consequent = ($$anchor3) => {
          var p = root_2();
          var text2 = child(p);
          template_effect(() => set_text(text2, $form().errors.pnNotes));
          append($$anchor3, p);
        };
        if_block(node_6, ($$render) => {
          if ($form().errors.pnNotes) $$render(consequent);
        });
      }
      var node_7 = sibling(div, 2);
      {
        var consequent_1 = ($$anchor3) => {
          FilesList($$anchor3, {
            get media() {
              return product_note().files;
            }
          });
        };
        if_block(node_7, ($$render) => {
          if (isEdit() && product_note().files.length > 0) $$render(consequent_1);
        });
      }
      var node_8 = sibling(node_7, 2);
      FormUpload(node_8, {
        get form() {
          return form;
        },
        name: "pnFiles",
        label: "File Attachments",
        accept: ".pdf,.docx,.doc,.txt,.png",
        multiple: true,
        maxSize: 10,
        showPreview: false
      });
      var node_9 = sibling(node_8, 2);
      FormSelect(node_9, {
        get form() {
          return form;
        },
        name: "productNoteIsActive",
        label: "Product Note Status (Active/Inactive)",
        placeholder: "Select status",
        get options() {
          return $$props.supportFixedData.productNoteIsActive;
        },
        required: true
      });
      var div_2 = sibling(node_9, 2);
      var node_10 = child(div_2);
      {
        var consequent_2 = ($$anchor3) => {
          var a = root_4();
          var span = child(a);
          var node_11 = child(span);
          X(node_11, { size: "16" });
          template_effect(() => set_attribute(a, "href", `/pdm/product-note/${product_note().id ?? ""}`));
          append($$anchor3, a);
        };
        var alternate = ($$anchor3) => {
          var a_1 = root_5();
          var span_1 = child(a_1);
          var node_12 = child(span_1);
          X(node_12, { size: "16" });
          append($$anchor3, a_1);
        };
        if_block(node_10, ($$render) => {
          if (isEdit() & product_note() != null) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      var button = sibling(node_10, 2);
      var span_2 = child(button);
      var node_13 = child(span_2);
      {
        var consequent_3 = ($$anchor3) => {
          var text_1 = text('"Submitting ..."');
          append($$anchor3, text_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, `${isEdit() ? "Update" : "Create"} Product Note`));
          append($$anchor3, text_2);
        };
        if_block(node_13, ($$render) => {
          if ($form().processing) $$render(consequent_3);
          else $$render(alternate_1, -1);
        });
      }
      var span_3 = sibling(span_2, 2);
      var node_14 = child(span_3);
      Chevron_right(node_14, { size: "16" });
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
//# sourceMappingURL=Form-Cy9rWDxZ.js.map
