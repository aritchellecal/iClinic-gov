<?php

namespace App\Http\Controllers;

use App\Http\Resources\PatientVitalSignResource as VitalsResource;
use App\PatientVitalSigns as PatientVitals;
use Illuminate\Http\Request;

class PatientVitalSignController extends Controller
{
    
    public function index()
    {
        return VitalsResource::collection(PatientVitals::all());
    }

    public function store(Request $request)
    {
        $vitals = PatientVitals::create($request->all());
        return new VitalsResource($vitals);
    }
    public function show(PatientVitals $vital)
    {
        return new VitalsResource($vital);
    }

    public function update(Request $request,PatientVitals $vital)
    {
        $vital->update($request->all());
        return new VitalsResource($vital);
    }

    public function destroy($vital)
    {
        $vital->delete();
        return response()->json(null,204);
    }
}
