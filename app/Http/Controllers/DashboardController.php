<?php

namespace App\Http\Controllers;

use App\Http\Services\DashboardService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private $dashboardService;

    public function __construct(DashboardService $dashboardService)
    {
        $this->dashboardService = $dashboardService;
    }

    public function index() 
    {
        $characters = $this->dashboardService->getAllCharacters();
        return Inertia::render('Dashboard', [
            'characters' => $characters
        ]);
    }
}
