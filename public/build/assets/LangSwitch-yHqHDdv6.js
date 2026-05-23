import { m as first_child, t as template_effect, n as delegated, b as append, o as set, q as get, j as from_html, r as state, g as sibling, v as delegate } from "./app-DmZvep12.js";
import { s as set_class } from "./attributes-B9LAyNIy.js";
var root = from_html(`<button>TR</button> <button>EN</button>`, 1);
function LangSwitch($$anchor) {
  let isEnglish = state(true);
  var fragment = root();
  var button = first_child(fragment);
  var button_1 = sibling(button, 2);
  template_effect(() => {
    set_class(button, 1, `button is-ghost ${get(isEnglish) ? "is-hidden" : ""}`);
    set_class(button_1, 1, `button is-ghost ${!get(isEnglish) ? "is-hidden" : ""}`);
  });
  delegated("click", button, () => set(isEnglish, !get(isEnglish)));
  delegated("click", button_1, () => set(isEnglish, !get(isEnglish)));
  append($$anchor, fragment);
}
delegate(["click"]);
export {
  LangSwitch as L
};
//# sourceMappingURL=LangSwitch-yHqHDdv6.js.map
