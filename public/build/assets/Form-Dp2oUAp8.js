import { p as prop, F as user_effect, c as pop, d as push, f as setup_stores, q as get, h as store_mutate, u as untrack, a as if_block, t as template_effect, e as event, b as append, k as child, g as sibling, s as store_get, j as from_html, B as user_derived, l as set_text, G as text } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { E as Editor, F as FormUpload } from "./FormUpload-DIoi2CAn.js";
import { F as FormInput } from "./FormInput-CJaWZzUI.js";
import { F as FormSelect } from "./FormSelect-vcBHkPN1.js";
import { F as FilesList } from "./FilesList-BRmhjswN.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { u as useForm } from "./useForm-CP0Bw01O.js";
import { C as Chevron_right } from "./chevron-right-CojM0Br_.js";
import { X } from "./x-Cg9sN51b.js";
import "./class-iAXZF-Rm.js";
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
import "./input-D6UcyCrD.js";
import "./paperclip-4sW0jNqk.js";
const hbconfig = {
  "families": [
    {
      "value": "TM1",
      "description": "Temiz-1",
      "description_tr": "Temiz-1"
    },
    {
      "value": "TM2",
      "description": "Temiz-2",
      "description_tr": "Temiz-2"
    },
    {
      "value": "ALB",
      "description": "Albayrak",
      "description_tr": "Albayrak"
    }
  ]
};
var root_2 = from_html(`<p class="help is-danger"> </p>`);
var root_4 = from_html(`<a class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_5 = from_html(`<a href="/hidden-blade" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_1 = from_html(`<section class="section container min-height-screen"><!> <form novalidate="" id="genericForm"><div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="field"><label class="label" for="ed">Notes/Comments/Remarks</label> <div class="control" id="ed"><!></div> <!></div> <!> <!> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span><!></span> <span class="icon"><!></span></button></div></form></section>`);
function Form($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let document = prop($$props, "document", 3, null), isEdit = prop($$props, "isEdit", 3, false);
  const doc = { ...(() => document())() };
  let form = useForm({
    doc_type: doc?.doc_type ?? "",
    document_no: doc?.document_no ?? "",
    description: doc?.description ?? "",
    docFiles: doc?.docFiles ?? null,
    remarks: doc?.remarks ?? "",
    status: doc?.status ?? 1
  });
  user_effect(() => {
    if (document() && isEdit()) {
      $form().defaults({
        doc_type: document().doc_type,
        document_no: document().document_no,
        description: document().description,
        docFiles: document().docFiles,
        remarks: document().remarks,
        status: document().status
      });
    }
  });
  let families = user_derived(() => hbconfig.families.map((cat) => ({ value: cat.value, label: cat["description"] })));
  function submit(e) {
    e.preventDefault();
    if (isEdit()) {
      $form().post(`/hidden-blade/${document().id}`, {
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
      $form().post("/hidden-blade", {
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
      var node = child(section);
      {
        let $0 = user_derived(() => isEdit() & document() != null ? "Kişiler" + document().id : "Kişi Ekle");
        Title(node, {
          title: "Kişiler",
          get subtitle() {
            return get($0);
          }
        });
      }
      var form_1 = sibling(node, 2);
      var div = child(form_1);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var node_1 = child(div_2);
      FormSelect(node_1, {
        get form() {
          return form;
        },
        name: "doc_type",
        label: "Family",
        placeholder: "Select a Family",
        get options() {
          return get(families);
        },
        required: true,
        class: "is-fullwidth"
      });
      var div_3 = sibling(div_2, 2);
      var node_2 = child(div_3);
      FormInput(node_2, {
        get form() {
          return form;
        },
        name: "description",
        label: "TC Kimlik Numarası (TCKN)",
        placeholder: "TC Kimlik Numarası",
        required: true
      });
      var div_4 = sibling(div_3, 2);
      var node_3 = child(div_4);
      FormInput(node_3, {
        get form() {
          return form;
        },
        name: "name",
        label: "İsim",
        placeholder: "İsim",
        required: true
      });
      var div_5 = sibling(div_4, 2);
      var node_4 = child(div_5);
      FormInput(node_4, {
        get form() {
          return form;
        },
        name: "surname",
        label: "Soyisim",
        placeholder: "Soyisim",
        required: true
      });
      var div_6 = sibling(div, 2);
      var div_7 = sibling(child(div_6), 2);
      var node_5 = child(div_7);
      {
        let $0 = user_derived(() => document() != null ? document().remarks : "");
        Editor(node_5, {
          onUpdate: (html) => store_mutate(form, untrack($form).remarks = html, untrack($form)),
          get value() {
            return get($0);
          },
          placeholder: "Enter any notes, comments, or remarks about the document here..."
        });
      }
      var node_6 = sibling(div_7, 2);
      {
        var consequent = ($$anchor3) => {
          var p = root_2();
          var text2 = child(p);
          template_effect(() => set_text(text2, $form().errors.remarks));
          append($$anchor3, p);
        };
        if_block(node_6, ($$render) => {
          if ($form().errors.remarks) $$render(consequent);
        });
      }
      var node_7 = sibling(div_6, 2);
      {
        var consequent_1 = ($$anchor3) => {
          FilesList($$anchor3, {
            get media() {
              return document().files;
            }
          });
        };
        if_block(node_7, ($$render) => {
          if (isEdit() && document().files.length > 0) $$render(consequent_1);
        });
      }
      var node_8 = sibling(node_7, 2);
      FormUpload(node_8, {
        get form() {
          return form;
        },
        name: "docFiles",
        label: "File Attachments",
        accept: ".pdf,.docx,.doc,.txt,.png",
        multiple: true,
        maxSize: 10,
        showPreview: false
      });
      var div_8 = sibling(node_8, 2);
      var node_9 = child(div_8);
      {
        var consequent_2 = ($$anchor3) => {
          var a = root_4();
          var span = child(a);
          var node_10 = child(span);
          X(node_10, { size: "16" });
          template_effect(() => set_attribute(a, "href", `/hidden-blade/${document().id ?? ""}`));
          append($$anchor3, a);
        };
        var alternate = ($$anchor3) => {
          var a_1 = root_5();
          var span_1 = child(a_1);
          var node_11 = child(span_1);
          X(node_11, { size: "16" });
          append($$anchor3, a_1);
        };
        if_block(node_9, ($$render) => {
          if (isEdit() & document() != null) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      var button = sibling(node_9, 2);
      var span_2 = child(button);
      var node_12 = child(span_2);
      {
        var consequent_3 = ($$anchor3) => {
          var text_1 = text('"Submitting ..."');
          append($$anchor3, text_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, isEdit() ? "Kişi Güncelle" : "Kişi Ekle"));
          append($$anchor3, text_2);
        };
        if_block(node_12, ($$render) => {
          if ($form().processing) $$render(consequent_3);
          else $$render(alternate_1, -1);
        });
      }
      var span_3 = sibling(span_2, 2);
      var node_13 = child(span_3);
      Chevron_right(node_13, { size: "16" });
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
//# sourceMappingURL=Form-Dp2oUAp8.js.map
