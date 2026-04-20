export class SvgDraw {
    constructor(data, parentDivId) {
        console.log("data", data);

        this.data = data;
        this.svgDiv = document.getElementById(parentDivId);

        this.svgWidth = null;
        this.svgHeight = null;
        this.scale = null;
        this.vcline_x = null;
    }

    svgDraw() {
        this.setSvgParams();
        this.addSvgElement();
        this.drawCoordinateAxis();
        this.drawTubes();
        this.drawPayload();
        this.drawForceArrows();
    }

    setSvgParams() {
        this.MX = 50;
        this.MY = 50;

        this.svgWidth =
            this.svgDiv.clientWidth -
            window.getComputedStyle(this.svgDiv).paddingLeft.replace("px", "") -
            window.getComputedStyle(this.svgDiv).paddingRight.replace("px", "");
        this.svgHeight = (16 * this.svgWidth) / 19;

        this.vcline_x = 0.3 * this.svgWidth;

        let totalHeight =
            1000 * Math.sqrt(this.data.sail_area) + this.data.extendedHeight;

        this.scale = (this.svgHeight - 2 * this.MY) / totalHeight;
    }

    // Koordinat Dönüştürücü: SVG'nin üstten başlamasını mastın altından başlayacak şekilde ayarlar
    getY(zValue) {
        return vbHeight - padding - zValue;
    }

    addSvgElement() {
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

        const svgDiv = document.getElementById("svgDiv");
        svgDiv.appendChild(this.svg);

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
    }

    drawTubes() {
        let x, y, w, h;
        this.data.tubes.forEach((tube, i) => {
            x = this.vcline_x - (this.scale * tube.od) / 2;
            y = this.svgHeight - this.MY - this.scale * tube.extended_zt;
            w = this.scale * tube.od;
            h = this.scale * this.data.tube_length;
            this.drawRectangle(x, y, w, h, "tube");
        });
    }

    drawPayload() {
        let payload_dim = 1000 * Math.sqrt(this.data.sail_area);

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

    drawForceArrows() {
        let ax1, ay1, ax2, ay2, ax3, ay3;

        const force_line_scale = 250 / this.data.payload.wind_load;

        let force_line_strength;

        let text_line_end = this.vcline_x + 150;

        this.data.tubes.forEach((tube, i) => {
            force_line_strength = force_line_scale * tube.wind_load;

            ax2 = this.vcline_x;
            ay1 = this.svgHeight - this.MY - this.scale * tube.wind_load_z;
            ax1 = this.vcline_x - force_line_strength;
            ay2 = ay1;

            this.drawLine(ax1, ay1, ax2, ay2, "arrow-line");
            this.drawText(ax1, ay1 - 5, tube.wind_load.toFixed(0) + " N"); // Load Value

            this.drawArrow(ax2, ay2);

            // Guying
            ax1 = this.MX;
            ay1 = this.svgHeight - this.MY;
            ax2 = this.vcline_x - this.scale * tube.od * 0.5;
            ay2 = this.svgHeight - this.MY - this.scale * tube.extended_zt;
            this.drawLine(ax1, ay1, ax2, ay2, "guying");

            // Z-Lines
            ax1 = this.vcline_x + this.scale * tube.od;
            ax2 = text_line_end;
            ay1 = this.svgHeight - this.MY - this.scale * tube.wind_load_z;
            ay2 = ay1;
            this.drawLine(ax1, ay1, ax2, ay2, "guying"); // Load Acting Point
            this.drawText(text_line_end, ay2 - 5, tube.wind_load_z.toFixed(0)); // Z-Value

            ay1 = this.svgHeight - this.MY - this.scale * tube.extended_zt;
            ay2 = ay1;
            this.drawLine(ax1, ay1, ax2, ay2, "guying"); // Top Point
            this.drawText(text_line_end, ay2 - 5, tube.extended_zt.toFixed(0));

            ay1 = this.svgHeight - this.MY - this.scale * tube.extended_zb;
            ay2 = ay1;
            this.drawLine(ax1, ay1, ax2, ay2, "guying"); // Bottom Point
            this.drawText(text_line_end, ay2 - 5, tube.extended_zb.toFixed(0));
        });

        // PAYLOAD ARROW LINE AND ARROW
        ax1 = this.vcline_x + this.scale * this.data.x_offset;
        ay1 =
            this.svgHeight -
            this.MY -
            this.scale * this.data.payload.wind_load_z;

        ax2 = ax1 + force_line_strength;
        ay2 = ay1;

        this.drawLine(ax1, ay1, ax2, ay2, "arrow-line");
        this.drawText(
            ax1,
            ay1 - 5,
            this.data.payload.wind_load.toFixed(0) + " N",
        ); // Load Value
        this.drawArrow(ax2, ay2);
        this.drawLine(ax2 + 10, ay1, text_line_end, ay2, "guying");
        this.drawText(
            text_line_end,
            ay2 - 5,
            this.data.payload.wind_load_z.toFixed(0),
        );
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
                line.setAttribute("stroke-width", "3");
                break;

            case "centerline":
                line.setAttribute("stroke", "rgb(3, 83, 164)");
                line.setAttribute("stroke-width", "1");
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

    drawText(x, y, text_content) {
        let text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text",
        );

        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("text-anchor", "middle");
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
                rect.setAttribute("stroke", "rgb(16, 25, 53)");
                rect.setAttribute("fill", "rgb(149, 178, 184)");
                rect.setAttribute("stroke-width", "1");
                break;
            default:
                rect.setAttribute("stroke", "black");
                rect.setAttribute("fill", "none");
                rect.setAttribute("stroke-width", "1");
                break;
        }

        this.svg.appendChild(rect);
    }
}
