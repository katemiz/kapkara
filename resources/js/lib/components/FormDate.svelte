<script>
    import AirDatepicker from "air-datepicker";
    import "air-datepicker/air-datepicker.css";

    import localeEn from "air-datepicker/locale/en";
    import localeTr from "air-datepicker/locale/tr";

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
        form, // Inertia form object (required)
        name, // Field name (required)
        label = "", // Label text
        placeholder = "", // Placeholder text
        id = name, // Input id (defaults to name)
        required = false, // Required attribute
        disabled = false, // Disabled attribute
        minDate = "", // Minimum date (YYYY-MM-DD)
        maxDate = "", // Maximum date (YYYY-MM-DD)
        lang = "tr", // Language for datepicker
        timepicker = false, // Enable time picker
        onlyTimepicker = false, // Show only time picker
        class: customClass = "", // Additional CSS classes
    } = $props();

    let dateInput = $state(); // We will bind this to the element

    $effect(() => {
        // We use the direct element reference instead of a string selector
        const dp = new AirDatepicker(dateInput, {
            locale: lang === "en" ? localeEn : localeTr,
            dateFormat: "dd MMMM yyyy",
            timepicker: timepicker,
            onlyTimepicker: onlyTimepicker,
            // minDate: minDate ? new Date(minDate) : null,
            // maxDate: maxDate ? new Date(maxDate) : null,
            autoClose: true,
            // Update the form store when a date is selected
            onSelect({ date }) {
                // Formatting to YYYY-MM-DD for Laravel
                if (date) {
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, "0");
                    const day = String(date.getDate()).padStart(2, "0");
                    $form[name] = `${year}-${month}-${day}`;
                }
            },
        });

        // Cleanup when component is destroyed
        return () => dp.destroy();
    });
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

    <!-- 

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

 -->

    <div class="control">
        <input
            bind:this={dateInput}
            {id}
            class="input {customClass} {$form.errors?.[name]
                ? 'is-danger'
                : ''}"
            type="text"
            {placeholder}
            {required}
            {disabled}
            readonly
        />
    </div>

    {#if $form.errors[name]}
        <p class="help is-danger">{$form.errors[name]}</p>
    {/if}
</div>
