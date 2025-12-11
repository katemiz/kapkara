<script>
  import { KAPKARA,MYAPPS,MEMBERS } from '$lib/config';
</script>


<footer class="footer has-background-dark" id="footer">

    <div class="columns has-text-white">

      <div class="column has-text-centered-mobile">
        <img
          src="{KAPKARA.logo}"
          width="28px"
          alt="Company Icon" />
        <br />
        <a href={KAPKARA.url} class="has-text-weight-light has-text-white">
          {KAPKARA.name}
        </a>
      </div>

      <div class="column">
        <p
          class="has-text-weight-light has-text-centered has-text-centered-mobile">
          {KAPKARA.title}
        </p>
        <p
          class="has-text-weight-light has-text-centered has-text-centered-mobile is-size-7">
          {KAPKARA.version}
        </p>
      </div>

      <div class="column">
        <p class="has-text-weight-light has-text-right has-text-centered-mobile">
            {KAPKARA.copyright}
        </p>
        <p
          class="has-text-weight-light has-text-right has-text-centered-mobile
          is-size-7">
          {KAPKARA.motto}
        </p>
      </div>

    </div>

  </footer>