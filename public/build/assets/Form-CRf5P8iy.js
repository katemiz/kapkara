import { p as prop, H as user_effect, c as pop, d as push, f as setup_stores, a as if_block, b as append, g as sibling, s as store_get, j as from_html, k as child, q as get, F as user_derived, h as store_mutate, u as untrack, t as template_effect, e as event, l as set_text, I as text } from "./app-DmZvep12.js";
import { a as set_attribute } from "./attributes-B9LAyNIy.js";
import Layout from "./Layout-BvwSG3qv.js";
import { E as Editor, F as FormUpload } from "./FormUpload-BB8arxpK.js";
import { F as FormInput } from "./FormInput-DaE8XAfm.js";
import { F as FormSelect } from "./FormSelect-D-mEHEp8.js";
import { A as ActionButtons, F as FilesList } from "./ActionButtons-etvIfIiY.js";
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
var root_3 = from_html(`<p class="help is-danger"> </p>`);
var root_5 = from_html(`<a class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_6 = from_html(`<a href="/pdm/ecn" class="button"><span class="icon"><!></span> <span>Cancel</span></a>`);
var root_2 = from_html(`<form novalidate="" id="genericForm"><!> <!> <div class="field"><label class="label" for="ed">Detailed Engineering Change Request Description</label> <div class="control" id="ed"><!></div> <!></div> <!> <!> <div class="column buttons has-text-right"><!> <button type="submit" class="button is-link"><span><!></span> <span class="icon"><!></span></button></div></form>`);
var root_9 = from_html(`<div class="notification is-danger"><p>There are no change requests available.</p> <p>All ECNs have to be linked to a change request.</p> <p><a href="/pdm/crequest/create">Create a change request</a> to
                    link an ECN.</p></div>`);
var root_1 = from_html(`<section class="section container min-height-screen"><!> <!> <!></section>`);
function Form($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let ecn = prop($$props, "ecn", 3, null), isEdit = prop($$props, "isEdit", 3, false);
  const crequest = { ...(() => ecn())() };
  let form = useForm({
    change_request_id: crequest?.change_request_id ?? null,
    title: crequest?.title ?? "",
    description: crequest?.description ?? "",
    ecnFiles: crequest?.ecnFiles ?? null,
    status: crequest?.status ?? 1
  });
  user_effect(() => {
    if (document && isEdit()) {
      $form().defaults({
        change_request_id: ecn().id,
        title: ecn().title,
        description: ecn().description,
        ecnFiles: ecn().ecnFiles,
        status: ecn().status
      });
    }
  });
  function submit(e) {
    e.preventDefault();
    if (isEdit()) {
      $form().put(`/pdm/ecn/${crequest.id}`, {
        onSuccess: () => {
          console.log("Updated successfully!");
        },
        onError: (errors) => {
          console.log("Validation errors:", errors);
        }
      });
    } else {
      $form().post("/pdm/ecn", {
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
        let $0 = user_derived(() => isEdit() & ecn() != null ? "Edit Engineering Change Notice" + ecn().id : "Create a Engineering Change Notice");
        Title(node, {
          title: "Engineering Change Notices (ECN)",
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
          return ecn();
        },
        form_type: "form",
        route_name: "pdm/ecn"
      });
      var node_2 = sibling(node_1, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var form_1 = root_2();
          var node_3 = child(form_1);
          {
            let $0 = user_derived(() => $$props.changeRequests.map((cr) => ({ value: cr.id, label: "CR-" + cr.id + ", " + cr.title })));
            FormSelect(node_3, {
              get form() {
                return form;
              },
              name: "change_request_id",
              label: "Change Request",
              placeholder: "Select a Change Request",
              get options() {
                return get($0);
              },
              required: true
            });
          }
          var node_4 = sibling(node_3, 2);
          FormInput(node_4, {
            get form() {
              return form;
            },
            name: "title",
            label: "Change Request Title",
            placeholder: "Enter Change Request Title",
            required: true
          });
          var div = sibling(node_4, 2);
          var div_1 = sibling(child(div), 2);
          var node_5 = child(div_1);
          {
            let $0 = user_derived(() => ecn() != null ? ecn().description : "");
            Editor(node_5, {
              onUpdate: (html) => store_mutate(form, untrack($form).description = html, untrack($form)),
              get value() {
                return get($0);
              },
              placeholder: "Detail engineering change actions here..."
            });
          }
          var node_6 = sibling(div_1, 2);
          {
            var consequent = ($$anchor4) => {
              var p = root_3();
              var text2 = child(p);
              template_effect(() => set_text(text2, $form().errors.description));
              append($$anchor4, p);
            };
            if_block(node_6, ($$render) => {
              if ($form().errors.description) $$render(consequent);
            });
          }
          var node_7 = sibling(div, 2);
          {
            var consequent_1 = ($$anchor4) => {
              FilesList($$anchor4, {
                get media() {
                  return ecn().files;
                }
              });
            };
            if_block(node_7, ($$render) => {
              if (isEdit() && ecn().files.length > 0) $$render(consequent_1);
            });
          }
          var node_8 = sibling(node_7, 2);
          FormUpload(node_8, {
            get form() {
              return form;
            },
            name: "ecnFiles",
            label: "File Attachments",
            accept: ".pdf,.docx,.doc,.txt,.png",
            multiple: true,
            maxSize: 10,
            showPreview: false
          });
          var div_2 = sibling(node_8, 2);
          var node_9 = child(div_2);
          {
            var consequent_2 = ($$anchor4) => {
              var a = root_5();
              var span = child(a);
              var node_10 = child(span);
              X(node_10, { size: "16" });
              template_effect(() => set_attribute(a, "href", `/pdm/ecn/${ecn().id ?? ""}`));
              append($$anchor4, a);
            };
            var alternate = ($$anchor4) => {
              var a_1 = root_6();
              var span_1 = child(a_1);
              var node_11 = child(span_1);
              X(node_11, { size: "16" });
              append($$anchor4, a_1);
            };
            if_block(node_9, ($$render) => {
              if (isEdit() & ecn() != null) $$render(consequent_2);
              else $$render(alternate, -1);
            });
          }
          var button = sibling(node_9, 2);
          var span_2 = child(button);
          var node_12 = child(span_2);
          {
            var consequent_3 = ($$anchor4) => {
              var text_1 = text('"Submitting ..."');
              append($$anchor4, text_1);
            };
            var alternate_1 = ($$anchor4) => {
              var text_2 = text();
              template_effect(() => set_text(text_2, `${isEdit() ? "Update" : "Create"} Engineering Change
                                Notice`));
              append($$anchor4, text_2);
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
          append($$anchor3, form_1);
        };
        var alternate_2 = ($$anchor3) => {
          var div_3 = root_9();
          append($$anchor3, div_3);
        };
        if_block(node_2, ($$render) => {
          if ($$props.changeRequests.length > 0) $$render(consequent_4);
          else $$render(alternate_2, -1);
        });
      }
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
//# sourceMappingURL=Form-CRf5P8iy.js.map
