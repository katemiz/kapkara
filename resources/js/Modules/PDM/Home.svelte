<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";

    import { KAPKARA } from "$lib/config";


    let content = {
        motto1: "Be Agile",
        motto2: "Run Agile",
        title: "PDM - Product Data Management",
        konular:[
            {
                title: "Data-Driven Success",
                description: "PDM empowers businesses by organizing, tracking, and optimizing product-related data. Success lies in harnessing this data effectively."
            },
            {
                title: "Data Make Sense",
                description: "PDM bridges the gap between raw information and actionable insights, leading to successful product development."
            },
            {
                title: "Order in Your Data World",
                description: "PDM brings structure and clarity, ensuring seamless collaboration across teams."
            }
        ]
    }
</script>

<svelte:head>
    <title>{KAPKARA.name}, {KAPKARA.description}</title>
</svelte:head>

<Layout>

    <section class="section">

        <div class="columns">

            <div class="column is-5 ">


                <Title title="{content.motto1}" css1="is-size-1 has-text-weight-light mb-1"/>
                <Title title="{content.motto2}" css1="is-size-1 has-text-weight-light mt-1"/>



                {#each content.konular as konu }
                <article class="message  has-background-white">
                <div class="message-body">
                    <strong>{konu.title}</strong>
                    <br><br>
                    {konu.description}
                </div>
                </article>
                {/each }

            </div>

            <div class="column">
                <Title title="{content.title}" css1="is-size-4 has-text-weight-light mb-6 has-text-right"/>

                <figure class="image ">
                    <img src="images/PDM/hero2.png" alt="PDM Hero">
                </figure>
            </div>
        </div>

    </section>

</Layout>
