<script>
    /**
     * Reusable Form Input Component for Laravel-Inertia-Svelte 5
     *
     * @component
     * @example
     * <FormInput
     *   form={form}
     *   name="myInput"
     *   label="Title (myInput)"
     *   type="text"
     *   placeholder="Enter a title"
     * />
     */

    import { page } from "@inertiajs/svelte";

    let {
        form, // Inertia form object (required)
        name, // Field name (required)
        label = "", // Label text
        type = "text", // Input type
        placeholder = "", // Placeholder text
        id = name, // Input id (defaults to name)
        required = false, // Required attribute
        disabled = false, // Disabled attribute
        autocomplete = "", // Autocomplete attribute
        class: customClass = "", // Additional CSS classes
    } = $props();

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
        <input
            {id}
            class="input {customClass} {hasError ? 'is-danger' : ''}"
            {type}
            {placeholder}
            {required}
            {disabled}
            {autocomplete}
            bind:value={$form[name]}
        />
    </div>

    {#if hasError}
        <p class="help is-danger">{errorMessage}</p>
    {/if}
</div>
