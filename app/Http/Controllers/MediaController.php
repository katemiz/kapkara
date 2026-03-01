<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaController extends Controller
{
    public function uploadImg(Request $request)
    {
        /*
        For WYSWYG Editor . Upload IMAGE and return URL to editor.
        Limited to images and max 2MB for security and performance reasons.
        */
        $request->validate([
            'image' => 'required|image|max:2048', // 2MB max
        ]);

        $file = $request->file('image');
        
        // Store in storage/app/public/images
        $path = $file->store('images', 'editor');   // editor is disk name, images is folder name under disk
    
        $url = Storage::disk('editor')->url($path);

        // Debug: Log the values
        \Log::info('Path: ' . $path);
        \Log::info('URL: ' . $url);
        
        return response()->json([
            'success' => true,
            'url' => $url,

            'other' => config('app.media')
        ], 200, [
            'Content-Type' => 'application/json'
        ]);
    }


    /**
     * Delete a media file
     */
    public function destroy(Request $request, $mediaId)
    {
        try {
            $media = Media::findOrFail($mediaId);
            $media->delete();

            // 1. Always use back() or a route redirect for Inertia
            // 2. Use 'with' to pass temporary "flash" messages
            return back()->with('success', 'File deleted successfully');

        } catch (\Exception $e) {
            // If it fails, redirect back with an error flash message
            return back()->with('error', 'Failed to delete file: ' . $e->getMessage());
        }
    }

}


    
