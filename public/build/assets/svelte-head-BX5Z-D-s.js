import { aE as create_text, ay as block, aG as HEAD_EFFECT, aH as EFFECT_PRESERVED } from "./app-D1xHItXN.js";
function head(hash, render_fn) {
  var anchor;
  {
    anchor = document.head.appendChild(create_text());
  }
  try {
    block(() => render_fn(anchor), HEAD_EFFECT | EFFECT_PRESERVED);
  } finally {
  }
}
export {
  head as h
};
//# sourceMappingURL=svelte-head-BX5Z-D-s.js.map
