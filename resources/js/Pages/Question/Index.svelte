<script>
    import Layout from "../../Shared/Layout.svelte";

    import Paginate from "$lib/components/Paginate.svelte";

    let { questions } = $props();
</script>

<Layout>
    <section class="section min-height-screen">
        <h1 class="title">Index : Questions</h1>

        <a href="/question/create" class="button">Create New Question</a>

        {#if questions.data.length > 0}
            <table class="table is-fullwidth">
                <tbody>
                    {#each questions.data as question}
                        <tr>
                            <td>{question.id}</td>
                            <td>{question.myInput}</td>

                            <td>{@html question.myEditorText}</td>
                            <td>
                                <a href="/question/{question.id}">View</a>
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
