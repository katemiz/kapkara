<script>
    import { useForm } from "@inertiajs/svelte";
    import { page } from "@inertiajs/svelte";

    import Layout from "$shared/Layout.svelte";
    import Editor from "$lib/components/Editor.svelte";
    import FormInput from "$lib/components/FormInput.svelte";
    import FormSelect from "$lib/components/FormSelect.svelte";
    import FilesList from "$lib/components/FilesList.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";

    import FormRadio from "$lib/components/FormRadio.svelte";
    import FormCheckBoxSingle from "$lib/components/FormCheckBoxSingle.svelte";
    import FormCheckBoxMultiple from "$lib/components/FormCheckBoxMultiple.svelte";
    import FormDate from "$lib/components/FormDate.svelte";
    import FormUpload from "$lib/components/FormUpload.svelte";

    import Title from "$lib/components/Title.svelte";

    import { Save, Pencil, Trash, X, ChevronRight } from "@lucide/svelte";

    let { user = null, isEdit = false, supportFixedData } = $props();

    // 1. Initialize the Inertia Form
    let form = useForm({
        userName: user?.name ?? "",
        userEmail: user?.email ?? "",
        userLastname: user?.lastname ?? "",
        userNotes: user?.notes ?? "",
        userIsActive: user?.is_active ?? 1,
        userFiles: user?.files ?? null,
        userType: user?.type ?? "",
    });

    console.log("Initial form data:", $form.data());
    // If you need the form to update when the 'user' prop changes
    // (e.g., navigating from one edit page to another edit page), use an effect:
    $effect(() => {
        if (user && isEdit) {
            $form.defaults({
                userName: user.name,
                userEmail: user.email,
                userLastname: user.lastname,
                userNotes: user.notes,
                userIsActive: user.is_active,
                userType: user.type,
            });
        }
    });

    function submit(e) {
        // console.log("The form object is:", $form);
        console.log("Form data submitted:", $form.data());

        e.preventDefault();

        if (isEdit) {
            console.log("trying to edit");

            $form.put(`/user/${user.id}`, {
                onSuccess: () => {
                    console.log("Updated successfully!");
                },

                onError: (errors) => {
                    console.log("Validation errors:", errors);
                },
            });
        } else {
            console.log("trying to new");

            $form.post("/user", {
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
        All Page Props: {JSON.stringify($page.props.user, null, 2)}
        </pre> -->

        <Title
            title="Users"
            subtitle={isEdit & (user != null)
                ? "Edit User" + user.id
                : "Create a User"}
        />

        <ActionButtons
            {form}
            {isEdit}
            item={user}
            form_type="form"
            route_name="user"
        />

        <form onsubmit={submit} novalidate id="genericForm">
            <div class="fixed-grid has-2-cols">
                <div class="grid">
                    <div class="cell">
                        <FormInput
                            {form}
                            name="userName"
                            label="Name of the User"
                            placeholder="Enter user name"
                            required={true}
                        />
                    </div>

                    <div class="cell">
                        <FormInput
                            {form}
                            name="userLastname"
                            label="Last Name of the User"
                            placeholder="Enter user last name"
                            required={true}
                        />
                    </div>
                </div>
            </div>

            <FormInput
                {form}
                name="userEmail"
                label="User Email"
                placeholder="Enter user email"
                required={true}
            />

            <div class="field">
                <label class="label" for="ed">Notes/Comments/Remarks</label>
                <div class="control" id="ed">
                    <Editor
                        onUpdate={(html) => ($form.userNotes = html)}
                        value={user != null ? user.notes : ""}
                        placeholder="Enter any notes, comments, or remarks about the user here..."
                    />
                </div>
                {#if $form.errors.userNotes}
                    <p class="help is-danger">
                        {$form.errors.userNotes}
                    </p>
                {/if}
            </div>

            {#if isEdit && user.files.length > 0}
                <FilesList media={user.files} />
            {/if}

            <FormUpload
                {form}
                name="userFiles"
                label="File Attachments"
                accept=".pdf,.docx,.doc,.txt,.png"
                multiple={true}
                maxSize={10}
                showPreview={false}
            />

            <FormSelect
                {form}
                name="userIsActive"
                label="User Status (Active/Inactive)"
                placeholder="Select status"
                options={supportFixedData.userIsActive}
                required={true}
            />

            <div class="column buttons has-text-right">
                <!-- Cancel Button -->
                {#if isEdit & (user != null)}
                    <a href="/user/{user.id}" class="button">
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                {:else}
                    <a href="/user" class="button">
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
                            {isEdit ? "Update" : "Create"} User
                        {/if}
                    </span>
                    <span class="icon"><ChevronRight size="16" /></span>
                </button>
            </div>
        </form>
    </section>
</Layout>
