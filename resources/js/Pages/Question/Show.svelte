<script>
    import Layout from "../../Shared/Layout.svelte";
    import RecordData from "$lib/components/RecordData.svelte";
    import Title from "$lib/components/Title.svelte";
    import { Sheet, Pencil, Trash } from "@lucide/svelte";

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
                    <button class="button is-danger">
                        <span class="icon">
                            <Trash size="16" />
                        </span>
                    </button>
                </p>
            </div>
        </nav>

        <p class="subtitle">{question.myInput}</p>
        <p>{@html question.myEditorText}</p>

        {#each question.files as item}
            <div class="box">
                {item.id}
                {item.name}
                {item.mime}
                {item.size}
                {item.uuid}

                {console.log(item)}
            </div>
        {/each}

        {console.log("QUESTION", question)}

        <RecordData item={question} {url} />
    </section>
</Layout>
