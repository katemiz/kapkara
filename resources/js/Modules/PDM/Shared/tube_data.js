export const tubes_geometry = [
    {
        no: 1,
        od: 48,
        id: 44,
        thk: 2,
        area: 531.42,
        inertia: 144359.94,
    },
    {
        no: 2,
        od: 66.4,
        id: 62,
        thk: 2.2,
        area: 657.93,
        inertia: 351727.54,
    },
    {
        no: 3,
        od: 85.2,
        id: 80.4,
        thk: 2.4,
        area: 852.28,
        inertia: 733496.51,
    },
    {
        no: 4,
        od: 104.4,
        id: 99.2,
        thk: 2.6,
        length: 2000,
        area: 1057.42,
        inertia: 1372498.49,
    },
    {
        no: 5,
        od: 124,
        id: 118.4,
        thk: 2.8,
        area: 1290.94,
        inertia: 2372673.47,
    },
    {
        no: 6,
        od: 144,
        id: 138,
        thk: 3,
        length: 2000,
        area: 1553.09,
        inertia: 3861481.58,
    },
    {
        no: 7,
        od: 164.4,
        id: 158,
        thk: 3.2,
        area: 1844.42,
        inertia: 5992457.14,
    },
    {
        no: 8,
        od: 185.2,
        id: 178.4,
        thk: 3.4,
        area: 2165.56,
        inertia: 8947902.11,
    },
    {
        no: 9,
        od: 206.4,
        id: 199.2,
        thk: 3.6,
        length: 2000,
        area: 2517.21,
        inertia: 12941721.43,
    },
    {
        no: 10,
        od: 228,
        id: 220.4,
        thk: 3.8,
        length: 2000,
        area: 2900.08,
        inertia: 18222403.31,
    },
    {
        no: 11,
        od: 250,
        id: 242,
        thk: 4,
        area: 3538.49,
        inertia: 26761768.83,
    },
    {
        no: 12,
        od: 272.4,
        id: 264,
        thk: 4.2,
        area: 3986.05,
        inertia: 35883568,
    },
    {
        no: 13,
        od: 295.2,
        id: 286.4,
        thk: 4.4,
        area: 4467.07,
        inertia: 47211434.31,
    },
    {
        no: 14,
        od: 318.4,
        id: 309.2,
        thk: 4.6,
        area: 4982.29,
        inertia: 61316545,
    },
    {
        no: 15,
        od: 342,
        id: 332.4,
        thk: 4.8,
        area: 5532.44,
        inertia: 78621879.48,
    },
];

export const terrain_category = [
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
];

export const air_density = 1.25; // kg/m3 see NASA https://www.earthdata.nasa.gov/topics/atmosphere/air-mass-density
export const dynamic_viscosity_mu = 15e-6; // Dynamic (kinetic) viscosity of air in kg/(m·s) at 20°C
export const drag_coefficient_Cd = 1.5; // Dynamic (kinetic) viscosity of air in kg/(m·s) at 20°C
