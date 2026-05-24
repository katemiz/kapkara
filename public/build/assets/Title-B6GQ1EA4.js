import { m as first_child, a as if_block, b as append, j as from_html, g as sibling, t as template_effect, l as set_text, k as child } from "./app-D1xHItXN.js";
import { s as set_class } from "./attributes-BBrSLZ4L.js";
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
//# sourceMappingURL=Title-B6GQ1EA4.js.map
