import { p as prop, F as user_effect, c as pop, d as push, f as setup_stores, q as get, h as store_mutate, u as untrack, a as if_block, t as template_effect, e as event, b as append, g as sibling, k as child, s as store_get, j as from_html, B as user_derived, l as set_text, G as text } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { E as Editor, F as FormUpload } from "./FormUpload-DIoi2CAn.js";
import { F as FormInput } from "./FormInput-CJaWZzUI.js";
import { F as FormSelect } from "./FormSelect-vcBHkPN1.js";
import { F as FilesList } from "./FilesList-BRmhjswN.js";
import { A as ActionButtons } from "./ActionButtons-DCszl-6F.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { d as docs_config } from "./docs_config-DnDS-wOo.js";
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
import "./DeleteButton-BLTAYatj.js";
import "./table-of-contents-CyZgqQSp.js";
import "./plus-CnOy2VL6.js";
import "./pencil-BgjkhNtP.js";
import "./save-CwmUOwvD.js";
var root_2 = from_html(`<p class="help is-danger"> </p>`);
var root_4 = from_html(`<a class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_5 = from_html(`<a href="/pdm/document" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_1 = from_html(`<section class="section container min-height-screen"><!> <!> <form novalidate="" id="genericForm"><!> <!> <div class="field"><label class="label" for="ed">Notes/Comments/Remarks</label> <div class="control" id="ed"><!></div> <!></div> <!> <!> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span><!></span> <span class="icon"><!></span></button></div></form></section>`);
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
  let doc_types = user_derived(() => docs_config.doc_types.map((cat) => ({ value: cat.value, label: cat["description"] })));
  function submit(e) {
    e.preventDefault();
    if (isEdit()) {
      $form().post(`/pdm/document/${document().id}`, {
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
      $form().post("/pdm/document", {
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
        let $0 = user_derived(() => isEdit() & document() != null ? "Edit Document" + document().id : "Create a Document");
        Title(node, {
          title: "Documents",
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
          return document();
        },
        form_type: "form",
        route_name: "pdm/document"
      });
      var form_1 = sibling(node_1, 2);
      var node_2 = child(form_1);
      FormSelect(node_2, {
        get form() {
          return form;
        },
        name: "doc_type",
        label: "Document Type",
        placeholder: "Select a Document Type",
        get options() {
          return get(doc_types);
        },
        required: true
      });
      var node_3 = sibling(node_2, 2);
      FormInput(node_3, {
        get form() {
          return form;
        },
        name: "description",
        label: "Document Description",
        placeholder: "Enter Document Description",
        required: true
      });
      var div = sibling(node_3, 2);
      var div_1 = sibling(child(div), 2);
      var node_4 = child(div_1);
      {
        let $0 = user_derived(() => document() != null ? document().remarks : "");
        Editor(node_4, {
          onUpdate: (html) => store_mutate(form, untrack($form).remarks = html, untrack($form)),
          get value() {
            return get($0);
          },
          placeholder: "Enter any notes, comments, or remarks about the document here..."
        });
      }
      var node_5 = sibling(div_1, 2);
      {
        var consequent = ($$anchor3) => {
          var p = root_2();
          var text2 = child(p);
          template_effect(() => set_text(text2, $form().errors.remarks));
          append($$anchor3, p);
        };
        if_block(node_5, ($$render) => {
          if ($form().errors.remarks) $$render(consequent);
        });
      }
      var node_6 = sibling(div, 2);
      {
        var consequent_1 = ($$anchor3) => {
          FilesList($$anchor3, {
            get media() {
              return document().files;
            }
          });
        };
        if_block(node_6, ($$render) => {
          if (isEdit() && document().files.length > 0) $$render(consequent_1);
        });
      }
      var node_7 = sibling(node_6, 2);
      FormUpload(node_7, {
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
      var div_2 = sibling(node_7, 2);
      var node_8 = child(div_2);
      {
        var consequent_2 = ($$anchor3) => {
          var a = root_4();
          var span = child(a);
          var node_9 = child(span);
          X(node_9, { size: "16" });
          template_effect(() => set_attribute(a, "href", `/pdm/document/${document().id ?? ""}`));
          append($$anchor3, a);
        };
        var alternate = ($$anchor3) => {
          var a_1 = root_5();
          var span_1 = child(a_1);
          var node_10 = child(span_1);
          X(node_10, { size: "16" });
          append($$anchor3, a_1);
        };
        if_block(node_8, ($$render) => {
          if (isEdit() & document() != null) $$render(consequent_2);
          else $$render(alternate, -1);
        });
      }
      var button = sibling(node_8, 2);
      var span_2 = child(button);
      var node_11 = child(span_2);
      {
        var consequent_3 = ($$anchor3) => {
          var text_1 = text('"Submitting ..."');
          append($$anchor3, text_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, `${isEdit() ? "Update" : "Create"} Document`));
          append($$anchor3, text_2);
        };
        if_block(node_11, ($$render) => {
          if ($form().processing) $$render(consequent_3);
          else $$render(alternate_1, -1);
        });
      }
      var span_3 = sibling(span_2, 2);
      var node_12 = child(span_3);
      Chevron_right(node_12, { size: "16" });
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
//# sourceMappingURL=Form-D1MCUKaw.js.map
