<script>
    import { onMount } from "svelte";
    import Quill from "quill";
    import "quill/dist/quill.snow.css"; // Ensure you import the CSS!
    import { router } from '@inertiajs/svelte';


    let { onUpdate, value } = $props();
    // svelte-ignore non_reactive_update
    let editorElement; // This will hold the reference to the div
    let quill;








    //let value = $props();
    let placeholder = 'Write something...';
    //let onchange = (content) => {};


    onMount(() => {

        // This code only runs AFTER the div below is created
        quill = new Quill(editorElement, {
            theme: 'snow',
            placeholder: placeholder,
            modules: {
                toolbar: {
                    container: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        [{ 'color': [] }, { 'background': [] }],
                        ['link', 'image', 'video'],
                        ['clean']
                    ],
                    handlers: {
                        image: imageHandler
                    }
                }
            }
        });

        // Set initial content
        if (value) {
            quill.root.innerHTML = value;
        }

        // Listen for text changes
        quill.on('text-change', () => {
            const content = quill.root.innerHTML;
            //onchange(content);

            onUpdate(content);
        });

        return () => {
            quill = null;
        };
    });








    async function imageHandler() {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            
            if (file) {
                const formData = new FormData();
                formData.append('image', file);

                try {
                    // Show loading state
                    const range = quill.getSelection(true);
                    quill.insertText(range.index, 'Uploading...', 'user');
                    quill.setSelection(range.index + 'Uploading...'.length);

                    // Upload image
                    // const response = await fetch('/upload-image', {
                    //     method: 'POST',
                    //     headers: {
                    //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    //     },
                    //     body: formData
                    // });

                    // Use axios (comes with Laravel) instead of fetch
                    const response = await axios.post('/upload-image', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });


















                    //console.log(response)

                    // const data = await response.json();

                    // if (data.success) {
                    //     // Remove loading text
                    //     quill.deleteText(range.index, 'Uploading...'.length);
                        
                    //     // Insert uploaded image
                    //     quill.insertEmbed(range.index, 'image', data.url, 'user');
                    //     quill.setSelection(range.index + 1);
                    // } else {
                    //     quill.deleteText(range.index, 'Uploading...'.length);
                    //     alert('Upload failed!');
                    // }




                    if (response.data.success) {
                        quill.deleteText(range.index, 'Uploading...'.length);
                        quill.insertEmbed(range.index, 'image', response.data.url, 'user');
                        quill.setSelection(range.index + 1);
                    } else {
                        quill.deleteText(range.index, 'Uploading...'.length);
                        alert('Upload failed!');
                    }













                } catch (error) {
                    console.error('Upload error:', error);
                    alert('Upload failed!');
                }
            }
        };
    }






    // Method to get content
    export function getContent() {
        return quill ? quill.root.innerHTML : '';
    }





</script>

<div>
    <div bind:this={editorElement}></div>

    <p>{editorElement}</p>
</div>










<style>
    :global(.ql-container) {
        min-height: 200px;
        font-size: 16px;
    }
    
    :global(.ql-editor) {
        min-height: 200px;
    }
</style>