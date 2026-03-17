<script>
    import Layout from "$modules/Requirements/Shared/Layout.svelte";
    import Title from "$components/Title.svelte"

    import {
        House,
        HandHelping,
        Users,
        UsersRound,
        ContactRound,
        User,
        LogOut,
        Database,
        Bird,
        Box,
        HatGlasses,
        Key,
        Factory,
    } from "@lucide/svelte";


    let words = {
        requirements: {
            label: "Requirements",
            li:[
                "Write requirements content",
                "Link with MOCs and POCs",
                "Link with products",
            ],
        },
        mocs: {
            label: "Means of Compliances (MoCs)",
            li: [
                "List of MoCs",
                "Define MoC"
            ]
        },
        pocs: {
            label: "Proof of Compliances (PoCs)",
            li: [
                "List of POCs",
                "Define POC"
            ]
        },
        tests: {
            label: "Tests",
            li: [
                "List of Tests",
                "Define Test"
            ]
        },
        export: {
            label: "Export/Reporting/Status",
            li: [
                "Export Data",
                "Generate Reports",
                "View Status"
            ]
        }
    }
</script>

<svelte:head>
    <title>The Toolkit That Connects</title>
</svelte:head>





<Layout>
    <section class="section container">

        <div class="fixed-grid">
        <div class="grid">
            <div class="cell">
                <h1 class="title has-text-weight-light is-size-1 has-text-left">Requirements Stack</h1>
                <img src="/images/Requirements/AppHeroReq.svg" alt="Logo" />
            </div>

            <div class="cell">

                <Title title="The Toolkit That Connects" />

                <p class="mb-4 is-size-5">
                    This toolkit focuses on the relationships between datasets of The Requirements Flow letting you extract all relations between nodes.
                </p>

                <div class="fixed-grid has-1-cols has-1-cols-mobile">
                <div class="grid">

                    {#each Object.keys(words) as key}
                        <div class="cell notification content">
                            <Title subtitle="{words[key].label}" css2="has-text-danger-dark has-text-weight-light"/>
                            <ul>
                                {#each words[key].li as li}
                                    <li>{li}</li>
                                {/each}
                            </ul>
                        </div>
                    {/each}

                </div>
                </div>

            </div>
        </div>
        </div>

    </section>
</Layout>

