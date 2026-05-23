import { p as push, w as spread_props, x as comment, m as first_child, y as noop, c as append, d as pop, z as rest_props, r as state, A as proxy, g as sibling, h as child, t as template_effect, n as delegated, k as from_html, o as set, q as get, v as delegate, l as set_text } from "./app-Dy2KnI5v.js";
import { b as bind_this } from "./this-BKinVkk9.js";
import Layout from "./Layout-BuHYv4Ql.js";
import { C as Chart } from "./auto-CKuhSdyR.js";
import { I as Icon, s as snippet } from "./users-PDO1V6S0.js";
import { X } from "./x-8ALEWnlk.js";
import { M as Minus } from "./minus-BqFApJdv.js";
import { P as Plus } from "./plus-BSXuxLRi.js";
import "./slot-DtgNxSws.js";
import "./NavBar-CRwixYny.js";
import "./attributes-DT5rhWPg.js";
import "./config-ei04y2F2.js";
import "./KapkaraIcon-DREvkYhs.js";
import "./user-Cc_Ojfab.js";
import "./Footer-CI4uvyrz.js";
function Divide($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "6", "r": "1" }],
    ["line", { "x1": "5", "x2": "19", "y1": "12", "y2": "12" }],
    ["circle", { "cx": "12", "cy": "18", "r": "1" }]
  ];
  Icon($$anchor, spread_props({ name: "divide" }, () => props, {
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
var root_1 = from_html(`<section class="section"><h1 class="title is-size-1 has-text-centered">Gauss Distribution for <br/>Javascript Math.random()</h1> <h1 class="subtitle is-size-1 has-text-centered">A Galton Board Implementation</h1> <button class="button is-small">?</button> <div id="graph" class="card my-4 p-8"></div> <div class="container" id="divGauss"><canvas></canvas></div> <nav class="level"><div class="level-item has-text-centered"><div><p class="heading">Number of Random Run Iterations</p> <button class="button is-small" id="minusCycleNo"><!></button> <span class="title"> </span> <button class="button is-small"><!></button></div></div> <div class="level-item has-text-centered"><div><p class="heading">Number of Data Intervals</p> <button class="button is-small"><!></button> <span class="title"> </span> <button class="button is-small"><!></button></div></div></nav> <div class="modal" id="modal"><div class="modal-background" role="button" tabindex="0" aria-label="Close modal"></div> <div class="modal-card"><header class="modal-card-head"><p class="modal-card-title">Galton Board</p> <button class="delete" aria-label="close"></button></header> <section class="modal-card-body"><figure class="image"><img src="../Other/Galton_box.jpg" alt="Galton Box"/></figure> <a href="https://en.wikipedia.org/wiki/Galton_board">More ...</a></section></div></div></section>`);
function Gauss($$anchor, $$props) {
  push($$props, true);
  let boxNo = state(9);
  let cycleNo = state(100);
  let gaussChart;
  let gaussChartInstance;
  let gauss = state(proxy({}));
  window.onload = function() {
    DrawChart();
  };
  function toggleModal() {
    document.getElementById("modal").classList.toggle("is-active");
  }
  function RunProgram() {
    set(gauss, {}, true);
    for (let i = 1; i <= get(cycleNo); i++) {
      let durum = 100;
      for (let i2 = 0; i2 < get(boxNo) - 1; i2++) {
        if (Math.random() < 0.5) {
          durum = durum - 1;
        } else {
          durum = durum + 1;
        }
      }
      durum = durum / 2;
      if (!get(gauss)[durum]) {
        get(gauss)[durum] = 0;
      }
      get(gauss)[durum] = get(gauss)[durum] + 1;
    }
  }
  function DrawChart() {
    if (!gaussChart) return;
    RunProgram();
    const ctx = gaussChart.getContext("2d");
    const formattedData = Object.entries(get(gauss)).map(([key, value]) => ({ x: Number(key), y: value })).sort((a, b) => a.x - b.x);
    const chartData = {
      labels: Object.keys(get(gauss)),
      datasets: [
        {
          label: "Number of Occurances",
          data: formattedData,
          borderColor: "#D7263D",
          // ... styles
          yAxisID: "y",
          tension: 0.35
        }
      ]
    };
    if (gaussChartInstance) {
      gaussChartInstance.data = chartData;
      gaussChartInstance.update("none");
    } else {
      gaussChartInstance = new Chart(ctx, {
        type: "bar",
        data: chartData,
        options: {
          responsive: true,
          scales: {
            x: {
              type: "linear",
              display: true,
              title: {
                display: true,
                text: "Interval Number",
                color: "#666",
                font: { size: 14, weight: "bold" }
              }
            },
            y: {
              type: "linear",
              display: true,
              position: "left",
              title: {
                display: true,
                text: "Occurance",
                color: "#666",
                font: { size: 14, weight: "bold" }
              },
              // Useful if you want the negative values to stay consistent
              beginAtZero: false
            }
          },
          plugins: {
            title: { display: true, text: "Gauss/Normal Distribution" },
            tooltip: {}
          }
        }
      });
    }
  }
  function Refresh2(arg1, arg2) {
    if (arg1 === "iteration") {
      if (arg2 === "down") {
        set(cycleNo, Math.floor(get(cycleNo) / 10), true);
      } else if (arg2 === "up") {
        set(cycleNo, get(cycleNo) * 10);
      }
    }
    if (arg1 === "box") {
      if (arg2 === "down") {
        set(boxNo, get(boxNo) - 2);
      } else if (arg2 === "up") {
        set(boxNo, get(boxNo) + 2);
      }
    }
    DrawChart();
  }
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var button = sibling(child(section), 4);
      var div = sibling(button, 4);
      var canvas = child(div);
      bind_this(canvas, ($$value) => gaussChart = $$value, () => gaussChart);
      var nav = sibling(div, 2);
      var div_1 = child(nav);
      var div_2 = child(div_1);
      var button_1 = sibling(child(div_2), 2);
      var node = child(button_1);
      Divide(node, { size: "16", color: "blue" });
      var span = sibling(button_1, 2);
      var text = child(span);
      var button_2 = sibling(span, 2);
      var node_1 = child(button_2);
      X(node_1, { size: "16", color: "blue" });
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var button_3 = sibling(child(div_4), 2);
      var node_2 = child(button_3);
      Minus(node_2, { size: "16", color: "blue" });
      var span_1 = sibling(button_3, 2);
      var text_1 = child(span_1);
      var button_4 = sibling(span_1, 2);
      var node_3 = child(button_4);
      Plus(node_3, { size: "16", color: "blue" });
      var div_5 = sibling(nav, 2);
      var div_6 = child(div_5);
      var div_7 = sibling(div_6, 2);
      var header = child(div_7);
      var button_5 = sibling(child(header), 2);
      template_effect(() => {
        set_text(text, get(cycleNo));
        set_text(text_1, get(boxNo));
      });
      delegated("click", button, toggleModal);
      delegated("click", button_1, () => Refresh2("iteration", "down"));
      delegated("click", button_2, () => Refresh2("iteration", "up"));
      delegated("click", button_3, () => Refresh2("box", "down"));
      delegated("click", button_4, () => Refresh2("box", "up"));
      delegated("keydown", div_6, (e) => e.key === "Enter" && toggleModal());
      delegated("click", div_6, toggleModal);
      delegated("click", button_5, toggleModal);
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
delegate(["click", "keydown"]);
export {
  Gauss as default
};
//# sourceMappingURL=Gauss-MbAxK_pw.js.map
