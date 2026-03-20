<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import Paginate from "$components/Paginate.svelte";
    import TableRecordsInfo from "$components/TableRecordsInfo.svelte";

    import { Search, Plus, X, Eye, Pencil } from "@lucide/svelte";
    import { router } from "@inertiajs/svelte";

    let { documents, filters, per_page, supportFixedData } = $props();

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
            "/pdm/standard",
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
        var arr = supportFixedData.doc_types;
        const found = arr.find((item) => item.value === value);

        console.log(found);
        return found ? found.value + " / " + found.description : value;
    }
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Documents" subtitle="List of All Documents" />

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a href="/pdm/document/create" class="button is-link">
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

        <TableRecordsInfo results={documents} {per_page} />

        {#if documents.data.length > 0}
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Dcument Number</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {#each documents.data as document}
                        <tr>
                            <td>{document.id}</td>
                            <td>{@html document.document_no}</td>
                            <td>{@html document.description}</td>

                            <td>
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
                No documents exist
            </div>
        {/if}

        <!-- Pagination component here -->
        <Paginate items={documents} />
    </section>
</Layout>
