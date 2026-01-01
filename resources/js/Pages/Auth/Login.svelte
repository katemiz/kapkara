<script>
    import { useForm } from "@inertiajs/svelte";

    import Title from "$lib/components/Title.svelte";
    import FormInput from "$lib/components/FormInput.svelte";
    import LangSwitch from "$lib/components/LangSwitch.svelte";

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
                            src="/images/baykus_orange.svg"
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
                <img src="/images/baykus_orange.svg" alt="Logo" />
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

<!-- <section class="hero is-fullheight is-light">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                    {#if status}
                        <div class="notification is-success is-light">
                            {status}
                        </div>
                    {/if}

                    <form onsubmit={submit} class="box p-6">
                        <h3 class="title is-4 has-text-centered mb-5">Login</h3>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left">
                                <input
                                    type="email"
                                    class="input {$form.errors.email
                                        ? 'is-danger'
                                        : ''}"
                                    placeholder="e.g. bob@gmail.com"
                                    bind:value={$form.email}
                                    required
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                            {#if $form.errors.email}
                                <p class="help is-danger">
                                    {$form.errors.email}
                                </p>
                            {/if}
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-left">
                                <input
                                    type="password"
                                    class="input {$form.errors.password
                                        ? 'is-danger'
                                        : ''}"
                                    placeholder="*******"
                                    bind:value={$form.password}
                                    required
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </div>
                            {#if $form.errors.password}
                                <p class="help is-danger">
                                    {$form.errors.password}
                                </p>
                            {/if}
                        </div>

                        <div class="field">
                            <label class="checkbox">
                                <input
                                    type="checkbox"
                                    bind:checked={$form.remember}
                                />
                                Remember me
                            </label>
                        </div>

                        <div class="field mt-5">
                            <button
                                type="submit"
                                class="button is-primary is-fullwidth {$form.processing
                                    ? 'is-loading'
                                    : ''}"
                                disabled={$form.processing}
                            >
                                Login
                            </button>
                        </div>

                        <hr />
                        <p class="has-text-centered is-size-7">
                            <a href="/register">Create an account</a>
                            &nbsp;·&nbsp;
                            <a href="/forgot-password">Forgot password</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section> -->

<style>
    .kutu {
        border: 1px solid #530202;
    }
</style>
