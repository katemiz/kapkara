<?php

namespace App\Http\Controllers;

use App\Models\Material;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

use Inertia\Inertia;
use Inertia\Response;

use App\Services\UploadService;

class ConfiguratorController extends Controller
{
    // This will hold any support data needed for the form (e.g., dropdown options)

    public $supportFixedData = [
        "materialCategories" => [
            ["value" => "1", "label" => "Aluminium"],
            ["value" => "2", "label" => "Steel"],
            ["value" => "3", "label" => "Copper"],
            ["value" => "4", "label" => "Plastic"],
        ],

        "materialForms" => [
            ["value" => "1", "label" => "Sheet/Plate"],
            ["value" => "2", "label" => "Round/Bar"],
            ["value" => "3", "label" => "Tube/Profile"],
            ["value" => "4", "label" => "Casting"],
        ],

        "materialIsActive" => [
            ["value" => 0, "label" => "Inactive"],
            ["value" => 1, "label" => "Active"],
        ],
    ];



    public $mast_types = [
        [
            "value" => "MTNX",
            "label" => "MTNX Electromechanical Mast",
            "head_height" => 55,
            "base_adapter_height" => 50,
            "is_default" => true,
        ],
        [
            "value" => "MTWR",
            "label" => "MTWR Electromechanical Mast with Steel Ropes",
            "head_height" => 60,
            "base_adapter_height" => 55,
            "is_default" => false,
        ],
        [
            "value" => "MTPR",
            "label" => "MTPR Pneumatical Mast",
            "head_height" => 70,
            "base_adapter_height" => 60,
            "is_default" => false,
        ],
    ];




    // This is the default structure for a new MODEL, used when creating a new one

    public $params = [
        "base_adapter_height" => 50,
        "payload_adapter_height" => 15,
        "head_height" => 55,
        "material" => "6063",
        "tube_length" => 2000,
        "start_tube_no" => 13,
        "end_tube_no" => 15,
        "overlap" => 500,
        "terrain_category" => "II",
        "wind_speed" => 120,
        "sail_area" => 1.2,
        "x_offset" => 100,
        "z_offset" => null,
        "payload_mass" => 400,
        "motor_id" => 1,
        "gearbox_id" => 1,
        "tip_deflection_percentage" => 75,
        "side_adapter_z" => null,
    ];

    /**
     * Display a listing of questions.
     */
    public function index(Request $request): Response
    {

        $this->params["side_adapter_z"] = $this->params["tube_length"] + $this->params["base_adapter_height"] - $this->params["overlap"] / 2;

        if (isset($request["qr"])) {
            $p = explode("-", $request["qr"]);

            //dd($p);

            $this->params["start_tube_no"] = (int) $p["0"];
            $this->params["end_tube_no"] = (int) $p["1"];
            $this->params["overlap"] = (int) $p["2"];
            $this->params["base_adapter_height"] = (int) $p["3"];
            $this->params["payload_adapter_height"] = (int) $p["4"];
            $this->params["sail_area"] = (float) $p["5"];
            $this->params["wind_speed"] = (int) $p["6"];
            $this->params["head_height"] = (int) $p["7"];
            $this->params["tube_length"] = (int) $p["8"];
            $this->params["terrain_category"] = $p["9"];
            $this->params["x_offset"] = (int) $p["10"];
            $this->params["z_offset"] = (int) $p["11"];
            $this->params["payload_mass"] = $p["12"];
            $this->params["motor_id"] = (int) $p["13"];
            $this->params["gearbox_id"] = (int) $p["14"];
        }

        return Inertia::render("Modules/PDM/Pages/Engineering/Configurator", [
            "per_page" => config("pagination.per_page"),
            "filters" => $request->only(["search"]), // 'filters' sends the search term back to Svelte so the input stays filled
            "params1" => $this->params,
            "supportFixedData" => $this->supportFixedData,
            "materials" => Material::query()
                ->when($request->input("search"), function ($query, $search) {
                    $query
                        ->where("description", "like", "%{$search}%")
                        ->orWhere("specification", "like", "%{$search}%")
                        ->orWhere("remarks", "like", "%{$search}%");
                })
                ->latest()
                ->paginate(config("pagination.per_page"))
                ->withQueryString(), // VERY IMPORTANT: keeps search param during pagination
        ]);
    }











}
