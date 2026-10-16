<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Module;
use App\Models\Organization;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {

        $menuItems = $this->getMenuItems();

        return Inertia::render('Modules/SuperAdmin/Home', [
            'menuItems' => $menuItems,
        ]);
    }

    private function getMenuItems(): array
    {
        return [
            [
                'key' => 'organizations',
                'title' => 'Organizations',
                'description' => 'Manage tenants, subscriptions, and settings.',
                'icon' => 'fa-building',
                'color' => 'primary',
                'route' => '/admin/organizations',
                'count' => Organization::count(),
                'countLabel' => 'Total',
            ],
            [
                'key' => 'users',
                'title' => 'Users',
                'description' => 'Manage the global userbase across all organizations.',
                'icon' => 'fa-users',
                'color' => 'info',
                'route' => '/admin/users',
                'count' => User::count(),
                'countLabel' => 'Total',
            ],
            [
                'key' => 'modules',
                'title' => 'Modules',
                'description' => 'Register and configure application modules.',
                'icon' => 'fa-cubes',
                'color' => 'link',
                'route' => '/admin/modules',
                'count' => Module::count(),
                'countLabel' => 'Installed',
            ],
            [
                'key' => 'roles',
                'title' => 'Roles',
                'description' => 'Define roles scoped to modules and organizations.',
                'icon' => 'fa-user-shield',
                'color' => 'success',
                'route' => '/admin/roles',
                'count' => Role::count(),
                'countLabel' => 'Defined',
            ],
            [
                'key' => 'permissions',
                'title' => 'Permissions',
                'description' => 'Manage granular permissions per module.',
                'icon' => 'fa-key',
                'color' => 'warning',
                'route' => '/admin/permissions',
                'count' => Permission::count(),
                'countLabel' => 'Total',
            ],
            [
                'key' => 'departments',
                'title' => 'Departments',
                'description' => 'Organize organizational hierarchies and teams.',
                'icon' => 'fa-sitemap',
                'color' => 'danger',
                'route' => '/admin/departments',
                'count' => Department::count(),
                'countLabel' => 'Total',
            ],
        ];
    }

    // Placeholder methods for each section
    public function organizations()
    {
        return Inertia::render('Modules/SuperAdmin/Organizations/Index');
    }
    public function users()
    {
        return Inertia::render('Modules/SuperAdmin/Users/Index');
    }
    public function modules()
    {
        return Inertia::render('Modules/SuperAdmin/Modules/Index');
    }
    public function roles()
    {
        return Inertia::render('Modules/SuperAdmin/Roles/Index');
    }
    public function permissions()
    {
        return Inertia::render('Modules/SuperAdmin/Permissions/Index');
    }
    public function departments()
    {
        return Inertia::render('Modules/SuperAdmin/Departments/Index');
    }
}