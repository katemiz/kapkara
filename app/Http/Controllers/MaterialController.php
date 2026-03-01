<?php

namespace App\Http\Controllers;

use App\Models\Material;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaterialController extends Controller
{

    // This will hold any support data needed for the form (e.g., dropdown options)

    public $supportFixedData = [

        "materialCategories" => [

            [ "value" => "1","label" => "Aluminium"],
            [ "value" => "2","label" => "Steel"],
            [ "value" => "3","label" => "Copper"],
            [ "value" => "4","label" => "Plastic"] 
        ],

        "materialForms" => [

            [ "value" => "1","label" => "Sheet/Plate"],
            [ "value" => "2","label" => "Round/Bar"],
            [ "value" => "3","label" => "Tube/Profile"],
            [ "value" => "4","label" => "Casting"]
        ],

        "materialIsActive" => [

            [ "value" => 0,"label" => "Inactive"],
            [ "value" => 1,"label" => "Active"]
        ]   
    ];


    // This is the default structure for a new MODEL, used when creating a new one

    public $material = [
        "materialCategory" => null,
        "materialForm" => null,
        "materialIsActive" => 1
    ];














    /**
     * Display a listing of questions.
     */
    public function index(Request $request)
    {



        return Inertia::render('Material/Index', [
                // 'filters' sends the search term back to Svelte so the input stays filled
                'per_page' => config('pagination.per_page'),
                'filters' => $request->only(['search']),
                'materials' => Material::query()
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
        return Inertia::render('Material/Form', [
            'material' => $this->material,
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

        $material = Material::create($theData);

        $this->spatieMultiple($request,$material);

        return redirect()->route('material.show', $material->id)
            ->with('success', 'Material created successfully.');
    }

    /**
     * Display the specified question.
     */
    public function show($idMaterial)
    {
        $material = Material::findOrFail($idMaterial);
        
        return Inertia::render('Material/Show', [
            'material' => $material
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit($idMaterial)
    {
        $material = Material::findOrFail($idMaterial)->toArray();

        //dd($material);

        //$material["myCheckboxMultiple"] = $this->convertJsonToArray($material["myCheckboxMultiple"]);


        return Inertia::render('Material/Form', [
            'material' => $material,
            'isEdit' => true,
            'supportFixedData' =>$this->supportFixedData  
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, $idMaterial)
    {
        $material = Material::findOrFail($idMaterial);

        $theData = $this->readInput($request);  

        $this->spatieMultiple($request,$material);

        $material->update($theData);

        return redirect()->route('material.show', $material->id)
            ->with('success', 'Material updated successfully.');
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy($idMaterial)
    {
        $material = Material::findOrFail($idMaterial);
        $material->delete();

        return redirect()->route('material.index')
            ->with('success', 'Material deleted successfully.');
    }


















    public function readInput($request) 
    {

        // This will stop execution and show all data sent from the form
        //dd($request->all());


        $validated = $request->validate([
            'materialCategory' => 'required|string|min:1|max:64',
            'materialForm' => 'required|string',
            'materialName' => 'required|string|max:64',
            'materialSpecification' => 'required|string|max:256',
            'materialNotes' => 'nullable|string|max:500',
            'materialIsActive' => 'required|boolean',
        ]);



        $values["category"] = $validated["materialCategory"];
        $values["form"] = $validated["materialForm"];
        $values["description"] = $validated["materialName"];
        $values["specification"] = $validated["materialSpecification"];
        $values["remarks"] = $validated["materialNotes"];
        $values["is_active"] = $validated["materialIsActive"];

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