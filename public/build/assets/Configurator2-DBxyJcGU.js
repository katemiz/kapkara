import { F as user_effect, c as pop, d as push, f as setup_stores, h as store_mutate, u as untrack, o as set, q as get, a as if_block, y as each, t as template_effect, l as set_text, n as delegated, b as append, k as child, g as sibling, s as store_get, r as state, j as from_html, B as user_derived, v as delegate, A as index } from "./app-B8UKlAbY.js";
import { o as onMount } from "./index-client-BrUzj1xQ.js";
import { s as set_class } from "./class-iAXZF-Rm.js";
import { b as bind_this } from "./this-DBviCOsL.js";
import Layout from "./Layout-BnKzb0ZZ.js";
import { T as Title } from "./Title-6lY5hbRN.js";
import { F as FormInput } from "./FormInput-CJaWZzUI.js";
import { F as FormRadio } from "./FormRadio-B-fITcoQ.js";
import { F as FormSelect } from "./FormSelect-vcBHkPN1.js";
import { a as mtnx_bom, M as MastVibration, I as Info, T as Target, L as List, B as Braces, P as Pdf, W as Weight_tilde, C as Chart_line, b as Chart_spline, A as Arrow_up_narrow_wide, c as Arrow_down_narrow_wide, d as Wrench, f as Audio_waveform, R as Receipt_text, J as JsonTree, g as MakePDF } from "./MastVibration2-CsdlCNNS.js";
import MastDrawing from "./MastDrawing-CV1f76mx.js";
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
class Configurator {
  static calculate(form) {
    this.mast = {
      extendedHeight: null,
      nestedHeight: null,
      noOfTubes: form.end_tube_no - form.start_tube_no + 1,
      tubes: [],
      bom: [],
      svg: []
    };
    this.setDependentProps(form);
    this.setMastTubes(form);
    this.setExtendedHeight(form);
    this.setNestedHeight(form);
    this.productNaming(form);
    this.setZPositions(form);
    this.setPayloadParameters(form);
    this.setMastSections(form);
    this.calculateWindLoadsOnTubes(form);
    this.massEstimation(form);
    this.setBOM(form);
    this.getMastTipMoments(form);
    this.drivePowerEstimation(form);
    this.setBeamControlHeights(form);
    this.findBeamMoments();
    this.setGraphData();
    this.findDeflection(form);
    this.setGraphData();
    this.runVibrationAnalysis(form);
    this.mast.svg.loads = this.svgDraw(form, "Loads");
    this.mast.svg.extended = this.svgDraw(form, "Extended");
    this.mast.svg.nested = this.svgDraw(form, "Nested");
    console.log("FORM:\n", form);
    console.log("MAST:\n", this.mast);
    return this.mast;
  }
  static setDependentProps(form) {
    this.mast.tube_material_density = config.alum_6063_density;
    this.mast.tube_material_e = config.alum_6063_E;
    this.mast.tube_yield_strength = config.alum_6063_yield_strength;
    this.mast.tube_ultimate_strength = config.alum_6063_ultimate_strength;
    this.mast.kama_length = form.overlap - 80;
  }
  static setMastTubes(form) {
    this.mast.tubes = [];
    config.tubes.forEach((tube) => {
      if (tube.no >= form.start_tube_no && tube.no <= form.end_tube_no) {
        tube.length = form.tube_length;
        tube.material_density = this.mast.tube_material_density;
        tube.material_e = this.mast.tube_material_e;
        tube.yield_strength = this.mast.tube_yield_strength;
        tube.ultimate_strength = this.mast.tube_ultimate_strength;
        tube.circularArea = this.setCircularArea(tube);
        tube.circularMomentOfInertia = this.setCircularMomentOfInertia(tube);
        tube.mass_per_m = this.calculateMass(tube, 1);
        tube.mass = this.calculateMass(
          tube,
          form.tube_length / 1e3
        );
        tube.moment_capacity_at_yield_strength_Nm = tube.yield_strength * tube.inertia_mm4 * 1e-12 / (tube.od / 2e3);
        tube.moment_capacity_at_ultimate_strength_Nm = tube.ultimate_strength * tube.inertia_mm4 * 1e-12 / (tube.od / 2e3);
        tube.shear_capacity_at_yield_strength_N = tube.yield_strength * tube.inertia_mm4 * tube.od / (this.findQ(tube) * 1e9);
        tube.shear_capacity_at_ultimate_strength_N = tube.ultimate_strength * tube.inertia_mm4 * tube.od / (this.findQ(tube) * 1e9);
        tube.EI_Nm2 = tube.material_e * tube.inertia_mm4 * 1e-12;
        tube.config_suffix = "IB";
        if (tube.no === form.start_tube_no) {
          tube.config_suffix = "T";
        }
        if (this.mast.noOfTubes > 3 && tube.no === form.start_tube_no + 1) {
          tube.config_suffix = "TM";
        }
        if (this.mast.noOfTubes > 3 && tube.no === form.end_tube_no - 1) {
          tube.config_suffix = "BP";
        }
        if (this.mast.noOfTubes === 3 && tube.no === form.end_tube_no - 1) {
          tube.config_suffix = "IB";
        }
        if (tube.no === form.end_tube_no) {
          tube.config_suffix = "B";
        }
        this.mast.tubes.push(tube);
      }
    });
  }
  static setZPositions(form) {
    let ezb, ezt, nzb, nzt;
    this.mast.tubes.forEach((tube, index2) => {
      if (index2 === 0) {
        ezt = this.mast.extendedHeight - form.payload_adapter_height;
        ezb = ezt - tube.length;
        nzt = this.mast.nestedHeight - form.payload_adapter_height;
        nzb = nzt - tube.length;
      } else {
        ezt = ezb + form.overlap;
        ezb = ezt - tube.length;
        nzt = nzt - form.head_height;
        nzb = nzt - tube.length;
      }
      this.mast.tubes[index2].nested_zb = nzb;
      this.mast.tubes[index2].nested_zt = nzt;
      this.mast.tubes[index2].extended_zb = ezb;
      this.mast.tubes[index2].extended_zt = ezt;
    });
  }
  static setCircularArea(tube) {
    return Math.PI * tube.od * tube.thk;
  }
  static setCircularMomentOfInertia(tube) {
    return Math.PI * (tube.od ** 4 - tube.id ** 4) / 64;
  }
  static calculateMass(tube, length) {
    return tube.area_mm2 * length * tube.material_density / 1e6;
  }
  static findQ(tube) {
    let q = (Math.pow(tube.od / 2, 3) - Math.pow(tube.id / 2, 3)) / 6;
    return q;
  }
  static setExtendedHeight(form) {
    this.mast.extendedHeight = this.mast.noOfTubes * form.tube_length - (this.mast.noOfTubes - 1) * form.overlap + form.payload_adapter_height + form.base_adapter_height;
  }
  static setNestedHeight(form) {
    this.mast.nestedHeight = form.tube_length + (this.mast.noOfTubes - 1) * form.head_height + form.payload_adapter_height + form.base_adapter_height;
  }
  static setMastSections(form) {
    let new_index_no;
    this.mast.sections = [];
    this.mast.moments = [];
    this.mast.tubes.forEach((tube, index2) => {
      new_index_no = this.mast.tubes.length - index2 - 1;
      if (tube.config_suffix === "T") {
        this.mast.sections[new_index_no] = {
          section_no: new_index_no,
          tube_no: tube.no,
          config_suffix: tube.config_suffix,
          z_top: this.mast.extendedHeight,
          z_bottom: tube.extended_zb + form.overlap,
          wind_load: {
            z: tube.extended_zt - (tube.length - form.overlap) / 2,
            load: 0
            // TODO: Calculate wind load,
          },
          tip_load: {
            z: this.mast.extendedHeight,
            load: -this.mast.payload.wind_load
            // TODO: Calculate tip load,
          }
        };
        this.mast.moments.push({
          z: this.mast.extendedHeight
        });
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
        this.mast.moments.push({
          z: tube.extended_zt
        });
        this.mast.moments.push({
          z: form.side_adapter_z
        });
        this.mast.moments.push({
          z: 0
        });
      }
      if (["TM", "BP", "IB"].includes(tube.config_suffix)) {
        this.mast.sections[new_index_no] = {
          section_no: new_index_no,
          tube_no: tube.no,
          config_suffix: tube.config_suffix,
          z_top: tube.extended_zt,
          z_bottom: tube.extended_zt - tube.length + form.overlap,
          wind_load: {
            z: tube.extended_zt - (tube.length - form.overlap) / 2,
            load: 0
            // TODO: Calculate wind load,
          }
        };
        this.mast.moments.push({
          z: tube.extended_zt
        });
      }
    });
  }
  static productNaming(form) {
    this.mast.product_code = Math.round(this.mast.extendedHeight / 1e3, 0) + form.mast_type + "-" + (this.mast.nestedHeight / 1e3).toFixed(1) + "-" + this.mast.noOfTubes;
  }
  static calculateWindLoadsOnTubes(form) {
    const terrain = config.terrain_category.find(
      (cat) => cat.no === form.terrain_category
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
      this.mast.sections[i].mean_wind_speed_Vm = this.mast.sections[i].roughness_factor_Cr_at_Ze * form.wind_speed / 3.6;
      this.mast.sections[i].turbulence_intensity_TI = 1 / (1 * Math.log(
        this.mast.sections[i].max_height / terrain.z0
      ));
      this.mast.sections[i].basic_velocity_pressure_q = 0.5 * config.air_density * Math.pow(form.wind_speed / 3.6, 2);
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
          force_coefficent = temp_force_coefficient;
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
  static setPayloadParameters(form) {
    this.mast.payload = {
      wind_load_z: null,
      wind_load: null,
      width: null,
      height: null
    };
    this.mast.payload.wind_load_z = this.mast.extendedHeight + Math.sqrt(form.sail_area * 1e6) / 2;
    this.mast.payload.wind_load = -0.5 * config.air_density * config.drag_coefficient_Cd * Math.pow(form.wind_speed / 3.6, 2) * form.sail_area;
    this.mast.payload.width = Math.pow(form.sail_area, 0.5) * 1e3;
    this.mast.payload.height = this.mast.payload.width;
  }
  static getMastTipMoments(form) {
    this.mast.sections.at(-1).tip_load.moment_z_offset = this.mast.payload.wind_load * form.z_offset / 1e3;
    const moment_z_offset = this.mast.payload.wind_load * form.z_offset / 1e3;
    this.mast.sections.at(-1).tip_load.moment_x_offset = 9.81 * form.payload_mass * form.x_offset / 1e3;
    const moment_x_offset = -9.81 * form.payload_mass * form.x_offset / 1e3;
    this.mast.allowed_tip_deflection_mm = 0.01 * form.tip_deflection_percentage * this.mast.extendedHeight / 100;
    let deflection_weight = form.payload_mass + 0.2 * this.mast.mass.lifted;
    this.mast.sections.at(-1).tip_load.moment_due_deflection = 9.81 * deflection_weight * this.mast.allowed_tip_deflection_mm / 1e3;
    const moment_due_deflection = -9.81 * deflection_weight * this.mast.allowed_tip_deflection_mm / 1e3;
    this.mast.sections.at(-1).tip_load.moment_tip_total = this.mast.sections.at(-1).tip_load.moment_z_offset + this.mast.sections.at(-1).tip_load.moment_x_offset + this.mast.sections.at(-1).tip_load.moment_due_deflection;
    const moment_tip_total = moment_z_offset + moment_x_offset + moment_due_deflection;
    let foundZ = this.mast.moments.find((m) => m.z === this.mast.extendedHeight);
    this.mast.tip_moment = {
      moment_z_offset,
      moment_x_offset,
      moment_due_deflection,
      moment_tip_total
    };
    if (foundZ) {
      foundZ.moment_z_offset = moment_z_offset;
      foundZ.moment_x_offset = moment_x_offset;
      foundZ.moment_due_deflection = moment_due_deflection;
      foundZ.moment_tip_total = moment_tip_total;
    }
  }
  static massEstimation(form) {
    switch (form.mast_type) {
      case "MTNX":
        this.massEstimationMTNX(form);
        break;
      case "MTWR":
        this.massEstimationMTWR();
        break;
    }
  }
  static massEstimationMTNX(form) {
    this.mast.mass = {
      total: 0,
      lifted: 0
    };
    this.mast.tubes.forEach((tube, i) => {
      this.mast.mass.total += tube.mass;
      if (tube.config_suffix !== "B") {
        this.mast.mass.lifted += tube.mass;
      }
      this.mast.mass.total += config.weights.fixed_top_flange["C" + tube.no];
      if (tube.config_suffix !== "B") {
        this.mast.mass.lifted += config.weights.fixed_top_flange["C" + tube.no];
      }
      if (tube.config_suffix === "IB") {
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
        this.mast.mass.total += mtnx_bom.motors.find(
          (g) => g.id === form.motor_id
        )?.mass_kg;
        this.mast.mass.total += mtnx_bom.gearboxes.find(
          (g) => g.id === form.gearbox_id
        )?.mass_kg;
      }
    });
  }
  static massEstimationMTWR() {
  }
  static drivePowerEstimation(form) {
    let thread_angle = Math.atan(
      config.screw_lead / (Math.PI * config.screw_nominal_diameter)
    );
    let secant = 1 / Math.cos(thread_angle);
    this.mast.driveline = {
      total_load_to_lift: (form.payload_mass + this.mast.mass.lifted) * 9.81,
      thread_angle,
      // Thread angle in radians
      secant
    };
    this.mast.driveline.torque_required_to_extend_mast_Nm = 0.5 * this.mast.driveline.total_load_to_lift * config.screw_nominal_diameter * (config.screw_lead + Math.PI * config.screw_coefficient_of_friction * config.screw_nominal_diameter * secant) / (Math.PI * config.screw_nominal_diameter - config.screw_coefficient_of_friction * config.screw_lead * secant) / 1e3;
    this.mast.driveline.motor_power = mtnx_bom.motors.find(
      (g) => g.id === form.motor_id
    )?.power_kW;
    this.mast.driveline.motor_rpm = mtnx_bom.motors.find(
      (g) => g.id === form.motor_id
    )?.max_speed_rpm;
    this.mast.driveline.motor_torque = 9550 * this.mast.driveline.motor_power / this.mast.driveline.motor_rpm;
    this.mast.driveline.lifting_torque = this.mast.driveline.motor_torque * mtnx_bom.gearboxes.find(
      (g) => g.id === form.gearbox_id
    )?.gear_ratio;
    this.mast.driveline.gearbox_ratio = mtnx_bom.gearboxes.find(
      (g) => g.id === form.gearbox_id
    )?.gear_ratio;
    this.mast.driveline.screw_rpm = this.mast.driveline.motor_rpm / this.mast.driveline.gearbox_ratio;
    this.mast.driveline.vertical_speed = this.mast.driveline.screw_rpm * config.screw_lead / 1e3;
    this.mast.driveline.total_travel_length_m = (this.mast.extendedHeight - this.mast.nestedHeight) / 1e3;
    this.mast.driveline.time_to_extend_seconds = 1.15 * 60 * this.mast.driveline.total_travel_length_m / this.mast.driveline.vertical_speed;
  }
  static setBeamControlHeights(form) {
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
        M_w_adapter: 0
      });
    };
    this.mast.sections.forEach((section, index2) => {
      this.mast.sections[index2].control_points = [];
      if (index2 === 0) {
        addControlPoint(section.z_bottom, index2);
        addControlPoint(section.wind_load.z, index2);
        addControlPoint(form.side_adapter_z, index2);
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
  static runVibrationAnalysis(form) {
    const analyzer2 = new MastVibration({
      tubes: this.mast.tubes,
      tip_mass: form.payload_mass,
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
  }
  /*
  DEFLECTION CALCULATIONS
  */
  static findInternalMomentAtZ(z, form, hasSideAdapter = false) {
    let internal_moment = this.mast.tip_moment.moment_tip_total;
    internal_moment += this.mast.payload.wind_load * (this.mast.extendedHeight - z) / 1e3;
    this.mast.sections.forEach((section) => {
      if (section.wind_load.z >= z) {
        internal_moment += section.wind_load.load * (section.wind_load.z - z) / 1e3;
      }
    });
    if (hasSideAdapter && form.side_adapter_z >= z) {
      internal_moment += this.mast.side_reaction * (form.side_adapter_z - z) / 1e3;
    }
    if (hasSideAdapter) {
      console.log("internal_moment", this.mast.side_reaction, internal_moment);
    }
    return internal_moment;
  }
  static findInternalShearAtZ(z, form, hasSideAdapter = false) {
    let all_loads = [];
    this.mast.sections.forEach((section) => {
      all_loads.push(section.wind_load);
    });
    all_loads.push({
      z: this.mast.extendedHeight,
      load: this.mast.payload.wind_load
    });
    if (hasSideAdapter) {
      all_loads.push({
        z: form.side_adapter_z,
        load: this.mast.side_reaction
      });
    }
    console.log("all_loads", all_loads, z);
    let v_left = (all_loads2, z2) => {
      return all_loads2.filter((l) => l.z >= z2).reduce((sum, l) => sum + l.load, 0);
    };
    let v_right = (all_loads2, z2) => {
      return all_loads2.filter((l) => l.z > z2).reduce((sum, l) => sum + l.load, 0);
    };
    return { left: -v_left(all_loads, z), right: -v_right(all_loads, z) };
  }
  static findBeamMoments(form, hasSideAdapter = false) {
    this.mast.sections.forEach((section) => {
      section.control_points.forEach((point) => {
        point.M_wo_adapter = this.findInternalMomentAtZ(point.z, form, false);
        const shear = this.findInternalShearAtZ(point.z, form);
        point.V_wo_adapter_left = shear.left;
        point.V_wo_adapter_right = shear.right;
      });
    });
    this.mast.sections.forEach((section) => {
      section.control_points.forEach((point) => {
        point.M_EI_wo_adapter = point.M_wo_adapter / point.EI;
      });
    });
    return true;
  }
  static findDeflection(form) {
    this.mast.deflections = {
      "wo_adapter": [],
      "w_adapter": []
    };
    this.mast.sections.forEach((section) => {
      section.control_points.forEach((point) => {
        this.mast.deflections.wo_adapter.push({
          x: point.z,
          y: this.calculateAreaAndCentroid(point.z)
        });
      });
    });
    this.findSideReaction(form);
    this.mast.sections.forEach((section) => {
      section.control_points.forEach((point) => {
        point.M_w_adapter = this.findInternalMomentAtZ(point.z, form, true);
      });
    });
    const ground_reaction_w_adapter = this.findInternalShearAtZ(0, form, true);
    this.mast.ground_reaction_w_adapter = ground_reaction_w_adapter.right;
  }
  static findSideReaction(form) {
    let deflection = this.mast.deflections.wo_adapter.find((x) => x.x === form.side_adapter_z).y / 1e3;
    let ei = this.mast.tubes.at(-1).EI_Nm2;
    this.mast.side_reaction = -(deflection * 3 * ei) / Math.pow(form.side_adapter_z / 1e3, 3);
    return true;
  }
  static calculateAreaAndCentroid(xLimit) {
    let mei_points = {};
    this.mast.sections.forEach((section, key) => {
      mei_points[key] = [];
      section.control_points.forEach((point) => {
        mei_points[key].push(point);
      });
    });
    Object.keys(this.mast.graph.M_EI_wo_adapter).sort((a, b) => Number(a) - Number(b));
    const sectionKeys = Object.keys(mei_points).sort((a, b) => Number(a) - Number(b));
    let total_deflection_mm = 0;
    for (const key of sectionKeys) {
      const points = mei_points[key];
      console.log("sectionKeys points", points);
      if (points[0].z >= xLimit) {
        continue;
      }
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        if (p1.z >= xLimit) break;
        let xStart = p1.z;
        let xEnd = p2.z;
        let yStart = p1.M_EI_wo_adapter;
        let yEnd = p2.M_EI_wo_adapter;
        if (xLimit < xEnd) {
          xEnd = xLimit;
          const fraction = (xLimit - p1.z) / (p2.z - p1.z);
          yEnd = p1.M_EI_wo_adapter + fraction * (p2.M_EI_wo_adapter - p1.M_EI_wo_adapter);
        }
        const width = xEnd - xStart;
        if (width <= 0) continue;
        const segmentArea = (yStart + yEnd) / 2 * width / 1e3;
        const localCentroidX = xStart + width * (yStart + 2 * yEnd) / (3 * (yStart + yEnd));
        console.log("a. xStart, xEnd, yStart, yEnd", points[i].z, xEnd, yStart, yEnd);
        console.log("b.segmentArea, localCetroidX", segmentArea, localCentroidX);
        total_deflection_mm += segmentArea * (xLimit - localCentroidX);
        if (xEnd === xLimit) break;
      }
    }
    return total_deflection_mm;
  }
  static setGraphData() {
    let m_wo_adapter = (sections) => {
      return sections.flatMap(
        (s) => s.control_points.map((cp) => ({ z: cp.z, M_wo_adapter: cp.M_wo_adapter }))
      );
    };
    let m_w_adapter = (sections) => {
      return sections.flatMap(
        (s) => s.control_points.map((cp) => ({ z: cp.z, M_w_adapter: cp.M_w_adapter }))
      );
    };
    let mei_wo_adapter = {};
    this.mast.sections.forEach((section, key) => {
      mei_wo_adapter[key] = [];
      section.control_points.forEach((point) => {
        mei_wo_adapter[key].push({
          x: point.z,
          // Height/Position (z) on the horizontal axis
          y: point.M_EI_wo_adapter
          // M/EI ratio on the vertical axis
        });
      });
    });
    this.mast.graph = {
      "moment_wo_adapter": m_wo_adapter(this.mast.sections),
      "moment_w_adapter": m_w_adapter(this.mast.sections),
      "M_EI_wo_adapter": mei_wo_adapter
    };
  }
  /*
  BOM GENERATION
  */
  static setBOM(form) {
    let kamaSayisi = 0;
    this.mast.sections.forEach((section, index2) => {
      if (section.config_suffix === "B") {
        const foundBaseStructure = mtnx_bom.base_structure.find((bomitem) => {
          return parseInt(bomitem.tube_no) === parseInt(section.tube_no);
        });
        foundBaseStructure.quantity = 1;
        this.mast.bom.push(foundBaseStructure);
      }
      this.mast.bom.push({
        config_no: section.config_suffix,
        tube_no: section.tube_no,
        name: "Masttech Yuvarlak Boru Profili : MT-" + section.tube_no,
        mass_kg: 0.5,
        part_number: "MT-" + section.tube_no + "-" + section.config_suffix,
        material: "Aluminium",
        quantity: 1
      });
      const foundHeadFlange = mtnx_bom.fixed_top_flange.find((bomitem) => {
        return parseInt(bomitem.tube_no) === parseInt(section.tube_no) && bomitem.config_no === section.config_suffix;
      });
      const headFlange = structuredClone(foundHeadFlange);
      headFlange.quantity = 1;
      headFlange.material = "6061 T6";
      headFlange.part_number = foundHeadFlange.part_number + "-" + section.tube_no + "-" + section.config_suffix;
      this.mast.bom.push(headFlange);
      if (section.config_suffix !== "T") {
        const foundTube = this.mast.tubes.find((tube) => parseInt(tube.no) === parseInt(section.tube_no));
        kamaSayisi += foundTube.channel_number;
      }
      if (section.config_suffix !== "B" && section.config_suffix !== "BP") {
        const foundLip = mtnx_bom.lock_lip.find((bomitem) => {
          return parseInt(bomitem.tube_no) === parseInt(section.tube_no);
        });
        if (foundLip) {
          const lockLip = structuredClone(foundLip);
          lockLip.part_number = foundLip.part_number + "-" + section.tube_no;
          lockLip.quantity = 4;
          this.mast.bom.push(lockLip);
        }
      }
      if (section.config_suffix != "B") {
        const foundNutFrame = mtnx_bom.nut_frames.find((nframe) => {
          return nframe.tube_no === parseInt(section.tube_no);
        });
        const nutFrame = structuredClone(foundNutFrame);
        nutFrame.part_number = foundNutFrame.part_number + "-" + section.tube_no;
        nutFrame.quantity = 1;
        nutFrame.material = "-";
        this.mast.bom.push(nutFrame);
      }
      if (section.config_suffix !== "B" && section.config_suffix !== "T") {
        const foundTube = this.mast.tubes.find((tube) => parseInt(tube.no) === parseInt(section.tube_no));
        const foundUpperKeyLong = mtnx_bom.upper_keys.find((ukey) => {
          return ukey.tube_no === parseInt(section.tube_no) && ukey.config_suffix === "L";
        });
        const foundUpperKeyShort = mtnx_bom.upper_keys.find((skey) => {
          return skey.tube_no === parseInt(section.tube_no) && skey.config_suffix === "S";
        });
        if (foundTube.channel_number == 8) {
          const upperKeyL = structuredClone(foundUpperKeyLong);
          upperKeyL.part_number = foundUpperKeyLong.part_number + "-" + section.tube_no + "L";
          upperKeyL.quantity = 2;
          this.mast.bom.push(upperKeyL);
          const upperKeyS = structuredClone(foundUpperKeyShort);
          upperKeyS.part_number = foundUpperKeyShort.part_number + "-" + section.tube_no + "S";
          upperKeyS.quantity = 2;
          this.mast.bom.push(upperKeyS);
        }
        if (foundTube.channel_number === 4) {
          const upperKeyS = structuredClone(foundUpperKeyShort);
          upperKeyS.part_number = foundUpperKeyShort.part_number + "-" + section.tube_no;
          upperKeyS.quantity = 4;
          this.mast.bom.push(upperKeyS);
        }
      }
      if (section.config_suffix !== "T") {
        const foundIceBreaker = mtnx_bom.ice_breakers.find((ib) => {
          return ib.tube_no === parseInt(section.tube_no);
        });
        const iceBreaker = structuredClone(foundIceBreaker);
        iceBreaker.part_number = foundIceBreaker.part_number + "-" + section.tube_no;
        iceBreaker.quantity = 1;
        iceBreaker.material = "-";
        this.mast.bom.push(iceBreaker);
      }
      const lockKey = structuredClone(mtnx_bom.lock_key);
      lockKey.quantity = 4 * (this.mast.noOfTubes - 2);
      this.mast.bom.push(lockKey);
      const lockMechanism = structuredClone(mtnx_bom.lock_mechanism);
      lockMechanism.quantity = 4 * (this.mast.noOfTubes - 2);
      this.mast.bom.push(lockMechanism);
      if (section.config_suffix === "T") {
        const foundPayloadAdapter = mtnx_bom.payload_adapters.find((pa) => {
          return pa.tube_no === parseInt(section.tube_no);
        });
        const payloadAdapter = structuredClone(foundPayloadAdapter);
        payloadAdapter.part_number = foundPayloadAdapter.part_number + "-" + section.tube_no;
        payloadAdapter.quantity = 1;
        this.mast.bom.push(payloadAdapter);
        const foundEulerFixer = mtnx_bom.euler_fixers.find((ef) => {
          return ef.tube_no === parseInt(section.tube_no);
        });
        const eulerFixer = structuredClone(foundEulerFixer);
        eulerFixer.part_number = foundEulerFixer.part_number + "-" + section.tube_no;
        eulerFixer.quantity = 1;
        this.mast.bom.push(eulerFixer);
      }
    });
    const gearbox = structuredClone(mtnx_bom.gearboxes.find((g) => g.id === form.gearbox_id));
    gearbox.quantity = 1;
    gearbox.name = "Gear Box " + gearbox.name;
    this.mast.bom.push(gearbox);
    const motor = structuredClone(mtnx_bom.motors.find((g) => g.id === form.motor_id));
    motor.quantity = 1;
    motor.name = "Motor " + motor.name;
    this.mast.bom.push(motor);
    let kama = {};
    kama.quantity = kamaSayisi;
    kama.material = mtnx_bom.kama.material;
    kama.name = mtnx_bom.kama.name + " [ Length=" + this.mast.kama_length + " ]";
    kama.part_number = mtnx_bom.kama.part_number + "-" + this.mast.kama_length;
    this.mast.bom.push(kama);
  }
  /*
  SVG GENERATION : LOADS, NESTED, EXTENDED
  */
  static svgDraw(form, drawState) {
    const ground_h = 200;
    const svg = {
      box: {
        w: 0,
        h: 0
      },
      mast: {
        height: drawState === "Extended" || drawState === "Loads" ? this.mast.extendedHeight : this.mast.nestedHeight
      },
      ground: {},
      payload: {},
      cop: {
        x: 0,
        y: 0,
        dia: 50
      },
      tubes: [],
      payload_adapter: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      side_adapter: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      }
    };
    switch (drawState) {
      case "Loads":
        svg.box.h = Math.floor(Math.pow(form.sail_area, 0.5) * 1e3 + this.mast.extendedHeight + 1.4 * ground_h);
        svg.box.w = Math.floor(16 * svg.box.h / 19);
        break;
      case "Extended":
        svg.box.h = this.mast.extendedHeight + 1.4 * ground_h;
        svg.box.w = Math.floor(16 * svg.box.h / 19);
        break;
      case "Nested":
        svg.box.h = this.mast.nestedHeight + 1.4 * ground_h;
        svg.box.w = Math.floor(16 * svg.box.h / 19);
        break;
    }
    svg.ground = {
      x: -svg.box.w / 2,
      y: 0,
      w: svg.box.w,
      h: ground_h,
      reaction_w_adapter: this.mast.ground_reaction_w_adapter
    };
    svg.payload = {
      x: -(this.mast.payload.width / 2 - form.x_offset),
      y: drawState === "Extended" || drawState === "Loads" ? this.mast.extendedHeight + ground_h : this.mast.nestedHeight + ground_h,
      w: this.mast.payload.width,
      h: this.mast.payload.height,
      weight: 9.81 * form.payload_mass
    };
    svg.cop = {
      x: form.x_offset,
      y: this.mast.payload.wind_load_z + ground_h,
      z_value: this.mast.payload.wind_load_z,
      load: this.mast.payload.wind_load
    };
    svg.tubes = [];
    this.mast.sections.forEach((section) => {
      let foundTube = this.mast.tubes.find((tube) => tube.no === section.tube_no);
      if (foundTube.config_suffix === "T") {
        svg.payload_adapter = {
          x: -0.8 * foundTube.od,
          y: drawState === "Extended" || drawState === "Loads" ? this.mast.extendedHeight + ground_h - form.payload_adapter_height : this.mast.nestedHeight + ground_h - form.payload_adapter_height,
          w: 1.6 * foundTube.od,
          h: form.payload_adapter_height
        };
      }
      svg.tubes.push({
        x: -foundTube.od / 2,
        y: drawState === "Extended" || drawState === "Loads" ? foundTube.extended_zb + ground_h : foundTube.nested_zb + ground_h,
        w: foundTube.od,
        h: foundTube.length,
        load_z: section.wind_load.z,
        load_value: section.wind_load.load,
        zb: drawState === "Extended" || drawState === "Loads" ? foundTube.extended_zb : foundTube.nested_zb,
        zt: drawState === "Extended" || drawState === "Loads" ? foundTube.extended_zt : foundTube.nested_zt
      });
      if (foundTube.config_suffix === "B") {
        svg.side_adapter = {
          x: 0,
          y: foundTube.nested_zt - form.overlap / 2,
          load: this.mast.side_reaction,
          points: [
            { x: -0.7 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.2 * form.overlap },
            { x: 2.5 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.2 * form.overlap },
            { x: 2.5 * foundTube.od, y: ground_h },
            { x: 1.4 * foundTube.od, y: ground_h },
            { x: 1.4 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.8 * form.overlap },
            { x: -0.7 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.8 * form.overlap },
            { x: -0.7 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.2 * form.overlap }
          ]
        };
      }
    });
    return svg;
  }
}
var root_2 = from_html(`<td colspan="2" class="is-success">Available Torque <strong> </strong> > Required Torque <strong> </strong> Nm</td>`);
var root_3 = from_html(`<td colspan="2" class="is-danger is-light">Available Torque <strong> </strong> <span class="has-text-danger"><strong>&lt;</strong></span> Required Torque <strong> </strong> Nm</td>`);
var root_5 = from_html(`<tr><td></td><td class="has-text-right"> </td><td class="has-text-right has-background-grey-lighter has-text-weight-bold"> </td><td class="has-text-right"> </td></tr>`);
var root_4 = from_html(`<table class="table is-bordered is-striped is-hoverable is-fullwidth"><thead><tr><th>Mode</th><th>Weak</th><th>Frequency</th><th>Strong</th></tr></thead><tbody></tbody></table>`);
var root_6 = from_html(`<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>`);
var root_7 = from_html(`<tr><th class="is-4"> </th><td> </td></tr>`);
var root_1 = from_html(`<section class="section"><div class="columns"><div class="column is-8"><!></div> <div class="column has-text-right has-text-left-mobile"><button class="button is-link is-light" data-tooltip="Mast Parameters"><span class="icon is-small"><!></span></button> <a href="/pdm/engineering/profiles_table" class="button is-link is-light ml-6" data-tooltip="Profiles Table"><span class="icon is-small"><!></span></a> <button class="button is-link is-light" data-tooltip="Mast Options Table"><span class="icon is-small"><!></span></button></div></div> <!> <div class="columns"><div class="column is-half"><!></div> <div class="column has-text-right has-text-left-mobile"><button class="button is-link is-light" data-tooltip="Code2CAD"><span class="icon is-small"><!></span></button> <button class="button is-link is-light" data-tooltip="Toggle JSON Editor"><span class="icon is-small"><!></span></button> <button class="button is-link is-light" data-tooltip="Generate PDF"><span class="icon is-small"><!></span></button></div></div> <form novalidate="" id="genericForm" class="my-6"><div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div> <div class="cell"><!></div></div></div> <div class="fixed-grid has-4-cols has-1-cols-mobile"><div class="grid"><div class="cell"><!></div></div></div></form> <div class="card has-background-white-ter py-2 my-4"><nav class="level"><div class="level-item has-text-centered"><div><p class="heading mb-0">Extended Height</p> <p class="title mb-0"> </p> <p class="heading">mm</p></div></div> <div class="level-item has-text-centered"><div><p class="heading mb-0">Nested Height</p> <p class="title mb-0"> </p> <p class="heading">mm</p></div></div> <div class="level-item has-text-centered"><div><p class="heading mb-0">Wind Load on Payload</p> <p class="title mb-0"> </p> <p class="heading">N</p></div></div> <div class="level-item has-text-centered"><div><p class="heading mb-0">Lifted Mass / Total Mast Mass</p> <p class="title mb-0"> </p> <p class="heading">kg</p></div></div></nav></div> <nav class="navbar has-background-info-light mb-2 mt-6"><div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><button class="navbar-item" id="tabLoads"><span class="icon"><!></span> <span>Loads</span></button> <button class="navbar-item is-light is-inverted" id="tabBM"><span class="icon"><!></span> <span>Moments</span></button> <button class="navbar-item is-light is-inverted" id="tabDeflection"><span class="icon"><!></span> <span>Deflections</span></button> <button class="navbar-item is-light is-inverted" id="tabExtended"><span class="icon"><!></span> <span>Extended</span></button> <button class="navbar-item is-light is-inverted" id="tabNested"><span class="icon"><!></span> <span>Nested</span></button> <button class="navbar-item is-light is-inverted" id="tabTorque"><span class="icon"><!></span> <span>Torque/Power</span></button> <button class="navbar-item is-light is-inverted" id="tabVibration"><span class="icon"><!></span> <span>Frequencies</span></button> <button class="navbar-item is-light is-inverted" id="tabBOM"><span class="icon"><!></span> <span>BOM</span></button></div></div></nav> <div class="card p-4"><div class="container m-0" id="fixedWidth"></div> <div class="container" id="divLoads"><!></div> <div class="container is-hidden" id="divBM"><canvas></canvas></div> <div class="container is-hidden" id="divDeflection"><canvas></canvas></div> <div class="container is-hidden" id="divExtended"><!></div> <div class="container is-hidden" id="divNested"><!></div> <div class="container is-hidden" id="divTorque"><table class="table is-fullwidth is-striped"><tbody><tr><th>Screw Data</th><td><table class="table is-fullwidth is-striped mt-2"><tbody><tr><th>Screw Nominal Diameter [mm]</th><td> </td></tr><tr><th>Screw Lead [mm]</th><td> </td></tr><tr><th>Coefficient of Friction
                                                [Steel-Bronze]</th><td> </td></tr></tbody></table></td></tr><tr><th>Minimum Torque Required to Extend Mast<br/> <span class="has-text-weight-normal has-text-success"> </span></th><td><table class="table is-fullwidth is-striped mt-2"><tbody><tr><th>Selected Motor Power</th><td> </td></tr><tr><th>Selected Motor Maximum Speed</th><td> </td></tr><tr><th>Selected Motor Output Torque</th><td> </td></tr><tr><th>Total Driveline Speed Reduction
                                                Ratio</th><td> </td></tr><tr><th>Screw Speed</th><td> <br/> </td></tr><tr><th>Time to Extend Mast [Estimated]</th><td> </td></tr><tr><th>Minimum Torque Required to
                                                Extend Mast</th><td> </td></tr><tr><th>Total Torque at Screw End</th><td> </td></tr><tr><!><!></tr></tbody></table></td></tr></tbody></table></div> <div class="container is-hidden" id="divVibration"><!> <a href="https://www.youtube.com/shorts/PJXdibF6fKk" target="_blank">Watch Video</a> <div class="fixed-grid has-1-cols-mobile"><div class="grid"><div class="cell"><img src="/images/PDM/ModeShapes.png" alt="Mode Shapes"/></div> <div class="cell"><!></div></div></div></div> <div class="container is-hidden" id="divBOM"><!> <table class="table is-fullwidth"><thead><tr><th>Part Number</th><th>Name</th><th>Material</th><th>Quantity</th><th>Mass (kg)</th><th>Part Number</th></tr></thead><tbody></tbody></table></div></div> <div id="jsonModal"><button type="button" id="jsonModal" aria-label="close"></button> <div class="modal-content"><pre>
                  
                  <!>
                </pre></div> <button class="modal-close is-large" aria-label="close"></button></div> <div id="infoGraphicModal"><button type="button" id="infoGraphicModal" aria-label="close"></button> <div class="modal-content has-background-white p-6"><!> <p class="image"><img src="/images/PDM/MastParameters.png" alt="Description of mast parameters"/></p> <!> <table class="table is-fullwidth"><thead><tr><th>No</th><th>Description</th></tr></thead><tbody></tbody></table> <!> <article class="message is-info"><!> <div class="message-body">Dynamic pressure formula is used to calculate wind load
                        on payloads.</div></article> <article class="message is-info"><!> <div class="message-body"><p>Eurocode 1: Actions on structures - Part 1-4:
                            General actions - Wind actions</p> <p><a href="https://www.phd.eng.br/wp-content/uploads/2015/12/en.1991.1.4.2005.pdf">EN 1991-1-4:2005+A1:2010 Section 7.9.2</a> Cylindrical structures, isolated cylindrical elements</p> <p>All load calculations on mast sections are performed
                            per above document.</p> <p><a href="https://eurocodeapplied.com/design/en1991/wind-force-cylinder">Eurocode Implementation</a></p></div></article></div> <button class="modal-close is-large" aria-label="close"></button></div></section>`);
function Configurator2($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let chartCanvas;
  let chartDeflection;
  let chartInstance;
  let chartDeflectionInstance;
  let drawingContainer;
  let drawingWidth = state(0);
  let observer;
  function drawBMChart(data) {
    if (!chartCanvas) return;
    const ctx = chartCanvas.getContext("2d");
    const all_M_EI_values = Object.values(data.sections).flatMap((section) => Object.values(section).map((metrics) => metrics.M_EI));
    const min_EI = Math.min(...all_M_EI_values);
    const baseMomentData = Object.values(data.graph.moment_wo_adapter).map((point) => ({ x: point.z, y: point.M_wo_adapter }));
    const chartData = {
      datasets: [
        {
          label: "w/o Side Adapter (Nm)",
          data: baseMomentData,
          borderColor: "#D7263D",
          fill: true,
          yAxisID: "y"
        },
        {
          label: "w/ Side Adapter (Nm)",
          data: baseMomentData,
          borderColor: "#8FB339",
          yAxisID: "y"
        },
        // Correctly mapping the nested sections data
        ...Object.entries(data.graph.M_EI_wo_adapter).map(([sectionIndex, sectionData]) => {
          return {
            label: `M/EI S${sectionIndex}`,
            data: Object.values(sectionData).map((metrics) => ({ x: metrics.x, y: metrics.y })).sort((a, b) => a.x - b.x),
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
              max: 40 + get(results).extendedHeight,
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
    const max_deflection = data.deflection_data;
    const ctx = chartDeflection.getContext("2d");
    const chartData = {
      datasets: [
        {
          label: "Deflection w/o Side Adapter (mm)",
          data: data.deflections.wo_adapter,
          borderColor: "#D7263D",
          yAxisID: "y",
          tension: 0.35
        }
        // {
        //     label: "Deflection w/ Side Adapter (mm)",
        //     // 3. Map this dataset to its own independent { x, y } coordinates
        //     data: deflectionWAdapter.map((point) => ({
        //         x: point.height,
        //         y: point.deflection,
        //     })),
        //     borderColor: "#8FB339",
        //     yAxisID: "y",
        //     tension: 0.35,
        // },
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
    z_offset: 1,
    payload_mass: 400,
    motor_id: 1,
    gearbox_id: 1,
    tip_deflection_percentage: 75,
    side_adapter_z: null,
    mast_type: "MTNX",
    side_adapter_z: 2e3 + 50 - 500 / 2
  });
  onMount(() => {
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
    observer = new ResizeObserver(() => {
      set(drawingWidth, drawingContainer.clientWidth, true);
    });
    observer.observe(drawingContainer);
    set(drawingWidth, drawingContainer.clientWidth, true);
    return () => observer.disconnect();
  });
  user_effect(() => {
    const z = Math.round(1e3 * Math.sqrt($form().sail_area) / 2);
    if ($form().z_offset !== z) {
      store_mutate(form, untrack($form).z_offset = z, untrack($form));
    }
    const selectedMast = config["mast_types"].find((mast2) => mast2.value.toString() === $form().mast_type.toString());
    if ($form().head_height !== selectedMast?.head_height) {
      store_mutate(form, untrack($form).head_height = selectedMast?.head_height ?? null, untrack($form));
    }
    drawBMChart(get(results));
    drawDeflectionChart(get(results));
  });
  let results = user_derived(() => {
    return Configurator.calculate($form().data());
  });
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
    let pdf = new MakePDF(mast.data);
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
  let result = "";
  async function code2Cad() {
    try {
      const response = await fetch("/api/code2cad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          pnumber: "199234",
          mast: get(results),
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
        let $0 = user_derived(() => mtnx_bom.motors.map((motor) => ({
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
        let $0 = user_derived(() => mtnx_bom.gearboxes.map((gearbox) => ({ value: gearbox.id, label: `${gearbox.name}` })));
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
      var div_45 = child(div_44);
      bind_this(div_45, ($$value) => drawingContainer = $$value, () => drawingContainer);
      var div_46 = sibling(div_45, 2);
      var node_34 = child(div_46);
      MastDrawing(node_34, {
        get data() {
          return get(results).svg.loads;
        },
        drawState: "Loads",
        get width() {
          return get(drawingWidth);
        }
      });
      var div_47 = sibling(div_46, 2);
      var canvas = child(div_47);
      bind_this(canvas, ($$value) => chartCanvas = $$value, () => chartCanvas);
      var div_48 = sibling(div_47, 2);
      var canvas_1 = child(div_48);
      bind_this(canvas_1, ($$value) => chartDeflection = $$value, () => chartDeflection);
      var div_49 = sibling(div_48, 2);
      var node_35 = child(div_49);
      MastDrawing(node_35, {
        get data() {
          return get(results).svg.extended;
        },
        drawState: "Extended",
        get width() {
          return get(drawingWidth);
        }
      });
      var div_50 = sibling(div_49, 2);
      var node_36 = child(div_50);
      MastDrawing(node_36, {
        get data() {
          return get(results).svg.nested;
        },
        drawState: "Nested",
        get width() {
          return get(drawingWidth);
        }
      });
      var div_51 = sibling(div_50, 2);
      var table = child(div_51);
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
      var node_37 = child(tr_13);
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
              () => get(results).driveline.lifting_torque.toFixed(1),
              () => get(results).driveline.torque_required_to_extend_mast_Nm.toFixed(1)
            ]
          );
          append($$anchor3, td_13);
        };
        if_block(node_37, ($$render) => {
          if (get(results).driveline.lifting_torque > get(results).driveline.torque_required_to_extend_mast_Nm) $$render(consequent);
        });
      }
      var node_38 = sibling(node_37);
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
              () => get(results).driveline.lifting_torque.toFixed(1),
              () => get(results).driveline.torque_required_to_extend_mast_Nm.toFixed(1)
            ]
          );
          append($$anchor3, td_14);
        };
        if_block(node_38, ($$render) => {
          if (get(results).driveline.lifting_torque < get(results).driveline.torque_required_to_extend_mast_Nm) $$render(consequent_1);
        });
      }
      var div_52 = sibling(div_51, 2);
      var node_39 = child(div_52);
      Title(node_39, {
        title: "Resonance Frequencies",
        subtitle: "For pure cantilever beam with concentrated mass at the tip"
      });
      var div_53 = sibling(node_39, 4);
      var div_54 = child(div_53);
      var div_55 = sibling(child(div_54), 2);
      var node_40 = child(div_55);
      {
        var consequent_2 = ($$anchor3) => {
          var table_3 = root_4();
          var tbody_3 = sibling(child(table_3));
          each(tbody_3, 21, () => get(results).resonance_frequencies, index, ($$anchor4, mode, index2) => {
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
        if_block(node_40, ($$render) => {
          if (get(results).resonance_frequencies.length > 0) $$render(consequent_2);
        });
      }
      var div_56 = sibling(div_52, 2);
      var node_41 = child(div_56);
      Title(node_41, { title: "BOM", subtitle: "Bill of Materials" });
      var table_4 = sibling(node_41, 2);
      var tbody_4 = sibling(child(table_4));
      each(tbody_4, 21, () => get(results).bom, index, ($$anchor3, item) => {
        var tr_15 = root_6();
        var td_19 = child(tr_15);
        var text_24 = child(td_19);
        var td_20 = sibling(td_19);
        var text_25 = child(td_20);
        var td_21 = sibling(td_20);
        var text_26 = child(td_21);
        var td_22 = sibling(td_21);
        var text_27 = child(td_22);
        var td_23 = sibling(td_22);
        var text_28 = child(td_23);
        var td_24 = sibling(td_23);
        var text_29 = child(td_24);
        template_effect(() => {
          set_text(text_24, get(item).part_number);
          set_text(text_25, get(item).name);
          set_text(text_26, get(item).material);
          set_text(text_27, get(item).quantity);
          set_text(text_28, get(item).mass_kg);
          set_text(text_29, get(item).part_number);
        });
        append($$anchor3, tr_15);
      });
      var div_57 = sibling(div_44, 2);
      var button_13 = child(div_57);
      var div_58 = sibling(button_13, 2);
      var pre = child(div_58);
      var node_42 = sibling(child(pre));
      JsonTree(node_42, {
        get data() {
          return get(results);
        }
      });
      var button_14 = sibling(div_58, 2);
      var div_59 = sibling(div_57, 2);
      var button_15 = child(div_59);
      var div_60 = sibling(button_15, 2);
      var node_43 = child(div_60);
      Title(node_43, { title: "Definition of Parameters Used" });
      var node_44 = sibling(node_43, 4);
      Title(node_44, { title: "Terrain Categories" });
      var table_5 = sibling(node_44, 2);
      var tbody_5 = sibling(child(table_5));
      each(tbody_5, 21, () => config.terrain_category, index, ($$anchor3, terrain) => {
        var tr_16 = root_7();
        var th_1 = child(tr_16);
        var text_30 = child(th_1);
        var td_25 = sibling(th_1);
        var text_31 = child(td_25);
        template_effect(() => {
          set_text(text_30, get(terrain).no);
          set_text(text_31, get(terrain).description);
        });
        append($$anchor3, tr_16);
      });
      var node_45 = sibling(table_5, 2);
      Title(node_45, { title: "Load Calculation Resources" });
      var article = sibling(node_45, 2);
      var node_46 = child(article);
      Title(node_46, { subtitle: "Wind Load on Payloads" });
      var article_1 = sibling(article, 2);
      var node_47 = child(article_1);
      Title(node_47, { subtitle: "Wind Load Circular Mast Sections" });
      var button_16 = sibling(div_60, 2);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) => {
          set_text(text, get(results).extendedHeight);
          set_text(text_1, get(results).nestedHeight);
          set_text(text_2, $0);
          set_text(text_3, `${$1 ?? ""} /
                            ${$2 ?? ""}`);
          set_text(text_4, $3);
          set_text(text_5, $4);
          set_text(text_6, $5);
          set_text(text_7, `[with ${$6 ?? ""} kg Lifted
                                    Mass]`);
          set_text(text_8, `${get(results).driveline.motor_power ?? ""}
                                                kW`);
          set_text(text_9, `${get(results).driveline.motor_rpm ?? ""} RPM`);
          set_text(text_10, `${$7 ?? ""} Nm`);
          set_text(text_11, get(results).driveline.gearbox_ratio);
          set_text(text_12, `${$8 ?? ""} RPM `);
          set_text(text_13, ` ${$9 ?? ""} m/min`);
          set_text(text_14, `${$10 ?? ""} seconds`);
          set_text(text_15, `${$11 ?? ""} Nm`);
          set_text(text_16, `${$12 ?? ""} Nm`);
          set_class(div_57, 1, `modal ${get(showJson) ? "is-active" : ""}`);
          set_class(button_13, 1, `modal-background ${get(showJson) ? "is-active" : ""}`);
          set_class(div_59, 1, `modal ${get(showInfoGraphic) ? "is-active" : ""}`);
          set_class(button_15, 1, `modal-background ${get(showInfoGraphic) ? "is-active" : ""}`);
        },
        [
          () => get(results).payload.wind_load.toFixed(0),
          () => get(results).mass.lifted.toFixed(0),
          () => get(results).mass.total.toFixed(0),
          () => config.screw_nominal_diameter.toFixed(2),
          () => config.screw_lead.toFixed(2),
          () => config.screw_coefficient_of_friction.toFixed(2),
          () => get(results).mass.lifted.toFixed(0),
          () => get(results).driveline.motor_torque.toFixed(2),
          () => get(results).driveline.screw_rpm.toFixed(1),
          () => get(results).driveline.vertical_speed.toFixed(3),
          () => get(results).driveline.time_to_extend_seconds.toFixed(0),
          () => get(results).driveline.torque_required_to_extend_mast_Nm.toFixed(2),
          () => get(results).driveline.lifting_torque.toFixed(2)
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
  Configurator2 as default
};
//# sourceMappingURL=Configurator2-DBxyJcGU.js.map
