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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->string('myInput')->nullable();
            $table->string('mySelect')->nullable();
            $table->string('myRadio')->nullable();
            $table->string('myCheckboxSingle')->nullable();
            $table->json('myCheckboxMultiple')->nullable(); // JSON column
            $table->string('myDate')->nullable();
            $table->string('myDateTime')->nullable();
            $table->string('myStepLevel1')->nullable();
            $table->string('myStepLevel2')->nullable();
            $table->string('myStepLevel3')->nullable();
            $table->text('myEditorText')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
