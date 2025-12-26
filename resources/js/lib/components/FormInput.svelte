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
     *   placeholder="Enter a title"
     * />
     */
    
    let {
        form,              // Inertia form object (required)
        name,              // Field name (required)
        label = '',        // Label text
        type = 'text',     // Input type
        placeholder = '',  // Placeholder text
        id = name,         // Input id (defaults to name)
        required = false,  // Required attribute
        disabled = false,  // Disabled attribute
        autocomplete = '', // Autocomplete attribute
        class: customClass = '' // Additional CSS classes
    } = $props();
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
            class="input {customClass} {$form.errors[name] ? 'is-danger' : ''}"
            {type}
            {placeholder}
            {required}
            {disabled}
            {autocomplete}
            bind:value={$form[name]}
        />
    </div>
    
    {#if $form.errors[name]}
        <p class="help is-danger">{$form.errors[name]}</p>
    {/if}
</div>

<style>
    /* Optional: Add any custom styles here */
</style>