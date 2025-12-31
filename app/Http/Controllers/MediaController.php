<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function uploadImg(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048', // 2MB max
        ]);

        $file = $request->file('image');
        
        // Store in storage/app/public/images
        $path = $file->store('imagesY', 'editor');   // editor is disk name, images is folder name under disk
        
        // Get full URL
        //$url = Storage::disk('public')->url($path);

        $url = url('storage/' . $path);


        //$url = env('APP_URL').'/'. $path;

        //dd([$path,$url  ] );


        // Debug: Log the values
        \Log::info('Path: ' . $path);
        \Log::info('URL: ' . $url);
        
        // return response()->json([
        //     'success' => true,
        //     'url' => $url,
        //     'path' => $path  // For debugging
        // ]);

        return response()->json([
            'success' => true,
            'url' => $url,

            'other' => config('app.media')
        ], 200, [
            'Content-Type' => 'application/json'
        ]);
    }
}


    
