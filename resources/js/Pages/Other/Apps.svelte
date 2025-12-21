<script>
    import Layout from "../../Shared/Layout.svelte";

    import { MYAPPS } from "$lib/config";
</script>

<Layout>
    <section class="section">
        <p class="title">Apps We Developed</p>
        <div class="fixed-grid has-2-cols has-1-cols-mobile">
            <div class="grid">
                {#each MYAPPS as mapp}
                    <div class="card cell">
                        <div class="card-image has-background-white-ter">
                            <figure class="image is-4by3">
                                <img
                                    src="images/Apps/{mapp.app_hero}"
                                    alt={mapp.label}
                                />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img
                                            src="images/Apps/{mapp.logo}"
                                            alt={mapp.label}
                                        />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <a
                                        class="title is-4 has-text-link"
                                        href={mapp.url}
                                    >
                                        {mapp.name}
                                    </a>
                                    <p class="subtitle is-6 has-text-grey">
                                        {mapp.label}
                                    </p>
                                </div>
                            </div>

                            <div class="content">
                                {@html mapp.desc}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</Layout>
