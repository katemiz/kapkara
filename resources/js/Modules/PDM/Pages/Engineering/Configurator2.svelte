<script>
    import { onMount } from "svelte";

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormRadio from "$components/FormRadio.svelte";
    import FormSelect from "$components/FormSelect.svelte";

    import Pdf from "$components/Icons/Pdf.svelte";

    import JsonTree from "$components/JsonTree.svelte";
    import MastDrawing from "$modules/PDM/Pages/Engineering/MastDrawing.svelte";


    import { useForm } from "@inertiajs/svelte";

    import MakePDF from "$modules/PDM/Pages/Engineering/MakePDF.js";
    import Configurator from "$modules/PDM/Pages/Engineering/Configurator2.js";

    import Chart from "chart.js/auto";

    import {
        ReceiptText,
        Box,
        Braces,
        Info,
        ChartLine,
        ChartSpline,
        WeightTilde,
        ArrowUpNarrowWide,
        ArrowDownNarrowWide,
        Wrench,
        Target,
        List,
        AudioWaveform,
    } from "@lucide/svelte";

    import { config } from "$modules/PDM/Shared/config.js";
    import { mtnx_bom } from "$modules/PDM/Shared/mtnx_bom.js";


    let chartCanvas;
    let chartInstance;

    // For tabs and svgDrawings
    let drawingContainer;
    let drawingWidth = $state(0);
    let observer;

    // Function to update/create the chart
    function drawBMChart(data) {
        if (!chartCanvas) return;

        const ctx = chartCanvas.getContext("2d");

        const all_M_EI_values = Object.values(data.sections).flatMap(
            (section) => Object.values(section).map((metrics) => metrics.M_EI),
        );

        const min_EI = Math.min(...all_M_EI_values);

        const chartData = {
            //labels: Object.keys(data.control_points).map(Number),
            datasets: [
                {
                    label: "w/o Side Adapter (Nm)",
                    //data: Object.values(data.control_points).map((point) => point.int_moment),

                    data: Object.entries(data.control_points).map(
                        ([key, point]) => ({
                            x: parseInt(key),
                            y: point.int_moment,
                        }),
                    ),

                    borderColor: "#D7263D",
                    fill: true,
                    yAxisID: "y",
                },

                {
                    label: "w/ Side Adapter (Nm)",
                    //data: Object.values(data.control_points2).map((point) => point.int_moment),

                    data: Object.entries(data.control_points2).map(
                        ([key, point]) => ({
                            x: parseInt(key),
                            y: point.int_moment,
                        }),
                    ),
                    borderColor: "#8FB339",
                    yAxisID: "y",
                },

                // Correctly mapping the nested sections data
                ...Object.entries(data.sections).map(
                    ([sectionIndex, sectionData]) => {
                        return {
                            label: `M/EI S${sectionIndex}`,
                            // Convert the sub-keys (3550, 4300, etc.) into x, and extract M_EI for y
                            data: Object.entries(sectionData)
                                .map(([xValue, metrics]) => ({
                                    x: parseFloat(xValue),
                                    y: metrics.M_EI,
                                }))
                                .sort((a, b) => a.x - b.x), // Keeps the line rendering left-to-right
                            borderColor: "#02182B",
                            backgroundColor: "rgba(1, 151, 246, 0.1)",
                            fill: true,
                            yAxisID: "y1",
                        };
                    },
                ),
            ],
        };

        if (chartInstance) {
            // Update existing chart
            chartInstance.data = chartData;
            chartInstance.options.scales.y1.min = min_EI * 1.2;
            chartInstance.update("none"); // 'none' for performance, or omit for animation
        } else {
            // Initialize chart
            chartInstance = new Chart(ctx, {
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
                            text: "Bending Moment and M/EI Diagram",
                        },

                        tooltip: {},
                    },
                },
            });
        }
    }

    function drawDeflectionChart(data) {
        if (!chartDeflection) return;

        // 1. Objeyi [height, deflection] çiftlerinden oluşan bir diziye çevirip yüksekliğe göre sıralıyoruz
        const deflectionWOAdapter = Object.entries(data.deflection_data)
            .map(([height, deflection]) => ({
                height: Number(height), // Key'ler string geldiği için sayıya çeviriyoruz (0, 1800, 2050...)
                deflection: deflection, // Sehim değeri (0, -2.65, -3.37...)
            }))
            .sort((a, b) => a.height - b.height); // Yüksekliğe göre küçükten büyüğe sırala

        const deflectionWAdapter = Object.entries(data.deflection_data2)
            .map(([height, deflection]) => ({
                height: Number(height), // Key'ler string geldiği için sayıya çeviriyoruz (0, 1800, 2050...)
                deflection: deflection, // Sehim değeri (0, -2.65, -3.37...)
            }))
            .sort((a, b) => a.height - b.height); // Yüksekliğe göre küçükten büyüğe sırala

        const max_deflection = data.deflection_data;
        const ctx = chartDeflection.getContext("2d");

        const chartData = {
            datasets: [
                {
                    label: "Deflection w/o Side Adapter (mm)",
                    // 2. Map directly to { x, y } coordinates
                    data: deflectionWOAdapter.map((point) => ({
                        x: point.height,
                        y: point.deflection,
                    })),
                    borderColor: "#D7263D",
                    yAxisID: "y",
                    tension: 0.35,
                },
                {
                    label: "Deflection w/ Side Adapter (mm)",
                    // 3. Map this dataset to its own independent { x, y } coordinates
                    data: deflectionWAdapter.map((point) => ({
                        x: point.height,
                        y: point.deflection,
                    })),
                    borderColor: "#8FB339",
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

    let showJson = $state(false);
    let showInfoGraphic = $state(false);

    function toggle() {
        showJson = !showJson;
    }

    function toggleInfoGraphic() {
        showInfoGraphic = !showInfoGraphic;
    }

    // 1. Inertia Form
    let form = useForm({
        start_tube_no: 13,
        end_tube_no: 15,
        overlap: 500,
        base_adapter_height: 50,
        payload_adapter_height: 15,
        sail_area: 1.2,
        wind_speed: 120,
        head_height: 55,
        material: "6063",
        tube_length: 2000,
        terrain_category: "II",
        x_offset: 100,
        z_offset: 1,
        payload_mass: 400,
        motor_id: 1,
        gearbox_id: 1,
        tip_deflection_percentage: 75,
        side_adapter_z: null,
        mast_type: "MTNX",
        side_adapter_z: 2000 + 50 - 500 / 2,
    });

    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        const qr = params.get("qr");

        if (qr) {
            let qr_arr = qr.split("-");

            console.log("QR parameter:", qr, qr_arr);

            $form.mast_type = qr_arr[0];
            $form.start_tube_no = parseInt(qr_arr[1]);
            $form.end_tube_no = parseInt(qr_arr[2]);
            $form.overlap = parseInt(qr_arr[3]);
            $form.base_adapter_height = parseInt(qr_arr[4]);
            $form.payload_adapter_height = parseInt(qr_arr[5]);
            $form.sail_area = parseFloat(qr_arr[6]);
            $form.wind_speed = parseFloat(qr_arr[7]);
            $form.head_height = parseFloat(qr_arr[8]);
            $form.tube_length = parseFloat(qr_arr[9]);
            $form.terrain_category = qr_arr[10];
            $form.x_offset = parseFloat(qr_arr[11]);
            $form.z_offset = parseFloat(qr_arr[12]);
            $form.payload_mass = parseFloat(qr_arr[13]);
            $form.motor_id = parseInt(qr_arr[14]);
            $form.gearbox_id = parseInt(qr_arr[15]);
            $form.tip_deflection_percentage = parseFloat(qr_arr[16]);
            $form.side_adapter_z = parseFloat(qr_arr[17]);
        }


        observer = new ResizeObserver(() => {
            drawingWidth = drawingContainer.clientWidth;
        });

        observer.observe(drawingContainer);

        // initialize immediately
        drawingWidth = drawingContainer.clientWidth;

        return () => observer.disconnect();
        
    });

    $effect(() => {
        const z =
            Math.round(1000 * Math.sqrt($form.sail_area) / 2);

        if ($form.z_offset !== z) {
            $form.z_offset = z;
        }

        /*        
        const side_adapter_z = $form.tube_length + $form.base_adapter_height - $form.overlap / 2;

        if ($form.side_adapter_z !== side_adapter_z) {
            $form.side_adapter_z = side_adapter_z;
        } 
        */

        const selectedMast = config["mast_types"].find(
            (mast) => mast.value.toString() === $form.mast_type.toString(),
        );

        if ($form.head_height !== selectedMast?.head_height) {
            $form.head_height = selectedMast?.head_height ?? null;
        }
    });


    let results = $derived.by(() => {
        return Configurator.calculate($form.data());
    });

    function toggleTab(elName) {
        let tabSelected = "tab" + elName;
        let divSelected = "div" + elName;
        let tabId, divId;
        let tabs = [
            "BM",
            "Deflection",
            "Loads",
            "Extended",
            "Nested",
            "Torque",
            "Vibration",
            "BOM",
        ];

        tabs.forEach((element) => {
            tabId = "tab" + element;
            divId = "div" + element;

            document.getElementById(tabId).classList.remove("is-inverted");
            document.getElementById(divId).classList.add("is-hidden");
        });

        document.getElementById(tabSelected).classList.add("is-inverted");
        document.getElementById(divSelected).classList.remove("is-hidden");
    }

    async function generatePDF() {
        let pdf = new MakePDF(mast.data);
        await pdf.init(); // ✅ Initialize QR code first
        await pdf.run();
    }

    function goToMastOptionsTable() {
        window.location.href = "/pdm/engineering/options_table";
    }

    function updateFormValues() {
        const selectedMast = config["mast_types"].find(
            (mast) => mast.value.toString() === $form.mast_type.toString(),
        );

        $form.head_height = selectedMast ? selectedMast.head_height : null;
        $form.base_adapter_height = selectedMast
            ? selectedMast.base_adapter_height
            : null;
    }

    let result = "";
    let error = "";

    async function code2Cad() {
        try {
            const response = await fetch("/api/code2cad", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    pnumber: "199234",
                    mast: results,
                    overlap: $form.overlap,
                }),
            });

            const data = await response.json();
            console.log("Response from server:", data); // ◄ View this in F12 Console

            if (response.ok) {
                result = data.result; // Saves "Python received parameter: tube_data"
                error = "";
                alert("done");
                console.log(JSON.parse(result));
            } else {
                error = data.error || "Something went wrong";
            }
        } catch (err) {
            error = err.message;
            console.error("Fetch Error:", err);
        }
    }




</script>

<Layout>
    <section class="section">

        <div class="columns">
            <div class="column is-8">
                <Title
                    title="Mast Configurator"
                    subtitle="Payload - Extended/Nested Height - Weight / Loads Estimation"
                />
            </div>

            <div class="column has-text-right has-text-left-mobile">
                <button
                    onclick={toggleInfoGraphic}
                    class="button is-link is-light"
                    data-tooltip="Mast Parameters"
                >
                    <span class="icon is-small">
                        <Info size="20" />
                    </span>
                </button>

                <a
                    href="/pdm/engineering/profiles_table"
                    class="button is-link is-light ml-6"
                    data-tooltip="Profiles Table"
                >
                    <span class="icon is-small">
                        <Target size="18" />
                    </span>
                </a>

                <button
                    onclick={goToMastOptionsTable}
                    class="button is-link is-light"
                    data-tooltip="Mast Options Table"
                >
                    <span class="icon is-small">
                        <List size="18" />
                    </span>
                </button>
            </div>
        </div>

        <FormRadio
            {form}
            name="mast_type"
            label="Mast Type"
            value="MTNX"
            options={config.mast_types}
            onchange={() => updateFormValues()}
        />

        <div class="columns">
            <div class="column is-half">
                <Title
                    title="[{$form.end_tube_no -
                        $form.start_tube_no +
                        1}] Sections"
                />
            </div>

            <div class="column has-text-right has-text-left-mobile">
                <button
                    onclick={code2Cad}
                    class="button is-link is-light"
                    data-tooltip="Code2CAD"
                >
                    <span class="icon is-small">
                        <Box size="18" color="red" />
                    </span>
                </button>

                <button
                    onclick={toggle}
                    class="button is-link is-light"
                    data-tooltip="Toggle JSON Editor"
                >
                    <span class="icon is-small">
                        <Braces size="18" />
                    </span>
                </button>

                <button
                    onclick={generatePDF}
                    class="button is-link is-light"
                    data-tooltip="Generate PDF"
                >
                    <span class="icon is-small">
                        <!-- <FileText size="16" /> -->
                        <Pdf size="20" />
                    </span>
                </button>
            </div>
        </div>

        <form novalidate id="genericForm" class="my-6">
            <div class="fixed-grid has-4-cols has-1-cols-mobile">
                <div class="grid">
                    <div class="cell">
                        <FormSelect
                            {form}
                            name="start_tube_no"
                            label="Top Tube Dia [mm]"
                            placeholder="Select Top Tube"
                            options={config.tubes.map((tube) => ({
                                value: tube.no,
                                label: `MT-${String(tube.no).padStart(2, "0")} ... Dia ${tube.od}`,
                            }))}
                            required={true}
                            class="is-fullwidth"
                        />
                    </div>

                    <div class="cell">
                        <FormSelect
                            {form}
                            name="end_tube_no"
                            label="Bottom Tube Dia [mm]"
                            placeholder="Select Bottom Tube"
                            options={config.tubes.map((tube) => ({
                                value: tube.no,
                                label: `MT-${String(tube.no).padStart(2, "0")} ... Dia ${tube.od}`,
                            }))}
                            required={true}
                            class="is-fullwidth"
                        />
                    </div>

                    <div class="cell">
                        <FormInput
                            {form}
                            name="tube_length"
                            label="Length of Sections [mm]"
                            placeholder="Tube Length"
                            type="number"
                            min="0"
                            max="4000"
                            step="5"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormInput
                            {form}
                            name="overlap"
                            label="Overlap Length[mm]"
                            placeholder="Enter overlap"
                            type="number"
                            min="100"
                            max="2000"
                            step="5"
                            required={true}
                        />
                    </div>
                </div>
            </div>

            <div class="fixed-grid has-4-cols has-1-cols-mobile">
                <div class="grid">
                    <div class="cell">
                        <FormInput
                            {form}
                            name="head_height"
                            label="Head Distance [mm]"
                            placeholder="Enter Head Distance"
                            type="number"
                            min="20"
                            max="500"
                            step="5"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormInput
                            {form}
                            name="x_offset"
                            label="X Offset [mm]"
                            placeholder="Enter X Offset"
                            type="number"
                            min="0"
                            max="1000"
                            step="5"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormInput
                            {form}
                            name="z_offset"
                            label="Z Offset [mm]"
                            placeholder="Enter Z Offset"
                            type="number"
                            min="50"
                            max="2500"
                            step="5"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormSelect
                            {form}
                            name="terrain_category"
                            label="Terrain Category"
                            placeholder="Select Terrain Category"
                            options={config.terrain_category.map(
                                (category) => ({
                                    value: category.no,
                                    label:
                                        category.no +
                                        " - " +
                                        category.description.slice(0, 16) +
                                        "...",
                                }),
                            )}
                            required={true}
                            class="is-fullwidth"
                        />
                    </div>
                </div>
            </div>

            <div class="fixed-grid has-4-cols has-1-cols-mobile">
                <div class="grid">
                    <div class="cell">
                        <FormInput
                            {form}
                            name="wind_speed"
                            label="Wind Speed [km/h]"
                            placeholder="Enter Wind Speed"
                            type="number"
                            min="30"
                            max="200"
                            step="1"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormInput
                            {form}
                            name="sail_area"
                            label="Sail Area [m²]"
                            placeholder="Enter Sail Area"
                            type="number"
                            min="0"
                            max="20"
                            step="0.1"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormInput
                            {form}
                            name="payload_adapter_height"
                            label="Payload Adapter Thk [mm]"
                            placeholder="Enter Payload Adapter Thickness"
                            type="number"
                            min="0"
                            max="100"
                            step="1"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormInput
                            {form}
                            name="base_adapter_height"
                            label="Base Adapter Thk [mm]"
                            placeholder="Enter Base Adapter Thickness"
                            type="number"
                            min="0"
                            max="1000"
                            step="1"
                            required={true}
                        />
                    </div>
                </div>
            </div>

            <div class="fixed-grid has-4-cols has-1-cols-mobile">
                <div class="grid">
                    <div class="cell">
                        <FormInput
                            {form}
                            name="payload_mass"
                            label="Payload Mass [kg]"
                            placeholder="Enter Payload Mass"
                            type="number"
                            min="5"
                            max="1000"
                            step="5"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormSelect
                            {form}
                            name="motor_id"
                            label="Motor / Drive Type"
                            placeholder="Select Motor"
                            options={mtnx_bom.motors.map((motor) => ({
                                value: motor.id,
                                label: `${motor.name} (${motor.max_speed_rpm} RPM)`,
                            }))}
                            required={true}
                            class="is-fullwidth"
                        />
                    </div>

                    <div class="cell">
                        <FormSelect
                            {form}
                            name="gearbox_id"
                            label="Gearbox"
                            placeholder="Select Gearbox"
                            options={mtnx_bom.gearboxes.map((gearbox) => ({
                                value: gearbox.id,
                                label: `${gearbox.name}`,
                            }))}
                            required={true}
                            class="is-fullwidth"
                        />
                    </div>

                    <div class="cell">
                        <FormSelect
                            {form}
                            name="tip_deflection_percentage"
                            label="Tip Deflection Percentage"
                            placeholder="Select Percentage"
                            options={config.tip_deflection_percentages.map(
                                (percentage) => ({
                                    value: percentage.id,
                                    label: `${percentage.name}`,
                                }),
                            )}
                            required={true}
                            class="is-fullwidth"
                        />
                    </div>
                </div>
            </div>

            <div class="fixed-grid has-4-cols has-1-cols-mobile">
                <div class="grid">
                    <div class="cell">
                        <FormInput
                            {form}
                            name="side_adapter_z"
                            label="Side Adapter Z [mm]"
                            placeholder="Enter Side Adapter Z"
                            type="number"
                            min="500"
                            max="3500"
                            step="5"
                            required={true}
                        />
                    </div>
                </div>
            </div>
        </form>

        <!-- SUMMARY TABLE -->
        <div class="card has-background-white-ter py-2 my-4">

            <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading mb-0">Extended Height</p>
                        <p class="title mb-0">
                            {results.extendedHeight}
                        </p>
                        <p class="heading">mm</p>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading mb-0">Nested Height</p>
                        <p class="title mb-0">{results.nestedHeight}</p>
                        <p class="heading">mm</p>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading mb-0">Wind Load on Payload</p>
                        <p class="title mb-0">
                           {results.payload.wind_load.toFixed(0)}
                        </p>
                        <p class="heading">N</p>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading mb-0">
                            Lifted Mass / Total Mast Mass
                        </p>
                        <p class="title mb-0">
                            {results.mass.lifted.toFixed(0)} / 
                            {results.mass.total.toFixed(0)}
                        </p>
                        <p class="heading">kg</p>
                    </div>
                </div>
            </nav>
        </div>

        <nav class="navbar has-background-info-light mb-2 mt-6">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <button
                        class="navbar-item"
                        onclick={() => toggleTab("Loads")}
                        id="tabLoads"
                    >
                        <span class="icon"
                            ><WeightTilde size="16" color="blue" /></span
                        >
                        <span>Loads</span>
                    </button>

                    <button
                        class="navbar-item is-light is-inverted"
                        onclick={() => toggleTab("BM")}
                        id="tabBM"
                    >
                        <span class="icon"
                            ><ChartLine size="16" color="blue" /></span
                        >
                        <span>Moments</span>
                    </button>

                    <button
                        class="navbar-item is-light is-inverted"
                        onclick={() => toggleTab("Deflection")}
                        id="tabDeflection"
                    >
                        <span class="icon"
                            ><ChartSpline size="16" color="blue" /></span
                        >
                        <span>Deflections</span>
                    </button>

                    <button
                        class="navbar-item is-light is-inverted"
                        onclick={() => toggleTab("Extended")}
                        id="tabExtended"
                    >
                        <span class="icon"
                            ><ArrowUpNarrowWide size="16" color="blue" /></span
                        >
                        <span>Extended</span>
                    </button>

                    <button
                        class="navbar-item is-light is-inverted"
                        onclick={() => toggleTab("Nested")}
                        id="tabNested"
                    >
                        <span class="icon"
                            ><ArrowDownNarrowWide
                                size="16"
                                color="blue"
                            /></span
                        >
                        <span>Nested</span>
                    </button>

                    <button
                        class="navbar-item is-light is-inverted"
                        onclick={() => toggleTab("Torque")}
                        id="tabTorque"
                    >
                        <span class="icon"
                            ><Wrench size="16" color="blue" /></span
                        >
                        <span>Torque/Power</span>
                    </button>

                    <button
                        class="navbar-item is-light is-inverted"
                        onclick={() => toggleTab("Vibration")}
                        id="tabVibration"
                    >
                        <span class="icon"
                            ><AudioWaveform size="16" color="blue" /></span
                        >
                        <span>Frequencies</span>
                    </button>

                    <button
                        class="navbar-item is-light is-inverted"
                        onclick={() => toggleTab("BOM")}
                        id="tabBOM"
                    >
                        <span class="icon"
                            ><ReceiptText size="16" color="blue" /></span
                        >
                        <span>BOM</span>
                    </button>
                </div>
            </div>
        </nav>

        <div class="card p-4">

            <!-- EMPTY DV FOR WIDTH CALCULATON -->
            <div bind:this={drawingContainer} class="container m-0" id="fixedWidth"></div>

            <!-- LOADS DIAGRAM -->
            <div class="container" id="divLoads">
                <MastDrawing
                    data={results.svg.loads}
                    drawState="Loads"
                    width={drawingWidth}
                />
            </div>

            <!-- BENDING MOMENT DIAGRAM -->
            <div class="container is-hidden" id="divBM">
                <!--                 <canvas bind:this={chartCanvas}></canvas>
 -->
            </div>

            <!-- DEFLECTION DIAGRAM -->
            <div class="container is-hidden" id="divDeflection">
                <!-- <canvas bind:this={chartDeflection}></canvas> -->
            </div>

            <!-- EXTENDED DIAGRAM -->
            <div class="container is-hidden" id="divExtended">
                <MastDrawing
                    data={results.svg.extended}
                    drawState="Extended"
                    width={drawingWidth}
                />
            </div>

            <!-- NESTED DIAGRAM -->
            <div class="container is-hidden" id="divNested">
                <MastDrawing
                    data={results.svg.nested}
                    drawState="Nested"
                    width={drawingWidth}
                />
            </div>

            <!-- TORQUE/POWER REQUIRED DIAGRAM -->
            <div class="container is-hidden" id="divTorque">
                <table class="table is-fullwidth is-striped">
                    <tbody>
                        <tr>
                            <th>Screw Data</th>
                            <td>
                                <table
                                    class="table is-fullwidth is-striped mt-2"
                                >
                                    <tbody>
                                        <tr>
                                            <th>Screw Nominal Diameter [mm]</th>
                                            <td>
                                                {config.screw_nominal_diameter.toFixed(
                                                    2,
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Screw Lead [mm]</th>
                                            <td>
                                                {config.screw_lead.toFixed(
                                                    2,
                                                )}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th
                                                >Coefficient of Friction
                                                [Steel-Bronze]</th
                                            >
                                            <td
                                                >
                                                {config.screw_coefficient_of_friction.toFixed(
                                                    2,
                                                )}
                                                </td
                                            >
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <th
                                >Minimum Torque Required to Extend Mast<br />
                                <span
                                    class="has-text-weight-normal has-text-success"
                                    >
                                    [with {results.mass.lifted.toFixed(
                                        0,
                                    )} kg Lifted Mass]
                                    </span
                                >
                            </th>
                            <td>
                                <table
                                    class="table is-fullwidth is-striped mt-2"
                                >
                                    <tbody>
                                        <tr>
                                            <th>Selected Motor Power</th>
                                            <td
                                                >{results.driveline.motor_power} kW</td
                                            >
                                        </tr>

                                        <tr>
                                            <th>Selected Motor Maximum Speed</th
                                            >
                                            <td
                                                >{results.driveline.motor_rpm} RPM</td
                                            >
                                        </tr>

                                        <tr>
                                            <th>Selected Motor Output Torque</th
                                            >
                                            <td>
                                                {results.driveline.motor_torque.toFixed(
                                                    2,
                                                )} Nm
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>
                                                Total Driveline Speed Reduction
                                                Ratio
                                            </th>
                                            <td
                                                >{results.driveline.gearbox_ratio}</td
                                            >
                                        </tr>

                                        <tr>
                                            <th>Screw Speed</th>
                                            <td>
                                                {results.driveline.screw_rpm.toFixed(
                                                    1,
                                                )} RPM
                                                <br />
                                                {results.driveline.vertical_speed.toFixed(
                                                    3,
                                                )} m/min
                                            </td>
                                        </tr>

                                        <tr>
                                            <th
                                                >Time to Extend Mast [Estimated]</th
                                            >
                                            <td>
                                                {results.driveline.time_to_extend_seconds.toFixed(
                                                    0,
                                                )} seconds
                                            </td>
                                        </tr>

                                        <tr>
                                            <th
                                                >Minimum Torque Required to
                                                Extend Mast</th
                                            >
                                            <td
                                                >{results.driveline.torque_required_to_extend_mast_Nm.toFixed(
                                                    2,
                                                )} Nm</td
                                            >
                                        </tr>

                                        <tr>
                                            <th>Total Torque at Screw End</th>
                                            <td>
                                                {results.driveline.lifting_torque.toFixed(
                                                    2,
                                                )} Nm
                                            </td>
                                        </tr>
                                        <tr>
                                            {#if results.driveline.lifting_torque > results.driveline.torque_required_to_extend_mast_Nm}
                                                <td
                                                    colspan="2"
                                                    class="is-success"
                                                >
                                                    Available Torque <strong>
                                                        {results.driveline.lifting_torque.toFixed(
                                                            1,
                                                        )}
                                                    </strong>
                                                    > Required Torque
                                                    <strong>
                                                        {results.driveline.torque_required_to_extend_mast_Nm.toFixed(
                                                            1,
                                                        )}
                                                    </strong> Nm
                                                </td>
                                            {/if}

                                            {#if results.driveline.lifting_torque < results.driveline.torque_required_to_extend_mast_Nm}
                                                <td
                                                    colspan="2"
                                                    class="is-danger is-light"
                                                >
                                                    Available Torque <strong>
                                                        {results.driveline.lifting_torque.toFixed(
                                                            1,
                                                        )}
                                                    </strong>
                                                    <span
                                                        class="has-text-danger"
                                                    >
                                                        <strong> &lt; </strong>
                                                    </span>
                                                    Required Torque
                                                    <strong>
                                                        {results.driveline.torque_required_to_extend_mast_Nm.toFixed(
                                                            1,
                                                        )}
                                                    </strong> Nm
                                                </td>
                                            {/if}
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- VIBRATION DIAGRAM -->
            <div class="container is-hidden" id="divVibration">
                <Title
                    title="Resonance Frequencies"
                    subtitle="For pure cantilever beam with concentrated mass at the tip"
                />

                <a
                    href="https://www.youtube.com/shorts/PJXdibF6fKk"
                    target="_blank"
                >
                    Watch Video
                </a>

                <div class="fixed-grid has-1-cols-mobile">
                    <div class="grid">
                        <div class="cell">
                            <img
                                src="/images/PDM/ModeShapes.png"
                                alt="Mode Shapes"
                            />
                        </div>
                        <div class="cell">
                            {#if results.resonance_frequencies.length > 0}
                                <table
                                    class="table is-bordered is-striped is-hoverable is-fullwidth"
                                >
                                    <thead>
                                        <tr>
                                            <th>Mode</th>
                                            <th>Weak</th>
                                            <th>Frequency</th>
                                            <th>Strong</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {#each results.resonance_frequencies as mode, index}
                                            <tr>
                                                <td>Mode {index + 1}</td>

                                                <td class="has-text-right"
                                                    >{mode.weak.toFixed(1)} Hz</td
                                                >
                                                <td
                                                    class="has-text-right has-background-grey-lighter has-text-weight-bold"
                                                    >{mode.frequency.toFixed(1)}
                                                    Hz</td
                                                >
                                                <td class="has-text-right"
                                                    >{mode.strong.toFixed(1)} Hz</td
                                                >
                                            </tr>
                                        {/each}
                                    </tbody>
                                </table>
                            {/if}

                        </div>
                    </div>
                </div>
            </div>

            <!-- BOM TAB -->
            <div class="container is-hidden" id="divBOM">
                <Title title="BOM" subtitle="Bill of Materials" />

                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Part Number</th>
                            <th>Name</th>
                            <th>Material</th>
                            <th>Quantity</th>
                            <th>Mass (kg)</th>
                            <th>Part Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each results.bom as item}
                            <tr>
                                <td>{item.part_number}</td>
                                <td>{item.name}</td>
                                <td>{item.material}</td>
                                <td>{item.quantity}</td>
                                <td>{item.mass_kg}</td>
                                <td>{item.part_number}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>

        <!-- JSON MODAL -->
        <div class="modal {showJson ? 'is-active' : ''}" id="jsonModal">
            <button
                type="button"
                class="modal-background {showJson ? 'is-active' : ''}"
                id="jsonModal"
                onclick={() => (showJson = false)}
                aria-label="close"
            ></button>

            <div class="modal-content">
                <pre>
                  <!-- {JSON.stringify(deflection.data, null, 2)} -->
                  <JsonTree data={results} />
                </pre>
            </div>
            <button
                class="modal-close is-large"
                aria-label="close"
                onclick={toggle}
            ></button>
        </div>

        <!-- INFO GRAPHIC MODAL -->
        <div
            class="modal {showInfoGraphic ? 'is-active' : ''}"
            id="infoGraphicModal"
        >
            <button
                type="button"
                class="modal-background {showInfoGraphic ? 'is-active' : ''}"
                id="infoGraphicModal"
                onclick={() => (showInfoGraphic = false)}
                aria-label="close"
            ></button>

            <div class="modal-content has-background-white p-6">
                <!-- PARAMETERS -->
                <Title title="Definition of Parameters Used" />
                <p class="image">
                    <img
                        src="/images/PDM/MastParameters.png"
                        alt="Description of mast parameters"
                    />
                </p>

                <!-- TERRAIN CATEGORIES -->
                <Title title="Terrain Categories" />

                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        {#each config.terrain_category as terrain}
                            <tr>
                                <th class="is-4">{terrain.no}</th>
                                <td>{terrain.description}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>

                <!-- LOADS RESOURCES -->

                <Title title="Load Calculation Resources" />

                <article class="message is-info">
                    <Title subtitle="Wind Load on Payloads" />
                    <div class="message-body">
                        Dynamic pressure formula is used to calculate wind load
                        on payloads.
                    </div>
                </article>

                <article class="message is-info">
                    <Title subtitle="Wind Load Circular Mast Sections" />
                    <div class="message-body">
                        <p>
                            Eurocode 1: Actions on structures - Part 1-4:
                            General actions - Wind actions
                        </p>

                        <p>
                            <a
                                href="https://www.phd.eng.br/wp-content/uploads/2015/12/en.1991.1.4.2005.pdf"
                            >
                                EN 1991-1-4:2005+A1:2010 Section 7.9.2</a
                            > Cylindrical structures, isolated cylindrical elements
                        </p>

                        <p>
                            All load calculations on mast sections are performed
                            per above document.
                        </p>

                        <p>
                            <a
                                href="https://eurocodeapplied.com/design/en1991/wind-force-cylinder"
                                >Eurocode Implementation</a
                            >
                        </p>
                    </div>
                </article>
            </div>

            <button
                class="modal-close is-large"
                aria-label="close"
                onclick={toggleInfoGraphic}
            ></button>
        </div>
    </section>
</Layout>
