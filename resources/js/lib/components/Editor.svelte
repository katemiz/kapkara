<script>
    import { onMount } from "svelte";
    import Quill from "quill";
    import "quill/dist/quill.snow.css"; // Ensure you import the CSS!

    let { onUpdate } = $props();
    // svelte-ignore non_reactive_update
    let editorElement; // This will hold the reference to the div
    let quill;

    onMount(() => {
        // This code only runs AFTER the div below is created
        quill = new Quill(editorElement, {
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline"],
                    ["image", "code-block"],
                ],
            },
            placeholder: "Compose an epic...",
            theme: "snow",
        });

        // Listen for changes and push them to the parent
        quill.on("text-change", () => {
            // We pass the HTML string back to the parent's function
            onUpdate(quill.root.innerHTML);
        });
    });
</script>

<div>
    <div bind:this={editorElement}></div>
    <p>{editorElement}</p>
</div>

<style>
    /* Give the editor a default height so it doesn't look collapsed */
    div {
        height: 200px;
    }
</style>
