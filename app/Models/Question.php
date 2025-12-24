<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Question extends Model {


    protected $guarded = [];


    public function answers() {
        return $this->belongsToMany(Answer::class)
                    ->withPivot('is_correct')
                    ->withTimestamps();
    }
}