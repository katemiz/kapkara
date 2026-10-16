<script>
    import NavBar from "$modules/Base/Shared/NavBar.svelte";
    import Footer from "$modules/Base/Shared/Footer.svelte";

    import DashboardMenu from "$modules/SuperAdmin/DashboardMenu.svelte";

    import { page } from "@inertiajs/svelte";

    let user = $derived($page.props.auth?.user);
</script>

<NavBar />

{console.log($page.url)}
<div class="container is-fluid">
    <div class="fixed-grid has-8-cols has-1-cols-mobile">
        <div class="grid is-gapless">
            <div
                class="cell is-col-span-2 is-col-span-1-mobile has-background-ter"
            >
                <DashboardMenu {user} />
            </div>
            <div class="cell is-col-span-6 p-6">
                <slot />
            </div>
        </div>
    </div>
</div>

<Footer />
