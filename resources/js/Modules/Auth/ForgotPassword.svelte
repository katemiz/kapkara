<script>
    import { useForm } from "@inertiajs/svelte";

    export let status = "";

    let form = useForm({
        email: "",
    });

    function submit(e) {
        e.preventDefault();
        $form.post("/forgot-password");
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-center mb-6">Forgot Password</h2>

        {#if status}
            <div class="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                {status}
            </div>
        {/if}

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
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                {#if $form.errors.email}
                    <p class="mt-1 text-sm text-red-600">
                        {$form.errors.email}
                    </p>
                {/if}
            </div>

            <button
                type="submit"
                disabled={$form.processing}
                class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
                {$form.processing ? "Sending..." : "Send Reset Link"}
            </button>

            <div class="mt-4 text-center text-sm">
                <a href="/login" class="text-blue-600 hover:underline"
                    >Back to Login</a
                >
            </div>
        </form>
    </div>
</div>
