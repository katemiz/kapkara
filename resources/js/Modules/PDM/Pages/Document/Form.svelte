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

    let { standard = null, isEdit = false, supportFixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = useForm({
        organisation: standard?.organisation ?? "",
        standard_number: standard?.standard_number ?? "",
        description: standard?.description ?? "",
        stdFiles: standard?.stdFiles ?? null,
        remarks: standard?.remarks ?? "",
        isActive: standard?.is_active ?? 1,
    });

    // If you need the form to update when the 'material' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (standard && isEdit) {
            $form.defaults({
                organisation: standard.organisation,
                standard_number: standard.standard_number,
                description: standard.description,
                stdFiles: standard.stdFiles,
                remarks: standard.remarks,
                isActive: standard.is_active,
            });
        }
    });

    let organisations = $derived(
        supportFixedData.organisation.map((cat) => ({
            value: cat.value,
            label: cat["value"] + ' - ' + cat["description"],
        }))
    );

    function submit(e) {
        // console.log("The form object is:", $form);
        // console.log("Form data submitted:", $form.data());

        e.preventDefault();

        if (isEdit) {
            console.log("trying to edit");

            $form.put(`/pdm/standard/${standard.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },

                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        } else {
            console.log("trying to new");

            $form.post("/pdm/standard", {
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
            title="Standards"
            subtitle={isEdit & (standard != null)
                ? "Edit Standards" + standard.id
                : "Create a Standard"}
        />

        <ActionButtons
            {form}
            {isEdit}
            item={standard}
            form_type="form"
            route_name="pdm/standard"
        />



        <form onsubmit={submit} novalidate id="genericForm">

            <FormSelect
                {form}
                name="organisation"
                label="Product Organisation"
                placeholder="Select a Organisation"
                options={organisations}
                required={true}
            />

            <FormInput
                {form}
                name="standard_number"
                label="Standard Number"
                placeholder="Enter Standard Number"
                required={true}
            />

            <FormInput
                {form}
                name="description"
                label="Standard Description"
                placeholder="Enter Standard Description"
                required={true}
            />




            <div class="fixed-grid has-2-cols">
                <div class="grid">
                    <div class="cell">
                        <FormSelect
                            {form}
                            name="parameterIndicates"
                            label="Material Category"
                            placeholder="Select a category"
                            options={supportFixedData.materialCategories}
                            required={true}
                        />
                    </div>
                    <div class="cell">
                        <FormSelect
                            {form}
                            name="materialForm"
                            label="Material Form"
                            placeholder="Select a form"
                            options={supportFixedData.materialForms}
                            required={true}
                        />
                    </div>
                </div>
            </div>














            <div class="field">
                <label class="label" for="ed">Notes/Comments/Remarks</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.remarks = html)}
                        value={standard != null ? standard.remarks : ""}
                        placeholder="Enter any notes, comments, or remarks about the standard here..."
                    />
                </div>
                {#if $form.errors.remarks}
                    <p class="help is-danger">
                        {$form.errors.remarks}
                    </p>
                {/if}
            </div>

            {#if isEdit && standard.files.length > 0}
                <FilesList media={standard.files} />
            {/if}

            <FormUpload
                {form}
                name="stdFiles"
                label="File Attachments"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={10}
                showPreview={false}
            />

            <FormSelect
                {form}
                name="isActive"
                label="Standard Status (Active/Inactive)"
                placeholder="Select status"
                options={supportFixedData.is_active}
                required={true}
            />

            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if isEdit & (standard != null)}
                    <a href="/pdm/standard/{standard.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/pdm/standard" class="button">
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
                            {isEdit ? "Update" : "Create"} Standard
                        {/if}
                    </span>
                    <span class="icon"><ChevronRight size="16" /></span>
                </button>
            </div>
        </form>
    </section>
</Layout>
