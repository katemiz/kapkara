<?php

namespace App\Http\Controllers;

use App\Models\ChangeRequest;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class ChangeRequestController extends Controller
{
    public $supportFixedData = [
        "status" => [
            [
                "value" => "WFR",
                "description" => "Waiting for Review",
                "description_tr" => "Onay Bekliyor",
            ],
            [
                "value" => "ACC",
                "description" => "Accepted",
                "description_tr" => "Onaylandı",
            ],
            [
                "value" => "WIP",
                "description" => "Work in Progress",
                "description_tr" => "İşlemde",
            ],
            [
                "value" => "COM",
                "description" => "Completed",
                "description_tr" => "Tamamlandı",
            ],
        ],
    ];

    // This is the default structure for a new MODEL, used when creating a new one
    public $crequest = [
        "title" => null,
        "description" => null,
        "remarks" => null,
        "status" => null,
    ];

    /**
     * Display a listing of questions.
     */
    public function index(Request $request): Response
    {
        return Inertia::render("Modules/PDM/Pages/ChangeRequest/Index", [
            // 'filters' sends the search term back to Svelte so the input stays filled
            "per_page" => config("pagination.per_page"),
            "filters" => $request->only(["search"]),
            "supportFixedData" => $this->supportFixedData,
            "crequests" => ChangeRequest::query()
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
        return Inertia::render("Modules/PDM/Pages/ChangeRequest/Form", [
            "crequest" => $this->crequest,
            "isEdit" => false,
            "supportFixedData" => $this->supportFixedData,
        ]);
    }

    /**
     * Store a newly created question in storage.
     */

    public function store(Request $request): RedirectResponse
    {
        $props = $this->readInput($request);

        $cr = ChangeRequest::create($props);

        $this->uploadFiles($request, $cr);

        return redirect()
            ->route("crequest.show", $cr->id)
            ->with("success", "Document created successfully.");
    }

    /**
     * Display the specified question.
     */
    public function show(int $idDoc): Response
    {
        $cr = ChangeRequest::findOrFail($idDoc);

        return Inertia::render("Modules/PDM/Pages/ChangeRequest/Show", [
            "crequest" => $cr,
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit(int $idDoc): Response
    {
        $cr = ChangeRequest::findOrFail($idDoc)->toArray();

        return Inertia::render("Modules/PDM/Pages/ChangeRequest/Form", [
            "crequest" => $cr,
            "isEdit" => true,
            "supportFixedData" => $this->supportFixedData,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, int $idDoc): RedirectResponse
    {
        $cr = ChangeRequest::findOrFail($idDoc);

        $theData = $this->readInput($request);

        $this->uploadFiles($request, $cr);

        $cr->update($theData);

        return redirect()
            ->route("crequest.show", $cr->id)
            ->with("success", "Document updated successfully.");
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy(int $idDoc): RedirectResponse
    {
        $cr = ChangeRequest::findOrFail($idDoc);
        $cr->delete();

        return redirect()
            ->route("crequest.index")
            ->with("success", "Document deleted successfully.");
    }

    public function readInput(Request $request): array
    {
        $values = [];

        $validated = $request->validate([
            "title" => "required|string|min:1|max:64",
            "description" => "required|string|max:256",
        ]);

        $values["title"] = $validated["title"];
        $values["description"] = $validated["description"];

        return $values;
    }

    public function uploadFiles(Request $request, ChangeRequest $cr): bool
    {
        // For file upload params
        // Request, Model, Input Element Name, Preset Key (For File Types), Collection (Spatie), Max Size (eg 2048)
        UploadService::uploadMultiple(
            $request,
            $cr,
            "crFiles",
            "documents",
            "attachments",
            "20480",
        );

        return true;
    }
}
