<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Schema\Blueprint;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */



    public function boot(): void
    {
        Blueprint::macro('userstamps', function () {
            $this->unsignedBigInteger('created_by')->nullable();
            $this->unsignedBigInteger('updated_by')->nullable();
            
            // Optional: Add foreign key constraints if you want
            // $this->foreign('created_by')->references('id')->on('users');
            // $this->foreign('updated_by')->references('id')->on('users');
        });

    }















}
