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
            compilerOptions: {
                hydratable: true,
            },
        }),


    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },



    resolve: {
        alias: {
            // Map $lib to the resources/js/lib directory
            '$lib': path.resolve(__dirname, './resources/js/lib'),
            // Optional: you can also map $components
            '$components': path.resolve(__dirname, './resources/js/Components'),
        },
    },


});



