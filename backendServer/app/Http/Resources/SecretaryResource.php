<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SecretaryResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'secretaryId' => $this->secretaryId,
            'fullName' => $this->fullName,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at
        ];
    }
}
