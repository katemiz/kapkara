<script>

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";

    import { config } from "$modules/PDM/Shared/config.js";

    import {
        Plus,
        Minus,
        Pi,
    } from "@lucide/svelte";

    let factorOfSafety = 1.5;
    let pressure = 2; // Bars
    let tubeBucklingLength = 3000; // mm

    function calculateMass(tube, length) {

        // Length is in m, area is in mm2, density is in kg/m3, mass will be in kg
        return (tube.area_mm2 * length * config.alum_6063_density) / 1000000; // kg
    }

    function getMomentCapacity(tube) {

        // Moment Capability
        // M = σ * I / y
        return config.alum_6063_yield_strength * tube.inertia_mm4 * 1e-9 / ( 0.5 * tube.od * factorOfSafety)
    }

    function getCriticalLoad(tube) {
        // Euler Column Critical Load Formula is used

        // Pcr = π^2EI/4L^2
        // E = Young's Modulus
        // I = Moment of Inertia
        // L = Length of the column
        // Pcr = Critical Load

        return 1e-6 * Math.pow( Math.PI, 2) * config.alum_6063_E * tube.inertia_mm4 / ( 4 * Math.pow(tubeBucklingLength, 2 ) * factorOfSafety);
    }

    function CalculateLiftCapacity(tube)
    {
        let inner_area = Math.PI * Math.pow(tube.od / 2 , 2); // mm2
        let pressure_in_MPa = 0.1 * pressure;

        return {
            "N" :pressure_in_MPa * inner_area,
            "kg":pressure_in_MPa * inner_area / 9.81
        }
    }

    function changeUpDown(type,direction) {

        if (type === 'pressure') {
            if (direction === 'up') {
                pressure += 0.1
            } else {
                pressure -= 0.1
            }
        }

        if (type === 'buckling_length') {
            if (direction === 'up') {
                tubeBucklingLength += 100
            } else {
                tubeBucklingLength -= 100
            }
        }
    }

</script>


<Layout>
    <section class="section content">

        <Title
            title="Masttech Tube Profiles"
            subtitle="All Rights Reserved © 2025"
        />

        <table class="table is-fullwidth my-6">
        <caption class="has-text-weight-bold has-text-centered mb-4 is-size-2">Tubes with Lips</caption>
            <thead>
                <tr>
                    <th class="has-text-left font-bold">#</th>
                    <th class="has-text-right">OD<br>(mm)</th>
                    <th class="has-text-right">ID<br>(mm)</th>
                    <th class="has-text-right">THK<br>(mm)</th>
                    <th class="has-text-right">Mass <br>(kg/m)</th>
                    <th class="has-text-right">
                        Moment<br>Capacity<br>
                        <span class="is-size-7">(Factor of Safety : {factorOfSafety})</span>
                        <br>(Nm)
                    </th>

                    <th class="has-text-centered has-background-white-ter" colspan="2">
                        Pneumatic<br>Load Capacity<sup>(1)</sup>
                        <br>

                        <div class="column">
                            <button class="button p-2" onclick={() => changeUpDown('pressure','down')}>
                                <span class="icon is-small">
                                    <Minus size="16" />
                                </span>
                            </button>
                            <span class="tag is-info">{ pressure.toFixed(1) } Bars</span>
                            <button class="button p-2" onclick={() => changeUpDown('pressure','up')}>
                                <span class="icon is-small">
                                    <Plus size="16" />
                                </span>
                            </button>
                        </div>

                    </th>

                    <th class="has-text-centered">
                        P<sub>cr</sub><sup>(2)</sup>
                        <br><br>
                        <div class="column">
                            <button class="button p-2" onclick={() => changeUpDown('buckling_length','down')}>
                                <span class="icon is-small">
                                    <Minus size="16" />
                                </span>
                            </button>
                            <span class="tag is-info">{ tubeBucklingLength.toFixed(0) } mm</span>
                            <button class="button p-2" onclick={() => changeUpDown('buckling_length','up')}>
                                <span class="icon is-small">
                                    <Plus size="16" />
                                </span>
                            </button>
                        </div>
                    </th>

                </tr>
            </thead>

            <tbody id="tableBody">

                {#each  config.tubes as tube,i}

                    <tr>
                        <th class="{tube.has_die ? 'has-background-success-light' : ''}">
                            MT-{String(tube.no).padStart(2, "0")}
                        </th>
                        <td class="has-text-right">{tube.od.toFixed(2)}</td>
                        <td class="has-text-right">{tube.id.toFixed(2)}</td>
                        <td class="has-text-right">{tube.thk.toFixed(1)}</td>
                        <td class="has-text-right">{calculateMass(tube, 1).toFixed(2)}</td>
                        <td class="has-text-right">{getMomentCapacity(tube).toFixed(0)} Nm</td>
                        <td class="has-text-right has-background-white-ter">{ CalculateLiftCapacity(tube).N.toFixed(0) } N</td>
                        <td class="has-text-right has-background-white-ter">{ (CalculateLiftCapacity(tube)).kg.toFixed(0) } kg</td>
                        <td class="has-text-right">{getCriticalLoad(tube).toFixed(0)} N</td>
                    </tr>

                {/each}

            </tbody>
        </table>

















        <table class="table is-fullwidth my-6">
        <caption class="has-text-weight-bold has-text-centered mb-4 is-size-2">Circular Tubes</caption>
            <thead>
                <tr>
                    <th class="has-text-left font-bold">#</th>
                    <th class="has-text-right">OD<br>(mm)</th>
                    <th class="has-text-right">ID<br>(mm)</th>
                    <th class="has-text-right">THK<br>(mm)</th>
                    <th class="has-text-right">Mass <br>(kg/m)</th>
                    <th class="has-text-right">
                        Moment<br>Capacity<br>
                        <span class="is-size-7">(Factor of Safety : {factorOfSafety})</span>
                        <br>(Nm)
                    </th>

                    <th class="has-text-centered has-background-white-ter" colspan="2">
                        Pneumatic<br>Load Capacity<sup>(1)</sup>
                        <br>

                        <div class="column">
                            <button class="button p-2" onclick={() => changeUpDown('pressure','down')}>
                                <span class="icon is-small">
                                    <Minus size="16" />
                                </span>
                            </button>
                            <span class="tag is-info">{ pressure.toFixed(1) } Bars</span>
                            <button class="button p-2" onclick={() => changeUpDown('pressure','up')}>
                                <span class="icon is-small">
                                    <Plus size="16" />
                                </span>
                            </button>
                        </div>

                    </th>

                    <th class="has-text-centered">
                        P<sub>cr</sub><sup>(2)</sup>
                        <br><br>
                        <div class="column">
                            <button class="button p-2" onclick={() => changeUpDown('buckling_length','down')}>
                                <span class="icon is-small">
                                    <Minus size="16" />
                                </span>
                            </button>
                            <span class="tag is-info">{ tubeBucklingLength.toFixed(0) } mm</span>
                            <button class="button p-2" onclick={() => changeUpDown('buckling_length','up')}>
                                <span class="icon is-small">
                                    <Plus size="16" />
                                </span>
                            </button>
                        </div>
                    </th>

                </tr>
            </thead>

            <tbody>

                {#each  config.circular_tubes as tube,i}

                    <tr>
                        <th class="{tube.has_die ? 'has-background-success-light' : ''}">
                            C-{String(tube.no).padStart(2, "0")}
                        </th>
                        <td class="has-text-right">{tube.od.toFixed(2)}</td>
                        <td class="has-text-right">{tube.id.toFixed(2)}</td>
                        <td class="has-text-right">{tube.thk.toFixed(1)}</td>
                        <td class="has-text-right">{calculateMass(tube, 1).toFixed(2)}</td>
                        <td class="has-text-right">{getMomentCapacity(tube).toFixed(0)} Nm</td>
                        <td class="has-text-right has-background-white-ter">{ CalculateLiftCapacity(tube).N.toFixed(0) } N</td>
                        <td class="has-text-right has-background-white-ter">{ (CalculateLiftCapacity(tube)).kg.toFixed(0) } kg</td>
                        <td class="has-text-right">{getCriticalLoad(tube).toFixed(0)} N</td>
                    </tr>

                {/each}
            </tbody>

        </table>













    </section>
</Layout>
