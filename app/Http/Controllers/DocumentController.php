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
    // This is the default structure for a new MODEL, used when creating a new one
    public $document = [
        "doc_type" => null,
        "description" => null,
        "remarks" => null,
    ];

    public $permissions = [
        'is_editable' => false,
        'is_freezable' => false,
        'is_releaseable' => false,
        'is_reviseable' => false,
        'is_deletable' => false,
    ];

    //public $show_latest_only = true;

    /**
     * Display a listing of questions.
     */
    public function index(Request $request): Response
    {



        // 1. Capture and cleanly sanitize the boolean flag
        $show_latest_only = $request->has('show_latest_only') 
            ? filter_var($request->input('show_latest_only'), FILTER_VALIDATE_BOOLEAN) 
            : true;

        $search = $request->input("search");



        return Inertia::render("Modules/PDM/Pages/Document/Index", [

            "per_page" => config("pagination.per_page"),
            
            // 2. Pass BOTH filters back to Svelte to preserve input states
            "filters" => [
                "search" => $search,
                "show_latest_only" => $show_latest_only
            ],

            "documents" => Document::query()
                ->when($request->input("search"), function ($query, $search) {
                    $query
                        ->where("description", "like", "%{$search}%")
                        ->orWhere("remarks", "like", "%{$search}%")
                        ->orWhere("document_no", "like", "%{$search}%");
                })
                ->when($show_latest_only, function ($query) {
                    $query->where("is_latest", 1);
                })
                ->latest()
                ->paginate(config("pagination.per_page"))
                ->withQueryString(), // VERY IMPORTANT: keeps search param during pagination
        ]);
    }


    public function checkPermissions($doc) 
    {
        // Derive the permissions explicitly based on status
        $this->permissions = match ($doc->status) {
            'DRAFT' => [
                'is_editable'    => true,
                'is_freezable'   => true,
                'is_releaseable' => true,
                'is_reviseable'  => false, // You don't revise a draft, you just edit it
                'is_deletable'   => true,
            ],
            'FROZEN' => [
                'is_editable'    => false,
                'is_freezable'   => false,
                'is_releaseable' => true,  // Can a frozen doc proceed to Released? Usually yes.
                'is_reviseable'  => true,  // Can be revised to spawn a new draft
                'is_deletable'   => false,
            ],
            'RELEASED' => [
                'is_editable'    => false,
                'is_freezable'   => false,
                'is_releaseable' => false,
                'is_reviseable'  => true,  // Must create a new revision to change
                'is_deletable'   => false,
            ],
            default => [
                'is_editable'    => false,
                'is_freezable'   => false,
                'is_releaseable' => false,
                'is_reviseable'  => false,
                'is_deletable'   => false,
            ],
        };

        return true;
    }

    /**
     * Show the form for creating a new question.
     */
    public function create(): Response
    {
        return Inertia::render("Modules/PDM/Pages/Document/Form", [
            "document" => $this->document,
            "isEdit" => false,
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
        $this->checkPermissions($doc);

        $revisions = Document::where('document_no', $doc->document_no)
            ->select('id', 'revision')
            ->orderBy('revision')
            ->get();

        return Inertia::render("Modules/PDM/Pages/Document/Show", [
            "document" => $doc,
            "permissions" => $this->permissions,
            "revisions" => $revisions
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
        $this->checkPermissions($doc);
        
        if (!$this->permissions['is_deletable']) {
            return redirect()
                ->route("document.index")
                ->with("error", "Document cannot be deleted in its current state.");
        }
        
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

    public function freeze(Document $document)
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

    public function release(Document $document)
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






    public function revise(Document $document)
    {
        // 1. Enforce business rules using your state check logic
        $this->checkPermissions($document);
        if (!$this->permissions['is_reviseable']) {
            throw new Exception("This document cannot be revised in its current state.");
        }


        // 2. Wrap operations in a transaction to guarantee data integrity
        // return DB::transaction(function () use ($document) {
            
            // Clone the Eloquent model attributes (excluding the primary key)
            $newRevision = $document->replicate();

            // Increment the revision string (e.g., 'A' -> 'B', 'B' -> 'C')
            // This assumes you have a 'revision' column defaulting to 'A'
            $newRevision->revision = ++$document->revision; 

            // Reset state flags for the brand-new workspace copy
            $newRevision->status = 'DRAFT';
            
            // Explicitly clear timestamps/IDs so database assigns fresh ones
            $newRevision->created_at = now();
            $newRevision->updated_at = now();

            // Save the new draft document to the database
            $newRevision->save();

            // 3. Optional: Re-attach file references if required
            // If your files use a many-to-many relationship, copy them over:
/*             if ($document->relationLoaded('files') || $document->files()->exists()) {
                foreach ($document->files as $file) {
                    // Attach the same file entries to the new revision record
                    $newRevision->files()->attach($file->id);
                }
            }
 */

            return redirect('/pdm/document/' . $newRevision->id);
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
