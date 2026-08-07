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
        Schema::create('my_assets', function (Blueprint $table) {
            $table->id();
            $table->string("asset_type");
            $table->text("title");
            $table->text("remarks")->nullable();
            $table->userstamps(); // provided by App\Providers\AppServiceProvider
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('my_assets');
    }
};
