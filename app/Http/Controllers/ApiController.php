<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Process;

class ApiController extends Controller
{
    public function runCode2Cad(Request $request)
    {
        // 1. Grab the raw payload data array sent from Svelte
        $mastData = $request->all(); 
        
        // Convert the array cleanly into a JSON string
        $jsonPayload = json_encode($mastData);

        //$scriptPath = storage_path('app/python/mast.py');
        $scriptPath = resource_path('js/API/python/mast.py');
        $pythonPath = 'C:\\Users\\ThinkPad\\AppData\\Local\\Python\\pythoncore-3.14-64\\python.exe';

        // 2. Run the process, passing the string through input() instead of arguments
        $processResult = Process::input($jsonPayload)->run([
            $pythonPath, 
            $scriptPath
        ]);

        if ($processResult->failed()) {
            return response()->json([
                'success' => false,
                'error' => $processResult->errorOutput()
            ], 500);
        }

        return response()->json([
            'success' => true,
            'result' => trim($processResult->output())
        ]);
    }
}