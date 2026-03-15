<script>
    import Layout from "$shared/Layout.svelte";
    import RecordData from "$components/RecordData.svelte";
    import FilesList from "$components/FilesList.svelte";
    import Title from "$components/Title.svelte";
    import ActionButtons from "$components/ActionButtons.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    import { Sheet, Pencil, ClipboardPlus } from "@lucide/svelte";

    let { user } = $props();

    let url = $derived(window.location.origin + "/user/" + user.id);
</script>

<Layout>
    <section class="section min-height-screen">
        <Title title="User {user.id}" subtitle="Show Properties" />

        <ActionButtons item={user} form_type="show" route_name="user" />

        <p class="subtitle">{user.name}</p>
        <p>{@html user.email}</p>

        <FilesList media={user.files} />
        <RecordData item={user} {url} />
    </section>
</Layout>
