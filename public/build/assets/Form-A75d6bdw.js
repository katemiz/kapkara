import { p as prop, c as pop, d as push, f as setup_stores, a as if_block, q as get, h as store_mutate, u as untrack, t as template_effect, e as event, b as append, k as child, g as sibling, j as from_html, s as store_get, B as user_derived, l as set_text, G as text } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import Layout from "./Layout-D-KKXIKv.js";
import { E as Editor, F as FormUpload } from "./FormUpload-DIoi2CAn.js";
import { F as FormInput } from "./FormInput-CJaWZzUI.js";
import { F as FormSelect } from "./FormSelect-vcBHkPN1.js";
import { F as FilesList } from "./FilesList-BRmhjswN.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { a as assets_config } from "./assets_config-C2MhOOqD.js";
import { S as Save } from "./save-CwmUOwvD.js";
import { C as Chevron_right } from "./chevron-right-CojM0Br_.js";
import { u as useForm } from "./useForm-CP0Bw01O.js";
import { X } from "./x-Cg9sN51b.js";
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
import "./index-client-BrUzj1xQ.js";
import "./this-DBviCOsL.js";
import "./input-D6UcyCrD.js";
import "./paperclip-4sW0jNqk.js";
var root_2 = from_html(`<a class="button"><span class="icon"><!></span></a>`);
var root_3 = from_html(`<a href="/mylib" class="button"><span class="icon"><!></span></a>`);
var root_4 = from_html(`<p class="help is-danger"> </p>`);
var root_6 = from_html(`<a class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_7 = from_html(`<a href="/mylib" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_1 = from_html(`<section class="section"><!> <nav class="level is-mobile"><div class="level-left"><p class="buttons"><a href="/mylib/create" class="button is-link is-inverted is-outlined"><span class="icon is-small"><!></span></a></p></div> <div class="level-right"><p class="buttons"><!></p></div></nav> <form novalidate=""><div class="columns"><div class="column is-8"><!></div> <div class="column is-4"><!></div></div> <div class="field"><label class="label" for="ed">Remarks</label> <div class="control" id="ed"><!></div> <!></div> <!> <!> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span class="icon"><!></span> <span><!></span></button></div></form></section>`);
function Form($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(get(form), "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let asset = prop($$props, "asset", 3, null), isEdit = prop($$props, "isEdit", 3, false);
  let form = user_derived(() => useForm({
    title: asset()?.title ?? "",
    asset_type: String(asset()?.asset_type ?? ""),
    assetFile: asset()?.assetFile ?? null,
    remarks: asset()?.remarks ?? ""
  }));
  function submit(e) {
    console.log("The form object is:", $form());
    console.log("Form submitted:", $form().data());
    e.preventDefault();
    if (isEdit()) {
      console.log("trying to edit");
      $form().put(`/mylib/${asset().id}`, {
        onSuccess: () => {
          console.log("Updated successfully!");
        }
      });
    } else {
      console.log("trying to new");
      $form().post("/mylib", {
        onSuccess: () => {
          console.log("Saved successfully!");
          $form().reset();
        }
      });
    }
  }
  let asset_types = user_derived(() => assets_config.asset_types.map((cat) => ({ value: cat.value, label: cat["description"] })));
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      {
        let $0 = user_derived(() => isEdit() & asset() != null ? "Edit Asset" + asset().id : "Add a New Asset");
        Title(node, {
          title: "My Digital Assets",
          get subtitle() {
            return get($0);
          }
        });
      }
      var nav = sibling(node, 2);
      var div = child(nav);
      var p = child(div);
      var a = child(p);
      var span = child(a);
      var node_1 = child(span);
      Save(node_1, { size: "16" });
      var div_1 = sibling(div, 2);
      var p_1 = child(div_1);
      var node_2 = child(p_1);
      {
        var consequent = ($$anchor3) => {
          var a_1 = root_2();
          var span_1 = child(a_1);
          var node_3 = child(span_1);
          X(node_3, { size: "16" });
          template_effect(() => set_attribute(a_1, "href", `/mylib/${asset().id ?? ""}`));
          append($$anchor3, a_1);
        };
        var alternate = ($$anchor3) => {
          var a_2 = root_3();
          var span_2 = child(a_2);
          var node_4 = child(span_2);
          X(node_4, { size: "16" });
          append($$anchor3, a_2);
        };
        if_block(node_2, ($$render) => {
          if (isEdit() & asset() != null) $$render(consequent);
          else $$render(alternate, -1);
        });
      }
      var form_1 = sibling(nav, 2);
      var div_2 = child(form_1);
      var div_3 = child(div_2);
      var node_5 = child(div_3);
      FormInput(node_5, {
        get form() {
          return get(form);
        },
        name: "title",
        label: "Asset Title",
        placeholder: "Enter a title"
      });
      var div_4 = sibling(div_3, 2);
      var node_6 = child(div_4);
      FormSelect(node_6, {
        get form() {
          return get(form);
        },
        name: "asset_type",
        label: "Asset Type",
        placeholder: "Select asset type",
        get options() {
          return get(asset_types);
        },
        required: true,
        class: "is-fullwidth"
      });
      var div_5 = sibling(div_2, 2);
      var div_6 = sibling(child(div_5), 2);
      var node_7 = child(div_6);
      {
        let $0 = user_derived(() => asset() != null ? asset().remarks : "");
        Editor(node_7, {
          onUpdate: (html) => store_mutate(get(form), untrack($form).remarks = html, untrack($form)),
          get value() {
            return get($0);
          }
        });
      }
      var node_8 = sibling(div_6, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var p_2 = root_4();
          var text2 = child(p_2);
          template_effect(() => set_text(text2, $form().errors.remarks));
          append($$anchor3, p_2);
        };
        if_block(node_8, ($$render) => {
          if ($form().errors.remarks) $$render(consequent_1);
        });
      }
      var node_9 = sibling(div_5, 2);
      {
        var consequent_2 = ($$anchor3) => {
          FilesList($$anchor3, {
            get media() {
              return asset().files;
            }
          });
        };
        if_block(node_9, ($$render) => {
          if (isEdit() && asset().files.length > 0) $$render(consequent_2);
        });
      }
      var node_10 = sibling(node_9, 2);
      FormUpload(node_10, {
        get form() {
          return get(form);
        },
        name: "assetFile",
        label: "Upload Files (PDF, DOCX, TXT)",
        accept: ".pdf,.docx,.doc,.txt,.png",
        multiple: true,
        maxSize: 150,
        showPreview: false
      });
      var div_7 = sibling(node_10, 2);
      var node_11 = child(div_7);
      {
        var consequent_3 = ($$anchor3) => {
          var a_3 = root_6();
          var span_3 = child(a_3);
          var node_12 = child(span_3);
          X(node_12, { size: "16" });
          template_effect(() => set_attribute(a_3, "href", `/mylib/${asset().id ?? ""}`));
          append($$anchor3, a_3);
        };
        var alternate_1 = ($$anchor3) => {
          var a_4 = root_7();
          var span_4 = child(a_4);
          var node_13 = child(span_4);
          X(node_13, { size: "16" });
          append($$anchor3, a_4);
        };
        if_block(node_11, ($$render) => {
          if (isEdit() & asset() != null) $$render(consequent_3);
          else $$render(alternate_1, -1);
        });
      }
      var button = sibling(node_11, 2);
      var span_5 = child(button);
      var node_14 = child(span_5);
      Chevron_right(node_14, { size: "16" });
      var span_6 = sibling(span_5, 2);
      var node_15 = child(span_6);
      {
        var consequent_4 = ($$anchor3) => {
          var text_1 = text('"Submitting ..."');
          append($$anchor3, text_1);
        };
        var alternate_2 = ($$anchor3) => {
          var text_2 = text();
          template_effect(() => set_text(text_2, `${isEdit() ? "Update" : "Create"} Asset`));
          append($$anchor3, text_2);
        };
        if_block(node_15, ($$render) => {
          if ($form().processing) $$render(consequent_4);
          else $$render(alternate_2, -1);
        });
      }
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
//# sourceMappingURL=Form-A75d6bdw.js.map
