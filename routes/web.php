<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('pages/test/TestPage');
});

Route::middleware('auth')->group(function () {
    
});

require __DIR__.'/auth.php';
