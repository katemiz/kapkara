<script>
    import { KAPKARA } from "$lib/config";
    import { app_config } from "$modules/Yonetici/Shared/app_config.js";

    import PdmIcon from "$components/Icons/PdmIcon.svelte";
    import KapkaraIcon from "$components/Icons/KapkaraIcon.svelte";
</script>

<footer class="footer has-background-light">
    <div class="columns">
        <div class="column has-text-left has-text-centered-mobile">
            <!-- <img src="/images/{{config('constants.company.logo')}}" width="28px" alt="Company Icon"><br> -->

            <KapkaraIcon />
            <br />

            <a href={KAPKARA.url} class="has-text-weight-light">
                {KAPKARA.name}
            </a>
            <p class="has-text-weight-light is-size-7">{KAPKARA.motto}</p>
        </div>

        <div class="column has-text-centered has-text-centered-mobile">
            <p class="mb-4 is-size-6">{app_config.motto}</p>
            <p class="has-text-grey">{app_config.description}</p>
            <p>{app_config.title}</p>
        </div>

        <div class="column has-text-right has-text-centered-mobile">
            {app_config.copyright_year}<br />

            {app_config.copyright}<br />
            <span class="is-size-7 has-text-grey">{app_config.version}</span>
        </div>
    </div>
</footer>
