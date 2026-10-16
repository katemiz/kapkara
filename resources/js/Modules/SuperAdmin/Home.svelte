<script>
    import Layout from "$modules/SuperAdmin/Layouts/SuperAdminLayout.svelte";
    import { page } from "@inertiajs/svelte";

    import Dashboard from "./Dashboard.svelte";

    let user = $derived($page.props.auth?.user);

    let { menuItems, title = "Super Admin" } = $props();
</script>

<Layout>
    <Dashboard {user} {menuItems} />
</Layout>
