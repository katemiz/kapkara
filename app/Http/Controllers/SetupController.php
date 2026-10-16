<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSetupRequest;
use App\Models\Organization;
use App\Models\User;
use App\Models\Module;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class SetupController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Setup/Home');
    }

    public function store(StoreSetupRequest $request): RedirectResponse
    {
        $data = $request->validated();

        // Step 1: Create Organization
        $organization = $this->createOrganization($data);

        // Step 2: Create Super Admin User
        $user = $this->createSuperAdmin($data);

        // Step 3: Link user to organization
        $this->linkUserToOrganization($user, $organization);

        // Step 4: Create system modules and roles
        $this->createSystemRoles();

        // Step 5: Assign super admin role
        $this->assignSuperAdminRole($user, $organization);

        Auth::login($user);

        //return redirect()->route('MyHome')->with('status', 'Setup complete. Welcome aboard!');
        return redirect('/')->with('status', 'Setup complete. Welcome aboard!');


        /*         return Inertia::render('MyHome', [
                    'status' => 'Setup complete. Welcome aboard!',
                    'user' => $user->only(['id', 'name', 'lastname', 'email']),
                    'organization' => $organization->only(['id', 'name', 'slug']),
                ]); */


    }


    protected function createOrganization($data): Organization
    {
        return Organization::create([
            'name' => $data['organization_name'],
            'slug' => Str::slug($data['organization_name']) . '-' . Str::random(6),
            'domain' => $data['organization_name'] ?: null,
            'is_active' => true,
        ]);
    }


    protected function createSuperAdmin($data): User
    {
        return User::create([
            'name' => $data['admin_name'],
            'lastname' => $data['admin_lastname'],
            'email' => $data['admin_email'],
            'password' => Hash::make($data['admin_password']),
            'email_verified_at' => now(),
            'is_super_admin' => true,
            'is_active' => true,
        ]);
    }


    protected function linkUserToOrganization(User $user, Organization $organization): void
    {
        $organization->users()->attach($user->id, [
            'is_owner' => true,
            'is_active' => true,
            'joined_at' => now(),
        ]);
    }


    protected function createSystemRoles(): void
    {
        // Create a "system" module for global roles (optional, or use null module_id)
        $systemModule = Module::firstOrCreate(
            ['code' => 'system'],
            [
                'name' => 'System Administration',
                'slug' => 'system',
                'is_core' => true,
                'is_active' => true,
                'description' => 'Core system administration module',
            ]
        );

        // Create super admin role
        Role::firstOrCreate(
            ['code' => 'super_admin', 'module_id' => $systemModule->id],
            [
                'name' => 'Super Administrator',
                'slug' => 'super-administrator',
                'description' => 'Full system access across all organizations and modules',
                'level' => 999,
                'is_system' => true,
                'is_active' => true,
            ]
        );

        // Create organization admin role
        Role::firstOrCreate(
            ['code' => 'org_admin', 'module_id' => $systemModule->id],
            [
                'name' => 'Organization Administrator',
                'slug' => 'organization-administrator',
                'description' => 'Full access within their organization',
                'level' => 100,
                'is_system' => true,
                'is_active' => true,
            ]
        );

    }


    protected function assignSuperAdminRole(User $user, Organization $organization): void
    {
        $systemModule = Module::where('code', 'system')->first();
        $superAdminRole = Role::where('code', 'super_admin')->first();

        // Create role assignment
        \DB::table('role_user')->insert([
            'user_id' => $user->id,
            'organization_id' => $organization->id,
            'module_id' => $systemModule->id,
            'role_id' => $superAdminRole->id,
            'granted_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

}