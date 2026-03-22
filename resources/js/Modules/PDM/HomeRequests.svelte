<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";

    import Title from "$components/Title.svelte";
</script>

<Layout>
    <section class="section container min-height-screen">
        <Title
            title="Change Requests"
            subtitle="Requests and Approval Process"
        />

        <div class="columns">
            <div class="column is-3">
                <aside class="menu">
                    <p class="menu-label">General</p>
                    <ul class="menu-list">
                        <li><a href="/pdm/request">Change Request</a></li>
                        <li><a href="/pdm/ecn">ECN</a></li>
                    </ul>
                </aside>
            </div>

            <div class="column">
                <figure class="image">
                    <img
                        src="/images/PDM/CRFlow.svg"
                        alt="Change Request Flow"
                    />
                </figure>
            </div>
        </div>
    </section>
</Layout>
