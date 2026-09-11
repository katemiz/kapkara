<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('module_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('code');                    // e.g. 'crm.admin', 'crm.agent'
            $table->string('name');
            $table->string('slug');
            $table->text('description')->nullable();
            $table->integer('level')->default(0);      // for hierarchical roles
            $table->boolean('is_system')->default(false); // protected from deletion
            $table->boolean('is_active')->default(true);
            $table->json('settings')->nullable();
            $table->timestamps();

            // A role code must be unique within a module
            $table->unique(['module_id', 'code']);
            $table->index(['module_id', 'is_active']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};