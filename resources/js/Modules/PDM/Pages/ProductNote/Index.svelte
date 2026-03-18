<script>
    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import Paginate from "$components/Paginate.svelte";
    import TableRecordsInfo from "$components/TableRecordsInfo.svelte";

    import { Search, Plus, X, Eye, Pencil } from "@lucide/svelte";
    import { router } from "@inertiajs/svelte";

    let { product_notes, filters, per_page, supportFixedData } = $props();

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
            "/pdm/product-note",
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

        if (inWhat === "status") {
            var arr = supportFixedData.productNoteIsActive;
            const found = arr.find(item => item.value === value);
            return found ? found.label : value;
        }

        if (inWhat === "category") {
            var arr = supportFixedData.productNoteCategories;

            const found = arr.find(item => item.value === value);
            return found ? found.description_en+' / '+found.description_tr : value;
        }
    }


</script>

<Layout>
    <section class="section min-height-screen">

        <Title title="Product Notes" subtitle="List of All Product Notes" />

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a href="/pdm/product-note/create" class="button is-link">
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

        <TableRecordsInfo results={product_notes} {per_page} />

        {#if product_notes.data.length > 0}
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Note Category</th>
                        <th>Description [Türkçe]</th>
                        <th>Description [English]</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {#each product_notes.data as product_note}
                        <tr>
                            <td>{product_note.id}</td>
                            <td>{findInArray(product_note.category, "category")}</td>
                            <td>{@html product_note.description_tr}</td>
                            <td>{@html product_note.description_en}</td>

                            <td>{findInArray(product_note.is_active, "status")}</td>

                            <td>
                                <a href="/pdm/product-note/{product_note.id}">
                                    <Eye size="24" />
                                </a>

                                <a
                                    href="/pdm/product-note/{product_note.id}/edit"
                                    class="ml-2"><Pencil size="20" />
                                </a>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {:else}
            <div class="notification is-warning is-light">
                No product notes exist
            </div>
        {/if}

        <!-- Pagination component here -->
        <Paginate items={product_notes} />
    </section>
</Layout>
