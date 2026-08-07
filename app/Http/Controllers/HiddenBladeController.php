<?php

namespace App\Http\Controllers;

use App\Models\HiddenBlade;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class HiddenBladeController extends Controller
{

    /**
     * Display a listing of questions.
     */
    public function index(Request $request): Response
    {
        $search = $request->input("search");

        return Inertia::render("Modules/Base/Pages/HiddenBlade/Home", [

            "per_page" => config("pagination.per_page"),

            // 2. Pass BOTH filters back to Svelte to preserve input states
            "filters" => [
                "search" => $search,
            ],

            "hblades" => HiddenBlade::query()
                ->when($request->input("search"), function ($query, $search) {
                    // Wrap all the OR clauses together inside a single, isolated WHERE group
                    $query->where(function ($nestedQuery) use ($search) {
                        $nestedQuery->where("name", "like", "%{$search}%")
                            ->orWhere("surname", "like", "%{$search}%")
                            ->orWhere("email", "like", "%{$search}%");
                    });
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
        return Inertia::render("Modules/Base/Pages/HiddenBlade/Form", [
            "hblade" => null,
            "isEdit" => false,
        ]);
    }

    /**
     * Store a newly created question in storage.
     */

    public function store(Request $request): RedirectResponse
    {
        $props = $this->readInput($request);

        $hb = HiddenBlade::create($props);

        $this->uploadFiles($request, $hb);

        return redirect()
            ->route("document.show", $hb->id)
            ->with("success", "Document created successfully.");
    }

    /**
     * Display the specified question.
     */
    public function show(int $idHB): Response
    {
        $hb = HiddenBlade::findOrFail($idHB);

        return Inertia::render("Modules/Base/Pages/HiddenBlade/Show", [
            "hblade" => $hb,
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit(int $idHB): Response
    {
        $hb = HiddenBlade::findOrFail($idHB)->toArray();

        return Inertia::render("Modules/Base/Pages/HiddenBlade/Form", [
            "hblade" => $hb,
            "isEdit" => true,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, int $idHB): RedirectResponse
    {
        $hb = HiddenBlade::findOrFail($idHB);

        $theData = $this->readInput($request);

        $this->uploadFiles($request, $hb);

        $hb->update($theData);

        return redirect()
            ->route("document.show", $hb->id)
            ->with("success", "Document updated successfully.");
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy(int $idHB): RedirectResponse
    {
        $hb = HiddenBlade::findOrFail($idHB);

        $hb->delete();

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
            "remarks" => "nullable|string|max:10000",
        ]);

        $values["doc_type"] = $validated["doc_type"];
        $values["description"] = $validated["description"];
        $values["remarks"] = $validated["remarks"];

        return $values;
    }



    public function freeze(HiddenBlade $document)
    {
        // 1. Optional: Security/Authorization check 
        // $this->authorize('update', $document);

        // 2. Update the status column to FROZEN
        $document->update([
            'status' => 'FROZEN'
        ]);

        // 3. Redirect back to preserve the Inertia state gracefully
        return redirect()->back()->with('success', 'Document frozen successfully.');
    }



    public function release(HiddenBlade $document)
    {
        // 1. Optional: Security/Authorization check 
        // $this->authorize('update', $document);

        // 2. Update the status column to RELEASED
        $document->update([
            'status' => 'RELEASED'
        ]);

        // TODO
        // send email to notify users

        // 3. Redirect back to preserve the Inertia state gracefully
        return redirect()->back()->with('success', 'Document released successfully.');
    }


    public function uploadFiles(Request $request, HiddenBlade $doc): bool
    {
        // For file upload params
        // Request, Model, Input Element Name, Preset Key (For File Types), Collection (Spatie), Max Size (eg 2048)
        UploadService::uploadMultiple(
            $request,
            $doc,
            "docFiles",     // Input name : should match the name attribute in the form
            "documents",    // Preset name for uploadable files : See UploadService::PRESETS
            "attachments",  // collection_name
            "20480",        // max_size
        );

        return true;
    }
}