<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSetupRequest;
use App\Models\Organization;
use App\Models\User;
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

        $user = DB::transaction(function () use ($data) {
            $organization = Organization::create([
                'name' => $data['organization_name'],
                'slug' => Str::slug($data['organization_name']) . '-' . Str::random(6),
            ]);

            $user = User::create([
                'name' => $data['admin_name'],
                'lastname' => $data['admin_lastname'],
                'email' => $data['admin_email'],
                'password' => Hash::make($data['admin_password']),
                'current_organization_id' => $organization->id,
            ]);

            $organization->users()->attach($user->id, [
                'is_owner' => true,
                'joined_at' => now(),
            ]);

            return $user;
        });

        Auth::login($user);

        //return redirect()->route('MyHome')->with('status', 'Setup complete. Welcome aboard!');
        return redirect('/')->with('status', 'Setup complete. Welcome aboard!');
    }
}