<?php

namespace App\Providers;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\ServiceProvider;

class MacroServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Blueprint::macro('userstamps', function ($nullable = true) {
            if ($nullable) {
                $this->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
                $this->foreignId('updated_by')->nullable()->constrained('users')->onDelete('set null');
            } else {
                $this->foreignId('created_by')->constrained('users')->onDelete('cascade');
                $this->foreignId('updated_by')->constrained('users')->onDelete('cascade');
            }
        });
    }
}