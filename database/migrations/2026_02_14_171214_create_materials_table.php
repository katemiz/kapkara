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
            $table->text('category');
            $table->text(column: 'form');
            $table->text('description');
            $table->text('specification');
            $table->text('remarks')->nullable();
            $table->boolean(column: 'is_active')->default(true);
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
