<script>
    /**
     * Reusable Form Radio Component for Laravel-Inertia-Svelte 5
     * 
     * @component
     * @example
     * <FormRadio 
     *   form={form} 
     *   name="gender" 
     *   label="Gender"
     *   options={[
     *     { value: 'male', label: 'Male' },
     *     { value: 'female', label: 'Female' }
     *   ]}
     * />
     */
    
    let {
        form,              // Inertia form object (required)
        name,              // Field name (required)
        options = [],      // Array of { value, label, disabled? } objects (required)
        label = '',        // Field label text
        required = false,  // Required attribute
        inline = false,    // Display options inline (horizontally)
        class: customClass = '' // Additional CSS classes for the field wrapper
    } = $props();
</script>

<div class="field {customClass}">
    {#if label}
        <label class="label">
            {label}
            {#if required}
                <span class="has-text-danger">*</span>
            {/if}
        </label>
    {/if}
    
    <div class="control">
        {#each options as option, index}
            <label class="radio" class:is-inline={inline}>
                <input
                    type="radio"
                    {name}
                    value={option.value}
                    bind:group={$form[name]}
                    disabled={option.disabled || false}
                    {required}
                />
                {option.label}
            </label>
            {#if !inline && index < options.length - 1}
                <br />
            {/if}
        {/each}
    </div>
    
    {#if $form.errors[name]}
        <p class="help is-danger">{$form.errors[name]}</p>
    {/if}
</div>

<style>
    .radio.is-inline {
        margin-right: 1rem;
    }
    
    .radio {
        display: inline-block;
    }
</style>