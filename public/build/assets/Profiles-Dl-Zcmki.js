import { i as init, c as pop, d as push, C as each, t as template_effect, q as get, l as set_text, n as delegated, b as append, g as sibling, k as child, j as from_html, o as set, E as mutable_source, v as delegate, D as index } from "./app-B3TC2Fcx.js";
import Layout from "./Layout-DEJXo2nf.js";
import { T as Title } from "./Title-BswqQN3w.js";
import { c as config } from "./config-DVchbvFr.js";
import { M as Minus } from "./minus-Dw3EppB5.js";
import { P as Plus } from "./plus-mvHohXhy.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-DS_2IATg.js";
import "./attributes-BmlKk72Z.js";
import "./NavBar-Bug_ySFU.js";
import "./users-C3g1dnqi.js";
import "./PdmIcon-nQqjGdVH.js";
import "./factory-XMGy52MX.js";
import "./Footer-CZBn2Ryz.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-BA9CIx4Y.js";
var root_2 = from_html(`<tr><th> </th><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right has-background-white-ter"> </td><td class="has-text-right has-background-white-ter"> </td><td class="has-text-right"> </td></tr>`);
var root_1 = from_html(`<section class="section content"><!> <table class="table is-fullwidth my-6"><thead><tr><th class="has-text-left font-bold">#</th><th class="has-text-right">OD<br/>(mm)</th><th class="has-text-right">ID<br/>(mm)</th><th class="has-text-right">THK<br/>(mm)</th><th class="has-text-right">Mass <br/>(kg/m)</th><th class="has-text-right">Moment<br/>Capacity<br/> <span class="is-size-7"></span> <br/>(Nm)</th><th class="has-text-centered has-background-white-ter" colspan="2">Pneumatic<br/>Load Capacity<sup>(1)</sup> <br/> <div class="column"><button class="button p-2"><span class="icon is-small"><!></span></button> <span class="tag is-info"> </span> <button class="button p-2"><span class="icon is-small"><!></span></button></div></th><th class="has-text-centered">P<sub>cr</sub><sup>(2)</sup> <br/><br/> <div class="column"><button class="button p-2"><span class="icon is-small"><!></span></button> <span class="tag is-info"> </span> <button class="button p-2"><span class="icon is-small"><!></span></button></div></th></tr></thead><tbody id="tableBody"></tbody></table></section>`);
function Profiles($$anchor, $$props) {
  push($$props, false);
  let factorOfSafety = 1.5;
  let pressure = mutable_source(
    2
    // Bars
  );
  let tubeBucklingLength = mutable_source(
    3e3
    // mm
  );
  function calculateMass(tube, length) {
    return tube.area_mm2 * length * config.alum_6063_density / 1e6;
  }
  function getMomentCapacity(tube) {
    return config.alum_6063_yield_strength * tube.inertia_mm4 * 1e-9 / (0.5 * tube.od * factorOfSafety);
  }
  function getCriticalLoad(tube) {
    return 1e-6 * Math.pow(Math.PI, 2) * config.alum_6063_E * tube.inertia_mm4 / (4 * Math.pow(get(tubeBucklingLength), 2) * factorOfSafety);
  }
  function CalculateLiftCapacity(tube) {
    let inner_area = Math.PI * Math.pow(tube.od / 2, 2);
    let pressure_in_MPa = 0.1 * get(pressure);
    return {
      "N": pressure_in_MPa * inner_area,
      "kg": pressure_in_MPa * inner_area / 9.81
    };
  }
  function changeUpDown(type, direction) {
    if (type === "pressure") {
      if (direction === "up") {
        set(pressure, get(pressure) + 0.1);
      } else {
        set(pressure, get(pressure) - 0.1);
      }
    }
    if (type === "buckling_length") {
      if (direction === "up") {
        set(tubeBucklingLength, get(tubeBucklingLength) + 100);
      } else {
        set(tubeBucklingLength, get(tubeBucklingLength) - 100);
      }
    }
  }
  init();
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, {
        title: "Masttech Tube Profiles",
        subtitle: "All Rights Reserved © 2025"
      });
      var table = sibling(node, 2);
      var thead = child(table);
      var tr = child(thead);
      var th = sibling(child(tr), 5);
      var span = sibling(child(th), 5);
      span.textContent = "(Factor of Safety : 1.5)";
      var th_1 = sibling(th);
      var div = sibling(child(th_1), 7);
      var button = child(div);
      var span_1 = child(button);
      var node_1 = child(span_1);
      Minus(node_1, { size: "16" });
      var span_2 = sibling(button, 2);
      var text = child(span_2);
      var button_1 = sibling(span_2, 2);
      var span_3 = child(button_1);
      var node_2 = child(span_3);
      Plus(node_2, { size: "16" });
      var th_2 = sibling(th_1);
      var div_1 = sibling(child(th_2), 7);
      var button_2 = child(div_1);
      var span_4 = child(button_2);
      var node_3 = child(span_4);
      Minus(node_3, { size: "16" });
      var span_5 = sibling(button_2, 2);
      var text_1 = child(span_5);
      var button_3 = sibling(span_5, 2);
      var span_6 = child(button_3);
      var node_4 = child(span_6);
      Plus(node_4, { size: "16" });
      var tbody = sibling(thead);
      each(tbody, 5, () => config.tubes, index, ($$anchor3, tube) => {
        var tr_1 = root_2();
        var th_3 = child(tr_1);
        var text_2 = child(th_3);
        var td = sibling(th_3);
        var text_3 = child(td);
        var td_1 = sibling(td);
        var text_4 = child(td_1);
        var td_2 = sibling(td_1);
        var text_5 = child(td_2);
        var td_3 = sibling(td_2);
        var text_6 = child(td_3);
        var td_4 = sibling(td_3);
        var text_7 = child(td_4);
        var td_5 = sibling(td_4);
        var text_8 = child(td_5);
        var td_6 = sibling(td_5);
        var text_9 = child(td_6);
        var td_7 = sibling(td_6);
        var text_10 = child(td_7);
        template_effect(
          ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
            set_text(text_2, `MT-${$0 ?? ""}`);
            set_text(text_3, $1);
            set_text(text_4, $2);
            set_text(text_5, $3);
            set_text(text_6, $4);
            set_text(text_7, `${$5 ?? ""} Nm`);
            set_text(text_8, `${$6 ?? ""} N`);
            set_text(text_9, `${$7 ?? ""} kg`);
            set_text(text_10, `${$8 ?? ""} N`);
          },
          [
            () => String(get(tube).no).padStart(2, "0"),
            () => get(tube).od.toFixed(2),
            () => get(tube).id.toFixed(2),
            () => get(tube).thk.toFixed(1),
            () => calculateMass(get(tube), 1).toFixed(2),
            () => getMomentCapacity(get(tube)).toFixed(0),
            () => CalculateLiftCapacity(get(tube)).N.toFixed(0),
            () => CalculateLiftCapacity(get(tube)).kg.toFixed(0),
            () => getCriticalLoad(get(tube)).toFixed(0)
          ]
        );
        append($$anchor3, tr_1);
      });
      template_effect(
        ($0, $1) => {
          set_text(text, `${$0 ?? ""} Bars`);
          set_text(text_1, `${$1 ?? ""} mm`);
        },
        [
          () => get(pressure).toFixed(1),
          () => get(tubeBucklingLength).toFixed(0)
        ]
      );
      delegated("click", button, () => changeUpDown("pressure", "down"));
      delegated("click", button_1, () => changeUpDown("pressure", "up"));
      delegated("click", button_2, () => changeUpDown("buckling_length", "down"));
      delegated("click", button_3, () => changeUpDown("buckling_length", "up"));
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
delegate(["click"]);
export {
  Profiles as default
};
//# sourceMappingURL=Profiles-Dl-Zcmki.js.map
