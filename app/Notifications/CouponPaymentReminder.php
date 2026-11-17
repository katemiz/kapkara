<?php

namespace App\Notifications;

use App\Models\EurobondCoupon;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CouponPaymentReminder extends Notification
{
    use Queueable;

    public function __construct(public EurobondCoupon $coupon)
    {
    }

    /**
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $asset = $this->coupon->asset;
        $date = $this->coupon->payment_date->toFormattedDateString();
        $amount = number_format($this->coupon->amount, 2);

        return (new MailMessage)
            ->subject("Upcoming coupon payment: {$asset->name}")
            ->line("A coupon payment for {$asset->name} is due on {$date}.")
            ->line("Amount: {$amount} {$asset->money_unit}")
            ->line('Please make sure the payment is received on time.');
    }
}
