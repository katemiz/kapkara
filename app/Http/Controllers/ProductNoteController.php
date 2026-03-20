<?php

namespace App\Http\Controllers;

use App\Models\ProductNote;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class ProductNoteController extends Controller
{
    public $supportFixedData = [
        "productNoteCategories" => [
            [
                "value" => "1",
                "description_tr" => "Genel Notlar",
                "description_en" => "General Notes",
            ],
            [
                "value" => "2",
                "description_tr" => "Yüzey Koruma",
                "description_en" => "Surface Protection",
            ],
            [
                "value" => "3",
                "description_tr" => "Yüzey Koruma - Boyama",
                "description_en" => "Surface Protection - Painting",
            ],
            [
                "value" => "4",
                "description_tr" => "Mekanik Bağlayıcılar",
                "description_en" => "Mechanical Fastening",
            ],
            [
                "value" => "5",
                "description_tr" => "Yapıştırma",
                "description_en" => "Bonding",
            ],
            [
                "value" => "6",
                "description_tr" => "Isıl İşlem",
                "description_en" => "Heat Treatment",
            ],
        ],

        "productNoteIsActive" => [
            ["value" => 0, "label" => "Inactive"],
            ["value" => 1, "label" => "Active"],
        ],
    ];

    // This is the default structure for a new MODEL, used when creating a new one
    public $product_note = [
        "pnCategory" => null,
        "productNoteIsActive" => 1,
    ];

    /**
     * Display a listing of questions.
     */
    public function index(Request $request): Response
    {
        return Inertia::render("Modules/PDM/Pages/ProductNote/Index", [
            // 'filters' sends the search term back to Svelte so the input stays filled
            "per_page" => config("pagination.per_page"),
            "filters" => $request->only(["search"]),
            "supportFixedData" => $this->supportFixedData,
            "product_notes" => ProductNote::query()
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
        return Inertia::render("Modules/PDM/Pages/ProductNote/Form", [
            "product_note" => $this->product_note,
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
        $pn = ProductNote::create($theData);

        $this->uploadFiles($request, $pn);

        return redirect()
            ->route("product-note.show", $pn->id)
            ->with("success", "Product note created successfully.");
    }

    /**
     * Display the specified question.
     */
    public function show(int $idProductNote): Response
    {
        $pn = ProductNote::findOrFail($idProductNote);

        return Inertia::render("Modules/PDM/Pages/ProductNote/Show", [
            "product_note" => $pn,
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit(int $idProductNote): Response
    {
        $pn = ProductNote::findOrFail($idProductNote)->toArray();

        return Inertia::render("Modules/PDM/Pages/ProductNote/Form", [
            "product_note" => $pn,
            "isEdit" => true,
            "supportFixedData" => $this->supportFixedData,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(
        Request $request,
        int $idProductNote,
    ): RedirectResponse {
        $pn = ProductNote::findOrFail($idProductNote);

        $theData = $this->readInput($request);

        $this->uploadFiles($request, $pn);

        $pn->update($theData);

        return redirect()
            ->route("product-note.show", $pn->id)
            ->with("success", "Product note updated successfully.");
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy(int $idProductNote): RedirectResponse
    {
        $pn = ProductNote::findOrFail($idProductNote);
        $pn->delete();

        return redirect()
            ->route("product-note.index")
            ->with("success", "Product note deleted successfully.");
    }

    public function readInput(Request $request): array
    {
        $values = [];

        $validated = $request->validate([
            "pnCategory" => "required|string|min:1|max:64",
            "description_tr" => "required|string|max:64",
            "description_en" => "required|string|max:256",
            "pnNotes" => "nullable|string|max:500",
            "productNoteIsActive" => "required|boolean",
        ]);

        $values["category"] = $validated["pnCategory"];
        $values["description_tr"] = $validated["description_tr"];
        $values["description_en"] = $validated["description_en"];
        $values["remarks"] = $validated["pnNotes"];
        $values["is_active"] = $validated["productNoteIsActive"];

        return $values;
    }

    public function uploadFiles(
        Request $request,
        ProductNote $productNote,
    ): bool {
        // For file upload params
        // Request, Model, Input Element Name, Preset Key (For File Types), Collection (Spatie), Max Size (eg 2048)
        UploadService::uploadMultiple(
            $request,
            $productNote,
            "pnFiles",
            "documents",
            "attachments",
            "20480",
        );

        return true;
    }
}
