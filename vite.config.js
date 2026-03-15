import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import path from 'path';


export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),

        svelte({
            // Vite will now automatically find svelte.config.js
        }),

    ],
    server: {
        watch: {
            // Add '**/vendor/**' to the ignored list
            ignored: [
                '**/storage/framework/views/**',
                '**/vendor/**',
                '**/node_modules/**'
            ],
        },
    },


    resolve: {
        alias: {
            '$lib': path.resolve(__dirname, './resources/js/Lib'),
            // '$shared': path.resolve(__dirname, './resources/js/Shared'),
            '$components': path.resolve(__dirname, './resources/js/Components'),
            '$modules': path.resolve(__dirname, './resources/js/Modules')
        },
    },


});



