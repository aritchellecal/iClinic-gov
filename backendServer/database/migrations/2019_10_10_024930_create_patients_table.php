<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->string('patientID')->unique();
            $table->string('firstName');
            $table->string('middleName')->nullable();
            $table->string('lastName');
            $table->string('contactNo');
            $table->string('exName')->nullable();
            $table->date('bDate');
            $table->smallInteger('age');
            $table->string('gender');
            $table->string('course')->nullable();
            $table->string('section')->nullable();
            $table->string('yearLevel')->nullable();
            $table->string('civilStatus')->nullable();
            $table->string('religion')->nullable();
            $table->string('barangay');
            $table->string('city');
            $table->string('state');
            $table->string('zcode');
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
        Schema::dropIfExists('patients');
    }
}
