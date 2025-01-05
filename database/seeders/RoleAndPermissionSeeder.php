<?php

namespace Database\Seeders;

use App\PermissionsEnum;
use App\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create other admin permissions
        app(Permission::class)->findOrCreate(PermissionsEnum::MANAGE_CATEGORIES->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::MANAGE_INVENTORY->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::MANAGE_MANAGERS->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::MANAGE_PRODUCTS->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::MANAGE_SUPPLIERS->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::MANAGE_WAREHOUSES->value);

        // Dispatch permissions for dispatching products from the warehouse
        app(Permission::class)->findOrCreate(PermissionsEnum::CREATE_DISPATCH->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::READ_DISPATCH->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::UPDATE_DISPATCH->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::DELETE_DISPATCH->value);
        app(Permission::class)->findOrCreate(PermissionsEnum::APPROVE_DISPATCH->value);

        // List of permissions for manager role
        $managerPermissions = [
            PermissionsEnum::MANAGE_INVENTORY->value,
            PermissionsEnum::CREATE_DISPATCH->value,
            PermissionsEnum::READ_DISPATCH->value,
            PermissionsEnum::UPDATE_DISPATCH->value,
        ];

        // Create admin and manager role
        $adminRole = app(Role::class)->findOrCreate(RolesEnum::ADMIN->value);
        $managerRole = app(Role::class)->findOrCreate(RolesEnum::MANAGER->value);

        // Assign permissions to the role
        $adminRole->givePermissionTo(Permission::all());
        $managerRole->givePermissionTo($managerPermissions);
    }
}
