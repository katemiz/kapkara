<script>
    import { useForm } from "@inertiajs/svelte";
    import { page } from "@inertiajs/svelte";

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Editor from "$components/Editor.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormSelect from "$components/FormSelect.svelte";
    import FilesList from "$components/FilesList.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";

    import FormUpload from "$components/FormUpload.svelte";

    import Title from "$components/Title.svelte";

    import { Save, Pencil, Trash, X, ChevronRight } from "@lucide/svelte";

    let { document = null, isEdit = false, supportFixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = useForm({
        doc_type: document?.doc_type ?? "",
        document_no: document?.document_no ?? "",
        description: document?.description ?? "",
        docFiles: document?.docFiles ?? null,
        remarks: document?.remarks ?? "",
        status: document?.status ?? 1,
    });

    // If you need the form to update when the 'material' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (document && isEdit) {
            $form.defaults({
                doc_type: document.doc_type,
                document_no: document.document_no,
                description: document.description,
                docFiles: document.docFiles,
                remarks: document.remarks,
                status: document.status,
            });
        }
    });

    let doc_types = $derived(
        supportFixedData.doc_types.map((cat) => ({
            value: cat.value,
            label: cat["description"],
        })),
    );

    function submit(e) {
        // console.log("The form object is:", $form);
        // console.log("Form data submitted:", $form.data());

        e.preventDefault();

        if (isEdit) {
            $form.put(`/pdm/document/${document.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },

                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        } else {
            $form.post("/pdm/document", {
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
            title="Documents"
            subtitle={isEdit & (document != null)
                ? "Edit Document" + document.id
                : "Create a Document"}
        />

        <ActionButtons
            {form}
            {isEdit}
            item={document}
            form_type="form"
            route_name="pdm/document"
        />

        <form onsubmit={submit} novalidate id="genericForm">
            <FormSelect
                {form}
                name="doc_type"
                label="Document Type"
                placeholder="Select a Document Type"
                options={doc_types}
                required={true}
            />

            <FormInput
                {form}
                name="description"
                label="Document Description"
                placeholder="Enter Document Description"
                required={true}
            />

            <div class="field">
                <label class="label" for="ed">Notes/Comments/Remarks</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.remarks = html)}
                        value={document != null ? document.remarks : ""}
                        placeholder="Enter any notes, comments, or remarks about the document here..."
                    />
                </div>
                {#if $form.errors.remarks}
                    <p class="help is-danger">
                        {$form.errors.remarks}
                    </p>
                {/if}
            </div>

            {#if isEdit && document.files.length > 0}
                <FilesList media={document.files} />
            {/if}

            <FormUpload
                {form}
                name="docFiles"
                label="File Attachments"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={10}
                showPreview={false}
            />

            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if isEdit & (document != null)}
                    <a href="/pdm/document/{document.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/pdm/document" class="button">
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
                            {isEdit ? "Update" : "Create"} Document
                        {/if}
                    </span>
                    <span class="icon"><ChevronRight size="16" /></span>
                </button>
            </div>
        </form>
    </section>
</Layout>
