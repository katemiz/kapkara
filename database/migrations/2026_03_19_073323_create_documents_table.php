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
        Schema::create("documents", function (Blueprint $table) {
            $table->id();
            $table->string("doc_type");
            $table->integer("document_no");
            $table->integer("revision")->default(1);
            $table->text("description");
            $table->text("remarks")->nullable();
            $table->boolean("is_latest")->default(true);
            $table->string("status")->default("DRAFT");
            $table->userstamps(); // provided by App\Providers\AppServiceProvider
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("documents");
    }
};
