import { config } from "$modules/PDM/Shared/config.js";
import { mtnx_bom } from "$modules/PDM/Shared/mtnx_bom.js";
import MastVibration from "$modules/PDM/Pages/Engineering/MastVibration2.js";

export default class Configurator {

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

        // DEFLECTION
        this.findBeamMoments();
        this.setGraphData();

        // VIBRATION
        this.runVibrationAnalysis(form);

        // SVG GENERATION
        this.mast.svg.loads = this.svgDraw(form, "Loads");
        this.mast.svg.extended = this.svgDraw(form, "Extended");
        this.mast.svg.nested = this.svgDraw(form, "Nested");

        console.log("FORM:\n", form)

        console.log("MAST:\n", this.mast)

        return this.mast;
    }




    static setDependentProps(form) {

        // Aluminum

        this.mast.tube_material_density = config.alum_6063_density; // kg/m³
        this.mast.tube_material_e = config.alum_6063_E; // Pa
        this.mast.tube_yield_strength = config.alum_6063_yield_strength; // Pa
        this.mast.tube_ultimate_strength = config.alum_6063_ultimate_strength; // Pa

        this.mast.kama_length = form.overlap - 80

    }


    static setMastTubes(form) {
        this.mast.tubes = [];

        config.tubes.forEach((tube) => {
            if (
                tube.no >= form.start_tube_no &&
                tube.no <= form.end_tube_no
            ) {
                // Tube Length
                tube.length = form.tube_length;

                // Set material properties
                tube.material_density = this.mast.tube_material_density;
                tube.material_e = this.mast.tube_material_e;
                tube.yield_strength = this.mast.tube_yield_strength;
                tube.ultimate_strength = this.mast.tube_ultimate_strength;

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
                    form.tube_length / 1000,
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
                tube.config_suffix = 'IB';

                if (tube.no === form.start_tube_no) {
                    tube.config_suffix = "T"; // Top
                }

                if (this.mast.noOfTubes > 3 && tube.no === form.start_tube_no + 1) {
                    tube.config_suffix = "TM"; // Top Minus
                }

                if (this.mast.noOfTubes > 3 && tube.no === form.end_tube_no - 1) {
                    tube.config_suffix = "BP"; // Base Plus
                }

                if (this.mast.noOfTubes === 3 && tube.no === form.end_tube_no - 1) {
                    tube.config_suffix = "IB"; // In-Between
                }

                if (tube.no === form.end_tube_no) {
                    tube.config_suffix = "B"; // Base
                }

                this.mast.tubes.push(tube);
            }
        });
    }


    static setZPositions(form) {
        let ezb, ezt, nzb, nzt;

        this.mast.tubes.forEach((tube, index) => {

            if (index === 0) {
                // Extended State
                ezt =
                    this.mast.extendedHeight -
                    form.payload_adapter_height;
                ezb = ezt - tube.length;

                // Nested State
                nzt =
                    this.mast.nestedHeight -
                    form.payload_adapter_height;
                nzb = nzt - tube.length;
            } else {
                // Extended State
                ezt = ezb + form.overlap;
                ezb = ezt - tube.length;

                // Nested State
                nzt = nzt - form.head_height;
                nzb = nzt - tube.length;
            }

            this.mast.tubes[index].nested_zb = nzb;
            this.mast.tubes[index].nested_zt = nzt;

            this.mast.tubes[index].extended_zb = ezb;
            this.mast.tubes[index].extended_zt = ezt;
        });
    }


    static setCircularArea(tube) {
        return Math.PI * tube.od * tube.thk;
    }

    static setCircularMomentOfInertia(tube) {
        return (Math.PI * (tube.od ** 4 - tube.id ** 4)) / 64;
    }

    static calculateMass(tube, length) {
        // Length is in m, area is in mm2, density is in kg/m3, mass will be in kg
        return (tube.area_mm2 * length * tube.material_density) / 1000000; // kg
    }

    static findQ(tube) {
        let q = (Math.pow(tube.od / 2, 3) - Math.pow(tube.id / 2, 3)) / 6;
        return q; // mm3
    }

    static setExtendedHeight(form) {
        this.mast.extendedHeight = this.mast.noOfTubes * form.tube_length -
            (this.mast.noOfTubes - 1) * form.overlap +
            form.payload_adapter_height +
            form.base_adapter_height;
    }


    static setNestedHeight(form) {
        this.mast.nestedHeight = form.tube_length +
            (this.mast.noOfTubes - 1) * form.head_height +
            form.payload_adapter_height +
            form.base_adapter_height;
    }

    static setMastSections(form) {

        let new_index_no;
        this.mast.sections = [];
        this.mast.moments = [];

        this.mast.tubes.forEach((tube, index) => {

            new_index_no = this.mast.tubes.length - index - 1;

            // TOP SECTION
            if (tube.config_suffix === "T") {
                this.mast.sections[new_index_no] = {
                    section_no: new_index_no,
                    tube_no: tube.no,
                    config_suffix: tube.config_suffix,
                    z_top: this.mast.extendedHeight,
                    z_bottom: tube.extended_zb + form.overlap,
                    wind_load: {
                        z: tube.extended_zt - (tube.length - form.overlap) / 2,
                        load: 0 // TODO: Calculate wind load,
                    },
                    tip_load: {
                        z: this.mast.extendedHeight,
                        load: -this.mast.payload.wind_load, // TODO: Calculate tip load,
                    }
                };

                this.mast.moments.push({
                    z: this.mast.extendedHeight
                });
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

            // IN-BETWEEN SECTION
            if (["TM", "BP", "IB"].includes(tube.config_suffix)) {
                this.mast.sections[new_index_no] = {
                    section_no: new_index_no,
                    tube_no: tube.no,
                    config_suffix: tube.config_suffix,
                    z_top: tube.extended_zt,
                    z_bottom: tube.extended_zt - tube.length + form.overlap,
                    wind_load: {
                        z: tube.extended_zt - (tube.length - form.overlap) / 2,
                        load: 0 // TODO: Calculate wind load,
                    }
                };

                this.mast.moments.push({
                    z: tube.extended_zt
                });
            }
        });
    }

    static productNaming(form) {
        this.mast.product_code = Math.round(this.mast.extendedHeight / 1000, 0) + form.mast_type + "-" + (this.mast.nestedHeight / 1000).toFixed(1) + "-" + this.mast.noOfTubes;
    }


    static calculateWindLoadsOnTubes(form) {
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
            (cat) => cat.no === form.terrain_category,
        );

        let section_tube, exposed_length;

        this.mast.sections.forEach((section, i) => {

            section_tube = this.mast.tubes.find((tube) => tube.no === section.tube_no);

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
                    form.wind_speed) /
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
                Math.pow(form.wind_speed / 3.6, 2); // Basic velocity pressure in N/m2

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
                    force_coefficent = temp_force_coefficient;
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



    static setPayloadParameters(form) {
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
            width: null,
            height: null
        };

        this.mast.payload.wind_load_z =
            this.mast.extendedHeight +
            Math.sqrt(form.sail_area * 1e6) / 2;

        this.mast.payload.wind_load =
            -0.5 *
            config.air_density *
            config.drag_coefficient_Cd *
            Math.pow(form.wind_speed / 3.6, 2) *
            form.sail_area;

        this.mast.payload.width = Math.pow(form.sail_area, 0.5) * 1000; // mm
        this.mast.payload.height = this.mast.payload.width; // mm
    }



    static getMastTipMoments(form) {

        // Tip Moment due to horizontal wind load (z_offset)
        this.mast.sections.at(-1).tip_load.moment_z_offset = this.mast.payload.wind_load * form.z_offset / 1000; // Nm
        const moment_z_offset = this.mast.payload.wind_load * form.z_offset / 1000; // Nm

        //console.log("ZZZZZZZZZZZZZZ",moment_z_offset,this.mast.payload.wind_load,form.z_offset)

        // Tip Moment due to x-offset of payload Mass
        this.mast.sections.at(-1).tip_load.moment_x_offset = 9.81 * form.payload_mass * form.x_offset / 1000; // Nm
        const moment_x_offset = -9.81 * form.payload_mass * form.x_offset / 1000; // Nm

        /* 
            Limit total tip deflection (in x direction) to tip_deflection_percentage% of the extended height of the mast
            form.tip_deflection_percentage is a number like 25,50,75,100 ; should be diveded by 100
        */

        this.mast.allowed_tip_deflection_mm =
            (0.01 *
                form.tip_deflection_percentage *
                this.mast.extendedHeight) /
            100; // mm

        // Additional Moment due to side deflection of Mast : Inevitable
        // Add some weight to total weight from mast weight
        let deflection_weight = (form.payload_mass + 0.2 * this.mast.mass.lifted);
        this.mast.sections.at(-1).tip_load.moment_due_deflection = 9.81 * deflection_weight * this.mast.allowed_tip_deflection_mm / 1000; // Nm
        const moment_due_deflection = -9.81 * deflection_weight * this.mast.allowed_tip_deflection_mm / 1000; // Nm

        this.mast.sections.at(-1).tip_load.moment_tip_total =
            this.mast.sections.at(-1).tip_load.moment_z_offset +
            this.mast.sections.at(-1).tip_load.moment_x_offset +
            this.mast.sections.at(-1).tip_load.moment_due_deflection; // CW is positive

        const moment_tip_total =
            moment_z_offset +
            moment_x_offset +
            moment_due_deflection; // CW is positive

        let foundZ = this.mast.moments.find(m => m.z === this.mast.extendedHeight);

        this.mast.tip_moment = {
            moment_z_offset: moment_z_offset,
            moment_x_offset: moment_x_offset,
            moment_due_deflection: moment_due_deflection,
            moment_tip_total: moment_tip_total
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

            if (tube.config_suffix !== "B") {
                this.mast.mass.lifted += tube.mass;
            }

            // FIXED TOP FLANGE WEIGHT CALCULATION
            this.mast.mass.total += config.weights.fixed_top_flange["C" + tube.no];

            if (tube.config_suffix !== "B") {
                this.mast.mass.lifted += config.weights.fixed_top_flange["C" + tube.no];
            }

            // ICE BREAKER WEIGHT CALCULATION
            if (tube.config_suffix === "IB") {
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
                this.mast.mass.total += mtnx_bom.motors.find(
                    (g) => g.id === form.motor_id,
                )?.mass_kg;
                this.mast.mass.total += mtnx_bom.gearboxes.find(
                    (g) => g.id === form.gearbox_id,
                )?.mass_kg;
            }
        });
    }

    static massEstimationMTWR() {
        // TODO: Implement MTWR mass estimation
    }



    static drivePowerEstimation(form) {

        let thread_angle = Math.atan(
            config.screw_lead /
            (Math.PI * config.screw_nominal_diameter),
        );
        let secant = 1 / Math.cos(thread_angle)

        this.mast.driveline = {
            total_load_to_lift: (form.payload_mass + this.mast.mass.lifted) * 9.81,
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
        this.mast.driveline.motor_power = mtnx_bom.motors.find(
            (g) => g.id === form.motor_id,
        )?.power_kW;

        this.mast.driveline.motor_rpm = mtnx_bom.motors.find(
            (g) => g.id === form.motor_id,
        )?.max_speed_rpm;

        this.mast.driveline.motor_torque =
            (9550 * this.mast.driveline.motor_power) / this.mast.driveline.motor_rpm;

        // LIFTING TORQUE
        this.mast.driveline.lifting_torque =
            this.mast.driveline.motor_torque *
            mtnx_bom.gearboxes.find(
                (g) => g.id === form.gearbox_id,
            )?.gear_ratio;

        // POWER SCREW SPEED
        this.mast.driveline.gearbox_ratio = mtnx_bom.gearboxes.find(
            (g) => g.id === form.gearbox_id,
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


    static setBeamControlHeights(form) {

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
                addControlPoint(form.side_adapter_z, index); // Add a new Control Point
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

    /*
    MAST VIBRATION ANALYSIS
    */

    static runVibrationAnalysis(form) {
        // Create vibration analyzer with mast data, tube lengths and payload mass
        const analyzer2 = new MastVibration({
            tubes: this.mast.tubes,
            tip_mass: form.payload_mass,
            extendedHeight: this.mast.extendedHeight,
            modes: 3,
            integrationSteps: 500,
        });

        // Calculate frequencies
        const frequencies = analyzer2.calculateFrequencies();
        const karsilastirma = analyzer2.comparativeFrequencies();

        this.mast.resonance_frequencies = [];

        frequencies.forEach((freq, index) => {
            this.mast.resonance_frequencies[index] = {
                weak: karsilastirma.weak[index],
                strong: karsilastirma.strong[index],
                frequency: freq,
            };
        });
    }

    /*
    DEFLECTION CALCULATIONS
    */
    static findInternalMomentAtZ(z) {

        let internal_moment = this.mast.tip_moment.moment_tip_total;

        internal_moment += this.mast.payload.wind_load * (this.mast.extendedHeight - z) / 1000;

        this.mast.sections.forEach(section => {
            if (section.wind_load.z >= z) {
                //console.log("section",section.wind_load.z,z,section.wind_load.load);
                internal_moment += section.wind_load.load * (section.wind_load.z - z) / 1000;
            }
        });

        return internal_moment;
    }


    static findInternalShearAtZ(z) {

        let all_loads = [];

        this.mast.sections.forEach(section => {
            all_loads.push(section.wind_load);
        });

        all_loads.push({
            z: this.mast.extendedHeight,
            load: this.mast.payload.wind_load
        })


        let v_left = (all_loads, z) => {
            return all_loads
                .filter(l => l.z >= z)
                .reduce((sum, l) => sum + l.load, 0);
        }

        let v_right = (all_loads, z) => {
            return all_loads
                .filter(l => l.z > z)
                .reduce((sum, l) => sum + l.load, 0);
        }

        console.log(-v_left(all_loads, z), -v_right(all_loads, z), z)

        return { left: -v_left(all_loads, z), right: -v_right(all_loads, z) };
    }



    static findBeamMoments(form, hasSideAdapter = false) {

        // Find Root Moment without Side Adapter
        this.mast.sections.forEach(section => {
            section.control_points.forEach(point => {
                point.M_wo_adapter = this.findInternalMomentAtZ(point.z);
                const shear = this.findInternalShearAtZ(point.z);
                point.V_wo_adapter_left = shear.left;
                point.V_wo_adapter_right = shear.right;
            });
        });

        // Find M/EI w/o side adapter

        this.mast.sections.forEach(section => {

            section.control_points.forEach(point => {
                //console.log("point",point.EI)
                point.M_EI_wo_adapter = point.M_wo_adapter / point.EI;
            })
        });



        return true;
    }

    static setGraphData() {


        let m_wo_adapter = (sections) => {
            return sections.flatMap(s =>
                s.control_points.map(cp => ({ z: cp.z, M_wo_adapter: cp.M_wo_adapter }))
            );
        }

        let mei_wo_adapter = {};

        this.mast.sections.forEach((section, key) => {

            mei_wo_adapter[key] = [];
            section.control_points.forEach(point => {

                mei_wo_adapter[key].push({
                    x: point.z,             // Height/Position (z) on the horizontal axis
                    y: point.M_EI_wo_adapter // M/EI ratio on the vertical axis
                });
            });
        });




        this.mast.graph = {
            "moment_wo_adapter": m_wo_adapter(this.mast.sections),
            "M_EI_wo_adapter": mei_wo_adapter
        }





    }


    /*
    BOM GENERATION
    */
    static setBOM(form) {

        let kamaSayisi = 0;

        this.mast.sections.forEach((section, index) => {

            // BASE STRUCTURE
            if (section.config_suffix === 'B') {
                const foundBaseStructure = mtnx_bom.base_structure.find((bomitem) => {
                    return parseInt(bomitem.tube_no) === parseInt(section.tube_no);
                });
                foundBaseStructure.quantity = 1
                this.mast.bom.push(foundBaseStructure);
            }

            // TUBES
            this.mast.bom.push({
                config_no: section.config_suffix,
                tube_no: section.tube_no,
                name: "Masttech Yuvarlak Boru Profili : MT-" + section.tube_no,
                mass_kg: 0.5,
                part_number: "MT-" + section.tube_no + "-" + section.config_suffix,
                material: "Aluminium",
                quantity: 1,
            });

            // FIXED HEAD FLANGE
            const foundHeadFlange = mtnx_bom.fixed_top_flange.find((bomitem) => {
                return parseInt(bomitem.tube_no) === parseInt(section.tube_no) && bomitem.config_no === section.config_suffix;
            });

            const headFlange = structuredClone(foundHeadFlange);

            headFlange.quantity = 1
            headFlange.material = "6061 T6"
            headFlange.part_number = foundHeadFlange.part_number + "-" + section.tube_no + "-" + section.config_suffix

            this.mast.bom.push(headFlange)

            // KAMA SAYISI
            if (section.config_suffix !== 'T') {
                const foundTube = this.mast.tubes.find((tube) => parseInt(tube.no) === parseInt(section.tube_no));
                kamaSayisi += foundTube.channel_number;
            }

            // LOCK LIP
            if (section.config_suffix !== 'B' && section.config_suffix !== 'BP') {
                const foundLip = mtnx_bom.lock_lip.find((bomitem) => {
                    return parseInt(bomitem.tube_no) === parseInt(section.tube_no);
                });


                // CRITICAL FIX: Create a clean copy so we don't mutate the original master dataset
                if (foundLip) {
                    const lockLip = structuredClone(foundLip);
                    // Alternatively, use: const lockLip = { ...foundLip }; if it's a shallow object

                    lockLip.part_number = foundLip.part_number + "-" + section.tube_no;
                    lockLip.quantity = 4;

                    this.mast.bom.push(lockLip);
                }
            }

            // NUT FRAMES
            if (section.config_suffix != 'B') {

                const foundNutFrame = mtnx_bom.nut_frames.find((nframe) => {
                    return nframe.tube_no === parseInt(section.tube_no);
                });

                const nutFrame = structuredClone(foundNutFrame);
                nutFrame.part_number = foundNutFrame.part_number + "-" + section.tube_no;
                nutFrame.quantity = 1
                nutFrame.material = "-"

                this.mast.bom.push(nutFrame)
            }

            // UPPER KEYS
            if (section.config_suffix !== 'B' && section.config_suffix !== 'T') {

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
                    upperKeyL.quantity = 2

                    this.mast.bom.push(upperKeyL)

                    const upperKeyS = structuredClone(foundUpperKeyShort);
                    upperKeyS.part_number = foundUpperKeyShort.part_number + "-" + section.tube_no + "S";
                    upperKeyS.quantity = 2

                    this.mast.bom.push(upperKeyS)
                }

                if (foundTube.channel_number === 4) {
                    const upperKeyS = structuredClone(foundUpperKeyShort);
                    upperKeyS.part_number = foundUpperKeyShort.part_number + "-" + section.tube_no;
                    upperKeyS.quantity = 4

                    this.mast.bom.push(upperKeyS)
                }
            }

            // ICE BREAKERS
            if (section.config_suffix !== 'T') {

                const foundIceBreaker = mtnx_bom.ice_breakers.find((ib) => {
                    return ib.tube_no === parseInt(section.tube_no);
                });

                const iceBreaker = structuredClone(foundIceBreaker);
                iceBreaker.part_number = foundIceBreaker.part_number + "-" + section.tube_no;
                iceBreaker.quantity = 1
                iceBreaker.material = "-"

                this.mast.bom.push(iceBreaker)
            }

            // LOCK KEYS AND MECHANISMS
            const lockKey = structuredClone(mtnx_bom.lock_key);
            lockKey.quantity = 4 * (this.mast.noOfTubes - 2);
            this.mast.bom.push(lockKey)

            const lockMechanism = structuredClone(mtnx_bom.lock_mechanism);
            lockMechanism.quantity = 4 * (this.mast.noOfTubes - 2);
            this.mast.bom.push(lockMechanism)

            if (section.config_suffix === 'T') {

                // PAYLOAD ADAPTER
                const foundPayloadAdapter = mtnx_bom.payload_adapters.find((pa) => {
                    return pa.tube_no === parseInt(section.tube_no);
                });

                const payloadAdapter = structuredClone(foundPayloadAdapter);
                payloadAdapter.part_number = foundPayloadAdapter.part_number + "-" + section.tube_no;
                payloadAdapter.quantity = 1

                this.mast.bom.push(payloadAdapter)

                // EULER FIXER
                const foundEulerFixer = mtnx_bom.euler_fixers.find((ef) => {
                    return ef.tube_no === parseInt(section.tube_no);
                });

                const eulerFixer = structuredClone(foundEulerFixer);
                eulerFixer.part_number = foundEulerFixer.part_number + "-" + section.tube_no;
                eulerFixer.quantity = 1

                this.mast.bom.push(eulerFixer)

            }






        })

        // GEARBOX
        const gearbox = structuredClone(mtnx_bom.gearboxes.find((g) => g.id === form.gearbox_id));
        gearbox.quantity = 1;
        gearbox.name = "Gear Box " + gearbox.name;
        this.mast.bom.push(gearbox)


        // MOTOR
        const motor = structuredClone(mtnx_bom.motors.find((g) => g.id === form.motor_id));
        motor.quantity = 1;
        motor.name = "Motor " + motor.name;
        this.mast.bom.push(motor)

        // KAMA
        let kama = {}
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
                height: drawState === 'Extended' || drawState === 'Loads' ? this.mast.extendedHeight : this.mast.nestedHeight,
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

            case 'Loads':
                svg.box.h = Math.floor(Math.pow(form.sail_area, 0.5) * 1000 + this.mast.extendedHeight + 1.4 * ground_h);
                svg.box.w = Math.floor(16 * svg.box.h / 19);
                break

            case 'Extended':
                svg.box.h = this.mast.extendedHeight + 1.4 * ground_h;
                svg.box.w = Math.floor(16 * svg.box.h / 19);
                break

            case 'Nested':
                svg.box.h = this.mast.nestedHeight + 1.4 * ground_h;
                svg.box.w = Math.floor(16 * svg.box.h / 19);
                break;
        }

        svg.ground = {
            x: -svg.box.w / 2,
            y: 0,
            w: svg.box.w,
            h: ground_h
        };

        svg.payload = {
            x: -(this.mast.payload.width / 2 - form.x_offset),
            y: drawState === 'Extended' || drawState === 'Loads' ? this.mast.extendedHeight + ground_h : this.mast.nestedHeight + ground_h,
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
        this.mast.sections.forEach(section => {

            let foundTube = this.mast.tubes.find(tube => tube.no === section.tube_no);

            if (foundTube.config_suffix === 'T') {
                svg.payload_adapter = {
                    x: -0.8 * foundTube.od,
                    y: drawState === 'Extended' || drawState === 'Loads' ? this.mast.extendedHeight + ground_h - form.payload_adapter_height : this.mast.nestedHeight + ground_h - form.payload_adapter_height,
                    w: 1.6 * foundTube.od,
                    h: form.payload_adapter_height
                };

            }

            svg.tubes.push({
                x: -foundTube.od / 2,
                y: drawState === 'Extended' || drawState === 'Loads' ? foundTube.extended_zb + ground_h : foundTube.nested_zb + ground_h,
                w: foundTube.od,
                h: foundTube.length,
                load_z: section.wind_load.z,
                load_value: section.wind_load.load,
                zb: drawState === 'Extended' || drawState === 'Loads' ? foundTube.extended_zb : foundTube.nested_zb,
                zt: drawState === 'Extended' || drawState === 'Loads' ? foundTube.extended_zt : foundTube.nested_zt,
            });

            // Side Adapter
            if (foundTube.config_suffix === 'B') {
                svg.side_adapter = {
                    x: 0,
                    y: foundTube.nested_zt - form.overlap / 2,
                    points: [
                        { x: -0.7 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.2 * form.overlap },
                        { x: 2.5 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.2 * form.overlap },
                        { x: 2.5 * foundTube.od, y: ground_h },
                        { x: 1.4 * foundTube.od, y: ground_h },
                        { x: 1.4 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.8 * form.overlap },
                        { x: -0.7 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.8 * form.overlap },
                        { x: -0.7 * foundTube.od, y: foundTube.nested_zt + ground_h - 0.2 * form.overlap },

                    ]

                };
            }
        });


        return svg;


    }


}