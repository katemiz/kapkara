<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class UploadService
{
    protected const PRESETS = [
        "allOf" =>
            "mimes:pdf,docx,xlsx,pptx,txt,zip,rar,jpg,jpeg,png,webp,mp4,mov,csv,xlsx,json,xml,mat,dwg,dxf,step,sldprt,sldasm",
        "engineering" => "mimes:pdf,dwg,dxf,step,sldprt,sldasm,zip",
        "document" => "mimes:pdf,docx,xlsx,pptx,txt,zip,rar",
        "visual" => "mimes:jpg,jpeg,png,webp,mp4,mov",
        "data" => "mimes:csv,xlsx,json,xml,mat",
    ];

    /**
     * @param Request $request The current request
     * @param Model $model The Eloquent model to attach media to
     * @param string $inputName The form input key (e.g., 'materialFiles')
     * @param string $collection The Spatie collection name
     * @param array $rules Custom validation rules for the files : if null no file type validation is performed
     */
    public static function uploadMultiple(
        Request $request,
        Model $model,
        string $inputName = "files",
        string $presetKey = "document",
        string $collection = "attachments",
        int $maxSize = 20480, // 20MB Default
    ): int {
        $rule = self::PRESETS[$presetKey] ?? self::PRESETS["document"];

        // 1. Dynamic Validation
        $request->validate([
            "$inputName.*" => [$rule, "max:$maxSize"],
        ]);

        $uploadedCount = 0;

        if ($request->hasFile($inputName)) {
            foreach ($request->file($inputName) as $file) {
                if ($file->isValid()) {
                    $model->addMedia($file)->toMediaCollection($collection);
                    $uploadedCount++;
                }
            }
        }

        return $uploadedCount;
    }
}
