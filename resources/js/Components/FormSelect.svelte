<script>
    /**
     * Reusable Form Select Component for Laravel-Inertia-Svelte 5
     *
     * @component
     * @example
     * <FormSelect
     *   form={form}
     *   name="category"
     *   label="Category"
     *   options={[
     *     { value: '1', label: 'Option 1' },
     *     { value: '2', label: 'Option 2' }
     *   ]}
     * />
     */

    import { page } from "@inertiajs/svelte";

    let {
        form, // Inertia form object (required)
        name, // Field name (required). Is to be used for id also
        options = [], // Array of { value, label } objects (required)
        label = "", // Label text
        id = name, // Select id (defaults to name)
        required = false, // Required attribute
        disabled = false, // Disabled attribute
        placeholder = "Select an option", // Placeholder text
        class: customClass = "", // Additional CSS classes
    } = $props();

    // Determine if there is an error for this specific field
    // Check the form-specific errors first, fallback to global page errors
    //let errorMessage = $derived($form.errors[name] || $page.props.errors[name]);

    let errorMessage = $derived($page.props.errors[name]);
    let hasError = $derived(!!errorMessage);
</script>

<div class="field">
    {#if label}
        <label class="label" for={id}>
            {label}
            {#if required}
                <span class="has-text-danger">*</span>
            {/if}
        </label>
    {/if}

    <div class="control">
        <div
            class="select {customClass} {hasError ? 'is-danger' : ''}"
            autocomplete="off"
        >
            <select
                {id}
                {required}
                {disabled}
                bind:value={$form[name]}
                class={hasError ? "is-danger" : ""}
            >
                {#if placeholder}
                    <option value="" disabled selected={!$form[name]}>
                        {placeholder}
                    </option>
                {/if}

                {#each options as option}
                    <option value={option.value}>
                        {option.label}
                    </option>
                {/each}
            </select>
        </div>
    </div>

    {#if hasError}
        <p class="help is-danger">{errorMessage}</p>
    {/if}
</div>
