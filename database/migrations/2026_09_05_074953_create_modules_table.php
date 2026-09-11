<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();          // e.g. 'crm', 'inventory', 'hr'
            $table->string('name');                    // e.g. 'Customer Relationship Management'
            $table->string('slug')->unique();
            $table->string('icon')->nullable();
            $table->string('route_prefix')->nullable(); // e.g. '/crm'
            $table->text('description')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('is_core')->default(false); // core modules cannot be disabled
            $table->string('version')->nullable();
            $table->json('settings')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('modules');
    }
};



