<script>
    import Layout from "../../Shared/Layout.svelte";
    import Title from "$lib/components/Title.svelte";
    import Paginate from "$lib/components/Paginate.svelte";
    import TableRecordsInfo from "$lib/components/TableRecordsInfo.svelte";

    import { Search, Plus, X, Eye } from "@lucide/svelte";
    import { router } from "@inertiajs/svelte";

    let { questions, filters } = $props();

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
            "/question",
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
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Question" subtitle="List of All Questions" />

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a href="/question/create" class="button is-link">
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

        <TableRecordsInfo results={questions} />

        {#if questions.data.length > 0}
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>My Input</th>
                        <th>My Editor Text</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {#each questions.data as question}
                        <tr>
                            <td>{question.id}</td>
                            <td>{question.myInput}</td>

                            <td>{@html question.myEditorText}</td>
                            <td>
                                <a href="/question/{question.id}"
                                    ><Eye size="24" /></a
                                >
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {:else}
            <div class="notification is-warning is-light">
                No questions exist
            </div>
        {/if}

        <!-- Pagination component here -->
        <Paginate items={questions} />
    </section>
</Layout>
