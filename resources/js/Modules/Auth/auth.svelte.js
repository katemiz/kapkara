import { page } from '@inertiajs/svelte';

class AuthState {

    // 1. Declare private reactive state using Svelte 5 runes
    #user = $state(null);

    constructor() {
        // 2. Subscribe to the Inertia store.
        // Whenever Laravel sends new data (like after logout), this fires.
        page.subscribe(($page) => {
            //console.log("Updating AuthState:", $page?.props?.auth?.user?.name);
            this.#user = $page?.props?.auth?.user ?? null;
        });
    }

    // 3. GETTERS are mandatory for Svelte 5 to track reactivity in components
    get user() {
        return this.#user;
    }

    get isAuthenticated() {
        return this.#user !== null;
    }

    // Check for a specific role
    hasRole(role) {
        return this.user?.role === role;
    }

    // Check if user has a specific permission
    can(permission) {
        return this.user?.permissions?.includes(permission) ?? false;
    }

    // Specific helper for your engineering modules
    get canAccessPDM() {
        return this.hasRole('admin') || this.can('view_pdm');
    }

    get canAccessReqs() {
        return this.hasRole('admin') || this.can('view_reqs');
    }
}

export const auth = new AuthState();
