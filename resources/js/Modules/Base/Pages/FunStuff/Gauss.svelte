<script>
    import Layout from "../../Shared/Layout.svelte";
    import Chart from "chart.js/auto";

    import {
        Plus,
        Minus,
        X,
        Divide
    } from "@lucide/svelte";

    let boxNo = $state(9);
    let cycleNo = $state(100);

    let gaussChart;
    let gaussChartInstance;
    let gauss = $state({});

    window.onload = function () {
        DrawChart();
    };

    function toggleModal() {
        document.getElementById("modal").classList.toggle("is-active");
    }

    function RunProgram() {

        gauss = {};

        for (let i = 1; i <= cycleNo; i++) {

            let durum = 100;

            for (let i = 0; i < boxNo - 1; i++) {

                if (Math.random() < 0.5) {
                    durum = durum - 1;
                } else {
                    durum = durum + 1;
                }
            }

            durum = durum / 2;

            if (!gauss[durum]) {
                gauss[durum] = 0;
            }
            gauss[durum] = gauss[durum] + 1

        }

    }


    function DrawChart() {
        if (!gaussChart) return;

        RunProgram();

        const ctx = gaussChart.getContext("2d");

        // 1. Transform the object into an array of {x, y} objects
        // 2. Sort them by the x value to ensure the line draws left-to-right
        const formattedData = Object.entries(gauss)
            .map(([key, value]) => ({ x: Number(key), y: value }))
            .sort((a, b) => a.x - b.x);

        const chartData = {
            labels: Object.keys(gauss),
            datasets: [
                {
                    label: "Number of Occurances",
                    data: formattedData,
                    borderColor: "#D7263D",
                    // ... styles
                    yAxisID: "y",
                    tension: 0.35,
                },
            ],
        };

        if (gaussChartInstance) {
            // Update existing chart
            gaussChartInstance.data = chartData;
            gaussChartInstance.update("none"); // 'none' for performance, or omit for animation
        } else {
            // Initialize chart
            gaussChartInstance = new Chart(ctx, {
                type: "bar",
                data: chartData,
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: "linear",
                            display: true,
                            title: {
                                display: true,
                                text: "Interval Number",
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
                                text: "Occurance",
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
                            text: "Gauss/Normal Distribution",
                        },

                        tooltip: {},
                    },
                },
            });
        }




    }

    function Refresh2(arg1, arg2) {

        if (arg1 === "iteration") {
            if (arg2 === "down") {
                cycleNo = Math.floor(cycleNo / 10);
            } else if (arg2 === "up") {
                cycleNo = cycleNo * 10;
            }
        }

        if (arg1 === "box") {
            if (arg2 === "down") {
                boxNo = boxNo - 2;
            } else if (arg2 === "up") {
                boxNo = boxNo + 2;
            }
        }

        DrawChart();
    }


</script>

<Layout>
    <section class="section">
        <h1 class="title is-size-1 has-text-centered">
            Gauss Distribution for <br />Javascript Math.random()
        </h1>
        <h1 class="subtitle is-size-1 has-text-centered">
            A Galton Board Implementation
        </h1>

        <!-- <button class="button is-small" onclick="toggleModal()">?</button> -->
        <button class="button is-small" onclick={toggleModal}>?</button>

        <div id="graph" class="card my-4 p-8"></div>



        <!-- GAUSS CHART -->
        <div class="container" id="divGauss">
            <canvas bind:this={gaussChart}></canvas>
        </div>


        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Number of Random Run Iterations</p>

                    <button
                        class="button is-small"
                        onclick={() => Refresh2("iteration", "down")}
                        id="minusCycleNo"
                    >
                        <Divide size="16" color="blue" />
                    </button>

                    <span class="title">{cycleNo}</span>

                    <button
                        class="button is-small"
                        onclick={() => Refresh2("iteration", "up")}
                    >
                        <X size="16" color="blue" />
                    </button>
                </div>
            </div>

            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Number of Data Intervals</p>

                    <button
                        class="button is-small"
                        onclick={() => Refresh2("box", "down")}
                    >
                        <Minus size="16" color="blue" />
                    </button>

                    <span class="title">{boxNo}</span>

                    <button
                        class="button is-small"
                        onclick={() => Refresh2("box", "up")}
                    >
                        <Plus size="16" color="blue" />
                    </button>
                </div>
            </div>
        </nav>

        <div class="modal" id="modal">
            <div
                class="modal-background"
                role="button"
                onkeydown={(e) => e.key === "Enter" && toggleModal()}
                tabindex="0"
                onclick={toggleModal}
                aria-label="Close modal"
            ></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Galton Board</p>
                    <button
                        class="delete"
                        aria-label="close"
                        onclick={toggleModal}
                    ></button>
                </header>
                <section class="modal-card-body">
                    <!-- Content ... -->
                    <figure class="image">
                        <img src="../Other/Galton_box.jpg" alt="Galton Box" />
                    </figure>

                    <a href="https://en.wikipedia.org/wiki/Galton_board"
                        >More ...</a
                    >
                </section>
            </div>
        </div>
    </section>











</Layout>
