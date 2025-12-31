<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{


    public $dpOptions = [

        [ "value" => "1","label" => "Option1"],
        [ "value" => "2","label" => "Option2"],
        [ "value" => "3","label" => "Option3"],
        [ "value" => "4","label" => "Option4"] 
    ];



    public $radioOptions = [

        [ "value" => 1,"label" => "Radio Option 1"],
        [ "value" => 2,"label" => "Radio Option 2"],
        [ "value" => 3,"label" => "Radio Option 3"],
        [ "value" => 4,"label" => "Radio Option 4"] 
    ];

    public $checkboxOptions =  [       
        [ "value" => "1","label" => "Checkbox Option 1"],
        [ "value" => "2","label" => "Checkbox Option 2"],
        [ "value" => "3","label" => "Checkbox Option 3"],
        [ "value" => "4","label" => "Checkbox Option 4"] 
    ];

    public $veri = [
        // Level 1 options
        'level1' => [
            ['value' => 'electronics', 'label' => 'Electronics'],
            ['value' => 'clothing', 'label' => 'Clothing'],
            ['value' => 'books', 'label' => 'Books']
        ],
        
        // Level 2 options by parent
        'level2' => [
            'electronics' => [
                ['value' => 'phones', 'label' => 'Phones'],
                ['value' => 'laptops', 'label' => 'Laptops'],
                ['value' => 'accessories', 'label' => 'Accessories']
            ],
            'clothing' => [
                ['value' => 'mens', 'label' => "Men's Clothing"],
                ['value' => 'womens', 'label' => "Women's Clothing"],
                ['value' => 'kids', 'label' => "Kids' Clothing"]
            ],
            'books' => [
                ['value' => 'fiction', 'label' => 'Fiction'],
                ['value' => 'nonfiction', 'label' => 'Non-Fiction'],
                ['value' => 'textbooks', 'label' => 'Textbooks']
            ]
        ],
        
        // Level 3 options by parent
        'level3' => [
            'phones' => [
                ['value' => 'iphone', 'label' => 'iPhone'],
                ['value' => 'samsung', 'label' => 'Samsung'],
                ['value' => 'google', 'label' => 'Google Pixel']
            ],
            'laptops' => [
                ['value' => 'macbook', 'label' => 'MacBook'],
                ['value' => 'dell', 'label' => 'Dell'],
                ['value' => 'hp', 'label' => 'HP']
            ],
            'accessories' => [
                ['value' => 'chargers', 'label' => 'Chargers'],
                ['value' => 'cases', 'label' => 'Cases'],
                ['value' => 'headphones', 'label' => 'Headphones']
            ],
            'mens' => [
                ['value' => 'shirts', 'label' => 'Shirts'],
                ['value' => 'pants', 'label' => 'Pants'],
                ['value' => 'shoes', 'label' => 'Shoes']
            ],
            'womens' => [
                ['value' => 'dresses', 'label' => 'Dresses'],
                ['value' => 'tops', 'label' => 'Tops'],
                ['value' => 'bottoms', 'label' => 'Bottoms']
            ],
            'kids' => [
                ['value' => 'toddler', 'label' => 'Toddler'],
                ['value' => 'children', 'label' => 'Children'],
                ['value' => 'teen', 'label' => 'Teen']
            ],
            'fiction' => [
                ['value' => 'mystery', 'label' => 'Mystery'],
                ['value' => 'scifi', 'label' => 'Science Fiction'],
                ['value' => 'romance', 'label' => 'Romance']
            ],
            'nonfiction' => [
                ['value' => 'biography', 'label' => 'Biography'],
                ['value' => 'history', 'label' => 'History'],
                ['value' => 'science', 'label' => 'Science']
            ],
            'textbooks' => [
                ['value' => 'math', 'label' => 'Mathematics'],
                ['value' => 'english', 'label' => 'English'],
                ['value' => 'science-text', 'label' => 'Science']
            ]
        ]
    ];



    public $modelData = [];

    public $itemData;














    /**
     * Display a listing of questions.
     */
    public function index()
    {
        $questions = Question::paginate(15);

        //$questions = Question::all();


        // dd($questions );
        
        return Inertia::render('Question/Index', [
            'questions' => $questions,
        ]);
    }

    /**
     * Show the form for creating a new question.
     */
    public function create()
    {
        $this->prepareProps(); 

        return Inertia::render('Question/Form', [
            'question' => null, // or new Question()
            'isEdit' => false,
            'fixedData' =>$this->modelData  
        ]);
    }

    /**
     * Store a newly created question in storage.
     */
    public function store(Request $request)
    {

        //dd('here');

        //dd($request->all() );


        // $validated = $request->validate([
        //     'myEditorText' => 'required|max:255',
        //     'myInput' => 'required',
        //         'myCheckboxMultiple' => 'nullable|array',

        // ]);


        // Add unvalidated parameters
        // $validated['myInput'] = $request->input('myInput');
        // $validated['mySelect'] = $request->input('mySelect');
        // $validated['myRadio'] = $request->input('myRadio');
        // $validated['myCheckboxSingle'] = $request->input('myCheckboxSingle');
        // $validated['myCheckboxMultiple'] = json_encode($request->input('myCheckboxMultiple'));
        // $validated['myDate'] = $request->input('myDate');
        // $validated['myDateTime'] = $request->input('myDateTime');
        // $validated['myStepLevel1'] = $request->input('myStepLevel1');
        // $validated['myStepLevel2'] = $request->input('myStepLevel2');
        // $validated['myStepLevel3'] = $request->input('myStepLevel3');
        // $validated['myEditorText'] = $request->input('myEditorText');

        $theData = $this->readInput($request);  


        //dd($validated );

        $question = Question::create($theData);

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
            'question' => $question,
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit($idQuestion)
    {
        $question = Question::findOrFail($idQuestion);

        $question["myCheckboxMultiple"] =$this->convertArrayParamsToString($question["myCheckboxMultiple"]);

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

        // $validated = $request->validate([
        //     // 'title' => 'required|max:255',
        //     'text' => 'required',
        // ]);

                $theData = $this->readInput($request);  


        //dd($validated );

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

        $this->modelData["dpOptions"] =$this->dpOptions; 
        $this->modelData["radioOptions"] =$this->radioOptions;   
        $this->modelData["cascadedData"] =$this->veri;   
        $this->modelData["checkboxOptions"] = $this->checkboxOptions;   
    } 




    public function readInput ($request) {



        $validated['myInput'] = $request->input('myInput');
        $validated['mySelect'] = $request->input('mySelect');
        $validated['myRadio'] = $request->input('myRadio');
        $validated['myCheckboxSingle'] = $request->input('myCheckboxSingle');
        $validated['myCheckboxMultiple'] = json_encode($request->input('myCheckboxMultiple'));
        $validated['myDate'] = $request->input('myDate');
        $validated['myDateTime'] = $request->input('myDateTime');
        $validated['myStepLevel1'] = $request->input('myStepLevel1');
        $validated['myStepLevel2'] = $request->input('myStepLevel2');
        $validated['myStepLevel3'] = $request->input('myStepLevel3');
        $validated['myEditorText'] = $request->input('myEditorText');


        return $validated;





    } 





    public function convertArrayParamsToString ($arr) {

        if ( !is_array($arr) ) {

            // Multiple CheckBox Selection is stored in database like [3,4] for json formatted rows
            // values to be converted to string

            $arr =  json_decode($arr);
        } 

        $stringArr = array_combine(
            array_map('strval', array_keys($arr)),  // Convert keys
            array_map('strval', array_values($arr)) // Convert values
        );

        return $stringArr;
    } 


}