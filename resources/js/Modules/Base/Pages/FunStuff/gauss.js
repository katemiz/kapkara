import Plotly from 'plotly.js-dist';

    import Chart from "chart.js/auto";


export class Gauss {


    constructor(boxNo, cycleNo) {

        this.boxNo = boxNo
        this.cycleNo = cycleNo    // Odd Number

        this.interval = 100 / this.boxNo
    }


    Initialize() {

        this.gauss = {};
        this.xData = [];

        let counter = Math.floor(this.boxNo / 2);


        for (let i = -counter; i <= counter; i++) {
            this.gauss[i] = 0;
            this.xData.push(i.toString())
        }
    }


    DoRandom(boxNo) {

        let durum = 0;

        for (let i = 0; i < boxNo - 1; i++) {

            if (Math.random() < 0.5) {
                durum = durum - 1;
            } else {
                durum = durum + 1;
            }
        }

        durum = durum / 2;

        this.gauss[durum] = this.gauss[durum] + 1
    }




    RunProgram(boxNo, cycleNo) {

        this.gauss = {};

        for (let i = 1; i <= cycleNo; i++) {




            let durum = 0;

            for (let i = 0; i < boxNo - 1; i++) {

                if (Math.random() < 0.5) {
                    durum = durum - 1;
                } else {
                    durum = durum + 1;
                }
            }

            durum = durum / 2;

            gauss[durum] = this.gauss[durum] + 1










        }

        return gauss;
    }


    CalculateMean() {

        let toplam = 0

        for (let index = 0; index < this.gauss.length; index++) {
            toplam = toplam + this.gauss[index]
        }
    }


    DoChart(duration) {

        let TESTER = document.getElementById('graph');

        this.yData = []
        this.textData = []

        let percent;

        this.xData.forEach(element => {
            this.yData.push(this.gauss[element])

            percent = 100 * this.gauss[element] / this.cycleNo

            this.textData.push(percent.toFixed(3) + '%')

        })

        var trace1 = {

            type: 'bar',
            x: this.xData,
            y: this.yData,
            text: this.textData,

            marker: {
                color: '#C8A2C8',
                line: {
                    width: 2.5
                }
            }
        };

        var data = [trace1];

        var layout = {

            title: {
                text: 'Gauss Distribution for ' + this.cycleNo + ' Random Action<br>[Time Elapsed ' + duration + ' ms]'
            },

            font: { size: 18 }
        };

        var config = { responsive: true }
        Plotly.newPlot(TESTER, data, layout, config);
    }


    Refresh(boxNo, cycleNo) {
        this.boxNo = boxNo;
        this.cycleNo = cycleNo;

        this.RunProgram();
    }


























    drawDeflectionChart(data) {

        if (!chartDeflection) return;

        // 1. Objeyi [height, deflection] çiftlerinden oluşan bir diziye çevirip yüksekliğe göre sıralıyoruz
        const sortedCurve = Object.entries(data.deflection_data)
            .map(([height, deflection]) => ({
                height: Number(height), // Key'ler string geldiği için sayıya çeviriyoruz (0, 1800, 2050...)
                deflection: deflection, // Sehim değeri (0, -2.65, -3.37...)
            }))
            .sort((a, b) => a.height - b.height); // Yüksekliğe göre küçükten büyüğe sırala

        const max_deflection = data.deflection_data;
        const ctx = chartDeflection.getContext("2d");

        const chartData = {
            labels: sortedCurve.map((point) => point.height),
            datasets: [
                {
                    label: "Deflection (mm)",
                    data: sortedCurve.map((point) => point.deflection),
                    borderColor: "#D7263D",
                    // ... styles
                    yAxisID: "y",
                    tension: 0.35,
                },
            ],
        };

        if (chartDeflectionInstance) {
            // Update existing chart
            chartDeflectionInstance.data = chartData;
            chartDeflectionInstance.options.scales.y.min = 1.2 * max_deflection;
            chartDeflectionInstance.update("none"); // 'none' for performance, or omit for animation
        } else {
            // Initialize chart
            chartDeflectionInstance = new Chart(ctx, {
                type: "line",
                data: chartData,
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: "linear",
                            display: true,
                            title: {
                                display: true,
                                text: "Mast Height, z [mm]",
                                color: "#666",
                                font: {
                                    size: 14,
                                    weight: "bold",
                                },
                            },
                        },
                        y: {
                            type: "linear",
                            display: true,
                            position: "left",
                            title: {
                                display: true,
                                text: "Deflection, [mm]",
                                color: "#666",
                                font: {
                                    size: 14,
                                    weight: "bold",
                                },
                            },
                            // Useful if you want the negative values to stay consistent
                            beginAtZero: false,
                        },
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: "Bending Moment and M/EI Diagram",
                        },

                        tooltip: {},
                    },
                },
            });
        }
    }















}
