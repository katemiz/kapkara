<script>
    import { auth } from "$modules/Auth/auth.svelte.js";
    import { app_config } from "$modules/Yonetici/Shared/app_config";

    import PdmIcon from "$components/Icons/PdmIcon.svelte";

    import {
        House,
        HandHelping,
        CircleUser,
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
    } from "@lucide/svelte";

    import { router } from "@inertiajs/svelte";

    // Create a simple state variable for the menu
    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="navbar is-light">
    <div class="container is-fluid">
        <div class="navbar-brand">
            <a href="/" class="navbar-item has-text-white">
                <img src="/images/Yonetici/app_header_logo.svg" alt="Logo" />
            </a>

            <button
                class="navbar-burger button {isMenuOpen ? 'is-active' : ''}"
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

        <div id="navbar_ana" class="navbar-menu">
            <div class="navbar-start" id="navstart">
                {#if auth.isAuthenticated}
                    <div class="navbar-item has-dropdown is-hoverable">
                        <p class="navbar-link" href="/durum/ozet">Durum</p>
                        <div class="navbar-dropdown has-text-info">
                            <a href="/durum/ozet" class="navbar-item"
                                >Genel Özet</a
                            >
                            <a href="/durum/alacaklar" class="navbar-item"
                                >Alacaklar</a
                            >
                            <a href="/durum/verecekler" class="navbar-item"
                                >Verecekler</a
                            >
                        </div>
                    </div>

                    <a href="/durum/gelirler" class="navbar-item icon-text">
                        <span class="icon">
                            <x-icon icon="lira" fill="red" />
                        </span>
                        <span>Gelir</span>
                    </a>

                    <a href="/durum/giderler" class="navbar-item icon-text">
                        <span class="icon">
                            <x-icon icon="lira" fill="red" />
                        </span>
                        <span>Gider</span>
                    </a>

                    <a href="/durum/verecekler" class="navbar-item icon-text">
                        <span class="icon">
                            <x-icon icon="receipt" fill="red" />
                        </span>
                        <span>Faturalar</span>
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <p class="navbar-link" href="/Admin">Kayıtlar</p>
                        <div class="navbar-dropdown">
                            <a href="/kayit-form/aidat" class="navbar-item"
                                >Toplu Aidat Kaydı</a
                            >
                            <a href="/kayit-form/alacak" class="navbar-item"
                                >Alacak Kaydı</a
                            >
                            <a href="/kayit-form/fatura" class="navbar-item"
                                >Fatura Kaydı</a
                            >
                            <a href="/kayit-form/gelir" class="navbar-item"
                                >Gelir Kaydı</a
                            >
                            <a href="/kayit-form/gider" class="navbar-item"
                                >Gider Kaydı</a
                            >
                            <a href="/sayac-okuma" class="navbar-item"
                                >Sayaç Okumaları</a
                            >
                        </div>
                    </div>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <p class="navbar-link" href="/Admin">Yazdır</p>
                        <div class="navbar-dropdown">
                            <a href="/dokum" class="navbar-item icon-text"
                                >Gelir-Gider Döküm</a
                            >
                            <a
                                href="/aylik-aidatlar"
                                class="navbar-item icon-text">Aylık Aidatlar</a
                            >
                            <a href="/bosmakbuz" class="navbar-item icon-text"
                                >Boş Makbuz</a
                            >
                        </div>
                    </div>
                {/if}
            </div>

            <div class="navbar-end">
                {#if auth.isAuthenticated}
                    <div class="navbar-item has-dropdown is-hoverable">
                        <p class="navbar-link">
                            <span class="mx-3 has-text-right">
                                {auth.user.name}
                                {auth.user.lastname}<br />
                                <span class="block is-size-7"
                                    >{auth.user.name} {auth.user.lastname}</span
                                >
                            </span>
                        </p>

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
                                    router.post("/logout", {
                                        sayfa: "yonetici",
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
                    <a href={"/login/yonetici"} class="navbar-item">
                        <span class="icon has-text-link">
                            <LogIn size={18} />
                        </span>
                        <span>Giriş</span>
                    </a>

                    <a href={"/register"} class="navbar-item">
                        <span class="icon has-text-link">
                            <CircleUser size={18} />
                        </span>
                        <span>Kaydolun</span>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</nav>
