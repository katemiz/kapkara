<script>
    import Layout from "../../Shared/Layout.svelte";

    
    // 1. Receive data from Controller
    let { question } = $props();


</script>

<Layout>

    <section class="section">
        <h1 class="title">{question.id}</h1>
        <p>{@html  question.text} </p>


        <a href="/question/{question.id}/edit">Edit</a>
    </section>
</Layout>






