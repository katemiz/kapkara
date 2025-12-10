<!-- <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>My App</strong> © 2024. All rights reserved.
    </p>
  </div>
</footer> -->



<script>
  import { APP,KAPKARA,MYAPPS,MEMBERS } from '$lib/config';
</script>


<footer class="footer has-background-dark" id="footer">

    <div class="columns has-text-white">

      <div class="column has-text-centered-mobile">
        <img
          src="{APP.logo}"
          width="28px"
          alt="Company Icon" />
        <br />
        <a href={APP.url} class="has-text-weight-light has-text-white">
          {APP.name}
        </a>
      </div>

      <div class="column">
        <p
          class="has-text-weight-light has-text-centered has-text-centered-mobile">
          {APP.title}
        </p>
        <p
          class="has-text-weight-light has-text-centered has-text-centered-mobile is-size-7">
          {APP.version}
        </p>
      </div>

      <div class="column">
        <p class="has-text-weight-light has-text-right has-text-centered-mobile">
            {APP.copyright}
        </p>
        <p
          class="has-text-weight-light has-text-right has-text-centered-mobile
          is-size-7">
          {APP.motto}
        </p>
      </div>

    </div>

  </footer>