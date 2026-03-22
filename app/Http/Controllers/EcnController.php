<?php

namespace App\Http\Controllers;

use App\Models\ChangeRequest;
use App\Models\EngineeringChangeNotice;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class EcnController extends Controller
{
    public $supportFixedData = [
        "status" => [
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
    public $ecn = [
        "change_request_id" => "",
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
        return Inertia::render("Modules/PDM/Pages/ECN/Index", [
            // 'filters' sends the search term back to Svelte so the input stays filled
            "per_page" => config("pagination.per_page"),
            "filters" => $request->only(["search"]),
            "supportFixedData" => $this->supportFixedData,
            "ecns" => EngineeringChangeNotice::query()
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
        // Get Change Requests that are WFR
        $changeRequests = ChangeRequest::query()->where("status", "WFR")->get();

        return Inertia::render("Modules/PDM/Pages/ECN/Form", [
            "changeRequests" => $changeRequests,
            "ecn" => $this->ecn,
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

        $ecn = EngineeringChangeNotice::create($props);

        $this->uploadFiles($request, $ecn);

        return redirect()
            ->route("ecn.show", $ecn->id)
            ->with("success", "ECN created successfully.");
    }

    /**
     * Display the specified question.
     */
    public function show(int $idDoc): Response
    {
        $ecn = EngineeringChangeNotice::findOrFail($idDoc);

        return Inertia::render("Modules/PDM/Pages/ECN/Show", [
            "ecn" => $ecn,
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit(int $idDoc): Response
    {
        // Get Change Requests that are WFR
        $changeRequests = ChangeRequest::query()->where("status", "WFR")->get();

        $ecn = EngineeringChangeNotice::findOrFail($idDoc)->toArray();

        return Inertia::render("Modules/PDM/Pages/ECN/Form", [
            "changeRequests" => $changeRequests,
            "ecn" => $ecn,
            "isEdit" => true,
            "supportFixedData" => $this->supportFixedData,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, int $idDoc): RedirectResponse
    {
        $ecn = EngineeringChangeNotice::findOrFail($idDoc);

        $theData = $this->readInput($request);

        $this->uploadFiles($request, $ecn);

        $ecn->update($theData);

        return redirect()
            ->route("ecn.show", $ecn->id)
            ->with("success", "ECN updated successfully.");
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy(int $idDoc): RedirectResponse
    {
        $ecn = EngineeringChangeNotice::findOrFail($idDoc);
        $ecn->delete();

        return redirect()
            ->route("ecn.index")
            ->with("success", "ECN deleted successfully.");
    }

    public function readInput(Request $request): array
    {
        $values = [];

        $validated = $request->validate([
            "change_request_id" => "required|integer",
            "title" => "required|string|min:1|max:64",
            "description" => "required|string|max:256",
        ]);

        $values["change_request_id"] = $validated["change_request_id"];
        $values["title"] = $validated["title"];
        $values["description"] = $validated["description"];

        return $values;
    }

    public function uploadFiles(
        Request $request,
        EngineeringChangeNotice $ecn,
    ): bool {
        // For file upload params
        // Request, Model, Input Element Name, Preset Key (For File Types), Collection (Spatie), Max Size (eg 2048)
        UploadService::uploadMultiple(
            $request,
            $ecn,
            "ecnFiles",
            "documents",
            "attachments",
            "20480",
        );

        return true;
    }
}
