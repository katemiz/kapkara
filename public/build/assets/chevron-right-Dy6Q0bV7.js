import { p as push, w as spread_props, x as comment, m as first_child, c as append, d as pop, z as rest_props, y as noop } from "./app-Dy2KnI5v.js";
import { I as Icon, s as snippet } from "./users-PDO1V6S0.js";
function Chevron_right($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$anchor, spread_props({ name: "chevron-right" }, () => props, {
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
  Chevron_right as C
};
//# sourceMappingURL=chevron-right-Dy6Q0bV7.js.map
