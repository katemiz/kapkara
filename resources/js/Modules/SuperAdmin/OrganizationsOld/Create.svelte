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
    import Form from "./Form.svelte";

    let { organization } = $props();
    let user = $derived($page.props.auth?.user);
</script>

<Layout>
    <Title
        title="Add New Organization"
        subtitle="Create a new organization"
    />

    <Form />
</Layout>
