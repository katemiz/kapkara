import { c as pop, d as push, g as sibling, a as if_block, q as get, t as template_effect, l as set_text, b as append, k as child, B as user_derived, v as delegate, j as from_html, n as delegated, z as comment, m as first_child, y as each, A as index, I as router } from "./app-B8UKlAbY.js";
import { h as html } from "./html-D3C1hjzf.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import { D as DeleteButton, S as Swal } from "./DeleteButton-BLTAYatj.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { Q as QRCode_1, R as RecordData } from "./RecordData-DwKSM28g.js";
import { F as FilesList } from "./FilesList-BRmhjswN.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { d as docs_config } from "./docs_config-DnDS-wOo.js";
import { T as Table_of_contents, P as Pin, S as Send } from "./table-of-contents-CyZgqQSp.js";
import { P as Plus } from "./plus-CnOy2VL6.js";
import { P as Pencil } from "./pencil-BgjkhNtP.js";
import { L as Layers_plus } from "./layers-plus-pbk2rFd8.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-B6fRcdfC.js";
import "./NavBar-BnFd_LJK.js";
import "./log-out-C7YwExAR.js";
import "./PdmIcon-BfD2mC8v.js";
import "./factory-baDv4zVQ.js";
import "./box-D-pQSdgi.js";
import "./settings-Cg7pxvZj.js";
import "./users-CjbPgFWT.js";
import "./Footer-D0jJN3Vq.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./this-DBviCOsL.js";
import "./browser-DwfGhph4.js";
import "./paperclip-4sW0jNqk.js";
var root_2 = from_html(`<a class="button is-dark" data-tooltip="Edit"><span class="icon is-small"><!></span></a>`);
var root_3 = from_html(`<button class="button is-dark" data-tooltip="Freeze"><span class="icon is-small"><!></span></button>`);
var root_4 = from_html(`<button class="button is-dark" data-tooltip="Release"><span class="icon is-small"><!></span></button>`);
var root_5 = from_html(`<button class="button is-dark" data-tooltip="Revise"><span class="icon is-small"><!></span></button>`);
var root_8 = from_html(`<a><span> </span></a>`);
var root_1 = from_html(`<section class="section min-height-screen"><!> <div class="box mt-6"><nav class="level is-mobile"><div class="level-left"><p class="buttons"><a href="/pdm/document" class="button is-ghost"><span class="icon is-small"><!></span> <span>List All</span></a> <a href="/pdm/document/create" class="button is-ghost"><span class="icon is-small"><!></span> <span>Add New</span></a></p></div> <div class="level-right"><!> <!> <!> <!> <!></div></nav> <div class="columns"><div class="column is-narrow"><figure class="image"><!></figure></div> <div class="column"><!></div> <div class="column has-text-right"><span class="tag"> </span> <div class="mt-1"><!></div></div></div> <!> <!> <!></div></section>`);
function Show($$anchor, $$props) {
  push($$props, true);
  let url = user_derived(() => window.location.origin + "/document/" + $$props.document.id);
  const confirmFreezeReleaseRevise = (action_type) => {
    let title, path, return_text;
    if (action_type === "freeze") {
      title = "Are you sure to freeze this document?";
      path = `/pdm/document/${$$props.document.id}/freeze`;
      return_text = "Frozen";
    } else if (action_type === "release") {
      title = "Are you sure to release this document?";
      path = `/pdm/document/${$$props.document.id}/release`;
      return_text = "Released";
    } else if (action_type === "revise") {
      title = "Are you sure to revise this document?";
      path = `/pdm/document/${$$props.document.id}/revise`;
      return_text = "Revised";
    }
    Swal.fire({
      title,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      // Red color for delete
      cancelButtonColor: "#3085d6",
      // Blue color for cancel
      confirmButtonText: action_type === "freeze" ? "Freeze!" : action_type === "release" ? "Release!" : "Revise!",
      cancelButtonText: "No",
      // Custom button classes for better styling consistency
      customClass: {
        confirmButton: "button mx-4 is-danger is-light",
        cancelButton: "button mx-4"
      },
      buttonsStyling: false
      // Important to use custom classes
    }).then((result) => {
      if (result.isConfirmed) {
        router.patch(path, {}, {
          onSuccess: () => {
            Swal.fire(return_text + "!", "The document has been " + return_text.toLowerCase() + ".", "success");
          },
          onError: () => {
            Swal.fire("Error!", "Something went wrong.", "error");
          }
        });
      }
    });
  };
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, {
        title: "Documents",
        subtitle: "Show Document Attributes and Properties"
      });
      var div = sibling(node, 2);
      var nav = child(div);
      var div_1 = child(nav);
      var p = child(div_1);
      var a = child(p);
      var span = child(a);
      var node_1 = child(span);
      Table_of_contents(node_1, { size: "20" });
      var a_1 = sibling(a, 2);
      var span_1 = child(a_1);
      var node_2 = child(span_1);
      Plus(node_2, { size: "20" });
      var div_2 = sibling(div_1, 2);
      var node_3 = child(div_2);
      {
        var consequent = ($$anchor3) => {
          var a_2 = root_2();
          var span_2 = child(a_2);
          var node_4 = child(span_2);
          Pencil(node_4, { size: "20" });
          template_effect(() => set_attribute(a_2, "href", `/pdm/document/${$$props.document.id ?? ""}/edit`));
          append($$anchor3, a_2);
        };
        if_block(node_3, ($$render) => {
          if ($$props.permissions.is_editable) $$render(consequent);
        });
      }
      var node_5 = sibling(node_3, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button = root_3();
          var span_3 = child(button);
          var node_6 = child(span_3);
          Pin(node_6, { size: "20" });
          delegated("click", button, () => confirmFreezeReleaseRevise("freeze"));
          append($$anchor3, button);
        };
        if_block(node_5, ($$render) => {
          if ($$props.permissions.is_freezable) $$render(consequent_1);
        });
      }
      var node_7 = sibling(node_5, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var button_1 = root_4();
          var span_4 = child(button_1);
          var node_8 = child(span_4);
          Send(node_8, { size: "20" });
          delegated("click", button_1, () => confirmFreezeReleaseRevise("release"));
          append($$anchor3, button_1);
        };
        if_block(node_7, ($$render) => {
          if ($$props.permissions.is_releaseable) $$render(consequent_2);
        });
      }
      var node_9 = sibling(node_7, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var button_2 = root_5();
          var span_5 = child(button_2);
          var node_10 = child(span_5);
          Layers_plus(node_10, { size: "20" });
          delegated("click", button_2, () => confirmFreezeReleaseRevise("revise"));
          append($$anchor3, button_2);
        };
        if_block(node_9, ($$render) => {
          if ($$props.permissions.is_reviseable) $$render(consequent_3);
        });
      }
      var node_11 = sibling(node_9, 2);
      {
        var consequent_4 = ($$anchor3) => {
          DeleteButton($$anchor3, {
            get url() {
              return `/pdm/document/${$$props.document.id ?? ""}`;
            }
          });
        };
        if_block(node_11, ($$render) => {
          if ($$props.permissions.is_deletable) $$render(consequent_4);
        });
      }
      var div_3 = sibling(nav, 2);
      var div_4 = child(div_3);
      var figure = child(div_4);
      var node_12 = child(figure);
      QRCode_1(node_12, {
        get value() {
          return get(url);
        },
        size: "96",
        dark: "#1B2845"
      });
      var div_5 = sibling(div_4, 2);
      var node_13 = child(div_5);
      {
        let $0 = user_derived(() => "D" + $$props.document.document_no + " R" + $$props.document.revision);
        Title(node_13, {
          get title() {
            return get($0);
          },
          get subtitle() {
            return $$props.document.description;
          }
        });
      }
      var div_6 = sibling(div_5, 2);
      var span_6 = child(div_6);
      var text = child(span_6);
      var div_7 = sibling(span_6, 2);
      var node_14 = child(div_7);
      {
        var consequent_5 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_15 = first_child(fragment_2);
          each(node_15, 17, () => $$props.revisions, index, ($$anchor4, revision) => {
            var a_3 = root_8();
            var span_7 = child(a_3);
            var text_1 = child(span_7);
            template_effect(() => {
              set_attribute(a_3, "href", `/pdm/document/${get(revision).id ?? ""}`);
              set_class(span_7, 1, `tag ${$$props.document.revision == get(revision).revision ? "is-black" : "is-warning"} mr-1`);
              set_text(text_1, `R${get(revision).revision ?? ""}`);
            });
            append($$anchor4, a_3);
          });
          append($$anchor3, fragment_2);
        };
        if_block(node_14, ($$render) => {
          if ($$props.revisions) $$render(consequent_5);
        });
      }
      var node_16 = sibling(div_3, 2);
      html(node_16, () => $$props.document.remarks);
      var node_17 = sibling(node_16, 2);
      FilesList(node_17, {
        get media() {
          return $$props.document.files;
        }
      });
      var node_18 = sibling(node_17, 2);
      {
        let $0 = user_derived(() => docs_config.statuses.find((status) => status.value === $$props.document.status)?.description);
        RecordData(node_18, {
          get item() {
            return $$props.document;
          },
          get url() {
            return get(url);
          },
          get status() {
            return get($0);
          }
        });
      }
      template_effect(($0) => set_text(text, $0), [
        () => docs_config.doc_types.find((type) => type.value === $$props.document.doc_type)?.description
      ]);
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
delegate(["click"]);
export {
  Show as default
};
//# sourceMappingURL=Show-DDPPO7sP.js.map
