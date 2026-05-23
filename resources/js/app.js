import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'


import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



// createInertiaApp({
//     resolve: (name) => {
//         // Target specific folders to prevent Vite from getting lost
//         return resolvePageComponent(
//             `./${name}.svelte`,
//             import.meta.glob([
//                 './Pages/**/*.svelte',
//                 './Modules/**/*.svelte'
//             ])
//         );
//     },
//     setup({ el, App, props }) {
//         mount(App, { target: el, props });
//     },
// });



createInertiaApp({
    resolve: (name) => {
        // 1. Tell Vite to map out all pages across standard Pages and nested Module subdirectories
        const pages = import.meta.glob([
            './Pages/**/*.svelte',
            './Modules/**/*.svelte'
        ]);

        // 2. Check if the name passed from Laravel already contains the path block prefix
        let targetPath = '';
        if (name.startsWith('Modules/') || name.startsWith('Pages/')) {
            targetPath = `./${name}.svelte`;
        } else {
            // Fallback default lookup map if you pass only "page1" without directory namespaces
            targetPath = `./Pages/${name}.svelte`;
        }

        // 3. Resolve the component dynamic importer function
        const importFunction = pages[targetPath];

        if (!importFunction) {
            console.error('Available keys in Vite manifest:', Object.keys(pages));
            throw new Error(`Inertia Page component not found for path: "${targetPath}".`);
        }

        return typeof importFunction === 'function' ? importFunction() : importFunction;
    },
    setup({ el, App, props }) {
        mount(App, { target: el, props });
    },
});
