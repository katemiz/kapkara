<script>
    import Layout from "$modules/SuperAdmin/Layouts/SuperAdminLayout.svelte";
    import { page } from "@inertiajs/svelte";
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
    import Form from "./Form.svelte";

    let { organization } = $props();
    let user = $derived($page.props.auth?.user);
</script>

<Layout>
    <Title
        title="Edit Organization"
        subtitle="Detailed properties of the organization"
    />

    <Form {organization} isEditing={true} />
</Layout>
