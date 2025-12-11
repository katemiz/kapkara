<script>
    import MemberCard from '$lib/components/MemberCard.svelte';
    import { MEMBERS } from '$lib/config';
</script>



<section class="section container">

    <h1 class="title mb-6 has-text-weight-light is-size-2 has-text-left">Members</h1>

    {#each MEMBERS as member}

        <div class="fixed-grid has-3-cols">

            <div class="grid has-background-warning">

                <MemberCard {member} />

            </div>

        </div>

    {/each}

</section>
