<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import Editor from "$components/Editor.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormSelect from "$components/FormSelect.svelte";
    import FilesList from "$components/FilesList.svelte";

    import { useForm } from "@inertiajs/svelte";

    import { onMount } from "svelte";
    import { MastGeometry } from "$modules/PDM/Pages/Engineering/mastGeometry.js";
    import { SvgDraw } from "$modules/PDM/Pages/Engineering/SvgDraw.js";

    import Chart from "chart.js/auto";

    import { Braces } from "@lucide/svelte";

    let chartCanvas;
    let chartInstance;

    // let mast_parameters = {
    //     base_adapter_height: 50,
    //     payload_adapter_height: 15,
    //     head_height: 42,
    //     material: "6063",
    //     tube_length: 2000,
    //     start_tube_no: 10,
    //     end_tube_no: 15,
    //     overlap: 500,
    //     terrain_category: "II",
    //     wind_speed: 120,
    //     sail_area: 1.2,
    //     x_offset: 100,
    // };

    let { mast_parameters, supportFixedData } = $props();

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

    let showJson = $state(false);

    function toggle() {
        showJson = !showJson;
    }

    // 1. Inertia Form
    let form = useForm({
        start_tube_no: mast_parameters?.start_tube_no ?? "",
        end_tube_no: mast_parameters?.end_tube_no ?? "",
        overlap: mast_parameters?.overlap ?? "",
        base_adapter_height: mast_parameters?.base_adapter_height ?? "",
        payload_adapter_height: mast_parameters?.payload_adapter_height ?? null,
        sail_area: mast_parameters?.sail_area ?? "",
        wind_speed: mast_parameters?.wind_speed ?? 1,
        head_height: mast_parameters?.head_height ?? "",
        material: mast_parameters?.material ?? "",
        tube_length: mast_parameters?.tube_length ?? "",
        terrain_category: mast_parameters?.terrain_category ?? "",
        x_offset: mast_parameters?.x_offset ?? "",
    });

    // If you need the form to update when the 'mast_properties' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (material && isEdit) {
            $form.defaults({
                start_tube_no: mast_parameters.start_tube_no,
                end_tube_no: mast_parameters.end_tube_no,
                overlap: mast_parameters.overlap,
                base_adapter_height: mast_parameters.base_adapter_height,
                payload_adapter_height: mast_parameters.payload_adapter_height,
                sail_area: mast_parameters.sail_area,
                wind_speed: mast_parameters.wind_speed,
                head_height: mast_parameters.head_height,
                material: mast_parameters.material,
                tube_length: mast_parameters.tube_length,
                terrain_category: mast_parameters.terrain_category,
                x_offset: mast_parameters.x_offset,
            });
        }
    });
</script>

<Layout>
    <section class="section content">
        <Title
            title="Mast Configurator"
            subtitle="An Engineering Configurator for Telescopic Masts"
        />

        <button onclick={toggle} class="button is-link">
            <span class="icon is-small">
                <Braces size="16" />
            </span>
        </button>

        <form onsubmit={submit} novalidate id="genericForm">
            <div class="fixed-grid has-2-cols">
                <div class="grid">
                    <div class="cell">
                        <FormSelect
                            {form}
                            name="topTubeNo"
                            label="Top Tube Dia [mm]"
                            placeholder="Select Top Tube"
                            options={supportFixedData.materialCategories}
                            required={true}
                        />
                    </div>
                    <div class="cell">
                        <FormSelect
                            {form}
                            name="materialForm"
                            label="Material Form"
                            placeholder="Select a form"
                            options={supportFixedData.materialForms}
                            required={true}
                        />
                    </div>
                </div>
            </div>

            <FormInput
                {form}
                name="materialName"
                label="Material Name/Description"
                placeholder="Enter material Name/Description"
                required={true}
            />

            <FormInput
                {form}
                name="materialSpecification"
                label="Material Specification"
                placeholder="Enter material specification"
            />

            <div class="field">
                <label class="label" for="ed">Notes/Comments/Remarks</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.materialNotes = html)}
                        value={material != null ? material.remarks : ""}
                        placeholder="Enter any notes, comments, or remarks about the material here..."
                    />
                </div>
                {#if $form.errors.materialNotes}
                    <p class="help is-danger">
                        {$form.errors.materialNotes}
                    </p>
                {/if}
            </div>

            {#if isEdit && material.files.length > 0}
                <FilesList media={material.files} />
            {/if}

            <FormUpload
                {form}
                name="materialFiles"
                label="File Attachments"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={10}
                showPreview={false}
            />

            <FormSelect
                {form}
                name="materialIsActive"
                label="Material Status (Active/Inactive)"
                placeholder="Select status"
                options={supportFixedData.materialIsActive}
                required={true}
            />

            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if isEdit & (material != null)}
                    <a href="/material/{material.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/material" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {/if}

                <!-- Form Submit Button -->
                <button
                    type="submit"
                    class="button is-link"
                    disabled={$form.processing}
                >
                    <span>
                        {#if $form.processing}
                            "Submitting ..."
                        {:else}
                            {isEdit ? "Update" : "Create"} Material
                        {/if}
                    </span>
                    <span class="icon"><ChevronRight size="16" /></span>
                </button>
            </div>
        </form>

        <div class="container mx-auto">
            <canvas bind:this={chartCanvas}></canvas>
        </div>

        <div class="container mx-auto" id="svgDiv"></div>

        <div class="modal {showJson ? 'is-active' : ''}" id="jsonModal">
            <div class="modal-background" onclick={toggle}></div>
            <div class="modal-content">
                <pre>
                  {JSON.stringify(mast.mast_parameters, null, 2)}
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
