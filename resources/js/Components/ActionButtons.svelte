<script>
import DeleteButton from "$components/DeleteButton.svelte";
import { Save, X, TableOfContents, Pencil, Plus, Send,Pin } from "@lucide/svelte";

let { form_type, item, isEdit, route_name } = $props();
</script>

{#if form_type == "show"}
    <nav class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
            <p class="buttons">
                <a
                    href="/{route_name}"
                    class="button is-ghost"
                >
                    <span class="icon is-small">
                        <TableOfContents size="20" />
                    </span>
                    <span>List All</span>
                </a>

                <a
                    href="/{route_name}/create"
                    class="button is-ghost"
                >
                    <span class="icon is-small">
                        <Plus size="20" />
                    </span>
                    <span>Add New</span>
                </a>

            </p>
        </div>

        <!-- Right side -->
        <div class="level-right">
            <a
                href="/{route_name}/{item.id}/edit"
                class="button is-dark"
                data-tooltip="Edit"
            >
                <span class="icon is-small">
                    <Pencil size="20" />
                </span>
            </a>

            <a
                href="/{route_name}/{item.id}/edit"
                class="button is-dark"
                data-tooltip="Freeze"
            >
                <span class="icon is-small">
                    <Pin size="20" />
                </span>
            </a>

            <a
                href="/{route_name}/{item.id}/edit"
                class="button is-dark"
                data-tooltip="Release"
            >
                <span class="icon is-small">
                    <Send size="20" />
                </span>
            </a>

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
