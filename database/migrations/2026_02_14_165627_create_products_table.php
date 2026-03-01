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
        Schema::create('products', function (Blueprint $table) {

            $table->id();

            $table->string('product_type');

            $table->boolean(column: 'is_sellable')->default(false);
            $table->boolean(column: 'has_configurations')->default(false);
            $table->integer(column: 'has_mirror')->nullable();

            $table->integer('part_number');
            $table->text('description')->nullable();

            $table->integer('is_mirror_of')->nullable();
            $table->integer('base_part_id')->default(0);

            $table->integer('updated_uid');

            $table->string('unit')->default('mm');

            $table->integer('standard_family_id')->nullable();
            $table->text('standard_number')->nullable();
            $table->text('std_params')->nullable();
            $table->integer('makefrom_part_id')->nullable();
            $table->integer('version')->default(0);
            $table->boolean(column: 'is_latest')->default(true);
            $table->text('vendor')->nullable();
            $table->text('vendor_part_no')->nullable();
            $table->text('vendor_url')->nullable();
            $table->float('weight',8,3)->nullable();
            $table->text('material_text')->nullable();
            $table->text('finish_text')->nullable();
            $table->string('config_number')->nullable(); 
            $table->text('remarks')->nullable();
            $table->string('status')->default('WIP');


            $table->foreignId('checker_id')->nullable();
            $table->foreignId('approver_id')->nullable();
            $table->string('reject_reason_check')->nullable();
            $table->string('reject_reason_app')->nullable();
            $table->date('check_reviewed_at')->nullable();
            $table->date('app_reviewed_at')->nullable();

            $table->userstamps();   // provided by App\Providers\AppServiceProvider
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
