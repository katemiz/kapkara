<script>
    import Layout from "../../Shared/Layout.svelte";
    import RecordData from "$lib/components/RecordData.svelte";
    import FilesList from "$lib/components/FilesList.svelte";
    import Title from "$lib/components/Title.svelte";
    import ActionButtons from "../../lib/components/ActionButtons.svelte";
    import DeleteButton from "$lib/components/DeleteButton.svelte";

    import { Sheet, Pencil, ClipboardPlus } from "@lucide/svelte";

    let { material } = $props();

    let url = $derived(window.location.origin + "/material/" + material.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Material {material.id}" subtitle="Show Properties" />

        <ActionButtons item={material} form_type="show" route_name="material" />

        <p class="subtitle">{material.description}</p>
        <p>{@html material.remarks}</p>

        <FilesList media={material.files} />
        <RecordData item={material} {url} />
    </section>
</Layout>
