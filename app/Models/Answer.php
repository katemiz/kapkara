<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model {

    protected $guarded = [];

    public function questions() {
        return $this->belongsToMany(Question::class)
                    ->withPivot('is_correct')
                    ->withTimestamps();
    }
}