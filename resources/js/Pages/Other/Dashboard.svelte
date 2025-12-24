<script>
    import { appSettings, toggleTheme } from "$lib/settings.svelte";
    import { useForm } from "@inertiajs/svelte";

    import Layout from "../../Shared/Layout.svelte";
    import Editor from "$lib/components/Editor.svelte";

    let edContent = $state("<em>Your content will appear here...</em>");

            let { question } = $props();


    // 1. Initialize the Inertia Form
    let form = useForm({
        myInput: "",
        myEditor: "",
    });

    function submit(e) {
        console.log("The form object is:",$form);
        e.preventDefault();
        // 2. Post to the Laravel route 'posts.store'
       $form.post("/qstore", {
            onSuccess: () => {
                console.log("Saved successfully!");
               $form.reset();
            },
        });
    }
</script>

<Layout>
    <section class="section">
        <div class="container">
            <h1 class="title">Create Entry</h1>

            <form onsubmit={submit} class="box">
                <div class="field">
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
                </div>

                <div class="field">
                    <label class="label">Content (myEditor)</label>
                    <div class="control">
                        <Editor onUpdate={(html) => ($form.myEditor = html)} />
                    </div>
                    {#if $form.errors.myEditor}
                        <p class="help is-danger">{$form.errors.myEditor}</p>
                    {/if}
                </div>

                <div class="control">
                    <button
                        type="submit"
                        class="button is-link"
                        disabled={$form.processing}
                    >
                        {$form.processing ? "Saving..." : "Submit to Laravel"}
                    </button>
                </div>
            </form>
        </div>
    </section>
</Layout>
