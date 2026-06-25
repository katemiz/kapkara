<script>
    import { useForm } from "@inertiajs/svelte";

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import Paginate from "$components/Paginate.svelte";
    import TableRecordsInfo from "$components/TableRecordsInfo.svelte";
    import FormCheckBoxSingle from "$components/FormCheckBoxSingle.svelte";

    import { Search, Plus, X, Eye, Pencil } from "@lucide/svelte";
    import { router } from "@inertiajs/svelte";

    import { docs_config } from "$modules/PDM/Shared/docs_config.js";

/*     // Initialize from filters, but allow independent updates
    let searchTerm = $state("");

    // Sync with filters when component mounts or filters change
    $effect(() => {
        searchTerm = filters.search || "";
    }); */

    // Logic to show/hide icons reactively
    let showClear = $derived(searchFilters.search.length > 0);


    // 1. Receive the initial filter states sent from Laravel
    let { documents, filters, per_page } = $props();


    // 2. Initialize unified local filter state with defaults
    let searchFilters = $state({
        search: filters?.search ?? "",
        show_latest_only: filters?.show_latest_only ?? true
    });


    // 3. Automatically trigger whenever ANY property inside searchFilters changes
    $effect(() => {
        // Debounce text entry if needed, but for simplicity here it triggers on change
        router.get('/pdm/document', {
            search: searchFilters.search,
            show_latest_only: searchFilters.show_latest_only
        }, {
            preserveState: true,
            replace: true // Prevents flooding browser history with every single keystroke
        });
    });








    function SILdoSearch() {
        router.get(
            "/pdm/document",
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
        var arr = docs_config.doc_types;
        const found = arr.find((item) => item.value === value);

        console.log(found);
        return found ? found.value + " / " + found.description : value;
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
                <Title title="Documents" subtitle="List of All Documents" />
            </div>
            <div class="column has-text-right">



                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input
                                type="checkbox"
                                bind:checked={filters.show_latest_only}
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
                        bind:value={filters.search}
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
                        <th>Doc No</th>
                        <th>Doc Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {#each documents.data as document}
                        <tr>
                            <td>{document.id}</td>
                            <td>D{document.document_no} R{document.revision}</td>
                            <td>{@html document.description}</td>

                            <td>{document.created_user_mail}</td>
                            <td>{formatDate(document.updated_at)}</td>
                            <td>{document.status}</td>

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
