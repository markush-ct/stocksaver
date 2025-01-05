<?php

namespace App;

enum RolesEnum: string
{
    case ADMIN = 'admin';
    case MANAGER = 'manager';

    public function label(): string
    {
        return match ($this) {
            static::ADMIN => 'Admins',
            static::MANAGER => 'Managers',
        };
    }
}
