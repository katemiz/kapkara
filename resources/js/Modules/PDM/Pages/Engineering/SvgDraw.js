export class SvgDraw {
    constructor(data) {
        this.data = data;
        this.drawType = null;
        this.svgDiv = null;
        this.svgWidth = null;
        this.svgHeight = null;
        this.scale = null;
        this.vcline_x = null;
        this.vcline_info = null;
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
        this.drawTubes();
        this.drawGuyings();
        this.drawPayload();
        this.drawVehicleAdapter();
        this.drawForceArrows();
        this.drawTextAndLines();
    }

    svgDrawExtended() {
        this.addSvgElement();
        this.drawCoordinateAxis();
        this.drawTubes();
        this.drawGuyings();
        this.drawVehicleAdapter();
        this.drawTextAndLines();
    }

    svgDrawNested() {
        this.addSvgElement();
        this.drawCoordinateAxis();
        this.drawTubes("Nested");
        this.drawVehicleAdapter();
        this.drawTextAndLines();
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
        this.vcline_info = 1.3 * this.vcline_x;

        console.log("ggg", this.vcline_x, this.vcline_info);

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

    drawTubes(state = "Extended") {
        let x, y, w, h, payload_plate_w;
        let z, th;

        this.data.params.tubes.forEach((tube, i) => {
            state === "Nested" ? (z = tube.nested_zt) : (z = tube.extended_zt);
            state === "Nested"
                ? (th = this.data.nestedHeight)
                : (th = this.data.extendedHeight);

            if (i === 0) {
                payload_plate_w = 1.2 * this.scale * tube.od;
            }

            // Extended State
            x = this.vcline_x - (this.scale * tube.od) / 2;
            y = this.svgHeight - this.MY - this.scale * z;
            w = this.scale * tube.od;
            h = this.scale * this.data.params.tube_length;
            this.drawRectangle(x, y, w, h, "tube");

            if (this.drawType === "Extended") {
                // Nested State
                x = 1.6 * this.vcline_x - (this.scale * tube.od) / 2;
                y = this.svgHeight - this.MY - this.scale * tube.nested_zt;
                w = this.scale * tube.od;
                h = this.scale * this.data.params.tube_length;
                this.drawRectangle(x, y, w, h, "tube");
            }
        });

        // Payload Adapter in Extended State
        x = this.vcline_x - payload_plate_w;
        y = this.svgHeight - this.MY - this.scale * th;
        w = 2 * payload_plate_w;
        h = this.scale * this.data.params.payload_adapter_height;
        this.drawRectangle(x, y, w, h, "tube");

        if (this.drawType === "Extended") {
            // Payload Adapter in Nested State
            x = 1.6 * this.vcline_x - payload_plate_w;
            y = this.svgHeight - this.MY - this.scale * this.data.nestedHeight;
            w = 2 * payload_plate_w;
            h = this.scale * this.data.params.payload_adapter_height;
            this.drawRectangle(x, y, w, h, "tube");

            this.drawLine(
                1.6 * this.vcline_x,
                this.svgHeight - this.MY,
                1.6 * this.vcline_x,
                this.svgHeight - this.MY - this.scale * this.data.nestedHeight,
                "centerline",
            ); // Vertical Centerline
        }

        x = 1.04 * 1.6 * this.vcline_x;
        let x2 = 1.15 * 1.6 * this.vcline_x;
        y = this.svgHeight - this.MY - this.scale * this.data.nestedHeight;

        this.drawLine(x, y, x2, y, "guying"); // Mast Top Face
        this.drawText(x2 - 15, y - 5, this.data.nestedHeight.toFixed(0));
        this.drawText(x2 - 15, y + 15, "Nested HEIGHT");
    }

    drawPayload() {
        let payload_dim = 1000 * Math.sqrt(this.data.params.sail_area);

        let x = this.vcline_x - (this.scale * payload_dim) / 2;
        let y =
            this.svgHeight -
            this.MY -
            this.scale * this.data.extendedHeight -
            this.scale * payload_dim;
        let w = this.scale * payload_dim;
        let h = this.scale * payload_dim;

        this.drawRectangle(x, y, w, h, "payload");
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

    drawForceArrows() {
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

        // this.drawLine(ax1, ay1, ax2, ay2, "arrow-line");
        // this.drawText(
        //     ax1 - 15,
        //     ay1 - 5,
        //     this.data.payload.wind_load.toFixed(0) + " N",
        // ); // Load Value

        // this.drawArrow(ax2, ay2);

        // this.drawInfo(
        //     this.vcline_info,
        //     ay1,
        //     this.vcline_info - force_line_strength,
        //     "R",
        //     "info",
        //     this.data.payload.wind_load_z.toFixed(0),
        //     false,
        // );

        // this.drawLine(ax2 + 10, ay1, text_line_end, ay2, "guying");
        // this.drawText(
        //     text_line_end - 15,
        //     ay2 - 5,
        //     this.data.payload.wind_load_z.toFixed(0),
        // );
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

    drawTextAndLines() {
        let ax1, ay1, ax2, ay2, ax3, ay3;
        let text_line_end = 1.3 * this.vcline_x;
        let zt, zb;

        this.data.params.tubes.forEach((tube, i) => {
            if (this.drawType === "Nested") {
                zt = tube.nested_zt;
                zb = tube.nested_zb;
            } else {
                zt = tube.extended_zt;
                zb = tube.extended_zb;
            }

            ax1 = this.vcline_x + this.scale * tube.od;
            ax2 = text_line_end;
            ay1 = this.svgHeight - this.MY - this.scale * tube.wind_load_z;
            ay2 = ay1;

            // Z-Lines
            if (this.drawType === "Loads") {
                // this.drawLine(ax1, ay1, ax2, ay2, "guying"); // Load Acting Point
                // this.drawText(
                //     text_line_end - 15,
                //     ay2 - 5,
                //     tube.wind_load_z.toFixed(0),
                // ); // Z-Value

                this.drawInfo(
                    ax2,
                    ay2,
                    ax2 - ax1,
                    "R",
                    "guying",
                    tube.wind_load_z.toFixed(0),
                    false,
                );
            }

            // Tube Top End Z-Line
            // ay1 = this.svgHeight - this.MY - this.scale * zt;
            // ay2 = ay1;
            // this.drawLine(ax1, ay1, ax2, ay2, "guying"); // Top Point
            // this.drawText(text_line_end - 15, ay2 - 2, zt.toFixed(0));

            this.drawInfo(
                ax2,
                ay2,
                ax2 - ax1,
                "R",
                "guying",
                zt.toFixed(0),
                false,
            );

            // Tube Bottom End Z-Line
            ay1 = this.svgHeight - this.MY - this.scale * zb;
            ay2 = ay1;
            this.drawLine(ax1, ay1, ax2, ay2, "guying"); // Bottom Point
            this.drawText(text_line_end - 15, ay2 - 2, zb.toFixed(0));
        });

        ax1 = 0.75 * this.vcline_x;
        ax2 = 0.9 * this.vcline_x;
        ay1 = this.svgHeight - this.MY - this.scale * this.data.extendedHeight;
        ay2 = ay1;

        // this.drawLine(ax1, ay1, ax2, ay2, "guying"); // Mast Top Face
        // this.drawText(ax1 + 15, ay2 - 5, this.data.extendedHeight.toFixed(0));

        this.drawInfo(
            ax1,
            ay1,
            ax2 - ax1,
            "L",
            "guying",
            this.data.extendedHeight.toFixed(0),
            "Extended",
        );
    }

    drawInfo(x, y, length, direction, type, text1, text2 = false) {
        /*
            direction L, R
            text1 : above line
            text2 : below line
            type : info, force
        */

        let x2;

        if (direction === "L") {
            x2 = x + length;
            this.drawText(x, y - 2, text1, "start");
            if (text2) {
                this.drawText(x, y + 12, text2, "start");
            }
        } else {
            x2 = x - this.scale * length;
            this.drawText(x, y - 2, text1, "end");
            if (text2) {
                this.drawText(x, y + 8, text2, "end");
            }
        }

        this.drawLine(x, y, x2, y, "info");

        if (type == "force") {
            this.drawArrow(x2, y);
        }
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

            case "info":
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

    drawArrow(x, y) {
        let arrow_height = 5;
        let arrow_width = 20;

        let x1 = x - arrow_width;
        let y1 = y - arrow_height;
        let x2 = x1 + arrow_width;
        let y2 = y;
        let x3 = x1;
        let y3 = y1 + 2 * arrow_height;

        let arr = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
        );

        arr.setAttribute("d", `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`);
        //arr.setAttribute("stroke", "black");
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
