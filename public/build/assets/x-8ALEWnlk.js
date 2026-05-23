import { p as push, w as spread_props, x as comment, m as first_child, c as append, d as pop, z as rest_props, y as noop } from "./app-Dy2KnI5v.js";
import { I as Icon, s as snippet } from "./users-PDO1V6S0.js";
function X($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$anchor, spread_props({ name: "x" }, () => props, {
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
  X
};
//# sourceMappingURL=x-8ALEWnlk.js.map
