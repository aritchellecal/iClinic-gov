<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientVitalSignResource extends JsonResource
{
    
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'consultationID' => $this->consultationID,
            'patientID' => $this->patientID,
            'queID' => $this->queID,
            'pvsName' => $this->pvsName,
            'pvsValue' => $this->pvsValue,
            'pvsTime' => $this->pvsTime,
            'pvsDate' => $this->pvsDate,
            'status' => $this->status
        ];
    }
}
