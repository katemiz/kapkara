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
        Schema::create('eurobond_coupons', function (Blueprint $table) {
            $table->id();
            $table->foreignId("eurobond_asset_id")->constrained()->cascadeOnDelete();
            $table->date("payment_date");
            $table->unsignedInteger("sequence");
            $table->decimal("amount", 15, 2);
            $table->timestamp("notified_at")->nullable();
            $table->timestamp("paid_at")->nullable();
            $table->timestamps();

            $table->unique(["eurobond_asset_id", "payment_date"]);
            $table->index("payment_date");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eurobond_coupons');
    }
};
