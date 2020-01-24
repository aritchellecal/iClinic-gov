<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patients extends Model
{
    protected $fillable = ['patientID','firstName','middleName',
    'lastName','exName','bDate','age','gender','course','section','yearLevel','civilStatus'
    ,'religion','barangay','city','state','zcode'];

    public function records(){
        return $this->hasMany(PatientMedicalRecords::class);
    }
    public function vitals(){
        return $this->hasMany(PatientVitalSigns::class,'patientID','patientID');
    }
    public function queue(){
        return $this->hasMany(Queue::class,'patientID','patientID');
    }

}
