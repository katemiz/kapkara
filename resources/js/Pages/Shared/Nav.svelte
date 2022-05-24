<script>
  import { params } from '@/config/config.js'
</script>

<nav class="navbar">
  <div class="container">

    <div class="navbar-brand">
      <a class="navbar-item" href="../">
        <span class="icon-text is-size-5">

          <span class="icon">
            <img src="/images/baykus_orange.svg" alt="Logo" />
          </span>

          <span class="has-text-weight-bold">kapkara</span>
          <span class="has-text-weight-light">&nbsp;web house</span>
        </span>
      </a>

      <span
        onclick="BurgerMenu(this)"
        class="navbar-burger burger"
        data-target="navbarMenu">
        <span />
        <span />
        <span />
      </span>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <a href="/" class="navbar-item is-active">Home</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <p class="navbar-link">Apps</p>
          <div class="navbar-dropdown">

            {#each params.software as uygulamalar}
              {#each uygulamalar.apps as uygulama}
                <a class="navbar-item" href={uygulama.url}>{uygulama.name}</a>
              {/each}
              <hr class="navbar-divider" />
            {/each}

          </div>
        </div>

        <a href="/services" class="navbar-item">Services</a>
        <a href="/katemiz" class="navbar-item">Team</a>
        <a href="/contact" class="navbar-item">Contact</a>

      </div>
    </div>
  </div>
</nav>
