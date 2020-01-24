<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientVitalSignsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_vital_signs', function (Blueprint $table) {
            $this->down();
            $table->bigIncrements('id');
            $table->string('consultationID');
            $table->string('patientID');
            $table->string('queID');
            $table->string('pvsName');
            $table->string('pvsValue');
            $table->time('pvsTime');
            $table->date('pvsDate');
            $table->string('status');
            $table->timestamps();

            $table->foreign('consultationID')->references('consultaionID')->on('patient_medical_records')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patient_vital_signs');
    }
}
