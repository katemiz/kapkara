<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->text('material_category');
            $table->text(column: 'material_form');
            $table->text('material_name');
            $table->text('material_specification');
            $table->text('material_notes')->nullable();
            $table->boolean(column: 'material_is_active')->default(true);
            $table->userstamps();   // provided by App\Providers\AppServiceProvider
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materials');
    }
};
