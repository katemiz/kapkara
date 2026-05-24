import { a as if_block, e as event, b as append, c as pop, d as push, f as setup_stores, k as child, g as sibling, j as from_html, s as store_get, t as template_effect, l as set_text } from "./app-B3TC2Fcx.js";
import { T as Title } from "./Title-BswqQN3w.js";
import { F as FormInput } from "./FormInput-CTm-nZG9.js";
import { L as LangSwitch } from "./LangSwitch-BG1m_249.js";
import { u as useForm } from "./useForm-D89z-KmK.js";
import "./attributes-BmlKk72Z.js";
import "./input-BdErd1h6.js";
var root_1 = from_html(`<div class="notification is-success is-light"> </div>`);
var root = from_html(`<section class="section container is-max-desktop"><div class="kutu column is-offset-3 is-half p-5 has-background-white-ter svelte-vtu12o"><nav class="level is-mobile mb-6"><div class="level-left"><div class="level-item"><a href="/"><img src="/images/Apps/baykus_orange.svg" width="24px" alt="Logo"/></a></div></div> <div class="level-right has-text-right"><!></div></nav> <!> <div class="column is-offset-3 is-offset-4-mobile is-6 is-4-mobile my-2"><figure class="image p-3 has-text-link-dark"><img src="/images/Apps/baykus_orange.svg" alt="Logo"/></figure></div> <form><!> <!> <button class="button is-link mt-6 is-fullwidth">Login</button></form></div> <!> <p class="has-text-centered is-size-7 mt-4"><a href="/register">Create an account</a> &nbsp;·&nbsp; <a href="/forgot-password">Forgot password</a></p></section>`);
function Login($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let form = useForm({ email: "", password: "", remember: false });
  function submit(e) {
    e.preventDefault();
    $form().transform((data) => ({
      ...data,
      redirect_to: $$props.sayfa ? `/${$$props.sayfa}` : "/"
    })).post("/login", { onFinish: () => $form().reset("password") });
  }
  var section = root();
  var div = child(section);
  var nav = child(div);
  var div_1 = sibling(child(nav), 2);
  var node = child(div_1);
  LangSwitch(node);
  var node_1 = sibling(nav, 2);
  Title(node_1, { title: "PDM", subtitle: "Product Data Management" });
  var form_1 = sibling(node_1, 4);
  var node_2 = child(form_1);
  FormInput(node_2, {
    get form() {
      return form;
    },
    name: "email",
    label: "E-Mail",
    placeholder: "Enter your e-mail"
  });
  var node_3 = sibling(node_2, 2);
  FormInput(node_3, {
    get form() {
      return form;
    },
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password"
  });
  var node_4 = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      var div_2 = root_1();
      var text = child(div_2);
      template_effect(() => set_text(text, $$props.status));
      append($$anchor2, div_2);
    };
    if_block(node_4, ($$render) => {
      if ($$props.status) $$render(consequent);
    });
  }
  event("submit", form_1, submit);
  append($$anchor, section);
  pop();
  $$cleanup();
}
export {
  Login as default
};
//# sourceMappingURL=Login-CZ5Js2vZ.js.map
