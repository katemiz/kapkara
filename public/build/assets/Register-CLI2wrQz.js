import { i as init, e as event, b as append, c as pop, d as push, f as setup_stores, k as child, g as sibling, j as from_html, s as store_get } from "./app-D1xHItXN.js";
import { T as Title } from "./Title-B6GQ1EA4.js";
import { F as FormInput } from "./FormInput-YeFeOjpk.js";
import { L as LangSwitch } from "./LangSwitch-Deb8V_9f.js";
import { u as useForm } from "./useForm-DTXdJGxx.js";
import "./attributes-BBrSLZ4L.js";
import "./input-DV9WvhAT.js";
var root = from_html(`<section class="section container is-max-desktop"><div class="kutu column is-offset-3 is-half p-5 has-background-white-ter"><nav class="level is-mobile mb-6"><div class="level-left"><div class="level-item"><a href="/"><img src="/images/Apps/baykus_orange.svg" width="24px" alt="Logo"/></a></div></div> <div class="level-right has-text-right"><!></div></nav> <!> <form><!> <!> <!> <!> <!> <button class="button is-link mt-6 is-fullwidth">Register</button></form></div> <p class="mt-4 has-text-centered is-size-7">Already have an account? <a href="/login" class="text-blue-600 hover:underline">Login</a></p></section>`);
function Register($$anchor, $$props) {
  push($$props, false);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let form = useForm({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  function submit(e) {
    e.preventDefault();
    $form().post("/register");
  }
  init();
  var section = root();
  var div = child(section);
  var nav = child(div);
  var div_1 = sibling(child(nav), 2);
  var node = child(div_1);
  LangSwitch(node);
  var node_1 = sibling(nav, 2);
  Title(node_1, { title: "PDM", subtitle: "Product Data Management" });
  var form_1 = sibling(node_1, 2);
  var node_2 = child(form_1);
  FormInput(node_2, {
    get form() {
      return form;
    },
    name: "name",
    label: "Name",
    placeholder: "Enter name"
  });
  var node_3 = sibling(node_2, 2);
  FormInput(node_3, {
    get form() {
      return form;
    },
    name: "lastname",
    label: "Last Name",
    placeholder: "Enter last name"
  });
  var node_4 = sibling(node_3, 2);
  FormInput(node_4, {
    get form() {
      return form;
    },
    name: "email",
    label: "E-Mail",
    placeholder: "Enter e-mail"
  });
  var node_5 = sibling(node_4, 2);
  FormInput(node_5, {
    get form() {
      return form;
    },
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password"
  });
  var node_6 = sibling(node_5, 2);
  FormInput(node_6, {
    get form() {
      return form;
    },
    name: "password_confirmation",
    label: "Confirm Password",
    type: "password",
    placeholder: "Enter your password again"
  });
  event("submit", form_1, submit);
  append($$anchor, section);
  pop();
  $$cleanup();
}
export {
  Register as default
};
//# sourceMappingURL=Register-CLI2wrQz.js.map
