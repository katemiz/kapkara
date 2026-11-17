<?php

namespace App\Console\Commands;

use App\Models\EurobondCoupon;
use App\Notifications\CouponPaymentReminder;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Notification;
use Throwable;

class CouponReminderCommand extends Command
{
    protected $signature = 'coupons:remind {--days=7}';

    protected $description = 'Send reminder emails for upcoming eurobond coupon payments';

    public function handle(): int
    {
        $days = max(1, (int) $this->option('days'));
        $today = Carbon::today()->toDateString();
        $end = Carbon::today()->addDays($days)->toDateString();

        $coupons = EurobondCoupon::with('asset')
            ->whereNull('notified_at')
            ->whereBetween('payment_date', [$today, $end])
            ->orderBy('payment_date')
            ->get();

        $sent = 0;

        foreach ($coupons as $coupon) {
            // Claim the coupon atomically so overlapping runs cannot send twice.
            $claimed = EurobondCoupon::whereKey($coupon->id)
                ->whereNull('notified_at')
                ->update(['notified_at' => now()]);

            if (! $claimed) {
                continue;
            }

            $recipient = $coupon->asset?->created_user_mail ?: config('mail.from.address');

            try {
                Notification::route('mail', $recipient)->notify(
                    new CouponPaymentReminder($coupon),
                );
                $sent += 1;
            } catch (Throwable $exception) {
                // Release the claim so a later run can retry.
                $coupon->update(['notified_at' => null]);
                report($exception);
                $this->error("Failed to notify for coupon #{$coupon->id}: {$exception->getMessage()}");
            }
        }

        $this->info("Sent {$sent} coupon reminder(s).");

        return self::SUCCESS;
    }
}
