<script>
    /**
     * Reusable Form DateTime Component for Laravel-Inertia-Svelte 5
     * Uses datetime-local input type for date and time selection
     * 
     * @component
     * @example
     * <FormDateTime 
     *   form={form} 
     *   name="appointment_time" 
     *   label="Appointment Date & Time" 
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
        min = '',          // Minimum datetime (YYYY-MM-DDTHH:MM)
        max = '',          // Maximum datetime (YYYY-MM-DDTHH:MM)
        step = '',         // Step in seconds (e.g., '60' for 1 minute, '3600' for 1 hour)
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
            type="datetime-local"
            {placeholder}
            {required}
            {disabled}
            {min}
            {max}
            {step}
            bind:value={$form[name]}
        />
    </div>
    
    {#if $form.errors[name]}
        <p class="help is-danger">{$form.errors[name]}</p>
    {/if}
</div>