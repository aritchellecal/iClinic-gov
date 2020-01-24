<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSecretariesTable extends Migration
{

    public function up()
    {
        Schema::create('secretaries', function (Blueprint $table) {
            $this->down();
            $table->bigIncrements('id');
            $table->string('secretaryId');
            $table->string('fullName');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('secretaries');
    }
}
