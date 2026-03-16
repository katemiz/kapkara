<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\QuestionController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\AnswerController;  
use App\Http\Controllers\MediaController;

use App\Http\Controllers\UserController;


use Inertia\Inertia;











// 1. Root Route
// Public Routes
Route::get('/', fn() => Inertia::render('Modules/Base/Pages/Home', [
    'message' => 'Welcome to Laravel + Inertia + Svelte 5!'
]));


// 2. Main Site Routes
Route::name('pages.')->group(function () {
    Route::get('/team', fn() => Inertia::render('Modules/Base/Pages/Other/Team'))->name('team');
    Route::get('/contact', fn() => Inertia::render('Modules/Base/Pages/Other/Contact'))->name('contact');
    Route::get('/services', fn() => Inertia::render('Modules/Base/Pages/Other/Services'))->name('services');
    Route::get('/apps', fn() => Inertia::render('Modules/Base/Pages/Other/Apps'))->name('apps');
});
// Access in Svelte via: route('pages.team') route('pages.contact') route('pages.services') route('pages.dashboard') route('pages.apps')



// 3. FunStuff Group (Prefixed)
Route::prefix('funstuff')->group(function () {
    Route::get('/', fn() => Inertia::render('FunStuff/Index'));
    Route::get('/gauss', fn() => Inertia::render('FunStuff/Gauss'));
});


// 4. Question Resource Routes
//Route::resource('question', QuestionController::class);








Route::middleware(['auth'])->group(function () {

    // Image Upload Route for WYSIWYG Editor
    Route::post('/upload-image', [MediaController::class, 'uploadImg'])->name('image.upload');

    // Delete media
    Route::delete('/media-delete/{mediaId}', [MediaController::class, 'destroy'])
        ->name('media.destroy');




    
    // Get media for a model
    // Route::get('/media/{modelType}/{modelId}', [MediaController::class, 'index'])
    //     ->name('media.index');
});















// Protected Application Routes
Route::middleware(['auth', 'verified'])->group(function () {
    
    Route::resource('question', QuestionController::class);
    Route::resource('answer', AnswerController::class); 
    Route::resource('material', MaterialController::class);
    Route::resource('user', UserController::class);

});



// 1. Define the GET routes for Fortify views and NAME them
Route::get('/login', function () {
    return Inertia::render('Modules/Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Modules/Auth/Register');
})->name('register');

Route::get('/forgot-password', function () {
    return Inertia::render('Modules/Auth/ForgotPassword');
})->name('password.request');












// REQURIREMENTS
Route::get('/requirements', fn() => Inertia::render('Modules/Requirements/Home', [
    'message' => 'Welcome to Laravel + Inertia + Svelte 5!'
]));

