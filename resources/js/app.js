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
        const pages = import.meta.glob([
            './Pages/**/*.svelte',
            './Modules/**/*.svelte'
        ]);

        // 1. Clean the incoming name (strip any leading dots or slashes)
        const cleanName = name.replace(/^(\.\/|\/)/, '');

        // 2. Try an exact match approach first
        let targetPath = `./${cleanName}.svelte`;
        let importFunction = pages[targetPath];

        // 3. Fallback: If not found, search the manifest keys dynamically 
        // to find which one matches your module path pattern
        if (!importFunction) {
            const keys = Object.keys(pages);
            const match = keys.find(key => key.endsWith(`${cleanName}.svelte`));
            if (match) {
                importFunction = pages[match];
            }
        }

        // 4. Ultimate safety fallback error
        if (!importFunction) {
            console.error(`Requested Name: "${name}" -> Looked for target path: "${targetPath}"`);
            console.error('Available keys in Vite manifest:', Object.keys(pages));
            throw new Error(`Inertia Page component not found for path: "${name}".`);
        }

        return typeof importFunction === 'function' ? importFunction() : importFunction;
    },
    setup({ el, App, props }) {
        mount(App, { target: el, props });
    },
});
