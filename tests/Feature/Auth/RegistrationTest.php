<?php

use App\Models\User;
use App\RolesEnum;
use Database\Seeders\RoleAndPermissionSeeder;

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});

test('new users can register and have admin role by default', function () {
    $this->artisan('db:seed', ['--class' => RoleAndPermissionSeeder::class]);

    $response = $this->post('/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    // Fetch the newly created user
    $user = User::where('email', 'test@example.com')->first();

    // Assert the user has been assigned the default role
    expect($user->hasRole(RolesEnum::ADMIN))->toBeTrue();

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});
