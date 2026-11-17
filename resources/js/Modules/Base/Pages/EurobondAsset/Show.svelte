<script>
    import Layout from "$modules/Base/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import DeleteButton from "$components/DeleteButton.svelte";

    import { TableOfContents, Pencil } from "@lucide/svelte";

    let {
        eurobondAsset,
        permissions,
        yearlyCouponAmount,
        couponAmount,
        paymentsPerYear,
        coupons,
    } = $props();

    function formatAmount(asset) {
        return Number(asset.amount).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    function formatDate(date) {
        if (!date) {
            return "-";
        }

        return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
            new Date(date),
        );
    }
</script>

<Layout>
    <section class="section container">
        <Title
            title={eurobondAsset.name}
            subtitle="Eurobond Asset Details"
        />

        <div class="box mt-6">
            <nav class="level is-mobile">
                <div class="level-left">
                    <p class="buttons">
                        <a href="/eurobond-assets" class="button is-ghost">
                            <span class="icon is-small">
                                <TableOfContents size="20" />
                            </span>
                        </a>
                    </p>
                </div>

                <div class="level-right">
                    <p class="buttons">
                        {#if permissions.is_editable}
                            <a
                                href="/eurobond-assets/{eurobondAsset.id}/edit"
                                class="button is-link is-light"
                            >
                                <span class="icon is-small">
                                    <Pencil size="16" />
                                </span>
                                <span>Edit</span>
                            </a>
                        {/if}

                        {#if permissions.is_deletable}
                            <DeleteButton
                                url={`/eurobond-assets/${eurobondAsset.id}`}
                            />
                        {/if}
                    </p>
                </div>
            </nav>

            <table class="table is-fullwidth">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>E{eurobondAsset.id}</td>
                    </tr>
                    <tr>
                        <th>Name / Number</th>
                        <td>{eurobondAsset.name}</td>
                    </tr>
                    <tr>
                        <th>Bank</th>
                        <td>{eurobondAsset.bank}</td>
                    </tr>
                    <tr>
                        <th>Person</th>
                        <td>{eurobondAsset.person}</td>
                    </tr>
                    <tr>
                        <th>Due Date</th>
                        <td>{formatDate(eurobondAsset.due_date)}</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td>
                            {formatAmount(eurobondAsset)}
                            {eurobondAsset.money_unit}
                        </td>
                    </tr>
                    <tr>
                        <th>Coupon Interest Rate</th>
                        <td>{eurobondAsset.coupon_interest_rate}%</td>
                    </tr>
                    <tr>
                        <th>Buy Price</th>
                        <td>
                            {formatAmount({ amount: eurobondAsset.buy_price })}
                            {eurobondAsset.money_unit}
                        </td>
                    </tr>
                    <tr>
                        <th>Money Unit</th>
                        <td>{eurobondAsset.money_unit}</td>
                    </tr>
                    <tr>
                        <th>First Coupon Date</th>
                        <td>{formatDate(eurobondAsset.first_coupon_date)}</td>
                    </tr>
                    <tr>
                        <th>Number of Coupons Until Due Date</th>
                        <td>{coupons.length}</td>
                    </tr>
                    <tr>
                        <th>Created By</th>
                        <td>{eurobondAsset.created_user_mail ?? "-"}</td>
                    </tr>
                    <tr>
                        <th>Updated By</th>
                        <td>{eurobondAsset.updated_user_mail ?? "-"}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="box mt-5">
            <h2 class="title is-5">Coupon Summary</h2>
            <div class="columns">
                <div class="column is-4">
                    <p class="heading">Yearly Coupon Total</p>
                    <p class="title is-4">
                        {formatAmount({ amount: yearlyCouponAmount })}
                        {eurobondAsset.money_unit}
                    </p>
                </div>
                <div class="column is-4">
                    <p class="heading">Payment Frequency</p>
                    <p class="title is-5">
                        {paymentsPerYear === 2
                            ? "Every 6 months"
                            : "Yearly"}
                    </p>
                </div>
                <div class="column is-4">
                    <p class="heading">Amount per Payment</p>
                    <p class="title is-5">
                        {formatAmount({ amount: couponAmount })}
                        {eurobondAsset.money_unit}
                    </p>
                </div>
            </div>
            <p class="help mt-2">
                The final coupon payment also returns the original amount of
                {formatAmount(eurobondAsset)}
                {eurobondAsset.money_unit}.
            </p>
        </div>

        <div class="box mt-5">
            <h2 class="title is-5">Coupon Payment Schedule</h2>
            {#if coupons.length > 0}
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Payment Date</th>
                            <th class="has-text-right">Amount</th>
                            <th>Reminder Sent</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each coupons as coupon}
                            <tr>
                                <td>{coupon.sequence}</td>
                                <td>{formatDate(coupon.payment_date)}</td>
                                <td class="has-text-right">
                                    {formatAmount(coupon)}
                                    {eurobondAsset.money_unit}
                                </td>
                                <td>{formatDate(coupon.notified_at)}</td>
                                <td>{formatDate(coupon.paid_at)}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {:else}
                <div class="notification is-warning is-light">
                    No coupon payments scheduled
                </div>
            {/if}
        </div>
    </section>
</Layout>
