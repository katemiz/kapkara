<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\QuestionController;
use App\Http\Controllers\MediaController;



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


// Route::get('/question', [QuestionController::class, 'index']);           // list all
// Route::get('/question/create', [QuestionController::class, 'create']);   // show create form
// Route::post('/question', [QuestionController::class, 'store']);          // store new
// Route::get('/question/{idQuestion}', [QuestionController::class, 'show']); // view one
// Route::get('/question/{idQuestion}/edit', [QuestionController::class, 'edit']); // show edit form
// Route::put('/question/{idQuestion}', [QuestionController::class, 'update']); // update existing
// Route::delete('/question/{idQuestion}', [QuestionController::class, 'destroy']); // delete


Route::resource('question', QuestionController::class);

Route::post('/upload-image', [MediaController::class, 'uploadImg'])->name('image.upload');

