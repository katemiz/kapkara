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

        // 1. Standardize path slashes and clean up name strings
        const cleanName = name.replace(/^(\.\/|\/)/, '');

        // Define potential structural permutations matching your architecture
        const pathsToTry = [
            `./${cleanName}.svelte`,                     // Exact matching path rule
            `./Modules/${cleanName}.svelte`,             // Fallback for missing module prefix
            `./Pages/${cleanName}.svelte`                // Fallback for core framework components
        ];

        // 2. Iterate through predictable exact paths first
        let importFunction = null;
        for (const path of pathsToTry) {
            if (pages[path]) {
                importFunction = pages[path];
                break;
            }
        }

        // 3. Smart Fallback Matcher: Scans matching segments from end to start 
        if (!importFunction) {
            const keys = Object.keys(pages);

            // Check if cleanName matches a structural path trailing ending
            importFunction = pages[keys.find(key => key.endsWith(`${cleanName}.svelte`))];

            if (!importFunction) {
                // Handle mixed nesting differences where "Pages/" might be injected or missing
                // Example: If Laravel passes 'Modules/PDM/Home' but file is './Modules/PDM/Pages/Home.svelte'
                const parts = cleanName.split('/');
                if (parts.length >= 2) {
                    const moduleName = parts[0]; // e.g. "Modules" or specific module code name
                    const leafName = parts.slice(1).join('/'); // remaining paths

                    const structuralMatch = keys.find(key =>
                        key.includes(moduleName) && key.endsWith(`${parts[parts.length - 1]}.svelte`)
                    );
                    if (structuralMatch) importFunction = pages[structuralMatch];
                }
            }
        }

        // 4. Runtime debugging protection if configuration loses asset paths completely
        if (!importFunction) {
            console.error(`Inertia requested view name: "${name}"`);
            console.error('Attempted exact lookups:', pathsToTry);
            console.error('Compiled production manifest paths:', Object.keys(pages));
            throw new Error(`Inertia Page component not found for route path matching: "${name}".`);
        }

        return typeof importFunction === 'function' ? importFunction() : importFunction;
    },
    setup({ el, App, props }) {
        mount(App, { target: el, props });
    },
});