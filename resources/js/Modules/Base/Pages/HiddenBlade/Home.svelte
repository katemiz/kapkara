<script>
    import Layout from "../../Shared/Layout.svelte";

    import { Plus } from "@lucide/svelte";
</script>

<Layout>
    <section class="section">
        <a href="/hidden-blade/create" class="button is-ghost">
            <span class="icon is-small">
                <Plus size="20" />
            </span>
            <span>Add New</span>
        </a>

        <div class="columns">
            <div class="column is-4">
                <aside class="menu">
                    <p class="menu-label">Hidden Blade</p>
                    <ul class="menu-list">
                        <li>
                            <a href="/funstuff/gauss"
                                >Gauss Distribution with Galton Board</a
                            >
                        </li>
                        <li><a href="/">Maxell's Demon (Coming)</a></li>
                    </ul>
                </aside>
            </div>

            <div class="column">
                <!-- Content area -->
                sdfdfdg
            </div>
        </div>
    </section>
</Layout>

<style>
    .section {
        height: 100dvh;
    }
</style>
