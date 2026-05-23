import { m as first_child, b as if_block, c as append, t as template_effect, g as sibling, k as from_html, l as set_text, h as child } from "./app-Dy2KnI5v.js";
import { s as set_class } from "./attributes-DT5rhWPg.js";
var root_1 = from_html(`<h1> </h1>`);
var root_2 = from_html(`<h2> </h2>`);
var root = from_html(`<!> <!>`, 1);
function Title($$anchor, $$props) {
  var fragment = root();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var h1 = root_1();
      var text = child(h1);
      template_effect(() => {
        set_class(h1, 1, `title ${($$props.css1 ? $$props.css1 : "") ?? ""}`);
        set_text(text, $$props.title);
      });
      append($$anchor2, h1);
    };
    if_block(node, ($$render) => {
      if ($$props.title) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var h2 = root_2();
      var text_1 = child(h2);
      template_effect(() => {
        set_class(h2, 1, `subtitle has-text-weight-light mt-0${($$props.css2 ? $$props.css2 : "") ?? ""}`);
        set_text(text_1, $$props.subtitle);
      });
      append($$anchor2, h2);
    };
    if_block(node_1, ($$render) => {
      if ($$props.subtitle) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
}
export {
  Title as T
};
//# sourceMappingURL=Title-DLFn2CKD.js.map
