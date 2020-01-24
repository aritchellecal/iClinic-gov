<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientVitalSigns extends Model
{
    protected $fillable = [
        'consultationID',
        'patientID',
        'fullName',
        'pvsName',
        'pvsValue',
        'pvsTime',
        'pvsDate',
        'status'
    ];

    public function consult(){
        return $this->belongsTo(Consultation::class);
    }

    public function patient(){
        return $this->belongsTo(Patients::class,'patientID','patientID');
    }
}
