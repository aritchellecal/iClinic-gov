<?php

// use App\Http\Controllers\PatientVitalSignController;
// use App\Http\Resources\PatientDetailsResource;
// use Illuminate\Http\Request;
// use App\Http\Resources\SecretaryCollection;
// use App\PatientDetails;

Route::group([
    'middleware' => 'api'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});
    Route::apiResource('secretary','SecretaryController');
    Route::apiResource('patientdetails','PatientDetailsController');
    Route::apiResource('patient','PatientController');
    Route::apiResource('queue','PatientQueueController');
    Route::apiResource('vital','PatientVitalSignController');
    Route::apiResource('record','PatientMedicalRecordsController');

    // \DB::listen(function($query){
    //     var_dump($query->sql);
    // });

    // Route::get('patient','PatientController@index');
    
    // Route::get('vitals','PatientVitalSignController@index');