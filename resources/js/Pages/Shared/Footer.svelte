<script>
  import { params } from '@/config/config.js'
</script>

<footer class="footer has-background-dark" id="footer">

  <div class="columns has-text-white">

    <div class="column has-text-centered-mobile">
      <img
        src="/images/{params.company.logo}"
        width="28px"
        alt="Company Icon" />
      <br />
      <a href={params.company.url} class="has-text-weight-light has-text-white">
        {params.company.name}
      </a>
    </div>

    <div class="column">
      <p
        class="has-text-weight-light has-text-centered has-text-centered-mobile">
        {params.app.copyright}
      </p>
      <p
        class="has-text-weight-light has-text-centered has-text-centered-mobile
        is-size-7">
        {params.app.version}
      </p>
    </div>

    <div class="column">
      <p class="has-text-weight-light has-text-right has-text-centered-mobile">
        {params.app.copyright}
      </p>
      <p
        class="has-text-weight-light has-text-right has-text-centered-mobile
        is-size-7">
        {params.company.motto}
      </p>
    </div>

  </div>

</footer>

<!-- <nav
  class="breadcrumb is-centered has-bullet-separator is-small my-4"
  aria-label="breadcrumbs">
  <ul>
    {#each params.stack as tech}
      <li>
        <a href={tech.url}>{tech.name}</a>
      </li>
    {/each}
  </ul>
</nav> -->
