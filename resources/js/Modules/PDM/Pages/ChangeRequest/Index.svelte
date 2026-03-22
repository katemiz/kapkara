<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import Paginate from "$components/Paginate.svelte";
    import TableRecordsInfo from "$components/TableRecordsInfo.svelte";

    import { Search, Plus, X, Eye, Pencil } from "@lucide/svelte";
    import { router } from "@inertiajs/svelte";

    let { crequests, filters, per_page, supportFixedData } = $props();

    // Initialize from filters, but allow independent updates
    let searchTerm = $state("");

    // Sync with filters when component mounts or filters change
    $effect(() => {
        searchTerm = filters.search || "";
    });

    // Logic to show/hide icons reactively
    let showClear = $derived(searchTerm.length > 0);

    function doSearch() {
        router.get(
            "/pdm/crequest",
            {
                search: searchTerm,
                page: 1, // Explicitly reset to page 1 on every new search
            },
            {
                preserveState: false,
                replace: false,
                preserveScroll: true,
            },
        );
    }

    function clearSearch() {
        searchTerm = "";
        doSearch();
    }

    // Optional: Simple debounce to prevent server overload
    let timer;
    const handleInput = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (searchTerm.length >= 3 || searchTerm.length === 0) {
                doSearch();
            }
        }, 300); // Wait 300ms after user stops typing
    };

    function findInArray(value, inWhat) {
        var arr = supportFixedData.status;
        const found = arr.find((item) => item.value === value);
        return found ? found.description : value;
    }
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Change Requests" subtitle="List of All Change Requests" />

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a href="/pdm/crequest/create" class="button is-link">
                        <span class="icon is-small">
                            <Plus size="16" />
                        </span>
                    </a>
                </p>
            </div>

            <!-- Right side -->
            <div class="level-right">
                <div class="control has-icons-right">
                    <input
                        bind:value={searchTerm}
                        oninput={handleInput}
                        class="input"
                        type="text"
                        placeholder="Search..."
                    />
                    {#if showClear}
                        <button
                            class="icon is-small is-right is-clickable"
                            onclick={clearSearch}
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

        <TableRecordsInfo results={crequests} {per_page} />

        {#if crequests.data.length > 0}
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Change Request Number</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {#each crequests.data as crequest}
                        <tr>
                            <td>CR-{crequest.id}</td>
                            <td>{crequest.title}</td>
                            <td
                                >{findInArray(
                                    crequest.status,
                                    supportFixedData.status,
                                )}</td
                            >

                            <td>
                                <a href="/pdm/crequest/{crequest.id}">
                                    <Eye size="24" />
                                </a>

                                <a
                                    href="/pdm/crequest/{crequest.id}/edit"
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
                No documents exist
            </div>
        {/if}

        <!-- Pagination component here -->
        <Paginate items={crequests} />
    </section>
</Layout>
