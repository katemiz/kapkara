<script>
    let { results } = $props();

    /*     
    $results should contain
    $results.from
    $results.to
    $results.total 
    */

    let from = $derived(results.from);
    let to = $derived(results.to);
    let total = $derived(results.total);
</script>

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

<style>
    .table-records-info {
        padding: 1rem;
        font-size: 0.9rem;
        color: #4a4a4a;
    }
</style>
