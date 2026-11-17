<script>
    import { useForm } from "@inertiajs/svelte";

    import Layout from "$modules/Base/Shared/Layout.svelte";
    import FormInput from "$components/FormInput.svelte";
    import FormDate from "$components/FormDate.svelte";
    import FormSelect from "$components/FormSelect.svelte";
    import Title from "$components/Title.svelte";

    import { ChevronRight, X } from "@lucide/svelte";

    let {
        eurobondAsset = null,
        isEdit = false,
        moneyUnits = [],
        banks = [],
        persons = [],
    } = $props();

    let form = useForm({
        name: eurobondAsset?.name ?? "",
        due_date: eurobondAsset?.due_date ?? "",
        amount: eurobondAsset?.amount ?? "",
        coupon_interest_rate: eurobondAsset?.coupon_interest_rate ?? "",
        buy_price: eurobondAsset?.buy_price ?? "",
        money_unit: eurobondAsset?.money_unit ?? "",
        bank: eurobondAsset?.bank ?? "",
        person: eurobondAsset?.person ?? "",
        first_coupon_date: eurobondAsset?.first_coupon_date ?? "",
    });

    function submit(event) {
        event.preventDefault();

        if (isEdit) {
            $form.put(`/eurobond-assets/${eurobondAsset.id}`);
        } else {
            $form.post("/eurobond-assets");
        }
    }
</script>

<Layout>
    <section class="section">
        <Title
            title="Eurobond Assets"
            subtitle={isEdit && eurobondAsset != null
                ? `Edit Eurobond Asset E${eurobondAsset.id}`
                : "Add a New Eurobond Asset"}
        />

        <form onsubmit={submit} novalidate>
            <div class="columns">
                <div class="column is-8">
                    <FormInput
                        {form}
                        name="name"
                        label="Eurobond Name / Number"
                        placeholder="Enter name or number"
                        required={true}
                    />
                </div>
                <div class="column is-4">
                    <FormSelect
                        {form}
                        name="money_unit"
                        label="Money Unit"
                        placeholder="Select currency"
                        options={moneyUnits}
                        required={true}
                        class="is-fullwidth"
                    />
                </div>
            </div>

            <div class="columns">
                <div class="column is-6">
                    <FormSelect
                        {form}
                        name="bank"
                        label="Bank"
                        placeholder="Select bank"
                        options={banks}
                        required={true}
                        class="is-fullwidth"
                    />
                </div>
                <div class="column is-6">
                    <FormSelect
                        {form}
                        name="person"
                        label="Person"
                        placeholder="Select person"
                        options={persons}
                        required={true}
                        class="is-fullwidth"
                    />
                </div>
            </div>

            <div class="columns">
                <div class="column is-6">
                    <FormDate
                        {form}
                        name="first_coupon_date"
                        label="First Coupon Date"
                        lang="en"
                        required={true}
                    />
                </div>
                <div class="column is-6">
                    <FormDate
                        {form}
                        name="due_date"
                        label="Due Date"
                        lang="en"
                        required={true}
                    />
                </div>
            </div>

            <p class="help mb-4">
                Number of coupons is calculated automatically from these dates
                and the currency: every 6 months for USD, yearly for EUR.
            </p>

            <div class="columns">
                <div class="column is-6">
                    <FormInput
                        {form}
                        name="amount"
                        label="Amount"
                        type="number"
                        min="0"
                        step="0.01"
                        required={true}
                    />
                </div>
                <div class="column is-4">
                    <FormInput
                        {form}
                        name="coupon_interest_rate"
                        label="Coupon Interest Rate (%)"
                        type="number"
                        min="0"
                        max="100"
                        step="0.001"
                        required={true}
                    />
                </div>
                <div class="column is-4">
                    <FormInput
                        {form}
                        name="buy_price"
                        label="Buy Price (Amount Paid)"
                        type="number"
                        min="0"
                        step="0.001"
                        required={true}
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <a
                        href={isEdit && eurobondAsset != null
                            ? `/eurobond-assets/${eurobondAsset.id}`
                            : "/eurobond-assets"}
                        class="button"
                    >
                        <span class="icon"><X size="16" /></span>
                        <span>Cancel</span>
                    </a>
                </div>
                <div class="control">
                    <button
                        type="submit"
                        class="button is-link"
                        disabled={$form.processing}
                    >
                        <span class="icon"><ChevronRight size="16" /></span>
                        <span>
                            {$form.processing
                                ? "Submitting ..."
                                : isEdit
                                  ? "Update"
                                  : "Create"} Eurobond Asset
                        </span>
                    </button>
                </div>
            </div>
        </form>
    </section>
</Layout>
