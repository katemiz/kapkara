<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import { onMount } from "svelte";
    import { MastGeometry } from "$modules/PDM/Pages/Engineering/mastGeometry.js";

    let mast_parameters = {
        base_adapter_height: 50,
        payload_adapter_height: 15,
        head_height: 42,
        material: "6063",
        tube_length: 2000,
        start_tube_no: 15,
        end_tube_no: 15,
        overlap: 500,
        terrain_category: "II",
        wind_speed: 120,
        sail_area: 1.2,
        z_offset: 100,
        x_offset: 100,
    };

    let mast = $derived(new MastGeometry(mast_parameters));

    // onMount(() => {
    //     // Now the DOM is ready, we can find "myChart"
    //     mast.mastCapacityChart('myChart');
    // });
</script>

<Layout>
    <section class="section content">
        <pre>
            {JSON.stringify(mast.mast_parameters, null, 2)}
        </pre>
    </section>
</Layout>
