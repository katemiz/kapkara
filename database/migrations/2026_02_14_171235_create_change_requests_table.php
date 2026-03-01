<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('change_requests', function (Blueprint $table) {

            $table->id()->startingValue(1923);
            $table->string('title');
            $table->text(column: 'request_description')->nullable();
            $table->foreignIdFor(User::class, 'request_reviewed_by')->nullable();
            $table->timestamp('request_reviewed_at')->nullable();
            $table->text(column: 'review_notes')->nullable();
            $table->string('status')->default('wip');
            $table->userstamps();   // provided by App\Providers\AppServiceProvider
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('change_requests');
    }
};
