<script>
  import { params } from '@/config/config.js'
  import AppCard from './Shared/AppCard.svelte'

  function highlight() {
    console.log(el)
    //el.classList.add("has-background-info-light")
  }

  function unlight(el) {
    //el.classList.remove("has-background-info-light")
  }
</script>

<section class="section container">

  <h1 class="title mb-6 has-text-weight-light is-size-1 has-text-left">
    Production Apps
  </h1>

  <div class="tile is-ancestor">
    <div class="tile is-vertical ">
      <div class="tile">

        <div class="tile is-parent is-vertical">
          <div class="tile is-child notification is-primary is-light card">
            <AppCard uygulama={params.software[0].apps[0]} />
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child notification is-info is-light card">
            <AppCard uygulama={params.software[0].apps[1]} />
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="tile is-ancestor">
    <div class="tile is-vertical ">
      <div class="tile">

        <div class="tile is-parent is-vertical">
          <div class="tile is-child notification is-link is-light card">
            <AppCard uygulama={params.software[0].apps[2]} />
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child notification is-success is-light card">
            <AppCard uygulama={params.software[0].apps[3]} />
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="tile is-ancestor">
    <div class="tile is-vertical ">
      <div class="tile">

        <div class="tile is-parent is-vertical">
          <div
            class="tile is-child notification has-background-grey-light card">
            <AppCard uygulama={params.software[0].apps[4]} />
          </div>
        </div>

      </div>

    </div>
  </div>

  <h1 class="title mb-6 has-text-weight-light is-size-1 has-text-left">
    Utility Apps
  </h1>

  <div class="tile is-ancestor">
    <div class="tile is-vertical ">
      <div class="tile">

        <div class="tile is-parent is-vertical">
          <div class="tile is-child notification is-warning is-light card">
            <AppCard uygulama={params.software[1].apps[0]} />
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child notification is-danger is-light card">
            <AppCard uygulama={params.software[1].apps[1]} />
          </div>
        </div>
      </div>

    </div>
  </div>

</section>
