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

		<!-- <div class="content">
			<p>{member.profession}</p>

			<p>
				<a href="/{member.profession}">more ...</a>
			</p>

			<a href="mailto:{member.mail}">{member.mail}</a>

			<div class="mt-2">
				<a href={member.profession}>
					<span class="icon has-text-link">aaaa </span>
				</a>

				<a href={member.profession}>
					<span class="icon has-text-link">bbbb </span>
				</a>

				<a href={member.profession}>
					<span class="icon has-text-link">cccc </span>
				</a>
			</div>
		</div> -->

		<div class="card-content">
			<div class="content">
				<p>{member.expertise}</p>

				{#if member.link}
					<p>
						<a href="/{member.link}">more ...</a>
					</p>
				{/if}

				<a href="mailto:{member.mail}}">{member.mail}</a>

				{#if member.media}
					<div class="mt-2">
						{#if member.media.linkedin}
							<a href={member.media.linkedin}>
								<span class="icon has-text-link"> AAA </span>
							</a>
						{/if}

						{#if member.media.github}
							<a href="{member.media.github}}">
								<span class="icon has-text-link"> bbbb </span>
							</a>
						{/if}

						{#if member.media.twitter}
							<a href={member.media.twitter}>
								<span class="icon has-text-link"> ccc </span>
							</a>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
