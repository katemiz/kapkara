import { i as init, c as pop, d as push, y as each, t as template_effect, q as get, l as set_text, n as delegated, b as append, k as child, g as sibling, j as from_html, o as set, J as mutable_source, v as delegate, A as index } from "./app-B8UKlAbY.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { c as config } from "./config-Bf6Z-0x1.js";
import { M as Minus } from "./minus-BJm4PvM8.js";
import { P as Plus } from "./plus-CnOy2VL6.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-B6fRcdfC.js";
import "./attributes-BE60HdxF.js";
import "./NavBar-BnFd_LJK.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./PdmIcon-BfD2mC8v.js";
import "./factory-baDv4zVQ.js";
import "./box-D-pQSdgi.js";
import "./settings-Cg7pxvZj.js";
import "./users-CjbPgFWT.js";
import "./Footer-D0jJN3Vq.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
var root_2 = from_html(`<tr><th> </th><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right has-background-white-ter"> </td><td class="has-text-right has-background-white-ter"> </td><td class="has-text-right"> </td></tr>`);
var root_3 = from_html(`<tr><th> </th><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right"> </td><td class="has-text-right has-background-white-ter"> </td><td class="has-text-right has-background-white-ter"> </td><td class="has-text-right"> </td></tr>`);
var root_1 = from_html(`<section class="section content"><!> <table class="table is-fullwidth my-6"><caption class="has-text-weight-bold has-text-centered mb-4 is-size-2">Tubes with Lips</caption><thead><tr><th class="has-text-left font-bold">#</th><th class="has-text-right">OD<br/>(mm)</th><th class="has-text-right">ID<br/>(mm)</th><th class="has-text-right">THK<br/>(mm)</th><th class="has-text-right">Mass <br/>(kg/m)</th><th class="has-text-right">Moment<br/>Capacity<br/> <span class="is-size-7"></span> <br/>(Nm)</th><th class="has-text-centered has-background-white-ter" colspan="2">Pneumatic<br/>Load Capacity<sup>(1)</sup> <br/> <div class="column"><button class="button p-2"><span class="icon is-small"><!></span></button> <span class="tag is-info"> </span> <button class="button p-2"><span class="icon is-small"><!></span></button></div></th><th class="has-text-centered">P<sub>cr</sub><sup>(2)</sup> <br/><br/> <div class="column"><button class="button p-2"><span class="icon is-small"><!></span></button> <span class="tag is-info"> </span> <button class="button p-2"><span class="icon is-small"><!></span></button></div></th></tr></thead><tbody id="tableBody"></tbody></table> <table class="table is-fullwidth my-6"><caption class="has-text-weight-bold has-text-centered mb-4 is-size-2">Circular Tubes</caption><thead><tr><th class="has-text-left font-bold">#</th><th class="has-text-right">OD<br/>(mm)</th><th class="has-text-right">ID<br/>(mm)</th><th class="has-text-right">THK<br/>(mm)</th><th class="has-text-right">Mass <br/>(kg/m)</th><th class="has-text-right">Moment<br/>Capacity<br/> <span class="is-size-7"></span> <br/>(Nm)</th><th class="has-text-centered has-background-white-ter" colspan="2">Pneumatic<br/>Load Capacity<sup>(1)</sup> <br/> <div class="column"><button class="button p-2"><span class="icon is-small"><!></span></button> <span class="tag is-info"> </span> <button class="button p-2"><span class="icon is-small"><!></span></button></div></th><th class="has-text-centered">P<sub>cr</sub><sup>(2)</sup> <br/><br/> <div class="column"><button class="button p-2"><span class="icon is-small"><!></span></button> <span class="tag is-info"> </span> <button class="button p-2"><span class="icon is-small"><!></span></button></div></th></tr></thead><tbody></tbody></table></section>`);
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
      var thead = sibling(child(table));
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
            set_class(th_3, 1, get(tube).has_die ? "has-background-success-light" : "");
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
      var table_1 = sibling(table, 2);
      var thead_1 = sibling(child(table_1));
      var tr_2 = child(thead_1);
      var th_4 = sibling(child(tr_2), 5);
      var span_7 = sibling(child(th_4), 5);
      span_7.textContent = "(Factor of Safety : 1.5)";
      var th_5 = sibling(th_4);
      var div_2 = sibling(child(th_5), 7);
      var button_4 = child(div_2);
      var span_8 = child(button_4);
      var node_5 = child(span_8);
      Minus(node_5, { size: "16" });
      var span_9 = sibling(button_4, 2);
      var text_11 = child(span_9);
      var button_5 = sibling(span_9, 2);
      var span_10 = child(button_5);
      var node_6 = child(span_10);
      Plus(node_6, { size: "16" });
      var th_6 = sibling(th_5);
      var div_3 = sibling(child(th_6), 7);
      var button_6 = child(div_3);
      var span_11 = child(button_6);
      var node_7 = child(span_11);
      Minus(node_7, { size: "16" });
      var span_12 = sibling(button_6, 2);
      var text_12 = child(span_12);
      var button_7 = sibling(span_12, 2);
      var span_13 = child(button_7);
      var node_8 = child(span_13);
      Plus(node_8, { size: "16" });
      var tbody_1 = sibling(thead_1);
      each(tbody_1, 5, () => config.circular_tubes, index, ($$anchor3, tube) => {
        var tr_3 = root_3();
        var th_7 = child(tr_3);
        var text_13 = child(th_7);
        var td_8 = sibling(th_7);
        var text_14 = child(td_8);
        var td_9 = sibling(td_8);
        var text_15 = child(td_9);
        var td_10 = sibling(td_9);
        var text_16 = child(td_10);
        var td_11 = sibling(td_10);
        var text_17 = child(td_11);
        var td_12 = sibling(td_11);
        var text_18 = child(td_12);
        var td_13 = sibling(td_12);
        var text_19 = child(td_13);
        var td_14 = sibling(td_13);
        var text_20 = child(td_14);
        var td_15 = sibling(td_14);
        var text_21 = child(td_15);
        template_effect(
          ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
            set_class(th_7, 1, get(tube).has_die ? "has-background-success-light" : "");
            set_text(text_13, `C-${$0 ?? ""}`);
            set_text(text_14, $1);
            set_text(text_15, $2);
            set_text(text_16, $3);
            set_text(text_17, $4);
            set_text(text_18, `${$5 ?? ""} Nm`);
            set_text(text_19, `${$6 ?? ""} N`);
            set_text(text_20, `${$7 ?? ""} kg`);
            set_text(text_21, `${$8 ?? ""} N`);
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
        append($$anchor3, tr_3);
      });
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text, `${$0 ?? ""} Bars`);
          set_text(text_1, `${$1 ?? ""} mm`);
          set_text(text_11, `${$2 ?? ""} Bars`);
          set_text(text_12, `${$3 ?? ""} mm`);
        },
        [
          () => get(pressure).toFixed(1),
          () => get(tubeBucklingLength).toFixed(0),
          () => get(pressure).toFixed(1),
          () => get(tubeBucklingLength).toFixed(0)
        ]
      );
      delegated("click", button, () => changeUpDown("pressure", "down"));
      delegated("click", button_1, () => changeUpDown("pressure", "up"));
      delegated("click", button_2, () => changeUpDown("buckling_length", "down"));
      delegated("click", button_3, () => changeUpDown("buckling_length", "up"));
      delegated("click", button_4, () => changeUpDown("pressure", "down"));
      delegated("click", button_5, () => changeUpDown("pressure", "up"));
      delegated("click", button_6, () => changeUpDown("buckling_length", "down"));
      delegated("click", button_7, () => changeUpDown("buckling_length", "up"));
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
//# sourceMappingURL=Profiles-eJZ3hjIO.js.map
