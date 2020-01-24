<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'patientID' => $this->patientID,
            'firstName' => $this->firstName,
            'middleName' => $this->middleName,
            'lastName' => $this->lastName,
            'exName' => $this->exName,
            'fullName' => $this->firstName . " " . $this->lastName,
            'contactNo' => $this->contactNo,
            'bDate' => (string) $this->bDate,
            'age' => $this->age,
            'gender' => $this->gender,
            'section' => $this->section,
            'course' => $this->course,
            'yearLevel' => $this->yearLevel,
            'civilStatus' => $this->civilStatus,
            'religion' => $this->religion,
            'barangay' => $this->barangay,
            'city' => $this->city,
            'state' => $this->state,
            'zcode' => $this->zcode,
        ];
    }
}
