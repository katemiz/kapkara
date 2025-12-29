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
    
    let {
        form,              // Inertia form object (required)
        name,              // Field name (required)
        options = [],      // Array of { value, label } objects (required)
        label = '',        // Label text
        id = name,         // Select id (defaults to name)
        required = false,  // Required attribute
        disabled = false,  // Disabled attribute
        placeholder = 'Select an option', // Placeholder text
        value='',
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
        <div class="select {customClass} {$form.errors[name] ? 'is-danger' : ''}" autocomplete="off">
            <select
                {id}
                {required}
                {disabled}
                bind:value={$form[name]}
            >
                {#if placeholder}
                    <option value="" disabled selected={!$form[name]}>
                        {placeholder}
                    </option>
                {/if}
                
                <!-- {#each options as option}
                    <option value={option.value} selected={String(option.value) == String(value)}>
                        {option.label} -{value} : {option.value} {typeof value} { typeof String(option.value)} 
                    </option>
                {/each} -->


                
{#each options as option}
    {#if String(option.value) === String(value)}
        <option value={option.value} selected="">
            {option.label}
        </option>
    {:else}
        <option value={option.value}>
            {option.label}
        </option>
    {/if}
{/each}




            </select>
        </div>
    </div>
    
    {#if $form.errors[name]}
        <p class="help is-danger">{$form.errors[name]}</p>
    {/if}
</div>