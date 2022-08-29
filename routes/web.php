<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/team', function () {
    return Inertia::render('Team');
});

Route::get('/katemiz', function () {
    return Inertia::render('Katemiz');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});
