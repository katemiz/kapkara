<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'message' => 'Welcome to Laravel + Inertia + Svelte 5!'
    ]);
});

Route::get('/team', function () {
    return Inertia::render('Other/Team');
});

Route::get('/services', function () {
    return Inertia::render('Other/Services');
});

Route::get('/contact', function () {
    return Inertia::render('Other/Contact');
});

Route::get('/dashboard', function () {
    return Inertia::render('Other/Dashboard');
});

Route::get('/apps', function () {
    return Inertia::render('Other/Apps');
});

Route::get('/funstuff', function () {
    return Inertia::render('FunStuff/Index');
});


Route::get('/funstuff/gauss', function () {
    return Inertia::render('FunStuff/Gauss');
});