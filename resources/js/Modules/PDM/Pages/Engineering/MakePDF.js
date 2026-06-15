import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "svg2pdf.js";

import QRCode from "qrcode";

export default class MakePDF {
    constructor(data) {
        //console.log("DATA", data);

        this.data = data;
        this.pdf = new jsPDF();

        this.mx = 16;
        this.my = 12;
        this.qrs = 18;

        this.pageWidth = this.pdf.internal.pageSize.getWidth();
        this.pageHeight = this.pdf.internal.pageSize.getHeight();

        this.logoImage;
        this.qrCodeImage = null; // Store QR code

        this.config = {
            pageBgColor: "204, 204, 204",
            pageHeaderBgColor: [25, 50, 60],
            pageFontSize: 12,
            imgS: 14,
            gap: 20,
        };

        this.productNaming();

        this.guying_note = `(*) As a general rule of thumb, guying radius should be equal to extended mast height for optimal stability. Guying radius, number of guying and at which tubes guying to be fixed should be evaluated per payload, stability requirements and available space. Please contact Masttech for detailed guying recommendations.`

        this.qr =
            data.params.mast_type + '-' +
            data.params.start_tube_no + '-' +
            data.params.end_tube_no + '-' +
            data.params.overlap + '-' +
            data.params.base_adapter_height + '-' +
            data.params.payload_adapter_height + '-' +
            data.params.sail_area + '-' +
            data.params.wind_speed + '-' +
            data.params.head_height + '-' +
            data.params.tube_length + '-' +
            data.params.terrain_category + '-' +
            data.params.x_offset + '-' +
            data.params.z_offset + '-' +
            data.params.payload_mass + '-' +
            data.params.motor_id + '-' +
            data.params.gearbox_id + '-' +
            data.params.tip_deflection_percentage + '-' +
            data.params.side_adapter_z;





    }

    // Pre-generate QR code  and images before running
    async init() {
        this.qrCodeImage = await QRCode.toDataURL(this.qr, {
            width: 160,
            margin: 1,
        });



        let cover_img;

        this.data.config.mast_types.forEach(mast_type => {
            if (mast_type.value === this.data.params.mast_type) {
                cover_img = mast_type.pdf_cover_image;
                this.props = mast_type.props;
            }
        });


        this.coverBGImage = await this.getImageData(cover_img);
        this.bigLogo = await this.getImageData("/images/PDM/masttech-big.png");
    }

    async run() {
        this.coverPage();
        this.specificationsPage();
        await this.svgPage("Extended");
        await this.svgPage("Nested");
        this.disclaimerPage();
        this.pdf.save(this.product_code + ".pdf");
    }

    productNaming() {
        this.image_warning = "Image shown in cover page is for illustration purposes only.";
        this.product_code = Math.round(this.data.props.extendedHeight / 1000, 0) + this.data.params.mast_type + "-" + (this.data.props.nestedHeight / 1000).toFixed(1) + "-" + this.data.params.noOfTubes;
    }

    coverPage() {
        this.pdf.addImage(this.coverBGImage, 0, 0, 210, 297);

        this.HeaderFooter();

        // COVER TITLE AND SUBTITLE
        this.pdf.setFontSize(72);
        this.pdf.setFont("helvetica", "bold");
        this.pdf.text(this.data.params.mast_type, this.mx, this.pageHeight * 0.27);

        this.pdf.setFontSize(24);
        this.pdf.setFont("helvetica", "normal");
        this.pdf.text(this.product_code, this.mx, this.pageHeight * 0.27 + 10);

        this.pdf.setFontSize(8);
        this.pdf.text(this.image_warning, 207, 294, { angle: 90 });

        // QR CODE AND LINK
        this.addQrCode();

        // SMALL ICONS AND EXPLANATIONS
        let y = 110;

        this.pdf.setFontSize(14);

        for (const [key, element] of Object.entries(this.props)) {
            this.pdf.setFillColor(255, 255, 255);

            this.pdf.rect(this.mx, y, 12, 12, "F");
            this.pdf.addImage(
                element.icon,
                "PNG",
                this.mx + 2,
                y + 2,
                8,
                8,
            );
            this.pdf.text(element.text, this.mx + 16, y, {
                baseline: "top",
            });
            y = y + 20;
        }

        //MASTTECH BIG LOGO
        this.pdf.addImage(
            this.bigLogo,
            "PNG",
            this.mx,
            this.pageHeight - 50 - this.my,
            52,
            50,
        );
    }

    async svgPage(state) {

        this.pdf.addPage("a4", "portrait");
        this.HeaderFooter(state + " View");

        if (state === 'Extended') {
            //this.pdf.text(this.guying_note, this.mx, this.pageHeight * 0.27 + 10);

            this.pdf.text(this.pdf.splitTextToSize(this.guying_note, this.pageWidth - 2 * this.mx), this.mx, 240);
        }

        document.getElementById("div" + state).classList.remove("is-hidden");

        const svgElement = document.getElementById("svg-" + state);

        if (!svgElement) {
            console.error("SVG element not found for state:", state);
            alert("Error: SVG element not found for " + state);
            return;
        }

        // Use svg2pdf to add the element to the PDF
        await this.pdf.svg(svgElement, {
            x: this.mx,
            y: 0,
            width: 178,
            height: 290
        });

        document.getElementById("div" + state).classList.add("is-hidden");

    }

    HeaderFooter(title = false) {
        if (title) {
            this.pdf.setFillColor(...this.config.pageHeaderBgColor);

            this.pdf.rect(this.pageWidth / 2 - 50, 0, 100, 36, "F");
            this.pdf.setFontSize(16);
            this.pdf.setFont("courier", "normal");
            this.pdf.setTextColor(255, 255, 255);

            this.pdf.text(this.product_code, this.pageWidth / 2, 15, {
                align: "center",
            });
            this.pdf.text(title, this.pageWidth / 2, 25, { align: "center" });
        }

        // Footer
        this.pdf.setFontSize(9);
        this.pdf.setTextColor(0, 0, 0);
        this.pdf.setFont('helvetica', 'normal');

        this.pdf.text('kapkara.one', this.pageWidth - this.mx, this.pageHeight - this.my * 0.6, { align: 'right' });
        this.pdf.text('PDM Product Data Management', this.mx, this.pageHeight - this.my * 0.6, { align: 'left' });

    }

    specificationsPage() {
        this.pdf.addPage("a4", "portrait");
        this.HeaderFooter("Specifications");

        const props = [
            ["Maximum Payload Capacity", this.data.params.payload_mass, "kg"],
            ["Extended Height", this.data.props.extendedHeight, "mm"],
            ["Nested Height", this.data.props.nestedHeight, "mm"],
            ["Number of Sections", this.data.params.noOfTubes, ""],
            [
                "Maximum Operational Wind Speed",
                this.data.params.wind_speed,
                "km/h",
            ],
            //["Maximum Survival Wind Speed", 160, "km/h"],
            ["Maximum Sail Area", this.data.params.sail_area, "m2"],
            ["Mast Tube Material", "", "Aluminium"],
            [
                "Mast Weight [Estimated - Moved]",
                this.data.weights.lifted_mass.toFixed(0),
                "kg",
            ],
            [
                "Mast Weight [Estimated - Total]",
                this.data.weights.total_mast_mass.toFixed(0),
                "kg",
            ],

            ["Motor Power", this.data.power.motor_power, "kW"],
            ["Motor Speed", this.data.power.motor_rpm, "RPM"],
            [
                "Motor Output Torque",
                this.data.power.motor_torque.toFixed(2),
                "Nm",
            ],
            [
                "Total Driveline Reduction Ratio, i",
                this.data.power.gearbox_ratio.toFixed(0),
                "",
            ],
            [
                "Screw Speed, Rotational",
                this.data.power.screw_rpm.toFixed(0),
                "RPM",
            ],
            [
                "Lifting Speed, Vertical",
                this.data.power.vertical_speed.toFixed(2),
                "m/min",
            ],
        ];

        autoTable(this.pdf, {
            columnStyles: { 1: { halign: "right", fontWeight: "bold" } }, // Cells in first column centered and green
            head: [["Property", "Value", "Unit"]],
            body: props,
            startY: 70,
        });
    }

    addQrCode() {
        if (this.qrCodeImage) {
            this.pdf.addImage(
                this.qrCodeImage,
                "PNG",
                this.mx,
                this.mx,
                this.qrs,
                this.qrs,
            );



            const baseUrl = window.location.origin;
            const fullUrl = new URL('/pdm/engineering/configurator', baseUrl);

            fullUrl.searchParams.set('qr', this.qr);

            this.pdf.link(this.mx, this.mx, this.qrs, this.qrs, {
                url: fullUrl.toString(),
            });


            // this.pdf.link(this.mx, this.mx, this.qrs, this.qrs, {
            //     url: '/pdm/engineering/configurator?qr='+this.qr,
            // });

            //this.pdf.link(this.mx, this.my, this.qrs, this.qrs, { url: 'https://example.com' });



        } else {
            console.error("QR code not initialized. Call init() first.");
        }
    }

    disclaimerPage() {
        this.pdf.addPage("a4", "portrait");
        this.HeaderFooter("Disclaimer");

        this.pdf.setFontSize(12);
        this.pdf.setTextColor(0, 0, 0);
        this.pdf.setFont("helvetica", "normal");

        const disclaimerText = `
         The information provided in this brochure is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the brochure or the information, products, services, or related graphics contained in the brochure for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this brochure. Through this brochure you are able to link to other websites which are not under the control of our company. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the brochure up and running smoothly. However, our company takes no responsibility for, and will not be liable for, the brochure being temporarily unavailable due to technical issues beyond our control.
         `;

        this.pdf.text(
            this.pdf.splitTextToSize(
                disclaimerText,
                this.pageWidth - 2 * this.mx,
            ),
            this.mx,
            60,
        );

        let imgWidth = 84;
        let imgHeight = 80;

        // MASTTECH BIG LOGO
        this.pdf.addImage(
            this.bigLogo,
            "PNG",
            (this.pageWidth - imgWidth) / 2,
            180,
            imgWidth,
            imgHeight,
        );

        const now = new Date();

        this.pdf.text(String(now), this.pageWidth / 2, 275, {
            align: "center",
        });
    }

    async getImageData(path) {
        const response = await fetch(path);
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }
}
