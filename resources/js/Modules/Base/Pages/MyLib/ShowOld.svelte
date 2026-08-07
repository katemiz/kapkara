<script>
    import Layout from "../../Shared/Layout.svelte";
    import RecordData from "$components/RecordData.svelte";
    import Title from "$components/Title.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    import { Sheet, Pencil, Trash, Paperclip } from "@lucide/svelte";

    let { asset } = $props();

    let url = $derived(window.location.origin + "/mylib/" + asset.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Asset {asset.id}" subtitle="Show Properties" />

        <nav class="level is-mobile">
            <!-- Left side -->
            <div class="level-left">
                <p class="buttons">
                    <a
                        href="/mylib"
                        class="button is-link is-inverted is-outlined"
                        data-tooltip="List All Assets"
                    >
                        <span class="icon is-small">
                            <Sheet size="16" />
                        </span>
                    </a>

                    <a
                        href="/mylib/{asset.id}/edit"
                        class="button is-link is-inverted is-outlined"
                        data-tooltip="Edit this Asset"
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
                    <DeleteButton url="/mylib/{asset.id}" />
                </p>
            </div>
        </nav>

        <p class="subtitle">{asset.title}</p>
        <p>{@html asset.remarks}</p>

        <!-- 
        FILES 
        -->
        <label class="label" for="names">Files</label>

        <div class="mt-4" name="files">
            {#each asset.files as item}
                <div class="tags has-addons my-2">
                    <span class="tag"><Paperclip size="16" /></span>
                    <span class="tag">{item.name} </span>
                    <span class="tag">{item.mime}</span>
                    <span class="tag">{item.size}</span>
                    <span class="tag">{item.id}</span>
                    <span class="tag"><Trash size="16" color="red" /></span>
                </div>
            {/each}
        </div>

        <!-- {console.log("ASSET", asset)} -->

        <RecordData item={asset} {url} />
    </section>
</Layout>
