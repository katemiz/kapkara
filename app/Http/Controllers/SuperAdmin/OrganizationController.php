<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    public function index(Request $request)
    {

        // 1. Capture and cleanly sanitize the boolean flag
        $show_latest_only = $request->has('show_latest_only')
            ? filter_var($request->input('show_latest_only'), FILTER_VALIDATE_BOOLEAN)
            : true;

        $search = $request->input("search");


        return Inertia::render("Modules/SuperAdmin/Organizations/Index", [

            "per_page" => config("pagination.per_page"),

            // 2. Pass BOTH filters back to Svelte to preserve input states
            "filters" => [
                "search" => $search,
                "show_latest_only" => $show_latest_only
            ],

            "organizations" => Organization::query()
                ->when($request->input("search"), function ($query, $search) {
                    // Wrap all the OR clauses together inside a single, isolated WHERE group
                    $query->where(function ($nestedQuery) use ($search) {
                        $nestedQuery->where("description", "like", "%{$search}%")
                            ->orWhere("name", "like", "%{$search}%")
                            ->orWhere("slug", "like", "%{$search}%");
                    });
                })


                // ->when($show_latest_only, function ($query) {
                //     $query->where("is_latest", 1);
                // })
                ->latest()
                ->paginate(config("pagination.per_page"))
                ->withQueryString(), // VERY IMPORTANT: keeps search param during pagination
        ]);


















        $organizations = Organization::query()
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('slug', 'like', "%{$search}%");
            })
            ->orderBy('name')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/SuperAdmin/Organizations/Index', [
            'organizations' => $organizations,
            'filters' => $request->only(['search']),
            'per_page' => 20
        ]);
    }

    public function create()
    {
        return Inertia::render('Modules/SuperAdmin/Organizations/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:organizations,slug|alpha_dash',
            'domain' => 'nullable|string|max:255',
            'is_active' => 'boolean',
        ]);

        Organization::create($validated);

        return redirect()->route('admin.organizations.index')->with('success', 'Organization created.');
    }

    public function edit(Organization $organization)
    {
        return Inertia::render('Modules/SuperAdmin/Organizations/Edit', [
            'organization' => $organization,
        ]);
    }

    public function update(Request $request, Organization $organization)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:organizations,slug,' . $organization->id . '|alpha_dash',
            'domain' => 'nullable|string|max:255',
            'is_active' => 'boolean',
        ]);

        $organization->update($validated);

        return redirect()->route('admin.organizations.index')->with('success', 'Organization updated.');
    }

    public function destroy(Organization $organization)
    {
        $organization->delete();
        return redirect()->route('admin.organizations.index')->with('success', 'Organization deleted.');
    }

    public function show(Organization $organization)
    {
        return Inertia::render('Modules/SuperAdmin/Organizations/Show', [
            'organization' => $organization,
        ]);
    }
}