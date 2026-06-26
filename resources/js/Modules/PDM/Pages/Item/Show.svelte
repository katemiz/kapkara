<script>
    import Swal from 'sweetalert2';

    import { router } from '@inertiajs/svelte';

    import Layout from "$modules/PDM/Shared/Layout.svelte";
    import RecordData from "$components/RecordData.svelte";
    import FilesList from "$components/FilesList.svelte";
    import Title from "$components/Title.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    let { item,permissions,revisions } = $props();

    import { docs_config } from "$modules/PDM/Shared/docs_config.js";
    import QRCode from "$components/QRCode.svelte";

    import { TableOfContents, Pencil, Plus, Send,Pin, LayersPlus } from "@lucide/svelte";


    let url = $derived(window.location.origin + "/item/" + item.id);

    const confirmFreezeReleaseRevise = (action_type) => {

        let title,path,return_text;

        if (action_type === 'freeze') {
            // Show freeze confirmation
            title = 'Are you sure to freeze this document?';
            path = `/pdm/item/${item.id}/freeze`;
            return_text = 'Frozen';
        } else if (action_type === 'release') {
            // Show release confirmation
            title = 'Are you sure to release this document?';
            path = `/pdm/item/${item.id}/release`;
            return_text = 'Released';
        } else if (action_type === 'revise') {
            // Show revise confirmation
            title = 'Are you sure to revise this document?';
            path = `/pdm/item/${item.id}/revise`;
            return_text = 'Revised';
        }


        Swal.fire({
            title: title,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
                confirmButtonColor: '#d33', // Red color for delete
                cancelButtonColor: '#3085d6', // Blue color for cancel
                confirmButtonText: action_type === 'freeze' ? 'Freeze!' : action_type === 'release' ? 'Release!' : 'Revise!',
                cancelButtonText: 'No',

                // Custom button classes for better styling consistency
                customClass: {
                    confirmButton: 'button mx-4 is-danger is-light',
                    cancelButton: 'button mx-4'
                },
                buttonsStyling: false // Important to use custom classes
        }).then((result) => {
            if (result.isConfirmed) {
                // Freeze the Document
                // Execute the Inertia request to your freeze endpoint
                router.patch(path, {}, {
                    onSuccess: () => {
                        Swal.fire(return_text + '!', 'The document has been ' + return_text.toLowerCase() + '.', 'success');
                    },
                    onError: () => {
                        Swal.fire('Error!', 'Something went wrong.', 'error');
                    }
                });
            }
        });
    };
        
    


</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="Parts/Products/Components" subtitle="Show Parts/Products/Components Attributes and Properties" />

        <div class="box mt-6">
            
            <nav class="level is-mobile">
                <!-- Left side -->
                <div class="level-left">
                    <p class="buttons">
                        <a
                            href="/pdm/item"
                            class="button is-ghost"
                        >
                            <span class="icon is-small">
                                <TableOfContents size="20" />
                            </span>
                            <span>List All</span>
                        </a>

                        <a
                            href="/pdm/item/create"
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

                    {#if permissions.is_editable}
                    <a
                        href="/pdm/item/{item.id}/edit"
                        class="button is-dark"
                        data-tooltip="Edit"
                    >
                        <span class="icon is-small">
                            <Pencil size="20" />
                        </span>
                    </a>
                    {/if}

                    {#if permissions.is_freezable}
                    <button 
                        onclick={() => confirmFreezeReleaseRevise('freeze')}
                        class="button is-dark"
                        data-tooltip="Freeze"
                    >
                        <span class="icon is-small">
                            <Pin size="20" />
                        </span>
                    </button>
                    {/if}

                    {#if permissions.is_releaseable}
                    <button
                        onclick={() => confirmFreezeReleaseRevise('release')}
                        class="button is-dark"
                        data-tooltip="Release"
                    >
                        <span class="icon is-small">
                            <Send size="20" />
                        </span>
                    </button>
                    {/if}

                    {#if permissions.is_reviseable}
                    <button
                        onclick={() => confirmFreezeReleaseRevise('revise')}
                        class="button is-dark"
                        data-tooltip="Revise"
                    >
                        <span class="icon is-small">
                            <LayersPlus size="20" />
                        </span>
                    </button>
                    {/if}

                    {#if permissions.is_deletable}
                        <DeleteButton url="/pdm/item/{item.id}" />
                    {/if}
                </div>
            </nav>

            <!--DOC TITLE HEADER -->
            <div class="columns">
                <div class="column is-narrow">
                    <!-- Main content area -->
                    <figure class="image">
                        <QRCode value={url} size="96" dark="#1B2845"/>
                    </figure>
                </div>
                <div class="column">
                    <!-- Sidebar or additional info -->
                    <Title title={"D" + item.number + " R" + item.revision} subtitle={item.title}/>
                </div>

                <div class="column has-text-right">
                    <span class="tag">{docs_config.doc_types.find((type) => type.value === item.item_type)?.description}</span>
                    <div class="mt-1">
                    {#if revisions}
                        {#each revisions as revision}
                        <a href="/pdm/item/{revision.id}">
                        <span class="tag {item.revision == revision.revision ? 'is-black' : 'is-warning'} mr-1">R{revision.revision}</span>
                        </a>
                        {/each}
                    {/if}
                    </div>
                </div>
            </div>


            {@html item.remarks}

            <FilesList media={item.files} />
            <RecordData item={item} {url} status={docs_config.statuses.find((status) => status.value === item.status)?.description}/>
        </div>
    </section>
</Layout>