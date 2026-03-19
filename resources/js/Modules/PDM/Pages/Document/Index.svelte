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
        if (inWhat === "status") {
            var arr = supportFixedData.is_active;
            const found = arr.find((item) => item.value === value);
            return found ? found.label : value;
        }

        if (inWhat === "organisation") {
            var arr = supportFixedData.organisation;
            const found = arr.find((item) => item.value === value);

            console.log(found);
            return found ? found.value + " / " + found.description : value;
        }
    }
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Documents" subtitle="List of All Standards" />

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a href="/pdm/standard/create" class="button is-link">
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

        {#if standards.data.length > 0}
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Organisation</th>
                        <th>Standard Number</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {#each standards.data as standard}
                        <tr>
                            <td>{standard.id}</td>
                            <td
                                >{findInArray(
                                    standard.organisation,
                                    "organisation",
                                )}</td
                            >
                            <td>{@html standard.standard_number}</td>
                            <td>{@html standard.description}</td>

                            <td>{findInArray(standard.is_active, "status")}</td>

                            <td>
                                <a href="/pdm/standars/{standard.id}">
                                    <Eye size="24" />
                                </a>

                                <a
                                    href="/pdm/standard/{standard.id}/edit"
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
                No standards exist
            </div>
        {/if}

        <!-- Pagination component here -->
        <Paginate items={standards} />
    </section>
</Layout>
