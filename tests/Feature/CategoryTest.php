<?php

use App\Models\Category;
use App\Models\User;
use App\RolesEnum;
use Database\Seeders\RoleAndPermissionSeeder;

test('admin can create a product category', function () {
    $user = createUserWithRole(RolesEnum::ADMIN);

    $response = $this
        ->actingAs($user)
        ->post(route('category.store'), [
            'name' => 'Sample Category',
            'description' => 'Sample Description',
        ]);

    $response
        ->assertValid()
        ->assertRedirect()
        ->assertSessionHas("success", "You have successfully created a category.");

    $this->assertDatabaseHas('categories', [
        'name' => 'Sample Category',
        'description' => 'Sample Description',
    ]);
});

test('admin can update a product category', function () {
    $user = createUserWithRole(RolesEnum::ADMIN);

    // Create a category to update
    $category = Category::factory()->for($user)->create([
        'name' => 'Original Category',
        'description' => 'Original Description',
    ]);

    $response = $this
        ->actingAs($user)
        ->put(route('category.update', $category), [
            'name' => 'Updated Category',
            'description' => 'Updated Description',
        ]);

    $response
        ->assertValid()
        ->assertRedirect()
        ->assertSessionHas("success", "You have successfully updated the category.");

    $this->assertDatabaseHas('categories', [
        'id' => $category->id,
        'name' => 'Updated Category',
        'description' => 'Updated Description',
    ]);

});

test('admin can delete a product category', function () {
    $user = createUserWithRole(RolesEnum::ADMIN);

    // Create a category to delete
    $category = Category::factory()->for($user)->create();

    $response = $this
        ->actingAs($user)
        ->delete(route('category.destroy', $category));

    $response
        ->assertRedirect()
        ->assertSessionHas("success", "You have successfully deleted a category.");

    $this->assertDatabaseEmpty('categories');
});

test('prevent user with manager role to create product category', function () {
    $user = createUserWithRole(RolesEnum::MANAGER);

    $response = $this
        ->actingAs($user)
        ->post(route('category.store'), [
            'name' => 'Sample Category',
            'description' => 'Sample Description',
        ]);

    $response->assertForbidden();
});

test('prevent user with manager role to update product category', function () {
    $user = createUserWithRole(RolesEnum::MANAGER);

    // Create a category to update
    $category = Category::factory()->for($user)->create([
        'name' => 'Original Category',
        'description' => 'Original Description',
    ]);

    $response = $this
        ->actingAs($user)
        ->put(route('category.update', $category), [
            'name' => 'Updated Category',
            'description' => 'Updated Description',
        ]);

    $response->assertForbidden();

    // Assert if nothing was changed
    $this->assertDatabaseHas('categories', [
        'id' => $category->id,
        'name' => 'Original Category',
        'description' => 'Original Description',
    ]);
});

test('prevent user with manager role to delete product category', function () {
    $user = createUserWithRole(RolesEnum::MANAGER);

    // Create a category to delete
    $category = Category::factory()->for($user)->create();

    $response = $this
        ->actingAs($user)
        ->delete(route('category.destroy', $category));

    $response->assertForbidden();

    // Assert if nothing was changed
    $this->assertDatabaseCount('categories', 1);
});
