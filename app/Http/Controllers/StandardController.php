<?php

namespace App\Http\Controllers;

use App\Models\Standard;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StandardController extends Controller
{

    // This will hold any support data needed for the form (e.g., dropdown options)

    public $supportFixedData = [

        "organisation" => [
            [ "value" => "ISO", "description" => "International Standardisation Organisation"],
            [ "value" => "ASTM", "description" => "American Society of Testing and Materials"],
            [ "value" => "ANSI", "description" => "American National Standards Institute"],
            [ "value" => "IEC", "description" => "International Electrotechnical Commission"],
            [ "value" => "DIN", "description" => "Deutsches Institut für Normung"],
            [ "value" => "JIS", "description" => "Japanese Industrial Standards"]
        ],

        "is_active" => [

            [ "value" => 0,"label" => "Inactive"],
            [ "value" => 1,"label" => "Active"]
        ]
    ];


    // This is the default structure for a new MODEL, used when creating a new one

    public $standard = [
        "organisation" => null,
        "standard_number" => null,
        "description" => null,
        "designation" => null,
        "remarks" => null,
        "isActive" => 1
    ];














    /**
     * Display a listing of questions.
     */
    public function index(Request $request)
    {
        return Inertia::render('Modules/PDM/Pages/Standard/Index', [
                // 'filters' sends the search term back to Svelte so the input stays filled
                'per_page' => config('pagination.per_page'),
                'filters' => $request->only(['search']),
                'supportFixedData' =>$this->supportFixedData,
                'standards' => Standard::query()
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
        return Inertia::render('Modules/PDM/Pages/Standard/Form', [
            'standard' => $this->standard,
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

        $std = Standard::create($theData);

        $this->spatieMultiple($request,$std);

        return redirect()->route('standard.show', $std->id)
            ->with('success', 'Standard created successfully.');
    }


    /**
     * Display the specified question.
     */
    public function show($idStandard)
    {
        $std = Standard::findOrFail($idStandard);

        return Inertia::render('Modules/PDM/Pages/Standard/Show', [
            'standard' => $std
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit($idStandard)
    {
        $std = Standard::findOrFail($idStandard)->toArray();

        return Inertia::render('Modules/PDM/Pages/Standard/Form', [
            'standard' => $std,
            'isEdit' => true,
            'supportFixedData' =>$this->supportFixedData
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, $idStandard)
    {
        $std = Standard::findOrFail($idStandard);

        $theData = $this->readInput($request);

        $this->spatieMultiple($request,$std);

        $std->update($theData);

        return redirect()->route('standard.show', $std->id)
            ->with('success', 'Standard updated successfully.');
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy($idStandard)
    {
        $std = Standard::findOrFail($idStandard);
        $std->delete();

        return redirect()->route('standard.index')
            ->with('success', 'Standard deleted successfully.');
    }


















    public function readInput($request)
    {
        $validated = $request->validate([
            'organisation' => 'required|string|min:1|max:64',
            'standard_number' => 'required|string|max:64',
            'description' => 'required|string|max:256',
            'remarks' => 'nullable|string|max:500',
            'isActive' => 'required|boolean',
        ]);

        $values["organisation"] = $validated["organisation"];
        $values["standard_number"] = $validated["standard_number"];
        $values["description"] = $validated["description"];
        $values["remarks"] = $validated["remarks"];
        $values["is_active"] = $validated["isActive"];

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
