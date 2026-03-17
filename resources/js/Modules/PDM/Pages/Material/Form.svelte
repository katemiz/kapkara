<script>
    import { useForm } from "@inertiajs/svelte";
    import { page } from "@inertiajs/svelte";

    import Layout from "$shared/Layout.svelte";
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

    let { material = null, isEdit = false, supportFixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = useForm({
        materialCategory: material?.category ?? "",
        materialForm: material?.form ?? "",
        materialName: material?.description ?? "",
        materialSpecification: material?.specification ?? "",
        materialFiles: material?.materialFiles ?? null,
        materialNotes: material?.remarks ?? "",
        materialIsActive: material?.is_active ?? 1,
    });

    // If you need the form to update when the 'material' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (material && isEdit) {
            $form.defaults({
                materialCategory: material.category,
                materialForm: material.form,
                materialName: material.description,
                materialSpecification: material.specification,
                materialFiles: material.files,
                materialNotes: material.remarks,
                materialIsActive: material.is_active,
            });
        }
    });

    function submit(e) {
        // console.log("The form object is:", $form);
        console.log("Form data submitted:", $form.data());

        e.preventDefault();

        if (isEdit) {
            console.log("trying to edit");

            $form.put(`/material/${material.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },

                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        } else {
            console.log("trying to new");

            $form.post("/material", {
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
            title="Materials"
            subtitle={isEdit & (material != null)
                ? "Edit Material Definition" + material.id
                : "Create a Material Definition"}
        />

        <ActionButtons
            {form}
            {isEdit}
            item={material}
            form_type="form"
            route_name="material"
        />

        <form onsubmit={submit} novalidate id="genericForm">
            <div class="fixed-grid has-2-cols">
                <div class="grid">
                    <div class="cell">
                        <FormSelect
                            {form}
                            name="materialCategory"
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

            <FormInput
                {form}
                name="materialName"
                label="Material Name/Description"
                placeholder="Enter material Name/Description"
                required={true}
            />

            <FormInput
                {form}
                name="materialSpecification"
                label="Material Specification"
                placeholder="Enter material specification"
            />

            <div class="field">
                <label class="label" for="ed">Notes/Comments/Remarks</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.materialNotes = html)}
                        value={material != null ? material.remarks : ""}
                        placeholder="Enter any notes, comments, or remarks about the material here..."
                    />
                </div>
                {#if $form.errors.materialNotes}
                    <p class="help is-danger">
                        {$form.errors.materialNotes}
                    </p>
                {/if}
            </div>

            {#if isEdit && material.files.length > 0}
                <FilesList media={material.files} />
            {/if}

            <FormUpload
                {form}
                name="materialFiles"
                label="File Attachments"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={10}
                showPreview={false}
            />

            <FormSelect
                {form}
                name="materialIsActive"
                label="Material Status (Active/Inactive)"
                placeholder="Select status"
                options={supportFixedData.materialIsActive}
                required={true}
            />

            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if isEdit & (material != null)}
                    <a href="/material/{material.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/material" class="button">
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
                            {isEdit ? "Update" : "Create"} Material
                        {/if}
                    </span>
                    <span class="icon"><ChevronRight size="16" /></span>
                </button>
            </div>
        </form>
    </section>
</Layout>
