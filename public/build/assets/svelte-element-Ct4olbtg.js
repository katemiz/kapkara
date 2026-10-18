import { aw as block, P as teardown, aA as EFFECT_TRANSPARENT, aB as BranchManager, aD as create_element, aE as NAMESPACE_SVG, aF as assign_nodes, av as create_text, au as active_effect } from "./app-B8UKlAbY.js";
function element(node, get_tag, is_svg, render_fn, get_namespace, location) {
  var element2 = null;
  var anchor = (
    /** @type {TemplateNode} */
    node
  );
  var branches = new BranchManager(anchor, false);
  block(() => {
    const next_tag = get_tag() || null;
    var ns = is_svg || next_tag === "svg" ? NAMESPACE_SVG : void 0;
    if (next_tag === null) {
      branches.ensure(null, null);
      return;
    }
    branches.ensure(next_tag, (anchor2) => {
      if (next_tag) {
        element2 = create_element(next_tag, ns);
        assign_nodes(element2, element2);
        if (render_fn) {
          var child_anchor = element2.appendChild(create_text());
          render_fn(element2, child_anchor);
        }
        active_effect.nodes.end = element2;
        anchor2.before(element2);
      }
    });
    return () => {
    };
  }, EFFECT_TRANSPARENT);
  teardown(() => {
  });
}
export {
  element as e
};
//# sourceMappingURL=svelte-element-Ct4olbtg.js.map
