import { d as push, C as spread_props, z as comment, m as first_child, b as append, c as pop, D as rest_props, E as noop } from "./app-B8UKlAbY.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
function Plus($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  Icon($$anchor, spread_props({ name: "plus" }, () => props, {
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
  Plus as P
};
//# sourceMappingURL=plus-CnOy2VL6.js.map
