import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'


import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



createInertiaApp({
    resolve: (name) => {
        // Target specific folders to prevent Vite from getting lost
        return resolvePageComponent(
            `./${name}.svelte`,
            import.meta.glob([
                './Pages/**/*.svelte',
                './Modules/**/*.svelte'
            ])
        );
    },
    setup({ el, App, props }) {
        mount(App, { target: el, props });
    },
});
