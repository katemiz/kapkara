<script>
  import Icon from '@/Pages/Shared/Icon.svelte'
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

      {#if person.media}
        <div class="mt-2">

          {#if person.media.linkedin}
            <a href={person.media.linkedin}>
              <span class="icon has-text-link">
                <Icon name="linkedin" color="link" />
              </span>
            </a>
          {/if}

          {#if person.media.github}
            <a href={person.media.github}>
              <span class="icon has-text-link">
                <Icon name="github" color="link" />
              </span>
            </a>
          {/if}

          {#if person.media.twitter}
            <a href={person.media.twitter}>
              <span class="icon has-text-link">
                <Icon name="twitter" color="link" />
              </span>
            </a>
          {/if}

        </div>
      {/if}
    </div>
  </div>

</div>
