import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import QRCode from "qrcode";

export default class MakePDF {
    constructor(data) {
        console.log("DATA", data);

        this.data = data;
        this.pdf = new jsPDF();

        this.mx = 16;
        this.my = 12;
        this.qrs = 18;

        this.pageWidth = this.pdf.internal.pageSize.getWidth();
        this.pageHeight = this.pdf.internal.pageSize.getHeight();

        this.logoImage;
        this.qrCodeImage = null; // Store QR code

        this.image_warning =
            "Image shown in cover page is for illustration purposes only.";

        this.product_code = Math.ceil(data.extendedHeight / 1000) + "MTNX-";

        this.config = {
            pageBgColor: "204, 204, 204",
            pageHeaderBgColor: [25, 50, 60],
            pageFontSize: 12,
            imgS: 12,
            gap: 20,
        };
    }

    // Pre-generate QR code  and images before running
    async init() {
        this.qrCodeImage = await QRCode.toDataURL("this.data.qr", {
            width: 160,
            margin: 1,
        });

        this.coverBGImage = await this.getImageData(
            "/images/PDM/mtnx_background.png",
        );

        this.bigLogo = await this.getImageData("/images/PDM/masttech-big.png");
    }

    run() {
        this.coverPage();
        // this.propertiesPage();
        // this.dimensionPages("NestedSvgImage", "Nested Height Diagram");
        // this.dimensionPages("ExtendedSvgImage", "Extended Height Diagram");
        // this.optionalAccessoriesPage();
        this.specificationsPage();
        this.disclaimerPage();

        this.pdf.save("AAA.pdf");
    }

    coverPage() {
        this.pdf.addImage(this.coverBGImage, 0, 0, 210, 297);

        this.HeaderFooter();

        // COVER TITLE AND SUBTITLE
        this.pdf.setFontSize(72);
        this.pdf.setFont("helvetica", "bold");
        this.pdf.text("this.data.mastType", this.mx, this.pageHeight * 0.27);

        this.pdf.setFontSize(24);
        this.pdf.setFont("helvetica", "normal");
        this.pdf.text(this.product_code, this.mx, this.pageHeight * 0.27 + 10);

        this.pdf.setFontSize(8);
        this.pdf.text(this.image_warning, 207, 294, { angle: 90 });

        // QR CODE
        this.addQrCode();

        // SMALL ICONS AND EXPLANATIONS

        let y = 110;

        this.pdf.setFontSize(14);

        // for (const [key, element] of Object.entries(this.props)) {
        //     this.pdf.setFillColor(255, 255, 255);

        //     this.pdf.rect(this.mx, y, this.config.imgS, this.config.imgS, "F");
        //     // this.pdf.addImage(
        //     //     document.getElementById(element.name),
        //     //     "PNG",
        //     //     this.mx + this.config.imgS * 0.15,
        //     //     y + this.config.imgS * 0.15,
        //     //     this.config.imgS * 0.7,
        //     //     this.config.imgS * 0.7,
        //     // );
        //     // this.pdf.text(element.text, this.mx + this.config.imgS * 1.2, y, {
        //     //     baseline: "top",
        //     // });
        //     // y = y + this.config.gap;
        // }

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
        this.pdf.setFont("helvetica", "normal");

        // this.pdf.text(
        //     "kapkara.one",
        //     this.pageWidth - this.mx,
        //     this.pageHeight - this.my * 0.6,
        //     { align: "right" },
        // );

        // this.pdf.text(
        //     "PDM Product Data Management",
        //     this.mx,
        //     this.pageHeight - this.my * 0.6,
        //     { align: "left" },
        // );
    }

    specificationsPage() {
        this.pdf.addPage("a4", "portrait");
        this.HeaderFooter("General Mast Properties");

        const props = [
            ["Maximum Payload Capacity", this.data.params.payload_weight, "kg"],
            ["Extended Height", this.data.extendedHeight, "mm"],
            ["Nested Height", this.data.nestedHeight, "mm"],
            ["Number of Sections", this.data.params.noOfTubes, ""],
            [
                "Maximum Operational Wind Speed",
                this.data.params.wind_speed,
                "km/h",
            ],
            //["Maximum Survival Wind Speed", 160, "km/h"],
            ["Maximum Sail Area", this.data.params.sail_area, "m2"],
            ["Mast Tube Material", "Aluminium", ""],
            [
                "Mast Weight [Estimated - Moved]",
                this.data.weight.lifted_mass.toFixed(0),
                "kg",
            ],
            [
                "Mast Weight [Estimated - Total]",
                this.data.weight.total_mast_mass.toFixed(0),
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
                "Total Driveline Speed Reduction Ratio",
                this.data.power.gearbox_ratio.toFixed(0),
                "RPM",
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
                this.my + 2,
                this.qrs,
                this.qrs,
            );
            this.pdf.link(this.mx, this.my + 2, this.qrs, this.qrs, {
                url: this.data.qr,
            });
        } else {
            console.error("QR code not initialized. Call init() first.");
        }
    }

    disclaimerPage() {
        this.pdf.addPage("a4", "portrait");
        this.HeaderFooter("Disclaimer");

        this.pdf.setFontSize(10);
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
            120,
            imgWidth,
            imgHeight,
        );

        const now = new Date();

        this.pdf.text(String(now), this.pageWidth / 2, 220, {
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
