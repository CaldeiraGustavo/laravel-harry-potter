<?php

namespace App\Adapters\Eloquent;

use App\Adapters\Contracts\HarryPotterAdapterInterface;
use Illuminate\Support\Facades\Http;

class HarryPotterAdapter implements HarryPotterAdapterInterface
{
    public function characters()
    {
        $response = Http::get(env('BASE_API_URL'));
        return $response->json();
    }

    public function students()
    {
        return Http::get(env('BASE_API_URL'));
    }
    
    public function staff()
    {
        return Http::get(env('BASE_API_URL'));
    }
    
    public function house($id)
    {
        return Http::get(env('BASE_API_URL'));
    }
}