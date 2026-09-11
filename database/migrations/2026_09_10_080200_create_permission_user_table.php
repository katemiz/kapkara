<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('permission_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('organization_id')->constrained()->cascadeOnDelete();
            $table->foreignId('module_id')->constrained()->cascadeOnDelete();
            $table->foreignId('permission_id')->constrained()->cascadeOnDelete();
            $table->boolean('is_denied')->default(false); // explicit deny overrides role
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();

            $table->unique(
                ['user_id', 'organization_id', 'module_id', 'permission_id'],
                'permission_user_unique'
            );
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('permission_user');
    }
};
