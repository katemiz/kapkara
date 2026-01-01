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
     * />
     */

    let { title, subtitle } = $props();
</script>

<h1 class="title">{title}</h1>
<h2 class="subtitle">{subtitle}</h2>
