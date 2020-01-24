<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientMedicalRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_medical_records', function (Blueprint $table) {
            $this->down();
            $table->bigIncrements('id');
            $table->string('consultaionID')->unique();
            $table->string('patientID');
            $table->string('allergies');
            $table->string('medication');  
            $table->string('deformities');
            $table->string('secretaryID');
            $table->string('doctorsID');
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
        Schema::dropIfExists('patient_medical_records');
    }
}
