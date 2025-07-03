<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SystemKitController;
use App\Http\Controllers\AuditController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;

// Main landing page
Route::get('/', [HomeController::class, 'welcome'])->name('home');

// Static pages
Route::get('/how-it-works', [PageController::class, 'howItWorks'])->name('how-it-works');
Route::get('/pricing', [PageController::class, 'pricing'])->name('pricing');
Route::get('/blog', [PageController::class, 'blog'])->name('blog');
Route::get('/about', [PageController::class, 'about'])->name('about');

// System Kit Routes
Route::prefix('kits')->name('kits.')->group(function () {
    Route::get('/', [SystemKitController::class, 'index'])->name('index');
    Route::get('/{kit}', [SystemKitController::class, 'show'])->name('show');
    Route::post('/{kit}/purchase', [SystemKitController::class, 'purchase'])->name('purchase');
    Route::post('/{kit}/book-setup', [SystemKitController::class, 'bookSetup'])->name('book-setup');
});

// Audit Routes
Route::prefix('audit')->name('audit.')->group(function () {
    Route::get('/', [AuditController::class, 'show'])->name('show');
    Route::post('/', [AuditController::class, 'submit'])->name('submit');
    Route::get('/results', [AuditController::class, 'results'])->name('results');
});

// Contact Routes
Route::post('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/contact/success', [HomeController::class, 'contactSuccess'])->name('contact.success');

// Authentication Routes
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store');
    Route::get('/register', [RegisterController::class, 'index'])->name('register');
    Route::post('/register', [RegisterController::class, 'store'])->name('register.store');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');
    
    // Dashboard Routes
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/kits/{kit}', [DashboardController::class, 'kitHub'])->name('dashboard.kit-hub');
    
    // Placeholder routes for dashboard sections
    Route::get('/dashboard/kits', function () {
        return redirect()->route('dashboard');
    })->name('dashboard.kits');
    
    Route::get('/dashboard/performance', function () {
        return redirect()->route('dashboard');
    })->name('dashboard.performance');
    
    Route::get('/dashboard/automations', function () {
        return redirect()->route('dashboard');
    })->name('dashboard.automations');
    
    Route::get('/dashboard/leads', function () {
        return redirect()->route('dashboard');
    })->name('dashboard.leads');
    
    Route::get('/dashboard/bookings', function () {
        return redirect()->route('dashboard');
    })->name('dashboard.bookings');
    
    Route::get('/dashboard/settings', function () {
        return redirect()->route('dashboard');
    })->name('dashboard.settings');
    
    Route::get('/dashboard/support', function () {
        return redirect()->route('dashboard');
    })->name('dashboard.support');
});
