<script>
    import { useForm } from "@inertiajs/svelte";

    import Title from "$components/Title.svelte";
    import FormInput from "$components/FormInput.svelte";
    import LangSwitch from "$components/LangSwitch.svelte";

    let { status } = $props(); // Laravel often sends a status message (e.g., password reset success)

    let form = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        $form.post("/login", {
            onFinish: () => $form.reset("password"),
        });
    }
</script>

<section class="section container is-max-desktop">
    <div class="kutu column is-offset-3 is-half p-5 has-background-white-ter">
        <nav class="level is-mobile mb-6">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item">
                    <a href="/">
                        <img
                            src="/images/Apps/baykus_orange.svg"
                            width="24px"
                            alt="Logo"
                        />
                    </a>
                </div>
            </div>

            <!-- Right side -->
            <div class="level-right has-text-right">
                <LangSwitch />
            </div>
        </nav>

        <Title title="PDM" subtitle="Product Data Management" />

        <div
            class="column is-offset-3 is-offset-4-mobile is-6 is-4-mobile my-2"
        >
            <figure class="image p-3 has-text-link-dark">
                <img src="/images/Apps/baykus_orange.svg" alt="Logo" />
            </figure>
        </div>

        <form onsubmit={submit}>
            <FormInput
                {form}
                name="email"
                label="E-Mail"
                placeholder="Enter your e-mail"
            />

            <FormInput
                {form}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
            />

            <button class="button is-link mt-6 is-fullwidth">Login</button>
        </form>
    </div>

    {#if status}
        <div class="notification is-success is-light">
            {status}
        </div>
    {/if}
    <p class="has-text-centered is-size-7 mt-4">
        <a href="/register">Create an account</a>
        &nbsp;·&nbsp;
        <a href="/forgot-password">Forgot password</a>
    </p>
</section>

<style>
    .kutu {
        border: 1px solid #530202;
    }
</style>
