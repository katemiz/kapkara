<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\QuestionController;
use App\Http\Controllers\MediaController;

use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'message' => 'Welcome to Laravel + Inertia + Svelte 5!'
//     ]);
// });

// Route::get('/team', function () {
//     return Inertia::render('Other/Team');
// });

// Route::get('/services', function () {
//     return Inertia::render('Other/Services');
// });

// Route::get('/contact', function () {
//     return Inertia::render('Other/Contact');
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Other/Dashboard');
// });

// Route::get('/apps', function () {
//     return Inertia::render('Other/Apps');
// });

// Route::get('/funstuff', function () {
//     return Inertia::render('FunStuff/Index');
// });


// Route::get('/funstuff/gauss', function () {
//     return Inertia::render('FunStuff/Gauss');
// });


// // Route::get('/question', [QuestionController::class, 'index']);           // list all
// // Route::get('/question/create', [QuestionController::class, 'create']);   // show create form
// // Route::post('/question', [QuestionController::class, 'store']);          // store new
// // Route::get('/question/{idQuestion}', [QuestionController::class, 'show']); // view one
// // Route::get('/question/{idQuestion}/edit', [QuestionController::class, 'edit']); // show edit form
// // Route::put('/question/{idQuestion}', [QuestionController::class, 'update']); // update existing
// // Route::delete('/question/{idQuestion}', [QuestionController::class, 'destroy']); // delete


// Route::resource('question', QuestionController::class);

// Route::post('/upload-image', [MediaController::class, 'uploadImg'])->name('image.upload');








// Route::middleware('guest')->group(function () {
//     // Auth routes handled by Fortify
// });

// Route::middleware('auth')->group(function () {
//     Route::get('/dashboard', function () {
//         return inertia('Dashboard');
//     })->name('dashboard');
// });


























// 1. Root Route
// Public Routes
Route::get('/', fn() => Inertia::render('Home', [
    'message' => 'Welcome to Laravel + Inertia + Svelte 5!'
]));


// 2. Main Site Routes
Route::name('pages.')->group(function () {
    Route::get('/team', fn() => Inertia::render('Other/Team'))->name('team');
    Route::get('/contact', fn() => Inertia::render('Other/Contact'))->name('contact');
    Route::get('/services', fn() => Inertia::render('Other/Services'))->name('services');
    Route::get('/apps', fn() => Inertia::render('Other/Apps'))->name('apps');
});
// Access in Svelte via: route('pages.team') route('pages.contact') route('pages.services') route('pages.dashboard') route('pages.apps')



// 3. FunStuff Group (Prefixed)
Route::prefix('funstuff')->group(function () {
    Route::get('/', fn() => Inertia::render('FunStuff/Index'));
    Route::get('/gauss', fn() => Inertia::render('FunStuff/Gauss'));
});


// 4. Question Resource Routes
//Route::resource('question', QuestionController::class);



// 5. Image Upload Route
Route::post('/upload-image', [MediaController::class, 'uploadImg'])->name('image.upload');



// Protected Application Routes
Route::middleware(['auth', 'verified'])->group(function () {
    
    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');


    Route::resource('question', QuestionController::class);


    // // Your other grouped routes from before
    // Route::prefix('other')->group(function () {
    //     Route::get('/apps', fn() => Inertia::render('Other/Apps'))->name('apps');
    // });
});



// 1. Define the GET routes for Fortify views and NAME them
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::get('/forgot-password', function () {
    return Inertia::render('Auth/ForgotPassword');
})->name('password.request');