<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'is_active',
        'created_by',
        'updated_by',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'organization_user')
            ->withPivot('is_owner', 'joined_at', 'is_active')
            ->withTimestamps();
    }





    public function modules()
    {
        return $this->belongsToMany(Module::class)->withPivot('is_active');
    }




    public function departments()
    {
        return $this->hasMany(Department::class);
    }

    public function rootDepartments()
    {
        return $this->departments()->whereNull('parent_id');
    }


}


