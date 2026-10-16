<script>
    let { user, menuItems } = $props();

    import { Eye } from "@lucide/svelte";
</script>

<div class="hero">
    <div class="hero-body">
        <div class="column">
            <p class="subtitle is-6 has-text-grey">Super Admin Console</p>
            <h1 class="title is-3">
                Welcome back, {user?.name ?? "Administrator"} 👋
            </h1>
            <p class="has-text-grey">
                Manage your platform's organizations, users, modules, and
                permissions from one place.
            </p>
        </div>
    </div>

    <div class="fixed-grid has-3-cols has-1-cols-mobile has-1-cols-mobile">
        <div class="grid is-gapless">
            {#each menuItems as item}
                <div class="cell card m-3">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title">
                                    {item.title}
                                    <span class="tag is-normal is-info"
                                        >{item.count}</span
                                    >
                                </p>
                            </div>
                        </div>

                        <div class="content">
                            {item.description}
                        </div>

                        <footer class="card-footer">
                            <a
                                href={item.route}
                                class="card-footer-item button has-background-white-ter"
                            >
                                <span class="icon"><Eye size="18" /></span>
                                <span>View</span>
                            </a>
                        </footer>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
