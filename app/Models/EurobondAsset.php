<?php

namespace App\Models;

use App\Traits\HasUserstamps;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EurobondAsset extends Model
{
    protected $guarded = [];

    protected $appends = ["created_user_mail", "updated_user_mail"];

    use HasUserstamps;

    public function coupons(): HasMany
    {
        return $this->hasMany(EurobondCoupon::class, 'eurobond_asset_id');
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
