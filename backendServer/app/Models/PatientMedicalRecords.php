<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientMedicalRecords extends Model
{
    protected $fillable = [
        'consultaionID',
        'patientID',
        'allergies',
        'medication',
        'deformities',
        'secretaryID',
        'doctorsID',
    ];

    public function patient(){
        return $this->belongsTo(Patients::class);
    }
}
