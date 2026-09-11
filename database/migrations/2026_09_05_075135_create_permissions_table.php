<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('module_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('code')->unique();          // e.g. 'crm.contacts.create'
            $table->string('name');
            $table->string('group')->nullable();       // for UI grouping
            $table->text('description')->nullable();
            $table->boolean('is_system')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['module_id', 'group']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('permissions');
    }
};



