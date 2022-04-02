const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 require('laravel-mix-svelte');

 mix
     .js('resources/js/app.js', 'public/js')
     .postCss('resources/css/app.css','public/css',[])
     // Extract common dependencies from node modules [manifest.js and vendor.js]
     .extract()
 
     // With babel
     .webpackConfig ({
        output: {chunkFilename: 'js/[name].js?id=[chunkhash]'},

        resolve: {
            extensions: ['.js', '.svelte', '.json'],
            alias: {
              '@': __dirname + '/resources/js'
            },
        }
     })
 
     .svelte ({
         dev:! mix.inProduction ()
     })
 
     .sass('node_modules/bulma/bulma.sass', 'public/css')
     // .sass('resources/sass/app.scss', 'public/css')
 
     .babelConfig({
         plugins: ['@babel/plugin-syntax-dynamic-import'],
     })
     .version()