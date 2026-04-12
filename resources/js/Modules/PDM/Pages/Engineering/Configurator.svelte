<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import { onMount } from "svelte";
    import { MastGeometry } from "$modules/PDM/Pages/Engineering/mastGeometry.js";
    import { SvgDraw } from "$modules/PDM/Pages/Engineering/SvgDraw.js";

    import Chart from "chart.js/auto";

    let chartCanvas;
    let chartInstance;

    let mast_parameters = {
        base_adapter_height: 50,
        payload_adapter_height: 15,
        head_height: 42,
        material: "6063",
        tube_length: 2000,
        start_tube_no: 10,
        end_tube_no: 15,
        overlap: 500,
        terrain_category: "II",
        wind_speed: 120,
        sail_area: 1.2,
        x_offset: 100,
    };

    let mast = $derived(new MastGeometry(mast_parameters));
    let svgDraw = $derived(new SvgDraw(mast.mast_parameters, "svgDiv"));

    onMount(() => {
        const ctx = chartCanvas.getContext("2d");

        let min_EI = mast.mast_parameters.tubes.at(-1).M_EI["0"];

        let chartData = {
            labels: Object.keys(mast.mast_parameters.total_moments),
            datasets: [
                {
                    label: "Total Moments (Nm)",
                    data: Object.values(mast.mast_parameters.total_moments),
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    yAxisID: "y", // Bending Moment Values Axis
                },
                // {
                //     label: "M/EI (1/m)",
                //     data: Object.values(mast.mast_parameters.payload.moments),
                //     backgroundColor: "rgba(255, 99, 132, 0.2)",
                //     borderColor: "rgba(255, 99, 132, 1)",
                //     borderWidth: 1,
                //     yAxisID: "y1", // M/EI Values Axis
                // },
                // Spread the mapped tubes from chartData2 here:
                ...mast.mast_parameters.tubes.map((tube, index) => ({
                    label: `Section ${tube.no}`,
                    data: Object.entries(tube.M_EI)
                        .map(([z, value]) => ({
                            x: parseFloat(z),
                            y: value,
                        }))
                        .sort((a, b) => a.x - b.x),
                    borderColor: "rgba(3, 83, 164, 1)",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    showLine: true,
                    fill: true,
                    yAxisID: "y1", // Assigning to the M/EI axis
                })),
            ],
        };

        chartInstance = new Chart(ctx, {
            type: "line", // or 'line', 'pie', etc.
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
                            text: "Bending Moment, [Nm]",
                            color: "#666",
                            font: {
                                size: 14,
                                weight: "bold",
                            },
                        },
                        // Useful if you want the negative values to stay consistent
                        beginAtZero: false,
                    },

                    // Right Axis
                    y1: {
                        type: "linear",
                        display: true,
                        position: "right",
                        title: {
                            display: true,
                            text: "M/EI [1/m]",
                            color: "#666",
                            font: {
                                size: 14,
                                weight: "bold",
                            },
                        },

                        min: min_EI * 1.2,
                        max: 0,
                        // Important: Turn off grid lines for the second axis to avoid clutter
                        grid: {
                            drawOnChartArea: false,
                        },

                        ticks: {
                            // Force more decimals so you can see the difference
                            callback: function (value) {
                                return value.toFixed(5);
                            },
                        },
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: "Bending Moment Diagram for Mast Configuration",
                    },
                },
            },
        });

        // Draw the SVG
        svgDraw.svgDraw();

        // Cleanup when component is destroyed
        return () => {
            if (chartInstance) chartInstance.destroy();
        };
    });
</script>

<Layout>
    <section class="section content">
        <pre>
            {JSON.stringify(mast.mast_parameters, null, 2)}
        </pre>

        <div class="container mx-auto">
            <canvas bind:this={chartCanvas}></canvas>
        </div>

        <div class="container mx-auto has-background-info" id="svgDiv"></div>
    </section>
</Layout>
