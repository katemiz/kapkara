import { config } from "$modules/PDM/Shared/config.js";
import { mtnx_bom } from "$modules/PDM/Shared/mtnx_bom.js";


export default class Configurator {
    constructor(params) {
        this.params = params;
        this.mast = {
            bom: []
        };



        // SVG
        this.drawType = null;
        this.svgDiv = null;
        this.svgWidth = null;
        this.svgHeight = null;
        this.scale = null;
        this.vcline_x = null;
        this.vcline_info = null;

        //this.force_line_scale = 250 / this.mast.payload.wind_load;
    }

    run() {
        console.log("params", this.params);
        console.log("Config", config)

        this.setDependentProps();
        this.setMastTubes();

        this.setExtendedHeight();
        this.setNestedHeight();
        this.productNaming();
        this.setPayloadParameters();

        this.setMastSections();

        this.calculateWindLoadsOnTubes();


        this.massEstimation();

        this.getMastTipMoments();

        this.drivePowerEstimation();


        this.setBeamControlPoints();

        //this.getInternalLoads();

        this.setBOM();

        console.log("Mast", this.mast)


        // DRAWNG FUNCTIONS

        //this.svgDraw();


    }


    setDependentProps() {
        this.params.noOfTubes =
            this.params.end_tube_no - this.params.start_tube_no + 1;

        switch (this.params.material) {
            // Aluminum
            default:
                this.params.tube_material_density =
                    config.alum_6063_density; // kg/m³
                this.params.tube_material_e = config.alum_6063_E; // Pa
                this.params.tube_yield_strength =
                    config.alum_6063_yield_strength; // Pa
                this.params.tube_ultimate_strength =
                    config.alum_6063_ultimate_strength; // Pa
                break;
        }
    }


    setMastTubes() {
        this.mast.tubes = [];

        config.tubes.forEach((tube) => {
            if (
                tube.no >= this.params.start_tube_no &&
                tube.no <= this.params.end_tube_no
            ) {
                // Tube Length
                tube.length = this.params.tube_length;

                // Set material properties
                tube.material_density = this.params.tube_material_density;
                tube.material_e = this.params.tube_material_e;
                tube.yield_strength = this.params.tube_yield_strength;
                tube.ultimate_strength =
                    this.params.tube_ultimate_strength;

                // Calculate circular area for comparison
                tube.circularArea = this.setCircularArea(tube);
                // Calculate circular area moment of inertia for comparison
                tube.circularMomentOfInertia =
                    this.setCircularMomentOfInertia(tube);

                // Calculate mass_per_m
                tube.mass_per_m = this.calculateMass(tube, 1); // kg/m

                // Calculate eachTubeMass
                tube.mass = this.calculateMass(
                    tube,
                    this.params.tube_length / 1000,
                ); // kg

                // Calculate Moment Capacity at Yield Strength
                // M = σ * I / y [y=od/2]
                tube.moment_capacity_at_yield_strength_Nm =
                    (tube.yield_strength * tube.inertia_mm4 * 1e-12) /
                    (tube.od / 2000); // Nm

                // Calculate Moment Capacity at Ultimate Strength
                tube.moment_capacity_at_ultimate_strength_Nm =
                    (tube.ultimate_strength * tube.inertia_mm4 * 1e-12) /
                    (tube.od / 2000); // Nm

                // Calculate Shear Capacity at Yield Strength
                // τ = V * Q / I * b
                // V = τ * I * b / Q
                tube.shear_capacity_at_yield_strength_N =
                    (tube.yield_strength * tube.inertia_mm4 * tube.od) /
                    (this.findQ(tube) * 1e9); // N

                // Calculate Shear Capacity at Ultimate Strength
                // τ = V * Q / I * b
                // V = τ * I * b / Q
                tube.shear_capacity_at_ultimate_strength_N =
                    (tube.ultimate_strength * tube.inertia_mm4 * tube.od) /
                    (this.findQ(tube) * 1e9); // N

                // Calculate EI
                tube.EI_Nm2 = tube.material_e * tube.inertia_mm4 * 1e-12; // Nm2

                // SET TUBE STATES
                tube.config_suffix = '00';

                if (tube.no === this.params.start_tube_no) {
                    tube.config_suffix = "T"; // Top
                }

                if (this.params.noOfTubes > 3 && tube.no === this.params.start_tube_no + 1) {
                    tube.config_suffix = "TM"; // Top Minus
                }

                if (this.params.noOfTubes > 3 && tube.no === this.params.end_tube_no - 1) {
                    tube.config_suffix = "BP"; // Base Plus
                }

                if (this.params.noOfTubes === 3 && tube.no === this.params.end_tube_no - 1) {
                    tube.config_suffix = "IB"; // In-Between
                }

                if (tube.no === this.params.end_tube_no) {
                    tube.config_suffix = "B"; // Base
                }

                this.mast.tubes.push(tube);
            }
        });
    }

    setCircularArea(tube) {
        return Math.PI * tube.od * tube.thk;
    }

    setCircularMomentOfInertia(tube) {
        return (Math.PI * (tube.od ** 4 - tube.id ** 4)) / 64;
    }

    calculateMass(tube, length) {
        // Length is in m, area is in mm2, density is in kg/m3, mass will be in kg
        return (tube.area_mm2 * length * tube.material_density) / 1000000; // kg
    }

    findQ(tube) {
        let q = (Math.pow(tube.od / 2, 3) - Math.pow(tube.id / 2, 3)) / 6;
        return q; // mm3
    }

    setExtendedHeight() {
        this.mast.extendedHeight = this.params.noOfTubes * this.params.tube_length -
            (this.params.noOfTubes - 1) * this.params.overlap +
            this.params.payload_adapter_height +
            this.params.base_adapter_height;
    }


    setNestedHeight() {
        this.mast.nestedHeight = this.params.tube_length +
            (this.params.noOfTubes - 1) * this.params.head_height +
            this.params.payload_adapter_height +
            this.params.base_adapter_height;
    }

    setMastSections() {

        let new_index_no;
        this.mast.sections = [];

        this.mast.tubes.forEach((tube, index) => {

            new_index_no = this.mast.tubes.length - index - 1;

            //console.log('setting section config_suffix ', tube.config_suffix)

            // TOP SECTION
            if (tube.config_suffix === "T") {
                this.mast.sections[new_index_no] = {
                    section_no: new_index_no,
                    tube_no: tube.no,
                    config_suffix: tube.config_suffix,
                    z_top: this.mast.extendedHeight,
                    z_bottom: tube.extended_zb + this.params.overlap,
                    wind_load: {
                        z: tube.extended_zt - (tube.length - this.params.overlap) / 2,
                        load: 0 // TODO: Calculate wind load,
                    },
                    tip_load: {
                        z: this.mast.extendedHeight,
                        load: -this.mast.payload.wind_load, // TODO: Calculate tip load,
                    }
                };
            }

            // BASE-FIXED SECTION
            if (tube.config_suffix === "B") {
                this.mast.sections[new_index_no] = {
                    section_no: new_index_no,
                    tube_no: tube.no,
                    config_suffix: tube.config_suffix,
                    z_top: tube.extended_zt,
                    z_bottom: 0,
                    wind_load: {
                        z: tube.extended_zt / 2,
                        load: 0 // TODO: Calculate wind load,
                    },
                };
            }

            // IN-BETWEEN SECTION
            if (["00", "TM", "BP", "IB"].includes(tube.config_suffix)) {
                this.mast.sections[new_index_no] = {
                    section_no: new_index_no,
                    tube_no: tube.no,
                    config_suffix: tube.config_suffix,
                    z_top: tube.extended_zt,
                    z_bottom: tube.extended_zt - tube.length + this.params.overlap,
                    wind_load: {
                        z: tube.extended_zt - (tube.length - this.params.overlap) / 2,
                        load: 0 // TODO: Calculate wind load,
                    }
                };
            }
        });
    }

    productNaming() {
        this.mast.product_code = Math.round(this.mast.extendedHeight / 1000, 0) + this.params.mast_type + "-" + (this.mast.nestedHeight / 1000).toFixed(1) + "-" + this.params.noOfTubes;
    }



    calculateWindLoadsOnTubes() {
        /*
            1. Calculate Reference Area
            2. Calculate Reference Height
            3. Calculate Terrain Factor kr
            4. Calculate The roughness factor cr(ze) at the reference height
            5. Calculate Mean Velocity
            6. Calculate Turbulence Intensity
            7. Calculate Basic Velocity Pressure
            8. Calculate Peak Velocity Pressure
            9. Calculate Wind velocity corresponding to peak velocity pressure
            10. Calculate Reynolds Number
            11. Surface Roughness taken as 0.1 for Aluminum coated
            12. Calculate Structural Factor
            13. Calculate Effective Slenderness
            14. Calculate End Effect factor for structural solidity of 1.0
            15. Calculate Force Coefficient without End Effect
            16. Calculate Force Coefficient
            17. Calculate Total Wind Force
        */


        const terrain = config.terrain_category.find(
            (cat) => cat.no === this.params.terrain_category,
        );

        let section_tube, exposed_length;

        this.mast.sections.forEach((section, i) => {

            section_tube = this.mast.tubes.find((tube) => tube.no === section.tube_no);

            //alert(JSON.stringify(section_tube))
            exposed_length = section.z_top - section.z_bottom;

            // Reference Area
            this.mast.sections[i].reference_area =
                (section_tube.od * exposed_length) / 1000000; // m2

            // Wind Exposed Length
            this.mast.sections[i].wind_exposed_length = exposed_length;

            // Reference Height Ze
            this.mast.sections[i].Ze = section.z_top;

            // Roughness Length (m)
            this.mast.sections[i].roughness_length_Z0 = terrain.z0;

            // Terrain Factor kr
            this.mast.sections[i].terrain_factor_kr =
                0.19 * Math.pow(terrain.z0 / 0.05, 0.07);

            // Roughness factor Cr(ze) at the reference height
            this.mast.sections[i].max_height = Math.max(
                section.z_top / 1000,
                terrain.zmin,
            ); //m

            this.mast.sections[i].roughness_factor_Cr_at_Ze =
                this.mast.sections[i].terrain_factor_kr *
                Math.log(this.mast.sections[i].max_height / terrain.z0);

            // Calculate the mean wind speed at the height of the tube
            this.mast.sections[i].mean_wind_speed_Vm =
                (this.mast.sections[i].roughness_factor_Cr_at_Ze *
                    this.params.wind_speed) /
                3.6; // Convert to m/s

            // Turbulence Intensity
            this.mast.sections[i].turbulence_intensity_TI =
                1.0 /
                (1.0 *
                    Math.log(
                        this.mast.sections[i].max_height / terrain.z0,
                    ));

            // Basic Velocity Pressure
            // Basic Velocity Pressure Formula: q = 0.5 * ρ * V^2
            this.mast.sections[i].basic_velocity_pressure_q =
                0.5 *
                config.air_density *
                Math.pow(this.params.wind_speed / 3.6, 2); // Basic velocity pressure in N/m2

            // Peak Velocity Pressure
            // Peak Velocity Pressure Formula: qp =[ 1+ 7* TI ] * 0.5 *  ρ *  Vm^2
            this.mast.sections[i].peak_velocity_pressure_qp =
                (1 + 7 * this.mast.sections[i].turbulence_intensity_TI) *
                0.5 *
                config.air_density *
                Math.pow(this.mast.sections[i].mean_wind_speed_Vm, 2); // Peak velocity pressure in N/m2

            // Wind velocity corresponding to peak velocity pressure
            // Wind Velocity Formula: Vp = sqrt(2 * qp / ρ)
            this.mast.sections[i].wind_velocity_Vp_at_qp = Math.sqrt(
                (2 * this.mast.sections[i].peak_velocity_pressure_qp) /
                config.air_density,
            ); // Wind velocity in m/s corresponding to peak velocity pressure

            // Reynolds Number
            // Reynolds Number Formula: Re = ρ * Vp * D / μ
            // where:
            // Re = Reynolds number (dimensionless)
            // ρ = air density (kg/m3)
            // Vp = wind velocity (m/s) corresponding to peak velocity pressure
            // D = characteristic length (m) (outer diameter of the tube)
            // μ = dynamic viscosity of air (kg/(m·s)) (assumed to be 1.81e-5 kg/(m·s) at 20°C)
            this.mast.sections[i].reynolds_number_Re =
                (this.mast.sections[i].wind_velocity_Vp_at_qp *
                    section_tube.od) /
                1000 /
                config.dynamic_viscosity_mu; // Reynolds number (dimensionless)

            // Structural Factor
            // Structural Factor is taken as 1.0 for this calculation
            this.mast.sections[i].structural_factor = 1.0; // Structural Factor (dimensionless)

            // Surface Roughness
            // Surface Roughness is taken as 0.2 for Aluminum coated tubes
            this.mast.sections[i].surface_roughness = 0.2; // Surface Roughness in mm

            // Effective Slenderness
            this.mast.sections[i].slenderness_ratio_l_b =
                section_tube.length / section_tube.od; // Slenderness ratio (dimensionless)

            if (section_tube.length / 1000 <= 15) {
                this.mast.sections[i].effective_slenderness = Math.min(
                    this.mast.sections[i].slenderness_ratio_l_b,
                    70,
                ); // Limit to a maximum of 70
            } else {
                this.mast.sections[i].effective_slenderness = Math.min(
                    0.7 * this.mast.sections[i].slenderness_ratio_l_b,
                    70,
                ); // Limit to a maximum of 70
            }

            // End Effect Factor : Dimensionless
            if (this.mast.sections[i].effective_slenderness <= 10) {
                this.mast.sections[i].end_effect_factor =
                    0.6023079 *
                    Math.pow(
                        this.mast.sections[i].effective_slenderness,
                        0.0657553,
                    ); // For slenderness less than or equal to 10
            } else {
                this.mast.sections[i].end_effect_factor =
                    0.698573 +
                    0.001977401 *
                    this.mast.sections[i].effective_slenderness +
                    0.00008741341 *
                    Math.pow(
                        this.mast.sections[i].effective_slenderness,
                        2,
                    ) -
                    0.00000103591 *
                    Math.pow(
                        this.mast.sections[i].effective_slenderness,
                        3,
                    ); // For slenderness greater than 10
            }

            // Force Coefficient without End Effect
            this.mast.sections[i].equivalent_roughness_k_b =
                this.mast.sections[i].surface_roughness / section_tube.od; // Equivalent Roughness

            let force_coefficent =
                1.2 +
                (0.18 *
                    Math.log10(
                        10 * this.mast.sections[i].equivalent_roughness_k_b,
                    )) /
                (1 +
                    0.4 *
                    Math.log10(
                        this.mast.sections[i].reynolds_number_Re /
                        1e6,
                    ));

            if (this.mast.sections[i].reynolds_number_Re < 1.8e5) {
                // For Reynolds number less than 1.8e5, use a different formula
                return 1.2;
            } else if (
                this.mast.sections[i].reynolds_number_Re >= 1.85e5 &&
                this.mast.sections[i].reynolds_number_Re < 4e5
            ) {
                let temp_force_coefficient =
                    0.11 /
                    Math.pow(
                        this.mast.sections[i].reynolds_number_Re / 1e6,
                        1.4,
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

            this.mast.sections[i].force_coefficient_wo_end_effect =
                force_coefficent;

            // Force Coefficient
            // EndEffect Facor * Force Coefficient without End Effect
            // Force Coefficient Formula: Cf = Cfw * EndEffectFactor
            // where:
            // Cf = Force Coefficient (dimensionless)
            // Cfw = Force Coefficient without End Effect (dimensionless)
            // EndEffectFactor = End Effect Factor (dimensionless)
            this.mast.sections[i].force_coefficient =
                this.mast.sections[i].force_coefficient_wo_end_effect *
                this.mast.sections[i].end_effect_factor; // Force Coefficient (dimensionless)

            // ***********************************************************************************
            // Total Wind Force
            // Total Wind Force Formula: Fw = Structural Factor * Force Coefficient * Peak Velocity Pressure * Reference Area
            // ***********************************************************************************

            this.mast.sections[i].wind_load.load = -
                this.mast.sections[i].structural_factor *
                this.mast.sections[i].force_coefficient *
                this.mast.sections[i].peak_velocity_pressure_qp *
                this.mast.sections[i].reference_area;
        });
    }


    getInternalLoads() {

        // ROOT LOADS
        let root_shear_wo_side_adapter = 0;
        let root_moment_wo_side_adapter = 0;

        this.mast.sections.forEach((section) => {
            root_shear_wo_side_adapter += section.wind_load.load;
            root_moment_wo_side_adapter += -section.wind_load.load * section.wind_load.z / 1000; // Nm
        });

        root_shear_wo_side_adapter += this.mast.sections.at(-1).tip_load.load;
        root_moment_wo_side_adapter += -this.mast.sections.at(-1).tip_load.load * this.mast.sections.at(-1).tip_load.z / 1000; // CW is positive

        this.mast.sections[0].control_points[0].V_wo_adapter_left = -root_shear_wo_side_adapter;
        this.mast.sections[0].control_points[0].M_wo_adapter =
            this.mast.sections.at(-1).tip_load.moment_tip_total +
            root_moment_wo_side_adapter;

        this.mast.sections[0].control_points[0].V_wo_adapter_right = this.mast.sections[0].control_points[0].V_wo_adapter_left;

        this.mast.sections.forEach((section, sec_index) => {
            section.control_points.forEach((point, pnt_index) => {
                console.log("dddd", point.V_wo_adapter_left, pnt_index);
                //this.mast.sections[sec_index].control_points[pnt_index].V_wo_adapter_left = this.mast.sections[sec_index].control_points[pnt_index].V_wo_adapter_left;
            });
        });



    }



    setPayloadParameters() {
        /*
            Dynamic Pressure Formula:
            1/2 * rho * V^2 * A
            where
            - rho: air density (kg/m^3)
            - V: wind velocity (m/s)
            - A: sail area (m^2)
        */
        this.mast.payload = {
            wind_load_z: null,
            wind_load: null,
        };

        this.mast.payload.wind_load_z =
            this.mast.extendedHeight +
            Math.sqrt(this.params.sail_area * 1e6) / 2;

        this.mast.payload.wind_load =
            0.5 *
            config.air_density *
            config.drag_coefficient_Cd *
            Math.pow(this.params.wind_speed / 3.6, 2) *
            this.params.sail_area;
    }



    getMastTipMoments() {

        // Tip Moment due to horizontal wind load (z_offset)
        this.mast.sections.at(-1).tip_load.moment_z_offset = this.mast.payload.wind_load * this.params.z_offset / 1000; // Nm

        // Tip Moment due to x-offset of payload Mass
        this.mast.sections.at(-1).tip_load.moment_x_offset = 9.81 * this.params.payload_mass * this.params.x_offset / 1000; // Nm

        /* 
            Limit total tip deflection (in x direction) to tip_deflection_percentage% of the extended height of the mast
            this.data.params.tip_deflection_percentage is a number like 25,50,75,100 ; should be diveded by 100
        */

        this.mast.allowed_tip_deflection_mm =
            (0.01 *
                this.params.tip_deflection_percentage *
                this.mast.extendedHeight) /
            100; // mm

        // Additional Moment due to side deflection of Mast : Inevitable
        // Add some weight to total weight from mast weight

        let deflection_weight = (this.params.payload_mass + 0.2 * this.mast.mass.lifted)
        this.mast.sections.at(-1).tip_load.moment_due_deflection = 9.81 * deflection_weight * this.mast.allowed_tip_deflection_mm / 1000; // Nm

        this.mast.sections.at(-1).tip_load.moment_tip_total =
            this.mast.sections.at(-1).tip_load.moment_z_offset +
            this.mast.sections.at(-1).tip_load.moment_x_offset +
            this.mast.sections.at(-1).tip_load.moment_due_deflection; // CW is positive
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

        /*
        MASS ESTIMATION FOR MTNX MAST

        1. TUBES (TOTAL : all tubes, LIFTED : lifted all tubes except BASE)
        2. FIXED TOP FLANGE (TOTAL : all sections except TOP, LIFTED : all sections except TOP and BASE)
        3. ICE BREAKER (TOTAL : all sections except TOP, LIFTED : all sections except TOP and BASE)
        4. SCREW NUT FRAME (TOTAL : all sections except BASE, LIFTED : all sections except BASE)
        5. LOWER KEY GUIDES (TOTAL : each tube, LIFTED : each tube)
        6. UPPER KEY GUIDES (TOTAL : each tube, LIFTED : each tube)
        7. EULER FIXER (TOTAL : each tube, LIFTED : each tube)
        8. PAYLOAD INTERFACE (TOTAL : Only for TOP, LIFTED : Only for TOP)
        9. LOCK STOPPER (TOTAL : each tube, LIFTED : each tube)
        10. LOCK KEY (TOTAL : each tube, LIFTED : each tube)
        11. LOCK MECHANISM (TOTAL : each tube, LIFTED : each tube)
        12. WELDED BOTTOM STRUCTURE (TOTAL : Only for BASE, LIFTED : NONE)
        13. MOTOR (TOTAL : Only for BASE, LIFTED : NONE)
        14. GEARBOX (TOTAL : Only for BASE, LIFTED : NONE)
        */

        this.mast.mass = {
            total: 0,
            lifted: 0,
        }

        this.mast.tubes.forEach((tube, i) => {

            // TUBE PROFILES WEIGHT CALCULATION
            this.mast.mass.total += tube.mass;

            if (tube.config_suffix != "B") {
                this.mast.mass.lifted += tube.mass;
            }

            // FIXED TOP FLANGE WEIGHT CALCULATION
            this.mast.mass.total += config.weights.fixed_top_flange["C" + tube.no];

            if (tube.config_suffix != "B") {
                this.mast.mass.lifted += config.weights.fixed_top_flange["C" + tube.no];
            }

            // ICE BREAKER WEIGHT CALCULATION
            if (tube.config_suffix == "00") {
                this.mast.mass.total += config.weights.ice_breaker["C" + tube.no];
                this.mast.mass.lifted += config.weights.ice_breaker["C" + tube.no];
            }

            if (tube.config_suffix === "B") {
                this.mast.mass.total += config.weights.ice_breaker["C" + tube.no];
            }

            // SCREW AND NUT FRAME WEIGHT CALCULATION
            if (tube.config_suffix !== "B") {
                this.mast.mass.total += config.weights.screw_nut_frame["C" + tube.no].assy;
                this.mast.mass.lifted += config.weights.screw_nut_frame["C" + tube.no].assy;
            }

            // LOWER KEY GUIDES WEIGHT CALCULATION
            this.mast.mass.total += config.weights.lower_key_guides_each * tube.channel_number;

            if (tube.config_suffix !== "B") {
                this.mast.mass.lifted += config.weights.lower_key_guides_each * tube.channel_number;
            }

            // UPPER KEY GUIDES WEIGHT CALCULATION
            this.mast.mass.total += config.weights.upper_key_guides_each * tube.channel_number;

            if (tube.config_suffix !== "T") {
                this.mast.mass.lifted += config.weights.upper_key_guides_each * tube.channel_number;
            }

            // EULER FIXER WEIGHT CALCULATION
            if (tube.config_suffix === "T") {
                this.mast.mass.total += config.weights.euler_fixer["C" + tube.no];
                this.mast.mass.lifted += config.weights.euler_fixer["C" + tube.no];
            }

            // PAYLOAD INTERFACE WEIGHT CALCULATION
            if (tube.config_suffix === "T") {
                this.mast.mass.total += config.weights.payload_interface["C" + tube.no];
                this.mast.mass.lifted += config.weights.payload_interface["C" + tube.no];
            }

            // LOCK STOPPER (ON TUBES) WEIGHT CALCULATION
            if (tube.config_suffix !== "B") {
                this.mast.mass.total += config.weights.lock_stopper_each * 2;
                this.mast.mass.lifted += config.weights.lock_stopper_each * 2;
            }

            // LOCK KEYS WEIGHT CALCULATION
            if (tube.config_suffix !== "B") {
                this.mast.mass.total += config.weights.lock_key_each * 2;
                this.mast.mass.lifted += config.weights.lock_key_each * 2;
            }

            // LOCK MECHANISM WEIGHT CALCULATION
            if (tube.config_suffix !== "B") {
                this.mast.mass.total += config.weights.lock_mechanism_each * 2;
                this.mast.mass.lifted += config.weights.lock_mechanism_each * 2;
            }

            // WELDED BOTTOM STRUCTURE WEIGHT CALCULATION
            if (tube.config_suffix === "B") {
                this.mast.mass.total += config.weights.welded_bottom_structure["C" + tube.no];

                // MOTOR AND GEARBOX WEIGHT CALCULATION
                this.mast.mass.total += config.motors.find(
                    (g) => g.id === this.params.motor_id,
                )?.mass_kg;
                this.mast.mass.total += config.gearboxes.find(
                    (g) => g.id === this.params.gearbox_id,
                )?.mass_kg;
            }
        });
    }

    massEstimationMTWR() {
        // TODO: Implement MTWR mass estimation
    }



    drivePowerEstimation() {

        let thread_angle = Math.atan(
            config.screw_lead /
            (Math.PI * config.screw_nominal_diameter),
        );
        let secant = 1 / Math.cos(thread_angle)

        this.mast.driveline = {
            total_load_to_lift: (this.params.payload_mass + this.mast.mass.lifted) * 9.81,
            thread_angle: thread_angle, // Thread angle in radians
            secant: secant,
        }

        this.mast.driveline.torque_required_to_extend_mast_Nm =
            (0.5 *
                this.mast.driveline.total_load_to_lift *
                config.screw_nominal_diameter *
                (config.screw_lead +
                    Math.PI *
                    config.screw_coefficient_of_friction *
                    config.screw_nominal_diameter *
                    secant)) /
            (Math.PI * config.screw_nominal_diameter -
                config.screw_coefficient_of_friction *
                config.screw_lead *
                secant) /
            1000; // Convert to Nm

        // MOTOR TORQUE
        this.mast.driveline.motor_power = config.motors.find(
            (g) => g.id === this.params.motor_id,
        )?.power_kW;

        this.mast.driveline.motor_rpm = config.motors.find(
            (g) => g.id === this.params.motor_id,
        )?.max_speed_rpm;

        this.mast.driveline.motor_torque =
            (9550 * this.mast.driveline.motor_power) / this.mast.driveline.motor_rpm;

        // LIFTING TORQUE
        this.mast.driveline.lifting_torque =
            this.mast.driveline.motor_torque *
            config.gearboxes.find(
                (g) => g.id === this.params.gearbox_id,
            )?.gear_ratio;

        // POWER SCREW SPEED
        this.mast.driveline.gearbox_ratio = config.gearboxes.find(
            (g) => g.id === this.params.gearbox_id,
        )?.gear_ratio;

        this.mast.driveline.screw_rpm =
            this.mast.driveline.motor_rpm / this.mast.driveline.gearbox_ratio;
        this.mast.driveline.vertical_speed =
            (this.mast.driveline.screw_rpm * config.screw_lead) / 1000; // Convert RPM to m/min

        // TIME TO EXTEND
        this.mast.driveline.total_travel_length_m = (this.mast.extendedHeight - this.mast.nestedHeight) / 1000; //m
        this.mast.driveline.time_to_extend_seconds =
            1.15 * 60 * this.mast.driveline.total_travel_length_m / this.mast.driveline.vertical_speed; // with 1.15 safety factor
    }


    setBeamControlPoints() {

        let reversed_tubes = [...this.mast.tubes].reverse();

        // Helper function to safely generate and assign a unique object per Z coordinate
        const addControlPoint = (zValue, index) => {
            this.mast.sections[index].control_points.push({
                z: zValue,
                EI: reversed_tubes[index].EI_Nm2,
                V_wo_adapter_left: 0,
                V_wo_adapter_right: 0,
                V_w_adapter_left: 0,
                V_w_adapter_right: 0,
                M_wo_adapter: 0,
                M_w_adapter: 0,
                deflection_wo_adapter: 0,
                deflection_w_adapter: 0,
            })
        };

        this.mast.sections.forEach((section, index) => {

            this.mast.sections[index].control_points = [];

            // Base Section
            if (index === 0) {
                // a. Lower Interface
                addControlPoint(section.z_bottom, index); // Add a new Control Point   
                // b. Tube Wind Load Interface
                addControlPoint(section.wind_load.z, index); // Add a new Control Point
                // c. Side Adapter Interface
                addControlPoint(this.params.side_adapter_z, index); // Add a new Control Point
                // d. Upper Section Change Interface
                addControlPoint(section.z_top, index); // Add a new Control Point
            }

            // Intermediate Sections
            if (index > 0 && index < this.mast.sections.length - 1) {
                // a. Lower Interface
                addControlPoint(section.z_bottom, index); // Add a new Control Point
                // b. Tube Wind Load Interface
                addControlPoint(section.wind_load.z, index); // Add a new Control Point
                // c. Upper Section Change Interface
                addControlPoint(section.z_top, index); // Add a new Control Point
            }

            // Top Section
            if (index === this.mast.sections.length - 1) {
                // a. Lower Interface
                addControlPoint(section.z_bottom, index); // Add a new Control Point
                // b. Tube Wind Load Interface
                addControlPoint(section.wind_load.z, index); // Add a new Control Point
                // c. Upper Section Change Interface
                addControlPoint(section.z_top, index); // Add a new Control Point
            }
        });

    }




    setBOM() {


        let top_fixed_flanges = []

        this.mast.sections.forEach((section, index) => {


            // Determine tube no
            let requested_config_name = "C" + String(section.tube_no).padStart(2, '0') + section.config_suffix;

            //console.log("requested_config_name", requested_config_name)

            let flange = mtnx_bom.fixed_top_flange.find(item => item.config_no === requested_config_name);

            this.mast.bom.push(flange);

            // Fixed Top Flange
            // if (config_suffix === 'fixed_top_flange') {
            //     // TODO: Add fixed top flange to BOM
            // }

            // TUBES
            //let the_tube = this.mast.tubes.find(tube => tube.no === tube_no);

            // this.mast.bom.push({
            //     type: 'tube',
            //     part_number: the_tube.part_number,
            //     length: the_tube.length - 5,
            //     material: the_tube.material,
            //     quantity: 1
            // });



            // // UPPER GUIDE KEYS
            // this.mast.bom.push({
            //     type: 'guide_key',
            //     part_number: 'GUIDE_KEY_UPPER',
            //     length: 100,
            //     material: 'Steel',
            //     quantity: 1
            // });




        })


        // LOWER GUIDE KEYS
        // this.mast.bom.push({
        //     type: 'guide_key',
        //     part_number: 'GUIDE_KEY_LOWER',
        //     length: 100,
        //     material: 'Steel',
        //     quantity: 1
        // });





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

        this.svgWidth =
            wDiv.clientWidth -
            window.getComputedStyle(this.svgDiv).paddingLeft.replace("px", "") -
            window.getComputedStyle(this.svgDiv).paddingRight.replace("px", "");
        this.svgHeight = (16 * this.svgWidth) / 19;
        this.vcline_x = 0.5 * this.svgWidth;
        this.vcline_info = 0.7 * this.svgWidth;

        let totalHeight;

        switch (this.drawType) {
            case "Loads":
                totalHeight =
                    1000 * Math.sqrt(this.data.params.sail_area) +
                    this.data.props.extendedHeight;
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