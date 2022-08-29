<script>
  import { params } from '@/config/config.js'

  import Layout from '@/Pages/Shared/Layout.svelte'

  import EngineerCard from '@/Pages/Shared/EngineerCard.svelte'

  let engineers = [
    {
      name: 'Kılıç Ali Temiz',
      profession: 'Mechanical Engineer',
      expertise:
        '30+ years of aerospace experience and 15+ years of web programming',
      img: 'katemiz.jpg',
      mail: 'katemiz@gmail.com',
      link: 'katemiz',
    },

    {
      name: 'Ayşe Şolpan Temiz',
      profession: 'Aeronautical Engineer',
      expertise:
        '30+ years of aerospace experience. Experience in aerostructures production, structural design, system safety analysis, airworthiness and certification, technology management',
      img: 'astemiz.jpg',
      mail: 'astemiz@gmail.com',
      link: null,
    },

    {
      name: 'Zeynep Albayrak',
      profession: 'Electrical-Electronics Engineer',
      expertise:
        'Junior Python Programmer. Just completed certificate program for python',
      img: 'zeynep.jpg',
      mail: 'z@gmail.com',
      link: null,
    },

    {
      name: 'Merve Duru Temiz',
      profession: 'To Be Front-End Developer',
      expertise: 'just starting off.',
      img: 'mdtemiz.jpg',
      mail: 'merve.duru@metu.edu.tr',
      link: null,
    },

    {
      name: 'Harun Emre Temiz',
      profession: 'To Be Game Developer',
      expertise:
        'Has more than 10 years of active gaming experience. Not developed and but hope to be ready soon',
      img: 'hetemiz.jpg',
      mail: 'hetemiz@gmail.com',
      link: null,
    },
  ]
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
              <EngineerCard person={engineers[0]} />
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child">
              <EngineerCard person={engineers[1]} />
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child">
              <EngineerCard person={engineers[2]} />
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
              <EngineerCard person={engineers[3]} />
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child">
              <EngineerCard person={engineers[4]} />
            </div>
          </div>

        </div>

      </div>
    </div>

  </section>

</Layout>
