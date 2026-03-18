<script>

    import DeleteButton from "$components/DeleteButton.svelte";
    import { Save, X, TableOfContents, Pencil, Plus } from "@lucide/svelte";

    let { form_type, item, isEdit, route_name } = $props();
</script>

{#if form_type == "show"}
    <nav class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
            <p class="buttons">
                <a
                    href="/{route_name}"
                    class="button is-link is-inverted is-outlined"
                    data-tooltip="List All Materials"
                >
                    <span class="icon is-small">
                        <TableOfContents size="16" />
                    </span>
                </a>

                <a
                    href="/{route_name}/create"
                    class="button is-link is-inverted is-outlined"
                    data-tooltip="New {route_name}"
                >
                    <span class="icon is-small">
                        <Plus size="16" />
                    </span>
                </a>

                <a
                    href="/{route_name}/{item.id}/edit"
                    class="button is-link is-inverted is-outlined"
                    data-tooltip="Edit this {route_name}"
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
                <DeleteButton url="/{route_name}/{item.id}" />
            </p>
        </div>
    </nav>
{/if}

{#if form_type == "form"}
    <nav class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
            <p class="buttons">
                <button
                    type="submit"
                    form="genericForm"
                    class="button is-link is-inverted is-outlined"
                >
                    <span class="icon is-small">
                        <Save size="16" />
                    </span>
                </button>
            </p>
        </div>

        <!-- Right side -->
        <div class="level-right">
            <p class="buttons">
                {#if isEdit & (item != null)}
                    <a href="/{route_name}/{item.id}" class="button">
                        <span class="icon">
                            <X size="16" />
                        </span>
                    </a>
                {:else}
                    <a href="/{route_name}" class="button">
                        <span class="icon">
                            <X size="16" />
                        </span>
                    </a>
                {/if}
            </p>
        </div>
    </nav>
{/if}
