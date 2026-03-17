<script>
    import { KAPKARA, PATHS, MYAPPS } from "$lib/config";
</script>



<footer class="footer has-background-dark">


    <div class="fixed-grid has-3-cols has-1-cols-mobile">
        <div class="grid">
            <div class="cell has-text-left has-text-centered-mobile">
                <a href={KAPKARA.url} class="icon-text has-color-warning">
                <span class="icon has-text-grey-light mb-2">
                    <img
                        src="{PATHS.path_images_prefix}{KAPKARA.logo}"
                        alt="kapkara logo"
                        width="28px"
                    />
                </span>
                </a>
                <br />
                <a href={KAPKARA.url} class="mt-6 has-text-white">
                    {KAPKARA.name}
                </a>
            </div>

            <div class="cell has-text-weight-light has-text-centered">
                <span class="icon has-text-centered has-background-white">
                    <img
                        src="/images/Apps/tree-view.svg"
                        alt="Requirements Management Logo"
                    />
                </span>

                <p class="is-size-6 has-text-white">
                    {MYAPPS[1].name}
                </p>

                <p class="is-size-7 has-text-warning">
                    {MYAPPS[1].label}
                </p>

                <p class="mt-6 has-text-grey-lighter">
                    {KAPKARA.title}
                </p>


            </div>

            <div class="cell has-text-weight-light has-text-right has-text-centered-mobile">
                <p class="has-text-grey">
                    {KAPKARA.version}
                </p>

                <p class="is-size-7 has-text-white">
                    {KAPKARA.copyright}
                </p>

                <p class="is-size-7 has-text-warning">
                    {KAPKARA.motto}
                </p>
            </div>
        </div>
    </div>



</footer>
