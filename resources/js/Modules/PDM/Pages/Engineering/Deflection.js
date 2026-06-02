//import Chart from "chart.js/auto";

export default class MastDeflection {
    constructor(data) {
        this.data = data;
    }

    setAllowedTipDeflection() {
        // Limit total tip deflection (in x direction) to tip_deflection_percentage% of the extended height of the mast
        // this.data.params.tip_deflection_percentage is a number like 25,50,75,100 ; should be diveded by 100

        this.data.props.allowed_tip_deflection_mm =
            (0.01 *
                this.data.params.tip_deflection_percentage *
                this.data.props.extendedHeight) /
            100; // mm

        //console.log("Allowed Tip Deflection:", this.data.props.allowed_tip_deflection_mm);
    }


    run() {
        this.setAllowedTipDeflection();
        this.findSideAdapterReaction();

        this.findBeamMoments();

        this.findSideReaction();
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

        //console.log("Class : Buraya mast ağırlığı da eklenecek)");

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
        });

        this.data.params.deflections = {};
        // Find deflection at side adapter location
        this.data.deflections["at_side_adapter"] =
            this.findDeflectionAtGivenPoint(this.data.props.side_adapter_z);

        this.data.params.tubes.forEach((tube, i) => {
            //console.log("DDDDDD",tube)

            this.findDeflectionAtGivenPoint(z_mei_end);
        });
    }




    findForcesMomentsAtControlPoints() {

        /*
        Control Points are :
        - Top of the mast
        - Bottom of the mast
        - Side adapter location
        - Wind load location
        - Each tube location (Section change point)
        */

        this.data.control_points = {

            // Top of the mast
            [this.data.props.extendedHeight]: {
                "ext_force": -this.data.props.payload.wind_load,
                "ext_moment": this.data.props.payload.total_tip_moment_Nm,
                "int_reaction": 0,
                "int_moment": 0
            },

        };

        // Tubes wind load
        this.data.params.tubes.forEach((tube, i) => {
            this.data.control_points[tube.wind_load_z] = {
                "ext_force": -tube.wind_load,
                "ext_moment": 0,
                "int_reaction": 0,
                "int_moment": 0
            };
        });

        // Bottom of the mast
        this.data.control_points[0] = {
            "ext_force": 0,
            "ext_moment": 0,
            "int_reaction": 0,
            "int_moment": 0
        };

        // Side Adapter
        this.data.control_points[this.data.props.side_adapter_z] = {
            "ext_force": 0,
            "ext_moment": 0,
            "int_reaction": 0,
            "int_moment": 0
        };

        // Remaing Top Points of Each Tube
        this.data.params.tubes.forEach((tube, i) => {

            if (i > 0) {
            this.data.control_points[tube.extended_zt] = {
                "ext_force": 0,
                "ext_moment": 0,
                "int_reaction": 0,
                "int_moment": 0
            };
            }
        });



    }


    findBeamMoments() {

        console.log("findBeamMoments");
        const zBeamValues = [];

        this.calculateMastTopMoments();
        this.findForcesMomentsAtControlPoints();

        let all_control_point_heights = Object.keys(this.data.control_points).map(Number);

        // Sum All Moments Due To Wind Loads at Each Control Point
        Object.entries(this.data.control_points).forEach(([z, point]) => {

            let root_moment = point.ext_force * z / 1000; // Nm

            all_control_point_heights.forEach((height) => {

                let moment_at_point = Math.abs(point.ext_force) * height /1000 + root_moment;

                if (moment_at_point > 0) {
                    moment_at_point = 0
                }

                this.data.control_points[height].int_moment += moment_at_point;
            });
        });

        // Add Top Moment value to all control points
        all_control_point_heights.forEach((height) => {
            this.data.control_points[height].int_moment += this.data.props.payload.total_tip_moment_Nm;
        });


        this.data.sections = [];



        this.data.params.tubes.forEach((tube, i) => {

            this.data.sections[i] = {};

            // console.log(`all_control_point_heights: ${all_control_point_heights}`)
            // console.log(`tube: ${tube}`,tube)
            // console.log(`i: ${i}`)

            all_control_point_heights.forEach((height) => {

                let lower_tube_extended_zt = this.data.params.tubes[i + 1]?.extended_zt || 0;

                if (height <= tube.extended_zt && height >= lower_tube_extended_zt) {

                    const controlPoint = { ...this.data.control_points[height] };

                    this.data.sections[i][height] = controlPoint;
                    this.data.sections[i][height].EI_Nm2 = tube.EI_Nm2;
                    this.data.sections[i][height].M_EI = controlPoint.int_moment / tube.EI_Nm2;

                    // console.log(`ARADA [ ${i} ] [ ${height} ] : ${tube.EI_Nm2}`,this.data.sections[i][height].EI_Nm2 )
                }
            });


            // Top Tube
            if (i === 0) {
                this.data.sections[i][this.data.props.extendedHeight] = this.data.control_points[this.data.props.extendedHeight];
                this.data.sections[i][this.data.props.extendedHeight].EI_Nm2 = tube.EI_Nm2;
                this.data.sections[i][this.data.props.extendedHeight].M_EI = this.data.sections[i][this.data.props.extendedHeight].int_moment / tube.EI_Nm2;
                //console.log(`Heihgt 0 iken : ${height}, Tube : ${i}, EI : ${tube.EI_Nm2}`)
            }

            // Bottom Tube
            if (tube.no === this.data.params.tubes.at(-1).no) {
                this.data.sections[i][0] = this.data.control_points[0];
                this.data.sections[i][0].EI_Nm2 = tube.EI_Nm2;
                this.data.sections[i][0].M_EI = this.data.sections[i][0].int_moment / tube.EI_Nm2;
            }


            // console.log(`********************************\n\n\n`)

        });















        this.data.params.tubes.forEach((tube, i) => {

            if (i === 0) {
                this.data.beam[i].tip_load = this.data.props.payload.wind_load;
                this.data.beam[i].tip_moment =
                    this.data.props.payload.total_tip_moment_Nm;
                this.data.beam[i].z_tip = this.data.props.extendedHeight;
                zBeamValues.push(this.data.props.extendedHeight);
            } else {
                zBeamValues.push(tube.extended_zt);
            }

            zBeamValues.push(tube.wind_load_z);

            if (tube.no === this.data.params.tubes.at(-1).no) {
                zBeamValues.push(this.data.props.side_adapter_z);
            }

            this.data.beam.map((section) => {
                if (section.no === tube.no) {
                    this.data.beam[i].wind_load = tube.wind_load;
                    this.data.beam[i].z_wind_load = tube.wind_load_z;
                }
            });

            this.data.beam[i].moment_top = 0;
            this.data.beam[i].moment_bottom = 0;
            this.data.beam[i].moment_at_wind_load = 0;

        });

        zBeamValues.push(0);

        let moment;
        let force;
        let internal_moments = {};

        zBeamValues.forEach((z) => {
            internal_moments[z] = 0;
        });

        this.data.beam.forEach((section, i) => {
            force = section.wind_load;

            zBeamValues.forEach((z) => {
                moment = (force * (z - section.z_wind_load)) / 1000;
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
            let moment = (tipForce * (z - tipZ)) / 1000;
            if (moment > 0) {
                moment = 0;
            }

            internal_moments[z] += moment;

            //console.log("yük, z, moment 222", tipForce, z, tipZ, moment);
        });

        //console.log("zBeamValues", zBeamValues);

        const tipMoment = this.data.props.payload.total_tip_moment_Nm;

        Object.entries(internal_moments).forEach(([z, moment]) => {
            internal_moments[z] += tipMoment;
        });

        this.data.deflection_data = { 0: 0 };

        this.data.beam.forEach((section, i) => {
            section.moment_top = internal_moments[section.z_top];
            section.moment_bottom = internal_moments[section.z_bottom];
            section.m_ei_top = section.moment_top / section.ei;
            section.m_ei_bottom = section.moment_bottom / section.ei;
            section.moment_area =
                (0.5 *
                    (section.z_top - section.z_bottom) *
                    (section.m_ei_top + section.m_ei_bottom)) /
                1000;
        });

        let point_in_between;

        this.data.beam.forEach((section, i) => {
            point_in_between =
                section.z_bottom +
                Math.floor((section.z_top - section.z_bottom) / 2);

            this.data.deflection_data[section.z_top] =
                this.findDeflectionAtGivenPoint2(section.z_top);

            this.data.deflection_data[point_in_between] =
                this.findDeflectionAtGivenPoint2(point_in_between);
        });

        this.data.deflection_data[this.data.props.side_adapter_z] =
            this.findDeflectionAtGivenPoint2(this.data.props.side_adapter_z);

        // console.log("CURVE", this.data.deflection_data);
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

        // Payload mast is increased by %20 of total lifted mast weight
        this.data.props.payload.tip_moment_due_deflection_Nm =
            -(
                9.81 *
                (this.data.params.payload_mass + 0.2 * this.data.weights.lifted_mass) *
                this.data.props.allowed_tip_deflection_mm
            ) / 1000; // Convert to Nm

        //console.log("Class : Buraya mast ağırlığı da eklenecek)");

        // Total Tip Moment - Constant throughout the mast
        this.data.props.payload.total_tip_moment_Nm =
            this.data.props.payload.tip_moment_due_z_offset_Nm +
            this.data.props.payload.tip_moment_due_x_offset_Nm +
            this.data.props.payload.tip_moment_due_deflection_Nm;

        // console.log("Total Tip Moment 1:", this.data.props.payload.tip_moment_due_z_offset_Nm);
        // console.log("Total Tip Moment 2:", this.data.props.payload.tip_moment_due_x_offset_Nm);
        // console.log("Total Tip Moment 3:", this.data.props.payload.tip_moment_due_deflection_Nm);

    }


    getMomentAreaCG(section) {
        let delta_z = Math.abs(section.z_top - section.z_bottom);

        let area1 = Math.abs(delta_z * section.m_ei_top); // Rectangle
        let area2 = Math.abs(
            0.5 * delta_z * (section.m_ei_bottom - section.m_ei_top),
        ); // Triangle

        if (section.m_ei_top >= section.m_ei_bottom) {
            return (
                (0.5 * delta_z * area1 + (delta_z * area2) / 3) /
                (area1 + area2)
            );
        }

        if (section.m_ei_bottom > section.m_ei_top) {
            return (
                (0.5 * delta_z * area1 + (2 * delta_z * area2) / 3) /
                (area1 + area2)
            );
        }

        alert("Something fishy!");
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

    findDeflectionAtGivenPoint2(z) {
        let deflection = 0;
        let xbar;
        let m;
        let delta_z;
        let delta_mei;
        let mei_interpolated;
        let moment_area;

        //console.log("Deflection function runnng", z);

        this.data.beam.forEach((section, i) => {
            if (z >= section.z_top) {
                this.data.beam[i].z_section_cg =
                    section.z_bottom + this.getMomentAreaCG(section); // mm

                // console.log(
                //     "eeee",
                //     section.z_bottom,
                //     this.getMomentAreaCG(section),
                //     this.data.beam[i].z_section_cg,
                // );

                xbar = (z - this.data.beam[i].z_section_cg) / 1000; // m
                deflection += xbar * section.moment_area;

                // console.log("section", section);
                // console.log(
                //     "AAAAA z,z_bottom,i,cg,marea,fun",
                //     z,
                //     section.z_bottom,
                //     i,
                //     this.data.beam[i].z_section_cg,
                //     section.moment_area,
                //     this.getMomentAreaCG(section),
                // );
            }

            if ((z < section.z_top) & (z > section.z_bottom)) {
                // console.log("z < z_top BBBB", z, i);

                delta_z = Math.abs(section.z_top - section.z_bottom);
                delta_mei = Math.abs(section.m_ei_top - section.m_ei_bottom);

                m = delta_mei / delta_z;

                if (section.m_ei_top >= section.m_ei_bottom) {
                    mei_interpolated =
                        m * (z - section.z_top) + section.m_ei_top;

                    // console.log(
                    //     "burada olmalı",
                    //     m,
                    //     z,
                    //     section.z_top,
                    //     section.m_ei_top,
                    //     mei_interpolated,
                    //     z - section.z_top,
                    // );
                }

                if (section.m_ei_bottom > section.m_ei_top) {
                    mei_interpolated =
                        -m * (z - section.z_top) + section.m_ei_top;
                }

                let half_section = {
                    z_top: z,
                    z_bottom: section.z_bottom,
                    m_ei_bottom: section.m_ei_bottom,
                    m_ei_top: mei_interpolated,
                };

                // console.log(
                //     "mei interpolated",
                //     half_section,
                //     z,
                //     i,
                //     mei_interpolated,
                // );
                //

                let cg = section.z_bottom + this.getMomentAreaCG(half_section); // mm

                xbar = (z - cg) / 1000; // m

                // console.log(
                //     "z, xbar",
                //     z,
                //     xbar,
                //     this.getMomentAreaCG(half_section),
                // );

                moment_area =
                    -0.5 *
                    (Math.abs(mei_interpolated + section.m_ei_bottom) *
                        Math.abs(z - section.z_bottom));

                deflection += (xbar * moment_area) / 1000;
            }

            // console.log("ara deflection deeri", deflection, i, z);
        });

        //console.log("Deflection at z : FUNCTOON END", z, 1000 * deflection);
        return 1000 * deflection; // mm
    }


    findSideReaction() {
        let side_deflection =
            this.data.deflection_data[this.data.props.side_adapter_z] / 1000; // in m

        let length = this.data.props.side_adapter_z;

        let ei = this.data.beam.at(-1).ei;

        let side_reaction =
            (side_deflection * 3 * ei) / Math.pow(length / 1000, 3);

        this.data.props.reaction_force_at_side_adapter = side_reaction;

        //console.log("SIDE REACTION", ei, side_reaction, side_deflection);
    }




    findMaxMinRefDeflections() {

        this.data.props.tubesMaxRef = {}
        this.data.props.tubesMinRef = {}


        this.data.beam.tubes.forEach((tube, i) => {
            const deflection = this.getDeflection(tube.z);
            if (i === 0) {
                this.data.props.tubesMaxRef = { ...tube, deflection };
                this.data.props.tubesMinRef = { ...tube, deflection };
            } else {
                if (deflection > this.data.props.tubesMaxRef.deflection) {
                    this.data.props.tubesMaxRef = { ...tube, deflection };
                }
                if (deflection < this.data.props.tubesMinRef.deflection) {
                    this.data.props.tubesMinRef = { ...tube, deflection };
                }
            }
        });
    }
}
