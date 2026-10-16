<script>
    import Layout from "$modules/SuperAdmin/Layouts/SuperAdminLayout.svelte";
    import { Link, page } from "@inertiajs/svelte";
    import {
        Building,
        User,
        Box,
        Shield,
        Key,
        LampDesk,
        Presentation,
        ArrowLeft,
        Pencil,
        Trash2,
    } from "@lucide/svelte";

    import Title from "$components/Title.svelte";
    import RecordData from "$components/RecordData.svelte";

    let { organization } = $props();
    let user = $derived($page.props.auth?.user);

    function deleteOrg(id) {
        if (confirm("Are you sure you want to delete this organization?")) {
            router.delete(`/admin/organizations/${id}`);
        }
    }
</script>

<Layout>
    <Title
        title="Detailed Properties"
        subtitle="Detailed properties of the organization"
    />

    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <Building />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{organization.name}</p>
                    <p class="subtitle is-6">{organization.slug}</p>
                </div>
            </div>

            {#if organization.domain}
                <div class="content">
                    Domain: {organization.domain}
                    <a href={`https://${organization.domain}`} target="_blank"
                        >Open</a
                    >
                </div>
            {/if}

            <footer class="card-footer">
                <!-- Edit Button -->
                <Link
                    href={`/admin/organizations/${organization.id}/edit`}
                    class="button is-info is-light card-footer-item"
                >
                    <span class="icon"><Pencil size="16" /></span>
                </Link>

                <!-- Delete Button -->
                <button
                    class="button is-danger is-light card-footer-item"
                    onclick={() => deleteOrg(organization.id)}
                >
                    <span class="icon"><Trash2 size="16" /></span>
                </button>
            </footer>

            <RecordData
                item={organization}
                url="asf"
                status={organization.is_active ? "Active" : "Inactive"}
            />
        </div>
    </div>
</Layout>
