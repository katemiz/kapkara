<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EurobondCoupon extends Model
{
    protected $guarded = [];

    protected $casts = [
        'payment_date' => 'date',
        'notified_at' => 'datetime',
        'paid_at' => 'datetime',
    ];

    public function asset(): BelongsTo
    {
        return $this->belongsTo(EurobondAsset::class, 'eurobond_asset_id');
    }
}
