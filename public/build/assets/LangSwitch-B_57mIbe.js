import { m as first_child, t as template_effect, n as delegated, c as append, g as sibling, o as set, q as get, k as from_html, r as state, v as delegate } from "./app-Dy2KnI5v.js";
import { s as set_class } from "./attributes-DT5rhWPg.js";
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
//# sourceMappingURL=LangSwitch-B_57mIbe.js.map
