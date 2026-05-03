import Chart from "chart.js/auto";

export class MastGeometry {
    constructor(params, config) {
        this.params = params;
        this.config = config;
        this.power = {};

        this.params.noOfTubes =
            this.params.end_tube_no - this.params.start_tube_no + 1;

        this.payload_mass = null;
        this.extendedHeight = null;
        this.nestedHeight = null;

        this.tube_material_density = null;
        this.tube_material_e = null;
        this.tube_yield_strength = null;
        this.tube_ultimate_strength = null;

        this.allowed_tip_deflection_mm = null;

        this.setDependentProps();
        this.setMastTubes();
        this.setMastHeights();
        this.setAllowedTipDeflection();
        this.setZPositions();
        this.windLoadsOnTubes();
        this.windLoadOnPayload();
        this.estimateMastMass();
        this.findSideAdapterReaction();

        this.torqueRequired();

        //this.mastCapacityChart("myChart");
    }

    setAllowedTipDeflection() {
        // Limit total tip deflection (in x direction) to tip_deflection_percentage% of the extended height of the mast
        this.allowed_tip_deflection_mm =
            (this.config.tip_deflection_percentage * this.extendedHeight) / 100; // mm
    }

    setCircularArea(tube) {
        return Math.PI * tube.od * tube.thk;
    }

    setCircularMomentOfInertia(tube) {
        return (Math.PI * (tube.od ** 4 - tube.id ** 4)) / 64;
    }

    calculateMass(tube, length) {
        return (tube.area_mm2 * length * this.tube_material_density) / 1000000; // kg
    }

    setDependentProps() {
        switch (this.params.material) {
            // Aluminum
            default:
                this.tube_material_density = this.config.alum_6063_density; // kg/m³
                this.tube_material_e = this.config.alum_6063_E; // Pa
                this.tube_yield_strength = this.config.alum_6063_yield_strength; // Pa
                this.tube_ultimate_strength =
                    this.config.alum_6063_ultimate_strength; // Pa
                break;
        }

        // // Find Z-Offset
        // this.params.z_offset =
        //     Math.sqrt(this.params.sail_area * 1e6) / 2; // mm
    }

    setMastTubes() {
        this.params.tubes = [];

        this.config.tubes.forEach((tube) => {
            if (
                tube.no >= this.params.start_tube_no &&
                tube.no <= this.params.end_tube_no
            ) {
                // Set material properties
                tube.material_density = this.tube_material_density;
                tube.material_e = this.tube_material_e;
                tube.yield_strength = this.tube_yield_strength;
                tube.ultimate_strength = this.tube_ultimate_strength;

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

                this.params.tubes.push(tube);
            }
        });
    }

    findQ(tube) {
        let q = (Math.pow(tube.od / 2, 3) - Math.pow(tube.id / 2, 3)) / 6;
        return q; // mm3
    }

    setMastHeights() {
        this.extendedHeight =
            this.params.noOfTubes * this.params.tube_length -
            (this.params.noOfTubes - 1) * this.params.overlap +
            this.params.payload_adapter_height +
            this.params.base_adapter_height;

        this.nestedHeight =
            this.params.tube_length +
            (this.params.noOfTubes - 1) * this.params.head_height +
            this.params.payload_adapter_height +
            this.params.base_adapter_height;
    }

    setZPositions() {
        let ezb, ezt, nzb, nzt;

        this.params.tubes.forEach((tube, index) => {
            if (index === 0) {
                // Extended State
                ezt = this.extendedHeight - this.params.payload_adapter_height;
                ezb = ezt - this.params.tube_length;

                // Nested State
                nzt = this.nestedHeight - this.params.payload_adapter_height;
                nzb = nzt - this.params.tube_length;
            } else {
                // Extended State
                ezt = ezb + this.params.overlap;
                ezb = ezt - this.params.tube_length;

                // Nested State
                nzt = nzt - this.params.head_height;
                nzb = nzt - this.params.tube_length;
            }

            this.params.tubes[index].nested_zb = nzb;
            this.params.tubes[index].nested_zt = nzt;

            this.params.tubes[index].extended_zb = ezb;
            this.params.tubes[index].extended_zt = ezt;
        });

        // Side Adapter
        const lastTube = this.params.tubes.at(-1);

        this.side_adapter_z = lastTube.extended_zt - this.params.overlap / 2;
    }

    windLoadsOnTubes() {
        /*
            1. Calculate Reference Area
            2. Calculate Reference Height
            3. Calculate Terrain Factor kr
            4. Calculate The roughness factor cr(ze) at the reference height
            5. Cacculate Mean Velocity
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

        let exposed_length;

        const terrain = this.config.terrain_category.find(
            (cat) => cat.no === this.params.terrain_category,
        );

        this.params.tubes.forEach((tube, i) => {
            if (i != this.params.noOfTubes - 1) {
                exposed_length = this.params.tube_length - this.params.overlap; // mm

                this.params.tubes[i].wind_load_z =
                    tube.extended_zt - exposed_length / 2;
            } else {
                exposed_length = tube.extended_zt; // mm

                this.params.tubes[i].wind_load_z = tube.extended_zt / 2;
            }

            this.params.tubes[i].reference_area =
                (tube.od * exposed_length) / 1000000; // m2

            this.params.tubes[i].wind_exposed_length = exposed_length;

            // Reference Height Ze
            this.params.tubes[i].Ze = tube.extended_zt;

            // Roughness Length (m)
            this.params.tubes[i].roughness_length_Z0 = terrain.z0;

            // Terrain Factor kr
            this.params.tubes[i].terrain_factor_kr =
                0.19 * Math.pow(terrain.z0 / 0.05, 0.07);

            // Roughness factor Cr(ze) at the reference height
            this.params.tubes[i].max_height = Math.max(
                tube.extended_zt / 1000,
                terrain.zmin,
            ); //m

            this.params.tubes[i].roughness_factor_Cr_at_Ze =
                this.params.tubes[i].terrain_factor_kr *
                Math.log(this.params.tubes[i].max_height / terrain.z0);

            // Calculate the mean wind speed at the height of the tube
            this.params.tubes[i].mean_wind_speed_Vm =
                (this.params.tubes[i].roughness_factor_Cr_at_Ze *
                    this.params.wind_speed) /
                3.6; // Convert to m/s

            // Turbulence Intensity
            this.params.tubes[i].turbulence_intensity_TI =
                1.0 /
                (1.0 * Math.log(this.params.tubes[i].max_height / terrain.z0));

            // Basic Velocity Pressure
            // Basic Velocity Pressure Formula: q = 0.5 * ρ * V^2
            this.params.tubes[i].basic_velocity_pressure_q =
                0.5 *
                this.config.air_density *
                Math.pow(this.params.wind_speed / 3.6, 2); // Basic velocity pressure in N/m2

            // Peak Velocity Pressure
            // Peak Velocity Pressure Formula: qp =[ 1+ 7* TI ] * 0.5 *  ρ *  Vm^2
            this.params.tubes[i].peak_velocity_pressure_qp =
                (1 + 7 * this.params.tubes[i].turbulence_intensity_TI) *
                0.5 *
                this.config.air_density *
                Math.pow(this.params.tubes[i].mean_wind_speed_Vm, 2); // Peak velocity pressure in N/m2

            // Wind velocity corresponding to peak velocity pressure
            // Wind Velocity Formula: Vp = sqrt(2 * qp / ρ)
            this.params.tubes[i].wind_velocity_Vp_at_qp = Math.sqrt(
                (2 * this.params.tubes[i].peak_velocity_pressure_qp) /
                    this.config.air_density,
            ); // Wind velocity in m/s corresponding to peak velocity pressure

            // Reynolds Number
            // Reynolds Number Formula: Re = ρ * Vp * D / μ
            // where:
            // Re = Reynolds number (dimensionless)
            // ρ = air density (kg/m3)
            // Vp = wind velocity (m/s) corresponding to peak velocity pressure
            // D = characteristic length (m) (outer diameter of the tube)
            // μ = dynamic viscosity of air (kg/(m·s)) (assumed to be 1.81e-5 kg/(m·s) at 20°C)
            this.params.tubes[i].reynolds_number_Re =
                (this.params.tubes[i].wind_velocity_Vp_at_qp *
                    this.params.tubes[i].od) /
                1000 /
                this.config.dynamic_viscosity_mu; // Reynolds number (dimensionless)

            // Structural Factor
            // Structural Factor is taken as 1.0 for this calculation
            this.params.tubes[i].structural_factor = 1.0; // Structural Factor (dimensionless)

            // Surface Roughness
            // Surface Roughness is taken as 0.2 for Aluminum coated tubes
            this.params.tubes[i].surface_roughness = 0.2; // Surface Roughness in mm

            // Effective Slenderness
            this.params.tubes[i].slenderness_ratio_l_b =
                this.params.tube_length / tube.od; // Slenderness ratio (dimensionless)

            if (this.params.tube_length / 1000 <= 15) {
                this.params.tubes[i].effective_slenderness = Math.min(
                    this.params.tubes[i].slenderness_ratio_l_b,
                    70,
                ); // Limit to a maximum of 70
            } else {
                this.params.tubes[i].effective_slenderness = Math.min(
                    0.7 * this.params.tubes[i].slenderness_ratio_l_b,
                    70,
                ); // Limit to a maximum of 70
            }

            // End Effect Factor : Dimensionless
            if (this.params.tubes[i].effective_slenderness <= 10) {
                this.params.tubes[i].end_effect_factor =
                    0.6023079 *
                    Math.pow(
                        this.params.tubes[i].effective_slenderness,
                        0.0657553,
                    ); // For slenderness less than or equal to 10
            } else {
                this.params.tubes[i].end_effect_factor =
                    0.698573 +
                    0.001977401 * this.params.tubes[i].effective_slenderness +
                    0.00008741341 *
                        Math.pow(
                            this.params.tubes[i].effective_slenderness,
                            2,
                        ) -
                    0.00000103591 *
                        Math.pow(this.params.tubes[i].effective_slenderness, 3); // For slenderness greater than 10
            }

            // Force Coefficient without End Effect
            this.params.tubes[i].equivalent_roughness_k_b =
                this.params.tubes[i].surface_roughness / tube.od; // Equivalent Roughness

            let force_coefficent =
                1.2 +
                (0.18 *
                    Math.log10(
                        10 * this.params.tubes[i].equivalent_roughness_k_b,
                    )) /
                    (1 +
                        0.4 *
                            Math.log10(
                                this.params.tubes[i].reynolds_number_Re / 1e6,
                            ));

            if (this.params.tubes[i].reynolds_number_Re < 1.8e5) {
                // For Reynolds number less than 1.8e5, use a different formula
                return 1.2;
            } else if (
                this.params.tubes[i].reynolds_number_Re >= 1.85e5 &&
                this.params.tubes[i].reynolds_number_Re < 4e5
            ) {
                let temp_force_coefficient =
                    0.11 /
                    Math.pow(
                        this.params.tubes[i].reynolds_number_Re / 1e6,
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

            this.params.tubes[i].force_coefficient_wo_end_effect =
                force_coefficent;

            // Force Coefficient
            // EndEffect Facor * Force Coefficient without End Effect
            // Force Coefficient Formula: Cf = Cfw * EndEffectFactor
            // where:
            // Cf = Force Coefficient (dimensionless)
            // Cfw = Force Coefficient without End Effect (dimensionless)
            // EndEffectFactor = End Effect Factor (dimensionless)
            this.params.tubes[i].force_coefficient =
                this.params.tubes[i].force_coefficient_wo_end_effect *
                this.params.tubes[i].end_effect_factor; // Force Coefficient (dimensionless)

            // ***********************************************************************************
            // Total Wind Force
            // Total Wind Force Formula: Fw = Structural Factor * Force Coefficient * Peak Velocity Pressure * Reference Area
            // ***********************************************************************************

            this.params.tubes[i].wind_load =
                this.params.tubes[i].structural_factor *
                this.params.tubes[i].force_coefficient *
                this.params.tubes[i].peak_velocity_pressure_qp *
                this.params.tubes[i].reference_area;
        });
    }

    windLoadOnPayload() {
        /*
            Dynamic Pressure Formula:
            1/2 * rho * V^2 * A
            where
            - rho: air density (kg/m^3)
            - V: wind velocity (m/s)
            - A: sail area (m^2)
        */
        this.payload = {
            wind_load_z: null,
            wind_load: null,
        };

        this.payload.wind_load_z =
            this.extendedHeight + Math.sqrt(this.params.sail_area * 1e6) / 2;

        this.payload.wind_load =
            0.5 *
            this.config.air_density *
            this.config.drag_coefficient_Cd *
            Math.pow(this.params.wind_speed / 3.6, 2) *
            this.params.sail_area;
    }

    estimateMastMass() {
        this.weight = {
            lifted_mass: 0,
            total_mast_mass: 0,
        };

        this.params.tubes.forEach((tube) => {
            this.weight.total_mast_mass += tube.mass; // kg
        });
    }

    findSideAdapterReaction(payload_mass = 100) {
        this.findRootMomentWoSideAdapterReaction(payload_mass);
    }

    findRootMomentWoSideAdapterReaction(payload_mass) {
        let root_moment = 0; // Initialize root moment for each tube
        let shear_force = 0; // Initialize shear force for each tube

        let moment_b, moment_t, moment_at_wind_load;
        let z_coordinate_b, z_coordinate_t;

        this.params.tubes.forEach((tube, i) => {
            // Find root moment caused by each wind load (without side adapter force moment)
            root_moment = (tube.wind_load * tube.wind_load_z) / 1000; // Convert to Nm
            shear_force = (tube.wind_load * tube.wind_load_z) / 1000; // Convert to Nm

            this.params.tubes[i].moments = {};

            let a = {};

            this.params.tubes.forEach((t, k) => {
                // moment formula
                moment_b =
                    (root_moment / tube.wind_load_z) * t.extended_zb -
                    root_moment;
                moment_at_wind_load =
                    (root_moment / tube.wind_load_z) * t.wind_load_z -
                    root_moment;
                moment_t =
                    (root_moment / tube.wind_load_z) * t.extended_zt -
                    root_moment;

                if (moment_t > 0) {
                    moment_t = 0;
                }

                if (moment_b > 0) {
                    moment_b = 0;
                }

                if (moment_at_wind_load > 0) {
                    moment_at_wind_load = 0;
                }

                z_coordinate_b = "moment_at_" + t.extended_zb;
                z_coordinate_t = "moment_at_" + t.extended_zt;

                // ie Top Tube
                if (k === 0) {
                    a[this.extendedHeight] = moment_t;
                }

                // ie Bottom Tube
                if (k === this.params.tubes.length - 1) {
                    a[0] = -root_moment;
                }

                a[t.wind_load_z] = moment_at_wind_load;
                a[t.extended_zb] = moment_b;
                a[t.extended_zt] = moment_t;
            });

            this.params.tubes[i].moments = a;
        });

        // Z-Offset Moment Calculation
        // Add moment caused by z_offset shift of payload wind load from the top of the mast to the payload center of pressure
        this.payload.tip_moment_due_z_offset_Nm =
            -(this.payload.wind_load * this.params.z_offset) / 1000; // Convert to Nm

        // X-Offset Moment Calculation
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load
        this.payload.tip_moment_due_x_offset_Nm =
            -(9.81 * payload_mass * this.params.x_offset) / 1000; // Convert to Nm

        // Moment Caused by Deflection of the Mast under Wind Load
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load, limited to a maximum of tip_deflection_percentage % of the extended height of the mast
        this.payload.tip_moment_due_deflection_Nm =
            -(9.81 * payload_mass * this.allowed_tip_deflection_mm) / 1000; // Convert to Nm

        console.log("Buraya mast ağırlığı da eklenecek)");

        // Total Tip Moment - Constant throughout the mast
        this.payload.total_tip_moment_Nm =
            this.payload.tip_moment_due_z_offset_Nm +
            this.payload.tip_moment_due_x_offset_Nm +
            this.payload.tip_moment_due_deflection_Nm;

        // Find total_moments_and_shear_forces at each tube section by adding the moment caused by the side adapter reaction force to the root moment calculated above for each tube section
        this.params.total_moments = {};

        const total_moments = {};
        const sortedKeys = Object.keys(this.params.tubes[0].moments).sort(
            (a, b) => Number(a) - Number(b),
        );

        sortedKeys.forEach((key) => {
            total_moments[key] = 0;
        });

        this.payload.moments = {};

        let payload_root_moment =
            (this.payload.wind_load * this.extendedHeight) / 1000; // Nm
        let slope = payload_root_moment / this.extendedHeight; // N/mm

        sortedKeys.forEach((key) => {
            this.payload.moments[key] =
                slope * key -
                payload_root_moment +
                this.payload.total_tip_moment_Nm;
        });

        this.params.tubes.forEach((tube, i) => {
            sortedKeys.forEach((key) => {
                total_moments[key] += tube.moments[key];
            });
        });

        sortedKeys.forEach((key) => {
            total_moments[key] += this.payload.moments[key];
        });

        this.params.total_moments = total_moments;

        // M/EI in 1/m

        let z_mei_start, z_mei_end;

        this.params.tubes.forEach((tube, i) => {
            if (i > 0 && i < this.params.noOfTubes - 1) {
                z_mei_start = this.params.tubes[i + 1].extended_zt;
                z_mei_end = tube.extended_zt;
            }

            // When tube is at the top end
            if (i === 0) {
                z_mei_end = this.extendedHeight;
                if (this.params.tubes.length > 1) {
                    z_mei_start = this.params.tubes[i + 1].extended_zt;
                }
            }

            // When tube is biggest (at the bottom end)
            if (tube.od === this.params.tubes.at(-1).od) {
                z_mei_end = tube.extended_zt;
                z_mei_start = 0;
            }

            // When there is single tube
            if (this.params.tubes.length === 1) {
                z_mei_start = 0;
                z_mei_end = this.extendedHeight;
            }

            this.params.tubes[i].M_EI = {
                [z_mei_start]: total_moments[z_mei_start] / tube.EI_Nm2,
                [z_mei_end]: total_moments[z_mei_end] / tube.EI_Nm2,
            };
        });

        this.params.deflections = {};
        // Find deflection at side adapter location
        this.params.deflections["at_side_adapter"] =
            this.findDeflectionAtGivenPoint(this.side_adapter_z);

        // Find deflection at payload location
        this.params.deflections["at_mast_tip"] =
            this.findDeflectionAtGivenPoint(this.extendedHeight);

        // Find Reaction Force at Side Adapter
        // def = PL^3/(3EI)
        // P = 3EI*deflection/(L^3)
        this.params.reaction_force_at_side_adapter =
            (3 *
                this.params.tubes.at(-1).EI_Nm2 *
                this.params.deflection_at_side_adapter) /
            Math.pow(this.side_adapter_z / 1000, 3);
    }

    findDeflectionAtGivenPoint(height) {
        let z_start, z_end;
        let mei_start, mei_end, mei_height;

        let moment_area, xbar;
        let delta_z, delta_m;
        let deflection = 0;

        // Moment-Area Method
        // M/EI Diagram Area * xbar

        this.params.tubes.forEach((tube, i) => {
            if (height > tube.extended_zb) {
                if (height < tube.extended_zt) {
                    // Use All Area between extended_zb and height
                    // ------------------------------------------------
                    z_end = tube.extended_zt;

                    // When tube is biggest (at the bottom end)
                    if (tube.od === this.params.tubes.at(-1).od) {
                        z_start = 0;
                    } else {
                        z_start = this.params.tubes[i + 1].extended_zt;
                    }

                    if (i === 0) {
                        z_end = this.extendedHeight;
                    }

                    mei_end = tube.M_EI[z_end];
                    mei_start = tube.M_EI[z_start];

                    // Find M/EI corresponding to height
                    if (mei_end < mei_start) {
                        mei_height =
                            mei_start -
                            ((mei_start - mei_end) * (height - z_start)) /
                                (z_end - z_start);
                    } else {
                        mei_height =
                            mei_start +
                            ((mei_end - mei_start) * (height - z_start)) /
                                (z_end - z_start);
                    }

                    mei_end = mei_height;
                    z_end = height;
                } else {
                    // Use All Area between extended_zb and extended_zt
                    // ------------------------------------------------
                    z_end = tube.extended_zt;

                    // When tube is biggest (at the bottom end)
                    if (tube.od === this.params.tubes.at(-1).od) {
                        z_start = 0;
                    } else {
                        z_start = this.params.tubes[i + 1].extended_zt;
                    }

                    if (i === 0) {
                        z_end = this.extendedHeight;
                    }

                    mei_end = tube.M_EI[z_end];
                    mei_start = tube.M_EI[z_start];
                }

                // Find Moment-Area
                delta_z = z_end - z_start;
                delta_m = Math.abs(mei_end - mei_start);

                moment_area = ((mei_start + mei_end) * delta_z) / 2;

                // xbar calculation
                if (mei_end > mei_start) {
                    xbar =
                        (delta_z * (mei_start + (2 * delta_m) / 3)) /
                        (mei_start + mei_end);
                } else {
                    xbar =
                        (delta_z * (mei_start + (1 * delta_m) / 3)) /
                        (mei_end + mei_start);
                }

                // Deflection calculation
                deflection += (xbar * moment_area) / 1000;
            }
        });

        console.log("Deflection", deflection);

        return deflection;
    }

    torqueRequired() {
        // Torque Required to Extend the Mast
        let torque, torque_required_to_extend_mast_Nm;
        let load = this.params.payload_weight * 9.81; // N

        let thread_angle = Math.atan(
            this.config.screw_lead /
                (Math.PI * this.config.screw_nominal_diameter),
        ); // Thread angle in degrees
        let secant = 1 / Math.cos(thread_angle);

        torque =
            (0.5 *
                load *
                this.config.screw_nominal_diameter *
                (this.config.screw_lead +
                    Math.PI *
                        this.config.screw_coefficient_of_friction *
                        this.config.screw_nominal_diameter *
                        secant)) /
            (Math.PI * this.config.screw_nominal_diameter -
                this.config.screw_coefficient_of_friction *
                    this.config.screw_lead *
                    secant) /
            1000; // Convert to Nm

        //console.log("Torque Required to Extend the Mast (Nm):", torque);
        this.power.torque_required_to_extend_mast_Nm = torque;
        this.getMotorTorque();
        this.getLiftingTorque();
        this.getScrewSpeed();
    }

    getMotorTorque() {
        this.power.motor_power = this.config.motors.find(
            (g) => g.id === this.params.motor_id,
        )?.power_kW;

        this.power.motor_rpm = this.config.motors.find(
            (g) => g.id === this.params.motor_id,
        )?.max_speed_rpm;

        this.power.motor_torque =
            (9550 * this.power.motor_power) / this.power.motor_rpm;
    }

    getLiftingTorque() {
        this.power.lifting_torque =
            this.power.motor_torque *
            this.config.gearboxes.find((g) => g.id === this.params.gearbox_id)
                ?.gear_ratio;
    }

    getScrewSpeed() {
        this.power.gearbox_ratio = this.config.gearboxes.find(
            (g) => g.id === this.params.gearbox_id,
        )?.gear_ratio;

        this.power.screw_rpm = this.power.motor_rpm / this.power.gearbox_ratio;
        this.power.vertical_speed =
            (this.power.screw_rpm * this.config.screw_lead) / 1000; // Convert RPM to m/min
    }

    mastCapacityChart(elementId) {
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];

        new Chart(document.getElementById(elementId), {
            type: "line",
            data: {
                labels: ["Base", "Top"],
                datasets: [
                    {
                        label: "Bending Moment (Nm)",
                        data: data.map((row) => row.count),
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }
}
