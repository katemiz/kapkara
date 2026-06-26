<script>

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import Paginate from "$components/Paginate.svelte";
    import TableRecordsInfo from "$components/TableRecordsInfo.svelte";

    import { Search, Plus, X, Eye, Pencil } from "@lucide/svelte";
    import { router } from "@inertiajs/svelte";

    // 1. Receive the initial filter states sent from Laravel
    let { items, filters, per_page } = $props();

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
    });






    function doSearch() {
        router.get('/pdm/item', {
            search: query,
            show_latest_only: showLatestOnly
        }, {
            preserveState: true,
            replace: true, // Prevents flooding browser history with every single keystroke
            preserveScroll: true,
        });
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
                <Title title="Parts/Assemblies" subtitle="List of All Items" />
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
                    <a href="/pdm/item/create" class="button is-link">
                        <span class="icon is-small">
                            <Plus size="16" />
                        </span>
                        <span>Add Component</span>
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

        <TableRecordsInfo results={items} {per_page} />

        {#if items.data.length > 0}
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item No</th>
                        <th>Item Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th class="has-text-right">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {#each items.data as item}
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.number}</td>
                            <td>{@html item.title}</td>

                            <td>{item.created_user_mail}</td>
                            <td>{formatDate(item.updated_at)}</td>
                            <td>{item.status}</td>

                            <td class="has-text-right">
                                <a href="/pdm/item/{item.id}">
                                    <Eye size="24" />
                                </a>

                                <a
                                    href="/pdm/item/{item.id}/edit"
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
                No products exist
            </div>
        {/if}

        <!-- Pagination component here -->
        <Paginate items={items} />
    </section>
</Layout>
