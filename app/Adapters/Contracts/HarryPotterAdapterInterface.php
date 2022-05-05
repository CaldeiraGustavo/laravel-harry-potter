<?php

namespace App\Adapters\Contracts;

interface HarryPotterAdapterInterface
{
    public function characters();
    public function students();
    public function staff();
    public function house($id);
}