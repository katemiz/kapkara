<script>
    import { useForm } from "@inertiajs/svelte";

    import Title from "$components/Title.svelte";

    const form = useForm({
        organization_name: "",
        admin_name: "",
        admin_lastname: "",
        admin_email: "",
        admin_password: "",
        admin_password_confirmation: "",
    });

    let step = 1;
    let clientError = "";

    function next() {
        if (!$form.organization_name.trim()) {
            clientError = "Please enter your organization name.";
            return;
        }
        clientError = "";
        step = 2;
    }

    function back() {
        step = 1;
    }

    function submit() {
        $form.post("/setup", { preserveScroll: true });
    }
</script>

<svelte:head>
    <title>Set up your workspace</title>
</svelte:head>

<section class="section">
    <Title title="Set up your workspace" subtitle="sdfsdf" />

    <div class="notification is-warning is-light">
        These actions lets you define <strong>organizaion</strong> and
        <strong>admin user</strong> for that organization
    </div>

    <div class="has-background-grey-lighter p-4">
        <div class="mb-6">
            <p class="is-size-3 mt-1">Step {step} of 2</p>
        </div>

        {#if step === 1}
            <div class="field">
                <label for="organization_name" class="label"
                    >Organization Name</label
                >
                <div class="control">
                    <input
                        id="organization_name"
                        type="text"
                        bind:value={$form.organization_name}
                        class="input"
                        placeholder="kapkara web technologies"
                    />
                </div>
                <p class="help">
                    Name of the organization admin user is a member of
                </p>

                {#if clientError}
                    <p class="has-text-danger">
                        {clientError}
                    </p>
                {/if}
                {#if $form.errors.organization_name}
                    <p class="has-text-danger">
                        {$form.errors.organization_name}
                    </p>
                {/if}
            </div>

            <div class="has-text-right">
                <button type="button" on:click={next} class="button is-link">
                    Continue
                </button>
            </div>
        {:else}
            <form on:submit|preventDefault={submit} class="form">
                <div class="fixed-grid has-2-cols">
                    <div class="grid">
                        <div class="field">
                            <label for="admin_name" class="label"
                                >Admin Name</label
                            >
                            <input
                                id="admin_name"
                                type="text"
                                bind:value={$form.admin_name}
                                class="input"
                            />
                            {#if $form.errors.admin_name}
                                <p class="has-text-danger">
                                    {$form.errors.admin_name}
                                </p>
                            {/if}
                        </div>
                        <div class="field">
                            <label for="admin_lastname" class="label"
                                >Admin Lastname</label
                            >
                            <input
                                id="admin_lastname"
                                type="text"
                                bind:value={$form.admin_lastname}
                                class="input"
                            />
                            {#if $form.errors.admin_lastname}
                                <p class="has-text-danger">
                                    {$form.errors.admin_lastname}
                                </p>
                            {/if}
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label for="admin_email" class="label">Email</label>
                    <input
                        id="admin_email"
                        type="email"
                        bind:value={$form.admin_email}
                        class="input"
                    />
                    {#if $form.errors.admin_email}
                        <p class="has-text-danger">
                            {$form.errors.admin_email}
                        </p>
                    {/if}
                </div>

                <div class="fixed-grid has-2-cols">
                    <div class="grid">
                        <div class="field">
                            <label for="admin_password" class="label"
                                >Password</label
                            >
                            <input
                                id="admin_password"
                                type="password"
                                bind:value={$form.admin_password}
                                class="input"
                            />
                            {#if $form.errors.admin_password}
                                <p class="has-text-danger">
                                    {$form.errors.admin_password}
                                </p>
                            {/if}
                        </div>

                        <div class="field">
                            <label
                                for="admin_password_confirmation"
                                class="label"
                            >
                                Confirm password
                            </label>
                            <input
                                id="admin_password_confirmation"
                                type="password"
                                bind:value={$form.admin_password_confirmation}
                                class="input"
                            />
                        </div>
                    </div>
                </div>

                <div class="has-text-right">
                    <button
                        type="button"
                        on:click={back}
                        class="button is-link"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        disabled={$form.processing}
                        class="button is-link"
                    >
                        {$form.processing ? "Creating…" : "Create workspace"}
                    </button>
                </div>
            </form>
        {/if}
    </div>
</section>
