<script>
    import { auth } from "$modules/Auth/auth.svelte.js";
    import { KAPKARA, MYAPPS, PATHS } from "$lib/config";
    import { router } from '@inertiajs/svelte';
    import KapkaraIcon from "$components/Icons/KapkaraIcon.svelte";


    import {
        House,
        HandHelping,
        Users,
        ContactRound,
        User,
        LogOut,
        Database,
        Bird,
        Box,
        ShieldUser
    } from "@lucide/svelte";


    // Create a simple state variable for the menu
    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

</script>


<nav class="navbar is-dark">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <span class="icon-text is-size-5">
                <span class="icon">
                    <KapkaraIcon />
                </span>

                <span class="has-text-weight-bold">kapkara</span>
                <span class="has-text-weight-light has-text-warning">
                    web house
                </span>
            </span>
        </a>

        <button
            class="navbar-burger button  {isMenuOpen ? 'is-active' : ''}"
            aria-label="menu"
            data-target="navbarMenu"
            aria-expanded={isMenuOpen}
            onclick={toggleMenu}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>

    <div id="navbarMenu" class="navbar-menu {isMenuOpen ? 'is-active' : ''}">
        <div class="navbar-end">
            <a href="/" class="navbar-item is-active" onclick={() => isMenuOpen = false}>
                <span class="icon has-text-warning">
                    <House size={18} />
                </span>
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a href="/apps" class="navbar-item navbar-link">Apps</a>

                <div class="navbar-dropdown">

                    {#if auth.isAuthenticated && auth.hasRole('admin')}
                        <a class="navbar-item" href='/admin'>
                            <span class="icon">
                                <ShieldUser size={18} />
                            </span>
                            <span>Admin Panel</span>
                        </a>
                    {/if}

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

                        <a class="navbar-item" href="/pdm/material">
                            <span class="icon">
                                <Box size={18} />
                            </span>
                            <span>Material</span>
                        </a>

                        <button
                            type="button"
                            class="navbar-item"
                            onclick={() => router.post('/logout', {}, {
                                onSuccess: () => router.visit('/')
                            })}
                        >
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
