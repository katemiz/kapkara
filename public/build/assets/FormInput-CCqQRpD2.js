import { p as push, a as prop, b as if_block, q as get, t as template_effect, c as append, d as pop, s as store_get, f as setup_stores, F as user_derived, h as child, g as sibling, j as store_mutate, u as untrack, k as from_html, a8 as page, l as set_text } from "./app-Dy2KnI5v.js";
import { a as set_attribute, s as set_class } from "./attributes-DT5rhWPg.js";
import { b as bind_value } from "./input-DvBqc_hk.js";
var root_2 = from_html(`<span class="has-text-danger">*</span>`);
var root_1 = from_html(`<label class="label"> <!></label>`);
var root_3 = from_html(`<p class="help is-danger"> </p>`);
var root = from_html(`<div class="field"><!> <div class="control"><input/></div> <!></div>`);
function FormInput($$anchor, $$props) {
  push($$props, true);
  const $page = () => store_get(page, "$page", $$stores);
  const $form = () => store_get($$props.form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let label = prop(
    $$props,
    "label",
    3,
    ""
    // Label text
  ), type = prop(
    $$props,
    "type",
    3,
    "text"
    // Input type
  ), placeholder = prop(
    $$props,
    "placeholder",
    3,
    ""
    // Placeholder text
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
  ), autocomplete = prop(
    $$props,
    "autocomplete",
    3,
    ""
    // Autocomplete attribute
  ), min = prop(
    $$props,
    "min",
    3,
    void 0
    // Minimum value
  ), max = prop(
    $$props,
    "max",
    3,
    void 0
    // Maximum value
  ), step = prop(
    $$props,
    "step",
    3,
    void 0
    // Increment step
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
  var input = child(div_1);
  var node_2 = sibling(div_1, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var p = root_3();
      var text_1 = child(p);
      template_effect(() => set_text(text_1, get(errorMessage)));
      append($$anchor2, p);
    };
    if_block(node_2, ($$render) => {
      if (get(hasError)) $$render(consequent_2);
    });
  }
  template_effect(() => {
    set_attribute(input, "id", id());
    set_class(input, 1, `input ${customClass() ?? ""} ${get(hasError) ? "is-danger" : ""}`);
    set_attribute(input, "type", type());
    set_attribute(input, "placeholder", placeholder());
    input.required = required();
    input.disabled = disabled();
    set_attribute(input, "autocomplete", autocomplete());
    set_attribute(input, "min", min());
    set_attribute(input, "max", max());
    set_attribute(input, "step", step());
  });
  bind_value(input, () => $form()[$$props.name], ($$value) => store_mutate($$props.form, untrack($form)[$$props.name] = $$value, untrack($form)));
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  FormInput as F
};
//# sourceMappingURL=FormInput-CCqQRpD2.js.map
