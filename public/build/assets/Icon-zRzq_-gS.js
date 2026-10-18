import { aw as block, aA as EFFECT_TRANSPARENT, aB as BranchManager, p as prop, y as each, b as append, c as pop, d as push, az as from_svg, g as sibling, D as rest_props, k as child, z as comment, m as first_child, q as get, A as index, E as noop, B as user_derived, aC as to_array } from "./app-B8UKlAbY.js";
import { e as element } from "./svelte-element-Ct4olbtg.js";
import { a as attribute_effect } from "./attributes-BE60HdxF.js";
function snippet(node, get_snippet, ...args) {
  var branches = new BranchManager(node);
  block(() => {
    const snippet2 = get_snippet() ?? null;
    branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
  }, EFFECT_TRANSPARENT);
}
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var root = from_svg(`<svg><!><!></svg>`);
function Icon($$anchor, $$props) {
  push($$props, true);
  const color = prop($$props, "color", 3, "currentColor"), size = prop($$props, "size", 3, 24), strokeWidth = prop($$props, "strokeWidth", 3, 2), absoluteStrokeWidth = prop($$props, "absoluteStrokeWidth", 3, false), iconNode = prop($$props, "iconNode", 19, () => []), props = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "children"
  ]);
  var svg = root();
  attribute_effect(
    svg,
    ($0) => ({
      ...defaultAttributes,
      ...props,
      width: size(),
      height: size(),
      stroke: color(),
      "stroke-width": $0,
      class: [
        "lucide-icon lucide",
        $$props.name && `lucide-${$$props.name}`,
        $$props.class
      ]
    }),
    [
      () => absoluteStrokeWidth() ? Number(strokeWidth()) * 24 / Number(size()) : strokeWidth()
    ]
  );
  var node = child(svg);
  each(node, 17, iconNode, index, ($$anchor2, $$item) => {
    var $$array = user_derived(() => to_array(get($$item), 2));
    let tag = () => get($$array)[0];
    let attrs = () => get($$array)[1];
    var fragment = comment();
    var node_1 = first_child(fragment);
    element(node_1, tag, true, ($$element, $$anchor3) => {
      attribute_effect($$element, () => ({ ...attrs() }));
    });
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node);
  snippet(node_2, () => $$props.children ?? noop);
  append($$anchor, svg);
  pop();
}
export {
  Icon as I,
  snippet as s
};
//# sourceMappingURL=Icon-zRzq_-gS.js.map
