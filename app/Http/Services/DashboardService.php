<?php

namespace App\Http\Services;

use App\Adapters\Contracts\HarryPotterAdapterInterface;

class DashboardService
{
    private $harryPotterAdapter;

    public function __construct(HarryPotterAdapterInterface $harryPotterAdapter)
    {
        $this->harryPotterAdapter = $harryPotterAdapter;
    }

    public function getAllCharacters() 
    {
        return $this->harryPotterAdapter->characters();
    }
}
