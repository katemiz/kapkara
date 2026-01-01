<script>
    import { useForm } from "@inertiajs/svelte";

    export let token;
    export let email;

    let form = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    function submit(e) {
        e.preventDefault();
        $form.post("/reset-password");
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-center mb-6">Reset Password</h2>

        <form on:submit={submit}>
            <div class="mb-4">
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 mb-2"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    bind:value={$form.email}
                    class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    readonly
                />
            </div>

            <div class="mb-4">
                <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 mb-2"
                >
                    New Password
                </label>
                <input
                    id="password"
                    type="password"
                    bind:value={$form.password}
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                {#if $form.errors.password}
                    <p class="mt-1 text-sm text-red-600">
                        {$form.errors.password}
                    </p>
                {/if}
            </div>

            <div class="mb-6">
                <label
                    for="password_confirmation"
                    class="block text-sm font-medium text-gray-700 mb-2"
                >
                    Confirm Password
                </label>
                <input
                    id="password_confirmation"
                    type="password"
                    bind:value={$form.password_confirmation}
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={$form.processing}
                class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
                {$form.processing ? "Resetting..." : "Reset Password"}
            </button>
        </form>
    </div>
</div>
