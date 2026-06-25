<script>
    /**
     * Reusable Record Data Component for Laravel-Inertia-Svelte 5
     *
     * @component
     * @example
     * <RecordData
     *   item={item}
     *   url="https://example.com/record/1"
     *   status="DRAFT"
     * />
     */
    import QRCode from "$components/QRCode.svelte";

    let { item, url, status = false } = $props();

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

    let now = $derived(
        new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        }).format(new Date()),
    );
</script>


<!-- Main container -->
<nav class="level mt-6">
    <!-- Left side -->
    <div class="level-left">
    <div>
        <p class="is-size-7 has-text-grey">Added</p>
        <p>{item.created_user_mail}</p>
        <p class="is-size-7 has-text-grey">{createdOn}</p>
    </div>
    </div>


    <div class="level-item has-text-centered">
        <div>
            <span class="has-text-grey is-size-7">{now}</span>
            <QRCode value={url} />
            {#if status}
                <span class="tag">{status}</span>
            {/if}
        </div>
    </div>

    <!-- Right side -->
    <div class="level-right has-text-right">
        <div>
            {#if updatedOn !== createdOn}
                <p class="is-size-7 has-text-grey">Modified</p>
                <p>{item.updated_user_mail}</p>
                <p class="is-size-7 has-text-grey">{updatedOn}</p>
            {:else}
                <p class="is-size-7 has-text-grey">No modifications</p>
            {/if}
        </div>
    </div>
</nav>
