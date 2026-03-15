<script>
    let { results, per_page } = $props();

    /*     
    $results should contain
    $results.from
    $results.to
    $results.total 
    */

    let from = $derived(results.from);
    let to = $derived(results.to);
    let total = $derived(results.total);

    let lastPage = $derived(results.last_page);
</script>

{#if lastPage > 1}
    <div class="table-records-info">
        <p>
            Showing
            <strong>{from}</strong>
            to
            <strong>{to}</strong>
            of
            <strong>{total}</strong>
            records
        </p>
    </div>
{/if}

{#if total <= per_page}
    <div class="table-records-info">
        <p>
            Total
            <strong>{total}</strong>
            records
        </p>
    </div>
{/if}

<style>
    .table-records-info {
        padding: 1rem;
        font-size: 0.9rem;
        color: #4a4a4a;
    }
</style>
