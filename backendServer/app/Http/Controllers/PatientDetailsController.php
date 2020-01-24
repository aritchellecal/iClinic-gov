<?php

namespace App\Http\Controllers;

use App\Http\Resources\PatientDetailsResource;
use App\Modles\PatientDetails;
use Illuminate\Http\Request;

class PatientDetailsController extends Controller
{

    public function index()
    {
        return PatientDetailsResource::collection(PatientDetails::all());
    }

    public function store(Request $request)
    {
        $patient = PatientDetails::create([
            'id' => $request->id,
            'patientID' => $request->patientID,
            'fullName' => $request->fullName,
            'religion' => $request->religion,
            'civilStatus' => $request->civilStatus,
            'course' => $request->course,
            'section' => $request->section,
            'yearLevel' => $request->yearLevel,
        ]);
        return new PatientDetailsResource($patient);
    }

    public function show(PatientDetails $patientdetails,$params)
    {
        return (new PatientDetailsResource($patientdetails::find($params)))->response()
        ->header('X-Value', 'True');

    }

    public function update(Request $request, PatientDetails $patient)
    {
        $patient->update($request->all());
        return new PatientDetailsResource($patient);
    }

    public function destroy(PatientDetails $patient)
    {
        $patient->delete();
        return response()->json(null,204);
    }
}
