import { p as prop, i as init, a as if_block, t as template_effect, e as event, b as append, c as pop, d as push, s as store_get, f as setup_stores, g as sibling, h as store_mutate, u as untrack, j as from_html, k as child, l as set_text } from "./app-B3TC2Fcx.js";
import { b as bind_value } from "./input-BdErd1h6.js";
import { u as useForm } from "./useForm-D89z-KmK.js";
var root_1 = from_html(`<div class="mb-4 p-3 bg-green-100 text-green-700 rounded-md"> </div>`);
var root_2 = from_html(`<p class="mt-1 text-sm text-red-600"> </p>`);
var root = from_html(`<div class="min-h-screen flex items-center justify-center bg-gray-100"><div class="max-w-md w-full bg-white rounded-lg shadow-md p-8"><h2 class="text-2xl font-bold text-center mb-6">Forgot Password</h2> <!> <form><div class="mb-4"><label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required=""/> <!></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"> </button> <div class="mt-4 text-center text-sm"><a href="/login" class="text-blue-600 hover:underline">Back to Login</a></div></form></div></div>`);
function ForgotPassword($$anchor, $$props) {
  push($$props, false);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let status = prop($$props, "status", 8, "");
  let form = useForm({ email: "" });
  function submit(e) {
    e.preventDefault();
    $form().post("/forgot-password");
  }
  init();
  var div = root();
  var div_1 = child(div);
  var node = sibling(child(div_1), 2);
  {
    var consequent = ($$anchor2) => {
      var div_2 = root_1();
      var text = child(div_2);
      template_effect(() => set_text(text, status()));
      append($$anchor2, div_2);
    };
    if_block(node, ($$render) => {
      if (status()) $$render(consequent);
    });
  }
  var form_1 = sibling(node, 2);
  var div_3 = child(form_1);
  var input = sibling(child(div_3), 2);
  var node_1 = sibling(input, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var p = root_2();
      var text_1 = child(p);
      template_effect(() => set_text(text_1, ($form(), untrack(() => $form().errors.email))));
      append($$anchor2, p);
    };
    if_block(node_1, ($$render) => {
      if ($form(), untrack(() => $form().errors.email)) $$render(consequent_1);
    });
  }
  var button = sibling(div_3, 2);
  var text_2 = child(button);
  template_effect(() => {
    button.disabled = ($form(), untrack(() => $form().processing));
    set_text(text_2, ($form(), untrack(() => $form().processing ? "Sending..." : "Send Reset Link")));
  });
  bind_value(input, () => $form().email, ($$value) => store_mutate(form, untrack($form).email = $$value, untrack($form)));
  event("submit", form_1, submit);
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  ForgotPassword as default
};
//# sourceMappingURL=ForgotPassword-DLbD_ZhV.js.map
