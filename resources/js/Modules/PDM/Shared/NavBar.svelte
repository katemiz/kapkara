<script>
    import { auth } from "$modules/Auth/auth.svelte.js";
    import { app_config } from "$modules/PDM/Shared/app_config";
    import { KAPKARA, MYAPPS, PATHS } from "$lib/config";

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

    // let user = $derived($page.props.auth.user);

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
        <a
            href="/pdm"
            class="navbar-item has-text-white has-background-warning"
            aria-label="Home"
        >
            <span class="icon has-text-dark">
                <img
                    src="{PATHS.path_images_prefix}/PDM/{app_config.icon}"
                    alt="PDM Icon"
                />
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
                    <a href="/engineering" class="navbar-link">
                        <span class="icon has-text-warning">
                            <SquareFunction size={18} />
                        </span>
                        <span class="ml-2">Engineering</span>
                    </a>

                    <div class="navbar-dropdown">
                        <a href="/engineering/home" class="navbar-item">
                            <span class="icon has-text-link">
                                <Omega size={18} />
                            </span>
                            <span class="ml-2">Engineering Utilities</span>
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
