<?php

namespace App\Http\Controllers;

use App\Models\ProductNote;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductNoteController extends Controller
{

    // This will hold any support data needed for the form (e.g., dropdown options)

    public $supportFixedData = [

        "productNoteCategories" => [
            [ "value" => "1","description_tr" => "Genel Notlar", "description_en" => "General Notes"],
            [ "value" => "2","description_tr" => "Yüzey Koruma", "description_en" => "Surface Protection"],
            [ "value" => "3","description_tr" => "Yüzey Koruma - Boyama", "description_en" => "Surface Protection - Painting"],
            [ "value" => "4","description_tr" => "Mekanik Bağlayıcılar", "description_en" => "Mechanical Fastening"],
            [ "value" => "5","description_tr" => "Yapıştırma", "description_en" => "Bonding"],
            [ "value" => "6","description_tr" => "Isıl İşlem", "description_en" => "Heat Treatment"]
        ],

        "productNoteIsActive" => [

            [ "value" => 0,"label" => "Inactive"],
            [ "value" => 1,"label" => "Active"]
        ]
    ];


    // This is the default structure for a new MODEL, used when creating a new one

    public $product_note = [
        "pnCategory" => null,
        "productNoteIsActive" => 1
    ];














    /**
     * Display a listing of questions.
     */
    public function index(Request $request)
    {
        return Inertia::render('Modules/PDM/Pages/ProductNote/Index', [
                // 'filters' sends the search term back to Svelte so the input stays filled
                'per_page' => config('pagination.per_page'),
                'filters' => $request->only(['search']),
                'supportFixedData' =>$this->supportFixedData,
                'product_notes' => ProductNote::query()
                    ->when($request->input('search'), function ($query, $search) {
                        $query->where('description', 'like', "%{$search}%")
                            ->orWhere('specification', 'like', "%{$search}%")
                            ->orWhere('remarks', 'like', "%{$search}%");
                    })
                    ->latest()
                    ->paginate(config('pagination.per_page'))
                    ->withQueryString(), // VERY IMPORTANT: keeps search param during pagination
            ]);
    }



    /**
     * Show the form for creating a new question.
     */
    public function create()
    {
        return Inertia::render('Modules/PDM/Pages/ProductNote/Form', [
            'product_note' => $this->product_note,
            'isEdit' => false,
            'supportFixedData' =>$this->supportFixedData,
        ]);
    }



    /**
     * Store a newly created question in storage.
     */
    public function store(Request $request)
    {
        $theData = $this->readInput($request);

        $pn = ProductNote::create($theData);

        $this->spatieMultiple($request,$pn);

        return redirect()->route('product-note.show', $pn->id)
            ->with('success', 'Product note created successfully.');
    }


    /**
     * Display the specified question.
     */
    public function show($idProductNote)
    {
        $pn = ProductNote::findOrFail($idProductNote);

        return Inertia::render('Modules/PDM/Pages/ProductNote/Show', [
            'product_note' => $pn
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit($idProductNote)
    {
        $pn = ProductNote::findOrFail($idProductNote)->toArray();

        return Inertia::render('Modules/PDM/Pages/ProductNote/Form', [
            'product_note' => $pn,
            'isEdit' => true,
            'supportFixedData' =>$this->supportFixedData
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, $idProductNote)
    {
        $pn = ProductNote::findOrFail($idProductNote);

        $theData = $this->readInput($request);

        $this->spatieMultiple($request,$pn);

        $pn->update($theData);

        return redirect()->route('product-note.show', $pn->id)
            ->with('success', 'Product note updated successfully.');
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy($idProductNote)
    {
        $pn = ProductNote::findOrFail($idProductNote);
        $pn->delete();

        return redirect()->route('product-note.index')
            ->with('success', 'Product note deleted successfully.');
    }


















    public function readInput($request)
    {
        $validated = $request->validate([
            'pnCategory' => 'required|string|min:1|max:64',
            'description_tr' => 'required|string|max:64',
            'description_en' => 'required|string|max:256',
            'pnNotes' => 'nullable|string|max:500',
            'productNoteIsActive' => 'required|boolean',
        ]);

        $values["category"] = $validated["pnCategory"];
        $values["description_tr"] = $validated["description_tr"];
        $values["description_en"] = $validated["description_en"];
        $values["remarks"] = $validated["pnNotes"];
        $values["is_active"] = $validated["productNoteIsActive"];

        //dd($values);

        return $values;
    }

















    public function convertJsonToArray($data) {
        // If already an array, return as-is
        if (is_array($data)) {
            return array_map('strval', $data);
        }

        // If it's a JSON string, decode it
        if (is_string($data)) {
            $decoded = json_decode($data, true); // true = return as array

            // Return array of strings, or empty array if null
            return $decoded ? array_map('strval', $decoded) : [];
        }

        // Default to empty array
        return [];
    }








    public function spatieMultiple(Request $request, $item)
    {
        // 1. Validation for the array of files
        $request->validate([
            // 'myUpload' should be an array, and each item in the array must be an image file
            'materialFiles'   => ['nullable', 'array'],
            // 'myUpload.*' => ['image', 'max:5120'], // Max 5MB per file
            // Add validation for your other fields (myInput, mySelect, etc.)
            //'myInput' => ['required', 'string', 'max:255'],
            // ...
        ]);


        $mediaCollectionName = 'attachments'; // This should match the collection name defined in your model
        $uploadedCount = 0;

        // 3. Check and process multiple files
        if ($request->hasFile('materialFiles')) {

            // The request->file('myUpload') returns an array of UploadedFile objects
            $files = $request->file('materialFiles');

            foreach ($files as $file) {
                if ($file->isValid()) {
                    try {
                        // Spatie automatically handles the move, naming, and database entry
                        $item
                            ->addMedia($file)
                            ->toMediaCollection($mediaCollectionName);

                        $uploadedCount++;

                    } catch (\Exception $e) {
                        dd(["Failed to upload file {$file->getClientOriginalName()}: " . $e->getMessage()]);
                        // Handle the error (e.g., skip the file, or return an error response)
                    }
                }
            }
        }

        // 4. Handle files uploaded via the editor (if any)
        // If your editor text contains temporary media IDs, this is where you would re-associate them.
        // For simplicity here, we assume the editor images are handled separately or by ID.

        //dd("Form submitted successfully. Files uploaded: {$uploadedCount}");
        return true;

        // return redirect()->route('item.index')->with('success', "Item saved and {$uploadedCount} files attached.");
    }





















}
