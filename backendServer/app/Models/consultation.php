<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    protected $fillable = [
        'patientID',
        'consultationID',
        'dateTaken',
        'complaint',
        'doctorsID',
        'secretaryID'

    ];

    public function vitals(){
        return $this->hasMany(PatientVitalSigns::class,'consultationID','consultationID');
    }
    
}
