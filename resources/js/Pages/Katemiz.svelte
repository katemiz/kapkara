<script>
  var stylesheet =
      'https://www.testdome.com/content/source/stylesheets/embed.css',
    link = document.createElement('link')
  ;(link.href = stylesheet),
    (link.type = 'text/css'),
    (link.rel = 'stylesheet'),
    (link.media = 'screen,print'),
    document.getElementsByTagName('head')[0].appendChild(link)
</script>

<style>
  .kahraman {
    background-color: #395c6b;
  }

  .genislik {
    width: 240px;
  }

  .baslik {
    color: #e0ff4f;
  }
</style>

<nav class="navbar">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="../">
        <span class="icon-text is-size-5">
          <span class="icon">
            <img src="/images/baykus_orange.svg" alt="Logo" />
          </span>

          <span class="has-text-weight-light">Kılıç Ali</span>
          <span class="has-text-weight-bold">&nbsp;Temiz</span>
        </span>
      </a>

      <span class="navbar-burger burger" data-target="navbarMenu">
        <span />
        <span />
        <span />
      </span>
    </div>
    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <a href="#home" class="navbar-item">Home</a>
        <a href="#about" class="navbar-item">About</a>
        <a href="#resume" class="navbar-item">Resume</a>
        <a href="#works" class="navbar-item">Works</a>
        <a href="#contact" class="navbar-item">Contact</a>
      </div>
    </div>
  </div>
</nav>

<!-- HERO -->

<section class="hero is-medium kahraman" id="home">
  <div class="hero-body">
    <div class="columns">
      <div class="column is-2">
        <figure class="image">
          <img class="is-rounded" src="/images/katemiz.jpg" alt="katemiz" />
        </figure>
      </div>
      <div class="column">
        <p class="has-text-centered has-text-font-light is-size-1 baslik">
          I'm Kılıç Ali Temiz
        </p>

        <p
          class="subtitle has-text-centered has-text-font-light has-text-light
          mt-6 is-size-5">
          Professionally I'm a mechanical engineer with 30+ years of aerospace
          experience (manufacturing and engineering).
        </p>

        <div class="has-text-centered my-3">
          <span
            class="tag is-success genislik is-size-5 mx-2 has-text-font-light">
            Self-Trained
          </span>
          <span class="tag is-warning genislik is-size-5 mx-2">Amateur</span>
          <span class="tag is-success genislik is-size-5 mx-2">
            Web Developer
          </span>
        </div>

        <div class="columns is-mobile">
          <div class="column is-8 is-offset-2">
            <p
              class="subtitle has-text-centered has-text-font-light is-size-5
              baslik">
              During my professional career, my hobby (programming and computer
              aided engineering) helped me develop skills in web programming.
              <br />
              turned into a self-trained full-stack web developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container my-4">
  <h1 class="title" id="about">About</h1>
  <div class="notification">
    I am a self-trained full stack web developer from Ankara-Turkey. Experienced
    in developing web applications using mainly HTML/CSS/Javascript/MySQL/PHP.
    Currently my preferred framework is Laravel.
  </div>

  <h1 class="title" id="education">Education</h1>

  <div class="notification">
    <ul>
      <li>
        BS in
        <a href="https://me.metu.edu.tr/">Mechanical Engineering</a>
        from
        <a href="https://www.metu.edu.tr/">Middle East Technical University</a>
      </li>
    </ul>
  </div>

  <h1 class="title" id="experience">Experience</h1>

  <div class="notification content">
    <ul>
      <li>
        Currently working as consultant in Skills Development (in Aerospace
        Industry) for small/medium sized companies
      </li>

      <li>
        Have worked in
        <a href="https://www.tusas.com/en">Turkish Aerospace Industries</a>
        for more than 30 years
      </li>
    </ul>

    <a href="/images/katemiz_resume_EN.pdf" class="mt-3" id="resume">
      Resume details here ...
    </a>
  </div>

  <h1 class="title" id="works">Works</h1>

  <div class="notification content">
    Developed many company wide web apps in
    <a href="https://www.tusas.com/en">Turkish Aerospace Industries - TAI</a>
    for engineering teams to facilitate communication, monitoring and tracking
    of engineering activities
    <ul>
      <li>
        eMemo - Coordination Memo Exchange Application (used wordwide by more
        than 10 companies working with TAI)
      </li>
      <li>
        eMOM - Minutes of Meeting Application (used by more than 400 engineers
        more than 6 years)
      </li>

      <li>eLibrary - Company wide Digital Libary</li>

      <li>
        eTraining - Course-Curricilium, Student, Content and Exam Application
        used more than 5 years by 3000 people
      </li>
    </ul>
  </div>

  <h1 class="title" id="skills">Skills</h1>

  <div class="notification content">
    <ul>
      <li>
        HTML/CSS (No professional training/education : about 20 years of
        experience)
      </li>
      <li>
        Javascript (No professional training/education : 4+ years of experience)
      </li>
      <li>
        MySQL (No professional training/education : 15+ years of experience)
      </li>
      <li>
        PHP (No professional training/education : 15+ years of experience)
      </li>

      <li>
        Laravel (No professional training/education : 1 year of experience)
      </li>

      <li>
        Linux (No professional training/education : 15+ years of experience)
      </li>
    </ul>
  </div>

  <h1 class="title" id="contact">Contact</h1>

  <div class="notification content">
    <ul>
      <li>
        <a href="mailto:katemiz@gmail.com">katemiz@gmail.com</a>
      </li>
      <li>+90 555 286 31 10</li>

      <li>
        <a href="https://github.com/katemiz">https://github.com/katemiz</a>
      </li>

      <li>
        <a href="https://kapkara.one">https://kapkara.one</a>
        [WIP, Not in production yet]
      </li>
    </ul>
  </div>

  <div class="column card">
    <a
      href="https://www.testdome.com/certificates/c00141f97ac04c1ca9646468cc00ea91"
      class="testdome-certificate-stamp gold">
      <span class="testdome-certificate-name">Kılıç Ali Temiz</span>
      <span class="testdome-certificate-test-name">PHP and Laravel</span>
      <span class="testdome-certificate-card-logo">
        TestDome
        <br />
        Certificate
      </span>
    </a>

  </div>

</div>
