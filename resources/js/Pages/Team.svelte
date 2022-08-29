<script>
  import { params } from '@/config/config.js'

  import Layout from '@/Pages/Shared/Layout.svelte'

  import EngineerCard from '@/Pages/Shared/EngineerCard.svelte'
</script>

<svelte:head>

  <title>{params.app.title}</title>
  <meta name="description" content={params.app.description} />

</svelte:head>

<Layout>

  <section class="section container">

    <h1 class="title mb-6 has-text-weight-light is-size-2 has-text-left">
      Our Team
    </h1>

    <div class="tile is-ancestor">
      <div class="tile is-vertical ">
        <div class="tile">

          <div class="tile is-parent is-vertical">
            <div class="tile is-child">
              <EngineerCard person={params.engineers[0]} />
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child">
              <EngineerCard person={params.engineers[1]} />
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child">
              <EngineerCard person={params.engineers[2]} />
            </div>
          </div>

        </div>

      </div>
    </div>

    <h1 class="title mb-6 has-text-weight-light is-size-2 has-text-left">
      Coming Soon
    </h1>

    <div class="tile is-ancestor">
      <div class="tile is-vertical ">
        <div class="tile">

          <div class="tile is-parent is-vertical">
            <div class="tile is-child">
              <EngineerCard person={params.engineers[3]} />
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child">
              <EngineerCard person={params.engineers[4]} />
            </div>
          </div>

        </div>

      </div>
    </div>

  </section>

</Layout>
