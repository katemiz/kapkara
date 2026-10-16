<script>
    import Layout from "$modules/SuperAdmin/Layouts/SuperAdminLayout.svelte";
    import { Link, router, page } from "@inertiajs/svelte";
    import { Plus, Pencil, Eye, Search } from "@lucide/svelte";

    import Title from "$components/Title.svelte";

    let { organizations, filters } = $props();
    let user = $derived($page.props.auth?.user);
    let search = $state(filters.search || "");

    function handleSearch(e) {
        e.preventDefault();
        router.get("/admin/organizations", { search }, { preserveState: true });
    }
</script>

<Layout>
    <Title
        title="Organizations [Companies]"
        subtitle="List of All Organizations/Companies"
    />

    <!-- Main Content -->
    <div class="fixed-grid has-2-cols">
        <div class="grid">
            <div class="cell">
                <Link
                    href="/admin/organizations/create"
                    class="button is-primary"
                >
                    <span class="icon"><Plus size="18" /></span>
                    <span>New Organization</span>
                </Link>
            </div>
            <div class="cell">
                <form onsubmit={handleSearch} class="mb-4">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input
                                class="input"
                                type="text"
                                placeholder="Search organizations..."
                                bind:value={search}
                            />
                        </div>
                        <div class="control">
                            <button type="submit" class="button is-info">
                                <span class="icon"><Search size="18" /></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Table -->
    <div class="table-container mt-28">
        <table class="table is-fullwidth is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th class="has-text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {#each organizations.data as org}
                    <tr>
                        <td>
                            <a href={`/admin/organizations/${org.id}`} class="">
                                {org.name}
                            </a>
                        </td>
                        <td><code>{org.slug}</code></td>
                        <td>
                            <span
                                class="tag is-{org.is_active
                                    ? 'success'
                                    : 'danger'}"
                            >
                                {org.is_active ? "Active" : "Inactive"}
                            </span>
                        </td>
                        <td class="has-text-right">
                            <div
                                class="buttons are-small is-justify-content-flex-end"
                            >
                                <Link
                                    href={`/admin/organizations/${org.id}/edit`}
                                    class="button is-info is-light"
                                >
                                    <span class="icon"
                                        ><Pencil size="16" /></span
                                    >
                                </Link>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Layout>
