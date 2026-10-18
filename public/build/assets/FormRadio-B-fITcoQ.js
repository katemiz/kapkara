import { d as push, p as prop, a as if_block, y as each, t as template_effect, b as append, c as pop, f as setup_stores, g as sibling, j as from_html, k as child, v as delegate, m as first_child, q as get, l as set_text, n as delegated, A as index, s as store_get, h as store_mutate, u as untrack } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import { c as bind_group } from "./input-D6UcyCrD.js";
var root_2 = from_html(`<span class="has-text-danger">*</span>`);
var root_1 = from_html(`<label class="label"> <!></label>`);
var root_4 = from_html(`<br/>`);
var root_3 = from_html(`<label><input type="radio"/> </label> <!>`, 1);
var root_5 = from_html(`<p class="help is-danger"> </p>`);
var root = from_html(`<div><!> <div class="control"></div> <!></div>`);
function FormRadio($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get($$props.form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const binding_group = [];
  let options = prop($$props, "options", 19, () => []), label = prop(
    $$props,
    "label",
    3,
    ""
    // Field label text
  ), required = prop(
    $$props,
    "required",
    3,
    false
    // Required attribute
  ), inline = prop(
    $$props,
    "inline",
    3,
    false
    // Display options inline (horizontally)
  ), onchange = prop(
    $$props,
    "onchange",
    3,
    null
    // Callback function for value changes (added)
  ), customClass = prop(
    $$props,
    "class",
    3,
    ""
    // Additional CSS classes for the field wrapper
  );
  var div = root();
  var node = child(div);
  {
    var consequent_1 = ($$anchor2) => {
      var label_1 = root_1();
      var text = child(label_1);
      var node_1 = sibling(text);
      {
        var consequent = ($$anchor3) => {
          var span = root_2();
          append($$anchor3, span);
        };
        if_block(node_1, ($$render) => {
          if (required()) $$render(consequent);
        });
      }
      template_effect(() => {
        set_attribute(label_1, "for", $$props.name);
        set_text(text, `${label() ?? ""} `);
      });
      append($$anchor2, label_1);
    };
    if_block(node, ($$render) => {
      if (label()) $$render(consequent_1);
    });
  }
  var div_1 = sibling(node, 2);
  each(div_1, 21, options, index, ($$anchor2, option, index2) => {
    var fragment = root_3();
    var label_2 = first_child(fragment);
    let classes;
    var input = child(label_2);
    var input_value;
    var text_1 = sibling(input);
    var node_2 = sibling(label_2, 2);
    {
      var consequent_2 = ($$anchor3) => {
        var br = root_4();
        append($$anchor3, br);
      };
      if_block(node_2, ($$render) => {
        if (!inline() && index2 < options().length - 1) $$render(consequent_2);
      });
    }
    template_effect(
      ($0) => {
        classes = set_class(label_2, 1, "radio svelte-1qszzl8", null, classes, { "is-inline": inline() });
        set_attribute(input, "name", $$props.name);
        input.disabled = get(option).disabled || false;
        input.required = required();
        if (input_value !== (input_value = $0)) {
          input.value = (input.__value = $0) ?? "";
        }
        set_text(text_1, ` ${get(option).label ?? ""}`);
      },
      [() => String(get(option).value)]
    );
    delegated("change", input, function(...$$args) {
      onchange()?.apply(this, $$args);
    });
    bind_group(
      binding_group,
      [],
      input,
      () => {
        String(get(option).value);
        return $form()[$$props.name];
      },
      ($$value) => store_mutate($$props.form, untrack($form)[$$props.name] = $$value, untrack($form))
    );
    append($$anchor2, fragment);
  });
  var node_3 = sibling(div_1, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var p = root_5();
      var text_2 = child(p);
      template_effect(() => set_text(text_2, $form().errors[$$props.name]));
      append($$anchor2, p);
    };
    if_block(node_3, ($$render) => {
      if ($form().errors[$$props.name]) $$render(consequent_3);
    });
  }
  template_effect(() => set_class(div, 1, `field ${customClass() ?? ""}`, "svelte-1qszzl8"));
  append($$anchor, div);
  pop();
  $$cleanup();
}
delegate(["change"]);
export {
  FormRadio as F
};
//# sourceMappingURL=FormRadio-B-fITcoQ.js.map
