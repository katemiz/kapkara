<script>
    import { useForm } from "@inertiajs/svelte";

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Editor from "$components/Editor.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormSelect from "$components/FormSelect.svelte";
    import FilesList from "$components/FilesList.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";

    import FormUpload from "$components/FormUpload.svelte";

    import Title from "$components/Title.svelte";

    import { Save, Pencil, Trash, X, ChevronRight } from "@lucide/svelte";

    let {
        ecn = null,
        isEdit = false,
        supportFixedData,
        changeRequests,
    } = $props();

    // 1. Initialize the Inertia Form
    let form = useForm({
        change_request_id: ecn?.change_request_id ?? null,
        title: ecn?.title ?? "",
        description: ecn?.description ?? "",
        ecnFiles: ecn?.ecnFiles ?? null,
        status: ecn?.status ?? 1,
    });

    // If you need the form to update when the 'material' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (document && isEdit) {
            $form.defaults({
                change_request_id: ecn.id,
                title: ecn.title,
                description: ecn.description,
                ecnFiles: ecn.ecnFiles,
                status: ecn.status,
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
            $form.put(`/pdm/ecn/${crequest.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },

                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        } else {
            $form.post("/pdm/ecn", {
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
            title="Engineering Change Notices (ECN)"
            subtitle={isEdit & (ecn != null)
                ? "Edit Engineering Change Notice" + ecn.id
                : "Create a Engineering Change Notice"}
        />

        <ActionButtons
            {form}
            {isEdit}
            item={ecn}
            form_type="form"
            route_name="pdm/ecn"
        />

        {#if changeRequests.length > 0}
            <form onsubmit={submit} novalidate id="genericForm">
                <FormSelect
                    {form}
                    name="change_request_id"
                    label="Change Request"
                    placeholder="Select a Change Request"
                    options={changeRequests.map((cr) => ({
                        value: cr.id,
                        label: "CR-" + cr.id + ", " + cr.title,
                    }))}
                    required={true}
                />

                <FormInput
                    {form}
                    name="title"
                    label="Change Request Title"
                    placeholder="Enter Change Request Title"
                    required={true}
                />

                <div class="field">
                    <label class="label" for="ed"
                        >Detailed Engineering Change Request Description</label
                    >
                    <div class="control" id="ed">
                        <Editor
                            onUpdate={(html) => ($form.description = html)}
                            value={ecn != null ? ecn.description : ""}
                            placeholder="Detail engineering change actions here..."
                        />
                    </div>
                    {#if $form.errors.description}
                        <p class="help is-danger">
                            {$form.errors.description}
                        </p>
                    {/if}
                </div>

                {#if isEdit && ecn.files.length > 0}
                    <FilesList media={ecn.files} />
                {/if}

                <FormUpload
                    {form}
                    name="ecnFiles"
                    label="File Attachments"
                    accept=".pdf,.docx,.doc,.txt,.png"
                    multiple={true}
                    maxSize={10}
                    showPreview={false}
                />

                <div class="column buttons has-text-right">
                    <!-- Cancel Button -->
                    {#if isEdit & (ecn != null)}
                        <a href="/pdm/ecn/{ecn.id}" class="button">
                            <span class="icon"><X size="16" /></span>
                            <span>Cancel</span>
                        </a>
                    {:else}
                        <a href="/pdm/ecn" class="button">
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
                                {isEdit ? "Update" : "Create"} Engineering Change
                                Notice
                            {/if}
                        </span>
                        <span class="icon"><ChevronRight size="16" /></span>
                    </button>
                </div>
            </form>
        {:else}
            <div class="notification is-danger">
                <p>There are no change requests available.</p>
                <p>All ECNs have to be linked to a change request.</p>
                <p>
                    <a href="/pdm/crequest/create">Create a change request</a> to
                    link an ECN.
                </p>
            </div>
        {/if}
    </section>
</Layout>
