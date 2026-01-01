<script>
    import { page } from "@inertiajs/svelte";

    import { KAPKARA, MYAPPS, PATHS } from "$lib/config";
    import {
        House,
        HandHelping,
        Users,
        ContactRound,
        User,
        LogOut,
        Database,
        Bird,
    } from "@lucide/svelte";

    import { router } from "@inertiajs/svelte";

    let user = $derived($page.props.auth.user);

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
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <span class="icon-text is-size-5">
                    <span class="icon">
                        <img
                            src="{PATHS.path_images_prefix}{KAPKARA.logo}"
                            alt="baykus logo"
                        />
                    </span>

                    <span class="has-text-weight-bold">kapkara</span>
                    <span class="has-text-weight-light has-text-warning">
                        web house
                    </span>
                </span>
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

        <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
                <a href="/" class="navbar-item is-active">
                    <span class="icon has-text-warning">
                        <House size={18} />
                    </span>
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/apps" class="navbar-item navbar-link">Apps</a>

                    <div class="navbar-dropdown">
                        {#each MYAPPS as app}
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

                <a href="/services" class="navbar-item">
                    <span class="icon has-text-warning">
                        <HandHelping size={18} />
                    </span>
                    <span>Services</span>
                </a>
                <a href="/team" class="navbar-item">
                    <span class="icon has-text-warning">
                        <Users size={18} />
                    </span>
                    <span>Team</span>
                </a>
                <a href="/contact" class="navbar-item">
                    <span class="icon has-text-warning">
                        <ContactRound size={18} />
                    </span>
                    <span>Contact</span>
                </a>

                {#if user}
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a
                            href="/apps"
                            class="navbar-item navbar-link has-text-info"
                            >{user.name}</a
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
                            <User size={18} />
                        </span>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</nav>
