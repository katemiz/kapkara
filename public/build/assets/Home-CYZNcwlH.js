import { i as init, a as if_block, t as template_effect, e as event, b as append, c as pop, d as push, s as store_get, f as setup_stores, ab as effect, k as child, g as sibling, h as store_mutate, u as untrack, j as from_html, $ as $document, l as set_text } from "./app-B8UKlAbY.js";
import { h as head } from "./svelte-head-B6fRcdfC.js";
import { b as bind_value } from "./input-D6UcyCrD.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { u as useForm } from "./useForm-CP0Bw01O.js";
import "./class-iAXZF-Rm.js";
function preventDefault(fn) {
  return function(...args) {
    var event2 = (
      /** @type {Event} */
      args[0]
    );
    event2.preventDefault();
    return fn?.apply(this, args);
  };
}
var root_3 = from_html(`<p class="has-text-danger"> </p>`);
var root_4 = from_html(`<p class="has-text-danger"> </p>`);
var root_5 = from_html(`<p class="has-text-danger"> </p>`);
var root_6 = from_html(`<p class="has-text-danger"> </p>`);
var root_7 = from_html(`<p class="has-text-danger"> </p>`);
var root = from_html(`<section class="section"><!> <div class="notification is-warning is-light content">Following actions shall be performed: <ul><li>Set <italic>App Owner</italic> <strong>Organization</strong></li> <li>Set <strong>App Admin/Super Admin</strong> [Name-Email-Password]</li></ul></div> <div class="has-background-grey-lighter p-4"><form class="form"><div class="field"><label for="organization_name" class="label">App Owner Organization Name</label> <div class="control"><input id="organization_name" type="text" class="input" placeholder="kapkara web technologies"/></div> <p class="help">Name of the organization admin user is a member of</p> <!> <!></div> <div class="field-body"><div class="field"><label for="admin_name" class="label">Super Admin Name</label> <input id="admin_name" type="text" class="input" placeholder="name"/> <!></div> <div class="field"><label for="admin_lastname" class="label">Super Admin Lastname</label> <input id="admin_lastname" type="text" class="input" placeholder="lastname"/> <!></div></div> <div class="field mt-4"><label for="admin_email" class="label">Email</label> <input id="admin_email" type="email" class="input" placeholder="super_admin@super.org"/> <!></div> <div class="field-body"><div class="field"><label for="admin_password" class="label">Super User Password</label> <input id="admin_password" type="password" class="input"/> <!></div> <div class="field"><label for="admin_password_confirmation" class="label">Confirm password</label> <input id="admin_password_confirmation" type="password" class="input"/></div></div> <div class="field column has-text-right"><button type="submit" class="button is-link"> </button></div></form></div></section>`);
function Home($$anchor, $$props) {
  push($$props, false);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const form = useForm({
    organization_name: "",
    admin_name: "",
    admin_lastname: "",
    admin_email: "",
    admin_password: "",
    admin_password_confirmation: ""
  });
  function submit() {
    $form().post("/setup", { preserveScroll: true });
  }
  init();
  var section = root();
  head("1ytid17", ($$anchor2) => {
    effect(() => {
      $document.title = "Set up your workspace";
    });
  });
  var node = child(section);
  Title(node, { title: "kapkara Setup", subtitle: "Set up your workspace" });
  var div = sibling(node, 4);
  var form_1 = child(div);
  var div_1 = child(form_1);
  var div_2 = sibling(child(div_1), 2);
  var input = child(div_2);
  var node_1 = sibling(div_2, 4);
  {
    if_block(node_1, ($$render) => {
    });
  }
  var node_2 = sibling(node_1, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var p_1 = root_3();
      var text = child(p_1);
      template_effect(() => set_text(text, $form().errors.organization_name));
      append($$anchor2, p_1);
    };
    if_block(node_2, ($$render) => {
      if ($form().errors.organization_name) $$render(consequent_1);
    });
  }
  var div_3 = sibling(div_1, 2);
  var div_4 = child(div_3);
  var input_1 = sibling(child(div_4), 2);
  var node_3 = sibling(input_1, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var p_2 = root_4();
      var text_1 = child(p_2);
      template_effect(() => set_text(text_1, $form().errors.admin_name));
      append($$anchor2, p_2);
    };
    if_block(node_3, ($$render) => {
      if ($form().errors.admin_name) $$render(consequent_2);
    });
  }
  var div_5 = sibling(div_4, 2);
  var input_2 = sibling(child(div_5), 2);
  var node_4 = sibling(input_2, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var p_3 = root_5();
      var text_2 = child(p_3);
      template_effect(() => set_text(text_2, $form().errors.admin_lastname));
      append($$anchor2, p_3);
    };
    if_block(node_4, ($$render) => {
      if ($form().errors.admin_lastname) $$render(consequent_3);
    });
  }
  var div_6 = sibling(div_3, 2);
  var input_3 = sibling(child(div_6), 2);
  var node_5 = sibling(input_3, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var p_4 = root_6();
      var text_3 = child(p_4);
      template_effect(() => set_text(text_3, $form().errors.admin_email));
      append($$anchor2, p_4);
    };
    if_block(node_5, ($$render) => {
      if ($form().errors.admin_email) $$render(consequent_4);
    });
  }
  var div_7 = sibling(div_6, 2);
  var div_8 = child(div_7);
  var input_4 = sibling(child(div_8), 2);
  var node_6 = sibling(input_4, 2);
  {
    var consequent_5 = ($$anchor2) => {
      var p_5 = root_7();
      var text_4 = child(p_5);
      template_effect(() => set_text(text_4, $form().errors.admin_password));
      append($$anchor2, p_5);
    };
    if_block(node_6, ($$render) => {
      if ($form().errors.admin_password) $$render(consequent_5);
    });
  }
  var div_9 = sibling(div_8, 2);
  var input_5 = sibling(child(div_9), 2);
  var div_10 = sibling(div_7, 2);
  var button = child(div_10);
  var text_5 = child(button);
  template_effect(() => {
    button.disabled = $form().processing;
    set_text(text_5, $form().processing ? "Creating…" : "Create workspace");
  });
  bind_value(input, () => $form().organization_name, ($$value) => store_mutate(form, untrack($form).organization_name = $$value, untrack($form)));
  bind_value(input_1, () => $form().admin_name, ($$value) => store_mutate(form, untrack($form).admin_name = $$value, untrack($form)));
  bind_value(input_2, () => $form().admin_lastname, ($$value) => store_mutate(form, untrack($form).admin_lastname = $$value, untrack($form)));
  bind_value(input_3, () => $form().admin_email, ($$value) => store_mutate(form, untrack($form).admin_email = $$value, untrack($form)));
  bind_value(input_4, () => $form().admin_password, ($$value) => store_mutate(form, untrack($form).admin_password = $$value, untrack($form)));
  bind_value(input_5, () => $form().admin_password_confirmation, ($$value) => store_mutate(form, untrack($form).admin_password_confirmation = $$value, untrack($form)));
  event("submit", form_1, preventDefault(submit));
  append($$anchor, section);
  pop();
  $$cleanup();
}
export {
  Home as default
};
//# sourceMappingURL=Home-CYZNcwlH.js.map
