import { page } from '@inertiajs/svelte';
import { get } from 'svelte/store'; // 1. Import the get helper

class AuthState {
    // 2. Use a getter or a function to track the store value
    // This tells the $derived rune to track the store's current value
    user = $derived(get(page)?.props?.auth?.user ?? null);

    get isAuthenticated() {
        return this.user !== null;
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




}

export const auth = new AuthState();