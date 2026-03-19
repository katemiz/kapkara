<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import RecordData from "$components/RecordData.svelte";
    import FilesList from "$components/FilesList.svelte";
    import Title from "$components/Title.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    import { Sheet, Pencil, ClipboardPlus } from "@lucide/svelte";

    let { standard } = $props();

    let url = $derived(window.location.origin + "/standard/" + standard.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Standard" subtitle="Show Properties" />

        <ActionButtons item={standard} form_type="show" route_name="pdm/standard" />

        <p class="subtitle">{standard.organisation} {standard.standard_number}</p>
        <p>{standard.description}</p>
        <p>{@html standard.remarks}</p>

        <FilesList media={standard.files} />
        <RecordData item={standard} {url} />
    </section>
</Layout>
