import { p as prop, i as init, a as if_block, t as template_effect, e as event, b as append, c as pop, d as push, s as store_get, f as setup_stores, g as sibling, j as from_html, k as child, h as store_mutate, u as untrack, l as set_text } from "./app-B3TC2Fcx.js";
import { b as bind_value } from "./input-BdErd1h6.js";
import { u as useForm } from "./useForm-D89z-KmK.js";
var root_1 = from_html(`<p class="mt-1 text-sm text-red-600"> </p>`);
var root = from_html(`<div class="min-h-screen flex items-center justify-center bg-gray-100"><div class="max-w-md w-full bg-white rounded-lg shadow-md p-8"><h2 class="text-2xl font-bold text-center mb-6">Reset Password</h2> <form><div class="mb-4"><label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" readonly=""/></div> <div class="mb-4"><label for="password" class="block text-sm font-medium text-gray-700 mb-2">New Password</label> <input id="password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required=""/> <!></div> <div class="mb-6"><label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label> <input id="password_confirmation" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required=""/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"> </button></form></div></div>`);
function ResetPassword($$anchor, $$props) {
  push($$props, false);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let token = prop($$props, "token", 8);
  let email = prop($$props, "email", 8);
  let form = useForm({
    token: token(),
    email: email(),
    password: "",
    password_confirmation: ""
  });
  function submit(e) {
    e.preventDefault();
    $form().post("/reset-password");
  }
  init();
  var div = root();
  var div_1 = child(div);
  var form_1 = sibling(child(div_1), 2);
  var div_2 = child(form_1);
  var input = sibling(child(div_2), 2);
  var div_3 = sibling(div_2, 2);
  var input_1 = sibling(child(div_3), 2);
  var node = sibling(input_1, 2);
  {
    var consequent = ($$anchor2) => {
      var p = root_1();
      var text = child(p);
      template_effect(() => set_text(text, ($form(), untrack(() => $form().errors.password))));
      append($$anchor2, p);
    };
    if_block(node, ($$render) => {
      if ($form(), untrack(() => $form().errors.password)) $$render(consequent);
    });
  }
  var div_4 = sibling(div_3, 2);
  var input_2 = sibling(child(div_4), 2);
  var button = sibling(div_4, 2);
  var text_1 = child(button);
  template_effect(() => {
    button.disabled = ($form(), untrack(() => $form().processing));
    set_text(text_1, ($form(), untrack(() => $form().processing ? "Resetting..." : "Reset Password")));
  });
  bind_value(input, () => $form().email, ($$value) => store_mutate(form, untrack($form).email = $$value, untrack($form)));
  bind_value(input_1, () => $form().password, ($$value) => store_mutate(form, untrack($form).password = $$value, untrack($form)));
  bind_value(input_2, () => $form().password_confirmation, ($$value) => store_mutate(form, untrack($form).password_confirmation = $$value, untrack($form)));
  event("submit", form_1, submit);
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  ResetPassword as default
};
//# sourceMappingURL=ResetPassword-9bYVgrsK.js.map
