<script lang="ts">

	import 'bulma/css/bulma.min.css';
	import favicon from '$lib/assets/favicon.svg';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>


<style>
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex: 1;
  }
</style>





<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>







<div class="app-container">
  <Navbar />
  
  <main>

	{@render children()}

  </main>
  
  <Footer />
</div>



