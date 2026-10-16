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

    let clientError = "";

    function submit() {
        $form.post("/setup", { preserveScroll: true });
    }
</script>

<svelte:head>
    <title>Set up your workspace</title>
</svelte:head>

<section class="section">
    <Title title="kapkara Setup" subtitle="Set up your workspace" />

    <div class="notification is-warning is-light content">
        Following actions shall be performed:
        <ul>
            <li>
                Set <italic>App Owner</italic> <strong>Organization</strong>
            </li>
            <li>
                Set <strong>App Admin/Super Admin</strong> [Name-Email-Password]
            </li>
        </ul>
    </div>

    <div class="has-background-grey-lighter p-4">
        <form on:submit|preventDefault={submit} class="form">
            <div class="field">
                <label for="organization_name" class="label"
                    >App Owner Organization Name</label
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

            <div class="field-body">
                <div class="field">
                    <label for="admin_name" class="label"
                        >Super Admin Name</label
                    >
                    <input
                        id="admin_name"
                        type="text"
                        bind:value={$form.admin_name}
                        class="input"
                        placeholder="name"
                    />
                    {#if $form.errors.admin_name}
                        <p class="has-text-danger">
                            {$form.errors.admin_name}
                        </p>
                    {/if}
                </div>
                <div class="field">
                    <label for="admin_lastname" class="label"
                        >Super Admin Lastname</label
                    >
                    <input
                        id="admin_lastname"
                        type="text"
                        bind:value={$form.admin_lastname}
                        class="input"
                        placeholder="lastname"
                    />
                    {#if $form.errors.admin_lastname}
                        <p class="has-text-danger">
                            {$form.errors.admin_lastname}
                        </p>
                    {/if}
                </div>
            </div>

            <div class="field mt-4">
                <label for="admin_email" class="label">Email</label>
                <input
                    id="admin_email"
                    type="email"
                    bind:value={$form.admin_email}
                    class="input"
                    placeholder="super_admin@super.org"
                />
                {#if $form.errors.admin_email}
                    <p class="has-text-danger">
                        {$form.errors.admin_email}
                    </p>
                {/if}
            </div>

            <div class="field-body">
                <div class="field">
                    <label for="admin_password" class="label"
                        >Super User Password</label
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
                    <label for="admin_password_confirmation" class="label">
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

            <div class="field column has-text-right">
                <button
                    type="submit"
                    disabled={$form.processing}
                    class="button is-link"
                >
                    {$form.processing ? "Creating…" : "Create workspace"}
                </button>
            </div>
        </form>
    </div>
</section>
