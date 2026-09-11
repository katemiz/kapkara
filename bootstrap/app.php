<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

use App\Http\Middleware\HandleInertiaRequests;


return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
        $middleware->validateCsrfTokens(except: [
            'api/code2cad', // ◄ Tell Laravel to completely ignore CSRF for this path
        ]);

        $middleware->alias([
            'guest.setup' => \App\Http\Middleware\RedirectIfInstalled::class,
            'installed' => \App\Http\Middleware\RedirectIfNotInstalled::class,
        ]);

        // Runs on every web request — redirects to /setup until an organization exists
        $middleware->web(append: [
            \App\Http\Middleware\RedirectIfNotInstalled::class,
        ]);


    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();










