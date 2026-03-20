<?php

namespace App\Http\Controllers;

use App\Models\Standard;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class StandardController extends Controller
{
    public $supportFixedData = [
        "organisation" => [
            [
                "value" => "ISO",
                "description" => "International Standardisation Organisation",
            ],
            [
                "value" => "ASTM",
                "description" => "American Society of Testing and Materials",
            ],
            [
                "value" => "ANSI",
                "description" => "American National Standards Institute",
            ],
            [
                "value" => "IEC",
                "description" => "International Electrotechnical Commission",
            ],
            [
                "value" => "DIN",
                "description" => "Deutsches Institut für Normung",
            ],
            [
                "value" => "JIS",
                "description" => "Japanese Industrial Standards",
            ],
        ],

        "is_active" => [
            ["value" => 0, "label" => "Inactive"],
            ["value" => 1, "label" => "Active"],
        ],
    ];

    // This is the default structure for a new MODEL, used when creating a new one

    public $standard = [
        "organisation" => null,
        "standard_number" => null,
        "description" => null,
        "designation" => null,
        "remarks" => null,
        "isActive" => 1,
    ];

    /**
     * Display a listing of questions.
     */
    public function index(Request $request): Response
    {
        return Inertia::render("Modules/PDM/Pages/Standard/Index", [
            // 'filters' sends the search term back to Svelte so the input stays filled
            "per_page" => config("pagination.per_page"),
            "filters" => $request->only(["search"]),
            "supportFixedData" => $this->supportFixedData,
            "standards" => Standard::query()
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
        return Inertia::render("Modules/PDM/Pages/Standard/Form", [
            "standard" => $this->standard,
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
        $std = Standard::create($theData);

        $this->uploadFiles($request, $std);

        return redirect()
            ->route("standard.show", $std->id)
            ->with("success", "Standard created successfully.");
    }

    /**
     * Display the specified question.
     */
    public function show(int $idStandard): Response
    {
        $std = Standard::findOrFail($idStandard);

        return Inertia::render("Modules/PDM/Pages/Standard/Show", [
            "standard" => $std,
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit(int $idStandard): Response
    {
        $std = Standard::findOrFail($idStandard)->toArray();

        return Inertia::render("Modules/PDM/Pages/Standard/Form", [
            "standard" => $std,
            "isEdit" => true,
            "supportFixedData" => $this->supportFixedData,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, int $idStandard): RedirectResponse
    {
        $std = Standard::findOrFail($idStandard);

        $theData = $this->readInput($request);

        $this->uploadFiles($request, $std);

        $std->update($theData);

        return redirect()
            ->route("standard.show", $std->id)
            ->with("success", "Standard updated successfully.");
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy(int $idStandard): RedirectResponse
    {
        $std = Standard::findOrFail($idStandard);
        $std->delete();

        return redirect()
            ->route("standard.index")
            ->with("success", "Standard deleted successfully.");
    }

    public function readInput(Request $request): array
    {
        $values = [];
        $validated = $request->validate([
            "organisation" => "required|string|min:1|max:64",
            "standard_number" => "required|string|max:64",
            "description" => "required|string|max:256",
            "remarks" => "nullable|string|max:500",
            "isActive" => "required|boolean",
        ]);

        $values["organisation"] = $validated["organisation"];
        $values["standard_number"] = $validated["standard_number"];
        $values["description"] = $validated["description"];
        $values["remarks"] = $validated["remarks"];
        $values["is_active"] = $validated["isActive"];

        return $values;
    }

    public function uploadFiles(Request $request, Standard $standard): bool
    {
        // For file upload params
        // Request, Model, Input Element Name, Preset Key (For File Types), Collection (Spatie), Max Size (eg 2048)
        UploadService::uploadMultiple(
            $request,
            $standard,
            "stdFiles",
            "documents",
            "attachments",
            "20480",
        );

        return true;
    }
}
