import {
    tubes_geometry,
    terrain_category,
    air_density,
    dynamic_viscosity_mu,
    drag_coefficient_Cd,
    tip_deflection_percentage,
    alum_6063_density,
    alum_6063_E,
    alum_6063_yield_strength,
    alum_6063_ultimate_strength,
} from "$modules/PDM/Shared/tube_data.js";


import Chart from "chart.js/auto";

export class MastGeometry {
    constructor(mast_parameters) {
        this.mast_parameters = mast_parameters;

        this.mast_parameters.noOfTubes =
            this.mast_parameters.end_tube_no -
            this.mast_parameters.start_tube_no +
            1;

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

        //this.mastCapacityChart("myChart");
    }

    setAllowedTipDeflection() {
        // Limit total tip deflection (in x direction) to tip_deflection_percentage% of the extended height of the mast
        this.allowed_tip_deflection_mm =
            (tip_deflection_percentage * this.mast_parameters.extendedHeight) /
            100; // mm
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
        switch (this.mast_parameters.material) {
            // Aluminum
            default:
                this.tube_material_density = alum_6063_density; // kg/m³
                this.tube_material_e = alum_6063_E; // Pa
                this.tube_yield_strength = alum_6063_yield_strength; // Pa
                this.tube_ultimate_strength = alum_6063_ultimate_strength; // Pa
                break;
        }

        // Find Z-Offset
        this.mast_parameters.z_offset = Math.sqrt(this.mast_parameters.sail_area * 1e6) / 2; // mm
    }

    setMastTubes() {
        this.mast_parameters.tubes = [];

        tubes_geometry.forEach((tube) => {
            if (
                tube.no >= this.mast_parameters.start_tube_no &&
                tube.no <= this.mast_parameters.end_tube_no
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
                    this.mast_parameters.tube_length / 1000,
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

                this.mast_parameters.tubes.push(tube);
            }
        });
    }

    findQ(tube) {
        let q = (Math.pow(tube.od / 2, 3) - Math.pow(tube.id / 2, 3)) / 6;
        return q; // mm3
    }

    setMastHeights() {
        this.mast_parameters.extendedHeight =
            this.mast_parameters.noOfTubes * this.mast_parameters.tube_length -
            (this.mast_parameters.noOfTubes - 1) *
                this.mast_parameters.overlap +
            this.mast_parameters.payload_adapter_height +
            this.mast_parameters.base_adapter_height;
        this.mast_parameters.nestedHeight =
            this.mast_parameters.tube_length +
            (this.mast_parameters.noOfTubes - 1) *
                this.mast_parameters.head_height +
            this.mast_parameters.payload_adapter_height +
            this.mast_parameters.base_adapter_height;
    }

    setZPositions() {
        let ezb, ezt, nzb, nzt;

        this.mast_parameters.tubes.forEach((tube, index) => {
            if (index === 0) {
                // Extended State
                ezt =
                    this.mast_parameters.extendedHeight -
                    this.mast_parameters.payload_adapter_height;
                ezb = ezt - this.mast_parameters.tube_length;

                // Nested State
                nzt =
                    this.mast_parameters.nestedHeight -
                    this.mast_parameters.payload_adapter_height;
                nzb = nzt - this.mast_parameters.tube_length;
            } else {
                // Extended State
                ezt = ezb + this.mast_parameters.overlap;
                ezb = ezt - this.mast_parameters.tube_length;

                // Nested State
                nzt = nzt - this.mast_parameters.head_height;
                nzb = nzt - this.mast_parameters.tube_length;
            }

            this.mast_parameters.tubes[index].nested_zb = nzb;
            this.mast_parameters.tubes[index].nested_zt = nzt;

            this.mast_parameters.tubes[index].extended_zb = ezb;
            this.mast_parameters.tubes[index].extended_zt = ezt;
        });

        // Side Adapter
        const lastTube = this.mast_parameters.tubes.at(-1);

        this.mast_parameters.side_adapter_z =
            lastTube.extended_zt - this.mast_parameters.overlap / 2;
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

        const terrain = terrain_category.find(
            (cat) => cat.no === this.mast_parameters.terrain_category,
        );

        this.mast_parameters.tubes.forEach((tube, i) => {
            if (i != this.mast_parameters.noOfTubes - 1) {
                exposed_length =
                    this.mast_parameters.tube_length -
                    this.mast_parameters.overlap; // mm

                this.mast_parameters.tubes[i].wind_load_z =
                    tube.extended_zt - exposed_length / 2;
            } else {
                exposed_length = tube.extended_zt; // mm

                this.mast_parameters.tubes[i].wind_load_z =
                    tube.extended_zt / 2;
            }

            this.mast_parameters.tubes[i].reference_area =
                (tube.od * exposed_length) / 1000000; // m2

            this.mast_parameters.tubes[i].wind_exposed_length = exposed_length;

            // Reference Height Ze
            this.mast_parameters.tubes[i].Ze = tube.extended_zt;

            // Roughness Length (m)
            this.mast_parameters.tubes[i].roughness_length_Z0 = terrain.z0;

            // Terrain Factor kr
            this.mast_parameters.tubes[i].terrain_factor_kr =
                0.19 * Math.pow(terrain.z0 / 0.05, 0.07);

            // Roughness factor Cr(ze) at the reference height
            this.mast_parameters.tubes[i].max_height = Math.max(
                tube.extended_zt / 1000,
                terrain.zmin,
            ); //m

            this.mast_parameters.tubes[i].roughness_factor_Cr_at_Ze =
                this.mast_parameters.tubes[i].terrain_factor_kr *
                Math.log(this.mast_parameters.tubes[i].max_height / terrain.z0);

            // console.log(
            //     this.mast_parameters.tubes[i].max_height,
            //     terrain.z0,
            //     this.mast_parameters.tubes[i].terrain_factor_kr,
            //     this.mast_parameters.tubes[i].roughness_factor_Cr_at_Ze,
            // );

            // Calculate the mean wind speed at the height of the tube
            this.mast_parameters.tubes[i].mean_wind_speed_Vm =
                (this.mast_parameters.tubes[i].roughness_factor_Cr_at_Ze *
                    this.mast_parameters.wind_speed) /
                3.6; // Convert to m/s

            // Turbulence Intensity
            this.mast_parameters.tubes[i].turbulence_intensity_TI =
                1.0 /
                (1.0 *
                    Math.log(
                        this.mast_parameters.tubes[i].max_height / terrain.z0,
                    ));

            // Basic Velocity Pressure
            // Basic Velocity Pressure Formula: q = 0.5 * ρ * V^2
            this.mast_parameters.tubes[i].basic_velocity_pressure_q =
                0.5 *
                air_density *
                Math.pow(this.mast_parameters.wind_speed / 3.6, 2); // Basic velocity pressure in N/m2

            // Peak Velocity Pressure
            // Peak Velocity Pressure Formula: qp =[ 1+ 7* TI ] * 0.5 *  ρ *  Vm^2
            this.mast_parameters.tubes[i].peak_velocity_pressure_qp =
                (1 +
                    7 * this.mast_parameters.tubes[i].turbulence_intensity_TI) *
                0.5 *
                air_density *
                Math.pow(this.mast_parameters.tubes[i].mean_wind_speed_Vm, 2); // Peak velocity pressure in N/m2

            // Wind velocity corresponding to peak velocity pressure
            // Wind Velocity Formula: Vp = sqrt(2 * qp / ρ)
            this.mast_parameters.tubes[i].wind_velocity_Vp_at_qp = Math.sqrt(
                (2 * this.mast_parameters.tubes[i].peak_velocity_pressure_qp) /
                    air_density,
            ); // Wind velocity in m/s corresponding to peak velocity pressure

            // Reynolds Number
            // Reynolds Number Formula: Re = ρ * Vp * D / μ
            // where:
            // Re = Reynolds number (dimensionless)
            // ρ = air density (kg/m3)
            // Vp = wind velocity (m/s) corresponding to peak velocity pressure
            // D = characteristic length (m) (outer diameter of the tube)
            // μ = dynamic viscosity of air (kg/(m·s)) (assumed to be 1.81e-5 kg/(m·s) at 20°C)
            this.mast_parameters.tubes[i].reynolds_number_Re =
                (this.mast_parameters.tubes[i].wind_velocity_Vp_at_qp *
                    this.mast_parameters.tubes[i].od) /
                1000 /
                dynamic_viscosity_mu; // Reynolds number (dimensionless)

            // Structural Factor
            // Structural Factor is taken as 1.0 for this calculation
            this.mast_parameters.tubes[i].structural_factor = 1.0; // Structural Factor (dimensionless)

            // Surface Roughness
            // Surface Roughness is taken as 0.2 for Aluminum coated tubes
            this.mast_parameters.tubes[i].surface_roughness = 0.2; // Surface Roughness in mm

            // Effective Slenderness
            this.mast_parameters.tubes[i].slenderness_ratio_l_b =
                this.mast_parameters.tube_length / tube.od; // Slenderness ratio (dimensionless)

            if (this.mast_parameters.tube_length / 1000 <= 15) {
                this.mast_parameters.tubes[i].effective_slenderness = Math.min(
                    this.mast_parameters.tubes[i].slenderness_ratio_l_b,
                    70,
                ); // Limit to a maximum of 70
            } else {
                this.mast_parameters.tubes[i].effective_slenderness = Math.min(
                    0.7 * this.mast_parameters.tubes[i].slenderness_ratio_l_b,
                    70,
                ); // Limit to a maximum of 70
            }

            // End Effect Factor : Dimensionless
            if (this.mast_parameters.tubes[i].effective_slenderness <= 10) {
                this.mast_parameters.tubes[i].end_effect_factor =
                    0.6023079 *
                    Math.pow(
                        this.mast_parameters.tubes[i].effective_slenderness,
                        0.0657553,
                    ); // For slenderness less than or equal to 10
            } else {
                this.mast_parameters.tubes[i].end_effect_factor =
                    0.698573 +
                    0.001977401 *
                        this.mast_parameters.tubes[i].effective_slenderness +
                    0.00008741341 *
                        Math.pow(
                            this.mast_parameters.tubes[i].effective_slenderness,
                            2,
                        ) -
                    0.00000103591 *
                        Math.pow(
                            this.mast_parameters.tubes[i].effective_slenderness,
                            3,
                        ); // For slenderness greater than 10
            }

            // Force Coefficient without End Effect
            this.mast_parameters.tubes[i].equivalent_roughness_k_b =
                this.mast_parameters.tubes[i].surface_roughness / tube.od; // Equivalent Roughness

            let force_coefficent =
                1.2 +
                (0.18 *
                    Math.log10(
                        10 *
                            this.mast_parameters.tubes[i]
                                .equivalent_roughness_k_b,
                    )) /
                    (1 +
                        0.4 *
                            Math.log10(
                                this.mast_parameters.tubes[i]
                                    .reynolds_number_Re / 1e6,
                            ));

            if (this.mast_parameters.tubes[i].reynolds_number_Re < 1.8e5) {
                // For Reynolds number less than 1.8e5, use a different formula
                return 1.2;
            } else if (
                this.mast_parameters.tubes[i].reynolds_number_Re >= 1.85e5 &&
                this.mast_parameters.tubes[i].reynolds_number_Re < 4e5
            ) {
                let temp_force_coefficient =
                    0.11 /
                    Math.pow(
                        this.mast_parameters.tubes[i].reynolds_number_Re / 1e6,
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

            this.mast_parameters.tubes[i].force_coefficient_wo_end_effect =
                force_coefficent;

            // Force Coefficient
            // EndEffect Facor * Force Coefficient without End Effect
            // Force Coefficient Formula: Cf = Cfw * EndEffectFactor
            // where:
            // Cf = Force Coefficient (dimensionless)
            // Cfw = Force Coefficient without End Effect (dimensionless)
            // EndEffectFactor = End Effect Factor (dimensionless)
            this.mast_parameters.tubes[i].force_coefficient =
                this.mast_parameters.tubes[i].force_coefficient_wo_end_effect *
                this.mast_parameters.tubes[i].end_effect_factor; // Force Coefficient (dimensionless)

            // ***********************************************************************************
            // Total Wind Force
            // Total Wind Force Formula: Fw = Structural Factor * Force Coefficient * Peak Velocity Pressure * Reference Area
            // ***********************************************************************************

            // console.log(
            //     this.mast_parameters.tubes[i].structural_factor,
            //     this.mast_parameters.tubes[i].force_coefficient,
            //     this.mast_parameters.tubes[i].peak_velocity_pressure_qp,
            //     this.mast_parameters.tubes[i].reference_area,
            // );
            this.mast_parameters.tubes[i].wind_load =
                this.mast_parameters.tubes[i].structural_factor *
                this.mast_parameters.tubes[i].force_coefficient *
                this.mast_parameters.tubes[i].peak_velocity_pressure_qp *
                this.mast_parameters.tubes[i].reference_area;
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
        this.mast_parameters.payload = {
            wind_load_z: null,
            wind_load: null,
        };

        this.mast_parameters.payload.wind_load_z =
            this.mast_parameters.extendedHeight +
            Math.sqrt(this.mast_parameters.sail_area * 1e6) / 2;

        this.mast_parameters.payload.wind_load =
            0.5 *
            air_density *
            drag_coefficient_Cd *
            Math.pow(this.mast_parameters.wind_speed / 3.6, 2) *
            this.mast_parameters.sail_area;
    }

    estimateMastMass() {
        this.mast_parameters.weight = {
            lifted_mass: 0,
            total_mast_mass: 0,
        };

        this.mast_parameters.tubes.forEach((tube) => {
            this.mast_parameters.weight.total_mast_mass += tube.mass; // kg
        });
    }

    findSideAdapterReaction(payload_mass = 100) {
        this.findRootMomentWoSideAdapterReaction(payload_mass);
    }

    findRootMomentWoSideAdapterReaction(payload_mass) {
        let root_moment = 0; // Initialize root moment for each tube
        let shear_force = 0; // Initialize shear force for each tube

        let moment_b, moment_t,moment_at_wind_load;
        let z_coordinate_b, z_coordinate_t;

        this.mast_parameters.tubes.forEach((tube, i) => {
            // Find root moment caused by each wind load (without side adapter force moment)
            root_moment = (tube.wind_load * tube.wind_load_z) / 1000; // Convert to Nm
            shear_force = (tube.wind_load * tube.wind_load_z) / 1000; // Convert to Nm

            this.mast_parameters.tubes[i].moments = {};

            let a = {};

            this.mast_parameters.tubes.forEach((t, k) => {
                // moment formula
                moment_b = (root_moment / tube.wind_load_z) * t.extended_zb - root_moment;
                moment_at_wind_load = (root_moment / tube.wind_load_z) * t.wind_load_z - root_moment;
                moment_t = (root_moment / tube.wind_load_z) * t.extended_zt - root_moment;

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
                    a[this.mast_parameters.extendedHeight] = moment_t;
                }

                // ie Bottom Tube
                if (k === this.mast_parameters.tubes.length - 1) {
                    a[0] = -root_moment;
                }

                a[t.wind_load_z] = moment_at_wind_load;
                a[t.extended_zb] = moment_b;
                a[t.extended_zt] = moment_t;
            });

            this.mast_parameters.tubes[i].moments = a;
        });

        // Z-Offset Moment Calculation
        // Add moment caused by z_offset shift of payload wind load from the top of the mast to the payload center of pressure
        this.mast_parameters.payload.tip_moment_due_z_offset_Nm =
            -(this.mast_parameters.payload.wind_load *
                this.mast_parameters.z_offset) /
            1000; // Convert to Nm

        // X-Offset Moment Calculation
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load
        this.mast_parameters.payload.tip_moment_due_x_offset_Nm =
            -(9.81 * payload_mass *
                this.mast_parameters.x_offset) /
            1000; // Convert to Nm

        // Moment Caused by Deflection of the Mast under Wind Load
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load, limited to a maximum of tip_deflection_percentage % of the extended height of the mast
        this.mast_parameters.payload.tip_moment_due_deflection_Nm =
            -(9.81 * payload_mass * this.allowed_tip_deflection_mm) / 1000; // Convert to Nm

        console.log("Buraya mast ağırlığı da eklenecek)");

        // Total Tip Moment - Constant throughout the mast
        this.mast_parameters.payload.total_tip_moment_Nm =
            this.mast_parameters.payload.tip_moment_due_z_offset_Nm +
            this.mast_parameters.payload.tip_moment_due_x_offset_Nm +
            this.mast_parameters.payload.tip_moment_due_deflection_Nm;

        // Find total_moments_and_shear_forces at each tube section by adding the moment caused by the side adapter reaction force to the root moment calculated above for each tube section
        this.mast_parameters.total_moments = {};

        const total_moments = {};
        const sortedKeys = Object.keys(
            this.mast_parameters.tubes[0].moments,
        ).sort((a, b) => Number(a) - Number(b));

        sortedKeys.forEach((key) => {
            total_moments[key] = 0;
        });



        this.mast_parameters.payload.moments = {};

        let payload_root_moment = this.mast_parameters.payload.wind_load * this.mast_parameters.extendedHeight / 1000; // Nm
        let slope = payload_root_moment / this.mast_parameters.extendedHeight; // N/mm

        sortedKeys.forEach((key) => {
            this.mast_parameters.payload.moments[key] = (slope * key - payload_root_moment) + this.mast_parameters.payload.total_tip_moment_Nm;
        });


        this.mast_parameters.tubes.forEach((tube, i) => {
            sortedKeys.forEach((key) => {
                total_moments[key] += tube.moments[key];
            });
        });

        sortedKeys.forEach((key) => {
            total_moments[key] += this.mast_parameters.payload.moments[key];
        });



        this.mast_parameters.total_moments = total_moments;

        // M/EI in 1/m





        let z_mei_start, z_mei_end;

        this.mast_parameters.tubes.forEach((tube, i) => {

            if (i > 0 && i < this.mast_parameters.noOfTubes - 1) {
                z_mei_start = this.mast_parameters.tubes[i+1].extended_zt;
                z_mei_end = tube.extended_zt;
            }

            // When tube is at the top end
            if (i === 0) {
                z_mei_end = this.mast_parameters.extendedHeight;
                z_mei_start = this.mast_parameters.tubes[i+1].extended_zt;
            }

            // When tube is biggest (at the bottom end)
            if (tube.od === this.mast_parameters.tubes.at(-1).od) {
                z_mei_end = tube.extended_zt;
                z_mei_start = 0;
            }

            this.mast_parameters.tubes[i].M_EI = {
                [z_mei_start]: total_moments[z_mei_start] / tube.EI_Nm2,
                [z_mei_end]: total_moments[z_mei_end] / tube.EI_Nm2,
            };




        });

        // Find deflection at side adapter location
        this.mast_parameters.deflection_at_side_adapter =
            this.findDeflectionAtGivenPoint(
                this.mast_parameters.side_adapter_z,
            );

        // Find deflection at payload location
        this.mast_parameters.deflection_at_mast_tip =
            this.findDeflectionAtGivenPoint(
                this.mast_parameters.extendedHeight,
            );

        // Find Reaction Force at Side Adapter
        // def = PL^3/(3EI)
        // P = 3EI*deflection/(L^3)
        this.mast_parameters.reaction_force_at_side_adapter =
            (3 *
                this.mast_parameters.tubes.at(-1).EI_Nm2 *
                this.mast_parameters.deflection_at_side_adapter) /
            Math.pow(this.mast_parameters.side_adapter_z / 1000, 3);

        // console.log(
        //     "ei",
        //     this.mast_parameters.tubes.at(-1).EI_Nm2,
        //     "def",
        //     this.mast_parameters.deflection_at_side_adapter,
        //     "height",
        //     this.mast_parameters.side_adapter_z,
        // );
    }

    findDeflectionAtGivenPoint(height) {
        let z_start, z_end;
        let mei_start, mei_end;

        let moment_area, xbar;
        let delta_z, delta_m;
        let deflection = 0;
        let slope;

        this.mast_parameters.tubes.forEach((tube, i) => {
            z_start = tube.extended_zb;
            // When tube is biggest (at the bottom end)
            if (tube.od === this.mast_parameters.tubes.at(-1).od) {
                z_start = 0;
            }

            if (i === 0) {
                z_end = this.mast_parameters.extendedHeight;
            } else {
                z_end = tube.extended_zt;
            }

            mei_start = tube.M_EI[z_start];
            mei_end = tube.M_EI[z_end];

            if (height < tube.extended_zt) {
                // console.log(
                //     "burada",
                //     i,
                //     "mei_start",
                //     mei_start,
                //     "mei_end",
                //     mei_end,
                //     "z_end",
                //     z_end,
                //     "z_start",
                //     z_start,
                // );

                delta_m = Math.abs(mei_end - mei_start); //
                delta_z = Math.abs(z_end - z_start) / 1000; // m

                moment_area = ((mei_start + mei_end) * delta_z) / 2;

                xbar =
                    (delta_z * delta_m + (2 * delta_m) / 3) /
                    (2 * mei_start + mei_end);

                xbar += Math.abs(height - z_end);

                deflection += (xbar * moment_area) / 1000;

                //console.log("deflection1", deflection, i);
            } else if (z_start < height < z_end) {
                delta_m = Math.abs(tube.M_EI[z_end] - tube.M_EI[z_start]); //
                delta_z = Math.abs(z_end - z_start) / 1000; // m

                slope = delta_m / delta_z;

                mei_end = mei_start + (slope * (height - z_start)) / 1000;

                delta_m = Math.abs(mei_end - mei_start);
                delta_z = Math.abs(height - z_start) / 1000; // m

                moment_area = ((mei_start + mei_end) * delta_z) / 2;

                xbar =
                    (delta_z * delta_m + (2 * delta_m) / 3) /
                    (2 * mei_start + mei_end);

                xbar += Math.abs(height - z_end);

                deflection += (xbar * moment_area) / 1000;

                //console.log("deflection2", deflection, i);
            }
        });

        // console.log("Deflection", deflection);

        return deflection;
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
