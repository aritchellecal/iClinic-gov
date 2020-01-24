<?php

namespace App\Http\Controllers;

use App\Http\Resources\PatientMedicalRecordResource as MedicalResource;
use App\Models\PatientMedicalRecords as MedicalModel;
use Illuminate\Http\Request;

class PatientMedicalRecordsController extends Controller
{
    
    public function index()
    {
        return MedicalResource::collection(MedicalModel::with('vitals')->get());
    }

    
    public function store(Request $request)
    {
        $request = MedicalModel::create($request->all());
        return new MedicalResource($request);
    }

   
    public function show(MedicalModel $record)
    {
       
        // $record = MedicalModel::find($id);
        return new MedicalResource($record);
        
    }

    
    public function update(Request $request, MedicalModel $record)
    {
        $record->update($request->all());
        return new MedicalResource($record);
    }

    public function destroy($id)
    {
        //
    }
}
