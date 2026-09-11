<script>
    import Layout from "../../Shared/Layout.svelte";

    import { Copy } from "@lucide/svelte";
    import { fdata } from "./blade.js";

    function copyText(text) {
        navigator.clipboard.writeText(text);
    }
</script>

<Layout>
    <section class="section">
        <div class="hero-body">
            <figure class="image is-3by1">
                <img src="/images/Base/hero.svg" alt="Hero" />
            </figure>
        </div>

        <table class="table is-fullwidth mt-4">
            <tbody>
                {#each fdata as kisi}
                    <tr>
                        <td class="is-narrow">
                            <figure class="image is-64x64">
                                <img
                                    class="is-rounded"
                                    src="/images/Base/{kisi.image}"
                                    alt={kisi.name}
                                />
                            </figure>
                        </td>
                        <td>
                            <h1 class="title">{kisi.name}</h1>
                            <h2 id="tcvn" class="subtitle">
                                {new Intl.NumberFormat("fr-FR").format(
                                    kisi.tcvn,
                                )}
                                <Copy
                                    size="18"
                                    color="blue"
                                    onclick={() => copyText(kisi.tcvn)}
                                />
                            </h2>

                            <p>{kisi.kangrubu}</p>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>
</Layout>
