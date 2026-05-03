<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import Editor from "$components/Editor.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormSelect from "$components/FormSelect.svelte";
    import FilesList from "$components/FilesList.svelte";

    import FormRadio from "$components/FormRadio.svelte";
    import FormCheckBoxSingle from "$components/FormCheckBoxSingle.svelte";
    import FormCheckBoxMultiple from "$components/FormCheckBoxMultiple.svelte";
    import FormDate from "$components/FormDate.svelte";
    import FormUpload from "$components/FormUpload.svelte";

    import { useForm } from "@inertiajs/svelte";

    import { onMount } from "svelte";
    import { MastGeometry } from "$modules/PDM/Pages/Engineering/mastGeometry.js";
    import { SvgDraw } from "$modules/PDM/Pages/Engineering/SvgDraw.js";

    import MakePDF from "$modules/PDM/Pages/Engineering/MakePDF.js";
    import Chart from "chart.js/auto";

    import {
        Braces,
        X,
        ChevronRight,
        FileText,
        ChartLine,
        WeightTilde,
        ArrowUpNarrowWide,
        ArrowDownNarrowWide,
        Wrench,
    } from "@lucide/svelte";
    import { config } from "$modules/PDM/Shared/config.js";

    let chartCanvas;
    let chartInstance;

    let { params, isEdit = false, supportFixedData } = $props();

    // Function to update/create the chart
    function drawBMChart() {
        if (!chartCanvas) return;

        const ctx = chartCanvas.getContext("2d");
        let min_EI = mast.params.tubes.at(-1).M_EI["0"];

        const chartData = {
            labels: Object.keys(mast.params.total_moments),
            datasets: [
                {
                    label: "Total Moments (Nm)",
                    data: Object.values(mast.params.total_moments),
                    // ... styles
                    yAxisID: "y",
                },
                ...mast.params.tubes.map((tube) => ({
                    label: `Section ${tube.no}`,
                    data: Object.entries(tube.M_EI)
                        .map(([z, value]) => ({ x: parseFloat(z), y: value }))
                        .sort((a, b) => a.x - b.x),
                    // ... styles
                    yAxisID: "y1",
                })),
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
                            text: "Bending Moment Diagram for Mast Configuration",
                        },
                    },
                },
            });
        }
    }

    onMount(() => {
        drawBMChart();
    });

    let showJson = $state(false);

    function toggle() {
        showJson = !showJson;
    }

    // 1. Inertia Form
    let form = useForm({
        start_tube_no: params?.start_tube_no ?? "",
        end_tube_no: params?.end_tube_no ?? "",
        overlap: params?.overlap ?? "",
        base_adapter_height: params?.base_adapter_height ?? "",
        payload_adapter_height: params?.payload_adapter_height ?? null,
        sail_area: params?.sail_area ?? "",
        wind_speed: params?.wind_speed ?? 1,
        head_height: params?.head_height ?? "",
        material: params?.material ?? "",
        tube_length: params?.tube_length ?? "",
        terrain_category: params?.terrain_category ?? "",
        x_offset: params?.x_offset ?? "",
        z_offset: params?.z_offset ?? "",
        payload_weight: params?.payload_weight ?? "",
        motor_id: params?.motor_id ?? "",
        gearbox_id: params?.gearbox_id ?? "",
    });

    // If you need the form to update when the 'params' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (isEdit) {
            $form.defaults({
                start_tube_no: params.start_tube_no,
                end_tube_no: params.end_tube_no,
                overlap: params.overlap,
                base_adapter_height: params.base_adapter_height,
                payload_adapter_height: params.payload_adapter_height,
                sail_area: params.sail_area,
                wind_speed: params.wind_speed,
                head_height: params.head_height,
                material: params.material,
                tube_length: params.tube_length,
                terrain_category: params.terrain_category,
                x_offset: params.x_offset,
                z_offset: params.z_offset,
                payload_weight: params.payload_weight,
                motor_id: params.motor_id,
                gearbox_id: params.gearbox_id,
            });
        }

        // We "touch" mast to ensure this effect re-runs when form changes
        const _mast = mast;

        // 1. Update the Bending Moment Chart and Svg
        drawBMChart();

        svgDraw.svgDraw("Loads");
        svgDraw.svgDraw("Extended");
        svgDraw.svgDraw("Nested");
    });

    let mast = $derived(new MastGeometry($form, config));
    let svgDraw = $derived(new SvgDraw(mast));

    function toggleTab(elName) {
        let tabSelected = "tab" + elName;
        let divSelected = "div" + elName;
        let tabId, divId;
        let tabs = ["BM", "Loads", "Extended", "Nested", "Torque"];

        tabs.forEach((element) => {
            tabId = "tab" + element;
            divId = "div" + element;

            document.getElementById(tabId).classList.remove("is-inverted");
            document.getElementById(divId).classList.add("is-hidden");
        });

        document.getElementById(tabSelected).classList.add("is-inverted");
        document.getElementById(divSelected).classList.remove("is-hidden");

        svgDraw.svgDraw("Loads");
        svgDraw.svgDraw("Extended");
        svgDraw.svgDraw("Nested");
    }

    async function generatePDF() {
        let pdf = new MakePDF(mast);

        await pdf.init(); // ✅ Initialize QR code first
        pdf.run();
    }
</script>

<Layout>
    <section class="section content">
        <div class="columns">
            <div class="column is-10">
                <Title
                    title="Mast Configurator"
                    subtitle="Payload - Extended/Nested Height - Weight / Loads Estimation"
                />
            </div>

            <div class="column has-text-right has-text-left-mobile">
                <button onclick={toggle} class="button is-link is-light">
                    <span class="icon is-small">
                        <Braces size="16" />
                    </span>
                </button>

                <button onclick={generatePDF} class="button is-link is-light">
                    <span class="icon is-small">
                        <FileText size="16" />
                    </span>
                </button>
            </div>
        </div>

        <form onsubmit={submit} novalidate id="genericForm" class="my-6">
            <div class="fixed-grid has-4-cols">
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

            <div class="fixed-grid has-4-cols">
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
                        />
                    </div>
                </div>
            </div>

            <div class="fixed-grid has-4-cols">
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
                            max="100"
                            step="1"
                            required={true}
                        />
                    </div>
                </div>
            </div>

            <div class="fixed-grid has-4-cols">
                <div class="grid">
                    <div class="cell">
                        <FormInput
                            {form}
                            name="payload_weight"
                            label="Payload Weight[kg]"
                            placeholder="Enter Payload"
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
                            label="Motor"
                            placeholder="Select Motor"
                            options={config.motors.map((motor) => ({
                                value: motor.id,
                                label: `${motor.name} (${motor.max_speed_rpm} RPM)`,
                            }))}
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormSelect
                            {form}
                            name="gearbox_id"
                            label="Gearbox"
                            placeholder="Select Gearbox"
                            options={config.gearboxes.map((gearbox) => ({
                                value: gearbox.id,
                                label: `${gearbox.name}`,
                            }))}
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
                        <p class="title mb-0">{mast.extendedHeight}</p>
                        <p class="heading">mm</p>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading mb-0">Nested Height</p>
                        <p class="title mb-0">{mast.nestedHeight}</p>
                        <p class="heading">mm</p>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading mb-0">Wind Load on Payload</p>
                        <p class="title mb-0">
                            {mast.payload.wind_load.toFixed(0)}
                        </p>
                        <p class="heading">N</p>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading mb-0">Lifted Weight / Total Weight</p>
                        <p class="title mb-0">
                            {mast.weight.lifted_mass.toFixed(0)} / {mast.weight.total_mast_mass.toFixed(
                                0,
                            )}
                        </p>
                        <p class="heading">kg</p>
                    </div>
                </div>
            </nav>
        </div>

        <div class="card p-4">
            <div class="buttons">
                <button
                    class="button is-light is-inverted"
                    onclick={() => toggleTab("BM")}
                    id="tabBM"
                >
                    <span class="icon">
                        <ChartLine size="16" color="red" />
                    </span>
                    <span>Bending Moments</span>
                </button>

                <button
                    class="button is-light"
                    onclick={() => toggleTab("Loads")}
                    id="tabLoads"
                >
                    <span class="icon">
                        <WeightTilde size="16" color="red" />
                    </span>
                    <span>Loads</span>
                </button>

                <button
                    class="button is-light"
                    onclick={() => toggleTab("Extended")}
                    id="tabExtended"
                >
                    <span class="icon">
                        <ArrowUpNarrowWide size="16" color="red" />
                    </span>
                    <span>Extended Position</span>
                </button>

                <button
                    class="button is-light"
                    onclick={() => toggleTab("Nested")}
                    id="tabNested"
                >
                    <span class="icon">
                        <ArrowDownNarrowWide size="16" color="red" />
                    </span>
                    <span>Nested Position</span>
                </button>

                <button
                    class="button is-light"
                    onclick={() => toggleTab("Torque")}
                    id="tabTorque"
                >
                    <span class="icon">
                        <Wrench size="16" color="red" />
                    </span>
                    <span>Torque/Power</span>
                </button>
            </div>

            <!-- BENDING MOMENT DIAGRAM -->
            <div class="container mx-auto" id="divBM">
                <canvas bind:this={chartCanvas}></canvas>
            </div>

            <!-- LOADS DIAGRAM -->
            <div class="container mx-auto is-hidden" id="divLoads"></div>

            <!-- EXTENDED DIAGRAM -->
            <div class="container mx-auto is-hidden" id="divExtended"></div>

            <!-- NESTED DIAGRAM -->
            <div class="container mx-auto is-hidden" id="divNested"></div>

            <!-- TORQUE/POWER REQUIRED DIAGRAM -->
            <div class="container mx-auto is-hidden" id="divTorque">
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
                                            <td
                                                >{mast.config.screw_nominal_diameter.toFixed(
                                                    2,
                                                )}</td
                                            >
                                        </tr>
                                        <tr>
                                            <th>Screw Lead [mm]</th>
                                            <td
                                                >{mast.config.screw_lead.toFixed(
                                                    2,
                                                )}</td
                                            >
                                        </tr>

                                        <tr>
                                            <th
                                                >Coefficient of Friction
                                                [Steel-Bronze]</th
                                            >
                                            <td
                                                >{mast.config.screw_coefficient_of_friction.toFixed(
                                                    2,
                                                )}</td
                                            >
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <th>Minimum Torque Required to Extend Mast</th>
                            <td>
                                <table
                                    class="table is-fullwidth is-striped mt-2"
                                >
                                    <tbody>
                                        <tr>
                                            <th>Selected Motor Power</th>
                                            <td>{mast.power.motor_power} kW</td>
                                        </tr>

                                        <tr>
                                            <th>Selected Motor Maximum Speed</th
                                            >
                                            <td>{mast.power.motor_rpm} RPM</td>
                                        </tr>

                                        <tr>
                                            <th>Selected Motor Output Torque</th
                                            >
                                            <td>
                                                {mast.power.motor_torque.toFixed(
                                                    2,
                                                )} Nm
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>
                                                Total Driveline Speed Reduction
                                                Ratio
                                            </th>
                                            <td>{mast.power.gearbox_ratio}</td>
                                        </tr>

                                        <tr>
                                            <th>Screw Speed</th>
                                            <td>
                                                {mast.power.screw_rpm.toFixed(
                                                    1,
                                                )} RPM
                                                <br />
                                                {mast.power.vertical_speed.toFixed(
                                                    3,
                                                )} m/min
                                            </td>
                                        </tr>

                                        <tr>
                                            <th
                                                >Minimum Torque Required to
                                                Extend Mast</th
                                            >
                                            <td
                                                >{mast.power.torque_required_to_extend_mast_Nm.toFixed(
                                                    2,
                                                )} Nm</td
                                            >
                                        </tr>

                                        <tr>
                                            <th>Total Torque at Screw End</th>
                                            <td>
                                                {mast.power.lifting_torque.toFixed(
                                                    2,
                                                )} Nm
                                            </td>
                                        </tr>
                                        <tr>
                                            {#if mast.power.lifting_torque > mast.power.torque_required_to_extend_mast_Nm}
                                                <td
                                                    colspan="2"
                                                    class="is-success"
                                                >
                                                    Available Torque <strong>
                                                        {mast.power.lifting_torque.toFixed(
                                                            1,
                                                        )}
                                                    </strong>
                                                    > Required Torque
                                                    <strong>
                                                        {mast.power.torque_required_to_extend_mast_Nm.toFixed(
                                                            1,
                                                        )}
                                                    </strong> Nm
                                                </td>
                                            {/if}

                                            {#if mast.power.lifting_torque < mast.power.torque_required_to_extend_mast_Nm}
                                                <td
                                                    colspan="2"
                                                    class="is-danger is-light"
                                                >
                                                    Available Torque <strong>
                                                        {mast.power.lifting_torque.toFixed(
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
                                                        {mast.power.torque_required_to_extend_mast_Nm.toFixed(
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
                  {JSON.stringify(mast, null, 2)}
                </pre>
            </div>
            <button
                class="modal-close is-large"
                aria-label="close"
                onclick={toggle}
            ></button>
        </div>
    </section>
</Layout>
