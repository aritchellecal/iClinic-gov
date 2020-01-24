<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQueuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('queues', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('patientID');
            $table->tinyInteger('orderNumber');
            $table->date('queDate');
            $table->string('status');
            $table->string('doctorsID')->nullable();
            $table->string('secretaryID');
            $table->timestamps();
            $table->foreign('patientID')->references('patientID')->on('patients')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('queues');
    }
}
