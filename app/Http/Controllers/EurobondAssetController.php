<?php

namespace App\Http\Controllers;

use App\Models\EurobondAsset;
use App\Models\EurobondCoupon;
use App\Services\CouponScheduleService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EurobondAssetController extends Controller
{
    public function __construct(private CouponScheduleService $couponSchedule)
    {
    }

    public $permissions = [
        'is_editable' => false,
        'is_deletable' => false,
    ];

    /**
     * Display a paginated, searchable list of eurobond assets.
     */
    public function index(Request $request): Response
    {
        $search = $request->input('search');
        $persons = ['KAT', 'AST', 'MDT', 'HDT'];
        $person = $request->input('person', 'ALL');
        $person = in_array($person, $persons, true) ? $person : 'ALL';

        return Inertia::render('Modules/Base/Pages/EurobondAsset/Index', [
            'eurobondAssets' => EurobondAsset::query()
                ->withCount('coupons')
                ->when($person !== 'ALL', fn ($query) => $query->where('person', $person))
                ->when($search, function ($query, $search) {
                    $query->where(function ($nestedQuery) use ($search) {
                        $nestedQuery->where('name', 'like', "%{$search}%")
                            ->orWhere('money_unit', 'like', "%{$search}%");
                    });
                })
                ->latest()
                ->paginate(config('pagination.per_page'))
                ->withQueryString(),
            'filters' => ['search' => $search, 'person' => $person],
            'per_page' => config('pagination.per_page'),
            'couponYears' => $this->couponYears($person),
            'assetTotals' => $this->assetTotals($person),
            'personOptions' => $persons,
            'selectedPerson' => $person,
        ]);
    }

    /**
     * Total amount per currency across all eurobond assets.
     *
     * @return array<string, float>
     */
    private function assetTotals(string $person): array
    {
        $totals = ['USD' => 0.0, 'EUR' => 0.0];

        $assets = EurobondAsset::query()
            ->when($person !== 'ALL', fn ($query) => $query->where('person', $person))
            ->get(['money_unit', 'amount']);

        foreach ($assets as $asset) {
            $totals[$asset->money_unit] += (float) $asset->amount;
        }

        return array_map(fn ($value) => round($value, 2), $totals);
    }

    /**
     * Coupon payments for this year and the next two, with totals for both currencies.
     *
     * @return array<int, array{year: int, coupons: mixed, totals: array<string, float>}>
     */
    private function couponYears(string $person): array
    {
        $lastDates = EurobondCoupon::query()
            ->selectRaw('eurobond_asset_id, MAX(payment_date) as last_date')
            ->groupBy('eurobond_asset_id')
            ->pluck('last_date', 'eurobond_asset_id');

        $years = [];

        foreach ([0, 1, 2] as $offset) {
            $year = now()->year + $offset;
            $coupons = EurobondCoupon::with('asset')
                ->whereYear('payment_date', $year)
                ->when($person !== 'ALL', fn ($query) => $query->whereHas(
                    'asset',
                    fn ($assetQuery) => $assetQuery->where('person', $person),
                ))
                ->orderBy('payment_date')
                ->get();

            $totals = ['USD' => 0.0, 'EUR' => 0.0];

            foreach ($coupons as $coupon) {
                // The final row shows the full return, but only the coupon part
                // counts toward the yearly total.
                $isFinalCoupon = substr((string) ($lastDates[$coupon->eurobond_asset_id] ?? ''), 0, 10)
                    === $coupon->payment_date->toDateString();
                $coupon->is_last = $isFinalCoupon;

                $couponOnly = $isFinalCoupon
                    ? round((float) $coupon->amount - (float) $coupon->asset->amount, 2)
                    : (float) $coupon->amount;

                $totals[$coupon->asset->money_unit] += $couponOnly;
            }

            $totals = array_map(fn ($value) => round($value, 2), $totals);

            $years[] = [
                'year' => $year,
                'coupons' => $coupons,
                'totals' => $totals,
            ];
        }

        return $years;
    }

    /**
     * Show the form for creating a new eurobond asset.
     */
    public function create(): Response
    {
        return Inertia::render('Modules/Base/Pages/EurobondAsset/Form', [
            'eurobondAsset' => null,
            'isEdit' => false,
            'moneyUnits' => $this->moneyUnits(),
            'banks' => $this->banks(),
            'persons' => $this->persons(),
        ]);
    }

    /**
     * Store a newly created eurobond asset.
     */
    public function store(Request $request): RedirectResponse
    {
        $asset = EurobondAsset::create($this->readInput($request));
        $this->couponSchedule->regenerate($asset);

        return redirect()->route('eurobond-assets.show', $asset->id)
            ->with('success', 'Eurobond asset created successfully.');
    }

    /**
     * Display the specified eurobond asset.
     */
    public function show(int $idEurobondAsset): Response
    {
        $asset = EurobondAsset::findOrFail($idEurobondAsset);
        $this->checkPermissions($asset);

        return Inertia::render('Modules/Base/Pages/EurobondAsset/Show', [
            'eurobondAsset' => $asset,
            'permissions' => $this->permissions,
            'yearlyCouponAmount' => $this->couponSchedule->yearlyCouponAmount($asset),
            'couponAmount' => $this->couponSchedule->couponAmount($asset),
            'paymentsPerYear' => $this->couponSchedule->paymentsPerYear($asset->money_unit),
            'coupons' => $asset->coupons()->orderBy('payment_date')->get(),
        ]);
    }

    /**
     * Show the form for editing the specified eurobond asset.
     */
    public function edit(int $idEurobondAsset): Response
    {
        $asset = EurobondAsset::findOrFail($idEurobondAsset);

        return Inertia::render('Modules/Base/Pages/EurobondAsset/Form', [
            'eurobondAsset' => $asset->toArray(),
            'isEdit' => true,
            'moneyUnits' => $this->moneyUnits(),
            'banks' => $this->banks(),
            'persons' => $this->persons(),
        ]);
    }

    /**
     * Update the specified eurobond asset.
     */
    public function update(Request $request, int $idEurobondAsset): RedirectResponse
    {
        $asset = EurobondAsset::findOrFail($idEurobondAsset);
        $asset->update($this->readInput($request));
        $this->couponSchedule->regenerate($asset);

        return redirect()->route('eurobond-assets.show', $asset->id)
            ->with('success', 'Eurobond asset updated successfully.');
    }

    /**
     * Remove the specified eurobond asset.
     */
    public function destroy(int $idEurobondAsset): RedirectResponse
    {
        $asset = EurobondAsset::findOrFail($idEurobondAsset);
        $asset->delete();

        return redirect()->route('eurobond-assets.index')
            ->with('success', 'Eurobond asset deleted successfully.');
    }

    /**
     * @return array<string, mixed>
     */
    private function readInput(Request $request): array
    {
        $validated = $request->validate([
            'name' => 'required|string|max:1000',
            'due_date' => 'required|date',
            'amount' => 'required|numeric|min:0',
            'coupon_interest_rate' => 'required|numeric|min:0|max:100',
            'buy_price' => 'required|numeric|gt:0',
            'money_unit' => 'required|in:EUR,USD',
            'bank' => 'required|in:ISBANK,AKBANK',
            'person' => 'required|in:KAT,AST,MDT,HDT',
            'first_coupon_date' => 'required|date|before_or_equal:due_date',
        ]);

        return [
            'name' => $validated['name'],
            'due_date' => $validated['due_date'],
            'amount' => $validated['amount'],
            'coupon_interest_rate' => $validated['coupon_interest_rate'],
            'buy_price' => $validated['buy_price'],
            'money_unit' => $validated['money_unit'],
            'bank' => $validated['bank'],
            'person' => $validated['person'],
            'first_coupon_date' => $validated['first_coupon_date'],
        ];
    }

    /**
     * @return array<int, array{value: string, label: string}>
     */
    private function moneyUnits(): array
    {
        return [
            ['value' => 'USD', 'label' => 'USD'],
            ['value' => 'EUR', 'label' => 'EUR'],
        ];
    }

    /**
     * @return array<int, array{value: string, label: string}>
     */
    private function banks(): array
    {
        return [
            ['value' => 'ISBANK', 'label' => 'ISBANK'],
            ['value' => 'AKBANK', 'label' => 'AKBANK'],
        ];
    }

    /**
     * @return array<int, array{value: string, label: string}>
     */
    private function persons(): array
    {
        return [
            ['value' => 'KAT', 'label' => 'KAT'],
            ['value' => 'AST', 'label' => 'AST'],
            ['value' => 'MDT', 'label' => 'MDT'],
            ['value' => 'HDT', 'label' => 'HDT'],
        ];
    }

    private function checkPermissions(EurobondAsset $asset): void
    {
        $this->permissions['is_editable'] = $asset->created_by === auth()->id();
        $this->permissions['is_deletable'] = $asset->created_by === auth()->id();
    }
}
