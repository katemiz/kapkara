<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{

    protected $fillable = [
        'code',
        'slug',
        'name',
        'description',
    ];

    // Module.php
    public function roles()
    {
        return $this->hasMany(Role::class);
    }
    public function permissions()
    {
        return $this->hasMany(Permission::class);
    }
}





