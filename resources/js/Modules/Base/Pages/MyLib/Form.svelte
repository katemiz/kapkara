<script>
    import { useForm } from "@inertiajs/svelte";

    import Layout from "../../Shared/Layout.svelte";
    import Editor from "$components/Editor.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormSelect from "$components/FormSelect.svelte";
    import FilesList from "$components/FilesList.svelte";
    import FormUpload from "$components/FormUpload.svelte";

    import Title from "$components/Title.svelte";

    import { Save, Pencil, Trash, X, ChevronRight } from "@lucide/svelte";

    import { assets_config } from "$modules/Base/Shared/assets_config.js";

    let edContent = $state("<em>Your content will appear here...</em>");

    let { asset = null, isEdit = false, fixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = $derived(
        useForm({
            title: asset?.title ?? "",
            asset_type: String(asset?.asset_type ?? ""),
            assetFile: asset?.assetFile ?? null,
            remarks: asset?.remarks ?? "",
        }),
    );

    function submit(e) {
        console.log("The form object is:", $form);
        console.log("Form submitted:", $form.data());

        e.preventDefault();

        if (isEdit) {
            console.log("trying to edit");

            $form.put(`/mylib/${asset.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },
            });
        } else {
            console.log("trying to new");

            $form.post("/mylib", {
                onSuccess: () => {
                    console.log("Saved successfully!");
                    $form.reset();
                },
            });
        }
    }

    let asset_types = $derived(
        assets_config.asset_types.map((cat) => ({
            value: cat.value,
            label: cat["description"],
        })),
    );
</script>

<Layout>
    <section class="section">
        <Title
            title="My Digital Assets"
            subtitle={isEdit & (asset != null)
                ? "Edit Asset" + asset.id
                : "Create Asset"}
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
                    {#if isEdit & (asset != null)}
                        <a href="/mylib/{asset.id}" class="button">
                            <span class="icon">
                                <X size="16" />
                            </span>
                        </a>
                    {:else}
                        <a href="/mylib" class="button">
                            <span class="icon">
                                <X size="16" />
                            </span>
                        </a>
                    {/if}
                </p>
            </div>
        </nav>

        <form onsubmit={submit} class="">
            <div class="columns">
                <div class="column is-8">
                    <FormInput
                        {form}
                        name="title"
                        label="Asset Title"
                        placeholder="Enter a title"
                    />
                </div>
                <div class="column is-4">
                    <FormSelect
                        {form}
                        name="asset_type"
                        label="Asset Type"
                        placeholder="Select asset type"
                        options={asset_types}
                        required={true}
                        class="is-fullwidth"
                    />
                </div>
            </div>

            <div class="field">
                <label class="label" for="ed">Remarks</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.remarks = html)}
                        value={asset != null ? asset.remarks : ""}
                    />
                </div>
                {#if $form.errors.remarks}
                    <p class="help is-danger">
                        {$form.errors.remarks}
                    </p>
                {/if}
            </div>

            {#if isEdit && asset.files.length > 0}
                <FilesList media={asset.files} />
            {/if}

            <FormUpload
                {form}
                name="assetFile"
                label="Upload Files (PDF, DOCX, TXT)"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={100}
                showPreview={false}
            />

            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if isEdit & (asset != null)}
                    <a href="/mylib/{asset.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/mylib" class="button">
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
                    <span class="icon"><ChevronRight size="16" /></span>
                    <span>
                        {#if $form.processing}
                            "Submitting ..."
                        {:else}
                            {isEdit ? "Update" : "Create"} Asset
                        {/if}
                    </span>
                </button>
            </div>
        </form>
    </section>
</Layout>
