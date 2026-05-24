import { d as push, w as spread_props, x as comment, m as first_child, z as noop, b as append, c as pop, y as rest_props } from "./app-B3TC2Fcx.js";
import { I as Icon, s as snippet } from "./users-C3g1dnqi.js";
function Factory($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M12 16h.01" }],
    ["path", { "d": "M16 16h.01" }],
    [
      "path",
      {
        "d": "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"
      }
    ],
    ["path", { "d": "M8 16h.01" }]
  ];
  Icon($$anchor, spread_props({ name: "factory" }, () => props, {
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
  Factory as F
};
//# sourceMappingURL=factory-XMGy52MX.js.map
