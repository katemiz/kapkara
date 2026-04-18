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

        console.log("scale", this.scale, totalHeight);
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
        let lineH = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line",
        );
        lineH.setAttribute("x1", this.MX);
        lineH.setAttribute("y1", this.svgHeight - this.MY);
        lineH.setAttribute("x2", this.svgWidth - this.MX);
        lineH.setAttribute("y2", this.svgHeight - this.MY);
        lineH.setAttribute("stroke", "red");
        lineH.setAttribute("stroke-width", "2");

        let lineV = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line",
        );
        lineV.setAttribute("x1", this.vcline_x);
        lineV.setAttribute("y1", this.MY);
        lineV.setAttribute("x2", this.vcline_x);
        lineV.setAttribute("y2", this.svgHeight - this.MY);
        lineV.setAttribute("stroke", "red");
        lineV.setAttribute("stroke-width", "2");

        this.svg.appendChild(lineH);
        this.svg.appendChild(lineV);
    }

    drawTubes() {
        let rect;
        this.data.tubes.forEach((tube, i) => {
            rect = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect",
            );
            rect.setAttribute("x", this.vcline_x - (this.scale * tube.od) / 2);
            rect.setAttribute(
                "y",
                this.svgHeight - this.MY - this.scale * tube.extended_zt,
            );
            rect.setAttribute("width", this.scale * tube.od);
            rect.setAttribute("height", this.scale * this.data.tube_length);
            rect.setAttribute("stroke", "black");
            rect.setAttribute("fill", "none");

            rect.setAttribute("stroke-width", "1");
            this.svg.appendChild(rect);
        });
    }

    drawPayload() {
        let payload_dim = 1000 * Math.sqrt(this.data.sail_area);

        let payloadRect = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect",
        );
        payloadRect.setAttribute(
            "x",
            this.vcline_x - (this.scale * payload_dim) / 2,
        );
        payloadRect.setAttribute(
            "y",
            this.svgHeight -
                this.MY -
                this.scale * this.data.extendedHeight -
                this.scale * payload_dim,
        );
        payloadRect.setAttribute("width", this.scale * payload_dim);
        payloadRect.setAttribute("height", this.scale * payload_dim);
        payloadRect.setAttribute("stroke", "none");
        payloadRect.setAttribute("fill", "green");

        payloadRect.setAttribute("stroke-width", "2");
        this.svg.appendChild(payloadRect);
    }

    drawForceArrows() {
        const arrow_length = 50;
        const arrow_start_x = this.vcline_x + arrow_length;

        this.data.tubes.forEach((tube, i) => {
            let line = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line",
            );
            line.setAttribute("x1", this.vcline_x);
            line.setAttribute(
                "y1",
                this.svgHeight - this.MY - this.scale * tube.wind_load_z,
            );
            line.setAttribute("x2", arrow_start_x);
            line.setAttribute(
                "y2",
                this.svgHeight - this.MY - this.scale * tube.wind_load_z,
            );
            line.setAttribute("stroke", "red");
            line.setAttribute("stroke-width", "2");
            this.svg.appendChild(line);

            let force_arrow = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path",
            );

            let arrow_dim = 10;

            let ax1 = arrow_start_x;
            let ay1 =
                this.svgHeight -
                this.MY -
                this.scale * tube.wind_load_z -
                arrow_dim;
            let ax2 = ax1 + arrow_dim;
            let ay2 = ay1 + arrow_dim;
            let ax3 = ax1;
            let ay3 = ay2 + arrow_dim;
            force_arrow.setAttribute(
                "d",
                `M ${ax1} ${ay1} L ${ax2} ${ay2} L ${ax3} ${ay3} Z`,
            );
            force_arrow.setAttribute("stroke", "black");
            force_arrow.setAttribute("fill", "red");
            force_arrow.setAttribute("stroke-width", "1");

            this.svg.appendChild(force_arrow);

            // TEXT
            let t = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "text",
            );
            t.setAttribute("x", ax1 + 2 * arrow_dim);
            t.setAttribute("y", ay1 + 1.5 * arrow_dim);
            t.setAttribute("fill", "black");
            t.textContent =
                tube.wind_load.toFixed(0) +
                " N at z" +
                tube.wind_load_z.toFixed(0);
            this.svg.appendChild(t);

            // Guying
            let z = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line",
            );
            z.setAttribute("x1", this.MX);
            z.setAttribute("y1", this.svgHeight - this.MY);
            z.setAttribute("x2", this.vcline_x - this.scale * tube.od * 0.5);
            z.setAttribute(
                "y2",
                this.svgHeight - this.MY - this.scale * tube.extended_zt,
            );
            z.setAttribute("stroke", "grey");
            this.svg.appendChild(z);
        });

        // Payload Force Arrow
        let payload_arrow = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line",
        );

        payload_arrow.setAttribute(
            "x1",
            this.vcline_x + this.scale * this.data.x_offset,
        );
        payload_arrow.setAttribute(
            "y1",
            this.svgHeight -
                this.MY -
                this.scale * this.data.payload.wind_load_z,
        );
        payload_arrow.setAttribute(
            "x2",
            this.vcline_x + this.scale * this.data.x_offset + 100,
        );
        payload_arrow.setAttribute(
            "y2",
            this.svgHeight -
                this.MY -
                this.scale * this.data.payload.wind_load_z,
        );
        payload_arrow.setAttribute("stroke", "red");
        payload_arrow.setAttribute("stroke-width", "2");
        this.svg.appendChild(payload_arrow);
    }
}
