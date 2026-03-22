<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\ChangeRequest;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("engineering_change_notices", function (
            Blueprint $table,
        ) {
            $table->id()->startingValue(1071);
            $table->foreignIdFor(ChangeRequest::class);
            $table->text("title");
            $table->text("description")->nullable();
            $table->string("status")->default("WIP");
            $table->userstamps(); // provided by App\Providers\AppServiceProvider
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("engineering_change_notices");
    }
};
