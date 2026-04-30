export class SvgDraw {
    constructor(data) {

        //console.log("SVG Draw Initialized with Data:", data);
        this.data = data;
        this.drawType = null;
        this.svgDiv = null;
        this.svgWidth = null;
        this.svgHeight = null;
        this.scale = null;
        this.vcline_x = null;
        this.vcline_info = null;

        this.force_line_scale = 250 / this.data.payload.wind_load;
    }

    svgDraw(drawType) {
        this.drawType = drawType;
        this.svgDiv = document.getElementById("div" + drawType);
        this.setSvgParams();

        switch (drawType) {
            case "Loads":
                this.svgDrawLoads();
                break;

            default:
            case "Extended":
                this.svgDrawExtended();
                break;

            case "Nested":
                this.svgDrawNested();
                break;
        }
    }

    svgDrawLoads() {
        this.addSvgElement();
        this.drawCoordinateAxis();
        this.drawTubes('Extended', true);
        this.drawGuyings();
        this.drawPayload();
        this.drawVehicleAdapter();
        this.drawPayloadAdapter();
    }

    svgDrawExtended() {
        this.addSvgElement();
        this.drawCoordinateAxis();
        this.drawTubes('Extended', false);
        this.drawPayloadAdapter();
        this.drawGuyings();
        this.drawVehicleAdapter();
    }

    svgDrawNested() {
        this.addSvgElement();
        this.drawCoordinateAxis();
        this.drawTubes("Nested", false);
        this.drawPayloadAdapter('Nested');
        this.drawVehicleAdapter();
    }

    setSvgParams() {
        this.MX = 50;
        this.MY = 20;

        this.svgWidth =
            this.svgDiv.clientWidth -
            window.getComputedStyle(this.svgDiv).paddingLeft.replace("px", "") -
            window.getComputedStyle(this.svgDiv).paddingRight.replace("px", "");
        this.svgHeight = (16 * this.svgWidth) / 19;
        this.vcline_x = 0.5 * this.svgWidth;
        this.vcline_info = 0.7 * this.svgWidth;

        let totalHeight;

        switch (this.drawType) {
            case "Loads":
                totalHeight =
                    1000 * Math.sqrt(this.data.params.sail_area) +
                    this.data.extendedHeight;
                break;

            default:
            case "Extended":
                totalHeight = this.data.extendedHeight;
                break;

            case "Nested":
                totalHeight = this.data.nestedHeight;
                break;
        }

        this.scale = (this.svgHeight - 2 * this.MY) / totalHeight;
    }

    addSvgElement() {
        // Check if it's empty or has an SVG; destroy old one
        if (this.svgDiv.querySelector("svg")) {
            this.svgDiv.innerHTML = "";
        }

        this.svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
        );
        this.svg.setAttribute("width", this.svgWidth);
        this.svg.setAttribute("height", this.svgHeight);
        this.svg.setAttribute(
            "viewBox",
            `0 0 ${this.svgWidth} ${this.svgHeight}`,
        );
        this.svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        this.svg.setAttribute("class", "mast-svg");

        this.svgDiv.appendChild(this.svg);

        this.g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    }

    drawCoordinateAxis() {
        this.drawLine(
            this.MX,
            this.svgHeight - this.MY,
            this.svgWidth - this.MX,
            this.svgHeight - this.MY,
            "ground",
        ); // Horizontal Ground Line

        this.drawLine(
            this.vcline_x,
            this.MY,
            this.vcline_x,
            this.svgHeight - this.MY,
            "centerline",
        ); // Vertical Centerline

        this.drawRectangle(
            this.MX,
            this.svgHeight - this.MY,
            this.svgWidth - 2 * this.MX,
            this.MY / 2,
            "side_adapter",
        );
    }

    drawTubes(state = "Extended", showForces = false) {
        let x, y, yt, yb, w, h;
        let zt, zb, th;
        let start_x;

        let force_line_strength;

        this.data.params.tubes.forEach((tube, i) => {
            state === "Nested" ? (zt = tube.nested_zt) : (zt = tube.extended_zt);
            state === "Nested" ? (zb = tube.nested_zb) : (zb = tube.extended_zb);

            x = this.vcline_x - (this.scale * tube.od) / 2;
            yt = this.svgHeight - this.MY - this.scale * zt;
            yb = this.svgHeight - this.MY - this.scale * zb;
            w = this.scale * tube.od;
            h = this.scale * this.data.params.tube_length;
            this.drawRectangle(x, yt, w, h, "tube");    // Draw Tube Rectangle

            start_x = this.vcline_x + this.scale * tube.od * 0.8;

            // Add Dimension text and lines
            this.drawLine(start_x, yt, this.vcline_info, yt, 'dimension'); // Z-Line
            this.drawText(this.vcline_info, yt - 4, zt.toFixed(0), 'end'); // Z- Value Text
            this.drawLine(start_x , yb, this.vcline_info, yb, 'dimension'); // Z-Line
            this.drawText(this.vcline_info, yb - 4, zb.toFixed(0), 'end'); // Z- Value Text

            if (showForces) {
                y = this.svgHeight - this.MY - this.scale * tube.wind_load_z;

                this.drawLine(start_x, y, this.vcline_info, y, 'dimension'); // Load Acting Point
                this.drawText(this.vcline_info, y - 4, tube.wind_load_z.toFixed(0), 'end'); // Z-Value Text

                force_line_strength = this.force_line_scale * tube.wind_load;

                start_x = this.vcline_x - force_line_strength;

                this.drawLine(start_x , y, this.vcline_x, y, 'dimension'); // Force Line
                this.drawText(start_x, y - 4, tube.wind_load.toFixed(0) + " N", 'start'); // Force Value Text
                this.drawArrow(this.vcline_x, y); // Force Arrow
            }
        });
    }


    drawPayloadAdapter(state = "Extended") {

        let x,y,w,h;
        const payload_plate_w = 1.2 * this.scale * this.data.params.tubes[0].od;

        let stateTxt = state === "Nested" ? "Nested" : "Extended";
        let z = state === "Nested" ? this.data.nestedHeight : this.data.extendedHeight;

        // Payload Adapter in Extended State
        x = this.vcline_x - payload_plate_w;
        y = this.svgHeight - this.MY - this.scale * z;
        w = 2 * payload_plate_w;
        h = this.scale * this.data.params.payload_adapter_height;
        this.drawRectangle(x, y, w, h, "tube");

        x = x - 20;
        let x2 = x - 100;

        this.drawLine(x, y, x2, y, "guying"); // Mast Top Face
        this.drawText(x2, y - 5, z.toFixed(0));
        this.drawText(x2, y + 15, `${stateTxt} Height`, 'start');
    }



    drawPayload() {
        let payload_dim = 1000 * Math.sqrt(this.data.params.sail_area);


        let force_line_strength = this.force_line_scale * this.data.payload.wind_load;

        let x = this.vcline_x - (this.scale * payload_dim) / 2;
        let y =
            this.svgHeight -
            this.MY -
            this.scale * this.data.extendedHeight -
            this.scale * payload_dim;
        let w = this.scale * payload_dim;
        let h = this.scale * payload_dim;

        this.drawRectangle(x, y, w, h, "payload");

        y = this.svgHeight - this.MY - this.scale * this.data.payload.wind_load_z;

        let cg_x = this.vcline_x + this.scale * this.data.params.x_offset;

        this.drawLine(cg_x - force_line_strength , y, cg_x, y, 'dimension'); // Force Line
        this.drawText(cg_x - force_line_strength, y - 4, this.data.payload.wind_load.toFixed(0) + " N", 'start'); // Force Value Text
        this.drawArrow(cg_x, y); // Force Arrow

        this.drawLine(1.1 *this.vcline_x , y, this.vcline_info, y, 'dimension'); // Force Line
        this.drawText(this.vcline_info, y - 4, this.data.payload.wind_load_z.toFixed(0), 'end'); // Force Value Text

        // CG and Center of Pressure
        this.drawCircle(cg_x, y, 6, "cg");

        // Weight
        this.drawLine(cg_x , y, cg_x, 0, 'dimension'); // Force Line
        this.drawArrow(cg_x, y, "Down"); // Force Arrow

    }


    drawVehicleAdapter() {
        let side_support_height =
            0.6 *
            2 *
            (this.data.params.tubes.at(-1).extended_zt -
                this.data.side_adapter_z);
        let side_support_width = 1.3 * this.data.params.tubes.at(-1).od;

        let x = this.vcline_x - this.scale * side_support_width * 0.5;
        let y =
            this.svgHeight -
            this.MY -
            this.scale * (this.data.side_adapter_z + 0.5 * side_support_height);

        let w = this.scale * side_support_width * 1.5;
        let h = this.scale * side_support_height;

        this.drawRectangle(x, y, w, h, "side_adapter");
        this.drawCircle(
            this.vcline_x,
            this.svgHeight - this.MY - this.data.side_adapter_z * this.scale,
            2,
            "side",
        );

        x += w;

        this.drawRectangle(
            x,
            y,
            0.5 * w,
            this.scale * (this.data.side_adapter_z + 0.5 * side_support_height),
            "side_adapter",
        );
    }


    SILdrawForceArrows() {
        let ax1, ay1, ax2, ay2, ax3, ay3;
        const force_line_scale = 250 / this.data.payload.wind_load;
        let force_line_strength;
        let text_line_end = 1.3 * this.vcline_x;

        this.data.params.tubes.forEach((tube, i) => {
            force_line_strength = force_line_scale * tube.wind_load;

            ax2 = this.vcline_x;
            ay1 = this.svgHeight - this.MY - this.scale * tube.wind_load_z;
            ax1 = this.vcline_x - force_line_strength;
            ay2 = ay1;

            // Force arrows and load values
            this.drawInfo(
                ax1,
                ay1,
                force_line_strength,
                "L",
                "force",
                tube.wind_load.toFixed(0) + " N",
                false,
            );

            this.drawInfo(
                this.vcline_info,
                ay1,
                this.vcline_info - ax1,
                "R",
                "info",
                tube.wind_load_z.toFixed(0),
                false,
            );
        });

        // PAYLOAD ARROW LINE AND ARROW
        ax1 = this.vcline_x + this.scale * this.data.params.x_offset;
        ay1 =
            this.svgHeight -
            this.MY -
            this.scale * this.data.payload.wind_load_z;

        ax2 = ax1 + force_line_strength;
        ay2 = ay1;

        // PAYLOAD FORCE TEXT AND ARROW
        this.drawInfo(
            ax1,
            ay1,
            force_line_strength,
            "L",
            "force",
            this.data.payload.wind_load.toFixed(0) + " N",
            false,
        );
    }


    drawGuyings() {
        let ax1, ay1, ax2, ay2, ax3, ay3;

        this.data.params.tubes.forEach((tube, i) => {
            // Guying
            ax1 = this.MX;
            ay1 = this.svgHeight - this.MY;
            ax2 = this.vcline_x - this.scale * tube.od * 0.5;
            ay2 = this.svgHeight - this.MY - this.scale * tube.extended_zt;
            this.drawLine(ax1, ay1, ax2, ay2, "guying");
        });
    }


    drawLine(x1, y1, x2, y2, type) {
        let line = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line",
        );

        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);

        switch (type) {
            case "arrow-line":
                line.setAttribute("stroke", "rgb(216, 30, 91)");
                line.setAttribute("stroke-width", "1");
                break;

            case "ground":
                line.setAttribute("stroke", "rgb(130, 48, 56)");
                line.setAttribute("stroke-width", "0.3");
                break;

            case "centerline":
                line.setAttribute("stroke", "rgb(3, 83, 164)");
                line.setAttribute("stroke-width", "1");
                break;

            case "dimension":
                line.setAttribute("stroke", "rgb(3, 83, 164)");
                line.setAttribute("stroke-width", "0.4");
                break;

            case "guying":
                line.setAttribute("stroke", "grey");
                line.setAttribute("stroke-width", "1");
                break;

            default:
                line.setAttribute("stroke", "blue");
                line.setAttribute("stroke-width", "2");
                break;
        }

        this.svg.appendChild(line);
    }

    drawArrow(x, y , direction = "Right") {
        let arrow_height = 5;
        let arrow_width = 20;

        let x1 = x - arrow_width;
        let y1 = y - arrow_height;
        let x2 = x1 + arrow_width;
        let y2 = y;
        let x3 = x1;
        let y3 = y1 + 2 * arrow_height;

        if ( direction === "Down") {
            x1 = x
            x2 = x + arrow_height;
            x3 = x - arrow_height;
            y1 = y;
            y2 = y - arrow_width;
            y3 = y - arrow_width;
        }

        let arr = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
        );

        arr.setAttribute("d", `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`);
        arr.setAttribute("fill", "rgb(216, 30, 91)");
        arr.setAttribute("stroke-width", "1");
        this.svg.appendChild(arr);
    }

    drawText(x, y, text_content, align = "start") {
        let text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text",
        );

        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("text-anchor", align);
        text.setAttribute("font-size", "12");
        text.textContent = text_content;
        this.svg.appendChild(text);
    }

    drawRectangle(x, y, width, height, type) {
        let rect = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect",
        );

        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);

        switch (type) {
            case "tube":
                rect.setAttribute("stroke", "black");
                rect.setAttribute("fill", "rgb(184, 213, 184,0.3");
                rect.setAttribute("stroke-width", "1");
                break;
            case "payload":
                //rect.setAttribute("stroke", "rgb(16, 25, 53)");
                rect.setAttribute("fill", "rgb(149, 178, 184)");
                //rect.setAttribute("stroke-width", "1");
                break;

            case "ground":
                rect.setAttribute("stroke", "rgb(121, 82, 10)");
                rect.setAttribute("fill", "rgb(151, 139, 82,0.6)");
                rect.setAttribute("stroke-width", ".1");
                break;

            case "side_adapter":
                //rect.setAttribute("stroke", "rgb(121, 82, 10)");
                rect.setAttribute("fill", "rgb(151, 139, 82,0.3)");
                //rect.setAttribute("stroke-width", ".1");
                break;

            default:
                rect.setAttribute("stroke", "black");
                rect.setAttribute("fill", "none");
                rect.setAttribute("stroke-width", "1");
                break;
        }

        this.svg.appendChild(rect);
    }

    drawCircle(x, y, r, type) {
        let c = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle",
        );

        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
        c.setAttribute("r", r);

        c.setAttribute("stroke", "black");
        c.setAttribute("fill", "none");
        c.setAttribute("stroke-width", "1");

        this.svg.appendChild(c);
    }
}
