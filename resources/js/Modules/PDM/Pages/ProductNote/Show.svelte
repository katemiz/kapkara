<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import RecordData from "$components/RecordData.svelte";
    import FilesList from "$components/FilesList.svelte";
    import Title from "$components/Title.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    import { Sheet, Pencil, ClipboardPlus } from "@lucide/svelte";

    let { product_note } = $props();

    let url = $derived(window.location.origin + "/product-note/" + product_note.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Product Note {product_note.id}" subtitle="Show Properties" />

        <ActionButtons item={product_note} form_type="show" route_name="pdm/product-note" />

        <p class="subtitle">{product_note.description_tr}</p>
        <p>{@html product_note.remarks}</p>

        <FilesList media={product_note.files} />
        <RecordData item={product_note} {url} />
    </section>
</Layout>
