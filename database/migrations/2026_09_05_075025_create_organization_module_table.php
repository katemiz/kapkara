<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('organization_module', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->constrained()->cascadeOnDelete();
            $table->foreignId('module_id')->constrained()->cascadeOnDelete();
            $table->boolean('is_enabled')->default(true);
            $table->string('plan')->nullable(); // e.g. 'basic', 'pro' - optional licensing tier
            $table->timestamp('enabled_at')->nullable();
            $table->timestamp('disabled_at')->nullable();
            $table->json('settings')->nullable(); // per-org module config
            $table->boolean('is_active')->default(true);

            $table->timestamps();

            $table->unique(['organization_id', 'module_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('organization_module');
    }
};



