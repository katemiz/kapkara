<script>
  let { member } = $props();
</script>



<div class="cell card">

  <div class="card-image">
    <figure class="image is-rounded">
      <img src="/images/{member.img}" alt="Image of {member.name}" />
    </figure>
  </div>

  <div class="card-content">
    <div class="media">

      <div class="media-content">
        <p class="title is-4">{member.name}</p>
        <p class="subtitle is-6">{member.profession}</p>
      </div>
    </div>

    <div class="content">

      <p>{member.profession}</p>

        <p>
          <a href="/{member.profession}">more ...</a>
        </p>

      <a href="mailto:{member.profession}">{member.profession}</a>

        <div class="mt-2">

            <a href={member.profession}>
              <span class="icon has-text-link">aaaa
              </span>
            </a>

            <a href={member.profession}>
              <span class="icon has-text-link">bbbb
              </span>
            </a>

            <a href={member.profession}>
              <span class="icon has-text-link">cccc
              </span>
            </a>

        </div>
      </div>
  </div>

</div>
