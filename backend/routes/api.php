<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SubmissionController;
use App\Models\Journal;

// Public Routes
Route::post('/register', [AuthController::class, 'register'])->name('auth.register');
Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
Route::post('/forgot-password', [AuthController::class, 'forgotpassword'])->name('auth.forgot');
Route::post('/reset-password', [AuthController::class, 'resetpassword'])->name('auth.reset');

// Protected Routes
    Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::post('/submissions', [SubmissionController::class, 'store'])->name('submissions.store');
    Route::get('/submissions', [SubmissionController::class, 'index'])->name('submissions.index');
    Route::get('/submissions/{id}', [SubmissionController::class, 'show'])->name('submissions.show');
    Route::put('/submissions/{id}', [SubmissionController::class, 'update'])->name('submissions.update');
    Route::delete('/submissions/{id}', [SubmissionController::class, 'destroy'])->name('submissions.destroy');
});
