<script>
    import { KAPKARA } from "$lib/config";
    import { app_config } from "$modules/PDM/Shared/app_config.js";

    import PdmIcon from "$components/Icons/PdmIcon.svelte";
    import KapkaraIcon from "$components/Icons/KapkaraIcon.svelte";
</script>

<footer class="footer has-background-dark" id="footer">
    <div class="columns has-text-white">
        <div class="column has-text-centered-mobile">
            <KapkaraIcon />
            <br />
            <a href={KAPKARA.url} class="has-text-weight-light has-text-white">
                {KAPKARA.name}
            </a>
        </div>

        <div class="column has-text-centered has-text-centered-mobile">
            <PdmIcon color="white " />

            <p class="has-text-weight-light mt-4">
                {app_config.code}
            </p>

            <p class="has-text-weight-light has-text-warning mb-6">
                {app_config.title}
            </p>

            <p class="has-text-weight-light has-text-grey">
                {app_config.description}
            </p>

            <p class="has-text-weight-light is-size-7 mt-4">
                V{app_config.version}
            </p>

            <img src="/images/laravel.svg" width="28px" alt="Company Icon" />
            <img src="/images/svelte.svg" width="28px" alt="Company Icon" />
        </div>

        <div class="column has-text-right has-text-centered-mobile">
            <p class="">
                {KAPKARA.copyright}
            </p>
            <p class="is-size-7 has-text-warning">
                {KAPKARA.motto}
            </p>
        </div>
    </div>
</footer>
