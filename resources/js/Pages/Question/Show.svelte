<script>
    import Layout from "../../Shared/Layout.svelte";

    
    // 1. Receive data from Controller
    let { question } = $props();


</script>

<Layout>

    <section class="section">



        <div class="fixed-grid has-3-cols">
        <div class="grid has-background-warning">
            <div class="cell">
                <h1 class="title">Question {question.id}</h1>
            </div>
            <div class="cell has-text-right is-2"><a href="/question">Back</a></div>
            <div class="cell has-text-right is-2">
                <a href="/question/{question.id}/edit">Edit</a>
            </div>

        </div>
        </div>




        <p>{@html  question.myEditorText} </p>


        
    </section>
</Layout>






