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

        this.data.deflection_data = {};

        this.findDeflectionAtGivenPoint2();
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


    findDeflectionAtGivenPoint2() {

        let all_control_point_heights = Object.keys(this.data.control_points).map(Number);

        const pairs = all_control_point_heights.slice(0, -1).map((val, index) => {
            return [val, all_control_point_heights[index + 1]];
        });

        this.data.props.mei_data = {};

        pairs.forEach((pair,key) => {

            let z_start = pair[0];
            let z_end = pair[1];
            this.data.sections.forEach((section, i) => {
                if (Object.keys(section).map(Number).includes(z_start) && Object.keys(section).map(Number).includes(z_end)) {

                    let mei_start = section[z_start].M_EI;
                    let mei_end = section[z_end].M_EI;
                    let mei_area = 0.5 * (mei_start + mei_end) * (z_end - z_start) / 1000; 

                    // Area CG Calculation
                    let cg_rectangle, cg_triangle, xbar, area_rectangle,area_triangle,area_total;

                    cg_rectangle = z_start + (z_end - z_start) / 2;

                    if (mei_start < mei_end) {
                        cg_triangle = z_start + 1 * (z_end - z_start) / 3;
                        area_rectangle = mei_end * (z_end - z_start);
                        area_triangle = 0.5 * (mei_start - mei_end) * (z_end - z_start);

                    } else {
                        cg_triangle = z_start + 2 * (z_end - z_start) / 3;
                        area_rectangle = mei_start * (z_end - z_start);
                        area_triangle = 0.5 * (mei_end - mei_start) * (z_end - z_start);
                    }

                    area_total = area_rectangle + area_triangle;
                    xbar = (area_rectangle * cg_rectangle + area_triangle * cg_triangle) / area_total;

                    this.data.props.mei_data[key] = {
                        mei_area: mei_area,
                        mei_start: mei_start,
                        mei_end: mei_end,
                        z_start: z_start,
                        z_end: z_end,
                        xbar: xbar,
                        mei_area_rectangle: area_rectangle,
                        mei_area_triangle: area_triangle,
                    };
                }
            });
        });

        // Find All Deflections at all Control Points
        Object.keys(this.data.control_points).forEach((key) => {
            this.findDeflectionAtControlPoint(parseFloat(key));
        });

        return true;
    }


    findDeflectionAtControlPoint(z){

        let deflection = 0;

        Object.values(this.data.props.mei_data).forEach((section) => {
            if (section.z_end <= z ) {
                deflection += (z-section.xbar) * section.mei_area;
            }
        });

        this.data.deflection_data[z] = deflection.toFixed(3);
        return true;        
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
