<script>
    import Layout from "../../Shared/Layout.svelte";
    import Title from "$lib/components/Title.svelte";
    import Paginate from "$lib/components/Paginate.svelte";

    import { Search, Plus, X, Eye } from "@lucide/svelte";
    import { router } from "@inertiajs/svelte";

    let { questions, filters } = $props();

    // Initialize search term from server filters (keeps text after reload)
    let searchTerm = $state(filters.search || "");

    // Logic to show/hide icons reactively
    let showClear = $derived(searchTerm.length > 0);

    function doSearch() {
        console.log("doSearch called");
        /*         const inputValue = event.target.value;

        if (inputValue.length > 0) {
            console.log("Input value:", inputValue);
            document.getElementById("clear-icon").classList.remove("is-hidden");
            document.getElementById("search-icon").classList.add("is-hidden");
        } else {
            console.log("Input is empty");
            document.getElementById("clear-icon").classList.add("is-hidden");
            document
                .getElementById("search-icon")
                .classList.remove("is-hidden");
        } */

        /*         router.get(
            // Use the current page URL, or a specific route name/path
            "/question",
            // The data payload for the GET request (will become URL query parameters)
            { search: inputValue },
            // Optional Inertia options
            {
                preserveState: true, // Keep component state (e.g., scroll position)
                replace: true, // Replace the current history entry
            },
        );
 */
        router.get(
            "/question",
            { search: searchTerm },
            {
                preserveState: true,
                replace: true,
                // If the user is on page 5 and searches, we should go back to page 1
                query: { page: 1 },
            },
        );
    }

    function clearSearch() {
        // query = "";
        // console.log("clearSearch called");
        // const searchInput = document.querySelector(
        //     'input[placeholder="Search"]',
        // );
        // searchInput.value = "";
        // searchInput.focus();

        // document.getElementById("clear-icon").classList.add("is-hidden");
        // document.getElementById("search-icon").classList.remove("is-hidden");

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

        {#if questions.data.length > 0}
            <table class="table is-fullwidth">
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
