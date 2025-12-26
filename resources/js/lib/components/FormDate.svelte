<script>
    /**
     * Reusable Form Date Component for Laravel-Inertia-Svelte 5
     * 
     * @component
     * @example
     * <FormDate 
     *   form={form} 
     *   name="birth_date" 
     *   label="Date of Birth" 
     * />
     */
    
    let {
        form,              // Inertia form object (required)
        name,              // Field name (required)
        label = '',        // Label text
        placeholder = '',  // Placeholder text
        id = name,         // Input id (defaults to name)
        required = false,  // Required attribute
        disabled = false,  // Disabled attribute
        min = '',          // Minimum date (YYYY-MM-DD)
        max = '',          // Maximum date (YYYY-MM-DD)
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
            type="date"
            {placeholder}
            {required}
            {disabled}
            {min}
            {max}
            bind:value={$form[name]}
        />
    </div>
    
    {#if $form.errors[name]}
        <p class="help is-danger">{$form.errors[name]}</p>
    {/if}
</div>