<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSoapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('soaps', function (Blueprint $table) {
            $this->down();

            $table->bigIncrements('id');
            $table->string('patientID');
            $table->string('consultationID');
            $table->string('subjective');
            $table->string('objective');
            $table->string('assesment');
            $table->string('plan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('soaps');
    }
}
