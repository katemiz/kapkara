<?php

namespace App\Console\Commands;

use App\Models\Organization;
use App\Models\User;
use App\Models\Module;
use App\Models\Role;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class InstallApp extends Command
{
    protected $signature = 'app:install 
                            {--force : Force installation even if already installed}';

    protected $description = 'Install the application by creating the first organization and super admin user';

    public function handle()
    {
        $this->info('🚀 Application Installation Wizard');
        $this->newLine();

        // Check if already installed
        if ($this->isAlreadyInstalled() && !$this->option('force')) {
            $this->error('❌ Application is already installed.');
            $this->line('Use --force flag to reinstall.');
            return 1;
        }

        try {
            // Step 1: Create Organization
            $organization = $this->createOrganization();

            // Step 2: Create Super Admin User
            $user = $this->createSuperAdmin();

            // Step 3: Link user to organization
            $this->linkUserToOrganization($user, $organization);

            // Step 4: Create system modules and roles
            $this->createSystemRoles();

            // Step 5: Assign super admin role
            $this->assignSuperAdminRole($user, $organization);

            // Step 6: Mark as installed
            $this->markAsInstalled();

            $this->newLine();
            $this->info('✅ Installation completed successfully!');
            $this->newLine();
            $this->table(
                ['Organization', 'Admin Email', 'Admin Name'],
                [
                    [$organization->name, $user->email, $user->name]
                ]
            );

            return 0;

        } catch (\Exception $e) {
            $this->error('❌ Installation failed: ' . $e->getMessage());
            return 1;
        }
    }

    protected function createOrganization(): Organization
    {
        $this->info('📋 Step 1: Create Organization');

        $name = $this->ask('Organization name');
        $slug = $this->ask('Organization slug (URL-friendly)', \Str::slug($name));
        $domain = $this->ask('Organization domain (optional)', '');

        $validator = Validator::make([
            'name' => $name,
            'slug' => $slug,
        ], [
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:organizations,slug', 'alpha_dash'],
        ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->error($error);
            }
            return $this->createOrganization(); // Retry
        }

        return Organization::create([
            'name' => $name,
            'slug' => $slug,
            'domain' => $domain ?: null,
            'is_active' => true,
        ]);
    }

    protected function createSuperAdmin(): User
    {
        $this->newLine();
        $this->info('👤 Step 2: Create Super Admin User');

        $name = $this->ask('Admin name');
        $lastname = $this->ask('Admin lstname');

        $email = $this->ask('Admin email');
        $password = $this->secret('Admin password (min 8 characters)');

        $validator = Validator::make([
            'name' => $name,
            'lastname' => $lastname,
            'email' => $email,
            'password' => $password,
        ], [
            'name' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', Password::min(8)],
        ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->error($error);
            }
            return $this->createSuperAdmin(); // Retry
        }

        return User::create([
            'name' => $name,
            'lastname' => $lastname,
            'email' => $email,
            'password' => Hash::make($password),
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
        $this->newLine();
        $this->info('⚙️  Step 4: Creating system modules and roles...');

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

        $this->info('✓ System roles created');
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

        $this->info('✓ Super admin role assigned');
    }

    protected function markAsInstalled(): void
    {
        // Create a marker file or database record
        file_put_contents(storage_path('app/installed'), now()->toDateTimeString());

        $this->info('✓ Installation marker created');
    }

    protected function isAlreadyInstalled(): bool
    {
        return file_exists(storage_path('app/installed'));
    }
}