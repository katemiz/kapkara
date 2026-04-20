<?php

namespace App\Http\Controllers;

use App\Models\Material;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class ConfiguratorController extends Controller
{
    // This will hold any support data needed for the form (e.g., dropdown options)

    public $supportFixedData = [
        "materialCategories" => [
            ["value" => "1", "label" => "Aluminium"],
            ["value" => "2", "label" => "Steel"],
            ["value" => "3", "label" => "Copper"],
            ["value" => "4", "label" => "Plastic"],
        ],

        "materialForms" => [
            ["value" => "1", "label" => "Sheet/Plate"],
            ["value" => "2", "label" => "Round/Bar"],
            ["value" => "3", "label" => "Tube/Profile"],
            ["value" => "4", "label" => "Casting"],
        ],

        "materialIsActive" => [
            ["value" => 0, "label" => "Inactive"],
            ["value" => 1, "label" => "Active"],
        ],
    ];

    // This is the default structure for a new MODEL, used when creating a new one

    public $mast_parameters = [
        "base_adapter_height" => 50,
        "payload_adapter_height" => 15,
        "head_height" => 42,
        "material" => "6063",
        "tube_length" => 2000,
        "start_tube_no" => 10,
        "end_tube_no" => 15,
        "overlap" => 500,
        "terrain_category" => "II",
        "wind_speed" => 120,
        "sail_area" => 1.2,
        "x_offset" => 100,
    ];

    /**
     * Display a listing of questions.
     */
    public function index(Request $request): Response
    {
        return Inertia::render("Modules/PDM/Pages/Engineering/Configurator", [
            // 'filters' sends the search term back to Svelte so the input stays filled
            "per_page" => config("pagination.per_page"),
            "filters" => $request->only(["search"]),
            "materials" => Material::query()
                ->when($request->input("search"), function ($query, $search) {
                    $query
                        ->where("description", "like", "%{$search}%")
                        ->orWhere("specification", "like", "%{$search}%")
                        ->orWhere("remarks", "like", "%{$search}%");
                })
                ->latest()
                ->paginate(config("pagination.per_page"))
                ->withQueryString(), // VERY IMPORTANT: keeps search param during pagination
        ]);
    }

    /**
     * Show the form for creating a new question.
     */
    public function create(): Response
    {
        return Inertia::render("Modules/PDM/Pages/Material/Form", [
            "material" => $this->material,
            "isEdit" => false,
            "supportFixedData" => $this->supportFixedData,
        ]);
    }

    /**
     * Store a newly created question in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $theData = $this->readInput($request);

        $material = Material::create($theData);

        $this->uploadFiles($request, $material);

        return redirect()
            ->route("material.show", $material->id)
            ->with("success", "Material created successfully.");
    }

    /**
     * Display the specified question.
     */
    public function show(int $idMaterial): Response
    {
        $material = Material::findOrFail($idMaterial);

        return Inertia::render("Modules/PDM/Pages/Material/Show", [
            "material" => $material,
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit(int $idMaterial): Response
    {
        $material = Material::findOrFail($idMaterial)->toArray();

        return Inertia::render("Modules/PDM/Pages/Material/Form", [
            "material" => $material,
            "isEdit" => true,
            "supportFixedData" => $this->supportFixedData,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, int $idMaterial): RedirectResponse
    {
        $material = Material::findOrFail($idMaterial);
        $theData = $this->readInput($request);

        $this->uploadFiles($request, $material);

        $material->update($theData);

        return redirect()
            ->route("material.show", $material->id)
            ->with("success", "Material updated successfully.");
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy(int $idMaterial): RedirectResponse
    {
        $material = Material::findOrFail($idMaterial);
        $material->delete();

        return redirect()
            ->route("material.index")
            ->with("success", "Material deleted successfully.");
    }

    public function readInput(Request $request): array
    {
        $values = [];

        $validated = $request->validate([
            "materialCategory" => "required|string|min:1|max:64",
            "materialForm" => "required|string",
            "materialName" => "required|string|max:64",
            "materialSpecification" => "required|string|max:256",
            "materialNotes" => "nullable|string|max:500",
            "materialIsActive" => "required|boolean",
        ]);

        $values["category"] = $validated["materialCategory"];
        $values["form"] = $validated["materialForm"];
        $values["description"] = $validated["materialName"];
        $values["specification"] = $validated["materialSpecification"];
        $values["remarks"] = $validated["materialNotes"];
        $values["is_active"] = $validated["materialIsActive"];

        return $values;
    }

    public function uploadFiles(Request $request, Material $material): bool
    {
        // For file upload params
        // Request, Model, Input Element Name, Preset Key (For File Types), Collection (Spatie), Max Size (eg 2048)
        UploadService::uploadMultiple(
            $request,
            $material,
            "materialFiles",
            "documents",
            "attachments",
            "20480",
        );

        return true;
    }
}
