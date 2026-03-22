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

    let { crequest = null, isEdit = false, supportFixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = useForm({
        title: crequest?.title ?? "",
        description: crequest?.description ?? "",
        crFiles: crequest?.docFiles ?? null,
        status: crequest?.status ?? 1,
    });

    // If you need the form to update when the 'material' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (document && isEdit) {
            $form.defaults({
                title: crequest.title,
                description: crequest.description,
                crFiles: crequest.docFiles,
                status: crequest.status,
            });
        }
    });

    let status = $derived(
        supportFixedData.status.map((cat) => ({
            value: cat.value,
            label: cat["description"],
        })),
    );

    function submit(e) {
        // console.log("The form object is:", $form);
        // console.log("Form data submitted:", $form.data());

        e.preventDefault();

        if (isEdit) {
            $form.put(`/pdm/crequest/${crequest.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },

                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        } else {
            $form.post("/pdm/crequest", {
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
            title="Requests"
            subtitle={isEdit & (crequest != null)
                ? "Edit Request" + crequest.id
                : "Create a Request"}
        />

        <ActionButtons
            {form}
            {isEdit}
            item={crequest}
            form_type="form"
            route_name="pdm/request"
        />

        <form onsubmit={submit} novalidate id="genericForm">
            <FormInput
                {form}
                name="title"
                label="Change Request Title"
                placeholder="Enter Change Request Title"
                required={true}
            />

            <div class="field">
                <label class="label" for="ed"
                    >Detailed Change Request Descrition</label
                >
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.description = html)}
                        value={crequest != null ? crequest.description : ""}
                        placeholder="Detail change request description here..."
                    />
                </div>
                {#if $form.errors.description}
                    <p class="help is-danger">
                        {$form.errors.description}
                    </p>
                {/if}
            </div>

            {#if isEdit && crequest.files.length > 0}
                <FilesList media={crequest.files} />
            {/if}

            <FormUpload
                {form}
                name="crFiles"
                label="File Attachments"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={10}
                showPreview={false}
            />

            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if isEdit & (crequest != null)}
                    <a href="/pdm/crequest/{crequest.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/pdm/crequest" class="button">
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
                            {isEdit ? "Update" : "Create"} Change Request
                        {/if}
                    </span>
                    <span class="icon"><ChevronRight size="16" /></span>
                </button>
            </div>
        </form>
    </section>
</Layout>
