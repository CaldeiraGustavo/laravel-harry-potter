<?php

namespace App\Providers;

use App\Adapters\Contracts\HarryPotterAdapterInterface;
use App\Adapters\Eloquent\HarryPotterAdapter;
use Illuminate\Support\ServiceProvider;

class AdapterServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(HarryPotterAdapterInterface::class, HarryPotterAdapter::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
