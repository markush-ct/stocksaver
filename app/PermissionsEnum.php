<?php

namespace App;

enum PermissionsEnum: string
{
    case MANAGE_CATEGORIES = "manage-categories";
    case MANAGE_SUPPLIERS = "manage-suppliers";
    case MANAGE_INVENTORY = "manage-inventory";
    case MANAGE_PRODUCTS = "manage-products";
    case MANAGE_WAREHOUSES = "manage-warehouses";
    case MANAGE_MANAGERS = "manage-managers";
    case CREATE_DISPATCH = "create-dispatch";
    case READ_DISPATCH = "read-dispatch";
    case UPDATE_DISPATCH = "update-dispatch";
    case DELETE_DISPATCH = "delete-dispatch";
    case APPROVE_DISPATCH = "approve-dispatch";
}
