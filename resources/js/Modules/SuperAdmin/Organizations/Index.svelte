<script>
    import Layout from "$modules/SuperAdmin/Layouts/SuperAdminLayout.svelte";
    import Title from "$components/Title.svelte";
    import Paginate from "$components/Paginate.svelte";
    import TableRecordsInfo from "$components/TableRecordsInfo.svelte";

    import { Search, Plus, X, Eye, Pencil } from "@lucide/svelte";
    import { Link, router, page } from "@inertiajs/svelte";

    let { organizations, filters, per_page } = $props();
    let user = $derived($page.props.auth?.user);
    let search = $state(filters.search || "");

    function handleSearch(e) {
        e.preventDefault();
        router.get("/admin/organizations", { search }, { preserveState: true });
    }

    // *********************************************

    let clearSearchIcon = $state(false);

    let query = $state(filters.search);
    let showLatestOnly = $state(filters.show_latest_only);

    $effect(() => {
        if (query) {
            clearSearchIcon = true;

            if (query && query.length > 2) {
                doSearch();
            }
        } else {
            clearSearchIcon = false;
            doSearch();
        }

        console.log(query, showLatestOnly);
    });

    function doSearch() {
        router.get(
            "/admin/organizations",
            {
                search: query,
                show_latest_only: showLatestOnly,
            },
            {
                preserveState: true,
                replace: true, // Prevents flooding browser history with every single keystroke
                preserveScroll: true,
            },
        );
    }

    function formatDate(date) {
        return new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        }).format(new Date(date));
    }
</script>

<Layout>
    <section class="section container">
        <div class="columns">
            <div class="column is-10">
                <Title
                    title="Organizations"
                    subtitle="List of All Organizations"
                />
            </div>
            <div class="column has-text-right">
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input
                                type="checkbox"
                                bind:checked={showLatestOnly}
                            />
                            Show Latest Only
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a href="/pdm/document/create" class="button is-link">
                        <span class="icon is-small">
                            <Plus size="16" />
                        </span>
                        <span>Add Document</span>
                    </a>
                </p>
            </div>

            <!-- Right side -->
            <div class="level-right">
                <div class="control has-icons-right">
                    <input
                        bind:value={query}
                        class="input"
                        type="text"
                        placeholder="Search..."
                    />
                    {#if clearSearchIcon}
                        <button
                            class="icon is-small is-right is-clickable"
                            onclick={() => {
                                query = "";
                                clearSearchIcon = false;
                                doSearch();
                            }}
                            style="border:none; background:none;"
                        >
                            <X size="16" />
                        </button>
                    {:else}
                        <span class="icon is-small is-right">
                            <Search size="16" />
                        </span>
                    {/if}
                </div>
            </div>
        </nav>

        <TableRecordsInfo results={organizations} {per_page} />

        {#if organizations.data.length > 0}
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Doc No</th>
                        <th>Doc Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th class="has-text-right">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {#each organizations.data as organization}
                        <tr>
                            <td>{organization.id}</td>
                            <td>{organization.name}</td>

                            <td>{organization.created_user_mail}</td>
                            <td>{formatDate(organization.updated_at)}</td>
                            <td>{organization.status}</td>

                            <td class="has-text-right">
                                <a href="/pdm/document/{document.id}">
                                    <Eye size="24" />
                                </a>

                                <a
                                    href="/pdm/document/{document.id}/edit"
                                    class="ml-2"
                                    ><Pencil size="20" />
                                </a>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {:else}
            <div class="notification is-warning is-light">
                No organizations exist
            </div>
        {/if}

        <!-- Pagination component here -->
        <Paginate items={organizations} />
    </section>
</Layout>
