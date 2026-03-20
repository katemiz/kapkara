<?php

namespace App\Http\Controllers;

use App\Models\Counter;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class DocumentController extends Controller
{
    public $supportFixedData = [
        "doc_types" => [
            [
                "value" => "GR",
                "description" => "General Document",
                "description_tr" => "Genel Belge",
            ],
            [
                "value" => "TR",
                "description" => "Test Report",
                "description_tr" => "Test Raporu",
            ],
            [
                "value" => "AR",
                "description" => "Analysis Report",
                "description_tr" => "Analiz Raporu",
            ],
            [
                "value" => "MN",
                "description" => "User Manual",
                "description_tr" => "Kullanıcı Kılavuzu",
            ],
            [
                "value" => "ME",
                "description" => "Memo",
                "description_tr" => "Memo",
            ],
            [
                "value" => "PR",
                "description" => "Presentation",
                "description_tr" => "Temel",
            ],
        ],
    ];

    // This is the default structure for a new MODEL, used when creating a new one
    public $document = [
        "doc_type" => null,
        "description" => null,
        "remarks" => null,
    ];

    /**
     * Display a listing of questions.
     */
    public function index(Request $request): Response
    {
        return Inertia::render("Modules/PDM/Pages/Document/Index", [
            // 'filters' sends the search term back to Svelte so the input stays filled
            "per_page" => config("pagination.per_page"),
            "filters" => $request->only(["search"]),
            "supportFixedData" => $this->supportFixedData,
            "documents" => Document::query()
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
        return Inertia::render("Modules/PDM/Pages/Document/Form", [
            "document" => $this->document,
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
        $props["document_no"] = $this->getDocumentNo();

        $doc = Document::create($props);

        $this->uploadFiles($request, $doc);

        return redirect()
            ->route("document.show", $doc->id)
            ->with("success", "Document created successfully.");
    }

    /**
     * Display the specified question.
     */
    public function show(int $idDoc): Response
    {
        $doc = Document::findOrFail($idDoc);

        return Inertia::render("Modules/PDM/Pages/Document/Show", [
            "document" => $doc,
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit(int $idDoc): Response
    {
        $doc = Document::findOrFail($idDoc)->toArray();

        return Inertia::render("Modules/PDM/Pages/Document/Form", [
            "document" => $doc,
            "isEdit" => true,
            "supportFixedData" => $this->supportFixedData,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, int $idDoc): RedirectResponse
    {
        $doc = Document::findOrFail($idDoc);

        $theData = $this->readInput($request);

        $this->uploadFiles($request, $doc);

        $doc->update($theData);

        return redirect()
            ->route("document.show", $doc->id)
            ->with("success", "Document updated successfully.");
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy(int $idDoc): RedirectResponse
    {
        $doc = Document::findOrFail($idDoc);
        $doc->delete();

        return redirect()
            ->route("document.index")
            ->with("success", "Document deleted successfully.");
    }

    public function readInput(Request $request): array
    {
        $values = [];

        $validated = $request->validate([
            "doc_type" => "required|string|min:1|max:64",
            "description" => "required|string|max:256",
            "remarks" => "nullable|string|max:500",
        ]);

        $values["doc_type"] = $validated["doc_type"];
        $values["description"] = $validated["description"];
        $values["remarks"] = $validated["remarks"];

        return $values;
    }

    public function getDocumentNo(): int
    {
        $parameter = "document_no";
        $initial_no = config("app.counters.document_no");
        $counter = Counter::where("counter_type", $parameter)->first();

        if ($counter == null) {
            Counter::create([
                "counter_type" => $parameter,
                "counter_value" => $initial_no,
            ]);

            return $initial_no;
        }

        $new_no = $counter->counter_value + 1;
        $counter->update(["counter_value" => $new_no]); // Update Counter
        return $new_no;
    }

    public function uploadFiles(Request $request, Document $doc): bool
    {
        // For file upload params
        // Request, Model, Input Element Name, Preset Key (For File Types), Collection (Spatie), Max Size (eg 2048)
        UploadService::uploadMultiple(
            $request,
            $doc,
            "docFiles",
            "documents",
            "attachments",
            "20480",
        );

        return true;
    }
}
