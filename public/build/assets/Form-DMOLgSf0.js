import { p as push, a as prop, H as user_effect, q as get, j as store_mutate, u as untrack, b as if_block, t as template_effect, e as event, c as append, h as child, g as sibling, F as user_derived, I as text, d as pop, s as store_get, f as setup_stores, k as from_html, l as set_text } from "./app-Dy2KnI5v.js";
import { a as set_attribute } from "./attributes-DT5rhWPg.js";
import Layout from "./Layout-Chg3CnSH.js";
import { E as Editor, F as FormUpload } from "./FormUpload-u9rA7m82.js";
import { F as FormInput } from "./FormInput-CCqQRpD2.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-uATdZ-ko.js";
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
var root_5 = from_html(`<a href="/pdm/crequest" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_1 = from_html(`<section class="section container min-height-screen"><!> <!> <form novalidate="" id="genericForm"><!> <div class="field"><label class="label" for="ed">Detailed Change Request Descrition</label> <div class="control" id="ed"><!></div> <!></div> <!> <!> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span><!></span> <span class="icon"><!></span></button></div></form></section>`);
function Form($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let crequest = prop($$props, "crequest", 3, null), isEdit = prop($$props, "isEdit", 3, false);
  const crequestFresh = { ...(() => crequest())() };
  let form = useForm({
    title: crequestFresh?.title ?? "",
    description: crequestFresh?.description ?? "",
    crFiles: crequestFresh?.docFiles ?? null,
    status: crequestFresh?.status ?? 1
  });
  user_effect(() => {
    if (crequestFresh && isEdit()) {
      $form().defaults({
        title: crequestFresh.title,
        description: crequestFresh.description,
        crFiles: crequestFresh.docFiles,
        status: crequestFresh.status
      });
    }
  });
  function submit(e) {
    e.preventDefault();
    if (isEdit()) {
      $form().put(`/pdm/crequest/${crequest().id}`, {
        onSuccess: () => {
          console.log("Updated successfully!");
        },
        onError: (errors) => {
          console.log("Validation errors:", errors);
        }
      });
    } else {
      $form().post("/pdm/crequest", {
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
        let $0 = user_derived(() => isEdit() & crequest() != null ? "Edit Request" + crequest().id : "Create a Request");
        Title(node, {
          title: "Requests",
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
          return crequest();
        },
        form_type: "form",
        route_name: "pdm/request"
      });
      var form_1 = sibling(node_1, 2);
      var node_2 = child(form_1);
      FormInput(node_2, {
        get form() {
          return form;
        },
        name: "title",
        label: "Change Request Title",
        placeholder: "Enter Change Request Title",
        required: true
      });
      var div = sibling(node_2, 2);
      var div_1 = sibling(child(div), 2);
      var node_3 = child(div_1);
      {
        let $0 = user_derived(() => crequest() != null ? crequest().description : "");
        Editor(node_3, {
          onUpdate: (html) => store_mutate(form, untrack($form).description = html, untrack($form)),
          get value() {
            return get($0);
          },
          placeholder: "Detail change request description here..."
        });
      }
      var node_4 = sibling(div_1, 2);
      {
        var consequent = ($$anchor3) => {
          var p = root_2();
          var text2 = child(p);
          template_effect(() => set_text(text2, $form().errors.description));
          append($$anchor3, p);
        };
        if_block(node_4, ($$render) => {
          if ($form().errors.description) $$render(consequent);
        });
      }
      var node_5 = sibling(div, 2);
      {
        var consequent_1 = ($$anchor3) => {
          FilesList($$anchor3, {
            get media() {
              return crequest().files;
            }
          });
        };
        if_block(node_5, ($$render) => {
          if (isEdit() && crequest().files.length > 0) $$render(consequent_1);
        });
      }
      var node_6 = sibling(node_5, 2);
      FormUpload(node_6, {
        get form() {
          return form;
        },
        name: "crFiles",
        label: "File Attachments",
        accept: ".pdf,.docx,.doc,.txt,.png",
        multiple: true,
        maxSize: 10,
        showPreview: false
      });
      var div_2 = sibling(node_6, 2);
      var node_7 = child(div_2);
      {
        var consequent_2 = ($$anchor3) => {
          var a = root_4();
          var span = child(a);
          var node_8 = child(span);
          X(node_8, { size: "16" });
          template_effect(() => set_attribute(a, "href", `/pdm/crequest/${crequest().id ?? ""}`));
          append($$anchor3, a);
        };
        var alternate = ($$anchor3) => {
          var a_1 = root_5();
          var span_1 = child(a_1);
          var node_9 = child(span_1);
          X(node_9, { size: "16" });
          append($$anchor3, a_1);
        };
        if_block(node_7, ($$render) => {
          if (isEdit() & crequest() != null) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      var button = sibling(node_7, 2);
      var span_2 = child(button);
      var node_10 = child(span_2);
      {
        var consequent_3 = ($$anchor3) => {
          var text_1 = text('"Submitting ..."');
          append($$anchor3, text_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, `${isEdit() ? "Update" : "Create"} Change Request`));
          append($$anchor3, text_2);
        };
        if_block(node_10, ($$render) => {
          if ($form().processing) $$render(consequent_3);
          else $$render(alternate_1, -1);
        });
      }
      var span_3 = sibling(span_2, 2);
      var node_11 = child(span_3);
      Chevron_right(node_11, { size: "16" });
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
//# sourceMappingURL=Form-DMOLgSf0.js.map
