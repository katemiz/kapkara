<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUserstamps;
use App\Models\Answer;


use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

use Illuminate\Database\Eloquent\Factories\HasFactory; // 1. For adding factory support


class Question extends Model implements HasMedia {

    use HasFactory;    // 2. For using factory support

    use HasUserstamps;
    use InteractsWithMedia;


    protected $guarded = [];



    // 1. Eager load the media relationship automatically
    protected $with = ['media'];

    // 2. Automatically include the 'files' attribute in JSON/Inertia responses
    protected $appends = ['files'];

    // 3. Define the accessor for the 'files' attribute
    public function getFilesAttribute()
    {
        return $this->getMedia("*")->map(fn($media) => [
            'id' => $media->id,
            'name' => $media->file_name,
            'url' => $media->getUrl(),
            'size' => $media->human_readable_size,
            'mime' => $media->mime_type,
        ]);
    }














    public function answers() {
        return $this->belongsToMany(Answer::class)
                    ->withPivot('is_correct')
                    ->withTimestamps();
    }


    // Userstamp relationships
    public function creator() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function editor() {
        return $this->belongsTo(User::class, 'updated_by');
    }



}



