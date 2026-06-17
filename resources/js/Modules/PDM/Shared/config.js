export const config = {
    tubes: [
        {
            no: 1,
            od: 48,
            id: 44,
            thk: 2,
            area_mm2: 531.42,
            inertia_mm4: 144359.94,
            channel_number: 4,
        },
        {
            no: 2,
            od: 66.4,
            id: 62,
            thk: 2.2,
            area_mm2: 657.93,
            inertia_mm4: 351727.54,
            channel_number: 4,
        },
        {
            no: 3,
            od: 85.2,
            id: 80.4,
            thk: 2.4,
            area_mm2: 852.28,
            inertia_mm4: 733496.51,
            channel_number: 4,
        },
        {
            no: 4,
            od: 104.4,
            id: 99.2,
            thk: 2.6,
            length: 2000,
            area_mm2: 1057.42,
            inertia_mm4: 1372498.49,
            channel_number: 4,
        },
        {
            no: 5,
            od: 124,
            id: 118.4,
            thk: 2.8,
            area_mm2: 1290.94,
            inertia_mm4: 2372673.47,
            channel_number: 4,
        },
        {
            no: 6,
            od: 144,
            id: 138,
            thk: 3,
            length: 2000,
            area_mm2: 1553.09,
            inertia_mm4: 3861481.58,
            channel_number: 4,
        },
        {
            no: 7,
            od: 164.4,
            id: 158,
            thk: 3.2,
            area_mm2: 1844.42,
            inertia_mm4: 5992457.14,
            channel_number: 4,
        },
        {
            no: 8,
            od: 185.2,
            id: 178.4,
            thk: 3.4,
            area_mm2: 2165.56,
            inertia_mm4: 8947902.11,
            channel_number: 4,
        },
        {
            no: 9,
            od: 206.4,
            id: 199.2,
            thk: 3.6,
            length: 2000,
            area_mm2: 2517.21,
            inertia_mm4: 12941721.43,
            channel_number: 4,
        },
        {
            no: 10,
            od: 228,
            id: 220.4,
            thk: 3.8,
            length: 2000,
            area_mm2: 2900.08,
            inertia_mm4: 18222403.31,
            channel_number: 4,
        },
        {
            no: 11,
            od: 250,
            id: 242,
            thk: 4,
            area_mm2: 3538.49,
            inertia_mm4: 26761768.83,
            channel_number: 8,
        },
        {
            no: 12,
            od: 272.4,
            id: 264,
            thk: 4.2,
            area_mm2: 3986.05,
            inertia_mm4: 35883568,
            channel_number: 8,
        },
        {
            no: 13,
            od: 295.2,
            id: 286.4,
            thk: 4.4,
            area_mm2: 4467.07,
            inertia_mm4: 47211434.31,
            channel_number: 8,
        },
        {
            no: 14,
            od: 318.4,
            id: 309.2,
            thk: 4.6,
            area_mm2: 4982.29,
            inertia_mm4: 61316545,
            channel_number: 8,
        },

        {
            no: 15,
            od: 342,
            id: 332.4,
            thk: 4.8,
            area_mm2: 5532.44,
            inertia_mm4: 78621879.48,
            channel_number: 8,
        },

        {
            no: 16,
            od: 366,
            id: 356.0,
            thk: 5.0,
            area_mm2: 6118.3,
            inertia_mm4: 99656139.01,
            channel_number: 8,
        },

        {
            no: 17,
            od: 390.4,
            id: 380,
            thk: 5.2,
            area_mm2: 6740.59,
            inertia_mm4: 125007834.15,
            channel_number: 8,
        },

        {
            no: 18,
            od: 415.2,
            id: 404.4,
            thk: 5.4,
            area_mm2: 7400.09,
            inertia_mm4: 155329543.18,
            channel_number: 8,
        },

        {
            no: 19,
            od: 440.4,
            id: 429.2,
            thk: 5.6,
            area_mm2: 8097.53,
            inertia_mm4: 191342344.57,
            channel_number: 8,
        },

        {
            no: 20,
            od: 466.0,
            id: 454.4,
            thk: 5.8,
            area_mm2: 8833.67,
            inertia_mm4: 233840426.71,
            channel_number: 8,
        },

        {
            no: 21,
            od: 492,
            id: 480,
            thk: 6.0,
            area_mm2: 9609.26,
            inertia_mm4: 283695878.24,
            channel_number: 8,
        },

        {
            no: 22,
            od: 518.4,
            id: 506,
            thk: 6.2,
            area_mm2: 10425.07,
            inertia_mm4: 341863661.87,
            channel_number: 8,
        },

        {
            no: 23,
            od: 545.2,
            id: 532.4,
            thk: 6.4,
            area_mm2: 11281.83,
            inertia_mm4: 409386775.15,
            channel_number: 8,
        },

        {
            no: 24,
            od: 572.4,
            id: 559.2,
            thk: 6.6,
            area_mm2: 12180.32,
            inertia_mm4: 487401601.14,
            channel_number: 8,
        },

        {
            no: 25,
            od: 600,
            id: 586.4,
            thk: 6.8,
            area_mm2: 13121.27,
            inertia_mm4: 577143452.27,
            channel_number: 8,
        },
    ],

    terrain_category: [
        {
            no: "0",
            description: "Sea or coastal area exposed to the open sea",
            z0: 0.003, // Roughness length in meters
            zmin: 1, // Minimum height in meters
        },
        {
            no: "I",
            description:
                "Lakes or flat and horizontal area with negligible vegetation and without obstacles",
            z0: 0.01, // Roughness length in meters
            zmin: 1, // Minimum height in meters
        },
        {
            no: "II",
            description:
                "Area with low vegetation such as grass and isolated obstacles (trees, buildings) with separations of at least 20 obstacle heights",
            z0: 0.05, // Roughness length in meters
            zmin: 2, // Minimum height in meters
        },
        {
            no: "III",
            description:
                "Area with regular cover of vegetation or buildings or with isolated obstacles with separations of maximum 20 obstacle heights (such as as villages, suburban terrain, permanent forest)",
            z0: 0.3, // Roughness length in meters
            zmin: 5, // Minimum height in meters
        },
        {
            no: "IV",
            description:
                "Area in which at least 15 % of the surface is covered with buildings and their average height exceeds 15 m",
            z0: 1, // Roughness length in meters
            zmin: 10, // Minimum height in meters
        },
    ],

    air_density: 1.25,
    dynamic_viscosity_mu: 15e-6,
    drag_coefficient_Cd: 1.5,
    alum_6063_density: 2704, // kg/m³
    alum_6063_E: 70e9, // Pa
    alum_6063_yield_strength: 170e6, // Pa
    alum_6063_ultimate_strength: 210e6, // Pa

    screw_nominal_diameter: 30, // mm
    screw_lead: 25, // mm
    screw_coefficient_of_friction: 0.15, // For steel on bronze
    screw_density: 7850, // kg/m³

    mast_types: [
        {
            value: "MTNX",
            label: "MTNX Electromechanical Mast with Power Screw",
            head_height: 55,
            base_adapter_height: 50,
            pdf_cover_image: "/images/PDM/mtnx_background.png",
            props: [
                { icon: "/images/PDM/payload.png", text: ['Increased Payload Capacity', 'UHD - up to 550 kg '] },
                { icon: "/images/PDM/deflection.png", text: ['Aluminium Stiffened Profiles', 'Low twist and deflection'] },
                { icon: "/images/PDM/power.png", text: ['Power Screw Driven', 'AC/DC Motor'] },
                { icon: "/images/PDM/lock.png", text: ['Automatic', 'Mechanical Locks'] },
                { icon: "/images/PDM/height.png", text: ['Heights Up To', '25m'] },
            ]
        },
        {
            value: "MTWR",
            label: "MTWR Electromechanical Mast with Steel Ropes",
            head_height: 47,
            base_adapter_height: 11,
            pdf_cover_image: "/images/PDM/mtwr_background.jpg",
            props: [
                { icon: "/images/PDM/payload.png", text: ['Increased Payload Capacity', 'UHD - up to 550 kg '] },
                { icon: "/images/PDM/deflection.png", text: ['Aluminium Stiffened Profiles', 'Low twist and deflection'] },
                { icon: "/images/PDM/power.png", text: ['Power Screw Driven', 'AC/DC Motor'] },
                { icon: "/images/PDM/lock.png", text: ['Automatic', 'Mechanical Locks'] },
                { icon: "/images/PDM/height.png", text: ['Heights Up To', '25m'] },
            ]
        },
        {
            value: "MTPR",
            label: "MTPR Pneumatical Mast",
            head_height: 99,
            base_adapter_height: 99,
            pdf_cover_image: "/images/PDM/mtpr_background.jpg",
            props: [
                { icon: "/images/PDM/payload.png", text: ['Increased Payload Capacity', 'UHD - up to 550 kg '] },
                { icon: "/images/PDM/deflection.png", text: ['Aluminium Stiffened Profiles', 'Low twist and deflection'] },
                { icon: "/images/PDM/power.png", text: ['Power Screw Driven', 'AC/DC Motor'] },
                { icon: "/images/PDM/lock.png", text: ['Automatic', 'Mechanical Locks'] },
                { icon: "/images/PDM/height.png", text: ['Heights Up To', '25m'] },
            ]
        },
    ],

    tip_deflection_percentages: [
        {
            id: 0,
            name: "% 0.0",
        },

        {
            id: 25,
            name: "% 0.25",
        },

        {
            id: 50,
            name: "% 0.50",
        },

        {
            id: 75,
            name: "% 0.75",
        },

        {
            id: 100,
            name: "% 1.00",
        },

        {
            id: 125,
            name: "% 1.25",
        },

        {
            id: 150,
            name: "% 1.50",
        },

        {
            id: 175,
            name: "% 1.75",
        },

        {
            id: 200,
            name: "% 2.00",
        },
    ],

    motors: [
        {
            id: 1,
            name: "0.35 kW",
            power_kW: 0.35,
            max_torque_Nm: 10,
            max_speed_rpm: 1400,
            mass_kg: 5,
        },
        {
            id: 2,
            name: "0.55 kW",
            power_kW: 0.55,
            max_torque_Nm: 10,
            max_speed_rpm: 1400,
            mass_kg: 5,
        },

        {
            id: 3,
            name: "0.55 kW",
            power_kW: 0.55,
            max_torque_Nm: 10,
            max_speed_rpm: 2800,
            mass_kg: 5,
        },


        {
            id: 4,
            name: "0.75 kW",
            power_kW: 0.75,
            max_torque_Nm: 15,
            max_speed_rpm: 1400,
            mass_kg: 7,
        },


        {
            id: 5,
            name: "0.75 kW",
            power_kW: 0.75,
            max_torque_Nm: 15,
            max_speed_rpm: 2800,
            mass_kg: 7,
        },


        {
            id: 6,
            name: "Manual : Hand Winch",
            power_kW: 0,
            max_torque_Nm: 0,
            max_speed_rpm: 0,
            mass_kg: 9,
        },



    ],

    gearboxes: [
        {
            id: 1,
            name: "i 1:6",
            gear_ratio: 6,
            efficiency: 0.85,
            mass_kg: 5,
        },

        {
            id: 3,
            name: "i 1:12",
            gear_ratio: 12,
            efficiency: 0.75,
            mass_kg: 7,
        },

        {
            id: 4,
            name: "i 1:18",
            gear_ratio: 18,
            efficiency: 0.75,
            mass_kg: 7,
        },

        {
            id: 5,
            name: "i 1:24",
            gear_ratio: 24,
            efficiency: 0.75,
            mass_kg: 7,
        },
        {
            id: 6,
            name: "i 1:60",
            gear_ratio: 60,
            efficiency: 0.65,
            mass_kg: 10,
        },
    ],

    weights: {
        welded_bottom_structure: {
            C1: 0,
            C2: 0,
            C3: 0,
            C4: 0,
            C5: 0,
            C6: 0,
            C7: 0,
            C8: 7.8,
            C9: 8.9,
            C10: 10.1,
            C11: 11.3,
            C12: 12.4,
            C13: 13.6,
            C14: 14.9,
            C15: 16.2,
        },

        fixed_top_flange: {
            C15: 1.6,
            C14: 1.5,
            C13: 1.4,
            C12: 1.3,
            C11: 1.2,
            C10: 1.15,
            C9: 1.05,
            C8: 1,
            C7: 0.9,
            C6: 0.8,
            C5: 0.7,
            C4: 0.6,
            C3: 0.55,
            C2: 0.45,
            C1: 0.35,
        },

        ice_breaker: {
            C15: 1.21,
            C14: 1.12,
            C13: 1.03,
            C12: 0.94,
            C11: 0.86,
            C10: 0.82,
            C9: 0.74,
            C8: 0.67,
            C7: 0.59,
            C6: 0.52,
            C5: 0.45,
            C4: 0.38,
            C3: 0.31,
            C2: 0.23,
            C1: 0.16,
        },

        screw_nut_frame: {
            C1: {
                frame: 0.32,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.14,
            },
            C2: {
                frame: 0.42,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.24,
            },
            C3: {
                frame: 0.52,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.34,
            },
            C4: {
                frame: 0.62,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.44,
            },
            C5: {
                frame: 0.72,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.54,
            },
            C6: {
                frame: 0.83,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.65,
            },
            C7: {
                frame: 0.93,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.75,
            },
            C8: {
                frame: 1.03,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.85,
            },
            C9: {
                frame: 1.04,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.86,
            },
            C10: {
                frame: 1.12,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 1.94,
            },
            C11: {
                frame: 1.42,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 2.24,
            },
            C12: {
                frame: 1.53,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 2.35,
            },
            C13: {
                frame: 1.64,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 2.46,
            },
            C14: {
                frame: 1.75,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 2.57,
            },
            C15: {
                frame: 1.86,
                nut: 0.12,
                nut_housing: 0.53,
                housing_cap: 0.17,
                assy: 2.68,
            },
        },

        lower_key_guides_each: 0.15,
        upper_key_guides_each: 0.12,

        euler_fixer: {
            C1: 0.61,
            C2: 0.71,
            C3: 0.82,
            C4: 0.93,
            C5: 0.95,
            C6: 1.2,
            C7: 1.29,
            C8: 1.37,
            C9: 1.46,
            C10: 1.55,
            C11: 1.67,
            C12: 1.77,
            C13: 1.89,
            C14: 1.99,
            C15: 2.1,
        },

        payload_interface: {
            C1: 1.0,
            C2: 1.23,
            C3: 1.49,
            C4: 1.76,
            C5: 2.08,
            C6: 2.43,
            C7: 2.8,
            C8: 3.22,
            C9: 3.67,
            C10: 4.16,
            C11: 4.63,
            C12: 5.2,
            C13: 5.81,
            C14: 6.47,
            C15: 7.17,
        },

        lock_stopper_each: 0.03,
        lock_key_each: 0.04,
        lock_mechanism_each: 0.15,
    },
};
