<script>
    import { auth } from "$modules/Auth/auth.svelte.js";
    import { app_config } from "$modules/PDM/Shared/app_config";

    import PdmIcon from "$components/Icons/PdmIcon.svelte";

    import {
        House,
        HandHelping,
        Users,
        ContactRound,
        LogIn,
        LogOut,
        SquareFunction,
        Omega,
        Atom,
        NotebookPen,
        FileInput,
        FileOutput,
        Repeat,
        Box,
        ShieldUser,
        Settings,
        Factory,
        BookOpenText,
        Barcode,
        Component,
    } from "@lucide/svelte";

    import { router } from "@inertiajs/svelte";


    // Create a simple state variable for the menu
    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="navbar is-dark">
    <div class="navbar-brand">
        <a
            href="/pdm"
            class="navbar-item has-text-white has-background-warning"
            aria-label="Home"
        >
            <span class="icon has-text-dark">
                <PdmIcon/>
            </span>
        </a>

        <a
            href="/"
            class="navbar-item has-text-white has-background-link-dark"
            aria-label="PDM"
        >
            <span class="ml-2">{app_config.code}</span>
        </a>

        <button
            class="navbar-burger button  {isMenuOpen ? 'is-active' : ''}"
            aria-label="menu"
            aria-expanded={isMenuOpen}
            data-target="navbarMenu"
            onclick={toggleMenu}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>

    <div id="navbarMenu" class="navbar-menu {isMenuOpen ? 'is-active' : ''}">
        <div class="navbar-start" id="navstart">
            {#if auth.isAuthenticated}
                {#if auth.hasRole("admin")}
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a href="/admin" class="navbar-link">
                            <span class="icon has-text-warning">
                                <Users size={18} />
                            </span>
                            <span class="ml-2">Admin</span>
                        </a>

                        <div class="navbar-dropdown">
                            <a href="/admin-users/list" class="navbar-item"
                                >Users</a
                            >
                            <a href="/admin-roles/list" class="navbar-item"
                                >Roles</a
                            >
                            <a
                                href="/admin-permissions/list"
                                class="navbar-item">Permissions</a
                            >
                            <a href="/admin-companies/list" class="navbar-item"
                                >Companies</a
                            >
                            <a href="/admin-projects/list" class="navbar-item"
                                >Projects</a
                            >
                        </div>
                    </div>
                {/if}

                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/pdm/requests" class="navbar-link">
                        <span class="icon has-text-warning">
                            <Repeat size={18} />
                        </span>
                        <span class="ml-2">Requests</span>
                    </a>

                    <div class="navbar-dropdown">
                        <a href="/pdm/crequest" class="navbar-item">
                            <span class="icon has-text-link">
                                <FileInput size={18} />
                            </span>
                            <span class="ml-2">Change Requests</span>
                        </a>

                        <a href="/pdm/ecn" class="navbar-item">
                            <span class="icon has-text-link">
                                <FileOutput size={18} />
                            </span>
                            <span class="ml-2">ECNs</span>
                        </a>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/" class="navbar-link">
                        <span class="icon has-text-warning">
                            <Factory size={18} />
                        </span>
                        <span class="ml-2">Products</span>
                    </a>

                    <div class="navbar-dropdown">
                        <a href="/endproducts/list" class="navbar-item">
                            <span class="icon has-text-link">
                                <Barcode size={18} />
                            </span>
                            <span class="ml-2">Sellable Parts</span>
                        </a>

                        <a href="/parts/list" class="navbar-item">
                            <span class="icon has-text-link">
                                <Component size={18} />
                            </span>
                            <span class="ml-2">Components</span>
                        </a>
                    </div>
                </div>

                <a href="/pdm/document" class="navbar-item">
                    <span class="icon has-text-warning">
                        <BookOpenText size={18} />
                    </span>
                    <span class="ml-2">Documents</span>
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/pdm/engineering" class="navbar-link">
                        <span class="icon has-text-warning">
                            <SquareFunction size={18} />
                        </span>
                        <span class="ml-2">Engineering</span>
                    </a>

                    <div class="navbar-dropdown">
                        <a
                            href="/pdm/engineering/configurator"
                            class="navbar-item"
                        >
                            <span class="icon has-text-link">
                                <Omega size={18} />
                            </span>
                            <span class="ml-2"
                                >Engineering Utilities - Configurator</span
                            >
                        </a>

                        <hr class="navbar-divider" />

                        <a href="/pdm/material" class="navbar-item">
                            <span class="icon has-text-link">
                                <Atom size={18} />
                            </span>
                            <span class="ml-2">Materials</span>
                        </a>

                        <a href="/pdm/product-note" class="navbar-item">
                            <span class="icon has-text-link">
                                <NotebookPen size={18} />
                            </span>
                            <span class="ml-2">Product Notes</span>
                        </a>

                        <a href="/pdm/standard" class="navbar-item">
                            <span class="icon has-text-link">
                                <Box size={18} />
                            </span>
                            <span class="ml-2">Standards</span>
                        </a>
                    </div>
                </div>
            {/if}
        </div>

        <div class="navbar-end">
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
                                <Settings size={18} />
                            </span>
                            <span>Settings</span>
                        </a>

                        <button
                            type="button"
                            class="navbar-item"
                            onclick={() =>
                                router.post("/logout", { sayfa: "pdm" })}
                        >
                            <span class="icon">
                                <LogOut size={18} />
                            </span>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            {:else}
                <a href={"/login/pdm"} class="navbar-item">
                    <span class="icon has-text-warning">
                        <LogIn size={18} />
                    </span>
                    <span>Login</span>
                </a>
            {/if}
        </div>
    </div>
</nav>
