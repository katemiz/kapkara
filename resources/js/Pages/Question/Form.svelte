<script>
    import { useForm } from "@inertiajs/svelte";

    import Layout from "../../Shared/Layout.svelte";
    import Editor from "$lib/components/Editor.svelte";

    let edContent = $state("<em>Your content will appear here...</em>");

    let { question = null, isEdit = false } = $props();


    // 1. Initialize the Inertia Form   
    let form = useForm({
        text: question?.text ?? '',
    });


    function submit(e) {

        console.log("The form object is:",$form);
        e.preventDefault();

        if (isEdit) {

            console.log('trying to edit')

            $form.put(`/question/${question.id}`,{
                onSuccess: () => {
                    console.log("Updated successfully!");
                },
            });

        } else {

            console.log('trying to new')

            $form.post("/question", {
                onSuccess: () => {
                    console.log("Saved successfully!");
                    $form.reset();
                },
            });
        }
    }

</script>

<Layout>
    <section class="section">
        <div class="container">

            





            <div class="fixed-grid has-2-cols">
            <div class="grid has-background-warning">
                <div class="cell">
                    <h1 class="title">{isEdit & question != null ? 'Edit Question' + question.id : 'Create Question'}</h1>
                </div>
                <div class="cell has-text-right"><a href="/question">Back</a></div>
            </div>
            </div>











            <form onsubmit={submit} class="box">

                <!-- <div class="field">
                    <label class="label" for="title">Title (myInput)</label>
                    <div class="control">
                        <input
                            id="title"
                            class="input"
                            type="text"
                            bind:value={$form.myInput}
                            placeholder="Enter a title"
                        />
                    </div>
                    {#if $form.errors.myInput}
                        <p class="help is-danger">{$form.errors.myInput}</p>
                    {/if}
                </div> -->

                <div class="field">
                    <label class="label" for="ed">Content (text)</label>
                    <div class="control" id="ed">
                        <Editor onUpdate={(html) => ($form.text = html)} value={question != null ? question.text : ''}/>
                    </div>
                    {#if $form.errors.text}
                        <p class="help is-danger">{$form.errors.text}</p>
                    {/if}
                </div>

                <div class="control">
                    <button
                        type="submit"
                        class="button is-link"
                        disabled={$form.processing}
                    >

                        {#if ($form.processing)}
                            "Submitting ..."
                        {:else } 
                           {isEdit ? 'Update' : 'Create'} Question
                        {/if} 

                    </button>
                </div>

            </form>
        </div>
    </section>
</Layout>























<!-- 

<div>
    
    <form onsubmit={submit}>
        <div>
            <label for="title">Title</label>
            <input 
                id="title"
                type="text" 
                bind:value={form.title} 
                placeholder="Enter question title" 
            />
            {#if form.errors.title}
                <span class="error">{form.errors.title}</span>
            {/if}
        </div>
        
        <div>
            <label for="content">Content</label>
            <textarea 
                id="content"
                bind:value={form.content} 
                placeholder="Enter question content"
                rows="6"
            ></textarea>
            {#if form.errors.content}
                <span class="error">{form.errors.content}</span>
            {/if}
        </div>
        
        <button type="submit" disabled={form.processing}>
            {isEdit ? 'Update' : 'Create'} Question
        </button>
        
        <a href={isEdit ? `/question/${question.id}` : '/question'}>
            Cancel
        </a>
    </form>
</div> -->