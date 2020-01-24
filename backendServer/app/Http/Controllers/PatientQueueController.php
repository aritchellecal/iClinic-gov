<?php

namespace App\Http\Controllers;

use App\Http\Resources\PatientQueueResource;
use App\Models\Queue;
use Illuminate\Http\Request;

class PatientQueueController extends Controller
{
    
    public function index()
    {
       return PatientQueueResource::collection(Queue::with('patient')->get());
    }
 
    public function store(Request $request)
    {
        $ques = Queue::create($request->all());
        return new PatientQueueResource($ques);
    }

    public function show(Queue $queue)
    {

        return new PatientQueueResource($queue);
    }


    public function update(Request $request,Queue $queue)
    {
        $queue->update($request->all());
        return new PatientQueueResource($queue);
    }

    public function destroy(Queue $queue)
    {
        $queue->delete();
        return response()->json(null,204);
    }
}
