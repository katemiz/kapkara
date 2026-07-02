<script>
    
    /**
     * Reusable Filter Select Component for Laravel-Inertia-Svelte 5
     * 
     * @component
     * @example
     * <FilterSelect 
     *   label="Select an option"
     *   name="option"
     *   options={options}
     *   placeholder="Type to search..."
     *   minChars={4}
     *   selectedValue={$bindable(null)}
     * />
     */
    








    import { untrack } from "svelte";

    // 1. Define Component Props
    let { 
        options = [],          // Array: [{ value: 'M-101', label: 'Assembly - Montaj' }]
        placeholder = "Type to search...", 
        minChars = 4,          // Minimum characters required to display list
        selectedValue = $bindable(null), // Two-way bound selection identifier
        label = "",
        name = "",
        required = false
    } = $props();

    // 2. Local State Runes
    let searchQuery = $state("");

    // 3. Derived Computations
    let isQueryLongEnough = $derived(searchQuery.trim().length >= minChars);
    
    // Filters options when search length passes threshold
    let filteredOptions = $derived(
        isQueryLongEnough
            ? options.filter(opt => 
                opt.label.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : []
    );

    // Determines the label text of the current choice
    let selectedLabel = $derived(options.find(opt => opt.value === selectedValue)?.label ?? "");

    // 4. Update search box text if value changes externally, without causing infinite loops
    $effect(() => {
        if (selectedValue) {
            untrack(() => {
                const matched = options.find(opt => opt.value === selectedValue);
                if (matched) searchQuery = matched.label;
            });
        }
    });

    function selectItem(option) {
        selectedValue = option.value;
        searchQuery = option.label; // Set the input text to show the choice name
    }

    function clearSelection() {
        selectedValue = null;
        searchQuery = "";
    }
</script>








<div class="field">

            {#if label}
        <label class="label" for={name}>
            {label}
            {#if required}
                <span class="has-text-danger">*</span>
            {/if}
        </label>
        {/if}
    <div class="input-container">






        <input 
            type="text" 
            class="search-input"
            {placeholder}
            bind:value={searchQuery}
        />
        {#if selectedValue || searchQuery}
            <button type="button" class="clear-btn" onclick={clearSelection}>&times;</button>
        {/if}
    </div>

    {#if isQueryLongEnough}
        <div class="linked-results-container">
            <div class="results-header">Matching Results ({filteredOptions.length})</div>
            <ul class="linked-list">
                {#if filteredOptions.length === 0}
                    <li class="no-results-msg">No matching records found.</li>
                {:else}
                    {#each filteredOptions as option}
                        <li>
                            <button 
                                type="button"
                                class="list-item-btn"
                                class:active={selectedValue === option.value}
                                onclick={() => selectItem(option)}
                            >
                                <span class="item-label">{option.label}</span>
                                {#if selectedValue === option.value}
                                    <span class="badge">Selected</span>
                                {/if}
                            </button>
                        </li>
                    {/each}
                {/if}
            </ul>
        </div>
    {:else if searchQuery.length > 0}
        <div class="hint-box">
            Type at least <strong>{minChars - searchQuery.length}</strong> more characters to display list...
        </div>
    {/if}
</div>

<style>
    .search-select-wrapper {
        width: 100%;
        max-width: 450px;
        font-family: system-ui, sans-serif;
    }

    .input-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    .search-input {
        width: 100%;
        padding: 10px 35px 10px 12px;
        border: 2px solid #cbd5e1;
        border-radius: 6px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.2s;
    }

    .search-input:focus {
        border-color: #3b82f6;
    }

    .clear-btn {
        position: absolute;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.3rem;
        color: #94a3b8;
        cursor: pointer;
    }

    .clear-btn:hover {
        color: #64748b;
    }

    .linked-results-container {
        margin-top: 8px;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        overflow: hidden;
    }

    .results-header {
        background: #f8fafc;
        padding: 6px 12px;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: #64748b;
        letter-spacing: 0.05em;
        border-bottom: 1px solid #e2e8f0;
    }

    .linked-list {
        list-style: none;
        margin: 0;
        padding: 0;
        max-height: 250px;
        overflow-y: auto;
    }

    .list-item-btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 12px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #f1f5f9;
        text-align: left;
        font-size: 0.95rem;
        color: #334155;
        cursor: pointer;
        transition: background-color 0.15s;
    }

    .list-item-btn:hover {
        background-color: #f1f5f9;
    }

    .list-item-btn.active {
        background-color: #eff6ff;
        color: #1d4ed8;
    }

    .badge {
        font-size: 0.75rem;
        background-color: #3b82f6;
        color: white;
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: 600;
    }

    .no-results-msg {
        padding: 16px;
        text-align: center;
        color: #94a3b8;
        font-size: 0.9rem;
    }

    .hint-box {
        margin-top: 6px;
        font-size: 0.85rem;
        color: #64748b;
        padding-left: 4px;
    }
</style>