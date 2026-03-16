<script>
    import { KAPKARA, PATHS, MYAPPS } from "$lib/config";
</script>



<footer class="footer has-background-dark">
    <div class="columns has-text-white">
        <div class="column has-text-centered-mobile">
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
        <div class="column">


            <p
                class="has-text-weight-light has-text-info has-text-centered has-text-centered-mobile"
            >
                <span class="icon has-text-centered">
                    <img
                        src="/images/Apps/tree-view.svg"
                        alt="Requirements Management Logo"
                    />
                </span>
            </p>

            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile"
            >
                {MYAPPS[1].name}
            </p>

            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile is-size-7 has-text-warning"
            >
                {MYAPPS[1].label}
            </p>

            <p class="has-text-weight-light has-text-centered has-text-centered-mobile is-size-7 has-text-grey">by</p>

            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile"
            >
                {KAPKARA.title}
            </p>
        </div>
        <div class="column">
            <p
                class="has-text-weight-light has-text-right has-text-centered-mobile"
            >
                {KAPKARA.version}
            </p>
            <p
                class="has-text-weight-light has-text-right has-text-centered-mobile is-size-7"
            >
                {KAPKARA.copyright}
            </p>
            <p
                class="has-text-weight-light has-text-right has-text-centered-mobile is-size-7 has-text-warning"
            >
                {KAPKARA.motto}
            </p>
        </div>
    </div>
</footer>
