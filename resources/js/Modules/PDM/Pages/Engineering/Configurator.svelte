<script>
    import { MastGeometry } from "$modules/PDM/Pages/Engineering/mastGeometry.js";

    let mast_parameters = {
        base_adapter_height: 50,
        payload_adapter_height: 15,
        head_height: 42,
        material: "6063",
        tube_length: 2000,
        start_tube_no: 1,
        end_tube_no: 15,
        overlap: 500,
        terrain_category: "II",
        wind_speed: 120,
        sail_area: 1.2,
    };

    let mast = $derived(new MastGeometry(mast_parameters));
</script>

<pre>
    {JSON.stringify(mast.mast_parameters, null, 2)}
</pre>
