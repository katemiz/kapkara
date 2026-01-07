<script>
    import Layout from "../../Shared/Layout.svelte";
    import RecordData from "$lib/components/RecordData.svelte";
    import Title from "$lib/components/Title.svelte";
    import DeleteButton from "$lib/components/DeleteButton.svelte";

    import { Sheet, Pencil, Trash, Paperclip} from "@lucide/svelte";

    let { question } = $props();

    let url = $derived(window.location.origin + "/question/" + question.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Question {question.id}" subtitle="Show Properties" />

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a
                        href="/question"
                        class="button is-link is-inverted is-outlined"
                    >
                        <span class="icon is-small">
                            <Sheet size="16" />
                        </span>
                    </a>
                    <a
                        href="/question/{question.id}/edit"
                        class="button is-link is-inverted is-outlined"
                    >
                        <span class="icon is-small">
                            <Pencil size="16" />
                        </span>
                    </a>
                </p>
            </div>

            <!-- Right side -->
            <div class="level-right">
                <p class="buttons">
                    <DeleteButton url="/question/{question.id}" />
                </p>
            </div>
        </nav>

        <p class="subtitle">{question.myInput}</p>
        <p>{@html question.myEditorText}</p>


        <!-- 
        FILES 
        -->
        <label class="label" for="names">Files</label>

        <div class="mt-4" name="files">
        {#each question.files as item}
            <div class="tags has-addons my-2">
                <span class="tag"><Paperclip size="16" /></span>
                <span class="tag ">{item.name}  </span>
                <span class="tag ">{item.mime}</span>
                <span class="tag ">{item.size}</span>
                <span class="tag ">{item.id}</span>
                <span class="tag "><Trash size="16" color="red"/></span>
            </div>
        {/each}
        </div>



        {console.log("QUESTION", question)}

        <RecordData item={question} {url} />
    </section>
</Layout>
