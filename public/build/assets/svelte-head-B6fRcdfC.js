import { av as create_text, aw as block, ax as HEAD_EFFECT, ay as EFFECT_PRESERVED } from "./app-B8UKlAbY.js";
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
//# sourceMappingURL=svelte-head-B6fRcdfC.js.map
