<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Answer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnswerController extends Controller
{



    public $modelData = [];

    public $itemData;







    public $isCorrect  = [
        ['value' => 0, 'label' => 'Not Correct'],
        ['value' => 1, 'label' => 'Correct'],
    ];






    /**
     * Display a listing of questions.
     */
    public function index(Request $request)
    {




        return Inertia::render('Question/AnswerIndex', [
                // 'filters' sends the search term back to Svelte so the input stays filled
                'per_page' => config('pagination.per_page'),
                'filters' => $request->only(['search']),
                'answers' => Question::query()
                    ->when($request->input('search'), function ($query, $search) {
                        $query->where('myInput', 'like', "%{$search}%")
                            ->orWhere('myEditorText', 'like', "%{$search}%");
                    })
                    ->latest()
                    ->paginate(config('pagination.per_page'))
                    ->withQueryString(), // VERY IMPORTANT: keeps search param during pagination
            ]);
    }

    /**
     * Show the form for creating a new question.
     */
    public function create(Request $request)
    {
        $this->prepareProps(); 

        return Inertia::render('Question/AnswerForm', [
            'question' => Question::findOrFail($request->get('question_id')),
            'answer' => null,
            'isEdit' => false,
            'fixedData' =>$this->modelData  
        ]);
    }

    /**
     * Store a newly created question in storage.
     */
    public function store(Request $request)
    {
        $theData = $this->readInput($request);  

        $question = Question::create($theData);

        $this->spatieMultiple($request,$question);

        return redirect()->route('question.show', $question->id)
            ->with('success', 'Question created successfully.');
    }

    /**
     * Display the specified question.
     */
    public function show($idQuestion)
    {
        $question = Question::findOrFail($idQuestion);
        
        return Inertia::render('Question/Show', [
            'question' => $question
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit($idQuestion)
    {
        $question = Question::findOrFail($idQuestion)->toArray();

        $question["myCheckboxMultiple"] = $this->convertJsonToArray($question["myCheckboxMultiple"]);

        $this->prepareProps(); 

        return Inertia::render('Question/Form', [
            'question' => $question,
            'isEdit' => true,
            'fixedData' =>$this->modelData  
        ]);
    }

    /**
     * Update the specified question in storage.
     */
    public function update(Request $request, $idQuestion)
    {
        $question = Question::findOrFail($idQuestion);

        $theData = $this->readInput($request);  

        $this->spatieMultiple($request,$question);

        $question->update($theData);

        return redirect()->route('question.show', $question->id)
            ->with('success', 'Question updated successfully.');
    }

    /**
     * Remove the specified question from storage.
     */
    public function destroy($idQuestion)
    {
        $question = Question::findOrFail($idQuestion);
        $question->delete();

        return redirect()->route('question.index')
            ->with('success', 'Question deleted successfully.');
    }


    public function prepareProps() {

        $this->modelData =[];  

        // $this->modelData["dpOptions"] =$this->dpOptions; 
        $this->modelData["radioOptions"] =$this->isCorrect;   
        // $this->modelData["cascadedData"] =$this->veri;   
        // $this->modelData["checkboxOptions"] = $this->checkboxOptions;   
    } 















    public function readInput($request) 
    {
        $validated = $request->validate([
            'myInput' => 'required|string|max:255',
            'mySelect' => 'required|string',
            'myRadio' => 'required|integer',
            'myCheckboxSingle' => 'nullable|boolean',
            'myCheckboxMultiple' => 'nullable|array',
            'myDate' => 'nullable|date',
            'myDateTime' => 'nullable|date',
            'myStepLevel1' => 'nullable|string',
            'myStepLevel2' => 'nullable|string',
            'myStepLevel3' => 'nullable|string',
            'myEditorText' => 'required|string|max:10000',
        ]);

        // Only modify myCheckboxMultiple if it exists (since you have $casts in model, this might not be needed)
        if (isset($validated['myCheckboxMultiple'])) {
            $validated['myCheckboxMultiple'] = json_encode($validated['myCheckboxMultiple']);
        }

        return $validated;
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

    public function SILaddFiles($idModel,$files,) {

        $model = Question::find($idModel);

        foreach ($files as $file) {

            $model
            ->addMedia($file)
            ->toMediaCollection();
        } 
    } 






public function spatieMultiple(Request $request, $item)
    {
        // 1. Validation for the array of files
        $request->validate([
            // 'myUpload' should be an array, and each item in the array must be an image file
            'myUpload'   => ['nullable', 'array'],
            // 'myUpload.*' => ['image', 'max:5120'], // Max 5MB per file
            // Add validation for your other fields (myInput, mySelect, etc.)
            'myInput' => ['required', 'string', 'max:255'],
            // ...
        ]);


        $mediaCollectionName = 'gallery_images';
        $uploadedCount = 0;

        // 3. Check and process multiple files
        if ($request->hasFile('myUpload')) {
            
            // The request->file('myUpload') returns an array of UploadedFile objects
            $files = $request->file('myUpload'); 
            
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