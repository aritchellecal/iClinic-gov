<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use Illuminate\Support\Str;
use App\Models\Patients;

$factory->define(Patients::class, function (Faker $faker) {
    return [
        'patientID' => $faker->creditCardNumber,
        'firstName' => $faker->firstName,
        'middleName' => $faker->firstName,
        'lastName' => $faker->lastName,
        'contactNo' => $faker->phoneNumber,
        'bDate' =>$faker->date,
        'age' => $faker->dayOfMonth,
        'gender' =>$faker->userName,
        'course' => $faker->jobTitle,
        'section' => $faker->word,
        'yearLevel' => $faker->cityPrefix,
        'civilStatus' => $faker->title($gender='Married'|'Single'),
        'religion' => $faker->company,
        'barangay' => $faker->streetName,
        'city' => $faker->city,
        'state' => $faker->state,
        'zcode' => $faker->buildingNumber,
    ];
});
