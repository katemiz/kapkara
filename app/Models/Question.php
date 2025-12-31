<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUserstamps;
use App\Models\Answer;

class Question extends Model {

    use HasUserstamps;

    protected $guarded = [];

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