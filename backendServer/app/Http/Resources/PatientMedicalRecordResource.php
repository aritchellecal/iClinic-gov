<?php

namespace App\Http\Resources;

use App\PatientVitalSigns;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientMedicalRecordResource extends JsonResource
{
    
    public function toArray($request)
    {
        // return [
        //     'id' => $this->id,
        //     'consultationID' => $this->consultaionID,
        //     'patientID' => $this->patientID,
        //     'allergies' => $this->allergies,
        //     'medication' => $this->medication,
        //     'deformities' => $this->deformities,
        //     'secretaryID' => $this->secretaryID,
        //     'doctorsID' => $this->doctorsID
        // ];

        return parent::toArray($request);
    }
}
