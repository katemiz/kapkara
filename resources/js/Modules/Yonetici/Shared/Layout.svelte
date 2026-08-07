<script>
    import NavBar from "$modules/Yonetici/Shared/NavBar.svelte";
    import Footer from "$modules/Yonetici/Shared/Footer.svelte";

    export let title = "eYonetici - Product Data Management";
    export let favicon = "/images/kapkara-favicon.ico";

    import { page } from "@inertiajs/svelte";
</script>

<svelte:head>
    <title>{title} | kapkara</title>
    <link rel="icon" type="image/x-icon" href={favicon} />
</svelte:head>

{console.log("Current page props:", $page.props)}

<NavBar />

<slot />

<Footer />
