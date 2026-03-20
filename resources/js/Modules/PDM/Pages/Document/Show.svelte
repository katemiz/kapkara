<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import RecordData from "$components/RecordData.svelte";
    import FilesList from "$components/FilesList.svelte";
    import Title from "$components/Title.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    import { Sheet, Pencil, ClipboardPlus } from "@lucide/svelte";

    let { document } = $props();

    let url = $derived(window.location.origin + "/document/" + document.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Documents" subtitle="Show Properties" />

        <ActionButtons
            item={document}
            form_type="show"
            route_name="pdm/document"
        />

        <p class="subtitle">
            {document.organisation}
            {document.standard_number}
        </p>
        <p>{document.description}</p>
        <p>{@html document.remarks}</p>

        <FilesList media={document.files} />
        <RecordData item={document} {url} />
    </section>
</Layout>
