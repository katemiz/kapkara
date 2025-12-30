<script>
    /**
     * Reusable Form Checkbox Group Component for Laravel-Inertia-Svelte 5
     * Multiple checkboxes for selecting multiple values (array binding)
     *
     * @component
     * @example
     * <FormCheckBoxMultiple
     *   form={form}
     *   name="interests"
     *   label="Select your interests"
     *   options={[
     *     { value: 'coding', label: 'Coding' },
     *     { value: 'design', label: 'Design' }
     *   ]}
     * />
     */

    let {
        form, // Inertia form object (required)
        name, // Field name (required)
        options = [], // Array of { value, label, disabled? } objects (required)
        label = "", // Field label text
        required = false, // Required attribute
        inline = false, // Display options inline (horizontally)
        class: customClass = "", // Additional CSS classes for the field wrapper
    } = $props();

    // Ensure form field is initialized as an array
    $effect(() => {
        if (!Array.isArray($form[name])) {
            $form[name] = [];

            console.log('not array')
        }
        console.log('effect ',$form[name]  )
    });
</script>

<div class="field {customClass}">
    {#if label}
        <label class="label" for={name}>
            {label}
            {#if required}
                <span class="has-text-danger">*</span>
            {/if}
        </label>
    {/if}

    <div class="control">
        {#each options as option, index}
            <label class="checkbox" class:is-inline={inline}>
                <input
                {name}
                    type="checkbox"
                    value={String(option.value)}
                    bind:group={$form[name]}
                    disabled={option.disabled || false}

                    
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
    .checkbox.is-inline {
        margin-right: 1rem;
    }

    .checkbox {
        display: inline-block;
    }
</style>
