<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import RecordData from "$components/RecordData.svelte";
    import FilesList from "$components/FilesList.svelte";
    import Title from "$components/Title.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    import { Sheet, Pencil, ClipboardPlus } from "@lucide/svelte";

    let { ecn } = $props();

    let url = $derived(window.location.origin + "/ecn/" + ecn.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title
            title="Engineering Change Notice"
            subtitle="Show ECN Properties"
        />

        <ActionButtons item={ecn} form_type="show" route_name="pdm/ecn" />

        <p class="subtitle">
            {ecn.title}
        </p>
        <div>{@html ecn.description}</div>

        <FilesList media={ecn.files} />
        <RecordData item={ecn} {url} />
    </section>
</Layout>
