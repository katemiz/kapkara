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
    }


    run() {

        this.data.props.mei_data = {};
        this.data.props.mei_data2 = {};


        this.setAllowedTipDeflection();
        this.findBeamMoments();
        this.findSideReaction();
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





    findForcesMomentsAtControlPoints2() {

        /*
        This is valid for configuration with side adapter only,
        and only differs on z locations less than side adapter Z
        */

        this.data.control_points2 = structuredClone(this.data.control_points);

        let root_moment = this.data.props.reaction_force_at_side_adapter * this.data.props.side_adapter_z / 1000;

        // At Z0 and wind load z on fixed tube, substract moment caused by side adapter reaction force
        this.data.control_points2[0].int_moment += root_moment;

        let additional_moment_at_wind_load_z = this.data.props.reaction_force_at_side_adapter * (this.data.props.side_adapter_z - this.data.params.tubes.at(-1).wind_load_z) /1000;

        this.data.control_points2[this.data.params.tubes.at(-1).wind_load_z].int_moment += additional_moment_at_wind_load_z;
    }








    findBeamMoments() {

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

            all_control_point_heights.forEach((height) => {

                let lower_tube_extended_zt = this.data.params.tubes[i + 1]?.extended_zt || 0;

                if (height <= tube.extended_zt && height >= lower_tube_extended_zt) {

                    const controlPoint = { ...this.data.control_points[height] };
                    this.data.sections[i][height] = controlPoint;
                    this.data.sections[i][height].EI_Nm2 = tube.EI_Nm2;
                    this.data.sections[i][height].M_EI = controlPoint.int_moment / tube.EI_Nm2;
                }
            });

            // Top Tube
            if (i === 0) {
                this.data.sections[i][this.data.props.extendedHeight] = this.data.control_points[this.data.props.extendedHeight];
                this.data.sections[i][this.data.props.extendedHeight].EI_Nm2 = tube.EI_Nm2;
                this.data.sections[i][this.data.props.extendedHeight].M_EI = this.data.sections[i][this.data.props.extendedHeight].int_moment / tube.EI_Nm2;
            }

            // Bottom Tube
            if (tube.no === this.data.params.tubes.at(-1).no) {
                this.data.sections[i][0] = this.data.control_points[0];
                this.data.sections[i][0].EI_Nm2 = tube.EI_Nm2;
                this.data.sections[i][0].M_EI = this.data.sections[i][0].int_moment / tube.EI_Nm2;
            }
        });

        //this.data.deflection_data = {};

        this.findAllDeflections(false); // w/o side adapter
        return true;
    }



    findBeamMoments2() {

        /*
        This is valid for configuration with side adapter only,
        */

        let all_control_point_heights = Object.keys(this.data.control_points2).map(Number);

        this.data.sections2 = [];

        this.data.params.tubes.forEach((tube, i) => {

            this.data.sections2[i] = {};

            all_control_point_heights.forEach((height) => {

                let lower_tube_extended_zt = this.data.params.tubes[i + 1]?.extended_zt || 0;

                if (height <= tube.extended_zt && height >= lower_tube_extended_zt) {

                    const controlPoint = { ...this.data.control_points2[height] };
                    this.data.sections2[i][height] = controlPoint;
                    this.data.sections2[i][height].EI_Nm2 = tube.EI_Nm2;
                    this.data.sections2[i][height].M_EI = controlPoint.int_moment / tube.EI_Nm2;
                }
            });

            // Top Tube
            if (i === 0) {
                this.data.sections2[i][this.data.props.extendedHeight] = this.data.control_points2[this.data.props.extendedHeight];
                this.data.sections2[i][this.data.props.extendedHeight].EI_Nm2 = tube.EI_Nm2;
                this.data.sections2[i][this.data.props.extendedHeight].M_EI = this.data.sections2[i][this.data.props.extendedHeight].int_moment / tube.EI_Nm2;
            }

            // Bottom Tube
            if (tube.no === this.data.params.tubes.at(-1).no) {
                this.data.sections2[i][0] = this.data.control_points2[0];
                this.data.sections2[i][0].EI_Nm2 = tube.EI_Nm2;
                this.data.sections2[i][0].M_EI = this.data.sections2[i][0].int_moment / tube.EI_Nm2;
            }
        });

        //this.data.deflection_data2 = {};


        this.findAllDeflections(true); // with side adapter
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


    findAllDeflections(is_with_side_adapter = false) {

        let control_points,
            sections,
            deflection_data = {};

        if (is_with_side_adapter) {
            control_points = structuredClone(this.data.control_points2);
            sections = structuredClone(this.data.sections2);

            let inflection_z = Object.values(sections).at(-1)[0].int_moment * this.data.params.tubes.at(-1).wind_load_z / ( Object.values(sections).at(-1)[0].int_moment + Math.abs(Object.values(sections).at(-1)[this.data.params.tubes.at(-1).wind_load_z].int_moment))
            console.log('inflection_z', inflection_z)

            control_points[inflection_z.toFixed(0)] = {
                ext_force: 0,
                ext_moment: 0,
                int_reaction: 0,
                int_moment: 0,
                EI_Nm2: this.data.params.tubes.at(-1).EI_Nm2,
                M_EI: 0
            }

            sections[Object.keys(sections).length -1][inflection_z.toFixed(0)] = {
                ext_force: 0,
                ext_moment: 0,
                int_reaction: 0,
                int_moment: 0,
                EI_Nm2: this.data.params.tubes.at(-1).EI_Nm2,
                M_EI: 0
            }

        } else {
            control_points = structuredClone(this.data.control_points);
            sections = structuredClone(this.data.sections);
        }

        let all_control_point_heights = Object.keys(control_points).map(Number);

        const pairs = all_control_point_heights.slice(0, -1).map((val, index) => {
            return [val, all_control_point_heights[index + 1]];
        });

        console.log("Pairs", pairs)



        pairs.forEach((pair,key) => {

            let z_start = pair[0];
            let z_end = pair[1];

            sections.forEach((section, i) => {
                if (Object.keys(section).map(Number).includes(z_start) && Object.keys(section).map(Number).includes(z_end)) {

                    //console.log("z_start, z_end", z_start, z_end)

                    let mei_start = section[z_start].M_EI;
                    let mei_end = section[z_end].M_EI;
                    let mei_area = 0.5 * (mei_start + mei_end) * (z_end - z_start) / 1000; 

                    // Area CG Calculation
                    let cg_rectangle, cg_triangle, xbar_z, area_rectangle,area_triangle,area_total;

                    cg_rectangle = z_start + (z_end - z_start) / 2;

                    if (mei_start <= 0 && mei_end <= 0) {

                        if (mei_start < mei_end) {
                            cg_triangle = z_start + 1 * (z_end - z_start) / 3;
                            area_rectangle = mei_end * (z_end - z_start);
                            area_triangle = 0.5 * (mei_start - mei_end) * (z_end - z_start);
                        }

                        if (mei_start > mei_end) {
                            cg_triangle = z_start + 2 * (z_end - z_start) / 3;
                            area_rectangle = mei_start * (z_end - z_start);
                            area_triangle = 0.5 * (mei_end - mei_start) * (z_end - z_start);
                        }
                    }

                    if (mei_start >= 0 && mei_end >= 0) {

                        if (mei_start > mei_end) {
                            cg_triangle = z_start + 1 * (z_end - z_start) / 3;
                            area_rectangle = mei_start * (z_end - z_start);
                            area_triangle = 0.5 * (mei_end - mei_start) * (z_end - z_start);
                        }

                        if (mei_start < mei_end) {
                            cg_triangle = z_start + 2 * (z_end - z_start) / 3;
                            area_rectangle = mei_end * (z_end - z_start);
                            area_triangle = 0.5 * (mei_start - mei_end) * (z_end - z_start);
                        }
                    }

                    area_total = area_rectangle + area_triangle;
                    xbar_z = (area_rectangle * cg_rectangle + area_triangle * cg_triangle) / area_total;

                    let ozellik = {
                        mei_area: mei_area,
                        mei_start: mei_start,
                        mei_end: mei_end,
                        z_start: z_start,
                        z_end: z_end,
                        xbar_z: xbar_z,
                        mei_area_rectangle: area_rectangle,
                        mei_area_triangle: area_triangle,
                    };


                    if (is_with_side_adapter) {
                        this.data.props.mei_data2[key] = ozellik;
                    } else {
                        this.data.props.mei_data[key] = ozellik;
                    }
                } 
            });
        });


        // Find All Deflections at all Control Points
        Object.keys(control_points).forEach((key) => {
            deflection_data[parseFloat(key)] = this.findDeflectionAtControlPoint(parseFloat(key),is_with_side_adapter);
        });



        if (is_with_side_adapter) {
            this.data.control_points2 = control_points;
            this.data.sections2 = sections;
            this.data.deflection_data2 = deflection_data;

            //console.log("With side adapter", this.data.deflection_data2);
        } else {
            this.data.control_points = control_points;
            this.data.sections = sections;
            this.data.deflection_data = deflection_data;
            
            //console.log("Without side adapter", this.data.deflection_data);
        }

        return true;
    }


    findDeflectionAtControlPoint(z, is_with_side_adapter = false){

        let deflection = 0, deflection_value;

        console.log(`Z: ${z}, is_with_side_adapter: ${is_with_side_adapter}\n*********************`);

        Object.values(is_with_side_adapter ? this.data.props.mei_data2 : this.data.props.mei_data).forEach((section) => {
            if (section.z_end <= z ) {



                deflection_value = (z - section.xbar_z) * section.mei_area;
                deflection += deflection_value;

                section.MEI_area_arm = z-section.xbar_z;
                section.deflection_increment = deflection_value;
                section.deflection_total = deflection;


                if (is_with_side_adapter && z <= 1800) {
                    //console.log(`deflection: ${deflection}, z: ${z}, section.xbar_z: ${section.xbar_z}`);
                    console.log(`deflection value: ${deflection_value.toFixed(3)}, section.mei_area: ${section.mei_area.toFixed(5)}, area_arm ${section.MEI_area_arm.toFixed(1)} xbar_z ${section.xbar_z}`);

                }
            }
        });

        console.log(` Total deflection at ${z}: ${deflection} \n\n\n`);
        
        return deflection.toFixed(3);
    }


    findSideReaction() {
        let side_deflection =
            this.data.deflection_data[this.data.props.side_adapter_z] / 1000; // in m

        let length = this.data.props.side_adapter_z;

        let ei = this.data.beam.at(-1).ei; // Since fixed adapter will always be on fixed tube

        let side_reaction =
            (side_deflection * 3 * ei) / Math.pow(length / 1000, 3);

        this.data.props.reaction_force_at_side_adapter = -side_reaction;

        // Bottom Interface Reaction Force
        let total_external_force = 0;

        Object.values(this.data.sections).forEach((section) => {

            Object.values(section).forEach((subSection) => {
                total_external_force += subSection.ext_force;
            });
        });

        this.data.props.reaction_force_at_bottom_interface = this.data.props.reaction_force_at_side_adapter + total_external_force;

        this.repeatCalculationfWithSideReaction();
    }


    repeatCalculationfWithSideReaction() {

        this.findForcesMomentsAtControlPoints2();
        this.findBeamMoments2(true);

        return true;

        let root_moment = this.data.props.reaction_force_at_side_adapter * this.data.props.side_adapter_z / 1000;

        let m = -this.data.props.reaction_force_at_side_adapter;

        //this.data.sections2 = { ...this.data.sections };

        this.data.sections2 = structuredClone(this.data.sections);



        // At Z0 and wind load z on fixed tube, substract moment caused by side adapter reaction force
        Object.values(this.data.sections2).at(-1)[0].int_moment += root_moment;

        let additional_moment_at_wind_load_z = this.data.props.reaction_force_at_side_adapter * (this.data.props.side_adapter_z - this.data.params.tubes.at(-1).wind_load_z) /1000;

        Object.values(this.data.sections2).at(-1)[this.data.params.tubes.at(-1).wind_load_z].int_moment += additional_moment_at_wind_load_z;

        console.log('fixed_tube', this.data.params.tubes.at(-1).wind_load_z)
        console.log('additional_moment_at_wind_load_z', additional_moment_at_wind_load_z)

        // Find deflection inflection point Z

        let inflection_z = Object.values(this.data.sections2).at(-1)[0].int_moment * this.data.params.tubes.at(-1).wind_load_z / ( Object.values(this.data.sections2).at(-1)[0].int_moment + Math.abs(Object.values(this.data.sections2).at(-1)[this.data.params.tubes.at(-1).wind_load_z].int_moment))
        console.log('inflection_z', inflection_z)

        // total moment at inflection point Z is ZERO

        let mei_start = Object.values(this.data.sections2).at(-1)[0].int_moment / this.data.params.tubes.at(-1).EI_Nm2;

        let xbar_z = 2 * inflection_z / 3;

        let deflection_at_inflection_z = xbar_z * inflection_z * mei_start / 2; // mm

        console.log('deflection_at_inflection_z', xbar_z, inflection_z, mei_start, deflection_at_inflection_z)

        return true;

    }



}
