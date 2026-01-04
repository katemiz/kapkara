<script>
    import Layout from "../../Shared/Layout.svelte";
    import Title from "$lib/components/Title.svelte";
    import Paginate from "$lib/components/Paginate.svelte";

    import { Search, Plus, X, Eye } from "@lucide/svelte";
    import { clear } from "plotly.js-dist";

    let { questions } = $props();

    let query;

    function doSearch(event) {
        console.log("doSearch called");
        const inputValue = event.target.value;

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
        }
    }

    function clearSearch() {
        query = "";
        console.log("clearSearch called");
        const searchInput = document.querySelector(
            'input[placeholder="Search"]',
        );
        searchInput.value = "";
        searchInput.focus();

        document.getElementById("clear-icon").classList.add("is-hidden");
        document.getElementById("search-icon").classList.remove("is-hidden");
    }
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
                        bind:this={query}
                        class="input"
                        type="email"
                        placeholder="Search"
                        oninput={doSearch}
                    />
                    <span
                        class="icon is-small is-right is-hidden"
                        id="clear-icon"
                        onclick={() => {
                            clearSearch();
                        }}
                    >
                        <X size="16" />
                    </span>
                    <span class="icon is-small is-right" id="search-icon">
                        <Search size="16" />
                    </span>
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
