<?php

namespace App\Models;

use App\Traits\HasUserstamps;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

use Illuminate\Database\Eloquent\Model;

class ProductNote extends Model implements HasMedia{
    protected $guarded = [];

    use HasUserstamps;
    use InteractsWithMedia;




    // 1. Eager load the media relationship automatically
    protected $with = ['media'];

    // 2. Automatically include the 'files' attribute in JSON/Inertia responses
    protected $appends = ['files', 'created_user_mail', 'updated_user_mail'];

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

    public function getCreatedUserMailAttribute()
    {
        return User::find($this->created_by)?->email;
    }

    public function getUpdatedUserMailAttribute()
    {
        return User::find($this->updated_by)?->email;
    }






}
