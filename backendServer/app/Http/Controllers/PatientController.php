<?php

namespace App\Http\Controllers;

use App\Http\Resources\PatientResource;
use App\Models\Patients;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index()
    {
        return PatientResource::collection(Patients::all());
    }

    public function store(Request $request)
    {
        $patient = Patients::create($request->all());
        return new PatientResource($patient);
        
    }

    public function show(Patients $patient)
    {
        return new PatientResource($patient);
    }

    public function update(Request $request,Patients $patient)
    {
        $patient->update($request->all());
        return new PatientResource($patient);
    }

    public function destroy(Patients $patient)
    {
        $patient->delete();

        return response()->json(null,204);
    }
}
