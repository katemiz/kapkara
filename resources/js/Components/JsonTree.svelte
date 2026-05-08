<script>
  export let data;
  export let label = "Root Json Data";
  let expanded = false;

  // Determine if the value is an object or array to recurse
  const isObject = (val) => val && typeof val === 'object';
</script>

<div class="ml-6">
  <button on:click={() => expanded = !expanded}>
    {expanded ? '▼' : '▶'} {label}
  </button>

  {#if expanded}
    {#each Object.entries(data) as [key, value]}
      {#if isObject(value)}
        <svelte:self data={value} label={key} />
      {:else}
        <div  class="ml-6">{key}: <span class="has-text-weight-bold has-text-info">{value}</span></div>
      {/if}
    {/each}
  {/if}
</div>
