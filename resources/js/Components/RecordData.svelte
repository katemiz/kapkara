<script>
    /**
     * Reusable Record Data Component for Laravel-Inertia-Svelte 5
     *
     * @component
     * @example
     * <RecordData
     *   item={item}
     *   url="https://example.com/record/1"
     * />
     */
    import QRCode from "$lib/components/QRCode.svelte";

    let { item, url } = $props();

    // Use Intl for high-quality formatting
    let createdOn = $derived(
        new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        }).format(new Date(item.created_at)),
    );

    let updatedOn = $derived(
        new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        }).format(new Date(item.updated_at)),
    );
</script>

<div class="fixed-grid has-3-cols has-3-cols-tablet has-1-cols-mobile mt-4">
    <div class="grid">
        <div class="cell has-text-left has-text-centered-mobile">
            <p class="is-size-7 has-text-grey">Added</p>
            <p>{item.created_user_mail}</p>
            <p class="is-size-7 has-text-grey">{createdOn}</p>
        </div>

        <div class="cell has-text-centered">
            <QRCode value={url} />
        </div>

        <div class="cell has-text-right has-text-centered-mobile">
            <p class="is-size-7 has-text-grey">Modified</p>
            <p>{item.updated_user_mail}</p>
            <p class="is-size-7 has-text-grey">{updatedOn}</p>
        </div>
    </div>
</div>
