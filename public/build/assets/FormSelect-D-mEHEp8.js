import { d as push, p as prop, a as if_block, C as each, t as template_effect, b as append, c as pop, s as store_get, f as setup_stores, g as sibling, k as child, j as from_html, h as store_mutate, u as untrack, l as set_text, q as get, D as index, F as user_derived, a8 as page } from "./app-DmZvep12.js";
import { c as bind_select_value, s as set_class, a as set_attribute, d as clsx, e as set_selected } from "./attributes-B9LAyNIy.js";
var root_2 = from_html(`<span class="has-text-danger">*</span>`);
var root_1 = from_html(`<label class="label"> <!></label>`);
var root_3 = from_html(`<option disabled=""> </option>`);
var root_4 = from_html(`<option> </option>`);
var root_5 = from_html(`<p class="help is-danger"> </p>`);
var root = from_html(`<div class="field"><!> <div class="control"><div autocomplete="off"><select><!><!></select></div></div> <!></div>`);
function FormSelect($$anchor, $$props) {
  push($$props, true);
  const $page = () => store_get(page, "$page", $$stores);
  const $form = () => store_get($$props.form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let options = prop($$props, "options", 19, () => []), label = prop(
    $$props,
    "label",
    3,
    ""
    // Label text
  ), id = prop($$props, "id", 19, () => $$props.name), required = prop(
    $$props,
    "required",
    3,
    false
    // Required attribute
  ), disabled = prop(
    $$props,
    "disabled",
    3,
    false
    // Disabled attribute
  ), placeholder = prop(
    $$props,
    "placeholder",
    3,
    "Select an option"
    // Placeholder text
  ), customClass = prop(
    $$props,
    "class",
    3,
    ""
    // Additional CSS classes
  );
  let errorMessage = user_derived(() => $page().props.errors[$$props.name]);
  let hasError = user_derived(() => !!get(errorMessage));
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
        set_attribute(label_1, "for", id());
        set_text(text, `${label() ?? ""} `);
      });
      append($$anchor2, label_1);
    };
    if_block(node, ($$render) => {
      if (label()) $$render(consequent_1);
    });
  }
  var div_1 = sibling(node, 2);
  var div_2 = child(div_1);
  var select = child(div_2);
  var node_2 = child(select);
  {
    var consequent_2 = ($$anchor2) => {
      var option_1 = root_3();
      var text_1 = child(option_1);
      option_1.value = option_1.__value = "";
      template_effect(() => {
        set_selected(option_1, !$form()[$$props.name]);
        set_text(text_1, placeholder());
      });
      append($$anchor2, option_1);
    };
    if_block(node_2, ($$render) => {
      if (placeholder()) $$render(consequent_2);
    });
  }
  var node_3 = sibling(node_2);
  each(node_3, 17, options, index, ($$anchor2, option) => {
    var option_2 = root_4();
    var text_2 = child(option_2);
    var option_2_value = {};
    template_effect(() => {
      set_text(text_2, get(option).label);
      if (option_2_value !== (option_2_value = get(option).value)) {
        option_2.value = (option_2.__value = get(option).value) ?? "";
      }
    });
    append($$anchor2, option_2);
  });
  var node_4 = sibling(div_1, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var p = root_5();
      var text_3 = child(p);
      template_effect(() => set_text(text_3, get(errorMessage)));
      append($$anchor2, p);
    };
    if_block(node_4, ($$render) => {
      if (get(hasError)) $$render(consequent_3);
    });
  }
  template_effect(() => {
    set_class(div_2, 1, `select ${customClass() ?? ""} ${get(hasError) ? "is-danger" : ""}`);
    set_attribute(select, "id", id());
    select.required = required();
    select.disabled = disabled();
    set_class(select, 1, clsx(get(hasError) ? "is-danger" : ""));
  });
  bind_select_value(select, () => $form()[$$props.name], ($$value) => store_mutate($$props.form, untrack($form)[$$props.name] = $$value, untrack($form)));
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  FormSelect as F
};
//# sourceMappingURL=FormSelect-D-mEHEp8.js.map
