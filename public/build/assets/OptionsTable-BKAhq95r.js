import { i as init, c as pop, d as push, y as each, b as append, k as child, g as sibling, j as from_html, o as set, J as mutable_source, z as comment, m as first_child, A as index, a as if_block, t as template_effect, l as set_text, q as get, B as user_derived, aC as to_array } from "./app-B8UKlAbY.js";
import { o as onMount } from "./index-client-BrUzj1xQ.js";
import { s as set_attribute } from "./attributes-BE60HdxF.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import "./class-iAXZF-Rm.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-B6fRcdfC.js";
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
var root_4 = from_html(`<th class="has-text-weight-bold is-size-4 has-text-right"> </th>`);
var root_3 = from_html(`<tr><!><td> </td><td class="has-text-right"><a title="Extended Height"> </a></td><td class="has-text-right"><a title="Nested Height"> </a></td><td><a title="Configuration Details"> </a></td></tr>`);
var root_1 = from_html(`<section class="section content p-16"><!> <table class="table is-bordered mx-auto"><thead><tr><th rowspan="2">Height</th><th rowspan="2">Sections</th><th class="has-text-centered" colspan="2">Mast Type</th><th rowspan="2">Details</th></tr><tr><th class="has-text-right">Extended<br/>Height</th><th class="has-text-right">Nested<br/>Height</th></tr></thead><tbody id="tableBody"></tbody></table></section>`);
function OptionsTable_1($$anchor, $$props) {
  push($$props, false);
  class OptionsTable {
    constructor(params2) {
      console.log(params2);
      this.params = params2;
      this.lmin = 500;
      this.lmax = 3e3;
      this.overlap = null;
      this.head_height = 55;
      this.base_adapter_height = 11;
      this.payload_adapter_height = 10;
      this.target_heights = [
        2500,
        3e3,
        4e3,
        5e3,
        6e3,
        8e3,
        9e3,
        1e4,
        12e3,
        15e3,
        18e3
      ];
      this.no_of_sections = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      this.table = {};
    }
    getExtendedHeight(n, tlength) {
      return n * tlength - (n - 1) * this.overlap + this.base_adapter_height + this.payload_adapter_height;
    }
    getNestedHeight(n, tlength) {
      return tlength + (n - 1) * this.head_height + this.base_adapter_height + this.payload_adapter_height;
    }
    getTable() {
      let min_nh;
      for (const height of this.target_heights) {
        min_nh = height;
        this.overlap = Math.ceil(10 * height / 1e3 + 220);
        this.table[height] ??= {};
        for (const n of this.no_of_sections) {
          for (let tlength = this.lmin; tlength <= this.lmax; tlength += 5) {
            const extendedHeight = this.getExtendedHeight(n, tlength);
            const nestedHeight = this.getNestedHeight(n, tlength);
            if (extendedHeight >= height) {
              if (nestedHeight < min_nh) {
                this.table[height][n] ??= {};
                this.table[height][n]["EH"] = extendedHeight;
                this.table[height][n]["NH"] = nestedHeight;
                this.table[height][n]["QR"] = this.qrData(this.params, tlength, n);
                this.table[height][n]["Code"] = `${+(height / 1e3).toFixed(1)}MTNX-` + (nestedHeight / 1e3).toFixed(1) + "-" + n;
                min_nh = nestedHeight;
              }
              break;
            }
          }
        }
      }
    }
    qrData(params2, tube_length, no_of_sections) {
      params2.start_tube_no = params2.end_tube_no - (no_of_sections - 1);
      let qr = params2.start_tube_no + "-" + params2.end_tube_no + "-" + this.overlap + "-" + params2.base_adapter_height + "-" + params2.payload_adapter_height + "-" + params2.sail_area + "-" + params2.wind_speed + "-" + params2.head_height + "-" + tube_length + "-" + params2.terrain_category + "-" + params2.x_offset + "-" + params2.z_offset + "-" + params2.payload_mass + "-" + params2.motor_id + "-" + params2.gearbox_id;
      return qr;
    }
  }
  let conf_table = mutable_source({});
  let params = {};
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsString = urlParams.get("params");
    if (paramsString) {
      try {
        params = JSON.parse(decodeURIComponent(paramsString));
      } catch (error) {
        console.error("Failed to parse URL params:", error);
      }
    }
    let optionsTable = new OptionsTable(params);
    optionsTable.getTable();
    set(conf_table, optionsTable.table);
  });
  init();
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_1();
      var node = child(section);
      Title(node, {
        title: "Masttech Mast Configuration Options",
        subtitle: "Number of Sections / Extended-Nested Heights"
      });
      var table = sibling(node, 2);
      var tbody = sibling(child(table));
      each(tbody, 5, () => Object.entries(get(conf_table)), index, ($$anchor3, $$item) => {
        var $$array = user_derived(() => to_array(get($$item), 2));
        let height = () => get($$array)[0];
        let options = () => get($$array)[1];
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        each(node_1, 1, () => Object.entries(options()), index, ($$anchor4, $$item2, i) => {
          var $$array_1 = user_derived(() => to_array(get($$item2), 2));
          let noOfSections = () => get($$array_1)[0];
          let opt = () => get($$array_1)[1];
          var tr = root_3();
          var node_2 = child(tr);
          {
            var consequent = ($$anchor5) => {
              var th = root_4();
              var text = child(th);
              template_effect(
                ($0, $1) => {
                  set_attribute(th, "rowspan", $0);
                  set_text(text, `${$1 ?? ""} m`);
                },
                [
                  () => Object.keys(options()).length,
                  () => `${+(height() / 1e3).toFixed(1)}`
                ]
              );
              append($$anchor5, th);
            };
            if_block(node_2, ($$render) => {
              if (i === 0) $$render(consequent);
            });
          }
          var td = sibling(node_2);
          var text_1 = child(td);
          var td_1 = sibling(td);
          var a = child(td_1);
          var text_2 = child(a);
          var td_2 = sibling(td_1);
          var a_1 = child(td_2);
          var text_3 = child(a_1);
          var td_3 = sibling(td_2);
          var a_2 = child(td_3);
          var text_4 = child(a_2);
          template_effect(() => {
            set_text(text_1, noOfSections() + " Sections");
            set_attribute(a, "href", `/pdm/engineering/configurator?qr=${opt().QR ?? ""}`);
            set_text(text_2, `${opt().EH ?? ""} mm`);
            set_attribute(a_1, "href", `/pdm/engineering/configurator?qr=${opt().QR ?? ""}`);
            set_text(text_3, `${opt().NH ?? ""} mm`);
            set_attribute(a_2, "href", `/pdm/engineering/configurator?qr=${opt().QR ?? ""}`);
            set_text(text_4, opt().Code);
          });
          append($$anchor4, tr);
        });
        append($$anchor3, fragment_1);
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  OptionsTable_1 as default
};
//# sourceMappingURL=OptionsTable-BKAhq95r.js.map
