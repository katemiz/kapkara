<script>
    import Layout from "$modules/Base/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";
    import Paginate from "$components/Paginate.svelte";
    import TableRecordsInfo from "$components/TableRecordsInfo.svelte";

    import { Search, Plus, X, Eye, Pencil } from "@lucide/svelte";
    import { router } from "@inertiajs/svelte";

    let {
        eurobondAssets,
        filters,
        per_page,
        couponYears = [],
        assetTotals = {},
        personOptions = [],
        selectedPerson = "ALL",
    } = $props();

    let activeTab = $state("assets");
    let clearSearchIcon = $state(false);
    let query = $state(filters.search ?? "");
    let person = $state(selectedPerson);

    $effect(() => {
        const currentQuery = query;
        const currentPerson = person;

        clearSearchIcon = !!currentQuery;

        if (
            currentQuery &&
            currentQuery.length > 0 &&
            currentQuery.length <= 2
        ) {
            return;
        }

        doSearch();
    });

    function doSearch() {
        router.get(
            "/eurobond-assets",
            { search: query, person },
            {
                preserveState: true,
                replace: true,
                preserveScroll: true,
            },
        );
    }

    function markPaid(couponId) {
        router.patch(
            `/eurobond-assets/coupons/${couponId}/pay`,
            { search: query, person },
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    }

    function isPastDue(date) {
        return new Date(date).getTime() < Date.now();
    }

    function formatDate(date) {
        if (!date) {
            return "";
        }

        return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
            new Date(date),
        );
    }

    function formatAmount(asset) {
        return Number(asset.amount).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    function formatMoney(value) {
        return Number(value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }
</script>

<Layout>
    <section class="section container">
        <Title title="Eurobond Assets" subtitle="List of All Eurobond Assets" />

        <nav class="level is-mobile">
            <div class="level-left"></div>
            <div class="level-right">
                <div class="field is-grouped is-align-items-center">
                    <div class="control">
                        <label class="label is-small mb-0" for="person-filter">
                            Person
                        </label>
                    </div>
                    <div class="control">
                        <div class="select is-small">
                            <select id="person-filter" bind:value={person}>
                                <option value="ALL">ALL</option>
                                {#each personOptions as option}
                                    <option value={option}>{option}</option>
                                {/each}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="tabs">
            <ul>
                <li class={activeTab === "assets" ? "is-active" : ""}>
                    <a
                        role="button"
                        tabindex="0"
                        onclick={() => (activeTab = "assets")}
                    >
                        All Eurobond Assets
                    </a>
                </li>
                {#each couponYears as block}
                    <li
                        class={activeTab === String(block.year)
                            ? "is-active"
                            : ""}
                    >
                        <a
                            role="button"
                            tabindex="0"
                            onclick={() => (activeTab = String(block.year))}
                        >
                            {block.year} Coupons
                        </a>
                    </li>
                {/each}
            </ul>
        </div>

        {#if activeTab === "assets"}
            <nav class="level is-mobile">
                <div class="level-left">
                    <p class="buttons">
                        <a
                            href="/eurobond-assets/create"
                            class="button is-link"
                        >
                            <span class="icon is-small">
                                <Plus size="16" />
                            </span>
                            <span>Add Eurobond Asset</span>
                        </a>
                    </p>
                </div>

                <div class="level-right">
                    <div class="control has-icons-right">
                        <input
                            bind:value={query}
                            class="input"
                            type="text"
                            placeholder="Search..."
                        />
                        {#if clearSearchIcon}
                            <button
                                class="icon is-small is-right is-clickable"
                                onclick={() => {
                                    query = "";
                                    clearSearchIcon = false;
                                    doSearch();
                                }}
                                style="border:none; background:none;"
                            >
                                <X size="16" />
                            </button>
                        {:else}
                            <span class="icon is-small is-right">
                                <Search size="16" />
                            </span>
                        {/if}
                    </div>
                </div>
            </nav>

            <TableRecordsInfo results={eurobondAssets} {per_page} />

            {#if eurobondAssets.data.length > 0}
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Eurobond</th>
                            <th>Person</th>
                            <th>Due Date</th>
                            <th class="has-text-right">Amount</th>
                            <th class="has-text-right">Coupon %</th>
                            <th class="has-text-right">Buy Price</th>
                            <th class="has-text-right">Yearly Coupon</th>
                            <th>Unit</th>
                            <th>First Coupon</th>
                            <th class="has-text-right">Coupons</th>
                            <th class="has-text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {#each eurobondAssets.data as asset}
                            <tr>
                                <td>E{asset.id}</td>
                                <td>{asset.bank}-{asset.name}</td>
                                <td>{asset.person}</td>
                                <td>{formatDate(asset.due_date)}</td>
                                <td class="has-text-right"
                                    >{formatAmount(asset)}</td
                                >
                                <td class="has-text-right">
                                    {asset.coupon_interest_rate}%
                                </td>
                                <td class="has-text-right">{asset.buy_price}</td
                                >
                                <td class="has-text-right">
                                    {formatMoney(
                                        (Number(asset.amount) *
                                            Number(
                                                asset.coupon_interest_rate,
                                            )) /
                                            100,
                                    )}
                                </td>
                                <td>{asset.money_unit}</td>
                                <td>{formatDate(asset.first_coupon_date)}</td>
                                <td class="has-text-right">
                                    {asset.coupons_count}
                                </td>

                                <td class="has-text-right">
                                    <a href="/eurobond-assets/{asset.id}">
                                        <Eye size="24" />
                                    </a>

                                    <a
                                        href="/eurobond-assets/{asset.id}/edit"
                                        class="ml-2"
                                    >
                                        <Pencil size="20" />
                                    </a>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {:else}
                <div class="notification is-warning is-light">
                    No eurobond assets exist
                </div>
            {/if}

            <Paginate items={eurobondAssets} />

            <div class="box mt-5">
                <p class="heading">Total Amount</p>
                <div class="buttons">
                    {#each Object.entries(assetTotals) as [unit, total]}
                        <span class="tag is-medium is-link is-light">
                            {unit}
                            {formatMoney(total)}
                        </span>
                    {/each}
                </div>
            </div>
        {/if}

        {#each couponYears as block}
            {#if activeTab === String(block.year)}
                {#if block.coupons.length > 0}
                    <table class="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Payment Date</th>
                                <th>Asset</th>
                                <th>Person</th>
                                <th>Unit</th>
                                <th class="has-text-right">Amount</th>
                                <th>Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each block.coupons as coupon, index}
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{formatDate(coupon.payment_date)}</td>
                                    <td>
                                        <a
                                            href="/eurobond-assets/{coupon.asset
                                                ?.id}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {coupon.asset?.name}
                                        </a>
                                    </td>
                                    <td>{coupon.asset?.person}</td>
                                    <td>{coupon.asset?.money_unit}</td>
                                    <td class="has-text-right">
                                        {#if coupon.is_last}
                                            <span
                                                class="has-text-weight-semibold mr-3"
                                                >Last</span
                                            >
                                        {/if}{formatMoney(coupon.amount)}
                                    </td>

                                    <td>
                                        {#if coupon.paid_at}
                                            {formatDate(coupon.paid_at)}
                                        {:else if isPastDue(coupon.payment_date)}
                                            <button
                                                type="button"
                                                class="button is-small is-link is-light"
                                                onclick={() =>
                                                    markPaid(coupon.id)}
                                            >
                                                Set Paid
                                            </button>
                                        {/if}
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                {:else}
                    <div class="notification is-warning is-light">
                        No coupon payments in {block.year}
                    </div>
                {/if}

                <div class="box mt-5">
                    <p class="heading">Total value for {block.year}</p>
                    <div class="buttons">
                        {#each Object.entries(block.totals) as [unit, total]}
                            <span class="tag is-medium is-link is-light">
                                {unit}
                                {formatMoney(total)}
                            </span>
                        {/each}
                    </div>
                </div>
            {/if}
        {/each}
    </section>
</Layout>
