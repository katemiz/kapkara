<?php

namespace App\Http\Controllers;

use App\Models\Counter;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class ItemController extends Controller
{
    public $permissions = [
        'is_editable' => false,
        'is_freezable' => false,
        'is_releaseable' => false,
        'is_reviseable' => false,
        'is_deletable' => false,
    ];

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

        return Inertia::render("Modules/PDM/Pages/Item/Index", [

            "per_page" => config("pagination.per_page"),
            
            // 2. Pass BOTH filters back to Svelte to preserve input states
            "filters" => [
                "search" => $search,
                "show_latest_only" => $show_latest_only
            ],

            "items" => Item::query()
                ->when($request->input("search"), function ($query, $search) {
                    // Wrap all the OR clauses together inside a single, isolated WHERE group
                    $query->where(function ($nestedQuery) use ($search) {
                        $nestedQuery->where("title", "like", "%{$search}%")
                                    ->orWhere("remarks", "like", "%{$search}%")
                                    ->orWhere("item_no", "like", "%{$search}%");
                    });
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
        return Inertia::render("Modules/PDM/Pages/Item/Form");
    }

    /**
     * Store a newly created question in storage.
     */

    public function store(Request $request): RedirectResponse
    {
        $props = $this->readInput($request);
        $props["number"] = $this->getItemNo();

        $item = Item::create($props);

        $this->uploadFiles($request, $item);

        return redirect()
            ->route("item.show", $item->id)
            ->with("success", "Document created successfully.");
    }

    /**
     * Display the specified question.
     */
    public function show(int $idItem): Response
    {
        $item = Item::findOrFail($idItem);
        $this->checkPermissions($item);

        $revisions = Item::where('number', $item->number)
            ->select('id', 'revision')
            ->orderBy('revision')
            ->get();

        return Inertia::render("Modules/PDM/Pages/Item/Show", [
            "item" => $item,
            "permissions" => $this->permissions,
            "revisions" => $revisions
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit(int $idItem): Response
    {
        $item = Item::findOrFail($idItem)->toArray();

        return Inertia::render("Modules/PDM/Pages/Item/Form", [
            "item" => $item,
            "isEdit" => true,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, int $idItem): RedirectResponse
    {
        $item = Item::findOrFail($idItem);

        $theData = $this->readInput($request);

        $this->uploadFiles($request, $item);

        $item->update($theData);

        return redirect()
            ->route("item.show", $item->id)
            ->with("success", "Item updated successfully.");
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy(int $idItem): RedirectResponse
    {
        $item = Item::findOrFail($idItem);
        $this->checkPermissions($item);
        
        if (!$this->permissions['is_deletable']) {
            return redirect()
                ->route("item.index")
                ->with("error", "Item cannot be deleted in its current state.");
        }
        
        $item->delete();

        return redirect()
            ->route("item.index")
            ->with("success", "Item deleted successfully.");
    }


    public function readInput(Request $request): array
    {
        $values = [];

        $validated = $request->validate([
            "item_type" => "required|string|min:1|max:64",
            "title" => "required|string|max:256",
            "remarks" => "nullable|string|max:10000",
        ]);

        $values["item_type"] = $validated["item_type"];
        $values["title"] = $validated["title"];
        $values["remarks"] = $validated["remarks"];

        return $values;
    }



    public function freeze(Item $item)
    {
        // 1. Optional: Security/Authorization check 
        // $this->authorize('update', $item);

        // 2. Update the status column to FROZEN
        $item->update([
            'status' => 'FROZEN'
        ]);

        // 3. Redirect back to preserve the Inertia state gracefully
        return redirect()->back()->with('success', 'Item frozen successfully.');
    }



    public function release(Item $item)
    {
        // 1. Optional: Security/Authorization check 
        // $this->authorize('update', $item);

        // 2. Update the status column to RELEASED
        $item->update([
            'status' => 'RELEASED'
        ]);

        // TODO
        // send email to notify users

        // 3. Redirect back to preserve the Inertia state gracefully
        return redirect()->back()->with('success', 'Item released successfully.');
    }






    public function revise(Item $item)
    {
        // 1. Enforce business rules using your state check logic
        $this->checkPermissions($item);
        if (!$this->permissions['is_reviseable']) {
            throw new Exception("This item cannot be revised in its current state.");
        }

        $newRev = $item->revision + 1;

        // 2. Wrap operations in a transaction to guarantee data integrity
        // Clone the Eloquent model attributes (excluding the primary key)
        $newRevision = $item->replicate();

        // Increment the revision string (e.g., 'A' -> 'B', 'B' -> 'C')
        // This assumes you have a 'revision' column defaulting to 'A'
        $newRevision->revision = $newRev; 

        // Reset state flags for the brand-new workspace copy
        $newRevision->status = 'DRAFT';
        
        // Explicitly clear timestamps/IDs so database assigns fresh ones
        $newRevision->created_at = now();
        $newRevision->updated_at = now();

        // Save the new draft document to the database
        $newRevision->save();

        // 3. Optional: Re-attach file references if required
        // If your files use a many-to-many relationship, copy them over:

        /*
        if ($document->relationLoaded('files') || $document->files()->exists()) {
            foreach ($document->files as $file) {
                // Attach the same file entries to the new revision record
                $newRevision->files()->attach($file->id);
            }
        }
        */

        // Update previous revision status to 'OBSOLETE'
        $item->update(['is_latest' => false,'status' => 'OBSOLETE']);

        return redirect('/pdm/item/' . $newRevision->id);
    }


    public function getItemNo(): int
    {
        $parameter = "item_no";
        $initial_no = config("app.counters.item_no");
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


    public function searchMakeFrom(Request $request): JsonResponse
    {
        $query = $request->get('search');
        $items = Item::where('number', 'like', '%' . $query . '%')
            ->where('is_latest', true)
            ->get(['id', 'number', 'title']);
        return response()->json($items);
    }



    public function uploadFiles(Request $request, Item $item): bool
    {
        // For file upload params
        // Request, Model, Input Element Name, Preset Key (For File Types), Collection (Spatie), Max Size (eg 2048)
        UploadService::uploadMultiple(
            $request,
            $item,          // Model
            "itemfiles",    // Input name : should match the name attribute in the form
            "allOf",        // Preset name for uploadable files : See UploadService::PRESETS
            "attachments",  // collection_name
            "20480",        // max_size
        );

        return true;
    }
}
