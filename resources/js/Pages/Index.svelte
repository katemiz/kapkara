<script>
  import { params } from '@/config/config.js'

  import Layout from '@/Pages/Shared/Layout.svelte'
  import Hero from '@/Pages/Shared/Hero.svelte'
  import Apps from '@/Pages/Apps.svelte'
</script>

<svelte:head>

  <title>{params.app.title}</title>
  <meta name="description" content={params.app.description} />

</svelte:head>

<Layout>

  <Hero />
  <Apps />

</Layout>
