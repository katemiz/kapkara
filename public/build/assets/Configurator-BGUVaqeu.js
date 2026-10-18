import { F as user_effect, w as proxy, c as pop, d as push, f as setup_stores, h as store_mutate, u as untrack, q as get, a as if_block, y as each, t as template_effect, l as set_text, n as delegated, o as set, b as append, k as child, g as sibling, s as store_get, j as from_html, r as state, B as user_derived, v as delegate, A as index } from "./app-B8UKlAbY.js";
import { o as onMount } from "./index-client-BrUzj1xQ.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import { b as bind_this } from "./this-DBviCOsL.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { F as FormInput } from "./FormInput-CJaWZzUI.js";
import { F as FormRadio } from "./FormRadio-B-fITcoQ.js";
import { F as FormSelect } from "./FormSelect-vcBHkPN1.js";
import { z as zeros, m as multiply, i as inv, e as eigs, M as MastVibration$1, a as mtnx_bom, I as Info, T as Target, L as List, B as Braces, P as Pdf, W as Weight_tilde, C as Chart_line, b as Chart_spline, A as Arrow_up_narrow_wide, c as Arrow_down_narrow_wide, d as Wrench, f as Audio_waveform, R as Receipt_text, J as JsonTree, g as MakePDF } from "./MastVibration2-CsdlCNNS.js";
import { c as config } from "./config-Bf6Z-0x1.js";
import { C as Chart } from "./auto-CKuhSdyR.js";
import { u as useForm } from "./useForm-CP0Bw01O.js";
import { B as Box } from "./box-D-pQSdgi.js";
import "./slot-DtgNxSws.js";
import "./svelte-head-B6fRcdfC.js";
import "./attributes-BE60HdxF.js";
import "./NavBar-BnFd_LJK.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./PdmIcon-BfD2mC8v.js";
import "./factory-baDv4zVQ.js";
import "./settings-Cg7pxvZj.js";
import "./users-CjbPgFWT.js";
import "./Footer-D0jJN3Vq.js";
import "./config-Bq1oq5IH.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./input-D6UcyCrD.js";
import "./browser-DwfGhph4.js";
class MastGeometry {
  constructor(params, config2) {
    this.data = {
      params: JSON.parse(JSON.stringify(params)),
      config: config2,
      power: {},
      weights: {},
      props: {},
      beam: []
    };
    this.setDependentProps();
    this.setMastTubes();
    this.setMastHeights();
    this.setZPositions();
    this.setBeamProps();
    this.windLoadsOnTubes();
    this.windLoadOnPayload();
    this.estimateMastMass();
    this.getMastMass();
    this.torqueRequired();
  }
  setCircularArea(tube) {
    return Math.PI * tube.od * tube.thk;
  }
  setCircularMomentOfInertia(tube) {
    return Math.PI * (tube.od ** 4 - tube.id ** 4) / 64;
  }
  calculateMass(tube, length) {
    return tube.area_mm2 * length * tube.material_density / 1e6;
  }
  setDependentProps() {
    this.data.params.noOfTubes = this.data.params.end_tube_no - this.data.params.start_tube_no + 1;
    switch (this.data.params.material) {
      // Aluminum
      default:
        this.data.params.tube_material_density = this.data.config.alum_6063_density;
        this.data.params.tube_material_e = this.data.config.alum_6063_E;
        this.data.params.tube_yield_strength = this.data.config.alum_6063_yield_strength;
        this.data.params.tube_ultimate_strength = this.data.config.alum_6063_ultimate_strength;
        break;
    }
  }
  setMastTubes() {
    this.data.params.tubes = [];
    this.data.config.tubes.forEach((tube) => {
      if (tube.no >= this.data.params.start_tube_no && tube.no <= this.data.params.end_tube_no) {
        tube.material_density = this.data.params.tube_material_density;
        tube.material_e = this.data.params.tube_material_e;
        tube.yield_strength = this.data.params.tube_yield_strength;
        tube.ultimate_strength = this.data.params.tube_ultimate_strength;
        tube.circularArea = this.setCircularArea(tube);
        tube.circularMomentOfInertia = this.setCircularMomentOfInertia(tube);
        tube.mass_per_m = this.calculateMass(tube, 1);
        tube.mass = this.calculateMass(
          tube,
          this.data.params.tube_length / 1e3
        );
        tube.moment_capacity_at_yield_strength_Nm = tube.yield_strength * tube.inertia_mm4 * 1e-12 / (tube.od / 2e3);
        tube.moment_capacity_at_ultimate_strength_Nm = tube.ultimate_strength * tube.inertia_mm4 * 1e-12 / (tube.od / 2e3);
        tube.shear_capacity_at_yield_strength_N = tube.yield_strength * tube.inertia_mm4 * tube.od / (this.findQ(tube) * 1e9);
        tube.shear_capacity_at_ultimate_strength_N = tube.ultimate_strength * tube.inertia_mm4 * tube.od / (this.findQ(tube) * 1e9);
        tube.EI_Nm2 = tube.material_e * tube.inertia_mm4 * 1e-12;
        tube.state_name = "intermediate_section";
        if (tube.no === this.data.params.start_tube_no) {
          tube.state_name = "top_section";
        }
        if (tube.no === this.data.params.end_tube_no) {
          tube.state_name = "bottom_section";
        }
        this.data.params.tubes.push(tube);
      }
    });
  }
  setBeamProps() {
    let z_top, z_bottom;
    this.data.params.tubes.forEach((tube, index2) => {
      if (index2 === 0) {
        z_top = this.data.props.extendedHeight;
        z_bottom = this.data.params.tubes[index2 + 1].extended_zt;
      } else if (this.data.params.tubes.length === index2 + 1) {
        z_bottom = 0;
        z_top = tube.extended_zt;
      } else {
        z_top = z_bottom;
        z_bottom = this.data.params.tubes[index2 + 1].extended_zt;
      }
      this.data.beam.push({
        no: tube.no,
        z_top,
        z_bottom,
        ei: tube.EI_Nm2
      });
    });
  }
  findQ(tube) {
    let q = (Math.pow(tube.od / 2, 3) - Math.pow(tube.id / 2, 3)) / 6;
    return q;
  }
  setMastHeights() {
    this.data.props.extendedHeight = this.data.params.noOfTubes * this.data.params.tube_length - (this.data.params.noOfTubes - 1) * this.data.params.overlap + this.data.params.payload_adapter_height + this.data.params.base_adapter_height;
    this.data.props.nestedHeight = this.data.params.tube_length + (this.data.params.noOfTubes - 1) * this.data.params.head_height + this.data.params.payload_adapter_height + this.data.params.base_adapter_height;
  }
  setZPositions() {
    let ezb, ezt, nzb, nzt;
    this.data.params.tubes.forEach((tube, index2) => {
      if (index2 === 0) {
        ezt = this.data.props.extendedHeight - this.data.params.payload_adapter_height;
        ezb = ezt - this.data.params.tube_length;
        nzt = this.data.props.nestedHeight - this.data.params.payload_adapter_height;
        nzb = nzt - this.data.params.tube_length;
      } else {
        ezt = ezb + this.data.params.overlap;
        ezb = ezt - this.data.params.tube_length;
        nzt = nzt - this.data.params.head_height;
        nzb = nzt - this.data.params.tube_length;
      }
      this.data.params.tubes[index2].nested_zb = nzb;
      this.data.params.tubes[index2].nested_zt = nzt;
      this.data.params.tubes[index2].extended_zb = ezb;
      this.data.params.tubes[index2].extended_zt = ezt;
    });
    this.data.params.tubes.at(-1);
    this.data.props.side_adapter_z = this.data.params.side_adapter_z;
  }
  windLoadsOnTubes() {
    let exposed_length;
    const terrain = this.data.config.terrain_category.find(
      (cat) => cat.no === this.data.params.terrain_category
    );
    this.data.params.tubes.forEach((tube, i) => {
      if (i != this.data.params.noOfTubes - 1) {
        exposed_length = this.data.params.tube_length - this.data.params.overlap;
        this.data.params.tubes[i].wind_load_z = tube.extended_zt - exposed_length / 2;
      } else {
        exposed_length = tube.extended_zt;
        this.data.params.tubes[i].wind_load_z = tube.extended_zt / 2;
      }
      this.data.params.tubes[i].reference_area = tube.od * exposed_length / 1e6;
      this.data.params.tubes[i].wind_exposed_length = exposed_length;
      this.data.params.tubes[i].Ze = tube.extended_zt;
      this.data.params.tubes[i].roughness_length_Z0 = terrain.z0;
      this.data.params.tubes[i].terrain_factor_kr = 0.19 * Math.pow(terrain.z0 / 0.05, 0.07);
      this.data.params.tubes[i].max_height = Math.max(
        tube.extended_zt / 1e3,
        terrain.zmin
      );
      this.data.params.tubes[i].roughness_factor_Cr_at_Ze = this.data.params.tubes[i].terrain_factor_kr * Math.log(this.data.params.tubes[i].max_height / terrain.z0);
      this.data.params.tubes[i].mean_wind_speed_Vm = this.data.params.tubes[i].roughness_factor_Cr_at_Ze * this.data.params.wind_speed / 3.6;
      this.data.params.tubes[i].turbulence_intensity_TI = 1 / (1 * Math.log(
        this.data.params.tubes[i].max_height / terrain.z0
      ));
      this.data.params.tubes[i].basic_velocity_pressure_q = 0.5 * this.data.config.air_density * Math.pow(this.data.params.wind_speed / 3.6, 2);
      this.data.params.tubes[i].peak_velocity_pressure_qp = (1 + 7 * this.data.params.tubes[i].turbulence_intensity_TI) * 0.5 * this.data.config.air_density * Math.pow(this.data.params.tubes[i].mean_wind_speed_Vm, 2);
      this.data.params.tubes[i].wind_velocity_Vp_at_qp = Math.sqrt(
        2 * this.data.params.tubes[i].peak_velocity_pressure_qp / this.data.config.air_density
      );
      this.data.params.tubes[i].reynolds_number_Re = this.data.params.tubes[i].wind_velocity_Vp_at_qp * this.data.params.tubes[i].od / 1e3 / this.data.config.dynamic_viscosity_mu;
      this.data.params.tubes[i].structural_factor = 1;
      this.data.params.tubes[i].surface_roughness = 0.2;
      this.data.params.tubes[i].slenderness_ratio_l_b = this.data.params.tube_length / tube.od;
      if (this.data.params.tube_length / 1e3 <= 15) {
        this.data.params.tubes[i].effective_slenderness = Math.min(
          this.data.params.tubes[i].slenderness_ratio_l_b,
          70
        );
      } else {
        this.data.params.tubes[i].effective_slenderness = Math.min(
          0.7 * this.data.params.tubes[i].slenderness_ratio_l_b,
          70
        );
      }
      if (this.data.params.tubes[i].effective_slenderness <= 10) {
        this.data.params.tubes[i].end_effect_factor = 0.6023079 * Math.pow(
          this.data.params.tubes[i].effective_slenderness,
          0.0657553
        );
      } else {
        this.data.params.tubes[i].end_effect_factor = 0.698573 + 1977401e-9 * this.data.params.tubes[i].effective_slenderness + 8741341e-11 * Math.pow(
          this.data.params.tubes[i].effective_slenderness,
          2
        ) - 103591e-11 * Math.pow(
          this.data.params.tubes[i].effective_slenderness,
          3
        );
      }
      this.data.params.tubes[i].equivalent_roughness_k_b = this.data.params.tubes[i].surface_roughness / tube.od;
      let force_coefficent = 1.2 + 0.18 * Math.log10(
        10 * this.data.params.tubes[i].equivalent_roughness_k_b
      ) / (1 + 0.4 * Math.log10(
        this.data.params.tubes[i].reynolds_number_Re / 1e6
      ));
      if (this.data.params.tubes[i].reynolds_number_Re < 18e4) {
        return 1.2;
      } else if (this.data.params.tubes[i].reynolds_number_Re >= 185e3 && this.data.params.tubes[i].reynolds_number_Re < 4e5) {
        let temp_force_coefficient = 0.11 / Math.pow(
          this.data.params.tubes[i].reynolds_number_Re / 1e6,
          1.4
        );
        if (force_coefficent > temp_force_coefficient) {
          force_coefficent = force_coefficent;
        } else {
          force_coefficent = temp_coefficient;
        }
      }
      if (force_coefficent <= 0.4) {
        force_coefficent = 0.4;
      }
      this.data.params.tubes[i].force_coefficient_wo_end_effect = force_coefficent;
      this.data.params.tubes[i].force_coefficient = this.data.params.tubes[i].force_coefficient_wo_end_effect * this.data.params.tubes[i].end_effect_factor;
      this.data.params.tubes[i].wind_load = this.data.params.tubes[i].structural_factor * this.data.params.tubes[i].force_coefficient * this.data.params.tubes[i].peak_velocity_pressure_qp * this.data.params.tubes[i].reference_area;
    });
  }
  windLoadOnPayload() {
    this.data.props.payload = {
      wind_load_z: null,
      wind_load: null
    };
    this.data.props.payload.wind_load_z = this.data.props.extendedHeight + Math.sqrt(this.data.params.sail_area * 1e6) / 2;
    this.data.props.payload.wind_load = 0.5 * this.data.config.air_density * this.data.config.drag_coefficient_Cd * Math.pow(this.data.params.wind_speed / 3.6, 2) * this.data.params.sail_area;
  }
  estimateMastMass() {
    this.data.weights = {
      lifted_mass: 0,
      total_mast_mass: 0
    };
    this.data.params.tubes.forEach((tube) => {
      this.data.weights.total_mast_mass += tube.mass;
    });
  }
  torqueRequired() {
    let torque;
    let load = (this.data.params.payload_mass + this.data.weights.lifted_mass) * 9.81;
    let thread_angle = Math.atan(
      this.data.config.screw_lead / (Math.PI * this.data.config.screw_nominal_diameter)
    );
    let secant = 1 / Math.cos(thread_angle);
    torque = 0.5 * load * this.data.config.screw_nominal_diameter * (this.data.config.screw_lead + Math.PI * this.data.config.screw_coefficient_of_friction * this.data.config.screw_nominal_diameter * secant) / (Math.PI * this.data.config.screw_nominal_diameter - this.data.config.screw_coefficient_of_friction * this.data.config.screw_lead * secant) / 1e3;
    this.data.power.torque_required_to_extend_mast_Nm = torque;
    this.getMotorTorque();
    this.getLiftingTorque();
    this.getScrewSpeed();
  }
  getMotorTorque() {
    this.data.power.motor_power = this.data.config.motors.find(
      (g) => g.id === this.data.params.motor_id
    )?.power_kW;
    this.data.power.motor_rpm = this.data.config.motors.find(
      (g) => g.id === this.data.params.motor_id
    )?.max_speed_rpm;
    this.data.power.motor_torque = 9550 * this.data.power.motor_power / this.data.power.motor_rpm;
  }
  getLiftingTorque() {
    this.data.power.lifting_torque = this.data.power.motor_torque * this.data.config.gearboxes.find(
      (g) => g.id === this.data.params.gearbox_id
    )?.gear_ratio;
  }
  getScrewSpeed() {
    this.data.power.gearbox_ratio = this.data.config.gearboxes.find(
      (g) => g.id === this.data.params.gearbox_id
    )?.gear_ratio;
    this.data.power.screw_rpm = this.data.power.motor_rpm / this.data.power.gearbox_ratio;
    this.data.power.vertical_speed = this.data.power.screw_rpm * this.data.config.screw_lead / 1e3;
    let total_travel_length = (this.data.props.extendedHeight - this.data.props.nestedHeight) / 1e3;
    this.data.power.time_to_extend_seconds = 1.15 * 60 * total_travel_length / this.data.power.vertical_speed;
  }
  getMastMass() {
    let lifted_mass = 0;
    let total_mass = 0;
    let breakdown = {
      all_tubes_mass: 0,
      fixed_top_flange_mass: 0,
      ice_breaker_mass: 0,
      screw_nut_frame_mass: 0,
      lower_key_guides_mass: 0,
      upper_key_guides_mass: 0,
      euler_fixer_mass: 0,
      payload_interface_mass: 0,
      lock_stopper_mass: 0,
      lock_key_mass: 0,
      lock_mechanism_mass: 0,
      welded_bottom_structure_mass: 0,
      motor_mass: 0,
      gearbox_mass: 0
    };
    this.data.params.tubes.forEach((tube, i) => {
      if (tube.state_name === "bottom_section") {
        total_mass += tube.mass;
      } else {
        lifted_mass += tube.mass;
        total_mass += tube.mass;
      }
      breakdown.all_tubes_mass += tube.mass;
      if (tube.state_name === "bottom_section") {
        total_mass += this.data.config.weights.fixed_top_flange["C" + tube.no];
      } else {
        lifted_mass += this.data.config.weights.fixed_top_flange["C" + tube.no];
        total_mass += this.data.config.weights.fixed_top_flange["C" + tube.no];
      }
      breakdown.fixed_top_flange_mass += this.data.config.weights.fixed_top_flange["C" + tube.no];
      if (tube.state_name !== "top_section" && tube.state_name !== "bottom_section") {
        total_mass += this.data.config.weights.ice_breaker["C" + tube.no];
        lifted_mass += this.data.config.weights.ice_breaker["C" + tube.no];
      }
      breakdown.ice_breaker_mass += this.data.config.weights.ice_breaker["C" + tube.no];
      if (tube.state_name === "bottom_section") {
        total_mass += this.data.config.weights.ice_breaker["C" + tube.no];
      }
      if (tube.state_name !== "bottom_section") {
        total_mass += this.data.config.weights.screw_nut_frame["C" + tube.no].assy;
        lifted_mass += this.data.config.weights.screw_nut_frame["C" + tube.no].assy;
      }
      if (tube.state_name !== "bottom_section") {
        total_mass += this.data.config.weights.lower_key_guides_each * tube.channel_number;
        lifted_mass += this.data.config.weights.lower_key_guides_each * tube.channel_number;
        breakdown.lower_key_guides_mass += this.data.config.weights.lower_key_guides_each * tube.channel_number;
      } else {
        total_mass += this.data.config.weights.lower_key_guides_each * tube.channel_number;
      }
      if (tube.state_name !== "top_section") {
        total_mass += this.data.config.weights.upper_key_guides_each * tube.channel_number;
        lifted_mass += this.data.config.weights.upper_key_guides_each * tube.channel_number;
        breakdown.upper_key_guides_mass += this.data.config.weights.upper_key_guides_each * tube.channel_number;
      } else {
        total_mass += this.data.config.weights.upper_key_guides_each * tube.channel_number;
      }
      if (tube.state_name === "top_section") {
        total_mass += this.data.config.weights.euler_fixer["C" + tube.no];
        lifted_mass += this.data.config.weights.euler_fixer["C" + tube.no];
        breakdown.euler_fixer_mass += this.data.config.weights.euler_fixer["C" + tube.no];
      }
      if (tube.state_name === "top_section") {
        total_mass += this.data.config.weights.payload_interface["C" + tube.no];
        lifted_mass += this.data.config.weights.payload_interface["C" + tube.no];
        breakdown.payload_interface_mass += this.data.config.weights.payload_interface["C" + tube.no];
      }
      if (tube.state_name !== "bottom_section") {
        total_mass += this.data.config.weights.lock_stopper_each * 2;
        lifted_mass += this.data.config.weights.lock_stopper_each * 2;
        breakdown.lock_stopper_mass += this.data.config.weights.lock_stopper_each * 2;
      }
      if (tube.state_name !== "bottom_section") {
        total_mass += this.data.config.weights.lock_key_each * 2;
        lifted_mass += this.data.config.weights.lock_key_each * 2;
        breakdown.lock_key_mass += this.data.config.weights.lock_key_each * 2;
      }
      if (tube.state_name !== "bottom_section") {
        total_mass += this.data.config.weights.lock_mechanism_each * 2;
        lifted_mass += this.data.config.weights.lock_mechanism_each * 2;
        breakdown.lock_mechanism_mass += this.data.config.weights.lock_mechanism_each * 2;
      }
      if (tube.state_name === "bottom_section") {
        total_mass += this.data.config.weights.welded_bottom_structure["C" + tube.no];
        total_mass += this.data.config.motors.find(
          (g) => g.id === this.data.params.motor_id
        )?.mass_kg;
        total_mass += this.data.config.gearboxes.find(
          (g) => g.id === this.data.params.gearbox_id
        )?.mass_kg;
        breakdown.motor_mass += this.data.config.motors.find(
          (g) => g.id === this.data.params.motor_id
        )?.mass_kg;
        breakdown.gearbox_mass += this.data.config.gearboxes.find(
          (g) => g.id === this.data.params.gearbox_id
        )?.mass_kg;
      }
    });
    this.data.weights.lifted_mass = lifted_mass;
    this.data.weights.total_mast_mass = total_mass;
    this.data.weights.breakdown = breakdown;
  }
}
class SvgDraw {
  constructor(data) {
    this.data = data;
    this.drawType = null;
    this.svgDiv = null;
    this.svgWidth = null;
    this.svgHeight = null;
    this.scale = null;
    this.vcline_x = null;
    this.vcline_info = null;
    this.force_line_scale = 250 / this.data.props.payload.wind_load;
  }
  svgDraw(drawType) {
    this.drawType = drawType;
    this.svgDiv = document.getElementById("div" + drawType);
    this.setSvgParams();
    switch (drawType) {
      case "Loads":
        this.svgDrawLoads();
        break;
      default:
      case "Extended":
        this.svgDrawExtended();
        break;
      case "Nested":
        this.svgDrawNested();
        break;
    }
  }
  svgDrawLoads() {
    this.addSvgElement();
    this.drawCoordinateAxis();
    this.drawTubes("Extended", true);
    this.drawGuyings();
    this.drawPayload();
    this.drawVehicleAdapter();
    this.drawPayloadAdapter();
  }
  svgDrawExtended() {
    this.addSvgElement();
    this.drawCoordinateAxis();
    this.drawTubes("Extended", false);
    this.drawPayloadAdapter();
    this.drawGuyings();
    this.drawVehicleAdapter();
  }
  svgDrawNested() {
    this.addSvgElement();
    this.drawCoordinateAxis();
    this.drawTubes("Nested", false);
    this.drawPayloadAdapter("Nested");
    this.drawVehicleAdapter();
  }
  setSvgParams() {
    this.MX = 20;
    this.MY = 20;
    let wDiv = document.getElementById("fixedWidth");
    this.svgWidth = wDiv.clientWidth - window.getComputedStyle(this.svgDiv).paddingLeft.replace("px", "") - window.getComputedStyle(this.svgDiv).paddingRight.replace("px", "");
    this.svgHeight = 16 * this.svgWidth / 19;
    this.vcline_x = 0.5 * this.svgWidth;
    this.vcline_info = 0.7 * this.svgWidth;
    let totalHeight;
    switch (this.drawType) {
      case "Loads":
        totalHeight = 1e3 * Math.sqrt(this.data.params.sail_area) + this.data.props.extendedHeight;
        break;
      default:
      case "Extended":
        totalHeight = this.data.props.extendedHeight;
        break;
      case "Nested":
        totalHeight = this.data.props.nestedHeight;
        break;
    }
    this.scale = (this.svgHeight - 2 * this.MY) / totalHeight;
  }
  addSvgElement() {
    if (this.svgDiv.querySelector("svg")) {
      this.svgDiv.innerHTML = "";
    }
    this.svg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    this.svg.setAttribute("id", "svg-" + this.drawType);
    this.svg.setAttribute("width", this.svgWidth);
    this.svg.setAttribute("height", this.svgHeight);
    this.svg.setAttribute(
      "viewBox",
      `0 0 ${this.svgWidth} ${this.svgHeight}`
    );
    this.svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    this.svg.setAttribute("class", "mast-svg");
    this.svgDiv.appendChild(this.svg);
    this.g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  }
  drawCoordinateAxis() {
    this.drawLine(
      this.MX,
      this.svgHeight - this.MY,
      this.svgWidth - this.MX,
      this.svgHeight - this.MY,
      "ground"
    );
    this.drawLine(
      this.vcline_x,
      this.MY,
      this.vcline_x,
      this.svgHeight - this.MY,
      "centerline"
    );
    this.drawRectangle(
      this.MX,
      this.svgHeight - this.MY,
      this.svgWidth - 2 * this.MX,
      this.MY / 2,
      "side_adapter"
    );
  }
  drawTubes(state2 = "Extended", showForces = false) {
    let x, y, yt, yb, w, h;
    let zt, zb;
    let start_x;
    let force_line_strength;
    this.data.params.tubes.forEach((tube, i) => {
      state2 === "Nested" ? zt = tube.nested_zt : zt = tube.extended_zt;
      state2 === "Nested" ? zb = tube.nested_zb : zb = tube.extended_zb;
      x = this.vcline_x - this.scale * tube.od / 2;
      yt = this.svgHeight - this.MY - this.scale * zt;
      yb = this.svgHeight - this.MY - this.scale * zb;
      w = this.scale * tube.od;
      h = this.scale * this.data.params.tube_length;
      this.drawRectangle(x, yt, w, h, "tube");
      start_x = this.vcline_x + this.scale * tube.od * 0.8;
      this.drawLine(start_x, yt, this.vcline_info, yt, "dimension");
      this.drawText(this.vcline_info, yt - 4, zt.toFixed(0), "end");
      this.drawLine(start_x, yb, this.vcline_info, yb, "dimension");
      this.drawText(this.vcline_info, yb - 4, zb.toFixed(0), "end");
      if (showForces) {
        y = this.svgHeight - this.MY - this.scale * tube.wind_load_z;
        this.drawLine(start_x, y, this.vcline_info, y, "dimension");
        this.drawText(
          this.vcline_info,
          y - 4,
          tube.wind_load_z.toFixed(0),
          "end"
        );
        force_line_strength = this.force_line_scale * tube.wind_load;
        start_x = this.vcline_x - force_line_strength;
        this.drawLine(start_x, y, this.vcline_x, y, "arrow-line");
        this.drawText(
          start_x,
          y - 4,
          tube.wind_load.toFixed(0) + " N",
          "start"
        );
        this.drawArrow(this.vcline_x, y);
      }
    });
  }
  drawPayloadAdapter(state2 = "Extended") {
    let x, y, w, h;
    const payload_plate_w = 1.2 * this.scale * this.data.params.tubes[0].od;
    let stateTxt = state2 === "Nested" ? "Nested" : "Extended";
    let z = state2 === "Nested" ? this.data.props.nestedHeight : this.data.props.extendedHeight;
    x = this.vcline_x - payload_plate_w;
    y = this.svgHeight - this.MY - this.scale * z;
    w = 2 * payload_plate_w;
    h = this.scale * this.data.params.payload_adapter_height;
    this.drawRectangle(x, y, w, h, "tube");
    x = x - 20;
    let x2 = x - 100;
    this.drawLine(x, y, x2, y, "guying");
    this.drawText(x2, y - 5, z.toFixed(0));
    this.drawText(x2, y + 15, `${stateTxt} Height`, "start");
  }
  drawPayload() {
    let payload_dim = 1e3 * Math.sqrt(this.data.params.sail_area);
    let force_line_strength = this.force_line_scale * this.data.props.payload.wind_load;
    let x = this.vcline_x - this.scale * payload_dim / 2;
    let y = this.svgHeight - this.MY - this.scale * this.data.props.extendedHeight - this.scale * payload_dim;
    let w = this.scale * payload_dim;
    let h = this.scale * payload_dim;
    this.drawRectangle(x, y, w, h, "payload");
    y = this.svgHeight - this.MY - this.scale * this.data.props.payload.wind_load_z;
    let cg_x = this.vcline_x + this.scale * this.data.params.x_offset;
    this.drawLine(cg_x - force_line_strength, y, cg_x, y, "arrow-line");
    this.drawText(
      cg_x - force_line_strength,
      y - 4,
      this.data.props.payload.wind_load.toFixed(0) + " N",
      "start"
    );
    this.drawArrow(cg_x, y);
    this.drawLine(1.1 * this.vcline_x, y, this.vcline_info, y, "dimension");
    this.drawText(
      this.vcline_info,
      y - 4,
      this.data.props.payload.wind_load_z.toFixed(0),
      "end"
    );
    this.drawCircle(cg_x, y, 6, "cg");
    this.drawLine(cg_x, y, cg_x, 0, "arrow-line");
    this.drawArrow(cg_x, y, "Down");
    this.drawText(
      cg_x + 4,
      10,
      (this.data.params.payload_mass * 9.81).toFixed(0) + " N",
      "start"
    );
  }
  drawVehicleAdapter() {
    let side_support_height = this.data.params.tube_length * 0.1;
    let side_support_width = 1.3 * this.data.params.tubes.at(-1).od;
    let x = this.vcline_x - this.scale * side_support_width * 0.5;
    let y = this.svgHeight - this.MY - this.scale * (this.data.props.side_adapter_z + 0.5 * side_support_height);
    let w = this.scale * side_support_width * 1.5;
    let h = this.scale * side_support_height;
    this.drawRectangle(x, y, w, h, "side_adapter");
    this.drawCircle(
      this.vcline_x,
      this.svgHeight - this.MY - this.data.props.side_adapter_z * this.scale,
      2,
      "side"
    );
    x += w;
    this.drawRectangle(
      x,
      y,
      0.5 * w,
      this.scale * (this.data.props.side_adapter_z + 0.5 * side_support_height),
      "side_adapter"
    );
    if (this.drawType === "Loads") {
      y = this.svgHeight - this.MY - this.data.props.side_adapter_z * this.scale;
      this.drawLine(
        this.vcline_x,
        y,
        this.vcline_x + 0.5 * side_support_height,
        y,
        "reaction"
      );
      this.drawArrow(this.vcline_x, y, "Left");
      this.drawText(
        this.vcline_x + 0.5 * side_support_height,
        y - 3,
        this.data.props.reaction_force_at_side_adapter.toFixed(0) + " N",
        "end"
      );
      let ratio = this.data.props.reaction_force_at_bottom_interface / this.data.props.reaction_force_at_side_adapter;
      y = this.svgHeight - this.MY;
      let line_length = 0.5 * ratio * side_support_height;
      this.drawLine(this.vcline_x, y, this.vcline_x - line_length, y, "reaction");
      this.drawArrow(this.vcline_x, y, "Right");
      this.drawText(this.vcline_x - line_length, y - 3, this.data.props.reaction_force_at_bottom_interface.toFixed(0) + " N", "start");
    }
  }
  drawGuyings() {
    let ax1, ay1, ax2, ay2;
    this.data.params.tubes.forEach((tube, i) => {
      ax1 = this.MX;
      ay1 = this.svgHeight - this.MY;
      ax2 = this.vcline_x - this.scale * tube.od * 0.5;
      ay2 = this.svgHeight - this.MY - this.scale * tube.extended_zt;
      this.drawLine(ax1, ay1, ax2, ay2, "guying");
    });
  }
  drawLine(x1, y1, x2, y2, type) {
    let line = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    switch (type) {
      case "ground":
        line.setAttribute("stroke", "#5f6b08");
        line.setAttribute("stroke-width", "0.3");
        break;
      case "centerline":
        line.setAttribute("stroke", "#1226c1");
        line.setAttribute("stroke-width", "1");
        break;
      case "dimension":
        line.setAttribute("stroke", "#1226c1");
        line.setAttribute("stroke-width", "0.4");
        break;
      case "arrow-line":
        line.setAttribute("stroke", "#d81e5b");
        line.setAttribute("stroke-width", "0.4");
        break;
      case "guying":
        line.setAttribute("stroke", "grey");
        line.setAttribute("stroke-width", "1");
        break;
      case "reaction":
        line.setAttribute("stroke", "#70163C");
        line.setAttribute("stroke-width", "2");
        break;
      default:
        line.setAttribute("stroke", "blue");
        line.setAttribute("stroke-width", "2");
        break;
    }
    this.svg.appendChild(line);
  }
  drawArrow(x, y, direction = "Right") {
    let arrow_height = 5;
    let arrow_width = 20;
    let x1 = x - arrow_width;
    let y1 = y - arrow_height;
    let x2 = x1 + arrow_width;
    let y2 = y;
    let x3 = x1;
    let y3 = y1 + 2 * arrow_height;
    let arr = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    arr.setAttribute("fill", "#d81e5b");
    arr.setAttribute("stroke-width", "1");
    if (direction === "Down") {
      x1 = x;
      x2 = x + arrow_height;
      x3 = x - arrow_height;
      y1 = y;
      y2 = y - arrow_width;
      y3 = y - arrow_width;
    }
    if (direction === "Left") {
      x1 = x;
      x2 = x + 1.4 * arrow_width;
      x3 = x + 1.4 * arrow_width;
      y1 = y;
      y2 = y + 1.4 * arrow_height;
      y3 = y - 1.4 * arrow_height;
      arr.setAttribute("fill", "#70163C");
      arr.setAttribute("stroke-width", "2");
    }
    arr.setAttribute("d", `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`);
    this.svg.appendChild(arr);
  }
  drawText(x, y, text_content, align = "start") {
    let text = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", align);
    text.setAttribute("font-size", "12");
    text.textContent = text_content;
    this.svg.appendChild(text);
  }
  drawRectangle(x, y, width, height, type) {
    let rect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    switch (type) {
      case "tube":
        rect.setAttribute("stroke", "black");
        rect.setAttribute("fill", "#667a8f");
        rect.setAttribute("fill-opacity", "0.3");
        rect.setAttribute("stroke-width", "1");
        break;
      case "payload":
        rect.setAttribute("fill", "#86a1c0");
        rect.setAttribute("fill-opacity", "0.6");
        break;
      case "ground":
        rect.setAttribute("stroke", "#5f6b08");
        rect.setAttribute("fill", "#302804");
        rect.setAttribute("fill-opacity", "0.6");
        rect.setAttribute("stroke-width", ".1");
        break;
      case "side_adapter":
        rect.setAttribute("fill", "#5f6b08");
        rect.setAttribute("fill-opacity", "0.3");
        break;
      default:
        rect.setAttribute("stroke", "black");
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke-width", "1");
        break;
    }
    this.svg.appendChild(rect);
  }
  drawCircle(x, y, r, type) {
    let c = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);
    c.setAttribute("stroke", "black");
    c.setAttribute("fill", "none");
    c.setAttribute("stroke-width", "1");
    this.svg.appendChild(c);
  }
}
class MastDeflection {
  constructor(data) {
    this.data = data;
  }
  setAllowedTipDeflection() {
    this.data.props.allowed_tip_deflection_mm = 0.01 * this.data.params.tip_deflection_percentage * this.data.props.extendedHeight / 100;
  }
  run() {
    this.data.props.mei_data = {};
    this.data.props.mei_data2 = {};
    this.setAllowedTipDeflection();
    this.findBeamMoments();
    this.findSideReaction();
  }
  findForcesMomentsAtControlPoints() {
    this.data.control_points = {
      // Top of the mast
      [this.data.props.extendedHeight]: {
        "ext_force": -this.data.props.payload.wind_load,
        "ext_moment": this.data.props.payload.total_tip_moment_Nm,
        "int_reaction": 0,
        "int_moment": 0
      }
    };
    this.data.params.tubes.forEach((tube, i) => {
      this.data.control_points[tube.wind_load_z] = {
        "ext_force": -tube.wind_load,
        "ext_moment": 0,
        "int_reaction": 0,
        "int_moment": 0
      };
    });
    this.data.control_points[0] = {
      "ext_force": 0,
      "ext_moment": 0,
      "int_reaction": 0,
      "int_moment": 0
    };
    this.data.control_points[this.data.props.side_adapter_z] = {
      "ext_force": 0,
      "ext_moment": 0,
      "int_reaction": 0,
      "int_moment": 0
    };
    this.data.params.tubes.forEach((tube, i) => {
      if (i > 0) {
        this.data.control_points[tube.extended_zt] = {
          "ext_force": 0,
          "ext_moment": 0,
          "int_reaction": 0,
          "int_moment": 0
        };
      }
    });
  }
  findForcesMomentsAtControlPoints2() {
    this.data.control_points2 = structuredClone(this.data.control_points);
    let root_moment = this.data.props.reaction_force_at_side_adapter * this.data.props.side_adapter_z / 1e3;
    this.data.control_points2[0].int_moment += root_moment;
    let additional_moment_at_wind_load_z = this.data.props.reaction_force_at_side_adapter * (this.data.props.side_adapter_z - this.data.params.tubes.at(-1).wind_load_z) / 1e3;
    this.data.control_points2[this.data.params.tubes.at(-1).wind_load_z].int_moment += additional_moment_at_wind_load_z;
  }
  findBeamMoments() {
    this.calculateMastTopMoments();
    this.findForcesMomentsAtControlPoints();
    let all_control_point_heights = Object.keys(this.data.control_points).map(Number);
    Object.entries(this.data.control_points).forEach(([z, point]) => {
      let root_moment = point.ext_force * z / 1e3;
      all_control_point_heights.forEach((height) => {
        let moment_at_point = Math.abs(point.ext_force) * height / 1e3 + root_moment;
        if (moment_at_point > 0) {
          moment_at_point = 0;
        }
        this.data.control_points[height].int_moment += moment_at_point;
      });
    });
    all_control_point_heights.forEach((height) => {
      this.data.control_points[height].int_moment += this.data.props.payload.total_tip_moment_Nm;
    });
    this.data.sections = [];
    this.data.params.tubes.forEach((tube, i) => {
      this.data.sections[i] = {};
      all_control_point_heights.forEach((height) => {
        let lower_tube_extended_zt = this.data.params.tubes[i + 1]?.extended_zt || 0;
        if (height <= tube.extended_zt && height >= lower_tube_extended_zt) {
          const controlPoint = { ...this.data.control_points[height] };
          this.data.sections[i][height] = controlPoint;
          this.data.sections[i][height].EI_Nm2 = tube.EI_Nm2;
          this.data.sections[i][height].M_EI = controlPoint.int_moment / tube.EI_Nm2;
        }
      });
      if (i === 0) {
        this.data.sections[i][this.data.props.extendedHeight] = this.data.control_points[this.data.props.extendedHeight];
        this.data.sections[i][this.data.props.extendedHeight].EI_Nm2 = tube.EI_Nm2;
        this.data.sections[i][this.data.props.extendedHeight].M_EI = this.data.sections[i][this.data.props.extendedHeight].int_moment / tube.EI_Nm2;
      }
      if (tube.no === this.data.params.tubes.at(-1).no) {
        this.data.sections[i][0] = this.data.control_points[0];
        this.data.sections[i][0].EI_Nm2 = tube.EI_Nm2;
        this.data.sections[i][0].M_EI = this.data.sections[i][0].int_moment / tube.EI_Nm2;
      }
    });
    this.findAllDeflections(false);
    return true;
  }
  findBeamMoments2() {
    let all_control_point_heights = Object.keys(this.data.control_points2).map(Number);
    this.data.sections2 = [];
    this.data.params.tubes.forEach((tube, i) => {
      this.data.sections2[i] = {};
      all_control_point_heights.forEach((height) => {
        let lower_tube_extended_zt = this.data.params.tubes[i + 1]?.extended_zt || 0;
        if (height <= tube.extended_zt && height >= lower_tube_extended_zt) {
          const controlPoint = { ...this.data.control_points2[height] };
          this.data.sections2[i][height] = controlPoint;
          this.data.sections2[i][height].EI_Nm2 = tube.EI_Nm2;
          this.data.sections2[i][height].M_EI = controlPoint.int_moment / tube.EI_Nm2;
        }
      });
      if (i === 0) {
        this.data.sections2[i][this.data.props.extendedHeight] = this.data.control_points2[this.data.props.extendedHeight];
        this.data.sections2[i][this.data.props.extendedHeight].EI_Nm2 = tube.EI_Nm2;
        this.data.sections2[i][this.data.props.extendedHeight].M_EI = this.data.sections2[i][this.data.props.extendedHeight].int_moment / tube.EI_Nm2;
      }
      if (tube.no === this.data.params.tubes.at(-1).no) {
        this.data.sections2[i][0] = this.data.control_points2[0];
        this.data.sections2[i][0].EI_Nm2 = tube.EI_Nm2;
        this.data.sections2[i][0].M_EI = this.data.sections2[i][0].int_moment / tube.EI_Nm2;
      }
    });
    this.findAllDeflections(true);
    return true;
  }
  calculateMastTopMoments() {
    this.data.props.payload.tip_moment_due_z_offset_Nm = -(this.data.props.payload.wind_load * this.data.params.z_offset) / 1e3;
    this.data.props.payload.tip_moment_due_x_offset_Nm = -(9.81 * this.data.params.payload_mass * this.data.params.x_offset) / 1e3;
    this.data.props.payload.tip_moment_due_deflection_Nm = -(9.81 * (this.data.params.payload_mass + 0.2 * this.data.weights.lifted_mass) * this.data.props.allowed_tip_deflection_mm) / 1e3;
    this.data.props.payload.total_tip_moment_Nm = this.data.props.payload.tip_moment_due_z_offset_Nm + this.data.props.payload.tip_moment_due_x_offset_Nm + this.data.props.payload.tip_moment_due_deflection_Nm;
  }
  getMomentAreaCG(section) {
    let delta_z = Math.abs(section.z_top - section.z_bottom);
    let area1 = Math.abs(delta_z * section.m_ei_top);
    let area2 = Math.abs(
      0.5 * delta_z * (section.m_ei_bottom - section.m_ei_top)
    );
    if (section.m_ei_top >= section.m_ei_bottom) {
      return (0.5 * delta_z * area1 + delta_z * area2 / 3) / (area1 + area2);
    }
    if (section.m_ei_bottom > section.m_ei_top) {
      return (0.5 * delta_z * area1 + 2 * delta_z * area2 / 3) / (area1 + area2);
    }
    alert("Something fishy!");
  }
  findAllDeflections(is_with_side_adapter = false) {
    let control_points, sections, deflection_data = {};
    if (is_with_side_adapter) {
      control_points = structuredClone(this.data.control_points2);
      sections = structuredClone(this.data.sections2);
      let inflection_z = Object.values(sections).at(-1)[0].int_moment * this.data.params.tubes.at(-1).wind_load_z / (Object.values(sections).at(-1)[0].int_moment + Math.abs(Object.values(sections).at(-1)[this.data.params.tubes.at(-1).wind_load_z].int_moment));
      control_points[inflection_z.toFixed(0)] = {
        ext_force: 0,
        ext_moment: 0,
        int_reaction: 0,
        int_moment: 0,
        EI_Nm2: this.data.params.tubes.at(-1).EI_Nm2,
        M_EI: 0
      };
      sections[Object.keys(sections).length - 1][inflection_z.toFixed(0)] = {
        ext_force: 0,
        ext_moment: 0,
        int_reaction: 0,
        int_moment: 0,
        EI_Nm2: this.data.params.tubes.at(-1).EI_Nm2,
        M_EI: 0
      };
    } else {
      control_points = structuredClone(this.data.control_points);
      sections = structuredClone(this.data.sections);
    }
    let all_control_point_heights = Object.keys(control_points).map(Number);
    const pairs = all_control_point_heights.slice(0, -1).map((val, index2) => {
      return [val, all_control_point_heights[index2 + 1]];
    });
    pairs.forEach((pair, key) => {
      let z_start = pair[0];
      let z_end = pair[1];
      sections.forEach((section, i) => {
        if (Object.keys(section).map(Number).includes(z_start) && Object.keys(section).map(Number).includes(z_end)) {
          let mei_start = section[z_start].M_EI;
          let mei_end = section[z_end].M_EI;
          let mei_area = 0.5 * (mei_start + mei_end) * (z_end - z_start) / 1e3;
          let cg_rectangle, cg_triangle, xbar_z, area_rectangle, area_triangle, area_total;
          cg_rectangle = z_start + (z_end - z_start) / 2;
          if (mei_start <= 0 && mei_end <= 0) {
            if (mei_start < mei_end) {
              cg_triangle = z_start + 1 * (z_end - z_start) / 3;
              area_rectangle = mei_end * (z_end - z_start) / 1e3;
              area_triangle = 0.5 * (mei_start - mei_end) * (z_end - z_start) / 1e3;
            }
            if (mei_start > mei_end) {
              cg_triangle = z_start + 2 * (z_end - z_start) / 3;
              area_rectangle = mei_start * (z_end - z_start) / 1e3;
              area_triangle = 0.5 * (mei_end - mei_start) * (z_end - z_start) / 1e3;
            }
          }
          if (mei_start >= 0 && mei_end >= 0) {
            if (mei_start > mei_end) {
              cg_triangle = z_start + 1 * (z_end - z_start) / 3;
              if (mei_end == 0 || mei_start == 0) {
                area_rectangle = 0;
              } else {
                area_rectangle = mei_start * (z_end - z_start) / 1e3;
              }
              area_triangle = 0.5 * (mei_start - mei_end) * (z_end - z_start) / 1e3;
            }
            if (mei_start < mei_end) {
              cg_triangle = z_start + 2 * (z_end - z_start) / 3;
              area_rectangle = mei_end * (z_end - z_start) / 1e3;
              area_triangle = 0.5 * (mei_start - mei_end) * (z_end - z_start) / 1e3;
            }
          }
          area_total = area_rectangle + area_triangle;
          xbar_z = (area_rectangle * cg_rectangle + area_triangle * cg_triangle) / area_total;
          let ozellik = {
            mei_area,
            mei_start,
            mei_end,
            z_start,
            z_end,
            xbar_z,
            mei_area_rectangle: area_rectangle,
            mei_area_triangle: area_triangle
          };
          if (is_with_side_adapter) {
            this.data.props.mei_data2[key] = ozellik;
          } else {
            this.data.props.mei_data[key] = ozellik;
          }
        }
      });
    });
    Object.keys(control_points).forEach((key) => {
      deflection_data[parseFloat(key)] = this.findDeflectionAtControlPoint(parseFloat(key), is_with_side_adapter);
    });
    if (is_with_side_adapter) {
      this.data.control_points2 = control_points;
      this.data.sections2 = sections;
      this.data.deflection_data2 = deflection_data;
    } else {
      this.data.control_points = control_points;
      this.data.sections = sections;
      this.data.deflection_data = deflection_data;
    }
    return true;
  }
  findDeflectionAtControlPoint(z, is_with_side_adapter = false) {
    let deflection = 0, deflection_value;
    Object.values(is_with_side_adapter ? this.data.props.mei_data2 : this.data.props.mei_data).forEach((section) => {
      if (section.z_end <= z) {
        deflection_value = (z - section.xbar_z) * section.mei_area;
        deflection += deflection_value;
        section.MEI_area_arm = z - section.xbar_z;
        section.deflection_increment = deflection_value;
        section.deflection_total = deflection;
      }
    });
    return deflection.toFixed(1);
  }
  findSideReaction() {
    let side_deflection = this.data.deflection_data[this.data.props.side_adapter_z] / 1e3;
    let length = this.data.props.side_adapter_z;
    let ei = this.data.beam.at(-1).ei;
    let side_reaction = side_deflection * 3 * ei / Math.pow(length / 1e3, 3);
    this.data.props.reaction_force_at_side_adapter = -side_reaction;
    let total_external_force = 0;
    Object.values(this.data.sections).forEach((section) => {
      Object.values(section).forEach((subSection) => {
        total_external_force += subSection.ext_force;
      });
    });
    this.data.props.reaction_force_at_bottom_interface = this.data.props.reaction_force_at_side_adapter + total_external_force;
    this.repeatCalculationfWithSideReaction();
  }
  repeatCalculationfWithSideReaction() {
    this.findForcesMomentsAtControlPoints2();
    this.findBeamMoments2(true);
    return true;
  }
}
class MastVibration {
  constructor(options = {}) {
    this.tipMass = options.params.payload_mass || 0;
    this.modes = options.modes || 5;
    this.integrationSteps = options.integrationSteps || 500;
    this.sections = [];
    Object.entries(options.params.tubes).forEach(([key, tube]) => {
      const index2 = parseInt(key);
      this.sections[index2] = {};
      if (index2 === 0) {
        this.sections[index2].L = (options.extendedHeight - options.params.tubes[index2 + 1].extended_zt) / 1e3;
      } else if (index2 === options.params.tubes.length - 1) {
        this.sections[index2].L = tube.extended_zt / 1e3;
      } else {
        this.sections[index2].L = (tube.extended_zt - options.params.tubes[index2 + 1].extended_zt) / 1e3;
      }
      this.sections[index2].EI = tube.EI_Nm2;
      this.sections[index2].mu = tube.mass_per_m;
    });
    this.sections.reverse();
    this.totalLength = this.sections.reduce(
      (sum, s) => sum + s.L,
      0
    );
  }
  // Simpson numerical integration
  integrate(func, a, b) {
    const n = this.integrationSteps;
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      let x = a + i * h;
      let weight = i === 0 || i === n ? 1 : i % 2 ? 4 : 2;
      sum += weight * func(x);
    }
    return sum * h / 3;
  }
  // Ritz polynomial mode shape
  phi(i, x) {
    let r = x / this.totalLength;
    return Math.pow(r, i + 2);
  }
  // second derivative of mode shape
  d2phi(i, x) {
    let n = i + 2;
    let r = x / this.totalLength;
    return n * (n - 1) * Math.pow(r, n - 2) / (this.totalLength * this.totalLength);
  }
  buildMatrices(sections = this.sections) {
    let K = zeros(
      this.modes,
      this.modes
    );
    let M = zeros(
      this.modes,
      this.modes
    );
    let x0 = 0;
    for (const sec of sections) {
      let xa = x0;
      let xb = x0 + sec.L;
      for (let i = 0; i < this.modes; i++) {
        for (let j = 0; j < this.modes; j++) {
          let kij = this.integrate(
            (x) => sec.EI * this.d2phi(i, x) * this.d2phi(j, x),
            xa,
            xb
          );
          let mij = this.integrate(
            (x) => sec.mu * this.phi(i, x) * this.phi(j, x),
            xa,
            xb
          );
          K.set(
            [i, j],
            K.get([i, j]) + kij
          );
          M.set(
            [i, j],
            M.get([i, j]) + mij
          );
        }
      }
      x0 = xb;
    }
    for (let i = 0; i < this.modes; i++) {
      for (let j = 0; j < this.modes; j++) {
        let m = this.tipMass * this.phi(
          i,
          this.totalLength
        ) * this.phi(
          j,
          this.totalLength
        );
        M.set(
          [i, j],
          M.get([i, j]) + m
        );
      }
    }
    return { K, M };
  }
  calculateFrequencies(sections = this.sections) {
    let { K, M } = this.buildMatrices(sections);
    let A = multiply(
      inv(M),
      K
    );
    let eig = eigs(A);
    let eigenValues = Array.from(
      eig.values.valueOf()
    );
    let frequencies = eigenValues.map((v) => {
      if (v < 0 && Math.abs(v) < 1e-12)
        v = 0;
      return Math.sqrt(v) / (2 * Math.PI);
    }).sort((a, b) => a - b);
    frequencies = frequencies.filter(
      (f) => Number.isFinite(f)
    );
    return frequencies;
  }
  comparativeFrequencies() {
    let stiffSection = {
      L: this.totalLength,
      EI: this.sections[0].EI,
      mu: this.sections[0].mu
    };
    let frequenciesStrong = this.calculateFrequencies([stiffSection]);
    let weakSection = {
      L: this.totalLength,
      EI: this.sections.at(-1).EI,
      mu: this.sections.at(-1).mu
    };
    let frequenciesWeak = this.calculateFrequencies([weakSection]);
    return { strong: frequenciesStrong, weak: frequenciesWeak };
  }
  printResults() {
    let f = this.calculateFrequencies();
    console.log(
      `Mast length: ${this.totalLength.toFixed(3)} m`
    );
    console.log(
      `Tip mass: ${this.tipMass} kg`
    );
    console.log("\nResonance frequencies:");
    f.forEach((x, i) => {
      console.log(
        `Mode ${i + 1}: ${x.toFixed(3)} Hz`
      );
    });
    return f;
  }
}
class Configurator {
  constructor(params) {
    this.params = params;
    this.mast = {
      bom: []
    };
    this.drawType = null;
    this.svgDiv = null;
    this.svgWidth = null;
    this.svgHeight = null;
    this.scale = null;
    this.vcline_x = null;
    this.vcline_info = null;
  }
  run() {
    console.log("params", this.params);
    console.log("Config", config);
    this.setDependentProps();
    this.setMastTubes();
    this.setExtendedHeight();
    this.setNestedHeight();
    this.setZPositions();
    this.productNaming();
    this.setPayloadParameters();
    this.setMastSections();
    this.calculateWindLoadsOnTubes();
    this.massEstimation();
    this.getMastTipMoments();
    this.drivePowerEstimation();
    this.setBeamControlPoints();
    this.setBOM();
    this.runVibrationAnalysis();
    console.log("Configurator running : Mast", this.mast);
  }
  setDependentProps() {
    this.params.noOfTubes = this.params.end_tube_no - this.params.start_tube_no + 1;
    switch (this.params.material) {
      // Aluminum
      default:
        this.params.tube_material_density = config.alum_6063_density;
        this.params.tube_material_e = config.alum_6063_E;
        this.params.tube_yield_strength = config.alum_6063_yield_strength;
        this.params.tube_ultimate_strength = config.alum_6063_ultimate_strength;
        break;
    }
  }
  setMastTubes() {
    this.mast.tubes = [];
    config.tubes.forEach((tube) => {
      if (tube.no >= this.params.start_tube_no && tube.no <= this.params.end_tube_no) {
        tube.length = this.params.tube_length;
        tube.material_density = this.params.tube_material_density;
        tube.material_e = this.params.tube_material_e;
        tube.yield_strength = this.params.tube_yield_strength;
        tube.ultimate_strength = this.params.tube_ultimate_strength;
        tube.circularArea = this.setCircularArea(tube);
        tube.circularMomentOfInertia = this.setCircularMomentOfInertia(tube);
        tube.mass_per_m = this.calculateMass(tube, 1);
        tube.mass = this.calculateMass(
          tube,
          this.params.tube_length / 1e3
        );
        tube.moment_capacity_at_yield_strength_Nm = tube.yield_strength * tube.inertia_mm4 * 1e-12 / (tube.od / 2e3);
        tube.moment_capacity_at_ultimate_strength_Nm = tube.ultimate_strength * tube.inertia_mm4 * 1e-12 / (tube.od / 2e3);
        tube.shear_capacity_at_yield_strength_N = tube.yield_strength * tube.inertia_mm4 * tube.od / (this.findQ(tube) * 1e9);
        tube.shear_capacity_at_ultimate_strength_N = tube.ultimate_strength * tube.inertia_mm4 * tube.od / (this.findQ(tube) * 1e9);
        tube.EI_Nm2 = tube.material_e * tube.inertia_mm4 * 1e-12;
        tube.config_suffix = "00";
        if (tube.no === this.params.start_tube_no) {
          tube.config_suffix = "T";
        }
        if (this.params.noOfTubes > 3 && tube.no === this.params.start_tube_no + 1) {
          tube.config_suffix = "TM";
        }
        if (this.params.noOfTubes > 3 && tube.no === this.params.end_tube_no - 1) {
          tube.config_suffix = "BP";
        }
        if (this.params.noOfTubes === 3 && tube.no === this.params.end_tube_no - 1) {
          tube.config_suffix = "IB";
        }
        if (tube.no === this.params.end_tube_no) {
          tube.config_suffix = "B";
        }
        this.mast.tubes.push(tube);
      }
    });
  }
  setZPositions() {
    let ezb, ezt, nzb, nzt;
    this.mast.tubes.forEach((tube, index2) => {
      if (index2 === 0) {
        ezt = this.mast.extendedHeight - this.params.base_adapter_height;
        ezb = ezt - tube.length;
        nzt = this.mast.nestedHeight - this.params.base_adapter_height;
        nzb = nzt - tube.length;
      } else {
        ezt = ezb + this.params.overlap;
        ezb = ezt - tube.length;
        nzt = nzt - this.params.head_height;
        nzb = nzt - tube.length;
      }
      this.mast.tubes[index2].nested_zb = nzb;
      this.mast.tubes[index2].nested_zt = nzt;
      this.mast.tubes[index2].extended_zb = ezb;
      this.mast.tubes[index2].extended_zt = ezt;
    });
  }
  setCircularArea(tube) {
    return Math.PI * tube.od * tube.thk;
  }
  setCircularMomentOfInertia(tube) {
    return Math.PI * (tube.od ** 4 - tube.id ** 4) / 64;
  }
  calculateMass(tube, length) {
    return tube.area_mm2 * length * tube.material_density / 1e6;
  }
  findQ(tube) {
    let q = (Math.pow(tube.od / 2, 3) - Math.pow(tube.id / 2, 3)) / 6;
    return q;
  }
  setExtendedHeight() {
    this.mast.extendedHeight = this.params.noOfTubes * this.params.tube_length - (this.params.noOfTubes - 1) * this.params.overlap + this.params.payload_adapter_height + this.params.base_adapter_height;
  }
  setNestedHeight() {
    this.mast.nestedHeight = this.params.tube_length + (this.params.noOfTubes - 1) * this.params.head_height + this.params.payload_adapter_height + this.params.base_adapter_height;
  }
  setMastSections() {
    let new_index_no;
    this.mast.sections = [];
    this.mast.tubes.forEach((tube, index2) => {
      new_index_no = this.mast.tubes.length - index2 - 1;
      if (tube.config_suffix === "T") {
        this.mast.sections[new_index_no] = {
          section_no: new_index_no,
          tube_no: tube.no,
          config_suffix: tube.config_suffix,
          z_top: this.mast.extendedHeight,
          z_bottom: tube.extended_zb + this.params.overlap,
          wind_load: {
            z: tube.extended_zt - (tube.length - this.params.overlap) / 2,
            load: 0
            // TODO: Calculate wind load,
          },
          tip_load: {
            z: this.mast.extendedHeight,
            load: -this.mast.payload.wind_load
            // TODO: Calculate tip load,
          }
        };
      }
      if (tube.config_suffix === "B") {
        this.mast.sections[new_index_no] = {
          section_no: new_index_no,
          tube_no: tube.no,
          config_suffix: tube.config_suffix,
          z_top: tube.extended_zt,
          z_bottom: 0,
          wind_load: {
            z: tube.extended_zt / 2,
            load: 0
            // TODO: Calculate wind load,
          }
        };
      }
      if (["00", "TM", "BP", "IB"].includes(tube.config_suffix)) {
        this.mast.sections[new_index_no] = {
          section_no: new_index_no,
          tube_no: tube.no,
          config_suffix: tube.config_suffix,
          z_top: tube.extended_zt,
          z_bottom: tube.extended_zt - tube.length + this.params.overlap,
          wind_load: {
            z: tube.extended_zt - (tube.length - this.params.overlap) / 2,
            load: 0
            // TODO: Calculate wind load,
          }
        };
      }
    });
  }
  productNaming() {
    this.mast.product_code = Math.round(this.mast.extendedHeight / 1e3, 0) + this.params.mast_type + "-" + (this.mast.nestedHeight / 1e3).toFixed(1) + "-" + this.params.noOfTubes;
  }
  calculateWindLoadsOnTubes() {
    const terrain = config.terrain_category.find(
      (cat) => cat.no === this.params.terrain_category
    );
    let section_tube, exposed_length;
    this.mast.sections.forEach((section, i) => {
      section_tube = this.mast.tubes.find((tube) => tube.no === section.tube_no);
      exposed_length = section.z_top - section.z_bottom;
      this.mast.sections[i].reference_area = section_tube.od * exposed_length / 1e6;
      this.mast.sections[i].wind_exposed_length = exposed_length;
      this.mast.sections[i].Ze = section.z_top;
      this.mast.sections[i].roughness_length_Z0 = terrain.z0;
      this.mast.sections[i].terrain_factor_kr = 0.19 * Math.pow(terrain.z0 / 0.05, 0.07);
      this.mast.sections[i].max_height = Math.max(
        section.z_top / 1e3,
        terrain.zmin
      );
      this.mast.sections[i].roughness_factor_Cr_at_Ze = this.mast.sections[i].terrain_factor_kr * Math.log(this.mast.sections[i].max_height / terrain.z0);
      this.mast.sections[i].mean_wind_speed_Vm = this.mast.sections[i].roughness_factor_Cr_at_Ze * this.params.wind_speed / 3.6;
      this.mast.sections[i].turbulence_intensity_TI = 1 / (1 * Math.log(
        this.mast.sections[i].max_height / terrain.z0
      ));
      this.mast.sections[i].basic_velocity_pressure_q = 0.5 * config.air_density * Math.pow(this.params.wind_speed / 3.6, 2);
      this.mast.sections[i].peak_velocity_pressure_qp = (1 + 7 * this.mast.sections[i].turbulence_intensity_TI) * 0.5 * config.air_density * Math.pow(this.mast.sections[i].mean_wind_speed_Vm, 2);
      this.mast.sections[i].wind_velocity_Vp_at_qp = Math.sqrt(
        2 * this.mast.sections[i].peak_velocity_pressure_qp / config.air_density
      );
      this.mast.sections[i].reynolds_number_Re = this.mast.sections[i].wind_velocity_Vp_at_qp * section_tube.od / 1e3 / config.dynamic_viscosity_mu;
      this.mast.sections[i].structural_factor = 1;
      this.mast.sections[i].surface_roughness = 0.2;
      this.mast.sections[i].slenderness_ratio_l_b = section_tube.length / section_tube.od;
      if (section_tube.length / 1e3 <= 15) {
        this.mast.sections[i].effective_slenderness = Math.min(
          this.mast.sections[i].slenderness_ratio_l_b,
          70
        );
      } else {
        this.mast.sections[i].effective_slenderness = Math.min(
          0.7 * this.mast.sections[i].slenderness_ratio_l_b,
          70
        );
      }
      if (this.mast.sections[i].effective_slenderness <= 10) {
        this.mast.sections[i].end_effect_factor = 0.6023079 * Math.pow(
          this.mast.sections[i].effective_slenderness,
          0.0657553
        );
      } else {
        this.mast.sections[i].end_effect_factor = 0.698573 + 1977401e-9 * this.mast.sections[i].effective_slenderness + 8741341e-11 * Math.pow(
          this.mast.sections[i].effective_slenderness,
          2
        ) - 103591e-11 * Math.pow(
          this.mast.sections[i].effective_slenderness,
          3
        );
      }
      this.mast.sections[i].equivalent_roughness_k_b = this.mast.sections[i].surface_roughness / section_tube.od;
      let force_coefficent = 1.2 + 0.18 * Math.log10(
        10 * this.mast.sections[i].equivalent_roughness_k_b
      ) / (1 + 0.4 * Math.log10(
        this.mast.sections[i].reynolds_number_Re / 1e6
      ));
      if (this.mast.sections[i].reynolds_number_Re < 18e4) {
        return 1.2;
      } else if (this.mast.sections[i].reynolds_number_Re >= 185e3 && this.mast.sections[i].reynolds_number_Re < 4e5) {
        let temp_force_coefficient = 0.11 / Math.pow(
          this.mast.sections[i].reynolds_number_Re / 1e6,
          1.4
        );
        if (force_coefficent > temp_force_coefficient) {
          force_coefficent = force_coefficent;
        } else {
          force_coefficent = temp_coefficient;
        }
      }
      if (force_coefficent <= 0.4) {
        force_coefficent = 0.4;
      }
      this.mast.sections[i].force_coefficient_wo_end_effect = force_coefficent;
      this.mast.sections[i].force_coefficient = this.mast.sections[i].force_coefficient_wo_end_effect * this.mast.sections[i].end_effect_factor;
      this.mast.sections[i].wind_load.load = -this.mast.sections[i].structural_factor * this.mast.sections[i].force_coefficient * this.mast.sections[i].peak_velocity_pressure_qp * this.mast.sections[i].reference_area;
    });
  }
  getInternalLoads() {
    let root_shear_wo_side_adapter = 0;
    let root_moment_wo_side_adapter = 0;
    this.mast.sections.forEach((section) => {
      root_shear_wo_side_adapter += section.wind_load.load;
      root_moment_wo_side_adapter += -section.wind_load.load * section.wind_load.z / 1e3;
    });
    root_shear_wo_side_adapter += this.mast.sections.at(-1).tip_load.load;
    root_moment_wo_side_adapter += -this.mast.sections.at(-1).tip_load.load * this.mast.sections.at(-1).tip_load.z / 1e3;
    this.mast.sections[0].control_points[0].V_wo_adapter_left = -root_shear_wo_side_adapter;
    this.mast.sections[0].control_points[0].M_wo_adapter = this.mast.sections.at(-1).tip_load.moment_tip_total + root_moment_wo_side_adapter;
    this.mast.sections[0].control_points[0].V_wo_adapter_right = this.mast.sections[0].control_points[0].V_wo_adapter_left;
    this.mast.sections.forEach((section, sec_index) => {
      section.control_points.forEach((point, pnt_index) => {
        console.log("dddd", point.V_wo_adapter_left, pnt_index);
      });
    });
  }
  setPayloadParameters() {
    this.mast.payload = {
      wind_load_z: null,
      wind_load: null
    };
    this.mast.payload.wind_load_z = this.mast.extendedHeight + Math.sqrt(this.params.sail_area * 1e6) / 2;
    this.mast.payload.wind_load = 0.5 * config.air_density * config.drag_coefficient_Cd * Math.pow(this.params.wind_speed / 3.6, 2) * this.params.sail_area;
  }
  getMastTipMoments() {
    this.mast.sections.at(-1).tip_load.moment_z_offset = this.mast.payload.wind_load * this.params.z_offset / 1e3;
    this.mast.sections.at(-1).tip_load.moment_x_offset = 9.81 * this.params.payload_mass * this.params.x_offset / 1e3;
    this.mast.allowed_tip_deflection_mm = 0.01 * this.params.tip_deflection_percentage * this.mast.extendedHeight / 100;
    let deflection_weight = this.params.payload_mass + 0.2 * this.mast.mass.lifted;
    this.mast.sections.at(-1).tip_load.moment_due_deflection = 9.81 * deflection_weight * this.mast.allowed_tip_deflection_mm / 1e3;
    this.mast.sections.at(-1).tip_load.moment_tip_total = this.mast.sections.at(-1).tip_load.moment_z_offset + this.mast.sections.at(-1).tip_load.moment_x_offset + this.mast.sections.at(-1).tip_load.moment_due_deflection;
  }
  massEstimation() {
    switch (this.params.mast_type) {
      case "MTNX":
        this.massEstimationMTNX();
        break;
      case "MTWR":
        this.massEstimationMTWR();
        break;
    }
  }
  massEstimationMTNX() {
    this.mast.mass = {
      total: 0,
      lifted: 0
    };
    this.mast.tubes.forEach((tube, i) => {
      this.mast.mass.total += tube.mass;
      if (tube.config_suffix != "B") {
        this.mast.mass.lifted += tube.mass;
      }
      this.mast.mass.total += config.weights.fixed_top_flange["C" + tube.no];
      if (tube.config_suffix != "B") {
        this.mast.mass.lifted += config.weights.fixed_top_flange["C" + tube.no];
      }
      if (tube.config_suffix == "00") {
        this.mast.mass.total += config.weights.ice_breaker["C" + tube.no];
        this.mast.mass.lifted += config.weights.ice_breaker["C" + tube.no];
      }
      if (tube.config_suffix === "B") {
        this.mast.mass.total += config.weights.ice_breaker["C" + tube.no];
      }
      if (tube.config_suffix !== "B") {
        this.mast.mass.total += config.weights.screw_nut_frame["C" + tube.no].assy;
        this.mast.mass.lifted += config.weights.screw_nut_frame["C" + tube.no].assy;
      }
      this.mast.mass.total += config.weights.lower_key_guides_each * tube.channel_number;
      if (tube.config_suffix !== "B") {
        this.mast.mass.lifted += config.weights.lower_key_guides_each * tube.channel_number;
      }
      this.mast.mass.total += config.weights.upper_key_guides_each * tube.channel_number;
      if (tube.config_suffix !== "T") {
        this.mast.mass.lifted += config.weights.upper_key_guides_each * tube.channel_number;
      }
      if (tube.config_suffix === "T") {
        this.mast.mass.total += config.weights.euler_fixer["C" + tube.no];
        this.mast.mass.lifted += config.weights.euler_fixer["C" + tube.no];
      }
      if (tube.config_suffix === "T") {
        this.mast.mass.total += config.weights.payload_interface["C" + tube.no];
        this.mast.mass.lifted += config.weights.payload_interface["C" + tube.no];
      }
      if (tube.config_suffix !== "B") {
        this.mast.mass.total += config.weights.lock_stopper_each * 2;
        this.mast.mass.lifted += config.weights.lock_stopper_each * 2;
      }
      if (tube.config_suffix !== "B") {
        this.mast.mass.total += config.weights.lock_key_each * 2;
        this.mast.mass.lifted += config.weights.lock_key_each * 2;
      }
      if (tube.config_suffix !== "B") {
        this.mast.mass.total += config.weights.lock_mechanism_each * 2;
        this.mast.mass.lifted += config.weights.lock_mechanism_each * 2;
      }
      if (tube.config_suffix === "B") {
        this.mast.mass.total += config.weights.welded_bottom_structure["C" + tube.no];
        this.mast.mass.total += config.motors.find(
          (g) => g.id === this.params.motor_id
        )?.mass_kg;
        this.mast.mass.total += config.gearboxes.find(
          (g) => g.id === this.params.gearbox_id
        )?.mass_kg;
      }
    });
  }
  massEstimationMTWR() {
  }
  drivePowerEstimation() {
    let thread_angle = Math.atan(
      config.screw_lead / (Math.PI * config.screw_nominal_diameter)
    );
    let secant = 1 / Math.cos(thread_angle);
    this.mast.driveline = {
      total_load_to_lift: (this.params.payload_mass + this.mast.mass.lifted) * 9.81,
      thread_angle,
      // Thread angle in radians
      secant
    };
    this.mast.driveline.torque_required_to_extend_mast_Nm = 0.5 * this.mast.driveline.total_load_to_lift * config.screw_nominal_diameter * (config.screw_lead + Math.PI * config.screw_coefficient_of_friction * config.screw_nominal_diameter * secant) / (Math.PI * config.screw_nominal_diameter - config.screw_coefficient_of_friction * config.screw_lead * secant) / 1e3;
    this.mast.driveline.motor_power = config.motors.find(
      (g) => g.id === this.params.motor_id
    )?.power_kW;
    this.mast.driveline.motor_rpm = config.motors.find(
      (g) => g.id === this.params.motor_id
    )?.max_speed_rpm;
    this.mast.driveline.motor_torque = 9550 * this.mast.driveline.motor_power / this.mast.driveline.motor_rpm;
    this.mast.driveline.lifting_torque = this.mast.driveline.motor_torque * config.gearboxes.find(
      (g) => g.id === this.params.gearbox_id
    )?.gear_ratio;
    this.mast.driveline.gearbox_ratio = config.gearboxes.find(
      (g) => g.id === this.params.gearbox_id
    )?.gear_ratio;
    this.mast.driveline.screw_rpm = this.mast.driveline.motor_rpm / this.mast.driveline.gearbox_ratio;
    this.mast.driveline.vertical_speed = this.mast.driveline.screw_rpm * config.screw_lead / 1e3;
    this.mast.driveline.total_travel_length_m = (this.mast.extendedHeight - this.mast.nestedHeight) / 1e3;
    this.mast.driveline.time_to_extend_seconds = 1.15 * 60 * this.mast.driveline.total_travel_length_m / this.mast.driveline.vertical_speed;
  }
  setBeamControlPoints() {
    let reversed_tubes = [...this.mast.tubes].reverse();
    const addControlPoint = (zValue, index2) => {
      this.mast.sections[index2].control_points.push({
        z: zValue,
        EI: reversed_tubes[index2].EI_Nm2,
        V_wo_adapter_left: 0,
        V_wo_adapter_right: 0,
        V_w_adapter_left: 0,
        V_w_adapter_right: 0,
        M_wo_adapter: 0,
        M_w_adapter: 0,
        deflection_wo_adapter: 0,
        deflection_w_adapter: 0
      });
    };
    this.mast.sections.forEach((section, index2) => {
      this.mast.sections[index2].control_points = [];
      if (index2 === 0) {
        addControlPoint(section.z_bottom, index2);
        addControlPoint(section.wind_load.z, index2);
        addControlPoint(this.params.side_adapter_z, index2);
        addControlPoint(section.z_top, index2);
      }
      if (index2 > 0 && index2 < this.mast.sections.length - 1) {
        addControlPoint(section.z_bottom, index2);
        addControlPoint(section.wind_load.z, index2);
        addControlPoint(section.z_top, index2);
      }
      if (index2 === this.mast.sections.length - 1) {
        addControlPoint(section.z_bottom, index2);
        addControlPoint(section.wind_load.z, index2);
        addControlPoint(section.z_top, index2);
      }
    });
  }
  /*
  MAST VIBRATION ANALYSIS
  */
  runVibrationAnalysis() {
    const analyzer2 = new MastVibration$1({
      tubes: this.mast.tubes,
      tip_mass: this.params.payload_mass,
      extendedHeight: this.mast.extendedHeight,
      modes: 3,
      integrationSteps: 500
    });
    const frequencies = analyzer2.calculateFrequencies();
    const karsilastirma = analyzer2.comparativeFrequencies();
    this.mast.resonance_frequencies = [];
    frequencies.forEach((freq, index2) => {
      this.mast.resonance_frequencies[index2] = {
        weak: karsilastirma.weak[index2],
        strong: karsilastirma.strong[index2],
        frequency: freq
      };
    });
    console.log("Vibration frequencies", this.mast.resonance_frequencies);
  }
  setBOM() {
    this.mast.sections.forEach((section, index2) => {
      let requested_config_name = "C" + String(section.tube_no).padStart(2, "0") + section.config_suffix;
      let flange = mtnx_bom.fixed_top_flange.find((item) => item.config_no === requested_config_name);
      this.mast.bom.push(flange);
    });
  }
  svgDraw(drawType) {
    this.force_line_scale = 250 / this.mast.payload.wind_load;
    this.drawType = drawType;
    this.svgDiv = document.getElementById("div" + drawType);
    this.setSvgParams();
    switch (drawType) {
      case "Loads":
        this.svgDrawLoads();
        break;
      default:
      case "Extended":
        this.svgDrawExtended();
        break;
      case "Nested":
        this.svgDrawNested();
        break;
    }
  }
  setSvgParams() {
    this.MX = 20;
    this.MY = 20;
    let wDiv = document.getElementById("fixedWidth");
    console.log(wDiv);
    this.svgWidth = wDiv.clientWidth - window.getComputedStyle(this.svgDiv).paddingLeft.replace("px", "") - window.getComputedStyle(this.svgDiv).paddingRight.replace("px", "");
    this.svgHeight = 16 * this.svgWidth / 19;
    this.vcline_x = 0.5 * this.svgWidth;
    this.vcline_info = 0.7 * this.svgWidth;
    let totalHeight;
    switch (this.drawType) {
      case "Loads":
        totalHeight = 1e3 * Math.sqrt(this.data.params.sail_area) + this.data.props.extendedHeight;
        break;
      default:
      case "Extended":
        totalHeight = this.data.props.extendedHeight;
        break;
      case "Nested":
        totalHeight = this.data.props.nestedHeight;
        break;
    }
    this.scale = (this.svgHeight - 2 * this.MY) / totalHeight;
  }
}
var root_2 = from_html(`<td colspan="2" class="is-success">Available Torque <strong> </strong> > Required Torque <strong> </strong> Nm</td>`);
var root_3 = from_html(`<td colspan="2" class="is-danger is-light">Available Torque <strong> </strong> <span class="has-text-danger"><strong>&lt;</strong></span> Required Torque <strong> </strong> Nm</td>`);
var root_5 = from_html(`<tr><td></td><td class="has-text-right"> </td><td class="has-text-right has-background-grey-lighter has-text-weight-bold"> </td><td class="has-text-right"> </td></tr>`);
var root_4 = from_html(`<table class="table is-bordered is-striped is-hoverable is-fullwidth"><thead><tr><th>Mode</th><th>Weak</th><th>Frequency</th><th>Strong</th></tr></thead><tbody></tbody></table>`);
var root_6 = from_html(`<tr><td> </td><td> </td><td> </td><td> </td></tr>`);
var root_7 = from_html(`<tr><th class="is-4"> </th><td> </td></tr>`);
var root_1 = from_html(`<section class="section"><div class="columns"><div class="column is-8"><!></div> <div class="column has-text-right has-text-left-mobile"><button class="button is-link is-light" data-tooltip="Mast Parameters"><span class="icon is-small"><!></span></button> <a href="/pdm/engineering/profiles_table" class="button is-link is-light ml-6" data-tooltip="Profiles Table"><span class="icon is-small"><!></span></a> <button class="button is-link is-light" data-tooltip="Mast Options Table"><span class="icon is-small"><!></span></button></div></div> <!> <div class="columns"><div class="column is-10"><!></div> <div class="column has-text-right has-text-left-mobile"><button class="button is-link is-light" data-tooltip="Code2CAD"><span class="icon is-small"><!></span></button> <button class="button is-link is-light" data-tooltip="Toggle JSON Editor"><span class="icon is-small"><!></span></button> <button class="button is-link is-light" data-tooltip="Generate PDF"><span class="icon is-small"><!></span></button></div></div> <form novalidate="" id="genericForm" class="my-6"><div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div></div></div></form> <div class="card has-background-white-ter py-2 my-4"><nav class="level"><div class="level-item has-text-centered"><div><p class="heading mb-0">Extended Height</p> <p class="title mb-0"> </p> <p class="heading">mm</p></div></div> <div class="level-item has-text-centered"><div><p class="heading mb-0">Nested Height</p> <p class="title mb-0"> </p> <p class="heading">mm</p></div></div> <div class="level-item has-text-centered"><div><p class="heading mb-0">Wind Load on Payload</p> <p class="title mb-0"> </p> <p class="heading">N</p></div></div> <div class="level-item has-text-centered"><div><p class="heading mb-0">Lifted Mass / Total Mast Mass</p> <p class="title mb-0"> </p> <p class="heading">kg</p></div></div></nav></div> <nav class="navbar has-background-info-light mb-2 mt-6"><div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><button class="navbar-item" id="tabLoads"><span class="icon"><!></span> <span>Loads</span></button> <button class="navbar-item is-light is-inverted" id="tabBM"><span class="icon"><!></span> <span>Moments</span></button> <button class="navbar-item is-light is-inverted" id="tabDeflection"><span class="icon"><!></span> <span>Deflections</span></button> <button class="navbar-item is-light is-inverted" id="tabExtended"><span class="icon"><!></span> <span>Extended</span></button> <button class="navbar-item is-light is-inverted" id="tabNested"><span class="icon"><!></span> <span>Nested</span></button> <button class="navbar-item is-light is-inverted" id="tabTorque"><span class="icon"><!></span> <span>Torque/Power</span></button> <button class="navbar-item is-light is-inverted" id="tabVibration"><span class="icon"><!></span> <span>Frequencies</span></button> <button class="navbar-item is-light is-inverted" id="tabBOM"><span class="icon"><!></span> <span>BOM</span></button></div></div></nav> <div class="card p-4"><div class="container mt-6" id="fixedWidth"></div> <div class="container" id="divLoads"></div> <div class="container is-hidden" id="divBM"><canvas></canvas></div> <div class="container is-hidden" id="divDeflection"><canvas></canvas></div> <div class="container is-hidden" id="divExtended"></div> <div class="container is-hidden" id="divNested"></div> <div class="container is-hidden" id="divTorque"><table class="table is-fullwidth is-striped"><tbody><tr><th>Screw Data</th><td><table class="table is-fullwidth is-striped mt-2"><tbody><tr><th>Screw Nominal Diameter [mm]</th><td> </td></tr><tr><th>Screw Lead [mm]</th><td> </td></tr><tr><th>Coefficient of Friction
                                                [Steel-Bronze]</th><td> </td></tr></tbody></table></td></tr><tr><th>Minimum Torque Required to Extend Mast<br/> <span class="has-text-weight-normal has-text-success"> </span></th><td><table class="table is-fullwidth is-striped mt-2"><tbody><tr><th>Selected Motor Power</th><td> </td></tr><tr><th>Selected Motor Maximum Speed</th><td> </td></tr><tr><th>Selected Motor Output Torque</th><td> </td></tr><tr><th>Total Driveline Speed Reduction
                                                Ratio</th><td> </td></tr><tr><th>Screw Speed</th><td> <br/> </td></tr><tr><th>Time to Extend Mast [Estimated]</th><td> </td></tr><tr><th>Minimum Torque Required to
                                                Extend Mast</th><td> </td></tr><tr><th>Total Torque at Screw End</th><td> </td></tr><tr><!><!></tr></tbody></table></td></tr></tbody></table></div> <div class="container is-hidden" id="divVibration"><!> <a href="https://www.youtube.com/shorts/PJXdibF6fKk" target="_blank">Watch Video</a> <div class="fixed-grid has-1-cols-mobile"><div class="grid"><div class="cell"><img src="/images/PDM/ModeShapes.png" alt="Mode Shapes"/></div> <div class="cell"><!></div></div></div></div> <div class="container is-hidden" id="divBOM"><!> <table class="table is-fullwidth"><thead><tr><th>Config No</th><th>Name</th><th>Mass (kg)</th><th>Part Number</th></tr></thead><tbody></tbody></table></div></div> <div id="jsonModal"><button type="button" id="jsonModal" aria-label="close"></button> <div class="modal-content"><pre>
                  
                  <!>
                </pre></div> <button class="modal-close is-large" aria-label="close"></button></div> <div id="infoGraphicModal"><button type="button" id="infoGraphicModal" aria-label="close"></button> <div class="modal-content has-background-white p-6"><!> <p class="image"><img src="/images/PDM/MastParameters.png" alt="Description of mast parameters"/></p> <!> <table class="table is-fullwidth"><thead><tr><th>No</th><th>Description</th></tr></thead><tbody></tbody></table> <!> <article class="message is-info"><!> <div class="message-body">Dynamic pressure formula is used to calculate wind load
                        on payloads.</div></article> <article class="message is-info"><!> <div class="message-body"><p>Eurocode 1: Actions on structures - Part 1-4:
                            General actions - Wind actions</p> <p><a href="https://www.phd.eng.br/wp-content/uploads/2015/12/en.1991.1.4.2005.pdf">EN 1991-1-4:2005+A1:2010 Section 7.9.2</a> Cylindrical structures, isolated cylindrical elements</p> <p>All load calculations on mast sections are performed
                            per above document.</p> <p><a href="https://eurocodeapplied.com/design/en1991/wind-force-cylinder">Eurocode Implementation</a></p></div></article></div> <button class="modal-close is-large" aria-label="close"></button></div></section>`);
function Configurator_1($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let chartCanvas;
  let chartDeflection;
  let chartInstance;
  let chartDeflectionInstance;
  function drawBMChart(data) {
    if (!chartCanvas) return;
    const ctx = chartCanvas.getContext("2d");
    const all_M_EI_values = Object.values(data.sections).flatMap((section) => Object.values(section).map((metrics) => metrics.M_EI));
    const min_EI = Math.min(...all_M_EI_values);
    const chartData = {
      //labels: Object.keys(data.control_points).map(Number),
      datasets: [
        {
          label: "w/o Side Adapter (Nm)",
          //data: Object.values(data.control_points).map((point) => point.int_moment),
          data: Object.entries(data.control_points).map(([key, point]) => ({ x: parseInt(key), y: point.int_moment })),
          borderColor: "#D7263D",
          fill: true,
          yAxisID: "y"
        },
        {
          label: "w/ Side Adapter (Nm)",
          //data: Object.values(data.control_points2).map((point) => point.int_moment),
          data: Object.entries(data.control_points2).map(([key, point]) => ({ x: parseInt(key), y: point.int_moment })),
          borderColor: "#8FB339",
          yAxisID: "y"
        },
        // Correctly mapping the nested sections data
        ...Object.entries(data.sections).map(([sectionIndex, sectionData]) => {
          return {
            label: `M/EI S${sectionIndex}`,
            // Convert the sub-keys (3550, 4300, etc.) into x, and extract M_EI for y
            data: Object.entries(sectionData).map(([xValue, metrics]) => ({ x: parseFloat(xValue), y: metrics.M_EI })).sort((a, b) => a.x - b.x),
            // Keeps the line rendering left-to-right
            borderColor: "#02182B",
            backgroundColor: "rgba(1, 151, 246, 0.1)",
            fill: true,
            yAxisID: "y1"
          };
        })
      ]
    };
    if (chartInstance) {
      chartInstance.data = chartData;
      chartInstance.options.scales.y1.min = min_EI * 1.2;
      chartInstance.update("none");
    } else {
      chartInstance = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          scales: {
            x: {
              type: "linear",
              display: true,
              title: {
                display: true,
                text: "Mast Height, z [mm]",
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
                text: "Bending Moment, [Nm]",
                color: "#666",
                font: { size: 14, weight: "bold" }
              },
              // Useful if you want the negative values to stay consistent
              beginAtZero: false
            },
            // Right Axis
            y1: {
              type: "linear",
              display: true,
              position: "right",
              title: {
                display: true,
                text: "M/EI [1/m]",
                color: "#666",
                font: { size: 14, weight: "bold" }
              },
              min: min_EI * 1.2,
              max: 0,
              // Important: Turn off grid lines for the second axis to avoid clutter
              grid: { drawOnChartArea: false },
              ticks: {
                // Force more decimals so you can see the difference
                callback(value) {
                  return value.toFixed(5);
                }
              }
            }
          },
          plugins: {
            title: { display: true, text: "Bending Moment and M/EI Diagram" },
            tooltip: {}
          }
        }
      });
    }
  }
  function drawDeflectionChart(data) {
    if (!chartDeflection) return;
    const deflectionWOAdapter = Object.entries(data.deflection_data).map(([height, deflection2]) => ({
      height: Number(height),
      // Key'ler string geldiği için sayıya çeviriyoruz (0, 1800, 2050...)
      deflection: deflection2
      // Sehim değeri (0, -2.65, -3.37...)
    })).sort((a, b) => a.height - b.height);
    const deflectionWAdapter = Object.entries(data.deflection_data2).map(([height, deflection2]) => ({
      height: Number(height),
      // Key'ler string geldiği için sayıya çeviriyoruz (0, 1800, 2050...)
      deflection: deflection2
      // Sehim değeri (0, -2.65, -3.37...)
    })).sort((a, b) => a.height - b.height);
    const max_deflection = data.deflection_data;
    const ctx = chartDeflection.getContext("2d");
    const chartData = {
      datasets: [
        {
          label: "Deflection w/o Side Adapter (mm)",
          // 2. Map directly to { x, y } coordinates
          data: deflectionWOAdapter.map((point) => ({ x: point.height, y: point.deflection })),
          borderColor: "#D7263D",
          yAxisID: "y",
          tension: 0.35
        },
        {
          label: "Deflection w/ Side Adapter (mm)",
          // 3. Map this dataset to its own independent { x, y } coordinates
          data: deflectionWAdapter.map((point) => ({ x: point.height, y: point.deflection })),
          borderColor: "#8FB339",
          yAxisID: "y",
          tension: 0.35
        }
      ]
    };
    if (chartDeflectionInstance) {
      chartDeflectionInstance.data = chartData;
      chartDeflectionInstance.options.scales.y.min = 1.2 * max_deflection;
      chartDeflectionInstance.update("none");
    } else {
      chartDeflectionInstance = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          scales: {
            x: {
              type: "linear",
              display: true,
              title: {
                display: true,
                text: "Mast Height, z [mm]",
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
                text: "Deflection, [mm]",
                color: "#666",
                font: { size: 14, weight: "bold" }
              },
              // Useful if you want the negative values to stay consistent
              beginAtZero: false
            }
          },
          plugins: {
            title: { display: true, text: "Bending Moment and M/EI Diagram" },
            tooltip: {}
          }
        }
      });
    }
  }
  let showJson = state(false);
  let showInfoGraphic = state(false);
  function toggle() {
    set(showJson, !get(showJson));
  }
  function toggleInfoGraphic() {
    set(showInfoGraphic, !get(showInfoGraphic));
  }
  let form = useForm({
    start_tube_no: 13,
    end_tube_no: 15,
    overlap: 500,
    base_adapter_height: 50,
    payload_adapter_height: 15,
    sail_area: 1.2,
    wind_speed: 120,
    head_height: 55,
    material: "6063",
    tube_length: 2e3,
    terrain_category: "II",
    x_offset: 100,
    z_offset: null,
    payload_mass: 400,
    motor_id: 1,
    gearbox_id: 1,
    tip_deflection_percentage: 75,
    side_adapter_z: null,
    mast_type: "MTNX"
  });
  onMount(() => {
    store_mutate(form, untrack($form).z_offset = Math.round(1e3 * Math.sqrt($form().sail_area) / 2, 0), untrack($form));
    store_mutate(form, untrack($form).side_adapter_z = $form().tube_length + $form().base_adapter_height - $form().overlap / 2, untrack($form));
    const selectedMast = config["mast_types"].find((mast2) => mast2.value.toString() === $form().mast_type.toString());
    store_mutate(form, untrack($form).head_height = selectedMast ? selectedMast.head_height : null, untrack($form));
    const params = new URLSearchParams(window.location.search);
    const qr = params.get("qr");
    if (qr) {
      let qr_arr = qr.split("-");
      console.log("QR parameter:", qr, qr_arr);
      store_mutate(form, untrack($form).mast_type = qr_arr[0], untrack($form));
      store_mutate(form, untrack($form).start_tube_no = parseInt(qr_arr[1]), untrack($form));
      store_mutate(form, untrack($form).end_tube_no = parseInt(qr_arr[2]), untrack($form));
      store_mutate(form, untrack($form).overlap = parseInt(qr_arr[3]), untrack($form));
      store_mutate(form, untrack($form).base_adapter_height = parseInt(qr_arr[4]), untrack($form));
      store_mutate(form, untrack($form).payload_adapter_height = parseInt(qr_arr[5]), untrack($form));
      store_mutate(form, untrack($form).sail_area = parseFloat(qr_arr[6]), untrack($form));
      store_mutate(form, untrack($form).wind_speed = parseFloat(qr_arr[7]), untrack($form));
      store_mutate(form, untrack($form).head_height = parseFloat(qr_arr[8]), untrack($form));
      store_mutate(form, untrack($form).tube_length = parseFloat(qr_arr[9]), untrack($form));
      store_mutate(form, untrack($form).terrain_category = qr_arr[10], untrack($form));
      store_mutate(form, untrack($form).x_offset = parseFloat(qr_arr[11]), untrack($form));
      store_mutate(form, untrack($form).z_offset = parseFloat(qr_arr[12]), untrack($form));
      store_mutate(form, untrack($form).payload_mass = parseFloat(qr_arr[13]), untrack($form));
      store_mutate(form, untrack($form).motor_id = parseInt(qr_arr[14]), untrack($form));
      store_mutate(form, untrack($form).gearbox_id = parseInt(qr_arr[15]), untrack($form));
      store_mutate(form, untrack($form).tip_deflection_percentage = parseFloat(qr_arr[16]), untrack($form));
      store_mutate(form, untrack($form).side_adapter_z = parseFloat(qr_arr[17]), untrack($form));
    }
  });
  user_effect(() => {
    get(mast);
    get(deflection).run();
    drawBMChart(get(deflection).data);
    drawDeflectionChart(get(deflection).data);
    get(svgDraw).svgDraw("Loads");
    get(svgDraw).svgDraw("Extended");
    get(svgDraw).svgDraw("Nested");
    runVibrationAnalysis();
  });
  let mast = user_derived(() => new MastGeometry($form().data(), config));
  let svgDraw = user_derived(() => new SvgDraw(get(mast).data));
  let deflection = user_derived(() => new MastDeflection(get(mast).data));
  let configurator = user_derived(() => new Configurator($form().data()));
  function toggleTab(elName) {
    let tabSelected = "tab" + elName;
    let divSelected = "div" + elName;
    let tabId, divId;
    let tabs = [
      "BM",
      "Deflection",
      "Loads",
      "Extended",
      "Nested",
      "Torque",
      "Vibration",
      "BOM"
    ];
    tabs.forEach((element) => {
      tabId = "tab" + element;
      divId = "div" + element;
      document.getElementById(tabId).classList.remove("is-inverted");
      document.getElementById(divId).classList.add("is-hidden");
    });
    document.getElementById(tabSelected).classList.add("is-inverted");
    document.getElementById(divSelected).classList.remove("is-hidden");
  }
  async function generatePDF() {
    let pdf = new MakePDF(get(mast).data);
    await pdf.init();
    await pdf.run();
  }
  function goToMastOptionsTable() {
    window.location.href = "/pdm/engineering/options_table";
  }
  function updateFormValues() {
    const selectedMast = config["mast_types"].find((mast2) => mast2.value.toString() === $form().mast_type.toString());
    store_mutate(form, untrack($form).head_height = selectedMast ? selectedMast.head_height : null, untrack($form));
    store_mutate(form, untrack($form).base_adapter_height = selectedMast ? selectedMast.base_adapter_height : null, untrack($form));
  }
  let all_frequencies = proxy([]);
  function runVibrationAnalysis() {
    const analyzer2 = new MastVibration({
      params: get(mast).data.params,
      extendedHeight: get(mast).data.props.extendedHeight,
      modes: 3,
      integrationSteps: 500
    });
    const frequencies = analyzer2.calculateFrequencies();
    const karsilastirma = analyzer2.comparativeFrequencies();
    frequencies.forEach((freq, index2) => {
      all_frequencies[index2] = {
        weak: karsilastirma.weak[index2],
        strong: karsilastirma.strong[index2],
        frequency: freq
      };
    });
  }
  let result = "";
  let error = "";
  async function code2Cad() {
    console.log("Configurator.mast", get(configurator).mast);
    console.log("Form.overlap", $form().overlap);
    try {
      const response = await fetch("/api/code2cad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          pnumber: "199234",
          mast: get(configurator).mast,
          overlap: $form().overlap
        })
      });
      const data = await response.json();
      console.log("Response from server:", data);
      if (response.ok) {
        result = data.result;
        error = "";
        alert("done");
        console.log(JSON.parse(result));
      } else {
        error = data.error || "Something went wrong";
      }
    } catch (err) {
      error = err.message;
      console.error("Fetch Error:", err);
    }
  }
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section_1 = root_1();
      var div = child(section_1);
      var div_1 = child(div);
      var node = child(div_1);
      Title(node, {
        title: "Mast Configurator",
        subtitle: "Payload - Extended/Nested Height - Weight / Loads Estimation"
      });
      var div_2 = sibling(div_1, 2);
      var button = child(div_2);
      var span = child(button);
      var node_1 = child(span);
      Info(node_1, { size: "20" });
      var a_1 = sibling(button, 2);
      var span_1 = child(a_1);
      var node_2 = child(span_1);
      Target(node_2, { size: "18" });
      var button_1 = sibling(a_1, 2);
      var span_2 = child(button_1);
      var node_3 = child(span_2);
      List(node_3, { size: "18" });
      var node_4 = sibling(div, 2);
      FormRadio(node_4, {
        get form() {
          return form;
        },
        name: "mast_type",
        label: "Mast Type",
        value: "MTNX",
        get options() {
          return config.mast_types;
        },
        onchange: () => updateFormValues()
      });
      var div_3 = sibling(node_4, 2);
      var div_4 = child(div_3);
      var node_5 = child(div_4);
      {
        let $0 = user_derived(() => $form().end_tube_no - $form().start_tube_no + 1);
        Title(node_5, {
          get title() {
            return `[${get($0) ?? ""}] Sections`;
          }
        });
      }
      var div_5 = sibling(div_4, 2);
      var button_2 = child(div_5);
      var span_3 = child(button_2);
      var node_6 = child(span_3);
      Box(node_6, { size: "18", color: "red" });
      var button_3 = sibling(button_2, 2);
      var span_4 = child(button_3);
      var node_7 = child(span_4);
      Braces(node_7, { size: "18" });
      var button_4 = sibling(button_3, 2);
      var span_5 = child(button_4);
      var node_8 = child(span_5);
      Pdf(node_8, { size: "20" });
      var form_1 = sibling(div_3, 2);
      var div_6 = child(form_1);
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var node_9 = child(div_8);
      {
        let $0 = user_derived(() => config.tubes.map((tube) => ({
          value: tube.no,
          label: `MT-${String(tube.no).padStart(2, "0")} ... Dia ${tube.od}`
        })));
        FormSelect(node_9, {
          get form() {
            return form;
          },
          name: "start_tube_no",
          label: "Top Tube Dia [mm]",
          placeholder: "Select Top Tube",
          get options() {
            return get($0);
          },
          required: true,
          class: "is-fullwidth"
        });
      }
      var div_9 = sibling(div_8, 2);
      var node_10 = child(div_9);
      {
        let $0 = user_derived(() => config.tubes.map((tube) => ({
          value: tube.no,
          label: `MT-${String(tube.no).padStart(2, "0")} ... Dia ${tube.od}`
        })));
        FormSelect(node_10, {
          get form() {
            return form;
          },
          name: "end_tube_no",
          label: "Bottom Tube Dia [mm]",
          placeholder: "Select Bottom Tube",
          get options() {
            return get($0);
          },
          required: true,
          class: "is-fullwidth"
        });
      }
      var div_10 = sibling(div_9, 2);
      var node_11 = child(div_10);
      FormInput(node_11, {
        get form() {
          return form;
        },
        name: "tube_length",
        label: "Length of Sections [mm]",
        placeholder: "Tube Length",
        type: "number",
        min: "0",
        max: "4000",
        step: "5",
        required: true
      });
      var div_11 = sibling(div_10, 2);
      var node_12 = child(div_11);
      FormInput(node_12, {
        get form() {
          return form;
        },
        name: "overlap",
        label: "Overlap Length[mm]",
        placeholder: "Enter overlap",
        type: "number",
        min: "100",
        max: "2000",
        step: "5",
        required: true
      });
      var div_12 = sibling(div_6, 2);
      var div_13 = child(div_12);
      var div_14 = child(div_13);
      var node_13 = child(div_14);
      FormInput(node_13, {
        get form() {
          return form;
        },
        name: "head_height",
        label: "Head Distance [mm]",
        placeholder: "Enter Head Distance",
        type: "number",
        min: "20",
        max: "500",
        step: "5",
        required: true
      });
      var div_15 = sibling(div_14, 2);
      var node_14 = child(div_15);
      FormInput(node_14, {
        get form() {
          return form;
        },
        name: "x_offset",
        label: "X Offset [mm]",
        placeholder: "Enter X Offset",
        type: "number",
        min: "0",
        max: "1000",
        step: "5",
        required: true
      });
      var div_16 = sibling(div_15, 2);
      var node_15 = child(div_16);
      FormInput(node_15, {
        get form() {
          return form;
        },
        name: "z_offset",
        label: "Z Offset [mm]",
        placeholder: "Enter Z Offset",
        type: "number",
        min: "50",
        max: "2500",
        step: "5",
        required: true
      });
      var div_17 = sibling(div_16, 2);
      var node_16 = child(div_17);
      {
        let $0 = user_derived(() => config.terrain_category.map((category) => ({
          value: category.no,
          label: category.no + " - " + category.description.slice(0, 16) + "..."
        })));
        FormSelect(node_16, {
          get form() {
            return form;
          },
          name: "terrain_category",
          label: "Terrain Category",
          placeholder: "Select Terrain Category",
          get options() {
            return get($0);
          },
          required: true,
          class: "is-fullwidth"
        });
      }
      var div_18 = sibling(div_12, 2);
      var div_19 = child(div_18);
      var div_20 = child(div_19);
      var node_17 = child(div_20);
      FormInput(node_17, {
        get form() {
          return form;
        },
        name: "wind_speed",
        label: "Wind Speed [km/h]",
        placeholder: "Enter Wind Speed",
        type: "number",
        min: "30",
        max: "200",
        step: "1",
        required: true
      });
      var div_21 = sibling(div_20, 2);
      var node_18 = child(div_21);
      FormInput(node_18, {
        get form() {
          return form;
        },
        name: "sail_area",
        label: "Sail Area [m²]",
        placeholder: "Enter Sail Area",
        type: "number",
        min: "0",
        max: "20",
        step: "0.1",
        required: true
      });
      var div_22 = sibling(div_21, 2);
      var node_19 = child(div_22);
      FormInput(node_19, {
        get form() {
          return form;
        },
        name: "payload_adapter_height",
        label: "Payload Adapter Thk [mm]",
        placeholder: "Enter Payload Adapter Thickness",
        type: "number",
        min: "0",
        max: "100",
        step: "1",
        required: true
      });
      var div_23 = sibling(div_22, 2);
      var node_20 = child(div_23);
      FormInput(node_20, {
        get form() {
          return form;
        },
        name: "base_adapter_height",
        label: "Base Adapter Thk [mm]",
        placeholder: "Enter Base Adapter Thickness",
        type: "number",
        min: "0",
        max: "1000",
        step: "1",
        required: true
      });
      var div_24 = sibling(div_18, 2);
      var div_25 = child(div_24);
      var div_26 = child(div_25);
      var node_21 = child(div_26);
      FormInput(node_21, {
        get form() {
          return form;
        },
        name: "payload_mass",
        label: "Payload Mass [kg]",
        placeholder: "Enter Payload Mass",
        type: "number",
        min: "5",
        max: "1000",
        step: "5",
        required: true
      });
      var div_27 = sibling(div_26, 2);
      var node_22 = child(div_27);
      {
        let $0 = user_derived(() => config.motors.map((motor) => ({
          value: motor.id,
          label: `${motor.name} (${motor.max_speed_rpm} RPM)`
        })));
        FormSelect(node_22, {
          get form() {
            return form;
          },
          name: "motor_id",
          label: "Motor / Drive Type",
          placeholder: "Select Motor",
          get options() {
            return get($0);
          },
          required: true,
          class: "is-fullwidth"
        });
      }
      var div_28 = sibling(div_27, 2);
      var node_23 = child(div_28);
      {
        let $0 = user_derived(() => config.gearboxes.map((gearbox) => ({ value: gearbox.id, label: `${gearbox.name}` })));
        FormSelect(node_23, {
          get form() {
            return form;
          },
          name: "gearbox_id",
          label: "Gearbox",
          placeholder: "Select Gearbox",
          get options() {
            return get($0);
          },
          required: true,
          class: "is-fullwidth"
        });
      }
      var div_29 = sibling(div_28, 2);
      var node_24 = child(div_29);
      {
        let $0 = user_derived(() => config.tip_deflection_percentages.map((percentage) => ({ value: percentage.id, label: `${percentage.name}` })));
        FormSelect(node_24, {
          get form() {
            return form;
          },
          name: "tip_deflection_percentage",
          label: "Tip Deflection Percentage",
          placeholder: "Select Percentage",
          get options() {
            return get($0);
          },
          required: true,
          class: "is-fullwidth"
        });
      }
      var div_30 = sibling(div_24, 2);
      var div_31 = child(div_30);
      var div_32 = child(div_31);
      var node_25 = child(div_32);
      FormInput(node_25, {
        get form() {
          return form;
        },
        name: "side_adapter_z",
        label: "Side Adapter Z [mm]",
        placeholder: "Enter Side Adapter Z",
        type: "number",
        min: "500",
        max: "3500",
        step: "5",
        required: true
      });
      var div_33 = sibling(form_1, 2);
      var nav = child(div_33);
      var div_34 = child(nav);
      var div_35 = child(div_34);
      var p = sibling(child(div_35), 2);
      var text = child(p);
      var div_36 = sibling(div_34, 2);
      var div_37 = child(div_36);
      var p_1 = sibling(child(div_37), 2);
      var text_1 = child(p_1);
      var div_38 = sibling(div_36, 2);
      var div_39 = child(div_38);
      var p_2 = sibling(child(div_39), 2);
      var text_2 = child(p_2);
      var div_40 = sibling(div_38, 2);
      var div_41 = child(div_40);
      var p_3 = sibling(child(div_41), 2);
      var text_3 = child(p_3);
      var nav_1 = sibling(div_33, 2);
      var div_42 = child(nav_1);
      var div_43 = child(div_42);
      var button_5 = child(div_43);
      var span_6 = child(button_5);
      var node_26 = child(span_6);
      Weight_tilde(node_26, { size: "16", color: "blue" });
      var button_6 = sibling(button_5, 2);
      var span_7 = child(button_6);
      var node_27 = child(span_7);
      Chart_line(node_27, { size: "16", color: "blue" });
      var button_7 = sibling(button_6, 2);
      var span_8 = child(button_7);
      var node_28 = child(span_8);
      Chart_spline(node_28, { size: "16", color: "blue" });
      var button_8 = sibling(button_7, 2);
      var span_9 = child(button_8);
      var node_29 = child(span_9);
      Arrow_up_narrow_wide(node_29, { size: "16", color: "blue" });
      var button_9 = sibling(button_8, 2);
      var span_10 = child(button_9);
      var node_30 = child(span_10);
      Arrow_down_narrow_wide(node_30, { size: "16", color: "blue" });
      var button_10 = sibling(button_9, 2);
      var span_11 = child(button_10);
      var node_31 = child(span_11);
      Wrench(node_31, { size: "16", color: "blue" });
      var button_11 = sibling(button_10, 2);
      var span_12 = child(button_11);
      var node_32 = child(span_12);
      Audio_waveform(node_32, { size: "16", color: "blue" });
      var button_12 = sibling(button_11, 2);
      var span_13 = child(button_12);
      var node_33 = child(span_13);
      Receipt_text(node_33, { size: "16", color: "blue" });
      var div_44 = sibling(nav_1, 2);
      var div_45 = sibling(child(div_44), 4);
      var canvas = child(div_45);
      bind_this(canvas, ($$value) => chartCanvas = $$value, () => chartCanvas);
      var div_46 = sibling(div_45, 2);
      var canvas_1 = child(div_46);
      bind_this(canvas_1, ($$value) => chartDeflection = $$value, () => chartDeflection);
      var div_47 = sibling(div_46, 6);
      var table = child(div_47);
      var tbody = child(table);
      var tr = child(tbody);
      var td = sibling(child(tr));
      var table_1 = child(td);
      var tbody_1 = child(table_1);
      var tr_1 = child(tbody_1);
      var td_1 = sibling(child(tr_1));
      var text_4 = child(td_1);
      var tr_2 = sibling(tr_1);
      var td_2 = sibling(child(tr_2));
      var text_5 = child(td_2);
      var tr_3 = sibling(tr_2);
      var td_3 = sibling(child(tr_3));
      var text_6 = child(td_3);
      var tr_4 = sibling(tr);
      var th = child(tr_4);
      var span_14 = sibling(child(th), 3);
      var text_7 = child(span_14);
      var td_4 = sibling(th);
      var table_2 = child(td_4);
      var tbody_2 = child(table_2);
      var tr_5 = child(tbody_2);
      var td_5 = sibling(child(tr_5));
      var text_8 = child(td_5);
      var tr_6 = sibling(tr_5);
      var td_6 = sibling(child(tr_6));
      var text_9 = child(td_6);
      var tr_7 = sibling(tr_6);
      var td_7 = sibling(child(tr_7));
      var text_10 = child(td_7);
      var tr_8 = sibling(tr_7);
      var td_8 = sibling(child(tr_8));
      var text_11 = child(td_8);
      var tr_9 = sibling(tr_8);
      var td_9 = sibling(child(tr_9));
      var text_12 = child(td_9);
      var text_13 = sibling(text_12, 2);
      var tr_10 = sibling(tr_9);
      var td_10 = sibling(child(tr_10));
      var text_14 = child(td_10);
      var tr_11 = sibling(tr_10);
      var td_11 = sibling(child(tr_11));
      var text_15 = child(td_11);
      var tr_12 = sibling(tr_11);
      var td_12 = sibling(child(tr_12));
      var text_16 = child(td_12);
      var tr_13 = sibling(tr_12);
      var node_34 = child(tr_13);
      {
        var consequent = ($$anchor3) => {
          var td_13 = root_2();
          var strong = sibling(child(td_13));
          var text_17 = child(strong);
          var strong_1 = sibling(strong, 2);
          var text_18 = child(strong_1);
          template_effect(
            ($0, $1) => {
              set_text(text_17, $0);
              set_text(text_18, $1);
            },
            [
              () => get(mast).data.power.lifting_torque.toFixed(1),
              () => get(mast).data.power.torque_required_to_extend_mast_Nm.toFixed(1)
            ]
          );
          append($$anchor3, td_13);
        };
        if_block(node_34, ($$render) => {
          if (get(mast).data.power.lifting_torque > get(mast).data.power.torque_required_to_extend_mast_Nm) $$render(consequent);
        });
      }
      var node_35 = sibling(node_34);
      {
        var consequent_1 = ($$anchor3) => {
          var td_14 = root_3();
          var strong_2 = sibling(child(td_14));
          var text_19 = child(strong_2);
          var strong_3 = sibling(strong_2, 4);
          var text_20 = child(strong_3);
          template_effect(
            ($0, $1) => {
              set_text(text_19, $0);
              set_text(text_20, $1);
            },
            [
              () => get(mast).data.power.lifting_torque.toFixed(1),
              () => get(mast).data.power.torque_required_to_extend_mast_Nm.toFixed(1)
            ]
          );
          append($$anchor3, td_14);
        };
        if_block(node_35, ($$render) => {
          if (get(mast).data.power.lifting_torque < get(mast).data.power.torque_required_to_extend_mast_Nm) $$render(consequent_1);
        });
      }
      var div_48 = sibling(div_47, 2);
      var node_36 = child(div_48);
      Title(node_36, {
        title: "Resonance Frequencies",
        subtitle: "For pure cantilever beam with concentrated mass at the tip"
      });
      var div_49 = sibling(node_36, 4);
      var div_50 = child(div_49);
      var div_51 = sibling(child(div_50), 2);
      var node_37 = child(div_51);
      {
        var consequent_2 = ($$anchor3) => {
          var table_3 = root_4();
          var tbody_3 = sibling(child(table_3));
          each(tbody_3, 21, () => all_frequencies, index, ($$anchor4, mode, index2) => {
            var tr_14 = root_5();
            var td_15 = child(tr_14);
            td_15.textContent = `Mode ${index2 + 1}`;
            var td_16 = sibling(td_15);
            var text_21 = child(td_16);
            var td_17 = sibling(td_16);
            var text_22 = child(td_17);
            var td_18 = sibling(td_17);
            var text_23 = child(td_18);
            template_effect(
              ($0, $1, $2) => {
                set_text(text_21, `${$0 ?? ""} Hz`);
                set_text(text_22, `${$1 ?? ""}
                                                    Hz`);
                set_text(text_23, `${$2 ?? ""} Hz`);
              },
              [
                () => get(mode).weak.toFixed(1),
                () => get(mode).frequency.toFixed(1),
                () => get(mode).strong.toFixed(1)
              ]
            );
            append($$anchor4, tr_14);
          });
          append($$anchor3, table_3);
        };
        if_block(node_37, ($$render) => {
          if (all_frequencies.length > 0) $$render(consequent_2);
        });
      }
      var div_52 = sibling(div_48, 2);
      var node_38 = child(div_52);
      Title(node_38, { title: "BOM", subtitle: "Bill of Materials" });
      var text_24 = sibling(node_38);
      var table_4 = sibling(text_24);
      var tbody_4 = sibling(child(table_4));
      each(tbody_4, 21, () => get(configurator).mast.bom, index, ($$anchor3, item) => {
        var tr_15 = root_6();
        var td_19 = child(tr_15);
        var text_25 = child(td_19);
        var td_20 = sibling(td_19);
        var text_26 = child(td_20);
        var td_21 = sibling(td_20);
        var text_27 = child(td_21);
        var td_22 = sibling(td_21);
        var text_28 = child(td_22);
        template_effect(
          ($0) => {
            set_text(text_25, `AA${get(item).config_no ?? ""} ${$0 ?? ""}`);
            set_text(text_26, `BB${get(item).name ?? ""}`);
            set_text(text_27, `CC${get(item).mass_kg ?? ""}`);
            set_text(text_28, `DD${get(item).part_number ?? ""}`);
          },
          [() => console.log(get(item))]
        );
        append($$anchor3, tr_15);
      });
      var div_53 = sibling(div_44, 2);
      var button_13 = child(div_53);
      var div_54 = sibling(button_13, 2);
      var pre = child(div_54);
      var node_39 = sibling(child(pre));
      JsonTree(node_39, {
        get data() {
          return get(deflection).data;
        }
      });
      var button_14 = sibling(div_54, 2);
      var div_55 = sibling(div_53, 2);
      var button_15 = child(div_55);
      var div_56 = sibling(button_15, 2);
      var node_40 = child(div_56);
      Title(node_40, { title: "Definition of Parameters Used" });
      var node_41 = sibling(node_40, 4);
      Title(node_41, { title: "Terrain Categories" });
      var table_5 = sibling(node_41, 2);
      var tbody_5 = sibling(child(table_5));
      each(tbody_5, 21, () => config.terrain_category, index, ($$anchor3, terrain) => {
        var tr_16 = root_7();
        var th_1 = child(tr_16);
        var text_29 = child(th_1);
        var td_23 = sibling(th_1);
        var text_30 = child(td_23);
        template_effect(() => {
          set_text(text_29, get(terrain).no);
          set_text(text_30, get(terrain).description);
        });
        append($$anchor3, tr_16);
      });
      var node_42 = sibling(table_5, 2);
      Title(node_42, { title: "Load Calculation Resources" });
      var article = sibling(node_42, 2);
      var node_43 = child(article);
      Title(node_43, { subtitle: "Wind Load on Payloads" });
      var article_1 = sibling(article, 2);
      var node_44 = child(article_1);
      Title(node_44, { subtitle: "Wind Load Circular Mast Sections" });
      var button_16 = sibling(div_56, 2);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) => {
          set_text(text, get(mast).data.props.extendedHeight);
          set_text(text_1, get(mast).data.props.nestedHeight);
          set_text(text_2, $0);
          set_text(text_3, `${$1 ?? ""} / ${$2 ?? ""}`);
          set_text(text_4, $3);
          set_text(text_5, $4);
          set_text(text_6, $5);
          set_text(text_7, `[with ${$6 ?? ""} kg Lifted Mass]`);
          set_text(text_8, `${get(mast).data.power.motor_power ?? ""} kW`);
          set_text(text_9, `${get(mast).data.power.motor_rpm ?? ""} RPM`);
          set_text(text_10, `${$7 ?? ""} Nm`);
          set_text(text_11, get(mast).data.power.gearbox_ratio);
          set_text(text_12, `${$8 ?? ""} RPM `);
          set_text(text_13, ` ${$9 ?? ""} m/min`);
          set_text(text_14, `${$10 ?? ""} seconds`);
          set_text(text_15, `${$11 ?? ""} Nm`);
          set_text(text_16, `${$12 ?? ""} Nm`);
          set_text(text_24, ` ${$13 ?? ""}
                ${$14 ?? ""} `);
          set_class(div_53, 1, `modal ${get(showJson) ? "is-active" : ""}`);
          set_class(button_13, 1, `modal-background ${get(showJson) ? "is-active" : ""}`);
          set_class(div_55, 1, `modal ${get(showInfoGraphic) ? "is-active" : ""}`);
          set_class(button_15, 1, `modal-background ${get(showInfoGraphic) ? "is-active" : ""}`);
        },
        [
          () => get(mast).data.props.payload.wind_load.toFixed(0),
          () => get(mast).data.weights.lifted_mass.toFixed(0),
          () => get(mast).data.weights.total_mast_mass.toFixed(0),
          () => get(mast).data.config.screw_nominal_diameter.toFixed(2),
          () => get(mast).data.config.screw_lead.toFixed(2),
          () => get(mast).data.config.screw_coefficient_of_friction.toFixed(2),
          () => get(mast).data.weights.lifted_mass.toFixed(0),
          () => get(mast).data.power.motor_torque.toFixed(2),
          () => get(mast).data.power.screw_rpm.toFixed(1),
          () => get(mast).data.power.vertical_speed.toFixed(3),
          () => get(mast).data.power.time_to_extend_seconds.toFixed(0),
          () => get(mast).data.power.torque_required_to_extend_mast_Nm.toFixed(2),
          () => get(mast).data.power.lifting_torque.toFixed(2),
          () => console.log("lllllllll", get(configurator).mast.bom),
          () => console.log("lllllllll", get(configurator).mast.bom)
        ]
      );
      delegated("click", button, toggleInfoGraphic);
      delegated("click", button_1, goToMastOptionsTable);
      delegated("click", button_2, code2Cad);
      delegated("click", button_3, toggle);
      delegated("click", button_4, generatePDF);
      delegated("click", button_5, () => toggleTab("Loads"));
      delegated("click", button_6, () => toggleTab("BM"));
      delegated("click", button_7, () => toggleTab("Deflection"));
      delegated("click", button_8, () => toggleTab("Extended"));
      delegated("click", button_9, () => toggleTab("Nested"));
      delegated("click", button_10, () => toggleTab("Torque"));
      delegated("click", button_11, () => toggleTab("Vibration"));
      delegated("click", button_12, () => toggleTab("BOM"));
      delegated("click", button_13, () => set(showJson, false));
      delegated("click", button_14, toggle);
      delegated("click", button_15, () => set(showInfoGraphic, false));
      delegated("click", button_16, toggleInfoGraphic);
      append($$anchor2, section_1);
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
delegate(["click"]);
export {
  Configurator_1 as default
};
//# sourceMappingURL=Configurator-BGUVaqeu.js.map
