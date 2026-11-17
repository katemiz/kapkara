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
        Schema::create('eurobond_assets', function (Blueprint $table) {
            $table->id();
            $table->text("name");
            $table->date("due_date");
            $table->decimal("amount", 15, 2);
            $table->float("coupon_interest_rate", 5, 3);
            $table->decimal("buy_price", 15, 3);
            $table->enum("money_unit", ["EUR", "USD"]);
            $table->enum("bank", ["ISBANK", "AKBANK"]);
            $table->enum("person", ["KAT", "AST", "MDT", "HDT"]);
            $table->date("first_coupon_date");
            $table->userstamps(); // provided by App\Providers\AppServiceProvider
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eurobond_assets');
    }
};
