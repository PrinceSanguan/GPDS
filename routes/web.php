<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/system-kits', function () {
    return Inertia::render('SystemKits');
})->name('system-kits');

Route::get('/system-kits/option1', function () {
    return Inertia::render('SystemKits');
})->name('system-kits.option1');

Route::get('/system-kits/option2', function () {
    return Inertia::render('SystemKits');
})->name('system-kits.option2');

Route::get('/how-it-works', function () {
    return Inertia::render('HowItWorks');
})->name('how-it-works');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/free-audit', function () {
    return Inertia::render('FreeAudit');
})->name('free-audit');

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

// for dashboard route 
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');