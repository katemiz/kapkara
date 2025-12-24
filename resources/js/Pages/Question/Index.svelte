<script>
    import Layout from "../../Shared/Layout.svelte";

    let { questions } = $props();
</script>



<Layout>
<section class="section">
    <h1 class="title">Index : Questions</h1>

    <a href="/question/create" class="button">Create New Question</a>


    {#if questions.data.length > 0 } 

        <table class="table is-fullwidth">
        <tbody>

        {#each questions.data as question}
            <tr>
                <td>{question.id}</td>
                <td>{@html question.text}</td>
                <td>
                    <a href="/question/{question.id}">View</a>
                </td>
            </tr>
        {/each}
        </tbody>
        </table>

    {:else} 
        <div class="notification is-warning is-light">No questions exist</div>
    {/if} 
    
    <!-- Pagination component here -->
    </section>
</Layout>