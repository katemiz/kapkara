<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Question;

class QuestionController extends Controller
{
    






    public function store(Request $request)
    {
        // 1. Validate the incoming data
        $validated = $request->validate([
            'myInput' => 'required|string|max:255',
            'myEditor' => 'required|string', // This will contain the HTML string
        ]);

        // 2. Insert into the database
        $question = Question::create([
            'text' => $validated['myEditor'],
        ]);

        //return redirect('/qview/' . $question->id);

        //return view('/qview', compact('question'));


        // 3. Redirect back with a success message
        return redirect()->back()->with('message', 'Question created successfully!');
    }

    public function index()
    {
        $questions = Question::all();
        //return view('questions.index', compact('questions'));
    }

    public function view ($idQuestion)
    {
        $question = Question::findOrFail($idQuestion);
        return view('/qview', compact('question'));
    }


    public function prepareProps($question)
    {
        return view('questions.show', compact('question'));
    }










}
