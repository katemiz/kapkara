<?php

use App\Http\Controllers\SetupController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest.setup')->group(function () {
    Route::get('/setup', [SetupController::class, 'create'])->name('setup.create');
    Route::post('/setup', [SetupController::class, 'store'])->name('setup.store');
});