import { p as push, w as spread_props, x as comment, m as first_child, c as append, d as pop, z as rest_props, y as noop } from "./app-Dy2KnI5v.js";
import { I as Icon, s as snippet } from "./users-PDO1V6S0.js";
function Pencil($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ],
    ["path", { "d": "m15 5 4 4" }]
  ];
  Icon($$anchor, spread_props({ name: "pencil" }, () => props, {
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
  Pencil as P
};
//# sourceMappingURL=pencil-CuRcUfVZ.js.map
