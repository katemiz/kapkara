import Chart from "chart.js/auto";



export default class MastDeflection {

    constructor(data) {
        // console.log("DATA", data);
        this.data = data;
        // this.config = config;

        this.deflections = {};
    }


    setAllowedTipDeflection() {
        // Limit total tip deflection (in x direction) to tip_deflection_percentage% of the extended height of the mast
        this.data.props.allowed_tip_deflection_mm =
            (this.data.config.tip_deflection_percentage * this.data.props.extendedHeight) / 100; // mm
    }


    run() {
        this.setAllowedTipDeflection();
        this.findSideAdapterReaction();
    }





    findSideAdapterReaction() {
        this.findRootMomentWoSideAdapterReaction();
    }


    findRootMomentWoSideAdapterReaction() {

        let root_moment = 0; // Initialize root moment for each tube
        let shear_force = 0; // Initialize shear force for each tube

        let moment_b, moment_t, moment_at_wind_load;
        let z_coordinate_b, z_coordinate_t;

        this.data.params.tubes.forEach((tube, i) => {

            // Find root moment caused by each wind load (without side adapter force moment)
            root_moment = (tube.wind_load * tube.wind_load_z) / 1000; // Convert to Nm
            shear_force = (tube.wind_load * tube.wind_load_z) / 1000; // Convert to Nm

            this.data.params.tubes[i].moments = {};

            let a = {};

            this.data.params.tubes.forEach((t, k) => {
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
                    a[this.data.props.extendedHeight] = moment_t;
                }

                // ie Bottom Tube
                if (k === this.data.params.tubes.length - 1) {
                    a[0] = -root_moment;
                }

                a[t.wind_load_z] = moment_at_wind_load;
                a[t.extended_zb] = moment_b;
                a[t.extended_zt] = moment_t;
            });

            this.data.params.tubes[i].moments = a;
        });

        // Z-Offset Moment Calculation
        // Add moment caused by z_offset shift of payload wind load from the top of the mast to the payload center of pressure
        this.data.props.payload.tip_moment_due_z_offset_Nm =
            -(this.data.props.payload.wind_load * this.data.params.z_offset) / 1000; // Convert to Nm

        // X-Offset Moment Calculation
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load
        this.data.props.payload.tip_moment_due_x_offset_Nm =
            -(9.81 * this.data.params.payload_mass * this.data.params.x_offset) / 1000; // Convert to Nm

        // Moment Caused by Deflection of the Mast under Wind Load
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load, limited to a maximum of tip_deflection_percentage % of the extended height of the mast
        this.data.props.payload.tip_moment_due_deflection_Nm =
            -(9.81 * this.data.params.payload_mass * this.data.props.allowed_tip_deflection_mm) / 1000; // Convert to Nm

        console.log("Class : Buraya mast ağırlığı da eklenecek)",);

        // Total Tip Moment - Constant throughout the mast
        this.data.props.payload.total_tip_moment_Nm =
            this.data.props.payload.tip_moment_due_z_offset_Nm +
            this.data.props.payload.tip_moment_due_x_offset_Nm +
            this.data.props.payload.tip_moment_due_deflection_Nm;

        // Find total_moments_and_shear_forces at each tube section by adding the moment caused by the side adapter reaction force to the root moment calculated above for each tube section
        this.data.props.total_moments = {};

        const total_moments = {};
        const sortedKeys = Object.keys(this.data.params.tubes[0].moments).sort(
            (a, b) => Number(a) - Number(b),
        );

        sortedKeys.forEach((key) => {
            total_moments[key] = 0;
        });

        this.data.props.payload.moments = {};

        let payload_root_moment =
            (this.data.props.payload.wind_load * this.data.props.extendedHeight) / 1000; // Nm
        let slope = payload_root_moment / this.data.props.extendedHeight; // N/mm

        sortedKeys.forEach((key) => {
            this.data.props.payload.moments[key] =
                slope * key -
                payload_root_moment +
                this.data.props.payload.total_tip_moment_Nm;
        });

        this.data.params.tubes.forEach((tube, i) => {
            sortedKeys.forEach((key) => {
                total_moments[key] += tube.moments[key];
            });
        });

        sortedKeys.forEach((key) => {
            total_moments[key] += this.data.props.payload.moments[key];
        });

        this.data.props.total_moments = total_moments;

        // M/EI in 1/m
        let z_mei_start, z_mei_end;

        this.data.params.tubes.forEach((tube, i) => {
            if (i > 0 && i < this.data.params.noOfTubes - 1) {
                z_mei_start = this.data.params.tubes[i + 1].extended_zt;
                z_mei_end = tube.extended_zt;
            }

            // When tube is at the top end
            if (i === 0) {
                z_mei_end = this.data.props.extendedHeight;
                if (this.data.params.tubes.length > 1) {
                    z_mei_start = this.data.params.tubes[i + 1].extended_zt;
                }
            }

            // When tube is biggest (at the bottom end)
            if (tube.od === this.data.params.tubes.at(-1).od) {
                z_mei_end = tube.extended_zt;
                z_mei_start = 0;
            }

            // When there is single tube
            if (this.data.params.tubes.length === 1) {
                z_mei_start = 0;
                z_mei_end = this.data.props.extendedHeight;
            }

            this.data.params.tubes[i].M_EI = {
                [z_mei_start]: total_moments[z_mei_start] / tube.EI_Nm2,
                [z_mei_end]: total_moments[z_mei_end] / tube.EI_Nm2,
            };
        });

        this.data.params.deflections = {};
        // Find deflection at side adapter location
        this.data.deflections["at_side_adapter"] =
            this.findDeflectionAtGivenPoint(this.data.props.side_adapter_z);

        // Find deflection at payload location
        this.data.deflections["at_mast_tip"] =
            this.findDeflectionAtGivenPoint(this.data.props.extendedHeight);

        // Find Reaction Force at Side Adapter
        // def = PL^3/(3EI)
        // P = 3EI*deflection/(L^3)
        this.data.reaction_force_at_side_adapter =
            (3 *
                this.data.params.tubes.at(-1).EI_Nm2 *
                this.data.deflections["at_side_adapter"]) /
            Math.pow(this.data.props.side_adapter_z / 1000, 3);
    }


    findDeflectionAtGivenPoint(height) {
        let z_start, z_end;
        let mei_start, mei_end, mei_height;

        let moment_area, xbar;
        let delta_z, delta_m;
        let deflection = 0;

        // Moment-Area Method
        // M/EI Diagram Area * xbar

        this.data.params.tubes.forEach((tube, i) => {
            if (height > tube.extended_zb) {
                if (height < tube.extended_zt) {
                    // Use All Area between extended_zb and height
                    // ------------------------------------------------
                    z_end = tube.extended_zt;

                    // When tube is biggest (at the bottom end)
                    if (tube.od === this.data.params.tubes.at(-1).od) {
                        z_start = 0;
                    } else {
                        z_start = this.data.params.tubes[i + 1].extended_zt;
                    }

                    if (i === 0) {
                        z_end = this.data.extendedHeight;
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
                    if (tube.od === this.data.params.tubes.at(-1).od) {
                        z_start = 0;
                    } else {
                        z_start = this.data.params.tubes[i + 1].extended_zt;
                    }

                    if (i === 0) {
                        z_end = this.data.props.extendedHeight;
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

                this.data.deflections["at_" + height] = {
                    "tube_no": tube.no,
                    "xbar": xbar,
                    "moment_area": moment_area,
                    "deflection": deflection
                };
            }
        });

        console.log("Deflection Class İçinde", this.data.deflections,this.data);

        return deflection;
    }
}
