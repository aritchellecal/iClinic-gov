<?php

namespace App\Http\Controllers;

use App\Models\secretary;
use App\Http\Resources\SecretaryResource;
use Illuminate\Http\Request;

class SecretaryController extends Controller
{
    public function index()
    {
        return SecretaryResource::collection(secretary::all());
    }
    public function store(Request $request)
    {
        $secretary = secretary::create([
            'secretaryId' => $request->secretaryId,
            'fullName' => $request->fullName
        ]);
        return new SecretaryResource($secretary);
    }

    public function show(secretary $secretary)
    {
        return new SecretaryResource($secretary);
    }

    public function update(Request $request, secretary $secretary)
    {
        $secretary->update($request->all());

        return new SecretaryResource($secretary);
    }


    public function destroy(secretary $secretary)
    {
        $secretary->delete();

        return response()->json(null,204);
    }
}
