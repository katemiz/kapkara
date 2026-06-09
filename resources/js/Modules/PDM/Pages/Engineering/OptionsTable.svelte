<script>

    import { onMount } from 'svelte';

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";

    class OptionsTable {

        constructor(params) {

            console.log(params);

            this.params = params;
            this.lmin = 500;
            this.lmax = 3000;

            this.overlap = params.overlap;
            this.head_height = params.head_height;
            this.base_adapter_height = params.base_adapter_height;
            this.payload_adapter_height = params.payload_adapter_height;

            this.target_heights = [2500,3000,4000,5000,6000,8000,9000,10000,12000,15000,18000];
            this.no_of_sections = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];

            this.table = {};
        }

        getExtendedHeight(n,tlength) {
            return n * tlength - (n - 1) * this.overlap + this.base_adapter_height + this.payload_adapter_height;
        }

        getNestedHeight(n,tlength) {
            return tlength + (n - 1) * this.head_height + this.base_adapter_height + this.payload_adapter_height;
        }

        getTable() {

            let max_eh;
            let min_nh;

            // Use for...of for the loops
            for (const height of this.target_heights) {

                max_eh = height;
                min_nh = height;

                this.overlap = Math.ceil(10 * height/1000 + 220);
                
                this.table[height] ??= {};

                for (const n of this.no_of_sections) {

                    for (let tlength = this.lmin; tlength <= this.lmax; tlength += 5) {

                        const extendedHeight = this.getExtendedHeight(n, tlength);
                        const nestedHeight = this.getNestedHeight(n, tlength);

                        if (extendedHeight >= height) {

                            if ( nestedHeight <  min_nh) {
                                this.table[height][n] ??= {};
                                this.table[height][n]['EH'] = extendedHeight;
                                this.table[height][n]['NH'] = nestedHeight;
                                this.table[height][n]['QR'] = this.qrData(this.params, tlength, n);
                                this.table[height][n]['Code'] = `${+(height/1000).toFixed(1)}` + 'MTNX-' + (nestedHeight/1000).toFixed(1)+'-' + n;

                                min_nh = nestedHeight;
                                max_eh = extendedHeight;
                            }

                            break; // Successfully stops the "tlength" loop for the current height!
                        }
                    }
                }
            }
        }

        qrData(params, tube_length, no_of_sections) {

            params.start_tube_no = params.end_tube_no - (no_of_sections - 1);

            let qr =
                params.start_tube_no + '-' +
                params.end_tube_no + '-' +
                this.overlap + '-' +
                params.base_adapter_height + '-' +
                params.payload_adapter_height + '-' +
                params.sail_area + '-' +
                params.wind_speed + '-' +
                params.head_height + '-' +
                tube_length + '-' +
                params.terrain_category + '-' +
                params.x_offset + '-' +
                params.z_offset + '-' +
                params.payload_mass + '-' +
                params.motor_id + '-' +
                params.gearbox_id;

            return qr
        }
    }

    let conf_table = {};
    let params = {}; // This will hold your parsed object

    onMount(() => {
        // 1. Get the query string from the window URL
        const urlParams = new URLSearchParams(window.location.search);
        const paramsString = urlParams.get('params');

        if (paramsString) {
            try {
                // 2. Decode and parse the JSON string back into an object
                params = JSON.parse(decodeURIComponent(paramsString));
            } catch (error) {
                console.error("Failed to parse URL params:", error);
            }
        }

        let optionsTable = new OptionsTable(params);
        optionsTable.getTable();

        conf_table = optionsTable.table;
    });

</script>


<Layout>
    <section class="section content p-16">

        <Title
            title="Masttech Mast Configuration Options"
            subtitle="Number of Sections / Extended-Nested Heights"
        />

        <table class="table is-bordered mx-auto">

            <thead>
                <tr>
                    <th>Height</th>
                    <th>Sections</th>
                    <th class="has-text-right">Extended Height</th>
                    <th class="has-text-right">Nested Height</th>
                    <th>Details</th>
                </tr>
            </thead>

            <tbody id="tableBody">

                {#each Object.entries(conf_table) as [height, options]}
                    {#each Object.entries(options) as [noOfSections, opt], i} 
                        <tr>
                            {#if i === 0}
                                <th rowspan={Object.keys(options).length} class="has-text-weight-bold is-size-4 has-text-right">
                                    {`${+(height/1000).toFixed(1)}`} m
                                </th>
                            {/if}

                            <td>{ noOfSections + ' Sections'}</td>
                            <td class="has-text-right">{opt.EH} mm</td>
                            <td class="has-text-right">{opt.NH} mm</td>
                            <td><a href="/pdm/engineering/configurator?qr={opt.QR}">{opt.Code}</a></td>
                        </tr>
                    {/each}
                {/each}

            </tbody>
        </table>

    </section>
</Layout>