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

        this.config = {
            pageBgColor: "204, 204, 204",
            pageHeaderBgColor: [25, 50, 60],
            pageFontSize: 12,
            imgS: 12,
            gap: 20,
        };

        this.props = [
            ["Maximum Payload Capacity", "this.data.maxPayloadCapacity", "kg"],
            ["Extended Height", "this.data.extendedHeight", "mm"],
            ["Nested Height", "this.data.nestedHeight", "mm"],
            ["Number of Sections", "this.data.mastTubes.length", ""],
            ["Maximum Operational Wind Speed", "this.data.windspeed", "km/h"],
            ["Maximum Survival Wind Speed", 160, "km/h"],
            ["Maximum Sail Area", "this.data.sailarea", "m2"],
            ["Mast Tube Material", "Aluminium", ""],
            [
                "Mast Weight [Estimated]",
                "this.data.mastWeight.toFixed(0)",
                "kg",
            ],
        ];
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
    }

    run() {
        console.log("PDF Object Created:");

        this.coverPage();
        // this.propertiesPage();
        // this.dimensionPages("NestedSvgImage", "Nested Height Diagram");
        // this.dimensionPages("ExtendedSvgImage", "Extended Height Diagram");
        // this.optionalAccessoriesPage();
        // this.disclaimerPage();
        this.powerPage();

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
        this.pdf.text("this.mastCode", this.mx, this.pageHeight * 0.27 + 10);

        this.pdf.setFontSize(8);
        this.pdf.text("this.image_warning", 207, 294, { angle: 90 });

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

        // MASTTECH BIG LOGO
        // this.pdf.addImage(
        //     document.getElementById("masttech"),
        //     "PNG",
        //     this.mx,
        //     this.pageHeight - 50 - this.my,
        //     52,
        //     50,
        // );
    }

    HeaderFooter(title = false) {
        if (title) {
            this.pdf.setFillColor(...this.config.pageHeaderBgColor);

            this.pdf.rect(this.pageWidth / 2 - 50, 0, 100, 36, "F");
            this.pdf.setFontSize(16);
            this.pdf.setFont("courier", "normal");
            this.pdf.setTextColor(255, 255, 255);

            this.pdf.text("this.mastCode", this.pageWidth / 2, 15, {
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

    powerPage() {
        this.pdf.addPage("a4", "portrait");
        this.HeaderFooter("General Mast Properties");

        const props = [
            ["Selected Motor Power", this.data.power.motor_power, "kW"],
            ["Selected Motor Speed", this.data.power.motor_rpm, "RPM"],

            [
                "Selected Motor Output Torque",
                this.data.power.output_torque,
                "Nm",
            ],
            [
                "Total Driveline Speed Reduction Ratio",
                this.data.power.screw_rpm,
                "RPM",
            ],
            ["Screw Speed", this.data.power.screw_rpm, ""],
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
