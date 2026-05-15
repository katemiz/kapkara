import Chart from "chart.js/auto";

export default class MastDeflection {
    constructor(data) {
        this.data = data;
    }

    setAllowedTipDeflection() {
        // Limit total tip deflection (in x direction) to tip_deflection_percentage% of the extended height of the mast
        this.data.props.allowed_tip_deflection_mm =
            (this.data.config.tip_deflection_percentage *
                this.data.props.extendedHeight) /
            100; // mm
    }

    run() {
        this.setAllowedTipDeflection();
        this.findSideAdapterReaction();

        this.findBeamMoments();
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
            -(this.data.props.payload.wind_load * this.data.params.z_offset) /
            1000; // Convert to Nm

        // X-Offset Moment Calculation
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load
        this.data.props.payload.tip_moment_due_x_offset_Nm =
            -(
                9.81 *
                this.data.params.payload_mass *
                this.data.params.x_offset
            ) / 1000; // Convert to Nm

        // Moment Caused by Deflection of the Mast under Wind Load
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load, limited to a maximum of tip_deflection_percentage % of the extended height of the mast
        this.data.props.payload.tip_moment_due_deflection_Nm =
            -(
                9.81 *
                this.data.params.payload_mass *
                this.data.props.allowed_tip_deflection_mm
            ) / 1000; // Convert to Nm

        console.log("Class : Buraya mast ağırlığı da eklenecek)");

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
        this.data.deflections.curve = [{ height: 0, deflection: 0 }];

        let payload_root_moment =
            (this.data.props.payload.wind_load *
                this.data.props.extendedHeight) /
            1000; // Nm
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

           // this.findDeflectionAtGivenPoint(z_mei_end)
        });

        this.data.params.deflections = {};
        // Find deflection at side adapter location
        this.data.deflections["at_side_adapter"] =
            this.findDeflectionAtGivenPoint(this.data.props.side_adapter_z);

        // Find deflection at payload location
/*         this.data.deflections["at_mast_tip"] = this.findDeflectionAtGivenPoint(
            this.data.props.extendedHeight,
        );
 */


        // Find Reaction Force at Side Adapter
        // def = PL^3/(3EI)
        // P = 3EI*deflection/(L^3)
        this.data.props.reaction_force_at_side_adapter =
            (3 *
                this.data.params.tubes.at(-1).EI_Nm2 *
                this.data.deflections["at_side_adapter"]) /
            Math.pow(this.data.props.side_adapter_z / 1000, 3);



        this.data.params.tubes.forEach((tube, i) => {

            //console.log("DDDDDD",tube)

            this.findDeflectionAtGivenPoint(z_mei_end)
        });

    }





    findBeamMoments() {

        const zBeamValues = [];

        this.calculateMastTopMoments();

        this.data.params.tubes.forEach((tube, i) => {

            if (i === 0) {
                this.data.beam[i].tip_load = this.data.props.payload.wind_load;
                this.data.beam[i].tip_moment = this.data.props.payload.total_tip_moment_Nm;
                this.data.beam[i].z_tip = this.data.props.extendedHeight;
                zBeamValues.push(this.data.props.extendedHeight);
            } else {
                zBeamValues.push(tube.extended_zt);
            }

            this.data.beam.map((section) => {
                if (section.no === tube.no) {
                    this.data.beam[i].wind_load = tube.wind_load;
                    this.data.beam[i].z_wind_load = tube.wind_load_z;
                }
            });

            this.data.beam[i].moment_top = 0;
            this.data.beam[i].moment_bottom = 0;

        });

        zBeamValues.push(0);

        //console.log("zBeamValues", zBeamValues);






        let moment;
        let moment_top;
        let moment_bottom;

        let force;

        let internal_moments = {}


        zBeamValues.forEach((z) => {
            internal_moments[z] = 0;
        });

        this.data.beam.forEach((section, i) => {




            force = section.wind_load;

            zBeamValues.forEach((z) => {

                moment = force * (z - section.z_wind_load) / 1000;

                if (moment > 0) {
                    moment = 0;
                }

                //console.log("yük,z,moment", force, z, section.z_wind_load, moment)
                internal_moments[z] += moment;
            });








        });


        // Add tip force and moment
        const tipForce = this.data.props.payload.wind_load;
        const tipZ = this.data.props.extendedHeight;

        zBeamValues.forEach((z) => {
            let moment = tipForce * (z - tipZ) / 1000;
            if (moment > 0) {
                moment = 0;
            }

            internal_moments[z] += moment;

            console.log("yük, z, moment 222", tipForce, z, tipZ, moment)

        });

        console.log("internal_moments 222", internal_moments);



        const tipMoment = this.data.props.payload.total_tip_moment_Nm;


        Object.entries(internal_moments).forEach(([z, moment]) => {
            console.log("önceki moment", internal_moments[z], "added moment", tipMoment, "yeni moment", internal_moments[z] + tipMoment);
            internal_moments[z] += tipMoment;
        });



        this.data.beam.forEach((section, i) => {
            section.moment_top = internal_moments[section.z_top];
            section.moment_bottom = internal_moments[section.z_bottom];
            section.m_ei_top = section.moment_top / section.ei;
            section.m_ei_bottom = section.moment_bottom / section.ei;
            section.moment_area = (section.z_top - section.z_bottom) * (section.m_ei_top + section.m_ei_bottom) / 2000;
        });

        console.log("beam with moments", this.data.beam);

        return true;
    }


    calculateMastTopMoments() {

        // TIP MOMENT AND FOCE CALCULATION
        // Z-Offset Moment Calculation
        // Add moment caused by z_offset shift of payload wind load from the top of the mast to the payload center of pressure
        this.data.props.payload.tip_moment_due_z_offset_Nm =
            -(this.data.props.payload.wind_load * this.data.params.z_offset) /
            1000; // Convert to Nm

        // X-Offset Moment Calculation
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load
        this.data.props.payload.tip_moment_due_x_offset_Nm =
            -(
                9.81 *
                this.data.params.payload_mass *
                this.data.params.x_offset
            ) / 1000; // Convert to Nm

        // Moment Caused by Deflection of the Mast under Wind Load
        // Add moment caused by x_offset shift of payload mass load from the centerline of the mast to the payload center of gravity due to deflection of the mast under wind load, limited to a maximum of tip_deflection_percentage % of the extended height of the mast
        this.data.props.payload.tip_moment_due_deflection_Nm =
            -(
                9.81 *
                this.data.params.payload_mass *
                this.data.props.allowed_tip_deflection_mm
            ) / 1000; // Convert to Nm

        console.log("Class : Buraya mast ağırlığı da eklenecek)");

        // Total Tip Moment - Constant throughout the mast
        this.data.props.payload.total_tip_moment_Nm =
            this.data.props.payload.tip_moment_due_z_offset_Nm +
            this.data.props.payload.tip_moment_due_x_offset_Nm +
            this.data.props.payload.tip_moment_due_deflection_Nm;

        // this.data.beam.force_moments.push({
        //     "z" : this.data.props.extendedHeight,
        //     "ext_force" : this.data.props.payload.wind_load,
        //     "ext_moment" : this.data.props.payload.total_tip_moment_Nm
        // });
    }




    findDeflectionAtGivenPoint(height) {
        let mei_start_z, mei_end_z;
        let mei_start, mei_end, mei_height;

        let moment_area, xbar;
        let delta_z, delta_m;
        let deflection = 0;

        this.data.deflections["Z" + height] = [];

        // Moment-Area Method
        // M/EI Diagram Area * xbar

        this.data.params.tubes.forEach((tube, i) => {
            xbar = 0;

            //console.log("MEI", tube.M_EI);

            const data = tube.M_EI;
            const keys = Object.keys(data);

            mei_start_z = keys[0];
            mei_end_z = keys[1];

            mei_start = data[mei_start_z];
            mei_end = data[mei_end_z];

            if (height > mei_start_z) {
                if (height < mei_end_z) {
                    // Use All Area between mei_start and height
                    // ------------------------------------------------

                    // Find M/EI corresponding to height
                    if (mei_end < mei_start) {
                        mei_height =
                            mei_start -
                            ((mei_start - mei_end) * (height - mei_start_z)) /
                                (mei_end_z - mei_start_z);
                    } else {
                        mei_height =
                            mei_start +
                            ((mei_end - mei_start) * (height - mei_start_z)) /
                                (mei_end_z - mei_start_z);
                    }

                    mei_end = mei_height;
                    mei_end_z = height;
                }

                // Find Moment-Area
                delta_z = mei_end_z - mei_start_z;
                delta_m = Math.abs(mei_end - mei_start);

                moment_area = ((mei_start + mei_end) * delta_z) / 2;

                // xbar calculation (from left side)
                if (mei_end > mei_start) {
                    xbar =
                        (delta_z * (mei_start + (2 * delta_m) / 3)) /
                        (mei_start + mei_end);
                } else {
                    xbar =
                        (delta_z * (mei_start + (1 * delta_m) / 3)) /
                        (mei_end + mei_start);
                }

                // Since xbar is from left, xba needs to be corrected
                // wrt deflection point : height

                xbar = height - mei_start_z - xbar;

                // Deflection calculation
                deflection += xbar * moment_area * 1e-3; //

                this.data.deflections["Z" + height].push({
                    tube_no: tube.no,
                    z_start: mei_end_z,
                    z_end: mei_end_z,
                    xbar: xbar,
                    moment_area: moment_area,
                    deflection: deflection,
                    height: height,
                });

                //console.log("counter", tube.no);
            }

            //console.log("CORRECTED xbar, moment_area", xbar, moment_area);
        });

        this.data.deflections.curve.push({
            height: height,
            deflection: deflection,
        });

        //console.log("Deflection at height", height, "is", deflection, "mm");

        return deflection;
    }
}
