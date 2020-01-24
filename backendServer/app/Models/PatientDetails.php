<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientDetails extends Model
{
    protected $fillable = ['patientID','fullName','religion','civilStatus','course','section','yearLevel'];
}
