<script>
  export let person
</script>

<div class="card">
  <div class="card-image">
    <figure class="image is-rounded">
      <img src="/images/{person.img}" alt="Image of {person.name}" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">

      <div class="media-content">
        <p class="title is-4">{person.name}</p>
        <p class="subtitle is-6">{person.profession}</p>
      </div>
    </div>

    <div class="content">
      <p>{person.expertise}</p>

      {#if person.link}
        <p>
          <a href="/{person.link}">more ...</a>
        </p>
      {/if}

      <a href="mailto:{person.mail}">{person.mail}</a>
    </div>
  </div>
</div>
