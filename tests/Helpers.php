<?php

use App\Models\User;
use Database\Seeders\RoleAndPermissionSeeder;

function createUserWithRole(array|BackedEnum|string $roles)
{
    test()->seed(RoleAndPermissionSeeder::class);

    $user = User::factory()->create();
    $user->assignRole($roles);

    return $user;
}
