<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hidden_blades', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("lastname");
            $table->integer("tckn");
            $table->string("blood");
            $table->userstamps(); // provided by App\Providers\AppServiceProvider
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hidden_blades');
    }
};
