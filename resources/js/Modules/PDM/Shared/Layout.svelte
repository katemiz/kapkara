<script>
    import NavBar from "$modules/PDM/Shared/NavBar.svelte";
    import Footer from "$modules/PDM/Shared/Footer.svelte";

    export let title = "PDM - Product Data Management";
    export let favicon = "/images/kapkara-favicon.ico";

    import { page } from '@inertiajs/svelte';


</script>


<svelte:head>
    <title>{title} | kapkara</title>
    <link rel="icon" type="image/x-icon" href={favicon}>
</svelte:head>

<!-- {console.log("Current page props:", $page.props)} -->

<NavBar />

<slot />

<Footer />






