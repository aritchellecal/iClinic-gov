<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Queue extends Model
{
    protected $fillable = [
        'patientID',
        'orderNumber',
        'queDate',
        'status',
        'doctorsID',
        'secretaryID'
    ];

    public function patient(){
        return $this->belongsTo(Patients::class,'patientID','patientID');
    }
}
