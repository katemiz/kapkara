<script>
    import { useForm } from "@inertiajs/svelte";

    import Layout from "../../Shared/Layout.svelte";
    import Editor from "$lib/components/Editor.svelte";
    import FormRadio from "$lib/components/FormRadio.svelte";
    import FormCheckBoxSingle from "$lib/components/FormCheckBoxSingle.svelte";
    import FormCheckBoxMultiple from "$lib/components/FormCheckBoxMultiple.svelte";
    import FormUpload from "$lib/components/FormUpload.svelte";

    import Title from "$lib/components/Title.svelte";

    import { Save, Pencil, Trash, X } from "@lucide/svelte";

    let edContent = $state("<em>Your content will appear here...</em>");

    let { question, answer = null, isEdit = false, fixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = $derived(
        useForm({
            questionId: question.id,
            myInput: answer?.myInput ?? "",
            mySelect: String(answer?.mySelect ?? ""),
            isCorrect: String(answer?.isCorrect ?? 0),
            myCheckboxSingle: answer?.myCheckboxSingle ?? false,
            myCheckboxMultiple: answer?.myCheckboxMultiple ?? [],
            myDate: answer?.myDate ?? "",
            myDateTime: answer?.myDateTime ?? "",
            myUpload: answer?.myUpload ?? null,
            myEditorText: answer?.myEditorText ?? "",
        }),
    );

    // // Compute options for level 2 based on level 1 selection
    // let level2Options = $derived(
    //     $form.myStepLevel1
    //         ? fixedData.cascadedData.level2[$form.myStepLevel1] || []
    //         : [],
    // );

    // // Compute options for level 3 based on level 2 selection
    // let level3Options = $derived(
    //     $form.myStepLevel2
    //         ? fixedData.cascadedData.level3[$form.myStepLevel2] || []
    //         : [],
    // );

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
        <Title
            title="Answer Option for Question"
            subtitle={isEdit & (answer != null)
                ? "Edit Answer" + answer.id
                : "Add Answer for Question"}
        />

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a
                        href="/question"
                        class="button is-link is-inverted is-outlined"
                    >
                        <span class="icon is-small">
                            <Save size="16" />
                        </span>
                    </a>
                </p>
            </div>

            <!-- Right side -->
            <div class="level-right">
                <p class="buttons">
                    {#if isEdit & (answer != null)}
                        <a href="/question/{answer.id}" class="button">
                            <span class="icon">
                                <X size="16" />
                            </span>
                        </a>
                    {:else}
                        <a href="/question" class="button">
                            <span class="icon">
                                <X size="16" />
                            </span>
                        </a>
                    {/if}
                </p>
            </div>
        </nav>

        <form onsubmit={submit} class="">
            <div class="field">
                <label class="label" for="info">Question {question.id}</label>

                <div class="notification">
                    {@html question.myEditorText}
                </div>
            </div>

            <div class="field">
                <label class="label" for="ed">Content (myEditorText)</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.myEditorText = html)}
                        value={answer != null
                            ? answer.myEditorText
                            : "Enter Answer Content here..."}
                    />
                </div>
                {#if $form.errors.myEditorText}
                    <p class="help is-danger">
                        {$form.errors.myEditorText}
                    </p>
                {/if}
            </div>

            <FormRadio
                {form}
                name="isCorrect"
                label="Is this the correct answer?"
                options={fixedData.radioOptions}
            />

            <!-- <FormCheckBoxSingle
                {form}
                name="myCheckboxSingle"
                label="I agree to the terms and conditions"
            />

            <FormCheckBoxMultiple
                {form}
                name="myCheckboxMultiple"
                label="Select your interests"
                options={fixedData.checkboxOptions}
            /> -->

            <FormUpload
                {form}
                name="myUpload"
                label="Upload Documents (PDF, DOCX, TXT)"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={10}
                showPreview={false}
            />

            <div class="column has-text-right">
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
    </section>
</Layout>
