import {
    tubes_geometry,
    terrain_category,
    air_density,
    dynamic_viscosity_mu,
    drag_coefficient_Cd,
} from "$modules/PDM/Shared/tube_data.js";

export class MastGeometry {
    constructor(mast_parameters) {
        this.mast_parameters = mast_parameters;

        this.mast_parameters.noOfTubes =
            this.mast_parameters.end_tube_no -
            this.mast_parameters.start_tube_no +
            1;

        this.extendedHeight = null;
        this.nestedHeight = null;

        this.tube_material_density = null;
        this.tube_material_e = null;
        this.tube_yield_strength = null;
        this.tube_ultimate_strength = null;

        this.setDependentProps();
        this.setMastTubes();
        this.setMastHeights();
        this.setZPositions();
        this.windLoadsOnTubes();
        this.windLoadOnPayload();
    }

    setCircularArea(tube) {
        return Math.PI * tube.od * tube.thk;
    }

    setCircularMomentOfInertia(tube) {
        return (Math.PI * (tube.od ** 4 - tube.id ** 4)) / 64;
    }

    calculateMass(tube, length) {
        return (tube.area * length * this.tube_material_density) / 1000000; // kg
    }

    setDependentProps() {
        switch (this.mast_parametersmaterial) {
            // Aluminum
            default:
                this.tube_material_density = 2704; // kg/m³
                this.tube_material_e = 70e9; // Pa
                this.tube_yield_strength = 170e6; // Pa
                this.tube_ultimate_strength = 210e6; // Pa
                break;
        }
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

                this.mast_parameters.tubes.push(tube);
            }
        });
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
                this.mast_parameters.tubes[i].reference_area =
                    (tube.od * exposed_length) / 1000000; // m2
            } else {
                exposed_length = tube.extended_zt; // mm

                this.mast_parameters.tubes[i].wind_load_z =
                    tube.extended_zt / 2;
                this.mast_parameters.tubes[i].reference_area =
                    (tube.od * exposed_length) / 1000000; // m2
            }

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

            console.log(
                this.mast_parameters.tubes[i].max_height,
                terrain.z0,
                this.mast_parameters.tubes[i].terrain_factor_kr,
                this.mast_parameters.tubes[i].roughness_factor_Cr_at_Ze,
            );

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

            console.log(
                this.mast_parameters.tubes[i].structural_factor,
                this.mast_parameters.tubes[i].force_coefficient,
                this.mast_parameters.tubes[i].peak_velocity_pressure_qp,
                this.mast_parameters.tubes[i].reference_area,
            );
            this.mast_parameters.tubes[i].wind_force =
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
            Math.sqrt(this.mast_parameters.sail_area) / 2;

        this.mast_parameters.payload.wind_load =
            0.5 *
            air_density *
            drag_coefficient_Cd *
            Math.pow(this.mast_parameters.wind_speed / 3.6, 2) *
            this.mast_parameters.sail_area;
    }

    shearForceBendingMoment() {}
}
