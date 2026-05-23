import { p as push, w as spread_props, x as comment, m as first_child, c as append, d as pop, z as rest_props, y as noop } from "./app-Dy2KnI5v.js";
import { I as Icon, s as snippet } from "./users-PDO1V6S0.js";
function Minus($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "M5 12h14" }]];
  Icon($$anchor, spread_props({ name: "minus" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
export {
  Minus as M
};
//# sourceMappingURL=minus-BqFApJdv.js.map
