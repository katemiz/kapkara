import { a as prop, t as template_effect, c as append, aF as from_svg, l as set_text, h as child } from "./app-Dy2KnI5v.js";
import { a as set_attribute } from "./attributes-DT5rhWPg.js";
const app_config = {
  code: "PDM",
  title: "Product Data Management",
  description: "A simple and affordable Product Data Management (PDM) solution for small businesses.",
  version: "1.0"
};
var root = from_svg(`<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-labelledby="stacked-boxes-title" role="img"><title id="stacked-boxes-title"> </title><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>`);
function PdmIcon($$anchor, $$props) {
  let size = prop($$props, "size", 3, 24), color = prop($$props, "color", 3, "currentColor"), strokeWidth = prop($$props, "strokeWidth", 3, 2), title = prop($$props, "title", 3, "Stacked Boxes Icon");
  var svg = root();
  var title_1 = child(svg);
  var text = child(title_1);
  template_effect(() => {
    set_attribute(svg, "width", size());
    set_attribute(svg, "height", size());
    set_attribute(svg, "stroke", color());
    set_attribute(svg, "stroke-width", strokeWidth());
    set_text(text, title());
  });
  append($$anchor, svg);
}
export {
  PdmIcon as P,
  app_config as a
};
//# sourceMappingURL=PdmIcon-lRZI65-c.js.map
