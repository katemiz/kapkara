<script>
    /**
     * Reusable Form Checkbox Group Component for Laravel-Inertia-Svelte 5
     * Multiple checkboxes for selecting multiple values (array binding)
     *
     * @component
     * @example
     * <Title
     *   title={form}
     *   subtitle="interests"
     *   css1="class1 class 2"
     *   css1="class1 class 2"
     * />
     */

    let { title, subtitle, css1,css2 } = $props();
</script>

{#if title}
<h1 class="title {css1 ? css1: ''}">{title}</h1>
{/if}

{#if subtitle}
<h2 class="subtitle has-text-weight-light mt-0{css2 ? css2: ''}" >{subtitle}</h2>
{/if}

