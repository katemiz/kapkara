<script>
  import { params } from '@/config/config.js'

  import Layout from '@/Pages/Shared/Layout.svelte'

  export let is_active = true
</script>

<svelte:head>

  <title>{params.app.title}</title>
  <meta name="description" content={params.app.description} />

</svelte:head>

<Layout>

  <section class="section container">

    <h1 class="title mb-6 has-text-weight-light is-size-2 has-text-left">
      What We Do : Services We Provide
    </h1>

    <div class="content">

      <p>Services can be categorized into two different categories :</p>

      <ul class="has-text-dark">
        <li>Web Technology</li>
        <li>
          Engineering (Aerospace Industry Product Development and Production)
        </li>
      </ul>

    </div>

    <div class="box has-background-link-light mt-2">
      <div class="tabs">
        <ul>
          <li class:is-active={is_active}>
            <a href={'#'} on:click={() => (is_active = !is_active)}>
              Web Development
            </a>
          </li>
          <li class:is-active={!is_active}>
            <a href={'#'} on:click={() => (is_active = !is_active)}>
              Engineering Consultancy
            </a>
          </li>

        </ul>
      </div>

      {#if is_active}
        <div class="columns">

          <div class="column is-half">
            <img src="/images/service_web.svg" alt="Web Services" />
          </div>

          <div class="column content">

            <h2
              class="title mb-6 has-text-weight-light is-size-2 has-text-left">
              Full-Stack Web Development
            </h2>

            <p class="mb-3">
              can perform all web based applications using - mainly- open source
              tools and environments
            </p>

            <ul>
              <li>Developing front end website architecture.</li>
              <li>Designing user interactions on web pages.</li>
              <li>Developing back-end website applications.</li>
              <li>Creating servers and databases for functionality.</li>
            </ul>

            <div class="card mt-4">

              <header class="card-header">
                <p class="card-header-title">Technology and Stack</p>

              </header>

              <div class="card-content">
                <div class="content">

                  <dl>
                    <dd>Linux</dd>
                    <dd>Apache / Nginx</dd>
                    <dd>MySQL / MongoDB</dd>
                    <dd>Svelte</dd>
                    <dd>PHP / Laravel / Livewire</dd>
                  </dl>
                </div>
              </div>
            </div>

          </div>

        </div>
      {:else}
        <div class="columns">

          <div class="column is-half">
            <img src="/images/service_eng.svg" alt="Web Services" />
          </div>

          <div class="column">

            <h2
              class="title mb-6 has-text-weight-light is-size-2 has-text-left">
              Engineering Services
            </h2>

            <p>
              We are a team of engineers with more tah 30 years of experience
              especially in aerospace industry.
            </p>

            <p>Our areas of expertise include :</p>

            <div class="content">

              <ul>

                <li>
                  Product Development
                  <ul>
                    <li>
                      Systems Engineering
                      <ul>
                        <li>Requirements Management</li>
                        <li>Interface Management</li>
                      </ul>
                    </li>

                    <li>
                      Structural Engineering
                      <ul>
                        <li>Design Management</li>
                        <li>Manufacturing Preparation</li>
                        <li>Scheduling</li>
                        <li>Critical Items Procurement</li>
                      </ul>
                    </li>

                    <li>
                      Program Management
                      <ul>
                        <li>Configuration Management</li>
                        <li>Scheduling</li>
                        <li>Cost Management</li>
                      </ul>
                    </li>

                    <li>PLM Infrastructure Management</li>

                  </ul>

                </li>

                <li>
                  Manufacturing and Production (Aerostructures)
                  <ul>
                    <li>Detail and Assembly Tooling Design</li>
                    <li>NC Programming and Simulation</li>
                  </ul>
                </li>

                <li>
                  Skills Management
                  <a href="https://tensor.kapkara.one">more ...</a>
                </li>

              </ul>
            </div>

          </div>

        </div>
      {/if}

    </div>

  </section>

</Layout>
