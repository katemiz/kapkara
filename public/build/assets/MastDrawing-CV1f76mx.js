import { p as prop, m as first_child, g as sibling, a as if_block, t as template_effect, q as get, l as set_text, b as append, B as user_derived, k as child, az as from_svg, y as each, c as pop, d as push, j as from_html, A as index } from "./app-B8UKlAbY.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import "./class-iAXZF-Rm.js";
var root_1$1 = from_svg(`<polygon></polygon>`);
var root_2$1 = from_svg(`<polygon></polygon>`);
var root$1 = from_svg(`<line stroke-linecap="round"></line><!><text transform="scale(1, -1)" fill="black"> </text>`, 1);
function SvgArrow($$anchor, $$props) {
  let tipX = prop($$props, "tipX", 3, 85), tipY = prop($$props, "tipY", 3, 50), text = prop($$props, "text", 3, ""), length = prop($$props, "length", 3, 200), fontSize = prop($$props, "fontSize", 3, 30), direction = prop($$props, "direction", 3, "R");
  const headWidth = 80;
  const headLength = 120;
  const fill = "#2563eb";
  const strokeWidth = 16;
  let baseX = user_derived(() => setParams("baseX", direction()));
  let baseY = user_derived(() => setParams("baseY", direction()));
  let leftX = user_derived(() => setParams("leftX", direction()));
  let rightX = user_derived(() => setParams("rightX", direction()));
  let topY = user_derived(() => setParams("topY", direction()));
  let bottomY = user_derived(() => setParams("bottomY", direction()));
  let shaftStartX = user_derived(() => setParams("shaftStartX", direction()));
  let shaftStartY = user_derived(() => setParams("shaftStartY", direction()));
  function setParams(parameter, dir) {
    const d = dir.toUpperCase();
    if (parameter === "baseX") {
      if (d === "L") return tipX() + headLength;
      if (d === "R") return tipX() - headLength;
      return tipX();
    }
    if (parameter === "baseY") {
      if (d === "U") return tipY() - headLength;
      if (d === "D") return tipY() + headLength;
      return tipY();
    }
    if (parameter === "topY") return tipY() - headWidth / 2;
    if (parameter === "bottomY") return tipY() + headWidth / 2;
    if (parameter === "leftX") return tipX() - headWidth / 2;
    if (parameter === "rightX") return tipX() + headWidth / 2;
    if (parameter === "shaftStartX") {
      if (d === "L") return tipX() + length();
      if (d === "R") return tipX() - length();
      return tipX();
    }
    if (parameter === "shaftStartY") {
      if (d === "U") return tipY() + length();
      if (d === "D") return tipY() - length();
      return tipY();
    }
  }
  let textParams = user_derived(() => getTextParams(direction(), tipX(), tipY(), length()));
  function getTextParams(dir, tx, ty, len) {
    const offset = 25;
    const d = dir.toUpperCase();
    switch (d) {
      case "L":
        return {
          x: tx + len + offset,
          y: ty,
          anchor: "start",
          baseline: "middle"
        };
      case "U":
        return {
          x: tx + offset,
          y: ty - len / 2,
          anchor: "start",
          baseline: "middle"
        };
      case "D":
        return {
          x: tx + offset,
          y: ty - len,
          anchor: "start",
          baseline: "middle"
        };
      case "R":
      default:
        return {
          x: tx - len - offset,
          y: ty,
          anchor: "end",
          baseline: "middle"
        };
    }
  }
  var fragment = root$1();
  var line = first_child(fragment);
  set_attribute(line, "stroke", fill);
  set_attribute(line, "stroke-width", strokeWidth);
  var node = sibling(line);
  {
    var consequent = ($$anchor2) => {
      var polygon = root_1$1();
      set_attribute(polygon, "fill", fill);
      template_effect(() => set_attribute(polygon, "points", `${get(baseX) ?? ""},${get(topY) ?? ""} ${tipX() ?? ""},${tipY() ?? ""} ${get(baseX) ?? ""},${get(bottomY) ?? ""}`));
      append($$anchor2, polygon);
    };
    var alternate = ($$anchor2) => {
      var polygon_1 = root_2$1();
      set_attribute(polygon_1, "fill", fill);
      template_effect(() => set_attribute(polygon_1, "points", `${get(leftX) ?? ""},${get(baseY) ?? ""} ${tipX() ?? ""},${tipY() ?? ""} ${get(rightX) ?? ""},${get(baseY) ?? ""}`));
      append($$anchor2, polygon_1);
    };
    if_block(node, ($$render) => {
      if (direction() === "R" || direction() === "L") $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  var text_1 = sibling(node);
  var text_2 = child(text_1);
  template_effect(() => {
    set_attribute(line, "x1", get(shaftStartX));
    set_attribute(line, "y1", get(shaftStartY));
    set_attribute(line, "x2", get(baseX));
    set_attribute(line, "y2", get(baseY));
    set_attribute(text_1, "x", get(textParams).x);
    set_attribute(text_1, "y", -get(textParams).y);
    set_attribute(text_1, "text-anchor", get(textParams).anchor);
    set_attribute(text_1, "dominant-baseline", get(textParams).baseline);
    set_attribute(text_1, "font-size", fontSize());
    set_text(text_2, text());
  });
  append($$anchor, fragment);
}
var root_1 = from_svg(`<rect class="box" fill="#C5E0D8"></rect><circle class="center-of-pressure" fill="#444545"></circle><!><!><line class="tube" stroke="gray" stroke-width="3"></line><text text-anchor="end" fill="black" transform="scale(1,-1)"> </text>`, 1);
var root_3 = from_svg(`<line class="tube" stroke="black" stroke-width="3"></line>`);
var root_4 = from_svg(`<!><line class="tube" stroke="gray" stroke-width="3"></line><text text-anchor="end" fill="black" transform="scale(1,-1)"> </text>`, 1);
var root_2 = from_svg(`<rect class="tube" fill="#667a8f" fill-opacity="0.3" stroke="black" stroke-width="3"></rect><!><!><line class="tube" stroke="gray" stroke-width="3"></line><text text-anchor="end" fill="black" transform="scale(1,-1)"> </text><line class="tube" stroke="gray" stroke-width="3"></line><text text-anchor="end" fill="black" transform="scale(1,-1)"> </text>`, 1);
var root_5 = from_svg(`<!><!>`, 1);
var root = from_html(`<div class="drawing"><svg><g><rect class="ground" fill="#86a1c0"></rect><!><line class="tube" stroke="black" stroke-width="3"></line><text text-anchor="start" fill="black" transform="scale(1,-1)"> </text><!><rect class="tube" fill="#667a8f" fill-opacity="0.3" stroke="black" stroke-width="3"></rect><polyline class="tube" fill="red" stroke="black" fill-opacity="0.3"></polyline><circle class="center-of-pressure" fill="#444545"></circle><!><line x1="0" x2="0" class="centerline" stroke="#86a1c0" stroke-width="2"></line></g></svg></div>`);
function MastDrawing($$anchor, $$props) {
  push($$props, true);
  const height = user_derived(() => $$props.width * 1.2);
  const scale = user_derived(() => $$props.width / $$props.data.box.w);
  const offsetX = user_derived(() => $$props.width / 2);
  const offsetY = user_derived(() => get(height));
  const fontSize = user_derived(() => (16 / get(scale)).toFixed(0));
  const textOffset = user_derived(() => get(scale) ? (16 / get(scale)).toFixed(0) : 10);
  var div = root();
  var svg = child(div);
  var g = child(svg);
  var rect = child(g);
  var node = sibling(rect);
  {
    var consequent = ($$anchor2) => {
      var fragment = root_1();
      var rect_1 = first_child(fragment);
      var circle = sibling(rect_1);
      set_attribute(circle, "r", 20);
      var node_1 = sibling(circle);
      {
        let $0 = user_derived(() => -$$props.data.cop.load.toFixed(0) + " N");
        SvgArrow(node_1, {
          get tipX() {
            return $$props.data.cop.x;
          },
          get tipY() {
            return $$props.data.cop.y;
          },
          get text() {
            return get($0);
          },
          get length() {
            return $$props.data.payload.w;
          },
          get fontSize() {
            return get(fontSize);
          },
          direction: "R"
        });
      }
      var node_2 = sibling(node_1);
      {
        let $0 = user_derived(() => $$props.data.payload.weight.toFixed(0) + " N");
        let $1 = user_derived(() => 0.18 * $$props.data.payload.weight * $$props.data.payload.w / $$props.data.cop.load);
        SvgArrow(node_2, {
          get tipX() {
            return $$props.data.cop.x;
          },
          get tipY() {
            return $$props.data.cop.y;
          },
          get text() {
            return get($0);
          },
          get length() {
            return get($1);
          },
          get fontSize() {
            return get(fontSize);
          },
          direction: "D"
        });
      }
      var line = sibling(node_2);
      var text = sibling(line);
      var text_1 = child(text);
      template_effect(
        ($0) => {
          set_attribute(rect_1, "x", $$props.data.payload.x);
          set_attribute(rect_1, "y", $$props.data.payload.y);
          set_attribute(rect_1, "width", $$props.data.payload.w);
          set_attribute(rect_1, "height", $$props.data.payload.h);
          set_attribute(circle, "cx", $$props.data.cop.x);
          set_attribute(circle, "cy", $$props.data.cop.y);
          set_attribute(line, "x1", $$props.data.cop.x + $$props.data.payload.w / 4);
          set_attribute(line, "y1", $$props.data.cop.y);
          set_attribute(line, "x2", 0.4 * $$props.data.ground.w);
          set_attribute(line, "y2", $$props.data.cop.y);
          set_attribute(text, "x", 0.4 * $$props.data.ground.w);
          set_attribute(text, "y", -($$props.data.cop.y + 20));
          set_attribute(text, "font-size", get(fontSize));
          set_text(text_1, $0);
        },
        [() => $$props.data.cop.z_value.toFixed(0)]
      );
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if ($$props.drawState === "Loads") $$render(consequent);
    });
  }
  var line_1 = sibling(node);
  var text_2 = sibling(line_1);
  var text_3 = child(text_2);
  var node_3 = sibling(text_2);
  each(node_3, 17, () => $$props.data.tubes, index, ($$anchor2, tube) => {
    var fragment_1 = root_2();
    var rect_2 = first_child(fragment_1);
    var node_4 = sibling(rect_2);
    {
      var consequent_1 = ($$anchor3) => {
        var line_2 = root_3();
        template_effect(() => {
          set_attribute(line_2, "x1", -0.5 * $$props.data.ground.w);
          set_attribute(line_2, "y1", $$props.data.ground.h);
          set_attribute(line_2, "x2", get(tube).x);
          set_attribute(line_2, "y2", get(tube).y + get(tube).h);
        });
        append($$anchor3, line_2);
      };
      if_block(node_4, ($$render) => {
        if ($$props.drawState !== "Nested") $$render(consequent_1);
      });
    }
    var node_5 = sibling(node_4);
    {
      var consequent_2 = ($$anchor3) => {
        var fragment_2 = root_4();
        var node_6 = first_child(fragment_2);
        {
          let $0 = user_derived(() => -get(tube).load_value.toFixed(0) + " N");
          let $1 = user_derived(() => get(tube).load_value * $$props.data.payload.w / $$props.data.cop.load);
          SvgArrow(node_6, {
            get tipX() {
              return get(tube).x;
            },
            get tipY() {
              return get(tube).load_z;
            },
            get text() {
              return get($0);
            },
            get length() {
              return get($1);
            },
            get fontSize() {
              return get(fontSize);
            },
            direction: "R"
          });
        }
        var line_3 = sibling(node_6);
        set_attribute(line_3, "x1", 0);
        var text_4 = sibling(line_3);
        var text_5 = child(text_4);
        template_effect(
          ($0) => {
            set_attribute(line_3, "y1", get(tube).load_z);
            set_attribute(line_3, "x2", 0.4 * $$props.data.ground.w);
            set_attribute(line_3, "y2", get(tube).load_z);
            set_attribute(text_4, "x", 0.4 * $$props.data.ground.w);
            set_attribute(text_4, "y", -(get(tube).load_z + 20));
            set_attribute(text_4, "font-size", get(fontSize));
            set_text(text_5, $0);
          },
          [() => get(tube).load_z.toFixed(0)]
        );
        append($$anchor3, fragment_2);
      };
      if_block(node_5, ($$render) => {
        if ($$props.drawState === "Loads") $$render(consequent_2);
      });
    }
    var line_4 = sibling(node_5);
    var text_6 = sibling(line_4);
    var text_7 = child(text_6);
    var line_5 = sibling(text_6);
    var text_8 = sibling(line_5);
    var text_9 = child(text_8);
    template_effect(() => {
      set_attribute(rect_2, "x", get(tube).x);
      set_attribute(rect_2, "y", get(tube).y);
      set_attribute(rect_2, "width", get(tube).w);
      set_attribute(rect_2, "height", get(tube).h);
      set_attribute(line_4, "x1", get(tube).w / 2 + 40);
      set_attribute(line_4, "y1", get(tube).y);
      set_attribute(line_4, "x2", 0.4 * $$props.data.ground.w);
      set_attribute(line_4, "y2", get(tube).y);
      set_attribute(text_6, "x", 0.4 * $$props.data.ground.w);
      set_attribute(text_6, "y", -(get(tube).y + 20));
      set_attribute(text_6, "font-size", get(fontSize));
      set_text(text_7, get(tube).zb);
      set_attribute(line_5, "x1", get(tube).w / 2 + 40);
      set_attribute(line_5, "y1", get(tube).y + get(tube).h);
      set_attribute(line_5, "x2", 0.4 * $$props.data.ground.w);
      set_attribute(line_5, "y2", get(tube).y + get(tube).h);
      set_attribute(text_8, "x", 0.4 * $$props.data.ground.w);
      set_attribute(text_8, "y", -(get(tube).y + get(tube).h + 20));
      set_attribute(text_8, "font-size", get(fontSize));
      set_text(text_9, get(tube).zt);
    });
    append($$anchor2, fragment_1);
  });
  var rect_3 = sibling(node_3);
  var polyline = sibling(rect_3);
  set_attribute(polyline, "stroke-width", false);
  var circle_1 = sibling(polyline);
  set_attribute(circle_1, "r", 25);
  var node_7 = sibling(circle_1);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_3 = root_5();
      var node_8 = first_child(fragment_3);
      {
        let $0 = user_derived(() => $$props.data.side_adapter.y + $$props.data.ground.h);
        let $1 = user_derived(() => $$props.data.side_adapter.load.toFixed(0));
        SvgArrow(node_8, {
          get tipX() {
            return $$props.data.side_adapter.x;
          },
          get tipY() {
            return get($0);
          },
          get text() {
            return get($1);
          },
          get fontSize() {
            return get(fontSize);
          },
          direction: "L"
        });
      }
      var node_9 = sibling(node_8);
      {
        let $0 = user_derived(() => -$$props.data.ground.reaction_w_adapter.toFixed(0));
        SvgArrow(node_9, {
          tipX: 0,
          get tipY() {
            return $$props.data.ground.h;
          },
          get text() {
            return get($0);
          },
          get fontSize() {
            return get(fontSize);
          },
          direction: "R"
        });
      }
      append($$anchor2, fragment_3);
    };
    if_block(node_7, ($$render) => {
      if ($$props.drawState === "Loads") $$render(consequent_3);
    });
  }
  var line_6 = sibling(node_7);
  set_attribute(line_6, "y1", 10);
  template_effect(
    ($0) => {
      set_attribute(svg, "width", $$props.width);
      set_attribute(svg, "height", get(height));
      set_attribute(g, "transform", `
            translate(${get(offsetX)}, ${get(offsetY)})
            scale(${get(scale)}, -${get(scale)})
        `);
      set_attribute(rect, "x", $$props.data.ground.x);
      set_attribute(rect, "y", $$props.data.ground.y);
      set_attribute(rect, "width", $$props.data.ground.w);
      set_attribute(rect, "height", $$props.data.ground.h);
      set_attribute(line_1, "x1", -0.4 * $$props.data.ground.w);
      set_attribute(line_1, "y1", $$props.data.payload.y);
      set_attribute(line_1, "x2", -$$props.data.payload.w * 0.55);
      set_attribute(line_1, "y2", $$props.data.payload.y);
      set_attribute(text_2, "x", -0.4 * $$props.data.ground.w);
      set_attribute(text_2, "y", -($$props.data.payload.y - get(textOffset)));
      set_attribute(text_2, "font-size", get(fontSize));
      set_text(text_3, `${$$props.drawState !== "Nested" ? "Extended Height" : "Nested Height"}
                ${$$props.data.mast.height ?? ""}`);
      set_attribute(rect_3, "x", $$props.data.payload_adapter.x);
      set_attribute(rect_3, "y", $$props.data.payload_adapter.y);
      set_attribute(rect_3, "width", $$props.data.payload_adapter.w);
      set_attribute(rect_3, "height", $$props.data.payload_adapter.h);
      set_attribute(polyline, "points", $0);
      set_attribute(circle_1, "cx", $$props.data.side_adapter.x);
      set_attribute(circle_1, "cy", $$props.data.side_adapter.y + $$props.data.ground.h);
      set_attribute(line_6, "y2", $$props.data.box.h - 10);
    },
    [
      () => $$props.data.side_adapter.points.map((p) => `${p.x},${p.y}`).join(" ")
    ]
  );
  append($$anchor, div);
  pop();
}
export {
  MastDrawing as default
};
//# sourceMappingURL=MastDrawing-CV1f76mx.js.map
