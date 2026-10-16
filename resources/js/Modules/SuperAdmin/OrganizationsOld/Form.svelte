<script>
    import { router } from "@inertiajs/svelte";

    let { organization = null, isEditing = false } = $props();

    let form = $state({
        name: organization?.name || "",
        slug: organization?.slug || "",
        domain: organization?.domain || "",
        is_active: organization?.is_active ?? true,
    });

    let errors = $state({});
    let processing = $state(false);

    function handleSubmit(e) {
        e.preventDefault();
        processing = true;
        errors = {};

        const url = isEditing
            ? `/admin/organizations/${organization.id}`
            : "/admin/organizations";
        const method = isEditing ? "put" : "post";

        router[method](url, form, {
            onSuccess: () => {
                processing = false;
            },
            onError: (err) => {
                errors = err;
                processing = false;
            },
        });
    }
</script>

<form onsubmit={handleSubmit}>
    <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input
                class="input"
                type="text"
                placeholder="Organization Name"
                bind:value={form.name}
            />
        </div>
        {#if errors.name}<p class="help is-danger">{errors.name}</p>{/if}
    </div>

    <div class="field">
        <label class="label">Slug</label>
        <div class="control">
            <input
                class="input"
                type="text"
                placeholder="organization-slug"
                bind:value={form.slug}
            />
        </div>
        {#if errors.slug}<p class="help is-danger">{errors.slug}</p>{/if}
    </div>

    <div class="field">
        <label class="label">Domain (Optional)</label>
        <div class="control">
            <input
                class="input"
                type="text"
                placeholder="example.com"
                bind:value={form.domain}
            />
        </div>
        {#if errors.domain}<p class="help is-danger">{errors.domain}</p>{/if}
    </div>

    <div class="field">
        <div class="control">
            <label class="checkbox">
                <input type="checkbox" bind:checked={form.is_active} />
                &nbsp;Is Active
            </label>
        </div>
    </div>

    <div class="field mt-5">
        <div class="control">
            <button
                class="button is-primary"
                type="submit"
                disabled={processing}
            >
                {processing ? "Saving..." : isEditing ? "Update" : "Add New"}
            </button>
        </div>
    </div>
</form>
