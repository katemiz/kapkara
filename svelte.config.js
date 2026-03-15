// svelte.config.js
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
    preprocess: vitePreprocess(),
    compilerOptions: {
        // runes: true,
        hydratable: true,
    },
    // Ensure these match your vite.config.js exactly
    kit: {
        alias: {
            '$lib': './resources/js/Lib',
            '$components': './resources/js/Components',
            '$modules': './resources/js/Modules',
            '@': './resources/js'
        }
    }



};

export default config;