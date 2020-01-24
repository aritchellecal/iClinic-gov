<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class secretary extends Model
{

    protected $fillable = ['secretaryId', 'fullName'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
