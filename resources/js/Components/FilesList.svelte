<script>
    /**
     * Reusable Files List Component for Laravel-Inertia-Svelte 5
     *
     * @component
     * @example
     * <FilesList
     *   media={media}
     *   modelType="material"
     *   modelId={1}
     *   collectionName="gallery_images"
     * />
     *   url="https://example.com/record/1"
     * />
     */
    import { router } from "@inertiajs/svelte";
    import { Paperclip, CircleX } from "@lucide/svelte";

    let { media = [] } = $props();

    function deleteFile(mediaId) {
        if (confirm("Are you sure you want to delete this file:" + mediaId)) {
            router.delete(`/media-delete/${mediaId}`, {
                preserveScroll: true,
                onSuccess: () => {
                    // Laravel/Inertia will reload the props automatically
                    console.log("File deleted");
                },
            });
        }
    }

    function downloadFile(url, filename) {
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();
    }
</script>

{#if media.length > 0}
    <div class="card has-background-white-ter mt-4">
        <div class="card-content">
            <table class="table is-striped is-fullwidth">
                <caption class="mb-2">
                    Attachments [{media.length} Files]
                </caption>

                <tbody>
                    {#each media as file}
                        <tr>
                            <td><Paperclip size="16" /></td>
                            <td>
                                <button
                                    type="button"
                                    class="is-small has-text-link"
                                    onclick={() =>
                                        downloadFile(file.url, file.name)}
                                >
                                    <span>{file.name}</span>
                                </button>
                            </td>
                            <td>{file.mime}</td>
                            <td>{file.size}</td>
                            <td class="has-text-danger has-text-right">
                                <button
                                    type="button"
                                    class="is-small is-danger is-clickable"
                                    onclick={() => deleteFile(file.id)}
                                >
                                    <span class="icon is-small">
                                        <CircleX size="16" color="red" />
                                    </span>
                                </button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
{/if}
