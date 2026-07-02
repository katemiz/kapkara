<script>
    import { useForm } from "@inertiajs/svelte";
    import { untrack } from "svelte";

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Editor from "$components/Editor.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormSelect from "$components/FormSelect.svelte";
    import FilesList from "$components/FilesList.svelte";
    import FilterSelect from "$components/FilterSelect.svelte";
    import FormUpload from "$components/FormUpload.svelte";
    import Title from "$components/Title.svelte";

    import { Save, X, ChevronRight } from "@lucide/svelte";

    let { item = null, results = [] } = $props();
    import { items_config } from "$modules/PDM/Shared/items_config.js";
    import { router } from "@inertiajs/svelte";

    // 1. Initialize the Inertia Form
    let form = useForm(untrack(() => ({
        item_type: item?.item_type ?? "Part",
        number: item?.number ?? "",
        title: item?.title ?? "",
        itemfiles: item?.files ?? null,
        make_from_part_id: item?.make_from_part_id ?? null,
        remarks: item?.remarks ?? "",
        status: item?.status ?? 1,
    })));

    // If you need the form to update when the prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (item) {
            $form.defaults({
                item_type: item.item_type,
                number: item.number,
                title: item.title,
                itemfiles: item.files,
                make_from_part_id: item.make_from_part_id,
                remarks: item.remarks,
                status: item.status,
            });
        }

    });



    let item_types = $derived(
        items_config.item_types.map((cat) => ({
            value: cat.value,
            label: cat["description"],
        })),
    );

    function submit(e) {

        // console.log("The form object is:", $form);
        console.log("Form data submitted:", $form.data());

        // Check if files exist and have items
        /*     
        if ($form.itemfiles && $form.itemfiles.length > 0) {
                console.log("📂 Files to be uploaded:");
                
                // Convert FileList to a standard Array to cleanly iterate over it
                Array.from($form.itemfiles).forEach((file, index) => {
                    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
                    console.log(`  [${index + 1}] 📄 ${file.name} (${sizeInMB} MB) - Type: ${file.type}`);
                });
            } else {
                console.log("📂 No files selected for upload.");
            }
        */









        e.preventDefault();

        if (item) {
            // Use .post() instead of .put() to support multipart file data, 
            // and let Inertia spoof the PUT method via query parameter or options object
            $form.post(`/pdm/item/${item.id}`, {
                headers: {
                    'X-HTTP-Method-Override': 'PUT'
                },
                // Alternatively, depending on your Inertia adapter configuration, 
                // you can pass `_method: 'PUT'` directly inside your form dataset.
                queryParams: {
                    _method: 'PUT'
                },
                onSuccess: () => {
                    //console.log("Updated successfully!");
                },
                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        } else {
            $form.post("/pdm/item", {
                onSuccess: () => {
                // console.log("Saved successfully!");
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

        <div class="columns">
            <div class="column is-10">
                <Title
                    title="Parts/Products/Components"
                    subtitle={item != null
                        ? "Edit Parts/Products/Components " + item.number
                        : "Create a Parts/Products/Components"}
                />
            </div>

            <div class="column has-text-right">
                <button
                    type="submit"
                    form="genericForm"
                    class="button is-dark"
                >
                    <span class="icon is-small">
                        <Save size="20" />
                    </span>
                </button>

                {#if item != null}
                    <a href="/pdm/item/{item.id}" class="button">
                        <span class="icon">
                            <X size="20" />
                        </span>
                    </a>
                {:else}
                    <a href="/pdm/item" class="button">
                        <span class="icon">
                            <X size="20" />
                        </span>
                    </a>
                {/if}
                
            </div>
        </div>


        {#if item}
            <Title
                title={item.number}
            />
        {/if}












        <form onsubmit={submit} novalidate id="genericForm">
            <FormSelect
                {form}
                name="item_type"
                label="Item Type"
                placeholder="Select an Item Type"
                options={item_types}
                required={true}
            />

            <FormInput
                {form}
                name="title"
                label="Item Title"
                placeholder="Enter Item Title"
                required={true}
            />



            {#if item && item.files.length > 0}
                <FilesList media={item.files} />
            {/if}

            <FormInput
                {form}
                name="weight"
                label="Weight (kg)"
                placeholder="Enter Weight"
                required={true}
            />




            {#if $form.item_type === "Make-From"}
            <FilterSelect 
                label="Make from Part ID"
                name="make_from_part_id"
                options={results} 
                placeholder="Enter Make from Part ID"
                minChars={4} 
            />
            {/if}



            {#if $form.item_type === "Buyable"}


            <div class="fixed-grid">
            <div class="grid">
                <div class="cell">
                    <FormInput
                        {form}
                        name="vendor"
                        label="Vendor "
                        placeholder="Enter Vendor"
                        required={false}
                    />
                </div>
                <div class="cell">
                    <FormInput
                        {form}
                        name="vendor_part_number"
                        label="Vendor Part Number"
                        placeholder="Enter Vendor Part Number"
                        required={false}
                    />
                </div>
            </div>
            </div>

            <FormInput
                {form}
                name="vendor_url"
                label="Vendor URL"
                placeholder="Enter Vendor URL"
                required={false}
            />

            {/if}












            <div class="fixed-grid has-cols-2 has-cols-1-mobile">
            <div class="grid">
                <div class="cell">
                    <FormUpload
                        {form}
                        name="itemfiles"
                        label="File Attachments"
                        accept=".pdf,.docx,.doc,.txt,.png"
                        multiple={true}
                        maxSize={10}
                        showPreview={false}
                    />

                </div>
<!--                 <div class="cell">
                    <FormUpload
                        {form}
                        name="itemfiles2"
                        label="File Attachments"
                        accept=".pdf,.docx,.doc,.txt,.png"
                        multiple={true}
                        maxSize={10}
                        showPreview={false}
                    />
                </div> -->
            </div>
            </div>




            <div class="field">
                <label class="label" for="ed">Notes/Comments/Remarks</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.remarks = html)}
                        value={item != null ? item.remarks : ""}
                        placeholder="Enter any notes, comments, or remarks about the item here..."
                    />
                </div>
                {#if $form.errors.remarks}
                    <p class="help is-danger">
                        {$form.errors.remarks}
                    </p>
                {/if}
            </div>




            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if item != null}
                    <a href="/pdm/item/{item.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/pdm/item" class="button">
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
                            {item ? "Update" : "Create"} Component
                        {/if}
                    </span>
                    <span class="icon"><ChevronRight size="16" /></span>
                </button>
            </div>
        </form>
    </section>
</Layout>
