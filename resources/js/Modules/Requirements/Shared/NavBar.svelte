<script>
    import { auth } from "$modules/Auth/auth.svelte.js";

    // import { page } from "@inertiajs/svelte";

    import { KAPKARA, ADMACTIONS, PATHS } from "$lib/config";
    import {
        House,
        HandHelping,
        Users,
        UsersRound,
        ContactRound,
        User,
        LogOut,
        Database,
        Bird,
        Box,
        HatGlasses,
        Key,
        Factory,
    } from "@lucide/svelte";

    import { router } from "@inertiajs/svelte";

    // let user = $derived($page.props.auth.user);

    // console.log("Navbar user:", user);

    document.addEventListener("DOMContentLoaded", () => {
        // Get all "navbar-burger" elements
        const navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll(".navbar-burger"),
            0,
        );

        // Add a click event on each of them
        navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const target2 = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle("is-active");
                target2.classList.toggle("is-active");
            });
        });
    });

    function logout() {
        router.post("/logout");
    }
</script>

<nav class="navbar is-dark">
    <div class="navbar-brand">
        <a href="/" class="navbar-item has-text-white logo-bg">
            <span class="icon has-text-dark">
                <img
                    src="/images/Apps/tree-view.svg"
                    alt="Requirements Management Logo"
                />
            </span>
            <span class="has-text-weight-light">Requirements Management</span>
        </a>

        <button
            href="#"
            class="navbar-burger button is-text has-text-white"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>

    {#if auth.isAuthenticated && auth.canAccessPDM}
        <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/apps" class="navbar-item navbar-link">Admin</a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="/admin/users">
                            <span class="icon has-text-warning">
                                <UsersRound size={18} />
                            </span>
                            <span>Users</span>
                        </a>

                        <a class="navbar-item" href="/admin/users">
                            <span class="icon has-text-warning">
                                <HatGlasses size={18} />
                            </span>
                            <span>Roles</span>
                        </a>

                        <a class="navbar-item" href="/admin/users">
                            <span class="icon has-text-warning">
                                <Key size={18} />
                            </span>
                            <span>Permissions</span>
                        </a>

                        <a class="navbar-item" href="/admin/users">
                            <span class="icon has-text-warning">
                                <Factory size={18} />
                            </span>
                            <span>Companies</span>
                        </a>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/projects" class="navbar-item navbar-link"
                        >Projects</a
                    >

                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="/admin/users">
                            <span class="icon has-text-link">
                                <UsersRound size={18} />
                            </span>
                            <span>Work Packages</span>
                        </a>

                        <a class="navbar-item" href="/admin/users">
                            <span class="icon has-text-warning">
                                <HatGlasses size={18} />
                            </span>
                            <span>Project Milestones</span>
                        </a>

                        <a class="navbar-item" href="/admin/users">
                            <span class="icon has-text-warning">
                                <Key size={18} />
                            </span>
                            <span>Project Phases</span>
                        </a>

                        <a class="navbar-item" href="/admin/users">
                            <span class="icon has-text-warning">
                                <Factory size={18} />
                            </span>
                            <span>Witnesses</span>
                        </a>
                    </div>
                </div>

                <a href="/services" class="navbar-item">
                    <span class="icon has-text-warning">
                        <HandHelping size={18} />
                    </span>
                    <span>MoCs</span>
                </a>
                <a href="/team" class="navbar-item">
                    <span class="icon has-text-warning">
                        <Users size={18} />
                    </span>
                    <span>PoCs</span>
                </a>
                <a href="/contact" class="navbar-item">
                    <span class="icon has-text-warning">
                        <ContactRound size={18} />
                    </span>
                    <span>Tests</span>
                </a>

                <a href="/contact" class="navbar-item">
                    <span class="icon has-text-warning">
                        <ContactRound size={18} />
                    </span>
                    <span>Chapters</span>
                </a>
            </div>
        </div>
    {/if}

    <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
                <a href="/apps" class="navbar-item navbar-link">Export</a>

                <div class="navbar-dropdown">
                    {#each ADMACTIONS as app}
                        <a class="navbar-item" href={app.url}>
                            <span class="icon has-text-warning">
                                <img
                                    src="{PATHS.path_images_apps_prefix}{app.logo}"
                                    alt={app.label}
                                />
                            </span>
                            <span>{app.name}</span>
                        </a>
                    {/each}
                </div>
            </div>

            {#if auth.isAuthenticated}
                <div class="navbar-item has-dropdown is-hoverable">
                    <a
                        href="/apps"
                        class="navbar-item navbar-link has-text-info"
                        >{auth.user.name} {auth.user.lastname}</a
                    >

                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="/question">
                            <span class="icon">
                                <Database size={18} />
                            </span>
                            <span>Question</span>
                        </a>
                        <a class="navbar-item" href="/question">
                            <span class="icon">
                                <Bird size={18} />
                            </span>
                            <span>Question 2</span>
                        </a>

                        <a class="navbar-item" href="/material">
                            <span class="icon">
                                <Box size={18} />
                            </span>
                            <span>Material</span>
                        </a>

                        <button onclick={logout} class="navbar-item">
                            <span class="icon">
                                <LogOut size={18} />
                            </span>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            {:else}
                <a href={"/login"} class="navbar-item">
                    <span class="icon has-text-warning">
                        <User size={18} color="#3e9392" />
                    </span>
                </a>
            {/if}
        </div>
    </div>
</nav>

<style>
    .logo-bg {
        background-color: #cc0f35;
    }
</style>
