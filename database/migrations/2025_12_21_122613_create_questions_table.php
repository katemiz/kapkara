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
            $table->text('text');
            $table->string('myInput');

            $table->string('mySelect');
            $table->string('myRadio');
            $table->string('myCheckboxSingle');
            $table->string('myCheckboxMultiple');
            $table->string('myDate');
            $table->string('myDateTime');

            $table->string('myStepLevel1');
            $table->string('myStepLevel2');
            $table->string('myStepLevel3');
            $table->string('myEditorText');

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
