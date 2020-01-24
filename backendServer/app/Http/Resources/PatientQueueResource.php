<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientQueueResource extends JsonResource
{
    
    public function toArray($request)
    {
            // return parent::toArray($request);
        return [
            'id' => $this->id,
            'patientID' => $this->patientID,
            'orderNumber' => $this->orderNumber,
            'queDate' =>(string) $this->queDate,
            'status' =>$this->status,
            'action'=>$this->action,
            'doctorsID' =>$this->doctorsID,
            'secrectary' => $this->secretaryID,
            'patient' => new PatientResource($this->patient)
        ];
    }
}
