import { router } from "@inertiajs/svelte";


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

export function logout() {

    console.log("Logging out...");
    // Fortify's default logout route is /logout
    router.post("/logout");
}







