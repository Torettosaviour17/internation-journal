<?php

use Illuminate\Support\Facades\Route;
use App\Models\Journal;
use App\Http\Controllers\SubmissionController;



Route::get('/', function () {
    return view('welcome');
});



Route::get('/journals', function () {
    return Journal::all();
});


Route::post('/submissions', [SubmissionController::class, 'store']);


Route::get('/test', function () {
    return 'Hello, this is working!';
});