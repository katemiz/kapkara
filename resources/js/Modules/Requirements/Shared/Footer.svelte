<script>
    import { KAPKARA, PATHS } from "$lib/config";
</script>

<footer class="footer has-background-dark" id="footer">
    <div class="columns has-text-white">
        <div class="column has-text-centered-mobile">
            <img
                src="{PATHS.path_images_prefix}{KAPKARA.logo}"
                width="28px"
                alt="Company Icon"
            />
            <br />
            <a href={KAPKARA.url} class="has-text-weight-light has-text-white">
                {KAPKARA.name}
            </a>
        </div>

        <div class="column">
            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile"
            >
                {KAPKARA.title}
            </p>
            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile is-size-7"
            >
                {KAPKARA.version}
            </p>

            <p
                class="has-text-centered has-text-centered-mobile has-text-grey is-size-6"
            >
                Laravel-Inertia-Svelte
            </p>
        </div>

        <div class="column">
            <p
                class="has-text-weight-light has-text-right has-text-centered-mobile"
            >
                {KAPKARA.copyright}
            </p>
            <p
                class="has-text-weight-light has-text-right has-text-centered-mobile
          is-size-7"
            >
                {KAPKARA.motto}
            </p>
        </div>
    </div>
</footer>

<footer class="footer has-background-dark">
    <div class="columns has-text-white">
        <div class="column has-text-centered-mobile">
            <a href={KAPKARA.url} class="icon-text has-color-warning">
                <span class="icon has-text-grey-light">
                    <img
                        src="{PATHS.path_images_prefix}{KAPKARA.logo}"
                        alt="kapkara logo"
                        width="28px"
                    />
                </span>
            </a>
            <br />
            <span class="ml-1 block">{KAPKARA.name}</span>
        </div>
        <div class="column">
            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile"
            >
                <span class="icon has-text-link has-text-centered is-block">
                    <img
                        src="/images/Apps/tree-view.svg"
                        alt="Requirements Management Logo"
                    />
                </span>

                <span class="ml-1 block">Requirements Stack</span>
                <span class="ml-1 block is-size-7 has-text-warning">
                    Manage Requirements in a Database
                </span>

                by

                <span class="ml-1 block">{KAPKARA.title}</span>
            </p>

            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile"
            >
                <span class="icon has-text-info has-text-centered">
                    <img
                        src="/images/Apps/tree-view.svg"
                        alt="Requirements Management Logo"
                    />
                </span>
            </p>

            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile"
            >
                Requirements Stack
            </p>

            <p
                class="has-text-weight-light has-text-centered has-text-centered-mobile is-size-7 has-text-warning"
            >
                Manage Requirements in a Database
            </p>

            by

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
                23.02
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
