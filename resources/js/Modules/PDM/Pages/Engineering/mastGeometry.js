//import Chart from "chart.js/auto";

export class MastGeometry {
    constructor(params, config) {
        this.data = {
            params: JSON.parse(JSON.stringify(params)),
            config: config,
            power: {},
            deflections: {},
            loads: {},
            weights: {},
            props: {},
            beam: [],
        };

        //console.log("Mast Geometry Data", this.data);

        this.setDependentProps();
        this.setMastTubes();
        this.setMastHeights();
        this.setZPositions();
        this.setBeamProps();
        this.windLoadsOnTubes();
        this.windLoadOnPayload();
        this.estimateMastMass();
        this.torqueRequired();
        this.getMastMass();
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

    setDependentProps() {
        this.data.params.noOfTubes =
            this.data.params.end_tube_no - this.data.params.start_tube_no + 1;

        switch (this.data.params.material) {
            // Aluminum
            default:
                this.data.params.tube_material_density =
                    this.data.config.alum_6063_density; // kg/m³
                this.data.params.tube_material_e = this.data.config.alum_6063_E; // Pa
                this.data.params.tube_yield_strength =
                    this.data.config.alum_6063_yield_strength; // Pa
                this.data.params.tube_ultimate_strength =
                    this.data.config.alum_6063_ultimate_strength; // Pa
                break;
        }
    }

    setMastTubes() {
        this.data.params.tubes = [];

        this.data.config.tubes.forEach((tube) => {
            if (
                tube.no >= this.data.params.start_tube_no &&
                tube.no <= this.data.params.end_tube_no
            ) {
                // Set material properties
                tube.material_density = this.data.params.tube_material_density;
                tube.material_e = this.data.params.tube_material_e;
                tube.yield_strength = this.data.params.tube_yield_strength;
                tube.ultimate_strength =
                    this.data.params.tube_ultimate_strength;

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
                    this.data.params.tube_length / 1000,
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

        this.data.params.tubes.forEach((tube, index) => {
            if (index === 0) {
                // if top
                z_top = this.data.props.extendedHeight;
                z_bottom = this.data.params.tubes[index + 1].extended_zt;
            } else if (this.data.params.tubes.length === index + 1) {
                // if bottom
                z_bottom = 0;
                z_top = tube.extended_zt;
            } else {
                // in the middle
                z_top = z_bottom;
                z_bottom = this.data.params.tubes[index + 1].extended_zt;
            }

            this.data.beam.push({
                no: tube.no,
                z_top: z_top,
                z_bottom: z_bottom,
                ei: tube.EI_Nm2,
            });
        });
    }

    findQ(tube) {
        let q = (Math.pow(tube.od / 2, 3) - Math.pow(tube.id / 2, 3)) / 6;
        return q; // mm3
    }

    setMastHeights() {
        this.data.props.extendedHeight =
            this.data.params.noOfTubes * this.data.params.tube_length -
            (this.data.params.noOfTubes - 1) * this.data.params.overlap +
            this.data.params.payload_adapter_height +
            this.data.params.base_adapter_height;

        this.data.props.nestedHeight =
            this.data.params.tube_length +
            (this.data.params.noOfTubes - 1) * this.data.params.head_height +
            this.data.params.payload_adapter_height +
            this.data.params.base_adapter_height;
    }

    setZPositions() {
        let ezb, ezt, nzb, nzt;

        this.data.params.tubes.forEach((tube, index) => {
            if (index === 0) {
                // Extended State
                ezt =
                    this.data.props.extendedHeight -
                    this.data.params.payload_adapter_height;
                ezb = ezt - this.data.params.tube_length;

                // Nested State
                nzt =
                    this.data.props.nestedHeight -
                    this.data.params.payload_adapter_height;
                nzb = nzt - this.data.params.tube_length;
            } else {
                // Extended State
                ezt = ezb + this.data.params.overlap;
                ezb = ezt - this.data.params.tube_length;

                // Nested State
                nzt = nzt - this.data.params.head_height;
                nzb = nzt - this.data.params.tube_length;
            }

            this.data.params.tubes[index].nested_zb = nzb;
            this.data.params.tubes[index].nested_zt = nzt;

            this.data.params.tubes[index].extended_zb = ezb;
            this.data.params.tubes[index].extended_zt = ezt;
        });

        // Side Adapter
        const lastTube = this.data.params.tubes.at(-1);

        this.data.props.side_adapter_z =
            lastTube.extended_zt - this.data.params.overlap / 2;
    }

    windLoadsOnTubes() {
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

        let exposed_length;

        const terrain = this.data.config.terrain_category.find(
            (cat) => cat.no === this.data.params.terrain_category,
        );

        this.data.params.tubes.forEach((tube, i) => {
            if (i != this.data.params.noOfTubes - 1) {
                exposed_length =
                    this.data.params.tube_length - this.data.params.overlap; // mm

                this.data.params.tubes[i].wind_load_z =
                    tube.extended_zt - exposed_length / 2;
            } else {
                exposed_length = tube.extended_zt; // mm

                this.data.params.tubes[i].wind_load_z = tube.extended_zt / 2;
            }

            this.data.params.tubes[i].reference_area =
                (tube.od * exposed_length) / 1000000; // m2

            this.data.params.tubes[i].wind_exposed_length = exposed_length;

            // Reference Height Ze
            this.data.params.tubes[i].Ze = tube.extended_zt;

            // Roughness Length (m)
            this.data.params.tubes[i].roughness_length_Z0 = terrain.z0;

            // Terrain Factor kr
            this.data.params.tubes[i].terrain_factor_kr =
                0.19 * Math.pow(terrain.z0 / 0.05, 0.07);

            // Roughness factor Cr(ze) at the reference height
            this.data.params.tubes[i].max_height = Math.max(
                tube.extended_zt / 1000,
                terrain.zmin,
            ); //m

            this.data.params.tubes[i].roughness_factor_Cr_at_Ze =
                this.data.params.tubes[i].terrain_factor_kr *
                Math.log(this.data.params.tubes[i].max_height / terrain.z0);

            // Calculate the mean wind speed at the height of the tube
            this.data.params.tubes[i].mean_wind_speed_Vm =
                (this.data.params.tubes[i].roughness_factor_Cr_at_Ze *
                    this.data.params.wind_speed) /
                3.6; // Convert to m/s

            // Turbulence Intensity
            this.data.params.tubes[i].turbulence_intensity_TI =
                1.0 /
                (1.0 *
                    Math.log(
                        this.data.params.tubes[i].max_height / terrain.z0,
                    ));

            // Basic Velocity Pressure
            // Basic Velocity Pressure Formula: q = 0.5 * ρ * V^2
            this.data.params.tubes[i].basic_velocity_pressure_q =
                0.5 *
                this.data.config.air_density *
                Math.pow(this.data.params.wind_speed / 3.6, 2); // Basic velocity pressure in N/m2

            // Peak Velocity Pressure
            // Peak Velocity Pressure Formula: qp =[ 1+ 7* TI ] * 0.5 *  ρ *  Vm^2
            this.data.params.tubes[i].peak_velocity_pressure_qp =
                (1 + 7 * this.data.params.tubes[i].turbulence_intensity_TI) *
                0.5 *
                this.data.config.air_density *
                Math.pow(this.data.params.tubes[i].mean_wind_speed_Vm, 2); // Peak velocity pressure in N/m2

            // Wind velocity corresponding to peak velocity pressure
            // Wind Velocity Formula: Vp = sqrt(2 * qp / ρ)
            this.data.params.tubes[i].wind_velocity_Vp_at_qp = Math.sqrt(
                (2 * this.data.params.tubes[i].peak_velocity_pressure_qp) /
                    this.data.config.air_density,
            ); // Wind velocity in m/s corresponding to peak velocity pressure

            // Reynolds Number
            // Reynolds Number Formula: Re = ρ * Vp * D / μ
            // where:
            // Re = Reynolds number (dimensionless)
            // ρ = air density (kg/m3)
            // Vp = wind velocity (m/s) corresponding to peak velocity pressure
            // D = characteristic length (m) (outer diameter of the tube)
            // μ = dynamic viscosity of air (kg/(m·s)) (assumed to be 1.81e-5 kg/(m·s) at 20°C)
            this.data.params.tubes[i].reynolds_number_Re =
                (this.data.params.tubes[i].wind_velocity_Vp_at_qp *
                    this.data.params.tubes[i].od) /
                1000 /
                this.data.config.dynamic_viscosity_mu; // Reynolds number (dimensionless)

            // Structural Factor
            // Structural Factor is taken as 1.0 for this calculation
            this.data.params.tubes[i].structural_factor = 1.0; // Structural Factor (dimensionless)

            // Surface Roughness
            // Surface Roughness is taken as 0.2 for Aluminum coated tubes
            this.data.params.tubes[i].surface_roughness = 0.2; // Surface Roughness in mm

            // Effective Slenderness
            this.data.params.tubes[i].slenderness_ratio_l_b =
                this.data.params.tube_length / tube.od; // Slenderness ratio (dimensionless)

            if (this.data.params.tube_length / 1000 <= 15) {
                this.data.params.tubes[i].effective_slenderness = Math.min(
                    this.data.params.tubes[i].slenderness_ratio_l_b,
                    70,
                ); // Limit to a maximum of 70
            } else {
                this.data.params.tubes[i].effective_slenderness = Math.min(
                    0.7 * this.data.params.tubes[i].slenderness_ratio_l_b,
                    70,
                ); // Limit to a maximum of 70
            }

            // End Effect Factor : Dimensionless
            if (this.data.params.tubes[i].effective_slenderness <= 10) {
                this.data.params.tubes[i].end_effect_factor =
                    0.6023079 *
                    Math.pow(
                        this.data.params.tubes[i].effective_slenderness,
                        0.0657553,
                    ); // For slenderness less than or equal to 10
            } else {
                this.data.params.tubes[i].end_effect_factor =
                    0.698573 +
                    0.001977401 *
                        this.data.params.tubes[i].effective_slenderness +
                    0.00008741341 *
                        Math.pow(
                            this.data.params.tubes[i].effective_slenderness,
                            2,
                        ) -
                    0.00000103591 *
                        Math.pow(
                            this.data.params.tubes[i].effective_slenderness,
                            3,
                        ); // For slenderness greater than 10
            }

            // Force Coefficient without End Effect
            this.data.params.tubes[i].equivalent_roughness_k_b =
                this.data.params.tubes[i].surface_roughness / tube.od; // Equivalent Roughness

            let force_coefficent =
                1.2 +
                (0.18 *
                    Math.log10(
                        10 * this.data.params.tubes[i].equivalent_roughness_k_b,
                    )) /
                    (1 +
                        0.4 *
                            Math.log10(
                                this.data.params.tubes[i].reynolds_number_Re /
                                    1e6,
                            ));

            if (this.data.params.tubes[i].reynolds_number_Re < 1.8e5) {
                // For Reynolds number less than 1.8e5, use a different formula
                return 1.2;
            } else if (
                this.data.params.tubes[i].reynolds_number_Re >= 1.85e5 &&
                this.data.params.tubes[i].reynolds_number_Re < 4e5
            ) {
                let temp_force_coefficient =
                    0.11 /
                    Math.pow(
                        this.data.params.tubes[i].reynolds_number_Re / 1e6,
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

            this.data.params.tubes[i].force_coefficient_wo_end_effect =
                force_coefficent;

            // Force Coefficient
            // EndEffect Facor * Force Coefficient without End Effect
            // Force Coefficient Formula: Cf = Cfw * EndEffectFactor
            // where:
            // Cf = Force Coefficient (dimensionless)
            // Cfw = Force Coefficient without End Effect (dimensionless)
            // EndEffectFactor = End Effect Factor (dimensionless)
            this.data.params.tubes[i].force_coefficient =
                this.data.params.tubes[i].force_coefficient_wo_end_effect *
                this.data.params.tubes[i].end_effect_factor; // Force Coefficient (dimensionless)

            // ***********************************************************************************
            // Total Wind Force
            // Total Wind Force Formula: Fw = Structural Factor * Force Coefficient * Peak Velocity Pressure * Reference Area
            // ***********************************************************************************

            this.data.params.tubes[i].wind_load =
                this.data.params.tubes[i].structural_factor *
                this.data.params.tubes[i].force_coefficient *
                this.data.params.tubes[i].peak_velocity_pressure_qp *
                this.data.params.tubes[i].reference_area;
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
        this.data.props.payload = {
            wind_load_z: null,
            wind_load: null,
        };

        this.data.props.payload.wind_load_z =
            this.data.props.extendedHeight +
            Math.sqrt(this.data.params.sail_area * 1e6) / 2;

        this.data.props.payload.wind_load =
            0.5 *
            this.data.config.air_density *
            this.data.config.drag_coefficient_Cd *
            Math.pow(this.data.params.wind_speed / 3.6, 2) *
            this.data.params.sail_area;
    }

    estimateMastMass() {
        this.data.weights = {
            lifted_mass: 0,
            total_mast_mass: 0,
        };

        this.data.params.tubes.forEach((tube) => {
            this.data.weights.total_mast_mass += tube.mass; // kg
        });
    }

    torqueRequired() {
        // Torque Required to Extend the Mast
        let torque, torque_required_to_extend_mast_Nm;
        let load = this.data.params.payload_mass * 9.81; // N

        let thread_angle = Math.atan(
            this.data.config.screw_lead /
                (Math.PI * this.data.config.screw_nominal_diameter),
        ); // Thread angle in degrees
        let secant = 1 / Math.cos(thread_angle);

        torque =
            (0.5 *
                load *
                this.data.config.screw_nominal_diameter *
                (this.data.config.screw_lead +
                    Math.PI *
                        this.data.config.screw_coefficient_of_friction *
                        this.data.config.screw_nominal_diameter *
                        secant)) /
            (Math.PI * this.data.config.screw_nominal_diameter -
                this.data.config.screw_coefficient_of_friction *
                    this.data.config.screw_lead *
                    secant) /
            1000; // Convert to Nm

        this.data.power.torque_required_to_extend_mast_Nm = torque;
        this.getMotorTorque();
        this.getLiftingTorque();
        this.getScrewSpeed();
    }

    getMotorTorque() {
        this.data.power.motor_power = this.data.config.motors.find(
            (g) => g.id === this.data.params.motor_id,
        )?.power_kW;

        this.data.power.motor_rpm = this.data.config.motors.find(
            (g) => g.id === this.data.params.motor_id,
        )?.max_speed_rpm;

        this.data.power.motor_torque =
            (9550 * this.data.power.motor_power) / this.data.power.motor_rpm;
    }

    getLiftingTorque() {
        this.data.power.lifting_torque =
            this.data.power.motor_torque *
            this.data.config.gearboxes.find(
                (g) => g.id === this.data.params.gearbox_id,
            )?.gear_ratio;
    }

    getScrewSpeed() {
        this.data.power.gearbox_ratio = this.data.config.gearboxes.find(
            (g) => g.id === this.data.params.gearbox_id,
        )?.gear_ratio;

        this.data.power.screw_rpm =
            this.data.power.motor_rpm / this.data.power.gearbox_ratio;
        this.data.power.vertical_speed =
            (this.data.power.screw_rpm * this.data.config.screw_lead) / 1000; // Convert RPM to m/min
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
            gearbox_mass: 0,
        };

        this.data.params.tubes.forEach((tube, i) => {
            // TUBE PROFILES WEIGHT CALCULATION
            if (tube.state_name === "bottom_section") {
                total_mass += tube.mass;
            } else {
                lifted_mass += tube.mass;
                total_mass += tube.mass;
            }

            //console.log("Tube Mass", i, tube.mass, "Lifted Mass", lifted_mass, "Total Mass", total_mass);

            breakdown.all_tubes_mass += tube.mass;

            // FIXED TOP FLANGE WEIGHT CALCULATION
            if (tube.state_name === "bottom_section") {
                total_mass +=
                    this.data.config.weights.fixed_top_flange["C" + tube.no];
            } else {
                lifted_mass +=
                    this.data.config.weights.fixed_top_flange["C" + tube.no];
                total_mass +=
                    this.data.config.weights.fixed_top_flange["C" + tube.no];
            }

            breakdown.fixed_top_flange_mass +=
                this.data.config.weights.fixed_top_flange["C" + tube.no];

            // ICE BREAKER WEIGHT CALCULATION
            if (
                tube.state_name !== "top_section" &&
                tube.state_name !== "bottom_section"
            ) {
                total_mass +=
                    this.data.config.weights.ice_breaker["C" + tube.no];
                lifted_mass +=
                    this.data.config.weights.ice_breaker["C" + tube.no];
            }

            breakdown.ice_breaker_mass +=
                this.data.config.weights.ice_breaker["C" + tube.no];

            if (tube.state_name === "bottom_section") {
                total_mass +=
                    this.data.config.weights.ice_breaker["C" + tube.no];
            }

            // SCREW AND NUT FRAME WEIGHT CALCULATION
            if (tube.state_name !== "bottom_section") {
                total_mass +=
                    this.data.config.weights.screw_nut_frame["C" + tube.no]
                        .assy;
                lifted_mass +=
                    this.data.config.weights.screw_nut_frame["C" + tube.no]
                        .assy;
            }

            // LOWER KEY GUIDES WEIGHT CALCULATION
            if (tube.state_name !== "bottom_section") {
                total_mass +=
                    this.data.config.weights.lower_key_guides_each *
                    tube.channel_number;
                lifted_mass +=
                    this.data.config.weights.lower_key_guides_each *
                    tube.channel_number;
                breakdown.lower_key_guides_mass +=
                    this.data.config.weights.lower_key_guides_each *
                    tube.channel_number;
            } else {
                total_mass +=
                    this.data.config.weights.lower_key_guides_each *
                    tube.channel_number;
            }

            // UPPER KEY GUIDES WEIGHT CALCULATION
            if (tube.state_name !== "top_section") {
                total_mass +=
                    this.data.config.weights.upper_key_guides_each *
                    tube.channel_number;
                lifted_mass +=
                    this.data.config.weights.upper_key_guides_each *
                    tube.channel_number;
                breakdown.upper_key_guides_mass +=
                    this.data.config.weights.upper_key_guides_each *
                    tube.channel_number;
            } else {
                total_mass +=
                    this.data.config.weights.upper_key_guides_each *
                    tube.channel_number;
            }

            // EULER FIXER WEIGHT CALCULATION
            if (tube.state_name === "top_section") {
                total_mass +=
                    this.data.config.weights.euler_fixer["C" + tube.no];
                lifted_mass +=
                    this.data.config.weights.euler_fixer["C" + tube.no];
                breakdown.euler_fixer_mass +=
                    this.data.config.weights.euler_fixer["C" + tube.no];
            }

            // PAYLOAD INTERFACE WEIGHT CALCULATION
            if (tube.state_name === "top_section") {
                total_mass +=
                    this.data.config.weights.payload_interface["C" + tube.no];
                lifted_mass +=
                    this.data.config.weights.payload_interface["C" + tube.no];
                breakdown.payload_interface_mass +=
                    this.data.config.weights.payload_interface["C" + tube.no];
            }

            // LOCK STOPPER (ON TUBES) WEIGHT CALCULATION
            if (tube.state_name !== "bottom_section") {
                total_mass += this.data.config.weights.lock_stopper_each * 2;
                lifted_mass += this.data.config.weights.lock_stopper_each * 2;
                breakdown.lock_stopper_mass +=
                    this.data.config.weights.lock_stopper_each * 2;
            }

            // LOCK KEYS WEIGHT CALCULATION
            if (tube.state_name !== "bottom_section") {
                total_mass += this.data.config.weights.lock_key_each * 2;
                lifted_mass += this.data.config.weights.lock_key_each * 2;
                breakdown.lock_key_mass +=
                    this.data.config.weights.lock_key_each * 2;
            }

            // LOCK MECHANISM WEIGHT CALCULATION
            if (tube.state_name !== "bottom_section") {
                total_mass += this.data.config.weights.lock_mechanism_each * 2;
                lifted_mass += this.data.config.weights.lock_mechanism_each * 2;
                breakdown.lock_mechanism_mass +=
                    this.data.config.weights.lock_mechanism_each * 2;
            }

            // WELDED BOTTOM STRUCTURE WEIGHT CALCULATION
            if (tube.state_name === "bottom_section") {
                total_mass +=
                    this.data.config.weights.welded_bottom_structure[
                        "C" + tube.no
                    ];

                // MOTOR AND GEARBOX WEIGHT CALCULATION
                total_mass += this.data.config.motors.find(
                    (g) => g.id === this.data.params.motor_id,
                )?.mass_kg;
                total_mass += this.data.config.gearboxes.find(
                    (g) => g.id === this.data.params.gearbox_id,
                )?.mass_kg;

                breakdown.motor_mass += this.data.config.motors.find(
                    (g) => g.id === this.data.params.motor_id,
                )?.mass_kg;
                breakdown.gearbox_mass += this.data.config.gearboxes.find(
                    (g) => g.id === this.data.params.gearbox_id,
                )?.mass_kg;
            }
        });

        this.data.weights.lifted_mass = lifted_mass;
        this.data.weights.total_mast_mass = total_mass;
        this.data.weights.breakdown = breakdown;
    }
}
