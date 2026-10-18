import { p as prop, w as proxy, r as state, a as if_block, t as template_effect, e as event, b as append, c as pop, d as push, k as child, j as from_html, g as sibling, q as get, l as set_text, o as set, I as router } from "./app-B8UKlAbY.js";
import { b as bind_value, a as bind_checked } from "./input-D6UcyCrD.js";
var root_1 = from_html(`<p class="help is-danger"> </p>`);
var root_2 = from_html(`<p class="help is-danger"> </p>`);
var root_3 = from_html(`<p class="help is-danger"> </p>`);
var root = from_html(`<form><div class="field"><label class="label">Name</label> <div class="control"><input class="input" type="text" placeholder="Organization Name"/></div> <!></div> <div class="field"><label class="label">Slug</label> <div class="control"><input class="input" type="text" placeholder="organization-slug"/></div> <!></div> <div class="field"><label class="label">Domain (Optional)</label> <div class="control"><input class="input" type="text" placeholder="example.com"/></div> <!></div> <div class="field"><div class="control"><label class="checkbox"><input type="checkbox"/> &nbsp;Is Active</label></div></div> <div class="field mt-5"><div class="control"><button class="button is-primary" type="submit"> </button></div></div></form>`);
function Form($$anchor, $$props) {
  push($$props, true);
  let organization = prop($$props, "organization", 3, null), isEditing = prop($$props, "isEditing", 3, false);
  let form = proxy({
    name: organization()?.name || "",
    slug: organization()?.slug || "",
    domain: organization()?.domain || "",
    is_active: organization()?.is_active ?? true
  });
  let errors = state(proxy({}));
  let processing = state(false);
  function handleSubmit(e) {
    e.preventDefault();
    set(processing, true);
    set(errors, {}, true);
    const url = isEditing() ? `/admin/organizations/${organization().id}` : "/admin/organizations";
    const method = isEditing() ? "put" : "post";
    router[method](url, form, {
      onSuccess: () => {
        set(processing, false);
      },
      onError: (err) => {
        set(errors, err, true);
        set(processing, false);
      }
    });
  }
  var form_1 = root();
  var div = child(form_1);
  var div_1 = sibling(child(div), 2);
  var input = child(div_1);
  var node = sibling(div_1, 2);
  {
    var consequent = ($$anchor2) => {
      var p = root_1();
      var text = child(p);
      template_effect(() => set_text(text, get(errors).name));
      append($$anchor2, p);
    };
    if_block(node, ($$render) => {
      if (get(errors).name) $$render(consequent);
    });
  }
  var div_2 = sibling(div, 2);
  var div_3 = sibling(child(div_2), 2);
  var input_1 = child(div_3);
  var node_1 = sibling(div_3, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var p_1 = root_2();
      var text_1 = child(p_1);
      template_effect(() => set_text(text_1, get(errors).slug));
      append($$anchor2, p_1);
    };
    if_block(node_1, ($$render) => {
      if (get(errors).slug) $$render(consequent_1);
    });
  }
  var div_4 = sibling(div_2, 2);
  var div_5 = sibling(child(div_4), 2);
  var input_2 = child(div_5);
  var node_2 = sibling(div_5, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var p_2 = root_3();
      var text_2 = child(p_2);
      template_effect(() => set_text(text_2, get(errors).domain));
      append($$anchor2, p_2);
    };
    if_block(node_2, ($$render) => {
      if (get(errors).domain) $$render(consequent_2);
    });
  }
  var div_6 = sibling(div_4, 2);
  var div_7 = child(div_6);
  var label = child(div_7);
  var input_3 = child(label);
  var div_8 = sibling(div_6, 2);
  var div_9 = child(div_8);
  var button = child(div_9);
  var text_3 = child(button);
  template_effect(() => {
    button.disabled = get(processing);
    set_text(text_3, get(processing) ? "Saving..." : isEditing() ? "Update" : "Add New");
  });
  event("submit", form_1, handleSubmit);
  bind_value(input, () => form.name, ($$value) => form.name = $$value);
  bind_value(input_1, () => form.slug, ($$value) => form.slug = $$value);
  bind_value(input_2, () => form.domain, ($$value) => form.domain = $$value);
  bind_checked(input_3, () => form.is_active, ($$value) => form.is_active = $$value);
  append($$anchor, form_1);
  pop();
}
export {
  Form as default
};
//# sourceMappingURL=Form-BwYjsY2h.js.map
