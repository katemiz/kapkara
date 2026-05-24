import { p as prop, H as user_effect, c as pop, d as push, f as setup_stores, q as get, h as store_mutate, u as untrack, a as if_block, t as template_effect, e as event, b as append, g as sibling, k as child, s as store_get, j as from_html, F as user_derived, l as set_text, I as text } from "./app-D1xHItXN.js";
import { a as set_attribute } from "./attributes-BBrSLZ4L.js";
import Layout from "./Layout-C5TGvOFh.js";
import { E as Editor, F as FormUpload } from "./FormUpload-DCwik0PQ.js";
import { F as FormInput } from "./FormInput-YeFeOjpk.js";
import { F as FormSelect } from "./FormSelect-qE-btUOn.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-D_oA6R74.js";
import "./tr-M10fz_dJ.js";
import { T as Title } from "./Title-B6GQ1EA4.js";
import { u as useForm } from "./useForm-DTXdJGxx.js";
import { C as Chevron_right } from "./chevron-right-GqX3b4EK.js";
import { X } from "./x-BVyjFpQB.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-BX5Z-D-s.js";
import "./NavBar-C-vrATIV.js";
import "./users-jlfJKlAC.js";
import "./PdmIcon-D6gvppf-.js";
import "./factory-COgsJOzY.js";
import "./Footer-Ys_QHNvW.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DC8gmDP1.js";
import "./this-DuZu_hTw.js";
import "./input-DV9WvhAT.js";
import "./plus-DM0mjF-b.js";
import "./pencil-OM6xfdyP.js";
var root_2 = from_html(`<p class="help is-danger"> </p>`);
var root_4 = from_html(`<a class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_5 = from_html(`<a href="/material" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_1 = from_html(`<section class="section container min-height-screen"><!> <!> <form novalidate="" id="genericForm"><div class="fixed-grid has-2-cols"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div></div></div> <!> <!> <div class="field"><label class="label" for="ed">Notes/Comments/Remarks</label> <div class="control" id="ed"><!></div> <!></div> <!> <!> <!> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span><!></span> <span class="icon"><!></span></button></div></form></section>`);
function Form($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let material = prop($$props, "material", 3, null), isEdit = prop($$props, "isEdit", 3, false);
  const material2 = { ...(() => material())() };
  let form = useForm({
    materialCategory: material2?.category ?? "",
    materialForm: material2?.form ?? "",
    materialName: material2?.description ?? "",
    materialSpecification: material2?.specification ?? "",
    materialFiles: material2?.materialFiles ?? null,
    materialNotes: material2?.remarks ?? "",
    materialIsActive: material2?.is_active ?? 1
  });
  user_effect(() => {
    if (material2 && isEdit()) {
      $form().defaults({
        materialCategory: material2.category,
        materialForm: material2.form,
        materialName: material2.description,
        materialSpecification: material2.specification,
        materialFiles: material2.files,
        materialNotes: material2.remarks,
        materialIsActive: material2.is_active
      });
    }
  });
  function submit(e) {
    console.log("Form data submitted:", $form().data());
    e.preventDefault();
    if (isEdit()) {
      console.log("trying to edit");
      $form().put(`/material/${material().id}`, {
        onSuccess: () => {
          console.log("Updated successfully!");
        },
        onError: (errors) => {
          console.log("Validation errors:", errors);
        }
      });
    } else {
      console.log("trying to new");
      $form().post("/material", {
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
        let $0 = user_derived(() => isEdit() & material() != null ? "Edit Material Definition" + material().id : "Create a Material Definition");
        Title(node, {
          title: "Materials",
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
          return material();
        },
        form_type: "form",
        route_name: "material"
      });
      var form_1 = sibling(node_1, 2);
      var div = child(form_1);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var node_2 = child(div_2);
      FormSelect(node_2, {
        get form() {
          return form;
        },
        name: "materialCategory",
        label: "Material Category",
        placeholder: "Select a category",
        get options() {
          return $$props.supportFixedData.materialCategories;
        },
        required: true
      });
      var div_3 = sibling(div_2, 2);
      var node_3 = child(div_3);
      FormSelect(node_3, {
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
      var node_4 = sibling(div, 2);
      FormInput(node_4, {
        get form() {
          return form;
        },
        name: "materialName",
        label: "Material Name/Description",
        placeholder: "Enter material Name/Description",
        required: true
      });
      var node_5 = sibling(node_4, 2);
      FormInput(node_5, {
        get form() {
          return form;
        },
        name: "materialSpecification",
        label: "Material Specification",
        placeholder: "Enter material specification"
      });
      var div_4 = sibling(node_5, 2);
      var div_5 = sibling(child(div_4), 2);
      var node_6 = child(div_5);
      {
        let $0 = user_derived(() => material() != null ? material().remarks : "");
        Editor(node_6, {
          onUpdate: (html) => store_mutate(form, untrack($form).materialNotes = html, untrack($form)),
          get value() {
            return get($0);
          },
          placeholder: "Enter any notes, comments, or remarks about the material here..."
        });
      }
      var node_7 = sibling(div_5, 2);
      {
        var consequent = ($$anchor3) => {
          var p = root_2();
          var text2 = child(p);
          template_effect(() => set_text(text2, $form().errors.materialNotes));
          append($$anchor3, p);
        };
        if_block(node_7, ($$render) => {
          if ($form().errors.materialNotes) $$render(consequent);
        });
      }
      var node_8 = sibling(div_4, 2);
      {
        var consequent_1 = ($$anchor3) => {
          FilesList($$anchor3, {
            get media() {
              return material().files;
            }
          });
        };
        if_block(node_8, ($$render) => {
          if (isEdit() && material().files.length > 0) $$render(consequent_1);
        });
      }
      var node_9 = sibling(node_8, 2);
      FormUpload(node_9, {
        get form() {
          return form;
        },
        name: "materialFiles",
        label: "File Attachments",
        accept: ".pdf,.docx,.doc,.txt,.png",
        multiple: true,
        maxSize: 10,
        showPreview: false
      });
      var node_10 = sibling(node_9, 2);
      FormSelect(node_10, {
        get form() {
          return form;
        },
        name: "materialIsActive",
        label: "Material Status (Active/Inactive)",
        placeholder: "Select status",
        get options() {
          return $$props.supportFixedData.materialIsActive;
        },
        required: true
      });
      var div_6 = sibling(node_10, 2);
      var node_11 = child(div_6);
      {
        var consequent_2 = ($$anchor3) => {
          var a = root_4();
          var span = child(a);
          var node_12 = child(span);
          X(node_12, { size: "16" });
          template_effect(() => set_attribute(a, "href", `/material/${material().id ?? ""}`));
          append($$anchor3, a);
        };
        var alternate = ($$anchor3) => {
          var a_1 = root_5();
          var span_1 = child(a_1);
          var node_13 = child(span_1);
          X(node_13, { size: "16" });
          append($$anchor3, a_1);
        };
        if_block(node_11, ($$render) => {
          if (isEdit() & material() != null) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      var button = sibling(node_11, 2);
      var span_2 = child(button);
      var node_14 = child(span_2);
      {
        var consequent_3 = ($$anchor3) => {
          var text_1 = text('"Submitting ..."');
          append($$anchor3, text_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, `${isEdit() ? "Update" : "Create"} Material`));
          append($$anchor3, text_2);
        };
        if_block(node_14, ($$render) => {
          if ($form().processing) $$render(consequent_3);
          else $$render(alternate_1, -1);
        });
      }
      var span_3 = sibling(span_2, 2);
      var node_15 = child(span_3);
      Chevron_right(node_15, { size: "16" });
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
//# sourceMappingURL=Form-C2bAogWx.js.map
