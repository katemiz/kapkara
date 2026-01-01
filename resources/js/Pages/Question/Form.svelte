<script>
    import { useForm } from "@inertiajs/svelte";

    import Layout from "../../Shared/Layout.svelte";
    import Editor from "$lib/components/Editor.svelte";
    import FormInput from "$lib/components/FormInput.svelte";
    import FormSelect from "$lib/components/FormSelect.svelte";
    import FormRadio from "$lib/components/FormRadio.svelte";
    import FormCheckBoxSingle from "$lib/components/FormCheckBoxSingle.svelte";
    import FormCheckBoxMultiple from "$lib/components/FormCheckBoxMultiple.svelte";
    import FormDate from "$lib/components/FormDate.svelte";
    import FormUpload from "$lib/components/FormUpload.svelte";

    let edContent = $state("<em>Your content will appear here...</em>");

    let { question = null, isEdit = false, fixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = $derived(
        useForm({
            myInput: question?.myInput ?? "",
            mySelect: String(question?.mySelect ?? ""),
            myRadio: String(question?.myRadio ?? ""),
            myCheckboxSingle: question?.myCheckboxSingle ?? false,
            myCheckboxMultiple: question?.myCheckboxMultiple ?? [],
            myDate: question?.myDate ?? "",
            myDateTime: question?.myDateTime ?? "",
            myUpload: question?.myUpload ?? null,
            myStepLevel1: question?.myStepLevel1 ?? "",
            myStepLevel2: question?.myStepLevel2 ?? "",
            myStepLevel3: question?.myStepLevel3 ?? "",
            myEditorText: question?.myEditorText ?? "",
        }),
    );

    // Compute options for level 2 based on level 1 selection
    let level2Options = $derived(
        $form.myStepLevel1
            ? fixedData.cascadedData.level2[$form.myStepLevel1] || []
            : [],
    );

    // Compute options for level 3 based on level 2 selection
    let level3Options = $derived(
        $form.myStepLevel2
            ? fixedData.cascadedData.level3[$form.myStepLevel2] || []
            : [],
    );

    function submit(e) {
        console.log("The form object is:", $form);
        console.log("Form submitted:", $form.data());
        // alert(`Selected: ${$form.myStepLevel1} > ${$form.myStepLevel2} > ${$form.myStepLevel3}`);

        e.preventDefault();

        if (isEdit) {
            console.log("trying to edit");

            $form.put(`/question/${question.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },
            });
        } else {
            console.log("trying to new");

            $form.post("/question", {
                onSuccess: () => {
                    console.log("Saved successfully!");
                    $form.reset();
                },
            });
        }
    }
</script>

<Layout>
    <section class="section">
        <div class="container">
            <div class="fixed-grid has-2-cols">
                <div class="grid has-background-warning">
                    <div class="cell">
                        <h1 class="title">
                            {isEdit & (question != null)
                                ? "Edit Question" + question.id
                                : "Create Question"}
                        </h1>
                    </div>
                    <div class="cell has-text-right">
                        <a href="/question">Back</a>
                    </div>
                </div>
            </div>

            <form onsubmit={submit} class="box">
                <FormInput
                    {form}
                    name="myInput"
                    label="Title (myInput)"
                    placeholder="Enter a title"
                />

                <FormSelect
                    {form}
                    name="mySelect"
                    label="Title (mySelect)"
                    placeholder="Enter a title"
                    options={fixedData.dpOptions}
                    required={true}
                />

                <FormRadio
                    {form}
                    name="myRadio"
                    label="Gender"
                    options={fixedData.radioOptions}
                />

                <FormCheckBoxSingle
                    {form}
                    name="myCheckboxSingle"
                    label="I agree to the terms and conditions"
                />

                <FormCheckBoxMultiple
                    {form}
                    name="myCheckboxMultiple"
                    label="Select your interests"
                    options={fixedData.checkboxOptions}
                />

                <FormDate
                    {form}
                    name="myDate"
                    label="Pick a Date"
                    lang="en"
                    timepicker={false}
                    onlyTimepicker={false}
                />

                <FormDate
                    {form}
                    name="myDateTime"
                    label="Pick Date & Time"
                    placeholder="Select date and time"
                    lang="en"
                    timepicker={true}
<<<<<<< HEAD
                    onlyTimepicker={true}
=======
                    onlyTimepicker={false}
>>>>>>> 283a9f2 (Added authentication with fortify)
                />

                <FormUpload
                    {form}
                    name="myUpload"
                    label="Upload Documents (PDF, DOCX, TXT)"
                    accept=".pdf,.docx,.doc,.txt,.png"
                    multiple={true}
                    maxSize={10}
                    showPreview={false}
                />

                <div class="fixed-grid has-3-cols">
                    <div class="grid">
                        <div class="cell">
                            <!-- Level 1: Main Category -->
                            <FormSelect
                                {form}
                                name="myStepLevel1"
                                label="Category"
                                options={fixedData.cascadedData.level1}
                                onchange={() => {
                                    $form.myStepLevel2 = ""; // Manually clear
                                    $form.myStepLevel3 = "";

                                    console.log(
                                        "ON CHANGE",
                                        $form.myStepLevel1,
                                    );
                                }}
                            />
                        </div>

                        <div class="cell">
                            <!-- Level 2: Subcategory -->
                            <FormSelect
                                {form}
                                name="myStepLevel2"
                                label="Subcategory"
                                options={level2Options}
                                placeholder={$form.myStepLevel1
                                    ? "Select subcategory"
                                    : "Select a category first"}
                                disabled={!$form.myStepLevel1}
                                required={true}
                                onchange={() => {
                                    $form.myStepLevel3 = ""; // Manually clear
                                }}
                            />
                        </div>

                        <div class="cell">
                            <!-- Level 3: Item -->
                            <FormSelect
                                {form}
                                name="myStepLevel3"
                                label="Item"
                                options={level3Options}
                                placeholder={$form.myStepLevel2
                                    ? "Select item"
                                    : "Select a subcategory first"}
                                disabled={!$form.myStepLevel2}
                                required={true}
                            />
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label" for="ed">Content (myEditorText)</label>
                    <div class="control" id="ed">
                        <Editor
                            onUpdate={(html) => ($form.myEditorText = html)}
                            value={question != null
                                ? question.myEditorText
                                : ""}
                        />
                    </div>
                    {#if $form.errors.myEditorText}
                        <p class="help is-danger">
                            {$form.errors.myEditorText}
                        </p>
                    {/if}
                </div>

                <div class="control">
                    <button
                        type="submit"
                        class="button is-link"
                        disabled={$form.processing}
                    >
                        {#if $form.processing}
                            "Submitting ..."
                        {:else}
                            {isEdit ? "Update" : "Create"} Question
                        {/if}
                    </button>
                </div>
            </form>
        </div>
    </section>
</Layout>
