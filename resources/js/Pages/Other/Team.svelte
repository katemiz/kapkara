<script>
    import MemberCard from "$lib/components/MemberCard.svelte";
    import { MEMBERS } from "$lib/config";
    import Layout from "../../Shared/Layout.svelte";
</script>

<Layout>
    <section class="section container">
        <h1 class="title mb-6 has-text-weight-light is-size-2 has-text-left">
            Members
        </h1>

        <div class="fixed-grid has-3-cols has-1-cols-mobile">
            <div class="grid">
                {#each MEMBERS as member}
                    <MemberCard {member} />
                {/each}
            </div>
        </div>
    </section>
</Layout>
