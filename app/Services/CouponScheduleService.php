<?php

namespace App\Services;

use App\Models\EurobondAsset;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class CouponScheduleService
{
    /**
     * USD bonds pay twice a year, EUR bonds once a year.
     */
    public function paymentsPerYear(string $moneyUnit): int
    {
        return $moneyUnit === 'USD' ? 2 : 1;
    }

    /**
     * @return array<int, string> Payment dates (YYYY-MM-DD), starting with the first coupon date.
     */
    public function paymentDates(
        string $firstCouponDate,
        string $dueDate,
        string $moneyUnit,
    ): array {
        $intervalMonths = intdiv(12, $this->paymentsPerYear($moneyUnit));
        $first = Carbon::parse($firstCouponDate)->startOfDay();
        $due = Carbon::parse($dueDate)->startOfDay();

        $dates = [];
        $payment = 0;

        while (true) {
            // Always add to the original date so short months do not cause drift.
            $paymentDate = $first->copy()->addMonths($payment * $intervalMonths);

            if ($paymentDate->gt($due)) {
                break;
            }

            $dates[] = $paymentDate->toDateString();
            $payment += 1;
        }

        return $dates;
    }

    /**
     * Total coupon cash for one full year. The yearly rate is applied to the
     * bond amount (par); the buy price is only the cash paid for it.
     */
    public function yearlyCouponAmount(EurobondAsset $asset): float
    {
        return round((float) $asset->amount * (float) $asset->coupon_interest_rate / 100, 2);
    }

    /**
     * Cash paid on each coupon date.
     */
    public function couponAmount(EurobondAsset $asset): float
    {
        return round(
            $this->yearlyCouponAmount($asset) / $this->paymentsPerYear($asset->money_unit),
            2,
        );
    }

    /**
     * Sync the derived coupon rows with the asset's current dates, amount and currency.
     * Existing rows keep their notified_at / paid_at state when the date is unchanged.
     */
    public function regenerate(EurobondAsset $asset): void
    {
        $dates = $this->paymentDates(
            $asset->first_coupon_date,
            $asset->due_date,
            $asset->money_unit,
        );
        $amount = $this->couponAmount($asset);
        $lastIndex = count($dates) - 1;

        DB::transaction(function () use ($asset, $dates, $amount, $lastIndex) {
            foreach ($dates as $index => $date) {
                // The final payment also returns the original bond amount.
                $paymentAmount = $index === $lastIndex
                    ? round($amount + (float) $asset->amount, 2)
                    : $amount;

                $asset->coupons()->updateOrCreate(
                    ['payment_date' => $date],
                    ['sequence' => $index + 1, 'amount' => $paymentAmount],
                );
            }

            $asset->coupons()->whereNotIn('payment_date', $dates)->delete();
        });
    }
}
