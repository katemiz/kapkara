<script>
    /**
     * Reusable Form Checkbox Component for Laravel-Inertia-Svelte 5
     * Single checkbox for boolean values
     * 
     * @component
     * @example
     * <FormCheckBoxSingle 
     *   form={form} 
     *   name="terms" 
     *   label="I agree to the terms and conditions"
     * />
     */
    
    let {
        form,              // Inertia form object (required)
        name,              // Field name (required)
        label = '',        // Checkbox label text (required for accessibility)
        required = false,  // Required attribute
        disabled = false,  // Disabled attribute
        id = name,         // Checkbox id (defaults to name)
        class: customClass = '' // Additional CSS classes
    } = $props();
</script>

<div class="field {customClass}">
    <div class="control">
        <label class="checkbox">
            <input
                type="checkbox"
                {id}
                {required}
                {disabled}
                bind:checked={$form[name]}
            />
            {#if label}
                {label}
                {#if required}
                    <span class="has-text-danger">*</span>
                {/if}
            {/if}
        </label>
    </div>
    
    {#if $form.errors[name]}
        <p class="help is-danger">{$form.errors[name]}</p>
    {/if}
</div>