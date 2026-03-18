<script>
    import { useForm } from "@inertiajs/svelte";
    import { page } from "@inertiajs/svelte";

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Editor from "$components/Editor.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormSelect from "$components/FormSelect.svelte";
    import FilesList from "$components/FilesList.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";

    import FormRadio from "$components/FormRadio.svelte";
    import FormCheckBoxSingle from "$components/FormCheckBoxSingle.svelte";
    import FormCheckBoxMultiple from "$components/FormCheckBoxMultiple.svelte";
    import FormDate from "$components/FormDate.svelte";
    import FormUpload from "$components/FormUpload.svelte";

    import Title from "$components/Title.svelte";

    import { Save, Pencil, Trash, X, ChevronRight } from "@lucide/svelte";

    let { product_note = null, isEdit = false, supportFixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = useForm({
        pnCategory: product_note?.category ?? "",
        description_tr: product_note?.description_tr ?? "",
        description_en: product_note?.description_en ?? "",
        pnFiles: product_note?.materialFiles ?? null,
        pnNotes: product_note?.remarks ?? "",
        productNoteIsActive: product_note?.is_active ?? 1,
    });

    // If you need the form to update when the 'material' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (product_note && isEdit) {
            $form.defaults({
                pnCategory: product_note.category,
                description_tr: product_note.description_tr,
                description_en: product_note.description_en,
                pnFiles: product_note.materialFiles,
                pnNotes: product_note.remarks,
                productNoteIsActive: product_note.is_active,
            });
        }
    });

    let pnCategories = $derived(
        supportFixedData.productNoteCategories.map((cat) => ({
            value: cat.value,
            label: cat["description_en"] + ' / ' + cat["description_tr"],
        }))
    );

    function submit(e) {
        // console.log("The form object is:", $form);
        console.log("Form data submitted:", $form.data());

        e.preventDefault();

        if (isEdit) {
            console.log("trying to edit");

            $form.put(`/pdm/product-note/${product_note.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },

                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        } else {
            console.log("trying to new");

            $form.post("/pdm/product-note", {
                onSuccess: () => {
                    console.log("Saved successfully!");
                    $form.reset();
                },

                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        }
    }
</script>

<Layout>
    <section class="section container min-height-screen">
        <!-- <pre class="has-background-warning">
        Errors: {JSON.stringify($page.props.errors, null, 2)}
        All Page Props: {JSON.stringify($page.props.material, null, 2)}
        </pre> -->

        <Title
            title="Product Notes"
            subtitle={isEdit & (product_note != null)
                ? "Edit Product Note" + product_note.id
                : "Create a Product Note"}
        />

        <ActionButtons
            {form}
            {isEdit}
            item={product_note}
            form_type="form"
            route_name="pdm/product-note"
        />



        <form onsubmit={submit} novalidate id="genericForm">

            <FormSelect
                {form}
                name="pnCategory"
                label="Product Note Category"
                placeholder="Select a category"
                options={pnCategories}
                required={true}
            />

            <FormInput
                {form}
                name="description_tr"
                label="Product and Process Note (Türkçe)"
                placeholder="Enter Product and Process Note (Türkçe)"
                required={true}
            />

            <FormInput
                {form}
                name="description_en"
                label="Product and Process Note (English)"
                placeholder="Enter Product and Process Note (English)"
                required={true}
            />

            <div class="field">
                <label class="label" for="ed">Notes/Comments/Remarks</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.pnNotes = html)}
                        value={product_note != null ? product_note.remarks : ""}
                        placeholder="Enter any notes, comments, or remarks about the product note here..."
                    />
                </div>
                {#if $form.errors.pnNotes}
                    <p class="help is-danger">
                        {$form.errors.pnNotes}
                    </p>
                {/if}
            </div>

            {#if isEdit && product_note.files.length > 0}
                <FilesList media={product_note.files} />
            {/if}

            <FormUpload
                {form}
                name="pnFiles"
                label="File Attachments"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={10}
                showPreview={false}
            />

            <FormSelect
                {form}
                name="productNoteIsActive"
                label="Product Note Status (Active/Inactive)"
                placeholder="Select status"
                options={supportFixedData.productNoteIsActive}
                required={true}
            />

            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if isEdit & (product_note != null)}
                    <a href="/pdm/product-note/{product_note.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/pdm/product-note" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {/if}

                <!-- Form Submit Button -->
                <button
                    type="submit"
                    class="button is-link"
                    disabled={$form.processing}
                >
                    <span>
                        {#if $form.processing}
                            "Submitting ..."
                        {:else}
                            {isEdit ? "Update" : "Create"} Product Note
                        {/if}
                    </span>
                    <span class="icon"><ChevronRight size="16" /></span>
                </button>
            </div>
        </form>
    </section>
</Layout>
