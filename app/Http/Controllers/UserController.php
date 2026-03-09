<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;


use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


use App\Mail\WelcomeNewUser;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserController extends Controller
{




    public $supportFixedData = [
        'userTypes' => [
            [ "value" => "admin","label" => "Admin"],
            [ "value" => "editor","label" => "Editor"],
            [ "value" => "viewer","label" => "Viewer"] 
        ],

        "userIsActive" => [

            [ "value" => 0,"label" => "Inactive"],
            [ "value" => 1,"label" => "Active"]
        ]  

    ];


    // public $user = [
    //     "name" => null,
    //     "lastname" => null,
    //     "email" => null,
    //     "password" => null,
    //     "userType" => null,
    //     "userIsActive" => 1
    // ];

    /**
     * Display a listing of questions.
     */
    public function index(Request $request)
    {



        return Inertia::render('Admin/User/Index', [
                // 'filters' sends the search term back to Svelte so the input stays filled
                'per_page' => config('pagination.per_page'),
                'filters' => $request->only(['search']),
                'users' => User::query()
                    ->when($request->input('search'), function ($query, $search) {
                        $query->where('email', 'like', "%{$search}%")
                            ->orWhere('name', 'like', "%{$search}%")
                            ->orWhere('lastname', 'like', "%{$search}%");
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
        return Inertia::render('Admin/User/Form', [
            // 'user' => $this->user,
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

        $passwd = $this->generateRandomPassword();

        $theData["password"] = Hash::make($passwd);

        $user = User::create($theData);

        $this->spatieMultiple($request,$user);



        // Send an email to the user with their $passwd here
        if (Mail::to($user->email)->send(new WelcomeNewUser($user, $passwd))) {
            // Email sent successfully
            dd("Welcome email sent to {$user->email}");
        }

        return redirect()->route('admin.user.show', $user->id)
            ->with('success', 'User created successfully.');
    }

    /**
     * Display the specified question.
     */
    public function show($idMaterial)
    {
        $user = User::findOrFail($idMaterial);
        
        return Inertia::render('Admin/User/Show', [
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified question.
     */
    public function edit($idMaterial)
    {
        $user = User::findOrFail($idMaterial)->toArray();

        return Inertia::render('Admin/User/Form', [
            'user' => $user,
            'isEdit' => true,
            'supportFixedData' =>$this->supportFixedData,
        ]);
    }

    /**
     * Update the specified material in storage.
     */
    public function update(Request $request, $idMaterial)
    {
        $user = User::findOrFail($idMaterial);

        $theData = $this->readInput($request);  

        $this->spatieMultiple($request,$user);

        $user->update($theData);

        return redirect()->route('user.show', $user->id)
            ->with('success', 'User updated successfully.');
    }

    /**
     * Remove the specified material from storage.
     */
    public function destroy($idMaterial)
    {
        $user = User::findOrFail($idMaterial);
        $user->delete();

        return redirect()->route('user.index')
            ->with('success', 'User deleted successfully.');
    }


















    public function readInput($request) 
    {

        // This will stop execution and show all data sent from the form
        //dd($request->all());


        $validated = $request->validate([
            'userName' => 'required|string|max:64',
            'userLastname' => 'required|string|max:64',
            'userEmail' => 'required|email|max:128',
            'userIsActive' => 'required|boolean',
        ]);



        $values["name"] = $validated["userName"];
        $values["lastname"] = $validated["userLastname"];
        $values["email"] = $validated["userEmail"];
        $values["is_active"] = $validated["userIsActive"];

        $values["notes"] = $request->input("userNotes"); 
        //dd($values);

        return $values;
    }


    public function generateRandomPassword($length = 8) {


        return Str::password($length);


/* 
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=';
        $charactersLength = strlen($characters);
        $randomPassword = '';
        for ($i = 0; $i < $length; $i++) {
            $randomPassword .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomPassword;
 */
        
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