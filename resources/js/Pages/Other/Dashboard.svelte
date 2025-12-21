<script>
    import { appSettings, toggleTheme } from "$lib/settings.svelte";
    import Layout from "../../Shared/Layout.svelte";
</script>

<Layout>
    <section class="section">
        <p>Current Theme: <strong>{appSettings.theme}</strong></p>
        <p>Welcome, {appSettings.userNickname}!</p>

        <button class="button is-info" onclick={toggleTheme}>
            Toggle Theme
        </button>

        <input
            class="input mt-2"
            type="text"
            bind:value={appSettings.userNickname}
            placeholder="Change your nickname"
        />
    </section>
</Layout>
