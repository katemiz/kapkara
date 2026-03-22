<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import RecordData from "$components/RecordData.svelte";
    import FilesList from "$components/FilesList.svelte";
    import Title from "$components/Title.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    import { Sheet, Pencil, ClipboardPlus } from "@lucide/svelte";

    let { crequest } = $props();

    let url = $derived(window.location.origin + "/document/" + crequest.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Change Request" subtitle="Show Properties" />

        <ActionButtons
            item={crequest}
            form_type="show"
            route_name="pdm/crequest"
        />

        <p class="subtitle">
            {crequest.title}
        </p>
        <div>{@html crequest.description}</div>

        <FilesList media={crequest.files} />
        <RecordData item={crequest} {url} />
    </section>
</Layout>
