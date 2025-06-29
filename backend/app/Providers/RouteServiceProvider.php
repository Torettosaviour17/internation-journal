<?php
Route::prefix('api')
    ->middleware('api')
    ->group(base_path('routes/api.php'));
