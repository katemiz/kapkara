<script>
    import { useForm } from "@inertiajs/svelte";

    import Title from "$components/Title.svelte";
    import FormInput from "$components/FormInput.svelte";
    import LangSwitch from "$components/LangSwitch.svelte";

    let form = useForm({
        name: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(e) {
        e.preventDefault();
        $form.post("/register");
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

        <form onsubmit={submit}>
            <FormInput
                {form}
                name="name"
                label="Name"
                placeholder="Enter name"
            />

            <FormInput
                {form}
                name="lastname"
                label="Last Name"
                placeholder="Enter last name"
            />

            <FormInput
                {form}
                name="email"
                label="E-Mail"
                placeholder="Enter e-mail"
            />

            <FormInput
                {form}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
            />

            <FormInput
                {form}
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                placeholder="Enter your password again"
            />

            <button class="button is-link mt-6 is-fullwidth">Register</button>
        </form>
    </div>
    <p class="mt-4 has-text-centered is-size-7">
        Already have an account?
        <a href="/login" class="text-blue-600 hover:underline">Login</a>
    </p>
</section>
