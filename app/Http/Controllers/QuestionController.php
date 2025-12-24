<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
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
        return Inertia::render('Question/Form', [
            'question' => null, // or new Question()
            'isEdit' => false,
        ]);
    }

    /**
     * Store a newly created question in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'text' => 'required|max:255',
        ]);

        $question = Question::create($validated);

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
        
        return Inertia::render('Question/Form', [
            'question' => $question,
            'isEdit' => true,
        ]);
    }

    /**
     * Update the specified question in storage.
     */
    public function update(Request $request, $idQuestion)
    {
        $question = Question::findOrFail($idQuestion);

        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        $question->update($validated);

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
}